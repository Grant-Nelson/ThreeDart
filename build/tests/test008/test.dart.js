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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.du=function(){}
var dart=[["","",,H,{"^":"",nN:{"^":"b;a"}}],["","",,J,{"^":"",
G:function(a){return void 0},
dy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dw==null){H.mV()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.bZ("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cU()]
if(v!=null)return v
v=H.mY(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cU(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
n:{"^":"b;",
u:function(a,b){return a===b},
gS:function(a){return H.bx(a)},
i:["dl",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ie:{"^":"n;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isR:1},
ei:{"^":"n;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isF:1},
cV:{"^":"n;",
gS:function(a){return 0},
i:["dn",function(a){return String(a)}]},
iL:{"^":"cV;"},
cp:{"^":"cV;"},
bW:{"^":"cV;",
i:function(a){var z=a[$.$get$dY()]
if(z==null)return this.dn(a)
return"JavaScript function for "+H.h(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbU:1},
b1:{"^":"n;$ti",
h:function(a,b){H.v(b,H.u(a,0))
if(!!a.fixed$length)H.P(P.z("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.P(P.z("remove"))
for(z=0;z<a.length;++z)if(J.W(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aw(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.h(a[y]))
return z.join(b)},
f8:function(a){return this.l(a,"")},
f0:function(a,b,c,d){var z,y,x
H.v(b,d)
H.j(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aw(a))}return y},
eZ:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.R,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aw(a))}throw H.a(H.cS())},
eY:function(a,b){return this.eZ(a,b,null)},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
be:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaf:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cS())},
am:function(a,b,c,d){var z
H.v(d,H.u(a,0))
if(!!a.immutable$list)H.P(P.z("fill range"))
P.aH(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.G(0,1))a[z]=d},
cE:function(a,b){var z,y
H.j(b,{func:1,ret:P.R,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aw(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.W(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gV:function(a){return new J.au(a,a.length,0,[H.u(a,0)])},
gS:function(a){return H.bx(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.P(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.c4(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b>=a.length||b<0)throw H.a(H.aB(a,b))
return a[b]},
n:function(a,b,c){H.B(b)
H.v(c,H.u(a,0))
if(!!a.immutable$list)H.P(P.z("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b>=a.length||b<0)throw H.a(H.aB(a,b))
a[b]=c},
$isk:1,
$isf:1,
p:{
id:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.c4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.ef(new Array(a),b)},
ef:function(a,b){return J.bs(H.c(a,[b]))},
bs:function(a){H.bO(a)
a.fixed$length=Array
return a}}},
nM:{"^":"b1;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gK:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.I(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cb:{"^":"n;",
fO:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.z(""+a+".toInt()"))},
bK:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.z(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.z(""+a+".round()"))},
d5:function(a,b){var z,y
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
aX:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.U(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.P(P.z("Unexpected toString result: "+z))
x=J.aC(y)
z=x.m(y,1)
w=+x.m(y,3)
if(x.m(y,2)!=null){z+=x.m(y,2)
w-=x.m(y,2).length}return z+C.b.t("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
aZ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cu(a,b)},
aw:function(a,b){return(a|0)===a?a/b|0:this.cu(a,b)},
cu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.z("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
av:function(a,b){var z
if(a>0)z=this.cs(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ey:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.cs(a,b)},
cs:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isy:1,
$isa_:1},
eh:{"^":"cb;",$ism:1},
eg:{"^":"cb;"},
cc:{"^":"n;",
U:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b<0)throw H.a(H.aB(a,b))
if(b>=a.length)H.P(H.aB(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(b>=a.length)throw H.a(H.aB(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.D(b)
if(typeof b!=="string")throw H.a(P.c4(b,null,null))
return a+b},
aD:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.P(H.ae(b))
c=P.aH(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.P(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.P(H.ae(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
Y:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.P(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.ck(b,null,null))
if(b>c)throw H.a(P.ck(b,null,null))
if(c>a.length)throw H.a(P.ck(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.q(a,b,null)},
fR:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fn:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
aa:function(a,b){return this.fn(a,b," ")},
cR:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
cQ:function(a,b){return this.cR(a,b,0)},
eL:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h9(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isex:1,
$isd:1}}],["","",,H,{"^":"",
cC:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cS:function(){return new P.d6("No element")},
ic:function(){return new P.d6("Too many elements")},
o:{"^":"k_;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.U(this.a,b)},
$ascq:function(){return[P.m]},
$asq:function(){return[P.m]},
$ask:function(){return[P.m]},
$asf:function(){return[P.m]}},
e4:{"^":"k;"},
ce:{"^":"e4;$ti",
gV:function(a){return new H.cZ(this,this.gk(this),0,[H.af(this,"ce",0)])},
c_:function(a,b){return this.dm(0,H.j(b,{func:1,ret:P.R,args:[H.af(this,"ce",0)]}))}},
cZ:{"^":"b;a,b,c,0d,$ti",
gK:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.aC(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aw(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
iw:{"^":"k;a,b,$ti",
gV:function(a){return new H.ix(J.aQ(this.a),this.b,this.$ti)},
gk:function(a){return J.ah(this.a)},
F:function(a,b){return this.b.$1(J.c3(this.a,b))},
$ask:function(a,b){return[b]}},
ix:{"^":"cT;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gK(z))
return!0}this.a=null
return!1},
gK:function(a){return this.a},
$ascT:function(a,b){return[b]}},
iy:{"^":"ce;a,b,$ti",
gk:function(a){return J.ah(this.a)},
F:function(a,b){return this.b.$1(J.c3(this.a,b))},
$asce:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dh:{"^":"k;a,b,$ti",
gV:function(a){return new H.kt(J.aQ(this.a),this.b,this.$ti)}},
kt:{"^":"cT;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gK(z)))return!0
return!1},
gK:function(a){var z=this.a
return z.gK(z)}},
ca:{"^":"b;$ti"},
cq:{"^":"b;$ti",
n:function(a,b,c){H.B(b)
H.v(c,H.af(this,"cq",0))
throw H.a(P.z("Cannot modify an unmodifiable list"))},
am:function(a,b,c,d){H.v(d,H.af(this,"cq",0))
throw H.a(P.z("Cannot modify an unmodifiable list"))}},
k_:{"^":"cd+cq;"}}],["","",,H,{"^":"",
hH:function(){throw H.a(P.z("Cannot modify unmodifiable Map"))},
mL:function(a){return init.types[H.B(a)]},
h2:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.G(a).$isE},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bx:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iV:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.B(w,u)|32)>x)return}return parseInt(a,b)},
b4:function(a){var z,y,x,w,v,u,t,s,r
z=J.G(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.K||!!J.G(a).$iscp){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.B(w,0)===36)w=C.b.ah(w,1)
r=H.dx(H.bO(H.aW(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iN:function(){if(!!self.location)return self.location.href
return},
eB:function(a){var z,y,x,w,v
H.bO(a)
z=J.ah(a)
if(typeof z!=="number")return z.df()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iW:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.av(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.eB(z)},
eC:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iW(a)}return H.eB(a)},
iX:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.df()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
by:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.av(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iU:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
iS:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
iO:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
iP:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
iR:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
iT:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
iQ:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
r:function(a){throw H.a(H.ae(a))},
i:function(a,b){if(a==null)J.ah(a)
throw H.a(H.aB(a,b))},
aB:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,"index",null)
z=H.B(J.ah(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.ck(b,"index",null)},
mG:function(a,b,c){if(a>c)return new P.cj(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end","Invalid value")
return new P.at(!0,b,"end",null)},
ae:function(a){return new P.at(!0,a,null,null)},
mB:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.ew()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.a6(this.dartException)},
P:function(a){throw H.a(a)},
I:function(a){throw H.a(P.aw(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.av(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cW(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ev(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eY()
u=$.$get$eZ()
t=$.$get$f_()
s=$.$get$f0()
r=$.$get$f4()
q=$.$get$f5()
p=$.$get$f2()
$.$get$f1()
o=$.$get$f7()
n=$.$get$f6()
m=v.a7(y)
if(m!=null)return z.$1(H.cW(H.D(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cW(H.D(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ev(H.D(y),m))}}return z.$1(new H.jZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.at(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eI()
return a},
bk:function(a){var z
if(a==null)return new H.fz(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fz(a)},
mJ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
mX:function(a,b,c,d,e,f){H.e(a,"$isbU")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.a4("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mX)
a.$identity=z
return z},
hD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.G(d).$isf){z.$reflectionInfo=d
x=H.j2(z).r}else x=d
w=e?Object.create(new H.jo().constructor.prototype):Object.create(new H.cJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.av
if(typeof u!=="number")return u.G()
$.av=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mL,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cK
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
hA:function(a,b,c,d){var z=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hC(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hA(y,!w,z,b)
if(y===0){w=$.av
if(typeof w!=="number")return w.G()
$.av=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bo
if(v==null){v=H.c6("self")
$.bo=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.av
if(typeof w!=="number")return w.G()
$.av=w+1
t+=w
w="return function("+t+"){return this."
v=$.bo
if(v==null){v=H.c6("self")
$.bo=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
hB:function(a,b,c,d){var z,y
z=H.cK
y=H.dM
switch(b?-1:a){case 0:throw H.a(H.jc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hC:function(a,b){var z,y,x,w,v,u,t,s
z=$.bo
if(z==null){z=H.c6("self")
$.bo=z}y=$.dL
if(y==null){y=H.c6("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hB(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.av
if(typeof y!=="number")return y.G()
$.av=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.av
if(typeof y!=="number")return y.G()
$.av=y+1
return new Function(z+y+"}")()},
dt:function(a,b,c,d,e,f,g){var z,y
z=J.bs(H.bO(b))
H.B(c)
y=!!J.G(d).$isf?J.bs(d):d
return H.hD(a,z,c,y,!!e,f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ar(a,"String"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ar(a,"double"))},
nc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ar(a,"num"))},
dr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ar(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ar(a,"int"))},
h7:function(a,b){throw H.a(H.ar(a,H.D(b).substring(3)))},
ne:function(a,b){var z=J.aC(b)
throw H.a(H.hz(a,z.q(b,3,z.gk(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.h7(a,b)},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else z=!0
if(z)return a
H.ne(a,b)},
bO:function(a){if(a==null)return a
if(!!J.G(a).$isf)return a
throw H.a(H.ar(a,"List"))},
h4:function(a,b){if(a==null)return a
if(!!J.G(a).$isf)return a
if(J.G(a)[b])return a
H.h7(a,b)},
fZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
c1:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fZ(J.G(a))
if(z==null)return!1
y=H.h1(z,null,b,null)
return y},
j:function(a,b){var z,y
if(a==null)return a
if($.dn)return a
$.dn=!0
try{if(H.c1(a,b))return a
z=H.c2(b)
y=H.ar(a,z)
throw H.a(y)}finally{$.dn=!1}},
dv:function(a,b){if(a!=null&&!H.ds(a,b))H.P(H.ar(a,H.c2(b)))
return a},
fU:function(a){var z
if(a instanceof H.l){z=H.fZ(J.G(a))
if(z!=null)return H.c2(z)
return"Closure"}return H.b4(a)},
nj:function(a){throw H.a(new P.hL(H.D(a)))},
h_:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
oR:function(a,b,c){return H.bl(a["$as"+H.h(c)],H.aW(b))},
aP:function(a,b,c,d){var z
H.D(c)
H.B(d)
z=H.bl(a["$as"+H.h(c)],H.aW(b))
return z==null?null:z[d]},
af:function(a,b,c){var z
H.D(b)
H.B(c)
z=H.bl(a["$as"+H.h(b)],H.aW(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.B(b)
z=H.aW(a)
return z==null?null:z[b]},
c2:function(a){var z=H.aX(a,null)
return z},
aX:function(a,b){var z,y
H.w(b,"$isf",[P.d],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dx(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.h(b[y])}if('func' in a)return H.mr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aX(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aX(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aX(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mI(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.aX(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dx:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isf",[P.d],"$asf")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aX(u,c)}v="<"+z.i(0)+">"
return v},
bl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bK:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aW(a)
y=J.G(a)
if(y[b]==null)return!1
return H.fX(H.bl(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.D(b)
H.bO(c)
H.D(d)
if(a==null)return a
z=H.bK(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dx(c,0,null)
throw H.a(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fX:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.am(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.am(a[y],b,c[y],d))return!1
return!0},
oP:function(a,b,c){return a.apply(b,H.bl(J.G(b)["$as"+H.h(c)],H.aW(b)))},
h3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.h3(z)}return!1},
ds:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.h3(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.ds(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c1(a,b)}y=J.G(a).constructor
x=H.aW(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.am(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.ds(a,b))throw H.a(H.ar(a,H.c2(b)))
return a},
am:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.h1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,x,d)
else if(H.am(a,b,x,d))return!0
else{if(!('$is'+"br" in y.prototype))return!1
w=y.prototype["$as"+"br"]
v=H.bl(w,z?a.slice(1):null)
return H.am(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c2(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fX(H.bl(r,z),b,u,d)},
h1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.am(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.am(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.am(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nb(m,b,l,d)},
nb:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.am(c[w],d,a[w],b))return!1}return!0},
oQ:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
mY:function(a){var z,y,x,w,v,u
z=H.D($.h0.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.fW.$2(a,z))
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
return u.i}if(v==="+")return H.h6(a,x)
if(v==="*")throw H.a(P.bZ(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h6(a,x)},
h6:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dy(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dy(a,!1,null,!!a.$isE)},
na:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dy(z,c,null,null)},
mV:function(){if(!0===$.dw)return
$.dw=!0
H.mW()},
mW:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cD=Object.create(null)
H.mR()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h8.$1(v)
if(u!=null){t=H.na(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mR:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.bi(C.N,H.bi(C.S,H.bi(C.r,H.bi(C.r,H.bi(C.R,H.bi(C.O,H.bi(C.P(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h0=new H.mS(v)
$.fW=new H.mT(u)
$.h8=new H.mU(t)},
bi:function(a,b){return a(b)||b},
h9:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dB:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hG:{"^":"b;$ti",
i:function(a){return P.d_(this)},
n:function(a,b,c){H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
return H.hH()},
$isH:1},
hI:{"^":"hG;a,b,c,$ti",
gk:function(a){return this.a},
b3:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
m:function(a,b){if(!this.b3(0,b))return
return this.cl(b)},
cl:function(a){return this.b[H.D(a)]},
D:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.j(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.v(this.cl(v),z))}}},
j1:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bs(z)
y=z[0]
x=z[1]
return new H.j1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jI:{"^":"b;a,b,c,d,e,f",
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
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jI(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iI:{"^":"a1;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ev:function(a,b){return new H.iI(a,b==null?null:b.method)}}},
ii:{"^":"a1;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
p:{
cW:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ii(a,y,z?null:b.receiver)}}},
jZ:{"^":"a1;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nk:{"^":"l:16;a",
$1:function(a){if(!!J.G(a).$isa1)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fz:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
l:{"^":"b;",
i:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gda:function(){return this},
$isbU:1,
gda:function(){return this}},
eO:{"^":"l;"},
jo:{"^":"eO;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cJ:{"^":"eO;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bx(this.a)
else y=typeof z!=="object"?J.bP(z):H.bx(z)
return(y^H.bx(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
p:{
cK:function(a){return a.a},
dM:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cJ("self","target","receiver","name")
y=J.bs(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jJ:{"^":"a1;a",
i:function(a){return this.a},
p:{
ar:function(a,b){return new H.jJ("TypeError: "+H.h(P.c8(a))+": type '"+H.fU(a)+"' is not a subtype of type '"+b+"'")}}},
hy:{"^":"a1;a",
i:function(a){return this.a},
p:{
hz:function(a,b){return new H.hy("CastError: "+H.h(P.c8(a))+": type '"+H.fU(a)+"' is not a subtype of type '"+b+"'")}}},
jb:{"^":"a1;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
p:{
jc:function(a){return new H.jb(a)}}},
aU:{"^":"eq;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gf7:function(a){return this.a===0},
ga_:function(a){return new H.il(this,[H.u(this,0)])},
b3:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cg(y,b)}else return this.f4(b)},
f4:function(a){var z=this.d
if(z==null)return!1
return this.bN(this.bn(z,this.bM(a)),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b0(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b0(w,b)
x=y==null?null:y.b
return x}else return this.f5(b)},
f5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bn(z,this.bM(a))
x=this.bN(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bs()
this.b=z}this.c9(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bs()
this.c=y}this.c9(y,b,c)}else this.f6(b,c)},
f6:function(a,b){var z,y,x,w
H.v(a,H.u(this,0))
H.v(b,H.u(this,1))
z=this.d
if(z==null){z=this.bs()
this.d=z}y=this.bM(a)
x=this.bn(z,y)
if(x==null)this.bw(z,y,[this.bt(a,b)])
else{w=this.bN(x,a)
if(w>=0)x[w].b=b
else x.push(this.bt(a,b))}},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aw(this))
z=z.c}},
c9:function(a,b,c){var z
H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
z=this.b0(a,b)
if(z==null)this.bw(a,b,this.bt(b,c))
else z.b=c},
dY:function(){this.r=this.r+1&67108863},
bt:function(a,b){var z,y
z=new H.ik(H.v(a,H.u(this,0)),H.v(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dY()
return z},
bM:function(a){return J.bP(a)&0x3ffffff},
bN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
i:function(a){return P.d_(this)},
b0:function(a,b){return a[b]},
bn:function(a,b){return a[b]},
bw:function(a,b,c){a[b]=c},
dT:function(a,b){delete a[b]},
cg:function(a,b){return this.b0(a,b)!=null},
bs:function(){var z=Object.create(null)
this.bw(z,"<non-identifier-key>",z)
this.dT(z,"<non-identifier-key>")
return z},
$isel:1},
ik:{"^":"b;a,b,0c,0d"},
il:{"^":"e4;a,$ti",
gk:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.im(z,z.r,this.$ti)
y.c=z.e
return y}},
im:{"^":"b;a,b,0c,0d,$ti",
gK:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aw(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mS:{"^":"l:16;a",
$1:function(a){return this.a(a)}},
mT:{"^":"l:37;a",
$2:function(a,b){return this.a(a,b)}},
mU:{"^":"l:32;a",
$1:function(a){return this.a(H.D(a))}},
ig:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isex:1,
$isj3:1,
p:{
ih:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mI:function(a){return J.ef(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cw:function(a){return a},
iD:function(a){return new Int8Array(a)},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aB(b,a))},
ml:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mG(a,b,c))
return b},
et:{"^":"n;",$iset:1,"%":"ArrayBuffer"},
d3:{"^":"n;",$isd3:1,$isjK:1,"%":"DataView;ArrayBufferView;d2|ft|fu|iE|fv|fw|aV"},
d2:{"^":"d3;",
gk:function(a){return a.length},
$isE:1,
$asE:I.du},
iE:{"^":"fu;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
n:function(a,b,c){H.B(b)
H.mH(c)
H.aA(b,a,a.length)
a[b]=c},
$asca:function(){return[P.y]},
$asq:function(){return[P.y]},
$isk:1,
$ask:function(){return[P.y]},
$isf:1,
$asf:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
aV:{"^":"fw;",
n:function(a,b,c){H.B(b)
H.B(c)
H.aA(b,a,a.length)
a[b]=c},
$asca:function(){return[P.m]},
$asq:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]}},
nW:{"^":"aV;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nX:{"^":"aV;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nY:{"^":"aV;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nZ:{"^":"aV;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
o_:{"^":"aV;",
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o0:{"^":"aV;",
gk:function(a){return a.length},
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d4:{"^":"aV;",
gk:function(a){return a.length},
m:function(a,b){H.aA(b,a,a.length)
return a[b]},
be:function(a,b,c){return new Uint8Array(a.subarray(b,H.ml(b,c,a.length)))},
$isd4:1,
$isK:1,
"%":";Uint8Array"},
ft:{"^":"d2+q;"},
fu:{"^":"ft+ca;"},
fv:{"^":"d2+q;"},
fw:{"^":"fv+ca;"}}],["","",,P,{"^":"",
kv:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.my()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bj(new P.kx(z),1)).observe(y,{childList:true})
return new P.kw(z,y,x)}else if(self.setImmediate!=null)return P.mz()
return P.mA()},
oC:[function(a){self.scheduleImmediate(H.bj(new P.ky(H.j(a,{func:1,ret:-1})),0))},"$1","my",4,0,11],
oD:[function(a){self.setImmediate(H.bj(new P.kz(H.j(a,{func:1,ret:-1})),0))},"$1","mz",4,0,11],
oE:[function(a){P.da(C.m,H.j(a,{func:1,ret:-1}))},"$1","mA",4,0,11],
da:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.c.aw(a.a,1000)
return P.lF(z<0?0:z,b)},
eT:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.bb]})
z=C.c.aw(a.a,1000)
return P.lG(z<0?0:z,b)},
mu:function(a,b){if(H.c1(a,{func:1,args:[P.b,P.ap]}))return b.fz(a,null,P.b,P.ap)
if(H.c1(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.c4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mt:function(){var z,y
for(;z=$.bh,z!=null;){$.bI=null
y=z.b
$.bh=y
if(y==null)$.bH=null
z.a.$0()}},
oO:[function(){$.dp=!0
try{P.mt()}finally{$.bI=null
$.dp=!1
if($.bh!=null)$.$get$di().$1(P.fY())}},"$0","fY",0,0,3],
fT:function(a){var z=new P.fk(H.j(a,{func:1,ret:-1}))
if($.bh==null){$.bH=z
$.bh=z
if(!$.dp)$.$get$di().$1(P.fY())}else{$.bH.b=z
$.bH=z}},
mx:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.bh
if(z==null){P.fT(a)
$.bI=$.bH
return}y=new P.fk(a)
x=$.bI
if(x==null){y.b=z
$.bI=y
$.bh=y}else{y.b=x.b
x.b=y
$.bI=y
if(y.b==null)$.bH=y}},
nf:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.O
if(C.e===y){P.cy(null,null,C.e,a)
return}y.toString
P.cy(null,null,y,H.j(y.bA(a),z))},
eS:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.O
if(y===C.e){y.toString
return P.da(a,b)}return P.da(a,H.j(y.bA(b),z))},
jF:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.j(b,z)
y=$.O
if(y===C.e){y.toString
return P.eT(a,b)}x=y.cF(b,P.bb)
$.O.toString
return P.eT(a,H.j(x,z))},
cx:function(a,b,c,d,e){var z={}
z.a=d
P.mx(new P.mv(z,e))},
fP:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
fQ:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
mw:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cy:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bA(d):c.eJ(d,-1)
P.fT(d)},
kx:{"^":"l:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kw:{"^":"l:47;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ky:{"^":"l:0;a",
$0:function(){this.a.$0()}},
kz:{"^":"l:0;a",
$0:function(){this.a.$0()}},
fE:{"^":"b;a,0b,c",
dF:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bj(new P.lI(this,b),0),a)
else throw H.a(P.z("`setTimeout()` not found."))},
dG:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bj(new P.lH(this,a,Date.now(),b),0),a)
else throw H.a(P.z("Periodic timer."))},
$isbb:1,
p:{
lF:function(a,b){var z=new P.fE(!0,0)
z.dF(a,b)
return z},
lG:function(a,b){var z=new P.fE(!1,0)
z.dG(a,b)
return z}}},
lI:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lH:{"^":"l:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.ds(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"b;0a,b,c,d,e,$ti",
fe:function(a){if(this.c!==6)return!0
return this.b.b.bY(H.j(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
f3:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.c1(z,{func:1,args:[P.b,P.ap]}))return H.dv(w.fH(z,a.a,a.b,null,y,P.ap),x)
else return H.dv(w.bY(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aN:{"^":"b;ct:a<,b,0er:c<,$ti",
d4:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mu(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aN(0,$.O,[c])
w=b==null?1:3
this.ca(new P.bg(x,w,a,b,[z,c]))
return x},
fN:function(a,b){return this.d4(a,null,b)},
ca:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaN")
z=y.a
if(z<4){y.ca(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cy(null,null,z,H.j(new P.kP(this,a),{func:1,ret:-1}))}},
cp:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaN")
y=u.a
if(y<4){u.cp(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.cy(null,null,y,H.j(new P.kU(z,this),{func:1,ret:-1}))}},
bv:function(){var z=H.e(this.c,"$isbg")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ce:function(a){var z,y,x,w
z=H.u(this,0)
H.dv(a,{futureOr:1,type:z})
y=this.$ti
x=H.bK(a,"$isbr",y,"$asbr")
if(x){z=H.bK(a,"$isaN",y,null)
if(z)P.fo(a,this)
else P.kQ(a,this)}else{w=this.bv()
H.v(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bi:[function(a,b){var z
H.e(b,"$isap")
z=this.bv()
this.a=8
this.c=new P.ai(a,b)
P.bE(this,z)},function(a){return this.bi(a,null)},"fW","$2","$1","gdO",4,2,33],
$isbr:1,
p:{
kQ:function(a,b){var z,y,x
b.a=1
try{a.d4(new P.kR(b),new P.kS(b),null)}catch(x){z=H.a3(x)
y=H.bk(x)
P.nf(new P.kT(b,z,y))}},
fo:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaN")
if(z>=4){y=b.bv()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.e(b.c,"$isbg")
b.a=2
b.c=a
a.cp(y)}},
bE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bE(z.a,b)}y=z.a
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cx(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.kX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kW(x,b,r).$0()}else if((y&2)!==0)new P.kV(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.G(y).$isbr){if(y.a>=4){n=H.e(t.c,"$isbg")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fo(y,t)
return}}m=b.b
n=H.e(m.c,"$isbg")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.v(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
kP:{"^":"l:0;a,b",
$0:function(){P.bE(this.a,this.b)}},
kU:{"^":"l:0;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
kR:{"^":"l:25;a",
$1:function(a){var z=this.a
z.a=0
z.ce(a)}},
kS:{"^":"l:53;a",
$2:function(a,b){this.a.bi(a,H.e(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
kT:{"^":"l:0;a,b,c",
$0:function(){this.a.bi(this.b,this.c)}},
kX:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.d2(H.j(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.bk(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.G(z).$isbr){if(z instanceof P.aN&&z.gct()>=4){if(z.gct()===8){w=this.b
w.b=H.e(z.ger(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fN(new P.kY(t),null)
w.a=!1}}},
kY:{"^":"l:54;a",
$1:function(a){return this.a}},
kW:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.v(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bY(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.bk(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kV:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.fe(z)&&w.e!=null){v=this.b
v.b=w.f3(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.bk(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
fk:{"^":"b;a,0b"},
d7:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aN(0,$.O,[P.m])
z.a=0
this.fb(new P.jr(z,this),!0,new P.js(z,y),y.gdO())
return y}},
jr:{"^":"l;a,b",
$1:function(a){H.v(a,H.af(this.b,"d7",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.af(this.b,"d7",0)]}}},
js:{"^":"l:0;a,b",
$0:function(){this.b.ce(this.a.a)}},
eL:{"^":"b;$ti"},
jq:{"^":"b;"},
bb:{"^":"b;"},
ai:{"^":"b;a,b",
i:function(a){return H.h(this.a)},
$isa1:1},
ma:{"^":"b;",$isoB:1},
mv:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ew()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lh:{"^":"ma;",
fI:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.O){a.$0()
return}P.fP(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.bk(x)
P.cx(null,null,this,z,H.e(y,"$isap"))}},
fJ:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.e===$.O){a.$1(b)
return}P.fQ(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.bk(x)
P.cx(null,null,this,z,H.e(y,"$isap"))}},
eJ:function(a,b){return new P.lj(this,H.j(a,{func:1,ret:b}),b)},
bA:function(a){return new P.li(this,H.j(a,{func:1,ret:-1}))},
cF:function(a,b){return new P.lk(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
d2:function(a,b){H.j(a,{func:1,ret:b})
if($.O===C.e)return a.$0()
return P.fP(null,null,this,a,b)},
bY:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.O===C.e)return a.$1(b)
return P.fQ(null,null,this,a,b,c,d)},
fH:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.O===C.e)return a.$2(b,c)
return P.mw(null,null,this,a,b,c,d,e,f)},
fz:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}},
lj:{"^":"l;a,b,c",
$0:function(){return this.a.d2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
li:{"^":"l:3;a,b",
$0:function(){return this.a.fI(this.b)}},
lk:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.fJ(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
io:function(a,b,c,d,e){return new H.aU(0,0,[d,e])},
ip:function(a,b,c){H.bO(a)
return H.w(H.mJ(a,new H.aU(0,0,[b,c])),"$isel",[b,c],"$asel")},
cY:function(a,b){return new H.aU(0,0,[a,b])},
bX:function(a,b,c,d){return new P.l4(0,0,[d])},
ib:function(a,b,c){var z,y
if(P.dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bJ()
C.a.h(y,a)
try{P.ms(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eM(b,H.h4(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dq(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$bJ()
C.a.h(y,a)
try{x=z
x.a=P.eM(x.gar(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
dq:function(a){var z,y
for(z=0;y=$.$get$bJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
ms:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.h(z.gK(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gK(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK(z);++x
for(;z.w();t=s,s=r){r=z.gK(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
em:function(a,b,c){var z=P.io(null,null,null,b,c)
a.D(0,new P.iq(z,b,c))
return z},
en:function(a,b){var z,y
z=P.bX(null,null,null,b)
for(y=J.aQ(a);y.w();)z.h(0,H.v(y.gK(y),b))
return z},
d_:function(a){var z,y,x
z={}
if(P.dq(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$bJ(),a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.dD(a,new P.iu(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$bJ()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
l4:{"^":"kZ;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fs(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscu")!=null}else{y=this.dP(b)
return y}},
dP:function(a){var z=this.d
if(z==null)return!1
return this.bl(this.cm(z,a),a)>=0},
h:function(a,b){var z,y
H.v(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cc(y,b)}else return this.dH(0,b)},
dH:function(a,b){var z,y,x
H.v(b,H.u(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cf(b)
x=z[y]
if(x==null)z[y]=[this.bh(b)]
else{if(this.bl(x,b)>=0)return!1
x.push(this.bh(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cq(this.c,b)
else return this.en(0,b)},
en:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cm(z,b)
x=this.bl(y,b)
if(x<0)return!1
this.cw(y.splice(x,1)[0])
return!0},
cc:function(a,b){H.v(b,H.u(this,0))
if(H.e(a[b],"$iscu")!=null)return!1
a[b]=this.bh(b)
return!0},
cq:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscu")
if(z==null)return!1
this.cw(z)
delete a[b]
return!0},
cd:function(){this.r=this.r+1&67108863},
bh:function(a){var z,y
z=new P.cu(H.v(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cd()
return z},
cw:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cd()},
cf:function(a){return J.bP(a)&0x3ffffff},
cm:function(a,b){return a[this.cf(b)]},
bl:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cu:{"^":"b;a,0b,0c"},
fs:{"^":"b;a,b,0c,0d,$ti",
gK:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aw(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.u(this,0))
this.c=z.b
return!0}}}},
kZ:{"^":"jd;"},
iq:{"^":"l:6;a,b,c",
$2:function(a,b){this.a.n(0,H.v(a,this.b),H.v(b,this.c))}},
cd:{"^":"l5;",$isk:1,$isf:1},
q:{"^":"b;$ti",
gV:function(a){return new H.cZ(a,this.gk(a),0,[H.aP(this,a,"q",0)])},
F:function(a,b){return this.m(a,b)},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.aP(this,a,"q",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.r(z)
y=0
for(;y<z;++y){b.$1(this.m(a,y))
if(z!==this.gk(a))throw H.a(P.aw(a))}},
fQ:function(a,b){var z,y,x
z=H.c([],[H.aP(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.n(z,y,this.m(a,y));++y}return z},
fP:function(a){return this.fQ(a,!0)},
am:function(a,b,c,d){var z
H.v(d,H.aP(this,a,"q",0))
P.aH(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
eq:{"^":"ab;"},
iu:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
ab:{"^":"b;$ti",
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.aP(this,a,"ab",0),H.aP(this,a,"ab",1)]})
for(z=J.aQ(this.ga_(a));z.w();){y=z.gK(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.ah(this.ga_(a))},
i:function(a){return P.d_(a)},
$isH:1},
lN:{"^":"b;$ti",
n:function(a,b,c){H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
throw H.a(P.z("Cannot modify unmodifiable map"))}},
iv:{"^":"b;$ti",
m:function(a,b){return J.dC(this.a,b)},
n:function(a,b,c){J.cF(this.a,H.v(b,H.u(this,0)),H.v(c,H.u(this,1)))},
D:function(a,b){J.dD(this.a,H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.ah(this.a)},
i:function(a){return J.a6(this.a)},
$isH:1},
fa:{"^":"lO;a,$ti"},
jf:{"^":"b;$ti",
ad:function(a,b){var z
for(z=J.aQ(H.w(b,"$isk",this.$ti,"$ask"));z.w();)this.h(0,z.gK(z))},
i:function(a){return P.cR(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dG("index"))
if(b<0)H.P(P.Z(b,0,null,"index",null))
for(z=new P.fs(this,this.r,this.$ti),z.c=this.e,y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.a(P.M(b,this,"index",null,y))},
$isk:1},
jd:{"^":"jf;"},
l5:{"^":"b+q;"},
lO:{"^":"iv+lN;$ti"}}],["","",,P,{"^":"",hr:{"^":"bR;a",
fg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aH(c,d,b.length,null,null,null)
z=$.$get$fm()
if(typeof d!=="number")return H.r(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.B(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cC(C.b.B(b,s))
o=H.cC(C.b.B(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.i(z,n)
m=z[n]
if(m>=0){n=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
l=w.a+=C.b.q(b,x,y)
w.a=l+H.by(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dJ(b,u,d,v,t,k)
else{j=C.c.aZ(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aD(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dJ(b,u,d,v,t,i)
else{j=C.c.aZ(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aD(b,d,d,j===2?"==":"=")}return b},
$asbR:function(){return[[P.f,P.m],P.d]},
p:{
dJ:function(a,b,c,d,e,f){if(C.c.aZ(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hs:{"^":"aS;a",
$asaS:function(){return[[P.f,P.m],P.d]}},bR:{"^":"b;$ti"},aS:{"^":"jq;$ti"},hW:{"^":"bR;",
$asbR:function(){return[P.d,[P.f,P.m]]}},i8:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},i7:{"^":"aS;a",
dQ:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.i(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.aq("")
if(w>b)v.a+=C.b.q(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hm(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaS:function(){return[P.d,P.d]}},kc:{"^":"hW;a",
geW:function(){return C.G}},kj:{"^":"aS;",
aO:function(a,b,c){var z,y,x,w
z=a.length
P.aH(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m8(0,0,x)
if(w.dV(a,b,z)!==z)w.cz(J.hf(a,z-1),0)
return C.Z.be(x,0,w.b)},
bH:function(a){return this.aO(a,0,null)},
$asaS:function(){return[P.d,[P.f,P.m]]}},m8:{"^":"b;a,b,c",
cz:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
dV:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.B(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cz(w,C.b.B(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}},kd:{"^":"aS;a",
aO:function(a,b,c){var z,y,x,w,v
H.w(a,"$isf",[P.m],"$asf")
z=P.ke(!1,a,b,c)
if(z!=null)return z
y=J.ah(a)
P.aH(b,c,y,null,null,null)
x=new P.aq("")
w=new P.m5(!1,x,!0,0,0,0)
w.aO(a,b,y)
w.f_(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bH:function(a){return this.aO(a,0,null)},
$asaS:function(){return[[P.f,P.m],P.d]},
p:{
ke:function(a,b,c,d){H.w(b,"$isf",[P.m],"$asf")
if(b instanceof Uint8Array)return P.kf(!1,b,c,d)
return},
kf:function(a,b,c,d){var z,y,x
z=$.$get$fe()
if(z==null)return
y=0===c
if(y&&!0)return P.de(z,b)
x=b.length
d=P.aH(c,d,x,null,null,null)
if(y&&d===x)return P.de(z,b)
return P.de(z,b.subarray(c,d))},
de:function(a,b){if(P.kh(b))return
return P.ki(a,b)},
ki:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a3(y)}return},
kh:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kg:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a3(y)}return}}},m5:{"^":"b;a,b,c,d,e,f",
f_:function(a,b,c){var z
H.w(b,"$isf",[P.m],"$asf")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isf",[P.m],"$asf")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m7(c)
v=new P.m6(this,b,c,a)
$label0$0:for(u=J.aC(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.m(a,s)
if(typeof r!=="number")return r.b9()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.c.aX(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.i(C.u,q)
if(z<=C.u[q]){q=P.V("Overlong encoding of 0x"+C.c.aX(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.c.aX(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.by(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.c1()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.m(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.c.aX(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.c.aX(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m7:{"^":"l:43;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isf",[P.m],"$asf")
z=this.a
for(y=J.aC(a),x=b;x<z;++x){w=y.m(a,x)
if(typeof w!=="number")return w.b9()
if((w&127)!==w)return x-b}return z-b}},m6:{"^":"l:46;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bY(this.d,a,b)}}}],["","",,P,{"^":"",
bN:function(a,b,c){var z
H.j(b,{func:1,ret:P.m,args:[P.d]})
z=H.iV(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hY:function(a){var z=J.G(a)
if(!!z.$isl)return z.i(a)
return"Instance of '"+H.b4(a)+"'"},
ir:function(a,b,c,d){var z,y
H.v(b,d)
z=J.id(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.w(z,"$isf",[d],"$asf")},
eo:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.w();)C.a.h(y,H.v(x.gK(x),c))
if(b)return y
return H.w(J.bs(y),"$isf",z,"$asf")},
bY:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb1",[z],"$asb1")
y=a.length
c=P.aH(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.eC(z?C.a.be(a,b,c):a)}if(!!J.G(a).$isd4)return H.iX(a,b,P.aH(b,c,a.length,null,null,null))
return P.jt(a,b,c)},
jt:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.Z(b,0,J.ah(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.ah(a),null,null))
y=J.aQ(a)
for(x=0;x<b;++x)if(!y.w())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.w();)w.push(y.gK(y))
else for(x=b;x<c;++x){if(!y.w())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gK(y))}return H.eC(w)},
j4:function(a,b,c){return new H.ig(a,H.ih(a,!1,!0,!1))},
cr:function(){var z=H.iN()
if(z!=null)return P.k4(z,0,null)
throw H.a(P.z("'Uri.base' is not supported"))},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hY(a)},
a4:function(a){return new P.fn(a)},
is:function(a,b,c,d){var z,y
H.j(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
dA:function(a){H.nd(a)},
k4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.B(a,b+4)^58)*3|C.b.B(a,b)^100|C.b.B(a,b+1)^97|C.b.B(a,b+2)^116|C.b.B(a,b+3)^97)>>>0
if(y===0)return P.fb(b>0||c<c?C.b.q(a,b,c):a,5,null).gd8()
else if(y===32)return P.fb(C.b.q(a,z,c),0,null).gd8()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.fR(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.fT()
if(v>=b)if(P.fR(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.r(r)
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
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aD(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aD(a,t,s,"")
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
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aD(a,t,s,"")
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
q-=b}return new P.lq(a,v,u,t,s,r,q,o)}return P.lP(a,b,c,v,u,t,s,r,q,o)},
fd:function(a,b){var z=P.d
return C.a.f0(H.c(a.split("&"),[z]),P.cY(z,z),new P.k7(b),[P.H,P.d,P.d])},
k2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.U(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bN(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.c1()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.i(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bN(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.c1()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.i(y,u)
y[u]=s
return y},
fc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k5(a)
y=new P.k6(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.U(a,w)
if(s===58){if(w===b){++w
if(C.b.U(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaf(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.i(o,l)
o[l]=0
i=l+1
if(i>=n)return H.i(o,i)
o[i]=0
l+=2}else{i=C.c.av(k,8)
if(l<0||l>=n)return H.i(o,l)
o[l]=i
i=l+1
if(i>=n)return H.i(o,i)
o[i]=k&255
l+=2}}return o},
mm:function(){var z,y,x,w,v
z=P.is(22,new P.mo(),!0,P.K)
y=new P.mn(z)
x=new P.mp()
w=new P.mq()
v=H.e(y.$2(0,225),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isK")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isK")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isK"),"]",5)
v=H.e(y.$2(9,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isK")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isK"),"az",21)
v=H.e(y.$2(21,245),"$isK")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fR:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isf",[P.m],"$asf")
z=$.$get$fS()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.i(z,d)
x=z[d]
w=C.b.B(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.i(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
R:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.c.av(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hN(H.iU(this))
y=P.bS(H.iS(this))
x=P.bS(H.iO(this))
w=P.bS(H.iP(this))
v=P.bS(H.iR(this))
u=P.bS(H.iT(this))
t=P.hO(H.iQ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hN:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bS:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"a_;"},
"+double":0,
bp:{"^":"b;a",
M:function(a,b){return C.c.M(this.a,H.e(b,"$isbp").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bp))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hS()
y=this.a
if(y<0)return"-"+new P.bp(0-y).i(0)
x=z.$1(C.c.aw(y,6e7)%60)
w=z.$1(C.c.aw(y,1e6)%60)
v=new P.hR().$1(y%1e6)
return""+C.c.aw(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
p:{
e3:function(a,b,c,d,e,f){return new P.bp(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hR:{"^":"l:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hS:{"^":"l:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a1:{"^":"b;"},
ew:{"^":"a1;",
i:function(a){return"Throw of null."}},
at:{"^":"a1;a,b,c,d",
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbk()+y+x
if(!this.a)return w
v=this.gbj()
u=P.c8(this.b)
return w+v+": "+H.h(u)},
p:{
bQ:function(a){return new P.at(!1,null,null,a)},
c4:function(a,b,c){return new P.at(!0,a,b,c)},
dG:function(a){return new P.at(!1,null,a,"Must not be null")}}},
cj:{"^":"at;e,f,a,b,c,d",
gbk:function(){return"RangeError"},
gbj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
p:{
ck:function(a,b,c){return new P.cj(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
aH:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
i9:{"^":"at;e,k:f>,a,b,c,d",
gbk:function(){return"RangeError"},
gbj:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
p:{
M:function(a,b,c,d,e){var z=H.B(e!=null?e:J.ah(b))
return new P.i9(b,z,!0,a,c,"Index out of range")}}},
k0:{"^":"a1;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.k0(a)}}},
jY:{"^":"a1;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
bZ:function(a){return new P.jY(a)}}},
d6:{"^":"a1;a",
i:function(a){return"Bad state: "+this.a},
p:{
eK:function(a){return new P.d6(a)}}},
hF:{"^":"a1;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.c8(z))+"."},
p:{
aw:function(a){return new P.hF(a)}}},
iJ:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa1:1},
eI:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa1:1},
hL:{"^":"a1;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fn:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
i3:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.h(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.B(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.t(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.i3(a,b,c)}}},
bU:{"^":"b;"},
m:{"^":"a_;"},
"+int":0,
k:{"^":"b;$ti",
c_:["dm",function(a,b){var z=H.af(this,"k",0)
return new H.dh(this,H.j(b,{func:1,ret:P.R,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gV(this)
for(y=0;z.w();)++y
return y},
gao:function(a){var z,y
z=this.gV(this)
if(!z.w())throw H.a(H.cS())
y=z.gK(z)
if(z.w())throw H.a(H.ic())
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dG("index"))
if(b<0)H.P(P.Z(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.w();){x=z.gK(z)
if(b===y)return x;++y}throw H.a(P.M(b,this,"index",null,y))},
i:function(a){return P.ib(this,"(",")")}},
cT:{"^":"b;$ti"},
f:{"^":"b;$ti",$isk:1},
"+List":0,
H:{"^":"b;$ti"},
F:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bx(this)},
i:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"b;"},
d:{"^":"b;",$isex:1},
"+String":0,
aq:{"^":"b;ar:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isol:1,
p:{
eM:function(a,b,c){var z=J.aQ(b)
if(!z.w())return a
if(c.length===0){do a+=H.h(z.gK(z))
while(z.w())}else{a+=H.h(z.gK(z))
for(;z.w();)a=a+c+H.h(z.gK(z))}return a}}},
k7:{"^":"l:52;a",
$2:function(a,b){var z,y,x,w
z=P.d
H.w(a,"$isH",[z,z],"$asH")
H.D(b)
y=J.aC(b).cQ(b,"=")
if(y===-1){if(b!=="")J.cF(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ah(b,y+1)
z=this.a
J.cF(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
k3:{"^":"l:29;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
k5:{"^":"l:42;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k6:{"^":"l:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bN(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cv:{"^":"b;bb:a<,b,c,d,cZ:e>,f,r,0x,0y,0z,0Q,0ch",
gd9:function(){return this.b},
gbL:function(a){var z=this.c
if(z==null)return""
if(C.b.Y(z,"["))return C.b.q(z,1,z.length-1)
return z},
gb6:function(a){var z=this.d
if(z==null)return P.fG(this.a)
return z},
gbU:function(a){var z=this.f
return z==null?"":z},
gcL:function(){var z=this.r
return z==null?"":z},
bW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.d,null],"$asH")
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
if(x&&!C.b.Y(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cv(i,j,c,f,d,g,this.r)},
bV:function(a,b){return this.bW(a,null,null,null,null,null,null,b,null,null)},
gaV:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.d
y=new P.fa(P.fd(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcM:function(){return this.c!=null},
gcP:function(){return this.f!=null},
gcN:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.h(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.h(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.h(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.G(b)
if(!!z.$isdd){y=this.a
x=b.gbb()
if(y==null?x==null:y===x)if(this.c!=null===b.gcM()){y=this.b
x=b.gd9()
if(y==null?x==null:y===x){y=this.gbL(this)
x=z.gbL(b)
if(y==null?x==null:y===x){y=this.gb6(this)
x=z.gb6(b)
if(y==null?x==null:y===x)if(this.e===z.gcZ(b)){y=this.f
x=y==null
if(!x===b.gcP()){if(x)y=""
if(y===z.gbU(b)){z=this.r
y=z==null
if(!y===b.gcN()){if(y)z=""
z=z===b.gcL()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.i(0))
this.z=z}return z},
$isdd:1,
p:{
c0:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isf",[P.m],"$asf")
if(c===C.f){z=$.$get$fL().b
if(typeof b!=="string")H.P(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.v(b,H.af(c,"bR",0))
y=c.geW().bH(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.by(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m_(a,b,d)
else{if(d===b)P.bF(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m0(a,z,e-1):""
x=P.lU(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.r(g)
v=w<g?P.lX(P.bN(C.b.q(a,w,g),new P.lQ(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lV(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cv(j,y,x,v,u,t,i<c?P.lT(a,i+1,c):null)},
fG:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bF:function(a,b,c){throw H.a(P.V(c,a,b))},
lX:function(a,b){if(a!=null&&a===P.fG(b))return
return a},
lU:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.H()
z=c-1
if(C.b.U(a,z)!==93)P.bF(a,b,"Missing end `]` to match `[` in host")
P.fc(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.r(c)
y=b
for(;y<c;++y)if(C.b.U(a,y)===58){P.fc(a,b,c)
return"["+a+"]"}return P.m2(a,b,c)},
m2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.r(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.U(a,z)
if(v===37){u=P.fN(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.i(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.i(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bF(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.U(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fH(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m_:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fJ(C.b.B(a,b)))P.bF(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.B(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.i(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bF(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lR(y?a.toLowerCase():a)},
lR:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m0:function(a,b,c){return P.bG(a,b,c,C.W)},
lV:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bG(a,b,c,C.y):C.M.hn(d,new P.lW(),P.d).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.Y(w,"/"))w="/"+w
return P.m1(w,e,f)},
m1:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.Y(a,"/"))return P.m3(a,!z||c)
return P.m4(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.d,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.bQ("Both query and queryParameters specified"))
return P.bG(a,b,c,C.j)}if(d==null)return
y=new P.aq("")
z.a=""
d.D(0,new P.lY(new P.lZ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lT:function(a,b,c){return P.bG(a,b,c,C.j)},
fN:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.U(a,b+1)
x=C.b.U(a,z)
w=H.cC(y)
v=H.cC(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.av(u,4)
if(z>=8)return H.i(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.by(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fH:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.n(y,0,37)
C.a.n(y,1,C.b.B("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.B("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.c.ey(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.B("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.B("0123456789ABCDEF",u&15))
v+=3}}return P.bY(y,0,null)},
bG:function(a,b,c,d){var z=P.fM(a,b,c,H.w(d,"$isf",[P.m],"$asf"),!1)
return z==null?C.b.q(a,b,c):z},
fM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isf",[P.m],"$asf")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.r(c)
if(!(y<c))break
c$0:{v=C.b.U(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.i(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fN(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.i(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bF(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.U(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fH(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.q(a,x,y)
w.a+=H.h(t)
if(typeof s!=="number")return H.r(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fK:function(a){if(C.b.Y(a,"."))return!0
return C.b.cQ(a,"/.")!==-1},
m4:function(a){var z,y,x,w,v,u,t
if(!P.fK(a))return a
z=H.c([],[P.d])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.W(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.i(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
m3:function(a,b){var z,y,x,w,v,u
if(!P.fK(a))return!b?P.fI(a):a
z=H.c([],[P.d])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaf(z)!==".."){if(0>=z.length)return H.i(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.i(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaf(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.i(z,0)
C.a.n(z,0,P.fI(z[0]))}return C.a.l(z,"/")},
fI:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fJ(J.hc(a,0)))for(y=1;y<z;++y){x=C.b.B(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ah(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.i(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lS:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.B(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bQ("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.bM(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.B(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.o(y.q(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.B(a,x)
if(w>127)throw H.a(P.bQ("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bQ("Truncated URI"))
C.a.h(u,P.lS(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isf",[P.m],"$asf")
return new P.kd(!1).bH(u)},
fJ:function(a){var z=a|32
return 97<=z&&z<=122}}},
lQ:{"^":"l:14;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lW:{"^":"l:17;",
$1:function(a){return P.c0(C.X,a,C.f,!1)}},
lZ:{"^":"l:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.h(P.c0(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.h(P.c0(C.l,b,C.f,!0))}}},
lY:{"^":"l:34;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.aQ(H.h4(b,"$isk")),y=this.a;z.w();)y.$2(a,H.D(z.gK(z)))}},
k1:{"^":"b;a,b,c",
gd8:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
z=z[0]+1
x=C.b.cR(y,"?",z)
w=y.length
if(x>=0){v=P.bG(y,x+1,w,C.j)
w=x}else v=null
z=new P.kE(this,"data",null,null,null,P.bG(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.B(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.B(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaf(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.a(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.fg(0,a,s,y)
else{r=P.fM(a,s,y,C.j,!0)
if(r!=null)a=C.b.aD(a,s,y,r)}return new P.k1(a,z,c)}}},
mo:{"^":"l:40;",
$1:function(a){return new Uint8Array(96)}},
mn:{"^":"l:38;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.i(z,a)
z=z[a]
J.hg(z,0,96,b)
return z}},
mp:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.B(b,y)^96
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
mq:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=C.b.B(b,0),y=C.b.B(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
lq:{"^":"b;a,b,c,d,e,f,r,x,0y",
gcM:function(){return this.c>0},
gcO:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.r(y)
y=z+1<y
z=y}else z=!1
return z},
gcP:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gcN:function(){return this.r<this.a.length},
gcn:function(){return this.b===4&&C.b.Y(this.a,"http")},
gco:function(){return this.b===5&&C.b.Y(this.a,"https")},
gbb:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcn()){this.x="http"
z="http"}else if(this.gco()){this.x="https"
z="https"}else if(z===4&&C.b.Y(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.Y(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
gd9:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gbL:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gb6:function(a){var z
if(this.gcO()){z=this.d
if(typeof z!=="number")return z.G()
return P.bN(C.b.q(this.a,z+1,this.e),null,null)}if(this.gcn())return 80
if(this.gco())return 443
return 0},
gcZ:function(a){return C.b.q(this.a,this.e,this.f)},
gbU:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.q(this.a,z+1,y):""},
gcL:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ah(y,z+1):""},
gaV:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.Y
z=P.d
return new P.fa(P.fd(this.gbU(this),C.f),[z,z])},
bW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.d,null],"$asH")
i=this.gbb()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gcO()?this.gb6(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.Y(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ah(y,x+1)
return new P.cv(i,j,c,f,d,g,b)},
bV:function(a,b){return this.bW(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.G(b)
if(!!z.$isdd)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdd:1},
kE:{"^":"cv;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dF:function(a){var z=document.createElement("a")
return z},
cM:function(a,b){var z=document.createElement("canvas")
return z},
hT:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a9(z,a,b,c)
y.toString
z=W.C
z=new H.dh(new W.al(y),H.j(new W.hU(),{func:1,ret:P.R,args:[z]}),[z])
return H.e(z.gao(z),"$isJ")},
hV:function(a){H.e(a,"$isa8")
return"wheel"},
bq:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hj(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
eb:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
ia:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isec")
try{J.hl(z,a)}catch(x){H.a3(x)}return z},
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fr:function(a,b,c,d){var z,y
z=W.cs(W.cs(W.cs(W.cs(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fV:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.e)return a
return z.cF(a,b)},
T:{"^":"J;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nm:{"^":"n;0k:length=","%":"AccessibleNodeList"},
nn:{"^":"T;0X:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
no:{"^":"T;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dK:{"^":"T;",$isdK:1,"%":"HTMLBaseElement"},
cI:{"^":"n;",$iscI:1,"%":";Blob"},
c5:{"^":"T;",$isc5:1,"%":"HTMLBodyElement"},
nu:{"^":"T;0X:type}","%":"HTMLButtonElement"},
cL:{"^":"T;",
ba:function(a,b,c){if(c!=null)return a.getContext(b,P.mC(c,null))
return a.getContext(b)},
dd:function(a,b){return this.ba(a,b,null)},
$iscL:1,
"%":"HTMLCanvasElement"},
dR:{"^":"n;",$isdR:1,"%":"CanvasRenderingContext2D"},
nw:{"^":"C;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ny:{"^":"hK;0k:length=","%":"CSSPerspective"},
aZ:{"^":"n;",$isaZ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nz:{"^":"kD;0k:length=",
de:function(a,b){var z=a.getPropertyValue(this.dL(a,b))
return z==null?"":z},
dL:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.ez(a,b)
z[b]=y
return y},
ez:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hP()+b
if(z in a)return z
return b},
gbB:function(a){return a.bottom},
gae:function(a){return a.height},
gaA:function(a){return a.left},
gbX:function(a){return a.right},
gaY:function(a){return a.top},
gag:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hJ:{"^":"b;",
gaA:function(a){return this.de(a,"left")}},
dX:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hK:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nA:{"^":"dX;0k:length=","%":"CSSTransformValue"},
nB:{"^":"dX;0k:length=","%":"CSSUnparsedValue"},
nC:{"^":"n;0k:length=","%":"DataTransferItemList"},
b_:{"^":"T;",$isb_:1,"%":"HTMLDivElement"},
nD:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
nE:{"^":"kG;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.w(c,"$isa5",[P.a_],"$asa5")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a5,P.a_]]},
$asq:function(){return[[P.a5,P.a_]]},
$isk:1,
$ask:function(){return[[P.a5,P.a_]]},
$isf:1,
$asf:function(){return[[P.a5,P.a_]]},
$asA:function(){return[[P.a5,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hQ:{"^":"n;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gag(a))+" x "+H.h(this.gae(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bK(b,"$isa5",[P.a_],"$asa5")
if(!z)return!1
z=J.as(b)
return a.left===z.gaA(b)&&a.top===z.gaY(b)&&this.gag(a)===z.gag(b)&&this.gae(a)===z.gae(b)},
gS:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbB:function(a){return a.bottom},
gae:function(a){return a.height},
gaA:function(a){return a.left},
gbX:function(a){return a.right},
gaY:function(a){return a.top},
gag:function(a){return a.width},
$isa5:1,
$asa5:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
nF:{"^":"kI;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.D(c)
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.d]},
$asq:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isf:1,
$asf:function(){return[P.d]},
$asA:function(){return[P.d]},
"%":"DOMStringList"},
nG:{"^":"n;0k:length=","%":"DOMTokenList"},
kC:{"^":"cd;ck:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.e(z[b],"$isJ")},
n:function(a,b,c){var z
H.B(b)
H.e(c,"$isJ")
z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.fP(this)
return new J.au(z,z.length,0,[H.u(z,0)])},
am:function(a,b,c,d){throw H.a(P.bZ(null))},
$asq:function(){return[W.J]},
$ask:function(){return[W.J]},
$asf:function(){return[W.J]}},
J:{"^":"C;0fK:tagName=",
geI:function(a){return new W.kJ(a)},
gbG:function(a){return new W.kC(a,a.children)},
gcG:function(a){return P.j0(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
a9:["bf",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e6
if(z==null){z=H.c([],[W.ay])
y=new W.eu(z)
C.a.h(z,W.fp(null))
C.a.h(z,W.fB())
$.e6=y
d=y}else d=z
z=$.e5
if(z==null){z=new W.fO(d)
$.e5=z
c=z}else{z.a=d
c=z}}if($.aD==null){z=document
y=z.implementation.createHTMLDocument("")
$.aD=y
$.cO=y.createRange()
y=$.aD
y.toString
y=y.createElement("base")
H.e(y,"$isdK")
y.href=z.baseURI
$.aD.head.appendChild(y)}z=$.aD
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isc5")}z=$.aD
if(!!this.$isc5)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aD.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.V,a.tagName)){$.cO.selectNodeContents(x)
w=$.cO.createContextualFragment(b)}else{x.innerHTML=b
w=$.aD.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aD.body
if(x==null?z!=null:x!==z)J.dE(x)
c.c2(w)
document.adoptNode(w)
return w},function(a,b,c){return this.a9(a,b,c,null)},"eO",null,null,"ghm",5,5,null],
dj:function(a,b,c,d){a.textContent=null
a.appendChild(this.a9(a,b,c,d))},
di:function(a,b){return this.dj(a,b,null,null)},
$isJ:1,
"%":";Element"},
hU:{"^":"l:20;",
$1:function(a){return!!J.G(H.e(a,"$isC")).$isJ}},
nH:{"^":"T;0X:type}","%":"HTMLEmbedElement"},
a7:{"^":"n;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a8:{"^":"n;",
cC:["dk",function(a,b,c,d){H.j(c,{func:1,args:[W.a7]})
if(c!=null)this.dI(a,b,c,!1)}],
dI:function(a,b,c,d){return a.addEventListener(b,H.bj(H.j(c,{func:1,args:[W.a7]}),1),!1)},
$isa8:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fx|fy|fC|fD"},
aT:{"^":"cI;",$isaT:1,"%":"File"},
e8:{"^":"kO;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isaT")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aT]},
$asq:function(){return[W.aT]},
$isk:1,
$ask:function(){return[W.aT]},
$isf:1,
$asf:function(){return[W.aT]},
$ise8:1,
$asA:function(){return[W.aT]},
"%":"FileList"},
nI:{"^":"a8;0k:length=","%":"FileWriter"},
nJ:{"^":"T;0k:length=","%":"HTMLFormElement"},
b0:{"^":"n;",$isb0:1,"%":"Gamepad"},
nK:{"^":"n;0k:length=","%":"History"},
nL:{"^":"l0;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isC")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asq:function(){return[W.C]},
$isk:1,
$ask:function(){return[W.C]},
$isf:1,
$asf:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bV:{"^":"n;0cH:data=",$isbV:1,"%":"ImageData"},
cP:{"^":"T;",$iscP:1,"%":"HTMLImageElement"},
ec:{"^":"T;0X:type}",$isec:1,"%":"HTMLInputElement"},
bt:{"^":"db;",$isbt:1,"%":"KeyboardEvent"},
nP:{"^":"T;0X:type}","%":"HTMLLinkElement"},
nQ:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
nR:{"^":"n;0k:length=","%":"MediaList"},
nS:{"^":"a8;",
cC:function(a,b,c,d){H.j(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.dk(a,b,c,!1)},
"%":"MessagePort"},
nT:{"^":"l6;",
m:function(a,b){return P.aO(a.get(H.D(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.c([],[P.d])
this.D(a,new W.iA(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asab:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIInputMap"},
iA:{"^":"l:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nU:{"^":"l7;",
m:function(a,b){return P.aO(a.get(H.D(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.c([],[P.d])
this.D(a,new W.iB(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asab:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
iB:{"^":"l:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b2:{"^":"n;",$isb2:1,"%":"MimeType"},
nV:{"^":"l9;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb2")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b2]},
$asq:function(){return[W.b2]},
$isk:1,
$ask:function(){return[W.b2]},
$isf:1,
$asf:function(){return[W.b2]},
$asA:function(){return[W.b2]},
"%":"MimeTypeArray"},
a9:{"^":"db;",$isa9:1,"%":"PointerEvent;DragEvent|MouseEvent"},
al:{"^":"cd;a",
gao:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.eK("No elements"))
if(y>1)throw H.a(P.eK("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w
H.w(b,"$isk",[W.C],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
n:function(a,b,c){var z,y
H.B(b)
H.e(c,"$isC")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.i(y,b)
z.replaceChild(c,y[b])},
gV:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.aP(C.a_,z,"A",0)])},
am:function(a,b,c,d){throw H.a(P.z("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asq:function(){return[W.C]},
$ask:function(){return[W.C]},
$asf:function(){return[W.C]}},
C:{"^":"a8;0bT:previousSibling=",
fA:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
fD:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.a3(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dl(a):z},
eo:function(a,b,c){return a.replaceChild(b,c)},
$isC:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
o1:{"^":"n;",
fw:[function(a){return a.previousNode()},"$0","gbT",1,0,21],
"%":"NodeIterator"},
iF:{"^":"lb;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isC")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asq:function(){return[W.C]},
$isk:1,
$ask:function(){return[W.C]},
$isf:1,
$asf:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
o4:{"^":"T;0X:type}","%":"HTMLOListElement"},
o5:{"^":"T;0X:type}","%":"HTMLObjectElement"},
b3:{"^":"n;0k:length=",$isb3:1,"%":"Plugin"},
o8:{"^":"lf;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb3")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b3]},
$asq:function(){return[W.b3]},
$isk:1,
$ask:function(){return[W.b3]},
$isf:1,
$asf:function(){return[W.b3]},
$asA:function(){return[W.b3]},
"%":"PluginArray"},
oa:{"^":"n;0X:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
ob:{"^":"ll;",
m:function(a,b){return P.aO(a.get(H.D(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.c([],[P.d])
this.D(a,new W.ja(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asab:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"RTCStatsReport"},
ja:{"^":"l:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
od:{"^":"T;0X:type}","%":"HTMLScriptElement"},
oe:{"^":"T;0k:length=","%":"HTMLSelectElement"},
b5:{"^":"a8;",$isb5:1,"%":"SourceBuffer"},
of:{"^":"fy;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb5")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b5]},
$asq:function(){return[W.b5]},
$isk:1,
$ask:function(){return[W.b5]},
$isf:1,
$asf:function(){return[W.b5]},
$asA:function(){return[W.b5]},
"%":"SourceBufferList"},
og:{"^":"T;0X:type}","%":"HTMLSourceElement"},
b6:{"^":"n;",$isb6:1,"%":"SpeechGrammar"},
oh:{"^":"ls;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb6")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b6]},
$asq:function(){return[W.b6]},
$isk:1,
$ask:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$asA:function(){return[W.b6]},
"%":"SpeechGrammarList"},
b7:{"^":"n;0k:length=",$isb7:1,"%":"SpeechRecognitionResult"},
oj:{"^":"lv;",
m:function(a,b){return a.getItem(H.D(b))},
n:function(a,b,c){a.setItem(b,H.D(c))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga_:function(a){var z=H.c([],[P.d])
this.D(a,new W.jp(z))
return z},
gk:function(a){return a.length},
$asab:function(){return[P.d,P.d]},
$isH:1,
$asH:function(){return[P.d,P.d]},
"%":"Storage"},
jp:{"^":"l:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
om:{"^":"T;0X:type}","%":"HTMLStyleElement"},
b8:{"^":"n;",$isb8:1,"%":"CSSStyleSheet|StyleSheet"},
d8:{"^":"T;",$isd8:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ju:{"^":"T;",
a9:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
z=W.hT("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.al(y).ad(0,new W.al(z))
return y},
"%":"HTMLTableElement"},
oo:{"^":"T;",
a9:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.A.a9(z.createElement("table"),b,c,d)
z.toString
z=new W.al(z)
x=z.gao(z)
x.toString
z=new W.al(x)
w=z.gao(z)
y.toString
w.toString
new W.al(y).ad(0,new W.al(w))
return y},
"%":"HTMLTableRowElement"},
op:{"^":"T;",
a9:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.A.a9(z.createElement("table"),b,c,d)
z.toString
z=new W.al(z)
x=z.gao(z)
y.toString
x.toString
new W.al(y).ad(0,new W.al(x))
return y},
"%":"HTMLTableSectionElement"},
eP:{"^":"T;",$iseP:1,"%":"HTMLTemplateElement"},
b9:{"^":"a8;",$isb9:1,"%":"TextTrack"},
ba:{"^":"a8;",$isba:1,"%":"TextTrackCue|VTTCue"},
or:{"^":"lE;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isba")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$asA:function(){return[W.ba]},
"%":"TextTrackCueList"},
os:{"^":"fD;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb9")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$asA:function(){return[W.b9]},
"%":"TextTrackList"},
ot:{"^":"n;0k:length=","%":"TimeRanges"},
bc:{"^":"n;",$isbc:1,"%":"Touch"},
bd:{"^":"db;",$isbd:1,"%":"TouchEvent"},
ou:{"^":"lK;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isbc")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asA:function(){return[W.bc]},
"%":"TouchList"},
ov:{"^":"n;0k:length=","%":"TrackDefaultList"},
ox:{"^":"n;",
fw:[function(a){return a.previousNode()},"$0","gbT",1,0,21],
"%":"TreeWalker"},
db:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oz:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
oA:{"^":"a8;0k:length=","%":"VideoTrackList"},
bD:{"^":"a9;",
geR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.z("deltaY is not supported"))},
geQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.z("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
ku:{"^":"a8;",
ep:function(a,b){return a.requestAnimationFrame(H.bj(H.j(b,{func:1,ret:-1,args:[P.a_]}),1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fl:{"^":"C;",$isfl:1,"%":"Attr"},
oF:{"^":"mc;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isaZ")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aZ]},
$asq:function(){return[W.aZ]},
$isk:1,
$ask:function(){return[W.aZ]},
$isf:1,
$asf:function(){return[W.aZ]},
$asA:function(){return[W.aZ]},
"%":"CSSRuleList"},
oG:{"^":"hQ;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bK(b,"$isa5",[P.a_],"$asa5")
if(!z)return!1
z=J.as(b)
return a.left===z.gaA(b)&&a.top===z.gaY(b)&&a.width===z.gag(b)&&a.height===z.gae(b)},
gS:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gag:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oI:{"^":"me;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb0")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b0]},
$asq:function(){return[W.b0]},
$isk:1,
$ask:function(){return[W.b0]},
$isf:1,
$asf:function(){return[W.b0]},
$asA:function(){return[W.b0]},
"%":"GamepadList"},
oL:{"^":"mg;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isC")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asq:function(){return[W.C]},
$isk:1,
$ask:function(){return[W.C]},
$isf:1,
$asf:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oM:{"^":"mi;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb7")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$isf:1,
$asf:function(){return[W.b7]},
$asA:function(){return[W.b7]},
"%":"SpeechRecognitionResultList"},
oN:{"^":"mk;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.B(b)
H.e(c,"$isb8")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b8]},
$asq:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isf:1,
$asf:function(){return[W.b8]},
$asA:function(){return[W.b8]},
"%":"StyleSheetList"},
kA:{"^":"eq;ck:a<",
D:function(a,b){var z,y,x,w,v
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.ga_(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.I)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga_:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.e(z[w],"$isfl")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asab:function(){return[P.d,P.d]},
$asH:function(){return[P.d,P.d]}},
kJ:{"^":"kA;a",
m:function(a,b){return this.a.getAttribute(H.D(b))},
n:function(a,b,c){this.a.setAttribute(b,H.D(c))},
gk:function(a){return this.ga_(this).length}},
kK:{"^":"d7;a,b,c,$ti",
fb:function(a,b,c,d){var z=H.u(this,0)
H.j(a,{func:1,ret:-1,args:[z]})
H.j(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
oH:{"^":"kK;a,b,c,$ti"},
kL:{"^":"eL;a,b,c,d,e,$ti",
eD:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
p:{
Y:function(a,b,c,d,e){var z=c==null?null:W.fV(new W.kM(c),W.a7)
z=new W.kL(0,a,b,z,!1,[e])
z.eD()
return z}}},
kM:{"^":"l:5;a",
$1:function(a){return this.a.$1(H.e(a,"$isa7"))}},
c_:{"^":"b;a",
dD:function(a){var z,y
z=$.$get$dj()
if(z.gf7(z)){for(y=0;y<262;++y)z.n(0,C.U[y],W.mP())
for(y=0;y<12;++y)z.n(0,C.o[y],W.mQ())}},
ay:function(a){return $.$get$fq().W(0,W.bq(a))},
al:function(a,b,c){var z,y,x
z=W.bq(a)
y=$.$get$dj()
x=y.m(0,H.h(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.dr(x.$4(a,b,c,this))},
$isay:1,
p:{
fp:function(a){var z,y
z=W.dF(null)
y=window.location
z=new W.c_(new W.lm(z,y))
z.dD(a)
return z},
oJ:[function(a,b,c,d){H.e(a,"$isJ")
H.D(b)
H.D(c)
H.e(d,"$isc_")
return!0},"$4","mP",16,0,27],
oK:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isJ")
H.D(b)
H.D(c)
z=H.e(d,"$isc_").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mQ",16,0,27]}},
A:{"^":"b;$ti",
gV:function(a){return new W.e9(a,this.gk(a),-1,[H.aP(this,a,"A",0)])},
am:function(a,b,c,d){H.v(d,H.aP(this,a,"A",0))
throw H.a(P.z("Cannot modify an immutable List."))}},
eu:{"^":"b;a",
ay:function(a){return C.a.cE(this.a,new W.iH(a))},
al:function(a,b,c){return C.a.cE(this.a,new W.iG(a,b,c))},
$isay:1},
iH:{"^":"l:19;a",
$1:function(a){return H.e(a,"$isay").ay(this.a)}},
iG:{"^":"l:19;a,b,c",
$1:function(a){return H.e(a,"$isay").al(this.a,this.b,this.c)}},
ln:{"^":"b;",
dE:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.c_(0,new W.lo())
y=b.c_(0,new W.lp())
this.b.ad(0,z)
x=this.c
x.ad(0,C.v)
x.ad(0,y)},
ay:function(a){return this.a.W(0,W.bq(a))},
al:["dr",function(a,b,c){var z,y
z=W.bq(a)
y=this.c
if(y.W(0,H.h(z)+"::"+b))return this.d.eG(c)
else if(y.W(0,"*::"+b))return this.d.eG(c)
else{y=this.b
if(y.W(0,H.h(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.h(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isay:1},
lo:{"^":"l:28;",
$1:function(a){return!C.a.W(C.o,H.D(a))}},
lp:{"^":"l:28;",
$1:function(a){return C.a.W(C.o,H.D(a))}},
lB:{"^":"ln;e,a,b,c,d",
al:function(a,b,c){if(this.dr(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
p:{
fB:function(){var z,y,x,w,v
z=P.d
y=P.en(C.n,z)
x=H.u(C.n,0)
w=H.j(new W.lC(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lB(y,P.bX(null,null,null,z),P.bX(null,null,null,z),P.bX(null,null,null,z),null)
y.dE(null,new H.iy(C.n,w,[x,z]),v,null)
return y}}},
lC:{"^":"l:17;",
$1:function(a){return"TEMPLATE::"+H.h(H.D(a))}},
lA:{"^":"b;",
ay:function(a){var z=J.G(a)
if(!!z.$iseF)return!1
z=!!z.$iscl
if(z&&W.bq(a)==="foreignObject")return!1
if(z)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.b.Y(b,"on"))return!1
return this.ay(a)},
$isay:1},
e9:{"^":"b;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dC(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gK:function(a){return this.d}},
ay:{"^":"b;"},
lm:{"^":"b;a,b",$isoy:1},
fO:{"^":"b;a",
c2:function(a){new W.m9(this).$2(a,null)},
aL:function(a,b){if(b==null)J.dE(a)
else b.removeChild(a)},
eu:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hh(a)
x=y.gck().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.a6(a)}catch(t){H.a3(t)}try{u=W.bq(a)
this.es(H.e(a,"$isJ"),b,z,v,u,H.e(y,"$isH"),H.D(x))}catch(t){if(H.a3(t) instanceof P.at)throw t
else{this.aL(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
es:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aL(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ay(a)){this.aL(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aL(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga_(f)
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.ga_(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.i(y,x)
w=y[x]
if(!this.a.al(a,J.hn(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.h(e)+" "+w+'="'+H.h(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.G(a).$iseP)this.c2(a.content)},
$iso2:1},
m9:{"^":"l:30;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.eu(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aL(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hi(z)}catch(w){H.a3(w)
v=H.e(z,"$isC")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isC")}}},
kD:{"^":"n+hJ;"},
kF:{"^":"n+q;"},
kG:{"^":"kF+A;"},
kH:{"^":"n+q;"},
kI:{"^":"kH+A;"},
kN:{"^":"n+q;"},
kO:{"^":"kN+A;"},
l_:{"^":"n+q;"},
l0:{"^":"l_+A;"},
l6:{"^":"n+ab;"},
l7:{"^":"n+ab;"},
l8:{"^":"n+q;"},
l9:{"^":"l8+A;"},
la:{"^":"n+q;"},
lb:{"^":"la+A;"},
le:{"^":"n+q;"},
lf:{"^":"le+A;"},
ll:{"^":"n+ab;"},
fx:{"^":"a8+q;"},
fy:{"^":"fx+A;"},
lr:{"^":"n+q;"},
ls:{"^":"lr+A;"},
lv:{"^":"n+ab;"},
lD:{"^":"n+q;"},
lE:{"^":"lD+A;"},
fC:{"^":"a8+q;"},
fD:{"^":"fC+A;"},
lJ:{"^":"n+q;"},
lK:{"^":"lJ+A;"},
mb:{"^":"n+q;"},
mc:{"^":"mb+A;"},
md:{"^":"n+q;"},
me:{"^":"md+A;"},
mf:{"^":"n+q;"},
mg:{"^":"mf+A;"},
mh:{"^":"n+q;"},
mi:{"^":"mh+A;"},
mj:{"^":"n+q;"},
mk:{"^":"mj+A;"}}],["","",,P,{"^":"",
mF:function(a){var z,y
z=J.G(a)
if(!!z.$isbV){y=z.gcH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fF(a.data,a.height,a.width)},
mE:function(a){if(a instanceof P.fF)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var z,y,x,w,v
if(a==null)return
z=P.cY(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=H.D(y[w])
z.n(0,v,a[v])}return z},
mC:function(a,b){var z={}
a.D(0,new P.mD(z))
return z},
e2:function(){var z=$.e1
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.e1=z}return z},
hP:function(){var z,y
z=$.dZ
if(z!=null)return z
y=$.e_
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.e_=y}if(y)z="-moz-"
else{y=$.e0
if(y==null){y=!P.e2()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.e0=y}if(y)z="-ms-"
else z=P.e2()?"-o-":"-webkit-"}$.dZ=z
return z},
ly:{"^":"b;",
cJ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
b8:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.G(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isj3)throw H.a(P.bZ("structured clone of RegExp"))
if(!!y.$isaT)return a
if(!!y.$iscI)return a
if(!!y.$ise8)return a
if(!!y.$isbV)return a
if(!!y.$iset||!!y.$isd3)return a
if(!!y.$isH){x=this.cJ(a)
w=this.b
if(x>=w.length)return H.i(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.D(a,new P.lz(z,this))
return z.a}if(!!y.$isf){x=this.cJ(a)
z=this.b
if(x>=z.length)return H.i(z,x)
v=z[x]
if(v!=null)return v
return this.eN(a,x)}throw H.a(P.bZ("structured clone of other type"))},
eN:function(a,b){var z,y,x,w
z=J.aC(a)
y=z.gk(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.r(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.b8(z.m(a,w)))
return x}},
lz:{"^":"l:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.b8(b)}},
fF:{"^":"b;cH:a>,b,c",$isbV:1},
mD:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
fA:{"^":"ly;a,b"},
i0:{"^":"cd;a,b",
gaJ:function(){var z,y,x
z=this.b
y=H.af(z,"q",0)
x=W.J
return new H.iw(new H.dh(z,H.j(new P.i1(),{func:1,ret:P.R,args:[y]}),[y]),H.j(new P.i2(),{func:1,ret:x,args:[y]}),[y,x])},
D:function(a,b){H.j(b,{func:1,ret:-1,args:[W.J]})
C.a.D(P.eo(this.gaJ(),!1,W.J),b)},
n:function(a,b,c){var z
H.B(b)
H.e(c,"$isJ")
z=this.gaJ()
J.hk(z.b.$1(J.c3(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
am:function(a,b,c,d){throw H.a(P.z("Cannot fillRange on filtered list"))},
gk:function(a){return J.ah(this.gaJ().a)},
m:function(a,b){var z=this.gaJ()
return z.b.$1(J.c3(z.a,b))},
gV:function(a){var z=P.eo(this.gaJ(),!1,W.J)
return new J.au(z,z.length,0,[H.u(z,0)])},
$asq:function(){return[W.J]},
$ask:function(){return[W.J]},
$asf:function(){return[W.J]}},
i1:{"^":"l:20;",
$1:function(a){return!!J.G(H.e(a,"$isC")).$isJ}},
i2:{"^":"l:31;",
$1:function(a){return H.ag(H.e(a,"$isC"),"$isJ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lg:{"^":"b;$ti",
gbX:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.v(z+this.c,H.u(this,0))},
gbB:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.v(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bK(b,"$isa5",[P.a_],"$asa5")
if(!z)return!1
z=this.a
y=J.as(b)
x=y.gaA(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaY(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.u(this,0)
if(H.v(z+this.c,w)===y.gbX(b)){if(typeof x!=="number")return x.G()
z=H.v(x+this.d,w)===y.gbB(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.bP(z)
x=this.b
w=J.bP(x)
if(typeof z!=="number")return z.G()
v=H.u(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.v(x+this.d,v)
return P.l1(P.ct(P.ct(P.ct(P.ct(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a5:{"^":"lg;aA:a>,aY:b>,ag:c>,ae:d>,$ti",p:{
j0:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.v(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a5(a,b,z,H.v(y,e),[e])}}}}],["","",,P,{"^":"",bu:{"^":"n;",$isbu:1,"%":"SVGLength"},nO:{"^":"l3;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.B(b)
H.e(c,"$isbu")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bu]},
$isk:1,
$ask:function(){return[P.bu]},
$isf:1,
$asf:function(){return[P.bu]},
$asA:function(){return[P.bu]},
"%":"SVGLengthList"},bw:{"^":"n;",$isbw:1,"%":"SVGNumber"},o3:{"^":"ld;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.B(b)
H.e(c,"$isbw")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bw]},
$isk:1,
$ask:function(){return[P.bw]},
$isf:1,
$asf:function(){return[P.bw]},
$asA:function(){return[P.bw]},
"%":"SVGNumberList"},o9:{"^":"n;0k:length=","%":"SVGPointList"},eF:{"^":"cl;0X:type}",$iseF:1,"%":"SVGScriptElement"},ok:{"^":"lx;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.B(b)
H.D(c)
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.m(a,b)},
$asq:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isf:1,
$asf:function(){return[P.d]},
$asA:function(){return[P.d]},
"%":"SVGStringList"},on:{"^":"cl;0X:type}","%":"SVGStyleElement"},cl:{"^":"J;",
gbG:function(a){return new P.i0(a,new W.al(a))},
a9:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.ay])
C.a.h(z,W.fp(null))
C.a.h(z,W.fB())
C.a.h(z,new W.lA())
c=new W.fO(new W.eu(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).eO(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.al(w)
u=z.gao(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscl:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bz:{"^":"n;",$isbz:1,"%":"SVGTransform"},ow:{"^":"lM;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.B(b)
H.e(c,"$isbz")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bz]},
$isk:1,
$ask:function(){return[P.bz]},
$isf:1,
$asf:function(){return[P.bz]},
$asA:function(){return[P.bz]},
"%":"SVGTransformList"},l2:{"^":"n+q;"},l3:{"^":"l2+A;"},lc:{"^":"n+q;"},ld:{"^":"lc+A;"},lw:{"^":"n+q;"},lx:{"^":"lw+A;"},lL:{"^":"n+q;"},lM:{"^":"lL+A;"}}],["","",,P,{"^":"",K:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$isjK:1}}],["","",,P,{"^":"",np:{"^":"n;0k:length=","%":"AudioBuffer"},dI:{"^":"a8;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nq:{"^":"kB;",
m:function(a,b){return P.aO(a.get(H.D(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.c([],[P.d])
this.D(a,new P.hp(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asab:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"AudioParamMap"},hp:{"^":"l:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hq:{"^":"dI;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nr:{"^":"a8;0k:length=","%":"AudioTrackList"},ht:{"^":"a8;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ns:{"^":"dI;0X:type}","%":"BiquadFilterNode"},o6:{"^":"ht;0k:length=","%":"OfflineAudioContext"},o7:{"^":"hq;0X:type}","%":"Oscillator|OscillatorNode"},kB:{"^":"n+ab;"}}],["","",,P,{"^":"",d5:{"^":"n;",
fM:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.G(g)
if(!!z.$isbV)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mE(g))
return}if(!!z.$iscP)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bQ("Incorrect number or type of arguments"))},
fL:function(a,b,c,d,e,f,g){return this.fM(a,b,c,d,e,f,g,null,null,null)},
$isd5:1,
"%":"WebGLRenderingContext"},jU:{"^":"n;",$isjU:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oi:{"^":"lu;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.M(b,a,null,null,null))
return P.aO(a.item(b))},
n:function(a,b,c){H.B(b)
H.e(c,"$isH")
throw H.a(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.H,,,]]},
$isk:1,
$ask:function(){return[[P.H,,,]]},
$isf:1,
$asf:function(){return[[P.H,,,]]},
$asA:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},lt:{"^":"n+q;"},lu:{"^":"lt+A;"}}],["","",,O,{"^":"",aY:{"^":"b;0a,0b,0c,0d,$ti",
c6:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dh:function(a,b,c){var z={func:1,ret:-1,args:[P.m,[P.k,H.af(this,"aY",0)]]}
H.j(a,z)
H.j(c,z)
this.b=b
this.c=a
this.d=c},
bc:function(a,b){return this.dh(a,null,b)},
ei:function(a){H.w(a,"$isk",[H.af(this,"aY",0)],"$ask")
return!0},
dz:function(a,b){var z
H.w(b,"$isk",[H.af(this,"aY",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.au(z,z.length,0,[H.u(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.af(this,"aY",0)
H.v(b,z)
z=[z]
if(this.ei(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dz(x,H.c([b],z))}},
$isk:1,
p:{
dU:function(a){var z=new O.aY([a])
z.c6(a)
return z}}},d0:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
dA:function(a){var z=this.b
if(!(z==null))z.C(a)},
ap:function(){return this.dA(null)},
gaR:function(a){var z=this.a
if(z.length>0)return C.a.gaf(z)
else return V.cg()},
d0:function(a){var z=this.a
if(a==null)C.a.h(z,V.cg())
else C.a.h(z,a)
this.ap()},
bS:function(){var z=this.a
if(z.length>0){z.pop()
this.ap()}}}}],["","",,E,{"^":"",cH:{"^":"b;"},aE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Z:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cb:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.w();){y=z.d
if(y.f==null)y.cb()}},
sc3:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().T(0,this.gcW())
y=this.c
if(y!=null)y.gv().h(0,this.gcW())
x=new D.Q("shape",z,this.c,this,[F.eH])
x.b=!0
this.a5(x)}},
sd3:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gv().T(0,this.gcX())
y=this.f
this.f=a
if(a!=null)a.gv().h(0,this.gcX())
this.cb()
x=new D.Q("technique",y,this.f,this,[O.d9])
x.b=!0
this.a5(x)}},
saS:function(a){var z,y
if(!J.W(this.r,a)){z=this.r
if(z!=null)z.gv().T(0,this.gcV())
if(a!=null)a.gv().h(0,this.gcV())
this.r=a
y=new D.Q("mover",z,a,this,[U.ac])
y.b=!0
this.a5(y)}},
aE:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aF(0,b,this):null
if(!J.W(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.cf])
w.b=!0
this.a5(w)}for(z=this.y.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.w();)z.d.aE(0,b)},
aC:function(a){var z,y,x,w,v,u,t
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaR(z))
else C.a.h(z.a,y.t(0,z.gaR(z)))
z.ap()
a.d1(this.f)
z=a.dy
x=(z&&C.a).gaf(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.m(0,"Bumpy Debugging Shader")
if(w==null){z=a.a
w=new T.hu(z,"Bumpy Debugging Shader")
w.dv(z,"Bumpy Debugging Shader")
y=$.hw
v=$.hv
w.c=y
w.d=v
w.e=w.cj(y,35633)
w.f=w.cj(w.d,35632)
y=z.createProgram()
w.r=y
z.attachShader(y,w.e)
z.attachShader(w.r,w.f)
z.linkProgram(w.r)
if(!H.dr(z.getProgramParameter(w.r,35714))){u=z.getProgramInfoLog(w.r)
z.deleteProgram(w.r)
H.P(P.a4("Failed to link shader: "+H.h(u)))}w.ev()
w.ex()
w.z=w.x.m(0,"posAttr")
w.Q=w.x.m(0,"normAttr")
w.ch=w.x.m(0,"binmAttr")
w.cx=w.x.m(0,"txtAttr")
w.cy=w.x.m(0,"weightAttr")
w.db=H.ag(w.y.m(0,"bumpTxt"),"$isf9")
w.dx=H.ag(w.y.m(0,"objMat"),"$isco")
w.dy=H.ag(w.y.m(0,"viewMat"),"$isco")
w.fr=H.ag(w.y.m(0,"projMat"),"$isco")
w.fx=H.ag(w.y.m(0,"offsetScalar"),"$isf8")
if(a.fr.b3(0,"Bumpy Debugging Shader"))H.P(P.a4('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.n(0,"Bumpy Debugging Shader",w)}x.a=w
z=w}if(this.e==null){z=this.c
y=a.a
v=$.$get$aK()
t=$.$get$aJ()
t=z.eK(new Z.ks(y),new Z.dg(v.a|t.a|$.$get$aI().a|$.$get$aL().a|$.$get$aM().a))
t.aQ($.$get$aK()).e=x.a.z.c
t.aQ($.$get$aJ()).e=x.a.Q.c
t.aQ($.$get$aI()).e=x.a.ch.c
t.aQ($.$get$aL()).e=x.a.cx.c
v=t.aQ($.$get$aM())
y=x.a
v.e=y.cy.c
this.e=t
z=y}y=x.b
if(y!=null){y.a=0
a.a.useProgram(z.r)
z.x.eV()
y=x.b
if(y!=null){v=z.db
v.toString
t=y.d
if(!t)v.a.uniform1i(v.d,0)
else{y=y.a
v.a.uniform1i(v.d,y)}}y=a.cy
y=y.gaR(y)
v=z.fr
v.toString
v.bd(y.bZ(0,!0))
y=a.db
y=y.gaR(y)
v=z.dy
v.toString
v.bd(y.bZ(0,!0))
y=a.dx
y=y.gaR(y)
v=z.dx
v.toString
v.bd(y.bZ(0,!0))
y=x.c
z=z.fx
z.a.uniform1f(z.d,y)
y=x.b
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}z=this.e
if(z instanceof Z.dO){z.bz(a)
z.aC(a)
z.fS(a)}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.x.eS()
z=x.b
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}}for(z=this.y.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.w();)z.d.aC(a)
a.d_()
a.dx.bS()},
gv:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
a5:function(a){var z=this.z
if(!(z==null))z.C(a)},
a0:function(){return this.a5(null)},
fl:[function(a){H.e(a,"$isx")
this.e=null
this.a5(a)},function(){return this.fl(null)},"hs","$1","$0","gcW",0,2,2],
fm:[function(a){this.a5(H.e(a,"$isx"))},function(){return this.fm(null)},"ht","$1","$0","gcX",0,2,2],
fk:[function(a){this.a5(H.e(a,"$isx"))},function(){return this.fk(null)},"hr","$1","$0","gcV",0,2,2],
fi:[function(a){this.a5(H.e(a,"$isx"))},function(){return this.fi(null)},"hp","$1","$0","gcU",0,2,2],
ho:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isk",[E.aE],"$ask")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.I)(b),++v){u=b[v]
if(u!=null){if(u.gZ()==null){t=new D.bT()
t.d=0
u.sZ(t)}t=u.gZ()
t.toString
H.j(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a0()},"$2","gfh",8,0,8],
hq:[function(a,b){var z,y,x,w,v
H.w(b,"$isk",[E.aE],"$ask")
for(z=b.length,y=this.gcU(),x=0;x<b.length;b.length===z||(0,H.I)(b),++x){w=b[x]
if(w!=null){if(w.gZ()==null){v=new D.bT()
v.d=0
w.sZ(v)}w.gZ().T(0,y)}}this.a0()},"$2","gfj",8,0,8],
$ises:1,
p:{
e7:function(a,b,c,d,e,f){var z,y
z=new E.aE()
z.a=d
z.b=!0
y=O.dU(E.aE)
z.y=y
y.bc(z.gfh(),z.gfj())
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
z.sc3(0,e)
z.sd3(f)
z.saS(c)
return z}}},j5:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dt:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aj(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d0()
y=[V.cf]
z.a=H.c([],y)
z.gv().h(0,new E.j7(this))
this.cy=z
z=new O.d0()
z.a=H.c([],y)
z.gv().h(0,new E.j8(this))
this.db=z
z=new O.d0()
z.a=H.c([],y)
z.gv().h(0,new E.j9(this))
this.dx=z
z=H.c([],[O.d9])
this.dy=z
C.a.h(z,null)
this.fr=new H.aU(0,0,[P.d,A.eG])},
gaG:function(){return this.a},
d1:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaf(z):a;(z&&C.a).h(z,y)},
d_:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j6:function(a,b){var z=new E.j5(a,b)
z.dt(a,b)
return z}}},j7:{"^":"l:9;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.z=null
z.ch=null}},j8:{"^":"l:9;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j9:{"^":"l:9;a",
$1:function(a){var z
H.e(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},jC:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0Z:x@,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
dC:[function(a){var z
H.e(a,"$isx")
z=this.x
if(!(z==null))z.C(a)
this.fF()},function(){return this.dC(null)},"dB","$1","$0","gc7",0,2,2],
gf2:function(){var z,y,x
z=Date.now()
y=C.c.aw(P.e3(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aj(z,!1)
return x/y},
cr:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.r(z)
x=C.d.bK(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.d.bK(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eS(C.m,this.gfE())},
fF:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.jE(this),{func:1,ret:-1,args:[P.a_]})
C.C.dU(z)
C.C.ep(z,W.fV(y,P.a_))}},"$0","gfE",0,0,3],
fC:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cr()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.e3(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ap()
w=x.db
C.a.sk(w.a,0)
w.ap()
w=x.dx
C.a.sk(w.a,0)
w.ap()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aC(this.e)}x=this.z
if(!(x==null))x.C(null)}catch(v){z=H.a3(v)
y=H.bk(v)
P.dA("Error: "+H.h(z))
P.dA("Stack: "+H.h(y))
throw H.a(z)}},
p:{
jD:function(a,b,c,d,e){var z,y,x,w
z=J.G(a)
if(!!z.$iscL)return E.eR(a,!0,!0,!0,!1)
y=W.cM(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbG(a).h(0,y)
w=E.eR(y,!0,!0,!0,!1)
w.a=a
return w},
eR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jC()
y=P.ip(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.d,null)
x=C.h.ba(a,"webgl",y)
x=H.e(x==null?C.h.ba(a,"experimental-webgl",y):x,"$isd5")
if(x==null)H.P(P.a4("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j6(x,a)
w=new T.jA(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k8(a)
v=new X.ij()
v.c=new X.ax(!1,!1,!1)
v.d=P.bX(null,null,null,P.m)
w.b=v
v=new X.iC(w)
v.f=0
v.r=new V.X(0,0)
v.x=new V.X(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.it(w)
v.r=0
v.x=new V.X(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jH(w)
v.e=0
v.f=new V.X(0,0)
v.r=new V.X(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eL,P.b]])
w.z=v
u=document
t=W.a9
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.j(w.ge6(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.j(w.ge9(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.j(w.ge3(),q),!1,r))
v=w.z
p=W.bt
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.j(w.geb(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.j(w.gea(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.j(w.ged(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.j(w.gef(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.j(w.gee(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.Y(a,H.D(W.hV(a)),H.j(w.geg(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.j(w.ge7(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.j(w.ge8(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.j(w.geh(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.j(w.gem(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.j(w.gek(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.j(w.gel(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aj(Date.now(),!1)
z.cy=0
z.cr()
return z}}},jE:{"^":"l:35;a",
$1:function(a){var z
H.nc(a)
z=this.a
if(z.ch){z.ch=!1
z.fC()}}}}],["","",,Z,{"^":"",fi:{"^":"b;a,b",p:{
fj:function(a,b,c){var z
H.w(c,"$isf",[P.m],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cw(c)),35044)
a.bindBuffer(b,null)
return new Z.fi(b,z)}}},dN:{"^":"cH;a,b,c,d,e",
bz:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a3(y)
x=P.a4('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.h(z))
throw H.a(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},ks:{"^":"b;a",$isnt:1},dO:{"^":"b;a,0b,c,d",
aQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bz:function(a){var z,y
z=this.a
a.gaG().bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bz(a)},
fS:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.gaG().bindBuffer(this.a.a,null)},
aC:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.gaG().bindBuffer(v,x.b)
a.gaG().drawElements(w.a,w.b,5123,0)
a.gaG().bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.d]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isoq:1},cQ:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b4(this.c)+"'")+"]"}},dg:{"^":"b;a",
gc4:function(a){var z,y
z=this.a
y=(z&$.$get$aK().a)!==0?3:0
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aL().a)!==0)y+=2
if((z&$.$get$bf().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$aM().a)!==0)++y
return(z&$.$get$be().a)!==0?y+4:y},
eH:function(a){var z,y,x
z=$.$get$aK()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fh()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dg))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.d])
y=this.a
if((y&$.$get$aK().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$bf().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$be().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
ak:function(a){return new Z.dg(a)}}}}],["","",,D,{"^":"",dS:{"^":"b;"},bT:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.x]}
H.j(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
T:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).T(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).T(z,b)||y}return y},
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.D(y,new D.hZ(z))
y=this.b
if(!(y==null))C.a.D(y,new D.i_(z))
z=this.b
if(!(z==null))C.a.sk(z,0)
return!0},
eU:function(){return this.C(null)},
fG:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.C(y)}}},
aW:function(a){return this.fG(a,!0,!1)},
p:{
L:function(){var z=new D.bT()
z.d=0
return z}}},hZ:{"^":"l:22;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},i_:{"^":"l:22;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"b;a,0b"},ed:{"^":"x;c,d,a,0b,$ti"},ee:{"^":"x;c,d,a,0b,$ti"},Q:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
p:{"^":"nv<"}},ej:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},ek:{"^":"x;c,a,0b"},ij:{"^":"b;0a,0b,0c,0d",
ft:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.C(y)},
fo:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.C(y)}},ep:{"^":"ci;x,y,c,d,e,a,0b"},it:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aj:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.X(y.a+x*w,y.b+v*u)
u=this.a.gaz()
s=new X.bv(a,new V.X(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bR:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.aj(a,b))
return!0},
aU:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dg()
if(typeof z!=="number")return z.b9()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.aj(a,b))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.aj(a,b))
return!0},
fu:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.d1(new V.U(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.C(w)
return!0},
ec:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.ep(c,a,this.a.gaz(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.X(0,0)}},ax:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
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
return z+(this.c?"Shift+":"")}},bv:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},iC:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bm:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaz()
x=new X.bv(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bR:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bm(a,b,!0))
return!0},
aU:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dg()
if(typeof z!=="number")return z.b9()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bm(a,b,!0))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bm(a,b,!1))
return!0},
fv:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.d1(new V.U(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.C(x)
return!0},
gcI:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
gd7:function(){var z=this.c
if(z==null){z=D.L()
this.c=z}return z},
gcT:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z}},d1:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"x;"},eW:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},jH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aj:function(a,b){var z,y,x,w
H.w(a,"$isf",[V.X],"$asf")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.X(0,0)
x=this.a.gaz()
w=new X.eW(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fs:function(a){var z
H.w(a,"$isf",[V.X],"$asf")
z=this.b
if(z==null)return!1
z.C(this.aj(a,!0))
return!0},
fp:function(a){var z
H.w(a,"$isf",[V.X],"$asf")
z=this.c
if(z==null)return!1
z.C(this.aj(a,!0))
return!0},
fq:function(a){var z
H.w(a,"$isf",[V.X],"$asf")
z=this.d
if(z==null)return!1
z.C(this.aj(a,!1))
return!0}},k8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaz:function(){var z=this.a
return V.eE(0,0,(z&&C.h).gcG(z).c,C.h.gcG(z).d)},
ci:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.ax(y,a.altKey,a.shiftKey))},
au:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
bx:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.X(y-w,x-v)},
aK:function(a){return new V.U(a.movementX,a.movementY)},
bu:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.X])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v){u=x[v]
t=C.d.ab(u.pageX)
C.d.ab(u.pageY)
s=z.left
C.d.ab(u.pageX)
C.a.h(y,new V.X(t-s,C.d.ab(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.ax(y,a.altKey,a.shiftKey))},
bo:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.H()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
h6:[function(a){this.f=!0},"$1","ge9",4,0,5],
h0:[function(a){this.f=!1},"$1","ge3",4,0,5],
h3:[function(a){H.e(a,"$isa9")
if(this.f&&this.bo(a))a.preventDefault()},"$1","ge6",4,0,4],
h8:[function(a){var z
H.e(a,"$isbt")
if(!this.f)return
z=this.ci(a)
if(this.b.ft(z))a.preventDefault()},"$1","geb",4,0,23],
h7:[function(a){var z
H.e(a,"$isbt")
if(!this.f)return
z=this.ci(a)
if(this.b.fo(z))a.preventDefault()},"$1","gea",4,0,23],
h9:[function(a){var z,y,x,w
H.e(a,"$isa9")
z=this.a
z.focus()
this.f=!0
this.au(a)
if(this.x){y=this.ai(a)
x=this.aK(a)
if(this.d.bR(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.ak(a)
if(this.c.bR(y,w))a.preventDefault()},"$1","ged",4,0,4],
hb:[function(a){var z,y,x
H.e(a,"$isa9")
this.au(a)
z=this.ai(a)
if(this.x){y=this.aK(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","gef",4,0,4],
h5:[function(a){var z,y,x
H.e(a,"$isa9")
if(!this.bo(a)){this.au(a)
z=this.ai(a)
if(this.x){y=this.aK(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","ge8",4,0,4],
ha:[function(a){var z,y,x
H.e(a,"$isa9")
this.au(a)
z=this.ai(a)
if(this.x){y=this.aK(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","gee",4,0,4],
h4:[function(a){var z,y,x
H.e(a,"$isa9")
if(!this.bo(a)){this.au(a)
z=this.ai(a)
if(this.x){y=this.aK(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aT(z,x))a.preventDefault()}},"$1","ge7",4,0,4],
hc:[function(a){var z,y
H.e(a,"$isbD")
this.au(a)
z=new V.U((a&&C.B).geQ(a),C.B.geR(a)).E(0,180)
if(this.x){if(this.d.fu(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.fv(z,y))a.preventDefault()},"$1","geg",4,0,39],
hd:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ai(this.y)
v=this.ak(this.y)
this.d.ec(w,v,x)}},"$1","geh",4,0,5],
hh:[function(a){var z
H.e(a,"$isbd")
this.a.focus()
this.f=!0
this.bx(a)
z=this.bu(a)
if(this.e.fs(z))a.preventDefault()},"$1","gem",4,0,12],
hf:[function(a){var z
H.e(a,"$isbd")
this.bx(a)
z=this.bu(a)
if(this.e.fp(z))a.preventDefault()},"$1","gek",4,0,12],
hg:[function(a){var z
H.e(a,"$isbd")
this.bx(a)
z=this.bu(a)
if(this.e.fq(z))a.preventDefault()},"$1","gel",4,0,12]}}],["","",,V,{"^":"",
nx:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","iz",8,0,36],
nl:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.aZ(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.d.d5($.t.$2(a,0)?0:a,b),c+b+1)},
cA:function(a,b,c){var z,y,x,w,v
H.w(a,"$isf",[P.y],"$asf")
z=H.c([],[P.d])
for(y=0,x=0;x<4;++x){w=V.S(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.n(z,v,C.b.aa(z[v],y))}return z},
dz:function(a,b){return C.d.fO(Math.pow(b,C.L.bK(Math.log(H.mB(a))/Math.log(b))))},
c7:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c7))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cf:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bZ:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.r(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.r(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.r(l)
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
e=this.f
d=this.r
c=this.x
b=this.y
if(typeof b!=="number")return b.t()
a=this.z
if(typeof a!=="number")return a.t()
a0=this.Q
if(typeof a0!=="number")return a0.t()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cf))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
z=b.z
if(!$.t.$2(z,this.z))return!1
z=b.Q
if(!$.t.$2(z,this.Q))return!1
z=b.ch
if(!$.t.$2(z,this.ch))return!1
z=b.cx
if(!$.t.$2(z,this.cx))return!1
z=b.cy
if(!$.t.$2(z,this.cy))return!1
z=b.db
if(!$.t.$2(z,this.db))return!1
z=b.dx
if(!$.t.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.cA(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cA(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cA(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cA(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(a){return this.cK(a,3,0)},
O:function(){return this.cK("",3,0)},
p:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cg:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
X:{"^":"b;a,b",
H:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
ch:{"^":"b;a,b,c",
H:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.H()
if(typeof w!=="number")return H.r(w)
return new V.ch(this.a-z,this.b-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ch))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
eA:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
eD:{"^":"b;a,b,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eD))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
p:{
eE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eD(a,b,c,d)}}},
U:{"^":"b;a,b",
f9:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,26],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.r(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.U(z*b,y*b)},
E:function(a,b){var z,y
if($.t.$2(b,0))return new V.U(0,0)
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.U(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
a0:{"^":"b;a,b,c",
f9:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,26],
I:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.r(y)
return this.a*a.a+this.b*a.b+z*y},
aP:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.r(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.t()
v=a.a
u=this.a
return new V.a0(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.r(y)
return new V.a0(this.a+b.a,this.b+b.b,z+y)},
N:function(a){var z=this.c
if(typeof z!=="number")return z.N()
return new V.a0(-this.a,-this.b,-z)},
E:function(a,b){var z
if($.t.$2(b,0))return new V.a0(0,0,0)
z=this.c
if(typeof z!=="number")return z.E()
return new V.a0(this.a/b,this.b/b,z/b)},
cS:function(){if(!$.t.$2(0,this.a))return!1
if(!$.t.$2(0,this.b))return!1
if(!$.t.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hE:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bg:function(a){var z=V.nl(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.C(a)},
sc0:function(a,b){},
sbO:function(a){var z,y
z=this.b
if(!$.t.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bg(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.P(z)}},
sbQ:function(a){var z,y
z=this.c
if(!$.t.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bg(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.P(z)}},
sa2:function(a,b){var z,y
b=this.bg(b)
z=this.d
if(!$.t.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.y])
z.b=!0
this.P(z)}},
sbP:function(a){var z,y,x
z=this.e
if(!$.t.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.P(z)}},
sR:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.t.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.y])
z.b=!0
this.P(z)}},
sbJ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.t.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.y])
z.b=!0
this.P(z)}},
aE:function(a,b){var z,y,x,w
z=this.f
if($.t.$2(z,0)){z=this.r
z=!$.t.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.t.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sR(y)}},
p:{
cN:function(){var z=new U.hE()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dV:{"^":"ac;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
aF:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dV))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}},ea:{"^":"aY;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isx")
z=this.e
if(!(z==null))z.C(a)},function(){return this.P(null)},"a8","$1","$0","gat",0,2,2],
h_:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ed(a,b,this,[z])
z.b=!0
this.P(z)},"$2","ge2",8,0,24],
he:[function(a,b){var z,y,x,w,v
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gat(),w=0;w<b.length;b.length===y||(0,H.I)(b),++w){v=b[w]
if(v!=null)v.gv().T(0,x)}z=new D.ee(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gej",8,0,24],
aF:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.au(z,z.length,0,[H.u(z,0)]),x=null;z.w();){y=z.d
if(y!=null){w=y.aF(0,b,c)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.cg():x
z=this.e
if(!(z==null))z.aW(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.W(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.ac]},
$asaY:function(){return[U.ac]},
$isac:1},ac:{"^":"dS;"},k9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.L()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$isx")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.P(null)},"a8","$1","$0","gat",0,2,2],
aN:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcI().h(0,this.gbp())
this.a.c.gcT().h(0,this.gbq())
this.a.c.gd7().h(0,this.gbr())
return!0},
dZ:[function(a){H.e(a,"$isx")
if(!J.W(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbp",4,0,1],
e_:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.e(a,"$isx"),"$isbv")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.U(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.U(y.a,y.b).t(0,2).E(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.r(x)
y.sR(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.U(x.a,x.b).t(0,2).E(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.r(u)
t=this.z
if(typeof t!=="number")return H.r(t)
x.sa2(0,-v*u+t)
this.b.sR(0)
y=y.H(0,a.z)
this.Q=new V.U(y.a,y.b).t(0,2).E(0,z.ga3())}this.a8()},"$1","gbq",4,0,1],
e0:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.r(x)
z.sR(y*10*x)
this.a8()}},"$1","gbr",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.aE(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aG(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},ka:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$isx")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.P(null)},"a8","$1","$0","gat",0,2,2],
aN:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gcI().h(0,this.gbp())
this.a.c.gcT().h(0,this.gbq())
this.a.c.gd7().h(0,this.gbr())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.gdW())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.gdX())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.geC())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.geB())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.geA())
return!0},
ac:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.U(z,y)},
dZ:[function(a){a=H.ag(H.e(a,"$isx"),"$isbv")
if(!J.W(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbp",4,0,1],
e_:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.e(a,"$isx"),"$isbv")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.U(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ac(new V.U(y.a,y.b).t(0,2).E(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.U(x.a,x.b).t(0,2).E(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa2(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.U(y.a,y.b).t(0,2).E(0,z.ga3()))}this.a8()},"$1","gbq",4,0,1],
e0:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sR(-y*10*z)
this.a8()}},"$1","gbr",4,0,1],
fX:[function(a){if(H.ag(H.e(a,"$isx"),"$isep").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdW",4,0,1],
fY:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.e(a,"$isx"),"$isbv")
if(!J.W(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.U(x.a,x.b).t(0,2).E(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa2(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.U(y.a,y.b).t(0,2).E(0,z.ga3()))
this.a8()},"$1","gdX",4,0,1],
hl:[function(a){H.e(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geC",4,0,1],
hk:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.e(a,"$isx"),"$iseW")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.U(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ac(new V.U(y.a,y.b).t(0,2).E(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.U(x.a,x.b).t(0,2).E(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa2(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.U(y.a,y.b).t(0,2).E(0,z.ga3()))}this.a8()},"$1","geB",4,0,1],
hj:[function(a){var z,y,x
H.e(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sR(-y*10*z)
this.a8()}},"$1","geA",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.aE(0,x)
this.b.aE(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aG(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.t(0,V.aG(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.C(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.L()
z.e=y
z=y}else z=y
y=this.ge1()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.L()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
fZ:[function(a){var z,y,x,w
H.e(a,"$isx")
if(!J.W(this.b,this.a.b.c))return
H.ag(a,"$isd1")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.y])
z.b=!0
this.P(z)}},"$1","ge1",4,0,1],
aF:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aG(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",hX:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aH:[function(a){var z
H.e(a,"$isx")
z=this.x
if(!(z==null))z.C(a)},function(){return this.aH(null)},"fU","$1","$0","gaq",0,2,2],
h1:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aE
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){if(t.gZ()==null){s=new D.bT()
s.d=0
t.sZ(s)}s=t.gZ()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ed(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","ge4",8,0,8],
h2:[function(a,b){var z,y,x,w,v,u
z=E.aE
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaq(),w=0;w<b.length;b.length===y||(0,H.I)(b),++w){v=b[w]
if(v!=null){if(v.gZ()==null){u=new D.bT()
u.d=0
v.sZ(u)}v.gZ().T(0,x)}}z=new D.ee(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","ge5",8,0,8],
gv:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.d1(this.c)
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
if(typeof x!=="number")return H.r(x)
u=C.d.ab(v.a*x)
if(typeof w!=="number")return H.r(w)
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
n=V.aG(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.d0(n)
y=$.ey
if(y==null){y=new V.a0(0,0,-1)
m=y.E(0,Math.sqrt(y.I(y)))
y=new V.a0(0,1,0).aP(m)
l=y.E(0,Math.sqrt(y.I(y)))
k=m.aP(l)
j=new V.a0(0,0,0)
y=V.aG(l.a,k.a,m.a,l.N(0).I(j),l.b,k.b,m.b,k.N(0).I(j),l.c,k.c,m.c,m.N(0).I(j),0,0,0,1)
$.ey=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.t(0,i)}a.db.d0(i)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.w();)z.d.aE(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.w();)z.d.aC(a)
this.a.toString
a.cy.bS()
a.db.bS()
this.b.toString
a.d_()},
$isoc:1}}],["","",,A,{"^":"",dH:{"^":"b;a,b,c"},ho:{"^":"b;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
eS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eG:{"^":"cH;",
dv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cj:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dr(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.a4("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
ev:function(){var z,y,x,w,v,u
z=H.c([],[A.dH])
y=this.a
x=H.B(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dH(y,v.name,u))}this.x=new A.ho(z)},
ex:function(){var z,y,x,w,v,u
z=H.c([],[A.aa])
y=this.a
x=H.B(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.eP(v.type,v.size,v.name,u))}this.y=new A.jT(z)},
as:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jL(z,y,b,c)
else return A.dc(z,y,b,a,c)},
dR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.f9(z,y,b,c)
else return A.dc(z,y,b,a,c)},
dS:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jX(z,y,b,c)
else return A.dc(z,y,b,a,c)},
b2:function(a,b){return new P.fn(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
eP:function(a,b,c,d){switch(a){case 5120:return this.as(b,c,d)
case 5121:return this.as(b,c,d)
case 5122:return this.as(b,c,d)
case 5123:return this.as(b,c,d)
case 5124:return this.as(b,c,d)
case 5125:return this.as(b,c,d)
case 5126:return new A.f8(this.a,this.r,c,d)
case 35664:return new A.jN(this.a,this.r,c,d)
case 35665:return new A.jP(this.a,this.r,c,d)
case 35666:return new A.jR(this.a,this.r,c,d)
case 35667:return new A.jO(this.a,this.r,c,d)
case 35668:return new A.jQ(this.a,this.r,c,d)
case 35669:return new A.jS(this.a,this.r,c,d)
case 35674:return new A.jV(this.a,this.r,c,d)
case 35675:return new A.jW(this.a,this.r,c,d)
case 35676:return new A.co(this.a,this.r,c,d)
case 35678:return this.dR(b,c,d)
case 35680:return this.dS(b,c,d)
case 35670:throw H.a(this.b2("BOOL",c))
case 35671:throw H.a(this.b2("BOOL_VEC2",c))
case 35672:throw H.a(this.b2("BOOL_VEC3",c))
case 35673:throw H.a(this.b2("BOOL_VEC4",c))
default:throw H.a(P.a4("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},aa:{"^":"b;"},jT:{"^":"b;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.O()},
f1:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.I)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.f1("\n")}},jL:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},jO:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},jQ:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},jS:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},jM:{"^":"aa;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
p:{
dc:function(a,b,c,d,e){var z=new A.jM(a,b,c,e)
z.f=d
z.e=P.ir(d,0,!1,P.m)
return z}}},f8:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},jN:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},jP:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},jR:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},jV:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},jW:{"^":"aa;a,b,c,d",
i:function(a){return"UniformMat3: "+H.h(this.c)}},co:{"^":"aa;a,b,c,d",
bd:function(a){var z=new Float32Array(H.cw(H.w(a,"$isf",[P.y],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},f9:{"^":"aa;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},jX:{"^":"aa;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
mM:function(a,b,c){var z={}
z.a=b
z.a=new F.mN()
return F.ni(c,a,new F.mO(z),null)},
ni:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.bA,P.y,P.y]})
if(a<1)return
if(b<1)return
z=new F.eH()
y=new F.kk(z)
y.b=!1
x=[F.bA]
y.c=H.c([],x)
z.a=y
y=new F.ji(z)
y.b=H.c([],[F.ez])
z.b=y
y=new F.jh(z)
y.b=H.c([],[F.cX])
z.c=y
y=new F.jg(z)
y.b=H.c([],[F.an])
z.d=y
z.e=null
w=H.c([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.df(null,null,new V.c7(x,0,0,1),null,null,new V.X(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bI(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.df(null,null,new V.c7(o,n,m,1),null,null,new V.X(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bI(d))}}z.d.eF(a+1,b+1,w)
return z},
mN:{"^":"l:44;",
$2:function(a,b){return 0}},
mO:{"^":"l:45;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
x=new V.ch(z,y,this.a.a.$2(b,c))
if(!J.W(a.f,x)){a.f=x
x=a.a
if(x!=null)x.a0()}x=new V.a0(z,y,1)
x=x.E(0,Math.sqrt(x.I(x)))
if(!J.W(a.z,x)){a.z=x
x=a.a
if(x!=null)x.a0()}x=1-b
w=1-c
w=new V.eA(b*c,2+x*c,4+b*w,6+x*w)
if(!J.W(a.cx,w)){a.cx=w
x=a.a
if(x!=null)x.a0()}}},
an:{"^":"b;0a,0b,0c,0d,0e",
eT:function(){if(!this.gb5()){C.a.T(this.a.a.d.b,this)
this.a.a.a0()}var z=this.a
if(z!=null){C.a.T(z.d.b,this)
this.a=null}z=this.b
if(z!=null){C.a.T(z.d.c,this)
this.b=null}z=this.c
if(z!=null){C.a.T(z.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
dK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.a0(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.cS())return
return v.E(0,Math.sqrt(v.I(v)))},
dN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.a0(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.I(z)))
z=w.H(0,y)
z=new V.a0(z.a,z.b,z.c)
z=v.aP(z.E(0,Math.sqrt(z.I(z))))
return z.E(0,Math.sqrt(z.I(z)))},
bE:function(){if(this.d!=null)return!0
var z=this.dK()
if(z==null){z=this.dN()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
dJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.a0(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.cS())return
return v.E(0,Math.sqrt(v.I(v)))},
dM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.t.$2(n,0)){z=r.H(0,u)
z=new V.a0(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.H(0,u)
y=z.c
if(typeof y!=="number")return y.t()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.r(t)
t=new V.ch(z.a*l+w,z.b*l+v,y*l+t).H(0,x)
t=new V.a0(t.a,t.b,t.c)
m=t.E(0,Math.sqrt(t.I(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.I(z)))
z=k.aP(m)
z=z.E(0,Math.sqrt(z.I(z))).aP(k)
m=z.E(0,Math.sqrt(z.I(z)))}return m},
bC:function(){if(this.e!=null)return!0
var z=this.dJ()
if(z==null){z=this.dM()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){var z,y
if(this.gb5())return a+"disposed"
z=a+C.b.aa(J.a6(this.a.e),0)+", "+C.b.aa(J.a6(this.b.e),0)+", "+C.b.aa(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.A("")},
p:{
c9:function(a,b,c){var z,y,x
z=new F.an()
y=a.a
if(y==null)H.P(P.a4("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.P(P.a4("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
cX:{"^":"b;0a,0b",
gb5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){if(this.gb5())return a+"disposed"
return a+C.b.aa(J.a6(this.a.e),0)+", "+C.b.aa(J.a6(this.b.e),0)},
O:function(){return this.A("")}},
ez:{"^":"b;"},
eH:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
eK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aK().a)!==0?1:0
if((y&$.$get$aJ().a)!==0)++x
if((y&$.$get$aI().a)!==0)++x
if((y&$.$get$aL().a)!==0)++x
if((y&$.$get$bf().a)!==0)++x
if((y&$.$get$bB().a)!==0)++x
if((y&$.$get$bC().a)!==0)++x
if((y&$.$get$aM().a)!==0)++x
if((y&$.$get$be().a)!==0)++x
w=b.gc4(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.y
t=H.c(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.c(y,[Z.dN])
for(r=0,q=0;q<x;++q){p=b.eH(q)
o=p.gc4(p)
C.a.n(s,q,new Z.dN(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fa(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.w(t,"$isf",[u],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dO(new Z.fi(34962,j),s,b)
i.b=H.c([],[Z.cQ])
this.b.b
if(this.c.b.length!==0){u=P.m
h=H.c([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.ax()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.ax()
C.a.h(h,g.e)}f=Z.fj(y,34963,H.w(h,"$isf",[u],"$asf"))
C.a.h(i.b,new Z.cQ(1,h.length,f))}if(this.d.b.length!==0){u=P.m
h=H.c([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.ax()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.ax()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.ax()
C.a.h(h,g.e)}f=Z.fj(y,34963,H.w(h,"$isf",[u],"$asf"))
C.a.h(i.b,new Z.cQ(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.d])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.l(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.C(a)},
a0:function(){return this.a5(null)}},
jg:{"^":"b;a,0b",
eF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isf",[F.bA],"$asf")
z=H.c([],[F.an])
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
C.a.h(z,F.c9(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c9(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c9(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c9(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
fB:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y[z].eT()}C.a.sk(this.b,0)},
bF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bE())x=!1
return x},
bD:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bC())x=!1
return x},
i:function(a){return this.O()},
A:function(a){var z,y,x,w
z=H.c([],[P.d])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
O:function(){return this.A("")}},
jh:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.O()},
A:function(a){var z,y,x,w
z=H.c([],[P.d])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.l(z,"\n")},
O:function(){return this.A("")}},
ji:{"^":"b;a,0b",
gk:function(a){return 0},
i:function(a){return this.O()},
A:function(a){var z,y,x
z=H.c([],[P.d])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].A(a))}return C.a.l(z,"\n")},
O:function(){return this.A("")}},
bA:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bI:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.df(this.cx,x,u,z,y,w,v,a,t)},
eM:function(){return this.bI(null)},
fa:function(a){var z,y
z=J.G(a)
if(z.u(a,$.$get$aK())){z=this.f
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.r
y=[P.y]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.x
y=[P.y]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aL())){z=this.y
y=[P.y]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$bf())){z=this.z
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aM()))return H.c([this.ch],[P.y])
else if(z.u(a,$.$get$be())){z=this.cx
y=[P.y]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.y])},
bE:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.a0(0,0,0)
this.d.D(0,new F.kr(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.aW(0)}return!0},
bC:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.a0(0,0,0)
this.d.D(0,new F.kq(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.aW(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){var z,y,x
z=H.c([],[P.d])
C.a.h(z,C.b.aa(J.a6(this.e),0))
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
C.a.h(z,V.S(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
O:function(){return this.A("")},
p:{
df:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bA()
y=new F.kp(z)
y.b=H.c([],[F.ez])
z.b=y
y=new F.ko(z)
x=[F.cX]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kl(z)
x=[F.an]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$ff()
z.e=0
y=$.$get$aK()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aJ().a)!==0?e:null
z.x=(x&$.$get$aI().a)!==0?b:null
z.y=(x&$.$get$aL().a)!==0?f:null
z.z=(x&$.$get$bf().a)!==0?g:null
z.Q=(x&$.$get$fg().a)!==0?c:null
z.ch=(x&$.$get$aM().a)!==0?i:0
z.cx=(x&$.$get$be().a)!==0?a:null
return z}}},
kr:{"^":"l:10;a",
$1:function(a){var z,y
H.e(a,"$isan")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kq:{"^":"l:10;a",
$1:function(a){var z,y
H.e(a,"$isan")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kk:{"^":"b;a,0b,0c",
ax:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.a4("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a0()
return!0},
gk:function(a){return this.c.length},
bF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bE()
return!0},
bD:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bC()
return!0},
i:function(a){return this.O()},
A:function(a){var z,y,x,w
this.ax()
z=H.c([],[P.d])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
O:function(){return this.A("")}},
kl:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){H.j(b,{func:1,ret:-1,args:[F.an]})
C.a.D(this.b,b)
C.a.D(this.c,new F.km(this,b))
C.a.D(this.d,new F.kn(this,b))},
i:function(a){return this.O()},
A:function(a){var z,y,x,w
z=H.c([],[P.d])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
O:function(){return this.A("")}},
km:{"^":"l:10;a,b",
$1:function(a){H.e(a,"$isan")
if(!J.W(a.a,this.a))this.b.$1(a)}},
kn:{"^":"l:10;a,b",
$1:function(a){var z
H.e(a,"$isan")
z=this.a
if(!J.W(a.a,z)&&!J.W(a.b,z))this.b.$1(a)}},
ko:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
A:function(a){var z,y,x,w
z=H.c([],[P.d])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
O:function(){return this.A("")}},
kp:{"^":"b;a,0b",
gk:function(a){return 0},
i:function(a){return this.O()},
A:function(a){var z,y,x
z=H.c([],[P.d])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].A(a))}return C.a.l(z,"\n")},
O:function(){return this.A("")}}}],["","",,O,{"^":"",d9:{"^":"b;"}}],["","",,T,{"^":"",jv:{"^":"cH;"},eQ:{"^":"jv;"},jz:{"^":"eQ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z}},jA:{"^":"b;a,0b,0c,0d,0e",
fd:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eb(null,a,null)
w=new T.jz()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a7
W.Y(x,"load",H.j(new T.jB(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
fc:function(a){return this.fd(a,!1,!1,!1,!1)},
eq:function(a,b,c){var z,y,x,w
b=V.dz(b,2)
z=V.dz(a.width,2)
y=V.dz(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cM(null,null)
x.width=z
x.height=y
w=H.e(C.h.dd(x,"2d"),"$isdR")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mF(w.getImageData(0,0,x.width,x.height))}}},jB:{"^":"l:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.eq(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a0.fL(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.eU()}++x.e}}}],["","",,V,{"^":"",bn:{"^":"b;",
aB:function(a,b){return!0},
i:function(a){return"all"},
$isaF:1},aF:{"^":"b;"},er:{"^":"b;",
aB:["dq",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)if(z[x].aB(0,b))return!0
return!1}],
i:["c5",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.I)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaF:1},ao:{"^":"er;0a",
aB:function(a,b){return!this.dq(0,b)},
i:function(a){return"!["+this.c5(0)+"]"}},j_:{"^":"b;0a,0b",
aB:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.by(this.a)
y=H.by(this.b)
return z+".."+y},
$isaF:1,
p:{
N:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.a4("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.B(a,0)
y=C.b.B(b,0)
x=new V.j_()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},je:{"^":"b;0a",
du:function(a){var z,y
if(a.a.length<=0)throw H.a(P.a4("May not create a SetMatcher with zero characters."))
z=new H.aU(0,0,[P.m,P.R])
for(y=new H.cZ(a,a.gk(a),0,[H.af(a,"q",0)]);y.w();)z.n(0,y.d,!0)
this.a=z},
aB:function(a,b){return this.a.b3(0,b)},
i:function(a){var z=this.a
return P.bY(z.ga_(z),0,null)},
$isaF:1,
p:{
p:function(a){var z=new V.je()
z.du(a)
return z}}},eJ:{"^":"b;a,b,0c,0d",
gff:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eX(this.a.j(0,b))
w.a=H.c([],[V.aF])
w.c=!1
C.a.h(this.c,w)
return w},
eX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
if(w.aB(0,a))return w}return},
i:function(a){return this.b}},eU:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dB(this.b,"\n","\\n")
y=H.dB(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eV:{"^":"b;a,b,0c",
an:function(a,b,c){var z,y,x
H.w(c,"$isf",[P.d],"$asf")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.I)(c),++y){x=c[y]
this.c.n(0,x,b)}},
i:function(a){return this.b}},jG:{"^":"b;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.eJ(this,b)
z.c=H.c([],[V.eX])
this.a.n(0,b,z)}return z},
L:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.eV(this,a)
y=P.d
z.c=new H.aU(0,0,[y,y])
this.b.n(0,a,z)}return z},
d6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eU])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.B(a,t)
r=y.eX(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bY(w,0,null)
throw H.a(P.a4("Untokenizable string [state: "+y.gff(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bY(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.eU(o==null?p.b:o,q,t)}++t}}},
p:{
cm:function(){var z,y
z=new V.jG()
y=P.d
z.a=new H.aU(0,0,[y,V.eJ])
z.b=new H.aU(0,0,[y,V.eV])
return z}}},eX:{"^":"er;b,0c,0a",
i:function(a){return this.b.b+": "+this.c5(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$ises:1},i4:{"^":"eN;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},iK:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
aI:[function(a){var z
H.e(a,"$isx")
z=this.f
if(!(z==null))z.C(a)},function(){return this.aI(null)},"fV","$1","$0","gc8",0,2,2],
saS:function(a){var z,y
if(!J.W(this.b,a)){z=this.b
if(z!=null)z.gv().T(0,this.gc8())
y=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gc8())
z=new D.Q("mover",y,this.b,this,[U.ac])
z.b=!0
this.aI(z)}},
$ises:1,
$isdQ:1},eN:{"^":"b;"}}],["","",,V,{"^":"",
ng:function(a){P.jF(C.I,new V.nh(a))},
aR:{"^":"b;",
b_:function(a){this.b=new P.i7(C.J)
this.c=null
this.d=H.c([],[[P.f,W.b_]])},
J:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b_]))
y=a.split("\n")
for(z=y.length,x=[W.b_],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.dQ(u,0,u.length)
r=s==null?u:s
C.H.di(t,H.dB(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaf(this.d),t)}},
cY:function(a,b){var z,y,x,w
H.w(b,"$isf",[P.d],"$asf")
this.d=H.c([],[[P.f,W.b_]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.b4()
this.c=y}for(y=y.d6(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)this.b7(y[w])}},
nh:{"^":"l:48;a",
$1:function(a){H.e(a,"$isbb")
P.dA(C.d.d5(this.a.gf2(),2)+" fps")}},
hM:{"^":"aR;a,0b,0c,0d",
b7:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
b4:function(){var z,y,x,w
z=V.cm()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.N("a","z")
C.a.h(y.a,x)
x=V.N("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=V.N("0","9")
C.a.h(x.a,y)
y=V.N("a","z")
C.a.h(x.a,y)
y=V.N("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.N("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.N("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.p(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.N("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.N("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.p(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.p(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.p(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bn())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.p(new H.o("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.p(new H.o("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.p(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.p(new H.o("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bn())
x=z.j(0,"Start").l(0,"Slash")
y=V.p(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ao()
w=[V.aF]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.ao()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.p(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.p(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.L("Num")
x=z.j(0,"Float")
x.d=x.a.L("Num")
x=z.j(0,"Sym")
x.d=x.a.L("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.L("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.L("String")
x=z.j(0,"EndComment")
x.d=x.a.L("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.L("Whitespace")
x=z.j(0,"Id")
y=x.a.L("Id")
x.d=y
x=[P.d]
y.an(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.an(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.an(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
i5:{"^":"aR;a,0b,0c,0d",
b7:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
b4:function(){var z,y,x,w
z=V.cm()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.N("a","z")
C.a.h(y.a,x)
x=V.N("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=V.N("0","9")
C.a.h(x.a,y)
y=V.N("a","z")
C.a.h(x.a,y)
y=V.N("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.N("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.N("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.p(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.N("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.N("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.p(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.p(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.p(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bn())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ao()
w=[V.aF]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.p(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ao()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.p(new H.o("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.p(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.p(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.L("Num")
y=z.j(0,"Float")
y.d=y.a.L("Num")
y=z.j(0,"Sym")
y.d=y.a.L("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.L("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.L("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.L("Whitespace")
y=z.j(0,"Id")
x=y.a.L("Id")
y.d=x
y=[P.d]
x.an(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.an(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.an(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
i6:{"^":"aR;a,0b,0c,0d",
b7:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
b4:function(){var z,y,x
z=V.cm()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.N("a","z")
C.a.h(y.a,x)
x=V.N("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=V.N("0","9")
C.a.h(x.a,y)
y=V.N("a","z")
C.a.h(x.a,y)
y=V.N("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.p(new H.o("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.p(new H.o("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.p(new H.o("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.p(new H.o("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bn())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bn())
y=z.j(0,"Other").l(0,"Other")
x=new V.ao()
x.a=H.c([],[V.aF])
C.a.h(y.a,x)
y=V.p(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.N("a","z")
C.a.h(x.a,y)
y=V.N("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.L("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.L("String")
y=z.j(0,"Id")
x=y.a.L("Id")
y.d=x
x.an(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.d]))
x=z.j(0,"Attr")
x.d=x.a.L("Attr")
x=z.j(0,"Other")
x.d=x.a.L("Other")
return z}},
iM:{"^":"aR;a,0b,0c,0d",
cY:function(a,b){H.w(b,"$isf",[P.d],"$asf")
this.d=H.c([],[[P.f,W.b_]])
this.J(C.a.l(b,"\n"),"#111")},
b7:function(a){},
b4:function(){return}},
iY:{"^":"b;a,b,0c",
cA:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.j(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cr().gaV().m(0,H.h(z))
if(y==null)if(d){c.$0()
this.aM(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bm(this.c).h(0,v)
t=W.ia("radio")
t.checked=x
t.name=z
z=W.a7
W.Y(t,"change",H.j(new V.iZ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bm(this.c).h(0,w.createElement("br"))},
a1:function(a,b,c){return this.cA(a,b,c,!1)},
aM:function(a){var z,y,x,w,v
z=P.cr()
y=P.d
x=P.em(z.gaV(),y,y)
x.n(0,this.a,a)
w=z.bV(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fA([],[]).b8(""),"",v)}},
iZ:{"^":"l:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aM(this.d)}}},
jj:{"^":"b;0a,0b",
dw:function(a,b){var z,y,x,w,v,u,t
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
t=W.a7
W.Y(z,"scroll",H.j(new V.jm(x),{func:1,ret:-1,args:[t]}),!1,t)},
cD:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isf",[P.d],"$asf")
this.ew()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.d6(C.a.f8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v){u=x[v]
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
if(H.h9(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.c0(C.w,s,C.f,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.h(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
dc:function(a){var z,y,x,w
z=new V.hM("dart")
z.b_("dart")
y=new V.i5("glsl")
y.b_("glsl")
x=new V.i6("html")
x.b_("html")
w=C.a.eY(H.c([z,y,x],[V.aR]),new V.jn(a))
if(w!=null)return w
z=new V.iM("plain")
z.b_("plain")
return z},
cB:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$isf",[P.d],"$asf")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bM(w).Y(w,"+")){C.a.n(a2,x,C.b.ah(w,1))
C.a.h(z,1)
y=!0}else if(C.b.Y(w,"-")){C.a.n(a2,x,C.b.ah(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dc(a0)
v.cY(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.c0(C.w,a,C.f,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dF(null)
n.href="#"+H.h(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.i(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.I)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.I)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.w();)h.appendChild(b.gK(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
eE:function(a){var z,y,x,w,v,u,t
H.w(a,"$isf",[P.d],"$asf")
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
x=H.e(w.insertCell(-1),"$isd8").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isd8")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
ew:function(){var z,y,x,w
if(this.b!=null)return
z=V.cm()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ao()
w=[V.aF]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.ao()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.p(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.ao()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.p(new H.o("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.p(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.p(new H.o("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.p(new H.o("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.p(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.ao()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.p(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.p(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ao()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.p(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bn())
x=z.j(0,"Other").l(0,"Other")
y=new V.ao()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.p(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.L("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.L("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.L("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.L("Link")
x=z.j(0,"Other")
x.d=x.a.L("Other")
this.b=z},
p:{
jk:function(a,b){var z=new V.jj()
z.dw(a,!0)
return z}}},
jm:{"^":"l:13;a",
$1:function(a){P.eS(C.m,new V.jl(this.a))}},
jl:{"^":"l:0;a",
$0:function(){var z,y,x
z=C.d.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.h(-0.01*z)+"px"
y.top=x}},
jn:{"^":"l:49;a",
$1:function(a){return H.e(a,"$isaR").a===this.a}},
jw:{"^":"b;a,b,0c,d",
a1:function(a,b,c){var z,y,x,w,v,u
z=W.eb(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bm(this.c)
x=y.gk(y)
y=W.a9
W.Y(z,"click",H.j(new V.jy(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bm(this.c).h(0,z)
J.bm(this.c).h(0,document.createElement("br"))
w=P.cr().gaV().m(0,H.h(this.a))
if(w==null){this.aM(x)
v=c}else{u=P.bN(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.a1(a,b,!1)},
aM:function(a){var z,y,x,w,v
z=P.cr()
y=P.d
x=P.em(z.gaV(),y,y)
x.n(0,this.a,H.h(a))
w=z.bV(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fA([],[]).b8(""),"",v)}},
jy:{"^":"l:50;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isa9")
z=this.a
y=J.bm(z.c)
y.D(y,new V.jx())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aM(this.d)}},
jx:{"^":"l:51;",
$1:function(a){var z
H.e(a,"$isJ")
if(!!J.G(a).$iscP){z=a.style
z.border="solid 2px white"}}}}],["","",,T,{"^":"",
h5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.jk("Test 008",!0)
y=W.cM(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.d]
z.cD(H.c(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],x))
z.eE(H.c(["bumpMaps","scalars"],x))
z.cD(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.P(P.a4("Failed to find an element with the identifier, testCanvas."))
v=E.jD(w,!0,!0,!0,!1)
u=F.mM(50,null,50)
t=u.e
if(!(t==null))++t.d
u.d.bF()
u.a.bF()
t=u.e
if(!(t==null))t.aW(0)
t=u.e
if(!(t==null))++t.d
u.d.bD()
u.a.bD()
t=u.e
if(!(t==null))t.aW(0)
u.d.fB()
for(s=u.a.c.length-1;s>=0;--s){t=u.a.c
if(s>=t.length)return H.i(t,s)
r=t[s]
if(r.ch!==0){r.ch=0
t=r.a
if(t!=null){t=t.e
if(!(t==null))t.C(null)}}q=r.eM()
if(q.ch!==1){q.ch=1
t=q.a
if(t!=null){t=t.e
if(!(t==null))t.C(null)}}u.a.h(0,q)
t=u.c
t.a.a.h(0,r)
t.a.a.h(0,q)
t=new F.cX()
p=r.a
if(p==null)H.P(P.a4("May not create a line with a start vertex which is not attached to a shape."))
o=q.a
if(p==null?o!=null:p!==o)H.P(P.a4("May not create a line with vertices attached to different shapes."))
t.a=r
C.a.h(r.c.b,t)
t.b=q
C.a.h(q.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.C(null)}n=new T.hx()
n.c=1
n.sa4(0.5)
m=E.e7(null,!0,null,"",null,null)
m.sc3(0,u)
m.sd3(n)
l=E.e7(null,!0,null,"",null,null)
l.y.h(0,m)
t=new U.ea()
t.c6(U.ac)
t.bc(t.ge2(),t.gej())
t.e=null
t.f=V.cg()
t.r=0
p=v.r
o=new U.ka()
k=U.cN()
k.sc0(0,!0)
k.sbO(6.283185307179586)
k.sbQ(0)
k.sa2(0,0)
k.sbP(100)
k.sR(0)
k.sbJ(0.5)
o.b=k
j=o.gat()
k.gv().h(0,j)
k=U.cN()
k.sc0(0,!0)
k.sbO(6.283185307179586)
k.sbQ(0)
k.sa2(0,0)
k.sbP(100)
k.sR(0)
k.sbJ(0.5)
o.c=k
k.gv().h(0,j)
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
i=new X.ax(!1,!1,!1)
h=o.d
o.d=i
k=[X.ax]
j=new D.Q("modifiers",h,i,o,k)
j.b=!0
o.P(j)
j=o.f
if(j!==!1){o.f=!1
j=new D.Q("invertX",j,!1,o,[P.R])
j.b=!0
o.P(j)}j=o.r
if(j!==!0){o.r=!0
j=new D.Q("invertY",j,!0,o,[P.R])
j.b=!0
o.P(j)}o.aN(p)
t.h(0,o)
p=v.r
o=new U.k9()
j=U.cN()
j.sc0(0,!0)
j.sbO(6.283185307179586)
j.sbQ(0)
j.sa2(0,0)
j.sbP(100)
j.sR(0)
j.sbJ(0.2)
o.b=j
j.gv().h(0,o.gat())
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
i=new X.ax(!0,!1,!1)
h=o.c
o.c=i
j=new D.Q("modifiers",h,i,o,k)
j.b=!0
o.P(j)
o.aN(p)
t.h(0,o)
p=v.r
o=new U.kb()
o.c=0.01
o.d=0
o.e=0
i=new X.ax(!1,!1,!1)
o.b=i
k=new D.Q("modifiers",null,i,o,k)
k.b=!0
o.P(k)
o.aN(p)
t.h(0,o)
l.saS(t)
t=new M.hX()
p=O.dU(E.aE)
t.d=p
p.bc(t.ge4(),t.ge5())
t.e=null
t.f=null
t.r=null
t.x=null
g=new X.iK()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saS(null)
p=g.c
if(!$.t.$2(p,1.0471975511965976)){h=g.c
g.c=1.0471975511965976
p=new D.Q("fov",h,1.0471975511965976,g,[P.y])
p.b=!0
g.aI(p)}p=g.d
if(!$.t.$2(p,0.1)){h=g.d
g.d=0.1
p=new D.Q("near",h,0.1,g,[P.y])
p.b=!0
g.aI(p)}p=g.e
if(!$.t.$2(p,2000)){h=g.e
g.e=2000
p=new D.Q("far",h,2000,g,[P.y])
p.b=!0
g.aI(p)}p=t.a
if(p!==g){if(p!=null)p.gv().T(0,t.gaq())
h=t.a
t.a=g
g.gv().h(0,t.gaq())
p=new D.Q("camera",h,t.a,t,[X.dQ])
p.b=!0
t.aH(p)}f=new X.i4()
p=new V.c7(0,0,0,1)
f.a=p
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
p=V.eE(0,0,1,1)
f.r=p
p=t.b
if(p!==f){if(p!=null)p.gv().T(0,t.gaq())
h=t.b
t.b=f
f.gv().h(0,t.gaq())
p=new D.Q("target",h,t.b,t,[X.eN])
p.b=!0
t.aH(p)}t.d.h(0,l)
p=t.a
e=V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
o=new U.dV()
o.a=e
p.saS(o)
p=v.d
if(p!==t){if(p!=null)p.gv().T(0,v.gc7())
v.d=t
t.gv().h(0,v.gc7())
v.dB()}t=new V.jw("bumpMaps",!0,new T.mZ(n,v))
p=x.getElementById("bumpMaps")
t.c=p
if(p==null)H.P("Failed to find bumpMaps for Texture2DGroup")
t.a1(0,"../resources/BumpMap1.png",!0)
t.h(0,"../resources/BumpMap2.png")
t.h(0,"../resources/BumpMap3.png")
t.h(0,"../resources/BumpMap4.png")
t.h(0,"../resources/BumpMap5.png")
t.h(0,"../resources/ScrewBumpMap.png")
t.h(0,"../resources/CtrlPnlBumpMap.png")
t=new V.iY("scalars",!0)
x=x.getElementById("scalars")
t.c=x
if(x==null)H.P("Failed to find scalars for RadioGroup")
t.a1(0,"0.1",new T.n_(n))
t.a1(0,"0.2",new T.n0(n))
t.a1(0,"0.3",new T.n2(n))
t.a1(0,"0.4",new T.n3(n))
t.cA(0,"0.5",new T.n4(n),!0)
t.a1(0,"0.6",new T.n5(n))
t.a1(0,"0.7",new T.n6(n))
t.a1(0,"0.8",new T.n7(n))
t.a1(0,"0.9",new T.n8(n))
t.a1(0,"1.0",new T.n9(n))
x=v.z
if(x==null){x=D.L()
v.z=x}t={func:1,ret:-1,args:[D.x]}
p=H.j(new T.n1(z,n),t)
o=x.b
if(o==null){t=H.c([],[t])
x.b=t
x=t}else x=o
C.a.h(x,p)
V.ng(v)},
hu:{"^":"eG;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y"},
hx:{"^":"d9;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z},
by:[function(a){var z
H.e(a,"$isx")
z=this.d
if(!(z==null))z.C(a)},function(){return this.by(null)},"hi","$1","$0","gcv",0,2,2],
sa4:function(a){var z,y
z=this.c
if(!$.t.$2(z,a)){y=this.c
this.c=a
z=new D.Q("offsetScalar",y,a,this,[P.y])
z.b=!0
this.by(z)}}},
mZ:{"^":"l:14;a,b",
$1:function(a){var z,y,x,w
z=this.a
y=this.b.f.fc(a)
x=z.b
if(x!==y){if(x!=null)x.gv().T(0,z.gcv())
w=z.b
z.b=y
y.gv().h(0,z.gcv())
y=new D.Q("bumpyTexture",w,z.b,z,[T.eQ])
y.b=!0
z.by(y)}}},
n_:{"^":"l:0;a",
$0:function(){this.a.sa4(0.1)}},
n0:{"^":"l:0;a",
$0:function(){this.a.sa4(0.2)}},
n2:{"^":"l:0;a",
$0:function(){this.a.sa4(0.3)}},
n3:{"^":"l:0;a",
$0:function(){this.a.sa4(0.4)}},
n4:{"^":"l:0;a",
$0:function(){this.a.sa4(0.5)}},
n5:{"^":"l:0;a",
$0:function(){this.a.sa4(0.6)}},
n6:{"^":"l:0;a",
$0:function(){this.a.sa4(0.7)}},
n7:{"^":"l:0;a",
$0:function(){this.a.sa4(0.8)}},
n8:{"^":"l:0;a",
$0:function(){this.a.sa4(0.9)}},
n9:{"^":"l:0;a",
$0:function(){this.a.sa4(1)}},
n1:{"^":"l:9;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.d]
z.cB("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.cB("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.G=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eh.prototype
return J.eg.prototype}if(typeof a=="string")return J.cc.prototype
if(a==null)return J.ei.prototype
if(typeof a=="boolean")return J.ie.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.aC=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.bL=function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.mK=function(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cp.prototype
return a}
J.bM=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cp.prototype
return a}
J.as=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.b)return a
return J.cB(a)}
J.W=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).u(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mK(a).M(a,b)}
J.dC=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h2(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).m(a,b)}
J.cF=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h2(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.bL(a).n(a,b,c)}
J.hc=function(a,b){return J.bM(a).B(a,b)}
J.hd=function(a,b,c){return J.as(a).eo(a,b,c)}
J.he=function(a,b,c,d){return J.as(a).cC(a,b,c,d)}
J.hf=function(a,b){return J.bM(a).U(a,b)}
J.cG=function(a,b,c){return J.aC(a).eL(a,b,c)}
J.c3=function(a,b){return J.bL(a).F(a,b)}
J.hg=function(a,b,c,d){return J.bL(a).am(a,b,c,d)}
J.dD=function(a,b){return J.bL(a).D(a,b)}
J.hh=function(a){return J.as(a).geI(a)}
J.bm=function(a){return J.as(a).gbG(a)}
J.bP=function(a){return J.G(a).gS(a)}
J.aQ=function(a){return J.bL(a).gV(a)}
J.ah=function(a){return J.aC(a).gk(a)}
J.hi=function(a){return J.as(a).gbT(a)}
J.hj=function(a){return J.as(a).gfK(a)}
J.dE=function(a){return J.bL(a).fA(a)}
J.hk=function(a,b){return J.as(a).fD(a,b)}
J.hl=function(a,b){return J.as(a).sX(a,b)}
J.hm=function(a,b,c){return J.bM(a).q(a,b,c)}
J.hn=function(a){return J.bM(a).fR(a)}
J.a6=function(a){return J.G(a).i(a)}
I.a2=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c5.prototype
C.h=W.cL.prototype
C.H=W.b_.prototype
C.K=J.n.prototype
C.a=J.b1.prototype
C.L=J.eg.prototype
C.c=J.eh.prototype
C.M=J.ei.prototype
C.d=J.cb.prototype
C.b=J.cc.prototype
C.T=J.bW.prototype
C.Z=H.d4.prototype
C.a_=W.iF.prototype
C.z=J.iL.prototype
C.a0=P.d5.prototype
C.A=W.ju.prototype
C.p=J.cp.prototype
C.B=W.bD.prototype
C.C=W.ku.prototype
C.E=new P.hs(!1)
C.D=new P.hr(C.E)
C.F=new P.iJ()
C.G=new P.kj()
C.e=new P.lh()
C.m=new P.bp(0)
C.I=new P.bp(5e6)
C.J=new P.i8("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=H.c(I.a2([127,2047,65535,1114111]),[P.m])
C.i=H.c(I.a2([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.c(I.a2(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.j=H.c(I.a2([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.k=H.c(I.a2([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.c(I.a2(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.v=H.c(I.a2([]),[P.d])
C.W=H.c(I.a2([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.w=H.c(I.a2([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.l=H.c(I.a2([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.c(I.a2([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.c(I.a2([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.c(I.a2([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.n=H.c(I.a2(["bind","if","ref","repeat","syntax"]),[P.d])
C.o=H.c(I.a2(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Y=new H.hI(0,{},C.v,[P.d,P.d])
C.f=new P.kc(!1)
$.av=0
$.bo=null
$.dL=null
$.dn=!1
$.h0=null
$.fW=null
$.h8=null
$.cz=null
$.cD=null
$.dw=null
$.bh=null
$.bH=null
$.bI=null
$.dp=!1
$.O=C.e
$.aD=null
$.cO=null
$.e6=null
$.e5=null
$.e1=null
$.e0=null
$.e_=null
$.dZ=null
$.t=V.iz()
$.ey=null
$.hw="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.hv="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
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
I.$lazy(y,x,w)}})(["dY","$get$dY",function(){return H.h_("_$dart_dartClosure")},"cU","$get$cU",function(){return H.h_("_$dart_js")},"eY","$get$eY",function(){return H.az(H.cn({
toString:function(){return"$receiver$"}}))},"eZ","$get$eZ",function(){return H.az(H.cn({$method$:null,
toString:function(){return"$receiver$"}}))},"f_","$get$f_",function(){return H.az(H.cn(null))},"f0","$get$f0",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.az(H.cn(void 0))},"f5","$get$f5",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f2","$get$f2",function(){return H.az(H.f3(null))},"f1","$get$f1",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"f7","$get$f7",function(){return H.az(H.f3(void 0))},"f6","$get$f6",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.kv()},"bJ","$get$bJ",function(){return[]},"fe","$get$fe",function(){return P.kg()},"fm","$get$fm",function(){return H.iD(H.cw(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fL","$get$fL",function(){return P.j4("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fS","$get$fS",function(){return P.mm()},"dW","$get$dW",function(){return{}},"fq","$get$fq",function(){return P.en(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"dj","$get$dj",function(){return P.cY(P.d,P.bU)},"fh","$get$fh",function(){return Z.ak(0)},"ff","$get$ff",function(){return Z.ak(511)},"aK","$get$aK",function(){return Z.ak(1)},"aJ","$get$aJ",function(){return Z.ak(2)},"aI","$get$aI",function(){return Z.ak(4)},"aL","$get$aL",function(){return Z.ak(8)},"bf","$get$bf",function(){return Z.ak(16)},"bB","$get$bB",function(){return Z.ak(32)},"bC","$get$bC",function(){return Z.ak(64)},"fg","$get$fg",function(){return Z.ak(96)},"aM","$get$aM",function(){return Z.ak(128)},"be","$get$be",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[P.m,[P.k,E.aE]]},{func:1,ret:P.F,args:[D.x]},{func:1,ret:P.F,args:[F.an]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.F,args:[W.a7]},{func:1,ret:P.F,args:[P.d]},{func:1,ret:P.d,args:[P.m]},{func:1,args:[,]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.R,args:[W.ay]},{func:1,ret:P.R,args:[W.C]},{func:1,ret:W.C},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[P.m,[P.k,U.ac]]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.y},{func:1,ret:P.R,args:[W.J,P.d,P.d,W.c_]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:-1,args:[P.d,P.m]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.J,args:[W.C]},{func:1,args:[P.d]},{func:1,ret:-1,args:[P.b],opt:[P.ap]},{func:1,ret:P.F,args:[P.d,,]},{func:1,ret:P.F,args:[P.a_]},{func:1,ret:P.R,args:[P.y,P.y]},{func:1,args:[,P.d]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.K,args:[P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.d],opt:[,]},{func:1,ret:P.m,args:[[P.f,P.m],P.m]},{func:1,ret:P.y,args:[P.y,P.y]},{func:1,ret:P.F,args:[F.bA,P.y,P.y]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.bb]},{func:1,ret:P.R,args:[V.aR]},{func:1,ret:P.F,args:[W.a9]},{func:1,ret:P.F,args:[W.J]},{func:1,ret:[P.H,P.d,P.d],args:[[P.H,P.d,P.d],P.d]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:[P.aN,,],args:[,]}]
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
if(x==y)H.nj(d||a)
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
Isolate.a2=a.a2
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
if(typeof dartMainRunner==="function")dartMainRunner(T.h5,[])
else T.h5([])})})()
//# sourceMappingURL=test.dart.js.map
