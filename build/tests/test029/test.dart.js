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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dy(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dz=function(){}
var dart=[["","",,H,{"^":"",nq:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dC==null){H.mK()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cd("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d2()]
if(v!=null)return v
v=H.mN(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.$get$d2(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
r:{"^":"b;",
u:function(a,b){return a===b},
gT:function(a){return H.bK(a)},
i:["eC",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hX:{"^":"r;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isac:1},
ed:{"^":"r;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isF:1},
d3:{"^":"r;",
gT:function(a){return 0},
i:["eD",function(a){return String(a)}]},
iD:{"^":"d3;"},
ce:{"^":"d3;"},
c9:{"^":"d3;",
i:function(a){var z=a[$.$get$dY()]
if(z==null)return this.eD(a)
return"JavaScript function for "+H.l(J.al(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscY:1},
b9:{"^":"r;$ti",
h:function(a,b){H.y(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.A("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.t(P.A("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
c5:function(a,b){var z,y
H.u(b,"$isj",[H.x(a,0)],"$asj")
if(!!a.fixed$length)H.t(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aX(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hP:function(a){return this.A(a,"")},
hH:function(a,b,c,d){var z,y,x
H.y(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aX(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bK:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
ax:function(a,b,c,d){var z
H.y(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.A("fill range"))
P.aP(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.G(0,1))a[z]=d},
b0:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.d0(a,"[","]")},
ga1:function(a){return new J.ax(a,a.length,0,[H.x(a,0)])},
gT:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cj(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.y(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.bC(H.d(a,[b]))},
bC:function(a){H.bw(a)
a.fixed$length=Array
return a}}},
np:{"^":"b9;$ti"},
ax:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c7:{"^":"r;",
ghO:function(a){return a===0?1/a<0:a<0},
iq:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
ct:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eq:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghO(a))return"-"+z
return z},
bb:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.A("Unexpected toString result: "+z))
x=J.aM(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ab(b))
return a*b},
bg:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dt(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dt(a,b)},
dt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aK:function(a,b){var z
if(a>0)z=this.dr(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fZ:function(a,b){if(b<0)throw H.a(H.ab(b))
return this.dr(a,b)},
dr:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.ab(b))
return a<b},
$isz:1,
$isa1:1},
ec:{"^":"c7;",$ism:1},
eb:{"^":"c7;"},
c8:{"^":"r;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.t(H.aL(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cj(b,null,null))
return a+b},
aT:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ab(b))
c=P.aP(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ab(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ag:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ab(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
af:function(a,b){return this.ag(a,b,0)},
t:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ab(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cw(b,null,null))
if(b>c)throw H.a(P.cw(b,null,null))
if(c>a.length)throw H.a(P.cw(c,null,null))
return a.substring(b,c)},
aC:function(a,b){return this.t(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i3:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
az:function(a,b){return this.i3(a,b," ")},
ed:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ec:function(a,b){return this.ed(a,b,0)},
hy:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.h0(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iset:1,
$isk:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.jh("No element")},
a4:{"^":"jV;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ascA:function(){return[P.m]},
$asw:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hG:{"^":"j;"},
ej:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aX(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ii:{"^":"j;a,b,$ti",
ga1:function(a){return new H.ij(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aw(this.a)},
I:function(a,b){return this.b.$1(J.cP(this.a,b))},
$asj:function(a,b){return[b]}},
ij:{"^":"d1;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asd1:function(a,b){return[b]}},
kq:{"^":"j;a,b,$ti",
ga1:function(a){return new H.kr(J.by(this.a),this.b,this.$ti)}},
kr:{"^":"d1;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cq:{"^":"b;$ti"},
cA:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.y(c,H.au(this,"cA",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){H.y(d,H.au(this,"cA",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jV:{"^":"cs+cA;"}}],["","",,H,{"^":"",
hr:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mF:function(a){return init.types[H.C(a)]},
fU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isE},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.al(a)
if(typeof z!=="string")throw H.a(H.ab(a))
return z},
bK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iN:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.I(a).$isce){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.aC(w,1)
r=H.dD(H.bw(H.b2(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iF:function(){if(!!self.location)return self.location.href
return},
ex:function(a){var z,y,x,w,v
H.bw(a)
z=J.aw(a)
if(typeof z!=="number")return z.ex()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iO:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ab(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aK(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ab(w))}return H.ex(z)},
ey:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ab(x))
if(x<0)throw H.a(H.ab(x))
if(x>65535)return H.iO(a)}return H.ex(a)},
iP:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ex()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cu:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aK(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iM:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iK:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iG:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iH:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iJ:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iL:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iI:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
n:function(a){throw H.a(H.ab(a))},
h:function(a,b){if(a==null)J.aw(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.C(J.aw(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cw(b,"index",null)},
mz:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
ab:function(a){return new P.aN(!0,a,null,null)},
ms:function(a){if(typeof a!=="number")throw H.a(H.ab(a))
return a},
a:function(a){var z
if(a==null)a=new P.es()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h2})
z.name=""}else z.toString=H.h2
return z},
h2:function(){return J.al(this.dartException)},
t:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aX(a))},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aK(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d4(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.er(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eQ()
u=$.$get$eR()
t=$.$get$eS()
s=$.$get$eT()
r=$.$get$eX()
q=$.$get$eY()
p=$.$get$eV()
$.$get$eU()
o=$.$get$f_()
n=$.$get$eZ()
m=v.ai(y)
if(m!=null)return z.$1(H.d4(H.O(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.d4(H.O(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.er(H.O(y),m))}}return z.$1(new H.jU(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eD()
return a},
bv:function(a){var z
if(a==null)return new H.fs(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fs(a)},
mC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mM:function(a,b,c,d,e,f){H.e(a,"$iscY")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mM)
a.$identity=z
return z},
hm:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iS(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cS(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.G()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dS(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mF,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dN:H.cT
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dS(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hj:function(a,b,c,d){var z=H.cT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hl(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hj(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.G()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ck("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.G()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ck("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hk:function(a,b,c,d){var z,y
z=H.cT
y=H.dN
switch(b?-1:a){case 0:throw H.a(H.j1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hl:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ck("self")
$.bz=z}y=$.dM
if(y==null){y=H.ck("receiver")
$.dM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hk(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aC
if(typeof y!=="number")return y.G()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.G()
$.aC=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bC(H.bw(b))
H.C(c)
y=!!J.I(d).$isc?J.bC(d):d
return H.hm(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.az(a,"String"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"double"))},
mR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"num"))},
fP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.az(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.az(a,"int"))},
fZ:function(a,b){throw H.a(H.az(a,H.O(b).substring(3)))},
mT:function(a,b){var z=J.aM(b)
throw H.a(H.hi(a,z.t(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fZ(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.mT(a,b)},
bw:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.az(a,"List"))},
fW:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.fZ(a,b)},
fQ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
cf:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fQ(J.I(a))
if(z==null)return!1
y=H.fT(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.cf(a,b))return a
z=H.ch(b)
y=H.az(a,z)
throw H.a(y)}finally{$.du=!1}},
dA:function(a,b){if(a!=null&&!H.dx(a,b))H.t(H.az(a,H.ch(b)))
return a},
fK:function(a){var z
if(a instanceof H.p){z=H.fQ(J.I(a))
if(z!=null)return H.ch(z)
return"Closure"}return H.bd(a)},
mY:function(a){throw H.a(new P.hw(H.O(a)))},
fR:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
od:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b2(b))},
aW:function(a,b,c,d){var z
H.O(c)
H.C(d)
z=H.bx(a["$as"+H.l(c)],H.b2(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.O(b)
H.C(c)
z=H.bx(a["$as"+H.l(b)],H.b2(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.b2(a)
return z==null?null:z[b]},
ch:function(a){var z=H.b3(a,null)
return z},
b3:function(a,b){var z,y
H.u(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dD(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.mi(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.u(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b3(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b3(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b3(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b3(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dD:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b3(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bX:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b2(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fN(H.bx(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.O(b)
H.bw(c)
H.O(d)
if(a==null)return a
z=H.bX(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dD(c,0,null)
throw H.a(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.av(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.av(a[y],b,c[y],d))return!1
return!0},
ob:function(a,b,c){return a.apply(b,H.bx(J.I(b)["$as"+H.l(c)],H.b2(b)))},
fV:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.fV(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.fV(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cf(a,b)}y=J.I(a).constructor
x=H.b2(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.av(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.az(a,H.ch(b)))
return a},
av:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.fT(a,b,c,d)
if('func' in a)return c.builtin$cls==="cY"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,x,d)
else if(H.av(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bx(w,z?a.slice(1):null)
return H.av(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ch(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fN(H.bx(r,z),b,u,d)},
fT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.av(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.av(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.av(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mQ(m,b,l,d)},
mQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.av(c[w],d,a[w],b))return!1}return!0},
oc:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mN:function(a){var z,y,x,w,v,u
z=H.O($.fS.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fM.$2(a,z))
if(z!=null){y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cM(x)
$.cI[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cL[z]=x
return x}if(v==="-"){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fY(a,x)
if(v==="*")throw H.a(P.cd(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fY(a,x)},
fY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dE(a,!1,null,!!a.$isE)},
mP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dE(z,c,null,null)},
mK:function(){if(!0===$.dC)return
$.dC=!0
H.mL()},
mL:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mG()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h_.$1(v)
if(u!=null){t=H.mP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mG:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.br(C.K,H.br(C.P,H.br(C.v,H.br(C.v,H.br(C.O,H.br(C.L,H.br(C.M(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fS=new H.mH(v)
$.fM=new H.mI(u)
$.h_=new H.mJ(t)},
br:function(a,b){return a(b)||b},
h0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hq:{"^":"b;$ti",
i:function(a){return P.d5(this)},
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
return H.hr()},
$isJ:1},
hs:{"^":"hq;a,b,c,$ti",
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.da(b)},
da:function(a){return this.b[H.O(a)]},
H:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.da(v),z))}}},
iR:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bC(z)
y=z[0]
x=z[1]
return new H.iR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jG:{"^":"b;a,b,c,d,e,f",
ai:function(a){var z,y,x
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
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eW:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iA:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
er:function(a,b){return new H.iA(a,b==null?null:b.method)}}},
i_:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jU:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n0:{"^":"p:16;a",
$1:function(a){if(!!J.I(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fs:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
p:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
geu:function(){return this},
$iscY:1,
geu:function(){return this}},
eH:{"^":"p;"},
ji:{"^":"eH;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cS:{"^":"eH;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bK(this.a)
else y=typeof z!=="object"?J.c_(z):H.bK(z)
return(y^H.bK(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cT:function(a){return a.a},
dN:function(a){return a.c},
ck:function(a){var z,y,x,w,v
z=new H.cS("self","target","receiver","name")
y=J.bC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jH:{"^":"a5;a",
i:function(a){return this.a},
p:{
az:function(a,b){return new H.jH("TypeError: "+H.l(P.cp(a))+": type '"+H.fK(a)+"' is not a subtype of type '"+b+"'")}}},
hh:{"^":"a5;a",
i:function(a){return this.a},
p:{
hi:function(a,b){return new H.hh("CastError: "+H.l(P.cp(a))+": type '"+H.fK(a)+"' is not a subtype of type '"+b+"'")}}},
j0:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j1:function(a){return new H.j0(a)}}},
aZ:{"^":"ie;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gao:function(a){return new H.i4(this,[H.x(this,0)])},
bo:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d7(y,b)}else return this.hL(b)},
hL:function(a){var z=this.d
if(z==null)return!1
return this.cz(this.bU(z,this.cw(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bi(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bi(w,b)
x=y==null?null:y.b
return x}else return this.hM(b)},
hM:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bU(z,this.cw(a))
x=this.cz(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bZ()
this.b=z}this.d0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bZ()
this.c=y}this.d0(y,b,c)}else this.hN(b,c)},
hN:function(a,b){var z,y,x,w
H.y(a,H.x(this,0))
H.y(b,H.x(this,1))
z=this.d
if(z==null){z=this.bZ()
this.d=z}y=this.cw(a)
x=this.bU(z,y)
if(x==null)this.c3(z,y,[this.c_(a,b)])
else{w=this.cz(x,a)
if(w>=0)x[w].b=b
else x.push(this.c_(a,b))}},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aX(this))
z=z.c}},
d0:function(a,b,c){var z
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
z=this.bi(a,b)
if(z==null)this.c3(a,b,this.c_(b,c))
else z.b=c},
f9:function(){this.r=this.r+1&67108863},
c_:function(a,b){var z,y
z=new H.i3(H.y(a,H.x(this,0)),H.y(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f9()
return z},
cw:function(a){return J.c_(a)&0x3ffffff},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.d5(this)},
bi:function(a,b){return a[b]},
bU:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
d7:function(a,b){return this.bi(a,b)!=null},
bZ:function(){var z=Object.create(null)
this.c3(z,"<non-identifier-key>",z)
this.f2(z,"<non-identifier-key>")
return z},
$iseh:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hG;a,$ti",
gl:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aX(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mH:{"^":"p:16;a",
$1:function(a){return this.a(a)}},
mI:{"^":"p:47;a",
$2:function(a,b){return this.a(a,b)}},
mJ:{"^":"p:28;a",
$1:function(a){return this.a(H.O(a))}},
hY:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iset:1,
$isiT:1,
p:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mB:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
iw:function(a){return new Int8Array(a)},
aK:function(a,b,c){H.bw(b)
if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
mc:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mz(a,b,c))
return b},
eq:{"^":"r;",$iseq:1,"%":"ArrayBuffer"},
da:{"^":"r;",$isda:1,$isjI:1,"%":"DataView;ArrayBufferView;d9|fm|fn|ix|fo|fp|b0"},
d9:{"^":"da;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dz},
ix:{"^":"fn;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mA(c)
H.aK(b,a,a.length)
a[b]=c},
$ascq:function(){return[P.z]},
$asw:function(){return[P.z]},
$isj:1,
$asj:function(){return[P.z]},
$isc:1,
$asc:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
b0:{"^":"fp;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aK(b,a,a.length)
a[b]=c},
$ascq:function(){return[P.m]},
$asw:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
ny:{"^":"b0;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nz:{"^":"b0;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nA:{"^":"b0;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nB:{"^":"b0;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nC:{"^":"b0;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nD:{"^":"b0;",
gl:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
db:{"^":"b0;",
gl:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
bK:function(a,b,c){return new Uint8Array(a.subarray(b,H.mc(b,c,a.length)))},
$isdb:1,
$isP:1,
"%":";Uint8Array"},
fm:{"^":"d9+w;"},
fn:{"^":"fm+cq;"},
fo:{"^":"d9+w;"},
fp:{"^":"fo+cq;"}}],["","",,P,{"^":"",
kt:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.kv(z),1)).observe(y,{childList:true})
return new P.ku(z,y,x)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
o0:[function(a){self.scheduleImmediate(H.bs(new P.kw(H.f(a,{func:1,ret:-1})),0))},"$1","mp",4,0,10],
o1:[function(a){self.setImmediate(H.bs(new P.kx(H.f(a,{func:1,ret:-1})),0))},"$1","mq",4,0,10],
o2:[function(a){P.dh(C.q,H.f(a,{func:1,ret:-1}))},"$1","mr",4,0,10],
dh:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.e.a5(a.a,1000)
return P.lx(z<0?0:z,b)},
eL:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bk]})
z=C.e.a5(a.a,1000)
return P.ly(z<0?0:z,b)},
ml:function(a,b){if(H.cf(a,{func:1,args:[P.b,P.ay]}))return b.ic(a,null,P.b,P.ay)
if(H.cf(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mk:function(){var z,y
for(;z=$.bq,z!=null;){$.bV=null
y=z.b
$.bq=y
if(y==null)$.bU=null
z.a.$0()}},
oa:[function(){$.dv=!0
try{P.mk()}finally{$.bV=null
$.dv=!1
if($.bq!=null)$.$get$dp().$1(P.fO())}},"$0","fO",0,0,3],
fJ:function(a){var z=new P.fg(H.f(a,{func:1,ret:-1}))
if($.bq==null){$.bU=z
$.bq=z
if(!$.dv)$.$get$dp().$1(P.fO())}else{$.bU.b=z
$.bU=z}},
mo:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fJ(a)
$.bV=$.bU
return}y=new P.fg(a)
x=$.bV
if(x==null){y.b=z
$.bV=y
$.bq=y}else{y.b=x.b
x.b=y
$.bV=y
if(y.b==null)$.bU=y}},
mU:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.U
if(C.j===y){P.cH(null,null,C.j,a)
return}y.toString
P.cH(null,null,y,H.f(y.ca(a),z))},
eK:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.f(y.ca(b),z))},
jD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.eL(a,b)}x=y.dC(b,P.bk)
$.U.toString
return P.eL(a,H.f(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.mo(new P.mm(z,e))},
fF:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fG:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
mn:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cH:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ca(d):c.hv(d,-1)
P.fJ(d)},
kv:{"^":"p:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ku:{"^":"p:46;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kw:{"^":"p:2;a",
$0:function(){this.a.$0()}},
kx:{"^":"p:2;a",
$0:function(){this.a.$0()}},
fv:{"^":"b;a,0b,c",
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.lA(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.lz(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lx:function(a,b){var z=new P.fv(!0,0)
z.eP(a,b)
return z},
ly:function(a,b){var z=new P.fv(!1,0)
z.eQ(a,b)
return z}}},
lA:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lz:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eG(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
hV:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.f(this.d,{func:1,ret:P.ac,args:[P.b]}),a.a,P.ac,P.b)},
hK:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cf(z,{func:1,args:[P.b,P.ay]}))return H.dA(w.il(z,a.a,a.b,null,y,P.ay),x)
else return H.dA(w.cN(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;ds:a<,b,0fR:c<,$ti",
ep:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ml(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.U,[c])
w=b==null?1:3
this.d1(new P.bo(x,w,a,b,[z,c]))
return x},
ip:function(a,b){return this.ep(a,null,b)},
d1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaU")
z=y.a
if(z<4){y.d1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.f(new P.kM(this,a),{func:1,ret:-1}))}},
dj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaU")
y=u.a
if(y<4){u.dj(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cH(null,null,y,H.f(new P.kR(z,this),{func:1,ret:-1}))}},
c1:function(){var z=H.e(this.c,"$isbo")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d4:function(a){var z,y,x,w
z=H.x(this,0)
H.dA(a,{futureOr:1,type:z})
y=this.$ti
x=H.bX(a,"$isbB",y,"$asbB")
if(x){z=H.bX(a,"$isaU",y,null)
if(z)P.fj(a,this)
else P.kN(a,this)}else{w=this.c1()
H.y(a,z)
this.a=4
this.c=a
P.bR(this,w)}},
bQ:[function(a,b){var z
H.e(b,"$isay")
z=this.c1()
this.a=8
this.c=new P.am(a,b)
P.bR(this,z)},function(a){return this.bQ(a,null)},"ix","$2","$1","geZ",4,2,29],
$isbB:1,
p:{
kN:function(a,b){var z,y,x
b.a=1
try{a.ep(new P.kO(b),new P.kP(b),null)}catch(x){z=H.aB(x)
y=H.bv(x)
P.mU(new P.kQ(b,z,y))}},
fj:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaU")
if(z>=4){y=b.c1()
b.a=a.a
b.c=a.c
P.bR(b,y)}else{y=H.e(b.c,"$isbo")
b.a=2
b.c=a
a.dj(y)}},
bR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cG(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cG(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kU(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kT(x,b,r).$0()}else if((y&2)!==0)new P.kS(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.I(y).$isbB){if(y.a>=4){n=H.e(t.c,"$isbo")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fj(y,t)
return}}m=b.b
n=H.e(m.c,"$isbo")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.y(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kM:{"^":"p:2;a,b",
$0:function(){P.bR(this.a,this.b)}},
kR:{"^":"p:2;a,b",
$0:function(){P.bR(this.b,this.a.a)}},
kO:{"^":"p:20;a",
$1:function(a){var z=this.a
z.a=0
z.d4(a)}},
kP:{"^":"p:26;a",
$2:function(a,b){this.a.bQ(a,H.e(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
kQ:{"^":"p:2;a,b,c",
$0:function(){this.a.bQ(this.b,this.c)}},
kU:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.em(H.f(w.d,{func:1}),null)}catch(v){y=H.aB(v)
x=H.bv(v)
if(this.d){w=H.e(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.I(z).$isbB){if(z instanceof P.aU&&z.gds()>=4){if(z.gds()===8){w=this.b
w.b=H.e(z.gfR(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ip(new P.kV(t),null)
w.a=!1}}},
kV:{"^":"p:33;a",
$1:function(a){return this.a}},
kT:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.y(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cN(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aB(t)
y=H.bv(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kS:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isam")
w=this.c
if(w.hV(z)&&w.e!=null){v=this.b
v.b=w.hK(z)
v.a=!1}}catch(u){y=H.aB(u)
x=H.bv(u)
w=H.e(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fg:{"^":"b;a,0b"},
de:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aU(0,$.U,[P.m])
z.a=0
this.hS(new P.jl(z,this),!0,new P.jm(z,y),y.geZ())
return y}},
jl:{"^":"p;a,b",
$1:function(a){H.y(a,H.au(this.b,"de",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.au(this.b,"de",0)]}}},
jm:{"^":"p:2;a,b",
$0:function(){this.b.d4(this.a.a)}},
eF:{"^":"b;$ti"},
jk:{"^":"b;"},
bk:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
m1:{"^":"b;",$iso_:1},
mm:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.es()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lf:{"^":"m1;",
im:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fF(null,null,this,a,-1)}catch(x){z=H.aB(x)
y=H.bv(x)
P.cG(null,null,this,z,H.e(y,"$isay"))}},
io:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fG(null,null,this,a,b,-1,c)}catch(x){z=H.aB(x)
y=H.bv(x)
P.cG(null,null,this,z,H.e(y,"$isay"))}},
hv:function(a,b){return new P.lh(this,H.f(a,{func:1,ret:b}),b)},
ca:function(a){return new P.lg(this,H.f(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.li(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
em:function(a,b){H.f(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fF(null,null,this,a,b)},
cN:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.U===C.j)return a.$1(b)
return P.fG(null,null,this,a,b,c,d)},
il:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.U===C.j)return a.$2(b,c)
return P.mn(null,null,this,a,b,c,d,e,f)},
ic:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lh:{"^":"p;a,b,c",
$0:function(){return this.a.em(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lg:{"^":"p:3;a,b",
$0:function(){return this.a.im(this.b)}},
li:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.io(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.aZ(0,0,[d,e])},
i7:function(a,b,c){H.bw(a)
return H.u(H.mC(a,new H.aZ(0,0,[b,c])),"$iseh",[b,c],"$aseh")},
ei:function(a,b){return new H.aZ(0,0,[a,b])},
ia:function(a,b,c,d){return new P.l1(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bW()
C.a.h(y,a)
try{P.mj(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eG(b,H.fW(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
d0:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$bW()
C.a.h(y,a)
try{x=z
x.a=P.eG(x.gaF(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bW(),z<y.length;++z)if(a===y[z])return!0
return!1},
mj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.l(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
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
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.H(0,new P.i9(z,b,c))
return z},
d5:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$bW(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.dI(a,new P.ig(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bW()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
l1:{"^":"kW;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fl(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.d2(y,b)}else return this.eS(0,b)},
eS:function(a,b){var z,y,x
H.y(b,H.x(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.d5(b)
x=z[y]
if(x==null)z[y]=[this.bP(b)]
else{if(this.dc(x,b)>=0)return!1
x.push(this.bP(b))}return!0},
U:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dk(this.c,b)
else return this.fJ(0,b)},
fJ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f6(z,b)
x=this.dc(y,b)
if(x<0)return!1
this.du(y.splice(x,1)[0])
return!0},
d2:function(a,b){H.y(b,H.x(this,0))
if(H.e(a[b],"$isdq")!=null)return!1
a[b]=this.bP(b)
return!0},
dk:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdq")
if(z==null)return!1
this.du(z)
delete a[b]
return!0},
d3:function(){this.r=this.r+1&67108863},
bP:function(a){var z,y
z=new P.dq(H.y(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d3()
return z},
du:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d3()},
d5:function(a){return J.c_(a)&0x3ffffff},
f6:function(a,b){return a[this.d5(b)]},
dc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
p:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
l2:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aX(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fl:function(a,b,c){var z=new P.l2(a,b,[c])
z.c=a.e
return z}}},
kW:{"^":"j2;"},
i9:{"^":"p:5;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cs:{"^":"l3;",$isj:1,$isc:1},
w:{"^":"b;$ti",
ga1:function(a){return new H.ej(a,this.gl(a),0,[H.aW(this,a,"w",0)])},
I:function(a,b){return this.j(a,b)},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aW(this,a,"w",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gl(a))throw H.a(P.aX(a))}},
is:function(a,b){var z,y,x
z=H.d([],[H.aW(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ir:function(a){return this.is(a,!0)},
ax:function(a,b,c,d){var z
H.y(d,H.aW(this,a,"w",0))
P.aP(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d0(a,"[","]")}},
ie:{"^":"ag;"},
ig:{"^":"p:5;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aW(this,a,"ag",0),H.aW(this,a,"ag",1)]})
for(z=J.by(this.gao(a));z.E();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.aw(this.gao(a))},
i:function(a){return P.d5(a)},
$isJ:1},
lF:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ih:{"^":"b;$ti",
j:function(a,b){return J.dH(this.a,b)},
m:function(a,b,c){J.cN(this.a,H.y(b,H.x(this,0)),H.y(c,H.x(this,1)))},
H:function(a,b){J.dI(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.aw(this.a)},
i:function(a){return J.al(this.a)},
$isJ:1},
f6:{"^":"lG;a,$ti"},
j4:{"^":"b;$ti",
i:function(a){return P.d0(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dJ("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.fl(this,this.r,H.x(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
j2:{"^":"j4;"},
l3:{"^":"b+w;"},
lG:{"^":"ih+lF;$ti"}}],["","",,P,{"^":"",he:{"^":"c1;a",
hZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aP(c,d,b.length,null,null,null)
z=$.$get$fh()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cK(C.b.F(b,s))
o=H.cK(C.b.F(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
w.a+=C.b.t(b,x,y)
w.a+=H.cu(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dL(b,u,d,v,t,k)
else{j=C.e.bg(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aT(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dL(b,u,d,v,t,i)
else{j=C.e.bg(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aT(b,d,d,j===2?"==":"=")}return b},
$asc1:function(){return[[P.c,P.m],P.k]},
p:{
dL:function(a,b,c,d,e,f){if(C.e.bg(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hf:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.k]}},c1:{"^":"b;$ti"},bA:{"^":"jk;$ti"},hI:{"^":"c1;",
$asc1:function(){return[P.k,[P.c,P.m]]}},k7:{"^":"hI;a",
ghE:function(){return C.G}},ke:{"^":"bA;",
b1:function(a,b,c){var z,y,x,w
z=a.length
P.aP(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m0(0,0,x)
if(w.f4(a,b,z)!==z)w.dw(J.h7(a,z-1),0)
return C.W.bK(x,0,w.b)},
ci:function(a){return this.b1(a,0,null)},
$asbA:function(){return[P.k,[P.c,P.m]]}},m0:{"^":"b;a,b,c",
dw:function(a,b){var z,y,x,w,v
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
f4:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dw(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k8:{"^":"bA;a",
b1:function(a,b,c){var z,y,x,w,v
H.u(a,"$isc",[P.m],"$asc")
z=P.k9(!1,a,b,c)
if(z!=null)return z
y=J.aw(a)
P.aP(b,c,y,null,null,null)
x=new P.aq("")
w=new P.lY(!1,x,!0,0,0,0)
w.b1(a,b,y)
w.hG(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
ci:function(a){return this.b1(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.k]},
p:{
k9:function(a,b,c,d){H.u(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.ka(!1,b,c,d)
return},
ka:function(a,b,c,d){var z,y,x
z=$.$get$fb()
if(z==null)return
y=0===c
if(y&&!0)return P.dl(z,b)
x=b.length
d=P.aP(c,d,x,null,null,null)
if(y&&d===x)return P.dl(z,b)
return P.dl(z,b.subarray(c,d))},
dl:function(a,b){if(P.kc(b))return
return P.kd(a,b)},
kd:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aB(y)}return},
kc:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kb:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aB(y)}return}}},lY:{"^":"b;a,b,c,d,e,f",
hG:function(a,b,c){var z
H.u(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m_(c)
v=new P.lZ(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.e.bb(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.x,q)
if(z<=C.x[q]){q=P.Y("Overlong encoding of 0x"+C.e.bb(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.e.bb(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cu(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cU()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.e.bb(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.e.bb(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m_:{"^":"p:41;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lZ:{"^":"p:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cb(this.d,a,b)}}}],["","",,P,{"^":"",
bY:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.k]})
z=H.iN(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hK:function(a){var z=J.I(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
ib:function(a,b,c,d){var z,y
H.y(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.u(z,"$isc",[d],"$asc")},
ek:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga1(a);x.E();)C.a.h(y,H.y(x.gO(x),c))
if(b)return y
return H.u(J.bC(y),"$isc",z,"$asc")},
cb:function(a,b,c){var z,y
z=P.m
H.u(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aP(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.ey(z?C.a.bK(a,b,c):a)}if(!!J.I(a).$isdb)return H.iP(a,b,P.aP(b,c,a.length,null,null,null))
return P.jn(a,b,c)},
jn:function(a,b,c){var z,y,x,w
H.u(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a0(b,0,J.aw(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.aw(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gO(y))}return H.ey(w)},
iU:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
f8:function(){var z=H.iF()
if(z!=null)return P.k_(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
v:function(a){return new P.fi(a)},
ic:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dF:function(a){H.mS(a)},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f7(b>0||c<c?C.b.t(a,b,c):a,5,null).ger()
else if(y===32)return P.f7(C.b.t(a,z,c),0,null).ger()}x=new Array(8)
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
if(P.fH(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iu()
if(v>=b)if(P.fH(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ag(a,"..",s)))n=r>s+2&&C.b.ag(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ag(a,"file",b)){if(u<=b){if(!C.b.ag(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aT(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ag(a,"http",b)){if(x&&t+3===s&&C.b.ag(a,"80",t+1))if(b===0&&!0){a=C.b.aT(a,t,s,"")
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
else if(v===z&&C.b.ag(a,"https",b)){if(x&&t+4===s&&C.b.ag(a,"443",t+1))if(b===0&&!0){a=C.b.aT(a,t,s,"")
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
q-=b}return new P.lk(a,v,u,t,s,r,q,o)}return P.lH(a,b,c,v,u,t,s,r,q,o)},
fa:function(a,b){var z=P.k
return C.a.hH(H.d(a.split("&"),[z]),P.ei(z,z),new P.k2(b),[P.J,P.k,P.k])},
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jZ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bY(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bY(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k0(a)
y=new P.k1(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jY(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.e.aK(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
md:function(){var z,y,x,w,v
z=P.ic(22,new P.mf(),!0,P.P)
y=new P.me(z)
x=new P.mg()
w=new P.mh()
v=H.e(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isP"),"]",5)
v=H.e(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isP"),"az",21)
v=H.e(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fH:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isc",[P.m],"$asc")
z=$.$get$fI()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ac:{"^":"b;"},
"+bool":0,
ao:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.e.aK(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hx(H.iM(this))
y=P.c2(H.iK(this))
x=P.c2(H.iG(this))
w=P.c2(H.iH(this))
v=P.c2(H.iJ(this))
u=P.c2(H.iL(this))
t=P.hy(H.iI(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hx:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c2:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"a1;"},
"+double":0,
b5:{"^":"b;a",
k:function(a,b){return new P.b5(C.e.Y(this.a*b))},
K:function(a,b){return C.e.K(this.a,H.e(b,"$isb5").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b5))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b5(0-y).i(0)
x=z.$1(C.e.a5(y,6e7)%60)
w=z.$1(C.e.a5(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.e.a5(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e4:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"p:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"p:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
es:{"^":"a5;",
i:function(a){return"Throw of null."}},
aN:{"^":"a5;a,b,c,d",
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbS()+y+x
if(!this.a)return w
v=this.gbR()
u=P.cp(this.b)
return w+v+": "+H.l(u)},
p:{
c0:function(a){return new P.aN(!1,null,null,a)},
cj:function(a,b,c){return new P.aN(!0,a,b,c)},
dJ:function(a){return new P.aN(!1,null,a,"Must not be null")}}},
cv:{"^":"aN;e,f,a,b,c,d",
gbS:function(){return"RangeError"},
gbR:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
aP:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hT:{"^":"aN;e,l:f>,a,b,c,d",
gbS:function(){return"RangeError"},
gbR:function(){if(J.h3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.aw(b))
return new P.hT(b,z,!0,a,c,"Index out of range")}}},
jW:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jW(a)}}},
jT:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cd:function(a){return new P.jT(a)}}},
jh:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hp:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cp(z))+"."},
p:{
aX:function(a){return new P.hp(a)}}},
iB:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eD:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hw:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fi:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
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
m=""}l=C.b.t(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"a1;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga1(this)
for(y=0;z.E();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dJ("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hU(this,"(",")")}},
d1:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
F:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bK(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"b;"},
k:{"^":"b;",$iset:1},
"+String":0,
aq:{"^":"b;aF:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnP:1,
p:{
eG:function(a,b,c){var z=J.by(b)
if(!z.E())return a
if(c.length===0){do a+=H.l(z.gO(z))
while(z.E())}else{a+=H.l(z.gO(z))
for(;z.E();)a=a+c+H.l(z.gO(z))}return a}}},
k2:{"^":"p:39;a",
$2:function(a,b){var z,y,x,w
z=P.k
H.u(a,"$isJ",[z,z],"$asJ")
H.O(b)
y=J.aM(b).ec(b,"=")
if(y===-1){if(b!=="")J.cN(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.aC(b,y+1)
z=this.a
J.cN(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
jZ:{"^":"p:27;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
k0:{"^":"p:38;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k1:{"^":"p:36;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bY(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cE:{"^":"b;bI:a<,b,c,d,ej:e>,f,r,0x,0y,0z,0Q,0ch",
ges:function(){return this.b},
gcu:function(a){var z=this.c
if(z==null)return""
if(C.b.af(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbC:function(a){var z=this.d
if(z==null)return P.fx(this.a)
return z},
gcH:function(a){var z=this.f
return z==null?"":z},
ge6:function(){var z=this.r
return z==null?"":z},
cM:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isJ",[P.k,null],"$asJ")
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
if(x&&!C.b.af(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
return new P.cE(i,j,c,f,d,g,this.r)},
el:function(a,b){return this.cM(a,null,null,null,null,null,null,b,null,null)},
gcI:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.k
y=new P.f6(P.fa(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ge7:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge8:function(){return this.r!=null},
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdk){y=this.a
x=b.gbI()
if(y==null?x==null:y===x)if(this.c!=null===b.ge7()){y=this.b
x=b.ges()
if(y==null?x==null:y===x){y=this.gcu(this)
x=z.gcu(b)
if(y==null?x==null:y===x){y=this.gbC(this)
x=z.gbC(b)
if(y==null?x==null:y===x)if(this.e===z.gej(b)){y=this.f
x=y==null
if(!x===b.gea()){if(x)y=""
if(y===z.gcH(b)){z=this.r
y=z==null
if(!y===b.ge8()){if(y)z=""
z=z===b.ge6()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdk:1,
p:{
cF:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fC().b
if(typeof b!=="string")H.t(H.ab(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.au(c,"c1",0))
y=c.ghE().ci(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cu(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lH:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lS(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lT(a,z,e-1):""
x=P.lM(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lP(P.bY(C.b.t(a,w,g),new P.lI(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lN(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cE(j,y,x,v,u,t,i<c?P.lL(a,i+1,c):null)},
fx:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.a(P.Y(c,a,b))},
lP:function(a,b){if(a!=null&&a===P.fx(b))return
return a},
lM:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.X(a,z)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
P.f9(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.f9(a,b,c)
return"["+a+"]"}return P.lV(a,b,c)},
lV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fE(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.y,t)
t=(C.y[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bS(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fy(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lS:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fA(C.b.F(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bS(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lJ(y?a.toLowerCase():a)},
lJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lT:function(a,b,c){return P.bT(a,b,c,C.S)},
lN:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bT(a,b,c,C.z):C.u.j7(d,new P.lO(),P.k).A(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.af(w,"/"))w="/"+w
return P.lU(w,e,f)},
lU:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.af(a,"/"))return P.lW(a,!z||c)
return P.lX(a)},
ds:function(a,b,c,d){var z,y
z={}
H.u(d,"$isJ",[P.k,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c0("Both query and queryParameters specified"))
return P.bT(a,b,c,C.n)}if(d==null)return
y=new P.aq("")
z.a=""
d.H(0,new P.lQ(new P.lR(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lL:function(a,b,c){return P.bT(a,b,c,C.n)},
fE:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aK(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cu(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fy:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.e.fZ(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.cb(y,0,null)},
bT:function(a,b,c,d){var z=P.fD(a,b,c,H.u(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.t(a,b,c):z},
fD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fE(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bS(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fy(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.t(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fB:function(a){if(C.b.af(a,"."))return!0
return C.b.ec(a,"/.")!==-1},
lX:function(a){var z,y,x,w,v,u,t
if(!P.fB(a))return a
z=H.d([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.A(z,"/")},
lW:function(a,b){var z,y,x,w,v,u
if(!P.fB(a))return!b?P.fz(a):a
z=H.d([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fz(z[0]))}return C.a.A(z,"/")},
fz:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fA(J.h4(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.aC(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lK:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c0("Invalid URL encoding"))}}return z},
dt:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dB(a)
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
else u=new H.a4(y.t(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.c0("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c0("Truncated URI"))
C.a.h(u,P.lK(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isc",[P.m],"$asc")
return new P.k8(!1).ci(u)},
fA:function(a){var z=a|32
return 97<=z&&z<=122}}},
lI:{"^":"p:19;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lO:{"^":"p:30;",
$1:function(a){return P.cF(C.U,a,C.k,!1)}},
lR:{"^":"p:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cF(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cF(C.p,b,C.k,!0))}}},
lQ:{"^":"p:51;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.by(H.fW(b,"$isj")),y=this.a;z.E();)y.$2(a,H.O(z.gO(z)))}},
jX:{"^":"b;a,b,c",
ger:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.ed(y,"?",z)
w=y.length
if(x>=0){v=P.bT(y,x+1,w,C.n)
w=x}else v=null
z=new P.kC(this,"data",null,null,null,P.bT(y,z,w,C.z),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f7:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.ag(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.hZ(0,a,s,y)
else{r=P.fD(a,s,y,C.n,!0)
if(r!=null)a=C.b.aT(a,s,y,r)}return new P.jX(a,z,c)}}},
mf:{"^":"p:40;",
$1:function(a){return new Uint8Array(96)}},
me:{"^":"p:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.h8(z,0,96,b)
return z}},
mg:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mh:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lk:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge7:function(){return this.c>0},
ge9:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gea:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
ge8:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.af(this.a,"http")},
gdf:function(){return this.b===5&&C.b.af(this.a,"https")},
gbI:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gde()){this.x="http"
z="http"}else if(this.gdf()){this.x="https"
z="https"}else if(z===4&&C.b.af(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.af(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
ges:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcu:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbC:function(a){var z
if(this.ge9()){z=this.d
if(typeof z!=="number")return z.G()
return P.bY(C.b.t(this.a,z+1,this.e),null,null)}if(this.gde())return 80
if(this.gdf())return 443
return 0},
gej:function(a){return C.b.t(this.a,this.e,this.f)},
gcH:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.t(this.a,z+1,y):""},
ge6:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aC(y,z+1):""},
gcI:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.V
z=P.k
return new P.f6(P.fa(this.gcH(this),C.k),[z,z])},
cM:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isJ",[P.k,null],"$asJ")
i=this.gbI()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.ge9()?this.gbC(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.af(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aC(y,x+1)
return new P.cE(i,j,c,f,d,g,b)},
el:function(a,b){return this.cM(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdk)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdk:1},
kC:{"^":"cE;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cV:function(a,b){var z=document.createElement("canvas")
return z},
hH:function(a){H.e(a,"$isad")
return"wheel"},
d_:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fk:function(a,b,c,d){var z,y
z=W.cC(W.cC(W.cC(W.cC(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fL:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dC(a,b)},
b8:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n2:{"^":"r;0l:length=","%":"AccessibleNodeList"},
n3:{"^":"b8;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n4:{"^":"b8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cR:{"^":"r;",$iscR:1,"%":";Blob"},
cU:{"^":"b8;",
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.mt(c,null))
return a.getContext(b)},
ev:function(a,b){return this.bH(a,b,null)},
$iscU:1,
"%":"HTMLCanvasElement"},
dQ:{"^":"r;",$isdQ:1,"%":"CanvasRenderingContext2D"},
na:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nc:{"^":"hv;0l:length=","%":"CSSPerspective"},
b4:{"^":"r;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nd:{"^":"kB;0l:length=",
ew:function(a,b){var z=a.getPropertyValue(this.eW(a,b))
return z==null?"":z},
eW:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.h_(a,b)
z[b]=y
return y},
h_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hz()+b
if(z in a)return z
return b},
gcb:function(a){return a.bottom},
ga9:function(a){return a.height},
gaR:function(a){return a.left},
gb8:function(a){return a.right},
gbd:function(a){return a.top},
gae:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hu:{"^":"b;",
gaR:function(a){return this.ew(a,"left")}},
dX:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hv:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ne:{"^":"dX;0l:length=","%":"CSSTransformValue"},
nf:{"^":"dX;0l:length=","%":"CSSUnparsedValue"},
ng:{"^":"r;0l:length=","%":"DataTransferItemList"},
nh:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
ni:{"^":"kE;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.u(c,"$isa6",[P.a1],"$asa6")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a6,P.a1]]},
$asw:function(){return[[P.a6,P.a1]]},
$isj:1,
$asj:function(){return[[P.a6,P.a1]]},
$isc:1,
$asc:function(){return[[P.a6,P.a1]]},
$asB:function(){return[[P.a6,P.a1]]},
"%":"ClientRectList|DOMRectList"},
hD:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gae(a))+" x "+H.l(this.ga9(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bX(b,"$isa6",[P.a1],"$asa6")
if(!z)return!1
z=J.bu(b)
return a.left===z.gaR(b)&&a.top===z.gbd(b)&&this.gae(a)===z.gae(b)&&this.ga9(a)===z.ga9(b)},
gT:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF,this.ga9(a)&0x1FFFFFFF)},
gcb:function(a){return a.bottom},
ga9:function(a){return a.height},
gaR:function(a){return a.left},
gb8:function(a){return a.right},
gbd:function(a){return a.top},
gae:function(a){return a.width},
$isa6:1,
$asa6:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nj:{"^":"kG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.k]},
$asw:function(){return[P.k]},
$isj:1,
$asj:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asB:function(){return[P.k]},
"%":"DOMStringList"},
nk:{"^":"r;0l:length=","%":"DOMTokenList"},
kA:{"^":"cs;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.e(z[b],"$isV")},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.ir(this)
return new J.ax(z,z.length,0,[H.x(z,0)])},
ax:function(a,b,c,d){throw H.a(P.cd(null))},
$asw:function(){return[W.V]},
$asj:function(){return[W.V]},
$asc:function(){return[W.V]}},
V:{"^":"N;",
gcg:function(a){return new W.kA(a,a.children)},
gdF:function(a){return P.iQ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
a8:{"^":"r;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ad:{"^":"r;",
dA:["eB",function(a,b,c,d){H.f(c,{func:1,args:[W.a8]})
if(c!=null)this.eT(a,b,c,!1)}],
eT:function(a,b,c,d){return a.addEventListener(b,H.bs(H.f(c,{func:1,args:[W.a8]}),1),!1)},
$isad:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fq|fr|ft|fu"},
aY:{"^":"cR;",$isaY:1,"%":"File"},
e6:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaY")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aY]},
$asw:function(){return[W.aY]},
$isj:1,
$asj:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$ise6:1,
$asB:function(){return[W.aY]},
"%":"FileList"},
nl:{"^":"ad;0l:length=","%":"FileWriter"},
nm:{"^":"b8;0l:length=","%":"HTMLFormElement"},
b7:{"^":"r;",$isb7:1,"%":"Gamepad"},
nn:{"^":"r;0l:length=","%":"History"},
no:{"^":"kY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isN")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.N]},
$asw:function(){return[W.N]},
$isj:1,
$asj:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"r;0dI:data=",$isc4:1,"%":"ImageData"},
cZ:{"^":"b8;",$iscZ:1,"%":"HTMLImageElement"},
bD:{"^":"di;",$isbD:1,"%":"KeyboardEvent"},
ns:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
nt:{"^":"r;0l:length=","%":"MediaList"},
nu:{"^":"ad;",
dA:function(a,b,c,d){H.f(c,{func:1,args:[W.a8]})
if(b==="message")a.start()
this.eB(a,b,c,!1)},
"%":"MessagePort"},
nv:{"^":"l4;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.H(a,new W.it(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.k,null]},
$isJ:1,
$asJ:function(){return[P.k,null]},
"%":"MIDIInputMap"},
it:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nw:{"^":"l5;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.H(a,new W.iu(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.k,null]},
$isJ:1,
$asJ:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
iu:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"r;",$isbb:1,"%":"MimeType"},
nx:{"^":"l7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"MimeTypeArray"},
a9:{"^":"di;",$isa9:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kz:{"^":"cs;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.e7(z,z.length,-1,[H.aW(C.X,z,"B",0)])},
ax:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asw:function(){return[W.N]},
$asj:function(){return[W.N]},
$asc:function(){return[W.N]}},
N:{"^":"ad;",
ih:function(a,b){var z,y
try{z=a.parentNode
J.h5(z,b,a)}catch(y){H.aB(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eC(a):z},
fN:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iy:{"^":"l9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isN")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.N]},
$asw:function(){return[W.N]},
$isj:1,
$asj:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"Plugin"},
nG:{"^":"ld;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"PluginArray"},
nI:{"^":"lj;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.H(a,new W.j_(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.k,null]},
$isJ:1,
$asJ:function(){return[P.k,null]},
"%":"RTCStatsReport"},
j_:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nJ:{"^":"b8;0l:length=","%":"HTMLSelectElement"},
be:{"^":"ad;",$isbe:1,"%":"SourceBuffer"},
nK:{"^":"fr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.be]},
$asw:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SourceBufferList"},
bf:{"^":"r;",$isbf:1,"%":"SpeechGrammar"},
nL:{"^":"lm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"r;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
nN:{"^":"lp;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gao:function(a){var z=H.d([],[P.k])
this.H(a,new W.jj(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.k,P.k]},
$isJ:1,
$asJ:function(){return[P.k,P.k]},
"%":"Storage"},
jj:{"^":"p:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"r;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
df:{"^":"b8;",$isdf:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"ad;",$isbi:1,"%":"TextTrack"},
bj:{"^":"ad;",$isbj:1,"%":"TextTrackCue|VTTCue"},
nS:{"^":"lw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bj]},
$asw:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TextTrackCueList"},
nT:{"^":"fu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bi]},
$asw:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"TextTrackList"},
nU:{"^":"r;0l:length=","%":"TimeRanges"},
bl:{"^":"r;",$isbl:1,"%":"Touch"},
bm:{"^":"di;",$isbm:1,"%":"TouchEvent"},
nV:{"^":"lC;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bl]},
$asw:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asB:function(){return[W.bl]},
"%":"TouchList"},
nW:{"^":"r;0l:length=","%":"TrackDefaultList"},
di:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nY:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
nZ:{"^":"ad;0l:length=","%":"VideoTrackList"},
bQ:{"^":"a9;",
ghC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbQ:1,
"%":"WheelEvent"},
ks:{"^":"ad;",
fO:function(a,b){return a.requestAnimationFrame(H.bs(H.f(b,{func:1,ret:-1,args:[P.a1]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
o3:{"^":"m3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb4")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b4]},
$asw:function(){return[W.b4]},
$isj:1,
$asj:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asB:function(){return[W.b4]},
"%":"CSSRuleList"},
o4:{"^":"hD;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bX(b,"$isa6",[P.a1],"$asa6")
if(!z)return!1
z=J.bu(b)
return a.left===z.gaR(b)&&a.top===z.gbd(b)&&a.width===z.gae(b)&&a.height===z.ga9(b)},
gT:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga9:function(a){return a.height},
gae:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o6:{"^":"m5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b7]},
$asw:function(){return[W.b7]},
$isj:1,
$asj:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"GamepadList"},
o7:{"^":"m7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isN")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.N]},
$asw:function(){return[W.N]},
$isj:1,
$asj:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
o8:{"^":"m9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bg]},
$asw:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
o9:{"^":"mb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"StyleSheetList"},
kH:{"^":"de;a,b,c,$ti",
hS:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.Z(this.a,this.b,a,!1,z)}},
o5:{"^":"kH;a,b,c,$ti"},
kI:{"^":"eF;a,b,c,d,e,$ti",
h3:function(){var z=this.d
if(z!=null&&this.a<=0)J.h6(this.b,this.c,z,!1)},
p:{
Z:function(a,b,c,d,e){var z=c==null?null:W.fL(new W.kJ(c),W.a8)
z=new W.kI(0,a,b,z,!1,[e])
z.h3()
return z}}},
kJ:{"^":"p:7;a",
$1:function(a){return this.a.$1(H.e(a,"$isa8"))}},
B:{"^":"b;$ti",
ga1:function(a){return new W.e7(a,this.gl(a),-1,[H.aW(this,a,"B",0)])},
ax:function(a,b,c,d){H.y(d,H.aW(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e7:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dH(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
kB:{"^":"r+hu;"},
kD:{"^":"r+w;"},
kE:{"^":"kD+B;"},
kF:{"^":"r+w;"},
kG:{"^":"kF+B;"},
kK:{"^":"r+w;"},
kL:{"^":"kK+B;"},
kX:{"^":"r+w;"},
kY:{"^":"kX+B;"},
l4:{"^":"r+ag;"},
l5:{"^":"r+ag;"},
l6:{"^":"r+w;"},
l7:{"^":"l6+B;"},
l8:{"^":"r+w;"},
l9:{"^":"l8+B;"},
lc:{"^":"r+w;"},
ld:{"^":"lc+B;"},
lj:{"^":"r+ag;"},
fq:{"^":"ad+w;"},
fr:{"^":"fq+B;"},
ll:{"^":"r+w;"},
lm:{"^":"ll+B;"},
lp:{"^":"r+ag;"},
lv:{"^":"r+w;"},
lw:{"^":"lv+B;"},
ft:{"^":"ad+w;"},
fu:{"^":"ft+B;"},
lB:{"^":"r+w;"},
lC:{"^":"lB+B;"},
m2:{"^":"r+w;"},
m3:{"^":"m2+B;"},
m4:{"^":"r+w;"},
m5:{"^":"m4+B;"},
m6:{"^":"r+w;"},
m7:{"^":"m6+B;"},
m8:{"^":"r+w;"},
m9:{"^":"m8+B;"},
ma:{"^":"r+w;"},
mb:{"^":"ma+B;"}}],["","",,P,{"^":"",
mw:function(a){var z,y
z=J.I(a)
if(!!z.$isc4){y=z.gdI(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fw(a.data,a.height,a.width)},
mv:function(a){if(a instanceof P.fw)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.ei(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mt:function(a,b){var z={}
a.H(0,new P.mu(z))
return z},
e2:function(){var z=$.e1
if(z==null){z=J.cO(window.navigator.userAgent,"Opera",0)
$.e1=z}return z},
hz:function(){var z,y
z=$.dZ
if(z!=null)return z
y=$.e_
if(y==null){y=J.cO(window.navigator.userAgent,"Firefox",0)
$.e_=y}if(y)z="-moz-"
else{y=$.e0
if(y==null){y=!P.e2()&&J.cO(window.navigator.userAgent,"Trident/",0)
$.e0=y}if(y)z="-ms-"
else z=P.e2()?"-o-":"-webkit-"}$.dZ=z
return z},
ls:{"^":"b;",
e4:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cP:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isao)return new Date(a.a)
if(!!y.$isiT)throw H.a(P.cd("structured clone of RegExp"))
if(!!y.$isaY)return a
if(!!y.$iscR)return a
if(!!y.$ise6)return a
if(!!y.$isc4)return a
if(!!y.$iseq||!!y.$isda)return a
if(!!y.$isJ){x=this.e4(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.H(a,new P.lu(z,this))
return z.a}if(!!y.$isc){x=this.e4(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hz(a,x)}throw H.a(P.cd("structured clone of other type"))},
hz:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cP(z.j(a,w)))
return x}},
lu:{"^":"p:5;a,b",
$2:function(a,b){this.a.a[a]=this.b.cP(b)}},
fw:{"^":"b;dI:a>,b,c",$isc4:1},
mu:{"^":"p:5;a",
$2:function(a,b){this.a[a]=b}},
lt:{"^":"ls;a,b"},
hN:{"^":"cs;a,b",
gaX:function(){var z,y,x
z=this.b
y=H.au(z,"w",0)
x=W.V
return new H.ii(new H.kq(z,H.f(new P.hO(),{func:1,ret:P.ac,args:[y]}),[y]),H.f(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
H:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.H(P.ek(this.gaX(),!1,W.V),b)},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isV")
z=this.gaX()
J.h9(z.b.$1(J.cP(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ax:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.aw(this.gaX().a)},
j:function(a,b){var z=this.gaX()
return z.b.$1(J.cP(z.a,b))},
ga1:function(a){var z=P.ek(this.gaX(),!1,W.V)
return new J.ax(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.V]},
$asj:function(){return[W.V]},
$asc:function(){return[W.V]}},
hO:{"^":"p:52;",
$1:function(a){return!!J.I(H.e(a,"$isN")).$isV}},
hP:{"^":"p:25;",
$1:function(a){return H.i(H.e(a,"$isN"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
le:{"^":"b;$ti",
gb8:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.y(z+this.c,H.x(this,0))},
gcb:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.y(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bX(b,"$isa6",[P.a1],"$asa6")
if(!z)return!1
z=this.a
y=J.bu(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbd(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.x(this,0)
if(H.y(z+this.c,w)===y.gb8(b)){if(typeof x!=="number")return x.G()
z=H.y(x+this.d,w)===y.gcb(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.c_(z)
x=this.b
w=J.c_(x)
if(typeof z!=="number")return z.G()
v=H.x(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.y(x+this.d,v)
return P.kZ(P.cD(P.cD(P.cD(P.cD(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a6:{"^":"le;aR:a>,bd:b>,ae:c>,a9:d>,$ti",p:{
iQ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.a6(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",bE:{"^":"r;",$isbE:1,"%":"SVGLength"},nr:{"^":"l0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbE")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bE]},
$isj:1,
$asj:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asB:function(){return[P.bE]},
"%":"SVGLengthList"},bI:{"^":"r;",$isbI:1,"%":"SVGNumber"},nE:{"^":"lb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGNumberList"},nH:{"^":"r;0l:length=","%":"SVGPointList"},nO:{"^":"lr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.k]},
$isj:1,
$asj:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asB:function(){return[P.k]},
"%":"SVGStringList"},nQ:{"^":"V;",
gcg:function(a){return new P.hN(a,new W.kz(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bN:{"^":"r;",$isbN:1,"%":"SVGTransform"},nX:{"^":"lE;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbN")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bN]},
$isj:1,
$asj:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asB:function(){return[P.bN]},
"%":"SVGTransformList"},l_:{"^":"r+w;"},l0:{"^":"l_+B;"},la:{"^":"r+w;"},lb:{"^":"la+B;"},lq:{"^":"r+w;"},lr:{"^":"lq+B;"},lD:{"^":"r+w;"},lE:{"^":"lD+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjI:1}}],["","",,P,{"^":"",n5:{"^":"r;0l:length=","%":"AudioBuffer"},n6:{"^":"ky;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.H(a,new P.hc(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.k,null]},
$isJ:1,
$asJ:function(){return[P.k,null]},
"%":"AudioParamMap"},hc:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},n7:{"^":"ad;0l:length=","%":"AudioTrackList"},hg:{"^":"ad;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nF:{"^":"hg;0l:length=","%":"OfflineAudioContext"},ky:{"^":"r+ag;"}}],["","",,P,{"^":"",dd:{"^":"r;",
eo:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.I(g)
if(!!y.$isc4&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.mv(g))
return}if(!!y.$iscZ&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c0("Incorrect number or type of arguments"))},
en:function(a,b,c,d,e,f,g){return this.eo(a,b,c,d,e,f,g,null,null,null)},
$isdd:1,
"%":"WebGLRenderingContext"},jo:{"^":"r;",$isjo:1,"%":"WebGLTexture"},jR:{"^":"r;",$isjR:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nM:{"^":"lo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},ln:{"^":"r+w;"},lo:{"^":"ln+B;"}}],["","",,O,{"^":"",an:{"^":"b;0a,0b,0c,0d,$ti",
bh:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cV:function(a,b,c){var z=H.au(this,"an",0)
H.f(b,{func:1,ret:P.ac,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
aW:function(a,b){return this.cV(a,null,b)},
di:function(a){var z
H.u(a,"$isj",[H.au(this,"an",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cY:function(a,b){var z
H.u(b,"$isj",[H.au(this,"an",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.au(this,"an",0)
H.y(b,z)
z=[z]
if(this.di(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cY(x,H.d([b],z))}},
c5:function(a,b){var z,y
H.u(b,"$isj",[H.au(this,"an",0)],"$asj")
if(this.di(b)){z=this.a
y=z.length
C.a.c5(z,b)
this.cY(y,b)}},
$isj:1,
p:{
cW:function(a){var z=new O.an([a])
z.bh(a)
return z}}},d7:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
eL:function(a){var z=this.b
if(!(z==null))z.w(a)},
aD:function(){return this.eL(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.b_()},
bD:function(a){var z=this.a
if(a==null)C.a.h(z,V.b_())
else C.a.h(z,a)
this.aD()},
aA:function(){var z=this.a
if(z.length>0){z.pop()
this.aD()}}}}],["","",,E,{"^":"",cQ:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbJ:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.f(this.gei(),{func:1,ret:-1,args:[D.o]})
C.a.U(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.f(this.gei(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eA])
w.b=!0
this.aS(w)}},
a8:function(a,b){var z
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a8(0,b)},
a7:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gZ(z))
z.aD()
a.cG(this.f)
z=a.dy
y=(z&&C.a).gay(z)
if(y!=null&&this.d!=null)y.cL(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a7(a)
a.cF()
a.dx.aA()},
gq:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aS:function(a){var z=this.z
if(!(z==null))z.w(a)},
ac:function(){return this.aS(null)},
i2:[function(a){H.e(a,"$iso")
this.e=null
this.aS(a)},function(){return this.i2(null)},"jc","$1","$0","gei",0,2,0],
i0:[function(a){this.aS(H.e(a,"$iso"))},function(){return this.i0(null)},"ja","$1","$0","geh",0,2,0],
j9:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isj",[E.aO],"$asj")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.b6()
t.a=H.d([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.ac()},"$2","gi_",8,0,8],
jb:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isj",[E.aO],"$asj")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.b6()
t.a=H.d([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.f(y,x)
C.a.U(t.a,y)}}this.ac()},"$2","gi1",8,0,8],
$isaH:1,
p:{
e5:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.cW(E.aO)
z.y=y
y.aW(z.gi_(),z.gi1())
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
z.sbJ(0,e)
return z}}},iV:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eI:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d7()
y=[V.aE]
z.a=H.d([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.f(new E.iX(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d7()
z.a=H.d([],y)
v=z.gq()
v.toString
x=H.f(new E.iY(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d7()
z.a=H.d([],y)
y=z.gq()
y.toString
w=H.f(new E.iZ(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.bL])
this.dy=z
C.a.h(z,null)
this.fr=new H.aZ(0,0,[P.k,A.cx])},
gib:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.k(0,y.gZ(y))
this.z=y
z=y}return z},
gek:function(){var z,y
z=this.ch
if(z==null){z=this.gib()
y=this.dx
y=z.k(0,y.gZ(y))
this.ch=y
z=y}return z},
cG:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
cF:function(){var z=this.dy
if(z.length>1)z.pop()},
c6:function(a){var z=a.b
if(z.length===0)throw H.a(P.v("May not cache a shader with no name."))
if(this.fr.bo(0,z))throw H.a(P.v('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
iW:function(a,b){var z=new E.iV(a,b)
z.eI(a,b)
return z}}},iX:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.ch=null}},iY:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iZ:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},jA:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
eN:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.w(a)
this.ij()},function(){return this.eN(null)},"eM","$1","$0","gcZ",0,2,0],
ghJ:function(){var z,y,x
z=Date.now()
y=C.e.a5(P.e4(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
dl:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.n(z)
x=C.d.ct(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.ct(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eK(C.q,this.gii())},
ij:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jC(this),{func:1,ret:-1,args:[P.a1]})
C.C.f3(z)
C.C.fO(z,W.fL(y,P.a1))}},"$0","gii",0,0,3],
ig:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dl()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.e4(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aD()
w=x.db
C.a.sl(w.a,0)
w.aD()
w=x.dx
C.a.sl(w.a,0)
w.aD()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a7(this.e)}}catch(v){z=H.aB(v)
y=H.bv(v)
P.dF("Error: "+H.l(z))
P.dF("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jB:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscU)return E.eJ(a,!0,!0,!0,!1)
y=W.cV(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcg(a).h(0,y)
w=E.eJ(y,!0,!0,!0,!1)
w.a=a
return w},
eJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jA()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.l.bH(a,"webgl",y)
x=H.e(x==null?C.l.bH(a,"experimental-webgl",y):x,"$isdd")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iW(x,a)
w=new T.ju(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k3(a)
v=new X.i0()
v.c=new X.aG(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.iv(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.id(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jF(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eF,P.b]])
w.z=v
u=document
t=W.a9
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Z(u,"contextmenu",H.f(w.gfl(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.f(w.gfo(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.f(w.gfi(),q),!1,r))
v=w.z
p=W.bD
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.f(w.gfq(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.f(w.gfp(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.f(w.gfu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.f(w.gfw(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.f(w.gfv(),s),!1,t))
p=w.z
o=W.bQ;(p&&C.a).h(p,W.Z(a,H.O(W.hH(a)),H.f(w.gfz(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.f(w.gfm(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.f(w.gfn(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.f(w.gfA(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.f(w.gfI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.f(w.gfG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.f(w.gfH(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.dl()
return z}}},jC:{"^":"p:31;a",
$1:function(a){var z
H.mR(a)
z=this.a
if(z.z){z.z=!1
z.ig()}}}}],["","",,Z,{"^":"",ff:{"^":"b;a,b",p:{
dn:function(a,b,c){var z
H.u(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bp(c)),35044)
a.bindBuffer(b,null)
return new Z.ff(b,z)}}},dO:{"^":"cQ;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aB(y)
x=P.v('Failed to bind buffer attribute "'+J.al(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.al(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},dm:{"^":"b;a",$isn8:1},cl:{"^":"b;a,0b,c,d",
al:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
ad:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a7:function(a){var z,y,x,w,v
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
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.al(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$isnR:1},cr:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},b1:{"^":"b;a",
gcW:function(a){var z,y
z=this.a
y=(z&$.$get$aj().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
hu:function(a){var z,y,x
z=$.$get$aj()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fe()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.k])
y=this.a
if((y&$.$get$aj().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
p:{
at:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",dR:{"^":"b;"},b6:{"^":"b;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.hL(z))
return x!==0},
cm:function(){return this.w(null)},
ik:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
aB:function(a){return this.ik(a,!0,!1)},
p:{
G:function(){var z=new D.b6()
z.a=H.d([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},hL:{"^":"p:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"b;a,0b"},c5:{"^":"o;c,d,a,0b,$ti"},c6:{"^":"o;c,d,a,0b,$ti"},H:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"n9<"}},ee:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ef:{"^":"o;c,a,0b"},i0:{"^":"b;0a,0b,0c,0d",
i8:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ef(a,this)
y.b=!0
return z.w(y)},
i4:function(a){var z,y
this.c=a.b
this.d.U(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ef(a,this)
y.b=!0
return z.w(y)}},el:{"^":"ct;x,y,c,d,e,a,0b"},id:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.bG(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cE:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.as(a,b))
return!0},
b6:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ey()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.as(a,b))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.as(a,b))
return!0},
i9:function(a){var z,y,x,w,v,u,t,s
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
w=new X.d8(new V.W(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.w(w)
return!0},
ft:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.el(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.T(0,0)}},aG:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aG))return!1
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
return z+(this.c?"Shift+":"")}},bG:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bT:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaL()
x=new X.bG(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cE:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bT(a,b,!0))
return!0},
b6:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ey()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bT(a,b,!0))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bT(a,b,!1))
return!0},
ia:function(a,b){var z,y,x,w,v,u,t
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
x=new X.d8(new V.W(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.w(x)
return!0},
gdK:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
geg:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},d8:{"^":"ct;x,c,d,e,a,0b"},ct:{"^":"o;"},eO:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.u(a,"$isc",[V.T],"$asc")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaL()
w=new X.eO(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i7:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.w(this.as(a,!0))
return!0},
i5:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.w(this.as(a,!0))
return!0},
i6:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.w(this.as(a,!1))
return!0}},k3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.dc(0,0,(z&&C.l).gdF(z).c,C.l.gdF(z).d)},
d8:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aG(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
c4:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.T(y-w,x-v)},
aY:function(a){return new V.W(a.movementX,a.movementY)},
c0:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.d.Y(u.pageX)
C.d.Y(u.pageY)
s=z.left
C.d.Y(u.pageX)
C.a.h(y,new V.T(t-s,C.d.Y(u.pageY)-z.top))}return y},
aq:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.aG(y,a.altKey,a.shiftKey))},
bV:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iL:[function(a){this.f=!0},"$1","gfo",4,0,7],
iF:[function(a){this.f=!1},"$1","gfi",4,0,7],
iI:[function(a){H.e(a,"$isa9")
if(this.f&&this.bV(a))a.preventDefault()},"$1","gfl",4,0,4],
iN:[function(a){var z
H.e(a,"$isbD")
if(!this.f)return
z=this.d8(a)
if(this.b.i8(z))a.preventDefault()},"$1","gfq",4,0,14],
iM:[function(a){var z
H.e(a,"$isbD")
if(!this.f)return
z=this.d8(a)
if(this.b.i4(z))a.preventDefault()},"$1","gfp",4,0,14],
iP:[function(a){var z,y,x,w
H.e(a,"$isa9")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.aq(a)
x=this.aY(a)
if(this.d.cE(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aq(a)
w=this.at(a)
if(this.c.cE(y,w))a.preventDefault()},"$1","gfu",4,0,4],
iR:[function(a){var z,y,x
H.e(a,"$isa9")
this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfw",4,0,4],
iK:[function(a){var z,y,x
H.e(a,"$isa9")
if(!this.bV(a)){this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b6(z,x))a.preventDefault()}},"$1","gfn",4,0,4],
iQ:[function(a){var z,y,x
H.e(a,"$isa9")
this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfv",4,0,4],
iJ:[function(a){var z,y,x
H.e(a,"$isa9")
if(!this.bV(a)){this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gfm",4,0,4],
iS:[function(a){var z,y
H.e(a,"$isbQ")
this.aJ(a)
z=new V.W((a&&C.B).ghB(a),C.B.ghC(a)).v(0,180)
if(this.x){if(this.d.i9(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.ia(z,y))a.preventDefault()},"$1","gfz",4,0,35],
iT:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aq(this.y)
v=this.at(this.y)
this.d.ft(w,v,x)}},"$1","gfA",4,0,7],
j0:[function(a){var z
H.e(a,"$isbm")
this.a.focus()
this.f=!0
this.c4(a)
z=this.c0(a)
if(this.e.i7(z))a.preventDefault()},"$1","gfI",4,0,12],
iZ:[function(a){var z
H.e(a,"$isbm")
this.c4(a)
z=this.c0(a)
if(this.e.i5(z))a.preventDefault()},"$1","gfG",4,0,12],
j_:[function(a){var z
H.e(a,"$isbm")
this.c4(a)
z=this.c0(a)
if(this.e.i6(z))a.preventDefault()},"$1","gfH",4,0,12]}}],["","",,D,{"^":"",co:{"^":"b;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aE:[function(a){var z
H.e(a,"$iso")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aE(null)},"iv","$1","$0","geO",0,2,0],
$isa2:1,
$isaH:1},a2:{"^":"b;",$isaH:1},i1:{"^":"an;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aE:function(a){var z=this.Q
if(!(z==null))z.w(a)},
fs:[function(a){var z
H.e(a,"$iso")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.fs(null)},"iO","$1","$0","gdh",0,2,0],
iU:[function(a){var z,y,x
H.u(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.f_(x))return!1}return!0},"$1","gfB",4,0,37],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdh(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.co)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gff",8,0,21],
iW:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdh(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.co)C.a.U(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.U(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gfD",8,0,21],
f_:function(a){var z=C.a.b0(this.e,a)
return z},
$asj:function(){return[D.a2]},
$asan:function(){return[D.a2]}},iE:{"^":"b;",$isa2:1,$isaH:1},jg:{"^":"b;",$isa2:1,$isaH:1},jx:{"^":"b;",$isa2:1,$isaH:1},jy:{"^":"b;",$isa2:1,$isaH:1},jz:{"^":"b;",$isa2:1,$isaH:1}}],["","",,V,{"^":"",
nb:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","is",8,0,34],
n1:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bg(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.az("null",c)
return C.b.az(C.d.eq($.q.$2(a,0)?0:a,b),c+b+1)},
bt:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isc",[P.z],"$asc")
z=H.d([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.az(z[u],x))}return z},
bZ:function(a,b){return C.d.iq(Math.pow(b,C.J.ct(Math.log(H.ms(a))/Math.log(b))))},
a_:{"^":"b;a,b,c",
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
return new V.a_(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aD:{"^":"b;a,b,c,d",
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
return new V.aD(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
bF:{"^":"b;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isbF")
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
return new V.bF(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.z]
y=V.bt(H.d([this.a,this.d,this.r],z),3,0)
x=V.bt(H.d([this.b,this.e,this.x],z),3,0)
w=V.bt(H.d([this.c,this.f,this.y],z),3,0)
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
aE:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
cA:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.q.$2(a2,0))return V.b_()
a3=1/a2
a4=-w
a5=-i
return V.aF((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaE")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aF(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.M(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
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
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.a3(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.R()},
e5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bt(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bt(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bt(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bt(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
D:function(a){return this.e5(a,3,0)},
R:function(){return this.e5("",3,0)},
p:{
aF:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b_:function(){return V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ep:function(a,b,c,d){return V.aF(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eo:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.C(c)))
y=b.av(z)
x=y.v(0,Math.sqrt(y.C(y)))
w=z.av(x)
v=new V.M(a.a,a.b,a.c)
return V.aF(x.a,w.a,z.a,x.M(0).C(v),x.b,w.b,z.b,w.M(0).C(v),x.c,w.c,z.c,z.M(0).C(v),0,0,0,1)}}},
T:{"^":"b;a,b",
J:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.T(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
a3:{"^":"b;a,b,c",
G:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bJ:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bJ(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
ez:{"^":"b;a,b,c,d",
gab:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ez))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
dc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ez(a,b,c,d)}}},
W:{"^":"b;a,b",
hQ:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.W(z*b,y*b)},
v:function(a,b){var z,y
if($.q.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
M:{"^":"b;a,b,c",
hQ:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.M(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.q.$2(b,0))return new V.M(0,0,0)
return new V.M(this.a/b,this.b/b,this.c/b)},
ee:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hn:{"^":"dR;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bO:function(a){var z=V.n1(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.w(a)},
scQ:function(a,b){},
scB:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bO(z)}z=new D.H("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.P(z)}},
scD:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bO(z)}z=new D.H("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.P(z)}},
saa:function(a,b){var z,y
b=this.bO(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.z])
z.b=!0
this.P(z)}},
scC:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.P(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.z])
z.b=!0
this.P(z)}},
scj:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.z])
z.b=!0
this.P(z)}},
a8:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.saa(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cX:function(){var z=new U.hn()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dT:{"^":"ah;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aV:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
p:{
dU:function(a){var z=new U.dT()
z.a=a
return z}}},e9:{"^":"an;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.w(a)},function(){return this.P(null)},"ak","$1","$0","gaI",0,2,0],
iB:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfe",8,0,22],
iV:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.U(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfC",8,0,22],
aV:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ax(z,z.length,0,[H.x(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aV(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.b_():x
z=this.e
if(!(z==null))z.aB(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ah]},
$asan:function(){return[U.ah]},
$isah:1},ah:{"^":"dR;"},k4:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$iso")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.P(null)},"ak","$1","$0","gaI",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdK()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gbW(),y)
C.a.h(z.a,x)
x=this.a.c.geg()
x.toString
z=H.f(this.gbX(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.f(this.gbY(),y)
C.a.h(z.a,y)
return!0},
fa:[function(a){H.e(a,"$iso")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbW",4,0,1],
fb:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbG")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.W(y.a,y.b).k(0,2).v(0,z.gab())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.W(x.a,x.b).k(0,2).v(0,z.gab())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.saa(0,-v*u+t)
this.b.sS(0)
y=y.J(0,a.z)
this.Q=new V.W(y.a,y.b).k(0,2).v(0,z.gab())}this.ak()},"$1","gbX",4,0,1],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sS(y*10*x)
this.ak()}},"$1","gbY",4,0,1],
aV:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.a8(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aF(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},k5:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$iso")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.P(null)},"ak","$1","$0","gaI",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdK()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gbW(),y)
C.a.h(z.a,x)
x=this.a.c.geg()
x.toString
z=H.f(this.gbX(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.f(this.gbY(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.G()
x.f=z}x=H.f(this.gf7(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.f(this.gf8(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.G()
x.b=z}x=H.f(this.gh2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.f(this.gh1(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.G()
x.c=z}y=H.f(this.gh0(),y)
C.a.h(z.a,y)
return!0},
am:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.W(z,y)},
fa:[function(a){a=H.i(H.e(a,"$iso"),"$isbG")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbW",4,0,1],
fb:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbG")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.am(new V.W(y.a,y.b).k(0,2).v(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saa(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).k(0,2).v(0,z.gab()))}this.ak()},"$1","gbX",4,0,1],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.ak()}},"$1","gbY",4,0,1],
iy:[function(a){if(H.i(H.e(a,"$iso"),"$isel").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf7",4,0,1],
iz:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbG")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saa(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).k(0,2).v(0,z.gab()))
this.ak()},"$1","gf8",4,0,1],
j4:[function(a){H.e(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh2",4,0,1],
j3:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$iseO")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.am(new V.W(y.a,y.b).k(0,2).v(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.saa(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).k(0,2).v(0,z.gab()))}this.ak()},"$1","gh1",4,0,1],
j2:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.ak()}},"$1","gh0",4,0,1],
aV:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.a8(0,x)
this.b.a8(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aF(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aF(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},k6:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.w(a)},
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=H.f(this.gfd(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iA:[function(a){var z,y,x,w
H.e(a,"$iso")
if(!J.R(this.b,this.a.b.c))return
H.i(a,"$isd8")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.z])
z.b=!0
this.P(z)}},"$1","gfd",4,0,1],
aV:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ep(x,x,x,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",ho:{"^":"an;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d_","$1","$0","gV",0,2,0],
iX:[function(a,b){var z,y,x,w,v,u,t
z=M.aI
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfE",8,0,23],
iY:[function(a,b){var z,y,x,w,v,u,t
z=M.aI
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.U(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfF",8,0,23],
a7:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
if(!(y==null))y.a7(a)}this.e=!1},
$asj:function(){return[M.aI]},
$asan:function(){return[M.aI]},
$isaI:1},ht:{"^":"b;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d_","$1","$0","gV",0,2,0],
sb_:function(a){var z,y,x
if(a==null)a=new X.hS()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cm])
z.b=!0
this.a_(z)}},
sb9:function(a,b){var z,y,x
if(b==null)b=X.e8(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.cy])
z.b=!0
this.a_(z)}},
saU:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.bL])
z.b=!0
this.a_(z)}},
a7:function(a){var z
a.cG(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.a8(0,a)
this.d.a8(0,a)
this.d.a7(a)
this.a.ad(a)
this.b.ad(a)
a.cF()},
$isaI:1,
p:{
dV:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.ht()
z.sb_(a)
z.sb9(0,b)
z.saU(c)
y=E.e5(null,!0,null,"",null,null)
x=F.eB()
w=x.a
v=new V.M(-1,-1,1)
v=v.v(0,Math.sqrt(v.C(v)))
u=w.bm(new V.bJ(1,2,4,6),new V.aD(1,0,0,1),new V.a3(-1,-1,0),new V.T(0,1),v,null)
w=x.a
v=new V.M(1,-1,1)
v=v.v(0,Math.sqrt(v.C(v)))
t=w.bm(new V.bJ(0,3,4,6),new V.aD(0,0,1,1),new V.a3(1,-1,0),new V.T(1,1),v,null)
w=x.a
v=new V.M(1,1,1)
v=v.v(0,Math.sqrt(v.C(v)))
s=w.bm(new V.bJ(0,2,5,6),new V.aD(0,1,0,1),new V.a3(1,1,0),new V.T(1,0),v,null)
w=x.a
v=new V.M(-1,1,1)
v=v.v(0,Math.sqrt(v.C(v)))
r=w.bm(new V.bJ(0,2,4,7),new V.aD(1,1,0,1),new V.a3(-1,1,0),new V.T(0,0),v,null)
x.d.hr(H.d([u,t,s,r],[F.as]))
x.au()
y.sbJ(0,x)
z.d=y
z.e=null
return z}}},hJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a_:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d_","$1","$0","gV",0,2,0],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfj",8,0,8],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.f(x,w)
C.a.U(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfk",8,0,8],
sb_:function(a){var z,y,x
if(a==null)a=X.eu(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cm])
z.b=!0
this.a_(z)}},
sb9:function(a,b){var z,y,x
if(b==null)b=X.e8(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.cy])
z.b=!0
this.a_(z)}},
saU:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.bL])
z.b=!0
this.a_(z)}},
gq:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
a7:function(a){var z
a.cG(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.a8(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a8(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a7(a)
this.a.toString
a.cy.aA()
a.db.aA()
this.b.ad(a)
a.cF()},
$isaI:1},aI:{"^":"b;"}}],["","",,A,{"^":"",dK:{"^":"b;a,b,c"},hb:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e3:{"^":"cx;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
a6:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ez(c)
b.a.uniform1i(b.d,0)}}},en:{"^":"cx;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0aw,0aQ,0bp,0dL,0dM,0bq,0br,0dN,0dO,0bs,0bt,0dP,0dQ,0bu,0dR,0dS,0bv,0dT,0dU,0bw,0bx,0by,0dV,0dW,0bz,0bA,0dX,0dY,0bB,0dZ,0cn,0e_,0co,0e0,0cp,0e1,0cq,0e2,0cr,0e3,0cs,a,b,0c,0d,0e,0f,0r",
eH:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.aq("")
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
a1.h5(z)
a1.hc(z)
a1.h6(z)
a1.hk(z)
a1.hl(z)
a1.he(z)
a1.hp(z)
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
z=new P.aq("")
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
v.h9(z)
v.h4(z)
v.h7(z)
v.ha(z)
v.hi(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hg(z)
v.hh(z)}v.hd(z)
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
p=H.d([],[P.k])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h8(z)
v.hf(z)
v.hj(z)
v.hm(z)
v.hn(z)
v.ho(z)
v.hb(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.k])
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
n="vec4("+C.a.A(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.cv(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.i(this.r.n(0,"invViewMat"),"$isar")
if(y)this.db=H.i(this.r.n(0,"objMat"),"$isar")
if(w)this.dx=H.i(this.r.n(0,"viewObjMat"),"$isar")
this.fr=H.i(this.r.n(0,"projViewObjMat"),"$isar")
if(a1.x2)this.go=H.i(this.r.n(0,"txt2DMat"),"$iscc")
if(a1.y1)this.id=H.i(this.r.n(0,"txtCubeMat"),"$isar")
if(a1.y2)this.k1=H.i(this.r.n(0,"colorMat"),"$isar")
this.k3=H.d([],[A.ar])
y=a1.aP
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isK")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isar"))}}y=a1.a
if(y!==C.c){this.k4=H.i(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.i(this.r.n(0,"emissionTxt"),"$isaf")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isK")
break
case C.h:this.r2=H.i(this.r.n(0,"emissionTxt"),"$isai")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isK")
break}}y=a1.b
if(y!==C.c){this.ry=H.i(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.i(this.r.n(0,"ambientTxt"),"$isaf")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isK")
break
case C.h:this.x2=H.i(this.r.n(0,"ambientTxt"),"$isai")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isK")
break}}y=a1.c
if(y!==C.c){this.y2=H.i(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.aP=H.i(this.r.n(0,"diffuseTxt"),"$isaf")
this.aQ=H.i(this.r.n(0,"nullDiffuseTxt"),"$isK")
break
case C.h:this.aw=H.i(this.r.n(0,"diffuseTxt"),"$isai")
this.aQ=H.i(this.r.n(0,"nullDiffuseTxt"),"$isK")
break}}y=a1.d
if(y!==C.c){this.bp=H.i(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dL=H.i(this.r.n(0,"invDiffuseTxt"),"$isaf")
this.bq=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isK")
break
case C.h:this.dM=H.i(this.r.n(0,"invDiffuseTxt"),"$isai")
this.bq=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a1.e
if(y!==C.c){this.bt=H.i(this.r.n(0,"shininess"),"$isX")
this.br=H.i(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dN=H.i(this.r.n(0,"specularTxt"),"$isaf")
this.bs=H.i(this.r.n(0,"nullSpecularTxt"),"$isK")
break
case C.h:this.dO=H.i(this.r.n(0,"specularTxt"),"$isai")
this.bs=H.i(this.r.n(0,"nullSpecularTxt"),"$isK")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.dP=H.i(this.r.n(0,"bumpTxt"),"$isaf")
this.bu=H.i(this.r.n(0,"nullBumpTxt"),"$isK")
break
case C.h:this.dQ=H.i(this.r.n(0,"bumpTxt"),"$isai")
this.bu=H.i(this.r.n(0,"nullBumpTxt"),"$isK")
break}if(a1.dy){this.dR=H.i(this.r.n(0,"envSampler"),"$isai")
this.dS=H.i(this.r.n(0,"nullEnvTxt"),"$isK")
y=a1.r
if(y!==C.c){this.bv=H.i(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dT=H.i(this.r.n(0,"reflectTxt"),"$isaf")
this.bw=H.i(this.r.n(0,"nullReflectTxt"),"$isK")
break
case C.h:this.dU=H.i(this.r.n(0,"reflectTxt"),"$isai")
this.bw=H.i(this.r.n(0,"nullReflectTxt"),"$isK")
break}}y=a1.x
if(y!==C.c){this.bx=H.i(this.r.n(0,"refraction"),"$isX")
this.by=H.i(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dV=H.i(this.r.n(0,"refractTxt"),"$isaf")
this.bz=H.i(this.r.n(0,"nullRefractTxt"),"$isK")
break
case C.h:this.dW=H.i(this.r.n(0,"refractTxt"),"$isai")
this.bz=H.i(this.r.n(0,"nullRefractTxt"),"$isK")
break}}}y=a1.y
if(y!==C.c){this.bA=H.i(this.r.n(0,"alpha"),"$isX")
switch(y){case C.c:break
case C.i:break
case C.f:this.dX=H.i(this.r.n(0,"alphaTxt"),"$isaf")
this.bB=H.i(this.r.n(0,"nullAlphaTxt"),"$isK")
break
case C.h:this.dY=H.i(this.r.n(0,"alphaTxt"),"$isai")
this.bB=H.i(this.r.n(0,"nullAlphaTxt"),"$isK")
break}}this.cn=H.d([],[A.f0])
this.co=H.d([],[A.f1])
this.cp=H.d([],[A.f2])
this.cq=H.d([],[A.f3])
this.cr=H.d([],[A.f4])
this.cs=H.d([],[A.f5])
if(a1.k2){y=a1.z
if(y>0){this.dZ=H.e(this.r.n(0,"dirLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.cn;(x&&C.a).h(x,new A.f0(m,l,k))}}y=a1.Q
if(y>0){this.e_=H.e(this.r.n(0,"pntLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isX")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isX")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isX")
x=this.co;(x&&C.a).h(x,new A.f1(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e0=H.e(this.r.n(0,"spotLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isX")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isX")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isX")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isX")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isX")
x=this.cp;(x&&C.a).h(x,new A.f2(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e1=H.e(this.r.n(0,"txtDirLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isK")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isaf")
x=this.cq;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e2=H.e(this.r.n(0,"txtPntLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$iscc")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isK")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isX")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isX")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isX")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isai")
x=this.cr;(x&&C.a).h(x,new A.f4(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e3=H.e(this.r.n(0,"txtSpotLightCount"),"$isK")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isK")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isX")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isX")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isX")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isX")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isX")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isaf")
x=this.cs;(x&&C.a).h(x,new A.f5(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
il:function(a,b){var z,y
z=a.aw
y=new A.en(b,z)
y.bM(b,z)
y.eH(a,b)
return y}}},ip:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,aw,aQ",
h5:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aP+"];\n"
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
hc:function(a){var z
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
h6:function(a){var z
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
hk:function(a){var z,y
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
hl:function(a){var z,y
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
he:function(a){var z
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
hp:function(a){var z
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
ar:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aC(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h9:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ar(a,z,"emission")
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
h4:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ar(a,z,"ambient")
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
h7:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"diffuse")
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
ha:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"invDiffuse")
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
hi:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ar(a,z,"specular")
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
hd:function(a){var z,y
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
hg:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ar(a,z,"reflect")
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
hh:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ar(a,z,"refract")
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
h8:function(a){var z,y
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
hf:function(a){var z,y
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
hj:function(a){var z,y
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
hm:function(a){var z,y,x
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
hn:function(a){var z,y,x
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
ho:function(a){var z,y,x
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
hb:function(a){var z
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
i:function(a){return this.aw}},f0:{"^":"b;a,b,c"},f3:{"^":"b;a,b,c,d,e,f,r,x"},f1:{"^":"b;a,b,c,d,e,f,r"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f2:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f5:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cx:{"^":"cQ;",
bM:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cv:function(a,b,c){var z,y,x
this.c=this.d9(b,35633)
this.d=this.d9(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fP(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(x)))}this.fW()
this.fY()},
W:function(a){a.a.useProgram(this.e)
this.f.hD()},
d9:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fP(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fW:function(){var z,y,x,w,v,u
z=H.d([],[A.dK])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dK(y,v.name,u))}this.f=new A.hb(z)},
fY:function(){var z,y,x,w,v,u
z=H.d([],[A.aa])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hA(v.type,v.size,v.name,u))}this.r=new A.jQ(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.K(z,y,b,c)
else return A.dj(z,y,b,a,c)},
f0:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.dj(z,y,b,a,c)},
f1:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bl:function(a,b){return new P.fi(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hA:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jL(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jO(this.a,this.e,c,d)
case 35667:return new A.jM(this.a,this.e,c,d)
case 35668:return new A.jN(this.a,this.e,c,d)
case 35669:return new A.jP(this.a,this.e,c,d)
case 35674:return new A.jS(this.a,this.e,c,d)
case 35675:return new A.cc(this.a,this.e,c,d)
case 35676:return new A.ar(this.a,this.e,c,d)
case 35678:return this.f0(b,c,d)
case 35680:return this.f1(b,c,d)
case 35670:throw H.a(this.bl("BOOL",c))
case 35671:throw H.a(this.bl("BOOL_VEC2",c))
case 35672:throw H.a(this.bl("BOOL_VEC3",c))
case 35673:throw H.a(this.bl("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cn:{"^":"b;a,b",
i:function(a){return this.b}},eC:{"^":"cx;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},aa:{"^":"b;"},jQ:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.R()},
hI:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
R:function(){return this.hI("\n")}},K:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jM:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jN:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jP:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jK:{"^":"aa;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dj:function(a,b,c,d,e){var z=new A.jK(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.m)
return z}}},X:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jL:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jO:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jS:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},cc:{"^":"aa;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bp(H.u(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},ar:{"^":"aa;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bp(H.u(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},af:{"^":"aa;a,b,c,d",
ez:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ai:{"^":"aa;a,b,c,d",
eA:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
mZ:function(a,b,c,d){return F.mx(c,a,d,b,new F.n_())},
mx:function(a,b,c,d,e){var z=F.mX(a,b,new F.my(H.f(e,{func:1,ret:V.a3,args:[P.z]}),d,b,c),null)
if(z==null)return
z.au()
z.hX(new F.kk(),new F.iz())
return z},
mX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.as,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.eB()
y=H.d([],[F.as])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cB(null,null,new V.aD(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.dH(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cB(null,null,new V.aD(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.dH(d))}}z.d.hs(a+1,b+1,y)
return z},
n_:{"^":"p:43;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
my:{"^":"p:44;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dG(y.$1(z),x)
x=J.dG(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.C(x)))
u=new V.M(1,0,0)
y=v.av(!v.u(0,u)?new V.M(0,0,1):u)
t=y.v(0,Math.sqrt(y.C(y)))
y=t.av(v)
u=y.v(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.G(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.R(a.f,x)){a.f=x
y=a.a
if(y!=null)y.ac()}}},
ap:{"^":"b;0a,0b,0c,0d,0e",
b2:function(){if(!this.gdJ()){C.a.U(this.a.a.d.b,this)
this.a.a.ac()}this.fK()
this.fL()
this.fM()},
fT:function(a){this.a=a
C.a.h(a.d.b,this)},
fU:function(a){this.b=a
C.a.h(a.d.c,this)},
fV:function(a){this.c=a
C.a.h(a.d.d,this)},
fK:function(){var z=this.a
if(z!=null){C.a.U(z.d.b,this)
this.a=null}},
fL:function(){var z=this.b
if(z!=null){C.a.U(z.d.c,this)
this.b=null}},
fM:function(){var z=this.c
if(z!=null){C.a.U(z.d.d,this)
this.c=null}},
gdJ:function(){return this.a==null||this.b==null||this.c==null},
eV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.M(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.ee())return
return v.v(0,Math.sqrt(v.C(v)))},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.J(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.av(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
cf:function(){if(this.d!=null)return!0
var z=this.eV()
if(z==null){z=this.eY()
if(z==null)return!1}this.d=z
this.a.a.ac()
return!0},
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.M(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.ee())return
return v.v(0,Math.sqrt(v.C(v)))},
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.J(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.J(0,u).k(0,l).G(0,u).J(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.av(m)
z=z.v(0,Math.sqrt(z.C(z))).av(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
cd:function(){if(this.e!=null)return!0
var z=this.eU()
if(z==null){z=this.eX()
if(z==null)return!1}this.e=z
this.a.a.ac()
return!0},
ghx:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
D:function(a){var z,y
if(this.gdJ())return a+"disposed"
z=a+C.b.az(J.al(this.a.e),0)+", "+C.b.az(J.al(this.b.e),0)+", "+C.b.az(J.al(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
R:function(){return this.D("")},
p:{
c3:function(a,b,c){var z,y,x
z=new F.ap()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.fT(a)
z.fU(b)
z.fV(c)
C.a.h(z.a.a.d.b,z)
z.a.a.ac()
return z}}},
hM:{"^":"b;"},
jc:{"^":"hM;",
b4:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
eg:{"^":"b;"},
i2:{"^":"b;"},
jJ:{"^":"i2;",
b4:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else return!1}}},
ew:{"^":"b;"},
eA:{"^":"b;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
au:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.aB(0)
return y},
f5:function(a,b,c,d,e){var z,y,x
H.u(d,"$isc",[F.as],"$asc")
H.u(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.b4(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hX:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.as],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.f5(a,v,y,u,t))b.hW(u)}this.a.B()
this.c.cJ()
this.d.cJ()
this.b.ie()
this.c.cK(new F.jJ())
this.d.cK(new F.jc())
z=this.e
if(!(z==null))z.aB(0)},
cc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aj()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gcW(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dO])
for(r=0,q=0;q<w;++q){p=b.hu(q)
o=p.gcW(p)
C.a.m(s,q,new Z.dO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hR(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.u(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cl(new Z.ff(34962,j),s,b)
i.b=H.d([],[Z.cr])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cr(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cr(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.B()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cr(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.A(z,"\n")},
aS:function(a){var z=this.e
if(!(z==null))z.w(a)},
ac:function(){return this.aS(null)},
p:{
eB:function(){var z,y
z=new F.eA()
y=new F.kf(z)
y.b=!1
y.c=H.d([],[F.as])
z.a=y
y=new F.j7(z)
y.b=H.d([],[F.ew])
z.b=y
y=new F.j6(z)
y.b=H.d([],[F.eg])
z.c=y
y=new F.j5(z)
y.b=H.d([],[F.ap])
z.d=y
z.e=null
return z}}},
j5:{"^":"b;a,0b",
hr:function(a){var z,y,x,w,v
H.u(a,"$isc",[F.as],"$asc")
z=H.d([],[F.ap])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.c3(y,w,v))}return z},
hs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isc",[F.as],"$asc")
z=H.d([],[F.ap])
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
C.a.h(z,F.c3(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c3(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c3(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c3(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b4(0,v,t)){v.b2()
break}}}}},
cJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.ghx(x)
if(y)x.b2()}},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cf())x=!1
return x},
ce:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cd())x=!1
return x},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}},
j6:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b4(0,v,t)){v.b2()
break}}}}},
cJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.R(x.a,x.b)
if(y)x.b2()}},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.A(z,"\n")},
R:function(){return this.D("")}},
j7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ie:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.b2()}},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}},
as:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dH:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cB(this.cx,x,u,z,y,w,v,a,t)},
hR:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$aj())){z=this.f
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aS())){z=this.r
y=[P.z]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.x
y=[P.z]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aA())){z=this.y
y=[P.z]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.u(a,$.$get$aT())){z=this.z
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bO())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bP())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bn()))return H.d([this.ch],[P.z])
else if(z.u(a,$.$get$aQ())){z=this.cx
y=[P.z]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.z])},
cf:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.M(0,0,0)
this.d.H(0,new F.kp(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.ac()
z=this.a.e
if(!(z==null))z.aB(0)}return!0},
cd:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.M(0,0,0)
this.d.H(0,new F.ko(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.ac()
z=this.a.e
if(!(z==null))z.aB(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
D:function(a){var z,y,x
z=H.d([],[P.k])
C.a.h(z,C.b.az(J.al(this.e),0))
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
x=C.a.A(z,", ")
return a+"{"+x+"}"},
R:function(){return this.D("")},
p:{
cB:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.as()
y=new F.kn(z)
y.b=H.d([],[F.ew])
z.b=y
y=new F.kj(z)
x=[F.eg]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.kg(z)
x=[F.ap]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fc()
z.e=0
y=$.$get$aj()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aA().a)!==0?f:null
z.z=(x&$.$get$aT().a)!==0?g:null
z.Q=(x&$.$get$fd().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
kp:{"^":"p:9;a",
$1:function(a){var z,y
H.e(a,"$isap")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
ko:{"^":"p:9;a",
$1:function(a){var z,y
H.e(a,"$isap")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kf:{"^":"b;a,0b,0c",
B:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.ac()
return!0},
ht:function(a,b,c,d,e,f,g,h,i){var z=F.cB(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bm:function(a,b,c,d,e,f){return this.ht(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cf()
return!0},
ce:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cd()
return!0},
hw:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
this.B()
z=H.d([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}},
kg:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
H:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ap]})
C.a.H(this.b,b)
C.a.H(this.c,new F.kh(this,b))
C.a.H(this.d,new F.ki(this,b))},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}},
kh:{"^":"p:9;a,b",
$1:function(a){H.e(a,"$isap")
if(!J.R(a.a,this.a))this.b.$1(a)}},
ki:{"^":"p:9;a,b",
$1:function(a){var z
H.e(a,"$isap")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
kj:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}},
kl:{"^":"b;"},
kk:{"^":"kl;",
b4:function(a,b,c){return J.R(b.f,c.f)}},
km:{"^":"b;"},
iz:{"^":"km;",
hW:function(a){var z,y,x,w,v,u,t,s
H.u(a,"$isc",[F.as],"$asc")
z=new V.M(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.R(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}return}},
kn:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.R()},
D:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.A(z,"\n")},
R:function(){return this.D("")}}}],["","",,O,{"^":"",hA:{"^":"bL;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
a0:function(a){var z=this.r
if(!(z==null))z.w(a)},
ap:function(){return this.a0(null)},
sdG:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.ap()}},
sdE:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.ap()}},
sdD:function(a){var z=a==null?V.b_():a
this.f=z
if(!z.u(0,a)){this.f=a
this.ap()}},
a8:function(a,b){},
N:function(a,b){H.u(a,"$isc",[T.bM],"$asc")
if(b!=null)if(!C.a.b0(a,b)){b.a=a.length
C.a.h(a,b)}},
cL:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.e(a.fr.j(0,"Distort"),"$ise3")
if(z==null){y=a.a
z=new A.e3(y,"Distort")
z.bM(y,"Distort")
z.cv(0,$.hC,$.hB)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"txt2DAttr")
z.z=H.i(z.r.n(0,"projViewObjMat"),"$isar")
z.Q=H.i(z.r.n(0,"colorTxt2DMat"),"$iscc")
z.ch=H.i(z.r.n(0,"bumpTxt2DMat"),"$iscc")
z.cx=H.i(z.r.n(0,"colorTxt"),"$isaf")
z.cy=H.i(z.r.n(0,"bumpTxt"),"$isaf")
z.db=H.i(z.r.n(0,"nullColorTxt"),"$isK")
z.dx=H.i(z.r.n(0,"nullBumpTxt"),"$isK")
z.dy=H.i(z.r.n(0,"bumpMat"),"$isar")
a.c6(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$aj()
v=$.$get$aA()
v=y.cc(new Z.dm(x),new Z.b1(w.a|v.a))
v.al($.$get$aj()).e=this.a.x.c
v.al($.$get$aA()).e=this.a.y.c
b.e=v}u=H.d([],[T.bM])
this.N(u,this.b)
this.N(u,this.c)
for(t=0;t<u.length;++t){y=u[t]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=this.a
y.W(a)
x=this.b
y.a6(y.cx,y.db,x)
x=this.c
y.a6(y.cy,y.dx,x)
x=a.gek()
w=y.z
w.toString
w.a3(x.a2(0,!0))
x=this.d
w=y.Q
w.toString
w.a3(x.a2(0,!0))
x=this.e
w=y.ch
w.toString
w.a3(x.a2(0,!0))
x=this.f
y=y.dy
y.toString
y.a3(x.a2(0,!0))
y=b.e
if(y instanceof Z.cl){y.W(a)
y.a7(a)
y.ad(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cl()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},ik:{"^":"bL;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
a0:[function(a){var z
H.e(a,"$iso")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.a0(null)},"ap","$1","$0","gbN",0,2,0],
fQ:[function(a){H.e(a,"$iso")
this.a=null
this.a0(a)},function(){return this.fQ(null)},"j1","$1","$0","gfP",0,2,0],
iD:[function(a,b){var z=V.aE
z=new D.c5(a,H.u(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a0(z)},"$2","gfg",8,0,24],
iE:[function(a,b){var z=V.aE
z=new D.c6(a,H.u(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a0(z)},"$2","gfh",8,0,24],
d6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a5(z.e.length+3,4)*4
x=C.e.a5(z.f.length+3,4)*4
w=C.e.a5(z.r.length+3,4)*4
v=C.e.a5(z.x.length+3,4)*4
u=C.e.a5(z.y.length+3,4)*4
t=C.e.a5(z.z.length+3,4)*4
s=C.e.a5(this.e.a.length+3,4)*4
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
a6=$.$get$aj()
if(c){z=$.$get$aS()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aR()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aA()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aQ()
a6=new Z.b1(a6.a|z.a)}return new A.ip(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.u(a,"$isc",[T.bM],"$asc")},
a8:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
x=new V.M(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cO(x)}}},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d6()
y=H.e(a.fr.j(0,z.aw),"$isen")
if(y==null){y=A.il(z,a.a)
a.c6(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aQ
z=b.e
if(!(z instanceof Z.cl)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.au()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.ce()
u.a.ce()
u=u.e
if(!(u==null))u.aB(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hw()
t=t.e
if(!(t==null))t.aB(0)}r=b.d.cc(new Z.dm(a.a),w)
r.al($.$get$aj()).e=this.a.y.c
if(z)r.al($.$get$aS()).e=this.a.Q.c
if(v)r.al($.$get$aR()).e=this.a.z.c
if(x.rx)r.al($.$get$aA()).e=this.a.ch.c
if(u)r.al($.$get$aT()).e=this.a.cx.c
if(x.x1)r.al($.$get$aQ()).e=this.a.cy.c
b.e=r}z=T.bM
q=H.d([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gZ(u)
v=v.db
v.toString
v.a3(u.a2(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gZ(u)
t=a.dx
t=u.k(0,t.gZ(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a3(u.a2(0,!0))}v=this.a
u=a.gek()
v=v.fr
v.toString
v.a3(u.a2(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a3(u.a2(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a3(u.a2(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a3(C.u.a2(u,!0))}if(x.aP>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.z],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.e(t,"$isaE")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bp(H.u(t.a2(0,!0),"$isc",v,"$asc")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.N(q,this.f.d)
v=this.a
u=this.f.d
v.a6(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.N(q,this.f.e)
v=this.a
u=this.f.e
v.ah(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.N(q,this.r.d)
v=this.a
u=this.r.d
v.a6(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.N(q,this.r.e)
v=this.a
u=this.r.e
v.ah(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.N(q,this.x.d)
v=this.a
u=this.x.d
v.a6(v.aP,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.N(q,this.x.e)
v=this.a
u=this.x.e
v.ah(v.aw,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bp
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.N(q,this.y.d)
v=this.a
u=this.y.d
v.a6(v.dL,v.bq,u)
u=this.a
v=this.y.f
u=u.bp
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.N(q,this.y.e)
v=this.a
u=this.y.e
v.ah(v.dM,v.bq,u)
u=this.a
v=this.y.f
u=u.bp
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.br
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bt
u.a.uniform1f(u.d,s)
break
case C.f:this.N(q,this.z.d)
v=this.a
u=this.z.d
v.a6(v.dN,v.bs,u)
u=this.a
v=this.z.f
u=u.br
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bt
v.a.uniform1f(v.d,s)
break
case C.h:this.N(q,this.z.e)
v=this.a
u=this.z.e
v.ah(v.dO,v.bs,u)
u=this.a
v=this.z.f
u=u.br
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bt
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dZ
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cn
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cO(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e_
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.co
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gb7(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=m.be(j.gb7(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gan(j)
g=i.d
h=t.gbE()
s=t.gbf()
t=t.gbn()
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
v=this.a.e0
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cp
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gb7(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gck(j).j8()
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.be(j.gb7(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gan(j)
s=i.e
h=t.gbE()
g=t.gbf()
t=t.gbn()
s.a.uniform3f(s.d,h,g,t)
t=j.gj6()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj5()
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
v=this.a.e1
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
s=this.a.cq
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gba()
H.u(q,"$isc",t,"$asc")
if(!C.a.b0(q,s)){s.seb(0,q.length)
C.a.h(q,s)}s=j.gck(j)
h=i.d
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=j.gbF()
f=i.b
g=s.gaM(s)
h=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,h,s)
s=j.gb8(j)
h=i.c
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=m.cO(j.gck(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gan(j)
g=i.f
f=h.gbE()
s=h.gbf()
h=h.gbn()
g.a.uniform3f(g.d,f,s,h)
h=j.gba()
s=h.gef(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdg()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gdd())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e2
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.y,u=v.length,t=[P.z],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
h=this.a.cr
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gba()
H.u(q,"$isc",s,"$asc")
if(!C.a.b0(q,h)){h.seb(0,q.length)
C.a.h(q,h)}e=m.k(0,j.gZ(j))
h=j.gZ(j).be(new V.a3(0,0,0))
g=i.b
f=h.gcR(h)
d=h.gcS(h)
h=h.gcT(h)
g.a.uniform3f(g.d,f,d,h)
h=e.be(new V.a3(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cA(0)
d=i.d
n=new Float32Array(H.bp(H.u(new V.bF(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a2(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gan(j)
h=i.e
f=d.gbE()
g=d.gbf()
d=d.gbn()
h.a.uniform3f(h.d,f,g,d)
d=j.gba()
h=d.gef(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdg()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdd())
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
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cs
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gba()
H.u(q,"$isc",z,"$asc")
if(!C.a.b0(q,t)){t.seb(0,q.length)
C.a.h(q,t)}t=j.gb7(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gck(j)
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=j.gbF()
s=i.d
h=t.gaM(t)
g=t.gaN(t)
t=t.gaO()
s.a.uniform3f(s.d,h,g,t)
t=j.gb8(j)
g=i.e
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.be(j.gb7(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gba()
s=t.gef(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdg()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdd())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gan(j)
s=i.y
h=t.gbE()
g=t.gbf()
t=t.gbn()
s.a.uniform3f(s.d,h,g,t)
t=j.gjd()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gje()
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
case C.i:break
case C.f:this.N(q,this.Q.d)
z=this.a
v=this.Q.d
z.a6(z.dP,z.bu,v)
break
case C.h:this.N(q,this.Q.e)
z=this.a
v=this.Q.e
z.ah(z.dQ,z.bu,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gZ(v).cA(0)
a.Q=v}z=z.fy
z.toString
z.a3(v.a2(0,!0))}if(x.dy){this.N(q,this.ch)
z=this.a
v=this.ch
z.ah(z.dR,z.dS,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bv
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.N(q,this.cx.d)
z=this.a
v=this.cx.d
z.a6(z.dT,z.bw,v)
v=this.a
z=this.cx.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.h:this.N(q,this.cx.e)
z=this.a
v=this.cx.e
z.ah(z.dU,z.bw,v)
v=this.a
z=this.cx.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.by
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bx
v.a.uniform1f(v.d,t)
break
case C.f:this.N(q,this.cy.d)
z=this.a
v=this.cy.d
z.a6(z.dV,z.bz,v)
v=this.a
z=this.cy.f
v=v.by
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,t)
break
case C.h:this.N(q,this.cy.e)
z=this.a
v=this.cy.e
z.ah(z.dW,z.bz,v)
v=this.a
z=this.cy.f
v=v.by
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bA
z.a.uniform1f(z.d,u)
break
case C.f:this.N(q,this.db.d)
z=this.a
u=this.db.d
z.a6(z.dX,z.bB,u)
u=this.a
z=this.db.f
u=u.bA
u.a.uniform1f(u.d,z)
break
case C.h:this.N(q,this.db.e)
z=this.a
u=this.db.e
z.ah(z.dY,z.bB,u)
u=this.a
z=this.db.f
u=u.bA
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.a7(a)
z.ad(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].ad(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.cl()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d6().aw}},im:{"^":"d6;0f,a,b,0c,0d,0e"},d6:{"^":"b;",
bj:["eF",function(){}]},io:{"^":"d6;a,b,0c,0d,0e"},ba:{"^":"d6;0f,a,b,0c,0d,0e",
dn:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.a0(y)}},
bj:["bL",function(){this.eF()
this.dn(new V.a_(1,1,1))}],
san:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bj()
z=this.a
z.a=null
z.a0(null)}this.dn(b)}},iq:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fS:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.a0(z)}},
bj:function(){this.bL()
this.fS(1)}},ir:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
c2:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.a0(z)}},
bj:function(){this.bL()
this.c2(100)}},jd:{"^":"bL;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
a0:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.w(a)},function(){return this.a0(null)},"ap","$1","$0","gbN",0,2,0],
a8:function(a,b){},
cL:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$iseC")
if(z==null){y=a.a
z=new A.eC(y,"Skybox")
z.bM(y,"Skybox")
z.cv(0,$.jf,$.je)
z.x=z.f.j(0,"posAttr")
z.y=H.i(z.r.j(0,"fov"),"$isX")
z.z=H.i(z.r.j(0,"ratio"),"$isX")
z.Q=H.i(z.r.j(0,"boxClr"),"$isL")
z.ch=H.i(z.r.j(0,"boxTxt"),"$isai")
z.cx=H.i(z.r.j(0,"viewMat"),"$isar")
a.c6(z)}this.a=z}if(b.e==null){y=b.d.cc(new Z.dm(a.a),$.$get$aj())
y.al($.$get$aj()).e=this.a.x.c
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
w.ch.eA(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gZ(x).cA(0)
w=w.cx
w.toString
w.a3(x.a2(0,!0))
y=b.e
if(y instanceof Z.cl){y.W(a)
y.a7(a)
y.ad(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cl()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bL:{"^":"b;"}}],["","",,T,{"^":"",bM:{"^":"cQ;"},jp:{"^":"bM;"},jt:{"^":"jp;0a,0b,0c,0d,0e,0f,0r,0x,0y",
dq:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.cm()}},
gq:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
p:{
dg:function(a,b){var z=new T.jt()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},eI:{"^":"bM;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z}},ju:{"^":"b;a,0b,0c,0d,0e",
hU:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.d_(null,a,null)
w=T.dg(0,y)
z=W.a8
W.Z(x,"load",H.f(new T.jw(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hT:function(a){return this.hU(a,!1,!1,!1,!1)},
aH:function(a,b,c,d,e,f){var z,y
z=W.d_(null,c,null);++this.d
y=W.a8
W.Z(z,"load",H.f(new T.jv(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dm:function(a,b,c){var z,y,x,w
b=V.bZ(b,2)
z=V.bZ(a.width,2)
y=V.bZ(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cV(null,null)
x.width=z
x.height=y
w=H.e(C.l.ev(x,"2d"),"$isdQ")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mw(w.getImageData(0,0,x.width,x.height))}}},jw:{"^":"p:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dm(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.r.en(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.dq();++x.e}},jv:{"^":"p:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dm(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.r.en(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cm()}++z.e}}}],["","",,V,{"^":"",ha:{"^":"b;",
b3:function(a,b){return!0},
i:function(a){return"all"},
$isca:1},ca:{"^":"b;"},em:{"^":"b;",
b3:["eE",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b3(0,b))return!0
return!1}],
i:["cX",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isca:1},bH:{"^":"em;0a",
b3:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.cX(0)+"]"}},j3:{"^":"b;0a",
eJ:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aZ(0,0,[P.m,P.ac])
for(y=new H.ej(a,a.gl(a),0,[H.au(a,"w",0)]);y.E();)z.m(0,y.d,!0)
this.a=z},
b3:function(a,b){return this.a.bo(0,b)},
i:function(a){var z=this.a
return P.cb(z.gao(z),0,null)},
$isca:1,
p:{
a7:function(a){var z=new V.j3()
z.eJ(a)
return z}}},eE:{"^":"b;a,b,0c,0d",
ghY:function(a){return this.b},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eP(this.a.L(0,b))
w.a=H.d([],[V.ca])
w.c=!1
C.a.h(this.c,w)
return w},
hF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b3(0,a))return w}return},
i:function(a){return this.b}},eM:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h1(this.b,"\n","\\n")
y=H.h1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eN:{"^":"b;a,b,0c",
i:function(a){return this.b}},jE:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eE(this,b)
z.c=H.d([],[V.eP])
this.a.m(0,b,z)}return z},
bc:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eN(this,a)
y=P.k
z.c=new H.aZ(0,0,[y,y])
this.b.m(0,a,z)}return z},
it:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eM])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hF(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cb(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghY(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cb(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eM(o==null?p.b:o,q,t)}++t}}}},eP:{"^":"em;b,0c,0a",
i:function(a){return this.b.b+": "+this.cX(0)}}}],["","",,X,{"^":"",hd:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
aj:function(a){var z=this.dy
if(!(z==null))z.w(a)},
sae:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.x=null
this.a=b
this.c=b
z=new D.H("width",z,b,this,[P.m])
z.b=!0
this.aj(z)}},
sa9:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.x=null
this.b=b
this.d=b
z=new D.H("height",z,b,this,[P.m])
z.b=!0
this.aj(z)}},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sae(0,C.e.Y(z*y))
y=a.a.drawingBufferHeight
z=this.r
if(typeof y!=="number")return y.k()
this.sa9(0,C.e.Y(y*z))}if(this.x==null){z=a.a
y=this.Q
x=this.a
w=this.b
v=H.C(z.getParameter(3379))
u=V.bZ(x,2)
t=V.bZ(w,2)
v=V.bZ(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.r.eo(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.dg(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.dq()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cm()
y=this.Q
x=y.b
this.y=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.z=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.x=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.y,0)
z.framebufferRenderbuffer(36160,36096,36161,this.z)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.x)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dx
y=z.c
a.c=C.d.Y(y*this.a)
x=z.d
a.d=C.d.Y(x*this.b)
w=this.c
if(typeof w!=="number")return H.n(w)
q=C.d.Y(z.a*w)
p=this.d
if(typeof p!=="number")return H.n(p)
o=C.d.Y(z.b*p)
n=C.d.Y(y*w)
m=C.d.Y(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.cy)
if(this.cx){z=a.a
y=this.ch
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
ad:function(a){a.a.bindFramebuffer(36160,null)}},cm:{"^":"b;",$isaH:1},hR:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.G()
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
if(typeof y!=="number")return H.n(y)
v=C.d.Y(w.a*y)
if(typeof x!=="number")return H.n(x)
u=C.d.Y(w.b*x)
t=C.d.Y(w.c*y)
a.c=t
w=C.d.Y(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
ad:function(a){},
p:{
e8:function(a,b,c,d,e,f,g){var z,y
z=new X.hR()
y=new V.aD(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dc(0,0,1,1)
z.r=y
return z}}},hS:{"^":"b;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
W:function(a){var z
a.cy.bD(V.b_())
z=V.b_()
a.db.bD(z)},
ad:function(a){a.cy.aA()
a.db.aA()},
$isaH:1,
$iscm:1},iC:{"^":"b;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
aj:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.w(a)},function(){return this.aj(null)},"iw","$1","$0","geR",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bD(V.aF(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.ev
if(z==null){z=V.eo(new V.a3(0,0,0),new V.M(0,1,0),new V.M(0,0,-1))
$.ev=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aV(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bD(r)},
ad:function(a){a.cy.aA()
a.db.aA()},
$isaH:1,
$iscm:1,
p:{
eu:function(a,b,c,d){var z,y,x,w
z=new X.iC()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gq()
x.toString
w=H.f(z.geR(),{func:1,ret:-1,args:[D.o]})
C.a.h(x.a,w)}x=new D.H("mover",y,z.a,z,[U.ah])
x.b=!0
z.aj(x)}x=z.b
if(!$.q.$2(x,b)){y=z.b
z.b=b
x=new D.H("fov",y,b,z,[P.z])
x.b=!0
z.aj(x)}x=z.c
if(!$.q.$2(x,d)){y=z.c
z.c=d
x=new D.H("near",y,d,z,[P.z])
x.b=!0
z.aj(x)}x=z.d
if(!$.q.$2(x,a)){y=z.d
z.d=a
x=new D.H("far",y,a,z,[P.z])
x.b=!0
z.aj(x)}return z}}},cy:{"^":"b;"}}],["","",,V,{"^":"",
mV:function(a){P.jD(C.H,new V.mW(a))},
mW:{"^":"p:48;a",
$1:function(a){H.e(a,"$isbk")
P.dF(C.d.eq(this.a.ghJ(),2)+" fps")}},
j8:{"^":"b;0a,0b",
eK:function(a,b){var z,y,x,w,v,u,t
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
t=W.a8
W.Z(z,"scroll",H.f(new V.jb(x),{func:1,ret:-1,args:[t]}),!1,t)},
dB:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isc",[P.k],"$asc")
this.fX()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.it(C.a.hP(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.h0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cF(C.T,s,C.k,!1)
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
hq:function(a){var z,y,x,w,v,u,t
H.u(a,"$isc",[P.k],"$asc")
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
x=H.e(w.insertCell(-1),"$isdf").style
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
t=H.e(w.insertCell(-1),"$isdf")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fX:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jE()
y=P.k
z.a=new H.aZ(0,0,[y,V.eE])
z.b=new H.aZ(0,0,[y,V.eN])
z.c=z.L(0,"Start")
y=z.L(0,"Start").A(0,"Bold")
x=V.a7(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").A(0,"Bold")
x=new V.bH()
w=[V.ca]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").A(0,"BoldEnd")
x=V.a7(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Italic")
x=V.a7(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").A(0,"Italic")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").A(0,"ItalicEnd")
x=V.a7(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Code")
x=V.a7(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").A(0,"Code")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").A(0,"CodeEnd")
x=V.a7(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"LinkHead")
x=V.a7(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").A(0,"LinkTail")
x=V.a7(new H.a4("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").A(0,"LinkEnd")
y=V.a7(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").A(0,"LinkHead")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").A(0,"LinkEnd")
y=V.a7(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").A(0,"LinkTail")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").A(0,"Other").a,new V.ha())
x=z.L(0,"Other").A(0,"Other")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.bc("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.bc("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.bc("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.bc("Link")
x=z.L(0,"Other")
x.d=x.a.bc("Other")
this.b=z},
p:{
j9:function(a,b){var z=new V.j8()
z.eK(a,!0)
return z}}},
jb:{"^":"p:13;a",
$1:function(a){P.eK(C.q,new V.ja(this.a))}},
ja:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.d.Y(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jq:{"^":"b;a,b,0c,d",
dz:function(a,b,c){var z,y,x,w,v,u
z=W.d_(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.ci(this.c)
x=y.gl(y)
y=W.a9
W.Z(z,"click",H.f(new V.js(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.ci(this.c).h(0,z)
J.ci(this.c).h(0,document.createElement("br"))
w=P.f8().gcI().j(0,H.l(this.a))
if(w==null){this.dv(x)
v=c}else{u=P.bY(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.dz(a,b,!1)},
dv:function(a){var z,y,x,w,v
z=P.f8()
y=P.k
x=P.i8(z.gcI(),y,y)
x.m(0,this.a,H.l(a))
w=z.el(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lt([],[]).cP(""),"",v)}},
js:{"^":"p:49;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isa9")
z=this.a
y=J.ci(z.c)
y.H(y,new V.jr())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dv(this.d)}},
jr:{"^":"p:50;",
$1:function(a){var z
H.e(a,"$isV")
if(!!J.I(a).$iscZ){z=a.style
z.border="solid 2px white"}}}}],["","",,X,{"^":"",
fX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.j9("Test 029",!0)
y=W.cV(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.k]
z.dB(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],x))
z.hq(H.d(["bumpMaps"],x))
z.dB(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jB(w,!0,!0,!0,!1)
u=new U.e9()
z=U.ah
u.bh(z)
u.aW(u.gfe(),u.gfC())
u.e=null
u.f=V.b_()
u.r=0
t=v.r
s=new U.k5()
r=U.cX()
r.scQ(0,!0)
r.scB(6.283185307179586)
r.scD(0)
r.saa(0,0)
r.scC(100)
r.sS(0)
r.scj(0.5)
s.b=r
r=r.gq()
r.toString
q={func:1,ret:-1,args:[D.o]}
p=H.f(s.gaI(),q)
C.a.h(r.a,p)
r=U.cX()
r.scQ(0,!0)
r.scB(6.283185307179586)
r.scD(0)
r.saa(0,0)
r.scC(100)
r.sS(0)
r.scj(0.5)
s.c=r
C.a.h(r.gq().a,p)
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
o=new X.aG(!1,!1,!1)
n=s.d
s.d=o
r=[X.aG]
p=new D.H("modifiers",n,o,s,r)
p.b=!0
s.P(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.H("invertX",p,!1,s,[P.ac])
p.b=!0
s.P(p)}p=s.r
if(p!==!1){s.r=!1
p=new D.H("invertY",p,!1,s,[P.ac])
p.b=!0
s.P(p)}s.aZ(t)
u.h(0,s)
t=v.r
s=new U.k4()
p=U.cX()
p.scQ(0,!0)
p.scB(6.283185307179586)
p.scD(0)
p.saa(0,0)
p.scC(100)
p.sS(0)
p.scj(0.2)
s.b=p
p=p.gq()
p.toString
m=H.f(s.gaI(),q)
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
o=new X.aG(!0,!1,!1)
n=s.c
s.c=o
p=new D.H("modifiers",n,o,s,r)
p.b=!0
s.P(p)
s.aZ(t)
u.h(0,s)
t=v.r
s=new U.k6()
s.c=0.01
s.d=0
s.e=0
o=new X.aG(!1,!1,!1)
s.b=o
r=new D.H("modifiers",null,o,s,r)
r.b=!0
s.P(r)
s.aZ(t)
u.h(0,s)
u.h(0,U.dU(V.aF(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.eu(2000,1.0471975511965976,u,0.1)
k=new X.hd()
k.a=512
k.b=512
k.c=512
k.d=512
k.e=!0
k.f=!0
k.r=1
k.Q=T.dg(0,null)
k.ch=new V.aD(0,0,0,1)
k.cx=!0
k.cy=2000
k.db=!0
k.dx=V.dc(0,0,1,1)
k.sae(0,800)
k.sa9(0,600)
if(k.cx){k.cx=!1
t=new D.H("clearColor",!0,!1,k,[P.ac])
t.b=!0
k.aj(t)}j=E.e5(null,!0,null,"",null,null)
j.sbJ(0,F.mZ(30,1,15,0.5))
i=new O.ik()
t=O.cW(V.aE)
i.e=t
t.aW(i.gfg(),i.gfh())
t=new O.ba(i,"emission")
t.c=C.c
t.f=new V.a_(0,0,0)
i.f=t
t=new O.ba(i,"ambient")
t.c=C.c
t.f=new V.a_(0,0,0)
i.r=t
t=new O.ba(i,"diffuse")
t.c=C.c
t.f=new V.a_(0,0,0)
i.x=t
t=new O.ba(i,"invDiffuse")
t.c=C.c
t.f=new V.a_(0,0,0)
i.y=t
t=new O.ir(i,"specular")
t.c=C.c
t.f=new V.a_(0,0,0)
t.ch=100
i.z=t
t=new O.io(i,"bump")
t.c=C.c
i.Q=t
i.ch=null
t=new O.ba(i,"reflect")
t.c=C.c
t.f=new V.a_(0,0,0)
i.cx=t
t=new O.iq(i,"refract")
t.c=C.c
t.f=new V.a_(0,0,0)
t.ch=1
i.cy=t
t=new O.im(i,"alpha")
t.c=C.c
t.f=1
i.db=t
t=new D.i1()
t.bh(D.a2)
t.e=H.d([],[D.co])
t.f=H.d([],[D.iE])
t.r=H.d([],[D.jg])
t.x=H.d([],[D.jx])
t.y=H.d([],[D.jy])
t.z=H.d([],[D.jz])
t.Q=null
t.ch=null
t.cV(t.gff(),t.gfB(),t.gfD())
i.dx=t
s=t.Q
if(s==null){s=D.G()
t.Q=s
t=s}else t=s
s=H.f(i.gfP(),q)
C.a.h(t.a,s)
s=i.dx
t=s.ch
if(t==null){t=D.G()
s.ch=t}s=H.f(i.gbN(),q)
C.a.h(t.a,s)
i.dy=null
s=i.dx
t=U.dU(V.eo(new V.a3(0,0,0),new V.M(0,1,0),new V.M(0,-1,-1)))
h=new V.a_(1,1,1)
r=new D.co()
r.c=new V.a_(1,1,1)
r.a=new V.M(0,0,1)
n=r.b
r.b=t
t=t.gq()
t.toString
p=H.f(r.geO(),q)
C.a.h(t.a,p)
z=new D.H("mover",n,r.b,r,[z])
z.b=!0
r.aE(z)
if(!r.c.u(0,h)){n=r.c
r.c=h
z=new D.H("color",n,h,r,[V.a_])
z.b=!0
r.aE(z)}s.h(0,r)
z=i.r
z.san(0,new V.a_(0,0,1))
z=i.x
z.san(0,new V.a_(0,1,0))
z=i.z
z.san(0,new V.a_(1,0,0))
z=i.z
if(z.c===C.c){z.c=C.i
z.bL()
z.c2(100)
t=z.a
t.a=null
t.a0(null)}z.c2(10)
z=v.f
t=z.a
g=t.createTexture()
t.bindTexture(34067,g)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
f=new T.eI()
f.a=0
f.b=g
f.c=!1
f.d=0
z.aH(f,g,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aH(f,g,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aH(f,g,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aH(f,g,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aH(f,g,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aH(f,g,"../resources/maskonaive/negz.jpg",34074,!1,!1)
e=M.dV(null,null,null)
z=new O.jd()
z.b=1.0471975511965976
n=z.c
z.c=f
t=f.gq()
t.toString
s=H.f(z.gbN(),q)
C.a.h(t.a,s)
t=new D.H("boxTexture",n,z.c,z,[T.eI])
t.b=!0
z.a0(t)
h=new V.a_(1,1,1)
if(!J.R(z.d,h)){n=z.d
z.d=h
t=new D.H("boxColor",n,h,z,[V.a_])
t.b=!0
z.a0(t)}z.e=null
e.saU(z)
e.sb9(0,k)
e.sb_(l)
d=new M.hJ()
z=O.cW(E.aO)
d.d=z
z.aW(d.gfj(),d.gfk())
d.e=null
d.f=null
d.r=null
d.x=null
d.sb_(null)
d.sb9(0,null)
d.saU(null)
d.sb_(l)
d.saU(i)
d.sb9(0,k)
d.d.h(0,j)
c=new O.hA()
c.sdG(null)
c.sdE(null)
b=new V.bF(1,0,0,0,1,0,0,0,1)
if(!J.R(c.d,b)){c.d=b
c.ap()}b=new V.bF(1,0,0,0,1,0,0,0,1)
if(!J.R(c.e,b)){c.e=b
c.ap()}c.sdD(null)
c.sdG(k.Q)
c.sdD(V.ep(0.05,0.05,0.05,1))
a=M.dV(null,null,null)
a.saU(c)
z=M.aI
t=H.d([e,d,a],[z])
s=new M.ho()
s.bh(z)
s.e=!1
s.f=null
s.aW(s.gfE(),s.gfF())
s.c5(0,t)
z=v.d
if(z!==s){if(z!=null){z=z.gq()
z.toString
t=H.f(v.gcZ(),q)
C.a.U(z.a,t)}v.d=s
z=s.gq()
z.toString
q=H.f(v.gcZ(),q)
C.a.h(z.a,q)
v.eM()}z=new V.jq("bumpMaps",!0,new X.mO(c,v))
x=x.getElementById("bumpMaps")
z.c=x
if(x==null)H.t("Failed to find bumpMaps for Texture2DGroup")
z.dz(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
V.mV(v)},
mO:{"^":"p:19;a,b",
$1:function(a){this.a.sdE(this.b.f.hT(a))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ec.prototype
return J.eb.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.aM=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.cg=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.mD=function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.mE=function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.dB=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.bu=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.h3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mD(a).K(a,b)}
J.dG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mE(a).k(a,b)}
J.dH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).j(a,b)}
J.cN=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cg(a).m(a,b,c)}
J.h4=function(a,b){return J.dB(a).F(a,b)}
J.h5=function(a,b,c){return J.bu(a).fN(a,b,c)}
J.h6=function(a,b,c,d){return J.bu(a).dA(a,b,c,d)}
J.h7=function(a,b){return J.dB(a).X(a,b)}
J.cO=function(a,b,c){return J.aM(a).hy(a,b,c)}
J.cP=function(a,b){return J.cg(a).I(a,b)}
J.h8=function(a,b,c,d){return J.cg(a).ax(a,b,c,d)}
J.dI=function(a,b){return J.cg(a).H(a,b)}
J.ci=function(a){return J.bu(a).gcg(a)}
J.c_=function(a){return J.I(a).gT(a)}
J.by=function(a){return J.cg(a).ga1(a)}
J.aw=function(a){return J.aM(a).gl(a)}
J.h9=function(a,b){return J.bu(a).ih(a,b)}
J.al=function(a){return J.I(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cU.prototype
C.I=J.r.prototype
C.a=J.b9.prototype
C.J=J.eb.prototype
C.e=J.ec.prototype
C.u=J.ed.prototype
C.d=J.c7.prototype
C.b=J.c8.prototype
C.Q=J.c9.prototype
C.W=H.db.prototype
C.X=W.iy.prototype
C.A=J.iD.prototype
C.r=P.dd.prototype
C.t=J.ce.prototype
C.B=W.bQ.prototype
C.C=W.ks.prototype
C.E=new P.hf(!1)
C.D=new P.he(C.E)
C.F=new P.iB()
C.G=new P.ke()
C.j=new P.lf()
C.c=new A.cn(0,"ColorSourceType.None")
C.i=new A.cn(1,"ColorSourceType.Solid")
C.f=new A.cn(2,"ColorSourceType.Texture2D")
C.h=new A.cn(3,"ColorSourceType.TextureCube")
C.q=new P.b5(0)
C.H=new P.b5(5e6)
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=H.d(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.d(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.T=H.d(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.y=H.d(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.U=H.d(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.z=H.d(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.d(I.ak([]),[P.k])
C.V=new H.hs(0,{},C.R,[P.k,P.k])
C.k=new P.k7(!1)
$.aC=0
$.bz=null
$.dM=null
$.du=!1
$.fS=null
$.fM=null
$.h_=null
$.cI=null
$.cL=null
$.dC=null
$.bq=null
$.bU=null
$.bV=null
$.dv=!1
$.U=C.j
$.e1=null
$.e0=null
$.e_=null
$.dZ=null
$.q=V.is()
$.hC="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.hB="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.jf="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.je="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ev=null
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
I.$lazy(y,x,w)}})(["dY","$get$dY",function(){return H.fR("_$dart_dartClosure")},"d2","$get$d2",function(){return H.fR("_$dart_js")},"eQ","$get$eQ",function(){return H.aJ(H.cz({
toString:function(){return"$receiver$"}}))},"eR","$get$eR",function(){return H.aJ(H.cz({$method$:null,
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aJ(H.cz(null))},"eT","$get$eT",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aJ(H.cz(void 0))},"eY","$get$eY",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aJ(H.eW(null))},"eU","$get$eU",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aJ(H.eW(void 0))},"eZ","$get$eZ",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.kt()},"bW","$get$bW",function(){return[]},"fb","$get$fb",function(){return P.kb()},"fh","$get$fh",function(){return H.iw(H.bp(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fC","$get$fC",function(){return P.iU("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fI","$get$fI",function(){return P.md()},"dW","$get$dW",function(){return{}},"fe","$get$fe",function(){return Z.at(0)},"fc","$get$fc",function(){return Z.at(511)},"aj","$get$aj",function(){return Z.at(1)},"aS","$get$aS",function(){return Z.at(2)},"aR","$get$aR",function(){return Z.at(4)},"aA","$get$aA",function(){return Z.at(8)},"aT","$get$aT",function(){return Z.at(16)},"bO","$get$bO",function(){return Z.at(32)},"bP","$get$bP",function(){return Z.at(64)},"fd","$get$fd",function(){return Z.at(96)},"bn","$get$bn",function(){return Z.at(128)},"aQ","$get$aQ",function(){return Z.at(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.m,[P.j,E.aO]]},{func:1,ret:P.F,args:[F.ap]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[D.o]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.F,args:[W.a8]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.k,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.z},{func:1,ret:P.F,args:[P.k]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[P.m,[P.j,U.ah]]},{func:1,ret:-1,args:[P.m,[P.j,M.aI]]},{func:1,ret:-1,args:[P.m,[P.j,V.aE]]},{func:1,ret:W.V,args:[W.N]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,args:[P.k]},{func:1,ret:-1,args:[P.b],opt:[P.ay]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.F,args:[P.a1]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:P.ac,args:[P.z,P.z]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ac,args:[[P.j,D.a2]]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:[P.J,P.k,P.k],args:[[P.J,P.k,P.k],P.k]},{func:1,ret:P.P,args:[P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:P.P,args:[,,]},{func:1,ret:V.a3,args:[P.z]},{func:1,ret:P.F,args:[F.as,P.z,P.z]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.k]},{func:1,ret:P.F,args:[P.bk]},{func:1,ret:P.F,args:[W.a9]},{func:1,ret:P.F,args:[W.V]},{func:1,ret:P.F,args:[P.k,,]},{func:1,ret:P.ac,args:[W.N]}]
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
if(x==y)H.mY(d||a)
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
Isolate.ak=a.ak
Isolate.dz=a.dz
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fX,[])
else X.fX([])})})()
//# sourceMappingURL=test.dart.js.map
