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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dl(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dm=function(){}
var dart=[["","",,H,{"^":"",m6:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cu:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dq==null){H.kY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eJ("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.l2(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gX:function(a){return H.bt(a)},
i:["dV",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ha:{"^":"m;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isa6:1},
dW:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isI:1},
cP:{"^":"m;",
gX:function(a){return 0},
i:["dW",function(a){return String(a)}]},
hL:{"^":"cP;"},
dc:{"^":"cP;"},
bS:{"^":"cP;",
i:function(a){var z=a[$.$get$dI()]
if(z==null)return this.dW(a)
return"JavaScript function for "+H.j(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscJ:1},
aV:{"^":"m;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.af("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.r(P.af("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
aQ:function(a,b){var z,y
H.v(b,"$isd",[H.y(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.af("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bd(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.U(z,y,H.j(a[y]))
return z.join(b)},
h2:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bx:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ak(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ak(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gcg:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h8())},
aT:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cL(a,"[","]")},
gZ:function(a){return new J.ag(a,a.length,0,[H.y(a,0)])},
gX:function(a){return H.bt(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c3(b,"newLength",null))
if(b<0)throw H.h(P.ak(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.Z(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b>=a.length||b<0)throw H.h(H.aQ(a,b))
a[b]=c},
$isd:1,
$isf:1,
q:{
h9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ak(a,0,4294967295,"length",null))
return J.dT(new Array(a),b)},
dT:function(a,b){return J.bm(H.c(a,[b]))},
bm:function(a){H.bM(a)
a.fixed$length=Array
return a}}},
m5:{"^":"aV;$ti"},
ag:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cf:{"^":"m;",
hy:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.af(""+a+".toInt()"))},
cd:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.af(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.af(""+a+".round()"))},
dM:function(a,b){var z,y
if(b>20)throw H.h(P.ak(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
dS:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.af("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.h(H.aP(b))
return a<b},
$isw:1,
$isT:1},
dV:{"^":"cf;",$isC:1},
dU:{"^":"cf;"},
cN:{"^":"m;",
c2:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b<0)throw H.h(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
b7:function(a,b){if(b>=a.length)throw H.h(H.aQ(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.U(b)
if(typeof b!=="string")throw H.h(P.c3(b,null,null))
return a+b},
by:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cj(b,null,null))
if(b>c)throw H.h(P.cj(b,null,null))
if(c>a.length)throw H.h(P.cj(c,null,null))
return a.substring(b,c)},
cz:function(a,b){return this.by(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hf:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a8:function(a,b){return this.hf(a,b," ")},
fN:function(a,b,c){if(c>a.length)throw H.h(P.ak(c,0,a.length,null,null))
return H.fp(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isea:1,
$iso:1}}],["","",,H,{"^":"",
h8:function(){return new P.im("No element")},
a_:{"^":"iX;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.c2(this.a,b)},
$aseK:function(){return[P.C]},
$ast:function(){return[P.C]},
$asd:function(){return[P.C]},
$asf:function(){return[P.C]}},
fU:{"^":"d;"},
e0:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.c0(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bd(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hq:{"^":"d;a,b,$ti",
gZ:function(a){return new H.hr(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dw(this.a,b))},
$asd:function(a,b){return[b]}},
hr:{"^":"cM;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascM:function(a,b){return[b]}},
jc:{"^":"d;a,b,$ti",
gZ:function(a){return new H.jd(J.bN(this.a),this.b,this.$ti)}},
jd:{"^":"cM;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cc:{"^":"a;$ti"},
eK:{"^":"a;$ti"},
iX:{"^":"cg+eK;"}}],["","",,H,{"^":"",
kT:function(a){return init.types[H.Z(a)]},
l0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isD},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.h(H.aP(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isdc){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b7(w,0)===36)w=C.h.cz(w,1)
r=H.dr(H.bM(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ec:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hV:function(a){var z,y,x,w
z=H.c([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aP(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.ba(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aP(w))}return H.ec(z)},
ed:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aP(x))
if(x<0)throw H.h(H.aP(x))
if(x>65535)return H.hV(a)}return H.ec(a)},
hU:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.ba(z,10))>>>0,56320|z&1023)}throw H.h(P.ak(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hT:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hR:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hN:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hO:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hQ:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hS:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hP:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aP(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.h(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.Z(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cj(b,"index",null)},
kP:function(a,b,c){if(a>c)return new P.ci(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ci(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aP:function(a){return new P.aB(!0,a,null,null)},
kK:function(a){if(typeof a!=="number")throw H.h(H.aP(a))
return a},
h:function(a){var z
if(a==null)a=new P.e9()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fr})
z.name=""}else z.toString=H.fr
return z},
fr:function(){return J.a7(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bd(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ld(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e8(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$es()
u=$.$get$et()
t=$.$get$eu()
s=$.$get$ev()
r=$.$get$ez()
q=$.$get$eA()
p=$.$get$ex()
$.$get$ew()
o=$.$get$eC()
n=$.$get$eB()
m=v.a7(y)
if(m!=null)return z.$1(H.cQ(H.U(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.U(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e8(H.U(y),m))}}return z.$1(new H.iW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eh()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eh()
return a},
b9:function(a){var z
if(a==null)return new H.f1(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f1(a)},
kR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.U(0,a[y],a[x])}return b},
l_:function(a,b,c,d,e,f){H.k(a,"$iscJ")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l_)
a.$identity=z
return z},
fH:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hY(z).r}else x=d
w=e?Object.create(new H.ip().constructor.prototype):Object.create(new H.cz(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.as
if(typeof u!=="number")return u.F()
$.as=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dF(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dA:H.cA
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dF(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fE:function(a,b,c,d){var z=H.cA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dF:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fG(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fE(y,!w,z,b)
if(y===0){w=$.as
if(typeof w!=="number")return w.F()
$.as=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.c4("self")
$.bc=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.as
if(typeof w!=="number")return w.F()
$.as=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.c4("self")
$.bc=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fF:function(a,b,c,d){var z,y
z=H.cA
y=H.dA
switch(b?-1:a){case 0:throw H.h(H.i6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fG:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.c4("self")
$.bc=z}y=$.dz
if(y==null){y=H.c4("receiver")
$.dz=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fF(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.as
if(typeof y!=="number")return y.F()
$.as=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.as
if(typeof y!=="number")return y.F()
$.as=y+1
return new Function(z+y+"}")()},
dl:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.bM(b))
H.Z(c)
y=!!J.J(d).$isf?J.bm(d):d
return H.fH(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ay(a,"String"))},
l5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ay(a,"num"))},
ff:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ay(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ay(a,"int"))},
fn:function(a,b){throw H.h(H.ay(a,H.U(b).substring(3)))},
l7:function(a,b){var z=J.c0(b)
throw H.h(H.fD(a,z.by(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fn(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l7(a,b)},
bM:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.ay(a,"List"))},
l1:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fn(a,b)},
fg:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
c_:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fg(J.J(a))
if(z==null)return!1
y=H.fj(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.dh)return a
$.dh=!0
try{if(H.c_(a,b))return a
z=H.c2(b)
y=H.ay(a,z)
throw H.h(y)}finally{$.dh=!1}},
dn:function(a,b){if(a!=null&&!H.dk(a,b))H.r(H.ay(a,H.c2(b)))
return a},
fa:function(a){var z
if(a instanceof H.u){z=H.fg(J.J(a))
if(z!=null)return H.c2(z)
return"Closure"}return H.aY(a)},
lc:function(a){throw H.h(new P.fM(H.U(a)))},
fh:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
n2:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aR(b))},
bL:function(a,b,c,d){var z
H.U(c)
H.Z(d)
z=H.ba(a["$as"+H.j(c)],H.aR(b))
return z==null?null:z[d]},
an:function(a,b,c){var z
H.U(b)
H.Z(c)
z=H.ba(a["$as"+H.j(b)],H.aR(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Z(b)
z=H.aR(a)
return z==null?null:z[b]},
c2:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.v(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dr(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kA(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.v(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.F(t,b[r])
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
dr:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.bX("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}v="<"+z.i(0)+">"
return v},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b6:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aR(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fd(H.ba(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.U(b)
H.bM(c)
H.U(d)
if(a==null)return a
z=H.b6(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dr(c,0,null)
throw H.h(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fd:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ao(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ao(a[y],b,c[y],d))return!1
return!0},
n0:function(a,b,c){return a.apply(b,H.ba(J.J(b)["$as"+H.j(c)],H.aR(b)))},
fk:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fk(z)}return!1},
dk:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fk(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dk(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c_(a,b)}y=J.J(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ao(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dk(a,b))throw H.h(H.ay(a,H.c2(b)))
return a},
ao:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fj(a,b,c,d)
if('func' in a)return c.builtin$cls==="cJ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ao("type" in a?a.type:null,b,x,d)
else if(H.ao(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.ba(w,z?a.slice(1):null)
return H.ao(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c2(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fd(H.ba(r,z),b,u,d)},
fj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ao(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ao(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ao(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l4(m,b,l,d)},
l4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ao(c[w],d,a[w],b))return!1}return!0},
n1:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
l2:function(a){var z,y,x,w,v,u
z=H.U($.fi.$1(a))
y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fc.$2(a,z))
if(z!=null){y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cw(x)
$.ct[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cv[z]=x
return x}if(v==="-"){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fm(a,x)
if(v==="*")throw H.h(P.eJ(z))
if(init.leafTags[z]===true){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fm(a,x)},
fm:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dt(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw:function(a){return J.dt(a,!1,null,!!a.$isD)},
l3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cw(z)
else return J.dt(z,c,null,null)},
kY:function(){if(!0===$.dq)return
$.dq=!0
H.kZ()},
kZ:function(){var z,y,x,w,v,u,t,s
$.ct=Object.create(null)
$.cv=Object.create(null)
H.kU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fo.$1(v)
if(u!=null){t=H.l3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kU:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b5(C.A,H.b5(C.F,H.b5(C.n,H.b5(C.n,H.b5(C.E,H.b5(C.B,H.b5(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fi=new H.kV(v)
$.fc=new H.kW(u)
$.fo=new H.kX(t)},
b5:function(a,b){return a(b)||b},
fp:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fq:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hX:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iK:{"^":"a;a,b,c,d,e,f",
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
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ey:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hI:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e8:function(a,b){return new H.hI(a,b==null?null:b.method)}}},
hd:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hd(a,y,z?null:b.receiver)}}},
iW:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ld:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f1:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaq:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gdO:function(){return this},
$iscJ:1,
gdO:function(){return this}},
el:{"^":"u;"},
ip:{"^":"el;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cz:{"^":"el;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cz))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aA(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
q:{
cA:function(a){return a.a},
dA:function(a){return a.c},
c4:function(a){var z,y,x,w,v
z=new H.cz("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iL:{"^":"Y;a",
i:function(a){return this.a},
q:{
ay:function(a,b){return new H.iL("TypeError: "+H.j(P.cb(a))+": type '"+H.fa(a)+"' is not a subtype of type '"+b+"'")}}},
fC:{"^":"Y;a",
i:function(a){return this.a},
q:{
fD:function(a,b){return new H.fC("CastError: "+H.j(P.cb(a))+": type '"+H.fa(a)+"' is not a subtype of type '"+b+"'")}}},
i5:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
i6:function(a){return new H.i5(a)}}},
aW:{"^":"ho;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gas:function(a){return new H.e_(this,[H.y(this,0)])},
d4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cM(y,b)}else return this.h0(b)},
h0:function(a){var z=this.d
if(z==null)return!1
return this.ce(this.bH(z,J.aA(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b8(w,b)
x=y==null?null:y.b
return x}else return this.h1(b)},
h1:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bH(z,J.aA(a)&0x3ffffff)
x=this.ce(y,a)
if(x<0)return
return y[x].b},
U:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bN()
this.b=z}this.cF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bN()
this.c=y}this.cF(y,b,c)}else{x=this.d
if(x==null){x=this.bN()
this.d=x}w=J.aA(b)&0x3ffffff
v=this.bH(x,w)
if(v==null)this.bT(x,w,[this.bO(b,c)])
else{u=this.ce(v,b)
if(u>=0)v[u].b=c
else v.push(this.bO(b,c))}}},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bd(this))
z=z.c}},
cF:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.b8(a,b)
if(z==null)this.bT(a,b,this.bO(b,c))
else z.b=c},
es:function(){this.r=this.r+1&67108863},
bO:function(a,b){var z,y
z=new H.hg(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.es()
return z},
ce:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.e2(this)},
b8:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
em:function(a,b){delete a[b]},
cM:function(a,b){return this.b8(a,b)!=null},
bN:function(){var z=Object.create(null)
this.bT(z,"<non-identifier-key>",z)
this.em(z,"<non-identifier-key>")
return z},
$isdZ:1},
hg:{"^":"a;a,b,0c,0d"},
e_:{"^":"fU;a,$ti",
gk:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kV:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kW:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kX:{"^":"u:27;a",
$1:function(a){return this.a(H.U(a))}},
hb:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isea:1,
q:{
hc:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h2("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kQ:function(a){return J.dT(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){return a},
aO:function(a,b,c){H.bM(b)
if(a>>>0!==a||a>=c)throw H.h(H.aQ(b,a))},
kz:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kP(a,b,c))
return b},
hF:{"^":"m;",$ismK:1,"%":"DataView;ArrayBufferView;cX|eW|eX|hE|eY|eZ|aN"},
cX:{"^":"hF;",
gk:function(a){return a.length},
$isD:1,
$asD:I.dm},
hE:{"^":"eX;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
$ascc:function(){return[P.w]},
$ast:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aN:{"^":"eZ;",
$ascc:function(){return[P.C]},
$ast:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]}},
mg:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mh:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mi:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mj:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mk:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ml:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hG:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
bx:function(a,b,c){return new Uint8Array(a.subarray(b,H.kz(b,c,a.length)))},
"%":";Uint8Array"},
eW:{"^":"cX+t;"},
eX:{"^":"eW+cc;"},
eY:{"^":"cX+t;"},
eZ:{"^":"eY+cc;"}}],["","",,P,{"^":"",
jf:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kH()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.jh(z),1)).observe(y,{childList:true})
return new P.jg(z,y,x)}else if(self.setImmediate!=null)return P.kI()
return P.kJ()},
mQ:[function(a){self.scheduleImmediate(H.b7(new P.ji(H.b(a,{func:1,ret:-1})),0))},"$1","kH",4,0,11],
mR:[function(a){self.setImmediate(H.b7(new P.jj(H.b(a,{func:1,ret:-1})),0))},"$1","kI",4,0,11],
mS:[function(a){P.d8(C.m,H.b(a,{func:1,ret:-1}))},"$1","kJ",4,0,11],
d8:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.a0(a.a,1000)
return P.kd(z<0?0:z,b)},
en:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b_]})
z=C.f.a0(a.a,1000)
return P.ke(z<0?0:z,b)},
kD:function(a,b){if(H.c_(a,{func:1,args:[P.a,P.aq]}))return b.ho(a,null,P.a,P.aq)
if(H.c_(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kC:function(){var z,y
for(;z=$.b4,z!=null;){$.bJ=null
y=z.b
$.b4=y
if(y==null)$.bI=null
z.a.$0()}},
n_:[function(){$.di=!0
try{P.kC()}finally{$.bJ=null
$.di=!1
if($.b4!=null)$.$get$de().$1(P.fe())}},"$0","fe",0,0,3],
f9:function(a){var z=new P.eQ(H.b(a,{func:1,ret:-1}))
if($.b4==null){$.bI=z
$.b4=z
if(!$.di)$.$get$de().$1(P.fe())}else{$.bI.b=z
$.bI=z}},
kG:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.f9(a)
$.bJ=$.bI
return}y=new P.eQ(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b4=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
l8:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.i===y){P.cs(null,null,C.i,a)
return}y.toString
P.cs(null,null,y,H.b(y.bY(a),z))},
iG:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.d8(a,b)}return P.d8(a,H.b(y.bY(b),z))},
iH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.en(a,b)}x=y.d1(b,P.b_)
$.N.toString
return P.en(a,H.b(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.kG(new P.kE(z,e))},
f7:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f8:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kF:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cs:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bY(d):c.fL(d,-1)
P.f9(d)},
jh:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jg:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ji:{"^":"u:2;a",
$0:function(){this.a.$0()}},
jj:{"^":"u:2;a",
$0:function(){this.a.$0()}},
f4:{"^":"a;a,0b,c",
e8:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.kg(this,b),0),a)
else throw H.h(P.af("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.kf(this,a,Date.now(),b),0),a)
else throw H.h(P.af("Periodic timer."))},
$isb_:1,
q:{
kd:function(a,b){var z=new P.f4(!0,0)
z.e8(a,b)
return z},
ke:function(a,b){var z=new P.f4(!1,0)
z.e9(a,b)
return z}}},
kg:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kf:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dY(w,x)}z.c=y
this.d.$1(z)}},
b3:{"^":"a;0a,b,c,d,e,$ti",
h7:function(a){if(this.c!==6)return!0
return this.b.b.cp(H.b(this.d,{func:1,ret:P.a6,args:[P.a]}),a.a,P.a6,P.a)},
fZ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c_(z,{func:1,args:[P.a,P.aq]}))return H.dn(w.hs(z,a.a,a.b,null,y,P.aq),x)
else return H.dn(w.cp(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cW:a<,b,0f3:c<,$ti",
dL:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kD(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.N,[c])
w=b==null?1:3
this.cG(new P.b3(x,w,a,b,[z,c]))
return x},
hx:function(a,b){return this.dL(a,null,b)},
cG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb3")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaJ")
z=y.a
if(z<4){y.cG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.b(new P.jx(this,a),{func:1,ret:-1}))}},
cS:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb3")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaJ")
y=u.a
if(y<4){u.cS(a)
return}this.a=y
this.c=u.c}z.a=this.b9(a)
y=this.b
y.toString
P.cs(null,null,y,H.b(new P.jC(z,this),{func:1,ret:-1}))}},
bR:function(){var z=H.k(this.c,"$isb3")
this.c=null
return this.b9(z)},
b9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.y(this,0)
H.dn(a,{futureOr:1,type:z})
y=this.$ti
x=H.b6(a,"$isbi",y,"$asbi")
if(x){z=H.b6(a,"$isaJ",y,null)
if(z)P.eS(a,this)
else P.jy(a,this)}else{w=this.bR()
H.A(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bD:[function(a,b){var z
H.k(b,"$isaq")
z=this.bR()
this.a=8
this.c=new P.ah(a,b)
P.bE(this,z)},function(a){return this.bD(a,null)},"hG","$2","$1","gei",4,2,30],
$isbi:1,
q:{
jy:function(a,b){var z,y,x
b.a=1
try{a.dL(new P.jz(b),new P.jA(b),null)}catch(x){z=H.aT(x)
y=H.b9(x)
P.l8(new P.jB(b,z,y))}},
eS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaJ")
if(z>=4){y=b.bR()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.k(b.c,"$isb3")
b.a=2
b.c=a
a.cS(y)}},
bE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isah")
y=y.b
u=v.a
t=v.b
y.toString
P.cr(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.k(r,"$isah")
y=y.b
u=r.a
t=r.b
y.toString
P.cr(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jF(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jE(x,b,r).$0()}else if((y&2)!==0)new P.jD(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbi){if(y.a>=4){n=H.k(t.c,"$isb3")
t.c=null
b=t.b9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eS(y,t)
return}}m=b.b
n=H.k(m.c,"$isb3")
m.c=null
b=m.b9(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isah")
m.a=8
m.c=u}z.a=m
y=m}}}},
jx:{"^":"u:2;a,b",
$0:function(){P.bE(this.a,this.b)}},
jC:{"^":"u:2;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
jz:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
jA:{"^":"u:34;a",
$2:function(a,b){this.a.bD(a,H.k(b,"$isaq"))},
$1:function(a){return this.$2(a,null)}},
jB:{"^":"u:2;a,b,c",
$0:function(){this.a.bD(this.b,this.c)}},
jF:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dK(H.b(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.b9(v)
if(this.d){w=H.k(this.a.a.c,"$isah").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isah")
else u.b=new P.ah(y,x)
u.a=!0
return}if(!!J.J(z).$isbi){if(z instanceof P.aJ&&z.gcW()>=4){if(z.gcW()===8){w=this.b
w.b=H.k(z.gf3(),"$isah")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hx(new P.jG(t),null)
w.a=!1}}},
jG:{"^":"u:36;a",
$1:function(a){return this.a}},
jE:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cp(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.b9(t)
x=this.a
x.b=new P.ah(z,y)
x.a=!0}}},
jD:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isah")
w=this.c
if(w.h7(z)&&w.e!=null){v=this.b
v.b=w.fZ(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.b9(u)
w=H.k(this.a.a.c,"$isah")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ah(y,x)
s.a=!0}}},
eQ:{"^":"a;a,0b"},
d4:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aJ(0,$.N,[P.C])
z.a=0
this.h5(new P.it(z,this),!0,new P.iu(z,y),y.gei())
return y}},
it:{"^":"u;a,b",
$1:function(a){H.A(a,H.an(this.b,"d4",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.an(this.b,"d4",0)]}}},
iu:{"^":"u:2;a,b",
$0:function(){this.b.cJ(this.a.a)}},
ej:{"^":"a;$ti"},
is:{"^":"a;"},
b_:{"^":"a;"},
ah:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
kn:{"^":"a;",$ismP:1},
kE:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e9()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
k_:{"^":"kn;",
ht:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.N){a.$0()
return}P.f7(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cr(null,null,this,z,H.k(y,"$isaq"))}},
hu:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.i===$.N){a.$1(b)
return}P.f8(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cr(null,null,this,z,H.k(y,"$isaq"))}},
fL:function(a,b){return new P.k1(this,H.b(a,{func:1,ret:b}),b)},
bY:function(a){return new P.k0(this,H.b(a,{func:1,ret:-1}))},
d1:function(a,b){return new P.k2(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dK:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.i)return a.$0()
return P.f7(null,null,this,a,b)},
cp:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.N===C.i)return a.$1(b)
return P.f8(null,null,this,a,b,c,d)},
hs:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.N===C.i)return a.$2(b,c)
return P.kF(null,null,this,a,b,c,d,e,f)},
ho:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
k1:{"^":"u;a,b,c",
$0:function(){return this.a.dK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k0:{"^":"u:3;a,b",
$0:function(){return this.a.ht(this.b)}},
k2:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hu(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hj:function(a,b,c){H.bM(a)
return H.v(H.kR(a,new H.aW(0,0,[b,c])),"$isdZ",[b,c],"$asdZ")},
hi:function(a,b){return new H.aW(0,0,[a,b])},
hk:function(a,b,c,d){return new P.jM(0,0,[d])},
h7:function(a,b,c){var z,y
if(P.dj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.kB(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ek(b,H.l1(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cL:function(a,b,c){var z,y,x
if(P.dj(a))return b+"..."+c
z=new P.bX(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.ek(x.gaz(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
dj:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.D();t=s,s=r){r=z.gP(z);++x
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
e2:function(a){var z,y,x
z={}
if(P.dj(a))return"{...}"
y=new P.bX("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fv(a,new P.hp(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
jM:{"^":"jH;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.eV(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dg()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dg()
this.c=y}return this.cH(y,b)}else return this.eb(0,b)},
eb:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dg()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.bC(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bC(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cT(this.c,b)
else return this.eZ(0,b)},
eZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ep(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.cY(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.A(b,H.y(this,0))
if(H.k(a[b],"$isdf")!=null)return!1
a[b]=this.bC(b)
return!0},
cT:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isdf")
if(z==null)return!1
this.cY(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
bC:function(a){var z,y
z=new P.df(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
cY:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.aA(a)&0x3ffffff},
ep:function(a,b){return a[this.cK(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
q:{
dg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
df:{"^":"a;a,0b,0c"},
jN:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
eV:function(a,b,c){var z=new P.jN(a,b,[c])
z.c=a.e
return z}}},
jH:{"^":"i7;"},
cg:{"^":"jO;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gZ:function(a){return new H.e0(a,this.gk(a),0,[H.bL(this,a,"t",0)])},
E:function(a,b){return this.j(a,b)},
hA:function(a,b){var z,y,x
z=H.c([],[H.bL(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.U(z,y,this.j(a,y));++y}return z},
hz:function(a){return this.hA(a,!0)},
i:function(a){return P.cL(a,"[","]")}},
ho:{"^":"ab;"},
hp:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bL(this,a,"ab",0),H.bL(this,a,"ab",1)]})
for(z=J.bN(this.gas(a));z.D();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.bb(this.gas(a))},
i:function(a){return P.e2(a)},
$isa4:1},
i9:{"^":"a;$ti",
i:function(a){return P.cL(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dx("index"))
if(b<0)H.r(P.ak(b,0,null,"index",null))
for(z=P.eV(this,this.r,H.y(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
i7:{"^":"i9;"},
jO:{"^":"a+t;"}}],["","",,P,{"^":"",cE:{"^":"a;$ti"},dG:{"^":"is;$ti"},fW:{"^":"cE;",
$ascE:function(){return[P.o,[P.f,P.C]]}},j2:{"^":"fW;a"},j3:{"^":"dG;",
fP:function(a,b,c){var z,y,x,w
z=a.length
P.ee(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.km(0,0,x)
if(w.eo(a,b,z)!==z)w.cZ(C.h.c2(a,z-1),0)
return C.I.bx(x,0,w.b)},
fO:function(a){return this.fP(a,0,null)},
$asdG:function(){return[P.o,[P.f,P.C]]}},km:{"^":"a;a,b,c",
cZ:function(a,b){var z,y,x,w,v
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
eo:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.c2(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b7(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cZ(w,C.h.b7(a,u)))x=u}else if(w<=2047){v=this.b
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
fY:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aY(a)+"'"},
hl:function(a,b,c,d){var z,y
H.A(b,d)
z=J.h9(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.U(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
hm:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.D();)C.a.h(y,H.A(x.gP(x),c))
if(b)return y
return H.v(J.bm(y),"$isf",z,"$asf")},
d5:function(a,b,c){var z,y
z=P.C
H.v(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.v(a,"$isaV",[z],"$asaV")
y=a.length
c=P.ee(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.ed(z?C.a.bx(a,b,c):a)}return P.iv(a,b,c)},
iv:function(a,b,c){var z,y,x
H.v(a,"$isd",[P.C],"$asd")
z=J.bN(a)
for(y=0;y<b;++y)if(!z.D())throw H.h(P.ak(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gP(z))
return H.ed(x)},
hZ:function(a,b,c){return new H.hb(a,H.hc(a,!1,!0,!1))},
kl:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.C],"$asf")
if(c===C.q){z=$.$get$f6().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fO(H.A(b,H.an(c,"cE",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hU(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fY(a)},
q:function(a){return new P.eR(a)},
dv:function(a){H.l6(a)},
a6:{"^":"a;"},
"+bool":0,
ap:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.f.ba(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fN(H.hT(this))
y=P.bP(H.hR(this))
x=P.bP(H.hN(this))
w=P.bP(H.hO(this))
v=P.bP(H.hQ(this))
u=P.bP(H.hS(this))
t=P.fO(H.hP(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fN:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bP:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"T;"},
"+double":0,
bf:{"^":"a;a",
a9:function(a,b){return C.f.a9(this.a,H.k(b,"$isbf").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fT()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.f.a0(y,6e7)%60)
w=z.$1(C.f.a0(y,1e6)%60)
v=new P.fS().$1(y%1e6)
return""+C.f.a0(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dP:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fS:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fT:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
e9:{"^":"Y;",
i:function(a){return"Throw of null."}},
aB:{"^":"Y;a,b,c,d",
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbF()+y+x
if(!this.a)return w
v=this.gbE()
u=P.cb(this.b)
return w+v+": "+H.j(u)},
q:{
fx:function(a){return new P.aB(!1,null,null,a)},
c3:function(a,b,c){return new P.aB(!0,a,b,c)},
dx:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
ci:{"^":"aB;e,f,a,b,c,d",
gbF:function(){return"RangeError"},
gbE:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cj:function(a,b,c){return new P.ci(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.ci(b,c,!0,a,d,"Invalid value")},
ee:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ak(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ak(b,a,c,"end",f))
return b}return c}}},
h6:{"^":"aB;e,k:f>,a,b,c,d",
gbF:function(){return"RangeError"},
gbE:function(){if(J.fs(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bb(b))
return new P.h6(b,z,!0,a,c,"Index out of range")}}},
iY:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
af:function(a){return new P.iY(a)}}},
iV:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eJ:function(a){return new P.iV(a)}}},
im:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fJ:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cb(z))+"."},
q:{
bd:function(a){return new P.fJ(a)}}},
hJ:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
eh:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fM:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eR:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h2:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.by(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"T;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gZ(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dx("index"))
if(b<0)H.r(P.ak(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.D();){x=z.gP(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h7(this,"(",")")}},
cM:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a4:{"^":"a;$ti"},
I:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.i(this)}},
aq:{"^":"a;"},
o:{"^":"a;",$isea:1},
"+String":0,
bX:{"^":"a;az:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
ek:function(a,b,c){var z=J.bN(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gP(z))
while(z.D())}else{a+=H.j(z.gP(z))
for(;z.D();)a=a+c+H.j(z.gP(z))}return a}}}}],["","",,W,{"^":"",
cD:function(a,b){var z=document.createElement("canvas")
return z},
fV:function(a){H.k(a,"$isa3")
return"wheel"},
cp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eU:function(a,b,c,d){var z,y
z=W.cp(W.cp(W.cp(W.cp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fb:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.i)return a
return z.d1(a,b)},
bl:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lf:{"^":"d1;0p:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
lg:{"^":"m;0k:length=","%":"AccessibleNodeList"},
lh:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
li:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fB:{"^":"m;","%":";Blob"},
cC:{"^":"bl;",
bw:function(a,b,c){if(c!=null)return a.getContext(b,P.kL(c,null))
return a.getContext(b)},
dQ:function(a,b){return this.bw(a,b,null)},
$iscC:1,
"%":"HTMLCanvasElement"},
dD:{"^":"m;",$isdD:1,"%":"CanvasRenderingContext2D"},
lo:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lq:{"^":"c8;0k:length=","%":"CSSPerspective"},
lr:{"^":"cH;0p:x=,0t:y=","%":"CSSPositionValue"},
ls:{"^":"c8;0p:x=,0t:y=","%":"CSSRotation"},
be:{"^":"m;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lt:{"^":"c8;0p:x=,0t:y=","%":"CSSScale"},
lu:{"^":"jn;0k:length=",
dR:function(a,b){var z=a.getPropertyValue(this.ef(a,b))
return z==null?"":z},
ef:function(a,b){var z,y
z=$.$get$dH()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fP()+b
if(z in a)return z
return b},
gbZ:function(a){return a.bottom},
gaj:function(a){return a.height},
gaL:function(a){return a.left},
gaZ:function(a){return a.right},
gb4:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fL:{"^":"a;",
gaL:function(a){return this.dR(a,"left")}},
cH:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c8:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lv:{"^":"cH;0k:length=","%":"CSSTransformValue"},
lw:{"^":"c8;0p:x=,0t:y=","%":"CSSTranslation"},
lx:{"^":"cH;0k:length=","%":"CSSUnparsedValue"},
ly:{"^":"m;0k:length=","%":"DataTransferItemList"},
lz:{"^":"m;0p:x=,0t:y=","%":"DeviceAcceleration"},
lA:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lB:{"^":"fQ;",
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
fQ:{"^":"m;",
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
lC:{"^":"jp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.aa,P.T]]},
$ast:function(){return[[P.aa,P.T]]},
$isd:1,
$asd:function(){return[[P.aa,P.T]]},
$isf:1,
$asf:function(){return[[P.aa,P.T]]},
$asz:function(){return[[P.aa,P.T]]},
"%":"ClientRectList|DOMRectList"},
fR:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gak(a))+" x "+H.j(this.gaj(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=J.c1(b)
return a.left===z.gaL(b)&&a.top===z.gb4(b)&&this.gak(a)===z.gak(b)&&this.gaj(a)===z.gaj(b)},
gX:function(a){return W.eU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gbZ:function(a){return a.bottom},
gaj:function(a){return a.height},
gaL:function(a){return a.left},
gaZ:function(a){return a.right},
gb4:function(a){return a.top},
gak:function(a){return a.width},
gp:function(a){return a.x},
gt:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.T]},
"%":";DOMRectReadOnly"},
lD:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.o]},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asz:function(){return[P.o]},
"%":"DOMStringList"},
lE:{"^":"m;0k:length=","%":"DOMTokenList"},
jm:{"^":"cg;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.hz(this)
return new J.ag(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"K;",
gd3:function(a){return new W.jm(a,a.children)},
gbe:function(a){return P.hW(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a8:{"^":"m;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"m;",
d_:["dU",function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(c!=null)this.ec(a,b,c,!1)}],
ec:function(a,b,c,d){return a.addEventListener(b,H.b7(H.b(c,{func:1,args:[W.a8]}),1),!1)},
$isa3:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f_|f0|f2|f3"},
bh:{"^":"fB;",$isbh:1,"%":"File"},
lX:{"^":"jw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asz:function(){return[W.bh]},
"%":"FileList"},
lY:{"^":"a3;0k:length=","%":"FileWriter"},
m0:{"^":"bl;0k:length=","%":"HTMLFormElement"},
bj:{"^":"m;",$isbj:1,"%":"Gamepad"},
m1:{"^":"d1;0p:x=,0t:y=","%":"Gyroscope"},
m2:{"^":"m;0k:length=","%":"History"},
m3:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cd:{"^":"m;0d6:data=",$iscd:1,"%":"ImageData"},
dS:{"^":"bl;",$isdS:1,"%":"HTMLImageElement"},
bn:{"^":"d9;",$isbn:1,"%":"KeyboardEvent"},
m8:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
m9:{"^":"d1;0p:x=,0t:y=","%":"Magnetometer"},
mb:{"^":"m;0k:length=","%":"MediaList"},
mc:{"^":"a3;",
d_:function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(b==="message")a.start()
this.dU(a,b,c,!1)},
"%":"MessagePort"},
md:{"^":"jP;",
j:function(a,b){return P.aK(a.get(H.U(b)))},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gas:function(a){var z=H.c([],[P.o])
this.M(a,new W.hB(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hB:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
me:{"^":"jQ;",
j:function(a,b){return P.aK(a.get(H.U(b)))},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gas:function(a){var z=H.c([],[P.o])
this.M(a,new W.hC(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hC:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"m;",$isbo:1,"%":"MimeType"},
mf:{"^":"jS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asz:function(){return[W.bo]},
"%":"MimeTypeArray"},
av:{"^":"d9;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jl:{"^":"cg;a",
gZ:function(a){var z=this.a.childNodes
return new W.dQ(z,z.length,-1,[H.bL(C.J,z,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.dV(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hH:{"^":"jU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
br:{"^":"m;0k:length=",$isbr:1,"%":"Plugin"},
mp:{"^":"jY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asz:function(){return[W.br]},
"%":"PluginArray"},
mu:{"^":"k3;",
j:function(a,b){return P.aK(a.get(H.U(b)))},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gas:function(a){var z=H.c([],[P.o])
this.M(a,new W.i4(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"RTCStatsReport"},
i4:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mv:{"^":"bl;0k:length=","%":"HTMLSelectElement"},
d1:{"^":"a3;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a3;",$isbu:1,"%":"SourceBuffer"},
mw:{"^":"f0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asz:function(){return[W.bu]},
"%":"SourceBufferList"},
bv:{"^":"m;",$isbv:1,"%":"SpeechGrammar"},
mx:{"^":"k5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asz:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"m;0k:length=",$isbw:1,"%":"SpeechRecognitionResult"},
mz:{"^":"k8;",
j:function(a,b){return a.getItem(H.U(b))},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gas:function(a){var z=H.c([],[P.o])
this.M(a,new W.ir(z))
return z},
gk:function(a){return a.length},
$asab:function(){return[P.o,P.o]},
$isa4:1,
$asa4:function(){return[P.o,P.o]},
"%":"Storage"},
ir:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"a3;",$isby:1,"%":"TextTrack"},
bz:{"^":"a3;",$isbz:1,"%":"TextTrackCue|VTTCue"},
mE:{"^":"kc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$asz:function(){return[W.bz]},
"%":"TextTrackCueList"},
mF:{"^":"f3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$ast:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asz:function(){return[W.by]},
"%":"TextTrackList"},
mG:{"^":"m;0k:length=","%":"TimeRanges"},
bA:{"^":"m;",$isbA:1,"%":"Touch"},
b0:{"^":"d9;",$isb0:1,"%":"TouchEvent"},
mH:{"^":"ki;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asz:function(){return[W.bA]},
"%":"TouchList"},
mI:{"^":"m;0k:length=","%":"TrackDefaultList"},
d9:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mL:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mN:{"^":"m;0p:x=","%":"VRStageBoundsPoint"},
mO:{"^":"a3;0k:length=","%":"VideoTrackList"},
bD:{"^":"av;",
gfT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.af("deltaY is not supported"))},
gfS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.af("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
je:{"^":"a3;",
f_:function(a,b){return a.requestAnimationFrame(H.b7(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
en:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mT:{"^":"kp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.be]},
$ast:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$asz:function(){return[W.be]},
"%":"CSSRuleList"},
mU:{"^":"fR;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=J.c1(b)
return a.left===z.gaL(b)&&a.top===z.gb4(b)&&a.width===z.gak(b)&&a.height===z.gaj(b)},
gX:function(a){return W.eU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gak:function(a){return a.width},
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mW:{"^":"kr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$asz:function(){return[W.bj]},
"%":"GamepadList"},
mX:{"^":"kt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mY:{"^":"kv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asz:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
mZ:{"^":"kx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asz:function(){return[W.bx]},
"%":"StyleSheetList"},
js:{"^":"d4;a,b,c,$ti",
h5:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
mV:{"^":"js;a,b,c,$ti"},
jt:{"^":"ej;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.fu(this.b,this.c,z,!1)},
q:{
X:function(a,b,c,d,e){var z=c==null?null:W.fb(new W.ju(c),W.a8)
z=new W.jt(0,a,b,z,!1,[e])
z.fg()
return z}}},
ju:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa8"))}},
z:{"^":"a;$ti",
gZ:function(a){return new W.dQ(a,this.gk(a),-1,[H.bL(this,a,"z",0)])}},
dQ:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ft(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
jn:{"^":"m+fL;"},
jo:{"^":"m+t;"},
jp:{"^":"jo+z;"},
jq:{"^":"m+t;"},
jr:{"^":"jq+z;"},
jv:{"^":"m+t;"},
jw:{"^":"jv+z;"},
jI:{"^":"m+t;"},
jJ:{"^":"jI+z;"},
jP:{"^":"m+ab;"},
jQ:{"^":"m+ab;"},
jR:{"^":"m+t;"},
jS:{"^":"jR+z;"},
jT:{"^":"m+t;"},
jU:{"^":"jT+z;"},
jX:{"^":"m+t;"},
jY:{"^":"jX+z;"},
k3:{"^":"m+ab;"},
f_:{"^":"a3+t;"},
f0:{"^":"f_+z;"},
k4:{"^":"m+t;"},
k5:{"^":"k4+z;"},
k8:{"^":"m+ab;"},
kb:{"^":"m+t;"},
kc:{"^":"kb+z;"},
f2:{"^":"a3+t;"},
f3:{"^":"f2+z;"},
kh:{"^":"m+t;"},
ki:{"^":"kh+z;"},
ko:{"^":"m+t;"},
kp:{"^":"ko+z;"},
kq:{"^":"m+t;"},
kr:{"^":"kq+z;"},
ks:{"^":"m+t;"},
kt:{"^":"ks+z;"},
ku:{"^":"m+t;"},
kv:{"^":"ku+z;"},
kw:{"^":"m+t;"},
kx:{"^":"kw+z;"}}],["","",,P,{"^":"",
kO:function(a){var z,y
z=J.J(a)
if(!!z.$iscd){y=z.gd6(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f5(a.data,a.height,a.width)},
kN:function(a){if(a instanceof P.f5)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var z,y,x,w,v
if(a==null)return
z=P.hi(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.U(y[w])
z.U(0,v,a[v])}return z},
kL:function(a,b){var z={}
a.M(0,new P.kM(z))
return z},
dN:function(){var z=$.dM
if(z==null){z=J.cx(window.navigator.userAgent,"Opera",0)
$.dM=z}return z},
fP:function(){var z,y
z=$.dJ
if(z!=null)return z
y=$.dK
if(y==null){y=J.cx(window.navigator.userAgent,"Firefox",0)
$.dK=y}if(y)z="-moz-"
else{y=$.dL
if(y==null){y=!P.dN()&&J.cx(window.navigator.userAgent,"Trident/",0)
$.dL=y}if(y)z="-ms-"
else z=P.dN()?"-o-":"-webkit-"}$.dJ=z
return z},
f5:{"^":"a;d6:a>,b,c",$iscd:1},
kM:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
h_:{"^":"cg;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.an(z,"t",0)
x=W.a0
return new H.hq(new H.jc(z,H.b(new P.h0(),{func:1,ret:P.a6,args:[y]}),[y]),H.b(new P.h1(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bb(this.gbJ().a)},
j:function(a,b){var z=this.gbJ()
return z.b.$1(J.dw(z.a,b))},
gZ:function(a){var z=P.hm(this.gbJ(),!1,W.a0)
return new J.ag(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
h0:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa0}},
h1:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bW:{"^":"a;p:a>,t:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b6(b,"$isbW",[P.T],null)
if(!z)return!1
z=this.a
y=J.c1(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gX:function(a){var z,y
z=J.aA(this.a)
y=J.aA(this.b)
return P.eT(P.bF(P.bF(0,z),y))}},
jZ:{"^":"a;$ti",
gaZ:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.A(z+this.c,H.y(this,0))},
gbZ:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b6(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=this.a
y=J.c1(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb4(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gaZ(b)){if(typeof x!=="number")return x.F()
z=H.A(x+this.d,w)===y.gbZ(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.aA(z)
x=this.b
w=J.aA(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.A(x+this.d,v)
return P.eT(P.bF(P.bF(P.bF(P.bF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d5:function(a,b){var z,y
H.v(b,"$isbW",[P.T],"$asbW")
z=b.a
y=this.a
if(typeof z!=="number")return z.dP()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dP()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"jZ;aL:a>,b4:b>,ak:c>,aj:d>,$ti",q:{
hW:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",lF:{"^":"R;0p:x=,0t:y=","%":"SVGFEBlendElement"},lG:{"^":"R;0p:x=,0t:y=","%":"SVGFEColorMatrixElement"},lH:{"^":"R;0p:x=,0t:y=","%":"SVGFEComponentTransferElement"},lI:{"^":"R;0p:x=,0t:y=","%":"SVGFECompositeElement"},lJ:{"^":"R;0p:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},lK:{"^":"R;0p:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},lL:{"^":"R;0p:x=,0t:y=","%":"SVGFEDisplacementMapElement"},lM:{"^":"R;0p:x=,0t:y=","%":"SVGFEFloodElement"},lN:{"^":"R;0p:x=,0t:y=","%":"SVGFEGaussianBlurElement"},lO:{"^":"R;0p:x=,0t:y=","%":"SVGFEImageElement"},lP:{"^":"R;0p:x=,0t:y=","%":"SVGFEMergeElement"},lQ:{"^":"R;0p:x=,0t:y=","%":"SVGFEMorphologyElement"},lR:{"^":"R;0p:x=,0t:y=","%":"SVGFEOffsetElement"},lS:{"^":"R;0p:x=,0t:y=","%":"SVGFEPointLightElement"},lT:{"^":"R;0p:x=,0t:y=","%":"SVGFESpecularLightingElement"},lU:{"^":"R;0p:x=,0t:y=","%":"SVGFESpotLightElement"},lV:{"^":"R;0p:x=,0t:y=","%":"SVGFETileElement"},lW:{"^":"R;0p:x=,0t:y=","%":"SVGFETurbulenceElement"},lZ:{"^":"R;0p:x=,0t:y=","%":"SVGFilterElement"},m_:{"^":"bk;0p:x=,0t:y=","%":"SVGForeignObjectElement"},h4:{"^":"bk;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bk:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m4:{"^":"bk;0p:x=,0t:y=","%":"SVGImageElement"},bT:{"^":"m;",$isbT:1,"%":"SVGLength"},m7:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$isf:1,
$asf:function(){return[P.bT]},
$asz:function(){return[P.bT]},
"%":"SVGLengthList"},ma:{"^":"R;0p:x=,0t:y=","%":"SVGMaskElement"},bV:{"^":"m;",$isbV:1,"%":"SVGNumber"},mm:{"^":"jW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$isf:1,
$asf:function(){return[P.bV]},
$asz:function(){return[P.bV]},
"%":"SVGNumberList"},mo:{"^":"R;0p:x=,0t:y=","%":"SVGPatternElement"},mq:{"^":"m;0p:x=,0t:y=","%":"SVGPoint"},mr:{"^":"m;0k:length=","%":"SVGPointList"},ms:{"^":"m;0p:x=,0t:y=","%":"SVGRect"},mt:{"^":"h4;0p:x=,0t:y=","%":"SVGRectElement"},mA:{"^":"ka;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asz:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a0;",
gd3:function(a){return new P.h_(a,new W.jl(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mB:{"^":"bk;0p:x=,0t:y=","%":"SVGSVGElement"},iw:{"^":"bk;","%":"SVGTextPathElement;SVGTextContentElement"},mD:{"^":"iw;0p:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bZ:{"^":"m;",$isbZ:1,"%":"SVGTransform"},mJ:{"^":"kk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bZ]},
$isd:1,
$asd:function(){return[P.bZ]},
$isf:1,
$asf:function(){return[P.bZ]},
$asz:function(){return[P.bZ]},
"%":"SVGTransformList"},mM:{"^":"bk;0p:x=,0t:y=","%":"SVGUseElement"},jK:{"^":"m+t;"},jL:{"^":"jK+z;"},jV:{"^":"m+t;"},jW:{"^":"jV+z;"},k9:{"^":"m+t;"},ka:{"^":"k9+z;"},kj:{"^":"m+t;"},kk:{"^":"kj+z;"}}],["","",,P,{"^":"",lj:{"^":"m;0k:length=","%":"AudioBuffer"},lk:{"^":"jk;",
j:function(a,b){return P.aK(a.get(H.U(b)))},
M:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gas:function(a){var z=H.c([],[P.o])
this.M(a,new P.fz(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"AudioParamMap"},fz:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},ll:{"^":"a3;0k:length=","%":"AudioTrackList"},fA:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mn:{"^":"fA;0k:length=","%":"OfflineAudioContext"},jk:{"^":"m+ab;"}}],["","",,P,{"^":"",d0:{"^":"m;",
hw:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kN(g))
return}if(!!z.$isdS)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fx("Incorrect number or type of arguments"))},
hv:function(a,b,c,d,e,f,g){return this.hw(a,b,c,d,e,f,g,null,null,null)},
$isd0:1,
"%":"WebGLRenderingContext"},ix:{"^":"m;",$isix:1,"%":"WebGLTexture"},iT:{"^":"m;",$isiT:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",my:{"^":"k7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aK(a.item(b))},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$isf:1,
$asf:function(){return[[P.a4,,,]]},
$asz:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},k6:{"^":"m+t;"},k7:{"^":"k6+z;"}}],["","",,O,{"^":"",ai:{"^":"a;0a,0b,0c,0d,$ti",
bA:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
ct:function(a,b,c){var z=H.an(this,"ai",0)
H.b(b,{func:1,ret:P.a6,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.C,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aN:function(a,b){return this.ct(a,null,b)},
aO:function(a){var z
H.v(a,"$isd",[H.an(this,"ai",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
bP:function(a,b){var z
H.v(b,"$isd",[H.an(this,"ai",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
eT:function(a,b){var z
H.v(b,"$isd",[H.an(this,"ai",0)],"$asd")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.ag(z,z.length,0,[H.y(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.an(this,"ai",0)
H.A(b,z)
z=[z]
if(this.aO(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bP(x,H.c([b],z))}},
aQ:function(a,b){var z,y
H.v(b,"$isd",[H.an(this,"ai",0)],"$asd")
if(this.aO(b)){z=this.a
y=z.length
C.a.aQ(z,b)
this.bP(y,b)}},
U:function(a,b,c){var z,y,x
z=H.an(this,"ai",0)
H.A(c,z)
y=this.a
if(b>=y.length)return H.i(y,b)
x=y[b]
if(!J.O(x,c)&&this.aO(H.c([c],[z]))){C.a.U(this.a,b,c)
z=[z]
this.eT(b,H.c([x],z))
this.bP(b,H.c([c],z))}},
$isd:1,
q:{
c6:function(a){var z=new O.ai([a])
z.bA(a)
return z}}},cT:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e2:function(a){var z=this.b
if(!(z==null))z.v(a)},
aw:function(){return this.e2(null)},
gK:function(a){var z=this.a
if(z.length>0)return C.a.gcg(z)
else return V.aM()},
bt:function(a){var z=this.a
if(a==null)C.a.h(z,V.aM())
else C.a.h(z,a)
this.aw()},
at:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",cy:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a_:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scv:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.T(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.b(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.ef])
w.b=!0
this.ad(w)}},
sdE:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.T(y.a,x)}if(a!=null){y=a.gn()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.B("mover",z,a,this,[U.a1])
w.b=!0
this.ad(w)}},
af:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ac])
w.b=!0
this.ad(w)}for(z=this.y.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();)z.d.af(0,b)},
a2:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gK(z))
else C.a.h(z.a,y.l(0,z.gK(z)))
z.aw()
a.co(this.f)
z=a.dy
x=(z&&C.a).gcg(z)
if(x!=null&&this.d!=null)x.dJ(a,this)
for(z=this.y.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a2(a)
a.cn()
a.dx.at()},
gn:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
ad:function(a){var z=this.z
if(!(z==null))z.v(a)},
a1:function(){return this.ad(null)},
he:[function(a){H.k(a,"$isl")
this.e=null
this.ad(a)},function(){return this.he(null)},"im","$1","$0","gdH",0,2,0],
hd:[function(a){this.ad(H.k(a,"$isl"))},function(){return this.hd(null)},"il","$1","$0","gdG",0,2,0],
hb:[function(a){this.ad(H.k(a,"$isl"))},function(){return this.hb(null)},"ij","$1","$0","gdF",0,2,0],
ii:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gha",8,0,8],
ik:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.T(t.a,y)}}this.a1()},"$2","ghc",8,0,8],
$isaw:1,
q:{
ca:function(a,b,c,d,e,f){var z,y
z=new E.aC()
z.a=d
z.b=!0
y=O.c6(E.aC)
z.y=y
y.aN(z.gha(),z.ghc())
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
z.scv(0,e)
z.sdE(c)
return z}}},i_:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e_:function(a,b){var z,y,x,w,v
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
z=new O.cT()
y=[V.ac]
z.a=H.c([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.i1(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cT()
z.a=H.c([],y)
v=z.gn()
v.toString
x=H.b(new E.i2(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cT()
z.a=H.c([],y)
y=z.gn()
y.toString
w=H.b(new E.i3(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bY])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.o,A.d2])},
ghn:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gK(z)
y=this.db
y=z.l(0,y.gK(y))
this.z=y
z=y}return z},
co:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcg(z):a;(z&&C.a).h(z,y)},
cn:function(){var z=this.dy
if(z.length>1)z.pop()},
d0:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d4(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.U(0,z,a)},
q:{
i0:function(a,b){var z=new E.i_(a,b)
z.e_(a,b)
return z}}},i1:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},i2:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i3:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},io:{"^":"l;c,a,0b"},iD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a_:x@,0y,0z,0Q,0ch",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e4:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.hq()},function(){return this.e4(null)},"e3","$1","$0","gcD",0,2,0],
gfY:function(){var z,y,x
z=Date.now()
y=C.f.a0(P.dP(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ap(z,!1)
return x/y},
cU:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.cd(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cd(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hq:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iF(this),{func:1,ret:-1,args:[P.T]})
C.t.en(z)
C.t.f_(z,W.fb(y,P.T))}},
hp:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cU()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ap(w,!1)
x.y=P.dP(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aw()
w=x.db
C.a.sk(w.a,0)
w.aw()
w=x.dx
C.a.sk(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aT(v)
y=H.b9(v)
P.dv("Error: "+H.j(z))
P.dv("Stack: "+H.j(y))
throw H.h(z)}},
q:{
iE:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscC)return E.em(a,!0,!0,!0,!1)
y=W.cD(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd3(a).h(0,y)
w=E.em(y,!0,!0,!0,!1)
w.a=a
return w},
em:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iD()
y=P.hj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bw(a,"webgl",y)
x=H.k(x==null?C.k.bw(a,"experimental-webgl",y):x,"$isd0")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.i0(x,a)
w=new T.iy(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iZ(a)
v=new X.he()
v.c=new X.au(!1,!1,!1)
v.d=P.hk(null,null,null,P.C)
w.b=v
v=new X.hD(w)
v.f=0
v.r=new V.P(0,0)
v.x=new V.P(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hn(w)
v.r=0
v.x=new V.P(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iJ(w)
v.e=0
v.f=new V.P(0,0)
v.r=new V.P(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.ej,P.a]])
w.z=v
u=document
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.b(w.geF(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.b(w.geI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.b(w.geC(),q),!1,r))
v=w.z
p=W.bn
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.b(w.geK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.b(w.geJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.b(w.geN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.b(w.geP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.b(w.geO(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.X(a,H.U(W.fV(a)),H.b(w.geQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.b(w.geG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.b(w.geH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.b(w.geR(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.b(w.geY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.b(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.b(w.geX(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ap(Date.now(),!1)
z.ch=0
z.cU()
return z}}},iF:{"^":"u:28;a",
$1:function(a){var z
H.l5(a)
z=this.a
if(z.z){z.z=!1
z.hp()}}}}],["","",,Z,{"^":"",eO:{"^":"a;a,b",q:{
dd:function(a,b,c){var z
H.v(c,"$isf",[P.C],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.eO(b,z)}}},dB:{"^":"cy;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.q('Failed to bind buffer attribute "'+J.a7(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a7(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eP:{"^":"a;a",$islm:1},cB:{"^":"a;a,0b,c,d",
ar:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
av:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismC:1},ce:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aY(this.c)+"'")+"]"}},b1:{"^":"a;a",
gcw:function(a){var z,y
z=this.a
y=(z&$.$get$ar().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$b2().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
fK:function(a){var z,y,x
z=$.$get$ar()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eN()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$ar().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
am:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",dE:{"^":"a;"},aU:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.M(y,new D.fZ(z))
return x!==0},
fU:function(){return this.v(null)},
hr:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
au:function(a){return this.hr(a,!0,!1)},
q:{
E:function(){var z=new D.aU()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fZ:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bQ:{"^":"l;c,d,a,0b,$ti"},bR:{"^":"l;c,d,a,0b,$ti"},B:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dC:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"ln<"}},dX:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dY:{"^":"l;c,a,0b"},he:{"^":"a;0a,0b,0c,0d",
hk:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.v(y)},
hg:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.v(y)}},e1:{"^":"ch;x,y,c,d,e,a,0b"},hn:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ap(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.P(y.a+x*w,y.b+v*u)
u=this.a.gaF()
s=new X.bp(a,new V.P(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cm:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.an(a,b))
return!0},
aX:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dT()
if(typeof z!=="number")return z.dN()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.an(a,b))
return!0},
aW:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.an(a,b))
return!0},
hl:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cW(new V.Q(v*u,t*s),y,x,new P.ap(w,!1),this)
w.b=!0
z.v(w)
return!0},
eM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ap(Date.now(),!1)
y=this.f
x=new X.e1(c,a,this.a.gaF(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.P(0,0)}},au:{"^":"a;a,b,c",
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
return z+(this.c?"Shift+":"")}},bp:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},hD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bG:function(a,b,c){var z,y,x
z=new P.ap(Date.now(),!1)
y=this.a.gaF()
x=new X.bp(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cm:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bG(a,b,!0))
return!0},
aX:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dT()
if(typeof z!=="number")return z.dN()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bG(a,b,!0))
return!0},
aW:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bG(a,b,!1))
return!0},
hm:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cW(new V.Q(w*v,u*t),y,b,new P.ap(x,!1),this)
x.b=!0
z.v(x)
return!0},
gd8:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbv:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdD:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cW:{"^":"ch;x,c,d,e,a,0b"},ch:{"^":"l;"},eq:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},iJ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.P],"$asf")
z=new P.ap(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gaF()
w=new X.eq(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hj:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.b
if(z==null)return!1
z.v(this.an(a,!0))
return!0},
hh:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.c
if(z==null)return!1
z.v(this.an(a,!0))
return!0},
hi:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.d
if(z==null)return!1
z.v(this.an(a,!1))
return!0}},iZ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaF:function(){var z=this.a
return V.ck(0,0,(z&&C.k).gbe(z).c,C.k.gbe(z).d)},
cN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.au(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.P(y-w,x-v)},
aP:function(a){return new V.Q(a.movementX,a.movementY)},
bQ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.ae(u.pageX)
C.j.ae(u.pageY)
s=z.left
C.j.ae(u.pageX)
C.a.h(y,new V.P(t-s,C.j.ae(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.au(y,a.altKey,a.shiftKey))},
hV:[function(a){this.f=!0},"$1","geI",4,0,4],
hP:[function(a){this.f=!1},"$1","geC",4,0,4],
hS:[function(a){if(this.f)a.preventDefault()},"$1","geF",4,0,4],
hX:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cN(a)
if(this.b.hk(z))a.preventDefault()},"$1","geK",4,0,16],
hW:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cN(a)
if(this.b.hg(z))a.preventDefault()},"$1","geJ",4,0,16],
hZ:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.al(a)
x=this.aP(a)
if(this.d.cm(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cm(y,w))a.preventDefault()},"$1","geN",4,0,5],
i0:[function(a){var z,y,x
H.k(a,"$isav")
this.aE(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","geP",4,0,5],
hU:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
if(!(z&&C.k).gbe(z).d5(0,new P.bW(a.clientX,a.clientY,[P.T]))){this.aE(a)
y=this.al(a)
if(this.x){x=this.aP(a)
if(this.d.aX(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aX(y,w))a.preventDefault()}},"$1","geH",4,0,5],
i_:[function(a){var z,y,x
H.k(a,"$isav")
this.aE(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aW(z,x))a.preventDefault()},"$1","geO",4,0,5],
hT:[function(a){var z,y,x,w
H.k(a,"$isav")
z=this.a
if(!(z&&C.k).gbe(z).d5(0,new P.bW(a.clientX,a.clientY,[P.T]))){this.aE(a)
y=this.al(a)
if(this.x){x=this.aP(a)
if(this.d.aW(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aW(y,w))a.preventDefault()}},"$1","geG",4,0,5],
i1:[function(a){var z,y
H.k(a,"$isbD")
this.aE(a)
z=new V.Q((a&&C.r).gfS(a),C.r.gfT(a)).w(0,180)
if(this.x){if(this.d.hl(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hm(z,y))a.preventDefault()},"$1","geQ",4,0,31],
i2:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.eM(w,v,x)}},"$1","geR",4,0,4],
i8:[function(a){var z
H.k(a,"$isb0")
this.a.focus()
this.f=!0
this.bU(a)
z=this.bQ(a)
if(this.e.hj(z))a.preventDefault()},"$1","geY",4,0,10],
i6:[function(a){var z
H.k(a,"$isb0")
this.bU(a)
z=this.bQ(a)
if(this.e.hh(z))a.preventDefault()},"$1","geW",4,0,10],
i7:[function(a){var z
H.k(a,"$isb0")
this.bU(a)
z=this.bQ(a)
if(this.e.hi(z))a.preventDefault()},"$1","geX",4,0,10]}}],["","",,D,{"^":"",c9:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
ax:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.ax(null)},"hC","$1","$0","ge5",0,2,0],
$isW:1,
$isaw:1,
q:{
dO:function(a,b){var z,y,x,w
z=new D.c9()
z.c=new V.V(1,1,1)
z.a=new V.G(0,0,1)
y=z.b
z.b=b
x=b.gn()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.B("mover",y,z.b,z,[U.a1])
x.b=!0
z.ax(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.B("color",y,a,z,[V.V])
x.b=!0
z.ax(x)}return z}}},W:{"^":"a;",$isaw:1},hf:{"^":"ai;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
ax:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eL:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eL(null)},"hY","$1","$0","gcR",0,2,0],
i3:[function(a){var z,y,x
H.v(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ej(x))return!1}return!0},"$1","geS",4,0,33],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c9)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gey",8,0,17],
i4:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c9)C.a.T(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.T(s.a,x)}z=new D.bR(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geU",8,0,17],
ej:function(a){var z=C.a.aT(this.e,a)
return z},
$asd:function(){return[D.W]},
$asai:function(){return[D.W]}},hM:{"^":"a;",$isW:1,$isaw:1},il:{"^":"a;",$isW:1,$isaw:1},iA:{"^":"a;",$isW:1,$isaw:1},iB:{"^":"a;",$isW:1,$isaw:1},iC:{"^":"a;",$isW:1,$isaw:1}}],["","",,V,{"^":"",
lp:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hz",8,0,32],
le:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dS(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a8("null",c)
return C.h.a8(C.j.dM($.n.$2(a,0)?0:a,b),c+b+1)},
b8:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.w],"$asf")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.U(z,u,C.h.a8(z[u],x))}return z},
du:function(a,b){return C.j.hy(Math.pow(b,C.y.cd(Math.log(H.kK(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
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
aL:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
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
e5:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e5))return!1
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
y=V.b8(H.c([this.a,this.d,this.r],z),3,0)
x=V.b8(H.c([this.b,this.e,this.x],z),3,0)
w=V.b8(H.c([this.c,this.f,this.y],z),3,0)
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
ac:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cf:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aM()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.ad(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
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
i:function(a){return this.G()},
dw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b8(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b8(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b8(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b8(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(a){return this.dw(a,3,0)},
G:function(){return this.dw("",3,0)},
q:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aM:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cV:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hA:function(a,b,c,d){return V.at(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cU:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.at(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
e7:function(a,b,c,d){return V.e6(new V.ad(0,0,0),new V.G(0,1,0),new V.G(a,b,c))},
e6:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.C(c)))
y=b.aU(z)
x=y.w(0,Math.sqrt(y.C(y)))
w=z.aU(x)
v=new V.G(a.a,a.b,a.c)
return V.at(x.a,w.a,z.a,x.I(0).C(v),x.b,w.b,z.b,w.I(0).C(v),x.c,w.c,z.c,z.I(0).C(v),0,0,0,1)}}},
P:{"^":"a;p:a>,t:b>",
J:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ad:{"^":"a;p:a>,t:b>,c",
J:function(a,b){return new V.ad(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bs:{"^":"a;p:a>,t:b>,c,d",
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
d_:{"^":"a;p:a>,t:b>,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d_))return!1
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
ck:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d_(a,b,c,d)}}},
Q:{"^":"a;a,b",
h3:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,18],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.Q(z*b,y*b)},
w:function(a,b){var z,y
if($.n.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
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
G:{"^":"a;a,b,c",
h3:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aU:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.G(-this.a,-this.b,-this.c)},
w:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fI:{"^":"dE;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bB:function(a){var z=V.le(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.v(a)},
scr:function(a,b){},
scj:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bB(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.L(z)}},
scl:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bB(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.L(z)}},
sa3:function(a,b){var z,y
b=this.bB(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.L(z)}},
sck:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.L(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.L(z)}},
sc4:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.L(z)}},
af:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sN(y)}},
q:{
cF:function(){var z=new U.fI()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cG:{"^":"a1;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
sK:function(a,b){var z,y,x
if(b==null)b=V.aM()
if(!J.O(this.a,b)){z=this.a
this.a=b
y=new D.B("matrix",z,b,this,[V.ac])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aM:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
q:{
bO:function(a){var z=new U.cG()
z.sK(0,a)
return z}}},dR:{"^":"ai;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
L:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.L(null)},"ab","$1","$0","gay",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gay(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.L(z)},"$2","ge6",8,0,19],
hE:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gay(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.L(z)},"$2","ge7",8,0,19],
aM:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ag(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aM(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aM():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a1]},
$asai:function(){return[U.a1]},
$isa1:1,
q:{
cK:function(a){var z=new U.dR()
z.bA(U.a1)
z.aN(z.ge6(),z.ge7())
if(a!=null)z.aQ(0,a)
z.e=null
z.f=V.aM()
z.r=0
return z}}},a1:{"^":"dE;"},j_:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
L:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.L(null)},"ab","$1","$0","gay",0,2,0],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd8()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdD()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbv()
z.toString
y=H.b(this.gbM(),y)
C.a.h(z.a,y)
return!0},
eu:[function(a){H.k(a,"$isl")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbK",4,0,1],
ev:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.Q(y.a,y.b).l(0,2).w(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.Q(x.a,x.b).l(0,2).w(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.I()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
this.b.sN(0)
y=y.J(0,a.z)
this.Q=new V.Q(y.a,y.b).l(0,2).w(0,z.ga4())}this.ab()},"$1","gbL",4,0,1],
ew:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sN(y*10*x)
this.ab()}},"$1","gbM",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.at(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa1:1},j0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
L:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.L(null)},"ab","$1","$0","gay",0,2,0],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd8()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdD()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbv()
z.toString
x=H.b(this.gbM(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.geq(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.ger(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.gff(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.gfd(),y)
C.a.h(z.a,y)
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.Q(z,y)},
eu:[function(a){a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbK",4,0,1],
ev:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ah(new V.Q(y.a,y.b).l(0,2).w(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ah(new V.Q(x.a,x.b).l(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.J(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).l(0,2).w(0,z.ga4()))}this.ab()},"$1","gbL",4,0,1],
ew:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sN(-y*10*z)
this.ab()}},"$1","gbM",4,0,1],
hI:[function(a){if(H.e(H.k(a,"$isl"),"$ise1").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geq",4,0,1],
hJ:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ah(new V.Q(x.a,x.b).l(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.J(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).l(0,2).w(0,z.ga4()))
this.ab()},"$1","ger",4,0,1],
ic:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
ib:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$iseq")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ah(new V.Q(y.a,y.b).l(0,2).w(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ah(new V.Q(x.a,x.b).l(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.J(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).l(0,2).w(0,z.ga4()))}this.ab()},"$1","gfe",4,0,1],
ia:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sN(-y*10*z)
this.ab()}},"$1","gfd",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.dy=y
x=b.y
this.c.af(0,x)
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.fr=V.at(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1).l(0,V.cU(this.c.d))}return this.fr},
$isa1:1},j1:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.v(a)},
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=H.b(this.gex(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hK:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.O(this.b,this.a.b.c))return
H.e(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.L(z)}},"$1","gex",4,0,1],
aM:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hA(x,x,x,1)}return this.f},
$isa1:1}}],["","",,M,{"^":"",fK:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.V(null)},"cE","$1","$0","gO",0,2,0],
saS:function(a){var z,y,x
if(a==null)a=new X.h5()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c5])
z.b=!0
this.V(z)}},
sb_:function(a,b){var z,y,x
if(b==null)b=X.cI(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cm])
z.b=!0
this.V(z)}},
sb0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bY])
z.b=!0
this.V(z)}},
a2:function(a){a.co(this.c)
this.b.W(a)
this.a.W(a)
this.d.af(0,a)
this.d.a2(a)
this.a.av(a)
this.b.toString
a.cn()},
$isaZ:1,
$iscl:1},fX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.V(null)},"cE","$1","$0","gO",0,2,0],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geD",8,0,8],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.T(s.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geE",8,0,8],
saS:function(a){var z,y,x
if(a==null)a=X.cY(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c5])
z.b=!0
this.V(z)}},
sb_:function(a,b){var z,y,x
if(b==null)b=X.cI(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cm])
z.b=!0
this.V(z)}},
sb0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bY])
z.b=!0
this.V(z)}},
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a2:function(a){var z
a.co(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.af(0,a)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();)z.d.af(0,a)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a2(a)
this.a.toString
a.cy.at()
a.db.at()
this.b.toString
a.cn()},
$isaZ:1,
$iscl:1},aZ:{"^":"cl;"},cl:{"^":"a;"},iq:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.V(null)},"cE","$1","$0","gO",0,2,0],
hM:[function(a,b){var z,y,x,w,v,u,t
z=M.aZ
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gez",8,0,20],
i5:[function(a,b){var z,y,x,w,v,u,t
z=M.aZ
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geV",8,0,20],
a2:function(a){var z,y,x
this.y.sdI(0,this.r)
for(z=this.z.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.sb_(0,this.y)
y.saS(this.e)
y.a2(a)}this.y.sdI(0,this.x)
for(z=this.z.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.sb_(0,this.y)
y.saS(this.f)
y.a2(a)}x=new E.io(a,this)
x.b=!0
this.cx.v(x)},
$iscl:1}}],["","",,A,{"^":"",dy:{"^":"a;a,b,c"},fy:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d7:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e4:{"^":"d2;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aJ,0aq,0aK,0bf,0d9,0da,0bg,0bh,0dc,0dd,0bi,0bj,0de,0df,0bk,0dg,0dh,0bl,0di,0dj,0bm,0bn,0bo,0dk,0dl,0bp,0bq,0dm,0dn,0br,0dq,0c7,0dr,0c8,0ds,0c9,0dt,0ca,0du,0cb,0dv,0cc,a,b,0c,0d,0e,0f,0r",
dZ:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bX("")
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
z=new P.bX("")
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
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.b:r+="   return 1.0;\n"
z.a=r
break
case C.e:r+="   return alpha;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dz(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isaz")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isaz")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isaz")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isaz")
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$isdb")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isaz")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isaz")
this.k3=H.c([],[A.az])
y=a1.aJ
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isaz"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isal")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.c:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isal")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.c:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.aJ=H.e(this.r.m(0,"diffuseTxt"),"$isal")
this.aK=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.c:this.aq=H.e(this.r.m(0,"diffuseTxt"),"$isae")
this.aK=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bf=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.d9=H.e(this.r.m(0,"invDiffuseTxt"),"$isal")
this.bg=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.c:this.da=H.e(this.r.m(0,"invDiffuseTxt"),"$isae")
this.bg=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bj=H.e(this.r.m(0,"shininess"),"$isS")
this.bh=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dc=H.e(this.r.m(0,"specularTxt"),"$isal")
this.bi=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.c:this.dd=H.e(this.r.m(0,"specularTxt"),"$isae")
this.bi=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.de=H.e(this.r.m(0,"bumpTxt"),"$isal")
this.bk=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.c:this.df=H.e(this.r.m(0,"bumpTxt"),"$isae")
this.bk=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dg=H.e(this.r.m(0,"envSampler"),"$isae")
this.dh=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bl=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.di=H.e(this.r.m(0,"reflectTxt"),"$isal")
this.bm=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.c:this.dj=H.e(this.r.m(0,"reflectTxt"),"$isae")
this.bm=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bn=H.e(this.r.m(0,"refraction"),"$isS")
this.bo=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dk=H.e(this.r.m(0,"refractTxt"),"$isal")
this.bp=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.c:this.dl=H.e(this.r.m(0,"refractTxt"),"$isae")
this.bp=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bq=H.e(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.e:break
case C.d:this.dm=H.e(this.r.m(0,"alphaTxt"),"$isal")
this.br=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.c:this.dn=H.e(this.r.m(0,"alphaTxt"),"$isae")
this.br=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c7=H.c([],[A.eD])
this.c8=H.c([],[A.eE])
this.c9=H.c([],[A.eF])
this.ca=H.c([],[A.eG])
this.cb=H.c([],[A.eH])
this.cc=H.c([],[A.eI])
if(a1.k2){y=a1.z
if(y>0){this.dq=H.k(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.c7;(x&&C.a).h(x,new A.eD(m,l,k))}}y=a1.Q
if(y>0){this.dr=H.k(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.c8;(x&&C.a).h(x,new A.eE(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ds=H.k(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.c9;(x&&C.a).h(x,new A.eF(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dt=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isal")
x=this.ca;(x&&C.a).h(x,new A.eG(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.du=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isdb")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isae")
x=this.cb;(x&&C.a).h(x,new A.eH(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dv=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isF")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isal")
x=this.cc;(x&&C.a).h(x,new A.eI(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
a6:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cu(c)
b.a.uniform1i(b.d,0)}},
q:{
ht:function(a,b){var z,y
z=a.aq
y=new A.e4(b,z)
y.cC(b,z)
y.dZ(a,b)
return y}}},hw:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aJ,aq,aK",
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
z=a.a+="uniform BendingValue bendValues["+this.aJ+"];\n"
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
am:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cz(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.am(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return emissionClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
this.am(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return ambientClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
this.am(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
this.am(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
this.am(a,z,"specular")
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
case C.e:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
this.am(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
this.am(a,z,"refract")
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
case C.e:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i:function(a){return this.aq}},eD:{"^":"a;a,b,c"},eG:{"^":"a;a,b,c,d,e,f,r,x"},eE:{"^":"a;a,b,c,d,e,f,r"},eH:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eF:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eI:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d2:{"^":"cy;",
cC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dz:function(a,b,c){var z,y,x
this.c=this.cO(b,35633)
this.d=this.cO(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.ff(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f8()
this.fa()},
W:function(a){a.a.useProgram(this.e)
this.f.fV()},
cO:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ff(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f8:function(){var z,y,x,w,v,u
z=H.c([],[A.dy])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dy(y,v.name,u))}this.f=new A.fy(z)},
fa:function(){var z,y,x,w,v,u
z=H.c([],[A.a5])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fR(v.type,v.size,v.name,u))}this.r=new A.iS(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.da(z,y,b,a,c)},
ek:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.al(z,y,b,c)
else return A.da(z,y,b,a,c)},
el:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.da(z,y,b,a,c)},
bb:function(a,b){return new P.eR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fR:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.iN(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iQ(this.a,this.e,c,d)
case 35667:return new A.iO(this.a,this.e,c,d)
case 35668:return new A.iP(this.a,this.e,c,d)
case 35669:return new A.iR(this.a,this.e,c,d)
case 35674:return new A.iU(this.a,this.e,c,d)
case 35675:return new A.db(this.a,this.e,c,d)
case 35676:return new A.az(this.a,this.e,c,d)
case 35678:return this.ek(b,c,d)
case 35680:return this.el(b,c,d)
case 35670:throw H.h(this.bb("BOOL",c))
case 35671:throw H.h(this.bb("BOOL_VEC2",c))
case 35672:throw H.h(this.bb("BOOL_VEC3",c))
case 35673:throw H.h(this.bb("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c7:{"^":"a;a,b",
i:function(a){return this.b}},eg:{"^":"d2;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a5:{"^":"a;"},iS:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fX:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fX("\n")}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iO:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iP:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iR:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iM:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
da:function(a,b,c,d,e){var z=new A.iM(a,b,c,e)
z.f=d
z.e=P.hl(d,0,!1,P.C)
return z}}},S:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iN:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iQ:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iU:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},db:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},az:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},al:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ae:{"^":"a5;a,b,c,d",
cu:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bG:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.lb(d,e,new F.ky(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.h8(j)},
lb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aD,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d3()
y=H.c([],[F.aD])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.co(null,null,new V.aL(u,0,0,1),null,null,new V.P(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c3(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.co(null,null,new V.aL(o,n,m,1),null,null,new V.P(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c3(d))}}z.d.fH(a+1,b+1,y)
return z},
ky:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ci(z.b,b).ci(z.d.ci(z.c,b),c)
z=new V.ad(y.a,y.b,y.c)
if(!J.O(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a1()}a.sb2(y.w(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bs(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.O(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
aj:{"^":"a;0a,0b,0c,0d,0e",
gc6:function(){return this.a==null||this.b==null||this.c==null},
ee:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.w(0,Math.sqrt(v.C(v)))},
eh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.J(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aU(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
c1:function(){if(this.d!=null)return!0
var z=this.ee()
if(z==null){z=this.eh()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.w(0,Math.sqrt(v.C(v)))},
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.J(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.I(0)}else{l=(z-q.b)/n
z=r.J(0,u)
z=new V.ad(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).J(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.I(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.aU(m)
z=z.w(0,Math.sqrt(z.C(z))).aU(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
c_:function(){if(this.e!=null)return!0
var z=this.ed()
if(z==null){z=this.eg()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y
if(this.gc6())return a+"disposed"
z=a+C.h.a8(J.a7(this.a.e),0)+", "+C.h.a8(J.a7(this.b.e),0)+", "+C.h.a8(J.a7(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.A("")},
q:{
bg:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
cR:{"^":"a;0a,0b",
gc6:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){if(this.gc6())return a+"disposed"
return a+C.h.a8(J.a7(this.a.e),0)+", "+C.h.a8(J.a7(this.b.e),0)},
G:function(){return this.A("")}},
cZ:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a8(J.a7(z.e),0)},
G:function(){return this.A("")}},
ef:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
h8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.Y()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fQ())}this.a.Y()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cZ()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cR()
s=p.a
if(s==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.q("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bg(p,o,l)}z=this.e
if(!(z==null))z.au(0)},
ap:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ap()||!1
if(!this.a.ap())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
d2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ar()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gcw(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dB])
for(r=0,q=0;q<w;++q){p=b.fK(q)
o=p.gcw(p)
C.a.U(s,q,new Z.dB(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h4(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.U(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bH(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cB(new Z.eO(34962,j),s,b)
i.b=H.c([],[Z.ce])
if(this.b.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ce(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ce(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.Y()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ce(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
ad:function(a){var z=this.e
if(!(z==null))z.v(a)},
a1:function(){return this.ad(null)},
q:{
d3:function(){var z,y
z=new F.ef()
y=new F.j4(z)
y.b=!1
y.c=H.c([],[F.aD])
z.a=y
y=new F.ic(z)
y.b=H.c([],[F.cZ])
z.b=y
y=new F.ib(z)
y.b=H.c([],[F.cR])
z.c=y
y=new F.ia(z)
y.b=H.c([],[F.aj])
z.d=y
z.e=null
return z}}},
ia:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.aD],"$asf")
z=H.c([],[F.aj])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bg(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isf",[F.aD],"$asf")
z=H.c([],[F.aj])
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
C.a.h(z,F.bg(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bg(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bg(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bg(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
ap:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c1())x=!1
return x},
c0:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c_())x=!1
return x},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
ib:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
G:function(){return this.A("")}},
ic:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c3:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.co(this.cx,x,u,z,y,w,v,a,t)},
fQ:function(){return this.c3(null)},
sb2:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
h4:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$ar())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aG())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aF())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aI())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b2()))return H.c([this.ch],[P.w])
else if(z.u(a,$.$get$aE())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c1:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.M(0,new F.jb(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
c_:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.M(0,new F.ja(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.h.a8(J.a7(this.e),0))
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
x=C.a.B(z,", ")
return a+"{"+x+"}"},
G:function(){return this.A("")},
q:{
co:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aD()
y=new F.j9(z)
y.b=H.c([],[F.cZ])
z.b=y
y=new F.j8(z)
x=[F.cR]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.j5(z)
x=[F.aj]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eL()
z.e=0
y=$.$get$ar()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$eM().a)!==0?c:null
z.ch=(x&$.$get$b2().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
jb:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
ja:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j4:{"^":"a;a,0b,0c",
Y:function(){var z,y,x,w
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
this.a.a1()
return!0},
fI:function(a,b,c,d,e,f,g,h,i){var z=F.co(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bc:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ap:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c1()
return!0},
c0:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c_()
return!0},
fM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
this.Y()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j5:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){H.b(b,{func:1,ret:-1,args:[F.aj]})
C.a.M(this.b,b)
C.a.M(this.c,new F.j6(this,b))
C.a.M(this.d,new F.j7(this,b))},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j6:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isaj")
if(!J.O(a.a,this.a))this.b.$1(a)}},
j7:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isaj")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
j8:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j9:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}}}],["","",,O,{"^":"",hs:{"^":"bY;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
S:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.S(null)},"cQ","$1","$0","gaC",0,2,0],
f1:[function(a){H.k(a,"$isl")
this.a=null
this.S(a)},function(){return this.f1(null)},"i9","$1","$0","gf0",0,2,0],
hN:[function(a,b){var z=V.ac
z=new D.bQ(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.S(z)},"$2","geA",8,0,21],
hO:[function(a,b){var z=V.ac
z=new D.bR(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.S(z)},"$2","geB",8,0,21],
cL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$ar()
if(c){z=$.$get$aG()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aH()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aI()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aE()
a6=new Z.b1(a6.a|z.a)}return new A.hw(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.v(a,"$isf",[T.d6],"$asf")
if(b!=null)if(!C.a.aT(a,b)){b.a=a.length
C.a.h(a,b)}},
af:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ag(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cq(x)}}},
dJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cL()
y=H.k(a.fr.j(0,z.aq),"$ise4")
if(y==null){y=A.ht(z,a.a)
a.d0(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aK
z=b.e
if(!(z instanceof Z.cB)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ap()
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
if(!(t==null))t.au(0)}r=b.d.d2(new Z.eP(a.a),w)
r.ar($.$get$ar()).e=this.a.y.c
if(z)r.ar($.$get$aG()).e=this.a.Q.c
if(v)r.ar($.$get$aF()).e=this.a.z.c
if(x.rx)r.ar($.$get$aH()).e=this.a.ch.c
if(u)r.ar($.$get$aI()).e=this.a.cx.c
if(x.x1)r.ar($.$get$aE()).e=this.a.cy.c
b.e=r}z=T.d6
q=H.c([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gK(u)
v=v.db
v.toString
v.aa(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gK(u)
t=a.dx
t=u.l(0,t.gK(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aa(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghn()
t=a.dx
t=u.l(0,t.gK(t))
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
v.aa(C.z.a5(u,!0))}if(x.aJ>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isac")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bH(H.v(t.a5(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.f.d)
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
case C.c:this.R(q,this.f.e)
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
case C.e:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.r.d)
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
case C.c:this.R(q,this.r.e)
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
case C.e:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.aJ,v.aK,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.R(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.aq,v.aK,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.d9,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.R(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.da,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bh
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bj
u.a.uniform1f(u.d,s)
break
case C.d:this.R(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.dc,v.bi,u)
u=this.a
v=this.z.f
u=u.bh
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bj
v.a.uniform1f(v.d,s)
break
case C.c:this.R(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.dd,v.bi,u)
u=this.a
v=this.z.f
u=u.bh
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bj
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cq(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaY(j)
s=i.b
h=t.gp(t)
g=t.gt(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b5(j.gaY(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gai(j)
g=i.d
h=t.gbu()
s=t.gb6()
t=t.gbd()
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
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c9
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaY(j)
s=i.b
h=t.gp(t)
g=t.gt(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc5(j).ih()
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b5(j.gaY(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gai(j)
s=i.e
h=t.gbu()
g=t.gb6()
t=t.gbd()
s.a.uniform3f(s.d,h,g,t)
t=j.gig()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gie()
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
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.ca
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb1()
H.v(q,"$isf",t,"$asf")
if(!C.a.aT(q,s)){s.sbI(q.length)
C.a.h(q,s)}s=j.gc5(j)
h=i.d
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=j.gbv()
f=i.b
g=s.gaG(s)
h=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,h,s)
s=j.gaZ(j)
h=i.c
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=m.cq(j.gc5(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gai(j)
g=i.f
f=h.gbu()
s=h.gb6()
h=h.gbd()
g.a.uniform3f(g.d,f,s,h)
h=j.gb1()
s=h.gbs(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbs(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gh_(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cb
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb1()
H.v(q,"$isf",s,"$asf")
if(!C.a.aT(q,h)){h.sbI(q.length)
C.a.h(q,h)}e=m.l(0,j.gK(j))
h=j.gK(j).b5(new V.ad(0,0,0))
g=i.b
f=h.gp(h)
d=h.gt(h)
h=h.gcs(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b5(new V.ad(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cf(0)
d=i.d
n=new Float32Array(H.bH(H.v(new V.e5(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gai(j)
h=i.e
f=d.gbu()
g=d.gb6()
d=d.gbd()
h.a.uniform3f(h.d,f,g,d)
d=j.gb1()
h=d.gbs(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghH()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbI())
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
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gK(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cc
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb1()
H.v(q,"$isf",z,"$asf")
if(!C.a.aT(q,t)){t.sbI(q.length)
C.a.h(q,t)}t=j.gaY(j)
s=i.b
h=t.gp(t)
g=t.gt(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc5(j)
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=j.gbv()
s=i.d
h=t.gaG(t)
g=t.gaH(t)
t=t.gaI()
s.a.uniform3f(s.d,h,g,t)
t=j.gaZ(j)
g=i.e
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b5(j.gaY(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb1()
s=t.gbs(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbs(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gh_(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gai(j)
s=i.y
h=t.gbu()
g=t.gb6()
t=t.gbd()
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
case C.e:break
case C.d:this.R(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.de,z.bk,v)
break
case C.c:this.R(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.df,z.bk,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gK(v).cf(0)
a.Q=v}z=z.fy
z.toString
z.aa(v.a5(0,!0))}if(x.dy){this.R(q,this.ch)
z=this.a
v=this.ch
z.a6(z.dg,z.dh,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bl
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.R(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.di,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.R(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.dj,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bo
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bn
v.a.uniform1f(v.d,t)
break
case C.d:this.R(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dk,z.bp,v)
v=this.a
z=this.cy.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bn
z.a.uniform1f(z.d,t)
break
case C.c:this.R(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dl,z.bp,v)
v=this.a
z=this.cy.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bn
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bq
z.a.uniform1f(z.d,u)
break
case C.d:this.R(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dm,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break
case C.c:this.R(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dn,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.a2(a)
z.av(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().aq}},hu:{"^":"cS;0f,a,b,0c,0d,0e",
f4:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.w])
z.b=!0
this.a.S(z)}},
aD:function(){this.cB()
this.f4(1)}},cS:{"^":"a;",
S:[function(a){this.a.S(H.k(a,"$isl"))},function(){return this.S(null)},"cQ","$1","$0","gaC",0,2,0],
aD:["cB",function(){}],
f6:function(a){},
f7:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gaC(),{func:1,ret:-1,args:[D.l]})
C.a.T(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.b(this.gaC(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B(this.b+".textureCube",x,this.e,this,[T.d7])
z.b=!0
this.a.S(z)}},
sb2:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aD()
this.c=C.c
this.f6(null)
z=this.a
z.a=null
z.S(null)}this.f7(a)}},hv:{"^":"cS;a,b,0c,0d,0e"},aX:{"^":"cS;0f,a,b,0c,0d,0e",
cV:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.S(y)}},
aD:["bz",function(){this.cB()
this.cV(new V.V(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aD()
z=this.a
z.a=null
z.S(null)}this.cV(b)}},hx:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
f5:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.S(z)}},
aD:function(){this.bz()
this.f5(1)}},hy:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
bS:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.S(z)}},
aD:function(){this.bz()
this.bS(100)}},ii:{"^":"bY;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
S:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.S(null)},"cQ","$1","$0","gaC",0,2,0],
dJ:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$iseg")
if(z==null){y=a.a
z=new A.eg(y,"Skybox")
z.cC(y,"Skybox")
z.dz(0,$.ik,$.ij)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isS")
z.z=H.e(z.r.j(0,"ratio"),"$isS")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isae")
z.cx=H.e(z.r.j(0,"viewMat"),"$isaz")
a.d0(z)}this.a=z}if(b.e==null){y=b.d.d2(new Z.eP(a.a),$.$get$ar())
y.ar($.$get$ar()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.W(a)}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cu(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gK(x).cf(0)
w=w.cx
w.toString
w.aa(x.a5(0,!0))
y=b.e
if(y instanceof Z.cB){y.W(a)
y.a2(a)
y.av(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d7()
y=this.c
if(y!=null)y.av(a)}},bY:{"^":"a;"}}],["","",,T,{"^":"",d6:{"^":"cy;"},d7:{"^":"d6;0b,0c,0d,0e,a",
W:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
av:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iy:{"^":"a;a,0b,0c,0d,0e",
dC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.d7(0)
r.b=s
r.c=!1
r.d=0
r.e=D.E()
this.aB(r,s,z,34069,!1,!1)
this.aB(r,s,w,34070,!1,!1)
this.aB(r,s,y,34071,!1,!1)
this.aB(r,s,v,34072,!1,!1)
this.aB(r,s,x,34073,!1,!1)
this.aB(r,s,u,34074,!1,!1)
return r},
dB:function(a){return this.dC(a,".png",!1,"")},
h6:function(a,b){return this.dC(a,b,!1,"")},
aB:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a8
W.X(z,"load",H.b(new T.iz(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f2:function(a,b,c){var z,y,x,w
b=V.du(b,2)
z=V.du(a.width,2)
y=V.du(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cD(null,null)
x.width=z
x.height=y
w=H.k(C.k.dQ(x,"2d"),"$isdD")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kO(w.getImageData(0,0,x.width,x.height))}}},iz:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f2(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hv(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fU();++z.e}}}],["","",,V,{"^":"",fw:{"^":"a;",
aV:function(a,b){return!0},
i:function(a){return"all"},
$isbU:1},bU:{"^":"a;"},e3:{"^":"a;",
aV:["dX",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aV(0,b))return!0
return!1}],
i:["cA",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbU:1},bq:{"^":"e3;0a",
aV:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}},i8:{"^":"a;0a",
e0:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.C,P.a6])
for(y=new H.e0(a,a.gk(a),0,[H.an(a,"t",0)]);y.D();)z.U(0,y.d,!0)
this.a=z},
aV:function(a,b){return this.a.d4(0,b)},
i:function(a){var z=this.a
return P.d5(new H.e_(z,[H.y(z,0)]),0,null)},
$isbU:1,
q:{
a2:function(a){var z=new V.i8()
z.e0(a)
return z}}},ei:{"^":"a;a,b,0c,0d",
gh9:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.er(this.a.H(0,b))
w.a=H.c([],[V.bU])
w.c=!1
C.a.h(this.c,w)
return w},
fW:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aV(0,a))return w}return},
i:function(a){return this.b}},eo:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fq(this.b,"\n","\\n")
y=H.fq(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ep:{"^":"a;a,b,0c",
i:function(a){return this.b}},iI:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ei(this,b)
z.c=H.c([],[V.er])
this.a.U(0,b,z)}return z},
b3:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ep(this,a)
y=P.o
z.c=new H.aW(0,0,[y,y])
this.b.U(0,a,z)}return z},
hB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eo])
y=this.c
x=[P.C]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b7(a,t)
r=y.fW(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d5(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh9(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d5(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eo(o==null?p.b:o,q,t)}++t}}}},er:{"^":"e3;b,0c,0a",
i:function(a){return this.b.b+": "+this.cA(0)}}}],["","",,X,{"^":"",c5:{"^":"a;",$isaw:1},h3:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
ag:function(a){var z=this.x
if(!(z==null))z.v(a)},
sdI:function(a,b){var z,y
if(!this.r.u(0,b)){z=this.r
this.r=b
y=new D.B("region",z,b,this,[V.d_])
y.b=!0
this.ag(y)}},
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
v=C.j.ae(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.ae(w.b*x)
t=C.j.ae(w.c*y)
a.c=t
w=C.f.ae(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cI:function(a,b,c,d,e,f,g){var z,y
z=new X.h3()
y=new V.aL(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ck(0,0,1,1)
z.r=y
return z}}},h5:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
W:function(a){var z
a.cy.bt(V.aM())
z=V.aM()
a.db.bt(z)},
av:function(a){a.cy.at()
a.db.at()},
$isaw:1,
$isc5:1},hK:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
ag:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.ag(null)},"hF","$1","$0","gea",0,2,0],
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
z=$.eb
if(z==null){z=V.e6(new V.ad(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.eb=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aM(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bt(r)},
av:function(a){a.cy.at()
a.db.at()},
$isaw:1,
$isc5:1,
q:{
cY:function(a,b,c,d){var z,y,x,w
z=new X.hK()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gn()
x.toString
w=H.b(z.gea(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.B("mover",y,z.a,z,[U.a1])
x.b=!0
z.ag(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.B("fov",y,b,z,[P.w])
x.b=!0
z.ag(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.B("near",y,d,z,[P.w])
x.b=!0
z.ag(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.B("far",y,a,z,[P.w])
x.b=!0
z.ag(x)}return z}}},cm:{"^":"a;"}}],["","",,V,{"^":"",
l9:function(a){P.iH(C.w,new V.la(a))},
la:{"^":"u:37;a",
$1:function(a){H.k(a,"$isb_")
P.dv(C.j.dM(this.a.gfY(),2)+" fps")}},
id:{"^":"a;0a,0b",
e1:function(a,b){var z,y,x,w,v,u,t
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
W.X(z,"scroll",H.b(new V.ih(x),{func:1,ret:-1,args:[t]}),!1,t)},
fJ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isf",[P.o],"$asf")
this.f9()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hB(C.a.h2(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fp(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kl(C.H,s,C.q,!1)
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
z=new V.iI()
y=P.o
z.a=new H.aW(0,0,[y,V.ei])
z.b=new H.aW(0,0,[y,V.ep])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a2(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bq()
w=[V.bU]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a_("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a2(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a2(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a_("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a2(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a2(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a_("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a2(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a2(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a2(new H.a_("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a2(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a_("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a2(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.fw())
x=z.H(0,"Other").B(0,"Other")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b3("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b3("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b3("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b3("Link")
x=z.H(0,"Other")
x.d=x.a.b3("Other")
this.b=z},
q:{
ie:function(a,b){var z=new V.id()
z.e1(a,!0)
return z}}},
ih:{"^":"u:22;a",
$1:function(a){P.iG(C.m,new V.ig(this.a))}},
ig:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
fl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.ie("Test 033",!0)
y=W.cD(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fJ(H.c(["Test of a sterioscopic scene."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iE(x,!0,!0,!0,!1)
v=F.d3()
F.bG(v,null,null,1,1,1,0,0,1)
F.bG(v,null,null,1,1,0,1,0,3)
F.bG(v,null,null,1,1,0,0,1,2)
F.bG(v,null,null,1,1,-1,0,0,0)
F.bG(v,null,null,1,1,0,-1,0,0)
F.bG(v,null,null,1,1,0,0,-1,3)
v.ap()
u=E.ca(null,!0,null,"",v,null)
t=E.ca(null,!0,null,"",null,null)
for(s=-1.6;s<=1.7;s+=0.8)for(r=-1.6;r<=1.7;r+=0.8)for(q=-1.6;q<=1.7;q+=0.8){p=new V.ac(1,0,0,s,0,1,0,r,0,0,1,q,0,0,0,1).l(0,new V.ac(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
o=E.ca(null,!0,null,"",null,null)
z=new U.cG()
z.sK(0,p)
o.sdE(z)
z=o.y
n=H.y(z,0)
H.A(u,n)
m=[n]
if(z.aO(H.c([u],m))){l=z.a
k=l.length
C.a.h(l,u)
n=H.v(H.c([u],m),"$isd",[n],"$asd")
z=z.c
if(z!=null)z.$2(k,n)}z=t.y
n=H.y(z,0)
H.A(o,n)
m=[n]
if(z.aO(H.c([o],m))){l=z.a
k=l.length
C.a.h(l,o)
n=H.v(H.c([o],m),"$isd",[n],"$asd")
z=z.c
if(z!=null)z.$2(k,n)}}j=w.f.dB("../resources/diceColor")
i=new O.hs()
z=O.c6(V.ac)
i.e=z
z.aN(i.geA(),i.geB())
z=new O.aX(i,"emission")
z.c=C.b
z.f=new V.V(0,0,0)
i.f=z
z=new O.aX(i,"ambient")
z.c=C.b
z.f=new V.V(0,0,0)
i.r=z
z=new O.aX(i,"diffuse")
z.c=C.b
z.f=new V.V(0,0,0)
i.x=z
z=new O.aX(i,"invDiffuse")
z.c=C.b
z.f=new V.V(0,0,0)
i.y=z
z=new O.hy(i,"specular")
z.c=C.b
z.f=new V.V(0,0,0)
z.ch=100
i.z=z
z=new O.hv(i,"bump")
z.c=C.b
i.Q=z
i.ch=null
z=new O.aX(i,"reflect")
z.c=C.b
z.f=new V.V(0,0,0)
i.cx=z
z=new O.hx(i,"refract")
z.c=C.b
z.f=new V.V(0,0,0)
z.ch=1
i.cy=z
z=new O.hu(i,"alpha")
z.c=C.b
z.f=1
i.db=z
z=new D.hf()
z.bA(D.W)
z.e=H.c([],[D.c9])
z.f=H.c([],[D.hM])
z.r=H.c([],[D.il])
z.x=H.c([],[D.iA])
z.y=H.c([],[D.iB])
z.z=H.c([],[D.iC])
z.Q=null
z.ch=null
z.ct(z.gey(),z.geS(),z.geU())
i.dx=z
n=z.Q
if(n==null){n=D.E()
z.Q=n
z=n}else z=n
n={func:1,ret:-1,args:[D.l]}
m=H.b(i.gf0(),n)
C.a.h(z.a,m)
m=i.dx
z=m.ch
if(z==null){z=D.E()
m.ch=z}m=H.b(i.gaC(),n)
C.a.h(z.a,m)
i.dy=null
m=i.dx
z=U.bO(V.e7(-1,-1,-1,null))
m.h(0,D.dO(new V.V(1,0.9,0.9),z))
z=i.dx
m=U.bO(V.e7(1,1,2,null))
z.h(0,D.dO(new V.V(0.2,0.2,0.35),m))
z=i.r
z.sai(0,new V.V(0.2,0.2,0.2))
i.r.sb2(j)
z=i.x
z.sai(0,new V.V(0.8,0.8,0.8))
i.x.sb2(j)
z=i.z
z.sai(0,new V.V(0.7,0.7,0.7))
z=i.z
if(z.c===C.b){z.c=C.e
z.bz()
z.bS(100)
m=z.a
m.a=null
m.S(null)}z.bS(10)
i.Q.sb2(w.f.dB("../resources/diceBumpMap"))
h=U.cK(null)
z=w.r
m=new U.j0()
l=U.cF()
l.scr(0,!0)
l.scj(6.283185307179586)
l.scl(0)
l.sa3(0,0)
l.sck(100)
l.sN(0)
l.sc4(0.5)
m.b=l
l=l.gn()
l.toString
g=H.b(m.gay(),n)
C.a.h(l.a,g)
l=U.cF()
l.scr(0,!0)
l.scj(6.283185307179586)
l.scl(0)
l.sa3(0,0)
l.sck(100)
l.sN(0)
l.sc4(0.5)
m.c=l
C.a.h(l.gn().a,g)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
f=new X.au(!1,!1,!1)
e=m.d
m.d=f
l=[X.au]
g=new D.B("modifiers",e,f,m,l)
g.b=!0
m.L(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.B("invertX",g,!1,m,[P.a6])
g.b=!0
m.L(g)}g=m.r
if(g!==!1){m.r=!1
g=new D.B("invertY",g,!1,m,[P.a6])
g.b=!0
m.L(g)}m.aR(z)
h.h(0,m)
z=w.r
m=new U.j_()
g=U.cF()
g.scr(0,!0)
g.scj(6.283185307179586)
g.scl(0)
g.sa3(0,0)
g.sck(100)
g.sN(0)
g.sc4(0.2)
m.b=g
g=g.gn()
g.toString
d=H.b(m.gay(),n)
C.a.h(g.a,d)
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
f=new X.au(!0,!1,!1)
e=m.c
m.c=f
g=new D.B("modifiers",e,f,m,l)
g.b=!0
m.L(g)
m.aR(z)
h.h(0,m)
z=w.r
m=new U.j1()
m.c=0.01
m.d=0
m.e=0
f=new X.au(!1,!1,!1)
m.b=f
l=new D.B("modifiers",null,f,m,l)
l.b=!0
m.L(l)
m.aR(z)
h.h(0,m)
h.h(0,U.bO(V.cV(0,0,6)))
c=X.cI(!0,!0,!1,null,2000,null,0)
if(c.b){c.b=!1
z=new D.B("clearColor",!0,!1,c,[P.a6])
z.b=!0
c.ag(z)}z=w.f.h6("../resources/maskonaive",".jpg")
b=new M.fK()
b.saS(null)
b.sb_(0,null)
b.sb0(null)
m=E.ca(null,!0,null,"",null,null)
v=F.d3()
l=v.a
g=new V.G(-1,-1,1)
g=g.w(0,Math.sqrt(g.C(g)))
a=l.bc(new V.bs(1,2,4,6),new V.aL(1,0,0,1),new V.ad(-1,-1,0),new V.P(0,1),g,null)
l=v.a
g=new V.G(1,-1,1)
g=g.w(0,Math.sqrt(g.C(g)))
a0=l.bc(new V.bs(0,3,4,6),new V.aL(0,0,1,1),new V.ad(1,-1,0),new V.P(1,1),g,null)
l=v.a
g=new V.G(1,1,1)
g=g.w(0,Math.sqrt(g.C(g)))
a1=l.bc(new V.bs(0,2,5,6),new V.aL(0,1,0,1),new V.ad(1,1,0),new V.P(1,0),g,null)
l=v.a
g=new V.G(-1,1,1)
g=g.w(0,Math.sqrt(g.C(g)))
a2=l.bc(new V.bs(0,2,4,7),new V.aL(1,1,0,1),new V.ad(-1,1,0),new V.P(0,0),g,null)
v.d.fG(H.c([a,a0,a1,a2],[F.aD]))
v.ap()
m.scv(0,v)
b.d=m
b.e=null
m=new O.ii()
m.b=1.0471975511965976
e=m.c
m.c=z
z=z.e
l=H.b(m.gaC(),n)
C.a.h(z.a,l)
z=new D.B("boxTexture",e,m.c,m,[T.d7])
z.b=!0
m.S(z)
j=new V.V(1,1,1)
if(!J.O(m.d,j)){e=m.d
m.d=j
z=new D.B("boxColor",e,j,m,[V.V])
z.b=!0
m.S(z)}m.e=null
b.sb0(m)
a3=new M.fX()
z=O.c6(E.aC)
a3.d=z
z.aN(a3.geD(),a3.geE())
a3.e=null
a3.f=null
a3.r=null
a3.x=null
a3.saS(null)
a3.sb_(0,null)
a3.sb0(null)
a3.sb0(i)
a3.d.h(0,t)
z=M.aZ
m=H.c([b,a3],[z])
l=new M.iq()
g=U.bO(null)
l.a=g
d=U.bO(null)
l.b=d
a4=U.a1
a5=[a4]
g=U.cK(H.c([null,g],a5))
l.c=g
a5=U.cK(H.c([null,d],a5))
l.d=a5
l.e=X.cY(2000,1.0471975511965976,g,0.1)
l.f=X.cY(2000,1.0471975511965976,a5,0.1)
l.r=V.ck(0,0,0.5,1)
l.x=V.ck(0.5,0,0.5,1)
z=O.c6(z)
l.z=z
z.aN(l.gez(),l.geV())
l.z.aQ(0,m)
l.Q=0.1
l.ch=12
l.cx=null
l.cy=null
z=l.c.a
if(0>=z.length)return H.i(z,0)
if(!J.O(z[0],h)){z=l.c
g=z.a
if(0>=g.length)return H.i(g,0)
e=g[0]
z.U(0,0,h)
l.d.U(0,0,h)
a4=new D.B("cameraMover",e,h,l,[a4])
a4.b=!0
l.V(a4)}z=l.y
if(z!==c){if(z!=null){z=z.gn()
z.toString
g=H.b(l.gO(),n)
C.a.T(z.a,g)}e=l.y
l.y=c
z=c.gn()
z.toString
g=H.b(l.gO(),n)
C.a.h(z.a,g)
z=new D.B("target",e,l.y,l,[X.cm])
z.b=!0
l.V(z)}l.z.aQ(0,m)
l.Q=0.1
l.ch=12
a6=Math.atan2(0.1,12)
z=l.a
m=l.Q
if(typeof m!=="number")return m.I()
z.sK(0,V.cV(-m,0,0).l(0,V.cU(a6)))
l.b.sK(0,V.cV(l.Q,0,0).l(0,V.cU(-a6)))
z=w.d
if(z!==l){if(z!=null){z=z.gn()
z.toString
m=H.b(w.gcD(),n)
C.a.T(z.a,m)}w.d=l
z=l.gn()
z.toString
n=H.b(w.gcD(),n)
C.a.h(z.a,n)
w.e3()}V.l9(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.dU.prototype}if(typeof a=="string")return J.cN.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.c0=function(a){if(typeof a=="string")return J.cN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.dp=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.kS=function(a){if(typeof a=="number")return J.cf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.dc.prototype
return a}
J.c1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fs=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kS(a).a9(a,b)}
J.ft=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).j(a,b)}
J.fu=function(a,b,c,d){return J.c1(a).d_(a,b,c,d)}
J.cx=function(a,b,c){return J.c0(a).fN(a,b,c)}
J.dw=function(a,b){return J.dp(a).E(a,b)}
J.fv=function(a,b){return J.dp(a).M(a,b)}
J.aA=function(a){return J.J(a).gX(a)}
J.bN=function(a){return J.dp(a).gZ(a)}
J.bb=function(a){return J.c0(a).gk(a)}
J.a7=function(a){return J.J(a).i(a)}
I.ds=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cC.prototype
C.x=J.m.prototype
C.a=J.aV.prototype
C.y=J.dU.prototype
C.f=J.dV.prototype
C.z=J.dW.prototype
C.j=J.cf.prototype
C.h=J.cN.prototype
C.G=J.bS.prototype
C.I=H.hG.prototype
C.J=W.hH.prototype
C.p=J.hL.prototype
C.K=P.d0.prototype
C.l=J.dc.prototype
C.r=W.bD.prototype
C.t=W.je.prototype
C.u=new P.hJ()
C.v=new P.j3()
C.i=new P.k_()
C.b=new A.c7(0,"ColorSourceType.None")
C.e=new A.c7(1,"ColorSourceType.Solid")
C.d=new A.c7(2,"ColorSourceType.Texture2D")
C.c=new A.c7(3,"ColorSourceType.TextureCube")
C.m=new P.bf(0)
C.w=new P.bf(5e6)
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
C.H=H.c(I.ds([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.j2(!1)
$.as=0
$.bc=null
$.dz=null
$.dh=!1
$.fi=null
$.fc=null
$.fo=null
$.ct=null
$.cv=null
$.dq=null
$.b4=null
$.bI=null
$.bJ=null
$.di=!1
$.N=C.i
$.dM=null
$.dL=null
$.dK=null
$.dJ=null
$.n=V.hz()
$.ik="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ij="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eb=null
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
I.$lazy(y,x,w)}})(["dI","$get$dI",function(){return H.fh("_$dart_dartClosure")},"cO","$get$cO",function(){return H.fh("_$dart_js")},"es","$get$es",function(){return H.ax(H.cn({
toString:function(){return"$receiver$"}}))},"et","$get$et",function(){return H.ax(H.cn({$method$:null,
toString:function(){return"$receiver$"}}))},"eu","$get$eu",function(){return H.ax(H.cn(null))},"ev","$get$ev",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.ax(H.cn(void 0))},"eA","$get$eA",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ex","$get$ex",function(){return H.ax(H.ey(null))},"ew","$get$ew",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"eC","$get$eC",function(){return H.ax(H.ey(void 0))},"eB","$get$eB",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"de","$get$de",function(){return P.jf()},"bK","$get$bK",function(){return[]},"f6","$get$f6",function(){return P.hZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dH","$get$dH",function(){return{}},"eN","$get$eN",function(){return Z.am(0)},"eL","$get$eL",function(){return Z.am(511)},"ar","$get$ar",function(){return Z.am(1)},"aG","$get$aG",function(){return Z.am(2)},"aF","$get$aF",function(){return Z.am(4)},"aH","$get$aH",function(){return Z.am(8)},"aI","$get$aI",function(){return Z.am(16)},"bB","$get$bB",function(){return Z.am(32)},"bC","$get$bC",function(){return Z.am(64)},"eM","$get$eM",function(){return Z.am(96)},"b2","$get$b2",function(){return Z.am(128)},"aE","$get$aE",function(){return Z.am(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.I,args:[F.aj]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.C,[P.d,E.aC]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.o,args:[P.C]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[P.C,[P.d,D.W]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.C,[P.d,U.a1]]},{func:1,ret:-1,args:[P.C,[P.d,M.aZ]]},{func:1,ret:-1,args:[P.C,[P.d,V.ac]]},{func:1,ret:P.I,args:[W.a8]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a6,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[P.T]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.aq]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.a6,args:[P.w,P.w]},{func:1,ret:P.a6,args:[[P.d,D.W]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aD,P.w,P.w]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.I,args:[P.b_]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.lc(d||a)
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
Isolate.ds=a.ds
Isolate.dm=a.dm
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fl,[])
else N.fl([])})})()
//# sourceMappingURL=test.dart.js.map
