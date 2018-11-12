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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dW=function(){}
var dart=[["","",,H,{"^":"",oO:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dZ==null){H.nI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cl("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$de()]
if(v!=null)return v
v=H.nN(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$de(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
r:{"^":"b;",
v:function(a,b){return a===b},
gV:function(a){return H.bO(a)},
i:["eP",function(a){return"Instance of '"+H.bm(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iE:{"^":"r;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isU:1},
eK:{"^":"r;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
df:{"^":"r;",
gV:function(a){return 0},
i:["eR",function(a){return String(a)}]},
jk:{"^":"df;"},
cm:{"^":"df;"},
cf:{"^":"df;",
i:function(a){var z=a[$.$get$er()]
if(z==null)return this.eR(a)
return"JavaScript function for "+H.i(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscb:1},
bi:{"^":"r;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.D("add"))
a.push(b)},
iL:function(a,b){if(!!a.fixed$length)H.p(P.D("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cj(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.p(P.D("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aH(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.i(a[y]))
return z.join(b)},
ii:function(a){return this.n(a,"")},
i8:function(a,b,c,d){var z,y,x
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aH(a))}return y},
i6:function(a,b,c){var z,y,x
H.m(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aH(a))}throw H.a(H.cD())},
i5:function(a,b){return this.i6(a,b,null)},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bZ:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gi4:function(a){if(a.length>0)return a[0]
throw H.a(H.cD())},
gav:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cD())},
aF:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.p(P.D("fill range"))
P.aZ(b,c,a.length,null,null,null)
for(z=b;z.R(0,c);z=z.B(0,1))a[z]=d},
dN:function(a,b){var z,y
H.m(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aH(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.dc(a,"[","]")},
gZ:function(a){return new J.aw(a,a.length,0,[H.y(a,0)])},
gV:function(a){return H.bO(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ct(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
a[b]=c},
$isj:1,
$ise:1,
t:{
iD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ct(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eH(new Array(a),b)},
eH:function(a,b){return J.bJ(H.c(a,[b]))},
bJ:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
oN:{"^":"bi;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cd:{"^":"r;",
j_:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
b9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
eB:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bk:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.D("Unexpected toString result: "+z))
x=J.aT(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
an:function(a,b){var z
if(typeof b!=="number")throw H.a(H.ae(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.dF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hg:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.dF(a,b)},
dF:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$ist:1,
$isa6:1},
eJ:{"^":"cd;",$iso:1},
eI:{"^":"cd;"},
ce:{"^":"r;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b<0)throw H.a(H.aS(a,b))
if(b>=a.length)H.p(H.aS(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aS(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.ct(b,null,null))
return a+b},
aZ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ae(b))
c=P.aZ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ae(c))
if(typeof c!=="number")return c.R()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.a(P.cj(b,null,null))
if(b>c)throw H.a(P.cj(b,null,null))
if(c>a.length)throw H.a(P.cj(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.u(a,b,null)},
j2:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iz:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
af:function(a,b){return this.iz(a,b," ")},
ek:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ej:function(a,b){return this.ek(a,b,0)},
hT:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hA(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseZ:1,
$ish:1}}],["","",,H,{"^":"",
cY:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cD:function(){return new P.dv("No element")},
iC:function(){return new P.dv("Too many elements")},
w:{"^":"kD;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.b.Y(this.a,b)},
$ascN:function(){return[P.o]},
$asz:function(){return[P.o]},
$asj:function(){return[P.o]},
$ase:function(){return[P.o]}},
ey:{"^":"j;"},
cF:{"^":"ey;$ti",
gZ:function(a){return new H.dj(this,this.gm(this),0,[H.am(this,"cF",0)])},
d3:function(a,b){return this.eQ(0,H.m(b,{func:1,ret:P.U,args:[H.am(this,"cF",0)]}))}},
dj:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aH(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iX:{"^":"j;a,b,$ti",
gZ:function(a){return new H.iY(J.b3(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
K:function(a,b){return this.b.$1(J.cs(this.a,b))},
$asj:function(a,b){return[b]}},
iY:{"^":"dd;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$asdd:function(a,b){return[b]}},
iZ:{"^":"cF;a,b,$ti",
gm:function(a){return J.ao(this.a)},
K:function(a,b){return this.b.$1(J.cs(this.a,b))},
$ascF:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dK:{"^":"j;a,b,$ti",
gZ:function(a){return new H.l9(J.b3(this.a),this.b,this.$ti)}},
l9:{"^":"dd;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
cz:{"^":"b;$ti"},
cN:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.am(this,"cN",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aF:function(a,b,c,d){H.A(d,H.am(this,"cN",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kD:{"^":"cE+cN;"}}],["","",,H,{"^":"",
i3:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nz:function(a){return init.types[H.F(a)]},
ht:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isJ},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jv:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bm:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$iscm){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.ap(w,1)
r=H.e_(H.c4(H.bb(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jn:function(){if(!!self.location)return self.location.href
return},
f0:function(a){var z,y,x,w,v
H.c4(a)
z=J.ao(a)
if(typeof z!=="number")return z.eK()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jw:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.f0(z)},
f1:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.jw(a)}return H.f0(a)},
jx:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eK()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bP:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aP(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
al:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ju:function(a){return a.b?H.al(a).getUTCFullYear()+0:H.al(a).getFullYear()+0},
js:function(a){return a.b?H.al(a).getUTCMonth()+1:H.al(a).getMonth()+1},
jo:function(a){return a.b?H.al(a).getUTCDate()+0:H.al(a).getDate()+0},
jp:function(a){return a.b?H.al(a).getUTCHours()+0:H.al(a).getHours()+0},
jr:function(a){return a.b?H.al(a).getUTCMinutes()+0:H.al(a).getMinutes()+0},
jt:function(a){return a.b?H.al(a).getUTCSeconds()+0:H.al(a).getSeconds()+0},
jq:function(a){return a.b?H.al(a).getUTCMilliseconds()+0:H.al(a).getMilliseconds()+0},
n:function(a){throw H.a(H.ae(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cj(b,"index",null)},
nt:function(a,b,c){if(a>c)return new P.cI(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cI(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ae:function(a){return new P.aF(!0,a,null,null)},
ni:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.eY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hB})
z.name=""}else z.toString=H.hB
return z},
hB:function(){return J.ac(this.dartException)},
p:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aH(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ol(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dg(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eX(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.ae(y)
if(m!=null)return z.$1(H.dg(H.H(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.dg(H.H(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eX(H.H(y),m))}}return z.$1(new H.kC(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f7()
return a},
bC:function(a){var z
if(a==null)return new H.fZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fZ(a)},
nw:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nK:function(a,b,c,d,e,f){H.d(a,"$iscb")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nK)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.jD(z).r}else x=d
w=e?Object.create(new H.k0().constructor.prototype):Object.create(new H.d4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aG
if(typeof u!=="number")return u.B()
$.aG=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.em(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nz,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ef:H.d5
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.em(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hX:function(a,b,c,d){var z=H.d5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
em:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.aG
if(typeof w!=="number")return w.B()
$.aG=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aG
if(typeof w!=="number")return w.B()
$.aG=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.d5
y=H.ef
switch(b?-1:a){case 0:throw H.a(H.jN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bG
if(z==null){z=H.cv("self")
$.bG=z}y=$.ee
if(y==null){y=H.cv("receiver")
$.ee=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aG
if(typeof y!=="number")return y.B()
$.aG=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aG
if(typeof y!=="number")return y.B()
$.aG=y+1
return new Function(z+y+"}")()},
dV:function(a,b,c,d,e,f,g){var z,y
z=J.bJ(H.c4(b))
H.F(c)
y=!!J.L(d).$ise?J.bJ(d):d
return H.i_(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
o9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
dT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
hy:function(a,b){throw H.a(H.aB(a,H.H(b).substring(3)))},
ob:function(a,b){var z=J.aT(b)
throw H.a(H.hW(a,z.u(b,3,z.gm(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hy(a,b)},
l:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.ob(a,b)},
c4:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.a(H.aB(a,"List"))},
hv:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.hy(a,b)},
hp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cp:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hp(J.L(a))
if(z==null)return!1
y=H.hs(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.cp(a,b))return a
z=H.cq(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dQ=!1}},
dX:function(a,b){if(a!=null&&!H.dU(a,b))H.p(H.aB(a,H.cq(b)))
return a},
hj:function(a){var z
if(a instanceof H.k){z=H.hp(J.L(a))
if(z!=null)return H.cq(z)
return"Closure"}return H.bm(a)},
oi:function(a){throw H.a(new P.i7(H.H(a)))},
hq:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bb:function(a){if(a==null)return
return a.$ti},
pS:function(a,b,c){return H.bD(a["$as"+H.i(c)],H.bb(b))},
b2:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bD(a["$as"+H.i(c)],H.bb(b))
return z==null?null:z[d]},
am:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bD(a["$as"+H.i(b)],H.bb(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.bb(a)
return z==null?null:z[b]},
cq:function(a){var z=H.bc(a,null)
return z},
bc:function(a,b){var z,y
H.v(b,"$ise",[P.h],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e_(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.n8(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.v(b,"$ise",z,"$ase")
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
for(z=H.nv(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.bc(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e_:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.h],"$ase")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bc(u,c)}v="<"+z.i(0)+">"
return v},
bD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bb(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hm(H.bD(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.H(b)
H.c4(c)
H.H(d)
if(a==null)return a
z=H.c0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e_(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.av(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.av(a[y],b,c[y],d))return!1
return!0},
pQ:function(a,b,c){return a.apply(b,H.bD(J.L(b)["$as"+H.i(c)],H.bb(b)))},
hu:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.hu(z)}return!1},
dU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.hu(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cp(a,b)}y=J.L(a).constructor
x=H.bb(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.av(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dU(a,b))throw H.a(H.aB(a,H.cq(b)))
return a},
av:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.hs(a,b,c,d)
if('func' in a)return c.builtin$cls==="cb"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,x,d)
else if(H.av(a,b,x,d))return!0
else{if(!('$is'+"bI" in y.prototype))return!1
w=y.prototype["$as"+"bI"]
v=H.bD(w,z?a.slice(1):null)
return H.av(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cq(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hm(H.bD(r,z),b,u,d)},
hs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.o8(m,b,l,d)},
o8:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.av(c[w],d,a[w],b))return!1}return!0},
pR:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nN:function(a){var z,y,x,w,v,u
z=H.H($.hr.$1(a))
y=$.cW[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hl.$2(a,z))
if(z!=null){y=$.cW[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d_(x)
$.cW[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cZ[z]=x
return x}if(v==="-"){u=H.d_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hx(a,x)
if(v==="*")throw H.a(P.cl(z))
if(init.leafTags[z]===true){u=H.d_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hx(a,x)},
hx:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e0(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d_:function(a){return J.e0(a,!1,null,!!a.$isJ)},
o7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d_(z)
else return J.e0(z,c,null,null)},
nI:function(){if(!0===$.dZ)return
$.dZ=!0
H.nJ()},
nJ:function(){var z,y,x,w,v,u,t,s
$.cW=Object.create(null)
$.cZ=Object.create(null)
H.nE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hz.$1(v)
if(u!=null){t=H.o7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nE:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bz(C.R,H.bz(C.W,H.bz(C.x,H.bz(C.x,H.bz(C.V,H.bz(C.S,H.bz(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hr=new H.nF(v)
$.hl=new H.nG(u)
$.hz=new H.nH(t)},
bz:function(a,b){return a(b)||b},
hA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i2:{"^":"b;$ti",
i:function(a){return P.dk(this)},
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.i3()},
$isM:1},
i4:{"^":"i2;a,b,c,$ti",
gm:function(a){return this.a},
bx:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bx(0,b))return
return this.du(b)},
du:function(a){return this.b[H.H(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.m(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.du(v),z))}}},
jC:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.jC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ko:{"^":"b;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
cM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jh:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eX:function(a,b){return new H.jh(a,b==null?null:b.method)}}},
iH:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
t:{
dg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iH(a,y,z?null:b.receiver)}}},
kC:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ol:{"^":"k:23;a",
$1:function(a){if(!!J.L(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fZ:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
k:{"^":"b;",
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
geG:function(){return this},
$iscb:1,
geG:function(){return this}},
fd:{"^":"k;"},
k0:{"^":"fd;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d4:{"^":"fd;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bO(this.a)
else y=typeof z!=="object"?J.c5(z):H.bO(z)
return(y^H.bO(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bm(z)+"'")},
t:{
d5:function(a){return a.a},
ef:function(a){return a.c},
cv:function(a){var z,y,x,w,v
z=new H.d4("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kp:{"^":"a9;a",
i:function(a){return this.a},
t:{
aB:function(a,b){return new H.kp("TypeError: "+H.i(P.cy(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"a9;a",
i:function(a){return this.a},
t:{
hW:function(a,b){return new H.hV("CastError: "+H.i(P.cy(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
jM:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
t:{
jN:function(a){return new H.jM(a)}}},
b7:{"^":"eS;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gih:function(a){return this.a===0},
ga7:function(a){return new H.iN(this,[H.y(this,0)])},
bx:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dq(y,b)}else return this.ic(b)},
ic:function(a){var z=this.d
if(z==null)return!1
return this.cP(this.c9(z,this.cO(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.ie(b)},
ie:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c9(z,this.cO(a))
x=this.cP(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ce()
this.b=z}this.dg(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ce()
this.c=y}this.dg(y,b,c)}else this.ig(b,c)},
ig:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.ce()
this.d=z}y=this.cO(a)
x=this.c9(z,y)
if(x==null)this.cm(z,y,[this.cf(a,b)])
else{w=this.cP(x,a)
if(w>=0)x[w].b=b
else x.push(this.cf(a,b))}},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aH(this))
z=z.c}},
dg:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bq(a,b)
if(z==null)this.cm(a,b,this.cf(b,c))
else z.b=c},
fs:function(){this.r=this.r+1&67108863},
cf:function(a,b){var z,y
z=new H.iM(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fs()
return z},
cO:function(a){return J.c5(a)&0x3ffffff},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.dk(this)},
bq:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
fm:function(a,b){delete a[b]},
dq:function(a,b){return this.bq(a,b)!=null},
ce:function(){var z=Object.create(null)
this.cm(z,"<non-identifier-key>",z)
this.fm(z,"<non-identifier-key>")
return z},
$iseN:1},
iM:{"^":"b;a,b,0c,0d"},
iN:{"^":"ey;a,$ti",
gm:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.iO(z,z.r,this.$ti)
y.c=z.e
return y}},
iO:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aH(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nF:{"^":"k:23;a",
$1:function(a){return this.a(a)}},
nG:{"^":"k:59;a",
$2:function(a,b){return this.a(a,b)}},
nH:{"^":"k:58;a",
$1:function(a){return this.a(H.H(a))}},
iF:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseZ:1,
$isjE:1,
t:{
iG:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nv:function(a){return J.eH(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
oa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bx:function(a){return a},
jb:function(a){return new Int8Array(a)},
aR:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aS(b,a))},
n2:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nt(a,b,c))
return b},
eV:{"^":"r;",$iseV:1,"%":"ArrayBuffer"},
dq:{"^":"r;",$isdq:1,$iskq:1,"%":"DataView;ArrayBufferView;dp|fT|fU|jc|fV|fW|b8"},
dp:{"^":"dq;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dW},
jc:{"^":"fU;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nu(c)
H.aR(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.t]},
$asz:function(){return[P.t]},
$isj:1,
$asj:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
b8:{"^":"fW;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aR(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.o]},
$asz:function(){return[P.o]},
$isj:1,
$asj:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]}},
oX:{"^":"b8;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oY:{"^":"b8;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oZ:{"^":"b8;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
p_:{"^":"b8;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
p0:{"^":"b8;",
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
p1:{"^":"b8;",
gm:function(a){return a.length},
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dr:{"^":"b8;",
gm:function(a){return a.length},
k:function(a,b){H.aR(b,a,a.length)
return a[b]},
bZ:function(a,b,c){return new Uint8Array(a.subarray(b,H.n2(b,c,a.length)))},
$isdr:1,
$isS:1,
"%":";Uint8Array"},
fT:{"^":"dp+z;"},
fU:{"^":"fT+cz;"},
fV:{"^":"dp+z;"},
fW:{"^":"fV+cz;"}}],["","",,P,{"^":"",
lb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nf()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bA(new P.ld(z),1)).observe(y,{childList:true})
return new P.lc(z,y,x)}else if(self.setImmediate!=null)return P.ng()
return P.nh()},
pD:[function(a){self.scheduleImmediate(H.bA(new P.le(H.m(a,{func:1,ret:-1})),0))},"$1","nf",4,0,15],
pE:[function(a){self.setImmediate(H.bA(new P.lf(H.m(a,{func:1,ret:-1})),0))},"$1","ng",4,0,15],
pF:[function(a){P.dA(C.q,H.m(a,{func:1,ret:-1}))},"$1","nh",4,0,15],
dA:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.d.a6(a.a,1000)
return P.ml(z<0?0:z,b)},
fh:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.bt]})
z=C.d.a6(a.a,1000)
return P.mm(z<0?0:z,b)},
nb:function(a,b){if(H.cp(a,{func:1,args:[P.b,P.aA]}))return b.iJ(a,null,P.b,P.aA)
if(H.cp(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
na:function(){var z,y
for(;z=$.by,z!=null;){$.bZ=null
y=z.b
$.by=y
if(y==null)$.bY=null
z.a.$0()}},
pP:[function(){$.dR=!0
try{P.na()}finally{$.bZ=null
$.dR=!1
if($.by!=null)$.$get$dL().$1(P.hn())}},"$0","hn",0,0,3],
hi:function(a){var z=new P.fK(H.m(a,{func:1,ret:-1}))
if($.by==null){$.bY=z
$.by=z
if(!$.dR)$.$get$dL().$1(P.hn())}else{$.bY.b=z
$.bY=z}},
ne:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.by
if(z==null){P.hi(a)
$.bZ=$.bY
return}y=new P.fK(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.by=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
oc:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.Y
if(C.j===y){P.cV(null,null,C.j,a)
return}y.toString
P.cV(null,null,y,H.m(y.cv(a),z))},
fg:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dA(a,b)}return P.dA(a,H.m(y.cv(b),z))},
kl:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bt]}
H.m(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fh(a,b)}x=y.dO(b,P.bt)
$.Y.toString
return P.fh(a,H.m(x,z))},
cU:function(a,b,c,d,e){var z={}
z.a=d
P.ne(new P.nc(z,e))},
he:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hf:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nd:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cV:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cv(d):c.hP(d,-1)
P.hi(d)},
ld:{"^":"k:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lc:{"^":"k:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
le:{"^":"k:0;a",
$0:function(){this.a.$0()}},
lf:{"^":"k:0;a",
$0:function(){this.a.$0()}},
h3:{"^":"b;a,0b,c",
f8:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bA(new P.mo(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
f9:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bA(new P.mn(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbt:1,
t:{
ml:function(a,b){var z=new P.h3(!0,0)
z.f8(a,b)
return z},
mm:function(a,b){var z=new P.h3(!1,0)
z.f9(a,b)
return z}}},
mo:{"^":"k:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mn:{"^":"k:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eV(w,x)}z.c=y
this.d.$1(z)}},
bw:{"^":"b;0a,b,c,d,e,$ti",
ip:function(a){if(this.c!==6)return!0
return this.b.b.d0(H.m(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ib:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cp(z,{func:1,args:[P.b,P.aA]}))return H.dX(w.iT(z,a.a,a.b,null,y,P.aA),x)
else return H.dX(w.d0(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b0:{"^":"b;dG:a<,b,0h8:c<,$ti",
eA:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nb(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b0(0,$.Y,[c])
w=b==null?1:3
this.dh(new P.bw(x,w,a,b,[z,c]))
return x},
iZ:function(a,b){return this.eA(a,null,b)},
dh:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbw")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb0")
z=y.a
if(z<4){y.dh(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cV(null,null,z,H.m(new P.lv(this,a),{func:1,ret:-1}))}},
dB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbw")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb0")
y=u.a
if(y<4){u.dB(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cV(null,null,y,H.m(new P.lA(z,this),{func:1,ret:-1}))}},
ci:function(){var z=H.d(this.c,"$isbw")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dl:function(a){var z,y,x,w
z=H.y(this,0)
H.dX(a,{futureOr:1,type:z})
y=this.$ti
x=H.c0(a,"$isbI",y,"$asbI")
if(x){z=H.c0(a,"$isb0",y,null)
if(z)P.fO(a,this)
else P.lw(a,this)}else{w=this.ci()
H.A(a,z)
this.a=4
this.c=a
P.bU(this,w)}},
c4:[function(a,b){var z
H.d(b,"$isaA")
z=this.ci()
this.a=8
this.c=new P.ap(a,b)
P.bU(this,z)},function(a){return this.c4(a,null)},"ja","$2","$1","gfh",4,2,49],
$isbI:1,
t:{
lw:function(a,b){var z,y,x
b.a=1
try{a.eA(new P.lx(b),new P.ly(b),null)}catch(x){z=H.ab(x)
y=H.bC(x)
P.oc(new P.lz(b,z,y))}},
fO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb0")
if(z>=4){y=b.ci()
b.a=a.a
b.c=a.c
P.bU(b,y)}else{y=H.d(b.c,"$isbw")
b.a=2
b.c=a
a.dB(y)}},
bU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cU(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bU(z.a,b)}y=z.a
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
if(p){H.d(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cU(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lD(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lC(x,b,r).$0()}else if((y&2)!==0)new P.lB(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.L(y).$isbI){if(y.a>=4){n=H.d(t.c,"$isbw")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fO(y,t)
return}}m=b.b
n=H.d(m.c,"$isbw")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.d(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
lv:{"^":"k:0;a,b",
$0:function(){P.bU(this.a,this.b)}},
lA:{"^":"k:0;a,b",
$0:function(){P.bU(this.b,this.a.a)}},
lx:{"^":"k:20;a",
$1:function(a){var z=this.a
z.a=0
z.dl(a)}},
ly:{"^":"k:47;a",
$2:function(a,b){this.a.c4(a,H.d(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
lz:{"^":"k:0;a,b,c",
$0:function(){this.a.c4(this.b,this.c)}},
lD:{"^":"k:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ey(H.m(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bC(v)
if(this.d){w=H.d(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.L(z).$isbI){if(z instanceof P.b0&&z.gdG()>=4){if(z.gdG()===8){w=this.b
w.b=H.d(z.gh8(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iZ(new P.lE(t),null)
w.a=!1}}},
lE:{"^":"k:46;a",
$1:function(a){return this.a}},
lC:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.d0(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bC(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lB:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isap")
w=this.c
if(w.ip(z)&&w.e!=null){v=this.b
v.b=w.ib(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bC(u)
w=H.d(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fK:{"^":"b;a,0b"},
dw:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b0(0,$.Y,[P.o])
z.a=0
this.il(new P.k3(z,this),!0,new P.k4(z,y),y.gfh())
return y}},
k3:{"^":"k;a,b",
$1:function(a){H.A(a,H.am(this.b,"dw",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.am(this.b,"dw",0)]}}},
k4:{"^":"k:0;a,b",
$0:function(){this.b.dl(this.a.a)}},
fa:{"^":"b;$ti"},
k2:{"^":"b;"},
bt:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.i(this.a)},
$isa9:1},
mR:{"^":"b;",$ispC:1},
nc:{"^":"k:0;a,b",
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
lY:{"^":"mR;",
iU:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.he(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bC(x)
P.cU(null,null,this,z,H.d(y,"$isaA"))}},
iV:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hf(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bC(x)
P.cU(null,null,this,z,H.d(y,"$isaA"))}},
hP:function(a,b){return new P.m_(this,H.m(a,{func:1,ret:b}),b)},
cv:function(a){return new P.lZ(this,H.m(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.m0(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
ey:function(a,b){H.m(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.he(null,null,this,a,b)},
d0:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.hf(null,null,this,a,b,c,d)},
iT:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nd(null,null,this,a,b,c,d,e,f)},
iJ:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
m_:{"^":"k;a,b,c",
$0:function(){return this.a.ey(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lZ:{"^":"k:3;a,b",
$0:function(){return this.a.iU(this.b)}},
m0:{"^":"k;a,b,c",
$1:function(a){var z=this.c
return this.a.iV(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iP:function(a,b,c,d,e){return new H.b7(0,0,[d,e])},
iQ:function(a,b,c){H.c4(a)
return H.v(H.nw(a,new H.b7(0,0,[b,c])),"$iseN",[b,c],"$aseN")},
di:function(a,b){return new H.b7(0,0,[a,b])},
cg:function(a,b,c,d){return new P.lL(0,0,[d])},
iB:function(a,b,c){var z,y
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.n9(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hv(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
dc:function(a,b,c){var z,y,x
if(P.dS(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaM(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dS:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
n9:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.i(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.E();t=s,s=r){r=z.gN(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eO:function(a,b,c){var z=P.iP(null,null,null,b,c)
a.I(0,new P.iR(z,b,c))
return z},
eP:function(a,b){var z,y
z=P.cg(null,null,null,b)
for(y=J.b3(a);y.E();)z.h(0,H.A(y.gN(y),b))
return z},
dk:function(a){var z,y,x
z={}
if(P.dS(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
J.e6(a,new P.iV(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
lL:{"^":"lF;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){var z=new P.fS(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscR")!=null}else{y=this.fi(b)
return y}},
fi:function(a){var z=this.d
if(z==null)return!1
return this.c7(this.dv(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.dj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.dj(y,b)}else return this.fa(0,b)},
fa:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.dm(b)
x=z[y]
if(x==null)z[y]=[this.c3(b)]
else{if(this.c7(x,b)>=0)return!1
x.push(this.c3(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dC(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dv(z,b)
x=this.c7(y,b)
if(x<0)return!1
this.dI(y.splice(x,1)[0])
return!0},
dj:function(a,b){H.A(b,H.y(this,0))
if(H.d(a[b],"$iscR")!=null)return!1
a[b]=this.c3(b)
return!0},
dC:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscR")
if(z==null)return!1
this.dI(z)
delete a[b]
return!0},
dk:function(){this.r=this.r+1&67108863},
c3:function(a){var z,y
z=new P.cR(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dk()
return z},
dI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dk()},
dm:function(a){return J.c5(a)&0x3ffffff},
dv:function(a,b){return a[this.dm(b)]},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
t:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cR:{"^":"b;a,0b,0c"},
fS:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aH(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lF:{"^":"jO;"},
iR:{"^":"k:8;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cE:{"^":"lM;",$isj:1,$ise:1},
z:{"^":"b;$ti",
gZ:function(a){return new H.dj(a,this.gm(a),0,[H.b2(this,a,"z",0)])},
K:function(a,b){return this.k(a,b)},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.b2(this,a,"z",0)]})
z=this.gm(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gm(a))throw H.a(P.aH(a))}},
j1:function(a,b){var z,y,x
z=H.c([],[H.b2(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.p(z,y,this.k(a,y));++y}return z},
j0:function(a){return this.j1(a,!0)},
aF:function(a,b,c,d){var z
H.A(d,H.b2(this,a,"z",0))
P.aZ(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dc(a,"[","]")}},
eS:{"^":"ak;"},
iV:{"^":"k:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ak:{"^":"b;$ti",
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.b2(this,a,"ak",0),H.b2(this,a,"ak",1)]})
for(z=J.b3(this.ga7(a));z.E();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gm:function(a){return J.ao(this.ga7(a))},
i:function(a){return P.dk(a)},
$isM:1},
mt:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
iW:{"^":"b;$ti",
k:function(a,b){return J.e5(this.a,b)},
p:function(a,b,c){J.d0(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
I:function(a,b){J.e6(this.a,H.m(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isM:1},
fD:{"^":"mu;a,$ti"},
jQ:{"^":"b;$ti",
ar:function(a,b){var z
for(z=J.b3(H.v(b,"$isj",this.$ti,"$asj"));z.E();)this.h(0,z.gN(z))},
i:function(a){return P.dc(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e9("index"))
if(b<0)H.p(P.a5(b,0,null,"index",null))
for(z=new P.fS(this,this.r,this.$ti),z.c=this.e,y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isj:1},
jO:{"^":"jQ;"},
lM:{"^":"b+z;"},
mu:{"^":"iW+mt;$ti"}}],["","",,P,{"^":"",hS:{"^":"c7;a",
is:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aZ(c,d,b.length,null,null,null)
z=$.$get$fM()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cY(C.b.H(b,s))
o=H.cY(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.u(b,x,y)
w.a+=H.bP(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.ec(b,u,d,v,t,k)
else{j=C.d.an(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aZ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ec(b,u,d,v,t,i)
else{j=C.d.an(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aZ(b,d,d,j===2?"==":"=")}return b},
$asc7:function(){return[[P.e,P.o],P.h]},
t:{
ec:function(a,b,c,d,e,f){if(C.d.an(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},hT:{"^":"b5;a",
$asb5:function(){return[[P.e,P.o],P.h]}},c7:{"^":"b;$ti"},b5:{"^":"k2;$ti"},ij:{"^":"c7;",
$asc7:function(){return[P.h,[P.e,P.o]]}},iy:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},ix:{"^":"b5;a",
fj:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.an("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hN(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb5:function(){return[P.h,P.h]}},kQ:{"^":"ij;a",
gi2:function(){return C.L}},kX:{"^":"b5;",
b7:function(a,b,c){var z,y,x,w
z=a.length
P.aZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mP(0,0,x)
if(w.fo(a,b,z)!==z)w.dJ(J.hG(a,z-1),0)
return C.a2.bZ(x,0,w.b)},
cD:function(a){return this.b7(a,0,null)},
$asb5:function(){return[P.h,[P.e,P.o]]}},mP:{"^":"b;a,b,c",
dJ:function(a,b){var z,y,x,w,v
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
fo:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dJ(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kR:{"^":"b5;a",
b7:function(a,b,c){var z,y,x,w,v
H.v(a,"$ise",[P.o],"$ase")
z=P.kS(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aZ(b,c,y,null,null,null)
x=new P.an("")
w=new P.mM(!1,x,!0,0,0,0)
w.b7(a,b,y)
w.i7(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cD:function(a){return this.b7(a,0,null)},
$asb5:function(){return[[P.e,P.o],P.h]},
t:{
kS:function(a,b,c,d){H.v(b,"$ise",[P.o],"$ase")
if(b instanceof Uint8Array)return P.kT(!1,b,c,d)
return},
kT:function(a,b,c,d){var z,y,x
z=$.$get$fH()
if(z==null)return
y=0===c
if(y&&!0)return P.dF(z,b)
x=b.length
d=P.aZ(c,d,x,null,null,null)
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
i7:function(a,b,c){var z
H.v(b,"$ise",[P.o],"$ase")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ise",[P.o],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mO(c)
v=new P.mN(this,b,c,a)
$label0$0:for(u=J.aT(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bV()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a0("Overlong encoding of 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bP(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bX()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.d.bk(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mO:{"^":"k:45;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ise",[P.o],"$ase")
z=this.a
for(y=J.aT(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bV()
if((w&127)!==w)return x-b}return z-b}},mN:{"^":"k:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ck(this.d,a,b)}}}],["","",,P,{"^":"",
c3:function(a,b,c){var z
H.m(b,{func:1,ret:P.o,args:[P.h]})
z=H.jv(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
il:function(a){var z=J.L(a)
if(!!z.$isk)return z.i(a)
return"Instance of '"+H.bm(a)+"'"},
iS:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iD(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
eQ:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.E();)C.a.h(y,H.A(x.gN(x),c))
if(b)return y
return H.v(J.bJ(y),"$ise",z,"$ase")},
ck:function(a,b,c){var z,y
z=P.o
H.v(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbi",[z],"$asbi")
y=a.length
c=P.aZ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.R()
z=c<y}else z=!0
return H.f1(z?C.a.bZ(a,b,c):a)}if(!!J.L(a).$isdr)return H.jx(a,b,P.aZ(b,c,a.length,null,null,null))
return P.k5(a,b,c)},
k5:function(a,b,c){var z,y,x,w
H.v(a,"$isj",[P.o],"$asj")
if(b<0)throw H.a(P.a5(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.ao(a),null,null))
y=J.b3(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gN(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gN(y))}return H.f1(w)},
jF:function(a,b,c){return new H.iF(a,H.iG(a,!1,!0,!1))},
cO:function(){var z=H.jn()
if(z!=null)return P.kI(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.il(a)},
u:function(a){return new P.fN(a)},
iT:function(a,b,c,d){var z,y
H.m(b,{func:1,ret:d,args:[P.o]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e2:function(a){H.oa(a)},
kI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fE(b>0||c<c?C.b.u(a,b,c):a,5,null).geE()
else if(y===32)return P.fE(C.b.u(a,z,c),0,null).geE()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.o])
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
if(typeof v!=="number")return v.j6()
if(v>=b)if(P.hg(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ac(a,"..",s)))n=r>s+2&&C.b.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ac(a,"file",b)){if(u<=b){if(!C.b.ac(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aZ(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ac(a,"http",b)){if(x&&t+3===s&&C.b.ac(a,"80",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
else if(v===z&&C.b.ac(a,"https",b)){if(x&&t+4===s&&C.b.ac(a,"443",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
q-=b}return new P.m6(a,v,u,t,s,r,q,o)}return P.mv(a,b,c,v,u,t,s,r,q,o)},
fG:function(a,b){var z=P.h
return C.a.i8(H.c(a.split("&"),[z]),P.di(z,z),new P.kL(b),[P.M,P.h,P.h])},
kG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kH(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c3(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.bX()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c3(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.bX()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kJ(a)
y=new P.kK(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
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
l+=2}else{i=C.d.aP(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n3:function(){var z,y,x,w,v
z=P.iT(22,new P.n5(),!0,P.S)
y=new P.n4(z)
x=new P.n6()
w=new P.n7()
v=H.d(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isS"),"]",5)
v=H.d(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isS"),"az",21)
v=H.d(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hg:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ise",[P.o],"$ase")
z=$.$get$hh()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
aq:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.d.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.i9(H.ju(this))
y=P.c9(H.js(this))
x=P.c9(H.jo(this))
w=P.c9(H.jp(this))
v=P.c9(H.jr(this))
u=P.c9(H.jt(this))
t=P.ia(H.jq(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
i9:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ia:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"a6;"},
"+double":0,
bf:{"^":"b;a",
j:function(a,b){return new P.bf(C.d.ag(this.a*b))},
R:function(a,b){return C.d.R(this.a,H.d(b,"$isbf").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ie()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.d.a6(y,6e7)%60)
w=z.$1(C.d.a6(y,1e6)%60)
v=new P.id().$1(y%1e6)
return""+C.d.a6(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
t:{
ex:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
id:{"^":"k:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ie:{"^":"k:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eY:{"^":"a9;",
i:function(a){return"Throw of null."}},
aF:{"^":"a9;a,b,c,d",
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc6()+y+x
if(!this.a)return w
v=this.gc5()
u=P.cy(this.b)
return w+v+": "+H.i(u)},
t:{
c6:function(a){return new P.aF(!1,null,null,a)},
ct:function(a,b,c){return new P.aF(!0,a,b,c)},
e9:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
cI:{"^":"aF;e,f,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
t:{
cj:function(a,b,c){return new P.cI(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cI(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iz:{"^":"aF;e,m:f>,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){if(J.hC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iz(b,z,!0,a,c,"Index out of range")}}},
kE:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
D:function(a){return new P.kE(a)}}},
kB:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cl:function(a){return new P.kB(a)}}},
dv:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
f9:function(a){return new P.dv(a)}}},
i1:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cy(z))+"."},
t:{
aH:function(a){return new P.i1(a)}}},
ji:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f7:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
i7:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fN:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
it:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Y(w,s)
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
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
t:{
a0:function(a,b,c){return new P.it(a,b,c)}}},
cb:{"^":"b;"},
o:{"^":"a6;"},
"+int":0,
j:{"^":"b;$ti",
d3:["eQ",function(a,b){var z=H.am(this,"j",0)
return new H.dK(this,H.m(b,{func:1,ret:P.U,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gZ(this)
for(y=0;z.E();)++y
return y},
gaH:function(a){var z,y
z=this.gZ(this)
if(!z.E())throw H.a(H.cD())
y=z.gN(z)
if(z.E())throw H.a(H.iC())
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e9("index"))
if(b<0)H.p(P.a5(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.E();){x=z.gN(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iB(this,"(",")")}},
dd:{"^":"b;$ti"},
e:{"^":"b;$ti",$isj:1},
"+List":0,
M:{"^":"b;$ti"},
I:{"^":"b;",
gV:function(a){return P.b.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a6:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gV:function(a){return H.bO(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"b;"},
h:{"^":"b;",$iseZ:1},
"+String":0,
an:{"^":"b;aM:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispm:1,
t:{
fb:function(a,b,c){var z=J.b3(b)
if(!z.E())return a
if(c.length===0){do a+=H.i(z.gN(z))
while(z.E())}else{a+=H.i(z.gN(z))
for(;z.E();)a=a+c+H.i(z.gN(z))}return a}}},
kL:{"^":"k:43;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isM",[z,z],"$asM")
H.H(b)
y=J.aT(b).ej(b,"=")
if(y===-1){if(b!=="")J.d0(a,P.dP(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.ap(b,y+1)
z=this.a
J.d0(a,P.dP(x,0,x.length,z,!0),P.dP(w,0,w.length,z,!0))}return a}},
kH:{"^":"k:42;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kJ:{"^":"k:38;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kK:{"^":"k:37;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c3(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.R()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cS:{"^":"b;bY:a<,b,c,d,eu:e>,f,r,0x,0y,0z,0Q,0ch",
geF:function(){return this.b},
gcN:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbP:function(a){var z=this.d
if(z==null)return P.h5(this.a)
return z},
gcX:function(a){var z=this.f
return z==null?"":z},
gee:function(){var z=this.r
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
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
return new P.cS(i,j,c,f,d,g,this.r)},
cZ:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gbh:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fD(P.fG(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gef:function(){return this.c!=null},
gei:function(){return this.f!=null},
geg:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.i(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.i(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.i(y)}else z=y
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
z=J.L(b)
if(!!z.$isdE){y=this.a
x=b.gbY()
if(y==null?x==null:y===x)if(this.c!=null===b.gef()){y=this.b
x=b.geF()
if(y==null?x==null:y===x){y=this.gcN(this)
x=z.gcN(b)
if(y==null?x==null:y===x){y=this.gbP(this)
x=z.gbP(b)
if(y==null?x==null:y===x)if(this.e===z.geu(b)){y=this.f
x=y==null
if(!x===b.gei()){if(x)y=""
if(y===z.gcX(b)){z=this.r
y=z==null
if(!y===b.geg()){if(y)z=""
z=z===b.gee()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.b.gV(this.i(0))
this.z=z}return z},
$isdE:1,
t:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.o],"$ase")
if(c===C.k){z=$.$get$ha().b
if(typeof b!=="string")H.p(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.am(c,"c7",0))
y=c.gi2().cD(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bP(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mG(a,b,d)
else{if(d===b)P.bV(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mH(a,z,e-1):""
x=P.mA(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.mD(P.c3(C.b.u(a,w,g),new P.mw(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mB(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.R()
t=h<i?P.dO(a,h+1,i,null):null
return new P.cS(j,y,x,v,u,t,i<c?P.mz(a,i+1,c):null)},
h5:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bV:function(a,b,c){throw H.a(P.a0(c,a,b))},
mD:function(a,b){if(a!=null&&a===P.h5(b))return
return a},
mA:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.Y(a,z)!==93)P.bV(a,b,"Missing end `]` to match `[` in host")
P.fF(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fF(a,b,c)
return"["+a+"]"}return P.mJ(a,b,c)},
mJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.hc(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bV(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h6(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mG:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h8(C.b.H(a,b)))P.bV(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bV(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mx(y?a.toLowerCase():a)},
mx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mH:function(a,b,c){return P.bW(a,b,c,C.a_)},
mB:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bW(a,b,c,C.D):C.w.jL(d,new P.mC(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.mI(w,e,f)},
mI:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.mK(a,!z||c)
return P.mL(a)},
dO:function(a,b,c,d){var z,y
z={}
H.v(d,"$isM",[P.h,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.c6("Both query and queryParameters specified"))
return P.bW(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.I(0,new P.mE(new P.mF(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mz:function(a,b,c){return P.bW(a,b,c,C.n)},
hc:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cY(y)
v=H.cY(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aP(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bP(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h6:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.o])
C.a.p(y,0,37)
C.a.p(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.hg(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.ck(y,0,null)},
bW:function(a,b,c,d){var z=P.hb(a,b,c,H.v(d,"$ise",[P.o],"$ase"),!1)
return z==null?C.b.u(a,b,c):z},
hb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ise",[P.o],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.R()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
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
if(u){P.bV(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h6(v)}}if(w==null)w=new P.an("")
w.a+=C.b.u(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.R()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h9:function(a){if(C.b.a4(a,"."))return!0
return C.b.ej(a,"/.")!==-1},
mL:function(a){var z,y,x,w,v,u,t
if(!P.h9(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
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
if(z>=2&&P.h8(J.hD(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.ap(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
my:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c6("Invalid URL encoding"))}}return z},
dP:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c2(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.o])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c6("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c6("Truncated URI"))
C.a.h(u,P.my(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ise",[P.o],"$ase")
return new P.kR(!1).cD(u)},
h8:function(a){var z=a|32
return 97<=z&&z<=122}}},
mw:{"^":"k:21;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
mC:{"^":"k:22;",
$1:function(a){return P.co(C.a0,a,C.k,!1)}},
mF:{"^":"k:30;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.co(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.co(C.p,b,C.k,!0))}}},
mE:{"^":"k:36;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b3(H.hv(b,"$isj")),y=this.a;z.E();)y.$2(a,H.H(z.gN(z)))}},
kF:{"^":"b;a,b,c",
geE:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.ek(y,"?",z)
w=y.length
if(x>=0){v=P.bW(y,x+1,w,C.n)
w=x}else v=null
z=new P.lk(this,"data",null,null,null,P.bW(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gav(z)
if(v!==44||x!==t+7||!C.b.ac(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.is(0,a,s,y)
else{r=P.hb(a,s,y,C.n,!0)
if(r!=null)a=C.b.aZ(a,s,y,r)}return new P.kF(a,z,c)}}},
n5:{"^":"k:34;",
$1:function(a){return new Uint8Array(96)}},
n4:{"^":"k:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hH(z,0,96,b)
return z}},
n6:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
n7:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m6:{"^":"b;a,b,c,d,e,f,r,x,0y",
gef:function(){return this.c>0},
geh:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gei:function(){var z=this.f
if(typeof z!=="number")return z.R()
return z<this.r},
geg:function(){return this.r<this.a.length},
gdw:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdz:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbY:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdw()){this.x="http"
z="http"}else if(this.gdz()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geF:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcN:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbP:function(a){var z
if(this.geh()){z=this.d
if(typeof z!=="number")return z.B()
return P.c3(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdw())return 80
if(this.gdz())return 443
return 0},
geu:function(a){return C.b.u(this.a,this.e,this.f)},
gcX:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.R()
return z<y?C.b.u(this.a,z+1,y):""},
gee:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ap(y,z+1):""},
gbh:function(){var z=this.f
if(typeof z!=="number")return z.R()
if(z>=this.r)return C.a1
z=P.h
return new P.fD(P.fG(this.gcX(this),C.k),[z,z])},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.h,null],"$asM")
i=this.gbY()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.geh()?this.gbP(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ap(y,x+1)
return new P.cS(i,j,c,f,d,g,b)},
cZ:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.b.gV(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdE)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdE:1},
lk:{"^":"cS;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e8:function(a){var z=document.createElement("a")
return z},
d7:function(a,b){var z=document.createElement("canvas")
return z},
ig:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).al(z,a,b,c)
y.toString
z=W.G
z=new H.dK(new W.au(y),H.m(new W.ih(),{func:1,ret:P.U,args:[z]}),[z])
return H.d(z.gaH(z),"$isP")},
ii:function(a){H.d(a,"$isag")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
eF:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
iA:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseG")
try{J.hM(z,a)}catch(x){H.ab(x)}return z},
cP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fR:function(a,b,c,d){var z,y
z=W.cP(W.cP(W.cP(W.cP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hk:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dO(a,b)},
Z:{"^":"P;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
on:{"^":"r;0m:length=","%":"AccessibleNodeList"},
oo:{"^":"Z;0a3:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
op:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ed:{"^":"Z;",$ised:1,"%":"HTMLBaseElement"},
d3:{"^":"r;",$isd3:1,"%":";Blob"},
cu:{"^":"Z;",$iscu:1,"%":"HTMLBodyElement"},
ov:{"^":"Z;0a3:type}","%":"HTMLButtonElement"},
d6:{"^":"Z;",
bW:function(a,b,c){if(c!=null)return a.getContext(b,P.nj(c,null))
return a.getContext(b)},
eI:function(a,b){return this.bW(a,b,null)},
$isd6:1,
"%":"HTMLCanvasElement"},
ek:{"^":"r;",$isek:1,"%":"CanvasRenderingContext2D"},
ox:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oz:{"^":"i6;0m:length=","%":"CSSPerspective"},
bd:{"^":"r;",$isbd:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oA:{"^":"lj;0m:length=",
eJ:function(a,b){var z=a.getPropertyValue(this.fe(a,b))
return z==null?"":z},
fe:function(a,b){var z,y
z=$.$get$ep()
y=z[b]
if(typeof y==="string")return y
y=this.hh(a,b)
z[b]=y
return y},
hh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ib()+b
if(z in a)return z
return b},
gcw:function(a){return a.bottom},
gau:function(a){return a.height},
gaW:function(a){return a.left},
gbi:function(a){return a.right},
gbl:function(a){return a.top},
gax:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i5:{"^":"b;",
gaW:function(a){return this.eJ(a,"left")}},
eq:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i6:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oB:{"^":"eq;0m:length=","%":"CSSTransformValue"},
oC:{"^":"eq;0m:length=","%":"CSSUnparsedValue"},
oD:{"^":"r;0m:length=","%":"DataTransferItemList"},
be:{"^":"Z;",$isbe:1,"%":"HTMLDivElement"},
oE:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
oF:{"^":"lm;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.v(c,"$isad",[P.a6],"$asad")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ad,P.a6]]},
$asz:function(){return[[P.ad,P.a6]]},
$isj:1,
$asj:function(){return[[P.ad,P.a6]]},
$ise:1,
$ase:function(){return[[P.ad,P.a6]]},
$asE:function(){return[[P.ad,P.a6]]},
"%":"ClientRectList|DOMRectList"},
ic:{"^":"r;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gax(a))+" x "+H.i(this.gau(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aE(b)
return a.left===z.gaW(b)&&a.top===z.gbl(b)&&this.gax(a)===z.gax(b)&&this.gau(a)===z.gau(b)},
gV:function(a){return W.fR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF,this.gau(a)&0x1FFFFFFF)},
gcw:function(a){return a.bottom},
gau:function(a){return a.height},
gaW:function(a){return a.left},
gbi:function(a){return a.right},
gbl:function(a){return a.top},
gax:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a6]},
"%":";DOMRectReadOnly"},
oG:{"^":"lo;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asz:function(){return[P.h]},
$isj:1,
$asj:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"DOMStringList"},
oH:{"^":"r;0m:length=","%":"DOMTokenList"},
li:{"^":"cE;dt:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isP")},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isP")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.j0(this)
return new J.aw(z,z.length,0,[H.y(z,0)])},
aF:function(a,b,c,d){throw H.a(P.cl(null))},
$asz:function(){return[W.P]},
$asj:function(){return[W.P]},
$ase:function(){return[W.P]}},
P:{"^":"G;0iW:tagName=",
ghO:function(a){return new W.lp(a)},
gcC:function(a){return new W.li(a,a.children)},
gdP:function(a){return P.jB(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a6)},
i:function(a){return a.localName},
al:["c_",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eA
if(z==null){z=H.c([],[W.aK])
y=new W.eW(z)
C.a.h(z,W.fP(null))
C.a.h(z,W.h0())
$.eA=y
d=y}else d=z
z=$.ez
if(z==null){z=new W.hd(d)
$.ez=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.da=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.d(y,"$ised")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscu")}z=$.aV
if(!!this.$iscu)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.da.selectNodeContents(x)
w=$.da.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.e7(x)
c.d8(w)
document.adoptNode(w)
return w},function(a,b,c){return this.al(a,b,c,null)},"hW",null,null,"gjJ",5,5,null],
eN:function(a,b,c,d){a.textContent=null
a.appendChild(this.al(a,b,c,d))},
eM:function(a,b){return this.eN(a,b,null,null)},
$isP:1,
"%":";Element"},
ih:{"^":"k:25;",
$1:function(a){return!!J.L(H.d(a,"$isG")).$isP}},
oI:{"^":"Z;0a3:type}","%":"HTMLEmbedElement"},
af:{"^":"r;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ag:{"^":"r;",
dL:["eO",function(a,b,c,d){H.m(c,{func:1,args:[W.af]})
if(c!=null)this.fb(a,b,c,!1)}],
fb:function(a,b,c,d){return a.addEventListener(b,H.bA(H.m(c,{func:1,args:[W.af]}),1),!1)},
$isag:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fX|fY|h1|h2"},
b6:{"^":"d3;",$isb6:1,"%":"File"},
eC:{"^":"lu;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isb6")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b6]},
$asz:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$ise:1,
$ase:function(){return[W.b6]},
$iseC:1,
$asE:function(){return[W.b6]},
"%":"FileList"},
oJ:{"^":"ag;0m:length=","%":"FileWriter"},
oK:{"^":"Z;0m:length=","%":"HTMLFormElement"},
bh:{"^":"r;",$isbh:1,"%":"Gamepad"},
oL:{"^":"r;0m:length=","%":"History"},
oM:{"^":"lH;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cc:{"^":"r;0dQ:data=",$iscc:1,"%":"ImageData"},
db:{"^":"Z;",$isdb:1,"%":"HTMLImageElement"},
eG:{"^":"Z;0a3:type}",$iseG:1,"%":"HTMLInputElement"},
bK:{"^":"dB;",$isbK:1,"%":"KeyboardEvent"},
oQ:{"^":"Z;0a3:type}","%":"HTMLLinkElement"},
oR:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
oS:{"^":"r;0m:length=","%":"MediaList"},
oT:{"^":"ag;",
dL:function(a,b,c,d){H.m(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eO(a,b,c,!1)},
"%":"MessagePort"},
oU:{"^":"lN;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.I(a,new W.j8(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIInputMap"},
j8:{"^":"k:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oV:{"^":"lO;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.I(a,new W.j9(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
j9:{"^":"k:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"r;",$isbk:1,"%":"MimeType"},
oW:{"^":"lQ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbk")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isj:1,
$asj:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asE:function(){return[W.bk]},
"%":"MimeTypeArray"},
ah:{"^":"dB;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
au:{"^":"cE;a",
gaH:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f9("No elements"))
if(y>1)throw H.a(P.f9("More than one element"))
return z.firstChild},
ar:function(a,b){var z,y,x,w
H.v(b,"$isj",[W.G],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.d(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.eD(z,z.length,-1,[H.b2(C.a3,z,"E",0)])},
aF:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.G]},
$asj:function(){return[W.G]},
$ase:function(){return[W.G]}},
G:{"^":"ag;0cW:previousSibling=",
iK:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iP:function(a,b){var z,y
try{z=a.parentNode
J.hE(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eP(a):z},
h3:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
p2:{"^":"r;",
iH:[function(a){return a.previousNode()},"$0","gcW",1,0,27],
"%":"NodeIterator"},
jd:{"^":"lS;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
p5:{"^":"Z;0a3:type}","%":"HTMLOListElement"},
p6:{"^":"Z;0a3:type}","%":"HTMLObjectElement"},
bl:{"^":"r;0m:length=",$isbl:1,"%":"Plugin"},
p9:{"^":"lW;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbl")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bl]},
$asz:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asE:function(){return[W.bl]},
"%":"PluginArray"},
pb:{"^":"r;0a3:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pc:{"^":"m1;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.I(a,new W.jL(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jL:{"^":"k:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pe:{"^":"Z;0a3:type}","%":"HTMLScriptElement"},
pf:{"^":"Z;0m:length=","%":"HTMLSelectElement"},
bn:{"^":"ag;",$isbn:1,"%":"SourceBuffer"},
pg:{"^":"fY;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isj:1,
$asj:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"SourceBufferList"},
ph:{"^":"Z;0a3:type}","%":"HTMLSourceElement"},
bo:{"^":"r;",$isbo:1,"%":"SpeechGrammar"},
pi:{"^":"m8;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbo")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isj:1,
$asj:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asE:function(){return[W.bo]},
"%":"SpeechGrammarList"},
bp:{"^":"r;0m:length=",$isbp:1,"%":"SpeechRecognitionResult"},
pk:{"^":"mb;",
k:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga7:function(a){var z=H.c([],[P.h])
this.I(a,new W.k1(z))
return z},
gm:function(a){return a.length},
$asak:function(){return[P.h,P.h]},
$isM:1,
$asM:function(){return[P.h,P.h]},
"%":"Storage"},
k1:{"^":"k:30;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pn:{"^":"Z;0a3:type}","%":"HTMLStyleElement"},
bq:{"^":"r;",$isbq:1,"%":"CSSStyleSheet|StyleSheet"},
dx:{"^":"Z;",$isdx:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k6:{"^":"Z;",
al:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
z=W.ig("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.au(y).ar(0,new W.au(z))
return y},
"%":"HTMLTableElement"},
pp:{"^":"Z;",
al:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.al(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
x.toString
z=new W.au(x)
w=z.gaH(z)
y.toString
w.toString
new W.au(y).ar(0,new W.au(w))
return y},
"%":"HTMLTableRowElement"},
pq:{"^":"Z;",
al:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.al(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
y.toString
x.toString
new W.au(y).ar(0,new W.au(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"Z;",$isfe:1,"%":"HTMLTemplateElement"},
br:{"^":"ag;",$isbr:1,"%":"TextTrack"},
bs:{"^":"ag;",$isbs:1,"%":"TextTrackCue|VTTCue"},
ps:{"^":"mk;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbs")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bs]},
$asz:function(){return[W.bs]},
$isj:1,
$asj:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asE:function(){return[W.bs]},
"%":"TextTrackCueList"},
pt:{"^":"h2;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asz:function(){return[W.br]},
$isj:1,
$asj:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"TextTrackList"},
pu:{"^":"r;0m:length=","%":"TimeRanges"},
bu:{"^":"r;",$isbu:1,"%":"Touch"},
bv:{"^":"dB;",$isbv:1,"%":"TouchEvent"},
pv:{"^":"mq;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbu")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bu]},
$asz:function(){return[W.bu]},
$isj:1,
$asj:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asE:function(){return[W.bu]},
"%":"TouchList"},
pw:{"^":"r;0m:length=","%":"TrackDefaultList"},
py:{"^":"r;",
iH:[function(a){return a.previousNode()},"$0","gcW",1,0,27],
"%":"TreeWalker"},
dB:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pA:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
pB:{"^":"ag;0m:length=","%":"VideoTrackList"},
bT:{"^":"ah;",
ghZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
ghY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbT:1,
"%":"WheelEvent"},
la:{"^":"ag;",
h4:function(a,b){return a.requestAnimationFrame(H.bA(H.m(b,{func:1,ret:-1,args:[P.a6]}),1))},
fn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fL:{"^":"G;",$isfL:1,"%":"Attr"},
pG:{"^":"mT;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbd")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bd]},
$asz:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$ise:1,
$ase:function(){return[W.bd]},
$asE:function(){return[W.bd]},
"%":"CSSRuleList"},
pH:{"^":"ic;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aE(b)
return a.left===z.gaW(b)&&a.top===z.gbl(b)&&a.width===z.gax(b)&&a.height===z.gau(b)},
gV:function(a){return W.fR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gau:function(a){return a.height},
gax:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pJ:{"^":"mV;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbh")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$ise:1,
$ase:function(){return[W.bh]},
$asE:function(){return[W.bh]},
"%":"GamepadList"},
pM:{"^":"mX;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pN:{"^":"mZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isj:1,
$asj:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"SpeechRecognitionResultList"},
pO:{"^":"n0;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isj:1,
$asj:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"StyleSheetList"},
lg:{"^":"eS;dt:a<",
I:function(a,b){var z,y,x,w,v
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga7(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga7:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfL")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asak:function(){return[P.h,P.h]},
$asM:function(){return[P.h,P.h]}},
lp:{"^":"lg;a",
k:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga7(this).length}},
lq:{"^":"dw;a,b,c,$ti",
il:function(a,b,c,d){var z=H.y(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
pI:{"^":"lq;a,b,c,$ti"},
lr:{"^":"fa;a,b,c,d,e,$ti",
hl:function(){var z=this.d
if(z!=null&&this.a<=0)J.hF(this.b,this.c,z,!1)},
t:{
a4:function(a,b,c,d,e){var z=c==null?null:W.hk(new W.ls(c),W.af)
z=new W.lr(0,a,b,z,!1,[e])
z.hl()
return z}}},
ls:{"^":"k:11;a",
$1:function(a){return this.a.$1(H.d(a,"$isaf"))}},
cn:{"^":"b;a",
f4:function(a){var z,y
z=$.$get$dM()
if(z.gih(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nC())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nD())}},
aQ:function(a){return $.$get$fQ().X(0,W.bH(a))},
aC:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dM()
x=y.k(0,H.i(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dT(x.$4(a,b,c,this))},
$isaK:1,
t:{
fP:function(a){var z,y
z=W.e8(null)
y=window.location
z=new W.cn(new W.m2(z,y))
z.f4(a)
return z},
pK:[function(a,b,c,d){H.d(a,"$isP")
H.H(b)
H.H(c)
H.d(d,"$iscn")
return!0},"$4","nC",16,0,26],
pL:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isP")
H.H(b)
H.H(c)
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
return z},"$4","nD",16,0,26]}},
E:{"^":"b;$ti",
gZ:function(a){return new W.eD(a,this.gm(a),-1,[H.b2(this,a,"E",0)])},
aF:function(a,b,c,d){H.A(d,H.b2(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
eW:{"^":"b;a",
aQ:function(a){return C.a.dN(this.a,new W.jf(a))},
aC:function(a,b,c){return C.a.dN(this.a,new W.je(a,b,c))},
$isaK:1},
jf:{"^":"k:28;a",
$1:function(a){return H.d(a,"$isaK").aQ(this.a)}},
je:{"^":"k:28;a,b,c",
$1:function(a){return H.d(a,"$isaK").aC(this.a,this.b,this.c)}},
m3:{"^":"b;",
f7:function(a,b,c,d){var z,y,x
this.a.ar(0,c)
z=b.d3(0,new W.m4())
y=b.d3(0,new W.m5())
this.b.ar(0,z)
x=this.c
x.ar(0,C.A)
x.ar(0,y)},
aQ:function(a){return this.a.X(0,W.bH(a))},
aC:["eU",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.X(0,H.i(z)+"::"+b))return this.d.hL(c)
else if(y.X(0,"*::"+b))return this.d.hL(c)
else{y=this.b
if(y.X(0,H.i(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.i(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaK:1},
m4:{"^":"k:29;",
$1:function(a){return!C.a.X(C.t,H.H(a))}},
m5:{"^":"k:29;",
$1:function(a){return C.a.X(C.t,H.H(a))}},
mh:{"^":"m3;e,a,b,c,d",
aC:function(a,b,c){if(this.eU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1},
t:{
h0:function(){var z,y,x,w,v
z=P.h
y=P.eP(C.r,z)
x=H.y(C.r,0)
w=H.m(new W.mi(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mh(y,P.cg(null,null,null,z),P.cg(null,null,null,z),P.cg(null,null,null,z),null)
y.f7(null,new H.iZ(C.r,w,[x,z]),v,null)
return y}}},
mi:{"^":"k:22;",
$1:function(a){return"TEMPLATE::"+H.i(H.H(a))}},
mg:{"^":"b;",
aQ:function(a){var z=J.L(a)
if(!!z.$isf5)return!1
z=!!z.$iscK
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aQ(a)},
$isaK:1},
eD:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e5(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
aK:{"^":"b;"},
m2:{"^":"b;a,b",$ispz:1},
hd:{"^":"b;a",
d8:function(a){new W.mQ(this).$2(a,null)},
b4:function(a,b){if(b==null)J.e7(a)
else b.removeChild(a)},
ha:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hI(a)
x=y.gdt().getAttribute("is")
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
this.h9(H.d(a,"$isP"),b,z,v,u,H.d(y,"$isM"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aF)throw t
else{this.b4(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
h9:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b4(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.b4(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga7(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga7(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aC(a,J.hO(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.i(e)+" "+w+'="'+H.i(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfe)this.d8(a.content)},
$isp3:1},
mQ:{"^":"k:50;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ha(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hJ(z)}catch(w){H.ab(w)
v=H.d(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isG")}}},
lj:{"^":"r+i5;"},
ll:{"^":"r+z;"},
lm:{"^":"ll+E;"},
ln:{"^":"r+z;"},
lo:{"^":"ln+E;"},
lt:{"^":"r+z;"},
lu:{"^":"lt+E;"},
lG:{"^":"r+z;"},
lH:{"^":"lG+E;"},
lN:{"^":"r+ak;"},
lO:{"^":"r+ak;"},
lP:{"^":"r+z;"},
lQ:{"^":"lP+E;"},
lR:{"^":"r+z;"},
lS:{"^":"lR+E;"},
lV:{"^":"r+z;"},
lW:{"^":"lV+E;"},
m1:{"^":"r+ak;"},
fX:{"^":"ag+z;"},
fY:{"^":"fX+E;"},
m7:{"^":"r+z;"},
m8:{"^":"m7+E;"},
mb:{"^":"r+ak;"},
mj:{"^":"r+z;"},
mk:{"^":"mj+E;"},
h1:{"^":"ag+z;"},
h2:{"^":"h1+E;"},
mp:{"^":"r+z;"},
mq:{"^":"mp+E;"},
mS:{"^":"r+z;"},
mT:{"^":"mS+E;"},
mU:{"^":"r+z;"},
mV:{"^":"mU+E;"},
mW:{"^":"r+z;"},
mX:{"^":"mW+E;"},
mY:{"^":"r+z;"},
mZ:{"^":"mY+E;"},
n_:{"^":"r+z;"},
n0:{"^":"n_+E;"}}],["","",,P,{"^":"",
nm:function(a){var z,y
z=J.L(a)
if(!!z.$iscc){y=z.gdQ(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h4(a.data,a.height,a.width)},
nl:function(a){if(a instanceof P.h4)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var z,y,x,w,v
if(a==null)return
z=P.di(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
nj:function(a,b){var z={}
a.I(0,new P.nk(z))
return z},
ew:function(){var z=$.ev
if(z==null){z=J.d1(window.navigator.userAgent,"Opera",0)
$.ev=z}return z},
ib:function(){var z,y
z=$.es
if(z!=null)return z
y=$.et
if(y==null){y=J.d1(window.navigator.userAgent,"Firefox",0)
$.et=y}if(y)z="-moz-"
else{y=$.eu
if(y==null){y=!P.ew()&&J.d1(window.navigator.userAgent,"Trident/",0)
$.eu=y}if(y)z="-ms-"
else z=P.ew()?"-o-":"-webkit-"}$.es=z
return z},
me:{"^":"b;",
ec:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bU:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isaq)return new Date(a.a)
if(!!y.$isjE)throw H.a(P.cl("structured clone of RegExp"))
if(!!y.$isb6)return a
if(!!y.$isd3)return a
if(!!y.$iseC)return a
if(!!y.$iscc)return a
if(!!y.$iseV||!!y.$isdq)return a
if(!!y.$isM){x=this.ec(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.I(a,new P.mf(z,this))
return z.a}if(!!y.$ise){x=this.ec(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hV(a,x)}throw H.a(P.cl("structured clone of other type"))},
hV:function(a,b){var z,y,x,w
z=J.aT(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.bU(z.k(a,w)))
return x}},
mf:{"^":"k:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.bU(b)}},
h4:{"^":"b;dQ:a>,b,c",$iscc:1},
nk:{"^":"k:8;a",
$2:function(a,b){this.a[a]=b}},
h_:{"^":"me;a,b"},
iq:{"^":"cE;a,b",
gb2:function(){var z,y,x
z=this.b
y=H.am(z,"z",0)
x=W.P
return new H.iX(new H.dK(z,H.m(new P.ir(),{func:1,ret:P.U,args:[y]}),[y]),H.m(new P.is(),{func:1,ret:x,args:[y]}),[y,x])},
I:function(a,b){H.m(b,{func:1,ret:-1,args:[W.P]})
C.a.I(P.eQ(this.gb2(),!1,W.P),b)},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isP")
z=this.gb2()
J.hL(z.b.$1(J.cs(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aF:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gb2().a)},
k:function(a,b){var z=this.gb2()
return z.b.$1(J.cs(z.a,b))},
gZ:function(a){var z=P.eQ(this.gb2(),!1,W.P)
return new J.aw(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.P]},
$asj:function(){return[W.P]},
$ase:function(){return[W.P]}},
ir:{"^":"k:25;",
$1:function(a){return!!J.L(H.d(a,"$isG")).$isP}},
is:{"^":"k:60;",
$1:function(a){return H.l(H.d(a,"$isG"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lX:{"^":"b;$ti",
gbi:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.A(z+this.c,H.y(this,0))},
gcw:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c0(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=this.a
y=J.aE(b)
x=y.gaW(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbl(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbi(b)){if(typeof x!=="number")return x.B()
z=H.A(x+this.d,w)===y.gcw(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.c5(z)
x=this.b
w=J.c5(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.A(x+this.d,v)
return P.lI(P.cQ(P.cQ(P.cQ(P.cQ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"lX;aW:a>,bl:b>,ax:c>,au:d>,$ti",t:{
jB:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.R()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.R()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bL:{"^":"r;",$isbL:1,"%":"SVGLength"},oP:{"^":"lK;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbL")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bL]},
$isj:1,
$asj:function(){return[P.bL]},
$ise:1,
$ase:function(){return[P.bL]},
$asE:function(){return[P.bL]},
"%":"SVGLengthList"},bN:{"^":"r;",$isbN:1,"%":"SVGNumber"},p4:{"^":"lU;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbN")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bN]},
$isj:1,
$asj:function(){return[P.bN]},
$ise:1,
$ase:function(){return[P.bN]},
$asE:function(){return[P.bN]},
"%":"SVGNumberList"},pa:{"^":"r;0m:length=","%":"SVGPointList"},f5:{"^":"cK;0a3:type}",$isf5:1,"%":"SVGScriptElement"},pl:{"^":"md;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asz:function(){return[P.h]},
$isj:1,
$asj:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"SVGStringList"},po:{"^":"cK;0a3:type}","%":"SVGStyleElement"},cK:{"^":"P;",
gcC:function(a){return new P.iq(a,new W.au(a))},
al:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aK])
C.a.h(z,W.fP(null))
C.a.h(z,W.h0())
C.a.h(z,new W.mg())
c=new W.hd(new W.eW(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).hW(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.au(w)
u=z.gaH(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscK:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bQ:{"^":"r;",$isbQ:1,"%":"SVGTransform"},px:{"^":"ms;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbQ")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bQ]},
$isj:1,
$asj:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$asE:function(){return[P.bQ]},
"%":"SVGTransformList"},lJ:{"^":"r+z;"},lK:{"^":"lJ+E;"},lT:{"^":"r+z;"},lU:{"^":"lT+E;"},mc:{"^":"r+z;"},md:{"^":"mc+E;"},mr:{"^":"r+z;"},ms:{"^":"mr+E;"}}],["","",,P,{"^":"",S:{"^":"b;",$isj:1,
$asj:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$iskq:1}}],["","",,P,{"^":"",oq:{"^":"r;0m:length=","%":"AudioBuffer"},eb:{"^":"ag;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},or:{"^":"lh;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.I(a,new P.hQ(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"AudioParamMap"},hQ:{"^":"k:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},hR:{"^":"eb;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},os:{"^":"ag;0m:length=","%":"AudioTrackList"},hU:{"^":"ag;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ot:{"^":"eb;0a3:type}","%":"BiquadFilterNode"},p7:{"^":"hU;0m:length=","%":"OfflineAudioContext"},p8:{"^":"hR;0a3:type}","%":"Oscillator|OscillatorNode"},lh:{"^":"r+ak;"}}],["","",,P,{"^":"",dt:{"^":"r;",
iY:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nl(g))
return}if(!!z.$isdb)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c6("Incorrect number or type of arguments"))},
iX:function(a,b,c,d,e,f,g){return this.iY(a,b,c,d,e,f,g,null,null,null)},
$isdt:1,
"%":"WebGLRenderingContext"},kz:{"^":"r;",$iskz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pj:{"^":"ma;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b1(a.item(b))},
p:function(a,b,c){H.F(b)
H.d(c,"$isM")
throw H.a(P.D("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asz:function(){return[[P.M,,,]]},
$isj:1,
$asj:function(){return[[P.M,,,]]},
$ise:1,
$ase:function(){return[[P.M,,,]]},
$asE:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},m9:{"^":"r+z;"},ma:{"^":"m9+E;"}}],["","",,O,{"^":"",aU:{"^":"b;0a,0b,0c,0d,$ti",
c1:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
d9:function(a,b,c){var z=H.am(this,"aU",0)
H.m(b,{func:1,ret:P.U,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.o,[P.j,z]]}
H.m(a,z)
H.m(c,z)
this.b=b
this.c=a
this.d=c},
bo:function(a,b){return this.d9(a,null,b)},
fU:function(a){var z
H.v(a,"$isj",[H.am(this,"aU",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f0:function(a,b){var z
H.v(b,"$isj",[H.am(this,"aU",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.y(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"aU",0)
H.A(b,z)
z=[z]
if(this.fU(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f0(x,H.c([b],z))}},
$isj:1,
t:{
d8:function(a){var z=new O.aU([a])
z.c1(a)
return z}}},dm:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
f1:function(a){var z=this.b
if(!(z==null))z.F(a)},
aI:function(){return this.f1(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gav(z)
else return V.ch()},
ew:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aI()},
cV:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",d2:{"^":"b;"},aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
di:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(y.f==null)y.di()}},
sda:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().L(0,this.geq())
y=this.c
if(y!=null)y.gC().h(0,this.geq())
x=new D.T("shape",z,this.c,this,[F.cJ])
x.b=!0
this.aa(x)}},
sez:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gC().L(0,this.ger())
y=this.f
this.f=a
if(a!=null)a.gC().h(0,this.ger())
this.di()
x=new D.T("technique",y,this.f,this,[O.dy])
x.b=!0
this.aa(x)}},
sbd:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gC().L(0,this.gep())
if(a!=null)a.gC().h(0,this.gep())
this.r=a
y=new D.T("mover",z,a,this,[U.ai])
y.b=!0
this.aa(y)}},
aw:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.b_(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.T("matrix",x,y,this,[V.ay])
w.b=!0
this.aa(w)}z=this.f
if(z!=null)z.aw(0,b)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aw(0,b)},
aY:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0(z))
else C.a.h(z.a,y.j(0,z.ga0(z)))
z.aI()
a.ex(this.f)
z=a.dy
x=(z&&C.a).gav(z)
if(x!=null&&this.d!=null)x.iO(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aY(a)
a.ev()
a.dx.cV()},
gC:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
aa:function(a){var z=this.z
if(!(z==null))z.F(a)},
a1:function(){return this.aa(null)},
ix:[function(a){H.d(a,"$isB")
this.e=null
this.aa(a)},function(){return this.ix(null)},"jR","$1","$0","geq",0,2,1],
iy:[function(a){this.aa(H.d(a,"$isB"))},function(){return this.iy(null)},"jS","$1","$0","ger",0,2,1],
iw:[function(a){this.aa(H.d(a,"$isB"))},function(){return this.iw(null)},"jQ","$1","$0","gep",0,2,1],
iu:[function(a){this.aa(H.d(a,"$isB"))},function(){return this.iu(null)},"jO","$1","$0","geo",0,2,1],
jN:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isj",[E.aW],"$asj")
for(z=b.length,y=this.geo(),x={func:1,ret:-1,args:[D.B]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bg()
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.m(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a1()},"$2","git",8,0,9],
jP:[function(a,b){var z,y,x,w,v
H.v(b,"$isj",[E.aW],"$asj")
for(z=b.length,y=this.geo(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga5()==null){v=new D.bg()
v.d=0
w.sa5(v)}w.ga5().L(0,y)}}this.a1()},"$2","giv",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaY:1,
t:{
eB:function(a,b,c,d,e,f){var z,y
z=new E.aW()
z.a=d
z.b=!0
y=O.d8(E.aW)
z.y=y
y.bo(z.git(),z.giv())
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
z.sda(0,e)
z.sez(f)
z.sbd(c)
return z}}},jG:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eX:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dm()
y=[V.ay]
z.a=H.c([],y)
z.gC().h(0,new E.jI(this))
this.cy=z
z=new O.dm()
z.a=H.c([],y)
z.gC().h(0,new E.jJ(this))
this.db=z
z=new O.dm()
z.a=H.c([],y)
z.gC().h(0,new E.jK(this))
this.dx=z
z=H.c([],[O.dy])
this.dy=z
C.a.h(z,null)
this.fr=new H.b7(0,0,[P.h,A.f6])},
giI:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.j(0,y.ga0(y))
this.z=y
z=y}return z},
ex:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gav(z):a;(z&&C.a).h(z,y)},
ev:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jH:function(a,b){var z=new E.jG(a,b)
z.eX(a,b)
return z}}},jI:{"^":"k:6;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.z=null
z.ch=null}},jJ:{"^":"k:6;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jK:{"^":"k:6;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.ch=null
z.cx=null}},ki:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
f3:[function(a){var z
H.d(a,"$isB")
z=this.x
if(!(z==null))z.F(a)
this.iR()},function(){return this.f3(null)},"f2","$1","$0","gde",0,2,1],
gia:function(){var z,y,x
z=Date.now()
y=C.d.a6(P.ex(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aq(z,!1)
return x/y},
dD:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.e.b9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.b9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fg(C.q,this.giQ())}},
iR:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.kk(this),{func:1,ret:-1,args:[P.a6]})
C.H.fn(z)
C.H.h4(z,W.hk(y,P.a6))}},"$0","giQ",0,0,3],
iN:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dD()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.ex(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aY(this.e)}x=this.z
if(!(x==null))x.F(null)}catch(v){z=H.ab(v)
y=H.bC(v)
P.e2("Error: "+H.i(z))
P.e2("Stack: "+H.i(y))
throw H.a(z)}},
t:{
kj:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd6)return E.ff(a,!0,!0,!0,!1)
y=W.d7(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.ff(y,!0,!0,!0,!1)
w.a=a
return w},
ff:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ki()
y=P.iQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bW(a,"webgl",y)
x=H.d(x==null?C.l.bW(a,"experimental-webgl",y):x,"$isdt")
if(x==null)H.p(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jH(x,a)
w=new T.kc(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kM(a)
v=new X.iI()
v.c=new X.aJ(!1,!1,!1)
v.d=P.cg(null,null,null,P.o)
w.b=v
v=new X.ja(w)
v.f=0
v.r=new V.a1(0,0)
v.x=new V.a1(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iU(w)
v.r=0
v.x=new V.a1(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kn(w)
v.e=0
v.f=new V.a1(0,0)
v.r=new V.a1(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fa,P.b]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.m(w.gfH(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.m(w.gfK(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.m(w.gfD(),q),!1,r))
v=w.z
p=W.bK
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.m(w.gfM(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.m(w.gfL(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.m(w.gfP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.m(w.gfR(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.m(w.gfQ(),s),!1,t))
p=w.z
o=W.bT;(p&&C.a).h(p,W.a4(a,H.H(W.ii(a)),H.m(w.gfS(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.m(w.gfI(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.m(w.gfJ(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.m(w.gfT(),q),!1,r))
r=w.z
q=W.bv
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.m(w.gh_(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.m(w.gfY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.m(w.gfZ(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aq(Date.now(),!1)
z.cy=0
z.dD()
return z}}},kk:{"^":"k:35;a",
$1:function(a){var z
H.o9(a)
z=this.a
if(z.ch){z.ch=!1
z.iN()}}}}],["","",,Z,{"^":"",fJ:{"^":"b;a,b",t:{
dJ:function(a,b,c){var z
H.v(c,"$ise",[P.o],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bx(c)),35044)
a.bindBuffer(b,null)
return new Z.fJ(b,z)}}},eg:{"^":"d2;a,b,c,d,e",
bv:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.u('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.i(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},l8:{"^":"b;a",$isou:1},eh:{"^":"b;a,0b,c,d",
aV:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bv:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bv(a)},
eD:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aY:function(a){var z,y,x,w,v
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
$ispr:1},cA:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}},b9:{"^":"b;a",
gdc:function(a){var z,y
z=this.a
y=(z&$.$get$aO().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=2
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$bR().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=4
if((z&$.$get$ba().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hN:function(a){var z,y,x
z=$.$get$aO()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ba()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fI()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b9))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aO().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bR().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$ba().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
at:function(a){return new Z.b9(a)}}}}],["","",,D,{"^":"",el:{"^":"b;"},bg:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.B]}
H.m(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.B]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).L(z,b)||y}return y},
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.B(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.I(y,new D.im(z))
y=this.b
if(!(y==null))C.a.I(y,new D.io(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
i0:function(){return this.F(null)},
iS:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
ab:function(a){return this.iS(a,!0,!1)},
t:{
N:function(){var z=new D.bg()
z.d=0
return z}}},im:{"^":"k:24;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},io:{"^":"k:24;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},B:{"^":"b;a,0b"},cB:{"^":"B;c,d,a,0b,$ti"},cC:{"^":"B;c,d,a,0b,$ti"},T:{"^":"B;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",ei:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
t:{"^":"ow<"}},eL:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eM:{"^":"B;c,a,0b"},iI:{"^":"b;0a,0b,0c,0d",
iE:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.F(y)},
iA:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.F(y)}},eR:{"^":"cH;x,y,c,d,e,a,0b"},iU:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aA:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.a1(y.a+x*w,y.b+v*u)
u=this.a.gaR()
s=new X.bM(a,new V.a1(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cU:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.aA(a,b))
return!0},
bf:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eL()
if(typeof z!=="number")return z.bV()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.aA(a,b))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aA(a,b))
return!0},
iF:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.dn(new V.a_(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.F(w)
return!0},
fO:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.eR(c,a,this.a.gaR(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.a1(0,0)}},aJ:{"^":"b;a,b,c",
v:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bM:{"^":"cH;x,y,z,Q,ch,c,d,e,a,0b"},ja:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c8:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaR()
x=new X.bM(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cU:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.c8(a,b,!0))
return!0},
bf:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eL()
if(typeof z!=="number")return z.bV()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.c8(a,b,!0))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.c8(a,b,!1))
return!0},
iG:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.dn(new V.a_(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.F(x)
return!0},
gdR:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gbT:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
gen:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},dn:{"^":"cH;x,c,d,e,a,0b"},cH:{"^":"B;"},fk:{"^":"cH;x,y,z,Q,ch,c,d,e,a,0b"},kn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aA:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.a1],"$ase")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.a1(0,0)
x=this.a.gaR()
w=new X.fk(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iD:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.b
if(z==null)return!1
z.F(this.aA(a,!0))
return!0},
iB:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.c
if(z==null)return!1
z.F(this.aA(a,!0))
return!0},
iC:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.d
if(z==null)return!1
z.F(this.aA(a,!1))
return!0}},kM:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaR:function(){var z=this.a
return V.f4(0,0,(z&&C.l).gdP(z).c,C.l.gdP(z).d)},
dr:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eL(z,new X.aJ(y,a.altKey,a.shiftKey))},
aO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aJ(y,a.altKey,a.shiftKey)},
cn:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aJ(y,a.altKey,a.shiftKey)},
aB:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.a1(y-w,x-v)},
b3:function(a){return new V.a_(a.movementX,a.movementY)},
cg:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a1])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.e.ag(u.pageX)
C.e.ag(u.pageY)
s=z.left
C.e.ag(u.pageX)
C.a.h(y,new V.a1(t-s,C.e.ag(u.pageY)-z.top))}return y},
ay:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aJ(y,a.altKey,a.shiftKey))},
ca:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jp:[function(a){this.f=!0},"$1","gfK",4,0,11],
ji:[function(a){this.f=!1},"$1","gfD",4,0,11],
jm:[function(a){H.d(a,"$isah")
if(this.f&&this.ca(a))a.preventDefault()},"$1","gfH",4,0,5],
jr:[function(a){var z
H.d(a,"$isbK")
if(!this.f)return
z=this.dr(a)
if(this.b.iE(z))a.preventDefault()},"$1","gfM",4,0,19],
jq:[function(a){var z
H.d(a,"$isbK")
if(!this.f)return
z=this.dr(a)
if(this.b.iA(z))a.preventDefault()},"$1","gfL",4,0,19],
jt:[function(a){var z,y,x,w
H.d(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.aO(a)
if(this.x){y=this.ay(a)
x=this.b3(a)
if(this.d.cU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ay(a)
w=this.aB(a)
if(this.c.cU(y,w))a.preventDefault()},"$1","gfP",4,0,5],
jv:[function(a){var z,y,x
H.d(a,"$isah")
this.aO(a)
z=this.ay(a)
if(this.x){y=this.b3(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gfR",4,0,5],
jo:[function(a){var z,y,x
H.d(a,"$isah")
if(!this.ca(a)){this.aO(a)
z=this.ay(a)
if(this.x){y=this.b3(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gfJ",4,0,5],
ju:[function(a){var z,y,x
H.d(a,"$isah")
this.aO(a)
z=this.ay(a)
if(this.x){y=this.b3(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfQ",4,0,5],
jn:[function(a){var z,y,x
H.d(a,"$isah")
if(!this.ca(a)){this.aO(a)
z=this.ay(a)
if(this.x){y=this.b3(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfI",4,0,5],
jw:[function(a){var z,y
H.d(a,"$isbT")
this.aO(a)
z=new V.a_((a&&C.G).ghY(a),C.G.ghZ(a)).w(0,180)
if(this.x){if(this.d.iF(z))a.preventDefault()
return}if(this.r)return
y=this.aB(a)
if(this.c.iG(z,y))a.preventDefault()},"$1","gfS",4,0,39],
jx:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ay(this.y)
v=this.aB(this.y)
this.d.fO(w,v,x)}},"$1","gfT",4,0,11],
jD:[function(a){var z
H.d(a,"$isbv")
this.a.focus()
this.f=!0
this.cn(a)
z=this.cg(a)
if(this.e.iD(z))a.preventDefault()},"$1","gh_",4,0,12],
jB:[function(a){var z
H.d(a,"$isbv")
this.cn(a)
z=this.cg(a)
if(this.e.iB(z))a.preventDefault()},"$1","gfY",4,0,12],
jC:[function(a){var z
H.d(a,"$isbv")
this.cn(a)
z=this.cg(a)
if(this.e.iC(z))a.preventDefault()},"$1","gfZ",4,0,12]}}],["","",,D,{"^":"",cx:{"^":"b;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z},
aJ:[function(a){var z
H.d(a,"$isB")
z=this.d
if(!(z==null))z.F(a)},function(){return this.aJ(null)},"j7","$1","$0","gf6",0,2,1],
$isa7:1,
$isaY:1},a7:{"^":"b;",$isaY:1},iJ:{"^":"aU;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.N()
this.Q=z}return z},
aJ:function(a){var z=this.Q
if(!(z==null))z.F(a)},
fN:[function(a){var z
H.d(a,"$isB")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.fN(null)},"js","$1","$0","gdA",0,2,1],
jy:[function(a){var z,y,x
H.v(a,"$isj",[D.a7],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f5(x))return!1}return!0},"$1","gfV",4,0,41],
jf:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a7
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdA(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.d(b[u],"$isa7")
if(t instanceof D.cx)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bg()
s.d=0
t.d=s}H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfA",8,0,18],
jA:[function(a,b){var z,y,x,w,v,u
z=D.a7
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdA(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.d(b[w],"$isa7")
if(v instanceof D.cx)C.a.L(this.e,v)
u=v.d
if(u==null){u=new D.bg()
u.d=0
v.d=u}u.L(0,x)}z=new D.cC(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfX",8,0,18],
f5:function(a){var z=C.a.X(this.e,a)
return z},
$asj:function(){return[D.a7]},
$asaU:function(){return[D.a7]}},jm:{"^":"b;",$isa7:1,$isaY:1},k_:{"^":"b;",$isa7:1,$isaY:1},kf:{"^":"b;",$isa7:1,$isaY:1},kg:{"^":"b;",$isa7:1,$isaY:1},kh:{"^":"b;",$isa7:1,$isaY:1}}],["","",,V,{"^":"",
oy:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","j7",8,0,40],
om:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.an(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.e.eB($.q.$2(a,0)?0:a,b),c+b+1)},
bB:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.t],"$ase")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.af(z[u],x))}return z},
e1:function(a,b){return C.e.j_(Math.pow(b,C.Q.b9(Math.log(H.ni(a))/Math.log(b))))},
a8:{"^":"b;a,b,c",
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
return new V.a8(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
c8:{"^":"b;a,b,c,d",
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
return new V.c8(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c8))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
cG:{"^":"b;a,b,c,d,e,f,r,x,y",
ah:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscG")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.e.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.e.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.e.j(t,s)
q=a5.b
p=C.e.j(z,q)
o=a5.e
n=C.e.j(w,o)
m=a5.x
l=C.e.j(t,m)
k=a5.c
z=C.e.j(z,k)
j=a5.f
w=C.e.j(w,j)
i=a5.y
t=C.e.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.e.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.e.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.e.j(d,s)
b=C.e.j(h,q)
a=C.e.j(f,o)
a0=C.e.j(d,m)
h=C.e.j(h,k)
f=C.e.j(f,j)
d=C.e.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.e.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.e.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cG(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cG))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.bB(H.c([this.a,this.d,this.r],z),3,0)
x=V.bB(H.c([this.b,this.e,this.x],z),3,0)
w=V.bB(H.c([this.c,this.f,this.y],z),3,0)
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
ay:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ah:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
el:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.q.$2(a2,0))return V.ch()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isay")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.n(s)
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
if(typeof o!=="number")return H.n(o)
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
if(typeof k!=="number")return H.n(k)
j=a7.d
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
if(typeof g!=="number")return H.n(g)
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
if(typeof u!=="number")return H.n(u)
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
return new V.K(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.a2(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
ed:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.bB(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bB(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bB(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bB(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.ed("",3,0)},
D:function(a){return this.ed(a,3,0)},
t:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eU:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.G(c)))
y=b.aD(z)
x=y.w(0,Math.sqrt(y.G(y)))
w=z.aD(x)
v=new V.K(a.a,a.b,a.c)
return V.aI(x.a,w.a,z.a,x.S(0).G(v),x.b,w.b,z.b,w.S(0).G(v),x.c,w.c,z.c,z.S(0).G(v),0,0,0,1)}}},
a1:{"^":"b;a,b",
J:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.a1(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
a2:{"^":"b;a,b,c",
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.n(w)
return new V.a2(this.a+z,this.b+y,x+w)},
J:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.J()
if(typeof w!=="number")return H.n(w)
return new V.a2(this.a-z,this.b-y,x-w)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.a2(this.a*b,this.b*b,z*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
ci:{"^":"b;a,b,c,d",
j:function(a,b){return new V.ci(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ci))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
f3:{"^":"b;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f3))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
t:{
f4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f3(a,b,c,d)}}},
a_:{"^":"b;a,b",
ij:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a_(z*b,y*b)},
w:function(a,b){var z,y
if($.q.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a_(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
K:{"^":"b;a,b,c",
ij:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
cQ:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.J()
if(typeof x!=="number")return H.n(x)
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
aD:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.n(w)
return new V.K(this.a+z,this.b+y,x+w)},
S:function(a){var z=this.c
if(typeof z!=="number")return z.S()
return new V.K(-this.a,-this.b,-z)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.K(this.a*b,this.b*b,z*b)},
w:function(a,b){var z
if($.q.$2(b,0))return new V.K(0,0,0)
z=this.c
if(typeof z!=="number")return z.w()
return new V.K(this.a/b,this.b/b,z/b)},
em:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i0:{"^":"el;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c2:function(a){var z=V.om(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.F(a)},
sd4:function(a,b){},
scR:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c2(z)}z=new D.T("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.T(z)}},
scT:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c2(z)}z=new D.T("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.T(z)}},
sa_:function(a,b){var z,y
b=this.c2(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.T("location",y,b,this,[P.t])
z.b=!0
this.T(z)}},
scS:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.T("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.T(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.T("velocity",x,a,this,[P.t])
z.b=!0
this.T(z)}},
scF:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.T("dampening",y,a,this,[P.t])
z.b=!0
this.T(z)}},
aw:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
d9:function(){var z=new U.i0()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},en:{"^":"ai;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.en))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
t:{
eo:function(a){var z=new U.en()
z.a=a
return z}}},eE:{"^":"aU;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
T:[function(a){var z
H.d(a,"$isB")
z=this.e
if(!(z==null))z.F(a)},function(){return this.T(null)},"ai","$1","$0","gaK",0,2,1],
je:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ai
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gC()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfz",8,0,31],
jz:[function(a,b){var z,y,x,w,v
z=U.ai
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gC().L(0,x)}z=new D.cC(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfW",8,0,31],
b_:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.b_(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.ab(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eE))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ai]},
$asaU:function(){return[U.ai]},
$isai:1},ai:{"^":"el;"},kN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
T:[function(a){var z
H.d(a,"$isB")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.T(null)},"ai","$1","$0","gaK",0,2,1],
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdR().h(0,this.gcb())
this.a.c.gen().h(0,this.gcc())
this.a.c.gbT().h(0,this.gcd())
return!0},
ft:[function(a){H.d(a,"$isB")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcb",4,0,2],
fu:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isB"),"$isbM")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.a_(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.a_(y.a,y.b).j(0,2).w(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.a_(x.a,x.b).j(0,2).w(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sa_(0,-v*u+t)
this.b.sU(0)
y=y.J(0,a.z)
this.Q=new V.a_(y.a,y.b).j(0,2).w(0,z.ga9())}this.ai()},"$1","gcc",4,0,2],
fv:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sU(y*10*x)
this.ai()}},"$1","gcd",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.ch=y
x=b.y
this.b.aw(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aI(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},kO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
T:[function(a){var z
H.d(a,"$isB")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.T(null)},"ai","$1","$0","gaK",0,2,1],
b6:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdR().h(0,this.gcb())
this.a.c.gen().h(0,this.gcc())
this.a.c.gbT().h(0,this.gcd())
z=this.a.d
y=z.f
if(y==null){y=D.N()
z.f=y
z=y}else z=y
z.h(0,this.gfp())
z=this.a.d
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.gfq())
z=this.a.e
y=z.b
if(y==null){y=D.N()
z.b=y
z=y}else z=y
z.h(0,this.ghk())
z=this.a.e
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.ghj())
z=this.a.e
y=z.c
if(y==null){y=D.N()
z.c=y
z=y}else z=y
z.h(0,this.ghi())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a_(z,y)},
ft:[function(a){a=H.l(H.d(a,"$isB"),"$isbM")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcb",4,0,2],
fu:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isB"),"$isbM")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.a_(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga9()))}this.ai()},"$1","gcc",4,0,2],
fv:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sU(-y*10*z)
this.ai()}},"$1","gcd",4,0,2],
jb:[function(a){if(H.l(H.d(a,"$isB"),"$iseR").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfp",4,0,2],
jc:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isB"),"$isbM")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga9()))
this.ai()},"$1","gfq",4,0,2],
jH:[function(a){H.d(a,"$isB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghk",4,0,2],
jG:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isB"),"$isfk")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.a_(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sa_(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.J(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga9()))}this.ai()},"$1","ghj",4,0,2],
jF:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sU(-y*10*z)
this.ai()}},"$1","ghi",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.dy=y
x=b.y
this.c.aw(0,x)
this.b.aw(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aI(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},kP:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.F(a)},
b6:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=this.gfw()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jd:[function(a){var z,y,x,w
H.d(a,"$isB")
if(!J.R(this.b,this.a.b.c))return
H.l(a,"$isdn")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.T("zoom",z,w,this,[P.t])
z.b=!0
this.T(z)}},"$1","gfw",4,0,2],
b_:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aI(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",ik:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b0:[function(a){var z
H.d(a,"$isB")
z=this.x
if(!(z==null))z.F(a)},function(){return this.b0(null)},"j8","$1","$0","gaL",0,2,1],
jk:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aW
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bg()
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.b0(z)},"$2","gfF",8,0,9],
jl:[function(a,b){var z,y,x,w,v,u
z=E.aW
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaL(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga5()==null){u=new D.bg()
u.d=0
v.sa5(u)}v.ga5().L(0,x)}}z=new D.cC(a,b,this,[z])
z.b=!0
this.b0(z)},"$2","gfG",8,0,9],
gC:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ex(this.c)
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
if(typeof x!=="number")return H.n(x)
u=C.e.ag(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.e.ag(v.b*w)
s=C.e.ag(v.c*x)
a.c=s
v=C.e.ag(v.d*w)
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
a.cy.ew(n)
y=$.f_
if(y==null){y=V.eU(new V.a2(0,0,0),new V.K(0,1,0),new V.K(0,0,-1))
$.f_=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.j(0,m)}a.db.ew(m)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aw(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aY(a)
this.a.toString
a.cy.cV()
a.db.cV()
this.b.toString
a.ev()},
$ispd:1}}],["","",,A,{"^":"",ea:{"^":"b;a,b,c"},hP:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
i_:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j1:{"^":"f6;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0at,0am,0bz,0dS,0bA,0bB,0dT,0dU,0bC,0bD,0dV,0dW,0bE,0bF,0dX,0dY,0bG,0dZ,0e_,0bH,0e0,0e1,0bI,0bJ,0bK,0e2,0e3,0bL,0bM,0e4,0e5,0bN,0e6,0cH,0e7,0cI,0e8,0cJ,0e9,0cK,0ea,0cL,0eb,0cM,a,b,0c,0d,0e,0f,0r,0x,0y",
eW:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.an("")
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
a2.hn(z)
a2.hu(z)
a2.ho(z)
a2.hC(z)
a2.hD(z)
a2.hw(z)
a2.hH(z)
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
z=new P.an("")
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
x.hr(z)
x.hm(z)
x.hp(z)
x.hs(z)
x.hA(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hy(z)
x.hz(z)}x.hv(z)
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
x.hq(z)
x.hx(z)
x.hB(z)
x.hE(z)
x.hF(z)
x.hG(z)
x.ht(z)}r=z.a+="// === Main ===\n"
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
this.e=this.ds(s,35633)
this.f=this.ds(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dT(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.p(P.u("Failed to link shader: "+H.i(m)))}this.hd()
this.hf()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$isb_")
if(y)this.dy=H.l(this.y.q(0,"objMat"),"$isb_")
if(w)this.fr=H.l(this.y.q(0,"viewObjMat"),"$isb_")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$isb_")
if(a2.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$isdD")
if(a2.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$isb_")
if(a2.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$isb_")
this.r1=H.c([],[A.b_])
y=a2.at
if(y>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$isQ")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.p(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.l(k,"$isb_"))}}y=a2.a
if(y!==C.c){this.r2=H.l(this.y.q(0,"emissionClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.l(this.y.q(0,"emissionTxt"),"$isar")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$isQ")
break
case C.h:this.ry=H.l(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$isQ")
break}}y=a2.b
if(y!==C.c){this.x2=H.l(this.y.q(0,"ambientClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.l(this.y.q(0,"ambientTxt"),"$isar")
this.at=H.l(this.y.q(0,"nullAmbientTxt"),"$isQ")
break
case C.h:this.y2=H.l(this.y.q(0,"ambientTxt"),"$isas")
this.at=H.l(this.y.q(0,"nullAmbientTxt"),"$isQ")
break}}y=a2.c
if(y!==C.c){this.am=H.l(this.y.q(0,"diffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.bz=H.l(this.y.q(0,"diffuseTxt"),"$isar")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$isQ")
break
case C.h:this.dS=H.l(this.y.q(0,"diffuseTxt"),"$isas")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$isQ")
break}}y=a2.d
if(y!==C.c){this.bB=H.l(this.y.q(0,"invDiffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.dT=H.l(this.y.q(0,"invDiffuseTxt"),"$isar")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$isQ")
break
case C.h:this.dU=H.l(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$isQ")
break}}y=a2.e
if(y!==C.c){this.bF=H.l(this.y.q(0,"shininess"),"$isa3")
this.bD=H.l(this.y.q(0,"specularClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.dV=H.l(this.y.q(0,"specularTxt"),"$isar")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$isQ")
break
case C.h:this.dW=H.l(this.y.q(0,"specularTxt"),"$isas")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$isQ")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dX=H.l(this.y.q(0,"bumpTxt"),"$isar")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$isQ")
break
case C.h:this.dY=H.l(this.y.q(0,"bumpTxt"),"$isas")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$isQ")
break}if(a2.dy){this.dZ=H.l(this.y.q(0,"envSampler"),"$isas")
this.e_=H.l(this.y.q(0,"nullEnvTxt"),"$isQ")
y=a2.r
if(y!==C.c){this.bH=H.l(this.y.q(0,"reflectClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.e0=H.l(this.y.q(0,"reflectTxt"),"$isar")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$isQ")
break
case C.h:this.e1=H.l(this.y.q(0,"reflectTxt"),"$isas")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$isQ")
break}}y=a2.x
if(y!==C.c){this.bJ=H.l(this.y.q(0,"refraction"),"$isa3")
this.bK=H.l(this.y.q(0,"refractClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.e2=H.l(this.y.q(0,"refractTxt"),"$isar")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$isQ")
break
case C.h:this.e3=H.l(this.y.q(0,"refractTxt"),"$isas")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$isQ")
break}}}y=a2.y
if(y!==C.c){this.bM=H.l(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.f:this.e4=H.l(this.y.q(0,"alphaTxt"),"$isar")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$isQ")
break
case C.h:this.e5=H.l(this.y.q(0,"alphaTxt"),"$isas")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$isQ")
break}}this.cH=H.c([],[A.fx])
this.cI=H.c([],[A.fy])
this.cJ=H.c([],[A.fz])
this.cK=H.c([],[A.fA])
this.cL=H.c([],[A.fB])
this.cM=H.c([],[A.fC])
if(a2.k2){y=a2.z
if(y>0){this.e6=H.d(this.y.q(0,"dirLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.cH;(x&&C.a).h(x,new A.fx(l,k,j))}}y=a2.Q
if(y>0){this.e7=H.d(this.y.q(0,"pntLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isO")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isa3")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa3")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa3")
x=this.cI;(x&&C.a).h(x,new A.fy(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e8=H.d(this.y.q(0,"spotLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isO")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isO")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa3")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa3")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa3")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa3")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(c,"$isa3")
x=this.cJ;(x&&C.a).h(x,new A.fz(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e9=H.d(this.y.q(0,"txtDirLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isO")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isO")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isO")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isQ")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isar")
x=this.cK;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ea=H.d(this.y.q(0,"txtPntLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isdD")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isO")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isQ")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa3")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa3")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(c,"$isas")
x=this.cL;(x&&C.a).h(x,new A.fB(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eb=H.d(this.y.q(0,"txtSpotLightCount"),"$isQ")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isO")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isO")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isO")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isO")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isO")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isQ")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isO")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa3")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(c,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(b,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a0,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a1,"$isar")
x=this.cM;(x&&C.a).h(x,new A.fC(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j0:function(a,b){var z,y
z=a.am
y=new A.j1(b,z)
y.eZ(b,z)
y.eW(a,b)
return y}}},j4:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,at,am,bz",
hn:function(a){var z,y,x
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
hu:function(a){var z
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
ho:function(a){var z
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
hC:function(a){var z,y
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
hD:function(a){var z,y
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
hw:function(a){var z
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
hH:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hr:function(a){var z,y
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
hm:function(a){var z,y
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
hp:function(a){var z,y
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
hs:function(a){var z,y
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
hA:function(a){var z,y
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
hv:function(a){var z,y
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
hy:function(a){var z,y
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
hz:function(a){var z,y
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
hq:function(a){var z,y
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
hx:function(a){var z,y
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
hB:function(a){var z,y
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
hE:function(a){var z,y,x
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
hF:function(a){var z,y,x
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
hG:function(a){var z,y,x
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
ht:function(a){var z
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
i:function(a){return this.am}},fx:{"^":"b;a,b,c"},fA:{"^":"b;a,b,c,d,e,f,r,x"},fy:{"^":"b;a,b,c,d,e,f,r"},fB:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f6:{"^":"d2;",
eZ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ds:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
hd:function(){var z,y,x,w,v,u
z=H.c([],[A.ea])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ea(y,v.name,u))}this.x=new A.hP(z)},
hf:function(){var z,y,x,w,v,u
z=H.c([],[A.aj])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hX(v.type,v.size,v.name,u))}this.y=new A.ky(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.Q(z,y,b,c)
else return A.dC(z,y,b,a,c)},
fk:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dC(z,y,b,a,c)},
fl:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dC(z,y,b,a,c)},
bt:function(a,b){return new P.fN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
hX:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kt(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.kw(this.a,this.r,c,d)
case 35667:return new A.ku(this.a,this.r,c,d)
case 35668:return new A.kv(this.a,this.r,c,d)
case 35669:return new A.kx(this.a,this.r,c,d)
case 35674:return new A.kA(this.a,this.r,c,d)
case 35675:return new A.dD(this.a,this.r,c,d)
case 35676:return new A.b_(this.a,this.r,c,d)
case 35678:return this.fk(b,c,d)
case 35680:return this.fl(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cw:{"^":"b;a,b",
i:function(a){return this.b}},aj:{"^":"b;"},ky:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
i9:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.i9("\n")}},Q:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ku:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kv:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kx:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},ks:{"^":"aj;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
t:{
dC:function(a,b,c,d,e){var z=new A.ks(a,b,c,e)
z.f=d
z.e=P.iS(d,0,!1,P.o)
return z}}},a3:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kt:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},O:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kw:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kA:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dD:{"^":"aj;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bx(H.v(a,"$ise",[P.t],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},b_:{"^":"aj;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bx(H.v(a,"$ise",[P.t],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ar:{"^":"aj;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},as:{"^":"aj;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
ho:function(a,b,c,d){var z
H.m(c,{func:1,ret:-1,args:[F.aC,P.t,P.t]})
z=F.du()
F.bX(z,b,c,d,a,1,0,0,1)
F.bX(z,b,c,d,a,0,1,0,3)
F.bX(z,b,c,d,a,0,0,1,2)
F.bX(z,b,c,d,a,-1,0,0,0)
F.bX(z,b,c,d,a,0,-1,0,0)
F.bX(z,b,c,d,a,0,0,-1,3)
z.a8()
return z},
cT:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bX()
return(y>0?z+4:z)*2},
bX:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.m(c,{func:1,ret:-1,args:[F.aC,P.t,P.t]})
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
z.d=y}l=F.cT(y)
k=F.cT(z.b)
j=F.cr(d,e,new F.n1(z,F.cT(z.c),F.cT(z.d),k,l,c),b)
if(j!=null)a.bO(j)},
nn:function(a,b,c,d,e,f){return F.np(!1,!1,d,new F.no(a,f),e)},
np:function(a,b,c,d,e){var z
H.m(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.cr(c,e,new F.ns(d),null)
if(z==null)return
z.a8()
z.bu()
return z},
nL:function(a,b){var z=F.cr(a,b,new F.nM(),null)
z.d.bS()
z.a8()
z.bu()
return z},
of:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.og()
y=F.ho(a,null,new F.oh(z,c),d)
y.bu()
return y},
oj:function(a,b,c,d){return F.nq(c,a,d,b,new F.ok())},
nq:function(a,b,c,d,e){var z=F.cr(a,b,new F.nr(H.m(e,{func:1,ret:V.a2,args:[P.t]}),d,b,c),null)
if(z==null)return
z.a8()
z.bu()
return z},
dY:function(a,b,c){var z={}
z.a=b
z.a=new F.nA()
return F.cr(c,a,new F.nB(z),null)},
cr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.aC,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.du()
y=H.c([],[F.aC])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dG(null,null,new V.c8(u,0,0,1),null,null,new V.a1(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cE(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dG(null,null,new V.c8(o,n,m,1),null,null,new V.a1(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cE(d))}}z.d.hJ(a+1,b+1,y)
return z},
n1:{"^":"k:4;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cQ(z.b,b).cQ(z.d.cQ(z.c,b),c)
a.sa_(0,new V.a2(y.a,y.b,y.c))
a.sd1(y.w(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.scu(new V.ci(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
no:{"^":"k:13;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
ns:{"^":"k:4;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sa_(0,new V.a2(y,u,w))
u=new V.K(y,u,w)
a.sd1(u.w(0,Math.sqrt(u.G(u))))
a.scu(new V.ci(1-c,2+c,-1,-1))}},
nM:{"^":"k:4;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.K(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.w(0,Math.sqrt(w.G(w)))
a.sa_(0,new V.a2(x.a,x.b,x.c))}},
og:{"^":"k:13;",
$2:function(a,b){return 0}},
oh:{"^":"k:4;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.K(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.G(x))).j(0,this.b+z)
a.sa_(0,new V.a2(z.a,z.b,z.c))}},
ok:{"^":"k:48;",
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)}},
nr:{"^":"k:4;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e4(y.$1(z),x)
x=J.e4(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.K(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.G(x)))
u=new V.K(1,0,0)
y=v.aD(!v.v(0,u)?new V.K(0,0,1):u)
t=y.w(0,Math.sqrt(y.G(y)))
y=t.aD(v)
u=y.w(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.J()
if(typeof q!=="number")return H.n(q)
a.sa_(0,w.B(0,new V.a2(y.a-x.a,y.b-x.b,r-q)))}},
nA:{"^":"k:13;",
$2:function(a,b){return 0}},
nB:{"^":"k:4;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa_(0,new V.a2(z,y,this.a.a.$2(b,c)))
x=new V.K(z,y,1)
a.sd1(x.w(0,Math.sqrt(x.G(x))))
x=1-b
w=1-c
a.scu(new V.ci(b*c,2+x*c,4+b*w,6+x*w))}},
ax:{"^":"b;0a,0b,0c,0d,0e",
aE:function(){if(!this.gb8()){C.a.L(this.a.a.d.b,this)
this.a.a.a1()}this.cj()
this.ck()
this.h2()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
hc:function(a){this.c=a
C.a.h(a.d.d,this)},
cj:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
ck:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
h2:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fd:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.em())return
return v.w(0,Math.sqrt(v.G(v)))},
fg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.G(z)))
z=w.J(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aD(z.w(0,Math.sqrt(z.G(z))))
return z.w(0,Math.sqrt(z.G(z)))},
cB:function(){if(this.d!=null)return!0
var z=this.fd()
if(z==null){z=this.fg()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
fc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.em())return
return v.w(0,Math.sqrt(v.G(v)))},
ff:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.J(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.J(0,u).j(0,l).B(0,u).J(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.G(z)))
z=k.aD(m)
z=z.w(0,Math.sqrt(z.G(z))).aD(k)
m=z.w(0,Math.sqrt(z.G(z)))}return m},
cz:function(){if(this.e!=null)return!0
var z=this.fc()
if(z==null){z=this.ff()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
ghS:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y
if(this.gb8())return a+"disposed"
z=a+C.b.af(J.ac(this.a.e),0)+", "+C.b.af(J.ac(this.b.e),0)+", "+C.b.af(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.D("")},
t:{
ca:function(a,b,c){var z,y,x
z=new F.ax()
y=a.a
if(y==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.u("May not create a face with vertices attached to different shapes."))
z.co(a)
z.cp(b)
z.hc(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
ip:{"^":"b;"},
jZ:{"^":"ip;",
bc:function(a,b,c){var z,y
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
dh:{"^":"b;0a,0b",
aE:function(){if(!this.gb8()){C.a.L(this.a.a.c.b,this)
this.a.a.a1()}this.cj()
this.ck()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
cj:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
ck:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){if(this.gb8())return a+"disposed"
return a+C.b.af(J.ac(this.a.e),0)+", "+C.b.af(J.ac(this.b.e),0)},
O:function(){return this.D("")},
t:{
iK:function(a,b){var z,y,x
z=new F.dh()
y=a.a
if(y==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.u("May not create a line with vertices attached to different shapes."))
z.co(a)
z.cp(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a1()
return z}}},
iL:{"^":"b;"},
kr:{"^":"iL;",
bc:function(a,b,c){var z,y
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
ds:{"^":"b;0a",
aE:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.a1()}this.h1()},
h1:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.af(J.ac(z.e),0)},
O:function(){return this.D("")}},
cJ:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
bO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hU())}this.a.A()
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
s=new F.ds()
if(r.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.F(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
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
F.iK(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
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
F.ca(p,o,m)}z=this.e
if(!(z==null))z.ab(0)},
a8:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.a8()||!1
if(!this.a.a8())y=!1
z=this.e
if(!(z==null))z.ab(0)
return y},
hM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
w=v.y
u=C.e.b9(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.J()
s=C.e.b9(w*(t-1))
w=a.b
u=u>=0?C.d.an(u,w):w+C.d.an(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.n(t)
s=C.d.an(s,t)}else{if(typeof t!=="number")return H.n(t)
s=t+C.d.an(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.f(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.f(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.f(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.f(z,p)
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
if(typeof t!=="number")return t.j()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.B()
t=new V.a2(n+q*o,m+p*o,l+t*o)
if(!J.R(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.F(null)}}}z=this.e
if(!(z==null))z.ab(0)},
j5:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.f(w,y)
v=w[y]
if((x&$.$get$aO().a)===0)v.f=null
if((x&$.$get$aD().a)===0)v.r=null
if((x&$.$get$aN().a)===0)v.x=null
if((x&$.$get$aP().a)===0)v.y=null
if((x&$.$get$aQ().a)===0)v.z=null
if((x&$.$get$dI().a)===0)v.Q=null
if((x&$.$get$ba().a)===0)v.ch=0
if((x&$.$get$aM().a)===0)v.cx=null}z=this.e
if(!(z==null))z.ab(0)},
j4:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.f(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.ab(0)},
j3:function(a){return this.j4(!0,a)},
iq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.aC];y.length!==0;){x=C.a.gi4(y)
C.a.iL(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.C)(y),++u){t=y[u]
if(t!=null&&a.bc(0,x,t)){C.a.h(w,t)
C.a.L(y,t)}}if(w.length>1)b.bO(w)}}this.a.A()
this.c.bS()
this.d.bS()
this.b.iM()
this.c.cY(new F.kr())
this.d.cY(new F.jZ())
z=this.e
if(!(z==null))z.ab(0)},
hK:function(a){this.iq(new F.l2(),new F.jg())},
bu:function(){return this.hK(null)},
hQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aO()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$bR().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$ba().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gdc(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.eg])
for(r=0,q=0;q<w;++q){p=b.hN(q)
o=p.gdc(p)
C.a.p(s,q,new Z.eg(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ik(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bx(t)),35044)
y.bindBuffer(34962,null)
i=new Z.eh(new Z.fJ(34962,j),s,b)
i.b=H.c([],[Z.cA])
if(this.b.b.length!==0){x=P.o
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(1,h.length,f))}if(this.d.b.length!==0){x=P.o
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
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.n(z,"\n")},
aa:function(a){var z=this.e
if(!(z==null))z.F(a)},
a1:function(){return this.aa(null)},
t:{
du:function(){var z,y
z=new F.cJ()
y=new F.kY(z)
y.b=!1
y.c=H.c([],[F.aC])
z.a=y
y=new F.jT(z)
y.b=H.c([],[F.ds])
z.b=y
y=new F.jS(z)
y.b=H.c([],[F.dh])
z.c=y
y=new F.jR(z)
y.b=H.c([],[F.ax])
z.d=y
z.e=null
return z}}},
jR:{"^":"b;a,0b",
hJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.aC],"$ase")
z=H.c([],[F.ax])
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
C.a.h(z,F.ca(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.ca(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.ca(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.ca(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.bc(0,v,t)){v.aE()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghS(x)
if(y)x.aE()}},
a8:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cB())x=!1
return x},
cA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cz())x=!1
return x},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}},
jS:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.bc(0,v,t)){v.aE()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.R(x.a,x.b)
if(y)x.aE()}},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.n(z,"\n")},
O:function(){return this.D("")}},
jT:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iM:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aE()}},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}},
aC:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cE:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dG(this.cx,x,u,z,y,w,v,a,t)},
hU:function(){return this.cE(null)},
sa_:function(a,b){var z
if(!J.R(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a1()}},
sd1:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
scu:function(a){var z
if(!J.R(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a1()}},
ik:function(a){var z,y
z=J.L(a)
if(z.v(a,$.$get$aO())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aD())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aN())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aP())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$aQ())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bR())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bS())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$ba()))return H.c([this.ch],[P.t])
else if(z.v(a,$.$get$aM())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
cB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.I(0,new F.l7(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
cz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.I(0,new F.l6(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.af(J.ac(this.e),0))
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
x=C.a.n(z,", ")
return a+"{"+x+"}"},
O:function(){return this.D("")},
t:{
dG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aC()
y=new F.l5(z)
y.b=H.c([],[F.ds])
z.b=y
y=new F.l1(z)
x=[F.dh]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kZ(z)
x=[F.ax]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$dH()
z.e=0
y=$.$get$aO()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aP().a)!==0?f:null
z.z=(x&$.$get$aQ().a)!==0?g:null
z.Q=(x&$.$get$dI().a)!==0?c:null
z.ch=(x&$.$get$ba().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
l7:{"^":"k:7;a",
$1:function(a){var z,y
H.d(a,"$isax")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
l6:{"^":"k:7;a",
$1:function(a){var z,y
H.d(a,"$isax")
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
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a1()
return!0},
gm:function(a){return this.c.length},
a8:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cB()
return!0},
cA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cz()
return!0},
hR:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.j()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}},
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
I:function(a,b){H.m(b,{func:1,ret:-1,args:[F.ax]})
C.a.I(this.b,b)
C.a.I(this.c,new F.l_(this,b))
C.a.I(this.d,new F.l0(this,b))},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}},
l_:{"^":"k:7;a,b",
$1:function(a){H.d(a,"$isax")
if(!J.R(a.a,this.a))this.b.$1(a)}},
l0:{"^":"k:7;a,b",
$1:function(a){var z
H.d(a,"$isax")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
l1:{"^":"b;a,0b,0c",
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
D:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}},
l3:{"^":"b;"},
l2:{"^":"l3;",
bc:function(a,b,c){return J.R(b.f,c.f)}},
l4:{"^":"b;"},
jg:{"^":"l4;",
bO:function(a){var z,y,x,w,v,u,t,s,r
H.v(a,"$ise",[F.aC],"$ase")
z=new V.K(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.B()
if(typeof w!=="number")return H.n(w)
z=new V.K(z.a+v,z.b+u,t+w)}}z=z.w(0,Math.sqrt(z.G(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){s=a[x]
if(typeof w!=="number")return w.j()
r=z.w(0,Math.sqrt(v+w*w))
if(!J.R(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.F(null)}}}return}},
l5:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.n(z,"\n")},
O:function(){return this.D("")}}}],["","",,O,{"^":"",j_:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.N()
this.dy=z}return z},
aj:[function(a){var z
H.d(a,"$isB")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.aj(null)},"jj","$1","$0","gfE",0,2,1],
h6:[function(a){H.d(a,"$isB")
this.a=null
this.aj(a)},function(){return this.h6(null)},"jE","$1","$0","gh5",0,2,1],
jg:[function(a,b){var z=V.ay
z=new D.cB(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.aj(z)},"$2","gfB",8,0,32],
jh:[function(a,b){var z=V.ay
z=new D.cC(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.aj(z)},"$2","gfC",8,0,32],
dn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aO()
if(c){z=$.$get$aD()
a6=new Z.b9(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.b9(a6.a|z.a)}if(a){z=$.$get$aP()
a6=new Z.b9(a6.a|z.a)}if(a0){z=$.$get$aQ()
a6=new Z.b9(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.b9(a6.a|z.a)}return new A.j4(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.v(a,"$ise",[T.dz],"$ase")},
aw:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.K(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d2(x)}}},
iO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dn()
y=a.fr.k(0,z.am)
if(y==null){y=A.j0(z,a.a)
x=y.b
if(x.length===0)H.p(P.u("May not cache a shader with no name."))
if(a.fr.bx(0,x))H.p(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bz
z=b.e
if(!(z instanceof Z.eh)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.a8()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cA()
t.a.cA()
t=t.e
if(!(t==null))t.ab(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hR()
s=s.e
if(!(s==null))s.ab(0)}q=b.d.hQ(new Z.l8(a.a),v)
q.aV($.$get$aO()).e=this.a.Q.c
if(z)q.aV($.$get$aD()).e=this.a.cx.c
if(u)q.aV($.$get$aN()).e=this.a.ch.c
if(w.rx)q.aV($.$get$aP()).e=this.a.cy.c
if(t)q.aV($.$get$aQ()).e=this.a.db.c
if(w.x1)q.aV($.$get$aM()).e=this.a.dx.c
b.e=q}z=T.dz
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.i1()
if(w.fx){u=this.a
t=a.dx
t=t.ga0(t)
u=u.dy
u.toString
u.ao(t.ah(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga0(t)
s=a.dx
s=t.j(0,s.ga0(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ao(t.ah(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giI()
s=a.dx
s=t.j(0,s.ga0(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ao(t.ah(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ao(t.ah(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ao(t.ah(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ao(C.w.ah(t,!0))}if(w.at>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.d(s,"$isay")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.bx(H.v(s.ah(0,!0),"$ise",u,"$ase")))
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
case C.f:this.W(p,this.f.d)
u=this.a
t=this.f.d
u.ak(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.f.e)
u=this.a
t=this.f.e
u.ad(u.ry,u.x1,t)
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
case C.f:this.W(p,this.r.d)
u=this.a
t=this.r.d
u.ak(u.y1,u.at,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.r.e)
u=this.a
t=this.r.e
u.ad(u.y2,u.at,t)
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
u=u.am
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ak(u.bz,u.bA,t)
t=this.a
u=this.x.f
t=t.am
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.ad(u.dS,u.bA,t)
t=this.a
u=this.x.f
t=t.am
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bB
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.y.d)
u=this.a
t=this.y.d
u.ak(u.dT,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.y.e)
u=this.a
t=this.y.e
u.ad(u.dU,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bD
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bF
t.a.uniform1f(t.d,r)
break
case C.f:this.W(p,this.z.d)
u=this.a
t=this.z.d
u.ak(u.dV,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break
case C.h:this.W(p,this.z.e)
u=this.a
t=this.z.e
u.ad(u.dW,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e6
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cH
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.d2(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.j()
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.e7
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cI
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbg(i)
r=h.b
g=s.gd5(s)
f=s.gd6(s)
s=s.gd7(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bm(i.gbg(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gas(i)
f=h.d
g=s.gbR()
r=s.gbn()
s=s.gbw()
f.a.uniform3f(f.d,g,r,s)
s=i.gcr()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcs()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gct()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.e8
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cJ
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbg(i)
r=h.b
g=s.gd5(s)
f=s.gd6(s)
s=s.gd7(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcG(i).jM()
f=h.c
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=l.bm(i.gbg(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gas(i)
r=h.e
g=s.gbR()
f=s.gbn()
s=s.gbw()
r.a.uniform3f(r.d,g,f,s)
s=i.gjK()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjI()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcr()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcs()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gct()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.e9
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cK
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbj()
H.v(p,"$ise",s,"$ase")
if(!C.a.X(p,r)){r.sba(0,p.length)
C.a.h(p,r)}r=i.gcG(i)
g=h.d
f=r.gaS(r)
e=r.gaT(r)
r=r.gaU()
g.a.uniform3f(g.d,f,e,r)
r=i.gbT()
e=h.b
f=r.gaS(r)
g=r.gaT(r)
r=r.gaU()
e.a.uniform3f(e.d,f,g,r)
r=i.gbi(i)
g=h.c
f=r.gaS(r)
e=r.gaT(r)
r=r.gaU()
g.a.uniform3f(g.d,f,e,r)
r=l.d2(i.gcG(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.j()
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gas(i)
f=h.f
e=g.gbR()
r=g.gbn()
g=g.gbw()
f.a.uniform3f(f.d,e,r,g)
g=i.gbj()
r=g.gbb(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gbb(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gba(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.ea
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cL
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbj()
H.v(p,"$ise",r,"$ase")
if(!C.a.X(p,g)){g.sba(0,p.length)
C.a.h(p,g)}d=l.j(0,i.ga0(i))
g=i.ga0(i).bm(new V.a2(0,0,0))
f=h.b
e=g.gd5(g)
c=g.gd6(g)
g=g.gd7(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bm(new V.a2(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.el(0)
c=h.d
m=new Float32Array(H.bx(H.v(new V.cG(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ah(0,!0),"$ise",s,"$ase")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gas(i)
g=h.e
e=c.gbR()
f=c.gbn()
c=c.gbw()
g.a.uniform3f(g.d,e,f,c)
c=i.gbj()
g=c.gbb(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbb(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gba(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcr()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcs()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gct()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.eb
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cM
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbj()
H.v(p,"$ise",z,"$ase")
if(!C.a.X(p,s)){s.sba(0,p.length)
C.a.h(p,s)}s=i.gbg(i)
r=h.b
g=s.gd5(s)
f=s.gd6(s)
s=s.gd7(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcG(i)
f=h.c
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=i.gbT()
r=h.d
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
r.a.uniform3f(r.d,g,f,s)
s=i.gbi(i)
f=h.e
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=l.bm(i.gbg(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbj()
r=s.gbb(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gbb(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gba(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gas(i)
r=h.y
g=s.gbR()
f=s.gbn()
s=s.gbw()
r.a.uniform3f(r.d,g,f,s)
s=i.gjT()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjU()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcr()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcs()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gct()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.dX,z.bG,u)
break
case C.h:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.dY,z.bG,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga0(u).el(0)
a.Q=u}z=z.id
z.toString
z.ao(u.ah(0,!0))}if(w.dy){this.W(p,this.ch)
z=this.a
u=this.ch
z.ad(z.dZ,z.e_,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bH
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.W(p,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.e0,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.W(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.e1,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bK
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bJ
u.a.uniform1f(u.d,s)
break
case C.f:this.W(p,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.e2,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break
case C.h:this.W(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.e3,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bM
z.a.uniform1f(z.d,t)
break
case C.f:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ak(z.e4,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break
case C.h:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.ad(z.e5,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bv(a)
z=b.e
z.bv(a)
z.aY(a)
z.eD(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].eD(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.i_()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dn().am}},j2:{"^":"dl;0f,a,b,0c,0d,0e"},dl:{"^":"b;",
br:["eT",function(){}]},j3:{"^":"dl;a,b,0c,0d,0e"},bj:{"^":"dl;0f,a,b,0c,0d,0e",
dE:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.T(this.b+".color",z,a,this,[V.a8])
y.b=!0
this.a.aj(y)}},
br:["c0",function(){this.eT()
this.dE(new V.a8(1,1,1))}],
sas:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.br()
z=this.a
z.a=null
z.aj(null)}this.dE(b)}},j5:{"^":"bj;0ch,0f,a,b,0c,0d,0e",
hb:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.T(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.aj(z)}},
br:function(){this.c0()
this.hb(1)}},j6:{"^":"bj;0ch,0f,a,b,0c,0d,0e",
cl:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.T(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.aj(z)}},
br:function(){this.c0()
this.cl(100)}},dy:{"^":"b;"}}],["","",,T,{"^":"",dz:{"^":"d2;"},k7:{"^":"dz;"},kb:{"^":"k7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z}},kc:{"^":"b;a,0b,0c,0d,0e",
io:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eF(null,a,null)
w=new T.kb()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.af
W.a4(x,"load",H.m(new T.kd(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
im:function(a){return this.io(a,!1,!1,!1,!1)},
h7:function(a,b,c){var z,y,x,w
b=V.e1(b,2)
z=V.e1(a.width,2)
y=V.e1(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d7(null,null)
x.width=z
x.height=y
w=H.d(C.l.eI(x,"2d"),"$isek")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nm(w.getImageData(0,0,x.width,x.height))}}},kd:{"^":"k:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h7(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.iX(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.i0()}++x.e}},ke:{"^":"b;a,b,c"}}],["","",,V,{"^":"",bF:{"^":"b;",
aX:function(a,b){return!0},
i:function(a){return"all"},
$isaX:1},aX:{"^":"b;"},eT:{"^":"b;",
aX:["eS",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aX(0,b))return!0
return!1}],
i:["dd",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaX:1},az:{"^":"eT;0a",
aX:function(a,b){return!this.eS(0,b)},
i:function(a){return"!["+this.dd(0)+"]"}},jA:{"^":"b;0a,0b",
aX:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bP(this.a)
y=H.bP(this.b)
return z+".."+y},
$isaX:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jA()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jP:{"^":"b;0a",
eY:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b7(0,0,[P.o,P.U])
for(y=new H.dj(a,a.gm(a),0,[H.am(a,"z",0)]);y.E();)z.p(0,y.d,!0)
this.a=z},
aX:function(a,b){return this.a.bx(0,b)},
i:function(a){var z=this.a
return P.ck(z.ga7(z),0,null)},
$isaX:1,
t:{
x:function(a){var z=new V.jP()
z.eY(a)
return z}}},f8:{"^":"b;a,b,0c,0d",
gir:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fl(this.a.l(0,b))
w.a=H.c([],[V.aX])
w.c=!1
C.a.h(this.c,w)
return w},
i3:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aX(0,a))return w}return},
i:function(a){return this.b}},fi:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e3(this.b,"\n","\\n")
y=H.e3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fj:{"^":"b;a,b,0c",
aG:function(a,b,c){var z,y,x
H.v(c,"$ise",[P.h],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},km:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f8(this,b)
z.c=H.c([],[V.fl])
this.a.p(0,b,z)}return z},
P:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.fj(this,a)
y=P.h
z.c=new H.b7(0,0,[y,y])
this.b.p(0,a,z)}return z},
eC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fi])
y=this.c
x=[P.o]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.i3(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ck(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.gir(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ck(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fi(o==null?p.b:o,q,t)}++t}}},
t:{
cL:function(){var z,y
z=new V.km()
y=P.h
z.a=new H.b7(0,0,[y,V.f8])
z.b=new H.b7(0,0,[y,V.fj])
return z}}},fl:{"^":"eT;b,0c,0a",
i:function(a){return this.b.b+": "+this.dd(0)}}}],["","",,X,{"^":"",ej:{"^":"b;",$isaY:1},iu:{"^":"fc;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z}},jj:{"^":"b;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
b1:[function(a){var z
H.d(a,"$isB")
z=this.f
if(!(z==null))z.F(a)},function(){return this.b1(null)},"j9","$1","$0","gdf",0,2,1],
sbd:function(a){var z,y
if(!J.R(this.b,a)){z=this.b
if(z!=null)z.gC().L(0,this.gdf())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdf())
z=new D.T("mover",y,this.b,this,[U.ai])
z.b=!0
this.b1(z)}},
$isaY:1,
$isej:1},fc:{"^":"b;"}}],["","",,V,{"^":"",
od:function(a){P.kl(C.N,new V.oe(a))},
b4:{"^":"b;",
bp:function(a){this.b=new P.ix(C.O)
this.c=null
this.d=H.c([],[[P.e,W.be]])},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.be]))
y=a.split("\n")
for(z=y.length,x=[W.be],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fj(u,0,u.length)
r=s==null?u:s
C.M.eM(t,H.e3(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gav(this.d),t)}},
es:function(a,b){var z,y,x,w
H.v(b,"$ise",[P.h],"$ase")
this.d=H.c([],[[P.e,W.be]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.by()
this.c=y}for(y=y.eC(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bQ(y[w])}},
oe:{"^":"k:52;a",
$1:function(a){H.d(a,"$isbt")
P.e2(C.e.eB(this.a.gia(),2)+" fps")}},
i8:{"^":"b4;a,0b,0c,0d",
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
by:function(){var z,y,x,w
z=V.cL()
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
w=[V.aX]
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
y.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iv:{"^":"b4;a,0b,0c,0d",
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
by:function(){var z,y,x,w
z=V.cL()
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
w=[V.aX]
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
x.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iw:{"^":"b4;a,0b,0c,0d",
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
by:function(){var z,y,x
z=V.cL()
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
x.a=H.c([],[V.aX])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.P("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.P("String")
y=z.l(0,"Id")
x=y.a.P("Id")
y.d=x
x.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.P("Attr")
x=z.l(0,"Other")
x.d=x.a.P("Other")
return z}},
jl:{"^":"b4;a,0b,0c,0d",
es:function(a,b){H.v(b,"$ise",[P.h],"$ase")
this.d=H.c([],[[P.e,W.be]])
this.M(C.a.n(b,"\n"),"#111")},
bQ:function(a){},
by:function(){return}},
jy:{"^":"b;a,b,0c",
cq:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.m(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cO().gbh().k(0,H.i(z))
if(y==null)if(d){c.$0()
this.b5(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bE(this.c).h(0,v)
t=W.iA("radio")
t.checked=x
t.name=z
z=W.af
W.a4(t,"change",H.m(new V.jz(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bE(this.c).h(0,w.createElement("br"))},
a2:function(a,b,c){return this.cq(a,b,c,!1)},
b5:function(a){var z,y,x,w,v
z=P.cO()
y=P.h
x=P.eO(z.gbh(),y,y)
x.p(0,this.a,a)
w=z.cZ(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.h_([],[]).bU(""),"",v)},
t:{
f2:function(a,b){var z,y
z=new V.jy(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.p("Failed to find "+a+" for RadioGroup")
return z}}},
jz:{"^":"k:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.b5(this.d)}}},
jU:{"^":"b;0a,0b",
f_:function(a,b){var z,y,x,w,v,u,t
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
t=W.af
W.a4(z,"scroll",H.m(new V.jX(x),{func:1,ret:-1,args:[t]}),!1,t)},
dM:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.h],"$ase")
this.he()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eC(C.a.ii(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hA(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.co(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eH:function(a){var z,y,x,w
z=new V.i8("dart")
z.bp("dart")
y=new V.iv("glsl")
y.bp("glsl")
x=new V.iw("html")
x.bp("html")
w=C.a.i5(H.c([z,y,x],[V.b4]),new V.jY(a))
if(w!=null)return w
z=new V.jl("plain")
z.bp("plain")
return z},
dK:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$ise",[P.h],"$ase")
z=H.c([],[P.o])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c2(w).a4(w,"+")){C.a.p(a2,x,C.b.ap(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a4(w,"-")){C.a.p(a2,x,C.b.ap(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eH(a0)
v.es(0,a2)
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
n=W.e8(null)
n.href="#"+H.i(r)
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
for(b=C.a.gZ(w);b.E();)h.appendChild(b.gN(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hI:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[P.h],"$ase")
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
x=H.d(w.insertCell(-1),"$isdx").style
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
t=H.d(w.insertCell(-1),"$isdx")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
he:function(){var z,y,x,w
if(this.b!=null)return
z=V.cL()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.az()
w=[V.aX]
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
jV:function(a,b){var z=new V.jU()
z.f_(a,!0)
return z}}},
jX:{"^":"k:14;a",
$1:function(a){P.fg(C.q,new V.jW(this.a))}},
jW:{"^":"k:0;a",
$0:function(){var z,y,x
z=C.e.ag(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
jY:{"^":"k:53;a",
$1:function(a){return H.d(a,"$isb4").a===this.a}},
k8:{"^":"b;a,b,0c,d",
a2:function(a,b,c){var z,y,x,w,v,u
z=W.eF(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bE(this.c)
x=y.gm(y)
y=W.ah
W.a4(z,"click",H.m(new V.ka(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bE(this.c).h(0,z)
J.bE(this.c).h(0,document.createElement("br"))
w=P.cO().gbh().k(0,H.i(this.a))
if(w==null){this.b5(x)
v=c}else{u=P.c3(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.a2(a,b,!1)},
b5:function(a){var z,y,x,w,v
z=P.cO()
y=P.h
x=P.eO(z.gbh(),y,y)
x.p(0,this.a,H.i(a))
w=z.cZ(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.h_([],[]).bU(""),"",v)}},
ka:{"^":"k:54;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isah")
z=this.a
y=J.bE(z.c)
y.I(y,new V.k9())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.b5(this.d)}},
k9:{"^":"k:55;",
$1:function(a){var z
H.d(a,"$isP")
if(!!J.L(a).$isdb){z=a.style
z.border="solid 2px white"}}}}],["","",,K,{"^":"",
hw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
y=V.jV("Test 037",!0)
x=W.d7(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.h]
y.dM(H.c(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],w))
y.hI(H.c(["heightMaps","shapes","scalars"],w))
y.dM(H.c(["\xab[Back to Tests|../]"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
u=E.kj(v,!0,!0,!0,!1)
t=new O.j_()
s=O.d8(V.ay)
t.e=s
s.bo(t.gfB(),t.gfC())
s=new O.bj(t,"emission")
s.c=C.c
s.f=new V.a8(0,0,0)
t.f=s
s=new O.bj(t,"ambient")
s.c=C.c
s.f=new V.a8(0,0,0)
t.r=s
s=new O.bj(t,"diffuse")
s.c=C.c
s.f=new V.a8(0,0,0)
t.x=s
s=new O.bj(t,"invDiffuse")
s.c=C.c
s.f=new V.a8(0,0,0)
t.y=s
s=new O.j6(t,"specular")
s.c=C.c
s.f=new V.a8(0,0,0)
s.ch=100
t.z=s
s=new O.j3(t,"bump")
s.c=C.c
t.Q=s
t.ch=null
s=new O.bj(t,"reflect")
s.c=C.c
s.f=new V.a8(0,0,0)
t.cx=s
s=new O.j5(t,"refract")
s.c=C.c
s.f=new V.a8(0,0,0)
s.ch=1
t.cy=s
s=new O.j2(t,"alpha")
s.c=C.c
s.f=1
t.db=s
s=new D.iJ()
s.c1(D.a7)
s.e=H.c([],[D.cx])
s.f=H.c([],[D.jm])
s.r=H.c([],[D.k_])
s.x=H.c([],[D.kf])
s.y=H.c([],[D.kg])
s.z=H.c([],[D.kh])
s.Q=null
s.ch=null
s.d9(s.gfA(),s.gfV(),s.gfX())
t.dx=s
r=s.Q
if(r==null){r=D.N()
s.Q=r
s=r}else s=r
s.h(0,t.gh5())
s=t.dx
r=s.ch
if(r==null){r=D.N()
s.ch=r
s=r}else s=r
s.h(0,t.gfE())
t.dy=null
s=t.dx
r=U.eo(V.eU(new V.a2(0,0,0),new V.K(0,1,0),new V.K(1,1,-3)))
q=new V.a8(1,1,1)
p=new D.cx()
p.c=new V.a8(1,1,1)
p.a=new V.K(0,0,1)
o=p.b
p.b=r
r.gC().h(0,p.gf6())
r=new D.T("mover",o,p.b,p,[U.ai])
r.b=!0
p.aJ(r)
if(!p.c.v(0,q)){o=p.c
p.c=q
r=new D.T("color",o,q,p,[V.a8])
r.b=!0
p.aJ(r)}s.h(0,p)
s=t.r
s.sas(0,new V.a8(0,0,1))
s=t.x
s.sas(0,new V.a8(0,1,0))
s=t.z
s.sas(0,new V.a8(1,0,0))
s=t.z
if(s.c===C.c){s.c=C.i
s.c0()
s.cl(100)
r=s.a
r.a=null
r.aj(null)}s.cl(10)
n=E.eB(null,!0,null,"",null,null)
n.sez(t)
m=E.eB(null,!0,null,"",null,null)
m.y.h(0,n)
s=new U.eE()
s.c1(U.ai)
s.bo(s.gfz(),s.gfW())
s.e=null
s.f=V.ch()
s.r=0
r=u.r
p=new U.kO()
l=U.d9()
l.sd4(0,!0)
l.scR(6.283185307179586)
l.scT(0)
l.sa_(0,0)
l.scS(100)
l.sU(0)
l.scF(0.5)
p.b=l
k=p.gaK()
l.gC().h(0,k)
l=U.d9()
l.sd4(0,!0)
l.scR(6.283185307179586)
l.scT(0)
l.sa_(0,0)
l.scS(100)
l.sU(0)
l.scF(0.5)
p.c=l
l.gC().h(0,k)
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
j=new X.aJ(!1,!1,!1)
o=p.d
p.d=j
l=[X.aJ]
k=new D.T("modifiers",o,j,p,l)
k.b=!0
p.T(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.T("invertX",k,!1,p,[P.U])
k.b=!0
p.T(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.T("invertY",k,!1,p,[P.U])
k.b=!0
p.T(k)}p.b6(r)
s.h(0,p)
r=u.r
p=new U.kN()
k=U.d9()
k.sd4(0,!0)
k.scR(6.283185307179586)
k.scT(0)
k.sa_(0,0)
k.scS(100)
k.sU(0)
k.scF(0.2)
p.b=k
k.gC().h(0,p.gaK())
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
j=new X.aJ(!0,!1,!1)
o=p.c
p.c=j
k=new D.T("modifiers",o,j,p,l)
k.b=!0
p.T(k)
p.b6(r)
s.h(0,p)
r=u.r
p=new U.kP()
p.c=0.01
p.d=0
p.e=0
j=new X.aJ(!1,!1,!1)
p.b=j
l=new D.T("modifiers",null,j,p,l)
l.b=!0
p.T(l)
p.b6(r)
s.h(0,p)
m.sbd(s)
s=new M.ik()
r=O.d8(E.aW)
s.d=r
r.bo(s.gfF(),s.gfG())
s.e=null
s.f=null
s.r=null
s.x=null
i=new X.jj()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sbd(null)
r=i.c
if(!$.q.$2(r,1.0471975511965976)){o=i.c
i.c=1.0471975511965976
r=new D.T("fov",o,1.0471975511965976,i,[P.t])
r.b=!0
i.b1(r)}r=i.d
if(!$.q.$2(r,0.1)){o=i.d
i.d=0.1
r=new D.T("near",o,0.1,i,[P.t])
r.b=!0
i.b1(r)}r=i.e
if(!$.q.$2(r,2000)){o=i.e
i.e=2000
r=new D.T("far",o,2000,i,[P.t])
r.b=!0
i.b1(r)}r=s.a
if(r!==i){if(r!=null)r.gC().L(0,s.gaL())
o=s.a
s.a=i
i.gC().h(0,s.gaL())
r=new D.T("camera",o,s.a,s,[X.ej])
r.b=!0
s.b0(r)}h=new X.iu()
r=new V.c8(0,0,0,1)
h.a=r
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
r=V.f4(0,0,1,1)
h.r=r
r=s.b
if(r!==h){if(r!=null)r.gC().L(0,s.gaL())
o=s.b
s.b=h
h.gC().h(0,s.gaL())
r=new D.T("target",o,s.b,s,[X.fc])
r.b=!0
s.b0(r)}s.d.h(0,m)
s.a.sbd(U.eo(V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=u.d
if(r!==s){if(r!=null)r.gC().L(0,u.gde())
u.d=s
s.gC().h(0,u.gde())
u.f2()}z.a=null
z.b=""
z.c=1
g=new K.nP(z,u,n)
s=new V.k8("heightMaps",!0,new K.nQ(z,g))
w=w.getElementById("heightMaps")
s.c=w
if(w==null)H.p("Failed to find heightMaps for Texture2DGroup")
s.a2(0,"../resources/HeightMap1.png",!0)
s.h(0,"../resources/HeightMap2.png")
s.h(0,"../resources/HeightMap3.png")
s.h(0,"../resources/ScrewHeightMap.png")
f=new K.nR(z,g)
w=V.f2("shapes",!0)
w.a2(0,"Cuboid",new K.o_(f))
w.a2(0,"Cylinder",new K.o0(f))
w.a2(0,"LatLonSphere",new K.o1(f))
w.a2(0,"Sphere",new K.o2(f))
w.a2(0,"Toroid",new K.o3(f))
w.a2(0,"Grid Small",new K.o4(f))
w.cq(0,"Grid Medium",new K.o5(f),!0)
w.a2(0,"Grid Large",new K.o6(f))
e=new K.nS(z,g)
z=V.f2("scalars",!0)
z.a2(0,"0.1",new K.nT(e))
z.a2(0,"0.2",new K.nU(e))
z.a2(0,"0.4",new K.nV(e))
z.cq(0,"0.6",new K.nW(e),!0)
z.a2(0,"0.8",new K.nX(e))
z.a2(0,"1.0",new K.nY(e))
z=u.z
if(z==null){z=D.N()
u.z=z}w={func:1,ret:-1,args:[D.B]}
s=H.m(new K.nZ(y,t),w)
r=z.b
if(r==null){w=H.c([],[w])
z.b=w
z=w}else z=r
C.a.h(z,s)
V.od(u)},
nP:{"^":"k:0;a,b,c",
$0:function(){var z,y,x,w
z=this.a
if(z.a!=null&&z.b.length!==0){y=this.b
x=y.f.im(z.b)
w=x.y
if(w==null){w=D.N()
x.y=w}w.h(0,new K.nO(z,y,x,this.c))}}},
nO:{"^":"k:6;a,b,c,d",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isB")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
z=this.a
y=z.a
u=F.du()
u.bO(y)
u.a8()
u.hM(new T.ke(v,x,w),z.c)
z=$.$get$aD()
z.toString
u.j5(new Z.b9($.$get$dH().a&~z.a))
u.j3(!1)
u.a8()
this.d.sda(0,u)}},
nQ:{"^":"k:21;a,b",
$1:function(a){this.a.b=a
this.b.$0()}},
nR:{"^":"k:56;a,b",
$1:function(a){this.a.a=a
this.b.$0()}},
o_:{"^":"k:0;a",
$0:function(){this.a.$1(F.ho(50,null,null,50))}},
o0:{"^":"k:0;a",
$0:function(){this.a.$1(F.nn(1,!1,!1,80,80,1))}},
o1:{"^":"k:0;a",
$0:function(){this.a.$1(F.nL(80,80))}},
o2:{"^":"k:0;a",
$0:function(){this.a.$1(F.of(50,null,1,50))}},
o3:{"^":"k:0;a",
$0:function(){this.a.$1(F.oj(50,1,50,0.5))}},
o4:{"^":"k:0;a",
$0:function(){this.a.$1(F.dY(50,null,50))}},
o5:{"^":"k:0;a",
$0:function(){this.a.$1(F.dY(100,null,100))}},
o6:{"^":"k:0;a",
$0:function(){this.a.$1(F.dY(150,null,150))}},
nS:{"^":"k:57;a,b",
$1:function(a){this.a.c=a
this.b.$0()}},
nT:{"^":"k:0;a",
$0:function(){this.a.$1(0.1)}},
nU:{"^":"k:0;a",
$0:function(){this.a.$1(0.2)}},
nV:{"^":"k:0;a",
$0:function(){this.a.$1(0.4)}},
nW:{"^":"k:0;a",
$0:function(){this.a.$1(0.6)}},
nX:{"^":"k:0;a",
$0:function(){this.a.$1(0.8)}},
nY:{"^":"k:0;a",
$0:function(){this.a.$1(1)}},
nZ:{"^":"k:6;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isB")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dK("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dK("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eJ.prototype
return J.eI.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.iE.prototype
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cX(a)}
J.aT=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cX(a)}
J.c1=function(a){if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cX(a)}
J.nx=function(a){if(typeof a=="number")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cm.prototype
return a}
J.ny=function(a){if(typeof a=="number")return J.cd.prototype
if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cm.prototype
return a}
J.c2=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cm.prototype
return a}
J.aE=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cX(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).v(a,b)}
J.hC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nx(a).R(a,b)}
J.e4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ny(a).j(a,b)}
J.e5=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ht(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).k(a,b)}
J.d0=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ht(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c1(a).p(a,b,c)}
J.hD=function(a,b){return J.c2(a).H(a,b)}
J.hE=function(a,b,c){return J.aE(a).h3(a,b,c)}
J.hF=function(a,b,c,d){return J.aE(a).dL(a,b,c,d)}
J.hG=function(a,b){return J.c2(a).Y(a,b)}
J.d1=function(a,b,c){return J.aT(a).hT(a,b,c)}
J.cs=function(a,b){return J.c1(a).K(a,b)}
J.hH=function(a,b,c,d){return J.c1(a).aF(a,b,c,d)}
J.e6=function(a,b){return J.c1(a).I(a,b)}
J.hI=function(a){return J.aE(a).ghO(a)}
J.bE=function(a){return J.aE(a).gcC(a)}
J.c5=function(a){return J.L(a).gV(a)}
J.b3=function(a){return J.c1(a).gZ(a)}
J.ao=function(a){return J.aT(a).gm(a)}
J.hJ=function(a){return J.aE(a).gcW(a)}
J.hK=function(a){return J.aE(a).giW(a)}
J.e7=function(a){return J.c1(a).iK(a)}
J.hL=function(a,b){return J.aE(a).iP(a,b)}
J.hM=function(a,b){return J.aE(a).sa3(a,b)}
J.hN=function(a,b,c){return J.c2(a).u(a,b,c)}
J.hO=function(a){return J.c2(a).j2(a)}
J.ac=function(a){return J.L(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cu.prototype
C.l=W.d6.prototype
C.M=W.be.prototype
C.P=J.r.prototype
C.a=J.bi.prototype
C.Q=J.eI.prototype
C.d=J.eJ.prototype
C.w=J.eK.prototype
C.e=J.cd.prototype
C.b=J.ce.prototype
C.X=J.cf.prototype
C.a2=H.dr.prototype
C.a3=W.jd.prototype
C.E=J.jk.prototype
C.a4=P.dt.prototype
C.F=W.k6.prototype
C.u=J.cm.prototype
C.G=W.bT.prototype
C.H=W.la.prototype
C.J=new P.hT(!1)
C.I=new P.hS(C.J)
C.K=new P.ji()
C.L=new P.kX()
C.j=new P.lY()
C.c=new A.cw(0,"ColorSourceType.None")
C.i=new A.cw(1,"ColorSourceType.Solid")
C.f=new A.cw(2,"ColorSourceType.Texture2D")
C.h=new A.cw(3,"ColorSourceType.TextureCube")
C.q=new P.bf(0)
C.N=new P.bf(5e6)
C.O=new P.iy("element",!0,!1,!1,!1)
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
C.z=H.c(I.aa([127,2047,65535,1114111]),[P.o])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.o])
C.Y=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Z=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.aa([]),[P.h])
C.a_=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a0=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.i4(0,{},C.A,[P.h,P.h])
C.k=new P.kQ(!1)
$.aG=0
$.bG=null
$.ee=null
$.dQ=!1
$.hr=null
$.hl=null
$.hz=null
$.cW=null
$.cZ=null
$.dZ=null
$.by=null
$.bY=null
$.bZ=null
$.dR=!1
$.Y=C.j
$.aV=null
$.da=null
$.eA=null
$.ez=null
$.ev=null
$.eu=null
$.et=null
$.es=null
$.q=V.j7()
$.f_=null
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
I.$lazy(y,x,w)}})(["er","$get$er",function(){return H.hq("_$dart_dartClosure")},"de","$get$de",function(){return H.hq("_$dart_js")},"fm","$get$fm",function(){return H.aL(H.cM({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aL(H.cM({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aL(H.cM(null))},"fp","$get$fp",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aL(H.cM(void 0))},"fu","$get$fu",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aL(H.fs(null))},"fq","$get$fq",function(){return H.aL(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aL(H.fs(void 0))},"fv","$get$fv",function(){return H.aL(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.lb()},"c_","$get$c_",function(){return[]},"fH","$get$fH",function(){return P.kU()},"fM","$get$fM",function(){return H.jb(H.bx(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"ha","$get$ha",function(){return P.jF("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hh","$get$hh",function(){return P.n3()},"ep","$get$ep",function(){return{}},"fQ","$get$fQ",function(){return P.eP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dM","$get$dM",function(){return P.di(P.h,P.cb)},"fI","$get$fI",function(){return Z.at(0)},"dH","$get$dH",function(){return Z.at(511)},"aO","$get$aO",function(){return Z.at(1)},"aD","$get$aD",function(){return Z.at(2)},"aN","$get$aN",function(){return Z.at(4)},"aP","$get$aP",function(){return Z.at(8)},"aQ","$get$aQ",function(){return Z.at(16)},"bR","$get$bR",function(){return Z.at(32)},"bS","$get$bS",function(){return Z.at(64)},"dI","$get$dI",function(){return Z.at(96)},"ba","$get$ba",function(){return Z.at(128)},"aM","$get$aM",function(){return Z.at(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:P.I,args:[F.aC,P.t,P.t]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.I,args:[D.B]},{func:1,ret:P.I,args:[F.ax]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.o,[P.j,E.aW]]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:P.I,args:[W.af]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.h,args:[P.o]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.o,[P.j,D.a7]]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:P.U,args:[W.P,P.h,P.h,W.cn]},{func:1,ret:W.G},{func:1,ret:P.U,args:[W.aK]},{func:1,ret:P.U,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.o,[P.j,U.ai]]},{func:1,ret:-1,args:[P.o,[P.j,V.ay]]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:P.I,args:[P.a6]},{func:1,ret:P.I,args:[P.h,,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[W.bT]},{func:1,ret:P.U,args:[P.t,P.t]},{func:1,ret:P.U,args:[[P.j,D.a7]]},{func:1,ret:-1,args:[P.h,P.o]},{func:1,ret:[P.M,P.h,P.h],args:[[P.M,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.o,args:[[P.e,P.o],P.o]},{func:1,ret:[P.b0,,],args:[,]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:V.a2,args:[P.t]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[P.bt]},{func:1,ret:P.U,args:[V.b4]},{func:1,ret:P.I,args:[W.ah]},{func:1,ret:P.I,args:[W.P]},{func:1,ret:P.I,args:[F.cJ]},{func:1,ret:P.I,args:[P.t]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.P,args:[W.G]}]
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
if(x==y)H.oi(d||a)
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
Isolate.dW=a.dW
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
if(typeof dartMainRunner==="function")dartMainRunner(K.hw,[])
else K.hw([])})})()
//# sourceMappingURL=test.dart.js.map
