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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ism)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.de(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.df=function(){}
var dart=[["","",,H,{"^":"",lr:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cn:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.di==null){H.kf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.eq("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.kk(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gU:function(a){return H.bk(a)},
i:["dM",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fM:{"^":"m;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isa8:1},
dN:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isH:1},
cH:{"^":"m;",
gU:function(a){return 0},
i:["dN",function(a){return String(a)}]},
hm:{"^":"cH;"},
d5:{"^":"cH;"},
bL:{"^":"cH;",
i:function(a){var z=a[$.$get$dz()]
if(z==null)return this.dN(a)
return"JavaScript function for "+H.i(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscB:1},
bK:{"^":"m;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
aP:function(a,b){var z,y
H.w(b,"$isc",[H.y(a,0)],"$asc")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b7(a))}},
Y:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.X(z,y,H.i(a[y]))
return z.join(b)},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gc5:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fK())},
aS:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cD(a,"[","]")},
gW:function(a){return new J.ae(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bk(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bZ(b,"newLength",null))
if(b<0)throw H.j(P.bl(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.Z(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bS(a,b))
if(b>=a.length||b<0)throw H.j(H.bS(a,b))
a[b]=c},
$isc:1,
$isf:1,
t:{
fL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bl(a,0,4294967295,"length",null))
return J.dK(new Array(a),b)},
dK:function(a,b){return J.be(H.e(a,[b]))},
be:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
lq:{"^":"bK;$ti"},
ae:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ca:{"^":"m;",
hg:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ad(""+a+".toInt()"))},
c3:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ad(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ad(""+a+".round()"))},
dD:function(a,b){var z,y
if(b>20)throw H.j(P.bl(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
dJ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ad("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
cM:function(a,b){var z
if(a>0)z=this.f_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f_:function(a,b){return b>31?0:a>>>b},
ae:function(a,b){if(typeof b!=="number")throw H.j(H.cl(b))
return a<b},
$isv:1,
$isT:1},
dM:{"^":"ca;",$isM:1},
dL:{"^":"ca;"},
cF:{"^":"m;",
e5:function(a,b){if(b>=a.length)throw H.j(H.bS(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.U(b)
if(typeof b!=="string")throw H.j(P.bZ(b,null,null))
return a+b},
cn:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cU(b,null,null))
if(c>a.length)throw H.j(P.cU(c,null,null))
return a.substring(b,c)},
cm:function(a,b){return this.cn(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fY:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a7:function(a,b){return this.fY(a,b," ")},
fA:function(a,b,c){if(c>a.length)throw H.j(P.bl(c,0,a.length,null,null))
return H.kw(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ishk:1,
$iso:1}}],["","",,H,{"^":"",
fK:function(){return new P.hO("No element")},
fx:{"^":"c;"},
fW:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bU(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b7(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
h1:{"^":"c;a,b,$ti",
gW:function(a){return new H.h2(J.bY(this.a),this.b,this.$ti)},
gk:function(a){return J.b5(this.a)},
C:function(a,b){return this.b.$1(J.dn(this.a,b))},
$asc:function(a,b){return[b]}},
h2:{"^":"cE;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascE:function(a,b){return[b]}},
iy:{"^":"c;a,b,$ti",
gW:function(a){return new H.iz(J.bY(this.a),this.b,this.$ti)}},
iz:{"^":"cE;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
c7:{"^":"a;$ti"}}],["","",,H,{"^":"",
ka:function(a){return init.types[H.Z(a)]},
ki:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isB},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.j(H.cl(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.I(a).$isd5){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.e5(w,0)===36)w=C.h.cm(w,1)
r=H.dj(H.bW(H.aM(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hu:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
hs:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
ho:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
hp:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
hr:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
ht:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hq:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
p:function(a){throw H.j(H.cl(a))},
k:function(a,b){if(a==null)J.b5(a)
throw H.j(H.bS(a,b))},
bS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.Z(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.cU(b,"index",null)},
cl:function(a){return new P.aH(!0,a,null,null)},
k2:function(a){if(typeof a!=="number")throw H.j(H.cl(a))
return a},
j:function(a){var z
if(a==null)a=new P.dY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f4})
z.name=""}else z.toString=H.f4
return z},
f4:function(){return J.a4(this.dartException)},
r:function(a){throw H.j(a)},
z:function(a){throw H.j(P.b7(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cJ(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dX(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e9()
u=$.$get$ea()
t=$.$get$eb()
s=$.$get$ec()
r=$.$get$eg()
q=$.$get$eh()
p=$.$get$ee()
$.$get$ed()
o=$.$get$ej()
n=$.$get$ei()
m=v.a6(y)
if(m!=null)return z.$1(H.cJ(H.U(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cJ(H.U(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dX(H.U(y),m))}}return z.$1(new H.ij(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e2()
return a},
b3:function(a){var z
if(a==null)return new H.eI(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eI(a)},
k8:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
kh:function(a,b,c,d,e,f){H.h(a,"$iscB")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.q("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kh)
a.$identity=z
return z},
fj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isf){z.$reflectionInfo=d
x=H.hw(z).r}else x=d
w=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.cs(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ao
if(typeof u!=="number")return u.E()
$.ao=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dx(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ka,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ds:H.ct
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dx(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fg:function(a,b,c,d){var z=H.ct
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dx:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fg(y,!w,z,b)
if(y===0){w=$.ao
if(typeof w!=="number")return w.E()
$.ao=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ao
if(typeof w!=="number")return w.E()
$.ao=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fh:function(a,b,c,d){var z,y
z=H.ct
y=H.ds
switch(b?-1:a){case 0:throw H.j(H.hE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fi:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.c_("self")
$.b6=z}y=$.dr
if(y==null){y=H.c_("receiver")
$.dr=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.ao
if(typeof y!=="number")return y.E()
$.ao=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.ao
if(typeof y!=="number")return y.E()
$.ao=y+1
return new Function(z+y+"}")()},
de:function(a,b,c,d,e,f,g){var z,y
z=J.be(H.bW(b))
H.Z(c)
y=!!J.I(d).$isf?J.be(d):d
return H.fj(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.au(a,"String"))},
kn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.au(a,"num"))},
eV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.au(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.au(a,"int"))},
f2:function(a,b){throw H.j(H.au(a,H.U(b).substring(3)))},
kp:function(a,b){var z=J.bU(b)
throw H.j(H.ff(a,z.cn(b,3,z.gk(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f2(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kp(a,b)},
bW:function(a){if(a==null)return a
if(!!J.I(a).$isf)return a
throw H.j(H.au(a,"List"))},
kj:function(a,b){if(a==null)return a
if(!!J.I(a).$isf)return a
if(J.I(a)[b])return a
H.f2(a,b)},
eW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bT:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eW(J.I(a))
if(z==null)return!1
y=H.eZ(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.da)return a
$.da=!0
try{if(H.bT(a,b))return a
z=H.bX(b)
y=H.au(a,z)
throw H.j(y)}finally{$.da=!1}},
dg:function(a,b){if(a!=null&&!H.dd(a,b))H.r(H.au(a,H.bX(b)))
return a},
eQ:function(a){var z
if(a instanceof H.u){z=H.eW(J.I(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aS(a)},
ky:function(a){throw H.j(new P.fp(H.U(a)))},
eX:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aM:function(a){if(a==null)return
return a.$ti},
mo:function(a,b,c){return H.b4(a["$as"+H.i(c)],H.aM(b))},
bE:function(a,b,c,d){var z
H.U(c)
H.Z(d)
z=H.b4(a["$as"+H.i(c)],H.aM(b))
return z==null?null:z[d]},
aw:function(a,b,c){var z
H.U(b)
H.Z(c)
z=H.b4(a["$as"+H.i(b)],H.aM(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Z(b)
z=H.aM(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aN(a,null)
return z},
aN:function(a,b){var z,y
H.w(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dj(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.i(b[y])}if('func' in a)return H.jT(a,b)
if('futureOr' in a)return"FutureOr<"+H.aN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.E(t,b[r])
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
for(z=H.k7(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aN(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dj:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.bP("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aN(u,c)}v="<"+z.i(0)+">"
return v},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aM(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eT(H.b4(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.U(b)
H.bW(c)
H.U(d)
if(a==null)return a
z=H.b0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dj(c,0,null)
throw H.j(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eT:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mm:function(a,b,c){return a.apply(b,H.b4(J.I(b)["$as"+H.i(c)],H.aM(b)))},
f_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.f_(z)}return!1},
dd:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.f_(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bT(a,b)}y=J.I(a).constructor
x=H.aM(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.dd(a,b))throw H.j(H.au(a,H.bX(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b4(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bX(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eT(H.b4(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.km(m,b,l,d)},
km:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mn:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
kk:function(a){var z,y,x,w,v,u
z=H.U($.eY.$1(a))
y=$.cm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.eS.$2(a,z))
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
return u.i}if(v==="+")return H.f1(a,x)
if(v==="*")throw H.j(P.eq(z))
if(init.leafTags[z]===true){u=H.cp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f1(a,x)},
f1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dk(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cp:function(a){return J.dk(a,!1,null,!!a.$isB)},
kl:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cp(z)
else return J.dk(z,c,null,null)},
kf:function(){if(!0===$.di)return
$.di=!0
H.kg()},
kg:function(){var z,y,x,w,v,u,t,s
$.cm=Object.create(null)
$.co=Object.create(null)
H.kb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f3.$1(v)
if(u!=null){t=H.kl(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kb:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.b_(C.y,H.b_(C.D,H.b_(C.n,H.b_(C.n,H.b_(C.C,H.b_(C.z,H.b_(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eY=new H.kc(v)
$.eS=new H.kd(u)
$.f3=new H.ke(t)},
b_:function(a,b){return a(b)||b},
kw:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hv:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hw:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.be(z)
y=z[0]
x=z[1]
return new H.hv(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i6:{"^":"a;a,b,c,d,e,f",
a6:function(a){var z,y,x
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
at:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ef:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hi:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dX:function(a,b){return new H.hi(a,b==null?null:b.method)}}},
fN:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
t:{
cJ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fN(a,y,z?null:b.receiver)}}},
ij:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kz:{"^":"u:15;a",
$1:function(a){if(!!J.I(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eI:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isam:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gdF:function(){return this},
$iscB:1,
gdF:function(){return this}},
e5:{"^":"u;"},
hQ:{"^":"e5;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cs:{"^":"e5;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aG(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
t:{
ct:function(a){return a.a},
ds:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cs("self","target","receiver","name")
y=J.be(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i7:{"^":"Y;a",
i:function(a){return this.a},
t:{
au:function(a,b){return new H.i7("TypeError: "+H.i(P.c6(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
fe:{"^":"Y;a",
i:function(a){return this.a},
t:{
ff:function(a,b){return new H.fe("CastError: "+H.i(P.c6(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
hD:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
t:{
hE:function(a){return new H.hD(a)}}},
cI:{"^":"h_;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gar:function(a){return new H.fR(this,[H.y(this,0)])},
fB:function(a,b){var z=this.b
if(z==null)return!1
return this.e8(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b4(w,b)
x=y==null?null:y.b
return x}else return this.fM(b)},
fM:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cF(z,J.aG(a)&0x3ffffff)
x=this.dm(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bF()
this.b=z}this.cs(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bF()
this.c=y}this.cs(y,b,c)}else{x=this.d
if(x==null){x=this.bF()
this.d=x}w=J.aG(b)&0x3ffffff
v=this.cF(x,w)
if(v==null)this.bL(x,w,[this.bG(b,c)])
else{u=this.dm(v,b)
if(u>=0)v[u].b=c
else v.push(this.bG(b,c))}}},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b7(this))
z=z.c}},
cs:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.b4(a,b)
if(z==null)this.bL(a,b,this.bG(b,c))
else z.b=c},
eg:function(){this.r=this.r+1&67108863},
bG:function(a,b){var z,y
z=new H.fQ(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eg()
return z},
dm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dS(this)},
b4:function(a,b){return a[b]},
cF:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
eb:function(a,b){delete a[b]},
e8:function(a,b){return this.b4(a,b)!=null},
bF:function(){var z=Object.create(null)
this.bL(z,"<non-identifier-key>",z)
this.eb(z,"<non-identifier-key>")
return z},
$isdQ:1},
fQ:{"^":"a;a,b,0c,0d"},
fR:{"^":"fx;a,$ti",
gk:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.fS(z,z.r,this.$ti)
y.c=z.e
return y}},
fS:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kc:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kd:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
ke:{"^":"u:27;a",
$1:function(a){return this.a(H.U(a))}}}],["","",,H,{"^":"",
k7:function(a){return J.dK(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ko:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bS(b,a))},
hg:{"^":"m;",$ism5:1,"%":"DataView;ArrayBufferView;cR|eC|eD|hf|eE|eF|aK"},
cR:{"^":"hg;",
gk:function(a){return a.length},
$isB:1,
$asB:I.df},
hf:{"^":"eD;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$asc7:function(){return[P.v]},
$ast:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eF;",
$asc7:function(){return[P.M]},
$ast:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]},
$isf:1,
$asf:function(){return[P.M]}},
lB:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lC:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lD:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lE:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lF:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lG:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lH:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eC:{"^":"cR+t;"},
eD:{"^":"eC+c7;"},
eE:{"^":"cR+t;"},
eF:{"^":"eE+c7;"}}],["","",,P,{"^":"",
iB:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k_()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.iD(z),1)).observe(y,{childList:true})
return new P.iC(z,y,x)}else if(self.setImmediate!=null)return P.k0()
return P.k1()},
mb:[function(a){self.scheduleImmediate(H.b1(new P.iE(H.b(a,{func:1,ret:-1})),0))},"$1","k_",4,0,11],
mc:[function(a){self.setImmediate(H.b1(new P.iF(H.b(a,{func:1,ret:-1})),0))},"$1","k0",4,0,11],
md:[function(a){H.b(a,{func:1,ret:-1})
P.jz(0,a)},"$1","k1",4,0,11],
e7:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aU]})
z=C.f.a_(a.a,1000)
return P.jA(z<0?0:z,b)},
jW:function(a,b){if(H.bT(a,{func:1,args:[P.a,P.am]}))return b.h6(a,null,P.a,P.am)
if(H.bT(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jV:function(){var z,y
for(;z=$.aZ,z!=null;){$.bC=null
y=z.b
$.aZ=y
if(y==null)$.bB=null
z.a.$0()}},
ml:[function(){$.db=!0
try{P.jV()}finally{$.bC=null
$.db=!1
if($.aZ!=null)$.$get$d7().$1(P.eU())}},"$0","eU",0,0,3],
eP:function(a){var z=new P.ew(H.b(a,{func:1,ret:-1}))
if($.aZ==null){$.bB=z
$.aZ=z
if(!$.db)$.$get$d7().$1(P.eU())}else{$.bB.b=z
$.bB=z}},
jZ:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.eP(a)
$.bC=$.bB
return}y=new P.ew(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
kq:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.j===y){P.ck(null,null,C.j,a)
return}y.toString
P.ck(null,null,y,H.b(y.cS(a),z))},
i4:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.e7(a,b)}x=y.cT(b,P.aU)
$.P.toString
return P.e7(a,H.b(x,z))},
cj:function(a,b,c,d,e){var z={}
z.a=d
P.jZ(new P.jX(z,e))},
eN:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eO:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
jY:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
ck:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cS(d):c.fw(d,-1)
P.eP(d)},
iD:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iC:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iE:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iF:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eL:{"^":"a;a,0b,c",
dX:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.jC(this,b),0),a)
else throw H.j(P.ad("`setTimeout()` not found."))},
dY:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b1(new P.jB(this,a,Date.now(),b),0),a)
else throw H.j(P.ad("Periodic timer."))},
$isaU:1,
t:{
jz:function(a,b){var z=new P.eL(!0,0)
z.dX(a,b)
return z},
jA:function(a,b){var z=new P.eL(!1,0)
z.dY(a,b)
return z}}},
jC:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jB:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dO(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
fR:function(a){if(this.c!==6)return!0
return this.b.b.cd(H.b(this.d,{func:1,ret:P.a8,args:[P.a]}),a.a,P.a8,P.a)},
fK:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bT(z,{func:1,args:[P.a,P.am]}))return H.dg(w.ha(z,a.a,a.b,null,y,P.am),x)
else return H.dg(w.cd(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;cN:a<,b,0eS:c<,$ti",
dC:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jW(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.P,[c])
w=b==null?1:3
this.ct(new P.aY(x,w,a,b,[z,c]))
return x},
hf:function(a,b){return this.dC(a,null,b)},
ct:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaE")
z=y.a
if(z<4){y.ct(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ck(null,null,z,H.b(new P.iT(this,a),{func:1,ret:-1}))}},
cI:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaE")
y=u.a
if(y<4){u.cI(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.ck(null,null,y,H.b(new P.iY(z,this),{func:1,ret:-1}))}},
bJ:function(){var z=H.h(this.c,"$isaY")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cz:function(a){var z,y,x,w
z=H.y(this,0)
H.dg(a,{futureOr:1,type:z})
y=this.$ti
x=H.b0(a,"$isbb",y,"$asbb")
if(x){z=H.b0(a,"$isaE",y,null)
if(z)P.ey(a,this)
else P.iU(a,this)}else{w=this.bJ()
H.C(a,z)
this.a=4
this.c=a
P.bx(this,w)}},
bw:[function(a,b){var z
H.h(b,"$isam")
z=this.bJ()
this.a=8
this.c=new P.af(a,b)
P.bx(this,z)},function(a){return this.bw(a,null)},"hn","$2","$1","ge6",4,2,30],
$isbb:1,
t:{
iU:function(a,b){var z,y,x
b.a=1
try{a.dC(new P.iV(b),new P.iW(b),null)}catch(x){z=H.aO(x)
y=H.b3(x)
P.kq(new P.iX(b,z,y))}},
ey:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaE")
if(z>=4){y=b.bJ()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.h(b.c,"$isaY")
b.a=2
b.c=a
a.cI(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cj(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.h(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cj(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.j0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j_(x,b,r).$0()}else if((y&2)!==0)new P.iZ(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.I(y).$isbb){if(y.a>=4){n=H.h(t.c,"$isaY")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ey(y,t)
return}}m=b.b
n=H.h(m.c,"$isaY")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
iT:{"^":"u:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
iY:{"^":"u:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
iV:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cz(a)}},
iW:{"^":"u:34;a",
$2:function(a,b){this.a.bw(a,H.h(b,"$isam"))},
$1:function(a){return this.$2(a,null)}},
iX:{"^":"u:2;a,b,c",
$0:function(){this.a.bw(this.b,this.c)}},
j0:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dB(H.b(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b3(v)
if(this.d){w=H.h(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.I(z).$isbb){if(z instanceof P.aE&&z.gcN()>=4){if(z.gcN()===8){w=this.b
w.b=H.h(z.geS(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hf(new P.j1(t),null)
w.a=!1}}},
j1:{"^":"u:36;a",
$1:function(a){return this.a}},
j_:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cd(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b3(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
iZ:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isaf")
w=this.c
if(w.fR(z)&&w.e!=null){v=this.b
v.b=w.fK(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b3(u)
w=H.h(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
ew:{"^":"a;a,0b"},
d_:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aE(0,$.P,[P.M])
z.a=0
this.fP(new P.hT(z,this),!0,new P.hU(z,y),y.ge6())
return y}},
hT:{"^":"u;a,b",
$1:function(a){H.C(a,H.aw(this.b,"d_",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aw(this.b,"d_",0)]}}},
hU:{"^":"u:2;a,b",
$0:function(){this.b.cz(this.a.a)}},
e3:{"^":"a;$ti"},
aU:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isY:1},
jH:{"^":"a;",$isma:1},
jX:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
jl:{"^":"jH;",
hb:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.eN(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b3(x)
P.cj(null,null,this,z,H.h(y,"$isam"))}},
hc:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.eO(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b3(x)
P.cj(null,null,this,z,H.h(y,"$isam"))}},
fw:function(a,b){return new P.jn(this,H.b(a,{func:1,ret:b}),b)},
cS:function(a){return new P.jm(this,H.b(a,{func:1,ret:-1}))},
cT:function(a,b){return new P.jo(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dB:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.eN(null,null,this,a,b)},
cd:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.j)return a.$1(b)
return P.eO(null,null,this,a,b,c,d)},
ha:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.j)return a.$2(b,c)
return P.jY(null,null,this,a,b,c,d,e,f)},
h6:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jn:{"^":"u;a,b,c",
$0:function(){return this.a.dB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jm:{"^":"u:3;a,b",
$0:function(){return this.a.hb(this.b)}},
jo:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hc(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fU:function(a,b,c){H.bW(a)
return H.w(H.k8(a,new H.cI(0,0,[b,c])),"$isdQ",[b,c],"$asdQ")},
fT:function(a,b){return new H.cI(0,0,[a,b])},
fV:function(a,b,c,d){return new P.j7(0,0,[d])},
fJ:function(a,b,c){var z,y
if(P.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.jU(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.e4(b,H.kj(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cD:function(a,b,c){var z,y,x
if(P.dc(a))return b+"..."+c
z=new P.bP(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.e4(x.gay(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
dc:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.i(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.D();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dS:function(a){var z,y,x
z={}
if(P.dc(a))return"{...}"
y=new P.bP("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.f8(a,new P.h0(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
j7:{"^":"j2;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){return P.eB(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d9()
this.b=z}return this.cv(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d9()
this.c=y}return this.cv(y,b)}else return this.e_(0,b)},
e_:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.d9()
this.d=z}y=this.cA(b)
x=z[y]
if(x==null)z[y]=[this.bv(b)]
else{if(this.cE(x,b)>=0)return!1
x.push(this.bv(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cJ(this.c,b)
else return this.eN(0,b)},
eN:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ed(z,b)
x=this.cE(y,b)
if(x<0)return!1
this.cP(y.splice(x,1)[0])
return!0},
cv:function(a,b){H.C(b,H.y(this,0))
if(H.h(a[b],"$isd8")!=null)return!1
a[b]=this.bv(b)
return!0},
cJ:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isd8")
if(z==null)return!1
this.cP(z)
delete a[b]
return!0},
cw:function(){this.r=this.r+1&67108863},
bv:function(a){var z,y
z=new P.d8(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cw()
return z},
cP:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cw()},
cA:function(a){return J.aG(a)&0x3ffffff},
ed:function(a,b){return a[this.cA(b)]},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
t:{
d9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d8:{"^":"a;a,0b,0c"},
j8:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
eB:function(a,b,c){var z=new P.j8(a,b,[c])
z.c=a.e
return z}}},
j2:{"^":"hF;"},
cL:{"^":"j9;",$isc:1,$isf:1},
t:{"^":"a;$ti",
gW:function(a){return new H.fW(a,this.gk(a),0,[H.bE(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hi:function(a,b){var z,y,x
z=H.e([],[H.bE(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.X(z,y,this.j(a,y));++y}return z},
hh:function(a){return this.hi(a,!0)},
i:function(a){return P.cD(a,"[","]")}},
h_:{"^":"a9;"},
h0:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
a9:{"^":"a;$ti",
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bE(this,a,"a9",0),H.bE(this,a,"a9",1)]})
for(z=J.bY(this.gar(a));z.D();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b5(this.gar(a))},
i:function(a){return P.dS(a)},
$isa2:1},
hG:{"^":"a;$ti",
i:function(a){return P.cD(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dp("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=P.eB(this,this.r,H.y(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
$isc:1},
hF:{"^":"hG;"},
j9:{"^":"a+t;"}}],["","",,P,{"^":"",
fA:function(a){var z=J.I(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aS(a)+"'"},
fX:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fL(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.w(z,"$isf",[d],"$asf")},
fY:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gW(a);x.D();)C.a.h(y,H.C(x.gP(x),c))
if(b)return y
return H.w(J.be(y),"$isf",z,"$asf")},
c6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fA(a)},
q:function(a){return new P.ex(a)},
dm:function(a){H.ko(a)},
a8:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.f.cM(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fq(H.hu(this))
y=P.bG(H.hs(this))
x=P.bG(H.ho(this))
w=P.bG(H.hp(this))
v=P.bG(H.hr(this))
u=P.bG(H.ht(this))
t=P.fr(H.hq(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"T;"},
"+double":0,
bH:{"^":"a;a",
ae:function(a,b){return C.f.ae(this.a,H.h(b,"$isbH").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bH))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fw()
y=this.a
if(y<0)return"-"+new P.bH(0-y).i(0)
x=z.$1(C.f.a_(y,6e7)%60)
w=z.$1(C.f.a_(y,1e6)%60)
v=new P.fv().$1(y%1e6)
return""+C.f.a_(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
t:{
dG:function(a,b,c,d,e,f){return new P.bH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fv:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fw:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
dY:{"^":"Y;",
i:function(a){return"Throw of null."}},
aH:{"^":"Y;a,b,c,d",
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gby()+y+x
if(!this.a)return w
v=this.gbx()
u=P.c6(this.b)
return w+v+": "+H.i(u)},
t:{
f9:function(a){return new P.aH(!1,null,null,a)},
bZ:function(a,b,c){return new P.aH(!0,a,b,c)},
dp:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
e_:{"^":"aH;e,f,a,b,c,d",
gby:function(){return"RangeError"},
gbx:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
t:{
cU:function(a,b,c){return new P.e_(null,null,!0,a,b,"Value not in range")},
bl:function(a,b,c,d,e){return new P.e_(b,c,!0,a,d,"Invalid value")}}},
fI:{"^":"aH;e,k:f>,a,b,c,d",
gby:function(){return"RangeError"},
gbx:function(){if(J.f5(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
t:{
L:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.b5(b))
return new P.fI(b,z,!0,a,c,"Index out of range")}}},
ik:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
ad:function(a){return new P.ik(a)}}},
ii:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
eq:function(a){return new P.ii(a)}}},
hO:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fl:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c6(z))+"."},
t:{
b7:function(a){return new P.fl(a)}}},
hj:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
e2:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fp:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ex:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
M:{"^":"T;"},
"+int":0,
c:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gW(this)
for(y=0;z.D();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dp("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.D();){x=z.gP(z)
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
i:function(a){return P.fJ(this,"(",")")}},
cE:{"^":"a;$ti"},
f:{"^":"a;$ti",$isc:1},
"+List":0,
a2:{"^":"a;$ti"},
H:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.i(this)}},
am:{"^":"a;"},
o:{"^":"a;",$ishk:1},
"+String":0,
bP:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
e4:function(a,b,c){var z=J.bY(b)
if(!z.D())return a
if(c.length===0){do a+=H.i(z.gP(z))
while(z.D())}else{a+=H.i(z.gP(z))
for(;z.D();)a=a+c+H.i(z.gP(z))}return a}}}}],["","",,W,{"^":"",
cw:function(a,b){var z=document.createElement("canvas")
return z},
fy:function(a){H.h(a,"$isa1")
return"wheel"},
ch:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eA:function(a,b,c,d){var z,y
z=W.ch(W.ch(W.ch(W.ch(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eR:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.cT(a,b)},
aQ:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kB:{"^":"cX;0p:x=,0q:y=","%":"Accelerometer|LinearAccelerationSensor"},
kC:{"^":"m;0k:length=","%":"AccessibleNodeList"},
kD:{"^":"aQ;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kE:{"^":"aQ;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fd:{"^":"m;","%":";Blob"},
cv:{"^":"aQ;",
br:function(a,b,c){if(c!=null)return a.getContext(b,P.k3(c,null))
return a.getContext(b)},
dH:function(a,b){return this.br(a,b,null)},
$iscv:1,
"%":"HTMLCanvasElement"},
dv:{"^":"m;",$isdv:1,"%":"CanvasRenderingContext2D"},
kK:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kM:{"^":"c3;0k:length=","%":"CSSPerspective"},
kN:{"^":"cz;0p:x=,0q:y=","%":"CSSPositionValue"},
kO:{"^":"c3;0p:x=,0q:y=","%":"CSSRotation"},
b8:{"^":"m;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kP:{"^":"c3;0p:x=,0q:y=","%":"CSSScale"},
fn:{"^":"iJ;0k:length=",
dI:function(a,b){var z=a.getPropertyValue(this.cu(a,b))
return z==null?"":z},
cu:function(a,b){var z,y
z=$.$get$dy()
y=z[b]
if(typeof y==="string")return y
y=this.f0(a,b)
z[b]=y
return y},
f0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fs()+b
if(z in a)return z
return b},
eU:function(a,b,c,d){a.setProperty(b,c,d)},
gbQ:function(a){return a.bottom},
gai:function(a){return a.height},
gaK:function(a){return a.left},
gaX:function(a){return a.right},
gb1:function(a){return a.top},
gaj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fo:{"^":"a;",
gaK:function(a){return this.dI(a,"left")}},
cz:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c3:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kQ:{"^":"cz;0k:length=","%":"CSSTransformValue"},
kR:{"^":"c3;0p:x=,0q:y=","%":"CSSTranslation"},
kS:{"^":"cz;0k:length=","%":"CSSUnparsedValue"},
kT:{"^":"m;0k:length=","%":"DataTransferItemList"},
kU:{"^":"m;0p:x=,0q:y=","%":"DeviceAcceleration"},
kV:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kW:{"^":"ft;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"DOMPoint"},
ft:{"^":"m;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":";DOMPointReadOnly"},
kX:{"^":"iL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a7,P.T]]},
$ast:function(){return[[P.a7,P.T]]},
$isc:1,
$asc:function(){return[[P.a7,P.T]]},
$isf:1,
$asf:function(){return[[P.a7,P.T]]},
$asx:function(){return[[P.a7,P.T]]},
"%":"ClientRectList|DOMRectList"},
fu:{"^":"m;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaj(a))+" x "+H.i(this.gai(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaK(b)&&a.top===z.gb1(b)&&this.gaj(a)===z.gaj(b)&&this.gai(a)===z.gai(b)},
gU:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF)},
gbQ:function(a){return a.bottom},
gai:function(a){return a.height},
gaK:function(a){return a.left},
gaX:function(a){return a.right},
gb1:function(a){return a.top},
gaj:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.T]},
"%":";DOMRectReadOnly"},
kY:{"^":"iN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.o]},
$ast:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
kZ:{"^":"m;0k:length=","%":"DOMTokenList"},
iI:{"^":"cL;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.h(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var z=this.hh(this)
return new J.ae(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asc:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
a_:{"^":"J;",
gcV:function(a){return new W.iI(a,a.children)},
gb9:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ae()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ae()
if(w<0)w=-w*0
return new P.a7(z,y,x,w,[P.T])},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a5:{"^":"m;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"m;",
cQ:["dL",function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(c!=null)this.e0(a,b,c,!1)}],
e0:function(a,b,c,d){return a.addEventListener(b,H.b1(H.b(c,{func:1,args:[W.a5]}),1),!1)},
$isa1:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eG|eH|eJ|eK"},
ba:{"^":"fd;",$isba:1,"%":"File"},
lh:{"^":"iS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$asx:function(){return[W.ba]},
"%":"FileList"},
li:{"^":"a1;0k:length=","%":"FileWriter"},
ll:{"^":"aQ;0k:length=","%":"HTMLFormElement"},
bc:{"^":"m;",$isbc:1,"%":"Gamepad"},
lm:{"^":"cX;0p:x=,0q:y=","%":"Gyroscope"},
ln:{"^":"m;0k:length=","%":"History"},
lo:{"^":"j4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c8:{"^":"m;0cX:data=",$isc8:1,"%":"ImageData"},
dJ:{"^":"aQ;",$isdJ:1,"%":"HTMLImageElement"},
bf:{"^":"d2;",$isbf:1,"%":"KeyboardEvent"},
lt:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lu:{"^":"cX;0p:x=,0q:y=","%":"Magnetometer"},
lw:{"^":"m;0k:length=","%":"MediaList"},
lx:{"^":"a1;",
cQ:function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.dL(a,b,c,!1)},
"%":"MessagePort"},
ly:{"^":"ja;",
j:function(a,b){return P.aF(a.get(H.U(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gar:function(a){var z=H.e([],[P.o])
this.K(a,new W.hc(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hc:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lz:{"^":"jb;",
j:function(a,b){return P.aF(a.get(H.U(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gar:function(a){var z=H.e([],[P.o])
this.K(a,new W.hd(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hd:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"m;",$isbg:1,"%":"MimeType"},
lA:{"^":"jd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$isf:1,
$asf:function(){return[W.bg]},
$asx:function(){return[W.bg]},
"%":"MimeTypeArray"},
ar:{"^":"d2;",$isar:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iH:{"^":"cL;a",
gW:function(a){var z=this.a.childNodes
return new W.dH(z,z.length,-1,[H.bE(C.F,z,"x",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$ast:function(){return[W.J]},
$asc:function(){return[W.J]},
$asf:function(){return[W.J]}},
J:{"^":"a1;",
i:function(a){var z=a.nodeValue
return z==null?this.dM(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hh:{"^":"jf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bi:{"^":"m;0k:length=",$isbi:1,"%":"Plugin"},
lL:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$isf:1,
$asf:function(){return[W.bi]},
$asx:function(){return[W.bi]},
"%":"PluginArray"},
lQ:{"^":"jp;",
j:function(a,b){return P.aF(a.get(H.U(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gar:function(a){var z=H.e([],[P.o])
this.K(a,new W.hC(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hC:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lR:{"^":"aQ;0k:length=","%":"HTMLSelectElement"},
cX:{"^":"a1;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bm:{"^":"a1;",$isbm:1,"%":"SourceBuffer"},
lS:{"^":"eH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$asx:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"m;",$isbn:1,"%":"SpeechGrammar"},
lT:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$asx:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"m;0k:length=",$isbo:1,"%":"SpeechRecognitionResult"},
lV:{"^":"ju;",
j:function(a,b){return a.getItem(H.U(b))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.e([],[P.o])
this.K(a,new W.hS(z))
return z},
gk:function(a){return a.length},
$asa9:function(){return[P.o,P.o]},
$isa2:1,
$asa2:function(){return[P.o,P.o]},
"%":"Storage"},
hS:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"m;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"aQ;",$isbq:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
br:{"^":"a1;",$isbr:1,"%":"TextTrack"},
bs:{"^":"a1;",$isbs:1,"%":"TextTrackCue|VTTCue"},
m_:{"^":"jy;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"TextTrackCueList"},
m0:{"^":"eK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"TextTrackList"},
m1:{"^":"m;0k:length=","%":"TimeRanges"},
bt:{"^":"m;",$isbt:1,"%":"Touch"},
aV:{"^":"d2;",$isaV:1,"%":"TouchEvent"},
m2:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"TouchList"},
m3:{"^":"m;0k:length=","%":"TrackDefaultList"},
d2:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m6:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
m8:{"^":"m;0p:x=","%":"VRStageBoundsPoint"},
m9:{"^":"a1;0k:length=","%":"VideoTrackList"},
bw:{"^":"ar;",
gfF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ad("deltaY is not supported"))},
gfE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ad("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
iA:{"^":"a1;",
eO:function(a,b){return a.requestAnimationFrame(H.b1(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
ec:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
me:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$isf:1,
$asf:function(){return[W.b8]},
$asx:function(){return[W.b8]},
"%":"CSSRuleList"},
mf:{"^":"fu;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaK(b)&&a.top===z.gb1(b)&&a.width===z.gaj(b)&&a.height===z.gai(b)},
gU:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gai:function(a){return a.height},
gaj:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mh:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asx:function(){return[W.bc]},
"%":"GamepadList"},
mi:{"^":"jN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mj:{"^":"jP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asx:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
mk:{"^":"jR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$asx:function(){return[W.bp]},
"%":"StyleSheetList"},
iO:{"^":"d_;a,b,c,$ti",
fP:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
mg:{"^":"iO;a,b,c,$ti"},
iP:{"^":"e3;a,b,c,d,e,$ti",
f4:function(){var z=this.d
if(z!=null&&this.a<=0)J.f7(this.b,this.c,z,!1)},
t:{
X:function(a,b,c,d,e){var z=c==null?null:W.eR(new W.iQ(c),W.a5)
z=new W.iP(0,a,b,z,!1,[e])
z.f4()
return z}}},
iQ:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isa5"))}},
x:{"^":"a;$ti",
gW:function(a){return new W.dH(a,this.gk(a),-1,[H.bE(this,a,"x",0)])}},
dH:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
iJ:{"^":"m+fo;"},
iK:{"^":"m+t;"},
iL:{"^":"iK+x;"},
iM:{"^":"m+t;"},
iN:{"^":"iM+x;"},
iR:{"^":"m+t;"},
iS:{"^":"iR+x;"},
j3:{"^":"m+t;"},
j4:{"^":"j3+x;"},
ja:{"^":"m+a9;"},
jb:{"^":"m+a9;"},
jc:{"^":"m+t;"},
jd:{"^":"jc+x;"},
je:{"^":"m+t;"},
jf:{"^":"je+x;"},
ji:{"^":"m+t;"},
jj:{"^":"ji+x;"},
jp:{"^":"m+a9;"},
eG:{"^":"a1+t;"},
eH:{"^":"eG+x;"},
jq:{"^":"m+t;"},
jr:{"^":"jq+x;"},
ju:{"^":"m+a9;"},
jx:{"^":"m+t;"},
jy:{"^":"jx+x;"},
eJ:{"^":"a1+t;"},
eK:{"^":"eJ+x;"},
jD:{"^":"m+t;"},
jE:{"^":"jD+x;"},
jI:{"^":"m+t;"},
jJ:{"^":"jI+x;"},
jK:{"^":"m+t;"},
jL:{"^":"jK+x;"},
jM:{"^":"m+t;"},
jN:{"^":"jM+x;"},
jO:{"^":"m+t;"},
jP:{"^":"jO+x;"},
jQ:{"^":"m+t;"},
jR:{"^":"jQ+x;"}}],["","",,P,{"^":"",
k6:function(a){var z,y
z=J.I(a)
if(!!z.$isc8){y=z.gcX(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
k5:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.fT(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.U(y[w])
z.X(0,v,a[v])}return z},
k3:function(a,b){var z={}
a.K(0,new P.k4(z))
return z},
dE:function(){var z=$.dD
if(z==null){z=J.cq(window.navigator.userAgent,"Opera",0)
$.dD=z}return z},
fs:function(){var z,y
z=$.dA
if(z!=null)return z
y=$.dB
if(y==null){y=J.cq(window.navigator.userAgent,"Firefox",0)
$.dB=y}if(y)z="-moz-"
else{y=$.dC
if(y==null){y=!P.dE()&&J.cq(window.navigator.userAgent,"Trident/",0)
$.dC=y}if(y)z="-ms-"
else z=P.dE()?"-o-":"-webkit-"}$.dA=z
return z},
eM:{"^":"a;cX:a>,b,c",$isc8:1},
k4:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fC:{"^":"cL;a,b",
gbB:function(){var z,y,x
z=this.b
y=H.aw(z,"t",0)
x=W.a_
return new H.h1(new H.iy(z,H.b(new P.fD(),{func:1,ret:P.a8,args:[y]}),[y]),H.b(new P.fE(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b5(this.gbB().a)},
j:function(a,b){var z=this.gbB()
return z.b.$1(J.dn(z.a,b))},
gW:function(a){var z=P.fY(this.gbB(),!1,W.a_)
return new J.ae(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asc:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
fD:{"^":"u:24;",
$1:function(a){return!!J.I(H.h(a,"$isJ")).$isa_}},
fE:{"^":"u:25;",
$1:function(a){return H.d(H.h(a,"$isJ"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ez:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bO:{"^":"a;p:a>,q:b>,$ti",
i:function(a){return"Point("+H.i(this.a)+", "+H.i(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b0(b,"$isbO",[P.T],null)
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gq(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.aG(this.a)
y=J.aG(this.b)
return P.ez(P.by(P.by(0,z),y))}},
jk:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.C(z+this.c,H.y(this,0))},
gbQ:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.C(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b0(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gaK(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.E()
z=H.C(x+this.d,w)===y.gbQ(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aG(z)
x=this.b
w=J.aG(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.C(x+this.d,v)
return P.ez(P.by(P.by(P.by(P.by(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cW:function(a,b){var z,y
H.w(b,"$isbO",[P.T],"$asbO")
z=b.a
y=this.a
if(typeof z!=="number")return z.dG()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dG()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"jk;aK:a>,b1:b>,aj:c>,ai:d>,$ti"}}],["","",,P,{"^":"",l_:{"^":"R;0p:x=,0q:y=","%":"SVGFEBlendElement"},l0:{"^":"R;0p:x=,0q:y=","%":"SVGFEColorMatrixElement"},l1:{"^":"R;0p:x=,0q:y=","%":"SVGFEComponentTransferElement"},l2:{"^":"R;0p:x=,0q:y=","%":"SVGFECompositeElement"},l3:{"^":"R;0p:x=,0q:y=","%":"SVGFEConvolveMatrixElement"},l4:{"^":"R;0p:x=,0q:y=","%":"SVGFEDiffuseLightingElement"},l5:{"^":"R;0p:x=,0q:y=","%":"SVGFEDisplacementMapElement"},l6:{"^":"R;0p:x=,0q:y=","%":"SVGFEFloodElement"},l7:{"^":"R;0p:x=,0q:y=","%":"SVGFEGaussianBlurElement"},l8:{"^":"R;0p:x=,0q:y=","%":"SVGFEImageElement"},l9:{"^":"R;0p:x=,0q:y=","%":"SVGFEMergeElement"},la:{"^":"R;0p:x=,0q:y=","%":"SVGFEMorphologyElement"},lb:{"^":"R;0p:x=,0q:y=","%":"SVGFEOffsetElement"},lc:{"^":"R;0p:x=,0q:y=","%":"SVGFEPointLightElement"},ld:{"^":"R;0p:x=,0q:y=","%":"SVGFESpecularLightingElement"},le:{"^":"R;0p:x=,0q:y=","%":"SVGFESpotLightElement"},lf:{"^":"R;0p:x=,0q:y=","%":"SVGFETileElement"},lg:{"^":"R;0p:x=,0q:y=","%":"SVGFETurbulenceElement"},lj:{"^":"R;0p:x=,0q:y=","%":"SVGFilterElement"},lk:{"^":"bd;0p:x=,0q:y=","%":"SVGForeignObjectElement"},fG:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lp:{"^":"bd;0p:x=,0q:y=","%":"SVGImageElement"},bM:{"^":"m;",$isbM:1,"%":"SVGLength"},ls:{"^":"j6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$isf:1,
$asf:function(){return[P.bM]},
$asx:function(){return[P.bM]},
"%":"SVGLengthList"},lv:{"^":"R;0p:x=,0q:y=","%":"SVGMaskElement"},bN:{"^":"m;",$isbN:1,"%":"SVGNumber"},lI:{"^":"jh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$isf:1,
$asf:function(){return[P.bN]},
$asx:function(){return[P.bN]},
"%":"SVGNumberList"},lK:{"^":"R;0p:x=,0q:y=","%":"SVGPatternElement"},lM:{"^":"m;0p:x=,0q:y=","%":"SVGPoint"},lN:{"^":"m;0k:length=","%":"SVGPointList"},lO:{"^":"m;0p:x=,0q:y=","%":"SVGRect"},lP:{"^":"fG;0p:x=,0q:y=","%":"SVGRectElement"},lW:{"^":"jw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a_;",
gcV:function(a){return new P.fC(a,new W.iH(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lX:{"^":"bd;0p:x=,0q:y=","%":"SVGSVGElement"},hV:{"^":"bd;","%":"SVGTextPathElement;SVGTextContentElement"},lZ:{"^":"hV;0p:x=,0q:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bR:{"^":"m;",$isbR:1,"%":"SVGTransform"},m4:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$isf:1,
$asf:function(){return[P.bR]},
$asx:function(){return[P.bR]},
"%":"SVGTransformList"},m7:{"^":"bd;0p:x=,0q:y=","%":"SVGUseElement"},j5:{"^":"m+t;"},j6:{"^":"j5+x;"},jg:{"^":"m+t;"},jh:{"^":"jg+x;"},jv:{"^":"m+t;"},jw:{"^":"jv+x;"},jF:{"^":"m+t;"},jG:{"^":"jF+x;"}}],["","",,P,{"^":"",kF:{"^":"m;0k:length=","%":"AudioBuffer"},kG:{"^":"iG;",
j:function(a,b){return P.aF(a.get(H.U(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gar:function(a){var z=H.e([],[P.o])
this.K(a,new P.fb(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"AudioParamMap"},fb:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kH:{"^":"a1;0k:length=","%":"AudioTrackList"},fc:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lJ:{"^":"fc;0k:length=","%":"OfflineAudioContext"},iG:{"^":"m+a9;"}}],["","",,P,{"^":"",cW:{"^":"m;",
he:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc8)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k5(g))
return}if(!!z.$isdJ)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.f9("Incorrect number or type of arguments"))},
hd:function(a,b,c,d,e,f,g){return this.he(a,b,c,d,e,f,g,null,null,null)},
$iscW:1,
"%":"WebGLRenderingContext"},hW:{"^":"m;",$ishW:1,"%":"WebGLTexture"},ig:{"^":"m;",$isig:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lU:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return P.aF(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$isf:1,
$asf:function(){return[[P.a2,,,]]},
$asx:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},js:{"^":"m+t;"},jt:{"^":"js+x;"}}],["","",,O,{"^":"",ag:{"^":"a;0a,0b,0c,0d,$ti",
bt:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
ci:function(a,b,c){var z=H.aw(this,"ag",0)
H.b(b,{func:1,ret:P.a8,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.M,[P.c,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aM:function(a,b){return this.ci(a,null,b)},
aN:function(a){var z
H.w(a,"$isc",[H.aw(this,"ag",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
bH:function(a,b){var z
H.w(b,"$isc",[H.aw(this,"ag",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
eH:function(a,b){var z
H.w(b,"$isc",[H.aw(this,"ag",0)],"$asc")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.ae(z,z.length,0,[H.y(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aw(this,"ag",0)
H.C(b,z)
z=[z]
if(this.aN(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bH(x,H.e([b],z))}},
aP:function(a,b){var z,y
H.w(b,"$isc",[H.aw(this,"ag",0)],"$asc")
if(this.aN(b)){z=this.a
y=z.length
C.a.aP(z,b)
this.bH(y,b)}},
X:function(a,b,c){var z,y,x
z=H.aw(this,"ag",0)
H.C(c,z)
y=this.a
if(b>=y.length)return H.k(y,b)
x=y[b]
if(!J.N(x,c)&&this.aN(H.e([c],[z]))){C.a.X(this.a,b,c)
z=[z]
this.eH(b,H.e([x],z))
this.bH(b,H.e([c],z))}},
$isc:1,
t:{
c1:function(a){var z=new O.ag([a])
z.bt(a)
return z}}},cN:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
dR:function(a){var z=this.b
if(!(z==null))z.v(a)},
av:function(){return this.dR(null)},
gI:function(a){var z=this.a
if(z.length>0)return C.a.gc5(z)
else return V.aJ()},
bo:function(a){var z=this.a
if(a==null)C.a.h(z,V.aJ())
else C.a.h(z,a)
this.av()},
as:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",cr:{"^":"a;"},ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Z:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sck:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdw(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.b(this.gdw(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.A("shape",z,this.c,this,[F.e0])
w.b=!0
this.ab(w)}},
sdt:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdv(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}if(a!=null){y=a.gn()
y.toString
x=H.b(this.gdv(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.A("mover",z,a,this,[U.a0])
w.b=!0
this.ab(w)}},
ad:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.A("matrix",x,y,this,[V.aa])
w.b=!0
this.ab(w)}for(z=this.y.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ad(0,b)},
a1:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gI(z))
else C.a.h(z.a,y.l(0,z.gI(z)))
z.av()
a.cc(this.f)
z=a.dy
x=(z&&C.a).gc5(z)
if(x!=null&&this.d!=null)x.dA(a,this)
for(z=this.y.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a1(a)
a.cb()
a.dx.as()},
gn:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
ab:function(a){var z=this.z
if(!(z==null))z.v(a)},
a0:function(){return this.ab(null)},
fX:[function(a){H.h(a,"$isl")
this.e=null
this.ab(a)},function(){return this.fX(null)},"i1","$1","$0","gdw",0,2,0],
fW:[function(a){this.ab(H.h(a,"$isl"))},function(){return this.fW(null)},"i0","$1","$0","gdv",0,2,0],
fU:[function(a){this.ab(H.h(a,"$isl"))},function(){return this.fU(null)},"hZ","$1","$0","gdu",0,2,0],
hY:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isc",[E.ax],"$asc")
for(z=b.length,y=this.gdu(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gZ()==null){t=new D.aP()
t.a=H.e([],w)
t.c=0
u.sZ(t)}t=u.gZ()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a0()},"$2","gfT",8,0,8],
i_:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isc",[E.ax],"$asc")
for(z=b.length,y=this.gdu(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gZ()==null){t=new D.aP()
t.a=H.e([],w)
t.c=0
u.sZ(t)}t=u.gZ()
t.toString
H.b(y,x)
C.a.R(t.a,y)}}this.a0()},"$2","gfV",8,0,8],
$isas:1,
t:{
c5:function(a,b,c,d,e,f){var z,y
z=new E.ax()
z.a=d
z.b=!0
y=O.c1(E.ax)
z.y=y
y.aM(z.gfT(),z.gfV())
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
z.sck(0,e)
z.sdt(c)
return z}}},hx:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dQ:function(a,b){var z,y,x,w,v
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
y=[V.aa]
z.a=H.e([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hz(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cN()
z.a=H.e([],y)
v=z.gn()
v.toString
x=H.b(new E.hA(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cN()
z.a=H.e([],y)
y=z.gn()
y.toString
w=H.b(new E.hB(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.bQ])
this.dy=z
C.a.h(z,null)
this.fr=new H.cI(0,0,[P.o,A.cY])},
gh5:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gI(z)
y=this.db
y=z.l(0,y.gI(y))
this.z=y
z=y}return z},
cc:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc5(z):a;(z&&C.a).h(z,y)},
cb:function(){var z=this.dy
if(z.length>1)z.pop()},
cR:function(a){var z=a.b
if(z.length===0)throw H.j(P.q("May not cache a shader with no name."))
if(this.fr.fB(0,z))throw H.j(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
t:{
hy:function(a,b){var z=new E.hx(a,b)
z.dQ(a,b)
return z}}},hz:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hA:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hB:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},hP:{"^":"l;c,a,0b"},i1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Z:x@,0y,0z,0Q,0ch",
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
dT:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.h8()},function(){return this.dT(null)},"dS","$1","$0","gcq",0,2,0],
gfJ:function(){var z,y,x
z=Date.now()
y=C.f.a_(P.dG(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
cK:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.c3(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c3(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h8:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.i3(this),{func:1,ret:-1,args:[P.T]})
C.r.ec(z)
C.r.eO(z,W.eR(y,P.T))}},
h7:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cK()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.dG(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.av()
w=x.db
C.a.sk(w.a,0)
w.av()
w=x.dx
C.a.sk(w.a,0)
w.av()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a1(this.e)}}catch(v){z=H.aO(v)
y=H.b3(v)
P.dm("Error: "+H.i(z))
P.dm("Stack: "+H.i(y))
throw H.j(z)}},
t:{
i2:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscv)return E.e6(a,!0,!0,!0,!1)
y=W.cw(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcV(a).h(0,y)
w=E.e6(y,!0,!0,!0,!1)
w.a=a
return w},
e6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i1()
y=P.fU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.br(a,"webgl",y)
x=H.h(x==null?C.k.br(a,"experimental-webgl",y):x,"$iscW")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hy(x,a)
w=new T.hX(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.il(a)
v=new X.fO()
v.c=new X.aq(!1,!1,!1)
v.d=P.fV(null,null,null,P.M)
w.b=v
v=new X.he(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fZ(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i5(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.e3,P.a]])
w.z=v
u=document
t=W.ar
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.b(w.ges(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.b(w.gew(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.b(w.gep(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.b(w.gey(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.b(w.gex(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.b(w.geB(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.b(w.geD(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.b(w.geC(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.X(a,H.U(W.fy(a)),H.b(w.geE(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.b(w.geu(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.b(w.gev(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.b(w.geF(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.b(w.geM(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.b(w.geK(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.b(w.geL(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.cK()
return z}}},i3:{"^":"u:28;a",
$1:function(a){var z
H.kn(a)
z=this.a
if(z.z){z.z=!1
z.h7()}}}}],["","",,Z,{"^":"",eu:{"^":"a;a,b",t:{
d6:function(a,b,c){var z
H.w(c,"$isf",[P.M],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,z)}}},dt:{"^":"cr;a,b,c,d,e",
T:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aO(y)
x=P.q('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.i(z))
throw H.j(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},ev:{"^":"a;a",$iskI:1},cu:{"^":"a;a,0b,c,d",
aq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
T:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].T(a)},
au:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a1:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.Y(y,", ")+"\nAttrs:   "+C.a.Y(u,", ")},
$islY:1},c9:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aS(this.c)+"'")+"]"}},aW:{"^":"a;a",
gcl:function(a){var z,y
z=this.a
y=(z&$.$get$an().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
fv:function(a){var z,y,x
z=$.$get$an()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$et()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.o])
y=this.a
if((y&$.$get$an().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.Y(z,"|")},
t:{
aj:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",dw:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.fB(z))
return x!==0},
fG:function(){return this.v(null)},
h9:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
at:function(a){return this.h9(a,!0,!1)},
t:{
D:function(){var z=new D.aP()
z.a=H.e([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fB:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bI:{"^":"l;c,d,a,0b,$ti"},bJ:{"^":"l;c,d,a,0b,$ti"},A:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",du:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
t:{"^":"kJ<"}},dO:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dP:{"^":"l;c,a,0b"},fO:{"^":"a;0a,0b,0c,0d",
h2:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dP(a,this)
y.b=!0
return z.v(y)},
fZ:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dP(a,this)
y.b=!0
return z.v(y)}},dR:{"^":"cb;x,y,c,d,e,a,0b"},fZ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
am:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaE()
s=new X.bh(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ca:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dK()
if(typeof z!=="number")return z.dE()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.am(a,b))
return!0},
h3:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cQ(new V.Q(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.v(w)
return!0},
eA:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.dR(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},aq:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aq))return!1
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
return z+(this.c?"Shift+":"")}},bh:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},he:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bz:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaE()
x=new X.bh(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ca:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bz(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dK()
if(typeof z!=="number")return z.dE()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bz(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bz(a,b,!1))
return!0},
h4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cQ(new V.Q(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.v(x)
return!0},
gcZ:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbq:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gds:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cQ:{"^":"cb;x,c,d,e,a,0b"},cb:{"^":"l;"},e8:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},i5:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
am:function(a,b){var z,y,x,w
H.w(a,"$isf",[V.O],"$asf")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaE()
w=new X.e8(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h1:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
h_:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
h0:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.v(this.am(a,!1))
return!0}},il:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.cc(0,0,(z&&C.k).gb9(z).c,C.k.gb9(z).d)},
cC:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dO(z,new X.aq(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
bM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
an:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.O(y-w,x-v)},
aO:function(a){return new V.Q(a.movementX,a.movementY)},
bI:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.i.ac(u.pageX)
C.i.ac(u.pageY)
s=z.left
C.i.ac(u.pageX)
C.a.h(y,new V.O(t-s,C.i.ac(u.pageY)-z.top))}return y},
ak:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.du(z,new X.aq(y,a.altKey,a.shiftKey))},
hC:[function(a){this.f=!0},"$1","gew",4,0,4],
hw:[function(a){this.f=!1},"$1","gep",4,0,4],
hz:[function(a){if(this.f)a.preventDefault()},"$1","ges",4,0,4],
hE:[function(a){var z
H.h(a,"$isbf")
if(!this.f)return
z=this.cC(a)
if(this.b.h2(z))a.preventDefault()},"$1","gey",4,0,16],
hD:[function(a){var z
H.h(a,"$isbf")
if(!this.f)return
z=this.cC(a)
if(this.b.fZ(z))a.preventDefault()},"$1","gex",4,0,16],
hG:[function(a){var z,y,x,w
H.h(a,"$isar")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.ak(a)
x=this.aO(a)
if(this.d.ca(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ak(a)
w=this.an(a)
if(this.c.ca(y,w))a.preventDefault()},"$1","geB",4,0,5],
hI:[function(a){var z,y,x
H.h(a,"$isar")
this.aD(a)
z=this.ak(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geD",4,0,5],
hB:[function(a){var z,y,x,w
H.h(a,"$isar")
z=this.a
if(!(z&&C.k).gb9(z).cW(0,new P.bO(a.clientX,a.clientY,[P.T]))){this.aD(a)
y=this.ak(a)
if(this.x){x=this.aO(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","gev",4,0,5],
hH:[function(a){var z,y,x
H.h(a,"$isar")
this.aD(a)
z=this.ak(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geC",4,0,5],
hA:[function(a){var z,y,x,w
H.h(a,"$isar")
z=this.a
if(!(z&&C.k).gb9(z).cW(0,new P.bO(a.clientX,a.clientY,[P.T]))){this.aD(a)
y=this.ak(a)
if(this.x){x=this.aO(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geu",4,0,5],
hJ:[function(a){var z,y
H.h(a,"$isbw")
this.aD(a)
z=new V.Q((a&&C.q).gfE(a),C.q.gfF(a)).w(0,180)
if(this.x){if(this.d.h3(z))a.preventDefault()
return}if(this.r)return
y=this.an(a)
if(this.c.h4(z,y))a.preventDefault()},"$1","geE",4,0,31],
hK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ak(this.y)
v=this.an(this.y)
this.d.eA(w,v,x)}},"$1","geF",4,0,4],
hQ:[function(a){var z
H.h(a,"$isaV")
this.a.focus()
this.f=!0
this.bM(a)
z=this.bI(a)
if(this.e.h1(z))a.preventDefault()},"$1","geM",4,0,10],
hO:[function(a){var z
H.h(a,"$isaV")
this.bM(a)
z=this.bI(a)
if(this.e.h_(z))a.preventDefault()},"$1","geK",4,0,10],
hP:[function(a){var z
H.h(a,"$isaV")
this.bM(a)
z=this.bI(a)
if(this.e.h0(z))a.preventDefault()},"$1","geL",4,0,10]}}],["","",,D,{"^":"",c4:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
aw:[function(a){var z
H.h(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aw(null)},"hj","$1","$0","gdU",0,2,0],
$isW:1,
$isas:1,
t:{
dF:function(a,b){var z,y,x,w
z=new D.c4()
z.c=new V.V(1,1,1)
z.a=new V.F(0,0,1)
y=z.b
z.b=b
x=b.gn()
x.toString
w=H.b(z.gdU(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.A("mover",y,z.b,z,[U.a0])
x.b=!0
z.aw(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.A("color",y,a,z,[V.V])
x.b=!0
z.aw(x)}return z}}},W:{"^":"a;",$isas:1},fP:{"^":"ag;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.v(a)},
ez:[function(a){var z
H.h(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.ez(null)},"hF","$1","$0","gcH",0,2,0],
hL:[function(a){var z,y,x
H.w(a,"$isc",[D.W],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.e7(x))return!1}return!0},"$1","geG",4,0,33],
hs:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcH(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.c4)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bI(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","gel",8,0,17],
hM:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcH(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.c4)C.a.R(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.R(s.a,x)}z=new D.bJ(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geI",8,0,17],
e7:function(a){var z=C.a.aS(this.e,a)
return z},
$asc:function(){return[D.W]},
$asag:function(){return[D.W]}},hn:{"^":"a;",$isW:1,$isas:1},hN:{"^":"a;",$isW:1,$isas:1},hZ:{"^":"a;",$isW:1,$isas:1},i_:{"^":"a;",$isW:1,$isas:1},i0:{"^":"a;",$isW:1,$isas:1}}],["","",,V,{"^":"",
kL:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ha",8,0,32],
kA:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dJ(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.h.a7("null",c)
return C.h.a7(C.i.dD($.n.$2(a,0)?0:a,b),c+b+1)},
b2:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isf",[P.v],"$asf")
z=H.e([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.X(z,u,C.h.a7(z[u],x))}return z},
dl:function(a,b){return C.i.hg(Math.pow(b,C.w.c3(Math.log(H.k2(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aI:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
dU:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
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
z=[P.v]
y=V.b2(H.e([this.a,this.d,this.r],z),3,0)
x=V.b2(H.e([this.b,this.e,this.x],z),3,0)
w=V.b2(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
aa:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c4:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aJ()
a3=1/a2
a4=-w
a5=-i
return V.ap((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.ap(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ce:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.ab(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
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
i:function(a){return this.F()},
dk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b2(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b2(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b2(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b2(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
A:function(a){return this.dk(a,3,0)},
F:function(){return this.dk("",3,0)},
t:{
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aJ:function(){return V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cP:function(a,b,c){return V.ap(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hb:function(a,b,c,d){return V.ap(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cO:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ap(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
dW:function(a,b,c,d){return V.dV(new V.ab(0,0,0),new V.F(0,1,0),new V.F(a,b,c))},
dV:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.B(c)))
y=b.aT(z)
x=y.w(0,Math.sqrt(y.B(y)))
w=z.aT(x)
v=new V.F(a.a,a.b,a.c)
return V.ap(x.a,w.a,z.a,x.G(0).B(v),x.b,w.b,z.b,w.G(0).B(v),x.c,w.c,z.c,z.G(0).B(v),0,0,0,1)}}},
O:{"^":"a;p:a>,q:b>",
H:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
ab:{"^":"a;p:a>,q:b>,c",
H:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bj:{"^":"a;p:a>,q:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cV:{"^":"a;p:a>,q:b>,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cV))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
t:{
cc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)}}},
Q:{"^":"a;a,b",
fN:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,18],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.Q(z*b,y*b)},
w:function(a,b){var z,y
if($.n.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
fN:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,18],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c6:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aT:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a){return new V.F(-this.a,-this.b,-this.c)},
w:function(a,b){if($.n.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dn:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fk:{"^":"dw;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bu:function(a){var z=V.kA(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.v(a)},
scf:function(a,b){},
sc7:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bu(z)}z=new D.A("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.J(z)}},
sc9:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bu(z)}z=new D.A("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.J(z)}},
sa2:function(a,b){var z,y
b=this.bu(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.v])
z.b=!0
this.J(z)}},
sc8:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.J(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.v])
z.b=!0
this.J(z)}},
sbV:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.v])
z.b=!0
this.J(z)}},
ad:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
t:{
cx:function(){var z=new U.fk()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cy:{"^":"a0;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
sI:function(a,b){var z,y,x
if(b==null)b=V.aJ()
if(!J.N(this.a,b)){z=this.a
this.a=b
y=new D.A("matrix",z,b,this,[V.aa])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aL:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
t:{
bF:function(a){var z=new U.cy()
z.sI(0,a)
return z}}},dI:{"^":"ag;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
J:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
hk:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gdV",8,0,19],
hl:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gdW",8,0,19],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ae(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aJ():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asc:function(){return[U.a0]},
$asag:function(){return[U.a0]},
$isa0:1,
t:{
cC:function(a){var z=new U.dI()
z.bt(U.a0)
z.aM(z.gdV(),z.gdW())
if(a!=null)z.aP(0,a)
z.e=null
z.f=V.aJ()
z.r=0
return z}}},a0:{"^":"dw;"},im:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
J:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcZ()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gds()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
y=H.b(this.gbE(),y)
C.a.h(z.a,y)
return!0},
eh:[function(a){H.h(a,"$isl")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbC",4,0,1],
ei:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.Q(y.a,y.b).l(0,2).w(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.Q(x.a,x.b).l(0,2).w(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.G()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
this.b.sL(0)
y=y.H(0,a.z)
this.Q=new V.Q(y.a,y.b).l(0,2).w(0,z.ga3())}this.a9()},"$1","gbD",4,0,1],
ej:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sL(y*10*x)
this.a9()}},"$1","gbE",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ap(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa0:1},io:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
J:[function(a){var z
H.h(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcZ()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gds()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gee(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gef(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gf2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gf1(),y)
C.a.h(z.a,y)
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.G()
z=-z}if(this.r){if(typeof y!=="number")return y.G()
y=-y}return new V.Q(z,y)},
eh:[function(a){a=H.d(H.h(a,"$isl"),"$isbh")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbC",4,0,1],
ei:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ag(new V.Q(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).w(0,z.ga3()))}this.a9()},"$1","gbD",4,0,1],
ej:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gbE",4,0,1],
hp:[function(a){if(H.d(H.h(a,"$isl"),"$isdR").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gee",4,0,1],
hq:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).w(0,z.ga3()))
this.a9()},"$1","gef",4,0,1],
hU:[function(a){H.h(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf3",4,0,1],
hT:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$ise8")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ag(new V.Q(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).w(0,z.ga3()))}this.a9()},"$1","gf2",4,0,1],
hS:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gf1",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.dy=y
x=b.y
this.c.ad(0,x)
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.fr=V.ap(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1).l(0,V.cO(this.c.d))}return this.fr},
$isa0:1},ip:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.v(a)},
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.gek(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hr:[function(a){var z,y,x,w
H.h(a,"$isl")
if(!J.N(this.b,this.a.b.c))return
H.d(a,"$iscQ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.v])
z.b=!0
this.J(z)}},"$1","gek",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hb(x,x,x,1)}return this.f},
$isa0:1}}],["","",,M,{"^":"",fm:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
S:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.S(null)},"cr","$1","$0","gM",0,2,0],
saR:function(a){var z,y,x
if(a==null)a=new X.fH()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.c0])
z.b=!0
this.S(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cA(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.ce])
z.b=!0
this.S(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.bQ])
z.b=!0
this.S(z)}},
a1:function(a){a.cc(this.c)
this.b.T(a)
this.a.T(a)
this.d.ad(0,a)
this.d.a1(a)
this.a.au(a)
this.b.toString
a.cb()},
$isaT:1,
$iscd:1},fz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
S:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.S(null)},"cr","$1","$0","gM",0,2,0],
hx:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gZ()==null){s=new D.aP()
s.a=H.e([],v)
s.c=0
t.sZ(s)}s=t.gZ()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.S(z)},"$2","geq",8,0,8],
hy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gZ()==null){s=new D.aP()
s.a=H.e([],v)
s.c=0
t.sZ(s)}s=t.gZ()
s.toString
H.b(x,w)
C.a.R(s.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.S(z)},"$2","ger",8,0,8],
saR:function(a){var z,y,x
if(a==null)a=X.cS(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.c0])
z.b=!0
this.S(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cA(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.ce])
z.b=!0
this.S(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.bQ])
z.b=!0
this.S(z)}},
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a1:function(a){var z
a.cc(this.c)
this.b.T(a)
this.a.T(a)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ad(0,a)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a1(a)
this.a.toString
a.cy.as()
a.db.as()
this.b.toString
a.cb()},
$isaT:1,
$iscd:1},aT:{"^":"cd;"},cd:{"^":"a;"},hR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
S:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.S(null)},"cr","$1","$0","gM",0,2,0],
ht:[function(a,b){var z,y,x,w,v,u,t
z=M.aT
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gem",8,0,20],
hN:[function(a,b){var z,y,x,w,v,u,t
z=M.aT
H.w(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.S(z)},"$2","geJ",8,0,20],
a1:function(a){var z,y,x
this.y.sdz(0,this.r)
for(z=this.z.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.saY(0,this.y)
y.saR(this.e)
y.a1(a)}this.y.sdz(0,this.x)
for(z=this.z.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.saY(0,this.y)
y.saR(this.f)
y.a1(a)}x=new E.hP(a,this)
x.b=!0
this.cx.v(x)},
$iscd:1}}],["","",,A,{"^":"",dq:{"^":"a;a,b,c"},fa:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fH:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cY:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dT:{"^":"cY;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aI,0ap,0aJ,0ba,0d_,0d0,0bb,0bc,0d1,0d2,0bd,0be,0d3,0d4,0bf,0d5,0d6,0bg,0d7,0d8,0bh,0bi,0bj,0d9,0da,0bk,0bl,0dc,0dd,0bm,0de,0bY,0df,0bZ,0dg,0c_,0dh,0c0,0di,0c1,0dj,0c2,a,b,0c,0d,0e,0f,0r",
dP:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bP("")
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
a1.f6(z)
a1.fd(z)
a1.f7(z)
a1.fl(z)
a1.fm(z)
a1.ff(z)
a1.fq(z)
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
z=new P.bP("")
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
v.fa(z)
v.f5(z)
v.f8(z)
v.fb(z)
v.fj(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fh(z)
v.fi(z)}v.fe(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.e([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.Y(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f9(z)
v.fg(z)
v.fk(z)
v.fn(z)
v.fo(z)
v.fp(z)
v.fc(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.o])
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
n="vec4("+C.a.Y(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dl(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isav")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isav")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isav")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isav")
if(a1.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$isd4")
if(a1.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isav")
if(a1.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isav")
this.k3=H.e([],[A.av])
y=a1.aI
if(y>0){this.k2=H.h(this.r.m(0,"bendMatCount"),"$isG")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isav"))}}y=a1.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isG")
break
case C.c:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isG")
break}}y=a1.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isG")
break
case C.c:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isG")
break}}y=a1.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.aI=H.d(this.r.m(0,"diffuseTxt"),"$isai")
this.aJ=H.d(this.r.m(0,"nullDiffuseTxt"),"$isG")
break
case C.c:this.ap=H.d(this.r.m(0,"diffuseTxt"),"$isac")
this.aJ=H.d(this.r.m(0,"nullDiffuseTxt"),"$isG")
break}}y=a1.d
if(y!==C.b){this.ba=H.d(this.r.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.d_=H.d(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bb=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isG")
break
case C.c:this.d0=H.d(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bb=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a1.e
if(y!==C.b){this.be=H.d(this.r.m(0,"shininess"),"$isS")
this.bc=H.d(this.r.m(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.d1=H.d(this.r.m(0,"specularTxt"),"$isai")
this.bd=H.d(this.r.m(0,"nullSpecularTxt"),"$isG")
break
case C.c:this.d2=H.d(this.r.m(0,"specularTxt"),"$isac")
this.bd=H.d(this.r.m(0,"nullSpecularTxt"),"$isG")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.d3=H.d(this.r.m(0,"bumpTxt"),"$isai")
this.bf=H.d(this.r.m(0,"nullBumpTxt"),"$isG")
break
case C.c:this.d4=H.d(this.r.m(0,"bumpTxt"),"$isac")
this.bf=H.d(this.r.m(0,"nullBumpTxt"),"$isG")
break}if(a1.dy){this.d5=H.d(this.r.m(0,"envSampler"),"$isac")
this.d6=H.d(this.r.m(0,"nullEnvTxt"),"$isG")
y=a1.r
if(y!==C.b){this.bg=H.d(this.r.m(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.d7=H.d(this.r.m(0,"reflectTxt"),"$isai")
this.bh=H.d(this.r.m(0,"nullReflectTxt"),"$isG")
break
case C.c:this.d8=H.d(this.r.m(0,"reflectTxt"),"$isac")
this.bh=H.d(this.r.m(0,"nullReflectTxt"),"$isG")
break}}y=a1.x
if(y!==C.b){this.bi=H.d(this.r.m(0,"refraction"),"$isS")
this.bj=H.d(this.r.m(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.d:this.d9=H.d(this.r.m(0,"refractTxt"),"$isai")
this.bk=H.d(this.r.m(0,"nullRefractTxt"),"$isG")
break
case C.c:this.da=H.d(this.r.m(0,"refractTxt"),"$isac")
this.bk=H.d(this.r.m(0,"nullRefractTxt"),"$isG")
break}}}y=a1.y
if(y!==C.b){this.bl=H.d(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.e:break
case C.d:this.dc=H.d(this.r.m(0,"alphaTxt"),"$isai")
this.bm=H.d(this.r.m(0,"nullAlphaTxt"),"$isG")
break
case C.c:this.dd=H.d(this.r.m(0,"alphaTxt"),"$isac")
this.bm=H.d(this.r.m(0,"nullAlphaTxt"),"$isG")
break}}this.bY=H.e([],[A.ek])
this.bZ=H.e([],[A.el])
this.c_=H.e([],[A.em])
this.c0=H.e([],[A.en])
this.c1=H.e([],[A.eo])
this.c2=H.e([],[A.ep])
if(a1.k2){y=a1.z
if(y>0){this.de=H.h(this.r.m(0,"dirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.bY;(x&&C.a).h(x,new A.ek(m,l,k))}}y=a1.Q
if(y>0){this.df=H.h(this.r.m(0,"pntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.bZ;(x&&C.a).h(x,new A.el(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dg=H.h(this.r.m(0,"spotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.c_;(x&&C.a).h(x,new A.em(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dh=H.h(this.r.m(0,"txtDirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isai")
x=this.c0;(x&&C.a).h(x,new A.en(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.di=H.h(this.r.m(0,"txtPntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isd4")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isac")
x=this.c1;(x&&C.a).h(x,new A.eo(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dj=H.h(this.r.m(0,"txtSpotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isE")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isai")
x=this.c2;(x&&C.a).h(x,new A.ep(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a5:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cj(c)
b.a.uniform1i(b.d,0)}},
t:{
h4:function(a,b){var z,y
z=a.ap
y=new A.dT(b,z)
y.cp(b,z)
y.dP(a,b)
return y}}},h7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aI,ap,aJ",
f6:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
fd:function(a){var z
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
f7:function(a){var z
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
fl:function(a){var z,y
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
fm:function(a){var z,y
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
ff:function(a){var z
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
fq:function(a){var z
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
al:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cm(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fa:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.al(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
f5:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.al(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
f8:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fb:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fj:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.al(a,z,"specular")
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
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fe:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fh:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.al(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fi:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.al(a,z,"refract")
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
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
f9:function(a){var z,y
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
fg:function(a){var z,y
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
fk:function(a){var z,y
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
fn:function(a){var z,y,x
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
fo:function(a){var z,y,x
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
fp:function(a){var z,y,x
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
fc:function(a){var z
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
i:function(a){return this.ap}},ek:{"^":"a;a,b,c"},en:{"^":"a;a,b,c,d,e,f,r,x"},el:{"^":"a;a,b,c,d,e,f,r"},eo:{"^":"a;a,b,c,d,e,f,r,x,y,z"},em:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cY:{"^":"cr;",
cp:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dl:function(a,b,c){var z,y,x
this.c=this.cD(b,35633)
this.d=this.cD(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eV(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.i(x)))}this.eY()
this.eZ()},
T:function(a){a.a.useProgram(this.e)
this.f.fH()},
cD:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.q("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
eY:function(){var z,y,x,w,v,u
z=H.e([],[A.dq])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dq(y,v.name,u))}this.f=new A.fa(z)},
eZ:function(){var z,y,x,w,v,u
z=H.e([],[A.a3])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fD(v.type,v.size,v.name,u))}this.r=new A.ie(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.G(z,y,b,c)
else return A.d3(z,y,b,a,c)},
e9:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.d3(z,y,b,a,c)},
ea:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.d3(z,y,b,a,c)},
b6:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fD:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.i9(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.ic(this.a,this.e,c,d)
case 35667:return new A.ia(this.a,this.e,c,d)
case 35668:return new A.ib(this.a,this.e,c,d)
case 35669:return new A.id(this.a,this.e,c,d)
case 35674:return new A.ih(this.a,this.e,c,d)
case 35675:return new A.d4(this.a,this.e,c,d)
case 35676:return new A.av(this.a,this.e,c,d)
case 35678:return this.e9(b,c,d)
case 35680:return this.ea(b,c,d)
case 35670:throw H.j(this.b6("BOOL",c))
case 35671:throw H.j(this.b6("BOOL_VEC2",c))
case 35672:throw H.j(this.b6("BOOL_VEC3",c))
case 35673:throw H.j(this.b6("BOOL_VEC4",c))
default:throw H.j(P.q("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c2:{"^":"a;a,b",
i:function(a){return this.b}},e1:{"^":"cY;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a3:{"^":"a;"},ie:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fI:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fI("\n")}},G:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ia:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},ib:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},id:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},i8:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
t:{
d3:function(a,b,c,d,e){var z=new A.i8(a,b,c,e)
z.f=d
z.e=P.fX(d,0,!1,P.M)
return z}}},S:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},i9:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},E:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},ic:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},ih:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},d4:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},av:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ai:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ac:{"^":"a3;a,b,c,d",
cj:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
ci:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bz:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.F(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.F(t+h,s+f,r+g)
z.b=q
p=new V.F(t-h,s-f,r-g)
z.c=p
o=new V.F(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ci(y)
k=F.ci(z.b)
j=F.kx(d,e,new F.jS(z,F.ci(z.c),F.ci(z.d),k,l,c),b)
if(j!=null)a.fS(j)},
kx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ay,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cZ()
y=H.e([],[F.ay])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cg(null,null,new V.aI(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bU(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cg(null,null,new V.aI(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bU(d))}}z.d.ft(a+1,b+1,y)
return z},
jS:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c6(z.b,b).c6(z.d.c6(z.c,b),c)
z=new V.ab(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a0()}a.sb0(y.w(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
x=new V.bj(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a0()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
gbX:function(){return this.a==null||this.b==null||this.c==null},
e2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dn())return
return v.w(0,Math.sqrt(v.B(v)))},
e4:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.B(z)))
z=w.H(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.aT(z.w(0,Math.sqrt(z.B(z))))
return z.w(0,Math.sqrt(z.B(z)))},
bT:function(){if(this.d!=null)return!0
var z=this.e2()
if(z==null){z=this.e4()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
e1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dn())return
return v.w(0,Math.sqrt(v.B(v)))},
e3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.H(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.G(0)}else{l=(z-q.b)/n
z=r.H(0,u)
z=new V.ab(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).H(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.G(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.B(z)))
z=k.aT(m)
z=z.w(0,Math.sqrt(z.B(z))).aT(k)
m=z.w(0,Math.sqrt(z.B(z)))}return m},
bR:function(){if(this.e!=null)return!0
var z=this.e1()
if(z==null){z=this.e3()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z,y
if(this.gbX())return a+"disposed"
z=a+C.h.a7(J.a4(this.a.e),0)+", "+C.h.a7(J.a4(this.b.e),0)+", "+C.h.a7(J.a4(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.A("")},
t:{
b9:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
cK:{"^":"a;0a,0b",
gbX:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){if(this.gbX())return a+"disposed"
return a+C.h.a7(J.a4(this.a.e),0)+", "+C.h.a7(J.a4(this.b.e),0)},
F:function(){return this.A("")}},
cT:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a7(J.a4(z.e),0)},
F:function(){return this.A("")}},
e0:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
fS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.V()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.fC())}this.a.V()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cT()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.V()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
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
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.V()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.b9(p,o,l)}z=this.e
if(!(z==null))z.at(0)},
ao:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ao()||!1
if(!this.a.ao())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
cU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$an()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcl(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dt])
for(r=0,q=0;q<w;++q){p=b.fv(q)
o=p.gcl(p)
C.a.X(s,q,new Z.dt(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fO(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.w(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cu(new Z.eu(34962,j),s,b)
i.b=H.e([],[Z.c9])
if(this.b.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c9(0,h.length,f))}if(this.c.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.V()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c9(1,h.length,f))}if(this.d.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.V()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.V()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c9(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.Y(z,"\n")},
ab:function(a){var z=this.e
if(!(z==null))z.v(a)},
a0:function(){return this.ab(null)},
t:{
cZ:function(){var z,y
z=new F.e0()
y=new F.iq(z)
y.b=!1
y.c=H.e([],[F.ay])
z.a=y
y=new F.hJ(z)
y.b=H.e([],[F.cT])
z.b=y
y=new F.hI(z)
y.b=H.e([],[F.cK])
z.c=y
y=new F.hH(z)
y.b=H.e([],[F.ah])
z.d=y
z.e=null
return z}}},
hH:{"^":"a;a,0b",
fs:function(a){var z,y,x,w,v
H.w(a,"$isf",[F.ay],"$asf")
z=H.e([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.b9(y,w,v))}return z},
ft:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isf",[F.ay],"$asf")
z=H.e([],[F.ah])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.k(c,x)
r=c[x];++x
if(x>=s)return H.k(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.k(c,p)
o=c[p]
if(y<0||y>=s)return H.k(c,y)
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
gk:function(a){return this.b.length},
ao:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bT())x=!1
return x},
bS:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bR())x=!1
return x},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
hI:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
hJ:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
ay:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bU:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cg(this.cx,x,u,z,y,w,v,a,t)},
fC:function(){return this.bU(null)},
sb0:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a0()}},
fO:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$an())){z=this.f
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aB())){z=this.r
y=[P.v]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aA())){z=this.x
y=[P.v]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.y
y=[P.v]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aD())){z=this.z
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bu())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bv())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aX()))return H.e([this.ch],[P.v])
else if(z.u(a,$.$get$az())){z=this.cx
y=[P.v]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.v])},
bT:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.ix(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
bR:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.iw(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z,y,x
z=H.e([],[P.o])
C.a.h(z,C.h.a7(J.a4(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.Y(z,", ")
return a+"{"+x+"}"},
F:function(){return this.A("")},
t:{
cg:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ay()
y=new F.iv(z)
y.b=H.e([],[F.cT])
z.b=y
y=new F.iu(z)
x=[F.cK]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.ir(z)
x=[F.ah]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$er()
z.e=0
y=$.$get$an()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$es().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
ix:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iw:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iq:{"^":"a;a,0b,0c",
V:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a0()
return!0},
fu:function(a,b,c,d,e,f,g,h,i){var z=F.cg(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b7:function(a,b,c,d,e,f){return this.fu(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ao:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bT()
return!0},
bS:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bR()
return!0},
fz:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
this.V()
z=H.e([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
ir:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.K(this.b,b)
C.a.K(this.c,new F.is(this,b))
C.a.K(this.d,new F.it(this,b))},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
is:{"^":"u:6;a,b",
$1:function(a){H.h(a,"$isah")
if(!J.N(a.a,this.a))this.b.$1(a)}},
it:{"^":"u:6;a,b",
$1:function(a){var z
H.h(a,"$isah")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iu:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}},
iv:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.Y(z,"\n")},
F:function(){return this.A("")}}}],["","",,O,{"^":"",h3:{"^":"bQ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
O:[function(a){var z
H.h(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.O(null)},"cG","$1","$0","gaB",0,2,0],
eQ:[function(a){H.h(a,"$isl")
this.a=null
this.O(a)},function(){return this.eQ(null)},"hR","$1","$0","geP",0,2,0],
hu:[function(a,b){var z=V.aa
z=new D.bI(a,H.w(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.O(z)},"$2","gen",8,0,21],
hv:[function(a,b){var z=V.aa
z=new D.bJ(a,H.w(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.O(z)},"$2","geo",8,0,21],
cB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a_(z.e.length+3,4)*4
x=C.f.a_(z.f.length+3,4)*4
w=C.f.a_(z.r.length+3,4)*4
v=C.f.a_(z.x.length+3,4)*4
u=C.f.a_(z.y.length+3,4)*4
t=C.f.a_(z.z.length+3,4)*4
s=C.f.a_(this.e.a.length+3,4)*4
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
g=k!==C.b||j!==C.b
f=p!==C.b||o!==C.b||n!==C.b||m!==C.b
e=m===C.b
d=!e||g
c=o!==C.b||n!==C.b||!e||l!==C.b||g
e=l===C.b
b=!e
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$an()
if(c){z=$.$get$aB()
a6=new Z.aW(a6.a|z.a)}if(b){z=$.$get$aA()
a6=new Z.aW(a6.a|z.a)}if(a){z=$.$get$aC()
a6=new Z.aW(a6.a|z.a)}if(a0){z=$.$get$aD()
a6=new Z.aW(a6.a|z.a)}if(a2){z=$.$get$az()
a6=new Z.aW(a6.a|z.a)}return new A.h7(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.w(a,"$isf",[T.d0],"$asf")
if(b!=null)if(!C.a.aS(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ae(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ce(x)}}},
dA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cB()
y=H.h(a.fr.j(0,z.ap),"$isdT")
if(y==null){y=A.h4(z,a.a)
a.cR(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aJ
z=b.e
if(!(z instanceof Z.cu)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ao()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bS()
u.a.bS()
u=u.e
if(!(u==null))u.at(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fz()
t=t.e
if(!(t==null))t.at(0)}r=b.d.cU(new Z.ev(a.a),w)
r.aq($.$get$an()).e=this.a.y.c
if(z)r.aq($.$get$aB()).e=this.a.Q.c
if(v)r.aq($.$get$aA()).e=this.a.z.c
if(x.rx)r.aq($.$get$aC()).e=this.a.ch.c
if(u)r.aq($.$get$aD()).e=this.a.cx.c
if(x.x1)r.aq($.$get$az()).e=this.a.cy.c
b.e=r}z=T.d0
q=H.e([],[z])
this.a.T(a)
if(x.fx){v=this.a
u=a.dx
u=u.gI(u)
v=v.db
v.toString
v.a8(u.a4(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gI(u)
t=a.dx
t=u.l(0,t.gI(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a4(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gh5()
t=a.dx
t=u.l(0,t.gI(t))
a.ch=t
u=t}v=v.fr
v.toString
v.a8(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a8(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a8(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a8(C.x.a4(u,!0))}if(x.aI>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.h(t,"$isaa")
u=u.k3
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bA(H.w(t.a4(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.f.d)
v=this.a
u=this.f.d
v.aa(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.f.e)
v=this.a
u=this.f.e
v.a5(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.r.d)
v=this.a
u=this.r.d
v.aa(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.r.e)
v=this.a
u=this.r.e
v.a5(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aI,v.aJ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.x.e)
v=this.a
u=this.x.e
v.a5(v.ap,v.aJ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.ba
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.d_,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.y.e)
v=this.a
u=this.y.e
v.a5(v.d0,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bc
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.be
u.a.uniform1f(u.d,s)
break
case C.d:this.N(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.d1,v.bd,u)
u=this.a
v=this.z.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.be
v.a.uniform1f(v.d,s)
break
case C.c:this.N(q,this.z.e)
v=this.a
u=this.z.e
v.a5(v.d2,v.bd,u)
u=this.a
v=this.z.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.be
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.de
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bY
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.ce(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.df
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bZ
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcg(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b2(j.gaW(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gah(j)
g=i.d
h=t.gbp()
s=t.gb3()
t=t.gb8()
g.a.uniform3f(g.d,h,s,t)
t=j.gbN()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbO()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbP()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dg
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c_
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcg(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbW(j).hX()
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaW(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gah(j)
s=i.e
h=t.gbp()
g=t.gb3()
t=t.gb8()
s.a.uniform3f(s.d,h,g,t)
t=j.ghW()
g=i.f
g.a.uniform1f(g.d,t)
t=j.ghV()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dh
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.c0
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gb_()
H.w(q,"$isf",t,"$asf")
if(!C.a.aS(q,s)){s.sbA(q.length)
C.a.h(q,s)}s=j.gbW(j)
h=i.d
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=j.gbq()
f=i.b
g=s.gaF(s)
h=s.gaG(s)
s=s.gaH()
f.a.uniform3f(f.d,g,h,s)
s=j.gaX(j)
h=i.c
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=m.ce(j.gbW(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gah(j)
g=i.f
f=h.gbp()
s=h.gb3()
h=h.gb8()
g.a.uniform3f(g.d,f,s,h)
h=j.gb_()
s=h.gbn(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbn(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gfL(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.di
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.c1
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gb_()
H.w(q,"$isf",s,"$asf")
if(!C.a.aS(q,h)){h.sbA(q.length)
C.a.h(q,h)}e=m.l(0,j.gI(j))
h=j.gI(j).b2(new V.ab(0,0,0))
g=i.b
f=h.gp(h)
d=h.gq(h)
h=h.gcg(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b2(new V.ab(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c4(0)
d=i.d
n=new Float32Array(H.bA(H.w(new V.dU(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gah(j)
h=i.e
f=d.gbp()
g=d.gb3()
d=d.gb8()
h.a.uniform3f(h.d,f,g,d)
d=j.gb_()
h=d.gbn(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gho()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbA())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbN()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbO()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbP()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dj
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb_()
H.w(q,"$isf",z,"$asf")
if(!C.a.aS(q,t)){t.sbA(q.length)
C.a.h(q,t)}t=j.gaW(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcg(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbW(j)
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=j.gbq()
s=i.d
h=t.gaF(t)
g=t.gaG(t)
t=t.gaH()
s.a.uniform3f(s.d,h,g,t)
t=j.gaX(j)
g=i.e
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaW(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb_()
s=t.gbn(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbn(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gfL(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gah(j)
s=i.y
h=t.gbp()
g=t.gb3()
t=t.gb8()
s.a.uniform3f(s.d,h,g,t)
t=j.gi2()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gi3()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.N(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.d3,z.bf,v)
break
case C.c:this.N(q,this.Q.e)
z=this.a
v=this.Q.e
z.a5(z.d4,z.bf,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gI(v).c4(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a4(0,!0))}if(x.dy){this.N(q,this.ch)
z=this.a
v=this.ch
z.a5(z.d5,z.d6,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bg
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.N(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.d7,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.N(q,this.cx.e)
z=this.a
v=this.cx.e
z.a5(z.d8,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bi
v.a.uniform1f(v.d,t)
break
case C.d:this.N(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.d9,z.bk,v)
v=this.a
z=this.cy.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bi
z.a.uniform1f(z.d,t)
break
case C.c:this.N(q,this.cy.e)
z=this.a
v=this.cy.e
z.a5(z.da,z.bk,v)
v=this.a
z=this.cy.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bi
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bl
z.a.uniform1f(z.d,u)
break
case C.d:this.N(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dc,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break
case C.c:this.N(q,this.db.e)
z=this.a
u=this.db.e
z.a5(z.dd,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].T(a)
z=b.e
z.T(a)
z.a1(a)
z.au(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.cY()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cB().ap}},h5:{"^":"cM;0f,a,b,0c,0d,0e",
eT:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.A(this.b,y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
aC:function(){this.co()
this.eT(1)}},cM:{"^":"a;",
O:[function(a){this.a.O(H.h(a,"$isl"))},function(){return this.O(null)},"cG","$1","$0","gaB",0,2,0],
aC:["co",function(){}],
eW:function(a){},
eX:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gaB(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.b(this.gaB(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A(this.b+".textureCube",x,this.e,this,[T.d1])
z.b=!0
this.a.O(z)}},
sb0:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aC()
this.c=C.c
this.eW(null)
z=this.a
z.a=null
z.O(null)}this.eX(a)}},h6:{"^":"cM;a,b,0c,0d,0e"},aR:{"^":"cM;0f,a,b,0c,0d,0e",
cL:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.O(y)}},
aC:["bs",function(){this.co()
this.cL(new V.V(1,1,1))}],
sah:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aC()
z=this.a
z.a=null
z.O(null)}this.cL(b)}},h8:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
eV:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
aC:function(){this.bs()
this.eV(1)}},h9:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
bK:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
aC:function(){this.bs()
this.bK(100)}},hK:{"^":"bQ;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
O:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.O(null)},"cG","$1","$0","gaB",0,2,0],
dA:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.j(0,"Skybox"),"$ise1")
if(z==null){y=a.a
z=new A.e1(y,"Skybox")
z.cp(y,"Skybox")
z.dl(0,$.hM,$.hL)
z.x=z.f.j(0,"posAttr")
z.y=H.d(z.r.j(0,"fov"),"$isS")
z.z=H.d(z.r.j(0,"ratio"),"$isS")
z.Q=H.d(z.r.j(0,"boxClr"),"$isE")
z.ch=H.d(z.r.j(0,"boxTxt"),"$isac")
z.cx=H.d(z.r.j(0,"viewMat"),"$isav")
a.cR(z)}this.a=z}if(b.e==null){y=b.d.cU(new Z.ev(a.a),$.$get$an())
y.aq($.$get$an()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.T(a)}y=a.d
x=a.c
w=this.a
w.T(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cj(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gI(x).c4(0)
w=w.cx
w.toString
w.a8(x.a4(0,!0))
y=b.e
if(y instanceof Z.cu){y.T(a)
y.a1(a)
y.au(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cY()
y=this.c
if(y!=null)y.au(a)}},bQ:{"^":"a;"}}],["","",,T,{"^":"",d0:{"^":"cr;"},d1:{"^":"d0;0b,0c,0d,0e,a",
T:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
au:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},hX:{"^":"a;a,0b,0c,0d,0e",
dr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.d1(0)
r.b=s
r.c=!1
r.d=0
r.e=D.D()
this.aA(r,s,z,34069,!1,!1)
this.aA(r,s,w,34070,!1,!1)
this.aA(r,s,y,34071,!1,!1)
this.aA(r,s,v,34072,!1,!1)
this.aA(r,s,x,34073,!1,!1)
this.aA(r,s,u,34074,!1,!1)
return r},
dq:function(a){return this.dr(a,".png",!1,"")},
fQ:function(a,b){return this.dr(a,b,!1,"")},
aA:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a5
W.X(z,"load",H.b(new T.hY(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eR:function(a,b,c){var z,y,x,w
b=V.dl(b,2)
z=V.dl(a.width,2)
y=V.dl(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cw(null,null)
x.width=z
x.height=y
w=H.h(C.k.dH(x,"2d"),"$isdv")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k6(w.getImageData(0,0,x.width,x.height))}}},hY:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eR(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.G.hd(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fG();++z.e}}}],["","",,X,{"^":"",c0:{"^":"a;",$isas:1},fF:{"^":"ce;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
af:function(a){var z=this.x
if(!(z==null))z.v(a)},
sdz:function(a,b){var z,y
if(!this.r.u(0,b)){z=this.r
this.r=b
y=new D.A("region",z,b,this,[V.cV])
y.b=!0
this.af(y)}},
T:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.i.ac(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.ac(w.b*x)
t=C.i.ac(w.c*y)
a.c=t
w=C.f.ac(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
t:{
cA:function(a,b,c,d,e,f,g){var z,y
z=new X.fF()
y=new V.aI(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cc(0,0,1,1)
z.r=y
return z}}},fH:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
T:function(a){var z
a.cy.bo(V.aJ())
z=V.aJ()
a.db.bo(z)},
au:function(a){a.cy.as()
a.db.as()},
$isas:1,
$isc0:1},hl:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
af:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.af(null)},"hm","$1","$0","gdZ",0,2,0],
T:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bo(V.ap(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dZ
if(z==null){z=V.dV(new V.ab(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.dZ=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aL(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bo(r)},
au:function(a){a.cy.as()
a.db.as()},
$isas:1,
$isc0:1,
t:{
cS:function(a,b,c,d){var z,y,x,w
z=new X.hl()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gn()
x.toString
w=H.b(z.gdZ(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.A("mover",y,z.a,z,[U.a0])
x.b=!0
z.af(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.A("fov",y,b,z,[P.v])
x.b=!0
z.af(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.A("near",y,d,z,[P.v])
x.b=!0
z.af(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.A("far",y,a,z,[P.v])
x.b=!0
z.af(x)}return z}}},ce:{"^":"a;"}}],["","",,B,{"^":"",
kr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eU(x,(x&&C.m).cu(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
W.X(z,"scroll",H.b(new B.ks(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isf",[P.o],"$asf")
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
u=W.cw(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.h(v.insertCell(-1),"$isbq")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.h(q.insertCell(-1),"$isbq").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.k(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.h(q.insertCell(-1),"$isbq")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.h(q.insertCell(-1),"$isbq")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.h(q.insertCell(-1),"$isbq").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kr(a,y,!1,"../resources/SnowTop.png")},
ku:function(a){P.i4(C.u,new B.kv(a))},
ks:{"^":"u:22;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.i(-0.05*C.i.ac(this.b.scrollTop))+"px"
z.top=y}},
kv:{"^":"u:37;a",
$1:function(a){H.h(a,"$isaU")
P.dm(C.i.dD(this.a.gfJ(),2)+" fps")}}}],["","",,N,{"^":"",
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
B.kt("Test 033",H.e([],[P.o]),"Test of a sterioscopic scene.")
z=document.getElementById("threeDart")
if(z==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
y=E.i2(z,!0,!0,!0,!1)
x=F.cZ()
F.bz(x,null,null,1,1,1,0,0,1)
F.bz(x,null,null,1,1,0,1,0,3)
F.bz(x,null,null,1,1,0,0,1,2)
F.bz(x,null,null,1,1,-1,0,0,0)
F.bz(x,null,null,1,1,0,-1,0,0)
F.bz(x,null,null,1,1,0,0,-1,3)
x.ao()
w=E.c5(null,!0,null,"",x,null)
v=E.c5(null,!0,null,"",null,null)
for(u=-1.6;u<=1.7;u+=0.8)for(t=-1.6;t<=1.7;t+=0.8)for(s=-1.6;s<=1.7;s+=0.8){r=new V.aa(1,0,0,u,0,1,0,t,0,0,1,s,0,0,0,1).l(0,new V.aa(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
q=E.c5(null,!0,null,"",null,null)
p=new U.cy()
p.sI(0,r)
q.sdt(p)
p=q.y
o=H.y(p,0)
H.C(w,o)
n=[o]
if(p.aN(H.e([w],n))){m=p.a
l=m.length
C.a.h(m,w)
o=H.w(H.e([w],n),"$isc",[o],"$asc")
p=p.c
if(p!=null)p.$2(l,o)}p=v.y
o=H.y(p,0)
H.C(q,o)
n=[o]
if(p.aN(H.e([q],n))){m=p.a
l=m.length
C.a.h(m,q)
o=H.w(H.e([q],n),"$isc",[o],"$asc")
p=p.c
if(p!=null)p.$2(l,o)}}k=y.f.dq("../resources/diceColor")
j=new O.h3()
p=O.c1(V.aa)
j.e=p
p.aM(j.gen(),j.geo())
p=new O.aR(j,"emission")
p.c=C.b
p.f=new V.V(0,0,0)
j.f=p
p=new O.aR(j,"ambient")
p.c=C.b
p.f=new V.V(0,0,0)
j.r=p
p=new O.aR(j,"diffuse")
p.c=C.b
p.f=new V.V(0,0,0)
j.x=p
p=new O.aR(j,"invDiffuse")
p.c=C.b
p.f=new V.V(0,0,0)
j.y=p
p=new O.h9(j,"specular")
p.c=C.b
p.f=new V.V(0,0,0)
p.ch=100
j.z=p
p=new O.h6(j,"bump")
p.c=C.b
j.Q=p
j.ch=null
p=new O.aR(j,"reflect")
p.c=C.b
p.f=new V.V(0,0,0)
j.cx=p
p=new O.h8(j,"refract")
p.c=C.b
p.f=new V.V(0,0,0)
p.ch=1
j.cy=p
p=new O.h5(j,"alpha")
p.c=C.b
p.f=1
j.db=p
p=new D.fP()
p.bt(D.W)
p.e=H.e([],[D.c4])
p.f=H.e([],[D.hn])
p.r=H.e([],[D.hN])
p.x=H.e([],[D.hZ])
p.y=H.e([],[D.i_])
p.z=H.e([],[D.i0])
p.Q=null
p.ch=null
p.ci(p.gel(),p.geG(),p.geI())
j.dx=p
o=p.Q
if(o==null){o=D.D()
p.Q=o
p=o}else p=o
o={func:1,ret:-1,args:[D.l]}
n=H.b(j.geP(),o)
C.a.h(p.a,n)
n=j.dx
p=n.ch
if(p==null){p=D.D()
n.ch=p}n=H.b(j.gaB(),o)
C.a.h(p.a,n)
j.dy=null
n=j.dx
p=U.bF(V.dW(-1,-1,-1,null))
n.h(0,D.dF(new V.V(1,0.9,0.9),p))
p=j.dx
n=U.bF(V.dW(1,1,2,null))
p.h(0,D.dF(new V.V(0.2,0.2,0.35),n))
p=j.r
p.sah(0,new V.V(0.2,0.2,0.2))
j.r.sb0(k)
p=j.x
p.sah(0,new V.V(0.8,0.8,0.8))
j.x.sb0(k)
p=j.z
p.sah(0,new V.V(0.7,0.7,0.7))
p=j.z
if(p.c===C.b){p.c=C.e
p.bs()
p.bK(100)
n=p.a
n.a=null
n.O(null)}p.bK(10)
j.Q.sb0(y.f.dq("../resources/diceBumpMap"))
i=U.cC(null)
p=y.r
n=new U.io()
m=U.cx()
m.scf(0,!0)
m.sc7(6.283185307179586)
m.sc9(0)
m.sa2(0,0)
m.sc8(100)
m.sL(0)
m.sbV(0.5)
n.b=m
m=m.gn()
m.toString
h=H.b(n.gax(),o)
C.a.h(m.a,h)
m=U.cx()
m.scf(0,!0)
m.sc7(6.283185307179586)
m.sc9(0)
m.sa2(0,0)
m.sc8(100)
m.sL(0)
m.sbV(0.5)
n.c=m
C.a.h(m.gn().a,h)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
g=new X.aq(!1,!1,!1)
f=n.d
n.d=g
m=[X.aq]
h=new D.A("modifiers",f,g,n,m)
h.b=!0
n.J(h)
h=n.f
if(h!==!1){n.f=!1
h=new D.A("invertX",h,!1,n,[P.a8])
h.b=!0
n.J(h)}h=n.r
if(h!==!1){n.r=!1
h=new D.A("invertY",h,!1,n,[P.a8])
h.b=!0
n.J(h)}n.aQ(p)
i.h(0,n)
p=y.r
n=new U.im()
h=U.cx()
h.scf(0,!0)
h.sc7(6.283185307179586)
h.sc9(0)
h.sa2(0,0)
h.sc8(100)
h.sL(0)
h.sbV(0.2)
n.b=h
h=h.gn()
h.toString
e=H.b(n.gax(),o)
C.a.h(h.a,e)
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
g=new X.aq(!0,!1,!1)
f=n.c
n.c=g
h=new D.A("modifiers",f,g,n,m)
h.b=!0
n.J(h)
n.aQ(p)
i.h(0,n)
p=y.r
n=new U.ip()
n.c=0.01
n.d=0
n.e=0
g=new X.aq(!1,!1,!1)
n.b=g
m=new D.A("modifiers",null,g,n,m)
m.b=!0
n.J(m)
n.aQ(p)
i.h(0,n)
i.h(0,U.bF(V.cP(0,0,6)))
d=X.cA(!0,!0,!1,null,2000,null,0)
if(d.b){d.b=!1
p=new D.A("clearColor",!0,!1,d,[P.a8])
p.b=!0
d.af(p)}p=y.f.fQ("../resources/maskonaive",".jpg")
c=new M.fm()
c.saR(null)
c.saY(0,null)
c.saZ(null)
n=E.c5(null,!0,null,"",null,null)
x=F.cZ()
m=x.a
h=new V.F(-1,-1,1)
h=h.w(0,Math.sqrt(h.B(h)))
b=m.b7(new V.bj(1,2,4,6),new V.aI(1,0,0,1),new V.ab(-1,-1,0),new V.O(0,1),h,null)
m=x.a
h=new V.F(1,-1,1)
h=h.w(0,Math.sqrt(h.B(h)))
a=m.b7(new V.bj(0,3,4,6),new V.aI(0,0,1,1),new V.ab(1,-1,0),new V.O(1,1),h,null)
m=x.a
h=new V.F(1,1,1)
h=h.w(0,Math.sqrt(h.B(h)))
a0=m.b7(new V.bj(0,2,5,6),new V.aI(0,1,0,1),new V.ab(1,1,0),new V.O(1,0),h,null)
m=x.a
h=new V.F(-1,1,1)
h=h.w(0,Math.sqrt(h.B(h)))
a1=m.b7(new V.bj(0,2,4,7),new V.aI(1,1,0,1),new V.ab(-1,1,0),new V.O(0,0),h,null)
x.d.fs(H.e([b,a,a0,a1],[F.ay]))
x.ao()
n.sck(0,x)
c.d=n
c.e=null
n=new O.hK()
n.b=1.0471975511965976
f=n.c
n.c=p
p=p.e
m=H.b(n.gaB(),o)
C.a.h(p.a,m)
p=new D.A("boxTexture",f,n.c,n,[T.d1])
p.b=!0
n.O(p)
k=new V.V(1,1,1)
if(!J.N(n.d,k)){f=n.d
n.d=k
p=new D.A("boxColor",f,k,n,[V.V])
p.b=!0
n.O(p)}n.e=null
c.saZ(n)
a2=new M.fz()
p=O.c1(E.ax)
a2.d=p
p.aM(a2.geq(),a2.ger())
a2.e=null
a2.f=null
a2.r=null
a2.x=null
a2.saR(null)
a2.saY(0,null)
a2.saZ(null)
a2.saZ(j)
a2.d.h(0,v)
p=M.aT
n=H.e([c,a2],[p])
m=new M.hR()
h=U.bF(null)
m.a=h
e=U.bF(null)
m.b=e
a3=U.a0
a4=[a3]
h=U.cC(H.e([null,h],a4))
m.c=h
a4=U.cC(H.e([null,e],a4))
m.d=a4
m.e=X.cS(2000,1.0471975511965976,h,0.1)
m.f=X.cS(2000,1.0471975511965976,a4,0.1)
m.r=V.cc(0,0,0.5,1)
m.x=V.cc(0.5,0,0.5,1)
p=O.c1(p)
m.z=p
p.aM(m.gem(),m.geJ())
m.z.aP(0,n)
m.Q=0.1
m.ch=12
m.cx=null
m.cy=null
p=m.c.a
if(0>=p.length)return H.k(p,0)
if(!J.N(p[0],i)){p=m.c
h=p.a
if(0>=h.length)return H.k(h,0)
f=h[0]
p.X(0,0,i)
m.d.X(0,0,i)
a3=new D.A("cameraMover",f,i,m,[a3])
a3.b=!0
m.S(a3)}p=m.y
if(p!==d){if(p!=null){p=p.gn()
p.toString
h=H.b(m.gM(),o)
C.a.R(p.a,h)}f=m.y
m.y=d
p=d.gn()
p.toString
h=H.b(m.gM(),o)
C.a.h(p.a,h)
p=new D.A("target",f,m.y,m,[X.ce])
p.b=!0
m.S(p)}m.z.aP(0,n)
m.Q=0.1
m.ch=12
a5=Math.atan2(0.1,12)
p=m.a
n=m.Q
if(typeof n!=="number")return n.G()
p.sI(0,V.cP(-n,0,0).l(0,V.cO(a5)))
m.b.sI(0,V.cP(m.Q,0,0).l(0,V.cO(-a5)))
p=y.d
if(p!==m){if(p!=null){p=p.gn()
p.toString
n=H.b(y.gcq(),o)
C.a.R(p.a,n)}y.d=m
p=m.gn()
p.toString
o=H.b(y.gcq(),o)
C.a.h(p.a,o)
y.dS()}B.ku(y)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.cF.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.fM.prototype
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.bU=function(a){if(typeof a=="string")return J.cF.prototype
if(a==null)return a
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.dh=function(a){if(a==null)return a
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.k9=function(a){if(typeof a=="number")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d5.prototype
return a}
J.bV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.f5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k9(a).ae(a,b)}
J.f6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ki(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).j(a,b)}
J.f7=function(a,b,c,d){return J.bV(a).cQ(a,b,c,d)}
J.cq=function(a,b,c){return J.bU(a).fA(a,b,c)}
J.dn=function(a,b){return J.dh(a).C(a,b)}
J.f8=function(a,b){return J.dh(a).K(a,b)}
J.aG=function(a){return J.I(a).gU(a)}
J.bY=function(a){return J.dh(a).gW(a)}
J.b5=function(a){return J.bU(a).gk(a)}
J.a4=function(a){return J.I(a).i(a)}
var $=I.p
C.k=W.cv.prototype
C.m=W.fn.prototype
C.v=J.m.prototype
C.a=J.bK.prototype
C.w=J.dL.prototype
C.f=J.dM.prototype
C.x=J.dN.prototype
C.i=J.ca.prototype
C.h=J.cF.prototype
C.E=J.bL.prototype
C.F=W.hh.prototype
C.p=J.hm.prototype
C.G=P.cW.prototype
C.l=J.d5.prototype
C.q=W.bw.prototype
C.r=W.iA.prototype
C.t=new P.hj()
C.j=new P.jl()
C.b=new A.c2(0,"ColorSourceType.None")
C.e=new A.c2(1,"ColorSourceType.Solid")
C.d=new A.c2(2,"ColorSourceType.Texture2D")
C.c=new A.c2(3,"ColorSourceType.TextureCube")
C.u=new P.bH(5e6)
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
$.b6=null
$.dr=null
$.da=!1
$.eY=null
$.eS=null
$.f3=null
$.cm=null
$.co=null
$.di=null
$.aZ=null
$.bB=null
$.bC=null
$.db=!1
$.P=C.j
$.dD=null
$.dC=null
$.dB=null
$.dA=null
$.n=V.ha()
$.hM="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.hL="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dZ=null
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
I.$lazy(y,x,w)}})(["dz","$get$dz",function(){return H.eX("_$dart_dartClosure")},"cG","$get$cG",function(){return H.eX("_$dart_js")},"e9","$get$e9",function(){return H.at(H.cf({
toString:function(){return"$receiver$"}}))},"ea","$get$ea",function(){return H.at(H.cf({$method$:null,
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.at(H.cf(null))},"ec","$get$ec",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eg","$get$eg",function(){return H.at(H.cf(void 0))},"eh","$get$eh",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.at(H.ef(null))},"ed","$get$ed",function(){return H.at(function(){try{null.$method$}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.at(H.ef(void 0))},"ei","$get$ei",function(){return H.at(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return P.iB()},"bD","$get$bD",function(){return[]},"dy","$get$dy",function(){return{}},"et","$get$et",function(){return Z.aj(0)},"er","$get$er",function(){return Z.aj(511)},"an","$get$an",function(){return Z.aj(1)},"aB","$get$aB",function(){return Z.aj(2)},"aA","$get$aA",function(){return Z.aj(4)},"aC","$get$aC",function(){return Z.aj(8)},"aD","$get$aD",function(){return Z.aj(16)},"bu","$get$bu",function(){return Z.aj(32)},"bv","$get$bv",function(){return Z.aj(64)},"es","$get$es",function(){return Z.aj(96)},"aX","$get$aX",function(){return Z.aj(128)},"az","$get$az",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.H,args:[F.ah]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.M,[P.c,E.ax]]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.o,args:[P.M]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.M,[P.c,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.M,[P.c,U.a0]]},{func:1,ret:-1,args:[P.M,[P.c,M.aT]]},{func:1,ret:-1,args:[P.M,[P.c,V.aa]]},{func:1,ret:P.H,args:[W.a5]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.a8,args:[W.J]},{func:1,ret:W.a_,args:[W.J]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.H,args:[P.T]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.am]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.a8,args:[P.v,P.v]},{func:1,ret:P.a8,args:[[P.c,D.W]]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:P.H,args:[F.ay,P.v,P.v]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.H,args:[P.aU]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.ky(d||a)
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
Isolate.df=a.df
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
if(typeof dartMainRunner==="function")dartMainRunner(N.f0,[])
else N.f0([])})})()
//# sourceMappingURL=test.dart.js.map
