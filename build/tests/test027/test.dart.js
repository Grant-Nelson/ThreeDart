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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d9(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.da=function(){}
var dart=[["","",,H,{"^":"",lI:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
df:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cn:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dd==null){H.kw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.ew("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.kB(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
u:function(a,b){return a===b},
gS:function(a){return H.bm(a)},
j:["dT",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fW:{"^":"n;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isai:1},
dL:{"^":"n;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isI:1},
cH:{"^":"n;",
gS:function(a){return 0},
j:["dU",function(a){return String(a)}]},
hx:{"^":"cH;"},
cg:{"^":"cH;"},
bN:{"^":"cH;",
j:function(a){var z=a[$.$get$dv()]
if(z==null)return this.dU(a)
return"JavaScript function for "+H.j(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscD:1},
bL:{"^":"n;$ti",
h:function(a,b){H.E(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ab("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.r(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bO:function(a,b){var z,y
H.w(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ab("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.k(P.b8(a))}},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a5(z,y,H.j(a[y]))
return z.join(b)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
gc6:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.k(H.fU())},
aU:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
j:function(a){return P.cE(a,"[","]")},
gX:function(a){return new J.ak(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bm(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.c0(b,"newLength",null))
if(b<0)throw H.k(P.bn(b,0,null,"newLength",null))
a.length=b},
a5:function(a,b,c){H.Z(b)
H.E(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.bU(a,b))
if(b>=a.length||b<0)throw H.k(H.bU(a,b))
a[b]=c},
$ise:1,
$isc:1,
t:{
fV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.c0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.bn(a,0,4294967295,"length",null))
return J.dI(new Array(a),b)},
dI:function(a,b){return J.bg(H.f(a,[b]))},
bg:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
lH:{"^":"bL;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bM:{"^":"n;",
gfY:function(a){return a===0?1/a<0:a<0},
hr:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.k(P.ab(""+a+".toInt()"))},
c4:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.k(P.ab(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.ab(""+a+".round()"))},
dH:function(a,b){var z
if(b>20)throw H.k(P.bn(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfY(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.k(H.bT(b))
return a*b},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cS(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cS(a,b)},
cS:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.ab("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
cQ:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
af:function(a,b){if(typeof b!=="number")throw H.k(H.bT(b))
return a<b},
$ist:1,
$isT:1},
dK:{"^":"bM;",$isL:1},
dJ:{"^":"bM;"},
ca:{"^":"n;",
ec:function(a,b){if(b>=a.length)throw H.k(H.bU(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.U(b)
if(typeof b!=="string")throw H.k(P.c0(b,null,null))
return a+b},
cp:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b>c)throw H.k(P.cS(b,null,null))
if(c>a.length)throw H.k(P.cS(c,null,null))
return a.substring(b,c)},
co:function(a,b){return this.cp(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h7:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
a8:function(a,b){return this.h7(a,b," ")},
fN:function(a,b,c){if(c>a.length)throw H.k(P.bn(c,0,a.length,null,null))
return H.kN(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishv:1,
$iso:1}}],["","",,H,{"^":"",
fU:function(){return new P.i_("No element")},
fG:{"^":"e;"},
h6:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.bW(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.b8(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hc:{"^":"e;a,b,$ti",
gX:function(a){return new H.hd(J.c_(this.a),this.b,this.$ti)},
gl:function(a){return J.b6(this.a)},
E:function(a,b){return this.b.$1(J.di(this.a,b))},
$ase:function(a,b){return[b]}},
hd:{"^":"cF;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascF:function(a,b){return[b]}},
iM:{"^":"e;a,b,$ti",
gX:function(a){return new H.iN(J.c_(this.a),this.b,this.$ti)}},
iN:{"^":"cF;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c7:{"^":"a;$ti"}}],["","",,H,{"^":"",
kr:function(a){return init.types[H.Z(a)]},
kz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a5(a)
if(typeof z!=="string")throw H.k(H.bT(a))
return z},
bm:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.J(a).$iscg){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ec(w,0)===36)w=C.i.co(w,1)
r=H.de(H.bY(H.aM(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hF:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hD:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hz:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hA:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hC:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hE:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hB:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
p:function(a){throw H.k(H.bT(a))},
i:function(a,b){if(a==null)J.b6(a)
throw H.k(H.bU(a,b))},
bU:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.Z(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cS(b,"index",null)},
bT:function(a){return new P.aI(!0,a,null,null)},
kg:function(a){if(typeof a!=="number")throw H.k(H.bT(a))
return a},
k:function(a){var z
if(a==null)a=new P.dZ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fb})
z.name=""}else z.toString=H.fb
return z},
fb:function(){return J.a5(this.dartException)},
r:function(a){throw H.k(a)},
y:function(a){throw H.k(P.b8(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cQ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cJ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dY(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ef()
u=$.$get$eg()
t=$.$get$eh()
s=$.$get$ei()
r=$.$get$em()
q=$.$get$en()
p=$.$get$ek()
$.$get$ej()
o=$.$get$ep()
n=$.$get$eo()
m=v.a7(y)
if(m!=null)return z.$1(H.cJ(H.U(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cJ(H.U(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dY(H.U(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e5()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e5()
return a},
b4:function(a){var z
if(a==null)return new H.eO(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eO(a)},
ko:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a5(0,a[y],a[x])}return b},
ky:function(a,b,c,d,e,f){H.h(a,"$iscD")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.q("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ky)
a.$identity=z
return z},
fr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.hH(z).r}else x=d
w=e?Object.create(new H.i0().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ao
if(typeof u!=="number")return u.D()
$.ao=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ds(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kr,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dm:H.cu
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ds(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fo:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ds:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fo(y,!w,z,b)
if(y===0){w=$.ao
if(typeof w!=="number")return w.D()
$.ao=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.c1("self")
$.b7=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ao
if(typeof w!=="number")return w.D()
$.ao=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.c1("self")
$.b7=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fp:function(a,b,c,d){var z,y
z=H.cu
y=H.dm
switch(b?-1:a){case 0:throw H.k(H.hP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fq:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.c1("self")
$.b7=z}y=$.dl
if(y==null){y=H.c1("receiver")
$.dl=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ao
if(typeof y!=="number")return y.D()
$.ao=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ao
if(typeof y!=="number")return y.D()
$.ao=y+1
return new Function(z+y+"}")()},
d9:function(a,b,c,d,e,f,g){var z,y
z=J.bg(H.bY(b))
H.Z(c)
y=!!J.J(d).$isc?J.bg(d):d
return H.fr(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.ax(a,"String"))},
kE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ax(a,"num"))},
f0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.ax(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.ax(a,"int"))},
f8:function(a,b){throw H.k(H.ax(a,H.U(b).substring(3)))},
kG:function(a,b){var z=J.bW(b)
throw H.k(H.fn(a,z.cp(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.f8(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kG(a,b)},
bY:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.k(H.ax(a,"List"))},
kA:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.f8(a,b)},
f1:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bV:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f1(J.J(a))
if(z==null)return!1
y=H.f4(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d5)return a
$.d5=!0
try{if(H.bV(a,b))return a
z=H.bZ(b)
y=H.ax(a,z)
throw H.k(y)}finally{$.d5=!1}},
db:function(a,b){if(a!=null&&!H.d8(a,b))H.r(H.ax(a,H.bZ(b)))
return a},
eW:function(a){var z
if(a instanceof H.u){z=H.f1(J.J(a))
if(z!=null)return H.bZ(z)
return"Closure"}return H.aU(a)},
kO:function(a){throw H.k(new P.fy(H.U(a)))},
f2:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aM:function(a){if(a==null)return
return a.$ti},
mF:function(a,b,c){return H.b5(a["$as"+H.j(c)],H.aM(b))},
bG:function(a,b,c,d){var z
H.U(c)
H.Z(d)
z=H.b5(a["$as"+H.j(c)],H.aM(b))
return z==null?null:z[d]},
aL:function(a,b,c){var z
H.U(b)
H.Z(c)
z=H.b5(a["$as"+H.j(b)],H.aM(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aM(a)
return z==null?null:z[b]},
bZ:function(a){var z=H.aN(a,null)
return z},
aN:function(a,b){var z,y
H.w(b,"$isc",[P.o],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.de(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.k6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aN(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aN(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aN(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aN(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
de:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.o],"$asc")
if(a==null)return""
z=new P.bQ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aN(u,c)}v="<"+z.j(0)+">"
return v},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aM(a)
y=J.J(a)
if(y[b]==null)return!1
return H.eZ(H.b5(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.U(b)
H.bY(c)
H.U(d)
if(a==null)return a
z=H.b1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.de(c,0,null)
throw H.k(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eZ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
mD:function(a,b,c){return a.apply(b,H.b5(J.J(b)["$as"+H.j(c)],H.aM(b)))},
f5:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.f5(z)}return!1},
d8:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.f5(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bV(a,b)}y=J.J(a).constructor
x=H.aM(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aj(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.d8(a,b))throw H.k(H.ax(a,H.bZ(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.f4(a,b,c,d)
if('func' in a)return c.builtin$cls==="cD"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bd" in y.prototype))return!1
w=y.prototype["$as"+"bd"]
v=H.b5(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bZ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eZ(H.b5(r,z),b,u,d)},
f4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kD(m,b,l,d)},
kD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
mE:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
kB:function(a){var z,y,x,w,v,u
z=H.U($.f3.$1(a))
y=$.cm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.eY.$2(a,z))
if(z!=null){y=$.cm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cp(x)
$.cm[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.co[z]=x
return x}if(v==="-"){u=H.cp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f7(a,x)
if(v==="*")throw H.k(P.ew(z))
if(init.leafTags[z]===true){u=H.cp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f7(a,x)},
f7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.df(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cp:function(a){return J.df(a,!1,null,!!a.$isB)},
kC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cp(z)
else return J.df(z,c,null,null)},
kw:function(){if(!0===$.dd)return
$.dd=!0
H.kx()},
kx:function(){var z,y,x,w,v,u,t,s
$.cm=Object.create(null)
$.co=Object.create(null)
H.ks()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f9.$1(v)
if(u!=null){t=H.kC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ks:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b0(C.z,H.b0(C.E,H.b0(C.n,H.b0(C.n,H.b0(C.D,H.b0(C.A,H.b0(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f3=new H.kt(v)
$.eY=new H.ku(u)
$.f9=new H.kv(t)},
b0:function(a,b){return a(b)||b},
kN:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hG:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hH:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bg(z)
y=z[0]
x=z[1]
return new H.hG(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
aw:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
el:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ht:{"^":"a_;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dY:function(a,b){return new H.ht(a,b==null?null:b.method)}}},
fX:{"^":"a_;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
cJ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fX(a,y,z?null:b.receiver)}}},
iv:{"^":"a_;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kR:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eO:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isam:1},
u:{"^":"a;",
j:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gdK:function(){return this},
$iscD:1,
gdK:function(){return this}},
e8:{"^":"u;"},
i0:{"^":"e8;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ct:{"^":"e8;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bm(this.a)
else y=typeof z!=="object"?J.aH(z):H.bm(z)
return(y^H.bm(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
t:{
cu:function(a){return a.a},
dm:function(a){return a.c},
c1:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.bg(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"a_;a",
j:function(a){return this.a},
t:{
ax:function(a,b){return new H.ii("TypeError: "+H.j(P.c6(a))+": type '"+H.eW(a)+"' is not a subtype of type '"+b+"'")}}},
fm:{"^":"a_;a",
j:function(a){return this.a},
t:{
fn:function(a,b){return new H.fm("CastError: "+H.j(P.c6(a))+": type '"+H.eW(a)+"' is not a subtype of type '"+b+"'")}}},
hO:{"^":"a_;a",
j:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
hP:function(a){return new H.hO(a)}}},
cI:{"^":"ha;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gau:function(a){return new H.h1(this,[H.z(this,0)])},
fO:function(a,b){var z=this.b
if(z==null)return!1
return this.ef(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b7(w,b)
x=y==null?null:y.b
return x}else return this.fX(b)},
fX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cH(z,J.aH(a)&0x3ffffff)
x=this.dt(y,a)
if(x<0)return
return y[x].b},
a5:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bF()
this.b=z}this.cu(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bF()
this.c=y}this.cu(y,b,c)}else{x=this.d
if(x==null){x=this.bF()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cH(x,w)
if(v==null)this.bM(x,w,[this.bG(b,c)])
else{u=this.dt(v,b)
if(u>=0)v[u].b=c
else v.push(this.bG(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.b8(this))
z=z.c}},
cu:function(a,b,c){var z
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
z=this.b7(a,b)
if(z==null)this.bM(a,b,this.bG(b,c))
else z.b=c},
eo:function(){this.r=this.r+1&67108863},
bG:function(a,b){var z,y
z=new H.h0(H.E(a,H.z(this,0)),H.E(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eo()
return z},
dt:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
j:function(a){return P.dQ(this)},
b7:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
ef:function(a,b){return this.b7(a,b)!=null},
bF:function(){var z=Object.create(null)
this.bM(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdO:1},
h0:{"^":"a;a,b,0c,0d"},
h1:{"^":"fG;a,$ti",
gl:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.h2(z,z.r,this.$ti)
y.c=z.e
return y}},
h2:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kt:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
ku:{"^":"u:27;a",
$2:function(a,b){return this.a(a,b)}},
kv:{"^":"u:28;a",
$1:function(a){return this.a(H.U(a))}}}],["","",,H,{"^":"",
kn:function(a){return J.dI(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bC:function(a){return a},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.bU(b,a))},
hq:{"^":"n;",$ismm:1,"%":"DataView;ArrayBufferView;cP|eI|eJ|hp|eK|eL|aJ"},
cP:{"^":"hq;",
gl:function(a){return a.length},
$isB:1,
$asB:I.da},
hp:{"^":"eJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
$asc7:function(){return[P.t]},
$asv:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aJ:{"^":"eL;",
$asc7:function(){return[P.L]},
$asv:function(){return[P.L]},
$ise:1,
$ase:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}},
lS:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lT:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lU:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lV:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lW:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lX:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lY:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eI:{"^":"cP+v;"},
eJ:{"^":"eI+c7;"},
eK:{"^":"cP+v;"},
eL:{"^":"eK+c7;"}}],["","",,P,{"^":"",
iP:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kd()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.iR(z),1)).observe(y,{childList:true})
return new P.iQ(z,y,x)}else if(self.setImmediate!=null)return P.ke()
return P.kf()},
ms:[function(a){self.scheduleImmediate(H.b2(new P.iS(H.b(a,{func:1,ret:-1})),0))},"$1","kd",4,0,11],
mt:[function(a){self.setImmediate(H.b2(new P.iT(H.b(a,{func:1,ret:-1})),0))},"$1","ke",4,0,11],
mu:[function(a){H.b(a,{func:1,ret:-1})
P.jN(0,a)},"$1","kf",4,0,11],
ed:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aV]})
z=C.f.a1(a.a,1000)
return P.jO(z<0?0:z,b)},
k9:function(a,b){if(H.bV(a,{func:1,args:[P.a,P.am]}))return b.hg(a,null,P.a,P.am)
if(H.bV(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.k(P.c0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k8:function(){var z,y
for(;z=$.b_,z!=null;){$.bE=null
y=z.b
$.b_=y
if(y==null)$.bD=null
z.a.$0()}},
mC:[function(){$.d6=!0
try{P.k8()}finally{$.bE=null
$.d6=!1
if($.b_!=null)$.$get$d2().$1(P.f_())}},"$0","f_",0,0,3],
eV:function(a){var z=new P.eC(H.b(a,{func:1,ret:-1}))
if($.b_==null){$.bD=z
$.b_=z
if(!$.d6)$.$get$d2().$1(P.f_())}else{$.bD.b=z
$.bD=z}},
kc:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.eV(a)
$.bE=$.bD
return}y=new P.eC(a)
x=$.bE
if(x==null){y.b=z
$.bE=y
$.b_=y}else{y.b=x.b
x.b=y
$.bE=y
if(y.b==null)$.bD=y}},
kH:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.j===y){P.cl(null,null,C.j,a)
return}y.toString
P.cl(null,null,y,H.b(y.cW(a),z))},
ie:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aV]}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.ed(a,b)}x=y.cX(b,P.aV)
$.P.toString
return P.ed(a,H.b(x,z))},
ck:function(a,b,c,d,e){var z={}
z.a=d
P.kc(new P.ka(z,e))},
eT:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eU:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kb:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cl:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cW(d):c.fK(d,-1)
P.eV(d)},
iR:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iQ:{"^":"u:24;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iS:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iT:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eR:{"^":"a;a,0b,c",
e3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jQ(this,b),0),a)
else throw H.k(P.ab("`setTimeout()` not found."))},
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.jP(this,a,Date.now(),b),0),a)
else throw H.k(P.ab("Periodic timer."))},
$isaV:1,
t:{
jN:function(a,b){var z=new P.eR(!0,0)
z.e3(a,b)
return z},
jO:function(a,b){var z=new P.eR(!1,0)
z.e4(a,b)
return z}}},
jQ:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jP:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dW(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
h1:function(a){if(this.c!==6)return!0
return this.b.b.ci(H.b(this.d,{func:1,ret:P.ai,args:[P.a]}),a.a,P.ai,P.a)},
fW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bV(z,{func:1,args:[P.a,P.am]}))return H.db(w.hl(z,a.a,a.b,null,y,P.am),x)
else return H.db(w.ci(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;cR:a<,b,0f1:c<,$ti",
dG:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k9(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.P,[c])
w=b==null?1:3
this.cv(new P.aZ(x,w,a,b,[z,c]))
return x},
hq:function(a,b){return this.dG(a,null,b)},
cv:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaF")
z=y.a
if(z<4){y.cv(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cl(null,null,z,H.b(new P.j6(this,a),{func:1,ret:-1}))}},
cM:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaF")
y=u.a
if(y<4){u.cM(a)
return}this.a=y
this.c=u.c}z.a=this.b8(a)
y=this.b
y.toString
P.cl(null,null,y,H.b(new P.jb(z,this),{func:1,ret:-1}))}},
bI:function(){var z=H.h(this.c,"$isaZ")
this.c=null
return this.b8(z)},
b8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cB:function(a){var z,y,x,w
z=H.z(this,0)
H.db(a,{futureOr:1,type:z})
y=this.$ti
x=H.b1(a,"$isbd",y,"$asbd")
if(x){z=H.b1(a,"$isaF",y,null)
if(z)P.eE(a,this)
else P.j7(a,this)}else{w=this.bI()
H.E(a,z)
this.a=4
this.c=a
P.bz(this,w)}},
bx:[function(a,b){var z
H.h(b,"$isam")
z=this.bI()
this.a=8
this.c=new P.ac(a,b)
P.bz(this,z)},function(a){return this.bx(a,null)},"hx","$2","$1","ged",4,2,31],
$isbd:1,
t:{
j7:function(a,b){var z,y,x
b.a=1
try{a.dG(new P.j8(b),new P.j9(b),null)}catch(x){z=H.aO(x)
y=H.b4(x)
P.kH(new P.ja(b,z,y))}},
eE:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaF")
if(z>=4){y=b.bI()
b.a=a.a
b.c=a.c
P.bz(b,y)}else{y=H.h(b.c,"$isaZ")
b.a=2
b.c=a
a.cM(y)}},
bz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.ck(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bz(z.a,b)}y=z.a
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
if(p){H.h(r,"$isac")
y=y.b
u=r.a
t=r.b
y.toString
P.ck(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.je(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jd(x,b,r).$0()}else if((y&2)!==0)new P.jc(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.J(y).$isbd){if(y.a>=4){n=H.h(t.c,"$isaZ")
t.c=null
b=t.b8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eE(y,t)
return}}m=b.b
n=H.h(m.c,"$isaZ")
m.c=null
b=m.b8(n)
y=x.a
u=x.b
if(!y){H.E(u,H.z(m,0))
m.a=4
m.c=u}else{H.h(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
j6:{"^":"u:2;a,b",
$0:function(){P.bz(this.a,this.b)}},
jb:{"^":"u:2;a,b",
$0:function(){P.bz(this.b,this.a.a)}},
j8:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cB(a)}},
j9:{"^":"u:35;a",
$2:function(a,b){this.a.bx(a,H.h(b,"$isam"))},
$1:function(a){return this.$2(a,null)}},
ja:{"^":"u:2;a,b,c",
$0:function(){this.a.bx(this.b,this.c)}},
je:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dE(H.b(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b4(v)
if(this.d){w=H.h(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.J(z).$isbd){if(z instanceof P.aF&&z.gcR()>=4){if(z.gcR()===8){w=this.b
w.b=H.h(z.gf1(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hq(new P.jf(t),null)
w.a=!1}}},
jf:{"^":"u:37;a",
$1:function(a){return this.a}},
jd:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.E(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ci(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b4(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
jc:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isac")
w=this.c
if(w.h1(z)&&w.e!=null){v=this.b
v.b=w.fW(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b4(u)
w=H.h(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
eC:{"^":"a;a,0b"},
cY:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aF(0,$.P,[P.L])
z.a=0
this.h0(new P.i2(z,this),!0,new P.i3(z,y),y.ged())
return y}},
i2:{"^":"u;a,b",
$1:function(a){H.E(a,H.aL(this.b,"cY",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aL(this.b,"cY",0)]}}},
i3:{"^":"u:2;a,b",
$0:function(){this.b.cB(this.a.a)}},
e6:{"^":"a;$ti"},
aV:{"^":"a;"},
ac:{"^":"a;a,b",
j:function(a){return H.j(this.a)},
$isa_:1},
jV:{"^":"a;",$ismr:1},
ka:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dZ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.j(0)
throw x}},
jz:{"^":"jV;",
hm:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.eT(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b4(x)
P.ck(null,null,this,z,H.h(y,"$isam"))}},
hn:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.eU(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b4(x)
P.ck(null,null,this,z,H.h(y,"$isam"))}},
fK:function(a,b){return new P.jB(this,H.b(a,{func:1,ret:b}),b)},
cW:function(a){return new P.jA(this,H.b(a,{func:1,ret:-1}))},
cX:function(a,b){return new P.jC(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dE:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.eT(null,null,this,a,b)},
ci:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.P===C.j)return a.$1(b)
return P.eU(null,null,this,a,b,c,d)},
hl:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kb(null,null,this,a,b,c,d,e,f)},
hg:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jB:{"^":"u;a,b,c",
$0:function(){return this.a.dE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jA:{"^":"u:3;a,b",
$0:function(){return this.a.hm(this.b)}},
jC:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hn(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h4:function(a,b,c){H.bY(a)
return H.w(H.ko(a,new H.cI(0,0,[b,c])),"$isdO",[b,c],"$asdO")},
h3:function(a,b){return new H.cI(0,0,[a,b])},
h5:function(a,b,c,d){return new P.jl(0,0,[d])},
fT:function(a,b,c){var z,y
if(P.d7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bF()
C.a.h(y,a)
try{P.k7(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e7(b,H.kA(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cE:function(a,b,c){var z,y,x
if(P.d7(a))return b+"..."+c
z=new P.bQ(b)
y=$.$get$bF()
C.a.h(y,a)
try{x=z
x.a=P.e7(x.gaA(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaA()+c
y=z.gaA()
return y.charCodeAt(0)==0?y:y},
d7:function(a){var z,y
for(z=0;y=$.$get$bF(),z<y.length;++z)if(a===y[z])return!0
return!1},
k7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.G();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dQ:function(a){var z,y,x
z={}
if(P.d7(a))return"{...}"
y=new P.bQ("")
try{C.a.h($.$get$bF(),a)
x=y
x.a=x.gaA()+"{"
z.a=!0
J.ff(a,new P.hb(z,y))
z=y
z.a=z.gaA()+"}"}finally{z=$.$get$bF()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaA()
return z.charCodeAt(0)==0?z:z},
jl:{"^":"jg;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eH(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d4()
this.b=z}return this.cz(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d4()
this.c=y}return this.cz(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.E(b,H.z(this,0))
z=this.d
if(z==null){z=P.d4()
this.d=z}y=this.cC(b)
x=z[y]
if(x==null)z[y]=[this.bw(b)]
else{if(this.cG(x,b)>=0)return!1
x.push(this.bw(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cN(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.el(z,b)
x=this.cG(y,b)
if(x<0)return!1
this.cT(y.splice(x,1)[0])
return!0},
cz:function(a,b){H.E(b,H.z(this,0))
if(H.h(a[b],"$isd3")!=null)return!1
a[b]=this.bw(b)
return!0},
cN:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isd3")
if(z==null)return!1
this.cT(z)
delete a[b]
return!0},
cA:function(){this.r=this.r+1&67108863},
bw:function(a){var z,y
z=new P.d3(H.E(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cA()
return z},
cT:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cA()},
cC:function(a){return J.aH(a)&0x3ffffff},
el:function(a,b){return a[this.cC(b)]},
cG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
t:{
d4:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d3:{"^":"a;a,0b,0c"},
jm:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.z(this,0))
this.c=z.b
return!0}}},
t:{
eH:function(a,b,c){var z=new P.jm(a,b,[c])
z.c=a.e
return z}}},
jg:{"^":"hQ;"},
cL:{"^":"jn;",$ise:1,$isc:1},
v:{"^":"a;$ti",
gX:function(a){return new H.h6(a,this.gl(a),0,[H.bG(this,a,"v",0)])},
E:function(a,b){return this.k(a,b)},
ht:function(a,b){var z,y,x
z=H.f([],[H.bG(this,a,"v",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a5(z,y,this.k(a,y));++y}return z},
hs:function(a){return this.ht(a,!0)},
j:function(a){return P.cE(a,"[","]")}},
ha:{"^":"a9;"},
hb:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a9:{"^":"a;$ti",
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bG(this,a,"a9",0),H.bG(this,a,"a9",1)]})
for(z=J.c_(this.gau(a));z.G();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b6(this.gau(a))},
j:function(a){return P.dQ(a)},
$isa2:1},
hR:{"^":"a;$ti",
j:function(a){return P.cE(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dj("index"))
if(b<0)H.r(P.bn(b,0,null,"index",null))
for(z=P.eH(this,this.r,H.z(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
$ise:1},
hQ:{"^":"hR;"},
jn:{"^":"a+v;"}}],["","",,P,{"^":"",
fJ:function(a){var z=J.J(a)
if(!!z.$isu)return z.j(a)
return"Instance of '"+H.aU(a)+"'"},
h7:function(a,b,c,d){var z,y
H.E(b,d)
z=J.fV(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a5(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
h8:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gX(a);x.G();)C.a.h(y,H.E(x.gO(x),c))
if(b)return y
return H.w(J.bg(y),"$isc",z,"$asc")},
c6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fJ(a)},
q:function(a){return new P.eD(a)},
dg:function(a){H.kF(a)},
ai:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.f.cQ(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fz(H.hF(this))
y=P.bI(H.hD(this))
x=P.bI(H.hz(this))
w=P.bI(H.hA(this))
v=P.bI(H.hC(this))
u=P.bI(H.hE(this))
t=P.fA(H.hB(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bI:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
ba:{"^":"a;a",
i:function(a,b){return new P.ba(C.f.U(this.a*b))},
af:function(a,b){return C.f.af(this.a,H.h(b,"$isba").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fF()
y=this.a
if(y<0)return"-"+new P.ba(0-y).j(0)
x=z.$1(C.f.a1(y,6e7)%60)
w=z.$1(C.f.a1(y,1e6)%60)
v=new P.fE().$1(y%1e6)
return""+C.f.a1(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
dB:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fE:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fF:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
dZ:{"^":"a_;",
j:function(a){return"Throw of null."}},
aI:{"^":"a_;a,b,c,d",
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbz()+y+x
if(!this.a)return w
v=this.gby()
u=P.c6(this.b)
return w+v+": "+H.j(u)},
t:{
fg:function(a){return new P.aI(!1,null,null,a)},
c0:function(a,b,c){return new P.aI(!0,a,b,c)},
dj:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
e0:{"^":"aI;e,f,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cS:function(a,b,c){return new P.e0(null,null,!0,a,b,"Value not in range")},
bn:function(a,b,c,d,e){return new P.e0(b,c,!0,a,d,"Invalid value")}}},
fS:{"^":"aI;e,l:f>,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){if(J.fc(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
N:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.b6(b))
return new P.fS(b,z,!0,a,c,"Index out of range")}}},
iw:{"^":"a_;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
ab:function(a){return new P.iw(a)}}},
iu:{"^":"a_;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ew:function(a){return new P.iu(a)}}},
i_:{"^":"a_;a",
j:function(a){return"Bad state: "+this.a}},
fu:{"^":"a_;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c6(z))+"."},
t:{
b8:function(a){return new P.fu(a)}}},
hu:{"^":"a;",
j:function(a){return"Out of Memory"},
$isa_:1},
e5:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isa_:1},
fy:{"^":"a_;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eD:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
L:{"^":"T;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gX(this)
for(y=0;z.G();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dj("index"))
if(b<0)H.r(P.bn(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.G();){x=z.gO(z)
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
j:function(a){return P.fT(this,"(",")")}},
cF:{"^":"a;$ti"},
c:{"^":"a;$ti",$ise:1},
"+List":0,
a2:{"^":"a;$ti"},
I:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bm(this)},
j:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.j(this)}},
am:{"^":"a;"},
o:{"^":"a;",$ishv:1},
"+String":0,
bQ:{"^":"a;aA:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
e7:function(a,b,c){var z=J.c_(b)
if(!z.G())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.G())}else{a+=H.j(z.gO(z))
for(;z.G();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cx:function(a,b){var z=document.createElement("canvas")
return z},
fH:function(a){H.h(a,"$isa1")
return"wheel"},
ci:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eG:function(a,b,c,d){var z,y
z=W.ci(W.ci(W.ci(W.ci(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eX:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.cX(a,b)},
aQ:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kS:{"^":"cV;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kT:{"^":"n;0l:length=","%":"AccessibleNodeList"},
kU:{"^":"aQ;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kV:{"^":"aQ;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fl:{"^":"n;","%":";Blob"},
cw:{"^":"aQ;",
bt:function(a,b,c){if(c!=null)return a.getContext(b,P.kh(c,null))
return a.getContext(b)},
dM:function(a,b){return this.bt(a,b,null)},
$iscw:1,
"%":"HTMLCanvasElement"},
dq:{"^":"n;",$isdq:1,"%":"CanvasRenderingContext2D"},
l0:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l2:{"^":"c4;0l:length=","%":"CSSPerspective"},
l3:{"^":"cB;0n:x=,0p:y=","%":"CSSPositionValue"},
l4:{"^":"c4;0n:x=,0p:y=","%":"CSSRotation"},
b9:{"^":"n;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l5:{"^":"c4;0n:x=,0p:y=","%":"CSSScale"},
fw:{"^":"iX;0l:length=",
dN:function(a,b){var z=a.getPropertyValue(this.cw(a,b))
return z==null?"":z},
cw:function(a,b){var z,y
z=$.$get$du()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fB()+b
if(z in a)return z
return b},
f2:function(a,b,c,d){a.setProperty(b,c,d)},
gbS:function(a){return a.bottom},
gaj:function(a){return a.height},
gaM:function(a){return a.left},
gb_:function(a){return a.right},
gb2:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"a;",
gaM:function(a){return this.dN(a,"left")}},
cB:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c4:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l6:{"^":"cB;0l:length=","%":"CSSTransformValue"},
l7:{"^":"c4;0n:x=,0p:y=","%":"CSSTranslation"},
l8:{"^":"cB;0l:length=","%":"CSSUnparsedValue"},
l9:{"^":"n;0l:length=","%":"DataTransferItemList"},
la:{"^":"n;0n:x=,0p:y=","%":"DeviceAcceleration"},
lb:{"^":"n;",
j:function(a){return String(a)},
"%":"DOMException"},
lc:{"^":"fC;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fC:{"^":"n;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
ld:{"^":"iZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a8,P.T]]},
$asv:function(){return[[P.a8,P.T]]},
$ise:1,
$ase:function(){return[[P.a8,P.T]]},
$isc:1,
$asc:function(){return[[P.a8,P.T]]},
$asx:function(){return[[P.a8,P.T]]},
"%":"ClientRectList|DOMRectList"},
fD:{"^":"n;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gak(a))+" x "+H.j(this.gaj(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa8",[P.T],"$asa8")
if(!z)return!1
z=J.bX(b)
return a.left===z.gaM(b)&&a.top===z.gb2(b)&&this.gak(a)===z.gak(b)&&this.gaj(a)===z.gaj(b)},
gS:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gbS:function(a){return a.bottom},
gaj:function(a){return a.height},
gaM:function(a){return a.left},
gb_:function(a){return a.right},
gb2:function(a){return a.top},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.T]},
"%":";DOMRectReadOnly"},
le:{"^":"j0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.o]},
$asv:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
lf:{"^":"n;0l:length=","%":"DOMTokenList"},
iW:{"^":"cL;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.h(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hs(this)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asv:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"K;",
gcZ:function(a){return new W.iW(a,a.children)},
gbc:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.af()
if(x<0)x=-x*0
if(typeof w!=="number")return w.af()
if(w<0)w=-w*0
return new P.a8(z,y,x,w,[P.T])},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"n;",
cU:["dS",function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.b2(H.b(c,{func:1,args:[W.a6]}),1),!1)},
$isa1:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eM|eN|eP|eQ"},
bc:{"^":"fl;",$isbc:1,"%":"File"},
ly:{"^":"j5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bc]},
$asv:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asx:function(){return[W.bc]},
"%":"FileList"},
lz:{"^":"a1;0l:length=","%":"FileWriter"},
lC:{"^":"aQ;0l:length=","%":"HTMLFormElement"},
be:{"^":"n;",$isbe:1,"%":"Gamepad"},
lD:{"^":"cV;0n:x=,0p:y=","%":"Gyroscope"},
lE:{"^":"n;0l:length=","%":"History"},
lF:{"^":"ji;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$asv:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c8:{"^":"n;0d0:data=",$isc8:1,"%":"ImageData"},
dH:{"^":"aQ;",$isdH:1,"%":"HTMLImageElement"},
bh:{"^":"cZ;",$isbh:1,"%":"KeyboardEvent"},
lK:{"^":"n;",
j:function(a){return String(a)},
"%":"Location"},
lL:{"^":"cV;0n:x=,0p:y=","%":"Magnetometer"},
lN:{"^":"n;0l:length=","%":"MediaList"},
lO:{"^":"a1;",
cU:function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.dS(a,b,c,!1)},
"%":"MessagePort"},
lP:{"^":"jo;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gau:function(a){var z=H.f([],[P.o])
this.L(a,new W.hm(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hm:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lQ:{"^":"jp;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gau:function(a){var z=H.f([],[P.o])
this.L(a,new W.hn(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hn:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bi:{"^":"n;",$isbi:1,"%":"MimeType"},
lR:{"^":"jr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bi]},
$asv:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asx:function(){return[W.bi]},
"%":"MimeTypeArray"},
at:{"^":"cZ;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iV:{"^":"cL;a",
gX:function(a){var z=this.a.childNodes
return new W.dD(z,z.length,-1,[H.bG(C.G,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asv:function(){return[W.K]},
$ase:function(){return[W.K]},
$asc:function(){return[W.K]}},
K:{"^":"a1;",
j:function(a){var z=a.nodeValue
return z==null?this.dT(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hr:{"^":"jt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$asv:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bk:{"^":"n;0l:length=",$isbk:1,"%":"Plugin"},
m1:{"^":"jx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bk]},
$asv:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asx:function(){return[W.bk]},
"%":"PluginArray"},
m6:{"^":"jD;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gau:function(a){var z=H.f([],[P.o])
this.L(a,new W.hN(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hN:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m7:{"^":"aQ;0l:length=","%":"HTMLSelectElement"},
cV:{"^":"a1;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bo:{"^":"a1;",$isbo:1,"%":"SourceBuffer"},
m8:{"^":"eN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$asv:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asx:function(){return[W.bo]},
"%":"SourceBufferList"},
bp:{"^":"n;",$isbp:1,"%":"SpeechGrammar"},
m9:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asx:function(){return[W.bp]},
"%":"SpeechGrammarList"},
bq:{"^":"n;0l:length=",$isbq:1,"%":"SpeechRecognitionResult"},
mb:{"^":"jI;",
k:function(a,b){return a.getItem(H.U(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gau:function(a){var z=H.f([],[P.o])
this.L(a,new W.i1(z))
return z},
gl:function(a){return a.length},
$asa9:function(){return[P.o,P.o]},
$isa2:1,
$asa2:function(){return[P.o,P.o]},
"%":"Storage"},
i1:{"^":"u:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
br:{"^":"n;",$isbr:1,"%":"CSSStyleSheet|StyleSheet"},
bs:{"^":"aQ;",$isbs:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bt:{"^":"a1;",$isbt:1,"%":"TextTrack"},
bu:{"^":"a1;",$isbu:1,"%":"TextTrackCue|VTTCue"},
mg:{"^":"jM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$asv:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asx:function(){return[W.bu]},
"%":"TextTrackCueList"},
mh:{"^":"eQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$asv:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"TextTrackList"},
mi:{"^":"n;0l:length=","%":"TimeRanges"},
bv:{"^":"n;",$isbv:1,"%":"Touch"},
aW:{"^":"cZ;",$isaW:1,"%":"TouchEvent"},
mj:{"^":"jS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$asv:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"TouchList"},
mk:{"^":"n;0l:length=","%":"TrackDefaultList"},
cZ:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mn:{"^":"n;",
j:function(a){return String(a)},
"%":"URL"},
mp:{"^":"n;0n:x=","%":"VRStageBoundsPoint"},
mq:{"^":"a1;0l:length=","%":"VideoTrackList"},
by:{"^":"at;",
gfS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.ab("deltaY is not supported"))},
gfR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.ab("deltaX is not supported"))},
$isby:1,
"%":"WheelEvent"},
iO:{"^":"a1;",
eY:function(a,b){return a.requestAnimationFrame(H.b2(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mv:{"^":"jX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.b9]},
$asv:function(){return[W.b9]},
$ise:1,
$ase:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asx:function(){return[W.b9]},
"%":"CSSRuleList"},
mw:{"^":"fD;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa8",[P.T],"$asa8")
if(!z)return!1
z=J.bX(b)
return a.left===z.gaM(b)&&a.top===z.gb2(b)&&a.width===z.gak(b)&&a.height===z.gaj(b)},
gS:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
my:{"^":"jZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$asv:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asx:function(){return[W.be]},
"%":"GamepadList"},
mz:{"^":"k0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$asv:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mA:{"^":"k2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asv:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"SpeechRecognitionResultList"},
mB:{"^":"k4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$asv:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"StyleSheetList"},
j1:{"^":"cY;a,b,c,$ti",
h0:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mx:{"^":"j1;a,b,c,$ti"},
j2:{"^":"e6;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.fe(this.b,this.c,z,!1)},
t:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eX(new W.j3(c),W.a6)
z=new W.j2(0,a,b,z,!1,[e])
z.fg()
return z}}},
j3:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isa6"))}},
x:{"^":"a;$ti",
gX:function(a){return new W.dD(a,this.gl(a),-1,[H.bG(this,a,"x",0)])}},
dD:{"^":"a;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fd(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
iX:{"^":"n+fx;"},
iY:{"^":"n+v;"},
iZ:{"^":"iY+x;"},
j_:{"^":"n+v;"},
j0:{"^":"j_+x;"},
j4:{"^":"n+v;"},
j5:{"^":"j4+x;"},
jh:{"^":"n+v;"},
ji:{"^":"jh+x;"},
jo:{"^":"n+a9;"},
jp:{"^":"n+a9;"},
jq:{"^":"n+v;"},
jr:{"^":"jq+x;"},
js:{"^":"n+v;"},
jt:{"^":"js+x;"},
jw:{"^":"n+v;"},
jx:{"^":"jw+x;"},
jD:{"^":"n+a9;"},
eM:{"^":"a1+v;"},
eN:{"^":"eM+x;"},
jE:{"^":"n+v;"},
jF:{"^":"jE+x;"},
jI:{"^":"n+a9;"},
jL:{"^":"n+v;"},
jM:{"^":"jL+x;"},
eP:{"^":"a1+v;"},
eQ:{"^":"eP+x;"},
jR:{"^":"n+v;"},
jS:{"^":"jR+x;"},
jW:{"^":"n+v;"},
jX:{"^":"jW+x;"},
jY:{"^":"n+v;"},
jZ:{"^":"jY+x;"},
k_:{"^":"n+v;"},
k0:{"^":"k_+x;"},
k1:{"^":"n+v;"},
k2:{"^":"k1+x;"},
k3:{"^":"n+v;"},
k4:{"^":"k3+x;"}}],["","",,P,{"^":"",
kk:function(a){var z,y
z=J.J(a)
if(!!z.$isc8){y=z.gd0(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eS(a.data,a.height,a.width)},
kj:function(a){if(a instanceof P.eS)return{data:a.a,height:a.b,width:a.c}
return a},
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.h3(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.U(y[w])
z.a5(0,v,a[v])}return z},
kh:function(a,b){var z={}
a.L(0,new P.ki(z))
return z},
dA:function(){var z=$.dz
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dz=z}return z},
fB:function(){var z,y
z=$.dw
if(z!=null)return z
y=$.dx
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dx=y}if(y)z="-moz-"
else{y=$.dy
if(y==null){y=!P.dA()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.dy=y}if(y)z="-ms-"
else z=P.dA()?"-o-":"-webkit-"}$.dw=z
return z},
eS:{"^":"a;d0:a>,b,c",$isc8:1},
ki:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fM:{"^":"cL;a,b",
gbB:function(){var z,y,x
z=this.b
y=H.aL(z,"v",0)
x=W.a0
return new H.hc(new H.iM(z,H.b(new P.fN(),{func:1,ret:P.ai,args:[y]}),[y]),H.b(new P.fO(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b6(this.gbB().a)},
k:function(a,b){var z=this.gbB()
return z.b.$1(J.di(z.a,b))},
gX:function(a){var z=P.h8(this.gbB(),!1,W.a0)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asv:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
fN:{"^":"u:25;",
$1:function(a){return!!J.J(H.h(a,"$isK")).$isa0}},
fO:{"^":"u:26;",
$1:function(a){return H.d(H.h(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bl:{"^":"a;n:a>,p:b>,$ti",
j:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b1(b,"$isbl",[P.T],null)
if(!z)return!1
z=this.a
y=J.bX(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.eF(P.bA(P.bA(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.z(this,0)
z=H.E(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bl(z,H.E(x*b,y),this.$ti)}},
jy:{"^":"a;$ti",
gb_:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.E(z+this.c,H.z(this,0))},
gbS:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.E(z+this.d,H.z(this,0))},
j:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b1(b,"$isa8",[P.T],"$asa8")
if(!z)return!1
z=this.a
y=J.bX(b)
x=y.gaM(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.E(z+this.c,w)===y.gb_(b)){if(typeof x!=="number")return x.D()
z=H.E(x+this.d,w)===y.gbS(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.E(x+this.d,v)
return P.eF(P.bA(P.bA(P.bA(P.bA(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d_:function(a,b){var z,y
H.w(b,"$isbl",[P.T],"$asbl")
z=b.a
y=this.a
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"jy;aM:a>,b2:b>,ak:c>,aj:d>,$ti"}}],["","",,P,{"^":"",lg:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},lh:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},li:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lj:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},lk:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},ll:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lm:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},ln:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},lo:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lp:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},lq:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},lr:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},ls:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lt:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lu:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lv:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lw:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},lx:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lA:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},lB:{"^":"bf;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fQ:{"^":"bf;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bf:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lG:{"^":"bf;0n:x=,0p:y=","%":"SVGImageElement"},bO:{"^":"n;",$isbO:1,"%":"SVGLength"},lJ:{"^":"jk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.bO]},
$ise:1,
$ase:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asx:function(){return[P.bO]},
"%":"SVGLengthList"},lM:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bP:{"^":"n;",$isbP:1,"%":"SVGNumber"},lZ:{"^":"jv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asx:function(){return[P.bP]},
"%":"SVGNumberList"},m0:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},m2:{"^":"n;0n:x=,0p:y=","%":"SVGPoint"},m3:{"^":"n;0l:length=","%":"SVGPointList"},m4:{"^":"n;0n:x=,0p:y=","%":"SVGRect"},m5:{"^":"fQ;0n:x=,0p:y=","%":"SVGRectElement"},mc:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a0;",
gcZ:function(a){return new P.fM(a,new W.iV(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},md:{"^":"bf;0n:x=,0p:y=","%":"SVGSVGElement"},i4:{"^":"bf;","%":"SVGTextPathElement;SVGTextContentElement"},mf:{"^":"i4;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bS:{"^":"n;",$isbS:1,"%":"SVGTransform"},ml:{"^":"jU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.bS]},
$ise:1,
$ase:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asx:function(){return[P.bS]},
"%":"SVGTransformList"},mo:{"^":"bf;0n:x=,0p:y=","%":"SVGUseElement"},jj:{"^":"n+v;"},jk:{"^":"jj+x;"},ju:{"^":"n+v;"},jv:{"^":"ju+x;"},jJ:{"^":"n+v;"},jK:{"^":"jJ+x;"},jT:{"^":"n+v;"},jU:{"^":"jT+x;"}}],["","",,P,{"^":"",kW:{"^":"n;0l:length=","%":"AudioBuffer"},kX:{"^":"iU;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gau:function(a){var z=H.f([],[P.o])
this.L(a,new P.fi(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"AudioParamMap"},fi:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kY:{"^":"a1;0l:length=","%":"AudioTrackList"},fk:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m_:{"^":"fk;0l:length=","%":"OfflineAudioContext"},iU:{"^":"n+a9;"}}],["","",,P,{"^":"",cU:{"^":"n;",
dF:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.J(g)
if(!!y.$isc8&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.kj(g))
return}if(!!y.$isdH&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.k(P.fg("Incorrect number or type of arguments"))},
ho:function(a,b,c,d,e,f,g){return this.dF(a,b,c,d,e,f,g,null,null,null)},
$iscU:1,
"%":"WebGLRenderingContext"},i5:{"^":"n;",$isi5:1,"%":"WebGLTexture"},is:{"^":"n;",$isis:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ma:{"^":"jH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return P.aG(a.item(b))},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$asx:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jG:{"^":"n+v;"},jH:{"^":"jG+x;"}}],["","",,O,{"^":"",ad:{"^":"a;0a,0b,0c,0d,$ti",
b6:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cm:function(a,b,c){var z=H.aL(this,"ad",0)
H.b(b,{func:1,ret:P.ai,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.L,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aP:function(a,b){return this.cm(a,null,b)},
cL:function(a){var z
H.w(a,"$ise",[H.aL(this,"ad",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cJ:function(a,b){var z
H.w(b,"$ise",[H.aL(this,"ad",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aL(this,"ad",0)
H.E(b,z)
z=[z]
if(this.cL(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cJ(x,H.f([b],z))}},
bO:function(a,b){var z,y
H.w(b,"$ise",[H.aL(this,"ad",0)],"$ase")
if(this.cL(b)){z=this.a
y=z.length
C.a.bO(z,b)
this.cJ(y,b)}},
$ise:1,
t:{
cy:function(a){var z=new O.ad([a])
z.b6(a)
return z}}},cN:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
dZ:function(a){var z=this.b
if(!(z==null))z.A(a)},
ax:function(){return this.dZ(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gc6(z)
else return V.aS()},
bq:function(a){var z=this.a
if(a==null)C.a.h(z,V.aS())
else C.a.h(z,a)
this.ax()},
av:function(){var z=this.a
if(z.length>0){z.pop()
this.ax()}}}}],["","",,E,{"^":"",cs:{"^":"a;"},az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sb5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdA(),{func:1,ret:-1,args:[D.m]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdA(),{func:1,ret:-1,args:[D.m]})
C.a.h(y.a,x)}w=new D.A("shape",z,this.c,this,[F.e3])
w.b=!0
this.aN(w)}},
ae:function(a,b){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();)z.d.ae(0,b)},
a3:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.ax()
a.ce(this.f)
z=a.dy
y=(z&&C.a).gc6(z)
if(y!=null&&this.d!=null)y.dC(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();)z.d.a3(a)
a.cd()
a.dx.av()},
gq:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aN:function(a){var z=this.z
if(!(z==null))z.A(a)},
Y:function(){return this.aN(null)},
h6:[function(a){H.h(a,"$ism")
this.e=null
this.aN(a)},function(){return this.h6(null)},"ia","$1","$0","gdA",0,2,0],
h4:[function(a){this.aN(H.h(a,"$ism"))},function(){return this.h4(null)},"i8","$1","$0","gdz",0,2,0],
i7:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.az],"$ase")
for(z=b.length,y=this.gdz(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","gh3",8,0,8],
i9:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.az],"$ase")
for(z=b.length,y=this.gdz(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.H(t.a,y)}}this.Y()},"$2","gh5",8,0,8],
$isau:1,
t:{
cC:function(a,b,c,d,e,f){var z,y
z=new E.az()
z.a=d
z.b=!0
y=O.cy(E.az)
z.y=y
y.aP(z.gh3(),z.gh5())
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
z.sb5(0,e)
return z}}},hI:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dY:function(a,b){var z,y,x,w,v
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
z=new O.cN()
y=[V.aq]
z.a=H.f([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.m]}
v=H.b(new E.hK(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cN()
z.a=H.f([],y)
v=z.gq()
v.toString
x=H.b(new E.hL(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cN()
z.a=H.f([],y)
y=z.gq()
y.toString
w=H.b(new E.hM(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.bR])
this.dy=z
C.a.h(z,null)
this.fr=new H.cI(0,0,[P.o,A.cW])},
ghf:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.i(0,y.gT(y))
this.z=y
z=y}return z},
ce:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc6(z):a;(z&&C.a).h(z,y)},
cd:function(){var z=this.dy
if(z.length>1)z.pop()},
cV:function(a){var z=a.b
if(z.length===0)throw H.k(P.q("May not cache a shader with no name."))
if(this.fr.fO(0,z))throw H.k(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a5(0,z,a)},
t:{
hJ:function(a,b){var z=new E.hI(a,b)
z.dY(a,b)
return z}}},hK:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$ism")
z=this.a
z.z=null
z.ch=null}},hL:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$ism")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hM:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$ism")
z=this.a
z.ch=null
z.cx=null}},ib:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e0:[function(a){var z
H.h(a,"$ism")
z=this.x
if(!(z==null))z.A(a)
this.hj()},function(){return this.e0(null)},"e_","$1","$0","gcr",0,2,0],
gfV:function(){var z,y,x
z=Date.now()
y=C.f.a1(P.dB(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
cO:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.p(z)
x=C.e.c4(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.e.c4(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hj:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.id(this),{func:1,ret:-1,args:[P.T]})
C.t.ej(z)
C.t.eY(z,W.eX(y,P.T))}},
hi:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cO()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.dB(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ax()
w=x.db
C.a.sl(w.a,0)
w.ax()
w=x.dx
C.a.sl(w.a,0)
w.ax()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aO(v)
y=H.b4(v)
P.dg("Error: "+H.j(z))
P.dg("Stack: "+H.j(y))
throw H.k(z)}},
t:{
ic:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscw)return E.ec(a,!0,!0,!0,!1)
y=W.cx(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcZ(a).h(0,y)
w=E.ec(y,!0,!0,!0,!1)
w.a=a
return w},
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ib()
y=P.h4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bt(a,"webgl",y)
x=H.h(x==null?C.k.bt(a,"experimental-webgl",y):x,"$iscU")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hJ(x,a)
w=new T.i6(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ix(a)
v=new X.fY()
v.c=new X.as(!1,!1,!1)
v.d=P.h5(null,null,null,P.L)
w.b=v
v=new X.ho(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h9(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.e6,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.geA(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.geD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.gex(),q),!1,r))
v=w.z
p=W.bh
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.geF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.geE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.geI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.geJ(),s),!1,t))
p=w.z
o=W.by;(p&&C.a).h(p,W.Y(a,H.U(W.fH(a)),H.b(w.geL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.geB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.geM(),q),!1,r))
r=w.z
q=W.aW
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.geT(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.cO()
return z}}},id:{"^":"u:29;a",
$1:function(a){var z
H.kE(a)
z=this.a
if(z.z){z.z=!1
z.hi()}}}}],["","",,Z,{"^":"",eA:{"^":"a;a,b",t:{
d1:function(a,b,c){var z
H.w(c,"$isc",[P.L],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.eA(b,z)}}},dn:{"^":"cs;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aO(y)
x=P.q('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.j(z))
throw H.k(x)}},
j:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eB:{"^":"a;a",$iskZ:1},cv:{"^":"a;a,0b,c,d",
at:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
ad:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].j(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.Z(y,", ")+"\nAttrs:   "+C.a.Z(u,", ")},
$isme:1},c9:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aU(this.c)+"'")+"]"}},aX:{"^":"a;a",
gcn:function(a){var z,y
z=this.a
y=(z&$.$get$an().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$bw().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$aA().a)!==0?y+4:y},
fJ:function(a){var z,y,x
z=$.$get$an()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ez()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.f([],[P.o])
y=this.a
if((y&$.$get$an().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.Z(z,"|")},
t:{
ah:function(a){return new Z.aX(a)}}}}],["","",,D,{"^":"",dr:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.m(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fK(z))
return x!==0},
d3:function(){return this.A(null)},
hk:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
ac:function(a){return this.hk(a,!0,!1)},
t:{
D:function(){var z=new D.aP()
z.a=H.f([],[{func:1,ret:-1,args:[D.m]}])
z.c=0
return z}}},fK:{"^":"u:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.m]})
z=this.a.a
z.b
a.$1(z)}},m:{"^":"a;a,0b"},bJ:{"^":"m;c,d,a,0b,$ti"},bK:{"^":"m;c,d,a,0b,$ti"},A:{"^":"m;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dp:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)},
t:{"^":"l_<"}},dM:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}},dN:{"^":"m;c,a,0b"},fY:{"^":"a;0a,0b,0c,0d",
hc:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dN(a,this)
y.b=!0
return z.A(y)},
h8:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dN(a,this)
y.b=!0
return z.A(y)}},dP:{"^":"cc;x,y,c,d,e,a,0b"},h9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ao:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaG()
s=new X.bj(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cc:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.ao(a,b))
return!0},
aY:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.ao(a,b))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.ao(a,b))
return!0},
hd:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.cO(new V.Q(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.A(w)
return!0},
eH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.dP(c,a,this.a.gaG(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.O(0,0)}},as:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
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
return z+(this.c?"Shift+":"")}},bj:{"^":"cc;x,y,z,Q,ch,c,d,e,a,0b"},ho:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bA:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaG()
x=new X.bj(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cc:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.bA(a,b,!0))
return!0},
aY:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.bA(a,b,!0))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.bA(a,b,!1))
return!0},
he:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.cO(new V.Q(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.A(x)
return!0},
gd2:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbs:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdw:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cO:{"^":"cc;x,c,d,e,a,0b"},cc:{"^":"m;"},ee:{"^":"cc;x,y,z,Q,ch,c,d,e,a,0b"},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ao:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.O],"$asc")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaG()
w=new X.ee(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hb:function(a){var z
H.w(a,"$isc",[V.O],"$asc")
z=this.b
if(z==null)return!1
z.A(this.ao(a,!0))
return!0},
h9:function(a){var z
H.w(a,"$isc",[V.O],"$asc")
z=this.c
if(z==null)return!1
z.A(this.ao(a,!0))
return!0},
ha:function(a){var z
H.w(a,"$isc",[V.O],"$asc")
z=this.d
if(z==null)return!1
z.A(this.ao(a,!1))
return!0}},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaG:function(){var z=this.a
return V.cT(0,0,(z&&C.k).gbc(z).c,C.k.gbc(z).d)},
cE:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.as(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
ap:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.O(y-w,x-v)},
aS:function(a){return new V.Q(a.movementX,a.movementY)},
bH:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.e.U(u.pageX)
C.e.U(u.pageY)
s=z.left
C.e.U(u.pageX)
C.a.h(y,new V.O(t-s,C.e.U(u.pageY)-z.top))}return y},
am:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dp(z,new X.as(y,a.altKey,a.shiftKey))},
hK:[function(a){this.f=!0},"$1","geD",4,0,4],
hE:[function(a){this.f=!1},"$1","gex",4,0,4],
hH:[function(a){if(this.f)a.preventDefault()},"$1","geA",4,0,4],
hM:[function(a){var z
H.h(a,"$isbh")
if(!this.f)return
z=this.cE(a)
if(this.b.hc(z))a.preventDefault()},"$1","geF",4,0,16],
hL:[function(a){var z
H.h(a,"$isbh")
if(!this.f)return
z=this.cE(a)
if(this.b.h8(z))a.preventDefault()},"$1","geE",4,0,16],
hO:[function(a){var z,y,x,w
H.h(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.am(a)
x=this.aS(a)
if(this.d.cc(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.am(a)
w=this.ap(a)
if(this.c.cc(y,w))a.preventDefault()},"$1","geI",4,0,5],
hQ:[function(a){var z,y,x
H.h(a,"$isat")
this.aE(a)
z=this.am(a)
if(this.x){y=this.aS(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","geK",4,0,5],
hJ:[function(a){var z,y,x,w
H.h(a,"$isat")
z=this.a
if(!(z&&C.k).gbc(z).d_(0,new P.bl(a.clientX,a.clientY,[P.T]))){this.aE(a)
y=this.am(a)
if(this.x){x=this.aS(a)
if(this.d.aY(y,x))a.preventDefault()
return}if(this.r)return
w=this.ap(a)
if(this.c.aY(y,w))a.preventDefault()}},"$1","geC",4,0,5],
hP:[function(a){var z,y,x
H.h(a,"$isat")
this.aE(a)
z=this.am(a)
if(this.x){y=this.aS(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","geJ",4,0,5],
hI:[function(a){var z,y,x,w
H.h(a,"$isat")
z=this.a
if(!(z&&C.k).gbc(z).d_(0,new P.bl(a.clientX,a.clientY,[P.T]))){this.aE(a)
y=this.am(a)
if(this.x){x=this.aS(a)
if(this.d.aX(y,x))a.preventDefault()
return}if(this.r)return
w=this.ap(a)
if(this.c.aX(y,w))a.preventDefault()}},"$1","geB",4,0,5],
hR:[function(a){var z,y
H.h(a,"$isby")
this.aE(a)
z=new V.Q((a&&C.r).gfR(a),C.r.gfS(a)).v(0,180)
if(this.x){if(this.d.hd(z))a.preventDefault()
return}if(this.r)return
y=this.ap(a)
if(this.c.he(z,y))a.preventDefault()},"$1","geL",4,0,32],
hS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.am(this.y)
v=this.ap(this.y)
this.d.eH(w,v,x)}},"$1","geM",4,0,4],
i_:[function(a){var z
H.h(a,"$isaW")
this.a.focus()
this.f=!0
this.bN(a)
z=this.bH(a)
if(this.e.hb(z))a.preventDefault()},"$1","geU",4,0,10],
hY:[function(a){var z
H.h(a,"$isaW")
this.bN(a)
z=this.bH(a)
if(this.e.h9(z))a.preventDefault()},"$1","geS",4,0,10],
hZ:[function(a){var z
H.h(a,"$isaW")
this.bN(a)
z=this.bH(a)
if(this.e.ha(z))a.preventDefault()},"$1","geT",4,0,10]}}],["","",,D,{"^":"",c5:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
ay:[function(a){var z
H.h(a,"$ism")
z=this.d
if(!(z==null))z.A(a)},function(){return this.ay(null)},"hu","$1","$0","ge1",0,2,0],
$isX:1,
$isau:1},X:{"^":"a;",$isau:1},fZ:{"^":"ad;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
ay:function(a){var z=this.Q
if(!(z==null))z.A(a)},
eG:[function(a){var z
H.h(a,"$ism")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.eG(null)},"hN","$1","$0","gcK",0,2,0],
hT:[function(a){var z,y,x
H.w(a,"$ise",[D.X],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geN",4,0,34],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcK(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.h(b[u],"$isX")
if(t instanceof D.c5)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bJ(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geu",8,0,17],
hV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcK(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.h(b[u],"$isX")
if(t instanceof D.c5)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.H(s.a,x)}z=new D.bK(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geP",8,0,17],
ee:function(a){var z=C.a.aU(this.e,a)
return z},
$ase:function(){return[D.X]},
$asad:function(){return[D.X]}},hy:{"^":"a;",$isX:1,$isau:1},hZ:{"^":"a;",$isX:1,$isau:1},i8:{"^":"a;",$isX:1,$isau:1},i9:{"^":"a;",$isX:1,$isau:1},ia:{"^":"a;",$isX:1,$isau:1}}],["","",,V,{"^":"",
l1:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hl",8,0,33],
cq:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dO(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.i.a8("null",c)
return C.i.a8(C.e.dH($.l.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.f([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.a5(z,u,C.i.a8(z[u],x))}return z},
bH:function(a,b){return C.e.hr(Math.pow(b,C.x.c4(Math.log(H.kg(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
i:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.V(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
ap:{"^":"a;a,b,c,d",
i:function(a,b){var z,y,x,w
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
return new V.ap(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
cb:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscb")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.e.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.e.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.e.i(t,s)
q=a5.b
p=C.e.i(z,q)
o=a5.e
n=C.e.i(w,o)
m=a5.x
l=C.e.i(t,m)
k=a5.c
z=C.e.i(z,k)
j=a5.f
w=C.e.i(w,j)
i=a5.y
t=C.e.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.e.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.e.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.e.i(d,s)
b=C.e.i(h,q)
a=C.e.i(f,o)
a0=C.e.i(d,m)
h=C.e.i(h,k)
f=C.e.i(f,j)
d=C.e.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.e.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.e.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.cb(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.i(a3,s),C.e.i(a1,q)+C.e.i(a2,o)+C.e.i(a3,m),C.e.i(a1,k)+C.e.i(a2,j)+C.e.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cb))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.b3(H.f([this.a,this.d,this.r],z),3,0)
x=V.b3(H.f([this.b,this.e,this.x],z),3,0)
w=V.b3(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
aq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
c5:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.aS()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isaq")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.C(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
j:function(a){return this.I()},
dr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b3(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.i(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.i(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.i(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.i(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.i(y,1)
q=q+y[1]+", "
if(1>=t)return H.i(x,1)
q=q+x[1]+", "
if(1>=s)return H.i(w,1)
q=q+w[1]+", "
if(1>=r)return H.i(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.i(y,2)
u=u+y[2]+", "
if(2>=t)return H.i(x,2)
u=u+x[2]+", "
if(2>=s)return H.i(w,2)
u=u+w[2]+", "
if(2>=r)return H.i(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.i(y,3)
q=q+y[3]+", "
if(3>=t)return H.i(x,3)
q=q+x[3]+", "
if(3>=s)return H.i(w,3)
q=q+w[3]+", "
if(3>=r)return H.i(v,3)
return u+(q+v[3]+"]")},
I:function(){return this.dr("",3,0)},
B:function(a){return this.dr(a,3,0)},
t:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aS:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dX:function(a,b,c){return V.ar(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dU:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ar(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
dV:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ar(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
dW:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ar(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
dT:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.C(c)))
y=b.aq(z)
x=y.v(0,Math.sqrt(y.C(y)))
w=z.aq(x)
v=new V.C(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.K(0).C(v),x.b,w.b,z.b,w.K(0).C(v),x.c,w.c,z.c,z.K(0).C(v),0,0,0,1)}}},
O:{"^":"a;n:a>,p:b>",
J:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
W:{"^":"a;n:a>,p:b>,c",
D:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
aT:{"^":"a;n:a>,p:b>,c,d",
i:function(a,b){return new V.aT(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
e1:{"^":"a;n:a>,p:b>,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
t:{
cT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)}}},
Q:{"^":"a;a,b",
fZ:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.l.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
C:{"^":"a;a,b,c",
fZ:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.C(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aq:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.C(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.C(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.l.$2(b,0))return new V.C(0,0,0)
return new V.C(this.a/b,this.b/b,this.c/b)},
du:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fs:{"^":"dr;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bv:function(a){var z=V.cq(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
sck:function(a,b){},
sc8:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bv(z)}z=new D.A("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.F(z)}},
scb:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bv(z)}z=new D.A("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.F(z)}},
sa_:function(a,b){var z,y
b=this.bv(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.t])
z.b=!0
this.F(z)}},
sc9:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.F(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.t])
z.b=!0
this.F(z)}},
sbX:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.t])
z.b=!0
this.F(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
t:{
cz:function(){var z=new U.fs()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dt:{"^":"a3;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aw:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dt))return!1
return J.M(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
t:{
cA:function(a){var z=new U.dt()
z.a=a
return z}}},dF:{"^":"ad;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
F:[function(a){var z
H.h(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.F(null)},"aa","$1","$0","gaD",0,2,0],
hv:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.F(z)},"$2","ge2",8,0,19],
hU:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.H(t.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.F(z)},"$2","geO",8,0,19],
aw:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.af()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aw(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.aS():x
z=this.e
if(!(z==null))z.ac(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.M(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ase:function(){return[U.a3]},
$asad:function(){return[U.a3]},
$isa3:1,
t:{
dG:function(a){var z=new U.dF()
z.b6(U.a3)
z.aP(z.ge2(),z.geO())
z.e=null
z.f=V.aS()
z.r=0
return z}}},a3:{"^":"dr;"},e2:{"^":"a3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gq:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
sdI:function(a){var z,y
a=V.cq(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.A("yaw",y,a,this,[P.t])
z.b=!0
this.F(z)}},
sdB:function(a,b){var z,y
b=V.cq(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.A("pitch",y,b,this,[P.t])
z.b=!0
this.F(z)}},
sdD:function(a){var z,y
a=V.cq(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.A("roll",y,a,this,[P.t])
z.b=!0
this.F(z)}},
aw:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sdI(this.a+this.d*b.y)
this.sdB(0,this.b+this.e*b.y)
this.sdD(this.c+this.f*b.y)
this.x=V.dW(this.c).i(0,V.dV(this.b)).i(0,V.dU(this.a))
z=this.y
if(!(z==null))z.ac(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a
y=b.a
if(!$.l.$2(z,y))return!1
z=this.b
y=b.b
if(!$.l.$2(z,y))return!1
z=this.c
y=b.c
if(!$.l.$2(z,y))return!1
z=this.d
y=b.d
if(!$.l.$2(z,y))return!1
z=this.e
y=b.e
if(!$.l.$2(z,y))return!1
z=this.f
y=b.f
if(!$.l.$2(z,y))return!1
return!0},
j:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}},iy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
F:[function(a){var z
H.h(a,"$ism")
z=this.cy
if(!(z==null))z.A(a)},function(){return this.F(null)},"aa","$1","$0","gaD",0,2,0],
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd2()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdw()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
y=H.b(this.gbE(),y)
C.a.h(z.a,y)
return!0},
ep:[function(a){H.h(a,"$ism")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbC",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$ism"),"$isbj")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.Q(y.a,y.b).i(0,2).v(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.Q(x.a,x.b).i(0,2).v(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
this.b.sM(0)
y=y.J(0,a.z)
this.Q=new V.Q(y.a,y.b).i(0,2).v(0,z.ga2())}this.aa()},"$1","gbD",4,0,1],
er:[function(a){var z,y,x
H.h(a,"$ism")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sM(y*10*x)
this.aa()}},"$1","gbE",4,0,1],
aw:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.af()
if(z<y){this.ch=y
x=b.y
this.b.ae(0,x)
this.cx=V.dW(this.b.d)}return this.cx},
$isa3:1},iz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
F:[function(a){var z
H.h(a,"$ism")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.F(null)},"aa","$1","$0","gaD",0,2,0],
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd2()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdw()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gen(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gff(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gfd(),y)
C.a.h(z.a,y)
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.Q(z,y)},
ep:[function(a){a=H.d(H.h(a,"$ism"),"$isbj")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbC",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$ism"),"$isbj")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ag(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ag(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.J(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))}this.aa()},"$1","gbD",4,0,1],
er:[function(a){var z,y,x
H.h(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.aa()}},"$1","gbE",4,0,1],
hy:[function(a){if(H.d(H.h(a,"$ism"),"$isdP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gem",4,0,1],
hz:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$ism"),"$isbj")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ag(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.J(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.aa()},"$1","gen",4,0,1],
i3:[function(a){H.h(a,"$ism")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
i2:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$ism"),"$isee")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ag(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ag(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.J(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))}this.aa()},"$1","gfe",4,0,1],
i1:[function(a){var z,y,x
H.h(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.aa()}},"$1","gfd",4,0,1],
aw:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.af()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
this.fr=V.dU(this.b.d).i(0,V.dV(this.c.d))}return this.fr},
$isa3:1},iA:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
F:function(a){var z=this.r
if(!(z==null))z.A(a)},
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.ges(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hA:[function(a){var z,y,x,w
H.h(a,"$ism")
if(!J.M(this.b,this.a.b.c))return
H.d(a,"$iscO")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.t])
z.b=!0
this.F(z)}},"$1","ges",4,0,1],
aw:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa3:1}}],["","",,M,{"^":"",ft:{"^":"ad;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.h(a,"$ism")
z=this.f
if(!(z==null))z.A(a)},function(){return this.V(null)},"cs","$1","$0","gP",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geQ",8,0,20],
hX:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.H(t.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geR",8,0,20],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$ase:function(){return[M.av]},
$asad:function(){return[M.av]},
$isav:1},fv:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.h(a,"$ism")
z=this.f
if(!(z==null))z.A(a)},function(){return this.V(null)},"cs","$1","$0","gP",0,2,0],
saF:function(a){var z,y,x
if(a==null)a=new X.fR()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.c2])
z.b=!0
this.V(z)}},
sb0:function(a,b){var z,y,x
if(b==null)b=X.dE(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.cd])
z.b=!0
this.V(z)}},
saO:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.bR])
z.b=!0
this.V(z)}},
a3:function(a){a.ce(this.c)
this.b.W(a)
this.a.W(a)
this.d.ae(0,a)
this.d.a3(a)
this.a.ad(a)
this.b.ad(a)
a.cd()},
$isav:1},fI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.h(a,"$ism")
z=this.x
if(!(z==null))z.A(a)},function(){return this.V(null)},"cs","$1","$0","gP",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gey",8,0,8],
hG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.H(s.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gez",8,0,8],
saF:function(a){var z,y,x
if(a==null)a=X.cQ(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.c2])
z.b=!0
this.V(z)}},
sb0:function(a,b){var z,y,x
if(b==null)b=X.dE(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.cd])
z.b=!0
this.V(z)}},
saO:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.bR])
z.b=!0
this.V(z)}},
gq:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a3:function(a){var z
a.ce(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.ae(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();)z.d.ae(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();)z.d.a3(a)
this.a.toString
a.cy.av()
a.db.av()
this.b.ad(a)
a.cd()},
$isav:1,
t:{
dC:function(a,b,c,d){var z,y
z=new M.fI()
y=O.cy(E.az)
z.d=y
y.aP(z.gey(),z.gez())
z.e=null
z.f=null
z.r=null
z.x=null
z.saF(a)
z.sb0(0,c)
z.saO(d)
return z}}},av:{"^":"a;"}}],["","",,A,{"^":"",dk:{"^":"a;a,b,c"},fh:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fT:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dR:{"^":"cW;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aK,0as,0aL,0bd,0d4,0d5,0be,0bf,0d6,0d7,0bg,0bh,0d8,0d9,0bi,0da,0dc,0bj,0dd,0de,0bk,0bl,0bm,0df,0dg,0bn,0bo,0dh,0di,0bp,0dj,0bZ,0dk,0c_,0dl,0c0,0dm,0c1,0dn,0c2,0dq,0c3,a,b,0c,0d,0e,0f,0r",
dX:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bQ("")
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
a1.fi(z)
a1.fp(z)
a1.fj(z)
a1.fA(z)
a1.fB(z)
a1.fs(z)
a1.fF(z)
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
z=new P.bQ("")
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
v.fm(z)
v.fh(z)
v.fk(z)
v.fn(z)
v.fw(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fu(z)
v.fv(z)}v.fq(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.f([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.Z(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fl(z)
v.ft(z)
v.fz(z)
v.fC(z)
v.fD(z)
v.fE(z)
v.fo(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.o])
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
n="vec4("+C.a.Z(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ds(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isay")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isay")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isay")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isay")
if(a1.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$isd0")
if(a1.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isay")
this.k3=H.f([],[A.ay])
y=a1.aK
if(y>0){this.k2=H.h(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isay"))}}y=a1.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.aK=H.d(this.r.m(0,"diffuseTxt"),"$isaf")
this.aL=H.d(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.as=H.d(this.r.m(0,"diffuseTxt"),"$isaa")
this.aL=H.d(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bd=H.d(this.r.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.d4=H.d(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.be=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.d5=H.d(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.be=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bh=H.d(this.r.m(0,"shininess"),"$isS")
this.bf=H.d(this.r.m(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.d6=H.d(this.r.m(0,"specularTxt"),"$isaf")
this.bg=H.d(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.d7=H.d(this.r.m(0,"specularTxt"),"$isaa")
this.bg=H.d(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.h:break
case C.c:this.d8=H.d(this.r.m(0,"bumpTxt"),"$isaf")
this.bi=H.d(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.d9=H.d(this.r.m(0,"bumpTxt"),"$isaa")
this.bi=H.d(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.da=H.d(this.r.m(0,"envSampler"),"$isaa")
this.dc=H.d(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bj=H.d(this.r.m(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.dd=H.d(this.r.m(0,"reflectTxt"),"$isaf")
this.bk=H.d(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.de=H.d(this.r.m(0,"reflectTxt"),"$isaa")
this.bk=H.d(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bl=H.d(this.r.m(0,"refraction"),"$isS")
this.bm=H.d(this.r.m(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.df=H.d(this.r.m(0,"refractTxt"),"$isaf")
this.bn=H.d(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.dg=H.d(this.r.m(0,"refractTxt"),"$isaa")
this.bn=H.d(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bo=H.d(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.h:break
case C.c:this.dh=H.d(this.r.m(0,"alphaTxt"),"$isaf")
this.bp=H.d(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.di=H.d(this.r.m(0,"alphaTxt"),"$isaa")
this.bp=H.d(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.bZ=H.f([],[A.eq])
this.c_=H.f([],[A.er])
this.c0=H.f([],[A.es])
this.c1=H.f([],[A.et])
this.c2=H.f([],[A.eu])
this.c3=H.f([],[A.ev])
if(a1.k2){y=a1.z
if(y>0){this.dj=H.h(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.bZ;(x&&C.a).h(x,new A.eq(m,l,k))}}y=a1.Q
if(y>0){this.dk=H.h(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.c_;(x&&C.a).h(x,new A.er(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dl=H.h(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.c0;(x&&C.a).h(x,new A.es(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dm=H.h(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isaf")
x=this.c1;(x&&C.a).h(x,new A.et(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dn=H.h(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isd0")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isaa")
x=this.c2;(x&&C.a).h(x,new A.eu(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dq=H.h(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isG")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isG")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isaf")
x=this.c3;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ab:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dQ(c)
b.a.uniform1i(b.d,0)}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
he:function(a,b){var z,y
z=a.as
y=new A.dR(b,z)
y.cq(b,z)
y.dX(a,b)
return y}}},hi:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aK,as,aL",
fi:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aK+"];\n"
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
fp:function(a){var z
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
fj:function(a){var z
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
fA:function(a){var z,y
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
fB:function(a){var z,y
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
fs:function(a){var z
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
fF:function(a){var z
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
an:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.co(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.an(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
fh:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.an(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
fk:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
fn:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
fw:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.an(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
fq:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
fu:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.an(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
fv:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.an(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
fl:function(a){var z,y
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
ft:function(a){var z,y
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
fz:function(a){var z,y
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
fC:function(a){var z,y,x
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
fD:function(a){var z,y,x
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
fE:function(a){var z,y,x
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
fo:function(a){var z
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
j:function(a){return this.as}},eq:{"^":"a;a,b,c"},et:{"^":"a;a,b,c,d,e,f,r,x"},er:{"^":"a;a,b,c,d,e,f,r"},eu:{"^":"a;a,b,c,d,e,f,r,x,y,z"},es:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ev:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cW:{"^":"cs;",
cq:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
ds:function(a,b,c){var z,y,x
this.c=this.cF(b,35633)
this.d=this.cF(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f0(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f9()
this.fa()},
W:function(a){a.a.useProgram(this.e)
this.f.fT()},
cF:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f0(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.k(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f9:function(){var z,y,x,w,v,u
z=H.f([],[A.dk])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dk(y,v.name,u))}this.f=new A.fh(z)},
fa:function(){var z,y,x,w,v,u
z=H.f([],[A.a4])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fQ(v.type,v.size,v.name,u))}this.r=new A.ir(z)},
aB:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.d_(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.d_(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.d_(z,y,b,a,c)},
b9:function(a,b){return new P.eD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fQ:function(a,b,c,d){switch(a){case 5120:return this.aB(b,c,d)
case 5121:return this.aB(b,c,d)
case 5122:return this.aB(b,c,d)
case 5123:return this.aB(b,c,d)
case 5124:return this.aB(b,c,d)
case 5125:return this.aB(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.il(this.a,this.e,c,d)
case 35665:return new A.G(this.a,this.e,c,d)
case 35666:return new A.ip(this.a,this.e,c,d)
case 35667:return new A.im(this.a,this.e,c,d)
case 35668:return new A.io(this.a,this.e,c,d)
case 35669:return new A.iq(this.a,this.e,c,d)
case 35674:return new A.it(this.a,this.e,c,d)
case 35675:return new A.d0(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.k(this.b9("BOOL",c))
case 35671:throw H.k(this.b9("BOOL_VEC2",c))
case 35672:throw H.k(this.b9("BOOL_VEC3",c))
case 35673:throw H.k(this.b9("BOOL_VEC4",c))
default:throw H.k(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c3:{"^":"a;a,b",
j:function(a){return this.b}},e4:{"^":"cW;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a4:{"^":"a;"},ir:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.k(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.I()},
fU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].j(0)+a
return x},
I:function(){return this.fU("\n")}},H:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1i: "+H.j(this.c)}},im:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform2i: "+H.j(this.c)}},io:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform3i: "+H.j(this.c)}},iq:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform4i: "+H.j(this.c)}},ik:{"^":"a4;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
d_:function(a,b,c,d,e){var z=new A.ik(a,b,c,e)
z.f=d
z.e=P.h7(d,0,!1,P.L)
return z}}},S:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1f: "+H.j(this.c)}},il:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform2f: "+H.j(this.c)}},G:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform3f: "+H.j(this.c)}},ip:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform4f: "+H.j(this.c)}},it:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d0:{"^":"a4;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bC(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a4;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bC(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.j(this.c)}},af:{"^":"a4;a,b,c,d",
dQ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.j(this.c)}},aa:{"^":"a4;a,b,c,d",
dR:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cj:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bB:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.C(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.C(t+h,s+f,r+g)
z.b=q
p=new V.C(t-h,s-f,r-g)
z.c=p
o=new V.C(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cj(y)
k=F.cj(z.b)
j=F.fa(d,e,new F.k5(z,F.cj(z.c),F.cj(z.d),k,l,c),b)
if(j!=null)a.ca(j)},
kP:function(a,b,c,d){return F.kl(c,a,d,b,new F.kQ())},
kl:function(a,b,c,d,e){var z=F.fa(a,b,new F.km(H.b(e,{func:1,ret:V.W,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ah()
z.h2(new F.iG(),new F.hs())
return z},
fa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ag,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cX()
y=H.f([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ch(null,null,new V.ap(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bW(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ch(null,null,new V.ap(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bW(d))}}z.d.fH(a+1,b+1,y)
return z},
k5:{"^":"u:21;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c7(z.b,b).c7(z.d.c7(z.c,b),c)
a.sa_(0,new V.W(y.a,y.b,y.c))
a.shp(y.v(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.aT(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Y()}}},
kQ:{"^":"u:36;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
km:{"^":"u:21;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dh(y.$1(z),x)
x=J.dh(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.C(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.C(x)))
u=new V.C(1,0,0)
y=v.aq(!v.u(0,u)?new V.C(0,0,1):u)
t=y.v(0,Math.sqrt(y.C(y)))
y=t.aq(v)
u=y.v(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
a.sa_(0,w.D(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ae:{"^":"a;0a,0b,0c,0d,0e",
ar:function(){if(!this.gaV()){C.a.H(this.a.a.d.b,this)
this.a.a.Y()}this.bJ()
this.bK()
this.eX()},
f6:function(a){this.a=a
C.a.h(a.d.b,this)},
f7:function(a){this.b=a
C.a.h(a.d.c,this)},
f8:function(a){this.c=a
C.a.h(a.d.d,this)},
bJ:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
bK:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
eX:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.C(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.du())return
return v.v(0,Math.sqrt(v.C(v)))},
eb:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.C(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.J(0,y)
z=new V.C(z.a,z.b,z.c)
z=v.aq(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
bV:function(){if(this.d!=null)return!0
var z=this.e9()
if(z==null){z=this.eb()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
e8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.C(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.du())return
return v.v(0,Math.sqrt(v.C(v)))},
ea:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.J(0,u)
z=new V.C(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.J(0,u).i(0,l).D(0,u).J(0,x)
z=new V.C(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.aq(m)
z=z.v(0,Math.sqrt(z.C(z))).aq(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
bT:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.ea()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
gfM:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z,y
if(this.gaV())return a+"disposed"
z=a+C.i.a8(J.a5(this.a.e),0)+", "+C.i.a8(J.a5(this.b.e),0)+", "+C.i.a8(J.a5(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
I:function(){return this.B("")},
t:{
bb:function(a,b,c){var z,y,x
z=new F.ae()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.f6(a)
z.f7(b)
z.f8(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
fL:{"^":"a;"},
hV:{"^":"fL;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cK:{"^":"a;0a,0b",
ar:function(){if(!this.gaV()){C.a.H(this.a.a.c.b,this)
this.a.a.Y()}this.bJ()
this.bK()},
bJ:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
bK:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){if(this.gaV())return a+"disposed"
return a+C.i.a8(J.a5(this.a.e),0)+", "+C.i.a8(J.a5(this.b.e),0)},
I:function(){return this.B("")}},
h_:{"^":"a;"},
ij:{"^":"h_;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cR:{"^":"a;0a",
ar:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.Y()}this.eW()},
eW:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a8(J.a5(z.e),0)},
I:function(){return this.B("")}},
e3:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ca:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.fP())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cR()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.A(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cK()
s=p.a
if(s==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.q("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.A(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bb(p,o,l)}z=this.e
if(!(z==null))z.ac(0)},
ah:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ah()||!1
if(!this.a.ah())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
ek:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ag],"$asc")
H.w(e,"$isc",[P.L],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aW(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
h2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.L];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.ek(a,v,y,u,t))b.ca(u)}this.a.w()
this.c.cf()
this.d.cf()
this.b.hh()
this.c.cg(new F.ij())
this.d.cg(new F.hV())
z=this.e
if(!(z==null))z.ac(0)},
cY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$an()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
v=b.gcn(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dn])
for(r=0,q=0;q<w;++q){p=b.fJ(q)
o=p.gcn(p)
C.a.a5(s,q,new Z.dn(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h_(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a5(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bC(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cv(new Z.eA(34962,j),s,b)
i.b=H.f([],[Z.c9])
if(this.b.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c9(0,h.length,f))}if(this.c.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c9(1,h.length,f))}if(this.d.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c9(4,h.length,f))}return i},
j:function(a){var z=H.f([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.Z(z,"\n")},
aN:function(a){var z=this.e
if(!(z==null))z.A(a)},
Y:function(){return this.aN(null)},
t:{
cX:function(){var z,y
z=new F.e3()
y=new F.iB(z)
y.b=!1
y.c=H.f([],[F.ag])
z.a=y
y=new F.hU(z)
y.b=H.f([],[F.cR])
z.b=y
y=new F.hT(z)
y.b=H.f([],[F.cK])
z.c=y
y=new F.hS(z)
y.b=H.f([],[F.ae])
z.d=y
z.e=null
return z}}},
hS:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.w(a,"$isc",[F.ag],"$asc")
z=H.f([],[F.ae])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bb(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ag],"$asc")
z=H.f([],[F.ae])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.i(c,x)
r=c[x];++x
if(x>=s)return H.i(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.i(c,p)
o=c[p]
if(y<0||y>=s)return H.i(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bb(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bb(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bb(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bb(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cg:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aW(0,v,t)){v.ar()
break}}}}},
cf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfM(x)
if(y)x.ar()}},
ah:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bV())x=!1
return x},
bU:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bT())x=!1
return x},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
hT:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cg:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aW(0,v,t)){v.ar()
break}}}}},
cf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.ar()}},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
hU:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hh:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ar()}},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bW:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ch(this.cx,x,u,z,y,w,v,a,t)},
fP:function(){return this.bW(null)},
sa_:function(a,b){var z
if(!J.M(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
shp:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
h_:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$an())){z=this.f
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.r
y=[P.t]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aB())){z=this.x
y=[P.t]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aD())){z=this.y
y=[P.t]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aE())){z=this.z
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bw())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bx())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aY()))return H.f([this.ch],[P.t])
else if(z.u(a,$.$get$aA())){z=this.cx
y=[P.t]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.t])},
bV:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.C(0,0,0)
this.d.L(0,new F.iL(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
bT:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.C(0,0,0)
this.d.L(0,new F.iK(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z,y,x
z=H.f([],[P.o])
C.a.h(z,C.i.a8(J.a5(this.e),0))
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
C.a.h(z,V.F(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.Z(z,", ")
return a+"{"+x+"}"},
I:function(){return this.B("")},
t:{
ch:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.iJ(z)
y.b=H.f([],[F.cR])
z.b=y
y=new F.iF(z)
x=[F.cK]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.iC(z)
x=[F.ae]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$ex()
z.e=0
y=$.$get$an()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$ey().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$aA().a)!==0?a:null
return z}}},
iL:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iK:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isae")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iB:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.k(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
fI:function(a,b,c,d,e,f,g,h,i){var z=F.ch(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
ba:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ah:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bV()
return!0},
bU:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bT()
return!0},
fL:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
this.w()
z=H.f([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
iC:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ae]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iD(this,b))
C.a.L(this.d,new F.iE(this,b))},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
iD:{"^":"u:6;a,b",
$1:function(a){H.h(a,"$isae")
if(!J.M(a.a,this.a))this.b.$1(a)}},
iE:{"^":"u:6;a,b",
$1:function(a){var z
H.h(a,"$isae")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
iF:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}},
iH:{"^":"a;"},
iG:{"^":"iH;",
aW:function(a,b,c){return J.M(b.f,c.f)}},
iI:{"^":"a;"},
hs:{"^":"iI;",
ca:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ag],"$asc")
z=new V.C(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.C(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.M(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.A(null)}}}return}},
iJ:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.Z(z,"\n")},
I:function(){return this.B("")}}}],["","",,O,{"^":"",hf:{"^":"bR;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
R:[function(a){var z
H.h(a,"$ism")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.R(null)},"ct","$1","$0","gaz",0,2,0],
f_:[function(a){H.h(a,"$ism")
this.a=null
this.R(a)},function(){return this.f_(null)},"i0","$1","$0","geZ",0,2,0],
hC:[function(a,b){var z=V.aq
z=new D.bJ(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.R(z)},"$2","gev",8,0,22],
hD:[function(a,b){var z=V.aq
z=new D.bK(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.R(z)},"$2","gew",8,0,22],
cD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a1(z.e.length+3,4)*4
x=C.f.a1(z.f.length+3,4)*4
w=C.f.a1(z.r.length+3,4)*4
v=C.f.a1(z.x.length+3,4)*4
u=C.f.a1(z.y.length+3,4)*4
t=C.f.a1(z.z.length+3,4)*4
s=C.f.a1(this.e.a.length+3,4)*4
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
a6=$.$get$an()
if(c){z=$.$get$aC()
a6=new Z.aX(a6.a|z.a)}if(b){z=$.$get$aB()
a6=new Z.aX(a6.a|z.a)}if(a){z=$.$get$aD()
a6=new Z.aX(a6.a|z.a)}if(a0){z=$.$get$aE()
a6=new Z.aX(a6.a|z.a)}if(a2){z=$.$get$aA()
a6=new Z.aX(a6.a|z.a)}return new A.hi(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.w(a,"$isc",[T.ce],"$asc")
if(b!=null)if(!C.a.aU(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.G();){y=z.d
x=new V.C(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cj(x)}}},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cD()
y=H.h(a.fr.k(0,z.as),"$isdR")
if(y==null){y=A.he(z,a.a)
a.cV(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aL
z=b.e
if(!(z instanceof Z.cv)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ah()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bU()
u.a.bU()
u=u.e
if(!(u==null))u.ac(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fL()
t=t.e
if(!(t==null))t.ac(0)}r=b.d.cY(new Z.eB(a.a),w)
r.at($.$get$an()).e=this.a.y.c
if(z)r.at($.$get$aC()).e=this.a.Q.c
if(v)r.at($.$get$aB()).e=this.a.z.c
if(x.rx)r.at($.$get$aD()).e=this.a.ch.c
if(u)r.at($.$get$aE()).e=this.a.cx.c
if(x.x1)r.at($.$get$aA()).e=this.a.cy.c
b.e=r}z=T.ce
q=H.f([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.a9(u.a4(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gT(u)
t=a.dx
t=u.i(0,t.gT(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a9(u.a4(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghf()
t=a.dx
t=u.i(0,t.gT(t))
a.ch=t
u=t}v=v.fr
v.toString
v.a9(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a9(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a9(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a9(C.y.a4(u,!0))}if(x.aK>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.h(t,"$isaq")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bC(H.w(t.a4(0,!0),"$isc",v,"$asc")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.N(q,this.f.d)
v=this.a
u=this.f.d
v.ab(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.N(q,this.f.e)
v=this.a
u=this.f.e
v.a6(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.N(q,this.r.d)
v=this.a
u=this.r.d
v.ab(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.N(q,this.r.e)
v=this.a
u=this.r.e
v.a6(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.N(q,this.x.d)
v=this.a
u=this.x.d
v.ab(v.aK,v.aL,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.N(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.as,v.aL,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.h:v=this.a
u=this.y.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.N(q,this.y.d)
v=this.a
u=this.y.d
v.ab(v.d4,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.N(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.d5,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.h:v=this.a
u=this.z.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bh
u.a.uniform1f(u.d,s)
break
case C.c:this.N(q,this.z.d)
v=this.a
u=this.z.d
v.ab(v.d6,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break
case C.d:this.N(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.d7,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dj
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.bZ
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cj(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dk
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c_
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b3(j.gaZ(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gai(j)
g=i.d
h=t.gbr()
s=t.gb4()
t=t.gbb()
g.a.uniform3f(g.d,h,s,t)
t=j.gbP()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbQ()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbR()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dl
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c0
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbY(j).i6()
g=i.c
h=t.gaH(t)
s=t.gaI(t)
t=t.gaJ()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaZ(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gai(j)
s=i.e
h=t.gbr()
g=t.gb4()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gi5()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi4()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dm
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.c1
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb1()
H.w(q,"$isc",t,"$asc")
if(!C.a.aU(q,s)){s.saQ(q.length)
C.a.h(q,s)}s=j.gbY(j)
h=i.d
g=s.gaH(s)
f=s.gaI(s)
s=s.gaJ()
h.a.uniform3f(h.d,g,f,s)
s=j.gbs()
f=i.b
g=s.gaH(s)
h=s.gaI(s)
s=s.gaJ()
f.a.uniform3f(f.d,g,h,s)
s=j.gb_(j)
h=i.c
g=s.gaH(s)
f=s.gaI(s)
s=s.gaJ()
h.a.uniform3f(h.d,g,f,s)
s=m.cj(j.gbY(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gai(j)
g=i.f
f=h.gbr()
s=h.gb4()
h=h.gbb()
g.a.uniform3f(g.d,f,s,h)
h=j.gb1()
s=h.gdv(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcI()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaQ())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dn
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.c2
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb1()
H.w(q,"$isc",s,"$asc")
if(!C.a.aU(q,h)){h.saQ(q.length)
C.a.h(q,h)}e=m.i(0,j.gT(j))
h=j.gT(j).b3(new V.W(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcl(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b3(new V.W(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c5(0)
d=i.d
n=new Float32Array(H.bC(H.w(new V.cb(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gai(j)
h=i.e
f=d.gbr()
g=d.gb4()
d=d.gbb()
h.a.uniform3f(h.d,f,g,d)
d=j.gb1()
h=d.gdv(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcI()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaQ())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbP()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbQ()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbR()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb1()
H.w(q,"$isc",z,"$asc")
if(!C.a.aU(q,t)){t.saQ(q.length)
C.a.h(q,t)}t=j.gaZ(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbY(j)
g=i.c
h=t.gaH(t)
s=t.gaI(t)
t=t.gaJ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbs()
s=i.d
h=t.gaH(t)
g=t.gaI(t)
t=t.gaJ()
s.a.uniform3f(s.d,h,g,t)
t=j.gb_(j)
g=i.e
h=t.gaH(t)
s=t.gaI(t)
t=t.gaJ()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaZ(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb1()
s=t.gdv(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcI()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaQ())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gai(j)
s=i.y
h=t.gbr()
g=t.gb4()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gib()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gic()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.h:break
case C.c:this.N(q,this.Q.d)
z=this.a
v=this.Q.d
z.ab(z.d8,z.bi,v)
break
case C.d:this.N(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.d9,z.bi,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).c5(0)
a.Q=v}z=z.fy
z.toString
z.a9(v.a4(0,!0))}if(x.dy){this.N(q,this.ch)
z=this.a
v=this.ch
z.a6(z.da,z.dc,v)
switch(x.r){case C.b:break
case C.h:z=this.a
v=this.cx.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.N(q,this.cx.d)
z=this.a
v=this.cx.d
z.ab(z.dd,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.N(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.de,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.h:z=this.a
v=this.cy.f
z=z.bm
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bl
v.a.uniform1f(v.d,t)
break
case C.c:this.N(q,this.cy.d)
z=this.a
v=this.cy.d
z.ab(z.df,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break
case C.d:this.N(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dg,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.h:z=this.a
u=this.db.f
z=z.bo
z.a.uniform1f(z.d,u)
break
case C.c:this.N(q,this.db.d)
z=this.a
u=this.db.d
z.ab(z.dh,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break
case C.d:this.N(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.di,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.W(a)
z.a3(a)
z.ad(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d1()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cD().as},
t:{
dS:function(){var z,y,x,w
z=new O.hf()
y=O.cy(V.aq)
z.e=y
y.aP(z.gev(),z.gew())
y=new O.aR(z,"emission")
y.c=C.b
y.f=new V.V(0,0,0)
z.f=y
y=new O.aR(z,"ambient")
y.c=C.b
y.f=new V.V(0,0,0)
z.r=y
y=new O.aR(z,"diffuse")
y.c=C.b
y.f=new V.V(0,0,0)
z.x=y
y=new O.aR(z,"invDiffuse")
y.c=C.b
y.f=new V.V(0,0,0)
z.y=y
y=new O.hk(z,"specular")
y.c=C.b
y.f=new V.V(0,0,0)
y.ch=100
z.z=y
y=new O.hh(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.aR(z,"reflect")
y.c=C.b
y.f=new V.V(0,0,0)
z.cx=y
y=new O.hj(z,"refract")
y.c=C.b
y.f=new V.V(0,0,0)
y.ch=1
z.cy=y
y=new O.hg(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.fZ()
y.b6(D.X)
y.e=H.f([],[D.c5])
y.f=H.f([],[D.hy])
y.r=H.f([],[D.hZ])
y.x=H.f([],[D.i8])
y.y=H.f([],[D.i9])
y.z=H.f([],[D.ia])
y.Q=null
y.ch=null
y.cm(y.geu(),y.geN(),y.geP())
z.dx=y
x=y.Q
if(x==null){x=D.D()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.m]}
w=H.b(z.geZ(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.D()
w.ch=y}x=H.b(z.gaz(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},hg:{"^":"cM;0f,a,b,0c,0d,0e"},cM:{"^":"a;",
R:[function(a){this.a.R(H.h(a,"$ism"))},function(){return this.R(null)},"ct","$1","$0","gaz",0,2,0],
aR:["dV",function(){}],
f4:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gaz(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gaz(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.A(this.b+".texture2D",x,this.d,this,[T.e9])
z.b=!0
this.a.R(z)}},
f5:function(a){}},hh:{"^":"cM;a,b,0c,0d,0e"},aR:{"^":"cM;0f,a,b,0c,0d,0e",
cP:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.R(y)}},
aR:["bu",function(){this.dV()
this.cP(new V.V(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aR()
z=this.a
z.a=null
z.R(null)}this.cP(b)}},hj:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
f3:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.R(z)}},
aR:function(){this.bu()
this.f3(1)}},hk:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
bL:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.R(z)}},
aR:function(){this.bu()
this.bL(100)}},hW:{"^":"bR;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
R:[function(a){var z
H.h(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.R(null)},"ct","$1","$0","gaz",0,2,0],
dC:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.k(0,"Skybox"),"$ise4")
if(z==null){y=a.a
z=new A.e4(y,"Skybox")
z.cq(y,"Skybox")
z.ds(0,$.hY,$.hX)
z.x=z.f.k(0,"posAttr")
z.y=H.d(z.r.k(0,"fov"),"$isS")
z.z=H.d(z.r.k(0,"ratio"),"$isS")
z.Q=H.d(z.r.k(0,"boxClr"),"$isG")
z.ch=H.d(z.r.k(0,"boxTxt"),"$isaa")
z.cx=H.d(z.r.k(0,"viewMat"),"$isay")
a.cV(z)}this.a=z}if(b.e==null){y=b.d.cY(new Z.eB(a.a),$.$get$an())
y.at($.$get$an()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.dR(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).c5(0)
w=w.cx
w.toString
w.a9(x.a4(0,!0))
y=b.e
if(y instanceof Z.cv){y.W(a)
y.a3(a)
y.ad(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d1()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bR:{"^":"a;"}}],["","",,T,{"^":"",ce:{"^":"cs;"},e9:{"^":"ce;0b,0c,0d,0e,0f,0r,0x,0y,a",t:{
ea:function(a,b){var z=new T.e9(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.D()
return z}}},eb:{"^":"ce;0b,0c,0d,0e,a"},i6:{"^":"a;a,0b,0c,0d,0e",
aC:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.Y(z,"load",H.b(new T.i7(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f0:function(a,b,c){var z,y,x,w
b=V.bH(b,2)
z=V.bH(a.width,2)
y=V.bH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cx(null,null)
x.width=z
x.height=y
w=H.h(C.k.dM(x,"2d"),"$isdq")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kk(w.getImageData(0,0,x.width,x.height))}}},i7:{"^":"u:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f0(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.ho(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d3();++z.e}}}],["","",,X,{"^":"",fj:{"^":"cd;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gq:function(){var z=this.db
if(z==null){z=D.D()
this.db=z}return z},
al:function(a){var z=this.db
if(!(z==null))z.A(a)},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Z(z.getParameter(3379))
u=V.bH(x,2)
t=V.bH(w,2)
v=V.bH(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dF(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.ea(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.d3()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=this.y
x=y.b
this.r=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.x=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.f=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.r,0)
z.framebufferRenderbuffer(36160,36096,36161,this.x)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.f)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.cy
y=z.c
a.c=C.f.U(y*this.a)
x=z.d
a.d=C.f.U(x*this.b)
w=this.c
q=C.f.U(z.a*w)
p=this.d
o=C.f.U(z.b*p)
n=C.f.U(y*w)
m=C.f.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
ad:function(a){a.a.bindFramebuffer(36160,null)}},c2:{"^":"a;",$isau:1},fP:{"^":"cd;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
W:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.f.U(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.U(w.b*x)
t=C.f.U(w.c*y)
a.c=t
w=C.f.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
ad:function(a){},
t:{
dE:function(a,b,c,d,e,f,g){var z,y
z=new X.fP()
y=new V.ap(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cT(0,0,1,1)
z.r=y
return z}}},fR:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
W:function(a){var z
a.cy.bq(V.aS())
z=V.aS()
a.db.bq(z)},
ad:function(a){a.cy.av()
a.db.av()},
$isau:1,
$isc2:1},hw:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
al:[function(a){var z
H.h(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.al(null)},"hw","$1","$0","ge5",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bq(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e_
if(z==null){z=V.dT(new V.W(0,0,0),new V.C(0,1,0),new V.C(0,0,-1))
$.e_=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aw(0,a,this)
if(q!=null)r=q.i(0,r)}a.db.bq(r)},
ad:function(a){a.cy.av()
a.db.av()},
$isau:1,
$isc2:1,
t:{
cQ:function(a,b,c,d){var z,y,x,w
z=new X.hw()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gq()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.m]})
C.a.h(x.a,w)}x=new D.A("mover",y,z.a,z,[U.a3])
x.b=!0
z.al(x)}x=z.b
if(!$.l.$2(x,b)){y=z.b
z.b=b
x=new D.A("fov",y,b,z,[P.t])
x.b=!0
z.al(x)}x=z.c
if(!$.l.$2(x,d)){y=z.c
z.c=d
x=new D.A("near",y,d,z,[P.t])
x.b=!0
z.al(x)}x=z.d
if(!$.l.$2(x,a)){y=z.d
z.d=a
x=new D.A("far",y,a,z,[P.t])
x.b=!0
z.al(x)}return z}}},cd:{"^":"a;"}}],["","",,B,{"^":"",
kI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.f2(x,(x&&C.m).cw(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a6
W.Y(z,"scroll",H.b(new B.kJ(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.o],"$asc")
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
u=W.cx(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.h(v.insertCell(-1),"$isbs")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.h(q.insertCell(-1),"$isbs").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.i(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.h(q.insertCell(-1),"$isbs")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.h(q.insertCell(-1),"$isbs")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.h(q.insertCell(-1),"$isbs").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kI(a,y,!1,"../resources/SnowTop.png")},
kL:function(a){P.ie(C.v,new B.kM(a))},
kJ:{"^":"u:23;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.j(-0.05*C.e.U(this.b.scrollTop))+"px"
z.top=y}},
kM:{"^":"u:38;a",
$1:function(a){H.h(a,"$isaV")
P.dg(C.e.dH(this.a.gfV(),2)+" fps")}}}],["","",,V,{"^":"",
f6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
B.kK("Test 027",H.f([],[P.o]),"Test of a back buffer target for rendering to a texture. That back buffer texture is applied to a box.")
z=document.getElementById("threeDart")
if(z==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
y=E.ic(z,!0,!0,!0,!1)
x=U.dG(null)
w=new U.e2()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.sdI(0)
w.sdB(0,0)
w.sdD(0)
v=w.d
if(!$.l.$2(v,0.1)){u=w.d
w.d=0.1
v=new D.A("deltaYaw",u,0.1,w,[P.t])
v.b=!0
w.F(v)}v=w.e
if(!$.l.$2(v,0.21)){u=w.e
w.e=0.21
v=new D.A("deltaPitch",u,0.21,w,[P.t])
v.b=!0
w.F(v)}v=w.f
if(!$.l.$2(v,0.32)){u=w.f
w.f=0.32
v=new D.A("deltaRoll",u,0.32,w,[P.t])
v.b=!0
w.F(v)}x.h(0,w)
x.h(0,U.cA(V.dX(0,0,5)))
t=X.cQ(2000,1.0471975511965976,x,0.1)
s=new X.fj()
s.a=512
s.b=512
s.c=512
s.d=512
s.e=!0
s.y=T.ea(0,null)
s.z=new V.ap(0,0,0,1)
s.Q=!0
s.ch=2000
s.cx=!0
s.cy=V.cT(0,0,1,1)
s.Q=!1
w=[P.ai]
v=new D.A("clearColor",!0,!1,s,w)
v.b=!0
s.al(v)
v=y.f
r=v.a
q=r.createTexture()
r.bindTexture(34067,q)
r.texParameteri(34067,10242,10497)
r.texParameteri(34067,10243,10497)
r.texParameteri(34067,10241,9729)
r.texParameteri(34067,10240,9729)
r.bindTexture(34067,null)
p=new T.eb(0)
p.b=q
p.c=!1
p.d=0
p.e=D.D()
v.aC(p,q,"../resources/maskonaive/posx.jpg",34069,!1,!1)
v.aC(p,q,"../resources/maskonaive/negx.jpg",34070,!1,!1)
v.aC(p,q,"../resources/maskonaive/posy.jpg",34071,!1,!1)
v.aC(p,q,"../resources/maskonaive/negy.jpg",34072,!1,!1)
v.aC(p,q,"../resources/maskonaive/posz.jpg",34073,!1,!1)
v.aC(p,q,"../resources/maskonaive/negz.jpg",34074,!1,!1)
o=new M.fv()
o.saF(null)
o.sb0(0,null)
o.saO(null)
v=E.cC(null,!0,null,"",null,null)
n=F.cX()
r=n.a
m=new V.C(-1,-1,1)
m=m.v(0,Math.sqrt(m.C(m)))
l=r.ba(new V.aT(1,2,4,6),new V.ap(1,0,0,1),new V.W(-1,-1,0),new V.O(0,1),m,null)
r=n.a
m=new V.C(1,-1,1)
m=m.v(0,Math.sqrt(m.C(m)))
k=r.ba(new V.aT(0,3,4,6),new V.ap(0,0,1,1),new V.W(1,-1,0),new V.O(1,1),m,null)
r=n.a
m=new V.C(1,1,1)
m=m.v(0,Math.sqrt(m.C(m)))
j=r.ba(new V.aT(0,2,5,6),new V.ap(0,1,0,1),new V.W(1,1,0),new V.O(1,0),m,null)
r=n.a
m=new V.C(-1,1,1)
m=m.v(0,Math.sqrt(m.C(m)))
i=r.ba(new V.aT(0,2,4,7),new V.ap(1,1,0,1),new V.W(-1,1,0),new V.O(0,0),m,null)
n.d.fG(H.f([l,k,j,i],[F.ag]))
n.ah()
v.sb5(0,n)
o.d=v
o.e=null
v=new O.hW()
v.b=1.0471975511965976
u=v.c
v.c=p
r=p.e
m=H.b(v.gaz(),{func:1,ret:-1,args:[D.m]})
C.a.h(r.a,m)
r=new D.A("boxTexture",u,v.c,v,[T.eb])
r.b=!0
v.R(r)
h=new V.V(1,1,1)
if(!J.M(v.d,h)){u=v.d
v.d=h
r=new D.A("boxColor",u,h,v,[V.V])
r.b=!0
v.R(r)}v.e=null
o.saO(v)
o.sb0(0,s)
o.saF(t)
g=E.cC(null,!0,null,"",null,null)
g.sb5(0,F.kP(30,1,15,0.5))
f=O.dS()
v=f.dx
r=U.cA(V.dT(new V.W(0,0,0),new V.C(0,1,0),new V.C(0,-1,-1)))
h=new V.V(1,1,1)
m=new D.c5()
m.c=new V.V(1,1,1)
m.a=new V.C(0,0,1)
u=m.b
m.b=r
r=r.gq()
r.toString
e=H.b(m.ge1(),{func:1,ret:-1,args:[D.m]})
C.a.h(r.a,e)
r=new D.A("mover",u,m.b,m,[U.a3])
r.b=!0
m.ay(r)
if(!m.c.u(0,h)){u=m.c
m.c=h
r=new D.A("color",u,h,m,[V.V])
r.b=!0
m.ay(r)}v.h(0,m)
v=f.r
v.sai(0,new V.V(0,0,1))
v=f.x
v.sai(0,new V.V(0,1,0))
v=f.z
v.sai(0,new V.V(1,0,0))
v=f.z
if(v.c===C.b){v.c=C.h
v.bu()
v.bL(100)
r=v.a
r.a=null
r.R(null)}v.bL(10)
d=M.dC(null,null,null,null)
d.saF(t)
d.saO(f)
d.sb0(0,s)
d.d.h(0,g)
c=U.dG(null)
v=y.r
r=new U.iz()
m=U.cz()
m.sck(0,!0)
m.sc8(6.283185307179586)
m.scb(0)
m.sa_(0,0)
m.sc9(100)
m.sM(0)
m.sbX(0.5)
r.b=m
m=m.gq()
m.toString
e={func:1,ret:-1,args:[D.m]}
b=H.b(r.gaD(),e)
C.a.h(m.a,b)
m=U.cz()
m.sck(0,!0)
m.sc8(6.283185307179586)
m.scb(0)
m.sa_(0,0)
m.sc9(100)
m.sM(0)
m.sbX(0.5)
r.c=m
C.a.h(m.gq().a,b)
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
a=new X.as(!1,!1,!1)
u=r.d
r.d=a
m=[X.as]
b=new D.A("modifiers",u,a,r,m)
b.b=!0
r.F(b)
b=r.f
if(b!==!1){r.f=!1
b=new D.A("invertX",b,!1,r,w)
b.b=!0
r.F(b)}b=r.r
if(b!==!1){r.r=!1
w=new D.A("invertY",b,!1,r,w)
w.b=!0
r.F(w)}r.aT(v)
c.h(0,r)
w=y.r
v=new U.iy()
r=U.cz()
r.sck(0,!0)
r.sc8(6.283185307179586)
r.scb(0)
r.sa_(0,0)
r.sc9(100)
r.sM(0)
r.sbX(0.2)
v.b=r
r=r.gq()
r.toString
b=H.b(v.gaD(),e)
C.a.h(r.a,b)
v.c=null
v.d=!1
v.e=2.5
v.f=2
v.r=4
v.y=!1
v.x=!1
v.z=0
v.Q=null
v.ch=0
v.cx=null
v.cy=null
a=new X.as(!0,!1,!1)
u=v.c
v.c=a
r=new D.A("modifiers",u,a,v,m)
r.b=!0
v.F(r)
v.aT(w)
c.h(0,v)
w=y.r
v=new U.iA()
v.c=0.01
v.d=0
v.e=0
a=new X.as(!1,!1,!1)
v.b=a
r=new D.A("modifiers",null,a,v,m)
r.b=!0
v.F(r)
v.aT(w)
c.h(0,v)
c.h(0,U.cA(V.dX(0,0,5)))
a0=X.cQ(2000,1.0471975511965976,c,0.1)
a1=E.cC(null,!0,null,"",null,null)
n=F.cX()
F.bB(n,null,null,1,1,1,0,0,1)
F.bB(n,null,null,1,1,0,1,0,3)
F.bB(n,null,null,1,1,0,0,1,2)
F.bB(n,null,null,1,1,-1,0,0,0)
F.bB(n,null,null,1,1,0,-1,0,0)
F.bB(n,null,null,1,1,0,0,-1,3)
n.ah()
a1.sb5(0,n)
a2=O.dS()
w=a2.f
v=s.y
r=w.c
if(r!==C.c){if(r===C.b)w.aR()
w.c=C.c
w.f5(null)
r=w.a
r.a=null
r.R(null)}w.f4(v)
a3=M.dC(null,null,null,null)
a3.saF(a0)
a3.saO(a2)
a3.d.h(0,a1)
w=M.av
v=H.f([o,d,a3],[w])
r=new M.ft()
r.b6(w)
r.e=!1
r.f=null
r.aP(r.geQ(),r.geR())
r.bO(0,v)
w=y.d
if(w!==r){if(w!=null){w=w.gq()
w.toString
v=H.b(y.gcr(),e)
C.a.H(w.a,v)}y.d=r
w=r.gq()
w.toString
e=H.b(y.gcr(),e)
C.a.h(w.a,e)
y.e_()}B.kL(y)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.ca.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.bL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.bW=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(a.constructor==Array)return J.bL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.dc=function(a){if(a==null)return a
if(a.constructor==Array)return J.bL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.kp=function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cg.prototype
return a}
J.kq=function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cg.prototype
return a}
J.bX=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kp(a).af(a,b)}
J.dh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kq(a).i(a,b)}
J.fd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).k(a,b)}
J.fe=function(a,b,c,d){return J.bX(a).cU(a,b,c,d)}
J.cr=function(a,b,c){return J.bW(a).fN(a,b,c)}
J.di=function(a,b){return J.dc(a).E(a,b)}
J.ff=function(a,b){return J.dc(a).L(a,b)}
J.aH=function(a){return J.J(a).gS(a)}
J.c_=function(a){return J.dc(a).gX(a)}
J.b6=function(a){return J.bW(a).gl(a)}
J.a5=function(a){return J.J(a).j(a)}
var $=I.p
C.k=W.cw.prototype
C.m=W.fw.prototype
C.w=J.n.prototype
C.a=J.bL.prototype
C.x=J.dJ.prototype
C.f=J.dK.prototype
C.y=J.dL.prototype
C.e=J.bM.prototype
C.i=J.ca.prototype
C.F=J.bN.prototype
C.G=W.hr.prototype
C.p=J.hx.prototype
C.q=P.cU.prototype
C.l=J.cg.prototype
C.r=W.by.prototype
C.t=W.iO.prototype
C.u=new P.hu()
C.j=new P.jz()
C.b=new A.c3(0,"ColorSourceType.None")
C.h=new A.c3(1,"ColorSourceType.Solid")
C.c=new A.c3(2,"ColorSourceType.Texture2D")
C.d=new A.c3(3,"ColorSourceType.TextureCube")
C.v=new P.ba(5e6)
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
C.n=function(hooks) { return hooks; }

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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.ao=0
$.b7=null
$.dl=null
$.d5=!1
$.f3=null
$.eY=null
$.f9=null
$.cm=null
$.co=null
$.dd=null
$.b_=null
$.bD=null
$.bE=null
$.d6=!1
$.P=C.j
$.dz=null
$.dy=null
$.dx=null
$.dw=null
$.l=V.hl()
$.hY="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.hX="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e_=null
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
I.$lazy(y,x,w)}})(["dv","$get$dv",function(){return H.f2("_$dart_dartClosure")},"cG","$get$cG",function(){return H.f2("_$dart_js")},"ef","$get$ef",function(){return H.aw(H.cf({
toString:function(){return"$receiver$"}}))},"eg","$get$eg",function(){return H.aw(H.cf({$method$:null,
toString:function(){return"$receiver$"}}))},"eh","$get$eh",function(){return H.aw(H.cf(null))},"ei","$get$ei",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.aw(H.cf(void 0))},"en","$get$en",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.aw(H.el(null))},"ej","$get$ej",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.aw(H.el(void 0))},"eo","$get$eo",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d2","$get$d2",function(){return P.iP()},"bF","$get$bF",function(){return[]},"du","$get$du",function(){return{}},"ez","$get$ez",function(){return Z.ah(0)},"ex","$get$ex",function(){return Z.ah(511)},"an","$get$an",function(){return Z.ah(1)},"aC","$get$aC",function(){return Z.ah(2)},"aB","$get$aB",function(){return Z.ah(4)},"aD","$get$aD",function(){return Z.ah(8)},"aE","$get$aE",function(){return Z.ah(16)},"bw","$get$bw",function(){return Z.ah(32)},"bx","$get$bx",function(){return Z.ah(64)},"ey","$get$ey",function(){return Z.ah(96)},"aY","$get$aY",function(){return Z.ah(128)},"aA","$get$aA",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.m]},{func:1,ret:-1,args:[D.m]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.I,args:[F.ae]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.L,[P.e,E.az]]},{func:1,ret:P.I,args:[D.m]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.o,args:[P.L]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[P.L,[P.e,D.X]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.L,[P.e,U.a3]]},{func:1,ret:-1,args:[P.L,[P.e,M.av]]},{func:1,ret:P.I,args:[F.ag,P.t,P.t]},{func:1,ret:-1,args:[P.L,[P.e,V.aq]]},{func:1,ret:P.I,args:[W.a6]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.ai,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[P.T]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.m]}]},{func:1,ret:-1,args:[P.a],opt:[P.am]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.ai,args:[P.t,P.t]},{func:1,ret:P.ai,args:[[P.e,D.X]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:V.W,args:[P.t]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.I,args:[P.aV]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.kO(d||a)
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
Isolate.da=a.da
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
if(typeof dartMainRunner==="function")dartMainRunner(V.f6,[])
else V.f6([])})})()
//# sourceMappingURL=test.dart.js.map
