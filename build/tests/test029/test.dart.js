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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isq)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dE(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dF=function(){}
var dart=[["","",,H,{"^":"",nZ:{"^":"b;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
dK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cN:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dI==null){H.mQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ch("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d7()]
if(v!=null)return v
v=H.mT(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.$get$d7(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
q:{"^":"b;",
w:function(a,b){return a===b},
gU:function(a){return H.bP(a)},
i:["eC",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i2:{"^":"q;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isad:1},
ei:{"^":"q;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isF:1},
d8:{"^":"q;",
gU:function(a){return 0},
i:["eD",function(a){return String(a)}]},
iJ:{"^":"d8;"},
ci:{"^":"d8;"},
cd:{"^":"d8;",
i:function(a){var z=a[$.$get$e2()]
if(z==null)return this.eD(a)
return"JavaScript function for "+H.l(J.am(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd2:1},
bc:{"^":"q;$ti",
h:function(a,b){H.y(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.A("add"))
a.push(b)},
W:function(a,b){var z
if(!!a.fixed$length)H.t(P.A("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
c7:function(a,b){var z,y
H.u(b,"$isj",[H.x(a,0)],"$asj")
if(!!a.fixed$length)H.t(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hQ:function(a){return this.C(a,"")},
hI:function(a,b,c,d){var z,y,x
H.y(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bN:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i0())},
az:function(a,b,c,d){var z
H.y(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.A("fill range"))
P.aQ(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.I(0,1))a[z]=d},
b2:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.d5(a,"[","]")},
ga3:function(a){return new J.ay(a,a.length,0,[H.x(a,0)])},
gU:function(a){return H.bP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cn(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.y(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
i1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cn(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.ef(new Array(a),b)},
ef:function(a,b){return J.bG(H.d(a,[b]))},
bG:function(a){H.bz(a)
a.fixed$length=Array
return a}}},
nY:{"^":"bc;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cb:{"^":"q;",
ghP:function(a){return a===0?1/a<0:a<0},
iq:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cu:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eq:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghP(a))return"-"+z
return z},
bd:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.A("Unexpected toString result: "+z))
x=J.aN(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ac(b))
return a*b},
bi:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dt(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dt(a,b)},
dt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aM:function(a,b){var z
if(a>0)z=this.dr(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fZ:function(a,b){if(b<0)throw H.a(H.ac(b))
return this.dr(a,b)},
dr:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ac(b))
return a<b},
$isz:1,
$isX:1},
eh:{"^":"cb;",$ism:1},
eg:{"^":"cb;"},
cc:{"^":"q;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b<0)throw H.a(H.aM(a,b))
if(b>=a.length)H.t(H.aM(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aM(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cn(b,null,null))
return a+b},
aV:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ac(b))
c=P.aQ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ac(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ag:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ac(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
af:function(a,b){return this.ag(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cB(b,null,null))
if(b>c)throw H.a(P.cB(b,null,null))
if(c>a.length)throw H.a(P.cB(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i4:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aB:function(a,b){return this.i4(a,b," ")},
ed:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ec:function(a,b){return this.ed(a,b,0)},
hz:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.h5(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isey:1,
$isk:1}}],["","",,H,{"^":"",
cO:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i0:function(){return new P.jn("No element")},
a5:{"^":"k1;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$ascF:function(){return[P.m]},
$asw:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hL:{"^":"j;"},
eo:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
ip:{"^":"j;a,b,$ti",
ga3:function(a){return new H.iq(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.ax(this.a)},
K:function(a,b){return this.b.$1(J.cT(this.a,b))},
$asj:function(a,b){return[b]}},
iq:{"^":"d6;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$asd6:function(a,b){return[b]}},
kx:{"^":"j;a,b,$ti",
ga3:function(a){return new H.ky(J.bB(this.a),this.b,this.$ti)}},
ky:{"^":"d6;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cv:{"^":"b;$ti"},
cF:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.y(c,H.av(this,"cF",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){H.y(d,H.av(this,"cF",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
k1:{"^":"cx+cF;"}}],["","",,H,{"^":"",
hw:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mL:function(a){return init.types[H.C(a)]},
fZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isE},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.am(a)
if(typeof z!=="string")throw H.a(H.ac(a))
return z},
bP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iT:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.H(a).$isci){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aE(w,1)
r=H.dJ(H.bz(H.b4(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iL:function(){if(!!self.location)return self.location.href
return},
eC:function(a){var z,y,x,w,v
H.bz(a)
z=J.ax(a)
if(typeof z!=="number")return z.ex()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iU:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ac(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aM(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ac(w))}return H.eC(z)},
eD:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ac(x))
if(x<0)throw H.a(H.ac(x))
if(x>65535)return H.iU(a)}return H.eC(a)},
iV:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ex()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cz:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aM(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iS:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iQ:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iM:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iN:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iP:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iR:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iO:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
n:function(a){throw H.a(H.ac(a))},
h:function(a,b){if(a==null)J.ax(a)
throw H.a(H.aM(a,b))},
aM:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
z=H.C(J.ax(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cB(b,"index",null)},
mF:function(a,b,c){if(a>c)return new P.cA(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cA(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
ac:function(a){return new P.aO(!0,a,null,null)},
my:function(a){if(typeof a!=="number")throw H.a(H.ac(a))
return a},
a:function(a){var z
if(a==null)a=new P.ex()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h7})
z.name=""}else z.toString=H.h7
return z},
h7:function(){return J.am(this.dartException)},
t:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aY(a))},
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d9(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ew(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eU()
u=$.$get$eV()
t=$.$get$eW()
s=$.$get$eX()
r=$.$get$f0()
q=$.$get$f1()
p=$.$get$eZ()
$.$get$eY()
o=$.$get$f3()
n=$.$get$f2()
m=v.ai(y)
if(m!=null)return z.$1(H.d9(H.O(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.d9(H.O(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ew(H.O(y),m))}}return z.$1(new H.k0(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aO(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eI()
return a},
by:function(a){var z
if(a==null)return new H.fx(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fx(a)},
mI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mS:function(a,b,c,d,e,f){H.e(a,"$isd2")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mS)
a.$identity=z
return z},
hr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isc){z.$reflectionInfo=d
x=H.iY(z).r}else x=d
w=e?Object.create(new H.jo().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aD
if(typeof u!=="number")return u.I()
$.aD=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dY(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mL,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dT:H.cX
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dY(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ho:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dY:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ho(y,!w,z,b)
if(y===0){w=$.aD
if(typeof w!=="number")return w.I()
$.aD=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.co("self")
$.bC=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aD
if(typeof w!=="number")return w.I()
$.aD=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.co("self")
$.bC=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hp:function(a,b,c,d){var z,y
z=H.cX
y=H.dT
switch(b?-1:a){case 0:throw H.a(H.j7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hq:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.co("self")
$.bC=z}y=$.dS
if(y==null){y=H.co("receiver")
$.dS=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aD
if(typeof y!=="number")return y.I()
$.aD=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aD
if(typeof y!=="number")return y.I()
$.aD=y+1
return new Function(z+y+"}")()},
dE:function(a,b,c,d,e,f,g){var z,y
z=J.bG(H.bz(b))
H.C(c)
y=!!J.H(d).$isc?J.bG(d):d
return H.hr(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
mG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
fU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
h3:function(a,b){throw H.a(H.aA(a,H.O(b).substring(3)))},
mZ:function(a,b){var z=J.aN(b)
throw H.a(H.hn(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.h3(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.mZ(a,b)},
bz:function(a){if(a==null)return a
if(!!J.H(a).$isc)return a
throw H.a(H.aA(a,"List"))},
h0:function(a,b){if(a==null)return a
if(!!J.H(a).$isc)return a
if(J.H(a)[b])return a
H.h3(a,b)},
fV:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
cj:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fV(J.H(a))
if(z==null)return!1
y=H.fY(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dA)return a
$.dA=!0
try{if(H.cj(a,b))return a
z=H.cl(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.dA=!1}},
dG:function(a,b){if(a!=null&&!H.dD(a,b))H.t(H.aA(a,H.cl(b)))
return a},
fP:function(a){var z
if(a instanceof H.p){z=H.fV(J.H(a))
if(z!=null)return H.cl(z)
return"Closure"}return H.bg(a)},
n3:function(a){throw H.a(new P.hA(H.O(a)))},
fW:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b4:function(a){if(a==null)return
return a.$ti},
oV:function(a,b,c){return H.bA(a["$as"+H.l(c)],H.b4(b))},
aX:function(a,b,c,d){var z
H.O(c)
H.C(d)
z=H.bA(a["$as"+H.l(c)],H.b4(b))
return z==null?null:z[d]},
av:function(a,b,c){var z
H.O(b)
H.C(c)
z=H.bA(a["$as"+H.l(b)],H.b4(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.b4(a)
return z==null?null:z[b]},
cl:function(a){var z=H.b5(a,null)
return z},
b5:function(a,b){var z,y
H.u(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dJ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.mo(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mo:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b5(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b5(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b5(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b5(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dJ:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.ar("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b5(u,c)}v="<"+z.i(0)+">"
return v},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bv:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b4(a)
y=J.H(a)
if(y[b]==null)return!1
return H.fS(H.bA(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.O(b)
H.bz(c)
H.O(d)
if(a==null)return a
z=H.bv(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dJ(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fS:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
oT:function(a,b,c){return a.apply(b,H.bA(J.H(b)["$as"+H.l(c)],H.b4(b)))},
h_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.h_(z)}return!1},
dD:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.h_(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cj(a,b)}y=J.H(a).constructor
x=H.b4(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.dD(a,b))throw H.a(H.aA(a,H.cl(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.fY(a,b,c,d)
if('func' in a)return c.builtin$cls==="d2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bA(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cl(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fS(H.bA(r,z),b,u,d)},
fY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aw(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aw(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aw(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mW(m,b,l,d)},
mW:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
oU:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mT:function(a){var z,y,x,w,v,u
z=H.O($.fX.$1(a))
y=$.cM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fR.$2(a,z))
if(z!=null){y=$.cM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cQ(x)
$.cM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cP[z]=x
return x}if(v==="-"){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h2(a,x)
if(v==="*")throw H.a(P.ch(z))
if(init.leafTags[z]===true){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h2(a,x)},
h2:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cQ:function(a){return J.dK(a,!1,null,!!a.$isE)},
mV:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cQ(z)
else return J.dK(z,c,null,null)},
mQ:function(){if(!0===$.dI)return
$.dI=!0
H.mR()},
mR:function(){var z,y,x,w,v,u,t,s
$.cM=Object.create(null)
$.cP=Object.create(null)
H.mM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h4.$1(v)
if(u!=null){t=H.mV(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mM:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bu(C.K,H.bu(C.P,H.bu(C.v,H.bu(C.v,H.bu(C.O,H.bu(C.L,H.bu(C.M(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fX=new H.mN(v)
$.fR=new H.mO(u)
$.h4=new H.mP(t)},
bu:function(a,b){return a(b)||b},
h5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h6:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hv:{"^":"b;$ti",
i:function(a){return P.da(this)},
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
return H.hw()},
$isI:1},
hx:{"^":"hv;a,b,c,$ti",
gl:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.da(b)},
da:function(a){return this.b[H.O(a)]},
J:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.da(v),z))}}},
iX:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bG(z)
y=z[0]
x=z[1]
return new H.iX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jN:{"^":"b;a,b,c,d,e,f",
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
aK:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f_:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iG:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ew:function(a,b){return new H.iG(a,b==null?null:b.method)}}},
i5:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d9:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i5(a,y,z?null:b.receiver)}}},
k0:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n6:{"^":"p:16;a",
$1:function(a){if(!!J.H(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fx:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaz:1},
p:{"^":"b;",
i:function(a){return"Closure '"+H.bg(this).trim()+"'"},
geu:function(){return this},
$isd2:1,
geu:function(){return this}},
eM:{"^":"p;"},
jo:{"^":"eM;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cW:{"^":"eM;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bP(this.a)
else y=typeof z!=="object"?J.b6(z):H.bP(z)
return(y^H.bP(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
cX:function(a){return a.a},
dT:function(a){return a.c},
co:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.bG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jO:{"^":"a6;a",
i:function(a){return this.a},
p:{
aA:function(a,b){return new H.jO("TypeError: "+H.l(P.cu(a))+": type '"+H.fP(a)+"' is not a subtype of type '"+b+"'")}}},
hm:{"^":"a6;a",
i:function(a){return this.a},
p:{
hn:function(a,b){return new H.hm("CastError: "+H.l(P.cu(a))+": type '"+H.fP(a)+"' is not a subtype of type '"+b+"'")}}},
j6:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j7:function(a){return new H.j6(a)}}},
b_:{"^":"il;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gao:function(a){return new H.ia(this,[H.x(this,0)])},
br:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d7(y,b)}else return this.hM(b)},
hM:function(a){var z=this.d
if(z==null)return!1
return this.cA(this.bX(z,this.cz(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bk(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bk(w,b)
x=y==null?null:y.b
return x}else return this.hN(b)},
hN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bX(z,this.cz(a))
x=this.cA(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c0()
this.b=z}this.d0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c0()
this.c=y}this.d0(y,b,c)}else this.hO(b,c)},
hO:function(a,b){var z,y,x,w
H.y(a,H.x(this,0))
H.y(b,H.x(this,1))
z=this.d
if(z==null){z=this.c0()
this.d=z}y=this.cz(a)
x=this.bX(z,y)
if(x==null)this.c5(z,y,[this.c1(a,b)])
else{w=this.cA(x,a)
if(w>=0)x[w].b=b
else x.push(this.c1(a,b))}},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
d0:function(a,b,c){var z
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
z=this.bk(a,b)
if(z==null)this.c5(a,b,this.c1(b,c))
else z.b=c},
f9:function(){this.r=this.r+1&67108863},
c1:function(a,b){var z,y
z=new H.i9(H.y(a,H.x(this,0)),H.y(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f9()
return z},
cz:function(a){return J.b6(a)&0x3ffffff},
cA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.da(this)},
bk:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
d7:function(a,b){return this.bk(a,b)!=null},
c0:function(){var z=Object.create(null)
this.c5(z,"<non-identifier-key>",z)
this.f2(z,"<non-identifier-key>")
return z},
$isem:1},
i9:{"^":"b;a,b,0c,0d"},
ia:{"^":"hL;a,$ti",
gl:function(a){return this.a.a},
ga3:function(a){var z,y
z=this.a
y=new H.ib(z,z.r,this.$ti)
y.c=z.e
return y}},
ib:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mN:{"^":"p:16;a",
$1:function(a){return this.a(a)}},
mO:{"^":"p:29;a",
$2:function(a,b){return this.a(a,b)}},
mP:{"^":"p:25;a",
$1:function(a){return this.a(H.O(a))}},
i3:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isey:1,
$isiZ:1,
p:{
i4:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mH:function(a){return J.ef(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){return a},
iC:function(a){return new Int8Array(a)},
aL:function(a,b,c){H.bz(b)
if(a>>>0!==a||a>=c)throw H.a(H.aM(b,a))},
mi:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mF(a,b,c))
return b},
ev:{"^":"q;",$isev:1,"%":"ArrayBuffer"},
df:{"^":"q;",$isdf:1,$isjP:1,"%":"DataView;ArrayBufferView;de|fr|fs|iD|ft|fu|b1"},
de:{"^":"df;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dF},
iD:{"^":"fs;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mG(c)
H.aL(b,a,a.length)
a[b]=c},
$ascv:function(){return[P.z]},
$asw:function(){return[P.z]},
$isj:1,
$asj:function(){return[P.z]},
$isc:1,
$asc:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
b1:{"^":"fu;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aL(b,a,a.length)
a[b]=c},
$ascv:function(){return[P.m]},
$asw:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
o8:{"^":"b1;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o9:{"^":"b1;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oa:{"^":"b1;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ob:{"^":"b1;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oc:{"^":"b1;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
od:{"^":"b1;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dg:{"^":"b1;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
bN:function(a,b,c){return new Uint8Array(a.subarray(b,H.mi(b,c,a.length)))},
$isdg:1,
$isP:1,
"%":";Uint8Array"},
fr:{"^":"de+w;"},
fs:{"^":"fr+cv;"},
ft:{"^":"de+w;"},
fu:{"^":"ft+cv;"}}],["","",,P,{"^":"",
kA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bw(new P.kC(z),1)).observe(y,{childList:true})
return new P.kB(z,y,x)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
oI:[function(a){self.scheduleImmediate(H.bw(new P.kD(H.f(a,{func:1,ret:-1})),0))},"$1","mv",4,0,10],
oJ:[function(a){self.setImmediate(H.bw(new P.kE(H.f(a,{func:1,ret:-1})),0))},"$1","mw",4,0,10],
oK:[function(a){P.dn(C.t,H.f(a,{func:1,ret:-1}))},"$1","mx",4,0,10],
dn:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a7(a.a,1000)
return P.lD(z<0?0:z,b)},
eP:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bn]})
z=C.d.a7(a.a,1000)
return P.lE(z<0?0:z,b)},
mr:function(a,b){if(H.cj(a,{func:1,args:[P.b,P.az]}))return b.ie(a,null,P.b,P.az)
if(H.cj(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mq:function(){var z,y
for(;z=$.bt,z!=null;){$.c0=null
y=z.b
$.bt=y
if(y==null)$.c_=null
z.a.$0()}},
oS:[function(){$.dB=!0
try{P.mq()}finally{$.c0=null
$.dB=!1
if($.bt!=null)$.$get$dv().$1(P.fT())}},"$0","fT",0,0,3],
fO:function(a){var z=new P.fk(H.f(a,{func:1,ret:-1}))
if($.bt==null){$.c_=z
$.bt=z
if(!$.dB)$.$get$dv().$1(P.fT())}else{$.c_.b=z
$.c_=z}},
mu:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.fO(a)
$.c0=$.c_
return}y=new P.fk(a)
x=$.c0
if(x==null){y.b=z
$.c0=y
$.bt=y}else{y.b=x.b
x.b=y
$.c0=y
if(y.b==null)$.c_=y}},
n_:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.U
if(C.j===y){P.cL(null,null,C.j,a)
return}y.toString
P.cL(null,null,y,H.f(y.cc(a),z))},
jJ:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.dn(a,b)}return P.dn(a,H.f(y.cc(b),z))},
jK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bn]}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.eP(a,b)}x=y.dB(b,P.bn)
$.U.toString
return P.eP(a,H.f(x,z))},
cK:function(a,b,c,d,e){var z={}
z.a=d
P.mu(new P.ms(z,e))},
fK:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fL:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
mt:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cL:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cc(d):c.hw(d,-1)
P.fO(d)},
kC:{"^":"p:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kB:{"^":"p:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kD:{"^":"p:2;a",
$0:function(){this.a.$0()}},
kE:{"^":"p:2;a",
$0:function(){this.a.$0()}},
fA:{"^":"b;a,0b,c",
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bw(new P.lG(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bw(new P.lF(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbn:1,
p:{
lD:function(a,b){var z=new P.fA(!0,0)
z.eP(a,b)
return z},
lE:function(a,b){var z=new P.fA(!1,0)
z.eQ(a,b)
return z}}},
lG:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lF:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eG(w,x)}z.c=y
this.d.$1(z)}},
br:{"^":"b;0a,b,c,d,e,$ti",
hW:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.f(this.d,{func:1,ret:P.ad,args:[P.b]}),a.a,P.ad,P.b)},
hL:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cj(z,{func:1,args:[P.b,P.az]}))return H.dG(w.il(z,a.a,a.b,null,y,P.az),x)
else return H.dG(w.cO(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aV:{"^":"b;ds:a<,b,0fR:c<,$ti",
ep:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mr(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.U,[c])
w=b==null?1:3
this.d1(new P.br(x,w,a,b,[z,c]))
return x},
ip:function(a,b){return this.ep(a,null,b)},
d1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbr")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaV")
z=y.a
if(z<4){y.d1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cL(null,null,z,H.f(new P.kT(this,a),{func:1,ret:-1}))}},
dj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbr")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaV")
y=u.a
if(y<4){u.dj(a)
return}this.a=y
this.c=u.c}z.a=this.bm(a)
y=this.b
y.toString
P.cL(null,null,y,H.f(new P.kY(z,this),{func:1,ret:-1}))}},
c3:function(){var z=H.e(this.c,"$isbr")
this.c=null
return this.bm(z)},
bm:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d4:function(a){var z,y,x,w
z=H.x(this,0)
H.dG(a,{futureOr:1,type:z})
y=this.$ti
x=H.bv(a,"$isbE",y,"$asbE")
if(x){z=H.bv(a,"$isaV",y,null)
if(z)P.fn(a,this)
else P.kU(a,this)}else{w=this.c3()
H.y(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
bT:[function(a,b){var z
H.e(b,"$isaz")
z=this.c3()
this.a=8
this.c=new P.an(a,b)
P.bW(this,z)},function(a){return this.bT(a,null)},"iw","$2","$1","geZ",4,2,28],
$isbE:1,
p:{
kU:function(a,b){var z,y,x
b.a=1
try{a.ep(new P.kV(b),new P.kW(b),null)}catch(x){z=H.aC(x)
y=H.by(x)
P.n_(new P.kX(b,z,y))}},
fn:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaV")
if(z>=4){y=b.c3()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.e(b.c,"$isbr")
b.a=2
b.c=a
a.dj(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cK(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bW(z.a,b)}y=z.a
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
if(p){H.e(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cK(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.l0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l_(x,b,r).$0()}else if((y&2)!==0)new P.kZ(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.H(y).$isbE){if(y.a>=4){n=H.e(t.c,"$isbr")
t.c=null
b=t.bm(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fn(y,t)
return}}m=b.b
n=H.e(m.c,"$isbr")
m.c=null
b=m.bm(n)
y=x.a
u=x.b
if(!y){H.y(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
kT:{"^":"p:2;a,b",
$0:function(){P.bW(this.a,this.b)}},
kY:{"^":"p:2;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
kV:{"^":"p:24;a",
$1:function(a){var z=this.a
z.a=0
z.d4(a)}},
kW:{"^":"p:26;a",
$2:function(a,b){this.a.bT(a,H.e(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
kX:{"^":"p:2;a,b,c",
$0:function(){this.a.bT(this.b,this.c)}},
l0:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.em(H.f(w.d,{func:1}),null)}catch(v){y=H.aC(v)
x=H.by(v)
if(this.d){w=H.e(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.H(z).$isbE){if(z instanceof P.aV&&z.gds()>=4){if(z.gds()===8){w=this.b
w.b=H.e(z.gfR(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ip(new P.l1(t),null)
w.a=!1}}},
l1:{"^":"p:30;a",
$1:function(a){return this.a}},
l_:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.y(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cO(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aC(t)
y=H.by(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
kZ:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isan")
w=this.c
if(w.hW(z)&&w.e!=null){v=this.b
v.b=w.hL(z)
v.a=!1}}catch(u){y=H.aC(u)
x=H.by(u)
w=H.e(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fk:{"^":"b;a,0b"},
dk:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aV(0,$.U,[P.m])
z.a=0
this.hT(new P.jr(z,this),!0,new P.js(z,y),y.geZ())
return y}},
jr:{"^":"p;a,b",
$1:function(a){H.y(a,H.av(this.b,"dk",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.av(this.b,"dk",0)]}}},
js:{"^":"p:2;a,b",
$0:function(){this.b.d4(this.a.a)}},
eK:{"^":"b;$ti"},
jq:{"^":"b;"},
bn:{"^":"b;"},
an:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa6:1},
m7:{"^":"b;",$isoH:1},
ms:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ex()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
ll:{"^":"m7;",
im:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fK(null,null,this,a,-1)}catch(x){z=H.aC(x)
y=H.by(x)
P.cK(null,null,this,z,H.e(y,"$isaz"))}},
io:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fL(null,null,this,a,b,-1,c)}catch(x){z=H.aC(x)
y=H.by(x)
P.cK(null,null,this,z,H.e(y,"$isaz"))}},
hw:function(a,b){return new P.ln(this,H.f(a,{func:1,ret:b}),b)},
cc:function(a){return new P.lm(this,H.f(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.lo(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
em:function(a,b){H.f(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fK(null,null,this,a,b)},
cO:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.U===C.j)return a.$1(b)
return P.fL(null,null,this,a,b,c,d)},
il:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.U===C.j)return a.$2(b,c)
return P.mt(null,null,this,a,b,c,d,e,f)},
ie:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
ln:{"^":"p;a,b,c",
$0:function(){return this.a.em(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lm:{"^":"p:3;a,b",
$0:function(){return this.a.im(this.b)}},
lo:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.io(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ic:function(a,b,c,d,e){return new H.b_(0,0,[d,e])},
id:function(a,b,c){H.bz(a)
return H.u(H.mI(a,new H.b_(0,0,[b,c])),"$isem",[b,c],"$asem")},
en:function(a,b){return new H.b_(0,0,[a,b])},
ih:function(a,b,c,d){return new P.l7(0,0,[d])},
i_:function(a,b,c){var z,y
if(P.dC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c1()
C.a.h(y,a)
try{P.mp(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eL(b,H.h0(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
d5:function(a,b,c){var z,y,x
if(P.dC(a))return b+"..."+c
z=new P.ar(b)
y=$.$get$c1()
C.a.h(y,a)
try{x=z
x.a=P.eL(x.gaH(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
dC:function(a){var z,y
for(z=0;y=$.$get$c1(),z<y.length;++z)if(a===y[z])return!0
return!1},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga3(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
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
ie:function(a,b,c){var z=P.ic(null,null,null,b,c)
a.J(0,new P.ig(z,b,c))
return z},
da:function(a){var z,y,x
z={}
if(P.dC(a))return"{...}"
y=new P.ar("")
try{C.a.h($.$get$c1(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.dO(a,new P.im(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$c1()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
l7:{"^":"l2;a,0b,0c,0d,0e,0f,r,$ti",
ga3:function(a){return P.fq(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dx()
this.b=z}return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dx()
this.c=y}return this.d2(y,b)}else return this.eS(0,b)},
eS:function(a,b){var z,y,x
H.y(b,H.x(this,0))
z=this.d
if(z==null){z=P.dx()
this.d=z}y=this.d5(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.dc(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
W:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dk(this.b,b)
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
if(H.e(a[b],"$isdw")!=null)return!1
a[b]=this.bS(b)
return!0},
dk:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdw")
if(z==null)return!1
this.du(z)
delete a[b]
return!0},
d3:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.dw(H.y(a,H.x(this,0)))
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
d5:function(a){return J.b6(a)&0x3ffffff},
f6:function(a,b){return a[this.d5(b)]},
dc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
p:{
dx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dw:{"^":"b;a,0b,0c"},
l8:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fq:function(a,b,c){var z=new P.l8(a,b,[c])
z.c=a.e
return z}}},
l2:{"^":"j8;"},
ig:{"^":"p:6;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cx:{"^":"l9;",$isj:1,$isc:1},
w:{"^":"b;$ti",
ga3:function(a){return new H.eo(a,this.gl(a),0,[H.aX(this,a,"w",0)])},
K:function(a,b){return this.j(a,b)},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aX(this,a,"w",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gl(a))throw H.a(P.aY(a))}},
is:function(a,b){var z,y,x
z=H.d([],[H.aX(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ir:function(a){return this.is(a,!0)},
az:function(a,b,c,d){var z
H.y(d,H.aX(this,a,"w",0))
P.aQ(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d5(a,"[","]")}},
il:{"^":"ah;"},
im:{"^":"p:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aX(this,a,"ah",0),H.aX(this,a,"ah",1)]})
for(z=J.bB(this.gao(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.ax(this.gao(a))},
i:function(a){return P.da(a)},
$isI:1},
lL:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
io:{"^":"b;$ti",
j:function(a,b){return J.dN(this.a,b)},
m:function(a,b,c){J.cR(this.a,H.y(b,H.x(this,0)),H.y(c,H.x(this,1)))},
J:function(a,b){J.dO(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.ax(this.a)},
i:function(a){return J.am(this.a)},
$isI:1},
fa:{"^":"lM;a,$ti"},
ja:{"^":"b;$ti",
i:function(a){return P.d5(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dP("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=P.fq(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
j8:{"^":"ja;"},
l9:{"^":"b+w;"},
lM:{"^":"io+lL;$ti"}}],["","",,P,{"^":"",hj:{"^":"c5;a",
i_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aQ(c,d,b.length,null,null,null)
z=$.$get$fl()
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
if(q<=d){p=H.cO(C.b.H(b,s))
o=H.cO(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ar("")
w.a+=C.b.v(b,x,y)
w.a+=H.cz(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dR(b,u,d,v,t,k)
else{j=C.d.bi(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aV(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dR(b,u,d,v,t,i)
else{j=C.d.bi(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aV(b,d,d,j===2?"==":"=")}return b},
$asc5:function(){return[[P.c,P.m],P.k]},
p:{
dR:function(a,b,c,d,e,f){if(C.d.bi(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hk:{"^":"bD;a",
$asbD:function(){return[[P.c,P.m],P.k]}},c5:{"^":"b;$ti"},bD:{"^":"jq;$ti"},hN:{"^":"c5;",
$asc5:function(){return[P.k,[P.c,P.m]]}},ke:{"^":"hN;a",
ghF:function(){return C.G}},kl:{"^":"bD;",
b3:function(a,b,c){var z,y,x,w
z=a.length
P.aQ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m6(0,0,x)
if(w.f4(a,b,z)!==z)w.dw(J.hc(a,z-1),0)
return C.W.bN(x,0,w.b)},
ck:function(a){return this.b3(a,0,null)},
$asbD:function(){return[P.k,[P.c,P.m]]}},m6:{"^":"b;a,b,c",
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
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dw(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kf:{"^":"bD;a",
b3:function(a,b,c){var z,y,x,w,v
H.u(a,"$isc",[P.m],"$asc")
z=P.kg(!1,a,b,c)
if(z!=null)return z
y=J.ax(a)
P.aQ(b,c,y,null,null,null)
x=new P.ar("")
w=new P.m3(!1,x,!0,0,0,0)
w.b3(a,b,y)
w.hH(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
ck:function(a){return this.b3(a,0,null)},
$asbD:function(){return[[P.c,P.m],P.k]},
p:{
kg:function(a,b,c,d){H.u(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kh(!1,b,c,d)
return},
kh:function(a,b,c,d){var z,y,x
z=$.$get$ff()
if(z==null)return
y=0===c
if(y&&!0)return P.ds(z,b)
x=b.length
d=P.aQ(c,d,x,null,null,null)
if(y&&d===x)return P.ds(z,b)
return P.ds(z,b.subarray(c,d))},
ds:function(a,b){if(P.kj(b))return
return P.kk(a,b)},
kk:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aC(y)}return},
kj:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ki:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aC(y)}return}}},m3:{"^":"b;a,b,c,d,e,f",
hH:function(a,b,c){var z
H.u(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m5(c)
v=new P.m4(this,b,c,a)
$label0$0:for(u=J.aN(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bJ()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.bd(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.x,q)
if(z<=C.x[q]){q=P.a_("Overlong encoding of 0x"+C.d.bd(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.bd(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cz(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cU()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.bd(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.bd(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m5:{"^":"p:41;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aN(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bJ()
if((w&127)!==w)return x-b}return z-b}},m4:{"^":"p:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cf(this.d,a,b)}}}],["","",,P,{"^":"",
c2:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.k]})
z=H.iT(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hP:function(a){var z=J.H(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.bg(a)+"'"},
ii:function(a,b,c,d){var z,y
H.y(b,d)
z=J.i1(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.u(z,"$isc",[d],"$asc")},
ep:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga3(a);x.G();)C.a.h(y,H.y(x.gR(x),c))
if(b)return y
return H.u(J.bG(y),"$isc",z,"$asc")},
cf:function(a,b,c){var z,y
z=P.m
H.u(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbc",[z],"$asbc")
y=a.length
c=P.aQ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.eD(z?C.a.bN(a,b,c):a)}if(!!J.H(a).$isdg)return H.iV(a,b,P.aQ(b,c,a.length,null,null,null))
return P.jt(a,b,c)},
jt:function(a,b,c){var z,y,x,w
H.u(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a2(b,0,J.ax(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.ax(a),null,null))
y=J.bB(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gR(y))}return H.eD(w)},
j_:function(a,b,c){return new H.i3(a,H.i4(a,!1,!0,!1))},
fc:function(){var z=H.iL()
if(z!=null)return P.k6(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cu:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hP(a)},
v:function(a){return new P.fm(a)},
ij:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dL:function(a){H.mY(a)},
k6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fb(b>0||c<c?C.b.v(a,b,c):a,5,null).ger()
else if(y===32)return P.fb(C.b.v(a,z,c),0,null).ger()}x=new Array(8)
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
if(P.fM(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cT()
if(v>=b)if(P.fM(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.I()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ag(a,"..",s)))n=r>s+2&&C.b.ag(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ag(a,"file",b)){if(u<=b){if(!C.b.ag(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aV(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ag(a,"http",b)){if(x&&t+3===s&&C.b.ag(a,"80",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ag(a,"https",b)){if(x&&t+4===s&&C.b.ag(a,"443",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lq(a,v,u,t,s,r,q,o)}return P.lN(a,b,c,v,u,t,s,r,q,o)},
fe:function(a,b){var z=P.k
return C.a.hI(H.d(a.split("&"),[z]),P.en(z,z),new P.k9(b),[P.I,P.k,P.k])},
k4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k5(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c2(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c2(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k7(a)
y=new P.k8(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k4(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.d.aM(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
mj:function(){var z,y,x,w,v
z=P.ij(22,new P.ml(),!0,P.P)
y=new P.mk(z)
x=new P.mm()
w=new P.mn()
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
fM:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isc",[P.m],"$asc")
z=$.$get$fN()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ad:{"^":"b;"},
"+bool":0,
ap:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.aM(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hB(H.iS(this))
y=P.c6(H.iQ(this))
x=P.c6(H.iM(this))
w=P.c6(H.iN(this))
v=P.c6(H.iP(this))
u=P.c6(H.iR(this))
t=P.hC(H.iO(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
c6:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"X;"},
"+double":0,
b8:{"^":"b;a",
k:function(a,b){return new P.b8(C.d.a0(this.a*b))},
M:function(a,b){return C.d.M(this.a,H.e(b,"$isb8").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hK()
y=this.a
if(y<0)return"-"+new P.b8(0-y).i(0)
x=z.$1(C.d.a7(y,6e7)%60)
w=z.$1(C.d.a7(y,1e6)%60)
v=new P.hJ().$1(y%1e6)
return""+C.d.a7(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e9:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hJ:{"^":"p:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hK:{"^":"p:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
ex:{"^":"a6;",
i:function(a){return"Throw of null."}},
aO:{"^":"a6;a,b,c,d",
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbV()+y+x
if(!this.a)return w
v=this.gbU()
u=P.cu(this.b)
return w+v+": "+H.l(u)},
p:{
c4:function(a){return new P.aO(!1,null,null,a)},
cn:function(a,b,c){return new P.aO(!0,a,b,c)},
dP:function(a){return new P.aO(!1,null,a,"Must not be null")}}},
cA:{"^":"aO;e,f,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cB:function(a,b,c){return new P.cA(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")},
aQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hZ:{"^":"aO;e,l:f>,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){if(J.h8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.ax(b))
return new P.hZ(b,z,!0,a,c,"Index out of range")}}},
k2:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.k2(a)}}},
k_:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ch:function(a){return new P.k_(a)}}},
jn:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hu:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cu(z))+"."},
p:{
aY:function(a){return new P.hu(a)}}},
iH:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
eI:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hA:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fm:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hV:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
a_:function(a,b,c){return new P.hV(a,b,c)}}},
m:{"^":"X;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga3(this)
for(y=0;z.G();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dP("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=this.ga3(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.i_(this,"(",")")}},
d6:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gU:function(a){return H.bP(this)},
i:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
k:{"^":"b;",$isey:1},
"+String":0,
ar:{"^":"b;aH:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isot:1,
p:{
eL:function(a,b,c){var z=J.bB(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
k9:{"^":"p:39;a",
$2:function(a,b){var z,y,x,w
z=P.k
H.u(a,"$isI",[z,z],"$asI")
H.O(b)
y=J.aN(b).ec(b,"=")
if(y===-1){if(b!=="")J.cR(a,P.dz(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aE(b,y+1)
z=this.a
J.cR(a,P.dz(x,0,x.length,z,!0),P.dz(w,0,w.length,z,!0))}return a}},
k5:{"^":"p:27;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
k7:{"^":"p:47;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k8:{"^":"p:46;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c2(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cI:{"^":"b;bL:a<,b,c,d,ej:e>,f,r,0x,0y,0z,0Q,0ch",
ges:function(){return this.b},
gcv:function(a){var z=this.c
if(z==null)return""
if(C.b.af(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbF:function(a){var z=this.d
if(z==null)return P.fC(this.a)
return z},
gcI:function(a){var z=this.f
return z==null?"":z},
ge6:function(){var z=this.r
return z==null?"":z},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isI",[P.k,null],"$asI")
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
g=P.dy(g,0,0,h)
return new P.cI(i,j,c,f,d,g,this.r)},
el:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gcJ:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.k
y=new P.fa(P.fe(z==null?"":z,C.k),[y,y])
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
w:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdr){y=this.a
x=b.gbL()
if(y==null?x==null:y===x)if(this.c!=null===b.ge7()){y=this.b
x=b.ges()
if(y==null?x==null:y===x){y=this.gcv(this)
x=z.gcv(b)
if(y==null?x==null:y===x){y=this.gbF(this)
x=z.gbF(b)
if(y==null?x==null:y===x)if(this.e===z.gej(b)){y=this.f
x=y==null
if(!x===b.gea()){if(x)y=""
if(y===z.gcI(b)){z=this.r
y=z==null
if(!y===b.ge8()){if(y)z=""
z=z===b.ge6()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdr:1,
p:{
cJ:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fH().b
if(typeof b!=="string")H.t(H.ac(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.av(c,"c5",0))
y=c.ghF().ck(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cz(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lY(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lZ(a,z,e-1):""
x=P.lS(a,e,f,!1)
if(typeof f!=="number")return f.I()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lV(P.c2(C.b.v(a,w,g),new P.lO(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lT(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dy(a,h+1,i,null):null
return new P.cI(j,y,x,v,u,t,i<c?P.lR(a,i+1,c):null)},
fC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.a(P.a_(c,a,b))},
lV:function(a,b){if(a!=null&&a===P.fC(b))return
return a},
lS:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.Z(a,z)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
P.fd(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.fd(a,b,c)
return"["+a+"]"}return P.m0(a,b,c)},
m0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fJ(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ar("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.y,t)
t=(C.y[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ar("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bY(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ar("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fD(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lY:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fF(C.b.H(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bY(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lP(y?a.toLowerCase():a)},
lP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lZ:function(a,b,c){return P.bZ(a,b,c,C.S)},
lT:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bZ(a,b,c,C.z):C.u.j6(d,new P.lU(),P.k).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.af(w,"/"))w="/"+w
return P.m_(w,e,f)},
m_:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.af(a,"/"))return P.m1(a,!z||c)
return P.m2(a)},
dy:function(a,b,c,d){var z,y
z={}
H.u(d,"$isI",[P.k,null],"$asI")
if(a!=null){if(d!=null)throw H.a(P.c4("Both query and queryParameters specified"))
return P.bZ(a,b,c,C.n)}if(d==null)return
y=new P.ar("")
z.a=""
d.J(0,new P.lW(new P.lX(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lR:function(a,b,c){return P.bZ(a,b,c,C.n)},
fJ:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cO(y)
v=H.cO(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aM(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cz(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fD:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fZ(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cf(y,0,null)},
bZ:function(a,b,c,d){var z=P.fI(a,b,c,H.u(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fJ(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bY(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fD(v)}}if(w==null)w=new P.ar("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fG:function(a){if(C.b.af(a,"."))return!0
return C.b.ec(a,"/.")!==-1},
m2:function(a){var z,y,x,w,v,u,t
if(!P.fG(a))return a
z=H.d([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
m1:function(a,b){var z,y,x,w,v,u
if(!P.fG(a))return!b?P.fE(a):a
z=H.d([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaA(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaA(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fE(z[0]))}return C.a.C(z,"/")},
fE:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fF(J.h9(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aE(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lQ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c4("Invalid URL encoding"))}}return z},
dz:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dH(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.a5(y.v(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c4("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c4("Truncated URI"))
C.a.h(u,P.lQ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isc",[P.m],"$asc")
return new P.kf(!1).ck(u)},
fF:function(a){var z=a|32
return 97<=z&&z<=122}}},
lO:{"^":"p:14;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.I()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lU:{"^":"p:42;",
$1:function(a){return P.cJ(C.U,a,C.k,!1)}},
lX:{"^":"p:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cJ(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cJ(C.p,b,C.k,!0))}}},
lW:{"^":"p:51;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bB(H.h0(b,"$isj")),y=this.a;z.G();)y.$2(a,H.O(z.gR(z)))}},
k3:{"^":"b;a,b,c",
ger:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.ed(y,"?",z)
w=y.length
if(x>=0){v=P.bZ(y,x+1,w,C.n)
w=x}else v=null
z=new P.kJ(this,"data",null,null,null,P.bZ(y,z,w,C.z),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.b.ag(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.i_(0,a,s,y)
else{r=P.fI(a,s,y,C.n,!0)
if(r!=null)a=C.b.aV(a,s,y,r)}return new P.k3(a,z,c)}}},
ml:{"^":"p:40;",
$1:function(a){return new Uint8Array(96)}},
mk:{"^":"p:38;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hd(z,0,96,b)
return z}},
mm:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mn:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lq:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge7:function(){return this.c>0},
ge9:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.I()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gea:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
ge8:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.af(this.a,"http")},
gdf:function(){return this.b===5&&C.b.af(this.a,"https")},
gbL:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gde()){this.x="http"
z="http"}else if(this.gdf()){this.x="https"
z="https"}else if(z===4&&C.b.af(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.af(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ges:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcv:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbF:function(a){var z
if(this.ge9()){z=this.d
if(typeof z!=="number")return z.I()
return P.c2(C.b.v(this.a,z+1,this.e),null,null)}if(this.gde())return 80
if(this.gdf())return 443
return 0},
gej:function(a){return C.b.v(this.a,this.e,this.f)},
gcI:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.v(this.a,z+1,y):""},
ge6:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aE(y,z+1):""},
gcJ:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.V
z=P.k
return new P.fa(P.fe(this.gcI(this),C.k),[z,z])},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isI",[P.k,null],"$asI")
i=this.gbL()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.ge9()?this.gbF(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.af(d,"/"))d="/"+d
g=P.dy(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aE(y,x+1)
return new P.cI(i,j,c,f,d,g,b)},
el:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdr)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdr:1},
kJ:{"^":"cI;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cZ:function(a,b){var z=document.createElement("canvas")
return z},
hM:function(a){H.e(a,"$isaa")
return"wheel"},
d4:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fp:function(a,b,c,d){var z,y
z=W.cH(W.cH(W.cH(W.cH(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fQ:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dB(a,b)},
bb:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n8:{"^":"dj;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
n9:{"^":"q;0l:length=","%":"AccessibleNodeList"},
na:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nb:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"q;",$iscV:1,"%":";Blob"},
cY:{"^":"bb;",
bK:function(a,b,c){if(c!=null)return a.getContext(b,P.mz(c,null))
return a.getContext(b)},
ev:function(a,b){return this.bK(a,b,null)},
$iscY:1,
"%":"HTMLCanvasElement"},
dW:{"^":"q;",$isdW:1,"%":"CanvasRenderingContext2D"},
nh:{"^":"M;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nj:{"^":"cs;0l:length=","%":"CSSPerspective"},
nk:{"^":"d1;0q:x=,0t:y=","%":"CSSPositionValue"},
nl:{"^":"cs;0q:x=,0t:y=","%":"CSSRotation"},
b7:{"^":"q;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nm:{"^":"cs;0q:x=,0t:y=","%":"CSSScale"},
nn:{"^":"kI;0l:length=",
ew:function(a,b){var z=a.getPropertyValue(this.eW(a,b))
return z==null?"":z},
eW:function(a,b){var z,y
z=$.$get$e1()
y=z[b]
if(typeof y==="string")return y
y=this.h_(a,b)
z[b]=y
return y},
h_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hD()+b
if(z in a)return z
return b},
gcd:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gba:function(a){return a.right},
gbf:function(a){return a.top},
gap:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hz:{"^":"b;",
gaT:function(a){return this.ew(a,"left")}},
d1:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cs:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
no:{"^":"d1;0l:length=","%":"CSSTransformValue"},
np:{"^":"cs;0q:x=,0t:y=","%":"CSSTranslation"},
nq:{"^":"d1;0l:length=","%":"CSSUnparsedValue"},
nr:{"^":"q;0l:length=","%":"DataTransferItemList"},
ns:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nt:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nu:{"^":"hH;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hH:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nv:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.u(c,"$isa7",[P.X],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a7,P.X]]},
$asw:function(){return[[P.a7,P.X]]},
$isj:1,
$asj:function(){return[[P.a7,P.X]]},
$isc:1,
$asc:function(){return[[P.a7,P.X]]},
$asB:function(){return[[P.a7,P.X]]},
"%":"ClientRectList|DOMRectList"},
hI:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gap(a))+" x "+H.l(this.gan(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.b3(b)
return a.left===z.gaT(b)&&a.top===z.gbf(b)&&this.gap(a)===z.gap(b)&&this.gan(a)===z.gan(b)},
gU:function(a){return W.fp(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gcd:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gba:function(a){return a.right},
gbf:function(a){return a.top},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nw:{"^":"kN;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
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
nx:{"^":"q;0l:length=","%":"DOMTokenList"},
kH:{"^":"cx;a,b",
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
ga3:function(a){var z=this.ir(this)
return new J.ay(z,z.length,0,[H.x(z,0)])},
az:function(a,b,c,d){throw H.a(P.ch(null))},
$asw:function(){return[W.V]},
$asj:function(){return[W.V]},
$asc:function(){return[W.V]}},
V:{"^":"M;",
gcj:function(a){return new W.kH(a,a.children)},
gbq:function(a){return P.iW(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
a9:{"^":"q;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"q;",
dA:["eB",function(a,b,c,d){H.f(c,{func:1,args:[W.a9]})
if(c!=null)this.eT(a,b,c,!1)}],
eT:function(a,b,c,d){return a.addEventListener(b,H.bw(H.f(c,{func:1,args:[W.a9]}),1),!1)},
$isaa:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fv|fw|fy|fz"},
aZ:{"^":"cV;",$isaZ:1,"%":"File"},
eb:{"^":"kS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaZ")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aZ]},
$asw:function(){return[W.aZ]},
$isj:1,
$asj:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$iseb:1,
$asB:function(){return[W.aZ]},
"%":"FileList"},
nQ:{"^":"aa;0l:length=","%":"FileWriter"},
nT:{"^":"bb;0l:length=","%":"HTMLFormElement"},
ba:{"^":"q;",$isba:1,"%":"Gamepad"},
nU:{"^":"dj;0q:x=,0t:y=","%":"Gyroscope"},
nV:{"^":"q;0l:length=","%":"History"},
nW:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isM")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.M]},
$asw:function(){return[W.M]},
$isj:1,
$asj:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c8:{"^":"q;0dH:data=",$isc8:1,"%":"ImageData"},
d3:{"^":"bb;",$isd3:1,"%":"HTMLImageElement"},
bH:{"^":"dp;",$isbH:1,"%":"KeyboardEvent"},
o0:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
o1:{"^":"dj;0q:x=,0t:y=","%":"Magnetometer"},
o3:{"^":"q;0l:length=","%":"MediaList"},
o4:{"^":"aa;",
dA:function(a,b,c,d){H.f(c,{func:1,args:[W.a9]})
if(b==="message")a.start()
this.eB(a,b,c,!1)},
"%":"MessagePort"},
o5:{"^":"la;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.J(a,new W.iz(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.k,null]},
$isI:1,
$asI:function(){return[P.k,null]},
"%":"MIDIInputMap"},
iz:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o6:{"^":"lb;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.J(a,new W.iA(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.k,null]},
$isI:1,
$asI:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
iA:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"q;",$isbe:1,"%":"MimeType"},
o7:{"^":"ld;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.be]},
$asw:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"MimeTypeArray"},
ae:{"^":"dp;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kG:{"^":"cx;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga3:function(a){var z=this.a.childNodes
return new W.ec(z,z.length,-1,[H.aX(C.X,z,"B",0)])},
az:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asw:function(){return[W.M]},
$asj:function(){return[W.M]},
$asc:function(){return[W.M]}},
M:{"^":"aa;",
ii:function(a,b){var z,y
try{z=a.parentNode
J.ha(z,b,a)}catch(y){H.aC(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eC(a):z},
fN:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iE:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isM")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.M]},
$asw:function(){return[W.M]},
$isj:1,
$asj:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
bf:{"^":"q;0l:length=",$isbf:1,"%":"Plugin"},
oh:{"^":"lj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"PluginArray"},
om:{"^":"lp;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.J(a,new W.j5(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.k,null]},
$isI:1,
$asI:function(){return[P.k,null]},
"%":"RTCStatsReport"},
j5:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
on:{"^":"bb;0l:length=","%":"HTMLSelectElement"},
dj:{"^":"aa;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bh:{"^":"aa;",$isbh:1,"%":"SourceBuffer"},
oo:{"^":"fw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"SourceBufferList"},
bi:{"^":"q;",$isbi:1,"%":"SpeechGrammar"},
op:{"^":"ls;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bi]},
$asw:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"SpeechGrammarList"},
bj:{"^":"q;0l:length=",$isbj:1,"%":"SpeechRecognitionResult"},
or:{"^":"lv;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gao:function(a){var z=H.d([],[P.k])
this.J(a,new W.jp(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.k,P.k]},
$isI:1,
$asI:function(){return[P.k,P.k]},
"%":"Storage"},
jp:{"^":"p:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"q;",$isbk:1,"%":"CSSStyleSheet|StyleSheet"},
dl:{"^":"bb;",$isdl:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bl:{"^":"aa;",$isbl:1,"%":"TextTrack"},
bm:{"^":"aa;",$isbm:1,"%":"TextTrackCue|VTTCue"},
ox:{"^":"lC;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbm")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bm]},
$asw:function(){return[W.bm]},
$isj:1,
$asj:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asB:function(){return[W.bm]},
"%":"TextTrackCueList"},
oy:{"^":"fz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bl]},
$asw:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asB:function(){return[W.bl]},
"%":"TextTrackList"},
oz:{"^":"q;0l:length=","%":"TimeRanges"},
bo:{"^":"q;",$isbo:1,"%":"Touch"},
bp:{"^":"dp;",$isbp:1,"%":"TouchEvent"},
oA:{"^":"lI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbo")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bo]},
$asw:function(){return[W.bo]},
$isj:1,
$asj:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asB:function(){return[W.bo]},
"%":"TouchList"},
oB:{"^":"q;0l:length=","%":"TrackDefaultList"},
dp:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oD:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oF:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oG:{"^":"aa;0l:length=","%":"VideoTrackList"},
bV:{"^":"ae;",
ghD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
kz:{"^":"aa;",
fO:function(a,b){return a.requestAnimationFrame(H.bw(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oL:{"^":"m9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b7]},
$asw:function(){return[W.b7]},
$isj:1,
$asj:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"CSSRuleList"},
oM:{"^":"hI;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.b3(b)
return a.left===z.gaT(b)&&a.top===z.gbf(b)&&a.width===z.gap(b)&&a.height===z.gan(b)},
gU:function(a){return W.fp(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oO:{"^":"mb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"GamepadList"},
oP:{"^":"md;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isM")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.M]},
$asw:function(){return[W.M]},
$isj:1,
$asj:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oQ:{"^":"mf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bj]},
$asw:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"SpeechRecognitionResultList"},
oR:{"^":"mh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbk")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bk]},
$asw:function(){return[W.bk]},
$isj:1,
$asj:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asB:function(){return[W.bk]},
"%":"StyleSheetList"},
kO:{"^":"dk;a,b,c,$ti",
hT:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oN:{"^":"kO;a,b,c,$ti"},
kP:{"^":"eK;a,b,c,d,e,$ti",
h3:function(){var z=this.d
if(z!=null&&this.a<=0)J.hb(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fQ(new W.kQ(c),W.a9)
z=new W.kP(0,a,b,z,!1,[e])
z.h3()
return z}}},
kQ:{"^":"p:5;a",
$1:function(a){return this.a.$1(H.e(a,"$isa9"))}},
B:{"^":"b;$ti",
ga3:function(a){return new W.ec(a,this.gl(a),-1,[H.aX(this,a,"B",0)])},
az:function(a,b,c,d){H.y(d,H.aX(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ec:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dN(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kI:{"^":"q+hz;"},
kK:{"^":"q+w;"},
kL:{"^":"kK+B;"},
kM:{"^":"q+w;"},
kN:{"^":"kM+B;"},
kR:{"^":"q+w;"},
kS:{"^":"kR+B;"},
l3:{"^":"q+w;"},
l4:{"^":"l3+B;"},
la:{"^":"q+ah;"},
lb:{"^":"q+ah;"},
lc:{"^":"q+w;"},
ld:{"^":"lc+B;"},
le:{"^":"q+w;"},
lf:{"^":"le+B;"},
li:{"^":"q+w;"},
lj:{"^":"li+B;"},
lp:{"^":"q+ah;"},
fv:{"^":"aa+w;"},
fw:{"^":"fv+B;"},
lr:{"^":"q+w;"},
ls:{"^":"lr+B;"},
lv:{"^":"q+ah;"},
lB:{"^":"q+w;"},
lC:{"^":"lB+B;"},
fy:{"^":"aa+w;"},
fz:{"^":"fy+B;"},
lH:{"^":"q+w;"},
lI:{"^":"lH+B;"},
m8:{"^":"q+w;"},
m9:{"^":"m8+B;"},
ma:{"^":"q+w;"},
mb:{"^":"ma+B;"},
mc:{"^":"q+w;"},
md:{"^":"mc+B;"},
me:{"^":"q+w;"},
mf:{"^":"me+B;"},
mg:{"^":"q+w;"},
mh:{"^":"mg+B;"}}],["","",,P,{"^":"",
mC:function(a){var z,y
z=J.H(a)
if(!!z.$isc8){y=z.gdH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fB(a.data,a.height,a.width)},
mB:function(a){if(a instanceof P.fB)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var z,y,x,w,v
if(a==null)return
z=P.en(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mz:function(a,b){var z={}
a.J(0,new P.mA(z))
return z},
e7:function(){var z=$.e6
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.e6=z}return z},
hD:function(){var z,y
z=$.e3
if(z!=null)return z
y=$.e4
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.e4=y}if(y)z="-moz-"
else{y=$.e5
if(y==null){y=!P.e7()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.e5=y}if(y)z="-ms-"
else z=P.e7()?"-o-":"-webkit-"}$.e3=z
return z},
ly:{"^":"b;",
e4:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cQ:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.H(a)
if(!!y.$isap)return new Date(a.a)
if(!!y.$isiZ)throw H.a(P.ch("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscV)return a
if(!!y.$iseb)return a
if(!!y.$isc8)return a
if(!!y.$isev||!!y.$isdf)return a
if(!!y.$isI){x=this.e4(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.J(a,new P.lA(z,this))
return z.a}if(!!y.$isc){x=this.e4(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hA(a,x)}throw H.a(P.ch("structured clone of other type"))},
hA:function(a,b){var z,y,x,w
z=J.aN(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cQ(z.j(a,w)))
return x}},
lA:{"^":"p:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cQ(b)}},
fB:{"^":"b;dH:a>,b,c",$isc8:1},
mA:{"^":"p:6;a",
$2:function(a,b){this.a[a]=b}},
lz:{"^":"ly;a,b"},
hS:{"^":"cx;a,b",
gaZ:function(){var z,y,x
z=this.b
y=H.av(z,"w",0)
x=W.V
return new H.ip(new H.kx(z,H.f(new P.hT(),{func:1,ret:P.ad,args:[y]}),[y]),H.f(new P.hU(),{func:1,ret:x,args:[y]}),[y,x])},
J:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.J(P.ep(this.gaZ(),!1,W.V),b)},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isV")
z=this.gaZ()
J.he(z.b.$1(J.cT(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
az:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.ax(this.gaZ().a)},
j:function(a,b){var z=this.gaZ()
return z.b.$1(J.cT(z.a,b))},
ga3:function(a){var z=P.ep(this.gaZ(),!1,W.V)
return new J.ay(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.V]},
$asj:function(){return[W.V]},
$asc:function(){return[W.V]}},
hT:{"^":"p:52;",
$1:function(a){return!!J.H(H.e(a,"$isM")).$isV}},
hU:{"^":"p:33;",
$1:function(a){return H.i(H.e(a,"$isM"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bN:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
w:function(a,b){var z,y,x
if(b==null)return!1
z=H.bv(b,"$isbN",[P.X],null)
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.b6(this.a)
y=J.b6(this.b)
return P.fo(P.bX(P.bX(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.y(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bN(z,H.y(x*b,y),this.$ti)}},
lk:{"^":"b;$ti",
gba:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.y(z+this.c,H.x(this,0))},
gcd:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.y(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bv(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbf(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.x(this,0)
if(H.y(z+this.c,w)===y.gba(b)){if(typeof x!=="number")return x.I()
z=H.y(x+this.d,w)===y.gcd(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b6(z)
x=this.b
w=J.b6(x)
if(typeof z!=="number")return z.I()
v=H.x(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.y(x+this.d,v)
return P.fo(P.bX(P.bX(P.bX(P.bX(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dF:function(a,b){var z,y
H.u(b,"$isbN",[P.X],"$asbN")
z=b.a
y=this.a
if(typeof z!=="number")return z.cT()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cT()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"lk;aT:a>,bf:b>,ap:c>,an:d>,$ti",p:{
iW:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",ny:{"^":"Y;0q:x=,0t:y=","%":"SVGFEBlendElement"},nz:{"^":"Y;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nA:{"^":"Y;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nB:{"^":"Y;0q:x=,0t:y=","%":"SVGFECompositeElement"},nC:{"^":"Y;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nD:{"^":"Y;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nE:{"^":"Y;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nF:{"^":"Y;0q:x=,0t:y=","%":"SVGFEFloodElement"},nG:{"^":"Y;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nH:{"^":"Y;0q:x=,0t:y=","%":"SVGFEImageElement"},nI:{"^":"Y;0q:x=,0t:y=","%":"SVGFEMergeElement"},nJ:{"^":"Y;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nK:{"^":"Y;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nL:{"^":"Y;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nM:{"^":"Y;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nN:{"^":"Y;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nO:{"^":"Y;0q:x=,0t:y=","%":"SVGFETileElement"},nP:{"^":"Y;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nR:{"^":"Y;0q:x=,0t:y=","%":"SVGFilterElement"},nS:{"^":"bF;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hX:{"^":"bF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bF:{"^":"Y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nX:{"^":"bF;0q:x=,0t:y=","%":"SVGImageElement"},bI:{"^":"q;",$isbI:1,"%":"SVGLength"},o_:{"^":"l6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGLengthList"},o2:{"^":"Y;0q:x=,0t:y=","%":"SVGMaskElement"},bM:{"^":"q;",$isbM:1,"%":"SVGNumber"},oe:{"^":"lh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbM")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bM]},
$isj:1,
$asj:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asB:function(){return[P.bM]},
"%":"SVGNumberList"},og:{"^":"Y;0q:x=,0t:y=","%":"SVGPatternElement"},oi:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},oj:{"^":"q;0l:length=","%":"SVGPointList"},ok:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},ol:{"^":"hX;0q:x=,0t:y=","%":"SVGRectElement"},os:{"^":"lx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.k]},
$isj:1,
$asj:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asB:function(){return[P.k]},
"%":"SVGStringList"},Y:{"^":"V;",
gcj:function(a){return new P.hS(a,new W.kG(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ou:{"^":"bF;0q:x=,0t:y=","%":"SVGSVGElement"},ju:{"^":"bF;","%":"SVGTextPathElement;SVGTextContentElement"},ow:{"^":"ju;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bS:{"^":"q;",$isbS:1,"%":"SVGTransform"},oC:{"^":"lK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbS")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bS]},
$isj:1,
$asj:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asB:function(){return[P.bS]},
"%":"SVGTransformList"},oE:{"^":"bF;0q:x=,0t:y=","%":"SVGUseElement"},l5:{"^":"q+w;"},l6:{"^":"l5+B;"},lg:{"^":"q+w;"},lh:{"^":"lg+B;"},lw:{"^":"q+w;"},lx:{"^":"lw+B;"},lJ:{"^":"q+w;"},lK:{"^":"lJ+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjP:1}}],["","",,P,{"^":"",nc:{"^":"q;0l:length=","%":"AudioBuffer"},nd:{"^":"kF;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gao:function(a){var z=H.d([],[P.k])
this.J(a,new P.hh(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.k,null]},
$isI:1,
$asI:function(){return[P.k,null]},
"%":"AudioParamMap"},hh:{"^":"p:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},ne:{"^":"aa;0l:length=","%":"AudioTrackList"},hl:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},of:{"^":"hl;0l:length=","%":"OfflineAudioContext"},kF:{"^":"q+ah;"}}],["","",,P,{"^":"",di:{"^":"q;",
eo:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.H(g)
if(!!y.$isc8&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.mB(g))
return}if(!!y.$isd3&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c4("Incorrect number or type of arguments"))},
en:function(a,b,c,d,e,f,g){return this.eo(a,b,c,d,e,f,g,null,null,null)},
$isdi:1,
"%":"WebGLRenderingContext"},jv:{"^":"q;",$isjv:1,"%":"WebGLTexture"},jY:{"^":"q;",$isjY:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oq:{"^":"lu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isI")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[[P.I,,,]]},
$isj:1,
$asj:function(){return[[P.I,,,]]},
$isc:1,
$asc:function(){return[[P.I,,,]]},
$asB:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},lt:{"^":"q+w;"},lu:{"^":"lt+B;"}}],["","",,O,{"^":"",ao:{"^":"b;0a,0b,0c,0d,$ti",
bj:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cV:function(a,b,c){var z=H.av(this,"ao",0)
H.f(b,{func:1,ret:P.ad,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
aY:function(a,b){return this.cV(a,null,b)},
di:function(a){var z
H.u(a,"$isj",[H.av(this,"ao",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cY:function(a,b){var z
H.u(b,"$isj",[H.av(this,"ao",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga3:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.x(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.av(this,"ao",0)
H.y(b,z)
z=[z]
if(this.di(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cY(x,H.d([b],z))}},
c7:function(a,b){var z,y
H.u(b,"$isj",[H.av(this,"ao",0)],"$asj")
if(this.di(b)){z=this.a
y=z.length
C.a.c7(z,b)
this.cY(y,b)}},
$isj:1,
p:{
d_:function(a){var z=new O.ao([a])
z.bj(a)
return z}}},dc:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
eL:function(a){var z=this.b
if(!(z==null))z.B(a)},
aF:function(){return this.eL(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.b0()},
bG:function(a){var z=this.a
if(a==null)C.a.h(z,V.b0())
else C.a.h(z,a)
this.aF()},
aC:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cU:{"^":"b;"},aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a6:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbM:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.f(this.gei(),{func:1,ret:-1,args:[D.o]})
C.a.W(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.f(this.gei(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.N("shape",z,this.c,this,[F.eF])
w.b=!0
this.aU(w)}},
aa:function(a,b){var z
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aa(0,b)},
a9:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga_(z))
z.aF()
a.cH(this.f)
z=a.dy
y=(z&&C.a).gaA(z)
if(y!=null&&this.d!=null)y.cM(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();)z.d.a9(a)
a.cG()
a.dx.aC()},
gu:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aU:function(a){var z=this.z
if(!(z==null))z.B(a)},
ad:function(){return this.aU(null)},
i3:[function(a){H.e(a,"$iso")
this.e=null
this.aU(a)},function(){return this.i3(null)},"jb","$1","$0","gei",0,2,0],
i1:[function(a){this.aU(H.e(a,"$iso"))},function(){return this.i1(null)},"j9","$1","$0","geh",0,2,0],
j8:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isj",[E.aP],"$asj")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.b9()
t.a=H.d([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.ad()},"$2","gi0",8,0,8],
ja:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isj",[E.aP],"$asj")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.b9()
t.a=H.d([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.f(y,x)
C.a.W(t.a,y)}}this.ad()},"$2","gi2",8,0,8],
$isaI:1,
p:{
ea:function(a,b,c,d,e,f){var z,y
z=new E.aP()
z.a=d
z.b=!0
y=O.d_(E.aP)
z.y=y
y.aY(z.gi0(),z.gi2())
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
z.sbM(0,e)
return z}}},j0:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eI:function(a,b){var z,y,x,w,v
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
z=new O.dc()
y=[V.aF]
z.a=H.d([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.f(new E.j2(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dc()
z.a=H.d([],y)
v=z.gu()
v.toString
x=H.f(new E.j3(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dc()
z.a=H.d([],y)
y=z.gu()
y.toString
w=H.f(new E.j4(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.bQ])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.k,A.cC])},
gic:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.k(0,y.ga_(y))
this.z=y
z=y}return z},
gek:function(){var z,y
z=this.ch
if(z==null){z=this.gic()
y=this.dx
y=z.k(0,y.ga_(y))
this.ch=y
z=y}return z},
cH:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
cG:function(){var z=this.dy
if(z.length>1)z.pop()},
c8:function(a){var z=a.b
if(z.length===0)throw H.a(P.v("May not cache a shader with no name."))
if(this.fr.br(0,z))throw H.a(P.v('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
j1:function(a,b){var z=new E.j0(a,b)
z.eI(a,b)
return z}}},j2:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.ch=null}},j3:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j4:{"^":"p:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},jG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a6:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
eN:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.B(a)
this.ij()},function(){return this.eN(null)},"eM","$1","$0","gcZ",0,2,0],
ghK:function(){var z,y,x
z=Date.now()
y=C.d.a7(P.e9(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ap(z,!1)
return x/y},
dl:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.n(z)
x=C.h.cu(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cu(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ij:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jI(this),{func:1,ret:-1,args:[P.X]})
C.C.f3(z)
C.C.fO(z,W.fQ(y,P.X))}},
ih:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dl()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ap(w,!1)
x.y=P.e9(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aF()
w=x.db
C.a.sl(w.a,0)
w.aF()
w=x.dx
C.a.sl(w.a,0)
w.aF()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a9(this.e)}}catch(v){z=H.aC(v)
y=H.by(v)
P.dL("Error: "+H.l(z))
P.dL("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jH:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscY)return E.eO(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcj(a).h(0,y)
w=E.eO(y,!0,!0,!0,!1)
w.a=a
return w},
eO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jG()
y=P.id(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.l.bK(a,"webgl",y)
x=H.e(x==null?C.l.bK(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j1(x,a)
w=new T.jA(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ka(a)
v=new X.i6()
v.c=new X.aH(!1,!1,!1)
v.d=P.ih(null,null,null,P.m)
w.b=v
v=new X.iB(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ik(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jM(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eK,P.b]])
w.z=v
u=document
t=W.ae
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.f(w.gfl(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.f(w.gfo(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.f(w.gfi(),q),!1,r))
v=w.z
p=W.bH
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.f(w.gfq(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.f(w.gfp(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.f(w.gfu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.f(w.gfw(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.f(w.gfv(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a0(a,H.O(W.hM(a)),H.f(w.gfz(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.f(w.gfm(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.f(w.gfn(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.f(w.gfA(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.f(w.gfI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.f(w.gfG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.f(w.gfH(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ap(Date.now(),!1)
z.ch=0
z.dl()
return z}}},jI:{"^":"p:31;a",
$1:function(a){var z
H.mX(a)
z=this.a
if(z.z){z.z=!1
z.ih()}}}}],["","",,Z,{"^":"",fj:{"^":"b;a,b",p:{
du:function(a,b,c){var z
H.u(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bs(c)),35044)
a.bindBuffer(b,null)
return new Z.fj(b,z)}}},dU:{"^":"cU;a,b,c,d,e",
Y:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aC(y)
x=P.v('Failed to bind buffer attribute "'+J.am(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.am(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},dt:{"^":"b;a",$isnf:1},cp:{"^":"b;a,0b,c,d",
ak:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
ae:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a9:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.am(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isov:1},cw:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},b2:{"^":"b;a",
gcW:function(a){var z,y
z=this.a
y=(z&$.$get$ak().a)!==0?3:0
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bq().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+4:y},
hv:function(a){var z,y,x
z=$.$get$ak()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fi()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.k])
y=this.a
if((y&$.$get$ak().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
au:function(a){return new Z.b2(a)}}}}],["","",,D,{"^":"",dX:{"^":"b;"},b9:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.hQ(z))
return x!==0},
dK:function(){return this.B(null)},
ik:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
aD:function(a){return this.ik(a,!0,!1)},
p:{
G:function(){var z=new D.b9()
z.a=H.d([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},hQ:{"^":"p:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"b;a,0b"},c9:{"^":"o;c,d,a,0b,$ti"},ca:{"^":"o;c,d,a,0b,$ti"},N:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dV:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"ng<"}},ej:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ek:{"^":"o;c,a,0b"},i6:{"^":"b;0a,0b,0c,0d",
i9:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.B(y)},
i5:function(a){var z,y
this.c=a.b
this.d.W(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.B(y)}},eq:{"^":"cy;x,y,c,d,e,a,0b"},ik:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
au:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ap(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaN()
s=new X.bK(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cF:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.au(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ey()
if(typeof z!=="number")return z.bJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.au(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.au(a,b))
return!0},
ia:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dd(new V.W(v*u,t*s),y,x,new P.ap(w,!1),this)
w.b=!0
z.B(w)
return!0},
ft:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ap(Date.now(),!1)
y=this.f
x=new X.eq(c,a,this.a.gaN(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.T(0,0)}},aH:{"^":"b;a,b,c",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
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
return z+(this.c?"Shift+":"")}},bK:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},iB:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bW:function(a,b,c){var z,y,x
z=new P.ap(Date.now(),!1)
y=this.a.gaN()
x=new X.bK(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cF:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bW(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ey()
if(typeof z!=="number")return z.bJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bW(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bW(a,b,!1))
return!0},
ib:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dd(new V.W(w*v,u*t),y,b,new P.ap(x,!1),this)
x.b=!0
z.B(x)
return!0},
gdJ:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbI:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
geg:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},dd:{"^":"cy;x,c,d,e,a,0b"},cy:{"^":"o;"},eS:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},jM:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
au:function(a,b){var z,y,x,w
H.u(a,"$isc",[V.T],"$asc")
z=new P.ap(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaN()
w=new X.eS(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i8:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.B(this.au(a,!0))
return!0},
i6:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.B(this.au(a,!0))
return!0},
i7:function(a){var z
H.u(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.B(this.au(a,!1))
return!0}},ka:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaN:function(){var z=this.a
return V.dh(0,0,(z&&C.l).gbq(z).c,C.l.gbq(z).d)},
d8:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.aH(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
c6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
av:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.T(y-w,x-v)},
b_:function(a){return new V.W(a.movementX,a.movementY)},
c2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.h.a0(u.pageX)
C.h.a0(u.pageY)
s=z.left
C.h.a0(u.pageX)
C.a.h(y,new V.T(t-s,C.h.a0(u.pageY)-z.top))}return y},
as:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.aH(y,a.altKey,a.shiftKey))},
iK:[function(a){this.f=!0},"$1","gfo",4,0,5],
iE:[function(a){this.f=!1},"$1","gfi",4,0,5],
iH:[function(a){if(this.f)a.preventDefault()},"$1","gfl",4,0,5],
iM:[function(a){var z
H.e(a,"$isbH")
if(!this.f)return
z=this.d8(a)
if(this.b.i9(z))a.preventDefault()},"$1","gfq",4,0,18],
iL:[function(a){var z
H.e(a,"$isbH")
if(!this.f)return
z=this.d8(a)
if(this.b.i5(z))a.preventDefault()},"$1","gfp",4,0,18],
iO:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.as(a)
x=this.b_(a)
if(this.d.cF(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.as(a)
w=this.av(a)
if(this.c.cF(y,w))a.preventDefault()},"$1","gfu",4,0,4],
iQ:[function(a){var z,y,x
H.e(a,"$isae")
this.aL(a)
z=this.as(a)
if(this.x){y=this.b_(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfw",4,0,4],
iJ:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.l).gbq(z).dF(0,new P.bN(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.as(a)
if(this.x){x=this.b_(a)
if(this.d.b8(y,x))a.preventDefault()
return}if(this.r)return
w=this.av(a)
if(this.c.b8(y,w))a.preventDefault()}},"$1","gfn",4,0,4],
iP:[function(a){var z,y,x
H.e(a,"$isae")
this.aL(a)
z=this.as(a)
if(this.x){y=this.b_(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfv",4,0,4],
iI:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.l).gbq(z).dF(0,new P.bN(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.as(a)
if(this.x){x=this.b_(a)
if(this.d.b7(y,x))a.preventDefault()
return}if(this.r)return
w=this.av(a)
if(this.c.b7(y,w))a.preventDefault()}},"$1","gfm",4,0,4],
iR:[function(a){var z,y
H.e(a,"$isbV")
this.aL(a)
z=new V.W((a&&C.B).ghC(a),C.B.ghD(a)).A(0,180)
if(this.x){if(this.d.ia(z))a.preventDefault()
return}if(this.r)return
y=this.av(a)
if(this.c.ib(z,y))a.preventDefault()},"$1","gfz",4,0,35],
iS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.as(this.y)
v=this.av(this.y)
this.d.ft(w,v,x)}},"$1","gfA",4,0,5],
j_:[function(a){var z
H.e(a,"$isbp")
this.a.focus()
this.f=!0
this.c6(a)
z=this.c2(a)
if(this.e.i8(z))a.preventDefault()},"$1","gfI",4,0,12],
iY:[function(a){var z
H.e(a,"$isbp")
this.c6(a)
z=this.c2(a)
if(this.e.i6(z))a.preventDefault()},"$1","gfG",4,0,12],
iZ:[function(a){var z
H.e(a,"$isbp")
this.c6(a)
z=this.c2(a)
if(this.e.i7(z))a.preventDefault()},"$1","gfH",4,0,12]}}],["","",,D,{"^":"",ct:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aG:[function(a){var z
H.e(a,"$iso")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aG(null)},"iu","$1","$0","geO",0,2,0],
$isa3:1,
$isaI:1},a3:{"^":"b;",$isaI:1},i7:{"^":"ao;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aG:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fs:[function(a){var z
H.e(a,"$iso")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fs(null)},"iN","$1","$0","gdh",0,2,0],
iT:[function(a){var z,y,x
H.u(a,"$isj",[D.a3],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.f_(x))return!1}return!0},"$1","gfB",4,0,37],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdh(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.ct)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gff",8,0,23],
iV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gdh(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.ct)C.a.W(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.W(s.a,x)}z=new D.ca(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gfD",8,0,23],
f_:function(a){var z=C.a.b2(this.e,a)
return z},
$asj:function(){return[D.a3]},
$asao:function(){return[D.a3]}},iK:{"^":"b;",$isa3:1,$isaI:1},jm:{"^":"b;",$isa3:1,$isaI:1},jD:{"^":"b;",$isa3:1,$isaI:1},jE:{"^":"b;",$isa3:1,$isaI:1},jF:{"^":"b;",$isa3:1,$isaI:1}}],["","",,V,{"^":"",
ni:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","iy",8,0,34],
n7:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bi(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.aB("null",c)
return C.b.aB(C.h.eq($.r.$2(a,0)?0:a,b),c+b+1)},
bx:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isc",[P.z],"$asc")
z=H.d([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.aB(z[u],x))}return z},
c3:function(a,b){return C.h.iq(Math.pow(b,C.J.cu(Math.log(H.my(a))/Math.log(b))))},
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
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aE:{"^":"b;a,b,c,d",
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
return new V.aE(z,y,x,w)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
bJ:{"^":"b;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isbJ")
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
return new V.bJ(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.z]
y=V.bx(H.d([this.a,this.d,this.r],z),3,0)
x=V.bx(H.d([this.b,this.e,this.x],z),3,0)
w=V.bx(H.d([this.c,this.f,this.y],z),3,0)
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
aF:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
cB:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.r.$2(a2,0))return V.b0()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaF")
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.L(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.a4(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
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
i:function(a){return this.T()},
e5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bx(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bx(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bx(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bx(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
F:function(a){return this.e5(a,3,0)},
T:function(){return this.e5("",3,0)},
p:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b0:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eu:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
et:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.ax(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.ax(x)
v=new V.L(a.a,a.b,a.c)
return V.aG(x.a,w.a,z.a,x.O(0).E(v),x.b,w.b,z.b,w.O(0).E(v),x.c,w.c,z.c,z.O(0).E(v),0,0,0,1)}}},
T:{"^":"b;q:a>,t:b>",
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.T(this.a*b,this.b*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
a4:{"^":"b;q:a>,t:b>,c",
I:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bO:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bO(this.a*b,this.b*b,this.c*b,this.d*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eE:{"^":"b;q:a>,t:b>,c,d",
gac:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eE))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
dh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eE(a,b,c,d)}}},
W:{"^":"b;a,b",
hR:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,15],
E:function(a){var z,y,x,w
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
A:function(a,b){var z,y
if($.r.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.W(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
L:{"^":"b;a,b,c",
hR:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,15],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.L(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.r.$2(b,0))return new V.L(0,0,0)
return new V.L(this.a/b,this.b/b,this.c/b)},
ee:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hs:{"^":"dX;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.n7(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.B(a)},
scR:function(a,b){},
scC:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.N("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.S(z)}},
scE:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.N("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.S(z)}},
sab:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.z])
z.b=!0
this.S(z)}},
scD:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.S(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.z])
z.b=!0
this.S(z)}},
scl:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.z])
z.b=!0
this.S(z)}},
aa:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sab(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
p:{
d0:function(){var z=new U.hs()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dZ:{"^":"ai;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aX:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
p:{
e_:function(a){var z=new U.dZ()
z.a=a
return z}}},ee:{"^":"ao;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
S:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.S(null)},"aj","$1","$0","gaK",0,2,0],
iA:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfe",8,0,22],
iU:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.W(t.a,x)}}z=new D.ca(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfC",8,0,22],
aX:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ay(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aX(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.b0():x
z=this.e
if(!(z==null))z.aD(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ee))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ai]},
$asao:function(){return[U.ai]},
$isai:1},ai:{"^":"dX;"},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
S:[function(a){var z
H.e(a,"$iso")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.S(null)},"aj","$1","$0","gaK",0,2,0],
b0:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdJ()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gbY(),y)
C.a.h(z.a,x)
x=this.a.c.geg()
x.toString
z=H.f(this.gbZ(),y)
C.a.h(x.a,z)
z=this.a.c.gbI()
z.toString
y=H.f(this.gc_(),y)
C.a.h(z.a,y)
return!0},
fa:[function(a){H.e(a,"$iso")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbY",4,0,1],
fb:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbK")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.W(y.a,y.b).k(0,2).A(0,z.gac())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.W(x.a,x.b).k(0,2).A(0,z.gac())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
this.b.sV(0)
y=y.L(0,a.z)
this.Q=new V.W(y.a,y.b).k(0,2).A(0,z.gac())}this.aj()},"$1","gbZ",4,0,1],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sV(y*10*x)
this.aj()}},"$1","gc_",4,0,1],
aX:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.aa(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aG(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},kc:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
S:[function(a){var z
H.e(a,"$iso")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.S(null)},"aj","$1","$0","gaK",0,2,0],
b0:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdJ()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gbY(),y)
C.a.h(z.a,x)
x=this.a.c.geg()
x.toString
z=H.f(this.gbZ(),y)
C.a.h(x.a,z)
z=this.a.c.gbI()
z.toString
x=H.f(this.gc_(),y)
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
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.W(z,y)},
fa:[function(a){a=H.i(H.e(a,"$iso"),"$isbK")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbY",4,0,1],
fb:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbK")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gac()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gac()))}this.aj()},"$1","gbZ",4,0,1],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.aj()}},"$1","gc_",4,0,1],
ix:[function(a){if(H.i(H.e(a,"$iso"),"$iseq").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf7",4,0,1],
iy:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$isbK")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gac()))
this.aj()},"$1","gf8",4,0,1],
j3:[function(a){H.e(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh2",4,0,1],
j2:[function(a){var z,y,x,w,v,u,t
a=H.i(H.e(a,"$iso"),"$iseS")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gac()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sab(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gac()))}this.aj()},"$1","gh1",4,0,1],
j1:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.aj()}},"$1","gh0",4,0,1],
aX:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.aa(0,x)
this.b.aa(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aG(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aG(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},kd:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.B(a)},
b0:function(a){var z,y,x
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
iz:[function(a){var z,y,x,w
H.e(a,"$iso")
if(!J.R(this.b,this.a.b.c))return
H.i(a,"$isdd")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.N("zoom",z,w,this,[P.z])
z.b=!0
this.S(z)}},"$1","gfd",4,0,1],
aX:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eu(x,x,x,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",ht:{"^":"ao;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
a1:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d_","$1","$0","gX",0,2,0],
iW:[function(a,b){var z,y,x,w,v,u,t
z=M.aJ
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfE",8,0,19],
iX:[function(a,b){var z,y,x,w,v,u,t
z=M.aJ
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.W(t.a,x)}}z=new D.ca(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfF",8,0,19],
a9:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(!(y==null))y.a9(a)}this.e=!1},
$asj:function(){return[M.aJ]},
$asao:function(){return[M.aJ]},
$isaJ:1},hy:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
a1:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d_","$1","$0","gX",0,2,0],
sb1:function(a){var z,y,x
if(a==null)a=new X.hY()
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.N("camera",x,this.a,this,[X.cq])
z.b=!0
this.a1(z)}},
sbb:function(a,b){var z,y,x
if(b==null)b=X.ed(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.N("target",x,this.b,this,[X.cD])
z.b=!0
this.a1(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.bQ])
z.b=!0
this.a1(z)}},
a9:function(a){var z
a.cH(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.aa(0,a)
this.d.aa(0,a)
this.d.a9(a)
this.a.ae(a)
this.b.ae(a)
a.cG()},
$isaJ:1,
p:{
e0:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.hy()
z.sb1(a)
z.sbb(0,b)
z.saW(c)
y=E.ea(null,!0,null,"",null,null)
x=F.eG()
w=x.a
v=new V.L(-1,-1,1)
v=v.A(0,Math.sqrt(v.E(v)))
u=w.bo(new V.bO(1,2,4,6),new V.aE(1,0,0,1),new V.a4(-1,-1,0),new V.T(0,1),v,null)
w=x.a
v=new V.L(1,-1,1)
v=v.A(0,Math.sqrt(v.E(v)))
t=w.bo(new V.bO(0,3,4,6),new V.aE(0,0,1,1),new V.a4(1,-1,0),new V.T(1,1),v,null)
w=x.a
v=new V.L(1,1,1)
v=v.A(0,Math.sqrt(v.E(v)))
s=w.bo(new V.bO(0,2,5,6),new V.aE(0,1,0,1),new V.a4(1,1,0),new V.T(1,0),v,null)
w=x.a
v=new V.L(-1,1,1)
v=v.A(0,Math.sqrt(v.E(v)))
r=w.bo(new V.bO(0,2,4,7),new V.aE(1,1,0,1),new V.a4(-1,1,0),new V.T(0,0),v,null)
x.d.hr(H.d([u,t,s,r],[F.at]))
x.aw()
y.sbM(0,x)
z.d=y
z.e=null
return z}}},hO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d_","$1","$0","gX",0,2,0],
iF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfj",8,0,8],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.u(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.f(x,w)
C.a.W(s.a,x)}}z=new D.ca(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfk",8,0,8],
sb1:function(a){var z,y,x
if(a==null)a=X.ez(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.N("camera",x,this.a,this,[X.cq])
z.b=!0
this.a1(z)}},
sbb:function(a,b){var z,y,x
if(b==null)b=X.ed(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.N("target",x,this.b,this,[X.cD])
z.b=!0
this.a1(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.W(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.bQ])
z.b=!0
this.a1(z)}},
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
a9:function(a){var z
a.cH(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.aa(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aa(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();)z.d.a9(a)
this.a.toString
a.cy.aC()
a.db.aC()
this.b.ae(a)
a.cG()},
$isaJ:1},aJ:{"^":"b;"}}],["","",,A,{"^":"",dQ:{"^":"b;a,b,c"},hg:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hE:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e8:{"^":"cC;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
a8:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ez(c)
b.a.uniform1i(b.d,0)}}},es:{"^":"cC;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aR,0ay,0aS,0bs,0dL,0dM,0bt,0bu,0dN,0dO,0bv,0bw,0dP,0dQ,0bx,0dR,0dS,0by,0dT,0dU,0bz,0bA,0bB,0dV,0dW,0bC,0bD,0dX,0dY,0bE,0dZ,0co,0e_,0cp,0e0,0cq,0e1,0cr,0e2,0cs,0e3,0ct,a,b,0c,0d,0e,0f,0r",
eH:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.ar("")
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
z=new P.ar("")
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
p=H.d([],[P.k])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.cw(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.i(this.r.n(0,"invViewMat"),"$isas")
if(y)this.db=H.i(this.r.n(0,"objMat"),"$isas")
if(w)this.dx=H.i(this.r.n(0,"viewObjMat"),"$isas")
this.fr=H.i(this.r.n(0,"projViewObjMat"),"$isas")
if(a1.x2)this.go=H.i(this.r.n(0,"txt2DMat"),"$iscg")
if(a1.y1)this.id=H.i(this.r.n(0,"txtCubeMat"),"$isas")
if(a1.y2)this.k1=H.i(this.r.n(0,"colorMat"),"$isas")
this.k3=H.d([],[A.as])
y=a1.aR
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isJ")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isas"))}}y=a1.a
if(y!==C.c){this.k4=H.i(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.i(this.r.n(0,"emissionTxt"),"$isag")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isJ")
break
case C.f:this.r2=H.i(this.r.n(0,"emissionTxt"),"$isaj")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isJ")
break}}y=a1.b
if(y!==C.c){this.ry=H.i(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.i(this.r.n(0,"ambientTxt"),"$isag")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isJ")
break
case C.f:this.x2=H.i(this.r.n(0,"ambientTxt"),"$isaj")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isJ")
break}}y=a1.c
if(y!==C.c){this.y2=H.i(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.aR=H.i(this.r.n(0,"diffuseTxt"),"$isag")
this.aS=H.i(this.r.n(0,"nullDiffuseTxt"),"$isJ")
break
case C.f:this.ay=H.i(this.r.n(0,"diffuseTxt"),"$isaj")
this.aS=H.i(this.r.n(0,"nullDiffuseTxt"),"$isJ")
break}}y=a1.d
if(y!==C.c){this.bs=H.i(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dL=H.i(this.r.n(0,"invDiffuseTxt"),"$isag")
this.bt=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isJ")
break
case C.f:this.dM=H.i(this.r.n(0,"invDiffuseTxt"),"$isaj")
this.bt=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isJ")
break}}y=a1.e
if(y!==C.c){this.bw=H.i(this.r.n(0,"shininess"),"$isZ")
this.bu=H.i(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dN=H.i(this.r.n(0,"specularTxt"),"$isag")
this.bv=H.i(this.r.n(0,"nullSpecularTxt"),"$isJ")
break
case C.f:this.dO=H.i(this.r.n(0,"specularTxt"),"$isaj")
this.bv=H.i(this.r.n(0,"nullSpecularTxt"),"$isJ")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.e:this.dP=H.i(this.r.n(0,"bumpTxt"),"$isag")
this.bx=H.i(this.r.n(0,"nullBumpTxt"),"$isJ")
break
case C.f:this.dQ=H.i(this.r.n(0,"bumpTxt"),"$isaj")
this.bx=H.i(this.r.n(0,"nullBumpTxt"),"$isJ")
break}if(a1.dy){this.dR=H.i(this.r.n(0,"envSampler"),"$isaj")
this.dS=H.i(this.r.n(0,"nullEnvTxt"),"$isJ")
y=a1.r
if(y!==C.c){this.by=H.i(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dT=H.i(this.r.n(0,"reflectTxt"),"$isag")
this.bz=H.i(this.r.n(0,"nullReflectTxt"),"$isJ")
break
case C.f:this.dU=H.i(this.r.n(0,"reflectTxt"),"$isaj")
this.bz=H.i(this.r.n(0,"nullReflectTxt"),"$isJ")
break}}y=a1.x
if(y!==C.c){this.bA=H.i(this.r.n(0,"refraction"),"$isZ")
this.bB=H.i(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dV=H.i(this.r.n(0,"refractTxt"),"$isag")
this.bC=H.i(this.r.n(0,"nullRefractTxt"),"$isJ")
break
case C.f:this.dW=H.i(this.r.n(0,"refractTxt"),"$isaj")
this.bC=H.i(this.r.n(0,"nullRefractTxt"),"$isJ")
break}}}y=a1.y
if(y!==C.c){this.bD=H.i(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dX=H.i(this.r.n(0,"alphaTxt"),"$isag")
this.bE=H.i(this.r.n(0,"nullAlphaTxt"),"$isJ")
break
case C.f:this.dY=H.i(this.r.n(0,"alphaTxt"),"$isaj")
this.bE=H.i(this.r.n(0,"nullAlphaTxt"),"$isJ")
break}}this.co=H.d([],[A.f4])
this.cp=H.d([],[A.f5])
this.cq=H.d([],[A.f6])
this.cr=H.d([],[A.f7])
this.cs=H.d([],[A.f8])
this.ct=H.d([],[A.f9])
if(a1.k2){y=a1.z
if(y>0){this.dZ=H.e(this.r.n(0,"dirLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.co;(x&&C.a).h(x,new A.f4(m,l,k))}}y=a1.Q
if(y>0){this.e_=H.e(this.r.n(0,"pntLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isK")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isZ")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isZ")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.cp;(x&&C.a).h(x,new A.f5(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e0=H.e(this.r.n(0,"spotLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isK")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isK")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isZ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isZ")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isZ")
x=this.cq;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e1=H.e(this.r.n(0,"txtDirLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isK")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isK")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isK")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isJ")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isag")
x=this.cr;(x&&C.a).h(x,new A.f7(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e2=H.e(this.r.n(0,"txtPntLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$iscg")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isK")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isJ")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isZ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isZ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isaj")
x=this.cs;(x&&C.a).h(x,new A.f8(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e3=H.e(this.r.n(0,"txtSpotLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isK")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isK")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isK")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isK")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isK")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isJ")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isK")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isZ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isag")
x=this.ct;(x&&C.a).h(x,new A.f9(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
is:function(a,b){var z,y
z=a.ay
y=new A.es(b,z)
y.bP(b,z)
y.eH(a,b)
return y}}},iv:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aR,ay,aS",
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
z=a.a+="uniform BendingValue bendValues["+this.aR+"];\n"
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
at:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aE(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h9:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.at(a,z,"emission")
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
h4:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.at(a,z,"ambient")
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
h7:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.at(a,z,"diffuse")
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
ha:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.at(a,z,"invDiffuse")
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
hi:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.at(a,z,"specular")
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
hd:function(a){var z,y
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
hg:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.at(a,z,"reflect")
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
hh:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.at(a,z,"refract")
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
i:function(a){return this.ay}},f4:{"^":"b;a,b,c"},f7:{"^":"b;a,b,c,d,e,f,r,x"},f5:{"^":"b;a,b,c,d,e,f,r"},f8:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cC:{"^":"cU;",
bP:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cw:function(a,b,c){var z,y,x
this.c=this.d9(b,35633)
this.d=this.d9(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fU(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(x)))}this.fW()
this.fY()},
Y:function(a){a.a.useProgram(this.e)
this.f.hE()},
d9:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fU(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fW:function(){var z,y,x,w,v,u
z=H.d([],[A.dQ])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dQ(y,v.name,u))}this.f=new A.hg(z)},
fY:function(){var z,y,x,w,v,u
z=H.d([],[A.ab])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hB(v.type,v.size,v.name,u))}this.r=new A.jX(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.J(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f0:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ag(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f1:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.dq(z,y,b,a,c)},
bn:function(a,b){return new P.fm(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hB:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jS(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jV(this.a,this.e,c,d)
case 35667:return new A.jT(this.a,this.e,c,d)
case 35668:return new A.jU(this.a,this.e,c,d)
case 35669:return new A.jW(this.a,this.e,c,d)
case 35674:return new A.jZ(this.a,this.e,c,d)
case 35675:return new A.cg(this.a,this.e,c,d)
case 35676:return new A.as(this.a,this.e,c,d)
case 35678:return this.f0(b,c,d)
case 35680:return this.f1(b,c,d)
case 35670:throw H.a(this.bn("BOOL",c))
case 35671:throw H.a(this.bn("BOOL_VEC2",c))
case 35672:throw H.a(this.bn("BOOL_VEC3",c))
case 35673:throw H.a(this.bn("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cr:{"^":"b;a,b",
i:function(a){return this.b}},eH:{"^":"cC;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ab:{"^":"b;"},jX:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.T()},
hJ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
T:function(){return this.hJ("\n")}},J:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jT:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jU:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jW:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jR:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dq:function(a,b,c,d,e){var z=new A.jR(a,b,c,e)
z.f=d
z.e=P.ii(d,0,!1,P.m)
return z}}},Z:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jS:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jV:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jZ:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},cg:{"^":"ab;a,b,c,d",
a5:function(a){var z=new Float32Array(H.bs(H.u(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},as:{"^":"ab;a,b,c,d",
a5:function(a){var z=new Float32Array(H.bs(H.u(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ag:{"^":"ab;a,b,c,d",
ez:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aj:{"^":"ab;a,b,c,d",
eA:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
n4:function(a,b,c,d){return F.mD(c,a,d,b,new F.n5())},
mD:function(a,b,c,d,e){var z=F.n2(a,b,new F.mE(H.f(e,{func:1,ret:V.a4,args:[P.z]}),d,b,c),null)
if(z==null)return
z.aw()
z.hY(new F.kr(),new F.iF())
return z},
n2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.at,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.eG()
y=H.d([],[F.at])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cG(null,null,new V.aE(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.dG(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cG(null,null,new V.aE(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.dG(d))}}z.d.hs(a+1,b+1,y)
return z},
n5:{"^":"p:43;",
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)}},
mE:{"^":"p:44;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dM(y.$1(z),x)
x=J.dM(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.L(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.E(x)))
u=new V.L(1,0,0)
y=v.ax(!v.w(0,u)?new V.L(0,0,1):u)
t=y.A(0,Math.sqrt(y.E(y)))
y=t.ax(v)
u=y.A(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.I(0,new V.a4(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.R(a.f,x)){a.f=x
y=a.a
if(y!=null)y.ad()}}},
aq:{"^":"b;0a,0b,0c,0d,0e",
b4:function(){if(!this.gdI()){C.a.W(this.a.a.d.b,this)
this.a.a.ad()}this.fK()
this.fL()
this.fM()},
fT:function(a){this.a=a
C.a.h(a.d.b,this)},
fU:function(a){this.b=a
C.a.h(a.d.c,this)},
fV:function(a){this.c=a
C.a.h(a.d.d,this)},
fK:function(){var z=this.a
if(z!=null){C.a.W(z.d.b,this)
this.a=null}},
fL:function(){var z=this.b
if(z!=null){C.a.W(z.d.c,this)
this.b=null}},
fM:function(){var z=this.c
if(z!=null){C.a.W(z.d.d,this)
this.c=null}},
gdI:function(){return this.a==null||this.b==null||this.c==null},
eV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.L(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ee())return
return v.A(0,Math.sqrt(v.E(v)))},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.L(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.ax(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
ci:function(){if(this.d!=null)return!0
var z=this.eV()
if(z==null){z=this.eY()
if(z==null)return!1}this.d=z
this.a.a.ad()
return!0},
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.L(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ee())return
return v.A(0,Math.sqrt(v.E(v)))},
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
if($.r.$2(n,0)){z=r.L(0,u)
z=new V.L(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).I(0,u).L(0,x)
z=new V.L(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.ax(m)
z=z.A(0,Math.sqrt(z.E(z))).ax(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
cf:function(){if(this.e!=null)return!0
var z=this.eU()
if(z==null){z=this.eX()
if(z==null)return!1}this.e=z
this.a.a.ad()
return!0},
ghy:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
F:function(a){var z,y
if(this.gdI())return a+"disposed"
z=a+C.b.aB(J.am(this.a.e),0)+", "+C.b.aB(J.am(this.b.e),0)+", "+C.b.aB(J.am(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
T:function(){return this.F("")},
p:{
c7:function(a,b,c){var z,y,x
z=new F.aq()
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
z.a.a.ad()
return z}}},
hR:{"^":"b;"},
ji:{"^":"hR;",
b6:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
el:{"^":"b;"},
i8:{"^":"b;"},
jQ:{"^":"i8;",
b6:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
return z==null?y==null:z===y}else return!1}}},
eB:{"^":"b;"},
eF:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.aD(0)
return y},
f5:function(a,b,c,d,e){var z,y,x
H.u(d,"$isc",[F.at],"$asc")
H.u(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.b6(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hY:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.at],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.f5(a,v,y,u,t))b.hX(u)}this.a.D()
this.c.cK()
this.d.cK()
this.b.ig()
this.c.cL(new F.jQ())
this.d.cL(new F.ji())
z=this.e
if(!(z==null))z.aD(0)},
ce:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ak()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
v=b.gcW(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dU])
for(r=0,q=0;q<w;++q){p=b.hv(q)
o=p.gcW(p)
C.a.m(s,q,new Z.dU(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hS(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.u(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bs(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cp(new Z.fj(34962,j),s,b)
i.b=H.d([],[Z.cw])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)}f=Z.du(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cw(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)}f=Z.du(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cw(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.D()
C.a.h(h,g.e)}f=Z.du(y,34963,H.u(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cw(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.C(z,"\n")},
aU:function(a){var z=this.e
if(!(z==null))z.B(a)},
ad:function(){return this.aU(null)},
p:{
eG:function(){var z,y
z=new F.eF()
y=new F.km(z)
y.b=!1
y.c=H.d([],[F.at])
z.a=y
y=new F.jd(z)
y.b=H.d([],[F.eB])
z.b=y
y=new F.jc(z)
y.b=H.d([],[F.el])
z.c=y
y=new F.jb(z)
y.b=H.d([],[F.aq])
z.d=y
z.e=null
return z}}},
jb:{"^":"b;a,0b",
hr:function(a){var z,y,x,w,v
H.u(a,"$isc",[F.at],"$asc")
z=H.d([],[F.aq])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.c7(y,w,v))}return z},
hs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isc",[F.at],"$asc")
z=H.d([],[F.aq])
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
C.a.h(z,F.c7(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c7(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c7(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c7(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cL:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b6(0,v,t)){v.b4()
break}}}}},
cK:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.ghy(x)
if(y)x.b4()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ci())x=!1
return x},
cg:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cf())x=!1
return x},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}},
jc:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cL:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b6(0,v,t)){v.b4()
break}}}}},
cK:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.R(x.a,x.b)
if(y)x.b4()}},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.C(z,"\n")},
T:function(){return this.F("")}},
jd:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ig:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.b4()}},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}},
at:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dG:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
hS:function(a){var z,y
z=J.H(a)
if(z.w(a,$.$get$ak())){z=this.f
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aT())){z=this.r
y=[P.z]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aS())){z=this.x
y=[P.z]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aB())){z=this.y
y=[P.z]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.w(a,$.$get$aU())){z=this.z
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bT())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bU())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.w(a,$.$get$bq()))return H.d([this.ch],[P.z])
else if(z.w(a,$.$get$aR())){z=this.cx
y=[P.z]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.z])},
ci:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.L(0,0,0)
this.d.J(0,new F.kw(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.ad()
z=this.a.e
if(!(z==null))z.aD(0)}return!0},
cf:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.L(0,0,0)
this.d.J(0,new F.kv(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.ad()
z=this.a.e
if(!(z==null))z.aD(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
F:function(a){var z,y,x
z=H.d([],[P.k])
C.a.h(z,C.b.aB(J.am(this.e),0))
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
T:function(){return this.F("")},
p:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.at()
y=new F.ku(z)
y.b=H.d([],[F.eB])
z.b=y
y=new F.kq(z)
x=[F.el]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.kn(z)
x=[F.aq]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fg()
z.e=0
y=$.$get$ak()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aT().a)!==0?e:null
z.x=(x&$.$get$aS().a)!==0?b:null
z.y=(x&$.$get$aB().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$fh().a)!==0?c:null
z.ch=(x&$.$get$bq().a)!==0?i:0
z.cx=(x&$.$get$aR().a)!==0?a:null
return z}}},
kw:{"^":"p:9;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
kv:{"^":"p:9;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
km:{"^":"b;a,0b,0c",
D:function(){var z,y,x,w
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
this.a.ad()
return!0},
ht:function(a,b,c,d,e,f,g,h,i){var z=F.cG(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bo:function(a,b,c,d,e,f){return this.ht(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ci()
return!0},
cg:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cf()
return!0},
hx:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
this.D()
z=H.d([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}},
kn:{"^":"b;a,0b,0c,0d",
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
J:function(a,b){H.f(b,{func:1,ret:-1,args:[F.aq]})
C.a.J(this.b,b)
C.a.J(this.c,new F.ko(this,b))
C.a.J(this.d,new F.kp(this,b))},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}},
ko:{"^":"p:9;a,b",
$1:function(a){H.e(a,"$isaq")
if(!J.R(a.a,this.a))this.b.$1(a)}},
kp:{"^":"p:9;a,b",
$1:function(a){var z
H.e(a,"$isaq")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
kq:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}},
ks:{"^":"b;"},
kr:{"^":"ks;",
b6:function(a,b,c){return J.R(b.f,c.f)}},
kt:{"^":"b;"},
iF:{"^":"kt;",
hX:function(a){var z,y,x,w,v,u,t,s
H.u(a,"$isc",[F.at],"$asc")
z=new V.L(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.L(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){t=a[x]
s=z.A(0,Math.sqrt(u))
if(!J.R(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.B(null)}}}return}},
ku:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.T()},
F:function(a){var z,y,x,w
z=H.d([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.C(z,"\n")},
T:function(){return this.F("")}}}],["","",,O,{"^":"",hE:{"^":"bQ;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
a2:function(a){var z=this.r
if(!(z==null))z.B(a)},
aq:function(){return this.a2(null)},
sdE:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.aq()}},
sdD:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.aq()}},
sdC:function(a){var z=a==null?V.b0():a
this.f=z
if(!z.w(0,a)){this.f=a
this.aq()}},
aa:function(a,b){},
P:function(a,b){H.u(a,"$isc",[T.bR],"$asc")
if(b!=null)if(!C.a.b2(a,b)){b.a=a.length
C.a.h(a,b)}},
cM:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.e(a.fr.j(0,"Distort"),"$ise8")
if(z==null){y=a.a
z=new A.e8(y,"Distort")
z.bP(y,"Distort")
z.cw(0,$.hG,$.hF)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"txt2DAttr")
z.z=H.i(z.r.n(0,"projViewObjMat"),"$isas")
z.Q=H.i(z.r.n(0,"colorTxt2DMat"),"$iscg")
z.ch=H.i(z.r.n(0,"bumpTxt2DMat"),"$iscg")
z.cx=H.i(z.r.n(0,"colorTxt"),"$isag")
z.cy=H.i(z.r.n(0,"bumpTxt"),"$isag")
z.db=H.i(z.r.n(0,"nullColorTxt"),"$isJ")
z.dx=H.i(z.r.n(0,"nullBumpTxt"),"$isJ")
z.dy=H.i(z.r.n(0,"bumpMat"),"$isas")
a.c8(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$ak()
v=$.$get$aB()
v=y.ce(new Z.dt(x),new Z.b2(w.a|v.a))
v.ak($.$get$ak()).e=this.a.x.c
v.ak($.$get$aB()).e=this.a.y.c
b.e=v}u=H.d([],[T.bR])
this.P(u,this.b)
this.P(u,this.c)
for(t=0;t<u.length;++t){y=u[t]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=this.a
y.Y(a)
x=this.b
y.a8(y.cx,y.db,x)
x=this.c
y.a8(y.cy,y.dx,x)
x=a.gek()
w=y.z
w.toString
w.a5(x.a4(0,!0))
x=this.d
w=y.Q
w.toString
w.a5(x.a4(0,!0))
x=this.e
w=y.ch
w.toString
w.a5(x.a4(0,!0))
x=this.f
y=y.dy
y.toString
y.a5(x.a4(0,!0))
y=b.e
if(y instanceof Z.cp){y.Y(a)
y.a9(a)
y.ae(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cn()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},ir:{"^":"bQ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
a2:[function(a){var z
H.e(a,"$iso")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.a2(null)},"aq","$1","$0","gbQ",0,2,0],
fQ:[function(a){H.e(a,"$iso")
this.a=null
this.a2(a)},function(){return this.fQ(null)},"j0","$1","$0","gfP",0,2,0],
iC:[function(a,b){var z=V.aF
z=new D.c9(a,H.u(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a2(z)},"$2","gfg",8,0,20],
iD:[function(a,b){var z=V.aF
z=new D.ca(a,H.u(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a2(z)},"$2","gfh",8,0,20],
d6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a7(z.e.length+3,4)*4
x=C.d.a7(z.f.length+3,4)*4
w=C.d.a7(z.r.length+3,4)*4
v=C.d.a7(z.x.length+3,4)*4
u=C.d.a7(z.y.length+3,4)*4
t=C.d.a7(z.z.length+3,4)*4
s=C.d.a7(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a6=$.$get$ak()
if(c){z=$.$get$aT()
a6=new Z.b2(a6.a|z.a)}if(b){z=$.$get$aS()
a6=new Z.b2(a6.a|z.a)}if(a){z=$.$get$aB()
a6=new Z.b2(a6.a|z.a)}if(a0){z=$.$get$aU()
a6=new Z.b2(a6.a|z.a)}if(a2){z=$.$get$aR()
a6=new Z.b2(a6.a|z.a)}return new A.iv(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.u(a,"$isc",[T.bR],"$asc")},
aa:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
x=new V.L(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cP(x)}}},
cM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d6()
y=H.e(a.fr.j(0,z.ay),"$ises")
if(y==null){y=A.is(z,a.a)
a.c8(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aS
z=b.e
if(!(z instanceof Z.cp)){b.e=null
z=null}if(z==null||!z.d.w(0,w)){z=x.r1
if(z)b.d.aw()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cg()
u.a.cg()
u=u.e
if(!(u==null))u.aD(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hx()
t=t.e
if(!(t==null))t.aD(0)}r=b.d.ce(new Z.dt(a.a),w)
r.ak($.$get$ak()).e=this.a.y.c
if(z)r.ak($.$get$aT()).e=this.a.Q.c
if(v)r.ak($.$get$aS()).e=this.a.z.c
if(x.rx)r.ak($.$get$aB()).e=this.a.ch.c
if(u)r.ak($.$get$aU()).e=this.a.cx.c
if(x.x1)r.ak($.$get$aR()).e=this.a.cy.c
b.e=r}z=T.bR
q=H.d([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga_(u)
v=v.db
v.toString
v.a5(u.a4(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga_(u)
t=a.dx
t=u.k(0,t.ga_(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a5(u.a4(0,!0))}v=this.a
u=a.gek()
v=v.fr
v.toString
v.a5(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a5(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a5(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a5(C.u.a4(u,!0))}if(x.aR>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.z],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.e(t,"$isaF")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bs(H.u(t.a4(0,!0),"$isc",v,"$asc")))
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
case C.e:this.P(q,this.f.d)
v=this.a
u=this.f.d
v.a8(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.P(q,this.f.e)
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
case C.e:this.P(q,this.r.d)
v=this.a
u=this.r.d
v.a8(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.P(q,this.r.e)
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
case C.e:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.a8(v.aR,v.aS,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.ah(v.ay,v.aS,u)
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
v=v.bs
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.a8(v.dL,v.bt,u)
u=this.a
v=this.y.f
u=u.bs
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.ah(v.dM,v.bt,u)
u=this.a
v=this.y.f
u=u.bs
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bu
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bw
u.a.uniform1f(u.d,s)
break
case C.e:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.a8(v.dN,v.bv,u)
u=this.a
v=this.z.f
u=u.bu
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bw
v.a.uniform1f(v.d,s)
break
case C.f:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.ah(v.dO,v.bv,u)
u=this.a
v=this.z.f
u=u.bu
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bw
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dZ
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.co
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cP(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e_
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cp
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gb9(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bg(j.gb9(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gam(j)
g=i.d
h=t.gbH()
s=t.gbh()
t=t.gbp()
g.a.uniform3f(g.d,h,s,t)
t=j.gc9()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gca()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcb()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e0
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cq
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gb9(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcm(j).j7()
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.bg(j.gb9(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gam(j)
s=i.e
h=t.gbH()
g=t.gbh()
t=t.gbp()
s.a.uniform3f(s.d,h,g,t)
t=j.gj5()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj4()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gca()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcb()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e1
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
s=this.a.cr
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbc()
H.u(q,"$isc",t,"$asc")
if(!C.a.b2(q,s)){s.seb(0,q.length)
C.a.h(q,s)}s=j.gcm(j)
h=i.d
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=j.gbI()
f=i.b
g=s.gaO(s)
h=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,h,s)
s=j.gba(j)
h=i.c
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=m.cP(j.gcm(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gam(j)
g=i.f
f=h.gbH()
s=h.gbh()
h=h.gbp()
g.a.uniform3f(g.d,f,s,h)
h=j.gbc()
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
m=v.ga_(v)
for(v=this.dx.y,u=v.length,t=[P.z],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
h=this.a.cs
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbc()
H.u(q,"$isc",s,"$asc")
if(!C.a.b2(q,h)){h.seb(0,q.length)
C.a.h(q,h)}e=m.k(0,j.ga_(j))
h=j.ga_(j).bg(new V.a4(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcS(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bg(new V.a4(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cB(0)
d=i.d
n=new Float32Array(H.bs(H.u(new V.bJ(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gam(j)
h=i.e
f=d.gbH()
g=d.gbh()
d=d.gbp()
h.a.uniform3f(h.d,f,g,d)
d=j.gbc()
h=d.gef(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdg()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdd())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc9()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gca()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcb()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga_(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.ct
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbc()
H.u(q,"$isc",z,"$asc")
if(!C.a.b2(q,t)){t.seb(0,q.length)
C.a.h(q,t)}t=j.gb9(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcm(j)
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbI()
s=i.d
h=t.gaO(t)
g=t.gaP(t)
t=t.gaQ()
s.a.uniform3f(s.d,h,g,t)
t=j.gba(j)
g=i.e
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.bg(j.gb9(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbc()
s=t.gef(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdg()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdd())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gam(j)
s=i.y
h=t.gbH()
g=t.gbh()
t=t.gbp()
s.a.uniform3f(s.d,h,g,t)
t=j.gjc()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjd()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gca()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcb()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.e:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.a8(z.dP,z.bx,v)
break
case C.f:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.ah(z.dQ,z.bx,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga_(v).cB(0)
a.Q=v}z=z.fy
z.toString
z.a5(v.a4(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.ah(z.dR,z.dS,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.by
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.a8(z.dT,z.bz,v)
v=this.a
z=this.cx.f
v=v.by
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.ah(z.dU,z.bz,v)
v=this.a
z=this.cx.f
v=v.by
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bB
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bA
v.a.uniform1f(v.d,t)
break
case C.e:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.a8(z.dV,z.bC,v)
v=this.a
z=this.cy.f
v=v.bB
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bA
z.a.uniform1f(z.d,t)
break
case C.f:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.ah(z.dW,z.bC,v)
v=this.a
z=this.cy.f
v=v.bB
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bA
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bD
z.a.uniform1f(z.d,u)
break
case C.e:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.a8(z.dX,z.bE,u)
u=this.a
z=this.db.f
u=u.bD
u.a.uniform1f(u.d,z)
break
case C.f:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.ah(z.dY,z.bE,u)
u=this.a
z=this.db.f
u=u.bD
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Y(a)
z=b.e
z.Y(a)
z.a9(a)
z.ae(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].ae(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.cn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d6().ay}},it:{"^":"db;0f,a,b,0c,0d,0e"},db:{"^":"b;",
bl:["eF",function(){}]},iu:{"^":"db;a,b,0c,0d,0e"},bd:{"^":"db;0f,a,b,0c,0d,0e",
dn:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.a2(y)}},
bl:["bO",function(){this.eF()
this.dn(new V.a1(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bl()
z=this.a
z.a=null
z.a2(null)}this.dn(b)}},iw:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
fS:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.a2(z)}},
bl:function(){this.bO()
this.fS(1)}},ix:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
c4:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.a2(z)}},
bl:function(){this.bO()
this.c4(100)}},jj:{"^":"bQ;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
a2:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.a2(null)},"aq","$1","$0","gbQ",0,2,0],
aa:function(a,b){},
cM:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$iseH")
if(z==null){y=a.a
z=new A.eH(y,"Skybox")
z.bP(y,"Skybox")
z.cw(0,$.jl,$.jk)
z.x=z.f.j(0,"posAttr")
z.y=H.i(z.r.j(0,"fov"),"$isZ")
z.z=H.i(z.r.j(0,"ratio"),"$isZ")
z.Q=H.i(z.r.j(0,"boxClr"),"$isK")
z.ch=H.i(z.r.j(0,"boxTxt"),"$isaj")
z.cx=H.i(z.r.j(0,"viewMat"),"$isas")
a.c8(z)}this.a=z}if(b.e==null){y=b.d.ce(new Z.dt(a.a),$.$get$ak())
y.ak($.$get$ak()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Y(a)
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
x=x.ga_(x).cB(0)
w=w.cx
w.toString
w.a5(x.a4(0,!0))
y=b.e
if(y instanceof Z.cp){y.Y(a)
y.a9(a)
y.ae(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cn()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bQ:{"^":"b;"}}],["","",,T,{"^":"",bR:{"^":"cU;"},jw:{"^":"bR;0b,0c,0d,0e,0f,0r,0x,0y,a",
dq:function(){if(!this.d){this.d=!0
this.y.dK()}},
p:{
dm:function(a,b){var z=new T.jw(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.G()
return z}}},eN:{"^":"bR;0b,0c,0d,0e,a"},jA:{"^":"b;a,0b,0c,0d,0e",
hV:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.d4(null,a,null)
w=T.dm(0,y)
z=W.a9
W.a0(x,"load",H.f(new T.jC(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hU:function(a){return this.hV(a,!1,!1,!1,!1)},
aJ:function(a,b,c,d,e,f){var z,y
z=W.d4(null,c,null);++this.d
y=W.a9
W.a0(z,"load",H.f(new T.jB(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dm:function(a,b,c){var z,y,x,w
b=V.c3(b,2)
z=V.c3(a.width,2)
y=V.c3(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.e(C.l.ev(x,"2d"),"$isdW")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mC(w.getImageData(0,0,x.width,x.height))}}},jC:{"^":"p:13;a,b,c,d,e,f,r",
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
C.q.en(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.dq();++x.e}},jB:{"^":"p:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dm(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.en(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dK();++z.e}}}],["","",,V,{"^":"",hf:{"^":"b;",
b5:function(a,b){return!0},
i:function(a){return"all"},
$isce:1},ce:{"^":"b;"},er:{"^":"b;",
b5:["eE",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b5(0,b))return!0
return!1}],
i:["cX",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isce:1},bL:{"^":"er;0a",
b5:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.cX(0)+"]"}},j9:{"^":"b;0a",
eJ:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.m,P.ad])
for(y=new H.eo(a,a.gl(a),0,[H.av(a,"w",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
b5:function(a,b){return this.a.br(0,b)},
i:function(a){var z=this.a
return P.cf(z.gao(z),0,null)},
$isce:1,
p:{
a8:function(a){var z=new V.j9()
z.eJ(a)
return z}}},eJ:{"^":"b;a,b,0c,0d",
ghZ:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eT(this.a.N(0,b))
w.a=H.d([],[V.ce])
w.c=!1
C.a.h(this.c,w)
return w},
hG:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b5(0,a))return w}return},
i:function(a){return this.b}},eQ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h6(this.b,"\n","\\n")
y=H.h6(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eR:{"^":"b;a,b,0c",
i:function(a){return this.b}},jL:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eJ(this,b)
z.c=H.d([],[V.eT])
this.a.m(0,b,z)}return z},
be:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eR(this,a)
y=P.k
z.c=new H.b_(0,0,[y,y])
this.b.m(0,a,z)}return z},
it:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eQ])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hG(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cf(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghZ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cf(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eQ(o==null?p.b:o,q,t)}++t}}}},eT:{"^":"er;b,0c,0a",
i:function(a){return this.b.b+": "+this.cX(0)}}}],["","",,X,{"^":"",hi:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gu:function(){var z=this.db
if(z==null){z=D.G()
this.db=z}return z},
ar:function(a){var z=this.db
if(!(z==null))z.B(a)},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.C(z.getParameter(3379))
u=V.c3(x,2)
t=V.c3(w,2)
v=V.c3(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.eo(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.dm(0,s)
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
y=this.y
x=y.b
this.r=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.x=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.f=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.r,0)
z.framebufferRenderbuffer(36160,36096,36161,this.x)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.f)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.cy
y=z.c
a.c=C.d.a0(y*this.a)
x=z.d
a.d=C.d.a0(x*this.b)
w=this.c
if(typeof w!=="number")return H.n(w)
q=C.d.a0(z.a*w)
p=this.d
if(typeof p!=="number")return H.n(p)
o=C.d.a0(z.b*p)
n=C.d.a0(y*w)
m=C.d.a0(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
ae:function(a){a.a.bindFramebuffer(36160,null)}},cq:{"^":"b;",$isaI:1},hW:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
Y:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.n(y)
v=C.d.a0(w.a*y)
if(typeof x!=="number")return H.n(x)
u=C.d.a0(w.b*x)
t=C.d.a0(w.c*y)
a.c=t
w=C.d.a0(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
ae:function(a){},
p:{
ed:function(a,b,c,d,e,f,g){var z,y
z=new X.hW()
y=new V.aE(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dh(0,0,1,1)
z.r=y
return z}}},hY:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
Y:function(a){var z
a.cy.bG(V.b0())
z=V.b0()
a.db.bG(z)},
ae:function(a){a.cy.aC()
a.db.aC()},
$isaI:1,
$iscq:1},iI:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
ar:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.ar(null)},"iv","$1","$0","geR",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bG(V.aG(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eA
if(z==null){z=V.et(new V.a4(0,0,0),new V.L(0,1,0),new V.L(0,0,-1))
$.eA=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aX(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bG(r)},
ae:function(a){a.cy.aC()
a.db.aC()},
$isaI:1,
$iscq:1,
p:{
ez:function(a,b,c,d){var z,y,x,w
z=new X.iI()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gu()
x.toString
w=H.f(z.geR(),{func:1,ret:-1,args:[D.o]})
C.a.h(x.a,w)}x=new D.N("mover",y,z.a,z,[U.ai])
x.b=!0
z.ar(x)}x=z.b
if(!$.r.$2(x,b)){y=z.b
z.b=b
x=new D.N("fov",y,b,z,[P.z])
x.b=!0
z.ar(x)}x=z.c
if(!$.r.$2(x,d)){y=z.c
z.c=d
x=new D.N("near",y,d,z,[P.z])
x.b=!0
z.ar(x)}x=z.d
if(!$.r.$2(x,a)){y=z.d
z.d=a
x=new D.N("far",y,a,z,[P.z])
x.b=!0
z.ar(x)}return z}}},cD:{"^":"b;"}}],["","",,V,{"^":"",
n0:function(a){P.jK(C.H,new V.n1(a))},
n1:{"^":"p:48;a",
$1:function(a){H.e(a,"$isbn")
P.dL(C.h.eq(this.a.ghK(),2)+" fps")}},
je:{"^":"b;0a,0b",
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
t=W.a9
W.a0(z,"scroll",H.f(new V.jh(x),{func:1,ret:-1,args:[t]}),!1,t)},
hu:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isc",[P.k],"$asc")
this.fX()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.it(C.a.hQ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.h5(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cJ(C.T,s,C.k,!1)
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
x=H.e(w.insertCell(-1),"$isdl").style
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
t=H.e(w.insertCell(-1),"$isdl")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fX:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jL()
y=P.k
z.a=new H.b_(0,0,[y,V.eJ])
z.b=new H.b_(0,0,[y,V.eR])
z.c=z.N(0,"Start")
y=z.N(0,"Start").C(0,"Bold")
x=V.a8(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").C(0,"Bold")
x=new V.bL()
w=[V.ce]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").C(0,"Italic")
x=V.a8(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").C(0,"Italic")
x=new V.bL()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").C(0,"Code")
x=V.a8(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").C(0,"Code")
x=new V.bL()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a5("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").C(0,"LinkHead")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").C(0,"LinkTail")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").C(0,"Other").a,new V.hf())
x=z.N(0,"Other").C(0,"Other")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.be("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.be("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.be("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.be("Link")
x=z.N(0,"Other")
x.d=x.a.be("Other")
this.b=z},
p:{
jf:function(a,b){var z=new V.je()
z.eK(a,!0)
return z}}},
jh:{"^":"p:13;a",
$1:function(a){P.jJ(C.t,new V.jg(this.a))}},
jg:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.h.a0(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jx:{"^":"b;a,b,0c,d",
dz:function(a,b,c){var z,y,x,w,v,u
z=W.d4(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.cm(this.c)
x=y.gl(y)
y=W.ae
W.a0(z,"click",H.f(new V.jz(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.cm(this.c).h(0,z)
J.cm(this.c).h(0,document.createElement("br"))
w=P.fc().gcJ().j(0,H.l(this.a))
if(w==null){this.dv(x)
v=c}else{u=P.c2(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.dz(a,b,!1)},
dv:function(a){var z,y,x,w,v
z=P.fc()
y=P.k
x=P.ie(z.gcJ(),y,y)
x.m(0,this.a,H.l(a))
w=z.el(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lz([],[]).cQ(""),"",v)}},
jz:{"^":"p:49;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isae")
z=this.a
y=J.cm(z.c)
y.J(y,new V.jy())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dv(this.d)}},
jy:{"^":"p:50;",
$1:function(a){var z
H.e(a,"$isV")
if(!!J.H(a).$isd3){z=a.style
z.border="solid 2px white"}}}}],["","",,X,{"^":"",
h1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.jf("Test 029",!0)
y=W.cZ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.k]
z.hu(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],x))
z.hq(H.d(["bumpMaps"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jH(w,!0,!0,!0,!1)
u=new U.ee()
z=U.ai
u.bj(z)
u.aY(u.gfe(),u.gfC())
u.e=null
u.f=V.b0()
u.r=0
t=v.r
s=new U.kc()
r=U.d0()
r.scR(0,!0)
r.scC(6.283185307179586)
r.scE(0)
r.sab(0,0)
r.scD(100)
r.sV(0)
r.scl(0.5)
s.b=r
r=r.gu()
r.toString
q={func:1,ret:-1,args:[D.o]}
p=H.f(s.gaK(),q)
C.a.h(r.a,p)
r=U.d0()
r.scR(0,!0)
r.scC(6.283185307179586)
r.scE(0)
r.sab(0,0)
r.scD(100)
r.sV(0)
r.scl(0.5)
s.c=r
C.a.h(r.gu().a,p)
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
o=new X.aH(!1,!1,!1)
n=s.d
s.d=o
r=[X.aH]
p=new D.N("modifiers",n,o,s,r)
p.b=!0
s.S(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.N("invertX",p,!1,s,[P.ad])
p.b=!0
s.S(p)}p=s.r
if(p!==!1){s.r=!1
p=new D.N("invertY",p,!1,s,[P.ad])
p.b=!0
s.S(p)}s.b0(t)
u.h(0,s)
t=v.r
s=new U.kb()
p=U.d0()
p.scR(0,!0)
p.scC(6.283185307179586)
p.scE(0)
p.sab(0,0)
p.scD(100)
p.sV(0)
p.scl(0.2)
s.b=p
p=p.gu()
p.toString
m=H.f(s.gaK(),q)
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
o=new X.aH(!0,!1,!1)
n=s.c
s.c=o
p=new D.N("modifiers",n,o,s,r)
p.b=!0
s.S(p)
s.b0(t)
u.h(0,s)
t=v.r
s=new U.kd()
s.c=0.01
s.d=0
s.e=0
o=new X.aH(!1,!1,!1)
s.b=o
r=new D.N("modifiers",null,o,s,r)
r.b=!0
s.S(r)
s.b0(t)
u.h(0,s)
u.h(0,U.e_(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.ez(2000,1.0471975511965976,u,0.1)
k=new X.hi()
k.a=800
k.b=600
k.c=800
k.d=600
k.e=!0
k.y=T.dm(0,null)
k.z=new V.aE(0,0,0,1)
k.Q=!0
k.ch=2000
k.cx=!0
k.cy=V.dh(0,0,1,1)
k.Q=!1
t=new D.N("clearColor",!0,!1,k,[P.ad])
t.b=!0
k.ar(t)
j=E.ea(null,!0,null,"",null,null)
j.sbM(0,F.n4(30,1,15,0.5))
i=new O.ir()
t=O.d_(V.aF)
i.e=t
t.aY(i.gfg(),i.gfh())
t=new O.bd(i,"emission")
t.c=C.c
t.f=new V.a1(0,0,0)
i.f=t
t=new O.bd(i,"ambient")
t.c=C.c
t.f=new V.a1(0,0,0)
i.r=t
t=new O.bd(i,"diffuse")
t.c=C.c
t.f=new V.a1(0,0,0)
i.x=t
t=new O.bd(i,"invDiffuse")
t.c=C.c
t.f=new V.a1(0,0,0)
i.y=t
t=new O.ix(i,"specular")
t.c=C.c
t.f=new V.a1(0,0,0)
t.ch=100
i.z=t
t=new O.iu(i,"bump")
t.c=C.c
i.Q=t
i.ch=null
t=new O.bd(i,"reflect")
t.c=C.c
t.f=new V.a1(0,0,0)
i.cx=t
t=new O.iw(i,"refract")
t.c=C.c
t.f=new V.a1(0,0,0)
t.ch=1
i.cy=t
t=new O.it(i,"alpha")
t.c=C.c
t.f=1
i.db=t
t=new D.i7()
t.bj(D.a3)
t.e=H.d([],[D.ct])
t.f=H.d([],[D.iK])
t.r=H.d([],[D.jm])
t.x=H.d([],[D.jD])
t.y=H.d([],[D.jE])
t.z=H.d([],[D.jF])
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
s.ch=t}s=H.f(i.gbQ(),q)
C.a.h(t.a,s)
i.dy=null
s=i.dx
t=U.e_(V.et(new V.a4(0,0,0),new V.L(0,1,0),new V.L(0,-1,-1)))
h=new V.a1(1,1,1)
r=new D.ct()
r.c=new V.a1(1,1,1)
r.a=new V.L(0,0,1)
n=r.b
r.b=t
t=t.gu()
t.toString
p=H.f(r.geO(),q)
C.a.h(t.a,p)
z=new D.N("mover",n,r.b,r,[z])
z.b=!0
r.aG(z)
if(!r.c.w(0,h)){n=r.c
r.c=h
z=new D.N("color",n,h,r,[V.a1])
z.b=!0
r.aG(z)}s.h(0,r)
z=i.r
z.sam(0,new V.a1(0,0,1))
z=i.x
z.sam(0,new V.a1(0,1,0))
z=i.z
z.sam(0,new V.a1(1,0,0))
z=i.z
if(z.c===C.c){z.c=C.i
z.bO()
z.c4(100)
t=z.a
t.a=null
t.a2(null)}z.c4(10)
z=v.f
t=z.a
g=t.createTexture()
t.bindTexture(34067,g)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
f=new T.eN(0)
f.b=g
f.c=!1
f.d=0
f.e=D.G()
z.aJ(f,g,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aJ(f,g,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aJ(f,g,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aJ(f,g,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aJ(f,g,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aJ(f,g,"../resources/maskonaive/negz.jpg",34074,!1,!1)
e=M.e0(null,null,null)
z=new O.jj()
z.b=1.0471975511965976
n=z.c
z.c=f
t=f.e
s=H.f(z.gbQ(),q)
C.a.h(t.a,s)
t=new D.N("boxTexture",n,z.c,z,[T.eN])
t.b=!0
z.a2(t)
h=new V.a1(1,1,1)
if(!J.R(z.d,h)){n=z.d
z.d=h
t=new D.N("boxColor",n,h,z,[V.a1])
t.b=!0
z.a2(t)}z.e=null
e.saW(z)
e.sbb(0,k)
e.sb1(l)
d=new M.hO()
z=O.d_(E.aP)
d.d=z
z.aY(d.gfj(),d.gfk())
d.e=null
d.f=null
d.r=null
d.x=null
d.sb1(null)
d.sbb(0,null)
d.saW(null)
d.sb1(l)
d.saW(i)
d.sbb(0,k)
d.d.h(0,j)
c=new O.hE()
c.sdE(null)
c.sdD(null)
b=new V.bJ(1,0,0,0,1,0,0,0,1)
if(!J.R(c.d,b)){c.d=b
c.aq()}b=new V.bJ(1,0,0,0,1,0,0,0,1)
if(!J.R(c.e,b)){c.e=b
c.aq()}c.sdC(null)
c.sdE(k.y)
c.sdC(V.eu(0.05,0.05,0.05,1))
a=M.e0(null,null,null)
a.saW(c)
z=M.aJ
t=H.d([e,d,a],[z])
s=new M.ht()
s.bj(z)
s.e=!1
s.f=null
s.aY(s.gfE(),s.gfF())
s.c7(0,t)
z=v.d
if(z!==s){if(z!=null){z=z.gu()
z.toString
t=H.f(v.gcZ(),q)
C.a.W(z.a,t)}v.d=s
z=s.gu()
z.toString
q=H.f(v.gcZ(),q)
C.a.h(z.a,q)
v.eM()}z=new V.jx("bumpMaps",!0,new X.mU(c,v))
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
V.n0(v)},
mU:{"^":"p:14;a,b",
$1:function(a){this.a.sdD(this.b.f.hU(a))}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eh.prototype
return J.eg.prototype}if(typeof a=="string")return J.cc.prototype
if(a==null)return J.ei.prototype
if(typeof a=="boolean")return J.i2.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cN(a)}
J.aN=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cN(a)}
J.ck=function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cN(a)}
J.mJ=function(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.mK=function(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.dH=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.b3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cN(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).w(a,b)}
J.h8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mJ(a).M(a,b)}
J.dM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mK(a).k(a,b)}
J.dN=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).j(a,b)}
J.cR=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fZ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ck(a).m(a,b,c)}
J.h9=function(a,b){return J.dH(a).H(a,b)}
J.ha=function(a,b,c){return J.b3(a).fN(a,b,c)}
J.hb=function(a,b,c,d){return J.b3(a).dA(a,b,c,d)}
J.hc=function(a,b){return J.dH(a).Z(a,b)}
J.cS=function(a,b,c){return J.aN(a).hz(a,b,c)}
J.cT=function(a,b){return J.ck(a).K(a,b)}
J.hd=function(a,b,c,d){return J.ck(a).az(a,b,c,d)}
J.dO=function(a,b){return J.ck(a).J(a,b)}
J.cm=function(a){return J.b3(a).gcj(a)}
J.b6=function(a){return J.H(a).gU(a)}
J.bB=function(a){return J.ck(a).ga3(a)}
J.ax=function(a){return J.aN(a).gl(a)}
J.he=function(a,b){return J.b3(a).ii(a,b)}
J.am=function(a){return J.H(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cY.prototype
C.I=J.q.prototype
C.a=J.bc.prototype
C.J=J.eg.prototype
C.d=J.eh.prototype
C.u=J.ei.prototype
C.h=J.cb.prototype
C.b=J.cc.prototype
C.Q=J.cd.prototype
C.W=H.dg.prototype
C.X=W.iE.prototype
C.A=J.iJ.prototype
C.q=P.di.prototype
C.r=J.ci.prototype
C.B=W.bV.prototype
C.C=W.kz.prototype
C.E=new P.hk(!1)
C.D=new P.hj(C.E)
C.F=new P.iH()
C.G=new P.kl()
C.j=new P.ll()
C.c=new A.cr(0,"ColorSourceType.None")
C.i=new A.cr(1,"ColorSourceType.Solid")
C.e=new A.cr(2,"ColorSourceType.Texture2D")
C.f=new A.cr(3,"ColorSourceType.TextureCube")
C.t=new P.b8(0)
C.H=new P.b8(5e6)
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
C.x=H.d(I.al([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.al([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.d(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.T=H.d(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.y=H.d(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.U=H.d(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.z=H.d(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.d(I.al([]),[P.k])
C.V=new H.hx(0,{},C.R,[P.k,P.k])
C.k=new P.ke(!1)
$.aD=0
$.bC=null
$.dS=null
$.dA=!1
$.fX=null
$.fR=null
$.h4=null
$.cM=null
$.cP=null
$.dI=null
$.bt=null
$.c_=null
$.c0=null
$.dB=!1
$.U=C.j
$.e6=null
$.e5=null
$.e4=null
$.e3=null
$.r=V.iy()
$.hG="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.hF="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.jl="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jk="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eA=null
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
I.$lazy(y,x,w)}})(["e2","$get$e2",function(){return H.fW("_$dart_dartClosure")},"d7","$get$d7",function(){return H.fW("_$dart_js")},"eU","$get$eU",function(){return H.aK(H.cE({
toString:function(){return"$receiver$"}}))},"eV","$get$eV",function(){return H.aK(H.cE({$method$:null,
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aK(H.cE(null))},"eX","$get$eX",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aK(H.cE(void 0))},"f1","$get$f1",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aK(H.f_(null))},"eY","$get$eY",function(){return H.aK(function(){try{null.$method$}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aK(H.f_(void 0))},"f2","$get$f2",function(){return H.aK(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dv","$get$dv",function(){return P.kA()},"c1","$get$c1",function(){return[]},"ff","$get$ff",function(){return P.ki()},"fl","$get$fl",function(){return H.iC(H.bs(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fH","$get$fH",function(){return P.j_("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fN","$get$fN",function(){return P.mj()},"e1","$get$e1",function(){return{}},"fi","$get$fi",function(){return Z.au(0)},"fg","$get$fg",function(){return Z.au(511)},"ak","$get$ak",function(){return Z.au(1)},"aT","$get$aT",function(){return Z.au(2)},"aS","$get$aS",function(){return Z.au(4)},"aB","$get$aB",function(){return Z.au(8)},"aU","$get$aU",function(){return Z.au(16)},"bT","$get$bT",function(){return Z.au(32)},"bU","$get$bU",function(){return Z.au(64)},"fh","$get$fh",function(){return Z.au(96)},"bq","$get$bq",function(){return Z.au(128)},"aR","$get$aR",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aP]]},{func:1,ret:P.F,args:[F.aq]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[D.o]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.F,args:[W.a9]},{func:1,ret:P.F,args:[P.k]},{func:1,ret:P.z},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:-1,args:[P.m,[P.j,M.aJ]]},{func:1,ret:-1,args:[P.m,[P.j,V.aF]]},{func:1,ret:P.k,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.j,U.ai]]},{func:1,ret:-1,args:[P.m,[P.j,D.a3]]},{func:1,ret:P.F,args:[,]},{func:1,args:[P.k]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,args:[,P.k]},{func:1,ret:[P.aV,,],args:[,]},{func:1,ret:P.F,args:[P.X]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:W.V,args:[W.M]},{func:1,ret:P.ad,args:[P.z,P.z]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.ad,args:[[P.j,D.a3]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:[P.I,P.k,P.k],args:[[P.I,P.k,P.k],P.k]},{func:1,ret:P.P,args:[P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:V.a4,args:[P.z]},{func:1,ret:P.F,args:[F.at,P.z,P.z]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:P.F,args:[P.bn]},{func:1,ret:P.F,args:[W.ae]},{func:1,ret:P.F,args:[W.V]},{func:1,ret:P.F,args:[P.k,,]},{func:1,ret:P.ad,args:[W.M]}]
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
if(x==y)H.n3(d||a)
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
Isolate.dF=a.dF
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
if(typeof dartMainRunner==="function")dartMainRunner(X.h1,[])
else X.h1([])})})()
//# sourceMappingURL=test.dart.js.map
