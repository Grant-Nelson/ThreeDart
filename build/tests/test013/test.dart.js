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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d6(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d7=function(){}
var dart=[["","",,H,{"^":"",m9:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dd:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.da==null){H.kZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eC("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cH()]
if(v!=null)return v
v=H.l3(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cH(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gT:function(a){return H.bt(a)},
i:["dQ",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h5:{"^":"m;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa6:1},
dK:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isI:1},
cI:{"^":"m;",
gT:function(a){return 0},
i:["dR",function(a){return String(a)}]},
hH:{"^":"cI;"},
cj:{"^":"cI;"},
bS:{"^":"cI;",
i:function(a){var z=a[$.$get$dw()]
if(z==null)return this.dR(a)
return"JavaScript function for "+H.j(J.am(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscE:1},
aW:{"^":"m;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
bU:function(a,b){var z,y
H.v(b,"$ise",[H.y(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.be(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Y(z,y,H.j(a[y]))
return z.join(b)},
h2:function(a){return this.D(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
by:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gce:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h3())},
bd:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cF(a,"[","]")},
gX:function(a){return new J.an(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bt(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c2(b,"newLength",null))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.a_(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b>=a.length||b<0)throw H.h(H.aQ(a,b))
a[b]=c},
$ise:1,
$isd:1,
q:{
h4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.dH(new Array(a),b)},
dH:function(a,b){return J.bl(H.c(a,[b]))},
bl:function(a){H.bL(a)
a.fixed$length=Array
return a}}},
m8:{"^":"aW;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bR:{"^":"m;",
gh1:function(a){return a===0?1/a<0:a<0},
hy:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ad(""+a+".toInt()"))},
cb:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dG:function(a,b){var z
if(b>20)throw H.h(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gh1(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.h(H.aM(b))
return a*b},
dM:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b8:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.h(H.aM(b))
return a<b},
$isw:1,
$isT:1},
dJ:{"^":"bR;",$isA:1},
dI:{"^":"bR;"},
cc:{"^":"m;",
c2:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b<0)throw H.h(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.h(H.aQ(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.U(b)
if(typeof b!=="string")throw H.h(P.c2(b,null,null))
return a+b},
bz:function(a,b,c){H.a_(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.ch(b,null,null))
if(b>c)throw H.h(P.ch(b,null,null))
if(c>a.length)throw H.h(P.ch(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.bz(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
he:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
as:function(a,b){return this.he(a,b," ")},
fO:function(a,b,c){if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
return H.fi(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdY:1,
$iso:1}}],["","",,H,{"^":"",
h3:function(){return new P.ij("No element")},
a0:{"^":"iT;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c2(this.a,b)},
$aseD:function(){return[P.A]},
$ast:function(){return[P.A]},
$ase:function(){return[P.A]},
$asd:function(){return[P.A]}},
fO:{"^":"e;"},
dQ:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.be(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hm:{"^":"e;a,b,$ti",
gX:function(a){return new H.hn(J.bM(this.a),this.b,this.$ti)},
gl:function(a){return J.bc(this.a)},
F:function(a,b){return this.b.$1(J.dh(this.a,b))},
$ase:function(a,b){return[b]}},
hn:{"^":"cG;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascG:function(a,b){return[b]}},
jb:{"^":"e;a,b,$ti",
gX:function(a){return new H.jc(J.bM(this.a),this.b,this.$ti)}},
jc:{"^":"cG;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c9:{"^":"a;$ti"},
eD:{"^":"a;$ti"},
iT:{"^":"cd+eD;"}}],["","",,H,{"^":"",
kU:function(a){return init.types[H.a_(a)]},
l1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isC},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.am(a)
if(typeof z!=="string")throw H.h(H.aM(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$iscj){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b4(w,0)===36)w=C.i.cu(w,1)
r=H.db(H.bL(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e1:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hR:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b8(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aM(w))}return H.e1(z)},
e2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aM(x))
if(x<0)throw H.h(H.aM(x))
if(x>65535)return H.hR(a)}return H.e1(a)},
hQ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b8(z,10))>>>0,56320|z&1023)}throw H.h(P.ah(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hN:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hJ:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hK:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hM:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hO:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hL:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aM(a))},
i:function(a,b){if(a==null)J.bc(a)
throw H.h(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.a_(J.bc(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.ch(b,"index",null)},
kP:function(a,b,c){if(a>c)return new P.cg(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cg(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
aM:function(a){return new P.aD(!0,a,null,null)},
kI:function(a){if(typeof a!=="number")throw H.h(H.aM(a))
return a},
h:function(a){var z
if(a==null)a=new P.dX()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fk})
z.name=""}else z.toString=H.fk
return z},
fk:function(){return J.am(this.dartException)},
r:function(a){throw H.h(a)},
z:function(a){throw H.h(P.be(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b8(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cJ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dW(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$el()
u=$.$get$em()
t=$.$get$en()
s=$.$get$eo()
r=$.$get$es()
q=$.$get$et()
p=$.$get$eq()
$.$get$ep()
o=$.$get$ev()
n=$.$get$eu()
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
if(l)return z.$1(H.dW(H.U(y),m))}}return z.$1(new H.iS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e9()
return a},
ba:function(a){var z
if(a==null)return new H.eV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eV(a)},
kR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Y(0,a[y],a[x])}return b},
l0:function(a,b,c,d,e,f){H.k(a,"$iscE")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var z
H.a_(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l0)
a.$identity=z
return z},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.hU(z).r}else x=d
w=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.G()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dr(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kU,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dl:H.cv
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dr(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fx:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dr:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fx(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.G()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bd
if(v==null){v=H.c3("self")
$.bd=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.G()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bd
if(v==null){v=H.c3("self")
$.bd=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fy:function(a,b,c,d){var z,y
z=H.cv
y=H.dl
switch(b?-1:a){case 0:throw H.h(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fz:function(a,b){var z,y,x,w,v,u,t,s
z=$.bd
if(z==null){z=H.c3("self")
$.bd=z}y=$.dk
if(y==null){y=H.c3("receiver")
$.dk=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fy(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.G()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.G()
$.ar=y+1
return new Function(z+y+"}")()},
d6:function(a,b,c,d,e,f,g){var z,y
z=J.bl(H.bL(b))
H.a_(c)
y=!!J.J(d).$isd?J.bl(d):d
return H.fA(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.az(a,"String"))},
l6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.az(a,"num"))},
f8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.az(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.az(a,"int"))},
fg:function(a,b){throw H.h(H.az(a,H.U(b).substring(3)))},
l8:function(a,b){var z=J.c_(b)
throw H.h(H.fw(a,z.bz(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fg(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l8(a,b)},
bL:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.h(H.az(a,"List"))},
l2:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.fg(a,b)},
f9:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a_(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f9(J.J(a))
if(z==null)return!1
y=H.fc(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d2)return a
$.d2=!0
try{if(H.bZ(a,b))return a
z=H.c1(b)
y=H.az(a,z)
throw H.h(y)}finally{$.d2=!1}},
d8:function(a,b){if(a!=null&&!H.d5(a,b))H.r(H.az(a,H.c1(b)))
return a},
f3:function(a){var z
if(a instanceof H.u){z=H.f9(J.J(a))
if(z!=null)return H.c1(z)
return"Closure"}return H.b_(a)},
ld:function(a){throw H.h(new P.fG(H.U(a)))},
fa:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
n5:function(a,b,c){return H.bb(a["$as"+H.j(c)],H.aR(b))},
bK:function(a,b,c,d){var z
H.U(c)
H.a_(d)
z=H.bb(a["$as"+H.j(c)],H.aR(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.U(b)
H.a_(c)
z=H.bb(a["$as"+H.j(b)],H.aR(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.a_(b)
z=H.aR(a)
return z==null?null:z[b]},
c1:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.v(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.db(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.ky(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ky:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aS(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aS(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aS(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kQ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
db:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.bW("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}v="<"+z.i(0)+">"
return v},
bb:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b7:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aR(a)
y=J.J(a)
if(y[b]==null)return!1
return H.f6(H.bb(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.U(b)
H.bL(c)
H.U(d)
if(a==null)return a
z=H.b7(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.db(c,0,null)
throw H.h(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
n3:function(a,b,c){return a.apply(b,H.bb(J.J(b)["$as"+H.j(c)],H.aR(b)))},
fd:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fd(z)}return!1},
d5:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fd(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.J(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.d5(a,b))throw H.h(H.az(a,H.c1(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fc(a,b,c,d)
if('func' in a)return c.builtin$cls==="cE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bh" in y.prototype))return!1
w=y.prototype["$as"+"bh"]
v=H.bb(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c1(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f6(H.bb(r,z),b,u,d)},
fc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.al(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.al(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.al(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.al(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l5(m,b,l,d)},
l5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
n4:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
l3:function(a){var z,y,x,w,v,u
z=H.U($.fb.$1(a))
y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.f5.$2(a,z))
if(z!=null){y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cr(x)
$.co[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cq[z]=x
return x}if(v==="-"){u=H.cr(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ff(a,x)
if(v==="*")throw H.h(P.eC(z))
if(init.leafTags[z]===true){u=H.cr(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ff(a,x)},
ff:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dd(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cr:function(a){return J.dd(a,!1,null,!!a.$isC)},
l4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cr(z)
else return J.dd(z,c,null,null)},
kZ:function(){if(!0===$.da)return
$.da=!0
H.l_()},
l_:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cq=Object.create(null)
H.kV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fh.$1(v)
if(u!=null){t=H.l4(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kV:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b6(C.A,H.b6(C.F,H.b6(C.n,H.b6(C.n,H.b6(C.E,H.b6(C.B,H.b6(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fb=new H.kW(v)
$.f5=new H.kX(u)
$.fh=new H.kY(t)},
b6:function(a,b){return a(b)||b},
fi:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fj:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hT:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bl(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"a;a,b,c,d,e,f",
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
q:{
ay:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
er:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hE:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dW:function(a,b){return new H.hE(a,b==null?null:b.method)}}},
h8:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cJ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h8(a,y,z?null:b.receiver)}}},
iS:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lg:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eV:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gdI:function(){return this},
$iscE:1,
gdI:function(){return this}},
ed:{"^":"u;"},
ik:{"^":"ed;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cu:{"^":"ed;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aC(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
q:{
cv:function(a){return a.a},
dl:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.bl(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"Z;a",
i:function(a){return this.a},
q:{
az:function(a,b){return new H.iG("TypeError: "+H.j(P.c8(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
fv:{"^":"Z;a",
i:function(a){return this.a},
q:{
fw:function(a,b){return new H.fv("CastError: "+H.j(P.c8(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
i2:function(a){return new H.i1(a)}}},
aX:{"^":"hk;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gar:function(a){return new H.dP(this,[H.y(this,0)])},
d1:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cJ(y,b)}else return this.h_(b)},
h_:function(a){var z=this.d
if(z==null)return!1
return this.cc(this.bI(z,J.aC(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.h0(b)},
h0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bI(z,J.aC(a)&0x3ffffff)
x=this.cc(y,a)
if(x<0)return
return y[x].b},
Y:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bN()
this.b=z}this.cC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bN()
this.c=y}this.cC(y,b,c)}else{x=this.d
if(x==null){x=this.bN()
this.d=x}w=J.aC(b)&0x3ffffff
v=this.bI(x,w)
if(v==null)this.bS(x,w,[this.bO(b,c)])
else{u=this.cc(v,b)
if(u>=0)v[u].b=c
else v.push(this.bO(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.be(this))
z=z.c}},
cC:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.b5(a,b)
if(z==null)this.bS(a,b,this.bO(b,c))
else z.b=c},
eo:function(){this.r=this.r+1&67108863},
bO:function(a,b){var z,y
z=new H.hc(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eo()
return z},
cc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dS(this)},
b5:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cJ:function(a,b){return this.b5(a,b)!=null},
bN:function(){var z=Object.create(null)
this.bS(z,"<non-identifier-key>",z)
this.eh(z,"<non-identifier-key>")
return z},
$isdO:1},
hc:{"^":"a;a,b,0c,0d"},
dP:{"^":"fO;a,$ti",
gl:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hd(z,z.r,this.$ti)
y.c=z.e
return y}},
hd:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.be(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kW:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kX:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kY:{"^":"u:27;a",
$1:function(a){return this.a(H.U(a))}},
h6:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdY:1,
q:{
h7:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fY("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kQ:function(a){return J.dH(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){return a},
aP:function(a,b,c){H.bL(b)
if(a>>>0!==a||a>=c)throw H.h(H.aQ(b,a))},
kx:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kP(a,b,c))
return b},
hA:{"^":"m;",$ismN:1,"%":"DataView;ArrayBufferView;cN|eP|eQ|hz|eR|eS|aO"},
cN:{"^":"hA;",
gl:function(a){return a.length},
$isC:1,
$asC:I.d7},
hz:{"^":"eQ;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
$asc9:function(){return[P.w]},
$ast:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aO:{"^":"eS;",
$asc9:function(){return[P.A]},
$ast:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
mj:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mk:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ml:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mm:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mn:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mo:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hB:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
by:function(a,b,c){return new Uint8Array(a.subarray(b,H.kx(b,c,a.length)))},
"%":";Uint8Array"},
eP:{"^":"cN+t;"},
eQ:{"^":"eP+c9;"},
eR:{"^":"cN+t;"},
eS:{"^":"eR+c9;"}}],["","",,P,{"^":"",
je:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kF()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b8(new P.jg(z),1)).observe(y,{childList:true})
return new P.jf(z,y,x)}else if(self.setImmediate!=null)return P.kG()
return P.kH()},
mT:[function(a){self.scheduleImmediate(H.b8(new P.jh(H.b(a,{func:1,ret:-1})),0))},"$1","kF",4,0,11],
mU:[function(a){self.setImmediate(H.b8(new P.ji(H.b(a,{func:1,ret:-1})),0))},"$1","kG",4,0,11],
mV:[function(a){P.cV(C.m,H.b(a,{func:1,ret:-1}))},"$1","kH",4,0,11],
cV:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.a0(a.a,1000)
return P.kc(z<0?0:z,b)},
eg:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b0]})
z=C.f.a0(a.a,1000)
return P.kd(z<0?0:z,b)},
kB:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.ap]}))return b.hn(a,null,P.a,P.ap)
if(H.bZ(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kA:function(){var z,y
for(;z=$.b5,z!=null;){$.bI=null
y=z.b
$.b5=y
if(y==null)$.bH=null
z.a.$0()}},
n2:[function(){$.d3=!0
try{P.kA()}finally{$.bI=null
$.d3=!1
if($.b5!=null)$.$get$d_().$1(P.f7())}},"$0","f7",0,0,3],
f2:function(a){var z=new P.eJ(H.b(a,{func:1,ret:-1}))
if($.b5==null){$.bH=z
$.b5=z
if(!$.d3)$.$get$d_().$1(P.f7())}else{$.bH.b=z
$.bH=z}},
kE:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b5
if(z==null){P.f2(a)
$.bI=$.bH
return}y=new P.eJ(a)
x=$.bI
if(x==null){y.b=z
$.bI=y
$.b5=y}else{y.b=x.b
x.b=y
$.bI=y
if(y.b==null)$.bH=y}},
l9:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.j===y){P.cn(null,null,C.j,a)
return}y.toString
P.cn(null,null,y,H.b(y.bY(a),z))},
iB:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.O
if(y===C.j){y.toString
return P.cV(a,b)}return P.cV(a,H.b(y.bY(b),z))},
iC:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b0]}
H.b(b,z)
y=$.O
if(y===C.j){y.toString
return P.eg(a,b)}x=y.cZ(b,P.b0)
$.O.toString
return P.eg(a,H.b(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.kE(new P.kC(z,e))},
f0:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
f1:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
kD:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cn:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bY(d):c.fL(d,-1)
P.f2(d)},
jg:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jf:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jh:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ji:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eY:{"^":"a;a,0b,c",
e3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b8(new P.kf(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b8(new P.ke(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isb0:1,
q:{
kc:function(a,b){var z=new P.eY(!0,0)
z.e3(a,b)
return z},
kd:function(a,b){var z=new P.eY(!1,0)
z.e4(a,b)
return z}}},
kf:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ke:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dU(w,x)}z.c=y
this.d.$1(z)}},
b4:{"^":"a;0a,b,c,d,e,$ti",
h6:function(a){if(this.c!==6)return!0
return this.b.b.co(H.b(this.d,{func:1,ret:P.a6,args:[P.a]}),a.a,P.a6,P.a)},
fZ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.ap]}))return H.d8(w.hs(z,a.a,a.b,null,y,P.ap),x)
else return H.d8(w.co(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aL:{"^":"a;cT:a<,b,0f3:c<,$ti",
dF:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kB(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aL(0,$.O,[c])
w=b==null?1:3
this.cD(new P.b4(x,w,a,b,[z,c]))
return x},
hx:function(a,b){return this.dF(a,null,b)},
cD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb4")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaL")
z=y.a
if(z<4){y.cD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.b(new P.jw(this,a),{func:1,ret:-1}))}},
cP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb4")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaL")
y=u.a
if(y<4){u.cP(a)
return}this.a=y
this.c=u.c}z.a=this.b7(a)
y=this.b
y.toString
P.cn(null,null,y,H.b(new P.jB(z,this),{func:1,ret:-1}))}},
bQ:function(){var z=H.k(this.c,"$isb4")
this.c=null
return this.b7(z)},
b7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cG:function(a){var z,y,x,w
z=H.y(this,0)
H.d8(a,{futureOr:1,type:z})
y=this.$ti
x=H.b7(a,"$isbh",y,"$asbh")
if(x){z=H.b7(a,"$isaL",y,null)
if(z)P.eL(a,this)
else P.jx(a,this)}else{w=this.bQ()
H.B(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bE:[function(a,b){var z
H.k(b,"$isap")
z=this.bQ()
this.a=8
this.c=new P.ae(a,b)
P.bE(this,z)},function(a){return this.bE(a,null)},"hE","$2","$1","ged",4,2,30],
$isbh:1,
q:{
jx:function(a,b){var z,y,x
b.a=1
try{a.dF(new P.jy(b),new P.jz(b),null)}catch(x){z=H.aT(x)
y=H.ba(x)
P.l9(new P.jA(b,z,y))}},
eL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaL")
if(z>=4){y=b.bQ()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.k(b.c,"$isb4")
b.a=2
b.c=a
a.cP(y)}},
bE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.cm(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.k(r,"$isae")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.jE(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jD(x,b,r).$0()}else if((y&2)!==0)new P.jC(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.J(y).$isbh){if(y.a>=4){n=H.k(t.c,"$isb4")
t.c=null
b=t.b7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eL(y,t)
return}}m=b.b
n=H.k(m.c,"$isb4")
m.c=null
b=m.b7(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
jw:{"^":"u:2;a,b",
$0:function(){P.bE(this.a,this.b)}},
jB:{"^":"u:2;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
jy:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cG(a)}},
jz:{"^":"u:34;a",
$2:function(a,b){this.a.bE(a,H.k(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
jA:{"^":"u:2;a,b,c",
$0:function(){this.a.bE(this.b,this.c)}},
jE:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dE(H.b(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.ba(v)
if(this.d){w=H.k(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.J(z).$isbh){if(z instanceof P.aL&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.k(z.gf3(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hx(new P.jF(t),null)
w.a=!1}}},
jF:{"^":"u:37;a",
$1:function(a){return this.a}},
jD:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.co(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.ba(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
jC:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isae")
w=this.c
if(w.h6(z)&&w.e!=null){v=this.b
v.b=w.fZ(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.ba(u)
w=H.k(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
eJ:{"^":"a;a,0b"},
cR:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aL(0,$.O,[P.A])
z.a=0
this.h5(new P.io(z,this),!0,new P.ip(z,y),y.ged())
return y}},
io:{"^":"u;a,b",
$1:function(a){H.B(a,H.aB(this.b,"cR",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aB(this.b,"cR",0)]}}},
ip:{"^":"u:2;a,b",
$0:function(){this.b.cG(this.a.a)}},
eb:{"^":"a;$ti"},
im:{"^":"a;"},
b0:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isZ:1},
km:{"^":"a;",$ismS:1},
kC:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dX()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jZ:{"^":"km;",
ht:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.O){a.$0()
return}P.f0(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.ba(x)
P.cm(null,null,this,z,H.k(y,"$isap"))}},
hu:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.O){a.$1(b)
return}P.f1(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.ba(x)
P.cm(null,null,this,z,H.k(y,"$isap"))}},
fL:function(a,b){return new P.k0(this,H.b(a,{func:1,ret:b}),b)},
bY:function(a){return new P.k_(this,H.b(a,{func:1,ret:-1}))},
cZ:function(a,b){return new P.k1(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dE:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.j)return a.$0()
return P.f0(null,null,this,a,b)},
co:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.j)return a.$1(b)
return P.f1(null,null,this,a,b,c,d)},
hs:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.j)return a.$2(b,c)
return P.kD(null,null,this,a,b,c,d,e,f)},
hn:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
k0:{"^":"u;a,b,c",
$0:function(){return this.a.dE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k_:{"^":"u:3;a,b",
$0:function(){return this.a.ht(this.b)}},
k1:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hu(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hf:function(a,b,c){H.bL(a)
return H.v(H.kR(a,new H.aX(0,0,[b,c])),"$isdO",[b,c],"$asdO")},
he:function(a,b){return new H.aX(0,0,[a,b])},
hg:function(a,b,c,d){return new P.jL(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.d4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bJ()
C.a.h(y,a)
try{P.kz(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ec(b,H.l2(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cF:function(a,b,c){var z,y,x
if(P.d4(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$bJ()
C.a.h(y,a)
try{x=z
x.a=P.ec(x.gax(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gax()+c
y=z.gax()
return y.charCodeAt(0)==0?y:y},
d4:function(a){var z,y
for(z=0;y=$.$get$bJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
kz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
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
dS:function(a){var z,y,x
z={}
if(P.d4(a))return"{...}"
y=new P.bW("")
try{C.a.h($.$get$bJ(),a)
x=y
x.a=x.gax()+"{"
z.a=!0
J.fo(a,new P.hl(z,y))
z=y
z.a=z.gax()+"}"}finally{z=$.$get$bJ()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gax()
return z.charCodeAt(0)==0?z:z},
jL:{"^":"jG;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eO(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d1()
this.b=z}return this.cE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d1()
this.c=y}return this.cE(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.d1()
this.d=z}y=this.cH(b)
x=z[y]
if(x==null)z[y]=[this.bD(b)]
else{if(this.cM(x,b)>=0)return!1
x.push(this.bD(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cQ(this.c,b)
else return this.eW(0,b)},
eW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.el(z,b)
x=this.cM(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cE:function(a,b){H.B(b,H.y(this,0))
if(H.k(a[b],"$isd0")!=null)return!1
a[b]=this.bD(b)
return!0},
cQ:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd0")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cF:function(){this.r=this.r+1&67108863},
bD:function(a){var z,y
z=new P.d0(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cF()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cF()},
cH:function(a){return J.aC(a)&0x3ffffff},
el:function(a,b){return a[this.cH(b)]},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
q:{
d1:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d0:{"^":"a;a,0b,0c"},
jM:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.be(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
eO:function(a,b,c){var z=new P.jM(a,b,[c])
z.c=a.e
return z}}},
jG:{"^":"i3;"},
cd:{"^":"jN;",$ise:1,$isd:1},
t:{"^":"a;$ti",
gX:function(a){return new H.dQ(a,this.gl(a),0,[H.bK(this,a,"t",0)])},
F:function(a,b){return this.k(a,b)},
hA:function(a,b){var z,y,x
z=H.c([],[H.bK(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.Y(z,y,this.k(a,y));++y}return z},
hz:function(a){return this.hA(a,!0)},
i:function(a){return P.cF(a,"[","]")}},
hk:{"^":"aa;"},
hl:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aa:{"^":"a;$ti",
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bK(this,a,"aa",0),H.bK(this,a,"aa",1)]})
for(z=J.bM(this.gar(a));z.E();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bc(this.gar(a))},
i:function(a){return P.dS(a)},
$isa4:1},
i5:{"^":"a;$ti",
i:function(a){return P.cF(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.di("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=P.eO(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$ise:1},
i3:{"^":"i5;"},
jN:{"^":"a+t;"}}],["","",,P,{"^":"",cz:{"^":"a;$ti"},du:{"^":"im;$ti"},fQ:{"^":"cz;",
$ascz:function(){return[P.o,[P.d,P.A]]}},iZ:{"^":"fQ;a"},j_:{"^":"du;",
fQ:function(a,b,c){var z,y,x,w
z=a.length
P.e3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kl(0,0,x)
if(w.ej(a,b,z)!==z)w.cW(C.i.c2(a,z-1),0)
return C.I.by(x,0,w.b)},
fP:function(a){return this.fQ(a,0,null)},
$asdu:function(){return[P.o,[P.d,P.A]]}},kl:{"^":"a;a,b,c",
cW:function(a,b){var z,y,x,w,v
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
ej:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c2(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b4(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cW(w,C.i.b4(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fS:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.b_(a)+"'"},
hh:function(a,b,c,d){var z,y
H.B(b,d)
z=J.h4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Y(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
hi:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.E();)C.a.h(y,H.B(x.gO(x),c))
if(b)return y
return H.v(J.bl(y),"$isd",z,"$asd")},
cS:function(a,b,c){var z,y
z=P.A
H.v(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.v(a,"$isaW",[z],"$asaW")
y=a.length
c=P.e3(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.e2(z?C.a.by(a,b,c):a)}return P.iq(a,b,c)},
iq:function(a,b,c){var z,y,x
H.v(a,"$ise",[P.A],"$ase")
z=J.bM(a)
for(y=0;y<b;++y)if(!z.E())throw H.h(P.ah(b,0,y,null,null))
x=[]
for(;z.E();)x.push(z.gO(z))
return H.e2(x)},
hV:function(a,b,c){return new H.h6(a,H.h7(a,!1,!0,!1))},
kk:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.A],"$asd")
if(c===C.q){z=$.$get$f_().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fP(H.B(b,H.aB(c,"cz",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hQ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fS(a)},
q:function(a){return new P.eK(a)},
df:function(a){H.l7(a)},
a6:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.f.b8(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fH(H.hP(this))
y=P.bN(H.hN(this))
x=P.bN(H.hJ(this))
w=P.bN(H.hK(this))
v=P.bN(H.hM(this))
u=P.bN(H.hO(this))
t=P.fI(H.hL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fH:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bN:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"T;"},
"+double":0,
aU:{"^":"a;a",
j:function(a,b){return new P.aU(C.f.a8(this.a*b))},
a9:function(a,b){return C.f.a9(this.a,H.k(b,"$isaU").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aU))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fN()
y=this.a
if(y<0)return"-"+new P.aU(0-y).i(0)
x=z.$1(C.f.a0(y,6e7)%60)
w=z.$1(C.f.a0(y,1e6)%60)
v=new P.fM().$1(y%1e6)
return""+C.f.a0(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dC:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fM:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fN:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
dX:{"^":"Z;",
i:function(a){return"Throw of null."}},
aD:{"^":"Z;a,b,c,d",
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbG()+y+x
if(!this.a)return w
v=this.gbF()
u=P.c8(this.b)
return w+v+": "+H.j(u)},
q:{
fq:function(a){return new P.aD(!1,null,null,a)},
c2:function(a,b,c){return new P.aD(!0,a,b,c)},
di:function(a){return new P.aD(!1,null,a,"Must not be null")}}},
cg:{"^":"aD;e,f,a,b,c,d",
gbG:function(){return"RangeError"},
gbF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
ch:function(a,b,c){return new P.cg(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.cg(b,c,!0,a,d,"Invalid value")},
e3:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ah(b,a,c,"end",f))
return b}return c}}},
h1:{"^":"aD;e,l:f>,a,b,c,d",
gbG:function(){return"RangeError"},
gbF:function(){if(J.fl(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.a_(e!=null?e:J.bc(b))
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iU:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ad:function(a){return new P.iU(a)}}},
iR:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eC:function(a){return new P.iR(a)}}},
ij:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fD:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c8(z))+"."},
q:{
be:function(a){return new P.fD(a)}}},
hF:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
e9:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fG:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eK:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fY:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bz(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"T;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gX(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.di("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h2(this,"(",")")}},
cG:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a4:{"^":"a;$ti"},
I:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"a;"},
o:{"^":"a;",$isdY:1},
"+String":0,
bW:{"^":"a;ax:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
ec:function(a,b,c){var z=J.bM(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.E())}else{a+=H.j(z.gO(z))
for(;z.E();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cy:function(a,b){var z=document.createElement("canvas")
return z},
fP:function(a){H.k(a,"$isa3")
return"wheel"},
cl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a,b,c,d){var z,y
z=W.cl(W.cl(W.cl(W.cl(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f4:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.j)return a
return z.cZ(a,b)},
bk:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
li:{"^":"cP;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
lj:{"^":"m;0l:length=","%":"AccessibleNodeList"},
lk:{"^":"bk;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ll:{"^":"bk;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fu:{"^":"m;","%":";Blob"},
cx:{"^":"bk;",
bw:function(a,b,c){if(c!=null)return a.getContext(b,P.kJ(c,null))
return a.getContext(b)},
dK:function(a,b){return this.bw(a,b,null)},
$iscx:1,
"%":"HTMLCanvasElement"},
dp:{"^":"m;",$isdp:1,"%":"CanvasRenderingContext2D"},
lr:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lt:{"^":"c6;0l:length=","%":"CSSPerspective"},
lu:{"^":"cC;0n:x=,0p:y=","%":"CSSPositionValue"},
lv:{"^":"c6;0n:x=,0p:y=","%":"CSSRotation"},
bf:{"^":"m;",$isbf:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lw:{"^":"c6;0n:x=,0p:y=","%":"CSSScale"},
lx:{"^":"jm;0l:length=",
dL:function(a,b){var z=a.getPropertyValue(this.ea(a,b))
return z==null?"":z},
ea:function(a,b){var z,y
z=$.$get$dv()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fJ()+b
if(z in a)return z
return b},
gbZ:function(a){return a.bottom},
gag:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gah:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"a;",
gaI:function(a){return this.dL(a,"left")}},
cC:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c6:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
ly:{"^":"cC;0l:length=","%":"CSSTransformValue"},
lz:{"^":"c6;0n:x=,0p:y=","%":"CSSTranslation"},
lA:{"^":"cC;0l:length=","%":"CSSUnparsedValue"},
lB:{"^":"m;0l:length=","%":"DataTransferItemList"},
lC:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
lD:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lE:{"^":"fK;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fK:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lF:{"^":"jo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.a9,P.T]]},
$ast:function(){return[[P.a9,P.T]]},
$ise:1,
$ase:function(){return[[P.a9,P.T]]},
$isd:1,
$asd:function(){return[[P.a9,P.T]]},
$asx:function(){return[[P.a9,P.T]]},
"%":"ClientRectList|DOMRectList"},
fL:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gah(a))+" x "+H.j(this.gag(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b7(b,"$isa9",[P.T],"$asa9")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaI(b)&&a.top===z.gb0(b)&&this.gah(a)===z.gah(b)&&this.gag(a)===z.gag(b)},
gT:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF)},
gbZ:function(a){return a.bottom},
gag:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.T]},
"%":";DOMRectReadOnly"},
lG:{"^":"jq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.o]},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
lH:{"^":"m;0l:length=","%":"DOMTokenList"},
jl:{"^":"cd;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa1")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hz(this)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asd:function(){return[W.a1]}},
a1:{"^":"K;",
gd0:function(a){return new W.jl(a,a.children)},
gbc:function(a){return P.hS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
a7:{"^":"m;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"m;",
cX:["dP",function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.b8(H.b(c,{func:1,args:[W.a7]}),1),!1)},
$isa3:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eT|eU|eW|eX"},
bg:{"^":"fu;",$isbg:1,"%":"File"},
m_:{"^":"jv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asx:function(){return[W.bg]},
"%":"FileList"},
m0:{"^":"a3;0l:length=","%":"FileWriter"},
m3:{"^":"bk;0l:length=","%":"HTMLFormElement"},
bi:{"^":"m;",$isbi:1,"%":"Gamepad"},
m4:{"^":"cP;0n:x=,0p:y=","%":"Gyroscope"},
m5:{"^":"m;0l:length=","%":"History"},
m6:{"^":"jI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ca:{"^":"m;0d4:data=",$isca:1,"%":"ImageData"},
dG:{"^":"bk;",$isdG:1,"%":"HTMLImageElement"},
bm:{"^":"cW;",$isbm:1,"%":"KeyboardEvent"},
mb:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
mc:{"^":"cP;0n:x=,0p:y=","%":"Magnetometer"},
me:{"^":"m;0l:length=","%":"MediaList"},
mf:{"^":"a3;",
cX:function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.dP(a,b,c,!1)},
"%":"MessagePort"},
mg:{"^":"jO;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hw(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hw:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mh:{"^":"jP;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hx(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hx:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bn:{"^":"m;",$isbn:1,"%":"MimeType"},
mi:{"^":"jR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asx:function(){return[W.bn]},
"%":"MimeTypeArray"},
av:{"^":"cW;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jk:{"^":"cd;a",
gX:function(a){var z=this.a.childNodes
return new W.dE(z,z.length,-1,[H.bK(C.J,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$ase:function(){return[W.K]},
$asd:function(){return[W.K]}},
K:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.dQ(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hC:{"^":"jT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bq:{"^":"m;0l:length=",$isbq:1,"%":"Plugin"},
ms:{"^":"jX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"PluginArray"},
mx:{"^":"k2;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.i0(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"RTCStatsReport"},
i0:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
my:{"^":"bk;0l:length=","%":"HTMLSelectElement"},
cP:{"^":"a3;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a3;",$isbu:1,"%":"SourceBuffer"},
mz:{"^":"eU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asx:function(){return[W.bu]},
"%":"SourceBufferList"},
bv:{"^":"m;",$isbv:1,"%":"SpeechGrammar"},
mA:{"^":"k4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"m;0l:length=",$isbw:1,"%":"SpeechRecognitionResult"},
mC:{"^":"k7;",
k:function(a,b){return a.getItem(H.U(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.il(z))
return z},
gl:function(a){return a.length},
$asaa:function(){return[P.o,P.o]},
$isa4:1,
$asa4:function(){return[P.o,P.o]},
"%":"Storage"},
il:{"^":"u:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"a3;",$isby:1,"%":"TextTrack"},
bz:{"^":"a3;",$isbz:1,"%":"TextTrackCue|VTTCue"},
mH:{"^":"kb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asx:function(){return[W.bz]},
"%":"TextTrackCueList"},
mI:{"^":"eX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.by]},
$ast:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asx:function(){return[W.by]},
"%":"TextTrackList"},
mJ:{"^":"m;0l:length=","%":"TimeRanges"},
bA:{"^":"m;",$isbA:1,"%":"Touch"},
b1:{"^":"cW;",$isb1:1,"%":"TouchEvent"},
mK:{"^":"kh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$asx:function(){return[W.bA]},
"%":"TouchList"},
mL:{"^":"m;0l:length=","%":"TrackDefaultList"},
cW:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mO:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mQ:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mR:{"^":"a3;0l:length=","%":"VideoTrackList"},
bD:{"^":"av;",
gfT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gfS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
jd:{"^":"a3;",
f_:function(a,b){return a.requestAnimationFrame(H.b8(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mW:{"^":"ko;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$ise:1,
$ase:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asx:function(){return[W.bf]},
"%":"CSSRuleList"},
mX:{"^":"fL;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b7(b,"$isa9",[P.T],"$asa9")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaI(b)&&a.top===z.gb0(b)&&a.width===z.gah(b)&&a.height===z.gag(b)},
gT:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gag:function(a){return a.height},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mZ:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asx:function(){return[W.bi]},
"%":"GamepadList"},
n_:{"^":"ks;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n0:{"^":"ku;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asx:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
n1:{"^":"kw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asx:function(){return[W.bx]},
"%":"StyleSheetList"},
jr:{"^":"cR;a,b,c,$ti",
h5:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mY:{"^":"jr;a,b,c,$ti"},
js:{"^":"eb;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.fn(this.b,this.c,z,!1)},
q:{
Y:function(a,b,c,d,e){var z=c==null?null:W.f4(new W.jt(c),W.a7)
z=new W.js(0,a,b,z,!1,[e])
z.fg()
return z}}},
jt:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa7"))}},
x:{"^":"a;$ti",
gX:function(a){return new W.dE(a,this.gl(a),-1,[H.bK(this,a,"x",0)])}},
dE:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fm(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jm:{"^":"m+fF;"},
jn:{"^":"m+t;"},
jo:{"^":"jn+x;"},
jp:{"^":"m+t;"},
jq:{"^":"jp+x;"},
ju:{"^":"m+t;"},
jv:{"^":"ju+x;"},
jH:{"^":"m+t;"},
jI:{"^":"jH+x;"},
jO:{"^":"m+aa;"},
jP:{"^":"m+aa;"},
jQ:{"^":"m+t;"},
jR:{"^":"jQ+x;"},
jS:{"^":"m+t;"},
jT:{"^":"jS+x;"},
jW:{"^":"m+t;"},
jX:{"^":"jW+x;"},
k2:{"^":"m+aa;"},
eT:{"^":"a3+t;"},
eU:{"^":"eT+x;"},
k3:{"^":"m+t;"},
k4:{"^":"k3+x;"},
k7:{"^":"m+aa;"},
ka:{"^":"m+t;"},
kb:{"^":"ka+x;"},
eW:{"^":"a3+t;"},
eX:{"^":"eW+x;"},
kg:{"^":"m+t;"},
kh:{"^":"kg+x;"},
kn:{"^":"m+t;"},
ko:{"^":"kn+x;"},
kp:{"^":"m+t;"},
kq:{"^":"kp+x;"},
kr:{"^":"m+t;"},
ks:{"^":"kr+x;"},
kt:{"^":"m+t;"},
ku:{"^":"kt+x;"},
kv:{"^":"m+t;"},
kw:{"^":"kv+x;"}}],["","",,P,{"^":"",
kM:function(a){var z,y
z=J.J(a)
if(!!z.$isca){y=z.gd4(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eZ(a.data,a.height,a.width)},
kL:function(a){if(a instanceof P.eZ)return{data:a.a,height:a.b,width:a.c}
return a},
aN:function(a){var z,y,x,w,v
if(a==null)return
z=P.he(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.U(y[w])
z.Y(0,v,a[v])}return z},
kJ:function(a,b){var z={}
a.L(0,new P.kK(z))
return z},
dB:function(){var z=$.dA
if(z==null){z=J.cs(window.navigator.userAgent,"Opera",0)
$.dA=z}return z},
fJ:function(){var z,y
z=$.dx
if(z!=null)return z
y=$.dy
if(y==null){y=J.cs(window.navigator.userAgent,"Firefox",0)
$.dy=y}if(y)z="-moz-"
else{y=$.dz
if(y==null){y=!P.dB()&&J.cs(window.navigator.userAgent,"Trident/",0)
$.dz=y}if(y)z="-ms-"
else z=P.dB()?"-o-":"-webkit-"}$.dx=z
return z},
eZ:{"^":"a;d4:a>,b,c",$isca:1},
kK:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fV:{"^":"cd;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.aB(z,"t",0)
x=W.a1
return new H.hm(new H.jb(z,H.b(new P.fW(),{func:1,ret:P.a6,args:[y]}),[y]),H.b(new P.fX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bc(this.gbJ().a)},
k:function(a,b){var z=this.gbJ()
return z.b.$1(J.dh(z.a,b))},
gX:function(a){var z=P.hi(this.gbJ(),!1,W.a1)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asd:function(){return[W.a1]}},
fW:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa1}},
fX:{"^":"u:25;",
$1:function(a){return H.f(H.k(a,"$isK"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
br:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b7(b,"$isbr",[P.T],null)
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.aC(this.a)
y=J.aC(this.b)
return P.eM(P.bF(P.bF(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.br(z,H.B(x*b,y),this.$ti)}},
jY:{"^":"a;$ti",
gaW:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.B(z+this.c,H.y(this,0))},
gbZ:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b7(b,"$isa9",[P.T],"$asa9")
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gaI(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb0(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaW(b)){if(typeof x!=="number")return x.G()
z=H.B(x+this.d,w)===y.gbZ(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.aC(z)
x=this.b
w=J.aC(x)
if(typeof z!=="number")return z.G()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.B(x+this.d,v)
return P.eM(P.bF(P.bF(P.bF(P.bF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d2:function(a,b){var z,y
H.v(b,"$isbr",[P.T],"$asbr")
z=b.a
y=this.a
if(typeof z!=="number")return z.dJ()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dJ()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"jY;aI:a>,b0:b>,ah:c>,ag:d>,$ti",q:{
hS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",lI:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},lJ:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lK:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lL:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},lM:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lN:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lO:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lP:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},lQ:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lR:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},lS:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},lT:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lU:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lV:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lW:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lX:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lY:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},lZ:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},m1:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},m2:{"^":"bj;0n:x=,0p:y=","%":"SVGForeignObjectElement"},h_:{"^":"bj;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bj:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m7:{"^":"bj;0n:x=,0p:y=","%":"SVGImageElement"},bT:{"^":"m;",$isbT:1,"%":"SVGLength"},ma:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bT]},
$ise:1,
$ase:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$asx:function(){return[P.bT]},
"%":"SVGLengthList"},md:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bV:{"^":"m;",$isbV:1,"%":"SVGNumber"},mp:{"^":"jV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$asx:function(){return[P.bV]},
"%":"SVGNumberList"},mr:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},mt:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},mu:{"^":"m;0l:length=","%":"SVGPointList"},mv:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},mw:{"^":"h_;0n:x=,0p:y=","%":"SVGRectElement"},mD:{"^":"k9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a1;",
gd0:function(a){return new P.fV(a,new W.jk(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mE:{"^":"bj;0n:x=,0p:y=","%":"SVGSVGElement"},ir:{"^":"bj;","%":"SVGTextPathElement;SVGTextContentElement"},mG:{"^":"ir;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bY:{"^":"m;",$isbY:1,"%":"SVGTransform"},mM:{"^":"kj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bY]},
$ise:1,
$ase:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$asx:function(){return[P.bY]},
"%":"SVGTransformList"},mP:{"^":"bj;0n:x=,0p:y=","%":"SVGUseElement"},jJ:{"^":"m+t;"},jK:{"^":"jJ+x;"},jU:{"^":"m+t;"},jV:{"^":"jU+x;"},k8:{"^":"m+t;"},k9:{"^":"k8+x;"},ki:{"^":"m+t;"},kj:{"^":"ki+x;"}}],["","",,P,{"^":"",lm:{"^":"m;0l:length=","%":"AudioBuffer"},ln:{"^":"jj;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new P.fs(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"AudioParamMap"},fs:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lo:{"^":"a3;0l:length=","%":"AudioTrackList"},ft:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mq:{"^":"ft;0l:length=","%":"OfflineAudioContext"},jj:{"^":"m+aa;"}}],["","",,P,{"^":"",cO:{"^":"m;",
hw:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kL(g))
return}if(!!z.$isdG)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fq("Incorrect number or type of arguments"))},
hv:function(a,b,c,d,e,f,g){return this.hw(a,b,c,d,e,f,g,null,null,null)},
$iscO:1,
"%":"WebGLRenderingContext"},is:{"^":"m;",$isis:1,"%":"WebGLTexture"},iP:{"^":"m;",$isiP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mB:{"^":"k6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aN(a.item(b))},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a4,,,]]},
$ise:1,
$ase:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$asx:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},k5:{"^":"m+t;"},k6:{"^":"k5+x;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
b3:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cs:function(a,b,c){var z=H.aB(this,"af",0)
H.b(b,{func:1,ret:P.a6,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.A,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aM:function(a,b){return this.cs(a,null,b)},
cO:function(a){var z
H.v(a,"$ise",[H.aB(this,"af",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cz:function(a,b){var z
H.v(b,"$ise",[H.aB(this,"af",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.an(z,z.length,0,[H.y(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"af",0)
H.B(b,z)
z=[z]
if(this.cO(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cz(x,H.c([b],z))}},
bU:function(a,b){var z,y
H.v(b,"$ise",[H.aB(this,"af",0)],"$ase")
if(this.cO(b)){z=this.a
y=z.length
C.a.bU(z,b)
this.cz(y,b)}},
$ise:1,
q:{
cA:function(a){var z=new O.af([a])
z.b3(a)
return z}}},cL:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
dZ:function(a){var z=this.b
if(!(z==null))z.w(a)},
av:function(){return this.dZ(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gce(z)
else return V.aZ()},
bt:function(a){var z=this.a
if(a==null)C.a.h(z,V.aZ())
else C.a.h(z,a)
this.av()},
at:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",ct:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a_:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbx:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.b(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.b(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.e6])
w.b=!0
this.aJ(w)}},
ad:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ad(0,b)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gU(z))
z.av()
a.cl(this.f)
z=a.dy
y=(z&&C.a).gce(z)
if(y!=null&&this.d!=null)y.dD(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a4(a)
a.ck()
a.dx.at()},
gt:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aJ:function(a){var z=this.z
if(!(z==null))z.w(a)},
a3:function(){return this.aJ(null)},
hd:[function(a){H.k(a,"$isl")
this.e=null
this.aJ(a)},function(){return this.hd(null)},"im","$1","$0","gdC",0,2,0],
hb:[function(a){this.aJ(H.k(a,"$isl"))},function(){return this.hb(null)},"ik","$1","$0","gdB",0,2,0],
ij:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdB(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aV()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a3()},"$2","gha",8,0,8],
il:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdB(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aV()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.P(t.a,y)}}this.a3()},"$2","ghc",8,0,8],
$isaw:1,
q:{
dD:function(a,b,c,d,e,f){var z,y
z=new E.aF()
z.a=d
z.b=!0
y=O.cA(E.aF)
z.y=y
y.aM(z.gha(),z.ghc())
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
z.sbx(0,e)
return z}}},hW:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dW:function(a,b){var z,y,x,w,v
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
z=new O.cL()
y=[V.as]
z.a=H.c([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hY(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cL()
z.a=H.c([],y)
v=z.gt()
v.toString
x=H.b(new E.hZ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cL()
z.a=H.c([],y)
y=z.gt()
y.toString
w=H.b(new E.i_(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bX])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.o,A.cQ])},
ghm:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.j(0,y.gU(y))
this.z=y
z=y}return z},
cl:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gce(z):a;(z&&C.a).h(z,y)},
ck:function(){var z=this.dy
if(z.length>1)z.pop()},
cY:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d1(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Y(0,z,a)},
q:{
hX:function(a,b){var z=new E.hW(a,b)
z.dW(a,b)
return z}}},hY:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hZ:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i_:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a_:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e0:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hq()},function(){return this.e0(null)},"e_","$1","$0","gcA",0,2,0],
gfY:function(){var z,y,x
z=Date.now()
y=C.f.a0(P.dC(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
cR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.e.cb(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.cb(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hq:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iA(this),{func:1,ret:-1,args:[P.T]})
C.t.ei(z)
C.t.f_(z,W.f4(y,P.T))}},
hp:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dC(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.av()
w=x.db
C.a.sl(w.a,0)
w.av()
w=x.dx
C.a.sl(w.a,0)
w.av()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a4(this.e)}}catch(v){z=H.aT(v)
y=H.ba(v)
P.df("Error: "+H.j(z))
P.df("Stack: "+H.j(y))
throw H.h(z)}},
q:{
iz:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscx)return E.ef(a,!0,!0,!0,!1)
y=W.cy(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd0(a).h(0,y)
w=E.ef(y,!0,!0,!0,!1)
w.a=a
return w},
ef:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iy()
y=P.hf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bw(a,"webgl",y)
x=H.k(x==null?C.k.bw(a,"experimental-webgl",y):x,"$iscO")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hX(x,a)
w=new T.it(x)
w.b=H.a_(x.getParameter(3379))
w.c=H.a_(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iV(a)
v=new X.h9()
v.c=new X.au(!1,!1,!1)
v.d=P.hg(null,null,null,P.A)
w.b=v
v=new X.hy(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hj(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iE(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eb,P.a]])
w.z=v
u=document
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.geB(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.geE(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.gey(),q),!1,r))
v=w.z
p=W.bm
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.geG(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.geF(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.geJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.geL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.geK(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.Y(a,H.U(W.fP(a)),H.b(w.geM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.geC(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geD(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.geN(),q),!1,r))
r=w.z
q=W.b1
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.geV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.geT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.geU(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.cR()
return z}}},iA:{"^":"u:28;a",
$1:function(a){var z
H.l6(a)
z=this.a
if(z.z){z.z=!1
z.hp()}}}}],["","",,Z,{"^":"",eH:{"^":"a;a,b",q:{
cZ:function(a,b,c){var z
H.v(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bG(c)),35044)
a.bindBuffer(b,null)
return new Z.eH(b,z)}}},dm:{"^":"ct;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.q('Failed to bind buffer attribute "'+J.am(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.am(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eI:{"^":"a;a",$islp:1},cw:{"^":"a;a,0b,c,d",
aq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
aK:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a4:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.am(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismF:1},cb:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b_(this.c)+"'")+"]"}},b2:{"^":"a;a",
gct:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$b3().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
fK:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eG()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
q:{
ak:function(a){return new Z.b2(a)}}}}],["","",,D,{"^":"",dq:{"^":"a;"},aV:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fT(z))
return x!==0},
fU:function(){return this.w(null)},
hr:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
au:function(a){return this.hr(a,!0,!1)},
q:{
D:function(){var z=new D.aV()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fT:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bP:{"^":"l;c,d,a,0b,$ti"},bQ:{"^":"l;c,d,a,0b,$ti"},G:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dn:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"lq<"}},dL:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dM:{"^":"l;c,a,0b"},h9:{"^":"a;0a,0b,0c,0d",
hj:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dM(a,this)
y.b=!0
return z.w(y)},
hf:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dM(a,this)
y.b=!0
return z.w(y)}},dR:{"^":"cf;x,y,c,d,e,a,0b"},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
al:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.N(y.a+x*w,y.b+v*u)
u=this.a.gaC()
s=new X.bo(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cj:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.al(a,b))
return!0},
aU:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dN()
if(typeof z!=="number")return z.dH()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.al(a,b))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.al(a,b))
return!0},
hk:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cM(new V.Q(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.w(w)
return!0},
eI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dR(c,a,this.a.gaC(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.N(0,0)}},au:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
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
return z+(this.c?"Shift+":"")}},bo:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bH:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaC()
x=new X.bo(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cj:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bH(a,b,!0))
return!0},
aU:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dN()
if(typeof z!=="number")return z.dH()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bH(a,b,!0))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bH(a,b,!1))
return!0},
hl:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cM(new V.Q(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.w(x)
return!0},
gd7:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbv:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdA:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cM:{"^":"cf;x,c,d,e,a,0b"},cf:{"^":"l;"},ej:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
al:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.N],"$asd")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaC()
w=new X.ej(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hi:function(a){var z
H.v(a,"$isd",[V.N],"$asd")
z=this.b
if(z==null)return!1
z.w(this.al(a,!0))
return!0},
hg:function(a){var z
H.v(a,"$isd",[V.N],"$asd")
z=this.c
if(z==null)return!1
z.w(this.al(a,!0))
return!0},
hh:function(a){var z
H.v(a,"$isd",[V.N],"$asd")
z=this.d
if(z==null)return!1
z.w(this.al(a,!1))
return!0}},iV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaC:function(){var z=this.a
return V.e5(0,0,(z&&C.k).gbc(z).c,C.k.gbc(z).d)},
cK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dL(z,new X.au(y,a.altKey,a.shiftKey))},
aB:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
am:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.N(y-w,x-v)},
aN:function(a){return new V.Q(a.movementX,a.movementY)},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.a8(u.pageX)
C.e.a8(u.pageY)
s=z.left
C.e.a8(u.pageX)
C.a.h(y,new V.N(t-s,C.e.a8(u.pageY)-z.top))}return y},
aj:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dn(z,new X.au(y,a.altKey,a.shiftKey))},
hU:[function(a){this.f=!0},"$1","geE",4,0,4],
hO:[function(a){this.f=!1},"$1","gey",4,0,4],
hR:[function(a){if(this.f)a.preventDefault()},"$1","geB",4,0,4],
hW:[function(a){var z
H.k(a,"$isbm")
if(!this.f)return
z=this.cK(a)
if(this.b.hj(z))a.preventDefault()},"$1","geG",4,0,16],
hV:[function(a){var z
H.k(a,"$isbm")
if(!this.f)return
z=this.cK(a)
if(this.b.hf(z))a.preventDefault()},"$1","geF",4,0,16],
hY:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aB(a)
if(this.x){y=this.aj(a)
x=this.aN(a)
if(this.d.cj(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aj(a)
w=this.am(a)
if(this.c.cj(y,w))a.preventDefault()},"$1","geJ",4,0,5],
i_:[function(a){var z,y,x
H.k(a,"$isav")
this.aB(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geL",4,0,5],
hT:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
if(!(z&&C.k).gbc(z).d2(0,new P.br(a.clientX,a.clientY,[P.T]))){this.aB(a)
y=this.aj(a)
if(this.x){x=this.aN(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geD",4,0,5],
hZ:[function(a){var z,y,x
H.k(a,"$isav")
this.aB(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geK",4,0,5],
hS:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
if(!(z&&C.k).gbc(z).d2(0,new P.br(a.clientX,a.clientY,[P.T]))){this.aB(a)
y=this.aj(a)
if(this.x){x=this.aN(a)
if(this.d.aT(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aT(y,w))a.preventDefault()}},"$1","geC",4,0,5],
i0:[function(a){var z,y
H.k(a,"$isbD")
this.aB(a)
z=new V.Q((a&&C.r).gfS(a),C.r.gfT(a)).v(0,180)
if(this.x){if(this.d.hk(z))a.preventDefault()
return}if(this.r)return
y=this.am(a)
if(this.c.hl(z,y))a.preventDefault()},"$1","geM",4,0,31],
i1:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aj(this.y)
v=this.am(this.y)
this.d.eI(w,v,x)}},"$1","geN",4,0,4],
i9:[function(a){var z
H.k(a,"$isb1")
this.a.focus()
this.f=!0
this.bT(a)
z=this.bP(a)
if(this.e.hi(z))a.preventDefault()},"$1","geV",4,0,10],
i7:[function(a){var z
H.k(a,"$isb1")
this.bT(a)
z=this.bP(a)
if(this.e.hg(z))a.preventDefault()},"$1","geT",4,0,10],
i8:[function(a){var z
H.k(a,"$isb1")
this.bT(a)
z=this.bP(a)
if(this.e.hh(z))a.preventDefault()},"$1","geU",4,0,10]}}],["","",,D,{"^":"",c7:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
aw:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aw(null)},"hC","$1","$0","ge1",0,2,0],
$isW:1,
$isaw:1},W:{"^":"a;",$isaw:1},ha:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eH:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eH(null)},"hX","$1","$0","gcN",0,2,0],
i2:[function(a){var z,y,x
H.v(a,"$ise",[D.W],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geO",4,0,33],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","gev",8,0,17],
i4:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.P(this.e,t)
s=t.d
if(s==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.P(s.a,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geQ",8,0,17],
ee:function(a){var z=C.a.bd(this.e,a)
return z},
$ase:function(){return[D.W]},
$asaf:function(){return[D.W]}},hI:{"^":"a;",$isW:1,$isaw:1},ii:{"^":"a;",$isW:1,$isaw:1},iv:{"^":"a;",$isW:1,$isaw:1},iw:{"^":"a;",$isW:1,$isaw:1},ix:{"^":"a;",$isW:1,$isaw:1}}],["","",,V,{"^":"",
ls:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hv",8,0,32],
lh:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dM(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.i.as("null",c)
return C.i.as(C.e.dG($.n.$2(a,0)?0:a,b),c+b+1)},
b9:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.w],"$asd")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.Y(z,u,C.i.as(z[u],x))}return z},
de:function(a,b){return C.e.hy(Math.pow(b,C.y.cb(Math.log(H.kI(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
j:function(a,b){var z,y,x
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
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aE:{"^":"a;a,b,c,d",
j:function(a,b){var z,y,x,w
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
return new V.aE(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
ce:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isce")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.e.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.e.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.e.j(t,s)
q=a5.b
p=C.e.j(z,q)
o=a5.e
n=C.e.j(w,o)
m=a5.x
l=C.e.j(t,m)
k=a5.c
z=C.e.j(z,k)
j=a5.f
w=C.e.j(w,j)
i=a5.y
t=C.e.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.e.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.e.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.e.j(d,s)
b=C.e.j(h,q)
a=C.e.j(f,o)
a0=C.e.j(d,m)
h=C.e.j(h,k)
f=C.e.j(f,j)
d=C.e.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.e.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.e.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.ce(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ce))return!1
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
z=[P.w]
y=V.b9(H.c([this.a,this.d,this.r],z),3,0)
x=V.b9(H.c([this.b,this.e,this.x],z),3,0)
w=V.b9(H.c([this.c,this.f,this.y],z),3,0)
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
as:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cd:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aZ()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isas")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
if(typeof f!=="number")return f.j()
e=this.f
if(typeof e!=="number")return e.j()
d=this.r
if(typeof d!=="number")return d.j()
c=this.x
if(typeof c!=="number")return c.j()
b=this.y
if(typeof b!=="number")return b.j()
a=this.z
if(typeof a!=="number")return a.j()
a0=this.Q
if(typeof a0!=="number")return a0.j()
a1=this.ch
if(typeof a1!=="number")return a1.j()
a2=this.cx
if(typeof a2!=="number")return a2.j()
a3=this.cy
if(typeof a3!=="number")return a3.j()
a4=this.db
if(typeof a4!=="number")return a4.j()
a5=this.dx
if(typeof a5!=="number")return a5.j()
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.X(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
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
i:function(a){return this.M()},
dv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b9(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b9(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b9(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b9(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(a){return this.dv(a,3,0)},
M:function(){return this.dv("",3,0)},
q:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aZ:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dV:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.B(c)))
y=b.ao(z)
x=y.v(0,Math.sqrt(y.B(y)))
w=z.ao(x)
v=new V.F(a.a,a.b,a.c)
return V.at(x.a,w.a,z.a,x.J(0).B(v),x.b,w.b,z.b,w.J(0).B(v),x.c,w.c,z.c,z.J(0).B(v),0,0,0,1)}}},
N:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.N(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
X:{"^":"a;n:a>,p:b>,c",
G:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bs:{"^":"a;n:a>,p:b>,c,d",
j:function(a,b){return new V.bs(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
e4:{"^":"a;n:a>,p:b>,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e4))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
q:{
e5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e4(a,b,c,d)}}},
Q:{"^":"a;a,b",
h3:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.n.$2(b,0))return new V.Q(0,0)
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
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
h3:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ao:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.F(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.n.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dz:function(){if(!$.n.$2(0,this.a))return!1
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fB:{"^":"dq;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bC:function(a){var z=V.lh(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.w(a)},
scq:function(a,b){},
scf:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bC(z)}z=new D.G("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.K(z)}},
sci:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bC(z)}z=new D.G("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.K(z)}},
sa1:function(a,b){var z,y
b=this.bC(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.w])
z.b=!0
this.K(z)}},
scg:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.K(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.w])
z.b=!0
this.K(z)}},
sc3:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.w])
z.b=!0
this.K(z)}},
ad:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sN(y)}},
q:{
cB:function(){var z=new U.fB()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ds:{"^":"ab;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aL:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ds))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
q:{
dt:function(a){var z=new U.ds()
z.a=a
return z}}},dF:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.K(null)},"ab","$1","$0","gaA",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaA(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geu",8,0,19],
i3:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaA(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geP",8,0,19],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aZ():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
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
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.ab]},
$asaf:function(){return[U.ab]},
$isab:1},ab:{"^":"dq;"},iW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.K(null)},"ab","$1","$0","gaA",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdA()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbv()
z.toString
y=H.b(this.gbM(),y)
C.a.h(z.a,y)
return!0},
ep:[function(a){H.k(a,"$isl")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbK",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbo")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).v(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).v(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
this.b.sN(0)
y=y.I(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).v(0,z.ga2())}this.ab()},"$1","gbL",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sN(y*10*x)
this.ab()}},"$1","gbM",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.at(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isab:1},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.K(null)},"ab","$1","$0","gaA",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdA()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbv()
z.toString
x=H.b(this.gbM(),y)
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
ae:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.Q(z,y)},
ep:[function(a){a=H.f(H.k(a,"$isl"),"$isbo")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbK",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbo")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ae(new V.Q(y.a,y.b).j(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ae(new V.Q(x.a,x.b).j(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ae(new V.Q(y.a,y.b).j(0,2).v(0,z.ga2()))}this.ab()},"$1","gbL",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sN(-y*10*z)
this.ab()}},"$1","gbM",4,0,1],
hH:[function(a){if(H.f(H.k(a,"$isl"),"$isdR").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gem",4,0,1],
hI:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbo")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ae(new V.Q(x.a,x.b).j(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ae(new V.Q(y.a,y.b).j(0,2).v(0,z.ga2()))
this.ab()},"$1","gen",4,0,1],
ie:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
ic:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isej")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ae(new V.Q(y.a,y.b).j(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ae(new V.Q(x.a,x.b).j(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ae(new V.Q(y.a,y.b).j(0,2).v(0,z.ga2()))}this.ab()},"$1","gfe",4,0,1],
ib:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sN(-y*10*z)
this.ab()}},"$1","gfd",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.dy=y
x=b.y
this.c.ad(0,x)
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.at(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.at(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isab:1},iY:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.w(a)},
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.ges(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hJ:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.P(this.b,this.a.b.c))return
H.f(a,"$iscM")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.w])
z.b=!0
this.K(z)}},"$1","ges",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.at(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isab:1}}],["","",,M,{"^":"",fC:{"^":"af;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cB","$1","$0","gS",0,2,0],
i5:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geR",8,0,20],
i6:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geS",8,0,20],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$ase:function(){return[M.ax]},
$asaf:function(){return[M.ax]},
$isax:1},fE:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cB","$1","$0","gS",0,2,0],
saP:function(a){var z,y,x
if(a==null)a=new X.h0()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
saX:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cT])
z.b=!0
this.V(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
a4:function(a){a.cl(this.c)
this.b.W(a)
this.a.W(a)
this.d.ad(0,a)
this.d.a4(a)
this.a.aK(a)
this.b.toString
a.ck()},
$isax:1},fR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.V(null)},"cB","$1","$0","gS",0,2,0],
hP:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gez",8,0,8],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.P(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geA",8,0,8],
saP:function(a){var z,y,x
if(a==null)a=X.dZ(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
saX:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cT])
z.b=!0
this.V(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a4:function(a){var z
a.cl(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ad(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a4(a)
this.a.toString
a.cy.at()
a.db.at()
this.b.toString
a.ck()},
$isax:1},ax:{"^":"a;"}}],["","",,A,{"^":"",dj:{"^":"a;a,b,c"},fr:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d5:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dU:{"^":"cQ;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0ap,0aH,0be,0d8,0d9,0bf,0bg,0da,0dc,0bh,0bi,0dd,0de,0bj,0df,0dg,0bk,0dh,0di,0bl,0bm,0bn,0dj,0dk,0bo,0bp,0dl,0dm,0bq,0dn,0c5,0dq,0c6,0dr,0c7,0ds,0c8,0dt,0c9,0du,0ca,a,b,0c,0d,0e,0f,0r",
dV:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bW("")
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
z=new P.bW("")
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
p=H.c([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
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
o=H.c([],[P.o])
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
n="vec4("+C.a.D(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dw(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isaA")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isaA")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isaA")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isaA")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$iscY")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isaA")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isaA")
this.k3=H.c([],[A.aA])
y=a1.aG
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaA"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.aG=H.f(this.r.m(0,"diffuseTxt"),"$isai")
this.aH=H.f(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.ap=H.f(this.r.m(0,"diffuseTxt"),"$isac")
this.aH=H.f(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.be=H.f(this.r.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.d8=H.f(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bf=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.d9=H.f(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bf=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bi=H.f(this.r.m(0,"shininess"),"$isS")
this.bg=H.f(this.r.m(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.da=H.f(this.r.m(0,"specularTxt"),"$isai")
this.bh=H.f(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.dc=H.f(this.r.m(0,"specularTxt"),"$isac")
this.bh=H.f(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.h:break
case C.c:this.dd=H.f(this.r.m(0,"bumpTxt"),"$isai")
this.bj=H.f(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.de=H.f(this.r.m(0,"bumpTxt"),"$isac")
this.bj=H.f(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.df=H.f(this.r.m(0,"envSampler"),"$isac")
this.dg=H.f(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bk=H.f(this.r.m(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.dh=H.f(this.r.m(0,"reflectTxt"),"$isai")
this.bl=H.f(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.di=H.f(this.r.m(0,"reflectTxt"),"$isac")
this.bl=H.f(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bm=H.f(this.r.m(0,"refraction"),"$isS")
this.bn=H.f(this.r.m(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.h:break
case C.c:this.dj=H.f(this.r.m(0,"refractTxt"),"$isai")
this.bo=H.f(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.dk=H.f(this.r.m(0,"refractTxt"),"$isac")
this.bo=H.f(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bp=H.f(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.h:break
case C.c:this.dl=H.f(this.r.m(0,"alphaTxt"),"$isai")
this.bq=H.f(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.dm=H.f(this.r.m(0,"alphaTxt"),"$isac")
this.bq=H.f(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c5=H.c([],[A.ew])
this.c6=H.c([],[A.ex])
this.c7=H.c([],[A.ey])
this.c8=H.c([],[A.ez])
this.c9=H.c([],[A.eA])
this.ca=H.c([],[A.eB])
if(a1.k2){y=a1.z
if(y>0){this.dn=H.k(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.c5;(x&&C.a).h(x,new A.ew(m,l,k))}}y=a1.Q
if(y>0){this.dq=H.k(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.c6;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dr=H.k(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isS")
x=this.c7;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ds=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isai")
x=this.c8;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dt=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$iscY")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isac")
x=this.c9;(x&&C.a).h(x,new A.eA(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.du=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isai")
x=this.ca;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hp:function(a,b){var z,y
z=a.ap
y=new A.dU(b,z)
y.cw(b,z)
y.dV(a,b)
return y}}},hs:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,ap,aH",
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
ak:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cu(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ak(a,z,"emission")
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
this.ak(a,z,"ambient")
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
this.ak(a,z,"diffuse")
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
this.ak(a,z,"invDiffuse")
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
this.ak(a,z,"specular")
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
this.ak(a,z,"reflect")
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
this.ak(a,z,"refract")
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
i:function(a){return this.ap}},ew:{"^":"a;a,b,c"},ez:{"^":"a;a,b,c,d,e,f,r,x"},ex:{"^":"a;a,b,c,d,e,f,r"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cQ:{"^":"ct;",
cw:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dw:function(a,b,c){var z,y,x
this.c=this.cL(b,35633)
this.d=this.cL(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f8(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f8()
this.fa()},
W:function(a){a.a.useProgram(this.e)
this.f.fV()},
cL:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f8(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f8:function(){var z,y,x,w,v,u
z=H.c([],[A.dj])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dj(y,v.name,u))}this.f=new A.fr(z)},
fa:function(){var z,y,x,w,v,u
z=H.c([],[A.a5])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fR(v.type,v.size,v.name,u))}this.r=new A.iO(z)},
ay:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.cX(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.cX(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cX(z,y,b,a,c)},
b9:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fR:function(a,b,c,d){switch(a){case 5120:return this.ay(b,c,d)
case 5121:return this.ay(b,c,d)
case 5122:return this.ay(b,c,d)
case 5123:return this.ay(b,c,d)
case 5124:return this.ay(b,c,d)
case 5125:return this.ay(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.iJ(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.iM(this.a,this.e,c,d)
case 35667:return new A.iK(this.a,this.e,c,d)
case 35668:return new A.iL(this.a,this.e,c,d)
case 35669:return new A.iN(this.a,this.e,c,d)
case 35674:return new A.iQ(this.a,this.e,c,d)
case 35675:return new A.cY(this.a,this.e,c,d)
case 35676:return new A.aA(this.a,this.e,c,d)
case 35678:return this.ef(b,c,d)
case 35680:return this.eg(b,c,d)
case 35670:throw H.h(this.b9("BOOL",c))
case 35671:throw H.h(this.b9("BOOL_VEC2",c))
case 35672:throw H.h(this.b9("BOOL_VEC3",c))
case 35673:throw H.h(this.b9("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c5:{"^":"a;a,b",
i:function(a){return this.b}},e8:{"^":"cQ;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a5:{"^":"a;"},iO:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
fX:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.fX("\n")}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iK:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iL:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iN:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iI:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cX:function(a,b,c,d,e){var z=new A.iI(a,b,c,e)
z.f=d
z.e=P.hh(d,0,!1,P.A)
return z}}},S:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iJ:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iM:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iQ:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cY:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bG(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aA:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bG(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ai:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a5;a,b,c,d",
dO:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
le:function(a,b,c,d){return F.kN(c,a,d,b,new F.lf())},
kN:function(a,b,c,d,e){var z=F.lc(a,b,new F.kO(H.b(e,{func:1,ret:V.X,args:[P.w]}),d,b,c),null)
if(z==null)return
z.an()
z.h8(new F.j5(),new F.hD())
return z},
lc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aj,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.e7()
y=H.c([],[F.aj])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ck(null,null,new V.aE(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.d3(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ck(null,null,new V.aE(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.d3(d))}}z.d.fH(a+1,b+1,y)
return z},
lf:{"^":"u:35;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
kO:{"^":"u:36;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dg(y.$1(z),x)
x=J.dg(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.B(x)))
u=new V.F(1,0,0)
y=v.ao(!v.u(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.B(y)))
y=t.ao(v)
u=y.v(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.G(0,new V.X(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.P(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a3()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
aQ:function(){if(!this.gd6()){C.a.P(this.a.a.d.b,this)
this.a.a.a3()}this.eX()
this.eY()
this.eZ()},
f5:function(a){this.a=a
C.a.h(a.d.b,this)},
f6:function(a){this.b=a
C.a.h(a.d.c,this)},
f7:function(a){this.c=a
C.a.h(a.d.d,this)},
eX:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
eY:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
eZ:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gd6:function(){return this.a==null||this.b==null||this.c==null},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dz())return
return v.v(0,Math.sqrt(v.B(v)))},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.B(z)))
z=w.I(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.ao(z.v(0,Math.sqrt(z.B(z))))
return z.v(0,Math.sqrt(z.B(z)))},
c1:function(){if(this.d!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
e8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dz())return
return v.v(0,Math.sqrt(v.B(v)))},
eb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.I(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u).j(0,l).G(0,u).I(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.B(z)))
z=k.ao(m)
z=z.v(0,Math.sqrt(z.B(z))).ao(k)
m=z.v(0,Math.sqrt(z.B(z)))}return m},
c_:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
gfN:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y
if(this.gd6())return a+"disposed"
z=a+C.i.as(J.am(this.a.e),0)+", "+C.i.as(J.am(this.b.e),0)+", "+C.i.as(J.am(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.C("")},
q:{
bO:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.f5(a)
z.f6(b)
z.f7(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
fU:{"^":"a;"},
id:{"^":"fU;",
aS:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dN:{"^":"a;"},
hb:{"^":"a;"},
iH:{"^":"hb;",
aS:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
e0:{"^":"a;"},
e6:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
ek:function(a,b,c,d,e){var z,y,x
H.v(d,"$isd",[F.aj],"$asd")
H.v(e,"$isd",[P.A],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aS(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
h8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aj],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.ek(a,v,y,u,t))b.h7(u)}this.a.A()
this.c.cm()
this.d.cm()
this.b.ho()
this.c.cn(new F.iH())
this.d.cn(new F.id())
z=this.e
if(!(z==null))z.au(0)},
d_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gct(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dm])
for(r=0,q=0;q<w;++q){p=b.fK(q)
o=p.gct(p)
C.a.Y(s,q,new Z.dm(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h4(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Y(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bG(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cw(new Z.eH(34962,j),s,b)
i.b=H.c([],[Z.cb])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cb(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cb(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cb(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.D(z,"\n")},
aJ:function(a){var z=this.e
if(!(z==null))z.w(a)},
a3:function(){return this.aJ(null)},
q:{
e7:function(){var z,y
z=new F.e6()
y=new F.j0(z)
y.b=!1
y.c=H.c([],[F.aj])
z.a=y
y=new F.i8(z)
y.b=H.c([],[F.e0])
z.b=y
y=new F.i7(z)
y.b=H.c([],[F.dN])
z.c=y
y=new F.i6(z)
y.b=H.c([],[F.ag])
z.d=y
z.e=null
return z}}},
i6:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.aj],"$asd")
z=H.c([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bO(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.aj],"$asd")
z=H.c([],[F.ag])
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
C.a.h(z,F.bO(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bO(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bO(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bO(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cn:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aS(0,v,t)){v.aQ()
break}}}}},
cm:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfN(x)
if(y)x.aQ()}},
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].c1())x=!1
return x},
c0:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].c_())x=!1
return x},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
i7:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cn:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aS(0,v,t)){v.aQ()
break}}}}},
cm:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.aQ()}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.D(z,"\n")},
M:function(){return this.C("")}},
i8:{"^":"a;a,0b",
gl:function(a){return this.b.length},
ho:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aQ()}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d3:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ck(this.cx,x,u,z,y,w,v,a,t)},
h4:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$aq())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aK())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b3()))return H.c([this.ch],[P.w])
else if(z.u(a,$.$get$aG())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c1:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.L(0,new F.ja(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
c_:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.L(0,new F.j9(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.i.as(J.am(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
M:function(){return this.C("")},
q:{
ck:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.j8(z)
y.b=H.c([],[F.e0])
z.b=y
y=new F.j4(z)
x=[F.dN]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.j1(z)
x=[F.ag]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eE()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$eF().a)!==0?c:null
z.ch=(x&$.$get$b3().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
ja:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
j9:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
j0:{"^":"a;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a3()
return!0},
fI:function(a,b,c,d,e,f,g,h,i){var z=F.ck(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
ba:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].c1()
return!0},
c0:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].c_()
return!0},
fM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
this.A()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
j1:{"^":"a;a,0b,0c,0d",
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
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ag]})
C.a.L(this.b,b)
C.a.L(this.c,new F.j2(this,b))
C.a.L(this.d,new F.j3(this,b))},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
j2:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isag")
if(!J.P(a.a,this.a))this.b.$1(a)}},
j3:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isag")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
j4:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
j6:{"^":"a;"},
j5:{"^":"j6;",
aS:function(a,b,c){return J.P(b.f,c.f)}},
j7:{"^":"a;"},
hD:{"^":"j7;",
h7:function(a){var z,y,x,w,v,u,t,s
H.v(a,"$isd",[F.aj],"$asd")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.B(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.P(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}return}},
j8:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}}}],["","",,O,{"^":"",ho:{"^":"bX;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
Z:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.Z(null)},"e2","$1","$0","gbB",0,2,0],
f1:[function(a){H.k(a,"$isl")
this.a=null
this.Z(a)},function(){return this.f1(null)},"ia","$1","$0","gf0",0,2,0],
hM:[function(a,b){var z=V.as
z=new D.bP(a,H.v(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.Z(z)},"$2","gew",8,0,21],
hN:[function(a,b){var z=V.as
z=new D.bQ(a,H.v(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.Z(z)},"$2","gex",8,0,21],
cI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a0(z.e.length+3,4)*4
x=C.f.a0(z.f.length+3,4)*4
w=C.f.a0(z.r.length+3,4)*4
v=C.f.a0(z.x.length+3,4)*4
u=C.f.a0(z.y.length+3,4)*4
t=C.f.a0(z.z.length+3,4)*4
s=C.f.a0(this.e.a.length+3,4)*4
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aq()
if(c){z=$.$get$aI()
a6=new Z.b2(a6.a|z.a)}if(b){z=$.$get$aH()
a6=new Z.b2(a6.a|z.a)}if(a){z=$.$get$aJ()
a6=new Z.b2(a6.a|z.a)}if(a0){z=$.$get$aK()
a6=new Z.b2(a6.a|z.a)}if(a2){z=$.$get$aG()
a6=new Z.b2(a6.a|z.a)}return new A.hs(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.v(a,"$isd",[T.cU],"$asd")},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cp(x)}}},
dD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cI()
y=H.k(a.fr.k(0,z.ap),"$isdU")
if(y==null){y=A.hp(z,a.a)
a.cY(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aH
z=b.e
if(!(z instanceof Z.cw)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.an()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c0()
u.a.c0()
u=u.e
if(!(u==null))u.au(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fM()
t=t.e
if(!(t==null))t.au(0)}r=b.d.d_(new Z.eI(a.a),w)
r.aq($.$get$aq()).e=this.a.y.c
if(z)r.aq($.$get$aI()).e=this.a.Q.c
if(v)r.aq($.$get$aH()).e=this.a.z.c
if(x.rx)r.aq($.$get$aJ()).e=this.a.ch.c
if(u)r.aq($.$get$aK()).e=this.a.cx.c
if(x.x1)r.aq($.$get$aG()).e=this.a.cy.c
b.e=r}z=T.cU
q=H.c([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gU(u)
v=v.db
v.toString
v.aa(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gU(u)
t=a.dx
t=u.j(0,t.gU(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aa(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghm()
t=a.dx
t=u.j(0,t.gU(t))
a.ch=t
u=t}v=v.fr
v.toString
v.aa(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.aa(u.a5(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.aa(u.a5(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.aa(C.z.a5(u,!0))}if(x.aG>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isas")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bG(H.v(t.a5(0,!0),"$isd",v,"$asd")))
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
case C.c:this.R(q,this.f.d)
v=this.a
u=this.f.d
v.ac(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.f.e)
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
case C.c:this.R(q,this.r.d)
v=this.a
u=this.r.d
v.ac(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.r.e)
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
case C.c:this.R(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.aG,v.aH,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.ap,v.aH,u)
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
v=v.be
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.R(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.d8,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.d9,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.h:v=this.a
u=this.z.f
v=v.bg
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bi
u.a.uniform1f(u.d,s)
break
case C.c:this.R(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.da,v.bh,u)
u=this.a
v=this.z.f
u=u.bg
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bi
v.a.uniform1f(v.d,s)
break
case C.d:this.R(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.dc,v.bh,u)
u=this.a
v=this.z.f
u=u.bg
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bi
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dn
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cp(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c6
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b1(j.gaV(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gaf(j)
g=i.d
h=t.gbu()
s=t.gb2()
t=t.gbb()
g.a.uniform3f(g.d,h,s,t)
t=j.gbV()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbW()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbX()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j).ii()
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaf(j)
s=i.e
h=t.gbu()
g=t.gb2()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gih()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gig()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.c8
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gaZ()
H.v(q,"$isd",t,"$asd")
if(!C.a.bd(q,s)){s.sbr(0,q.length)
C.a.h(q,s)}s=j.gc4(j)
h=i.d
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=j.gbv()
f=i.b
g=s.gaD(s)
h=s.gaE(s)
s=s.gaF()
f.a.uniform3f(f.d,g,h,s)
s=j.gaW(j)
h=i.c
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=m.cp(j.gc4(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaf(j)
g=i.f
f=h.gbu()
s=h.gb2()
h=h.gbb()
g.a.uniform3f(g.d,f,s,h)
h=j.gaZ()
s=h.gbs(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbs(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gbr(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.c9
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gaZ()
H.v(q,"$isd",s,"$asd")
if(!C.a.bd(q,h)){h.sbr(0,q.length)
C.a.h(q,h)}e=m.j(0,j.gU(j))
h=j.gU(j).b1(new V.X(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcr(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b1(new V.X(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cd(0)
d=i.d
n=new Float32Array(H.bG(H.v(new V.ce(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaf(j)
h=i.e
f=d.gbu()
g=d.gb2()
d=d.gbb()
h.a.uniform3f(h.d,f,g,d)
d=j.gaZ()
h=d.gbs(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghG()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.ghF())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbV()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbW()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbX()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.ca
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ()
H.v(q,"$isd",z,"$asd")
if(!C.a.bd(q,t)){t.sbr(0,q.length)
C.a.h(q,t)}t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j)
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=j.gbv()
s=i.d
h=t.gaD(t)
g=t.gaE(t)
t=t.gaF()
s.a.uniform3f(s.d,h,g,t)
t=j.gaW(j)
g=i.e
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaZ()
s=t.gbs(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbs(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gbr(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaf(j)
s=i.y
h=t.gbu()
g=t.gb2()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gio()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gip()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.h:break
case C.c:this.R(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.dd,z.bj,v)
break
case C.d:this.R(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.de,z.bj,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gU(v).cd(0)
a.Q=v}z=z.fy
z.toString
z.aa(v.a5(0,!0))}if(x.dy){this.R(q,this.ch)
z=this.a
v=this.ch
z.a6(z.df,z.dg,v)
switch(x.r){case C.b:break
case C.h:z=this.a
v=this.cx.f
z=z.bk
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.R(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.dh,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.R(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.di,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.h:z=this.a
v=this.cy.f
z=z.bn
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bm
v.a.uniform1f(v.d,t)
break
case C.c:this.R(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dj,z.bo,v)
v=this.a
z=this.cy.f
v=v.bn
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bm
z.a.uniform1f(z.d,t)
break
case C.d:this.R(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dk,z.bo,v)
v=this.a
z=this.cy.f
v=v.bn
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bm
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.h:z=this.a
u=this.db.f
z=z.bp
z.a.uniform1f(z.d,u)
break
case C.c:this.R(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dl,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break
case C.d:this.R(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dm,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.a4(a)
z.aK(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aK(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.d5()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cI().ap}},hq:{"^":"cK;0f,a,b,0c,0d,0e"},cK:{"^":"a;",
b6:["dT",function(){}]},hr:{"^":"cK;a,b,0c,0d,0e"},aY:{"^":"cK;0f,a,b,0c,0d,0e",
cS:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.Z(y)}},
b6:["bA",function(){this.dT()
this.cS(new V.V(1,1,1))}],
saf:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.b6()
z=this.a
z.a=null
z.Z(null)}this.cS(b)}},ht:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
f4:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.Z(z)}},
b6:function(){this.bA()
this.f4(1)}},hu:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
bR:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.Z(z)}},
b6:function(){this.bA()
this.bR(100)}},ie:{"^":"bX;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
Z:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.Z(null)},"e2","$1","$0","gbB",0,2,0],
dD:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.k(0,"Skybox"),"$ise8")
if(z==null){y=a.a
z=new A.e8(y,"Skybox")
z.cw(y,"Skybox")
z.dw(0,$.ih,$.ig)
z.x=z.f.k(0,"posAttr")
z.y=H.f(z.r.k(0,"fov"),"$isS")
z.z=H.f(z.r.k(0,"ratio"),"$isS")
z.Q=H.f(z.r.k(0,"boxClr"),"$isE")
z.ch=H.f(z.r.k(0,"boxTxt"),"$isac")
z.cx=H.f(z.r.k(0,"viewMat"),"$isaA")
a.cY(z)}this.a=z}if(b.e==null){y=b.d.d_(new Z.eI(a.a),$.$get$aq())
y.aq($.$get$aq()).e=this.a.x.c
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
w.ch.dO(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gU(x).cd(0)
w=w.cx
w.toString
w.aa(x.a5(0,!0))
y=b.e
if(y instanceof Z.cw){y.W(a)
y.a4(a)
y.aK(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d5()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bX:{"^":"a;"}}],["","",,T,{"^":"",cU:{"^":"ct;"},ee:{"^":"cU;0b,0c,0d,0e,a"},it:{"^":"a;a,0b,0c,0d,0e",
az:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a7
W.Y(z,"load",H.b(new T.iu(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f2:function(a,b,c){var z,y,x,w
b=V.de(b,2)
z=V.de(a.width,2)
y=V.de(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cy(null,null)
x.width=z
x.height=y
w=H.k(C.k.dK(x,"2d"),"$isdp")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kM(w.getImageData(0,0,x.width,x.height))}}},iu:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f2(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hv(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fU();++z.e}}}],["","",,V,{"^":"",fp:{"^":"a;",
aR:function(a,b){return!0},
i:function(a){return"all"},
$isbU:1},bU:{"^":"a;"},dT:{"^":"a;",
aR:["dS",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aR(0,b))return!0
return!1}],
i:["cv",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbU:1},bp:{"^":"dT;0a",
aR:function(a,b){return!this.dS(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}},i4:{"^":"a;0a",
dX:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.A,P.a6])
for(y=new H.dQ(a,a.gl(a),0,[H.aB(a,"t",0)]);y.E();)z.Y(0,y.d,!0)
this.a=z},
aR:function(a,b){return this.a.d1(0,b)},
i:function(a){var z=this.a
return P.cS(new H.dP(z,[H.y(z,0)]),0,null)},
$isbU:1,
q:{
a2:function(a){var z=new V.i4()
z.dX(a)
return z}}},ea:{"^":"a;a,b,0c,0d",
gh9:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ek(this.a.H(0,b))
w.a=H.c([],[V.bU])
w.c=!1
C.a.h(this.c,w)
return w},
fW:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aR(0,a))return w}return},
i:function(a){return this.b}},eh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fj(this.b,"\n","\\n")
y=H.fj(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ei:{"^":"a;a,b,0c",
i:function(a){return this.b}},iD:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.ea(this,b)
z.c=H.c([],[V.ek])
this.a.Y(0,b,z)}return z},
b_:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ei(this,a)
y=P.o
z.c=new H.aX(0,0,[y,y])
this.b.Y(0,a,z)}return z},
hB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eh])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b4(a,t)
r=y.fW(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cS(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh9(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cS(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eh(o==null?p.b:o,q,t)}++t}}}},ek:{"^":"dT;b,0c,0a",
i:function(a){return this.b.b+": "+this.cv(0)}}}],["","",,X,{"^":"",c4:{"^":"a;",$isaw:1},fZ:{"^":"cT;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
ai:function(a){var z=this.x
if(!(z==null))z.w(a)},
W:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.f.a8(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.a8(w.b*x)
t=C.f.a8(w.c*y)
a.c=t
w=C.f.a8(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cD:function(a,b,c,d,e,f,g){var z,y
z=new X.fZ()
y=new V.aE(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e5(0,0,1,1)
z.r=y
return z}}},h0:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
W:function(a){var z
a.cy.bt(V.aZ())
z=V.aZ()
a.db.bt(z)},
aK:function(a){a.cy.at()
a.db.at()},
$isaw:1,
$isc4:1},hG:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ai:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.ai(null)},"hD","$1","$0","ge5",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bt(V.at(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e_
if(z==null){z=V.dV(new V.X(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.e_=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aL(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bt(r)},
aK:function(a){a.cy.at()
a.db.at()},
$isaw:1,
$isc4:1,
q:{
dZ:function(a,b,c,d){var z,y,x,w
z=new X.hG()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.G("mover",y,z.a,z,[U.ab])
x.b=!0
z.ai(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.G("fov",y,b,z,[P.w])
x.b=!0
z.ai(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.G("near",y,d,z,[P.w])
x.b=!0
z.ai(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.G("far",y,a,z,[P.w])
x.b=!0
z.ai(x)}return z}}},cT:{"^":"a;"}}],["","",,V,{"^":"",
la:function(a){P.iC(C.w,new V.lb(a))},
lb:{"^":"u:38;a",
$1:function(a){H.k(a,"$isb0")
P.df(C.e.dG(this.a.gfY(),2)+" fps")}},
i9:{"^":"a;0a,0b",
dY:function(a,b){var z,y,x,w,v,u,t
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
W.Y(z,"scroll",H.b(new V.ic(x),{func:1,ret:-1,args:[t]}),!1,t)},
fJ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.o],"$asd")
this.f9()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hB(C.a.h2(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.fi(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kk(C.H,s,C.q,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
f9:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iD()
y=P.o
z.a=new H.aX(0,0,[y,V.ea])
z.b=new H.aX(0,0,[y,V.ei])
z.c=z.H(0,"Start")
y=z.H(0,"Start").D(0,"Bold")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").D(0,"Bold")
x=new V.bp()
w=[V.bU]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").D(0,"BoldEnd")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").D(0,"Italic")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").D(0,"Italic")
x=new V.bp()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").D(0,"ItalicEnd")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").D(0,"Code")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").D(0,"Code")
x=new V.bp()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").D(0,"CodeEnd")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").D(0,"LinkHead")
x=V.a2(new H.a0("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").D(0,"LinkTail")
x=V.a2(new H.a0("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").D(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").D(0,"LinkHead")
y=new V.bp()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").D(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").D(0,"LinkTail")
y=new V.bp()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").D(0,"Other").a,new V.fp())
x=z.H(0,"Other").D(0,"Other")
y=new V.bp()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b_("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b_("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b_("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b_("Link")
x=z.H(0,"Other")
x.d=x.a.b_("Other")
this.b=z},
q:{
ia:function(a,b){var z=new V.i9()
z.dY(a,!0)
return z}}},
ic:{"^":"u:22;a",
$1:function(a){P.iB(C.m,new V.ib(this.a))}},
ib:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.e.a8(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
fe:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.ia("Test 013",!0)
y=W.cy(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fJ(H.c(["Test of sky box and cover pass."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iz(x,!0,!0,!0,!1)
v=new U.dF()
z=U.ab
v.b3(z)
v.aM(v.geu(),v.geP())
v.e=null
v.f=V.aZ()
v.r=0
u=w.r
t=new U.iX()
s=U.cB()
s.scq(0,!0)
s.scf(6.283185307179586)
s.sci(0)
s.sa1(0,0)
s.scg(100)
s.sN(0)
s.sc3(0.5)
t.b=s
s=s.gt()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.b(t.gaA(),r)
C.a.h(s.a,q)
s=U.cB()
s.scq(0,!0)
s.scf(6.283185307179586)
s.sci(0)
s.sa1(0,0)
s.scg(100)
s.sN(0)
s.sc3(0.5)
t.c=s
C.a.h(s.gt().a,q)
t.d=null
t.e=!1
t.f=!1
t.r=!1
t.x=2.5
t.y=2.5
t.z=2
t.Q=4
t.cx=!1
t.ch=!1
t.cy=0
t.db=0
t.dx=null
t.dy=0
t.fr=null
t.fx=null
p=new X.au(!1,!1,!1)
o=t.d
t.d=p
s=[X.au]
q=new D.G("modifiers",o,p,t,s)
q.b=!0
t.K(q)
q=t.f
if(q!==!1){t.f=!1
q=new D.G("invertX",q,!1,t,[P.a6])
q.b=!0
t.K(q)}q=t.r
if(q!==!1){t.r=!1
q=new D.G("invertY",q,!1,t,[P.a6])
q.b=!0
t.K(q)}t.aO(u)
v.h(0,t)
u=w.r
t=new U.iW()
q=U.cB()
q.scq(0,!0)
q.scf(6.283185307179586)
q.sci(0)
q.sa1(0,0)
q.scg(100)
q.sN(0)
q.sc3(0.2)
t.b=q
q=q.gt()
q.toString
n=H.b(t.gaA(),r)
C.a.h(q.a,n)
t.c=null
t.d=!1
t.e=2.5
t.f=2
t.r=4
t.y=!1
t.x=!1
t.z=0
t.Q=null
t.ch=0
t.cx=null
t.cy=null
p=new X.au(!0,!1,!1)
o=t.c
t.c=p
q=new D.G("modifiers",o,p,t,s)
q.b=!0
t.K(q)
t.aO(u)
v.h(0,t)
u=w.r
t=new U.iY()
t.c=0.01
t.d=0
t.e=0
p=new X.au(!1,!1,!1)
t.b=p
s=new D.G("modifiers",null,p,t,s)
s.b=!0
t.K(s)
t.aO(u)
v.h(0,t)
v.h(0,U.dt(V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.dZ(2000,1.0471975511965976,v,0.1)
l=X.cD(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
u=new D.G("clearColor",!0,!1,l,[P.a6])
u.b=!0
l.ai(u)}k=E.dD(null,!0,null,"",null,null)
k.sbx(0,F.le(30,1,15,0.5))
j=new O.ho()
u=O.cA(V.as)
j.e=u
u.aM(j.gew(),j.gex())
u=new O.aY(j,"emission")
u.c=C.b
u.f=new V.V(0,0,0)
j.f=u
u=new O.aY(j,"ambient")
u.c=C.b
u.f=new V.V(0,0,0)
j.r=u
u=new O.aY(j,"diffuse")
u.c=C.b
u.f=new V.V(0,0,0)
j.x=u
u=new O.aY(j,"invDiffuse")
u.c=C.b
u.f=new V.V(0,0,0)
j.y=u
u=new O.hu(j,"specular")
u.c=C.b
u.f=new V.V(0,0,0)
u.ch=100
j.z=u
u=new O.hr(j,"bump")
u.c=C.b
j.Q=u
j.ch=null
u=new O.aY(j,"reflect")
u.c=C.b
u.f=new V.V(0,0,0)
j.cx=u
u=new O.ht(j,"refract")
u.c=C.b
u.f=new V.V(0,0,0)
u.ch=1
j.cy=u
u=new O.hq(j,"alpha")
u.c=C.b
u.f=1
j.db=u
u=new D.ha()
u.b3(D.W)
u.e=H.c([],[D.c7])
u.f=H.c([],[D.hI])
u.r=H.c([],[D.ii])
u.x=H.c([],[D.iv])
u.y=H.c([],[D.iw])
u.z=H.c([],[D.ix])
u.Q=null
u.ch=null
u.cs(u.gev(),u.geO(),u.geQ())
j.dx=u
t=u.Q
if(t==null){t=D.D()
u.Q=t
u=t}else u=t
t=H.b(j.gf0(),r)
C.a.h(u.a,t)
t=j.dx
u=t.ch
if(u==null){u=D.D()
t.ch=u}t=H.b(j.gbB(),r)
C.a.h(u.a,t)
j.dy=null
t=j.dx
u=U.dt(V.dV(new V.X(0,0,0),new V.F(0,1,0),new V.F(0,-1,-1)))
i=new V.V(1,1,1)
s=new D.c7()
s.c=new V.V(1,1,1)
s.a=new V.F(0,0,1)
o=s.b
s.b=u
u=u.gt()
u.toString
q=H.b(s.ge1(),r)
C.a.h(u.a,q)
z=new D.G("mover",o,s.b,s,[z])
z.b=!0
s.aw(z)
if(!s.c.u(0,i)){o=s.c
s.c=i
z=new D.G("color",o,i,s,[V.V])
z.b=!0
s.aw(z)}t.h(0,s)
z=j.r
z.saf(0,new V.V(0,0,1))
z=j.x
z.saf(0,new V.V(0,1,0))
z=j.z
z.saf(0,new V.V(1,0,0))
z=j.z
if(z.c===C.b){z.c=C.h
z.bA()
z.bR(100)
u=z.a
u.a=null
u.Z(null)}z.bR(10)
z=w.f
u=z.a
h=u.createTexture()
u.bindTexture(34067,h)
u.texParameteri(34067,10242,10497)
u.texParameteri(34067,10243,10497)
u.texParameteri(34067,10241,9729)
u.texParameteri(34067,10240,9729)
u.bindTexture(34067,null)
g=new T.ee(0)
g.b=h
g.c=!1
g.d=0
g.e=D.D()
z.az(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.az(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.az(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.az(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.az(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.az(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.fE()
f.saP(null)
f.saX(0,null)
f.saY(null)
z=E.dD(null,!0,null,"",null,null)
e=F.e7()
u=e.a
t=new V.F(-1,-1,1)
t=t.v(0,Math.sqrt(t.B(t)))
d=u.ba(new V.bs(1,2,4,6),new V.aE(1,0,0,1),new V.X(-1,-1,0),new V.N(0,1),t,null)
u=e.a
t=new V.F(1,-1,1)
t=t.v(0,Math.sqrt(t.B(t)))
c=u.ba(new V.bs(0,3,4,6),new V.aE(0,0,1,1),new V.X(1,-1,0),new V.N(1,1),t,null)
u=e.a
t=new V.F(1,1,1)
t=t.v(0,Math.sqrt(t.B(t)))
b=u.ba(new V.bs(0,2,5,6),new V.aE(0,1,0,1),new V.X(1,1,0),new V.N(1,0),t,null)
u=e.a
t=new V.F(-1,1,1)
t=t.v(0,Math.sqrt(t.B(t)))
a=u.ba(new V.bs(0,2,4,7),new V.aE(1,1,0,1),new V.X(-1,1,0),new V.N(0,0),t,null)
e.d.fG(H.c([d,c,b,a],[F.aj]))
e.an()
z.sbx(0,e)
f.d=z
f.e=null
z=new O.ie()
z.b=1.0471975511965976
o=z.c
z.c=g
u=g.e
t=H.b(z.gbB(),r)
C.a.h(u.a,t)
u=new D.G("boxTexture",o,z.c,z,[T.ee])
u.b=!0
z.Z(u)
i=new V.V(1,1,1)
if(!J.P(z.d,i)){o=z.d
z.d=i
u=new D.G("boxColor",o,i,z,[V.V])
u.b=!0
z.Z(u)}z.e=null
f.saY(z)
f.saX(0,l)
f.saP(m)
a0=new M.fR()
z=O.cA(E.aF)
a0.d=z
z.aM(a0.gez(),a0.geA())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.saP(null)
a0.saX(0,null)
a0.saY(null)
a0.saP(m)
a0.saY(j)
a0.saX(0,l)
a0.d.h(0,k)
z=M.ax
u=H.c([f,a0],[z])
t=new M.fC()
t.b3(z)
t.e=!1
t.f=null
t.aM(t.geR(),t.geS())
t.bU(0,u)
z=w.d
if(z!==t){if(z!=null){z=z.gt()
z.toString
u=H.b(w.gcA(),r)
C.a.P(z.a,u)}w.d=t
z=t.gt()
z.toString
r=H.b(w.gcA(),r)
C.a.h(z.a,r)
w.e_()}V.la(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.cc.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.c_=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.d9=function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.kS=function(a){if(typeof a=="number")return J.bR.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cj.prototype
return a}
J.kT=function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cj.prototype
return a}
J.c0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kS(a).a9(a,b)}
J.dg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kT(a).j(a,b)}
J.fm=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).k(a,b)}
J.fn=function(a,b,c,d){return J.c0(a).cX(a,b,c,d)}
J.cs=function(a,b,c){return J.c_(a).fO(a,b,c)}
J.dh=function(a,b){return J.d9(a).F(a,b)}
J.fo=function(a,b){return J.d9(a).L(a,b)}
J.aC=function(a){return J.J(a).gT(a)}
J.bM=function(a){return J.d9(a).gX(a)}
J.bc=function(a){return J.c_(a).gl(a)}
J.am=function(a){return J.J(a).i(a)}
I.dc=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cx.prototype
C.x=J.m.prototype
C.a=J.aW.prototype
C.y=J.dI.prototype
C.f=J.dJ.prototype
C.z=J.dK.prototype
C.e=J.bR.prototype
C.i=J.cc.prototype
C.G=J.bS.prototype
C.I=H.hB.prototype
C.J=W.hC.prototype
C.p=J.hH.prototype
C.K=P.cO.prototype
C.l=J.cj.prototype
C.r=W.bD.prototype
C.t=W.jd.prototype
C.u=new P.hF()
C.v=new P.j_()
C.j=new P.jZ()
C.b=new A.c5(0,"ColorSourceType.None")
C.h=new A.c5(1,"ColorSourceType.Solid")
C.c=new A.c5(2,"ColorSourceType.Texture2D")
C.d=new A.c5(3,"ColorSourceType.TextureCube")
C.m=new P.aU(0)
C.w=new P.aU(5e6)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.H=H.c(I.dc([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iZ(!1)
$.ar=0
$.bd=null
$.dk=null
$.d2=!1
$.fb=null
$.f5=null
$.fh=null
$.co=null
$.cq=null
$.da=null
$.b5=null
$.bH=null
$.bI=null
$.d3=!1
$.O=C.j
$.dA=null
$.dz=null
$.dy=null
$.dx=null
$.n=V.hv()
$.ih="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ig="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["dw","$get$dw",function(){return H.fa("_$dart_dartClosure")},"cH","$get$cH",function(){return H.fa("_$dart_js")},"el","$get$el",function(){return H.ay(H.ci({
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.ay(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.ay(H.ci(null))},"eo","$get$eo",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.ay(H.ci(void 0))},"et","$get$et",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.ay(H.er(null))},"ep","$get$ep",function(){return H.ay(function(){try{null.$method$}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.ay(H.er(void 0))},"eu","$get$eu",function(){return H.ay(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d_","$get$d_",function(){return P.je()},"bJ","$get$bJ",function(){return[]},"f_","$get$f_",function(){return P.hV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dv","$get$dv",function(){return{}},"eG","$get$eG",function(){return Z.ak(0)},"eE","$get$eE",function(){return Z.ak(511)},"aq","$get$aq",function(){return Z.ak(1)},"aI","$get$aI",function(){return Z.ak(2)},"aH","$get$aH",function(){return Z.ak(4)},"aJ","$get$aJ",function(){return Z.ak(8)},"aK","$get$aK",function(){return Z.ak(16)},"bB","$get$bB",function(){return Z.ak(32)},"bC","$get$bC",function(){return Z.ak(64)},"eF","$get$eF",function(){return Z.ak(96)},"b3","$get$b3",function(){return Z.ak(128)},"aG","$get$aG",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.I,args:[F.ag]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.e,E.aF]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[P.A,[P.e,D.W]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.A,[P.e,U.ab]]},{func:1,ret:-1,args:[P.A,[P.e,M.ax]]},{func:1,ret:-1,args:[P.A,[P.e,V.as]]},{func:1,ret:P.I,args:[W.a7]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a6,args:[W.K]},{func:1,ret:W.a1,args:[W.K]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[P.T]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.a6,args:[P.w,P.w]},{func:1,ret:P.a6,args:[[P.e,D.W]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:V.X,args:[P.w]},{func:1,ret:P.I,args:[F.aj,P.w,P.w]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:P.I,args:[P.b0]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.ld(d||a)
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
Isolate.dc=a.dc
Isolate.d7=a.d7
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fe,[])
else B.fe([])})})()
//# sourceMappingURL=test.dart.js.map
