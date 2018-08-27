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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dM(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dO=function(){}
var dart=[["","",,H,{"^":"",oy:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cQ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dR==null){H.n9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cm("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$db()]
if(v!=null)return v
v=H.ng(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$db(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
t:{"^":"b;",
v:function(a,b){return a===b},
gU:function(a){return H.bT(a)},
j:["eO",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ij:{"^":"t;",
j:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isai:1},
eu:{"^":"t;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gU:function(a){return 0},
$isJ:1},
dc:{"^":"t;",
gU:function(a){return 0},
j:["eP",function(a){return String(a)}]},
j_:{"^":"dc;"},
cn:{"^":"dc;"},
cf:{"^":"dc;",
j:function(a){var z=a[$.$get$ee()]
if(z==null)return this.eP(a)
return"JavaScript function for "+H.l(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd8:1},
bg:{"^":"t;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.B("add"))
a.push(b)},
iw:function(a,b){if(!!a.fixed$length)H.r(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ch(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.r(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
cm:function(a,b){var z,y
H.v(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.bb(a))}},
G:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
i8:function(a){return this.G(a,"")},
i0:function(a,b,c,d){var z,y,x
H.A(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.bb(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
c_:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.x(a,0)])
return H.e(a.slice(b,c),[H.x(a,0)])},
gaG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ih())},
aE:function(a,b,c,d){var z
H.A(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("fill range"))
P.aW(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.E(0,1))a[z]=d},
bb:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.d9(a,"[","]")},
ga5:function(a){return new J.aC(a,a.length,0,[H.x(a,0)])},
gU:function(a){return H.bT(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cs(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
return a[b]},
l:function(a,b,c){H.E(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
ii:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cs(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.er(new Array(a),b)},
er:function(a,b){return J.bM(H.e(a,[b]))},
bM:function(a){H.c6(a)
a.fixed$length=Array
return a},
ow:[function(a,b){return J.ht(H.hh(a,"$isan"),H.hh(b,"$isan"))},"$2","mG",8,0,51]}},
ox:{"^":"bg;$ti"},
aC:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cd:{"^":"t;",
aW:function(a,b){var z
H.hg(b)
if(typeof b!=="number")throw H.a(H.a6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbQ(b)
if(this.gbQ(a)===z)return 0
if(this.gbQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbQ:function(a){return a===0?1/a<0:a<0},
iI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cI:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
eE:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbQ(a))return"-"+z
return z},
bm:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a0(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.B("Unexpected toString result: "+z))
x=J.ay(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a*b},
br:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aU:function(a,b){var z
if(a>0)z=this.dF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hd:function(a,b){if(b<0)throw H.a(H.a6(b))
return this.dF(a,b)},
dF:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a<b},
ak:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a>b},
$isan:1,
$asan:function(){return[P.W]},
$isw:1,
$isW:1},
et:{"^":"cd;",$ism:1},
es:{"^":"cd;"},
ce:{"^":"t;",
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b<0)throw H.a(H.aT(a,b))
if(b>=a.length)H.r(H.aT(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.a(H.aT(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cs(b,null,null))
return a+b},
b5:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a6(b))
c=P.aW(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a6(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ae:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a6(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ad:function(a,b){return this.ae(a,b,0)},
A:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a6(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.ch(b,null,null))
if(b>c)throw H.a(P.ch(b,null,null))
if(c>a.length)throw H.a(P.ch(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.A(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
il:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ai:function(a,b){return this.il(a,b," ")},
eo:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
en:function(a,b){return this.eo(a,b,0)},
hO:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.hl(a,b,c)},
aW:function(a,b){var z
H.O(b)
if(typeof b!=="string")throw H.a(H.a6(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isan:1,
$asan:function(){return[P.j]},
$iseH:1,
$isj:1}}],["","",,H,{"^":"",
cR:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ih:function(){return new P.jJ("No element")},
jH:function(a,b,c){var z
H.v(a,"$isc",[c],"$asc")
H.f(b,{func:1,ret:P.m,args:[c,c]})
z=J.ar(a)
if(typeof z!=="number")return z.M()
H.cj(a,0,z-1,b,c)},
cj:function(a,b,c,d,e){H.v(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.jG(a,b,c,d,e)
else H.jF(a,b,c,d,e)},
jG:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.ay(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aG(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jF:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isc",[a2],"$asc")
H.f(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.a4(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a4(b+a0,2)
v=w-z
u=w+z
t=J.ay(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aG(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aG(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aG(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aG(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aG(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aG(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aG(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aG(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aG(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.L()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ak()
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
if(typeof e!=="number")return e.L()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ak()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ak()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
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
H.cj(a,b,m-2,a1,a2)
H.cj(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.F(a1.$2(t.i(a,m),r),0);)++m
for(;J.F(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cj(a,m,l,a1,a2)}else H.cj(a,m,l,a1,a2)},
a7:{"^":"ki;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.a0(this.a,b)},
$ascI:function(){return[P.m]},
$asz:function(){return[P.m]},
$asi:function(){return[P.m]},
$asc:function(){return[P.m]}},
i_:{"^":"i;"},
ez:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.ay(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.bb(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iG:{"^":"i;a,b,$ti",
ga5:function(a){return new H.iH(J.bH(this.a),this.b,this.$ti)},
gm:function(a){return J.ar(this.a)},
K:function(a,b){return this.b.$1(J.cX(this.a,b))},
$asi:function(a,b){return[b]}},
iH:{"^":"da;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$asda:function(a,b){return[b]}},
kN:{"^":"i;a,b,$ti",
ga5:function(a){return new H.kO(J.bH(this.a),this.b,this.$ti)}},
kO:{"^":"da;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
cz:{"^":"b;$ti"},
cI:{"^":"b;$ti",
l:function(a,b,c){H.E(b)
H.A(c,H.az(this,"cI",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aE:function(a,b,c,d){H.A(d,H.az(this,"cI",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
ki:{"^":"cB+cI;"}}],["","",,H,{"^":"",
hO:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
n4:function(a){return init.types[H.E(a)]},
hc:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.a(H.a6(a))
return z},
bT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j9:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.J(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$iscn){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.J(w,0)===36)w=C.b.aJ(w,1)
r=H.dS(H.c6(H.b8(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
j1:function(){if(!!self.location)return self.location.href
return},
eK:function(a){var z,y,x,w,v
H.c6(a)
z=J.ar(a)
if(typeof z!=="number")return z.eL()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ja:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a6(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aU(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a6(w))}return H.eK(z)},
eL:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a6(x))
if(x<0)throw H.a(H.a6(x))
if(x>65535)return H.ja(a)}return H.eK(a)},
jb:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eL()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cE:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aU(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
al:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j8:function(a){return a.b?H.al(a).getUTCFullYear()+0:H.al(a).getFullYear()+0},
j6:function(a){return a.b?H.al(a).getUTCMonth()+1:H.al(a).getMonth()+1},
j2:function(a){return a.b?H.al(a).getUTCDate()+0:H.al(a).getDate()+0},
j3:function(a){return a.b?H.al(a).getUTCHours()+0:H.al(a).getHours()+0},
j5:function(a){return a.b?H.al(a).getUTCMinutes()+0:H.al(a).getMinutes()+0},
j7:function(a){return a.b?H.al(a).getUTCSeconds()+0:H.al(a).getSeconds()+0},
j4:function(a){return a.b?H.al(a).getUTCMilliseconds()+0:H.al(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a6(a))},
d:function(a,b){if(a==null)J.ar(a)
throw H.a(H.aT(a,b))},
aT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,"index",null)
z=H.E(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.ch(b,"index",null)},
n0:function(a,b,c){if(a>c)return new P.cF(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cF(a,c,!0,b,"end","Invalid value")
return new P.aU(!0,b,"end",null)},
a6:function(a){return new P.aU(!0,a,null,null)},
mQ:function(a){if(typeof a!=="number")throw H.a(H.a6(a))
return a},
a:function(a){var z
if(a==null)a=new P.eG()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hn})
z.name=""}else z.toString=H.hn
return z},
hn:function(){return J.ae(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.bb(a))},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aU(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dd(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eF(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$f0()
u=$.$get$f1()
t=$.$get$f2()
s=$.$get$f3()
r=$.$get$f7()
q=$.$get$f8()
p=$.$get$f5()
$.$get$f4()
o=$.$get$fa()
n=$.$get$f9()
m=v.ah(y)
if(m!=null)return z.$1(H.dd(H.O(y),m))
else{m=u.ah(y)
if(m!=null){m.method="call"
return z.$1(H.dd(H.O(y),m))}else{m=t.ah(y)
if(m==null){m=s.ah(y)
if(m==null){m=r.ah(y)
if(m==null){m=q.ah(y)
if(m==null){m=p.ah(y)
if(m==null){m=s.ah(y)
if(m==null){m=o.ah(y)
if(m==null){m=n.ah(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eF(H.O(y),m))}}return z.$1(new H.kh(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aU(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eQ()
return a},
bF:function(a){var z
if(a==null)return new H.fG(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fG(a)},
n3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
nb:function(a,b,c,d,e,f){H.h(a,"$isd8")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nb)
a.$identity=z
return z},
hJ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.jg(z).r}else x=d
w=e?Object.create(new H.jK().constructor.prototype):Object.create(new H.d_(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.E()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ea(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.n4,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e5:H.d0
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ea(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hG:function(a,b,c,d){var z=H.d0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ea:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hI(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hG(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.E()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bI
if(v==null){v=H.ct("self")
$.bI=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.E()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bI
if(v==null){v=H.ct("self")
$.bI=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hH:function(a,b,c,d){var z,y
z=H.d0
y=H.e5
switch(b?-1:a){case 0:throw H.a(H.jq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hI:function(a,b){var z,y,x,w,v,u,t,s
z=$.bI
if(z==null){z=H.ct("self")
$.bI=z}y=$.e4
if(y==null){y=H.ct("receiver")
$.e4=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hH(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aH
if(typeof y!=="number")return y.E()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.E()
$.aH=y+1
return new Function(z+y+"}")()},
dM:function(a,b,c,d,e,f,g){var z,y
z=J.bM(H.c6(b))
H.E(c)
y=!!J.K(d).$isc?J.bM(d):d
return H.hJ(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aE(a,"String"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"double"))},
hg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"num"))},
h2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aE(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aE(a,"int"))},
dW:function(a,b){throw H.a(H.aE(a,H.O(b).substring(3)))},
nt:function(a,b){var z=J.ay(b)
throw H.a(H.hF(a,z.A(b,3,z.gm(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.dW(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.nt(a,b)},
hh:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.K(a)[b])return a
H.dW(a,b)},
c6:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aE(a,"List"))},
he:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.dW(a,b)},
h6:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
co:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h6(J.K(a))
if(z==null)return!1
y=H.hb(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dI)return a
$.dI=!0
try{if(H.co(a,b))return a
z=H.cr(b)
y=H.aE(a,z)
throw H.a(y)}finally{$.dI=!1}},
dP:function(a,b){if(a!=null&&!H.dL(a,b))H.r(H.aE(a,H.cr(b)))
return a},
fY:function(a){var z
if(a instanceof H.n){z=H.h6(J.K(a))
if(z!=null)return H.cr(z)
return"Closure"}return H.bl(a)},
nz:function(a){throw H.a(new P.hS(H.O(a)))},
h9:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b8:function(a){if(a==null)return
return a.$ti},
pE:function(a,b,c){return H.bG(a["$as"+H.l(c)],H.b8(b))},
b7:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.bG(a["$as"+H.l(c)],H.b8(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.bG(a["$as"+H.l(b)],H.b8(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.E(b)
z=H.b8(a)
return z==null?null:z[b]},
cr:function(a){var z=H.b9(a,null)
return z},
b9:function(a,b){var z,y
H.v(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dS(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mF(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.E(t,b[r])
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
for(z=H.n2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b9(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dS:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.av("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b9(u,c)}v="<"+z.j(0)+">"
return v},
bG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bC:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b8(a)
y=J.K(a)
if(y[b]==null)return!1
return H.h0(H.bG(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.c6(c)
H.O(d)
if(a==null)return a
z=H.bC(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dS(c,0,null)
throw H.a(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
h0:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aA(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aA(a[y],b,c[y],d))return!1
return!0},
pC:function(a,b,c){return a.apply(b,H.bG(J.K(b)["$as"+H.l(c)],H.b8(b)))},
hd:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="J"||a===-1||a===-2||H.hd(z)}return!1},
dL:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="J"||b===-1||b===-2||H.hd(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.co(a,b)}y=J.K(a).constructor
x=H.b8(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aA(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dL(a,b))throw H.a(H.aE(a,H.cr(b)))
return a},
aA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.hb(a,b,c,d)
if('func' in a)return c.builtin$cls==="d8"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,x,d)
else if(H.aA(a,b,x,d))return!0
else{if(!('$is'+"bK" in y.prototype))return!1
w=y.prototype["$as"+"bK"]
v=H.bG(w,z?a.slice(1):null)
return H.aA(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cr(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.h0(H.bG(r,z),b,u,d)},
hb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aA(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aA(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aA(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nr(m,b,l,d)},
nr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aA(c[w],d,a[w],b))return!1}return!0},
pD:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
ng:function(a){var z,y,x,w,v,u
z=H.O($.ha.$1(a))
y=$.cP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.h_.$2(a,z))
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
return u.i}if(v==="+")return H.hi(a,x)
if(v==="*")throw H.a(P.cm(z))
if(init.leafTags[z]===true){u=H.cT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hi(a,x)},
hi:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dT(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cT:function(a){return J.dT(a,!1,null,!!a.$isG)},
nq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cT(z)
else return J.dT(z,c,null,null)},
n9:function(){if(!0===$.dR)return
$.dR=!0
H.na()},
na:function(){var z,y,x,w,v,u,t,s
$.cP=Object.create(null)
$.cS=Object.create(null)
H.n5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hj.$1(v)
if(u!=null){t=H.nq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n5:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bB(C.J,H.bB(C.O,H.bB(C.u,H.bB(C.u,H.bB(C.N,H.bB(C.K,H.bB(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ha=new H.n6(v)
$.h_=new H.n7(u)
$.hj=new H.n8(t)},
bB:function(a,b){return a(b)||b},
hl:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hm:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"b;$ti",
j:function(a){return P.df(this)},
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
return H.hO()},
$isL:1},
hP:{"^":"hN;a,b,c,$ti",
gm:function(a){return this.a},
bC:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bC(0,b))return
return this.dt(b)},
dt:function(a){return this.b[H.O(a)]},
N:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dt(v),z))}}},
jf:{"^":"b;a,b,c,d,e,f,r,0x",q:{
jg:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bM(z)
y=z[0]
x=z[1]
return new H.jf(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
k3:{"^":"b;a,b,c,d,e,f",
ah:function(a){var z,y,x
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
aQ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.k3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f6:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iX:{"^":"a8;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eF:function(a,b){return new H.iX(a,b==null?null:b.method)}}},
im:{"^":"a8;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
dd:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.im(a,y,z?null:b.receiver)}}},
kh:{"^":"a8;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nC:{"^":"n:19;a",
$1:function(a){if(!!J.K(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fG:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geI:function(){return this},
$isd8:1,
geI:function(){return this}},
eU:{"^":"n;"},
jK:{"^":"eU;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d_:{"^":"eU;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d_))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bT(this.a)
else y=typeof z!=="object"?J.ba(z):H.bT(z)
return(y^H.bT(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
q:{
d0:function(a){return a.a},
e5:function(a){return a.c},
ct:function(a){var z,y,x,w,v
z=new H.d_("self","target","receiver","name")
y=J.bM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
k4:{"^":"a8;a",
j:function(a){return this.a},
q:{
aE:function(a,b){return new H.k4("TypeError: "+H.l(P.cy(a))+": type '"+H.fY(a)+"' is not a subtype of type '"+b+"'")}}},
hE:{"^":"a8;a",
j:function(a){return this.a},
q:{
hF:function(a,b){return new H.hE("CastError: "+H.l(P.cy(a))+": type '"+H.fY(a)+"' is not a subtype of type '"+b+"'")}}},
jp:{"^":"a8;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
jq:function(a){return new H.jp(a)}}},
b5:{"^":"iD;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gat:function(a){return new H.is(this,[H.x(this,0)])},
bC:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dq(y,b)}else return this.i5(b)},
i5:function(a){var z=this.d
if(z==null)return!1
return this.cL(this.c7(z,this.cK(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bt(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bt(w,b)
x=y==null?null:y.b
return x}else return this.i6(b)},
i6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,this.cK(a))
x=this.cL(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cc()
this.b=z}this.dh(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cc()
this.c=y}this.dh(y,b,c)}else this.i7(b,c)},
i7:function(a,b){var z,y,x,w
H.A(a,H.x(this,0))
H.A(b,H.x(this,1))
z=this.d
if(z==null){z=this.cc()
this.d=z}y=this.cK(a)
x=this.c7(z,y)
if(x==null)this.ck(z,y,[this.cd(a,b)])
else{w=this.cL(x,a)
if(w>=0)x[w].b=b
else x.push(this.cd(a,b))}},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.bb(this))
z=z.c}},
dh:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.bt(a,b)
if(z==null)this.ck(a,b,this.cd(b,c))
else z.b=c},
fj:function(){this.r=this.r+1&67108863},
cd:function(a,b){var z,y
z=new H.ir(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fj()
return z},
cK:function(a){return J.ba(a)&0x3ffffff},
cL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.df(this)},
bt:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
dq:function(a,b){return this.bt(a,b)!=null},
cc:function(){var z=Object.create(null)
this.ck(z,"<non-identifier-key>",z)
this.fc(z,"<non-identifier-key>")
return z},
$isex:1},
ir:{"^":"b;a,b,0c,0d"},
is:{"^":"i_;a,$ti",
gm:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.it(z,z.r,this.$ti)
y.c=z.e
return y}},
it:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
n6:{"^":"n:19;a",
$1:function(a){return this.a(a)}},
n7:{"^":"n:30;a",
$2:function(a,b){return this.a(a,b)}},
n8:{"^":"n:47;a",
$1:function(a){return this.a(H.O(a))}},
ik:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseH:1,
$isjh:1,
q:{
il:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n2:function(a){return J.er(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ns:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){return a},
iT:function(a){return new Int8Array(a)},
aS:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aT(b,a))},
mz:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.n0(a,b,c))
return b},
eE:{"^":"t;",$iseE:1,"%":"ArrayBuffer"},
dk:{"^":"t;",$isdk:1,$isk5:1,"%":"DataView;ArrayBufferView;dj|fA|fB|iU|fC|fD|b6"},
dj:{"^":"dk;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dO},
iU:{"^":"fB;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
l:function(a,b,c){H.E(b)
H.n1(c)
H.aS(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.w]},
$asz:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
b6:{"^":"fD;",
l:function(a,b,c){H.E(b)
H.E(c)
H.aS(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.m]},
$asz:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
oJ:{"^":"b6;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oK:{"^":"b6;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oL:{"^":"b6;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oM:{"^":"b6;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oN:{"^":"b6;",
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oO:{"^":"b6;",
gm:function(a){return a.length},
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dl:{"^":"b6;",
gm:function(a){return a.length},
i:function(a,b){H.aS(b,a,a.length)
return a[b]},
c_:function(a,b,c){return new Uint8Array(a.subarray(b,H.mz(b,c,a.length)))},
$isdl:1,
$isT:1,
"%":";Uint8Array"},
fA:{"^":"dj+z;"},
fB:{"^":"fA+cz;"},
fC:{"^":"dj+z;"},
fD:{"^":"fC+cz;"}}],["","",,P,{"^":"",
kQ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mN()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bD(new P.kS(z),1)).observe(y,{childList:true})
return new P.kR(z,y,x)}else if(self.setImmediate!=null)return P.mO()
return P.mP()},
pr:[function(a){self.scheduleImmediate(H.bD(new P.kT(H.f(a,{func:1,ret:-1})),0))},"$1","mN",4,0,11],
ps:[function(a){self.setImmediate(H.bD(new P.kU(H.f(a,{func:1,ret:-1})),0))},"$1","mO",4,0,11],
pt:[function(a){P.dv(C.r,H.f(a,{func:1,ret:-1}))},"$1","mP",4,0,11],
dv:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a4(a.a,1000)
return P.lT(z<0?0:z,b)},
eW:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bs]})
z=C.d.a4(a.a,1000)
return P.lU(z<0?0:z,b)},
mJ:function(a,b){if(H.co(a,{func:1,args:[P.b,P.aD]}))return b.iv(a,null,P.b,P.aD)
if(H.co(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mI:function(){var z,y
for(;z=$.bA,z!=null;){$.c4=null
y=z.b
$.bA=y
if(y==null)$.c3=null
z.a.$0()}},
pB:[function(){$.dJ=!0
try{P.mI()}finally{$.c4=null
$.dJ=!1
if($.bA!=null)$.$get$dD().$1(P.h1())}},"$0","h1",0,0,3],
fX:function(a){var z=new P.ft(H.f(a,{func:1,ret:-1}))
if($.bA==null){$.c3=z
$.bA=z
if(!$.dJ)$.$get$dD().$1(P.h1())}else{$.c3.b=z
$.c3=z}},
mM:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bA
if(z==null){P.fX(a)
$.c4=$.c3
return}y=new P.ft(a)
x=$.c4
if(x==null){y.b=z
$.c4=y
$.bA=y}else{y.b=x.b
x.b=y
$.c4=y
if(y.b==null)$.c3=y}},
nu:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.V
if(C.j===y){P.cO(null,null,C.j,a)
return}y.toString
P.cO(null,null,y,H.f(y.cq(a),z))},
k_:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.V
if(y===C.j){y.toString
return P.dv(a,b)}return P.dv(a,H.f(y.cq(b),z))},
k0:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.f(b,z)
y=$.V
if(y===C.j){y.toString
return P.eW(a,b)}x=y.dQ(b,P.bs)
$.V.toString
return P.eW(a,H.f(x,z))},
cN:function(a,b,c,d,e){var z={}
z.a=d
P.mM(new P.mK(z,e))},
fT:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fU:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mL:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cO:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cq(d):c.hL(d,-1)
P.fX(d)},
kS:{"^":"n:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kR:{"^":"n:46;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kT:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kU:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fJ:{"^":"b;a,0b,c",
f_:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bD(new P.lW(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
f0:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bD(new P.lV(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbs:1,
q:{
lT:function(a,b){var z=new P.fJ(!0,0)
z.f_(a,b)
return z},
lU:function(a,b){var z=new P.fJ(!1,0)
z.f0(a,b)
return z}}},
lW:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lV:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eR(w,x)}z.c=y
this.d.$1(z)}},
by:{"^":"b;0a,b,c,d,e,$ti",
ic:function(a){if(this.c!==6)return!0
return this.b.b.cZ(H.f(this.d,{func:1,ret:P.ai,args:[P.b]}),a.a,P.ai,P.b)},
i3:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.co(z,{func:1,args:[P.b,P.aD]}))return H.dP(w.iC(z,a.a,a.b,null,y,P.aD),x)
else return H.dP(w.cZ(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b1:{"^":"b;dG:a<,b,0h2:c<,$ti",
eD:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mJ(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b1(0,$.V,[c])
w=b==null?1:3
this.di(new P.by(x,w,a,b,[z,c]))
return x},
iH:function(a,b){return this.eD(a,null,b)},
di:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isby")
this.c=a}else{if(z===2){y=H.h(this.c,"$isb1")
z=y.a
if(z<4){y.di(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cO(null,null,z,H.f(new P.l8(this,a),{func:1,ret:-1}))}},
dB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isby")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isb1")
y=u.a
if(y<4){u.dB(a)
return}this.a=y
this.c=u.c}z.a=this.bv(a)
y=this.b
y.toString
P.cO(null,null,y,H.f(new P.ld(z,this),{func:1,ret:-1}))}},
cf:function(){var z=H.h(this.c,"$isby")
this.c=null
return this.bv(z)},
bv:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dl:function(a){var z,y,x,w
z=H.x(this,0)
H.dP(a,{futureOr:1,type:z})
y=this.$ti
x=H.bC(a,"$isbK",y,"$asbK")
if(x){z=H.bC(a,"$isb1",y,null)
if(z)P.fw(a,this)
else P.l9(a,this)}else{w=this.cf()
H.A(a,z)
this.a=4
this.c=a
P.bZ(this,w)}},
c3:[function(a,b){var z
H.h(b,"$isaD")
z=this.cf()
this.a=8
this.c=new P.as(a,b)
P.bZ(this,z)},function(a){return this.c3(a,null)},"iM","$2","$1","gf8",4,2,38],
$isbK:1,
q:{
l9:function(a,b){var z,y,x
b.a=1
try{a.eD(new P.la(b),new P.lb(b),null)}catch(x){z=H.aB(x)
y=H.bF(x)
P.nu(new P.lc(b,z,y))}},
fw:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isb1")
if(z>=4){y=b.cf()
b.a=a.a
b.c=a.c
P.bZ(b,y)}else{y=H.h(b.c,"$isby")
b.a=2
b.c=a
a.dB(y)}},
bZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isas")
y=y.b
u=v.a
t=v.b
y.toString
P.cN(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bZ(z.a,b)}y=z.a
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
if(p){H.h(r,"$isas")
y=y.b
u=r.a
t=r.b
y.toString
P.cN(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.lg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lf(x,b,r).$0()}else if((y&2)!==0)new P.le(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.K(y).$isbK){if(y.a>=4){n=H.h(t.c,"$isby")
t.c=null
b=t.bv(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fw(y,t)
return}}m=b.b
n=H.h(m.c,"$isby")
m.c=null
b=m.bv(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.h(u,"$isas")
m.a=8
m.c=u}z.a=m
y=m}}}},
l8:{"^":"n:0;a,b",
$0:function(){P.bZ(this.a,this.b)}},
ld:{"^":"n:0;a,b",
$0:function(){P.bZ(this.b,this.a.a)}},
la:{"^":"n:16;a",
$1:function(a){var z=this.a
z.a=0
z.dl(a)}},
lb:{"^":"n:41;a",
$2:function(a,b){this.a.c3(a,H.h(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
lc:{"^":"n:0;a,b,c",
$0:function(){this.a.c3(this.b,this.c)}},
lg:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eC(H.f(w.d,{func:1}),null)}catch(v){y=H.aB(v)
x=H.bF(v)
if(this.d){w=H.h(this.a.a.c,"$isas").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isas")
else u.b=new P.as(y,x)
u.a=!0
return}if(!!J.K(z).$isbK){if(z instanceof P.b1&&z.gdG()>=4){if(z.gdG()===8){w=this.b
w.b=H.h(z.gh2(),"$isas")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iH(new P.lh(t),null)
w.a=!1}}},
lh:{"^":"n:53;a",
$1:function(a){return this.a}},
lf:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cZ(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aB(t)
y=H.bF(t)
x=this.a
x.b=new P.as(z,y)
x.a=!0}}},
le:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isas")
w=this.c
if(w.ic(z)&&w.e!=null){v=this.b
v.b=w.i3(z)
v.a=!1}}catch(u){y=H.aB(u)
x=H.bF(u)
w=H.h(this.a.a.c,"$isas")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.as(y,x)
s.a=!0}}},
ft:{"^":"b;a,0b"},
dr:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b1(0,$.V,[P.m])
z.a=0
this.ia(new P.jN(z,this),!0,new P.jO(z,y),y.gf8())
return y}},
jN:{"^":"n;a,b",
$1:function(a){H.A(a,H.az(this.b,"dr",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.az(this.b,"dr",0)]}}},
jO:{"^":"n:0;a,b",
$0:function(){this.b.dl(this.a.a)}},
eS:{"^":"b;$ti"},
jM:{"^":"b;"},
bs:{"^":"b;"},
as:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa8:1},
mn:{"^":"b;",$ispq:1},
mK:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eG()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
lB:{"^":"mn;",
iD:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.V){a.$0()
return}P.fT(null,null,this,a,-1)}catch(x){z=H.aB(x)
y=H.bF(x)
P.cN(null,null,this,z,H.h(y,"$isaD"))}},
iE:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.V){a.$1(b)
return}P.fU(null,null,this,a,b,-1,c)}catch(x){z=H.aB(x)
y=H.bF(x)
P.cN(null,null,this,z,H.h(y,"$isaD"))}},
hL:function(a,b){return new P.lD(this,H.f(a,{func:1,ret:b}),b)},
cq:function(a){return new P.lC(this,H.f(a,{func:1,ret:-1}))},
dQ:function(a,b){return new P.lE(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eC:function(a,b){H.f(a,{func:1,ret:b})
if($.V===C.j)return a.$0()
return P.fT(null,null,this,a,b)},
cZ:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.V===C.j)return a.$1(b)
return P.fU(null,null,this,a,b,c,d)},
iC:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.V===C.j)return a.$2(b,c)
return P.mL(null,null,this,a,b,c,d,e,f)},
iv:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lD:{"^":"n;a,b,c",
$0:function(){return this.a.eC(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lC:{"^":"n:3;a,b",
$0:function(){return this.a.iD(this.b)}},
lE:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.iE(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iu:function(a,b,c,d,e){return new H.b5(0,0,[d,e])},
iv:function(a,b,c){H.c6(a)
return H.v(H.n3(a,new H.b5(0,0,[b,c])),"$isex",[b,c],"$asex")},
ey:function(a,b){return new H.b5(0,0,[a,b])},
iy:function(a,b,c,d){return new P.ln(0,0,[d])},
ig:function(a,b,c){var z,y
if(P.dK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c5()
C.a.h(y,a)
try{P.mH(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eT(b,H.he(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d9:function(a,b,c){var z,y,x
if(P.dK(a))return b+"..."+c
z=new P.av(b)
y=$.$get$c5()
C.a.h(y,a)
try{x=z
x.a=P.eT(x.gaP(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaP()+c
y=z.gaP()
return y.charCodeAt(0)==0?y:y},
dK:function(a){var z,y
for(z=0;y=$.$get$c5(),z<y.length;++z)if(a===y[z])return!0
return!1},
mH:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.I();t=s,s=r){r=z.gS(z);++x
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
iw:function(a,b,c){var z=P.iu(null,null,null,b,c)
a.N(0,new P.ix(z,b,c))
return z},
df:function(a){var z,y,x
z={}
if(P.dK(a))return"{...}"
y=new P.av("")
try{C.a.h($.$get$c5(),a)
x=y
x.a=x.gaP()+"{"
z.a=!0
J.dZ(a,new P.iE(z,y))
z=y
z.a=z.gaP()+"}"}finally{z=$.$get$c5()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaP()
return z.charCodeAt(0)==0?z:z},
ln:{"^":"li;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){return P.fz(this,this.r,H.x(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dF()
this.b=z}return this.dj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dF()
this.c=y}return this.dj(y,b)}else return this.f1(0,b)},
f1:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.dF()
this.d=z}y=this.dm(b)
x=z[y]
if(x==null)z[y]=[this.c2(b)]
else{if(this.du(x,b)>=0)return!1
x.push(this.c2(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dC(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fg(z,b)
x=this.du(y,b)
if(x<0)return!1
this.dI(y.splice(x,1)[0])
return!0},
dj:function(a,b){H.A(b,H.x(this,0))
if(H.h(a[b],"$isdE")!=null)return!1
a[b]=this.c2(b)
return!0},
dC:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdE")
if(z==null)return!1
this.dI(z)
delete a[b]
return!0},
dk:function(){this.r=this.r+1&67108863},
c2:function(a){var z,y
z=new P.dE(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dk()
return z},
dI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dk()},
dm:function(a){return J.ba(a)&0x3ffffff},
fg:function(a,b){return a[this.dm(b)]},
du:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
q:{
dF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dE:{"^":"b;a,0b,0c"},
lo:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
q:{
fz:function(a,b,c){var z=new P.lo(a,b,[c])
z.c=a.e
return z}}},
li:{"^":"jr;"},
ix:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))}},
cB:{"^":"lp;",$isi:1,$isc:1},
z:{"^":"b;$ti",
ga5:function(a){return new H.ez(a,this.gm(a),0,[H.b7(this,a,"z",0)])},
K:function(a,b){return this.i(a,b)},
iJ:function(a,b){var z,y,x
z=H.e([],[H.b7(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
d0:function(a){return this.iJ(a,!0)},
aE:function(a,b,c,d){var z
H.A(d,H.b7(this,a,"z",0))
P.aW(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.d9(a,"[","]")}},
iD:{"^":"ao;"},
iE:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ao:{"^":"b;$ti",
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b7(this,a,"ao",0),H.b7(this,a,"ao",1)]})
for(z=J.bH(this.gat(a));z.I();){y=z.gS(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.ar(this.gat(a))},
j:function(a){return P.df(a)},
$isL:1},
m0:{"^":"b;$ti",
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
iF:{"^":"b;$ti",
i:function(a,b){return J.dY(this.a,b)},
l:function(a,b,c){J.cV(this.a,H.A(b,H.x(this,0)),H.A(c,H.x(this,1)))},
N:function(a,b){J.dZ(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gm:function(a){return J.ar(this.a)},
j:function(a){return J.ae(this.a)},
$isL:1},
fh:{"^":"m1;a,$ti"},
jt:{"^":"b;$ti",
j:function(a){return P.d9(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e0("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=P.fz(this,this.r,H.x(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
jr:{"^":"jt;"},
lp:{"^":"b+z;"},
m1:{"^":"iF+m0;$ti"}}],["","",,P,{"^":"",hB:{"^":"c8;a",
ig:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aW(c,d,b.length,null,null,null)
z=$.$get$fu()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.J(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cR(C.b.J(b,s))
o=H.cR(C.b.J(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.av("")
w.a+=C.b.A(b,x,y)
w.a+=H.cE(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.A(b,x,d)
k=l.length
if(v>=0)P.e3(b,u,d,v,t,k)
else{j=C.d.br(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b5(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e3(b,u,d,v,t,i)
else{j=C.d.br(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b5(b,d,d,j===2?"==":"=")}return b},
$asc8:function(){return[[P.c,P.m],P.j]},
q:{
e3:function(a,b,c,d,e,f){if(C.d.br(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},hC:{"^":"bJ;a",
$asbJ:function(){return[[P.c,P.m],P.j]}},c8:{"^":"b;$ti"},bJ:{"^":"jM;$ti"},i1:{"^":"c8;",
$asc8:function(){return[P.j,[P.c,P.m]]}},kv:{"^":"i1;a",
ghW:function(){return C.F}},kC:{"^":"bJ;",
bc:function(a,b,c){var z,y,x,w
z=a.length
P.aW(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mm(0,0,x)
if(w.fe(a,b,z)!==z)w.dK(J.hs(a,z-1),0)
return C.V.c_(x,0,w.b)},
cw:function(a){return this.bc(a,0,null)},
$asbJ:function(){return[P.j,[P.c,P.m]]}},mm:{"^":"b;a,b,c",
dK:function(a,b){var z,y,x,w,v
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
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dK(w,C.b.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kw:{"^":"bJ;a",
bc:function(a,b,c){var z,y,x,w,v
H.v(a,"$isc",[P.m],"$asc")
z=P.kx(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.aW(b,c,y,null,null,null)
x=new P.av("")
w=new P.mj(!1,x,!0,0,0,0)
w.bc(a,b,y)
w.i_(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cw:function(a){return this.bc(a,0,null)},
$asbJ:function(){return[[P.c,P.m],P.j]},
q:{
kx:function(a,b,c,d){H.v(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.ky(!1,b,c,d)
return},
ky:function(a,b,c,d){var z,y,x
z=$.$get$fm()
if(z==null)return
y=0===c
if(y&&!0)return P.dA(z,b)
x=b.length
d=P.aW(c,d,x,null,null,null)
if(y&&d===x)return P.dA(z,b)
return P.dA(z,b.subarray(c,d))},
dA:function(a,b){if(P.kA(b))return
return P.kB(a,b)},
kB:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aB(y)}return},
kA:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kz:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aB(y)}return}}},mj:{"^":"b;a,b,c,d,e,f",
i_:function(a,b,c){var z
H.v(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ml(c)
v=new P.mk(this,b,c,a)
$label0$0:for(u=J.ay(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bX()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.d.bm(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.a0("Overlong encoding of 0x"+C.d.bm(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.d.bm(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cE(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ak()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.d.bm(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.d.bm(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ml:{"^":"n:52;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.ay(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bX()
if((w&127)!==w)return x-b}return z-b}},mk:{"^":"n:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ck(this.d,a,b)}}}],["","",,P,{"^":"",
cq:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.j9(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
i3:function(a){var z=J.K(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bl(a)+"'"},
iz:function(a,b,c,d){var z,y
H.A(b,d)
z=J.ii(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
iA:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga5(a);x.I();)C.a.h(y,H.A(x.gS(x),c))
if(b)return y
return H.v(J.bM(y),"$isc",z,"$asc")},
ck:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbg",[z],"$asbg")
y=a.length
c=P.aW(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.eL(z?C.a.c_(a,b,c):a)}if(!!J.K(a).$isdl)return H.jb(a,b,P.aW(b,c,a.length,null,null,null))
return P.jP(a,b,c)},
jP:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a2(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.ar(a),null,null))
y=J.bH(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gS(y))}return H.eL(w)},
ji:function(a,b,c){return new H.ik(a,H.il(a,!1,!0,!1))},
fj:function(){var z=H.j1()
if(z!=null)return P.kn(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.i3(a)},
u:function(a){return new P.fv(a)},
iB:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dV:function(a){H.ns(a)},
kn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.J(a,b+4)^58)*3|C.b.J(a,b)^100|C.b.J(a,b+1)^97|C.b.J(a,b+2)^116|C.b.J(a,b+3)^97)>>>0
if(y===0)return P.fi(b>0||c<c?C.b.A(a,b,c):a,5,null).geF()
else if(y===32)return P.fi(C.b.A(a,z,c),0,null).geF()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.fV(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.d5()
if(v>=b)if(P.fV(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ae(a,"..",s)))n=r>s+2&&C.b.ae(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ae(a,"file",b)){if(u<=b){if(!C.b.ae(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.A(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b5(a,s,r,"/");++r;++q;++c}else{a=C.b.A(a,b,s)+"/"+C.b.A(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ae(a,"http",b)){if(x&&t+3===s&&C.b.ae(a,"80",t+1))if(b===0&&!0){a=C.b.b5(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ae(a,"https",b)){if(x&&t+4===s&&C.b.ae(a,"443",t+1))if(b===0&&!0){a=C.b.b5(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.A(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lG(a,v,u,t,s,r,q,o)}return P.m2(a,b,c,v,u,t,s,r,q,o)},
fl:function(a,b){var z=P.j
return C.a.i0(H.e(a.split("&"),[z]),P.ey(z,z),new P.kq(b),[P.L,P.j,P.j])},
kl:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.km(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a0(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cq(C.b.A(a,v,w),null,null)
if(typeof s!=="number")return s.ak()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cq(C.b.A(a,v,c),null,null)
if(typeof s!=="number")return s.ak()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.ko(a)
y=new P.kp(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a0(a,w)
if(s===58){if(w===b){++w
if(C.b.a0(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaG(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kl(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aU(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mA:function(){var z,y,x,w,v
z=P.iB(22,new P.mC(),!0,P.T)
y=new P.mB(z)
x=new P.mD()
w=new P.mE()
v=H.h(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isT"),"]",5)
v=H.h(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isT"),"az",21)
v=H.h(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fV:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isc",[P.m],"$asc")
z=$.$get$fW()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ai:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
aW:function(a,b){return C.d.aW(this.a,H.h(b,"$isaj").a)},
gU:function(a){var z=this.a
return(z^C.d.aU(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hT(H.j8(this))
y=P.c9(H.j6(this))
x=P.c9(H.j2(this))
w=P.c9(H.j3(this))
v=P.c9(H.j5(this))
u=P.c9(H.j7(this))
t=P.hU(H.j4(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isan:1,
$asan:function(){return[P.aj]},
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
c9:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"W;"},
"+double":0,
aI:{"^":"b;a",
k:function(a,b){return new P.aI(C.d.aj(this.a*b))},
L:function(a,b){return C.d.L(this.a,H.h(b,"$isaI").a)},
ak:function(a,b){return C.d.ak(this.a,H.h(b,"$isaI").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
aW:function(a,b){return C.d.aW(this.a,H.h(b,"$isaI").a)},
j:function(a){var z,y,x,w,v
z=new P.hZ()
y=this.a
if(y<0)return"-"+new P.aI(0-y).j(0)
x=z.$1(C.d.a4(y,6e7)%60)
w=z.$1(C.d.a4(y,1e6)%60)
v=new P.hY().$1(y%1e6)
return""+C.d.a4(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isan:1,
$asan:function(){return[P.aI]},
q:{
ek:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hY:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hZ:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eG:{"^":"a8;",
j:function(a){return"Throw of null."}},
aU:{"^":"a8;a,b,c,d",
gc5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc4:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc5()+y+x
if(!this.a)return w
v=this.gc4()
u=P.cy(this.b)
return w+v+": "+H.l(u)},
q:{
c7:function(a){return new P.aU(!1,null,null,a)},
cs:function(a,b,c){return new P.aU(!0,a,b,c)},
e0:function(a){return new P.aU(!1,null,a,"Must not be null")}}},
cF:{"^":"aU;e,f,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
ch:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
aW:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
id:{"^":"aU;e,m:f>,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){if(J.ho(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
U:function(a,b,c,d,e){var z=H.E(e!=null?e:J.ar(b))
return new P.id(b,z,!0,a,c,"Index out of range")}}},
kj:{"^":"a8;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
B:function(a){return new P.kj(a)}}},
kg:{"^":"a8;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cm:function(a){return new P.kg(a)}}},
jJ:{"^":"a8;a",
j:function(a){return"Bad state: "+this.a}},
hM:{"^":"a8;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cy(z))+"."},
q:{
bb:function(a){return new P.hM(a)}}},
iY:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa8:1},
eQ:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa8:1},
hS:{"^":"a8;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fv:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
i9:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.A(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a0(w,s)
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
m=""}l=C.b.A(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
q:{
a0:function(a,b,c){return new P.i9(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
i:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga5(this)
for(y=0;z.I();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e0("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.I();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
j:function(a){return P.ig(this,"(",")")}},
da:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
J:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
W:{"^":"b;",$isan:1,
$asan:function(){return[P.W]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gU:function(a){return H.bT(this)},
j:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.j(this)}},
aD:{"^":"b;"},
j:{"^":"b;",$isan:1,
$asan:function(){return[P.j]},
$iseH:1},
"+String":0,
av:{"^":"b;aP:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispa:1,
q:{
eT:function(a,b,c){var z=J.bH(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.I())}else{a+=H.l(z.gS(z))
for(;z.I();)a=a+c+H.l(z.gS(z))}return a}}},
kq:{"^":"n:33;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isL",[z,z],"$asL")
H.O(b)
y=J.ay(b).en(b,"=")
if(y===-1){if(b!=="")J.cV(a,P.dH(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.A(b,0,y)
w=C.b.aJ(b,y+1)
z=this.a
J.cV(a,P.dH(x,0,x.length,z,!0),P.dH(w,0,w.length,z,!0))}return a}},
km:{"^":"n:34;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
ko:{"^":"n:36;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kp:{"^":"n:28;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cq(C.b.A(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cK:{"^":"b;bZ:a<,b,c,d,ez:e>,f,r,0x,0y,0z,0Q,0ch",
geG:function(){return this.b},
gcJ:function(a){var z=this.c
if(z==null)return""
if(C.b.ad(z,"["))return C.b.A(z,1,z.length-1)
return z},
gbS:function(a){var z=this.d
if(z==null)return P.fL(this.a)
return z},
gcV:function(a){var z=this.f
return z==null?"":z},
gei:function(){var z=this.r
return z==null?"":z},
cY:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.dG(g,0,0,h)
return new P.cK(i,j,c,f,d,g,this.r)},
eB:function(a,b){return this.cY(a,null,null,null,null,null,null,b,null,null)},
gcW:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fh(P.fl(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gej:function(){return this.c!=null},
gem:function(){return this.f!=null},
gek:function(){return this.r!=null},
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
z=J.K(b)
if(!!z.$isdz){y=this.a
x=b.gbZ()
if(y==null?x==null:y===x)if(this.c!=null===b.gej()){y=this.b
x=b.geG()
if(y==null?x==null:y===x){y=this.gcJ(this)
x=z.gcJ(b)
if(y==null?x==null:y===x){y=this.gbS(this)
x=z.gbS(b)
if(y==null?x==null:y===x)if(this.e===z.gez(b)){y=this.f
x=y==null
if(!x===b.gem()){if(x)y=""
if(y===z.gcV(b)){z=this.r
y=z==null
if(!y===b.gek()){if(y)z=""
z=z===b.gei()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.j(0))
this.z=z}return z},
$isdz:1,
q:{
cL:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fQ().b
if(typeof b!=="string")H.r(H.a6(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.az(c,"c8",0))
y=c.ghW().cw(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cE(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.md(a,b,d)
else{if(d===b)P.c0(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.me(a,z,e-1):""
x=P.m7(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.ma(P.cq(C.b.A(a,w,g),new P.m3(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m8(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.dG(a,h+1,i,null):null
return new P.cK(j,y,x,v,u,t,i<c?P.m6(a,i+1,c):null)},
fL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c0:function(a,b,c){throw H.a(P.a0(c,a,b))},
ma:function(a,b){if(a!=null&&a===P.fL(b))return
return a},
m7:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.a0(a,z)!==93)P.c0(a,b,"Missing end `]` to match `[` in host")
P.fk(a,b+1,z)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a0(a,y)===58){P.fk(a,b,c)
return"["+a+"]"}return P.mg(a,b,c)},
mg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a0(a,z)
if(v===37){u=P.fS(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.av("")
s=C.b.A(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.A(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.av("")
if(y<z){x.a+=C.b.A(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c0(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a0(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.av("")
s=C.b.A(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fM(v)
z+=q
y=z}}}}if(x==null)return C.b.A(a,b,c)
if(y<c){s=C.b.A(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
md:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fO(C.b.J(a,b)))P.c0(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c0(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.A(a,b,c)
return P.m4(y?a.toLowerCase():a)},
m4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
me:function(a,b,c){return P.c1(a,b,c,C.R)},
m8:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c1(a,b,c,C.y):C.t.jo(d,new P.m9(),P.j).G(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ad(w,"/"))w="/"+w
return P.mf(w,e,f)},
mf:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ad(a,"/"))return P.mh(a,!z||c)
return P.mi(a)},
dG:function(a,b,c,d){var z,y
z={}
H.v(d,"$isL",[P.j,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c7("Both query and queryParameters specified"))
return P.c1(a,b,c,C.n)}if(d==null)return
y=new P.av("")
z.a=""
d.N(0,new P.mb(new P.mc(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m6:function(a,b,c){return P.c1(a,b,c,C.n)},
fS:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a0(a,b+1)
x=C.b.a0(a,z)
w=H.cR(y)
v=H.cR(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aU(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cE(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
fM:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.J("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.hd(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.J("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.J("0123456789ABCDEF",u&15))
v+=3}}return P.ck(y,0,null)},
c1:function(a,b,c,d){var z=P.fR(a,b,c,H.v(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.A(a,b,c):z},
fR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a0(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fS(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c0(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a0(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fM(v)}}if(w==null)w=new P.av("")
w.a+=C.b.A(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.A(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fP:function(a){if(C.b.ad(a,"."))return!0
return C.b.en(a,"/.")!==-1},
mi:function(a){var z,y,x,w,v,u,t
if(!P.fP(a))return a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.G(z,"/")},
mh:function(a,b){var z,y,x,w,v,u
if(!P.fP(a))return!b?P.fN(a):a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaG(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaG(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.l(z,0,P.fN(z[0]))}return C.a.G(z,"/")},
fN:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fO(J.hp(a,0)))for(y=1;y<z;++y){x=C.b.J(a,y)
if(x===58)return C.b.A(a,0,y)+"%3A"+C.b.aJ(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m5:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c7("Invalid URL encoding"))}}return z},
dH:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dQ(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.J(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.A(a,b,c)
else u=new H.a7(y.A(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.J(a,x)
if(w>127)throw H.a(P.c7("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c7("Truncated URI"))
C.a.h(u,P.m5(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isc",[P.m],"$asc")
return new P.kw(!1).cw(u)},
fO:function(a){var z=a|32
return 97<=z&&z<=122}}},
m3:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
m9:{"^":"n:40;",
$1:function(a){return P.cL(C.T,a,C.k,!1)}},
mc:{"^":"n:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cL(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cL(C.p,b,C.k,!0))}}},
mb:{"^":"n:42;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bH(H.he(b,"$isi")),y=this.a;z.I();)y.$2(a,H.O(z.gS(z)))}},
kk:{"^":"b;a,b,c",
geF:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.eo(y,"?",z)
w=y.length
if(x>=0){v=P.c1(y,x+1,w,C.n)
w=x}else v=null
z=new P.kZ(this,"data",null,null,null,P.c1(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fi:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaG(z)
if(v!==44||x!==t+7||!C.b.ae(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.ig(0,a,s,y)
else{r=P.fR(a,s,y,C.n,!0)
if(r!=null)a=C.b.b5(a,s,y,r)}return new P.kk(a,z,c)}}},
mC:{"^":"n:43;",
$1:function(a){return new Uint8Array(96)}},
mB:{"^":"n:45;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hu(z,0,96,b)
return z}},
mD:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.J(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mE:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.J(b,0),y=C.b.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lG:{"^":"b;a,b,c,d,e,f,r,x,0y",
gej:function(){return this.c>0},
gel:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gem:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gek:function(){return this.r<this.a.length},
gdv:function(){return this.b===4&&C.b.ad(this.a,"http")},
gdw:function(){return this.b===5&&C.b.ad(this.a,"https")},
gbZ:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdv()){this.x="http"
z="http"}else if(this.gdw()){this.x="https"
z="https"}else if(z===4&&C.b.ad(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ad(this.a,"package")){this.x="package"
z="package"}else{z=C.b.A(this.a,0,z)
this.x=z}return z},
geG:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.A(this.a,y,z-1):""},
gcJ:function(a){var z=this.c
return z>0?C.b.A(this.a,z,this.d):""},
gbS:function(a){var z
if(this.gel()){z=this.d
if(typeof z!=="number")return z.E()
return P.cq(C.b.A(this.a,z+1,this.e),null,null)}if(this.gdv())return 80
if(this.gdw())return 443
return 0},
gez:function(a){return C.b.A(this.a,this.e,this.f)},
gcV:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.A(this.a,z+1,y):""},
gei:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aJ(y,z+1):""},
gcW:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.U
z=P.j
return new P.fh(P.fl(this.gcV(this),C.k),[z,z])},
cY:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.j,null],"$asL")
i=this.gbZ()
z=i==="file"
y=this.c
j=y>0?C.b.A(this.a,this.b+3,y):""
f=this.gel()?this.gbS(this):null
y=this.c
if(y>0)c=C.b.A(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.A(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.dG(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aJ(y,x+1)
return new P.cK(i,j,c,f,d,g,b)},
eB:function(a,b){return this.cY(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdz)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdz:1},
kZ:{"^":"cK;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
d3:function(a,b){var z=document.createElement("canvas")
return z},
i0:function(a){H.h(a,"$isa9")
return"wheel"},
ie:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$iseq")
try{J.hw(z,a)}catch(x){H.aB(x)}return z},
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fy:function(a,b,c,d){var z,y
z=W.cJ(W.cJ(W.cJ(W.cJ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fZ:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.j)return a
return z.dQ(a,b)},
aa:{"^":"a4;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nE:{"^":"dp;0t:x=,0u:y=","%":"Accelerometer|LinearAccelerationSensor"},
nF:{"^":"t;0m:length=","%":"AccessibleNodeList"},
nG:{"^":"aa;0a6:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nH:{"^":"aa;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cZ:{"^":"t;",$iscZ:1,"%":";Blob"},
nN:{"^":"aa;0a6:type}","%":"HTMLButtonElement"},
d2:{"^":"aa;",
bY:function(a,b,c){if(c!=null)return a.getContext(b,P.mR(c,null))
return a.getContext(b)},
eJ:function(a,b){return this.bY(a,b,null)},
$isd2:1,
"%":"HTMLCanvasElement"},
e8:{"^":"t;",$ise8:1,"%":"CanvasRenderingContext2D"},
nP:{"^":"P;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nR:{"^":"cw;0m:length=","%":"CSSPerspective"},
nS:{"^":"d6;0t:x=,0u:y=","%":"CSSPositionValue"},
nT:{"^":"cw;0t:x=,0u:y=","%":"CSSRotation"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nU:{"^":"cw;0t:x=,0u:y=","%":"CSSScale"},
nV:{"^":"kY;0m:length=",
eK:function(a,b){var z=a.getPropertyValue(this.f5(a,b))
return z==null?"":z},
f5:function(a,b){var z,y
z=$.$get$ed()
y=z[b]
if(typeof y==="string")return y
y=this.he(a,b)
z[b]=y
return y},
he:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hV()+b
if(z in a)return z
return b},
gcr:function(a){return a.bottom},
gas:function(a){return a.height},
gb1:function(a){return a.left},
gbi:function(a){return a.right},
gbo:function(a){return a.top},
gav:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hR:{"^":"b;",
gb1:function(a){return this.eK(a,"left")}},
d6:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cw:{"^":"t;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nW:{"^":"d6;0m:length=","%":"CSSTransformValue"},
nX:{"^":"cw;0t:x=,0u:y=","%":"CSSTranslation"},
nY:{"^":"d6;0m:length=","%":"CSSUnparsedValue"},
nZ:{"^":"t;0m:length=","%":"DataTransferItemList"},
o_:{"^":"t;0t:x=,0u:y=","%":"DeviceAcceleration"},
o0:{"^":"t;",
j:function(a){return String(a)},
"%":"DOMException"},
o1:{"^":"hW;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"DOMPoint"},
hW:{"^":"t;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":";DOMPointReadOnly"},
o2:{"^":"l0;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.v(c,"$isab",[P.W],"$asab")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.ab,P.W]]},
$asz:function(){return[[P.ab,P.W]]},
$isi:1,
$asi:function(){return[[P.ab,P.W]]},
$isc:1,
$asc:function(){return[[P.ab,P.W]]},
$asD:function(){return[[P.ab,P.W]]},
"%":"ClientRectList|DOMRectList"},
hX:{"^":"t;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gav(a))+" x "+H.l(this.gas(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=J.b3(b)
return a.left===z.gb1(b)&&a.top===z.gbo(b)&&this.gav(a)===z.gav(b)&&this.gas(a)===z.gas(b)},
gU:function(a){return W.fy(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gav(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gcr:function(a){return a.bottom},
gas:function(a){return a.height},
gb1:function(a){return a.left},
gbi:function(a){return a.right},
gbo:function(a){return a.top},
gav:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
$isab:1,
$asab:function(){return[P.W]},
"%":";DOMRectReadOnly"},
o3:{"^":"l2;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
o4:{"^":"t;0m:length=","%":"DOMTokenList"},
kX:{"^":"cB;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.h(z[b],"$isa4")},
l:function(a,b,c){var z
H.E(b)
H.h(c,"$isa4")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga5:function(a){var z=this.d0(this)
return new J.aC(z,z.length,0,[H.x(z,0)])},
aE:function(a,b,c,d){throw H.a(P.cm(null))},
$asz:function(){return[W.a4]},
$asi:function(){return[W.a4]},
$asc:function(){return[W.a4]}},
a4:{"^":"P;",
gcv:function(a){return new W.kX(a,a.children)},
gbB:function(a){return P.je(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
j:function(a){return a.localName},
$isa4:1,
"%":";Element"},
o5:{"^":"aa;0a6:type}","%":"HTMLEmbedElement"},
af:{"^":"t;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"t;",
dL:["eN",function(a,b,c,d){H.f(c,{func:1,args:[W.af]})
if(c!=null)this.f2(a,b,c,!1)}],
f2:function(a,b,c,d){return a.addEventListener(b,H.bD(H.f(c,{func:1,args:[W.af]}),1),!1)},
$isa9:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fE|fF|fH|fI"},
b4:{"^":"cZ;",$isb4:1,"%":"File"},
em:{"^":"l7;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isb4")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b4]},
$asz:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$isem:1,
$asD:function(){return[W.b4]},
"%":"FileList"},
oo:{"^":"a9;0m:length=","%":"FileWriter"},
or:{"^":"aa;0m:length=","%":"HTMLFormElement"},
bf:{"^":"t;",$isbf:1,"%":"Gamepad"},
os:{"^":"dp;0t:x=,0u:y=","%":"Gyroscope"},
ot:{"^":"t;0m:length=","%":"History"},
ou:{"^":"lk;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ca:{"^":"t;0dU:data=",$isca:1,"%":"ImageData"},
ep:{"^":"aa;",$isep:1,"%":"HTMLImageElement"},
eq:{"^":"aa;0a6:type}",$iseq:1,"%":"HTMLInputElement"},
bN:{"^":"dw;",$isbN:1,"%":"KeyboardEvent"},
oA:{"^":"aa;0a6:type}","%":"HTMLLinkElement"},
oB:{"^":"t;",
j:function(a){return String(a)},
"%":"Location"},
oC:{"^":"dp;0t:x=,0u:y=","%":"Magnetometer"},
oE:{"^":"t;0m:length=","%":"MediaList"},
oF:{"^":"a9;",
dL:function(a,b,c,d){H.f(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eN(a,b,c,!1)},
"%":"MessagePort"},
oG:{"^":"lq;",
i:function(a,b){return P.b2(a.get(H.O(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
gat:function(a){var z=H.e([],[P.j])
this.N(a,new W.iQ(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asao:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iQ:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oH:{"^":"lr;",
i:function(a,b){return P.b2(a.get(H.O(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
gat:function(a){var z=H.e([],[P.j])
this.N(a,new W.iR(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asao:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iR:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oI:{"^":"lt;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"MimeTypeArray"},
aM:{"^":"dw;",$isaM:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kW:{"^":"cB;a",
l:function(a,b,c){var z,y
H.E(b)
H.h(c,"$isP")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.en(z,z.length,-1,[H.b7(C.W,z,"D",0)])},
aE:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asz:function(){return[W.P]},
$asi:function(){return[W.P]},
$asc:function(){return[W.P]}},
P:{"^":"a9;",
iz:function(a,b){var z,y
try{z=a.parentNode
J.hq(z,b,a)}catch(y){H.aB(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.eO(a):z},
fX:function(a,b,c){return a.replaceChild(b,c)},
$isP:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iV:{"^":"lv;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"NodeList|RadioNodeList"},
oQ:{"^":"aa;0a6:type}","%":"HTMLOListElement"},
oR:{"^":"aa;0a6:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oV:{"^":"lz;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"PluginArray"},
p_:{"^":"t;0a6:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
p0:{"^":"lF;",
i:function(a,b){return P.b2(a.get(H.O(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
gat:function(a){var z=H.e([],[P.j])
this.N(a,new W.jo(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asao:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jo:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p1:{"^":"aa;0a6:type}","%":"HTMLScriptElement"},
p3:{"^":"aa;0m:length=","%":"HTMLSelectElement"},
dp:{"^":"a9;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bm:{"^":"a9;",$isbm:1,"%":"SourceBuffer"},
p4:{"^":"fF;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"SourceBufferList"},
p5:{"^":"aa;0a6:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
p6:{"^":"lI;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbn")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
p8:{"^":"lL;",
i:function(a,b){return a.getItem(H.O(b))},
l:function(a,b,c){a.setItem(b,H.O(c))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.e([],[P.j])
this.N(a,new W.jL(z))
return z},
gm:function(a){return a.length},
$asao:function(){return[P.j,P.j]},
$isL:1,
$asL:function(){return[P.j,P.j]},
"%":"Storage"},
jL:{"^":"n:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pb:{"^":"aa;0a6:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
ds:{"^":"aa;",$isds:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bq:{"^":"a9;",$isbq:1,"%":"TextTrack"},
br:{"^":"a9;",$isbr:1,"%":"TextTrackCue|VTTCue"},
pg:{"^":"lS;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbr")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asD:function(){return[W.br]},
"%":"TextTrackCueList"},
ph:{"^":"fI;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbq")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asD:function(){return[W.bq]},
"%":"TextTrackList"},
pi:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dw;",$isbu:1,"%":"TouchEvent"},
pj:{"^":"lY;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbt")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asD:function(){return[W.bt]},
"%":"TouchList"},
pk:{"^":"t;0m:length=","%":"TrackDefaultList"},
dw:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pm:{"^":"t;",
j:function(a){return String(a)},
"%":"URL"},
po:{"^":"t;0t:x=","%":"VRStageBoundsPoint"},
pp:{"^":"a9;0m:length=","%":"VideoTrackList"},
bY:{"^":"aM;",
ghT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbY:1,
"%":"WheelEvent"},
kP:{"^":"a9;",
fZ:function(a,b){return a.requestAnimationFrame(H.bD(H.f(b,{func:1,ret:-1,args:[P.W]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pu:{"^":"mp;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"CSSRuleList"},
pv:{"^":"hX;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=J.b3(b)
return a.left===z.gb1(b)&&a.top===z.gbo(b)&&a.width===z.gav(b)&&a.height===z.gas(b)},
gU:function(a){return W.fy(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gav:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"ClientRect|DOMRect"},
px:{"^":"mr;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asz:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"GamepadList"},
py:{"^":"mt;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pz:{"^":"mv;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbo")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
pA:{"^":"mx;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbp")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asD:function(){return[W.bp]},
"%":"StyleSheetList"},
l3:{"^":"dr;a,b,c,$ti",
ia:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
pw:{"^":"l3;a,b,c,$ti"},
l4:{"^":"eS;a,b,c,d,e,$ti",
hi:function(){var z=this.d
if(z!=null&&this.a<=0)J.hr(this.b,this.c,z,!1)},
q:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fZ(new W.l5(c),W.af)
z=new W.l4(0,a,b,z,!1,[e])
z.hi()
return z}}},
l5:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isaf"))}},
D:{"^":"b;$ti",
ga5:function(a){return new W.en(a,this.gm(a),-1,[H.b7(this,a,"D",0)])},
aE:function(a,b,c,d){H.A(d,H.b7(this,a,"D",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
en:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dY(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kY:{"^":"t+hR;"},
l_:{"^":"t+z;"},
l0:{"^":"l_+D;"},
l1:{"^":"t+z;"},
l2:{"^":"l1+D;"},
l6:{"^":"t+z;"},
l7:{"^":"l6+D;"},
lj:{"^":"t+z;"},
lk:{"^":"lj+D;"},
lq:{"^":"t+ao;"},
lr:{"^":"t+ao;"},
ls:{"^":"t+z;"},
lt:{"^":"ls+D;"},
lu:{"^":"t+z;"},
lv:{"^":"lu+D;"},
ly:{"^":"t+z;"},
lz:{"^":"ly+D;"},
lF:{"^":"t+ao;"},
fE:{"^":"a9+z;"},
fF:{"^":"fE+D;"},
lH:{"^":"t+z;"},
lI:{"^":"lH+D;"},
lL:{"^":"t+ao;"},
lR:{"^":"t+z;"},
lS:{"^":"lR+D;"},
fH:{"^":"a9+z;"},
fI:{"^":"fH+D;"},
lX:{"^":"t+z;"},
lY:{"^":"lX+D;"},
mo:{"^":"t+z;"},
mp:{"^":"mo+D;"},
mq:{"^":"t+z;"},
mr:{"^":"mq+D;"},
ms:{"^":"t+z;"},
mt:{"^":"ms+D;"},
mu:{"^":"t+z;"},
mv:{"^":"mu+D;"},
mw:{"^":"t+z;"},
mx:{"^":"mw+D;"}}],["","",,P,{"^":"",
mU:function(a){var z,y
z=J.K(a)
if(!!z.$isca){y=z.gdU(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fK(a.data,a.height,a.width)},
mT:function(a){if(a instanceof P.fK)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var z,y,x,w,v
if(a==null)return
z=P.ey(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.O(y[w])
z.l(0,v,a[v])}return z},
mR:function(a,b){var z={}
a.N(0,new P.mS(z))
return z},
ej:function(){var z=$.ei
if(z==null){z=J.cW(window.navigator.userAgent,"Opera",0)
$.ei=z}return z},
hV:function(){var z,y
z=$.ef
if(z!=null)return z
y=$.eg
if(y==null){y=J.cW(window.navigator.userAgent,"Firefox",0)
$.eg=y}if(y)z="-moz-"
else{y=$.eh
if(y==null){y=!P.ej()&&J.cW(window.navigator.userAgent,"Trident/",0)
$.eh=y}if(y)z="-ms-"
else z=P.ej()?"-o-":"-webkit-"}$.ef=z
return z},
lO:{"^":"b;",
eg:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d2:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isjh)throw H.a(P.cm("structured clone of RegExp"))
if(!!y.$isb4)return a
if(!!y.$iscZ)return a
if(!!y.$isem)return a
if(!!y.$isca)return a
if(!!y.$iseE||!!y.$isdk)return a
if(!!y.$isL){x=this.eg(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.N(a,new P.lQ(z,this))
return z.a}if(!!y.$isc){x=this.eg(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hQ(a,x)}throw H.a(P.cm("structured clone of other type"))},
hQ:function(a,b){var z,y,x,w
z=J.ay(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.d2(z.i(a,w)))
return x}},
lQ:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.d2(b)}},
fK:{"^":"b;dU:a>,b,c",$isca:1},
mS:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
lP:{"^":"lO;a,b"},
i6:{"^":"cB;a,b",
gbu:function(){var z,y,x
z=this.b
y=H.az(z,"z",0)
x=W.a4
return new H.iG(new H.kN(z,H.f(new P.i7(),{func:1,ret:P.ai,args:[y]}),[y]),H.f(new P.i8(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.E(b)
H.h(c,"$isa4")
z=this.gbu()
J.hv(z.b.$1(J.cX(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aE:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.ar(this.gbu().a)},
i:function(a,b){var z=this.gbu()
return z.b.$1(J.cX(z.a,b))},
ga5:function(a){var z=P.iA(this.gbu(),!1,W.a4)
return new J.aC(z,z.length,0,[H.x(z,0)])},
$asz:function(){return[W.a4]},
$asi:function(){return[W.a4]},
$asc:function(){return[W.a4]}},
i7:{"^":"n:48;",
$1:function(a){return!!J.K(H.h(a,"$isP")).$isa4}},
i8:{"^":"n:49;",
$1:function(a){return H.k(H.h(a,"$isP"),"$isa4")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bS:{"^":"b;t:a>,u:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
v:function(a,b){var z,y,x
if(b==null)return!1
z=H.bC(b,"$isbS",[P.W],null)
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gu(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.ba(this.a)
y=J.ba(this.b)
return P.fx(P.c_(P.c_(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bS(z,H.A(x*b,y),this.$ti)}},
lA:{"^":"b;$ti",
gbi:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.x(this,0))},
gcr:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.x(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bC(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gb1(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbo(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gbi(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcr(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.ba(z)
x=this.b
w=J.ba(x)
if(typeof z!=="number")return z.E()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.fx(P.c_(P.c_(P.c_(P.c_(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dT:function(a,b){var z,y
H.v(b,"$isbS",[P.W],"$asbS")
z=b.a
y=this.a
if(typeof z!=="number")return z.d5()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.d5()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ab:{"^":"lA;b1:a>,bo:b>,av:c>,as:d>,$ti",q:{
je:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.ab(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",o6:{"^":"X;0t:x=,0u:y=","%":"SVGFEBlendElement"},o7:{"^":"X;0t:x=,0u:y=","%":"SVGFEColorMatrixElement"},o8:{"^":"X;0t:x=,0u:y=","%":"SVGFEComponentTransferElement"},o9:{"^":"X;0t:x=,0u:y=","%":"SVGFECompositeElement"},oa:{"^":"X;0t:x=,0u:y=","%":"SVGFEConvolveMatrixElement"},ob:{"^":"X;0t:x=,0u:y=","%":"SVGFEDiffuseLightingElement"},oc:{"^":"X;0t:x=,0u:y=","%":"SVGFEDisplacementMapElement"},od:{"^":"X;0t:x=,0u:y=","%":"SVGFEFloodElement"},oe:{"^":"X;0t:x=,0u:y=","%":"SVGFEGaussianBlurElement"},of:{"^":"X;0t:x=,0u:y=","%":"SVGFEImageElement"},og:{"^":"X;0t:x=,0u:y=","%":"SVGFEMergeElement"},oh:{"^":"X;0t:x=,0u:y=","%":"SVGFEMorphologyElement"},oi:{"^":"X;0t:x=,0u:y=","%":"SVGFEOffsetElement"},oj:{"^":"X;0t:x=,0u:y=","%":"SVGFEPointLightElement"},ok:{"^":"X;0t:x=,0u:y=","%":"SVGFESpecularLightingElement"},ol:{"^":"X;0t:x=,0u:y=","%":"SVGFESpotLightElement"},om:{"^":"X;0t:x=,0u:y=","%":"SVGFETileElement"},on:{"^":"X;0t:x=,0u:y=","%":"SVGFETurbulenceElement"},op:{"^":"X;0t:x=,0u:y=","%":"SVGFilterElement"},oq:{"^":"bL;0t:x=,0u:y=","%":"SVGForeignObjectElement"},ib:{"^":"bL;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bL:{"^":"X;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ov:{"^":"bL;0t:x=,0u:y=","%":"SVGImageElement"},bO:{"^":"t;",$isbO:1,"%":"SVGLength"},oz:{"^":"lm;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbO")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asD:function(){return[P.bO]},
"%":"SVGLengthList"},oD:{"^":"X;0t:x=,0u:y=","%":"SVGMaskElement"},bR:{"^":"t;",$isbR:1,"%":"SVGNumber"},oP:{"^":"lx;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbR")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$asD:function(){return[P.bR]},
"%":"SVGNumberList"},oU:{"^":"X;0t:x=,0u:y=","%":"SVGPatternElement"},oW:{"^":"t;0t:x=,0u:y=","%":"SVGPoint"},oX:{"^":"t;0m:length=","%":"SVGPointList"},oY:{"^":"t;0t:x=,0u:y=","%":"SVGRect"},oZ:{"^":"ib;0t:x=,0u:y=","%":"SVGRectElement"},p2:{"^":"X;0a6:type}","%":"SVGScriptElement"},p9:{"^":"lN;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},pc:{"^":"X;0a6:type}","%":"SVGStyleElement"},X:{"^":"a4;",
gcv:function(a){return new P.i6(a,new W.kW(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},pd:{"^":"bL;0t:x=,0u:y=","%":"SVGSVGElement"},jQ:{"^":"bL;","%":"SVGTextPathElement;SVGTextContentElement"},pf:{"^":"jQ;0t:x=,0u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bU:{"^":"t;",$isbU:1,"%":"SVGTransform"},pl:{"^":"m_;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbU")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bU]},
$isi:1,
$asi:function(){return[P.bU]},
$isc:1,
$asc:function(){return[P.bU]},
$asD:function(){return[P.bU]},
"%":"SVGTransformList"},pn:{"^":"bL;0t:x=,0u:y=","%":"SVGUseElement"},ll:{"^":"t+z;"},lm:{"^":"ll+D;"},lw:{"^":"t+z;"},lx:{"^":"lw+D;"},lM:{"^":"t+z;"},lN:{"^":"lM+D;"},lZ:{"^":"t+z;"},m_:{"^":"lZ+D;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isk5:1}}],["","",,P,{"^":"",nI:{"^":"t;0m:length=","%":"AudioBuffer"},e2:{"^":"a9;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nJ:{"^":"kV;",
i:function(a,b){return P.b2(a.get(H.O(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
gat:function(a){var z=H.e([],[P.j])
this.N(a,new P.hz(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asao:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"AudioParamMap"},hz:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hA:{"^":"e2;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nK:{"^":"a9;0m:length=","%":"AudioTrackList"},hD:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nL:{"^":"e2;0a6:type}","%":"BiquadFilterNode"},oS:{"^":"hD;0m:length=","%":"OfflineAudioContext"},oT:{"^":"hA;0a6:type}","%":"Oscillator|OscillatorNode"},kV:{"^":"t+ao;"}}],["","",,P,{"^":"",dn:{"^":"t;",
iG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mT(g))
return}if(!!z.$isep)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c7("Incorrect number or type of arguments"))},
iF:function(a,b,c,d,e,f,g){return this.iG(a,b,c,d,e,f,g,null,null,null)},
$isdn:1,
"%":"WebGLRenderingContext"},jR:{"^":"t;",$isjR:1,"%":"WebGLTexture"},ke:{"^":"t;",$iske:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p7:{"^":"lK;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.b2(a.item(b))},
l:function(a,b,c){H.E(b)
H.h(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asz:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isc:1,
$asc:function(){return[[P.L,,,]]},
$asD:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},lJ:{"^":"t+z;"},lK:{"^":"lJ+D;"}}],["","",,O,{"^":"",at:{"^":"b;0a,0b,0c,0d,$ti",
bs:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
d6:function(a,b,c){var z=H.az(this,"at",0)
H.f(b,{func:1,ret:P.ai,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
b7:function(a,b){return this.d6(a,null,b)},
dA:function(a){var z
H.v(a,"$isi",[H.az(this,"at",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dd:function(a,b){var z
H.v(b,"$isi",[H.az(this,"at",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga5:function(a){var z=this.a
return new J.aC(z,z.length,0,[H.x(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"at",0)
H.A(b,z)
z=[z]
if(this.dA(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dd(x,H.e([b],z))}},
cm:function(a,b){var z,y
H.v(b,"$isi",[H.az(this,"at",0)],"$asi")
if(this.dA(b)){z=this.a
y=z.length
C.a.cm(z,b)
this.dd(y,b)}},
$isi:1,
q:{
d4:function(a){var z=new O.at([a])
z.bs(a)
return z}}},dh:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
eW:function(a){var z=this.b
if(!(z==null))z.D(a)},
aK:function(){return this.eW(null)},
ga2:function(a){var z=this.a
if(z.length>0)return C.a.gaG(z)
else return V.bi()},
bT:function(a){var z=this.a
if(a==null)C.a.h(z,V.bi())
else C.a.h(z,a)
this.aK()},
aH:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",cY:{"^":"b;"},aV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.gey(),{func:1,ret:-1,args:[D.q]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.gey(),{func:1,ret:-1,args:[D.q]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eO])
w.b=!0
this.b4(w)}},
ap:function(a,b){var z
for(z=this.y.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();)z.d.ap(0,b)},
ab:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga2(z))
z.aK()
a.cU(this.f)
z=a.dy
y=(z&&C.a).gaG(z)
if(y!=null&&this.d!=null)y.eA(a,this)
for(z=this.y.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();)z.d.ab(a)
a.cT()
a.dx.aH()},
gw:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
b4:function(a){var z=this.z
if(!(z==null))z.D(a)},
X:function(){return this.b4(null)},
ik:[function(a){H.h(a,"$isq")
this.e=null
this.b4(a)},function(){return this.ik(null)},"jt","$1","$0","gey",0,2,1],
ii:[function(a){this.b4(H.h(a,"$isq"))},function(){return this.ii(null)},"jr","$1","$0","gex",0,2,1],
jq:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aV],"$asi")
for(z=b.length,y=this.gex(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bd()
t.a=H.e([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.X()},"$2","gih",8,0,9],
js:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aV],"$asi")
for(z=b.length,y=this.gex(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bd()
t.a=H.e([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.f(y,x)
C.a.H(t.a,y)}}this.X()},"$2","gij",8,0,9],
$isaN:1,
q:{
el:function(a,b,c,d,e,f){var z,y
z=new E.aV()
z.a=d
z.b=!0
y=O.d4(E.aV)
z.y=y
y.b7(z.gih(),z.gij())
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
z.sa8(0,e)
return z}}},jj:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eT:function(a,b){var z,y,x,w,v
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
z=new O.dh()
y=[V.aJ]
z.a=H.e([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.q]}
v=H.f(new E.jl(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dh()
z.a=H.e([],y)
v=z.gw()
v.toString
x=H.f(new E.jm(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dh()
z.a=H.e([],y)
y=z.gw()
y.toString
w=H.f(new E.jn(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cl])
this.dy=z
C.a.h(z,null)
this.fr=new H.b5(0,0,[P.j,A.dq])},
giu:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga2(z)
y=this.db
y=z.k(0,y.ga2(y))
this.z=y
z=y}return z},
cU:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaG(z):a;(z&&C.a).h(z,y)},
cT:function(){var z=this.dy
if(z.length>1)z.pop()},
dO:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.bC(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.l(0,z,a)},
q:{
jk:function(a,b){var z=new E.jj(a,b)
z.eT(a,b)
return z}}},jl:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.z=null
z.ch=null}},jm:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jn:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.ch=null
z.cx=null}},jX:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
eY:[function(a){var z
H.h(a,"$isq")
z=this.x
if(!(z==null))z.D(a)
this.iA()},function(){return this.eY(null)},"eX","$1","$0","gde",0,2,1],
gi2:function(){var z,y,x
z=Date.now()
y=C.d.a4(P.ek(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
dD:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cI(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cI(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
iA:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jZ(this),{func:1,ret:-1,args:[P.W]})
C.B.fd(z)
C.B.fZ(z,W.fZ(y,P.W))}},
iy:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dD()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.ek(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aK()
w=x.db
C.a.sm(w.a,0)
w.aK()
w=x.dx
C.a.sm(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ab(this.e)}}catch(v){z=H.aB(v)
y=H.bF(v)
P.dV("Error: "+H.l(z))
P.dV("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jY:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$isd2)return E.eV(a,!0,!0,!0,!1)
y=W.d3(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcv(a).h(0,y)
w=E.eV(y,!0,!0,!0,!1)
w.a=a
return w},
eV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jX()
y=P.iv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bY(a,"webgl",y)
x=H.h(x==null?C.l.bY(a,"experimental-webgl",y):x,"$isdn")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jk(x,a)
w=new T.jS(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kr(a)
v=new X.io()
v.c=new X.aL(!1,!1,!1)
v.d=P.iy(null,null,null,P.m)
w.b=v
v=new X.iS(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iC(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.k2(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eS,P.b]])
w.z=v
u=document
t=W.aM
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.f(w.gfz(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.f(w.gfC(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.f(w.gft(),q),!1,r))
v=w.z
p=W.bN
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.f(w.gfE(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.f(w.gfD(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.f(w.gfH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.f(w.gfJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.f(w.gfI(),s),!1,t))
p=w.z
o=W.bY;(p&&C.a).h(p,W.a3(a,H.O(W.i0(a)),H.f(w.gfK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.f(w.gfA(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.f(w.gfB(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.f(w.gfL(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.f(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.f(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.f(w.gfS(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.dD()
return z}}},jZ:{"^":"n:31;a",
$1:function(a){var z
H.hg(a)
z=this.a
if(z.z){z.z=!1
z.iy()}}}}],["","",,Z,{"^":"",fr:{"^":"b;a,b",q:{
dC:function(a,b,c){var z
H.v(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bz(c)),35044)
a.bindBuffer(b,null)
return new Z.fr(b,z)}}},e6:{"^":"cY;a,b,c,d,e",
a1:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aB(y)
x=P.u('Failed to bind buffer attribute "'+J.ae(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.ae(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fs:{"^":"b;a",$isnM:1},d1:{"^":"b;a,0b,c,d",
aF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a1:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a1(a)},
aI:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ab:function(a){var z,y,x,w,v
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
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.G(y,", ")+"\nAttrs:   "+C.a.G(u,", ")},
$ispe:1},cA:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bw:{"^":"b;a",
gd8:function(a){var z,y
z=this.a
y=(z&$.$get$aF().a)!==0?3:0
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$b_().a)!==0)y+=2
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$bW().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=4
if((z&$.$get$bx().a)!==0)++y
return(z&$.$get$aX().a)!==0?y+4:y},
hK:function(a){var z,y,x
z=$.$get$aF()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fq()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bw))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.j])
y=this.a
if((y&$.$get$aF().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b0().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bW().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.G(z,"|")},
q:{
ax:function(a){return new Z.bw(a)}}}}],["","",,D,{"^":"",e9:{"^":"b;"},bd:{"^":"b;0a,0b,0c",
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.q(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.i4(z))
return x!==0},
hU:function(){return this.D(null)},
iB:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.D(y)}}},
au:function(a){return this.iB(a,!0,!1)},
q:{
I:function(){var z=new D.bd()
z.a=H.e([],[{func:1,ret:-1,args:[D.q]}])
z.c=0
return z}}},i4:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.q]})
z=this.a.a
z.b
a.$1(z)}},q:{"^":"b;a,0b"},cb:{"^":"q;c,d,a,0b,$ti"},cc:{"^":"q;c,d,a,0b,$ti"},H:{"^":"q;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e7:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e7))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
q:{"^":"nO<"}},ev:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ev))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},ew:{"^":"q;c,a,0b"},io:{"^":"b;0a,0b,0c,0d",
ir:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ew(a,this)
y.b=!0
return z.D(y)},
im:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ew(a,this)
y.b=!0
return z.D(y)}},eA:{"^":"cD;x,y,c,d,e,a,0b"},iC:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ay:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.E(0,new V.M(x*w,v*u))
u=this.a.gaV()
s=new X.bP(a,new V.M(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cS:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.D(this.ay(a,b))
return!0},
bg:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.bX()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.ay(a,b))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.ay(a,b))
return!0},
is:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.di(new V.Z(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.D(w)
return!0},
fG:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.eA(c,a,this.a.gaV(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=new V.M(0,0)}},aL:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aL))return!1
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
return z+(this.c?"Shift+":"")}},bP:{"^":"cD;x,y,z,Q,ch,c,d,e,a,0b"},iS:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaV()
x=new X.bP(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cS:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.c6(a,b,!0))
return!0},
bg:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.bX()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.c6(a,b,!0))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.c6(a,b,!1))
return!0},
it:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.di(new V.Z(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdW:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gbW:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
gew:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},di:{"^":"cD;x,c,d,e,a,0b"},cD:{"^":"q;"},eZ:{"^":"cD;x,y,z,Q,ch,c,d,e,a,0b"},k2:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ay:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.M],"$asc")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gaV()
w=new X.eZ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iq:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.D(this.ay(a,!0))
return!0},
io:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.D(this.ay(a,!0))
return!0},
ip:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.D(this.ay(a,!1))
return!0}},kr:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaV:function(){var z=this.a
return V.eN(0,0,(z&&C.l).gbB(z).c,C.l.gbB(z).d)},
dr:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ev(z,new X.aL(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
cl:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
aA:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.M(y-w,x-v)},
b8:function(a){return new V.Z(a.movementX,a.movementY)},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.h.aj(u.pageX)
C.h.aj(u.pageY)
s=z.left
C.h.aj(u.pageX)
C.a.h(y,new V.M(t-s,C.h.aj(u.pageY)-z.top))}return y},
aw:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e7(z,new X.aL(y,a.altKey,a.shiftKey))},
j1:[function(a){this.f=!0},"$1","gfC",4,0,4],
iV:[function(a){this.f=!1},"$1","gft",4,0,4],
iZ:[function(a){if(this.f)a.preventDefault()},"$1","gfz",4,0,4],
j3:[function(a){var z
H.h(a,"$isbN")
if(!this.f)return
z=this.dr(a)
if(this.b.ir(z))a.preventDefault()},"$1","gfE",4,0,21],
j2:[function(a){var z
H.h(a,"$isbN")
if(!this.f)return
z=this.dr(a)
if(this.b.im(z))a.preventDefault()},"$1","gfD",4,0,21],
j5:[function(a){var z,y,x,w
H.h(a,"$isaM")
z=this.a
z.focus()
this.f=!0
this.aT(a)
if(this.x){y=this.aw(a)
x=this.b8(a)
if(this.d.cS(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aw(a)
w=this.aA(a)
if(this.c.cS(y,w))a.preventDefault()},"$1","gfH",4,0,5],
j7:[function(a){var z,y,x
H.h(a,"$isaM")
this.aT(a)
z=this.aw(a)
if(this.x){y=this.b8(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","gfJ",4,0,5],
j0:[function(a){var z,y,x,w
H.h(a,"$isaM")
z=this.a
if(!(z&&C.l).gbB(z).dT(0,new P.bS(a.clientX,a.clientY,[P.W]))){this.aT(a)
y=this.aw(a)
if(this.x){x=this.b8(a)
if(this.d.bg(y,x))a.preventDefault()
return}if(this.r)return
w=this.aA(a)
if(this.c.bg(y,w))a.preventDefault()}},"$1","gfB",4,0,5],
j6:[function(a){var z,y,x
H.h(a,"$isaM")
this.aT(a)
z=this.aw(a)
if(this.x){y=this.b8(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gfI",4,0,5],
j_:[function(a){var z,y,x,w
H.h(a,"$isaM")
z=this.a
if(!(z&&C.l).gbB(z).dT(0,new P.bS(a.clientX,a.clientY,[P.W]))){this.aT(a)
y=this.aw(a)
if(this.x){x=this.b8(a)
if(this.d.bf(y,x))a.preventDefault()
return}if(this.r)return
w=this.aA(a)
if(this.c.bf(y,w))a.preventDefault()}},"$1","gfA",4,0,5],
j8:[function(a){var z,y
H.h(a,"$isbY")
this.aT(a)
z=new V.Z((a&&C.A).ghS(a),C.A.ghT(a)).p(0,180)
if(this.x){if(this.d.is(z))a.preventDefault()
return}if(this.r)return
y=this.aA(a)
if(this.c.it(z,y))a.preventDefault()},"$1","gfK",4,0,44],
j9:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aw(this.y)
v=this.aA(this.y)
this.d.fG(w,v,x)}},"$1","gfL",4,0,4],
jh:[function(a){var z
H.h(a,"$isbu")
this.a.focus()
this.f=!0
this.cl(a)
z=this.ce(a)
if(this.e.iq(z))a.preventDefault()},"$1","gfT",4,0,13],
jf:[function(a){var z
H.h(a,"$isbu")
this.cl(a)
z=this.ce(a)
if(this.e.io(z))a.preventDefault()},"$1","gfR",4,0,13],
jg:[function(a){var z
H.h(a,"$isbu")
this.cl(a)
z=this.ce(a)
if(this.e.ip(z))a.preventDefault()},"$1","gfS",4,0,13]}}],["","",,D,{"^":"",cx:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
aL:[function(a){var z
H.h(a,"$isq")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aL(null)},"iL","$1","$0","geZ",0,2,1],
$isa5:1,
$isaN:1},a5:{"^":"b;",$isaN:1},ip:{"^":"at;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
aL:function(a){var z=this.Q
if(!(z==null))z.D(a)},
fF:[function(a){var z
H.h(a,"$isq")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.fF(null)},"j4","$1","$0","gdz",0,2,1],
ja:[function(a){var z,y,x
H.v(a,"$isi",[D.a5],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f9(x))return!1}return!0},"$1","gfM",4,0,37],
iS:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdz(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.h(b[u],"$isa5")
if(t instanceof D.cx)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bd()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cb(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gfp",8,0,22],
jc:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdz(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.h(b[u],"$isa5")
if(t instanceof D.cx)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.bd()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.H(s.a,x)}z=new D.cc(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gfO",8,0,22],
f9:function(a){var z=C.a.bb(this.e,a)
return z},
$asi:function(){return[D.a5]},
$asat:function(){return[D.a5]}},j0:{"^":"b;",$isa5:1,$isaN:1},jI:{"^":"b;",$isa5:1,$isaN:1},jU:{"^":"b;",$isa5:1,$isaN:1},jV:{"^":"b;",$isa5:1,$isaN:1},jW:{"^":"b;",$isa5:1,$isaN:1}}],["","",,V,{"^":"",
nQ:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iP",8,0,35],
nD:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.br(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.h.eE($.p.$2(a,0)?0:a,b),c+b+1)},
bE:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.w],"$asc")
z=H.e([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.l(z,u,C.b.ai(z[u],x))}return z},
dU:function(a,b){return C.h.iI(Math.pow(b,C.I.cI(Math.log(H.mQ(a))/Math.log(b))))},
a1:{"^":"b;a,b,c",
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
return new V.a1(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
am:{"^":"b;a,b,c,d",
d0:function(a){return H.e([this.a,this.b,this.c,this.d],[P.w])},
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
return new V.am(z,y,x,w)},
v:function(a,b){var z
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
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cC:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscC")
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
return new V.cC(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
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
z=[P.w]
y=V.bE(H.e([this.a,this.d,this.r],z),3,0)
x=V.bE(H.e([this.b,this.e,this.x],z),3,0)
w=V.bE(H.e([this.c,this.f,this.y],z),3,0)
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
aJ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cM:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bi()
a3=1/a2
a4=-w
a5=-i
return V.aK((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isaJ")
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
return V.aK(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.y(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.S(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
j:function(a){return this.O()},
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bE(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bE(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bE(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bE(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.eh("",3,0)},
F:function(a){return this.eh(a,3,0)},
q:{
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bi:function(){return V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eD:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.B(c)))
y=b.aB(z)
x=y.p(0,Math.sqrt(y.B(y)))
w=z.aB(x)
v=new V.y(a.a,a.b,a.c)
return V.aK(x.a,w.a,z.a,x.R(0).B(v),x.b,w.b,z.b,w.R(0).B(v),x.c,w.c,z.c,z.R(0).B(v),0,0,0,1)}}},
M:{"^":"b;t:a>,u:b>",
E:function(a,b){return new V.M(this.a+b.a,this.b+b.b)},
M:function(a,b){return new V.M(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.M(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.M(0,0)
return new V.M(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
S:{"^":"b;t:a>,u:b>,c",
E:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.S(0,0,0)
return new V.S(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aO:{"^":"b;t:a>,u:b>,c,d",
k:function(a,b){return new V.aO(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eM:{"^":"b;t:a>,u:b>,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eM))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
q:{
eN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eM(a,b,c,d)}}},
Z:{"^":"b;a,b",
er:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){var z,y,x,w
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
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
y:{"^":"b;a,b,c",
er:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cN:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.y(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aB:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.y(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.y(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.y(0,0,0)
return new V.y(this.a/b,this.b/b,this.c/b)},
eq:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bV:{"^":"b;a,b,c,d",
er:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bV(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bV(0,0,0,0)
return new V.bV(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bV))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hK:{"^":"e9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c1:function(a){var z=V.nD(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.D(a)},
sd3:function(a,b){},
scO:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c1(z)}z=new D.H("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.T(z)}},
scQ:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c1(z)}z=new D.H("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.T(z)}},
sZ:function(a,b){var z,y
b=this.c1(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.w])
z.b=!0
this.T(z)}},
scP:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.w])
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
z=new D.H("velocity",x,a,this,[P.w])
z.b=!0
this.T(z)}},
scA:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.w])
z.b=!0
this.T(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
q:{
d5:function(){var z=new U.hK()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eb:{"^":"ak;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
b6:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eb))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
q:{
ec:function(a){var z=new U.eb()
z.a=a
return z}}},eo:{"^":"at;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
T:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.T(null)},"am","$1","$0","gaM",0,2,1],
iR:[function(a,b){var z,y,x,w,v,u,t
z=U.ak
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaM(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cb(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfo",8,0,23],
jb:[function(a,b){var z,y,x,w,v,u,t
z=U.ak
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaM(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.H(t.a,x)}}z=new D.cc(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfN",8,0,23],
b6:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aC(z,z.length,0,[H.x(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.b6(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bi():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.ak]},
$asat:function(){return[U.ak]},
$isak:1},ak:{"^":"e9;"},ks:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
T:[function(a){var z
H.h(a,"$isq")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.T(null)},"am","$1","$0","gaM",0,2,1],
b9:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdW()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc9(),y)
C.a.h(z.a,x)
x=this.a.c.gew()
x.toString
z=H.f(this.gca(),y)
C.a.h(x.a,z)
z=this.a.c.gbW()
z.toString
y=H.f(this.gcb(),y)
C.a.h(z.a,y)
return!0},
fk:[function(a){H.h(a,"$isq")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc9",4,0,2],
fl:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbP")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.Z(y.a,y.b).k(0,2).p(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.Z(x.a,x.b).k(0,2).p(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.R()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
this.b.sV(0)
y=y.M(0,a.z)
this.Q=new V.Z(y.a,y.b).k(0,2).p(0,z.gaa())}this.am()},"$1","gca",4,0,2],
fm:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.am()}},"$1","gcb",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aK(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isak:1},kt:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
T:[function(a){var z
H.h(a,"$isq")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.T(null)},"am","$1","$0","gaM",0,2,1],
b9:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdW()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc9(),y)
C.a.h(z.a,x)
x=this.a.c.gew()
x.toString
z=H.f(this.gca(),y)
C.a.h(x.a,z)
z=this.a.c.gbW()
z.toString
x=H.f(this.gcb(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.I()
x.f=z}x=H.f(this.gfh(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.gfi(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.I()
x.b=z}x=H.f(this.ghh(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.ghg(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.I()
x.c=z}y=H.f(this.ghf(),y)
C.a.h(z.a,y)
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.Z(z,y)},
fk:[function(a){a=H.k(H.h(a,"$isq"),"$isbP")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc9",4,0,2],
fl:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbP")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.aq(new V.Z(y.a,y.b).k(0,2).p(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aq(new V.Z(x.a,x.b).k(0,2).p(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.aq(new V.Z(y.a,y.b).k(0,2).p(0,z.gaa()))}this.am()},"$1","gca",4,0,2],
fm:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.am()}},"$1","gcb",4,0,2],
iO:[function(a){if(H.k(H.h(a,"$isq"),"$iseA").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfh",4,0,2],
iP:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbP")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aq(new V.Z(x.a,x.b).k(0,2).p(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.aq(new V.Z(y.a,y.b).k(0,2).p(0,z.gaa()))
this.am()},"$1","gfi",4,0,2],
jl:[function(a){H.h(a,"$isq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghh",4,0,2],
jk:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$iseZ")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.aq(new V.Z(y.a,y.b).k(0,2).p(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aq(new V.Z(x.a,x.b).k(0,2).p(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.aq(new V.Z(y.a,y.b).k(0,2).p(0,z.gaa()))}this.am()},"$1","ghg",4,0,2],
jj:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.am()}},"$1","ghf",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aK(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aK(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isak:1},ku:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.D(a)},
b9:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=H.f(this.gfn(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iQ:[function(a){var z,y,x,w
H.h(a,"$isq")
if(!J.F(this.b,this.a.b.c))return
H.k(a,"$isdi")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.w])
z.b=!0
this.T(z)}},"$1","gfn",4,0,2],
b6:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aK(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isak:1}}],["","",,M,{"^":"",hL:{"^":"at;0e,0f,0a,0b,0c,0d",
gw:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a3:[function(a){var z
H.h(a,"$isq")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a3(null)},"df","$1","$0","ga_",0,2,1],
jd:[function(a,b){var z,y,x,w,v,u,t
z=M.aP
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cb(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfP",8,0,24],
je:[function(a,b){var z,y,x,w,v,u,t
z=M.aP
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.H(t.a,x)}}z=new D.cc(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfQ",8,0,24],
ab:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();){y=z.d
if(!(y==null))y.ab(a)}this.e=!1},
$asi:function(){return[M.aP]},
$asat:function(){return[M.aP]},
$isaP:1},hQ:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a3:[function(a){var z
H.h(a,"$isq")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a3(null)},"df","$1","$0","ga_",0,2,1],
sba:function(a){var z,y,x
if(a==null)a=new X.ic()
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cu])
z.b=!0
this.a3(z)}},
sbj:function(a,b){var z,y,x
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dt])
z.b=!0
this.a3(z)}},
sbk:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cl])
z.b=!0
this.a3(z)}},
ab:function(a){a.cU(this.c)
this.b.a1(a)
this.a.a1(a)
this.d.ap(0,a)
this.d.ab(a)
this.a.aI(a)
this.b.toString
a.cT()},
$isaP:1},i2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.h(a,"$isq")
z=this.x
if(!(z==null))z.D(a)},function(){return this.a3(null)},"df","$1","$0","ga_",0,2,1],
iX:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aV
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bd()
s.a=H.e([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cb(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfv",8,0,9],
iY:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aV
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bd()
s.a=H.e([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.f(x,w)
C.a.H(s.a,x)}}z=new D.cc(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfw",8,0,9],
sba:function(a){var z,y,x
if(a==null)a=X.eI(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cu])
z.b=!0
this.a3(z)}},
sbj:function(a,b){var z,y,x
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dt])
z.b=!0
this.a3(z)}},
sbk:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.ga_(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cl])
z.b=!0
this.a3(z)}},
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ab:function(a){var z
a.cU(this.c)
this.b.a1(a)
this.a.a1(a)
z=this.c
if(z!=null)z.ap(0,a)
for(z=this.d.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();)z.d.ap(0,a)
for(z=this.d.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();)z.d.ab(a)
this.a.toString
a.cy.aH()
a.db.aH()
this.b.toString
a.cT()},
$isaP:1},aP:{"^":"b;"}}],["","",,A,{"^":"",e1:{"^":"b;a,b,c"},hy:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eC:{"^":"dq;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0b_,0aD,0b0,0bD,0dX,0dY,0bE,0bF,0dZ,0e_,0bG,0bH,0e0,0e1,0bI,0e2,0e3,0bJ,0e4,0e5,0bK,0bL,0bM,0e6,0e7,0bN,0bO,0e8,0e9,0bP,0ea,0cC,0eb,0cD,0ec,0cE,0ed,0cF,0ee,0cG,0ef,0cH,a,b,0c,0d,0e,0f,0r",
eS:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.av("")
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
a1.hk(z)
a1.hr(z)
a1.hl(z)
a1.hz(z)
a1.hA(z)
a1.ht(z)
a1.hE(z)
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
z=new P.av("")
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
v.ho(z)
v.hj(z)
v.hm(z)
v.hp(z)
v.hx(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hv(z)
v.hw(z)}v.hs(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.e([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.G(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hn(z)
v.hu(z)
v.hy(z)
v.hB(z)
v.hC(z)
v.hD(z)
v.hq(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.j])
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
n="vec4("+C.a.G(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ep(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaR")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaR")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaR")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaR")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdy")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaR")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaR")
this.k3=H.e([],[A.aR])
y=a1.b_
if(y>0){this.k2=H.h(this.r.n(0,"bendMatCount"),"$isR")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaR"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isaw")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isR")
break
case C.e:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isR")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isaw")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isR")
break
case C.e:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isR")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.b_=H.k(this.r.n(0,"diffuseTxt"),"$isaw")
this.b0=H.k(this.r.n(0,"nullDiffuseTxt"),"$isR")
break
case C.e:this.aD=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.b0=H.k(this.r.n(0,"nullDiffuseTxt"),"$isR")
break}}y=a1.d
if(y!==C.c){this.bD=H.k(this.r.n(0,"invDiffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dX=H.k(this.r.n(0,"invDiffuseTxt"),"$isaw")
this.bE=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break
case C.e:this.dY=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bE=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a1.e
if(y!==C.c){this.bH=H.k(this.r.n(0,"shininess"),"$isa_")
this.bF=H.k(this.r.n(0,"specularClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dZ=H.k(this.r.n(0,"specularTxt"),"$isaw")
this.bG=H.k(this.r.n(0,"nullSpecularTxt"),"$isR")
break
case C.e:this.e_=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bG=H.k(this.r.n(0,"nullSpecularTxt"),"$isR")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.e0=H.k(this.r.n(0,"bumpTxt"),"$isaw")
this.bI=H.k(this.r.n(0,"nullBumpTxt"),"$isR")
break
case C.e:this.e1=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bI=H.k(this.r.n(0,"nullBumpTxt"),"$isR")
break}if(a1.dy){this.e2=H.k(this.r.n(0,"envSampler"),"$isap")
this.e3=H.k(this.r.n(0,"nullEnvTxt"),"$isR")
y=a1.r
if(y!==C.c){this.bJ=H.k(this.r.n(0,"reflectClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.e4=H.k(this.r.n(0,"reflectTxt"),"$isaw")
this.bK=H.k(this.r.n(0,"nullReflectTxt"),"$isR")
break
case C.e:this.e5=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.bK=H.k(this.r.n(0,"nullReflectTxt"),"$isR")
break}}y=a1.x
if(y!==C.c){this.bL=H.k(this.r.n(0,"refraction"),"$isa_")
this.bM=H.k(this.r.n(0,"refractClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.e6=H.k(this.r.n(0,"refractTxt"),"$isaw")
this.bN=H.k(this.r.n(0,"nullRefractTxt"),"$isR")
break
case C.e:this.e7=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bN=H.k(this.r.n(0,"nullRefractTxt"),"$isR")
break}}}y=a1.y
if(y!==C.c){this.bO=H.k(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.f:this.e8=H.k(this.r.n(0,"alphaTxt"),"$isaw")
this.bP=H.k(this.r.n(0,"nullAlphaTxt"),"$isR")
break
case C.e:this.e9=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bP=H.k(this.r.n(0,"nullAlphaTxt"),"$isR")
break}}this.cC=H.e([],[A.fb])
this.cD=H.e([],[A.fc])
this.cE=H.e([],[A.fd])
this.cF=H.e([],[A.fe])
this.cG=H.e([],[A.ff])
this.cH=H.e([],[A.fg])
if(a1.k2){y=a1.z
if(y>0){this.ea=H.h(this.r.n(0,"dirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.cC;(x&&C.a).h(x,new A.fb(m,l,k))}}y=a1.Q
if(y>0){this.eb=H.h(this.r.n(0,"pntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isa_")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa_")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.cD;(x&&C.a).h(x,new A.fc(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ec=H.h(this.r.n(0,"spotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa_")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.cE;(x&&C.a).h(x,new A.fd(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ed=H.h(this.r.n(0,"txtDirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isaw")
x=this.cF;(x&&C.a).h(x,new A.fe(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ee=H.h(this.r.n(0,"txtPntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdy")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isR")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isap")
x=this.cG;(x&&C.a).h(x,new A.ff(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ef=H.h(this.r.n(0,"txtSpotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isaw")
x=this.cH;(x&&C.a).h(x,new A.fg(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
an:function(a,b,c){b.a.uniform1i(b.d,1)},
af:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.d7(c)
b.a.uniform1i(b.d,0)}},
q:{
iJ:function(a,b){var z,y
z=a.aD
y=new A.eC(b,z)
y.dc(b,z)
y.eS(a,b)
return y}}},iM:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,b_,aD,b0",
hk:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.b_+"];\n"
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
hr:function(a){var z
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
hl:function(a){var z
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
hz:function(a){var z,y
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
hA:function(a){var z,y
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
ht:function(a){var z
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
hE:function(a){var z
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
ax:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aJ(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ho:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ax(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hj:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ax(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hm:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hp:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hx:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ax(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hs:function(a){var z,y
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
case C.e:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hv:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ax(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hw:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ax(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hn:function(a){var z,y
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
hu:function(a){var z,y
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
hy:function(a){var z,y
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
hB:function(a){var z,y,x
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
hC:function(a){var z,y,x
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
hD:function(a){var z,y,x
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
hq:function(a){var z
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
j:function(a){return this.aD}},fb:{"^":"b;a,b,c"},fe:{"^":"b;a,b,c,d,e,f,r,x"},fc:{"^":"b;a,b,c,d,e,f,r"},ff:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fd:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fg:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dq:{"^":"cY;",
dc:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
ep:function(a,b,c){var z,y,x
this.c=this.ds(b,35633)
this.d=this.ds(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.h2(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.u("Failed to link shader: "+H.l(x)))}this.ha()
this.hc()},
a1:function(a){a.a.useProgram(this.e)
this.f.hV()},
ds:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.h2(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
ha:function(){var z,y,x,w,v,u
z=H.e([],[A.e1])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.e1(y,v.name,u))}this.f=new A.hy(z)},
hc:function(){var z,y,x,w,v,u
z=H.e([],[A.ag])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hR(v.type,v.size,v.name,u))}this.r=new A.kd(z)},
aQ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.R(z,y,b,c)
else return A.dx(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aw(z,y,b,c)
else return A.dx(z,y,b,a,c)},
fb:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dx(z,y,b,a,c)},
bw:function(a,b){return new P.fv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hR:function(a,b,c,d){switch(a){case 5120:return this.aQ(b,c,d)
case 5121:return this.aQ(b,c,d)
case 5122:return this.aQ(b,c,d)
case 5123:return this.aQ(b,c,d)
case 5124:return this.aQ(b,c,d)
case 5125:return this.aQ(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.k8(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.kb(this.a,this.e,c,d)
case 35667:return new A.k9(this.a,this.e,c,d)
case 35668:return new A.ka(this.a,this.e,c,d)
case 35669:return new A.kc(this.a,this.e,c,d)
case 35674:return new A.kf(this.a,this.e,c,d)
case 35675:return new A.dy(this.a,this.e,c,d)
case 35676:return new A.aR(this.a,this.e,c,d)
case 35678:return this.fa(b,c,d)
case 35680:return this.fb(b,c,d)
case 35670:throw H.a(this.bw("BOOL",c))
case 35671:throw H.a(this.bw("BOOL_VEC2",c))
case 35672:throw H.a(this.bw("BOOL_VEC3",c))
case 35673:throw H.a(this.bw("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cv:{"^":"b;a,b",
j:function(a){return this.b}},eP:{"^":"dq;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ag:{"^":"b;"},kd:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.O()},
i1:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].j(0)+a
return x},
O:function(){return this.i1("\n")}},R:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},k9:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},ka:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},kc:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},k7:{"^":"ag;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dx:function(a,b,c,d,e){var z=new A.k7(a,b,c,e)
z.f=d
z.e=P.iz(d,0,!1,P.m)
return z}}},a_:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},k8:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},kb:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},kf:{"^":"ag;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dy:{"^":"ag;a,b,c,d",
al:function(a){var z=new Float32Array(H.bz(H.v(a,"$isc",[P.w],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aR:{"^":"ag;a,b,c,d",
al:function(a){var z=new Float32Array(H.bz(H.v(a,"$isc",[P.w],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},aw:{"^":"ag;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ag;a,b,c,d",
d7:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dN:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ad,P.w,P.w]})
z=F.ci()
F.c2(z,b,c,d,a,1,0,0,1)
F.c2(z,b,c,d,a,0,1,0,3)
F.c2(z,b,c,d,a,0,0,1,2)
F.c2(z,b,c,d,a,-1,0,0,0)
F.c2(z,b,c,d,a,0,-1,0,0)
F.c2(z,b,c,d,a,0,0,-1,3)
z.ag()
return z},
cM:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c2:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ad,P.w,P.w]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.y(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.y(t+h,s+f,r+g)
z.b=q
p=new V.y(t-h,s-f,r-g)
z.c=p
o=new V.y(y-h,w-f,v-g)
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
j=F.cU(d,e,new F.my(z,F.cM(z.c),F.cM(z.d),k,l,c),b)
if(j!=null)a.b3(j)},
h5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.w,args:[P.w]})
if(e<3)return
z=F.ci()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ad])
v=z.a
u=new V.y(0,0,y)
u=u.p(0,Math.sqrt(u.B(u)))
C.a.h(w,v.hH(new V.aO(a,-1,-1,-1),new V.am(1,1,1,1),new V.S(0,0,c),new V.y(0,0,y),new V.M(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.y(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bv(new V.aO(a,-1,-1,-1),null,new V.am(n,l,m,1),new V.S(r*p,q*p,c),new V.y(0,0,y),new V.M(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dM(w)
return z},
h3:function(a,b,c,d,e,f){return F.mW(!0,c,d,new F.mV(a,f),e)},
mW:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.w,args:[P.w,P.w]})
if(e<3)return
if(c<1)return
z=F.cU(c,e,new F.mY(d),null)
if(z==null)return
z.ag()
z.bz()
if(b)z.b3(F.h5(3,!1,1,new F.mZ(d),e))
z.b3(F.h5(1,!0,-1,new F.n_(d),e))
return z},
ne:function(a,b){var z=F.cU(a,b,new F.nf(),null)
z.d.bV()
z.ag()
z.bz()
return z},
ah:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.bv(null,null,null,new V.S(z,y,x),b,null,null,null,0)
v=a.hX(w,new F.dB())
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
w.sa9(0,new V.am(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sd_(new V.M(q,p<0?-p:p))
a.a.h(0,w)
return w},
Y:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bx(0,b,d,c)
else{z=F.ah(a,b.r.E(0,c.r).k(0,0.5))
y=F.ah(a,c.r.E(0,d.r).k(0,0.5))
x=F.ah(a,d.r.E(0,b.r).k(0,0.5))
w=e-1
F.Y(a,b,z,x,w)
F.Y(a,z,c,y,w)
F.Y(a,y,x,z,w)
F.Y(a,x,y,d,w)}},
hk:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nx()
y=F.dN(a,null,new F.ny(z),c)
y.bz()
return y},
nA:function(a,b,c,d){return F.h4(c,a,d,b,new F.nB())},
nc:function(a,b,c,d,e,f){return F.h4(d,a,e,b,new F.nd(f,c))},
h4:function(a,b,c,d,e){var z=F.cU(a,b,new F.mX(H.f(e,{func:1,ret:V.S,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ag()
z.bz()
return z},
cU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ad,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.ci()
y=H.e([],[F.ad])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bv(null,null,new V.am(u,0,0,1),null,null,new V.M(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cz(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bv(null,null,new V.am(o,n,m,1),null,null,new V.M(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cz(d))}}z.d.hG(a+1,b+1,y)
return z},
my:{"^":"n:6;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cN(z.b,b).cN(z.d.cN(z.c,b),c)
a.sZ(0,new V.S(y.a,y.b,y.c))
a.sao(y.p(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.sdP(new V.aO(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mV:{"^":"n:17;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mY:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sZ(0,new V.S(y,u,w))
u=new V.y(y,u,w)
a.sao(u.p(0,Math.sqrt(u.B(u))))
a.sdP(new V.aO(1-c,2+c,-1,-1))}},
mZ:{"^":"n:25;a",
$1:function(a){return this.a.$2(a,1)}},
n_:{"^":"n:25;a",
$1:function(a){return this.a.$2(1-a,0)}},
nf:{"^":"n:6;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.y(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.B(w)))
a.sZ(0,new V.S(x.a,x.b,x.c))}},
nx:{"^":"n:17;",
$2:function(a,b){return 0}},
ny:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.y(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.B(x))).k(0,1+z)
a.sZ(0,new V.S(z.a,z.b,z.c))}},
nB:{"^":"n:26;",
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)}},
nd:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.S(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mX:{"^":"n:6;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dX(y.$1(z),x)
x=J.dX(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.y(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.B(x)))
u=new V.y(1,0,0)
y=v.aB(!v.v(0,u)?new V.y(0,0,1):u)
t=y.p(0,Math.sqrt(y.B(y)))
y=t.aB(v)
u=y.p(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sZ(0,w.E(0,new V.S(y.a-x.a,y.b-x.b,y.c-x.c)))}},
au:{"^":"b;0a,0b,0c,0d,0e",
aC:function(){if(!this.gbd()){C.a.H(this.a.a.d.b,this)
this.a.a.X()}this.cg()
this.ci()
this.fW()},
h7:function(a){this.a=a
C.a.h(a.d.b,this)},
h8:function(a){this.b=a
C.a.h(a.d.c,this)},
h9:function(a){this.c=a
C.a.h(a.d.d,this)},
cg:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
fW:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gbd:function(){return this.a==null||this.b==null||this.c==null},
f4:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.y(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eq())return
return v.p(0,Math.sqrt(v.B(v)))},
f7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.y(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.B(z)))
z=w.M(0,y)
z=new V.y(z.a,z.b,z.c)
z=v.aB(z.p(0,Math.sqrt(z.B(z))))
return z.p(0,Math.sqrt(z.B(z)))},
cu:function(){if(this.d!=null)return!0
var z=this.f4()
if(z==null){z=this.f7()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
f3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.y(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eq())return
return v.p(0,Math.sqrt(v.B(v)))},
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
if($.p.$2(n,0)){z=r.M(0,u)
z=new V.y(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.M(0,u).k(0,l).E(0,u).M(0,x)
z=new V.y(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.B(z)))
z=k.aB(m)
z=z.p(0,Math.sqrt(z.B(z))).aB(k)
m=z.p(0,Math.sqrt(z.B(z)))}return m},
cs:function(){if(this.e!=null)return!0
var z=this.f3()
if(z==null){z=this.f6()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aO:function(a,b){var z=b.a
if(z==null)throw H.a(P.u("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.u("May not replace a face's vertex with a vertex attached to a different shape."))},
ghN:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z,y
if(this.gbd())return a+"disposed"
z=a+C.b.ai(J.ae(this.a.e),0)+", "+C.b.ai(J.ae(this.b.e),0)+", "+C.b.ai(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
O:function(){return this.F("")},
q:{
be:function(a,b,c){var z,y,x
z=new F.au()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.h7(a)
z.h8(b)
z.h9(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
i5:{"^":"b;"},
jB:{"^":"i5;",
b2:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
de:{"^":"b;0a,0b",
aC:function(){if(!this.gbd()){C.a.H(this.a.a.c.b,this)
this.a.a.X()}this.cg()
this.ci()},
cg:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gbd:function(){return this.a==null||this.b==null},
aO:function(a,b){var z=b.a
if(z==null)throw H.a(P.u("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.u("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){if(this.gbd())return a+"disposed"
return a+C.b.ai(J.ae(this.a.e),0)+", "+C.b.ai(J.ae(this.b.e),0)},
O:function(){return this.F("")}},
iq:{"^":"b;"},
k6:{"^":"iq;",
b2:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dm:{"^":"b;0a",
aC:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.X()}this.fV()},
fV:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ai(J.ae(z.e),0)},
O:function(){return this.F("")}},
eO:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hP())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dm()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.de()
s=p.a
if(s==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.D(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.be(p,o,l)}z=this.e
if(!(z==null))z.au(0)},
ag:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ag()||!1
if(!this.a.ag())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
hY:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.b2(0,a,w))return w}return},
hX:function(a,b){return this.hY(a,b,0)},
ff:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.ad],"$asc")
H.v(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b2(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fY:function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[P.m],"$asc")
H.jH(b,J.mG(),H.x(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.d(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.d(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.r(P.u("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aO(w,a)
v=x.a
if(v!=null){C.a.H(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aO(w,a)
v=x.b
if(v!=null){C.a.H(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aO(w,a)
v=x.c
if(v!=null){C.a.H(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.r(P.u("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aO(w,a)
v=x.a
if(v!=null){C.a.H(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aO(w,a)
v=x.b
if(v!=null){C.a.H(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.r(P.u("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.r(P.u("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.H(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}x=this.a
v=x.c
if(y>=v.length)return H.d(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.r(P.u("May not remove a vertex without first making it empty."))
t.a=null
C.a.iw(v,y)
v=x.a.e
if(!(v==null))v.D(null)
x.b=!0}},
ev:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ad],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.ff(a,v,y,u,t)){s=b.b3(u)
if(s!=null){this.fY(s,t)
y-=t.length}}}this.a.C()
this.c.bV()
this.d.bV()
this.b.ix()
this.c.cX(new F.k6())
this.d.cX(new F.jB())
z=this.e
if(!(z==null))z.au(0)},
hJ:function(a){this.ev(new F.dB(),new F.iW())},
bz:function(){return this.hJ(null)},
dS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aF()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$bW().a)!==0)++w
if((x&$.$get$bX().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
v=b.gd8(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.e6])
for(r=0,q=0;q<w;++q){p=b.hK(q)
o=p.gd8(p)
C.a.l(s,q,new Z.e6(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].i9(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bz(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d1(new Z.fr(34962,j),s,b)
i.b=H.e([],[Z.cA])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cA(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cA(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cA(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.G(z,"\n")},
b4:function(a){var z=this.e
if(!(z==null))z.D(a)},
X:function(){return this.b4(null)},
q:{
ci:function(){var z,y
z=new F.eO()
y=new F.kD(z)
y.b=!1
y.c=H.e([],[F.ad])
z.a=y
y=new F.jw(z)
y.b=H.e([],[F.dm])
z.b=y
y=new F.jv(z)
y.b=H.e([],[F.de])
z.c=y
y=new F.ju(z)
y.b=H.e([],[F.au])
z.d=y
z.e=null
return z}}},
ju:{"^":"b;a,0b",
bx:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.be(b,c,d)},
dM:function(a){var z,y,x,w,v,u
H.v(a,"$isc",[F.ad],"$asc")
z=H.e([],[F.au])
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
C.a.h(z,F.be(x,v,u))}}return z},
hG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.ad],"$asc")
z=H.e([],[F.au])
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
C.a.h(z,F.be(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.be(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b2(0,v,t)){v.aC()
break}}}}},
bV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghN(x)
if(y)x.aC()}},
ag:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cu())x=!1
return x},
ct:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cs())x=!1
return x},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
jv:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b2(0,v,t)){v.aC()
break}}}}},
bV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aC()}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.G(z,"\n")},
O:function(){return this.F("")}},
jw:{"^":"b;a,0b",
gm:function(a){return this.b.length},
ix:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aC()}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
ad:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cz:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bv(this.cx,x,u,z,y,w,v,a,t)},
hP:function(){return this.cz(null)},
sZ:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
scR:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
sdR:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.X()}},
sd_:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.X()}},
sao:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sa9:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.X()}},
seH:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.X()}},
sdP:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
i9:function(a){var z,y
z=J.K(a)
if(z.v(a,$.$get$aF())){z=this.f
y=[P.w]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aZ())){z=this.r
y=[P.w]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aY())){z=this.x
y=[P.w]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$b_())){z=this.y
y=[P.w]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.v(a,$.$get$b0())){z=this.z
y=[P.w]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bW())){z=this.Q
y=[P.w]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bX())){z=this.Q
if(z==null)return H.e([1,1,1,1],[P.w])
else return z.d0(0)}else if(z.v(a,$.$get$bx()))return H.e([this.ch],[P.w])
else if(z.v(a,$.$get$aX())){z=this.cx
y=[P.w]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.w])},
cu:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.y(0,0,0)
this.d.N(0,new F.kM(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
cs:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.y(0,0,0)
this.d.N(0,new F.kL(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z,y,x
z=H.e([],[P.j])
C.a.h(z,C.b.ai(J.ae(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.G(z,", ")
return a+"{"+x+"}"},
O:function(){return this.F("")},
q:{
bv:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ad()
y=new F.kK(z)
y.b=H.e([],[F.dm])
z.b=y
y=new F.kI(z)
x=[F.de]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kE(z)
x=[F.au]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fo()
z.e=0
y=$.$get$aF()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aZ().a)!==0?e:null
z.x=(x&$.$get$aY().a)!==0?b:null
z.y=(x&$.$get$b_().a)!==0?f:null
z.z=(x&$.$get$b0().a)!==0?g:null
z.Q=(x&$.$get$fp().a)!==0?c:null
z.ch=(x&$.$get$bx().a)!==0?i:0
z.cx=(x&$.$get$aX().a)!==0?a:null
return z}}},
kM:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isau")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kL:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isau")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kD:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
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
this.a.X()
return!0},
dN:function(a,b,c,d,e,f,g,h,i){var z=F.bv(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
by:function(a,b,c,d,e,f){return this.dN(a,null,b,c,null,d,e,f,0)},
hH:function(a,b,c,d,e,f){return this.dN(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ag:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cu()
return!0},
ct:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cs()
return!0},
hM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
this.C()
z=H.e([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
kE:{"^":"b;a,0b,0c,0d",
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
N:function(a,b){H.f(b,{func:1,ret:-1,args:[F.au]})
C.a.N(this.b,b)
C.a.N(this.c,new F.kF(this,b))
C.a.N(this.d,new F.kG(this,b))},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
kF:{"^":"n:10;a,b",
$1:function(a){H.h(a,"$isau")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kG:{"^":"n:10;a,b",
$1:function(a){var z
H.h(a,"$isau")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kI:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
kJ:{"^":"b;"},
dB:{"^":"kJ;",
b2:function(a,b,c){return J.F(b.f,c.f)}},
fn:{"^":"b;"},
kH:{"^":"fn;",
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a,"$isc",[F.ad],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.S(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.y(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.y(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.M(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.y(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bV(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bV(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bv(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sZ(0,null)
else b.sZ(0,x.p(0,y))
if(w==null)b.scR(null)
else b.scR(w.p(0,Math.sqrt(w.B(w))))
if(v==null)b.sdR(null)
else b.sdR(v.p(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)b.sd_(null)
else b.sd_(r.p(0,s))
if(q<=0||p==null)b.sao(null)
else b.sao(p.p(0,q))
if(u<=0||t==null)b.sa9(0,null)
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
b.sa9(0,new V.am(f,e,d,z))}if(o<=0)b.seH(0,0)
else b.seH(0,n/o)
return b}},
iW:{"^":"fn;",
b3:function(a){var z,y,x,w
H.v(a,"$isc",[F.ad],"$asc")
z=new V.y(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.y(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].scR(z)
return}},
kK:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}}}],["","",,O,{"^":"",iI:{"^":"cl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
W:[function(a){var z
H.h(a,"$isq")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.W(null)},"dg","$1","$0","gaN",0,2,1],
h0:[function(a){H.h(a,"$isq")
this.a=null
this.W(a)},function(){return this.h0(null)},"ji","$1","$0","gh_",0,2,1],
iT:[function(a,b){var z=V.aJ
z=new D.cb(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gfq",8,0,27],
iU:[function(a,b){var z=V.aJ
z=new D.cc(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gfs",8,0,27],
dn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a4(z.e.length+3,4)*4
x=C.d.a4(z.f.length+3,4)*4
w=C.d.a4(z.r.length+3,4)*4
v=C.d.a4(z.x.length+3,4)*4
u=C.d.a4(z.y.length+3,4)*4
t=C.d.a4(z.z.length+3,4)*4
s=C.d.a4(this.e.a.length+3,4)*4
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
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aF()
if(c){z=$.$get$aZ()
a6=new Z.bw(a6.a|z.a)}if(b){z=$.$get$aY()
a6=new Z.bw(a6.a|z.a)}if(a){z=$.$get$b_()
a6=new Z.bw(a6.a|z.a)}if(a0){z=$.$get$b0()
a6=new Z.bw(a6.a|z.a)}if(a2){z=$.$get$aX()
a6=new Z.bw(a6.a|z.a)}return new A.iM(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Y:function(a,b){H.v(a,"$isc",[T.du],"$asc")
if(b!=null)if(!C.a.bb(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.I();){y=z.d
x=new V.y(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d1(x)}}},
eA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dn()
y=H.h(a.fr.i(0,z.aD),"$iseC")
if(y==null){y=A.iJ(z,a.a)
a.dO(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.b0
z=b.e
if(!(z instanceof Z.d1)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.ag()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.ct()
u.a.ct()
u=u.e
if(!(u==null))u.au(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hM()
t=t.e
if(!(t==null))t.au(0)}r=b.d.dS(new Z.fs(a.a),w)
r.aF($.$get$aF()).e=this.a.y.c
if(z)r.aF($.$get$aZ()).e=this.a.Q.c
if(v)r.aF($.$get$aY()).e=this.a.z.c
if(x.rx)r.aF($.$get$b_()).e=this.a.ch.c
if(u)r.aF($.$get$b0()).e=this.a.cx.c
if(x.x1)r.aF($.$get$aX()).e=this.a.cy.c
b.e=r}z=T.du
q=H.e([],[z])
this.a.a1(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga2(u)
v=v.db
v.toString
v.al(u.ac(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga2(u)
t=a.dx
t=u.k(0,t.ga2(t))
a.cx=t
u=t}v=v.dx
v.toString
v.al(u.ac(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giu()
t=a.dx
t=u.k(0,t.ga2(t))
a.ch=t
u=t}v=v.fr
v.toString
v.al(u.ac(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.al(u.ac(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.al(u.ac(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.al(C.t.ac(u,!0))}if(x.b_>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.d(t,o)
t=t[o]
u.toString
H.h(t,"$isaJ")
u=u.k3
if(o>=u.length)return H.d(u,o)
u=u[o]
n=new Float32Array(H.bz(H.v(t.ac(0,!0),"$isc",v,"$asc")))
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
case C.f:this.Y(q,this.f.d)
v=this.a
u=this.f.d
v.an(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.f.e)
v=this.a
u=this.f.e
v.af(v.r2,v.rx,u)
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
case C.f:this.Y(q,this.r.d)
v=this.a
u=this.r.d
v.an(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.r.e)
v=this.a
u=this.r.e
v.af(v.x2,v.y1,u)
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
case C.f:this.Y(q,this.x.d)
v=this.a
u=this.x.d
v.an(v.b_,v.b0,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.x.e)
v=this.a
u=this.x.e
v.af(v.aD,v.b0,u)
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
v=v.bD
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.Y(q,this.y.d)
v=this.a
u=this.y.d
v.an(v.dX,v.bE,u)
u=this.a
v=this.y.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.y.e)
v=this.a
u=this.y.e
v.af(v.dY,v.bE,u)
u=this.a
v=this.y.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bF
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bH
u.a.uniform1f(u.d,s)
break
case C.f:this.Y(q,this.z.d)
v=this.a
u=this.z.d
v.an(v.dZ,v.bG,u)
u=this.a
v=this.z.f
u=u.bF
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bH
v.a.uniform1f(v.d,s)
break
case C.e:this.Y(q,this.z.e)
v=this.a
u=this.z.e
v.af(v.e_,v.bG,u)
u=this.a
v=this.z.f
u=u.bF
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bH
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ea
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.d(t,l)
i=t[l]
t=m.d1(j.a)
s=t.a
h=t.b
g=t.c
g=t.p(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eb
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbh(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bp(j.gbh(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.ga9(j)
g=i.d
h=t.gbU()
s=t.gbq()
t=t.gbA()
g.a.uniform3f(g.d,h,s,t)
t=j.gcn()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gco()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcp()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ec
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cE
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbh(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcB(j).jp()
g=i.c
h=t.gaX(t)
s=t.gaY(t)
t=t.gaZ()
g.a.uniform3f(g.d,h,s,t)
t=m.bp(j.gbh(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.ga9(j)
s=i.e
h=t.gbU()
g=t.gbq()
t=t.gbA()
s.a.uniform3f(s.d,h,g,t)
t=j.gjn()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjm()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gco()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcp()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ed
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cF
if(l>=s.length)return H.d(s,l)
i=s[l]
s=j.gbl()
H.v(q,"$isc",t,"$asc")
if(!C.a.bb(q,s)){s.sc8(q.length)
C.a.h(q,s)}s=j.gcB(j)
h=i.d
g=s.gaX(s)
f=s.gaY(s)
s=s.gaZ()
h.a.uniform3f(h.d,g,f,s)
s=j.gbW()
f=i.b
g=s.gaX(s)
h=s.gaY(s)
s=s.gaZ()
f.a.uniform3f(f.d,g,h,s)
s=j.gbi(j)
h=i.c
g=s.gaX(s)
f=s.gaY(s)
s=s.gaZ()
h.a.uniform3f(h.d,g,f,s)
s=m.d1(j.gcB(j))
f=s.a
g=s.b
h=s.c
h=s.p(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga9(j)
g=i.f
f=h.gbU()
s=h.gbq()
h=h.gbA()
g.a.uniform3f(g.d,f,s,h)
h=j.gbl()
s=h.gbR(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbR(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gi4(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ee
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cG
if(l>=h.length)return H.d(h,l)
i=h[l]
h=j.gbl()
H.v(q,"$isc",s,"$asc")
if(!C.a.bb(q,h)){h.sc8(q.length)
C.a.h(q,h)}e=m.k(0,j.ga2(j))
h=j.ga2(j).bp(new V.S(0,0,0))
g=i.b
f=h.gt(h)
d=h.gu(h)
h=h.gd4(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bp(new V.S(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cM(0)
d=i.d
n=new Float32Array(H.bz(H.v(new V.cC(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ac(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.ga9(j)
h=i.e
f=d.gbU()
g=d.gbq()
d=d.gbA()
h.a.uniform3f(h.d,f,g,d)
d=j.gbl()
h=d.gbR(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.giN()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc8())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcn()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gco()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcp()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ef
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cH
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbl()
H.v(q,"$isc",z,"$asc")
if(!C.a.bb(q,t)){t.sc8(q.length)
C.a.h(q,t)}t=j.gbh(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcB(j)
g=i.c
h=t.gaX(t)
s=t.gaY(t)
t=t.gaZ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbW()
s=i.d
h=t.gaX(t)
g=t.gaY(t)
t=t.gaZ()
s.a.uniform3f(s.d,h,g,t)
t=j.gbi(j)
g=i.e
h=t.gaX(t)
s=t.gaY(t)
t=t.gaZ()
g.a.uniform3f(g.d,h,s,t)
t=m.bp(j.gbh(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbl()
s=t.gbR(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbR(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gi4(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.ga9(j)
s=i.y
h=t.gbU()
g=t.gbq()
t=t.gbA()
s.a.uniform3f(s.d,h,g,t)
t=j.gju()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjv()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gco()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcp()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.f:this.Y(q,this.Q.d)
z=this.a
v=this.Q.d
z.an(z.e0,z.bI,v)
break
case C.e:this.Y(q,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.e1,z.bI,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga2(v).cM(0)
a.Q=v}z=z.fy
z.toString
z.al(v.ac(0,!0))}if(x.dy){this.Y(q,this.ch)
z=this.a
v=this.ch
z.af(z.e2,z.e3,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bJ
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.Y(q,this.cx.d)
z=this.a
v=this.cx.d
z.an(z.e4,z.bK,v)
v=this.a
z=this.cx.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.Y(q,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.e5,z.bK,v)
v=this.a
z=this.cx.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bM
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bL
v.a.uniform1f(v.d,t)
break
case C.f:this.Y(q,this.cy.d)
z=this.a
v=this.cy.d
z.an(z.e6,z.bN,v)
v=this.a
z=this.cy.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bL
z.a.uniform1f(z.d,t)
break
case C.e:this.Y(q,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.e7,z.bN,v)
v=this.a
z=this.cy.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bL
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bO
z.a.uniform1f(z.d,u)
break
case C.f:this.Y(q,this.db.d)
z=this.a
u=this.db.d
z.an(z.e8,z.bP,u)
u=this.a
z=this.db.f
u=u.bO
u.a.uniform1f(u.d,z)
break
case C.e:this.Y(q,this.db.e)
z=this.a
u=this.db.e
z.af(z.e9,z.bP,u)
u=this.a
z=this.db.f
u=u.bO
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a1(a)
z=b.e
z.a1(a)
z.ab(a)
z.aI(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dV()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dn().aD}},iK:{"^":"dg;0f,a,b,0c,0d,0e",
h3:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.w])
z.b=!0
this.a.W(z)}},
aS:function(){this.da()
this.h3(1)}},dg:{"^":"b;",
W:[function(a){this.a.W(H.h(a,"$isq"))},function(){return this.W(null)},"dg","$1","$0","gaN",0,2,1],
aS:["da",function(){}],
h5:function(a){},
h6:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.f(this.gaN(),{func:1,ret:-1,args:[D.q]})
C.a.H(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.f(this.gaN(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H(this.b+".textureCube",x,this.e,this,[T.cG])
z.b=!0
this.a.W(z)}},
sao:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aS()
this.c=C.e
this.h5(null)
z=this.a
z.a=null
z.W(null)}this.h6(a)}},iL:{"^":"dg;a,b,0c,0d,0e"},bh:{"^":"dg;0f,a,b,0c,0d,0e",
dE:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.W(y)}},
aS:["c0",function(){this.da()
this.dE(new V.a1(1,1,1))}],
sa9:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aS()
z=this.a
z.a=null
z.W(null)}this.dE(b)}},iN:{"^":"bh;0ch,0f,a,b,0c,0d,0e",
h4:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.W(z)}},
aS:function(){this.c0()
this.h4(1)}},iO:{"^":"bh;0ch,0f,a,b,0c,0d,0e",
cj:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.W(z)}},
aS:function(){this.c0()
this.cj(100)}},jC:{"^":"cl;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
W:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.W(null)},"dg","$1","$0","gaN",0,2,1],
eA:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.i(0,"Skybox"),"$iseP")
if(z==null){y=a.a
z=new A.eP(y,"Skybox")
z.dc(y,"Skybox")
z.ep(0,$.jE,$.jD)
z.x=z.f.i(0,"posAttr")
z.y=H.k(z.r.i(0,"fov"),"$isa_")
z.z=H.k(z.r.i(0,"ratio"),"$isa_")
z.Q=H.k(z.r.i(0,"boxClr"),"$isN")
z.ch=H.k(z.r.i(0,"boxTxt"),"$isap")
z.cx=H.k(z.r.i(0,"viewMat"),"$isaR")
a.dO(z)}this.a=z}if(b.e==null){y=b.d.dS(new Z.fs(a.a),$.$get$aF())
y.aF($.$get$aF()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a1(a)}y=a.d
x=a.c
w=this.a
w.a1(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.d7(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga2(x).cM(0)
w=w.cx
w.toString
w.al(x.ac(0,!0))
y=b.e
if(y instanceof Z.d1){y.a1(a)
y.ab(a)
y.aI(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dV()
y=this.c
if(y!=null)y.aI(a)}},cl:{"^":"b;"}}],["","",,T,{"^":"",du:{"^":"cY;"},cG:{"^":"du;0b,0c,0d,0e,a",
a1:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aI:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jS:{"^":"b;a,0b,0c,0d,0e",
eu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.cG(0)
r.b=s
r.c=!1
r.d=0
r.e=D.I()
this.aR(r,s,z,34069,!1,!1)
this.aR(r,s,w,34070,!1,!1)
this.aR(r,s,y,34071,!1,!1)
this.aR(r,s,v,34072,!1,!1)
this.aR(r,s,x,34073,!1,!1)
this.aR(r,s,u,34074,!1,!1)
return r},
ib:function(a,b){return this.eu(a,b,!1,"")},
es:function(a){return this.eu(a,".png",!1,"")},
aR:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.af
W.a3(z,"load",H.f(new T.jT(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
h1:function(a,b,c){var z,y,x,w
b=V.dU(b,2)
z=V.dU(a.width,2)
y=V.dU(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d3(null,null)
x.width=z
x.height=y
w=H.h(C.l.eJ(x,"2d"),"$ise8")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mU(w.getImageData(0,0,x.width,x.height))}}},jT:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.h1(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.X.iF(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hU();++z.e}}}],["","",,V,{"^":"",hx:{"^":"b;",
be:function(a,b){return!0},
j:function(a){return"all"},
$iscg:1},cg:{"^":"b;"},eB:{"^":"b;",
be:["eQ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].be(0,b))return!0
return!1}],
j:["d9",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$iscg:1},bQ:{"^":"eB;0a",
be:function(a,b){return!this.eQ(0,b)},
j:function(a){return"!["+this.d9(0)+"]"}},js:{"^":"b;0a",
eU:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b5(0,0,[P.m,P.ai])
for(y=new H.ez(a,a.gm(a),0,[H.az(a,"z",0)]);y.I();)z.l(0,y.d,!0)
this.a=z},
be:function(a,b){return this.a.bC(0,b)},
j:function(a){var z=this.a
return P.ck(z.gat(z),0,null)},
$iscg:1,
q:{
ac:function(a){var z=new V.js()
z.eU(a)
return z}}},eR:{"^":"b;a,b,0c,0d",
gie:function(a){return this.b},
G:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.f_(this.a.P(0,b))
w.a=H.e([],[V.cg])
w.c=!1
C.a.h(this.c,w)
return w},
hZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.be(0,a))return w}return},
j:function(a){return this.b}},eX:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hm(this.b,"\n","\\n")
y=H.hm(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eY:{"^":"b;a,b,0c",
j:function(a){return this.b}},k1:{"^":"b;0a,0b,0c",
P:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eR(this,b)
z.c=H.e([],[V.f_])
this.a.l(0,b,z)}return z},
bn:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.eY(this,a)
y=P.j
z.c=new H.b5(0,0,[y,y])
this.b.l(0,a,z)}return z},
iK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eX])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.J(a,t)
r=y.hZ(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ck(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.gie(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ck(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.eX(o==null?p.b:o,q,t)}++t}}}},f_:{"^":"eB;b,0c,0a",
j:function(a){return this.b.b+": "+this.d9(0)}}}],["","",,X,{"^":"",cu:{"^":"b;",$isaN:1},ia:{"^":"dt;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
az:function(a){var z=this.x
if(!(z==null))z.D(a)},
a1:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.aj(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.aj(w.b*x)
t=C.d.aj(w.c*y)
a.c=t
w=C.d.aj(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
d7:function(a,b,c,d,e,f,g){var z,y
z=new X.ia()
y=new V.am(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eN(0,0,1,1)
z.r=y
return z}}},ic:{"^":"b;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
a1:function(a){var z
a.cy.bT(V.bi())
z=V.bi()
a.db.bT(z)},
aI:function(a){a.cy.aH()
a.db.aH()},
$isaN:1,
$iscu:1},iZ:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
az:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.az(null)},"iW","$1","$0","gfu",0,2,1],
a1:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bT(V.aK(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eJ
if(z==null){z=V.eD(new V.S(0,0,0),new V.y(0,1,0),new V.y(0,0,-1))
$.eJ=z
r=z}else r=z
z=this.a
if(z!=null){q=z.b6(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bT(r)},
aI:function(a){a.cy.aH()
a.db.aH()},
$isaN:1,
$iscu:1,
q:{
eI:function(a,b,c,d){var z,y,x,w
z=new X.iZ()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gw()
x.toString
w=H.f(z.gfu(),{func:1,ret:-1,args:[D.q]})
C.a.h(x.a,w)}x=new D.H("mover",y,z.a,z,[U.ak])
x.b=!0
z.az(x)}x=z.b
if(!$.p.$2(x,b)){y=z.b
z.b=b
x=new D.H("fov",y,b,z,[P.w])
x.b=!0
z.az(x)}x=z.c
if(!$.p.$2(x,d)){y=z.c
z.c=d
x=new D.H("near",y,d,z,[P.w])
x.b=!0
z.az(x)}x=z.d
if(!$.p.$2(x,a)){y=z.d
z.d=a
x=new D.H("far",y,a,z,[P.w])
x.b=!0
z.az(x)}return z}}},dt:{"^":"b;"}}],["","",,V,{"^":"",
nv:function(a){P.k0(C.G,new V.nw(a))},
nw:{"^":"n:50;a",
$1:function(a){H.h(a,"$isbs")
P.dV(C.h.eE(this.a.gi2(),2)+" fps")}},
jc:{"^":"b;a,b,0c",
bx:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fj().gcW().i(0,H.l(z))
if(y==null)if(d){c.$0()
this.dJ(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e_(this.c).h(0,v)
t=W.ie("radio")
t.checked=x
t.name=z
z=W.af
W.a3(t,"change",H.f(new V.jd(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e_(this.c).h(0,w.createElement("br"))},
ar:function(a,b,c){return this.bx(a,b,c,!1)},
dJ:function(a){var z,y,x,w,v
z=P.fj()
y=P.j
x=P.iw(z.gcW(),y,y)
x.l(0,this.a,a)
w=z.eB(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.lP([],[]).d2(""),"",v)}},
jd:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dJ(this.d)}}},
jx:{"^":"b;0a,0b",
eV:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.f(new V.jA(x),{func:1,ret:-1,args:[t]}),!1,t)},
hI:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.j],"$asc")
this.hb()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iK(C.a.i8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hl(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cL(C.S,s,C.k,!1)
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
hF:function(a){var z,y,x,w,v,u,t
H.v(a,"$isc",[P.j],"$asc")
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
x=H.h(w.insertCell(-1),"$isds").style
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
t=H.h(w.insertCell(-1),"$isds")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hb:function(){var z,y,x,w
if(this.b!=null)return
z=new V.k1()
y=P.j
z.a=new H.b5(0,0,[y,V.eR])
z.b=new H.b5(0,0,[y,V.eY])
z.c=z.P(0,"Start")
y=z.P(0,"Start").G(0,"Bold")
x=V.ac(new H.a7("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Bold").G(0,"Bold")
x=new V.bQ()
w=[V.cg]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("*"))
C.a.h(x.a,y)
y=z.P(0,"Bold").G(0,"BoldEnd")
x=V.ac(new H.a7("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"Italic")
x=V.ac(new H.a7("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Italic").G(0,"Italic")
x=new V.bQ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("_"))
C.a.h(x.a,y)
y=z.P(0,"Italic").G(0,"ItalicEnd")
x=V.ac(new H.a7("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"Code")
x=V.ac(new H.a7("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Code").G(0,"Code")
x=new V.bQ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("`"))
C.a.h(x.a,y)
y=z.P(0,"Code").G(0,"CodeEnd")
x=V.ac(new H.a7("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"LinkHead")
x=V.ac(new H.a7("["))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"LinkHead").G(0,"LinkTail")
x=V.ac(new H.a7("|"))
C.a.h(y.a,x)
x=z.P(0,"LinkHead").G(0,"LinkEnd")
y=V.ac(new H.a7("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkHead").G(0,"LinkHead")
y=new V.bQ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("|]"))
C.a.h(y.a,x)
x=z.P(0,"LinkTail").G(0,"LinkEnd")
y=V.ac(new H.a7("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkTail").G(0,"LinkTail")
y=new V.bQ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("|]"))
C.a.h(y.a,x)
C.a.h(z.P(0,"Start").G(0,"Other").a,new V.hx())
x=z.P(0,"Other").G(0,"Other")
y=new V.bQ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("*_`["))
C.a.h(y.a,x)
x=z.P(0,"BoldEnd")
x.d=x.a.bn("Bold")
x=z.P(0,"ItalicEnd")
x.d=x.a.bn("Italic")
x=z.P(0,"CodeEnd")
x.d=x.a.bn("Code")
x=z.P(0,"LinkEnd")
x.d=x.a.bn("Link")
x=z.P(0,"Other")
x.d=x.a.bn("Other")
this.b=z},
q:{
jy:function(a,b){var z=new V.jx()
z.eV(a,!0)
return z}}},
jA:{"^":"n:15;a",
$1:function(a){P.k_(C.r,new V.jz(this.a))}},
jz:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,T,{"^":"",
hf:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.jy("Test 017",!0)
y=W.d3(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.hI(H.e(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],x))
z.hF(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jY(w,!0,!0,!0,!1)
u=E.el(null,!0,null,"",null,null)
u.sa8(0,F.hk(8,null,8))
t=X.d7(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
z=new D.H("clearColor",!0,!1,t,[P.ai])
z.b=!0
t.az(z)}s=v.f.ib("../resources/maskonaive",".jpg")
r=v.f.es("../resources/earthSpecular")
q=v.f.es("../resources/earthColor")
p=new O.iI()
z=O.d4(V.aJ)
p.e=z
z.b7(p.gfq(),p.gfs())
z=new O.bh(p,"emission")
z.c=C.c
z.f=new V.a1(0,0,0)
p.f=z
z=new O.bh(p,"ambient")
z.c=C.c
z.f=new V.a1(0,0,0)
p.r=z
z=new O.bh(p,"diffuse")
z.c=C.c
z.f=new V.a1(0,0,0)
p.x=z
z=new O.bh(p,"invDiffuse")
z.c=C.c
z.f=new V.a1(0,0,0)
p.y=z
z=new O.iO(p,"specular")
z.c=C.c
z.f=new V.a1(0,0,0)
z.ch=100
p.z=z
z=new O.iL(p,"bump")
z.c=C.c
p.Q=z
p.ch=null
z=new O.bh(p,"reflect")
z.c=C.c
z.f=new V.a1(0,0,0)
p.cx=z
z=new O.iN(p,"refract")
z.c=C.c
z.f=new V.a1(0,0,0)
z.ch=1
p.cy=z
z=new O.iK(p,"alpha")
z.c=C.c
z.f=1
p.db=z
z=new D.ip()
z.bs(D.a5)
z.e=H.e([],[D.cx])
z.f=H.e([],[D.j0])
z.r=H.e([],[D.jI])
z.x=H.e([],[D.jU])
z.y=H.e([],[D.jV])
z.z=H.e([],[D.jW])
z.Q=null
z.ch=null
z.d6(z.gfp(),z.gfM(),z.gfO())
p.dx=z
o=z.Q
if(o==null){o=D.I()
z.Q=o
z=o}else z=o
o={func:1,ret:-1,args:[D.q]}
n=H.f(p.gh_(),o)
C.a.h(z.a,n)
n=p.dx
z=n.ch
if(z==null){z=D.I()
n.ch=z}n=H.f(p.gaN(),o)
C.a.h(z.a,n)
p.dy=null
z=p.dx
m=U.ec(V.eD(new V.S(0,0,0),new V.y(0,1,0),new V.y(-1,-1,-1)))
l=new V.a1(1,1,1)
k=new D.cx()
k.c=new V.a1(1,1,1)
k.a=new V.y(0,0,1)
j=k.b
k.b=m
m=m.gw()
m.toString
i=H.f(k.geZ(),o)
C.a.h(m.a,i)
m=new D.H("mover",j,k.b,k,[U.ak])
m.b=!0
k.aL(m)
if(!k.c.v(0,l)){j=k.c
k.c=l
m=new D.H("color",j,l,k,[V.a1])
m.b=!0
k.aL(m)}z.h(0,k)
z=p.r
z.sa9(0,new V.a1(0.5,0.5,0.5))
z=p.x
z.sa9(0,new V.a1(0.5,0.5,0.5))
p.r.sao(q)
p.x.sao(q)
p.z.sao(r)
z=p.ch
if(z!==s){if(z!=null)C.a.H(z.e.a,n)
j=p.ch
p.ch=s
C.a.h(s.e.a,n)
z=new D.H("environment",j,p.ch,p,[T.cG])
z.b=!0
p.W(z)}p.cx.sao(r)
z=p.cx
z.sa9(0,new V.a1(0.5,0.5,0.5))
z=p.z
if(z.c===C.c){z.c=C.i
z.c0()
z.cj(100)
n=z.a
n.a=null
n.W(null)}z.cj(10)
h=new U.eo()
h.bs(U.ak)
h.b7(h.gfo(),h.gfN())
h.e=null
h.f=V.bi()
h.r=0
z=v.r
n=new U.kt()
m=U.d5()
m.sd3(0,!0)
m.scO(6.283185307179586)
m.scQ(0)
m.sZ(0,0)
m.scP(100)
m.sV(0)
m.scA(0.5)
n.b=m
m=m.gw()
m.toString
k=H.f(n.gaM(),o)
C.a.h(m.a,k)
m=U.d5()
m.sd3(0,!0)
m.scO(6.283185307179586)
m.scQ(0)
m.sZ(0,0)
m.scP(100)
m.sV(0)
m.scA(0.5)
n.c=m
C.a.h(m.gw().a,k)
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
g=new X.aL(!1,!1,!1)
j=n.d
n.d=g
m=[X.aL]
k=new D.H("modifiers",j,g,n,m)
k.b=!0
n.T(k)
k=n.f
if(k!==!1){n.f=!1
k=new D.H("invertX",k,!1,n,[P.ai])
k.b=!0
n.T(k)}k=n.r
if(k!==!1){n.r=!1
k=new D.H("invertY",k,!1,n,[P.ai])
k.b=!0
n.T(k)}n.b9(z)
h.h(0,n)
z=v.r
n=new U.ks()
k=U.d5()
k.sd3(0,!0)
k.scO(6.283185307179586)
k.scQ(0)
k.sZ(0,0)
k.scP(100)
k.sV(0)
k.scA(0.2)
n.b=k
k=k.gw()
k.toString
i=H.f(n.gaM(),o)
C.a.h(k.a,i)
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
g=new X.aL(!0,!1,!1)
j=n.c
n.c=g
k=new D.H("modifiers",j,g,n,m)
k.b=!0
n.T(k)
n.b9(z)
h.h(0,n)
z=v.r
n=new U.ku()
n.c=0.01
n.d=0
n.e=0
g=new X.aL(!1,!1,!1)
n.b=g
m=new D.H("modifiers",null,g,n,m)
m.b=!0
n.T(m)
n.b9(z)
h.h(0,n)
h.h(0,U.ec(V.aK(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eI(2000,1.0471975511965976,h,0.1)
e=new M.hQ()
e.sba(null)
e.sbj(0,null)
e.sbk(null)
z=E.el(null,!0,null,"",null,null)
d=F.ci()
n=d.a
m=new V.y(-1,-1,1)
m=m.p(0,Math.sqrt(m.B(m)))
c=n.by(new V.aO(1,2,4,6),new V.am(1,0,0,1),new V.S(-1,-1,0),new V.M(0,1),m,null)
n=d.a
m=new V.y(1,-1,1)
m=m.p(0,Math.sqrt(m.B(m)))
b=n.by(new V.aO(0,3,4,6),new V.am(0,0,1,1),new V.S(1,-1,0),new V.M(1,1),m,null)
n=d.a
m=new V.y(1,1,1)
m=m.p(0,Math.sqrt(m.B(m)))
a=n.by(new V.aO(0,2,5,6),new V.am(0,1,0,1),new V.S(1,1,0),new V.M(1,0),m,null)
n=d.a
m=new V.y(-1,1,1)
m=m.p(0,Math.sqrt(m.B(m)))
a0=n.by(new V.aO(0,2,4,7),new V.am(1,1,0,1),new V.S(-1,1,0),new V.M(0,0),m,null)
d.d.dM(H.e([c,b,a,a0],[F.ad]))
d.ag()
z.sa8(0,d)
e.d=z
e.e=null
z=new O.jC()
z.b=1.0471975511965976
j=z.c
z.c=s
n=s.e
m=H.f(z.gaN(),o)
C.a.h(n.a,m)
n=new D.H("boxTexture",j,z.c,z,[T.cG])
n.b=!0
z.W(n)
q=new V.a1(1,1,1)
if(!J.F(z.d,q)){j=z.d
z.d=q
n=new D.H("boxColor",j,q,z,[V.a1])
n.b=!0
z.W(n)}z.e=null
e.sbk(z)
e.sbj(0,t)
e.sba(f)
a1=new M.i2()
z=O.d4(E.aV)
a1.d=z
z.b7(a1.gfv(),a1.gfw())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a1.sba(null)
a1.sbj(0,null)
a1.sbk(null)
a1.sba(f)
a1.sbk(p)
a1.sbj(0,t)
a1.d.h(0,u)
z=M.aP
n=H.e([e,a1],[z])
m=new M.hL()
m.bs(z)
m.e=!1
m.f=null
m.b7(m.gfP(),m.gfQ())
m.cm(0,n)
z=v.d
if(z!==m){if(z!=null){z=z.gw()
z.toString
n=H.f(v.gde(),o)
C.a.H(z.a,n)}v.d=m
z=m.gw()
z.toString
o=H.f(v.gde(),o)
C.a.h(z.a,o)
v.eX()}z=new V.jc("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.ar(0,"Cube",new T.nh(u))
z.ar(0,"Cuboid",new T.ni(u))
z.ar(0,"Cylinder",new T.nj(u))
z.ar(0,"Cone",new T.nk(u))
z.ar(0,"LatLonSphere",new T.nl(u))
z.ar(0,"IsoSphere",new T.nm(u))
z.bx(0,"Sphere",new T.nn(u),!0)
z.ar(0,"Toroid",new T.no(u))
z.ar(0,"Knot",new T.np(u))
V.nv(v)},
nh:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.dN(1,null,null,1))}},
ni:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.dN(8,null,null,8))}},
nj:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.h3(1,!0,!0,1,40,1))}},
nk:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.h3(1,!0,!1,1,40,0))}},
nl:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.ne(10,20))}},
nm:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.ci()
y=Math.sqrt(5)/2+0.5
x=F.ah(z,new V.y(-1,y,0))
w=F.ah(z,new V.y(1,y,0))
v=-y
u=F.ah(z,new V.y(-1,v,0))
t=F.ah(z,new V.y(1,v,0))
s=F.ah(z,new V.y(0,-1,v))
r=F.ah(z,new V.y(0,1,v))
q=F.ah(z,new V.y(0,-1,y))
p=F.ah(z,new V.y(0,1,y))
o=F.ah(z,new V.y(y,0,1))
n=F.ah(z,new V.y(y,0,-1))
m=F.ah(z,new V.y(v,0,1))
l=F.ah(z,new V.y(v,0,-1))
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
z.ev(new F.dB(),new F.kH())
this.a.sa8(0,z)}},
nn:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.hk(6,null,6))}},
no:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.nA(30,1,15,0.5))}},
np:{"^":"n:0;a",
$0:function(){this.a.sa8(0,F.nc(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.et.prototype
return J.es.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.eu.prototype
if(typeof a=="boolean")return J.ij.prototype
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.ay=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.cp=function(a){if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.h7=function(a){if(typeof a=="number")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cn.prototype
return a}
J.h8=function(a){if(typeof a=="number")return J.cd.prototype
if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cn.prototype
return a}
J.dQ=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cn.prototype
return a}
J.b3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cQ(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)}
J.aG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.h7(a).ak(a,b)}
J.ho=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.h7(a).L(a,b)}
J.dX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.h8(a).k(a,b)}
J.dY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hc(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ay(a).i(a,b)}
J.cV=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hc(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cp(a).l(a,b,c)}
J.hp=function(a,b){return J.dQ(a).J(a,b)}
J.hq=function(a,b,c){return J.b3(a).fX(a,b,c)}
J.hr=function(a,b,c,d){return J.b3(a).dL(a,b,c,d)}
J.hs=function(a,b){return J.dQ(a).a0(a,b)}
J.ht=function(a,b){return J.h8(a).aW(a,b)}
J.cW=function(a,b,c){return J.ay(a).hO(a,b,c)}
J.cX=function(a,b){return J.cp(a).K(a,b)}
J.hu=function(a,b,c,d){return J.cp(a).aE(a,b,c,d)}
J.dZ=function(a,b){return J.cp(a).N(a,b)}
J.e_=function(a){return J.b3(a).gcv(a)}
J.ba=function(a){return J.K(a).gU(a)}
J.bH=function(a){return J.cp(a).ga5(a)}
J.ar=function(a){return J.ay(a).gm(a)}
J.hv=function(a,b){return J.b3(a).iz(a,b)}
J.hw=function(a,b){return J.b3(a).sa6(a,b)}
J.ae=function(a){return J.K(a).j(a)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.d2.prototype
C.H=J.t.prototype
C.a=J.bg.prototype
C.I=J.es.prototype
C.d=J.et.prototype
C.t=J.eu.prototype
C.h=J.cd.prototype
C.b=J.ce.prototype
C.P=J.cf.prototype
C.V=H.dl.prototype
C.W=W.iV.prototype
C.z=J.j_.prototype
C.X=P.dn.prototype
C.q=J.cn.prototype
C.A=W.bY.prototype
C.B=W.kP.prototype
C.D=new P.hC(!1)
C.C=new P.hB(C.D)
C.E=new P.iY()
C.F=new P.kC()
C.j=new P.lB()
C.c=new A.cv(0,"ColorSourceType.None")
C.i=new A.cv(1,"ColorSourceType.Solid")
C.f=new A.cv(2,"ColorSourceType.Texture2D")
C.e=new A.cv(3,"ColorSourceType.TextureCube")
C.r=new P.aI(0)
C.G=new P.aI(5e6)
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
C.w=H.e(I.aq([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.aq([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.aq([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.aq([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.aq([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.aq([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.aq([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.aq([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.aq([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.aq([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.aq([]),[P.j])
C.U=new H.hP(0,{},C.Q,[P.j,P.j])
C.k=new P.kv(!1)
$.aH=0
$.bI=null
$.e4=null
$.dI=!1
$.ha=null
$.h_=null
$.hj=null
$.cP=null
$.cS=null
$.dR=null
$.bA=null
$.c3=null
$.c4=null
$.dJ=!1
$.V=C.j
$.ei=null
$.eh=null
$.eg=null
$.ef=null
$.p=V.iP()
$.jE="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jD="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eJ=null
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
I.$lazy(y,x,w)}})(["ee","$get$ee",function(){return H.h9("_$dart_dartClosure")},"db","$get$db",function(){return H.h9("_$dart_js")},"f0","$get$f0",function(){return H.aQ(H.cH({
toString:function(){return"$receiver$"}}))},"f1","$get$f1",function(){return H.aQ(H.cH({$method$:null,
toString:function(){return"$receiver$"}}))},"f2","$get$f2",function(){return H.aQ(H.cH(null))},"f3","$get$f3",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f7","$get$f7",function(){return H.aQ(H.cH(void 0))},"f8","$get$f8",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f5","$get$f5",function(){return H.aQ(H.f6(null))},"f4","$get$f4",function(){return H.aQ(function(){try{null.$method$}catch(z){return z.message}}())},"fa","$get$fa",function(){return H.aQ(H.f6(void 0))},"f9","$get$f9",function(){return H.aQ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dD","$get$dD",function(){return P.kQ()},"c5","$get$c5",function(){return[]},"fm","$get$fm",function(){return P.kz()},"fu","$get$fu",function(){return H.iT(H.bz(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fQ","$get$fQ",function(){return P.ji("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fW","$get$fW",function(){return P.mA()},"ed","$get$ed",function(){return{}},"fq","$get$fq",function(){return Z.ax(0)},"fo","$get$fo",function(){return Z.ax(511)},"aF","$get$aF",function(){return Z.ax(1)},"aZ","$get$aZ",function(){return Z.ax(2)},"aY","$get$aY",function(){return Z.ax(4)},"b_","$get$b_",function(){return Z.ax(8)},"b0","$get$b0",function(){return Z.ax(16)},"bW","$get$bW",function(){return Z.ax(32)},"bX","$get$bX",function(){return Z.ax(64)},"fp","$get$fp",function(){return Z.ax(96)},"bx","$get$bx",function(){return Z.ax(128)},"aX","$get$aX",function(){return Z.ax(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.J},{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:P.J,args:[F.ad,P.w,P.w]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.m,[P.i,E.aV]]},{func:1,ret:P.J,args:[F.au]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[D.q]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.w},{func:1,ret:P.J,args:[W.af]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.w,args:[P.w,P.w]},{func:1,ret:P.j,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:-1,args:[P.m,[P.i,D.a5]]},{func:1,ret:-1,args:[P.m,[P.i,U.ak]]},{func:1,ret:-1,args:[P.m,[P.i,M.aP]]},{func:1,ret:P.w,args:[P.w]},{func:1,ret:V.S,args:[P.w]},{func:1,ret:-1,args:[P.m,[P.i,V.aJ]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.j]},{func:1,ret:P.J,args:[P.W]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:[P.L,P.j,P.j],args:[[P.L,P.j,P.j],P.j]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:P.ai,args:[P.w,P.w]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.ai,args:[[P.i,D.a5]]},{func:1,ret:-1,args:[P.b],opt:[P.aD]},{func:1,ret:P.J,args:[P.j]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:P.J,args:[P.j,,]},{func:1,ret:P.T,args:[P.m]},{func:1,ret:-1,args:[W.bY]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[P.j]},{func:1,ret:P.ai,args:[W.P]},{func:1,ret:W.a4,args:[W.P]},{func:1,ret:P.J,args:[P.bs]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.b1,,],args:[,]}]
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
if(x==y)H.nz(d||a)
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
Isolate.aq=a.aq
Isolate.dO=a.dO
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hf,[])
else T.hf([])})})()
//# sourceMappingURL=test.dart.js.map
