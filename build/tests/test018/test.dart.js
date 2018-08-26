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
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dA(this,d,e,f,true,[],a1).prototype
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
var dart=[["","",,H,{"^":"",o7:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cH:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dF==null){H.mG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cc("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d0()]
if(v!=null)return v
v=H.mN(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d0(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
v:function(a,b){return a===b},
gS:function(a){return H.bN(a)},
j:["er",function(a){return"Instance of '"+H.bf(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hX:{"^":"r;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isal:1},
ej:{"^":"r;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
d1:{"^":"r;",
gS:function(a){return 0},
j:["es",function(a){return String(a)}]},
iG:{"^":"d1;"},
cd:{"^":"d1;"},
c8:{"^":"d1;",
j:function(a){var z=a[$.$get$e4()]
if(z==null)return this.es(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscY:1},
bb:{"^":"r;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.q(P.B("add"))
a.push(b)},
i6:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ca(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var z
if(!!a.fixed$length)H.q(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b6(a))}},
Y:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
hH:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b6(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bP:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.x(a,0)])
return H.h(a.slice(b,c),[H.x(a,0)])},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
ay:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.q(P.B("fill range"))
P.aP(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.B(0,1))a[z]=d},
b3:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.cZ(a,"[","]")},
ga_:function(a){return new J.aB(a,a.length,0,[H.x(a,0)])},
gS:function(a){return H.bN(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ci(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
return a[b]},
l:function(a,b,c){H.D(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.q(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
a[b]=c},
$isk:1,
$isc:1,
u:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ci(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.eg(new Array(a),b)},
eg:function(a,b){return J.bG(H.h(a,[b]))},
bG:function(a){H.c1(a)
a.fixed$length=Array
return a},
o5:[function(a,b){return J.h9(H.h_(a,"$isaj"),H.h_(b,"$isaj"))},"$2","mc",8,0,50]}},
o6:{"^":"bb;$ti"},
aB:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c6:{"^":"r;",
aM:function(a,b){var z
H.fZ(b)
if(typeof b!=="number")throw H.a(H.a5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbF(b)
if(this.gbF(a)===z)return 0
if(this.gbF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbF:function(a){return a===0?1/a<0:a<0},
il:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cs:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
ef:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbF(a))return"-"+z
return z},
bc:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.B("Unexpected toString result: "+z))
x=J.at(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a*b},
bg:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aK:function(a,b){var z
if(a>0)z=this.dd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fT:function(a,b){if(b<0)throw H.a(H.a5(b))
return this.dd(a,b)},
dd:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a<b},
ad:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a>b},
$isaj:1,
$asaj:function(){return[P.V]},
$ist:1,
$isV:1},
ei:{"^":"c6;",$ism:1},
eh:{"^":"c6;"},
c7:{"^":"r;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b<0)throw H.a(H.aI(a,b))
if(b>=a.length)H.q(H.aI(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aI(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.ci(b,null,null))
return a+b},
aX:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a5(b))
c=P.aP(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a5(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a7:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a5(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.a7(a,b,0)},
w:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a5(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.ca(b,null,null))
if(b>c)throw H.a(P.ca(b,null,null))
if(c>a.length)throw H.a(P.ca(c,null,null))
return a.substring(b,c)},
aB:function(a,b){return this.w(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aa:function(a,b){return this.hX(a,b," ")},
dW:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dV:function(a,b){return this.dW(a,b,0)},
hu:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.n8(a,b,c)},
aM:function(a,b){var z
H.K(b)
if(typeof b!=="string")throw H.a(H.a5(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isaj:1,
$asaj:function(){return[P.i]},
$iset:1,
$isi:1}}],["","",,H,{"^":"",
cI:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.jh("No element")},
jf:function(a,b,c){var z
H.w(a,"$isc",[c],"$asc")
H.f(b,{func:1,ret:P.m,args:[c,c]})
z=J.am(a)
if(typeof z!=="number")return z.L()
H.cb(a,0,z-1,b,c)},
cb:function(a,b,c,d,e){H.w(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.je(a,b,c,d,e)
else H.jd(a,b,c,d,e)},
je:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.at(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aA(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jd:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isc",[a2],"$asc")
H.f(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.a1(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a1(b+a0,2)
v=w-z
u=w+z
t=J.at(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aA(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aA(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aA(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aA(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aA(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aA(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aA(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aA(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aA(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.F(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.K()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ad()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.K()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ad()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ad()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.cb(a,b,m-2,a1,a2)
H.cb(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.F(a1.$2(t.i(a,m),r),0);)++m
for(;J.F(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cb(a,m,l,a1,a2)}else H.cb(a,m,l,a1,a2)},
hp:{"^":"jO;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.X(this.a,b)},
$ascA:function(){return[P.m]},
$asy:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hF:{"^":"k;"},
ib:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.at(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b6(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ik:{"^":"k;a,b,$ti",
ga_:function(a){return new H.il(J.bB(this.a),this.b,this.$ti)},
gm:function(a){return J.am(this.a)},
J:function(a,b){return this.b.$1(J.cO(this.a,b))},
$ask:function(a,b){return[b]}},
il:{"^":"d_;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd_:function(a,b){return[b]}},
kj:{"^":"k;a,b,$ti",
ga_:function(a){return new H.kk(J.bB(this.a),this.b,this.$ti)}},
kk:{"^":"d_;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
co:{"^":"b;$ti"},
cA:{"^":"b;$ti",
l:function(a,b,c){H.D(b)
H.z(c,H.aJ(this,"cA",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.aJ(this,"cA",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jO:{"^":"ct+cA;"}}],["","",,H,{"^":"",
ht:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mB:function(a){return init.types[H.D(a)]},
fV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.a5(a))
return z},
bN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iQ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
bf:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$iscd){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.aB(w,1)
r=H.dG(H.c1(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iI:function(){if(!!self.location)return self.location.href
return},
ev:function(a){var z,y,x,w,v
H.c1(a)
z=J.am(a)
if(typeof z!=="number")return z.en()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iR:function(a){var z,y,x,w
z=H.h([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a5(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aK(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a5(w))}return H.ev(z)},
ew:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a5(x))
if(x<0)throw H.a(H.a5(x))
if(x>65535)return H.iR(a)}return H.ev(a)},
iS:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.en()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cw:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aK(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){return a.b?H.ai(a).getUTCFullYear()+0:H.ai(a).getFullYear()+0},
iN:function(a){return a.b?H.ai(a).getUTCMonth()+1:H.ai(a).getMonth()+1},
iJ:function(a){return a.b?H.ai(a).getUTCDate()+0:H.ai(a).getDate()+0},
iK:function(a){return a.b?H.ai(a).getUTCHours()+0:H.ai(a).getHours()+0},
iM:function(a){return a.b?H.ai(a).getUTCMinutes()+0:H.ai(a).getMinutes()+0},
iO:function(a){return a.b?H.ai(a).getUTCSeconds()+0:H.ai(a).getSeconds()+0},
iL:function(a){return a.b?H.ai(a).getUTCMilliseconds()+0:H.ai(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a5(a))},
d:function(a,b){if(a==null)J.am(a)
throw H.a(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.D(J.am(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.T(b,a,"index",null,z)
return P.ca(b,"index",null)},
mx:function(a,b,c){if(a>c)return new P.cx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cx(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
a5:function(a){return new P.aK(!0,a,null,null)},
mm:function(a){if(typeof a!=="number")throw H.a(H.a5(a))
return a},
a:function(a){var z
if(a==null)a=new P.es()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h3})
z.name=""}else z.toString=H.h3
return z},
h3:function(){return J.aa(this.dartException)},
q:function(a){throw H.a(a)},
E:function(a){throw H.a(P.b6(a))},
aw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aK(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d2(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.er(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eL()
u=$.$get$eM()
t=$.$get$eN()
s=$.$get$eO()
r=$.$get$eS()
q=$.$get$eT()
p=$.$get$eQ()
$.$get$eP()
o=$.$get$eV()
n=$.$get$eU()
m=v.a9(y)
if(m!=null)return z.$1(H.d2(H.K(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.d2(H.K(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.er(H.K(y),m))}}return z.$1(new H.jN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eB()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eB()
return a},
bz:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
mA:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
mI:function(a,b,c,d,e,f){H.e(a,"$iscY")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=z
return z},
ho:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iX(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.B()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e0(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dU:H.cS
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e0(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hl:function(a,b,c,d){var z=H.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e0:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hl(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.B()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.cj("self")
$.bC=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.B()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.cj("self")
$.bC=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hm:function(a,b,c,d){var z,y
z=H.cS
y=H.dU
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
hn:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.cj("self")
$.bC=z}y=$.dT
if(y==null){y=H.cj("receiver")
$.dT=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aC
if(typeof y!=="number")return y.B()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.B()
$.aC=y+1
return new Function(z+y+"}")()},
dA:function(a,b,c,d,e,f,g){var z,y
z=J.bG(H.c1(b))
H.D(c)
y=!!J.I(d).$isc?J.bG(d):d
return H.ho(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.az(a,"String"))},
my:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"double"))},
fZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.az(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.az(a,"int"))},
dK:function(a,b){throw H.a(H.az(a,H.K(b).substring(3)))},
n_:function(a,b){var z=J.at(b)
throw H.a(H.hk(a,z.w(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.dK(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.n_(a,b)},
h_:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.I(a)[b])return a
H.dK(a,b)},
c1:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.az(a,"List"))},
fX:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.dK(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
ce:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.I(a))
if(z==null)return!1
y=H.fU(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dw)return a
$.dw=!0
try{if(H.ce(a,b))return a
z=H.ch(b)
y=H.az(a,z)
throw H.a(y)}finally{$.dw=!1}},
dD:function(a,b){if(a!=null&&!H.dz(a,b))H.q(H.az(a,H.ch(b)))
return a},
fG:function(a){var z
if(a instanceof H.n){z=H.fP(J.I(a))
if(z!=null)return H.ch(z)
return"Closure"}return H.bf(a)},
n9:function(a){throw H.a(new P.hx(H.K(a)))},
fS:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
pe:function(a,b,c){return H.bA(a["$as"+H.l(c)],H.b3(b))},
b2:function(a,b,c,d){var z
H.K(c)
H.D(d)
z=H.bA(a["$as"+H.l(c)],H.b3(b))
return z==null?null:z[d]},
aJ:function(a,b,c){var z
H.K(b)
H.D(c)
z=H.bA(a["$as"+H.l(b)],H.b3(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.D(b)
z=H.b3(a)
return z==null?null:z[b]},
ch:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mb(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mz(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dG:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.j(0)+">"
return v},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bw:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fJ(H.bA(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.c1(c)
H.K(d)
if(a==null)return a
z=H.bw(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dG(c,0,null)
throw H.a(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.au(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.au(a[y],b,c[y],d))return!1
return!0},
pc:function(a,b,c){return a.apply(b,H.bA(J.I(b)["$as"+H.l(c)],H.b3(b)))},
fW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.fW(z)}return!1},
dz:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.fW(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}y=J.I(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.au(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dz(a,b))throw H.a(H.az(a,H.ch(b)))
return a},
au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fU(a,b,c,d)
if('func' in a)return c.builtin$cls==="cY"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,x,d)
else if(H.au(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bA(w,z?a.slice(1):null)
return H.au(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ch(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bA(r,z),b,u,d)},
fU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.au(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.au(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.au(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mY(m,b,l,d)},
mY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.au(c[w],d,a[w],b))return!1}return!0},
pd:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
mN:function(a){var z,y,x,w,v,u
z=H.K($.fT.$1(a))
y=$.cG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fI.$2(a,z))
if(z!=null){y=$.cG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cK(x)
$.cG[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cJ[z]=x
return x}if(v==="-"){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h0(a,x)
if(v==="*")throw H.a(P.cc(z))
if(init.leafTags[z]===true){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h0(a,x)},
h0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dH(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cK:function(a){return J.dH(a,!1,null,!!a.$isG)},
mX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cK(z)
else return J.dH(z,c,null,null)},
mG:function(){if(!0===$.dF)return
$.dF=!0
H.mH()},
mH:function(){var z,y,x,w,v,u,t,s
$.cG=Object.create(null)
$.cJ=Object.create(null)
H.mC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h1.$1(v)
if(u!=null){t=H.mX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mC:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bv(C.J,H.bv(C.O,H.bv(C.u,H.bv(C.u,H.bv(C.N,H.bv(C.K,H.bv(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fT=new H.mD(v)
$.fI=new H.mE(u)
$.h1=new H.mF(t)},
bv:function(a,b){return a(b)||b},
n8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hs:{"^":"b;$ti",
j:function(a){return P.d4(this)},
l:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.ht()},
$isJ:1},
hu:{"^":"hs;a,b,c,$ti",
gm:function(a){return this.a},
cg:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.cg(0,b))return
return this.d3(b)},
d3:function(a){return this.b[H.K(a)]},
M:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d3(v),z))}}},
iW:{"^":"b;a,b,c,d,e,f,r,0x",u:{
iX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bG(z)
y=z[0]
x=z[1]
return new H.iW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jz:{"^":"b;a,b,c,d,e,f",
a9:function(a){var z,y,x
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
u:{
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iD:{"^":"a6;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
er:function(a,b){return new H.iD(a,b==null?null:b.method)}}},
i_:{"^":"a6;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
u:{
d2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jN:{"^":"a6;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nc:{"^":"n:18;a",
$1:function(a){if(!!J.I(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.bf(this).trim()+"'"},
gek:function(){return this},
$iscY:1,
gek:function(){return this}},
eG:{"^":"n;"},
ji:{"^":"eG;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cR:{"^":"eG;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bN(this.a)
else y=typeof z!=="object"?J.b5(z):H.bN(z)
return(y^H.bN(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bf(z)+"'")},
u:{
cS:function(a){return a.a},
dU:function(a){return a.c},
cj:function(a){var z,y,x,w,v
z=new H.cR("self","target","receiver","name")
y=J.bG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jA:{"^":"a6;a",
j:function(a){return this.a},
u:{
az:function(a,b){return new H.jA("TypeError: "+H.l(P.cn(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hj:{"^":"a6;a",
j:function(a){return this.a},
u:{
hk:function(a,b){return new H.hj("CastError: "+H.l(P.cn(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
j5:{"^":"a6;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
u:{
j6:function(a){return new H.j5(a)}}},
cs:{"^":"ih;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gaz:function(a){return new H.i4(this,[H.x(this,0)])},
cg:function(a,b){var z=this.b
if(z==null)return!1
return this.eO(z,b)},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bj(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bj(w,b)
x=y==null?null:y.b
return x}else return this.hL(b)},
hL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.d5(z,this.dX(a))
x=this.dY(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c_()
this.b=z}this.cU(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c_()
this.c=y}this.cU(y,b,c)}else this.hM(b,c)},
hM:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.c_()
this.d=z}y=this.dX(a)
x=this.d5(z,y)
if(x==null)this.c5(z,y,[this.c0(a,b)])
else{w=this.dY(x,a)
if(w>=0)x[w].b=b
else x.push(this.c0(a,b))}},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b6(this))
z=z.c}},
cU:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bj(a,b)
if(z==null)this.c5(a,b,this.c0(b,c))
else z.b=c},
eZ:function(){this.r=this.r+1&67108863},
c0:function(a,b){var z,y
z=new H.i3(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eZ()
return z},
dX:function(a){return J.b5(a)&0x3ffffff},
dY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.d4(this)},
bj:function(a,b){return a[b]},
d5:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eR:function(a,b){delete a[b]},
eO:function(a,b){return this.bj(a,b)!=null},
c_:function(){var z=Object.create(null)
this.c5(z,"<non-identifier-key>",z)
this.eR(z,"<non-identifier-key>")
return z},
$isem:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hF;a,$ti",
gm:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mD:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mE:{"^":"n:42;a",
$2:function(a,b){return this.a(a,b)}},
mF:{"^":"n:43;a",
$1:function(a){return this.a(H.K(a))}},
hY:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iset:1,
$isiY:1,
u:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mz:function(a){return J.eg(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){return a},
iz:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aI(b,a))},
m5:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mx(a,b,c))
return b},
eq:{"^":"r;",$iseq:1,"%":"ArrayBuffer"},
d9:{"^":"r;",$isd9:1,$isjB:1,"%":"DataView;ArrayBufferView;d8|fi|fj|iA|fk|fl|b1"},
d8:{"^":"d9;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dC},
iA:{"^":"fj;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
l:function(a,b,c){H.D(b)
H.my(c)
H.aH(b,a,a.length)
a[b]=c},
$asco:function(){return[P.t]},
$asy:function(){return[P.t]},
$isk:1,
$ask:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
b1:{"^":"fl;",
l:function(a,b,c){H.D(b)
H.D(c)
H.aH(b,a,a.length)
a[b]=c},
$asco:function(){return[P.m]},
$asy:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
oi:{"^":"b1;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oj:{"^":"b1;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ok:{"^":"b1;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ol:{"^":"b1;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
om:{"^":"b1;",
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
on:{"^":"b1;",
gm:function(a){return a.length},
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
da:{"^":"b1;",
gm:function(a){return a.length},
i:function(a,b){H.aH(b,a,a.length)
return a[b]},
bP:function(a,b,c){return new Uint8Array(a.subarray(b,H.m5(b,c,a.length)))},
$isda:1,
$isS:1,
"%":";Uint8Array"},
fi:{"^":"d8+y;"},
fj:{"^":"fi+co;"},
fk:{"^":"d8+y;"},
fl:{"^":"fk+co;"}}],["","",,P,{"^":"",
km:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bx(new P.ko(z),1)).observe(y,{childList:true})
return new P.kn(z,y,x)}else if(self.setImmediate!=null)return P.mk()
return P.ml()},
p1:[function(a){self.scheduleImmediate(H.bx(new P.kp(H.f(a,{func:1,ret:-1})),0))},"$1","mj",4,0,11],
p2:[function(a){self.setImmediate(H.bx(new P.kq(H.f(a,{func:1,ret:-1})),0))},"$1","mk",4,0,11],
p3:[function(a){H.f(a,{func:1,ret:-1})
P.lp(0,a)},"$1","ml",4,0,11],
eJ:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bm]})
z=C.d.a1(a.a,1000)
return P.lq(z<0?0:z,b)},
mf:function(a,b){if(H.ce(a,{func:1,args:[P.b,P.ay]}))return b.i5(a,null,P.b,P.ay)
if(H.ce(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ci(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
me:function(){var z,y
for(;z=$.bu,z!=null;){$.c_=null
y=z.b
$.bu=y
if(y==null)$.bZ=null
z.a.$0()}},
pb:[function(){$.dx=!0
try{P.me()}finally{$.c_=null
$.dx=!1
if($.bu!=null)$.$get$dq().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fb(H.f(a,{func:1,ret:-1}))
if($.bu==null){$.bZ=z
$.bu=z
if(!$.dx)$.$get$dq().$1(P.fK())}else{$.bZ.b=z
$.bZ=z}},
mi:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bu
if(z==null){P.fF(a)
$.c_=$.bZ
return}y=new P.fb(a)
x=$.c_
if(x==null){y.b=z
$.c_=y
$.bu=y}else{y.b=x.b
x.b=y
$.c_=y
if(y.b==null)$.bZ=y}},
n0:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.X
if(C.j===y){P.cF(null,null,C.j,a)
return}y.toString
P.cF(null,null,y,H.f(y.dk(a),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bm]}
H.f(b,z)
y=$.X
if(y===C.j){y.toString
return P.eJ(a,b)}x=y.dl(b,P.bm)
$.X.toString
return P.eJ(a,H.f(x,z))},
cE:function(a,b,c,d,e){var z={}
z.a=d
P.mi(new P.mg(z,e))},
fB:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.X
if(y===c)return d.$0()
$.X=c
z=y
try{y=d.$0()
return y}finally{$.X=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.X
if(y===c)return d.$1(e)
$.X=c
z=y
try{y=d.$1(e)
return y}finally{$.X=z}},
mh:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.X
if(y===c)return d.$2(e,f)
$.X=c
z=y
try{y=d.$2(e,f)
return y}finally{$.X=z}},
cF:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dk(d):c.hq(d,-1)
P.fF(d)},
ko:{"^":"n:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kn:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kp:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kq:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fr:{"^":"b;a,0b,c",
eE:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bx(new P.ls(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bx(new P.lr(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbm:1,
u:{
lp:function(a,b){var z=new P.fr(!0,0)
z.eE(a,b)
return z},
lq:function(a,b){var z=new P.fr(!1,0)
z.eF(a,b)
return z}}},
ls:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lr:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eu(w,x)}z.c=y
this.d.$1(z)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
hQ:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.f(this.d,{func:1,ret:P.al,args:[P.b]}),a.a,P.al,P.b)},
hK:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.b,P.ay]}))return H.dD(w.ie(z,a.a,a.b,null,y,P.ay),x)
else return H.dD(w.cH(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aX:{"^":"b;de:a<,b,0fG:c<,$ti",
ee:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.X
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mf(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aX(0,$.X,[c])
w=b==null?1:3
this.cV(new P.bs(x,w,a,b,[z,c]))
return x},
ik:function(a,b){return this.ee(a,null,b)},
cV:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaX")
z=y.a
if(z<4){y.cV(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cF(null,null,z,H.f(new P.kF(this,a),{func:1,ret:-1}))}},
d9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaX")
y=u.a
if(y<4){u.d9(a)
return}this.a=y
this.c=u.c}z.a=this.bm(a)
y=this.b
y.toString
P.cF(null,null,y,H.f(new P.kK(z,this),{func:1,ret:-1}))}},
c2:function(){var z=H.e(this.c,"$isbs")
this.c=null
return this.bm(z)},
bm:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cZ:function(a){var z,y,x,w
z=H.x(this,0)
H.dD(a,{futureOr:1,type:z})
y=this.$ti
x=H.bw(a,"$isbE",y,"$asbE")
if(x){z=H.bw(a,"$isaX",y,null)
if(z)P.fe(a,this)
else P.kG(a,this)}else{w=this.c2()
H.z(a,z)
this.a=4
this.c=a
P.bU(this,w)}},
bT:[function(a,b){var z
H.e(b,"$isay")
z=this.c2()
this.a=8
this.c=new P.an(a,b)
P.bU(this,z)},function(a){return this.bT(a,null)},"is","$2","$1","geM",4,2,28],
$isbE:1,
u:{
kG:function(a,b){var z,y,x
b.a=1
try{a.ee(new P.kH(b),new P.kI(b),null)}catch(x){z=H.aw(x)
y=H.bz(x)
P.n0(new P.kJ(b,z,y))}},
fe:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaX")
if(z>=4){y=b.c2()
b.a=a.a
b.c=a.c
P.bU(b,y)}else{y=H.e(b.c,"$isbs")
b.a=2
b.c=a
a.d9(y)}},
bU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cE(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cE(null,null,y,u,t)
return}o=$.X
if(o==null?q!=null:o!==q)$.X=q
else o=null
y=b.c
if(y===8)new P.kN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kM(x,b,r).$0()}else if((y&2)!==0)new P.kL(z,x,b).$0()
if(o!=null)$.X=o
y=x.b
if(!!J.I(y).$isbE){if(y.a>=4){n=H.e(t.c,"$isbs")
t.c=null
b=t.bm(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fe(y,t)
return}}m=b.b
n=H.e(m.c,"$isbs")
m.c=null
b=m.bm(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
kF:{"^":"n:0;a,b",
$0:function(){P.bU(this.a,this.b)}},
kK:{"^":"n:0;a,b",
$0:function(){P.bU(this.b,this.a.a)}},
kH:{"^":"n:20;a",
$1:function(a){var z=this.a
z.a=0
z.cZ(a)}},
kI:{"^":"n:52;a",
$2:function(a,b){this.a.bT(a,H.e(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
kJ:{"^":"n:0;a,b,c",
$0:function(){this.a.bT(this.b,this.c)}},
kN:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ec(H.f(w.d,{func:1}),null)}catch(v){y=H.aw(v)
x=H.bz(v)
if(this.d){w=H.e(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.I(z).$isbE){if(z instanceof P.aX&&z.gde()>=4){if(z.gde()===8){w=this.b
w.b=H.e(z.gfG(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ik(new P.kO(t),null)
w.a=!1}}},
kO:{"^":"n:30;a",
$1:function(a){return this.a}},
kM:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cH(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aw(t)
y=H.bz(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
kL:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isan")
w=this.c
if(w.hQ(z)&&w.e!=null){v=this.b
v.b=w.hK(z)
v.a=!1}}catch(u){y=H.aw(u)
x=H.bz(u)
w=H.e(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fb:{"^":"b;a,0b"},
de:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.aX(0,$.X,[P.m])
z.a=0
this.hO(new P.jl(z,this),!0,new P.jm(z,y),y.geM())
return y}},
jl:{"^":"n;a,b",
$1:function(a){H.z(a,H.aJ(this.b,"de",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aJ(this.b,"de",0)]}}},
jm:{"^":"n:0;a,b",
$0:function(){this.b.cZ(this.a.a)}},
eC:{"^":"b;$ti"},
jk:{"^":"b;"},
bm:{"^":"b;"},
an:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa6:1},
lU:{"^":"b;",$isp0:1},
mg:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.es()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
l7:{"^":"lU;",
ig:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.X){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.aw(x)
y=H.bz(x)
P.cE(null,null,this,z,H.e(y,"$isay"))}},
ih:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.X){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.aw(x)
y=H.bz(x)
P.cE(null,null,this,z,H.e(y,"$isay"))}},
hq:function(a,b){return new P.l9(this,H.f(a,{func:1,ret:b}),b)},
dk:function(a){return new P.l8(this,H.f(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.la(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ec:function(a,b){H.f(a,{func:1,ret:b})
if($.X===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cH:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.X===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
ie:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.X===C.j)return a.$2(b,c)
return P.mh(null,null,this,a,b,c,d,e,f)},
i5:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l9:{"^":"n;a,b,c",
$0:function(){return this.a.ec(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l8:{"^":"n:3;a,b",
$0:function(){return this.a.ig(this.b)}},
la:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ih(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.cs(0,0,[d,e])},
i7:function(a,b,c){H.c1(a)
return H.w(H.mA(a,new H.cs(0,0,[b,c])),"$isem",[b,c],"$asem")},
en:function(a,b){return new H.cs(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kU(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c0()
C.a.h(y,a)
try{P.md(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eD(b,H.fX(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cZ:function(a,b,c){var z,y,x
if(P.dy(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$c0()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaG(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
dy:function(a){var z,y
for(z=0;y=$.$get$c0(),z<y.length;++z)if(a===y[z])return!0
return!1},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.H();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.M(0,new P.i9(z,b,c))
return z},
d4:function(a){var z,y,x
z={}
if(P.dy(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$c0(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.dN(a,new P.ii(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$c0()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
kU:{"^":"kP;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fh(this,this.r,H.x(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ds()
this.b=z}return this.cX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ds()
this.c=y}return this.cX(y,b)}else return this.eG(0,b)},
eG:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.ds()
this.d=z}y=this.d_(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.d4(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
I:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.da(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.da(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eV(z,b)
x=this.d4(y,b)
if(x<0)return!1
this.dg(y.splice(x,1)[0])
return!0},
cX:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdr")!=null)return!1
a[b]=this.bS(b)
return!0},
da:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdr")
if(z==null)return!1
this.dg(z)
delete a[b]
return!0},
cY:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.dr(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cY()
return z},
dg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cY()},
d_:function(a){return J.b5(a)&0x3ffffff},
eV:function(a,b){return a[this.d_(b)]},
d4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
u:{
ds:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dr:{"^":"b;a,0b,0c"},
kV:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
u:{
fh:function(a,b,c){var z=new P.kV(a,b,[c])
z.c=a.e
return z}}},
kP:{"^":"j7;"},
i9:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))}},
ct:{"^":"kW;",$isk:1,$isc:1},
y:{"^":"b;$ti",
ga_:function(a){return new H.ib(a,this.gm(a),0,[H.b2(this,a,"y",0)])},
J:function(a,b){return this.i(a,b)},
im:function(a,b){var z,y,x
z=H.h([],[H.b2(this,a,"y",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
cI:function(a){return this.im(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.b2(this,a,"y",0))
P.aP(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.cZ(a,"[","]")}},
ih:{"^":"ak;"},
ii:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ak:{"^":"b;$ti",
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b2(this,a,"ak",0),H.b2(this,a,"ak",1)]})
for(z=J.bB(this.gaz(a));z.H();){y=z.gP(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.am(this.gaz(a))},
j:function(a){return P.d4(a)},
$isJ:1},
lx:{"^":"b;$ti",
l:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
ij:{"^":"b;$ti",
i:function(a,b){return J.dM(this.a,b)},
l:function(a,b,c){J.cM(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
M:function(a,b){J.dN(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gm:function(a){return J.am(this.a)},
j:function(a){return J.aa(this.a)},
$isJ:1},
f1:{"^":"ly;a,$ti"},
j8:{"^":"b;$ti",
j:function(a){return P.cZ(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dP("index"))
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=P.fh(this,this.r,H.x(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
$isk:1},
j7:{"^":"j8;"},
kW:{"^":"b+y;"},
ly:{"^":"ij+lx;$ti"}}],["","",,P,{"^":"",hg:{"^":"c3;a",
hR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aP(c,d,b.length,null,null,null)
z=$.$get$fc()
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
if(q<=d){p=H.cI(C.b.G(b,s))
o=H.cI(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.w(b,x,y)
w.a+=H.cw(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.dS(b,u,d,v,t,k)
else{j=C.d.bg(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aX(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dS(b,u,d,v,t,i)
else{j=C.d.bg(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aX(b,d,d,j===2?"==":"=")}return b},
$asc3:function(){return[[P.c,P.m],P.i]},
u:{
dS:function(a,b,c,d,e,f){if(C.d.bg(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hh:{"^":"bD;a",
$asbD:function(){return[[P.c,P.m],P.i]}},c3:{"^":"b;$ti"},bD:{"^":"jk;$ti"},hH:{"^":"c3;",
$asc3:function(){return[P.i,[P.c,P.m]]}},k0:{"^":"hH;a",
ghD:function(){return C.F}},k7:{"^":"bD;",
b4:function(a,b,c){var z,y,x,w
z=a.length
P.aP(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lT(0,0,x)
if(w.eT(a,b,z)!==z)w.dh(J.h8(a,z-1),0)
return C.U.bP(x,0,w.b)},
ci:function(a){return this.b4(a,0,null)},
$asbD:function(){return[P.i,[P.c,P.m]]}},lT:{"^":"b;a,b,c",
dh:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
eT:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dh(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},k1:{"^":"bD;a",
b4:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k2(!1,a,b,c)
if(z!=null)return z
y=J.am(a)
P.aP(b,c,y,null,null,null)
x=new P.ap("")
w=new P.lQ(!1,x,!0,0,0,0)
w.b4(a,b,y)
w.hG(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
ci:function(a){return this.b4(a,0,null)},
$asbD:function(){return[[P.c,P.m],P.i]},
u:{
k2:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k3(!1,b,c,d)
return},
k3:function(a,b,c,d){var z,y,x
z=$.$get$f5()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aP(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.k5(b))return
return P.k6(a,b)},
k6:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aw(y)}return},
k5:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k4:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aw(y)}return}}},lQ:{"^":"b;a,b,c,d,e,f",
hG:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lS(c)
v=new P.lR(this,b,c,a)
$label0$0:for(u=J.at(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bM()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.bc(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.a_("Overlong encoding of 0x"+C.d.bc(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.bc(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cw(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ad()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.bc(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.bc(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lS:{"^":"n:51;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.at(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bM()
if((w&127)!==w)return x-b}return z-b}},lR:{"^":"n:41;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eE(this.d,a,b)}}}],["","",,P,{"^":"",
cg:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.i]})
z=H.iQ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hJ:function(a){var z=J.I(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bf(a)+"'"},
ic:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
id:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga_(a);x.H();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bG(y),"$isc",z,"$asc")},
eE:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isbb",[z],"$asbb")
y=a.length
c=P.aP(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.ew(z?C.a.bP(a,b,c):a)}if(!!J.I(a).$isda)return H.iS(a,b,P.aP(b,c,a.length,null,null,null))
return P.jn(a,b,c)},
jn:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a1(b,0,J.am(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.am(a),null,null))
y=J.bB(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gP(y))}return H.ew(w)},
iZ:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
dl:function(){var z=H.iI()
if(z!=null)return P.jT(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hJ(a)},
u:function(a){return new P.fd(a)},
ie:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.h([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dJ:function(a){H.mZ(a)},
jT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.f2(b>0||c<c?C.b.w(a,b,c):a,5,null).geh()
else if(y===32)return P.f2(C.b.w(a,z,c),0,null).geh()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.fD(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cN()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.K()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.K()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.K()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a7(a,"..",s)))n=r>s+2&&C.b.a7(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a7(a,"file",b)){if(u<=b){if(!C.b.a7(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aX(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a7(a,"http",b)){if(x&&t+3===s&&C.b.a7(a,"80",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
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
else if(v===z&&C.b.a7(a,"https",b)){if(x&&t+4===s&&C.b.a7(a,"443",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
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
q-=b}return new P.lc(a,v,u,t,s,r,q,o)}return P.lz(a,b,c,v,u,t,s,r,q,o)},
f4:function(a,b){var z=P.i
return C.a.hH(H.h(a.split("&"),[z]),P.en(z,z),new P.jW(b),[P.J,P.i,P.i])},
jR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cg(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.ad()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cg(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.ad()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jU(a)
y=new P.jV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aK(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m6:function(){var z,y,x,w,v
z=P.ie(22,new P.m8(),!0,P.S)
y=new P.m7(z)
x=new P.m9()
w=new P.ma()
v=H.e(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isS"),"]",5)
v=H.e(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isS"),"az",21)
v=H.e(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fD:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fE()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
al:{"^":"b;"},
"+bool":0,
ag:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&this.b===b.b},
aM:function(a,b){return C.d.aM(this.a,H.e(b,"$isag").a)},
gS:function(a){var z=this.a
return(z^C.d.aK(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hy(H.iP(this))
y=P.c4(H.iN(this))
x=P.c4(H.iJ(this))
w=P.c4(H.iK(this))
v=P.c4(H.iM(this))
u=P.c4(H.iO(this))
t=P.hz(H.iL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isaj:1,
$asaj:function(){return[P.ag]},
u:{
hy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c4:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"V;"},
"+double":0,
aN:{"^":"b;a",
k:function(a,b){return new P.aN(C.d.ab(this.a*b))},
K:function(a,b){return C.d.K(this.a,H.e(b,"$isaN").a)},
ad:function(a,b){return C.d.ad(this.a,H.e(b,"$isaN").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
aM:function(a,b){return C.d.aM(this.a,H.e(b,"$isaN").a)},
j:function(a){var z,y,x,w,v
z=new P.hE()
y=this.a
if(y<0)return"-"+new P.aN(0-y).j(0)
x=z.$1(C.d.a1(y,6e7)%60)
w=z.$1(C.d.a1(y,1e6)%60)
v=new P.hD().$1(y%1e6)
return""+C.d.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isaj:1,
$asaj:function(){return[P.aN]},
u:{
ea:function(a,b,c,d,e,f){return new P.aN(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hD:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hE:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
es:{"^":"a6;",
j:function(a){return"Throw of null."}},
aK:{"^":"a6;a,b,c,d",
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbV()+y+x
if(!this.a)return w
v=this.gbU()
u=P.cn(this.b)
return w+v+": "+H.l(u)},
u:{
c2:function(a){return new P.aK(!1,null,null,a)},
ci:function(a,b,c){return new P.aK(!0,a,b,c)},
dP:function(a){return new P.aK(!1,null,a,"Must not be null")}}},
cx:{"^":"aK;e,f,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
u:{
ca:function(a,b,c){return new P.cx(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cx(b,c,!0,a,d,"Invalid value")},
aP:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
hS:{"^":"aK;e,m:f>,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){if(J.h4(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
u:{
T:function(a,b,c,d,e){var z=H.D(e!=null?e:J.am(b))
return new P.hS(b,z,!0,a,c,"Index out of range")}}},
jP:{"^":"a6;a",
j:function(a){return"Unsupported operation: "+this.a},
u:{
B:function(a){return new P.jP(a)}}},
jM:{"^":"a6;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
cc:function(a){return new P.jM(a)}}},
jh:{"^":"a6;a",
j:function(a){return"Bad state: "+this.a}},
hr:{"^":"a6;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cn(z))+"."},
u:{
b6:function(a){return new P.hr(a)}}},
iE:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa6:1},
eB:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa6:1},
hx:{"^":"a6;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fd:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hP:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
u:{
a_:function(a,b,c){return new P.hP(a,b,c)}}},
m:{"^":"V;"},
"+int":0,
k:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga_(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dP("index"))
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.H();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
j:function(a){return P.hU(this,"(",")")}},
d_:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
V:{"^":"b;",$isaj:1,
$asaj:function(){return[P.V]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gS:function(a){return H.bN(this)},
j:function(a){return"Instance of '"+H.bf(this)+"'"},
toString:function(){return this.j(this)}},
ay:{"^":"b;"},
i:{"^":"b;",$isaj:1,
$asaj:function(){return[P.i]},
$iset:1},
"+String":0,
ap:{"^":"b;aG:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoL:1,
u:{
eD:function(a,b,c){var z=J.bB(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.H())}else{a+=H.l(z.gP(z))
for(;z.H();)a=a+c+H.l(z.gP(z))}return a}}},
jW:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.K(b)
y=J.at(b).dV(b,"=")
if(y===-1){if(b!=="")J.cM(a,P.du(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.aB(b,y+1)
z=this.a
J.cM(a,P.du(x,0,x.length,z,!0),P.du(w,0,w.length,z,!0))}return a}},
jS:{"^":"n:48;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
jU:{"^":"n:39;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jV:{"^":"n:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cg(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cC:{"^":"b;bO:a<,b,c,d,e7:e>,f,r,0x,0y,0z,0Q,0ch",
gei:function(){return this.b},
gct:function(a){var z=this.c
if(z==null)return""
if(C.b.a6(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbG:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcE:function(a){var z=this.f
return z==null?"":z},
gdQ:function(){var z=this.r
return z==null?"":z},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dt(g,0,0,h)
return new P.cC(i,j,c,f,d,g,this.r)},
eb:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gbH:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f1(P.f4(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gdR:function(){return this.c!=null},
gdU:function(){return this.f!=null},
gdS:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdk){y=this.a
x=b.gbO()
if(y==null?x==null:y===x)if(this.c!=null===b.gdR()){y=this.b
x=b.gei()
if(y==null?x==null:y===x){y=this.gct(this)
x=z.gct(b)
if(y==null?x==null:y===x){y=this.gbG(this)
x=z.gbG(b)
if(y==null?x==null:y===x)if(this.e===z.ge7(b)){y=this.f
x=y==null
if(!x===b.gdU()){if(x)y=""
if(y===z.gcE(b)){z=this.r
y=z==null
if(!y===b.gdS()){if(y)z=""
z=z===b.gdQ()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.j(0))
this.z=z}return z},
$isdk:1,
u:{
dv:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.l){z=$.$get$fy().b
if(typeof b!=="string")H.q(H.a5(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aJ(c,"c3",0))
y=c.ghD().ci(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cw(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lK(a,b,d)
else{if(d===b)P.bW(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lL(a,z,e-1):""
x=P.lE(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lH(P.cg(C.b.w(a,w,g),new P.lA(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lF(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dt(a,h+1,i,null):null
return new P.cC(j,y,x,v,u,t,i<c?P.lD(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bW:function(a,b,c){throw H.a(P.a_(c,a,b))},
lH:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lE:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.X(a,z)!==93)P.bW(a,b,"Missing end `]` to match `[` in host")
P.f3(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.f3(a,b,c)
return"["+a+"]"}return P.lN(a,b,c)},
lN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bW(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lK:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.G(a,b)))P.bW(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bW(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.lB(y?a.toLowerCase():a)},
lB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lL:function(a,b,c){return P.bX(a,b,c,C.R)},
lF:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bX(a,b,c,C.y):C.t.j1(d,new P.lG(),P.i).Y(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a6(w,"/"))w="/"+w
return P.lM(w,e,f)},
lM:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a6(a,"/"))return P.lO(a,!z||c)
return P.lP(a)},
dt:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c2("Both query and queryParameters specified"))
return P.bX(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.M(0,new P.lI(new P.lJ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lD:function(a,b,c){return P.bX(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cI(y)
v=H.cI(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aK(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cw(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fT(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.eE(y,0,null)},
bX:function(a,b,c,d){var z=P.fz(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.w(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bW(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.w(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a6(a,"."))return!0
return C.b.dV(a,"/.")!==-1},
lP:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.Y(z,"/")},
lO:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaA(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaA(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.l(z,0,P.fv(z[0]))}return C.a.Y(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h5(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.aB(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lC:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c2("Invalid URL encoding"))}}return z},
du:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dE(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.hp(y.w(a,b,c))}else{u=H.h([],[P.m])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.c2("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c2("Truncated URI"))
C.a.h(u,P.lC(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k1(!1).ci(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
lA:{"^":"n:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lG:{"^":"n:38;",
$1:function(a){return P.dv(C.S,a,C.l,!1)}},
lJ:{"^":"n:19;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dv(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dv(C.p,b,C.l,!0))}}},
lI:{"^":"n:33;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bB(H.fX(b,"$isk")),y=this.a;z.H();)y.$2(a,H.K(z.gP(z)))}},
jQ:{"^":"b;a,b,c",
geh:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dW(y,"?",z)
w=y.length
if(x>=0){v=P.bX(y,x+1,w,C.n)
w=x}else v=null
z=new P.kv(this,"data",null,null,null,P.bX(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.b.a7(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hR(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aX(a,s,y,r)}return new P.jQ(a,z,c)}}},
m8:{"^":"n:27;",
$1:function(a){return new Uint8Array(96)}},
m7:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.ha(z,0,96,b)
return z}},
m9:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
ma:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lc:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdR:function(){return this.c>0},
gdT:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdU:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
gdS:function(){return this.r<this.a.length},
gd6:function(){return this.b===4&&C.b.a6(this.a,"http")},
gd7:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbO:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd6()){this.x="http"
z="http"}else if(this.gd7()){this.x="https"
z="https"}else if(z===4&&C.b.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gei:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gct:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbG:function(a){var z
if(this.gdT()){z=this.d
if(typeof z!=="number")return z.B()
return P.cg(C.b.w(this.a,z+1,this.e),null,null)}if(this.gd6())return 80
if(this.gd7())return 443
return 0},
ge7:function(a){return C.b.w(this.a,this.e,this.f)},
gcE:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.w(this.a,z+1,y):""},
gdQ:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aB(y,z+1):""},
gbH:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.T
z=P.i
return new P.f1(P.f4(this.gcE(this),C.l),[z,z])},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbO()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.gdT()?this.gbG(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dt(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aB(y,x+1)
return new P.cC(i,j,c,f,d,g,b)},
eb:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdk)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdk:1},
kv:{"^":"cC;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cU:function(a,b){var z=document.createElement("canvas")
return z},
hG:function(a){H.e(a,"$isa7")
return"wheel"},
hT:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isef")
try{J.hc(z,a)}catch(x){H.aw(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fg:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.X
if(z===C.j)return a
return z.dl(a,b)},
a8:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ne:{"^":"dd;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
nf:{"^":"r;0m:length=","%":"AccessibleNodeList"},
ng:{"^":"a8;0a0:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nh:{"^":"a8;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cQ:{"^":"r;",$iscQ:1,"%":";Blob"},
nn:{"^":"a8;0a0:type}","%":"HTMLButtonElement"},
cT:{"^":"a8;",
bN:function(a,b,c){if(c!=null)return a.getContext(b,P.mn(c,null))
return a.getContext(b)},
el:function(a,b){return this.bN(a,b,null)},
$iscT:1,
"%":"HTMLCanvasElement"},
dZ:{"^":"r;",$isdZ:1,"%":"CanvasRenderingContext2D"},
np:{"^":"L;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nr:{"^":"cl;0m:length=","%":"CSSPerspective"},
ns:{"^":"cX;0q:x=,0t:y=","%":"CSSPositionValue"},
nt:{"^":"cl;0q:x=,0t:y=","%":"CSSRotation"},
b7:{"^":"r;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nu:{"^":"cl;0q:x=,0t:y=","%":"CSSScale"},
hv:{"^":"ku;0m:length=",
em:function(a,b){var z=a.getPropertyValue(this.cW(a,b))
return z==null?"":z},
cW:function(a,b){var z,y
z=$.$get$e3()
y=z[b]
if(typeof y==="string")return y
y=this.fU(a,b)
z[b]=y
return y},
fU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hA()+b
if(z in a)return z
return b},
fJ:function(a,b,c,d){a.setProperty(b,c,d)},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gba:function(a){return a.right},
gbd:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hw:{"^":"b;",
gaT:function(a){return this.em(a,"left")}},
cX:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cl:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nv:{"^":"cX;0m:length=","%":"CSSTransformValue"},
nw:{"^":"cl;0q:x=,0t:y=","%":"CSSTranslation"},
nx:{"^":"cX;0m:length=","%":"CSSUnparsedValue"},
ny:{"^":"r;0m:length=","%":"DataTransferItemList"},
nz:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nA:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
nB:{"^":"hB;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hB:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nC:{"^":"kx;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.w(c,"$isa9",[P.V],"$asa9")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a9,P.V]]},
$asy:function(){return[[P.a9,P.V]]},
$isk:1,
$ask:function(){return[[P.a9,P.V]]},
$isc:1,
$asc:function(){return[[P.a9,P.V]]},
$asC:function(){return[[P.a9,P.V]]},
"%":"ClientRectList|DOMRectList"},
hC:{"^":"r;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gan(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bw(b,"$isa9",[P.V],"$asa9")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaT(b)&&a.top===z.gbd(b)&&this.gaq(a)===z.gaq(b)&&this.gan(a)===z.gan(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gba:function(a){return a.right},
gbd:function(a){return a.top},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.V]},
"%":";DOMRectReadOnly"},
nD:{"^":"kz;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.i]},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nE:{"^":"r;0m:length=","%":"DOMTokenList"},
kt:{"^":"ct;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.e(z[b],"$isa3")},
l:function(a,b,c){var z
H.D(b)
H.e(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.cI(this)
return new J.aB(z,z.length,0,[H.x(z,0)])},
ay:function(a,b,c,d){throw H.a(P.cc(null))},
$asy:function(){return[W.a3]},
$ask:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
a3:{"^":"L;",
gcf:function(a){return new W.kt(a,a.children)},
gbr:function(a){return P.iV(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
j:function(a){return a.localName},
$isa3:1,
"%":";Element"},
nF:{"^":"a8;0a0:type}","%":"HTMLEmbedElement"},
ab:{"^":"r;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"r;",
di:["eq",function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(c!=null)this.eH(a,b,c,!1)}],
eH:function(a,b,c,d){return a.addEventListener(b,H.bx(H.f(c,{func:1,args:[W.ab]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fm|fn|fp|fq"},
b0:{"^":"cQ;",$isb0:1,"%":"File"},
eb:{"^":"kE;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isb0")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b0]},
$asy:function(){return[W.b0]},
$isk:1,
$ask:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$iseb:1,
$asC:function(){return[W.b0]},
"%":"FileList"},
nY:{"^":"a7;0m:length=","%":"FileWriter"},
o0:{"^":"a8;0m:length=","%":"HTMLFormElement"},
ba:{"^":"r;",$isba:1,"%":"Gamepad"},
o1:{"^":"dd;0q:x=,0t:y=","%":"Gyroscope"},
o2:{"^":"r;0m:length=","%":"History"},
o3:{"^":"kR;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c5:{"^":"r;0dq:data=",$isc5:1,"%":"ImageData"},
ee:{"^":"a8;",$isee:1,"%":"HTMLImageElement"},
ef:{"^":"a8;0a0:type}",$isef:1,"%":"HTMLInputElement"},
bH:{"^":"dh;",$isbH:1,"%":"KeyboardEvent"},
o9:{"^":"a8;0a0:type}","%":"HTMLLinkElement"},
oa:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
ob:{"^":"dd;0q:x=,0t:y=","%":"Magnetometer"},
od:{"^":"r;0m:length=","%":"MediaList"},
oe:{"^":"a7;",
di:function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.eq(a,b,c,!1)},
"%":"MessagePort"},
of:{"^":"kX;",
i:function(a,b){return P.aY(a.get(H.K(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaz:function(a){var z=H.h([],[P.i])
this.M(a,new W.iw(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asak:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iw:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
og:{"^":"kY;",
i:function(a,b){return P.aY(a.get(H.K(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaz:function(a){var z=H.h([],[P.i])
this.M(a,new W.ix(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asak:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ix:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bd:{"^":"r;",$isbd:1,"%":"MimeType"},
oh:{"^":"l_;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"MimeTypeArray"},
aF:{"^":"dh;",$isaF:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ks:{"^":"ct;a",
l:function(a,b,c){var z,y
H.D(b)
H.e(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.ec(z,z.length,-1,[H.b2(C.V,z,"C",0)])},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asy:function(){return[W.L]},
$ask:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a7;",
ia:function(a,b){var z,y
try{z=a.parentNode
J.h6(z,b,a)}catch(y){H.aw(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.er(a):z},
fA:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iB:{"^":"l1;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
op:{"^":"a8;0a0:type}","%":"HTMLOListElement"},
oq:{"^":"a8;0a0:type}","%":"HTMLObjectElement"},
be:{"^":"r;0m:length=",$isbe:1,"%":"Plugin"},
ou:{"^":"l5;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$asy:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"PluginArray"},
oz:{"^":"r;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oA:{"^":"lb;",
i:function(a,b){return P.aY(a.get(H.K(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaz:function(a){var z=H.h([],[P.i])
this.M(a,new W.j4(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asak:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j4:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oC:{"^":"a8;0a0:type}","%":"HTMLScriptElement"},
oE:{"^":"a8;0m:length=","%":"HTMLSelectElement"},
dd:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bg:{"^":"a7;",$isbg:1,"%":"SourceBuffer"},
oF:{"^":"fn;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"SourceBufferList"},
oG:{"^":"a8;0a0:type}","%":"HTMLSourceElement"},
bh:{"^":"r;",$isbh:1,"%":"SpeechGrammar"},
oH:{"^":"le;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"SpeechGrammarList"},
bi:{"^":"r;0m:length=",$isbi:1,"%":"SpeechRecognitionResult"},
oJ:{"^":"lh;",
i:function(a,b){return a.getItem(H.K(b))},
l:function(a,b,c){a.setItem(b,H.K(c))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaz:function(a){var z=H.h([],[P.i])
this.M(a,new W.jj(z))
return z},
gm:function(a){return a.length},
$asak:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jj:{"^":"n:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oM:{"^":"a8;0a0:type}","%":"HTMLStyleElement"},
bj:{"^":"r;",$isbj:1,"%":"CSSStyleSheet|StyleSheet"},
bO:{"^":"a8;",$isbO:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bk:{"^":"a7;",$isbk:1,"%":"TextTrack"},
bl:{"^":"a7;",$isbl:1,"%":"TextTrackCue|VTTCue"},
oR:{"^":"lo;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbl")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asy:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"TextTrackCueList"},
oS:{"^":"fq;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"TextTrackList"},
oT:{"^":"r;0m:length=","%":"TimeRanges"},
bn:{"^":"r;",$isbn:1,"%":"Touch"},
bo:{"^":"dh;",$isbo:1,"%":"TouchEvent"},
oU:{"^":"lu;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbn")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isk:1,
$ask:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asC:function(){return[W.bn]},
"%":"TouchList"},
oV:{"^":"r;0m:length=","%":"TrackDefaultList"},
dh:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oX:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
oZ:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
p_:{"^":"a7;0m:length=","%":"VideoTrackList"},
bT:{"^":"aF;",
ghz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghy:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbT:1,
"%":"WheelEvent"},
kl:{"^":"a7;",
fC:function(a,b){return a.requestAnimationFrame(H.bx(H.f(b,{func:1,ret:-1,args:[P.V]}),1))},
eS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p4:{"^":"lW;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isb7")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$asy:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asC:function(){return[W.b7]},
"%":"CSSRuleList"},
p5:{"^":"hC;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bw(b,"$isa9",[P.V],"$asa9")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaT(b)&&a.top===z.gbd(b)&&a.width===z.gaq(b)&&a.height===z.gan(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
p7:{"^":"lY;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asy:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"GamepadList"},
p8:{"^":"m_;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
p9:{"^":"m1;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asy:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"SpeechRecognitionResultList"},
pa:{"^":"m3;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.e(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"StyleSheetList"},
kA:{"^":"de;a,b,c,$ti",
hO:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
p6:{"^":"kA;a,b,c,$ti"},
kB:{"^":"eC;a,b,c,d,e,$ti",
fY:function(){var z=this.d
if(z!=null&&this.a<=0)J.h7(this.b,this.c,z,!1)},
u:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.kC(c),W.ab)
z=new W.kB(0,a,b,z,!1,[e])
z.fY()
return z}}},
kC:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
C:{"^":"b;$ti",
ga_:function(a){return new W.ec(a,this.gm(a),-1,[H.b2(this,a,"C",0)])},
ay:function(a,b,c,d){H.z(d,H.b2(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ec:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dM(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
ku:{"^":"r+hw;"},
kw:{"^":"r+y;"},
kx:{"^":"kw+C;"},
ky:{"^":"r+y;"},
kz:{"^":"ky+C;"},
kD:{"^":"r+y;"},
kE:{"^":"kD+C;"},
kQ:{"^":"r+y;"},
kR:{"^":"kQ+C;"},
kX:{"^":"r+ak;"},
kY:{"^":"r+ak;"},
kZ:{"^":"r+y;"},
l_:{"^":"kZ+C;"},
l0:{"^":"r+y;"},
l1:{"^":"l0+C;"},
l4:{"^":"r+y;"},
l5:{"^":"l4+C;"},
lb:{"^":"r+ak;"},
fm:{"^":"a7+y;"},
fn:{"^":"fm+C;"},
ld:{"^":"r+y;"},
le:{"^":"ld+C;"},
lh:{"^":"r+ak;"},
ln:{"^":"r+y;"},
lo:{"^":"ln+C;"},
fp:{"^":"a7+y;"},
fq:{"^":"fp+C;"},
lt:{"^":"r+y;"},
lu:{"^":"lt+C;"},
lV:{"^":"r+y;"},
lW:{"^":"lV+C;"},
lX:{"^":"r+y;"},
lY:{"^":"lX+C;"},
lZ:{"^":"r+y;"},
m_:{"^":"lZ+C;"},
m0:{"^":"r+y;"},
m1:{"^":"m0+C;"},
m2:{"^":"r+y;"},
m3:{"^":"m2+C;"}}],["","",,P,{"^":"",
mq:function(a){var z,y
z=J.I(a)
if(!!z.$isc5){y=z.gdq(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fs(a.data,a.height,a.width)},
mp:function(a){if(a instanceof P.fs)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var z,y,x,w,v
if(a==null)return
z=P.en(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.K(y[w])
z.l(0,v,a[v])}return z},
mn:function(a,b){var z={}
a.M(0,new P.mo(z))
return z},
e9:function(){var z=$.e8
if(z==null){z=J.cN(window.navigator.userAgent,"Opera",0)
$.e8=z}return z},
hA:function(){var z,y
z=$.e5
if(z!=null)return z
y=$.e6
if(y==null){y=J.cN(window.navigator.userAgent,"Firefox",0)
$.e6=y}if(y)z="-moz-"
else{y=$.e7
if(y==null){y=!P.e9()&&J.cN(window.navigator.userAgent,"Trident/",0)
$.e7=y}if(y)z="-ms-"
else z=P.e9()?"-o-":"-webkit-"}$.e5=z
return z},
lk:{"^":"b;",
dO:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cK:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isag)return new Date(a.a)
if(!!y.$isiY)throw H.a(P.cc("structured clone of RegExp"))
if(!!y.$isb0)return a
if(!!y.$iscQ)return a
if(!!y.$iseb)return a
if(!!y.$isc5)return a
if(!!y.$iseq||!!y.$isd9)return a
if(!!y.$isJ){x=this.dO(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.M(a,new P.lm(z,this))
return z.a}if(!!y.$isc){x=this.dO(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hw(a,x)}throw H.a(P.cc("structured clone of other type"))},
hw:function(a,b){var z,y,x,w
z=J.at(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.cK(z.i(a,w)))
return x}},
lm:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cK(b)}},
fs:{"^":"b;dq:a>,b,c",$isc5:1},
mo:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
ll:{"^":"lk;a,b"},
hM:{"^":"ct;a,b",
gbl:function(){var z,y,x
z=this.b
y=H.aJ(z,"y",0)
x=W.a3
return new H.ik(new H.kj(z,H.f(new P.hN(),{func:1,ret:P.al,args:[y]}),[y]),H.f(new P.hO(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.D(b)
H.e(c,"$isa3")
z=this.gbl()
J.hb(z.b.$1(J.cO(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.am(this.gbl().a)},
i:function(a,b){var z=this.gbl()
return z.b.$1(J.cO(z.a,b))},
ga_:function(a){var z=P.id(this.gbl(),!1,W.a3)
return new J.aB(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.a3]},
$ask:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
hN:{"^":"n:45;",
$1:function(a){return!!J.I(H.e(a,"$isL")).$isa3}},
hO:{"^":"n:47;",
$1:function(a){return H.j(H.e(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bL:{"^":"b;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
v:function(a,b){var z,y,x
if(b==null)return!1
z=H.bw(b,"$isbL",[P.V],null)
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b5(this.a)
y=J.b5(this.b)
return P.ff(P.bV(P.bV(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bL(z,H.z(x*b,y),this.$ti)}},
l6:{"^":"b;$ti",
gba:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.x(this,0))},
gcb:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.x(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bw(b,"$isa9",[P.V],"$asa9")
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbd(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gba(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gcb(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b5(z)
x=this.b
w=J.b5(x)
if(typeof z!=="number")return z.B()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.ff(P.bV(P.bV(P.bV(P.bV(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dn:function(a,b){var z,y
H.w(b,"$isbL",[P.V],"$asbL")
z=b.a
y=this.a
if(typeof z!=="number")return z.cN()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cN()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"l6;aT:a>,bd:b>,aq:c>,an:d>,$ti",u:{
iV:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nG:{"^":"W;0q:x=,0t:y=","%":"SVGFEBlendElement"},nH:{"^":"W;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nI:{"^":"W;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nJ:{"^":"W;0q:x=,0t:y=","%":"SVGFECompositeElement"},nK:{"^":"W;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nL:{"^":"W;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nM:{"^":"W;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nN:{"^":"W;0q:x=,0t:y=","%":"SVGFEFloodElement"},nO:{"^":"W;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nP:{"^":"W;0q:x=,0t:y=","%":"SVGFEImageElement"},nQ:{"^":"W;0q:x=,0t:y=","%":"SVGFEMergeElement"},nR:{"^":"W;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nS:{"^":"W;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nT:{"^":"W;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nU:{"^":"W;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nV:{"^":"W;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nW:{"^":"W;0q:x=,0t:y=","%":"SVGFETileElement"},nX:{"^":"W;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nZ:{"^":"W;0q:x=,0t:y=","%":"SVGFilterElement"},o_:{"^":"bF;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hR:{"^":"bF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bF:{"^":"W;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},o4:{"^":"bF;0q:x=,0t:y=","%":"SVGImageElement"},bI:{"^":"r;",$isbI:1,"%":"SVGLength"},o8:{"^":"kT;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.e(c,"$isbI")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bI]},
$isk:1,
$ask:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asC:function(){return[P.bI]},
"%":"SVGLengthList"},oc:{"^":"W;0q:x=,0t:y=","%":"SVGMaskElement"},bK:{"^":"r;",$isbK:1,"%":"SVGNumber"},oo:{"^":"l3;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.e(c,"$isbK")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bK]},
$isk:1,
$ask:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asC:function(){return[P.bK]},
"%":"SVGNumberList"},ot:{"^":"W;0q:x=,0t:y=","%":"SVGPatternElement"},ov:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},ow:{"^":"r;0m:length=","%":"SVGPointList"},ox:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},oy:{"^":"hR;0q:x=,0t:y=","%":"SVGRectElement"},oD:{"^":"W;0a0:type}","%":"SVGScriptElement"},oK:{"^":"lj;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oN:{"^":"W;0a0:type}","%":"SVGStyleElement"},W:{"^":"a3;",
gcf:function(a){return new P.hM(a,new W.ks(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oO:{"^":"bF;0q:x=,0t:y=","%":"SVGSVGElement"},jo:{"^":"bF;","%":"SVGTextPathElement;SVGTextContentElement"},oQ:{"^":"jo;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bP:{"^":"r;",$isbP:1,"%":"SVGTransform"},oW:{"^":"lw;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.e(c,"$isbP")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bP]},
$isk:1,
$ask:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asC:function(){return[P.bP]},
"%":"SVGTransformList"},oY:{"^":"bF;0q:x=,0t:y=","%":"SVGUseElement"},kS:{"^":"r+y;"},kT:{"^":"kS+C;"},l2:{"^":"r+y;"},l3:{"^":"l2+C;"},li:{"^":"r+y;"},lj:{"^":"li+C;"},lv:{"^":"r+y;"},lw:{"^":"lv+C;"}}],["","",,P,{"^":"",S:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjB:1}}],["","",,P,{"^":"",ni:{"^":"r;0m:length=","%":"AudioBuffer"},dR:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nj:{"^":"kr;",
i:function(a,b){return P.aY(a.get(H.K(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaz:function(a){var z=H.h([],[P.i])
this.M(a,new P.he(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asak:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},he:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hf:{"^":"dR;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nk:{"^":"a7;0m:length=","%":"AudioTrackList"},hi:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nl:{"^":"dR;0a0:type}","%":"BiquadFilterNode"},or:{"^":"hi;0m:length=","%":"OfflineAudioContext"},os:{"^":"hf;0a0:type}","%":"Oscillator|OscillatorNode"},kr:{"^":"r+ak;"}}],["","",,P,{"^":"",dc:{"^":"r;",
ij:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc5)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mp(g))
return}if(!!z.$isee)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c2("Incorrect number or type of arguments"))},
ii:function(a,b,c,d,e,f,g){return this.ij(a,b,c,d,e,f,g,null,null,null)},
$isdc:1,
"%":"WebGLRenderingContext"},jK:{"^":"r;",$isjK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oI:{"^":"lg;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return P.aY(a.item(b))},
l:function(a,b,c){H.D(b)
H.e(c,"$isJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asC:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lf:{"^":"r+y;"},lg:{"^":"lf+C;"}}],["","",,O,{"^":"",aL:{"^":"b;0a,0b,0c,0d,$ti",
bQ:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
cO:function(a,b,c){var z=H.aJ(this,"aL",0)
H.f(b,{func:1,ret:P.al,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bh:function(a,b){return this.cO(a,null,b)},
fn:function(a){var z
H.w(a,"$isk",[H.aJ(this,"aL",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ey:function(a,b){var z
H.w(b,"$isk",[H.aJ(this,"aL",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.aB(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aJ(this,"aL",0)
H.z(b,z)
z=[z]
if(this.fn(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ey(x,H.h([b],z))}},
$isk:1,
u:{
cV:function(a){var z=new O.aL([a])
z.bQ(a)
return z}}},d6:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
ez:function(a){var z=this.b
if(!(z==null))z.E(a)},
aC:function(){return this.ez(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.c9()},
e9:function(a){var z=this.a
if(a==null)C.a.h(z,V.c9())
else C.a.h(z,a)
this.aC()},
cD:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cP:{"^":"b;"},b_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa4:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.v]})
C.a.I(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.eA])
w.b=!0
this.ah(w)}},
sb6:function(a){var z,y,x,w
if(!J.F(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.v]})
C.a.I(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.ah])
w.b=!0
this.ah(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aZ(0,b,this):null
if(!J.F(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.ax])
w.b=!0
this.ah(w)}for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.H();)z.d.ap(0,b)},
aW:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gZ(z))
else C.a.h(z.a,y.k(0,z.gZ(z)))
z.aC()
a.ea(this.f)
z=a.dy
x=(z&&C.a).gaA(z)
if(x!=null&&this.d!=null)x.i9(a,this)
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.H();)z.d.aW(a)
a.e8()
a.dx.cD()},
gD:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.E(a)},
U:function(){return this.ah(null)},
hW:[function(a){H.e(a,"$isv")
this.e=null
this.ah(a)},function(){return this.hW(null)},"j7","$1","$0","ge6",0,2,1],
hV:[function(a){this.ah(H.e(a,"$isv"))},function(){return this.hV(null)},"j6","$1","$0","ge5",0,2,1],
hT:[function(a){this.ah(H.e(a,"$isv"))},function(){return this.hT(null)},"j4","$1","$0","ge4",0,2,1],
j3:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.b_],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b8()
t.a=H.h([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.U()},"$2","ghS",8,0,9],
j5:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.b_],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b8()
t.a=H.h([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.I(t.a,y)}}this.U()},"$2","ghU",8,0,9],
$isaO:1},j_:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ew:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d6()
y=[V.ax]
z.a=H.h([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.v]}
v=H.f(new E.j1(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d6()
z.a=H.h([],y)
v=z.gD()
v.toString
x=H.f(new E.j2(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d6()
z.a=H.h([],y)
y=z.gD()
y.toString
w=H.f(new E.j3(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.df])
this.dy=z
C.a.h(z,null)
this.fr=new H.cs(0,0,[P.i,A.ez])},
gi4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.k(0,y.gZ(y))
this.z=y
z=y}return z},
ea:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
e8:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
j0:function(a,b){var z=new E.j_(a,b)
z.ew(a,b)
return z}}},j1:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.ch=null}},j2:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j3:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},ju:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
eB:[function(a){var z
H.e(a,"$isv")
z=this.x
if(!(z==null))z.E(a)
this.ib()},function(){return this.eB(null)},"eA","$1","$0","gcS",0,2,1],
ghJ:function(){var z,y,x
z=Date.now()
y=C.d.a1(P.ea(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ag(z,!1)
return x/y},
dc:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cs(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cs(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ib:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jw(this),{func:1,ret:-1,args:[P.V]})
C.B.eS(z)
C.B.fC(z,W.fH(y,P.V))}},
i8:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dc()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.ea(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aC()
w=x.db
C.a.sm(w.a,0)
w.aC()
w=x.dx
C.a.sm(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aW(this.e)}}catch(v){z=H.aw(v)
y=H.bz(v)
P.dJ("Error: "+H.l(z))
P.dJ("Stack: "+H.l(y))
throw H.a(z)}},
u:{
jv:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscT)return E.eI(a,!0,!0,!0,!1)
y=W.cU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcf(a).h(0,y)
w=E.eI(y,!0,!0,!0,!1)
w.a=a
return w},
eI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ju()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.bN(a,"webgl",y)
x=H.e(x==null?C.k.bN(a,"experimental-webgl",y):x,"$isdc")
if(x==null)H.q(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j0(x,a)
w=new T.jp(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jX(a)
v=new X.i0()
v.c=new X.aE(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.iy(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ig(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jy(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.eC,P.b]])
w.z=v
u=document
t=W.aF
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.f(w.gfa(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.f(w.gfd(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.f(w.gf7(),q),!1,r))
v=w.z
p=W.bH
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.f(w.gff(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.f(w.gfe(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.f(w.gfi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.f(w.gfk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.f(w.gfj(),s),!1,t))
p=w.z
o=W.bT;(p&&C.a).h(p,W.a2(a,H.K(W.hG(a)),H.f(w.gfl(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.f(w.gfb(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.f(w.gfc(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.f(w.gfm(),q),!1,r))
r=w.z
q=W.bo
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.f(w.gfu(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.f(w.gfs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.f(w.gft(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ag(Date.now(),!1)
z.ch=0
z.dc()
return z}}},jw:{"^":"n:31;a",
$1:function(a){var z
H.fZ(a)
z=this.a
if(z.z){z.z=!1
z.i8()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",u:{
dp:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bt(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dV:{"^":"cP;a,b,c,d,e",
ca:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aw(y)
x=P.u('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ki:{"^":"b;a",$isnm:1},dW:{"^":"b;a,0b,c,d",
aS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ca:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ca(a)},
io:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aW:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.Y(y,", ")+"\nAttrs:   "+C.a.Y(u,", ")},
$isoP:1},cp:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bf(this.c)+"'")+"]"}},bq:{"^":"b;a",
gcP:function(a){var z,y
z=this.a
y=(z&$.$get$aU().a)!==0?3:0
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=2
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$bR().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=4
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+4:y},
hp:function(a){var z,y,x
z=$.$get$aU()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bq))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.i])
y=this.a
if((y&$.$get$aU().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aW().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bR().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$br().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.Y(z,"|")},
u:{
as:function(a){return new Z.bq(a)}}}}],["","",,D,{"^":"",e_:{"^":"b;"},b8:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.M(y,new D.hK(z))
return x!==0},
hB:function(){return this.E(null)},
ic:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
ao:function(a){return this.ic(a,!0,!1)},
u:{
P:function(){var z=new D.b8()
z.a=H.h([],[{func:1,ret:-1,args:[D.v]}])
z.c=0
return z}}},hK:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"b;a,0b"},cq:{"^":"v;c,d,a,0b,$ti"},cr:{"^":"v;c,d,a,0b,$ti"},Q:{"^":"v;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dX:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
u:{"^":"no<"}},ek:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ek))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},el:{"^":"v;c,a,0b"},i0:{"^":"b;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.E(y)},
hY:function(a){var z,y
this.c=a.b
this.d.I(0,a.a)
z=this.b
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.E(y)}},eo:{"^":"cv;x,y,c,d,e,a,0b"},ig:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.B(0,new V.R(x*w,v*u))
u=this.a.gaL()
s=new X.bJ(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cC:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eo()
if(typeof z!=="number")return z.bM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.at(a,b))
return!0},
i2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.d7(new V.Z(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.E(w)
return!0},
fh:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.eo(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.R(0,0)}},aE:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
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
return z+(this.c?"Shift+":"")}},bJ:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},iy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bW:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gaL()
x=new X.bJ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cC:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bW(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eo()
if(typeof z!=="number")return z.bM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bW(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bW(a,b,!1))
return!0},
i3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.d7(new V.Z(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdr:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
gbL:function(){var z=this.c
if(z==null){z=D.P()
this.c=z}return z},
ge3:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z}},d7:{"^":"cv;x,c,d,e,a,0b"},cv:{"^":"v;"},eK:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},jy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaL()
w=new X.eK(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
i_:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.E(this.at(a,!1))
return!0}},jX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.ey(0,0,(z&&C.k).gbr(z).c,C.k.gbr(z).d)},
d1:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ek(z,new X.aE(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
c6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.R(y-w,x-v)},
b1:function(a){return new V.Z(a.movementX,a.movementY)},
c1:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.h.ab(u.pageX)
C.h.ab(u.pageY)
s=z.left
C.h.ab(u.pageX)
C.a.h(y,new V.R(t-s,C.h.ab(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.aE(y,a.altKey,a.shiftKey))},
iG:[function(a){this.f=!0},"$1","gfd",4,0,5],
iA:[function(a){this.f=!1},"$1","gf7",4,0,5],
iD:[function(a){if(this.f)a.preventDefault()},"$1","gfa",4,0,5],
iI:[function(a){var z
H.e(a,"$isbH")
if(!this.f)return
z=this.d1(a)
if(this.b.i1(z))a.preventDefault()},"$1","gff",4,0,21],
iH:[function(a){var z
H.e(a,"$isbH")
if(!this.f)return
z=this.d1(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfe",4,0,21],
iK:[function(a){var z,y,x,w
H.e(a,"$isaF")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.ar(a)
x=this.b1(a)
if(this.d.cC(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cC(y,w))a.preventDefault()},"$1","gfi",4,0,4],
iM:[function(a){var z,y,x
H.e(a,"$isaF")
this.aJ(a)
z=this.ar(a)
if(this.x){y=this.b1(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfk",4,0,4],
iF:[function(a){var z,y,x,w
H.e(a,"$isaF")
z=this.a
if(!(z&&C.k).gbr(z).dn(0,new P.bL(a.clientX,a.clientY,[P.V]))){this.aJ(a)
y=this.ar(a)
if(this.x){x=this.b1(a)
if(this.d.b8(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b8(y,w))a.preventDefault()}},"$1","gfc",4,0,4],
iL:[function(a){var z,y,x
H.e(a,"$isaF")
this.aJ(a)
z=this.ar(a)
if(this.x){y=this.b1(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfj",4,0,4],
iE:[function(a){var z,y,x,w
H.e(a,"$isaF")
z=this.a
if(!(z&&C.k).gbr(z).dn(0,new P.bL(a.clientX,a.clientY,[P.V]))){this.aJ(a)
y=this.ar(a)
if(this.x){x=this.b1(a)
if(this.d.b7(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b7(y,w))a.preventDefault()}},"$1","gfb",4,0,4],
iN:[function(a){var z,y
H.e(a,"$isbT")
this.aJ(a)
z=new V.Z((a&&C.A).ghy(a),C.A.ghz(a)).p(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gfl",4,0,35],
iO:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fh(w,v,x)}},"$1","gfm",4,0,5],
iU:[function(a){var z
H.e(a,"$isbo")
this.a.focus()
this.f=!0
this.c6(a)
z=this.c1(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfu",4,0,13],
iS:[function(a){var z
H.e(a,"$isbo")
this.c6(a)
z=this.c1(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfs",4,0,13],
iT:[function(a){var z
H.e(a,"$isbo")
this.c6(a)
z=this.c1(a)
if(this.e.i_(z))a.preventDefault()},"$1","gft",4,0,13]}}],["","",,D,{"^":"",cm:{"^":"b;0a,0b,0c,0d",
gD:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z},
aD:[function(a){var z
H.e(a,"$isv")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aD(null)},"ip","$1","$0","geC",0,2,1],
$isa4:1,
$isaO:1},a4:{"^":"b;",$isaO:1},i1:{"^":"aL;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gD:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fg:[function(a){var z
H.e(a,"$isv")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fg(null)},"iJ","$1","$0","gd8",0,2,1],
iP:[function(a){var z,y,x
H.w(a,"$isk",[D.a4],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(x==null||this.eN(x))return!1}return!0},"$1","gfo",4,0,37],
ix:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd8(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.e(b[u],"$isa4")
if(t instanceof D.cm)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b8()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf4",8,0,22],
iR:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd8(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.e(b[u],"$isa4")
if(t instanceof D.cm)C.a.I(this.e,t)
s=t.d
if(s==null){s=new D.b8()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.I(s.a,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfq",8,0,22],
eN:function(a){var z=C.a.b3(this.e,a)
return z},
$ask:function(){return[D.a4]},
$asaL:function(){return[D.a4]}},iH:{"^":"b;",$isa4:1,$isaO:1},jg:{"^":"b;",$isa4:1,$isaO:1},jr:{"^":"b;",$isa4:1,$isaO:1},js:{"^":"b;",$isa4:1,$isaO:1},jt:{"^":"b;",$isa4:1,$isaO:1}}],["","",,V,{"^":"",
nq:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iv",8,0,34],
nd:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bg(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.h.ef($.p.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.h([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.E)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.l(z,u,C.b.aa(z[u],x))}return z},
dI:function(a,b){return C.h.il(Math.pow(b,C.I.cs(Math.log(H.mm(a))/Math.log(b))))},
af:{"^":"b;a,b,c",
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
return new V.af(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
aM:{"^":"b;a,b,c,d",
cI:function(a){return H.h([this.a,this.b,this.c,this.d],[P.t])},
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
return new V.aM(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
cu:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscu")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.h.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.h.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.h.k(t,s)
q=a5.b
p=C.h.k(z,q)
o=a5.e
n=C.h.k(w,o)
m=a5.x
l=C.h.k(t,m)
k=a5.c
z=C.h.k(z,k)
j=a5.f
w=C.h.k(w,j)
i=a5.y
t=C.h.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.h.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.h.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.h.k(d,s)
b=C.h.k(h,q)
a=C.h.k(f,o)
a0=C.h.k(d,m)
h=C.h.k(h,k)
f=C.h.k(f,j)
d=C.h.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.h.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.h.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cu(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cu))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.by(H.h([this.a,this.d,this.r],z),3,0)
x=V.by(H.h([this.b,this.e,this.x],z),3,0)
w=V.by(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
ax:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
dZ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.c9()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isax")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.A(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
be:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
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
j:function(a){return this.N()},
dP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.by(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
F:function(a){return this.dP(a,3,0)},
N:function(){return this.dP("",3,0)},
u:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c9:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ep:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.C(c)))
y=b.av(z)
x=y.p(0,Math.sqrt(y.C(y)))
w=z.av(x)
v=new V.A(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.O(0).C(v),x.b,w.b,z.b,w.O(0).C(v),x.c,w.c,z.c,z.O(0).C(v),0,0,0,1)}}},
R:{"^":"b;q:a>,t:b>",
B:function(a,b){return new V.R(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.R(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.R(0,0)
return new V.R(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
U:{"^":"b;q:a>,t:b>,c",
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.U(0,0,0)
return new V.U(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bM:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bM(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
ex:{"^":"b;q:a>,t:b>,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ex))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
u:{
ey:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ex(a,b,c,d)}}},
Z:{"^":"b;a,b",
e0:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,14],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.Z(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Z(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
A:{"^":"b;a,b,c",
e0:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,14],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.A(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.A(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.A(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.A(0,0,0)
return new V.A(this.a/b,this.b/b,this.c/b)},
e_:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
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
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bQ:{"^":"b;a,b,c,d",
e0:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bQ(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bQ(0,0,0,0)
return new V.bQ(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hq:{"^":"e_;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.nd(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.E(a)},
scL:function(a,b){},
scw:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.R(z)}},
scA:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.R(z)}},
sW:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.t])
z.b=!0
this.R(z)}},
scz:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.R(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.t])
z.b=!0
this.R(z)}},
sck:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.t])
z.b=!0
this.R(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
u:{
cW:function(){var z=new U.hq()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e1:{"^":"ah;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
aZ:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e1))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
u:{
e2:function(a){var z=new U.e1()
z.a=a
return z}}},ed:{"^":"aL;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.E(a)},function(){return this.R(null)},"ae","$1","$0","gaI",0,2,1],
iw:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gf3",8,0,23],
iQ:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.f(x,w)
C.a.I(t.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfp",8,0,23],
aZ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aB(z,z.length,0,[H.x(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.aZ(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c9():x
z=this.e
if(!(z==null))z.ao(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.ah]},
$asaL:function(){return[U.ah]},
$isah:1},ah:{"^":"e_;"},jY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.P()
this.cy=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.R(null)},"ae","$1","$0","gaI",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdr()
z.toString
y={func:1,ret:-1,args:[D.v]}
x=H.f(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ge3()
x.toString
z=H.f(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
y=H.f(this.gbZ(),y)
C.a.h(z.a,y)
return!0},
f_:[function(a){H.e(a,"$isv")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbX",4,0,2],
f0:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isv"),"$isbJ")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.Z(y.a,y.b).k(0,2).p(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.Z(x.a,x.b).k(0,2).p(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
this.b.sT(0)
y=y.L(0,a.z)
this.Q=new V.Z(y.a,y.b).k(0,2).p(0,z.ga5())}this.ae()},"$1","gbY",4,0,2],
f1:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sT(y*10*x)
this.ae()}},"$1","gbZ",4,0,2],
aZ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aD(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.R(null)},"ae","$1","$0","gaI",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdr()
z.toString
y={func:1,ret:-1,args:[D.v]}
x=H.f(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ge3()
x.toString
z=H.f(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
x=H.f(this.gbZ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.P()
x.f=z}x=H.f(this.geX(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.f(this.geY(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.P()
x.b=z}x=H.f(this.gfX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.f(this.gfW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.P()
x.c=z}y=H.f(this.gfV(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.Z(z,y)},
f_:[function(a){a=H.j(H.e(a,"$isv"),"$isbJ")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbX",4,0,2],
f0:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isv"),"$isbJ")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ak(new V.Z(y.a,y.b).k(0,2).p(0,z.ga5()))
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
x=y.L(0,a.y)
w=this.ak(new V.Z(x.a,x.b).k(0,2).p(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ak(new V.Z(y.a,y.b).k(0,2).p(0,z.ga5()))}this.ae()},"$1","gbY",4,0,2],
f1:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
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
this.ae()}},"$1","gbZ",4,0,2],
it:[function(a){if(H.j(H.e(a,"$isv"),"$iseo").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geX",4,0,2],
iu:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isv"),"$isbJ")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ak(new V.Z(x.a,x.b).k(0,2).p(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ak(new V.Z(y.a,y.b).k(0,2).p(0,z.ga5()))
this.ae()},"$1","geY",4,0,2],
iY:[function(a){H.e(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfX",4,0,2],
iX:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isv"),"$iseK")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ak(new V.Z(y.a,y.b).k(0,2).p(0,z.ga5()))
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
x=y.L(0,a.y)
w=this.ak(new V.Z(x.a,x.b).k(0,2).p(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ak(new V.Z(y.a,y.b).k(0,2).p(0,z.ga5()))}this.ae()},"$1","gfW",4,0,2],
iW:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
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
this.ae()}},"$1","gfV",4,0,2],
aZ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aD(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aD(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.P()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.E(a)},
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.P()
z.e=y
z=y}else z=y
y=H.f(this.gf2(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.P()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iv:[function(a){var z,y,x,w
H.e(a,"$isv")
if(!J.F(this.b,this.a.b.c))return
H.j(a,"$isd7")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.t])
z.b=!0
this.R(z)}},"$1","gf2",4,0,2],
aZ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aD(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",hI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aE:[function(a){var z
H.e(a,"$isv")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aE(null)},"iq","$1","$0","gaj",0,2,1],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b_
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b8()
s.a=H.h([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gf8",8,0,9],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b_
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b8()
s.a=H.h([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.I(s.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gf9",8,0,9],
sed:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.f(this.gaj(),{func:1,ret:-1,args:[D.v]})
C.a.I(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.f(this.gaj(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q("technique",x,this.c,this,[O.df])
z.b=!0
this.aE(z)}},
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ea(this.c)
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
u=C.d.ab(v.a*x)
if(typeof w!=="number")return H.o(w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.e9(V.aD(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eu
if(y==null){y=V.ep(new V.U(0,0,0),new V.A(0,1,0),new V.A(0,0,-1))
$.eu=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.e9(m)
z=this.c
if(z!=null)z.ap(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.H();)z.d.ap(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.H();)z.d.aW(a)
this.a.toString
a.cy.cD()
a.db.cD()
this.b.toString
a.e8()},
$isoB:1}}],["","",,A,{"^":"",dQ:{"^":"b;a,b,c"},hd:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hA:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ip:{"^":"ez;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aQ,0ax,0aR,0bs,0ds,0dt,0bt,0bu,0du,0dv,0bv,0bw,0dw,0dz,0bx,0dA,0dB,0by,0dC,0dD,0bz,0bA,0bB,0dE,0dF,0bC,0bD,0dG,0dH,0bE,0dI,0cm,0dJ,0cn,0dK,0co,0dL,0cp,0dM,0cq,0dN,0cr,a,b,0c,0d,0e,0f,0r",
ev:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
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
a2.h_(z)
a2.h6(z)
a2.h0(z)
a2.he(z)
a2.hf(z)
a2.h8(z)
a2.hj(z)
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
z=new P.ap("")
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
v.h3(z)
v.fZ(z)
v.h1(z)
v.h4(z)
v.hc(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ha(z)
v.hb(z)}v.h7(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
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
p=H.h([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.Y(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h9(z)
v.hd(z)
v.hg(z)
v.hh(z)
v.hi(z)
v.h5(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.i])
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
n="vec4("+C.a.Y(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.d2(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d2(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fL(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.u("Failed to link shader: "+H.l(m)))}this.fR()
this.fS()
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaQ")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaQ")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaQ")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaQ")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdj")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaQ")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaQ")
this.k3=H.h([],[A.aQ])
y=a2.aQ
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.i(0,v)
if(k==null)H.q(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaQ"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isar")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isar")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.aQ=H.j(this.r.n(0,"diffuseTxt"),"$isaq")
this.aR=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break
case C.f:this.ax=H.j(this.r.n(0,"diffuseTxt"),"$isar")
this.aR=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.c){this.bs=H.j(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.ds=H.j(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.bt=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.f:this.dt=H.j(this.r.n(0,"invDiffuseTxt"),"$isar")
this.bt=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.c){this.bw=H.j(this.r.n(0,"shininess"),"$isa0")
this.bu=H.j(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.du=H.j(this.r.n(0,"specularTxt"),"$isaq")
this.bv=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break
case C.f:this.dv=H.j(this.r.n(0,"specularTxt"),"$isar")
this.bv=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dw=H.j(this.r.n(0,"bumpTxt"),"$isaq")
this.bx=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break
case C.f:this.dz=H.j(this.r.n(0,"bumpTxt"),"$isar")
this.bx=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dA=H.j(this.r.n(0,"envSampler"),"$isar")
this.dB=H.j(this.r.n(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.c){this.by=H.j(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dC=H.j(this.r.n(0,"reflectTxt"),"$isaq")
this.bz=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break
case C.f:this.dD=H.j(this.r.n(0,"reflectTxt"),"$isar")
this.bz=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.c){this.bA=H.j(this.r.n(0,"refraction"),"$isa0")
this.bB=H.j(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dE=H.j(this.r.n(0,"refractTxt"),"$isaq")
this.bC=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break
case C.f:this.dF=H.j(this.r.n(0,"refractTxt"),"$isar")
this.bC=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.c){this.bD=H.j(this.r.n(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.i:break
case C.e:this.dG=H.j(this.r.n(0,"alphaTxt"),"$isaq")
this.bE=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break
case C.f:this.dH=H.j(this.r.n(0,"alphaTxt"),"$isar")
this.bE=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break}}this.cm=H.h([],[A.eW])
this.cn=H.h([],[A.eX])
this.co=H.h([],[A.eY])
this.cp=H.h([],[A.eZ])
this.cq=H.h([],[A.f_])
this.cr=H.h([],[A.f0])
if(a2.k2){y=a2.z
if(y>0){this.dI=H.e(this.r.n(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.cm;(x&&C.a).h(x,new A.eW(l,k,j))}}y=a2.Q
if(y>0){this.dJ=H.e(this.r.n(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.i(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.i(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa0")
x=this.r
w="pntLights["+l+"].att1"
g=x.i(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="pntLights["+l+"].att2"
f=x.i(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.cn;(x&&C.a).h(x,new A.eX(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dK=H.e(this.r.n(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.i(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.i(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.i(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="spotLights["+l+"].att0"
e=x.i(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="spotLights["+l+"].att1"
d=x.i(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="spotLights["+l+"].att2"
c=x.i(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.co;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dL=H.e(this.r.n(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.i(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.i(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.i(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.i(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isaq")
x=this.cp;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dM=H.e(this.r.n(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.i(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdj")
x=this.r
w="txtPntLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.i(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isar")
x=this.cq;(x&&C.a).h(x,new A.f_(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dN=H.e(this.r.n(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.i(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.i(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.i(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.i(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.i(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.i(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.i(0,w)
if(b==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.i(0,w)
if(a==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.i(0,w)
if(a0==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isa0")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.i(0,w)
if(a1==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isaq")
x=this.cr;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
af:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ep(c)
b.a.uniform1i(b.d,0)}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
u:{
io:function(a,b){var z,y
z=a.ax
y=new A.ip(b,z)
y.ex(b,z)
y.ev(a,b)
return y}}},is:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aQ,ax,aR",
h_:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aQ+"];\n"
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
h6:function(a){var z
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
h0:function(a){var z
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
he:function(a){var z,y
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
hf:function(a){var z,y
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
h8:function(a){var z
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
hj:function(a){var z
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
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aB(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h3:function(a){var z,y
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
case C.i:z=y+"   return emissionClr;\n"
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
fZ:function(a){var z,y
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
case C.i:z=y+"   return ambientClr;\n"
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
h1:function(a){var z,y
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
case C.i:z=y+"   diffuseColor = diffuseClr;\n"
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
h4:function(a){var z,y
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
case C.i:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
hc:function(a){var z,y
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
case C.i:z=y+"   specularColor = specularClr;\n"
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
h7:function(a){var z,y
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
ha:function(a){var z,y
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
case C.i:z=y+"   vec3 scalar = reflectClr;\n"
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
hb:function(a){var z,y
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
case C.i:z=y+"   vec3 scalar = refractClr;\n"
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
h2:function(a){var z,y
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
h9:function(a){var z,y
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
hd:function(a){var z,y
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
hg:function(a){var z,y,x
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
h5:function(a){var z
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
j:function(a){return this.ax}},eW:{"^":"b;a,b,c"},eZ:{"^":"b;a,b,c,d,e,f,r,x"},eX:{"^":"b;a,b,c,d,e,f,r"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f0:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ez:{"^":"cP;",
ex:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d2:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fR:function(){var z,y,x,w,v,u
z=H.h([],[A.dQ])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dQ(y,v.name,u))}this.f=new A.hd(z)},
fS:function(){var z,y,x,w,v,u
z=H.h([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hx(v.type,v.size,v.name,u))}this.r=new A.jJ(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.di(z,y,b,a,c)},
eP:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.di(z,y,b,a,c)},
eQ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.di(z,y,b,a,c)},
bn:function(a,b){return new P.fd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hx:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.a0(this.a,this.e,c,d)
case 35664:return new A.jE(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jH(this.a,this.e,c,d)
case 35667:return new A.jF(this.a,this.e,c,d)
case 35668:return new A.jG(this.a,this.e,c,d)
case 35669:return new A.jI(this.a,this.e,c,d)
case 35674:return new A.jL(this.a,this.e,c,d)
case 35675:return new A.dj(this.a,this.e,c,d)
case 35676:return new A.aQ(this.a,this.e,c,d)
case 35678:return this.eP(b,c,d)
case 35680:return this.eQ(b,c,d)
case 35670:throw H.a(this.bn("BOOL",c))
case 35671:throw H.a(this.bn("BOOL_VEC2",c))
case 35672:throw H.a(this.bn("BOOL_VEC3",c))
case 35673:throw H.a(this.bn("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ck:{"^":"b;a,b",
j:function(a){return this.b}},ac:{"^":"b;"},jJ:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.N()},
hI:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].j(0)+a
return x},
N:function(){return this.hI("\n")}},O:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jF:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},jG:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jI:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jD:{"^":"ac;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
u:{
di:function(a,b,c,d,e){var z=new A.jD(a,b,c,e)
z.f=d
z.e=P.ic(d,0,!1,P.m)
return z}}},a0:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},jE:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jL:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dj:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bt(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aQ:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bt(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ac;a,b,c,d",
ep:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},ar:{"^":"ac;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dB:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ad,P.t,P.t]})
z=F.cy()
F.bY(z,b,c,d,a,1,0,0,1)
F.bY(z,b,c,d,a,0,1,0,3)
F.bY(z,b,c,d,a,0,0,1,2)
F.bY(z,b,c,d,a,-1,0,0,0)
F.bY(z,b,c,d,a,0,-1,0,0)
F.bY(z,b,c,d,a,0,0,-1,3)
z.ag()
return z},
cD:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bY:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ad,P.t,P.t]})
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
z.d=y}l=F.cD(y)
k=F.cD(z.b)
j=F.cL(d,e,new F.m4(z,F.cD(z.c),F.cD(z.d),k,l,c),b)
if(j!=null)a.aV(j)},
fO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.t,args:[P.t]})
if(e<3)return
z=F.cy()
y=b?-1:1
x=-6.283185307179586/e
w=H.h([],[F.ad])
v=z.a
u=new V.A(0,0,y)
u=u.p(0,Math.sqrt(u.C(u)))
C.a.h(w,v.hm(new V.bM(a,-1,-1,-1),new V.aM(1,1,1,1),new V.U(0,0,c),new V.A(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.A(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bp(new V.bM(a,-1,-1,-1),null,new V.aM(n,l,m,1),new V.U(r*p,q*p,c),new V.A(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hk(w)
return z},
fM:function(a,b,c,d,e,f){return F.ms(!0,c,d,new F.mr(a,f),e)},
ms:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.cL(c,e,new F.mu(d),null)
if(z==null)return
z.ag()
z.bp()
if(b)z.aV(F.fO(3,!1,1,new F.mv(d),e))
z.aV(F.fO(1,!0,-1,new F.mw(d),e))
return z},
mL:function(a,b){var z=F.cL(a,b,new F.mM(),null)
z.d.bJ()
z.ag()
z.bp()
return z},
ae:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.C(b)))
z=b.a
y=b.b
x=b.c
w=F.bp(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.hE(w,new F.dn())
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
w.sam(0,new V.aM(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.saY(new V.R(q,p<0?-p:p))
a.a.h(0,w)
return w},
Y:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bo(0,b,d,c)
else{z=F.ae(a,b.r.B(0,c.r).k(0,0.5))
y=F.ae(a,c.r.B(0,d.r).k(0,0.5))
x=F.ae(a,d.r.B(0,b.r).k(0,0.5))
w=e-1
F.Y(a,b,z,x,w)
F.Y(a,z,c,y,w)
F.Y(a,y,x,z,w)
F.Y(a,x,y,d,w)}},
h2:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n6()
y=F.dB(a,null,new F.n7(z),c)
y.bp()
return y},
na:function(a,b,c,d){return F.fN(c,a,d,b,new F.nb())},
mJ:function(a,b,c,d,e,f){return F.fN(d,a,e,b,new F.mK(f,c))},
fN:function(a,b,c,d,e){var z=F.cL(a,b,new F.mt(H.f(e,{func:1,ret:V.U,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ag()
z.bp()
return z},
cL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ad,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cy()
y=H.h([],[F.ad])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bp(null,null,new V.aM(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cj(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bp(null,null,new V.aM(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cj(d))}}z.d.hl(a+1,b+1,y)
return z},
m4:{"^":"n:6;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cu(z.b,b).cu(z.d.cu(z.c,b),c)
a.sW(0,new V.U(y.a,y.b,y.c))
a.sbK(y.p(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
a.sdj(new V.bM(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mr:{"^":"n:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mu:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sW(0,new V.U(y,u,w))
u=new V.A(y,u,w)
a.sbK(u.p(0,Math.sqrt(u.C(u))))
a.sdj(new V.bM(1-c,2+c,-1,-1))}},
mv:{"^":"n:16;a",
$1:function(a){return this.a.$2(a,1)}},
mw:{"^":"n:16;a",
$1:function(a){return this.a.$2(1-a,0)}},
mM:{"^":"n:6;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.A(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.C(w)))
a.sW(0,new V.U(x.a,x.b,x.c))}},
n6:{"^":"n:25;",
$2:function(a,b){return 0}},
n7:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.A(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.C(x))).k(0,1+z)
a.sW(0,new V.U(z.a,z.b,z.c))}},
nb:{"^":"n:26;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
mK:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mt:{"^":"n:6;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dL(y.$1(z),x)
x=J.dL(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.A(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.C(x)))
u=new V.A(1,0,0)
y=v.av(!v.v(0,u)?new V.A(0,0,1):u)
t=y.p(0,Math.sqrt(y.C(y)))
y=t.av(v)
u=y.p(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sW(0,w.B(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ao:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gb5()){C.a.I(this.a.a.d.b,this)
this.a.a.U()}this.c3()
this.c4()
this.fz()},
fO:function(a){this.a=a
C.a.h(a.d.b,this)},
fP:function(a){this.b=a
C.a.h(a.d.c,this)},
fQ:function(a){this.c=a
C.a.h(a.d.d,this)},
c3:function(){var z=this.a
if(z!=null){C.a.I(z.d.b,this)
this.a=null}},
c4:function(){var z=this.b
if(z!=null){C.a.I(z.d.c,this)
this.b=null}},
fz:function(){var z=this.c
if(z!=null){C.a.I(z.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
eJ:function(){var z,y,x,w,v
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
if(v.e_())return
return v.p(0,Math.sqrt(v.C(v)))},
eL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.A(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.C(z)))
z=w.L(0,y)
z=new V.A(z.a,z.b,z.c)
z=v.av(z.p(0,Math.sqrt(z.C(z))))
return z.p(0,Math.sqrt(z.C(z)))},
ce:function(){if(this.d!=null)return!0
var z=this.eJ()
if(z==null){z=this.eL()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
eI:function(){var z,y,x,w,v
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
if(v.e_())return
return v.p(0,Math.sqrt(v.C(v)))},
eK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
m=z.p(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).B(0,u).L(0,x)
z=new V.A(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.C(z)))
z=k.av(m)
z=z.p(0,Math.sqrt(z.C(z))).av(k)
m=z.p(0,Math.sqrt(z.C(z)))}return m},
cc:function(){if(this.e!=null)return!0
var z=this.eI()
if(z==null){z=this.eK()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
aF:function(a,b){var z=b.a
if(z==null)throw H.a(P.u("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.u("May not replace a face's vertex with a vertex attached to a different shape."))},
ght:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z,y
if(this.gb5())return a+"disposed"
z=a+C.b.aa(J.aa(this.a.e),0)+", "+C.b.aa(J.aa(this.b.e),0)+", "+C.b.aa(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
N:function(){return this.F("")},
u:{
b9:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.u("May not create a face with vertices attached to different shapes."))
z.fO(a)
z.fP(b)
z.fQ(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
hL:{"^":"b;"},
jc:{"^":"hL;",
aU:function(a,b,c){var z,y
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
d3:{"^":"b;0a,0b",
aw:function(){if(!this.gb5()){C.a.I(this.a.a.c.b,this)
this.a.a.U()}this.c3()
this.c4()},
c3:function(){var z=this.a
if(z!=null){C.a.I(z.c.b,this)
this.a=null}},
c4:function(){var z=this.b
if(z!=null){C.a.I(z.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
aF:function(a,b){var z=b.a
if(z==null)throw H.a(P.u("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.u("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){if(this.gb5())return a+"disposed"
return a+C.b.aa(J.aa(this.a.e),0)+", "+C.b.aa(J.aa(this.b.e),0)},
N:function(){return this.F("")}},
i2:{"^":"b;"},
jC:{"^":"i2;",
aU:function(a,b,c){var z,y
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
db:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.I(z.a.b.b,this)
this.a.a.U()}this.fw()},
fw:function(){var z=this.a
if(z!=null){C.a.I(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.aa(J.aa(z.e),0)},
N:function(){return this.F("")}},
eA:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){v=z[w]
this.a.h(0,v.hv())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.db()
if(r.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d3()
s=p.a
if(s==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.b9(p,o,l)}z=this.e
if(!(z==null))z.ao(0)},
ag:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ag()||!1
if(!this.a.ag())y=!1
z=this.e
if(!(z==null))z.ao(0)
return y},
hF:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.aU(0,a,w))return w}return},
hE:function(a,b){return this.hF(a,b,0)},
eU:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ad],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aU(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fB:function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isc",[P.m],"$asc")
H.jf(b,J.mc(),H.x(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.d(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.d(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.q(P.u("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aF(w,a)
v=x.a
if(v!=null){C.a.I(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aF(w,a)
v=x.b
if(v!=null){C.a.I(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aF(w,a)
v=x.c
if(v!=null){C.a.I(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.q(P.u("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aF(w,a)
v=x.a
if(v!=null){C.a.I(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aF(w,a)
v=x.b
if(v!=null){C.a.I(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.q(P.u("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.q(P.u("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.I(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}x=this.a
v=x.c
if(y>=v.length)return H.d(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.q(P.u("May not remove a vertex without first making it empty."))
t.a=null
C.a.i6(v,y)
v=x.a.e
if(!(v==null))v.E(null)
x.b=!0}},
e2:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ad],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.eU(a,v,y,u,t)){s=b.aV(u)
if(s!=null){this.fB(s,t)
y-=t.length}}}this.a.A()
this.c.bJ()
this.d.bJ()
this.b.i7()
this.c.cF(new F.jC())
this.d.cF(new F.jc())
z=this.e
if(!(z==null))z.ao(0)},
ho:function(a){this.e2(new F.dn(),new F.iC())},
bp:function(){return this.ho(null)},
hr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aU()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$bR().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
v=b.gcP(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.dV])
for(r=0,q=0;q<w;++q){p=b.hp(q)
o=p.gcP(p)
C.a.l(s,q,new Z.dV(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hN(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bt(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dW(new Z.fa(34962,j),s,b)
i.b=H.h([],[Z.cp])
if(this.b.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.Y(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.E(a)},
U:function(){return this.ah(null)},
u:{
cy:function(){var z,y
z=new F.eA()
y=new F.k8(z)
y.b=!1
y.c=H.h([],[F.ad])
z.a=y
y=new F.jb(z)
y.b=H.h([],[F.db])
z.b=y
y=new F.ja(z)
y.b=H.h([],[F.d3])
z.c=y
y=new F.j9(z)
y.b=H.h([],[F.ao])
z.d=y
z.e=null
return z}}},
j9:{"^":"b;a,0b",
bo:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.b9(b,c,d)},
hk:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ad],"$asc")
z=H.h([],[F.ao])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.d(a,v)
v=a[v]
if(w>=u)return H.d(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.b9(x,v,u))}}return z},
hl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ad],"$asc")
z=H.h([],[F.ao])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.d(c,x)
r=c[x];++x
if(x>=s)return H.d(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.d(c,p)
o=c[p]
if(y<0||y>=s)return H.d(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.b9(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b9(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b9(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b9(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.aU(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ght(x)
if(y)x.aw()}},
ag:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].ce())x=!1
return x},
cd:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cc())x=!1
return x},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
ja:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.aU(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aw()}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
jb:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i7:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
ad:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cj:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bp(this.cx,x,u,z,y,w,v,a,t)},
hv:function(){return this.cj(null)},
sW:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
scB:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.U()}},
sdm:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.U()}},
saY:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.U()}},
sbK:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
sam:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.U()}},
sej:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.U()}},
sdj:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
hN:function(a){var z,y
z=J.I(a)
if(z.v(a,$.$get$aU())){z=this.f
y=[P.t]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aT())){z=this.r
y=[P.t]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aS())){z=this.x
y=[P.t]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aV())){z=this.y
y=[P.t]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.v(a,$.$get$aW())){z=this.z
y=[P.t]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bR())){z=this.Q
y=[P.t]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bS())){z=this.Q
if(z==null)return H.h([1,1,1,1],[P.t])
else return z.cI(0)}else if(z.v(a,$.$get$br()))return H.h([this.ch],[P.t])
else if(z.v(a,$.$get$aR())){z=this.cx
y=[P.t]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.t])},
ce:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.A(0,0,0)
this.d.M(0,new F.kh(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
cc:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.A(0,0,0)
this.d.M(0,new F.kg(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z,y,x
z=H.h([],[P.i])
C.a.h(z,C.b.aa(J.aa(this.e),0))
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
x=C.a.Y(z,", ")
return a+"{"+x+"}"},
N:function(){return this.F("")},
u:{
bp:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ad()
y=new F.kf(z)
y.b=H.h([],[F.db])
z.b=y
y=new F.kd(z)
x=[F.d3]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.k9(z)
x=[F.ao]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aU()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aT().a)!==0?e:null
z.x=(x&$.$get$aS().a)!==0?b:null
z.y=(x&$.$get$aV().a)!==0?f:null
z.z=(x&$.$get$aW().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$br().a)!==0?i:0
z.cx=(x&$.$get$aR().a)!==0?a:null
return z}}},
kh:{"^":"n:10;a",
$1:function(a){var z,y
H.e(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kg:{"^":"n:10;a",
$1:function(a){var z,y
H.e(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k8:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
hn:function(a,b,c,d,e,f,g,h,i){var z=F.bp(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hm:function(a,b,c,d,e,f){return this.hn(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ag:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].ce()
return!0},
cd:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cc()
return!0},
hs:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
this.A()
z=H.h([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
k9:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
M:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ao]})
C.a.M(this.b,b)
C.a.M(this.c,new F.ka(this,b))
C.a.M(this.d,new F.kb(this,b))},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
ka:{"^":"n:10;a,b",
$1:function(a){H.e(a,"$isao")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kb:{"^":"n:10;a,b",
$1:function(a){var z
H.e(a,"$isao")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kd:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}},
ke:{"^":"b;"},
dn:{"^":"ke;",
aU:function(a,b,c){return J.F(b.f,c.f)}},
f6:{"^":"b;"},
kc:{"^":"f6;",
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a,"$isc",[F.ad],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.A(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.A(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.R(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.A(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bQ(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bQ(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bp(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sW(0,null)
else b.sW(0,x.p(0,y))
if(w==null)b.scB(null)
else b.scB(w.p(0,Math.sqrt(w.C(w))))
if(v==null)b.sdm(null)
else b.sdm(v.p(0,Math.sqrt(v.C(v))))
if(s<=0||r==null)b.saY(null)
else b.saY(r.p(0,s))
if(q<=0||p==null)b.sbK(null)
else b.sbK(p.p(0,q))
if(u<=0||t==null)b.sam(0,null)
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
b.sam(0,new V.aM(f,e,d,z))}if(o<=0)b.sej(0,0)
else b.sej(0,n/o)
return b}},
iC:{"^":"f6;",
aV:function(a){var z,y,x,w
H.w(a,"$isc",[F.ad],"$asc")
z=new V.A(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.A(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x)a[x].scB(z)
return}},
kf:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.Y(z,"\n")},
N:function(){return this.F("")}}}],["","",,O,{"^":"",im:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
a2:[function(a){var z
H.e(a,"$isv")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a2(null)},"eD","$1","$0","gbi",0,2,1],
fE:[function(a){H.e(a,"$isv")
this.a=null
this.a2(a)},function(){return this.fE(null)},"iV","$1","$0","gfD",0,2,1],
iy:[function(a,b){var z=V.ax
z=new D.cq(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a2(z)},"$2","gf5",8,0,17],
iz:[function(a,b){var z=V.ax
z=new D.cr(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a2(z)},"$2","gf6",8,0,17],
d0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a1(z.e.length+3,4)*4
x=C.d.a1(z.f.length+3,4)*4
w=C.d.a1(z.r.length+3,4)*4
v=C.d.a1(z.x.length+3,4)*4
u=C.d.a1(z.y.length+3,4)*4
t=C.d.a1(z.z.length+3,4)*4
s=C.d.a1(this.e.a.length+3,4)*4
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
a6=$.$get$aU()
if(c){z=$.$get$aT()
a6=new Z.bq(a6.a|z.a)}if(b){z=$.$get$aS()
a6=new Z.bq(a6.a|z.a)}if(a){z=$.$get$aV()
a6=new Z.bq(a6.a|z.a)}if(a0){z=$.$get$aW()
a6=new Z.bq(a6.a|z.a)}if(a2){z=$.$get$aR()
a6=new Z.bq(a6.a|z.a)}return new A.is(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.w(a,"$isc",[T.dg],"$asc")
if(b!=null)if(!C.a.b3(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.H();){y=z.d
x=new V.A(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cJ(x)}}},
i9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d0()
y=a.fr.i(0,z.ax)
if(y==null){y=A.io(z,a.a)
x=y.b
if(x.length===0)H.q(P.u("May not cache a shader with no name."))
if(a.fr.cg(0,x))H.q(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aR
z=b.e
if(!(z instanceof Z.dW)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ag()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.cd()
t.a.cd()
t=t.e
if(!(t==null))t.ao(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hs()
s=s.e
if(!(s==null))s.ao(0)}q=b.d.hr(new Z.ki(a.a),v)
q.aS($.$get$aU()).e=this.a.y.c
if(z)q.aS($.$get$aT()).e=this.a.Q.c
if(u)q.aS($.$get$aS()).e=this.a.z.c
if(w.rx)q.aS($.$get$aV()).e=this.a.ch.c
if(t)q.aS($.$get$aW()).e=this.a.cx.c
if(w.x1)q.aS($.$get$aR()).e=this.a.cy.c
b.e=q}z=T.dg
p=H.h([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hC()
if(w.fx){u=this.a
t=a.dx
t=t.gZ(t)
u=u.db
u.toString
u.ai(t.ac(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gZ(t)
s=a.dx
s=t.k(0,s.gZ(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ai(t.ac(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi4()
s=a.dx
s=t.k(0,s.gZ(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ai(t.ac(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ai(t.ac(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ai(t.ac(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ai(C.t.ac(t,!0))}if(w.aQ>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.e(s,"$isax")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bt(H.w(s.ac(0,!0),"$isc",u,"$asc")))
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
case C.e:this.V(p,this.f.d)
u=this.a
t=this.f.d
u.af(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.f.e)
u=this.a
t=this.f.e
u.a8(u.r2,u.rx,t)
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
case C.e:this.V(p,this.r.d)
u=this.a
t=this.r.d
u.af(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.r.e)
u=this.a
t=this.r.e
u.a8(u.x2,u.y1,t)
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
case C.e:this.V(p,this.x.d)
u=this.a
t=this.x.d
u.af(u.aQ,u.aR,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.x.e)
u=this.a
t=this.x.e
u.a8(u.ax,u.aR,t)
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
u=u.bs
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.V(p,this.y.d)
u=this.a
t=this.y.d
u.af(u.ds,u.bt,t)
t=this.a
u=this.y.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.y.e)
u=this.a
t=this.y.e
u.a8(u.dt,u.bt,t)
t=this.a
u=this.y.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bu
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bw
t.a.uniform1f(t.d,r)
break
case C.e:this.V(p,this.z.d)
u=this.a
t=this.z.d
u.af(u.du,u.bv,t)
t=this.a
u=this.z.f
t=t.bu
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bw
u.a.uniform1f(u.d,r)
break
case C.f:this.V(p,this.z.e)
u=this.a
t=this.z.e
u.a8(u.dv,u.bv,t)
t=this.a
u=this.z.f
t=t.bu
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bw
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dI
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
s=this.a.cm
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cJ(i.a)
r=s.a
g=s.b
f=s.c
f=s.p(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dJ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
s=this.a.cn
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcM(s)
r.a.uniform3f(r.d,g,f,s)
s=l.be(i.gb9(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gam(i)
f=h.d
g=s.gbI()
r=s.gbf()
s=s.gbq()
f.a.uniform3f(f.d,g,r,s)
s=i.gc7()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc8()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc9()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
s=this.a.co
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcM(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcl(i).j2()
f=h.c
g=s.gaN(s)
r=s.gaO(s)
s=s.gaP()
f.a.uniform3f(f.d,g,r,s)
s=l.be(i.gb9(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gam(i)
r=h.e
g=s.gbI()
f=s.gbf()
s=s.gbq()
r.a.uniform3f(r.d,g,f,s)
s=i.gj_()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giZ()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc8()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc9()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
r=this.a.cp
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gbb()
H.w(p,"$isc",s,"$asc")
if(!C.a.b3(p,r)){r.sbk(p.length)
C.a.h(p,r)}r=i.gcl(i)
g=h.d
f=r.gaN(r)
e=r.gaO(r)
r=r.gaP()
g.a.uniform3f(g.d,f,e,r)
r=i.gbL()
e=h.b
f=r.gaN(r)
g=r.gaO(r)
r=r.gaP()
e.a.uniform3f(e.d,f,g,r)
r=i.gba(i)
g=h.c
f=r.gaN(r)
e=r.gaO(r)
r=r.gaP()
g.a.uniform3f(g.d,f,e,r)
r=l.cJ(i.gcl(i))
e=r.a
f=r.b
g=r.c
g=r.p(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gam(i)
f=h.f
e=g.gbI()
r=g.gbf()
g=g.gbq()
f.a.uniform3f(f.d,e,r,g)
g=i.gbb()
r=g.gcv(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.geW()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbk())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
g=this.a.cq
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gbb()
H.w(p,"$isc",r,"$asc")
if(!C.a.b3(p,g)){g.sbk(p.length)
C.a.h(p,g)}d=l.k(0,i.gZ(i))
g=i.gZ(i).be(new V.U(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gcM(g)
f.a.uniform3f(f.d,e,c,g)
g=d.be(new V.U(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dZ(0)
c=h.d
m=new Float32Array(H.bt(H.w(new V.cu(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ac(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gam(i)
g=h.e
e=c.gbI()
f=c.gbf()
c=c.gbq()
g.a.uniform3f(g.d,e,f,c)
c=i.gbb()
g=c.gcv(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcv(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj0(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc7()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc8()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc9()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gbb()
H.w(p,"$isc",z,"$asc")
if(!C.a.b3(p,s)){s.sbk(p.length)
C.a.h(p,s)}s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcM(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcl(i)
f=h.c
g=s.gaN(s)
r=s.gaO(s)
s=s.gaP()
f.a.uniform3f(f.d,g,r,s)
s=i.gbL()
r=h.d
g=s.gaN(s)
f=s.gaO(s)
s=s.gaP()
r.a.uniform3f(r.d,g,f,s)
s=i.gba(i)
f=h.e
g=s.gaN(s)
r=s.gaO(s)
s=s.gaP()
f.a.uniform3f(f.d,g,r,s)
s=l.be(i.gb9(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbb()
r=s.gcv(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.geW()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbk())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gam(i)
r=h.y
g=s.gbI()
f=s.gbf()
s=s.gbq()
r.a.uniform3f(r.d,g,f,s)
s=i.gj8()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj9()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc8()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc9()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.af(z.dw,z.bx,u)
break
case C.f:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.a8(z.dz,z.bx,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gZ(u).dZ(0)
a.Q=u}z=z.fy
z.toString
z.ai(u.ac(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.a8(z.dA,z.dB,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.by
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.af(z.dC,z.bz,u)
u=this.a
z=this.cx.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.a8(z.dD,z.bz,u)
u=this.a
z=this.cx.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bB
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bA
u.a.uniform1f(u.d,s)
break
case C.e:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.af(z.dE,z.bC,u)
u=this.a
z=this.cy.f
u=u.bB
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bA
z.a.uniform1f(z.d,s)
break
case C.f:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.a8(z.dF,z.bC,u)
u=this.a
z=this.cy.f
u=u.bB
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bA
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bD
z.a.uniform1f(z.d,t)
break
case C.e:this.V(p,this.db.d)
z=this.a
t=this.db.d
z.af(z.dG,z.bE,t)
t=this.a
z=this.db.f
t=t.bD
t.a.uniform1f(t.d,z)
break
case C.f:this.V(p,this.db.e)
z=this.a
t=this.db.e
z.a8(z.dH,z.bE,t)
t=this.a
z=this.db.f
t=t.bD
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.ca(a)
z.aW(a)
z.io(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hA()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.d0().ax}},iq:{"^":"d5;0f,a,b,0c,0d,0e",
fH:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.Q(this.b,y,a,this,[P.t])
z.b=!0
this.a.a2(z)}},
b0:function(){this.cQ()
this.fH(1)}},d5:{"^":"b;",
a2:[function(a){this.a.a2(H.e(a,"$isv"))},function(){return this.a2(null)},"eD","$1","$0","gbi",0,2,1],
b0:["cQ",function(){}],
fM:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gbi(),{func:1,ret:-1,args:[D.v]})
C.a.I(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gbi(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q(this.b+".texture2D",x,this.d,this,[T.eH])
z.b=!0
this.a.a2(z)}},
fN:function(a){},
saY:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.b0()
this.c=C.e
this.fN(null)
z=this.a
z.a=null
z.a2(null)}this.fM(a)}},ir:{"^":"d5;a,b,0c,0d,0e"},bc:{"^":"d5;0f,a,b,0c,0d,0e",
fI:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.af])
y.b=!0
this.a.a2(y)}},
b0:["cR",function(){this.cQ()
this.fI(new V.af(1,1,1))}]},it:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
fK:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.a2(z)}},
b0:function(){this.cR()
this.fK(1)}},iu:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
fL:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.a2(z)}},
b0:function(){this.cR()
this.fL(100)}},df:{"^":"b;"}}],["","",,T,{"^":"",dg:{"^":"cP;"},eH:{"^":"dg;0b,0c,0d,0e,0f,0r,0x,0y,a"},jp:{"^":"b;a,0b,0c,0d,0e",
hP:function(a,b,c,d,e){var z,y,x,w
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
w=new T.eH(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.P()
z=W.ab
W.a2(x,"load",H.f(new T.jq(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
e1:function(a){return this.hP(a,!1,!1,!1,!1)},
fF:function(a,b,c){var z,y,x,w
b=V.dI(b,2)
z=V.dI(a.width,2)
y=V.dI(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cU(null,null)
x.width=z
x.height=y
w=H.e(C.k.el(x,"2d"),"$isdZ")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mq(w.getImageData(0,0,x.width,x.height))}}},jq:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fF(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.W.ii(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hB()}++x.e}}}],["","",,X,{"^":"",dY:{"^":"b;",$isaO:1},hQ:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},iF:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
b_:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.E(a)},function(){return this.b_(null)},"ir","$1","$0","gcT",0,2,1],
sb6:function(a){var z,y,x
if(!J.F(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.f(this.gcT(),{func:1,ret:-1,args:[D.v]})
C.a.I(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.f(this.gcT(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.a,this,[U.ah])
z.b=!0
this.b_(z)}},
$isaO:1,
$isdY:1},eF:{"^":"b;"}}],["","",,B,{"^":"",
n1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fJ(x,(x&&C.r).cW(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.ab
W.a2(z,"scroll",H.f(new B.n2(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
n3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.i],"$asc")
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
u=W.cU(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbO")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbO").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<1;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.e(q.insertCell(-1),"$isbO")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbO")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbO").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.n1(a,y,!1,"../resources/SnowTop.png")},
n4:function(a){P.jx(C.G,new B.n5(a))},
iT:{"^":"b;a,0b",
bo:function(a,b,c,d){var z,y,x,w,v,u,t
H.f(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dl().gbH().i(0,z)==null)if(d){c.$0()
this.eg(b)
y=!0}else y=!1
else if(P.dl().gbH().i(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dO(this.b).h(0,w)
u=W.hT("radio")
u.checked=y
u.name=z
z=W.ab
W.a2(u,"change",H.f(new B.iU(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dO(this.b).h(0,x.createElement("br"))},
al:function(a,b,c){return this.bo(a,b,c,!1)},
eg:function(a){var z,y,x,w,v
z=P.dl()
y=P.i
x=P.i8(z.gbH(),y,y)
x.l(0,this.a,a)
w=z.eb(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.ll([],[]).cK(""),"",v)}},
iU:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.eg(this.c)
this.d.$0()}}},
n2:{"^":"n:15;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.h.ab(this.b.scrollTop))+"px"
z.top=y}},
n5:{"^":"n:49;a",
$1:function(a){H.e(a,"$isbm")
P.dJ(C.h.ef(this.a.ghJ(),2)+" fps")}}}],["","",,M,{"^":"",
fY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
B.n3("Test 018",H.h(["shapes"],[P.i]),"A test of the Material Lighting shader where a diffuse textue and inverse diffuse texture are used. Grass is only shown in the dark. Dirt is shown where the directional light is shining.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.q(P.u("Failed to find an element with the identifier, threeDart."))
x=E.jv(y,!0,!0,!0,!1)
w=new E.b_()
w.a=""
w.b=!0
v=E.b_
u=O.cV(v)
w.y=u
u.bh(w.ghS(),w.ghU())
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
w.sa4(0,null)
w.sb6(null)
w.sa4(0,F.h2(8,null,8))
u=new U.ed()
t=U.ah
u.bQ(t)
u.bh(u.gf3(),u.gfp())
u.e=null
u.f=V.c9()
u.r=0
s=x.r
r=new U.jZ()
q=U.cW()
q.scL(0,!0)
q.scw(6.283185307179586)
q.scA(0)
q.sW(0,0)
q.scz(100)
q.sT(0)
q.sck(0.5)
r.b=q
q=q.gD()
q.toString
p={func:1,ret:-1,args:[D.v]}
o=H.f(r.gaI(),p)
C.a.h(q.a,o)
q=U.cW()
q.scL(0,!0)
q.scw(6.283185307179586)
q.scA(0)
q.sW(0,0)
q.scz(100)
q.sT(0)
q.sck(0.5)
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
n=new X.aE(!1,!1,!1)
m=r.d
r.d=n
q=[X.aE]
o=new D.Q("modifiers",m,n,r,q)
o.b=!0
r.R(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.Q("invertX",o,!1,r,[P.al])
o.b=!0
r.R(o)}o=r.r
if(o!==!1){r.r=!1
o=new D.Q("invertY",o,!1,r,[P.al])
o.b=!0
r.R(o)}r.b2(s)
u.h(0,r)
s=x.r
r=new U.jY()
o=U.cW()
o.scL(0,!0)
o.scw(6.283185307179586)
o.scA(0)
o.sW(0,0)
o.scz(100)
o.sT(0)
o.sck(0.2)
r.b=o
o=o.gD()
o.toString
l=H.f(r.gaI(),p)
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
n=new X.aE(!0,!1,!1)
m=r.c
r.c=n
o=new D.Q("modifiers",m,n,r,q)
o.b=!0
r.R(o)
r.b2(s)
u.h(0,r)
s=x.r
r=new U.k_()
r.c=0.01
r.d=0
r.e=0
n=new X.aE(!1,!1,!1)
r.b=n
q=new D.Q("modifiers",null,n,r,q)
q.b=!0
r.R(q)
r.b2(s)
u.h(0,r)
w.sb6(u)
k=x.f.e1("../resources/Dirt.png")
j=x.f.e1("../resources/Grass.png")
i=new O.im()
u=O.cV(V.ax)
i.e=u
u.bh(i.gf5(),i.gf6())
u=new O.bc(i,"emission")
u.c=C.c
u.f=new V.af(0,0,0)
i.f=u
u=new O.bc(i,"ambient")
u.c=C.c
u.f=new V.af(0,0,0)
i.r=u
u=new O.bc(i,"diffuse")
u.c=C.c
u.f=new V.af(0,0,0)
i.x=u
u=new O.bc(i,"invDiffuse")
u.c=C.c
u.f=new V.af(0,0,0)
i.y=u
u=new O.iu(i,"specular")
u.c=C.c
u.f=new V.af(0,0,0)
u.ch=100
i.z=u
u=new O.ir(i,"bump")
u.c=C.c
i.Q=u
i.ch=null
u=new O.bc(i,"reflect")
u.c=C.c
u.f=new V.af(0,0,0)
i.cx=u
u=new O.it(i,"refract")
u.c=C.c
u.f=new V.af(0,0,0)
u.ch=1
i.cy=u
u=new O.iq(i,"alpha")
u.c=C.c
u.f=1
i.db=u
u=new D.i1()
u.bQ(D.a4)
u.e=H.h([],[D.cm])
u.f=H.h([],[D.iH])
u.r=H.h([],[D.jg])
u.x=H.h([],[D.jr])
u.y=H.h([],[D.js])
u.z=H.h([],[D.jt])
u.Q=null
u.ch=null
u.cO(u.gf4(),u.gfo(),u.gfq())
i.dx=u
s=u.Q
if(s==null){s=D.P()
u.Q=s
u=s}else u=s
s=H.f(i.gfD(),p)
C.a.h(u.a,s)
s=i.dx
u=s.ch
if(u==null){u=D.P()
s.ch=u}s=H.f(i.gbi(),p)
C.a.h(u.a,s)
i.dy=null
s=i.dx
u=U.e2(V.ep(new V.U(0,0,0),new V.A(0,1,0),new V.A(-1,-1,-1)))
h=new V.af(1,1,1)
r=new D.cm()
r.c=new V.af(1,1,1)
r.a=new V.A(0,0,1)
m=r.b
r.b=u
u=u.gD()
u.toString
q=H.f(r.geC(),p)
C.a.h(u.a,q)
u=new D.Q("mover",m,r.b,r,[t])
u.b=!0
r.aD(u)
if(!r.c.v(0,h)){m=r.c
r.c=h
u=new D.Q("color",m,h,r,[V.af])
u.b=!0
r.aD(u)}s.h(0,r)
i.x.saY(k)
i.y.saY(j)
u=new M.hI()
v=O.cV(v)
u.d=v
v.bh(u.gf8(),u.gf9())
u.e=null
u.f=null
u.r=null
u.x=null
g=new X.iF()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.sb6(null)
v=g.b
if(!$.p.$2(v,1.0471975511965976)){m=g.b
g.b=1.0471975511965976
v=new D.Q("fov",m,1.0471975511965976,g,[P.t])
v.b=!0
g.b_(v)}v=g.c
if(!$.p.$2(v,0.1)){m=g.c
g.c=0.1
v=new D.Q("near",m,0.1,g,[P.t])
v.b=!0
g.b_(v)}v=g.d
if(!$.p.$2(v,2000)){m=g.d
g.d=2000
v=new D.Q("far",m,2000,g,[P.t])
v.b=!0
g.b_(v)}v=u.a
if(v!==g){if(v!=null){v=v.gD()
v.toString
t=H.f(u.gaj(),p)
C.a.I(v.a,t)}m=u.a
u.a=g
v=g.gD()
v.toString
t=H.f(u.gaj(),p)
C.a.h(v.a,t)
v=new D.Q("camera",m,u.a,u,[X.dY])
v.b=!0
u.aE(v)}f=new X.hQ()
v=new V.aM(0,0,0,1)
f.a=v
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
v=V.ey(0,0,1,1)
f.r=v
v=u.b
if(v!==f){if(v!=null){v=v.gD()
v.toString
t=H.f(u.gaj(),p)
C.a.I(v.a,t)}m=u.b
u.b=f
v=f.gD()
v.toString
t=H.f(u.gaj(),p)
C.a.h(v.a,t)
v=new D.Q("target",m,u.b,u,[X.eF])
v.b=!0
u.aE(v)}u.sed(null)
u.sed(i)
u.d.h(0,w)
u.a.sb6(U.e2(V.aD(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
v=x.d
if(v!==u){if(v!=null){v=v.gD()
v.toString
t=H.f(x.gcS(),p)
C.a.I(v.a,t)}x.d=u
v=u.gD()
v.toString
p=H.f(x.gcS(),p)
C.a.h(v.a,p)
x.eA()}v=new B.iT("shapes")
z=z.getElementById("shapes")
v.b=z
if(z==null)H.q("Failed to find "+v.j(0)+"._elemId for RadioGroup")
v.al(0,"Cube",new M.mO(w))
v.al(0,"Cuboid",new M.mP(w))
v.al(0,"Cylinder",new M.mQ(w))
v.al(0,"Cone",new M.mR(w))
v.al(0,"LatLonSphere",new M.mS(w))
v.al(0,"IsoSphere",new M.mT(w))
v.bo(0,"Sphere",new M.mU(w),!0)
v.al(0,"Toroid",new M.mV(w))
v.al(0,"Knot",new M.mW(w))
B.n4(x)},
mO:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dB(1,null,null,1))}},
mP:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dB(8,null,null,8))}},
mQ:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.fM(1,!0,!0,1,40,1))}},
mR:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.fM(1,!0,!1,1,40,0))}},
mS:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.mL(10,20))}},
mT:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cy()
y=Math.sqrt(5)/2+0.5
x=F.ae(z,new V.A(-1,y,0))
w=F.ae(z,new V.A(1,y,0))
v=-y
u=F.ae(z,new V.A(-1,v,0))
t=F.ae(z,new V.A(1,v,0))
s=F.ae(z,new V.A(0,-1,v))
r=F.ae(z,new V.A(0,1,v))
q=F.ae(z,new V.A(0,-1,y))
p=F.ae(z,new V.A(0,1,y))
o=F.ae(z,new V.A(y,0,1))
n=F.ae(z,new V.A(y,0,-1))
m=F.ae(z,new V.A(v,0,1))
l=F.ae(z,new V.A(v,0,-1))
F.Y(z,x,l,r,2)
F.Y(z,x,r,w,2)
F.Y(z,x,w,p,2)
F.Y(z,x,p,m,2)
F.Y(z,x,m,l,2)
F.Y(z,w,r,n,2)
F.Y(z,r,l,s,2)
F.Y(z,l,m,u,2)
F.Y(z,m,p,q,2)
F.Y(z,p,w,o,2)
F.Y(z,t,n,s,2)
F.Y(z,t,s,u,2)
F.Y(z,t,u,q,2)
F.Y(z,t,q,o,2)
F.Y(z,t,o,n,2)
F.Y(z,s,n,r,2)
F.Y(z,u,s,l,2)
F.Y(z,q,u,m,2)
F.Y(z,o,q,p,2)
F.Y(z,n,o,w,2)
z.e2(new F.dn(),new F.kc())
this.a.sa4(0,z)}},
mU:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.h2(6,null,6))}},
mV:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.na(30,1,15,0.5))}},
mW:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.mJ(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ei.prototype
return J.eh.prototype}if(typeof a=="string")return J.c7.prototype
if(a==null)return J.ej.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.at=function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.cf=function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.fQ=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cd.prototype
return a}
J.fR=function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cd.prototype
return a}
J.dE=function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cd.prototype
return a}
J.aZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).v(a,b)}
J.aA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fQ(a).ad(a,b)}
J.h4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fQ(a).K(a,b)}
J.dL=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fR(a).k(a,b)}
J.dM=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).i(a,b)}
J.cM=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fV(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cf(a).l(a,b,c)}
J.h5=function(a,b){return J.dE(a).G(a,b)}
J.h6=function(a,b,c){return J.aZ(a).fA(a,b,c)}
J.h7=function(a,b,c,d){return J.aZ(a).di(a,b,c,d)}
J.h8=function(a,b){return J.dE(a).X(a,b)}
J.h9=function(a,b){return J.fR(a).aM(a,b)}
J.cN=function(a,b,c){return J.at(a).hu(a,b,c)}
J.cO=function(a,b){return J.cf(a).J(a,b)}
J.ha=function(a,b,c,d){return J.cf(a).ay(a,b,c,d)}
J.dN=function(a,b){return J.cf(a).M(a,b)}
J.dO=function(a){return J.aZ(a).gcf(a)}
J.b5=function(a){return J.I(a).gS(a)}
J.bB=function(a){return J.cf(a).ga_(a)}
J.am=function(a){return J.at(a).gm(a)}
J.hb=function(a,b){return J.aZ(a).ia(a,b)}
J.hc=function(a,b){return J.aZ(a).sa0(a,b)}
J.aa=function(a){return J.I(a).j(a)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cT.prototype
C.r=W.hv.prototype
C.H=J.r.prototype
C.a=J.bb.prototype
C.I=J.eh.prototype
C.d=J.ei.prototype
C.t=J.ej.prototype
C.h=J.c6.prototype
C.b=J.c7.prototype
C.P=J.c8.prototype
C.U=H.da.prototype
C.V=W.iB.prototype
C.z=J.iG.prototype
C.W=P.dc.prototype
C.q=J.cd.prototype
C.A=W.bT.prototype
C.B=W.kl.prototype
C.D=new P.hh(!1)
C.C=new P.hg(C.D)
C.E=new P.iE()
C.F=new P.k7()
C.j=new P.l7()
C.c=new A.ck(0,"ColorSourceType.None")
C.i=new A.ck(1,"ColorSourceType.Solid")
C.e=new A.ck(2,"ColorSourceType.Texture2D")
C.f=new A.ck(3,"ColorSourceType.TextureCube")
C.G=new P.aN(5e6)
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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

C.L=function(getTagFallback) {
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
C.M=function() {
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
C.N=function(hooks) {
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
C.O=function(hooks) {
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
C.w=H.h(I.av([127,2047,65535,1114111]),[P.m])
C.m=H.h(I.av([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.h(I.av([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.h(I.av([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.h(I.av([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.p=H.h(I.av([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.h(I.av([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.h(I.av([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.h(I.av([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.h(I.av([]),[P.i])
C.T=new H.hu(0,{},C.Q,[P.i,P.i])
C.l=new P.k0(!1)
$.aC=0
$.bC=null
$.dT=null
$.dw=!1
$.fT=null
$.fI=null
$.h1=null
$.cG=null
$.cJ=null
$.dF=null
$.bu=null
$.bZ=null
$.c_=null
$.dx=!1
$.X=C.j
$.e8=null
$.e7=null
$.e6=null
$.e5=null
$.p=V.iv()
$.eu=null
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
I.$lazy(y,x,w)}})(["e4","$get$e4",function(){return H.fS("_$dart_dartClosure")},"d0","$get$d0",function(){return H.fS("_$dart_js")},"eL","$get$eL",function(){return H.aG(H.cz({
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aG(H.cz({$method$:null,
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.aG(H.cz(null))},"eO","$get$eO",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aG(H.cz(void 0))},"eT","$get$eT",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aG(H.eR(null))},"eP","$get$eP",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aG(H.eR(void 0))},"eU","$get$eU",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dq","$get$dq",function(){return P.km()},"c0","$get$c0",function(){return[]},"f5","$get$f5",function(){return P.k4()},"fc","$get$fc",function(){return H.iz(H.bt(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fy","$get$fy",function(){return P.iZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m6()},"e3","$get$e3",function(){return{}},"f9","$get$f9",function(){return Z.as(0)},"f7","$get$f7",function(){return Z.as(511)},"aU","$get$aU",function(){return Z.as(1)},"aT","$get$aT",function(){return Z.as(2)},"aS","$get$aS",function(){return Z.as(4)},"aV","$get$aV",function(){return Z.as(8)},"aW","$get$aW",function(){return Z.as(16)},"bR","$get$bR",function(){return Z.as(32)},"bS","$get$bS",function(){return Z.as(64)},"f8","$get$f8",function(){return Z.as(96)},"br","$get$br",function(){return Z.as(128)},"aR","$get$aR",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.H,args:[F.ad,P.t,P.t]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.k,E.b_]]},{func:1,ret:P.H,args:[F.ao]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.v]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.t},{func:1,ret:P.H,args:[W.ab]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[P.m,[P.k,V.ax]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:-1,args:[P.m,[P.k,D.a4]]},{func:1,ret:-1,args:[P.m,[P.k,U.ah]]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:V.U,args:[P.t]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:-1,args:[P.b],opt:[P.ay]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.aX,,],args:[,]},{func:1,ret:P.H,args:[P.V]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.al,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bT]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.al,args:[[P.k,D.a4]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:P.al,args:[W.L]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.H,args:[P.bm]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.n9(d||a)
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
Isolate.av=a.av
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fY,[])
else M.fY([])})})()
//# sourceMappingURL=test.dart.js.map
