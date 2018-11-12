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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dJ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dK=function(){}
var dart=[["","",,H,{"^":"",nS:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cQ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dN==null){H.n3()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cg("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d8()]
if(v!=null)return v
v=H.n6(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d8(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
u:function(a,b){return a===b},
gU:function(a){return H.bK(a)},
j:["eM",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
io:{"^":"u;",
j:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isa3:1},
ew:{"^":"u;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gU:function(a){return 0},
$isH:1},
d9:{"^":"u;",
gU:function(a){return 0},
j:["eN",function(a){return String(a)}]},
j4:{"^":"d9;"},
cE:{"^":"d9;"},
c9:{"^":"d9;",
j:function(a){var z=a[$.$get$ec()]
if(z==null)return this.eN(a)
return"JavaScript function for "+H.k(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd5:1},
bd:{"^":"u;$ti",
h:function(a,b){H.A(b,H.w(a,0))
if(!!a.fixed$length)H.q(P.C("add"))
a.push(b)},
iw:function(a,b){if(!!a.fixed$length)H.q(P.C("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cc(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.q(P.C("remove"))
for(z=0;z<a.length;++z)if(J.L(a[z],b)){a.splice(z,1)
return!0}return!1},
b2:function(a,b){var z,y
H.v(b,"$isi",[H.w(a,0)],"$asi")
if(!!a.fixed$length)H.q(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.ba(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
i2:function(a){return this.E(a,"")},
hW:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.w(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.ba(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
c_:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
ghU:function(a){if(a.length>0)return a[0]
throw H.a(H.es())},
gaL:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.es())},
aK:function(a,b,c,d){var z
H.A(d,H.w(a,0))
if(!!a.immutable$list)H.q(P.C("fill range"))
P.aV(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.A(0,1))a[z]=d},
az:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
j:function(a){return P.d6(a,"[","]")},
ga2:function(a){return new J.am(a,a.length,0,[H.w(a,0)])},
gU:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cl(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
return a[b]},
m:function(a,b,c){H.E(b)
H.A(c,H.w(a,0))
if(!!a.immutable$list)H.q(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
a[b]=c},
$isi:1,
$ise:1,
q:{
im:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.et(new Array(a),b)},
et:function(a,b){return J.bF(H.c(a,[b]))},
bF:function(a){H.c_(a)
a.fixed$length=Array
return a}}},
nR:{"^":"bd;$ti"},
am:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ct:{"^":"u;",
iI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.C(""+a+".toInt()"))},
b6:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
ew:function(a,b){var z,y
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bf:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.W(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.C("Unexpected toString result: "+z))
x=J.aR(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
av:function(a,b){var z
if(typeof b!=="number")throw H.a(H.ad(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ds(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.dq(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ha:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.dq(a,b)},
dq:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$isr:1,
$isa1:1},
ev:{"^":"ct;",$ism:1},
eu:{"^":"ct;"},
cu:{"^":"u;",
W:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b<0)throw H.a(H.aQ(a,b))
if(b>=a.length)H.q(H.aQ(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aQ(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.a(P.cl(b,null,null))
return a+b},
aZ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ad(b))
c=P.aV(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aj:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ad(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ai:function(a,b){return this.aj(a,b,0)},
t:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cc(b,null,null))
if(b>c)throw H.a(P.cc(b,null,null))
if(c>a.length)throw H.a(P.cc(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.t(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ik:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ao:function(a,b){return this.ik(a,b," ")},
il:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.k(c,z)},
ec:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eb:function(a,b){return this.ec(a,b,0)},
hL:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.hh(a,b,c)},
j:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseM:1,
$isj:1}}],["","",,H,{"^":"",
cR:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
es:function(){return new P.jF("No element")},
a4:{"^":"ke;a",
gl:function(a){return this.a.length},
i:function(a,b){return C.b.W(this.a,b)},
$ascF:function(){return[P.m]},
$asy:function(){return[P.m]},
$asi:function(){return[P.m]},
$ase:function(){return[P.m]}},
i2:{"^":"i;"},
eB:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aR(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.ba(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
iL:{"^":"i;a,b,$ti",
ga2:function(a){return new H.iM(J.bz(this.a),this.b,this.$ti)},
gl:function(a){return J.aA(this.a)},
J:function(a,b){return this.b.$1(J.cX(this.a,b))},
$asi:function(a,b){return[b]}},
iM:{"^":"d7;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$asd7:function(a,b){return[b]}},
kJ:{"^":"i;a,b,$ti",
ga2:function(a){return new H.kK(J.bz(this.a),this.b,this.$ti)}},
kK:{"^":"d7;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cr:{"^":"b;$ti"},
cF:{"^":"b;$ti",
m:function(a,b,c){H.E(b)
H.A(c,H.ax(this,"cF",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.A(d,H.ax(this,"cF",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
ke:{"^":"cv+cF;"}}],["","",,H,{"^":"",
hN:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
mW:function(a){return init.types[H.E(a)]},
h9:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isG},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jd:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.Q(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bi:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.P(a).$iscE){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.aE(w,1)
r=H.dO(H.c_(H.b8(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
j5:function(){if(!!self.location)return self.location.href
return},
eP:function(a){var z,y,x,w,v
H.c_(a)
z=J.aA(a)
if(typeof z!=="number")return z.eJ()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
je:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aV(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.eP(z)},
eQ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.je(a)}return H.eP(a)},
jf:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eJ()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cy:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aV(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jc:function(a){return a.b?H.ai(a).getUTCFullYear()+0:H.ai(a).getFullYear()+0},
ja:function(a){return a.b?H.ai(a).getUTCMonth()+1:H.ai(a).getMonth()+1},
j6:function(a){return a.b?H.ai(a).getUTCDate()+0:H.ai(a).getDate()+0},
j7:function(a){return a.b?H.ai(a).getUTCHours()+0:H.ai(a).getHours()+0},
j9:function(a){return a.b?H.ai(a).getUTCMinutes()+0:H.ai(a).getMinutes()+0},
jb:function(a){return a.b?H.ai(a).getUTCSeconds()+0:H.ai(a).getSeconds()+0},
j8:function(a){return a.b?H.ai(a).getUTCMilliseconds()+0:H.ai(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ad(a))},
d:function(a,b){if(a==null)J.aA(a)
throw H.a(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,"index",null)
z=H.E(J.aA(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.T(b,a,"index",null,z)
return P.cc(b,"index",null)},
mR:function(a,b,c){if(a>c)return new P.cz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cz(a,c,!0,b,"end","Invalid value")
return new P.aS(!0,b,"end",null)},
ad:function(a){return new P.aS(!0,a,null,null)},
mM:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.eL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hk})
z.name=""}else z.toString=H.hk
return z},
hk:function(){return J.ae(this.dartException)},
q:function(a){throw H.a(a)},
B:function(a){throw H.a(P.ba(a))},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.da(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eK(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$f7()
u=$.$get$f8()
t=$.$get$f9()
s=$.$get$fa()
r=$.$get$fe()
q=$.$get$ff()
p=$.$get$fc()
$.$get$fb()
o=$.$get$fh()
n=$.$get$fg()
m=v.an(y)
if(m!=null)return z.$1(H.da(H.Q(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.da(H.Q(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eK(H.Q(y),m))}}return z.$1(new H.kd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eT()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aS(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eT()
return a},
bx:function(a){var z
if(a==null)return new H.fI(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fI(a)},
mU:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
n5:function(a,b,c,d,e,f){H.f(a,"$isd5")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n5)
a.$identity=z
return z},
hI:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$ise){z.$reflectionInfo=d
x=H.ji(z).r}else x=d
w=e?Object.create(new H.jG().constructor.prototype):Object.create(new H.d_(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aG
if(typeof u!=="number")return u.A()
$.aG=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e5(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mW,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e_:H.d0
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e5(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hF:function(a,b,c,d){var z=H.d0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hH(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hF(y,!w,z,b)
if(y===0){w=$.aG
if(typeof w!=="number")return w.A()
$.aG=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bA
if(v==null){v=H.cm("self")
$.bA=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aG
if(typeof w!=="number")return w.A()
$.aG=w+1
t+=w
w="return function("+t+"){return this."
v=$.bA
if(v==null){v=H.cm("self")
$.bA=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hG:function(a,b,c,d){var z,y
z=H.d0
y=H.e_
switch(b?-1:a){case 0:throw H.a(H.js("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hH:function(a,b){var z,y,x,w,v,u,t,s
z=$.bA
if(z==null){z=H.cm("self")
$.bA=z}y=$.dZ
if(y==null){y=H.cm("receiver")
$.dZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hG(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aG
if(typeof y!=="number")return y.A()
$.aG=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aG
if(typeof y!=="number")return y.A()
$.aG=y+1
return new Function(z+y+"}")()},
dJ:function(a,b,c,d,e,f,g){var z,y
z=J.bF(H.c_(b))
H.E(c)
y=!!J.P(d).$ise?J.bF(d):d
return H.hI(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aE(a,"String"))},
mS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"double"))},
ng:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"num"))},
h4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aE(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aE(a,"int"))},
he:function(a,b){throw H.a(H.aE(a,H.Q(b).substring(3)))},
ni:function(a,b){var z=J.aR(b)
throw H.a(H.hC(a,z.t(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.he(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.ni(a,b)},
c_:function(a){if(a==null)return a
if(!!J.P(a).$ise)return a
throw H.a(H.aE(a,"List"))},
hb:function(a,b){if(a==null)return a
if(!!J.P(a).$ise)return a
if(J.P(a)[b])return a
H.he(a,b)},
h5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
ch:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h5(J.P(a))
if(z==null)return!1
y=H.h8(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dF)return a
$.dF=!0
try{if(H.ch(a,b))return a
z=H.ck(b)
y=H.aE(a,z)
throw H.a(y)}finally{$.dF=!1}},
dL:function(a,b){if(a!=null&&!H.dI(a,b))H.q(H.aE(a,H.ck(b)))
return a},
h_:function(a){var z
if(a instanceof H.p){z=H.h5(J.P(a))
if(z!=null)return H.ck(z)
return"Closure"}return H.bi(a)},
np:function(a){throw H.a(new P.hS(H.Q(a)))},
h6:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b8:function(a){if(a==null)return
return a.$ti},
oO:function(a,b,c){return H.by(a["$as"+H.k(c)],H.b8(b))},
b7:function(a,b,c,d){var z
H.Q(c)
H.E(d)
z=H.by(a["$as"+H.k(c)],H.b8(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.Q(b)
H.E(c)
z=H.by(a["$as"+H.k(b)],H.b8(a))
return z==null?null:z[c]},
w:function(a,b){var z
H.E(b)
z=H.b8(a)
return z==null?null:z[b]},
ck:function(a){var z=H.b9(a,null)
return z},
b9:function(a,b){var z,y
H.v(b,"$ise",[P.j],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dO(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.k(b[y])}if('func' in a)return H.mC(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.A(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b9(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b9(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b9(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b9(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mT(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.b9(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dO:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.j],"$ase")
if(a==null)return""
z=new P.as("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b9(u,c)}v="<"+z.j(0)+">"
return v},
by:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bZ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b8(a)
y=J.P(a)
if(y[b]==null)return!1
return H.h2(H.by(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.Q(b)
H.c_(c)
H.Q(d)
if(a==null)return a
z=H.bZ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dO(c,0,null)
throw H.a(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
h2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ay(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ay(a[y],b,c[y],d))return!1
return!0},
oM:function(a,b,c){return a.apply(b,H.by(J.P(b)["$as"+H.k(c)],H.b8(b)))},
ha:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.ha(z)}return!1},
dI:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.ha(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ch(a,b)}y=J.P(a).constructor
x=H.b8(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ay(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dI(a,b))throw H.a(H.aE(a,H.ck(b)))
return a},
ay:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.h8(a,b,c,d)
if('func' in a)return c.builtin$cls==="d5"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,x,d)
else if(H.ay(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.by(w,z?a.slice(1):null)
return H.ay(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ck(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.h2(H.by(r,z),b,u,d)},
h8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ay(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ay(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ay(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nf(m,b,l,d)},
nf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ay(c[w],d,a[w],b))return!1}return!0},
oN:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
n6:function(a){var z,y,x,w,v,u
z=H.Q($.h7.$1(a))
y=$.cP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.h1.$2(a,z))
if(z!=null){y=$.cP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cT(x)
$.cP[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cS[z]=x
return x}if(v==="-"){u=H.cT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hd(a,x)
if(v==="*")throw H.a(P.cg(z))
if(init.leafTags[z]===true){u=H.cT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hd(a,x)},
hd:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dP(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cT:function(a){return J.dP(a,!1,null,!!a.$isG)},
ne:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cT(z)
else return J.dP(z,c,null,null)},
n3:function(){if(!0===$.dN)return
$.dN=!0
H.n4()},
n4:function(){var z,y,x,w,v,u,t,s
$.cP=Object.create(null)
$.cS=Object.create(null)
H.n_()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hf.$1(v)
if(u!=null){t=H.ne(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n_:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bu(C.K,H.bu(C.P,H.bu(C.u,H.bu(C.u,H.bu(C.O,H.bu(C.L,H.bu(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h7=new H.n0(v)
$.h1=new H.n1(u)
$.hf=new H.n2(t)},
bu:function(a,b){return a(b)||b},
hh:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hi:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hM:{"^":"b;$ti",
j:function(a){return P.dc(this)},
m:function(a,b,c){H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
return H.hN()},
$isM:1},
hO:{"^":"hM;a,b,c,$ti",
gl:function(a){return this.a},
bv:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bv(0,b))return
return this.dc(b)},
dc:function(a){return this.b[H.Q(a)]},
K:function(a,b){var z,y,x,w,v
z=H.w(this,1)
H.l(b,{func:1,ret:-1,args:[H.w(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dc(v),z))}}},
jh:{"^":"b;a,b,c,d,e,f,r,0x",q:{
ji:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bF(z)
y=z[0]
x=z[1]
return new H.jh(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
k1:{"^":"b;a,b,c,d,e,f",
an:function(a){var z,y,x
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
aL:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.k1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fd:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
j1:{"^":"a5;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eK:function(a,b){return new H.j1(a,b==null?null:b.method)}}},
ir:{"^":"a5;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
da:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ir(a,y,z?null:b.receiver)}}},
kd:{"^":"a5;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nq:{"^":"p:18;a",
$1:function(a){if(!!J.P(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fI:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
p:{"^":"b;",
j:function(a){return"Closure '"+H.bi(this).trim()+"'"},
geG:function(){return this},
$isd5:1,
geG:function(){return this}},
eY:{"^":"p;"},
jG:{"^":"eY;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d_:{"^":"eY;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d_))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bK(this.a)
else y=typeof z!=="object"?J.c1(z):H.bK(z)
return(y^H.bK(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bi(z)+"'")},
q:{
d0:function(a){return a.a},
e_:function(a){return a.c},
cm:function(a){var z,y,x,w,v
z=new H.d_("self","target","receiver","name")
y=J.bF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
k2:{"^":"a5;a",
j:function(a){return this.a},
q:{
aE:function(a,b){return new H.k2("TypeError: "+H.k(P.cq(a))+": type '"+H.h_(a)+"' is not a subtype of type '"+b+"'")}}},
hB:{"^":"a5;a",
j:function(a){return this.a},
q:{
hC:function(a,b){return new H.hB("CastError: "+H.k(P.cq(a))+": type '"+H.h_(a)+"' is not a subtype of type '"+b+"'")}}},
jr:{"^":"a5;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
js:function(a){return new H.jr(a)}}},
b_:{"^":"iI;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaB:function(a){return new H.ix(this,[H.w(this,0)])},
bv:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d8(y,b)}else return this.i_(b)},
i_:function(a){var z=this.d
if(z==null)return!1
return this.cF(this.c7(z,this.cE(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bl(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bl(w,b)
x=y==null?null:y.b
return x}else return this.i0(b)},
i0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,this.cE(a))
x=this.cF(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c9()
this.b=z}this.d0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c9()
this.c=y}this.d0(y,b,c)}else this.i1(b,c)},
i1:function(a,b){var z,y,x,w
H.A(a,H.w(this,0))
H.A(b,H.w(this,1))
z=this.d
if(z==null){z=this.c9()
this.d=z}y=this.cE(a)
x=this.c7(z,y)
if(x==null)this.cg(z,y,[this.ca(a,b)])
else{w=this.cF(x,a)
if(w>=0)x[w].b=b
else x.push(this.ca(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.ba(this))
z=z.c}},
d0:function(a,b,c){var z
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
z=this.bl(a,b)
if(z==null)this.cg(a,b,this.ca(b,c))
else z.b=c},
fj:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.iw(H.A(a,H.w(this,0)),H.A(b,H.w(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fj()
return z},
cE:function(a){return J.c1(a)&0x3ffffff},
cF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
j:function(a){return P.dc(this)},
bl:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
d8:function(a,b){return this.bl(a,b)!=null},
c9:function(){var z=Object.create(null)
this.cg(z,"<non-identifier-key>",z)
this.fc(z,"<non-identifier-key>")
return z},
$isez:1},
iw:{"^":"b;a,b,0c,0d"},
ix:{"^":"i2;a,$ti",
gl:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.iy(z,z.r,this.$ti)
y.c=z.e
return y}},
iy:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
n0:{"^":"p:18;a",
$1:function(a){return this.a(a)}},
n1:{"^":"p:38;a",
$2:function(a,b){return this.a(a,b)}},
n2:{"^":"p:28;a",
$1:function(a){return this.a(H.Q(a))}},
ip:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseM:1,
$isjj:1,
q:{
iq:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mT:function(a){return J.et(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b5:function(a){return a},
iY:function(a){return new Int8Array(a)},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aQ(b,a))},
mw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mR(a,b,c))
return b},
eJ:{"^":"u;",$iseJ:1,"%":"ArrayBuffer"},
di:{"^":"u;",$isdi:1,$isk3:1,"%":"DataView;ArrayBufferView;dh|fC|fD|iZ|fE|fF|b1"},
dh:{"^":"di;",
gl:function(a){return a.length},
$isG:1,
$asG:I.dK},
iZ:{"^":"fD;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
m:function(a,b,c){H.E(b)
H.mS(c)
H.aP(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.r]},
$asy:function(){return[P.r]},
$isi:1,
$asi:function(){return[P.r]},
$ise:1,
$ase:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
b1:{"^":"fF;",
m:function(a,b,c){H.E(b)
H.E(c)
H.aP(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.m]},
$asy:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]}},
o0:{"^":"b1;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o1:{"^":"b1;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o2:{"^":"b1;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o3:{"^":"b1;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
o4:{"^":"b1;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o5:{"^":"b1;",
gl:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dj:{"^":"b1;",
gl:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
c_:function(a,b,c){return new Uint8Array(a.subarray(b,H.mw(b,c,a.length)))},
$isdj:1,
$isR:1,
"%":";Uint8Array"},
fC:{"^":"dh+y;"},
fD:{"^":"fC+cr;"},
fE:{"^":"dh+y;"},
fF:{"^":"fE+cr;"}}],["","",,P,{"^":"",
kM:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mJ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bv(new P.kO(z),1)).observe(y,{childList:true})
return new P.kN(z,y,x)}else if(self.setImmediate!=null)return P.mK()
return P.mL()},
oB:[function(a){self.scheduleImmediate(H.bv(new P.kP(H.l(a,{func:1,ret:-1})),0))},"$1","mJ",4,0,12],
oC:[function(a){self.setImmediate(H.bv(new P.kQ(H.l(a,{func:1,ret:-1})),0))},"$1","mK",4,0,12],
oD:[function(a){P.dr(C.q,H.l(a,{func:1,ret:-1}))},"$1","mL",4,0,12],
dr:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.d.a6(a.a,1000)
return P.lQ(z<0?0:z,b)},
f2:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bp]})
z=C.d.a6(a.a,1000)
return P.lR(z<0?0:z,b)},
mF:function(a,b){if(H.ch(a,{func:1,args:[P.b,P.aD]}))return b.iv(a,null,P.b,P.aD)
if(H.ch(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mE:function(){var z,y
for(;z=$.bt,z!=null;){$.bX=null
y=z.b
$.bt=y
if(y==null)$.bW=null
z.a.$0()}},
oL:[function(){$.dG=!0
try{P.mE()}finally{$.bX=null
$.dG=!1
if($.bt!=null)$.$get$dA().$1(P.h3())}},"$0","h3",0,0,3],
fZ:function(a){var z=new P.fw(H.l(a,{func:1,ret:-1}))
if($.bt==null){$.bW=z
$.bt=z
if(!$.dG)$.$get$dA().$1(P.h3())}else{$.bW.b=z
$.bW=z}},
mI:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.fZ(a)
$.bX=$.bW
return}y=new P.fw(a)
x=$.bX
if(x==null){y.b=z
$.bX=y
$.bt=y}else{y.b=x.b
x.b=y
$.bX=y
if(y.b==null)$.bW=y}},
nj:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.U
if(C.j===y){P.cO(null,null,C.j,a)
return}y.toString
P.cO(null,null,y,H.l(y.cm(a),z))},
f1:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.U
if(y===C.j){y.toString
return P.dr(a,b)}return P.dr(a,H.l(y.cm(b),z))},
jZ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bp]}
H.l(b,z)
y=$.U
if(y===C.j){y.toString
return P.f2(a,b)}x=y.dE(b,P.bp)
$.U.toString
return P.f2(a,H.l(x,z))},
cN:function(a,b,c,d,e){var z={}
z.a=d
P.mI(new P.mG(z,e))},
fV:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fW:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
mH:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cO:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cm(d):c.hI(d,-1)
P.fZ(d)},
kO:{"^":"p:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kN:{"^":"p:40;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kP:{"^":"p:1;a",
$0:function(){this.a.$0()}},
kQ:{"^":"p:1;a",
$0:function(){this.a.$0()}},
fL:{"^":"b;a,0b,c",
f_:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.lT(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
f0:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.lS(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbp:1,
q:{
lQ:function(a,b){var z=new P.fL(!0,0)
z.f_(a,b)
return z},
lR:function(a,b){var z=new P.fL(!1,0)
z.f0(a,b)
return z}}},
lT:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lS:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eP(w,x)}z.c=y
this.d.$1(z)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
i7:function(a){if(this.c!==6)return!0
return this.b.b.cR(H.l(this.d,{func:1,ret:P.a3,args:[P.b]}),a.a,P.a3,P.b)},
hZ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.w(this,1)}
w=this.b.b
if(H.ch(z,{func:1,args:[P.b,P.aD]}))return H.dL(w.iD(z,a.a,a.b,null,y,P.aD),x)
else return H.dL(w.cR(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aX:{"^":"b;dr:a<,b,0h1:c<,$ti",
ev:function(a,b,c){var z,y,x,w
z=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mF(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aX(0,$.U,[c])
w=b==null?1:3
this.d1(new P.bs(x,w,a,b,[z,c]))
return x},
iH:function(a,b){return this.ev(a,null,b)},
d1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaX")
z=y.a
if(z<4){y.d1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cO(null,null,z,H.l(new P.l4(this,a),{func:1,ret:-1}))}},
dj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaX")
y=u.a
if(y<4){u.dj(a)
return}this.a=y
this.c=u.c}z.a=this.bp(a)
y=this.b
y.toString
P.cO(null,null,y,H.l(new P.l9(z,this),{func:1,ret:-1}))}},
cc:function(){var z=H.f(this.c,"$isbs")
this.c=null
return this.bp(z)},
bp:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d5:function(a){var z,y,x,w
z=H.w(this,0)
H.dL(a,{futureOr:1,type:z})
y=this.$ti
x=H.bZ(a,"$isbE",y,"$asbE")
if(x){z=H.bZ(a,"$isaX",y,null)
if(z)P.fz(a,this)
else P.l5(a,this)}else{w=this.cc()
H.A(a,z)
this.a=4
this.c=a
P.bS(this,w)}},
c3:[function(a,b){var z
H.f(b,"$isaD")
z=this.cc()
this.a=8
this.c=new P.an(a,b)
P.bS(this,z)},function(a){return this.c3(a,null)},"iU","$2","$1","gf8",4,2,46],
$isbE:1,
q:{
l5:function(a,b){var z,y,x
b.a=1
try{a.ev(new P.l6(b),new P.l7(b),null)}catch(x){z=H.az(x)
y=H.bx(x)
P.nj(new P.l8(b,z,y))}},
fz:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaX")
if(z>=4){y=b.cc()
b.a=a.a
b.c=a.c
P.bS(b,y)}else{y=H.f(b.c,"$isbs")
b.a=2
b.c=a
a.dj(y)}},
bS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cN(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bS(z.a,b)}y=z.a
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
if(p){H.f(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cN(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.lc(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lb(x,b,r).$0()}else if((y&2)!==0)new P.la(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.P(y).$isbE){if(y.a>=4){n=H.f(t.c,"$isbs")
t.c=null
b=t.bp(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fz(y,t)
return}}m=b.b
n=H.f(m.c,"$isbs")
m.c=null
b=m.bp(n)
y=x.a
u=x.b
if(!y){H.A(u,H.w(m,0))
m.a=4
m.c=u}else{H.f(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
l4:{"^":"p:1;a,b",
$0:function(){P.bS(this.a,this.b)}},
l9:{"^":"p:1;a,b",
$0:function(){P.bS(this.b,this.a.a)}},
l6:{"^":"p:26;a",
$1:function(a){var z=this.a
z.a=0
z.d5(a)}},
l7:{"^":"p:52;a",
$2:function(a,b){this.a.c3(a,H.f(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
l8:{"^":"p:1;a,b,c",
$0:function(){this.a.c3(this.b,this.c)}},
lc:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.er(H.l(w.d,{func:1}),null)}catch(v){y=H.az(v)
x=H.bx(v)
if(this.d){w=H.f(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.P(z).$isbE){if(z instanceof P.aX&&z.gdr()>=4){if(z.gdr()===8){w=this.b
w.b=H.f(z.gh1(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iH(new P.ld(t),null)
w.a=!1}}},
ld:{"^":"p:33;a",
$1:function(a){return this.a}},
lb:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.w(x,0)
v=H.A(this.c,w)
u=H.w(x,1)
this.a.b=x.b.b.cR(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.az(t)
y=H.bx(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
la:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isan")
w=this.c
if(w.i7(z)&&w.e!=null){v=this.b
v.b=w.hZ(z)
v.a=!1}}catch(u){y=H.az(u)
x=H.bx(u)
w=H.f(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fw:{"^":"b;a,0b"},
dn:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aX(0,$.U,[P.m])
z.a=0
this.i5(new P.jJ(z,this),!0,new P.jK(z,y),y.gf8())
return y}},
jJ:{"^":"p;a,b",
$1:function(a){H.A(a,H.ax(this.b,"dn",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.ax(this.b,"dn",0)]}}},
jK:{"^":"p:1;a,b",
$0:function(){this.b.d5(this.a.a)}},
eV:{"^":"b;$ti"},
jI:{"^":"b;"},
bp:{"^":"b;"},
an:{"^":"b;a,b",
j:function(a){return H.k(this.a)},
$isa5:1},
mk:{"^":"b;",$isoA:1},
mG:{"^":"p:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
ly:{"^":"mk;",
iE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fV(null,null,this,a,-1)}catch(x){z=H.az(x)
y=H.bx(x)
P.cN(null,null,this,z,H.f(y,"$isaD"))}},
iF:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fW(null,null,this,a,b,-1,c)}catch(x){z=H.az(x)
y=H.bx(x)
P.cN(null,null,this,z,H.f(y,"$isaD"))}},
hI:function(a,b){return new P.lA(this,H.l(a,{func:1,ret:b}),b)},
cm:function(a){return new P.lz(this,H.l(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.lB(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
er:function(a,b){H.l(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fV(null,null,this,a,b)},
cR:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.U===C.j)return a.$1(b)
return P.fW(null,null,this,a,b,c,d)},
iD:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.U===C.j)return a.$2(b,c)
return P.mH(null,null,this,a,b,c,d,e,f)},
iv:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lA:{"^":"p;a,b,c",
$0:function(){return this.a.er(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lz:{"^":"p:3;a,b",
$0:function(){return this.a.iE(this.b)}},
lB:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.iF(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iz:function(a,b,c,d,e){return new H.b_(0,0,[d,e])},
iA:function(a,b,c){H.c_(a)
return H.v(H.mU(a,new H.b_(0,0,[b,c])),"$isez",[b,c],"$asez")},
eA:function(a,b){return new H.b_(0,0,[a,b])},
iD:function(a,b,c,d){return new P.lk(0,0,[d])},
il:function(a,b,c){var z,y
if(P.dH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bY()
C.a.h(y,a)
try{P.mD(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eW(b,H.hb(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d6:function(a,b,c){var z,y,x
if(P.dH(a))return b+"..."+c
z=new P.as(b)
y=$.$get$bY()
C.a.h(y,a)
try{x=z
x.a=P.eW(x.gaQ(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaQ()+c
y=z.gaQ()
return y.charCodeAt(0)==0?y:y},
dH:function(a){var z,y
for(z=0;y=$.$get$bY(),z<y.length;++z)if(a===y[z])return!0
return!1},
mD:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.k(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.H();t=s,s=r){r=z.gT(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iB:function(a,b,c){var z=P.iz(null,null,null,b,c)
a.K(0,new P.iC(z,b,c))
return z},
dc:function(a){var z,y,x
z={}
if(P.dH(a))return"{...}"
y=new P.as("")
try{C.a.h($.$get$bY(),a)
x=y
x.a=x.gaQ()+"{"
z.a=!0
J.dS(a,new P.iJ(z,y))
z=y
z.a=z.gaQ()+"}"}finally{z=$.$get$bY()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaQ()
return z.charCodeAt(0)==0?z:z},
lk:{"^":"le;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.fB(this,this.r,H.w(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dC()
this.b=z}return this.d3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dC()
this.c=y}return this.d3(y,b)}else return this.f1(0,b)},
f1:function(a,b){var z,y,x
H.A(b,H.w(this,0))
z=this.d
if(z==null){z=P.dC()
this.d=z}y=this.d6(b)
x=z[y]
if(x==null)z[y]=[this.c2(b)]
else{if(this.dd(x,b)>=0)return!1
x.push(this.c2(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dk(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ff(z,b)
x=this.dd(y,b)
if(x<0)return!1
this.dt(y.splice(x,1)[0])
return!0},
d3:function(a,b){H.A(b,H.w(this,0))
if(H.f(a[b],"$isdB")!=null)return!1
a[b]=this.c2(b)
return!0},
dk:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdB")
if(z==null)return!1
this.dt(z)
delete a[b]
return!0},
d4:function(){this.r=this.r+1&67108863},
c2:function(a){var z,y
z=new P.dB(H.A(a,H.w(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d4()
return z},
dt:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d4()},
d6:function(a){return J.c1(a)&0x3ffffff},
ff:function(a,b){return a[this.d6(b)]},
dd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
q:{
dC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dB:{"^":"b;a,0b,0c"},
ll:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.w(this,0))
this.c=z.b
return!0}}},
q:{
fB:function(a,b,c){var z=new P.ll(a,b,[c])
z.c=a.e
return z}}},
le:{"^":"jt;"},
iC:{"^":"p:6;a,b,c",
$2:function(a,b){this.a.m(0,H.A(a,this.b),H.A(b,this.c))}},
cv:{"^":"lm;",$isi:1,$ise:1},
y:{"^":"b;$ti",
ga2:function(a){return new H.eB(a,this.gl(a),0,[H.b7(this,a,"y",0)])},
J:function(a,b){return this.i(a,b)},
iK:function(a,b){var z,y,x
z=H.c([],[H.b7(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.i(a,y));++y}return z},
iJ:function(a){return this.iK(a,!0)},
aK:function(a,b,c,d){var z
H.A(d,H.b7(this,a,"y",0))
P.aV(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
j:function(a){return P.d6(a,"[","]")}},
iI:{"^":"ak;"},
iJ:{"^":"p:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ak:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b7(this,a,"ak",0),H.b7(this,a,"ak",1)]})
for(z=J.bz(this.gaB(a));z.H();){y=z.gT(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.aA(this.gaB(a))},
j:function(a){return P.dc(a)},
$isM:1},
lY:{"^":"b;$ti",
m:function(a,b,c){H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
iK:{"^":"b;$ti",
i:function(a,b){return J.dR(this.a,b)},
m:function(a,b,c){J.cV(this.a,H.A(b,H.w(this,0)),H.A(c,H.w(this,1)))},
K:function(a,b){J.dS(this.a,H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gl:function(a){return J.aA(this.a)},
j:function(a){return J.ae(this.a)},
$isM:1},
fp:{"^":"lZ;a,$ti"},
jv:{"^":"b;$ti",
j:function(a){return P.d6(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dU("index"))
if(b<0)H.q(P.Z(b,0,null,"index",null))
for(z=P.fB(this,this.r,H.w(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
$isi:1},
jt:{"^":"jv;"},
lm:{"^":"b+y;"},
lZ:{"^":"iK+lY;$ti"}}],["","",,P,{"^":"",hy:{"^":"c4;a",
ib:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aV(c,d,b.length,null,null,null)
z=$.$get$fx()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cR(C.b.I(b,s))
o=H.cR(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.as("")
w.a+=C.b.t(b,x,y)
w.a+=H.cy(r)
x=s
continue}}throw H.a(P.W("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dY(b,u,d,v,t,k)
else{j=C.d.av(k-1,4)+1
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aZ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dY(b,u,d,v,t,i)
else{j=C.d.av(i,4)
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aZ(b,d,d,j===2?"==":"=")}return b},
$asc4:function(){return[[P.e,P.m],P.j]},
q:{
dY:function(a,b,c,d,e,f){if(C.d.av(f,4)!==0)throw H.a(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hz:{"^":"bB;a",
$asbB:function(){return[[P.e,P.m],P.j]}},c4:{"^":"b;$ti"},bB:{"^":"jI;$ti"},i4:{"^":"c4;",
$asc4:function(){return[P.j,[P.e,P.m]]}},kq:{"^":"i4;a",
ghS:function(){return C.G}},kx:{"^":"bB;",
b3:function(a,b,c){var z,y,x,w
z=a.length
P.aV(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mj(0,0,x)
if(w.fe(a,b,z)!==z)w.dv(J.hp(a,z-1),0)
return C.W.c_(x,0,w.b)},
ct:function(a){return this.b3(a,0,null)},
$asbB:function(){return[P.j,[P.e,P.m]]}},mj:{"^":"b;a,b,c",
dv:function(a,b){var z,y,x,w,v
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
fe:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dv(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kr:{"^":"bB;a",
b3:function(a,b,c){var z,y,x,w,v
H.v(a,"$ise",[P.m],"$ase")
z=P.ks(!1,a,b,c)
if(z!=null)return z
y=J.aA(a)
P.aV(b,c,y,null,null,null)
x=new P.as("")
w=new P.mg(!1,x,!0,0,0,0)
w.b3(a,b,y)
w.hV(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
ct:function(a){return this.b3(a,0,null)},
$asbB:function(){return[[P.e,P.m],P.j]},
q:{
ks:function(a,b,c,d){H.v(b,"$ise",[P.m],"$ase")
if(b instanceof Uint8Array)return P.kt(!1,b,c,d)
return},
kt:function(a,b,c,d){var z,y,x
z=$.$get$ft()
if(z==null)return
y=0===c
if(y&&!0)return P.dw(z,b)
x=b.length
d=P.aV(c,d,x,null,null,null)
if(y&&d===x)return P.dw(z,b)
return P.dw(z,b.subarray(c,d))},
dw:function(a,b){if(P.kv(b))return
return P.kw(a,b)},
kw:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.az(y)}return},
kv:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ku:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.az(y)}return}}},mg:{"^":"b;a,b,c,d,e,f",
hV:function(a,b,c){var z
H.v(b,"$ise",[P.m],"$ase")
if(this.e>0){z=P.W("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ise",[P.m],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mi(c)
v=new P.mh(this,b,c,a)
$label0$0:for(u=J.aR(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bV()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.d.bf(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.W("Overlong encoding of 0x"+C.d.bf(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.d.bf(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cy(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bX()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.d.bf(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.d.bf(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mi:{"^":"p:41;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ise",[P.m],"$ase")
z=this.a
for(y=J.aR(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bV()
if((w&127)!==w)return x-b}return z-b}},mh:{"^":"p:43;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ce(this.d,a,b)}}}],["","",,P,{"^":"",
cj:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.j]})
z=H.jd(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.W(a,null,null))},
i6:function(a){var z=J.P(a)
if(!!z.$isp)return z.j(a)
return"Instance of '"+H.bi(a)+"'"},
iE:function(a,b,c,d){var z,y
H.A(b,d)
z=J.im(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
iF:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga2(a);x.H();)C.a.h(y,H.A(x.gT(x),c))
if(b)return y
return H.v(J.bF(y),"$ise",z,"$ase")},
ce:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbd",[z],"$asbd")
y=a.length
c=P.aV(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eQ(z?C.a.c_(a,b,c):a)}if(!!J.P(a).$isdj)return H.jf(a,b,P.aV(b,c,a.length,null,null,null))
return P.jL(a,b,c)},
jL:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.Z(b,0,J.aA(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.aA(a),null,null))
y=J.bz(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gT(y))}return H.eQ(w)},
jk:function(a,b,c){return new H.ip(a,H.iq(a,!1,!0,!1))},
dv:function(){var z=H.j5()
if(z!=null)return P.kj(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.i6(a)},
t:function(a){return new P.fy(a)},
iG:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dQ:function(a){H.nh(a)},
kj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fq(b>0||c<c?C.b.t(a,b,c):a,5,null).gey()
else if(y===32)return P.fq(C.b.t(a,z,c),0,null).gey()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fX(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iQ()
if(v>=b)if(P.fX(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.A()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.P()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.P()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.P()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aj(a,"..",s)))n=r>s+2&&C.b.aj(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aj(a,"file",b)){if(u<=b){if(!C.b.aj(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aZ(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aj(a,"http",b)){if(x&&t+3===s&&C.b.aj(a,"80",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
else if(v===z&&C.b.aj(a,"https",b)){if(x&&t+4===s&&C.b.aj(a,"443",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
q-=b}return new P.lD(a,v,u,t,s,r,q,o)}return P.m_(a,b,c,v,u,t,s,r,q,o)},
fs:function(a,b){var z=P.j
return C.a.hW(H.c(a.split("&"),[z]),P.eA(z,z),new P.km(b),[P.M,P.j,P.j])},
kh:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.ki(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.W(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cj(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.bX()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cj(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.bX()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kk(a)
y=new P.kl(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.W(a,w)
if(s===58){if(w===b){++w
if(C.b.W(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaL(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kh(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aV(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mx:function(){var z,y,x,w,v
z=P.iG(22,new P.mz(),!0,P.R)
y=new P.my(z)
x=new P.mA()
w=new P.mB()
v=H.f(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isR"),"]",5)
v=H.f(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isR"),"az",21)
v=H.f(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fX:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ise",[P.m],"$ase")
z=$.$get$fY()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
a3:{"^":"b;"},
"+bool":0,
ap:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.aV(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hT(H.jc(this))
y=P.c5(H.ja(this))
x=P.c5(H.j6(this))
w=P.c5(H.j7(this))
v=P.c5(H.j9(this))
u=P.c5(H.jb(this))
t=P.hU(H.j8(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hT:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c5:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"a1;"},
"+double":0,
bC:{"^":"b;a",
P:function(a,b){return C.d.P(this.a,H.f(b,"$isbC").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bC))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.i1()
y=this.a
if(y<0)return"-"+new P.bC(0-y).j(0)
x=z.$1(C.d.a6(y,6e7)%60)
w=z.$1(C.d.a6(y,1e6)%60)
v=new P.i0().$1(y%1e6)
return""+C.d.a6(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
q:{
ej:function(a,b,c,d,e,f){return new P.bC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i0:{"^":"p:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
i1:{"^":"p:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eL:{"^":"a5;",
j:function(a){return"Throw of null."}},
aS:{"^":"a5;a,b,c,d",
gc5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc4:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gc5()+y+x
if(!this.a)return w
v=this.gc4()
u=P.cq(this.b)
return w+v+": "+H.k(u)},
q:{
c2:function(a){return new P.aS(!1,null,null,a)},
cl:function(a,b,c){return new P.aS(!0,a,b,c)},
dU:function(a){return new P.aS(!1,null,a,"Must not be null")}}},
cz:{"^":"aS;e,f,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
cc:function(a,b,c){return new P.cz(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
ij:{"^":"aS;e,l:f>,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){if(J.hl(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
T:function(a,b,c,d,e){var z=H.E(e!=null?e:J.aA(b))
return new P.ij(b,z,!0,a,c,"Index out of range")}}},
kf:{"^":"a5;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
C:function(a){return new P.kf(a)}}},
kc:{"^":"a5;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cg:function(a){return new P.kc(a)}}},
jF:{"^":"a5;a",
j:function(a){return"Bad state: "+this.a}},
hL:{"^":"a5;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cq(z))+"."},
q:{
ba:function(a){return new P.hL(a)}}},
j2:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa5:1},
eT:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa5:1},
hS:{"^":"a5;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fy:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
ic:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.W(w,s)
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
q:{
W:function(a,b,c){return new P.ic(a,b,c)}}},
m:{"^":"a1;"},
"+int":0,
i:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga2(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dU("index"))
if(b<0)H.q(P.Z(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.H();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
j:function(a){return P.il(this,"(",")")}},
d7:{"^":"b;$ti"},
e:{"^":"b;$ti",$isi:1},
"+List":0,
M:{"^":"b;$ti"},
H:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bK(this)},
j:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.j(this)}},
aD:{"^":"b;"},
j:{"^":"b;",$iseM:1},
"+String":0,
as:{"^":"b;aQ:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoo:1,
q:{
eW:function(a,b,c){var z=J.bz(b)
if(!z.H())return a
if(c.length===0){do a+=H.k(z.gT(z))
while(z.H())}else{a+=H.k(z.gT(z))
for(;z.H();)a=a+c+H.k(z.gT(z))}return a}}},
km:{"^":"p:48;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isM",[z,z],"$asM")
H.Q(b)
y=J.aR(b).eb(b,"=")
if(y===-1){if(b!=="")J.cV(a,P.dE(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.aE(b,y+1)
z=this.a
J.cV(a,P.dE(x,0,x.length,z,!0),P.dE(w,0,w.length,z,!0))}return a}},
ki:{"^":"p:50;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv4 address, "+a,this.a,b))}},
kk:{"^":"p:39;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kl:{"^":"p:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cj(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cK:{"^":"b;bY:a<,b,c,d,em:e>,f,r,0x,0y,0z,0Q,0ch",
gez:function(){return this.b},
gcD:function(a){var z=this.c
if(z==null)return""
if(C.b.ai(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbP:function(a){var z=this.d
if(z==null)return P.fN(this.a)
return z},
gcN:function(a){var z=this.f
return z==null?"":z},
ge6:function(){var z=this.r
return z==null?"":z},
cQ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.j,null],"$asM")
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
if(x&&!C.b.ai(d,"/"))d="/"+d
g=P.dD(g,0,0,h)
return new P.cK(i,j,c,f,d,g,this.r)},
ep:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gbR:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fp(P.fs(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ge7:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge8:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.P(b)
if(!!z.$isdu){y=this.a
x=b.gbY()
if(y==null?x==null:y===x)if(this.c!=null===b.ge7()){y=this.b
x=b.gez()
if(y==null?x==null:y===x){y=this.gcD(this)
x=z.gcD(b)
if(y==null?x==null:y===x){y=this.gbP(this)
x=z.gbP(b)
if(y==null?x==null:y===x)if(this.e===z.gem(b)){y=this.f
x=y==null
if(!x===b.gea()){if(x)y=""
if(y===z.gcN(b)){z=this.r
y=z==null
if(!y===b.ge8()){if(y)z=""
z=z===b.ge6()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.j(0))
this.z=z}return z},
$isdu:1,
q:{
cL:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.m],"$ase")
if(c===C.k){z=$.$get$fS().b
if(typeof b!=="string")H.q(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.ax(c,"c4",0))
y=c.ghS().ct(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cy(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.ma(a,b,d)
else{if(d===b)P.bT(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mb(a,z,e-1):""
x=P.m4(a,e,f,!1)
if(typeof f!=="number")return f.A()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.m7(P.cj(C.b.t(a,w,g),new P.m0(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m5(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dD(a,h+1,i,null):null
return new P.cK(j,y,x,v,u,t,i<c?P.m3(a,i+1,c):null)},
fN:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bT:function(a,b,c){throw H.a(P.W(c,a,b))},
m7:function(a,b){if(a!=null&&a===P.fN(b))return
return a},
m4:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.W(a,z)!==93)P.bT(a,b,"Missing end `]` to match `[` in host")
P.fr(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.W(a,y)===58){P.fr(a,b,c)
return"["+a+"]"}return P.md(a,b,c)},
md:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.W(a,z)
if(v===37){u=P.fU(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.as("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.as("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bT(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.W(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.as("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fO(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
ma:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fQ(C.b.I(a,b)))P.bT(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bT(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.m1(y?a.toLowerCase():a)},
m1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mb:function(a,b,c){return P.bU(a,b,c,C.S)},
m5:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bU(a,b,c,C.y):C.t.jz(d,new P.m6(),P.j).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ai(w,"/"))w="/"+w
return P.mc(w,e,f)},
mc:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ai(a,"/"))return P.me(a,!z||c)
return P.mf(a)},
dD:function(a,b,c,d){var z,y
z={}
H.v(d,"$isM",[P.j,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.c2("Both query and queryParameters specified"))
return P.bU(a,b,c,C.n)}if(d==null)return
y=new P.as("")
z.a=""
d.K(0,new P.m8(new P.m9(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m3:function(a,b,c){return P.bU(a,b,c,C.n)},
fU:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.W(a,b+1)
x=C.b.W(a,z)
w=H.cR(y)
v=H.cR(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aV(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cy(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fO:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.ha(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.ce(y,0,null)},
bU:function(a,b,c,d){var z=P.fT(a,b,c,H.v(d,"$ise",[P.m],"$ase"),!1)
return z==null?C.b.t(a,b,c):z},
fT:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ise",[P.m],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.W(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fU(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bT(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.W(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fO(v)}}if(w==null)w=new P.as("")
w.a+=C.b.t(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fR:function(a){if(C.b.ai(a,"."))return!0
return C.b.eb(a,"/.")!==-1},
mf:function(a){var z,y,x,w,v,u,t
if(!P.fR(a))return a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.L(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
me:function(a,b){var z,y,x,w,v,u
if(!P.fR(a))return!b?P.fP(a):a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaL(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaL(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fP(z[0]))}return C.a.E(z,"/")},
fP:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fQ(J.hm(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.aE(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m2:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c2("Invalid URL encoding"))}}return z},
dE:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dM(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.t(a,b,c)
else u=new H.a4(y.t(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c2("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c2("Truncated URI"))
C.a.h(u,P.m2(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ise",[P.m],"$ase")
return new P.kr(!1).ct(u)},
fQ:function(a){var z=a|32
return 97<=z&&z<=122}}},
m0:{"^":"p:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.A()
throw H.a(P.W("Invalid port",this.a,z+1))}},
m6:{"^":"p:47;",
$1:function(a){return P.cL(C.U,a,C.k,!1)}},
m9:{"^":"p:19;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cL(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cL(C.p,b,C.k,!0))}}},
m8:{"^":"p:45;a",
$2:function(a,b){var z,y
H.Q(a)
if(b==null||typeof b==="string")this.a.$2(a,H.Q(b))
else for(z=J.bz(H.hb(b,"$isi")),y=this.a;z.H();)y.$2(a,H.Q(z.gT(z)))}},
kg:{"^":"b;a,b,c",
gey:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.ec(y,"?",z)
w=y.length
if(x>=0){v=P.bU(y,x+1,w,C.n)
w=x}else v=null
z=new P.kV(this,"data",null,null,null,P.bU(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fq:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.W("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.W("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaL(z)
if(v!==44||x!==t+7||!C.b.aj(a,"base64",t+1))throw H.a(P.W("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.ib(0,a,s,y)
else{r=P.fT(a,s,y,C.n,!0)
if(r!=null)a=C.b.aZ(a,s,y,r)}return new P.kg(a,z,c)}}},
mz:{"^":"p:51;",
$1:function(a){return new Uint8Array(96)}},
my:{"^":"p:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hq(z,0,96,b)
return z}},
mA:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mB:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lD:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge7:function(){return this.c>0},
ge9:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.A()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gea:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
ge8:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.ai(this.a,"http")},
gdf:function(){return this.b===5&&C.b.ai(this.a,"https")},
gbY:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gde()){this.x="http"
z="http"}else if(this.gdf()){this.x="https"
z="https"}else if(z===4&&C.b.ai(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ai(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
gez:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcD:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbP:function(a){var z
if(this.ge9()){z=this.d
if(typeof z!=="number")return z.A()
return P.cj(C.b.t(this.a,z+1,this.e),null,null)}if(this.gde())return 80
if(this.gdf())return 443
return 0},
gem:function(a){return C.b.t(this.a,this.e,this.f)},
gcN:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.t(this.a,z+1,y):""},
ge6:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aE(y,z+1):""},
gbR:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.V
z=P.j
return new P.fp(P.fs(this.gcN(this),C.k),[z,z])},
cQ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.j,null],"$asM")
i=this.gbY()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.ge9()?this.gbP(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ai(d,"/"))d="/"+d
g=P.dD(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aE(y,x+1)
return new P.cK(i,j,c,f,d,g,b)},
ep:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.P(b)
if(!!z.$isdu)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdu:1},
kV:{"^":"cK;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
d2:function(a,b){var z=document.createElement("canvas")
return z},
i3:function(a){H.f(a,"$isa7")
return"wheel"},
ik:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$iser")
try{J.hs(z,a)}catch(x){H.az(x)}return z},
cI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fA:function(a,b,c,d){var z,y
z=W.cI(W.cI(W.cI(W.cI(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
h0:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dE(a,b)},
a8:{"^":"Y;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nr:{"^":"u;0l:length=","%":"AccessibleNodeList"},
ns:{"^":"a8;0a4:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nt:{"^":"a8;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cZ:{"^":"u;",$iscZ:1,"%":";Blob"},
nz:{"^":"a8;0a4:type}","%":"HTMLButtonElement"},
d1:{"^":"a8;",
bW:function(a,b,c){if(c!=null)return a.getContext(b,P.mN(c,null))
return a.getContext(b)},
eH:function(a,b){return this.bW(a,b,null)},
$isd1:1,
"%":"HTMLCanvasElement"},
e2:{"^":"u;",$ise2:1,"%":"CanvasRenderingContext2D"},
nB:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nD:{"^":"hR;0l:length=","%":"CSSPerspective"},
bb:{"^":"u;",$isbb:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nE:{"^":"kU;0l:length=",
eI:function(a,b){var z=a.getPropertyValue(this.f5(a,b))
return z==null?"":z},
f5:function(a,b){var z,y
z=$.$get$ea()
y=z[b]
if(typeof y==="string")return y
y=this.hb(a,b)
z[b]=y
return y},
hb:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hY()+b
if(z in a)return z
return b},
gcn:function(a){return a.bottom},
gae:function(a){return a.height},
gaY:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gah:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hQ:{"^":"b;",
gaY:function(a){return this.eI(a,"left")}},
eb:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hR:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nF:{"^":"eb;0l:length=","%":"CSSTransformValue"},
nG:{"^":"eb;0l:length=","%":"CSSUnparsedValue"},
nH:{"^":"u;0l:length=","%":"DataTransferItemList"},
nI:{"^":"u;",
j:function(a){return String(a)},
"%":"DOMException"},
nJ:{"^":"kX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.v(c,"$isa9",[P.a1],"$asa9")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a9,P.a1]]},
$asy:function(){return[[P.a9,P.a1]]},
$isi:1,
$asi:function(){return[[P.a9,P.a1]]},
$ise:1,
$ase:function(){return[[P.a9,P.a1]]},
$asD:function(){return[[P.a9,P.a1]]},
"%":"ClientRectList|DOMRectList"},
i_:{"^":"u;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gah(a))+" x "+H.k(this.gae(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bZ(b,"$isa9",[P.a1],"$asa9")
if(!z)return!1
z=J.b6(b)
return a.left===z.gaY(b)&&a.top===z.gbh(b)&&this.gah(a)===z.gah(b)&&this.gae(a)===z.gae(b)},
gU:function(a){return W.fA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gcn:function(a){return a.bottom},
gae:function(a){return a.height},
gaY:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gah:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nK:{"^":"kZ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.Q(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nL:{"^":"u;0l:length=","%":"DOMTokenList"},
kT:{"^":"cv;a,b",
gl:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isY")},
m:function(a,b,c){var z
H.E(b)
H.f(c,"$isY")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.iJ(this)
return new J.am(z,z.length,0,[H.w(z,0)])},
aK:function(a,b,c,d){throw H.a(P.cg(null))},
$asy:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$ase:function(){return[W.Y]}},
Y:{"^":"N;",
gcs:function(a){return new W.kT(a,a.children)},
gdF:function(a){return P.jg(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
j:function(a){return a.localName},
$isY:1,
"%":";Element"},
nM:{"^":"a8;0a4:type}","%":"HTMLEmbedElement"},
af:{"^":"u;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"u;",
dw:["eL",function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(c!=null)this.f2(a,b,c,!1)}],
f2:function(a,b,c,d){return a.addEventListener(b,H.bv(H.l(c,{func:1,args:[W.af]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fG|fH|fJ|fK"},
aZ:{"^":"cZ;",$isaZ:1,"%":"File"},
el:{"^":"l3;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isaZ")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aZ]},
$asy:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$ise:1,
$ase:function(){return[W.aZ]},
$isel:1,
$asD:function(){return[W.aZ]},
"%":"FileList"},
nN:{"^":"a7;0l:length=","%":"FileWriter"},
nO:{"^":"a8;0l:length=","%":"HTMLFormElement"},
bc:{"^":"u;",$isbc:1,"%":"Gamepad"},
nP:{"^":"u;0l:length=","%":"History"},
nQ:{"^":"lg;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c6:{"^":"u;0dH:data=",$isc6:1,"%":"ImageData"},
eq:{"^":"a8;",$iseq:1,"%":"HTMLImageElement"},
er:{"^":"a8;0a4:type}",$iser:1,$ise4:1,"%":"HTMLInputElement"},
e4:{"^":"b;",$isY:1,$isa7:1,$isN:1},
bG:{"^":"ds;",$isbG:1,"%":"KeyboardEvent"},
nU:{"^":"a8;0a4:type}","%":"HTMLLinkElement"},
nV:{"^":"u;",
j:function(a){return String(a)},
"%":"Location"},
nW:{"^":"u;0l:length=","%":"MediaList"},
nX:{"^":"a7;",
dw:function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eL(a,b,c,!1)},
"%":"MessagePort"},
nY:{"^":"ln;",
i:function(a,b){return P.aY(a.get(H.Q(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaB:function(a){var z=H.c([],[P.j])
this.K(a,new W.iV(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asak:function(){return[P.j,null]},
$isM:1,
$asM:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iV:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nZ:{"^":"lo;",
i:function(a,b){return P.aY(a.get(H.Q(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaB:function(a){var z=H.c([],[P.j])
this.K(a,new W.iW(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asak:function(){return[P.j,null]},
$isM:1,
$asM:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iW:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bf:{"^":"u;",$isbf:1,"%":"MimeType"},
o_:{"^":"lq;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$ise:1,
$ase:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"MimeTypeArray"},
aC:{"^":"ds;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kS:{"^":"cv;a",
m:function(a,b,c){var z,y
H.E(b)
H.f(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.em(z,z.length,-1,[H.b7(C.X,z,"D",0)])},
aK:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asy:function(){return[W.N]},
$asi:function(){return[W.N]},
$ase:function(){return[W.N]}},
N:{"^":"a7;",
iz:function(a,b){var z,y
try{z=a.parentNode
J.hn(z,b,a)}catch(y){H.az(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.eM(a):z},
fX:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
j_:{"^":"ls;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
o7:{"^":"a8;0a4:type}","%":"HTMLOListElement"},
o8:{"^":"a8;0a4:type}","%":"HTMLObjectElement"},
bg:{"^":"u;0l:length=",$isbg:1,"%":"Plugin"},
ob:{"^":"lw;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"PluginArray"},
od:{"^":"u;0a4:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oe:{"^":"lC;",
i:function(a,b){return P.aY(a.get(H.Q(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaB:function(a){var z=H.c([],[P.j])
this.K(a,new W.jq(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asak:function(){return[P.j,null]},
$isM:1,
$asM:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jq:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
of:{"^":"a8;0a4:type}","%":"HTMLScriptElement"},
oh:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
bj:{"^":"a7;",$isbj:1,"%":"SourceBuffer"},
oi:{"^":"fH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"SourceBufferList"},
oj:{"^":"a8;0a4:type}","%":"HTMLSourceElement"},
bk:{"^":"u;",$isbk:1,"%":"SpeechGrammar"},
ok:{"^":"lF;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbk")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"u;0l:length=",$isbl:1,"%":"SpeechRecognitionResult"},
om:{"^":"lI;",
i:function(a,b){return a.getItem(H.Q(b))},
m:function(a,b,c){a.setItem(b,H.Q(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaB:function(a){var z=H.c([],[P.j])
this.K(a,new W.jH(z))
return z},
gl:function(a){return a.length},
$asak:function(){return[P.j,P.j]},
$isM:1,
$asM:function(){return[P.j,P.j]},
"%":"Storage"},
jH:{"^":"p:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
op:{"^":"a8;0a4:type}","%":"HTMLStyleElement"},
bm:{"^":"u;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
dp:{"^":"a8;",$isdp:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bn:{"^":"a7;",$isbn:1,"%":"TextTrack"},
bo:{"^":"a7;",$isbo:1,"%":"TextTrackCue|VTTCue"},
os:{"^":"lP;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbo")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asy:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"TextTrackCueList"},
ot:{"^":"fK;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbn")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"TextTrackList"},
ou:{"^":"u;0l:length=","%":"TimeRanges"},
bq:{"^":"u;",$isbq:1,"%":"Touch"},
br:{"^":"ds;",$isbr:1,"%":"TouchEvent"},
ov:{"^":"lV;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbq")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asD:function(){return[W.bq]},
"%":"TouchList"},
ow:{"^":"u;0l:length=","%":"TrackDefaultList"},
ds:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oy:{"^":"u;",
j:function(a){return String(a)},
"%":"URL"},
oz:{"^":"a7;0l:length=","%":"VideoTrackList"},
bR:{"^":"aC;",
ghQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbR:1,
"%":"WheelEvent"},
kL:{"^":"a7;",
fY:function(a,b){return a.requestAnimationFrame(H.bv(H.l(b,{func:1,ret:-1,args:[P.a1]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oE:{"^":"mm;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbb")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$asy:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$asD:function(){return[W.bb]},
"%":"CSSRuleList"},
oF:{"^":"i_;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bZ(b,"$isa9",[P.a1],"$asa9")
if(!z)return!1
z=J.b6(b)
return a.left===z.gaY(b)&&a.top===z.gbh(b)&&a.width===z.gah(b)&&a.height===z.gae(b)},
gU:function(a){return W.fA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gah:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oH:{"^":"mo;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"GamepadList"},
oI:{"^":"mq;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oJ:{"^":"ms;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbl")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asy:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asD:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
oK:{"^":"mu;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbm")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"StyleSheetList"},
l_:{"^":"dn;a,b,c,$ti",
i5:function(a,b,c,d){var z=H.w(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oG:{"^":"l_;a,b,c,$ti"},
l0:{"^":"eV;a,b,c,d,e,$ti",
hf:function(){var z=this.d
if(z!=null&&this.a<=0)J.ho(this.b,this.c,z,!1)},
q:{
a0:function(a,b,c,d,e){var z=c==null?null:W.h0(new W.l1(c),W.af)
z=new W.l0(0,a,b,z,!1,[e])
z.hf()
return z}}},
l1:{"^":"p:8;a",
$1:function(a){return this.a.$1(H.f(a,"$isaf"))}},
D:{"^":"b;$ti",
ga2:function(a){return new W.em(a,this.gl(a),-1,[H.b7(this,a,"D",0)])},
aK:function(a,b,c,d){H.A(d,H.b7(this,a,"D",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
em:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dR(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
kU:{"^":"u+hQ;"},
kW:{"^":"u+y;"},
kX:{"^":"kW+D;"},
kY:{"^":"u+y;"},
kZ:{"^":"kY+D;"},
l2:{"^":"u+y;"},
l3:{"^":"l2+D;"},
lf:{"^":"u+y;"},
lg:{"^":"lf+D;"},
ln:{"^":"u+ak;"},
lo:{"^":"u+ak;"},
lp:{"^":"u+y;"},
lq:{"^":"lp+D;"},
lr:{"^":"u+y;"},
ls:{"^":"lr+D;"},
lv:{"^":"u+y;"},
lw:{"^":"lv+D;"},
lC:{"^":"u+ak;"},
fG:{"^":"a7+y;"},
fH:{"^":"fG+D;"},
lE:{"^":"u+y;"},
lF:{"^":"lE+D;"},
lI:{"^":"u+ak;"},
lO:{"^":"u+y;"},
lP:{"^":"lO+D;"},
fJ:{"^":"a7+y;"},
fK:{"^":"fJ+D;"},
lU:{"^":"u+y;"},
lV:{"^":"lU+D;"},
ml:{"^":"u+y;"},
mm:{"^":"ml+D;"},
mn:{"^":"u+y;"},
mo:{"^":"mn+D;"},
mp:{"^":"u+y;"},
mq:{"^":"mp+D;"},
mr:{"^":"u+y;"},
ms:{"^":"mr+D;"},
mt:{"^":"u+y;"},
mu:{"^":"mt+D;"}}],["","",,P,{"^":"",
mQ:function(a){var z,y
z=J.P(a)
if(!!z.$isc6){y=z.gdH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fM(a.data,a.height,a.width)},
mP:function(a){if(a instanceof P.fM)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var z,y,x,w,v
if(a==null)return
z=P.eA(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.Q(y[w])
z.m(0,v,a[v])}return z},
mN:function(a,b){var z={}
a.K(0,new P.mO(z))
return z},
ei:function(){var z=$.eh
if(z==null){z=J.cW(window.navigator.userAgent,"Opera",0)
$.eh=z}return z},
hY:function(){var z,y
z=$.ee
if(z!=null)return z
y=$.ef
if(y==null){y=J.cW(window.navigator.userAgent,"Firefox",0)
$.ef=y}if(y)z="-moz-"
else{y=$.eg
if(y==null){y=!P.ei()&&J.cW(window.navigator.userAgent,"Trident/",0)
$.eg=y}if(y)z="-ms-"
else z=P.ei()?"-o-":"-webkit-"}$.ee=z
return z},
lL:{"^":"b;",
e4:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cS:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.P(a)
if(!!y.$isap)return new Date(a.a)
if(!!y.$isjj)throw H.a(P.cg("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscZ)return a
if(!!y.$isel)return a
if(!!y.$isc6)return a
if(!!y.$iseJ||!!y.$isdi)return a
if(!!y.$isM){x=this.e4(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lN(z,this))
return z.a}if(!!y.$ise){x=this.e4(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hN(a,x)}throw H.a(P.cg("structured clone of other type"))},
hN:function(a,b){var z,y,x,w
z=J.aR(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cS(z.i(a,w)))
return x}},
lN:{"^":"p:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cS(b)}},
fM:{"^":"b;dH:a>,b,c",$isc6:1},
mO:{"^":"p:6;a",
$2:function(a,b){this.a[a]=b}},
lM:{"^":"lL;a,b"},
i9:{"^":"cv;a,b",
gbn:function(){var z,y,x
z=this.b
y=H.ax(z,"y",0)
x=W.Y
return new H.iL(new H.kJ(z,H.l(new P.ia(),{func:1,ret:P.a3,args:[y]}),[y]),H.l(new P.ib(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.E(b)
H.f(c,"$isY")
z=this.gbn()
J.hr(z.b.$1(J.cX(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.aA(this.gbn().a)},
i:function(a,b){var z=this.gbn()
return z.b.$1(J.cX(z.a,b))},
ga2:function(a){var z=P.iF(this.gbn(),!1,W.Y)
return new J.am(z,z.length,0,[H.w(z,0)])},
$asy:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$ase:function(){return[W.Y]}},
ia:{"^":"p:36;",
$1:function(a){return!!J.P(H.f(a,"$isN")).$isY}},
ib:{"^":"p:30;",
$1:function(a){return H.h(H.f(a,"$isN"),"$isY")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lx:{"^":"b;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.A(z+this.c,H.w(this,0))},
gcn:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.A(z+this.d,H.w(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bZ(b,"$isa9",[P.a1],"$asa9")
if(!z)return!1
z=this.a
y=J.b6(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.w(this,0)
if(H.A(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.A()
z=H.A(x+this.d,w)===y.gcn(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.c1(z)
x=this.b
w=J.c1(x)
if(typeof z!=="number")return z.A()
v=H.w(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.A(x+this.d,v)
return P.lh(P.cJ(P.cJ(P.cJ(P.cJ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"lx;aY:a>,bh:b>,ah:c>,ae:d>,$ti",q:{
jg:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bH:{"^":"u;",$isbH:1,"%":"SVGLength"},nT:{"^":"lj;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbH")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bH]},
$isi:1,
$asi:function(){return[P.bH]},
$ise:1,
$ase:function(){return[P.bH]},
$asD:function(){return[P.bH]},
"%":"SVGLengthList"},bJ:{"^":"u;",$isbJ:1,"%":"SVGNumber"},o6:{"^":"lu;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbJ")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$ise:1,
$ase:function(){return[P.bJ]},
$asD:function(){return[P.bJ]},
"%":"SVGNumberList"},oc:{"^":"u;0l:length=","%":"SVGPointList"},og:{"^":"eX;0a4:type}","%":"SVGScriptElement"},on:{"^":"lK;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.Q(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},oq:{"^":"eX;0a4:type}","%":"SVGStyleElement"},eX:{"^":"Y;",
gcs:function(a){return new P.i9(a,new W.kS(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bN:{"^":"u;",$isbN:1,"%":"SVGTransform"},ox:{"^":"lX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbN")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$ise:1,
$ase:function(){return[P.bN]},
$asD:function(){return[P.bN]},
"%":"SVGTransformList"},li:{"^":"u+y;"},lj:{"^":"li+D;"},lt:{"^":"u+y;"},lu:{"^":"lt+D;"},lJ:{"^":"u+y;"},lK:{"^":"lJ+D;"},lW:{"^":"u+y;"},lX:{"^":"lW+D;"}}],["","",,P,{"^":"",R:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$isk3:1}}],["","",,P,{"^":"",nu:{"^":"u;0l:length=","%":"AudioBuffer"},dW:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nv:{"^":"kR;",
i:function(a,b){return P.aY(a.get(H.Q(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gaB:function(a){var z=H.c([],[P.j])
this.K(a,new P.hv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asak:function(){return[P.j,null]},
$isM:1,
$asM:function(){return[P.j,null]},
"%":"AudioParamMap"},hv:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hw:{"^":"dW;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nw:{"^":"a7;0l:length=","%":"AudioTrackList"},hA:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nx:{"^":"dW;0a4:type}","%":"BiquadFilterNode"},o9:{"^":"hA;0l:length=","%":"OfflineAudioContext"},oa:{"^":"hw;0a4:type}","%":"Oscillator|OscillatorNode"},kR:{"^":"u+ak;"}}],["","",,P,{"^":"",dl:{"^":"u;",
es:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.P(g)
if(!!y.$isc6&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.mP(g))
return}if(!!y.$iseq&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c2("Incorrect number or type of arguments"))},
iG:function(a,b,c,d,e,f,g){return this.es(a,b,c,d,e,f,g,null,null,null)},
$isdl:1,
"%":"WebGLRenderingContext"},ka:{"^":"u;",$iska:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ol:{"^":"lH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return P.aY(a.item(b))},
m:function(a,b,c){H.E(b)
H.f(c,"$isM")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asy:function(){return[[P.M,,,]]},
$isi:1,
$asi:function(){return[[P.M,,,]]},
$ise:1,
$ase:function(){return[[P.M,,,]]},
$asD:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},lG:{"^":"u+y;"},lH:{"^":"lG+D;"}}],["","",,O,{"^":"",ao:{"^":"b;0a,0b,0c,0d,$ti",
bj:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cT:function(a,b,c){var z=H.ax(this,"ao",0)
H.l(b,{func:1,ret:P.a3,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aN:function(a,b){return this.cT(a,null,b)},
di:function(a){var z
H.v(a,"$isi",[H.ax(this,"ao",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dg:function(a,b){var z
H.v(b,"$isi",[H.ax(this,"ao",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.am(z,z.length,0,[H.w(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"ao",0)
H.A(b,z)
z=[z]
if(this.di(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dg(x,H.c([b],z))}},
b2:function(a,b){var z,y
H.v(b,"$isi",[H.ax(this,"ao",0)],"$asi")
if(this.di(b)){z=this.a
y=z.length
C.a.b2(z,b)
this.dg(y,b)}},
$isi:1,
q:{
co:function(a){var z=new O.ao([a])
z.bj(a)
return z}}},df:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
eV:function(a){var z=this.b
if(!(z==null))z.w(a)},
aO:function(){return this.eV(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gaL(z)
else return V.b0()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.b0())
else C.a.h(z,a)
this.aO()},
bc:function(){var z=this.a
if(z.length>0){z.pop()
this.aO()}}}}],["","",,E,{"^":"",cY:{"^":"b;"},aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d2:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();){y=z.d
if(y.f==null)y.d2()}},
sbZ:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().F(0,this.gek())
y=this.c
if(y!=null)y.gp().h(0,this.gek())
x=new D.x("shape",z,this.c,this,[F.eS])
x.b=!0
this.af(x)}},
sag:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gp().F(0,this.gel())
y=this.f
this.f=a
if(a!=null)a.gp().h(0,this.gel())
this.d2()
x=new D.x("technique",y,this.f,this,[O.b3])
x.b=!0
this.af(x)}},
sb9:function(a){var z,y
if(!J.L(this.r,a)){z=this.r
if(z!=null)z.gp().F(0,this.gej())
if(a!=null)a.gp().h(0,this.gej())
this.r=a
y=new D.x("mover",z,a,this,[U.ag])
y.b=!0
this.af(y)}},
aa:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aD(0,b,this):null
if(!J.L(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.ar])
w.b=!0
this.af(w)}z=this.f
if(z!=null)z.aa(0,b)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();)z.d.aa(0,b)},
a9:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.k(0,z.gX(z)))
z.aO()
a.cM(this.f)
z=a.dy
x=(z&&C.a).gaL(z)
if(x!=null&&this.d!=null)x.bT(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();)z.d.a9(a)
a.cK()
a.dx.bc()},
gp:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.w(a)},
Z:function(){return this.af(null)},
ii:[function(a){H.f(a,"$isz")
this.e=null
this.af(a)},function(){return this.ii(null)},"jF","$1","$0","gek",0,2,0],
ij:[function(a){this.af(H.f(a,"$isz"))},function(){return this.ij(null)},"jG","$1","$0","gel",0,2,0],
ih:[function(a){this.af(H.f(a,"$isz"))},function(){return this.ih(null)},"jE","$1","$0","gej",0,2,0],
ie:[function(a){this.af(H.f(a,"$isz"))},function(){return this.ie(null)},"jC","$1","$0","gei",0,2,0],
jB:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.aH],"$asi")
for(z=b.length,y=this.gei(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.aT()
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.Z()},"$2","gic",8,0,9],
jD:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.aH],"$asi")
for(z=b.length,y=this.gei(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga7()==null){v=new D.aT()
v.d=0
w.sa7(v)}w.ga7().F(0,y)}}this.Z()},"$2","gig",8,0,9],
j:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaJ:1,
q:{
d3:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.co(E.aH)
z.y=y
y.aN(z.gic(),z.gig())
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
z.sbZ(0,e)
z.sag(f)
z.sb9(c)
return z}}},jl:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eR:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ap(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.df()
y=[V.ar]
z.a=H.c([],y)
z.gp().h(0,new E.jn(this))
this.cy=z
z=new O.df()
z.a=H.c([],y)
z.gp().h(0,new E.jo(this))
this.db=z
z=new O.df()
z.a=H.c([],y)
z.gp().h(0,new E.jp(this))
this.dx=z
z=H.c([],[O.b3])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.j,A.cd])},
giu:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.k(0,y.gX(y))
this.z=y
z=y}return z},
geo:function(){var z,y
z=this.ch
if(z==null){z=this.giu()
y=this.dx
y=z.k(0,y.gX(y))
this.ch=y
z=y}return z},
geA:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gX(z)
y=this.dx
y=z.k(0,y.gX(y))
this.cx=y
z=y}return z},
cM:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaL(z):a;(z&&C.a).h(z,y)},
cK:function(){var z=this.dy
if(z.length>1)z.pop()},
bs:function(a){var z=a.b
if(z.length===0)throw H.a(P.t("May not cache a shader with no name."))
if(this.fr.bv(0,z))throw H.a(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
q:{
jm:function(a,b){var z=new E.jl(a,b)
z.eR(a,b)
return z}}},jn:{"^":"p:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.z=null
z.ch=null}},jo:{"^":"p:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jp:{"^":"p:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
eX:[function(a){var z
H.f(a,"$isz")
z=this.x
if(!(z==null))z.w(a)
this.iB()},function(){return this.eX(null)},"eW","$1","$0","gcY",0,2,0],
ghY:function(){var z,y,x
z=Date.now()
y=C.d.a6(P.ej(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ap(z,!1)
return x/y},
dl:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.b6(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.b6(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.f1(C.q,this.giA())}},
iB:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jY(this),{func:1,ret:-1,args:[P.a1]})
C.C.fd(z)
C.C.fY(z,W.h0(y,P.a1))}},"$0","giA",0,0,3],
iy:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dl()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ap(w,!1)
x.y=P.ej(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aO()
w=x.db
C.a.sl(w.a,0)
w.aO()
w=x.dx
C.a.sl(w.a,0)
w.aO()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a9(this.e)}}catch(v){z=H.az(v)
y=H.bx(v)
P.dQ("Error: "+H.k(z))
P.dQ("Stack: "+H.k(y))
throw H.a(z)}},
q:{
jX:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$isd1)return E.f0(a,!0,!0,!0,!1)
y=W.d2(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcs(a).h(0,y)
w=E.f0(y,!0,!0,!0,!1)
w.a=a
return w},
f0:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jW()
y=P.iA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bW(a,"webgl",y)
x=H.f(x==null?C.l.bW(a,"experimental-webgl",y):x,"$isdl")
if(x==null)H.q(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jm(x,a)
w=new T.jQ(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kn(a)
v=new X.is()
v.c=new X.aU(!1,!1,!1)
v.d=P.iD(null,null,null,P.m)
w.b=v
v=new X.iX(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iH(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.k0(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eV,P.b]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.l(w.gfv(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.l(w.gfC(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.l(w.gfs(),q),!1,r))
v=w.z
p=W.bG
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.l(w.gfE(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.l(w.gfD(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.l(w.gfH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.l(w.gfJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.l(w.gfI(),s),!1,t))
p=w.z
o=W.bR;(p&&C.a).h(p,W.a0(a,H.Q(W.i3(a)),H.l(w.gfK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.l(w.gfw(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.l(w.gfz(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.l(w.gfL(),q),!1,r))
r=w.z
q=W.br
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.l(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.l(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.l(w.gfS(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ap(Date.now(),!1)
z.cy=0
z.dl()
return z}}},jY:{"^":"p:31;a",
$1:function(a){var z
H.ng(a)
z=this.a
if(z.ch){z.ch=!1
z.iy()}}}}],["","",,Z,{"^":"",fv:{"^":"b;a,b",q:{
dz:function(a,b,c){var z
H.v(c,"$ise",[P.m],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b5(c)),35044)
a.bindBuffer(b,null)
return new Z.fv(b,z)}}},e0:{"^":"cY;a,b,c,d,e",
V:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.az(y)
x=P.t('Failed to bind buffer attribute "'+J.ae(this.a)+'": '+H.k(z))
throw H.a(x)}},
j:function(a){return"["+J.ae(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},cH:{"^":"b;a",$isny:1},c3:{"^":"b;a,0b,c,d",
am:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
V:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].V(a)},
aM:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a9:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].j(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isor:1},cs:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bi(this.c)+"'")+"]"}},aW:{"^":"b;a",
gcV:function(a){var z,y
z=this.a
y=(z&$.$get$ac().a)!==0?3:0
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=2
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=3
if((z&$.$get$bQ().a)!==0)y+=4
if((z&$.$get$b4().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hH:function(a){var z,y,x
z=$.$get$ac()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fu()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.c([],[P.j])
y=this.a
if((y&$.$get$ac().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aO().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bQ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
q:{
av:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",e3:{"^":"b;"},aT:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
F:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.az(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
return y},
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.i7(z))
return!0},
dJ:function(){return this.w(null)},
iC:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.w(y)}}},
ad:function(a){return this.iC(a,!0,!1)},
q:{
F:function(){var z=new D.aT()
z.d=0
return z}}},i7:{"^":"p:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},c7:{"^":"z;c,d,a,0b,$ti"},c8:{"^":"z;c,d,a,0b,$ti"},x:{"^":"z;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",e1:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
q:{"^":"nA<"}},ex:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ex))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},ey:{"^":"z;c,a,0b"},is:{"^":"b;0a,0b,0c,0d",
ir:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ey(a,this)
y.b=!0
return z.w(y)},
im:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ey(a,this)
y.b=!0
return z.w(y)}},eC:{"^":"cx;x,y,c,d,e,a,0b"},iH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aH:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ap(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gaX()
s=new X.cb(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cJ:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.aH(a,b))
return!0},
bb:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eK()
if(typeof z!=="number")return z.bV()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.aH(a,b))
return!0},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.aH(a,b))
return!0},
is:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dg(new V.a_(v*u,t*s),y,x,new P.ap(w,!1),this)
w.b=!0
z.w(w)
return!0},
fG:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ap(Date.now(),!1)
y=this.f
x=new X.eC(c,a,this.a.gaX(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.V(0,0)}},aU:{"^":"b;a,b,c",
u:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},cb:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},iX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.ap(Date.now(),!1)
y=this.a.gaX()
x=new X.cb(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cJ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.c6(a,b,!0))
return!0},
bb:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eK()
if(typeof z!=="number")return z.bV()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.c6(a,b,!0))
return!0},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.c6(a,b,!1))
return!0},
it:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dg(new V.a_(w*v,u*t),y,b,new P.ap(x,!1),this)
x.b=!0
z.w(x)
return!0}},dg:{"^":"cx;x,c,d,e,a,0b"},cx:{"^":"z;"},f5:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},k0:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aH:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.V],"$ase")
z=new P.ap(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gaX()
w=new X.f5(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iq:function(a){var z
H.v(a,"$ise",[V.V],"$ase")
z=this.b
if(z==null)return!1
z.w(this.aH(a,!0))
return!0},
io:function(a){var z
H.v(a,"$ise",[V.V],"$ase")
z=this.c
if(z==null)return!1
z.w(this.aH(a,!0))
return!0},
ip:function(a){var z
H.v(a,"$ise",[V.V],"$ase")
z=this.d
if(z==null)return!1
z.w(this.aH(a,!1))
return!0}},kn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaX:function(){var z=this.a
return V.b2(0,0,(z&&C.l).gdF(z).c,C.l.gdF(z).d)},
d9:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ex(z,new X.aU(y,a.altKey,a.shiftKey))},
aU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aU(y,a.altKey,a.shiftKey)},
ci:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aU(y,a.altKey,a.shiftKey)},
aI:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.V(y-w,x-v)},
b1:function(a){return new V.a_(a.movementX,a.movementY)},
cb:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.a_(u.pageX)
C.h.a_(u.pageY)
s=z.left
C.h.a_(u.pageX)
C.a.h(y,new V.V(t-s,C.h.a_(u.pageY)-z.top))}return y},
aF:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e1(z,new X.aU(y,a.altKey,a.shiftKey))},
c8:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jb:[function(a){this.f=!0},"$1","gfC",4,0,8],
j3:[function(a){this.f=!1},"$1","gfs",4,0,8],
j6:[function(a){H.f(a,"$isaC")
if(this.f&&this.c8(a))a.preventDefault()},"$1","gfv",4,0,4],
jd:[function(a){var z
H.f(a,"$isbG")
if(!this.f)return
z=this.d9(a)
if(this.b.ir(z))a.preventDefault()},"$1","gfE",4,0,27],
jc:[function(a){var z
H.f(a,"$isbG")
if(!this.f)return
z=this.d9(a)
if(this.b.im(z))a.preventDefault()},"$1","gfD",4,0,27],
jf:[function(a){var z,y,x,w
H.f(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aU(a)
if(this.x){y=this.aF(a)
x=this.b1(a)
if(this.d.cJ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aF(a)
w=this.aI(a)
if(this.c.cJ(y,w))a.preventDefault()},"$1","gfH",4,0,4],
jh:[function(a){var z,y,x
H.f(a,"$isaC")
this.aU(a)
z=this.aF(a)
if(this.x){y=this.b1(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gfJ",4,0,4],
j8:[function(a){var z,y,x
H.f(a,"$isaC")
if(!this.c8(a)){this.aU(a)
z=this.aF(a)
if(this.x){y=this.b1(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gfz",4,0,4],
jg:[function(a){var z,y,x
H.f(a,"$isaC")
this.aU(a)
z=this.aF(a)
if(this.x){y=this.b1(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfI",4,0,4],
j7:[function(a){var z,y,x
H.f(a,"$isaC")
if(!this.c8(a)){this.aU(a)
z=this.aF(a)
if(this.x){y=this.b1(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aI(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gfw",4,0,4],
ji:[function(a){var z,y
H.f(a,"$isbR")
this.aU(a)
z=new V.a_((a&&C.B).ghP(a),C.B.ghQ(a)).B(0,180)
if(this.x){if(this.d.is(z))a.preventDefault()
return}if(this.r)return
y=this.aI(a)
if(this.c.it(z,y))a.preventDefault()},"$1","gfK",4,0,35],
jj:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aF(this.y)
v=this.aI(this.y)
this.d.fG(w,v,x)}},"$1","gfL",4,0,8],
jr:[function(a){var z
H.f(a,"$isbr")
this.a.focus()
this.f=!0
this.ci(a)
z=this.cb(a)
if(this.e.iq(z))a.preventDefault()},"$1","gfT",4,0,13],
jp:[function(a){var z
H.f(a,"$isbr")
this.ci(a)
z=this.cb(a)
if(this.e.io(z))a.preventDefault()},"$1","gfR",4,0,13],
jq:[function(a){var z
H.f(a,"$isbr")
this.ci(a)
z=this.cb(a)
if(this.e.ip(z))a.preventDefault()},"$1","gfS",4,0,13]}}],["","",,D,{"^":"",hZ:{"^":"b;",$isa2:1,$isaJ:1},a2:{"^":"b;",$isaJ:1},it:{"^":"ao;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
ap:function(a){var z=this.Q
if(!(z==null))z.w(a)},
fF:[function(a){var z
H.f(a,"$isz")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.fF(null)},"je","$1","$0","gdh",0,2,0],
jk:[function(a){var z,y,x
H.v(a,"$isi",[D.a2],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f9(x))return!1}return!0},"$1","gfM",4,0,37],
j0:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a2
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdh(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cw)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.aT()
s.d=0
t.r=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.c7(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gfo",8,0,25],
jm:[function(a,b){var z,y,x,w,v,u
z=D.a2
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdh(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.f(b[w],"$isa2")
if(v instanceof D.cw)C.a.F(this.f,v)
u=v.r
if(u==null){u=new D.aT()
u.d=0
v.r=u}u.F(0,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gfO",8,0,25],
f9:function(a){var z=C.a.az(this.f,a)
return z},
$asi:function(){return[D.a2]},
$asao:function(){return[D.a2]}},cw:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
ap:[function(a){var z
H.f(a,"$isz")
z=this.r
if(!(z==null))z.w(a)},function(){return this.ap(null)},"iR","$1","$0","geY",0,2,0],
$isa2:1,
$isaJ:1},jE:{"^":"b;",$isa2:1,$isaJ:1},jT:{"^":"b;",$isa2:1,$isaJ:1},jU:{"^":"b;",$isa2:1,$isaJ:1},jV:{"^":"b;",$isa2:1,$isaJ:1}}],["","",,V,{"^":"",
nC:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iU",8,0,34],
cU:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.av(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.h.ew($.n.$2(a,0)?0:a,b),c+b+1)},
bw:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.r],"$ase")
z=H.c([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ao(z[u],x))}return z},
c0:function(a,b){return C.h.iI(Math.pow(b,C.J.b6(Math.log(H.mM(a))/Math.log(b))))},
X:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aB:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
de:{"^":"b;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.de))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.bw(H.c([this.a,this.d,this.r],z),3,0)
x=V.bw(H.c([this.b,this.e,this.x],z),3,0)
w=V.bw(H.c([this.c,this.f,this.y],z),3,0)
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
ar:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
ed:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.b0()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ex:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gar(a)
if(typeof z!=="number")return z.k()
y=C.h.k(z,y)
z=this.b
x=a.gas(a)
if(typeof z!=="number")return z.k()
x=C.h.k(z,x)
z=this.c
w=a.gat()
if(typeof z!=="number")return z.k()
w=C.h.k(z,w)
z=this.e
v=a.gar(a)
if(typeof z!=="number")return z.k()
v=C.h.k(z,v)
z=this.f
u=a.gas(a)
if(typeof z!=="number")return z.k()
u=C.h.k(z,u)
z=this.r
t=a.gat()
if(typeof z!=="number")return z.k()
t=C.h.k(z,t)
z=this.y
s=a.gar(a)
if(typeof z!=="number")return z.k()
s=C.h.k(z,s)
z=this.z
r=a.gas(a)
if(typeof z!=="number")return z.k()
r=C.h.k(z,r)
z=this.Q
q=a.gat()
if(typeof z!=="number")return z.k()
return new V.O(y+x+w,v+u+t,s+r+C.h.k(z,q))},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
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
return new V.a6(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
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
j:function(a){return this.N()},
e5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.bw(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bw(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bw(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bw(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.e5("",3,0)},
D:function(a){return this.e5(a,3,0)},
q:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b0:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eI:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eG:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eH:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
V:{"^":"b;a,b",
L:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
a6:{"^":"b;a,b,c",
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.o(w)
return new V.a6(this.a+z,this.b+y,x+w)},
L:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.L()
if(typeof w!=="number")return H.o(w)
return new V.a6(this.a-z,this.b-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bh:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bh))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cA:{"^":"b;a,b,c,d",
gaC:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cA))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
q:{
b2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cA(a,b,c,d)}}},
a_:{"^":"b;a,b",
i3:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,20],
G:function(a){var z,y,x,w
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
return new V.a_(z*b,y*b)},
B:function(a,b){var z,y
if($.n.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.a_(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
O:{"^":"b;a,b,c",
i3:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,20],
G:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
return this.a*a.a+this.b*a.b+z*y},
cG:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.L()
if(typeof x!=="number")return H.o(x)
return new V.O(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
b4:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.o(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.O(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.o(w)
return new V.O(this.a+z,this.b+y,x+w)},
R:function(a){var z=this.c
if(typeof z!=="number")return z.R()
return new V.O(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.O(this.a*b,this.b*b,z*b)},
B:function(a,b){var z
if($.n.$2(b,0))return new V.O(0,0,0)
z=this.c
if(typeof z!=="number")return z.B()
return new V.O(this.a/b,this.b/b,z/b)},
ee:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hJ:{"^":"e3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c1:function(a){var z=V.cU(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.w(a)},
seB:function(a,b){},
sef:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c1(z)}z=new D.x("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.M(z)}},
seh:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c1(z)}z=new D.x("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.M(z)}},
sa8:function(a,b){var z,y
b=this.c1(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.r])
z.b=!0
this.M(z)}},
seg:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.M(z)}},
sa0:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.x("velocity",x,a,this,[P.r])
z.b=!0
this.M(z)}},
sdG:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.r])
z.b=!0
this.M(z)}},
aa:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa8(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa0(y)}},
q:{
e6:function(){var z=new U.hJ()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e7:{"^":"ag;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
aD:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
return J.L(this.a,b.a)},
j:function(a){return"Constant: "+this.a.D("          ")},
q:{
e8:function(a){var z=new U.e7()
z.a=a
return z}}},eo:{"^":"ao;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
M:[function(a){var z
H.f(a,"$isz")
z=this.e
if(!(z==null))z.w(a)},function(){return this.M(null)},"aS","$1","$0","gbo",0,2,0],
iS:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ag
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbo(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geZ",8,0,24],
jl:[function(a,b){var z,y,x,w,v
z=U.ag
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbo(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gp().F(0,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gfN",8,0,24],
aD:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.am(z,z.length,0,[H.w(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.aD(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.b0():x
z=this.e
if(!(z==null))z.ad(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.L(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.ag]},
$asao:function(){return[U.ag]},
$isag:1,
q:{
ep:function(a){var z=new U.eo()
z.bj(U.ag)
z.aN(z.geZ(),z.gfN())
z.b2(0,a)
z.e=null
z.f=V.b0()
z.r=0
return z}}},ag:{"^":"e3;"},eR:{"^":"ag;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gp:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.w(a)},
seE:function(a){var z,y
a=V.cU(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.x("yaw",y,a,this,[P.r])
z.b=!0
this.M(z)}},
sen:function(a,b){var z,y
b=V.cU(b,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,b)){y=this.b
this.b=b
z=new D.x("pitch",y,b,this,[P.r])
z.b=!0
this.M(z)}},
seq:function(a){var z,y
a=V.cU(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.x("roll",y,a,this,[P.r])
z.b=!0
this.M(z)}},
aD:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seE(this.a+this.d*b.y)
this.sen(0,this.b+this.e*b.y)
this.seq(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aI(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.eH(this.b)).k(0,V.eG(this.a))
z=this.y
if(!(z==null))z.ad(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eR))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
j:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}},ko:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
M:[function(a){var z
H.f(a,"$isz")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.M(null)},"aS","$1","$0","gbo",0,2,0],
cl:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.gfk())
z=this.a.c
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.gfl())
z=this.a.c
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.gfm())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.gfh())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.gfi())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.ghe())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghd())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.ghc())
return!0},
ax:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.a_(z,y)},
iX:[function(a){a=H.h(H.f(a,"$isz"),"$iscb")
if(!J.L(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfk",4,0,2],
iY:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isz"),"$iscb")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ax(new V.a_(y.a,y.b).k(0,2).B(0,z.gaC()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sa0(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sa0(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ax(new V.a_(x.a,x.b).k(0,2).B(0,z.gaC()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.L(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).k(0,2).B(0,z.gaC()))}this.aS()},"$1","gfl",4,0,2],
iZ:[function(a){var z,y,x
H.f(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sa0(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sa0(-y*10*z)
this.aS()}},"$1","gfm",4,0,2],
iV:[function(a){if(H.h(H.f(a,"$isz"),"$iseC").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfh",4,0,2],
iW:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isz"),"$iscb")
if(!J.L(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ax(new V.a_(x.a,x.b).k(0,2).B(0,z.gaC()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.L(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).k(0,2).B(0,z.gaC()))
this.aS()},"$1","gfi",4,0,2],
jv:[function(a){H.f(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghe",4,0,2],
ju:[function(a){var z,y,x,w,v,u,t
a=H.h(H.f(a,"$isz"),"$isf5")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ax(new V.a_(y.a,y.b).k(0,2).B(0,z.gaC()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sa0(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sa0(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ax(new V.a_(x.a,x.b).k(0,2).B(0,z.gaC()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa8(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa8(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.L(0,a.z)
this.dx=this.ax(new V.a_(y.a,y.b).k(0,2).B(0,z.gaC()))}this.aS()},"$1","ghd",4,0,2],
jt:[function(a){var z,y,x
H.f(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sa0(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sa0(-y*10*z)
this.aS()}},"$1","ghc",4,0,2],
aD:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.aa(0,x)
this.b.aa(0,x)
this.fr=V.eG(this.b.d).k(0,V.eH(this.c.d))}return this.fr},
$isag:1},kp:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.w(a)},
cl:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=this.gfn()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
j_:[function(a){var z,y,x,w
H.f(a,"$isz")
if(!J.L(this.b,this.a.b.c))return
H.h(a,"$isdg")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.r])
z.b=!0
this.M(z)}},"$1","gfn",4,0,2],
aD:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aI(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isag:1}}],["","",,M,{"^":"",hK:{"^":"ao;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a1:[function(a){var z
H.f(a,"$isz")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a1(null)},"cZ","$1","$0","gY",0,2,0],
jn:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aK
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfP",8,0,23],
jo:[function(a,b){var z,y,x,w,v
z=M.aK
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gp().F(0,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfQ",8,0,23],
a9:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();){y=z.d
if(!(y==null))y.a9(a)}this.e=!1},
$asi:function(){return[M.aK]},
$asao:function(){return[M.aK]},
$isaK:1},hP:{"^":"b;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a1:[function(a){var z
H.f(a,"$isz")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a1(null)},"cZ","$1","$0","gY",0,2,0],
sb_:function(a,b){var z,y
if(b==null)b=X.d4(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().F(0,this.gY())
y=this.b
this.b=b
b.gp().h(0,this.gY())
z=new D.x("target",y,this.b,this,[X.cB])
z.b=!0
this.a1(z)}},
sag:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().F(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gY())
z=new D.x("technique",y,this.c,this,[O.b3])
z.b=!0
this.a1(z)}},
a9:function(a){var z,y
a.cM(this.c)
this.b.V(a)
z=this.a
z.toString
a.cy.bQ(V.b0())
y=V.b0()
z.a
a.db.bQ(y)
z=this.c
if(z!=null)z.aa(0,a)
this.d.aa(0,a)
this.d.a9(a)
this.a.toString
a.cy.bc()
a.db.bc()
this.b.toString
a.cK()},
$isaK:1,
q:{
e9:function(a,b,c){var z,y,x
z=new M.hP()
a=new X.ii()
y=z.a
z.a=a
a.gp().h(0,z.gY())
x=new D.x("camera",y,z.a,z,[X.cn])
x.b=!0
z.a1(x)
z.sb_(0,b)
z.sag(c)
x=E.d3(null,!0,null,"",null,null)
x.sbZ(0,F.hg(!1,2,null,2,0))
z.d=x
z.e=null
return z}}},i5:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.f(a,"$isz")
z=this.x
if(!(z==null))z.w(a)},function(){return this.a1(null)},"cZ","$1","$0","gY",0,2,0],
j4:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aH
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.aT()
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gft",8,0,9],
j5:[function(a,b){var z,y,x,w,v,u
z=E.aH
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga7()==null){u=new D.aT()
u.d=0
v.sa7(u)}v.ga7().F(0,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfu",8,0,9],
scr:function(a){var z,y
if(a==null)a=X.eN(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().F(0,this.gY())
y=this.a
this.a=a
a.gp().h(0,this.gY())
z=new D.x("camera",y,this.a,this,[X.cn])
z.b=!0
this.a1(z)}},
sb_:function(a,b){var z,y
if(b==null)b=X.d4(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().F(0,this.gY())
y=this.b
this.b=b
b.gp().h(0,this.gY())
z=new D.x("target",y,this.b,this,[X.cB])
z.b=!0
this.a1(z)}},
sag:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().F(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gY())
z=new D.x("technique",y,this.c,this,[O.b3])
z.b=!0
this.a1(z)}},
gp:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.cM(this.c)
this.b.V(a)
z=this.a
y=a.c
x=a.d
w=z.c
v=z.d
u=z.e
t=u-v
s=1/Math.tan(w*0.5)
r=V.aI(-s/(y/x),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0)
z.a
a.cy.bQ(r)
y=$.eO
if(y==null){y=new V.O(0,0,-1)
q=y.B(0,Math.sqrt(y.G(y)))
y=new V.O(0,1,0).b4(q)
p=y.B(0,Math.sqrt(y.G(y)))
o=q.b4(p)
n=new V.O(0,0,0)
y=V.aI(p.a,o.a,q.a,p.R(0).G(n),p.b,o.b,q.b,o.R(0).G(n),p.c,o.c,q.c,q.R(0).G(n),0,0,0,1)
$.eO=y
m=y}else m=y
y=z.b
if(y!=null){l=y.aD(0,a,z)
if(l!=null)m=l.k(0,m)}a.db.bQ(m)
z=this.c
if(z!=null)z.aa(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();)z.d.aa(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();)z.d.a9(a)
this.a.toString
a.cy.bc()
a.db.bc()
this.b.aM(a)
a.cK()},
$isaK:1,
q:{
ek:function(a,b,c,d){var z,y
z=new M.i5()
y=O.co(E.aH)
z.d=y
y.aN(z.gft(),z.gfu())
z.e=null
z.f=null
z.r=null
z.x=null
z.scr(a)
z.sb_(0,c)
z.sag(d)
z.d.b2(0,b)
return z}}},aK:{"^":"b;"}}],["","",,A,{"^":"",dV:{"^":"b;a,b,c"},hu:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
bx:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ed:{"^":"cd;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},en:{"^":"cd;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.cU(c)
b.a.uniform1i(b.d,0)}}},eE:{"^":"cd;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aA,0au,0by,0dK,0bz,0bA,0dL,0dM,0bB,0bC,0dN,0dO,0bD,0bE,0dP,0dQ,0bF,0dR,0dS,0bG,0dT,0dU,0bH,0bI,0bJ,0dV,0dW,0bK,0bL,0dX,0dY,0bM,0dZ,0cv,0e_,0cw,0e0,0cz,0e1,0cA,0e2,0cB,0e3,0cC,a,b,0c,0d,0e,0f,0r,0x,0y",
eQ:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.as("")
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
a1.hh(z)
a1.ho(z)
a1.hi(z)
a1.hw(z)
a1.hx(z)
a1.hq(z)
a1.hB(z)
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
v=this.z
z=new P.as("")
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
v.hl(z)
v.hg(z)
v.hj(z)
v.hm(z)
v.hu(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hs(z)
v.ht(z)}v.hp(z)
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
p=H.c([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hk(z)
v.hr(z)
v.hv(z)
v.hy(z)
v.hz(z)
v.hA(z)
v.hn(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.j])
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.bN(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$isaj")
if(y)this.dy=H.h(this.y.n(0,"objMat"),"$isaj")
if(w)this.fr=H.h(this.y.n(0,"viewObjMat"),"$isaj")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$isaj")
if(a1.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$iscD")
if(a1.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$isaj")
if(a1.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$isaj")
this.r1=H.c([],[A.aj])
y=a1.aA
if(y>0){this.k4=H.f(this.y.n(0,"bendMatCount"),"$isI")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.q(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(l,"$isaj"))}}y=a1.a
if(y!==C.c){this.r2=H.h(this.y.n(0,"emissionClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.rx=H.h(this.y.n(0,"emissionTxt"),"$isab")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isI")
break
case C.f:this.ry=H.h(this.y.n(0,"emissionTxt"),"$isat")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isI")
break}}y=a1.b
if(y!==C.c){this.x2=H.h(this.y.n(0,"ambientClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.y1=H.h(this.y.n(0,"ambientTxt"),"$isab")
this.aA=H.h(this.y.n(0,"nullAmbientTxt"),"$isI")
break
case C.f:this.y2=H.h(this.y.n(0,"ambientTxt"),"$isat")
this.aA=H.h(this.y.n(0,"nullAmbientTxt"),"$isI")
break}}y=a1.c
if(y!==C.c){this.au=H.h(this.y.n(0,"diffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.by=H.h(this.y.n(0,"diffuseTxt"),"$isab")
this.bz=H.h(this.y.n(0,"nullDiffuseTxt"),"$isI")
break
case C.f:this.dK=H.h(this.y.n(0,"diffuseTxt"),"$isat")
this.bz=H.h(this.y.n(0,"nullDiffuseTxt"),"$isI")
break}}y=a1.d
if(y!==C.c){this.bA=H.h(this.y.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dL=H.h(this.y.n(0,"invDiffuseTxt"),"$isab")
this.bB=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isI")
break
case C.f:this.dM=H.h(this.y.n(0,"invDiffuseTxt"),"$isat")
this.bB=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a1.e
if(y!==C.c){this.bE=H.h(this.y.n(0,"shininess"),"$isS")
this.bC=H.h(this.y.n(0,"specularClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dN=H.h(this.y.n(0,"specularTxt"),"$isab")
this.bD=H.h(this.y.n(0,"nullSpecularTxt"),"$isI")
break
case C.f:this.dO=H.h(this.y.n(0,"specularTxt"),"$isat")
this.bD=H.h(this.y.n(0,"nullSpecularTxt"),"$isI")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.e:this.dP=H.h(this.y.n(0,"bumpTxt"),"$isab")
this.bF=H.h(this.y.n(0,"nullBumpTxt"),"$isI")
break
case C.f:this.dQ=H.h(this.y.n(0,"bumpTxt"),"$isat")
this.bF=H.h(this.y.n(0,"nullBumpTxt"),"$isI")
break}if(a1.dy){this.dR=H.h(this.y.n(0,"envSampler"),"$isat")
this.dS=H.h(this.y.n(0,"nullEnvTxt"),"$isI")
y=a1.r
if(y!==C.c){this.bG=H.h(this.y.n(0,"reflectClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dT=H.h(this.y.n(0,"reflectTxt"),"$isab")
this.bH=H.h(this.y.n(0,"nullReflectTxt"),"$isI")
break
case C.f:this.dU=H.h(this.y.n(0,"reflectTxt"),"$isat")
this.bH=H.h(this.y.n(0,"nullReflectTxt"),"$isI")
break}}y=a1.x
if(y!==C.c){this.bI=H.h(this.y.n(0,"refraction"),"$isS")
this.bJ=H.h(this.y.n(0,"refractClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dV=H.h(this.y.n(0,"refractTxt"),"$isab")
this.bK=H.h(this.y.n(0,"nullRefractTxt"),"$isI")
break
case C.f:this.dW=H.h(this.y.n(0,"refractTxt"),"$isat")
this.bK=H.h(this.y.n(0,"nullRefractTxt"),"$isI")
break}}}y=a1.y
if(y!==C.c){this.bL=H.h(this.y.n(0,"alpha"),"$isS")
switch(y){case C.c:break
case C.i:break
case C.e:this.dX=H.h(this.y.n(0,"alphaTxt"),"$isab")
this.bM=H.h(this.y.n(0,"nullAlphaTxt"),"$isI")
break
case C.f:this.dY=H.h(this.y.n(0,"alphaTxt"),"$isat")
this.bM=H.h(this.y.n(0,"nullAlphaTxt"),"$isI")
break}}this.cv=H.c([],[A.fj])
this.cw=H.c([],[A.fk])
this.cz=H.c([],[A.fl])
this.cA=H.c([],[A.fm])
this.cB=H.c([],[A.fn])
this.cC=H.c([],[A.fo])
if(a1.k2){y=a1.z
if(y>0){this.dZ=H.f(this.y.n(0,"dirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.cv;(x&&C.a).h(x,new A.fj(m,l,k))}}y=a1.Q
if(y>0){this.e_=H.f(this.y.n(0,"pntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isS")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isS")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isS")
x=this.cw;(x&&C.a).h(x,new A.fk(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e0=H.f(this.y.n(0,"spotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isS")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isS")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isS")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isS")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isS")
x=this.cz;(x&&C.a).h(x,new A.fl(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e1=H.f(this.y.n(0,"txtDirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isJ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isI")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isab")
x=this.cA;(x&&C.a).h(x,new A.fm(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e2=H.f(this.y.n(0,"txtPntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$iscD")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isI")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isS")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isS")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isS")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isat")
x=this.cB;(x&&C.a).h(x,new A.fn(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e3=H.f(this.y.n(0,"txtSpotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isJ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isJ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isI")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isJ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isS")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isS")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isS")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isS")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isS")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isab")
x=this.cC;(x&&C.a).h(x,new A.fo(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.cU(c)
b.a.uniform1i(b.d,0)}},
al:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
iN:function(a,b){var z,y
z=a.au
y=new A.eE(b,z)
y.bk(b,z)
y.eQ(a,b)
return y}}},iR:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aA,au,by",
hh:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
ho:function(a){var z
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
hi:function(a){var z
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
hw:function(a){var z,y
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
hx:function(a){var z,y
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
hq:function(a){var z
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
hB:function(a){var z
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
aG:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aE(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hl:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aG(a,z,"emission")
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
hg:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aG(a,z,"ambient")
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
hj:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"diffuse")
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
hm:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"invDiffuse")
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
hu:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aG(a,z,"specular")
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
hp:function(a){var z,y
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
hs:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aG(a,z,"reflect")
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
ht:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aG(a,z,"refract")
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
hk:function(a){var z,y
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
hr:function(a){var z,y
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
hv:function(a){var z,y
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
hy:function(a){var z,y,x
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
hz:function(a){var z,y,x
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
hA:function(a){var z,y,x
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
hn:function(a){var z
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
j:function(a){return this.au}},fj:{"^":"b;a,b,c"},fm:{"^":"b;a,b,c,d,e,f,r,x"},fk:{"^":"b;a,b,c,d,e,f,r"},fn:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fl:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fo:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cd:{"^":"cY;",
bk:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bN:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.da(b,35633)
this.f=this.da(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.h4(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.q(P.t("Failed to link shader: "+H.k(x)))}this.h7()
this.h9()},
V:function(a){a.a.useProgram(this.r)
this.x.hR()},
da:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.h4(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
h7:function(){var z,y,x,w,v,u
z=H.c([],[A.dV])
y=this.a
x=H.E(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dV(y,v.name,u))}this.x=new A.hu(z)},
h9:function(){var z,y,x,w,v,u
z=H.c([],[A.ah])
y=this.a
x=H.E(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hO(v.type,v.size,v.name,u))}this.y=new A.k9(z)},
aR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.I(z,y,b,c)
else return A.dt(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ab(z,y,b,c)
else return A.dt(z,y,b,a,c)},
fb:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.dt(z,y,b,a,c)},
bq:function(a,b){return new P.fy(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hO:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.bO(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.fi(this.a,this.r,c,d)
case 35667:return new A.k6(this.a,this.r,c,d)
case 35668:return new A.k7(this.a,this.r,c,d)
case 35669:return new A.k8(this.a,this.r,c,d)
case 35674:return new A.kb(this.a,this.r,c,d)
case 35675:return new A.cD(this.a,this.r,c,d)
case 35676:return new A.aj(this.a,this.r,c,d)
case 35678:return this.fa(b,c,d)
case 35680:return this.fb(b,c,d)
case 35670:throw H.a(this.bq("BOOL",c))
case 35671:throw H.a(this.bq("BOOL_VEC2",c))
case 35672:throw H.a(this.bq("BOOL_VEC3",c))
case 35673:throw H.a(this.bq("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cp:{"^":"b;a,b",
j:function(a){return this.b}},eZ:{"^":"cd;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
eU:function(a,b){var z,y,x,w,v
this.bN(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.jP(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.h(this.y.n(0,"txtCount"),"$isI")
this.ch=H.h(this.y.n(0,"backClr"),"$isfi")
this.cx=H.c([],[A.ab])
this.cy=H.c([],[A.aj])
z=[A.bO]
this.db=H.c([],z)
this.dx=H.c([],z)
this.dy=H.c([],z)
this.fr=H.c([],z)
this.fx=H.c([],[A.I])
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isab"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isaj"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isbO"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isbO"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isbO"))
z=this.fr
x=this.y
w="destSize"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isbO"))
z=this.fx
x=this.y
w="flip"+y
v=x.i(0,w)
if(v==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.h(v,"$isI"))}},
q:{
jP:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
jO:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.eZ(b,z)
y.bk(b,z)
y.eU(a,b)
return y}}},ah:{"^":"b;"},k9:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.N()},
hX:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].j(0)+a
return x},
N:function(){return this.hX("\n")}},I:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},k6:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},k7:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},k8:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},k5:{"^":"ah;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
dt:function(a,b,c,d,e){var z=new A.k5(a,b,c,e)
z.f=d
z.e=P.iE(d,0,!1,P.m)
return z}}},S:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},bO:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},J:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},fi:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},kb:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cD:{"^":"ah;a,b,c,d",
ab:function(a){var z=new Float32Array(H.b5(H.v(a,"$ise",[P.r],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},aj:{"^":"ah;a,b,c,d",
ab:function(a){var z=new Float32Array(H.b5(H.v(a,"$ise",[P.r],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},ab:{"^":"ah;a,b,c,d",
cU:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},at:{"^":"ah;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
hg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
z=F.dm()
y=z.a
x=-d*0.5
w=-b*0.5
v=new V.O(-1,-1,1)
v=v.B(0,Math.sqrt(v.G(v)))
u=y.br(new V.bh(1,2,4,6),new V.aB(1,0,0,1),new V.a6(x,w,e),new V.V(0,1),v,c)
y=z.a
v=d*0.5
t=new V.O(1,-1,1)
t=t.B(0,Math.sqrt(t.G(t)))
s=y.br(new V.bh(0,3,4,6),new V.aB(0,0,1,1),new V.a6(v,w,e),new V.V(1,1),t,c)
y=z.a
w=b*0.5
t=new V.O(1,1,1)
t=t.B(0,Math.sqrt(t.G(t)))
r=y.br(new V.bh(0,2,5,6),new V.aB(0,1,0,1),new V.a6(v,w,e),new V.V(1,0),t,c)
y=z.a
v=new V.O(-1,1,1)
v=v.B(0,Math.sqrt(v.G(v)))
q=y.br(new V.bh(0,2,4,7),new V.aB(1,1,0,1),new V.a6(x,w,e),new V.V(0,0),v,c)
z.d.hD(H.c([u,s,r,q],[F.au]))
z.aq()
return z},
cM:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bX()
return(y>0?z+4:z)*2},
bV:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.au,P.r,P.r]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.O(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.O(t+h,s+f,r+g)
z.b=q
p=new V.O(t-h,s-f,r-g)
z.c=p
o=new V.O(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cM(y)
k=F.cM(z.b)
j=F.hj(d,e,new F.mv(z,F.cM(z.c),F.cM(z.d),k,l,c),b)
if(j!=null)a.cI(j)},
nm:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nn()
z=new F.no(z,c)
y=F.dm()
F.bV(y,null,z,d,a,1,0,0,1)
F.bV(y,null,z,d,a,0,1,0,3)
F.bV(y,null,z,d,a,0,0,1,2)
F.bV(y,null,z,d,a,-1,0,0,0)
F.bV(y,null,z,d,a,0,-1,0,0)
F.bV(y,null,z,d,a,0,0,-1,3)
y.aq()
y.i8(new F.kD(),new F.j0())
return y},
mX:function(a,b,c){var z={}
z.a=b
z.a=new F.mY()
return F.hj(c,a,new F.mZ(z),null)},
hj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.au,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.dm()
y=H.c([],[F.au])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cG(null,null,new V.aB(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cu(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cG(null,null,new V.aB(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cu(d))}}z.d.hE(a+1,b+1,y)
return z},
mv:{"^":"p:14;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cG(z.b,b).cG(z.d.cG(z.c,b),c)
a.sa8(0,new V.a6(y.a,y.b,y.c))
a.seu(y.B(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdD(new V.bh(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
this.f.$3(a,b,c)}},
nn:{"^":"p:16;",
$2:function(a,b){return 0}},
no:{"^":"p:14;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.O(y.a,y.b,y.c)
z=x.B(0,Math.sqrt(x.G(x))).k(0,this.b+z)
a.sa8(0,new V.a6(z.a,z.b,z.c))}},
mY:{"^":"p:16;",
$2:function(a,b){return 0}},
mZ:{"^":"p:14;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa8(0,new V.a6(z,y,this.a.a.$2(b,c)))
x=new V.O(z,y,1)
a.seu(x.B(0,Math.sqrt(x.G(x))))
x=1-b
w=1-c
a.sdD(new V.bh(b*c,2+x*c,4+b*w,6+x*w))}},
aq:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gb5()){C.a.F(this.a.a.d.b,this)
this.a.a.Z()}this.cd()
this.ce()
this.fW()},
cj:function(a){this.a=a
C.a.h(a.d.b,this)},
ck:function(a){this.b=a
C.a.h(a.d.c,this)},
h6:function(a){this.c=a
C.a.h(a.d.d,this)},
cd:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
ce:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
fW:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f4:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.O(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.ee())return
return v.B(0,Math.sqrt(v.G(v)))},
f7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.O(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.G(z)))
z=w.L(0,y)
z=new V.O(z.a,z.b,z.c)
z=v.b4(z.B(0,Math.sqrt(z.G(z))))
return z.B(0,Math.sqrt(z.G(z)))},
cq:function(){if(this.d!=null)return!0
var z=this.f4()
if(z==null){z=this.f7()
if(z==null)return!1}this.d=z
this.a.a.Z()
return!0},
f3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.O(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.ee())return
return v.B(0,Math.sqrt(v.G(v)))},
f6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.L(0,u)
z=new V.O(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.L(0,u)
y=z.c
if(typeof y!=="number")return y.k()
y=new V.a6(z.a*l,z.b*l,y*l).A(0,u).L(0,x)
y=new V.O(y.a,y.b,y.c)
m=y.B(0,Math.sqrt(y.G(y)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.G(z)))
z=k.b4(m)
z=z.B(0,Math.sqrt(z.G(z))).b4(k)
m=z.B(0,Math.sqrt(z.G(z)))}return m},
co:function(){if(this.e!=null)return!0
var z=this.f3()
if(z==null){z=this.f6()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
ghK:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
D:function(a){var z,y
if(this.gb5())return a+"disposed"
z=a+C.b.ao(J.ae(this.a.e),0)+", "+C.b.ao(J.ae(this.b.e),0)+", "+C.b.ao(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
N:function(){return this.D("")},
q:{
bD:function(a,b,c){var z,y,x
z=new F.aq()
y=a.a
if(y==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.t("May not create a face with vertices attached to different shapes."))
z.cj(a)
z.ck(b)
z.h6(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
i8:{"^":"b;"},
jD:{"^":"i8;",
b8:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
db:{"^":"b;0a,0b",
aJ:function(){if(!this.gb5()){C.a.F(this.a.a.c.b,this)
this.a.a.Z()}this.cd()
this.ce()},
cj:function(a){this.a=a
C.a.h(a.c.b,this)},
ck:function(a){this.b=a
C.a.h(a.c.c,this)},
cd:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
ce:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
D:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ao(J.ae(this.a.e),0)+", "+C.b.ao(J.ae(this.b.e),0)},
N:function(){return this.D("")},
q:{
iu:function(a,b){var z,y,x
z=new F.db()
y=a.a
if(y==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.t("May not create a line with vertices attached to different shapes."))
z.cj(a)
z.ck(b)
C.a.h(z.a.a.c.b,z)
z.a.a.Z()
return z}}},
iv:{"^":"b;"},
k4:{"^":"iv;",
b8:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dk:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.Z()}this.fV()},
fV:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ao(J.ae(z.e),0)},
N:function(){return this.D("")}},
eS:{"^":"b;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
cI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hM())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dk()
if(r.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iu(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bD(p,o,m)}z=this.e
if(!(z==null))z.ad(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.ad(0)
return y},
hG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
w=v.y
u=C.h.b6(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.L()
s=C.h.b6(w*(t-1))
w=a.b
u=u>=0?C.d.av(u,w):w+C.d.av(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.o(t)
s=C.d.av(s,t)}else{if(typeof t!=="number")return H.o(t)
s=t+C.d.av(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.d(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.d(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.d(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.d(z,p)
p=z[p]/255
if(w<0)w=0
else if(w>1)w=1
if(t<0)t=0
else if(t>1)t=1
if(q<0)q=0
else if(q>1)q=1
if(!(p<0))if(p>1)p=1
o=(w+t+q)*b/3
w=v.f
t=v.r
q=t.a
p=t.b
t=t.c
if(typeof t!=="number")return t.k()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.A()
t=new V.a6(n+q*o,m+p*o,l+t*o)
if(!J.L(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}z=this.e
if(!(z==null))z.ad(0)},
iO:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.d(w,y)
v=w[y]
if((x&$.$get$ac().a)===0)v.f=null
if((x&$.$get$aF().a)===0)v.r=null
if((x&$.$get$aN().a)===0)v.x=null
if((x&$.$get$aw().a)===0)v.y=null
if((x&$.$get$aO().a)===0)v.z=null
if((x&$.$get$dy().a)===0)v.Q=null
if((x&$.$get$b4().a)===0)v.ch=0
if((x&$.$get$aM().a)===0)v.cx=null}z=this.e
if(!(z==null))z.ad(0)},
iN:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.d(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.ad(0)},
iM:function(a){return this.iN(!0,a)},
i8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.w(z,0)])
for(z=[F.au];y.length!==0;){x=C.a.ghU(y)
C.a.iw(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.b8(0,x,t)){C.a.h(w,t)
C.a.F(y,t)}}if(w.length>1)b.cI(w)}}this.a.v()
this.c.cO()
this.d.cO()
this.b.ix()
this.c.cP(new F.k4())
this.d.cP(new F.jD())
z=this.e
if(!(z==null))z.ad(0)},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ac()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bQ().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcV(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e0])
for(r=0,q=0;q<w;++q){p=b.hH(q)
o=p.gcV(p)
C.a.m(s,q,new Z.e0(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].i4(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b5(t)),35044)
y.bindBuffer(34962,null)
i=new Z.c3(new Z.fv(34962,j),s,b)
i.b=H.c([],[Z.cs])
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cs(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cs(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cs(4,h.length,f))}return i},
j:function(a){var z=H.c([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.E(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.w(a)},
Z:function(){return this.af(null)},
q:{
dm:function(){var z,y
z=new F.eS()
y=new F.ky(z)
y.b=!1
y.c=H.c([],[F.au])
z.a=y
y=new F.jy(z)
y.b=H.c([],[F.dk])
z.b=y
y=new F.jx(z)
y.b=H.c([],[F.db])
z.c=y
y=new F.jw(z)
y.b=H.c([],[F.aq])
z.d=y
z.e=null
return z}}},
jw:{"^":"b;a,0b",
hD:function(a){var z,y,x,w,v
H.v(a,"$ise",[F.au],"$ase")
z=H.c([],[F.aq])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bD(y,w,v))}return z},
hE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.au],"$ase")
z=H.c([],[F.aq])
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
C.a.h(z,F.bD(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bD(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bD(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bD(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cP:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b8(0,v,t)){v.aJ()
break}}}}},
cO:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghK(x)
if(y)x.aJ()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cq())x=!1
return x},
cp:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].co())x=!1
return x},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}},
jx:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cP:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b8(0,v,t)){v.aJ()
break}}}}},
cO:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.L(x.a,x.b)
if(y)x.aJ()}},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.E(z,"\n")},
N:function(){return this.D("")}},
jy:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ix:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}},
au:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cu:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
hM:function(){return this.cu(null)},
sa8:function(a,b){var z
if(!J.L(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Z()}},
sia:function(a){var z
a=a.B(0,Math.sqrt(a.G(a)))
if(!J.L(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Z()}},
seu:function(a){var z
if(!J.L(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
sdD:function(a){var z
if(!J.L(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Z()}},
i4:function(a){var z,y
z=J.P(a)
if(z.u(a,$.$get$ac())){z=this.f
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aF())){z=this.r
y=[P.r]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.x
y=[P.r]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aw())){z=this.y
y=[P.r]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aO())){z=this.z
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bP())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bQ())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b4()))return H.c([this.ch],[P.r])
else if(z.u(a,$.$get$aM())){z=this.cx
y=[P.r]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.r])},
cq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.O(0,0,0)
this.d.K(0,new F.kI(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
co:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.O(0,0,0)
this.d.K(0,new F.kH(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.j])
C.a.h(z,C.b.ao(J.ae(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
N:function(){return this.D("")},
q:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.au()
y=new F.kG(z)
y.b=H.c([],[F.dk])
z.b=y
y=new F.kC(z)
x=[F.db]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kz(z)
x=[F.aq]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$dx()
z.e=0
y=$.$get$ac()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aF().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aw().a)!==0?f:null
z.z=(x&$.$get$aO().a)!==0?g:null
z.Q=(x&$.$get$dy().a)!==0?c:null
z.ch=(x&$.$get$b4().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kI:{"^":"p:11;a",
$1:function(a){var z,y
H.f(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
kH:{"^":"p:11;a",
$1:function(a){var z,y
H.f(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
ky:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Z()
return!0},
hF:function(a,b,c,d,e,f,g,h,i){var z=F.cG(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
br:function(a,b,c,d,e,f){return this.hF(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cq()
return!0},
cp:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].co()
return!0},
hJ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.L(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
this.v()
z=H.c([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}},
kz:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aq]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kA(this,b))
C.a.K(this.d,new F.kB(this,b))},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}},
kA:{"^":"p:11;a,b",
$1:function(a){H.f(a,"$isaq")
if(!J.L(a.a,this.a))this.b.$1(a)}},
kB:{"^":"p:11;a,b",
$1:function(a){var z
H.f(a,"$isaq")
z=this.a
if(!J.L(a.a,z)&&!J.L(a.b,z))this.b.$1(a)}},
kC:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}},
kE:{"^":"b;"},
kD:{"^":"kE;",
b8:function(a,b,c){return J.L(b.f,c.f)}},
kF:{"^":"b;"},
j0:{"^":"kF;",
cI:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[F.au],"$ase")
z=new V.O(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.A()
if(typeof w!=="number")return H.o(w)
z=new V.O(z.a+v,z.b+u,t+w)}}z=z.B(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sia(z)
return}},
kG:{"^":"b;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
N:function(){return this.D("")}}}],["","",,O,{"^":"",hV:{"^":"b3;0a,0b,0c,0d,0e,0ak:f@",
gp:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
C:function(a){var z=this.f
if(!(z==null))z.w(a)},
aa:function(a,b){},
bT:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.f(a.fr.i(0,"Depth"),"$ised")
if(y==null){z=a.a
y=new A.ed(z,"Depth")
y.bk(z,"Depth")
y.bN(0,$.hX,$.hW)
y.z=y.x.i(0,"posAttr")
y.Q=H.h(y.y.i(0,"objClr"),"$isJ")
y.ch=H.h(y.y.i(0,"fogClr"),"$isJ")
y.cx=H.h(y.y.i(0,"fogStart"),"$isS")
y.cy=H.h(y.y.i(0,"fogStop"),"$isS")
y.db=H.h(y.y.i(0,"viewObjMat"),"$isaj")
y.dx=H.h(y.y.i(0,"projMat"),"$isaj")
a.bs(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.c3)){b.e=null
x=null}if(x==null){z=b.d.bu(new Z.cH(a.a),$.$get$ac())
x=z.am($.$get$ac())
w=this.a
x.e=w.z.c
b.e=z
z=w}z.V(a)
x=this.b
w=z.Q
w.toString
v=x.a
u=x.b
x=x.c
w.a.uniform3f(w.d,v,u,x)
x=this.c
u=z.ch
u.toString
v=x.a
w=x.b
x=x.c
u.a.uniform3f(u.d,v,w,x)
x=this.d
w=z.cx
w.a.uniform1f(w.d,x)
x=this.e
w=z.cy
w.a.uniform1f(w.d,x)
x=a.cy
x=x.gX(x)
w=z.dx
w.toString
w.ab(x.a3(0,!0))
x=a.geA()
z=z.db
z.toString
z.ab(x.a3(0,!0))
x=b.e
x.V(a)
x.a9(a)
x.aM(a)
x=this.a
x.toString
a.a.useProgram(null)
x.x.bx()}},ie:{"^":"b3;0a,0b,0c,0d,0e,0f,0r,0ak:x@",
gp:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
C:[function(a){var z
H.f(a,"$isz")
z=this.x
if(!(z==null))z.w(a)},function(){return this.C(null)},"aP","$1","$0","ga5",0,2,0],
sdI:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gp().F(0,this.ga5())
y=this.d
this.d=a
if(a!=null)a.gp().h(0,this.ga5())
z=new D.x("depthTexture",y,this.d,this,[T.cf])
z.b=!0
this.C(z)}},
aa:function(a,b){},
S:function(a,b){H.v(a,"$ise",[T.bL],"$ase")
if(b!=null)if(!C.a.az(a,b)){b.a=a.length
C.a.h(a,b)}},
bT:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.f(a.fr.i(0,"GaussianBlur"),"$isen")
if(z==null){y=a.a
z=new A.en(y,"GaussianBlur")
z.bk(y,"GaussianBlur")
z.bN(0,$.ih,$.ig)
z.z=z.x.i(0,"posAttr")
z.Q=z.x.i(0,"txtAttr")
z.ch=H.h(z.y.i(0,"projViewObjMat"),"$isaj")
z.cx=H.h(z.y.i(0,"txt2DMat"),"$iscD")
z.cy=H.h(z.y.i(0,"colorTxt"),"$isab")
z.db=H.h(z.y.i(0,"depthTxt"),"$isab")
z.dx=H.h(z.y.i(0,"nullColorTxt"),"$isI")
z.dy=H.h(z.y.i(0,"nullDepthTxt"),"$isI")
z.fr=H.h(z.y.i(0,"width"),"$isS")
z.fx=H.h(z.y.i(0,"height"),"$isS")
z.fy=H.h(z.y.i(0,"highOffset"),"$isS")
z.go=H.h(z.y.i(0,"lowOffset"),"$isS")
z.id=H.h(z.y.i(0,"depthLimit"),"$isS")
a.bs(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$ac()
v=$.$get$aw()
v=y.bu(new Z.cH(x),new Z.aW(w.a|v.a))
v.am($.$get$ac()).e=this.a.z.c
v.am($.$get$aw()).e=this.a.Q.c
b.e=v}u=H.c([],[T.bL])
this.S(u,this.c)
this.S(u,this.d)
for(t=0;t<u.length;++t)u[t].V(a)
y=this.a
y.V(a)
x=this.c
y.ac(y.cy,y.dx,x)
x=this.d
y.ac(y.db,y.dy,x)
x=this.b
w=y.cx
w.toString
w.ab(x.a3(0,!0))
x=a.geo()
w=y.ch
w.toString
w.ab(x.a3(0,!0))
x=a.c
w=y.fr
w.a.uniform1f(w.d,x)
x=a.d
w=y.fx
w.a.uniform1f(w.d,x)
x=this.e
w=y.fy
w.a.uniform1f(w.d,x)
x=this.f
w=y.go
w.a.uniform1f(w.d,x)
x=this.r
y=y.id
y.a.uniform1f(y.d,x)
y=b.e
if(y instanceof Z.c3){y.V(a)
y.a9(a)
y.aM(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.bx()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},iO:{"^":"b3;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ak:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
C:[function(a){var z
H.f(a,"$isz")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.C(null)},"aP","$1","$0","ga5",0,2,0],
h_:[function(a){H.f(a,"$isz")
this.a=null
this.C(a)},function(){return this.h_(null)},"js","$1","$0","gfZ",0,2,0],
j1:[function(a,b){var z=V.ar
z=new D.c7(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.C(z)},"$2","gfp",8,0,17],
j2:[function(a,b){var z=V.ar
z=new D.c8(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.C(z)},"$2","gfq",8,0,17],
d7:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a6(z.e.length+3,4)*4
x=C.d.a6(z.f.length+3,4)*4
w=C.d.a6(z.r.length+3,4)*4
v=C.d.a6(z.x.length+3,4)*4
u=C.d.a6(z.y.length+3,4)*4
t=C.d.a6(z.z.length+3,4)*4
s=C.d.a6(this.e.a.length+3,4)*4
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
a6=$.$get$ac()
if(c){z=$.$get$aF()
a6=new Z.aW(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.aW(a6.a|z.a)}if(a){z=$.$get$aw()
a6=new Z.aW(a6.a|z.a)}if(a0){z=$.$get$aO()
a6=new Z.aW(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.aW(a6.a|z.a)}return new A.iR(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.v(a,"$ise",[T.bL],"$ase")
if(b!=null)if(!C.a.az(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.w(z,0)]);z.H();){y=z.d
y.a=new V.a6(0,0,0)
x=y.b
if(x!=null){w=x.aD(0,b,y)
if(w!=null)y.a=w.b0(y.a)}}},
bT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d7()
y=H.f(a.fr.i(0,z.au),"$iseE")
if(y==null){y=A.iN(z,a.a)
a.bs(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.by
z=b.e
if(!(z instanceof Z.c3)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.aq()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cp()
u.a.cp()
u=u.e
if(!(u==null))u.ad(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hJ()
t=t.e
if(!(t==null))t.ad(0)}r=b.d.bu(new Z.cH(a.a),w)
r.am($.$get$ac()).e=this.a.Q.c
if(z)r.am($.$get$aF()).e=this.a.cx.c
if(v)r.am($.$get$aN()).e=this.a.ch.c
if(x.rx)r.am($.$get$aw()).e=this.a.cy.c
if(u)r.am($.$get$aO()).e=this.a.db.c
if(x.x1)r.am($.$get$aM()).e=this.a.dx.c
b.e=r}z=T.bL
q=H.c([],[z])
this.a.V(a)
if(x.fx){v=this.a
u=a.dx
u=u.gX(u)
v=v.dy
v.toString
v.ab(u.a3(0,!0))}if(x.fy){v=this.a
u=a.geA()
v=v.fr
v.toString
v.ab(u.a3(0,!0))}v=this.a
u=a.geo()
v=v.fy
v.toString
v.ab(u.a3(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ab(u.a3(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ab(u.a3(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ab(C.t.a3(u,!0))}if(x.aA>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.r],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.d(t,o)
t=t[o]
u.toString
H.f(t,"$isar")
u=u.r1
if(o>=u.length)return H.d(u,o)
u=u[o]
n=new Float32Array(H.b5(H.v(t.a3(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.S(q,this.f.d)
v=this.a
u=this.f.d
v.ac(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.S(q,this.f.e)
v=this.a
u=this.f.e
v.al(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.S(q,this.r.d)
v=this.a
u=this.r.d
v.ac(v.y1,v.aA,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.S(q,this.r.e)
v=this.a
u=this.r.e
v.al(v.y2,v.aA,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.au
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.S(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.by,v.bz,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.S(q,this.x.e)
v=this.a
u=this.x.e
v.al(v.dK,v.bz,u)
u=this.a
v=this.x.f
u=u.au
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.S(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.dL,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.S(q,this.y.e)
v=this.a
u=this.y.e
v.al(v.dM,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bC
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bE
u.a.uniform1f(u.d,s)
break
case C.e:this.S(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.dN,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break
case C.f:this.S(q,this.z.e)
v=this.a
u=this.z.e
v.al(v.dO,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dZ
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cv
if(l>=t.length)return H.d(t,l)
i=t[l]
t=m.ex(j.gbw(j))
s=t.a
h=t.b
g=t.c
if(typeof g!=="number")return g.k()
g=t.B(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gay(j)
h=i.c
s=g.gbS()
t=g.gbi()
g=g.gbt()
h.a.uniform3f(h.d,s,t,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e_
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cw
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.a
s=i.b
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=m.b0(j.a)
s=i.c
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.c
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.d
s=i.e
s.a.uniform1f(s.d,t)
t=j.e
s=i.f
s.a.uniform1f(s.d,t)
t=j.f
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e0
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cz
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gcL(j)
s=i.b
h=t.geC(t)
g=t.geD(t)
t=t.geF(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbw(j).jA()
g=i.c
h=t.gar(t)
s=t.gas(t)
t=t.gat()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gcL(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gay(j)
s=i.e
h=t.gbS()
g=t.gbi()
t=t.gbt()
s.a.uniform3f(s.d,h,g,t)
t=j.gjx()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjw()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gdA()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gdB()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gdC()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e1
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cA
if(l>=s.length)return H.d(s,l)
i=s[l]
s=j.gbe()
H.v(q,"$ise",t,"$ase")
if(!C.a.az(q,s)){s.sbm(q.length)
C.a.h(q,s)}s=j.gbw(j)
h=i.d
g=s.gar(s)
f=s.gas(s)
s=s.gat()
h.a.uniform3f(h.d,g,f,s)
s=j.giP()
f=i.b
g=s.gar(s)
h=s.gas(s)
s=s.gat()
f.a.uniform3f(f.d,g,h,s)
s=j.gbd(j)
h=i.c
g=s.gar(s)
f=s.gas(s)
s=s.gat()
h.a.uniform3f(h.d,g,f,s)
s=m.ex(j.gbw(j))
f=s.a
g=s.b
h=s.c
if(typeof h!=="number")return h.k()
h=s.B(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gay(j)
g=i.f
f=h.gbS()
s=h.gbi()
h=h.gbt()
g.a.uniform3f(g.d,f,s,h)
h=j.gbe()
s=h.gcH(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gfg()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gbm())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e2
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.y,u=v.length,t=[P.r],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cB
if(l>=h.length)return H.d(h,l)
i=h[l]
h=j.gbe()
H.v(q,"$ise",s,"$ase")
if(!C.a.az(q,h)){h.sbm(q.length)
C.a.h(q,h)}e=m.k(0,j.gX(j))
h=j.gX(j).b0(new V.a6(0,0,0))
g=i.b
f=h.geC(h)
d=h.geD(h)
h=h.geF(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b0(new V.a6(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ed(0)
d=i.d
n=new Float32Array(H.b5(H.v(new V.de(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gay(j)
h=i.e
f=d.gbS()
g=d.gbi()
d=d.gbt()
h.a.uniform3f(h.d,f,g,d)
d=j.gbe()
h=d.gcH(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcH(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gjy(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gdA()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gdB()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gdC()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbe()
H.v(q,"$ise",z,"$ase")
if(!C.a.az(q,t)){t.sbm(q.length)
C.a.h(q,t)}t=j.gcL(j)
s=i.b
h=t.geC(t)
g=t.geD(t)
t=t.geF(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbw(j)
g=i.c
h=t.gar(t)
s=t.gas(t)
t=t.gat()
g.a.uniform3f(g.d,h,s,t)
t=j.giP()
s=i.d
h=t.gar(t)
g=t.gas(t)
t=t.gat()
s.a.uniform3f(s.d,h,g,t)
t=j.gbd(j)
g=i.e
h=t.gar(t)
s=t.gas(t)
t=t.gat()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gcL(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbe()
s=t.gcH(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gfg()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gbm())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gay(j)
s=i.y
h=t.gbS()
g=t.gbi()
t=t.gbt()
s.a.uniform3f(s.d,h,g,t)
t=j.gjH()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjI()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gdA()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gdB()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gdC()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.e:this.S(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.dP,z.bF,v)
break
case C.f:this.S(q,this.Q.e)
z=this.a
v=this.Q.e
z.al(z.dQ,z.bF,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gX(v).ed(0)
a.Q=v}z=z.id
z.toString
z.ab(v.a3(0,!0))}if(x.dy){this.S(q,this.ch)
z=this.a
v=this.ch
z.al(z.dR,z.dS,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.S(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.dT,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.S(q,this.cx.e)
z=this.a
v=this.cx.e
z.al(z.dU,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bJ
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bI
v.a.uniform1f(v.d,t)
break
case C.e:this.S(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dV,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break
case C.f:this.S(q,this.cy.e)
z=this.a
v=this.cy.e
z.al(z.dW,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bL
z.a.uniform1f(z.d,u)
break
case C.e:this.S(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dX,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break
case C.f:this.S(q,this.db.e)
z=this.a
u=this.db.e
z.al(z.dY,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].V(a)
z=b.e
z.V(a)
z.a9(a)
z.aM(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.bx()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.d7().au},
q:{
eF:function(){var z,y,x
z=new O.iO()
y=O.co(V.ar)
z.e=y
y.aN(z.gfp(),z.gfq())
y=new O.be(z,"emission")
y.c=C.c
y.f=new V.X(0,0,0)
z.f=y
y=new O.be(z,"ambient")
y.c=C.c
y.f=new V.X(0,0,0)
z.r=y
y=new O.be(z,"diffuse")
y.c=C.c
y.f=new V.X(0,0,0)
z.x=y
y=new O.be(z,"invDiffuse")
y.c=C.c
y.f=new V.X(0,0,0)
z.y=y
y=new O.iT(z,"specular")
y.c=C.c
y.f=new V.X(0,0,0)
y.ch=100
z.z=y
y=new O.iQ(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.be(z,"reflect")
y.c=C.c
y.f=new V.X(0,0,0)
z.cx=y
y=new O.iS(z,"refract")
y.c=C.c
y.f=new V.X(0,0,0)
y.ch=1
z.cy=y
y=new O.iP(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.it()
y.bj(D.a2)
y.e=H.c([],[D.hZ])
y.f=H.c([],[D.cw])
y.r=H.c([],[D.jE])
y.x=H.c([],[D.jT])
y.y=H.c([],[D.jU])
y.z=H.c([],[D.jV])
y.Q=null
y.ch=null
y.cT(y.gfo(),y.gfM(),y.gfO())
z.dx=y
x=y.Q
if(x==null){x=D.F()
y.Q=x
y=x}else y=x
y.h(0,z.gfZ())
y=z.dx
x=y.ch
if(x==null){x=D.F()
y.ch=x
y=x}else y=x
y.h(0,z.ga5())
z.dy=null
return z}}},iP:{"^":"dd;0f,a,b,0c,0d,0e",
h2:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.x(this.b,y,a,this,[P.r])
z.b=!0
this.a.C(z)}},
aT:function(){this.cX()
this.h2(1)}},dd:{"^":"b;",
C:[function(a){this.a.C(H.f(a,"$isz"))},function(){return this.C(null)},"aP","$1","$0","ga5",0,2,0],
aT:["cX",function(){}],
h4:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gp().F(0,this.ga5())
y=this.d
this.d=a
if(a!=null)a.gp().h(0,this.ga5())
z=new D.x(this.b+".texture2D",y,this.d,this,[T.cf])
z.b=!0
this.a.C(z)}},
h5:function(a){},
sbU:function(a){var z
if(a==null){if(this.c===C.e){this.c=C.i
z=this.a
z.a=null
z.C(null)}}else{z=this.c
if(z!==C.e){if(z===C.c)this.aT()
this.c=C.e
this.h5(null)
z=this.a
z.a=null
z.C(null)}}this.h4(a)}},iQ:{"^":"dd;a,b,0c,0d,0e"},be:{"^":"dd;0f,a,b,0c,0d,0e",
dm:function(a){var z,y
if(!J.L(this.f,a)){z=this.f
this.f=a
y=new D.x(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.C(y)}},
aT:["c0",function(){this.cX()
this.dm(new V.X(1,1,1))}],
say:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aT()
z=this.a
z.a=null
z.C(null)}this.dm(b)}},iS:{"^":"be;0ch,0f,a,b,0c,0d,0e",
h3:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.C(z)}},
aT:function(){this.c0()
this.h3(1)}},iT:{"^":"be;0ch,0f,a,b,0c,0d,0e",
cf:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.C(z)}},
aT:function(){this.c0()
this.cf(100)}},b3:{"^":"b;"},jN:{"^":"b3;0a,0b,0c,0d,0ak:e@",
gp:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
C:[function(a){var z
H.f(a,"$isz")
z=this.e
if(!(z==null))z.w(a)},function(){return this.C(null)},"aP","$1","$0","ga5",0,2,0],
j9:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[O.bM],"$asi")
for(z=b.length,y=this.ga5(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gak()==null){t=new D.aT()
t.d=0
u.sak(t)}t=u.gak()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.aP()},"$2","gfA",8,0,22],
ja:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[O.bM],"$asi")
for(z=b.length,y=this.ga5(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.gak()==null){v=new D.aT()
v.d=0
w.sak(v)}w.gak().F(0,y)}}this.aP()},"$2","gfB",8,0,22],
aa:function(a,b){},
bT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.d.a6(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.f(a.fr.i(0,y),"$iseZ")
if(x==null){x=A.jO(z,a.a)
a.bs(x)}this.b=x
y=x}if(b.e==null){y=b.d.bu(new Z.cH(a.a),$.$get$ac())
w=y.am($.$get$ac())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.V(a)
y=T.bL
u=H.c([],[y])
for(w=[P.r],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.v(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.az(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.d(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.d(v,t)
v=v[t]
n=new Float32Array(H.b5(H.v((q==null?new V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).a3(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.b2(0,0,1,1)
q=v.db
if(t>=q.length)return H.d(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.d(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.b2(0,0,1,1)
q=v.dy
if(t>=q.length)return H.d(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.d(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.d(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.Q
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].V(a)
y=b.e
if(y instanceof Z.c3){y.V(a)
y.a9(a)
y.aM(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.x.bx()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bM:{"^":"b;0a,0b,0c,0d,0e,0ak:f@",
gp:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
C:[function(a){var z
H.f(a,"$isz")
z=this.f
if(!(z==null))z.w(a)},function(){return this.C(null)},"aP","$1","$0","ga5",0,2,0],
q:{
f_:function(a,b,c,d,e){var z,y,x,w,v
z=new O.bM()
y=z.a
z.a=e
e.gp().h(0,z.ga5())
x=new D.x("texture",y,z.a,z,[T.cf])
x.b=!0
z.C(x)
w=V.b0()
if(!J.L(z.b,w)){y=z.b
z.b=w
x=new D.x("colorMatrix",y,w,z,[V.ar])
x.b=!0
z.C(x)}v=V.b2(0,0,1,1)
if(!J.L(z.c,v)){y=z.c
z.c=v
x=new D.x("source",y,v,z,[V.cA])
x.b=!0
z.C(x)}if(!J.L(z.d,b)){y=z.d
z.d=b
x=new D.x("destination",y,b,z,[V.cA])
x.b=!0
z.C(x)}if(z.e!==!1){z.e=!1
x=new D.x("flip",!0,!1,z,[P.a3])
x.b=!0
z.C(x)}z.f=null
return z}}}}],["","",,T,{"^":"",bL:{"^":"cY;"},cf:{"^":"bL;"},jM:{"^":"cf;0a,0b,0c,0d,0e,0f,0r,0x,0y",
dn:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.dJ()}},
gp:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
V:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
q:{
dq:function(a,b){var z=new T.jM()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},jQ:{"^":"b;a,0b,0c,0d,0e",
i6:function(a,b,c,d,e){var z,y,x,w
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
w=T.dq(0,y)
z=W.af
W.a0(x,"load",H.l(new T.jR(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bO:function(a){return this.i6(a,!1,!1,!1,!1)},
h0:function(a,b,c){var z,y,x,w
b=V.c0(b,2)
z=V.c0(a.width,2)
y=V.c0(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d2(null,null)
x.width=z
x.height=y
w=H.f(C.l.eH(x,"2d"),"$ise2")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mQ(w.getImageData(0,0,x.width,x.height))}}},jR:{"^":"p:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h0(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.A.iG(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.dn();++x.e}},jS:{"^":"b;a,b,c"}}],["","",,V,{"^":"",ht:{"^":"b;",
b7:function(a,b){return!0},
j:function(a){return"all"},
$isca:1},ca:{"^":"b;"},eD:{"^":"b;",
b7:["eO",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b7(0,b))return!0
return!1}],
j:["cW",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isca:1},bI:{"^":"eD;0a",
b7:function(a,b){return!this.eO(0,b)},
j:function(a){return"!["+this.cW(0)+"]"}},ju:{"^":"b;0a",
eS:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.m,P.a3])
for(y=new H.eB(a,a.gl(a),0,[H.ax(a,"y",0)]);y.H();)z.m(0,y.d,!0)
this.a=z},
b7:function(a,b){return this.a.bv(0,b)},
j:function(a){var z=this.a
return P.ce(z.gaB(z),0,null)},
$isca:1,
q:{
aa:function(a){var z=new V.ju()
z.eS(a)
return z}}},eU:{"^":"b;a,b,0c,0d",
gi9:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.f6(this.a.O(0,b))
w.a=H.c([],[V.ca])
w.c=!1
C.a.h(this.c,w)
return w},
hT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b7(0,a))return w}return},
j:function(a){return this.b}},f3:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hi(this.b,"\n","\\n")
y=H.hi(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f4:{"^":"b;a,b,0c",
j:function(a){return this.b}},k_:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eU(this,b)
z.c=H.c([],[V.f6])
this.a.m(0,b,z)}return z},
bg:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.f4(this,a)
y=P.j
z.c=new H.b_(0,0,[y,y])
this.b.m(0,a,z)}return z},
iL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.f3])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.hT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ce(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.gi9(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ce(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.f3(o==null?p.b:o,q,t)}++t}}}},f6:{"^":"eD;b,0c,0a",
j:function(a){return this.b.b+": "+this.cW(0)}}}],["","",,X,{"^":"",hx:{"^":"cB;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gp:function(){var z=this.fr
if(z==null){z=D.F()
this.fr=z}return z},
aw:function(a){var z=this.fr
if(!(z==null))z.w(a)},
sah:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.x("width",z,b,this,[P.m])
z.b=!0
this.aw(z)}},
sae:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.x("height",z,b,this,[P.m])
z.b=!0
this.aw(z)}},
V:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sah(0,C.h.a_(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.k()
this.sae(0,C.h.a_(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.E(z.getParameter(3379))
u=V.c0(x,2)
t=V.c0(w,2)
v=V.c0(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.A.es(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.dq(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.dn()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.dJ()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.Q=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.z,0)
z.framebufferRenderbuffer(36160,36096,36161,this.Q)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.y)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dy
y=z.c
a.c=C.h.a_(y*this.a)
x=z.d
a.d=C.h.a_(x*this.b)
w=this.c
if(typeof w!=="number")return H.o(w)
q=C.h.a_(z.a*w)
p=this.d
if(typeof p!=="number")return H.o(p)
o=C.h.a_(z.b*p)
n=C.h.a_(y*w)
m=C.h.a_(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)},
aM:function(a){a.a.bindFramebuffer(36160,null)},
q:{
dX:function(a,b,c,d,e,f){var z=new X.hx()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.dq(0,null)
z.cx=new V.aB(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.b2(0,0,1,1)
z.sah(0,a)
z.sae(0,b)
return z}}},cn:{"^":"b;",$isaJ:1},id:{"^":"cB;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
V:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.h.a_(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.h.a_(w.b*x)
t=C.h.a_(w.c*y)
a.c=t
w=C.h.a_(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
aM:function(a){},
q:{
d4:function(a,b,c,d,e,f,g){var z,y
z=new X.id()
y=new V.aB(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.b2(0,0,1,1)
z.r=y
return z}}},ii:{"^":"b;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
$isaJ:1,
$iscn:1},j3:{"^":"b;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
aw:[function(a){var z
H.f(a,"$isz")
z=this.f
if(!(z==null))z.w(a)},function(){return this.aw(null)},"iT","$1","$0","gd_",0,2,0],
sb9:function(a){var z,y
if(!J.L(this.b,a)){z=this.b
if(z!=null)z.gp().F(0,this.gd_())
y=this.b
this.b=a
if(a!=null)a.gp().h(0,this.gd_())
z=new D.x("mover",y,this.b,this,[U.ag])
z.b=!0
this.aw(z)}},
$isaJ:1,
$iscn:1,
q:{
eN:function(a,b,c,d,e){var z,y,x
z=new X.j3()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.sb9(c)
y=z.c
if(!$.n.$2(y,b)){x=z.c
z.c=b
y=new D.x("fov",x,b,z,[P.r])
y.b=!0
z.aw(y)}y=z.d
if(!$.n.$2(y,d)){x=z.d
z.d=d
y=new D.x("near",x,d,z,[P.r])
y.b=!0
z.aw(y)}y=z.e
if(!$.n.$2(y,a)){x=z.e
z.e=a
y=new D.x("far",x,a,z,[P.r])
y.b=!0
z.aw(y)}return z}}},cB:{"^":"b;"}}],["","",,V,{"^":"",
nk:function(a){P.jZ(C.H,new V.nl(a))},
hD:{"^":"b;a,b,0c,0d",
aW:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.l(c,{func:1,ret:-1,args:[P.a3]})
if(this.c==null)return
z=this.d.length
y=P.dv().gbR().i(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.d(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.dT(this.c).h(0,u)
s=W.ik("checkbox")
s.checked=x
t=W.af
W.a0(s,"change",H.l(new V.hE(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.dT(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.du(z,x)},
du:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.dv().gbR().i(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.il(y,a-x+1,"0")
w=a>0?C.b.t(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.aE(y,x)
v=P.dv()
x=P.j
u=P.iB(v.gbR(),x,x)
u.m(0,z,w)
t=v.ep(0,u)
z=window.history
x=t.j(0)
z.toString
z.replaceState(new P.lM([],[]).cS(""),"",x)}},
hE:{"^":"p:15;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.du(this.d,z.checked)}},
nl:{"^":"p:49;a",
$1:function(a){H.f(a,"$isbp")
P.dQ(C.h.ew(this.a.ghY(),2)+" fps")}},
jz:{"^":"b;0a,0b",
eT:function(a,b){var z,y,x,w,v,u,t
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
t=W.af
W.a0(z,"scroll",H.l(new V.jC(x),{func:1,ret:-1,args:[t]}),!1,t)},
dz:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.j],"$ase")
this.h8()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iL(C.a.i2(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hh(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cL(C.T,s,C.k,!1)
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
hC:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[P.j],"$ase")
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
x=H.f(w.insertCell(-1),"$isdp").style
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
t=H.f(w.insertCell(-1),"$isdp")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
h8:function(){var z,y,x,w
if(this.b!=null)return
z=new V.k_()
y=P.j
z.a=new H.b_(0,0,[y,V.eU])
z.b=new H.b_(0,0,[y,V.f4])
z.c=z.O(0,"Start")
y=z.O(0,"Start").E(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").E(0,"Bold")
x=new V.bI()
w=[V.ca]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").E(0,"BoldEnd")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Italic")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").E(0,"Italic")
x=new V.bI()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").E(0,"ItalicEnd")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Code")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").E(0,"Code")
x=new V.bI()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").E(0,"CodeEnd")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"LinkHead")
x=V.aa(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").E(0,"LinkTail")
x=V.aa(new H.a4("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").E(0,"LinkHead")
y=new V.bI()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").E(0,"LinkTail")
y=new V.bI()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").E(0,"Other").a,new V.ht())
x=z.O(0,"Other").E(0,"Other")
y=new V.bI()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.bg("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.bg("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.bg("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.bg("Link")
x=z.O(0,"Other")
x.d=x.a.bg("Other")
this.b=z},
q:{
jA:function(a,b){var z=new V.jz()
z.eT(a,!0)
return z}}},
jC:{"^":"p:15;a",
$1:function(a){P.f1(C.q,new V.jB(this.a))}},
jB:{"^":"p:1;a",
$0:function(){var z,y,x
z=C.h.a_(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
hc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=V.jA("Test 040",!0)
x=W.d2(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.j]
y.dz(H.c(["A combination of bump mapping with height map and specular map."],w))
y.hC(H.c(["controls"],w))
y.dz(H.c(["\xab[Back to Tests|../]"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
u=E.jX(v,!0,!0,!0,!1)
t=u.f.bO("../resources/gravel/colorLarge.png")
s=u.f.bO("../resources/gravel/bumpLarge.png")
r=u.f.bO("../resources/gravel/specularSmall.png")
q=u.f.bO("../resources/gravel/heightSmall.png")
y=U.e8(V.eI(0,0,2))
p=new U.eR()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.seE(0)
p.sen(0,0)
p.seq(0)
o=p.d
if(!$.n.$2(o,0.6)){n=p.d
p.d=0.6
o=new D.x("deltaYaw",n,0.6,p,[P.r])
o.b=!0
p.M(o)}o=p.e
if(!$.n.$2(o,0.1)){n=p.e
p.e=0.1
o=new D.x("deltaPitch",n,0.1,p,[P.r])
o.b=!0
p.M(o)}o=p.f
if(!$.n.$2(o,0)){n=p.f
p.f=0
o=new D.x("deltaRoll",n,0,p,[P.r])
o.b=!0
p.M(o)}o=U.ag
m=[o]
l=U.ep(H.c([y,p],m))
k=E.d3(null,!0,null,"",F.nm(8,null,0.03,8),null)
k.sb9(l)
p=O.eF()
y=p.f
y.say(0,new V.X(1,1,1))
k.sag(p)
y=new V.X(1,1,1)
j=new D.cw()
j.c=new V.X(1,1,1)
j.d=1
j.e=0
j.f=0
j.a=new V.a6(0,0,0)
n=j.b
j.b=l
l.gp().h(0,j.geY())
p=new D.x("mover",n,j.b,j,[o])
p.b=!0
j.ap(p)
j.c=y
if(!y.u(0,y)){n=j.c
j.c=y
y=new D.x("color",n,y,j,[V.X])
y.b=!0
j.ap(y)}y=j.d
if(!$.n.$2(y,0.5)){n=j.d
j.d=0.5
y=new D.x("attenuation0",n,0.5,j,[P.r])
y.b=!0
j.ap(y)}y=j.e
if(!$.n.$2(y,0.1)){n=j.e
j.e=0.1
y=new D.x("attenuation1",n,0.1,j,[P.r])
y.b=!0
j.ap(y)}y=j.f
if(!$.n.$2(y,0)){n=j.f
j.f=0
y=new D.x("attenuation2",n,0,j,[P.r])
y.b=!0
j.ap(y)}i=F.hg(!1,2,null,2,0)
h=E.d3(null,!0,null,"",i,null)
z.a=null
q.gp().h(0,new K.n7(z,u,q))
g=X.eN(2000,1.0471975511965976,null,0.1,null)
y=u.r
p=new U.ko()
o=U.e6()
o.seB(0,!0)
o.sef(6.283185307179586)
o.seh(0)
o.sa8(0,0)
o.seg(100)
o.sa0(0)
o.sdG(0.5)
p.b=o
f=p.gbo()
o.gp().h(0,f)
o=U.e6()
o.seB(0,!0)
o.sef(6.283185307179586)
o.seh(0)
o.sa8(0,0)
o.seg(100)
o.sa0(0)
o.sdG(0.5)
p.c=o
o.gp().h(0,f)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
e=new X.aU(!1,!1,!1)
n=p.d
p.d=e
o=[X.aU]
f=new D.x("modifiers",n,e,p,o)
f.b=!0
p.M(f)
f=p.f
if(f!==!1){p.f=!1
f=new D.x("invertX",f,!1,p,[P.a3])
f.b=!0
p.M(f)}f=p.r
if(f!==!1){p.r=!1
f=new D.x("invertY",f,!1,p,[P.a3])
f.b=!0
p.M(f)}p.cl(y)
y=u.r
f=new U.kp()
f.c=0.01
f.d=0
f.e=0
e=new X.aU(!1,!1,!1)
f.b=e
o=new D.x("modifiers",null,e,f,o)
o.b=!0
f.M(o)
f.cl(y)
g.sb9(U.ep(H.c([p,f,U.e8(V.eI(0,0,5))],m)))
d=O.eF()
d.dx.h(0,j)
y=d.r
y.say(0,new V.X(0.3,0.3,0.3))
d.x.say(0,new V.X(1,1,1))
y=d.z
if(y.c===C.c){y.c=C.i
y.c0()
y.cf(100)
p=y.a
p.a=null
p.C(null)}y.cf(40)
c=X.dX(800,600,!0,1,1,!0)
y=[E.aH]
b=M.ek(null,H.c([h,k],y),null,null)
b.sag(d)
b.scr(g)
b.sb_(0,c)
a=X.dX(400,300,!0,0.5,0.5,!0)
a0=M.ek(null,H.c([h,k],y),null,null)
a0.scr(g)
a0.sb_(0,a)
y=new O.hV()
y.d=1
y.e=10
a1=new V.X(1,1,1)
y.b=a1
p=[V.X]
o=new D.x("objectColor",null,a1,y,p)
o.b=!0
y.C(o)
a1=new V.X(0,0,0)
if(!J.L(y.c,a1)){n=y.c
y.c=a1
p=new D.x("fogColor",n,a1,y,p)
p.b=!0
y.C(p)}p=y.d
if(!$.n.$2(p,1)){n=y.d
y.d=1
p=new D.x("fogStart",n,1,y,[P.r])
p.b=!0
y.C(p)}p=y.e
if(!$.n.$2(p,4)){n=y.e
y.e=4
p=new D.x("fogStop",n,4,y,[P.r])
p.b=!0
y.C(p)}a0.sag(y)
y=c.ch
p=a.ch
a2=new O.ie()
a2.e=0
a2.f=4
a2.r=0.001
a2.b=new V.de(1,0,0,0,1,0,0,0,1)
o=new D.x("textureMatrix",null,null,a2,[P.b])
o.b=!0
a2.C(o)
o=a2.c
if(o!==y){if(o!=null)o.gp().F(0,a2.ga5())
n=a2.c
a2.c=y
y.gp().h(0,a2.ga5())
y=new D.x("colorTexture",n,a2.c,a2,[T.cf])
y.b=!0
a2.C(y)}a2.sdI(p)
y=a2.e
if(!$.n.$2(y,0)){n=a2.e
a2.e=0
y=new D.x("highOffset",n,0,a2,[P.r])
y.b=!0
a2.C(y)}y=a2.f
if(!$.n.$2(y,3)){n=a2.f
a2.f=3
y=new D.x("lowOffset",n,3,a2,[P.r])
y.b=!0
a2.C(y)}y=a2.r
if(!$.n.$2(y,0.001)){n=a2.r
a2.r=0.001
y=new D.x("depthLimit",n,0.001,a2,[P.r])
y.b=!0
a2.C(y)}a3=M.e9(null,null,null)
a3.sag(a2)
a4=new O.jN()
a1=new V.aB(0,0,0,0)
a4.a=a1
y=new D.x("backColor",null,a1,a4,[V.aB])
y.b=!0
a4.C(y)
a4.b=null
y=O.co(O.bM)
a4.c=y
y.aN(a4.gfA(),a4.gfB())
a4.d=0
a4.e=null
y=a4.c
p=a.ch
y.h(0,O.f_(null,V.b2(0,0.8,0.2,0.2),!1,null,p))
p=a4.c
y=c.ch
p.h(0,O.f_(null,V.b2(0,0.6,0.2,0.2),!1,null,y))
a5=M.e9(null,null,null)
a5.sb_(0,X.d4(!1,!0,!1,null,2000,null,0))
a5.sag(a4)
y=M.aK
p=H.c([b,a0,a3,a5],[y])
o=new M.hK()
o.bj(y)
o.e=!1
o.f=null
o.aN(o.gfP(),o.gfQ())
o.b2(0,p)
y=u.d
if(y!==o){if(y!=null)y.gp().F(0,u.gcY())
u.d=o
o.gp().h(0,u.gcY())
u.eW()}y=new V.hD("controls",!0)
w=w.getElementById("controls")
y.c=w
if(w==null)H.q("Failed to find controls for CheckGroup")
y.d=H.c([],[W.e4])
y.aW(0,"Color",new K.n8(d,t),!0)
y.aW(0,"Specular",new K.n9(d,r),!1)
y.aW(0,"Bump",new K.na(d,s),!1)
y.aW(0,"Height",new K.nb(z,h,i),!1)
y.aW(0,"Blur",new K.nc(a2,a),!1)
y.aW(0,"Passes",new K.nd(a5,a4),!1)
V.nk(u)},
n7:{"^":"p:10;a,b,c",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isz")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
u=F.mX(150,null,150)
z=this.a
z.a=u
u.aq()
z.a.hG(new T.jS(v,x,w),0.05)
w=z.a
x=$.$get$aF()
x.toString
w.iO(new Z.aW($.$get$dx().a&~x.a))
z.a.iM(!1)
z.a.aq()}},
n8:{"^":"p:5;a,b",
$1:function(a){var z,y
z=this.a
y=z.r
y.sbU(a?this.b:null)
z=z.x
z.sbU(a?this.b:null)}},
n9:{"^":"p:5;a,b",
$1:function(a){var z=this.a.z
z.sbU(a?this.b:null)}},
na:{"^":"p:5;a,b",
$1:function(a){var z=this.a.Q
z.sbU(a?this.b:null)}},
nb:{"^":"p:5;a,b,c",
$1:function(a){var z=a?this.a.a:this.c
this.b.sbZ(0,z)}},
nc:{"^":"p:5;a,b",
$1:function(a){var z=a?this.b.ch:null
this.a.sdI(z)}},
nd:{"^":"p:5;a,b",
$1:function(a){var z=a?this.b:null
this.a.sag(z)}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ev.prototype
return J.eu.prototype}if(typeof a=="string")return J.cu.prototype
if(a==null)return J.ew.prototype
if(typeof a=="boolean")return J.io.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.aR=function(a){if(typeof a=="string")return J.cu.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.ci=function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.mV=function(a){if(typeof a=="number")return J.ct.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cE.prototype
return a}
J.dM=function(a){if(typeof a=="string")return J.cu.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cE.prototype
return a}
J.b6=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)}
J.hl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mV(a).P(a,b)}
J.dR=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h9(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).i(a,b)}
J.cV=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h9(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ci(a).m(a,b,c)}
J.hm=function(a,b){return J.dM(a).I(a,b)}
J.hn=function(a,b,c){return J.b6(a).fX(a,b,c)}
J.ho=function(a,b,c,d){return J.b6(a).dw(a,b,c,d)}
J.hp=function(a,b){return J.dM(a).W(a,b)}
J.cW=function(a,b,c){return J.aR(a).hL(a,b,c)}
J.cX=function(a,b){return J.ci(a).J(a,b)}
J.hq=function(a,b,c,d){return J.ci(a).aK(a,b,c,d)}
J.dS=function(a,b){return J.ci(a).K(a,b)}
J.dT=function(a){return J.b6(a).gcs(a)}
J.c1=function(a){return J.P(a).gU(a)}
J.bz=function(a){return J.ci(a).ga2(a)}
J.aA=function(a){return J.aR(a).gl(a)}
J.hr=function(a,b){return J.b6(a).iz(a,b)}
J.hs=function(a,b){return J.b6(a).sa4(a,b)}
J.ae=function(a){return J.P(a).j(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.d1.prototype
C.I=J.u.prototype
C.a=J.bd.prototype
C.J=J.eu.prototype
C.d=J.ev.prototype
C.t=J.ew.prototype
C.h=J.ct.prototype
C.b=J.cu.prototype
C.Q=J.c9.prototype
C.W=H.dj.prototype
C.X=W.j_.prototype
C.z=J.j4.prototype
C.A=P.dl.prototype
C.r=J.cE.prototype
C.B=W.bR.prototype
C.C=W.kL.prototype
C.E=new P.hz(!1)
C.D=new P.hy(C.E)
C.F=new P.j2()
C.G=new P.kx()
C.j=new P.ly()
C.c=new A.cp(0,"ColorSourceType.None")
C.i=new A.cp(1,"ColorSourceType.Solid")
C.e=new A.cp(2,"ColorSourceType.Texture2D")
C.f=new A.cp(3,"ColorSourceType.TextureCube")
C.q=new P.bC(0)
C.H=new P.bC(5e6)
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
C.w=H.c(I.al([127,2047,65535,1114111]),[P.m])
C.m=H.c(I.al([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.c(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.c(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.c(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.T=H.c(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.c(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.U=H.c(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.c(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.c(I.al([]),[P.j])
C.V=new H.hO(0,{},C.R,[P.j,P.j])
C.k=new P.kq(!1)
$.aG=0
$.bA=null
$.dZ=null
$.dF=!1
$.h7=null
$.h1=null
$.hf=null
$.cP=null
$.cS=null
$.dN=null
$.bt=null
$.bW=null
$.bX=null
$.dG=!1
$.U=C.j
$.eh=null
$.eg=null
$.ef=null
$.ee=null
$.n=V.iU()
$.hX="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.hW="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.ih="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.ig="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.eO=null
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
I.$lazy(y,x,w)}})(["ec","$get$ec",function(){return H.h6("_$dart_dartClosure")},"d8","$get$d8",function(){return H.h6("_$dart_js")},"f7","$get$f7",function(){return H.aL(H.cC({
toString:function(){return"$receiver$"}}))},"f8","$get$f8",function(){return H.aL(H.cC({$method$:null,
toString:function(){return"$receiver$"}}))},"f9","$get$f9",function(){return H.aL(H.cC(null))},"fa","$get$fa",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fe","$get$fe",function(){return H.aL(H.cC(void 0))},"ff","$get$ff",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fc","$get$fc",function(){return H.aL(H.fd(null))},"fb","$get$fb",function(){return H.aL(function(){try{null.$method$}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aL(H.fd(void 0))},"fg","$get$fg",function(){return H.aL(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dA","$get$dA",function(){return P.kM()},"bY","$get$bY",function(){return[]},"ft","$get$ft",function(){return P.ku()},"fx","$get$fx",function(){return H.iY(H.b5(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fS","$get$fS",function(){return P.jk("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fY","$get$fY",function(){return P.mx()},"ea","$get$ea",function(){return{}},"fu","$get$fu",function(){return Z.av(0)},"dx","$get$dx",function(){return Z.av(511)},"ac","$get$ac",function(){return Z.av(1)},"aF","$get$aF",function(){return Z.av(2)},"aN","$get$aN",function(){return Z.av(4)},"aw","$get$aw",function(){return Z.av(8)},"aO","$get$aO",function(){return Z.av(16)},"bP","$get$bP",function(){return Z.av(32)},"bQ","$get$bQ",function(){return Z.av(64)},"dy","$get$dy",function(){return Z.av(96)},"b4","$get$b4",function(){return Z.av(128)},"aM","$get$aM",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.z]},{func:1,ret:P.H},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.H,args:[P.a3]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[P.m,[P.i,E.aH]]},{func:1,ret:P.H,args:[D.z]},{func:1,ret:P.H,args:[F.aq]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.H,args:[F.au,P.r,P.r]},{func:1,ret:P.H,args:[W.af]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.m,[P.i,V.ar]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.r},{func:1,ret:P.j,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.i,O.bM]]},{func:1,ret:-1,args:[P.m,[P.i,M.aK]]},{func:1,ret:-1,args:[P.m,[P.i,U.ag]]},{func:1,ret:-1,args:[P.m,[P.i,D.a2]]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[W.bG]},{func:1,args:[P.j]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:W.Y,args:[W.N]},{func:1,ret:P.H,args:[P.a1]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:[P.aX,,],args:[,]},{func:1,ret:P.a3,args:[P.r,P.r]},{func:1,ret:-1,args:[W.bR]},{func:1,ret:P.a3,args:[W.N]},{func:1,ret:P.a3,args:[[P.i,D.a2]]},{func:1,args:[,P.j]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[[P.e,P.m],P.m]},{func:1,ret:P.R,args:[,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.H,args:[P.j]},{func:1,ret:P.H,args:[P.j,,]},{func:1,ret:-1,args:[P.b],opt:[P.aD]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:[P.M,P.j,P.j],args:[[P.M,P.j,P.j],P.j]},{func:1,ret:P.H,args:[P.bp]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.np(d||a)
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
Isolate.al=a.al
Isolate.dK=a.dK
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
if(typeof dartMainRunner==="function")dartMainRunner(K.hc,[])
else K.hc([])})})()
//# sourceMappingURL=test.dart.js.map
