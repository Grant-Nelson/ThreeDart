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
b6.$isc=b5
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
var d=supportsDirectProtoAccess&&b2!="c"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dZ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e_=function(){}
var dart=[["","",,H,{"^":"",po:{"^":"c;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
e2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e0==null){H.nF()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cp("Return interceptor for "+H.m(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dp()]
if(v!=null)return v
v=H.nI(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$dp(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"c;",
C:function(a,b){return a===b},
gW:function(a){return H.c0(a)},
j:["f3",function(a){return"Instance of '"+H.bs(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iZ:{"^":"t;",
j:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isN:1},
eF:{"^":"t;",
C:function(a,b){return null==b},
j:function(a){return"null"},
gW:function(a){return 0},
$isz:1},
dq:{"^":"t;",
gW:function(a){return 0},
j:["f4",function(a){return String(a)}]},
jI:{"^":"dq;"},
cS:{"^":"dq;"},
bW:{"^":"dq;",
j:function(a){var z=a[$.$get$em()]
if(z==null)return this.f4(a)
return"JavaScript function for "+H.m(J.ar(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isdl:1},
ba:{"^":"t;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
a5:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.bl(a))}},
a1:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.m(a[y]))
return z.join(b)},
iw:function(a,b,c,d){var z,y,x
H.x(b,d)
H.e(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.bl(a))}return y},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
c9:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a6(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a6(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.u(a,0)])
return H.h(a.slice(b,c),[H.u(a,0)])},
gaN:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.iW())},
f0:function(a,b,c,d,e){var z,y,x,w
z=H.u(a,0)
H.v(d,"$isn",[z],"$asn")
if(!!a.immutable$list)H.p(P.A("setRange"))
P.aW(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.k(b)
y=c-b
if(y===0)return
H.v(d,"$isf",[z],"$asf")
z=J.aA(d)
x=z.gk(d)
if(typeof x!=="number")return H.k(x)
if(e+y>x)throw H.a(H.iX())
if(e<b)for(w=y-1;w>=0;--w)a[b+w]=z.i(d,e+w)
else for(w=0;w<y;++w)a[b+w]=z.i(d,e+w)},
bw:function(a,b,c,d){return this.f0(a,b,c,d,0)},
aL:function(a,b,c,d){var z
H.x(d,H.u(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aW(b,c,a.length,null,null,null)
for(z=b;z.E(0,c);z=z.m(0,1))a[z]=d},
aq:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.Q(a[z],b))return z
return-1},
P:function(a,b){return this.aq(a,b,0)},
bh:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
j:function(a){return P.dm(a,"[","]")},
ga4:function(a){return new J.ax(a,a.length,0,[H.u(a,0)])},
gW:function(a){return H.c0(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cx(b,"newLength",null))
if(b<0)throw H.a(P.a6(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
return a[b]},
n:function(a,b,c){H.D(b)
H.x(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
a[b]=c},
m:function(a,b){var z,y
z=[H.u(a,0)]
H.v(b,"$isf",z,"$asf")
y=C.d.m(a.length,b.gk(b))
z=H.h([],z)
this.sk(z,y)
this.bw(z,0,a.length,a)
this.bw(z,a.length,y,b)
return z},
$isn:1,
$isf:1,
q:{
iY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cx(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a6(a,0,4294967295,"length",null))
return J.eC(new Array(a),b)},
eC:function(a,b){return J.bV(H.h(a,[b]))},
bV:function(a){H.ca(a)
a.fixed$length=Array
return a}}},
pn:{"^":"ba;$ti"},
ax:{"^":"c;a,b,c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.G(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ch:{"^":"t;",
je:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
c_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eP:function(a,b){var z,y
if(b>20)throw H.a(P.a6(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bs:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aA(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.l("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a+b},
bu:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dO(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.dO(a,b)},
dO:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.m(z)+": "+H.m(a)+" ~/ "+b))},
aX:function(a,b){var z
if(a>0)z=this.dM(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hz:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dM(a,b)},
dM:function(a,b){return b>31?0:a>>>b},
E:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
au:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a>=b},
$isC:1,
$isa0:1},
eE:{"^":"ch;",$iso:1},
eD:{"^":"ch;"},
ci:{"^":"t;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b<0)throw H.a(H.aQ(a,b))
if(b>=a.length)H.p(H.aQ(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.a(H.aQ(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cx(b,null,null))
return a+b},
b6:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
c=P.aW(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ai:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
if(typeof c!=="number")return c.E()
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ah:function(a,b){return this.ai(a,b,0)},
w:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.E()
if(b<0)throw H.a(P.cO(b,null,null))
if(b>c)throw H.a(P.cO(b,null,null))
if(c>a.length)throw H.a(P.cO(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.w(a,b,null)},
d3:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.K(z,0)===133){x=J.j_(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.Y(z,w)===133?J.j0(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iR:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
am:function(a,b){return this.iR(a,b," ")},
aq:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
P:function(a,b){return this.aq(a,b,0)},
iD:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
iC:function(a,b){return this.iD(a,b,null)},
ii:function(a,b,c){if(c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
return H.or(a,b,c)},
j:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.a(H.aQ(a,b))
return a[b]},
$iseV:1,
$isj:1,
q:{
eG:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
j_:function(a,b){var z,y
for(z=a.length;b<z;){y=C.b.K(a,b)
if(y!==32&&y!==13&&!J.eG(y))break;++b}return b},
j0:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.b.Y(a,z)
if(y!==32&&y!==13&&!J.eG(y))break}return b}}}}],["","",,H,{"^":"",
d_:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
iW:function(){return new P.dF("No element")},
iX:function(){return new P.dF("Too few elements")},
hU:{"^":"kL;a",
gk:function(a){return this.a.length},
i:function(a,b){return C.b.Y(this.a,b)},
$ascT:function(){return[P.o]},
$asy:function(){return[P.o]},
$asn:function(){return[P.o]},
$asf:function(){return[P.o]}},
ib:{"^":"n;"},
je:{"^":"c;a,b,c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.aA(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.bl(z))
w=this.c
if(typeof x!=="number")return H.k(x)
if(w>=x){this.d=null
return!1}this.d=y.L(z,w);++this.c
return!0}},
jm:{"^":"n;a,b,$ti",
ga4:function(a){return new H.jn(J.bP(this.a),this.b,this.$ti)},
gk:function(a){return J.aq(this.a)},
L:function(a,b){return this.b.$1(J.d5(this.a,b))},
$asn:function(a,b){return[b]}},
jn:{"^":"dn;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$asdn:function(a,b){return[b]}},
ld:{"^":"n;a,b,$ti",
ga4:function(a){return new H.le(J.bP(this.a),this.b,this.$ti)}},
le:{"^":"dn;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cE:{"^":"c;$ti"},
cT:{"^":"c;$ti",
n:function(a,b,c){H.D(b)
H.x(c,H.aL(this,"cT",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aL:function(a,b,c,d){H.x(d,H.aL(this,"cT",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
kL:{"^":"cI+cT;"}}],["","",,H,{"^":"",
hZ:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
nA:function(a){return init.types[H.D(a)]},
hq:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isH},
m:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ar(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
c0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jT:function(a,b){var z,y,x,w,v,u
if(typeof a!=="string")H.p(H.ah(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.K(w,u)|32)>x)return}return parseInt(a,b)},
jS:function(a){var z,y
if(typeof a!=="string")H.p(H.ah(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.d7(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bs:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.M(a).$iscS){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.K(w,0)===36)w=C.b.aA(w,1)
r=H.e1(H.ca(H.bg(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jK:function(){if(!!self.location)return self.location.href
return},
eX:function(a){var z,y,x,w,v
H.ca(a)
z=J.aq(a)
if(typeof z!=="number")return z.eZ()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jU:function(a){var z,y,x,w
z=H.h([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aX(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.eX(z)},
eY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.jU(a)}return H.eX(a)},
jV:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eZ()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cM:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aX(z,10))>>>0,56320|z&1023)}}throw H.a(P.a6(a,0,1114111,null,null))},
av:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jR:function(a){return a.b?H.av(a).getUTCFullYear()+0:H.av(a).getFullYear()+0},
jP:function(a){return a.b?H.av(a).getUTCMonth()+1:H.av(a).getMonth()+1},
jL:function(a){return a.b?H.av(a).getUTCDate()+0:H.av(a).getDate()+0},
jM:function(a){return a.b?H.av(a).getUTCHours()+0:H.av(a).getHours()+0},
jO:function(a){return a.b?H.av(a).getUTCMinutes()+0:H.av(a).getMinutes()+0},
jQ:function(a){return a.b?H.av(a).getUTCSeconds()+0:H.av(a).getSeconds()+0},
jN:function(a){return a.b?H.av(a).getUTCMilliseconds()+0:H.av(a).getMilliseconds()+0},
k:function(a){throw H.a(H.ah(a))},
b:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b3(!0,b,"index",null)
z=H.D(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.k(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.cO(b,"index",null)},
nu:function(a,b,c){if(a>c)return new P.cN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cN(a,c,!0,b,"end","Invalid value")
return new P.b3(!0,b,"end",null)},
ah:function(a){return new P.b3(!0,a,null,null)},
bK:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.dz()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hx})
z.name=""}else z.toString=H.hx
return z},
hx:function(){return J.ar(this.dartException)},
p:function(a){throw H.a(a)},
G:function(a){throw H.a(P.bl(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ot(a)
if(a==null)return
if(a instanceof H.dk)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aX(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dr(H.m(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eU(H.m(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fd()
u=$.$get$fe()
t=$.$get$ff()
s=$.$get$fg()
r=$.$get$fk()
q=$.$get$fl()
p=$.$get$fi()
$.$get$fh()
o=$.$get$fn()
n=$.$get$fm()
m=v.al(y)
if(m!=null)return z.$1(H.dr(H.L(y),m))
else{m=u.al(y)
if(m!=null){m.method="call"
return z.$1(H.dr(H.L(y),m))}else{m=t.al(y)
if(m==null){m=s.al(y)
if(m==null){m=r.al(y)
if(m==null){m=q.al(y)
if(m==null){m=p.al(y)
if(m==null){m=s.al(y)
if(m==null){m=o.al(y)
if(m==null){m=n.al(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eU(H.L(y),m))}}return z.$1(new H.kK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b3(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f3()
return a},
bh:function(a){var z
if(a instanceof H.dk)return a.b
if(a==null)return new H.fU(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fU(a)},
ny:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
nH:function(a,b,c,d,e,f){H.d(a,"$isdl")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.q("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nH)
a.$identity=z
return z},
hT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isf){z.$reflectionInfo=d
x=H.k_(z).r}else x=d
w=e?Object.create(new H.kf().constructor.prototype):Object.create(new H.da(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aR
if(typeof u!=="number")return u.m()
$.aR=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ej(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nA,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ed:H.db
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ej(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hQ:function(a,b,c,d){var z=H.db
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ej:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hS(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hQ(y,!w,z,b)
if(y===0){w=$.aR
if(typeof w!=="number")return w.m()
$.aR=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bQ
if(v==null){v=H.cy("self")
$.bQ=v}return new Function(w+H.m(v)+";return "+u+"."+H.m(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aR
if(typeof w!=="number")return w.m()
$.aR=w+1
t+=w
w="return function("+t+"){return this."
v=$.bQ
if(v==null){v=H.cy("self")
$.bQ=v}return new Function(w+H.m(v)+"."+H.m(z)+"("+t+");}")()},
hR:function(a,b,c,d){var z,y
z=H.db
y=H.ed
switch(b?-1:a){case 0:throw H.a(H.k8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hS:function(a,b){var z,y,x,w,v,u,t,s
z=$.bQ
if(z==null){z=H.cy("self")
$.bQ=z}y=$.ec
if(y==null){y=H.cy("receiver")
$.ec=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hR(w,!u,x,b)
if(w===1){z="return function(){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+");"
y=$.aR
if(typeof y!=="number")return y.m()
$.aR=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+", "+s+");"
y=$.aR
if(typeof y!=="number")return y.m()
$.aR=y+1
return new Function(z+y+"}")()},
dZ:function(a,b,c,d,e,f,g){var z,y
z=J.bV(H.ca(b))
H.D(c)
y=!!J.M(d).$isf?J.bV(d):d
return H.hT(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aP(a,"String"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aP(a,"double"))},
oj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aP(a,"num"))},
hj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aP(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aP(a,"int"))},
hv:function(a,b){throw H.a(H.aP(a,H.L(b).substring(3)))},
ol:function(a,b){var z=J.aA(b)
throw H.a(H.hN(a,z.w(b,3,z.gk(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hv(a,b)},
l:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.ol(a,b)},
ca:function(a){if(a==null)return a
if(!!J.M(a).$isf)return a
throw H.a(H.aP(a,"List"))},
hs:function(a,b){if(a==null)return a
if(!!J.M(a).$isf)return a
if(J.M(a)[b])return a
H.hv(a,b)},
hk:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cq:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hk(J.M(a))
if(z==null)return!1
y=H.hp(z,null,b,null)
return y},
e:function(a,b){var z,y
if(a==null)return a
if($.dV)return a
$.dV=!0
try{if(H.cq(a,b))return a
z=H.cu(b)
y=H.aP(a,z)
throw H.a(y)}finally{$.dV=!1}},
bN:function(a,b){if(a!=null&&!H.dY(a,b))H.p(H.aP(a,H.cu(b)))
return a},
he:function(a){var z
if(a instanceof H.i){z=H.hk(J.M(a))
if(z!=null)return H.cu(z)
return"Closure"}return H.bs(a)},
os:function(a){throw H.a(new P.i2(H.L(a)))},
hm:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
bg:function(a){if(a==null)return
return a.$ti},
qw:function(a,b,c){return H.bO(a["$as"+H.m(c)],H.bg(b))},
b8:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bO(a["$as"+H.m(c)],H.bg(b))
return z==null?null:z[d]},
aL:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bO(a["$as"+H.m(b)],H.bg(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.D(b)
z=H.bg(a)
return z==null?null:z[b]},
cu:function(a){var z=H.bj(a,null)
return z},
bj:function(a,b){var z,y
H.v(b,"$isf",[P.j],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e1(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.b(b,y)
return H.m(b[y])}if('func' in a)return H.nf(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.b(b,r)
t=C.b.m(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.bj(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bj(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bj(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bj(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.bj(i[h],b)+(" "+H.m(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e1:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.j],"$asf")
if(a==null)return""
z=new P.aD("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bj(u,c)}v="<"+z.j(0)+">"
return v},
bO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bg(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hh(H.bO(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.L(b)
H.ca(c)
H.L(d)
if(a==null)return a
z=H.b1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e1(c,0,null)
throw H.a(H.aP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aM(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aM(a[y],b,c[y],d))return!1
return!0},
qu:function(a,b,c){return a.apply(b,H.bO(J.M(b)["$as"+H.m(c)],H.bg(b)))},
hr:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="z"||a===-1||a===-2||H.hr(z)}return!1},
dY:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="c"||b.builtin$cls==="z"||b===-1||b===-2||H.hr(b)
return z}z=b==null||b===-1||b.builtin$cls==="c"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cq(a,b)}y=J.M(a).constructor
x=H.bg(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aM(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.dY(a,b))throw H.a(H.aP(a,H.cu(b)))
return a},
aM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aM(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.hp(a,b,c,d)
if('func' in a)return c.builtin$cls==="dl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aM("type" in a?a.type:null,b,x,d)
else if(H.aM(a,b,x,d))return!0
else{if(!('$is'+"af" in y.prototype))return!1
w=y.prototype["$as"+"af"]
v=H.bO(w,z?a.slice(1):null)
return H.aM(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cu(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hh(H.bO(r,z),b,u,d)},
hp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aM(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aM(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aM(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aM(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.oi(m,b,l,d)},
oi:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aM(c[w],d,a[w],b))return!1}return!0},
qv:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
nI:function(a){var z,y,x,w,v,u
z=H.L($.ho.$1(a))
y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.hg.$2(a,z))
if(z!=null){y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d1(x)
$.cZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d0[z]=x
return x}if(v==="-"){u=H.d1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hu(a,x)
if(v==="*")throw H.a(P.cp(z))
if(init.leafTags[z]===true){u=H.d1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hu(a,x)},
hu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e2(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d1:function(a){return J.e2(a,!1,null,!!a.$isH)},
oh:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d1(z)
else return J.e2(z,c,null,null)},
nF:function(){if(!0===$.e0)return
$.e0=!0
H.nG()},
nG:function(){var z,y,x,w,v,u,t,s
$.cZ=Object.create(null)
$.d0=Object.create(null)
H.nB()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hw.$1(v)
if(u!=null){t=H.oh(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nB:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bJ(C.K,H.bJ(C.P,H.bJ(C.u,H.bJ(C.u,H.bJ(C.O,H.bJ(C.L,H.bJ(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ho=new H.nC(v)
$.hg=new H.nD(u)
$.hw=new H.nE(t)},
bJ:function(a,b){return a(b)||b},
or:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hY:{"^":"c;$ti",
j:function(a){return P.ds(this)},
n:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
return H.hZ()},
$isJ:1},
i_:{"^":"hY;a,b,c,$ti",
gk:function(a){return this.a},
cJ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.cJ(0,b))return
return this.dw(b)},
dw:function(a){return this.b[H.L(a)]},
A:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.e(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dw(v),z))}}},
jZ:{"^":"c;a,b,c,d,e,f,r,0x",q:{
k_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bV(z)
y=z[0]
x=z[1]
return new H.jZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kx:{"^":"c;a,b,c,d,e,f",
al:function(a){var z,y,x
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
aX:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jD:{"^":"aj;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.m(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eU:function(a,b){return new H.jD(a,b==null?null:b.method)}}},
j3:{"^":"aj;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.m(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.m(this.a)+")"},
q:{
dr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.j3(a,y,z?null:b.receiver)}}},
kK:{"^":"aj;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
dk:{"^":"c;a,b"},
ot:{"^":"i:20;a",
$1:function(a){if(!!J.M(a).$isaj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fU:{"^":"c;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isas:1},
i:{"^":"c;",
j:function(a){return"Closure '"+H.bs(this).trim()+"'"},
geW:function(){return this},
$isdl:1,
geW:function(){return this}},
f8:{"^":"i;"},
kf:{"^":"f8;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
da:{"^":"f8;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.da))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.c0(this.a)
else y=typeof z!=="object"?J.bk(z):H.c0(z)
return(y^H.c0(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bs(z)+"'")},
q:{
db:function(a){return a.a},
ed:function(a){return a.c},
cy:function(a){var z,y,x,w,v
z=new H.da("self","target","receiver","name")
y=J.bV(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ky:{"^":"aj;a",
j:function(a){return this.a},
q:{
aP:function(a,b){return new H.ky("TypeError: "+H.m(P.cD(a))+": type '"+H.he(a)+"' is not a subtype of type '"+b+"'")}}},
hM:{"^":"aj;a",
j:function(a){return this.a},
q:{
hN:function(a,b){return new H.hM("CastError: "+H.m(P.cD(a))+": type '"+H.he(a)+"' is not a subtype of type '"+b+"'")}}},
k7:{"^":"aj;a",
j:function(a){return"RuntimeError: "+H.m(this.a)},
q:{
k8:function(a){return new H.k7(a)}}},
bo:{"^":"jj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaM:function(a){return new H.j7(this,[H.u(this,0)])},
cJ:function(a,b){var z=this.b
if(z==null)return!1
return this.fw(z,b)},
i7:function(a,b){J.d6(H.v(b,"$isJ",this.$ti,"$asJ"),new H.j2(this))},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.by(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.by(w,b)
x=y==null?null:y.b
return x}else return this.iA(b)},
iA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.dA(z,this.ev(a))
x=this.ew(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.co()
this.b=z}this.di(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.co()
this.c=y}this.di(y,b,c)}else this.iB(b,c)},
iB:function(a,b){var z,y,x,w
H.x(a,H.u(this,0))
H.x(b,H.u(this,1))
z=this.d
if(z==null){z=this.co()
this.d=z}y=this.ev(a)
x=this.dA(z,y)
if(x==null)this.cw(z,y,[this.cp(a,b)])
else{w=this.ew(x,a)
if(w>=0)x[w].b=b
else x.push(this.cp(a,b))}},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.bl(this))
z=z.c}},
di:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.by(a,b)
if(z==null)this.cw(a,b,this.cp(b,c))
else z.b=c},
fO:function(){this.r=this.r+1&67108863},
cp:function(a,b){var z,y
z=new H.j6(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fO()
return z},
ev:function(a){return J.bk(a)&0x3ffffff},
ew:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
j:function(a){return P.ds(this)},
by:function(a,b){return a[b]},
dA:function(a,b){return a[b]},
cw:function(a,b,c){a[b]=c},
fB:function(a,b){delete a[b]},
fw:function(a,b){return this.by(a,b)!=null},
co:function(){var z=Object.create(null)
this.cw(z,"<non-identifier-key>",z)
this.fB(z,"<non-identifier-key>")
return z},
$iseL:1},
j2:{"^":"i;a",
$2:function(a,b){var z=this.a
z.n(0,H.x(a,H.u(z,0)),H.x(b,H.u(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.z,args:[H.u(z,0),H.u(z,1)]}}},
j6:{"^":"c;a,b,0c,0d"},
j7:{"^":"ib;a,$ti",
gk:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.j8(z,z.r,this.$ti)
y.c=z.e
return y}},
j8:{"^":"c;a,b,0c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nC:{"^":"i:20;a",
$1:function(a){return this.a(a)}},
nD:{"^":"i:30;a",
$2:function(a,b){return this.a(a,b)}},
nE:{"^":"i:34;a",
$1:function(a){return this.a(H.L(a))}},
j1:{"^":"c;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gfT:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.eH(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
iu:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.fN(this,z)},
fE:function(a,b){var z,y
z=this.gfT()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.fN(this,y)},
$iseV:1,
$isk0:1,
q:{
eH:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fN:{"^":"c;a,b",
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]}},
lg:{"^":"c;a,b,c,0d",
gT:function(a){return this.d},
I:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.fE(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1}}}],["","",,H,{"^":"",
nx:function(a){return J.eC(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ok:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){return a},
jA:function(a){return new Int8Array(a)},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aQ(b,a))},
n9:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nu(a,b,c))
return b},
eT:{"^":"t;",$iseT:1,"%":"ArrayBuffer"},
dx:{"^":"t;",$isdx:1,$iskz:1,"%":"DataView;ArrayBufferView;dw|fO|fP|jB|fQ|fR|bc"},
dw:{"^":"dx;",
gk:function(a){return a.length},
$isH:1,
$asH:I.e_},
jB:{"^":"fP;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
n:function(a,b,c){H.D(b)
H.nv(c)
H.b0(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.C]},
$asy:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]},
"%":"Float32Array|Float64Array"},
bc:{"^":"fR;",
n:function(a,b,c){H.D(b)
H.D(c)
H.b0(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.o]},
$asy:function(){return[P.o]},
$isn:1,
$asn:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]}},
pA:{"^":"bc;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
pB:{"^":"bc;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int32Array"},
pC:{"^":"bc;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
pD:{"^":"bc;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pE:{"^":"bc;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pF:{"^":"bc;",
gk:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dy:{"^":"bc;",
gk:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
c9:function(a,b,c){return new Uint8Array(a.subarray(b,H.n9(b,c,a.length)))},
$isdy:1,
$isW:1,
"%":";Uint8Array"},
fO:{"^":"dw+y;"},
fP:{"^":"fO+cE;"},
fQ:{"^":"dw+y;"},
fR:{"^":"fQ+cE;"}}],["","",,P,{"^":"",
lk:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nn()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bL(new P.lm(z),1)).observe(y,{childList:true})
return new P.ll(z,y,x)}else if(self.setImmediate!=null)return P.no()
return P.np()},
qj:[function(a){self.scheduleImmediate(H.bL(new P.ln(H.e(a,{func:1,ret:-1})),0))},"$1","nn",4,0,15],
qk:[function(a){self.setImmediate(H.bL(new P.lo(H.e(a,{func:1,ret:-1})),0))},"$1","no",4,0,15],
ql:[function(a){H.e(a,{func:1,ret:-1})
P.mr(0,a)},"$1","np",4,0,15],
fb:function(a,b){var z
H.e(b,{func:1,ret:-1,args:[P.bz]})
z=C.d.ac(a.a,1000)
return P.ms(z<0?0:z,b)},
aa:function(a){return new P.fE(new P.mo(new P.aw(0,$.U,[a]),[a]),!1,[a])},
a9:function(a,b){H.e(a,{func:1,ret:-1,args:[P.o,,]})
H.d(b,"$isfE")
a.$2(0,null)
b.b=!0
return b.a.a},
am:function(a,b){P.n6(a,H.e(b,{func:1,ret:-1,args:[P.o,,]}))},
a8:function(a,b){H.d(b,"$isdh").aG(0,a)},
a7:function(a,b){H.d(b,"$isdh").bg(H.ac(a),H.bh(a))},
n6:function(a,b){var z,y,x,w,v
H.e(b,{func:1,ret:-1,args:[P.o,,]})
z=new P.n7(b)
y=new P.n8(b)
x=J.M(a)
if(!!x.$isaw)a.cA(H.e(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isaf)a.c2(H.e(z,w),y,null)
else{v=new P.aw(0,$.U,[null])
H.x(a,null)
v.a=4
v.c=a
v.cA(H.e(z,w),null,null)}}},
ab:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.U.eK(new P.nm(z),P.z,P.o,null)},
ni:function(a,b){if(H.cq(a,{func:1,args:[P.c,P.as]}))return b.eK(a,null,P.c,P.as)
if(H.cq(a,{func:1,args:[P.c]}))return H.e(a,{func:1,ret:null,args:[P.c]})
throw H.a(P.cx(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nh:function(){var z,y
for(;z=$.bH,z!=null;){$.c8=null
y=z.b
$.bH=y
if(y==null)$.c7=null
z.a.$0()}},
qt:[function(){$.dW=!0
try{P.nh()}finally{$.c8=null
$.dW=!1
if($.bH!=null)$.$get$dP().$1(P.hi())}},"$0","hi",0,0,7],
hb:function(a){var z=new P.fF(H.e(a,{func:1,ret:-1}))
if($.bH==null){$.c7=z
$.bH=z
if(!$.dW)$.$get$dP().$1(P.hi())}else{$.c7.b=z
$.c7=z}},
nl:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
z=$.bH
if(z==null){P.hb(a)
$.c8=$.c7
return}y=new P.fF(a)
x=$.c8
if(x==null){y.b=z
$.c8=y
$.bH=y}else{y.b=x.b
x.b=y
$.c8=y
if(y.b==null)$.c7=y}},
e4:function(a){var z,y
z={func:1,ret:-1}
H.e(a,z)
y=$.U
if(C.j===y){P.bI(null,null,C.j,a)
return}y.toString
P.bI(null,null,y,H.e(y.dT(a),z))},
q1:function(a,b){return new P.mi(H.v(a,"$iscn",[b],"$ascn"),!1,[b])},
kv:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bz]}
H.e(b,z)
y=$.U
if(y===C.j){y.toString
return P.fb(a,b)}x=y.dU(b,P.bz)
$.U.toString
return P.fb(a,H.e(x,z))},
cX:function(a,b,c,d,e){var z={}
z.a=d
P.nl(new P.nj(z,e))},
h7:function(a,b,c,d,e){var z,y
H.e(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
h8:function(a,b,c,d,e,f,g){var z,y
H.e(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
nk:function(a,b,c,d,e,f,g,h,i){var z,y
H.e(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
bI:function(a,b,c,d){var z
H.e(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dT(d):c.ic(d,-1)
P.hb(d)},
lm:{"^":"i:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ll:{"^":"i:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.e(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ln:{"^":"i:0;a",
$0:function(){this.a.$0()}},
lo:{"^":"i:0;a",
$0:function(){this.a.$0()}},
fX:{"^":"c;a,0b,c",
fe:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bL(new P.mu(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bL(new P.mt(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbz:1,
q:{
mr:function(a,b){var z=new P.fX(!0,0)
z.fe(a,b)
return z},
ms:function(a,b){var z=new P.fX(!1,0)
z.ff(a,b)
return z}}},
mu:{"^":"i:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mt:{"^":"i:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.f5(w,x)}z.c=y
this.d.$1(z)}},
fE:{"^":"c;a,b,$ti",
aG:function(a,b){var z
H.bN(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.aG(0,b)
else{z=H.b1(b,"$isaf",this.$ti,"$asaf")
if(z){z=this.a
b.c2(z.gig(z),z.gdX(),-1)}else P.e4(new P.li(this,b))}},
bg:function(a,b){if(this.b)this.a.bg(a,b)
else P.e4(new P.lh(this,a,b))},
$isdh:1},
li:{"^":"i:0;a,b",
$0:function(){this.a.a.aG(0,this.b)}},
lh:{"^":"i:0;a,b,c",
$0:function(){this.a.a.bg(this.b,this.c)}},
n7:{"^":"i:35;a",
$1:function(a){return this.a.$2(0,a)}},
n8:{"^":"i:36;a",
$2:function(a,b){this.a.$2(1,new H.dk(a,H.d(b,"$isas")))}},
nm:{"^":"i:40;a",
$2:function(a,b){this.a(H.D(a),b)}},
af:{"^":"c;$ti"},
fH:{"^":"c;$ti",
bg:[function(a,b){H.d(b,"$isas")
if(a==null)a=new P.dz()
if(this.a.a!==0)throw H.a(P.dG("Future already completed"))
$.U.toString
this.aw(a,b)},function(a){return this.bg(a,null)},"ih","$2","$1","gdX",4,2,18],
$isdh:1},
lj:{"^":"fH;a,$ti",
aG:function(a,b){var z
H.bN(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dG("Future already completed"))
z.fj(b)},
aw:function(a,b){this.a.fk(a,b)}},
mo:{"^":"fH;a,$ti",
aG:[function(a,b){var z
H.bN(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dG("Future already completed"))
z.cg(b)},function(a){return this.aG(a,null)},"kb","$1","$0","gig",1,2,62],
aw:function(a,b){this.a.aw(a,b)}},
bE:{"^":"c;0a,b,c,d,e,$ti",
iI:function(a){if(this.c!==6)return!0
return this.b.b.d2(H.e(this.d,{func:1,ret:P.N,args:[P.c]}),a.a,P.N,P.c)},
iz:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.cq(z,{func:1,args:[P.c,P.as]}))return H.bN(w.j9(z,a.a,a.b,null,y,P.as),x)
else return H.bN(w.d2(H.e(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aw:{"^":"c;dN:a<,b,0hu:c<,$ti",
c2:function(a,b,c){var z,y
z=H.u(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ni(b,y)}return this.cA(a,b,c)},
eO:function(a,b){return this.c2(a,null,b)},
cA:function(a,b,c){var z,y,x
z=H.u(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.aw(0,$.U,[c])
x=b==null?1:3
this.dj(new P.bE(y,x,a,b,[z,c]))
return y},
dj:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbE")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaw")
z=y.a
if(z<4){y.dj(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bI(null,null,z,H.e(new P.lD(this,a),{func:1,ret:-1}))}},
dF:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbE")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaw")
y=u.a
if(y<4){u.dF(a)
return}this.a=y
this.c=u.c}z.a=this.bE(a)
y=this.b
y.toString
P.bI(null,null,y,H.e(new P.lK(z,this),{func:1,ret:-1}))}},
bD:function(){var z=H.d(this.c,"$isbE")
this.c=null
return this.bE(z)},
bE:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cg:function(a){var z,y,x,w
z=H.u(this,0)
H.bN(a,{futureOr:1,type:z})
y=this.$ti
x=H.b1(a,"$isaf",y,"$asaf")
if(x){z=H.b1(a,"$isaw",y,null)
if(z)P.cU(a,this)
else P.fJ(a,this)}else{w=this.bD()
H.x(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
aw:[function(a,b){var z
H.d(b,"$isas")
z=this.bD()
this.a=8
this.c=new P.aB(a,b)
P.bF(this,z)},function(a){return this.aw(a,null)},"jo","$2","$1","gfu",4,2,18],
fj:function(a){var z
H.bN(a,{futureOr:1,type:H.u(this,0)})
z=H.b1(a,"$isaf",this.$ti,"$asaf")
if(z){this.fs(a)
return}this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.e(new P.lF(this,a),{func:1,ret:-1}))},
fs:function(a){var z=this.$ti
H.v(a,"$isaf",z,"$asaf")
z=H.b1(a,"$isaw",z,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.e(new P.lJ(this,a),{func:1,ret:-1}))}else P.cU(a,this)
return}P.fJ(a,this)},
fk:function(a,b){var z
this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.e(new P.lE(this,a,b),{func:1,ret:-1}))},
$isaf:1,
q:{
fJ:function(a,b){var z,y,x
b.a=1
try{a.c2(new P.lG(b),new P.lH(b),null)}catch(x){z=H.ac(x)
y=H.bh(x)
P.e4(new P.lI(b,z,y))}},
cU:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaw")
if(z>=4){y=b.bD()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.d(b.c,"$isbE")
b.a=2
b.c=a
a.dF(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isaB")
y=y.b
u=v.a
t=v.b
y.toString
P.cX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bF(z.a,b)}y=z.a
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
if(p){H.d(r,"$isaB")
y=y.b
u=r.a
t=r.b
y.toString
P.cX(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.lN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lM(x,b,r).$0()}else if((y&2)!==0)new P.lL(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.M(y).$isaf){if(y.a>=4){n=H.d(t.c,"$isbE")
t.c=null
b=t.bE(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cU(y,t)
return}}m=b.b
n=H.d(m.c,"$isbE")
m.c=null
b=m.bE(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaB")
m.a=8
m.c=u}z.a=m
y=m}}}},
lD:{"^":"i:0;a,b",
$0:function(){P.bF(this.a,this.b)}},
lK:{"^":"i:0;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
lG:{"^":"i:23;a",
$1:function(a){var z=this.a
z.a=0
z.cg(a)}},
lH:{"^":"i:48;a",
$2:function(a,b){this.a.aw(a,H.d(b,"$isas"))},
$1:function(a){return this.$2(a,null)}},
lI:{"^":"i:0;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
lF:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.x(this.b,H.u(z,0))
x=z.bD()
z.a=4
z.c=y
P.bF(z,x)}},
lJ:{"^":"i:0;a,b",
$0:function(){P.cU(this.b,this.a)}},
lE:{"^":"i:0;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
lN:{"^":"i:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eN(H.e(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bh(v)
if(this.d){w=H.d(this.a.a.c,"$isaB").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaB")
else u.b=new P.aB(y,x)
u.a=!0
return}if(!!J.M(z).$isaf){if(z instanceof P.aw&&z.gdN()>=4){if(z.gdN()===8){w=this.b
w.b=H.d(z.ghu(),"$isaB")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eO(new P.lO(t),null)
w.a=!1}}},
lO:{"^":"i:49;a",
$1:function(a){return this.a}},
lM:{"^":"i:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.d2(H.e(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bh(t)
x=this.a
x.b=new P.aB(z,y)
x.a=!0}}},
lL:{"^":"i:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaB")
w=this.c
if(w.iI(z)&&w.e!=null){v=this.b
v.b=w.iz(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bh(u)
w=H.d(this.a.a.c,"$isaB")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aB(y,x)
s.a=!0}}},
fF:{"^":"c;a,0b"},
cn:{"^":"c;$ti",
gk:function(a){var z,y
z={}
y=new P.aw(0,$.U,[P.o])
z.a=0
this.iG(new P.ki(z,this),!0,new P.kj(z,y),y.gfu())
return y}},
ki:{"^":"i;a,b",
$1:function(a){H.x(a,H.aL(this.b,"cn",0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.aL(this.b,"cn",0)]}}},
kj:{"^":"i:0;a,b",
$0:function(){this.b.cg(this.a.a)}},
f4:{"^":"c;$ti"},
kh:{"^":"c;"},
mi:{"^":"c;0a,b,c,$ti"},
bz:{"^":"c;"},
aB:{"^":"c;a,b",
j:function(a){return H.m(this.a)},
$isaj:1},
mW:{"^":"c;",$isqi:1},
nj:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dz()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
m7:{"^":"mW;",
ja:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.h7(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bh(x)
P.cX(null,null,this,z,H.d(y,"$isas"))}},
jb:function(a,b,c){var z,y,x
H.e(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.h8(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bh(x)
P.cX(null,null,this,z,H.d(y,"$isas"))}},
ic:function(a,b){return new P.m9(this,H.e(a,{func:1,ret:b}),b)},
dT:function(a){return new P.m8(this,H.e(a,{func:1,ret:-1}))},
dU:function(a,b){return new P.ma(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
eN:function(a,b){H.e(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.h7(null,null,this,a,b)},
d2:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.U===C.j)return a.$1(b)
return P.h8(null,null,this,a,b,c,d)},
j9:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.U===C.j)return a.$2(b,c)
return P.nk(null,null,this,a,b,c,d,e,f)},
eK:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}},
m9:{"^":"i;a,b,c",
$0:function(){return this.a.eN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m8:{"^":"i:7;a,b",
$0:function(){return this.a.ja(this.b)}},
ma:{"^":"i;a,b,c",
$1:function(a){var z=this.c
return this.a.jb(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j9:function(a,b,c,d,e){return new H.bo(0,0,[d,e])},
ja:function(a,b,c){H.ca(a)
return H.v(H.ny(a,new H.bo(0,0,[b,c])),"$iseL",[b,c],"$aseL")},
eM:function(a,b){return new H.bo(0,0,[a,b])},
jd:function(a,b,c,d){return new P.lU(0,0,[d])},
iV:function(a,b,c){var z,y
if(P.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c9()
C.a.h(y,a)
try{P.ng(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.f5(b,H.hs(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
dm:function(a,b,c){var z,y,x
if(P.dX(a))return b+"..."+c
z=new P.aD(b)
y=$.$get$c9()
C.a.h(y,a)
try{x=z
x.a=P.f5(x.gaS(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gaS()+c
y=z.gaS()
return y.charCodeAt(0)==0?y:y},
dX:function(a){var z,y
for(z=0;y=$.$get$c9(),z<y.length;++z)if(a===y[z])return!0
return!1},
ng:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.m(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.m(t))
return}v=H.m(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.I();t=s,s=r){r=z.gT(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.m(t)
v=H.m(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
jb:function(a,b,c){var z=P.j9(null,null,null,b,c)
a.A(0,new P.jc(z,b,c))
return z},
ds:function(a){var z,y,x
z={}
if(P.dX(a))return"{...}"
y=new P.aD("")
try{C.a.h($.$get$c9(),a)
x=y
x.a=x.gaS()+"{"
z.a=!0
J.d6(a,new P.jk(z,y))
z=y
z.a=z.gaS()+"}"}finally{z=$.$get$c9()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gaS()
return z.charCodeAt(0)==0?z:z},
lU:{"^":"lP;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.fM(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dR()
this.b=z}return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dR()
this.c=y}return this.dq(y,b)}else return this.fh(0,b)},
fh:function(a,b){var z,y,x
H.x(b,H.u(this,0))
z=this.d
if(z==null){z=P.dR()
this.d=z}y=this.ds(b)
x=z[y]
if(x==null)z[y]=[this.cf(b)]
else{if(this.dz(x,b)>=0)return!1
x.push(this.cf(b))}return!0},
a5:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dG(this.c,b)
else return this.ho(0,b)},
ho:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fK(z,b)
x=this.dz(y,b)
if(x<0)return!1
this.dP(y.splice(x,1)[0])
return!0},
dq:function(a,b){H.x(b,H.u(this,0))
if(H.d(a[b],"$isdQ")!=null)return!1
a[b]=this.cf(b)
return!0},
dG:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$isdQ")
if(z==null)return!1
this.dP(z)
delete a[b]
return!0},
dr:function(){this.r=this.r+1&67108863},
cf:function(a){var z,y
z=new P.dQ(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dr()
return z},
dP:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dr()},
ds:function(a){return J.bk(a)&0x3ffffff},
fK:function(a,b){return a[this.ds(b)]},
dz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
q:{
dR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dQ:{"^":"c;a,0b,0c"},
lV:{"^":"c;a,b,0c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.u(this,0))
this.c=z.b
return!0}}},
q:{
fM:function(a,b,c){var z=new P.lV(a,b,[c])
z.c=a.e
return z}}},
lP:{"^":"k9;"},
jc:{"^":"i:10;a,b,c",
$2:function(a,b){this.a.n(0,H.x(a,this.b),H.x(b,this.c))}},
cI:{"^":"lW;",$isn:1,$isf:1},
y:{"^":"c;$ti",
ga4:function(a){return new H.je(a,this.gk(a),0,[H.b8(this,a,"y",0)])},
L:function(a,b){return this.i(a,b)},
jg:function(a,b){var z,y,x
z=H.h([],[H.b8(this,a,"y",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.k(x)
if(!(y<x))break
C.a.n(z,y,this.i(a,y));++y}return z},
jf:function(a){return this.jg(a,!0)},
m:function(a,b){var z,y,x
z=[H.b8(this,a,"y",0)]
H.v(b,"$isf",z,"$asf")
y=H.h([],z)
z=this.gk(a)
x=b.gk(b)
if(typeof z!=="number")return z.m()
C.a.sk(y,C.d.m(z,x))
C.a.bw(y,0,this.gk(a),a)
C.a.bw(y,this.gk(a),y.length,b)
return y},
aL:function(a,b,c,d){var z
H.x(d,H.b8(this,a,"y",0))
P.aW(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
aq:function(a,b,c){var z,y
if(c.E(0,0))c=0
z=c
while(!0){y=this.gk(a)
if(typeof y!=="number")return H.k(y)
if(!(z<y))break
if(J.Q(this.i(a,z),b))return z;++z}return-1},
P:function(a,b){return this.aq(a,b,0)},
j:function(a){return P.dm(a,"[","]")}},
jj:{"^":"ay;"},
jk:{"^":"i:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.m(a)
z.a=y+": "
z.a+=H.m(b)}},
ay:{"^":"c;$ti",
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.b8(this,a,"ay",0),H.b8(this,a,"ay",1)]})
for(z=J.bP(this.gaM(a));z.I();){y=z.gT(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.aq(this.gaM(a))},
j:function(a){return P.ds(a)},
$isJ:1},
mz:{"^":"c;$ti",
n:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
jl:{"^":"c;$ti",
i:function(a,b){return J.X(this.a,b)},
n:function(a,b,c){J.d3(this.a,H.x(b,H.u(this,0)),H.x(c,H.u(this,1)))},
A:function(a,b){J.d6(this.a,H.e(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.aq(this.a)},
j:function(a){return J.ar(this.a)},
$isJ:1},
fu:{"^":"mA;a,$ti"},
ka:{"^":"c;$ti",
j:function(a){return P.dm(this,"{","}")},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e8("index"))
if(b<0)H.p(P.a6(b,0,null,"index",null))
for(z=P.fM(this,this.r,H.u(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isn:1},
k9:{"^":"ka;"},
lW:{"^":"c+y;"},
mA:{"^":"jl+mz;$ti"}}],["","",,P,{"^":"",hJ:{"^":"cd;a",
iJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aW(c,d,b.length,null,null,null)
z=$.$get$fG()
if(typeof d!=="number")return H.k(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.K(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d_(C.b.K(b,s))
o=H.d_(C.b.K(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.b(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aD("")
w.a+=C.b.w(b,x,y)
w.a+=H.cM(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.eb(b,u,d,v,t,k)
else{j=C.d.bu(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b6(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.eb(b,u,d,v,t,i)
else{j=C.d.bu(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b6(b,d,d,j===2?"==":"=")}return b},
$ascd:function(){return[[P.f,P.o],P.j]},
q:{
eb:function(a,b,c,d,e,f){if(C.d.bu(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},hK:{"^":"bR;a",
$asbR:function(){return[[P.f,P.o],P.j]}},cd:{"^":"c;$ti"},bR:{"^":"kh;$ti"},id:{"^":"cd;",
$ascd:function(){return[P.j,[P.f,P.o]]}},kY:{"^":"id;a",
gir:function(){return C.F}},l4:{"^":"bR;",
bi:function(a,b,c){var z,y,x,w
z=a.length
P.aW(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mV(0,0,x)
if(w.fJ(a,b,z)!==z)w.dQ(J.hB(a,z-1),0)
return C.V.c9(x,0,w.b)},
cK:function(a){return this.bi(a,0,null)},
$asbR:function(){return[P.j,[P.f,P.o]]}},mV:{"^":"c;a,b,c",
dQ:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.b(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.b(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.b(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.b(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.b(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.b(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.b(z,y)
z[y]=128|a&63
return!1}},
fJ:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.K(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dQ(w,C.b.K(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.b(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.b(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.b(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.b(z,v)
z[v]=128|w&63}}return x}},kZ:{"^":"bR;a",
bi:function(a,b,c){var z,y,x,w,v
H.v(a,"$isf",[P.o],"$asf")
z=P.l_(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.aW(b,c,y,null,null,null)
x=new P.aD("")
w=new P.mS(!1,x,!0,0,0,0)
w.bi(a,b,y)
w.iv(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cK:function(a){return this.bi(a,0,null)},
$asbR:function(){return[[P.f,P.o],P.j]},
q:{
l_:function(a,b,c,d){H.v(b,"$isf",[P.o],"$asf")
if(b instanceof Uint8Array)return P.l0(!1,b,c,d)
return},
l0:function(a,b,c,d){var z,y,x
z=$.$get$fy()
if(z==null)return
y=0===c
if(y&&!0)return P.dN(z,b)
x=b.length
d=P.aW(c,d,x,null,null,null)
if(y&&d===x)return P.dN(z,b)
return P.dN(z,b.subarray(c,d))},
dN:function(a,b){if(P.l2(b))return
return P.l3(a,b)},
l3:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
l2:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l1:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},mS:{"^":"c;a,b,c,d,e,f",
iv:function(a,b,c){var z
H.v(b,"$isf",[P.o],"$asf")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bi:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isf",[P.o],"$asf")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mU(c)
v=new P.mT(this,b,c,a)
$label0$0:for(u=J.aA(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.c5()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.b(C.w,q)
if(z<=C.w[q]){q=P.a1("Overlong encoding of 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cM(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.c7()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.E()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.d.bs(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mU:{"^":"i:55;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isf",[P.o],"$asf")
z=this.a
for(y=J.aA(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.c5()
if((w&127)!==w)return x-b}return z-b}},mT:{"^":"i:57;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.f6(this.d,a,b)}}}],["","",,P,{"^":"",
bi:function(a,b,c){var z
H.L(a)
H.e(b,{func:1,ret:P.o,args:[P.j]})
z=H.jT(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
nw:function(a,b){var z=H.jS(a)
if(z!=null)return z
throw H.a(P.a1("Invalid double",a,null))},
ig:function(a){var z=J.M(a)
if(!!z.$isi)return z.j(a)
return"Instance of '"+H.bs(a)+"'"},
jf:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iY(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
jg:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga4(a);x.I();)C.a.h(y,H.x(x.gT(x),c))
if(b)return y
return H.v(J.bV(y),"$isf",z,"$asf")},
f6:function(a,b,c){var z,y
z=P.o
H.v(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isba",[z],"$asba")
y=a.length
c=P.aW(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.E()
z=c<y}else z=!0
return H.eY(z?C.a.c9(a,b,c):a)}if(!!J.M(a).$isdy)return H.jV(a,b,P.aW(b,c,a.length,null,null,null))
return P.kk(a,b,c)},
kk:function(a,b,c){var z,y,x,w
H.v(a,"$isn",[P.o],"$asn")
if(b<0)throw H.a(P.a6(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a6(c,b,J.aq(a),null,null))
y=J.bP(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.a6(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.a6(c,b,x,null,null))
w.push(y.gT(y))}return H.eY(w)},
dB:function(a,b,c){return new H.j1(a,H.eH(a,!1,!0,!1))},
dM:function(){var z=H.jK()
if(z!=null)return P.kQ(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ig(a)},
q:function(a){return new P.fI(a)},
jh:function(a,b,c,d){var z,y
H.e(b,{func:1,ret:d,args:[P.o]})
z=H.h([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
cb:function(a){H.ok(a)},
kQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.K(a,b+4)^58)*3|C.b.K(a,b)^100|C.b.K(a,b+1)^97|C.b.K(a,b+2)^116|C.b.K(a,b+3)^97)>>>0
if(y===0)return P.fv(b>0||c<c?C.b.w(a,b,c):a,5,null).geS()
else if(y===32)return P.fv(C.b.w(a,z,c),0,null).geS()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.o])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.h9(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.au()
if(v>=b)if(P.h9(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.m()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.E()
if(typeof r!=="number")return H.k(r)
if(q<r)r=q
if(typeof s!=="number")return s.E()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.E()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.E()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ai(a,"..",s)))n=r>s+2&&C.b.ai(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ai(a,"file",b)){if(u<=b){if(!C.b.ai(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b6(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ai(a,"http",b)){if(x&&t+3===s&&C.b.ai(a,"80",t+1))if(b===0&&!0){a=C.b.b6(a,t,s,"")
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
else if(v===z&&C.b.ai(a,"https",b)){if(x&&t+4===s&&C.b.ai(a,"443",t+1))if(b===0&&!0){a=C.b.b6(a,t,s,"")
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
q-=b}return new P.mc(a,v,u,t,s,r,q,o)}return P.mB(a,b,c,v,u,t,s,r,q,o)},
fx:function(a,b){var z=P.j
return C.a.iw(H.h(a.split("&"),[z]),P.eM(z,z),new P.kT(b),[P.J,P.j,P.j])},
kO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kP(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bi(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.c7()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.b(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bi(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.c7()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.b(y,u)
y[u]=s
return y},
fw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kR(a)
y=new P.kS(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaN(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kO(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.b(o,l)
o[l]=0
i=l+1
if(i>=n)return H.b(o,i)
o[i]=0
l+=2}else{i=C.d.aX(k,8)
if(l<0||l>=n)return H.b(o,l)
o[l]=i
i=l+1
if(i>=n)return H.b(o,i)
o[i]=k&255
l+=2}}return o},
na:function(){var z,y,x,w,v
z=P.jh(22,new P.nc(),!0,P.W)
y=new P.nb(z)
x=new P.nd()
w=new P.ne()
v=H.d(y.$2(0,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isW")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isW")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isW"),"]",5)
v=H.d(y.$2(9,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isW"),"az",21)
v=H.d(y.$2(21,245),"$isW")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
h9:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isf",[P.o],"$asf")
z=$.$get$ha()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.b(z,d)
x=z[d]
w=C.b.K(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.b(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
N:{"^":"c;"},
"+bool":0,
aC:{"^":"c;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.d.aX(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.i3(H.jR(this))
y=P.ce(H.jP(this))
x=P.ce(H.jL(this))
w=P.ce(H.jM(this))
v=P.ce(H.jO(this))
u=P.ce(H.jQ(this))
t=P.i4(H.jN(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
i3:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ce:function(a){if(a>=10)return""+a
return"0"+a}}},
C:{"^":"a0;"},
"+double":0,
bS:{"^":"c;a",
m:function(a,b){return new P.bS(C.d.m(this.a,b.gfC()))},
E:function(a,b){return C.d.E(this.a,H.d(b,"$isbS").a)},
au:function(a,b){return C.d.au(this.a,b.gfC())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bS))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.ia()
y=this.a
if(y<0)return"-"+new P.bS(0-y).j(0)
x=z.$1(C.d.ac(y,6e7)%60)
w=z.$1(C.d.ac(y,1e6)%60)
v=new P.i9().$1(y%1e6)
return""+C.d.ac(y,36e8)+":"+H.m(x)+":"+H.m(w)+"."+H.m(v)},
q:{
es:function(a,b,c,d,e,f){return new P.bS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i9:{"^":"i:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ia:{"^":"i:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
aj:{"^":"c;"},
dz:{"^":"aj;",
j:function(a){return"Throw of null."}},
b3:{"^":"aj;a,b,c,d",
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.m(z)
w=this.gcj()+y+x
if(!this.a)return w
v=this.gci()
u=P.cD(this.b)
return w+v+": "+H.m(u)},
q:{
cc:function(a){return new P.b3(!1,null,null,a)},
cx:function(a,b,c){return new P.b3(!0,a,b,c)},
e8:function(a){return new P.b3(!1,null,a,"Must not be null")}}},
cN:{"^":"b3;e,f,a,b,c,d",
gcj:function(){return"RangeError"},
gci:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.m(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.m(z)
else if(x>z)y=": Not in range "+H.m(z)+".."+H.m(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.m(z)}return y},
q:{
cO:function(a,b,c){return new P.cN(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.cN(b,c,!0,a,d,"Invalid value")},
aW:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.k(a)
if(0<=a){if(typeof c!=="number")return H.k(c)
z=a>c}else z=!0
if(z)throw H.a(P.a6(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.k(c)
z=b>c}else z=!0
if(z)throw H.a(P.a6(b,a,c,"end",f))
return b}return c}}},
it:{"^":"b3;e,k:f>,a,b,c,d",
gcj:function(){return"RangeError"},
gci:function(){if(J.d2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.m(z)},
q:{
Y:function(a,b,c,d,e){var z=H.D(e!=null?e:J.aq(b))
return new P.it(b,z,!0,a,c,"Index out of range")}}},
kM:{"^":"aj;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
A:function(a){return new P.kM(a)}}},
kJ:{"^":"aj;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cp:function(a){return new P.kJ(a)}}},
dF:{"^":"aj;a",
j:function(a){return"Bad state: "+this.a},
q:{
dG:function(a){return new P.dF(a)}}},
hX:{"^":"aj;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.m(P.cD(z))+"."},
q:{
bl:function(a){return new P.hX(a)}}},
jG:{"^":"c;",
j:function(a){return"Out of Memory"},
$isaj:1},
f3:{"^":"c;",
j:function(a){return"Stack Overflow"},
$isaj:1},
i2:{"^":"aj;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fI:{"^":"c;a",
j:function(a){return"Exception: "+this.a}},
il:{"^":"c;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.m(z):"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.m(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.K(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
q:{
a1:function(a,b,c){return new P.il(a,b,c)}}},
o:{"^":"a0;"},
"+int":0,
n:{"^":"c;$ti",
gk:function(a){var z,y
z=this.ga4(this)
for(y=0;z.I();)++y
return y},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e8("index"))
if(b<0)H.p(P.a6(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.I();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
j:function(a){return P.iV(this,"(",")")}},
dn:{"^":"c;$ti"},
f:{"^":"c;$ti",$isn:1},
"+List":0,
J:{"^":"c;$ti"},
z:{"^":"c;",
gW:function(a){return P.c.prototype.gW.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a0:{"^":"c;"},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gW:function(a){return H.c0(this)},
j:function(a){return"Instance of '"+H.bs(this)+"'"},
toString:function(){return this.j(this)}},
as:{"^":"c;"},
j:{"^":"c;",$iseV:1},
"+String":0,
aD:{"^":"c;aS:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isq3:1,
q:{
f5:function(a,b,c){var z=J.bP(b)
if(!z.I())return a
if(c.length===0){do a+=H.m(z.gT(z))
while(z.I())}else{a+=H.m(z.gT(z))
for(;z.I();)a=a+c+H.m(z.gT(z))}return a}}},
kT:{"^":"i:47;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isJ",[z,z],"$asJ")
H.L(b)
y=J.aA(b).P(b,"=")
if(y===-1){if(b!=="")J.d3(a,P.dT(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.d3(a,P.dT(x,0,x.length,z,!0),P.dT(w,0,w.length,z,!0))}return a}},
kP:{"^":"i:33;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
kR:{"^":"i:44;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kS:{"^":"i:31;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bi(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.E()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cW:{"^":"c;c8:a<,b,c,d,eF:e>,f,r,0x,0y,0z,0Q,0ch",
geT:function(){return this.b},
gcU:function(a){var z=this.c
if(z==null)return""
if(C.b.ah(z,"["))return C.b.w(z,1,z.length-1)
return z},
gc0:function(a){var z=this.d
if(z==null)return P.fZ(this.a)
return z},
gd0:function(a){var z=this.f
return z==null?"":z},
geo:function(){var z=this.r
return z==null?"":z},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.j,null],"$asJ")
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
if(x&&!C.b.ah(d,"/"))d="/"+d
g=P.dS(g,0,0,h)
return new P.cW(i,j,c,f,d,g,this.r)},
eM:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gc1:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fu(P.fx(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gep:function(){return this.c!=null},
ges:function(){return this.f!=null},
geq:function(){return this.r!=null},
j:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.m(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.m(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.m(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
C:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdL){y=this.a
x=b.gc8()
if(y==null?x==null:y===x)if(this.c!=null===b.gep()){y=this.b
x=b.geT()
if(y==null?x==null:y===x){y=this.gcU(this)
x=z.gcU(b)
if(y==null?x==null:y===x){y=this.gc0(this)
x=z.gc0(b)
if(y==null?x==null:y===x)if(this.e===z.geF(b)){y=this.f
x=y==null
if(!x===b.ges()){if(x)y=""
if(y===z.gd0(b)){z=this.r
y=z==null
if(!y===b.geq()){if(y)z=""
z=z===b.geo()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.j(0))
this.z=z}return z},
$isdL:1,
q:{
dU:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.o],"$asf")
if(c===C.l){z=$.$get$h3().b
if(typeof b!=="string")H.p(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.aL(c,"cd",0))
y=c.gir().cK(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.b(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cM(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mM(a,b,d)
else{if(d===b)P.c5(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mN(a,z,e-1):""
x=P.mG(a,e,f,!1)
if(typeof f!=="number")return f.m()
w=f+1
if(typeof g!=="number")return H.k(g)
v=w<g?P.mJ(P.bi(C.b.w(a,w,g),new P.mC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.E()
t=h<i?P.dS(a,h+1,i,null):null
return new P.cW(j,y,x,v,u,t,i<c?P.mF(a,i+1,c):null)},
fZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c5:function(a,b,c){throw H.a(P.a1(c,a,b))},
mJ:function(a,b){if(a!=null&&a===P.fZ(b))return
return a},
mG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.F()
z=c-1
if(C.b.Y(a,z)!==93)P.c5(a,b,"Missing end `]` to match `[` in host")
P.fw(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.k(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fw(a,b,c)
return"["+a+"]"}return P.mP(a,b,c)},
mP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.k(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.h5(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aD("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.b(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aD("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.b(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c5(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aD("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h_(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h1(C.b.K(a,b)))P.c5(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.K(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.b(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c5(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mD(y?a.toLowerCase():a)},
mD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mN:function(a,b,c){return P.c6(a,b,c,C.S)},
mH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c6(a,b,c,C.y):C.q.kf(d,new P.mI(),P.j).a1(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ah(w,"/"))w="/"+w
return P.mO(w,e,f)},
mO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ah(a,"/"))return P.mQ(a,!z||c)
return P.mR(a)},
dS:function(a,b,c,d){var z,y
z={}
H.v(d,"$isJ",[P.j,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.cc("Both query and queryParameters specified"))
return P.c6(a,b,c,C.n)}if(d==null)return
y=new P.aD("")
z.a=""
d.A(0,new P.mK(new P.mL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mF:function(a,b,c){return P.c6(a,b,c,C.n)},
h5:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.d_(y)
v=H.d_(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aX(u,4)
if(z>=8)return H.b(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cM(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
h_:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.o])
C.a.n(y,0,37)
C.a.n(y,1,C.b.K("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.hz(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.K("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.K("0123456789ABCDEF",u&15))
v+=3}}return P.f6(y,0,null)},
c6:function(a,b,c,d){var z=P.h4(a,b,c,H.v(d,"$isf",[P.o],"$asf"),!1)
return z==null?C.b.w(a,b,c):z},
h4:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isf",[P.o],"$asf")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.E()
if(typeof c!=="number")return H.k(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.b(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h5(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.b(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c5(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h_(v)}}if(w==null)w=new P.aD("")
w.a+=C.b.w(a,x,y)
w.a+=H.m(t)
if(typeof s!=="number")return H.k(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.E()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h2:function(a){if(C.b.ah(a,"."))return!0
return C.b.P(a,"/.")!==-1},
mR:function(a){var z,y,x,w,v,u,t
if(!P.h2(a))return a
z=H.h([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.b(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.a1(z,"/")},
mQ:function(a,b){var z,y,x,w,v,u
if(!P.h2(a))return!b?P.h0(a):a
z=H.h([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaN(z)!==".."){if(0>=z.length)return H.b(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.b(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaN(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.b(z,0)
C.a.n(z,0,P.h0(z[0]))}return C.a.a1(z,"/")},
h0:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h1(J.hy(a,0)))for(y=1;y<z;++y){x=C.b.K(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.b(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.K(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cc("Invalid URL encoding"))}}return z},
dT:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.cs(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.K(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.hU(y.w(a,b,c))}else{u=H.h([],[P.o])
for(x=b;x<c;++x){w=y.K(a,x)
if(w>127)throw H.a(P.cc("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cc("Truncated URI"))
C.a.h(u,P.mE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isf",[P.o],"$asf")
return new P.kZ(!1).cK(u)},
h1:function(a){var z=a|32
return 97<=z&&z<=122}}},
mC:{"^":"i:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.m()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
mI:{"^":"i:42;",
$1:function(a){return P.dU(C.T,a,C.l,!1)}},
mL:{"^":"i:21;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.m(P.dU(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.m(P.dU(C.p,b,C.l,!0))}}},
mK:{"^":"i:45;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.bP(H.hs(b,"$isn")),y=this.a;z.I();)y.$2(a,H.L(z.gT(z)))}},
kN:{"^":"c;a,b,c",
geS:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.b(z,0)
y=this.a
z=z[0]+1
x=C.b.aq(y,"?",z)
w=y.length
if(x>=0){v=P.c6(y,x+1,w,C.n)
w=x}else v=null
z=new P.lt(this,"data",null,null,null,P.c6(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.b(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fv:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.K(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.K(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaN(z)
if(v!==44||x!==t+7||!C.b.ai(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.iJ(0,a,s,y)
else{r=P.h4(a,s,y,C.n,!0)
if(r!=null)a=C.b.b6(a,s,y,r)}return new P.kN(a,z,c)}}},
nc:{"^":"i:46;",
$1:function(a){return new Uint8Array(96)}},
nb:{"^":"i:54;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.b(z,a)
z=z[a]
J.hC(z,0,96,b)
return z}},
nd:{"^":"i;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.K(b,y)^96
if(x>=a.length)return H.b(a,x)
a[x]=c}}},
ne:{"^":"i;",
$3:function(a,b,c){var z,y,x
for(z=C.b.K(b,0),y=C.b.K(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.b(a,x)
a[x]=c}}},
mc:{"^":"c;a,b,c,d,e,f,r,x,0y",
gep:function(){return this.c>0},
ger:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.m()
y=this.e
if(typeof y!=="number")return H.k(y)
y=z+1<y
z=y}else z=!1
return z},
ges:function(){var z=this.f
if(typeof z!=="number")return z.E()
return z<this.r},
geq:function(){return this.r<this.a.length},
gdB:function(){return this.b===4&&C.b.ah(this.a,"http")},
gdC:function(){return this.b===5&&C.b.ah(this.a,"https")},
gc8:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdB()){this.x="http"
z="http"}else if(this.gdC()){this.x="https"
z="https"}else if(z===4&&C.b.ah(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ah(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
geT:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcU:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gc0:function(a){var z
if(this.ger()){z=this.d
if(typeof z!=="number")return z.m()
return P.bi(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdB())return 80
if(this.gdC())return 443
return 0},
geF:function(a){return C.b.w(this.a,this.e,this.f)},
gd0:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.E()
return z<y?C.b.w(this.a,z+1,y):""},
geo:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gc1:function(){var z=this.f
if(typeof z!=="number")return z.E()
if(z>=this.r)return C.U
z=P.j
return new P.fu(P.fx(this.gd0(this),C.l),[z,z])},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.j,null],"$asJ")
i=this.gc8()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.ger()?this.gc0(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ah(d,"/"))d="/"+d
g=P.dS(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cW(i,j,c,f,d,g,b)},
eM:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdL)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdL:1},
lt:{"^":"cW;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dd:function(a,b){var z=document.createElement("canvas")
return z},
ic:function(a){H.d(a,"$isae")
return"wheel"},
ex:function(a,b,c){return W.ir(a,null,null,b,null,null,null,c).eO(new W.iq(),P.j)},
ir:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bU
y=new P.aw(0,$.U,[z])
x=new P.lj(y,[z])
w=new XMLHttpRequest()
C.H.iQ(w,"GET",a,!0)
z=W.cm
v={func:1,ret:-1,args:[z]}
W.a2(w,"load",H.e(new W.is(w,x),v),!1,z)
W.a2(w,"error",H.e(x.gdX(),v),!1,z)
w.send()
return y},
eA:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$isez")
try{J.hF(z,a)}catch(x){H.ac(x)}return z},
cV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fL:function(a,b,c,d){var z,y
z=W.cV(W.cV(W.cV(W.cV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hf:function(a,b){var z
H.e(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dU(a,b)},
an:{"^":"ad;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ov:{"^":"dD;0t:x=,0v:y=","%":"Accelerometer|LinearAccelerationSensor"},
ow:{"^":"t;0k:length=","%":"AccessibleNodeList"},
ox:{"^":"an;0a6:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oy:{"^":"an;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
d9:{"^":"t;",$isd9:1,"%":";Blob"},
oF:{"^":"an;0a6:type}","%":"HTMLButtonElement"},
dc:{"^":"an;",
c6:function(a,b,c){if(c!=null)return a.getContext(b,P.nq(c,null))
return a.getContext(b)},
eX:function(a,b){return this.c6(a,b,null)},
$isdc:1,
"%":"HTMLCanvasElement"},
ei:{"^":"t;",$isei:1,"%":"CanvasRenderingContext2D"},
oH:{"^":"O;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oJ:{"^":"cB;0k:length=","%":"CSSPerspective"},
oK:{"^":"dj;0t:x=,0v:y=","%":"CSSPositionValue"},
oL:{"^":"cB;0t:x=,0v:y=","%":"CSSRotation"},
bm:{"^":"t;",$isbm:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oM:{"^":"cB;0t:x=,0v:y=","%":"CSSScale"},
i0:{"^":"ls;0k:length=",
eY:function(a,b){var z=a.getPropertyValue(this.dl(a,b))
return z==null?"":z},
dl:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.hA(a,b)
z[b]=y
return y},
hA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i5()+b
if(z in a)return z
return b},
hv:function(a,b,c,d){a.setProperty(b,c,d)},
gcF:function(a){return a.bottom},
gay:function(a){return a.height},
gb4:function(a){return a.left},
gbp:function(a){return a.right},
gbt:function(a){return a.top},
gaz:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i1:{"^":"c;",
gb4:function(a){return this.eY(a,"left")}},
dj:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cB:{"^":"t;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
oN:{"^":"dj;0k:length=","%":"CSSTransformValue"},
oO:{"^":"cB;0t:x=,0v:y=","%":"CSSTranslation"},
oP:{"^":"dj;0k:length=","%":"CSSUnparsedValue"},
oQ:{"^":"t;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
oR:{"^":"t;0t:x=,0v:y=","%":"DeviceAcceleration"},
oS:{"^":"t;",
j:function(a){return String(a)},
"%":"DOMException"},
oT:{"^":"i7;",
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":"DOMPoint"},
i7:{"^":"t;",
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":";DOMPointReadOnly"},
oU:{"^":"lv;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.v(c,"$isao",[P.a0],"$asao")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[[P.ao,P.a0]]},
$asy:function(){return[[P.ao,P.a0]]},
$isn:1,
$asn:function(){return[[P.ao,P.a0]]},
$isf:1,
$asf:function(){return[[P.ao,P.a0]]},
$asB:function(){return[[P.ao,P.a0]]},
"%":"ClientRectList|DOMRectList"},
i8:{"^":"t;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaz(a))+" x "+H.m(this.gay(a))},
C:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isao",[P.a0],"$asao")
if(!z)return!1
z=J.b2(b)
return a.left===z.gb4(b)&&a.top===z.gbt(b)&&this.gaz(a)===z.gaz(b)&&this.gay(a)===z.gay(b)},
gW:function(a){return W.fL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaz(a)&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF)},
gcF:function(a){return a.bottom},
gay:function(a){return a.height},
gb4:function(a){return a.left},
gbp:function(a){return a.right},
gbt:function(a){return a.top},
gaz:function(a){return a.width},
gt:function(a){return a.x},
gv:function(a){return a.y},
$isao:1,
$asao:function(){return[P.a0]},
"%":";DOMRectReadOnly"},
oV:{"^":"lx;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[P.j]},
$asy:function(){return[P.j]},
$isn:1,
$asn:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"DOMStringList"},
oW:{"^":"t;0k:length=","%":"DOMTokenList"},
lr:{"^":"cI;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return H.d(z[b],"$isad")},
n:function(a,b,c){var z
H.D(b)
H.d(c,"$isad")
z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.jf(this)
return new J.ax(z,z.length,0,[H.u(z,0)])},
aL:function(a,b,c,d){throw H.a(P.cp(null))},
$asy:function(){return[W.ad]},
$asn:function(){return[W.ad]},
$asf:function(){return[W.ad]}},
ad:{"^":"O;",
gcI:function(a){return new W.lr(a,a.children)},
gbL:function(a){return P.jY(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a0)},
j:function(a){return a.localName},
$isad:1,
"%":";Element"},
oX:{"^":"an;0a6:type}","%":"HTMLEmbedElement"},
ak:{"^":"t;",$isak:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ae:{"^":"t;",
dR:["f2",function(a,b,c,d){H.e(c,{func:1,args:[W.ak]})
if(c!=null)this.fi(a,b,c,!1)}],
fi:function(a,b,c,d){return a.addEventListener(b,H.bL(H.e(c,{func:1,args:[W.ak]}),1),!1)},
$isae:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fS|fT|fV|fW"},
b9:{"^":"d9;",$isb9:1,"%":"File"},
eu:{"^":"lC;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.b9]},
$asy:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$iseu:1,
$asB:function(){return[W.b9]},
"%":"FileList"},
pf:{"^":"ae;0k:length=","%":"FileWriter"},
pi:{"^":"an;0k:length=","%":"HTMLFormElement"},
bn:{"^":"t;",$isbn:1,"%":"Gamepad"},
pj:{"^":"dD;0t:x=,0v:y=","%":"Gyroscope"},
pk:{"^":"t;0k:length=","%":"History"},
pl:{"^":"lR;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bU:{"^":"ip;",
kn:function(a,b,c,d,e,f){return a.open(b,c)},
iQ:function(a,b,c,d){return a.open(b,c,d)},
$isbU:1,
"%":"XMLHttpRequest"},
iq:{"^":"i:61;",
$1:function(a){return H.d(a,"$isbU").responseText}},
is:{"^":"i:29;a,b",
$1:function(a){var z,y,x,w,v
H.d(a,"$iscm")
z=this.a
y=z.status
if(typeof y!=="number")return y.au()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aG(0,z)
else v.ih(a)}},
ip:{"^":"ae;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
cg:{"^":"t;0dZ:data=",$iscg:1,"%":"ImageData"},
ey:{"^":"an;",$isey:1,"%":"HTMLImageElement"},
ez:{"^":"an;0a6:type}",$isez:1,"%":"HTMLInputElement"},
bX:{"^":"dI;",$isbX:1,"%":"KeyboardEvent"},
pq:{"^":"an;0a6:type}","%":"HTMLLinkElement"},
pr:{"^":"t;",
j:function(a){return String(a)},
"%":"Location"},
ps:{"^":"dD;0t:x=,0v:y=","%":"Magnetometer"},
pu:{"^":"t;0k:length=","%":"MediaList"},
pv:{"^":"ae;0cN:enabled}","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
pw:{"^":"ae;",
dR:function(a,b,c,d){H.e(c,{func:1,args:[W.ak]})
if(b==="message")a.start()
this.f2(a,b,c,!1)},
"%":"MessagePort"},
px:{"^":"lX;",
i:function(a,b){return P.b7(a.get(H.L(b)))},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b7(y.value[1]))}},
gaM:function(a){var z=H.h([],[P.j])
this.A(a,new W.jv(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asay:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"MIDIInputMap"},
jv:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
py:{"^":"lY;",
i:function(a,b){return P.b7(a.get(H.L(b)))},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b7(y.value[1]))}},
gaM:function(a){var z=H.h([],[P.j])
this.A(a,new W.jw(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asay:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
jw:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bq:{"^":"t;",$isbq:1,"%":"MimeType"},
pz:{"^":"m_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbq")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isn:1,
$asn:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$asB:function(){return[W.bq]},
"%":"MimeTypeArray"},
aV:{"^":"dI;",$isaV:1,"%":"PointerEvent;DragEvent|MouseEvent"},
lq:{"^":"cI;a",
n:function(a,b,c){var z,y
H.D(b)
H.d(c,"$isO")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.b(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.ev(z,z.length,-1,[H.b8(C.W,z,"B",0)])},
aL:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
$asy:function(){return[W.O]},
$asn:function(){return[W.O]},
$asf:function(){return[W.O]}},
O:{"^":"ae;",
j4:function(a,b){var z,y
try{z=a.parentNode
J.hz(z,b,a)}catch(y){H.ac(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.f3(a):z},
hp:function(a,b,c){return a.replaceChild(b,c)},
$isO:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
jC:{"^":"m1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"NodeList|RadioNodeList"},
pH:{"^":"an;0a6:type}","%":"HTMLOListElement"},
pI:{"^":"an;0a6:type}","%":"HTMLObjectElement"},
br:{"^":"t;0k:length=",$isbr:1,"%":"Plugin"},
pM:{"^":"m5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbr")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.br]},
$asy:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asB:function(){return[W.br]},
"%":"PluginArray"},
cm:{"^":"ak;",$iscm:1,"%":"ProgressEvent|ResourceProgressEvent"},
pR:{"^":"t;0a6:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pS:{"^":"mb;",
i:function(a,b){return P.b7(a.get(H.L(b)))},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b7(y.value[1]))}},
gaM:function(a){var z=H.h([],[P.j])
this.A(a,new W.k6(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asay:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"RTCStatsReport"},
k6:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pU:{"^":"an;0a6:type}","%":"HTMLScriptElement"},
pW:{"^":"an;0k:length=","%":"HTMLSelectElement"},
dD:{"^":"ae;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bt:{"^":"ae;",$isbt:1,"%":"SourceBuffer"},
pX:{"^":"fT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbt")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bt]},
$asy:function(){return[W.bt]},
$isn:1,
$asn:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asB:function(){return[W.bt]},
"%":"SourceBufferList"},
pY:{"^":"an;0a6:type}","%":"HTMLSourceElement"},
bu:{"^":"t;",$isbu:1,"%":"SpeechGrammar"},
pZ:{"^":"me;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbu")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bu]},
$asy:function(){return[W.bu]},
$isn:1,
$asn:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asB:function(){return[W.bu]},
"%":"SpeechGrammarList"},
bv:{"^":"t;0k:length=",$isbv:1,"%":"SpeechRecognitionResult"},
q0:{"^":"mh;",
i:function(a,b){return a.getItem(H.L(b))},
n:function(a,b,c){a.setItem(b,H.L(c))},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaM:function(a){var z=H.h([],[P.j])
this.A(a,new W.kg(z))
return z},
gk:function(a){return a.length},
$asay:function(){return[P.j,P.j]},
$isJ:1,
$asJ:function(){return[P.j,P.j]},
"%":"Storage"},
kg:{"^":"i:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
q4:{"^":"an;0a6:type}","%":"HTMLStyleElement"},
bw:{"^":"t;",$isbw:1,"%":"CSSStyleSheet|StyleSheet"},
c1:{"^":"an;",$isc1:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bx:{"^":"ae;",$isbx:1,"%":"TextTrack"},
by:{"^":"ae;",$isby:1,"%":"TextTrackCue|VTTCue"},
q8:{"^":"mq;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isby")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.by]},
$asy:function(){return[W.by]},
$isn:1,
$asn:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asB:function(){return[W.by]},
"%":"TextTrackCueList"},
q9:{"^":"fW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbx")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bx]},
$asy:function(){return[W.bx]},
$isn:1,
$asn:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asB:function(){return[W.bx]},
"%":"TextTrackList"},
qa:{"^":"t;0k:length=","%":"TimeRanges"},
bA:{"^":"t;",$isbA:1,"%":"Touch"},
bB:{"^":"dI;",$isbB:1,"%":"TouchEvent"},
qb:{"^":"mw;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbA")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bA]},
$asy:function(){return[W.bA]},
$isn:1,
$asn:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asB:function(){return[W.bA]},
"%":"TouchList"},
qc:{"^":"t;0k:length=","%":"TrackDefaultList"},
dI:{"^":"ak;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
qe:{"^":"t;",
j:function(a){return String(a)},
"%":"URL"},
qg:{"^":"t;0t:x=","%":"VRStageBoundsPoint"},
qh:{"^":"ae;0k:length=","%":"VideoTrackList"},
c3:{"^":"aV;",
gio:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
gim:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isc3:1,
"%":"WheelEvent"},
lf:{"^":"ae;",
hq:function(a,b){return a.requestAnimationFrame(H.bL(H.e(b,{func:1,ret:-1,args:[P.a0]}),1))},
fD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
qm:{"^":"mY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbm")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$asB:function(){return[W.bm]},
"%":"CSSRuleList"},
qn:{"^":"i8;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isao",[P.a0],"$asao")
if(!z)return!1
z=J.b2(b)
return a.left===z.gb4(b)&&a.top===z.gbt(b)&&a.width===z.gaz(b)&&a.height===z.gay(b)},
gW:function(a){return W.fL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gay:function(a){return a.height},
gaz:function(a){return a.width},
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":"ClientRect|DOMRect"},
qp:{"^":"n_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbn")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isn:1,
$asn:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$asB:function(){return[W.bn]},
"%":"GamepadList"},
qq:{"^":"n1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"MozNamedAttrMap|NamedNodeMap"},
qr:{"^":"n3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbv")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bv]},
$asy:function(){return[W.bv]},
$isn:1,
$asn:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asB:function(){return[W.bv]},
"%":"SpeechRecognitionResultList"},
qs:{"^":"n5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbw")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bw]},
$asy:function(){return[W.bw]},
$isn:1,
$asn:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asB:function(){return[W.bw]},
"%":"StyleSheetList"},
ly:{"^":"cn;a,b,c,$ti",
iG:function(a,b,c,d){var z=H.u(this,0)
H.e(a,{func:1,ret:-1,args:[z]})
H.e(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
qo:{"^":"ly;a,b,c,$ti"},
lz:{"^":"f4;a,b,c,d,e,$ti",
hF:function(){var z=this.d
if(z!=null&&this.a<=0)J.hA(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.hf(new W.lA(c),W.ak)
z=new W.lz(0,a,b,z,!1,[e])
z.hF()
return z}}},
lA:{"^":"i:8;a",
$1:function(a){return this.a.$1(H.d(a,"$isak"))}},
B:{"^":"c;$ti",
ga4:function(a){return new W.ev(a,this.gk(a),-1,[H.b8(this,a,"B",0)])},
aL:function(a,b,c,d){H.x(d,H.b8(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ev:{"^":"c;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.X(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
ls:{"^":"t+i1;"},
lu:{"^":"t+y;"},
lv:{"^":"lu+B;"},
lw:{"^":"t+y;"},
lx:{"^":"lw+B;"},
lB:{"^":"t+y;"},
lC:{"^":"lB+B;"},
lQ:{"^":"t+y;"},
lR:{"^":"lQ+B;"},
lX:{"^":"t+ay;"},
lY:{"^":"t+ay;"},
lZ:{"^":"t+y;"},
m_:{"^":"lZ+B;"},
m0:{"^":"t+y;"},
m1:{"^":"m0+B;"},
m4:{"^":"t+y;"},
m5:{"^":"m4+B;"},
mb:{"^":"t+ay;"},
fS:{"^":"ae+y;"},
fT:{"^":"fS+B;"},
md:{"^":"t+y;"},
me:{"^":"md+B;"},
mh:{"^":"t+ay;"},
mp:{"^":"t+y;"},
mq:{"^":"mp+B;"},
fV:{"^":"ae+y;"},
fW:{"^":"fV+B;"},
mv:{"^":"t+y;"},
mw:{"^":"mv+B;"},
mX:{"^":"t+y;"},
mY:{"^":"mX+B;"},
mZ:{"^":"t+y;"},
n_:{"^":"mZ+B;"},
n0:{"^":"t+y;"},
n1:{"^":"n0+B;"},
n2:{"^":"t+y;"},
n3:{"^":"n2+B;"},
n4:{"^":"t+y;"},
n5:{"^":"n4+B;"}}],["","",,P,{"^":"",
nt:function(a){var z,y
z=J.M(a)
if(!!z.$iscg){y=z.gdZ(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fY(a.data,a.height,a.width)},
ns:function(a){if(a instanceof P.fY)return{data:a.a,height:a.b,width:a.c}
return a},
b7:function(a){var z,y,x,w,v
if(a==null)return
z=P.eM(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.L(y[w])
z.n(0,v,a[v])}return z},
nq:function(a,b){var z={}
a.A(0,new P.nr(z))
return z},
er:function(){var z=$.eq
if(z==null){z=J.d4(window.navigator.userAgent,"Opera",0)
$.eq=z}return z},
i5:function(){var z,y
z=$.en
if(z!=null)return z
y=$.eo
if(y==null){y=J.d4(window.navigator.userAgent,"Firefox",0)
$.eo=y}if(y)z="-moz-"
else{y=$.ep
if(y==null){y=!P.er()&&J.d4(window.navigator.userAgent,"Trident/",0)
$.ep=y}if(y)z="-ms-"
else z=P.er()?"-o-":"-webkit-"}$.en=z
return z},
ml:{"^":"c;",
el:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d4:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaC)return new Date(a.a)
if(!!y.$isk0)throw H.a(P.cp("structured clone of RegExp"))
if(!!y.$isb9)return a
if(!!y.$isd9)return a
if(!!y.$iseu)return a
if(!!y.$iscg)return a
if(!!y.$iseT||!!y.$isdx)return a
if(!!y.$isJ){x=this.el(a)
w=this.b
if(x>=w.length)return H.b(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.A(a,new P.mn(z,this))
return z.a}if(!!y.$isf){x=this.el(a)
z=this.b
if(x>=z.length)return H.b(z,x)
v=z[x]
if(v!=null)return v
return this.ik(a,x)}throw H.a(P.cp("structured clone of other type"))},
ik:function(a,b){var z,y,x,w
z=J.aA(a)
y=z.gk(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.k(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.d4(z.i(a,w)))
return x}},
mn:{"^":"i:10;a,b",
$2:function(a,b){this.a.a[a]=this.b.d4(b)}},
fY:{"^":"c;dZ:a>,b,c",$iscg:1},
nr:{"^":"i:10;a",
$2:function(a,b){this.a[a]=b}},
mm:{"^":"ml;a,b"},
ii:{"^":"cI;a,b",
gbA:function(){var z,y,x
z=this.b
y=H.aL(z,"y",0)
x=W.ad
return new H.jm(new H.ld(z,H.e(new P.ij(),{func:1,ret:P.N,args:[y]}),[y]),H.e(new P.ik(),{func:1,ret:x,args:[y]}),[y,x])},
n:function(a,b,c){var z
H.D(b)
H.d(c,"$isad")
z=this.gbA()
J.hD(z.b.$1(J.d5(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aL:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gk:function(a){return J.aq(this.gbA().a)},
i:function(a,b){var z=this.gbA()
return z.b.$1(J.d5(z.a,b))},
ga4:function(a){var z=P.jg(this.gbA(),!1,W.ad)
return new J.ax(z,z.length,0,[H.u(z,0)])},
$asy:function(){return[W.ad]},
$asn:function(){return[W.ad]},
$asf:function(){return[W.ad]}},
ij:{"^":"i:32;",
$1:function(a){return!!J.M(H.d(a,"$isO")).$isad}},
ik:{"^":"i:28;",
$1:function(a){return H.l(H.d(a,"$isO"),"$isad")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bd:{"^":"c;t:a>,v:b>,$ti",
j:function(a){return"Point("+H.m(this.a)+", "+H.m(this.b)+")"},
C:function(a,b){var z,y,x
if(b==null)return!1
z=H.b1(b,"$isbd",[P.a0],null)
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gv(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gW:function(a){var z,y
z=J.bk(this.a)
y=J.bk(this.b)
return P.fK(P.c4(P.c4(0,z),y))},
m:function(a,b){var z,y,x,w
z=this.$ti
H.v(b,"$isbd",z,"$asbd")
y=this.a
if(typeof y!=="number")return y.m()
x=H.u(this,0)
y=H.x(C.i.m(y,b.a),x)
w=this.b
if(typeof w!=="number")return w.m()
return new P.bd(y,H.x(C.i.m(w,b.b),x),z)}},
m6:{"^":"c;$ti",
gbp:function(a){var z=this.a
if(typeof z!=="number")return z.m()
return H.x(z+this.c,H.u(this,0))},
gcF:function(a){var z=this.b
if(typeof z!=="number")return z.m()
return H.x(z+this.d,H.u(this,0))},
j:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
C:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b1(b,"$isao",[P.a0],"$asao")
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gb4(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbt(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.m()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gbp(b)){if(typeof x!=="number")return x.m()
z=H.x(x+this.d,w)===y.gcF(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bk(z)
x=this.b
w=J.bk(x)
if(typeof z!=="number")return z.m()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.m()
v=H.x(x+this.d,v)
return P.fK(P.c4(P.c4(P.c4(P.c4(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dY:function(a,b){var z,y
H.v(b,"$isbd",[P.a0],"$asbd")
z=b.a
y=this.a
if(typeof z!=="number")return z.au()
if(typeof y!=="number")return H.k(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.au()
if(typeof y!=="number")return H.k(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ao:{"^":"m6;b4:a>,bt:b>,az:c>,ay:d>,$ti",q:{
jY:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.E()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.E()
if(d<0)y=-d*0
else y=d
return new P.ao(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",oY:{"^":"Z;0t:x=,0v:y=","%":"SVGFEBlendElement"},oZ:{"^":"Z;0t:x=,0v:y=","%":"SVGFEColorMatrixElement"},p_:{"^":"Z;0t:x=,0v:y=","%":"SVGFEComponentTransferElement"},p0:{"^":"Z;0t:x=,0v:y=","%":"SVGFECompositeElement"},p1:{"^":"Z;0t:x=,0v:y=","%":"SVGFEConvolveMatrixElement"},p2:{"^":"Z;0t:x=,0v:y=","%":"SVGFEDiffuseLightingElement"},p3:{"^":"Z;0t:x=,0v:y=","%":"SVGFEDisplacementMapElement"},p4:{"^":"Z;0t:x=,0v:y=","%":"SVGFEFloodElement"},p5:{"^":"Z;0t:x=,0v:y=","%":"SVGFEGaussianBlurElement"},p6:{"^":"Z;0t:x=,0v:y=","%":"SVGFEImageElement"},p7:{"^":"Z;0t:x=,0v:y=","%":"SVGFEMergeElement"},p8:{"^":"Z;0t:x=,0v:y=","%":"SVGFEMorphologyElement"},p9:{"^":"Z;0t:x=,0v:y=","%":"SVGFEOffsetElement"},pa:{"^":"Z;0t:x=,0v:y=","%":"SVGFEPointLightElement"},pb:{"^":"Z;0t:x=,0v:y=","%":"SVGFESpecularLightingElement"},pc:{"^":"Z;0t:x=,0v:y=","%":"SVGFESpotLightElement"},pd:{"^":"Z;0t:x=,0v:y=","%":"SVGFETileElement"},pe:{"^":"Z;0t:x=,0v:y=","%":"SVGFETurbulenceElement"},pg:{"^":"Z;0t:x=,0v:y=","%":"SVGFilterElement"},ph:{"^":"bT;0t:x=,0v:y=","%":"SVGForeignObjectElement"},io:{"^":"bT;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bT:{"^":"Z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},pm:{"^":"bT;0t:x=,0v:y=","%":"SVGImageElement"},bY:{"^":"t;",$isbY:1,"%":"SVGLength"},pp:{"^":"lT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isbY")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bY]},
$isn:1,
$asn:function(){return[P.bY]},
$isf:1,
$asf:function(){return[P.bY]},
$asB:function(){return[P.bY]},
"%":"SVGLengthList"},pt:{"^":"Z;0t:x=,0v:y=","%":"SVGMaskElement"},c_:{"^":"t;",$isc_:1,"%":"SVGNumber"},pG:{"^":"m3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isc_")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$asy:function(){return[P.c_]},
$isn:1,
$asn:function(){return[P.c_]},
$isf:1,
$asf:function(){return[P.c_]},
$asB:function(){return[P.c_]},
"%":"SVGNumberList"},pL:{"^":"Z;0t:x=,0v:y=","%":"SVGPatternElement"},pN:{"^":"t;0t:x=,0v:y=","%":"SVGPoint"},pO:{"^":"t;0k:length=","%":"SVGPointList"},pP:{"^":"t;0t:x=,0v:y=","%":"SVGRect"},pQ:{"^":"io;0t:x=,0v:y=","%":"SVGRectElement"},pV:{"^":"Z;0a6:type}","%":"SVGScriptElement"},q2:{"^":"mk;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$asy:function(){return[P.j]},
$isn:1,
$asn:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"SVGStringList"},q5:{"^":"Z;0a6:type}","%":"SVGStyleElement"},Z:{"^":"ad;",
gcI:function(a){return new P.ii(a,new W.lq(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},q6:{"^":"bT;0t:x=,0v:y=","%":"SVGSVGElement"},km:{"^":"bT;","%":"SVGTextPathElement;SVGTextContentElement"},q7:{"^":"km;0t:x=,0v:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c2:{"^":"t;",$isc2:1,"%":"SVGTransform"},qd:{"^":"my;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isc2")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$asy:function(){return[P.c2]},
$isn:1,
$asn:function(){return[P.c2]},
$isf:1,
$asf:function(){return[P.c2]},
$asB:function(){return[P.c2]},
"%":"SVGTransformList"},qf:{"^":"bT;0t:x=,0v:y=","%":"SVGUseElement"},lS:{"^":"t+y;"},lT:{"^":"lS+B;"},m2:{"^":"t+y;"},m3:{"^":"m2+B;"},mj:{"^":"t+y;"},mk:{"^":"mj+B;"},mx:{"^":"t+y;"},my:{"^":"mx+B;"}}],["","",,P,{"^":"",W:{"^":"c;",$isn:1,
$asn:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$iskz:1}}],["","",,P,{"^":"",oz:{"^":"t;0k:length=","%":"AudioBuffer"},ea:{"^":"ae;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oA:{"^":"lp;",
i:function(a,b){return P.b7(a.get(H.L(b)))},
A:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b7(y.value[1]))}},
gaM:function(a){var z=H.h([],[P.j])
this.A(a,new P.hH(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asay:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"AudioParamMap"},hH:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},hI:{"^":"ea;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oB:{"^":"t;0cN:enabled}","%":"AudioTrack"},oC:{"^":"ae;0k:length=","%":"AudioTrackList"},hL:{"^":"ae;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oD:{"^":"ea;0a6:type}","%":"BiquadFilterNode"},pJ:{"^":"hL;0k:length=","%":"OfflineAudioContext"},pK:{"^":"hI;0a6:type}","%":"Oscillator|OscillatorNode"},lp:{"^":"t+ay;"}}],["","",,P,{"^":"",dC:{"^":"t;",
jd:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$iscg)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ns(g))
return}if(!!z.$isey)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cc("Incorrect number or type of arguments"))},
jc:function(a,b,c,d,e,f,g){return this.jd(a,b,c,d,e,f,g,null,null,null)},
$isdC:1,
"%":"WebGLRenderingContext"},kH:{"^":"t;",$iskH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",q_:{"^":"mg;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.b7(a.item(b))},
n:function(a,b,c){H.D(b)
H.d(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.i(a,b)},
$asy:function(){return[[P.J,,,]]},
$isn:1,
$asn:function(){return[[P.J,,,]]},
$isf:1,
$asf:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},mf:{"^":"t+y;"},mg:{"^":"mf+B;"}}],["","",,O,{"^":"",aO:{"^":"c;0a,0b,0c,0d,$ti",
cc:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
d7:function(a,b,c){var z=H.aL(this,"aO",0)
H.e(b,{func:1,ret:P.N,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.o,[P.n,z]]}
H.e(a,z)
H.e(c,z)
this.b=b
this.c=a
this.d=c},
bv:function(a,b){return this.d7(a,null,b)},
he:function(a){var z
H.v(a,"$isn",[H.aL(this,"aO",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f8:function(a,b){var z
H.v(b,"$isn",[H.aL(this,"aO",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
fa:function(a,b){var z
H.v(b,"$isn",[H.aL(this,"aO",0)],"$asn")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.u(z,0)])},
L:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
aq:function(a,b,c){H.x(b,H.aL(this,"aO",0))
return C.a.aq(this.a,b,c)},
P:function(a,b){return this.aq(a,b,0)},
h:function(a,b){var z,y,x
z=H.aL(this,"aO",0)
H.x(b,z)
z=[z]
if(this.he(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f8(x,H.h([b],z))}},
i:function(a,b){var z=this.a
if(b>=z.length)return H.b(z,b)
return z[b]},
$isn:1,
q:{
df:function(a){var z=new O.aO([a])
z.cc(a)
return z}}},du:{"^":"c;0a,0b",
gk:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
f9:function(a){var z=this.b
if(!(z==null))z.J(a)},
aQ:function(){return this.f9(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaN(z)
else return V.cj()},
eI:function(a){var z=this.a
if(a==null)C.a.h(z,V.cj())
else C.a.h(z,a)
this.aQ()},
d_:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",d8:{"^":"c;"},ai:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a8:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scN:function(a,b){this.b=b},
dn:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();){y=z.d
if(y.f==null)y.dn()}},
sd8:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.e(this.geC(),{func:1,ret:-1,args:[D.w]})
C.a.a5(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.e(this.geC(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.ap])
w.b=!0
this.ag(w)}},
sb8:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.e(this.geD(),{func:1,ret:-1,args:[D.w]})
C.a.a5(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gD()
z.toString
y=H.e(this.geD(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}this.dn()
w=new D.E("technique",x,this.f,this,[O.co])
w.b=!0
this.ag(w)}},
sbk:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.e(this.geB(),{func:1,ret:-1,args:[D.w]})
C.a.a5(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.e(this.geB(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.E("mover",z,a,this,[U.au])
w.b=!0
this.ag(w)}},
bf:function(){var z,y
z=this.d
y=z!=null?V.f2(null,z.bf()):null
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)y=V.f2(y,z.d.bf())
return y},
j7:function(a,b){var z,y,x,w
z=this.bf()
b=new V.az(0,0,0).F(0,z.gie())
y=z.d
x=z.e
if(x>y)y=x
x=z.f
if(x>y)y=x
if(y===0)return
w=a/y
this.bJ(V.eR(w,w,w,1).l(0,V.eS(b.a,b.b,b.c)))},
j6:function(a){return this.j7(a,null)},
bJ:function(a){var z=this.c
if(z!=null)z.bJ(a)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)z.d.bJ(a)},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ba(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.aS])
w.b=!0
this.ag(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)z.d.an(0,b)},
aO:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.l(0,z.ga_(z)))
z.aQ()
a.eJ(this.f)
z=a.dy
x=(z&&C.a).gaN(z)
if(x!=null&&this.d!=null)x.eL(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)z.d.aO(a)
a.eG()
a.dx.d_()},
gD:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.J(a)},
a3:function(){return this.ag(null)},
iO:[function(a){H.d(a,"$isw")
this.e=null
this.ag(a)},function(){return this.iO(null)},"kl","$1","$0","geC",0,2,3],
iP:[function(a){this.ag(H.d(a,"$isw"))},function(){return this.iP(null)},"km","$1","$0","geD",0,2,3],
iN:[function(a){this.ag(H.d(a,"$isw"))},function(){return this.iN(null)},"kk","$1","$0","geB",0,2,3],
iL:[function(a){this.ag(H.d(a,"$isw"))},function(){return this.iL(null)},"ki","$1","$0","geA",0,2,3],
kh:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isn",[E.ai],"$asn")
for(z=b.length,y=this.geA(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.G)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.cf()
t.a=H.h([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.e(y,x)
C.a.h(t.a,y)}}this.a3()},"$2","giK",8,0,12],
kj:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isn",[E.ai],"$asn")
for(z=b.length,y=this.geA(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.G)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.cf()
t.a=H.h([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.e(y,x)
C.a.a5(t.a,y)}}this.a3()},"$2","giM",8,0,12],
$isb4:1,
q:{
cC:function(a,b,c,d,e,f){var z,y
z=new E.ai()
z.a=d
z.b=!0
y=O.df(E.ai)
z.y=y
y.bv(z.giK(),z.giM())
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
z.sd8(0,e)
z.sb8(f)
z.sbk(c)
return z}}},k1:{"^":"c;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f7:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aC(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.du()
y=[V.aS]
z.a=H.h([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.e(new E.k3(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.du()
z.a=H.h([],y)
v=z.gD()
v.toString
x=H.e(new E.k4(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.du()
z.a=H.h([],y)
y=z.gD()
y.toString
w=H.e(new E.k5(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.co])
this.dy=z
C.a.h(z,null)
this.fr=new H.bo(0,0,[P.j,A.dE])},
gj2:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.l(0,y.ga_(y))
this.z=y
z=y}return z},
geH:function(){var z,y
z=this.ch
if(z==null){z=this.gj2()
y=this.dx
y=z.l(0,y.ga_(y))
this.ch=y
z=y}return z},
geV:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.ga_(z)
y=this.dx
y=z.l(0,y.ga_(y))
this.cx=y
z=y}return z},
eJ:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaN(z):a;(z&&C.a).h(z,y)},
eG:function(){var z=this.dy
if(z.length>1)z.pop()},
dS:function(a){var z=a.b
if(z.length===0)throw H.a(P.q("May not cache a shader with no name."))
if(this.fr.cJ(0,z))throw H.a(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.n(0,z,a)},
q:{
k2:function(a,b){var z=new E.k1(a,b)
z.f7(a,b)
return z}}},k3:{"^":"i:16;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.ch=null}},k4:{"^":"i:16;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},k5:{"^":"i:16;a",
$1:function(a){var z
H.d(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},ks:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0a8:x@,0y,0z,0Q,0ch",
gD:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
fc:[function(a){var z
H.d(a,"$isw")
z=this.x
if(!(z==null))z.J(a)
this.j5()},function(){return this.fc(null)},"fb","$1","$0","gde",0,2,3],
giy:function(){var z,y,x
z=Date.now()
y=C.d.ac(P.es(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aC(z,!1)
return x/y},
dI:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.k(z)
x=C.i.c_(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c_(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
j5:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.e(new E.ku(this),{func:1,ret:-1,args:[P.a0]})
C.B.fD(z)
C.B.hq(z,W.hf(y,P.a0))}},
j3:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dI()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aC(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aQ()
w=x.db
C.a.sk(w.a,0)
w.aQ()
w=x.dx
C.a.sk(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aO(this.e)}}catch(v){z=H.ac(v)
y=H.bh(v)
P.cb("Error: "+H.m(z))
P.cb("Stack: "+H.m(y))
throw H.a(z)}},
q:{
kt:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isdc)return E.fa(a,!0,!0,!0,!1)
y=W.dd(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcI(a).h(0,y)
w=E.fa(y,!0,!0,!0,!1)
w.a=a
return w},
fa:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ks()
y=P.ja(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.k.c6(a,"webgl",y)
x=H.d(x==null?C.k.c6(a,"experimental-webgl",y):x,"$isdC")
if(x==null)H.p(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k2(x,a)
w=new T.kn(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kU(a)
v=new X.j4()
v.c=new X.aU(!1,!1,!1)
v.d=P.jd(null,null,null,P.o)
w.b=v
v=new X.jx(w)
v.f=0
v.r=new V.a3(0,0)
v.x=new V.a3(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ji(w)
v.r=0
v.x=new V.a3(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kw(w)
v.e=0
v.f=new V.a3(0,0)
v.r=new V.a3(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.f4,P.c]])
w.z=v
u=document
t=W.aV
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.e(w.gh1(),s),!1,t))
v=w.z
r=W.ak
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.e(w.gh4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.e(w.gfZ(),q),!1,r))
v=w.z
p=W.bX
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.e(w.gh6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.e(w.gh5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.e(w.gh9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.e(w.ghb(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.e(w.gha(),s),!1,t))
p=w.z
o=W.c3;(p&&C.a).h(p,W.a2(a,H.L(W.ic(a)),H.e(w.ghc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.e(w.gh2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.e(w.gh3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.e(w.ghd(),q),!1,r))
r=w.z
q=W.bB
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.e(w.ghk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.e(w.ghi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.e(w.ghj(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aC(Date.now(),!1)
z.ch=0
z.dI()
return z}}},ku:{"^":"i:37;a",
$1:function(a){var z
H.oj(a)
z=this.a
if(z.z){z.z=!1
z.j3()}}}}],["","",,Z,{"^":"",fC:{"^":"c;a,b",q:{
dO:function(a,b,c){var z
H.v(c,"$isf",[P.o],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bG(c)),35044)
a.bindBuffer(b,null)
return new Z.fC(b,z)}}},ee:{"^":"d8;a,b,c,d,e",
aF:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ac(y)
x=P.q('Failed to bind buffer attribute "'+J.ar(this.a)+'": '+H.m(z))
throw H.a(x)}},
j:function(a){return"["+J.ar(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}},fD:{"^":"c;a",$isoE:1},cz:{"^":"c;a,0b,c,d",
ak:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aF:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aF(a)},
eQ:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aO:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.b(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
eE:function(a){this.aF(a)
this.aO(a)
this.eQ(a)},
j:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.G)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ar(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.a1(y,", ")+"\nAttrs:   "+C.a.a1(u,", ")},
$iskl:1},ef:{"^":"c;0a",$iskl:1},cF:{"^":"c;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bs(this.c)+"'")+"]"}},be:{"^":"c;a",
gd9:function(a){var z,y
z=this.a
y=(z&$.$get$aK().a)!==0?3:0
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$b5().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=4
if((z&$.$get$bf().a)!==0)++y
return(z&$.$get$aY().a)!==0?y+4:y},
ib:function(a){var z,y,x
z=$.$get$aK()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fB()},
P:function(a,b){var z,y
z=this.a
if((z&$.$get$aK().a)!==0)y=1
else y=0
if((z&$.$get$aJ().a)!==0)++y
if((z&$.$get$aI().a)!==0)++y
if((z&$.$get$aZ().a)!==0)++y
if((z&$.$get$b_().a)!==0)++y
if((z&$.$get$b5().a)!==0)++y
if((z&$.$get$bD().a)!==0)++y
if((z&$.$get$bf().a)!==0)++y;(z&$.$get$aY().a)!==0
return-1},
C:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.j])
y=this.a
if((y&$.$get$aK().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a1(z,"|")},
q:{
aH:function(a){return new Z.be(a)}}}}],["","",,D,{"^":"",de:{"^":"c;"},cf:{"^":"c;0a,0b,0c",
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.A(y,new D.ih(z))
return x!==0},
ip:function(){return this.J(null)},
j8:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.J(y)}}},
b7:function(a){return this.j8(a,!0,!1)},
q:{
S:function(){var z=new D.cf()
z.a=H.h([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},ih:{"^":"i:38;a",
$1:function(a){var z
H.e(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"c;a,0b"},cG:{"^":"w;c,d,a,0b,$ti"},cH:{"^":"w;c,d,a,0b,$ti"},E:{"^":"w;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}}],["","",,O,{"^":"",
hn:function(a){var z=C.b.iC(a,"/")
if(z<=0)return a
return C.b.w(a,0,z)},
hd:function(a){var z,y,x
z=P.dB("([^\\s]+)",!0,!1)
$.hc=z
y=z.iu(a)
if(y==null)return H.h([],[P.j])
z=y.b
if(1>=z.length)return H.b(z,1)
x=z[1]
return H.h([x,C.b.d3(C.b.aA(a,x.length))],[P.j])},
cY:function(a){var z,y,x
z=H.h([],[P.j])
y=P.dB("([^\\s]+)",!0,!1)
$.hc=y
y=new H.lg(y,a,0)
for(;y.I();){x=y.d.b
if(1>=x.length)return H.b(x,1)
C.a.h(z,x[1])}return z},
b6:function(a){var z,y,x,w
z=O.cY(a)
y=H.h([],[P.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
C.a.h(y,P.nw(z[w],null))}return y},
jy:{"^":"c;a,0dD:b<,0c",
as:function(a,b,c){var z=0,y=P.aa(null),x=this
var $async$as=P.ab(function(d,e){if(d===1)return P.a7(e,y)
while(true)switch(z){case 0:z=2
return P.am(x.ar(H.h(a.split("\n"),[P.j]),b,!1),$async$as)
case 2:return P.a8(null,y)}})
return P.a9($async$as,y)},
ar:function(a,b,c){H.v(a,"$isf",[P.j],"$asf")
return this.j0(a,b,!1)},
j0:function(a,b,c){var z=0,y=P.aa(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$ar=P.ab(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d2(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.b(a,q)
z=1
break}z=10
return P.am(t.a7(a[q],b,!1),$async$ar)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.q("Line "+H.m(J.cv(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cv(s,1)
z=3
break
case 5:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$ar,y)},
a7:function(a,b,c){H.L(a)
return this.iZ(a,b,!1)},
iZ:function(a,b,c){var z=0,y=P.aa(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$a7=P.ab(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e6(a,"#")
if(J.e5(s,0))a=J.e7(a,0,s)
a=J.d7(a)
if(J.aq(a)<=0){z=1
break}r=O.hd(a)
if(J.aq(r)<1){z=1
break}case 7:switch(J.X(r,0)){case"newmtl":z=9
break
case"Ka":z=10
break
case"Kd":z=11
break
case"Ks":z=12
break
case"Ns":z=13
break
case"d":z=14
break
case"Tr":z=15
break
case"map_Ka":z=16
break
case"map_Kd":z=17
break
case"map_Ks":z=18
break
case"map_d":z=19
break
case"map_bump":z=20
break
case"bump":z=21
break
default:z=22
break}break
case 9:p=J.X(r,1)
o=O.eO()
t.c=o
t.b.n(0,p,o)
z=1
break
case 10:n=O.b6(J.X(r,1))
t.c.r.sS(0,V.dg(n))
z=1
break
case 11:n=O.b6(J.X(r,1))
t.c.x.sS(0,V.dg(n))
z=1
break
case 12:n=O.b6(J.X(r,1))
t.c.z.sS(0,V.dg(n))
z=1
break
case 13:n=O.b6(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.b(n,0)
z=1
break}m=n[0]
o.toString
if(m==null)m=100
if(m<=0)o.dW(0)
else if(o.c===C.c){o.c=C.h
o.cb()
o.bG(100)
p=o.a
p.a=null
p.H(null)}o.bG(m)
z=1
break
case 14:n=O.b6(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.b(n,0)
z=1
break}o.seU(0,n[0])
z=1
break
case 15:n=O.b6(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.b(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.k(p)
z=1
break}o.seU(0,1-p)
z=1
break
case 16:z=23
return P.am(t.cr(J.X(r,1),b),$async$a7)
case 23:z=1
break
case 17:z=24
return P.am(t.cs(J.X(r,1),b),$async$a7)
case 24:z=1
break
case 18:z=25
return P.am(t.ct(J.X(r,1),b),$async$a7)
case 25:z=1
break
case 19:z=26
return P.am(t.cq(J.X(r,1),b),$async$a7)
case 26:z=1
break
case 20:z=27
return P.am(t.bB(J.X(r,1),b),$async$a7)
case 27:z=1
break
case 21:z=28
return P.am(t.bB(J.X(r,1),b),$async$a7)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
k=v
q=H.ac(k)
p=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$a7,y)},
cr:function(a,b){var z=0,y=P.aa(null),x=this,w
var $async$cr=P.ab(function(c,d){if(c===1)return P.a7(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sbr(x.a.bj(w))
return P.a8(null,y)}})
return P.a9($async$cr,y)},
cs:function(a,b){var z=0,y=P.aa(null),x=this,w
var $async$cs=P.ab(function(c,d){if(c===1)return P.a7(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sbr(x.a.bj(w))
return P.a8(null,y)}})
return P.a9($async$cs,y)},
ct:function(a,b){var z=0,y=P.aa(null),x=this,w
var $async$ct=P.ab(function(c,d){if(c===1)return P.a7(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sbr(x.a.bj(w))
return P.a8(null,y)}})
return P.a9($async$ct,y)},
cq:function(a,b){var z=0,y=P.aa(null),x=this,w
var $async$cq=P.ab(function(c,d){if(c===1)return P.a7(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sbr(x.a.bj(w))
return P.a8(null,y)}})
return P.a9($async$cq,y)},
bB:function(a,b){var z=0,y=P.aa(null),x=this,w
var $async$bB=P.ab(function(c,d){if(c===1)return P.a7(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sbr(x.a.bj(w))
return P.a8(null,y)}})
return P.a9($async$bB,y)},
q:{
ck:function(a,b,c){return O.jz(a,b,!1)},
jz:function(a,b,c){var z=0,y=P.aa([P.J,P.j,O.cJ]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$ck=P.ab(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.hn(a)
p=new O.jy(b)
p.b=new H.bo(0,0,[P.j,O.cJ])
s=p
z=7
return P.am(W.ex(a,null,null),$async$ck)
case 7:r=e
z=8
return P.am(s.as(r,t,!1),$async$ck)
case 8:o=s.gdD()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.ac(m)
P.cb(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$ck,y)}}},
h6:{"^":"c;a,0b"},
jE:{"^":"c;a,0b,0c,0d,0dD:e<,0f,0r,0x,0y,0z",
gis:function(){var z,y,x
z=this.z
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.b(y,0)
return y[0]}return z},
as:function(a,b,c){var z=0,y=P.aa(null),x=this
var $async$as=P.ab(function(d,e){if(d===1)return P.a7(e,y)
while(true)switch(z){case 0:z=2
return P.am(x.ar(H.h(a.split("\n"),[P.j]),b,!1),$async$as)
case 2:return P.a8(null,y)}})
return P.a9($async$as,y)},
ar:function(a,b,c){H.v(a,"$isf",[P.j],"$asf")
return this.j1(a,b,!1)},
j1:function(a,b,c){var z=0,y=P.aa(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$ar=P.ab(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d2(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.b(a,q)
z=1
break}z=10
return P.am(t.a7(a[q],b,!1),$async$ar)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.q("Line "+H.m(J.cv(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cv(s,1)
z=3
break
case 5:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$ar,y)},
a7:function(a,b,c){H.L(a)
return this.j_(a,b,!1)},
j_:function(a,b,c){var z=0,y=P.aa(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a7=P.ab(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e6(a,"#")
if(J.e5(s,0))a=J.e7(a,0,s)
a=J.d7(a)
if(J.aq(a)<=0){z=1
break}r=O.hd(a)
if(J.aq(r)<1){z=1
break}case 7:switch(J.X(r,0)){case"v":z=9
break
case"vt":z=10
break
case"vn":z=11
break
case"p":z=12
break
case"l":z=13
break
case"f":z=14
break
case"mtllib":z=15
break
case"usemtl":z=16
break
case"g":z=17
break
case"o":z=18
break
default:z=19
break}break
case 9:p=O.b6(J.X(r,1))
o=p.length
if(o<3)H.p(P.q("Positions must have at least 3 numbers."))
if(o>4)H.p(P.q("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.b(p,3)
z=1
break}o=p[3]
if(!$.r.$2(o,1))H.p(P.q("Currently, non-one w values in positions are not supported."))}o=t.b
n=p.length
if(0>=n){x=H.b(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.b(p,1)
z=1
break}l=p[1]
if(2>=n){x=H.b(p,2)
z=1
break}l=[m,l,p[2]]
l=new O.h6(new V.az(l[0],l[1],l[2]))
l.b=H.h([],[F.I])
C.a.h(o,l)
z=1
break
case 10:p=O.b6(J.X(r,1))
o=p.length
if(o<2)H.p(P.q("Textures must have at least 2 numbers."))
if(o>3)H.p(P.q("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.b(p,2)
z=1
break}o=p[2]
if(!$.r.$2(o,0))H.p(P.q("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.b(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.b(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.a3(m[0],m[1]))
z=1
break
case 11:p=O.b6(J.X(r,1))
o=p.length
if(o!==3)H.p(P.q("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.b(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.b(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.b(p,2)
z=1
break}C.a.h(n,new V.F(m,l,p[2]))
z=1
break
case 12:t.hn(J.X(r,1))
z=1
break
case 13:t.hm(J.X(r,1))
z=1
break
case 14:t.hl(J.X(r,1))
z=1
break
case 15:z=20
return P.am(t.bC(J.X(r,1),b,!1),$async$a7)
case 20:z=1
break
case 16:o=J.X(r,1)
t.r=t.e.i(0,o)
t.bH()
z=1
break
case 17:t.f=J.X(r,1)
t.bH()
z=1
break
case 18:t.f=J.X(r,1)
t.bH()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.ac(j)
o=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$a7,y)},
bH:function(){var z,y,x
if(this.y==null||this.x.a.c.length!==0){z=F.al()
this.x=z
z=E.cC(null,!0,null,"",z,null)
this.y=z
this.z.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)C.a.sk(z[x].b,0)}this.y.sb8(this.r)
this.y.a=this.f},
cd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.b(z,0)
x=P.bi(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.E()
if(x<-w||x>w)throw H.a(P.q("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.bi(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.E()
if(u<-w||u>w)throw H.a(P.q("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.b(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.bi(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.E()
if(q<-w||q>w)throw H.a(P.q("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.b(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.b(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.G)(y),++n){m=y[n]
if(J.Q(m.y,r)&&J.Q(m.r,p))return m}m=F.bC(null,null,null,null,null,null,null,null,0)
m.saa(0,o.a)
if(!J.Q(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a3()}m.sbl(p)
this.x.a.h(0,m)
C.a.h(o.b,m)
return m},
hn:function(a){var z,y,x,w
z=O.cY(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
C.a.h(y,this.cd(z[w]))}this.x.b.ia(y)},
hm:function(a){var z,y,x,w
z=O.cY(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
C.a.h(y,this.cd(z[w]))}this.x.c.i9(y)},
hl:function(a){var z,y,x,w
z=O.cY(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
C.a.h(y,this.cd(z[w]))}this.x.d.i8(y)},
bC:function(a,b,c){var z=0,y=P.aa(null),x=this,w
var $async$bC=P.ab(function(d,e){if(d===1)return P.a7(e,y)
while(true)switch(z){case 0:z=2
return P.am(O.ck(b+"/"+a,x.a,!1),$async$bC)
case 2:w=e
x.e.i7(0,w)
return P.a8(null,y)}})
return P.a9($async$bC,y)},
q:{
cl:function(a,b,c,d){return O.jF(a,b,c,!1)},
jF:function(a,b,c,d){var z=0,y=P.aa(E.ai),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$cl=P.ab(function(e,f){if(e===1){v=f
z=w}while(true)switch(z){case 0:w=4
t=O.hn(a)
p=new O.jE(b)
p.b=H.h([],[O.h6])
p.c=H.h([],[V.a3])
p.d=H.h([],[V.F])
p.e=new H.bo(0,0,[P.j,O.cJ])
p.f=""
o=O.eO()
n=o.r
n.sS(0,new V.R(0.35,0.35,0.35))
n=o.x
n.sS(0,new V.R(0.65,0.65,0.65))
p.r=o
p.z=E.cC(null,!0,null,"",null,null)
p.bH()
s=p
z=7
return P.am(W.ex(a,null,null),$async$cl)
case 7:r=f
z=8
return P.am(s.as(r,t,!1),$async$cl)
case 8:P.cb("Done.")
o=s.gis()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.ac(l)
P.cb(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a8(x,y)
case 2:return P.a7(v,y)}})
return P.a9($async$cl,y)}}}}],["","",,X,{"^":"",eg:{"^":"c;a,b",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.C(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)},
q:{"^":"oG<"}},eI:{"^":"c;a,b",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.C(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}},eJ:{"^":"w;c,a,0b"},j4:{"^":"c;0a,0b,0c,0d",
iW:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eJ(a,this)
y.b=!0
return z.J(y)},
iS:function(a){var z,y
this.c=a.b
this.d.a5(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eJ(a,this)
y.b=!0
return z.J(y)}},eN:{"^":"cL;x,y,c,d,e,a,0b"},ji:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aD:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aC(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.a
if(typeof t!=="number")return t.m()
y=y.b
if(typeof y!=="number")return y.m()
s=new V.a3(t+x*w,y+v*u)
u=this.a.gb0()
r=new X.bZ(a,new V.a3(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
cZ:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.J(this.aD(a,b))
return!0},
bn:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f_()
if(typeof z!=="number")return z.c5()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.aD(a,b))
return!0},
bm:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.aD(a,b))
return!0},
iX:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.dv(new V.a_(v*u,t*s),y,x,new P.aC(w,!1),this)
w.b=!0
z.J(w)
return!0},
h8:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aC(Date.now(),!1)
y=this.f
x=new X.eN(c,a,this.a.gb0(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=new V.a3(0,0)}},aU:{"^":"c;a,b,c",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aU))return!1
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
return z+(this.c?"Shift+":"")}},bZ:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},jx:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ck:function(a,b,c){var z,y,x
z=new P.aC(Date.now(),!1)
y=this.a.gb0()
x=new X.bZ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cZ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.ck(a,b,!0))
return!0},
bn:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f_()
if(typeof z!=="number")return z.c5()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.ck(a,b,!0))
return!0},
bm:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.ck(a,b,!1))
return!0},
iY:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.dv(new V.a_(w*v,u*t),y,b,new P.aC(x,!1),this)
x.b=!0
z.J(x)
return!0},
ge0:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
gc4:function(){var z=this.c
if(z==null){z=D.S()
this.c=z}return z},
gez:function(){var z=this.d
if(z==null){z=D.S()
this.d=z}return z}},dv:{"^":"cL;x,c,d,e,a,0b"},cL:{"^":"w;"},fc:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},kw:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y",
aD:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.a3],"$asf")
z=new P.aC(Date.now(),!1)
y=a.length>0?a[0]:new V.a3(0,0)
x=this.a.gb0()
w=new X.fc(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iV:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.b
if(z==null)return!1
z.J(this.aD(a,!0))
return!0},
iT:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.c
if(z==null)return!1
z.J(this.aD(a,!0))
return!0},
iU:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.d
if(z==null)return!1
z.J(this.aD(a,!1))
return!0}},kU:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb0:function(){var z=this.a
return V.f0(0,0,(z&&C.k).gbL(z).c,C.k.gbL(z).d)},
du:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eI(z,new X.aU(y,a.altKey,a.shiftKey))},
aW:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aU(y,a.altKey,a.shiftKey)},
cz:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aU(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.a3(y-w,x-v)},
bd:function(a){return new V.a_(a.movementX,a.movementY)},
cu:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.a3])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.G)(x),++v){u=x[v]
t=C.i.at(u.pageX)
C.i.at(u.pageY)
s=z.left
C.i.at(u.pageX)
C.a.h(y,new V.a3(t-s,C.i.at(u.pageY)-z.top))}return y},
aB:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eg(z,new X.aU(y,a.altKey,a.shiftKey))},
jH:[function(a){this.f=!0},"$1","gh4",4,0,8],
jB:[function(a){this.f=!1},"$1","gfZ",4,0,8],
jE:[function(a){if(this.f)a.preventDefault()},"$1","gh1",4,0,8],
jJ:[function(a){var z
H.d(a,"$isbX")
if(!this.f)return
z=this.du(a)
if(this.b.iW(z))a.preventDefault()},"$1","gh6",4,0,22],
jI:[function(a){var z
H.d(a,"$isbX")
if(!this.f)return
z=this.du(a)
if(this.b.iS(z))a.preventDefault()},"$1","gh5",4,0,22],
jL:[function(a){var z,y,x,w
H.d(a,"$isaV")
z=this.a
z.focus()
this.f=!0
this.aW(a)
if(this.x){y=this.aB(a)
x=this.bd(a)
if(this.d.cZ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aB(a)
w=this.aE(a)
if(this.c.cZ(y,w))a.preventDefault()},"$1","gh9",4,0,9],
jN:[function(a){var z,y,x
H.d(a,"$isaV")
this.aW(a)
z=this.aB(a)
if(this.x){y=this.bd(a)
if(this.d.bn(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bn(z,x))a.preventDefault()},"$1","ghb",4,0,9],
jG:[function(a){var z,y,x,w
H.d(a,"$isaV")
z=this.a
if(!(z&&C.k).gbL(z).dY(0,new P.bd(a.clientX,a.clientY,[P.a0]))){this.aW(a)
y=this.aB(a)
if(this.x){x=this.bd(a)
if(this.d.bn(y,x))a.preventDefault()
return}if(this.r)return
w=this.aE(a)
if(this.c.bn(y,w))a.preventDefault()}},"$1","gh3",4,0,9],
jM:[function(a){var z,y,x
H.d(a,"$isaV")
this.aW(a)
z=this.aB(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","gha",4,0,9],
jF:[function(a){var z,y,x,w
H.d(a,"$isaV")
z=this.a
if(!(z&&C.k).gbL(z).dY(0,new P.bd(a.clientX,a.clientY,[P.a0]))){this.aW(a)
y=this.aB(a)
if(this.x){x=this.bd(a)
if(this.d.bm(y,x))a.preventDefault()
return}if(this.r)return
w=this.aE(a)
if(this.c.bm(y,w))a.preventDefault()}},"$1","gh2",4,0,9],
jO:[function(a){var z,y
H.d(a,"$isc3")
this.aW(a)
z=new V.a_((a&&C.A).gim(a),C.A.gio(a)).B(0,180)
if(this.x){if(this.d.iX(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.iY(z,y))a.preventDefault()},"$1","ghc",4,0,63],
jP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aB(this.y)
v=this.aE(this.y)
this.d.h8(w,v,x)}},"$1","ghd",4,0,8],
jV:[function(a){var z
H.d(a,"$isbB")
this.a.focus()
this.f=!0
this.cz(a)
z=this.cu(a)
if(this.e.iV(z))a.preventDefault()},"$1","ghk",4,0,17],
jT:[function(a){var z
H.d(a,"$isbB")
this.cz(a)
z=this.cu(a)
if(this.e.iT(z))a.preventDefault()},"$1","ghi",4,0,17],
jU:[function(a){var z
H.d(a,"$isbB")
this.cz(a)
z=this.cu(a)
if(this.e.iU(z))a.preventDefault()},"$1","ghj",4,0,17]}}],["","",,D,{"^":"",i6:{"^":"c;",$isag:1,$isb4:1},ag:{"^":"c;",$isb4:1},j5:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gD:function(){var z=this.Q
if(z==null){z=D.S()
this.Q=z}return z},
df:function(a){var z=this.Q
if(!(z==null))z.J(a)},
h7:[function(a){var z=this.ch
if(!(z==null))z.J(a)},function(){return this.h7(null)},"jK","$1","$0","gdE",0,2,3],
jQ:[function(a){var z,y,x
H.v(a,"$isn",[D.ag],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.G)(a),++y){x=a[y]
if(x==null||this.fv(x))return!1}return!0},"$1","ghf",4,0,43],
jy:[function(a,b){var z,y,x,w,v
z=D.ag
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdE(),w=0;w<b.length;b.length===y||(0,H.G)(b),++w){v=H.d(b[w],"$isag")
v.gD().h(0,x)}z=new D.cG(a,b,this,[z])
z.b=!0
this.df(z)},"$2","gfW",8,0,24],
jS:[function(a,b){var z,y,x,w,v
z=D.ag
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdE(),w=0;w<b.length;b.length===y||(0,H.G)(b),++w){v=H.d(b[w],"$isag")
v.gD().a5(0,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.df(z)},"$2","ghh",8,0,24],
fv:function(a){var z=C.a.bh(this.e,a)
return z},
$asn:function(){return[D.ag]},
$asaO:function(){return[D.ag]}},jJ:{"^":"c;",$isag:1,$isb4:1},ke:{"^":"c;",$isag:1,$isb4:1},kp:{"^":"c;",$isag:1,$isb4:1},kq:{"^":"c;",$isag:1,$isb4:1},kr:{"^":"c;",$isag:1,$isb4:1}}],["","",,V,{"^":"",
oI:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.k(a)
return Math.abs(b-a)<=1e-9},"$2","ju",8,0,41],
ou:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bu(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.b.am("null",c)
return C.b.am(C.i.eP($.r.$2(a,0)?0:a,b),c+b+1)},
bM:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.C],"$asf")
z=H.h([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.G)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.b(z,u)
C.a.n(z,u,C.b.am(z[u],x))}return z},
e3:function(a,b){return C.i.je(Math.pow(b,C.J.c_(Math.log(H.bK(a))/Math.log(b))))},
R:{"^":"c;a,b,c",
m:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.R(z,y,x)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"},
q:{
dg:function(a){var z,y,x
H.v(a,"$isf",[P.C],"$asf")
z=J.aA(a)
y=z.i(a,0)
x=z.i(a,1)
z=z.i(a,2)
if(typeof y!=="number")return y.E()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.E()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.E()
if(z<0)z=0
else if(z>1)z=1
return new V.R(y,x,z)},
hV:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.i.c_(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.R(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.R(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.R(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.R(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.R(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.R(u,t,s)}}}},
a5:{"^":"c;a,b,c,d",
m:function(a,b){var z,y,x,w
z=C.i.m(this.a,b.gb5())
y=C.i.m(this.b,b.gaP())
x=C.i.m(this.c,b.gaY())
w=C.i.m(this.d,b.gka(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.a5(z,y,x,w)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
eQ:{"^":"c;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eQ))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.C]
y=V.bM(H.h([this.a,this.d,this.r],z),3,0)
x=V.bM(H.h([this.b,this.e,this.x],z),3,0)
w=V.bM(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.b(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.b(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.b(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.b(y,1)
s=" "+y[1]+", "
if(1>=u)return H.b(x,1)
s=s+x[1]+", "
if(1>=t)return H.b(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.b(y,2)
z=" "+y[2]+", "
if(2>=u)return H.b(x,2)
z=z+x[2]+", "
if(2>=t)return H.b(w,2)
return s+(z+w[2]+"]")}},
aS:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return z},
ex:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.k(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.k(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.k(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.k(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.k(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.k(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.cj()
a3=1/a2
a4=-w
a5=-i
return V.aT((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.k(s)
r=a7.b
if(typeof r!=="number")return H.k(r)
q=a7.f
if(typeof q!=="number")return H.k(q)
p=a7.z
if(typeof p!=="number")return H.k(p)
o=a7.cy
if(typeof o!=="number")return H.k(o)
n=a7.c
if(typeof n!=="number")return H.k(n)
m=a7.r
if(typeof m!=="number")return H.k(m)
l=a7.Q
if(typeof l!=="number")return H.k(l)
k=a7.db
if(typeof k!=="number")return H.k(k)
j=a7.d
if(typeof j!=="number")return H.k(j)
i=a7.x
if(typeof i!=="number")return H.k(i)
h=a7.ch
if(typeof h!=="number")return H.k(h)
g=a7.dx
if(typeof g!=="number")return H.k(g)
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
return V.aT(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
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
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
if(typeof t!=="number")return H.k(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.k(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.k(l)
return new V.az(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aS))return!1
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
j:function(a){return this.R()},
en:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.C]
y=V.bM(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bM(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bM(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bM(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.b(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.b(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.b(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.b(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.b(y,1)
q=q+y[1]+", "
if(1>=t)return H.b(x,1)
q=q+x[1]+", "
if(1>=s)return H.b(w,1)
q=q+w[1]+", "
if(1>=r)return H.b(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.b(y,2)
u=u+y[2]+", "
if(2>=t)return H.b(x,2)
u=u+x[2]+", "
if(2>=s)return H.b(w,2)
u=u+w[2]+", "
if(2>=r)return H.b(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.b(y,3)
q=q+y[3]+", "
if(3>=t)return H.b(x,3)
q=q+x[3]+", "
if(3>=s)return H.b(w,3)
q=q+w[3]+", "
if(3>=r)return H.b(v,3)
return u+(q+v[3]+"]")},
G:function(a){return this.en(a,3,0)},
R:function(){return this.en("",3,0)},
q:{
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cj:function(){return V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eS:function(a,b,c){return V.aT(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eR:function(a,b,c,d){return V.aT(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)}}},
a3:{"^":"c;t:a>,v:b>",
m:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
return new V.a3(z+y,x+w)},
F:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.k(w)
return new V.a3(z-y,x-w)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
az:{"^":"c;t:a>,v:b>,c",
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.k(u)
return new V.az(z+y,x+w,v+u)},
F:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.F()
if(typeof u!=="number")return H.k(u)
return new V.az(z-y,x-w,v-u)},
B:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.az(0,0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.az(z/b,y/b,x/b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
f_:{"^":"c;t:a>,v:b>,c,d",
gaf:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f_))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
q:{
f0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f_(a,b,c,d)}}},
cP:{"^":"c;t:a>,v:b>,c,d,e,f",
gie:function(){var z,y,x
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
x=this.c
if(typeof x!=="number")return x.m()
return new V.az(z+this.d/2,y+this.e/2,x+this.f/2)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cP))return!1
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
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+", "+V.V(this.e,3,0)+", "+V.V(this.f,3,0)+"]"},
q:{
f1:function(a,b,c,d,e,f){return new V.cP(a,b,c,d,e,f)},
f2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(a==null)return b
if(b==null)return a
z=a.a
y=b.a
x=Math.min(H.bK(z),H.bK(y))
w=a.b
v=b.b
u=Math.min(H.bK(w),H.bK(v))
t=a.c
s=b.c
r=Math.min(H.bK(t),H.bK(s))
q=a.d
if(typeof z!=="number")return z.m()
p=b.d
if(typeof y!=="number")return y.m()
o=Math.max(z+q,y+p)
p=a.e
if(typeof w!=="number")return w.m()
y=b.e
if(typeof v!=="number")return v.m()
n=Math.max(w+p,v+y)
y=a.f
if(typeof t!=="number")return t.m()
v=b.f
if(typeof s!=="number")return s.m()
return new V.cP(x,u,r,o-x,n-u,Math.max(t+y,s+v)-r)}}},
a_:{"^":"c;a,b",
iE:[function(a){return Math.sqrt(this.M(this))},"$0","gk",1,0,25],
M:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
return z*y+x*w},
m:function(a,b){var z,y,x
z=this.a
y=b.gaI(b)
if(typeof z!=="number")return z.m()
y=C.i.m(z,y)
z=this.b
x=b.gaJ(b)
if(typeof z!=="number")return z.m()
return new V.a_(y,C.i.m(z,x))},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.a_(z*b,y*b)},
B:function(a,b){var z,y
if($.r.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.a_(z/b,y/b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
F:{"^":"c;a,b,c",
iE:[function(a){return Math.sqrt(this.M(this))},"$0","gk",1,0,25],
M:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
return z*y+x*w+v*u},
aH:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=a.a
if(typeof v!=="number")return H.k(v)
u=this.a
if(typeof u!=="number")return u.l()
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.k(u)
return new V.F(z+y,x+w,v+u)},
N:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.N()
y=this.b
if(typeof y!=="number")return y.N()
x=this.c
if(typeof x!=="number")return x.N()
return new V.F(-z,-y,-x)},
B:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.F(0,0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.F(z/b,y/b,x/b)},
ey:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hW:{"^":"de;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ce:function(a){var z=V.ou(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.J(a)},
sd5:function(a,b){},
scW:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ce(z)}z=new D.E("maximumLocation",y,this.b,this,[P.C])
z.b=!0
this.U(z)}},
scY:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ce(z)}z=new D.E("minimumLocation",y,this.c,this,[P.C])
z.b=!0
this.U(z)}},
saa:function(a,b){var z,y
b=this.ce(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.C])
z.b=!0
this.U(z)}},
scX:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.C])
z.b=!0
this.U(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.C])
z.b=!0
this.U(z)}},
scL:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.C])
z.b=!0
this.U(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.saa(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
q:{
di:function(){var z=new U.hW()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ek:{"^":"au;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
ba:function(a,b,c){return this.a},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
return J.Q(this.a,b.a)},
j:function(a){return"Constant: "+this.a.G("          ")}},ew:{"^":"aO;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
U:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.J(a)},function(){return this.U(null)},"ao","$1","$0","gaU",0,2,3],
jx:[function(a,b){var z,y,x,w,v,u,t
z=U.au
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaU(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.G)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.e(x,w)
C.a.h(t.a,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfV",8,0,26],
jR:[function(a,b){var z,y,x,w,v,u,t
z=U.au
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaU(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.G)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.e(x,w)
C.a.a5(t.a,x)}}z=new D.cH(a,b,this,[z])
z.b=!0
this.U(z)},"$2","ghg",8,0,26],
ba:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ax(z,z.length,0,[H.u(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.ba(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.cj():x
z=this.e
if(!(z==null))z.b7(0)}return this.f},
C:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ew))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.b(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.b(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asn:function(){return[U.au]},
$asaO:function(){return[U.au]},
$isau:1},au:{"^":"de;"},kV:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.S()
this.cy=z}return z},
U:[function(a){var z
H.d(a,"$isw")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.U(null)},"ao","$1","$0","gaU",0,2,3],
be:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.ge0()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.e(this.gcl(),y)
C.a.h(z.a,x)
x=this.a.c.gez()
x.toString
z=H.e(this.gcm(),y)
C.a.h(x.a,z)
z=this.a.c.gc4()
z.toString
y=H.e(this.gcn(),y)
C.a.h(z.a,y)
return!0},
fP:[function(a){H.d(a,"$isw")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcl",4,0,5],
fQ:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isw"),"$isbZ")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.M(z)
y=this.r
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.a_(y.a,y.b).l(0,2).B(0,z.gaf())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.k(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.a_(x.a,x.b).l(0,2).B(0,z.gaf())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.k(u)
t=this.z
if(typeof t!=="number")return H.k(t)
x.saa(0,-v*u+t)
this.b.sX(0)
y=y.F(0,a.z)
this.Q=new V.a_(y.a,y.b).l(0,2).B(0,z.gaf())}this.ao()},"$1","gcm",4,0,5],
fR:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.M(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.k(x)
z.sX(y*10*x)
this.ao()}},"$1","gcn",4,0,5],
ba:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aT(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isau:1},kW:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.S()
this.fx=z}return z},
U:[function(a){var z
H.d(a,"$isw")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.U(null)},"ao","$1","$0","gaU",0,2,3],
be:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.ge0()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.e(this.gcl(),y)
C.a.h(z.a,x)
x=this.a.c.gez()
x.toString
z=H.e(this.gcm(),y)
C.a.h(x.a,z)
z=this.a.c.gc4()
z.toString
x=H.e(this.gcn(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.S()
x.f=z}x=H.e(this.gfM(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.S()
x.d=z}x=H.e(this.gfN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.S()
x.b=z}x=H.e(this.ghE(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.S()
x.d=z}x=H.e(this.ghD(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.S()
x.c=z}y=H.e(this.ghC(),y)
C.a.h(z.a,y)
return!0},
ax:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a_(z,y)},
fP:[function(a){a=H.l(H.d(a,"$isw"),"$isbZ")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcl",4,0,5],
fQ:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isw"),"$isbZ")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.M(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ax(new V.a_(y.a,y.b).l(0,2).B(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ax(new V.a_(x.a,x.b).l(0,2).B(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.saa(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.F(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).l(0,2).B(0,z.gaf()))}this.ao()},"$1","gcm",4,0,5],
fR:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.M(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sX(-y*10*z)
this.ao()}},"$1","gcn",4,0,5],
jt:[function(a){if(H.l(H.d(a,"$isw"),"$iseN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfM",4,0,5],
ju:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isw"),"$isbZ")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ax(new V.a_(x.a,x.b).l(0,2).B(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.saa(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.F(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).l(0,2).B(0,z.gaf()))
this.ao()},"$1","gfN",4,0,5],
k0:[function(a){H.d(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghE",4,0,5],
k_:[function(a){var z,y,x,w,v,u,t
a=H.l(H.d(a,"$isw"),"$isfc")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.M(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ax(new V.a_(y.a,y.b).l(0,2).B(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ax(new V.a_(x.a,x.b).l(0,2).B(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.saa(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.F(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).l(0,2).B(0,z.gaf()))}this.ao()},"$1","ghD",4,0,5],
jZ:[function(a){var z,y,x
H.d(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.M(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sX(-y*10*z)
this.ao()}},"$1","ghC",4,0,5],
ba:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aT(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aT(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isau:1},kX:{"^":"c;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.S()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.J(a)},
be:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.S()
z.e=y
z=y}else z=y
y=H.e(this.gfS(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.S()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
jv:[function(a){var z,y,x,w
H.d(a,"$isw")
if(!J.Q(this.b,this.a.b.c))return
H.l(a,"$isdv")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.C])
z.b=!0
this.U(z)}},"$1","gfS",4,0,5],
ba:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eR(x,x,x,1)}return this.f},
$isau:1}}],["","",,M,{"^":"",ie:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x",
aR:[function(a){var z
H.d(a,"$isw")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aR(null)},"ji","$1","$0","gav",0,2,3],
jC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ai
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.G)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.cf()
s.a=H.h([],v)
s.c=0
t.sa8(s)}s=t.ga8()
s.toString
H.e(x,w)
C.a.h(s.a,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gh_",8,0,12],
jD:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ai
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.G)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.cf()
s.a=H.h([],v)
s.c=0
t.sa8(s)}s=t.ga8()
s.toString
H.e(x,w)
C.a.a5(s.a,x)}}z=new D.cH(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gh0",8,0,12],
sb8:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.e(this.gav(),{func:1,ret:-1,args:[D.w]})
C.a.a5(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.e(this.gav(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.co])
z.b=!0
this.aR(z)}},
gD:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.eJ(this.c)
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
if(typeof x!=="number")return H.k(x)
u=C.d.at(v.a*x)
if(typeof w!=="number")return H.k(w)
t=C.d.at(v.b*w)
s=C.d.at(v.c*x)
a.c=s
v=C.d.at(v.d*w)
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
s.eI(V.aT(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eW
if(y==null){y=new V.F(0,0,-1)
m=y.B(0,Math.sqrt(y.M(y)))
y=new V.F(0,1,0).aH(m)
l=y.B(0,Math.sqrt(y.M(y)))
k=m.aH(l)
j=new V.F(0,0,0)
y=V.aT(l.a,k.a,m.a,l.N(0).M(j),l.b,k.b,m.b,k.N(0).M(j),l.c,k.c,m.c,m.N(0).M(j),0,0,0,1)
$.eW=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.eI(i)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)z.d.an(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)z.d.aO(a)
this.a.toString
a.cy.d_()
a.db.d_()
this.b.toString
a.eG()},
$ispT:1}}],["","",,A,{"^":"",e9:{"^":"c;a,b,c"},hG:{"^":"c;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
P:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
iq:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
e_:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eB:{"^":"dE;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},eP:{"^":"dE;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0b2,0aK,0b3,0bN,0e1,0e2,0bO,0bP,0e3,0e4,0bQ,0bR,0e5,0e6,0bS,0e7,0e8,0bT,0e9,0ea,0bU,0bV,0bW,0eb,0ec,0bX,0bY,0ed,0ee,0bZ,0ef,0cO,0eg,0cP,0eh,0cQ,0ei,0cR,0ej,0cS,0ek,0cT,a,b,0c,0d,0e,0f,0r",
f6:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.aD("")
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
a1.hN(z)
a1.hU(z)
a1.hO(z)
a1.i1(z)
a1.i2(z)
a1.hW(z)
a1.i6(z)
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
z=new P.aD("")
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
v.hR(z)
v.hM(z)
v.hP(z)
v.hS(z)
v.i_(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hY(z)
v.hZ(z)}v.hV(z)
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
p=H.h([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.a1(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hQ(z)
v.hX(z)
v.i0(z)
v.i3(z)
v.i4(z)
v.i5(z)
v.hT(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.j])
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
n="vec4("+C.a.a1(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eu(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.l(this.r.p(0,"invViewMat"),"$isaE")
if(y)this.db=H.l(this.r.p(0,"objMat"),"$isaE")
if(w)this.dx=H.l(this.r.p(0,"viewObjMat"),"$isaE")
this.fr=H.l(this.r.p(0,"projViewObjMat"),"$isaE")
if(a1.x2)this.go=H.l(this.r.p(0,"txt2DMat"),"$isdK")
if(a1.y1)this.id=H.l(this.r.p(0,"txtCubeMat"),"$isaE")
if(a1.y2)this.k1=H.l(this.r.p(0,"colorMat"),"$isaE")
this.k3=H.h([],[A.aE])
y=a1.b2
if(y>0){this.k2=H.d(this.r.p(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.l(l,"$isaE"))}}y=a1.a
if(y!==C.c){this.k4=H.l(this.r.p(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.r1=H.l(this.r.p(0,"emissionTxt"),"$isaF")
this.rx=H.l(this.r.p(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.l(this.r.p(0,"emissionTxt"),"$isaG")
this.rx=H.l(this.r.p(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.l(this.r.p(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.x1=H.l(this.r.p(0,"ambientTxt"),"$isaF")
this.y1=H.l(this.r.p(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.l(this.r.p(0,"ambientTxt"),"$isaG")
this.y1=H.l(this.r.p(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.l(this.r.p(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.b2=H.l(this.r.p(0,"diffuseTxt"),"$isaF")
this.b3=H.l(this.r.p(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aK=H.l(this.r.p(0,"diffuseTxt"),"$isaG")
this.b3=H.l(this.r.p(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bN=H.l(this.r.p(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.e1=H.l(this.r.p(0,"invDiffuseTxt"),"$isaF")
this.bO=H.l(this.r.p(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.e2=H.l(this.r.p(0,"invDiffuseTxt"),"$isaG")
this.bO=H.l(this.r.p(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bR=H.l(this.r.p(0,"shininess"),"$isa4")
this.bP=H.l(this.r.p(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.e3=H.l(this.r.p(0,"specularTxt"),"$isaF")
this.bQ=H.l(this.r.p(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.e4=H.l(this.r.p(0,"specularTxt"),"$isaG")
this.bQ=H.l(this.r.p(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.e5=H.l(this.r.p(0,"bumpTxt"),"$isaF")
this.bS=H.l(this.r.p(0,"nullBumpTxt"),"$isP")
break
case C.f:this.e6=H.l(this.r.p(0,"bumpTxt"),"$isaG")
this.bS=H.l(this.r.p(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.e7=H.l(this.r.p(0,"envSampler"),"$isaG")
this.e8=H.l(this.r.p(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bT=H.l(this.r.p(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.e9=H.l(this.r.p(0,"reflectTxt"),"$isaF")
this.bU=H.l(this.r.p(0,"nullReflectTxt"),"$isP")
break
case C.f:this.ea=H.l(this.r.p(0,"reflectTxt"),"$isaG")
this.bU=H.l(this.r.p(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bV=H.l(this.r.p(0,"refraction"),"$isa4")
this.bW=H.l(this.r.p(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.eb=H.l(this.r.p(0,"refractTxt"),"$isaF")
this.bX=H.l(this.r.p(0,"nullRefractTxt"),"$isP")
break
case C.f:this.ec=H.l(this.r.p(0,"refractTxt"),"$isaG")
this.bX=H.l(this.r.p(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bY=H.l(this.r.p(0,"alpha"),"$isa4")
switch(y){case C.c:break
case C.h:break
case C.e:this.ed=H.l(this.r.p(0,"alphaTxt"),"$isaF")
this.bZ=H.l(this.r.p(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.ee=H.l(this.r.p(0,"alphaTxt"),"$isaG")
this.bZ=H.l(this.r.p(0,"nullAlphaTxt"),"$isP")
break}}this.cO=H.h([],[A.fo])
this.cP=H.h([],[A.fp])
this.cQ=H.h([],[A.fq])
this.cR=H.h([],[A.fr])
this.cS=H.h([],[A.fs])
this.cT=H.h([],[A.ft])
if(a1.k2){y=a1.z
if(y>0){this.ef=H.d(this.r.p(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.cO;(x&&C.a).h(x,new A.fo(m,l,k))}}y=a1.Q
if(y>0){this.eg=H.d(this.r.p(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isa4")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isa4")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.cP;(x&&C.a).h(x,new A.fp(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eh=H.d(this.r.p(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isa4")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa4")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa4")
x=this.cQ;(x&&C.a).h(x,new A.fq(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ei=H.d(this.r.p(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isK")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isaF")
x=this.cR;(x&&C.a).h(x,new A.fr(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ej=H.d(this.r.p(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isdK")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa4")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isaG")
x=this.cS;(x&&C.a).h(x,new A.fs(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ek=H.d(this.r.p(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isK")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isK")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(c,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(b,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a,"$isa4")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a0,"$isaF")
x=this.cT;(x&&C.a).h(x,new A.ft(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ap:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.f1(c)
b.a.uniform1i(b.d,0)}},
aj:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
jo:function(a,b){var z,y
z=a.aK
y=new A.eP(b,z)
y.dd(b,z)
y.f6(a,b)
return y}}},jr:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,b2,aK,b3",
hN:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.b2+"];\n"
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
hU:function(a){var z
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
hO:function(a){var z
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
i1:function(a){var z,y
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
i2:function(a){var z,y
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
hW:function(a){var z
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
i6:function(a){var z
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
aC:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.b(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hR:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aC(a,z,"emission")
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
hM:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aC(a,z,"ambient")
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
hP:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"diffuse")
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
hS:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"invDiffuse")
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
i_:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aC(a,z,"specular")
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
hV:function(a){var z,y
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
hY:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aC(a,z,"reflect")
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
hZ:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aC(a,z,"refract")
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
hQ:function(a){var z,y
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
hX:function(a){var z,y
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
i0:function(a){var z,y
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
i3:function(a){var z,y,x
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
i4:function(a){var z,y,x
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
i5:function(a){var z,y,x
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
hT:function(a){var z
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
j:function(a){return this.aK}},fo:{"^":"c;a,b,c"},fr:{"^":"c;a,b,c,d,e,f,r,x"},fp:{"^":"c;a,b,c,d,e,f,r"},fs:{"^":"c;a,b,c,d,e,f,r,x,y,z"},fq:{"^":"c;a,b,c,d,e,f,r,x,y,z"},ft:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dE:{"^":"d8;",
dd:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
eu:function(a,b,c){var z,y,x
this.c=this.dv(b,35633)
this.d=this.dv(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.hj(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.q("Failed to link shader: "+H.m(x)))}this.hw()
this.hx()},
aF:function(a){a.a.useProgram(this.e)
this.f.iq()},
dv:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.hj(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.q("Error compiling shader '"+H.m(y)+"': "+H.m(x)))}return y},
hw:function(){var z,y,x,w,v,u
z=H.h([],[A.e9])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.e9(y,v.name,u))}this.f=new A.hG(z)},
hx:function(){var z,y,x,w,v,u
z=H.h([],[A.at])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.il(v.type,v.size,v.name,u))}this.r=new A.kG(z)},
aT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
fz:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aF(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
fA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aG(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
bI:function(a,b){return new P.fI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
il:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.a4(this.a,this.e,c,d)
case 35664:return new A.kB(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.kE(this.a,this.e,c,d)
case 35667:return new A.kC(this.a,this.e,c,d)
case 35668:return new A.kD(this.a,this.e,c,d)
case 35669:return new A.kF(this.a,this.e,c,d)
case 35674:return new A.kI(this.a,this.e,c,d)
case 35675:return new A.dK(this.a,this.e,c,d)
case 35676:return new A.aE(this.a,this.e,c,d)
case 35678:return this.fz(b,c,d)
case 35680:return this.fA(b,c,d)
case 35670:throw H.a(this.bI("BOOL",c))
case 35671:throw H.a(this.bI("BOOL_VEC2",c))
case 35672:throw H.a(this.bI("BOOL_VEC3",c))
case 35673:throw H.a(this.bI("BOOL_VEC4",c))
default:throw H.a(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}},cA:{"^":"c;a,b",
j:function(a){return this.b}},at:{"^":"c;"},kG:{"^":"c;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
P:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
j:function(a){return this.R()},
ix:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.G)(z),++w)x+=z[w].j(0)+a
return x},
R:function(){return this.ix("\n")}},P:{"^":"at;a,b,c,d",
j:function(a){return"Uniform1i: "+H.m(this.c)}},kC:{"^":"at;a,b,c,d",
j:function(a){return"Uniform2i: "+H.m(this.c)}},kD:{"^":"at;a,b,c,d",
j:function(a){return"Uniform3i: "+H.m(this.c)}},kF:{"^":"at;a,b,c,d",
j:function(a){return"Uniform4i: "+H.m(this.c)}},kA:{"^":"at;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.m(this.c)},
q:{
dJ:function(a,b,c,d,e){var z=new A.kA(a,b,c,e)
z.f=d
z.e=P.jf(d,0,!1,P.o)
return z}}},a4:{"^":"at;a,b,c,d",
j:function(a){return"Uniform1f: "+H.m(this.c)}},kB:{"^":"at;a,b,c,d",
j:function(a){return"Uniform2f: "+H.m(this.c)}},K:{"^":"at;a,b,c,d",
j:function(a){return"Uniform3f: "+H.m(this.c)}},kE:{"^":"at;a,b,c,d",
j:function(a){return"Uniform4f: "+H.m(this.c)}},kI:{"^":"at;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.m(this.c)}},dK:{"^":"at;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bG(H.v(a,"$isf",[P.C],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.m(this.c)}},aE:{"^":"at;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bG(H.v(a,"$isf",[P.C],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.m(this.c)}},aF:{"^":"at;a,b,c,d",
f1:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.m(this.c)}},aG:{"^":"at;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.m(this.c)}}}],["","",,F,{"^":"",T:{"^":"c;0a,0b,0c,0d,0e",
jh:function(a,b,c){if(!c)this.d=null
if(!b)this.e=null},
d3:function(a){return this.jh(a,!0,!0)},
gcM:function(){return this.a==null||this.b==null||this.c==null},
fm:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.ey())return
return v.B(0,Math.sqrt(v.M(v)))},
fq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.M(z)))
z=w.F(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.aH(z.B(0,Math.sqrt(z.M(z))))
return z.B(0,Math.sqrt(z.M(z)))},
cH:function(){if(this.d!=null)return!0
var z=this.fm()
if(z==null){z=this.fq()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
fl:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.ey())return
return v.B(0,Math.sqrt(v.M(v)))},
fp:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
n=z-y
if($.r.$2(n,0)){z=r.F(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.M(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.F()
if(typeof p!=="number")return H.k(p)
if(z-p<0)m=m.N(0)}else{y=q.b
if(typeof y!=="number")return H.k(y)
l=(z-y)/n
y=r.F(0,u)
z=y.a
if(typeof z!=="number")return z.l()
w=y.b
if(typeof w!=="number")return w.l()
y=y.c
if(typeof y!=="number")return y.l()
y=new V.az(z*l,w*l,y*l).m(0,u).F(0,x)
y=new V.F(y.a,y.b,y.c)
m=y.B(0,Math.sqrt(y.M(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.F()
if(typeof p!=="number")return H.k(p)
q=q.a
if(typeof q!=="number")return H.k(q)
if((o-p)*l+p-q<0)m=m.N(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.M(z)))
z=k.aH(m)
z=z.B(0,Math.sqrt(z.M(z))).aH(k)
m=z.B(0,Math.sqrt(z.M(z)))}return m},
cG:function(){if(this.e!=null)return!0
var z=this.fl()
if(z==null){z=this.fp()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
G:function(a){var z,y
if(this.gcM())return a+"disposed"
z=a+C.b.am(J.ar(this.a.e),0)+", "+C.b.am(J.ar(this.b.e),0)+", "+C.b.am(J.ar(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
R:function(){return this.G("")},
q:{
et:function(a,b,c){var z,y,x
z=new F.T()
y=a.a
if(y==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},bb:{"^":"c;0a,0b",
gcM:function(){return this.a==null||this.b==null},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
G:function(a){if(this.gcM())return a+"disposed"
return a+C.b.am(J.ar(this.a.e),0)+", "+C.b.am(J.ar(this.b.e),0)},
R:function(){return this.G("")},
q:{
eK:function(a,b){var z,y,x
z=new F.bb()
if(a==null)H.p(P.q("May not create a line with a null start vertex."))
if(b==null)H.p(P.q("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.q("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z}}},cK:{"^":"c;0a",
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.am(J.ar(z.e),0)},
R:function(){return this.G("")},
q:{
dA:function(a){var z=new F.cK()
if(a.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a3()
return z}}},ap:{"^":"c;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
b_:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.b_()||!1
if(!this.a.b_())y=!1
z=this.e
if(!(z==null))z.b7(0)
return y},
aZ:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aZ()||!1
if(!this.a.aZ())y=!1
z=this.e
if(!(z==null))z.b7(0)
return y},
bK:function(){var z=this.e
if(!(z==null))++z.c
this.a.bK()
z=this.e
if(!(z==null))z.b7(0)
return!0},
bf:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.f1(0,0,0,0,0,0)
z=z[0].f
x=V.f1(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.b(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.k(r)
if(u<r){s+=r-u
q=u}else{if(u>r+s)s=u-r
q=r}p=x.e
u=x.b
if(typeof t!=="number")return t.E()
if(typeof u!=="number")return H.k(u)
if(t<u){p+=u-t
o=t}else{if(t>u+p)p=t-u
o=u}n=x.f
u=x.c
if(typeof v!=="number")return v.E()
if(typeof u!=="number")return H.k(u)
if(v<u){n+=u-v
m=v}else{if(v>u+n)n=v-u
m=u}x=new V.cP(q,o,m,s,p,n)}return x},
bJ:function(a){var z,y,x
for(z=this.a.c.length-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.b(y,z)
x=y[z]
y=x.f
if(y!=null){y=a.b9(y)
if(!J.Q(x.f,y)){x.f=y
y=x.a
if(y!=null){y=y.e
if(!(y==null))y.J(null)}}}y=x.r
if(y!=null)x.sbl(a.c3(y))
y=x.x
if(y!=null)x.sV(a.c3(y))}},
dV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aK()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
v=b.gd9(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.C
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.ee])
for(r=0,q=0;q<w;++q){p=b.ib(q)
o=p.gd9(p)
C.a.n(s,q,new Z.ee(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.b(y,n)
m=y[n].iF(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bG(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cz(new Z.fC(34962,j),s,b)
i.b=H.h([],[Z.cF])
if(this.b.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cF(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.b(g,q)
g=g[q].b
g.a.a.O()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cF(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.b(g,q)
g=g[q].b
g.a.a.O()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.b(g,q)
g=g[q].c
g.a.a.O()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cF(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.a1(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.J(a)},
a3:function(){return this.ag(null)},
$iscQ:1,
q:{
al:function(){var z,y
z=new F.ap()
y=new F.l5(z)
y.b=!1
y.c=H.h([],[F.I])
z.a=y
y=new F.kd(z)
y.b=H.h([],[F.cK])
z.b=y
y=new F.kc(z)
y.b=H.h([],[F.bb])
z.c=y
y=new F.kb(z)
y.b=H.h([],[F.T])
z.d=y
z.e=null
return z}}},cQ:{"^":"de;"},kb:{"^":"c;a,0b",
a9:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.et(b,c,d)},
i8:function(a){var z,y,x,w,v,u
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.T])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.b(a,v)
v=a[v]
if(w>=u)return H.b(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.et(x,v,u))}}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.b(z,b)
return z[b]},
P:function(a,b){return C.a.P(this.b,b)},
b_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.G)(z),++w)if(!z[w].cH())x=!1
return x},
aZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.G)(z),++w)if(!z[w].cG())x=!1
return x},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}},kc:{"^":"c;a,0b",
u:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.eK(b,c)},
i9:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.bb])
y=a.length
for(x=1;x<y;x+=2){w=x-1
v=a.length
if(w>=v)return H.b(a,w)
w=a[w]
if(x>=v)return H.b(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.eK(w,v))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.b(z,b)
return z[b]},
P:function(a,b){return C.a.P(this.b,b)},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.b(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.a1(z,"\n")},
R:function(){return this.G("")}},kd:{"^":"c;a,0b",
ia:function(a){var z,y,x,w
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.cK])
y=a.length
for(x=0;x<y;++x){if(x>=a.length)return H.b(a,x)
w=a[x]
this.a.a.h(0,w)
C.a.h(z,F.dA(w))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.b(z,b)
return z[b]},
P:function(a,b){return C.a.P(this.b,b)},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}},I:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ij:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bC(this.cx,x,u,z,y,w,v,a,t)},
a0:function(){return this.ij(null)},
saa:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a3()}},
sbl:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.M(a)))
if(!J.Q(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a3()}},
sV:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.M(a)))
if(!J.Q(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a3()}},
sS:function(a,b){var z
if(!J.Q(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a3()}},
iF:function(a){var z,y
z=J.M(a)
if(z.C(a,$.$get$aK())){z=this.f
y=[P.C]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$aJ())){z=this.r
y=[P.C]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$aI())){z=this.x
y=[P.C]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$aZ())){z=this.y
y=[P.C]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.C(a,$.$get$b_())){z=this.z
y=[P.C]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$b5())){z=this.Q
y=[P.C]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$bD())){z=this.Q
y=[P.C]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.C(a,$.$get$bf()))return H.h([this.ch],[P.C])
else if(z.C(a,$.$get$aY())){z=H.h([-1,-1,-1,-1],[P.C])
return z}else return H.h([],[P.C])},
cH:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.A(0,new F.lc(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.M(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.b7(0)}return!0},
cG:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.A(0,new F.lb(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.M(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.b7(0)}return!0},
em:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.b(x,y)
w=x[y]
x=w.b
x.a.a.O()
x=x.e
a.a.a.O()
v=a.e
if(x==null?v==null:x===v)return w}return},
it:function(a){var z=this.em(a)
if(z!=null)return z
return a.em(this)},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
G:function(a){var z,y,x
z=H.h([],[P.j])
C.a.h(z,C.b.am(J.ar(this.e),0))
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
C.a.h(z,V.V(this.ch,3,0))
C.a.h(z,"-")
x=C.a.a1(z,", ")
return a+"{"+x+"}"},
R:function(){return this.G("")},
q:{
bC:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.I()
y=new F.la(z)
y.b=H.h([],[F.cK])
z.b=y
y=new F.l9(z)
x=[F.bb]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.l6(z)
x=[F.T]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$fz()
z.e=0
y=$.$get$aK()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aJ().a)!==0?e:null
z.x=(x&$.$get$aI().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fA().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aY().a)!==0?a:null
return z}}},lc:{"^":"i:4;a",
$1:function(a){var z,y
H.d(a,"$isT")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},lb:{"^":"i:4;a",
$1:function(a){var z,y
H.d(a,"$isT")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},l5:{"^":"c;a,0b,0c",
O:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.b(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a3()
return!0},
cB:function(a,b,c){var z=F.bC(null,null,null,new V.az(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
i:function(a,b){var z=this.c
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
P:function(a,b){return C.a.P(this.c,b)},
b_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)z[x].cH()
return!0},
aZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)z[x].cG()
return!0},
bK:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.l()
t=v.b
if(typeof t!=="number")return t.l()
s=v.c
if(typeof s!=="number")return s.l()
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
this.O()
z=H.h([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}},l6:{"^":"c;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.E(0,z)){y=this.b
if(b>>>0!==b||b>=y.length)return H.b(y,b)
return y[b]}b=b.F(0,z)
x=this.c.length
if(b.E(0,x)){y=this.c
if(b>>>0!==b||b>=y.length)return H.b(y,b)
return y[b]}b=b.F(0,x)
y=this.d
if(b>>>0!==b||b>=y.length)return H.b(y,b)
return y[b]},
P:function(a,b){var z=C.a.P(this.b,b)
if(z>=0)return z
z=C.a.P(this.c,b)
if(z>=0)return z+this.b.length
z=C.a.P(this.d,b)
if(z>=0)return z+this.b.length+this.c.length
return-1},
A:function(a,b){H.e(b,{func:1,ret:-1,args:[F.T]})
C.a.A(this.b,b)
C.a.A(this.c,new F.l7(this,b))
C.a.A(this.d,new F.l8(this,b))},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}},l7:{"^":"i:4;a,b",
$1:function(a){H.d(a,"$isT")
if(!J.Q(a.a,this.a))this.b.$1(a)}},l8:{"^":"i:4;a,b",
$1:function(a){var z
H.d(a,"$isT")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},l9:{"^":"c;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.au(0,z)){y=this.c
x=b.F(0,z)
if(x>>>0!==x||x>=y.length)return H.b(y,x)
return y[x]}else{y=this.b
if(b>>>0!==b||b>=y.length)return H.b(y,b)
return y[b]}},
P:function(a,b){var z=C.a.P(this.b,b)
if(z>=0)return z
z=C.a.P(this.c,b)
if(z>=0)return z+this.b.length
return-1},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}},la:{"^":"c;a,0b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
P:function(a,b){return C.a.P(this.b,b)},
j:function(a){return this.R()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a1(z,"\n")},
R:function(){return this.G("")}}}],["","",,O,{"^":"",iu:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gD:function(){var z=this.rx
if(z==null){z=D.S()
this.rx=z}return z},
H:function(a){var z=this.rx
if(!(z==null))z.J(a)},
sad:function(a){var z,y
z=this.r2
if(!$.r.$2(z,a)){y=this.r2
this.r2=a
z=new D.E("vectorScale",y,a,this,[P.C])
z.b=!0
this.H(z)}},
an:function(a,b){},
eL:function(a,b){var z,y,x,w
if(this.a==null){z=H.d(a.fr.i(0,"Inspection"),"$iseB")
if(z==null){y=a.a
z=new A.eB(y,"Inspection")
z.dd(y,"Inspection")
z.eu(0,$.iM,$.iE)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"normAttr")
z.z=z.f.i(0,"clrAttr")
z.Q=z.f.i(0,"binmAttr")
z.ch=H.l(z.r.i(0,"lightVec"),"$isK")
z.cx=H.l(z.r.i(0,"ambientClr"),"$isK")
z.cy=H.l(z.r.i(0,"diffuseClr"),"$isK")
z.db=H.l(z.r.i(0,"weightScalar"),"$isa4")
z.dx=H.l(z.r.i(0,"viewMat"),"$isaE")
z.dy=H.l(z.r.i(0,"viewObjMatrix"),"$isaE")
z.fr=H.l(z.r.i(0,"projViewObjMatrix"),"$isaE")
a.dS(z)}this.a=z}if(b.e==null){b.d.b_()
b.d.aZ()
b.d.bK()
y=new Z.ef()
y.a=new H.bo(0,0,[P.j,Z.cz])
b.e=y}y=this.a
y.aF(a)
x=this.r2
w=y.db
w.a.uniform1f(w.d,x)
x=this.b
w=y.ch
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.ga_(x)
w=y.dx
w.toString
w.ae(x.ab(0,!0))
x=a.geV()
w=y.dy
w.toString
w.ae(x.ab(0,!0))
x=a.geH()
y=y.fr
y.toString
y.ae(x.ab(0,!0))
y=b.e
if(y instanceof Z.ef){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
if(this.k3)this.dH(a,y,b.d,"Axis",H.e(this.gdk(),{func:1,ret:F.ap,args:[F.cQ]}),this.z,this.y)
if(this.k4)this.dH(a,y,b.d,"AABB",H.e(this.gdh(),{func:1,ret:F.ap,args:[F.cQ]}),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}else{w.enable(2929)
a.a.disable(3042)
if(this.cx)this.a2(a,y,b.c,"vertices",this.ghI(),this.f,this.e)
if(this.fr)this.a2(a,y,b.c,"faceCenters",this.gfG(),this.f,this.e)
if(this.Q)this.a2(a,y,b.c,"shapeFill",this.ghy(),this.d,this.c)
if(this.id)this.a2(a,y,b.c,"colorFill",this.gft(),this.x,this.r)
if(this.k1)this.a2(a,y,b.c,"txt2DColor",this.ghG(),this.x,this.r)
if(this.k2)this.a2(a,y,b.c,"weight",this.ghJ(),this.x,this.r)
a.a.disable(2929)
a.a.enable(3042)
if(this.ch)this.a2(a,y,b.c,"wireFrame",this.ghK(),this.f,this.e)
if(this.cy)this.a2(a,y,b.c,"normals",this.gfU(),this.f,this.e)
if(this.db)this.a2(a,y,b.c,"binormals",this.gfo(),this.f,this.e)
if(this.dx)this.a2(a,y,b.c,"tangentals",this.ghB(),this.f,this.e)
if(this.dy)this.a2(a,y,b.c,"textureCube",this.ghH(),this.f,this.e)
if(this.fx)this.a2(a,y,b.c,"faceNormals",this.gfH(),this.f,this.e)
if(this.fy)this.a2(a,y,b.c,"faceBinormals",this.gfF(),this.x,this.r)
if(this.go)this.a2(a,y,b.c,"faceTangentals",this.gfI(),this.x,this.r)
if(this.k3)this.a2(a,y,b.c,"Axis",this.gdk(),this.z,this.y)
if(this.k4)this.a2(a,y,b.c,"AABB",this.gdh(),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.e_()},
a2:function(a,b,c,d,e,f,g){var z,y,x
H.e(e,{func:1,ret:F.ap,args:[F.ap]})
z=b.a.i(0,d)
if(z==null){z=this.dm(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.eE(a)},
dH:function(a,b,c,d,e,f,g){var z,y,x
H.e(e,{func:1,ret:F.ap,args:[F.cQ]})
z=b.a.i(0,d)
if(z==null){z=this.dm(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.eE(a)},
dm:function(a,b){var z,y,x,w
H.d(b,"$isap")
z=a.a
y=$.$get$aK()
x=$.$get$aJ()
w=b.dV(new Z.fD(z),new Z.be(y.a|x.a|$.$get$aI().a|$.$get$b5().a))
w.ak($.$get$aK()).e=this.a.x.c
w.ak($.$get$aJ()).e=this.a.y.c
w.ak($.$get$b5()).e=this.a.z.c
w.ak($.$get$aI()).e=this.a.Q.c
return w},
jX:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iG(z,new V.a5(1,1,1,1)),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.e(new O.iH(z),{func:1,ret:-1,args:[F.T]})
C.a.A(x.b,y)
return z},"$1","ghy",4,0,2],
hL:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.al()
z.a=new V.a5(0,0.7,1,1)
x=a.a
x.toString
z=H.e(new O.iS(z,y),{func:1,ret:-1,args:[F.I]})
C.a.A(x.c,z)
z=new O.iR(y)
x=a.c
x.toString
w=H.e(new O.iT(y,z),{func:1,ret:-1,args:[F.bb]})
C.a.A(x.b,w)
w=a.d
w.toString
z=H.e(new O.iU(y,z),{func:1,ret:-1,args:[F.T]})
C.a.A(w.b,z)
return y},function(a){return this.hL(a,null)},"k9","$2$color","$1","ghK",4,3,50],
k7:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iN(new V.a5(1,1,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghI",4,0,2],
jw:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iF(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","gfU",4,0,2],
jm:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.ix(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","gfo",4,0,2],
jY:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iI(new V.a5(1,0.3,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghB",4,0,2],
k6:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iL(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghH",4,0,2],
jq:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.e(new O.iB(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.A(y.b,x)
return z},"$1","gfG",4,0,2],
jr:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.e(new O.iC(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.A(y.b,x)
return z},"$1","gfH",4,0,2],
jp:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.e(new O.iA(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.A(y.b,x)
return z},"$1","gfF",4,0,2],
js:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.e(new O.iD(new V.a5(1,0.3,1,1),z),{func:1,ret:-1,args:[F.T]})
C.a.A(y.b,x)
return z},"$1","gfI",4,0,2],
jn:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iy(z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.e(new O.iz(z),{func:1,ret:-1,args:[F.T]})
C.a.A(x.b,y)
return z},"$1","gft",4,0,2],
k5:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.e(new O.iJ(z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.e(new O.iK(z),{func:1,ret:-1,args:[F.T]})
C.a.A(x.b,y)
return z},"$1","ghG",4,0,2],
k8:[function(a){var z,y,x,w,v,u,t
z={}
y=F.al()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.I]}
C.a.A(w,H.e(new O.iO(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.F()
if(typeof u!=="number")return H.k(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.e(new O.iP(z,y),x)
C.a.A(w.c,x)
x=a.d
x.toString
w=H.e(new O.iQ(y),{func:1,ret:-1,args:[F.T]})
C.a.A(x.b,w)
return y},"$1","ghJ",4,0,2],
jl:[function(a){return this.fn(a)},"$1","gdk",4,0,2],
fn:function(a){var z,y
z=F.al()
y=new O.iw(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
jk:[function(a){return this.fg(a)},"$1","gdh",4,0,2],
fg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.bf()
y=F.al()
x=new O.iv(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
if(typeof w!=="number")return w.m()
s=w+z.d
r=x.$3(s,v,u)
if(typeof v!=="number")return v.m()
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.m()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.u(0,t,r)
y.c.u(0,r,p)
y.c.u(0,p,o)
y.c.u(0,o,t)
y.c.u(0,n,m)
y.c.u(0,m,l)
y.c.u(0,l,k)
y.c.u(0,k,n)
y.c.u(0,t,n)
y.c.u(0,r,m)
y.c.u(0,p,l)
y.c.u(0,o,k)
return y}},iG:{"^":"i:6;a,b",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.a.a
y=a.a0()
y.sS(0,this.b)
y.sV(new V.F(0,0,0))
z.h(0,y)}},iH:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.O()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.b(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iS:{"^":"i:6;a,b",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.b.a
y=a.a0()
y.sS(0,this.a.a)
y.sV(new V.F(0,0,0))
z.h(0,y)}},iR:{"^":"i:52;a",
$2:function(a,b){if(a.it(b)==null)this.a.c.u(0,a,b)}},iT:{"^":"i:53;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isbb")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.O()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.b(z,x)
this.b.$2(w,z[x])}},iU:{"^":"i:4;a,b",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.O()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.b(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.O()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.b(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},iN:{"^":"i:6;a,b",
$1:function(a){var z,y
z=H.d(a,"$isI").a0()
z.sS(0,this.a)
z.sV(new V.F(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dA(z)}},iF:{"^":"i:6;a,b",
$1:function(a){var z,y,x
z=H.d(a,"$isI").a0()
z.sS(0,this.a)
z.sV(new V.F(0,0,0))
y=z.a0()
y.sV(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},ix:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.F(0,0,0))
y=z.a0()
y.sV(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iI:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.F(0,0,0))
y=z.a0()
y.sV(a.x.aH(a.r).N(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iL:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.F(0,0,0))
y=z.a0()
y.sV(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iB:{"^":"i:4;a,b",
$1:function(a){var z,y
H.d(a,"$isT")
z=F.bC(null,new V.F(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dA(z)}},iC:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.F(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iA:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.F(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iD:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.F(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.e.aH(a.d).N(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iy:{"^":"i:6;a",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.a.a
y=a.a0()
y.sV(new V.F(0,0,0))
z.h(0,y)}},iz:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.O()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.b(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iJ:{"^":"i:6;a",
$1:function(a){var z,y,x,w,v,u,t
H.d(a,"$isI")
z=a.y
y=this.a.a
x=a.a0()
w=z.a
v=z.b
if(typeof w!=="number")return w.E()
if(w<0)w=0
else if(w>1)w=1
if(typeof v!=="number")return v.E()
u=v<0
if(u)t=0
else if(v>1)t=1
else t=v
if(u)v=0
else if(v>1)v=1
x.sS(0,new V.a5(w,t,v,1))
x.sV(new V.F(0,0,0))
y.h(0,x)}},iK:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.O()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.b(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iO:{"^":"i:6;a",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.c7()
if(typeof x!=="number")return H.k(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.E()
if(y<x)z.b=x}},iP:{"^":"i:6;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isI")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.k(x)
w=V.hV((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.a0()
x.sV(new V.F(0,0,0))
x.sS(0,new V.a5(w.a,w.b,w.c,1))
y.h(0,x)}},iQ:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.O()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.b(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.O()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.b(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iw:{"^":"i;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.a5(z,y,x,1)
z=this.a
v=z.a.cB(0,0,0)
v.sV(new V.F(0,0,0))
v.sbl(new V.F(1,0,0))
v.sS(0,w)
u=z.a.cB(a,b,c)
u.sV(new V.F(0,0,0))
u.sbl(new V.F(1,0,0))
u.sS(0,w)
z.c.u(0,v,u)}},iv:{"^":"i;a",
$3:function(a,b,c){var z=this.a.a.cB(a,b,c)
z.sV(new V.F(0,0,0))
z.sbl(new V.F(a,b,c))
return z}},cJ:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.S()
this.dy=z}return z},
H:[function(a){var z
H.d(a,"$isw")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.H(null)},"fd","$1","$0","gbx",0,2,3],
hs:[function(a){H.d(a,"$isw")
this.a=null
this.H(a)},function(){return this.hs(null)},"jW","$1","$0","ghr",0,2,3],
jz:[function(a,b){var z=V.aS
z=new D.cG(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.H(z)},"$2","gfX",8,0,27],
jA:[function(a,b){var z=V.aS
z=new D.cH(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.H(z)},"$2","gfY",8,0,27],
dt:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.ac(z.e.length+3,4)*4
x=C.d.ac(z.f.length+3,4)*4
w=C.d.ac(z.r.length+3,4)*4
v=C.d.ac(z.x.length+3,4)*4
u=C.d.ac(z.y.length+3,4)*4
t=C.d.ac(z.z.length+3,4)*4
s=C.d.ac(this.e.a.length+3,4)*4
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
a6=$.$get$aK()
if(c){z=$.$get$aJ()
a6=new Z.be(a6.a|z.a)}if(b){z=$.$get$aI()
a6=new Z.be(a6.a|z.a)}if(a){z=$.$get$aZ()
a6=new Z.be(a6.a|z.a)}if(a0){z=$.$get$b_()
a6=new Z.be(a6.a|z.a)}if(a2){z=$.$get$aY()
a6=new Z.be(a6.a|z.a)}return new A.jr(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Z:function(a,b){H.v(a,"$isf",[T.dH],"$asf")
if(b!=null)if(!C.a.bh(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var z
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.u(z,0)]);z.I();)C.q.an(z.d,b)},
eL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dt()
y=H.d(a.fr.i(0,z.aK),"$iseP")
if(y==null){y=A.jo(z,a.a)
a.dS(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.b3
z=b.e
if(!(z instanceof Z.cz)){b.e=null
z=null}if(z==null||!z.d.C(0,w)){z=x.r1
if(z)b.d.b_()
v=x.r2
if(v)b.d.aZ()
u=x.ry
if(u)b.d.bK()
t=b.d.dV(new Z.fD(a.a),w)
t.ak($.$get$aK()).e=this.a.y.c
if(z)t.ak($.$get$aJ()).e=this.a.Q.c
if(v)t.ak($.$get$aI()).e=this.a.z.c
if(x.rx)t.ak($.$get$aZ()).e=this.a.ch.c
if(u)t.ak($.$get$b_()).e=this.a.cx.c
if(x.x1)t.ak($.$get$aY()).e=this.a.cy.c
b.e=t}z=T.dH
s=H.h([],[z])
this.a.aF(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga_(u)
v=v.db
v.toString
v.ae(u.ab(0,!0))}if(x.fy){v=this.a
u=a.geV()
v=v.dx
v.toString
v.ae(u.ab(0,!0))}v=this.a
u=a.geH()
v=v.fr
v.toString
v.ae(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ae(u.ab(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ae(u.ab(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ae(C.q.ab(u,!0))}if(x.b2>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.C],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.b(p,q)
p=p[q]
u.toString
H.d(p,"$isaS")
u=u.k3
if(q>=u.length)return H.b(u,q)
u=u[q]
o=new Float32Array(H.bG(H.v(p.ab(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.f.d)
v=this.a
u=this.f.d
v.ap(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.f.e)
v=this.a
u=this.f.e
v.aj(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.r.d)
v=this.a
u=this.r.d
v.ap(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.r.e)
v=this.a
u=this.r.e
v.aj(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.x.d)
v=this.a
u=this.x.d
v.ap(v.b2,v.b3,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.x.e)
v=this.a
u=this.x.e
v.aj(v.aK,v.b3,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bN
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.y.d)
v=this.a
u=this.y.d
v.ap(v.e1,v.bO,u)
u=this.a
v=this.y.f
u=u.bN
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.y.e)
v=this.a
u=this.y.e
v.aj(v.e2,v.bO,u)
u=this.a
v=this.y.f
u=u.bN
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bP
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bR
u.a.uniform1f(u.d,n)
break
case C.e:this.Z(s,this.z.d)
v=this.a
u=this.z.d
v.ap(v.e3,v.bQ,u)
u=this.a
v=this.z.f
u=u.bP
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bR
v.a.uniform1f(v.d,n)
break
case C.f:this.Z(s,this.z.e)
v=this.a
u=this.z.e
v.aj(v.e4,v.bQ,u)
u=this.a
v=this.z.f
u=u.bP
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bR
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.ef
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
p=this.a.cO
if(l>=p.length)return H.b(p,l)
i=p[l]
p=m.c3(j.gbM(j))
n=p.a
if(typeof n!=="number")return n.l()
h=p.b
if(typeof h!=="number")return h.l()
g=p.c
if(typeof g!=="number")return g.l()
g=p.B(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gS(j)
h=i.c
n=g.gb5()
p=g.gaP()
g=g.gaY()
h.a.uniform3f(h.d,n,p,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.eg
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
p=this.a.cP
if(l>=p.length)return H.b(p,l)
i=p[l]
p=j.gbo(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gd6(p)
n.a.uniform3f(n.d,h,g,p)
p=m.b9(j.gbo(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gS(j)
g=i.d
h=p.gb5()
n=p.gaP()
p=p.gaY()
g.a.uniform3f(g.d,h,n,p)
p=j.gcC()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gcD()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcE()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.eh
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
p=this.a.cQ
if(l>=p.length)return H.b(p,l)
i=p[l]
p=j.gbo(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gd6(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbM(j).kg()
g=i.c
h=p.gaI(p)
n=p.gaJ(p)
p=p.gb1()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gbo(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gS(j)
n=i.e
h=p.gb5()
g=p.gaP()
p=p.gaY()
n.a.uniform3f(n.d,h,g,p)
p=j.gkd()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gkc()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcC()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gcD()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcE()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.ei
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
n=this.a.cR
if(l>=n.length)return H.b(n,l)
i=n[l]
n=j.gbq()
H.v(s,"$isf",p,"$asf")
if(!C.a.bh(s,n)){n.sbz(s.length)
C.a.h(s,n)}n=j.gbM(j)
h=i.d
g=n.gaI(n)
f=n.gaJ(n)
n=n.gb1()
h.a.uniform3f(h.d,g,f,n)
n=j.gc4()
f=i.b
g=n.gaI(n)
h=n.gaJ(n)
n=n.gb1()
f.a.uniform3f(f.d,g,h,n)
n=j.gbp(j)
h=i.c
g=n.gaI(n)
f=n.gaJ(n)
n=n.gb1()
h.a.uniform3f(h.d,g,f,n)
n=m.c3(j.gbM(j))
f=n.a
if(typeof f!=="number")return f.l()
g=n.b
if(typeof g!=="number")return g.l()
h=n.c
if(typeof h!=="number")return h.l()
h=n.B(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gS(j)
g=i.f
f=h.gb5()
n=h.gaP()
h=h.gaY()
g.a.uniform3f(g.d,f,n,h)
h=j.gbq()
n=h.gcV(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gfL()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbz())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.ej
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.y,u=v.length,p=[P.C],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
h=this.a.cS
if(l>=h.length)return H.b(h,l)
i=h[l]
h=j.gbq()
H.v(s,"$isf",n,"$asf")
if(!C.a.bh(s,h)){h.sbz(s.length)
C.a.h(s,h)}e=m.l(0,j.ga_(j))
h=j.ga_(j).b9(new V.az(0,0,0))
g=i.b
f=h.gt(h)
d=h.gv(h)
h=h.gd6(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.az(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ex(0)
d=i.d
o=new Float32Array(H.bG(H.v(new V.eQ(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isf",p,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gS(j)
h=i.e
f=d.gb5()
g=d.gaP()
d=d.gaY()
h.a.uniform3f(h.d,f,g,d)
d=j.gbq()
h=d.gcV(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcV(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gke(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcC()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcD()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcE()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.ek
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.G)(v),++k){j=v[k]
p=this.a.cT
if(l>=p.length)return H.b(p,l)
i=p[l]
p=j.gbq()
H.v(s,"$isf",z,"$asf")
if(!C.a.bh(s,p)){p.sbz(s.length)
C.a.h(s,p)}p=j.gbo(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gd6(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbM(j)
g=i.c
h=p.gaI(p)
n=p.gaJ(p)
p=p.gb1()
g.a.uniform3f(g.d,h,n,p)
p=j.gc4()
n=i.d
h=p.gaI(p)
g=p.gaJ(p)
p=p.gb1()
n.a.uniform3f(n.d,h,g,p)
p=j.gbp(j)
g=i.e
h=p.gaI(p)
n=p.gaJ(p)
p=p.gb1()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gbo(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gbq()
n=p.gcV(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gfL()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbz())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gS(j)
n=i.y
h=p.gb5()
g=p.gaP()
p=p.gaY()
n.a.uniform3f(n.d,h,g,p)
p=j.gko()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gkp()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcC()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gcD()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcE()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.Z(s,this.Q.d)
z=this.a
v=this.Q.d
z.ap(z.e5,z.bS,v)
break
case C.f:this.Z(s,this.Q.e)
z=this.a
v=this.Q.e
z.aj(z.e6,z.bS,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga_(v).ex(0)
a.Q=v}z=z.fy
z.toString
z.ae(v.ab(0,!0))}if(x.dy){this.Z(s,this.ch)
z=this.a
v=this.ch
z.aj(z.e7,z.e8,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bT
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.Z(s,this.cx.d)
z=this.a
v=this.cx.d
z.ap(z.e9,z.bU,v)
v=this.a
z=this.cx.f
v=v.bT
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.f:this.Z(s,this.cx.e)
z=this.a
v=this.cx.e
z.aj(z.ea,z.bU,v)
v=this.a
z=this.cx.f
v=v.bT
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bW
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bV
v.a.uniform1f(v.d,p)
break
case C.e:this.Z(s,this.cy.d)
z=this.a
v=this.cy.d
z.ap(z.eb,z.bX,v)
v=this.a
z=this.cy.f
v=v.bW
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bV
z.a.uniform1f(z.d,p)
break
case C.f:this.Z(s,this.cy.e)
z=this.a
v=this.cy.e
z.aj(z.ec,z.bX,v)
v=this.a
z=this.cy.f
v=v.bW
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bV
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bY
z.a.uniform1f(z.d,u)
break
case C.e:this.Z(s,this.db.d)
z=this.a
u=this.db.d
z.ap(z.ed,z.bZ,u)
u=this.a
z=this.db.f
u=u.bY
u.a.uniform1f(u.d,z)
break
case C.f:this.Z(s,this.db.e)
z=this.a
u=this.db.e
z.aj(z.ee,z.bZ,u)
u=this.a
z=this.db.f
u=u.bY
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.l(b.e,"$iscz")
z.aF(a)
z.aO(a)
z.eQ(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.e_()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dt().aK},
q:{
eO:function(){var z,y,x,w
z=new O.cJ()
y=O.df(V.aS)
z.e=y
y.bv(z.gfX(),z.gfY())
y=new O.bp(z,"emission")
y.c=C.c
y.f=new V.R(0,0,0)
z.f=y
y=new O.bp(z,"ambient")
y.c=C.c
y.f=new V.R(0,0,0)
z.r=y
y=new O.bp(z,"diffuse")
y.c=C.c
y.f=new V.R(0,0,0)
z.x=y
y=new O.bp(z,"invDiffuse")
y.c=C.c
y.f=new V.R(0,0,0)
z.y=y
y=new O.jt(z,"specular")
y.c=C.c
y.f=new V.R(0,0,0)
y.ch=100
z.z=y
y=new O.jq(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bp(z,"reflect")
y.c=C.c
y.f=new V.R(0,0,0)
z.cx=y
y=new O.js(z,"refract")
y.c=C.c
y.f=new V.R(0,0,0)
y.ch=1
z.cy=y
y=new O.jp(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.j5()
y.cc(D.ag)
y.e=H.h([],[D.i6])
y.f=H.h([],[D.jJ])
y.r=H.h([],[D.ke])
y.x=H.h([],[D.kp])
y.y=H.h([],[D.kq])
y.z=H.h([],[D.kr])
y.Q=null
y.ch=null
y.d7(y.gfW(),y.ghf(),y.ghh())
z.dx=y
x=y.Q
if(x==null){x=D.S()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.w]}
w=H.e(z.ghr(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.S()
w.ch=y}x=H.e(z.gbx(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},jp:{"^":"dt;0f,a,b,0c,0d,0e",
bF:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
bc:function(){this.da()
this.bF(1)},
aV:function(){this.ca()
this.bF(1)},
seU:function(a,b){var z
if(b==null)b=1
if(b<=0)this.dW(0)
else if(this.c===C.c){this.c=C.h
this.ca()
this.bF(1)
z=this.a
z.a=null
z.H(null)}this.bF(b)}},dt:{"^":"c;",
H:[function(a){this.a.H(H.d(a,"$isw"))},function(){return this.H(null)},"fd","$1","$0","gbx",0,2,3],
bc:["da",function(){}],
aV:["ca",function(){}],
dK:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.e(this.gbx(),{func:1,ret:-1,args:[D.w]})
C.a.a5(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.e(this.gbx(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E(this.b+".texture2D",x,this.d,this,[T.f9])
z.b=!0
this.a.H(z)}},
dL:function(a){},
dW:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.H(null)}this.bc()
this.dK(null)
this.dL(null)
this.a.H(null)},
sbr:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aV()
this.c=C.e
this.dL(null)
z=this.a
z.a=null
z.H(null)}this.dK(a)}},jq:{"^":"dt;a,b,0c,0d,0e"},bp:{"^":"dt;0f,a,b,0c,0d,0e",
cv:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.R])
y.b=!0
this.a.H(y)}},
bc:["dc",function(){this.da()
this.cv(new V.R(0,0,0))}],
aV:["cb",function(){this.ca()
this.cv(new V.R(1,1,1))}],
sS:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aV()
z=this.a
z.a=null
z.H(null)}this.cv(b)}},js:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
dJ:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
bc:function(){this.dc()
this.dJ(1)},
aV:function(){this.cb()
this.dJ(1)}},jt:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
bc:function(){this.dc()
this.bG(100)},
aV:function(){this.cb()
this.bG(100)}},co:{"^":"c;"}}],["","",,T,{"^":"",dH:{"^":"d8;"},f9:{"^":"dH;0b,0c,0d,0e,0f,0r,0x,0y,a"},kn:{"^":"c;a,0b,0c,0d,0e",
iH:function(a,b,c,d,e){var z,y,x,w
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
w=new T.f9(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.S()
z=W.ak
W.a2(x,"load",H.e(new T.ko(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bj:function(a){return this.iH(a,!1,!1,!1,!1)},
ht:function(a,b,c){var z,y,x,w
b=V.e3(b,2)
z=V.e3(a.width,2)
y=V.e3(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.dd(null,null)
x.width=z
x.height=y
w=H.d(C.k.eX(x,"2d"),"$isei")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nt(w.getImageData(0,0,x.width,x.height))}}},ko:{"^":"i:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ht(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.jc(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.ip()}++x.e}}}],["","",,X,{"^":"",eh:{"^":"c;",$isb4:1},im:{"^":"f7;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z}},jH:{"^":"c;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
bb:[function(a){var z
H.d(a,"$isw")
z=this.e
if(!(z==null))z.J(a)},function(){return this.bb(null)},"jj","$1","$0","gdg",0,2,3],
sbk:function(a){var z,y,x
if(!J.Q(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.e(this.gdg(),{func:1,ret:-1,args:[D.w]})
C.a.a5(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.e(this.gdg(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E("mover",x,this.a,this,[U.au])
z.b=!0
this.bb(z)}},
$isb4:1,
$iseh:1},f7:{"^":"c;"}}],["","",,B,{"^":"",
om:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.t.hv(x,(x&&C.t).dl(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.ak
W.a2(z,"scroll",H.e(new B.on(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
oo:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$isf",[P.j],"$asf")
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
u=W.dd(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.d(v.insertCell(-1),"$isc1")
x=c.length>0
s=x?6:5
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.d(q.insertCell(-1),"$isc1").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<3;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.d(q.insertCell(-1),"$isc1")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.d(q.insertCell(-1),"$isc1")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.d(q.insertCell(-1),"$isc1").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.om(a,y,!1,"../resources/SnowTop.png")},
op:function(a){P.kv(C.G,new B.oq(a))},
hO:{"^":"c;0a",
a9:function(a,b,c,d){var z,y,x,w,v
H.e(c,{func:1,ret:-1,args:[P.N]})
if(this.a==null)return
c.$1(d)
z=document
y=z.createElement("label")
x=y.style
x.whiteSpace="nowrap"
J.cw(this.a).h(0,y)
w=W.eA("checkbox")
w.checked=d
x=W.ak
W.a2(w,"change",H.e(new B.hP(c,w),{func:1,ret:-1,args:[x]}),!1,x)
y.appendChild(w)
v=z.createElement("span")
v.textContent=b
y.appendChild(v)
J.cw(this.a).h(0,z.createElement("br"))},
u:function(a,b,c){return this.a9(a,b,c,!1)}},
hP:{"^":"i:13;a,b",
$1:function(a){this.a.$1(this.b.checked)}},
jW:{"^":"c;a,0b",
a9:function(a,b,c,d){var z,y,x,w,v,u,t
H.e(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dM().gc1().i(0,z)==null)if(d){c.$0()
this.eR(b)
y=!0}else y=!1
else if(P.dM().gc1().i(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.cw(this.b).h(0,w)
u=W.eA("radio")
u.checked=y
u.name=z
z=W.ak
W.a2(u,"change",H.e(new B.jX(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.cw(this.b).h(0,x.createElement("br"))},
u:function(a,b,c){return this.a9(a,b,c,!1)},
eR:function(a){var z,y,x,w,v
z=P.dM()
y=P.j
x=P.jb(z.gc1(),y,y)
x.n(0,this.a,a)
w=z.eM(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.mm([],[]).d4(""),"",v)},
q:{
eZ:function(a){var z,y
z=new B.jW(a)
y=document.getElementById(a)
z.b=y
if(y==null)H.p("Failed to find "+z.j(0)+"._elemId for RadioGroup")
return z}}},
jX:{"^":"i:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.eR(this.c)
this.d.$0()}}},
on:{"^":"i:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.m(-0.05*C.i.at(this.b.scrollTop))+"px"
z.top=y}},
oq:{"^":"i:56;a",
$1:function(a){H.d(a,"$isbz")
P.cb(C.i.eP(this.a.giy(),2)+" fps")}}}],["","",,G,{"^":"",
ht:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z={}
B.oo("Test 032",H.h(["controls","shapes","scalars"],[P.j]),"The inspection test for shapes loaders. For generated shapes see test002. Note: Some shapes will take time to load.")
y=document
x=y.getElementById("threeDart")
if(x==null)H.p(P.q("Failed to find an element with the identifier, threeDart."))
w=E.kt(x,!0,!0,!0,!1)
z.a=!0
v=E.cC(null,!0,null,"",null,null)
u=new U.ew()
u.cc(U.au)
u.bv(u.gfV(),u.ghg())
u.e=null
u.f=V.cj()
u.r=0
t=w.r
s=new U.kW()
r=U.di()
r.sd5(0,!0)
r.scW(6.283185307179586)
r.scY(0)
r.saa(0,0)
r.scX(100)
r.sX(0)
r.scL(0.5)
s.b=r
r=r.gD()
r.toString
q={func:1,ret:-1,args:[D.w]}
p=H.e(s.gaU(),q)
C.a.h(r.a,p)
r=U.di()
r.sd5(0,!0)
r.scW(6.283185307179586)
r.scY(0)
r.saa(0,0)
r.scX(100)
r.sX(0)
r.scL(0.5)
s.c=r
C.a.h(r.gD().a,p)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
o=new X.aU(!1,!1,!1)
n=s.d
s.d=o
r=[X.aU]
p=new D.E("modifiers",n,o,s,r)
p.b=!0
s.U(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.E("invertX",p,!1,s,[P.N])
p.b=!0
s.U(p)}p=s.r
if(p!==!0){s.r=!0
p=new D.E("invertY",p,!0,s,[P.N])
p.b=!0
s.U(p)}s.be(t)
u.h(0,s)
t=w.r
s=new U.kV()
p=U.di()
p.sd5(0,!0)
p.scW(6.283185307179586)
p.scY(0)
p.saa(0,0)
p.scX(100)
p.sX(0)
p.scL(0.2)
s.b=p
p=p.gD()
p.toString
m=H.e(s.gaU(),q)
C.a.h(p.a,m)
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
o=new X.aU(!0,!1,!1)
n=s.c
s.c=o
p=new D.E("modifiers",n,o,s,r)
p.b=!0
s.U(p)
s.be(t)
u.h(0,s)
t=w.r
s=new U.kX()
s.c=0.01
s.d=0
s.e=0
o=new X.aU(!1,!1,!1)
s.b=o
r=new D.E("modifiers",null,o,s,r)
r.b=!0
s.U(r)
s.be(t)
u.h(0,s)
v.sbk(u)
l=new O.iu()
l.b=new V.F(0,0,-1)
l.c=new V.R(0.2,0.3,0.4)
l.d=new V.R(0.1,0.2,0.3)
l.e=new V.R(0.7,0.7,0.7)
l.f=new V.R(0.3,0.3,0.3)
l.r=new V.R(0.5,0.5,0.5)
l.x=new V.R(0.5,0.5,0.5)
l.y=new V.R(1,1,1)
l.z=new V.R(0.8,0.8,0.8)
l.Q=!1
l.ch=!1
l.cx=!1
l.cy=!1
l.db=!1
l.dx=!1
l.dy=!1
l.fr=!1
l.fx=!1
l.fy=!1
l.go=!1
l.id=!1
l.k1=!1
l.k2=!1
l.k3=!1
l.k4=!1
l.r1=!1
l.r2=1
l.sad(0.4)
u=new M.ie()
t=O.df(E.ai)
u.d=t
t.bv(u.gh_(),u.gh0())
u.e=null
u.f=null
u.r=null
u.x=null
k=new X.jH()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.sbk(null)
t=k.b
if(!$.r.$2(t,1.0471975511965976)){n=k.b
k.b=1.0471975511965976
t=new D.E("fov",n,1.0471975511965976,k,[P.C])
t.b=!0
k.bb(t)}t=k.c
if(!$.r.$2(t,0.1)){n=k.c
k.c=0.1
t=new D.E("near",n,0.1,k,[P.C])
t.b=!0
k.bb(t)}t=k.d
if(!$.r.$2(t,2000)){n=k.d
k.d=2000
t=new D.E("far",n,2000,k,[P.C])
t.b=!0
k.bb(t)}t=u.a
if(t!==k){if(t!=null){t=t.gD()
t.toString
s=H.e(u.gav(),q)
C.a.a5(t.a,s)}n=u.a
u.a=k
t=k.gD()
t.toString
s=H.e(u.gav(),q)
C.a.h(t.a,s)
t=new D.E("camera",n,u.a,u,[X.eh])
t.b=!0
u.aR(t)}j=new X.im()
t=new V.a5(0,0,0,1)
j.a=t
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
t=V.f0(0,0,1,1)
j.r=t
t=u.b
if(t!==j){if(t!=null){t=t.gD()
t.toString
s=H.e(u.gav(),q)
C.a.a5(t.a,s)}n=u.b
u.b=j
t=j.gD()
t.toString
s=H.e(u.gav(),q)
C.a.h(t.a,s)
t=new D.E("target",n,u.b,u,[X.f7])
t.b=!0
u.aR(t)}u.sb8(null)
u.sb8(l)
u.d.h(0,v)
t=u.a
i=V.eS(0,0,5)
s=new U.ek()
s.a=i
t.sbk(s)
t=w.d
if(t!==u){if(t!=null){t=t.gD()
t.toString
s=H.e(w.gde(),q)
C.a.a5(t.a,s)}w.d=u
u=u.gD()
u.toString
q=H.e(w.gde(),q)
C.a.h(u.a,q)
w.fb()}u=new B.hO()
y=y.getElementById("controls")
u.a=y
if(y==null)H.p("Failed to find controls for CheckGroup")
u.a9(0,"Material",new G.nJ(z,v),!0)
u.u(0,"Filled",new G.nK(l))
u.a9(0,"Wire Frame",new G.nL(l),!0)
u.u(0,"Vertices",new G.nW(l))
u.u(0,"Normals",new G.o6(l))
u.u(0,"Binormals",new G.o8(l))
u.u(0,"Tangentals",new G.o9(l))
u.u(0,"Face Centers",new G.oa(l))
u.u(0,"Face Normals",new G.ob(l))
u.u(0,"Face Binormals",new G.oc(l))
u.u(0,"Face Tangentals",new G.od(l))
u.u(0,"Colors",new G.nM(l))
u.u(0,"Textures2D",new G.nN(l))
u.u(0,"TexturesCube",new G.nO(l))
u.u(0,"Weight",new G.nP(l))
u.a9(0,"Axis",new G.nQ(l),!0)
u.u(0,"AABB",new G.nR(l))
z=new G.og(z,w,v,new G.oe(),l)
y=B.eZ("shapes")
y.a9(0,"Cube",new G.nS(z),!0)
y.u(0,"Low Poly Tree",new G.nT(z))
y.u(0,"Low Poly Wolf",new G.nU(z))
y.u(0,"Plant",new G.nV(z))
z=B.eZ("scalars")
z.u(0,"0.01",new G.nX(l))
z.u(0,"0.02",new G.nY(l))
z.u(0,"0.04",new G.nZ(l))
z.u(0,"0.06",new G.o_(l))
z.u(0,"0.08",new G.o0(l))
z.u(0,"0.1",new G.o1(l))
z.u(0,"0.2",new G.o2(l))
z.a9(0,"0.4",new G.o3(l),!0)
z.u(0,"0.6",new G.o4(l))
z.u(0,"0.8",new G.o5(l))
z.u(0,"1.0",new G.o7(l))
B.op(w)},
nJ:{"^":"i:1;a,b",
$1:function(a){var z
this.a.a=a
z=this.b.y.a
if(z.length>1)J.hE(z[0],a)}},
nK:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.E("showFilled",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nL:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.E("showWireFrame",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nW:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.E("showVertices",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
o6:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.E("showNormals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
o8:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.E("showBinormals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
o9:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.E("showTangentals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
oa:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.E("showFaceCenters",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
ob:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.E("showFaceNormals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
oc:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.E("showFaceBinormals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
od:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.E("showFaceTangentals",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nM:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.E("showColorFill",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nN:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.E("showTxt2DColor",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nO:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.E("showTxtCube",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nP:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.E("showWeight",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nQ:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.E("showAxis",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
nR:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.E("showAABB",!a,a,z,[P.N])
y.b=!0
z.H(y)}}},
oe:{"^":"i:58;",
$1:function(a){var z,y,x
z=E.cC(null,!0,null,"",null,null)
z.sd8(0,a.c)
y=a.y
x=H.e(new G.of(z,this),{func:1,ret:-1,args:[H.u(y,0)]})
C.a.A(y.a,x)
return z}},
of:{"^":"i:59;a,b",
$1:function(a){H.d(a,"$isai")
this.a.y.h(0,this.b.$1(a))}},
og:{"^":"i:60;a,b,c,d,e",
$1:function(a){var z=0,y=P.aa(null),x=this,w,v,u,t,s
var $async$$1=P.ab(function(b,c){if(b===1)return P.a7(c,y)
while(true)switch(z){case 0:z=2
return P.am(O.cl(a,x.b.f,null,!1),$async$$1)
case 2:w=c
w.j6(3.5)
v=x.c
u=v.y
t=u.a
if(t.length>0){u.a=H.h([],[H.u(u,0)])
u.fa(0,t)}v.y.h(0,w)
w.b=x.a.a
s=x.d.$1(w)
s.sb8(x.e)
v.y.h(0,s)
return P.a8(null,y)}})
return P.a9($async$$1,y)}},
nS:{"^":"i:14;a",
$0:function(){var z=0,y=P.aa(P.z),x=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Cube.obj")
return P.a8(null,y)}})
return P.a9($async$$0,y)}},
nT:{"^":"i:14;a",
$0:function(){var z=0,y=P.aa(P.z),x=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/tree/tree.obj")
return P.a8(null,y)}})
return P.a9($async$$0,y)}},
nU:{"^":"i:14;a",
$0:function(){var z=0,y=P.aa(P.z),x=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Wolf.obj")
return P.a8(null,y)}})
return P.a9($async$$0,y)}},
nV:{"^":"i:14;a",
$0:function(){var z=0,y=P.aa(P.z),x=this
var $async$$0=P.ab(function(a,b){if(a===1)return P.a7(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/plant/plant.obj")
return P.a8(null,y)}})
return P.a9($async$$0,y)}},
nX:{"^":"i:0;a",
$0:function(){this.a.sad(0.01)}},
nY:{"^":"i:0;a",
$0:function(){this.a.sad(0.02)}},
nZ:{"^":"i:0;a",
$0:function(){this.a.sad(0.04)}},
o_:{"^":"i:0;a",
$0:function(){this.a.sad(0.06)}},
o0:{"^":"i:0;a",
$0:function(){this.a.sad(0.08)}},
o1:{"^":"i:0;a",
$0:function(){this.a.sad(0.1)}},
o2:{"^":"i:0;a",
$0:function(){this.a.sad(0.2)}},
o3:{"^":"i:0;a",
$0:function(){this.a.sad(0.4)}},
o4:{"^":"i:0;a",
$0:function(){this.a.sad(0.6)}},
o5:{"^":"i:0;a",
$0:function(){this.a.sad(0.8)}},
o7:{"^":"i:0;a",
$0:function(){this.a.sad(1)}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eE.prototype
return J.eD.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.eF.prototype
if(typeof a=="boolean")return J.iZ.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.ct(a)}
J.nz=function(a){if(typeof a=="number")return J.ch.prototype
if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.ct(a)}
J.aA=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.ct(a)}
J.cr=function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.ct(a)}
J.hl=function(a){if(typeof a=="number")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cS.prototype
return a}
J.cs=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cS.prototype
return a}
J.b2=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.ct(a)}
J.cv=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nz(a).m(a,b)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).C(a,b)}
J.e5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.hl(a).au(a,b)}
J.d2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hl(a).E(a,b)}
J.X=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hq(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aA(a).i(a,b)}
J.d3=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hq(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cr(a).n(a,b,c)}
J.hy=function(a,b){return J.cs(a).K(a,b)}
J.hz=function(a,b,c){return J.b2(a).hp(a,b,c)}
J.hA=function(a,b,c,d){return J.b2(a).dR(a,b,c,d)}
J.hB=function(a,b){return J.cs(a).Y(a,b)}
J.d4=function(a,b,c){return J.aA(a).ii(a,b,c)}
J.d5=function(a,b){return J.cr(a).L(a,b)}
J.hC=function(a,b,c,d){return J.cr(a).aL(a,b,c,d)}
J.d6=function(a,b){return J.cr(a).A(a,b)}
J.cw=function(a){return J.b2(a).gcI(a)}
J.bk=function(a){return J.M(a).gW(a)}
J.bP=function(a){return J.cr(a).ga4(a)}
J.aq=function(a){return J.aA(a).gk(a)}
J.e6=function(a,b){return J.aA(a).P(a,b)}
J.hD=function(a,b){return J.b2(a).j4(a,b)}
J.hE=function(a,b){return J.b2(a).scN(a,b)}
J.hF=function(a,b){return J.b2(a).sa6(a,b)}
J.e7=function(a,b,c){return J.cs(a).w(a,b,c)}
J.ar=function(a){return J.M(a).j(a)}
J.d7=function(a){return J.cs(a).d3(a)}
I.aN=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.dc.prototype
C.t=W.i0.prototype
C.H=W.bU.prototype
C.I=J.t.prototype
C.a=J.ba.prototype
C.J=J.eD.prototype
C.d=J.eE.prototype
C.q=J.eF.prototype
C.i=J.ch.prototype
C.b=J.ci.prototype
C.Q=J.bW.prototype
C.V=H.dy.prototype
C.W=W.jC.prototype
C.z=J.jI.prototype
C.X=P.dC.prototype
C.r=J.cS.prototype
C.A=W.c3.prototype
C.B=W.lf.prototype
C.D=new P.hK(!1)
C.C=new P.hJ(C.D)
C.E=new P.jG()
C.F=new P.l4()
C.j=new P.m7()
C.c=new A.cA(0,"ColorSourceType.None")
C.h=new A.cA(1,"ColorSourceType.Solid")
C.e=new A.cA(2,"ColorSourceType.Texture2D")
C.f=new A.cA(3,"ColorSourceType.TextureCube")
C.G=new P.bS(5e6)
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
C.w=H.h(I.aN([127,2047,65535,1114111]),[P.o])
C.m=H.h(I.aN([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.h(I.aN([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.h(I.aN([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.S=H.h(I.aN([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.p=H.h(I.aN([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.h(I.aN([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.T=H.h(I.aN([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.h(I.aN([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.R=H.h(I.aN([]),[P.j])
C.U=new H.i_(0,{},C.R,[P.j,P.j])
C.l=new P.kY(!1)
$.aR=0
$.bQ=null
$.ec=null
$.dV=!1
$.ho=null
$.hg=null
$.hw=null
$.cZ=null
$.d0=null
$.e0=null
$.bH=null
$.c7=null
$.c8=null
$.dW=!1
$.U=C.j
$.eq=null
$.ep=null
$.eo=null
$.en=null
$.hc=null
$.r=V.ju()
$.iM="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iE="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.eW=null
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
I.$lazy(y,x,w)}})(["em","$get$em",function(){return H.hm("_$dart_dartClosure")},"dp","$get$dp",function(){return H.hm("_$dart_js")},"fd","$get$fd",function(){return H.aX(H.cR({
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aX(H.cR({$method$:null,
toString:function(){return"$receiver$"}}))},"ff","$get$ff",function(){return H.aX(H.cR(null))},"fg","$get$fg",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fk","$get$fk",function(){return H.aX(H.cR(void 0))},"fl","$get$fl",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fi","$get$fi",function(){return H.aX(H.fj(null))},"fh","$get$fh",function(){return H.aX(function(){try{null.$method$}catch(z){return z.message}}())},"fn","$get$fn",function(){return H.aX(H.fj(void 0))},"fm","$get$fm",function(){return H.aX(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dP","$get$dP",function(){return P.lk()},"c9","$get$c9",function(){return[]},"fy","$get$fy",function(){return P.l1()},"fG","$get$fG",function(){return H.jA(H.bG(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"h3","$get$h3",function(){return P.dB("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ha","$get$ha",function(){return P.na()},"el","$get$el",function(){return{}},"fB","$get$fB",function(){return Z.aH(0)},"fz","$get$fz",function(){return Z.aH(511)},"aK","$get$aK",function(){return Z.aH(1)},"aJ","$get$aJ",function(){return Z.aH(2)},"aI","$get$aI",function(){return Z.aH(4)},"aZ","$get$aZ",function(){return Z.aH(8)},"b_","$get$b_",function(){return Z.aH(16)},"b5","$get$b5",function(){return Z.aH(32)},"bD","$get$bD",function(){return Z.aH(64)},"fA","$get$fA",function(){return Z.aH(96)},"bf","$get$bf",function(){return Z.aH(128)},"aY","$get$aY",function(){return Z.aH(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:P.z,args:[P.N]},{func:1,ret:F.ap,args:[F.ap]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.z,args:[F.T]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.z,args:[F.I]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.o,[P.n,E.ai]]},{func:1,ret:P.z,args:[W.ak]},{func:1,ret:[P.af,P.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[D.w]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[P.c],opt:[P.as]},{func:1,ret:P.j,args:[P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bX]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[P.o,[P.n,D.ag]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.o,[P.n,U.au]]},{func:1,ret:-1,args:[P.o,[P.n,V.aS]]},{func:1,ret:W.ad,args:[W.O]},{func:1,ret:P.z,args:[W.cm]},{func:1,args:[,P.j]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.N,args:[W.O]},{func:1,ret:-1,args:[P.j,P.o]},{func:1,args:[P.j]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[,P.as]},{func:1,ret:P.z,args:[P.a0]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.z,args:[P.j]},{func:1,ret:P.z,args:[P.o,,]},{func:1,ret:P.N,args:[P.C,P.C]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.N,args:[[P.n,D.ag]]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.z,args:[P.j,,]},{func:1,ret:P.W,args:[P.o]},{func:1,ret:[P.J,P.j,P.j],args:[[P.J,P.j,P.j],P.j]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:F.ap,args:[F.ap],named:{color:V.a5}},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[F.I,F.I]},{func:1,ret:P.z,args:[F.bb]},{func:1,ret:P.W,args:[,,]},{func:1,ret:P.o,args:[[P.f,P.o],P.o]},{func:1,ret:P.z,args:[P.bz]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:E.ai,args:[E.ai]},{func:1,ret:P.z,args:[E.ai]},{func:1,ret:[P.af,,],args:[P.j]},{func:1,ret:P.j,args:[W.bU]},{func:1,ret:-1,opt:[P.c]},{func:1,ret:-1,args:[W.c3]}]
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
if(x==y)H.os(d||a)
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
Isolate.aN=a.aN
Isolate.e_=a.e_
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
if(typeof dartMainRunner==="function")dartMainRunner(G.ht,[])
else G.ht([])})})()
//# sourceMappingURL=test.dart.js.map
