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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.di(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dj=function(){}
var dart=[["","",,H,{"^":"",m2:{"^":"a;a"}}],["","",,J,{"^":"",
R:function(a){return void 0},
dr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dm==null){H.lc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.eI("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cS()]
if(v!=null)return v
v=H.lh(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$cS(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
r:{"^":"a;",
w:function(a,b){return a===b},
gX:function(a){return H.bN(a)},
j:["ev",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"r;",
j:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isab:1},
dU:{"^":"r;",
w:function(a,b){return null==b},
j:function(a){return"null"},
gX:function(a){return 0},
$isM:1},
cT:{"^":"r;",
gX:function(a){return 0},
j:["ew",function(a){return String(a)}]},
i1:{"^":"cT;"},
cu:{"^":"cT;"},
c7:{"^":"cT;",
j:function(a){var z=a[$.$get$dI()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.k(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscP:1},
be:{"^":"r;$ti",
h:function(a,b){H.E(b,H.z(a,0))
if(!!a.fixed$length)H.m(P.G("add"))
a.push(b)},
i7:function(a,b){if(!!a.fixed$length)H.m(P.G("removeAt"))
if(b<0||b>=a.length)throw H.b(P.c9(b,null,null))
return a.splice(b,1)[0]},
E:function(a,b){var z
if(!!a.fixed$length)H.m(P.G("remove"))
for(z=0;z<a.length;++z)if(J.D(a[z],b)){a.splice(z,1)
return!0}return!1},
ca:function(a,b){var z,y
H.t(b,"$isi",[H.z(a,0)],"$asi")
if(!!a.fixed$length)H.m(P.G("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.bD(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
hL:function(a){return this.D(a,"")},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bL:function(a,b,c){var z=a.length
if(b>z)throw H.b(P.as(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.as(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcw:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.ho())},
b_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.D(a[z],b))return!0
return!1},
j:function(a){return P.cQ(a,"[","]")},
gY:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gX:function(a){return H.bN(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.m(P.G("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.ch(b,"newLength",null))
if(b<0)throw H.b(P.as(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aQ(a,b))
if(b>=a.length||b<0)throw H.b(H.aQ(a,b))
return a[b]},
m:function(a,b,c){H.B(b)
H.E(c,H.z(a,0))
if(!!a.immutable$list)H.m(P.G("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aQ(a,b))
if(b>=a.length||b<0)throw H.b(H.aQ(a,b))
a[b]=c},
$isi:1,
$isd:1,
q:{
hp:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.ch(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.as(a,0,4294967295,"length",null))
return J.dS(new Array(a),b)},
dS:function(a,b){return J.bG(H.c(a,[b]))},
bG:function(a){H.cf(a)
a.fixed$length=Array
return a},
m0:[function(a,b){return J.fz(H.fo(a,"$isai"),H.fo(b,"$isai"))},"$2","kQ",8,0,42]}},
m1:{"^":"be;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c6:{"^":"r;",
ai:function(a,b){var z
H.fn(b)
if(typeof b!=="number")throw H.b(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbH(b)
if(this.gbH(a)===z)return 0
if(this.gbH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbH:function(a){return a===0?1/a<0:a<0},
e3:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.G(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.G(""+a+".round()"))},
ht:function(a,b,c){if(C.f.ai(b,c)>0)throw H.b(H.ay(b))
if(this.ai(a,b)<0)return b
if(this.ai(a,c)>0)return c
return a},
il:function(a,b){var z
if(b>20)throw H.b(P.as(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbH(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.b(H.ay(b))
return a*b},
er:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
a3:function(a,b){return(a|0)===a?a/b|0:this.fT(a,b)},
fT:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.G("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bn:function(a,b){var z
if(a>0)z=this.fR(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fR:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.b(H.ay(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.b(H.ay(b))
return a>b},
$isai:1,
$asai:function(){return[P.a_]},
$isw:1,
$isa_:1},
dT:{"^":"c6;",$isA:1},
hr:{"^":"c6;"},
cp:{"^":"r;",
cl:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aQ(a,b))
if(b<0)throw H.b(H.aQ(a,b))
if(b>=a.length)H.m(H.aQ(a,b))
return a.charCodeAt(b)},
bi:function(a,b){if(b>=a.length)throw H.b(H.aQ(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.V(b)
if(typeof b!=="string")throw H.b(P.ch(b,null,null))
return a+b},
bM:function(a,b,c){H.B(c)
if(c==null)c=a.length
if(b<0)throw H.b(P.c9(b,null,null))
if(b>c)throw H.b(P.c9(b,null,null))
if(c>a.length)throw H.b(P.c9(c,null,null))
return a.substring(b,c)},
cW:function(a,b){return this.bM(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.w)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hY:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ae:function(a,b){return this.hY(a,b," ")},
hw:function(a,b,c){if(c>a.length)throw H.b(P.as(c,0,a.length,null,null))
return H.fs(a,b,c)},
ai:function(a,b){var z
H.V(b)
if(typeof b!=="string")throw H.b(H.ay(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isai:1,
$asai:function(){return[P.o]},
$ise6:1,
$iso:1}}],["","",,H,{"^":"",
ho:function(){return new P.iG("No element")},
iE:function(a,b,c){var z
H.t(a,"$isd",[c],"$asd")
H.l(b,{func:1,ret:P.A,args:[c,c]})
z=J.ba(a)
if(typeof z!=="number")return z.G()
H.ca(a,0,z-1,b,c)},
ca:function(a,b,c,d,e){H.t(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.A,args:[e,e]})
if(c-b<=32)H.iD(a,b,c,d,e)
else H.iC(a,b,c,d,e)},
iD:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.A,args:[e,e]})
for(z=b+1,y=J.bz(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aJ(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.m(a,w,y.i(a,v))
w=v}y.m(a,w,x)}},
iC:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isd",[a2],"$asd")
H.l(a1,{func:1,ret:P.A,args:[a2,a2]})
z=C.f.a3(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.a3(b+a0,2)
v=w-z
u=w+z
t=J.bz(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aJ(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aJ(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aJ(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aJ(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aJ(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aJ(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aJ(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aJ(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aJ(a1.$2(p,o),0)){n=o
o=p
p=n}t.m(a,y,s)
t.m(a,w,q)
t.m(a,x,o)
t.m(a,v,t.i(a,b))
t.m(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.D(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a0()
if(i<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aG()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
l=h
m=g
break}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.a0()
if(e<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aG()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aG()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.m(a,b,t.i(a,c))
t.m(a,c,r)
c=l+1
t.m(a,a0,t.i(a,c))
t.m(a,c,p)
H.ca(a,b,m-2,a1,a2)
H.ca(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.D(a1.$2(t.i(a,m),r),0);)++m
for(;J.D(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}H.ca(a,m,l,a1,a2)}else H.ca(a,m,l,a1,a2)},
a6:{"^":"j9;a",
gl:function(a){return this.a.length},
i:function(a,b){return C.i.cl(this.a,b)},
$asd9:function(){return[P.A]},
$asv:function(){return[P.A]},
$asi:function(){return[P.A]},
$asd:function(){return[P.A]}},
h1:{"^":"i;"},
dZ:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.bz(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.bD(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
hI:{"^":"i;a,b,$ti",
gY:function(a){return new H.hJ(J.c0(this.a),this.b,this.$ti)},
gl:function(a){return J.ba(this.a)},
H:function(a,b){return this.b.$1(J.cG(this.a,b))},
$asi:function(a,b){return[b]}},
hJ:{"^":"cR;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascR:function(a,b){return[b]}},
js:{"^":"i;a,b,$ti",
gY:function(a){return new H.jt(J.c0(this.a),this.b,this.$ti)}},
jt:{"^":"cR;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cm:{"^":"a;$ti"},
d9:{"^":"a;$ti",
m:function(a,b,c){H.B(b)
H.E(c,H.aI(this,"d9",0))
throw H.b(P.G("Cannot modify an unmodifiable list"))}},
j9:{"^":"cq+d9;"}}],["","",,H,{"^":"",
l7:function(a){return init.types[H.B(a)]},
lf:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.R(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.b(H.ay(a))
return z},
bN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.R(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.R(a).$iscu){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bi(w,0)===36)w=C.i.cW(w,1)
r=H.dn(H.cf(H.b7(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e8:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ic:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.b(H.ay(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bn(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.b(H.ay(w))}return H.e8(z)},
e9:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(H.ay(x))
if(x<0)throw H.b(H.ay(x))
if(x>65535)return H.ic(a)}return H.e8(a)},
ib:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bn(z,10))>>>0,56320|z&1023)}throw H.b(P.as(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ia:function(a){return a.b?H.ah(a).getUTCFullYear()+0:H.ah(a).getFullYear()+0},
i8:function(a){return a.b?H.ah(a).getUTCMonth()+1:H.ah(a).getMonth()+1},
i4:function(a){return a.b?H.ah(a).getUTCDate()+0:H.ah(a).getDate()+0},
i5:function(a){return a.b?H.ah(a).getUTCHours()+0:H.ah(a).getHours()+0},
i7:function(a){return a.b?H.ah(a).getUTCMinutes()+0:H.ah(a).getMinutes()+0},
i9:function(a){return a.b?H.ah(a).getUTCSeconds()+0:H.ah(a).getSeconds()+0},
i6:function(a){return a.b?H.ah(a).getUTCMilliseconds()+0:H.ah(a).getMilliseconds()+0},
p:function(a){throw H.b(H.ay(a))},
e:function(a,b){if(a==null)J.ba(a)
throw H.b(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b0(!0,b,"index",null)
z=H.B(J.ba(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.c9(b,"index",null)},
l1:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.b0(!0,b,"end",null)},
ay:function(a){return new P.b0(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.e5()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fu})
z.name=""}else z.toString=H.fu
return z},
fu:function(){return J.af(this.dartException)},
m:function(a){throw H.b(a)},
y:function(a){throw H.b(P.bD(a))},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bn(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cU(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e4(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$er()
u=$.$get$es()
t=$.$get$et()
s=$.$get$eu()
r=$.$get$ey()
q=$.$get$ez()
p=$.$get$ew()
$.$get$ev()
o=$.$get$eB()
n=$.$get$eA()
m=v.ad(y)
if(m!=null)return z.$1(H.cU(H.V(y),m))
else{m=u.ad(y)
if(m!=null){m.method="call"
return z.$1(H.cU(H.V(y),m))}else{m=t.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=r.ad(y)
if(m==null){m=q.ad(y)
if(m==null){m=p.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=o.ad(y)
if(m==null){m=n.ad(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e4(H.V(y),m))}}return z.$1(new H.j8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ee()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b0(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ee()
return a},
bA:function(a){var z
if(a==null)return new H.f_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f_(a)},
l5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
le:function(a,b,c,d,e,f){H.f(a,"$iscP")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.j("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.le)
a.$identity=z
return z},
fN:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.R(d).$isd){z.$reflectionInfo=d
x=H.ig(z).r}else x=d
w=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.cI(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aK
if(typeof u!=="number")return u.C()
$.aK=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dD(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l7,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dw:H.cJ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dD(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fK:function(a,b,c,d){var z=H.cJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dD:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fM(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fK(y,!w,z,b)
if(y===0){w=$.aK
if(typeof w!=="number")return w.C()
$.aK=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.ci("self")
$.bC=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aK
if(typeof w!=="number")return w.C()
$.aK=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.ci("self")
$.bC=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fL:function(a,b,c,d){var z,y
z=H.cJ
y=H.dw
switch(b?-1:a){case 0:throw H.b(H.iq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fM:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.ci("self")
$.bC=z}y=$.dv
if(y==null){y=H.ci("receiver")
$.dv=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fL(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aK
if(typeof y!=="number")return y.C()
$.aK=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aK
if(typeof y!=="number")return y.C()
$.aK=y+1
return new Function(z+y+"}")()},
di:function(a,b,c,d,e,f,g){var z,y
z=J.bG(H.cf(b))
H.B(c)
y=!!J.R(d).$isd?J.bG(d):d
return H.fN(a,z,c,y,!!e,f,g)},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.aE(a,"String"))},
l3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aE(a,"double"))},
fn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aE(a,"num"))},
fc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.aE(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.aE(a,"int"))},
ds:function(a,b){throw H.b(H.aE(a,H.V(b).substring(3)))},
ll:function(a,b){var z=J.bz(b)
throw H.b(H.fJ(a,z.bM(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.ds(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else z=!0
if(z)return a
H.ll(a,b)},
fo:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.R(a)[b])return a
H.ds(a,b)},
cf:function(a){if(a==null)return a
if(!!J.R(a).$isd)return a
throw H.b(H.aE(a,"List"))},
lg:function(a,b){if(a==null)return a
if(!!J.R(a).$isd)return a
if(J.R(a)[b])return a
H.ds(a,b)},
ff:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
ce:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ff(J.R(a))
if(z==null)return!1
y=H.fj(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.de)return a
$.de=!0
try{if(H.ce(a,b))return a
z=H.cg(b)
y=H.aE(a,z)
throw H.b(y)}finally{$.de=!1}},
dk:function(a,b){if(a!=null&&!H.dh(a,b))H.m(H.aE(a,H.cg(b)))
return a},
f7:function(a){var z
if(a instanceof H.q){z=H.ff(J.R(a))
if(z!=null)return H.cg(z)
return"Closure"}return H.bl(a)},
lA:function(a){throw H.b(new P.fT(H.V(a)))},
fh:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b7:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.bB(a["$as"+H.k(c)],H.b7(b))},
c_:function(a,b,c,d){var z
H.V(c)
H.B(d)
z=H.bB(a["$as"+H.k(c)],H.b7(b))
return z==null?null:z[d]},
aI:function(a,b,c){var z
H.V(b)
H.B(c)
z=H.bB(a["$as"+H.k(b)],H.b7(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.B(b)
z=H.b7(a)
return z==null?null:z[b]},
cg:function(a){var z=H.b8(a,null)
return z},
b8:function(a,b){var z,y
H.t(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dn(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.kP(a,b)
if('futureOr' in a)return"FutureOr<"+H.b8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.t(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b8(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b8(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b8(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b8(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.V(z[l])
n=n+m+H.b8(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dn:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.cb("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b8(u,c)}v="<"+z.j(0)+">"
return v},
bB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bX:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b7(a)
y=J.R(a)
if(y[b]==null)return!1
return H.fa(H.bB(y[d],z),null,c,null)},
t:function(a,b,c,d){var z,y
H.V(b)
H.cf(c)
H.V(d)
if(a==null)return a
z=H.bX(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dn(c,0,null)
throw H.b(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fa:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.az(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.az(a[y],b,c[y],d))return!1
return!0},
mM:function(a,b,c){return a.apply(b,H.bB(J.R(b)["$as"+H.k(c)],H.b7(b)))},
fk:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="M"||a===-1||a===-2||H.fk(z)}return!1},
dh:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="M"||b===-1||b===-2||H.fk(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dh(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}y=J.R(a).constructor
x=H.b7(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.az(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dh(a,b))throw H.b(H.aE(a,H.cg(b)))
return a},
az:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.az(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="M")return!0
if('func' in c)return H.fj(a,b,c,d)
if('func' in a)return c.builtin$cls==="cP"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.az("type" in a?a.type:null,b,x,d)
else if(H.az(a,b,x,d))return!0
else{if(!('$is'+"bF" in y.prototype))return!1
w=y.prototype["$as"+"bF"]
v=H.bB(w,z?a.slice(1):null)
return H.az(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cg(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fa(H.bB(r,z),b,u,d)},
fj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.az(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.az(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.az(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.az(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lj(m,b,l,d)},
lj:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.az(c[w],d,a[w],b))return!1}return!0},
mN:function(a,b,c){Object.defineProperty(a,H.V(b),{value:c,enumerable:false,writable:true,configurable:true})},
lh:function(a){var z,y,x,w,v,u
z=H.V($.fi.$1(a))
y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.V($.f9.$2(a,z))
if(z!=null){y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cD(x)
$.cA[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cC[z]=x
return x}if(v==="-"){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fp(a,x)
if(v==="*")throw H.b(P.eI(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fp(a,x)},
fp:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dr(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dr(a,!1,null,!!a.$isF)},
li:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dr(z,c,null,null)},
lc:function(){if(!0===$.dm)return
$.dm=!0
H.ld()},
ld:function(){var z,y,x,w,v,u,t,s
$.cA=Object.create(null)
$.cC=Object.create(null)
H.l8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fr.$1(v)
if(u!=null){t=H.li(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l8:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.bx(C.z,H.bx(C.E,H.bx(C.p,H.bx(C.p,H.bx(C.D,H.bx(C.A,H.bx(C.B(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fi=new H.l9(v)
$.f9=new H.la(u)
$.fr=new H.lb(t)},
bx:function(a,b){return a(b)||b},
fs:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ft:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ie:{"^":"a;a,b,c,d,e,f,r,0x",q:{
ig:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bG(z)
y=z[0]
x=z[1]
return new H.ie(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iX:{"^":"a;a,b,c,d,e,f",
ad:function(a){var z,y,x
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
aO:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ex:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"a4;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e4:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hu:{"^":"a4;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
cU:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hu(a,y,z?null:b.receiver)}}},
j8:{"^":"a4;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lB:{"^":"q:14;a",
$1:function(a){if(!!J.R(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f_:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
q:{"^":"a;",
j:function(a){return"Closure '"+H.bl(this).trim()+"'"},
gep:function(){return this},
$iscP:1,
gep:function(){return this}},
ej:{"^":"q;"},
iH:{"^":"ej;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cI:{"^":"ej;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bN(this.a)
else y=typeof z!=="object"?J.b9(z):H.bN(z)
return(y^H.bN(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
q:{
cJ:function(a){return a.a},
dw:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cI("self","target","receiver","name")
y=J.bG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iY:{"^":"a4;a",
j:function(a){return this.a},
q:{
aE:function(a,b){return new H.iY("TypeError: "+H.k(P.cl(a))+": type '"+H.f7(a)+"' is not a subtype of type '"+b+"'")}}},
fI:{"^":"a4;a",
j:function(a){return this.a},
q:{
fJ:function(a,b){return new H.fI("CastError: "+H.k(P.cl(a))+": type '"+H.f7(a)+"' is not a subtype of type '"+b+"'")}}},
ip:{"^":"a4;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
iq:function(a){return new H.ip(a)}}},
b2:{"^":"hG;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaC:function(a){return new H.dY(this,[H.z(this,0)])},
dF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dd(y,b)}else return this.hJ(b)},
hJ:function(a){var z=this.d
if(z==null)return!1
return this.cv(this.bT(z,J.b9(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bj(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bj(w,b)
x=y==null?null:y.b
return x}else return this.hK(b)},
hK:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bT(z,J.b9(a)&0x3ffffff)
x=this.cv(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bY()
this.b=z}this.d4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bY()
this.c=y}this.d4(y,b,c)}else{x=this.d
if(x==null){x=this.bY()
this.d=x}w=J.b9(b)&0x3ffffff
v=this.bT(x,w)
if(v==null)this.c5(x,w,[this.bZ(b,c)])
else{u=this.cv(v,b)
if(u>=0)v[u].b=c
else v.push(this.bZ(b,c))}}},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.bD(this))
z=z.c}},
d4:function(a,b,c){var z
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
z=this.bj(a,b)
if(z==null)this.c5(a,b,this.bZ(b,c))
else z.b=c},
f1:function(){this.r=this.r+1&67108863},
bZ:function(a,b){var z,y
z=new H.hy(H.E(a,H.z(this,0)),H.E(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f1()
return z},
cv:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].a,b))return y
return-1},
j:function(a){return P.e0(this)},
bj:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eV:function(a,b){delete a[b]},
dd:function(a,b){return this.bj(a,b)!=null},
bY:function(){var z=Object.create(null)
this.c5(z,"<non-identifier-key>",z)
this.eV(z,"<non-identifier-key>")
return z},
$isdX:1},
hy:{"^":"a;a,b,0c,0d"},
dY:{"^":"h1;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.hz(z,z.r,this.$ti)
y.c=z.e
return y}},
hz:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.bD(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l9:{"^":"q:14;a",
$1:function(a){return this.a(a)}},
la:{"^":"q:23;a",
$2:function(a,b){return this.a(a,b)}},
lb:{"^":"q:25;a",
$1:function(a){return this.a(H.V(a))}},
hs:{"^":"a;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$ise6:1,
q:{
ht:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.hb("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l4:function(a){return J.dS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){return a},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aQ(b,a))},
kO:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.b(H.l1(a,b,c))
return b},
hW:{"^":"r;","%":"DataView;ArrayBufferView;cZ|eU|eV|hV|eW|eX|b3"},
cZ:{"^":"hW;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dj},
hV:{"^":"eV;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
m:function(a,b,c){H.B(b)
H.l3(c)
H.aP(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.w]},
$asv:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
b3:{"^":"eX;",
m:function(a,b,c){H.B(b)
H.B(c)
H.aP(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.A]},
$asv:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
ma:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mb:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mc:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
md:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
me:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mf:{"^":"b3;",
gl:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hX:{"^":"b3;",
gl:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
bL:function(a,b,c){return new Uint8Array(a.subarray(b,H.kO(b,c,a.length)))},
"%":";Uint8Array"},
eU:{"^":"cZ+v;"},
eV:{"^":"eU+cm;"},
eW:{"^":"cZ+v;"},
eX:{"^":"eW+cm;"}}],["","",,P,{"^":"",
jv:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bY(new P.jx(z),1)).observe(y,{childList:true})
return new P.jw(z,y,x)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
mB:[function(a){self.scheduleImmediate(H.bY(new P.jy(H.l(a,{func:1,ret:-1})),0))},"$1","kX",4,0,10],
mC:[function(a){self.setImmediate(H.bY(new P.jz(H.l(a,{func:1,ret:-1})),0))},"$1","kY",4,0,10],
mD:[function(a){P.d4(C.l,H.l(a,{func:1,ret:-1}))},"$1","kZ",4,0,10],
d4:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a3(a.a,1000)
return P.kv(z<0?0:z,b)},
kT:function(a,b){if(H.ce(a,{func:1,args:[P.a,P.aD]}))return b.i6(a,null,P.a,P.aD)
if(H.ce(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.ch(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var z,y
for(;z=$.bw,z!=null;){$.bV=null
y=z.b
$.bw=y
if(y==null)$.bU=null
z.a.$0()}},
mL:[function(){$.df=!0
try{P.kS()}finally{$.bV=null
$.df=!1
if($.bw!=null)$.$get$db().$1(P.fb())}},"$0","fb",0,0,4],
f6:function(a){var z=new P.eP(H.l(a,{func:1,ret:-1}))
if($.bw==null){$.bU=z
$.bw=z
if(!$.df)$.$get$db().$1(P.fb())}else{$.bU.b=z
$.bU=z}},
kW:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bw
if(z==null){P.f6(a)
$.bV=$.bU
return}y=new P.eP(a)
x=$.bV
if(x==null){y.b=z
$.bV=y
$.bw=y}else{y.b=x.b
x.b=y
$.bV=y
if(y.b==null)$.bU=y}},
lm:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.X
if(C.j===y){P.cz(null,null,C.j,a)
return}y.toString
P.cz(null,null,y,H.l(y.cg(a),z))},
em:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.X
if(y===C.j){y.toString
return P.d4(a,b)}return P.d4(a,H.l(y.cg(b),z))},
cy:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kU(z,e))},
f4:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.X
if(y===c)return d.$0()
$.X=c
z=y
try{y=d.$0()
return y}finally{$.X=z}},
f5:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.X
if(y===c)return d.$1(e)
$.X=c
z=y
try{y=d.$1(e)
return y}finally{$.X=z}},
kV:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.X
if(y===c)return d.$2(e,f)
$.X=c
z=y
try{y=d.$2(e,f)
return y}finally{$.X=z}},
cz:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cg(d):c.hr(d,-1)
P.f6(d)},
jx:{"^":"q:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jw:{"^":"q:35;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jy:{"^":"q:3;a",
$0:function(){this.a.$0()}},
jz:{"^":"q:3;a",
$0:function(){this.a.$0()}},
ku:{"^":"a;a,0b,c",
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bY(new P.kw(this,b),0),a)
else throw H.b(P.G("`setTimeout()` not found."))},
q:{
kv:function(a,b){var z=new P.ku(!0,0)
z.eI(a,b)
return z}}},
kw:{"^":"q:4;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
bv:{"^":"a;0a,b,c,d,e,$ti",
hO:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.l(this.d,{func:1,ret:P.ab,args:[P.a]}),a.a,P.ab,P.a)},
hI:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.a,P.aD]}))return H.dk(w.ig(z,a.a,a.b,null,y,P.aD),x)
else return H.dk(w.cH(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aY:{"^":"a;ds:a<,b,0fI:c<,$ti",
ek:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.X
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kT(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aY(0,$.X,[c])
w=b==null?1:3
this.d5(new P.bv(x,w,a,b,[z,c]))
return x},
ij:function(a,b){return this.ek(a,null,b)},
d5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbv")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaY")
z=y.a
if(z<4){y.d5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cz(null,null,z,H.l(new P.jN(this,a),{func:1,ret:-1}))}},
dk:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbv")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaY")
y=u.a
if(y<4){u.dk(a)
return}this.a=y
this.c=u.c}z.a=this.bm(a)
y=this.b
y.toString
P.cz(null,null,y,H.l(new P.jS(z,this),{func:1,ret:-1}))}},
c0:function(){var z=H.f(this.c,"$isbv")
this.c=null
return this.bm(z)},
bm:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d9:function(a){var z,y,x,w
z=H.z(this,0)
H.dk(a,{futureOr:1,type:z})
y=this.$ti
x=H.bX(a,"$isbF",y,"$asbF")
if(x){z=H.bX(a,"$isaY",y,null)
if(z)P.eR(a,this)
else P.jO(a,this)}else{w=this.c0()
H.E(a,z)
this.a=4
this.c=a
P.bR(this,w)}},
bP:[function(a,b){var z
H.f(b,"$isaD")
z=this.c0()
this.a=8
this.c=new P.an(a,b)
P.bR(this,z)},function(a){return this.bP(a,null)},"ir","$2","$1","geR",4,2,44],
$isbF:1,
q:{
jO:function(a,b){var z,y,x
b.a=1
try{a.ek(new P.jP(b),new P.jQ(b),null)}catch(x){z=H.b_(x)
y=H.bA(x)
P.lm(new P.jR(b,z,y))}},
eR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaY")
if(z>=4){y=b.c0()
b.a=a.a
b.c=a.c
P.bR(b,y)}else{y=H.f(b.c,"$isbv")
b.a=2
b.c=a
a.dk(y)}},
bR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cy(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bR(z.a,b)}y=z.a
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
if(p){H.f(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cy(null,null,y,u,t)
return}o=$.X
if(o==null?q!=null:o!==q)$.X=q
else o=null
y=b.c
if(y===8)new P.jV(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jU(x,b,r).$0()}else if((y&2)!==0)new P.jT(z,x,b).$0()
if(o!=null)$.X=o
y=x.b
if(!!J.R(y).$isbF){if(y.a>=4){n=H.f(t.c,"$isbv")
t.c=null
b=t.bm(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eR(y,t)
return}}m=b.b
n=H.f(m.c,"$isbv")
m.c=null
b=m.bm(n)
y=x.a
u=x.b
if(!y){H.E(u,H.z(m,0))
m.a=4
m.c=u}else{H.f(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
jN:{"^":"q:3;a,b",
$0:function(){P.bR(this.a,this.b)}},
jS:{"^":"q:3;a,b",
$0:function(){P.bR(this.b,this.a.a)}},
jP:{"^":"q:15;a",
$1:function(a){var z=this.a
z.a=0
z.d9(a)}},
jQ:{"^":"q:26;a",
$2:function(a,b){this.a.bP(a,H.f(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"q:3;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
jV:{"^":"q:4;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ej(H.l(w.d,{func:1}),null)}catch(v){y=H.b_(v)
x=H.bA(v)
if(this.d){w=H.f(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.R(z).$isbF){if(z instanceof P.aY&&z.gds()>=4){if(z.gds()===8){w=this.b
w.b=H.f(z.gfI(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ij(new P.jW(t),null)
w.a=!1}}},
jW:{"^":"q:30;a",
$1:function(a){return this.a}},
jU:{"^":"q:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.E(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cH(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.b_(t)
y=H.bA(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
jT:{"^":"q:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isan")
w=this.c
if(w.hO(z)&&w.e!=null){v=this.b
v.b=w.hI(z)
v.a=!1}}catch(u){y=H.b_(u)
x=H.bA(u)
w=H.f(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
eP:{"^":"a;a,0b"},
d1:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aY(0,$.X,[P.A])
z.a=0
this.hN(new P.iK(z,this),!0,new P.iL(z,y),y.geR())
return y}},
iK:{"^":"q;a,b",
$1:function(a){H.E(a,H.aI(this.b,"d1",0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.aI(this.b,"d1",0)]}}},
iL:{"^":"q:3;a,b",
$0:function(){this.b.d9(this.a.a)}},
eg:{"^":"a;$ti"},
iJ:{"^":"a;"},
an:{"^":"a;a,b",
j:function(a){return H.k(this.a)},
$isa4:1},
kC:{"^":"a;",$ismA:1},
kU:{"^":"q:3;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e5()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.j(0)
throw x}},
kg:{"^":"kC;",
ih:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.X){a.$0()
return}P.f4(null,null,this,a,-1)}catch(x){z=H.b_(x)
y=H.bA(x)
P.cy(null,null,this,z,H.f(y,"$isaD"))}},
ii:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.X){a.$1(b)
return}P.f5(null,null,this,a,b,-1,c)}catch(x){z=H.b_(x)
y=H.bA(x)
P.cy(null,null,this,z,H.f(y,"$isaD"))}},
hr:function(a,b){return new P.ki(this,H.l(a,{func:1,ret:b}),b)},
cg:function(a){return new P.kh(this,H.l(a,{func:1,ret:-1}))},
hs:function(a,b){return new P.kj(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ej:function(a,b){H.l(a,{func:1,ret:b})
if($.X===C.j)return a.$0()
return P.f4(null,null,this,a,b)},
cH:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.X===C.j)return a.$1(b)
return P.f5(null,null,this,a,b,c,d)},
ig:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.X===C.j)return a.$2(b,c)
return P.kV(null,null,this,a,b,c,d,e,f)},
i6:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
ki:{"^":"q;a,b,c",
$0:function(){return this.a.ej(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kh:{"^":"q:4;a,b",
$0:function(){return this.a.ih(this.b)}},
kj:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.ii(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hB:function(a,b,c){H.cf(a)
return H.t(H.l5(a,new H.b2(0,0,[b,c])),"$isdX",[b,c],"$asdX")},
hA:function(a,b){return new H.b2(0,0,[a,b])},
hC:function(a,b,c,d){return new P.k2(0,0,[d])},
hn:function(a,b,c){var z,y
if(P.dg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bW()
C.a.h(y,a)
try{P.kR(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eh(b,H.lg(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cQ:function(a,b,c){var z,y,x
if(P.dg(a))return b+"..."+c
z=new P.cb(b)
y=$.$get$bW()
C.a.h(y,a)
try{x=z
x.a=P.eh(x.gaK(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaK()+c
y=z.gaK()
return y.charCodeAt(0)==0?y:y},
dg:function(a){var z,y
for(z=0;y=$.$get$bW(),z<y.length;++z)if(a===y[z])return!0
return!1},
kR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.k(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.F();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e0:function(a){var z,y,x
z={}
if(P.dg(a))return"{...}"
y=new P.cb("")
try{C.a.h($.$get$bW(),a)
x=y
x.a=x.gaK()+"{"
z.a=!0
J.fA(a,new P.hH(z,y))
z=y
z.a=z.gaK()+"}"}finally{z=$.$get$bW()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaK()
return z.charCodeAt(0)==0?z:z},
k2:{"^":"jX;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.eT(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dd()
this.b=z}return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dd()
this.c=y}return this.d7(y,b)}else return this.eJ(0,b)},
eJ:function(a,b){var z,y,x
H.E(b,H.z(this,0))
z=this.d
if(z==null){z=P.dd()
this.d=z}y=this.da(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.dg(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
E:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dl(this.c,b)
else return this.fA(0,b)},
fA:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eZ(z,b)
x=this.dg(y,b)
if(x<0)return!1
this.dt(y.splice(x,1)[0])
return!0},
d7:function(a,b){H.E(b,H.z(this,0))
if(H.f(a[b],"$isdc")!=null)return!1
a[b]=this.bO(b)
return!0},
dl:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdc")
if(z==null)return!1
this.dt(z)
delete a[b]
return!0},
d8:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.dc(H.E(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d8()
return z},
dt:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d8()},
da:function(a){return J.b9(a)&0x3ffffff},
eZ:function(a,b){return a[this.da(b)]},
dg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].a,b))return y
return-1},
q:{
dd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dc:{"^":"a;a,0b,0c"},
k3:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.bD(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.z(this,0))
this.c=z.b
return!0}}},
q:{
eT:function(a,b,c){var z=new P.k3(a,b,[c])
z.c=a.e
return z}}},
jX:{"^":"ir;"},
cq:{"^":"k4;",$isi:1,$isd:1},
v:{"^":"a;$ti",
gY:function(a){return new H.dZ(a,this.gl(a),0,[H.c_(this,a,"v",0)])},
H:function(a,b){return this.i(a,b)},
ik:function(a,b){var z,y,x
z=H.c([],[H.c_(this,a,"v",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.i(a,y));++y}return z},
cK:function(a){return this.ik(a,!0)},
j:function(a){return P.cQ(a,"[","]")}},
hG:{"^":"ak;"},
hH:{"^":"q:19;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ak:{"^":"a;$ti",
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.c_(this,a,"ak",0),H.c_(this,a,"ak",1)]})
for(z=J.c0(this.gaC(a));z.F();){y=z.gR(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.ba(this.gaC(a))},
j:function(a){return P.e0(a)},
$isa7:1},
it:{"^":"a;$ti",
j:function(a){return P.cQ(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.dt("index"))
if(b<0)H.m(P.as(b,0,null,"index",null))
for(z=P.eT(this,this.r,H.z(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.b(P.U(b,this,"index",null,y))},
$isi:1},
ir:{"^":"it;"},
k4:{"^":"a+v;"}}],["","",,P,{"^":"",cL:{"^":"a;$ti"},dF:{"^":"iJ;$ti"},h3:{"^":"cL;",
$ascL:function(){return[P.o,[P.d,P.A]]}},jf:{"^":"h3;a"},jg:{"^":"dF;",
hy:function(a,b,c){var z,y,x,w
z=a.length
P.ea(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kB(0,0,x)
if(w.eX(a,b,z)!==z)w.du(C.i.cl(a,z-1),0)
return C.G.bL(x,0,w.b)},
hx:function(a){return this.hy(a,0,null)},
$asdF:function(){return[P.o,[P.d,P.A]]}},kB:{"^":"a;a,b,c",
du:function(a,b){var z,y,x,w,v
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
if(b!==c&&(C.i.cl(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bi(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.du(w,C.i.bi(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h5:function(a){var z=J.R(a)
if(!!z.$isq)return z.j(a)
return"Instance of '"+H.bl(a)+"'"},
hD:function(a,b,c,d){var z,y
H.E(b,d)
z=J.hp(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.t(z,"$isd",[d],"$asd")},
hE:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gY(a);x.F();)C.a.h(y,H.E(x.gR(x),c))
if(b)return y
return H.t(J.bG(y),"$isd",z,"$asd")},
d2:function(a,b,c){var z,y
z=P.A
H.t(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.t(a,"$isbe",[z],"$asbe")
y=a.length
c=P.ea(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a0()
z=c<y}else z=!0
return H.e9(z?C.a.bL(a,b,c):a)}return P.iM(a,b,c)},
iM:function(a,b,c){var z,y,x
H.t(a,"$isi",[P.A],"$asi")
z=J.c0(a)
for(y=0;y<b;++y)if(!z.F())throw H.b(P.as(b,0,y,null,null))
x=[]
for(;z.F();)x.push(z.gR(z))
return H.e9(x)},
ih:function(a,b,c){return new H.hs(a,H.ht(a,!1,!0,!1))},
f3:function(a,b,c,d){var z,y,x,w,v,u
H.t(a,"$isd",[P.A],"$asd")
if(c===C.n){z=$.$get$f2().b
z=z.test(b)}else z=!1
if(z)return b
y=C.x.hx(H.E(b,H.aI(c,"cL",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ib(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h5(a)},
j:function(a){return new P.eQ(a)},
fq:function(a){H.lk(a)},
ab:{"^":"a;"},
"+bool":0,
ap:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&this.b===b.b},
ai:function(a,b){return C.f.ai(this.a,H.f(b,"$isap").a)},
gX:function(a){var z=this.a
return(z^C.f.bn(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fU(H.ia(this))
y=P.c1(H.i8(this))
x=P.c1(H.i4(this))
w=P.c1(H.i5(this))
v=P.c1(H.i7(this))
u=P.c1(H.i9(this))
t=P.fV(H.i6(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isai:1,
$asai:function(){return[P.ap]},
q:{
fU:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"a_;"},
"+double":0,
b1:{"^":"a;a",
a0:function(a,b){return C.f.a0(this.a,H.f(b,"$isb1").a)},
aG:function(a,b){return C.f.aG(this.a,H.f(b,"$isb1").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
ai:function(a,b){return C.f.ai(this.a,H.f(b,"$isb1").a)},
j:function(a){var z,y,x,w,v
z=new P.h0()
y=this.a
if(y<0)return"-"+new P.b1(0-y).j(0)
x=z.$1(C.f.a3(y,6e7)%60)
w=z.$1(C.f.a3(y,1e6)%60)
v=new P.h_().$1(y%1e6)
return""+C.f.a3(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
$isai:1,
$asai:function(){return[P.b1]},
q:{
fZ:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h_:{"^":"q:20;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h0:{"^":"q:20;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"a;"},
e5:{"^":"a4;",
j:function(a){return"Throw of null."}},
b0:{"^":"a4;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.cl(this.b)
return w+v+": "+H.k(u)},
q:{
ch:function(a,b,c){return new P.b0(!0,a,b,c)},
dt:function(a){return new P.b0(!1,null,a,"Must not be null")}}},
cs:{"^":"b0;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
c9:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
ea:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.b(P.as(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.b(P.as(b,a,c,"end",f))
return b}return c}}},
hd:{"^":"b0;e,l:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.fv(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
U:function(a,b,c,d,e){var z=H.B(e!=null?e:J.ba(b))
return new P.hd(b,z,!0,a,c,"Index out of range")}}},
ja:{"^":"a4;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
G:function(a){return new P.ja(a)}}},
j7:{"^":"a4;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eI:function(a){return new P.j7(a)}}},
iG:{"^":"a4;a",
j:function(a){return"Bad state: "+this.a}},
fQ:{"^":"a4;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cl(z))+"."},
q:{
bD:function(a){return new P.fQ(a)}}},
i_:{"^":"a;",
j:function(a){return"Out of Memory"},
$isa4:1},
ee:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isa4:1},
fT:{"^":"a4;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eQ:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
hb:{"^":"a;a,b,c",
j:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bM(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"a_;"},
"+int":0,
i:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.F();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.dt("index"))
if(b<0)H.m(P.as(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.F();){x=z.gR(z)
if(b===y)return x;++y}throw H.b(P.U(b,this,"index",null,y))},
j:function(a){return P.hn(this,"(",")")}},
cR:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
a7:{"^":"a;$ti"},
M:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a_:{"^":"a;",$isai:1,
$asai:function(){return[P.a_]}},
"+num":0,
a:{"^":";",
w:function(a,b){return this===b},
gX:function(a){return H.bN(this)},
j:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.j(this)}},
aD:{"^":"a;"},
o:{"^":"a;",$isai:1,
$asai:function(){return[P.o]},
$ise6:1},
"+String":0,
cb:{"^":"a;aK:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eh:function(a,b,c){var z=J.c0(b)
if(!z.F())return a
if(c.length===0){do a+=H.k(z.gR(z))
while(z.F())}else{a+=H.k(z.gR(z))
for(;z.F();)a=a+c+H.k(z.gR(z))}return a}}}}],["","",,W,{"^":"",
fD:function(a){var z=document.createElement("a")
return z},
dB:function(a,b){var z=document.createElement("canvas")
return z},
h2:function(a){H.f(a,"$isag")
return"wheel"},
cv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eS:function(a,b,c,d){var z,y
z=W.cv(W.cv(W.cv(W.cv(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f8:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.X
if(z===C.j)return a
return z.hs(a,b)},
c3:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lD:{"^":"r;0l:length=","%":"AccessibleNodeList"},
lE:{"^":"c3;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lF:{"^":"c3;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fH:{"^":"r;","%":";Blob"},
cK:{"^":"c3;",
cQ:function(a,b,c){var z=a.getContext(b,P.l_(c,null))
return z},
$iscK:1,
"%":"HTMLCanvasElement"},
lL:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lN:{"^":"fS;0l:length=","%":"CSSPerspective"},
bb:{"^":"r;",$isbb:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lO:{"^":"jD;0l:length=",
eq:function(a,b){var z=a.getPropertyValue(this.eN(a,b))
return z==null?"":z},
eN:function(a,b){var z,y
z=$.$get$dG()
y=z[b]
if(typeof y==="string")return y
y=this.fS(a,b)
z[b]=y
return y},
fS:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fW()+b
if(z in a)return z
return b},
gci:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbb:function(a){return a.right},
gbe:function(a){return a.top},
gav:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fR:{"^":"a;",
gaR:function(a){return this.eq(a,"left")}},
dH:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fS:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lP:{"^":"dH;0l:length=","%":"CSSTransformValue"},
lQ:{"^":"dH;0l:length=","%":"CSSUnparsedValue"},
lR:{"^":"r;0l:length=","%":"DataTransferItemList"},
lS:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
lT:{"^":"jF;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.t(c,"$isa9",[P.a_],"$asa9")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.a_]]},
$asv:function(){return[[P.a9,P.a_]]},
$isi:1,
$asi:function(){return[[P.a9,P.a_]]},
$isd:1,
$asd:function(){return[[P.a9,P.a_]]},
$asC:function(){return[[P.a9,P.a_]]},
"%":"ClientRectList|DOMRectList"},
fY:{"^":"r;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gav(a))+" x "+H.k(this.gat(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.bX(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=J.bZ(b)
return a.left===z.gaR(b)&&a.top===z.gbe(b)&&this.gav(a)===z.gav(b)&&this.gat(a)===z.gat(b)},
gX:function(a){return W.eS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gav(a)&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF)},
gci:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbb:function(a){return a.right},
gbe:function(a){return a.top},
gav:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
lU:{"^":"jH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.V(c)
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.o]},
$asv:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asC:function(){return[P.o]},
"%":"DOMStringList"},
lV:{"^":"r;0l:length=","%":"DOMTokenList"},
jC:{"^":"cq;a,b",
gl:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa2")},
m:function(a,b,c){var z
H.B(b)
H.f(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.cK(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$asv:function(){return[W.a2]},
$asi:function(){return[W.a2]},
$asd:function(){return[W.a2]}},
a2:{"^":"L;",
gdD:function(a){return new W.jC(a,a.children)},
gdE:function(a){return P.id(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
j:function(a){return a.localName},
$isa2:1,
"%":";Element"},
aj:{"^":"r;",$isaj:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ag:{"^":"r;",
dw:["eu",function(a,b,c,d){H.l(c,{func:1,args:[W.aj]})
if(c!=null)this.eK(a,b,c,!1)}],
eK:function(a,b,c,d){return a.addEventListener(b,H.bY(H.l(c,{func:1,args:[W.aj]}),1),!1)},
$isag:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eY|eZ|f0|f1"},
bc:{"^":"fH;",$isbc:1,"%":"File"},
lW:{"^":"jM;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbc")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asv:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"FileList"},
lX:{"^":"ag;0l:length=","%":"FileWriter"},
lY:{"^":"c3;0l:length=","%":"HTMLFormElement"},
bd:{"^":"r;",$isbd:1,"%":"Gamepad"},
lZ:{"^":"r;0l:length=","%":"History"},
m_:{"^":"jZ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bH:{"^":"d5;",$isbH:1,"%":"KeyboardEvent"},
m4:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
m5:{"^":"r;0l:length=","%":"MediaList"},
m6:{"^":"ag;",
dw:function(a,b,c,d){H.l(c,{func:1,args:[W.aj]})
if(b==="message")a.start()
this.eu(a,b,c,!1)},
"%":"MessagePort"},
m7:{"^":"k5;",
i:function(a,b){return P.aZ(a.get(H.V(b)))},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gaC:function(a){var z=H.c([],[P.o])
this.I(a,new W.hS(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isa7:1,
$asa7:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hS:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m8:{"^":"k6;",
i:function(a,b){return P.aZ(a.get(H.V(b)))},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gaC:function(a){var z=H.c([],[P.o])
this.I(a,new W.hT(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isa7:1,
$asa7:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hT:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bi:{"^":"r;",$isbi:1,"%":"MimeType"},
m9:{"^":"k8;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbi")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asv:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"MimeTypeArray"},
aB:{"^":"d5;",$isaB:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jB:{"^":"cq;a",
m:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.dO(z,z.length,-1,[H.c_(C.H,z,"C",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asv:function(){return[W.L]},
$asi:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"ag;",
ia:function(a,b){var z,y
try{z=a.parentNode
J.fx(z,b,a)}catch(y){H.b_(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.ev(a):z},
fD:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hY:{"^":"ka;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bk:{"^":"r;0l:length=",$isbk:1,"%":"Plugin"},
mi:{"^":"ke;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbk")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asv:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"PluginArray"},
mk:{"^":"kk;",
i:function(a,b){return P.aZ(a.get(H.V(b)))},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gaC:function(a){var z=H.c([],[P.o])
this.I(a,new W.io(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isa7:1,
$asa7:function(){return[P.o,null]},
"%":"RTCStatsReport"},
io:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ml:{"^":"c3;0l:length=","%":"HTMLSelectElement"},
bm:{"^":"ag;",$isbm:1,"%":"SourceBuffer"},
mm:{"^":"eZ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbm")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bm]},
$asv:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asC:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"r;",$isbn:1,"%":"SpeechGrammar"},
mn:{"^":"km;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbn")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bn]},
$asv:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asC:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"r;0l:length=",$isbo:1,"%":"SpeechRecognitionResult"},
mp:{"^":"kp;",
i:function(a,b){return a.getItem(H.V(b))},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaC:function(a){var z=H.c([],[P.o])
this.I(a,new W.iI(z))
return z},
gl:function(a){return a.length},
$asak:function(){return[P.o,P.o]},
$isa7:1,
$asa7:function(){return[P.o,P.o]},
"%":"Storage"},
iI:{"^":"q:43;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"r;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"ag;",$isbq:1,"%":"TextTrack"},
br:{"^":"ag;",$isbr:1,"%":"TextTrackCue|VTTCue"},
ms:{"^":"kt;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbr")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.br]},
$asv:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asC:function(){return[W.br]},
"%":"TextTrackCueList"},
mt:{"^":"f1;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbq")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bq]},
$asv:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asC:function(){return[W.bq]},
"%":"TextTrackList"},
mu:{"^":"r;0l:length=","%":"TimeRanges"},
bs:{"^":"r;",$isbs:1,"%":"Touch"},
bt:{"^":"d5;",$isbt:1,"%":"TouchEvent"},
mv:{"^":"ky;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbs")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bs]},
$asv:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asC:function(){return[W.bs]},
"%":"TouchList"},
mw:{"^":"r;0l:length=","%":"TrackDefaultList"},
d5:{"^":"aj;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
my:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
mz:{"^":"ag;0l:length=","%":"VideoTrackList"},
bQ:{"^":"aB;",
ghB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.G("deltaY is not supported"))},
ghA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.G("deltaX is not supported"))},
$isbQ:1,
"%":"WheelEvent"},
ju:{"^":"ag;",
fF:function(a,b){return a.requestAnimationFrame(H.bY(H.l(b,{func:1,ret:-1,args:[P.a_]}),1))},
eW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mE:{"^":"kE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbb")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asv:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"CSSRuleList"},
mF:{"^":"fY;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.bX(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=J.bZ(b)
return a.left===z.gaR(b)&&a.top===z.gbe(b)&&a.width===z.gav(b)&&a.height===z.gat(b)},
gX:function(a){return W.eS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gat:function(a){return a.height},
gav:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mH:{"^":"kG;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asv:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"GamepadList"},
mI:{"^":"kI;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mJ:{"^":"kK;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbo")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bo]},
$asv:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asC:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
mK:{"^":"kM;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbp")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asC:function(){return[W.bp]},
"%":"StyleSheetList"},
jI:{"^":"d1;a,b,c,$ti",
hN:function(a,b,c,d){var z=H.z(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a5(this.a,this.b,a,!1,z)}},
mG:{"^":"jI;a,b,c,$ti"},
jJ:{"^":"eg;a,b,c,d,e,$ti",
fX:function(){var z=this.d
if(z!=null&&this.a<=0)J.fy(this.b,this.c,z,!1)},
q:{
a5:function(a,b,c,d,e){var z=c==null?null:W.f8(new W.jK(c),W.aj)
z=new W.jJ(0,a,b,z,!1,[e])
z.fX()
return z}}},
jK:{"^":"q:8;a",
$1:function(a){return this.a.$1(H.f(a,"$isaj"))}},
C:{"^":"a;$ti",
gY:function(a){return new W.dO(a,this.gl(a),-1,[H.c_(this,a,"C",0)])}},
dO:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fw(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
jD:{"^":"r+fR;"},
jE:{"^":"r+v;"},
jF:{"^":"jE+C;"},
jG:{"^":"r+v;"},
jH:{"^":"jG+C;"},
jL:{"^":"r+v;"},
jM:{"^":"jL+C;"},
jY:{"^":"r+v;"},
jZ:{"^":"jY+C;"},
k5:{"^":"r+ak;"},
k6:{"^":"r+ak;"},
k7:{"^":"r+v;"},
k8:{"^":"k7+C;"},
k9:{"^":"r+v;"},
ka:{"^":"k9+C;"},
kd:{"^":"r+v;"},
ke:{"^":"kd+C;"},
kk:{"^":"r+ak;"},
eY:{"^":"ag+v;"},
eZ:{"^":"eY+C;"},
kl:{"^":"r+v;"},
km:{"^":"kl+C;"},
kp:{"^":"r+ak;"},
ks:{"^":"r+v;"},
kt:{"^":"ks+C;"},
f0:{"^":"ag+v;"},
f1:{"^":"f0+C;"},
kx:{"^":"r+v;"},
ky:{"^":"kx+C;"},
kD:{"^":"r+v;"},
kE:{"^":"kD+C;"},
kF:{"^":"r+v;"},
kG:{"^":"kF+C;"},
kH:{"^":"r+v;"},
kI:{"^":"kH+C;"},
kJ:{"^":"r+v;"},
kK:{"^":"kJ+C;"},
kL:{"^":"r+v;"},
kM:{"^":"kL+C;"}}],["","",,P,{"^":"",
aZ:function(a){var z,y,x,w,v
if(a==null)return
z=P.hA(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.V(y[w])
z.m(0,v,a[v])}return z},
l_:function(a,b){var z={}
a.I(0,new P.l0(z))
return z},
dN:function(){var z=$.dM
if(z==null){z=J.cF(window.navigator.userAgent,"Opera",0)
$.dM=z}return z},
fW:function(){var z,y
z=$.dJ
if(z!=null)return z
y=$.dK
if(y==null){y=J.cF(window.navigator.userAgent,"Firefox",0)
$.dK=y}if(y)z="-moz-"
else{y=$.dL
if(y==null){y=!P.dN()&&J.cF(window.navigator.userAgent,"Trident/",0)
$.dL=y}if(y)z="-ms-"
else z=P.dN()?"-o-":"-webkit-"}$.dJ=z
return z},
l0:{"^":"q:19;a",
$2:function(a,b){this.a[a]=b}},
h8:{"^":"cq;a,b",
gbk:function(){var z,y,x
z=this.b
y=H.aI(z,"v",0)
x=W.a2
return new H.hI(new H.js(z,H.l(new P.h9(),{func:1,ret:P.ab,args:[y]}),[y]),H.l(new P.ha(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.B(b)
H.f(c,"$isa2")
z=this.gbk()
J.fB(z.b.$1(J.cG(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ba(this.gbk().a)},
i:function(a,b){var z=this.gbk()
return z.b.$1(J.cG(z.a,b))},
gY:function(a){var z=P.hE(this.gbk(),!1,W.a2)
return new J.am(z,z.length,0,[H.z(z,0)])},
$asv:function(){return[W.a2]},
$asi:function(){return[W.a2]},
$asd:function(){return[W.a2]}},
h9:{"^":"q:38;",
$1:function(a){return!!J.R(H.f(a,"$isL")).$isa2}},
ha:{"^":"q:24;",
$1:function(a){return H.h(H.f(a,"$isL"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kf:{"^":"a;$ti",
gbb:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.E(z+this.c,H.z(this,0))},
gci:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.E(z+this.d,H.z(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bX(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=this.a
y=J.bZ(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbe(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.E(z+this.c,w)===y.gbb(b)){if(typeof x!=="number")return x.C()
z=H.E(x+this.d,w)===y.gci(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.b9(z)
x=this.b
w=J.b9(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.E(x+this.d,v)
return P.k_(P.cw(P.cw(P.cw(P.cw(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"kf;aR:a>,be:b>,av:c>,at:d>,$ti",q:{
id:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a0()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.a0()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bI:{"^":"r;",$isbI:1,"%":"SVGLength"},m3:{"^":"k1;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbI")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$asv:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asC:function(){return[P.bI]},
"%":"SVGLengthList"},bM:{"^":"r;",$isbM:1,"%":"SVGNumber"},mg:{"^":"kc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbM")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$asv:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asC:function(){return[P.bM]},
"%":"SVGNumberList"},mj:{"^":"r;0l:length=","%":"SVGPointList"},mq:{"^":"kr;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.V(c)
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$asv:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asC:function(){return[P.o]},
"%":"SVGStringList"},mr:{"^":"a2;",
gdD:function(a){return new P.h8(a,new W.jB(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bO:{"^":"r;",$isbO:1,"%":"SVGTransform"},mx:{"^":"kA;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbO")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$asv:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asC:function(){return[P.bO]},
"%":"SVGTransformList"},k0:{"^":"r+v;"},k1:{"^":"k0+C;"},kb:{"^":"r+v;"},kc:{"^":"kb+C;"},kq:{"^":"r+v;"},kr:{"^":"kq+C;"},kz:{"^":"r+v;"},kA:{"^":"kz+C;"}}],["","",,P,{"^":"",lG:{"^":"r;0l:length=","%":"AudioBuffer"},lH:{"^":"jA;",
i:function(a,b){return P.aZ(a.get(H.V(b)))},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gaC:function(a){var z=H.c([],[P.o])
this.I(a,new P.fF(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isa7:1,
$asa7:function(){return[P.o,null]},
"%":"AudioParamMap"},fF:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lI:{"^":"ag;0l:length=","%":"AudioTrackList"},fG:{"^":"ag;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mh:{"^":"fG;0l:length=","%":"OfflineAudioContext"},jA:{"^":"r+ak;"}}],["","",,P,{"^":"",ed:{"^":"r;",$ised:1,"%":"WebGLRenderingContext"},j5:{"^":"r;",$isj5:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mo:{"^":"ko;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.U(b,a,null,null,null))
return P.aZ(a.item(b))},
m:function(a,b,c){H.B(b)
H.f(c,"$isa7")
throw H.b(P.G("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$asv:function(){return[[P.a7,,,]]},
$isi:1,
$asi:function(){return[[P.a7,,,]]},
$isd:1,
$asd:function(){return[[P.a7,,,]]},
$asC:function(){return[[P.a7,,,]]},
"%":"SQLResultSetRowList"},kn:{"^":"r+v;"},ko:{"^":"kn+C;"}}],["","",,O,{"^":"",ao:{"^":"a;0a,0b,0c,0d,$ti",
bg:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cS:function(a,b,c){var z=H.aI(this,"ao",0)
H.l(b,{func:1,ret:P.ab,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.A,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aV:function(a,b){return this.cS(a,null,b)},
dj:function(a){var z
H.t(a,"$isi",[H.aI(this,"ao",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dh:function(a,b){var z
H.t(b,"$isi",[H.aI(this,"ao",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aI(this,"ao",0)
H.E(b,z)
z=[z]
if(this.dj(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dh(x,H.c([b],z))}},
ca:function(a,b){var z,y
H.t(b,"$isi",[H.aI(this,"ao",0)],"$asi")
if(this.dj(b)){z=this.a
y=z.length
C.a.ca(z,b)
this.dh(y,b)}},
$isi:1,
q:{
cM:function(a){var z=new O.ao([a])
z.bg(a)
return z}}},cW:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
eC:function(a){var z=this.b
if(!(z==null))z.v(a)},
aH:function(){return this.eC(null)},
gJ:function(a){var z=this.a
if(z.length>0)return C.a.gcw(z)
else return V.bJ()},
eg:function(a){var z=this.a
if(a==null)C.a.h(z,V.bJ())
else C.a.h(z,a)
this.aH()},
cE:function(){var z=this.a
if(z.length>0){z.pop()
this.aH()}}}}],["","",,E,{"^":"",cH:{"^":"a;"},aR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d6:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
if(y.f==null)y.d6()}},
sa1:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().E(0,this.gec())
y=this.c
if(y!=null)y.gu().h(0,this.gec())
x=new D.I("shape",z,this.c,this,[F.al])
x.b=!0
this.a8(x)}},
sa5:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gu().E(0,this.ged())
y=this.f
this.f=a
if(a!=null)a.gu().h(0,this.ged())
this.d6()
x=new D.I("technique",y,this.f,this,[O.cc])
x.b=!0
this.a8(x)}},
sU:function(a){var z,y
if(!J.D(this.r,a)){z=this.r
if(z!=null)z.gu().E(0,this.geb())
if(a!=null)a.gu().h(0,this.geb())
this.r=a
y=new D.I("mover",z,a,this,[U.ac])
y.b=!0
this.a8(y)}},
a9:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aT(0,b,this):null
if(!J.D(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.aA])
w.b=!0
this.a8(w)}z=this.f
if(z!=null)z.a9(0,b)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a9(0,b)},
an:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gJ(z))
else C.a.h(z.a,y.k(0,z.gJ(z)))
z.aH()
a.eh(this.f)
z=a.dy
x=(z&&C.a).gcw(z)
if(x!=null&&this.d!=null)x.ei(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();)z.d.an(a)
a.ee()
a.dx.cE()},
gu:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.v(a)},
N:function(){return this.a8(null)},
hV:[function(a){H.f(a,"$isu")
this.e=null
this.a8(a)},function(){return this.hV(null)},"j7","$1","$0","gec",0,2,0],
hW:[function(a){this.a8(H.f(a,"$isu"))},function(){return this.hW(null)},"j8","$1","$0","ged",0,2,0],
hU:[function(a){this.a8(H.f(a,"$isu"))},function(){return this.hU(null)},"j6","$1","$0","geb",0,2,0],
hS:[function(a){this.a8(H.f(a,"$isu"))},function(){return this.hS(null)},"j4","$1","$0","gea",0,2,0],
j3:[function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$isi",[E.aR],"$asi")
for(z=b.length,y=this.gea(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.c2()
t.d=0
u.sa2(t)}t=u.ga2()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.N()},"$2","ghR",8,0,9],
j5:[function(a,b){var z,y,x,w,v
H.t(b,"$isi",[E.aR],"$asi")
for(z=b.length,y=this.gea(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.ga2()==null){v=new D.c2()
v.d=0
w.sa2(v)}w.ga2().E(0,y)}}this.N()},"$2","ghT",8,0,9],
$isaT:1,
q:{
aq:function(a,b,c,d,e,f){var z,y
z=new E.aR()
z.a=d
z.b=!0
y=O.cM(E.aR)
z.y=y
y.aV(z.ghR(),z.ghT())
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
z.sa1(0,e)
z.sa5(f)
z.sU(c)
return z}}},ii:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ez:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ap(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cW()
y=[V.aA]
z.a=H.c([],y)
z.gu().h(0,new E.ik(this))
this.cy=z
z=new O.cW()
z.a=H.c([],y)
z.gu().h(0,new E.il(this))
this.db=z
z=new O.cW()
z.a=H.c([],y)
z.gu().h(0,new E.im(this))
this.dx=z
z=H.c([],[O.cc])
this.dy=z
C.a.h(z,null)
this.fr=new H.b2(0,0,[P.o,A.d0])},
gi5:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gJ(z)
y=this.db
y=z.k(0,y.gJ(y))
this.z=y
z=y}return z},
gef:function(){var z,y
z=this.ch
if(z==null){z=this.gi5()
y=this.dx
y=z.k(0,y.gJ(y))
this.ch=y
z=y}return z},
gem:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gJ(z)
y=this.dx
y=z.k(0,y.gJ(y))
this.cx=y
z=y}return z},
eh:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcw(z):a;(z&&C.a).h(z,y)},
ee:function(){var z=this.dy
if(z.length>1)z.pop()},
dA:function(a){var z=a.b
if(z.length===0)throw H.b(P.j("May not cache a shader with no name."))
if(this.fr.dF(0,z))throw H.b(P.j('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
q:{
ij:function(a,b){var z=new E.ii(a,b)
z.ez(a,b)
return z}}},ik:{"^":"q:1;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.ch=null}},il:{"^":"q:1;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},im:{"^":"q:1;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
eE:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.v(a)
this.ic()},function(){return this.eE(null)},"eD","$1","$0","gd2",0,2,0],
sbK:function(a){var z=this.d
if(z!==a){if(z!=null)z.gu().E(0,this.gd2())
this.d=a
a.gu().h(0,this.gd2())
this.eD()}},
dn:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.h.e3(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.e3(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.em(C.l,this.gib())},
ic:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.iU(this),{func:1,ret:-1,args:[P.a_]})
C.v.eW(z)
C.v.fF(z,W.f8(y,P.a_))}},"$0","gib",0,0,4],
i9:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dn()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ap(w,!1)
x.y=P.fZ(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aH()
w=x.db
C.a.sl(w.a,0)
w.aH()
w=x.dx
C.a.sl(w.a,0)
w.aH()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.an(this.e)}}catch(v){z=H.b_(v)
y=H.bA(v)
P.fq("Error: "+H.k(z))
P.fq("Stack: "+H.k(y))
throw H.b(z)}},
q:{
d3:function(a,b,c,d,e){var z=document.getElementById(a)
if(z==null)throw H.b(P.j("Failed to find an element with the identifier, "+a+"."))
return E.iT(z,!0,!0,!0,!1)},
iT:function(a,b,c,d,e){var z,y,x,w
z=J.R(a)
if(!!z.$iscK)return E.el(a,!0,!0,!0,!1)
y=W.dB(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdD(a).h(0,y)
w=E.el(y,!0,!0,!0,!1)
w.a=a
return w},
el:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iS()
y=P.hB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.cQ(a,"webgl",y)
x=H.f(x==null?C.k.cQ(a,"experimental-webgl",y):x,"$ised")
if(x==null)H.m(P.j("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ij(x,a)
w=new T.iO(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jb(a)
v=new X.hv()
v.c=new X.aN(!1,!1,!1)
v.d=P.hC(null,null,null,P.A)
w.b=v
v=new X.hU(w)
v.f=0
v.r=new V.H(0,0)
v.x=new V.H(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hF(w)
v.r=0
v.x=new V.H(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iW(w)
v.e=0
v.f=new V.H(0,0)
v.r=new V.H(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eg,P.a]])
w.z=v
u=document
t=W.aB
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a5(u,"contextmenu",H.l(w.gfc(),s),!1,t))
v=w.z
r=W.aj
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a5(a,"focus",H.l(w.gff(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a5(a,"blur",H.l(w.gf9(),q),!1,r))
v=w.z
p=W.bH
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a5(u,"keyup",H.l(w.gfh(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a5(u,"keydown",H.l(w.gfg(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousedown",H.l(w.gfk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mouseup",H.l(w.gfm(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousemove",H.l(w.gfl(),s),!1,t))
p=w.z
o=W.bQ;(p&&C.a).h(p,W.a5(a,H.V(W.h2(a)),H.l(w.gfn(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a5(u,"mousemove",H.l(w.gfd(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a5(u,"mouseup",H.l(w.gfe(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a5(u,"pointerlockchange",H.l(w.gfo(),q),!1,r))
r=w.z
q=W.bt
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a5(a,"touchstart",H.l(w.gfz(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchend",H.l(w.gfv(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchmove",H.l(w.gfw(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ap(Date.now(),!1)
z.cy=0
z.dn()
return z}}},iU:{"^":"q:27;a",
$1:function(a){var z
H.fn(a)
z=this.a
if(z.ch){z.ch=!1
z.i9()}}}}],["","",,Z,{"^":"",eN:{"^":"a;a,b",q:{
da:function(a,b,c){var z
H.t(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bT(c)),35044)
a.bindBuffer(b,null)
return new Z.eN(b,z)}}},dx:{"^":"cH;a,b,c,d,e",
aq:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.b_(y)
x=P.j('Failed to bind buffer attribute "'+J.af(this.a)+'": '+H.k(z))
throw H.b(x)}},
j:function(a){return"["+J.af(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},eO:{"^":"a;a",$islJ:1},cj:{"^":"a;a,0b,c,d",
ac:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aq:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aq(a)},
cL:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
an:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
hX:function(a){this.aq(a)
this.an(a)
this.cL(a)},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].j(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isiN:1},dy:{"^":"a;0a",$isiN:1},co:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},b5:{"^":"a;a",
gcV:function(a){var z,y
z=this.a
y=(z&$.$get$aH().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=2
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$b6().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=4
if((z&$.$get$bu().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
hq:function(a){var z,y,x
z=$.$get$aH()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eM()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$aH().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aX().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
q:{
ax:function(a){return new Z.b5(a)}}}}],["","",,D,{"^":"",dC:{"^":"a;"},c2:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.u]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
E:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.b_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).E(z,b)||!1}else y=!1
return y},
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.I(y,new D.h6(z))
return!0},
ie:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
au:function(a){return this.ie(a,!0,!1)},
q:{
Q:function(){var z=new D.c2()
z.d=0
return z}}},h6:{"^":"q:28;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
if(z.b)a.$1(z)}},u:{"^":"a;a,0b"},c4:{"^":"u;c,d,a,0b,$ti"},c5:{"^":"u;c,d,a,0b,$ti"},I:{"^":"u;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dz:{"^":"a;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
q:{"^":"lK<"}},dV:{"^":"a;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},dW:{"^":"u;c,a,0b"},hv:{"^":"a;0a,0b,0c,0d",
i2:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dW(a,this)
y.b=!0
return z.v(y)},
hZ:function(a){var z,y
this.c=a.b
this.d.E(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dW(a,this)
y.b=!0
return z.v(y)}},e_:{"^":"cr;x,y,c,d,e,a,0b"},hF:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ay:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ap(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.C(0,new V.H(x*w,v*u))
u=this.a.gaQ()
s=new X.aS(a,new V.H(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cD:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.ay(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.eo()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.ay(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.ay(a,b))
return!0},
i3:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaQ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cY(new V.S(v*u,t*s),y,x,new P.ap(w,!1),this)
w.b=!0
z.v(w)
return!0},
fj:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ap(Date.now(),!1)
y=this.f
x=new X.e_(c,a,this.a.gaQ(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.H(0,0)}},aN:{"^":"a;a,b,c",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aN))return!1
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
return z+(this.c?"Shift+":"")}},aS:{"^":"cr;x,y,z,Q,ch,c,d,e,a,0b"},hU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.ap(Date.now(),!1)
y=this.a.gaQ()
x=new X.aS(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cD:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bS(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.eo()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bS(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bS(a,b,!1))
return!0},
i4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaQ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cY(new V.S(w*v,u*t),y,b,new P.ap(x,!1),this)
x.b=!0
z.v(x)
return!0},
gb2:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gaF:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gb6:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},cY:{"^":"cr;x,c,d,e,a,0b"},cr:{"^":"u;"},ep:{"^":"cr;x,y,z,Q,ch,c,d,e,a,0b"},iW:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ay:function(a,b){var z,y,x,w
H.t(a,"$isd",[V.H],"$asd")
z=new P.ap(Date.now(),!1)
y=a.length>0?a[0]:new V.H(0,0)
x=this.a.gaQ()
w=new X.ep(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i1:function(a){var z
H.t(a,"$isd",[V.H],"$asd")
z=this.b
if(z==null)return!1
z.v(this.ay(a,!0))
return!0},
i_:function(a){var z
H.t(a,"$isd",[V.H],"$asd")
z=this.c
if(z==null)return!1
z.v(this.ay(a,!0))
return!0},
i0:function(a){var z
H.t(a,"$isd",[V.H],"$asd")
z=this.d
if(z==null)return!1
z.v(this.ay(a,!1))
return!0}},jb:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaQ:function(){var z=this.a
return V.ec(0,0,(z&&C.k).gdE(z).c,C.k.gdE(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.aN(y,a.altKey,a.shiftKey))},
aN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
c6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
az:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.H(y-w,x-v)},
aX:function(a){return new V.S(a.movementX,a.movementY)},
c_:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.H])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.h.ao(u.pageX)
C.h.ao(u.pageY)
s=z.left
C.h.ao(u.pageX)
C.a.h(y,new V.H(t-s,C.h.ao(u.pageY)-z.top))}return y},
aw:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dz(z,new X.aN(y,a.altKey,a.shiftKey))},
bU:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iE:[function(a){this.f=!0},"$1","gff",4,0,8],
iy:[function(a){this.f=!1},"$1","gf9",4,0,8],
iB:[function(a){H.f(a,"$isaB")
if(this.f&&this.bU(a))a.preventDefault()},"$1","gfc",4,0,5],
iG:[function(a){var z
H.f(a,"$isbH")
if(!this.f)return
z=this.de(a)
if(this.b.i2(z))a.preventDefault()},"$1","gfh",4,0,17],
iF:[function(a){var z
H.f(a,"$isbH")
if(!this.f)return
z=this.de(a)
if(this.b.hZ(z))a.preventDefault()},"$1","gfg",4,0,17],
iI:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
z.focus()
this.f=!0
this.aN(a)
if(this.x){y=this.aw(a)
x=this.aX(a)
if(this.d.cD(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aw(a)
w=this.az(a)
if(this.c.cD(y,w))a.preventDefault()},"$1","gfk",4,0,5],
iK:[function(a){var z,y,x
H.f(a,"$isaB")
this.aN(a)
z=this.aw(a)
if(this.x){y=this.aX(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfm",4,0,5],
iD:[function(a){var z,y,x
H.f(a,"$isaB")
if(!this.bU(a)){this.aN(a)
z=this.aw(a)
if(this.x){y=this.aX(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b8(z,x))a.preventDefault()}},"$1","gfe",4,0,5],
iJ:[function(a){var z,y,x
H.f(a,"$isaB")
this.aN(a)
z=this.aw(a)
if(this.x){y=this.aX(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfl",4,0,5],
iC:[function(a){var z,y,x
H.f(a,"$isaB")
if(!this.bU(a)){this.aN(a)
z=this.aw(a)
if(this.x){y=this.aX(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b7(z,x))a.preventDefault()}},"$1","gfd",4,0,5],
iL:[function(a){var z,y
H.f(a,"$isbQ")
this.aN(a)
z=new V.S((a&&C.u).ghA(a),C.u.ghB(a)).p(0,180)
if(this.x){if(this.d.i3(z))a.preventDefault()
return}if(this.r)return
y=this.az(a)
if(this.c.i4(z,y))a.preventDefault()},"$1","gfn",4,0,29],
iM:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aw(this.y)
v=this.az(this.y)
this.d.fj(w,v,x)}},"$1","gfo",4,0,8],
iU:[function(a){var z
H.f(a,"$isbt")
this.a.focus()
this.f=!0
this.c6(a)
z=this.c_(a)
if(this.e.i1(z))a.preventDefault()},"$1","gfz",4,0,11],
iS:[function(a){var z
H.f(a,"$isbt")
this.c6(a)
z=this.c_(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfv",4,0,11],
iT:[function(a){var z
H.f(a,"$isbt")
this.c6(a)
z=this.c_(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfw",4,0,11]}}],["","",,D,{"^":"",fX:{"^":"a;",$isa3:1,$isaT:1},a3:{"^":"a;",$isaT:1},hw:{"^":"ao;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
d3:function(a){var z=this.Q
if(!(z==null))z.v(a)},
fi:[function(a){var z=this.ch
if(!(z==null))z.v(a)},function(){return this.fi(null)},"iH","$1","$0","gdi",0,2,0],
iN:[function(a){var z,y,x
H.t(a,"$isi",[D.a3],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.eS(x))return!1}return!0},"$1","gfp",4,0,31],
iv:[function(a,b){var z,y,x,w,v
z=D.a3
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdi(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.f(b[w],"$isa3")
v.gu().h(0,x)}z=new D.c4(a,b,this,[z])
z.b=!0
this.d3(z)},"$2","gf6",8,0,18],
iP:[function(a,b){var z,y,x,w,v
z=D.a3
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdi(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.f(b[w],"$isa3")
v.gu().E(0,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.d3(z)},"$2","gfs",8,0,18],
eS:function(a){var z=C.a.b_(this.e,a)
return z},
$asi:function(){return[D.a3]},
$asao:function(){return[D.a3]}},i3:{"^":"a;",$isa3:1,$isaT:1},iF:{"^":"a;",$isa3:1,$isaT:1},iP:{"^":"a;",$isa3:1,$isaT:1},iQ:{"^":"a;",$isa3:1,$isaT:1},iR:{"^":"a;",$isa3:1,$isaT:1}}],["","",,V,{"^":"",
lM:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hR",8,0,32],
lC:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.er(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.i.ae("null",c)
return C.i.ae(C.h.il($.n.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.t(a,"$isd",[P.w],"$asd")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.i.ae(z[u],x))}return z},
a1:{"^":"a;a,b,c",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
K:{"^":"a;a,b,c,d",
cK:function(a){return H.c([this.a,this.b,this.c,this.d],[P.w])},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
e3:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e3))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.w]
y=V.by(H.c([this.a,this.d,this.r],z),3,0)
x=V.by(H.c([this.b,this.e,this.x],z),3,0)
w=V.by(H.c([this.c,this.f,this.y],z),3,0)
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
aA:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
e6:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.bJ()
a3=1/a2
a4=-w
a5=-i
return V.aM((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.p(s)
r=a7.b
if(typeof r!=="number")return H.p(r)
q=a7.f
if(typeof q!=="number")return H.p(q)
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
if(typeof o!=="number")return H.p(o)
n=a7.c
if(typeof n!=="number")return H.p(n)
m=a7.r
if(typeof m!=="number")return H.p(m)
l=a7.Q
if(typeof l!=="number")return H.p(l)
k=a7.db
if(typeof k!=="number")return H.p(k)
j=a7.d
if(typeof j!=="number")return H.p(j)
i=a7.x
if(typeof i!=="number")return H.p(i)
h=a7.ch
if(typeof h!=="number")return H.p(h)
g=a7.dx
if(typeof g!=="number")return H.p(g)
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
return V.aM(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
el:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gaj(a)
if(typeof z!=="number")return z.k()
y=C.h.k(z,y)
z=this.b
x=a.gak(a)
if(typeof z!=="number")return z.k()
x=C.h.k(z,x)
z=this.c
w=a.gal()
if(typeof z!=="number")return z.k()
w=C.h.k(z,w)
z=this.e
v=a.gaj(a)
if(typeof z!=="number")return z.k()
v=C.h.k(z,v)
z=this.f
u=a.gak(a)
if(typeof z!=="number")return z.k()
u=C.h.k(z,u)
z=this.r
t=a.gal()
if(typeof z!=="number")return z.k()
t=C.h.k(z,t)
z=this.y
s=a.gaj(a)
if(typeof z!=="number")return z.k()
s=C.h.k(z,s)
z=this.z
r=a.gak(a)
if(typeof z!=="number")return z.k()
r=C.h.k(z,r)
z=this.Q
q=a.gal()
if(typeof z!=="number")return z.k()
return new V.x(y+x+w,v+u+t,s+r+C.h.k(z,q))},
bf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.a0(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
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
j:function(a){return this.K()},
e4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.by(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.e4("",3,0)},
B:function(a){return this.e4(a,3,0)},
q:{
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bJ:function(){return V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
a8:function(a,b,c){return V.aM(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bh:function(a,b,c,d){return V.aM(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bK:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aM(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
cX:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aM(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
H:{"^":"a;a,b",
C:function(a,b){return new V.H(this.a+b.a,this.b+b.b)},
G:function(a,b){return new V.H(this.a-b.a,this.b-b.b)},
p:function(a,b){if($.n.$2(b,0))return new V.H(0,0)
return new V.H(this.a/b,this.b/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
a0:{"^":"a;a,b,c",
C:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a0(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.n.$2(b,0))return new V.a0(0,0,0)
return new V.a0(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
aU:{"^":"a;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aU))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eb:{"^":"a;a,b,c,d",
ga_:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
q:{
ec:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)}}},
S:{"^":"a;a,b",
e8:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,12],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.S(z*b,y*b)},
p:function(a,b){var z,y
if($.n.$2(b,0))return new V.S(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.S(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
x:{"^":"a;a,b,c",
e8:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,12],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cz:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.x(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b0:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.x(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.x(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.n.$2(b,0))return new V.x(0,0,0)
return new V.x(this.a/b,this.b/b,this.c/b)},
e7:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.x))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
cd:{"^":"a;a,b,c,d",
e8:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gl",1,0,12],
p:function(a,b){if($.n.$2(b,0))return new V.cd(0,0,0,0)
return new V.cd(this.a/b,this.b/b,this.c/b,this.d/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cd))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}}],["","",,U,{"^":"",fO:{"^":"dC;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z=V.lC(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.v(a)},
scM:function(a,b){},
scA:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.I("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.O(z)}},
scC:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.I("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.O(z)}},
sZ:function(a,b){var z,y
b=this.bN(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.w])
z.b=!0
this.O(z)}},
scB:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.O(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.w])
z.b=!0
this.O(z)}},
sco:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.w])
z.b=!0
this.O(z)}},
a9:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
q:{
cN:function(){var z=new U.fO()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dE:{"^":"ac;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
sJ:function(a,b){var z,y,x
if(b==null)b=V.bJ()
if(!J.D(this.a,b)){z=this.a
this.a=b
y=new D.I("matrix",z,b,this,[V.aA])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aT:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.D(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
q:{
P:function(a){var z=new U.dE()
z.sJ(0,a)
return z}}},dP:{"^":"ao;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
O:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.v(a)},function(){return this.O(null)},"af","$1","$0","gaM",0,2,0],
io:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ac
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaM(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.O(z)},"$2","geF",8,0,16],
iO:[function(a,b){var z,y,x,w,v
z=U.ac
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaM(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gu().E(0,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gfq",8,0,16],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bJ():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dP))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.D(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.ac]},
$asao:function(){return[U.ac]},
$isac:1,
q:{
aL:function(a){var z=new U.dP()
z.bg(U.ac)
z.aV(z.geF(),z.gfq())
z.e=null
z.f=V.bJ()
z.r=0
return z}}},ac:{"^":"dC;"},jc:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
O:[function(a){var z
H.f(a,"$isu")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.O(null)},"af","$1","$0","gaM",0,2,0],
aY:function(a){if(this.a!=null)return!1
this.a=a
a.c.gb2().h(0,this.gbV())
this.a.c.gb6().h(0,this.gbW())
this.a.c.gaF().h(0,this.gbX())
return!0},
f2:[function(a){H.f(a,"$isu")
if(!J.D(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbV",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isu"),"$isaS")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.S(y.a,y.b).k(0,2).p(0,z.ga_())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.S(x.a,x.b).k(0,2).p(0,z.ga_())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
this.b.sP(0)
y=y.G(0,a.z)
this.Q=new V.S(y.a,y.b).k(0,2).p(0,z.ga_())}this.af()},"$1","gbW",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sP(y*10*x)
this.af()}},"$1","gbX",4,0,2],
aT:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.ch=y
x=b.y
this.b.a9(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aM(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},jd:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
O:[function(a){var z
H.f(a,"$isu")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.O(null)},"af","$1","$0","gaM",0,2,0],
aY:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gb2().h(0,this.gbV())
this.a.c.gb6().h(0,this.gbW())
this.a.c.gaF().h(0,this.gbX())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.gf_())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gf0())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.gfW())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gfV())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.gfU())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.S(z,y)},
f2:[function(a){a=H.h(H.f(a,"$isu"),"$isaS")
if(!J.D(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbV",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isu"),"$isaS")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ap(new V.S(y.a,y.b).k(0,2).p(0,z.ga_()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ap(new V.S(x.a,x.b).k(0,2).p(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.ap(new V.S(y.a,y.b).k(0,2).p(0,z.ga_()))}this.af()},"$1","gbW",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sP(-y*10*z)
this.af()}},"$1","gbX",4,0,2],
is:[function(a){if(H.h(H.f(a,"$isu"),"$ise_").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf_",4,0,2],
it:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isu"),"$isaS")
if(!J.D(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ap(new V.S(x.a,x.b).k(0,2).p(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.ap(new V.S(y.a,y.b).k(0,2).p(0,z.ga_()))
this.af()},"$1","gf0",4,0,2],
iZ:[function(a){H.f(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfW",4,0,2],
iY:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isu"),"$isep")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ap(new V.S(y.a,y.b).k(0,2).p(0,z.ga_()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ap(new V.S(x.a,x.b).k(0,2).p(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.ap(new V.S(y.a,y.b).k(0,2).p(0,z.ga_()))}this.af()},"$1","gfV",4,0,2],
iX:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sP(-y*10*z)
this.af()}},"$1","gfU",4,0,2],
aT:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.dy=y
x=b.y
this.c.a9(0,x)
this.b.a9(0,x)
this.fr=V.bK(this.b.d).k(0,V.cX(this.c.d))}return this.fr},
$isac:1},je:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
O:function(a){var z=this.r
if(!(z==null))z.v(a)},
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=this.gf5()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
iu:[function(a){var z,y,x,w
H.f(a,"$isu")
if(!J.D(this.b,this.a.b.c))return
H.h(a,"$iscY")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.w])
z.b=!0
this.O(z)}},"$1","gf5",4,0,2],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.bh(x,x,x,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",fP:{"^":"ao;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
aa:[function(a){var z
H.f(a,"$isu")
z=this.f
if(!(z==null))z.v(a)},function(){return this.aa(null)},"eG","$1","$0","ga7",0,2,0],
iQ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.at
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga7(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gft",8,0,21],
iR:[function(a,b){var z,y,x,w,v
z=M.at
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga7(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gu().E(0,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfu",8,0,21],
an:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
if(!(y==null))y.an(a)}this.e=!1},
$asi:function(){return[M.at]},
$asao:function(){return[M.at]},
$isat:1,
q:{
cO:function(a){var z=new M.fP()
z.bg(M.at)
z.e=!1
z.f=null
z.aV(z.gft(),z.gfu())
z.ca(0,a)
return z}}},h4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aa:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.v(a)},function(){return this.aa(null)},"eG","$1","$0","ga7",0,2,0],
iz:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aR
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga7(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.c2()
s.d=0
t.sa2(s)}s=t.ga2()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfa",8,0,9],
iA:[function(a,b){var z,y,x,w,v,u
z=E.aR
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga7(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null){if(v.ga2()==null){u=new D.c2()
u.d=0
v.sa2(u)}v.ga2().E(0,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfb",8,0,9],
saA:function(a){var z,y
if(a==null)a=X.bj(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().E(0,this.ga7())
y=this.a
this.a=a
a.gu().h(0,this.ga7())
z=new D.I("camera",y,this.a,this,[X.dA])
z.b=!0
this.aa(z)}},
sbI:function(a,b){var z,y
if(b==null)b=X.cn(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().E(0,this.ga7())
y=this.b
this.b=b
b.gu().h(0,this.ga7())
z=new D.I("target",y,this.b,this,[X.ei])
z.b=!0
this.aa(z)}},
sa5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().E(0,this.ga7())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga7())
z=new D.I("technique",y,this.c,this,[O.cc])
z.b=!0
this.aa(z)}},
gu:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
an:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.eh(this.c)
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
if(typeof x!=="number")return H.p(x)
u=C.h.ao(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.h.ao(v.b*w)
s=C.h.ao(v.c*x)
a.c=s
v=C.h.ao(v.d*w)
a.d=v
y.viewport(u,t,s,v)
a.a.clearDepth(z.c)
if(z.b){y=a.a
z=z.a
y.clearColor(z.a,z.b,z.c,z.d)
r=16640}else r=256
a.a.clear(r)
z=this.a
y=a.c
v=a.d
s=z.c
q=z.d
p=z.e
o=p-q
n=1/Math.tan(s*0.5)
m=V.aM(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y=z.a
if(y!=null){l=y.a
if(l!=null)m=l.k(0,m)}a.cy.eg(m)
y=$.e7
if(y==null){y=new V.x(0,0,-1)
k=y.p(0,Math.sqrt(y.A(y)))
y=new V.x(0,1,0).b0(k)
j=y.p(0,Math.sqrt(y.A(y)))
i=k.b0(j)
h=new V.x(0,0,0)
y=V.aM(j.a,i.a,k.a,j.M(0).A(h),j.b,i.b,k.b,i.M(0).A(h),j.c,i.c,k.c,k.M(0).A(h),0,0,0,1)
$.e7=y
g=y}else g=y
z=z.b
if(z!=null){l=z.a
if(l!=null)g=l.k(0,g)}a.db.eg(g)
z=this.c
if(z!=null)z.a9(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a9(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();)z.d.an(a)
this.a.toString
a.cy.cE()
a.db.cE()
this.b.toString
a.ee()},
$isat:1,
q:{
bE:function(a,b,c,d){var z,y
z=new M.h4()
y=O.cM(E.aR)
z.d=y
y.aV(z.gfa(),z.gfb())
z.e=null
z.f=null
z.r=null
z.x=null
z.saA(a)
z.sbI(0,c)
z.sa5(d)
return z}}},at:{"^":"a;"}}],["","",,A,{"^":"",du:{"^":"a;a,b,c"},fE:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dH:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dQ:{"^":"d0;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},e2:{"^":"d0;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0am,0bs,0dI,0bt,0bu,0dJ,0dK,0bv,0bw,0dL,0dM,0bx,0by,0dN,0dO,0bz,0dP,0dQ,0bA,0dR,0dS,0bB,0bC,0bD,0dT,0dU,0bE,0bF,0dV,0dW,0bG,0dX,0cp,0dY,0cq,0dZ,0cr,0e_,0cs,0e0,0ct,0e1,0cu,a,b,0c,0d,0e,0f,0r,0x,0y",
ey:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.cb("")
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
a1.h0(z)
a1.h7(z)
a1.h1(z)
a1.hf(z)
a1.hg(z)
a1.h9(z)
a1.hk(z)
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
z=new P.cb("")
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
v.h4(z)
v.h_(z)
v.h2(z)
v.h5(z)
v.hd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hb(z)
v.hc(z)}v.h8(z)
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
p=H.c([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h3(z)
v.ha(z)
v.he(z)
v.hh(z)
v.hi(z)
v.hj(z)
v.h6(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.o])
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
n="vec4("+C.a.D(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.e5(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$isau")
if(y)this.dy=H.h(this.y.n(0,"objMat"),"$isau")
if(w)this.fr=H.h(this.y.n(0,"viewObjMat"),"$isau")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$isau")
if(a1.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$isd8")
if(a1.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$isau")
if(a1.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$isau")
this.r1=H.c([],[A.au])
y=a1.as
if(y>0){this.k4=H.f(this.y.n(0,"bendMatCount"),"$isO")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.m(P.j("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(l,"$isau"))}}y=a1.a
if(y!==C.b){this.r2=H.h(this.y.n(0,"emissionClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.h(this.y.n(0,"emissionTxt"),"$isav")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isO")
break
case C.d:this.ry=H.h(this.y.n(0,"emissionTxt"),"$isaw")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isO")
break}}y=a1.b
if(y!==C.b){this.x2=H.h(this.y.n(0,"ambientClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.h(this.y.n(0,"ambientTxt"),"$isav")
this.as=H.h(this.y.n(0,"nullAmbientTxt"),"$isO")
break
case C.d:this.y2=H.h(this.y.n(0,"ambientTxt"),"$isaw")
this.as=H.h(this.y.n(0,"nullAmbientTxt"),"$isO")
break}}y=a1.c
if(y!==C.b){this.am=H.h(this.y.n(0,"diffuseClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.bs=H.h(this.y.n(0,"diffuseTxt"),"$isav")
this.bt=H.h(this.y.n(0,"nullDiffuseTxt"),"$isO")
break
case C.d:this.dI=H.h(this.y.n(0,"diffuseTxt"),"$isaw")
this.bt=H.h(this.y.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a1.d
if(y!==C.b){this.bu=H.h(this.y.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dJ=H.h(this.y.n(0,"invDiffuseTxt"),"$isav")
this.bv=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.d:this.dK=H.h(this.y.n(0,"invDiffuseTxt"),"$isaw")
this.bv=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a1.e
if(y!==C.b){this.by=H.h(this.y.n(0,"shininess"),"$isZ")
this.bw=H.h(this.y.n(0,"specularClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dL=H.h(this.y.n(0,"specularTxt"),"$isav")
this.bx=H.h(this.y.n(0,"nullSpecularTxt"),"$isO")
break
case C.d:this.dM=H.h(this.y.n(0,"specularTxt"),"$isaw")
this.bx=H.h(this.y.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.c:this.dN=H.h(this.y.n(0,"bumpTxt"),"$isav")
this.bz=H.h(this.y.n(0,"nullBumpTxt"),"$isO")
break
case C.d:this.dO=H.h(this.y.n(0,"bumpTxt"),"$isaw")
this.bz=H.h(this.y.n(0,"nullBumpTxt"),"$isO")
break}if(a1.dy){this.dP=H.h(this.y.n(0,"envSampler"),"$isaw")
this.dQ=H.h(this.y.n(0,"nullEnvTxt"),"$isO")
y=a1.r
if(y!==C.b){this.bA=H.h(this.y.n(0,"reflectClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dR=H.h(this.y.n(0,"reflectTxt"),"$isav")
this.bB=H.h(this.y.n(0,"nullReflectTxt"),"$isO")
break
case C.d:this.dS=H.h(this.y.n(0,"reflectTxt"),"$isaw")
this.bB=H.h(this.y.n(0,"nullReflectTxt"),"$isO")
break}}y=a1.x
if(y!==C.b){this.bC=H.h(this.y.n(0,"refraction"),"$isZ")
this.bD=H.h(this.y.n(0,"refractClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dT=H.h(this.y.n(0,"refractTxt"),"$isav")
this.bE=H.h(this.y.n(0,"nullRefractTxt"),"$isO")
break
case C.d:this.dU=H.h(this.y.n(0,"refractTxt"),"$isaw")
this.bE=H.h(this.y.n(0,"nullRefractTxt"),"$isO")
break}}}y=a1.y
if(y!==C.b){this.bF=H.h(this.y.n(0,"alpha"),"$isZ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dV=H.h(this.y.n(0,"alphaTxt"),"$isav")
this.bG=H.h(this.y.n(0,"nullAlphaTxt"),"$isO")
break
case C.d:this.dW=H.h(this.y.n(0,"alphaTxt"),"$isaw")
this.bG=H.h(this.y.n(0,"nullAlphaTxt"),"$isO")
break}}this.cp=H.c([],[A.eC])
this.cq=H.c([],[A.eD])
this.cr=H.c([],[A.eE])
this.cs=H.c([],[A.eF])
this.ct=H.c([],[A.eG])
this.cu=H.c([],[A.eH])
if(a1.k2){y=a1.z
if(y>0){this.dX=H.f(this.y.n(0,"dirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.cp;(x&&C.a).h(x,new A.eC(m,l,k))}}y=a1.Q
if(y>0){this.dY=H.f(this.y.n(0,"pntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isZ")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isZ")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isZ")
x=this.cq;(x&&C.a).h(x,new A.eD(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dZ=H.f(this.y.n(0,"spotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isZ")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isZ")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isZ")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isZ")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isZ")
x=this.cr;(x&&C.a).h(x,new A.eE(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e_=H.f(this.y.n(0,"txtDirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isJ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isO")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isav")
x=this.cs;(x&&C.a).h(x,new A.eF(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e0=H.f(this.y.n(0,"txtPntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isd8")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isO")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isZ")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isZ")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isZ")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isaw")
x=this.ct;(x&&C.a).h(x,new A.eG(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e1=H.f(this.y.n(0,"txtSpotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isJ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isO")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isJ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isZ")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isZ")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isZ")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.m(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isav")
x=this.cu;(x&&C.a).h(x,new A.eH(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ag:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hK:function(a,b){var z,y
z=a.am
y=new A.e2(b,z)
y.d1(b,z)
y.ey(a,b)
return y}}},hO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,am,bs",
h0:function(a){var z,y,x
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
h7:function(a){var z
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
h1:function(a){var z
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
hf:function(a){var z,y
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
hg:function(a){var z,y
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
h9:function(a){var z
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
hk:function(a){var z
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
ax:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cW(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h4:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ax(a,z,"emission")
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
h_:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ax(a,z,"ambient")
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
h2:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"diffuse")
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
h5:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"invDiffuse")
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
hd:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ax(a,z,"specular")
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
h8:function(a){var z,y
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
hb:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ax(a,z,"reflect")
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
hc:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ax(a,z,"refract")
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
h3:function(a){var z,y
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
ha:function(a){var z,y
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
he:function(a){var z,y
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
h6:function(a){var z
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
j:function(a){return this.am}},eC:{"^":"a;a,b,c"},eF:{"^":"a;a,b,c,d,e,f,r,x"},eD:{"^":"a;a,b,c,d,e,f,r"},eG:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eE:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d0:{"^":"cH;",
d1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
e5:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.df(b,35633)
this.f=this.df(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.fc(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.m(P.j("Failed to link shader: "+H.k(x)))}this.fN()
this.fP()},
aq:function(a){a.a.useProgram(this.r)
this.x.hC()},
df:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fc(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.b(P.j("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fN:function(){var z,y,x,w,v,u
z=H.c([],[A.du])
y=this.a
x=H.B(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.du(y,v.name,u))}this.x=new A.fE(z)},
fP:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.B(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hz(v.type,v.size,v.name,u))}this.y=new A.j4(z)},
aL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.O(z,y,b,c)
else return A.d6(z,y,b,a,c)},
eT:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.d6(z,y,b,a,c)},
eU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aw(z,y,b,c)
else return A.d6(z,y,b,a,c)},
bo:function(a,b){return new P.eQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hz:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.j0(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.d7(this.a,this.r,c,d)
case 35667:return new A.j1(this.a,this.r,c,d)
case 35668:return new A.j2(this.a,this.r,c,d)
case 35669:return new A.j3(this.a,this.r,c,d)
case 35674:return new A.j6(this.a,this.r,c,d)
case 35675:return new A.d8(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.eT(b,c,d)
case 35680:return this.eU(b,c,d)
case 35670:throw H.b(this.bo("BOOL",c))
case 35671:throw H.b(this.bo("BOOL_VEC2",c))
case 35672:throw H.b(this.bo("BOOL_VEC3",c))
case 35673:throw H.b(this.bo("BOOL_VEC4",c))
default:throw H.b(P.j("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ck:{"^":"a;a,b",
j:function(a){return this.b}},ad:{"^":"a;"},j4:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.b(P.j("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.K()},
hH:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].j(0)+a
return x},
K:function(){return this.hH("\n")}},O:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},j1:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},j2:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},j3:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},j_:{"^":"ad;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
d6:function(a,b,c,d,e){var z=new A.j_(a,b,c,e)
z.f=d
z.e=P.hD(d,0,!1,P.A)
return z}}},Z:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},j0:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},J:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},d7:{"^":"ad;a,b,c,d",
cR:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.k(this.c)}},j6:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},d8:{"^":"ad;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bT(H.t(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},au:{"^":"ad;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bT(H.t(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},av:{"^":"ad;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},aw:{"^":"ad;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
dp:function(a){var z,y,x,w,v
z=F.aC()
y=z.a
x=new V.x(-1,-1,0)
x=x.p(0,Math.sqrt(x.A(x)))
w=y.aO(new V.aU(1,2,4,6),new V.K(1,0,0,1),new V.a0(-1,0,0),new V.H(0,0),x,a)
y=z.a
x=new V.x(1,-1,0)
x=x.p(0,Math.sqrt(x.A(x)))
v=y.aO(new V.aU(0,3,4,6),new V.K(0,0,1,1),new V.a0(1,0,0),new V.H(1,0),x,a)
z.c.c9(0,w,v)
return z},
cE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
z=F.aC()
y=z.a
x=-d*0.5
w=-b*0.5
v=new V.x(-1,-1,1)
v=v.p(0,Math.sqrt(v.A(v)))
u=y.aO(new V.aU(1,2,4,6),new V.K(1,0,0,1),new V.a0(x,w,e),new V.H(0,1),v,c)
y=z.a
v=d*0.5
t=new V.x(1,-1,1)
t=t.p(0,Math.sqrt(t.A(t)))
s=y.aO(new V.aU(0,3,4,6),new V.K(0,0,1,1),new V.a0(v,w,e),new V.H(1,1),t,c)
y=z.a
w=b*0.5
t=new V.x(1,1,1)
t=t.p(0,Math.sqrt(t.A(t)))
r=y.aO(new V.aU(0,2,5,6),new V.K(0,1,0,1),new V.a0(v,w,e),new V.H(1,0),t,c)
y=z.a
v=new V.x(-1,1,1)
v=v.p(0,Math.sqrt(v.A(v)))
q=y.aO(new V.aU(0,2,4,7),new V.K(1,1,0,1),new V.a0(x,w,e),new V.H(0,0),v,c)
y=[F.T]
if(a)z.c.dz(H.c([u,s,r,q],y))
else z.d.hl(H.c([u,s,r,q],y))
z.ar()
return z},
fd:function(a,b,c,d){var z=F.aC()
F.bS(z,b,c,d,a,1,0,0,1)
F.bS(z,b,c,d,a,0,1,0,3)
F.bS(z,b,c,d,a,0,0,1,2)
F.bS(z,b,c,d,a,-1,0,0,0)
F.bS(z,b,c,d,a,0,-1,0,0)
F.bS(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cx:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.x(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.x(t+h,s+f,r+g)
z.b=q
p=new V.x(t-h,s-f,r-g)
z.c=p
o=new V.x(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cx(y)
k=F.cx(z.b)
j=F.lz(d,e,new F.kN(z,F.cx(z.c),F.cx(z.d),k,l,c),b)
if(j!=null)a.aD(j)},
fe:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
e=new F.l2()
if(f<3)return
z=F.aC()
y=-6.283185307179586/f
x=H.c([],[F.T])
for(w=0;w<=f;++w){v=y*w
u=Math.sin(v)
t=Math.cos(v)
s=e.$1(w/f)
r=z.a
if(typeof s!=="number")return H.p(s)
q=new V.x(u,t,1).p(0,Math.sqrt(u*u+t*t+1))
if(u<0)p=0
else p=u>1?1:u
o=t<0
if(o)n=0
else n=t>1?1:t
if(o)o=0
else o=t>1?1:t
r.toString
m=F.b4(new V.aU(a,-1,-1,-1),null,new V.K(p,n,o,1),new V.a0(u*s,t*s,d),new V.x(0,0,1),new V.H(u*0.5+0.5,t*0.5+0.5),q,null,0)
r.h(0,m)
C.a.h(x,m)}z.c.dz(x)
return z},
fl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.aC()
y=Math.sqrt(5)/2+0.5
x=F.ae(z,new V.x(-1,y,0))
w=F.ae(z,new V.x(1,y,0))
v=-y
u=F.ae(z,new V.x(-1,v,0))
t=F.ae(z,new V.x(1,v,0))
s=F.ae(z,new V.x(0,-1,v))
r=F.ae(z,new V.x(0,1,v))
q=F.ae(z,new V.x(0,-1,y))
p=F.ae(z,new V.x(0,1,y))
o=F.ae(z,new V.x(y,0,1))
n=F.ae(z,new V.x(y,0,-1))
m=F.ae(z,new V.x(v,0,1))
l=F.ae(z,new V.x(v,0,-1))
F.W(z,x,l,r,a)
F.W(z,x,r,w,a)
F.W(z,x,w,p,a)
F.W(z,x,p,m,a)
F.W(z,x,m,l,a)
F.W(z,w,r,n,a)
F.W(z,r,l,s,a)
F.W(z,l,m,u,a)
F.W(z,m,p,q,a)
F.W(z,p,w,o,a)
F.W(z,t,n,s,a)
F.W(z,t,s,u,a)
F.W(z,t,u,q,a)
F.W(z,t,q,o,a)
F.W(z,t,o,n,a)
F.W(z,s,n,r,a)
F.W(z,u,s,l,a)
F.W(z,q,u,m,a)
F.W(z,o,q,p,a)
F.W(z,n,o,w,a)
z.hP(new F.eJ(),new F.jl())
return z},
ae:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.A(b)))
z=b.a
y=b.b
x=b.c
w=F.b4(null,null,null,new V.a0(z,y,x),b,null,null,null,0)
v=a.hD(w,new F.eJ())
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
w.sT(0,new V.K(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scI(new V.H(q,p<0?-p:p))
a.a.h(0,w)
return w},
W:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.dv(0,b,d,c)
else{z=F.ae(a,b.r.C(0,c.r).k(0,0.5))
y=F.ae(a,c.r.C(0,d.r).k(0,0.5))
x=F.ae(a,d.r.C(0,b.r).k(0,0.5))
w=e-1
F.W(a,b,z,x,w)
F.W(a,z,c,y,w)
F.W(a,y,x,z,w)
F.W(a,x,y,d,w)}},
lz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.T,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.aC()
y=H.c([],[F.T])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.b4(null,null,new V.K(u,0,0,1),null,null,new V.H(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cn(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.b4(null,null,new V.K(o,n,m,1),null,null,new V.H(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cn(d))}}z.d.hm(a+1,b+1,y)
return z},
kN:{"^":"q:33;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cz(z.b,b).cz(z.d.cz(z.c,b),c)
a.sZ(0,new V.a0(y.a,y.b,y.c))
a.scJ(y.p(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.aU(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.D(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.N()}}},
l2:{"^":"q:34;",
$1:function(a){return 1}},
Y:{"^":"a;0a,0b,0c,0d,0e",
aB:function(){if(!this.gb1()){C.a.E(this.a.a.d.b,this)
this.a.a.N()}this.c1()
this.c2()
this.fC()},
c7:function(a){this.a=a
C.a.h(a.d.b,this)},
c8:function(a){this.b=a
C.a.h(a.d.c,this)},
fM:function(a){this.c=a
C.a.h(a.d.d,this)},
c1:function(){var z=this.a
if(z!=null){C.a.E(z.d.b,this)
this.a=null}},
c2:function(){var z=this.b
if(z!=null){C.a.E(z.d.c,this)
this.b=null}},
fC:function(){var z=this.c
if(z!=null){C.a.E(z.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
eM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.x(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e7())return
return v.p(0,Math.sqrt(v.A(v)))},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.x(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.A(z)))
z=w.G(0,y)
z=new V.x(z.a,z.b,z.c)
z=v.b0(z.p(0,Math.sqrt(z.A(z))))
return z.p(0,Math.sqrt(z.A(z)))},
ck:function(){if(this.d!=null)return!0
var z=this.eM()
if(z==null){z=this.eQ()
if(z==null)return!1}this.d=z
this.a.a.N()
return!0},
eL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.x(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e7())return
return v.p(0,Math.sqrt(v.A(v)))},
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
if($.n.$2(n,0)){z=r.G(0,u)
z=new V.x(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.G(0,u).k(0,l).C(0,u).G(0,x)
z=new V.x(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.A(z)))
z=k.b0(m)
z=z.p(0,Math.sqrt(z.A(z))).b0(k)
m=z.p(0,Math.sqrt(z.A(z)))}return m},
cj:function(){if(this.e!=null)return!0
var z=this.eL()
if(z==null){z=this.eP()
if(z==null)return!1}this.e=z
this.a.a.N()
return!0},
aJ:function(a,b){var z=b.a
if(z==null)throw H.b(P.j("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.b(P.j("May not replace a face's vertex with a vertex attached to a different shape."))},
ghv:function(a){if(J.D(this.a,this.b))return!0
if(J.D(this.b,this.c))return!0
if(J.D(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z,y
if(this.gb1())return a+"disposed"
z=a+C.i.ae(J.af(this.a.e),0)+", "+C.i.ae(J.af(this.b.e),0)+", "+C.i.ae(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
K:function(){return this.B("")}},
h7:{"^":"a;"},
iB:{"^":"h7;",
aS:function(a,b,c){var z,y
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
ar:{"^":"a;0a,0b",
aB:function(){if(!this.gb1()){C.a.E(this.a.a.c.b,this)
this.a.a.N()}this.c1()
this.c2()},
c7:function(a){this.a=a
C.a.h(a.c.b,this)},
c8:function(a){this.b=a
C.a.h(a.c.c,this)},
c1:function(){var z=this.a
if(z!=null){C.a.E(z.c.b,this)
this.a=null}},
c2:function(){var z=this.b
if(z!=null){C.a.E(z.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
aJ:function(a,b){var z=b.a
if(z==null)throw H.b(P.j("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.b(P.j("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){if(this.gb1())return a+"disposed"
return a+C.i.ae(J.af(this.a.e),0)+", "+C.i.ae(J.af(this.b.e),0)},
K:function(){return this.B("")}},
hx:{"^":"a;"},
iZ:{"^":"hx;",
aS:function(a,b,c){var z,y
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
d_:{"^":"a;0a",
aB:function(){var z=this.a
if(z!=null){C.a.E(z.a.b.b,this)
this.a.a.N()}this.fB()},
fL:function(a){this.a=a
C.a.h(a.b.b,this)},
fB:function(){var z=this.a
if(z!=null){C.a.E(z.b.b,this)
this.a=null}},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ae(J.af(z.e),0)},
K:function(){return this.B("")},
q:{
i2:function(a){var z=new F.d_()
if(a.a==null)H.m(P.j("May not create a point with a vertex which is not attached to a shape."))
z.fL(a)
C.a.h(z.a.a.b.b,z)
z.a.a.N()
return z}}},
al:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.cm())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.i2(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.ar()
s=p.a
if(s==null)H.m(P.j("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.m(P.j("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
m=new F.Y()
t=p.a
if(t==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
s=o.a
if(t==null?s==null:t===s){s=l.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.m(P.j("May not create a face with vertices attached to different shapes."))
m.a=p
C.a.h(p.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=l
C.a.h(l.d.d,m)
C.a.h(m.a.a.d.b,m)
t=m.a.a.e
if(!(t==null))t.v(null)}z=this.e
if(!(z==null))z.au(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
aP:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aP()||!1
if(!this.a.aP())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
bq:function(){var z=this.e
if(!(z==null))++z.d
this.a.bq()
z=this.e
if(!(z==null))z.au(0)
return!0},
hE:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.aS(0,a,w))return w}return},
hD:function(a,b){return this.hE(a,b,0)},
eY:function(a,b,c,d,e){var z,y,x
H.t(d,"$isd",[F.T],"$asd")
H.t(e,"$isd",[P.A],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aS(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fE:function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$isd",[P.A],"$asd")
H.iE(b,J.kQ(),H.z(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.m(P.j("May not replace a face's vertex when the point has been disposed."))
if(J.D(v,w)){x.aJ(w,a)
v=x.a
if(v!=null){C.a.E(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.D(x.b,w)){x.aJ(w,a)
v=x.b
if(v!=null){C.a.E(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.D(x.c,w)){x.aJ(w,a)
v=x.c
if(v!=null){C.a.E(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.m(P.j("May not replace a line's vertex when the point has been disposed."))
if(J.D(v,w)){x.aJ(w,a)
v=x.a
if(v!=null){C.a.E(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.D(x.b,w)){x.aJ(w,a)
v=x.b
if(v!=null){C.a.E(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.m(P.j("May not replace a point's vertex when the point has been disposed."))
if(J.D(v,w)){if(a.a==null)H.m(P.j("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.E(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.m(P.j("May not remove a vertex without first making it empty."))
t.a=null
C.a.i7(v,y)
v=x.a.e
if(!(v==null))v.v(null)
x.b=!0}},
hP:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.T],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.eY(a,v,y,u,t)){this.fE(b.aD(u),t)
y-=t.length}}this.a.t()
this.c.cF()
this.d.cF()
this.b.i8()
this.c.cG(new F.iZ())
this.d.cG(new F.iB())
z=this.e
if(!(z==null))z.au(0)},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aH()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gcV(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dx])
for(r=0,q=0;q<w;++q){p=b.hq(q)
o=p.gcV(p)
C.a.m(s,q,new Z.dx(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hM(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.t(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bT(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cj(new Z.eN(34962,j),s,b)
i.b=H.c([],[Z.co])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.da(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.da(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.da(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(4,h.length,f))}return i},
j:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.D(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.v(a)},
N:function(){return this.a8(null)},
q:{
aC:function(){var z,y
z=new F.al()
y=new F.jh(z)
y.b=!1
y.c=H.c([],[F.T])
z.a=y
y=new F.iw(z)
y.b=H.c([],[F.d_])
z.b=y
y=new F.iv(z)
y.b=H.c([],[F.ar])
z.c=y
y=new F.iu(z)
y.b=H.c([],[F.Y])
z.d=y
z.e=null
return z}}},
iu:{"^":"a;a,0b",
dv:function(a,b,c,d){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
z=new F.Y()
y=b.a
if(y==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
x=c.a
if(y==null?x==null:y===x){x=d.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.m(P.j("May not create a face with vertices attached to different shapes."))
z.c7(b)
z.c8(c)
z.fM(d)
C.a.h(z.a.a.d.b,z)
z.a.a.N()
return z},
hl:function(a){var z,y,x,w,v,u,t,s,r
H.t(a,"$isd",[F.T],"$asd")
z=H.c([],[F.Y])
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
t=new F.Y()
s=x.a
if(s==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
r=v.a
if(s==null?r==null:s===r){r=u.a
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)H.m(P.j("May not create a face with vertices attached to different shapes."))
t.a=x
C.a.h(x.d.b,t)
t.b=v
C.a.h(v.d.c,t)
t.c=u
C.a.h(u.d.d,t)
C.a.h(t.a.a.d.b,t)
v=t.a.a.e
if(!(v==null))v.v(null)
C.a.h(z,t)}}return z},
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.t(c,"$isd",[F.T],"$asd")
z=H.c([],[F.Y])
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
m=new F.Y()
s=r.a
if(s==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=q.a
if(s==null?l==null:s===l){l=o.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.m(P.j("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=q
C.a.h(q.d.c,m)
m.c=o
C.a.h(o.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.Y()
s=r.a
if(s==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.m(P.j("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.Y()
s=q.a
if(s==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.m(P.j("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
m=new F.Y()
s=q.a
if(s==null)H.m(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=n.a
if(s==null?l==null:s===l){l=r.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.m(P.j("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=n
C.a.h(n.d.c,m)
m.c=r
C.a.h(r.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cG:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.aS(0,v,t)){v.aB()
break}}}}},
cF:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghv(x)
if(y)x.aB()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].ck())x=!1
return x},
aP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cj())x=!1
return x},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
iv:{"^":"a;a,0b",
c9:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.ar()
if(b==null)H.m(P.j("May not create a line with a null start vertex."))
if(c==null)H.m(P.j("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.m(P.j("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.m(P.j("May not create a line with vertices attached to different shapes."))
z.c7(b)
z.c8(c)
C.a.h(z.a.a.c.b,z)
z.a.a.N()
return z},
dz:function(a){var z,y,x,w,v,u,t,s
H.t(a,"$isd",[F.T],"$asd")
z=H.c([],[F.ar])
y=a.length
if(y>0){for(x=1;x<y;++x){w=x-1
v=a.length
if(w>=v)return H.e(a,w)
w=a[w]
if(x>=v)return H.e(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
u=new F.ar()
t=w.a
if(t==null)H.m(P.j("May not create a line with a start vertex which is not attached to a shape."))
s=v.a
if(t==null?s!=null:t!==s)H.m(P.j("May not create a line with vertices attached to different shapes."))
u.a=w
C.a.h(w.c.b,u)
u.b=v
C.a.h(v.c.c,u)
C.a.h(u.a.a.c.b,u)
w=u.a.a.e
if(!(w==null))w.v(null)
C.a.h(z,u)}w=y-1
v=a.length
if(w>=v)return H.e(a,w)
w=a[w]
if(0>=v)return H.e(a,0)
C.a.h(z,this.c9(0,w,a[0]))}return z},
ho:function(a){var z,y,x,w,v,u,t
H.t(a,"$isd",[F.T],"$asd")
z=H.c([],[F.ar])
for(y=1;y<64;y+=2){x=a[y-1]
w=a[y]
this.a.a.h(0,x)
this.a.a.h(0,w)
v=new F.ar()
u=x.a
if(u==null)H.m(P.j("May not create a line with a start vertex which is not attached to a shape."))
t=w.a
if(u==null?t!=null:u!==t)H.m(P.j("May not create a line with vertices attached to different shapes."))
v.a=x
C.a.h(x.c.b,v)
v.b=w
C.a.h(w.c.c,v)
C.a.h(v.a.a.c.b,v)
x=v.a.a.e
if(!(x==null))x.v(null)
C.a.h(z,v)}return z},
gl:function(a){return this.b.length},
cG:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.aS(0,v,t)){v.aB()
break}}}}},
cF:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.D(x.a,x.b)
if(y)x.aB()}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.D(z,"\n")},
K:function(){return this.B("")}},
iw:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i8:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aB()}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
T:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cn:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.b4(this.cx,x,u,z,y,w,v,a,t)},
cm:function(){return this.cn(null)},
sZ:function(a,b){var z
if(!J.D(this.f,b)){this.f=b
z=this.a
if(z!=null)z.N()}},
se9:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.D(this.r,a)){this.r=a
z=this.a
if(z!=null)z.N()}},
sbp:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.D(this.x,a)){this.x=a
z=this.a
if(z!=null)z.N()}},
scI:function(a){var z
if(!J.D(this.y,a)){this.y=a
z=this.a
if(z!=null)z.N()}},
scJ:function(a){var z
if(!J.D(this.z,a)){this.z=a
z=this.a
if(z!=null)z.N()}},
sT:function(a,b){var z
if(!J.D(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.N()}},
sen:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.N()}},
hM:function(a){var z,y
z=J.R(a)
if(z.w(a,$.$get$aH())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aG())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aF())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aW())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.w(a,$.$get$aX())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b6())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bP())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.w])
else return z.cK(0)}else if(z.w(a,$.$get$bu()))return H.c([this.ch],[P.w])
else if(z.w(a,$.$get$aV())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
ck:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.x(0,0,0)
this.d.I(0,new F.jr(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
cj:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.x(0,0,0)
this.d.I(0,new F.jq(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
e2:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.b
x.a.a.t()
x=x.e
a.a.a.t()
v=a.e
if(x==null?v==null:x===v)return w}return},
hG:function(a){var z=this.e2(a)
if(z!=null)return z
return a.e2(this)},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.i.ae(J.af(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
K:function(){return this.B("")},
q:{
b4:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.T()
y=new F.jp(z)
y.b=H.c([],[F.d_])
z.b=y
y=new F.jm(z)
x=[F.ar]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.ji(z)
x=[F.Y]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eK()
z.e=0
y=$.$get$aH()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aW().a)!==0?f:null
z.z=(x&$.$get$aX().a)!==0?g:null
z.Q=(x&$.$get$eL().a)!==0?c:null
z.ch=(x&$.$get$bu().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
jr:{"^":"q:6;a",
$1:function(a){var z,y
H.f(a,"$isY")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jq:{"^":"q:6;a",
$1:function(a){var z,y
H.f(a,"$isY")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jh:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.b(P.j("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.N()
return!0},
hp:function(a,b,c,d,e,f,g,h,i){var z=F.b4(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
aO:function(a,b,c,d,e,f){return this.hp(a,null,b,c,null,d,e,f,0)},
W:function(a,b,c){var z=F.b4(null,null,null,new V.a0(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].ck()
return!0},
aP:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cj()
return!0},
bq:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.D(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
this.t()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
ji:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
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
I:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.I(this.b,b)
C.a.I(this.c,new F.jj(this,b))
C.a.I(this.d,new F.jk(this,b))},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
jj:{"^":"q:6;a,b",
$1:function(a){H.f(a,"$isY")
if(!J.D(a.a,this.a))this.b.$1(a)}},
jk:{"^":"q:6;a,b",
$1:function(a){var z
H.f(a,"$isY")
z=this.a
if(!J.D(a.a,z)&&!J.D(a.b,z))this.b.$1(a)}},
jm:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
jn:{"^":"a;"},
eJ:{"^":"jn;",
aS:function(a,b,c){return J.D(b.f,c.f)}},
jo:{"^":"a;"},
jl:{"^":"jo;",
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.t(a,"$isd",[F.T],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.a0(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.x(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.x(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.H(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.x(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.cd(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.cd(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.p(f)
n+=f;++o}b=F.b4(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sZ(0,null)
else b.sZ(0,x.p(0,y))
if(w==null)b.se9(null)
else b.se9(w.p(0,Math.sqrt(w.A(w))))
if(v==null)b.sbp(null)
else b.sbp(v.p(0,Math.sqrt(v.A(v))))
if(s<=0||r==null)b.scI(null)
else b.scI(r.p(0,s))
if(q<=0||p==null)b.scJ(null)
else b.scJ(p.p(0,q))
if(u<=0||t==null)b.sT(0,null)
else{z=t.p(0,u)
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
b.sT(0,new V.K(f,e,d,z))}if(o<=0)b.sen(0,0)
else b.sen(0,n/o)
return b}},
jp:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}}}],["","",,O,{"^":"",he:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gu:function(){var z=this.rx
if(z==null){z=D.Q()
this.rx=z}return z},
V:function(a){var z=this.rx
if(!(z==null))z.v(a)},
scT:function(a){var z
if(!this.Q){this.Q=!0
z=new D.I("showFilled",!1,!0,this,[P.ab])
z.b=!0
this.V(z)}},
scU:function(a){var z
if(!this.ch){this.ch=!0
z=new D.I("showWireFrame",!1,!0,this,[P.ab])
z.b=!0
this.V(z)}},
sdG:function(a){var z,y
if(!this.c.w(0,a)){z=this.c
this.c=a
y=new D.I("diffuse1",z,a,this,[V.K])
y.b=!0
this.V(y)}},
sdB:function(a){var z,y
if(!this.d.w(0,a)){z=this.d
this.d=a
y=new D.I("ambient1",z,a,this,[V.K])
y.b=!0
this.V(y)}},
a9:function(a,b){},
ei:function(a,b){var z,y,x,w
if(this.a==null){z=H.f(a.fr.i(0,"Inspection"),"$isdQ")
if(z==null){y=a.a
z=new A.dQ(y,"Inspection")
z.d1(y,"Inspection")
z.e5(0,$.hi,$.hf)
z.z=z.x.i(0,"posAttr")
z.Q=z.x.i(0,"normAttr")
z.ch=z.x.i(0,"clrAttr")
z.cx=z.x.i(0,"binmAttr")
z.cy=H.h(z.y.i(0,"lightVec"),"$isJ")
z.db=H.h(z.y.i(0,"ambientClr"),"$isd7")
z.dx=H.h(z.y.i(0,"diffuseClr"),"$isd7")
z.dy=H.h(z.y.i(0,"weightScalar"),"$isZ")
z.fr=H.h(z.y.i(0,"viewMat"),"$isau")
z.fx=H.h(z.y.i(0,"viewObjMatrix"),"$isau")
z.fy=H.h(z.y.i(0,"projViewObjMatrix"),"$isau")
a.dA(z)}this.a=z}if(b.e==null){b.d.ar()
b.d.aP()
b.d.bq()
y=new Z.dy()
y.a=new H.b2(0,0,[P.o,Z.cj])
b.e=y}y=this.a
y.aq(a)
x=this.r2
w=y.dy
w.a.uniform1f(w.d,x)
x=this.b
w=y.cy
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.gJ(x)
w=y.fr
w.toString
w.a6(x.a4(0,!0))
x=a.gem()
w=y.fx
w.toString
w.a6(x.a4(0,!0))
x=a.gef()
y=y.fy
y.toString
y.a6(x.a4(0,!0))
y=b.e
if(y instanceof Z.dy){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{w.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(this.Q)this.dm(a,y,b.c,"shapeFill",this.gfQ(),this.d,this.c)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(this.ch)this.dm(a,y,b.c,"wireFrame",this.gfY(),this.f,this.e)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dH()},
dm:function(a,b,c,d,e,f,g){var z,y
H.l(e,{func:1,ret:F.al,args:[F.al]})
z=b.a.i(0,d)
if(z==null){z=this.eO(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
y.db.cR(f)
y.dx.cR(g)
z.hX(a)},
eO:function(a,b){var z,y,x,w
H.f(b,"$isal")
z=a.a
y=$.$get$aH()
x=$.$get$aG()
w=b.dC(new Z.eO(z),new Z.b5(y.a|x.a|$.$get$aF().a|$.$get$b6().a))
w.ac($.$get$aH()).e=this.a.z.c
w.ac($.$get$aG()).e=this.a.Q.c
w.ac($.$get$b6()).e=this.a.ch.c
w.ac($.$get$aF()).e=this.a.cx.c
return w},
iW:[function(a){var z,y,x
z=F.aC()
y=a.a
y.toString
x=H.l(new O.hg(z,new V.K(1,1,1,1)),{func:1,ret:-1,args:[F.T]})
C.a.I(y.c,x)
x=a.d
x.toString
y=H.l(new O.hh(z),{func:1,ret:-1,args:[F.Y]})
C.a.I(x.b,y)
return z},"$1","gfQ",4,0,36],
fZ:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.aC()
z.a=new V.K(0,0.7,1,1)
x=a.a
x.toString
z=H.l(new O.hk(z,y),{func:1,ret:-1,args:[F.T]})
C.a.I(x.c,z)
z=new O.hj(y)
x=a.c
x.toString
w=H.l(new O.hl(y,z),{func:1,ret:-1,args:[F.ar]})
C.a.I(x.b,w)
w=a.d
w.toString
z=H.l(new O.hm(y,z),{func:1,ret:-1,args:[F.Y]})
C.a.I(w.b,z)
return y},function(a){return this.fZ(a,null)},"j_","$2$color","$1","gfY",4,3,37],
q:{
dR:function(){var z=new O.he()
z.b=new V.x(0,0,-1)
z.c=new V.K(0.2,0.3,0.4,1)
z.d=new V.K(0.1,0.2,0.3,1)
z.e=new V.K(0.7,0.7,0.7,1)
z.f=new V.K(0.3,0.3,0.3,1)
z.r=new V.K(0.5,0.5,0.5,1)
z.x=new V.K(0.5,0.5,0.5,1)
z.y=new V.K(1,1,1,1)
z.z=new V.K(0.8,0.8,0.8,1)
z.Q=!1
z.ch=!1
z.cx=!1
z.cy=!1
z.db=!1
z.dx=!1
z.dy=!1
z.fr=!1
z.fx=!1
z.fy=!1
z.go=!1
z.id=!1
z.k1=!1
z.k2=!1
z.k3=!1
z.k4=!1
z.r1=!1
z.r2=1
return z}}},hg:{"^":"q:13;a,b",
$1:function(a){var z,y
H.f(a,"$isT")
z=this.a.a
y=a.cm()
y.sT(0,this.b)
y.sbp(new V.x(0,0,0))
z.h(0,y)}},hh:{"^":"q:6;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isY")
z=this.a
y=z.a
x=a.a
x.a.a.t()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.t()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.t()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.dv(0,w,v,u)}},hk:{"^":"q:13;a,b",
$1:function(a){var z,y
H.f(a,"$isT")
z=this.b.a
y=a.cm()
y.sT(0,this.a.a)
y.sbp(new V.x(0,0,0))
z.h(0,y)}},hj:{"^":"q:39;a",
$2:function(a,b){if(a.hG(b)==null)this.a.c.c9(0,a,b)}},hl:{"^":"q:40;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isar")
z=this.a
y=z.a
x=a.a
x.a.a.t()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.t()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.e(z,x)
this.b.$2(w,z[x])}},hm:{"^":"q:6;a,b",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isY")
z=this.a
y=z.a
x=a.a
x.a.a.t()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.t()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.t()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.e(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},hL:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
V:[function(a){var z
H.f(a,"$isu")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.V(null)},"ip","$1","$0","geH",0,2,0],
fH:[function(a){H.f(a,"$isu")
this.a=null
this.V(a)},function(){return this.fH(null)},"iV","$1","$0","gfG",0,2,0],
iw:[function(a,b){var z=V.aA
z=new D.c4(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.V(z)},"$2","gf7",8,0,22],
ix:[function(a,b){var z=V.aA
z=new D.c5(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.V(z)},"$2","gf8",8,0,22],
dc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a3(z.e.length+3,4)*4
x=C.f.a3(z.f.length+3,4)*4
w=C.f.a3(z.r.length+3,4)*4
v=C.f.a3(z.x.length+3,4)*4
u=C.f.a3(z.y.length+3,4)*4
t=C.f.a3(z.z.length+3,4)*4
s=C.f.a3(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.j(q.a)+C.f.j(p.a)+C.f.j(o.a)+C.f.j(n.a)+C.f.j(m.a)+C.f.j(l.a)+C.f.j(k.a)+C.f.j(j.a)+C.f.j(i.a)+"_"
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
a6=$.$get$aH()
if(c){z=$.$get$aG()
a6=new Z.b5(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.b5(a6.a|z.a)}if(a){z=$.$get$aW()
a6=new Z.b5(a6.a|z.a)}if(a0){z=$.$get$aX()
a6=new Z.b5(a6.a|z.a)}if(a2){z=$.$get$aV()
a6=new Z.b5(a6.a|z.a)}return new A.hO(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.t(a,"$isd",[T.ek],"$asd")},
a9:function(a,b){var z
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.F();)C.o.a9(z.d,b)},
ei:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dc()
y=H.f(a.fr.i(0,z.am),"$ise2")
if(y==null){y=A.hK(z,a.a)
a.dA(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bs
z=b.e
if(!(z instanceof Z.cj)){b.e=null
z=null}if(z==null||!z.d.w(0,w)){z=x.r1
if(z)b.d.ar()
v=x.r2
if(v)b.d.aP()
u=x.ry
if(u)b.d.bq()
t=b.d.dC(new Z.eO(a.a),w)
t.ac($.$get$aH()).e=this.a.Q.c
if(z)t.ac($.$get$aG()).e=this.a.cx.c
if(v)t.ac($.$get$aF()).e=this.a.ch.c
if(x.rx)t.ac($.$get$aW()).e=this.a.cy.c
if(u)t.ac($.$get$aX()).e=this.a.db.c
if(x.x1)t.ac($.$get$aV()).e=this.a.dx.c
b.e=t}z=T.ek
s=H.c([],[z])
this.a.aq(a)
if(x.fx){v=this.a
u=a.dx
u=u.gJ(u)
v=v.dy
v.toString
v.a6(u.a4(0,!0))}if(x.fy){v=this.a
u=a.gem()
v=v.fr
v.toString
v.a6(u.a4(0,!0))}v=this.a
u=a.gef()
v=v.fy
v.toString
v.a6(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a6(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a6(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a6(C.o.a4(u,!0))}if(x.as>0){r=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,r)
for(v=[P.w],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.e(p,q)
p=p[q]
u.toString
H.f(p,"$isaA")
u=u.r1
if(q>=u.length)return H.e(u,q)
u=u[q]
o=new Float32Array(H.bT(H.t(p.a4(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.S(s,this.f.d)
v=this.a
u=this.f.d
v.ag(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.S(s,this.f.e)
v=this.a
u=this.f.e
v.ab(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.S(s,this.r.d)
v=this.a
u=this.r.d
v.ag(v.y1,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.S(s,this.r.e)
v=this.a
u=this.r.e
v.ab(v.y2,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.am
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.S(s,this.x.d)
v=this.a
u=this.x.d
v.ag(v.bs,v.bt,u)
u=this.a
v=this.x.f
u=u.am
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.S(s,this.x.e)
v=this.a
u=this.x.e
v.ab(v.dI,v.bt,u)
u=this.a
v=this.x.f
u=u.am
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bu
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.S(s,this.y.d)
v=this.a
u=this.y.d
v.ag(v.dJ,v.bv,u)
u=this.a
v=this.y.f
u=u.bu
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.S(s,this.y.e)
v=this.a
u=this.y.e
v.ab(v.dK,v.bv,u)
u=this.a
v=this.y.f
u=u.bu
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bw
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.by
u.a.uniform1f(u.d,n)
break
case C.c:this.S(s,this.z.d)
v=this.a
u=this.z.d
v.ag(v.dL,v.bx,u)
u=this.a
v=this.z.f
u=u.bw
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.by
v.a.uniform1f(v.d,n)
break
case C.d:this.S(s,this.z.e)
v=this.a
u=this.z.e
v.ab(v.dM,v.bx,u)
u=this.a
v=this.z.f
u=u.bw
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.by
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dX
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.cp
if(l>=p.length)return H.e(p,l)
i=p[l]
p=m.el(j.gbr(j))
n=p.a
h=p.b
g=p.c
g=p.p(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gT(j)
h=i.c
n=g.gba()
p=g.gaU()
g=g.gaZ()
h.a.uniform3f(h.d,n,p,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dY
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.cq
if(l>=p.length)return H.e(p,l)
i=p[l]
p=j.gb9(j)
n=i.b
h=p.gcN(p)
g=p.gcO(p)
p=p.gcP(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bf(j.gb9(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gT(j)
g=i.d
h=p.gba()
n=p.gaU()
p=p.gaZ()
g.a.uniform3f(g.d,h,n,p)
p=j.gcd()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gce()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcf()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dZ
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.cr
if(l>=p.length)return H.e(p,l)
i=p[l]
p=j.gb9(j)
n=i.b
h=p.gcN(p)
g=p.gcO(p)
p=p.gcP(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbr(j).j2()
g=i.c
h=p.gaj(p)
n=p.gak(p)
p=p.gal()
g.a.uniform3f(g.d,h,n,p)
p=m.bf(j.gb9(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gT(j)
n=i.e
h=p.gba()
g=p.gaU()
p=p.gaZ()
n.a.uniform3f(n.d,h,g,p)
p=j.gj1()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gj0()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcd()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gce()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcf()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.e_
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
n=this.a.cs
if(l>=n.length)return H.e(n,l)
i=n[l]
n=j.gbc()
H.t(s,"$isd",p,"$asd")
if(!C.a.b_(s,n)){n.sb3(0,s.length)
C.a.h(s,n)}n=j.gbr(j)
h=i.d
g=n.gaj(n)
f=n.gak(n)
n=n.gal()
h.a.uniform3f(h.d,g,f,n)
n=j.gaF()
f=i.b
g=n.gaj(n)
h=n.gak(n)
n=n.gal()
f.a.uniform3f(f.d,g,h,n)
n=j.gbb(j)
h=i.c
g=n.gaj(n)
f=n.gak(n)
n=n.gal()
h.a.uniform3f(h.d,g,f,n)
n=m.el(j.gbr(j))
f=n.a
g=n.b
h=n.c
h=n.p(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gT(j)
g=i.f
f=h.gba()
n=h.gaU()
h=h.gaZ()
g.a.uniform3f(g.d,f,n,h)
h=j.gbc()
n=h.gb4(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gb4(h)
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gb3(h))
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.e0
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.y,u=v.length,p=[P.w],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.ct
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gbc()
H.t(s,"$isd",n,"$asd")
if(!C.a.b_(s,h)){h.sb3(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gJ(j))
h=j.gJ(j).bf(new V.a0(0,0,0))
g=i.b
f=h.gcN(h)
d=h.gcO(h)
h=h.gcP(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bf(new V.a0(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.e6(0)
d=i.d
o=new Float32Array(H.bT(H.t(new V.e3(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gT(j)
h=i.e
f=d.gba()
g=d.gaU()
d=d.gaZ()
h.a.uniform3f(h.d,f,g,d)
d=j.gbc()
h=d.gb4(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gb4(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gb3(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcd()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gce()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcf()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.e1
v.a.uniform1i(v.d,r)
v=a.db
m=v.gJ(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.cu
if(l>=p.length)return H.e(p,l)
i=p[l]
p=j.gbc()
H.t(s,"$isd",z,"$asd")
if(!C.a.b_(s,p)){p.sb3(0,s.length)
C.a.h(s,p)}p=j.gb9(j)
n=i.b
h=p.gcN(p)
g=p.gcO(p)
p=p.gcP(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbr(j)
g=i.c
h=p.gaj(p)
n=p.gak(p)
p=p.gal()
g.a.uniform3f(g.d,h,n,p)
p=j.gaF()
n=i.d
h=p.gaj(p)
g=p.gak(p)
p=p.gal()
n.a.uniform3f(n.d,h,g,p)
p=j.gbb(j)
g=i.e
h=p.gaj(p)
n=p.gak(p)
p=p.gal()
g.a.uniform3f(g.d,h,n,p)
p=m.bf(j.gb9(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gbc()
n=p.gb4(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gb4(p)
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gb3(p))
p=i.x
p.a.uniform1i(p.d,0)}p=j.gT(j)
n=i.y
h=p.gba()
g=p.gaU()
p=p.gaZ()
n.a.uniform3f(n.d,h,g,p)
p=j.gj9()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gja()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcd()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gce()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcf()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.c:this.S(s,this.Q.d)
z=this.a
v=this.Q.d
z.ag(z.dN,z.bz,v)
break
case C.d:this.S(s,this.Q.e)
z=this.a
v=this.Q.e
z.ab(z.dO,z.bz,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gJ(v).e6(0)
a.Q=v}z=z.id
z.toString
z.a6(v.a4(0,!0))}if(x.dy){this.S(s,this.ch)
z=this.a
v=this.ch
z.ab(z.dP,z.dQ,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bA
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.c:this.S(s,this.cx.d)
z=this.a
v=this.cx.d
z.ag(z.dR,z.bB,v)
v=this.a
z=this.cx.f
v=v.bA
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.S(s,this.cx.e)
z=this.a
v=this.cx.e
z.ab(z.dS,z.bB,v)
v=this.a
z=this.cx.f
v=v.bA
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bD
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bC
v.a.uniform1f(v.d,p)
break
case C.c:this.S(s,this.cy.d)
z=this.a
v=this.cy.d
z.ag(z.dT,z.bE,v)
v=this.a
z=this.cy.f
v=v.bD
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bC
z.a.uniform1f(z.d,p)
break
case C.d:this.S(s,this.cy.e)
z=this.a
v=this.cy.e
z.ab(z.dU,z.bE,v)
v=this.a
z=this.cy.f
v=v.bD
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bC
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bF
z.a.uniform1f(z.d,u)
break
case C.c:this.S(s,this.db.d)
z=this.a
u=this.db.d
z.ag(z.dV,z.bG,u)
u=this.a
z=this.db.f
u=u.bF
u.a.uniform1f(u.d,z)
break
case C.d:this.S(s,this.db.e)
z=this.a
u=this.db.e
z.ab(z.dW,z.bG,u)
u=this.a
z=this.db.f
u=u.bF
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q)s[q].aq(a)
z=H.h(b.e,"$iscj")
z.aq(a)
z.an(a)
z.cL(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q)s[q].cL(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.dH()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dc().am},
q:{
bf:function(){var z,y,x
z=new O.hL()
y=O.cM(V.aA)
z.e=y
y.aV(z.gf7(),z.gf8())
y=new O.bg(z,"emission")
y.c=C.b
y.f=new V.a1(0,0,0)
z.f=y
y=new O.bg(z,"ambient")
y.c=C.b
y.f=new V.a1(0,0,0)
z.r=y
y=new O.bg(z,"diffuse")
y.c=C.b
y.f=new V.a1(0,0,0)
z.x=y
y=new O.bg(z,"invDiffuse")
y.c=C.b
y.f=new V.a1(0,0,0)
z.y=y
y=new O.hQ(z,"specular")
y.c=C.b
y.f=new V.a1(0,0,0)
y.ch=100
z.z=y
y=new O.hN(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bg(z,"reflect")
y.c=C.b
y.f=new V.a1(0,0,0)
z.cx=y
y=new O.hP(z,"refract")
y.c=C.b
y.f=new V.a1(0,0,0)
y.ch=1
z.cy=y
y=new O.hM(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hw()
y.bg(D.a3)
y.e=H.c([],[D.fX])
y.f=H.c([],[D.i3])
y.r=H.c([],[D.iF])
y.x=H.c([],[D.iP])
y.y=H.c([],[D.iQ])
y.z=H.c([],[D.iR])
y.Q=null
y.ch=null
y.cS(y.gf6(),y.gfp(),y.gfs())
z.dx=y
x=y.Q
if(x==null){x=D.Q()
y.Q=x
y=x}else y=x
y.h(0,z.gfG())
y=z.dx
x=y.ch
if(x==null){x=D.Q()
y.ch=x
y=x}else y=x
y.h(0,z.geH())
z.dy=null
return z}}},hM:{"^":"cV;0f,a,b,0c,0d,0e",
c3:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.I(this.b,y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aW:function(){this.cY()
this.c3(1)},
sbJ:function(a,b){var z
if(b<=0)this.hu(0)
else if(this.c===C.b){this.c=C.e
this.cZ()
this.c3(1)
z=this.a
z.a=null
z.V(null)}this.c3(b)}},cV:{"^":"a;",
aW:["cY",function(){}],
bl:["cZ",function(){}],
fJ:function(a){},
fK:function(a){},
hu:function(a){var z
if(this.c!==C.b){this.c=C.b
z=this.a
z.a=null
z.V(null)}this.aW()
this.fJ(null)
this.fK(null)
this.a.V(null)}},hN:{"^":"cV;a,b,0c,0d,0e"},bg:{"^":"cV;0f,a,b,0c,0d,0e",
c4:function(a){var z,y
if(!J.D(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.V(y)}},
aW:["d_",function(){this.cY()
this.c4(new V.a1(0,0,0))}],
bl:["d0",function(){this.cZ()
this.c4(new V.a1(1,1,1))}],
sT:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.bl()
z=this.a
z.a=null
z.V(null)}this.c4(b)}},hP:{"^":"bg;0ch,0f,a,b,0c,0d,0e",
dq:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aW:function(){this.d_()
this.dq(1)},
bl:function(){this.d0()
this.dq(1)}},hQ:{"^":"bg;0ch,0f,a,b,0c,0d,0e",
dr:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.V(z)}},
aW:function(){this.d_()
this.dr(100)},
bl:function(){this.d0()
this.dr(100)}},cc:{"^":"a;"}}],["","",,T,{"^":"",ek:{"^":"cH;"},iO:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fC:{"^":"a;",
b5:function(a,b){return!0},
j:function(a){return"all"},
$isc8:1},c8:{"^":"a;"},e1:{"^":"a;",
b5:["ex",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b5(0,b))return!0
return!1}],
j:["cX",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isc8:1},bL:{"^":"e1;0a",
b5:function(a,b){return!this.ex(0,b)},
j:function(a){return"!["+this.cX(0)+"]"}},is:{"^":"a;0a",
eA:function(a){var z,y
if(a.a.length<=0)throw H.b(P.j("May not create a SetMatcher with zero characters."))
z=new H.b2(0,0,[P.A,P.ab])
for(y=new H.dZ(a,a.gl(a),0,[H.aI(a,"v",0)]);y.F();)z.m(0,y.d,!0)
this.a=z},
b5:function(a,b){return this.a.dF(0,b)},
j:function(a){var z=this.a
return P.d2(new H.dY(z,[H.z(z,0)]),0,null)},
$isc8:1,
q:{
aa:function(a){var z=new V.is()
z.eA(a)
return z}}},ef:{"^":"a;a,b,0c,0d",
ghQ:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eq(this.a.L(0,b))
w.a=H.c([],[V.c8])
w.c=!1
C.a.h(this.c,w)
return w},
hF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b5(0,a))return w}return},
j:function(a){return this.b}},en:{"^":"a;a,b,c",
j:function(a){var z,y
z=H.ft(this.b,"\n","\\n")
y=H.ft(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eo:{"^":"a;a,b,0c",
j:function(a){return this.b}},iV:{"^":"a;0a,0b,0c",
L:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.ef(this,b)
z.c=H.c([],[V.eq])
this.a.m(0,b,z)}return z},
bd:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.eo(this,a)
y=P.o
z.c=new H.b2(0,0,[y,y])
this.b.m(0,a,z)}return z},
im:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.en])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bi(a,t)
r=y.hF(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d2(w,0,null)
throw H.b(P.j("Untokenizable string [state: "+y.ghQ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d2(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.en(o==null?p.b:o,q,t)}++t}}}},eq:{"^":"e1;b,0c,0a",
j:function(a){return this.b.b+": "+this.cX(0)}}}],["","",,X,{"^":"",dA:{"^":"a;",$isaT:1},hc:{"^":"ei;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
q:{
cn:function(a,b,c,d,e,f,g){var z,y
z=new X.hc()
y=new V.K(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ec(0,0,1,1)
z.r=y
return z}}},i0:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
aI:[function(a){var z
H.f(a,"$isu")
z=this.f
if(!(z==null))z.v(a)},function(){return this.aI(null)},"iq","$1","$0","gbh",0,2,0],
sU:function(a){var z,y
if(!J.D(this.b,a)){z=this.b
if(z!=null)z.gu().E(0,this.gbh())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gbh())
z=new D.I("mover",y,this.b,this,[U.ac])
z.b=!0
this.aI(z)}},
saE:function(a){var z,y
if(!J.D(this.a,a)){z=this.a
if(z!=null)z.gu().E(0,this.gbh())
y=this.a
this.a=a
if(a!=null)a.gu().h(0,this.gbh())
z=new D.I("premover",y,this.a,this,[U.ac])
z.b=!0
this.aI(z)}},
$isaT:1,
$isdA:1,
q:{
bj:function(a,b,c,d,e){var z,y,x
z=new X.i0()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.saE(e)
z.sU(c)
y=z.c
if(!$.n.$2(y,b)){x=z.c
z.c=b
y=new D.I("fov",x,b,z,[P.w])
y.b=!0
z.aI(y)}y=z.d
if(!$.n.$2(y,d)){x=z.d
z.d=d
y=new D.I("near",x,d,z,[P.w])
y.b=!0
z.aI(y)}y=z.e
if(!$.n.$2(y,a)){x=z.e
z.e=a
y=new D.I("far",x,a,z,[P.w])
y.b=!0
z.aI(y)}return z}}},ei:{"^":"a;"}}],["","",,V,{"^":"",ix:{"^":"a;0a,0b",
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
t=W.aj
W.a5(z,"scroll",H.l(new V.iA(x),{func:1,ret:-1,args:[t]}),!1,t)},
hn:function(a,b,c){var z,y,x,w
a=H.B(C.f.ht(a,0,4))
if(c.length===0)c=P.f3(C.r,b,C.n,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.fD(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
cb:function(a,b){return this.hn(a,b,"")},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.t(a,"$isd",[P.o],"$asd")
this.fO()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.im(C.a.hL(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fs(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.f3(C.r,s,C.n,!1)
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
cc:function(a){var z=W.dB(null,null)
z.className="pageLargeCanvas"
z.id=a
this.a.appendChild(z)},
fO:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iV()
y=P.o
z.a=new H.b2(0,0,[y,V.ef])
z.b=new H.b2(0,0,[y,V.eo])
z.c=z.L(0,"Start")
y=z.L(0,"Start").D(0,"Bold")
x=V.aa(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").D(0,"Bold")
x=new V.bL()
w=[V.c8]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").D(0,"BoldEnd")
x=V.aa(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"Italic")
x=V.aa(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").D(0,"Italic")
x=new V.bL()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").D(0,"ItalicEnd")
x=V.aa(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"Code")
x=V.aa(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").D(0,"Code")
x=new V.bL()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").D(0,"CodeEnd")
x=V.aa(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"LinkHead")
x=V.aa(new H.a6("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").D(0,"LinkTail")
x=V.aa(new H.a6("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").D(0,"LinkEnd")
y=V.aa(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").D(0,"LinkHead")
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").D(0,"LinkEnd")
y=V.aa(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").D(0,"LinkTail")
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").D(0,"Other").a,new V.fC())
x=z.L(0,"Other").D(0,"Other")
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.bd("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.bd("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.bd("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.bd("Link")
x=z.L(0,"Other")
x.d=x.a.bd("Other")
this.b=z},
q:{
iy:function(a,b){var z=new V.ix()
z.eB(a,!0)
return z}}},iA:{"^":"q:41;a",
$1:function(a){P.em(C.l,new V.iz(this.a))}},iz:{"^":"q:3;a",
$0:function(){var z,y,x
z=C.h.ao(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
ln:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
y=E.d3(a,!0,!0,!0,!1)
x=O.bf()
w=x.f
w.sT(0,new V.a1(0.4,0.6,0.8))
v=O.bf()
w=v.f
w.sT(0,new V.a1(0.8,0.6,0.4))
v.db.sbJ(0,0.3)
u=O.bf()
w=u.f
w.sT(0,new V.a1(0.4,0.6,0.8))
u.db.sbJ(0,0.3)
t=U.P(null)
s=U.P(null)
r=E.aq(null,!0,null,"",null,null)
r.sa5(x)
w=F.aC()
w.aD(F.cE(!0,2,null,2,0))
w.aD(F.fe(-1,!1,!0,0,null,36))
r.sa1(0,w)
q=E.aq(null,!0,null,"",null,null)
q.sa5(v)
q.sa1(0,F.dp(null))
w=U.aL(null)
w.h(0,U.P(V.bh(1.3,1.3,1.3,1)))
w.h(0,U.P(V.bK(-1.5707963267948966)))
w.h(0,t)
q.sU(w)
p=E.aq(null,!0,null,"",null,null)
p.sa1(0,F.dp(null))
w=U.aL(null)
w.h(0,U.P(V.a8(0,0,0.1)))
p.sU(w)
o=E.aq(null,!0,null,"",null,null)
o.sa1(0,F.dp(null))
w=U.aL(null)
w.h(0,s)
o.sU(w)
n=M.bE(null,null,null,null)
n.sbI(0,X.cn(!1,!0,!1,null,2000,null,0))
w=X.bj(2000,1.0471975511965976,null,0.1,null)
w.saE(U.P(V.a8(-0.5,0,0)))
w.sU(U.P(V.a8(0,0,5)))
n.saA(w)
n.d.h(0,q)
n.d.h(0,r)
m=M.bE(null,null,null,null)
w=X.bj(2000,1.0471975511965976,null,0.1,null)
w.saE(U.P(V.a8(0.5,0,0)))
w.sU(U.P(V.a8(0,0,5)))
m.saA(w)
m.sa5(u)
m.d.h(0,o)
m.d.h(0,p)
z.a=0.5
z.b=!1
y.r.c.gb2().h(0,new M.lo(z))
y.r.c.gaF().h(0,new M.lp(z))
y.r.c.gb6().h(0,new M.lq(z,t,p,o,s))
y.sbK(M.cO(H.c([m,n],[M.at])))},
lr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z={}
y=E.d3(a,!0,!0,!0,!1)
x=O.dR()
x.scU(!0)
x.scT(!0)
x.sdG(new V.K(0.2,0.3,0.4,0.2))
x.sdB(new V.K(0.1,0.2,0.3,0.2))
w=O.bf()
v=w.f
v.sT(0,new V.a1(0.8,0.6,0.4))
w.db.sbJ(0,0.3)
u=O.bf()
v=u.f
v.sT(0,new V.a1(0.4,0.6,0.8))
t=U.P(null)
s=U.P(null)
r=U.aL(null)
r.h(0,U.P(V.bK(0.4)))
r.h(0,U.P(V.cX(0.4)))
q=E.aq(null,!0,null,"",null,null)
q.sa5(x)
v=F.aC()
v.aD(F.fd(1,null,null,1))
v.aD(F.fl(2))
q.sa1(0,v)
q.sU(r)
p=E.aq(null,!0,null,"",null,null)
p.sa5(w)
p.sa1(0,F.cE(!1,2,null,2,0))
v=U.aL(null)
v.h(0,U.P(V.bh(1.3,1.3,1.3,1)))
v.h(0,U.P(V.bK(-1.5707963267948966)))
v.h(0,t)
v.h(0,r)
p.sU(v)
o=E.aq(null,!0,null,"",null,null)
o.sa1(0,F.cE(!0,2,null,2,0))
n=E.aq(null,!0,null,"",null,null)
n.sa1(0,F.fe(-1,!1,!0,0,null,36))
v=U.aL(null)
v.h(0,s)
n.sU(v)
m=M.bE(null,null,null,null)
m.sbI(0,X.cn(!1,!0,!1,null,2000,null,0))
v=X.bj(2000,1.0471975511965976,null,0.1,null)
v.saE(U.P(V.a8(-0.5,0,0)))
v.sU(U.P(V.a8(0,0,5)))
m.saA(v)
m.d.h(0,p)
m.d.h(0,q)
l=M.bE(null,null,null,null)
v=X.bj(2000,1.0471975511965976,null,0.1,null)
v.saE(U.P(V.a8(0.5,0,0)))
v.sU(U.P(V.a8(0,0,5)))
l.saA(v)
l.sa5(u)
l.d.h(0,n)
l.d.h(0,o)
z.a=0.5
z.b=!1
y.r.c.gb2().h(0,new M.ls(z))
y.r.c.gaF().h(0,new M.lt(z))
y.r.c.gb6().h(0,new M.lu(z,t,o,n,s))
y.sbK(M.cO(H.c([l,m],[M.at])))},
lv:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=E.d3(b1,!0,!0,!0,!1)
x=O.bf()
w=x.f
w.sT(0,new V.a1(0.4,0.6,0.8))
v=O.bf()
w=v.f
w.sT(0,new V.a1(0.8,0.6,0.4))
v.db.sbJ(0,0.3)
u=O.dR()
u.scU(!0)
u.scT(!0)
u.sdG(new V.K(0.2,0.3,0.4,0.2))
u.sdB(new V.K(0.1,0.2,0.3,0.2))
t=U.P(null)
s=U.P(null)
r=U.aL(null)
r.h(0,U.P(V.bK(0.4)))
r.h(0,U.P(V.cX(0.4)))
q=U.aL(null)
p=F.aC()
o=p.a.W(1,-1,1)
n=p.a.W(1,1,1)
m=p.a.W(1,1,-1)
l=p.a.W(1,-1,-1)
k=p.a.W(-1,-1,1)
j=p.a.W(-1,1,1)
i=p.a.W(-1,1,-1)
h=p.a.W(-1,-1,-1)
g=p.a.W(0.5,-0.5,0.5)
f=p.a.W(0.5,0.5,0.5)
e=p.a.W(0.5,0.5,-0.5)
d=p.a.W(0.5,-0.5,-0.5)
c=p.a.W(-0.5,-0.5,0.5)
b=p.a.W(-0.5,0.5,0.5)
a=p.a.W(-0.5,0.5,-0.5)
a0=p.a.W(-0.5,-0.5,-0.5)
p.c.ho(H.c([o,n,n,m,m,l,l,o,k,j,j,i,i,h,h,k,g,f,f,e,e,d,d,g,c,b,b,a,a,a0,a0,c,o,k,n,j,m,i,l,h,g,c,f,b,e,a,d,a0,o,g,n,f,m,e,l,d,k,c,j,b,i,a,h,a0],[F.T]))
a1=E.aq(null,!0,null,"",null,null)
a1.sa5(x)
a1.sa1(0,p)
a1.sU(r)
a2=E.aq(null,!0,null,"",null,null)
a2.sa5(v)
a2.sa1(0,F.cE(!1,2,null,2,0))
w=U.aL(null)
w.h(0,U.P(V.bh(1.1,1.1,1.1,1)))
w.h(0,U.P(V.bK(-1.5707963267948966)))
w.h(0,t)
w.h(0,r)
a2.sU(w)
a3=E.aq(null,!0,null,"",null,null)
a3.sa1(0,F.fd(1,null,null,1))
a3.sU(q)
a4=E.aq(null,!0,null,"",null,null)
a4.sa1(0,F.fl(2))
w=U.aL(null)
w.h(0,s)
w.h(0,q)
a4.sU(w)
a5=M.bE(null,null,null,null)
a5.sbI(0,X.cn(!1,!0,!1,null,2000,null,0))
w=X.bj(2000,1.0471975511965976,null,0.1,null)
w.saE(U.P(V.a8(-0.5,0,0)))
w.sU(U.P(V.a8(0,0,5)))
a5.saA(w)
a5.d.h(0,a1)
a5.d.h(0,a2)
a6=M.bE(null,null,null,null)
w=X.bj(2000,1.0471975511965976,null,0.1,null)
w.saE(U.P(V.a8(0.5,0,0)))
w.sU(U.P(V.a8(0,0,5)))
a6.saA(w)
a6.sa5(u)
a6.d.h(0,a4)
a6.d.h(0,a3)
z.a=0.5
z.b=!1
y.r.c.gb2().h(0,new M.lw(z))
y.r.c.gaF().h(0,new M.lx(z))
y.r.c.gb6().h(0,new M.ly(z,t,a3,a4,s))
z=y.r
w=new U.jd()
a7=U.cN()
a7.scM(0,!0)
a7.scA(6.283185307179586)
a7.scC(0)
a7.sZ(0,0)
a7.scB(100)
a7.sP(0)
a7.sco(0.5)
w.b=a7
a8=w.gaM()
a7.gu().h(0,a8)
a7=U.cN()
a7.scM(0,!0)
a7.scA(6.283185307179586)
a7.scC(0)
a7.sZ(0,0)
a7.scB(100)
a7.sP(0)
a7.sco(0.5)
w.c=a7
a7.gu().h(0,a8)
w.d=null
w.e=!1
w.f=!1
w.r=!1
w.x=2.5
w.y=2.5
w.z=2
w.Q=4
w.cx=!1
w.ch=!1
w.cy=0
w.db=0
w.dx=null
w.dy=0
w.fr=null
w.fx=null
a9=new X.aN(!1,!1,!1)
b0=w.d
w.d=a9
a7=[X.aN]
a8=new D.I("modifiers",b0,a9,w,a7)
a8.b=!0
w.O(a8)
a8=w.f
if(a8!==!1){w.f=!1
a8=new D.I("invertX",a8,!1,w,[P.ab])
a8.b=!0
w.O(a8)}a8=w.r
if(a8!==!0){w.r=!0
a8=new D.I("invertY",a8,!0,w,[P.ab])
a8.b=!0
w.O(a8)}w.aY(z)
q.h(0,w)
z=y.r
w=new U.jc()
a8=U.cN()
a8.scM(0,!0)
a8.scA(6.283185307179586)
a8.scC(0)
a8.sZ(0,0)
a8.scB(100)
a8.sP(0)
a8.sco(0.2)
w.b=a8
a8.gu().h(0,w.gaM())
w.c=null
w.d=!1
w.e=2.5
w.f=2
w.r=4
w.y=!1
w.x=!1
w.z=0
w.Q=null
w.ch=0
w.cx=null
w.cy=null
a9=new X.aN(!0,!1,!1)
b0=w.c
w.c=a9
a8=new D.I("modifiers",b0,a9,w,a7)
a8.b=!0
w.O(a8)
w.aY(z)
q.h(0,w)
z=y.r
w=new U.je()
w.c=0.01
w.d=0
w.e=0
a9=new X.aN(!1,!1,!1)
w.b=a9
a7=new D.I("modifiers",null,a9,w,a7)
a7.b=!0
w.O(a7)
w.aY(z)
q.h(0,w)
y.sbK(M.cO(H.c([a6,a5],[M.at])))},
fm:function(){var z,y
z=V.iy("Hypersphere",!0)
y=[P.o]
z.ah(H.c(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],y))
z.cb(3,"2D: circle and square")
z.ah(H.c(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],y))
z.cc("target2D")
z.ah(H.c(["_Click and drag to move the location of the slice._"],y))
z.cb(3,"3D: sphere and cube")
z.ah(H.c(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],y))
z.cc("target3D")
z.ah(H.c(["_Click and drag to move the location of the slice._"],y))
z.cb(3,"4D: hypersphere and hypercube")
z.ah(H.c(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],y))
z.cc("target4D")
z.ah(H.c(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],y))
z.ah(H.c(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],y))
z.ah(H.c(["\xab[Back to Examples|../]"],y))
M.ln("target2D")
M.lr("target3D")
M.lv("target4D")},
lo:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!0}},
lp:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!1}},
lq:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.h(H.f(a,"$isu"),"$isaS")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.S(w.a,w.b).k(0,2).p(0,x.ga_()).b
if(typeof x!=="number")return H.p(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sJ(0,V.a8(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sJ(0,V.bh(u,u,u,1))
x.b=!0
w.b=!0}}},
ls:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!0}},
lt:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!1}},
lu:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.h(H.f(a,"$isu"),"$isaS")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.S(w.a,w.b).k(0,2).p(0,x.ga_()).b
if(typeof x!=="number")return H.p(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sJ(0,V.a8(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sJ(0,V.bh(u,u,u,1))
x.b=!0
w.b=!0}}},
lw:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!0}},
lx:{"^":"q:1;a",
$1:function(a){H.f(a,"$isu")
this.a.b=!1}},
ly:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.h(H.f(a,"$isu"),"$isaS")
z=this.a
if(!z.b)return
y=a.c
x=a.d
if(new V.H((x.a-y.a-y.c*0.5)*2,(x.b-y.b-y.d*0.5)*2).p(0,y.ga_()).a>0)return
w=z.a
x=x.G(0,a.z)
y=new V.S(x.a,x.b).k(0,2).p(0,y.ga_()).b
if(typeof y!=="number")return H.p(y)
v=w+y
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sJ(0,V.a8(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sJ(0,V.bh(u,u,u,1))
x.b=!0
w.b=!0}a.b=!1}}},1]]
setupProgram(dart,0,0)
J.R=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.hr.prototype}if(typeof a=="string")return J.cp.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cB(a)}
J.bz=function(a){if(typeof a=="string")return J.cp.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cB(a)}
J.dl=function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cB(a)}
J.fg=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cu.prototype
return a}
J.l6=function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.cp.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cu.prototype
return a}
J.bZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cB(a)}
J.D=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).w(a,b)}
J.aJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fg(a).aG(a,b)}
J.fv=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fg(a).a0(a,b)}
J.fw=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lf(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bz(a).i(a,b)}
J.fx=function(a,b,c){return J.bZ(a).fD(a,b,c)}
J.fy=function(a,b,c,d){return J.bZ(a).dw(a,b,c,d)}
J.fz=function(a,b){return J.l6(a).ai(a,b)}
J.cF=function(a,b,c){return J.bz(a).hw(a,b,c)}
J.cG=function(a,b){return J.dl(a).H(a,b)}
J.fA=function(a,b){return J.dl(a).I(a,b)}
J.b9=function(a){return J.R(a).gX(a)}
J.c0=function(a){return J.dl(a).gY(a)}
J.ba=function(a){return J.bz(a).gl(a)}
J.fB=function(a,b){return J.bZ(a).ia(a,b)}
J.af=function(a){return J.R(a).j(a)}
I.dq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cK.prototype
C.y=J.r.prototype
C.a=J.be.prototype
C.f=J.dT.prototype
C.o=J.dU.prototype
C.h=J.c6.prototype
C.i=J.cp.prototype
C.F=J.c7.prototype
C.G=H.hX.prototype
C.H=W.hY.prototype
C.t=J.i1.prototype
C.m=J.cu.prototype
C.u=W.bQ.prototype
C.v=W.ju.prototype
C.w=new P.i_()
C.x=new P.jg()
C.j=new P.kg()
C.b=new A.ck(0,"ColorSourceType.None")
C.e=new A.ck(1,"ColorSourceType.Solid")
C.c=new A.ck(2,"ColorSourceType.Texture2D")
C.d=new A.ck(3,"ColorSourceType.TextureCube")
C.l=new P.b1(0)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=H.c(I.dq([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.n=new P.jf(!1)
$.aK=0
$.bC=null
$.dv=null
$.de=!1
$.fi=null
$.f9=null
$.fr=null
$.cA=null
$.cC=null
$.dm=null
$.bw=null
$.bU=null
$.bV=null
$.df=!1
$.X=C.j
$.dM=null
$.dL=null
$.dK=null
$.dJ=null
$.n=V.hR()
$.hi="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.hf="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.e7=null
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
I.$lazy(y,x,w)}})(["dI","$get$dI",function(){return H.fh("_$dart_dartClosure")},"cS","$get$cS",function(){return H.fh("_$dart_js")},"er","$get$er",function(){return H.aO(H.ct({
toString:function(){return"$receiver$"}}))},"es","$get$es",function(){return H.aO(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"et","$get$et",function(){return H.aO(H.ct(null))},"eu","$get$eu",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.aO(H.ct(void 0))},"ez","$get$ez",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ew","$get$ew",function(){return H.aO(H.ex(null))},"ev","$get$ev",function(){return H.aO(function(){try{null.$method$}catch(z){return z.message}}())},"eB","$get$eB",function(){return H.aO(H.ex(void 0))},"eA","$get$eA",function(){return H.aO(function(){try{(void 0).$method$}catch(z){return z.message}}())},"db","$get$db",function(){return P.jv()},"bW","$get$bW",function(){return[]},"f2","$get$f2",function(){return P.ih("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dG","$get$dG",function(){return{}},"eM","$get$eM",function(){return Z.ax(0)},"eK","$get$eK",function(){return Z.ax(511)},"aH","$get$aH",function(){return Z.ax(1)},"aG","$get$aG",function(){return Z.ax(2)},"aF","$get$aF",function(){return Z.ax(4)},"aW","$get$aW",function(){return Z.ax(8)},"aX","$get$aX",function(){return Z.ax(16)},"b6","$get$b6",function(){return Z.ax(32)},"bP","$get$bP",function(){return Z.ax(64)},"eL","$get$eL",function(){return Z.ax(96)},"bu","$get$bu",function(){return Z.ax(128)},"aV","$get$aV",function(){return Z.ax(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.M,args:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.M},{func:1,ret:-1},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.M,args:[F.Y]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[P.A,[P.i,E.aR]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.w},{func:1,ret:P.M,args:[F.T]},{func:1,args:[,]},{func:1,ret:P.M,args:[,]},{func:1,ret:-1,args:[P.A,[P.i,U.ac]]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:-1,args:[P.A,[P.i,D.a3]]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:-1,args:[P.A,[P.i,M.at]]},{func:1,ret:-1,args:[P.A,[P.i,V.aA]]},{func:1,args:[,P.o]},{func:1,ret:W.a2,args:[W.L]},{func:1,args:[P.o]},{func:1,ret:P.M,args:[,],opt:[,]},{func:1,ret:P.M,args:[P.a_]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:[P.aY,,],args:[,]},{func:1,ret:P.ab,args:[[P.i,D.a3]]},{func:1,ret:P.ab,args:[P.w,P.w]},{func:1,ret:P.M,args:[F.T,P.w,P.w]},{func:1,ret:P.w,args:[P.w]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:F.al,args:[F.al]},{func:1,ret:F.al,args:[F.al],named:{color:V.K}},{func:1,ret:P.ab,args:[W.L]},{func:1,ret:-1,args:[F.T,F.T]},{func:1,ret:P.M,args:[F.ar]},{func:1,ret:P.M,args:[W.aj]},{func:1,ret:P.A,args:[,,]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[P.a],opt:[P.aD]}]
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
if(x==y)H.lA(d||a)
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
Isolate.dq=a.dq
Isolate.dj=a.dj
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fm,[])
else M.fm([])})})()
//# sourceMappingURL=main.dart.js.map
