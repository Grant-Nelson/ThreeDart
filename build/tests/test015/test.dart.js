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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dB(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dC=function(){}
var dart=[["","",,H,{"^":"",nK:{"^":"b;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dF==null){H.mo()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c7("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d0()]
if(v!=null)return v
v=H.mr(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d0(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
A:function(a,b){return a===b},
gS:function(a){return H.bI(a)},
i:["ey",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hP:{"^":"q;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isaf:1},
ee:{"^":"q;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isG:1},
d1:{"^":"q;",
gS:function(a){return 0},
i:["ez",function(a){return String(a)}]},
iu:{"^":"d1;"},
cv:{"^":"d1;"},
c4:{"^":"d1;",
i:function(a){var z=a[$.$get$e_()]
if(z==null)return this.ez(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscW:1},
b6:{"^":"q;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.B("add"))
a.push(b)},
Y:function(a,b){var z
if(!!a.fixed$length)H.t(P.B("remove"))
for(z=0;z<a.length;++z)if(J.a1(a[z],b)){a.splice(z,1)
return!0}return!1},
c6:function(a,b){var z,y
H.v(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hs:function(a,b,c,d){var z,y,x
H.z(b,d)
H.e(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bQ:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.x(a,0)])
return H.f(a.slice(b,c),[H.x(a,0)])},
gaB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hN())},
ay:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("fill range"))
P.aM(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.E(0,1))a[z]=d},
b5:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a1(a[z],b))return!0
return!1},
i:function(a){return P.cZ(a,"[","]")},
ga2:function(a){return new J.au(a,a.length,0,[H.x(a,0)])},
gS:function(a){return H.bI(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
hO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.eb(new Array(a),b)},
eb:function(a,b){return J.bC(H.f(a,[b]))},
bC:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
nJ:{"^":"b6;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cl:{"^":"q;",
i3:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cs:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
em:function(a,b){var z,y
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bf:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.B("Unexpected toString result: "+z))
x=J.aI(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
bj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dn(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dn(a,b)},
dn:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aN:function(a,b){var z
if(a>0)z=this.dl(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fL:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isA:1,
$isY:1},
ed:{"^":"cl;",$ism:1},
ec:{"^":"cl;"},
cm:{"^":"q;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b<0)throw H.a(H.aH(a,b))
if(b>=a.length)H.t(H.aH(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aH(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aW:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
c=P.aM(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ad:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ac:function(a,b){return this.ad(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.cs(b,null,null))
if(b>c)throw H.a(P.cs(b,null,null))
if(c>a.length)throw H.a(P.cs(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.v(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hK:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ag:function(a,b){return this.hK(a,b," ")},
e7:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e6:function(a,b){return this.e7(a,b,0)},
hj:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.mN(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$iser:1,
$isk:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hN:function(){return new P.j4("No element")},
hf:{"^":"jF;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ascw:function(){return[P.m]},
$asw:function(){return[P.m]},
$asi:function(){return[P.m]},
$asd:function(){return[P.m]}},
hx:{"^":"i;"},
i2:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aI(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
i9:{"^":"i;a,b,$ti",
ga2:function(a){return new H.ia(J.bw(this.a),this.b,this.$ti)},
gk:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cK(this.a,b))},
$asi:function(a,b){return[b]}},
ia:{"^":"d_;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd_:function(a,b){return[b]}},
k7:{"^":"i;a,b,$ti",
ga2:function(a){return new H.k8(J.bw(this.a),this.b,this.$ti)}},
k8:{"^":"d_;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cj:{"^":"b;$ti"},
cw:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"cw",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.ay(this,"cw",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jF:{"^":"co+cw;"}}],["","",,H,{"^":"",
hk:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mj:function(a){return init.types[H.D(a)]},
fO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iE:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.J(a).$iscv){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aE(w,1)
r=H.dG(H.bW(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iw:function(){if(!!self.location)return self.location.href
return},
eu:function(a){var z,y,x,w,v
H.bW(a)
z=J.at(a)
if(typeof z!=="number")return z.eu()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iF:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aN(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.eu(z)},
ev:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iF(a)}return H.eu(a)},
iG:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eu()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cq:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aN(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iD:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
iB:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
ix:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
iy:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
iA:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
iC:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
iz:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ae(a))},
h:function(a,b){if(a==null)J.at(a)
throw H.a(H.aH(a,b))},
aH:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cs(b,"index",null)},
me:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
ae:function(a){return new P.aJ(!0,a,null,null)},
m9:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.eq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fV})
z.name=""}else z.toString=H.fV
return z},
fV:function(){return J.a9(this.dartException)},
t:function(a){throw H.a(a)},
E:function(a){throw H.a(P.aY(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aN(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d2(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ep(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eJ()
u=$.$get$eK()
t=$.$get$eL()
s=$.$get$eM()
r=$.$get$eQ()
q=$.$get$eR()
p=$.$get$eO()
$.$get$eN()
o=$.$get$eT()
n=$.$get$eS()
m=v.af(y)
if(m!=null)return z.$1(H.d2(H.O(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.d2(H.O(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ep(H.O(y),m))}}return z.$1(new H.jE(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bu:function(a){var z
if(a==null)return new H.fm(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fm(a)},
mh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mq:function(a,b,c,d,e,f){H.c(a,"$iscW")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mq)
a.$identity=z
return z},
he:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.iL(z).r}else x=d
w=e?Object.create(new H.j5().constructor.prototype):Object.create(new H.cN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.E()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dW(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mj,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dR:H.cO
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dW(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hb:function(a,b,c,d){var z=H.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dW:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hb(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.E()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bx
if(v==null){v=H.cd("self")
$.bx=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.E()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bx
if(v==null){v=H.cd("self")
$.bx=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hc:function(a,b,c,d){var z,y
z=H.cO
y=H.dR
switch(b?-1:a){case 0:throw H.a(H.iV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hd:function(a,b){var z,y,x,w,v,u,t,s
z=$.bx
if(z==null){z=H.cd("self")
$.bx=z}y=$.dQ
if(y==null){y=H.cd("receiver")
$.dQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.E()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.E()
$.az=y+1
return new Function(z+y+"}")()},
dB:function(a,b,c,d,e,f,g){var z,y
z=J.bC(H.bW(b))
H.D(c)
y=!!J.J(d).$isd?J.bC(d):d
return H.he(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
mE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
fT:function(a,b){throw H.a(H.aw(a,H.O(b).substring(3)))},
mG:function(a,b){var z=J.aI(b)
throw H.a(H.ha(a,z.v(b,3,z.gk(b))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fT(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.mG(a,b)},
bW:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.a(H.aw(a,"List"))},
fQ:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.fT(a,b)},
fK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fK(J.J(a))
if(z==null)return!1
y=H.fN(z,null,b,null)
return y},
e:function(a,b){var z,y
if(a==null)return a
if($.dx)return a
$.dx=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dx=!1}},
dD:function(a,b){if(a!=null&&!H.dA(a,b))H.t(H.aw(a,H.cb(b)))
return a},
fE:function(a){var z
if(a instanceof H.n){z=H.fK(J.J(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.bb(a)},
mP:function(a){throw H.a(new P.hp(H.O(a)))},
fL:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
oQ:function(a,b,c){return H.bv(a["$as"+H.l(c)],H.b0(b))},
aW:function(a,b,c,d){var z
H.O(c)
H.D(d)
z=H.bv(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.O(b)
H.D(c)
z=H.bv(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.v(b,"$isd",[P.k],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.m_(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mg(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dG:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.k],"$asd")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
br:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fH(H.bv(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.bW(c)
H.O(d)
if(a==null)return a
z=H.br(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dG(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fH:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
oO:function(a,b,c){return a.apply(b,H.bv(J.J(b)["$as"+H.l(c)],H.b0(b)))},
fP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fP(z)}return!1},
dA:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fP(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.J(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dA(a,b))throw H.a(H.aw(a,H.cb(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fN(a,b,c,d)
if('func' in a)return c.builtin$cls==="cW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bA" in y.prototype))return!1
w=y.prototype["$as"+"bA"]
v=H.bv(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fH(H.bv(r,z),b,u,d)},
fN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mD(m,b,l,d)},
mD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
oP:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mr:function(a){var z,y,x,w,v,u
z=H.O($.fM.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fG.$2(a,z))
if(z!=null){y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cH(x)
$.cD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cG[z]=x
return x}if(v==="-"){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fS(a,x)
if(v==="*")throw H.a(P.c7(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fS(a,x)},
fS:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dH(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dH(a,!1,null,!!a.$isF)},
mC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dH(z,c,null,null)},
mo:function(){if(!0===$.dF)return
$.dF=!0
H.mp()},
mp:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mk()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fU.$1(v)
if(u!=null){t=H.mC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mk:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bq(C.K,H.bq(C.P,H.bq(C.u,H.bq(C.u,H.bq(C.O,H.bq(C.L,H.bq(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fM=new H.ml(v)
$.fG=new H.mm(u)
$.fU=new H.mn(t)},
bq:function(a,b){return a(b)||b},
mN:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hj:{"^":"b;$ti",
i:function(a){return P.d4(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hk()},
$isK:1},
hl:{"^":"hj;a,b,c,$ti",
gk:function(a){return this.a},
cf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.cf(0,b))return
return this.d5(b)},
d5:function(a){return this.b[H.O(a)]},
I:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.e(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d5(v),z))}}},
iK:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bC(z)
y=z[0]
x=z[1]
return new H.iK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jr:{"^":"b;a,b,c,d,e,f",
af:function(a){var z,y,x
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
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eP:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ir:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ep:function(a,b){return new H.ir(a,b==null?null:b.method)}}},
hS:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hS(a,y,z?null:b.receiver)}}},
jE:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mQ:{"^":"n:16;a",
$1:function(a){if(!!J.J(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fm:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
geq:function(){return this},
$iscW:1,
geq:function(){return this}},
eE:{"^":"n;"},
j5:{"^":"eE;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cN:{"^":"eE;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bI(this.a)
else y=typeof z!=="object"?J.b2(z):H.bI(z)
return(y^H.bI(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cO:function(a){return a.a},
dR:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cN("self","target","receiver","name")
y=J.bC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
js:{"^":"a4;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.js("TypeError: "+H.l(P.ci(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
h9:{"^":"a4;a",
i:function(a){return this.a},
p:{
ha:function(a,b){return new H.h9("CastError: "+H.l(P.ci(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
iU:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
iV:function(a){return new H.iU(a)}}},
cn:{"^":"i6;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaA:function(a){return new H.hW(this,[H.x(this,0)])},
cf:function(a,b){var z=this.b
if(z==null)return!1
return this.eT(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bm(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bm(w,b)
x=y==null?null:y.b
return x}else return this.hw(b)},
hw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.d7(z,this.e9(a))
x=this.ea(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c_()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c_()
this.c=y}this.cW(y,b,c)}else this.hx(b,c)},
hx:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.c_()
this.d=z}y=this.e9(a)
x=this.d7(z,y)
if(x==null)this.c4(z,y,[this.c0(a,b)])
else{w=this.ea(x,a)
if(w>=0)x[w].b=b
else x.push(this.c0(a,b))}},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
cW:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bm(a,b)
if(z==null)this.c4(a,b,this.c0(b,c))
else z.b=c},
f1:function(){this.r=this.r+1&67108863},
c0:function(a,b){var z,y
z=new H.hV(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f1()
return z},
e9:function(a){return J.b2(a)&0x3ffffff},
ea:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a1(a[y].a,b))return y
return-1},
i:function(a){return P.d4(this)},
bm:function(a,b){return a[b]},
d7:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
eW:function(a,b){delete a[b]},
eT:function(a,b){return this.bm(a,b)!=null},
c_:function(){var z=Object.create(null)
this.c4(z,"<non-identifier-key>",z)
this.eW(z,"<non-identifier-key>")
return z},
$iseh:1},
hV:{"^":"b;a,b,0c,0d"},
hW:{"^":"hx;a,$ti",
gk:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.hX(z,z.r,this.$ti)
y.c=z.e
return y}},
hX:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ml:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mm:{"^":"n:45;a",
$2:function(a,b){return this.a(a,b)}},
mn:{"^":"n:28;a",
$1:function(a){return this.a(H.O(a))}},
hQ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iser:1,
$isiM:1,
p:{
hR:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mg:function(a){return J.eb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
io:function(a){return new Int8Array(a)},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aH(b,a))},
lU:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.me(a,b,c))
return b},
eo:{"^":"q;",$iseo:1,"%":"ArrayBuffer"},
d9:{"^":"q;",$isd9:1,$isjt:1,"%":"DataView;ArrayBufferView;d8|fg|fh|ip|fi|fj|b_"},
d8:{"^":"d9;",
gk:function(a){return a.length},
$isF:1,
$asF:I.dC},
ip:{"^":"fh;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mf(c)
H.aG(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.A]},
$asw:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
"%":"Float32Array|Float64Array"},
b_:{"^":"fj;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aG(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.m]},
$asw:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
nV:{"^":"b_;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nW:{"^":"b_;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nX:{"^":"b_;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nY:{"^":"b_;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nZ:{"^":"b_;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o_:{"^":"b_;",
gk:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
da:{"^":"b_;",
gk:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
bQ:function(a,b,c){return new Uint8Array(a.subarray(b,H.lU(b,c,a.length)))},
$isda:1,
$isQ:1,
"%":";Uint8Array"},
fg:{"^":"d8+w;"},
fh:{"^":"fg+cj;"},
fi:{"^":"d8+w;"},
fj:{"^":"fi+cj;"}}],["","",,P,{"^":"",
ka:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.kc(z),1)).observe(y,{childList:true})
return new P.kb(z,y,x)}else if(self.setImmediate!=null)return P.m7()
return P.m8()},
oD:[function(a){self.scheduleImmediate(H.bs(new P.kd(H.e(a,{func:1,ret:-1})),0))},"$1","m6",4,0,11],
oE:[function(a){self.setImmediate(H.bs(new P.ke(H.e(a,{func:1,ret:-1})),0))},"$1","m7",4,0,11],
oF:[function(a){H.e(a,{func:1,ret:-1})
P.ld(0,a)},"$1","m8",4,0,11],
eH:function(a,b){var z
H.e(b,{func:1,ret:-1,args:[P.bi]})
z=C.d.a5(a.a,1000)
return P.le(z<0?0:z,b)},
m2:function(a,b){if(H.c8(a,{func:1,args:[P.b,P.av]}))return b.hT(a,null,P.b,P.av)
if(H.c8(a,{func:1,args:[P.b]}))return H.e(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m1:function(){var z,y
for(;z=$.bp,z!=null;){$.bU=null
y=z.b
$.bp=y
if(y==null)$.bT=null
z.a.$0()}},
oN:[function(){$.dy=!0
try{P.m1()}finally{$.bU=null
$.dy=!1
if($.bp!=null)$.$get$dr().$1(P.fI())}},"$0","fI",0,0,3],
fD:function(a){var z=new P.f9(H.e(a,{func:1,ret:-1}))
if($.bp==null){$.bT=z
$.bp=z
if(!$.dy)$.$get$dr().$1(P.fI())}else{$.bT.b=z
$.bT=z}},
m5:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fD(a)
$.bU=$.bT
return}y=new P.f9(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bp=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
mH:function(a){var z,y
z={func:1,ret:-1}
H.e(a,z)
y=$.V
if(C.i===y){P.cC(null,null,C.i,a)
return}y.toString
P.cC(null,null,y,H.e(y.dv(a),z))},
jp:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.e(b,z)
y=$.V
if(y===C.i){y.toString
return P.eH(a,b)}x=y.dw(b,P.bi)
$.V.toString
return P.eH(a,H.e(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.m5(new P.m3(z,e))},
fz:function(a,b,c,d,e){var z,y
H.e(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fA:function(a,b,c,d,e,f,g){var z,y
H.e(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
m4:function(a,b,c,d,e,f,g,h,i){var z,y
H.e(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cC:function(a,b,c,d){var z
H.e(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.dv(d):c.hg(d,-1)
P.fD(d)},
kc:{"^":"n:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kb:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.e(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kd:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ke:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fp:{"^":"b;a,0b,c",
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.lg(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.lf(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbi:1,
p:{
ld:function(a,b){var z=new P.fp(!0,0)
z.eI(a,b)
return z},
le:function(a,b){var z=new P.fp(!1,0)
z.eJ(a,b)
return z}}},
lg:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lf:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eB(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hD:function(a){if(this.c!==6)return!0
return this.b.b.cG(H.e(this.d,{func:1,ret:P.af,args:[P.b]}),a.a,P.af,P.b)},
hv:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.b,P.av]}))return H.dD(w.hY(z,a.a,a.b,null,y,P.av),x)
else return H.dD(w.cG(H.e(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;dm:a<,b,0fG:c<,$ti",
el:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.i){y.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m2(b,y)}H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.V,[c])
w=b==null?1:3
this.cX(new P.bn(x,w,a,b,[z,c]))
return x},
i2:function(a,b){return this.el(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.c(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.c(this.c,"$isaT")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.e(new P.kt(this,a),{func:1,ret:-1}))}},
df:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.c(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.c(this.c,"$isaT")
y=u.a
if(y<4){u.df(a)
return}this.a=y
this.c=u.c}z.a=this.bn(a)
y=this.b
y.toString
P.cC(null,null,y,H.e(new P.ky(z,this),{func:1,ret:-1}))}},
c2:function(){var z=H.c(this.c,"$isbn")
this.c=null
return this.bn(z)},
bn:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d0:function(a){var z,y,x,w
z=H.x(this,0)
H.dD(a,{futureOr:1,type:z})
y=this.$ti
x=H.br(a,"$isbA",y,"$asbA")
if(x){z=H.br(a,"$isaT",y,null)
if(z)P.fc(a,this)
else P.ku(a,this)}else{w=this.c2()
H.z(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bT:[function(a,b){var z
H.c(b,"$isav")
z=this.c2()
this.a=8
this.c=new P.aj(a,b)
P.bO(this,z)},function(a){return this.bT(a,null)},"i8","$2","$1","geR",4,2,29],
$isbA:1,
p:{
ku:function(a,b){var z,y,x
b.a=1
try{a.el(new P.kv(b),new P.kw(b),null)}catch(x){z=H.as(x)
y=H.bu(x)
P.mH(new P.kx(b,z,y))}},
fc:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.c(a.c,"$isaT")
if(z>=4){y=b.c2()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.c(b.c,"$isbn")
b.a=2
b.c=a
a.df(y)}},
bO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.c(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bO(z.a,b)}y=z.a
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
if(p){H.c(r,"$isaj")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.kB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kA(x,b,r).$0()}else if((y&2)!==0)new P.kz(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.J(y).$isbA){if(y.a>=4){n=H.c(t.c,"$isbn")
t.c=null
b=t.bn(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fc(y,t)
return}}m=b.b
n=H.c(m.c,"$isbn")
m.c=null
b=m.bn(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.c(u,"$isaj")
m.a=8
m.c=u}z.a=m
y=m}}}},
kt:{"^":"n:0;a,b",
$0:function(){P.bO(this.a,this.b)}},
ky:{"^":"n:0;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
kv:{"^":"n:20;a",
$1:function(a){var z=this.a
z.a=0
z.d0(a)}},
kw:{"^":"n:51;a",
$2:function(a,b){this.a.bT(a,H.c(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kx:{"^":"n:0;a,b,c",
$0:function(){this.a.bT(this.b,this.c)}},
kB:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ej(H.e(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bu(v)
if(this.d){w=H.c(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.c(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.J(z).$isbA){if(z instanceof P.aT&&z.gdm()>=4){if(z.gdm()===8){w=this.b
w.b=H.c(z.gfG(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i2(new P.kC(t),null)
w.a=!1}}},
kC:{"^":"n:34;a",
$1:function(a){return this.a}},
kA:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cG(H.e(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bu(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
kz:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.c(this.a.a.c,"$isaj")
w=this.c
if(w.hD(z)&&w.e!=null){v=this.b
v.b=w.hv(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bu(u)
w=H.c(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
f9:{"^":"b;a,0b"},
dg:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aT(0,$.V,[P.m])
z.a=0
this.hA(new P.j8(z,this),!0,new P.j9(z,y),y.geR())
return y}},
j8:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"dg",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"dg",0)]}}},
j9:{"^":"n:0;a,b",
$0:function(){this.b.d0(this.a.a)}},
eB:{"^":"b;$ti"},
j7:{"^":"b;"},
bi:{"^":"b;"},
aj:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lI:{"^":"b;",$isoC:1},
m3:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
kW:{"^":"lI;",
hZ:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
try{if(C.i===$.V){a.$0()
return}P.fz(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bu(x)
P.cB(null,null,this,z,H.c(y,"$isav"))}},
i_:function(a,b,c){var z,y,x
H.e(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.i===$.V){a.$1(b)
return}P.fA(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bu(x)
P.cB(null,null,this,z,H.c(y,"$isav"))}},
hg:function(a,b){return new P.kY(this,H.e(a,{func:1,ret:b}),b)},
dv:function(a){return new P.kX(this,H.e(a,{func:1,ret:-1}))},
dw:function(a,b){return new P.kZ(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
ej:function(a,b){H.e(a,{func:1,ret:b})
if($.V===C.i)return a.$0()
return P.fz(null,null,this,a,b)},
cG:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.V===C.i)return a.$1(b)
return P.fA(null,null,this,a,b,c,d)},
hY:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.V===C.i)return a.$2(b,c)
return P.m4(null,null,this,a,b,c,d,e,f)},
hT:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}},
kY:{"^":"n;a,b,c",
$0:function(){return this.a.ej(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kX:{"^":"n:3;a,b",
$0:function(){return this.a.hZ(this.b)}},
kZ:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i_(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hY:function(a,b,c,d,e){return new H.cn(0,0,[d,e])},
hZ:function(a,b,c){H.bW(a)
return H.v(H.mh(a,new H.cn(0,0,[b,c])),"$iseh",[b,c],"$aseh")},
ei:function(a,b){return new H.cn(0,0,[a,b])},
i1:function(a,b,c,d){return new P.kI(0,0,[d])},
hM:function(a,b,c){var z,y
if(P.dz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.m0(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eC(b,H.fQ(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cZ:function(a,b,c){var z,y,x
if(P.dz(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.eC(x.gaI(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaI()+c
y=z.gaI()
return y.charCodeAt(0)==0?y:y},
dz:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
m0:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.G();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i_:function(a,b,c){var z=P.hY(null,null,null,b,c)
a.I(0,new P.i0(z,b,c))
return z},
d4:function(a){var z,y,x
z={}
if(P.dz(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaI()+"{"
z.a=!0
J.dL(a,new P.i7(z,y))
z=y
z.a=z.gaI()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaI()
return z.charCodeAt(0)==0?z:z},
kI:{"^":"kD;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.ff(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dt()
this.b=z}return this.cZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dt()
this.c=y}return this.cZ(y,b)}else return this.eL(0,b)},
eL:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.dt()
this.d=z}y=this.d1(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.d6(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
Y:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dg(this.c,b)
else return this.fB(0,b)},
fB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eZ(z,b)
x=this.d6(y,b)
if(x<0)return!1
this.dq(y.splice(x,1)[0])
return!0},
cZ:function(a,b){H.z(b,H.x(this,0))
if(H.c(a[b],"$isds")!=null)return!1
a[b]=this.bS(b)
return!0},
dg:function(a,b){var z
if(a==null)return!1
z=H.c(a[b],"$isds")
if(z==null)return!1
this.dq(z)
delete a[b]
return!0},
d_:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.ds(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d_()
return z},
dq:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d_()},
d1:function(a){return J.b2(a)&0x3ffffff},
eZ:function(a,b){return a[this.d1(b)]},
d6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a1(a[y].a,b))return y
return-1},
p:{
dt:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ds:{"^":"b;a,0b,0c"},
kJ:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
ff:function(a,b,c){var z=new P.kJ(a,b,[c])
z.c=a.e
return z}}},
kD:{"^":"iW;"},
i0:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
co:{"^":"kK;",$isi:1,$isd:1},
w:{"^":"b;$ti",
ga2:function(a){return new H.i2(a,this.gk(a),0,[H.aW(this,a,"w",0)])},
J:function(a,b){return this.j(a,b)},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.aW(this,a,"w",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.a(P.aY(a))}},
i5:function(a,b){var z,y,x
z=H.f([],[H.aW(this,a,"w",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
i4:function(a){return this.i5(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.aW(this,a,"w",0))
P.aM(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cZ(a,"[","]")}},
i6:{"^":"ag;"},
i7:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.aW(this,a,"ag",0),H.aW(this,a,"ag",1)]})
for(z=J.bw(this.gaA(a));z.G();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.at(this.gaA(a))},
i:function(a){return P.d4(a)},
$isK:1},
ll:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
i8:{"^":"b;$ti",
j:function(a,b){return J.dK(this.a,b)},
m:function(a,b,c){J.cI(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
I:function(a,b){J.dL(this.a,H.e(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gk:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isK:1},
f_:{"^":"lm;a,$ti"},
iX:{"^":"b;$ti",
i:function(a){return P.cZ(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=P.ff(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isi:1},
iW:{"^":"iX;"},
kK:{"^":"b+w;"},
lm:{"^":"i8+ll;$ti"}}],["","",,P,{"^":"",h6:{"^":"bZ;a",
hF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aM(c,d,b.length,null,null,null)
z=$.$get$fa()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cF(C.b.H(b,s))
o=H.cF(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.cq(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dP(b,u,d,v,t,k)
else{j=C.d.bj(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aW(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dP(b,u,d,v,t,i)
else{j=C.d.bj(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aW(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.d,P.m],P.k]},
p:{
dP:function(a,b,c,d,e,f){if(C.d.bj(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},h7:{"^":"by;a",
$asby:function(){return[[P.d,P.m],P.k]}},bZ:{"^":"b;$ti"},by:{"^":"j7;$ti"},hz:{"^":"bZ;",
$asbZ:function(){return[P.k,[P.d,P.m]]}},jS:{"^":"hz;a",
ghq:function(){return C.G}},jZ:{"^":"by;",
b6:function(a,b,c){var z,y,x,w
z=a.length
P.aM(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lH(0,0,x)
if(w.eY(a,b,z)!==z)w.dr(J.h_(a,z-1),0)
return C.V.bQ(x,0,w.b)},
cg:function(a){return this.b6(a,0,null)},
$asby:function(){return[P.k,[P.d,P.m]]}},lH:{"^":"b;a,b,c",
dr:function(a,b){var z,y,x,w,v
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
eY:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dr(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jT:{"^":"by;a",
b6:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.m],"$asd")
z=P.jU(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aM(b,c,y,null,null,null)
x=new P.an("")
w=new P.lE(!1,x,!0,0,0,0)
w.b6(a,b,y)
w.hr(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cg:function(a){return this.b6(a,0,null)},
$asby:function(){return[[P.d,P.m],P.k]},
p:{
jU:function(a,b,c,d){H.v(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.jV(!1,b,c,d)
return},
jV:function(a,b,c,d){var z,y,x
z=$.$get$f3()
if(z==null)return
y=0===c
if(y&&!0)return P.dp(z,b)
x=b.length
d=P.aM(c,d,x,null,null,null)
if(y&&d===x)return P.dp(z,b)
return P.dp(z,b.subarray(c,d))},
dp:function(a,b){if(P.jX(b))return
return P.jY(a,b)},
jY:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
jX:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jW:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lE:{"^":"b;a,b,c,d,e,f",
hr:function(a,b,c){var z
H.v(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lG(c)
v=new P.lF(this,b,c,a)
$label0$0:for(u=J.aI(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bM()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.bf(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.w,q)
if(z<=C.w[q]){q=P.a_("Overlong encoding of 0x"+C.d.bf(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.bf(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cq(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cM()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.bf(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.bf(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lG:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aI(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bM()
if((w&127)!==w)return x-b}return z-b}},lF:{"^":"n:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eD(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.e(b,{func:1,ret:P.m,args:[P.k]})
z=H.iE(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hB:function(a){var z=J.J(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
i3:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hO(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
ej:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.ga2(a);x.G();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.v(J.bC(y),"$isd",z,"$asd")},
eD:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb6",[z],"$asb6")
y=a.length
c=P.aM(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.ev(z?C.a.bQ(a,b,c):a)}if(!!J.J(a).$isda)return H.iG(a,b,P.aM(b,c,a.length,null,null,null))
return P.ja(a,b,c)},
ja:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a2(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.at(a),null,null))
y=J.bw(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gP(y))}return H.ev(w)},
iN:function(a,b,c){return new H.hQ(a,H.hR(a,!1,!0,!1))},
dn:function(){var z=H.iw()
if(z!=null)return P.jK(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hB(a)},
u:function(a){return new P.fb(a)},
i4:function(a,b,c,d){var z,y
H.e(b,{func:1,ret:d,args:[P.m]})
z=H.f([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dJ:function(a){H.mF(a)},
jK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f0(b>0||c<c?C.b.v(a,b,c):a,5,null).geo()
else if(y===32)return P.f0(C.b.v(a,z,c),0,null).geo()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fB(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cL()
if(v>=b)if(P.fB(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ad(a,"..",s)))n=r>s+2&&C.b.ad(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ad(a,"file",b)){if(u<=b){if(!C.b.ad(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aW(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ad(a,"http",b)){if(x&&t+3===s&&C.b.ad(a,"80",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
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
else if(v===z&&C.b.ad(a,"https",b)){if(x&&t+4===s&&C.b.ad(a,"443",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
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
q-=b}return new P.l0(a,v,u,t,s,r,q,o)}return P.ln(a,b,c,v,u,t,s,r,q,o)},
f2:function(a,b){var z=P.k
return C.a.hs(H.f(a.split("&"),[z]),P.ei(z,z),new P.jN(b),[P.K,P.k,P.k])},
jI:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jJ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jL(a)
y=new P.jM(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaB(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jI(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.d.aN(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
lV:function(){var z,y,x,w,v
z=P.i4(22,new P.lX(),!0,P.Q)
y=new P.lW(z)
x=new P.lY()
w=new P.lZ()
v=H.c(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.c(y.$2(8,8),"$isQ"),"]",5)
v=H.c(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.c(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.c(y.$2(20,245),"$isQ"),"az",21)
v=H.c(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fB:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.m],"$asd")
z=$.$get$fC()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
af:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.d.aN(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iD(this))
y=P.c_(H.iB(this))
x=P.c_(H.ix(this))
w=P.c_(H.iy(this))
v=P.c_(H.iA(this))
u=P.c_(H.iC(this))
t=P.hr(H.iz(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
A:{"^":"Y;"},
"+double":0,
c0:{"^":"b;a",
L:function(a,b){return C.d.L(this.a,H.c(b,"$isc0").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.c0))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hw()
y=this.a
if(y<0)return"-"+new P.c0(0-y).i(0)
x=z.$1(C.d.a5(y,6e7)%60)
w=z.$1(C.d.a5(y,1e6)%60)
v=new P.hv().$1(y%1e6)
return""+C.d.a5(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e5:function(a,b,c,d,e,f){return new P.c0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hv:{"^":"n:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hw:{"^":"n:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
eq:{"^":"a4;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a4;a,b,c,d",
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbV()+y+x
if(!this.a)return w
v=this.gbU()
u=P.ci(this.b)
return w+v+": "+H.l(u)},
p:{
bY:function(a){return new P.aJ(!1,null,null,a)},
cc:function(a,b,c){return new P.aJ(!0,a,b,c)},
dM:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cr:{"^":"aJ;e,f,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
aM:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hK:{"^":"aJ;e,k:f>,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){if(J.fW(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hK(b,z,!0,a,c,"Index out of range")}}},
jG:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jG(a)}}},
jD:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c7:function(a){return new P.jD(a)}}},
j4:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hi:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ci(z))+"."},
p:{
aY:function(a){return new P.hi(a)}}},
is:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hp:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fb:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hG:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.X(w,s)
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
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
p:{
a_:function(a,b,c){return new P.hG(a,b,c)}}},
m:{"^":"Y;"},
"+int":0,
i:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga2(this)
for(y=0;z.G();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.G();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hM(this,"(",")")}},
d_:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
G:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gS:function(a){return H.bI(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"b;"},
k:{"^":"b;",$iser:1},
"+String":0,
an:{"^":"b;aI:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isom:1,
p:{
eC:function(a,b,c){var z=J.bw(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.G())}else{a+=H.l(z.gP(z))
for(;z.G();)a=a+c+H.l(z.gP(z))}return a}}},
jN:{"^":"n:38;a",
$2:function(a,b){var z,y,x,w
z=P.k
H.v(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aI(b).e6(b,"=")
if(y===-1){if(b!=="")J.cI(a,P.dv(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aE(b,y+1)
z=this.a
J.cI(a,P.dv(x,0,x.length,z,!0),P.dv(w,0,w.length,z,!0))}return a}},
jJ:{"^":"n:26;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
jL:{"^":"n:30;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jM:{"^":"n:46;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bO:a<,b,c,d,eg:e>,f,r,0x,0y,0z,0Q,0ch",
gep:function(){return this.b},
gct:function(a){var z=this.c
if(z==null)return""
if(C.b.ac(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbH:function(a){var z=this.d
if(z==null)return P.fr(this.a)
return z},
gcE:function(a){var z=this.f
return z==null?"":z},
ge1:function(){var z=this.r
return z==null?"":z},
cF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.k,null],"$asK")
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
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.du(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
ei:function(a,b){return this.cF(a,null,null,null,null,null,null,b,null,null)},
gbJ:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.k
y=new P.f_(P.f2(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
ge2:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge3:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdm){y=this.a
x=b.gbO()
if(y==null?x==null:y===x)if(this.c!=null===b.ge2()){y=this.b
x=b.gep()
if(y==null?x==null:y===x){y=this.gct(this)
x=z.gct(b)
if(y==null?x==null:y===x){y=this.gbH(this)
x=z.gbH(b)
if(y==null?x==null:y===x)if(this.e===z.geg(b)){y=this.f
x=y==null
if(!x===b.ge5()){if(x)y=""
if(y===z.gcE(b)){z=this.r
y=z==null
if(!y===b.ge3()){if(y)z=""
z=z===b.ge1()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.i(0))
this.z=z}return z},
$isdm:1,
p:{
dw:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.m],"$asd")
if(c===C.l){z=$.$get$fw().b
if(typeof b!=="string")H.t(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"bZ",0))
y=c.ghq().cg(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ln:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.ly(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lz(a,z,e-1):""
x=P.ls(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lv(P.ca(C.b.v(a,w,g),new P.lo(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lt(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.du(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.lr(a,i+1,c):null)},
fr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.a(P.a_(c,a,b))},
lv:function(a,b){if(a!=null&&a===P.fr(b))return
return a},
ls:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.X(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.f1(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.f1(a,b,c)
return"["+a+"]"}return P.lB(a,b,c)},
lB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fy(a,z,!0)
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
if(t>=8)return H.h(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fs(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
ly:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fu(C.b.H(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lp(y?a.toLowerCase():a)},
lp:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lz:function(a,b,c){return P.bR(a,b,c,C.S)},
lt:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.y):C.t.iM(d,new P.lu(),P.k).Z(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ac(w,"/"))w="/"+w
return P.lA(w,e,f)},
lA:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ac(a,"/"))return P.lC(a,!z||c)
return P.lD(a)},
du:function(a,b,c,d){var z,y
z={}
H.v(d,"$isK",[P.k,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.bY("Both query and queryParameters specified"))
return P.bR(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.I(0,new P.lw(new P.lx(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lr:function(a,b,c){return P.bR(a,b,c,C.n)},
fy:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aN(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cq(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fs:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fL(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.eD(y,0,null)},
bR:function(a,b,c,d){var z=P.fx(a,b,c,H.v(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
fx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fy(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fs(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fv:function(a){if(C.b.ac(a,"."))return!0
return C.b.e6(a,"/.")!==-1},
lD:function(a){var z,y,x,w,v,u,t
if(!P.fv(a))return a
z=H.f([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.a1(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.Z(z,"/")},
lC:function(a,b){var z,y,x,w,v,u
if(!P.fv(a))return!b?P.ft(a):a
z=H.f([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaB(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaB(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.ft(z[0]))}return C.a.Z(z,"/")},
ft:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fu(J.fX(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aE(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lq:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bY("Invalid URL encoding"))}}return z},
dv:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dE(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.hf(y.v(a,b,c))}else{u=H.f([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.bY("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bY("Truncated URI"))
C.a.h(u,P.lq(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.m],"$asd")
return new P.jT(!1).cg(u)},
fu:function(a){var z=a|32
return 97<=z&&z<=122}}},
lo:{"^":"n:17;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lu:{"^":"n:39;",
$1:function(a){return P.dw(C.T,a,C.l,!1)}},
lx:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dw(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dw(C.p,b,C.l,!0))}}},
lw:{"^":"n:50;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bw(H.fQ(b,"$isi")),y=this.a;z.G();)y.$2(a,H.O(z.gP(z)))}},
jH:{"^":"b;a,b,c",
geo:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.e7(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.n)
w=x}else v=null
z=new P.kj(this,"data",null,null,null,P.bR(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f0:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaB(z)
if(v!==44||x!==t+7||!C.b.ad(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.hF(0,a,s,y)
else{r=P.fx(a,s,y,C.n,!0)
if(r!=null)a=C.b.aW(a,s,y,r)}return new P.jH(a,z,c)}}},
lX:{"^":"n:40;",
$1:function(a){return new Uint8Array(96)}},
lW:{"^":"n:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.h0(z,0,96,b)
return z}},
lY:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lZ:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
l0:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge2:function(){return this.c>0},
ge4:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
ge5:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
ge3:function(){return this.r<this.a.length},
gd8:function(){return this.b===4&&C.b.ac(this.a,"http")},
gd9:function(){return this.b===5&&C.b.ac(this.a,"https")},
gbO:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd8()){this.x="http"
z="http"}else if(this.gd9()){this.x="https"
z="https"}else if(z===4&&C.b.ac(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ac(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
gep:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gct:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbH:function(a){var z
if(this.ge4()){z=this.d
if(typeof z!=="number")return z.E()
return P.ca(C.b.v(this.a,z+1,this.e),null,null)}if(this.gd8())return 80
if(this.gd9())return 443
return 0},
geg:function(a){return C.b.v(this.a,this.e,this.f)},
gcE:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.v(this.a,z+1,y):""},
ge1:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aE(y,z+1):""},
gbJ:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.U
z=P.k
return new P.f_(P.f2(this.gcE(this),C.l),[z,z])},
cF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.k,null],"$asK")
i=this.gbO()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.ge4()?this.gbH(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.du(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aE(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
ei:function(a,b){return this.cF(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdm)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdm:1},
kj:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cR:function(a,b){var z=document.createElement("canvas")
return z},
hy:function(a){H.c(a,"$isa6")
return"wheel"},
cY:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hL:function(a){var z,y,x
y=document.createElement("input")
z=H.c(y,"$isea")
try{J.h2(z,a)}catch(x){H.as(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fe:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fF:function(a,b){var z
H.e(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.i)return a
return z.dw(a,b)},
a7:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mS:{"^":"dd;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
mT:{"^":"q;0k:length=","%":"AccessibleNodeList"},
mU:{"^":"a7;0a3:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mV:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cM:{"^":"q;",$iscM:1,"%":";Blob"},
n0:{"^":"a7;0a3:type}","%":"HTMLButtonElement"},
cQ:{"^":"a7;",
bN:function(a,b,c){if(c!=null)return a.getContext(b,P.ma(c,null))
return a.getContext(b)},
er:function(a,b){return this.bN(a,b,null)},
$iscQ:1,
"%":"HTMLCanvasElement"},
dU:{"^":"q;",$isdU:1,"%":"CanvasRenderingContext2D"},
n2:{"^":"M;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n4:{"^":"cg;0k:length=","%":"CSSPerspective"},
n5:{"^":"cU;0q:x=,0t:y=","%":"CSSPositionValue"},
n6:{"^":"cg;0q:x=,0t:y=","%":"CSSRotation"},
b3:{"^":"q;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
n7:{"^":"cg;0q:x=,0t:y=","%":"CSSScale"},
hn:{"^":"ki;0k:length=",
es:function(a,b){var z=a.getPropertyValue(this.cY(a,b))
return z==null?"":z},
cY:function(a,b){var z,y
z=$.$get$dZ()
y=z[b]
if(typeof y==="string")return y
y=this.fM(a,b)
z[b]=y
return y},
fM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
fI:function(a,b,c,d){a.setProperty(b,c,d)},
gca:function(a){return a.bottom},
gao:function(a){return a.height},
gaU:function(a){return a.left},
gbb:function(a){return a.right},
gbg:function(a){return a.top},
gap:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ho:{"^":"b;",
gaU:function(a){return this.es(a,"left")}},
cU:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cg:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
n8:{"^":"cU;0k:length=","%":"CSSTransformValue"},
n9:{"^":"cg;0q:x=,0t:y=","%":"CSSTranslation"},
na:{"^":"cU;0k:length=","%":"CSSUnparsedValue"},
nb:{"^":"q;0k:length=","%":"DataTransferItemList"},
nc:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nd:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
ne:{"^":"ht;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
ht:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nf:{"^":"kl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.v(c,"$isa8",[P.Y],"$asa8")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a8,P.Y]]},
$asw:function(){return[[P.a8,P.Y]]},
$isi:1,
$asi:function(){return[[P.a8,P.Y]]},
$isd:1,
$asd:function(){return[[P.a8,P.Y]]},
$asC:function(){return[[P.a8,P.Y]]},
"%":"ClientRectList|DOMRectList"},
hu:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gap(a))+" x "+H.l(this.gao(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.br(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaU(b)&&a.top===z.gbg(b)&&this.gap(a)===z.gap(b)&&this.gao(a)===z.gao(b)},
gS:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF)},
gca:function(a){return a.bottom},
gao:function(a){return a.height},
gaU:function(a){return a.left},
gbb:function(a){return a.right},
gbg:function(a){return a.top},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
ng:{"^":"kn;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.k]},
$asw:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"DOMStringList"},
nh:{"^":"q;0k:length=","%":"DOMTokenList"},
kh:{"^":"co;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.c(z[b],"$isW")},
m:function(a,b,c){var z
H.D(b)
H.c(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.i4(this)
return new J.au(z,z.length,0,[H.x(z,0)])},
ay:function(a,b,c,d){throw H.a(P.c7(null))},
$asw:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
W:{"^":"M;",
gce:function(a){return new W.kh(a,a.children)},
gbt:function(a){return P.iJ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
ni:{"^":"a7;0a3:type}","%":"HTMLEmbedElement"},
a5:{"^":"q;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"q;",
dt:["ex",function(a,b,c,d){H.e(c,{func:1,args:[W.a5]})
if(c!=null)this.eM(a,b,c,!1)}],
eM:function(a,b,c,d){return a.addEventListener(b,H.bs(H.e(c,{func:1,args:[W.a5]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fk|fl|fn|fo"},
aZ:{"^":"cM;",$isaZ:1,"%":"File"},
e7:{"^":"ks;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isaZ")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$asw:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$ise7:1,
$asC:function(){return[W.aZ]},
"%":"FileList"},
nB:{"^":"a6;0k:length=","%":"FileWriter"},
nE:{"^":"a7;0k:length=","%":"HTMLFormElement"},
b5:{"^":"q;",$isb5:1,"%":"Gamepad"},
nF:{"^":"dd;0q:x=,0t:y=","%":"Gyroscope"},
nG:{"^":"q;0k:length=","%":"History"},
nH:{"^":"kF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asC:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c1:{"^":"q;0dC:data=",$isc1:1,"%":"ImageData"},
cX:{"^":"a7;",$iscX:1,"%":"HTMLImageElement"},
ea:{"^":"a7;0a3:type}",$isea:1,"%":"HTMLInputElement"},
bD:{"^":"dj;",$isbD:1,"%":"KeyboardEvent"},
nM:{"^":"a7;0a3:type}","%":"HTMLLinkElement"},
nN:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
nO:{"^":"dd;0q:x=,0t:y=","%":"Magnetometer"},
nQ:{"^":"q;0k:length=","%":"MediaList"},
nR:{"^":"a6;",
dt:function(a,b,c,d){H.e(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.ex(a,b,c,!1)},
"%":"MessagePort"},
nS:{"^":"kL;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.k])
this.I(a,new W.ik(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"MIDIInputMap"},
ik:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nT:{"^":"kM;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.k])
this.I(a,new W.il(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
il:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"q;",$isb9:1,"%":"MimeType"},
nU:{"^":"kO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isb9")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asw:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"MimeTypeArray"},
ab:{"^":"dj;",$isab:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kg:{"^":"co;a",
m:function(a,b,c){var z,y
H.D(b)
H.c(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.e8(z,z.length,-1,[H.aW(C.W,z,"C",0)])},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asw:function(){return[W.M]},
$asi:function(){return[W.M]},
$asd:function(){return[W.M]}},
M:{"^":"a6;",
hV:function(a,b){var z,y
try{z=a.parentNode
J.fY(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ey(a):z},
fC:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iq:{"^":"kQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asC:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
o1:{"^":"a7;0a3:type}","%":"HTMLOListElement"},
o2:{"^":"a7;0a3:type}","%":"HTMLObjectElement"},
ba:{"^":"q;0k:length=",$isba:1,"%":"Plugin"},
o6:{"^":"kU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"PluginArray"},
ob:{"^":"q;0a3:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oc:{"^":"l_;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.k])
this.I(a,new W.iT(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"RTCStatsReport"},
iT:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
od:{"^":"a7;0a3:type}","%":"HTMLScriptElement"},
of:{"^":"a7;0k:length=","%":"HTMLSelectElement"},
dd:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bc:{"^":"a6;",$isbc:1,"%":"SourceBuffer"},
og:{"^":"fl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"SourceBufferList"},
oh:{"^":"a7;0a3:type}","%":"HTMLSourceElement"},
bd:{"^":"q;",$isbd:1,"%":"SpeechGrammar"},
oi:{"^":"l2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asw:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"q;0k:length=",$isbe:1,"%":"SpeechRecognitionResult"},
ok:{"^":"l5;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaA:function(a){var z=H.f([],[P.k])
this.I(a,new W.j6(z))
return z},
gk:function(a){return a.length},
$asag:function(){return[P.k,P.k]},
$isK:1,
$asK:function(){return[P.k,P.k]},
"%":"Storage"},
j6:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
on:{"^":"a7;0a3:type}","%":"HTMLStyleElement"},
bf:{"^":"q;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
bJ:{"^":"a7;",$isbJ:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"a6;",$isbg:1,"%":"TextTrack"},
bh:{"^":"a6;",$isbh:1,"%":"TextTrackCue|VTTCue"},
os:{"^":"lc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"TextTrackCueList"},
ot:{"^":"fo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asw:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"TextTrackList"},
ou:{"^":"q;0k:length=","%":"TimeRanges"},
bj:{"^":"q;",$isbj:1,"%":"Touch"},
bk:{"^":"dj;",$isbk:1,"%":"TouchEvent"},
ov:{"^":"li;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asw:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TouchList"},
ow:{"^":"q;0k:length=","%":"TrackDefaultList"},
dj:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oy:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oA:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oB:{"^":"a6;0k:length=","%":"VideoTrackList"},
bN:{"^":"ab;",
gho:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
k9:{"^":"a6;",
fD:function(a,b){return a.requestAnimationFrame(H.bs(H.e(b,{func:1,ret:-1,args:[P.Y]}),1))},
eX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oG:{"^":"lK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isb3")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asw:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$isd:1,
$asd:function(){return[W.b3]},
$asC:function(){return[W.b3]},
"%":"CSSRuleList"},
oH:{"^":"hu;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.br(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaU(b)&&a.top===z.gbg(b)&&a.width===z.gap(b)&&a.height===z.gao(b)},
gS:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gao:function(a){return a.height},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oJ:{"^":"lM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isb5")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asw:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"GamepadList"},
oK:{"^":"lO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asC:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oL:{"^":"lQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asw:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
oM:{"^":"lS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.c(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"StyleSheetList"},
ko:{"^":"dg;a,b,c,$ti",
hA:function(a,b,c,d){var z=H.x(this,0)
H.e(a,{func:1,ret:-1,args:[z]})
H.e(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oI:{"^":"ko;a,b,c,$ti"},
kp:{"^":"eB;a,b,c,d,e,$ti",
fQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.fZ(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fF(new W.kq(c),W.a5)
z=new W.kp(0,a,b,z,!1,[e])
z.fQ()
return z}}},
kq:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.c(a,"$isa5"))}},
C:{"^":"b;$ti",
ga2:function(a){return new W.e8(a,this.gk(a),-1,[H.aW(this,a,"C",0)])},
ay:function(a,b,c,d){H.z(d,H.aW(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
e8:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
ki:{"^":"q+ho;"},
kk:{"^":"q+w;"},
kl:{"^":"kk+C;"},
km:{"^":"q+w;"},
kn:{"^":"km+C;"},
kr:{"^":"q+w;"},
ks:{"^":"kr+C;"},
kE:{"^":"q+w;"},
kF:{"^":"kE+C;"},
kL:{"^":"q+ag;"},
kM:{"^":"q+ag;"},
kN:{"^":"q+w;"},
kO:{"^":"kN+C;"},
kP:{"^":"q+w;"},
kQ:{"^":"kP+C;"},
kT:{"^":"q+w;"},
kU:{"^":"kT+C;"},
l_:{"^":"q+ag;"},
fk:{"^":"a6+w;"},
fl:{"^":"fk+C;"},
l1:{"^":"q+w;"},
l2:{"^":"l1+C;"},
l5:{"^":"q+ag;"},
lb:{"^":"q+w;"},
lc:{"^":"lb+C;"},
fn:{"^":"a6+w;"},
fo:{"^":"fn+C;"},
lh:{"^":"q+w;"},
li:{"^":"lh+C;"},
lJ:{"^":"q+w;"},
lK:{"^":"lJ+C;"},
lL:{"^":"q+w;"},
lM:{"^":"lL+C;"},
lN:{"^":"q+w;"},
lO:{"^":"lN+C;"},
lP:{"^":"q+w;"},
lQ:{"^":"lP+C;"},
lR:{"^":"q+w;"},
lS:{"^":"lR+C;"}}],["","",,P,{"^":"",
md:function(a){var z,y
z=J.J(a)
if(!!z.$isc1){y=z.gdC(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fq(a.data,a.height,a.width)},
mc:function(a){if(a instanceof P.fq)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ei(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
ma:function(a,b){var z={}
a.I(0,new P.mb(z))
return z},
e4:function(){var z=$.e3
if(z==null){z=J.cJ(window.navigator.userAgent,"Opera",0)
$.e3=z}return z},
hs:function(){var z,y
z=$.e0
if(z!=null)return z
y=$.e1
if(y==null){y=J.cJ(window.navigator.userAgent,"Firefox",0)
$.e1=y}if(y)z="-moz-"
else{y=$.e2
if(y==null){y=!P.e4()&&J.cJ(window.navigator.userAgent,"Trident/",0)
$.e2=y}if(y)z="-ms-"
else z=P.e4()?"-o-":"-webkit-"}$.e0=z
return z},
l8:{"^":"b;",
e_:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cI:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.J(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isiM)throw H.a(P.c7("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscM)return a
if(!!y.$ise7)return a
if(!!y.$isc1)return a
if(!!y.$iseo||!!y.$isd9)return a
if(!!y.$isK){x=this.e_(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.la(z,this))
return z.a}if(!!y.$isd){x=this.e_(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hl(a,x)}throw H.a(P.c7("structured clone of other type"))},
hl:function(a,b){var z,y,x,w
z=J.aI(a)
y=z.gk(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cI(z.j(a,w)))
return x}},
la:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cI(b)}},
fq:{"^":"b;dC:a>,b,c",$isc1:1},
mb:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
l9:{"^":"l8;a,b"},
hD:{"^":"co;a,b",
gb_:function(){var z,y,x
z=this.b
y=H.ay(z,"w",0)
x=W.W
return new H.i9(new H.k7(z,H.e(new P.hE(),{func:1,ret:P.af,args:[y]}),[y]),H.e(new P.hF(),{func:1,ret:x,args:[y]}),[y,x])},
I:function(a,b){H.e(b,{func:1,ret:-1,args:[W.W]})
C.a.I(P.ej(this.gb_(),!1,W.W),b)},
m:function(a,b,c){var z
H.D(b)
H.c(c,"$isW")
z=this.gb_()
J.h1(z.b.$1(J.cK(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gk:function(a){return J.at(this.gb_().a)},
j:function(a,b){var z=this.gb_()
return z.b.$1(J.cK(z.a,b))},
ga2:function(a){var z=P.ej(this.gb_(),!1,W.W)
return new J.au(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
hE:{"^":"n:25;",
$1:function(a){return!!J.J(H.c(a,"$isM")).$isW}},
hF:{"^":"n:27;",
$1:function(a){return H.j(H.c(a,"$isM"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fd:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
c5:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
A:function(a,b){var z,y,x
if(b==null)return!1
z=H.br(b,"$isc5",[P.Y],null)
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fd(P.bP(P.bP(0,z),y))}},
kV:{"^":"b;$ti",
gbb:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.z(z+this.c,H.x(this,0))},
gca:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.z(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.br(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gaU(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbg(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gbb(b)){if(typeof x!=="number")return x.E()
z=H.z(x+this.d,w)===y.gca(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.E()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.z(x+this.d,v)
return P.fd(P.bP(P.bP(P.bP(P.bP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dB:function(a,b){var z,y
H.v(b,"$isc5",[P.Y],"$asc5")
z=b.a
y=this.a
if(typeof z!=="number")return z.cL()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cL()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"kV;aU:a>,bg:b>,ap:c>,ao:d>,$ti",p:{
iJ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nj:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nk:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nl:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nm:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nn:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},no:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},np:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nq:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nr:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},ns:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nt:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nu:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nv:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nw:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nx:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},ny:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nz:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},nA:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nC:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},nD:{"^":"bB;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hI:{"^":"bB;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bB:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nI:{"^":"bB;0q:x=,0t:y=","%":"SVGImageElement"},bE:{"^":"q;",$isbE:1,"%":"SVGLength"},nL:{"^":"kH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.c(c,"$isbE")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bE]},
$isi:1,
$asi:function(){return[P.bE]},
$isd:1,
$asd:function(){return[P.bE]},
$asC:function(){return[P.bE]},
"%":"SVGLengthList"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bG:{"^":"q;",$isbG:1,"%":"SVGNumber"},o0:{"^":"kS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.c(c,"$isbG")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bG]},
$isi:1,
$asi:function(){return[P.bG]},
$isd:1,
$asd:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGNumberList"},o5:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},o7:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},o8:{"^":"q;0k:length=","%":"SVGPointList"},o9:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},oa:{"^":"hI;0q:x=,0t:y=","%":"SVGRectElement"},oe:{"^":"U;0a3:type}","%":"SVGScriptElement"},ol:{"^":"l7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asw:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"SVGStringList"},oo:{"^":"U;0a3:type}","%":"SVGStyleElement"},U:{"^":"W;",
gce:function(a){return new P.hD(a,new W.kg(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},op:{"^":"bB;0q:x=,0t:y=","%":"SVGSVGElement"},jb:{"^":"bB;","%":"SVGTextPathElement;SVGTextContentElement"},or:{"^":"jb;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bK:{"^":"q;",$isbK:1,"%":"SVGTransform"},ox:{"^":"lk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.c(c,"$isbK")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$isd:1,
$asd:function(){return[P.bK]},
$asC:function(){return[P.bK]},
"%":"SVGTransformList"},oz:{"^":"bB;0q:x=,0t:y=","%":"SVGUseElement"},kG:{"^":"q+w;"},kH:{"^":"kG+C;"},kR:{"^":"q+w;"},kS:{"^":"kR+C;"},l6:{"^":"q+w;"},l7:{"^":"l6+C;"},lj:{"^":"q+w;"},lk:{"^":"lj+C;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isjt:1}}],["","",,P,{"^":"",mW:{"^":"q;0k:length=","%":"AudioBuffer"},dO:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},mX:{"^":"kf;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
I:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.k])
this.I(a,new P.h4(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"AudioParamMap"},h4:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},h5:{"^":"dO;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},mY:{"^":"a6;0k:length=","%":"AudioTrackList"},h8:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mZ:{"^":"dO;0a3:type}","%":"BiquadFilterNode"},o3:{"^":"h8;0k:length=","%":"OfflineAudioContext"},o4:{"^":"h5;0a3:type}","%":"Oscillator|OscillatorNode"},kf:{"^":"q+ag;"}}],["","",,P,{"^":"",dc:{"^":"q;",
i0:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mc(g))
return}if(!!z.$iscX)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bY("Incorrect number or type of arguments"))},
ek:function(a,b,c,d,e,f,g){return this.i0(a,b,c,d,e,f,g,null,null,null)},
$isdc:1,
"%":"WebGLRenderingContext"},jc:{"^":"q;",$isjc:1,"%":"WebGLTexture"},jB:{"^":"q;",$isjB:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oj:{"^":"l4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.c(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asw:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asC:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},l3:{"^":"q+w;"},l4:{"^":"l3+C;"}}],["","",,O,{"^":"",ak:{"^":"b;0a,0b,0c,0d,$ti",
bl:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cN:function(a,b,c){var z=H.ay(this,"ak",0)
H.e(b,{func:1,ret:P.af,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.e(a,z)
H.e(c,z)
this.b=b
this.c=a
this.d=c},
aY:function(a,b){return this.cN(a,null,b)},
de:function(a){var z
H.v(a,"$isi",[H.ay(this,"ak",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cT:function(a,b){var z
H.v(b,"$isi",[H.ay(this,"ak",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.au(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"ak",0)
H.z(b,z)
z=[z]
if(this.de(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cT(x,H.f([b],z))}},
c6:function(a,b){var z,y
H.v(b,"$isi",[H.ay(this,"ak",0)],"$asi")
if(this.de(b)){z=this.a
y=z.length
C.a.c6(z,b)
this.cT(y,b)}},
$isi:1,
p:{
cS:function(a){var z=new O.ak([a])
z.bl(a)
return z}}},d6:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eE:function(a){var z=this.b
if(!(z==null))z.B(a)},
aF:function(){return this.eE(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaB(z)
else return V.b8()},
bI:function(a){var z=this.a
if(a==null)C.a.h(z,V.b8())
else C.a.h(z,a)
this.aF()},
aC:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cL:{"^":"b;"},aK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbP:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.e(this.gef(),{func:1,ret:-1,args:[D.p]})
C.a.Y(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.e(this.gef(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.ey])
w.b=!0
this.aV(w)}},
am:function(a,b){var z
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.am(0,b)},
aa:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga_(z))
z.aF()
a.cD(this.f)
z=a.dy
y=(z&&C.a).gaB(z)
if(y!=null&&this.d!=null)y.eh(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aa(a)
a.cC()
a.dx.aC()},
gu:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aV:function(a){var z=this.z
if(!(z==null))z.B(a)},
a6:function(){return this.aV(null)},
hJ:[function(a){H.c(a,"$isp")
this.e=null
this.aV(a)},function(){return this.hJ(null)},"iR","$1","$0","gef",0,2,1],
hH:[function(a){this.aV(H.c(a,"$isp"))},function(){return this.hH(null)},"iP","$1","$0","gee",0,2,1],
iO:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aK],"$asi")
for(z=b.length,y=this.gee(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.b4()
t.a=H.f([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.e(y,x)
C.a.h(t.a,y)}}this.a6()},"$2","ghG",8,0,8],
iQ:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aK],"$asi")
for(z=b.length,y=this.gee(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.b4()
t.a=H.f([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.e(y,x)
C.a.Y(t.a,y)}}this.a6()},"$2","ghI",8,0,8],
$isaC:1,
p:{
e6:function(a,b,c,d,e,f){var z,y
z=new E.aK()
z.a=d
z.b=!0
y=O.cS(E.aK)
z.y=y
y.aY(z.ghG(),z.ghI())
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
z.sbP(0,e)
return z}}},iO:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eD:function(a,b){var z,y,x,w,v
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
z=new O.d6()
y=[V.aL]
z.a=H.f([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.e(new E.iQ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d6()
z.a=H.f([],y)
v=z.gu()
v.toString
x=H.e(new E.iR(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d6()
z.a=H.f([],y)
y=z.gu()
y.toString
w=H.e(new E.iS(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.c6])
this.dy=z
C.a.h(z,null)
this.fr=new H.cn(0,0,[P.k,A.de])},
ghS:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.l(0,y.ga_(y))
this.z=y
z=y}return z},
cD:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaB(z):a;(z&&C.a).h(z,y)},
cC:function(){var z=this.dy
if(z.length>1)z.pop()},
du:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.cf(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
iP:function(a,b){var z=new E.iO(a,b)
z.eD(a,b)
return z}}},iQ:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isp")
z=this.a
z.z=null
z.ch=null}},iR:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iS:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},jm:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eG:[function(a){var z
H.c(a,"$isp")
z=this.x
if(!(z==null))z.B(a)
this.hW()},function(){return this.eG(null)},"eF","$1","$0","gcU",0,2,1],
ghu:function(){var z,y,x
z=Date.now()
y=C.d.a5(P.e5(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
dh:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.j.cs(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cs(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hW:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.e(new E.jo(this),{func:1,ret:-1,args:[P.Y]})
C.C.eX(z)
C.C.fD(z,W.fF(y,P.Y))}},
hU:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dh()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e5(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aF()
w=x.db
C.a.sk(w.a,0)
w.aF()
w=x.dx
C.a.sk(w.a,0)
w.aF()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}}catch(v){z=H.as(v)
y=H.bu(v)
P.dJ("Error: "+H.l(z))
P.dJ("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jn:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscQ)return E.eG(a,!0,!0,!0,!1)
y=W.cR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gce(a).h(0,y)
w=E.eG(y,!0,!0,!0,!1)
w.a=a
return w},
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jm()
y=P.hZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.k.bN(a,"webgl",y)
x=H.c(x==null?C.k.bN(a,"experimental-webgl",y):x,"$isdc")
if(x==null)H.t(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iP(x,a)
w=new T.jg(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jO(a)
v=new X.hT()
v.c=new X.aB(!1,!1,!1)
v.d=P.i1(null,null,null,P.m)
w.b=v
v=new X.im(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i5(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jq(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.eB,P.b]])
w.z=v
u=document
t=W.ab
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.e(w.gfd(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.e(w.gfg(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.e(w.gfa(),q),!1,r))
v=w.z
p=W.bD
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.e(w.gfi(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.e(w.gfh(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.e(w.gfl(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.e(w.gfn(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.e(w.gfm(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.a0(a,H.O(W.hy(a)),H.e(w.gfo(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.e(w.gfe(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.e(w.gff(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.e(w.gfp(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.e(w.gfA(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.e(w.gfw(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.e(w.gfz(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.dh()
return z}}},jo:{"^":"n:31;a",
$1:function(a){var z
H.mE(a)
z=this.a
if(z.z){z.z=!1
z.hU()}}}}],["","",,Z,{"^":"",f7:{"^":"b;a,b",p:{
dq:function(a,b,c){var z
H.v(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.f7(b,z)}}},dS:{"^":"cL;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.u('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},f8:{"^":"b;a",$isn_:1},cP:{"^":"b;a,0b,c,d",
az:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
al:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aa:function(a){var z,y,x,w,v
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
z=[P.k]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.Z(y,", ")+"\nAttrs:   "+C.a.Z(u,", ")},
$isoq:1},ck:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcP:function(a){var z,y
z=this.a
y=(z&$.$get$ax().a)!==0?3:0
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
hf:function(a){var z,y,x
z=$.$get$ax()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f6()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.k])
y=this.a
if((y&$.$get$ax().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.Z(z,"|")},
p:{
ap:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dV:{"^":"b;"},b4:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hC(z))
return x!==0},
dF:function(){return this.B(null)},
hX:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
aD:function(a){return this.hX(a,!0,!1)},
p:{
H:function(){var z=new D.b4()
z.a=H.f([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},hC:{"^":"n:32;a",
$1:function(a){var z
H.e(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"b;a,0b"},c2:{"^":"p;c,d,a,0b,$ti"},c3:{"^":"p;c,d,a,0b,$ti"},I:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dT:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"n1<"}},ef:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eg:{"^":"p;c,a,0b"},hT:{"^":"b;0a,0b,0c,0d",
hP:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.B(y)},
hL:function(a){var z,y
this.c=a.b
this.d.Y(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.B(y)}},ek:{"^":"cp;x,y,c,d,e,a,0b"},i5:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaO()
s=new X.bF(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cB:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.at(a,b))
return!0},
b9:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ev()
if(typeof z!=="number")return z.bM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.at(a,b))
return!0},
b8:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.at(a,b))
return!0},
hQ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.d7(new V.X(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.B(w)
return!0},
fk:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.ek(c,a,this.a.gaO(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.T(0,0)}},aB:{"^":"b;a,b,c",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
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
return z+(this.c?"Shift+":"")}},bF:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},im:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bW:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaO()
x=new X.bF(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cB:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bW(a,b,!0))
return!0},
b9:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ev()
if(typeof z!=="number")return z.bM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bW(a,b,!0))
return!0},
b8:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bW(a,b,!1))
return!0},
hR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.d7(new V.X(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.B(x)
return!0},
gdE:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbL:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
ged:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},d7:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"p;"},eI:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jq:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.T],"$asd")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaO()
w=new X.eI(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hO:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.b
if(z==null)return!1
z.B(this.at(a,!0))
return!0},
hM:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.c
if(z==null)return!1
z.B(this.at(a,!0))
return!0},
hN:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.d
if(z==null)return!1
z.B(this.at(a,!1))
return!0}},jO:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaO:function(){var z=this.a
return V.ex(0,0,(z&&C.k).gbt(z).c,C.k.gbt(z).d)},
d3:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.aB(y,a.altKey,a.shiftKey))},
aM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
c5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.T(y-w,x-v)},
b2:function(a){return new V.X(a.movementX,a.movementY)},
c1:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.j.ak(u.pageX)
C.j.ak(u.pageY)
s=z.left
C.j.ak(u.pageX)
C.a.h(y,new V.T(t-s,C.j.ak(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.aB(y,a.altKey,a.shiftKey))},
ip:[function(a){this.f=!0},"$1","gfg",4,0,4],
ii:[function(a){this.f=!1},"$1","gfa",4,0,4],
il:[function(a){if(this.f)a.preventDefault()},"$1","gfd",4,0,4],
ir:[function(a){var z
H.c(a,"$isbD")
if(!this.f)return
z=this.d3(a)
if(this.b.hP(z))a.preventDefault()},"$1","gfi",4,0,14],
iq:[function(a){var z
H.c(a,"$isbD")
if(!this.f)return
z=this.d3(a)
if(this.b.hL(z))a.preventDefault()},"$1","gfh",4,0,14],
it:[function(a){var z,y,x,w
H.c(a,"$isab")
z=this.a
z.focus()
this.f=!0
this.aM(a)
if(this.x){y=this.ar(a)
x=this.b2(a)
if(this.d.cB(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cB(y,w))a.preventDefault()},"$1","gfl",4,0,5],
iv:[function(a){var z,y,x
H.c(a,"$isab")
this.aM(a)
z=this.ar(a)
if(this.x){y=this.b2(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfn",4,0,5],
io:[function(a){var z,y,x,w
H.c(a,"$isab")
z=this.a
if(!(z&&C.k).gbt(z).dB(0,new P.c5(a.clientX,a.clientY,[P.Y]))){this.aM(a)
y=this.ar(a)
if(this.x){x=this.b2(a)
if(this.d.b9(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b9(y,w))a.preventDefault()}},"$1","gff",4,0,5],
iu:[function(a){var z,y,x
H.c(a,"$isab")
this.aM(a)
z=this.ar(a)
if(this.x){y=this.b2(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfm",4,0,5],
im:[function(a){var z,y,x,w
H.c(a,"$isab")
z=this.a
if(!(z&&C.k).gbt(z).dB(0,new P.c5(a.clientX,a.clientY,[P.Y]))){this.aM(a)
y=this.ar(a)
if(this.x){x=this.b2(a)
if(this.d.b8(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b8(y,w))a.preventDefault()}},"$1","gfe",4,0,5],
iw:[function(a){var z,y
H.c(a,"$isbN")
this.aM(a)
z=new V.X((a&&C.B).ghn(a),C.B.gho(a)).C(0,180)
if(this.x){if(this.d.hQ(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hR(z,y))a.preventDefault()},"$1","gfo",4,0,35],
ix:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fk(w,v,x)}},"$1","gfp",4,0,4],
iF:[function(a){var z
H.c(a,"$isbk")
this.a.focus()
this.f=!0
this.c5(a)
z=this.c1(a)
if(this.e.hO(z))a.preventDefault()},"$1","gfA",4,0,13],
iD:[function(a){var z
H.c(a,"$isbk")
this.c5(a)
z=this.c1(a)
if(this.e.hM(z))a.preventDefault()},"$1","gfw",4,0,13],
iE:[function(a){var z
H.c(a,"$isbk")
this.c5(a)
z=this.c1(a)
if(this.e.hN(z))a.preventDefault()},"$1","gfz",4,0,13]}}],["","",,D,{"^":"",ch:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aG:[function(a){var z
H.c(a,"$isp")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aG(null)},"i6","$1","$0","geH",0,2,1],
$isa3:1,
$isaC:1},a3:{"^":"b;",$isaC:1},hU:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aG:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fj:[function(a){var z
H.c(a,"$isp")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fj(null)},"is","$1","$0","gdd",0,2,1],
iy:[function(a){var z,y,x
H.v(a,"$isi",[D.a3],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(x==null||this.eS(x))return!1}return!0},"$1","gfq",4,0,37],
ie:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdd(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.c(b[u],"$isa3")
if(t instanceof D.ch)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.a=H.f([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.h(s.a,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gf7",8,0,19],
iA:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdd(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.c(b[u],"$isa3")
if(t instanceof D.ch)C.a.Y(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.a=H.f([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.Y(s.a,x)}z=new D.c3(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gft",8,0,19],
eS:function(a){var z=C.a.b5(this.e,a)
return z},
$asi:function(){return[D.a3]},
$asak:function(){return[D.a3]}},iv:{"^":"b;",$isa3:1,$isaC:1},j3:{"^":"b;",$isa3:1,$isaC:1},jj:{"^":"b;",$isa3:1,$isaC:1},jk:{"^":"b;",$isa3:1,$isaC:1},jl:{"^":"b;",$isa3:1,$isaC:1}}],["","",,V,{"^":"",
n3:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ij",8,0,33],
mR:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bj(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.j.em($.r.$2(a,0)?0:a,b),c+b+1)},
bt:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.A],"$asd")
z=H.f([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.E)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.ag(z[u],x))}return z},
dI:function(a,b){return C.j.i3(Math.pow(b,C.J.cs(Math.log(H.m9(a))/Math.log(b))))},
y:{"^":"b;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
aX:{"^":"b;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
em:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.em))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.A]
y=V.bt(H.f([this.a,this.d,this.r],z),3,0)
x=V.bt(H.f([this.b,this.e,this.x],z),3,0)
w=V.bt(H.f([this.c,this.f,this.y],z),3,0)
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
aL:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return z},
cu:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.r.$2(a2,0))return V.b8()
a3=1/a2
a4=-w
a5=-i
return V.aA((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ah(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
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
i:function(a){return this.K()},
e0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.A]
y=V.bt(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bt(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bt(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bt(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.e0("",3,0)},
D:function(a){return this.e0(a,3,0)},
p:{
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b8:function(){return V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
en:function(a,b,c){var z,y,x,w,v
z=c.C(0,Math.sqrt(c.F(c)))
y=b.b7(z)
x=y.C(0,Math.sqrt(y.F(y)))
w=z.b7(x)
v=new V.N(a.a,a.b,a.c)
return V.aA(x.a,w.a,z.a,x.O(0).F(v),x.b,w.b,z.b,w.O(0).F(v),x.c,w.c,z.c,z.O(0).F(v),0,0,0,1)}}},
T:{"^":"b;q:a>,t:b>",
M:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
ah:{"^":"b;q:a>,t:b>,c",
M:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
bH:{"^":"b;q:a>,t:b>,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
ew:{"^":"b;q:a>,t:b>,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ew))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
p:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
X:{"^":"b;a,b",
hy:[function(a){return Math.sqrt(this.F(this))},"$0","gk",1,0,21],
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
return new V.X(z*b,y*b)},
C:function(a,b){var z,y
if($.r.$2(b,0))return new V.X(0,0)
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.X(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
N:{"^":"b;a,b,c",
hy:[function(a){return Math.sqrt(this.F(this))},"$0","gk",1,0,21],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cv:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b7:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.N(-this.a,-this.b,-this.c)},
C:function(a,b){if($.r.$2(b,0))return new V.N(0,0,0)
return new V.N(this.a/b,this.b/b,this.c/b)},
eb:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hg:{"^":"dV;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.mR(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.B(a)},
scJ:function(a,b){},
scw:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.I("maximumLocation",y,this.b,this,[P.A])
z.b=!0
this.R(z)}},
scA:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.I("minimumLocation",y,this.c,this,[P.A])
z.b=!0
this.R(z)}},
sa8:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.A])
z.b=!0
this.R(z)}},
scz:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.A])
z.b=!0
this.R(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.A])
z.b=!0
this.R(z)}},
scj:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.A])
z.b=!0
this.R(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa8(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cT:function(){var z=new U.hg()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dX:{"^":"ac;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aX:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dX))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
p:{
dY:function(a){var z=new U.dX()
z.a=a
return z}}},e9:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
R:[function(a){var z
H.c(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.R(null)},"ai","$1","$0","gaH",0,2,1],
ic:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.e(x,w)
C.a.h(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gf6",8,0,22],
iz:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.e(x,w)
C.a.Y(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfs",8,0,22],
aX:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aX(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.b8():x
z=this.e
if(!(z==null))z.aD(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.a1(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ac]},
$asak:function(){return[U.ac]},
$isac:1},ac:{"^":"dV;"},jP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
R:[function(a){var z
H.c(a,"$isp")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.R(null)},"ai","$1","$0","gaH",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdE()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.e(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ged()
x.toString
z=H.e(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
y=H.e(this.gbZ(),y)
C.a.h(z.a,y)
return!0},
f2:[function(a){H.c(a,"$isp")
if(!J.a1(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbX",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.c(a,"$isp"),"$isbF")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.X(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.X(y.a,y.b).l(0,2).C(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.X(x.a,x.b).l(0,2).C(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
this.b.sT(0)
y=y.M(0,a.z)
this.Q=new V.X(y.a,y.b).l(0,2).C(0,z.ga9())}this.ai()},"$1","gbY",4,0,2],
f4:[function(a){var z,y,x
H.c(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sT(y*10*x)
this.ai()}},"$1","gbZ",4,0,2],
aX:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aA(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},jQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
R:[function(a){var z
H.c(a,"$isp")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.R(null)},"ai","$1","$0","gaH",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdE()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.e(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ged()
x.toString
z=H.e(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
x=H.e(this.gbZ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.e(this.gf_(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.e(this.gf0(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.e(this.gfP(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.e(this.gfO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.e(this.gfN(),y)
C.a.h(z.a,y)
return!0},
an:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.X(z,y)},
f2:[function(a){a=H.j(H.c(a,"$isp"),"$isbF")
if(!J.a1(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbX",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.c(a,"$isp"),"$isbF")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.X(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.an(new V.X(y.a,y.b).l(0,2).C(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.an(new V.X(x.a,x.b).l(0,2).C(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).l(0,2).C(0,z.ga9()))}this.ai()},"$1","gbY",4,0,2],
f4:[function(a){var z,y,x
H.c(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.ai()}},"$1","gbZ",4,0,2],
i9:[function(a){if(H.j(H.c(a,"$isp"),"$isek").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf_",4,0,2],
ia:[function(a){var z,y,x,w,v,u,t
a=H.j(H.c(a,"$isp"),"$isbF")
if(!J.a1(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.an(new V.X(x.a,x.b).l(0,2).C(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).l(0,2).C(0,z.ga9()))
this.ai()},"$1","gf0",4,0,2],
iJ:[function(a){H.c(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfP",4,0,2],
iI:[function(a){var z,y,x,w,v,u,t
a=H.j(H.c(a,"$isp"),"$iseI")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.X(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.an(new V.X(y.a,y.b).l(0,2).C(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.an(new V.X(x.a,x.b).l(0,2).C(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).l(0,2).C(0,z.ga9()))}this.ai()},"$1","gfO",4,0,2],
iH:[function(a){var z,y,x
H.c(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.ai()}},"$1","gfN",4,0,2],
aX:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aA(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aA(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},jR:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.B(a)},
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.e(this.gf5(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ib:[function(a){var z,y,x,w
H.c(a,"$isp")
if(!J.a1(this.b,this.a.b.c))return
H.j(a,"$isd7")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.A])
z.b=!0
this.R(z)}},"$1","gf5",4,0,2],
aX:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aA(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",hh:{"^":"ak;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a0:[function(a){var z
H.c(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a0(null)},"cV","$1","$0","gV",0,2,1],
iB:[function(a,b){var z,y,x,w,v,u,t
z=M.aD
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.e(x,w)
C.a.h(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfu",8,0,23],
iC:[function(a,b){var z,y,x,w,v,u,t
z=M.aD
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.e(x,w)
C.a.Y(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfv",8,0,23],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$asi:function(){return[M.aD]},
$asak:function(){return[M.aD]},
$isaD:1},hm:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a0:[function(a){var z
H.c(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a0(null)},"cV","$1","$0","gV",0,2,1],
sb4:function(a){var z,y,x
if(a==null)a=new X.hJ()
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.ce])
z.b=!0
this.a0(z)}},
sbc:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.dh])
z.b=!0
this.a0(z)}},
sbd:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.c6])
z.b=!0
this.a0(z)}},
aa:function(a){a.cD(this.c)
this.b.W(a)
this.a.W(a)
this.d.am(0,a)
this.d.aa(a)
this.a.al(a)
this.b.toString
a.cC()},
$isaD:1},hA:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a0:[function(a){var z
H.c(a,"$isp")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a0(null)},"cV","$1","$0","gV",0,2,1],
ij:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.b4()
s.a=H.f([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.e(x,w)
C.a.h(s.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfb",8,0,8],
ik:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.b4()
s.a=H.f([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.e(x,w)
C.a.Y(s.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfc",8,0,8],
sb4:function(a){var z,y,x
if(a==null)a=X.es(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.ce])
z.b=!0
this.a0(z)}},
sbc:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.dh])
z.b=!0
this.a0(z)}},
sbd:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.e(this.gV(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.c6])
z.b=!0
this.a0(z)}},
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aa:function(a){var z
a.cD(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.am(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.am(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aa(a)
this.a.toString
a.cy.aC()
a.db.aC()
this.b.toString
a.cC()},
$isaD:1},aD:{"^":"b;"}}],["","",,A,{"^":"",dN:{"^":"b;a,b,c"},h3:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hp:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},el:{"^":"de;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aS,0ax,0aT,0bu,0dG,0dH,0bv,0bw,0dI,0dJ,0bx,0by,0dK,0dL,0bz,0dM,0dN,0bA,0dO,0dP,0bB,0bC,0bD,0dQ,0dR,0bE,0bF,0dS,0dT,0bG,0dU,0cm,0dV,0cn,0dW,0co,0dX,0cp,0dY,0cq,0dZ,0cr,a,b,0c,0d,0e,0f,0r",
eC:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
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
a1.fS(z)
a1.fZ(z)
a1.fT(z)
a1.h6(z)
a1.h7(z)
a1.h0(z)
a1.hb(z)
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
v.fW(z)
v.fR(z)
v.fU(z)
v.fX(z)
v.h4(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h3(z)}v.h_(z)
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
p=H.f([],[P.k])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.Z(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fV(z)
v.h1(z)
v.h5(z)
v.h8(z)
v.h9(z)
v.ha(z)
v.fY(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.k])
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
n="vec4("+C.a.Z(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.e8(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaF")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaF")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaF")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaF")
if(a1.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdl")
if(a1.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaF")
if(a1.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaF")
this.k3=H.f([],[A.aF])
y=a1.aS
if(y>0){this.k2=H.c(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaF"))}}y=a1.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isai")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isai")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.aS=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aT=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.ax=H.j(this.r.n(0,"diffuseTxt"),"$isai")
this.aT=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bu=H.j(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dG=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bv=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dH=H.j(this.r.n(0,"invDiffuseTxt"),"$isai")
this.bv=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.by=H.j(this.r.n(0,"shininess"),"$isZ")
this.bw=H.j(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dI=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bx=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dJ=H.j(this.r.n(0,"specularTxt"),"$isai")
this.bx=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.dK=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bz=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dL=H.j(this.r.n(0,"bumpTxt"),"$isai")
this.bz=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.dM=H.j(this.r.n(0,"envSampler"),"$isai")
this.dN=H.j(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bA=H.j(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dO=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bB=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dP=H.j(this.r.n(0,"reflectTxt"),"$isai")
this.bB=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bC=H.j(this.r.n(0,"refraction"),"$isZ")
this.bD=H.j(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dQ=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bE=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dR=H.j(this.r.n(0,"refractTxt"),"$isai")
this.bE=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bF=H.j(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.h:break
case C.e:this.dS=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bG=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dT=H.j(this.r.n(0,"alphaTxt"),"$isai")
this.bG=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cm=H.f([],[A.eU])
this.cn=H.f([],[A.eV])
this.co=H.f([],[A.eW])
this.cp=H.f([],[A.eX])
this.cq=H.f([],[A.eY])
this.cr=H.f([],[A.eZ])
if(a1.k2){y=a1.z
if(y>0){this.dU=H.c(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.cm;(x&&C.a).h(x,new A.eU(m,l,k))}}y=a1.Q
if(y>0){this.dV=H.c(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isZ")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.cn;(x&&C.a).h(x,new A.eV(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dW=H.c(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.co;(x&&C.a).h(x,new A.eW(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dX=H.c(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isao")
x=this.cp;(x&&C.a).h(x,new A.eX(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dY=H.c(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdl")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isai")
x=this.cq;(x&&C.a).h(x,new A.eY(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dZ=H.c(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isao")
x=this.cr;(x&&C.a).h(x,new A.eZ(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aj:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ew(c)
b.a.uniform1i(b.d,0)}},
ae:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cO(c)
b.a.uniform1i(b.d,0)}},
p:{
ic:function(a,b){var z,y
z=a.ax
y=new A.el(b,z)
y.cS(b,z)
y.eC(a,b)
return y}}},ig:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aS,ax,aT",
fS:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aS+"];\n"
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
fZ:function(a){var z
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
fT:function(a){var z
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
h6:function(a){var z,y
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
h7:function(a){var z,y
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
h0:function(a){var z
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
hb:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aE(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fW:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fR:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
fU:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
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
fX:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
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
h4:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
h_:function(a){var z,y
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
h2:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
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
h3:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
fV:function(a){var z,y
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
h1:function(a){var z,y
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
h5:function(a){var z,y
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
h8:function(a){var z,y,x
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
fY:function(a){var z
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
i:function(a){return this.ax}},eU:{"^":"b;a,b,c"},eX:{"^":"b;a,b,c,d,e,f,r,x"},eV:{"^":"b;a,b,c,d,e,f,r"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eW:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eZ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},de:{"^":"cL;",
cS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
e8:function(a,b,c){var z,y,x
this.c=this.d4(b,35633)
this.d=this.d4(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fJ(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.t(P.u("Failed to link shader: "+H.l(x)))}this.fJ()
this.fK()},
W:function(a){a.a.useProgram(this.e)
this.f.hp()},
d4:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fJ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fJ:function(){var z,y,x,w,v,u
z=H.f([],[A.dN])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dN(y,v.name,u))}this.f=new A.h3(z)},
fK:function(){var z,y,x,w,v,u
z=H.f([],[A.aa])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hm(v.type,v.size,v.name,u))}this.r=new A.jA(z)},
aJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dk(z,y,b,a,c)},
eU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dk(z,y,b,a,c)},
eV:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.dk(z,y,b,a,c)},
bq:function(a,b){return new P.fb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hm:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jv(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jy(this.a,this.e,c,d)
case 35667:return new A.jw(this.a,this.e,c,d)
case 35668:return new A.jx(this.a,this.e,c,d)
case 35669:return new A.jz(this.a,this.e,c,d)
case 35674:return new A.jC(this.a,this.e,c,d)
case 35675:return new A.dl(this.a,this.e,c,d)
case 35676:return new A.aF(this.a,this.e,c,d)
case 35678:return this.eU(b,c,d)
case 35680:return this.eV(b,c,d)
case 35670:throw H.a(this.bq("BOOL",c))
case 35671:throw H.a(this.bq("BOOL_VEC2",c))
case 35672:throw H.a(this.bq("BOOL_VEC3",c))
case 35673:throw H.a(this.bq("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},ez:{"^":"de;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},aa:{"^":"b;"},jA:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
ht:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.ht("\n")}},P:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jw:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jx:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jz:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},ju:{"^":"aa;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dk:function(a,b,c,d,e){var z=new A.ju(a,b,c,e)
z.f=d
z.e=P.i3(d,0,!1,P.m)
return z}}},Z:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jv:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jy:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jC:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dl:{"^":"aa;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bo(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aF:{"^":"aa;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bo(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"aa;a,b,c,d",
ew:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ai:{"^":"aa;a,b,c,d",
cO:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
cA:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.mO(d,e,new F.lT(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.hE(j)},
mO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,{func:1,ret:-1,args:[F.aN,P.A,P.A]})
if(a<1)return
if(b<1)return
z=F.df()
y=H.f([],[F.aN])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cx(null,null,new V.aX(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ci(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cx(null,null,new V.aX(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ci(d))}}z.d.hd(a+1,b+1,y)
return z},
lT:{"^":"n:43;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cv(z.b,b).cv(z.d.cv(z.c,b),c)
z=new V.ah(y.a,y.b,y.c)
if(!J.a1(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a6()}a.si1(y.C(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
x=new V.bH(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.a1(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a6()}}},
am:{"^":"b;0a,0b,0c,0d,0e",
gcl:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eb())return
return v.C(0,Math.sqrt(v.F(v)))},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.F(z)))
z=w.M(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.b7(z.C(0,Math.sqrt(z.F(z))))
return z.C(0,Math.sqrt(z.F(z)))},
cd:function(){if(this.d!=null)return!0
var z=this.eO()
if(z==null){z=this.eQ()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.N(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eb())return
return v.C(0,Math.sqrt(v.F(v)))},
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
if($.r.$2(n,0)){z=r.M(0,u)
z=new V.N(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.M(0,u)
z=new V.ah(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).M(0,x)
z=new V.N(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.F(z)))
z=k.b7(m)
z=z.C(0,Math.sqrt(z.F(z))).b7(k)
m=z.C(0,Math.sqrt(z.F(z)))}return m},
cb:function(){if(this.e!=null)return!0
var z=this.eN()
if(z==null){z=this.eP()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
D:function(a){var z,y
if(this.gcl())return a+"disposed"
z=a+C.b.ag(J.a9(this.a.e),0)+", "+C.b.ag(J.a9(this.b.e),0)+", "+C.b.ag(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.D("")},
p:{
bz:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.u("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},
d3:{"^":"b;0a,0b",
gcl:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
D:function(a){if(this.gcl())return a+"disposed"
return a+C.b.ag(J.a9(this.a.e),0)+", "+C.b.ag(J.a9(this.b.e),0)},
K:function(){return this.D("")}},
db:{"^":"b;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ag(J.a9(z.e),0)},
K:function(){return this.D("")}},
ey:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
hE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.a1()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){v=z[w]
this.a.h(0,v.hk())}this.a.a1()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.db()
if(r.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a1()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d3()
s=p.a
if(s==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.t(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.B(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.a1()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.a1()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bz(p,o,l)}z=this.e
if(!(z==null))z.aD(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.aD(0)
return y},
dz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ax()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gcP(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.A
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dS])
for(r=0,q=0;q<w;++q){p=b.hf(q)
o=p.gcP(p)
C.a.m(s,q,new Z.dS(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hz(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cP(new Z.f7(34962,j),s,b)
i.b=H.f([],[Z.ck])
if(this.b.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a1()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a1()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.a1()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.Z(z,"\n")},
aV:function(a){var z=this.e
if(!(z==null))z.B(a)},
a6:function(){return this.aV(null)},
p:{
df:function(){var z,y
z=new F.ey()
y=new F.k_(z)
y.b=!1
y.c=H.f([],[F.aN])
z.a=y
y=new F.j_(z)
y.b=H.f([],[F.db])
z.b=y
y=new F.iZ(z)
y.b=H.f([],[F.d3])
z.c=y
y=new F.iY(z)
y.b=H.f([],[F.am])
z.d=y
z.e=null
return z}}},
iY:{"^":"b;a,0b",
hc:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.aN],"$asd")
z=H.f([],[F.am])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bz(y,w,v))}return z},
hd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.aN],"$asd")
z=H.f([],[F.am])
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
C.a.h(z,F.bz(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bz(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bz(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bz(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cd())x=!1
return x},
cc:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cb())x=!1
return x},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
iZ:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
j_:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
aN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ci:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cx(this.cx,x,u,z,y,w,v,a,t)},
hk:function(){return this.ci(null)},
si1:function(a){var z
if(!J.a1(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a6()}},
hz:function(a){var z,y
z=J.J(a)
if(z.A(a,$.$get$ax())){z=this.f
y=[P.A]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aQ())){z=this.r
y=[P.A]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aP())){z=this.x
y=[P.A]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aR())){z=this.y
y=[P.A]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.A(a,$.$get$aS())){z=this.z
y=[P.A]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bL())){z=this.Q
y=[P.A]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bM())){z=this.Q
y=[P.A]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$bm()))return H.f([this.ch],[P.A])
else if(z.A(a,$.$get$aO())){z=this.cx
y=[P.A]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.A])},
cd:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.I(0,new F.k6(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.aD(0)}return!0},
cb:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.I(0,new F.k5(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.aD(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
D:function(a){var z,y,x
z=H.f([],[P.k])
C.a.h(z,C.b.ag(J.a9(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.Z(z,", ")
return a+"{"+x+"}"},
K:function(){return this.D("")},
p:{
cx:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aN()
y=new F.k4(z)
y.b=H.f([],[F.db])
z.b=y
y=new F.k3(z)
x=[F.d3]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.k0(z)
x=[F.am]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$f4()
z.e=0
y=$.$get$ax()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aQ().a)!==0?e:null
z.x=(x&$.$get$aP().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$f5().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
k6:{"^":"n:9;a",
$1:function(a){var z,y
H.c(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
k5:{"^":"n:9;a",
$1:function(a){var z,y
H.c(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
k_:{"^":"b;a,0b,0c",
a1:function(){var z,y,x,w
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
this.a.a6()
return!0},
he:function(a,b,c,d,e,f,g,h,i){var z=F.cx(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
br:function(a,b,c,d,e,f){return this.he(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cd()
return!0},
cc:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cb()
return!0},
hh:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.a1(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
this.a1()
z=H.f([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
k0:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){H.e(b,{func:1,ret:-1,args:[F.am]})
C.a.I(this.b,b)
C.a.I(this.c,new F.k1(this,b))
C.a.I(this.d,new F.k2(this,b))},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
k1:{"^":"n:9;a,b",
$1:function(a){H.c(a,"$isam")
if(!J.a1(a.a,this.a))this.b.$1(a)}},
k2:{"^":"n:9;a,b",
$1:function(a){var z
H.c(a,"$isam")
z=this.a
if(!J.a1(a.a,z)&&!J.a1(a.b,z))this.b.$1(a)}},
k3:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}},
k4:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
D:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].D(a))
return C.a.Z(z,"\n")},
K:function(){return this.D("")}}}],["","",,O,{"^":"",ib:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
N:[function(a){var z
H.c(a,"$isp")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.N(null)},"dc","$1","$0","gaL",0,2,1],
fF:[function(a){H.c(a,"$isp")
this.a=null
this.N(a)},function(){return this.fF(null)},"iG","$1","$0","gfE",0,2,1],
ig:[function(a,b){var z=V.aL
z=new D.c2(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gf8",8,0,24],
ih:[function(a,b){var z=V.aL
z=new D.c3(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gf9",8,0,24],
d2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a5(z.e.length+3,4)*4
x=C.d.a5(z.f.length+3,4)*4
w=C.d.a5(z.r.length+3,4)*4
v=C.d.a5(z.x.length+3,4)*4
u=C.d.a5(z.y.length+3,4)*4
t=C.d.a5(z.z.length+3,4)*4
s=C.d.a5(this.e.a.length+3,4)*4
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$ax()
if(c){z=$.$get$aQ()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aP()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}return new A.ig(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.v(a,"$isd",[T.ct],"$asd")
if(b!=null)if(!C.a.b5(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
x=new V.N(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cH(x)}}},
eh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d2()
y=H.c(a.fr.j(0,z.ax),"$isel")
if(y==null){y=A.ic(z,a.a)
a.du(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aT
z=b.e
if(!(z instanceof Z.cP)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.av()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cc()
u.a.cc()
u=u.e
if(!(u==null))u.aD(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hh()
t=t.e
if(!(t==null))t.aD(0)}r=b.d.dz(new Z.f8(a.a),w)
r.az($.$get$ax()).e=this.a.y.c
if(z)r.az($.$get$aQ()).e=this.a.Q.c
if(v)r.az($.$get$aP()).e=this.a.z.c
if(x.rx)r.az($.$get$aR()).e=this.a.ch.c
if(u)r.az($.$get$aS()).e=this.a.cx.c
if(x.x1)r.az($.$get$aO()).e=this.a.cy.c
b.e=r}z=T.ct
q=H.f([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga_(u)
v=v.db
v.toString
v.ah(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga_(u)
t=a.dx
t=u.l(0,t.ga_(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ah(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghS()
t=a.dx
t=u.l(0,t.ga_(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ah(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ah(u.ab(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ah(u.ab(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ah(C.t.ab(u,!0))}if(x.aS>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.A],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.c(t,"$isaL")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bo(H.v(t.ab(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.U(q,this.f.d)
v=this.a
u=this.f.d
v.aj(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.U(q,this.f.e)
v=this.a
u=this.f.e
v.ae(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.U(q,this.r.d)
v=this.a
u=this.r.d
v.aj(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.U(q,this.r.e)
v=this.a
u=this.r.e
v.ae(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.U(q,this.x.d)
v=this.a
u=this.x.d
v.aj(v.aS,v.aT,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.U(q,this.x.e)
v=this.a
u=this.x.e
v.ae(v.ax,v.aT,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bu
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.U(q,this.y.d)
v=this.a
u=this.y.d
v.aj(v.dG,v.bv,u)
u=this.a
v=this.y.f
u=u.bu
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.U(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.dH,v.bv,u)
u=this.a
v=this.y.f
u=u.bu
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bw
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.by
u.a.uniform1f(u.d,s)
break
case C.e:this.U(q,this.z.d)
v=this.a
u=this.z.d
v.aj(v.dI,v.bx,u)
u=this.a
v=this.z.f
u=u.bw
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.by
v.a.uniform1f(v.d,s)
break
case C.f:this.U(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.dJ,v.bx,u)
u=this.a
v=this.z.f
u=u.bw
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.by
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dU
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cm
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cH(j.a)
s=t.a
h=t.b
g=t.c
g=t.C(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dV
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cn
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gba(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bh(j.gba(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gw(j)
g=i.d
h=t.gbK()
s=t.gbi()
t=t.gbs()
g.a.uniform3f(g.d,h,s,t)
t=j.gc7()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gc8()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gc9()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dW
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.co
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gba(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gck(j).iN()
g=i.c
h=t.gaP(t)
s=t.gaQ(t)
t=t.gaR()
g.a.uniform3f(g.d,h,s,t)
t=m.bh(j.gba(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gw(j)
s=i.e
h=t.gbK()
g=t.gbi()
t=t.gbs()
s.a.uniform3f(s.d,h,g,t)
t=j.giL()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giK()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gc7()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dX
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
s=this.a.cp
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbe()
H.v(q,"$isd",t,"$asd")
if(!C.a.b5(q,s)){s.saZ(q.length)
C.a.h(q,s)}s=j.gck(j)
h=i.d
g=s.gaP(s)
f=s.gaQ(s)
s=s.gaR()
h.a.uniform3f(h.d,g,f,s)
s=j.gbL()
f=i.b
g=s.gaP(s)
h=s.gaQ(s)
s=s.gaR()
f.a.uniform3f(f.d,g,h,s)
s=j.gbb(j)
h=i.c
g=s.gaP(s)
f=s.gaQ(s)
s=s.gaR()
h.a.uniform3f(h.d,g,f,s)
s=m.cH(j.gck(j))
f=s.a
g=s.b
h=s.c
h=s.C(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gw(j)
g=i.f
f=h.gbK()
s=h.gbi()
h=h.gbs()
g.a.uniform3f(g.d,f,s,h)
h=j.gbe()
s=h.gec(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gda()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaZ())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dY
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.y,u=v.length,t=[P.A],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
h=this.a.cq
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbe()
H.v(q,"$isd",s,"$asd")
if(!C.a.b5(q,h)){h.saZ(q.length)
C.a.h(q,h)}e=m.l(0,j.ga_(j))
h=j.ga_(j).bh(new V.ah(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcK(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bh(new V.ah(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cu(0)
d=i.d
n=new Float32Array(H.bo(H.v(new V.em(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gw(j)
h=i.e
f=d.gbK()
g=d.gbi()
d=d.gbs()
h.a.uniform3f(h.d,f,g,d)
d=j.gbe()
h=d.gec(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gda()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaZ())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc7()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc8()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc9()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dZ
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cr
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbe()
H.v(q,"$isd",z,"$asd")
if(!C.a.b5(q,t)){t.saZ(q.length)
C.a.h(q,t)}t=j.gba(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gck(j)
g=i.c
h=t.gaP(t)
s=t.gaQ(t)
t=t.gaR()
g.a.uniform3f(g.d,h,s,t)
t=j.gbL()
s=i.d
h=t.gaP(t)
g=t.gaQ(t)
t=t.gaR()
s.a.uniform3f(s.d,h,g,t)
t=j.gbb(j)
g=i.e
h=t.gaP(t)
s=t.gaQ(t)
t=t.gaR()
g.a.uniform3f(g.d,h,s,t)
t=m.bh(j.gba(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbe()
s=t.gec(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gda()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaZ())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gw(j)
s=i.y
h=t.gbK()
g=t.gbi()
t=t.gbs()
s.a.uniform3f(s.d,h,g,t)
t=j.giS()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giT()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gc7()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.U(q,this.Q.d)
z=this.a
v=this.Q.d
z.aj(z.dK,z.bz,v)
break
case C.f:this.U(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.dL,z.bz,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga_(v).cu(0)
a.Q=v}z=z.fy
z.toString
z.ah(v.ab(0,!0))}if(x.dy){this.U(q,this.ch)
z=this.a
v=this.ch
z.ae(z.dM,z.dN,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bA
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.U(q,this.cx.d)
z=this.a
v=this.cx.d
z.aj(z.dO,z.bB,v)
v=this.a
z=this.cx.f
v=v.bA
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.U(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.dP,z.bB,v)
v=this.a
z=this.cx.f
v=v.bA
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bD
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bC
v.a.uniform1f(v.d,t)
break
case C.e:this.U(q,this.cy.d)
z=this.a
v=this.cy.d
z.aj(z.dQ,z.bE,v)
v=this.a
z=this.cy.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bC
z.a.uniform1f(z.d,t)
break
case C.f:this.U(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.dR,z.bE,v)
v=this.a
z=this.cy.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bC
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bF
z.a.uniform1f(z.d,u)
break
case C.e:this.U(q,this.db.d)
z=this.a
u=this.db.d
z.aj(z.dS,z.bG,u)
u=this.a
z=this.db.f
u=u.bF
u.a.uniform1f(u.d,z)
break
case C.f:this.U(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.dT,z.bG,u)
u=this.a
z=this.db.f
u=u.bF
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.aa(a)
z.al(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].al(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.dD()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d2().ax}},id:{"^":"d5;0f,a,b,0c,0d,0e",
fH:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.I(this.b,y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
b0:function(){this.cQ()
this.fH(1)}},d5:{"^":"b;",
N:[function(a){this.a.N(H.c(a,"$isp"))},function(){return this.N(null)},"dc","$1","$0","gaL",0,2,1],
b0:["cQ",function(){}],
b1:["eA",function(){}],
dj:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.e(this.gaL(),{func:1,ret:-1,args:[D.p]})
C.a.Y(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.e(this.gaL(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I(this.b+".texture2D",x,this.d,this,[T.eF])
z.b=!0
this.a.N(z)}},
dk:function(a){},
hi:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.N(null)}this.b0()
this.dj(null)
this.dk(null)
this.a.N(null)}},ie:{"^":"d5;a,b,0c,0d,0e"},b7:{"^":"d5;0f,a,b,0c,0d,0e",
c3:function(a){var z,y
if(!J.a1(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.y])
y.b=!0
this.a.N(y)}},
b0:["cR",function(){this.cQ()
this.c3(new V.y(0,0,0))}],
b1:["bk",function(){this.eA()
this.c3(new V.y(1,1,1))}],
sw:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b1()
z=this.a
z.a=null
z.N(null)}this.c3(b)}},ih:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
bo:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
b0:function(){this.cR()
this.bo(1)},
b1:function(){this.bk()
this.bo(1)},
saw:function(a){var z
if(a<=0)this.hi(0)
else if(this.c===C.c){this.c=C.h
this.bk()
this.bo(1)
z=this.a
z.a=null
z.N(null)}this.bo(a)}},ii:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
bp:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
b0:function(){this.cR()
this.bp(100)},
b1:function(){this.bk()
this.bp(100)}},j0:{"^":"c6;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
N:[function(a){var z
H.c(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.N(null)},"dc","$1","$0","gaL",0,2,1],
eh:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.c(a.fr.j(0,"Skybox"),"$isez")
if(z==null){y=a.a
z=new A.ez(y,"Skybox")
z.cS(y,"Skybox")
z.e8(0,$.j2,$.j1)
z.x=z.f.j(0,"posAttr")
z.y=H.j(z.r.j(0,"fov"),"$isZ")
z.z=H.j(z.r.j(0,"ratio"),"$isZ")
z.Q=H.j(z.r.j(0,"boxClr"),"$isL")
z.ch=H.j(z.r.j(0,"boxTxt"),"$isai")
z.cx=H.j(z.r.j(0,"viewMat"),"$isaF")
a.du(z)}this.a=z}if(b.e==null){y=b.d.dz(new Z.f8(a.a),$.$get$ax())
y.az($.$get$ax()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.W(a)}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cO(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga_(x).cu(0)
w=w.cx
w.toString
w.ah(x.ab(0,!0))
y=b.e
if(y instanceof Z.cP){y.W(a)
y.aa(a)
y.al(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dD()
y=this.c
if(y!=null)y.al(a)}},c6:{"^":"b;"}}],["","",,T,{"^":"",ct:{"^":"cL;"},eF:{"^":"ct;0b,0c,0d,0e,0f,0r,0x,0y,a",
W:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
al:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},di:{"^":"ct;0b,0c,0d,0e,a",
W:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
al:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jg:{"^":"b;a,0b,0c,0d,0e",
hC:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.cY(null,a,null)
w=new T.eF(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.H()
z=W.a5
W.a0(x,"load",H.e(new T.ji(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hB:function(a){return this.hC(a,!1,!1,!1,!1)},
aK:function(a,b,c,d,e,f){var z,y
z=W.cY(null,c,null);++this.d
y=W.a5
W.a0(z,"load",H.e(new T.jh(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
di:function(a,b,c){var z,y,x,w
b=V.dI(b,2)
z=V.dI(a.width,2)
y=V.dI(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cR(null,null)
x.width=z
x.height=y
w=H.c(C.k.er(x,"2d"),"$isdU")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.md(w.getImageData(0,0,x.width,x.height))}}},ji:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.di(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.A.ek(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.dF()}++x.e}},jh:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.di(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.A.ek(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dF();++z.e}}}],["","",,X,{"^":"",ce:{"^":"b;",$isaC:1},hH:{"^":"dh;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aq:function(a){var z=this.x
if(!(z==null))z.B(a)},
sdA:function(a,b){var z
if(this.b){this.b=!1
z=new D.I("clearColor",!0,!1,this,[P.af])
z.b=!0
this.aq(z)}},
W:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.ak(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.ak(w.b*x)
t=C.d.ak(w.c*y)
a.c=t
w=C.d.ak(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cV:function(a,b,c,d,e,f,g){var z,y
z=new X.hH()
y=new V.aX(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ex(0,0,1,1)
z.r=y
return z}}},hJ:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
W:function(a){var z
a.cy.bI(V.b8())
z=V.b8()
a.db.bI(z)},
al:function(a){a.cy.aC()
a.db.aC()},
$isaC:1,
$isce:1},it:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
aq:[function(a){var z
H.c(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.aq(null)},"i7","$1","$0","geK",0,2,1],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bI(V.aA(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.et
if(z==null){z=V.en(new V.ah(0,0,0),new V.N(0,1,0),new V.N(0,0,-1))
$.et=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aX(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bI(r)},
al:function(a){a.cy.aC()
a.db.aC()},
$isaC:1,
$isce:1,
p:{
es:function(a,b,c,d){var z,y,x,w
z=new X.it()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gu()
x.toString
w=H.e(z.geK(),{func:1,ret:-1,args:[D.p]})
C.a.h(x.a,w)}x=new D.I("mover",y,z.a,z,[U.ac])
x.b=!0
z.aq(x)}x=z.b
if(!$.r.$2(x,b)){y=z.b
z.b=b
x=new D.I("fov",y,b,z,[P.A])
x.b=!0
z.aq(x)}x=z.c
if(!$.r.$2(x,d)){y=z.c
z.c=d
x=new D.I("near",y,d,z,[P.A])
x.b=!0
z.aq(x)}x=z.d
if(!$.r.$2(x,a)){y=z.d
z.d=a
x=new D.I("far",y,a,z,[P.A])
x.b=!0
z.aq(x)}return z}}},dh:{"^":"b;"}}],["","",,B,{"^":"",
mI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=document
y=z.body
x=y.style
x.backgroundColor="#FFFFFF"
x.margin="40px"
x.padding="0"
w=z.createElement("div")
x=w.style
x.position="fixed"
x.width="100%"
x.height="100%"
x.left="0px"
x.top="0px"
x.zIndex="-1"
v="url('"+d+"')"
x.backgroundImage=v
x.backgroundRepeat="no-repeat"
y.appendChild(w)
u=z.createElement("div")
x=u.style
x.position="relative"
x.textAlign="center"
y.appendChild(u)
t=z.createElement("div")
x=t.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
x.marginTop="40px"
x.marginBottom="40px"
x.padding="40px"
x.background="rgba(255,255,255,0.8)"
C.r.fI(x,(x&&C.r).cY(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
u.appendChild(t)
if(a.length!==0)z.title=a
s=z.createElement("div")
t.appendChild(s)
s.appendChild(b)
r=z.createElement("div")
x=r.style
x.display="block"
x.clear="both"
s.appendChild(r)
x=W.a5
W.a0(z,"scroll",H.e(new B.mJ(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
mK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$isd",[P.k],"$asd")
z=document
y=z.createElement("div")
x=y.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
w=z.createElement("table")
w.id="shellTable"
x=w.style
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
y.appendChild(w)
v=w.insertRow(-1)
u=W.cR(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.c(v.insertCell(-1),"$isbJ")
x=c.length>0
s=x?5:4
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.c(q.insertCell(-1),"$isbJ").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<2;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.c(q.insertCell(-1),"$isbJ")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.c(q.insertCell(-1),"$isbJ")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.c(q.insertCell(-1),"$isbJ").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.mI(a,y,!1,"../resources/SnowTop.png")},
mL:function(a){P.jp(C.H,new B.mM(a))},
iH:{"^":"b;a,0b",
ds:function(a,b,c,d){var z,y,x,w,v,u,t
H.e(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dn().gbJ().j(0,z)==null)if(d){c.$0()
this.en(b)
y=!0}else y=!1
else if(P.dn().gbJ().j(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.bX(this.b).h(0,w)
u=W.hL("radio")
u.checked=y
u.name=z
z=W.a5
W.a0(u,"change",H.e(new B.iI(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.bX(this.b).h(0,x.createElement("br"))},
a7:function(a,b,c){return this.ds(a,b,c,!1)},
en:function(a){var z,y,x,w,v
z=P.dn()
y=P.k
x=P.i_(z.gbJ(),y,y)
x.m(0,this.a,a)
w=z.ei(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.l9([],[]).cI(""),"",v)}},
iI:{"^":"n:10;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.en(this.c)
this.d.$0()}}},
mJ:{"^":"n:10;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.j.ak(this.b.scrollTop))+"px"
z.top=y}},
mM:{"^":"n:47;a",
$1:function(a){H.c(a,"$isbi")
P.dJ(C.j.em(this.a.ghu(),2)+" fps")}},
jd:{"^":"b;0a,b",
a7:function(a,b,c){var z,y
z=W.cY(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=W.ab
W.a0(z,"click",H.e(new B.jf(this,z,b),{func:1,ret:-1,args:[y]}),!1,y)
J.bX(this.a).h(0,z)
J.bX(this.a).h(0,document.createElement("br"))
if(c)z.click()},
h:function(a,b){return this.a7(a,b,!1)}},
jf:{"^":"n:48;a,b,c",
$1:function(a){var z,y
H.c(a,"$isab")
z=this.a
y=J.bX(z.a)
y.I(y,new B.je())
y=this.b.style
y.border="solid 2px black"
z.b.$1(this.c)}},
je:{"^":"n:49;",
$1:function(a){var z
H.c(a,"$isW")
if(!!J.J(a).$iscX){z=a.style
z.border="solid 2px white"}}}}],["","",,B,{"^":"",
fR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
B.mK("Test 015",H.f(["bumpMaps","controls"],[P.k]),"Test of Material Lighting shader with bump mapping, reflections, refractions.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.t(P.u("Failed to find an element with the identifier, threeDart."))
x=E.jn(y,!0,!0,!0,!1)
w=X.cV(!0,!0,!1,null,2000,null,0)
w.sdA(0,!1)
v=E.e6(null,!0,null,"",null,null)
u=F.df()
F.bS(u,null,null,1,1,1,0,0,1)
F.bS(u,null,null,1,1,0,1,0,3)
F.bS(u,null,null,1,1,0,0,1,2)
F.bS(u,null,null,1,1,-1,0,0,0)
F.bS(u,null,null,1,1,0,-1,0,0)
F.bS(u,null,null,1,1,0,0,-1,3)
u.av()
v.sbP(0,u)
t=x.f
s=t.a
r=s.createTexture()
s.bindTexture(34067,r)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
q=new T.di(0)
q.b=r
q.c=!1
q.d=0
q.e=D.H()
t.aK(q,r,"../resources/maskonaive/posx.jpg",34069,!1,!1)
t.aK(q,r,"../resources/maskonaive/negx.jpg",34070,!1,!1)
t.aK(q,r,"../resources/maskonaive/posy.jpg",34071,!1,!1)
t.aK(q,r,"../resources/maskonaive/negy.jpg",34072,!1,!1)
t.aK(q,r,"../resources/maskonaive/posz.jpg",34073,!1,!1)
t.aK(q,r,"../resources/maskonaive/negz.jpg",34074,!1,!1)
p=new O.ib()
t=O.cS(V.aL)
p.e=t
t.aY(p.gf8(),p.gf9())
t=new O.b7(p,"emission")
t.c=C.c
t.f=new V.y(0,0,0)
p.f=t
t=new O.b7(p,"ambient")
t.c=C.c
t.f=new V.y(0,0,0)
p.r=t
t=new O.b7(p,"diffuse")
t.c=C.c
t.f=new V.y(0,0,0)
p.x=t
t=new O.b7(p,"invDiffuse")
t.c=C.c
t.f=new V.y(0,0,0)
p.y=t
t=new O.ii(p,"specular")
t.c=C.c
t.f=new V.y(0,0,0)
t.ch=100
p.z=t
t=new O.ie(p,"bump")
t.c=C.c
p.Q=t
p.ch=null
t=new O.b7(p,"reflect")
t.c=C.c
t.f=new V.y(0,0,0)
p.cx=t
t=new O.ih(p,"refract")
t.c=C.c
t.f=new V.y(0,0,0)
t.ch=1
p.cy=t
t=new O.id(p,"alpha")
t.c=C.c
t.f=1
p.db=t
t=new D.hU()
t.bl(D.a3)
t.e=H.f([],[D.ch])
t.f=H.f([],[D.iv])
t.r=H.f([],[D.j3])
t.x=H.f([],[D.jj])
t.y=H.f([],[D.jk])
t.z=H.f([],[D.jl])
t.Q=null
t.ch=null
t.cN(t.gf7(),t.gfq(),t.gft())
p.dx=t
s=t.Q
if(s==null){s=D.H()
t.Q=s
t=s}else t=s
s={func:1,ret:-1,args:[D.p]}
o=H.e(p.gfE(),s)
C.a.h(t.a,o)
o=p.dx
t=o.ch
if(t==null){t=D.H()
o.ch=t}o=H.e(p.gaL(),s)
C.a.h(t.a,o)
p.dy=null
t=p.dx
n=U.dY(V.en(new V.ah(0,0,0),new V.N(0,1,0),new V.N(-1,-1,-1)))
m=new D.ch()
m.c=new V.y(1,1,1)
m.a=new V.N(0,0,1)
l=m.b
m.b=n
n=n.gu()
n.toString
k=H.e(m.geH(),s)
C.a.h(n.a,k)
n=new D.I("mover",l,m.b,m,[U.ac])
n.b=!0
m.aG(n)
j=new V.y(1,1,1)
if(!m.c.A(0,j)){l=m.c
m.c=j
n=new D.I("color",l,j,m,[V.y])
n.b=!0
m.aG(n)}t.h(0,m)
t=p.r
t.sw(0,new V.y(0.1,0.1,0.1))
t=p.x
t.sw(0,new V.y(0.1,0.1,0.1))
p.z.sw(0,new V.y(0,0,0))
t=p.z
if(t.c===C.c){t.c=C.h
t.bk()
t.bp(100)
n=t.a
n.a=null
n.N(null)}t.bp(10)
t=p.ch
if(t!==q){if(t!=null)C.a.Y(t.e.a,o)
l=p.ch
p.ch=q
C.a.h(q.e.a,o)
t=new D.I("environment",l,p.ch,p,[T.di])
t.b=!0
p.N(t)}p.cy.saw(0.6)
t=p.cy
t.sw(0,new V.y(0.2,0.3,1))
t=p.cx
t.sw(0,new V.y(0.6,0.6,0.6))
i=new U.e9()
i.bl(U.ac)
i.aY(i.gf6(),i.gfs())
i.e=null
i.f=V.b8()
i.r=0
t=x.r
o=new U.jQ()
n=U.cT()
n.scJ(0,!0)
n.scw(6.283185307179586)
n.scA(0)
n.sa8(0,0)
n.scz(100)
n.sT(0)
n.scj(0.5)
o.b=n
n=n.gu()
n.toString
m=H.e(o.gaH(),s)
C.a.h(n.a,m)
n=U.cT()
n.scJ(0,!0)
n.scw(6.283185307179586)
n.scA(0)
n.sa8(0,0)
n.scz(100)
n.sT(0)
n.scj(0.5)
o.c=n
C.a.h(n.gu().a,m)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
h=new X.aB(!1,!1,!1)
l=o.d
o.d=h
n=[X.aB]
m=new D.I("modifiers",l,h,o,n)
m.b=!0
o.R(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.I("invertX",m,!1,o,[P.af])
m.b=!0
o.R(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.I("invertY",m,!1,o,[P.af])
m.b=!0
o.R(m)}o.b3(t)
i.h(0,o)
t=x.r
o=new U.jP()
m=U.cT()
m.scJ(0,!0)
m.scw(6.283185307179586)
m.scA(0)
m.sa8(0,0)
m.scz(100)
m.sT(0)
m.scj(0.2)
o.b=m
m=m.gu()
m.toString
k=H.e(o.gaH(),s)
C.a.h(m.a,k)
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
h=new X.aB(!0,!1,!1)
l=o.c
o.c=h
m=new D.I("modifiers",l,h,o,n)
m.b=!0
o.R(m)
o.b3(t)
i.h(0,o)
t=x.r
o=new U.jR()
o.c=0.01
o.d=0
o.e=0
h=new X.aB(!1,!1,!1)
o.b=h
n=new D.I("modifiers",null,h,o,n)
n.b=!0
o.R(n)
o.b3(t)
i.h(0,o)
i.h(0,U.dY(V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.es(2000,1.0471975511965976,i,0.1)
f=new M.hm()
f.sb4(null)
f.sbc(0,null)
f.sbd(null)
t=E.e6(null,!0,null,"",null,null)
u=F.df()
o=u.a
n=new V.N(-1,-1,1)
n=n.C(0,Math.sqrt(n.F(n)))
e=o.br(new V.bH(1,2,4,6),new V.aX(1,0,0,1),new V.ah(-1,-1,0),new V.T(0,1),n,null)
o=u.a
n=new V.N(1,-1,1)
n=n.C(0,Math.sqrt(n.F(n)))
d=o.br(new V.bH(0,3,4,6),new V.aX(0,0,1,1),new V.ah(1,-1,0),new V.T(1,1),n,null)
o=u.a
n=new V.N(1,1,1)
n=n.C(0,Math.sqrt(n.F(n)))
c=o.br(new V.bH(0,2,5,6),new V.aX(0,1,0,1),new V.ah(1,1,0),new V.T(1,0),n,null)
o=u.a
n=new V.N(-1,1,1)
n=n.C(0,Math.sqrt(n.F(n)))
b=o.br(new V.bH(0,2,4,7),new V.aX(1,1,0,1),new V.ah(-1,1,0),new V.T(0,0),n,null)
u.d.hc(H.f([e,d,c,b],[F.aN]))
u.av()
t.sbP(0,u)
f.d=t
f.e=null
t=new O.j0()
t.b=1.0471975511965976
l=t.c
t.c=q
o=q.e
n=H.e(t.gaL(),s)
C.a.h(o.a,n)
o=new D.I("boxTexture",l,t.c,t,[T.di])
o.b=!0
t.N(o)
j=new V.y(1,1,1)
if(!J.a1(t.d,j)){l=t.d
t.d=j
o=new D.I("boxColor",l,j,t,[V.y])
o.b=!0
t.N(o)}t.e=null
f.sbd(t)
f.sbc(0,w)
f.sb4(g)
a=new M.hA()
t=O.cS(E.aK)
a.d=t
t.aY(a.gfb(),a.gfc())
a.e=null
a.f=null
a.r=null
a.x=null
a.sb4(null)
a.sbc(0,null)
a.sbd(null)
a.sb4(g)
a.sbd(p)
a.sbc(0,w)
a.d.h(0,v)
a.b.sdA(0,!1)
t=M.aD
o=H.f([f,a],[t])
n=new M.hh()
n.bl(t)
n.e=!1
n.f=null
n.aY(n.gfu(),n.gfv())
n.c6(0,o)
t=x.d
if(t!==n){if(t!=null){t=t.gu()
t.toString
o=H.e(x.gcU(),s)
C.a.Y(t.a,o)}x.d=n
t=n.gu()
t.toString
s=H.e(x.gcU(),s)
C.a.h(t.a,s)
x.eF()}t=new B.iH("controls")
s=z.getElementById("controls")
t.b=s
if(s==null)H.t("Failed to find "+t.i(0)+"._elemId for RadioGroup")
t.ds(0,"Silver",new B.ms(p),!0)
t.a7(0,"Gold",new B.mt(p))
t.a7(0,"Glass",new B.mu(p))
t.a7(0,"Blue Glass",new B.mv(p))
t.a7(0,"Water Bubble",new B.mw(p))
t.a7(0,"No Reflection",new B.mx(p))
t.a7(0,"Pink Distort",new B.my(p))
t.a7(0,"Cloak",new B.mz(p))
t.a7(0,"White and Shiny",new B.mA(p))
t=new B.jd(new B.mB(p,x))
t.a=z.getElementById("bumpMaps")
t.a7(0,"../resources/BumpMap1.png",!0)
t.h(0,"../resources/BumpMap2.png")
t.h(0,"../resources/BumpMap3.png")
t.h(0,"../resources/BumpMap4.png")
t.h(0,"../resources/BumpMap5.png")
t.h(0,"../resources/ScrewBumpMap.png")
t.h(0,"../resources/CtrlPnlBumpMap.png")
B.mL(x)},
ms:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.2,0.2,0.2))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(1,1,1))}},
mt:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.11,0.11,0.1))
y=z.x
y.sw(0,new V.y(0.21,0.21,0.2))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(1,0.9,0.5))}},
mu:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.4)
y=z.cy
y.sw(0,new V.y(0.6,0.6,0.6))
z=z.cx
z.sw(0,new V.y(0.4,0.4,0.4))}},
mv:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.4)
y=z.cy
y.sw(0,new V.y(0.2,0.3,1))
z=z.cx
z.sw(0,new V.y(0.3,0.3,0.3))}},
mw:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.6)
y=z.cy
y.sw(0,new V.y(0.8,0.8,0.8))
z=z.cx
z.sw(0,new V.y(0.2,0.2,0.2))}},
mx:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.6)
y=z.cy
y.sw(0,new V.y(1,1,1))
z.cx.sw(0,new V.y(0,0,0))}},
my:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.9)
y=z.cy
y.sw(0,new V.y(1,0.8,0.8))
z.cx.sw(0,new V.y(0,0,0))}},
mz:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0,0,0))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.99)
y=z.cy
y.sw(0,new V.y(0.95,0.95,0.95))
z.cx.sw(0,new V.y(0,0,0))}},
mA:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.3,0.3,0.3))
y=z.x
y.sw(0,new V.y(0.5,0.5,0.5))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(0.3,0.3,0.3))}},
mB:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.hB(a)
x=z.c
if(x!==C.e){if(x===C.c)z.b1()
z.c=C.e
z.dk(null)
x=z.a
x.a=null
x.N(null)}z.dj(y)}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ed.prototype
return J.ec.prototype}if(typeof a=="string")return J.cm.prototype
if(a==null)return J.ee.prototype
if(typeof a=="boolean")return J.hP.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aI=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mi=function(a){if(typeof a=="number")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cv.prototype
return a}
J.dE=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cv.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.a1=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).A(a,b)}
J.fW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mi(a).L(a,b)}
J.dK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aI(a).j(a,b)}
J.cI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fO(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).m(a,b,c)}
J.fX=function(a,b){return J.dE(a).H(a,b)}
J.fY=function(a,b,c){return J.aV(a).fC(a,b,c)}
J.fZ=function(a,b,c,d){return J.aV(a).dt(a,b,c,d)}
J.h_=function(a,b){return J.dE(a).X(a,b)}
J.cJ=function(a,b,c){return J.aI(a).hj(a,b,c)}
J.cK=function(a,b){return J.c9(a).J(a,b)}
J.h0=function(a,b,c,d){return J.c9(a).ay(a,b,c,d)}
J.dL=function(a,b){return J.c9(a).I(a,b)}
J.bX=function(a){return J.aV(a).gce(a)}
J.b2=function(a){return J.J(a).gS(a)}
J.bw=function(a){return J.c9(a).ga2(a)}
J.at=function(a){return J.aI(a).gk(a)}
J.h1=function(a,b){return J.aV(a).hV(a,b)}
J.h2=function(a,b){return J.aV(a).sa3(a,b)}
J.a9=function(a){return J.J(a).i(a)}
I.ar=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cQ.prototype
C.r=W.hn.prototype
C.I=J.q.prototype
C.a=J.b6.prototype
C.J=J.ec.prototype
C.d=J.ed.prototype
C.t=J.ee.prototype
C.j=J.cl.prototype
C.b=J.cm.prototype
C.Q=J.c4.prototype
C.V=H.da.prototype
C.W=W.iq.prototype
C.z=J.iu.prototype
C.A=P.dc.prototype
C.q=J.cv.prototype
C.B=W.bN.prototype
C.C=W.k9.prototype
C.E=new P.h7(!1)
C.D=new P.h6(C.E)
C.F=new P.is()
C.G=new P.jZ()
C.i=new P.kW()
C.c=new A.cf(0,"ColorSourceType.None")
C.h=new A.cf(1,"ColorSourceType.Solid")
C.e=new A.cf(2,"ColorSourceType.Texture2D")
C.f=new A.cf(3,"ColorSourceType.TextureCube")
C.H=new P.c0(5e6)
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
C.w=H.f(I.ar([127,2047,65535,1114111]),[P.m])
C.m=H.f(I.ar([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.f(I.ar([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.f(I.ar([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.f(I.ar([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.p=H.f(I.ar([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.f(I.ar([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.f(I.ar([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.f(I.ar([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.f(I.ar([]),[P.k])
C.U=new H.hl(0,{},C.R,[P.k,P.k])
C.l=new P.jS(!1)
$.az=0
$.bx=null
$.dQ=null
$.dx=!1
$.fM=null
$.fG=null
$.fU=null
$.cD=null
$.cG=null
$.dF=null
$.bp=null
$.bT=null
$.bU=null
$.dy=!1
$.V=C.i
$.e3=null
$.e2=null
$.e1=null
$.e0=null
$.r=V.ij()
$.j2="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j1="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.et=null
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
I.$lazy(y,x,w)}})(["e_","$get$e_",function(){return H.fL("_$dart_dartClosure")},"d0","$get$d0",function(){return H.fL("_$dart_js")},"eJ","$get$eJ",function(){return H.aE(H.cu({
toString:function(){return"$receiver$"}}))},"eK","$get$eK",function(){return H.aE(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eL","$get$eL",function(){return H.aE(H.cu(null))},"eM","$get$eM",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aE(H.cu(void 0))},"eR","$get$eR",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eO","$get$eO",function(){return H.aE(H.eP(null))},"eN","$get$eN",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.aE(H.eP(void 0))},"eS","$get$eS",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dr","$get$dr",function(){return P.ka()},"bV","$get$bV",function(){return[]},"f3","$get$f3",function(){return P.jW()},"fa","$get$fa",function(){return H.io(H.bo(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fw","$get$fw",function(){return P.iN("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fC","$get$fC",function(){return P.lV()},"dZ","$get$dZ",function(){return{}},"f6","$get$f6",function(){return Z.ap(0)},"f4","$get$f4",function(){return Z.ap(511)},"ax","$get$ax",function(){return Z.ap(1)},"aQ","$get$aQ",function(){return Z.ap(2)},"aP","$get$aP",function(){return Z.ap(4)},"aR","$get$aR",function(){return Z.ap(8)},"aS","$get$aS",function(){return Z.ap(16)},"bL","$get$bL",function(){return Z.ap(32)},"bM","$get$bM",function(){return Z.ap(64)},"f5","$get$f5",function(){return Z.ap(96)},"bm","$get$bm",function(){return Z.ap(128)},"aO","$get$aO",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.m,[P.i,E.aK]]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:P.G,args:[W.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.p]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.k,args:[P.m]},{func:1,args:[,]},{func:1,ret:P.G,args:[P.k]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.m,[P.i,D.a3]]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.m,[P.i,U.ac]]},{func:1,ret:-1,args:[P.m,[P.i,M.aD]]},{func:1,ret:-1,args:[P.m,[P.i,V.aL]]},{func:1,ret:P.af,args:[W.M]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:W.W,args:[W.M]},{func:1,args:[P.k]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:P.G,args:[P.Y]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.af,args:[P.A,P.A]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.af,args:[[P.i,D.a3]]},{func:1,ret:[P.K,P.k,P.k],args:[[P.K,P.k,P.k],P.k]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.G,args:[F.aN,P.A,P.A]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.k]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.G,args:[P.bi]},{func:1,ret:P.G,args:[W.ab]},{func:1,ret:P.G,args:[W.W]},{func:1,ret:P.G,args:[P.k,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mP(d||a)
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
Isolate.ar=a.ar
Isolate.dC=a.dC
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fR,[])
else B.fR([])})})()
//# sourceMappingURL=test.dart.js.map
