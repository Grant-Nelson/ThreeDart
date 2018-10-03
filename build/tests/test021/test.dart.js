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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dt(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dv=function(){}
var dart=[["","",,H,{"^":"",nv:{"^":"b;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cD:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dy==null){H.mG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c4("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cX()]
if(v!=null)return v
v=H.mL(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cX(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
q:function(a,b){return a===b},
gT:function(a){return H.bH(a)},
i:["er",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hX:{"^":"u;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
ea:{"^":"u;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isH:1},
cY:{"^":"u;",
gT:function(a){return 0},
i:["es",function(a){return String(a)}]},
iH:{"^":"cY;"},
c5:{"^":"cY;"},
c0:{"^":"cY;",
i:function(a){var z=a[$.$get$dX()]
if(z==null)return this.es(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscT:1},
b7:{"^":"u;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.C("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.r(P.C("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hI:function(a){return this.C(a,"")},
hA:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bI:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gaC:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
aB:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
bn:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cV(a,"[","]")},
gZ:function(a){return new J.au(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
a[b]=c},
$isk:1,
$isc:1,
p:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bA(H.d(a,[b]))},
bA:function(a){H.bU(a)
a.fixed$length=Array
return a}}},
nu:{"^":"b7;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"u;",
ghH:function(a){return a===0?1/a<0:a<0},
dN:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
ed:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghH(a))return"-"+z
return z},
ba:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.C("Unexpected toString result: "+z))
x=J.aG(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a*b},
be:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ew:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aL:function(a,b){var z
if(a>0)z=this.d7(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fN:function(a,b){if(b<0)throw H.a(H.ag(b))
return this.d7(a,b)},
d7:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a<b},
$isp:1,
$isa_:1},
e9:{"^":"bZ;",$ism:1},
hY:{"^":"bZ;"},
c_:{"^":"u;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b<0)throw H.a(H.aF(a,b))
if(b>=a.length)H.r(H.aF(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aF(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aS:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
t:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.t(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hW:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
a9:function(a,b){return this.hW(a,b," ")},
dV:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dU:function(a,b){return this.dV(a,b,0)},
hp:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h2(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseq:1,
$isi:1}}],["","",,H,{"^":"",
cE:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.jj("No element")},
a3:{"^":"jO;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascu:function(){return[P.m]},
$asx:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hG:{"^":"k;"},
ef:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.aG(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
il:{"^":"k;a,b,$ti",
gZ:function(a){return new H.im(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
H:function(a,b){return this.b.$1(J.cK(this.a,b))},
$ask:function(a,b){return[b]}},
im:{"^":"cW;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascW:function(a,b){return[b]}},
kk:{"^":"k;a,b,$ti",
gZ:function(a){return new H.kl(J.bv(this.a),this.b,this.$ti)}},
kl:{"^":"cW;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cg:{"^":"b;$ti"},
cu:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.az(this,"cu",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){H.z(d,H.az(this,"cu",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
jO:{"^":"ck+cu;"}}],["","",,H,{"^":"",
hu:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
mB:function(a){return init.types[H.D(a)]},
fV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isE},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ag(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iQ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.O(a).$isc5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.aE(w,1)
r=H.dz(H.bU(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iI:function(){if(!!self.location)return self.location.href
return},
es:function(a){var z,y,x,w,v
H.bU(a)
z=J.at(a)
if(typeof z!=="number")return z.eo()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iR:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aL(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ag(w))}return H.es(z)},
et:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ag(x))
if(x<0)throw H.a(H.ag(x))
if(x>65535)return H.iR(a)}return H.es(a)},
iS:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eo()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aL(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iN:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iJ:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iK:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iM:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iO:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iL:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ag(a))},
e:function(a,b){if(a==null)J.at(a)
throw H.a(H.aF(a,b))},
aF:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
mv:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
ag:function(a){return new P.aH(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.ep()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h4})
z.name=""}else z.toString=H.h4
return z},
h4:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
A:function(a){throw H.a(P.b2(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aL(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cZ(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eo(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eP()
u=$.$get$eQ()
t=$.$get$eR()
s=$.$get$eS()
r=$.$get$eW()
q=$.$get$eX()
p=$.$get$eU()
$.$get$eT()
o=$.$get$eZ()
n=$.$get$eY()
m=v.a8(y)
if(m!=null)return z.$1(H.cZ(H.M(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cZ(H.M(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eo(H.M(y),m))}}return z.$1(new H.jN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bt:function(a){var z
if(a==null)return new H.fr(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fr(a)},
my:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mI:function(a,b,c,d,e,f){H.f(a,"$iscT")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=z
return z},
hq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$isc){z.$reflectionInfo=d
x=H.iX(z).r}else x=d
w=e?Object.create(new H.jk().constructor.prototype):Object.create(new H.cN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.B()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cO
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dT(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hn:function(a,b,c,d){var z=H.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hn(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.B()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.B()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ho:function(a,b,c,d){var z,y
z=H.cO
y=H.dM
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
hp:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cd("self")
$.bw=z}y=$.dL
if(y==null){y=H.cd("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ho(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.B()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.B()
$.aA=y+1
return new Function(z+y+"}")()},
dt:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bU(b))
H.D(c)
y=!!J.O(d).$isc?J.bA(d):d
return H.hq(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
mU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
h_:function(a,b){throw H.a(H.ay(a,H.M(b).substring(3)))},
mW:function(a,b){var z=J.aG(b)
throw H.a(H.hm(a,z.t(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.h_(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.mW(a,b)},
bU:function(a){if(a==null)return a
if(!!J.O(a).$isc)return a
throw H.a(H.ay(a,"List"))},
fX:function(a,b){if(a==null)return a
if(!!J.O(a).$isc)return a
if(J.O(a)[b])return a
H.h_(a,b)},
fR:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c7:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fR(J.O(a))
if(z==null)return!1
y=H.fU(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dn)return a
$.dn=!0
try{if(H.c7(a,b))return a
z=H.ca(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dn=!1}},
dw:function(a,b){if(a!=null&&!H.ds(a,b))H.r(H.ay(a,H.ca(b)))
return a},
fI:function(a){var z
if(a instanceof H.o){z=H.fR(J.O(a))
if(z!=null)return H.ca(z)
return"Closure"}return H.bb(a)},
n1:function(a){throw H.a(new P.hy(H.M(a)))},
fS:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
os:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.M(c)
H.D(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.M(b)
H.D(c)
z=H.bu(a["$as"+H.l(b)],H.b_(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b_(a)
return z==null?null:z[b]},
ca:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b0(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b0(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b0(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b0(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dz:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bT:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b_(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fL(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bU(c)
H.M(d)
if(a==null)return a
z=H.bT(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dz(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fL:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
oq:function(a,b,c){return a.apply(b,H.bu(J.O(b)["$as"+H.l(c)],H.b_(b)))},
fW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.fW(z)}return!1},
ds:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.fW(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.ds(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}y=J.O(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.ds(a,b))throw H.a(H.ay(a,H.ca(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fU(a,b,c,d)
if('func' in a)return c.builtin$cls==="cT"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ca(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fL(H.bu(r,z),b,u,d)},
fU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mT(m,b,l,d)},
mT:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
or:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var z,y,x,w,v,u
z=H.M($.fT.$1(a))
y=$.cC[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fK.$2(a,z))
if(z!=null){y=$.cC[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cG(x)
$.cC[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cF[z]=x
return x}if(v==="-"){u=H.cG(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fZ(a,x)
if(v==="*")throw H.a(P.c4(z))
if(init.leafTags[z]===true){u=H.cG(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fZ(a,x)},
fZ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dA(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cG:function(a){return J.dA(a,!1,null,!!a.$isE)},
mS:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cG(z)
else return J.dA(z,c,null,null)},
mG:function(){if(!0===$.dy)return
$.dy=!0
H.mH()},
mH:function(){var z,y,x,w,v,u,t,s
$.cC=Object.create(null)
$.cF=Object.create(null)
H.mC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h0.$1(v)
if(u!=null){t=H.mS(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mC:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bq(C.I,H.bq(C.N,H.bq(C.u,H.bq(C.u,H.bq(C.M,H.bq(C.J,H.bq(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fT=new H.mD(v)
$.fK=new H.mE(u)
$.h0=new H.mF(t)},
bq:function(a,b){return a(b)||b},
h2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ht:{"^":"b;$ti",
i:function(a){return P.d0(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hu()},
$isJ:1},
hv:{"^":"ht;a,b,c,$ti",
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bo(0,b))return
return this.cZ(b)},
cZ:function(a){return this.b[H.M(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cZ(v),z))}}},
iW:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jA:{"^":"b;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iE:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eo:function(a,b){return new H.iE(a,b==null?null:b.method)}}},
i0:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i0(a,y,z?null:b.receiver)}}},
jN:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n3:{"^":"o:20;a",
$1:function(a){if(!!J.O(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fr:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
o:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
gem:function(){return this},
$iscT:1,
gem:function(){return this}},
eG:{"^":"o;"},
jk:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cN:{"^":"eG;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.bV(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cO:function(a){return a.a},
dM:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cN("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jB:{"^":"a5;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.jB("TypeError: "+H.l(P.cf(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a5;a",
i:function(a){return this.a},
p:{
hm:function(a,b){return new H.hl("CastError: "+H.l(P.cf(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
j5:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j6:function(a){return new H.j5(a)}}},
aW:{"^":"ii;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gas:function(a){return new H.i6(this,[H.y(this,0)])},
bo:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cW(y,b)}else return this.hE(b)},
hE:function(a){var z=this.d
if(z==null)return!1
return this.cp(this.bR(z,this.co(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hF(b)},
hF:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bR(z,this.co(a))
x=this.cp(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bW()
this.b=z}this.cO(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bW()
this.c=y}this.cO(y,b,c)}else this.hG(b,c)},
hG:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bW()
this.d=z}y=this.co(a)
x=this.bR(z,y)
if(x==null)this.c2(z,y,[this.bX(a,b)])
else{w=this.cp(x,a)
if(w>=0)x[w].b=b
else x.push(this.bX(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cO:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bg(a,b)
if(z==null)this.c2(a,b,this.bX(b,c))
else z.b=c},
f1:function(){this.r=this.r+1&67108863},
bX:function(a,b){var z,y
z=new H.i5(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f1()
return z},
co:function(a){return J.bV(a)&0x3ffffff},
cp:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.d0(this)},
bg:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
eV:function(a,b){delete a[b]},
cW:function(a,b){return this.bg(a,b)!=null},
bW:function(){var z=Object.create(null)
this.c2(z,"<non-identifier-key>",z)
this.eV(z,"<non-identifier-key>")
return z},
$ised:1},
i5:{"^":"b;a,b,0c,0d"},
i6:{"^":"hG;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i7(z,z.r,this.$ti)
y.c=z.e
return y}},
i7:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mD:{"^":"o:20;a",
$1:function(a){return this.a(a)}},
mE:{"^":"o:41;a",
$2:function(a,b){return this.a(a,b)}},
mF:{"^":"o:50;a",
$1:function(a){return this.a(H.M(a))}},
hZ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseq:1,
$isiY:1,
p:{
i_:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mx:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iA:function(a){return new Int8Array(a)},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aF(b,a))},
m7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mv(a,b,c))
return b},
en:{"^":"u;",$isen:1,"%":"ArrayBuffer"},
d5:{"^":"u;",$isd5:1,"%":"DataView;ArrayBufferView;d4|fl|fm|iB|fn|fo|aX"},
d4:{"^":"d5;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dv},
iB:{"^":"fm;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mw(c)
H.aE(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.p]},
$asx:function(){return[P.p]},
$isk:1,
$ask:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fo;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aE(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.m]},
$asx:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nE:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nF:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nG:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nH:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nI:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nJ:{"^":"aX;",
gl:function(a){return a.length},
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d6:{"^":"aX;",
gl:function(a){return a.length},
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
bI:function(a,b,c){return new Uint8Array(a.subarray(b,H.m7(b,c,a.length)))},
$isd6:1,
$isR:1,
"%":";Uint8Array"},
fl:{"^":"d4+x;"},
fm:{"^":"fl+cg;"},
fn:{"^":"d4+x;"},
fo:{"^":"fn+cg;"}}],["","",,P,{"^":"",
kn:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.kp(z),1)).observe(y,{childList:true})
return new P.ko(z,y,x)}else if(self.setImmediate!=null)return P.ml()
return P.mm()},
of:[function(a){self.scheduleImmediate(H.br(new P.kq(H.h(a,{func:1,ret:-1})),0))},"$1","mk",4,0,11],
og:[function(a){self.setImmediate(H.br(new P.kr(H.h(a,{func:1,ret:-1})),0))},"$1","ml",4,0,11],
oh:[function(a){P.db(C.q,H.h(a,{func:1,ret:-1}))},"$1","mm",4,0,11],
db:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a1(a.a,1000)
return P.lr(z<0?0:z,b)},
eK:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.e.a1(a.a,1000)
return P.ls(z<0?0:z,b)},
mg:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.ax]}))return b.i4(a,null,P.b,P.ax)
if(H.c7(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mf:function(){var z,y
for(;z=$.bp,z!=null;){$.bR=null
y=z.b
$.bp=y
if(y==null)$.bQ=null
z.a.$0()}},
op:[function(){$.dp=!0
try{P.mf()}finally{$.bR=null
$.dp=!1
if($.bp!=null)$.$get$di().$1(P.fM())}},"$0","fM",0,0,3],
fH:function(a){var z=new P.ff(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bQ=z
$.bp=z
if(!$.dp)$.$get$di().$1(P.fM())}else{$.bQ.b=z
$.bQ=z}},
mj:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fH(a)
$.bR=$.bQ
return}y=new P.ff(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bp=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
mX:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cB(null,null,C.j,a)
return}y.toString
P.cB(null,null,y,H.h(y.c7(a),z))},
eJ:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.db(a,b)}return P.db(a,H.h(y.c7(b),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eK(a,b)}x=y.dl(b,P.bi)
$.T.toString
return P.eK(a,H.h(x,z))},
cA:function(a,b,c,d,e){var z={}
z.a=d
P.mj(new P.mh(z,e))},
fD:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fE:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mi:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cB:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c7(d):c.hl(d,-1)
P.fH(d)},
kp:{"^":"o:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ko:{"^":"o:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kq:{"^":"o:0;a",
$0:function(){this.a.$0()}},
kr:{"^":"o:0;a",
$0:function(){this.a.$0()}},
fu:{"^":"b;a,0b,c",
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.lu(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.lt(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbi:1,
p:{
lr:function(a,b){var z=new P.fu(!0,0)
z.eI(a,b)
return z},
ls:function(a,b){var z=new P.fu(!1,0)
z.eJ(a,b)
return z}}},
lu:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lt:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ew(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hM:function(a){if(this.c!==6)return!0
return this.b.b.cE(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hD:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.ax]}))return H.dw(w.ic(z,a.a,a.b,null,y,P.ax),x)
else return H.dw(w.cE(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;d8:a<,b,0fH:c<,$ti",
ec:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mg(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cP(new P.bn(x,w,a,b,[z,c]))
return x},
ih:function(a,b){return this.ec(a,null,b)},
cP:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cP(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cB(null,null,z,H.h(new P.kG(this,a),{func:1,ret:-1}))}},
d3:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.d3(a)
return}this.a=y
this.c=u.c}z.a=this.bj(a)
y=this.b
y.toString
P.cB(null,null,y,H.h(new P.kL(z,this),{func:1,ret:-1}))}},
bZ:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bj(z)},
bj:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cT:function(a){var z,y,x,w
z=H.y(this,0)
H.dw(a,{futureOr:1,type:z})
y=this.$ti
x=H.bT(a,"$isbz",y,"$asbz")
if(x){z=H.bT(a,"$isaT",y,null)
if(z)P.fi(a,this)
else P.kH(a,this)}else{w=this.bZ()
H.z(a,z)
this.a=4
this.c=a
P.bM(this,w)}},
bN:[function(a,b){var z
H.f(b,"$isax")
z=this.bZ()
this.a=8
this.c=new P.ak(a,b)
P.bM(this,z)},function(a){return this.bN(a,null)},"is","$2","$1","geR",4,2,49],
$isbz:1,
p:{
kH:function(a,b){var z,y,x
b.a=1
try{a.ec(new P.kI(b),new P.kJ(b),null)}catch(x){z=H.as(x)
y=H.bt(x)
P.mX(new P.kK(b,z,y))}},
fi:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bZ()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.d3(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cA(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cA(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kO(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kN(x,b,r).$0()}else if((y&2)!==0)new P.kM(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.O(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bj(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fi(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bj(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kG:{"^":"o:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
kL:{"^":"o:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
kI:{"^":"o:14;a",
$1:function(a){var z=this.a
z.a=0
z.cT(a)}},
kJ:{"^":"o:51;a",
$2:function(a,b){this.a.bN(a,H.f(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kK:{"^":"o:0;a,b,c",
$0:function(){this.a.bN(this.b,this.c)}},
kO:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ea(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.O(z).$isbz){if(z instanceof P.aT&&z.gd8()>=4){if(z.gd8()===8){w=this.b
w.b=H.f(z.gfH(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ih(new P.kP(t),null)
w.a=!1}}},
kP:{"^":"o:47;a",
$1:function(a){return this.a}},
kN:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cE(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kM:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hM(z)&&w.e!=null){v=this.b
v.b=w.hD(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
ff:{"^":"b;a,0b"},
d9:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.m])
z.a=0
this.hL(new P.jn(z,this),!0,new P.jo(z,y),y.geR())
return y}},
jn:{"^":"o;a,b",
$1:function(a){H.z(a,H.az(this.b,"d9",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.az(this.b,"d9",0)]}}},
jo:{"^":"o:0;a,b",
$0:function(){this.b.cT(this.a.a)}},
eC:{"^":"b;$ti"},
jm:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lW:{"^":"b;",$isoe:1},
mh:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ep()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l9:{"^":"lW;",
ie:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fD(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bt(x)
P.cA(null,null,this,z,H.f(y,"$isax"))}},
ig:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fE(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bt(x)
P.cA(null,null,this,z,H.f(y,"$isax"))}},
hl:function(a,b){return new P.lb(this,H.h(a,{func:1,ret:b}),b)},
c7:function(a){return new P.la(this,H.h(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.lc(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fD(null,null,this,a,b)},
cE:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fE(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mi(null,null,this,a,b,c,d,e,f)},
i4:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lb:{"^":"o;a,b,c",
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
la:{"^":"o:3;a,b",
$0:function(){return this.a.ie(this.b)}},
lc:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i8:function(a,b,c,d,e){return new H.aW(0,0,[d,e])},
i9:function(a,b,c){H.bU(a)
return H.w(H.my(a,new H.aW(0,0,[b,c])),"$ised",[b,c],"$ased")},
ee:function(a,b){return new H.aW(0,0,[a,b])},
ic:function(a,b,c,d){return new P.kW(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.me(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eD(b,H.fX(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.dq(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaH(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
dq:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
me:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.F();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ia:function(a,b,c){var z=P.i8(null,null,null,b,c)
a.K(0,new P.ib(z,b,c))
return z},
d0:function(a){var z,y,x
z={}
if(P.dq(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.dF(a,new P.ij(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
kW:{"^":"kQ;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fk(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cR(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cR(y,b)}else return this.eK(0,b)},
eK:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cU(b)
x=z[y]
if(x==null)z[y]=[this.bM(b)]
else{if(this.d_(x,b)>=0)return!1
x.push(this.bM(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d4(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d4(this.c,b)
else return this.fA(0,b)},
fA:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eZ(z,b)
x=this.d_(y,b)
if(x<0)return!1
this.da(y.splice(x,1)[0])
return!0},
cR:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdj")!=null)return!1
a[b]=this.bM(b)
return!0},
d4:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdj")
if(z==null)return!1
this.da(z)
delete a[b]
return!0},
cS:function(){this.r=this.r+1&67108863},
bM:function(a){var z,y
z=new P.dj(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cS()
return z},
da:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cS()},
cU:function(a){return J.bV(a)&0x3ffffff},
eZ:function(a,b){return a[this.cU(b)]},
d_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dj:{"^":"b;a,0b,0c"},
kX:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fk:function(a,b,c){var z=new P.kX(a,b,[c])
z.c=a.e
return z}}},
kQ:{"^":"j7;"},
ib:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
ck:{"^":"kY;",$isk:1,$isc:1},
x:{"^":"b;$ti",
gZ:function(a){return new H.ef(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.k(a,b)},
ij:function(a,b){var z,y,x
z=H.d([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ii:function(a){return this.ij(a,!0)},
aB:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cV(a,"[","]")}},
ii:{"^":"ai;"},
ij:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ai",0),H.aZ(this,a,"ai",1)]})
for(z=J.bv(this.gas(a));z.F();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.at(this.gas(a))},
i:function(a){return P.d0(a)},
$isJ:1},
lz:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
ik:{"^":"b;$ti",
k:function(a,b){return J.dE(this.a,b)},
m:function(a,b,c){J.cI(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dF(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isJ:1},
f5:{"^":"lA;a,$ti"},
j9:{"^":"b;$ti",
i:function(a){return P.cV(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=P.fk(this,this.r,H.y(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j7:{"^":"j9;"},
kY:{"^":"b+x;"},
lA:{"^":"ik+lz;$ti"}}],["","",,P,{"^":"",hi:{"^":"bW;a",
hP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fg()
if(typeof d!=="number")return H.q(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.G(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cE(C.b.G(b,s))
o=H.cE(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.t(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.W("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dK(b,u,d,v,t,k)
else{j=C.e.be(k-1,4)+1
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aS(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dK(b,u,d,v,t,i)
else{j=C.e.be(i,4)
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aS(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.c,P.m],P.i]},
p:{
dK:function(a,b,c,d,e,f){if(C.e.be(f,4)!==0)throw H.a(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"jm;$ti"},hI:{"^":"bW;",
$asbW:function(){return[P.i,[P.c,P.m]]}},k0:{"^":"hI;a",
ghx:function(){return C.F}},k7:{"^":"bx;",
aY:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lV(0,0,x)
if(w.eX(a,b,z)!==z)w.dd(J.ha(a,z-1),0)
return C.U.bI(x,0,w.b)},
cd:function(a){return this.aY(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lV:{"^":"b;a,b,c",
dd:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
eX:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dd(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}},k1:{"^":"bx;a",
aY:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k2(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lS(!1,x,!0,0,0,0)
w.aY(a,b,y)
w.hz(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cd:function(a){return this.aY(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
k2:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k3(!1,b,c,d)
return},
k3:function(a,b,c,d){var z,y,x
z=$.$get$fa()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.k5(b))return
return P.k6(a,b)},
k6:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k5:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k4:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lS:{"^":"b;a,b,c,d,e,f",
hz:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.W("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lU(c)
v=new P.lT(this,b,c,a)
$label0$0:for(u=J.aG(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.W("Overlong encoding of 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cI()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.e.ba(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lU:{"^":"o:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aG(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lT:{"^":"o:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c3(this.d,a,b)}}}],["","",,P,{"^":"",
c9:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iQ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.W(a,null,null))},
hK:function(a){var z=J.O(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
id:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ie:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gZ(a);x.F();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c3:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.et(z?C.a.bI(a,b,c):a)}if(!!J.O(a).$isd6)return H.iS(a,b,P.aL(b,c,a.length,null,null,null))
return P.jp(a,b,c)},
jp:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.Z(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.at(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.F())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.F();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.F())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gR(y))}return H.et(w)},
iZ:function(a,b,c){return new H.hZ(a,H.i_(a,!1,!0,!1))},
f7:function(){var z=H.iI()
if(z!=null)return P.jT(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
v:function(a){return new P.fh(a)},
ig:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dB:function(a){H.mV(a)},
jT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.f6(b>0||c<c?C.b.t(a,b,c):a,5,null).geg()
else if(y===32)return P.f6(C.b.t(a,z,c),0,null).geg()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fF(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.il()
if(v>=b)if(P.fF(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.q(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a6(a,"..",s)))n=r>s+2&&C.b.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a6(a,"file",b)){if(u<=b){if(!C.b.a6(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aS(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.le(a,v,u,t,s,r,q,o)}return P.lB(a,b,c,v,u,t,s,r,q,o)},
f9:function(a,b){var z=P.i
return C.a.hA(H.d(a.split("&"),[z]),P.ee(z,z),new P.jW(b),[P.J,P.i,P.i])},
jR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c9(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.cI()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c9(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.cI()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jU(a)
y=new P.jV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaC(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.e.aL(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m8:function(){var z,y,x,w,v
z=P.ig(22,new P.ma(),!0,P.R)
y=new P.m9(z)
x=new P.mb()
w=new P.mc()
v=H.f(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isR"),"]",5)
v=H.f(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isR"),"az",21)
v=H.f(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fF:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fG()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.e.aL(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hz(H.iP(this))
y=P.bY(H.iN(this))
x=P.bY(H.iJ(this))
w=P.bY(H.iK(this))
v=P.bY(H.iM(this))
u=P.bY(H.iO(this))
t=P.hA(H.iL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a_;"},
"+double":0,
b4:{"^":"b;a",
j:function(a,b){return new P.b4(C.e.ab(this.a*b))},
M:function(a,b){return C.e.M(this.a,H.f(b,"$isb4").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e2:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"o:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"o:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
ep:{"^":"a5;",
i:function(a){return"Throw of null."}},
aH:{"^":"a5;a,b,c,d",
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbP()+y+x
if(!this.a)return w
v=this.gbO()
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
cb:function(a){return new P.aH(!1,null,null,a)},
cc:function(a,b,c){return new P.aH(!0,a,b,c)},
dH:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
cq:{"^":"aH;e,f,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hS:{"^":"aH;e,l:f>,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){if(J.h6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hS(b,z,!0,a,c,"Index out of range")}}},
jP:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.jP(a)}}},
jM:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c4:function(a){return new P.jM(a)}}},
jj:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hs:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b2:function(a){return new P.hs(a)}}},
iF:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hy:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fh:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
m=""}l=C.b.t(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
p:{
W:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"a_;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.F();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.F();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hU(this,"(",")")}},
cW:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;"},
"+num":0,
b:{"^":";",
q:function(a,b){return this===b},
gT:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
i:{"^":"b;",$iseq:1},
"+String":0,
an:{"^":"b;aH:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso2:1,
p:{
eD:function(a,b,c){var z=J.bv(b)
if(!z.F())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.F())}else{a+=H.l(z.gR(z))
for(;z.F();)a=a+c+H.l(z.gR(z))}return a}}},
jW:{"^":"o:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.M(b)
y=J.aG(b).dU(b,"=")
if(y===-1){if(b!=="")J.cI(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.aE(b,y+1)
z=this.a
J.cI(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
jS:{"^":"o:42;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv4 address, "+a,this.a,b))}},
jU:{"^":"o:40;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jV:{"^":"o:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c9(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cx:{"^":"b;bH:a<,b,c,d,e3:e>,f,r,0x,0y,0z,0Q,0ch",
geh:function(){return this.b},
gcn:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbD:function(a){var z=this.d
if(z==null)return P.fv(this.a)
return z},
gcz:function(a){var z=this.f
return z==null?"":z},
gdP:function(){var z=this.r
return z==null?"":z},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cx(i,j,c,f,d,g,this.r)},
e8:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gcA:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f5(P.f9(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdQ:function(){return this.c!=null},
gdT:function(){return this.f!=null},
gdR:function(){return this.r!=null},
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
q:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdf){y=this.a
x=b.gbH()
if(y==null?x==null:y===x)if(this.c!=null===b.gdQ()){y=this.b
x=b.geh()
if(y==null?x==null:y===x){y=this.gcn(this)
x=z.gcn(b)
if(y==null?x==null:y===x){y=this.gbD(this)
x=z.gbD(b)
if(y==null?x==null:y===x)if(this.e===z.ge3(b)){y=this.f
x=y==null
if(!x===b.gdT()){if(x)y=""
if(y===z.gcz(b)){z=this.r
y=z==null
if(!y===b.gdR()){if(y)z=""
z=z===b.gdP()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdf:1,
p:{
cy:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fA().b
if(typeof b!=="string")H.r(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.az(c,"bW",0))
y=c.ghx().cd(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lM(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lN(a,z,e-1):""
x=P.lG(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.lJ(P.c9(C.b.t(a,w,g),new P.lC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cx(j,y,x,v,u,t,i<c?P.lF(a,i+1,c):null)},
fv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.a(P.W(c,a,b))},
lJ:function(a,b){if(a!=null&&a===P.fv(b))return
return a},
lG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.V(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.f8(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f8(a,b,c)
return"["+a+"]"}return P.lP(a,b,c)},
lP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fC(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fw(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fy(C.b.G(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lD(y?a.toLowerCase():a)},
lD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lN:function(a,b,c){return P.bO(a,b,c,C.Q)},
lH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.y):C.t.j_(d,new P.lI(),P.i).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lO(w,e,f)},
lO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.lQ(a,!z||c)
return P.lR(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.cb("Both query and queryParameters specified"))
return P.bO(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lK(new P.lL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lF:function(a,b,c){return P.bO(a,b,c,C.n)},
fC:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cE(y)
v=H.cE(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aL(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fw:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.fN(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.c3(y,0,null)},
bO:function(a,b,c,d){var z=P.fB(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.t(a,b,c):z},
fB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fC(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fw(v)}}if(w==null)w=new P.an("")
w.a+=C.b.t(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fz:function(a){if(C.b.a5(a,"."))return!0
return C.b.dU(a,"/.")!==-1},
lR:function(a){var z,y,x,w,v,u,t
if(!P.fz(a))return a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lQ:function(a,b){var z,y,x,w,v,u
if(!P.fz(a))return!b?P.fx(a):a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaC(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaC(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fx(z[0]))}return C.a.C(z,"/")},
fx:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fy(J.h7(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.aE(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cb("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dx(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.t(a,b,c)
else u=new H.a3(y.t(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.cb("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cb("Truncated URI"))
C.a.h(u,P.lE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k1(!1).cd(u)},
fy:function(a){var z=a|32
return 97<=z&&z<=122}}},
lC:{"^":"o:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.W("Invalid port",this.a,z+1))}},
lI:{"^":"o:38;",
$1:function(a){return P.cy(C.S,a,C.k,!1)}},
lL:{"^":"o:23;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cy(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cy(C.p,b,C.k,!0))}}},
lK:{"^":"o:36;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bv(H.fX(b,"$isk")),y=this.a;z.F();)y.$2(a,H.M(z.gR(z)))}},
jQ:{"^":"b;a,b,c",
geg:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.dV(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.n)
w=x}else v=null
z=new P.kw(this,"data",null,null,null,P.bO(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.W("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.W("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaC(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.a(P.W("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hP(0,a,s,y)
else{r=P.fB(a,s,y,C.n,!0)
if(r!=null)a=C.b.aS(a,s,y,r)}return new P.jQ(a,z,c)}}},
ma:{"^":"o:34;",
$1:function(a){return new Uint8Array(96)}},
m9:{"^":"o:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
mb:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mc:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
le:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdQ:function(){return this.c>0},
gdS:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
gdT:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdR:function(){return this.r<this.a.length},
gd0:function(){return this.b===4&&C.b.a5(this.a,"http")},
gd1:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbH:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd0()){this.x="http"
z="http"}else if(this.gd1()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
geh:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcn:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbD:function(a){var z
if(this.gdS()){z=this.d
if(typeof z!=="number")return z.B()
return P.c9(C.b.t(this.a,z+1,this.e),null,null)}if(this.gd0())return 80
if(this.gd1())return 443
return 0},
ge3:function(a){return C.b.t(this.a,this.e,this.f)},
gcz:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.t(this.a,z+1,y):""},
gdP:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aE(y,z+1):""},
gcA:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.T
z=P.i
return new P.f5(P.f9(this.gcz(this),C.k),[z,z])},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbH()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.gdS()?this.gbD(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aE(y,x+1)
return new P.cx(i,j,c,f,d,g,b)},
e8:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdf)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdf:1},
kw:{"^":"cx;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dR:function(a,b){var z=document.createElement("canvas")
return z},
hH:function(a){H.f(a,"$isaa")
return"wheel"},
hT:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise7")
try{J.hd(z,a)}catch(x){H.as(x)}return z},
cv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fj:function(a,b,c,d){var z,y
z=W.cv(W.cv(W.cv(W.cv(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fJ:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dl(a,b)},
ab:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n4:{"^":"u;0l:length=","%":"AccessibleNodeList"},
n5:{"^":"ab;0a_:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n6:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cM:{"^":"u;",$iscM:1,"%":";Blob"},
nc:{"^":"ab;0a_:type}","%":"HTMLButtonElement"},
cP:{"^":"ab;",
cH:function(a,b,c){var z=a.getContext(b,P.mn(c,null))
return z},
$iscP:1,
"%":"HTMLCanvasElement"},
ne:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ng:{"^":"hx;0l:length=","%":"CSSPerspective"},
b3:{"^":"u;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nh:{"^":"kv;0l:length=",
en:function(a,b){var z=a.getPropertyValue(this.eO(a,b))
return z==null?"":z},
eO:function(a,b){var z,y
z=$.$get$dV()
y=z[b]
if(typeof y==="string")return y
y=this.fO(a,b)
z[b]=y
return y},
fO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hB()+b
if(z in a)return z
return b},
gc8:function(a){return a.bottom},
gar:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gbc:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hw:{"^":"b;",
gaQ:function(a){return this.en(a,"left")}},
dW:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hx:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ni:{"^":"dW;0l:length=","%":"CSSTransformValue"},
nj:{"^":"dW;0l:length=","%":"CSSUnparsedValue"},
nk:{"^":"u;0l:length=","%":"DataTransferItemList"},
nl:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
nm:{"^":"ky;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa7",[P.a_],"$asa7")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a7,P.a_]]},
$asx:function(){return[[P.a7,P.a_]]},
$isk:1,
$ask:function(){return[[P.a7,P.a_]]},
$isc:1,
$asc:function(){return[[P.a7,P.a_]]},
$asB:function(){return[[P.a7,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hD:{"^":"u;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gar(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaQ(b)&&a.top===z.gbc(b)&&this.gat(a)===z.gat(b)&&this.gar(a)===z.gar(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF)},
gc8:function(a){return a.bottom},
gar:function(a){return a.height},
gaQ:function(a){return a.left},
gb7:function(a){return a.right},
gbc:function(a){return a.top},
gat:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
nn:{"^":"kA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
no:{"^":"u;0l:length=","%":"DOMTokenList"},
ku:{"^":"ck;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa0")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ii(this)
return new J.au(z,z.length,0,[H.y(z,0)])},
aB:function(a,b,c,d){throw H.a(P.c4(null))},
$asx:function(){return[W.a0]},
$ask:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"K;",
gcc:function(a){return new W.ku(a,a.children)},
gdm:function(a){return P.iV(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
np:{"^":"ab;0a_:type}","%":"HTMLEmbedElement"},
ad:{"^":"u;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"u;",
df:["eq",function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(c!=null)this.eL(a,b,c,!1)}],
eL:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.ad]}),1),!1)},
$isaa:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fp|fq|fs|ft"},
aV:{"^":"cM;",$isaV:1,"%":"File"},
e3:{"^":"kF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaV")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aV]},
$asx:function(){return[W.aV]},
$isk:1,
$ask:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$ise3:1,
$asB:function(){return[W.aV]},
"%":"FileList"},
nq:{"^":"aa;0l:length=","%":"FileWriter"},
nr:{"^":"ab;0l:length=","%":"HTMLFormElement"},
b6:{"^":"u;",$isb6:1,"%":"Gamepad"},
ns:{"^":"u;0l:length=","%":"History"},
nt:{"^":"kS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e6:{"^":"u;",$ise6:1,"%":"ImageData"},
e7:{"^":"ab;0a_:type}",$ise7:1,"%":"HTMLInputElement"},
bB:{"^":"dc;",$isbB:1,"%":"KeyboardEvent"},
nx:{"^":"ab;0a_:type}","%":"HTMLLinkElement"},
ny:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
nz:{"^":"u;0l:length=","%":"MediaList"},
nA:{"^":"aa;",
df:function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.eq(a,b,c,!1)},
"%":"MessagePort"},
nB:{"^":"kZ;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gas:function(a){var z=H.d([],[P.i])
this.K(a,new W.ix(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ix:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nC:{"^":"l_;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gas:function(a){var z=H.d([],[P.i])
this.K(a,new W.iy(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iy:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"u;",$isb9:1,"%":"MimeType"},
nD:{"^":"l1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"MimeTypeArray"},
aw:{"^":"dc;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kt:{"^":"ck;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isK")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e4(z,z.length,-1,[H.aZ(C.V,z,"B",0)])},
aB:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asx:function(){return[W.K]},
$ask:function(){return[W.K]},
$asc:function(){return[W.K]}},
K:{"^":"aa;",
i8:function(a,b){var z,y
try{z=a.parentNode
J.h8(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.er(a):z},
fD:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iC:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
nL:{"^":"ab;0a_:type}","%":"HTMLOListElement"},
nM:{"^":"ab;0a_:type}","%":"HTMLObjectElement"},
ba:{"^":"u;0l:length=",$isba:1,"%":"Plugin"},
nP:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"PluginArray"},
nR:{"^":"u;0a_:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nS:{"^":"ld;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gas:function(a){var z=H.d([],[P.i])
this.K(a,new W.j4(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j4:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nU:{"^":"ab;0a_:type}","%":"HTMLScriptElement"},
nW:{"^":"ab;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"aa;",$isbc:1,"%":"SourceBuffer"},
nX:{"^":"fq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SourceBufferList"},
nY:{"^":"ab;0a_:type}","%":"HTMLSourceElement"},
bd:{"^":"u;",$isbd:1,"%":"SpeechGrammar"},
nZ:{"^":"lg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"u;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
o0:{"^":"lj;",
k:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gas:function(a){var z=H.d([],[P.i])
this.K(a,new W.jl(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jl:{"^":"o:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o3:{"^":"ab;0a_:type}","%":"HTMLStyleElement"},
bf:{"^":"u;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
da:{"^":"ab;",$isda:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"aa;",$isbg:1,"%":"TextTrack"},
bh:{"^":"aa;",$isbh:1,"%":"TextTrackCue|VTTCue"},
o6:{"^":"lq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TextTrackCueList"},
o7:{"^":"ft;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"TextTrackList"},
o8:{"^":"u;0l:length=","%":"TimeRanges"},
bj:{"^":"u;",$isbj:1,"%":"Touch"},
bk:{"^":"dc;",$isbk:1,"%":"TouchEvent"},
o9:{"^":"lw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TouchList"},
oa:{"^":"u;0l:length=","%":"TrackDefaultList"},
dc:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oc:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
od:{"^":"aa;0l:length=","%":"VideoTrackList"},
bL:{"^":"aw;",
ghu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ght:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
km:{"^":"aa;",
fE:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.a_]}),1))},
eW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oi:{"^":"lY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb3")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isk:1,
$ask:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asB:function(){return[W.b3]},
"%":"CSSRuleList"},
oj:{"^":"hD;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaQ(b)&&a.top===z.gbc(b)&&a.width===z.gat(b)&&a.height===z.gar(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gar:function(a){return a.height},
gat:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ol:{"^":"m_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isk:1,
$ask:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asB:function(){return[W.b6]},
"%":"GamepadList"},
om:{"^":"m1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
on:{"^":"m3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
oo:{"^":"m5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"StyleSheetList"},
kB:{"^":"d9;a,b,c,$ti",
hL:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
ok:{"^":"kB;a,b,c,$ti"},
kC:{"^":"eC;a,b,c,d,e,$ti",
fS:function(){var z=this.d
if(z!=null&&this.a<=0)J.h9(this.b,this.c,z,!1)},
p:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fJ(new W.kD(c),W.ad)
z=new W.kC(0,a,b,z,!1,[e])
z.fS()
return z}}},
kD:{"^":"o:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
B:{"^":"b;$ti",
gZ:function(a){return new W.e4(a,this.gl(a),-1,[H.aZ(this,a,"B",0)])},
aB:function(a,b,c,d){H.z(d,H.aZ(this,a,"B",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
e4:{"^":"b;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dE(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kv:{"^":"u+hw;"},
kx:{"^":"u+x;"},
ky:{"^":"kx+B;"},
kz:{"^":"u+x;"},
kA:{"^":"kz+B;"},
kE:{"^":"u+x;"},
kF:{"^":"kE+B;"},
kR:{"^":"u+x;"},
kS:{"^":"kR+B;"},
kZ:{"^":"u+ai;"},
l_:{"^":"u+ai;"},
l0:{"^":"u+x;"},
l1:{"^":"l0+B;"},
l2:{"^":"u+x;"},
l3:{"^":"l2+B;"},
l6:{"^":"u+x;"},
l7:{"^":"l6+B;"},
ld:{"^":"u+ai;"},
fp:{"^":"aa+x;"},
fq:{"^":"fp+B;"},
lf:{"^":"u+x;"},
lg:{"^":"lf+B;"},
lj:{"^":"u+ai;"},
lp:{"^":"u+x;"},
lq:{"^":"lp+B;"},
fs:{"^":"aa+x;"},
ft:{"^":"fs+B;"},
lv:{"^":"u+x;"},
lw:{"^":"lv+B;"},
lX:{"^":"u+x;"},
lY:{"^":"lX+B;"},
lZ:{"^":"u+x;"},
m_:{"^":"lZ+B;"},
m0:{"^":"u+x;"},
m1:{"^":"m0+B;"},
m2:{"^":"u+x;"},
m3:{"^":"m2+B;"},
m4:{"^":"u+x;"},
m5:{"^":"m4+B;"}}],["","",,P,{"^":"",
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ee(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mn:function(a,b){var z={}
a.K(0,new P.mo(z))
return z},
e1:function(){var z=$.e0
if(z==null){z=J.cJ(window.navigator.userAgent,"Opera",0)
$.e0=z}return z},
hB:function(){var z,y
z=$.dY
if(z!=null)return z
y=$.dZ
if(y==null){y=J.cJ(window.navigator.userAgent,"Firefox",0)
$.dZ=y}if(y)z="-moz-"
else{y=$.e_
if(y==null){y=!P.e1()&&J.cJ(window.navigator.userAgent,"Trident/",0)
$.e_=y}if(y)z="-ms-"
else z=P.e1()?"-o-":"-webkit-"}$.dY=z
return z},
lm:{"^":"b;",
dM:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cF:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isiY)throw H.a(P.c4("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscM)return a
if(!!y.$ise3)return a
if(!!y.$ise6)return a
if(!!y.$isen||!!y.$isd5)return a
if(!!y.$isJ){x=this.dM(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lo(z,this))
return z.a}if(!!y.$isc){x=this.dM(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hr(a,x)}throw H.a(P.c4("structured clone of other type"))},
hr:function(a,b){var z,y,x,w
z=J.aG(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cF(z.k(a,w)))
return x}},
lo:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cF(b)}},
mo:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
ln:{"^":"lm;a,b"},
hN:{"^":"ck;a,b",
gbh:function(){var z,y,x
z=this.b
y=H.az(z,"x",0)
x=W.a0
return new H.il(new H.kk(z,H.h(new P.hO(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.gbh()
J.hc(z.b.$1(J.cK(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aB:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbh().a)},
k:function(a,b){var z=this.gbh()
return z.b.$1(J.cK(z.a,b))},
gZ:function(a){var z=P.ie(this.gbh(),!1,W.a0)
return new J.au(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a0]},
$ask:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hO:{"^":"o:29;",
$1:function(a){return!!J.O(H.f(a,"$isK")).$isa0}},
hP:{"^":"o:27;",
$1:function(a){return H.j(H.f(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l8:{"^":"b;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gc8:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbc(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gc8(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bV(z)
x=this.b
w=J.bV(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.kT(P.cw(P.cw(P.cw(P.cw(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l8;aQ:a>,bc:b>,at:c>,ar:d>,$ti",p:{
iV:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"u;",$isbC:1,"%":"SVGLength"},nw:{"^":"kV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbC")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bC]},
$isk:1,
$ask:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asB:function(){return[P.bC]},
"%":"SVGLengthList"},bF:{"^":"u;",$isbF:1,"%":"SVGNumber"},nK:{"^":"l5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbF")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bF]},
$isk:1,
$ask:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asB:function(){return[P.bF]},
"%":"SVGNumberList"},nQ:{"^":"u;0l:length=","%":"SVGPointList"},nV:{"^":"eE;0a_:type}","%":"SVGScriptElement"},o1:{"^":"ll;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},o4:{"^":"eE;0a_:type}","%":"SVGStyleElement"},eE:{"^":"a0;",
gcc:function(a){return new P.hN(a,new W.kt(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bI:{"^":"u;",$isbI:1,"%":"SVGTransform"},ob:{"^":"ly;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbI")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bI]},
$isk:1,
$ask:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGTransformList"},kU:{"^":"u+x;"},kV:{"^":"kU+B;"},l4:{"^":"u+x;"},l5:{"^":"l4+B;"},lk:{"^":"u+x;"},ll:{"^":"lk+B;"},lx:{"^":"u+x;"},ly:{"^":"lx+B;"}}],["","",,P,{"^":"",R:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}}],["","",,P,{"^":"",n7:{"^":"u;0l:length=","%":"AudioBuffer"},dJ:{"^":"aa;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n8:{"^":"ks;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gas:function(a){var z=H.d([],[P.i])
this.K(a,new P.hg(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hg:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dJ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n9:{"^":"aa;0l:length=","%":"AudioTrackList"},hk:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},na:{"^":"dJ;0a_:type}","%":"BiquadFilterNode"},nN:{"^":"hk;0l:length=","%":"OfflineAudioContext"},nO:{"^":"hh;0a_:type}","%":"Oscillator|OscillatorNode"},ks:{"^":"u+ai;"}}],["","",,P,{"^":"",ew:{"^":"u;",$isew:1,"%":"WebGLRenderingContext"},jK:{"^":"u;",$isjK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",o_:{"^":"li;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lh:{"^":"u+x;"},li:{"^":"lh+B;"}}],["","",,O,{"^":"",aI:{"^":"b;0a,0b,0c,0d,$ti",
bK:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cJ:function(a,b,c){var z=H.az(this,"aI",0)
H.h(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.cJ(a,null,b)},
fq:function(a){var z
H.w(a,"$isk",[H.az(this,"aI",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f6:function(a,b){var z
H.w(b,"$isk",[H.az(this,"aI",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.au(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"aI",0)
H.z(b,z)
z=[z]
if(this.fq(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f6(x,H.d([b],z))}},
$isk:1,
p:{
cQ:function(a){var z=new O.aI([a])
z.bK(a)
return z}}},d2:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
eC:function(a){var z=this.b
if(!(z==null))z.E(a)},
aF:function(){return this.eC(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gaC(z)
else return V.c2()},
e6:function(a){var z=this.a
if(a==null)C.a.h(z,V.c2())
else C.a.h(z,a)
this.aF()},
cv:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cL:{"^":"b;"},aJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cQ:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();){y=z.d
if(y.f==null)y.cQ()}},
sa4:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.h(this.ge1(),{func:1,ret:-1,args:[D.t]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.h(this.ge1(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.F("shape",z,this.c,this,[F.ez])
w.b=!0
this.a3(w)}},
sb8:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.P(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cQ()
w=new D.F("technique",x,this.f,this,[O.cs])
w.b=!0
this.a3(w)}},
saD:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.h(this.ge0(),{func:1,ret:-1,args:[D.t]})
C.a.P(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.h(this.ge0(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.F("mover",z,a,this,[U.a6])
w.b=!0
this.a3(w)}},
al:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.am(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.av])
w.b=!0
this.a3(w)}z=this.f
if(z!=null)z.al(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.al(0,b)},
aR:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.j(0,z.gX(z)))
z.aF()
a.e7(this.f)
z=a.dy
x=(z&&C.a).gaC(z)
if(x!=null&&this.d!=null)x.i7(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aR(a)
a.e5()
a.dx.cv()},
gw:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.E(a)},
W:function(){return this.a3(null)},
hU:[function(a){H.f(a,"$ist")
this.e=null
this.a3(a)},function(){return this.hU(null)},"j5","$1","$0","ge1",0,2,1],
hV:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hV(null)},"j6","$1","$0","ge2",0,2,1],
hT:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hT(null)},"j4","$1","$0","ge0",0,2,1],
hR:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hR(null)},"j2","$1","$0","ge_",0,2,1],
j1:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aJ],"$ask")
for(z=b.length,y=this.ge_(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.W()},"$2","ghQ",8,0,10],
j3:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aJ],"$ask")
for(z=b.length,y=this.ge_(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.P(t.a,y)}}this.W()},"$2","ghS",8,0,10],
$isaK:1,
p:{
cS:function(a,b,c,d,e,f){var z,y
z=new E.aJ()
z.a=d
z.b=!0
y=O.cQ(E.aJ)
z.y=y
y.bf(z.ghQ(),z.ghS())
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
z.sa4(0,e)
z.sb8(f)
z.saD(c)
return z}}},j_:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ey:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d2()
y=[V.av]
z.a=H.d([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.h(new E.j1(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d2()
z.a=H.d([],y)
v=z.gw()
v.toString
x=H.h(new E.j2(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d2()
z.a=H.d([],y)
y=z.gw()
y.toString
w=H.h(new E.j3(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.cs])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.i,A.ey])},
gi3:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.j(0,y.gX(y))
this.z=y
z=y}return z},
e7:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaC(z):a;(z&&C.a).h(z,y)},
e5:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j0:function(a,b){var z=new E.j_(a,b)
z.ey(a,b)
return z}}},j1:{"^":"o:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},j2:{"^":"o:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j3:{"^":"o:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},ju:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
eE:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.E(a)
this.ia()},function(){return this.eE(null)},"eD","$1","$0","gcM",0,2,1],
ghC:function(){var z,y,x
z=Date.now()
y=C.e.a1(P.e2(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
d5:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.q(z)
x=C.d.dN(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.dN(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eJ(C.q,this.gi9())},
ia:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jw(this),{func:1,ret:-1,args:[P.a_]})
C.B.eW(z)
C.B.fE(z,W.fJ(y,P.a_))}},"$0","gi9",0,0,3],
i6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d5()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e2(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aF()
w=x.db
C.a.sl(w.a,0)
w.aF()
w=x.dx
C.a.sl(w.a,0)
w.aF()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aR(this.e)}}catch(v){z=H.as(v)
y=H.bt(v)
P.dB("Error: "+H.l(z))
P.dB("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jv:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscP)return E.eI(a,!0,!0,!0,!1)
y=W.dR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcc(a).h(0,y)
w=E.eI(y,!0,!0,!0,!1)
w.a=a
return w},
eI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ju()
y=P.i9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cH(a,"webgl",y)
x=H.f(x==null?C.l.cH(a,"experimental-webgl",y):x,"$isew")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j0(x,a)
w=new T.jq(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jX(a)
v=new X.i1()
v.c=new X.aC(!1,!1,!1)
v.d=P.ic(null,null,null,P.m)
w.b=v
v=new X.iz(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ih(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jz(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eC,P.b]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.h(w.gfd(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.h(w.gfg(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.h(w.gfa(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.h(w.gfi(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.h(w.gfh(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.h(w.gfl(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.h(w.gfn(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.h(w.gfm(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a2(a,H.M(W.hH(a)),H.h(w.gfo(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.h(w.gfe(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.h(w.gff(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.h(w.gfp(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.h(w.gfz(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.h(w.gfv(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.h(w.gfw(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.d5()
return z}}},jw:{"^":"o:31;a",
$1:function(a){var z
H.mU(a)
z=this.a
if(z.z){z.z=!1
z.i6()}}}}],["","",,Z,{"^":"",fe:{"^":"b;a,b",p:{
dh:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fe(b,z)}}},dN:{"^":"cL;a,b,c,d,e",
bl:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kj:{"^":"b;a",$isnb:1},dO:{"^":"b;a,0b,c,d",
aP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bl:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bl(a)},
ef:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aR:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$iso5:1},ch:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcK:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
hk:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fd()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
aq:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dS:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hL(z))
return x!==0},
ib:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
aa:function(a){return this.ib(a,!0,!1)},
p:{
Q:function(){var z=new D.b5()
z.a=H.d([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hL:{"^":"o:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},ci:{"^":"t;c,d,a,0b,$ti"},cj:{"^":"t;c,d,a,0b,$ti"},F:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nd<"}},eb:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ec:{"^":"t;c,a,0b"},i1:{"^":"b;0a,0b,0c,0d",
i0:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.E(y)},
hX:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.E(y)}},eg:{"^":"co;x,y,c,d,e,a,0b"},ih:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaM()
s=new X.bD(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cu:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
b6:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
i1:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d3(new V.V(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.E(w)
return!0},
fk:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.eg(c,a,this.a.gaM(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.U(0,0)}},aC:{"^":"b;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
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
return z+(this.c?"Shift+":"")}},bD:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},iz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bQ:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaM()
x=new X.bD(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cu:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bQ(a,b,!0))
return!0},
b6:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bQ(a,b,!0))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bQ(a,b,!1))
return!0},
i2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d3(new V.V(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdn:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gdY:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},d3:{"^":"co;x,c,d,e,a,0b"},co:{"^":"t;"},eN:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},jz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaM()
w=new X.eN(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i_:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.E(this.aw(a,!0))
return!0},
hY:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.E(this.aw(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.E(this.aw(a,!1))
return!0}},jX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaM:function(){var z=this.a
return V.ev(0,0,(z&&C.l).gdm(z).c,C.l.gdm(z).d)},
cX:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.aC(y,a.altKey,a.shiftKey))},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
c3:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
ax:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.U(y-w,x-v)},
aV:function(a){return new V.V(a.movementX,a.movementY)},
bY:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.d.ab(u.pageX)
C.d.ab(u.pageY)
s=z.left
C.d.ab(u.pageX)
C.a.h(y,new V.U(t-s,C.d.ab(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.aC(y,a.altKey,a.shiftKey))},
bS:function(a){var z,y,x,w,v,u
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
iF:[function(a){this.f=!0},"$1","gfg",4,0,5],
iz:[function(a){this.f=!1},"$1","gfa",4,0,5],
iC:[function(a){H.f(a,"$isaw")
if(this.f&&this.bS(a))a.preventDefault()},"$1","gfd",4,0,4],
iH:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cX(a)
if(this.b.i0(z))a.preventDefault()},"$1","gfi",4,0,24],
iG:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cX(a)
if(this.b.hX(z))a.preventDefault()},"$1","gfh",4,0,24],
iJ:[function(a){var z,y,x,w
H.f(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aK(a)
if(this.x){y=this.au(a)
x=this.aV(a)
if(this.d.cu(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ax(a)
if(this.c.cu(y,w))a.preventDefault()},"$1","gfl",4,0,4],
iL:[function(a){var z,y,x
H.f(a,"$isaw")
this.aK(a)
z=this.au(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfn",4,0,4],
iE:[function(a){var z,y,x
H.f(a,"$isaw")
if(!this.bS(a)){this.aK(a)
z=this.au(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b6(z,x))a.preventDefault()}},"$1","gff",4,0,4],
iK:[function(a){var z,y,x
H.f(a,"$isaw")
this.aK(a)
z=this.au(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfm",4,0,4],
iD:[function(a){var z,y,x
H.f(a,"$isaw")
if(!this.bS(a)){this.aK(a)
z=this.au(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gfe",4,0,4],
iM:[function(a){var z,y
H.f(a,"$isbL")
this.aK(a)
z=new V.V((a&&C.A).ght(a),C.A.ghu(a)).u(0,180)
if(this.x){if(this.d.i1(z))a.preventDefault()
return}if(this.r)return
y=this.ax(a)
if(this.c.i2(z,y))a.preventDefault()},"$1","gfo",4,0,35],
iN:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ax(this.y)
this.d.fk(w,v,x)}},"$1","gfp",4,0,5],
iT:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.c3(a)
z=this.bY(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfz",4,0,12],
iR:[function(a){var z
H.f(a,"$isbk")
this.c3(a)
z=this.bY(a)
if(this.e.hY(z))a.preventDefault()},"$1","gfv",4,0,12],
iS:[function(a){var z
H.f(a,"$isbk")
this.c3(a)
z=this.bY(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfw",4,0,12]}}],["","",,D,{"^":"",hC:{"^":"b;",$isa1:1,$isaK:1},a1:{"^":"b;",$isaK:1},i2:{"^":"aI;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
ad:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fj:[function(a){var z
H.f(a,"$ist")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fj(null)},"iI","$1","$0","gd2",0,2,1],
iO:[function(a){var z,y,x
H.w(a,"$isk",[D.a1],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.eS(x))return!1}return!0},"$1","gfs",4,0,37],
iw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd2(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cn)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.ad(z)},"$2","gf7",8,0,22],
iQ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd2(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cn)C.a.P(this.f,t)
s=t.r
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.P(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.ad(z)},"$2","gfu",8,0,22],
eS:function(a){var z=C.a.bn(this.f,a)
return z},
$ask:function(){return[D.a1]},
$asaI:function(){return[D.a1]}},cn:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
ad:[function(a){var z
H.f(a,"$ist")
z=this.r
if(!(z==null))z.E(a)},function(){return this.ad(null)},"im","$1","$0","geF",0,2,1],
$isa1:1,
$isaK:1},ji:{"^":"b;",$isa1:1,$isaK:1},jr:{"^":"b;",$isa1:1,$isaK:1},js:{"^":"b;",$isa1:1,$isaK:1},jt:{"^":"b;",$isa1:1,$isaK:1}}],["","",,V,{"^":"",
nf:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","iw",8,0,33],
cH:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.be(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.d.ed($.n.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.p],"$asc")
z=H.d([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.a9(z[u],x))}return z},
a4:{"^":"b;a,b,c",
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
return new V.a4(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b1:{"^":"b;a,b,c,d",
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
return new V.b1(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
cl:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscl")
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
return new V.cl(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.p]
y=V.bs(H.d([this.a,this.d,this.r],z),3,0)
x=V.bs(H.d([this.b,this.e,this.x],z),3,0)
w=V.bs(H.d([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
av:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
dW:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.c2()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isav")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ee:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gai(a)
if(typeof z!=="number")return z.j()
y=C.d.j(z,y)
z=this.b
x=a.gaj(a)
if(typeof z!=="number")return z.j()
x=C.d.j(z,x)
z=this.c
w=a.gak()
if(typeof z!=="number")return z.j()
w=C.d.j(z,w)
z=this.e
v=a.gai(a)
if(typeof z!=="number")return z.j()
v=C.d.j(z,v)
z=this.f
u=a.gaj(a)
if(typeof z!=="number")return z.j()
u=C.d.j(z,u)
z=this.r
t=a.gak()
if(typeof z!=="number")return z.j()
t=C.d.j(z,t)
z=this.y
s=a.gai(a)
if(typeof z!=="number")return z.j()
s=C.d.j(z,s)
z=this.z
r=a.gaj(a)
if(typeof z!=="number")return z.j()
r=C.d.j(z,r)
z=this.Q
q=a.gak()
if(typeof z!=="number")return z.j()
return new V.G(y+x+w,v+u+t,s+r+C.d.j(z,q))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.X(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
i:function(a){return this.L()},
dO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bs(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
L:function(){return this.dO("",3,0)},
A:function(a){return this.dO(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c2:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
em:function(a,b,c){return V.aB(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cm:function(a,b,c,d){return V.aB(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ej:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ek:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
el:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
U:{"^":"b;a,b",
J:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.U(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
X:{"^":"b;a,b,c",
B:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bG:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bG(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eu:{"^":"b;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eu))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
ev:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eu(a,b,c,d)}}},
V:{"^":"b;a,b",
hJ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.V(z*b,y*b)},
u:function(a,b){var z,y
if($.n.$2(b,0))return new V.V(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hJ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cq:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ay:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.G(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dX:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hr:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bL:function(a){var z=V.cH(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
scG:function(a,b){},
scr:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bL(z)}z=new D.F("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.I(z)}},
sct:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bL(z)}z=new D.F("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.I(z)}},
sY:function(a,b){var z,y
b=this.bL(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.p])
z.b=!0
this.I(z)}},
scs:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.I(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.p])
z.b=!0
this.I(z)}},
scf:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.p])
z.b=!0
this.I(z)}},
al:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cR:function(){var z=new U.hr()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dU:{"^":"a6;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
am:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
bX:function(a){var z=new U.dU()
z.a=a
return z}}},e5:{"^":"aI;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
I:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.I(null)},"af","$1","$0","gaJ",0,2,1],
io:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geG",8,0,19],
iP:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.P(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gft",8,0,19],
am:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.am(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.c2():x
z=this.e
if(!(z==null))z.aa(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a6]},
$asaI:function(){return[U.a6]},
$isa6:1,
p:{
cU:function(a){var z=new U.e5()
z.bK(U.a6)
z.bf(z.geG(),z.gft())
z.e=null
z.f=V.c2()
z.r=0
return z}}},a6:{"^":"dS;"},ex:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
sek:function(a){var z,y
a=V.cH(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.p])
z.b=!0
this.I(z)}},
se4:function(a,b){var z,y
b=V.cH(b,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,b)){y=this.b
this.b=b
z=new D.F("pitch",y,b,this,[P.p])
z.b=!0
this.I(z)}},
se9:function(a){var z,y
a=V.cH(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.p])
z.b=!0
this.I(z)}},
am:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sek(this.a+this.d*b.y)
this.se4(0,this.b+this.e*b.y)
this.se9(this.c+this.f*b.y)
this.x=V.el(this.c).j(0,V.ek(this.b)).j(0,V.ej(this.a))
z=this.y
if(!(z==null))z.aa(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"}},jY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
I:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.I(null)},"af","$1","$0","gaJ",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdn()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdY()
x.toString
z=H.h(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.h(this.gbV(),y)
C.a.h(z.a,y)
return!0},
f2:[function(a){H.f(a,"$ist")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbT",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbD")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.V(x.a,x.b).j(0,2).u(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
this.b.sS(0)
y=y.J(0,a.z)
this.Q=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())}this.af()},"$1","gbU",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sS(y*10*x)
this.af()}},"$1","gbV",4,0,2],
am:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.al(0,x)
this.cx=V.el(this.b.d)}return this.cx},
$isa6:1},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
I:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.I(null)},"af","$1","$0","gaJ",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdn()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdY()
x.toString
z=H.h(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.h(this.gbV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.Q()
x.f=z}x=H.h(this.gf_(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gf0(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.Q()
x.b=z}x=H.h(this.gfR(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gfQ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.Q()
x.c=z}y=H.h(this.gfP(),y)
C.a.h(z.a,y)
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.V(z,y)},
f2:[function(a){a=H.j(H.f(a,"$ist"),"$isbD")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbT",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbD")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ap(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ap(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.ap(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.af()},"$1","gbU",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sS(-y*10*z)
this.af()}},"$1","gbV",4,0,2],
it:[function(a){if(H.j(H.f(a,"$ist"),"$iseg").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf_",4,0,2],
iu:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbD")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ap(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.ap(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.af()},"$1","gf0",4,0,2],
iX:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfR",4,0,2],
iW:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$iseN")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ap(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ap(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.ap(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.af()},"$1","gfQ",4,0,2],
iV:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sS(-y*10*z)
this.af()}},"$1","gfP",4,0,2],
am:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.al(0,x)
this.b.al(0,x)
this.fr=V.ej(this.b.d).j(0,V.ek(this.c.d))}return this.fr},
$isa6:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.E(a)},
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=H.h(this.gf5(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iv:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.P(this.b,this.a.b.c))return
H.j(a,"$isd3")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.p])
z.b=!0
this.I(z)}},"$1","gf5",4,0,2],
am:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.cm(x,x,x,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aG:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aG(null)},"ip","$1","$0","gao",0,2,1],
iA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gfb",8,0,10],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.P(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gfc",8,0,10],
sb8:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gao(),{func:1,ret:-1,args:[D.t]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gao(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.cs])
z.b=!0
this.aG(z)}},
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e7(this.c)
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
u=C.d.ab(v.a*x)
if(typeof w!=="number")return H.q(w)
t=C.d.ab(v.b*w)
s=C.d.ab(v.c*x)
a.c=s
v=C.d.ab(v.d*w)
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
n=V.aB(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.e6(n)
y=$.er
if(y==null){y=new V.G(0,0,-1)
m=y.u(0,Math.sqrt(y.D(y)))
y=new V.G(0,1,0).ay(m)
l=y.u(0,Math.sqrt(y.D(y)))
k=m.ay(l)
j=new V.G(0,0,0)
y=V.aB(l.a,k.a,m.a,l.N(0).D(j),l.b,k.b,m.b,k.N(0).D(j),l.c,k.c,m.c,m.N(0).D(j),0,0,0,1)
$.er=y
i=y}else i=y
y=z.b
if(y!=null){h=y.am(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.e6(i)
z=this.c
if(z!=null)z.al(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.al(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aR(a)
this.a.toString
a.cy.cv()
a.db.cv()
this.b.toString
a.e5()},
$isnT:1}}],["","",,A,{"^":"",dI:{"^":"b;a,b,c"},hf:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hw:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},io:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aN,0aA,0aO,0bq,0dq,0dr,0br,0bs,0ds,0dt,0bt,0bu,0du,0dv,0bv,0dw,0dz,0bw,0dA,0dB,0bx,0by,0bz,0dC,0dD,0bA,0bB,0dE,0dF,0bC,0dG,0cg,0dH,0ci,0dI,0cj,0dJ,0ck,0dK,0cl,0dL,0cm,a,b,0c,0d,0e,0f,0r",
ex:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
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
a2.fU(z)
a2.h0(z)
a2.fV(z)
a2.h8(z)
a2.h9(z)
a2.h2(z)
a2.hd(z)
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
v.fY(z)
v.fT(z)
v.fW(z)
v.fZ(z)
v.h6(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h4(z)
v.h5(z)}v.h1(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.d([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fX(z)
v.h3(z)
v.h7(z)
v.ha(z)
v.hb(z)
v.hc(z)
v.h_(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.i])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cY(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cY(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fN(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.fK()
this.fM()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaM")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaM")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaM")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isde")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaM")
this.k3=H.d([],[A.aM])
y=a2.aN
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.aN=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aO=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.h:this.aA=H.j(this.r.n(0,"diffuseTxt"),"$isap")
this.aO=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bq=H.j(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dq=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.br=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.h:this.dr=H.j(this.r.n(0,"invDiffuseTxt"),"$isap")
this.br=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bu=H.j(this.r.n(0,"shininess"),"$isY")
this.bs=H.j(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.ds=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bt=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.h:this.dt=H.j(this.r.n(0,"specularTxt"),"$isap")
this.bt=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.du=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bv=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.h:this.dv=H.j(this.r.n(0,"bumpTxt"),"$isap")
this.bv=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dw=H.j(this.r.n(0,"envSampler"),"$isap")
this.dz=H.j(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.bw=H.j(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dA=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bx=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.h:this.dB=H.j(this.r.n(0,"reflectTxt"),"$isap")
this.bx=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.by=H.j(this.r.n(0,"refraction"),"$isY")
this.bz=H.j(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dC=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bA=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.h:this.dD=H.j(this.r.n(0,"refractTxt"),"$isap")
this.bA=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bB=H.j(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.f:this.dE=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bC=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.h:this.dF=H.j(this.r.n(0,"alphaTxt"),"$isap")
this.bC=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.cg=H.d([],[A.f_])
this.ci=H.d([],[A.f0])
this.cj=H.d([],[A.f1])
this.ck=H.d([],[A.f2])
this.cl=H.d([],[A.f3])
this.cm=H.d([],[A.f4])
if(a2.k2){y=a2.z
if(y>0){this.dG=H.f(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.cg;(x&&C.a).h(x,new A.f_(l,k,j))}}y=a2.Q
if(y>0){this.dH=H.f(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isY")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.ci;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dI=H.f(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.cj;(x&&C.a).h(x,new A.f1(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dJ=H.f(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isao")
x=this.ck;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dK=H.f(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isde")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isap")
x=this.cl;(x&&C.a).h(x,new A.f3(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dL=H.f(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isL")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isao")
x=this.cm;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){b.a.uniform1i(b.d,1)},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ip:function(a,b){var z,y
z=a.aA
y=new A.io(b,z)
y.eA(b,z)
y.ex(a,b)
return y}}},it:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aN,aA,aO",
fU:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aN+"];\n"
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
h0:function(a){var z
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
fV:function(a){var z
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
h8:function(a){var z,y
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
h9:function(a){var z,y
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
h2:function(a){var z
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
hd:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aE(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fY:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
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
fT:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
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
fW:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
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
fZ:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
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
h6:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
h1:function(a){var z,y
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
h4:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
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
h5:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
fX:function(a){var z,y
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
h3:function(a){var z,y
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
h7:function(a){var z,y
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
ha:function(a){var z,y,x
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
hb:function(a){var z,y,x
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
hc:function(a){var z,y,x
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
h_:function(a){var z
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
i:function(a){return this.aA}},f_:{"^":"b;a,b,c"},f2:{"^":"b;a,b,c,d,e,f,r,x"},f0:{"^":"b;a,b,c,d,e,f,r"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cL;",
eA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cY:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fN(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fK:function(){var z,y,x,w,v,u
z=H.d([],[A.dI])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dI(y,v.name,u))}this.f=new A.hf(z)},
fM:function(){var z,y,x,w,v,u
z=H.d([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hs(v.type,v.size,v.name,u))}this.r=new A.jJ(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dd(z,y,b,a,c)},
bk:function(a,b){return new P.fh(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hs:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.jE(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jH(this.a,this.e,c,d)
case 35667:return new A.jF(this.a,this.e,c,d)
case 35668:return new A.jG(this.a,this.e,c,d)
case 35669:return new A.jI(this.a,this.e,c,d)
case 35674:return new A.jL(this.a,this.e,c,d)
case 35675:return new A.de(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eT(b,c,d)
case 35680:return this.eU(b,c,d)
case 35670:throw H.a(this.bk("BOOL",c))
case 35671:throw H.a(this.bk("BOOL_VEC2",c))
case 35672:throw H.a(this.bk("BOOL_VEC3",c))
case 35673:throw H.a(this.bk("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ce:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jJ:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hB:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hB("\n")}},N:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jF:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jG:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jI:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jD:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dd:function(a,b,c,d,e){var z=new A.jD(a,b,c,e)
z.f=d
z.e=P.id(d,0,!1,P.m)
return z}}},Y:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jE:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jL:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},de:{"^":"ac;a,b,c,d",
an:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ac;a,b,c,d",
an:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
du:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
z=F.d8()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.aq()
return z},
cz:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cz(y)
k=F.cz(z.b)
j=F.dC(d,e,new F.m6(z,F.cz(z.c),F.cz(z.d),k,l,c),b)
if(j!=null)a.b4(j)},
fQ:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.d8()
y=b?-1:1
x=-6.283185307179586/f
w=H.d([],[F.af])
v=z.a
u=new V.G(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hh(new V.bG(a,-1,-1,-1),new V.b1(1,1,1,1),new V.X(0,0,d),new V.G(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.G(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c6(new V.bG(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.X(r*p,q*p,d),new V.G(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hf(w)
return z},
fO:function(a,b,c,d,e,f){return F.mq(!0,c,d,new F.mp(a,f),e)},
mq:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.dC(c,e,new F.ms(d),null)
if(z==null)return
z.aq()
z.c6()
if(b)z.b4(F.fQ(3,!1,!1,1,new F.mt(d),e))
z.b4(F.fQ(1,!0,!1,-1,new F.mu(d),e))
return z},
h1:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n_()
y=F.du(a,null,new F.n0(z),c)
y.c6()
return y},
h5:function(a,b,c,d){return F.fP(c,a,d,b,new F.n2())},
mJ:function(a,b,c,d,e,f){return F.fP(d,a,e,b,new F.mK(f,c))},
fP:function(a,b,c,d,e){var z=F.dC(a,b,new F.mr(H.h(e,{func:1,ret:V.X,args:[P.p]}),d,b,c),null)
if(z==null)return
z.aq()
z.c6()
return z},
dC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.d8()
y=H.d([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c6(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ce(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c6(null,null,new V.b1(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ce(d))}}z.d.hg(a+1,b+1,y)
return z},
m6:{"^":"o:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cq(z.b,b).cq(z.d.cq(z.c,b),c)
a.sY(0,new V.X(y.a,y.b,y.c))
a.seb(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdk(new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mp:{"^":"o:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
ms:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sY(0,new V.X(y,u,w))
u=new V.G(y,u,w)
a.seb(u.u(0,Math.sqrt(u.D(u))))
a.sdk(new V.bG(1-c,2+c,-1,-1))}},
mt:{"^":"o:18;a",
$1:function(a){return this.a.$2(a,1)}},
mu:{"^":"o:18;a",
$1:function(a){return this.a.$2(1-a,0)}},
n_:{"^":"o:26;",
$2:function(a,b){return 0}},
n0:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).j(0,1+z)
a.sY(0,new V.X(z.a,z.b,z.c))}},
n2:{"^":"o:16;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
mK:{"^":"o:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.X(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mr:{"^":"o:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dD(y.$1(z),x)
x=J.dD(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.G(1,0,0)
y=v.ay(!v.q(0,u)?new V.G(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.ay(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sY(0,w.B(0,new V.X(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
az:function(){if(!this.gaZ()){C.a.P(this.a.a.d.b,this)
this.a.a.W()}this.c_()
this.c0()
this.fC()},
c4:function(a){this.a=a
C.a.h(a.d.b,this)},
c5:function(a){this.b=a
C.a.h(a.d.c,this)},
fJ:function(a){this.c=a
C.a.h(a.d.d,this)},
c_:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
fC:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dX())return
return v.u(0,Math.sqrt(v.D(v)))},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.J(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ay(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
cb:function(){if(this.d!=null)return!0
var z=this.eN()
if(z==null){z=this.eQ()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
eM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dX())return
return v.u(0,Math.sqrt(v.D(v)))},
eP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.J(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.J(0,u).j(0,l).B(0,u).J(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.ay(m)
z=z.u(0,Math.sqrt(z.D(z))).ay(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
c9:function(){if(this.e!=null)return!0
var z=this.eM()
if(z==null){z=this.eP()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
b_:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.W()},
gho:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y
if(this.gaZ())return a+"disposed"
z=a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)+", "+C.b.a9(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.A("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.c4(a)
z.c5(b)
z.fJ(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
hM:{"^":"b;"},
jh:{"^":"hM;",
b3:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d_:{"^":"b;0a,0b",
az:function(){if(!this.gaZ()){C.a.P(this.a.a.c.b,this)
this.a.a.W()}this.c_()
this.c0()},
c4:function(a){this.a=a
C.a.h(a.c.b,this)},
c5:function(a){this.b=a
C.a.h(a.c.c,this)},
c_:function(){var z=this.a
if(z!=null){C.a.P(z.c.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.P(z.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)},
L:function(){return this.A("")},
p:{
i3:function(a,b){var z,y,x
z=new F.d_()
y=a.a
if(y==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.v("May not create a line with vertices attached to different shapes."))
z.c4(a)
z.c5(b)
C.a.h(z.a.a.c.b,z)
z.a.a.W()
return z}}},
i4:{"^":"b;"},
jC:{"^":"i4;",
b3:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d7:{"^":"b;0a",
az:function(){var z=this.a
if(z!=null){C.a.P(z.a.b.b,this)
this.a.a.W()}this.fB()},
fB:function(){var z=this.a
if(z!=null){C.a.P(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a9(J.a9(z.e),0)},
L:function(){return this.A("")}},
ez:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
b4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.hq())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d7()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.i3(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.by(p,o,m)}z=this.e
if(!(z==null))z.aa(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.aa(0)
return y},
eY:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b3(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hN:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.eY(a,v,y,u,t))b.b4(u)}this.a.v()
this.c.cB()
this.d.cB()
this.b.i5()
this.c.cC(new F.jC())
this.d.cC(new F.jh())
z=this.e
if(!(z==null))z.aa(0)},
hj:function(a){this.hN(new F.kd(),new F.iD())},
c6:function(){return this.hj(null)},
b_:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.b_()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.e(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdZ(new V.G(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.G(w,v,z).u(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.E(null)}}}}z=this.e
if(!(z==null))z.aa(0)},
hm:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcK(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dN])
for(r=0,q=0;q<w;++q){p=b.hk(q)
o=p.gcK(p)
C.a.m(s,q,new Z.dN(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hK(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dO(new Z.fe(34962,j),s,b)
i.b=H.d([],[Z.ch])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.E(a)},
W:function(){return this.a3(null)},
p:{
d8:function(){var z,y
z=new F.ez()
y=new F.k8(z)
y.b=!1
y.c=H.d([],[F.af])
z.a=y
y=new F.jc(z)
y.b=H.d([],[F.d7])
z.b=y
y=new F.jb(z)
y.b=H.d([],[F.d_])
z.c=y
y=new F.ja(z)
y.b=H.d([],[F.am])
z.d=y
z.e=null
return z}}},
ja:{"^":"b;a,0b",
hf:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.d([],[F.am])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.e(a,v)
v=a[v]
if(w>=u)return H.e(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.by(x,v,u))}}return z},
hg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.d([],[F.am])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.e(c,x)
r=c[x];++x
if(x>=s)return H.e(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.e(c,p)
o=c[p]
if(y<0||y>=s)return H.e(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.by(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.by(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cC:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b3(0,v,t)){v.az()
break}}}}},
cB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gho(x)
if(y)x.az()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cb())x=!1
return x},
ca:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c9())x=!1
return x},
b_:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].b_()},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
jb:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cC:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b3(0,v,t)){v.az()
break}}}}},
cB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.az()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
L:function(){return this.A("")}},
jc:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i5:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ce:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c6(this.cx,x,u,z,y,w,v,a,t)},
hq:function(){return this.ce(null)},
sY:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.W()}},
sdZ:function(a){var z
a=a.u(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.W()}},
seb:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
sdk:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.W()}},
hK:function(a){var z,y
z=J.O(a)
if(z.q(a,$.$get$aQ())){z=this.f
y=[P.p]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aP())){z=this.r
y=[P.p]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aO())){z=this.x
y=[P.p]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aR())){z=this.y
y=[P.p]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.q(a,$.$get$aS())){z=this.z
y=[P.p]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bJ())){z=this.Q
y=[P.p]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bK())){z=this.Q
y=[P.p]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$bm()))return H.d([this.ch],[P.p])
else if(z.q(a,$.$get$aN())){z=this.cx
y=[P.p]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.p])},
cb:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.ki(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
c9:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.kh(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y,x
z=H.d([],[P.i])
C.a.h(z,C.b.a9(J.a9(this.e),0))
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
L:function(){return this.A("")},
p:{
c6:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kg(z)
y.b=H.d([],[F.d7])
z.b=y
y=new F.kc(z)
x=[F.d_]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k9(z)
x=[F.am]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fb()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fc().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
ki:{"^":"o:8;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kh:{"^":"o:8;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k8:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
hi:function(a,b,c,d,e,f,g,h,i){var z=F.c6(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hh:function(a,b,c,d,e,f){return this.hi(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cb()
return!0},
ca:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c9()
return!0},
hn:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
this.v()
z=H.d([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
k9:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.ka(this,b))
C.a.K(this.d,new F.kb(this,b))},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
ka:{"^":"o:8;a,b",
$1:function(a){H.f(a,"$isam")
if(!J.P(a.a,this.a))this.b.$1(a)}},
kb:{"^":"o:8;a,b",
$1:function(a){var z
H.f(a,"$isam")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
kc:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
ke:{"^":"b;"},
kd:{"^":"ke;",
b3:function(a,b,c){return J.P(b.f,c.f)}},
kf:{"^":"b;"},
iD:{"^":"kf;",
b4:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)a[x].sdZ(z)
return}},
kg:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}}}],["","",,O,{"^":"",iq:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ae:[function(a){var z
H.f(a,"$ist")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ae(null)},"iq","$1","$0","geH",0,2,1],
fG:[function(a){H.f(a,"$ist")
this.a=null
this.ae(a)},function(){return this.fG(null)},"iU","$1","$0","gfF",0,2,1],
ix:[function(a,b){var z=V.av
z=new D.ci(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ae(z)},"$2","gf8",8,0,15],
iy:[function(a,b){var z=V.av
z=new D.cj(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ae(z)},"$2","gf9",8,0,15],
cV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a1(z.e.length+3,4)*4
x=C.e.a1(z.f.length+3,4)*4
w=C.e.a1(z.r.length+3,4)*4
v=C.e.a1(z.x.length+3,4)*4
u=C.e.a1(z.y.length+3,4)*4
t=C.e.a1(z.z.length+3,4)*4
s=C.e.a1(this.e.a.length+3,4)*4
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
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}return new A.it(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.eH],"$asc")},
al:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();){y=z.d
y.a=new V.X(0,0,0)
x=y.b
if(x!=null){w=x.am(0,b,y)
if(w!=null)y.a=w.aT(y.a)}}},
i7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cV()
y=a.fr.k(0,z.aA)
if(y==null){y=A.ip(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bo(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aO
z=b.e
if(!(z instanceof Z.dO)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.aq()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.ca()
t.a.ca()
t=t.e
if(!(t==null))t.aa(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hn()
s=s.e
if(!(s==null))s.aa(0)}q=b.d.hm(new Z.kj(a.a),v)
q.aP($.$get$aQ()).e=this.a.y.c
if(z)q.aP($.$get$aP()).e=this.a.Q.c
if(u)q.aP($.$get$aO()).e=this.a.z.c
if(w.rx)q.aP($.$get$aR()).e=this.a.ch.c
if(t)q.aP($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aP($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.eH
p=H.d([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hw()
if(w.fx){u=this.a
t=a.dx
t=t.gX(t)
u=u.db
u.toString
u.an(t.ac(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gX(t)
s=a.dx
s=t.j(0,s.gX(s))
a.cx=s
t=s}u=u.dx
u.toString
u.an(t.ac(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi3()
s=a.dx
s=t.j(0,s.gX(s))
a.ch=s
t=s}u=u.fr
u.toString
u.an(t.ac(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.an(t.ac(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.an(t.ac(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.an(C.t.ac(t,!0))}if(w.aN>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.f(s,"$isav")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bo(H.w(s.ac(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ag(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a7(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ag(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a7(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ag(u.aN,u.aO,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a7(u.aA,u.aO,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ag(u.dq,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a7(u.dr,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bs
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bu
t.a.uniform1f(t.d,r)
break
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ag(u.ds,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a7(u.dt,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dG
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cg
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.ee(i.gbp(i))
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gah(i)
g=h.c
r=f.gbE()
s=f.gbd()
f=f.gbm()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dH
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.aT(i.a)
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform1f(r.d,s)
s=i.e
r=h.f
r.a.uniform1f(r.d,s)
s=i.f
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dI
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cj
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gcw(i)
r=h.b
g=s.gei(s)
f=s.gej(s)
s=s.gel(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbp(i).j0()
f=h.c
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=l.aT(i.gcw(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gah(i)
r=h.e
g=s.gbE()
f=s.gbd()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.giZ()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giY()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdh()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdi()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gdj()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dJ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
r=this.a.ck
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gb9()
H.w(p,"$isc",s,"$asc")
if(!C.a.bn(p,r)){r.sb0(0,p.length)
C.a.h(p,r)}r=i.gbp(i)
g=h.d
f=r.gai(r)
e=r.gaj(r)
r=r.gak()
g.a.uniform3f(g.d,f,e,r)
r=i.gbF()
e=h.b
f=r.gai(r)
g=r.gaj(r)
r=r.gak()
e.a.uniform3f(e.d,f,g,r)
r=i.gb7(i)
g=h.c
f=r.gai(r)
e=r.gaj(r)
r=r.gak()
g.a.uniform3f(g.d,f,e,r)
r=l.ee(i.gbp(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gah(i)
f=h.f
e=g.gbE()
r=g.gbd()
g=g.gbm()
f.a.uniform3f(f.d,e,r,g)
g=i.gb9()
r=g.gb1(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb1(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
g=this.a.cl
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gb9()
H.w(p,"$isc",r,"$asc")
if(!C.a.bn(p,g)){g.sb0(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gX(i))
g=i.gX(i).aT(new V.X(0,0,0))
f=h.b
e=g.gei(g)
c=g.gej(g)
g=g.gel(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aT(new V.X(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dW(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.cl(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ac(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gah(i)
g=h.e
e=c.gbE()
f=c.gbd()
c=c.gbm()
g.a.uniform3f(g.d,e,f,c)
c=i.gb9()
g=c.gb1(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb1(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb0(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gdh()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gdi()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gdj()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cm
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb9()
H.w(p,"$isc",z,"$asc")
if(!C.a.bn(p,s)){s.sb0(0,p.length)
C.a.h(p,s)}s=i.gcw(i)
r=h.b
g=s.gei(s)
f=s.gej(s)
s=s.gel(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbp(i)
f=h.c
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=i.gbF()
r=h.d
g=s.gai(s)
f=s.gaj(s)
s=s.gak()
r.a.uniform3f(r.d,g,f,s)
s=i.gb7(i)
f=h.e
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=l.aT(i.gcw(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb9()
r=s.gb1(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb1(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gah(i)
r=h.y
g=s.gbE()
f=s.gbd()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.gj7()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj8()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdh()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdi()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gdj()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.du,z.bv,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.dv,z.bv,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gX(u).dW(0)
a.Q=u}z=z.fy
z.toString
z.an(u.ac(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dw,z.dz,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.dA,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dB,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.by
u.a.uniform1f(u.d,s)
break
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.dC,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.dD,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bB
z.a.uniform1f(z.d,t)
break
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ag(z.dE,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a7(z.dF,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bl(a)
z=b.e
z.bl(a)
z.aR(a)
z.ef(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ef(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hv()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cV().aA},
p:{
ei:function(){var z,y,x,w
z=new O.iq()
y=O.cQ(V.av)
z.e=y
y.bf(z.gf8(),z.gf9())
y=new O.b8(z,"emission")
y.c=C.c
y.f=new V.a4(0,0,0)
z.f=y
y=new O.b8(z,"ambient")
y.c=C.c
y.f=new V.a4(0,0,0)
z.r=y
y=new O.b8(z,"diffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.x=y
y=new O.b8(z,"invDiffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.y=y
y=new O.iv(z,"specular")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=100
z.z=y
y=new O.is(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b8(z,"reflect")
y.c=C.c
y.f=new V.a4(0,0,0)
z.cx=y
y=new O.iu(z,"refract")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=1
z.cy=y
y=new O.ir(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i2()
y.bK(D.a1)
y.e=H.d([],[D.hC])
y.f=H.d([],[D.cn])
y.r=H.d([],[D.ji])
y.x=H.d([],[D.jr])
y.y=H.d([],[D.js])
y.z=H.d([],[D.jt])
y.Q=null
y.ch=null
y.cJ(y.gf7(),y.gfs(),y.gfu())
z.dx=y
x=y.Q
if(x==null){x=D.Q()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.t]}
w=H.h(z.gfF(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.Q()
w.ch=y}x=H.h(z.geH(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ir:{"^":"d1;0f,a,b,0c,0d,0e"},d1:{"^":"b;",
bi:["ev",function(){}]},is:{"^":"d1;a,b,0c,0d,0e"},b8:{"^":"d1;0f,a,b,0c,0d,0e",
d6:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.ae(y)}},
bi:["bJ",function(){this.ev()
this.d6(new V.a4(1,1,1))}],
sah:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bi()
z=this.a
z.a=null
z.ae(null)}this.d6(b)}},iu:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fI:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.ae(z)}},
bi:function(){this.bJ()
this.fI(1)}},iv:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
c1:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.ae(z)}},
bi:function(){this.bJ()
this.c1(100)}},cs:{"^":"b;"}}],["","",,T,{"^":"",eH:{"^":"cL;"},jq:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",he:{"^":"b;",
b2:function(a,b){return!0},
i:function(a){return"all"},
$isc1:1},c1:{"^":"b;"},eh:{"^":"b;",
b2:["eu",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b2(0,b))return!0
return!1}],
i:["cL",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc1:1},bE:{"^":"eh;0a",
b2:function(a,b){return!this.eu(0,b)},
i:function(a){return"!["+this.cL(0)+"]"}},j8:{"^":"b;0a",
ez:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.m,P.ah])
for(y=new H.ef(a,a.gl(a),0,[H.az(a,"x",0)]);y.F();)z.m(0,y.d,!0)
this.a=z},
b2:function(a,b){return this.a.bo(0,b)},
i:function(a){var z=this.a
return P.c3(z.gas(z),0,null)},
$isc1:1,
p:{
a8:function(a){var z=new V.j8()
z.ez(a)
return z}}},eB:{"^":"b;a,b,0c,0d",
ghO:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eO(this.a.O(0,b))
w.a=H.d([],[V.c1])
w.c=!1
C.a.h(this.c,w)
return w},
hy:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b2(0,a))return w}return},
i:function(a){return this.b}},eL:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h3(this.b,"\n","\\n")
y=H.h3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eM:{"^":"b;a,b,0c",
i:function(a){return this.b}},jy:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eB(this,b)
z.c=H.d([],[V.eO])
this.a.m(0,b,z)}return z},
bb:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eM(this,a)
y=P.i
z.c=new H.aW(0,0,[y,y])
this.b.m(0,a,z)}return z},
ik:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eL])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.G(a,t)
r=y.hy(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c3(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghO(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c3(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eL(o==null?p.b:o,q,t)}++t}}}},eO:{"^":"eh;b,0c,0a",
i:function(a){return this.b.b+": "+this.cL(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$isaK:1},hR:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},iG:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
aU:[function(a){var z
H.f(a,"$ist")
z=this.f
if(!(z==null))z.E(a)},function(){return this.aU(null)},"ir","$1","$0","gcN",0,2,1],
saD:function(a){var z,y,x
if(!J.P(this.b,a)){z=this.b
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcN(),{func:1,ret:-1,args:[D.t]})
C.a.P(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcN(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.F("mover",x,this.b,this,[U.a6])
z.b=!0
this.aU(z)}},
$isaK:1,
$isdQ:1},eF:{"^":"b;"}}],["","",,V,{"^":"",
mY:function(a){P.jx(C.G,new V.mZ(a))},
mZ:{"^":"o:48;a",
$1:function(a){H.f(a,"$isbi")
P.dB(C.d.ed(this.a.ghC(),2)+" fps")}},
iT:{"^":"b;a,b,0c",
de:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f7().gcA().k(0,H.l(z))
if(y==null)if(d){c.$0()
this.dc(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dG(this.c).h(0,v)
t=W.hT("radio")
t.checked=x
t.name=z
z=W.ad
W.a2(t,"change",H.h(new V.iU(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dG(this.c).h(0,w.createElement("br"))},
aW:function(a,b,c){return this.de(a,b,c,!1)},
dc:function(a){var z,y,x,w,v
z=P.f7()
y=P.i
x=P.ia(z.gcA(),y,y)
x.m(0,this.a,a)
w=z.e8(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.ln([],[]).cF(""),"",v)}},
iU:{"^":"o:25;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dc(this.d)}}},
jd:{"^":"b;0a,0b",
eB:function(a,b){var z,y,x,w,v,u,t
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
t=W.ad
W.a2(z,"scroll",H.h(new V.jg(x),{func:1,ret:-1,args:[t]}),!1,t)},
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fL()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ik(C.a.hI(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.h2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cy(C.R,s,C.k,!1)
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
he:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isda").style
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
t=H.f(w.insertCell(-1),"$isda")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fL:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jy()
y=P.i
z.a=new H.aW(0,0,[y,V.eB])
z.b=new H.aW(0,0,[y,V.eM])
z.c=z.O(0,"Start")
y=z.O(0,"Start").C(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").C(0,"Bold")
x=new V.bE()
w=[V.c1]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").C(0,"Italic")
x=new V.bE()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").C(0,"Code")
x=new V.bE()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").C(0,"LinkHead")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").C(0,"LinkTail")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").C(0,"Other").a,new V.he())
x=z.O(0,"Other").C(0,"Other")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.bb("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.bb("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.bb("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.bb("Link")
x=z.O(0,"Other")
x.d=x.a.bb("Other")
this.b=z},
p:{
je:function(a,b){var z=new V.jd()
z.eB(a,!0)
return z}}},
jg:{"^":"o:25;a",
$1:function(a){P.eJ(C.q,new V.jf(this.a))}},
jf:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.d.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,U,{"^":"",
dr:function(a,b,c,d,e,f,g,h){var z,y,x,w,v,u,t,s
z=c>1?1:c
y=d>1?1:d
x=e>1?1:e
w=new V.a4(z,y,x)
v=U.cU(null)
v.h(0,U.bX(V.em(0,0,2)))
x=new U.ex()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sek(0)
x.se4(0,0)
x.se9(0)
z=x.d
if(!$.n.$2(z,f)){u=x.d
x.d=f
z=new D.F("deltaYaw",u,f,x,[P.p])
z.b=!0
x.I(z)}z=x.e
if(!$.n.$2(z,g)){u=x.e
x.e=g
z=new D.F("deltaPitch",u,g,x,[P.p])
z.b=!0
x.I(z)}z=x.f
if(!$.n.$2(z,h)){u=x.f
x.f=h
z=new D.F("deltaRoll",u,h,x,[P.p])
z.b=!0
x.I(z)}v.h(0,x)
t=E.cS(null,!0,null,"",null,null)
z=U.cU(null)
z.h(0,U.bX(V.cm(0.1,0.1,0.1,1)))
z.h(0,v)
t.saD(z)
t.sa4(0,F.h1(8,null,8))
z=O.ei()
z.f.sah(0,w)
t.sb8(z)
s=new D.cn()
s.c=new V.a4(1,1,1)
s.d=1
s.e=0
s.f=0
s.a=new V.X(0,0,0)
u=s.b
s.b=v
z=v.gw()
z.toString
y=H.h(s.geF(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=new D.F("mover",u,s.b,s,[U.a6])
z.b=!0
s.ad(z)
s.c=w
if(!w.q(0,w)){u=s.c
s.c=w
z=new D.F("color",u,w,s,[V.a4])
z.b=!0
s.ad(z)}z=s.d
if(!$.n.$2(z,1)){u=s.d
s.d=1
z=new D.F("attenuation0",u,1,s,[P.p])
z.b=!0
s.ad(z)}z=s.e
if(!$.n.$2(z,0.5)){u=s.e
s.e=0.5
z=new D.F("attenuation1",u,0.5,s,[P.p])
z.b=!0
s.ad(z)}z=s.f
if(!$.n.$2(z,0.15)){u=s.f
s.f=0.15
z=new D.F("attenuation2",u,0.15,s,[P.p])
z.b=!0
s.ad(z)}a.dx.h(0,s)
b.d.h(0,t)},
fY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.je("Test 021",!0)
y=W.dR(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.dg(H.d(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],x))
z.he(H.d(["shapes"],x))
z.dg(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jv(w,!0,!0,!0,!1)
u=E.cS(null,!0,null,"",null,null)
u.saD(U.bX(V.cm(1,1,1,1)))
u.sa4(0,F.h5(30,1,15,0.5))
t=E.cS(null,!0,null,"",null,null)
t.saD(U.bX(V.cm(3,3,3,1)))
z=F.du(1,null,null,1)
z.b_()
t.sa4(0,z)
s=U.cU(null)
z=v.r
r=new U.jZ()
q=U.cR()
q.scG(0,!0)
q.scr(6.283185307179586)
q.sct(0)
q.sY(0,0)
q.scs(100)
q.sS(0)
q.scf(0.5)
r.b=q
q=q.gw()
q.toString
p={func:1,ret:-1,args:[D.t]}
o=H.h(r.gaJ(),p)
C.a.h(q.a,o)
q=U.cR()
q.scG(0,!0)
q.scr(6.283185307179586)
q.sct(0)
q.sY(0,0)
q.scs(100)
q.sS(0)
q.scf(0.5)
r.c=q
C.a.h(q.gw().a,o)
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
n=new X.aC(!1,!1,!1)
m=r.d
r.d=n
q=[X.aC]
o=new D.F("modifiers",m,n,r,q)
o.b=!0
r.I(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.F("invertX",o,!1,r,[P.ah])
o.b=!0
r.I(o)}o=r.r
if(o!==!1){r.r=!1
o=new D.F("invertY",o,!1,r,[P.ah])
o.b=!0
r.I(o)}r.aX(z)
s.h(0,r)
z=v.r
r=new U.jY()
o=U.cR()
o.scG(0,!0)
o.scr(6.283185307179586)
o.sct(0)
o.sY(0,0)
o.scs(100)
o.sS(0)
o.scf(0.2)
r.b=o
o=o.gw()
o.toString
l=H.h(r.gaJ(),p)
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
n=new X.aC(!0,!1,!1)
m=r.c
r.c=n
o=new D.F("modifiers",m,n,r,q)
o.b=!0
r.I(o)
r.aX(z)
s.h(0,r)
z=v.r
r=new U.k_()
r.c=0.01
r.d=0
r.e=0
n=new X.aC(!1,!1,!1)
r.b=n
q=new D.F("modifiers",null,n,r,q)
q.b=!0
r.I(q)
r.aX(z)
s.h(0,r)
s.h(0,U.bX(V.em(0,0,5)))
k=O.ei()
z=k.r
z.sah(0,new V.a4(0.4,0.4,0.4))
z=k.x
z.sah(0,new V.a4(0.4,0.4,0.4))
z=k.z
z.sah(0,new V.a4(0.3,0.3,0.3))
z=k.z
if(z.c===C.c){z.c=C.i
z.bJ()
z.c1(100)
r=z.a
r.a=null
r.ae(null)}z.c1(100)
j=new M.hJ()
z=O.cQ(E.aJ)
j.d=z
z.bf(j.gfb(),j.gfc())
j.e=null
j.f=null
j.r=null
j.x=null
i=new X.iG()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.saD(null)
z=i.c
if(!$.n.$2(z,1.0471975511965976)){m=i.c
i.c=1.0471975511965976
z=new D.F("fov",m,1.0471975511965976,i,[P.p])
z.b=!0
i.aU(z)}z=i.d
if(!$.n.$2(z,0.1)){m=i.d
i.d=0.1
z=new D.F("near",m,0.1,i,[P.p])
z.b=!0
i.aU(z)}z=i.e
if(!$.n.$2(z,2000)){m=i.e
i.e=2000
z=new D.F("far",m,2000,i,[P.p])
z.b=!0
i.aU(z)}z=j.a
if(z!==i){if(z!=null){z=z.gw()
z.toString
r=H.h(j.gao(),p)
C.a.P(z.a,r)}m=j.a
j.a=i
z=i.gw()
z.toString
r=H.h(j.gao(),p)
C.a.h(z.a,r)
z=new D.F("camera",m,j.a,j,[X.dQ])
z.b=!0
j.aG(z)}h=new X.hR()
z=new V.b1(0,0,0,1)
h.a=z
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
z=V.ev(0,0,1,1)
h.r=z
z=j.b
if(z!==h){if(z!=null){z=z.gw()
z.toString
r=H.h(j.gao(),p)
C.a.P(z.a,r)}m=j.b
j.b=h
z=h.gw()
z.toString
r=H.h(j.gao(),p)
C.a.h(z.a,r)
z=new D.F("target",m,j.b,j,[X.eF])
z.b=!0
j.aG(z)}j.sb8(null)
j.sb8(k)
j.d.h(0,t)
j.d.h(0,u)
j.a.saD(s)
z=v.d
if(z!==j){if(z!=null){z=z.gw()
z.toString
r=H.h(v.gcM(),p)
C.a.P(z.a,r)}v.d=j
z=j.gw()
z.toString
p=H.h(v.gcM(),p)
C.a.h(z.a,p)
v.eD()}U.dr(k,j,1,0,0,0.3,0,0)
U.dr(k,j,0,1,0,0,0.4,0)
U.dr(k,j,0,0,1,0.5,0.5,0)
z=new V.iT("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.aW(0,"Cube",new U.mM(u))
z.aW(0,"Cylinder",new U.mN(u))
z.aW(0,"Cone",new U.mO(u))
z.aW(0,"Sphere",new U.mP(u))
z.de(0,"Toroid",new U.mQ(u),!0)
z.aW(0,"Knot",new U.mR(u))
V.mY(v)},
mM:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.du(1,null,null,1))}},
mN:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.fO(1,!0,!0,1,40,1))}},
mO:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.fO(1,!0,!1,1,40,0))}},
mP:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.h1(6,null,6))}},
mQ:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.h5(30,1,15,0.5))}},
mR:{"^":"o:0;a",
$0:function(){this.a.sa4(0,F.mJ(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e9.prototype
return J.hY.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cD(a)}
J.aG=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cD(a)}
J.c8=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cD(a)}
J.mz=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.mA=function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.dx=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cD(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).q(a,b)}
J.h6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mz(a).M(a,b)}
J.dD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mA(a).j(a,b)}
J.dE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).k(a,b)}
J.cI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fV(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c8(a).m(a,b,c)}
J.h7=function(a,b){return J.dx(a).G(a,b)}
J.h8=function(a,b,c){return J.aY(a).fD(a,b,c)}
J.h9=function(a,b,c,d){return J.aY(a).df(a,b,c,d)}
J.ha=function(a,b){return J.dx(a).V(a,b)}
J.cJ=function(a,b,c){return J.aG(a).hp(a,b,c)}
J.cK=function(a,b){return J.c8(a).H(a,b)}
J.hb=function(a,b,c,d){return J.c8(a).aB(a,b,c,d)}
J.dF=function(a,b){return J.c8(a).K(a,b)}
J.dG=function(a){return J.aY(a).gcc(a)}
J.bV=function(a){return J.O(a).gT(a)}
J.bv=function(a){return J.c8(a).gZ(a)}
J.at=function(a){return J.aG(a).gl(a)}
J.hc=function(a,b){return J.aY(a).i8(a,b)}
J.hd=function(a,b){return J.aY(a).sa_(a,b)}
J.a9=function(a){return J.O(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cP.prototype
C.H=J.u.prototype
C.a=J.b7.prototype
C.e=J.e9.prototype
C.t=J.ea.prototype
C.d=J.bZ.prototype
C.b=J.c_.prototype
C.O=J.c0.prototype
C.U=H.d6.prototype
C.V=W.iC.prototype
C.z=J.iH.prototype
C.r=J.c5.prototype
C.A=W.bL.prototype
C.B=W.km.prototype
C.D=new P.hj(!1)
C.C=new P.hi(C.D)
C.E=new P.iF()
C.F=new P.k7()
C.j=new P.l9()
C.c=new A.ce(0,"ColorSourceType.None")
C.i=new A.ce(1,"ColorSourceType.Solid")
C.f=new A.ce(2,"ColorSourceType.Texture2D")
C.h=new A.ce(3,"ColorSourceType.TextureCube")
C.q=new P.b4(0)
C.G=new P.b4(5e6)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.w=H.d(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Q=H.d(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.R=H.d(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.d(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.d(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.d(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.P=H.d(I.aj([]),[P.i])
C.T=new H.hv(0,{},C.P,[P.i,P.i])
C.k=new P.k0(!1)
$.aA=0
$.bw=null
$.dL=null
$.dn=!1
$.fT=null
$.fK=null
$.h0=null
$.cC=null
$.cF=null
$.dy=null
$.bp=null
$.bQ=null
$.bR=null
$.dp=!1
$.T=C.j
$.e0=null
$.e_=null
$.dZ=null
$.dY=null
$.n=V.iw()
$.er=null
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
I.$lazy(y,x,w)}})(["dX","$get$dX",function(){return H.fS("_$dart_dartClosure")},"cX","$get$cX",function(){return H.fS("_$dart_js")},"eP","$get$eP",function(){return H.aD(H.ct({
toString:function(){return"$receiver$"}}))},"eQ","$get$eQ",function(){return H.aD(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"eR","$get$eR",function(){return H.aD(H.ct(null))},"eS","$get$eS",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aD(H.ct(void 0))},"eX","$get$eX",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aD(H.eV(null))},"eT","$get$eT",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aD(H.eV(void 0))},"eY","$get$eY",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.kn()},"bS","$get$bS",function(){return[]},"fa","$get$fa",function(){return P.k4()},"fg","$get$fg",function(){return H.iA(H.bo(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fA","$get$fA",function(){return P.iZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fG","$get$fG",function(){return P.m8()},"dV","$get$dV",function(){return{}},"fd","$get$fd",function(){return Z.aq(0)},"fb","$get$fb",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bJ","$get$bJ",function(){return Z.aq(32)},"bK","$get$bK",function(){return Z.aq(64)},"fc","$get$fc",function(){return Z.aq(96)},"bm","$get$bm",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.H,args:[F.am]},{func:1,ret:P.H,args:[F.af,P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.k,E.aJ]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.H,args:[D.t]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,V.av]]},{func:1,ret:V.X,args:[P.p]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[P.m,[P.k,U.a6]]},{func:1,args:[,]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.m,[P.k,D.a1]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.H,args:[W.ad]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:W.a0,args:[W.K]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[W.K]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.H,args:[P.a_]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.ah,args:[P.p,P.p]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.ah,args:[[P.k,D.a1]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.H,args:[P.bi]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,args:[P.i]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.n1(d||a)
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
Isolate.aj=a.aj
Isolate.dv=a.dv
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
if(typeof dartMainRunner==="function")dartMainRunner(U.fY,[])
else U.fY([])})})()
//# sourceMappingURL=test.dart.js.map
