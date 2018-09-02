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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ist)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.ds(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.du=function(){}
var dart=[["","",,H,{"^":"",nD:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dx==null){H.mM()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c7("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.mR(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"b;",
q:function(a,b){return a===b},
gS:function(a){return H.bH(a)},
i:["ej",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i_:{"^":"t;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isah:1},
ee:{"^":"t;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isG:1},
cU:{"^":"t;",
gS:function(a){return 0},
i:["ek",function(a){return String(a)}]},
iJ:{"^":"cU;"},
c8:{"^":"cU;"},
c2:{"^":"cU;",
i:function(a){var z=a[$.$get$dY()]
if(z==null)return this.ek(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscQ:1},
b7:{"^":"t;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.A("add"))
a.push(b)},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
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
hH:function(a){return this.C(a,"")},
hz:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bF:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hY())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.A("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
aV:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gZ:function(a){return new J.ay(a,a.length,0,[H.y(a,0)])},
gS:function(a){return H.bH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ce(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
return a[b]},
m:function(a,b,c){H.B(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ce(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.eb(new Array(a),b)},
eb:function(a,b){return J.bA(H.e(a,[b]))},
bA:function(a){H.bU(a)
a.fixed$length=Array
return a}}},
nC:{"^":"b7;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c0:{"^":"t;",
ghG:function(a){return a===0?1/a<0:a<0},
ik:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cj:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e7:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghG(a))return"-"+z
return z},
b6:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.U(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.A("Unexpected toString result: "+z))
x=J.aF(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
bb:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.d3(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fJ:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$isp:1,
$isa0:1},
ed:{"^":"c0;",$ism:1},
ec:{"^":"c0;"},
c1:{"^":"t;",
U:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b<0)throw H.a(H.aE(a,b))
if(b>=a.length)H.r(H.aE(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aE(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.ce(b,null,null))
return a+b},
aQ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a5:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.a5(a,b,0)},
t:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cq(b,null,null))
if(b>c)throw H.a(P.cq(b,null,null))
if(c>a.length)throw H.a(P.cq(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.t(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.D)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hW:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a9:function(a,b){return this.hW(a,b," ")},
dN:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dM:function(a,b){return this.dN(a,b,0)},
hn:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h6(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ises:1,
$isi:1}}],["","",,H,{"^":"",
cC:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hY:function(){return new P.jm("No element")},
a3:{"^":"jT;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.U(this.a,b)},
$ascs:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hJ:{"^":"j;"},
ej:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aF(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
im:{"^":"j;a,b,$ti",
gZ:function(a){return new H.io(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
H:function(a,b){return this.b.$1(J.cI(this.a,b))},
$asj:function(a,b){return[b]}},
io:{"^":"cS;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascS:function(a,b){return[b]}},
kn:{"^":"j;a,b,$ti",
gZ:function(a){return new H.ko(J.bv(this.a),this.b,this.$ti)}},
ko:{"^":"cS;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cj:{"^":"b;$ti"},
cs:{"^":"b;$ti",
m:function(a,b,c){H.B(b)
H.z(c,H.ax(this,"cs",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.ax(this,"cs",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jT:{"^":"cn+cs;"}}],["","",,H,{"^":"",
hy:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mH:function(a){return init.types[H.B(a)]},
h_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iT:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.K(a).$isc8){v=C.u(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.az(w,1)
r=H.dy(H.bU(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iL:function(){if(!!self.location)return self.location.href
return},
eu:function(a){var z,y,x,w,v
H.bU(a)
z=J.at(a)
if(typeof z!=="number")return z.ef()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iU:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.eu(z)},
ev:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.iU(a)}return H.eu(a)},
iV:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ef()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
co:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iS:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iQ:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iM:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iN:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iP:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iR:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iO:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ad(a))},
d:function(a,b){if(a==null)J.at(a)
throw H.a(H.aE(a,b))},
aE:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.B(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cq(b,"index",null)},
mB:function(a,b,c){if(a>c)return new P.cp(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cp(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ad:function(a){return new P.aG(!0,a,null,null)},
mq:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.er()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h8})
z.name=""}else z.toString=H.h8
return z},
h8:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.b2(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eq(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eS()
u=$.$get$eT()
t=$.$get$eU()
s=$.$get$eV()
r=$.$get$eZ()
q=$.$get$f_()
p=$.$get$eX()
$.$get$eW()
o=$.$get$f1()
n=$.$get$f0()
m=v.a7(y)
if(m!=null)return z.$1(H.cV(H.N(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.N(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eq(H.N(y),m))}}return z.$1(new H.jS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
bt:function(a){var z
if(a==null)return new H.fv(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fv(a)},
mE:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mO:function(a,b,c,d,e,f){H.f(a,"$iscQ")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mO)
a.$identity=z
return z},
hu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.j_(z).r}else x=d
w=e?Object.create(new H.jn().constructor.prototype):Object.create(new H.cL(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.B()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mH,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cM
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
hr:function(a,b,c,d){var z=H.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ht(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hr(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cf("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cf("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hs:function(a,b,c,d){var z,y
z=H.cM
y=H.dM
switch(b?-1:a){case 0:throw H.a(H.j9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ht:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cf("self")
$.bw=z}y=$.dL
if(y==null){y=H.cf("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hs(w,!u,x,b)
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
ds:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bU(b))
H.B(c)
y=!!J.K(d).$isc?J.bA(d):d
return H.hu(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
h4:function(a,b){throw H.a(H.aw(a,H.N(b).substring(3)))},
n2:function(a,b){var z=J.aF(b)
throw H.a(H.hq(a,z.t(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.h4(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.n2(a,b)},
bU:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aw(a,"List"))},
h1:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.h4(a,b)},
fW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
ca:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fW(J.K(a))
if(z==null)return!1
y=H.fZ(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dn)return a
$.dn=!0
try{if(H.ca(a,b))return a
z=H.cd(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dn=!1}},
dv:function(a,b){if(a!=null&&!H.dr(a,b))H.r(H.aw(a,H.cd(b)))
return a},
fN:function(a){var z
if(a instanceof H.n){z=H.fW(J.K(a))
if(z!=null)return H.cd(z)
return"Closure"}return H.bb(a)},
n9:function(a){throw H.a(new P.hC(H.N(a)))},
fX:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
oA:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.N(c)
H.B(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.N(b)
H.B(c)
z=H.bu(a["$as"+H.l(b)],H.b_(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.B(b)
z=H.b_(a)
return z==null?null:z[b]},
cd:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dy(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mg(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
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
for(z=H.mD(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dy:function(a,b,c){var z,y,x,w,v,u
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
y=J.K(a)
if(y[b]==null)return!1
return H.fQ(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.N(b)
H.bU(c)
H.N(d)
if(a==null)return a
z=H.bT(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dy(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fQ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
oy:function(a,b,c){return a.apply(b,H.bu(J.K(b)["$as"+H.l(c)],H.b_(b)))},
h0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.h0(z)}return!1},
dr:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.h0(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ca(a,b)}y=J.K(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dr(a,b))throw H.a(H.aw(a,H.cd(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cQ"
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
if(t!==y){s=H.cd(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fQ(H.bu(r,z),b,u,d)},
fZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.n_(m,b,l,d)},
n_:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
oz:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mR:function(a){var z,y,x,w,v,u
z=H.N($.fY.$1(a))
y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fP.$2(a,z))
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
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.a(P.c7(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dz(a,!1,null,!!a.$isF)},
mZ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dz(z,c,null,null)},
mM:function(){if(!0===$.dx)return
$.dx=!0
H.mN()},
mN:function(){var z,y,x,w,v,u,t,s
$.cA=Object.create(null)
$.cD=Object.create(null)
H.mI()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h5.$1(v)
if(u!=null){t=H.mZ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mI:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bq(C.J,H.bq(C.O,H.bq(C.t,H.bq(C.t,H.bq(C.N,H.bq(C.K,H.bq(C.L(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fY=new H.mJ(v)
$.fP=new H.mK(u)
$.h5=new H.mL(t)},
bq:function(a,b){return a(b)||b},
h6:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h7:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hx:{"^":"b;$ti",
i:function(a){return P.cX(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hy()},
$isJ:1},
hz:{"^":"hx;a,b,c,$ti",
gl:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.cV(b)},
cV:function(a){return this.b[H.N(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cV(v),z))}}},
iZ:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jE:{"^":"b;a,b,c,d,e,f",
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
p:{
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iG:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eq:function(a,b){return new H.iG(a,b==null?null:b.method)}}},
i2:{"^":"a4;a,b,c",
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
return new H.i2(a,y,z?null:b.receiver)}}},
jS:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nb:{"^":"n:21;a",
$1:function(a){if(!!J.K(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fv:{"^":"b;a,0b",
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
gec:function(){return this},
$iscQ:1,
gec:function(){return this}},
eJ:{"^":"n;"},
jn:{"^":"eJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cL:{"^":"eJ;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.bV(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cM:function(a){return a.a},
dM:function(a){return a.c},
cf:function(a){var z,y,x,w,v
z=new H.cL("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jF:{"^":"a4;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.jF("TypeError: "+H.l(P.ci(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
hp:{"^":"a4;a",
i:function(a){return this.a},
p:{
hq:function(a,b){return new H.hp("CastError: "+H.l(P.ci(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
j8:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j9:function(a){return new H.j8(a)}}},
aV:{"^":"ij;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.i7(this,[H.y(this,0)])},
bm:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cS(y,b)}else return this.hD(b)},
hD:function(a){var z=this.d
if(z==null)return!1
return this.cm(this.bO(z,this.cl(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hE(b)},
hE:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bO(z,this.cl(a))
x=this.cm(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bQ()
this.b=z}this.cL(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bQ()
this.c=y}this.cL(y,b,c)}else this.hF(b,c)},
hF:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bQ()
this.d=z}y=this.cl(a)
x=this.bO(z,y)
if(x==null)this.bX(z,y,[this.bR(a,b)])
else{w=this.cm(x,a)
if(w>=0)x[w].b=b
else x.push(this.bR(a,b))}},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cL:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.be(a,b)
if(z==null)this.bX(a,b,this.bR(b,c))
else z.b=c},
eT:function(){this.r=this.r+1&67108863},
bR:function(a,b){var z,y
z=new H.i6(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eT()
return z},
cl:function(a){return J.bV(a)&0x3ffffff},
cm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.cX(this)},
be:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eL:function(a,b){delete a[b]},
cS:function(a,b){return this.be(a,b)!=null},
bQ:function(){var z=Object.create(null)
this.bX(z,"<non-identifier-key>",z)
this.eL(z,"<non-identifier-key>")
return z},
$iseh:1},
i6:{"^":"b;a,b,0c,0d"},
i7:{"^":"hJ;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i8(z,z.r,this.$ti)
y.c=z.e
return y}},
i8:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mJ:{"^":"n:21;a",
$1:function(a){return this.a(a)}},
mK:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mL:{"^":"n:50;a",
$1:function(a){return this.a(H.N(a))}},
i0:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ises:1,
$isj0:1,
p:{
i1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mD:function(a){return J.eb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iC:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aE(b,a))},
ma:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mB(a,b,c))
return b},
ep:{"^":"t;",$isep:1,"%":"ArrayBuffer"},
d1:{"^":"t;",$isd1:1,$isjG:1,"%":"DataView;ArrayBufferView;d0|fp|fq|iD|fr|fs|aX"},
d0:{"^":"d1;",
gl:function(a){return a.length},
$isF:1,
$asF:I.du},
iD:{"^":"fq;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.B(b)
H.mC(c)
H.aD(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.p]},
$asx:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fs;",
m:function(a,b,c){H.B(b)
H.B(c)
H.aD(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nM:{"^":"aX;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nN:{"^":"aX;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nO:{"^":"aX;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nP:{"^":"aX;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nQ:{"^":"aX;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nR:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d2:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.ma(b,c,a.length)))},
$isd2:1,
$isQ:1,
"%":";Uint8Array"},
fp:{"^":"d0+x;"},
fq:{"^":"fp+cj;"},
fr:{"^":"d0+x;"},
fs:{"^":"fr+cj;"}}],["","",,P,{"^":"",
kq:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mn()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.ks(z),1)).observe(y,{childList:true})
return new P.kr(z,y,x)}else if(self.setImmediate!=null)return P.mo()
return P.mp()},
on:[function(a){self.scheduleImmediate(H.br(new P.kt(H.h(a,{func:1,ret:-1})),0))},"$1","mn",4,0,12],
oo:[function(a){self.setImmediate(H.br(new P.ku(H.h(a,{func:1,ret:-1})),0))},"$1","mo",4,0,12],
op:[function(a){P.db(C.q,H.h(a,{func:1,ret:-1}))},"$1","mp",4,0,12],
db:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a2(a.a,1000)
return P.lu(z<0?0:z,b)},
eN:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.d.a2(a.a,1000)
return P.lv(z<0?0:z,b)},
mj:function(a,b){if(H.ca(a,{func:1,args:[P.b,P.av]}))return b.i4(a,null,P.b,P.av)
if(H.ca(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ce(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mi:function(){var z,y
for(;z=$.bp,z!=null;){$.bR=null
y=z.b
$.bp=y
if(y==null)$.bQ=null
z.a.$0()}},
ox:[function(){$.dp=!0
try{P.mi()}finally{$.bR=null
$.dp=!1
if($.bp!=null)$.$get$di().$1(P.fR())}},"$0","fR",0,0,3],
fM:function(a){var z=new P.fj(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bQ=z
$.bp=z
if(!$.dp)$.$get$di().$1(P.fR())}else{$.bQ.b=z
$.bQ=z}},
mm:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fM(a)
$.bR=$.bQ
return}y=new P.fj(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bp=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
n3:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cz(null,null,C.j,a)
return}y.toString
P.cz(null,null,y,H.h(y.c3(a),z))},
eM:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.db(a,b)}return P.db(a,H.h(y.c3(b),z))},
jB:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eN(a,b)}x=y.dd(b,P.bi)
$.T.toString
return P.eN(a,H.h(x,z))},
cy:function(a,b,c,d,e){var z={}
z.a=d
P.mm(new P.mk(z,e))},
fI:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fJ:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
ml:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cz:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c3(d):c.hj(d,-1)
P.fM(d)},
ks:{"^":"n:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kr:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kt:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ku:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fy:{"^":"b;a,0b,c",
ey:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.lx(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ez:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.lw(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbi:1,
p:{
lu:function(a,b){var z=new P.fy(!0,0)
z.ey(a,b)
return z},
lv:function(a,b){var z=new P.fy(!1,0)
z.ez(a,b)
return z}}},
lx:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lw:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.en(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hN:function(a){if(this.c!==6)return!0
return this.b.b.cw(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hC:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.ca(z,{func:1,args:[P.b,P.av]}))return H.dv(w.ic(z,a.a,a.b,null,y,P.av),x)
else return H.dv(w.cw(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;d4:a<,b,0fz:c<,$ti",
e6:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mj(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.T,[c])
w=b==null?1:3
this.cM(new P.bn(x,w,a,b,[z,c]))
return x},
ij:function(a,b){return this.e6(a,null,b)},
cM:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaS")
z=y.a
if(z<4){y.cM(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cz(null,null,z,H.h(new P.kJ(this,a),{func:1,ret:-1}))}},
d_:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaS")
y=u.a
if(y<4){u.d_(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cz(null,null,y,H.h(new P.kO(z,this),{func:1,ret:-1}))}},
bT:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cP:function(a){var z,y,x,w
z=H.y(this,0)
H.dv(a,{futureOr:1,type:z})
y=this.$ti
x=H.bT(a,"$isbz",y,"$asbz")
if(x){z=H.bT(a,"$isaS",y,null)
if(z)P.fm(a,this)
else P.kK(a,this)}else{w=this.bT()
H.z(a,z)
this.a=4
this.c=a
P.bM(this,w)}},
bK:[function(a,b){var z
H.f(b,"$isav")
z=this.bT()
this.a=8
this.c=new P.ak(a,b)
P.bM(this,z)},function(a){return this.bK(a,null)},"iv","$2","$1","geH",4,2,48],
$isbz:1,
p:{
kK:function(a,b){var z,y,x
b.a=1
try{a.e6(new P.kL(b),new P.kM(b),null)}catch(x){z=H.as(x)
y=H.bt(x)
P.n3(new P.kN(b,z,y))}},
fm:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaS")
if(z>=4){y=b.bT()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.d_(y)}},
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
P.cy(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cy(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kR(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kQ(x,b,r).$0()}else if((y&2)!==0)new P.kP(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.K(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fm(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kJ:{"^":"n:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
kO:{"^":"n:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
kL:{"^":"n:15;a",
$1:function(a){var z=this.a
z.a=0
z.cP(a)}},
kM:{"^":"n:51;a",
$2:function(a,b){this.a.bK(a,H.f(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"n:0;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
kR:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e3(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.K(z).$isbz){if(z instanceof P.aS&&z.gd4()>=4){if(z.gd4()===8){w=this.b
w.b=H.f(z.gfz(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ij(new P.kS(t),null)
w.a=!1}}},
kS:{"^":"n:47;a",
$1:function(a){return this.a}},
kQ:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cw(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kP:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hN(z)&&w.e!=null){v=this.b
v.b=w.hC(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fj:{"^":"b;a,0b"},
d7:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.T,[P.m])
z.a=0
this.hK(new P.jq(z,this),!0,new P.jr(z,y),y.geH())
return y}},
jq:{"^":"n;a,b",
$1:function(a){H.z(a,H.ax(this.b,"d7",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ax(this.b,"d7",0)]}}},
jr:{"^":"n:0;a,b",
$0:function(){this.b.cP(this.a.a)}},
eF:{"^":"b;$ti"},
jp:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lZ:{"^":"b;",$isom:1},
mk:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.er()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lc:{"^":"lZ;",
ie:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fI(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bt(x)
P.cy(null,null,this,z,H.f(y,"$isav"))}},
ig:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fJ(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bt(x)
P.cy(null,null,this,z,H.f(y,"$isav"))}},
hj:function(a,b){return new P.le(this,H.h(a,{func:1,ret:b}),b)},
c3:function(a){return new P.ld(this,H.h(a,{func:1,ret:-1}))},
dd:function(a,b){return new P.lf(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e3:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fI(null,null,this,a,b)},
cw:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fJ(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.ml(null,null,this,a,b,c,d,e,f)},
i4:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
le:{"^":"n;a,b,c",
$0:function(){return this.a.e3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ld:{"^":"n:3;a,b",
$0:function(){return this.a.ie(this.b)}},
lf:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i9:function(a,b,c,d,e){return new H.aV(0,0,[d,e])},
ia:function(a,b,c){H.bU(a)
return H.w(H.mE(a,new H.aV(0,0,[b,c])),"$iseh",[b,c],"$aseh")},
ei:function(a,b){return new H.aV(0,0,[a,b])},
id:function(a,b,c,d){return new P.kZ(0,0,[d])},
hX:function(a,b,c){var z,y
if(P.dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.mh(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eG(b,H.h1(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dq(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.eG(x.gaE(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dq:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
mh:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
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
ib:function(a,b,c){var z=P.i9(null,null,null,b,c)
a.I(0,new P.ic(z,b,c))
return z},
cX:function(a){var z,y,x
z={}
if(P.dq(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dF(a,new P.ik(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kZ:{"^":"kT;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fo(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cN(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cN(y,b)}else return this.eA(0,b)},
eA:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cQ(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cW(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d0(this.c,b)
else return this.fo(0,b)},
fo:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eP(z,b)
x=this.cW(y,b)
if(x<0)return!1
this.d6(y.splice(x,1)[0])
return!0},
cN:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdj")!=null)return!1
a[b]=this.bJ(b)
return!0},
d0:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdj")
if(z==null)return!1
this.d6(z)
delete a[b]
return!0},
cO:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.dj(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cO()
return z},
d6:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cO()},
cQ:function(a){return J.bV(a)&0x3ffffff},
eP:function(a,b){return a[this.cQ(b)]},
cW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dj:{"^":"b;a,0b,0c"},
l_:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fo:function(a,b,c){var z=new P.l_(a,b,[c])
z.c=a.e
return z}}},
kT:{"^":"ja;"},
ic:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cn:{"^":"l0;",$isj:1,$isc:1},
x:{"^":"b;$ti",
gZ:function(a){return new H.ej(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
im:function(a,b){var z,y,x
z=H.e([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
il:function(a){return this.im(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
ij:{"^":"ai;"},
ik:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ai",0),H.aZ(this,a,"ai",1)]})
for(z=J.bv(this.gal(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.at(this.gal(a))},
i:function(a){return P.cX(a)},
$isJ:1},
lC:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
il:{"^":"b;$ti",
j:function(a,b){return J.dE(this.a,b)},
m:function(a,b,c){J.cG(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dF(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isJ:1},
f8:{"^":"lD;a,$ti"},
jc:{"^":"b;$ti",
i:function(a){return P.cR(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=P.fo(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
ja:{"^":"jc;"},
l0:{"^":"b+x;"},
lD:{"^":"il+lC;$ti"}}],["","",,P,{"^":"",hm:{"^":"bX;a",
hQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$fk()
if(typeof d!=="number")return H.q(d)
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
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.t(b,x,y)
w.a+=H.co(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dK(b,u,d,v,t,k)
else{j=C.d.bb(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aQ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dK(b,u,d,v,t,i)
else{j=C.d.bb(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aQ(b,d,d,j===2?"==":"=")}return b},
$asbX:function(){return[[P.c,P.m],P.i]},
p:{
dK:function(a,b,c,d,e,f){if(C.d.bb(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hn:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bX:{"^":"b;$ti"},bx:{"^":"jp;$ti"},hL:{"^":"bX;",
$asbX:function(){return[P.i,[P.c,P.m]]}},k3:{"^":"hL;a",
ghw:function(){return C.E}},ka:{"^":"bx;",
aW:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lY(0,0,x)
if(w.eN(a,b,z)!==z)w.d8(J.he(a,z-1),0)
return C.V.bF(x,0,w.b)},
c9:function(a){return this.aW(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lY:{"^":"b;a,b,c",
d8:function(a,b){var z,y,x,w,v
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
eN:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d8(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k4:{"^":"bx;a",
aW:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k5(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aK(b,c,y,null,null,null)
x=new P.an("")
w=new P.lV(!1,x,!0,0,0,0)
w.aW(a,b,y)
w.hy(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c9:function(a){return this.aW(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
k5:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k6(!1,b,c,d)
return},
k6:function(a,b,c,d){var z,y,x
z=$.$get$fe()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.k8(b))return
return P.k9(a,b)},
k9:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k8:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k7:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lV:{"^":"b;a,b,c,d,e,f",
hy:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lX(c)
v=new P.lW(this,b,c,a)
$label0$0:for(u=J.aF(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bC()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.d.b6(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.v,q)
if(z<=C.v[q]){q=P.V("Overlong encoding of 0x"+C.d.b6(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.d.b6(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.co(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cE()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.d.b6(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.d.b6(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lX:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aF(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bC()
if((w&127)!==w)return x-b}return z-b}},lW:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
cc:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iT(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hN:function(a){var z=J.K(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
ie:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ig:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gZ(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c6:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.ev(z?C.a.bF(a,b,c):a)}if(!!J.K(a).$isd2)return H.iV(a,b,P.aK(b,c,a.length,null,null,null))
return P.js(a,b,c)},
js:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.Z(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.at(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gR(y))}return H.ev(w)},
j1:function(a,b,c){return new H.i0(a,H.i1(a,!1,!0,!1))},
fa:function(){var z=H.iL()
if(z!=null)return P.jY(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hN(a)},
v:function(a){return new P.fl(a)},
ih:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dB:function(a){H.n1(a)},
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f9(b>0||c<c?C.b.t(a,b,c):a,5,null).ge8()
else if(y===32)return P.f9(C.b.t(a,z,c),0,null).ge8()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fK(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ir()
if(v>=b)if(P.fK(a,b,v,20,w)===20)w[7]=v
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a5(a,"..",s)))n=r>s+2&&C.b.a5(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a5(a,"file",b)){if(u<=b){if(!C.b.a5(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aQ(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a5(a,"http",b)){if(x&&t+3===s&&C.b.a5(a,"80",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
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
else if(v===z&&C.b.a5(a,"https",b)){if(x&&t+4===s&&C.b.a5(a,"443",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
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
q-=b}return new P.lh(a,v,u,t,s,r,q,o)}return P.lE(a,b,c,v,u,t,s,r,q,o)},
fc:function(a,b){var z=P.i
return C.a.hz(H.e(a.split("&"),[z]),P.ei(z,z),new P.k0(b),[P.J,P.i,P.i])},
jW:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jX(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.U(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cc(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.cE()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cc(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.cE()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jZ(a)
y=new P.k_(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.U(a,w)
if(s===58){if(w===b){++w
if(C.b.U(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jW(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aH(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mb:function(){var z,y,x,w,v
z=P.ih(22,new P.md(),!0,P.Q)
y=new P.mc(z)
x=new P.me()
w=new P.mf()
v=H.f(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isQ"),"]",5)
v=H.f(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isQ"),"az",21)
v=H.f(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fK:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fL()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.d.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hD(H.iS(this))
y=P.bZ(H.iQ(this))
x=P.bZ(H.iM(this))
w=P.bZ(H.iN(this))
v=P.bZ(H.iP(this))
u=P.bZ(H.iR(this))
t=P.hE(H.iO(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a0;"},
"+double":0,
b4:{"^":"b;a",
k:function(a,b){return new P.b4(C.d.ab(this.a*b))},
M:function(a,b){return C.d.M(this.a,H.f(b,"$isb4").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hI()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.hH().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e4:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hH:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hI:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
er:{"^":"a4;",
i:function(a){return"Throw of null."}},
aG:{"^":"a4;a,b,c,d",
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
u=P.ci(this.b)
return w+v+": "+H.l(u)},
p:{
bW:function(a){return new P.aG(!1,null,null,a)},
ce:function(a,b,c){return new P.aG(!0,a,b,c)},
dH:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cp:{"^":"aG;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cq:function(a,b,c){return new P.cp(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cp(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hV:{"^":"aG;e,l:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.ha(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.B(e!=null?e:J.at(b))
return new P.hV(b,z,!0,a,c,"Index out of range")}}},
jU:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jU(a)}}},
jR:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c7:function(a){return new P.jR(a)}}},
jm:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hw:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ci(z))+"."},
p:{
b2:function(a){return new P.hw(a)}}},
iH:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eC:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hC:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fl:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hT:{"^":"b;a,b,c",
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
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.U(w,s)
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.hT(a,b,c)}}},
m:{"^":"a0;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.G();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hX(this,"(",")")}},
cS:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
G:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a0:{"^":"b;"},
"+num":0,
b:{"^":";",
q:function(a,b){return this===b},
gS:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"b;"},
i:{"^":"b;",$ises:1},
"+String":0,
an:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoa:1,
p:{
eG:function(a,b,c){var z=J.bv(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
k0:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.N(b)
y=J.aF(b).dM(b,"=")
if(y===-1){if(b!=="")J.cG(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.az(b,y+1)
z=this.a
J.cG(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
jX:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
jZ:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k_:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cc(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cv:{"^":"b;bE:a<,b,c,d,dX:e>,f,r,0x,0y,0z,0Q,0ch",
ge9:function(){return this.b},
gck:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbA:function(a){var z=this.d
if(z==null)return P.fA(this.a)
return z},
gcr:function(a){var z=this.f
return z==null?"":z},
gdH:function(){var z=this.r
return z==null?"":z},
cv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cv(i,j,c,f,d,g,this.r)},
e1:function(a,b){return this.cv(a,null,null,null,null,null,null,b,null,null)},
gcs:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f8(P.fc(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdI:function(){return this.c!=null},
gdL:function(){return this.f!=null},
gdJ:function(){return this.r!=null},
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
z=J.K(b)
if(!!z.$isdf){y=this.a
x=b.gbE()
if(y==null?x==null:y===x)if(this.c!=null===b.gdI()){y=this.b
x=b.ge9()
if(y==null?x==null:y===x){y=this.gck(this)
x=z.gck(b)
if(y==null?x==null:y===x){y=this.gbA(this)
x=z.gbA(b)
if(y==null?x==null:y===x)if(this.e===z.gdX(b)){y=this.f
x=y==null
if(!x===b.gdL()){if(x)y=""
if(y===z.gcr(b)){z=this.r
y=z==null
if(!y===b.gdJ()){if(y)z=""
z=z===b.gdH()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.i(0))
this.z=z}return z},
$isdf:1,
p:{
cw:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fF().b
if(typeof b!=="string")H.r(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ax(c,"bX",0))
y=c.ghw().c9(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.co(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lE:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lP(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lQ(a,z,e-1):""
x=P.lJ(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.lM(P.cc(C.b.t(a,w,g),new P.lF(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lK(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cv(j,y,x,v,u,t,i<c?P.lI(a,i+1,c):null)},
fA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.a(P.V(c,a,b))},
lM:function(a,b){if(a!=null&&a===P.fA(b))return
return a},
lJ:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.O()
z=c-1
if(C.b.U(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.fb(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.U(a,y)===58){P.fb(a,b,c)
return"["+a+"]"}return P.lS(a,b,c)},
lS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.U(a,z)
if(v===37){u=P.fH(a,z,!0)
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
if(t>=8)return H.d(C.w,t)
t=(C.w[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.U(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fB(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lP:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fD(C.b.F(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lG(y?a.toLowerCase():a)},
lG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lQ:function(a,b,c){return P.bO(a,b,c,C.R)},
lK:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.x):C.I.j6(d,new P.lL(),P.i).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.lR(w,e,f)},
lR:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.lT(a,!z||c)
return P.lU(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.bW("Both query and queryParameters specified"))
return P.bO(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.I(0,new P.lN(new P.lO(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lI:function(a,b,c){return P.bO(a,b,c,C.n)},
fH:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.U(a,b+1)
x=C.b.U(a,z)
w=H.cC(y)
v=H.cC(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aH(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.co(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fB:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fJ(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bO:function(a,b,c,d){var z=P.fG(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.t(a,b,c):z},
fG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.U(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fH(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.U(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fB(v)}}if(w==null)w=new P.an("")
w.a+=C.b.t(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fE:function(a){if(C.b.a4(a,"."))return!0
return C.b.dM(a,"/.")!==-1},
lU:function(a){var z,y,x,w,v,u,t
if(!P.fE(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lT:function(a,b){var z,y,x,w,v,u
if(!P.fE(a))return!b?P.fC(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fC(z[0]))}return C.a.C(z,"/")},
fC:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fD(J.hb(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.az(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lH:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bW("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dw(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.t(a,b,c)
else u=new H.a3(y.t(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.bW("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bW("Truncated URI"))
C.a.h(u,P.lH(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k4(!1).c9(u)},
fD:function(a){var z=a|32
return 97<=z&&z<=122}}},
lF:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lL:{"^":"n:38;",
$1:function(a){return P.cw(C.T,a,C.k,!1)}},
lO:{"^":"n:24;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cw(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cw(C.p,b,C.k,!0))}}},
lN:{"^":"n:36;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.bv(H.h1(b,"$isj")),y=this.a;z.G();)y.$2(a,H.N(z.gR(z)))}},
jV:{"^":"b;a,b,c",
ge8:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dN(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.n)
w=x}else v=null
z=new P.kz(this,"data",null,null,null,P.bO(y,z,w,C.x),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
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
if((z.length&1)===1)a=C.B.hQ(0,a,s,y)
else{r=P.fG(a,s,y,C.n,!0)
if(r!=null)a=C.b.aQ(a,s,y,r)}return new P.jV(a,z,c)}}},
md:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mc:{"^":"n:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hf(z,0,96,b)
return z}},
me:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mf:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lh:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdI:function(){return this.c>0},
gdK:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
gdL:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdJ:function(){return this.r<this.a.length},
gcX:function(){return this.b===4&&C.b.a4(this.a,"http")},
gcY:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbE:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcX()){this.x="http"
z="http"}else if(this.gcY()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
ge9:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gck:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbA:function(a){var z
if(this.gdK()){z=this.d
if(typeof z!=="number")return z.B()
return P.cc(C.b.t(this.a,z+1,this.e),null,null)}if(this.gcX())return 80
if(this.gcY())return 443
return 0},
gdX:function(a){return C.b.t(this.a,this.e,this.f)},
gcr:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.t(this.a,z+1,y):""},
gdH:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.az(y,z+1):""},
gcs:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.U
z=P.i
return new P.f8(P.fc(this.gcr(this),C.k),[z,z])},
cv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbE()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.gdK()?this.gbA(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.az(y,x+1)
return new P.cv(i,j,c,f,d,g,b)},
e1:function(a,b){return this.cv(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdf)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdf:1},
kz:{"^":"cv;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cO:function(a,b){var z=document.createElement("canvas")
return z},
hK:function(a){H.f(a,"$isab")
return"wheel"},
hW:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isea")
try{J.hh(z,a)}catch(x){H.as(x)}return z},
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fn:function(a,b,c,d){var z,y
z=W.ct(W.ct(W.ct(W.ct(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fO:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dd(a,b)},
a6:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nc:{"^":"t;0l:length=","%":"AccessibleNodeList"},
nd:{"^":"a6;0a_:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ne:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cK:{"^":"t;",$iscK:1,"%":";Blob"},
nk:{"^":"a6;0a_:type}","%":"HTMLButtonElement"},
cN:{"^":"a6;",
bD:function(a,b,c){if(c!=null)return a.getContext(b,P.mr(c,null))
return a.getContext(b)},
ed:function(a,b){return this.bD(a,b,null)},
$iscN:1,
"%":"HTMLCanvasElement"},
dR:{"^":"t;",$isdR:1,"%":"CanvasRenderingContext2D"},
nm:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
no:{"^":"hB;0l:length=","%":"CSSPerspective"},
b3:{"^":"t;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
np:{"^":"ky;0l:length=",
ee:function(a,b){var z=a.getPropertyValue(this.eE(a,b))
return z==null?"":z},
eE:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.fK(a,b)
z[b]=y
return y},
fK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hF()+b
if(z in a)return z
return b},
gc4:function(a){return a.bottom},
gak:function(a){return a.height},
gaO:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hA:{"^":"b;",
gaO:function(a){return this.ee(a,"left")}},
dX:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hB:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nq:{"^":"dX;0l:length=","%":"CSSTransformValue"},
nr:{"^":"dX;0l:length=","%":"CSSUnparsedValue"},
ns:{"^":"t;0l:length=","%":"DataTransferItemList"},
nt:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
nu:{"^":"kB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.w(c,"$isa7",[P.a0],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a0]]},
$asx:function(){return[[P.a7,P.a0]]},
$isj:1,
$asj:function(){return[[P.a7,P.a0]]},
$isc:1,
$asc:function(){return[[P.a7,P.a0]]},
$asD:function(){return[[P.a7,P.a0]]},
"%":"ClientRectList|DOMRectList"},
hG:{"^":"t;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gak(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a0],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaO(b)&&a.top===z.gb8(b)&&this.gao(a)===z.gao(b)&&this.gak(a)===z.gak(b)},
gS:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gc4:function(a){return a.bottom},
gak:function(a){return a.height},
gaO:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gao:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a0]},
"%":";DOMRectReadOnly"},
nv:{"^":"kD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asD:function(){return[P.i]},
"%":"DOMStringList"},
nw:{"^":"t;0l:length=","%":"DOMTokenList"},
kx:{"^":"cn;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa1")},
m:function(a,b,c){var z
H.B(b)
H.f(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.il(this)
return new J.ay(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c7(null))},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"L;",
gc8:function(a){return new W.kx(a,a.children)},
gde:function(a){return P.iY(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a0)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nx:{"^":"a6;0a_:type}","%":"HTMLEmbedElement"},
aa:{"^":"t;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"t;",
da:["ei",function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(c!=null)this.eB(a,b,c,!1)}],
eB:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;ft|fu|fw|fx"},
aU:{"^":"cK;",$isaU:1,"%":"File"},
e6:{"^":"kI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isaU")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asx:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise6:1,
$asD:function(){return[W.aU]},
"%":"FileList"},
ny:{"^":"ab;0l:length=","%":"FileWriter"},
nz:{"^":"a6;0l:length=","%":"HTMLFormElement"},
b6:{"^":"t;",$isb6:1,"%":"Gamepad"},
nA:{"^":"t;0l:length=","%":"History"},
nB:{"^":"kV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c_:{"^":"t;0dg:data=",$isc_:1,"%":"ImageData"},
e9:{"^":"a6;",$ise9:1,"%":"HTMLImageElement"},
ea:{"^":"a6;0a_:type}",$isea:1,"%":"HTMLInputElement"},
bB:{"^":"dc;",$isbB:1,"%":"KeyboardEvent"},
nF:{"^":"a6;0a_:type}","%":"HTMLLinkElement"},
nG:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
nH:{"^":"t;0l:length=","%":"MediaList"},
nI:{"^":"ab;",
da:function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.ei(a,b,c,!1)},
"%":"MessagePort"},
nJ:{"^":"l1;",
j:function(a,b){return P.aT(a.get(H.N(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.e([],[P.i])
this.I(a,new W.iz(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iz:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nK:{"^":"l2;",
j:function(a,b){return P.aT(a.get(H.N(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.e([],[P.i])
this.I(a,new W.iA(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iA:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"t;",$isb9:1,"%":"MimeType"},
nL:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asD:function(){return[W.b9]},
"%":"MimeTypeArray"},
au:{"^":"dc;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kw:{"^":"cn;a",
m:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e7(z,z.length,-1,[H.aZ(C.W,z,"D",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$asj:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"ab;",
i8:function(a,b){var z,y
try{z=a.parentNode
J.hc(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ej(a):z},
fs:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iE:{"^":"l6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
nT:{"^":"a6;0a_:type}","%":"HTMLOListElement"},
nU:{"^":"a6;0a_:type}","%":"HTMLObjectElement"},
ba:{"^":"t;0l:length=",$isba:1,"%":"Plugin"},
nX:{"^":"la;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asD:function(){return[W.ba]},
"%":"PluginArray"},
nZ:{"^":"t;0a_:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
o_:{"^":"lg;",
j:function(a,b){return P.aT(a.get(H.N(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.e([],[P.i])
this.I(a,new W.j7(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j7:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o1:{"^":"a6;0a_:type}","%":"HTMLScriptElement"},
o3:{"^":"a6;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"ab;",$isbc:1,"%":"SourceBuffer"},
o4:{"^":"fu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"SourceBufferList"},
o5:{"^":"a6;0a_:type}","%":"HTMLSourceElement"},
bd:{"^":"t;",$isbd:1,"%":"SpeechGrammar"},
o6:{"^":"lj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"t;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
o8:{"^":"lm;",
j:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,H.N(c))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.e([],[P.i])
this.I(a,new W.jo(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jo:{"^":"n:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ob:{"^":"a6;0a_:type}","%":"HTMLStyleElement"},
bf:{"^":"t;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
d8:{"^":"a6;",$isd8:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"ab;",$isbg:1,"%":"TextTrack"},
bh:{"^":"ab;",$isbh:1,"%":"TextTrackCue|VTTCue"},
oe:{"^":"lt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"TextTrackCueList"},
of:{"^":"fx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"TextTrackList"},
og:{"^":"t;0l:length=","%":"TimeRanges"},
bj:{"^":"t;",$isbj:1,"%":"Touch"},
bk:{"^":"dc;",$isbk:1,"%":"TouchEvent"},
oh:{"^":"lz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"TouchList"},
oi:{"^":"t;0l:length=","%":"TrackDefaultList"},
dc:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ok:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
ol:{"^":"ab;0l:length=","%":"VideoTrackList"},
bL:{"^":"au;",
ghs:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
kp:{"^":"ab;",
ft:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.a0]}),1))},
eM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oq:{"^":"m0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isb3")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isj:1,
$asj:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asD:function(){return[W.b3]},
"%":"CSSRuleList"},
or:{"^":"hG;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a0],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaO(b)&&a.top===z.gb8(b)&&a.width===z.gao(b)&&a.height===z.gak(b)},
gS:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ot:{"^":"m2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isb6")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asD:function(){return[W.b6]},
"%":"GamepadList"},
ou:{"^":"m4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ov:{"^":"m6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asD:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
ow:{"^":"m8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.B(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"StyleSheetList"},
kE:{"^":"d7;a,b,c,$ti",
hK:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
os:{"^":"kE;a,b,c,$ti"},
kF:{"^":"eF;a,b,c,d,e,$ti",
fO:function(){var z=this.d
if(z!=null&&this.a<=0)J.hd(this.b,this.c,z,!1)},
p:{
a_:function(a,b,c,d,e){var z=c==null?null:W.fO(new W.kG(c),W.aa)
z=new W.kF(0,a,b,z,!1,[e])
z.fO()
return z}}},
kG:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isaa"))}},
D:{"^":"b;$ti",
gZ:function(a){return new W.e7(a,this.gl(a),-1,[H.aZ(this,a,"D",0)])},
aw:function(a,b,c,d){H.z(d,H.aZ(this,a,"D",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e7:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dE(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
ky:{"^":"t+hA;"},
kA:{"^":"t+x;"},
kB:{"^":"kA+D;"},
kC:{"^":"t+x;"},
kD:{"^":"kC+D;"},
kH:{"^":"t+x;"},
kI:{"^":"kH+D;"},
kU:{"^":"t+x;"},
kV:{"^":"kU+D;"},
l1:{"^":"t+ai;"},
l2:{"^":"t+ai;"},
l3:{"^":"t+x;"},
l4:{"^":"l3+D;"},
l5:{"^":"t+x;"},
l6:{"^":"l5+D;"},
l9:{"^":"t+x;"},
la:{"^":"l9+D;"},
lg:{"^":"t+ai;"},
ft:{"^":"ab+x;"},
fu:{"^":"ft+D;"},
li:{"^":"t+x;"},
lj:{"^":"li+D;"},
lm:{"^":"t+ai;"},
ls:{"^":"t+x;"},
lt:{"^":"ls+D;"},
fw:{"^":"ab+x;"},
fx:{"^":"fw+D;"},
ly:{"^":"t+x;"},
lz:{"^":"ly+D;"},
m_:{"^":"t+x;"},
m0:{"^":"m_+D;"},
m1:{"^":"t+x;"},
m2:{"^":"m1+D;"},
m3:{"^":"t+x;"},
m4:{"^":"m3+D;"},
m5:{"^":"t+x;"},
m6:{"^":"m5+D;"},
m7:{"^":"t+x;"},
m8:{"^":"m7+D;"}}],["","",,P,{"^":"",
mu:function(a){var z,y
z=J.K(a)
if(!!z.$isc_){y=z.gdg(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
mt:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ei(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.N(y[w])
z.m(0,v,a[v])}return z},
mr:function(a,b){var z={}
a.I(0,new P.ms(z))
return z},
e2:function(){var z=$.e1
if(z==null){z=J.cH(window.navigator.userAgent,"Opera",0)
$.e1=z}return z},
hF:function(){var z,y
z=$.dZ
if(z!=null)return z
y=$.e_
if(y==null){y=J.cH(window.navigator.userAgent,"Firefox",0)
$.e_=y}if(y)z="-moz-"
else{y=$.e0
if(y==null){y=!P.e2()&&J.cH(window.navigator.userAgent,"Trident/",0)
$.e0=y}if(y)z="-ms-"
else z=P.e2()?"-o-":"-webkit-"}$.dZ=z
return z},
lp:{"^":"b;",
dF:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cA:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isj0)throw H.a(P.c7("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscK)return a
if(!!y.$ise6)return a
if(!!y.$isc_)return a
if(!!y.$isep||!!y.$isd1)return a
if(!!y.$isJ){x=this.dF(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.lr(z,this))
return z.a}if(!!y.$isc){x=this.dF(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hp(a,x)}throw H.a(P.c7("structured clone of other type"))},
hp:function(a,b){var z,y,x,w
z=J.aF(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cA(z.j(a,w)))
return x}},
lr:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cA(b)}},
fz:{"^":"b;dg:a>,b,c",$isc_:1},
ms:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lq:{"^":"lp;a,b"},
hQ:{"^":"cn;a,b",
gbg:function(){var z,y,x
z=this.b
y=H.ax(z,"x",0)
x=W.a1
return new H.im(new H.kn(z,H.h(new P.hR(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hS(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.B(b)
H.f(c,"$isa1")
z=this.gbg()
J.hg(z.b.$1(J.cI(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbg().a)},
j:function(a,b){var z=this.gbg()
return z.b.$1(J.cI(z.a,b))},
gZ:function(a){var z=P.ig(this.gbg(),!1,W.a1)
return new J.ay(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hR:{"^":"n:29;",
$1:function(a){return!!J.K(H.f(a,"$isL")).$isa1}},
hS:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lb:{"^":"b;$ti",
gb4:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gc4:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a0],"$asa7")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb4(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gc4(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.bV(z)
x=this.b
w=J.bV(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.kW(P.cu(P.cu(P.cu(P.cu(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"lb;aO:a>,b8:b>,ao:c>,ak:d>,$ti",p:{
iY:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"t;",$isbC:1,"%":"SVGLength"},nE:{"^":"kY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbC")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bC]},
$isj:1,
$asj:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asD:function(){return[P.bC]},
"%":"SVGLengthList"},bF:{"^":"t;",$isbF:1,"%":"SVGNumber"},nS:{"^":"l8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbF")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bF]},
$isj:1,
$asj:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asD:function(){return[P.bF]},
"%":"SVGNumberList"},nY:{"^":"t;0l:length=","%":"SVGPointList"},o2:{"^":"eH;0a_:type}","%":"SVGScriptElement"},o9:{"^":"lo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asD:function(){return[P.i]},
"%":"SVGStringList"},oc:{"^":"eH;0a_:type}","%":"SVGStyleElement"},eH:{"^":"a1;",
gc8:function(a){return new P.hQ(a,new W.kw(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bI:{"^":"t;",$isbI:1,"%":"SVGTransform"},oj:{"^":"lB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.B(b)
H.f(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asD:function(){return[P.bI]},
"%":"SVGTransformList"},kX:{"^":"t+x;"},kY:{"^":"kX+D;"},l7:{"^":"t+x;"},l8:{"^":"l7+D;"},ln:{"^":"t+x;"},lo:{"^":"ln+D;"},lA:{"^":"t+x;"},lB:{"^":"lA+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjG:1}}],["","",,P,{"^":"",nf:{"^":"t;0l:length=","%":"AudioBuffer"},dJ:{"^":"ab;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ng:{"^":"kv;",
j:function(a,b){return P.aT(a.get(H.N(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.e([],[P.i])
this.I(a,new P.hk(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hk:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hl:{"^":"dJ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nh:{"^":"ab;0l:length=","%":"AudioTrackList"},ho:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ni:{"^":"dJ;0a_:type}","%":"BiquadFilterNode"},nV:{"^":"ho;0l:length=","%":"OfflineAudioContext"},nW:{"^":"hl;0a_:type}","%":"Oscillator|OscillatorNode"},kv:{"^":"t+ai;"}}],["","",,P,{"^":"",d5:{"^":"t;",
ii:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mt(g))
return}if(!!z.$ise9)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bW("Incorrect number or type of arguments"))},
ih:function(a,b,c,d,e,f,g){return this.ii(a,b,c,d,e,f,g,null,null,null)},
$isd5:1,
"%":"WebGLRenderingContext"},jP:{"^":"t;",$isjP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",o7:{"^":"ll;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.B(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asD:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lk:{"^":"t+x;"},ll:{"^":"lk+D;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bH:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cF:function(a,b,c){var z=H.ax(this,"aH",0)
H.h(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bc:function(a,b){return this.cF(a,null,b)},
fh:function(a){var z
H.w(a,"$isj",[H.ax(this,"aH",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eu:function(a,b){var z
H.w(b,"$isj",[H.ax(this,"aH",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fh(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eu(x,H.e([b],z))}},
$isj:1,
p:{
cP:function(a){var z=new O.aH([a])
z.bH(a)
return z}}},cZ:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
ev:function(a){var z=this.b
if(!(z==null))z.E(a)},
aA:function(){return this.ev(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c4()},
e_:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.aA()},
cq:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cJ:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sad:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.K(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eB])
w.b=!0
this.af(w)}},
sa8:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.u]})
C.a.K(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.ae])
w.b=!0
this.af(w)}},
ay:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.an(0,b,this):null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.am])
w.b=!0
this.af(w)}for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ay(0,b)},
aP:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.k(0,z.gV(z)))
z.aA()
a.e0(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.i7(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aP(a)
a.dZ()
a.dx.cq()},
gw:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.E(a)},
W:function(){return this.af(null)},
hV:[function(a){H.f(a,"$isu")
this.e=null
this.af(a)},function(){return this.hV(null)},"jc","$1","$0","gdW",0,2,1],
hU:[function(a){this.af(H.f(a,"$isu"))},function(){return this.hU(null)},"jb","$1","$0","gdV",0,2,1],
hS:[function(a){this.af(H.f(a,"$isu"))},function(){return this.hS(null)},"j9","$1","$0","gdU",0,2,1],
j8:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdU(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b5()
t.a=H.e([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.W()},"$2","ghR",8,0,11],
ja:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdU(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b5()
t.a=H.e([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.K(t.a,y)}}this.W()},"$2","ghT",8,0,11],
$isaJ:1,
p:{
e5:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cP(E.aI)
z.y=y
y.bc(z.ghR(),z.ghT())
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
z.sad(0,e)
z.sa8(c)
return z}}},j2:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ep:function(a,b){var z,y,x,w,v
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
y=[V.am]
z.a=H.e([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.j4(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cZ()
z.a=H.e([],y)
v=z.gw()
v.toString
x=H.h(new E.j5(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cZ()
z.a=H.e([],y)
y=z.gw()
y.toString
w=H.h(new E.j6(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.d9])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.i,A.eA])},
gi3:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.k(0,y.gV(y))
this.z=y
z=y}return z},
e0:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
dZ:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j3:function(a,b){var z=new E.j2(a,b)
z.ep(a,b)
return z}}},j4:{"^":"n:10;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.ch=null}},j5:{"^":"n:10;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j6:{"^":"n:10;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},eE:{"^":"u;c,a,0b"},jy:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a1:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
ex:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.E(a)
this.ia()},function(){return this.ex(null)},"ew","$1","$0","gcI",0,2,1],
ghB:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.e4(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
d1:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.h.cj(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cj(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eM(C.q,this.gi9())},
ia:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jA(this),{func:1,ret:-1,args:[P.a0]})
C.A.eM(z)
C.A.ft(z,W.fO(y,P.a0))}},"$0","gi9",0,0,3],
i6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d1()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e4(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aA()
w=x.db
C.a.sl(w.a,0)
w.aA()
w=x.dx
C.a.sl(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aP(this.e)}}catch(v){z=H.as(v)
y=H.bt(v)
P.dB("Error: "+H.l(z))
P.dB("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jz:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscN)return E.eL(a,!0,!0,!0,!1)
y=W.cO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc8(a).h(0,y)
w=E.eL(y,!0,!0,!0,!1)
w.a=a
return w},
eL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jy()
y=P.ia(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bD(a,"webgl",y)
x=H.f(x==null?C.l.bD(a,"experimental-webgl",y):x,"$isd5")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j3(x,a)
w=new T.jt(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k1(a)
v=new X.i3()
v.c=new X.aW(!1,!1,!1)
v.d=P.id(null,null,null,P.m)
w.b=v
v=new X.iB(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ii(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jD(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eF,P.b]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.h(w.gf4(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.h(w.gf7(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.h(w.gf0(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.h(w.gf9(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.h(w.gf8(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.h(w.gfc(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.h(w.gfe(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.h(w.gfd(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a_(a,H.N(W.hK(a)),H.h(w.gff(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.h(w.gf5(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.h(w.gf6(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.h(w.gfg(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.h(w.gfn(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.h(w.gfl(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.h(w.gfm(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.d1()
return z}}},jA:{"^":"n:31;a",
$1:function(a){var z
H.n0(a)
z=this.a
if(z.z){z.z=!1
z.i6()}}}}],["","",,Z,{"^":"",fi:{"^":"b;a,b",p:{
dh:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fi(b,z)}}},dN:{"^":"cJ;a,b,c,d,e",
c2:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},km:{"^":"b;a",$isnj:1},dO:{"^":"b;a,0b,c,d",
aN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c2:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c2(a)},
ip:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aP:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isod:1},ck:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcG:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hh:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fh()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
aq:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dS:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hO(z))
return x!==0},
hu:function(){return this.E(null)},
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
R:function(){var z=new D.b5()
z.a=H.e([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hO:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},cl:{"^":"u;c,d,a,0b,$ti"},cm:{"^":"u;c,d,a,0b,$ti"},H:{"^":"u;c,d,e,a,0b,$ti",
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
p:{"^":"nl<"}},ef:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eg:{"^":"u;c,a,0b"},i3:{"^":"b;0a,0b,0c,0d",
i0:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.E(y)},
hX:function(a){var z,y
this.c=a.b
this.d.K(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.E(y)}},ek:{"^":"d4;x,y,c,d,e,a,0b"},ii:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
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
s=new X.c5(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cp:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eg()
if(typeof z!=="number")return z.bC()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
i1:function(a){return!1},
fb:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.ek(c,a,this.a.gbl(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.U(0,0)}},aW:{"^":"b;a,b,c",
q:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},c5:{"^":"d4;x,y,z,Q,ch,c,d,e,a,0b"},iB:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbl()
x=new X.c5(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cp:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bN(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eg()
if(typeof z!=="number")return z.bC()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bN(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bN(a,b,!1))
return!0},
i2:function(a,b){return!1}},d4:{"^":"u;"},eQ:{"^":"d4;x,y,z,Q,ch,c,d,e,a,0b"},jD:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gbl()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i_:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.E(this.ar(a,!0))
return!0},
hY:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.E(this.ar(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.E(this.ar(a,!1))
return!0}},k1:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbl:function(){var z=this.a
return V.ex(0,0,(z&&C.l).gde(z).c,C.l.gde(z).d)},
cT:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.aW(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
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
aT:function(a){return new V.a5(a.movementX,a.movementY)},
bS:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.h.ab(u.pageX)
C.h.ab(u.pageY)
s=z.left
C.h.ab(u.pageX)
C.a.h(y,new V.U(t-s,C.h.ab(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.aW(y,a.altKey,a.shiftKey))},
bP:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=H.B(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.O()
u=H.B(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
iL:[function(a){this.f=!0},"$1","gf7",4,0,5],
iF:[function(a){this.f=!1},"$1","gf0",4,0,5],
iI:[function(a){H.f(a,"$isau")
if(this.f&&this.bP(a))a.preventDefault()},"$1","gf4",4,0,4],
iN:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cT(a)
if(this.b.i0(z))a.preventDefault()},"$1","gf9",4,0,25],
iM:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cT(a)
if(this.b.hX(z))a.preventDefault()},"$1","gf8",4,0,25],
iP:[function(a){var z,y,x,w
H.f(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ap(a)
x=this.aT(a)
if(this.d.cp(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cp(y,w))a.preventDefault()},"$1","gfc",4,0,4],
iR:[function(a){var z,y,x
H.f(a,"$isau")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aT(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gfe",4,0,4],
iK:[function(a){var z,y,x
H.f(a,"$isau")
if(!this.bP(a)){this.aG(a)
z=this.ap(a)
if(this.x){y=this.aT(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gf6",4,0,4],
iQ:[function(a){var z,y,x
H.f(a,"$isau")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aT(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gfd",4,0,4],
iJ:[function(a){var z,y,x
H.f(a,"$isau")
if(!this.bP(a)){this.aG(a)
z=this.ap(a)
if(this.x){y=this.aT(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","gf5",4,0,4],
iS:[function(a){var z,y
H.f(a,"$isbL")
this.aG(a)
z=new V.a5((a&&C.z).ghr(a),C.z.ghs(a)).v(0,180)
if(this.x){if(this.d.i1(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.i2(z,y))a.preventDefault()},"$1","gff",4,0,35],
iT:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.fb(w,v,x)}},"$1","gfg",4,0,5],
iZ:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.bY(a)
z=this.bS(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfn",4,0,13],
iX:[function(a){var z
H.f(a,"$isbk")
this.bY(a)
z=this.bS(a)
if(this.e.hY(z))a.preventDefault()},"$1","gfl",4,0,13],
iY:[function(a){var z
H.f(a,"$isbk")
this.bY(a)
z=this.bS(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfm",4,0,13]}}],["","",,D,{"^":"",ch:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.R()
this.d=z}return z},
aB:[function(a){var z
H.f(a,"$isu")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aB(null)},"is","$1","$0","gcJ",0,2,1],
sa8:function(a){var z,y,x
if(!J.O(this.b,a)){z=this.b
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcJ(),{func:1,ret:-1,args:[D.u]})
C.a.K(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcJ(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.b,this,[U.ae])
z.b=!0
this.aB(z)}},
sa3:function(a,b){var z,y
if(b==null)b=new V.Y(1,1,1)
if(!this.c.q(0,b)){z=this.c
this.c=b
y=new D.H("color",z,b,this,[V.Y])
y.b=!0
this.aB(y)}},
$isa2:1,
$isaJ:1,
p:{
e3:function(a,b){var z=new D.ch()
z.c=new V.Y(1,1,1)
z.a=new V.E(0,0,1)
z.sa8(b)
z.sa3(0,a)
return z}}},a2:{"^":"b;",$isaJ:1},i4:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.R()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fa:[function(a){var z
H.f(a,"$isu")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fa(null)},"iO","$1","$0","gcZ",0,2,1],
iU:[function(a){var z,y,x
H.w(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.eI(x))return!1}return!0},"$1","gfi",4,0,37],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcZ(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.ch)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","geY",8,0,23],
iW:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcZ(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.ch)C.a.K(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.K(s.a,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfk",8,0,23],
eI:function(a){var z=C.a.aV(this.e,a)
return z},
$asj:function(){return[D.a2]},
$asaH:function(){return[D.a2]}},iK:{"^":"b;",$isa2:1,$isaJ:1},jl:{"^":"b;",$isa2:1,$isaJ:1},jv:{"^":"b;",$isa2:1,$isaJ:1},jw:{"^":"b;",$isa2:1,$isaJ:1},jx:{"^":"b;",$isa2:1,$isaJ:1}}],["","",,V,{"^":"",
nn:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","ix",8,0,33],
cF:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bb(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.h.e7($.o.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.p],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.a9(z[u],x))}return z},
dA:function(a,b){return C.h.ik(Math.pow(b,C.H.cj(Math.log(H.mq(a))/Math.log(b))))},
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
q:function(a,b){var z
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
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
q:function(a,b){var z
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
bD:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$isbD")
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
return new V.bD(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bD))return!1
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
z=[P.p]
y=V.bs(H.e([this.a,this.d,this.r],z),3,0)
x=V.bs(H.e([this.b,this.e,this.x],z),3,0)
w=V.bs(H.e([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
p:{
iy:function(a){return new V.bD(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)}}},
am:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
dO:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isam")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
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
dG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bs(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.dG("",3,0)},
A:function(a){return this.dG(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
d_:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
en:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eo:function(a,b,c,d){return V.em(new V.W(0,0,0),new V.E(0,1,0),new V.E(a,b,c))},
em:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.D(c)))
y=b.at(z)
x=y.v(0,Math.sqrt(y.D(y)))
w=z.at(x)
v=new V.E(a.a,a.b,a.c)
return V.aB(x.a,w.a,z.a,x.N(0).D(v),x.b,w.b,z.b,w.N(0).D(v),x.c,w.c,z.c,z.N(0).D(v),0,0,0,1)}}},
U:{"^":"b;a,b",
O:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
W:{"^":"b;a,b,c",
B:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bG:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bG(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
ew:{"^":"b;a,b,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ew))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
a5:{"^":"b;a,b",
hI:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
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
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hI:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var z,y,x
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
dP:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hv:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.cF(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.E(a)},
sea:function(a,b){},
sdQ:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.H("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.P(z)}},
sdS:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.H("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.P(z)}},
sa0:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.p])
z.b=!0
this.P(z)}},
sdR:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.P(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.p])
z.b=!0
this.P(z)}},
sdf:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.p])
z.b=!0
this.P(z)}},
ay:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
p:{
dU:function(){var z=new U.hv()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dV:{"^":"ae;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
an:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dV))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
bY:function(a){var z=new U.dV()
z.a=a
return z}}},e8:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
P:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.E(a)},function(){return this.P(null)},"aC","$1","$0","gbd",0,2,1],
iB:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.P(z)},"$2","geX",8,0,20],
iV:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.K(t.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfj",8,0,20],
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ay(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.an(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.aa(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e8))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ae]},
$asaH:function(){return[U.ae]},
$isae:1},ae:{"^":"dS;"},ey:{"^":"ae;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.E(a)},
seb:function(a){var z,y
a=V.cF(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.p])
z.b=!0
this.P(z)}},
sdY:function(a,b){var z,y
b=V.cF(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.p])
z.b=!0
this.P(z)}},
se2:function(a){var z,y
a=V.cF(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.p])
z.b=!0
this.P(z)}},
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.seb(this.a+this.d*b.y)
this.sdY(0,this.b+this.e*b.y)
this.se2(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aB(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.en(this.b)).k(0,V.d_(this.a))
z=this.y
if(!(z==null))z.aa(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ey))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"},
p:{
ez:function(a,b,c,d,e,f){var z,y,x
z=new U.ey()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.seb(f)
z.sdY(0,d)
z.se2(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.H("deltaYaw",x,c,z,[P.p])
y.b=!0
z.P(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.H("deltaPitch",x,a,z,[P.p])
y.b=!0
z.P(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.H("deltaRoll",x,b,z,[P.p])
y.b=!0
z.P(y)}return z}}},k2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
P:[function(a){var z
H.f(a,"$isu")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.P(null)},"aC","$1","$0","gbd",0,2,1],
hi:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.geU(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geV(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.R()
x.c=z}x=H.h(this.geW(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.R()
x.f=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.R()
x.b=z}x=H.h(this.gfN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.gfM(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.R()
x.c=z}y=H.h(this.gfL(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
iy:[function(a){a=H.k(H.f(a,"$isu"),"$isc5")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geU",4,0,2],
iz:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc5")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))}this.aC()},"$1","geV",4,0,2],
iA:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sX(-y*10*z)
this.aC()}},"$1","geW",4,0,2],
iw:[function(a){if(H.k(H.f(a,"$isu"),"$isek").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geR",4,0,2],
ix:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc5")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.aC()},"$1","geS",4,0,2],
j2:[function(a){H.f(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfN",4,0,2],
j1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).v(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).v(0,z.gam()))}this.aC()},"$1","gfM",4,0,2],
j0:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sX(-y*10*z)
this.aC()}},"$1","gfL",4,0,2],
an:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.ay(0,x)
this.b.ay(0,x)
this.fr=V.d_(this.b.d).k(0,V.en(this.c.d))}return this.fr},
$isae:1,
p:{
fd:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.k2()
y=U.dU()
y.sea(0,!0)
y.sdQ(6.283185307179586)
y.sdS(0)
y.sa0(0,0)
y.sdR(100)
y.sX(0)
y.sdf(0.5)
z.b=y
y=y.gw()
y.toString
x=H.h(z.gbd(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.dU()
y.sea(0,!0)
y.sdQ(6.283185307179586)
y.sdS(0)
y.sa0(0,0)
y.sdR(100)
y.sX(0)
y.sdf(0.5)
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
y=new D.H("modifiers",v,w,z,[X.aW])
y.b=!0
z.P(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.H("invertX",y,!1,z,[P.ah])
y.b=!0
z.P(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.H("invertY",y,!1,z,[P.ah])
y.b=!0
z.P(y)}z.hi(c)
return z}}}}],["","",,M,{"^":"",hM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aD(null)},"it","$1","$0","gah",0,2,1],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf2",8,0,11],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.K(s.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf3",8,0,11],
se4:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.u]})
C.a.K(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.d9])
z.b=!0
this.aD(z)}},
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.eE(a,this)
z.b=!0
y=this.e
if(!(y==null))y.E(z)
a.e0(this.c)
y=this.b
y.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
x=a.a
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
if(typeof w!=="number")return H.q(w)
t=C.d.ab(u.a*w)
if(typeof v!=="number")return H.q(v)
s=C.d.ab(u.b*v)
r=C.d.ab(u.c*w)
a.c=r
u=C.d.ab(u.d*v)
a.d=u
x.viewport(t,s,r,u)
a.a.clearDepth(y.c)
x=a.a
y=y.a
x.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)
y=this.a
x=a.c
u=a.d
r=a.cy
q=y.b
p=y.c
o=y.d
n=o-p
m=1/Math.tan(q*0.5)
r.e_(V.aB(-m/(x/u),0,0,0,0,m,0,0,0,0,o/n,-o*p/n,0,0,1,0))
x=$.et
if(x==null){x=V.em(new V.W(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.et=x
l=x}else l=x
x=y.a
if(x!=null){k=x.an(0,a,y)
if(k!=null)l=k.k(0,l)}a.db.e_(l)
y=this.c
if(y!=null)y.ay(0,a)
for(y=this.d.a,y=new J.ay(y,y.length,0,[H.y(y,0)]);y.G();)y.d.ay(0,a)
for(y=this.d.a,y=new J.ay(y,y.length,0,[H.y(y,0)]);y.G();)y.d.aP(a)
this.a.toString
a.cy.cq()
a.db.cq()
this.b.toString
a.dZ()},
$iso0:1}}],["","",,A,{"^":"",dI:{"^":"b;a,b,c"},hj:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ht:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ir:{"^":"eA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aL,0av,0aM,0bn,0dh,0di,0bo,0bp,0dj,0dk,0bq,0br,0dl,0dm,0bs,0dn,0dq,0bt,0dr,0ds,0bu,0bv,0bw,0dt,0du,0bx,0by,0dv,0dw,0bz,0dz,0cc,0dA,0cd,0dB,0ce,0dC,0cf,0dD,0cg,0dE,0ci,a,b,0c,0d,0e,0f,0r",
eo:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.fQ(z)
a2.fX(z)
a2.fR(z)
a2.h4(z)
a2.h5(z)
a2.fZ(z)
a2.h9(z)
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
v.fU(z)
v.fP(z)
v.fS(z)
v.fV(z)
v.h2(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h0(z)
v.h1(z)}v.fY(z)
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fT(z)
v.h_(z)
v.h3(z)
v.h6(z)
v.h7(z)
v.h8(z)
v.fW(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.i])
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
this.c=this.cU(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cU(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fS(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.fG()
this.fI()
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
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isde")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.e([],[A.aL])
y=a2.aL
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.aL=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aM=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.av=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.aM=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bn=H.k(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dh=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bo=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.di=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bo=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.br=H.k(this.r.n(0,"shininess"),"$isX")
this.bp=H.k(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dj=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bq=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dk=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bq=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dl=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dm=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bs=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dn=H.k(this.r.n(0,"envSampler"),"$isap")
this.dq=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bt=H.k(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dr=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bu=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.ds=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.bu=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bv=H.k(this.r.n(0,"refraction"),"$isX")
this.bw=H.k(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dt=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bx=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.du=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bx=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.by=H.k(this.r.n(0,"alpha"),"$isX")
switch(y){case C.c:break
case C.i:break
case C.e:this.dv=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bz=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dw=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bz=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cc=H.e([],[A.f2])
this.cd=H.e([],[A.f3])
this.ce=H.e([],[A.f4])
this.cf=H.e([],[A.f5])
this.cg=H.e([],[A.f6])
this.ci=H.e([],[A.f7])
if(a2.k2){y=a2.z
if(y>0){this.dz=H.f(this.r.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.cc;(x&&C.a).h(x,new A.f2(l,k,j))}}y=a2.Q
if(y>0){this.dA=H.f(this.r.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
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
x=this.cd;(x&&C.a).h(x,new A.f3(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dB=H.f(this.r.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
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
x=this.ce;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dC=H.f(this.r.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isao")
x=this.cf;(x&&C.a).h(x,new A.f5(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dD=H.f(this.r.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isde")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
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
H.k(c,"$isap")
x=this.cg;(x&&C.a).h(x,new A.f6(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dE=H.f(this.r.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isM")
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
H.k(a1,"$isao")
x=this.ci;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ae:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eh(c)
b.a.uniform1i(b.d,0)}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
iq:function(a,b){var z,y
z=a.av
y=new A.ir(b,z)
y.er(b,z)
y.eo(a,b)
return y}}},iu:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aL,av,aM",
fQ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aL+"];\n"
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
fX:function(a){var z
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
fR:function(a){var z
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
h4:function(a){var z,y
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
h5:function(a){var z,y
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
fZ:function(a){var z
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
h9:function(a){var z
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
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fU:function(a){var z,y
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
fP:function(a){var z,y
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
fS:function(a){var z,y
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
fV:function(a){var z,y
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
h2:function(a){var z,y
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
fY:function(a){var z,y
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
h0:function(a){var z,y
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
h1:function(a){var z,y
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
fT:function(a){var z,y
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
h_:function(a){var z,y
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
h3:function(a){var z,y
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
h6:function(a){var z,y,x
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
h7:function(a){var z,y,x
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
h8:function(a){var z,y,x
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
fW:function(a){var z
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
i:function(a){return this.av}},f2:{"^":"b;a,b,c"},f5:{"^":"b;a,b,c,d,e,f,r,x"},f3:{"^":"b;a,b,c,d,e,f,r"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eA:{"^":"cJ;",
er:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cU:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fG:function(){var z,y,x,w,v,u
z=H.e([],[A.dI])
y=this.a
x=H.B(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dI(y,v.name,u))}this.f=new A.hj(z)},
fI:function(){var z,y,x,w,v,u
z=H.e([],[A.ac])
y=this.a
x=H.B(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hq(v.type,v.size,v.name,u))}this.r=new A.jO(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dd(z,y,b,a,c)},
bj:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hq:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jJ(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jM(this.a,this.e,c,d)
case 35667:return new A.jK(this.a,this.e,c,d)
case 35668:return new A.jL(this.a,this.e,c,d)
case 35669:return new A.jN(this.a,this.e,c,d)
case 35674:return new A.jQ(this.a,this.e,c,d)
case 35675:return new A.de(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eJ(b,c,d)
case 35680:return this.eK(b,c,d)
case 35670:throw H.a(this.bj("BOOL",c))
case 35671:throw H.a(this.bj("BOOL_VEC2",c))
case 35672:throw H.a(this.bj("BOOL_VEC3",c))
case 35673:throw H.a(this.bj("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cg:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jO:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hA:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hA("\n")}},P:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jK:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jL:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jN:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jI:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dd:function(a,b,c,d,e){var z=new A.jI(a,b,c,e)
z.f=d
z.e=P.ie(d,0,!1,P.m)
return z}}},X:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jJ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jM:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jQ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},de:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
eh:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dt:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ag,P.p,P.p]})
z=F.d6()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
cx:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ag,P.p,P.p]})
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
j=F.dC(d,e,new F.m9(z,F.cx(z.c),F.cx(z.d),k,l,c),b)
if(j!=null)a.b0(j)},
fV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
z=F.d6()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ag])
v=z.a
u=new V.E(0,0,y)
u=u.v(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hd(new V.bG(a,-1,-1,-1),new V.b1(1,1,1,1),new V.W(0,0,c),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.E(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c9(new V.bG(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.W(r*p,q*p,c),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hb(w)
return z},
fT:function(a,b,c,d,e,f){return F.mw(!0,c,d,new F.mv(a,f),e)},
mw:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.dC(c,e,new F.my(d),null)
if(z==null)return
z.aj()
z.bZ()
if(b)z.b0(F.fV(3,!1,1,new F.mz(d),e))
z.b0(F.fV(1,!0,-1,new F.mA(d),e))
return z},
n6:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n7()
y=F.dt(a,null,new F.n8(z),c)
y.bZ()
return y},
h9:function(a,b,c,d){return F.fU(c,a,d,b,new F.na())},
mP:function(a,b,c,d,e,f){return F.fU(d,a,e,b,new F.mQ(f,c))},
fU:function(a,b,c,d,e){var z=F.dC(a,b,new F.mx(H.h(e,{func:1,ret:V.W,args:[P.p]}),d,b,c),null)
if(z==null)return
z.aj()
z.bZ()
return z},
dC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ag,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.d6()
y=H.e([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c9(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ca(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c9(null,null,new V.b1(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ca(d))}}z.d.hc(a+1,b+1,y)
return z},
m9:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cn(z.b,b).cn(z.d.cn(z.c,b),c)
a.sa0(0,new V.W(y.a,y.b,y.c))
a.se5(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdc(new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mv:{"^":"n:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
my:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa0(0,new V.W(y,u,w))
u=new V.E(y,u,w)
a.se5(u.v(0,Math.sqrt(u.D(u))))
a.sdc(new V.bG(1-c,2+c,-1,-1))}},
mz:{"^":"n:19;a",
$1:function(a){return this.a.$2(a,1)}},
mA:{"^":"n:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
n7:{"^":"n:26;",
$2:function(a,b){return 0}},
n8:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.D(x))).k(0,1+z)
a.sa0(0,new V.W(z.a,z.b,z.c))}},
na:{"^":"n:17;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
mQ:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.W(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mx:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dD(y.$1(z),x)
x=J.dD(y.$1(z+3.141592653589793/this.c),x).O(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.at(!v.q(0,u)?new V.E(0,0,1):u)
t=y.v(0,Math.sqrt(y.D(y)))
y=t.at(v)
u=y.v(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa0(0,w.B(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c)))}},
al:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaX()){C.a.K(this.a.a.d.b,this)
this.a.a.W()}this.bU()
this.bV()
this.fq()},
fD:function(a){this.a=a
C.a.h(a.d.b,this)},
fE:function(a){this.b=a
C.a.h(a.d.c,this)},
fF:function(a){this.c=a
C.a.h(a.d.d,this)},
bU:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
fq:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
eD:function(){var z,y,x,w,v
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
if(v.dP())return
return v.v(0,Math.sqrt(v.D(v)))},
eG:function(){var z,y,x,w,v
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
c7:function(){if(this.d!=null)return!0
var z=this.eD()
if(z==null){z=this.eG()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
eC:function(){var z,y,x,w,v
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
if(v.dP())return
return v.v(0,Math.sqrt(v.D(v)))},
eF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
c5:function(){if(this.e!=null)return!0
var z=this.eC()
if(z==null){z=this.eF()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
aY:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.W()},
ghm:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y
if(this.gaX())return a+"disposed"
z=a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)+", "+C.b.a9(J.a9(this.c.e),0)+" {"
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
z.fD(a)
z.fE(b)
z.fF(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
hP:{"^":"b;"},
jk:{"^":"hP;",
b_:function(a,b,c){var z,y
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
au:function(){if(!this.gaX()){C.a.K(this.a.a.c.b,this)
this.a.a.W()}this.bU()
this.bV()},
bU:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){if(this.gaX())return a+"disposed"
return a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)},
J:function(){return this.A("")}},
i5:{"^":"b;"},
jH:{"^":"i5;",
b_:function(a,b,c){var z,y
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
d3:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.K(z.a.b.b,this)
this.a.a.W()}this.fp()},
fp:function(){var z=this.a
if(z!=null){C.a.K(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a9(J.a9(z.e),0)},
J:function(){return this.A("")}},
eB:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.u()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.ho())}this.a.u()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d3()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
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
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.u()
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
F.by(p,o,l)}z=this.e
if(!(z==null))z.aa(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.aa(0)
return y},
eO:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ag],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b_(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hO:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eO(a,v,y,u,t))b.b0(u)}this.a.u()
this.c.ct()
this.d.ct()
this.b.i5()
this.c.cu(new F.jH())
this.d.cu(new F.jk())
z=this.e
if(!(z==null))z.aa(0)},
hg:function(a){this.hO(new F.kg(),new F.iF())},
bZ:function(){return this.hg(null)},
aY:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aY()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdT(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).v(0,Math.sqrt(w*w+v*v+z*z))
if(!J.O(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.E(null)}}}}z=this.e
if(!(z==null))z.aa(0)},
hk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcG(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dN])
for(r=0,q=0;q<w;++q){p=b.hh(q)
o=p.gcG(p)
C.a.m(s,q,new Z.dN(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hJ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dO(new Z.fi(34962,j),s,b)
i.b=H.e([],[Z.ck])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.E(a)},
W:function(){return this.af(null)},
p:{
d6:function(){var z,y
z=new F.eB()
y=new F.kb(z)
y.b=!1
y.c=H.e([],[F.ag])
z.a=y
y=new F.jf(z)
y.b=H.e([],[F.d3])
z.b=y
y=new F.je(z)
y.b=H.e([],[F.cW])
z.c=y
y=new F.jd(z)
y.b=H.e([],[F.al])
z.d=y
z.e=null
return z}}},
jd:{"^":"b;a,0b",
hb:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ag],"$asc")
z=H.e([],[F.al])
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
C.a.h(z,F.by(x,v,u))}}return z},
hc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ag],"$asc")
z=H.e([],[F.al])
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
cu:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b_(0,v,t)){v.au()
break}}}}},
ct:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghm(x)
if(y)x.au()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].c7())x=!1
return x},
c6:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].c5())x=!1
return x},
aY:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].aY()},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
je:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cu:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b_(0,v,t)){v.au()
break}}}}},
ct:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
J:function(){return this.A("")}},
jf:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i5:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ca:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c9(this.cx,x,u,z,y,w,v,a,t)},
ho:function(){return this.ca(null)},
sa0:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.W()}},
sdT:function(a){var z
a=a.v(0,Math.sqrt(a.D(a)))
if(!J.O(this.r,a)){this.r=a
z=this.a
if(z!=null)z.W()}},
se5:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
sdc:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.W()}},
hJ:function(a){var z,y
z=J.K(a)
if(z.q(a,$.$get$aP())){z=this.f
y=[P.p]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aO())){z=this.r
y=[P.p]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aN())){z=this.x
y=[P.p]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aQ())){z=this.y
y=[P.p]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.q(a,$.$get$aR())){z=this.z
y=[P.p]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bJ())){z=this.Q
y=[P.p]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bK())){z=this.Q
y=[P.p]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$bm()))return H.e([this.ch],[P.p])
else if(z.q(a,$.$get$aM())){z=this.cx
y=[P.p]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.p])},
c7:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kl(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
c5:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kk(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y,x
z=H.e([],[P.i])
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
J:function(){return this.A("")},
p:{
c9:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kj(z)
y.b=H.e([],[F.d3])
z.b=y
y=new F.kf(z)
x=[F.cW]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kc(z)
x=[F.al]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$ff()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fg().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kl:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kk:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kb:{"^":"b;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
he:function(a,b,c,d,e,f,g,h,i){var z=F.c9(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hd:function(a,b,c,d,e,f){return this.he(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].c7()
return!0},
c6:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].c5()
return!0},
hl:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
this.u()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
kc:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
I:function(a,b){H.h(b,{func:1,ret:-1,args:[F.al]})
C.a.I(this.b,b)
C.a.I(this.c,new F.kd(this,b))
C.a.I(this.d,new F.ke(this,b))},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
kd:{"^":"n:8;a,b",
$1:function(a){H.f(a,"$isal")
if(!J.O(a.a,this.a))this.b.$1(a)}},
ke:{"^":"n:8;a,b",
$1:function(a){var z
H.f(a,"$isal")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
kf:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
kh:{"^":"b;"},
kg:{"^":"kh;",
b_:function(a,b,c){return J.O(b.f,c.f)}},
ki:{"^":"b;"},
iF:{"^":"ki;",
b0:function(a){var z,y,x,w
H.w(a,"$isc",[F.ag],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].sdT(z)
return}},
kj:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}}}],["","",,O,{"^":"",ip:{"^":"d9;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.R()
this.dy=z}return z},
Y:[function(a){var z
H.f(a,"$isu")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.Y(null)},"f1","$1","$0","gbh",0,2,1],
fv:[function(a){H.f(a,"$isu")
this.a=null
this.Y(a)},function(){return this.fv(null)},"j_","$1","$0","gfu",0,2,1],
iD:[function(a,b){var z=V.am
z=new D.cl(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.Y(z)},"$2","geZ",8,0,16],
iE:[function(a,b){var z=V.am
z=new D.cm(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.Y(z)},"$2","gf_",8,0,16],
cR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.dx
y=C.d.a2(z.e.length+3,4)*4
x=C.d.a2(z.f.length+3,4)*4
w=C.d.a2(z.r.length+3,4)*4
v=C.d.a2(z.x.length+3,4)*4
u=C.d.a2(z.y.length+3,4)*4
t=C.d.a2(z.z.length+3,4)*4
s=C.d.a2(this.e.a.length+3,4)*4
z=this.b!=null
r=this.c!=null
q=this.d!=null
p=this.f.c
o=this.r.c
n=this.x.c
m=this.y.c
l=this.z.c
k=this.Q.c
j=this.cx.c
i=this.cy.c
h=this.db.c
g="MaterialLight_"+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+C.d.i(h.a)+"_"
g+=z?"1":"0"
g+=r?"1":"0"
g=g+(q?"1":"0")+"_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
f=j!==C.c||i!==C.c
e=o!==C.c||n!==C.c||m!==C.c||l!==C.c
d=l===C.c
c=!d||f
b=n!==C.c||m!==C.c||!d||k!==C.c||f
d=k===C.c
a=!d
a0=p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e
a1=p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f
a2=x+u+v+w+t>0
a3=s>0
a4=b||!d||c
a5=z&&a0
a6=r&&a1
a7=$.$get$aP()
if(b){z=$.$get$aO()
a7=new Z.bl(a7.a|z.a)}if(a){z=$.$get$aN()
a7=new Z.bl(a7.a|z.a)}if(a0){z=$.$get$aQ()
a7=new Z.bl(a7.a|z.a)}if(a1){z=$.$get$aR()
a7=new Z.bl(a7.a|z.a)}if(a3){z=$.$get$aM()
a7=new Z.bl(a7.a|z.a)}return new A.iu(p,o,n,m,l,k,j,i,h,y,x,w,v,u,t,y+x+w+v+u+t,f,f,a2,a4,!0,!1,!1,e,a2,c,b,a,a0,a1,a3,a5,a6,q,s,g.charCodeAt(0)==0?g:g,a7)},
T:function(a,b){H.w(a,"$isc",[T.da],"$asc")
if(b!=null)if(!C.a.aV(a,b)){b.a=a.length
C.a.h(a,b)}},
ay:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cz(x)}}},
i7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cR()
y=a.fr.j(0,z.av)
if(y==null){y=A.iq(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bm(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aM
z=b.e
if(!(z instanceof Z.dO)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.aj()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c6()
t.a.c6()
t=t.e
if(!(t==null))t.aa(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hl()
s=s.e
if(!(s==null))s.aa(0)}q=b.d.hk(new Z.km(a.a),v)
q.aN($.$get$aP()).e=this.a.y.c
if(z)q.aN($.$get$aO()).e=this.a.Q.c
if(u)q.aN($.$get$aN()).e=this.a.z.c
if(w.rx)q.aN($.$get$aQ()).e=this.a.ch.c
if(t)q.aN($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aN($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.da
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hv()
if(w.fx){u=this.a
t=a.dx
t=t.gV(t)
u=u.db
u.toString
u.ag(t.ac(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gV(t)
s=a.dx
s=t.k(0,s.gV(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ag(t.ac(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi3()
s=a.dx
s=t.k(0,s.gV(s))
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
u.ag(t.ac(0,!0))}if(w.aL>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isam")
t=t.k3
if(n>=t.length)return H.d(t,n)
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
case C.e:this.T(p,this.f.d)
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
case C.f:this.T(p,this.f.e)
u=this.a
t=this.f.e
u.a6(u.r2,u.rx,t)
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
case C.e:this.T(p,this.r.d)
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
case C.f:this.T(p,this.r.e)
u=this.a
t=this.r.e
u.a6(u.x2,u.y1,t)
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
case C.e:this.T(p,this.x.d)
u=this.a
t=this.x.d
u.ae(u.aL,u.aM,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.T(p,this.x.e)
u=this.a
t=this.x.e
u.a6(u.av,u.aM,t)
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
u=u.bn
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.T(p,this.y.d)
u=this.a
t=this.y.d
u.ae(u.dh,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.T(p,this.y.e)
u=this.a
t=this.y.e
u.a6(u.di,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bp
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.br
t.a.uniform1f(t.d,r)
break
case C.e:this.T(p,this.z.d)
u=this.a
t=this.z.d
u.ae(u.dj,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break
case C.f:this.T(p,this.z.e)
u=this.a
t=this.z.e
u.a6(u.dk,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cz(i.a)
r=s.a
g=s.b
f=s.c
f=s.v(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb3(i)
r=h.b
g=s.gcB(s)
f=s.gcC(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b9(i.gb3(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga3(i)
f=h.d
g=s.gbB()
r=s.gba()
s=s.gbk()
f.a.uniform3f(f.d,g,r,s)
s=i.gc_()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc0()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc1()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb3(i)
r=h.b
g=s.gcB(s)
f=s.gcC(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcb(i).j7()
f=h.c
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=l.b9(i.gb3(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga3(i)
r=h.e
g=s.gbB()
f=s.gba()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.gj4()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj3()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc0()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc1()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cf
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb5()
H.w(p,"$isc",s,"$asc")
if(!C.a.aV(p,r)){r.sbf(p.length)
C.a.h(p,r)}r=i.gcb(i)
g=h.d
f=r.gaI(r)
e=r.gaJ(r)
r=r.gaK()
g.a.uniform3f(g.d,f,e,r)
r=i.giq()
e=h.b
f=r.gaI(r)
g=r.gaJ(r)
r=r.gaK()
e.a.uniform3f(e.d,f,g,r)
r=i.gb4(i)
g=h.c
f=r.gaI(r)
e=r.gaJ(r)
r=r.gaK()
g.a.uniform3f(g.d,f,e,r)
r=l.cz(i.gcb(i))
e=r.a
f=r.b
g=r.c
g=r.v(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga3(i)
f=h.f
e=g.gbB()
r=g.gba()
g=g.gbk()
f.a.uniform3f(f.d,e,r,g)
g=i.gb5()
r=g.gco(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.geQ()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbf())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cg
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb5()
H.w(p,"$isc",r,"$asc")
if(!C.a.aV(p,g)){g.sbf(p.length)
C.a.h(p,g)}d=l.k(0,i.gV(i))
g=i.gV(i).b9(new V.W(0,0,0))
f=h.b
e=g.gcB(g)
c=g.gcC(g)
g=g.gcD(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b9(new V.W(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dO(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.bD(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ac(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga3(i)
g=h.e
e=c.gbB()
f=c.gba()
c=c.gbk()
g.a.uniform3f(g.d,e,f,c)
c=i.gb5()
g=c.gco(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gco(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj5(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc_()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc0()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc1()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb5()
H.w(p,"$isc",z,"$asc")
if(!C.a.aV(p,s)){s.sbf(p.length)
C.a.h(p,s)}s=i.gb3(i)
r=h.b
g=s.gcB(s)
f=s.gcC(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcb(i)
f=h.c
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=i.giq()
r=h.d
g=s.gaI(s)
f=s.gaJ(s)
s=s.gaK()
r.a.uniform3f(r.d,g,f,s)
s=i.gb4(i)
f=h.e
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=l.b9(i.gb3(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb5()
r=s.gco(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.geQ()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbf())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga3(i)
r=h.y
g=s.gbB()
f=s.gba()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.gjd()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gje()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc0()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc1()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.T(p,this.Q.d)
z=this.a
u=this.Q.d
z.ae(z.dl,z.bs,u)
break
case C.f:this.T(p,this.Q.e)
z=this.a
u=this.Q.e
z.a6(z.dm,z.bs,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gV(u).dO(0)
a.Q=u}z=z.fy
z.toString
z.ag(u.ac(0,!0))}if(w.dy){this.T(p,this.ch)
z=this.a
u=this.ch
z.a6(z.dn,z.dq,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bt
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.T(p,this.cx.d)
z=this.a
u=this.cx.d
z.ae(z.dr,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.T(p,this.cx.e)
z=this.a
u=this.cx.e
z.a6(z.ds,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bv
u.a.uniform1f(u.d,s)
break
case C.e:this.T(p,this.cy.d)
z=this.a
u=this.cy.d
z.ae(z.dt,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break
case C.f:this.T(p,this.cy.e)
z=this.a
u=this.cy.e
z.a6(z.du,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.by
z.a.uniform1f(z.d,t)
break
case C.e:this.T(p,this.db.d)
z=this.a
t=this.db.d
z.ae(z.dv,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break
case C.f:this.T(p,this.db.e)
z=this.a
t=this.db.e
z.a6(z.dw,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.c2(a)
z.aP(a)
z.ip(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.ht()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cR().av}},is:{"^":"cY;0f,a,b,0c,0d,0e"},cY:{"^":"b;",
Y:[function(a){this.a.Y(H.f(a,"$isu"))},function(){return this.Y(null)},"f1","$1","$0","gbh",0,2,1],
aS:["em",function(){}],
fB:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.h(this.gbh(),{func:1,ret:-1,args:[D.u]})
C.a.K(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.h(this.gbh(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H(this.b+".texture2D",x,this.d,this,[T.eK])
z.b=!0
this.a.Y(z)}},
fC:function(a){}},it:{"^":"cY;a,b,0c,0d,0e"},b8:{"^":"cY;0f,a,b,0c,0d,0e",
d2:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.Y(y)}},
aS:["bG",function(){this.em()
this.d2(new V.Y(1,1,1))}],
sa3:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aS()
z=this.a
z.a=null
z.Y(null)}this.d2(b)}},iv:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fA:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.Y(z)}},
aS:function(){this.bG()
this.fA(1)}},iw:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bW:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.Y(z)}},
aS:function(){this.bG()
this.bW(100)}},d9:{"^":"b;"}}],["","",,T,{"^":"",da:{"^":"cJ;"},eK:{"^":"da;0b,0c,0d,0e,0f,0r,0x,0y,a"},jt:{"^":"b;a,0b,0c,0d,0e",
hM:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.eK(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.R()
z=W.aa
W.a_(x,"load",H.h(new T.ju(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hL:function(a,b){return this.hM(a,!1,!1,!1,b)},
fw:function(a,b,c){var z,y,x,w
b=V.dA(b,2)
z=V.dA(a.width,2)
y=V.dA(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cO(null,null)
x.width=z
x.height=y
w=H.f(C.l.ed(x,"2d"),"$isdR")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mu(w.getImageData(0,0,x.width,x.height))}}},ju:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fw(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ih(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hu()}++x.e}}}],["","",,V,{"^":"",hi:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"b;"},el:{"^":"b;",
aZ:["el",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["cH",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bE:{"^":"el;0a",
aZ:function(a,b){return!this.el(0,b)},
i:function(a){return"!["+this.cH(0)+"]"}},jb:{"^":"b;0a",
eq:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.m,P.ah])
for(y=new H.ej(a,a.gl(a),0,[H.ax(a,"x",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.bm(0,b)},
i:function(a){var z=this.a
return P.c6(z.gal(z),0,null)},
$isc3:1,
p:{
a8:function(a){var z=new V.jb()
z.eq(a)
return z}}},eD:{"^":"b;a,b,0c,0d",
ghP:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eR(this.a.L(0,b))
w.a=H.e([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hx:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},eO:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h7(this.b,"\n","\\n")
y=H.h7(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eP:{"^":"b;a,b,0c",
i:function(a){return this.b}},jC:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eD(this,b)
z.c=H.e([],[V.eR])
this.a.m(0,b,z)}return z},
b7:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eP(this,a)
y=P.i
z.c=new H.aV(0,0,[y,y])
this.b.m(0,a,z)}return z},
io:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eO])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hx(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghP(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eO(o==null?p.b:o,q,t)}++t}}}},eR:{"^":"el;b,0c,0a",
i:function(a){return this.b.b+": "+this.cH(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$isaJ:1},hU:{"^":"eI;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iI:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aR:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aR(null)},"iu","$1","$0","gcK",0,2,1],
sa8:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcK(),{func:1,ret:-1,args:[D.u]})
C.a.K(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcK(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.ae])
z.b=!0
this.aR(z)}},
$isaJ:1,
$isdQ:1},eI:{"^":"b;"}}],["","",,V,{"^":"",
n4:function(a){P.jB(C.F,new V.n5(a))},
n5:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbi")
P.dB(C.h.e7(this.a.ghB(),2)+" fps")}},
iW:{"^":"b;a,b,0c",
d9:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fa().gcs().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d7(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dG(this.c).h(0,v)
t=W.hW("radio")
t.checked=x
t.name=z
z=W.aa
W.a_(t,"change",H.h(new V.iX(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dG(this.c).h(0,w.createElement("br"))},
aU:function(a,b,c){return this.d9(a,b,c,!1)},
d7:function(a){var z,y,x,w,v
z=P.fa()
y=P.i
x=P.ib(z.gcs(),y,y)
x.m(0,this.a,a)
w=z.e1(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lq([],[]).cA(""),"",v)}},
iX:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d7(this.d)}}},
jg:{"^":"b;0a,0b",
es:function(a,b){var z,y,x,w,v,u,t
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
t=W.aa
W.a_(z,"scroll",H.h(new V.jj(x),{func:1,ret:-1,args:[t]}),!1,t)},
hf:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.io(C.a.hH(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.h6(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cw(C.S,s,C.k,!1)
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
ha:function(a){var z,y,x,w,v,u,t
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
x=H.f(w.insertCell(-1),"$isd8").style
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
t=H.f(w.insertCell(-1),"$isd8")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fH:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jC()
y=P.i
z.a=new H.aV(0,0,[y,V.eD])
z.b=new H.aV(0,0,[y,V.eP])
z.c=z.L(0,"Start")
y=z.L(0,"Start").C(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").C(0,"Bold")
x=new V.bE()
w=[V.c3]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").C(0,"Italic")
x=new V.bE()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").C(0,"Code")
x=new V.bE()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").C(0,"LinkHead")
y=new V.bE()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").C(0,"LinkTail")
y=new V.bE()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").C(0,"Other").a,new V.hi())
x=z.L(0,"Other").C(0,"Other")
y=new V.bE()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.b7("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.b7("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.b7("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.b7("Link")
x=z.L(0,"Other")
x.d=x.a.b7("Other")
this.b=z},
p:{
jh:function(a,b){var z=new V.jg()
z.es(a,!0)
return z}}},
jj:{"^":"n:14;a",
$1:function(a){P.eM(C.q,new V.ji(this.a))}},
ji:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.jh("Test 026",!0)
y=W.cO(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.hf(H.e(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],x))
z.ha(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jz(w,!0,!0,!0,!1)
u=D.e3(null,null)
u.sa8(U.bY(V.eo(0.3,0.4,1,null)))
t=D.e3(null,null)
t.sa8(U.bY(V.eo(-0.3,-0.4,-1,null)))
t.sa3(0,new V.Y(0.125,0.125,0.125))
s=new O.ip()
z=O.cP(V.am)
s.e=z
z.bc(s.geZ(),s.gf_())
z=new O.b8(s,"emission")
z.c=C.c
z.f=new V.Y(0,0,0)
s.f=z
z=new O.b8(s,"ambient")
z.c=C.c
z.f=new V.Y(0,0,0)
s.r=z
z=new O.b8(s,"diffuse")
z.c=C.c
z.f=new V.Y(0,0,0)
s.x=z
z=new O.b8(s,"invDiffuse")
z.c=C.c
z.f=new V.Y(0,0,0)
s.y=z
z=new O.iw(s,"specular")
z.c=C.c
z.f=new V.Y(0,0,0)
z.ch=100
s.z=z
z=new O.it(s,"bump")
z.c=C.c
s.Q=z
s.ch=null
z=new O.b8(s,"reflect")
z.c=C.c
z.f=new V.Y(0,0,0)
s.cx=z
z=new O.iv(s,"refract")
z.c=C.c
z.f=new V.Y(0,0,0)
z.ch=1
s.cy=z
z=new O.is(s,"alpha")
z.c=C.c
z.f=1
s.db=z
z=new D.i4()
z.bH(D.a2)
z.e=H.e([],[D.ch])
z.f=H.e([],[D.iK])
z.r=H.e([],[D.jl])
z.x=H.e([],[D.jv])
z.y=H.e([],[D.jw])
z.z=H.e([],[D.jx])
z.Q=null
z.ch=null
z.cF(z.geY(),z.gfi(),z.gfk())
s.dx=z
r=z.Q
if(r==null){r=D.R()
z.Q=r
z=r}else z=r
r={func:1,ret:-1,args:[D.u]}
q=H.h(s.gfu(),r)
C.a.h(z.a,q)
q=s.dx
z=q.ch
if(z==null){z=D.R()
q.ch=z}q=H.h(s.gbh(),r)
C.a.h(z.a,q)
s.dy=null
s.dx.h(0,u)
s.dx.h(0,t)
s.f.sa3(0,new V.Y(0,0,0))
q=s.r
q.sa3(0,new V.Y(0.1,0.1,0.1))
z=s.x
z.sa3(0,new V.Y(0.8,0.8,0.8))
z=s.z
z.sa3(0,new V.Y(0.2,0.2,0.2))
z=s.z
if(z.c===C.c){z.c=C.i
z.bG()
z.bW(100)
q=z.a
q.a=null
q.Y(null)}z.bW(100)
z=s.x
q=v.f.hL("../resources/Test.png",!0)
p=z.c
if(p!==C.e){if(p===C.c)z.aS()
z.c=C.e
z.fC(null)
p=z.a
p.a=null
p.Y(null)}z.fB(q)
o=E.e5(null,!0,null,"",null,null)
o.sa8(U.fd(!1,!0,v.r,!1,!1,!1,null,!1))
o.sad(0,F.h9(30,1,15,0.5))
n=E.e5(null,!0,null,"",null,null)
n.sa8(U.bY(V.aB(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
z=F.dt(1,null,null,1)
z.aY()
n.sad(0,z)
m=new U.e8()
m.bH(U.ae)
m.bc(m.geX(),m.gfj())
m.e=null
m.f=V.c4()
m.r=0
m.h(0,U.fd(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.bY(V.d_(3.141592653589793)))
m.h(0,U.bY(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=U.ez(0.5,0.7,0.3,0,0,0)
k=U.ez(0,0.1,0,0,0,0)
z=new M.hM()
q=O.cP(E.aI)
z.d=q
q.bc(z.gf2(),z.gf3())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iI()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.sa8(null)
q=j.b
if(!$.o.$2(q,1.0471975511965976)){i=j.b
j.b=1.0471975511965976
q=new D.H("fov",i,1.0471975511965976,j,[P.p])
q.b=!0
j.aR(q)}q=j.c
if(!$.o.$2(q,0.1)){i=j.c
j.c=0.1
q=new D.H("near",i,0.1,j,[P.p])
q.b=!0
j.aR(q)}q=j.d
if(!$.o.$2(q,2000)){i=j.d
j.d=2000
q=new D.H("far",i,2000,j,[P.p])
q.b=!0
j.aR(q)}q=z.a
if(q!==j){if(q!=null){q=q.gw()
q.toString
p=H.h(z.gah(),r)
C.a.K(q.a,p)}i=z.a
z.a=j
q=j.gw()
q.toString
p=H.h(z.gah(),r)
C.a.h(q.a,p)
q=new D.H("camera",i,z.a,z,[X.dQ])
q.b=!0
z.aD(q)}h=new X.hU()
q=new V.b1(0,0,0,1)
h.a=q
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
q=V.ex(0,0,1,1)
h.r=q
q=z.b
if(q!==h){if(q!=null){q=q.gw()
q.toString
p=H.h(z.gah(),r)
C.a.K(q.a,p)}i=z.b
z.b=h
q=h.gw()
q.toString
p=H.h(z.gah(),r)
C.a.h(q.a,p)
q=new D.H("target",i,z.b,z,[X.eI])
q.b=!0
z.aD(q)}z.se4(null)
z.se4(s)
z.d.h(0,o)
z.d.h(0,n)
z.a.sa8(m)
q=z.e
if(q==null){q=D.R()
z.e=q}p=H.h(new K.mS(s,l,k),r)
C.a.h(q.a,p)
q=v.d
if(q!==z){if(q!=null){q=q.gw()
q.toString
p=H.h(v.gcI(),r)
C.a.K(q.a,p)}v.d=z
z=z.gw()
z.toString
r=H.h(v.gcI(),r)
C.a.h(z.a,r)
v.ew()}z=new V.iW("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.aU(0,"Cube",new K.mT(o))
z.aU(0,"Cylinder",new K.mU(o))
z.aU(0,"Cone",new K.mV(o))
z.aU(0,"Sphere",new K.mW(o))
z.d9(0,"Toroid",new K.mX(o),!0)
z.aU(0,"Knot",new K.mY(o))
V.n4(v)},
mS:{"^":"n:10;a,b,c",
$1:function(a){var z,y,x,w,v,u,t
z=H.k(H.f(a,"$isu"),"$iseE").c
y=this.a
x=this.b.an(0,z,null)
if(!J.O(y.d,x)){w=y.d
v=w==null
u=x==null
if(!(!v&&u))v=v&&!u
else v=!0
if(v)y.a=null
y.d=x
x=new D.H("colorMatrix",w,x,y,[V.am])
x.b=!0
y.Y(x)}t=V.iy(this.c.an(0,z,null))
if(!J.O(y.b,t)){x=y.b
w=x==null&&!0
if(w)y.a=null
y.b=t
x=new D.H("texture2DMatrix",x,t,y,[V.bD])
x.b=!0
y.Y(x)}}},
mT:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.dt(1,null,null,1))}},
mU:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.fT(1,!0,!0,1,40,1))}},
mV:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.fT(1,!0,!1,1,40,0))}},
mW:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.n6(6,null,6))}},
mX:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.h9(30,1,15,0.5))}},
mY:{"^":"n:0;a",
$0:function(){this.a.sad(0,F.mP(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ed.prototype
return J.ec.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.ee.prototype
if(typeof a=="boolean")return J.i_.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.aF=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.cb=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.mF=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.mG=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.dw=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)}
J.ha=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mF(a).M(a,b)}
J.dD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mG(a).k(a,b)}
J.dE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).j(a,b)}
J.cG=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h_(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cb(a).m(a,b,c)}
J.hb=function(a,b){return J.dw(a).F(a,b)}
J.hc=function(a,b,c){return J.aY(a).fs(a,b,c)}
J.hd=function(a,b,c,d){return J.aY(a).da(a,b,c,d)}
J.he=function(a,b){return J.dw(a).U(a,b)}
J.cH=function(a,b,c){return J.aF(a).hn(a,b,c)}
J.cI=function(a,b){return J.cb(a).H(a,b)}
J.hf=function(a,b,c,d){return J.cb(a).aw(a,b,c,d)}
J.dF=function(a,b){return J.cb(a).I(a,b)}
J.dG=function(a){return J.aY(a).gc8(a)}
J.bV=function(a){return J.K(a).gS(a)}
J.bv=function(a){return J.cb(a).gZ(a)}
J.at=function(a){return J.aF(a).gl(a)}
J.hg=function(a,b){return J.aY(a).i8(a,b)}
J.hh=function(a,b){return J.aY(a).sa_(a,b)}
J.a9=function(a){return J.K(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cN.prototype
C.G=J.t.prototype
C.a=J.b7.prototype
C.H=J.ec.prototype
C.d=J.ed.prototype
C.I=J.ee.prototype
C.h=J.c0.prototype
C.b=J.c1.prototype
C.P=J.c2.prototype
C.V=H.d2.prototype
C.W=W.iE.prototype
C.y=J.iJ.prototype
C.X=P.d5.prototype
C.r=J.c8.prototype
C.z=W.bL.prototype
C.A=W.kp.prototype
C.C=new P.hn(!1)
C.B=new P.hm(C.C)
C.D=new P.iH()
C.E=new P.ka()
C.j=new P.lc()
C.c=new A.cg(0,"ColorSourceType.None")
C.i=new A.cg(1,"ColorSourceType.Solid")
C.e=new A.cg(2,"ColorSourceType.Texture2D")
C.f=new A.cg(3,"ColorSourceType.TextureCube")
C.q=new P.b4(0)
C.F=new P.b4(5e6)
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=H.e(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.w=H.e(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.x=H.e(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.aj([]),[P.i])
C.U=new H.hz(0,{},C.Q,[P.i,P.i])
C.k=new P.k3(!1)
$.az=0
$.bw=null
$.dL=null
$.dn=!1
$.fY=null
$.fP=null
$.h5=null
$.cA=null
$.cD=null
$.dx=null
$.bp=null
$.bQ=null
$.bR=null
$.dp=!1
$.T=C.j
$.e1=null
$.e0=null
$.e_=null
$.dZ=null
$.o=V.ix()
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
I.$lazy(y,x,w)}})(["dY","$get$dY",function(){return H.fX("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fX("_$dart_js")},"eS","$get$eS",function(){return H.aC(H.cr({
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aC(H.cr({$method$:null,
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aC(H.cr(null))},"eV","$get$eV",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aC(H.cr(void 0))},"f_","$get$f_",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aC(H.eY(null))},"eW","$get$eW",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aC(H.eY(void 0))},"f0","$get$f0",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.kq()},"bS","$get$bS",function(){return[]},"fe","$get$fe",function(){return P.k7()},"fk","$get$fk",function(){return H.iC(H.bo(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fF","$get$fF",function(){return P.j1("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fL","$get$fL",function(){return P.mb()},"dW","$get$dW",function(){return{}},"fh","$get$fh",function(){return Z.aq(0)},"ff","$get$ff",function(){return Z.aq(511)},"aP","$get$aP",function(){return Z.aq(1)},"aO","$get$aO",function(){return Z.aq(2)},"aN","$get$aN",function(){return Z.aq(4)},"aQ","$get$aQ",function(){return Z.aq(8)},"aR","$get$aR",function(){return Z.aq(16)},"bJ","$get$bJ",function(){return Z.aq(32)},"bK","$get$bK",function(){return Z.aq(64)},"fg","$get$fg",function(){return Z.aq(96)},"bm","$get$bm",function(){return Z.aq(128)},"aM","$get$aM",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.au]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[F.al]},{func:1,ret:P.G,args:[F.ag,P.p,P.p]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:-1,args:[P.m,[P.j,E.aI]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.G,args:[W.aa]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,V.am]]},{func:1,ret:V.W,args:[P.p]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ae]]},{func:1,args:[,]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[W.L]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.G,args:[P.a0]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.p,P.p]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.ah,args:[[P.j,D.a2]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:P.G,args:[P.bi]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
Isolate.aj=a.aj
Isolate.du=a.du
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
if(typeof dartMainRunner==="function")dartMainRunner(K.h2,[])
else K.h2([])})})()
//# sourceMappingURL=test.dart.js.map
