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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dn(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dr=function(){}
var dart=[["","",,H,{"^":"",no:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.du==null){H.mx()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c4("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.mC(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
t:function(a,b){return a===b},
gR:function(a){return H.bG(a)},
i:["ef",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hR:{"^":"u;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isag:1},
e7:{"^":"u;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isG:1},
cU:{"^":"u;",
gR:function(a){return 0},
i:["eg",function(a){return String(a)}]},
iA:{"^":"cU;"},
c5:{"^":"cU;"},
c_:{"^":"cU;",
i:function(a){var z=a[$.$get$dU()]
if(z==null)return this.eg(a)
return"JavaScript function for "+H.l(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscP:1},
b7:{"^":"u;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.C("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.r(P.C("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hy:function(a){return this.C(a,"")},
hq:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bF:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hP())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
bm:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gY:function(a){return new J.at(a,a.length,0,[H.y(a,0)])},
gR:function(a){return H.bG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.e5(new Array(a),b)},
e5:function(a,b){return J.bA(H.d(a,[b]))},
bA:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
nn:{"^":"b7;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bY:{"^":"u;",
ghx:function(a){return a===0?1/a<0:a<0},
dC:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
e2:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghx(a))return"-"+z
return z},
b7:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.T(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.C("Unexpected toString result: "+z))
x=J.aE(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a*b},
bb:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ej:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cZ(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cZ(a,b)},
cZ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aF:function(a,b){var z
if(a>0)z=this.cX(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fC:function(a,b){if(b<0)throw H.a(H.af(b))
return this.cX(a,b)},
cX:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a<b},
$isq:1,
$isa_:1},
e6:{"^":"bY;",$ism:1},
hS:{"^":"bY;"},
bZ:{"^":"u;",
T:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.r(H.aD(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aM:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.af(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.af(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a5:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.af(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.co(b,null,null))
if(b>c)throw H.a(P.co(b,null,null))
if(c>a.length)throw H.a(P.co(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.q(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aa:function(a,b){return this.hM(a,b," ")},
dK:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dJ:function(a,b){return this.dK(a,b,0)},
hf:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.fX(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isem:1,
$isi:1}}],["","",,H,{"^":"",
cC:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hP:function(){return new P.jc("No element")},
a3:{"^":"jH;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$ascs:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hA:{"^":"j;"},
ec:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
id:{"^":"j;a,b,$ti",
gY:function(a){return new H.ie(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
H:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asj:function(a,b){return[b]}},
ie:{"^":"cS;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascS:function(a,b){return[b]}},
kb:{"^":"j;a,b,$ti",
gY:function(a){return new H.kc(J.bv(this.a),this.b,this.$ti)}},
kc:{"^":"cS;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cg:{"^":"b;$ti"},
cs:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"cs",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.ay(this,"cs",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
jH:{"^":"ck+cs;"}}],["","",,H,{"^":"",
ho:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
ms:function(a){return init.types[H.D(a)]},
fQ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.a(H.af(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iK:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isc5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.ay(w,1)
r=H.dv(H.bT(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iC:function(){if(!!self.location)return self.location.href
return},
eo:function(a){var z,y,x,w,v
H.bT(a)
z=J.as(a)
if(typeof z!=="number")return z.ec()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iL:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.af(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aF(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.af(w))}return H.eo(z)},
ep:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.af(x))
if(x<0)throw H.a(H.af(x))
if(x>65535)return H.iL(a)}return H.eo(a)},
iM:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ec()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cm:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aF(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iJ:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
iH:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
iD:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
iE:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
iG:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
iI:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
iF:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
p:function(a){throw H.a(H.af(a))},
e:function(a,b){if(a==null)J.as(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.D(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.co(b,"index",null)},
mm:function(a,b,c){if(a>c)return new P.cn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cn(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
af:function(a){return new P.aF(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.el()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fZ})
z.name=""}else z.toString=H.fZ
return z},
fZ:function(){return J.a8(this.dartException)},
r:function(a){throw H.a(a)},
A:function(a){throw H.a(P.b2(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ek(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eK()
u=$.$get$eL()
t=$.$get$eM()
s=$.$get$eN()
r=$.$get$eR()
q=$.$get$eS()
p=$.$get$eP()
$.$get$eO()
o=$.$get$eU()
n=$.$get$eT()
m=v.a9(y)
if(m!=null)return z.$1(H.cV(H.K(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.K(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ek(H.K(y),m))}}return z.$1(new H.jG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ev()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ev()
return a},
bt:function(a){var z
if(a==null)return new H.fn(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fn(a)},
mp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mz:function(a,b,c,d,e,f){H.f(a,"$iscP")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mz)
a.$identity=z
return z},
hk:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.iR(z).r}else x=d
w=e?Object.create(new H.jd().constructor.prototype):Object.create(new H.cK(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.B()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dP(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ms,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dI:H.cL
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dP(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hh:function(a,b,c,d){var z=H.cL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hj(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hh(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hi:function(a,b,c,d){var z,y
z=H.cL
y=H.dI
switch(b?-1:a){case 0:throw H.a(H.j0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hj:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cd("self")
$.bw=z}y=$.dH
if(y==null){y=H.cd("receiver")
$.dH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hi(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()},
dn:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bT(b))
H.D(c)
y=!!J.M(d).$isc?J.bA(d):d
return H.hk(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fV:function(a,b){throw H.a(H.ax(a,H.K(b).substring(3)))},
mN:function(a,b){var z=J.aE(b)
throw H.a(H.hg(a,z.q(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.fV(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.mN(a,b)},
bT:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.ax(a,"List"))},
fS:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.fV(a,b)},
fM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c7:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fM(J.M(a))
if(z==null)return!1
y=H.fP(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dj)return a
$.dj=!0
try{if(H.c7(a,b))return a
z=H.ca(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dj=!1}},
ds:function(a,b){if(a!=null&&!H.dm(a,b))H.r(H.ax(a,H.ca(b)))
return a},
fE:function(a){var z
if(a instanceof H.n){z=H.fM(J.M(a))
if(z!=null)return H.ca(z)
return"Closure"}return H.bb(a)},
mU:function(a){throw H.a(new P.hs(H.K(a)))},
fN:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.K(c)
H.D(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.K(b)
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
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dv(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.m4(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.mo(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dv:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.am("")
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
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b_(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fH(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.bT(c)
H.K(d)
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dv(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fH:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
oj:function(a,b,c){return a.apply(b,H.bu(J.M(b)["$as"+H.l(c)],H.b_(b)))},
fR:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fR(z)}return!1},
dm:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fR(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}y=J.M(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dm(a,b))throw H.a(H.ax(a,H.ca(b)))
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
if('func' in c)return H.fP(a,b,c,d)
if('func' in a)return c.builtin$cls==="cP"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ca(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fH(H.bu(r,z),b,u,d)},
fP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mK(m,b,l,d)},
mK:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
ok:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
mC:function(a){var z,y,x,w,v,u
z=H.K($.fO.$1(a))
y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fG.$2(a,z))
if(z!=null){y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cE(x)
$.cA[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cD[z]=x
return x}if(v==="-"){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fU(a,x)
if(v==="*")throw H.a(P.c4(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fU(a,x)},
fU:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dw(a,!1,null,!!a.$isF)},
mJ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dw(z,c,null,null)},
mx:function(){if(!0===$.du)return
$.du=!0
H.my()},
my:function(){var z,y,x,w,v,u,t,s
$.cA=Object.create(null)
$.cD=Object.create(null)
H.mt()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fW.$1(v)
if(u!=null){t=H.mJ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mt:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bq(C.I,H.bq(C.N,H.bq(C.u,H.bq(C.u,H.bq(C.M,H.bq(C.J,H.bq(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fO=new H.mu(v)
$.fG=new H.mv(u)
$.fW=new H.mw(t)},
bq:function(a,b){return a(b)||b},
fX:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hn:{"^":"b;$ti",
i:function(a){return P.cX(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.ho()},
$isH:1},
hp:{"^":"hn;a,b,c,$ti",
gl:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bn(0,b))return
return this.cO(b)},
cO:function(a){return this.b[H.K(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cO(v),z))}}},
iQ:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jt:{"^":"b;a,b,c,d,e,f",
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
p:{
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ix:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ek:function(a,b){return new H.ix(a,b==null?null:b.method)}}},
hV:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hV(a,y,z?null:b.receiver)}}},
jG:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mW:{"^":"n:20;a",
$1:function(a){if(!!J.M(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fn:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
gea:function(){return this},
$iscP:1,
gea:function(){return this}},
eB:{"^":"n;"},
jd:{"^":"eB;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cK:{"^":"eB;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bU(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cL:function(a){return a.a},
dI:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cK("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ju:{"^":"a4;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.ju("TypeError: "+H.l(P.cf(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
hf:{"^":"a4;a",
i:function(a){return this.a},
p:{
hg:function(a,b){return new H.hf("CastError: "+H.l(P.cf(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
j_:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j0:function(a){return new H.j_(a)}}},
aV:{"^":"ia;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.i_(this,[H.y(this,0)])},
bn:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cL(y,b)}else return this.hu(b)},
hu:function(a){var z=this.d
if(z==null)return!1
return this.cg(this.bO(z,this.cf(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bO(z,this.cf(a))
x=this.cg(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bQ()
this.b=z}this.cD(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bQ()
this.c=y}this.cD(y,b,c)}else this.hw(b,c)},
hw:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bQ()
this.d=z}y=this.cf(a)
x=this.bO(z,y)
if(x==null)this.bX(z,y,[this.bR(a,b)])
else{w=this.cg(x,a)
if(w>=0)x[w].b=b
else x.push(this.bR(a,b))}},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cD:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.be(a,b)
if(z==null)this.bX(a,b,this.bR(b,c))
else z.b=c},
eP:function(){this.r=this.r+1&67108863},
bR:function(a,b){var z,y
z=new H.hZ(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eP()
return z},
cf:function(a){return J.bU(a)&0x3ffffff},
cg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.cX(this)},
be:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
cL:function(a,b){return this.be(a,b)!=null},
bQ:function(){var z=Object.create(null)
this.bX(z,"<non-identifier-key>",z)
this.eI(z,"<non-identifier-key>")
return z},
$isea:1},
hZ:{"^":"b;a,b,0c,0d"},
i_:{"^":"hA;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.i0(z,z.r,this.$ti)
y.c=z.e
return y}},
i0:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mu:{"^":"n:20;a",
$1:function(a){return this.a(a)}},
mv:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mw:{"^":"n:50;a",
$1:function(a){return this.a(H.K(a))}},
hT:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isem:1,
$isiS:1,
p:{
hU:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mo:function(a){return J.e5(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
it:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
lZ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mm(a,b,c))
return b},
ej:{"^":"u;",$isej:1,"%":"ArrayBuffer"},
d0:{"^":"u;",$isd0:1,"%":"DataView;ArrayBufferView;d_|fh|fi|iu|fj|fk|aX"},
d_:{"^":"d0;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dr},
iu:{"^":"fi;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mn(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.q]},
$asx:function(){return[P.q]},
$isj:1,
$asj:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fk;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nx:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ny:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nz:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nA:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nB:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nC:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d1:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.lZ(b,c,a.length)))},
$isd1:1,
$isO:1,
"%":";Uint8Array"},
fh:{"^":"d_+x;"},
fi:{"^":"fh+cg;"},
fj:{"^":"d_+x;"},
fk:{"^":"fj+cg;"}}],["","",,P,{"^":"",
ke:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.kg(z),1)).observe(y,{childList:true})
return new P.kf(z,y,x)}else if(self.setImmediate!=null)return P.mc()
return P.md()},
o8:[function(a){self.scheduleImmediate(H.br(new P.kh(H.h(a,{func:1,ret:-1})),0))},"$1","mb",4,0,11],
o9:[function(a){self.setImmediate(H.br(new P.ki(H.h(a,{func:1,ret:-1})),0))},"$1","mc",4,0,11],
oa:[function(a){P.d7(C.q,H.h(a,{func:1,ret:-1}))},"$1","md",4,0,11],
d7:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a1(a.a,1000)
return P.li(z<0?0:z,b)},
eF:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.e.a1(a.a,1000)
return P.lj(z<0?0:z,b)},
m7:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.aw]}))return b.hV(a,null,P.b,P.aw)
if(H.c7(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m6:function(){var z,y
for(;z=$.bp,z!=null;){$.bQ=null
y=z.b
$.bp=y
if(y==null)$.bP=null
z.a.$0()}},
oi:[function(){$.dk=!0
try{P.m6()}finally{$.bQ=null
$.dk=!1
if($.bp!=null)$.$get$de().$1(P.fI())}},"$0","fI",0,0,3],
fD:function(a){var z=new P.fb(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bP=z
$.bp=z
if(!$.dk)$.$get$de().$1(P.fI())}else{$.bP.b=z
$.bP=z}},
ma:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fD(a)
$.bQ=$.bP
return}y=new P.fb(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bp=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
mO:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.S
if(C.j===y){P.cz(null,null,C.j,a)
return}y.toString
P.cz(null,null,y,H.h(y.c_(a),z))},
eE:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.S
if(y===C.j){y.toString
return P.d7(a,b)}return P.d7(a,H.h(y.c_(b),z))},
jq:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.S
if(y===C.j){y.toString
return P.eF(a,b)}x=y.d9(b,P.bi)
$.S.toString
return P.eF(a,H.h(x,z))},
cy:function(a,b,c,d,e){var z={}
z.a=d
P.ma(new P.m8(z,e))},
fz:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
fA:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
m9:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cz:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c_(d):c.hb(d,-1)
P.fD(d)},
kg:{"^":"n:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kf:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kh:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ki:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fq:{"^":"b;a,0b,c",
ev:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.ll(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.lk(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbi:1,
p:{
li:function(a,b){var z=new P.fq(!0,0)
z.ev(a,b)
return z},
lj:function(a,b){var z=new P.fq(!1,0)
z.ew(a,b)
return z}}},
ll:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lk:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ej(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hC:function(a){if(this.c!==6)return!0
return this.b.b.cr(H.h(this.d,{func:1,ret:P.ag,args:[P.b]}),a.a,P.ag,P.b)},
ht:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.aw]}))return H.ds(w.i2(z,a.a,a.b,null,y,P.aw),x)
else return H.ds(w.cr(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;cY:a<,b,0fs:c<,$ti",
e1:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m7(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.S,[c])
w=b==null?1:3
this.cE(new P.bn(x,w,a,b,[z,c]))
return x},
i5:function(a,b){return this.e1(a,null,b)},
cE:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaS")
z=y.a
if(z<4){y.cE(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cz(null,null,z,H.h(new P.kx(this,a),{func:1,ret:-1}))}},
cT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaS")
y=u.a
if(y<4){u.cT(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cz(null,null,y,H.h(new P.kC(z,this),{func:1,ret:-1}))}},
bT:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cI:function(a){var z,y,x,w
z=H.y(this,0)
H.ds(a,{futureOr:1,type:z})
y=this.$ti
x=H.bS(a,"$isbz",y,"$asbz")
if(x){z=H.bS(a,"$isaS",y,null)
if(z)P.fe(a,this)
else P.ky(a,this)}else{w=this.bT()
H.z(a,z)
this.a=4
this.c=a
P.bL(this,w)}},
bK:[function(a,b){var z
H.f(b,"$isaw")
z=this.bT()
this.a=8
this.c=new P.ak(a,b)
P.bL(this,z)},function(a){return this.bK(a,null)},"ih","$2","$1","geE",4,2,49],
$isbz:1,
p:{
ky:function(a,b){var z,y,x
b.a=1
try{a.e1(new P.kz(b),new P.kA(b),null)}catch(x){z=H.ar(x)
y=H.bt(x)
P.mO(new P.kB(b,z,y))}},
fe:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaS")
if(z>=4){y=b.bT()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.cT(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cy(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bL(z.a,b)}y=z.a
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
P.cy(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.kF(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kE(x,b,r).$0()}else if((y&2)!==0)new P.kD(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.M(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fe(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kx:{"^":"n:0;a,b",
$0:function(){P.bL(this.a,this.b)}},
kC:{"^":"n:0;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
kz:{"^":"n:14;a",
$1:function(a){var z=this.a
z.a=0
z.cI(a)}},
kA:{"^":"n:51;a",
$2:function(a,b){this.a.bK(a,H.f(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kB:{"^":"n:0;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
kF:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e_(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.M(z).$isbz){if(z instanceof P.aS&&z.gcY()>=4){if(z.gcY()===8){w=this.b
w.b=H.f(z.gfs(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i5(new P.kG(t),null)
w.a=!1}}},
kG:{"^":"n:47;a",
$1:function(a){return this.a}},
kE:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cr(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kD:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hC(z)&&w.e!=null){v=this.b
v.b=w.ht(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fb:{"^":"b;a,0b"},
d5:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.S,[P.m])
z.a=0
this.hB(new P.jg(z,this),!0,new P.jh(z,y),y.geE())
return y}},
jg:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"d5",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"d5",0)]}}},
jh:{"^":"n:0;a,b",
$0:function(){this.b.cI(this.a.a)}},
ex:{"^":"b;$ti"},
jf:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lN:{"^":"b;",$iso7:1},
m8:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.el()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l0:{"^":"lN;",
i3:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.S){a.$0()
return}P.fz(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cy(null,null,this,z,H.f(y,"$isaw"))}},
i4:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.S){a.$1(b)
return}P.fA(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cy(null,null,this,z,H.f(y,"$isaw"))}},
hb:function(a,b){return new P.l2(this,H.h(a,{func:1,ret:b}),b)},
c_:function(a){return new P.l1(this,H.h(a,{func:1,ret:-1}))},
d9:function(a,b){return new P.l3(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e_:function(a,b){H.h(a,{func:1,ret:b})
if($.S===C.j)return a.$0()
return P.fz(null,null,this,a,b)},
cr:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.S===C.j)return a.$1(b)
return P.fA(null,null,this,a,b,c,d)},
i2:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.S===C.j)return a.$2(b,c)
return P.m9(null,null,this,a,b,c,d,e,f)},
hV:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
l2:{"^":"n;a,b,c",
$0:function(){return this.a.e_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l1:{"^":"n:3;a,b",
$0:function(){return this.a.i3(this.b)}},
l3:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i4(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i1:function(a,b,c,d,e){return new H.aV(0,0,[d,e])},
i2:function(a,b,c){H.bT(a)
return H.w(H.mp(a,new H.aV(0,0,[b,c])),"$isea",[b,c],"$asea")},
eb:function(a,b){return new H.aV(0,0,[a,b])},
i5:function(a,b,c,d){return new P.kN(0,0,[d])},
hO:function(a,b,c){var z,y
if(P.dl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.m5(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.ey(b,H.fS(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dl(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.ey(x.gaC(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaC()+c
y=z.gaC()
return y.charCodeAt(0)==0?y:y},
dl:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
m5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
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
i3:function(a,b,c){var z=P.i1(null,null,null,b,c)
a.I(0,new P.i4(z,b,c))
return z},
cX:function(a){var z,y,x
z={}
if(P.dl(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaC()+"{"
z.a=!0
J.dB(a,new P.ib(z,y))
z=y
z.a=z.gaC()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaC()
return z.charCodeAt(0)==0?z:z},
kN:{"^":"kH;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.fg(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dg()
this.b=z}return this.cG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dg()
this.c=y}return this.cG(y,b)}else return this.ex(0,b)},
ex:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dg()
this.d=z}y=this.cJ(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cU(this.c,b)
else return this.fk(0,b)},
fk:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eM(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.d_(y.splice(x,1)[0])
return!0},
cG:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdf")!=null)return!1
a[b]=this.bJ(b)
return!0},
cU:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdf")
if(z==null)return!1
this.d_(z)
delete a[b]
return!0},
cH:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.df(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cH()
return z},
d_:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cH()},
cJ:function(a){return J.bU(a)&0x3ffffff},
eM:function(a,b){return a[this.cJ(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
df:{"^":"b;a,0b,0c"},
kO:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fg:function(a,b,c){var z=new P.kO(a,b,[c])
z.c=a.e
return z}}},
kH:{"^":"j1;"},
i4:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
ck:{"^":"kP;",$isj:1,$isc:1},
x:{"^":"b;$ti",
gY:function(a){return new H.ec(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
i7:function(a,b){var z,y,x
z=H.d([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
i6:function(a){return this.i7(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
ia:{"^":"ah;"},
ib:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ah",0),H.aZ(this,a,"ah",1)]})
for(z=J.bv(this.gal(a));z.E();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.as(this.gal(a))},
i:function(a){return P.cX(a)},
$isH:1},
lq:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
ic:{"^":"b;$ti",
j:function(a,b){return J.dA(this.a,b)},
m:function(a,b,c){J.cF(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dB(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.as(this.a)},
i:function(a){return J.a8(this.a)},
$isH:1},
f0:{"^":"lr;a,$ti"},
j3:{"^":"b;$ti",
i:function(a){return P.cR(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dD("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=P.fg(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$isj:1},
j1:{"^":"j3;"},
kP:{"^":"b+x;"},
lr:{"^":"ic+lq;$ti"}}],["","",,P,{"^":"",hc:{"^":"bV;a",
hF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$fc()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cC(C.b.F(b,s))
o=H.cC(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.q(b,x,y)
w.a+=H.cm(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dG(b,u,d,v,t,k)
else{j=C.e.bb(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aM(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dG(b,u,d,v,t,i)
else{j=C.e.bb(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aM(b,d,d,j===2?"==":"=")}return b},
$asbV:function(){return[[P.c,P.m],P.i]},
p:{
dG:function(a,b,c,d,e,f){if(C.e.bb(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hd:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bV:{"^":"b;$ti"},bx:{"^":"jf;$ti"},hC:{"^":"bV;",
$asbV:function(){return[P.i,[P.c,P.m]]}},jS:{"^":"hC;a",
ghn:function(){return C.F}},jZ:{"^":"bx;",
aS:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lM(0,0,x)
if(w.eK(a,b,z)!==z)w.d1(J.h4(a,z-1),0)
return C.U.bF(x,0,w.b)},
c5:function(a){return this.aS(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lM:{"^":"b;a,b,c",
d1:function(a,b){var z,y,x,w,v
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
eK:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d1(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jT:{"^":"bx;a",
aS:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.jU(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aK(b,c,y,null,null,null)
x=new P.am("")
w=new P.lJ(!1,x,!0,0,0,0)
w.aS(a,b,y)
w.hp(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c5:function(a){return this.aS(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
jU:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.jV(!1,b,c,d)
return},
jV:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.dc(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.dc(z,b)
return P.dc(z,b.subarray(c,d))},
dc:function(a,b){if(P.jX(b))return
return P.jY(a,b)},
jY:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
jX:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jW:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lJ:{"^":"b;a,b,c,d,e,f",
hp:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lL(c)
v=new P.lK(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bD()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.e.b7(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.V("Overlong encoding of 0x"+C.e.b7(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.e.b7(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cm(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cv()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.e.b7(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.e.b7(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lL:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bD()
if((w&127)!==w)return x-b}return z-b}},lK:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c3(this.d,a,b)}}}],["","",,P,{"^":"",
c9:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iK(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hE:function(a){var z=J.M(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
i6:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hQ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i7:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gY(a);x.E();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c3:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.ep(z?C.a.bF(a,b,c):a)}if(!!J.M(a).$isd1)return H.iM(a,b,P.aK(b,c,a.length,null,null,null))
return P.ji(a,b,c)},
ji:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.Z(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.as(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gP(y))}return H.ep(w)},
iT:function(a,b,c){return new H.hT(a,H.hU(a,!1,!0,!1))},
f2:function(){var z=H.iC()
if(z!=null)return P.jM(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hE(a)},
v:function(a){return new P.fd(a)},
i8:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dx:function(a){H.mM(a)},
jM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f1(b>0||c<c?C.b.q(a,b,c):a,5,null).ge4()
else if(y===32)return P.f1(C.b.q(a,z,c),0,null).ge4()}x=new Array(8)
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
if(P.fB(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ia()
if(v>=b)if(P.fB(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.p(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a5(a,"..",s)))n=r>s+2&&C.b.a5(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a5(a,"file",b)){if(u<=b){if(!C.b.a5(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aM(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a5(a,"http",b)){if(x&&t+3===s&&C.b.a5(a,"80",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a5(a,"https",b)){if(x&&t+4===s&&C.b.a5(a,"443",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.l5(a,v,u,t,s,r,q,o)}return P.ls(a,b,c,v,u,t,s,r,q,o)},
f4:function(a,b){var z=P.i
return C.a.hq(H.d(a.split("&"),[z]),P.eb(z,z),new P.jP(b),[P.H,P.i,P.i])},
jK:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jL(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.T(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c9(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.cv()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c9(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.cv()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jN(a)
y=new P.jO(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.T(a,w)
if(s===58){if(w===b){++w
if(C.b.T(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jK(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.e.aF(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m_:function(){var z,y,x,w,v
z=P.i8(22,new P.m1(),!0,P.O)
y=new P.m0(z)
x=new P.m2()
w=new P.m3()
v=H.f(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isO"),"]",5)
v=H.f(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isO"),"az",21)
v=H.f(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fB:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fC()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ag:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.e.aF(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ht(H.iJ(this))
y=P.bX(H.iH(this))
x=P.bX(H.iD(this))
w=P.bX(H.iE(this))
v=P.bX(H.iG(this))
u=P.bX(H.iI(this))
t=P.hu(H.iF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
ht:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bX:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a_;"},
"+double":0,
b4:{"^":"b;a",
k:function(a,b){return new P.b4(C.e.ab(this.a*b))},
M:function(a,b){return C.e.M(this.a,H.f(b,"$isb4").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hz()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hy().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e_:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hy:{"^":"n:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hz:{"^":"n:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
el:{"^":"a4;",
i:function(a){return"Throw of null."}},
aF:{"^":"a4;a,b,c,d",
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbM()+y+x
if(!this.a)return w
v=this.gbL()
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
cb:function(a){return new P.aF(!1,null,null,a)},
cc:function(a,b,c){return new P.aF(!0,a,b,c)},
dD:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
cn:{"^":"aF;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
co:function(a,b,c){return new P.cn(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cn(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hM:{"^":"aF;e,l:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.h0(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
R:function(a,b,c,d,e){var z=H.D(e!=null?e:J.as(b))
return new P.hM(b,z,!0,a,c,"Index out of range")}}},
jI:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.jI(a)}}},
jF:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c4:function(a){return new P.jF(a)}}},
jc:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hm:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b2:function(a){return new P.hm(a)}}},
iy:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
ev:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hs:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fd:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hK:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.T(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.hK(a,b,c)}}},
m:{"^":"a_;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.E();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dD("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hO(this,"(",")")}},
cS:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gR:function(a){return P.b.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gR:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$isem:1},
"+String":0,
am:{"^":"b;aC:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnW:1,
p:{
ey:function(a,b,c){var z=J.bv(b)
if(!z.E())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.E())}else{a+=H.l(z.gP(z))
for(;z.E();)a=a+c+H.l(z.gP(z))}return a}}},
jP:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.K(b)
y=J.aE(b).dJ(b,"=")
if(y===-1){if(b!=="")J.cF(a,P.di(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
J.cF(a,P.di(x,0,x.length,z,!0),P.di(w,0,w.length,z,!0))}return a}},
jL:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
jN:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jO:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c9(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cv:{"^":"b;bE:a<,b,c,d,dV:e>,f,r,0x,0y,0z,0Q,0ch",
ge5:function(){return this.b},
gce:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbB:function(a){var z=this.d
if(z==null)return P.fr(this.a)
return z},
gcm:function(a){var z=this.f
return z==null?"":z},
gdE:function(){var z=this.r
return z==null?"":z},
cq:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
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
g=P.dh(g,0,0,h)
return new P.cv(i,j,c,f,d,g,this.r)},
dZ:function(a,b){return this.cq(a,null,null,null,null,null,null,b,null,null)},
gcn:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f0(P.f4(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdF:function(){return this.c!=null},
gdI:function(){return this.f!=null},
gdG:function(){return this.r!=null},
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
t:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdb){y=this.a
x=b.gbE()
if(y==null?x==null:y===x)if(this.c!=null===b.gdF()){y=this.b
x=b.ge5()
if(y==null?x==null:y===x){y=this.gce(this)
x=z.gce(b)
if(y==null?x==null:y===x){y=this.gbB(this)
x=z.gbB(b)
if(y==null?x==null:y===x)if(this.e===z.gdV(b)){y=this.f
x=y==null
if(!x===b.gdI()){if(x)y=""
if(y===z.gcm(b)){z=this.r
y=z==null
if(!y===b.gdG()){if(y)z=""
z=z===b.gdE()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gR:function(a){var z=this.z
if(z==null){z=C.b.gR(this.i(0))
this.z=z}return z},
$isdb:1,
p:{
cw:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fw().b
if(typeof b!=="string")H.r(H.af(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"bV",0))
y=c.ghn().c5(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cm(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ls:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lD(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lE(a,z,e-1):""
x=P.lx(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lA(P.c9(C.b.q(a,w,g),new P.lt(a,f),null),j):null}else{y=""
x=null
v=null}u=P.ly(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dh(a,h+1,i,null):null
return new P.cv(j,y,x,v,u,t,i<c?P.lw(a,i+1,c):null)},
fr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.a(P.V(c,a,b))},
lA:function(a,b){if(a!=null&&a===P.fr(b))return
return a},
lx:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.O()
z=c-1
if(C.b.T(a,z)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
P.f3(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.T(a,y)===58){P.f3(a,b,c)
return"["+a+"]"}return P.lG(a,b,c)},
lG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.T(a,z)
if(v===37){u=P.fy(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bM(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.T(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fs(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lD:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fu(C.b.F(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bM(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lu(y?a.toLowerCase():a)},
lu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lE:function(a,b,c){return P.bN(a,b,c,C.Q)},
ly:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bN(a,b,c,C.y):C.t.iR(d,new P.lz(),P.i).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.lF(w,e,f)},
lF:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.lH(a,!z||c)
return P.lI(a)},
dh:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.cb("Both query and queryParameters specified"))
return P.bN(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.I(0,new P.lB(new P.lC(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lw:function(a,b,c){return P.bN(a,b,c,C.n)},
fy:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.T(a,b+1)
x=C.b.T(a,z)
w=H.cC(y)
v=H.cC(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aF(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cm(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fs:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.fC(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c3(y,0,null)},
bN:function(a,b,c,d){var z=P.fx(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.q(a,b,c):z},
fx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.T(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fy(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bM(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.T(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fs(v)}}if(w==null)w=new P.am("")
w.a+=C.b.q(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fv:function(a){if(C.b.a4(a,"."))return!0
return C.b.dJ(a,"/.")!==-1},
lI:function(a){var z,y,x,w,v,u,t
if(!P.fv(a))return a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lH:function(a,b){var z,y,x,w,v,u
if(!P.fv(a))return!b?P.ft(a):a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.ft(z[0]))}return C.a.C(z,"/")},
ft:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fu(J.h1(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lv:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cb("Invalid URL encoding"))}}return z},
di:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dt(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a3(y.q(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.cb("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cb("Truncated URI"))
C.a.h(u,P.lv(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.jT(!1).c5(u)},
fu:function(a){var z=a|32
return 97<=z&&z<=122}}},
lt:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lz:{"^":"n:38;",
$1:function(a){return P.cw(C.S,a,C.k,!1)}},
lC:{"^":"n:23;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cw(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cw(C.p,b,C.k,!0))}}},
lB:{"^":"n:36;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bv(H.fS(b,"$isj")),y=this.a;z.E();)y.$2(a,H.K(z.gP(z)))}},
jJ:{"^":"b;a,b,c",
ge4:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.dK(y,"?",z)
w=y.length
if(x>=0){v=P.bN(y,x+1,w,C.n)
w=x}else v=null
z=new P.kn(this,"data",null,null,null,P.bN(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.a5(a,"base64",t+1))throw H.a(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hF(0,a,s,y)
else{r=P.fx(a,s,y,C.n,!0)
if(r!=null)a=C.b.aM(a,s,y,r)}return new P.jJ(a,z,c)}}},
m1:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
m0:{"^":"n:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.h5(z,0,96,b)
return z}},
m2:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
m3:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
l5:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdF:function(){return this.c>0},
gdH:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdI:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdG:function(){return this.r<this.a.length},
gcQ:function(){return this.b===4&&C.b.a4(this.a,"http")},
gcR:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbE:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcQ()){this.x="http"
z="http"}else if(this.gcR()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
ge5:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gce:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbB:function(a){var z
if(this.gdH()){z=this.d
if(typeof z!=="number")return z.B()
return P.c9(C.b.q(this.a,z+1,this.e),null,null)}if(this.gcQ())return 80
if(this.gcR())return 443
return 0},
gdV:function(a){return C.b.q(this.a,this.e,this.f)},
gcm:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.q(this.a,z+1,y):""},
gdE:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gcn:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.T
z=P.i
return new P.f0(P.f4(this.gcm(this),C.k),[z,z])},
cq:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbE()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdH()?this.gbB(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dh(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cv(i,j,c,f,d,g,b)},
dZ:function(a,b){return this.cq(a,null,null,null,null,null,null,b,null,null)},
gR:function(a){var z=this.y
if(z==null){z=C.b.gR(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdb)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdb:1},
kn:{"^":"cv;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dN:function(a,b){var z=document.createElement("canvas")
return z},
hB:function(a){H.f(a,"$isa9")
return"wheel"},
hN:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise4")
try{J.h7(z,a)}catch(x){H.ar(x)}return z},
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a,b,c,d){var z,y
z=W.ct(W.ct(W.ct(W.ct(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fF:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.j)return a
return z.d9(a,b)},
aa:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mY:{"^":"u;0l:length=","%":"AccessibleNodeList"},
mZ:{"^":"aa;0Z:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n_:{"^":"aa;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cJ:{"^":"u;",$iscJ:1,"%":";Blob"},
n5:{"^":"aa;0Z:type}","%":"HTMLButtonElement"},
cM:{"^":"aa;",
cu:function(a,b,c){var z=a.getContext(b,P.me(c,null))
return z},
$iscM:1,
"%":"HTMLCanvasElement"},
n7:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n9:{"^":"hr;0l:length=","%":"CSSPerspective"},
b3:{"^":"u;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
na:{"^":"km;0l:length=",
eb:function(a,b){var z=a.getPropertyValue(this.eB(a,b))
return z==null?"":z},
eB:function(a,b){var z,y
z=$.$get$dS()
y=z[b]
if(typeof y==="string")return y
y=this.fD(a,b)
z[b]=y
return y},
fD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hv()+b
if(z in a)return z
return b},
gc0:function(a){return a.bottom},
gak:function(a){return a.height},
gaJ:function(a){return a.left},
gb4:function(a){return a.right},
gb9:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hq:{"^":"b;",
gaJ:function(a){return this.eb(a,"left")}},
dT:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hr:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nb:{"^":"dT;0l:length=","%":"CSSTransformValue"},
nc:{"^":"dT;0l:length=","%":"CSSUnparsedValue"},
nd:{"^":"u;0l:length=","%":"DataTransferItemList"},
ne:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
nf:{"^":"kp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa6",[P.a_],"$asa6")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a6,P.a_]]},
$asx:function(){return[[P.a6,P.a_]]},
$isj:1,
$asj:function(){return[[P.a6,P.a_]]},
$isc:1,
$asc:function(){return[[P.a6,P.a_]]},
$asB:function(){return[[P.a6,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hx:{"^":"u;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gak(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa6",[P.a_],"$asa6")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb9(b)&&this.gao(a)===z.gao(b)&&this.gak(a)===z.gak(b)},
gR:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gc0:function(a){return a.bottom},
gak:function(a){return a.height},
gaJ:function(a){return a.left},
gb4:function(a){return a.right},
gb9:function(a){return a.top},
gao:function(a){return a.width},
$isa6:1,
$asa6:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
ng:{"^":"kr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nh:{"^":"u;0l:length=","%":"DOMTokenList"},
kl:{"^":"ck;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
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
gY:function(a){var z=this.i6(this)
return new J.at(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c4(null))},
$asx:function(){return[W.a0]},
$asj:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"I;",
gc4:function(a){return new W.kl(a,a.children)},
gda:function(a){return P.iP(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
ni:{"^":"aa;0Z:type}","%":"HTMLEmbedElement"},
ac:{"^":"u;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"u;",
d3:["ee",function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(c!=null)this.ey(a,b,c,!1)}],
ey:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.ac]}),1),!1)},
$isa9:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fl|fm|fo|fp"},
aU:{"^":"cJ;",$isaU:1,"%":"File"},
e0:{"^":"kw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaU")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asx:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise0:1,
$asB:function(){return[W.aU]},
"%":"FileList"},
nj:{"^":"a9;0l:length=","%":"FileWriter"},
nk:{"^":"aa;0l:length=","%":"HTMLFormElement"},
b6:{"^":"u;",$isb6:1,"%":"Gamepad"},
nl:{"^":"u;0l:length=","%":"History"},
nm:{"^":"kJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e3:{"^":"u;",$ise3:1,"%":"ImageData"},
e4:{"^":"aa;0Z:type}",$ise4:1,"%":"HTMLInputElement"},
bB:{"^":"d8;",$isbB:1,"%":"KeyboardEvent"},
nq:{"^":"aa;0Z:type}","%":"HTMLLinkElement"},
nr:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
ns:{"^":"u;0l:length=","%":"MediaList"},
nt:{"^":"a9;",
d3:function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.ee(a,b,c,!1)},
"%":"MessagePort"},
nu:{"^":"kQ;",
j:function(a,b){return P.aT(a.get(H.K(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.iq(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iq:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nv:{"^":"kR;",
j:function(a,b){return P.aT(a.get(H.K(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.ir(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ir:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"u;",$isb9:1,"%":"MimeType"},
nw:{"^":"kT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"MimeTypeArray"},
av:{"^":"d8;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kk:{"^":"ck;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isI")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.e1(z,z.length,-1,[H.aZ(C.V,z,"B",0)])},
aw:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asx:function(){return[W.I]},
$asj:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a9;",
hZ:function(a,b){var z,y
try{z=a.parentNode
J.h2(z,b,a)}catch(y){H.ar(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ef(a):z},
fn:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iv:{"^":"kV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
nE:{"^":"aa;0Z:type}","%":"HTMLOListElement"},
nF:{"^":"aa;0Z:type}","%":"HTMLObjectElement"},
ba:{"^":"u;0l:length=",$isba:1,"%":"Plugin"},
nI:{"^":"kZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"PluginArray"},
nK:{"^":"u;0Z:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nL:{"^":"l4;",
j:function(a,b){return P.aT(a.get(H.K(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.iZ(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iZ:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nN:{"^":"aa;0Z:type}","%":"HTMLScriptElement"},
nP:{"^":"aa;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"a9;",$isbc:1,"%":"SourceBuffer"},
nQ:{"^":"fm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SourceBufferList"},
nR:{"^":"aa;0Z:type}","%":"HTMLSourceElement"},
bd:{"^":"u;",$isbd:1,"%":"SpeechGrammar"},
nS:{"^":"l7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"u;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
nU:{"^":"la;",
j:function(a,b){return a.getItem(H.K(b))},
m:function(a,b,c){a.setItem(b,H.K(c))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.je(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
je:{"^":"n:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nX:{"^":"aa;0Z:type}","%":"HTMLStyleElement"},
bf:{"^":"u;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
d6:{"^":"aa;",$isd6:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"a9;",$isbg:1,"%":"TextTrack"},
bh:{"^":"a9;",$isbh:1,"%":"TextTrackCue|VTTCue"},
o_:{"^":"lh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TextTrackCueList"},
o0:{"^":"fp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"TextTrackList"},
o1:{"^":"u;0l:length=","%":"TimeRanges"},
bj:{"^":"u;",$isbj:1,"%":"Touch"},
bk:{"^":"d8;",$isbk:1,"%":"TouchEvent"},
o2:{"^":"ln;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TouchList"},
o3:{"^":"u;0l:length=","%":"TrackDefaultList"},
d8:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o5:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
o6:{"^":"a9;0l:length=","%":"VideoTrackList"},
bK:{"^":"av;",
ghk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kd:{"^":"a9;",
fo:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.a_]}),1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ob:{"^":"lP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb3")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isj:1,
$asj:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asB:function(){return[W.b3]},
"%":"CSSRuleList"},
oc:{"^":"hx;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa6",[P.a_],"$asa6")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb9(b)&&a.width===z.gao(b)&&a.height===z.gak(b)},
gR:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oe:{"^":"lR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asB:function(){return[W.b6]},
"%":"GamepadList"},
of:{"^":"lT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
og:{"^":"lV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
oh:{"^":"lX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"StyleSheetList"},
ks:{"^":"d5;a,b,c,$ti",
hB:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
od:{"^":"ks;a,b,c,$ti"},
kt:{"^":"ex;a,b,c,d,e,$ti",
fH:function(){var z=this.d
if(z!=null&&this.a<=0)J.h3(this.b,this.c,z,!1)},
p:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fF(new W.ku(c),W.ac)
z=new W.kt(0,a,b,z,!1,[e])
z.fH()
return z}}},
ku:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isac"))}},
B:{"^":"b;$ti",
gY:function(a){return new W.e1(a,this.gl(a),-1,[H.aZ(this,a,"B",0)])},
aw:function(a,b,c,d){H.z(d,H.aZ(this,a,"B",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
e1:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
km:{"^":"u+hq;"},
ko:{"^":"u+x;"},
kp:{"^":"ko+B;"},
kq:{"^":"u+x;"},
kr:{"^":"kq+B;"},
kv:{"^":"u+x;"},
kw:{"^":"kv+B;"},
kI:{"^":"u+x;"},
kJ:{"^":"kI+B;"},
kQ:{"^":"u+ah;"},
kR:{"^":"u+ah;"},
kS:{"^":"u+x;"},
kT:{"^":"kS+B;"},
kU:{"^":"u+x;"},
kV:{"^":"kU+B;"},
kY:{"^":"u+x;"},
kZ:{"^":"kY+B;"},
l4:{"^":"u+ah;"},
fl:{"^":"a9+x;"},
fm:{"^":"fl+B;"},
l6:{"^":"u+x;"},
l7:{"^":"l6+B;"},
la:{"^":"u+ah;"},
lg:{"^":"u+x;"},
lh:{"^":"lg+B;"},
fo:{"^":"a9+x;"},
fp:{"^":"fo+B;"},
lm:{"^":"u+x;"},
ln:{"^":"lm+B;"},
lO:{"^":"u+x;"},
lP:{"^":"lO+B;"},
lQ:{"^":"u+x;"},
lR:{"^":"lQ+B;"},
lS:{"^":"u+x;"},
lT:{"^":"lS+B;"},
lU:{"^":"u+x;"},
lV:{"^":"lU+B;"},
lW:{"^":"u+x;"},
lX:{"^":"lW+B;"}}],["","",,P,{"^":"",
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.eb(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.K(y[w])
z.m(0,v,a[v])}return z},
me:function(a,b){var z={}
a.I(0,new P.mf(z))
return z},
dZ:function(){var z=$.dY
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.dY=z}return z},
hv:function(){var z,y
z=$.dV
if(z!=null)return z
y=$.dW
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dW=y}if(y)z="-moz-"
else{y=$.dX
if(y==null){y=!P.dZ()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dX=y}if(y)z="-ms-"
else z=P.dZ()?"-o-":"-webkit-"}$.dV=z
return z},
ld:{"^":"b;",
dB:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
ct:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isiS)throw H.a(P.c4("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscJ)return a
if(!!y.$ise0)return a
if(!!y.$ise3)return a
if(!!y.$isej||!!y.$isd0)return a
if(!!y.$isH){x=this.dB(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.lf(z,this))
return z.a}if(!!y.$isc){x=this.dB(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hh(a,x)}throw H.a(P.c4("structured clone of other type"))},
hh:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.ct(z.j(a,w)))
return x}},
lf:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.ct(b)}},
mf:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
le:{"^":"ld;a,b"},
hH:{"^":"ck;a,b",
gbf:function(){var z,y,x
z=this.b
y=H.ay(z,"x",0)
x=W.a0
return new H.id(new H.kb(z,H.h(new P.hI(),{func:1,ret:P.ag,args:[y]}),[y]),H.h(new P.hJ(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.gbf()
J.h6(z.b.$1(J.cH(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gbf().a)},
j:function(a,b){var z=this.gbf()
return z.b.$1(J.cH(z.a,b))},
gY:function(a){var z=P.i7(this.gbf(),!1,W.a0)
return new J.at(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a0]},
$asj:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hI:{"^":"n:29;",
$1:function(a){return!!J.M(H.f(a,"$isI")).$isa0}},
hJ:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isI"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l_:{"^":"b;$ti",
gb4:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gc0:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bS(b,"$isa6",[P.a_],"$asa6")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb4(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gc0(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.kK(P.cu(P.cu(P.cu(P.cu(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a6:{"^":"l_;aJ:a>,b9:b>,ao:c>,ak:d>,$ti",p:{
iP:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a6(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"u;",$isbC:1,"%":"SVGLength"},np:{"^":"kM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbC")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bC]},
$isj:1,
$asj:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asB:function(){return[P.bC]},
"%":"SVGLengthList"},bE:{"^":"u;",$isbE:1,"%":"SVGNumber"},nD:{"^":"kX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbE")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bE]},
$isj:1,
$asj:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asB:function(){return[P.bE]},
"%":"SVGNumberList"},nJ:{"^":"u;0l:length=","%":"SVGPointList"},nO:{"^":"ez;0Z:type}","%":"SVGScriptElement"},nV:{"^":"lc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},nY:{"^":"ez;0Z:type}","%":"SVGStyleElement"},ez:{"^":"a0;",
gc4:function(a){return new P.hH(a,new W.kk(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bH:{"^":"u;",$isbH:1,"%":"SVGTransform"},o4:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbH")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bH]},
$isj:1,
$asj:function(){return[P.bH]},
$isc:1,
$asc:function(){return[P.bH]},
$asB:function(){return[P.bH]},
"%":"SVGTransformList"},kL:{"^":"u+x;"},kM:{"^":"kL+B;"},kW:{"^":"u+x;"},kX:{"^":"kW+B;"},lb:{"^":"u+x;"},lc:{"^":"lb+B;"},lo:{"^":"u+x;"},lp:{"^":"lo+B;"}}],["","",,P,{"^":"",O:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}}],["","",,P,{"^":"",n0:{"^":"u;0l:length=","%":"AudioBuffer"},dF:{"^":"a9;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n1:{"^":"kj;",
j:function(a,b){return P.aT(a.get(H.K(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new P.ha(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},ha:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hb:{"^":"dF;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n2:{"^":"a9;0l:length=","%":"AudioTrackList"},he:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n3:{"^":"dF;0Z:type}","%":"BiquadFilterNode"},nG:{"^":"he;0l:length=","%":"OfflineAudioContext"},nH:{"^":"hb;0Z:type}","%":"Oscillator|OscillatorNode"},kj:{"^":"u+ah;"}}],["","",,P,{"^":"",es:{"^":"u;",$ises:1,"%":"WebGLRenderingContext"},jD:{"^":"u;",$isjD:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nT:{"^":"l9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isH")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asB:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},l8:{"^":"u+x;"},l9:{"^":"l8+B;"}}],["","",,O,{"^":"",aG:{"^":"b;0a,0b,0c,0d,$ti",
bH:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cw:function(a,b,c){var z=H.ay(this,"aG",0)
H.h(b,{func:1,ret:P.ag,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bc:function(a,b){return this.cw(a,null,b)},
fd:function(a){var z
H.w(a,"$isj",[H.ay(this,"aG",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eT:function(a,b){var z
H.w(b,"$isj",[H.ay(this,"aG",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.at(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"aG",0)
H.z(b,z)
z=[z]
if(this.fd(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eT(x,H.d([b],z))}},
$isj:1,
p:{
cN:function(a){var z=new O.aG([a])
z.bH(a)
return z}}},cZ:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
ep:function(a){var z=this.b
if(!(z==null))z.G(a)},
az:function(){return this.ep(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c1()},
dX:function(a){var z=this.a
if(a==null)C.a.h(z,V.c1())
else C.a.h(z,a)
this.az()},
ck:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cI:{"^":"b;"},aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cF:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(y.f==null)y.cF()}},
sa3:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdT(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.h(this.gdT(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.N("shape",z,this.c,this,[F.eu])
w.b=!0
this.a2(w)}},
sb5:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gdU(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gdU(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cF()
w=new D.N("technique",x,this.f,this,[O.cq])
w.b=!0
this.a2(w)}},
saK:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdS(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.h(this.gdS(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.N("mover",z,a,this,[U.ai])
w.b=!0
this.a2(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aO(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.au])
w.b=!0
this.a2(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.an(0,b)},
aL:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gU(z))
else C.a.h(z.a,y.k(0,z.gU(z)))
z.az()
a.dY(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.hY(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aL(a)
a.dW()
a.dx.ck()},
gw:function(){var z=this.z
if(z==null){z=D.T()
this.z=z}return z},
a2:function(a){var z=this.z
if(!(z==null))z.G(a)},
V:function(){return this.a2(null)},
hK:[function(a){H.f(a,"$ist")
this.e=null
this.a2(a)},function(){return this.hK(null)},"iW","$1","$0","gdT",0,2,1],
hL:[function(a){this.a2(H.f(a,"$ist"))},function(){return this.hL(null)},"iX","$1","$0","gdU",0,2,1],
hJ:[function(a){this.a2(H.f(a,"$ist"))},function(){return this.hJ(null)},"iV","$1","$0","gdS",0,2,1],
hH:[function(a){this.a2(H.f(a,"$ist"))},function(){return this.hH(null)},"iT","$1","$0","gdR",0,2,1],
iS:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdR(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.V()},"$2","ghG",8,0,10],
iU:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdR(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.L(t.a,y)}}this.V()},"$2","ghI",8,0,10],
$isaJ:1,
p:{
cO:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.cN(E.aH)
z.y=y
y.bc(z.ghG(),z.ghI())
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
z.sa3(0,e)
z.sb5(f)
z.saK(c)
return z}}},iU:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
el:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cZ()
y=[V.au]
z.a=H.d([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.h(new E.iW(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cZ()
z.a=H.d([],y)
v=z.gw()
v.toString
x=H.h(new E.iX(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cZ()
z.a=H.d([],y)
y=z.gw()
y.toString
w=H.h(new E.iY(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.cq])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.i,A.et])},
ghU:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.k(0,y.gU(y))
this.z=y
z=y}return z},
dY:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
dW:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iV:function(a,b){var z=new E.iU(a,b)
z.el(a,b)
return z}}},iW:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},iX:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iY:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jn:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
er:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)
this.i0()},function(){return this.er(null)},"eq","$1","$0","gcB",0,2,1],
ghs:function(){var z,y,x
z=Date.now()
y=C.e.a1(P.e_(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
cV:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.d.dC(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.dC(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eE(C.q,this.gi_())},
i0:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jp(this),{func:1,ret:-1,args:[P.a_]})
C.B.eJ(z)
C.B.fo(z,W.fF(y,P.a_))}},"$0","gi_",0,0,3],
hX:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cV()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e_(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.az()
w=x.db
C.a.sl(w.a,0)
w.az()
w=x.dx
C.a.sl(w.a,0)
w.az()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aL(this.e)}}catch(v){z=H.ar(v)
y=H.bt(v)
P.dx("Error: "+H.l(z))
P.dx("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jo:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscM)return E.eD(a,!0,!0,!0,!1)
y=W.dN(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc4(a).h(0,y)
w=E.eD(y,!0,!0,!0,!1)
w.a=a
return w},
eD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jn()
y=P.i2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cu(a,"webgl",y)
x=H.f(x==null?C.l.cu(a,"experimental-webgl",y):x,"$ises")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iV(x,a)
w=new T.jj(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jQ(a)
v=new X.hW()
v.c=new X.aW(!1,!1,!1)
v.d=P.i5(null,null,null,P.m)
w.b=v
v=new X.is(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i9(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.js(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.ex,P.b]])
w.z=v
u=document
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.h(w.gf0(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.h(w.gf3(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.h(w.geX(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.h(w.gf5(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.h(w.gf4(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.h(w.gf8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.h(w.gfa(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.h(w.gf9(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.a2(a,H.K(W.hB(a)),H.h(w.gfb(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.h(w.gf1(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.h(w.gf2(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.h(w.gfc(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.h(w.gfj(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.h(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.h(w.gfi(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.cV()
return z}}},jp:{"^":"n:31;a",
$1:function(a){var z
H.mL(a)
z=this.a
if(z.z){z.z=!1
z.hX()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",p:{
dd:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dJ:{"^":"cI;a,b,c,d,e",
bj:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.v('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ka:{"^":"b;a",$isn4:1},dK:{"^":"b;a,0b,c,d",
aI:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bj:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bj(a)},
e3:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aL:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isnZ:1},ch:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcz:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
h9:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
ap:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dO:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hF(z))
return x!==0},
i1:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
af:function(a){return this.i1(a,!0,!1)},
p:{
T:function(){var z=new D.b5()
z.a=H.d([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hF:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},ci:{"^":"t;c,d,a,0b,$ti"},cj:{"^":"t;c,d,a,0b,$ti"},N:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dL:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"n6<"}},e8:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e8))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},e9:{"^":"t;c,a,0b"},hW:{"^":"b;0a,0b,0c,0d",
hR:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e9(a,this)
y.b=!0
return z.G(y)},
hN:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e9(a,this)
y.b=!0
return z.G(y)}},ed:{"^":"d3;x,y,c,d,e,a,0b"},i9:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gbl()
s=new X.c2(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cj:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bD()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
hS:function(a){return!1},
f7:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.ed(c,a,this.a.gbl(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.U(0,0)}},aW:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
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
return z+(this.c?"Shift+":"")}},c2:{"^":"d3;x,y,z,Q,ch,c,d,e,a,0b"},is:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbl()
x=new X.c2(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cj:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.bN(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bD()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.bN(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.bN(a,b,!1))
return!0},
hT:function(a,b){return!1}},d3:{"^":"t;"},eI:{"^":"d3;x,y,z,Q,ch,c,d,e,a,0b"},js:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gbl()
w=new X.eI(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hQ:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.G(this.ar(a,!0))
return!0},
hO:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.G(this.ar(a,!0))
return!0},
hP:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.G(this.ar(a,!1))
return!0}},jQ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbl:function(){var z=this.a
return V.er(0,0,(z&&C.l).gda(z).c,C.l.gda(z).d)},
cM:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e8(z,new X.aW(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
bY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=z.top
if(typeof x!=="number")return x.O()
return new V.U(y-w,x-v)},
aQ:function(a){return new V.a5(a.movementX,a.movementY)},
bS:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.d.ab(u.pageX)
C.d.ab(u.pageY)
s=z.left
C.d.ab(u.pageX)
C.a.h(y,new V.U(t-s,C.d.ab(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dL(z,new X.aW(y,a.altKey,a.shiftKey))},
bP:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.O()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iy:[function(a){this.f=!0},"$1","gf3",4,0,5],
ir:[function(a){this.f=!1},"$1","geX",4,0,5],
iv:[function(a){H.f(a,"$isav")
if(this.f&&this.bP(a))a.preventDefault()},"$1","gf0",4,0,4],
iA:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cM(a)
if(this.b.hR(z))a.preventDefault()},"$1","gf5",4,0,24],
iz:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cM(a)
if(this.b.hN(z))a.preventDefault()},"$1","gf4",4,0,24],
iC:[function(a){var z,y,x,w
H.f(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.ap(a)
x=this.aQ(a)
if(this.d.cj(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cj(y,w))a.preventDefault()},"$1","gf8",4,0,4],
iE:[function(a){var z,y,x
H.f(a,"$isav")
this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gfa",4,0,4],
ix:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bP(a)){this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","gf2",4,0,4],
iD:[function(a){var z,y,x
H.f(a,"$isav")
this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gf9",4,0,4],
iw:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bP(a)){this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gf1",4,0,4],
iF:[function(a){var z,y
H.f(a,"$isbK")
this.aE(a)
z=new V.a5((a&&C.A).ghj(a),C.A.ghk(a)).v(0,180)
if(this.x){if(this.d.hS(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hT(z,y))a.preventDefault()},"$1","gfb",4,0,35],
iG:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.f7(w,v,x)}},"$1","gfc",4,0,5],
iM:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.bY(a)
z=this.bS(a)
if(this.e.hQ(z))a.preventDefault()},"$1","gfj",4,0,12],
iK:[function(a){var z
H.f(a,"$isbk")
this.bY(a)
z=this.bS(a)
if(this.e.hO(z))a.preventDefault()},"$1","gfh",4,0,12],
iL:[function(a){var z
H.f(a,"$isbk")
this.bY(a)
z=this.bS(a)
if(this.e.hP(z))a.preventDefault()},"$1","gfi",4,0,12]}}],["","",,D,{"^":"",hw:{"^":"b;",$isa1:1,$isaJ:1},a1:{"^":"b;",$isaJ:1},hX:{"^":"aG;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.T()
this.Q=z}return z},
a6:function(a){var z=this.Q
if(!(z==null))z.G(a)},
f6:[function(a){var z
H.f(a,"$ist")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.f6(null)},"iB","$1","$0","gcS",0,2,1],
iH:[function(a){var z,y,x
H.w(a,"$isj",[D.a1],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.eF(x))return!1}return!0},"$1","gfe",4,0,37],
io:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcS(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cp)C.a.h(this.r,t)
s=t.z
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","geU",8,0,22],
iJ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcS(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cp)C.a.L(this.r,t)
s=t.z
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.L(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gfg",8,0,22],
eF:function(a){var z=C.a.bm(this.r,a)
return z},
$asj:function(){return[D.a1]},
$asaG:function(){return[D.a1]}},iB:{"^":"b;",$isa1:1,$isaJ:1},cp:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gw:function(){var z=this.z
if(z==null){z=D.T()
this.z=z}return z},
a6:[function(a){var z
H.f(a,"$ist")
z=this.z
if(!(z==null))z.G(a)},function(){return this.a6(null)},"is","$1","$0","geY",0,2,1],
$isa1:1,
$isaJ:1},jk:{"^":"b;",$isa1:1,$isaJ:1},jl:{"^":"b;",$isa1:1,$isaJ:1},jm:{"^":"b;",$isa1:1,$isaJ:1}}],["","",,V,{"^":"",
n8:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ip",8,0,33],
mX:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bb(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.d.e2($.o.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.d([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.aa(z[u],x))}return z},
Y:{"^":"b;a,b,c",
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
return new V.Y(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
b1:{"^":"b;a,b,c,d",
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
return new V.b1(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cl:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscl")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cl(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
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
au:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dL:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c1()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isau")
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
dD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
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
J:function(){return this.dD("",3,0)},
A:function(a){return this.dD(a,3,0)},
p:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c1:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ei:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eh:function(a,b,c,d){return V.aI(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eg:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
U:{"^":"b;a,b",
O:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
W:{"^":"b;a,b,c",
B:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bF:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bF(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eq:{"^":"b;a,b,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
er:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eq(a,b,c,d)}}},
a5:{"^":"b;a,b",
hz:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){var z,y,x,w
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
return new V.a5(z*b,y*b)},
v:function(a,b){var z,y
if($.o.$2(b,0))return new V.a5(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.a5(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hz:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dM:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hl:{"^":"dO;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.mX(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.T()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.G(a)},
se6:function(a,b){},
sdN:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.N("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.X(z)}},
sdP:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.N("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.X(z)}},
sa_:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.q])
z.b=!0
this.X(z)}},
sdO:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.X(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.q])
z.b=!0
this.X(z)}},
sdc:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.q])
z.b=!0
this.X(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
p:{
dQ:function(){var z=new U.hl()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dR:{"^":"ai;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
bW:function(a){var z=new U.dR()
z.a=a
return z}}},e2:{"^":"aG;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
X:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.X(null)},"aA","$1","$0","gbd",0,2,1],
ib:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.X(z)},"$2","ges",8,0,19],
iI:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gff",8,0,19],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c1():x
z=this.e
if(!(z==null))z.af(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ai]},
$asaG:function(){return[U.ai]},
$isai:1,
p:{
cQ:function(a){var z=new U.e2()
z.bH(U.ai)
z.bc(z.ges(),z.gff())
z.e=null
z.f=V.c1()
z.r=0
return z}}},ai:{"^":"dO;"},jR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.T()
this.fx=z}return z},
X:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.X(null)},"aA","$1","$0","gbd",0,2,1],
ha:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.T()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.T()
x.c=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.T()
x.f=z}x=H.h(this.geN(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.T()
x.b=z}x=H.h(this.gfG(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.gfF(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.T()
x.c=z}y=H.h(this.gfE(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
ik:[function(a){a=H.k(H.f(a,"$ist"),"$isc2")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geQ",4,0,2],
il:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$isc2")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))}this.aA()},"$1","geR",4,0,2],
im:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sW(-y*10*z)
this.aA()}},"$1","geS",4,0,2],
ii:[function(a){if(H.k(H.f(a,"$ist"),"$ised").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geN",4,0,2],
ij:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$isc2")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.aA()},"$1","geO",4,0,2],
iQ:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfG",4,0,2],
iP:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$iseI")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))}this.aA()},"$1","gfF",4,0,2],
iO:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sW(-y*10*z)
this.aA()}},"$1","gfE",4,0,2],
aO:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=V.eg(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1,
p:{
f5:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jR()
y=U.dQ()
y.se6(0,!0)
y.sdN(6.283185307179586)
y.sdP(0)
y.sa_(0,0)
y.sdO(100)
y.sW(0)
y.sdc(0.5)
z.b=y
y=y.gw()
y.toString
x=H.h(z.gbd(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)
y=U.dQ()
y.se6(0,!0)
y.sdN(6.283185307179586)
y.sdP(0)
y.sa_(0,0)
y.sdO(100)
y.sW(0)
y.sdc(0.5)
z.c=y
C.a.h(y.gw().a,x)
z.d=null
z.e=!1
z.f=!1
z.r=!1
z.x=2.5
z.y=2.5
z.z=2
z.Q=4
z.cx=!1
z.ch=!1
z.cy=0
z.db=0
z.dx=null
z.dy=0
z.fr=null
z.fx=null
w=new X.aW(b,!1,!1)
v=z.d
z.d=w
y=new D.N("modifiers",v,w,z,[X.aW])
y.b=!0
z.X(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.N("invertX",y,!1,z,[P.ag])
y.b=!0
z.X(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.N("invertY",y,!1,z,[P.ag])
y.b=!0
z.X(y)}z.ha(c)
return z}}}}],["","",,M,{"^":"",hD:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aB:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aB(null)},"ic","$1","$0","gah",0,2,1],
it:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","geZ",8,0,10],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.L(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gf_",8,0,10],
sb5:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.cq])
z.b=!0
this.aB(z)}},
gw:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dY(this.c)
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
u=C.d.ab(v.a*x)
if(typeof w!=="number")return H.p(w)
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
s.dX(V.aI(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.en
if(y==null){y=new V.E(0,0,-1)
m=y.v(0,Math.sqrt(y.D(y)))
y=new V.E(0,1,0).at(m)
l=y.v(0,Math.sqrt(y.D(y)))
k=m.at(l)
j=new V.E(0,0,0)
y=V.aI(l.a,k.a,m.a,l.N(0).D(j),l.b,k.b,m.b,k.N(0).D(j),l.c,k.c,m.c,m.N(0).D(j),0,0,0,1)
$.en=y
i=y}else i=y
y=z.a
if(y!=null){h=y.aO(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dX(i)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.an(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aL(a)
this.a.toString
a.cy.ck()
a.db.ck()
this.b.toString
a.dW()},
$isnM:1}}],["","",,A,{"^":"",dE:{"^":"b;a,b,c"},h9:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ig:{"^":"et;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0av,0aH,0bo,0dd,0de,0bp,0bq,0df,0dg,0br,0bs,0dh,0di,0bt,0dj,0dk,0bu,0dl,0dm,0bv,0bw,0bx,0dn,0dq,0by,0bz,0dr,0ds,0bA,0dt,0c8,0du,0c9,0dv,0ca,0dw,0cb,0dz,0cc,0dA,0cd,a,b,0c,0d,0e,0f,0r",
ek:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.am("")
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
a2.fJ(z)
a2.fQ(z)
a2.fK(z)
a2.fY(z)
a2.fZ(z)
a2.fS(z)
a2.h2(z)
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
z=new P.am("")
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
v.fN(z)
v.fI(z)
v.fL(z)
v.fO(z)
v.fW(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fU(z)
v.fV(z)}v.fR(z)
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
v.fM(z)
v.fT(z)
v.fX(z)
v.h_(z)
v.h0(z)
v.h1(z)
v.fP(z)}r=z.a+="// === Main ===\n"
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
this.c=this.cN(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cN(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fJ(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.fz()
this.fB()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaL")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isda")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.d([],[A.aL])
y=a2.aG
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isL")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break
case C.h:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break
case C.h:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.aG=H.k(this.r.n(0,"diffuseTxt"),"$isan")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break
case C.h:this.av=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a2.d
if(y!==C.c){this.bo=H.k(this.r.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.dd=H.k(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bp=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.h:this.de=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bp=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a2.e
if(y!==C.c){this.bs=H.k(this.r.n(0,"shininess"),"$isX")
this.bq=H.k(this.r.n(0,"specularClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.df=H.k(this.r.n(0,"specularTxt"),"$isan")
this.br=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break
case C.h:this.dg=H.k(this.r.n(0,"specularTxt"),"$isao")
this.br=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dh=H.k(this.r.n(0,"bumpTxt"),"$isan")
this.bt=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break
case C.h:this.di=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bt=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break}if(a2.dy){this.dj=H.k(this.r.n(0,"envSampler"),"$isao")
this.dk=H.k(this.r.n(0,"nullEnvTxt"),"$isL")
y=a2.r
if(y!==C.c){this.bu=H.k(this.r.n(0,"reflectClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.dl=H.k(this.r.n(0,"reflectTxt"),"$isan")
this.bv=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break
case C.h:this.dm=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bv=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break}}y=a2.x
if(y!==C.c){this.bw=H.k(this.r.n(0,"refraction"),"$isX")
this.bx=H.k(this.r.n(0,"refractClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.f:this.dn=H.k(this.r.n(0,"refractTxt"),"$isan")
this.by=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break
case C.h:this.dq=H.k(this.r.n(0,"refractTxt"),"$isao")
this.by=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break}}}y=a2.y
if(y!==C.c){this.bz=H.k(this.r.n(0,"alpha"),"$isX")
switch(y){case C.c:break
case C.i:break
case C.f:this.dr=H.k(this.r.n(0,"alphaTxt"),"$isan")
this.bA=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break
case C.h:this.ds=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bA=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break}}this.c8=H.d([],[A.eV])
this.c9=H.d([],[A.eW])
this.ca=H.d([],[A.eX])
this.cb=H.d([],[A.eY])
this.cc=H.d([],[A.eZ])
this.cd=H.d([],[A.f_])
if(a2.k2){y=a2.z
if(y>0){this.dt=H.f(this.r.n(0,"dirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.c8;(x&&C.a).h(x,new A.eV(l,k,j))}}y=a2.Q
if(y>0){this.du=H.f(this.r.n(0,"pntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isX")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.c9;(x&&C.a).h(x,new A.eW(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dv=H.f(this.r.n(0,"spotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.ca;(x&&C.a).h(x,new A.eX(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dw=H.f(this.r.n(0,"txtDirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isJ")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isan")
x=this.cb;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dz=H.f(this.r.n(0,"txtPntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isda")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isL")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isao")
x=this.cc;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dA=H.f(this.r.n(0,"txtSpotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isJ")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isJ")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isX")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isX")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isX")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isan")
x=this.cd;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ae:function(a,b,c){b.a.uniform1i(b.d,1)},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ih:function(a,b){var z,y
z=a.av
y=new A.ig(b,z)
y.en(b,z)
y.ek(a,b)
return y}}},il:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,av,aH",
fJ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aG+"];\n"
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
fQ:function(a){var z
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
fK:function(a){var z
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
fY:function(a){var z,y
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
fZ:function(a){var z,y
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
fS:function(a){var z
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
h2:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fN:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fI:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
fL:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fO:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
fW:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
fR:function(a){var z,y
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
fU:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
fV:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fM:function(a){var z,y
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
fT:function(a){var z,y
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
fX:function(a){var z,y
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
h_:function(a){var z,y,x
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
h0:function(a){var z,y,x
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
h1:function(a){var z,y,x
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
fP:function(a){var z
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
i:function(a){return this.av}},eV:{"^":"b;a,b,c"},eY:{"^":"b;a,b,c,d,e,f,r,x"},eW:{"^":"b;a,b,c,d,e,f,r"},eZ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eX:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},et:{"^":"cI;",
en:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cN:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fJ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fz:function(){var z,y,x,w,v,u
z=H.d([],[A.dE])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dE(y,v.name,u))}this.f=new A.h9(z)},
fB:function(){var z,y,x,w,v,u
z=H.d([],[A.ab])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hi(v.type,v.size,v.name,u))}this.r=new A.jC(z)},
aD:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.L(z,y,b,c)
else return A.d9(z,y,b,a,c)},
eG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.d9(z,y,b,a,c)},
eH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.d9(z,y,b,a,c)},
bi:function(a,b){return new P.fd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hi:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jx(this.a,this.e,c,d)
case 35665:return new A.J(this.a,this.e,c,d)
case 35666:return new A.jA(this.a,this.e,c,d)
case 35667:return new A.jy(this.a,this.e,c,d)
case 35668:return new A.jz(this.a,this.e,c,d)
case 35669:return new A.jB(this.a,this.e,c,d)
case 35674:return new A.jE(this.a,this.e,c,d)
case 35675:return new A.da(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eG(b,c,d)
case 35680:return this.eH(b,c,d)
case 35670:throw H.a(this.bi("BOOL",c))
case 35671:throw H.a(this.bi("BOOL_VEC2",c))
case 35672:throw H.a(this.bi("BOOL_VEC3",c))
case 35673:throw H.a(this.bi("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ce:{"^":"b;a,b",
i:function(a){return this.b}},ab:{"^":"b;"},jC:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hr:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hr("\n")}},L:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jy:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jz:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jB:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jw:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
d9:function(a,b,c,d,e){var z=new A.jw(a,b,c,e)
z.f=d
z.e=P.i6(d,0,!1,P.m)
return z}}},X:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jx:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},J:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jA:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jE:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},da:{"^":"ab;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ab;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},an:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dp:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
z=F.d4()
F.bO(z,b,c,d,a,1,0,0,1)
F.bO(z,b,c,d,a,0,1,0,3)
F.bO(z,b,c,d,a,0,0,1,2)
F.bO(z,b,c,d,a,-1,0,0,0)
F.bO(z,b,c,d,a,0,-1,0,0)
F.bO(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
cx:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
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
j=F.dy(d,e,new F.lY(z,F.cx(z.c),F.cx(z.d),k,l,c),b)
if(j!=null)a.b1(j)},
fL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.d4()
y=b?-1:1
x=-6.283185307179586/e
w=H.d([],[F.ae])
v=z.a
u=new V.E(0,0,y)
u=u.v(0,Math.sqrt(u.D(u)))
C.a.h(w,v.h6(new V.bF(a,-1,-1,-1),new V.b1(1,1,1,1),new V.W(0,0,c),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.E(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c6(new V.bF(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.W(r*p,q*p,c),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h4(w)
return z},
dq:function(a,b,c,d,e,f){return F.mh(b,c,d,new F.mg(a,f),e)},
mh:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dy(c,e,new F.mj(d),null)
if(z==null)return
z.aj()
z.bZ()
if(b)z.b1(F.fL(3,!1,1,new F.mk(d),e))
if(a)z.b1(F.fL(1,!0,-1,new F.ml(d),e))
return z},
mR:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mS()
y=F.dp(a,null,new F.mT(z),c)
y.bZ()
return y},
h_:function(a,b,c,d){return F.fK(c,a,d,b,new F.mV())},
mA:function(a,b,c,d,e,f){return F.fK(d,a,e,b,new F.mB(f,c))},
fK:function(a,b,c,d,e){var z=F.dy(a,b,new F.mi(H.h(e,{func:1,ret:V.W,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aj()
z.bZ()
return z},
dy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.d4()
y=H.d([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c6(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c6(d))}for(x=1;x<=a;++x){s=x/a
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
C.a.h(y,t.c6(d))}}z.d.h5(a+1,b+1,y)
return z},
lY:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ci(z.b,b).ci(z.d.ci(z.c,b),c)
a.sa_(0,new V.W(y.a,y.b,y.c))
a.se0(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sd8(new V.bF(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mg:{"^":"n:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mj:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa_(0,new V.W(y,u,w))
u=new V.E(y,u,w)
a.se0(u.v(0,Math.sqrt(u.D(u))))
a.sd8(new V.bF(1-c,2+c,-1,-1))}},
mk:{"^":"n:18;a",
$1:function(a){return this.a.$2(a,1)}},
ml:{"^":"n:18;a",
$1:function(a){return this.a.$2(1-a,0)}},
mS:{"^":"n:26;",
$2:function(a,b){return 0}},
mT:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.D(x))).k(0,1+z)
a.sa_(0,new V.W(z.a,z.b,z.c))}},
mV:{"^":"n:16;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
mB:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.W(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mi:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dz(y.$1(z),x)
x=J.dz(y.$1(z+3.141592653589793/this.c),x).O(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.at(!v.t(0,u)?new V.E(0,0,1):u)
t=y.v(0,Math.sqrt(y.D(y)))
y=t.at(v)
u=y.v(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.B(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c)))}},
al:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaT()){C.a.L(this.a.a.d.b,this)
this.a.a.V()}this.bU()
this.bV()
this.fm()},
fu:function(a){this.a=a
C.a.h(a.d.b,this)},
fv:function(a){this.b=a
C.a.h(a.d.c,this)},
fw:function(a){this.c=a
C.a.h(a.d.d,this)},
bU:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fm:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dM())return
return v.v(0,Math.sqrt(v.D(v)))},
eD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.O(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.D(z)))
z=w.O(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.at(z.v(0,Math.sqrt(z.D(z))))
return z.v(0,Math.sqrt(z.D(z)))},
c3:function(){if(this.d!=null)return!0
var z=this.eA()
if(z==null){z=this.eD()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
ez:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dM())return
return v.v(0,Math.sqrt(v.D(v)))},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.O(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.O(0,u).k(0,l).B(0,u).O(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.D(z)))
z=k.at(m)
z=z.v(0,Math.sqrt(z.D(z))).at(k)
m=z.v(0,Math.sqrt(z.D(z)))}return m},
c1:function(){if(this.e!=null)return!0
var z=this.ez()
if(z==null){z=this.eC()
if(z==null)return!1}this.e=z
this.a.a.V()
return!0},
aX:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.V()},
ghe:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y
if(this.gaT())return a+"disposed"
z=a+C.b.aa(J.a8(this.a.e),0)+", "+C.b.aa(J.a8(this.b.e),0)+", "+C.b.aa(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.A("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.fu(a)
z.fv(b)
z.fw(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
hG:{"^":"b;"},
jb:{"^":"hG;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cW:{"^":"b;0a,0b",
au:function(){if(!this.gaT()){C.a.L(this.a.a.c.b,this)
this.a.a.V()}this.bU()
this.bV()},
bU:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){if(this.gaT())return a+"disposed"
return a+C.b.aa(J.a8(this.a.e),0)+", "+C.b.aa(J.a8(this.b.e),0)},
J:function(){return this.A("")}},
hY:{"^":"b;"},
jv:{"^":"hY;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d2:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.V()}this.fl()},
fl:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.aa(J.a8(z.e),0)},
J:function(){return this.A("")}},
eu:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.u()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.hg())}this.a.u()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d2()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cW()
s=p.a
if(s==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.af(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.af(0)
return y},
eL:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ae],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hD:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ae],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.eL(a,v,y,u,t))b.b1(u)}this.a.u()
this.c.co()
this.d.co()
this.b.hW()
this.c.cp(new F.jv())
this.d.cp(new F.jb())
z=this.e
if(!(z==null))z.af(0)},
h8:function(a){this.hD(new F.k4(),new F.iw())},
bZ:function(){return this.h8(null)},
aX:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aX()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.e(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdQ(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).v(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.G(null)}}}}z=this.e
if(!(z==null))z.af(0)},
hc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcz(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dJ])
for(r=0,q=0;q<w;++q){p=b.h9(q)
o=p.gcz(p)
C.a.m(s,q,new Z.dJ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hA(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dK(new Z.fa(34962,j),s,b)
i.b=H.d([],[Z.ch])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
a2:function(a){var z=this.e
if(!(z==null))z.G(a)},
V:function(){return this.a2(null)},
p:{
d4:function(){var z,y
z=new F.eu()
y=new F.k_(z)
y.b=!1
y.c=H.d([],[F.ae])
z.a=y
y=new F.j6(z)
y.b=H.d([],[F.d2])
z.b=y
y=new F.j5(z)
y.b=H.d([],[F.cW])
z.c=y
y=new F.j4(z)
y.b=H.d([],[F.al])
z.d=y
z.e=null
return z}}},
j4:{"^":"b;a,0b",
h4:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ae],"$asc")
z=H.d([],[F.al])
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
h5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ae],"$asc")
z=H.d([],[F.al])
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
cp:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b0(0,v,t)){v.au()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghe(x)
if(y)x.au()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c3())x=!1
return x},
c2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c1())x=!1
return x},
aX:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].aX()},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
j5:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cp:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b0(0,v,t)){v.au()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
J:function(){return this.A("")}},
j6:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hW:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ae:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c6:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c6(this.cx,x,u,z,y,w,v,a,t)},
hg:function(){return this.c6(null)},
sa_:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.V()}},
sdQ:function(a){var z
a=a.v(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.V()}},
se0:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.V()}},
sd8:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.V()}},
hA:function(a){var z,y
z=J.M(a)
if(z.t(a,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aQ())){z=this.y
y=[P.q]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.t(a,$.$get$aR())){z=this.z
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bI())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bJ())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bm()))return H.d([this.ch],[P.q])
else if(z.t(a,$.$get$aM())){z=this.cx
y=[P.q]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.q])},
c3:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.k9(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
c1:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.k8(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y,x
z=H.d([],[P.i])
C.a.h(z,C.b.aa(J.a8(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
J:function(){return this.A("")},
p:{
c6:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.k7(z)
y.b=H.d([],[F.d2])
z.b=y
y=new F.k3(z)
x=[F.cW]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k0(z)
x=[F.al]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
k9:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k8:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k_:{"^":"b;a,0b,0c",
u:function(){var z,y,x,w
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
this.a.V()
return!0},
h7:function(a,b,c,d,e,f,g,h,i){var z=F.c6(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h6:function(a,b,c,d,e,f){return this.h7(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c3()
return!0},
c2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c1()
return!0},
hd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
this.u()
z=H.d([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
k0:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
I:function(a,b){H.h(b,{func:1,ret:-1,args:[F.al]})
C.a.I(this.b,b)
C.a.I(this.c,new F.k1(this,b))
C.a.I(this.d,new F.k2(this,b))},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
k1:{"^":"n:8;a,b",
$1:function(a){H.f(a,"$isal")
if(!J.P(a.a,this.a))this.b.$1(a)}},
k2:{"^":"n:8;a,b",
$1:function(a){var z
H.f(a,"$isal")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
k3:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
k5:{"^":"b;"},
k4:{"^":"k5;",
b0:function(a,b,c){return J.P(b.f,c.f)}},
k6:{"^":"b;"},
iw:{"^":"k6;",
b1:function(a){var z,y,x,w
H.w(a,"$isc",[F.ae],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)a[x].sdQ(z)
return}},
k7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}}}],["","",,O,{"^":"",ii:{"^":"cq;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.T()
this.dy=z}return z},
ad:[function(a){var z
H.f(a,"$ist")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.ad(null)},"ie","$1","$0","geu",0,2,1],
fq:[function(a){H.f(a,"$ist")
this.a=null
this.ad(a)},function(){return this.fq(null)},"iN","$1","$0","gfp",0,2,1],
ip:[function(a,b){var z=V.au
z=new D.ci(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ad(z)},"$2","geV",8,0,15],
iq:[function(a,b){var z=V.au
z=new D.cj(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ad(z)},"$2","geW",8,0,15],
cK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=$.$get$aP()
if(c){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aQ()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.bl(a6.a|z.a)}return new A.il(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.w(a,"$isc",[T.eC],"$asc")},
an:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
y.a=new V.W(0,0,0)
y.b=new V.E(0,0,1)
x=y.c
if(x!=null){w=x.aO(0,b,y)
if(w!=null){y.a=w.aN(y.a)
y.b=w.cs(y.b)}}}},
hY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cK()
y=a.fr.j(0,z.av)
if(y==null){y=A.ih(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bn(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aH
z=b.e
if(!(z instanceof Z.dK)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aj()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c2()
t.a.c2()
t=t.e
if(!(t==null))t.af(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hd()
s=s.e
if(!(s==null))s.af(0)}q=b.d.hc(new Z.ka(a.a),v)
q.aI($.$get$aP()).e=this.a.y.c
if(z)q.aI($.$get$aO()).e=this.a.Q.c
if(u)q.aI($.$get$aN()).e=this.a.z.c
if(w.rx)q.aI($.$get$aQ()).e=this.a.ch.c
if(t)q.aI($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aI($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.eC
p=H.d([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hm()
if(w.fx){u=this.a
t=a.dx
t=t.gU(t)
u=u.db
u.toString
u.ag(t.ac(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gU(t)
s=a.dx
s=t.k(0,s.gU(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ag(t.ac(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghU()
s=a.dx
s=t.k(0,s.gU(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ag(t.ac(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ag(t.ac(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ag(t.ac(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ag(C.t.ac(t,!0))}if(w.aG>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.f(s,"$isau")
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
case C.f:this.S(p,this.f.d)
u=this.a
t=this.f.d
u.ae(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.f.e)
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
case C.f:this.S(p,this.r.d)
u=this.a
t=this.r.d
u.ae(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.r.e)
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
case C.f:this.S(p,this.x.d)
u=this.a
t=this.x.d
u.ae(u.aG,u.aH,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.x.e)
u=this.a
t=this.x.e
u.a7(u.av,u.aH,t)
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
u=u.bo
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.y.d)
u=this.a
t=this.y.d
u.ae(u.dd,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.y.e)
u=this.a
t=this.y.e
u.a7(u.de,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bs
t.a.uniform1f(t.d,r)
break
case C.f:this.S(p,this.z.d)
u=this.a
t=this.z.d
u.ae(u.df,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break
case C.h:this.S(p,this.z.e)
u=this.a
t=this.z.e
u.a7(u.dg,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dt
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.c8
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.cs(i.gc7(i))
r=s.a
g=s.b
f=s.c
f=s.v(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.ga8(i)
g=h.c
r=f.gbC()
s=f.gba()
f=f.gbk()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.du
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.c9
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gcl(i)
r=h.b
g=s.ge7(s)
f=s.ge8(s)
s=s.ge9(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aN(i.gcl(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga8(i)
f=h.d
g=s.gbC()
r=s.gba()
s=s.gbk()
f.a.uniform3f(f.d,g,r,s)
s=i.gd5()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gd6()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gd7()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.b
r=s.a
g=s.b
f=s.c
f=s.v(0,Math.sqrt(r*r+g*g+f*f))
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=l.aN(i.a)
g=h.d
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.e
g=h.f
g.a.uniform1f(g.d,f)
f=i.f
g=h.r
g.a.uniform1f(g.d,f)
f=i.r
g=h.x
g.a.uniform1f(g.d,f)
f=i.x
g=h.y
g.a.uniform1f(g.d,f)
f=i.y
g=h.z
g.a.uniform1f(g.d,f);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
r=this.a.cb
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gb6()
H.w(p,"$isc",s,"$asc")
if(!C.a.bm(p,r)){r.saY(0,p.length)
C.a.h(p,r)}r=i.gc7(i)
g=h.d
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
g.a.uniform3f(g.d,f,e,r)
r=i.gi9()
e=h.b
f=r.gaU(r)
g=r.gaV(r)
r=r.gaW()
e.a.uniform3f(e.d,f,g,r)
r=i.gb4(i)
g=h.c
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
g.a.uniform3f(g.d,f,e,r)
r=l.cs(i.gc7(i))
e=r.a
f=r.b
g=r.c
g=r.v(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga8(i)
f=h.f
e=g.gbC()
r=g.gba()
g=g.gbk()
f.a.uniform3f(f.d,e,r,g)
g=i.gb6()
r=g.gaZ(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaZ(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaY(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
g=this.a.cc
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gb6()
H.w(p,"$isc",r,"$asc")
if(!C.a.bm(p,g)){g.saY(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gU(i))
g=i.gU(i).aN(new V.W(0,0,0))
f=h.b
e=g.ge7(g)
c=g.ge8(g)
g=g.ge9(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aN(new V.W(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dL(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.cl(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ac(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga8(i)
g=h.e
e=c.gbC()
f=c.gba()
c=c.gbk()
g.a.uniform3f(g.d,e,f,c)
c=i.gb6()
g=c.gaZ(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaZ(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaY(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd5()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd6()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gd7()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb6()
H.w(p,"$isc",z,"$asc")
if(!C.a.bm(p,s)){s.saY(0,p.length)
C.a.h(p,s)}s=i.gcl(i)
r=h.b
g=s.ge7(s)
f=s.ge8(s)
s=s.ge9(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc7(i)
f=h.c
g=s.gaU(s)
r=s.gaV(s)
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=i.gi9()
r=h.d
g=s.gaU(s)
f=s.gaV(s)
s=s.gaW()
r.a.uniform3f(r.d,g,f,s)
s=i.gb4(i)
f=h.e
g=s.gaU(s)
r=s.gaV(s)
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gcl(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb6()
r=s.gaZ(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaZ(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaY(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga8(i)
r=h.y
g=s.gbC()
f=s.gba()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.giY()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giZ()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gd5()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gd6()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gd7()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.S(p,this.Q.d)
z=this.a
u=this.Q.d
z.ae(z.dh,z.bt,u)
break
case C.h:this.S(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.di,z.bt,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gU(u).dL(0)
a.Q=u}z=z.fy
z.toString
z.ag(u.ac(0,!0))}if(w.dy){this.S(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dj,z.dk,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bu
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.S(p,this.cx.d)
z=this.a
u=this.cx.d
z.ae(z.dl,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.S(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dm,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bx
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bw
u.a.uniform1f(u.d,s)
break
case C.f:this.S(p,this.cy.d)
z=this.a
u=this.cy.d
z.ae(z.dn,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break
case C.h:this.S(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.dq,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bz
z.a.uniform1f(z.d,t)
break
case C.f:this.S(p,this.db.d)
z=this.a
t=this.db.d
z.ae(z.dr,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break
case C.h:this.S(p,this.db.e)
z=this.a
t=this.db.e
z.a7(z.ds,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bj(a)
z=b.e
z.bj(a)
z.aL(a)
z.e3(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].e3(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hl()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cK().av},
p:{
ef:function(){var z,y,x,w
z=new O.ii()
y=O.cN(V.au)
z.e=y
y.bc(z.geV(),z.geW())
y=new O.b8(z,"emission")
y.c=C.c
y.f=new V.Y(0,0,0)
z.f=y
y=new O.b8(z,"ambient")
y.c=C.c
y.f=new V.Y(0,0,0)
z.r=y
y=new O.b8(z,"diffuse")
y.c=C.c
y.f=new V.Y(0,0,0)
z.x=y
y=new O.b8(z,"invDiffuse")
y.c=C.c
y.f=new V.Y(0,0,0)
z.y=y
y=new O.io(z,"specular")
y.c=C.c
y.f=new V.Y(0,0,0)
y.ch=100
z.z=y
y=new O.ik(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b8(z,"reflect")
y.c=C.c
y.f=new V.Y(0,0,0)
z.cx=y
y=new O.im(z,"refract")
y.c=C.c
y.f=new V.Y(0,0,0)
y.ch=1
z.cy=y
y=new O.ij(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.hX()
y.bH(D.a1)
y.e=H.d([],[D.hw])
y.f=H.d([],[D.iB])
y.r=H.d([],[D.cp])
y.x=H.d([],[D.jk])
y.y=H.d([],[D.jl])
y.z=H.d([],[D.jm])
y.Q=null
y.ch=null
y.cw(y.geU(),y.gfe(),y.gfg())
z.dx=y
x=y.Q
if(x==null){x=D.T()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.t]}
w=H.h(z.gfp(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.T()
w.ch=y}x=H.h(z.geu(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ij:{"^":"cY;0f,a,b,0c,0d,0e"},cY:{"^":"b;",
bg:["ei",function(){}]},ik:{"^":"cY;a,b,0c,0d,0e"},b8:{"^":"cY;0f,a,b,0c,0d,0e",
cW:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.ad(y)}},
bg:["bG",function(){this.ei()
this.cW(new V.Y(1,1,1))}],
sa8:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bg()
z=this.a
z.a=null
z.ad(null)}this.cW(b)}},im:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
ft:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ad(z)}},
bg:function(){this.bG()
this.ft(1)}},io:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bW:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ad(z)}},
bg:function(){this.bG()
this.bW(100)}},cq:{"^":"b;"}}],["","",,T,{"^":"",eC:{"^":"cI;"},jj:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",h8:{"^":"b;",
b_:function(a,b){return!0},
i:function(a){return"all"},
$isc0:1},c0:{"^":"b;"},ee:{"^":"b;",
b_:["eh",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b_(0,b))return!0
return!1}],
i:["cA",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc0:1},bD:{"^":"ee;0a",
b_:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}},j2:{"^":"b;0a",
em:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.m,P.ag])
for(y=new H.ec(a,a.gl(a),0,[H.ay(a,"x",0)]);y.E();)z.m(0,y.d,!0)
this.a=z},
b_:function(a,b){return this.a.bn(0,b)},
i:function(a){var z=this.a
return P.c3(z.gal(z),0,null)},
$isc0:1,
p:{
a7:function(a){var z=new V.j2()
z.em(a)
return z}}},ew:{"^":"b;a,b,0c,0d",
ghE:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eJ(this.a.K(0,b))
w.a=H.d([],[V.c0])
w.c=!1
C.a.h(this.c,w)
return w},
ho:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b_(0,a))return w}return},
i:function(a){return this.b}},eG:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.fY(this.b,"\n","\\n")
y=H.fY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eH:{"^":"b;a,b,0c",
i:function(a){return this.b}},jr:{"^":"b;0a,0b,0c",
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ew(this,b)
z.c=H.d([],[V.eJ])
this.a.m(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eH(this,a)
y=P.i
z.c=new H.aV(0,0,[y,y])
this.b.m(0,a,z)}return z},
i8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eG])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.ho(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c3(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghE(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c3(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eG(o==null?p.b:o,q,t)}++t}}}},eJ:{"^":"ee;b,0c,0a",
i:function(a){return this.b.b+": "+this.cA(0)}}}],["","",,X,{"^":"",dM:{"^":"b;",$isaJ:1},hL:{"^":"eA;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z}},iz:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
aP:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.aP(null)},"ig","$1","$0","gcC",0,2,1],
saK:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.N("mover",x,this.a,this,[U.ai])
z.b=!0
this.aP(z)}},
$isaJ:1,
$isdM:1},eA:{"^":"b;"}}],["","",,V,{"^":"",
mP:function(a){P.jq(C.G,new V.mQ(a))},
mQ:{"^":"n:48;a",
$1:function(a){H.f(a,"$isbi")
P.dx(C.d.e2(this.a.ghs(),2)+" fps")}},
iN:{"^":"b;a,b,0c",
d2:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f2().gcn().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d0(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dC(this.c).h(0,v)
t=W.hN("radio")
t.checked=x
t.name=z
z=W.ac
W.a2(t,"change",H.h(new V.iO(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dC(this.c).h(0,w.createElement("br"))},
aR:function(a,b,c){return this.d2(a,b,c,!1)},
d0:function(a){var z,y,x,w,v
z=P.f2()
y=P.i
x=P.i3(z.gcn(),y,y)
x.m(0,this.a,a)
w=z.dZ(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.le([],[]).ct(""),"",v)}},
iO:{"^":"n:25;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d0(this.d)}}},
j7:{"^":"b;0a,0b",
eo:function(a,b){var z,y,x,w,v,u,t
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
W.a2(z,"scroll",H.h(new V.ja(x),{func:1,ret:-1,args:[t]}),!1,t)},
d4:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fA()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.i8(C.a.hy(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.fX(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cw(C.R,s,C.k,!1)
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
h3:function(a){var z,y,x,w,v,u,t
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
x=H.f(w.insertCell(-1),"$isd6").style
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
t=H.f(w.insertCell(-1),"$isd6")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fA:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jr()
y=P.i
z.a=new H.aV(0,0,[y,V.ew])
z.b=new H.aV(0,0,[y,V.eH])
z.c=z.K(0,"Start")
y=z.K(0,"Start").C(0,"Bold")
x=V.a7(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").C(0,"Bold")
x=new V.bD()
w=[V.c0]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a3("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").C(0,"BoldEnd")
x=V.a7(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").C(0,"Italic")
x=V.a7(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").C(0,"Italic")
x=new V.bD()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a3("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").C(0,"ItalicEnd")
x=V.a7(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").C(0,"Code")
x=V.a7(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").C(0,"Code")
x=new V.bD()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a3("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").C(0,"CodeEnd")
x=V.a7(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").C(0,"LinkHead")
x=V.a7(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").C(0,"LinkTail")
x=V.a7(new H.a3("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").C(0,"LinkEnd")
y=V.a7(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").C(0,"LinkHead")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a3("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").C(0,"LinkEnd")
y=V.a7(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").C(0,"LinkTail")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").C(0,"Other").a,new V.h8())
x=z.K(0,"Other").C(0,"Other")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.K(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
p:{
j8:function(a,b){var z=new V.j7()
z.eo(a,!0)
return z}}},
ja:{"^":"n:25;a",
$1:function(a){P.eE(C.q,new V.j9(this.a))}},
j9:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.d.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
fT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.j8("Test 024",!0)
y=W.dN(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.d4(H.d(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.h3(H.d(["shapes"],x))
z.d4(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jo(w,!0,!0,!0,!1)
u=U.cQ(null)
u.h(0,U.bW(V.ei(0,0,-2.5)))
u.h(0,U.f5(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.Y(1,1,1)
s=new D.cp()
s.d=new V.Y(1,1,1)
s.e=3.141592653589793
s.f=3.141592653589793
s.r=1
s.x=0
s.y=0
s.a=new V.W(0,0,0)
s.b=new V.E(0,0,1)
r=s.c
s.c=u
z=u.gw()
z.toString
q=H.h(s.geY(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,q)
z=new D.N("mover",r,s.c,s,[U.ai])
z.b=!0
s.a6(z)
if(!s.d.t(0,t)){r=s.d
s.d=t
z=new D.N("color",r,t,s,[V.Y])
z.b=!0
s.a6(z)}z=s.e
if(!$.o.$2(z,0.6)){r=s.e
s.e=0.6
z=new D.N("cutoff",r,0.6,s,[P.q])
z.b=!0
s.a6(z)}z=s.f
if(!$.o.$2(z,0.5)){r=s.f
s.f=0.5
z=new D.N("coneAngle",r,0.5,s,[P.q])
z.b=!0
s.a6(z)}z=s.r
if(!$.o.$2(z,0.5)){r=s.r
s.r=0.5
z=new D.N("attenuation0",r,0.5,s,[P.q])
z.b=!0
s.a6(z)}z=s.x
if(!$.o.$2(z,0.05)){r=s.x
s.x=0.05
z=new D.N("attenuation1",r,0.05,s,[P.q])
z.b=!0
s.a6(z)}p=O.ef()
p.dx.h(0,s)
p.f.sa8(0,new V.Y(0,0,0))
z=p.r
z.sa8(0,new V.Y(0,0,0))
z=p.x
z.sa8(0,new V.Y(0.7,0.7,0.7))
z=p.z
z.sa8(0,new V.Y(0.3,0.3,0.3))
z=p.z
if(z.c===C.c){z.c=C.i
z.bG()
z.bW(100)
q=z.a
q.a=null
q.ad(null)}z.bW(100)
o=E.cO(null,!0,null,"",null,null)
o.sa3(0,F.h_(30,1,15,0.5))
n=E.cO(null,!0,null,"",null,null)
n.saK(U.bW(V.eh(3,3,3,1)))
z=F.dp(1,null,null,1)
z.aX()
n.sa3(0,z)
m=U.cQ(null)
m.h(0,U.f5(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.bW(V.eg(3.141592653589793)))
m.h(0,U.bW(V.ei(0,0,5)))
l=E.cO(null,!0,null,"",null,null)
z=U.cQ(null)
z.h(0,U.bW(V.eh(0.1,0.1,0.1,1)))
z.h(0,u)
l.saK(z)
l.sa3(0,F.dq(0,!1,!0,1,40,1))
z=O.ef()
z.f.sa8(0,new V.Y(1,1,1))
l.sb5(z)
z=new M.hD()
q=O.cN(E.aH)
z.d=q
q.bc(z.geZ(),z.gf_())
z.e=null
z.f=null
z.r=null
z.x=null
k=new X.iz()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saK(null)
q=k.b
if(!$.o.$2(q,1.0471975511965976)){r=k.b
k.b=1.0471975511965976
q=new D.N("fov",r,1.0471975511965976,k,[P.q])
q.b=!0
k.aP(q)}q=k.c
if(!$.o.$2(q,0.1)){r=k.c
k.c=0.1
q=new D.N("near",r,0.1,k,[P.q])
q.b=!0
k.aP(q)}q=k.d
if(!$.o.$2(q,2000)){r=k.d
k.d=2000
q=new D.N("far",r,2000,k,[P.q])
q.b=!0
k.aP(q)}q=z.a
if(q!==k){if(q!=null){q=q.gw()
q.toString
j=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.L(q.a,j)}r=z.a
z.a=k
q=k.gw()
q.toString
j=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(q.a,j)
q=new D.N("camera",r,z.a,z,[X.dM])
q.b=!0
z.aB(q)}i=new X.hL()
q=new V.b1(0,0,0,1)
i.a=q
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
q=V.er(0,0,1,1)
i.r=q
q=z.b
if(q!==i){if(q!=null){q=q.gw()
q.toString
j=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.L(q.a,j)}r=z.b
z.b=i
q=i.gw()
q.toString
j=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(q.a,j)
q=new D.N("target",r,z.b,z,[X.eA])
q.b=!0
z.aB(q)}z.sb5(null)
z.sb5(p)
z.d.h(0,o)
z.d.h(0,n)
z.d.h(0,l)
z.a.saK(m)
q=v.d
if(q!==z){if(q!=null){q=q.gw()
q.toString
j=H.h(v.gcB(),{func:1,ret:-1,args:[D.t]})
C.a.L(q.a,j)}v.d=z
z=z.gw()
z.toString
q=H.h(v.gcB(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,q)
v.eq()}z=new V.iN("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.aR(0,"Cube",new N.mD(o))
z.aR(0,"Cylinder",new N.mE(o))
z.aR(0,"Cone",new N.mF(o))
z.aR(0,"Sphere",new N.mG(o))
z.d2(0,"Toroid",new N.mH(o),!0)
z.aR(0,"Knot",new N.mI(o))
V.mP(v)},
mD:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.dp(1,null,null,1))}},
mE:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.dq(1,!0,!0,1,40,1))}},
mF:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.dq(1,!0,!1,1,40,0))}},
mG:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.mR(6,null,6))}},
mH:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.h_(30,1,15,0.5))}},
mI:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.mA(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e6.prototype
return J.hS.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.e7.prototype
if(typeof a=="boolean")return J.hR.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.aE=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.c8=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.mq=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.mr=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.dt=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)}
J.h0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mq(a).M(a,b)}
J.dz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mr(a).k(a,b)}
J.dA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fQ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).j(a,b)}
J.cF=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fQ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c8(a).m(a,b,c)}
J.h1=function(a,b){return J.dt(a).F(a,b)}
J.h2=function(a,b,c){return J.aY(a).fn(a,b,c)}
J.h3=function(a,b,c,d){return J.aY(a).d3(a,b,c,d)}
J.h4=function(a,b){return J.dt(a).T(a,b)}
J.cG=function(a,b,c){return J.aE(a).hf(a,b,c)}
J.cH=function(a,b){return J.c8(a).H(a,b)}
J.h5=function(a,b,c,d){return J.c8(a).aw(a,b,c,d)}
J.dB=function(a,b){return J.c8(a).I(a,b)}
J.dC=function(a){return J.aY(a).gc4(a)}
J.bU=function(a){return J.M(a).gR(a)}
J.bv=function(a){return J.c8(a).gY(a)}
J.as=function(a){return J.aE(a).gl(a)}
J.h6=function(a,b){return J.aY(a).hZ(a,b)}
J.h7=function(a,b){return J.aY(a).sZ(a,b)}
J.a8=function(a){return J.M(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cM.prototype
C.H=J.u.prototype
C.a=J.b7.prototype
C.e=J.e6.prototype
C.t=J.e7.prototype
C.d=J.bY.prototype
C.b=J.bZ.prototype
C.O=J.c_.prototype
C.U=H.d1.prototype
C.V=W.iv.prototype
C.z=J.iA.prototype
C.r=J.c5.prototype
C.A=W.bK.prototype
C.B=W.kd.prototype
C.D=new P.hd(!1)
C.C=new P.hc(C.D)
C.E=new P.iy()
C.F=new P.jZ()
C.j=new P.l0()
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
C.T=new H.hp(0,{},C.P,[P.i,P.i])
C.k=new P.jS(!1)
$.az=0
$.bw=null
$.dH=null
$.dj=!1
$.fO=null
$.fG=null
$.fW=null
$.cA=null
$.cD=null
$.du=null
$.bp=null
$.bP=null
$.bQ=null
$.dk=!1
$.S=C.j
$.dY=null
$.dX=null
$.dW=null
$.dV=null
$.o=V.ip()
$.en=null
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
I.$lazy(y,x,w)}})(["dU","$get$dU",function(){return H.fN("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fN("_$dart_js")},"eK","$get$eK",function(){return H.aB(H.cr({
toString:function(){return"$receiver$"}}))},"eL","$get$eL",function(){return H.aB(H.cr({$method$:null,
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aB(H.cr(null))},"eN","$get$eN",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.aB(H.cr(void 0))},"eS","$get$eS",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eP","$get$eP",function(){return H.aB(H.eQ(null))},"eO","$get$eO",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aB(H.eQ(void 0))},"eT","$get$eT",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"de","$get$de",function(){return P.ke()},"bR","$get$bR",function(){return[]},"f6","$get$f6",function(){return P.jW()},"fc","$get$fc",function(){return H.it(H.bo(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fw","$get$fw",function(){return P.iT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fC","$get$fC",function(){return P.m_()},"dS","$get$dS",function(){return{}},"f9","$get$f9",function(){return Z.ap(0)},"f7","$get$f7",function(){return Z.ap(511)},"aP","$get$aP",function(){return Z.ap(1)},"aO","$get$aO",function(){return Z.ap(2)},"aN","$get$aN",function(){return Z.ap(4)},"aQ","$get$aQ",function(){return Z.ap(8)},"aR","$get$aR",function(){return Z.ap(16)},"bI","$get$bI",function(){return Z.ap(32)},"bJ","$get$bJ",function(){return Z.ap(64)},"f8","$get$f8",function(){return Z.ap(96)},"bm","$get$bm",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[F.al]},{func:1,ret:P.G,args:[F.ae,P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.j,E.aH]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.G,args:[D.t]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,V.au]]},{func:1,ret:V.W,args:[P.q]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.m,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.j,D.a1]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.G,args:[W.ac]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:W.a0,args:[W.I]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ag,args:[W.I]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.G,args:[P.a_]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.ag,args:[P.q,P.q]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.ag,args:[[P.j,D.a1]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:P.G,args:[P.bi]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mU(d||a)
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
Isolate.dr=a.dr
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fT,[])
else N.fT([])})})()
//# sourceMappingURL=test.dart.js.map
