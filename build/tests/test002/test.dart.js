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
var d=supportsDirectProtoAccess&&b2!="c"
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dq=function(){}
var dart=[["","",,H,{"^":"",oH:{"^":"c;a"}}],["","",,J,{"^":"",
Q:function(a){return void 0},
dv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dt==null){H.n3()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c1("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cR()]
if(v!=null)return v
v=H.n9(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cR(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
r:{"^":"c;",
B:function(a,b){return a===b},
gW:function(a){return H.bC(a)},
i:["dw",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
it:{"^":"r;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isP:1},
ec:{"^":"r;",
B:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isD:1},
cS:{"^":"r;",
gW:function(a){return 0},
i:["dz",function(a){return String(a)}]},
j0:{"^":"cS;"},
c2:{"^":"cS;"},
bW:{"^":"cS;",
i:function(a){var z=a[$.$get$dW()]
if(z==null)return this.dz(a)
return"JavaScript function for "+H.k(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscO:1},
b4:{"^":"r;$ti",
h:function(a,b){H.x(b,H.w(a,0))
if(!!a.fixed$length)H.J(P.y("add"))
a.push(b)},
fW:function(a,b){if(!!a.fixed$length)H.J(P.y("removeAt"))
if(b<0||b>=a.length)throw H.a(P.bZ(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.J(P.y("remove"))
for(z=0;z<a.length;++z)if(J.E(a[z],b)){a.splice(z,1)
return!0}return!1},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b0(a))}},
F:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.k(z,y,H.k(a[y]))
return z.join(b)},
fB:function(a){return this.F(a,"")},
fs:function(a,b,c,d){var z,y,x
H.x(b,d)
H.d(c,{func:1,ret:d,args:[d,H.w(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b0(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bl:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.i([],[H.w(a,0)])
return H.i(a.slice(b,c),[H.w(a,0)])},
gau:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ir())},
at:function(a,b,c,d){var z
H.x(d,H.w(a,0))
if(!!a.immutable$list)H.J(P.y("fill range"))
P.aM(b,c,a.length,null,null,null)
for(z=b;z.I(0,c);z=z.t(0,1))a[z]=d},
i:function(a){return P.cP(a,"[","]")},
ga2:function(a){return new J.aJ(a,a.length,0,[H.w(a,0)])},
gW:function(a){return H.bC(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.J(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
return a[b]},
k:function(a,b,c){H.B(b)
H.x(c,H.w(a,0))
if(!!a.immutable$list)H.J(P.y("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
a[b]=c},
$ism:1,
$ish:1,
u:{
is:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.bw(H.i(a,[b]))},
bw:function(a){H.bP(a)
a.fixed$length=Array
return a},
oF:[function(a,b){return J.ha(H.h_(a,"$isak"),H.h_(b,"$isak"))},"$2","mB",8,0,54]}},
oG:{"^":"b4;$ti"},
aJ:{"^":"c;a,b,c,0d,$ti",
gR:function(a){return this.d},
J:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.I(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bU:{"^":"r;",
aF:function(a,b){var z
H.fZ(b)
if(typeof b!=="number")throw H.a(H.a7(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbd(b)
if(this.gbd(a)===z)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
bc:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.y(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.y(""+a+".round()"))},
dj:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+z
return z},
aZ:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.J(P.y("Unexpected toString result: "+z))
x=J.as(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.m("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.a7(b))
return a*b},
b1:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cH(a,b)},
aj:function(a,b){return(a|0)===a?a/b|0:this.cH(a,b)},
cH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.y("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aD:function(a,b){var z
if(a>0)z=this.cF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eR:function(a,b){if(b<0)throw H.a(H.a7(b))
return this.cF(a,b)},
cF:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.a7(b))
return a<b},
a6:function(a,b){if(typeof b!=="number")throw H.a(H.a7(b))
return a>b},
$isak:1,
$asak:function(){return[P.a0]},
$isq:1,
$isa0:1},
eb:{"^":"bU;",$isl:1},
iu:{"^":"bU;"},
bV:{"^":"r;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b<0)throw H.a(H.aH(a,b))
if(b>=a.length)H.J(H.aH(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aH(a,b))
return a.charCodeAt(b)},
t:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aM:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.J(H.a7(b))
c=P.aM(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.J(H.a7(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.J(H.a7(c))
if(typeof c!=="number")return c.I()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.a9(a,b,0)},
w:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.J(H.a7(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.I()
if(b<0)throw H.a(P.bZ(b,null,null))
if(b>c)throw H.a(P.bZ(b,null,null))
if(c>a.length)throw H.a(P.bZ(c,null,null))
return a.substring(b,c)},
av:function(a,b){return this.w(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
ac:function(a,b){return this.fM(a,b," ")},
fN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.m(c,z)},
d2:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
d1:function(a,b){return this.d2(a,b,0)},
fe:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.h2(a,b,c)},
aF:function(a,b){var z
H.O(b)
if(typeof b!=="string")throw H.a(H.a7(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isak:1,
$asak:function(){return[P.j]},
$iseq:1,
$isj:1}}],["","",,H,{"^":"",
cC:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ir:function(){return new P.jG("No element")},
jF:function(a,b,c){var z
H.v(a,"$ish",[c],"$ash")
H.d(b,{func:1,ret:P.l,args:[c,c]})
z=J.ao(a)
if(typeof z!=="number")return z.E()
H.c_(a,0,z-1,b,c)},
c_:function(a,b,c,d,e){H.v(a,"$ish",[e],"$ash")
H.d(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.jE(a,b,c,d,e)
else H.jD(a,b,c,d,e)},
jE:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$ish",[e],"$ash")
H.d(d,{func:1,ret:P.l,args:[e,e]})
for(z=b+1,y=J.as(a);z<=c;++z){x=y.j(a,z)
w=z
while(!0){if(!(w>b&&J.aA(d.$2(y.j(a,w-1),x),0)))break
v=w-1
y.k(a,w,y.j(a,v))
w=v}y.k(a,w,x)}},
jD:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$ish",[a2],"$ash")
H.d(a1,{func:1,ret:P.l,args:[a2,a2]})
z=C.c.aj(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.aj(b+a0,2)
v=w-z
u=w+z
t=J.as(a)
s=t.j(a,y)
r=t.j(a,v)
q=t.j(a,w)
p=t.j(a,u)
o=t.j(a,x)
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
p=n}t.k(a,y,s)
t.k(a,w,q)
t.k(a,x,o)
t.k(a,v,t.j(a,b))
t.k(a,u,t.j(a,a0))
m=b+1
l=a0-1
if(J.E(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.j(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.I()
if(i<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else for(;!0;){i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.a6()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
l=h
m=g
break}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.j(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.I()
if(e<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a6()
if(d>0)for(;!0;){i=a1.$2(t.j(a,l),p)
if(typeof i!=="number")return i.a6()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.I()
h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
m=g}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.k(a,b,t.j(a,c))
t.k(a,c,r)
c=l+1
t.k(a,a0,t.j(a,c))
t.k(a,c,p)
H.c_(a,b,m-2,a1,a2)
H.c_(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.E(a1.$2(t.j(a,m),r),0);)++m
for(;J.E(a1.$2(t.j(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.j(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.j(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.I()
h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
m=g}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)}l=h
break}}H.c_(a,m,l,a1,a2)}else H.c_(a,m,l,a1,a2)},
a5:{"^":"kb;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$asco:function(){return[P.l]},
$asu:function(){return[P.l]},
$asm:function(){return[P.l]},
$ash:function(){return[P.l]}},
hH:{"^":"m;"},
ej:{"^":"c;a,b,c,0d,$ti",
gR:function(a){return this.d},
J:function(){var z,y,x,w
z=this.a
y=J.as(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b0(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iO:{"^":"m;a,b,$ti",
ga2:function(a){return new H.iP(J.bs(this.a),this.b,this.$ti)},
gl:function(a){return J.ao(this.a)},
K:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asm:function(a,b){return[b]}},
iP:{"^":"cQ;0a,b,c,$ti",
J:function(){var z=this.b
if(z.J()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascQ:function(a,b){return[b]}},
kI:{"^":"m;a,b,$ti",
ga2:function(a){return new H.kJ(J.bs(this.a),this.b,this.$ti)}},
kJ:{"^":"cQ;a,b,$ti",
J:function(){var z,y
for(z=this.a,y=this.b;z.J();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
ce:{"^":"c;$ti"},
co:{"^":"c;$ti",
k:function(a,b,c){H.B(b)
H.x(c,H.az(this,"co",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))},
at:function(a,b,c,d){H.x(d,H.az(this,"co",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))}},
kb:{"^":"cg+co;"}}],["","",,H,{"^":"",
hw:function(){throw H.a(P.y("Cannot modify unmodifiable Map"))},
mX:function(a){return init.types[H.B(a)]},
fT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.Q(a).$isG},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.a7(a))
return z},
bC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j9:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
b8:function(a){var z,y,x,w,v,u,t,s,r
z=J.Q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.Q(a).$isc2){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.av(w,1)
r=H.du(H.bP(H.aY(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
j1:function(){if(!!self.location)return self.location.href
return},
es:function(a){var z,y,x,w,v
H.bP(a)
z=J.ao(a)
if(typeof z!=="number")return z.ds()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ja:function(a){var z,y,x,w
z=H.i([],[P.l])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a7(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aD(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a7(w))}return H.es(z)},
et:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a7(x))
if(x<0)throw H.a(H.a7(x))
if(x>65535)return H.ja(a)}return H.es(a)},
jb:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ds()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cj:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aD(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j8:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
j6:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
j2:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
j3:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
j5:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
j7:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
j4:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
n:function(a){throw H.a(H.a7(a))},
e:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aH(a,b))},
aH:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.B(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.bZ(b,"index",null)},
mS:function(a,b,c){if(a>c)return new P.ck(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ck(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
a7:function(a){return new P.aI(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.ep()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h4})
z.name=""}else z.toString=H.h4
return z},
h4:function(){return J.ab(this.dartException)},
J:function(a){throw H.a(a)},
I:function(a){throw H.a(P.b0(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.od(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aD(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cT(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eo(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eO()
u=$.$get$eP()
t=$.$get$eQ()
s=$.$get$eR()
r=$.$get$eV()
q=$.$get$eW()
p=$.$get$eT()
$.$get$eS()
o=$.$get$eY()
n=$.$get$eX()
m=v.ab(y)
if(m!=null)return z.$1(H.cT(H.O(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.cT(H.O(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eo(H.O(y),m))}}return z.$1(new H.ka(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bq:function(a){var z
if(a==null)return new H.fm(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fm(a)},
mW:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
n5:function(a,b,c,d,e,f){H.f(a,"$iscO")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.T("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n5)
a.$identity=z
return z},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.Q(d).$ish){z.$reflectionInfo=d
x=H.jh(z).r}else x=d
w=e?Object.create(new H.jH().constructor.prototype):Object.create(new H.cJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.t()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dQ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mX,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dI:H.cK
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dQ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hp:function(a,b,c,d){var z=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hp(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.t()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bt
if(v==null){v=H.cc("self")
$.bt=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.t()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bt
if(v==null){v=H.cc("self")
$.bt=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hq:function(a,b,c,d){var z,y
z=H.cK
y=H.dI
switch(b?-1:a){case 0:throw H.a(H.jr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hr:function(a,b){var z,y,x,w,v,u,t,s
z=$.bt
if(z==null){z=H.cc("self")
$.bt=z}y=$.dH
if(y==null){y=H.cc("receiver")
$.dH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aB
if(typeof y!=="number")return y.t()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.t()
$.aB=y+1
return new Function(z+y+"}")()},
dn:function(a,b,c,d,e,f,g){var z,y
z=J.bw(H.bP(b))
H.B(c)
y=!!J.Q(d).$ish?J.bw(d):d
return H.hs(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
mU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
fZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
dx:function(a,b){throw H.a(H.ay(a,H.O(b).substring(3)))},
o4:function(a,b){var z=J.as(b)
throw H.a(H.hm(a,z.w(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.dx(a,b)},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else z=!0
if(z)return a
H.o4(a,b)},
h_:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.Q(a)[b])return a
H.dx(a,b)},
bP:function(a){if(a==null)return a
if(!!J.Q(a).$ish)return a
throw H.a(H.ay(a,"List"))},
fX:function(a,b){if(a==null)return a
if(!!J.Q(a).$ish)return a
if(J.Q(a)[b])return a
H.dx(a,b)},
fM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
c4:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fM(J.Q(a))
if(z==null)return!1
y=H.fS(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.dj)return a
$.dj=!0
try{if(H.c4(a,b))return a
z=H.c7(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dj=!1}},
dr:function(a,b){if(a!=null&&!H.dm(a,b))H.J(H.ay(a,H.c7(b)))
return a},
fE:function(a){var z
if(a instanceof H.b){z=H.fM(J.Q(a))
if(z!=null)return H.c7(z)
return"Closure"}return H.b8(a)},
oa:function(a){throw H.a(new P.hA(H.O(a)))},
fP:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
pD:function(a,b,c){return H.br(a["$as"+H.k(c)],H.aY(b))},
aX:function(a,b,c,d){var z
H.O(c)
H.B(d)
z=H.br(a["$as"+H.k(c)],H.aY(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.O(b)
H.B(c)
z=H.br(a["$as"+H.k(b)],H.aY(a))
return z==null?null:z[c]},
w:function(a,b){var z
H.B(b)
z=H.aY(a)
return z==null?null:z[b]},
c7:function(a){var z=H.aZ(a,null)
return z},
aZ:function(a,b){var z,y
H.v(b,"$ish",[P.j],"$ash")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.du(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.mA(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$ish",z,"$ash")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.t(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aZ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aZ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aZ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mV(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
du:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ish",[P.j],"$ash")
if(a==null)return""
z=new P.aE("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}v="<"+z.i(0)+">"
return v},
br:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aY(a)
y=J.Q(a)
if(y[b]==null)return!1
return H.fH(H.br(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.bP(c)
H.O(d)
if(a==null)return a
z=H.bO(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.du(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fH:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
pB:function(a,b,c){return a.apply(b,H.br(J.Q(b)["$as"+H.k(c)],H.aY(b)))},
fU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="D"||a===-1||a===-2||H.fU(z)}return!1},
dm:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="c"||b.builtin$cls==="D"||b===-1||b===-2||H.fU(b)
return z}z=b==null||b===-1||b.builtin$cls==="c"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c4(a,b)}y=J.Q(a).constructor
x=H.aY(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.dm(a,b))throw H.a(H.ay(a,H.c7(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cO"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bv" in y.prototype))return!1
w=y.prototype["$as"+"bv"]
v=H.br(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c7(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fH(H.br(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.o2(m,b,l,d)},
o2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
pC:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
n9:function(a){var z,y,x,w,v,u
z=H.O($.fQ.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fG.$2(a,z))
if(z!=null){y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cE(x)
$.cz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cD[z]=x
return x}if(v==="-"){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h0(a,x)
if(v==="*")throw H.a(P.c1(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h0(a,x)},
h0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dv(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dv(a,!1,null,!!a.$isG)},
o1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dv(z,c,null,null)},
n3:function(){if(!0===$.dt)return
$.dt=!0
H.n4()},
n4:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cD=Object.create(null)
H.n_()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h1.$1(v)
if(u!=null){t=H.o1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n_:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.bo(C.E,H.bo(C.J,H.bo(C.o,H.bo(C.o,H.bo(C.I,H.bo(C.F,H.bo(C.G(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fQ=new H.n0(v)
$.fG=new H.n1(u)
$.h1=new H.n2(t)},
bo:function(a,b){return a(b)||b},
h2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hv:{"^":"c;$ti",
i:function(a){return P.cU(this)},
k:function(a,b,c){H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
return H.hw()},
$isL:1},
hx:{"^":"hv;a,b,c,$ti",
gl:function(a){return this.a},
ba:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.ba(0,b))return
return this.cv(b)},
cv:function(a){return this.b[H.O(a)]},
v:function(a,b){var z,y,x,w,v
z=H.w(this,1)
H.d(b,{func:1,ret:-1,args:[H.w(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.cv(v),z))}}},
jg:{"^":"c;a,b,c,d,e,f,r,0x",u:{
jh:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bw(z)
y=z[0]
x=z[1]
return new H.jg(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jV:{"^":"c;a,b,c,d,e,f",
ab:function(a){var z,y,x
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eU:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iY:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
eo:function(a,b){return new H.iY(a,b==null?null:b.method)}}},
ix:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
cT:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ix(a,y,z?null:b.receiver)}}},
ka:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
od:{"^":"b:25;a",
$1:function(a){if(!!J.Q(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fm:{"^":"c;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
b:{"^":"c;",
i:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gdq:function(){return this},
$iscO:1,
gdq:function(){return this}},
eG:{"^":"b;"},
jH:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cJ:{"^":"eG;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bC(this.a)
else y=typeof z!=="object"?J.bQ(z):H.bC(z)
return(y^H.bC(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
u:{
cK:function(a){return a.a},
dI:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cJ("self","target","receiver","name")
y=J.bw(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jW:{"^":"a6;a",
i:function(a){return this.a},
u:{
ay:function(a,b){return new H.jW("TypeError: "+H.k(P.cd(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a6;a",
i:function(a){return this.a},
u:{
hm:function(a,b){return new H.hl("CastError: "+H.k(P.cd(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
jq:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
jr:function(a){return new H.jq(a)}}},
aK:{"^":"iL;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.iB(this,[H.w(this,0)])},
ba:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cs(y,b)}else return this.fw(b)},
fw:function(a){var z=this.d
if(z==null)return!1
return this.bV(this.bs(z,this.bU(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b4(w,b)
x=y==null?null:y.b
return x}else return this.fz(b)},
fz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bs(z,this.bU(a))
x=this.bV(y,a)
if(x<0)return
return y[x].b},
k:function(a,b,c){var z,y
H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bx()
this.b=z}this.ck(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bx()
this.c=y}this.ck(y,b,c)}else this.fA(b,c)},
fA:function(a,b){var z,y,x,w
H.x(a,H.w(this,0))
H.x(b,H.w(this,1))
z=this.d
if(z==null){z=this.bx()
this.d=z}y=this.bU(a)
x=this.bs(z,y)
if(x==null)this.bD(z,y,[this.by(a,b)])
else{w=this.bV(x,a)
if(w>=0)x[w].b=b
else x.push(this.by(a,b))}},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b0(this))
z=z.c}},
ck:function(a,b,c){var z
H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
z=this.b4(a,b)
if(z==null)this.bD(a,b,this.by(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
by:function(a,b){var z,y
z=new H.iA(H.x(a,H.w(this,0)),H.x(b,H.w(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
bU:function(a){return J.bQ(a)&0x3ffffff},
bV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
i:function(a){return P.cU(this)},
b4:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
e0:function(a,b){delete a[b]},
cs:function(a,b){return this.b4(a,b)!=null},
bx:function(){var z=Object.create(null)
this.bD(z,"<non-identifier-key>",z)
this.e0(z,"<non-identifier-key>")
return z},
$iseg:1},
iA:{"^":"c;a,b,0c,0d"},
iB:{"^":"hH;a,$ti",
gl:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.iC(z,z.r,this.$ti)
y.c=z.e
return y}},
iC:{"^":"c;a,b,0c,0d,$ti",
gR:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
n0:{"^":"b:25;a",
$1:function(a){return this.a(a)}},
n1:{"^":"b:45;a",
$2:function(a,b){return this.a(a,b)}},
n2:{"^":"b:50;a",
$1:function(a){return this.a(H.O(a))}},
iv:{"^":"c;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseq:1,
$isji:1,
u:{
iw:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mV:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cu:function(a){return a},
iU:function(a){return new Int8Array(a)},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aH(b,a))},
mu:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mS(a,b,c))
return b},
en:{"^":"r;",$isen:1,"%":"ArrayBuffer"},
cY:{"^":"r;",$iscY:1,"%":"DataView;ArrayBufferView;cX|fg|fh|iV|fi|fj|aU"},
cX:{"^":"cY;",
gl:function(a){return a.length},
$isG:1,
$asG:I.dq},
iV:{"^":"fh;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
k:function(a,b,c){H.B(b)
H.mU(c)
H.aG(b,a,a.length)
a[b]=c},
$asce:function(){return[P.q]},
$asu:function(){return[P.q]},
$ism:1,
$asm:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aU:{"^":"fj;",
k:function(a,b,c){H.B(b)
H.B(c)
H.aG(b,a,a.length)
a[b]=c},
$asce:function(){return[P.l]},
$asu:function(){return[P.l]},
$ism:1,
$asm:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]}},
oQ:{"^":"aU;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oR:{"^":"aU;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oS:{"^":"aU;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oT:{"^":"aU;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oU:{"^":"aU;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oV:{"^":"aU;",
gl:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
cZ:{"^":"aU;",
gl:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
bl:function(a,b,c){return new Uint8Array(a.subarray(b,H.mu(b,c,a.length)))},
$iscZ:1,
$isS:1,
"%":";Uint8Array"},
fg:{"^":"cX+u;"},
fh:{"^":"fg+ce;"},
fi:{"^":"cX+u;"},
fj:{"^":"fi+ce;"}}],["","",,P,{"^":"",
kL:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mI()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bp(new P.kN(z),1)).observe(y,{childList:true})
return new P.kM(z,y,x)}else if(self.setImmediate!=null)return P.mJ()
return P.mK()},
pq:[function(a){self.scheduleImmediate(H.bp(new P.kO(H.d(a,{func:1,ret:-1})),0))},"$1","mI",4,0,15],
pr:[function(a){self.setImmediate(H.bp(new P.kP(H.d(a,{func:1,ret:-1})),0))},"$1","mJ",4,0,15],
ps:[function(a){P.d5(C.m,H.d(a,{func:1,ret:-1}))},"$1","mK",4,0,15],
d5:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.c.aj(a.a,1000)
return P.lO(z<0?0:z,b)},
eJ:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.bf]})
z=C.c.aj(a.a,1000)
return P.lP(z<0?0:z,b)},
mE:function(a,b){if(H.c4(a,{func:1,args:[P.c,P.ax]}))return b.fV(a,null,P.c,P.ax)
if(H.c4(a,{func:1,args:[P.c]}))return H.d(a,{func:1,ret:null,args:[P.c]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mD:function(){var z,y
for(;z=$.bn,z!=null;){$.bM=null
y=z.b
$.bn=y
if(y==null)$.bL=null
z.a.$0()}},
pA:[function(){$.dk=!0
try{P.mD()}finally{$.bM=null
$.dk=!1
if($.bn!=null)$.$get$de().$1(P.fI())}},"$0","fI",0,0,7],
fD:function(a){var z=new P.fa(H.d(a,{func:1,ret:-1}))
if($.bn==null){$.bL=z
$.bn=z
if(!$.dk)$.$get$de().$1(P.fI())}else{$.bL.b=z
$.bL=z}},
mH:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.fD(a)
$.bM=$.bL
return}y=new P.fa(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.bn=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
o5:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.V
if(C.e===y){P.cw(null,null,C.e,a)
return}y.toString
P.cw(null,null,y,H.d(y.bK(a),z))},
eI:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.V
if(y===C.e){y.toString
return P.d5(a,b)}return P.d5(a,H.d(y.bK(b),z))},
jS:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.d(b,z)
y=$.V
if(y===C.e){y.toString
return P.eJ(a,b)}x=y.cQ(b,P.bf)
$.V.toString
return P.eJ(a,H.d(x,z))},
cv:function(a,b,c,d,e){var z={}
z.a=d
P.mH(new P.mF(z,e))},
fz:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fA:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mG:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cw:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bK(d):c.f8(d,-1)
P.fD(d)},
kN:{"^":"b:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kM:{"^":"b:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kO:{"^":"b:0;a",
$0:function(){this.a.$0()}},
kP:{"^":"b:0;a",
$0:function(){this.a.$0()}},
fq:{"^":"c;a,0b,c",
dK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bp(new P.lR(this,b),0),a)
else throw H.a(P.y("`setTimeout()` not found."))},
dL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bp(new P.lQ(this,a,Date.now(),b),0),a)
else throw H.a(P.y("Periodic timer."))},
$isbf:1,
u:{
lO:function(a,b){var z=new P.fq(!0,0)
z.dK(a,b)
return z},
lP:function(a,b){var z=new P.fq(!1,0)
z.dL(a,b)
return z}}},
lR:{"^":"b:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lQ:{"^":"b:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.dB(w,x)}z.c=y
this.d.$1(z)}},
bm:{"^":"c;0a,b,c,d,e,$ti",
fE:function(a){if(this.c!==6)return!0
return this.b.b.c6(H.d(this.d,{func:1,ret:P.P,args:[P.c]}),a.a,P.P,P.c)},
fv:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.w(this,1)}
w=this.b.b
if(H.c4(z,{func:1,args:[P.c,P.ax]}))return H.dr(w.h2(z,a.a,a.b,null,y,P.ax),x)
else return H.dr(w.c6(H.d(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aQ:{"^":"c;cG:a<,b,0eK:c<,$ti",
di:function(a,b,c){var z,y,x,w
z=H.w(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.e){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mE(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aQ(0,$.V,[c])
w=b==null?1:3
this.cl(new P.bm(x,w,a,b,[z,c]))
return x},
h5:function(a,b){return this.di(a,null,b)},
cl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbm")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaQ")
z=y.a
if(z<4){y.cl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cw(null,null,z,H.d(new P.l3(this,a),{func:1,ret:-1}))}},
cB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbm")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaQ")
y=u.a
if(y<4){u.cB(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.cw(null,null,y,H.d(new P.l8(z,this),{func:1,ret:-1}))}},
bA:function(){var z=H.f(this.c,"$isbm")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cq:function(a){var z,y,x,w
z=H.w(this,0)
H.dr(a,{futureOr:1,type:z})
y=this.$ti
x=H.bO(a,"$isbv",y,"$asbv")
if(x){z=H.bO(a,"$isaQ",y,null)
if(z)P.fd(a,this)
else P.l4(a,this)}else{w=this.bA()
H.x(a,z)
this.a=4
this.c=a
P.bH(this,w)}},
bo:[function(a,b){var z
H.f(b,"$isax")
z=this.bA()
this.a=8
this.c=new P.ap(a,b)
P.bH(this,z)},function(a){return this.bo(a,null)},"hh","$2","$1","gdY",4,2,55],
$isbv:1,
u:{
l4:function(a,b){var z,y,x
b.a=1
try{a.di(new P.l5(b),new P.l6(b),null)}catch(x){z=H.au(x)
y=H.bq(x)
P.o5(new P.l7(b,z,y))}},
fd:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaQ")
if(z>=4){y=b.bA()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.f(b.c,"$isbm")
b.a=2
b.c=a
a.cB(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cv(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bH(z.a,b)}y=z.a
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
if(p){H.f(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cv(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.lb(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.la(x,b,r).$0()}else if((y&2)!==0)new P.l9(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.Q(y).$isbv){if(y.a>=4){n=H.f(t.c,"$isbm")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fd(y,t)
return}}m=b.b
n=H.f(m.c,"$isbm")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.x(u,H.w(m,0))
m.a=4
m.c=u}else{H.f(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
l3:{"^":"b:0;a,b",
$0:function(){P.bH(this.a,this.b)}},
l8:{"^":"b:0;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
l5:{"^":"b:23;a",
$1:function(a){var z=this.a
z.a=0
z.cq(a)}},
l6:{"^":"b:52;a",
$2:function(a,b){this.a.bo(a,H.f(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
l7:{"^":"b:0;a,b,c",
$0:function(){this.a.bo(this.b,this.c)}},
lb:{"^":"b:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dg(H.d(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bq(v)
if(this.d){w=H.f(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.Q(z).$isbv){if(z instanceof P.aQ&&z.gcG()>=4){if(z.gcG()===8){w=this.b
w.b=H.f(z.geK(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h5(new P.lc(t),null)
w.a=!1}}},
lc:{"^":"b:56;a",
$1:function(a){return this.a}},
la:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.w(x,0)
v=H.x(this.c,w)
u=H.w(x,1)
this.a.b=x.b.b.c6(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bq(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
l9:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isap")
w=this.c
if(w.fE(z)&&w.e!=null){v=this.b
v.b=w.fv(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bq(u)
w=H.f(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fa:{"^":"c;a,0b"},
d2:{"^":"c;$ti",
gl:function(a){var z,y
z={}
y=new P.aQ(0,$.V,[P.l])
z.a=0
this.fD(new P.jK(z,this),!0,new P.jL(z,y),y.gdY())
return y}},
jK:{"^":"b;a,b",
$1:function(a){H.x(a,H.az(this.b,"d2",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.az(this.b,"d2",0)]}}},
jL:{"^":"b:0;a,b",
$0:function(){this.b.cq(this.a.a)}},
eC:{"^":"c;$ti"},
jJ:{"^":"c;"},
bf:{"^":"c;"},
ap:{"^":"c;a,b",
i:function(a){return H.k(this.a)},
$isa6:1},
mi:{"^":"c;",$ispp:1},
mF:{"^":"b:0;a,b",
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
lx:{"^":"mi;",
h3:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.e===$.V){a.$0()
return}P.fz(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bq(x)
P.cv(null,null,this,z,H.f(y,"$isax"))}},
h4:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.e===$.V){a.$1(b)
return}P.fA(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bq(x)
P.cv(null,null,this,z,H.f(y,"$isax"))}},
f8:function(a,b){return new P.lz(this,H.d(a,{func:1,ret:b}),b)},
bK:function(a){return new P.ly(this,H.d(a,{func:1,ret:-1}))},
cQ:function(a,b){return new P.lA(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dg:function(a,b){H.d(a,{func:1,ret:b})
if($.V===C.e)return a.$0()
return P.fz(null,null,this,a,b)},
c6:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.V===C.e)return a.$1(b)
return P.fA(null,null,this,a,b,c,d)},
h2:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.V===C.e)return a.$2(b,c)
return P.mG(null,null,this,a,b,c,d,e,f)},
fV:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
lz:{"^":"b;a,b,c",
$0:function(){return this.a.dg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ly:{"^":"b:7;a,b",
$0:function(){return this.a.h3(this.b)}},
lA:{"^":"b;a,b,c",
$1:function(a){var z=this.c
return this.a.h4(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iD:function(a,b,c,d,e){return new H.aK(0,0,[d,e])},
iE:function(a,b,c){H.bP(a)
return H.v(H.mW(a,new H.aK(0,0,[b,c])),"$iseg",[b,c],"$aseg")},
eh:function(a,b){return new H.aK(0,0,[a,b])},
iG:function(a,b,c,d){return new P.lj(0,0,[d])},
iq:function(a,b,c){var z,y
if(P.dl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.mC(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eD(b,H.fX(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cP:function(a,b,c){var z,y,x
if(P.dl(a))return b+"..."+c
z=new P.aE(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaz(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
dl:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
mC:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.J())return
w=H.k(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.J()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.J()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.J();t=s,s=r){r=z.gR(z);++x
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
ei:function(a,b,c){var z=P.iD(null,null,null,b,c)
a.v(0,new P.iF(z,b,c))
return z},
cU:function(a){var z,y,x
z={}
if(P.dl(a))return"{...}"
y=new P.aE("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.dB(a,new P.iM(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
lj:{"^":"ld;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.ff(this,this.r,H.w(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dg()
this.b=z}return this.co(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dg()
this.c=y}return this.co(y,b)}else return this.dN(0,b)},
dN:function(a,b){var z,y,x
H.x(b,H.w(this,0))
z=this.d
if(z==null){z=P.dg()
this.d=z}y=this.cr(b)
x=z[y]
if(x==null)z[y]=[this.bn(b)]
else{if(this.cw(x,b)>=0)return!1
x.push(this.bn(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cC(this.c,b)
else return this.eE(0,b)},
eE:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e8(z,b)
x=this.cw(y,b)
if(x<0)return!1
this.cI(y.splice(x,1)[0])
return!0},
co:function(a,b){H.x(b,H.w(this,0))
if(H.f(a[b],"$isdf")!=null)return!1
a[b]=this.bn(b)
return!0},
cC:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdf")
if(z==null)return!1
this.cI(z)
delete a[b]
return!0},
cp:function(){this.r=this.r+1&67108863},
bn:function(a){var z,y
z=new P.df(H.x(a,H.w(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cp()
return z},
cI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cp()},
cr:function(a){return J.bQ(a)&0x3ffffff},
e8:function(a,b){return a[this.cr(b)]},
cw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
u:{
dg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
df:{"^":"c;a,0b,0c"},
lk:{"^":"c;a,b,0c,0d,$ti",
gR:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.w(this,0))
this.c=z.b
return!0}}},
u:{
ff:function(a,b,c){var z=new P.lk(a,b,[c])
z.c=a.e
return z}}},
ld:{"^":"js;"},
iF:{"^":"b:11;a,b,c",
$2:function(a,b){this.a.k(0,H.x(a,this.b),H.x(b,this.c))}},
cg:{"^":"ll;",$ism:1,$ish:1},
u:{"^":"c;$ti",
ga2:function(a){return new H.ej(a,this.gl(a),0,[H.aX(this,a,"u",0)])},
K:function(a,b){return this.j(a,b)},
h6:function(a,b){var z,y,x
z=H.i([],[H.aX(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.k(z,y,this.j(a,y));++y}return z},
c8:function(a){return this.h6(a,!0)},
at:function(a,b,c,d){var z
H.x(d,H.aX(this,a,"u",0))
P.aM(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.k(a,z,d)},
i:function(a){return P.cP(a,"[","]")}},
iL:{"^":"al;"},
iM:{"^":"b:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
al:{"^":"c;$ti",
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.aX(this,a,"al",0),H.aX(this,a,"al",1)]})
for(z=J.bs(this.gal(a));z.J();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.ao(this.gal(a))},
i:function(a){return P.cU(a)},
$isL:1},
lW:{"^":"c;$ti",
k:function(a,b,c){H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
throw H.a(P.y("Cannot modify unmodifiable map"))}},
iN:{"^":"c;$ti",
j:function(a,b){return J.dA(this.a,b)},
k:function(a,b,c){J.cF(this.a,H.x(b,H.w(this,0)),H.x(c,H.w(this,1)))},
v:function(a,b){J.dB(this.a,H.d(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gl:function(a){return J.ao(this.a)},
i:function(a){return J.ab(this.a)},
$isL:1},
f0:{"^":"lX;a,$ti"},
ju:{"^":"c;$ti",
i:function(a){return P.cP(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dC("index"))
if(b<0)H.J(P.a2(b,0,null,"index",null))
for(z=P.ff(this,this.r,H.w(this,0)),y=0;z.J();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$ism:1},
js:{"^":"ju;"},
ll:{"^":"c+u;"},
lX:{"^":"iN+lW;$ti"}}],["","",,P,{"^":"",hi:{"^":"bR;a",
fG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aM(c,d,b.length,null,null,null)
z=$.$get$fb()
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
if(q<=d){p=H.cC(C.b.H(b,s))
o=H.cC(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aE("")
l=w.a+=C.b.w(b,x,y)
w.a=l+H.cj(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.dF(b,u,d,v,t,k)
else{j=C.c.b1(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aM(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dF(b,u,d,v,t,i)
else{j=C.c.b1(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aM(b,d,d,j===2?"==":"=")}return b},
$asbR:function(){return[[P.h,P.l],P.j]},
u:{
dF:function(a,b,c,d,e,f){if(C.c.b1(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bu;a",
$asbu:function(){return[[P.h,P.l],P.j]}},bR:{"^":"c;$ti"},bu:{"^":"jJ;$ti"},hJ:{"^":"bR;",
$asbR:function(){return[P.j,[P.h,P.l]]}},ko:{"^":"hJ;a",
gfl:function(){return C.A}},kv:{"^":"bu;",
aS:function(a,b,c){var z,y,x,w
z=a.length
P.aM(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mh(0,0,x)
if(w.e6(a,b,z)!==z)w.cL(J.h9(a,z-1),0)
return C.Q.bl(x,0,w.b)},
bQ:function(a){return this.aS(a,0,null)},
$asbu:function(){return[P.j,[P.h,P.l]]}},mh:{"^":"c;a,b,c",
cL:function(a,b){var z,y,x,w,v
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
e6:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cL(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kp:{"^":"bu;a",
aS:function(a,b,c){var z,y,x,w,v
H.v(a,"$ish",[P.l],"$ash")
z=P.kq(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aM(b,c,y,null,null,null)
x=new P.aE("")
w=new P.me(!1,x,!0,0,0,0)
w.aS(a,b,y)
w.fq(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bQ:function(a){return this.aS(a,0,null)},
$asbu:function(){return[[P.h,P.l],P.j]},
u:{
kq:function(a,b,c,d){H.v(b,"$ish",[P.l],"$ash")
if(b instanceof Uint8Array)return P.kr(!1,b,c,d)
return},
kr:function(a,b,c,d){var z,y,x
z=$.$get$f4()
if(z==null)return
y=0===c
if(y&&!0)return P.da(z,b)
x=b.length
d=P.aM(c,d,x,null,null,null)
if(y&&d===x)return P.da(z,b)
return P.da(z,b.subarray(c,d))},
da:function(a,b){if(P.kt(b))return
return P.ku(a,b)},
ku:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
kt:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ks:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},me:{"^":"c;a,b,c,d,e,f",
fq:function(a,b,c){var z
H.v(b,"$ish",[P.l],"$ash")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ish",[P.l],"$ash")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mg(c)
v=new P.mf(this,b,c,a)
$label0$0:for(u=J.as(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bh()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.c.aZ(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.q,q)
if(z<=C.q[q]){q=P.a_("Overlong encoding of 0x"+C.c.aZ(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.c.aZ(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cj(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.a6()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.I()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.c.aZ(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.c.aZ(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mg:{"^":"b:43;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ish",[P.l],"$ash")
z=this.a
for(y=J.as(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bh()
if((w&127)!==w)return x-b}return z-b}},mf:{"^":"b:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c0(this.d,a,b)}}}],["","",,P,{"^":"",
c6:function(a,b,c){var z
H.d(b,{func:1,ret:P.l,args:[P.j]})
z=H.j9(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hL:function(a){var z=J.Q(a)
if(!!z.$isb)return z.i(a)
return"Instance of '"+H.b8(a)+"'"},
iH:function(a,b,c,d){var z,y
H.x(b,d)
z=J.is(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.k(z,y,b)
return H.v(z,"$ish",[d],"$ash")},
iI:function(a,b,c){var z,y,x
z=[c]
y=H.i([],z)
for(x=a.ga2(a);x.J();)C.a.h(y,H.x(x.gR(x),c))
if(b)return y
return H.v(J.bw(y),"$ish",z,"$ash")},
c0:function(a,b,c){var z,y
z=P.l
H.v(a,"$ism",[z],"$asm")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb4",[z],"$asb4")
y=a.length
c=P.aM(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.I()
z=c<y}else z=!0
return H.et(z?C.a.bl(a,b,c):a)}if(!!J.Q(a).$iscZ)return H.jb(a,b,P.aM(b,c,a.length,null,null,null))
return P.jM(a,b,c)},
jM:function(a,b,c){var z,y,x,w
H.v(a,"$ism",[P.l],"$asm")
if(b<0)throw H.a(P.a2(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.ao(a),null,null))
y=J.bs(a)
for(x=0;x<b;++x)if(!y.J())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.J();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.J())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gR(y))}return H.et(w)},
jj:function(a,b,c){return new H.iv(a,H.iw(a,!1,!0,!1))},
c3:function(){var z=H.j1()
if(z!=null)return P.kg(z,0,null)
throw H.a(P.y("'Uri.base' is not supported"))},
cd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hL(a)},
T:function(a){return new P.fc(a)},
iJ:function(a,b,c,d){var z,y
H.d(b,{func:1,ret:d,args:[P.l]})
z=H.i([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.k(z,y,b.$1(y))
return z},
dw:function(a){H.o3(a)},
kg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f1(b>0||c<c?C.b.w(a,b,c):a,5,null).gdl()
else if(y===32)return P.f1(C.b.w(a,z,c),0,null).gdl()}x=new Array(8)
x.fixed$length=Array
w=H.i(x,[P.l])
C.a.k(w,0,0)
x=b-1
C.a.k(w,1,x)
C.a.k(w,2,x)
C.a.k(w,7,x)
C.a.k(w,3,b)
C.a.k(w,4,b)
C.a.k(w,5,c)
C.a.k(w,6,c)
if(P.fB(a,b,c,0,w)>=14)C.a.k(w,7,c)
v=w[1]
if(typeof v!=="number")return v.h9()
if(v>=b)if(P.fB(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.t()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.n(r)
if(q<r)r=q
if(typeof s!=="number")return s.I()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.I()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.I()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a9(a,"..",s)))n=r>s+2&&C.b.a9(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a9(a,"file",b)){if(u<=b){if(!C.b.a9(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aM(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a9(a,"http",b)){if(x&&t+3===s&&C.b.a9(a,"80",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
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
else if(v===z&&C.b.a9(a,"https",b)){if(x&&t+4===s&&C.b.a9(a,"443",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
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
q-=b}return new P.lC(a,v,u,t,s,r,q,o)}return P.lY(a,b,c,v,u,t,s,r,q,o)},
f3:function(a,b){var z=P.j
return C.a.fs(H.i(a.split("&"),[z]),P.eh(z,z),new P.kj(b),[P.L,P.j,P.j])},
ke:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kf(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c6(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.a6()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c6(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.a6()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kh(a)
y=new P.ki(z,a)
if(a.length<2)z.$1("address is too short")
x=H.i([],[P.l])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gau(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.ke(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.c.aD(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mv:function(){var z,y,x,w,v
z=P.iJ(22,new P.mx(),!0,P.S)
y=new P.mw(z)
x=new P.my()
w=new P.mz()
v=H.f(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isS"),"]",5)
v=H.f(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isS"),"az",21)
v=H.f(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fB:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ish",[P.l],"$ash")
z=$.$get$fC()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.k(e,v>>>5,y)}return d},
P:{"^":"c;"},
"+bool":0,
ah:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ah))return!1
return this.a===b.a&&this.b===b.b},
aF:function(a,b){return C.c.aF(this.a,H.f(b,"$isah").a)},
gW:function(a){var z=this.a
return(z^C.c.aD(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hB(H.j8(this))
y=P.bS(H.j6(this))
x=P.bS(H.j2(this))
w=P.bS(H.j3(this))
v=P.bS(H.j5(this))
u=P.bS(H.j7(this))
t=P.hC(H.j4(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isak:1,
$asak:function(){return[P.ah]},
u:{
hB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bS:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a0;"},
"+double":0,
aC:{"^":"c;a",
m:function(a,b){return new P.aC(C.c.ad(this.a*b))},
I:function(a,b){return C.c.I(this.a,H.f(b,"$isaC").a)},
a6:function(a,b){return C.c.a6(this.a,H.f(b,"$isaC").a)},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
aF:function(a,b){return C.c.aF(this.a,H.f(b,"$isaC").a)},
i:function(a){var z,y,x,w,v
z=new P.hG()
y=this.a
if(y<0)return"-"+new P.aC(0-y).i(0)
x=z.$1(C.c.aj(y,6e7)%60)
w=z.$1(C.c.aj(y,1e6)%60)
v=new P.hF().$1(y%1e6)
return""+C.c.aj(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
$isak:1,
$asak:function(){return[P.aC]},
u:{
e1:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hF:{"^":"b:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hG:{"^":"b:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"c;"},
ep:{"^":"a6;",
i:function(a){return"Throw of null."}},
aI:{"^":"a6;a,b,c,d",
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbq()+y+x
if(!this.a)return w
v=this.gbp()
u=P.cd(this.b)
return w+v+": "+H.k(u)},
u:{
ca:function(a){return new P.aI(!1,null,null,a)},
cb:function(a,b,c){return new P.aI(!0,a,b,c)},
dC:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
ck:{"^":"aI;e,f,a,b,c,d",
gbq:function(){return"RangeError"},
gbp:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
bZ:function(a,b,c){return new P.ck(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.ck(b,c,!0,a,d,"Invalid value")},
aM:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hT:{"^":"aI;e,l:f>,a,b,c,d",
gbq:function(){return"RangeError"},
gbp:function(){if(J.h5(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
U:function(a,b,c,d,e){var z=H.B(e!=null?e:J.ao(b))
return new P.hT(b,z,!0,a,c,"Index out of range")}}},
kc:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
y:function(a){return new P.kc(a)}}},
k9:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
c1:function(a){return new P.k9(a)}}},
jG:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hu:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cd(z))+"."},
u:{
b0:function(a){return new P.hu(a)}}},
iZ:{"^":"c;",
i:function(a){return"Out of Memory"},
$isa6:1},
eA:{"^":"c;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hA:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fc:{"^":"c;a",
i:function(a){return"Exception: "+this.a}},
hR:{"^":"c;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Z(w,s)
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
return y+n+l+m+"\n"+C.b.m(" ",x-o+n.length)+"^\n"},
u:{
a_:function(a,b,c){return new P.hR(a,b,c)}}},
l:{"^":"a0;"},
"+int":0,
m:{"^":"c;$ti",
gl:function(a){var z,y
z=this.ga2(this)
for(y=0;z.J();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dC("index"))
if(b<0)H.J(P.a2(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.J();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.iq(this,"(",")")}},
cQ:{"^":"c;$ti"},
h:{"^":"c;$ti",$ism:1},
"+List":0,
L:{"^":"c;$ti"},
D:{"^":"c;",
gW:function(a){return P.c.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a0:{"^":"c;",$isak:1,
$asak:function(){return[P.a0]}},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gW:function(a){return H.bC(this)},
i:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"c;"},
j:{"^":"c;",$isak:1,
$asak:function(){return[P.j]},
$iseq:1},
"+String":0,
aE:{"^":"c;az:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispe:1,
u:{
eD:function(a,b,c){var z=J.bs(b)
if(!z.J())return a
if(c.length===0){do a+=H.k(z.gR(z))
while(z.J())}else{a+=H.k(z.gR(z))
for(;z.J();)a=a+c+H.k(z.gR(z))}return a}}},
kj:{"^":"b:41;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isL",[z,z],"$asL")
H.O(b)
y=J.as(b).d1(b,"=")
if(y===-1){if(b!=="")J.cF(a,P.di(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.av(b,y+1)
z=this.a
J.cF(a,P.di(x,0,x.length,z,!0),P.di(w,0,w.length,z,!0))}return a}},
kf:{"^":"b:40;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
kh:{"^":"b:39;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
ki:{"^":"b:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c6(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.I()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cr:{"^":"c;bi:a<,b,c,d,dc:e>,f,r,0x,0y,0z,0Q,0ch",
gdm:function(){return this.b},
gbT:function(a){var z=this.c
if(z==null)return""
if(C.b.a8(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbe:function(a){var z=this.d
if(z==null)return P.fr(this.a)
return z},
gc1:function(a){var z=this.f
return z==null?"":z},
gcX:function(){var z=this.r
return z==null?"":z},
c4:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.j,null],"$asL")
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
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dh(g,0,0,h)
return new P.cr(i,j,c,f,d,g,this.r)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gaK:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f0(P.f3(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcY:function(){return this.c!=null},
gd0:function(){return this.f!=null},
gcZ:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
B:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.Q(b)
if(!!z.$isd9){y=this.a
x=b.gbi()
if(y==null?x==null:y===x)if(this.c!=null===b.gcY()){y=this.b
x=b.gdm()
if(y==null?x==null:y===x){y=this.gbT(this)
x=z.gbT(b)
if(y==null?x==null:y===x){y=this.gbe(this)
x=z.gbe(b)
if(y==null?x==null:y===x)if(this.e===z.gdc(b)){y=this.f
x=y==null
if(!x===b.gd0()){if(x)y=""
if(y===z.gc1(b)){z=this.r
y=z==null
if(!y===b.gcZ()){if(y)z=""
z=z===b.gcX()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isd9:1,
u:{
cs:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ish",[P.l],"$ash")
if(c===C.f){z=$.$get$fw().b
if(typeof b!=="string")H.J(H.a7(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.az(c,"bR",0))
y=c.gfl().bQ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cj(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lY:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m8(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m9(a,z,e-1):""
x=P.m2(a,e,f,!1)
if(typeof f!=="number")return f.t()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.m5(P.c6(C.b.w(a,w,g),new P.lZ(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m3(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.I()
t=h<i?P.dh(a,h+1,i,null):null
return new P.cr(j,y,x,v,u,t,i<c?P.m1(a,i+1,c):null)},
fr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.a(P.a_(c,a,b))},
m5:function(a,b){if(a!=null&&a===P.fr(b))return
return a},
m2:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.E()
z=c-1
if(C.b.Z(a,z)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
P.f2(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.f2(a,b,c)
return"["+a+"]"}return P.mb(a,b,c)},
mb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fy(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aE("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aE("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bI(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aE("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fs(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m8:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fu(C.b.H(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bI(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.m_(y?a.toLowerCase():a)},
m_:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m9:function(a,b,c){return P.bJ(a,b,c,C.M)},
m3:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bJ(a,b,c,C.t):C.D.hT(d,new P.m4(),P.j).F(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a8(w,"/"))w="/"+w
return P.ma(w,e,f)},
ma:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a8(a,"/"))return P.mc(a,!z||c)
return P.md(a)},
dh:function(a,b,c,d){var z,y
z={}
H.v(d,"$isL",[P.j,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.ca("Both query and queryParameters specified"))
return P.bJ(a,b,c,C.j)}if(d==null)return
y=new P.aE("")
z.a=""
d.v(0,new P.m6(new P.m7(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m1:function(a,b,c){return P.bJ(a,b,c,C.j)},
fy:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cC(y)
v=H.cC(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.aD(u,4)
if(z>=8)return H.e(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cj(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
fs:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.i(z,[P.l])
C.a.k(y,0,37)
C.a.k(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.k(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.i(z,[P.l])
for(v=0;--w,w>=0;x=128){u=C.c.eR(a,6*w)&63|x
C.a.k(y,v,37)
C.a.k(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.k(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c0(y,0,null)},
bJ:function(a,b,c,d){var z=P.fx(a,b,c,H.v(d,"$ish",[P.l],"$ash"),!1)
return z==null?C.b.w(a,b,c):z},
fx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ish",[P.l],"$ash")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.I()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fy(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bI(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fs(v)}}if(w==null)w=new P.aE("")
w.a+=C.b.w(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.I()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fv:function(a){if(C.b.a8(a,"."))return!0
return C.b.d1(a,"/.")!==-1},
md:function(a){var z,y,x,w,v,u,t
if(!P.fv(a))return a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.E(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.F(z,"/")},
mc:function(a,b){var z,y,x,w,v,u
if(!P.fv(a))return!b?P.ft(a):a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gau(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gau(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.k(z,0,P.ft(z[0]))}return C.a.F(z,"/")},
ft:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fu(J.h6(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.av(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m0:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ca("Invalid URL encoding"))}}return z},
di:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.ds(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.a5(y.w(a,b,c))}else{u=H.i([],[P.l])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.ca("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ca("Truncated URI"))
C.a.h(u,P.m0(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ish",[P.l],"$ash")
return new P.kp(!1).bQ(u)},
fu:function(a){var z=a|32
return 97<=z&&z<=122}}},
lZ:{"^":"b:36;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.t()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
m4:{"^":"b:47;",
$1:function(a){return P.cs(C.O,a,C.f,!1)}},
m7:{"^":"b:26;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cs(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cs(C.l,b,C.f,!0))}}},
m6:{"^":"b:34;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bs(H.fX(b,"$ism")),y=this.a;z.J();)y.$2(a,H.O(z.gR(z)))}},
kd:{"^":"c;a,b,c",
gdl:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.d2(y,"?",z)
w=y.length
if(x>=0){v=P.bJ(y,x+1,w,C.j)
w=x}else v=null
z=new P.kU(this,"data",null,null,null,P.bJ(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.i([b-1],[P.l])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gau(z)
if(v!==44||x!==t+7||!C.b.a9(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.fG(0,a,s,y)
else{r=P.fx(a,s,y,C.j,!0)
if(r!=null)a=C.b.aM(a,s,y,r)}return new P.kd(a,z,c)}}},
mx:{"^":"b:33;",
$1:function(a){return new Uint8Array(96)}},
mw:{"^":"b:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
my:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mz:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lC:{"^":"c;a,b,c,d,e,f,r,x,0y",
gcY:function(){return this.c>0},
gd_:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.t()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gd0:function(){var z=this.f
if(typeof z!=="number")return z.I()
return z<this.r},
gcZ:function(){return this.r<this.a.length},
gcz:function(){return this.b===4&&C.b.a8(this.a,"http")},
gcA:function(){return this.b===5&&C.b.a8(this.a,"https")},
gbi:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcz()){this.x="http"
z="http"}else if(this.gcA()){this.x="https"
z="https"}else if(z===4&&C.b.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gdm:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gbT:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbe:function(a){var z
if(this.gd_()){z=this.d
if(typeof z!=="number")return z.t()
return P.c6(C.b.w(this.a,z+1,this.e),null,null)}if(this.gcz())return 80
if(this.gcA())return 443
return 0},
gdc:function(a){return C.b.w(this.a,this.e,this.f)},
gc1:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.I()
return z<y?C.b.w(this.a,z+1,y):""},
gcX:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.av(y,z+1):""},
gaK:function(){var z=this.f
if(typeof z!=="number")return z.I()
if(z>=this.r)return C.P
z=P.j
return new P.f0(P.f3(this.gc1(this),C.f),[z,z])},
c4:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.j,null],"$asL")
i=this.gbi()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.gd_()?this.gbe(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dh(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.av(y,x+1)
return new P.cr(i,j,c,f,d,g,b)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.Q(b)
if(!!z.$isd9)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isd9:1},
kU:{"^":"cr;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dO:function(a,b){var z=document.createElement("canvas")
return z},
hI:function(a){H.f(a,"$isa8")
return"wheel"},
e7:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise6")
try{J.hd(z,a)}catch(x){H.au(x)}return z},
cp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fe:function(a,b,c,d){var z,y
z=W.cp(W.cp(W.cp(W.cp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fF:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.e)return a
return z.cQ(a,b)},
ad:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
of:{"^":"r;0l:length=","%":"AccessibleNodeList"},
og:{"^":"ad;0a3:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oh:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cI:{"^":"r;",$iscI:1,"%":";Blob"},
on:{"^":"ad;0a3:type}","%":"HTMLButtonElement"},
cL:{"^":"ad;",
cb:function(a,b,c){var z=a.getContext(b,P.mL(c,null))
return z},
$iscL:1,
"%":"HTMLCanvasElement"},
op:{"^":"M;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
or:{"^":"hz;0l:length=","%":"CSSPerspective"},
b1:{"^":"r;",$isb1:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
os:{"^":"kT;0l:length=",
dr:function(a,b){var z=a.getPropertyValue(this.dU(a,b))
return z==null?"":z},
dU:function(a,b){var z,y
z=$.$get$dU()
y=z[b]
if(typeof y==="string")return y
y=this.eS(a,b)
z[b]=y
return y},
eS:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hD()+b
if(z in a)return z
return b},
gbL:function(a){return a.bottom},
gak:function(a){return a.height},
gaG:function(a){return a.left},
gc5:function(a){return a.right},
gb0:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hy:{"^":"c;",
gaG:function(a){return this.dr(a,"left")}},
dV:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hz:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ot:{"^":"dV;0l:length=","%":"CSSTransformValue"},
ou:{"^":"dV;0l:length=","%":"CSSUnparsedValue"},
ov:{"^":"r;0l:length=","%":"DataTransferItemList"},
ow:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
ox:{"^":"kW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.v(c,"$isa9",[P.a0],"$asa9")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a9,P.a0]]},
$asu:function(){return[[P.a9,P.a0]]},
$ism:1,
$asm:function(){return[[P.a9,P.a0]]},
$ish:1,
$ash:function(){return[[P.a9,P.a0]]},
$asz:function(){return[[P.a9,P.a0]]},
"%":"ClientRectList|DOMRectList"},
hE:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gao(a))+" x "+H.k(this.gak(a))},
B:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isa9",[P.a0],"$asa9")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&this.gao(a)===z.gao(b)&&this.gak(a)===z.gak(b)},
gW:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gbL:function(a){return a.bottom},
gak:function(a){return a.height},
gaG:function(a){return a.left},
gc5:function(a){return a.right},
gb0:function(a){return a.top},
gao:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.a0]},
"%":";DOMRectReadOnly"},
oy:{"^":"kY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.O(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asu:function(){return[P.j]},
$ism:1,
$asm:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$asz:function(){return[P.j]},
"%":"DOMStringList"},
oz:{"^":"r;0l:length=","%":"DOMTokenList"},
kS:{"^":"cg;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa1")},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.c8(this)
return new J.aJ(z,z.length,0,[H.w(z,0)])},
at:function(a,b,c,d){throw H.a(P.c1(null))},
$asu:function(){return[W.a1]},
$asm:function(){return[W.a1]},
$ash:function(){return[W.a1]}},
a1:{"^":"M;",
gbP:function(a){return new W.kS(a,a.children)},
gcS:function(a){return P.jf(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a0)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
oA:{"^":"ad;0a3:type}","%":"HTMLEmbedElement"},
ac:{"^":"r;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a8:{"^":"r;",
cM:["dv",function(a,b,c,d){H.d(c,{func:1,args:[W.ac]})
if(c!=null)this.dO(a,b,c,!1)}],
dO:function(a,b,c,d){return a.addEventListener(b,H.bp(H.d(c,{func:1,args:[W.ac]}),1),!1)},
$isa8:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fk|fl|fo|fp"},
aT:{"^":"cI;",$isaT:1,"%":"File"},
e2:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isaT")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aT]},
$asu:function(){return[W.aT]},
$ism:1,
$asm:function(){return[W.aT]},
$ish:1,
$ash:function(){return[W.aT]},
$ise2:1,
$asz:function(){return[W.aT]},
"%":"FileList"},
oB:{"^":"a8;0l:length=","%":"FileWriter"},
oC:{"^":"ad;0l:length=","%":"HTMLFormElement"},
b3:{"^":"r;",$isb3:1,"%":"Gamepad"},
oD:{"^":"r;0l:length=","%":"History"},
oE:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isM")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$asu:function(){return[W.M]},
$ism:1,
$asm:function(){return[W.M]},
$ish:1,
$ash:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e5:{"^":"r;",$ise5:1,"%":"ImageData"},
e6:{"^":"ad;0a3:type}",$ise6:1,$isdP:1,"%":"HTMLInputElement"},
dP:{"^":"c;",$isa1:1,$isa8:1,$isM:1},
bx:{"^":"d6;",$isbx:1,"%":"KeyboardEvent"},
oJ:{"^":"ad;0a3:type}","%":"HTMLLinkElement"},
oK:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
oL:{"^":"r;0l:length=","%":"MediaList"},
oM:{"^":"a8;",
cM:function(a,b,c,d){H.d(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.dv(a,b,c,!1)},
"%":"MessagePort"},
oN:{"^":"lm;",
j:function(a,b){return P.aR(a.get(H.O(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gal:function(a){var z=H.i([],[P.j])
this.v(a,new W.iR(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iR:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oO:{"^":"ln;",
j:function(a,b){return P.aR(a.get(H.O(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gal:function(a){var z=H.i([],[P.j])
this.v(a,new W.iS(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iS:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b6:{"^":"r;",$isb6:1,"%":"MimeType"},
oP:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb6")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b6]},
$asu:function(){return[W.b6]},
$ism:1,
$asm:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$asz:function(){return[W.b6]},
"%":"MimeTypeArray"},
aw:{"^":"d6;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kR:{"^":"cg;a",
k:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.e3(z,z.length,-1,[H.aX(C.R,z,"z",0)])},
at:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asu:function(){return[W.M]},
$asm:function(){return[W.M]},
$ash:function(){return[W.M]}},
M:{"^":"a8;",
fZ:function(a,b){var z,y
try{z=a.parentNode
J.h7(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dw(a):z},
eH:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iW:{"^":"lr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isM")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$asu:function(){return[W.M]},
$ism:1,
$asm:function(){return[W.M]},
$ish:1,
$ash:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
oX:{"^":"ad;0a3:type}","%":"HTMLOListElement"},
oY:{"^":"ad;0a3:type}","%":"HTMLObjectElement"},
b7:{"^":"r;0l:length=",$isb7:1,"%":"Plugin"},
p0:{"^":"lv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb7")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$asu:function(){return[W.b7]},
$ism:1,
$asm:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$asz:function(){return[W.b7]},
"%":"PluginArray"},
p2:{"^":"r;0a3:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
p3:{"^":"lB;",
j:function(a,b){return P.aR(a.get(H.O(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gal:function(a){var z=H.i([],[P.j])
this.v(a,new W.jp(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jp:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p5:{"^":"ad;0a3:type}","%":"HTMLScriptElement"},
p7:{"^":"ad;0l:length=","%":"HTMLSelectElement"},
b9:{"^":"a8;",$isb9:1,"%":"SourceBuffer"},
p8:{"^":"fl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb9")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b9]},
$asu:function(){return[W.b9]},
$ism:1,
$asm:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$asz:function(){return[W.b9]},
"%":"SourceBufferList"},
p9:{"^":"ad;0a3:type}","%":"HTMLSourceElement"},
ba:{"^":"r;",$isba:1,"%":"SpeechGrammar"},
pa:{"^":"lE;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isba")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asu:function(){return[W.ba]},
$ism:1,
$asm:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$asz:function(){return[W.ba]},
"%":"SpeechGrammarList"},
bb:{"^":"r;0l:length=",$isbb:1,"%":"SpeechRecognitionResult"},
pc:{"^":"lH;",
j:function(a,b){return a.getItem(H.O(b))},
k:function(a,b,c){a.setItem(b,H.O(c))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.i([],[P.j])
this.v(a,new W.jI(z))
return z},
gl:function(a){return a.length},
$asal:function(){return[P.j,P.j]},
$isL:1,
$asL:function(){return[P.j,P.j]},
"%":"Storage"},
jI:{"^":"b:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pf:{"^":"ad;0a3:type}","%":"HTMLStyleElement"},
bc:{"^":"r;",$isbc:1,"%":"CSSStyleSheet|StyleSheet"},
d3:{"^":"ad;",$isd3:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bd:{"^":"a8;",$isbd:1,"%":"TextTrack"},
be:{"^":"a8;",$isbe:1,"%":"TextTrackCue|VTTCue"},
ph:{"^":"lN;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbe")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$asu:function(){return[W.be]},
$ism:1,
$asm:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$asz:function(){return[W.be]},
"%":"TextTrackCueList"},
pi:{"^":"fp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$ism:1,
$asm:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$asz:function(){return[W.bd]},
"%":"TextTrackList"},
pj:{"^":"r;0l:length=","%":"TimeRanges"},
bg:{"^":"r;",$isbg:1,"%":"Touch"},
bh:{"^":"d6;",$isbh:1,"%":"TouchEvent"},
pk:{"^":"lT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbg")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asu:function(){return[W.bg]},
$ism:1,
$asm:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$asz:function(){return[W.bg]},
"%":"TouchList"},
pl:{"^":"r;0l:length=","%":"TrackDefaultList"},
d6:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pn:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
po:{"^":"a8;0l:length=","%":"VideoTrackList"},
bG:{"^":"aw;",
gfi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.y("deltaY is not supported"))},
gfh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.y("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
kK:{"^":"a8;",
eJ:function(a,b){return a.requestAnimationFrame(H.bp(H.d(b,{func:1,ret:-1,args:[P.a0]}),1))},
e1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pt:{"^":"mk;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb1")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b1]},
$asu:function(){return[W.b1]},
$ism:1,
$asm:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$asz:function(){return[W.b1]},
"%":"CSSRuleList"},
pu:{"^":"hE;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isa9",[P.a0],"$asa9")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&a.width===z.gao(b)&&a.height===z.gak(b)},
gW:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pw:{"^":"mm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb3")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b3]},
$asu:function(){return[W.b3]},
$ism:1,
$asm:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$asz:function(){return[W.b3]},
"%":"GamepadList"},
px:{"^":"mo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isM")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$asu:function(){return[W.M]},
$ism:1,
$asm:function(){return[W.M]},
$ish:1,
$ash:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
py:{"^":"mq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbb")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$ism:1,
$asm:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$asz:function(){return[W.bb]},
"%":"SpeechRecognitionResultList"},
pz:{"^":"ms;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbc")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$asu:function(){return[W.bc]},
$ism:1,
$asm:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$asz:function(){return[W.bc]},
"%":"StyleSheetList"},
kZ:{"^":"d2;a,b,c,$ti",
fD:function(a,b,c,d){var z=H.w(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
pv:{"^":"kZ;a,b,c,$ti"},
l_:{"^":"eC;a,b,c,d,e,$ti",
eX:function(){var z=this.d
if(z!=null&&this.a<=0)J.h8(this.b,this.c,z,!1)},
u:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fF(new W.l0(c),W.ac)
z=new W.l_(0,a,b,z,!1,[e])
z.eX()
return z}}},
l0:{"^":"b:13;a",
$1:function(a){return this.a.$1(H.f(a,"$isac"))}},
z:{"^":"c;$ti",
ga2:function(a){return new W.e3(a,this.gl(a),-1,[H.aX(this,a,"z",0)])},
at:function(a,b,c,d){H.x(d,H.aX(this,a,"z",0))
throw H.a(P.y("Cannot modify an immutable List."))}},
e3:{"^":"c;a,b,c,0d,$ti",
J:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kT:{"^":"r+hy;"},
kV:{"^":"r+u;"},
kW:{"^":"kV+z;"},
kX:{"^":"r+u;"},
kY:{"^":"kX+z;"},
l1:{"^":"r+u;"},
l2:{"^":"l1+z;"},
le:{"^":"r+u;"},
lf:{"^":"le+z;"},
lm:{"^":"r+al;"},
ln:{"^":"r+al;"},
lo:{"^":"r+u;"},
lp:{"^":"lo+z;"},
lq:{"^":"r+u;"},
lr:{"^":"lq+z;"},
lu:{"^":"r+u;"},
lv:{"^":"lu+z;"},
lB:{"^":"r+al;"},
fk:{"^":"a8+u;"},
fl:{"^":"fk+z;"},
lD:{"^":"r+u;"},
lE:{"^":"lD+z;"},
lH:{"^":"r+al;"},
lM:{"^":"r+u;"},
lN:{"^":"lM+z;"},
fo:{"^":"a8+u;"},
fp:{"^":"fo+z;"},
lS:{"^":"r+u;"},
lT:{"^":"lS+z;"},
mj:{"^":"r+u;"},
mk:{"^":"mj+z;"},
ml:{"^":"r+u;"},
mm:{"^":"ml+z;"},
mn:{"^":"r+u;"},
mo:{"^":"mn+z;"},
mp:{"^":"r+u;"},
mq:{"^":"mp+z;"},
mr:{"^":"r+u;"},
ms:{"^":"mr+z;"}}],["","",,P,{"^":"",
aR:function(a){var z,y,x,w,v
if(a==null)return
z=P.eh(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=H.O(y[w])
z.k(0,v,a[v])}return z},
mL:function(a,b){var z={}
a.v(0,new P.mM(z))
return z},
e0:function(){var z=$.e_
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.e_=z}return z},
hD:function(){var z,y
z=$.dX
if(z!=null)return z
y=$.dY
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dY=y}if(y)z="-moz-"
else{y=$.dZ
if(y==null){y=!P.e0()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dZ=y}if(y)z="-ms-"
else z=P.e0()?"-o-":"-webkit-"}$.dX=z
return z},
lK:{"^":"c;",
cU:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bg:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.Q(a)
if(!!y.$isah)return new Date(a.a)
if(!!y.$isji)throw H.a(P.c1("structured clone of RegExp"))
if(!!y.$isaT)return a
if(!!y.$iscI)return a
if(!!y.$ise2)return a
if(!!y.$ise5)return a
if(!!y.$isen||!!y.$iscY)return a
if(!!y.$isL){x=this.cU(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.k(w,x,v)
y.v(a,new P.lL(z,this))
return z.a}if(!!y.$ish){x=this.cU(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.ff(a,x)}throw H.a(P.c1("structured clone of other type"))},
ff:function(a,b){var z,y,x,w
z=J.as(a)
y=z.gl(a)
x=new Array(y)
C.a.k(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.k(x,w,this.bg(z.j(a,w)))
return x}},
lL:{"^":"b:11;a,b",
$2:function(a,b){this.a.a[a]=this.b.bg(b)}},
mM:{"^":"b:11;a",
$2:function(a,b){this.a[a]=b}},
fn:{"^":"lK;a,b"},
hO:{"^":"cg;a,b",
gb5:function(){var z,y,x
z=this.b
y=H.az(z,"u",0)
x=W.a1
return new H.iO(new H.kI(z,H.d(new P.hP(),{func:1,ret:P.P,args:[y]}),[y]),H.d(new P.hQ(),{func:1,ret:x,args:[y]}),[y,x])},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa1")
z=this.gb5()
J.hc(z.b.$1(J.cH(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
at:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on filtered list"))},
gl:function(a){return J.ao(this.gb5().a)},
j:function(a,b){var z=this.gb5()
return z.b.$1(J.cH(z.a,b))},
ga2:function(a){var z=P.iI(this.gb5(),!1,W.a1)
return new J.aJ(z,z.length,0,[H.w(z,0)])},
$asu:function(){return[W.a1]},
$asm:function(){return[W.a1]},
$ash:function(){return[W.a1]}},
hP:{"^":"b:29;",
$1:function(a){return!!J.Q(H.f(a,"$isM")).$isa1}},
hQ:{"^":"b:28;",
$1:function(a){return H.ag(H.f(a,"$isM"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lw:{"^":"c;$ti",
gc5:function(a){var z=this.a
if(typeof z!=="number")return z.t()
return H.x(z+this.c,H.w(this,0))},
gbL:function(a){var z=this.b
if(typeof z!=="number")return z.t()
return H.x(z+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bO(b,"$isa9",[P.a0],"$asa9")
if(!z)return!1
z=this.a
y=J.aW(b)
x=y.gaG(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb0(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.t()
w=H.w(this,0)
if(H.x(z+this.c,w)===y.gc5(b)){if(typeof x!=="number")return x.t()
z=H.x(x+this.d,w)===y.gbL(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bQ(z)
x=this.b
w=J.bQ(x)
if(typeof z!=="number")return z.t()
v=H.w(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.t()
v=H.x(x+this.d,v)
return P.lg(P.cq(P.cq(P.cq(P.cq(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"lw;aG:a>,b0:b>,ao:c>,ak:d>,$ti",u:{
jf:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.I()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.I()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",by:{"^":"r;",$isby:1,"%":"SVGLength"},oI:{"^":"li;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isby")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.by]},
$ism:1,
$asm:function(){return[P.by]},
$ish:1,
$ash:function(){return[P.by]},
$asz:function(){return[P.by]},
"%":"SVGLengthList"},bB:{"^":"r;",$isbB:1,"%":"SVGNumber"},oW:{"^":"lt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbB")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bB]},
$ism:1,
$asm:function(){return[P.bB]},
$ish:1,
$ash:function(){return[P.bB]},
$asz:function(){return[P.bB]},
"%":"SVGNumberList"},p1:{"^":"r;0l:length=","%":"SVGPointList"},p6:{"^":"eE;0a3:type}","%":"SVGScriptElement"},pd:{"^":"lJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.O(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.j]},
$ism:1,
$asm:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$asz:function(){return[P.j]},
"%":"SVGStringList"},pg:{"^":"eE;0a3:type}","%":"SVGStyleElement"},eE:{"^":"a1;",
gbP:function(a){return new P.hO(a,new W.kR(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bD:{"^":"r;",$isbD:1,"%":"SVGTransform"},pm:{"^":"lV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbD")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bD]},
$ism:1,
$asm:function(){return[P.bD]},
$ish:1,
$ash:function(){return[P.bD]},
$asz:function(){return[P.bD]},
"%":"SVGTransformList"},lh:{"^":"r+u;"},li:{"^":"lh+z;"},ls:{"^":"r+u;"},lt:{"^":"ls+z;"},lI:{"^":"r+u;"},lJ:{"^":"lI+z;"},lU:{"^":"r+u;"},lV:{"^":"lU+z;"}}],["","",,P,{"^":"",S:{"^":"c;",$ism:1,
$asm:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]}}}],["","",,P,{"^":"",oi:{"^":"r;0l:length=","%":"AudioBuffer"},dE:{"^":"a8;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oj:{"^":"kQ;",
j:function(a,b){return P.aR(a.get(H.O(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gal:function(a){var z=H.i([],[P.j])
this.v(a,new P.hg(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"AudioParamMap"},hg:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dE;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ok:{"^":"a8;0l:length=","%":"AudioTrackList"},hk:{"^":"a8;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ol:{"^":"dE;0a3:type}","%":"BiquadFilterNode"},oZ:{"^":"hk;0l:length=","%":"OfflineAudioContext"},p_:{"^":"hh;0a3:type}","%":"Oscillator|OscillatorNode"},kQ:{"^":"r+al;"}}],["","",,P,{"^":"",ey:{"^":"r;",$isey:1,"%":"WebGLRenderingContext"},k4:{"^":"r;",$isk4:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pb:{"^":"lG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aR(a.item(b))},
k:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.L,,,]]},
$ism:1,
$asm:function(){return[[P.L,,,]]},
$ish:1,
$ash:function(){return[[P.L,,,]]},
$asz:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},lF:{"^":"r+u;"},lG:{"^":"lF+z;"}}],["","",,O,{"^":"",b_:{"^":"c;0a,0b,0c,0d,$ti",
cf:function(a){this.a=H.i([],[a])
this.b=null
this.c=null
this.d=null},
du:function(a,b,c){var z={func:1,ret:-1,args:[P.l,[P.m,H.az(this,"b_",0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
bj:function(a,b){return this.du(a,null,b)},
ez:function(a){H.v(a,"$ism",[H.az(this,"b_",0)],"$asm")
return!0},
dG:function(a,b){var z
H.v(b,"$ism",[H.az(this,"b_",0)],"$asm")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.aJ(z,z.length,0,[H.w(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"b_",0)
H.x(b,z)
z=[z]
if(this.ez(H.i([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dG(x,H.i([b],z))}},
$ism:1,
u:{
dR:function(a){var z=new O.b_([a])
z.cf(a)
return z}}},cV:{"^":"c;0a,0b",
gl:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
dH:function(a){var z=this.b
if(!(z==null))z.G(a)},
aw:function(){return this.dH(null)},
gam:function(a){var z=this.a
if(z.length>0)return C.a.gau(z)
else return V.ch()},
de:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aw()},
c0:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",dG:{"^":"c;"},aS:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scc:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.d(this.gd9(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.d(this.gd9(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.C("shape",z,this.c,this,[F.a4])
w.b=!0
this.ag(w)}},
saV:function(a){var z,y,x,w
if(!J.E(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.d(this.gd8(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.d(this.gd8(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.C("mover",z,a,this,[U.ai])
w.b=!0
this.ag(w)}},
aN:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aO(0,b,this):null
if(!J.E(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.bY])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.aJ(z,z.length,0,[H.w(z,0)]);z.J();)z.d.aN(0,b)},
aL:function(a){var z,y,x,w,v,u
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gam(z))
else C.a.h(z.a,y.m(0,z.gam(z)))
z.aw()
a.df(this.f)
z=a.dy
x=(z&&C.a).gau(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.j(0,"Inspection")
if(w==null){z=a.a
w=new A.hV(z,"Inspection")
w.dE(z,"Inspection")
y=$.ig
v=$.i6
w.c=w.cu(y,35633)
w.d=w.cu(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.fJ(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.J(P.T("Failed to link shader: "+H.k(u)))}w.eN()
w.eP()
w.x=w.f.j(0,"posAttr")
w.y=w.f.j(0,"normAttr")
w.z=w.f.j(0,"clrAttr")
w.Q=w.f.j(0,"binmAttr")
w.ch=H.ag(w.r.j(0,"lightVec"),"$isf_")
w.cx=H.ag(w.r.j(0,"ambientClr"),"$isd8")
w.cy=H.ag(w.r.j(0,"diffuseClr"),"$isd8")
w.db=H.ag(w.r.j(0,"weightScalar"),"$iseZ")
w.dx=H.ag(w.r.j(0,"viewMat"),"$iscn")
w.dy=H.ag(w.r.j(0,"viewObjMatrix"),"$iscn")
w.fr=H.ag(w.r.j(0,"projViewObjMatrix"),"$iscn")
if(a.fr.ba(0,"Inspection"))H.J(P.T('Shader cache already contains a shader by the name "Inspection".'))
a.fr.k(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.aa()
z=this.d
y=z.e
if(!(y==null))++y.c
z.d.bN()
z.a.bN()
z=z.e
if(!(z==null))z.an(0)
z=this.d
y=z.e
if(!(y==null))++y.c
z.a.fa()
z=z.e
if(!(z==null))z.an(0)
z=new Z.dL()
z.a=new H.aK(0,0,[P.j,Z.dK])
this.e=z}z=x.a
a.a.useProgram(z.e)
z.f.fk()
y=x.r2
v=z.db
v.a.uniform1f(v.d,y)
y=x.b
v=z.ch
v.a.uniform3f(v.d,y.a,y.b,y.c)
y=a.db
y=y.gam(y)
v=z.dx
v.toString
v.bk(y.c9(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gam(y)
v=a.dx
v=y.m(0,v.gam(v))
a.cx=v
y=v}v=z.dy
v.toString
v.bk(y.c9(0,!0))
y=a.ch
if(y==null){y=a.z
if(y==null){y=a.cy
y=y.gam(y)
v=a.db
v=y.m(0,v.gam(v))
a.z=v
y=v}v=a.dx
v=y.m(0,v.gam(v))
a.ch=v
y=v}z=z.fr
z.toString
z.bk(y.c9(0,!0))
z=this.e
if(z instanceof Z.dL){a.a.blendFunc(1,1)
y=this.c
v=a.a
if(y==null){v.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
if(x.k3)x.cD(a,z,this.d,"Axis",H.d(x.gcm(),{func:1,ret:F.a4,args:[F.cl]}),x.z,x.y)
if(x.k4)x.cD(a,z,this.d,"AABB",H.d(x.gcj(),{func:1,ret:F.a4,args:[F.cl]}),x.z,x.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{v.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(x.cx)x.a_(a,z,this.c,"vertices",x.gf_(),x.f,x.e)
if(x.fr)x.a_(a,z,this.c,"faceCenters",x.ge3(),x.f,x.e)
if(x.Q)x.a_(a,z,this.c,"shapeFill",x.geQ(),x.d,x.c)
if(x.id)x.a_(a,z,this.c,"colorFill",x.gdX(),x.x,x.r)
if(x.k1)x.a_(a,z,this.c,"txt2DColor",x.geY(),x.x,x.r)
if(x.k2)x.a_(a,z,this.c,"weight",x.gf0(),x.x,x.r)
if(x.r1)x.a_(a,z,this.c,"bend1",x.gdS(),x.x,x.r)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(x.ch)x.a_(a,z,this.c,"wireFrame",x.gf1(),x.f,x.e)
if(x.cy)x.a_(a,z,this.c,"normals",x.geh(),x.f,x.e)
if(x.db)x.a_(a,z,this.c,"binormals",x.gdT(),x.f,x.e)
if(x.dx)x.a_(a,z,this.c,"tangentals",x.geT(),x.f,x.e)
if(x.dy)x.a_(a,z,this.c,"textureCube",x.geZ(),x.f,x.e)
if(x.fx)x.a_(a,z,this.c,"faceNormals",x.ge4(),x.f,x.e)
if(x.fy)x.a_(a,z,this.c,"faceBinormals",x.ge2(),x.x,x.r)
if(x.go)x.a_(a,z,this.c,"faceTangentals",x.ge5(),x.x,x.r)
if(x.k3)x.a_(a,z,this.c,"Axis",x.gcm(),x.z,x.y)
if(x.k4)x.a_(a,z,this.c,"AABB",x.gcj(),x.z,x.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.fj()}for(z=this.y.a,z=new J.aJ(z,z.length,0,[H.w(z,0)]);z.J();)z.d.aL(a)
a.dd()
a.dx.c0()},
gD:function(){var z=this.z
if(z==null){z=D.W()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.G(a)},
S:function(){return this.ag(null)},
fL:[function(a){H.f(a,"$ist")
this.e=null
this.ag(a)},function(){return this.fL(null)},"hY","$1","$0","gd9",0,2,6],
fK:[function(a){this.ag(H.f(a,"$ist"))},function(){return this.fK(null)},"hX","$1","$0","gd8",0,2,6],
fI:[function(a){this.ag(H.f(a,"$ist"))},function(){return this.fI(null)},"hV","$1","$0","gd7",0,2,6],
hU:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ism",[E.aS],"$asm")
for(z=b.length,y=this.gd7(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.I)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bT()
t.a=H.i([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gfH",8,0,14],
hW:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ism",[E.aS],"$asm")
for(z=b.length,y=this.gd7(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.I)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bT()
t.a=H.i([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.d(y,x)
C.a.L(t.a,y)}}this.S()},"$2","gfJ",8,0,14],
$isem:1},jk:{"^":"c;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dC:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ah(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cV()
y=[V.bY]
z.a=H.i([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.d(new E.jm(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cV()
z.a=H.i([],y)
v=z.gD()
v.toString
x=H.d(new E.jn(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cV()
z.a=H.i([],y)
y=z.gD()
y.toString
w=H.d(new E.jo(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.i([],[O.d4])
this.dy=z
C.a.h(z,null)
this.fr=new H.aK(0,0,[P.j,A.ez])},
df:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gau(z):a;(z&&C.a).h(z,y)},
dd:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
jl:function(a,b){var z=new E.jk(a,b)
z.dC(a,b)
return z}}},jm:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},jn:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jo:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jP:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
dJ:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)
this.h0()},function(){return this.dJ(null)},"dI","$1","$0","gcg",0,2,6],
gfu:function(){var z,y,x
z=Date.now()
y=C.c.aj(P.e1(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ah(z,!1)
return x/y},
cE:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.n(z)
x=C.d.bc(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.d.bc(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eI(C.m,this.gh_())},
h0:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.jR(this),{func:1,ret:-1,args:[P.a0]})
C.w.e1(z)
C.w.eJ(z,W.fF(y,P.a0))}},"$0","gh_",0,0,7],
fY:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cE()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ah(w,!1)
x.y=P.e1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aw()
w=x.db
C.a.sl(w.a,0)
w.aw()
w=x.dx
C.a.sl(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aL(this.e)}}catch(v){z=H.au(v)
y=H.bq(v)
P.dw("Error: "+H.k(z))
P.dw("Stack: "+H.k(y))
throw H.a(z)}},
u:{
jQ:function(a,b,c,d,e){var z,y,x,w
z=J.Q(a)
if(!!z.$iscL)return E.eH(a,!0,!0,!0,!1)
y=W.dO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbP(a).h(0,y)
w=E.eH(y,!0,!0,!0,!1)
w.a=a
return w},
eH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jP()
y=P.iE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.h.cb(a,"webgl",y)
x=H.f(x==null?C.h.cb(a,"experimental-webgl",y):x,"$isey")
if(x==null)H.J(P.T("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jl(x,a)
w=new T.jO(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kk(a)
v=new X.iy()
v.c=new X.aD(!1,!1,!1)
v.d=P.iG(null,null,null,P.l)
w.b=v
v=new X.iT(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iK(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jU(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.i([],[[P.eC,P.c]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.d(w.gem(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.d(w.gep(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.d(w.gej(),q),!1,r))
v=w.z
p=W.bx
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.d(w.ger(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.d(w.geq(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.d(w.geu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.d(w.gew(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.d(w.gev(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a3(a,H.O(W.hI(a)),H.d(w.gex(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.d(w.gen(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.d(w.geo(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.d(w.gey(),q),!1,r))
r=w.z
q=W.bh
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.d(w.geD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.d(w.geB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.d(w.geC(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ah(Date.now(),!1)
z.ch=0
z.cE()
return z}}},jR:{"^":"b:31;a",
$1:function(a){var z
H.fZ(a)
z=this.a
if(z.z){z.z=!1
z.fY()}}}}],["","",,Z,{"^":"",f9:{"^":"c;a,b",u:{
dd:function(a,b,c){var z
H.v(c,"$ish",[P.l],"$ash")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cu(c)),35044)
a.bindBuffer(b,null)
return new Z.f9(b,z)}}},dJ:{"^":"dG;a,b,c,d,e",
bJ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.T('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},kH:{"^":"c;a",$isom:1},dK:{"^":"c;a,0b,c,d",
bb:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bJ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bJ(a)},
h8:function(a){var z,y,x
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
da:function(a){this.bJ(a)
this.aL(a)
this.h8(a)},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.i([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v)C.a.h(y,x[v].i(0))
u=H.i([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(y,", ")+"\nAttrs:   "+C.a.F(u,", ")},
$isjN:1},dL:{"^":"c;0a",$isjN:1},cf:{"^":"c;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b8(this.c)+"'")+"]"}},dc:{"^":"c;a",
gcd:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$bj().a)!==0)y+=2
if((z&$.$get$bk().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$bl().a)!==0)++y
return(z&$.$get$bi().a)!==0?y+4:y},
f7:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bl()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f8()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dc))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.i([],[P.j])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$bk().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bl().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.F(z,"|")},
u:{
ar:function(a){return new Z.dc(a)}}}}],["","",,D,{"^":"",cM:{"^":"c;"},bT:{"^":"c;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.v(y,new D.hM(z))
return x!==0},
h1:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
an:function(a){return this.h1(a,!0,!1)},
u:{
W:function(){var z=new D.bT()
z.a=H.i([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hM:{"^":"b:32;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"c;a,0b"},e8:{"^":"t;c,d,a,0b,$ti"},e9:{"^":"t;c,d,a,0b,$ti"},C:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dM:{"^":"c;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
u:{"^":"oo<"}},ed:{"^":"c;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},ee:{"^":"t;c,a,0b"},iy:{"^":"c;0a,0b,0c,0d",
fS:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.G(y)},
fO:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.G(y)}},ek:{"^":"ci;x,y,c,d,e,a,0b"},iK:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aq:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ah(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=y.t(0,new V.N(x*w,v*u))
u=this.a.gaE()
s=new X.bz(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c_:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.aq(a,b))
return!0},
aX:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dt()
if(typeof z!=="number")return z.bh()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aq(a,b))
return!0},
aW:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.aq(a,b))
return!0},
fT:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.m()
t=a.b
s=this.cy
if(typeof t!=="number")return t.m()
w=new X.cW(new V.Y(v*u,t*s),y,x,new P.ah(w,!1),this)
w.b=!0
z.G(w)
return!0},
es:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ah(Date.now(),!1)
y=this.f
x=new X.ek(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.N(0,0)}},aD:{"^":"c;a,b,c",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
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
return z+(this.c?"Shift+":"")}},bz:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},iT:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
br:function(a,b,c){var z,y,x
z=new P.ah(Date.now(),!1)
y=this.a.gaE()
x=new X.bz(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c_:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.br(a,b,!0))
return!0},
aX:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dt()
if(typeof z!=="number")return z.bh()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.br(a,b,!0))
return!0},
aW:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.br(a,b,!1))
return!0},
fU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.m()
u=a.b
t=this.ch
if(typeof u!=="number")return u.m()
x=new X.cW(new V.Y(w*v,u*t),y,b,new P.ah(x,!1),this)
x.b=!0
z.G(x)
return!0},
gcT:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
gdk:function(){var z=this.c
if(z==null){z=D.W()
this.c=z}return z},
gd6:function(){var z=this.d
if(z==null){z=D.W()
this.d=z}return z}},cW:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"t;"},eM:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},jU:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y",
aq:function(a,b){var z,y,x,w
H.v(a,"$ish",[V.N],"$ash")
z=new P.ah(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaE()
w=new X.eM(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fR:function(a){var z
H.v(a,"$ish",[V.N],"$ash")
z=this.b
if(z==null)return!1
z.G(this.aq(a,!0))
return!0},
fP:function(a){var z
H.v(a,"$ish",[V.N],"$ash")
z=this.c
if(z==null)return!1
z.G(this.aq(a,!0))
return!0},
fQ:function(a){var z
H.v(a,"$ish",[V.N],"$ash")
z=this.d
if(z==null)return!1
z.G(this.aq(a,!1))
return!0}},kk:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.ew(0,0,(z&&C.h).gcS(z).c,C.h.gcS(z).d)},
ct:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ed(z,new X.aD(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
bE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
ar:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.N(y-w,x-v)},
aQ:function(a){return new V.Y(a.movementX,a.movementY)},
bz:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.i([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v){u=x[v]
t=C.d.ad(u.pageX)
C.d.ad(u.pageY)
s=z.left
C.d.ad(u.pageX)
C.a.h(y,new V.N(t-s,C.d.ad(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.aD(y,a.altKey,a.shiftKey))},
bt:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.E()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hx:[function(a){this.f=!0},"$1","gep",4,0,13],
hr:[function(a){this.f=!1},"$1","gej",4,0,13],
hu:[function(a){H.f(a,"$isaw")
if(this.f&&this.bt(a))a.preventDefault()},"$1","gem",4,0,10],
hz:[function(a){var z
H.f(a,"$isbx")
if(!this.f)return
z=this.ct(a)
if(this.b.fS(z))a.preventDefault()},"$1","ger",4,0,27],
hy:[function(a){var z
H.f(a,"$isbx")
if(!this.f)return
z=this.ct(a)
if(this.b.fO(z))a.preventDefault()},"$1","geq",4,0,27],
hA:[function(a){var z,y,x,w
H.f(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.ap(a)
x=this.aQ(a)
if(this.d.c_(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.ar(a)
if(this.c.c_(y,w))a.preventDefault()},"$1","geu",4,0,10],
hC:[function(a){var z,y,x
H.f(a,"$isaw")
this.aC(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","gew",4,0,10],
hw:[function(a){var z,y,x
H.f(a,"$isaw")
if(!this.bt(a)){this.aC(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aX(z,x))a.preventDefault()}},"$1","geo",4,0,10],
hB:[function(a){var z,y,x
H.f(a,"$isaw")
this.aC(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aW(z,x))a.preventDefault()},"$1","gev",4,0,10],
hv:[function(a){var z,y,x
H.f(a,"$isaw")
if(!this.bt(a)){this.aC(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aW(z,x))a.preventDefault()}},"$1","gen",4,0,10],
hD:[function(a){var z,y
H.f(a,"$isbG")
this.aC(a)
z=new V.Y((a&&C.v).gfh(a),C.v.gfi(a)).p(0,180)
if(this.x){if(this.d.fT(z))a.preventDefault()
return}if(this.r)return
y=this.ar(a)
if(this.c.fU(z,y))a.preventDefault()},"$1","gex",4,0,35],
hE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.ar(this.y)
this.d.es(w,v,x)}},"$1","gey",4,0,13],
hI:[function(a){var z
H.f(a,"$isbh")
this.a.focus()
this.f=!0
this.bE(a)
z=this.bz(a)
if(this.e.fR(z))a.preventDefault()},"$1","geD",4,0,18],
hG:[function(a){var z
H.f(a,"$isbh")
this.bE(a)
z=this.bz(a)
if(this.e.fP(z))a.preventDefault()},"$1","geB",4,0,18],
hH:[function(a){var z
H.f(a,"$isbh")
this.bE(a)
z=this.bz(a)
if(this.e.fQ(z))a.preventDefault()},"$1","geC",4,0,18]}}],["","",,V,{"^":"",
oq:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","iQ",8,0,37],
oe:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.b1(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.d.dj($.p.$2(a,0)?0:a,b),c+b+1)},
cA:function(a,b,c){var z,y,x,w,v
H.v(a,"$ish",[P.q],"$ash")
z=H.i([],[P.j])
for(y=0,x=0;x<4;++x){w=V.H(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.e(z,v)
C.a.k(z,v,C.b.ac(z[v],y))}return z},
av:{"^":"c;a,b,c",
t:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.av(z,y,x)},
m:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.av(z,y,x)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"},
u:{
dS:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.d.bc(a)
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
return new V.av(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.av(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.av(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.av(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.av(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.av(u,t,s)}}}},
F:{"^":"c;a,b,c,d",
c8:function(a){return H.i([this.a,this.b,this.c,this.d],[P.q])},
m:function(a,b){var z,y,x,w
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
return new V.F(z,y,x,w)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
bY:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c9:function(a,b){var z=H.i([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isbY")
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
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
if(typeof f!=="number")return f.m()
e=this.f
if(typeof e!=="number")return e.m()
d=this.r
if(typeof d!=="number")return d.m()
c=this.x
if(typeof c!=="number")return c.m()
b=this.y
if(typeof b!=="number")return b.m()
a=this.z
if(typeof a!=="number")return a.m()
a0=this.Q
if(typeof a0!=="number")return a0.m()
a1=this.ch
if(typeof a1!=="number")return a1.m()
a2=this.cx
if(typeof a2!=="number")return a2.m()
a3=this.cy
if(typeof a3!=="number")return a3.m()
a4=this.db
if(typeof a4!=="number")return a4.m()
a5=this.dx
if(typeof a5!=="number")return a5.m()
return V.aL(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bY))return!1
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
i:function(a){return this.N()},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.cA(H.i([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cA(H.i([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cA(H.i([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cA(H.i([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(a){return this.cW(a,3,0)},
N:function(){return this.cW("",3,0)},
u:{
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"c;a,b",
t:function(a,b){return new V.N(this.a+b.a,this.b+b.b)},
E:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
m:function(a,b){return new V.N(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.N(0,0)
return new V.N(this.a/b,this.b/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
R:{"^":"c;a,b,c",
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.n(w)
return new V.R(this.a+z,this.b+y,x+w)},
E:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.E()
if(typeof w!=="number")return H.n(w)
return new V.R(this.a-z,this.b-y,x-w)},
m:function(a,b){var z=this.c
if(typeof z!=="number")return z.m()
return new V.R(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.R(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.R(this.a/b,this.b/b,z/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
am:{"^":"c;a,b,c,d",
m:function(a,b){return new V.am(this.a*b,this.b*b,this.c*b,this.d*b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
ev:{"^":"c;a,b,c,d",
ga7:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ev))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
u:{
ew:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ev(a,b,c,d)}}},
d1:{"^":"c;a,b,c,d,e,f",
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d1))return!1
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
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"},
u:{
ex:function(a,b,c,d,e,f){return new V.d1(a,b,c,d,e,f)}}},
Y:{"^":"c;a,b",
d4:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,20],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
m:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return new V.Y(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.Y(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Y(z/b,y/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
o:{"^":"c;a,b,c",
d4:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,20],
A:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
bW:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.E()
if(typeof x!=="number")return H.n(x)
return new V.o(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
af:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.m()
v=a.a
u=this.a
return new V.o(z*y-x*w,x*v-u*y,u*w-z*v)},
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.n(w)
return new V.o(this.a+z,this.b+y,x+w)},
M:function(a){var z=this.c
if(typeof z!=="number")return z.M()
return new V.o(-this.a,-this.b,-z)},
m:function(a,b){var z=this.c
if(typeof z!=="number")return z.m()
return new V.o(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.o(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.o(this.a/b,this.b/b,z/b)},
d3:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.o))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
bE:{"^":"c;a,b,c,d",
d4:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gl",1,0,20],
m:function(a,b){return new V.bE(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bE(0,0,0,0)
return new V.bE(this.a/b,this.b/b,this.c/b,this.d/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bE))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ht:{"^":"cM;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bm:function(a){var z=V.oe(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.W()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.G(a)},
sca:function(a,b){},
sbX:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bm(z)}z=new D.C("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.T(z)}},
sbZ:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bm(z)}z=new D.C("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.T(z)}},
sU:function(a,b){var z,y
b=this.bm(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.q])
z.b=!0
this.T(z)}},
sbY:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.q])
z.b=!0
this.T(z)}},
sbS:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.q])
z.b=!0
this.T(z)}},
aN:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sU(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
u:{
cN:function(){var z=new U.ht()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dT:{"^":"ai;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
aO:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}},e4:{"^":"b_;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.T(null)},"ae","$1","$0","gaB",0,2,6],
hq:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.I)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.e8(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gei",8,0,24],
hF:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.I)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.d(x,w)
C.a.L(t.a,x)}}z=new D.e9(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geA",8,0,24],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aJ(z,z.length,0,[H.w(z,0)]),x=null;z.J();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.m(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.an(0)}return this.f},
B:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e4))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.E(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asm:function(){return[U.ai]},
$asb_:function(){return[U.ai]},
$isai:1},ai:{"^":"cM;"},kl:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.W()
this.cy=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.G(a)},function(){return this.T(null)},"ae","$1","$0","gaB",0,2,6],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcT()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.d(this.gbu(),y)
C.a.h(z.a,x)
x=this.a.c.gd6()
x.toString
z=H.d(this.gbv(),y)
C.a.h(x.a,z)
z=this.a.c.gdk()
z.toString
y=H.d(this.gbw(),y)
C.a.h(z.a,y)
return!0},
ed:[function(a){H.f(a,"$ist")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbu",4,0,5],
ee:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbz")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.Y(y.a,y.b).m(0,2).p(0,z.ga7())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.m()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.Y(x.a,x.b).m(0,2).p(0,z.ga7())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sU(0,-v*u+t)
this.b.sV(0)
y=y.E(0,a.z)
this.Q=new V.Y(y.a,y.b).m(0,2).p(0,z.ga7())}this.ae()},"$1","gbv",4,0,5],
ef:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.m()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sV(y*10*x)
this.ae()}},"$1","gbw",4,0,5],
aO:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.ch=y
x=b.y
this.b.aN(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aL(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},km:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.W()
this.fx=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.T(null)},"ae","$1","$0","gaB",0,2,6],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcT()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.d(this.gbu(),y)
C.a.h(z.a,x)
x=this.a.c.gd6()
x.toString
z=H.d(this.gbv(),y)
C.a.h(x.a,z)
z=this.a.c.gdk()
z.toString
x=H.d(this.gbw(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.W()
x.f=z}x=H.d(this.ge9(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.W()
x.d=z}x=H.d(this.gea(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.W()
x.b=z}x=H.d(this.geW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.W()
x.d=z}x=H.d(this.geV(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.W()
x.c=z}y=H.d(this.geU(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.Y(z,y)},
ed:[function(a){a=H.ag(H.f(a,"$ist"),"$isbz")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbu",4,0,5],
ee:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbz")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ai(new V.Y(y.a,y.b).m(0,2).p(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Y(x.a,x.b).m(0,2).p(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Y(y.a,y.b).m(0,2).p(0,z.ga7()))}this.ae()},"$1","gbv",4,0,5],
ef:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.ae()}},"$1","gbw",4,0,5],
hm:[function(a){if(H.ag(H.f(a,"$ist"),"$isek").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ge9",4,0,5],
hn:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbz")
if(!J.E(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Y(x.a,x.b).m(0,2).p(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Y(y.a,y.b).m(0,2).p(0,z.ga7()))
this.ae()},"$1","gea",4,0,5],
hN:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geW",4,0,5],
hM:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$iseM")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ai(new V.Y(y.a,y.b).m(0,2).p(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Y(x.a,x.b).m(0,2).p(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Y(y.a,y.b).m(0,2).p(0,z.ga7()))}this.ae()},"$1","geV",4,0,5],
hL:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.ae()}},"$1","geU",4,0,5],
aO:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.dy=y
x=b.y
this.c.aN(0,x)
this.b.aN(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aL(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.m(0,V.aL(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},kn:{"^":"c;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.W()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.G(a)},
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.W()
z.e=y
z=y}else z=y
y=H.d(this.geg(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.W()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ho:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.E(this.b,this.a.b.c))return
H.ag(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.m()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.q])
z.b=!0
this.T(z)}},"$1","geg",4,0,5],
aO:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aL(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",hK:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x",
ax:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)},function(){return this.ax(null)},"ha","$1","$0","gah",0,2,6],
hs:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aS
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bT()
s.a=H.i([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.e8(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gek",8,0,14],
ht:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aS
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bT()
s.a=H.i([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.d(x,w)
C.a.L(s.a,x)}}z=new D.e9(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gel",8,0,14],
sdh:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.d(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.d(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("technique",x,this.c,this,[O.d4])
z.b=!0
this.ax(z)}},
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.df(this.c)
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
u=C.d.ad(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.d.ad(v.b*w)
s=C.d.ad(v.c*x)
a.c=s
v=C.d.ad(v.d*w)
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
n=V.aL(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.de(n)
y=$.er
if(y==null){y=new V.o(0,0,-1)
m=y.p(0,Math.sqrt(y.A(y)))
y=new V.o(0,1,0).af(m)
l=y.p(0,Math.sqrt(y.A(y)))
k=m.af(l)
j=new V.o(0,0,0)
y=V.aL(l.a,k.a,m.a,l.M(0).A(j),l.b,k.b,m.b,k.M(0).A(j),l.c,k.c,m.c,m.M(0).A(j),0,0,0,1)
$.er=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.m(0,i)}a.db.de(i)
for(z=this.d.a,z=new J.aJ(z,z.length,0,[H.w(z,0)]);z.J();)z.d.aN(0,a)
for(z=this.d.a,z=new J.aJ(z,z.length,0,[H.w(z,0)]);z.J();)z.d.aL(a)
this.a.toString
a.cy.c0()
a.db.c0()
this.b.toString
a.dd()},
$isp4:1}}],["","",,A,{"^":"",dD:{"^":"c;a,b,c"},hf:{"^":"c;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fk:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fj:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hV:{"^":"ez;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},ez:{"^":"dG;",
dE:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fJ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.T("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
eN:function(){var z,y,x,w,v,u
z=H.i([],[A.dD])
y=this.a
x=H.B(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dD(y,v.name,u))}this.f=new A.hf(z)},
eP:function(){var z,y,x,w,v,u
z=H.i([],[A.ae])
y=this.a
x=H.B(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fg(v.type,v.size,v.name,u))}this.r=new A.k3(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.jY(z,y,b,c)
else return A.d7(z,y,b,a,c)},
dZ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.k7(z,y,b,c)
else return A.d7(z,y,b,a,c)},
e_:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.k8(z,y,b,c)
else return A.d7(z,y,b,a,c)},
b7:function(a,b){return new P.fc(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
fg:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.eZ(this.a,this.e,c,d)
case 35664:return new A.k_(this.a,this.e,c,d)
case 35665:return new A.f_(this.a,this.e,c,d)
case 35666:return new A.d8(this.a,this.e,c,d)
case 35667:return new A.k0(this.a,this.e,c,d)
case 35668:return new A.k1(this.a,this.e,c,d)
case 35669:return new A.k2(this.a,this.e,c,d)
case 35674:return new A.k5(this.a,this.e,c,d)
case 35675:return new A.k6(this.a,this.e,c,d)
case 35676:return new A.cn(this.a,this.e,c,d)
case 35678:return this.dZ(b,c,d)
case 35680:return this.e_(b,c,d)
case 35670:throw H.a(this.b7("BOOL",c))
case 35671:throw H.a(this.b7("BOOL_VEC2",c))
case 35672:throw H.a(this.b7("BOOL_VEC3",c))
case 35673:throw H.a(this.b7("BOOL_VEC4",c))
default:throw H.a(P.T("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ae:{"^":"c;"},k3:{"^":"c;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.N()},
ft:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.I)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.ft("\n")}},jY:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},k0:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},k1:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},k2:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jZ:{"^":"ae;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
d7:function(a,b,c,d,e){var z=new A.jZ(a,b,c,e)
z.f=d
z.e=P.iH(d,0,!1,P.l)
return z}}},eZ:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},k_:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},f_:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},d8:{"^":"ae;a,b,c,d",
b2:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.k(this.c)}},k5:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},k6:{"^":"ae;a,b,c,d",
i:function(a){return"UniformMat3: "+H.k(this.c)}},cn:{"^":"ae;a,b,c,d",
bk:function(a){var z=new Float32Array(H.cu(H.v(a,"$ish",[P.q],"$ash")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},k7:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},k8:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cx:function(a,b,c,d){var z
H.d(c,{func:1,ret:-1,args:[F.A,P.q,P.q]})
z=F.Z()
F.bK(z,b,c,d,a,1,0,0,1)
F.bK(z,b,c,d,a,0,1,0,3)
F.bK(z,b,c,d,a,0,0,1,2)
F.bK(z,b,c,d,a,-1,0,0,0)
F.bK(z,b,c,d,a,0,-1,0,0)
F.bK(z,b,c,d,a,0,0,-1,3)
z.aa()
return z},
ct:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.a6()
return(y>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.d(c,{func:1,ret:-1,args:[F.A,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.o(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.o(t+h,s+f,r+g)
z.b=q
p=new V.o(t-h,s-f,r-g)
z.c=p
o=new V.o(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ct(y)
k=F.ct(z.b)
j=F.c8(d,e,new F.mt(z,F.ct(z.c),F.ct(z.d),k,l,c),b)
if(j!=null)a.aI(j)},
cy:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.d(e,{func:1,ret:P.q,args:[P.q]})
if(e==null)e=new F.mT()
if(f<3)return
z=F.Z()
y=b?-1:1
x=-6.283185307179586/f
w=H.i([],[F.A])
v=z.a
u=new V.o(0,0,y)
u=u.p(0,Math.sqrt(u.A(u)))
C.a.h(w,v.f5(new V.am(a,-1,-1,-1),new V.F(1,1,1,1),new V.R(0,0,d),new V.o(0,0,y),new V.N(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.n(p)
o=new V.o(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.aq(new V.am(a,-1,-1,-1),null,new V.F(n,l,m,1),new V.R(r*p,q*p,d),new V.o(0,0,y),new V.N(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.cN(w)
return z},
dp:function(a,b,c,d,e,f){return F.fK(!0,c,d,new F.mN(a,f),e)},
fK:function(a,b,c,d,e){var z
H.d(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.c8(c,e,new F.mP(d),null)
if(z==null)return
z.aa()
z.b9()
if(b)z.aI(F.cy(3,!1,!1,1,new F.mQ(d),e))
z.aI(F.cy(1,!0,!1,-1,new F.mR(d),e))
return z},
fW:function(a,b){var z=F.c8(a,b,new F.n8(),null)
z.d.bf()
z.aa()
z.b9()
return z},
fV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.Z()
y=Math.sqrt(5)/2+0.5
x=F.af(z,new V.o(-1,y,0))
w=F.af(z,new V.o(1,y,0))
v=-y
u=F.af(z,new V.o(-1,v,0))
t=F.af(z,new V.o(1,v,0))
s=F.af(z,new V.o(0,-1,v))
r=F.af(z,new V.o(0,1,v))
q=F.af(z,new V.o(0,-1,y))
p=F.af(z,new V.o(0,1,y))
o=F.af(z,new V.o(y,0,1))
n=F.af(z,new V.o(y,0,-1))
m=F.af(z,new V.o(v,0,1))
l=F.af(z,new V.o(v,0,-1))
F.X(z,x,l,r,a)
F.X(z,x,r,w,a)
F.X(z,x,w,p,a)
F.X(z,x,p,m,a)
F.X(z,x,m,l,a)
F.X(z,w,r,n,a)
F.X(z,r,l,s,a)
F.X(z,l,m,u,a)
F.X(z,m,p,q,a)
F.X(z,p,w,o,a)
F.X(z,t,n,s,a)
F.X(z,t,s,u,a)
F.X(z,t,u,q,a)
F.X(z,t,q,o,a)
F.X(z,t,o,n,a)
F.X(z,s,n,r,a)
F.X(z,u,s,l,a)
F.X(z,q,u,m,a)
F.X(z,o,q,p,a)
F.X(z,n,o,w,a)
z.d5(new F.db(),new F.kA())
return z},
af:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.A(b)))
z=b.a
y=b.b
x=b.c
w=F.aq(null,null,null,new V.R(z,y,x),b,null,null,null,0)
v=a.fm(w,new F.db())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
if(typeof x!=="number")return x.m()
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sa1(0,new V.F(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sc7(new V.N(q,p<0?-p:p))
a.a.h(0,w)
return w},
X:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.a0(0,b,d,c)
else{z=F.af(a,b.r.t(0,c.r).m(0,0.5))
y=F.af(a,c.r.t(0,d.r).m(0,0.5))
x=F.af(a,d.r.t(0,b.r).m(0,0.5))
w=e-1
F.X(a,b,z,x,w)
F.X(a,z,c,y,w)
F.X(a,y,x,z,w)
F.X(a,x,y,d,w)}},
dy:function(a,b,c){var z,y
z={}
z.a=b
if(H.d(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.o8()
y=F.cx(a,null,new F.o9(z),c)
y.b9()
return y},
ob:function(a,b,c,d){return F.fL(c,a,d,b,new F.oc())},
n6:function(a,b,c,d,e,f){return F.fL(d,a,e,b,new F.n7(f,c))},
fL:function(a,b,c,d,e){var z=F.c8(a,b,new F.mO(H.d(e,{func:1,ret:V.R,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aa()
z.b9()
return z},
fR:function(a,b,c){var z={}
z.a=b
if(H.d(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.mY()
return F.c8(c,a,new F.mZ(z),null)},
c8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.A,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.Z()
y=H.i([],[F.A])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.aq(null,null,new V.F(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bR(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.aq(null,null,new V.F(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bR(d))}}z.d.f4(a+1,b+1,y)
return z},
mt:{"^":"b:8;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bW(z.b,b).bW(z.d.bW(z.c,b),c)
a.sU(0,new V.R(y.a,y.b,y.c))
a.saY(y.p(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
a.sbI(new V.am(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mT:{"^":"b:17;",
$1:function(a){return 1}},
mN:{"^":"b:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mP:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sU(0,new V.R(y,u,w))
u=new V.o(y,u,w)
a.saY(u.p(0,Math.sqrt(u.A(u))))
a.sbI(new V.am(1-c,2+c,-1,-1))}},
mQ:{"^":"b:17;a",
$1:function(a){return this.a.$2(a,1)}},
mR:{"^":"b:17;a",
$1:function(a){return this.a.$2(1-a,0)}},
n8:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.o(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.A(w)))
a.sU(0,new V.R(x.a,x.b,x.c))}},
o8:{"^":"b:9;",
$2:function(a,b){return 0}},
o9:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.o(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.A(x))).m(0,1+z)
a.sU(0,new V.R(z.a,z.b,z.c))}},
oc:{"^":"b:21;",
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}},
n7:{"^":"b:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.R(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mO:{"^":"b:8;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dz(y.$1(z),x)
x=J.dz(y.$1(z+3.141592653589793/this.c),x).E(0,w)
x=new V.o(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.A(x)))
u=new V.o(1,0,0)
y=v.af(!v.B(0,u)?new V.o(0,0,1):u)
t=y.p(0,Math.sqrt(y.A(y)))
y=t.af(v)
u=y.p(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.m(0,y*x)
x=t.m(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.E()
if(typeof q!=="number")return H.n(q)
a.sU(0,w.t(0,new V.R(y.a-x.a,y.b-x.b,r-q)))}},
mY:{"^":"b:9;",
$2:function(a,b){return 0}},
mZ:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sU(0,new V.R(z,y,this.a.a.$2(b,c)))
x=new V.o(z,y,1)
a.saY(x.p(0,Math.sqrt(x.A(x))))
x=1-b
w=1-c
a.sbI(new V.am(b*c,2+x*c,4+b*w,6+x*w))}},
K:{"^":"c;0a,0b,0c,0d,0e",
as:function(){if(!this.gaT()){C.a.L(this.a.a.d.b,this)
this.a.a.S()}this.bB()
this.bC()
this.eG()},
bF:function(a){this.a=a
C.a.h(a.d.b,this)},
bG:function(a){this.b=a
C.a.h(a.d.c,this)},
eM:function(a){this.c=a
C.a.h(a.d.d,this)},
bB:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
bC:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
eG:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
dQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.d3())return
return v.p(0,Math.sqrt(v.A(v)))},
dW:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.o(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.A(z)))
z=w.E(0,y)
z=new V.o(z.a,z.b,z.c)
z=v.af(z.p(0,Math.sqrt(z.A(z))))
return z.p(0,Math.sqrt(z.A(z)))},
bO:function(){if(this.d!=null)return!0
var z=this.dQ()
if(z==null){z=this.dW()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
dP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.d3())return
return v.p(0,Math.sqrt(v.A(v)))},
dV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.E(0,u)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.E(0,u).m(0,l).t(0,u).E(0,x)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.A(z)))
z=k.af(m)
z=z.p(0,Math.sqrt(z.A(z))).af(k)
m=z.p(0,Math.sqrt(z.A(z)))}return m},
bM:function(){if(this.e!=null)return!0
var z=this.dP()
if(z==null){z=this.dV()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
ay:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a face's vertex with a vertex attached to a different shape."))},
gfd:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gaT())return a+"disposed"
z=a+C.b.ac(J.ab(this.a.e),0)+", "+C.b.ac(J.ab(this.b.e),0)+", "+C.b.ac(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.C("")},
u:{
b2:function(a,b,c){var z,y,x
z=new F.K()
y=a.a
if(y==null)H.J(P.T("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.J(P.T("May not create a face with vertices attached to different shapes."))
z.bF(a)
z.bG(b)
z.eM(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
hN:{"^":"c;"},
jC:{"^":"hN;",
aH:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
b5:{"^":"c;0a,0b",
as:function(){if(!this.gaT()){C.a.L(this.a.a.c.b,this)
this.a.a.S()}this.bB()
this.bC()},
bF:function(a){this.a=a
C.a.h(a.c.b,this)},
bG:function(a){this.b=a
C.a.h(a.c.c,this)},
bB:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
bC:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
ay:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a line's vertex with a vertex attached to a different shape."))},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gaT())return a+"disposed"
return a+C.b.ac(J.ab(this.a.e),0)+", "+C.b.ac(J.ab(this.b.e),0)},
N:function(){return this.C("")},
u:{
ef:function(a,b){var z,y,x
z=new F.b5()
if(a==null)H.J(P.T("May not create a line with a null start vertex."))
if(b==null)H.J(P.T("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.J(P.T("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.J(P.T("May not create a line with vertices attached to different shapes."))
z.bF(a)
z.bG(b)
C.a.h(z.a.a.c.b,z)
z.a.a.S()
return z}}},
iz:{"^":"c;"},
jX:{"^":"iz;",
aH:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d_:{"^":"c;0a",
as:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.S()}this.eF()},
eL:function(a){this.a=a
C.a.h(a.b.b,this)},
eF:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ac(J.ab(z.e),0)},
N:function(){return this.C("")},
u:{
d0:function(a){var z=new F.d_()
if(a.a==null)H.J(P.T("May not create a point with a vertex which is not attached to a shape."))
z.eL(a)
C.a.h(z.a.a.b.b,z)
z.a.a.S()
return z}}},
a4:{"^":"c;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
aI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){v=z[w]
this.a.h(0,v.X())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.d0(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.ef(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.b2(p,o,m)}z=this.e
if(!(z==null))z.an(0)},
aa:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aa()||!1
if(!this.a.aa())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
fc:function(a){var z,y,x,w,v,u,t,s,r
z=this.cR()
y=new V.o(z.d,z.e,z.f)
x=Math.sqrt(y.A(y))
if(x<=0)x=1
a=new F.jc()
a.a=1/x
a.b=new V.R(z.a,z.b,z.c)
for(w=this.a.c.length-1;w>=0;--w){y=this.a.c
if(w>=y.length)return H.e(y,w)
v=y[w]
y=a.b
u=v.f
t=y.a-u.a
s=y.b-u.b
y=y.c
u=u.c
if(typeof y!=="number")return y.E()
if(typeof u!=="number")return H.n(u)
r=y-u
u=Math.sqrt(t*t+s*s+r*r)*a.a
if(v.ch!==u){v.ch=u
y=v.a
if(y!=null){y=y.e
if(!(y==null))y.G(null)}}}},
fb:function(){return this.fc(null)},
cR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.ex(0,0,0,0,0,0)
z=z[0].f
x=V.ex(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.e(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(u<r)s+=r-u
else{if(u>r+s)s=u-r
u=r}q=x.e
p=x.b
if(t<p)q+=p-t
else{if(t>p+q)q=t-p
t=p}o=x.f
n=x.c
if(typeof v!=="number")return v.I()
if(typeof n!=="number")return H.n(n)
if(v<n){o+=n-v
m=v}else{if(v>n+o)o=v-n
m=n}x=new V.d1(u,t,m,s,q,o)}return x},
fn:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.aH(0,a,w))return w}return},
fm:function(a,b){return this.fn(a,b,0)},
e7:function(a,b,c,d,e){var z,y,x
H.v(d,"$ish",[F.A],"$ash")
H.v(e,"$ish",[P.l],"$ash")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aH(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
eI:function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$ish",[P.l],"$ash")
H.jF(b,J.mB(),H.w(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.J(P.T("May not replace a face's vertex when the point has been disposed."))
if(J.E(v,w)){x.ay(w,a)
v=x.a
if(v!=null){C.a.L(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.ay(w,a)
v=x.b
if(v!=null){C.a.L(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.E(x.c,w)){x.ay(w,a)
v=x.c
if(v!=null){C.a.L(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null)H.J(P.T("May not replace a line's vertex when the point has been disposed."))
if(J.E(v,w)){x.ay(w,a)
v=x.a
if(v!=null){C.a.L(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.ay(w,a)
v=x.b
if(v!=null){C.a.L(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.J(P.T("May not replace a point's vertex when the point has been disposed."))
if(J.E(v,w)){if(a.a==null)H.J(P.T("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.L(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.J(P.T("May not remove a vertex without first making it empty."))
t.a=null
C.a.fW(v,y)
v=x.a.e
if(!(v==null))v.G(null)
x.b=!0}},
d5:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.A],x=[P.l];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.i([],z)
t=H.i([],x)
if(this.e7(a,v,y,u,t)){s=b.aI(u)
if(s!=null){this.eI(s,t)
y-=t.length}}}this.a.q()
this.c.bf()
this.d.bf()
this.b.fX()
this.c.c2(new F.jX())
this.d.c2(new F.jC())
z=this.e
if(!(z==null))z.an(0)},
f6:function(a){this.d5(new F.db(),new F.iX())},
b9:function(){return this.f6(null)},
f9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aP().a)!==0?1:0
if((y&$.$get$aO().a)!==0)++x
if((y&$.$get$aN().a)!==0)++x
if((y&$.$get$bj().a)!==0)++x
if((y&$.$get$bk().a)!==0)++x
if((y&$.$get$aV().a)!==0)++x
if((y&$.$get$bF().a)!==0)++x
if((y&$.$get$bl().a)!==0)++x
if((y&$.$get$bi().a)!==0)++x
w=b.gcd(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.q
t=H.i(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.i(y,[Z.dJ])
for(r=0,q=0;q<x;++q){p=b.f7(q)
o=p.gcd(p)
C.a.k(s,q,new Z.dJ(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fC(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.k(t,l,m[k]);++l}}r+=o}H.v(t,"$ish",[u],"$ash")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cu(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dK(new Z.f9(34962,j),s,b)
i.b=H.i([],[Z.cf])
if(this.b.b.length!==0){u=P.l
h=H.i([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(0,h.length,f))}if(this.c.b.length!==0){u=P.l
h=H.i([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(1,h.length,f))}if(this.d.b.length!==0){u=P.l
h=H.i([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(4,h.length,f))}return i},
i:function(a){var z=H.i([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.F(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.G(a)},
S:function(){return this.ag(null)},
$iscl:1,
u:{
Z:function(){var z,y
z=new F.a4()
y=new F.kw(z)
y.b=!1
y.c=H.i([],[F.A])
z.a=y
y=new F.jx(z)
y.b=H.i([],[F.d_])
z.b=y
y=new F.jw(z)
y.b=H.i([],[F.b5])
z.c=y
y=new F.jv(z)
y.b=H.i([],[F.K])
z.d=y
z.e=null
return z}}},
cl:{"^":"cM;"},
jv:{"^":"c;a,0b",
a0:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.b2(b,c,d)},
cN:function(a){var z,y,x,w,v,u
H.v(a,"$ish",[F.A],"$ash")
z=H.i([],[F.K])
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
C.a.h(z,F.b2(x,v,u))}}return z},
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ish",[F.A],"$ash")
z=H.i([],[F.K])
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
C.a.h(z,F.b2(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b2(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b2(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b2(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
c2:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aH(0,v,t)){v.as()
break}}}}},
bf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gfd(x)
if(y)x.as()}},
aa:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bO())x=!1
return x},
bN:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bM())x=!1
return x},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}},
jw:{"^":"c;a,0b",
n:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.ef(b,c)},
gl:function(a){return this.b.length},
c2:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aH(0,v,t)){v.as()
break}}}}},
bf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.E(x.a,x.b)
if(y)x.as()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.F(z,"\n")},
N:function(){return this.C("")}},
jx:{"^":"c;a,0b",
gl:function(a){return this.b.length},
fX:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.as()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}},
A:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bR:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.aq(this.cx,x,u,z,y,w,v,a,t)},
X:function(){return this.bR(null)},
sU:function(a,b){var z
if(!J.E(this.f,b)){this.f=b
z=this.a
if(z!=null)z.S()}},
saJ:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.E(this.r,a)){this.r=a
z=this.a
if(z!=null)z.S()}},
sP:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.E(this.x,a)){this.x=a
z=this.a
if(z!=null)z.S()}},
sc7:function(a){var z
if(!J.E(this.y,a)){this.y=a
z=this.a
if(z!=null)z.S()}},
saY:function(a){var z
if(!J.E(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
sa1:function(a,b){var z
if(!J.E(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.S()}},
sdn:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.S()}},
sbI:function(a){var z
if(!J.E(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.S()}},
fC:function(a){var z,y
z=J.Q(a)
if(z.B(a,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.i([0,1,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.i([0,0,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bj())){z=this.y
y=[P.q]
if(z==null)return H.i([0,0],y)
else return H.i([z.a,z.b],y)}else if(z.B(a,$.$get$bk())){z=this.z
y=[P.q]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aV())){z=this.Q
y=[P.q]
if(z==null)return H.i([1,1,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bF())){z=this.Q
if(z==null)return H.i([1,1,1,1],[P.q])
else return z.c8(0)}else if(z.B(a,$.$get$bl()))return H.i([this.ch],[P.q])
else if(z.B(a,$.$get$bi())){z=this.cx
y=[P.q]
if(z==null)return H.i([-1,-1,-1,-1],y)
else return H.i([z.a,z.b,z.c,z.d],y)}else return H.i([],[P.q])},
bO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.kG(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
bM:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.kF(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
cV:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.b
x.a.a.q()
x=x.e
a.a.a.q()
v=a.e
if(x==null?v==null:x===v)return w}return},
fp:function(a){var z=this.cV(a)
if(z!=null)return z
return a.cV(this)},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.i([],[P.j])
C.a.h(z,C.b.ac(J.ab(this.e),0))
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
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.F(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
u:{
aq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.A()
y=new F.kE(z)
y.b=H.i([],[F.d_])
z.b=y
y=new F.kB(z)
x=[F.b5]
y.b=H.i([],x)
y.c=H.i([],x)
z.c=y
y=new F.kx(z)
x=[F.K]
y.b=H.i([],x)
y.c=H.i([],x)
y.d=H.i([],x)
z.d=y
h=$.$get$f6()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$bj().a)!==0?f:null
z.z=(x&$.$get$bk().a)!==0?g:null
z.Q=(x&$.$get$f7().a)!==0?c:null
z.ch=(x&$.$get$bl().a)!==0?i:0
z.cx=(x&$.$get$bi().a)!==0?a:null
return z}}},
kG:{"^":"b:3;a",
$1:function(a){var z,y
H.f(a,"$isK")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kF:{"^":"b:3;a",
$1:function(a){var z,y
H.f(a,"$isK")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kw:{"^":"c;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.T("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
cO:function(a,b,c,d,e,f,g,h,i){var z=F.aq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
f5:function(a,b,c,d,e,f){return this.cO(a,null,b,c,d,e,f,null,0)},
b8:function(a,b,c,d,e,f){return this.cO(a,null,b,c,null,d,e,f,0)},
bH:function(a,b,c){var z=F.aq(null,null,null,new V.R(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
aa:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bO()
return!0},
bN:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bM()
return!0},
fa:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.m()
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.E(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.q()
z=H.i([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}},
kx:{"^":"c;a,0b,0c,0d",
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
v:function(a,b){H.d(b,{func:1,ret:-1,args:[F.K]})
C.a.v(this.b,b)
C.a.v(this.c,new F.ky(this,b))
C.a.v(this.d,new F.kz(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}},
ky:{"^":"b:3;a,b",
$1:function(a){H.f(a,"$isK")
if(!J.E(a.a,this.a))this.b.$1(a)}},
kz:{"^":"b:3;a,b",
$1:function(a){var z
H.f(a,"$isK")
z=this.a
if(!J.E(a.a,z)&&!J.E(a.b,z))this.b.$1(a)}},
kB:{"^":"c;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}},
kC:{"^":"c;"},
db:{"^":"kC;",
aH:function(a,b,c){return J.E(b.f,c.f)}},
kD:{"^":"c;"},
jc:{"^":"kD;0a,0b"},
f5:{"^":"c;"},
kA:{"^":"f5;",
aI:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.v(a1,"$ish",[F.A],"$ash")
for(z=a1.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a1[m]
k=l.f
if(k!=null){if(x==null)x=k
else{j=x.a
i=k.a
h=x.b
g=k.b
f=x.c
e=k.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
x=new V.R(j+i,h+g,f+e)}++y}d=l.r
if(d!=null)if(w==null)w=d
else{j=w.a
i=d.a
h=w.b
g=d.b
f=w.c
e=d.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
w=new V.o(j+i,h+g,f+e)}c=l.x
if(c!=null)if(v==null)v=c
else{j=v.a
i=c.a
h=v.b
g=c.b
f=v.c
e=c.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
v=new V.o(j+i,h+g,f+e)}b=l.y
if(b!=null){r=r==null?b:new V.N(r.a+b.a,r.b+b.b);++s}a=l.z
if(a!=null){if(p==null)p=a
else{j=p.a
i=a.a
h=p.b
g=a.b
f=p.c
e=a.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
p=new V.o(j+i,h+g,f+e)}++q}j=l.Q
if(j!=null){i=j.a
h=j.b
g=j.c
j=j.d
if(t==null){j=[i,h,g,j]
t=new V.bE(j[0],j[1],j[2],j[3])}else{j=[i,h,g,j]
i=j[0]
h=j[1]
g=j[2]
j=j[3]
t=new V.bE(t.a+i,t.b+h,t.c+g,t.d+j)}++u}j=l.ch
if(typeof j!=="number")return H.n(j)
n+=j;++o}a0=F.aq(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)a0.sU(0,null)
else a0.sU(0,x.p(0,y))
if(w==null)a0.saJ(null)
else a0.saJ(w.p(0,Math.sqrt(w.A(w))))
if(v==null)a0.sP(null)
else a0.sP(v.p(0,Math.sqrt(v.A(v))))
if(s<=0||r==null)a0.sc7(null)
else a0.sc7(r.p(0,s))
if(q<=0||p==null)a0.saY(null)
else a0.saY(p.p(0,q))
if(u<=0||t==null)a0.sa1(0,null)
else{z=t.p(0,u)
z=[z.a,z.b,z.c,z.d]
j=z[0]
i=z[1]
h=z[2]
z=z[3]
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(z<0)z=0
else if(z>1)z=1
a0.sa1(0,new V.F(j,i,h,z))}if(o<=0)a0.sdn(0,0)
else a0.sdn(0,n/o)
return a0}},
iX:{"^":"f5;",
aI:function(a){var z,y,x,w,v,u,t
H.v(a,"$ish",[F.A],"$ash")
z=new V.o(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.t()
if(typeof w!=="number")return H.n(w)
z=new V.o(z.a+v,z.b+u,t+w)}}z=z.p(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x)a[x].saJ(z)
return}},
kE:{"^":"c;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",hU:{"^":"d4;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gD:function(){var z=this.rx
if(z==null){z=D.W()
this.rx=z}return z},
Y:function(a){var z=this.rx
if(!(z==null))z.G(a)},
sa5:function(a){var z,y
z=this.r2
if(!$.p.$2(z,a)){y=this.r2
this.r2=a
z=new D.C("vectorScale",y,a,this,[P.q])
z.b=!0
this.Y(z)}},
a_:function(a,b,c,d,e,f,g){var z,y
H.d(e,{func:1,ret:F.a4,args:[F.a4]})
z=b.a.j(0,d)
if(z==null){z=this.cn(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
y.cx.b2(f)
y.cy.b2(g)
z.da(a)},
cD:function(a,b,c,d,e,f,g){var z,y
H.d(e,{func:1,ret:F.a4,args:[F.cl]})
z=b.a.j(0,d)
if(z==null){z=this.cn(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
y.cx.b2(f)
y.cy.b2(g)
z.da(a)},
cn:function(a,b){var z,y,x,w
H.f(b,"$isa4")
z=a.a
y=$.$get$aP()
x=$.$get$aO()
w=b.f9(new Z.kH(z),new Z.dc(y.a|x.a|$.$get$aN().a|$.$get$aV().a))
w.bb($.$get$aP()).e=this.a.x.c
w.bb($.$get$aO()).e=this.a.y.c
w.bb($.$get$aV()).e=this.a.z.c
w.bb($.$get$aN()).e=this.a.Q.c
return w},
hJ:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.i9(z,new V.F(1,1,1,1)),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.ia(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","geQ",4,0,2],
f2:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.Z()
z.a=new V.F(0,0.7,1,1)
x=a.a
x.toString
z=H.d(new O.im(z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,z)
z=new O.il(y)
x=a.c
x.toString
w=H.d(new O.io(y,z),{func:1,ret:-1,args:[F.b5]})
C.a.v(x.b,w)
w=a.d
w.toString
z=H.d(new O.ip(y,z),{func:1,ret:-1,args:[F.K]})
C.a.v(w.b,z)
return y},function(a){return this.f2(a,null)},"hS","$2$color","$1","gf1",4,3,46],
hQ:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.ih(new V.F(1,1,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gf_",4,0,2],
hp:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.i8(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geh",4,0,2],
hf:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.i_(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gdT",4,0,2],
hK:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.ib(new V.F(1,0.3,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geT",4,0,2],
hP:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.ie(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geZ",4,0,2],
hj:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.d(new O.i3(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge3",4,0,2],
hk:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.d(new O.i4(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge4",4,0,2],
hi:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.d(new O.i2(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge2",4,0,2],
hl:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.d(new O.i5(new V.F(1,0.3,1,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge5",4,0,2],
hg:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.i0(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.i1(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","gdX",4,0,2],
hO:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.d(new O.ic(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.id(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","geY",4,0,2],
hR:[function(a){var z,y,x,w,v,u,t
z={}
y=F.Z()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.A]}
C.a.v(w,H.d(new O.ii(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.E()
if(typeof u!=="number")return H.n(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.d(new O.ij(z,y),x)
C.a.v(w.c,x)
x=a.d
x.toString
w=H.d(new O.ik(y),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,w)
return y},"$1","gf0",4,0,2],
eb:function(a){var z,y,x
z={}
z.a=0
y=a.a
y.toString
x=H.d(new O.i7(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return C.d.bc((z.a+1.5)*0.5)},
b3:function(a,b){var z
if(a<0)return new V.av(0,0,0)
else{z=Math.floor((a+0.5)*0.5)
return V.dS(z/b,a-z*2,1)}},
he:[function(a){var z,y,x,w
z=this.eb(a)
y=F.Z()
x=a.a
x.toString
w=H.d(new O.hY(this,z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,w)
w=a.d
w.toString
x=H.d(new O.hZ(y),{func:1,ret:-1,args:[F.K]})
C.a.v(w.b,x)
return y},"$1","gdS",4,0,2],
hd:[function(a){return this.dR(a)},"$1","gcm",4,0,2],
dR:function(a){var z,y
z=F.Z()
y=new O.hX(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
hc:[function(a){return this.dM(a)},"$1","gcj",4,0,2],
dM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.cR()
y=F.Z()
x=new O.hW(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
s=w+z.d
r=x.$3(s,v,u)
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.t()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.n(0,t,r)
y.c.n(0,r,p)
y.c.n(0,p,o)
y.c.n(0,o,t)
y.c.n(0,n,m)
y.c.n(0,m,l)
y.c.n(0,l,k)
y.c.n(0,k,n)
y.c.n(0,t,n)
y.c.n(0,r,m)
y.c.n(0,p,l)
y.c.n(0,o,k)
return y}},i9:{"^":"b:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.X()
y.sa1(0,this.b)
y.sP(new V.o(0,0,0))
z.h(0,y)}},ia:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},im:{"^":"b:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.b.a
y=a.X()
y.sa1(0,this.a.a)
y.sP(new V.o(0,0,0))
z.h(0,y)}},il:{"^":"b:48;a",
$2:function(a,b){if(a.fp(b)==null)this.a.c.n(0,a,b)}},io:{"^":"b:49;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isb5")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.q()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.e(z,x)
this.b.$2(w,z[x])}},ip:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.q()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.e(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},ih:{"^":"b:4;a,b",
$1:function(a){var z,y
z=H.f(a,"$isA").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d0(z)}},i8:{"^":"b:4;a,b",
$1:function(a){var z,y,x
z=H.f(a,"$isA").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i_:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},ib:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x.af(a.r).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},ie:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i3:{"^":"b:3;a,b",
$1:function(a){var z,y
H.f(a,"$isK")
z=F.aq(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d0(z)}},i4:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isK")
z=F.aq(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i2:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isK")
z=F.aq(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i5:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isK")
z=F.aq(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e.af(a.d).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i0:{"^":"b:4;a",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.X()
y.sP(new V.o(0,0,0))
z.h(0,y)}},i1:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},ic:{"^":"b:4;a",
$1:function(a){var z,y,x,w,v,u,t
H.f(a,"$isA")
z=a.y
y=this.a.a
x=a.X()
w=z.a
v=z.b
if(w<0)w=0
else if(w>1)w=1
u=v<0
if(u)t=0
else t=v>1?1:v
if(u)v=0
else if(v>1)v=1
x.sa1(0,new V.F(w,t,v,1))
x.sP(new V.o(0,0,0))
y.h(0,x)}},id:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},ii:{"^":"b:4;a",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.a6()
if(typeof x!=="number")return H.n(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.I()
if(y<x)z.b=x}},ij:{"^":"b:4;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.E()
if(typeof x!=="number")return H.n(x)
w=V.dS((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.X()
x.sP(new V.o(0,0,0))
x.sa1(0,new V.F(w.a,w.b,w.c,1))
y.h(0,x)}},ik:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},i7:{"^":"b:4;a",
$1:function(a){var z,y,x
z=H.f(a,"$isA").cx
if(z==null)z=new V.am(0,0,0,0)
y=this.a
x=Math.max(y.a,z.a)
y.a=x
x=Math.max(x,z.b)
y.a=x
x=Math.max(x,z.c)
y.a=x
y.a=Math.max(x,z.d)}},hY:{"^":"b:4;a,b,c",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.cx
if(z==null)z=new V.am(0,0,0,0)
y=this.a
x=this.b
w=new V.av(0,0,0).t(0,y.b3(z.a,x)).t(0,y.b3(z.b,x)).t(0,y.b3(z.c,x)).t(0,y.b3(z.d,x))
x=this.c.a
y=a.X()
y.sP(new V.o(0,0,0))
y.sa1(0,new V.F(w.a,w.b,w.c,1))
x.h(0,y)}},hZ:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},hX:{"^":"b;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.F(z,y,x,1)
z=this.a
v=z.a.bH(0,0,0)
v.sP(new V.o(0,0,0))
v.saJ(new V.o(1,0,0))
v.sa1(0,w)
u=z.a.bH(a,b,c)
u.sP(new V.o(0,0,0))
u.saJ(new V.o(1,0,0))
u.sa1(0,w)
z.c.n(0,v,u)}},hW:{"^":"b;a",
$3:function(a,b,c){var z=this.a.a.bH(a,b,c)
z.sP(new V.o(0,0,0))
z.saJ(new V.o(a,b,c))
return z}},d4:{"^":"c;"}}],["","",,T,{"^":"",jO:{"^":"c;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",he:{"^":"c;",
aU:function(a,b){return!0},
i:function(a){return"all"},
$isbX:1},bX:{"^":"c;"},el:{"^":"c;",
aU:["dA",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)if(z[x].aU(0,b))return!0
return!1}],
i:["ce",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.I)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbX:1},bA:{"^":"el;0a",
aU:function(a,b){return!this.dA(0,b)},
i:function(a){return"!["+this.ce(0)+"]"}},jt:{"^":"c;0a",
dD:function(a){var z,y
if(a.a.length<=0)throw H.a(P.T("May not create a SetMatcher with zero characters."))
z=new H.aK(0,0,[P.l,P.P])
for(y=new H.ej(a,a.gl(a),0,[H.az(a,"u",0)]);y.J();)z.k(0,y.d,!0)
this.a=z},
aU:function(a,b){return this.a.ba(0,b)},
i:function(a){var z=this.a
return P.c0(z.gal(z),0,null)},
$isbX:1,
u:{
aa:function(a){var z=new V.jt()
z.dD(a)
return z}}},eB:{"^":"c;a,b,0c,0d",
gfF:function(a){return this.b},
F:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eN(this.a.O(0,b))
w.a=H.i([],[V.bX])
w.c=!1
C.a.h(this.c,w)
return w},
fo:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
if(w.aU(0,a))return w}return},
i:function(a){return this.b}},eK:{"^":"c;a,b,c",
i:function(a){var z,y
z=H.h3(this.b,"\n","\\n")
y=H.h3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eL:{"^":"c;a,b,0c",
i:function(a){return this.b}},jT:{"^":"c;0a,0b,0c",
O:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eB(this,b)
z.c=H.i([],[V.eN])
this.a.k(0,b,z)}return z},
b_:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eL(this,a)
y=P.j
z.c=new H.aK(0,0,[y,y])
this.b.k(0,a,z)}return z},
h7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.i([],[V.eK])
y=this.c
x=[P.l]
w=H.i([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.fo(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c0(w,0,null)
throw H.a(P.T("Untokenizable string [state: "+y.gfF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.i([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c0(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eK(o==null?p.b:o,q,t)}++t}}}},eN:{"^":"el;b,0c,0a",
i:function(a){return this.b.b+": "+this.ce(0)}}}],["","",,X,{"^":"",dN:{"^":"c;",$isem:1},hS:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z}},j_:{"^":"c;0a,0b,0c,0d,0e,0f",
gD:function(){var z=this.f
if(z==null){z=D.W()
this.f=z}return z},
aP:[function(a){var z
H.f(a,"$ist")
z=this.f
if(!(z==null))z.G(a)},function(){return this.aP(null)},"hb","$1","$0","gci",0,2,6],
saV:function(a){var z,y,x
if(!J.E(this.b,a)){z=this.b
if(z!=null){z=z.gD()
z.toString
y=H.d(this.gci(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gD()
z.toString
y=H.d(this.gci(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("mover",x,this.b,this,[U.ai])
z.b=!0
this.aP(z)}},
$isem:1,
$isdN:1},eF:{"^":"c;"}}],["","",,V,{"^":"",
o6:function(a){P.jS(C.B,new V.o7(a))},
hn:{"^":"c;a,b,0c,0d",
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.d(c,{func:1,ret:-1,args:[P.P]})
if(this.c==null)return
z=this.d.length
y=P.c3().gaK().j(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.e(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.c9(this.c).h(0,u)
s=W.e7("checkbox")
s.checked=x
t=W.ac
W.a3(s,"change",H.d(new V.ho(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.c9(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.cK(z,x)},
n:function(a,b,c){return this.a0(a,b,c,!1)},
cK:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.c3().gaK().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.fN(y,a-x+1,"0")
w=a>0?C.b.w(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.av(y,x)
v=P.c3()
x=P.j
u=P.ei(v.gaK(),x,x)
u.k(0,z,w)
t=v.c3(0,u)
z=window.history
x=t.i(0)
z.toString
z.replaceState(new P.fn([],[]).bg(""),"",x)}},
ho:{"^":"b:16;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.cK(this.d,z.checked)}},
o7:{"^":"b:51;a",
$1:function(a){H.f(a,"$isbf")
P.dw(C.d.dj(this.a.gfu(),2)+" fps")}},
jd:{"^":"c;a,b,0c",
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.d(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.c3().gaK().j(0,H.k(z))
if(y==null)if(d){c.$0()
this.cJ(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.c9(this.c).h(0,v)
t=W.e7("radio")
t.checked=x
t.name=z
z=W.ac
W.a3(t,"change",H.d(new V.je(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.c9(this.c).h(0,w.createElement("br"))},
n:function(a,b,c){return this.a0(a,b,c,!1)},
cJ:function(a){var z,y,x,w,v
z=P.c3()
y=P.j
x=P.ei(z.gaK(),y,y)
x.k(0,this.a,a)
w=z.c3(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fn([],[]).bg(""),"",v)},
u:{
eu:function(a,b){var z,y
z=new V.jd(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.J("Failed to find "+a+" for RadioGroup")
return z}}},
je:{"^":"b:16;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.cJ(this.d)}}},
jy:{"^":"c;0a,0b",
dF:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.d(new V.jB(x),{func:1,ret:-1,args:[t]}),!1,t)},
cP:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ish",[P.j],"$ash")
this.eO()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.h7(C.a.fB(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v){u=x[v]
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
y.appendChild(q)}else{p=P.cs(C.N,s,C.f,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
f3:function(a){var z,y,x,w,v,u,t
H.v(a,"$ish",[P.j],"$ash")
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
x=H.f(w.insertCell(-1),"$isd3").style
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
t=H.f(w.insertCell(-1),"$isd3")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
eO:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jT()
y=P.j
z.a=new H.aK(0,0,[y,V.eB])
z.b=new H.aK(0,0,[y,V.eL])
z.c=z.O(0,"Start")
y=z.O(0,"Start").F(0,"Bold")
x=V.aa(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").F(0,"Bold")
x=new V.bA()
w=[V.bX]
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").F(0,"BoldEnd")
x=V.aa(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Italic")
x=V.aa(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").F(0,"Italic")
x=new V.bA()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").F(0,"ItalicEnd")
x=V.aa(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Code")
x=V.aa(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").F(0,"Code")
x=new V.bA()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").F(0,"CodeEnd")
x=V.aa(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"LinkHead")
x=V.aa(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").F(0,"LinkTail")
x=V.aa(new H.a5("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").F(0,"LinkEnd")
y=V.aa(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").F(0,"LinkHead")
y=new V.bA()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").F(0,"LinkEnd")
y=V.aa(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").F(0,"LinkTail")
y=new V.bA()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").F(0,"Other").a,new V.he())
x=z.O(0,"Other").F(0,"Other")
y=new V.bA()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.b_("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.b_("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.b_("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.b_("Link")
x=z.O(0,"Other")
x.d=x.a.b_("Other")
this.b=z},
u:{
jz:function(a,b){var z=new V.jy()
z.dF(a,!0)
return z}}},
jB:{"^":"b:16;a",
$1:function(a){P.eI(C.m,new V.jA(this.a))}},
jA:{"^":"b:0;a",
$0:function(){var z,y,x
z=C.d.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,Z,{"^":"",
fY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jz("Test 002",!0)
y=W.dO(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.cP(H.i(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],x))
z.f3(H.i(["controls","shapes","scalars"],x))
z.cP(H.i(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.J(P.T("Failed to find an element with the identifier, testCanvas."))
v=E.jQ(w,!0,!0,!0,!1)
u=new E.aS()
u.a=""
u.b=!0
t=E.aS
s=O.dR(t)
u.y=s
s.bj(u.gfH(),u.gfJ())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.scc(0,null)
u.saV(null)
s=new U.e4()
s.cf(U.ai)
s.bj(s.gei(),s.geA())
s.e=null
s.f=V.ch()
s.r=0
r=v.r
q=new U.km()
p=U.cN()
p.sca(0,!0)
p.sbX(6.283185307179586)
p.sbZ(0)
p.sU(0,0)
p.sbY(100)
p.sV(0)
p.sbS(0.5)
q.b=p
p=p.gD()
p.toString
o={func:1,ret:-1,args:[D.t]}
n=H.d(q.gaB(),o)
C.a.h(p.a,n)
p=U.cN()
p.sca(0,!0)
p.sbX(6.283185307179586)
p.sbZ(0)
p.sU(0,0)
p.sbY(100)
p.sV(0)
p.sbS(0.5)
q.c=p
C.a.h(p.gD().a,n)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
m=new X.aD(!1,!1,!1)
l=q.d
q.d=m
p=[X.aD]
n=new D.C("modifiers",l,m,q,p)
n.b=!0
q.T(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.C("invertX",n,!1,q,[P.P])
n.b=!0
q.T(n)}n=q.r
if(n!==!0){q.r=!0
n=new D.C("invertY",n,!0,q,[P.P])
n.b=!0
q.T(n)}q.aR(r)
s.h(0,q)
r=v.r
q=new U.kl()
n=U.cN()
n.sca(0,!0)
n.sbX(6.283185307179586)
n.sbZ(0)
n.sU(0,0)
n.sbY(100)
n.sV(0)
n.sbS(0.2)
q.b=n
n=n.gD()
n.toString
k=H.d(q.gaB(),o)
C.a.h(n.a,k)
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
m=new X.aD(!0,!1,!1)
l=q.c
q.c=m
n=new D.C("modifiers",l,m,q,p)
n.b=!0
q.T(n)
q.aR(r)
s.h(0,q)
r=v.r
q=new U.kn()
q.c=0.01
q.d=0
q.e=0
m=new X.aD(!1,!1,!1)
q.b=m
p=new D.C("modifiers",null,m,q,p)
p.b=!0
q.T(p)
q.aR(r)
s.h(0,q)
u.saV(s)
j=new O.hU()
j.b=new V.o(0,0,-1)
j.c=new V.F(0.2,0.3,0.4,1)
j.d=new V.F(0.1,0.2,0.3,1)
j.e=new V.F(0.7,0.7,0.7,1)
j.f=new V.F(0.3,0.3,0.3,1)
j.r=new V.F(0.5,0.5,0.5,1)
j.x=new V.F(0.5,0.5,0.5,1)
j.y=new V.F(1,1,1,1)
j.z=new V.F(0.8,0.8,0.8,1)
j.Q=!1
j.ch=!1
j.cx=!1
j.cy=!1
j.db=!1
j.dx=!1
j.dy=!1
j.fr=!1
j.fx=!1
j.fy=!1
j.go=!1
j.id=!1
j.k1=!1
j.k2=!1
j.k3=!1
j.k4=!1
j.r1=!1
j.r2=1
j.sa5(0.4)
s=new M.hK()
t=O.dR(t)
s.d=t
t.bj(s.gek(),s.gel())
s.e=null
s.f=null
s.r=null
s.x=null
i=new X.j_()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.saV(null)
t=i.c
if(!$.p.$2(t,1.0471975511965976)){l=i.c
i.c=1.0471975511965976
t=new D.C("fov",l,1.0471975511965976,i,[P.q])
t.b=!0
i.aP(t)}t=i.d
if(!$.p.$2(t,0.1)){l=i.d
i.d=0.1
t=new D.C("near",l,0.1,i,[P.q])
t.b=!0
i.aP(t)}t=i.e
if(!$.p.$2(t,2000)){l=i.e
i.e=2000
t=new D.C("far",l,2000,i,[P.q])
t.b=!0
i.aP(t)}t=s.a
if(t!==i){if(t!=null){t=t.gD()
t.toString
r=H.d(s.gah(),o)
C.a.L(t.a,r)}l=s.a
s.a=i
t=i.gD()
t.toString
r=H.d(s.gah(),o)
C.a.h(t.a,r)
t=new D.C("camera",l,s.a,s,[X.dN])
t.b=!0
s.ax(t)}h=new X.hS()
t=new V.F(0,0,0,1)
h.a=t
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
t=V.ew(0,0,1,1)
h.r=t
t=s.b
if(t!==h){if(t!=null){t=t.gD()
t.toString
r=H.d(s.gah(),o)
C.a.L(t.a,r)}l=s.b
s.b=h
t=h.gD()
t.toString
r=H.d(s.gah(),o)
C.a.h(t.a,r)
t=new D.C("target",l,s.b,s,[X.eF])
t.b=!0
s.ax(t)}s.sdh(null)
s.sdh(j)
s.d.h(0,u)
t=s.a
g=V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
r=new U.dT()
r.a=g
t.saV(r)
t=v.d
if(t!==s){if(t!=null){t=t.gD()
t.toString
r=H.d(v.gcg(),o)
C.a.L(t.a,r)}v.d=s
t=s.gD()
t.toString
o=H.d(v.gcg(),o)
C.a.h(t.a,o)
v.dI()}t=new V.hn("controls",!0)
x=x.getElementById("controls")
t.c=x
if(x==null)H.J("Failed to find controls for CheckGroup")
t.d=H.i([],[W.dP])
t.a0(0,"Filled",new Z.ne(j),!0)
t.a0(0,"Wire Frame",new Z.nf(j),!0)
t.n(0,"Vertices",new Z.ng(j))
t.n(0,"Normals",new Z.nr(j))
t.n(0,"Binormals",new Z.nC(j))
t.n(0,"Tangentals",new Z.nN(j))
t.n(0,"Face Centers",new Z.nW(j))
t.n(0,"Face Normals",new Z.nX(j))
t.n(0,"Face Binormals",new Z.nY(j))
t.n(0,"Face Tangentals",new Z.nZ(j))
t.n(0,"Colors",new Z.o_(j))
t.n(0,"Textures2D",new Z.nh(j))
t.n(0,"TexturesCube",new Z.ni(j))
t.n(0,"Weight",new Z.nj(j))
t.n(0,"Bend",new Z.nk(j))
t.a0(0,"Axis",new Z.nl(j),!0)
t.n(0,"AABB",new Z.nm(j))
x=new Z.o0(u)
t=V.eu("shapes",!0)
t.a0(0,"Square",new Z.nn(x),!0)
t.n(0,"Cube",new Z.no(x))
t.n(0,"Cuboid",new Z.np(x))
t.n(0,"Cuboid+",new Z.nq(x))
t.n(0,"Disk",new Z.ns(x))
t.n(0,"Disk+",new Z.nt(x))
t.n(0,"Cylinder",new Z.nu(x))
t.n(0,"Cylinder+",new Z.nv(x))
t.n(0,"Cone",new Z.nw(x))
t.n(0,"Cylindrical",new Z.nx(x))
t.n(0,"LatLonSphere",new Z.ny(x))
t.n(0,"LatLonSphere+",new Z.nz(x))
t.n(0,"IsoSphere",new Z.nA(x))
t.n(0,"IsoSphere+",new Z.nB(x))
t.n(0,"Sphere",new Z.nD(x))
t.n(0,"Sphere+",new Z.nE(x))
t.n(0,"Spherical",new Z.nF(x))
t.n(0,"Toroid",new Z.nG(x))
t.n(0,"Knot",new Z.nH(x))
t.n(0,"Grid",new Z.nI(x))
t.n(0,"Grid+",new Z.nJ(x))
x=V.eu("scalars",!0)
x.n(0,"0.01",new Z.nK(j))
x.n(0,"0.02",new Z.nL(j))
x.n(0,"0.04",new Z.nM(j))
x.n(0,"0.06",new Z.nO(j))
x.n(0,"0.08",new Z.nP(j))
x.n(0,"0.1",new Z.nQ(j))
x.n(0,"0.2",new Z.nR(j))
x.a0(0,"0.4",new Z.nS(j),!0)
x.n(0,"0.6",new Z.nT(j))
x.n(0,"0.8",new Z.nU(j))
x.n(0,"1.0",new Z.nV(j))
V.o6(v)},
ne:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.C("showFilled",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nf:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.C("showWireFrame",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
ng:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.C("showVertices",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nr:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.C("showNormals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nC:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.C("showBinormals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nN:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.C("showTangentals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nW:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.C("showFaceCenters",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nX:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.C("showFaceNormals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nY:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.C("showFaceBinormals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nZ:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.C("showFaceTangentals",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
o_:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.C("showColorFill",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nh:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.C("showTxt2DColor",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
ni:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.C("showTxtCube",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nj:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.C("showWeight",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nk:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.r1!==a){z.r1=a
y=new D.C("showBend",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nl:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.C("showAxis",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
nm:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.C("showAABB",!a,a,z,[P.P])
y.b=!0
z.Y(y)}}},
o0:{"^":"b:53;a",
$1:function(a){a.fb()
this.a.scc(0,a)}},
nn:{"^":"b:0;a",
$0:function(){var z,y,x,w,v,u,t
z=F.Z()
y=z.a
x=new V.o(-1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
w=y.b8(new V.am(1,2,4,6),new V.F(1,0,0,1),new V.R(-1,-1,0),new V.N(0,1),x,null)
y=z.a
x=new V.o(1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
v=y.b8(new V.am(0,3,4,6),new V.F(0,0,1,1),new V.R(1,-1,0),new V.N(1,1),x,null)
y=z.a
x=new V.o(1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
u=y.b8(new V.am(0,2,5,6),new V.F(0,1,0,1),new V.R(1,1,0),new V.N(1,0),x,null)
y=z.a
x=new V.o(-1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
t=y.b8(new V.am(0,2,4,7),new V.F(1,1,0,1),new V.R(-1,1,0),new V.N(0,0),x,null)
z.d.cN(H.i([w,v,u,t],[F.A]))
z.aa()
this.a.$1(z)}},
no:{"^":"b:0;a",
$0:function(){this.a.$1(F.cx(1,null,null,1))}},
np:{"^":"b:0;a",
$0:function(){this.a.$1(F.cx(8,null,null,8))}},
nq:{"^":"b:0;a",
$0:function(){this.a.$1(F.cx(15,null,new Z.nd(),15))}},
nd:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.o(x.a,x.b,x.c)
w=x.p(0,Math.sqrt(x.A(x)))
x=a.f
y=w.m(0,z*0.1+y*0.1)
a.sU(0,x.t(0,new V.R(y.a,y.b,y.c)))}},
ns:{"^":"b:0;a",
$0:function(){this.a.$1(F.cy(-1,!1,!1,0,null,8))}},
nt:{"^":"b:0;a",
$0:function(){this.a.$1(F.cy(-1,!1,!1,0,null,30))}},
nu:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!0,1,8,1))}},
nv:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!0,8,16,1))}},
nw:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!1,1,12,0))}},
nx:{"^":"b:0;a",
$0:function(){this.a.$1(F.fK(!0,!0,25,new Z.nc(),50))}},
nc:{"^":"b:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
ny:{"^":"b:0;a",
$0:function(){this.a.$1(F.fW(10,20))}},
nz:{"^":"b:0;a",
$0:function(){this.a.$1(F.fW(20,40))}},
nA:{"^":"b:0;a",
$0:function(){this.a.$1(F.fV(2))}},
nB:{"^":"b:0;a",
$0:function(){this.a.$1(F.fV(3))}},
nD:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(6,null,6))}},
nE:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(10,null,10))}},
nF:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(10,new Z.nb(),10))}},
nb:{"^":"b:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
nG:{"^":"b:0;a",
$0:function(){this.a.$1(F.ob(30,1,15,0.5))}},
nH:{"^":"b:0;a",
$0:function(){this.a.$1(F.n6(120,1,2,12,0.3,3))}},
nI:{"^":"b:0;a",
$0:function(){this.a.$1(F.fR(4,null,4))}},
nJ:{"^":"b:0;a",
$0:function(){this.a.$1(F.fR(16,new Z.na(),16))}},
na:{"^":"b:9;",
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}},
nK:{"^":"b:0;a",
$0:function(){this.a.sa5(0.01)}},
nL:{"^":"b:0;a",
$0:function(){this.a.sa5(0.02)}},
nM:{"^":"b:0;a",
$0:function(){this.a.sa5(0.04)}},
nO:{"^":"b:0;a",
$0:function(){this.a.sa5(0.06)}},
nP:{"^":"b:0;a",
$0:function(){this.a.sa5(0.08)}},
nQ:{"^":"b:0;a",
$0:function(){this.a.sa5(0.1)}},
nR:{"^":"b:0;a",
$0:function(){this.a.sa5(0.2)}},
nS:{"^":"b:0;a",
$0:function(){this.a.sa5(0.4)}},
nT:{"^":"b:0;a",
$0:function(){this.a.sa5(0.6)}},
nU:{"^":"b:0;a",
$0:function(){this.a.sa5(0.8)}},
nV:{"^":"b:0;a",
$0:function(){this.a.sa5(1)}}},1]]
setupProgram(dart,0,0)
J.Q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eb.prototype
return J.iu.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.ec.prototype
if(typeof a=="boolean")return J.it.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.as=function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.c5=function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.fN=function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c2.prototype
return a}
J.fO=function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c2.prototype
return a}
J.ds=function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c2.prototype
return a}
J.aW=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).B(a,b)}
J.aA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fN(a).a6(a,b)}
J.h5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fN(a).I(a,b)}
J.dz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fO(a).m(a,b)}
J.dA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.as(a).j(a,b)}
J.cF=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c5(a).k(a,b,c)}
J.h6=function(a,b){return J.ds(a).H(a,b)}
J.h7=function(a,b,c){return J.aW(a).eH(a,b,c)}
J.h8=function(a,b,c,d){return J.aW(a).cM(a,b,c,d)}
J.h9=function(a,b){return J.ds(a).Z(a,b)}
J.ha=function(a,b){return J.fO(a).aF(a,b)}
J.cG=function(a,b,c){return J.as(a).fe(a,b,c)}
J.cH=function(a,b){return J.c5(a).K(a,b)}
J.hb=function(a,b,c,d){return J.c5(a).at(a,b,c,d)}
J.dB=function(a,b){return J.c5(a).v(a,b)}
J.c9=function(a){return J.aW(a).gbP(a)}
J.bQ=function(a){return J.Q(a).gW(a)}
J.bs=function(a){return J.c5(a).ga2(a)}
J.ao=function(a){return J.as(a).gl(a)}
J.hc=function(a,b){return J.aW(a).fZ(a,b)}
J.hd=function(a,b){return J.aW(a).sa3(a,b)}
J.ab=function(a){return J.Q(a).i(a)}
I.an=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.cL.prototype
C.C=J.r.prototype
C.a=J.b4.prototype
C.c=J.eb.prototype
C.D=J.ec.prototype
C.d=J.bU.prototype
C.b=J.bV.prototype
C.K=J.bW.prototype
C.Q=H.cZ.prototype
C.R=W.iW.prototype
C.u=J.j0.prototype
C.n=J.c2.prototype
C.v=W.bG.prototype
C.w=W.kK.prototype
C.y=new P.hj(!1)
C.x=new P.hi(C.y)
C.z=new P.iZ()
C.A=new P.kv()
C.e=new P.lx()
C.m=new P.aC(0)
C.B=new P.aC(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.i(I.an([127,2047,65535,1114111]),[P.l])
C.i=H.i(I.an([0,0,32776,33792,1,10240,0,0]),[P.l])
C.j=H.i(I.an([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.k=H.i(I.an([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.M=H.i(I.an([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.N=H.i(I.an([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.l=H.i(I.an([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.r=H.i(I.an([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.O=H.i(I.an([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.t=H.i(I.an([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.L=H.i(I.an([]),[P.j])
C.P=new H.hx(0,{},C.L,[P.j,P.j])
C.f=new P.ko(!1)
$.aB=0
$.bt=null
$.dH=null
$.dj=!1
$.fQ=null
$.fG=null
$.h1=null
$.cz=null
$.cD=null
$.dt=null
$.bn=null
$.bL=null
$.bM=null
$.dk=!1
$.V=C.e
$.e_=null
$.dZ=null
$.dY=null
$.dX=null
$.p=V.iQ()
$.ig="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.i6="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
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
I.$lazy(y,x,w)}})(["dW","$get$dW",function(){return H.fP("_$dart_dartClosure")},"cR","$get$cR",function(){return H.fP("_$dart_js")},"eO","$get$eO",function(){return H.aF(H.cm({
toString:function(){return"$receiver$"}}))},"eP","$get$eP",function(){return H.aF(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"eQ","$get$eQ",function(){return H.aF(H.cm(null))},"eR","$get$eR",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aF(H.cm(void 0))},"eW","$get$eW",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.aF(H.eU(null))},"eS","$get$eS",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aF(H.eU(void 0))},"eX","$get$eX",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"de","$get$de",function(){return P.kL()},"bN","$get$bN",function(){return[]},"f4","$get$f4",function(){return P.ks()},"fb","$get$fb",function(){return H.iU(H.cu(H.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))},"fw","$get$fw",function(){return P.jj("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fC","$get$fC",function(){return P.mv()},"dU","$get$dU",function(){return{}},"f8","$get$f8",function(){return Z.ar(0)},"f6","$get$f6",function(){return Z.ar(511)},"aP","$get$aP",function(){return Z.ar(1)},"aO","$get$aO",function(){return Z.ar(2)},"aN","$get$aN",function(){return Z.ar(4)},"bj","$get$bj",function(){return Z.ar(8)},"bk","$get$bk",function(){return Z.ar(16)},"aV","$get$aV",function(){return Z.ar(32)},"bF","$get$bF",function(){return Z.ar(64)},"f7","$get$f7",function(){return Z.ar(96)},"bl","$get$bl",function(){return Z.ar(128)},"bi","$get$bi",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:P.D,args:[P.P]},{func:1,ret:F.a4,args:[F.a4]},{func:1,ret:P.D,args:[F.K]},{func:1,ret:P.D,args:[F.A]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1},{func:1,ret:P.D,args:[F.A,P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.l,[P.m,E.aS]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.ac]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.D,args:[D.t]},{func:1,ret:P.q},{func:1,ret:V.R,args:[P.q]},{func:1,ret:P.j,args:[P.l]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.l,[P.m,U.ai]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:W.a1,args:[W.M]},{func:1,ret:P.P,args:[W.M]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.D,args:[P.a0]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.S,args:[P.l]},{func:1,ret:P.D,args:[P.j,,]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.D,args:[P.j]},{func:1,ret:P.P,args:[P.q,P.q]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:-1,args:[P.j,P.l]},{func:1,ret:[P.L,P.j,P.j],args:[[P.L,P.j,P.j],P.j]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.l,args:[[P.h,P.l],P.l]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[,P.j]},{func:1,ret:F.a4,args:[F.a4],named:{color:V.F}},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[F.A,F.A]},{func:1,ret:P.D,args:[F.b5]},{func:1,args:[P.j]},{func:1,ret:P.D,args:[P.bf]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:-1,args:[F.a4]},{func:1,ret:P.l,args:[,,]},{func:1,ret:-1,args:[P.c],opt:[P.ax]},{func:1,ret:[P.aQ,,],args:[,]}]
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
if(x==y)H.oa(d||a)
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
Isolate.an=a.an
Isolate.dq=a.dq
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.fY,[])
else Z.fY([])})})()
//# sourceMappingURL=test.dart.js.map
