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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.db(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dc=function(){}
var dart=[["","",,H,{"^":"",lZ:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
di:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.df==null){H.kQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eD("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cI()]
if(v!=null)return v
v=H.kV(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cI(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gU:function(a){return H.bt(a)},
i:["dT",function(a){return"Instance of '"+H.aZ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h5:{"^":"m;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isa5:1},
dO:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isI:1},
cJ:{"^":"m;",
gU:function(a){return 0},
i:["dU",function(a){return String(a)}]},
hF:{"^":"cJ;"},
d2:{"^":"cJ;"},
bR:{"^":"cJ;",
i:function(a){var z=a[$.$get$dA()]
if(z==null)return this.dU(a)
return"JavaScript function for "+H.j(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscE:1},
aV:{"^":"m;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ae("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.r(P.ae("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
bT:function(a,b){var z,y
H.w(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ae("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bd(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Z(z,y,H.j(a[y]))
return z.join(b)},
h_:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bx:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ai(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcf:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h3())},
aS:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cF(a,"[","]")},
gY:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gU:function(a){return H.bt(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ae("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c2(b,"newLength",null))
if(b<0)throw H.h(P.ai(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.Z(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ae("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b>=a.length||b<0)throw H.h(H.aQ(a,b))
a[b]=c},
$isd:1,
$isf:1,
q:{
h4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ai(a,0,4294967295,"length",null))
return J.dL(new Array(a),b)},
dL:function(a,b){return J.bm(H.c(a,[b]))},
bm:function(a){H.bM(a)
a.fixed$length=Array
return a}}},
lY:{"^":"aV;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cc:{"^":"m;",
hu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ae(""+a+".toInt()"))},
cc:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ae(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ae(""+a+".round()"))},
dK:function(a,b){var z,y
if(b>20)throw H.h(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
dQ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ae("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b9:function(a,b){var z
if(a>0)z=this.f8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f8:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.h(H.aP(b))
return a<b},
$isv:1,
$isS:1},
dN:{"^":"cc;",$isA:1},
dM:{"^":"cc;"},
cH:{"^":"m;",
c1:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b<0)throw H.h(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.h(H.aQ(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.T(b)
if(typeof b!=="string")throw H.h(P.c2(b,null,null))
return a+b},
by:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cg(b,null,null))
if(b>c)throw H.h(P.cg(b,null,null))
if(c>a.length)throw H.h(P.cg(c,null,null))
return a.substring(b,c)},
cw:function(a,b){return this.by(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hb:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a8:function(a,b){return this.hb(a,b," ")},
fK:function(a,b,c){if(c>a.length)throw H.h(P.ai(c,0,a.length,null,null))
return H.fj(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise1:1,
$iso:1}}],["","",,H,{"^":"",
h3:function(){return new P.ig("No element")},
a_:{"^":"iP;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.c1(this.a,b)},
$aseE:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$asf:function(){return[P.A]}},
fP:{"^":"d;"},
dT:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bd(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hl:{"^":"d;a,b,$ti",
gY:function(a){return new H.hm(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dl(this.a,b))},
$asd:function(a,b){return[b]}},
hm:{"^":"cG;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascG:function(a,b){return[b]}},
j4:{"^":"d;a,b,$ti",
gY:function(a){return new H.j5(J.bN(this.a),this.b,this.$ti)}},
j5:{"^":"cG;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c9:{"^":"a;$ti"},
eE:{"^":"a;$ti"},
iP:{"^":"cd+eE;"}}],["","",,H,{"^":"",
kL:function(a){return init.types[H.Z(a)]},
kT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.h(H.aP(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isd2){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b6(w,0)===36)w=C.h.cw(w,1)
r=H.dg(H.bM(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e4:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hP:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aP(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b9(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aP(w))}return H.e4(z)},
e5:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aP(x))
if(x<0)throw H.h(H.aP(x))
if(x>65535)return H.hP(a)}return H.e4(a)},
hO:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b9(z,10))>>>0,56320|z&1023)}throw H.h(P.ai(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hN:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hL:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hH:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hI:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hK:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hM:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hJ:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aP(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.h(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.Z(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cg(b,"index",null)},
kH:function(a,b,c){if(a>c)return new P.cf(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cf(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aP:function(a){return new P.aB(!0,a,null,null)},
kC:function(a){if(typeof a!=="number")throw H.h(H.aP(a))
return a},
h:function(a){var z
if(a==null)a=new P.e0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fl})
z.name=""}else z.toString=H.fl
return z},
fl:function(){return J.a6(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bd(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b9(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cK(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e_(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$em()
u=$.$get$en()
t=$.$get$eo()
s=$.$get$ep()
r=$.$get$et()
q=$.$get$eu()
p=$.$get$er()
$.$get$eq()
o=$.$get$ew()
n=$.$get$ev()
m=v.a7(y)
if(m!=null)return z.$1(H.cK(H.T(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cK(H.T(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e_(H.T(y),m))}}return z.$1(new H.iO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eb()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eb()
return a},
b9:function(a){var z
if(a==null)return new H.eW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eW(a)},
kJ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
kS:function(a,b,c,d,e,f){H.k(a,"$iscE")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kS)
a.$identity=z
return z},
fB:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hS(z).r}else x=d
w=e?Object.create(new H.ih().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.F()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dv(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kL,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dq:H.cv
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dv(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fy:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dv:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fA(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fy(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.F()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.c3("self")
$.bc=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.F()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.c3("self")
$.bc=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fz:function(a,b,c,d){var z,y
z=H.cv
y=H.dq
switch(b?-1:a){case 0:throw H.h(H.i0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fA:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.c3("self")
$.bc=z}y=$.dp
if(y==null){y=H.c3("receiver")
$.dp=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fz(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aq
if(typeof y!=="number")return y.F()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.F()
$.aq=y+1
return new Function(z+y+"}")()},
db:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.bM(b))
H.Z(c)
y=!!J.J(d).$isf?J.bm(d):d
return H.fB(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ax(a,"String"))},
kY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ax(a,"num"))},
f9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ax(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ax(a,"int"))},
fh:function(a,b){throw H.h(H.ax(a,H.T(b).substring(3)))},
l_:function(a,b){var z=J.c_(b)
throw H.h(H.fx(a,z.by(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fh(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l_(a,b)},
bM:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.ax(a,"List"))},
kU:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fh(a,b)},
fa:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fa(J.J(a))
if(z==null)return!1
y=H.fd(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d7)return a
$.d7=!0
try{if(H.bZ(a,b))return a
z=H.c1(b)
y=H.ax(a,z)
throw H.h(y)}finally{$.d7=!1}},
dd:function(a,b){if(a!=null&&!H.da(a,b))H.r(H.ax(a,H.c1(b)))
return a},
f4:function(a){var z
if(a instanceof H.u){z=H.fa(J.J(a))
if(z!=null)return H.c1(z)
return"Closure"}return H.aZ(a)},
l4:function(a){throw H.h(new P.fH(H.T(a)))},
fb:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
mV:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aR(b))},
bL:function(a,b,c,d){var z
H.T(c)
H.Z(d)
z=H.ba(a["$as"+H.j(c)],H.aR(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.T(b)
H.Z(c)
z=H.ba(a["$as"+H.j(b)],H.aR(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aR(a)
return z==null?null:z[b]},
c1:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.w(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dg(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.ks(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
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
for(z=H.kI(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dg:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.bW("")
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
return H.f7(H.ba(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.T(b)
H.bM(c)
H.T(d)
if(a==null)return a
z=H.b6(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dg(c,0,null)
throw H.h(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f7:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mT:function(a,b,c){return a.apply(b,H.ba(J.J(b)["$as"+H.j(c)],H.aR(b)))},
fe:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fe(z)}return!1},
da:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fe(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.da(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.J(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.da(a,b))throw H.h(H.ax(a,H.c1(b)))
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
if('func' in c)return H.fd(a,b,c,d)
if('func' in a)return c.builtin$cls==="cE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.ba(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c1(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f7(H.ba(r,z),b,u,d)},
fd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kX(m,b,l,d)},
kX:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mU:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kV:function(a){var z,y,x,w,v,u
z=H.T($.fc.$1(a))
y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.f6.$2(a,z))
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
return u.i}if(v==="+")return H.fg(a,x)
if(v==="*")throw H.h(P.eD(z))
if(init.leafTags[z]===true){u=H.cr(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fg(a,x)},
fg:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.di(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cr:function(a){return J.di(a,!1,null,!!a.$isB)},
kW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cr(z)
else return J.di(z,c,null,null)},
kQ:function(){if(!0===$.df)return
$.df=!0
H.kR()},
kR:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cq=Object.create(null)
H.kM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fi.$1(v)
if(u!=null){t=H.kW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kM:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b5(C.A,H.b5(C.F,H.b5(C.n,H.b5(C.n,H.b5(C.E,H.b5(C.B,H.b5(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fc=new H.kN(v)
$.f6=new H.kO(u)
$.fi=new H.kP(t)},
b5:function(a,b){return a(b)||b},
fj:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fk:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hR:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iC:{"^":"a;a,b,c,d,e,f",
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
aw:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
es:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hC:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e_:function(a,b){return new H.hC(a,b==null?null:b.method)}}},
h8:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cK:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h8(a,y,z?null:b.receiver)}}},
iO:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l5:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eW:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aZ(this).trim()+"'"},
gdM:function(){return this},
$iscE:1,
gdM:function(){return this}},
ef:{"^":"u;"},
ih:{"^":"ef;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cu:{"^":"ef;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aA(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aZ(z)+"'")},
q:{
cv:function(a){return a.a},
dq:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iD:{"^":"Y;a",
i:function(a){return this.a},
q:{
ax:function(a,b){return new H.iD("TypeError: "+H.j(P.c8(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
fw:{"^":"Y;a",
i:function(a){return this.a},
q:{
fx:function(a,b){return new H.fw("CastError: "+H.j(P.c8(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
i0:function(a){return new H.i_(a)}}},
aW:{"^":"hj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gar:function(a){return new H.dS(this,[H.z(this,0)])},
d6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cM(y,b)}else return this.fY(b)},
fY:function(a){var z=this.d
if(z==null)return!1
return this.cd(this.bG(z,J.aA(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b7(w,b)
x=y==null?null:y.b
return x}else return this.fZ(b)},
fZ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bG(z,J.aA(a)&0x3ffffff)
x=this.cd(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bM()
this.b=z}this.cF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bM()
this.c=y}this.cF(y,b,c)}else{x=this.d
if(x==null){x=this.bM()
this.d=x}w=J.aA(b)&0x3ffffff
v=this.bG(x,w)
if(v==null)this.bR(x,w,[this.bN(b,c)])
else{u=this.cd(v,b)
if(u>=0)v[u].b=c
else v.push(this.bN(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bd(this))
z=z.c}},
cF:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b7(a,b)
if(z==null)this.bR(a,b,this.bN(b,c))
else z.b=c},
eo:function(){this.r=this.r+1&67108863},
bN:function(a,b){var z,y
z=new H.hb(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eo()
return z},
cd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.dV(this)},
b7:function(a,b){return a[b]},
bG:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cM:function(a,b){return this.b7(a,b)!=null},
bM:function(){var z=Object.create(null)
this.bR(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdR:1},
hb:{"^":"a;a,b,0c,0d"},
dS:{"^":"fP;a,$ti",
gk:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.hc(z,z.r,this.$ti)
y.c=z.e
return y}},
hc:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kN:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kO:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kP:{"^":"u:27;a",
$1:function(a){return this.a(H.T(a))}},
h6:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise1:1,
q:{
h7:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fY("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kI:function(a){return J.dL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){return a},
aO:function(a,b,c){H.bM(b)
if(a>>>0!==a||a>=c)throw H.h(H.aQ(b,a))},
kr:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kH(a,b,c))
return b},
hz:{"^":"m;",$ismC:1,"%":"DataView;ArrayBufferView;cP|eQ|eR|hy|eS|eT|aN"},
cP:{"^":"hz;",
gk:function(a){return a.length},
$isB:1,
$asB:I.dc},
hy:{"^":"eR;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
$asc9:function(){return[P.v]},
$ast:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aN:{"^":"eT;",
$asc9:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]}},
m8:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m9:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ma:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mb:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mc:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
md:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hA:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
bx:function(a,b,c){return new Uint8Array(a.subarray(b,H.kr(b,c,a.length)))},
"%":";Uint8Array"},
eQ:{"^":"cP+t;"},
eR:{"^":"eQ+c9;"},
eS:{"^":"cP+t;"},
eT:{"^":"eS+c9;"}}],["","",,P,{"^":"",
j7:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.j9(z),1)).observe(y,{childList:true})
return new P.j8(z,y,x)}else if(self.setImmediate!=null)return P.kA()
return P.kB()},
mI:[function(a){self.scheduleImmediate(H.b7(new P.ja(H.b(a,{func:1,ret:-1})),0))},"$1","kz",4,0,11],
mJ:[function(a){self.setImmediate(H.b7(new P.jb(H.b(a,{func:1,ret:-1})),0))},"$1","kA",4,0,11],
mK:[function(a){P.cZ(C.m,H.b(a,{func:1,ret:-1}))},"$1","kB",4,0,11],
cZ:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.a0(a.a,1000)
return P.k5(z<0?0:z,b)},
eh:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b_]})
z=C.f.a0(a.a,1000)
return P.k6(z<0?0:z,b)},
kv:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.ao]}))return b.hk(a,null,P.a,P.ao)
if(H.bZ(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ku:function(){var z,y
for(;z=$.b4,z!=null;){$.bJ=null
y=z.b
$.b4=y
if(y==null)$.bI=null
z.a.$0()}},
mS:[function(){$.d8=!0
try{P.ku()}finally{$.bJ=null
$.d8=!1
if($.b4!=null)$.$get$d4().$1(P.f8())}},"$0","f8",0,0,3],
f3:function(a){var z=new P.eK(H.b(a,{func:1,ret:-1}))
if($.b4==null){$.bI=z
$.b4=z
if(!$.d8)$.$get$d4().$1(P.f8())}else{$.bI.b=z
$.bI=z}},
ky:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.f3(a)
$.bJ=$.bI
return}y=new P.eK(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b4=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
l0:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.i===y){P.cn(null,null,C.i,a)
return}y.toString
P.cn(null,null,y,H.b(y.bX(a),z))},
iy:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.cZ(a,b)}return P.cZ(a,H.b(y.bX(b),z))},
iz:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.eh(a,b)}x=y.d2(b,P.b_)
$.N.toString
return P.eh(a,H.b(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.ky(new P.kw(z,e))},
f1:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f2:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kx:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cn:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bX(d):c.fI(d,-1)
P.f3(d)},
j9:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j8:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ja:{"^":"u:2;a",
$0:function(){this.a.$0()}},
jb:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eZ:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.k8(this,b),0),a)
else throw H.h(P.ae("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.k7(this,a,Date.now(),b),0),a)
else throw H.h(P.ae("Periodic timer."))},
$isb_:1,
q:{
k5:function(a,b){var z=new P.eZ(!0,0)
z.e4(a,b)
return z},
k6:function(a,b){var z=new P.eZ(!1,0)
z.e5(a,b)
return z}}},
k8:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k7:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dW(w,x)}z.c=y
this.d.$1(z)}},
b3:{"^":"a;0a,b,c,d,e,$ti",
h4:function(a){if(this.c!==6)return!0
return this.b.b.cp(H.b(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
fW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.ao]}))return H.dd(w.ho(z,a.a,a.b,null,y,P.ao),x)
else return H.dd(w.cp(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;cX:a<,b,0f0:c<,$ti",
dJ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kv(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.N,[c])
w=b==null?1:3
this.cG(new P.b3(x,w,a,b,[z,c]))
return x},
ht:function(a,b){return this.dJ(a,null,b)},
cG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb3")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaK")
z=y.a
if(z<4){y.cG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.b(new P.jp(this,a),{func:1,ret:-1}))}},
cT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb3")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaK")
y=u.a
if(y<4){u.cT(a)
return}this.a=y
this.c=u.c}z.a=this.b8(a)
y=this.b
y.toString
P.cn(null,null,y,H.b(new P.ju(z,this),{func:1,ret:-1}))}},
bP:function(){var z=H.k(this.c,"$isb3")
this.c=null
return this.b8(z)},
b8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.z(this,0)
H.dd(a,{futureOr:1,type:z})
y=this.$ti
x=H.b6(a,"$isbi",y,"$asbi")
if(x){z=H.b6(a,"$isaK",y,null)
if(z)P.eM(a,this)
else P.jq(a,this)}else{w=this.bP()
H.C(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bC:[function(a,b){var z
H.k(b,"$isao")
z=this.bP()
this.a=8
this.c=new P.af(a,b)
P.bE(this,z)},function(a){return this.bC(a,null)},"hA","$2","$1","gee",4,2,30],
$isbi:1,
q:{
jq:function(a,b){var z,y,x
b.a=1
try{a.dJ(new P.jr(b),new P.js(b),null)}catch(x){z=H.aT(x)
y=H.b9(x)
P.l0(new P.jt(b,z,y))}},
eM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaK")
if(z>=4){y=b.bP()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.k(b.c,"$isb3")
b.a=2
b.c=a
a.cT(y)}},
bE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isaf")
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
if(p){H.k(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jx(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jw(x,b,r).$0()}else if((y&2)!==0)new P.jv(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbi){if(y.a>=4){n=H.k(t.c,"$isb3")
t.c=null
b=t.b8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eM(y,t)
return}}m=b.b
n=H.k(m.c,"$isb3")
m.c=null
b=m.b8(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jp:{"^":"u:2;a,b",
$0:function(){P.bE(this.a,this.b)}},
ju:{"^":"u:2;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
jr:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
js:{"^":"u:34;a",
$2:function(a,b){this.a.bC(a,H.k(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jt:{"^":"u:2;a,b,c",
$0:function(){this.a.bC(this.b,this.c)}},
jx:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dI(H.b(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.b9(v)
if(this.d){w=H.k(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.J(z).$isbi){if(z instanceof P.aK&&z.gcX()>=4){if(z.gcX()===8){w=this.b
w.b=H.k(z.gf0(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ht(new P.jy(t),null)
w.a=!1}}},
jy:{"^":"u:36;a",
$1:function(a){return this.a}},
jw:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cp(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.b9(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jv:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isaf")
w=this.c
if(w.h4(z)&&w.e!=null){v=this.b
v.b=w.fW(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.b9(u)
w=H.k(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
eK:{"^":"a;a,0b"},
cV:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aK(0,$.N,[P.A])
z.a=0
this.h2(new P.ik(z,this),!0,new P.il(z,y),y.gee())
return y}},
ik:{"^":"u;a,b",
$1:function(a){H.C(a,H.az(this.b,"cV",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.az(this.b,"cV",0)]}}},
il:{"^":"u:2;a,b",
$0:function(){this.b.cJ(this.a.a)}},
ed:{"^":"a;$ti"},
ij:{"^":"a;"},
b_:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
kf:{"^":"a;",$ismH:1},
kw:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jS:{"^":"kf;",
hp:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.N){a.$0()
return}P.f1(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cm(null,null,this,z,H.k(y,"$isao"))}},
hq:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.i===$.N){a.$1(b)
return}P.f2(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cm(null,null,this,z,H.k(y,"$isao"))}},
fI:function(a,b){return new P.jU(this,H.b(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jT(this,H.b(a,{func:1,ret:-1}))},
d2:function(a,b){return new P.jV(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dI:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.i)return a.$0()
return P.f1(null,null,this,a,b)},
cp:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.i)return a.$1(b)
return P.f2(null,null,this,a,b,c,d)},
ho:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.i)return a.$2(b,c)
return P.kx(null,null,this,a,b,c,d,e,f)},
hk:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jU:{"^":"u;a,b,c",
$0:function(){return this.a.dI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jT:{"^":"u:3;a,b",
$0:function(){return this.a.hp(this.b)}},
jV:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hq(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
he:function(a,b,c){H.bM(a)
return H.w(H.kJ(a,new H.aW(0,0,[b,c])),"$isdR",[b,c],"$asdR")},
hd:function(a,b){return new H.aW(0,0,[a,b])},
hf:function(a,b,c,d){return new P.jE(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.d9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.kt(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ee(b,H.kU(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cF:function(a,b,c){var z,y,x
if(P.d9(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.ee(x.gay(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d9:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
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
dV:function(a){var z,y,x
z={}
if(P.d9(a))return"{...}"
y=new P.bW("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.fp(a,new P.hk(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jz;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.eP(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d6()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d6()
this.c=y}return this.cH(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d6()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.bB(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bB(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cU(this.c,b)
else return this.eW(0,b)},
eW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.el(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.cZ(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$isd5")!=null)return!1
a[b]=this.bB(b)
return!0},
cU:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd5")
if(z==null)return!1
this.cZ(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
bB:function(a){var z,y
z=new P.d5(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
cZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.aA(a)&0x3ffffff},
el:function(a,b){return a[this.cK(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
q:{
d6:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d5:{"^":"a;a,0b,0c"},
jF:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
q:{
eP:function(a,b,c){var z=new P.jF(a,b,[c])
z.c=a.e
return z}}},
jz:{"^":"i1;"},
cd:{"^":"jG;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gY:function(a){return new H.dT(a,this.gk(a),0,[H.bL(this,a,"t",0)])},
E:function(a,b){return this.j(a,b)},
hw:function(a,b){var z,y,x
z=H.c([],[H.bL(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.Z(z,y,this.j(a,y));++y}return z},
hv:function(a){return this.hw(a,!0)},
i:function(a){return P.cF(a,"[","]")}},
hj:{"^":"ab;"},
hk:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bL(this,a,"ab",0),H.bL(this,a,"ab",1)]})
for(z=J.bN(this.gar(a));z.D();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.bb(this.gar(a))},
i:function(a){return P.dV(a)},
$isa3:1},
i3:{"^":"a;$ti",
i:function(a){return P.cF(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dm("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=P.eP(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
i1:{"^":"i3;"},
jG:{"^":"a+t;"}}],["","",,P,{"^":"",cz:{"^":"a;$ti"},dy:{"^":"ij;$ti"},fR:{"^":"cz;",
$ascz:function(){return[P.o,[P.f,P.A]]}},iV:{"^":"fR;a"},iW:{"^":"dy;",
fM:function(a,b,c){var z,y,x,w
z=a.length
P.e6(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ke(0,0,x)
if(w.ek(a,b,z)!==z)w.d_(C.h.c1(a,z-1),0)
return C.I.bx(x,0,w.b)},
fL:function(a){return this.fM(a,0,null)},
$asdy:function(){return[P.o,[P.f,P.A]]}},ke:{"^":"a;a,b,c",
d_:function(a,b){var z,y,x,w,v
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
ek:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.c1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b6(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d_(w,C.h.b6(a,u)))x=u}else if(w<=2047){v=this.b
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
fT:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aZ(a)+"'"},
hg:function(a,b,c,d){var z,y
H.C(b,d)
z=J.h4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.w(z,"$isf",[d],"$asf")},
hh:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gY(a);x.D();)C.a.h(y,H.C(x.gO(x),c))
if(b)return y
return H.w(J.bm(y),"$isf",z,"$asf")},
cW:function(a,b,c){var z,y
z=P.A
H.w(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.w(a,"$isaV",[z],"$asaV")
y=a.length
c=P.e6(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.e5(z?C.a.bx(a,b,c):a)}return P.im(a,b,c)},
im:function(a,b,c){var z,y,x
H.w(a,"$isd",[P.A],"$asd")
z=J.bN(a)
for(y=0;y<b;++y)if(!z.D())throw H.h(P.ai(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gO(z))
return H.e5(x)},
hT:function(a,b,c){return new H.h6(a,H.h7(a,!1,!0,!1))},
kd:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isf",[P.A],"$asf")
if(c===C.q){z=$.$get$f0().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fL(H.C(b,H.az(c,"cz",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hO(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
q:function(a){return new P.eL(a)},
dk:function(a){H.kZ(a)},
a5:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.f.b9(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fI(H.hN(this))
y=P.bO(H.hL(this))
x=P.bO(H.hH(this))
w=P.bO(H.hI(this))
v=P.bO(H.hK(this))
u=P.bO(H.hM(this))
t=P.fJ(H.hJ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fI:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bO:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"S;"},
"+double":0,
bf:{"^":"a;a",
a9:function(a,b){return C.f.a9(this.a,H.k(b,"$isbf").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fO()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.f.a0(y,6e7)%60)
w=z.$1(C.f.a0(y,1e6)%60)
v=new P.fN().$1(y%1e6)
return""+C.f.a0(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dG:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fN:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fO:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
e0:{"^":"Y;",
i:function(a){return"Throw of null."}},
aB:{"^":"Y;a,b,c,d",
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbE()+y+x
if(!this.a)return w
v=this.gbD()
u=P.c8(this.b)
return w+v+": "+H.j(u)},
q:{
fr:function(a){return new P.aB(!1,null,null,a)},
c2:function(a,b,c){return new P.aB(!0,a,b,c)},
dm:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
cf:{"^":"aB;e,f,a,b,c,d",
gbE:function(){return"RangeError"},
gbD:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cg:function(a,b,c){return new P.cf(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.cf(b,c,!0,a,d,"Invalid value")},
e6:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ai(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ai(b,a,c,"end",f))
return b}return c}}},
h1:{"^":"aB;e,k:f>,a,b,c,d",
gbE:function(){return"RangeError"},
gbD:function(){if(J.fm(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bb(b))
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iQ:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ae:function(a){return new P.iQ(a)}}},
iN:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eD:function(a){return new P.iN(a)}}},
ig:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fE:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c8(z))+"."},
q:{
bd:function(a){return new P.fE(a)}}},
hD:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
eb:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fH:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eL:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fY:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.by(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"S;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gY(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dm("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h2(this,"(",")")}},
cG:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a3:{"^":"a;$ti"},
I:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.aZ(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
o:{"^":"a;",$ise1:1},
"+String":0,
bW:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
ee:function(a,b,c){var z=J.bN(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.D())}else{a+=H.j(z.gO(z))
for(;z.D();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cy:function(a,b){var z=document.createElement("canvas")
return z},
fQ:function(a){H.k(a,"$isa2")
return"wheel"},
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eO:function(a,b,c,d){var z,y
z=W.ck(W.ck(W.ck(W.ck(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f5:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.i)return a
return z.d2(a,b)},
bl:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l7:{"^":"cS;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
l8:{"^":"m;0k:length=","%":"AccessibleNodeList"},
l9:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
la:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fv:{"^":"m;","%":";Blob"},
cx:{"^":"bl;",
bv:function(a,b,c){if(c!=null)return a.getContext(b,P.kD(c,null))
return a.getContext(b)},
dO:function(a,b){return this.bv(a,b,null)},
$iscx:1,
"%":"HTMLCanvasElement"},
dt:{"^":"m;",$isdt:1,"%":"CanvasRenderingContext2D"},
lg:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
li:{"^":"c6;0k:length=","%":"CSSPerspective"},
lj:{"^":"cC;0n:x=,0p:y=","%":"CSSPositionValue"},
lk:{"^":"c6;0n:x=,0p:y=","%":"CSSRotation"},
be:{"^":"m;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ll:{"^":"c6;0n:x=,0p:y=","%":"CSSScale"},
lm:{"^":"jf;0k:length=",
dP:function(a,b){var z=a.getPropertyValue(this.eb(a,b))
return z==null?"":z},
eb:function(a,b){var z,y
z=$.$get$dz()
y=z[b]
if(typeof y==="string")return y
y=this.f9(a,b)
z[b]=y
return y},
f9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fK()+b
if(z in a)return z
return b},
gbY:function(a){return a.bottom},
gah:function(a){return a.height},
gaK:function(a){return a.left},
gaY:function(a){return a.right},
gb2:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fG:{"^":"a;",
gaK:function(a){return this.dP(a,"left")}},
cC:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c6:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
ln:{"^":"cC;0k:length=","%":"CSSTransformValue"},
lo:{"^":"c6;0n:x=,0p:y=","%":"CSSTranslation"},
lp:{"^":"cC;0k:length=","%":"CSSUnparsedValue"},
lq:{"^":"m;0k:length=","%":"DataTransferItemList"},
lr:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
ls:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lt:{"^":"fL;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fL:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lu:{"^":"jh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.aa,P.S]]},
$ast:function(){return[[P.aa,P.S]]},
$isd:1,
$asd:function(){return[[P.aa,P.S]]},
$isf:1,
$asf:function(){return[[P.aa,P.S]]},
$asy:function(){return[[P.aa,P.S]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gai(a))+" x "+H.j(this.gah(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaK(b)&&a.top===z.gb2(b)&&this.gai(a)===z.gai(b)&&this.gah(a)===z.gah(b)},
gU:function(a){return W.eO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF)},
gbY:function(a){return a.bottom},
gah:function(a){return a.height},
gaK:function(a){return a.left},
gaY:function(a){return a.right},
gb2:function(a){return a.top},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.S]},
"%":";DOMRectReadOnly"},
lv:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.o]},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"DOMStringList"},
lw:{"^":"m;0k:length=","%":"DOMTokenList"},
je:{"^":"cd;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.hv(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"K;",
gd4:function(a){return new W.je(a,a.children)},
gbd:function(a){return P.hQ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.S)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a7:{"^":"m;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
d0:["dS",function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.b7(H.b(c,{func:1,args:[W.a7]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eU|eV|eX|eY"},
bh:{"^":"fv;",$isbh:1,"%":"File"},
lP:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"FileList"},
lQ:{"^":"a2;0k:length=","%":"FileWriter"},
lT:{"^":"bl;0k:length=","%":"HTMLFormElement"},
bj:{"^":"m;",$isbj:1,"%":"Gamepad"},
lU:{"^":"cS;0n:x=,0p:y=","%":"Gyroscope"},
lV:{"^":"m;0k:length=","%":"History"},
lW:{"^":"jB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ca:{"^":"m;0d8:data=",$isca:1,"%":"ImageData"},
dK:{"^":"bl;",$isdK:1,"%":"HTMLImageElement"},
bn:{"^":"d_;",$isbn:1,"%":"KeyboardEvent"},
m0:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
m1:{"^":"cS;0n:x=,0p:y=","%":"Magnetometer"},
m3:{"^":"m;0k:length=","%":"MediaList"},
m4:{"^":"a2;",
d0:function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.dS(a,b,c,!1)},
"%":"MessagePort"},
m5:{"^":"jH;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hv(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hv:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m6:{"^":"jI;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hw(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hw:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"m;",$isbo:1,"%":"MimeType"},
m7:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"MimeTypeArray"},
at:{"^":"d_;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jd:{"^":"cd;a",
gY:function(a){var z=this.a.childNodes
return new W.dI(z,z.length,-1,[H.bL(C.J,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a2;",
i:function(a){var z=a.nodeValue
return z==null?this.dT(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hB:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
br:{"^":"m;0k:length=",$isbr:1,"%":"Plugin"},
mh:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"PluginArray"},
mm:{"^":"jW;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hZ(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hZ:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mn:{"^":"bl;0k:length=","%":"HTMLSelectElement"},
cS:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a2;",$isbu:1,"%":"SourceBuffer"},
mo:{"^":"eV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"SourceBufferList"},
bv:{"^":"m;",$isbv:1,"%":"SpeechGrammar"},
mp:{"^":"jY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"m;0k:length=",$isbw:1,"%":"SpeechRecognitionResult"},
mr:{"^":"k0;",
j:function(a,b){return a.getItem(H.T(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.ii(z))
return z},
gk:function(a){return a.length},
$asab:function(){return[P.o,P.o]},
$isa3:1,
$asa3:function(){return[P.o,P.o]},
"%":"Storage"},
ii:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"a2;",$isby:1,"%":"TextTrack"},
bz:{"^":"a2;",$isbz:1,"%":"TextTrackCue|VTTCue"},
mw:{"^":"k4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"TextTrackCueList"},
mx:{"^":"eY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.by]},
$ast:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"TextTrackList"},
my:{"^":"m;0k:length=","%":"TimeRanges"},
bA:{"^":"m;",$isbA:1,"%":"Touch"},
b0:{"^":"d_;",$isb0:1,"%":"TouchEvent"},
mz:{"^":"ka;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TouchList"},
mA:{"^":"m;0k:length=","%":"TrackDefaultList"},
d_:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mD:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mF:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mG:{"^":"a2;0k:length=","%":"VideoTrackList"},
bD:{"^":"at;",
gfQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ae("deltaY is not supported"))},
gfP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ae("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
j6:{"^":"a2;",
eX:function(a,b){return a.requestAnimationFrame(H.b7(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mL:{"^":"kh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$ast:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$asy:function(){return[W.be]},
"%":"CSSRuleList"},
mM:{"^":"fM;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaK(b)&&a.top===z.gb2(b)&&a.width===z.gai(b)&&a.height===z.gah(b)},
gU:function(a){return W.eO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mO:{"^":"kj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"GamepadList"},
mP:{"^":"kl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mQ:{"^":"kn;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
mR:{"^":"kp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"StyleSheetList"},
jk:{"^":"cV;a,b,c,$ti",
h2:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
mN:{"^":"jk;a,b,c,$ti"},
jl:{"^":"ed;a,b,c,d,e,$ti",
fd:function(){var z=this.d
if(z!=null&&this.a<=0)J.fo(this.b,this.c,z,!1)},
q:{
X:function(a,b,c,d,e){var z=c==null?null:W.f5(new W.jm(c),W.a7)
z=new W.jl(0,a,b,z,!1,[e])
z.fd()
return z}}},
jm:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa7"))}},
y:{"^":"a;$ti",
gY:function(a){return new W.dI(a,this.gk(a),-1,[H.bL(this,a,"y",0)])}},
dI:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fn(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jf:{"^":"m+fG;"},
jg:{"^":"m+t;"},
jh:{"^":"jg+y;"},
ji:{"^":"m+t;"},
jj:{"^":"ji+y;"},
jn:{"^":"m+t;"},
jo:{"^":"jn+y;"},
jA:{"^":"m+t;"},
jB:{"^":"jA+y;"},
jH:{"^":"m+ab;"},
jI:{"^":"m+ab;"},
jJ:{"^":"m+t;"},
jK:{"^":"jJ+y;"},
jL:{"^":"m+t;"},
jM:{"^":"jL+y;"},
jP:{"^":"m+t;"},
jQ:{"^":"jP+y;"},
jW:{"^":"m+ab;"},
eU:{"^":"a2+t;"},
eV:{"^":"eU+y;"},
jX:{"^":"m+t;"},
jY:{"^":"jX+y;"},
k0:{"^":"m+ab;"},
k3:{"^":"m+t;"},
k4:{"^":"k3+y;"},
eX:{"^":"a2+t;"},
eY:{"^":"eX+y;"},
k9:{"^":"m+t;"},
ka:{"^":"k9+y;"},
kg:{"^":"m+t;"},
kh:{"^":"kg+y;"},
ki:{"^":"m+t;"},
kj:{"^":"ki+y;"},
kk:{"^":"m+t;"},
kl:{"^":"kk+y;"},
km:{"^":"m+t;"},
kn:{"^":"km+y;"},
ko:{"^":"m+t;"},
kp:{"^":"ko+y;"}}],["","",,P,{"^":"",
kG:function(a){var z,y
z=J.J(a)
if(!!z.$isca){y=z.gd8(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f_(a.data,a.height,a.width)},
kF:function(a){if(a instanceof P.f_)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.hd(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.Z(0,v,a[v])}return z},
kD:function(a,b){var z={}
a.L(0,new P.kE(z))
return z},
dF:function(){var z=$.dE
if(z==null){z=J.cs(window.navigator.userAgent,"Opera",0)
$.dE=z}return z},
fK:function(){var z,y
z=$.dB
if(z!=null)return z
y=$.dC
if(y==null){y=J.cs(window.navigator.userAgent,"Firefox",0)
$.dC=y}if(y)z="-moz-"
else{y=$.dD
if(y==null){y=!P.dF()&&J.cs(window.navigator.userAgent,"Trident/",0)
$.dD=y}if(y)z="-ms-"
else z=P.dF()?"-o-":"-webkit-"}$.dB=z
return z},
f_:{"^":"a;d8:a>,b,c",$isca:1},
kE:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fV:{"^":"cd;a,b",
gbI:function(){var z,y,x
z=this.b
y=H.az(z,"t",0)
x=W.a0
return new H.hl(new H.j4(z,H.b(new P.fW(),{func:1,ret:P.a5,args:[y]}),[y]),H.b(new P.fX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bb(this.gbI().a)},
j:function(a,b){var z=this.gbI()
return z.b.$1(J.dl(z.a,b))},
gY:function(a){var z=P.hh(this.gbI(),!1,W.a0)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
fW:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa0}},
fX:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bV:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b6(b,"$isbV",[P.S],null)
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.aA(this.a)
y=J.aA(this.b)
return P.eN(P.bF(P.bF(0,z),y))}},
jR:{"^":"a;$ti",
gaY:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbY:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gaK(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaY(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbY(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aA(z)
x=this.b
w=J.aA(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.eN(P.bF(P.bF(P.bF(P.bF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d7:function(a,b){var z,y
H.w(b,"$isbV",[P.S],"$asbV")
z=b.a
y=this.a
if(typeof z!=="number")return z.dN()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dN()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"jR;aK:a>,b2:b>,ai:c>,ah:d>,$ti",q:{
hQ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",lx:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},ly:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lz:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lA:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},lB:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lC:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lD:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lE:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},lF:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lG:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},lH:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},lI:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lJ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lK:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lL:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lM:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lN:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},lO:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lR:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},lS:{"^":"bk;0n:x=,0p:y=","%":"SVGForeignObjectElement"},h_:{"^":"bk;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bk:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lX:{"^":"bk;0n:x=,0p:y=","%":"SVGImageElement"},bS:{"^":"m;",$isbS:1,"%":"SVGLength"},m_:{"^":"jD;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$isf:1,
$asf:function(){return[P.bS]},
$asy:function(){return[P.bS]},
"%":"SVGLengthList"},m2:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bU:{"^":"m;",$isbU:1,"%":"SVGNumber"},me:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGNumberList"},mg:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},mi:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},mj:{"^":"m;0k:length=","%":"SVGPointList"},mk:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},ml:{"^":"h_;0n:x=,0p:y=","%":"SVGRectElement"},ms:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"SVGStringList"},Q:{"^":"a0;",
gd4:function(a){return new P.fV(a,new W.jd(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mt:{"^":"bk;0n:x=,0p:y=","%":"SVGSVGElement"},io:{"^":"bk;","%":"SVGTextPathElement;SVGTextContentElement"},mv:{"^":"io;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bY:{"^":"m;",$isbY:1,"%":"SVGTransform"},mB:{"^":"kc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$isf:1,
$asf:function(){return[P.bY]},
$asy:function(){return[P.bY]},
"%":"SVGTransformList"},mE:{"^":"bk;0n:x=,0p:y=","%":"SVGUseElement"},jC:{"^":"m+t;"},jD:{"^":"jC+y;"},jN:{"^":"m+t;"},jO:{"^":"jN+y;"},k1:{"^":"m+t;"},k2:{"^":"k1+y;"},kb:{"^":"m+t;"},kc:{"^":"kb+y;"}}],["","",,P,{"^":"",lb:{"^":"m;0k:length=","%":"AudioBuffer"},lc:{"^":"jc;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new P.ft(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"AudioParamMap"},ft:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},ld:{"^":"a2;0k:length=","%":"AudioTrackList"},fu:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mf:{"^":"fu;0k:length=","%":"OfflineAudioContext"},jc:{"^":"m+ab;"}}],["","",,P,{"^":"",cR:{"^":"m;",
hs:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kF(g))
return}if(!!z.$isdK)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fr("Incorrect number or type of arguments"))},
hr:function(a,b,c,d,e,f,g){return this.hs(a,b,c,d,e,f,g,null,null,null)},
$iscR:1,
"%":"WebGLRenderingContext"},ip:{"^":"m;",$isip:1,"%":"WebGLTexture"},iL:{"^":"m;",$isiL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mq:{"^":"k_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aL(a.item(b))},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$isf:1,
$asf:function(){return[[P.a3,,,]]},
$asy:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jZ:{"^":"m+t;"},k_:{"^":"jZ+y;"}}],["","",,O,{"^":"",ag:{"^":"a;0a,0b,0c,0d,$ti",
b5:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
ct:function(a,b,c){var z=H.az(this,"ag",0)
H.b(b,{func:1,ret:P.a5,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aO:function(a,b){return this.ct(a,null,b)},
cS:function(a){var z
H.w(a,"$isd",[H.az(this,"ag",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cC:function(a,b){var z
H.w(b,"$isd",[H.az(this,"ag",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"ag",0)
H.C(b,z)
z=[z]
if(this.cS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cC(x,H.c([b],z))}},
bT:function(a,b){var z,y
H.w(b,"$isd",[H.az(this,"ag",0)],"$asd")
if(this.cS(b)){z=this.a
y=z.length
C.a.bT(z,b)
this.cC(y,b)}},
$isd:1,
q:{
cA:function(a){var z=new O.ag([a])
z.b5(a)
return z}}},cN:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e0:function(a){var z=this.b
if(!(z==null))z.v(a)},
av:function(){return this.e0(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gcf(z)
else return V.aY()},
bs:function(a){var z=this.a
if(a==null)C.a.h(z,V.aY())
else C.a.h(z,a)
this.av()},
as:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",ct:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a_:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbw:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.S(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.D("shape",z,this.c,this,[F.e9])
w.b=!0
this.aL(w)}},
af:function(a,b){var z
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.af(0,b)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gV(z))
z.av()
a.co(this.f)
z=a.dy
y=(z&&C.a).gcf(z)
if(y!=null&&this.d!=null)y.dH(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
a.cn()
a.dx.as()},
gt:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
aL:function(a){var z=this.z
if(!(z==null))z.v(a)},
a1:function(){return this.aL(null)},
ha:[function(a){H.k(a,"$isl")
this.e=null
this.aL(a)},function(){return this.ha(null)},"ih","$1","$0","gdG",0,2,0],
h8:[function(a){this.aL(H.k(a,"$isl"))},function(){return this.h8(null)},"ie","$1","$0","gdF",0,2,0],
ic:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gh7",8,0,8],
ig:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.S(t.a,y)}}this.a1()},"$2","gh9",8,0,8],
$isau:1,
q:{
dH:function(a,b,c,d,e,f){var z,y
z=new E.aC()
z.a=d
z.b=!0
y=O.cA(E.aC)
z.y=y
y.aO(z.gh7(),z.gh9())
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
z.sbw(0,e)
return z}}},hU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dY:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cN()
y=[V.aD]
z.a=H.c([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hW(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cN()
z.a=H.c([],y)
v=z.gt()
v.toString
x=H.b(new E.hX(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cN()
z.a=H.c([],y)
y=z.gt()
y.toString
w=H.b(new E.hY(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bX])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.o,A.cT])},
ghj:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.l(0,y.gV(y))
this.z=y
z=y}return z},
co:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcf(z):a;(z&&C.a).h(z,y)},
cn:function(){var z=this.dy
if(z.length>1)z.pop()},
d1:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d6(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Z(0,z,a)},
q:{
hV:function(a,b){var z=new E.hU(a,b)
z.dY(a,b)
return z}}},hW:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hX:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hY:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a_:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e2:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.hm()},function(){return this.e2(null)},"e1","$1","$0","gcD",0,2,0],
gfV:function(){var z,y,x
z=Date.now()
y=C.f.a0(P.dG(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
cV:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.cc(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cc(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hm:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.ix(this),{func:1,ret:-1,args:[P.S]})
C.t.ej(z)
C.t.eX(z,W.f5(y,P.S))}},
hl:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cV()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dG(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.av()
w=x.db
C.a.sk(w.a,0)
w.av()
w=x.dx
C.a.sk(w.a,0)
w.av()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a4(this.e)}}catch(v){z=H.aT(v)
y=H.b9(v)
P.dk("Error: "+H.j(z))
P.dk("Stack: "+H.j(y))
throw H.h(z)}},
q:{
iw:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscx)return E.eg(a,!0,!0,!0,!1)
y=W.cy(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd4(a).h(0,y)
w=E.eg(y,!0,!0,!0,!1)
w.a=a
return w},
eg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iv()
y=P.he(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bv(a,"webgl",y)
x=H.k(x==null?C.k.bv(a,"experimental-webgl",y):x,"$iscR")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hV(x,a)
w=new T.iq(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iR(a)
v=new X.h9()
v.c=new X.as(!1,!1,!1)
v.d=P.hf(null,null,null,P.A)
w.b=v
v=new X.hx(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hi(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iB(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.ed,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.b(w.geB(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.b(w.geE(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.b(w.gey(),q),!1,r))
v=w.z
p=W.bn
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.b(w.geG(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.b(w.geF(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.b(w.geJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.b(w.geL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.b(w.geK(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.X(a,H.T(W.fQ(a)),H.b(w.geM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.b(w.geC(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.b(w.geD(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.b(w.geN(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.b(w.geV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.b(w.geT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.b(w.geU(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.cV()
return z}}},ix:{"^":"u:28;a",
$1:function(a){var z
H.kY(a)
z=this.a
if(z.z){z.z=!1
z.hl()}}}}],["","",,Z,{"^":"",eI:{"^":"a;a,b",q:{
d3:function(a,b,c){var z
H.w(c,"$isf",[P.A],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.eI(b,z)}}},dr:{"^":"ct;a,b,c,d,e",
T:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.q('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eJ:{"^":"a;a",$isle:1},cw:{"^":"a;a,0b,c,d",
aq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
T:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].T(a)},
au:function(a){var z,y,x
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismu:1},cb:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aZ(this.c)+"'")+"]"}},b1:{"^":"a;a",
gcv:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$b2().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
fH:function(a){var z,y,x
z=$.$get$ap()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eH()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$ap().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
ak:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",du:{"^":"a;"},aU:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fU(z))
return x!==0},
fR:function(){return this.v(null)},
hn:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
at:function(a){return this.hn(a,!0,!1)},
q:{
E:function(){var z=new D.aU()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fU:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bP:{"^":"l;c,d,a,0b,$ti"},bQ:{"^":"l;c,d,a,0b,$ti"},D:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ds:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"lf<"}},dP:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dQ:{"^":"l;c,a,0b"},h9:{"^":"a;0a,0b,0c,0d",
hg:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dQ(a,this)
y.b=!0
return z.v(y)},
hc:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dQ(a,this)
y.b=!0
return z.v(y)}},dU:{"^":"ce;x,y,c,d,e,a,0b"},hi:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
am:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaE()
s=new X.bp(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cm:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aW:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dL()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.am(a,b))
return!0},
hh:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cO(new V.P(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.v(w)
return!0},
eI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.dU(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},as:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
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
return z+(this.c?"Shift+":"")}},bp:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},hx:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bF:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaE()
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
z.v(this.bF(a,b,!0))
return!0},
aW:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dL()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bF(a,b,!0))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bF(a,b,!1))
return!0},
hi:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cO(new V.P(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.v(x)
return!0},
gda:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbu:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdE:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cO:{"^":"ce;x,c,d,e,a,0b"},ce:{"^":"l;"},ek:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},iB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
am:function(a,b){var z,y,x,w
H.w(a,"$isf",[V.O],"$asf")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaE()
w=new X.ek(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hf:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
hd:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
he:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.v(this.am(a,!1))
return!0}},iR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.e8(0,0,(z&&C.k).gbd(z).c,C.k.gbd(z).d)},
cN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.as(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
an:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.O(y-w,x-v)},
aP:function(a){return new V.P(a.movementX,a.movementY)},
bO:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.ae(u.pageX)
C.j.ae(u.pageY)
s=z.left
C.j.ae(u.pageX)
C.a.h(y,new V.O(t-s,C.j.ae(u.pageY)-z.top))}return y},
ak:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ds(z,new X.as(y,a.altKey,a.shiftKey))},
hP:[function(a){this.f=!0},"$1","geE",4,0,4],
hJ:[function(a){this.f=!1},"$1","gey",4,0,4],
hM:[function(a){if(this.f)a.preventDefault()},"$1","geB",4,0,4],
hR:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cN(a)
if(this.b.hg(z))a.preventDefault()},"$1","geG",4,0,16],
hQ:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cN(a)
if(this.b.hc(z))a.preventDefault()},"$1","geF",4,0,16],
hT:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.ak(a)
x=this.aP(a)
if(this.d.cm(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ak(a)
w=this.an(a)
if(this.c.cm(y,w))a.preventDefault()},"$1","geJ",4,0,5],
hV:[function(a){var z,y,x
H.k(a,"$isat")
this.aD(a)
z=this.ak(a)
if(this.x){y=this.aP(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aW(z,x))a.preventDefault()},"$1","geL",4,0,5],
hO:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d7(0,new P.bV(a.clientX,a.clientY,[P.S]))){this.aD(a)
y=this.ak(a)
if(this.x){x=this.aP(a)
if(this.d.aW(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aW(y,w))a.preventDefault()}},"$1","geD",4,0,5],
hU:[function(a){var z,y,x
H.k(a,"$isat")
this.aD(a)
z=this.ak(a)
if(this.x){y=this.aP(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geK",4,0,5],
hN:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d7(0,new P.bV(a.clientX,a.clientY,[P.S]))){this.aD(a)
y=this.ak(a)
if(this.x){x=this.aP(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geC",4,0,5],
hW:[function(a){var z,y
H.k(a,"$isbD")
this.aD(a)
z=new V.P((a&&C.r).gfP(a),C.r.gfQ(a)).w(0,180)
if(this.x){if(this.d.hh(z))a.preventDefault()
return}if(this.r)return
y=this.an(a)
if(this.c.hi(z,y))a.preventDefault()},"$1","geM",4,0,31],
hX:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ak(this.y)
v=this.an(this.y)
this.d.eI(w,v,x)}},"$1","geN",4,0,4],
i4:[function(a){var z
H.k(a,"$isb0")
this.a.focus()
this.f=!0
this.bS(a)
z=this.bO(a)
if(this.e.hf(z))a.preventDefault()},"$1","geV",4,0,10],
i2:[function(a){var z
H.k(a,"$isb0")
this.bS(a)
z=this.bO(a)
if(this.e.hd(z))a.preventDefault()},"$1","geT",4,0,10],
i3:[function(a){var z
H.k(a,"$isb0")
this.bS(a)
z=this.bO(a)
if(this.e.he(z))a.preventDefault()},"$1","geU",4,0,10]}}],["","",,D,{"^":"",c7:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aw:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aw(null)},"hy","$1","$0","ge3",0,2,0],
$isW:1,
$isau:1},W:{"^":"a;",$isau:1},ha:{"^":"ag;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eH:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eH(null)},"hS","$1","$0","gcR",0,2,0],
hY:[function(a){var z,y,x
H.w(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ef(x))return!1}return!0},"$1","geO",4,0,33],
hG:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","gev",8,0,17],
i_:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.S(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.S(s.a,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geQ",8,0,17],
ef:function(a){var z=C.a.aS(this.e,a)
return z},
$asd:function(){return[D.W]},
$asag:function(){return[D.W]}},hG:{"^":"a;",$isW:1,$isau:1},ie:{"^":"a;",$isW:1,$isau:1},is:{"^":"a;",$isW:1,$isau:1},it:{"^":"a;",$isW:1,$isau:1},iu:{"^":"a;",$isW:1,$isau:1}}],["","",,V,{"^":"",
lh:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hu",8,0,32],
l6:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dQ(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a8("null",c)
return C.h.a8(C.j.dK($.n.$2(a,0)?0:a,b),c+b+1)},
b8:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isf",[P.v],"$asf")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.Z(z,u,C.h.a8(z[u],x))}return z},
dj:function(a,b){return C.j.hu(Math.pow(b,C.y.cc(Math.log(H.kC(a))/Math.log(b))))},
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
aM:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
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
dY:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dY))return!1
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
z=[P.v]
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
aD:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
ce:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.aY()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
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
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ac(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
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
dA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
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
G:function(){return this.dA("",3,0)},
A:function(a){return this.dA(a,3,0)},
q:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aY:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dZ:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.C(c)))
y=b.aT(z)
x=y.w(0,Math.sqrt(y.C(y)))
w=z.aT(x)
v=new V.G(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.J(0).C(v),x.b,w.b,z.b,w.J(0).C(v),x.c,w.c,z.c,z.J(0).C(v),0,0,0,1)}}},
O:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ac:{"^":"a;n:a>,p:b>,c",
I:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
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
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bs:{"^":"a;n:a>,p:b>,c,d",
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
e7:{"^":"a;n:a>,p:b>,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
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
e8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)}}},
P:{"^":"a;a,b",
h0:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,18],
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
return new V.P(z*b,y*b)},
w:function(a,b){var z,y
if($.n.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.P(z/b,y/b)},
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
G:{"^":"a;a,b,c",
h0:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aT:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.G(-this.a,-this.b,-this.c)},
w:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dC:function(){if(!$.n.$2(0,this.a))return!1
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fC:{"^":"du;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bA:function(a){var z=V.l6(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.v(a)},
scr:function(a,b){},
scj:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bA(z)}z=new D.D("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
scl:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bA(z)}z=new D.D("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sa2:function(a,b){var z,y
b=this.bA(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sck:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.D("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sc3:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
af:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
q:{
cB:function(){var z=new U.fC()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dw:{"^":"a8;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
aN:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
q:{
dx:function(a){var z=new U.dw()
z.a=a
return z}}},dJ:{"^":"ag;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gax",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geu",8,0,19],
hZ:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.S(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geP",8,0,19],
aN:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aN(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aY():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a8]},
$asag:function(){return[U.a8]},
$isa8:1},a8:{"^":"du;"},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gax",0,2,0],
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gda()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbJ(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbK(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
y=H.b(this.gbL(),y)
C.a.h(z.a,y)
return!0},
ep:[function(a){H.k(a,"$isl")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbJ",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.P(y.a,y.b).l(0,2).w(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.P(x.a,x.b).l(0,2).w(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
this.b.sM(0)
y=y.I(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).w(0,z.ga3())}this.ab()},"$1","gbK",4,0,1],
er:[function(a){var z,y,x
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
z.sM(y*10*x)
this.ab()}},"$1","gbL",4,0,1],
aN:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},iT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gax",0,2,0],
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gda()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbJ(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbK(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
x=H.b(this.gbL(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gen(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.gfc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.gfa(),y)
C.a.h(z.a,y)
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.P(z,y)},
ep:[function(a){a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbJ",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ag(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))}this.ab()},"$1","gbK",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gbL",4,0,1],
hC:[function(a){if(H.e(H.k(a,"$isl"),"$isdU").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gem",4,0,1],
hD:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.ab()},"$1","gen",4,0,1],
i8:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfc",4,0,1],
i7:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isek")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ag(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))}this.ab()},"$1","gfb",4,0,1],
i6:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gfa",4,0,1],
aN:function(a,b,c){var z,y,x,w,v
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
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},iU:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.v(a)},
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=H.b(this.ges(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hE:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.U(this.b,this.a.b.c))return
H.e(a,"$iscO")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","ges",4,0,1],
aN:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",fD:{"^":"ag;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
W:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.W(null)},"cE","$1","$0","gR",0,2,0],
i0:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.W(z)},"$2","geR",8,0,20],
i1:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.S(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.W(z)},"$2","geS",8,0,20],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asd:function(){return[M.av]},
$asag:function(){return[M.av]},
$isav:1},fF:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
W:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.W(null)},"cE","$1","$0","gR",0,2,0],
saR:function(a){var z,y,x
if(a==null)a=new X.h0()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("camera",x,this.a,this,[X.c4])
z.b=!0
this.W(z)}},
saZ:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cX])
z.b=!0
this.W(z)}},
sb_:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bX])
z.b=!0
this.W(z)}},
a4:function(a){a.co(this.c)
this.b.T(a)
this.a.T(a)
this.d.af(0,a)
this.d.a4(a)
this.a.au(a)
this.b.toString
a.cn()},
$isav:1},fS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
W:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.W(null)},"cE","$1","$0","gR",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gez",8,0,8],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.S(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.W(z)},"$2","geA",8,0,8],
saR:function(a){var z,y,x
if(a==null)a=X.e2(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("camera",x,this.a,this,[X.c4])
z.b=!0
this.W(z)}},
saZ:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cX])
z.b=!0
this.W(z)}},
sb_:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bX])
z.b=!0
this.W(z)}},
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a4:function(a){var z
a.co(this.c)
this.b.T(a)
this.a.T(a)
z=this.c
if(z!=null)z.af(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.af(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
this.a.toString
a.cy.as()
a.db.as()
this.b.toString
a.cn()},
$isav:1},av:{"^":"a;"}}],["","",,A,{"^":"",dn:{"^":"a;a,b,c"},fs:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dX:{"^":"cT;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aI,0ap,0aJ,0be,0dc,0dd,0bf,0bg,0de,0df,0bh,0bi,0dg,0dh,0bj,0di,0dj,0bk,0dk,0dl,0bl,0bm,0bn,0dm,0dn,0bo,0bp,0dq,0dr,0bq,0ds,0c6,0dt,0c7,0du,0c8,0dv,0c9,0dw,0ca,0dz,0cb,a,b,0c,0d,0e,0f,0r",
dX:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
a1.ff(z)
a1.fm(z)
a1.fg(z)
a1.fv(z)
a1.fw(z)
a1.fo(z)
a1.fC(z)
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
v.fj(z)
v.fe(z)
v.fh(z)
v.fk(z)
v.ft(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fq(z)
v.fs(z)}v.fn(z)
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
v.fi(z)
v.fp(z)
v.fu(z)
v.fz(z)
v.fA(z)
v.fB(z)
v.fl(z)}r=z.a+="// === Main ===\n"
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
this.dB(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isay")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isay")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isay")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isay")
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$isd1")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isay")
this.k3=H.c([],[A.ay])
y=a1.aI
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isay"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isaj")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.c:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isad")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isaj")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.c:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isad")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.aI=H.e(this.r.m(0,"diffuseTxt"),"$isaj")
this.aJ=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.c:this.ap=H.e(this.r.m(0,"diffuseTxt"),"$isad")
this.aJ=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.be=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dc=H.e(this.r.m(0,"invDiffuseTxt"),"$isaj")
this.bf=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.c:this.dd=H.e(this.r.m(0,"invDiffuseTxt"),"$isad")
this.bf=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bi=H.e(this.r.m(0,"shininess"),"$isR")
this.bg=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.de=H.e(this.r.m(0,"specularTxt"),"$isaj")
this.bh=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.c:this.df=H.e(this.r.m(0,"specularTxt"),"$isad")
this.bh=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dg=H.e(this.r.m(0,"bumpTxt"),"$isaj")
this.bj=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.c:this.dh=H.e(this.r.m(0,"bumpTxt"),"$isad")
this.bj=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.di=H.e(this.r.m(0,"envSampler"),"$isad")
this.dj=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bk=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dk=H.e(this.r.m(0,"reflectTxt"),"$isaj")
this.bl=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.c:this.dl=H.e(this.r.m(0,"reflectTxt"),"$isad")
this.bl=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bm=H.e(this.r.m(0,"refraction"),"$isR")
this.bn=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dm=H.e(this.r.m(0,"refractTxt"),"$isaj")
this.bo=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.c:this.dn=H.e(this.r.m(0,"refractTxt"),"$isad")
this.bo=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bp=H.e(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.d:this.dq=H.e(this.r.m(0,"alphaTxt"),"$isaj")
this.bq=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.c:this.dr=H.e(this.r.m(0,"alphaTxt"),"$isad")
this.bq=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c6=H.c([],[A.ex])
this.c7=H.c([],[A.ey])
this.c8=H.c([],[A.ez])
this.c9=H.c([],[A.eA])
this.ca=H.c([],[A.eB])
this.cb=H.c([],[A.eC])
if(a1.k2){y=a1.z
if(y>0){this.ds=H.k(this.r.m(0,"dirLightCount"),"$isH")
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
x=this.c6;(x&&C.a).h(x,new A.ex(m,l,k))}}y=a1.Q
if(y>0){this.dt=H.k(this.r.m(0,"pntLightCount"),"$isH")
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
H.e(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.c7;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.du=H.k(this.r.m(0,"spotLightCount"),"$isH")
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
H.e(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.c8;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dv=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
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
H.e(f,"$isaj")
x=this.c9;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dw=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
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
H.e(j,"$isd1")
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
H.e(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isad")
x=this.ca;(x&&C.a).h(x,new A.eB(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dz=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
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
H.e(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isaj")
x=this.cb;(x&&C.a).h(x,new A.eC(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
a6:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cu(c)
b.a.uniform1i(b.d,0)}},
q:{
ho:function(a,b){var z,y
z=a.ap
y=new A.dX(b,z)
y.cB(b,z)
y.dX(a,b)
return y}}},hr:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aI,ap,aJ",
ff:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
fm:function(a){var z
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
fg:function(a){var z
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
fv:function(a){var z,y
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
fw:function(a){var z,y
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
fo:function(a){var z
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
fC:function(a){var z
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
al:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cw(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fj:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.al(a,z,"emission")
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
fe:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.al(a,z,"ambient")
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
fh:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"diffuse")
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
fk:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"invDiffuse")
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
ft:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.al(a,z,"specular")
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
fn:function(a){var z,y
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
fq:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.al(a,z,"reflect")
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
fs:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.al(a,z,"refract")
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
fi:function(a){var z,y
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
fp:function(a){var z,y
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
fu:function(a){var z,y
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
fz:function(a){var z,y,x
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
fA:function(a){var z,y,x
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
fB:function(a){var z,y,x
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
fl:function(a){var z
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
i:function(a){return this.ap}},ex:{"^":"a;a,b,c"},eA:{"^":"a;a,b,c,d,e,f,r,x"},ey:{"^":"a;a,b,c,d,e,f,r"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ez:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eC:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cT:{"^":"ct;",
cB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dB:function(a,b,c){var z,y,x
this.c=this.cO(b,35633)
this.d=this.cO(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f9(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f5()
this.f7()},
T:function(a){a.a.useProgram(this.e)
this.f.fS()},
cO:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f9(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f5:function(){var z,y,x,w,v,u
z=H.c([],[A.dn])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dn(y,v.name,u))}this.f=new A.fs(z)},
f7:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fO(v.type,v.size,v.name,u))}this.r=new A.iK(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.d0(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.d0(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ad(z,y,b,c)
else return A.d0(z,y,b,a,c)},
ba:function(a,b){return new P.eL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fO:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iF(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iI(this.a,this.e,c,d)
case 35667:return new A.iG(this.a,this.e,c,d)
case 35668:return new A.iH(this.a,this.e,c,d)
case 35669:return new A.iJ(this.a,this.e,c,d)
case 35674:return new A.iM(this.a,this.e,c,d)
case 35675:return new A.d1(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.h(this.ba("BOOL",c))
case 35671:throw H.h(this.ba("BOOL_VEC2",c))
case 35672:throw H.h(this.ba("BOOL_VEC3",c))
case 35673:throw H.h(this.ba("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c5:{"^":"a;a,b",
i:function(a){return this.b}},ea:{"^":"cT;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a4:{"^":"a;"},iK:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fU("\n")}},H:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iG:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iH:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iJ:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iE:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
d0:function(a,b,c,d,e){var z=new A.iE(a,b,c,e)
z.f=d
z.e=P.hg(d,0,!1,P.A)
return z}}},R:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iF:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iI:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iM:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d1:{"^":"a4;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a4;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aj:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ad:{"^":"a4;a,b,c,d",
cu:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cl:function(a){var z=a.a>0?1:0
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
z.d=y}l=F.cl(y)
k=F.cl(z.b)
j=F.l3(d,e,new F.kq(z,F.cl(z.c),F.cl(z.d),k,l,c),b)
if(j!=null)a.h5(j)},
l3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aE,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cU()
y=H.c([],[F.aE])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.aM(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c2(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.aM(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c2(d))}}z.d.fE(a+1,b+1,y)
return z},
kq:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cg(z.b,b).cg(z.d.cg(z.c,b),c)
z=new V.ac(y.a,y.b,y.c)
if(!J.U(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a1()}a.saM(y.w(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bs(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.U(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
gc5:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
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
if(v.dC())return
return v.w(0,Math.sqrt(v.C(v)))},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.I(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aT(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
c0:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ed()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
e9:function(){var z,y,x,w,v
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
if(v.dC())return
return v.w(0,Math.sqrt(v.C(v)))},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.ac(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.aT(m)
z=z.w(0,Math.sqrt(z.C(z))).aT(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
bZ:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y
if(this.gc5())return a+"disposed"
z=a+C.h.a8(J.a6(this.a.e),0)+", "+C.h.a8(J.a6(this.b.e),0)+", "+C.h.a8(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.A("")},
q:{
bg:function(a,b,c){var z,y,x
z=new F.ah()
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
cL:{"^":"a;0a,0b",
gc5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){if(this.gc5())return a+"disposed"
return a+C.h.a8(J.a6(this.a.e),0)+", "+C.h.a8(J.a6(this.b.e),0)},
G:function(){return this.A("")}},
cQ:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a8(J.a6(z.e),0)},
G:function(){return this.A("")}},
e9:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
h5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.X()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fN())}this.a.X()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cQ()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cL()
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
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.X()
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
if(!(z==null))z.at(0)},
ao:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ao()||!1
if(!this.a.ao())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
d3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ap()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gcv(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dr])
for(r=0,q=0;q<w;++q){p=b.fH(q)
o=p.gcv(p)
C.a.Z(s,q,new Z.dr(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h1(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.w(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bH(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cw(new Z.eI(34962,j),s,b)
i.b=H.c([],[Z.cb])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)}f=Z.d3(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)}f=Z.d3(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.X()
C.a.h(h,g.e)}f=Z.d3(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aL:function(a){var z=this.e
if(!(z==null))z.v(a)},
a1:function(){return this.aL(null)},
q:{
cU:function(){var z,y
z=new F.e9()
y=new F.iX(z)
y.b=!1
y.c=H.c([],[F.aE])
z.a=y
y=new F.i6(z)
y.b=H.c([],[F.cQ])
z.b=y
y=new F.i5(z)
y.b=H.c([],[F.cL])
z.c=y
y=new F.i4(z)
y.b=H.c([],[F.ah])
z.d=y
z.e=null
return z}}},
i4:{"^":"a;a,0b",
fD:function(a){var z,y,x,w,v
H.w(a,"$isf",[F.aE],"$asf")
z=H.c([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bg(y,w,v))}return z},
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isf",[F.aE],"$asf")
z=H.c([],[F.ah])
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
ao:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c0())x=!1
return x},
c_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bZ())x=!1
return x},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i5:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i6:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c2:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
fN:function(){return this.c2(null)},
saM:function(a){var z
if(!J.U(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
h1:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$ap())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aG())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aJ())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b2()))return H.c([this.ch],[P.v])
else if(z.u(a,$.$get$aF())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
c0:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j3(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
bZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j2(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.h.a8(J.a6(this.e),0))
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
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aE()
y=new F.j1(z)
y.b=H.c([],[F.cQ])
z.b=y
y=new F.j0(z)
x=[F.cL]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iY(z)
x=[F.ah]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eF()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$eG().a)!==0?c:null
z.ch=(x&$.$get$b2().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
j3:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j2:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iX:{"^":"a;a,0b,0c",
X:function(){var z,y,x,w
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
fF:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bb:function(a,b,c,d,e,f){return this.fF(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ao:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c0()
return!0},
c_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bZ()
return!0},
fJ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
this.X()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
iY:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iZ(this,b))
C.a.L(this.d,new F.j_(this,b))},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
iZ:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isah")
if(!J.U(a.a,this.a))this.b.$1(a)}},
j_:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isah")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
j0:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j1:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}}}],["","",,O,{"^":"",hn:{"^":"bX;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
N:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.N(null)},"cQ","$1","$0","gaB",0,2,0],
eZ:[function(a){H.k(a,"$isl")
this.a=null
this.N(a)},function(){return this.eZ(null)},"i5","$1","$0","geY",0,2,0],
hH:[function(a,b){var z=V.aD
z=new D.bP(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.N(z)},"$2","gew",8,0,21],
hI:[function(a,b){var z=V.aD
z=new D.bQ(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.N(z)},"$2","gex",8,0,21],
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
a6=$.$get$ap()
if(c){z=$.$get$aH()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aG()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aI()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aJ()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aF()
a6=new Z.b1(a6.a|z.a)}return new A.hr(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.w(a,"$isf",[T.cY],"$asf")
if(b!=null)if(!C.a.aS(a,b)){b.a=a.length
C.a.h(a,b)}},
af:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cq(x)}}},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cL()
y=H.k(a.fr.j(0,z.ap),"$isdX")
if(y==null){y=A.ho(z,a.a)
a.d1(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aJ
z=b.e
if(!(z instanceof Z.cw)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ao()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c_()
u.a.c_()
u=u.e
if(!(u==null))u.at(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fJ()
t=t.e
if(!(t==null))t.at(0)}r=b.d.d3(new Z.eJ(a.a),w)
r.aq($.$get$ap()).e=this.a.y.c
if(z)r.aq($.$get$aH()).e=this.a.Q.c
if(v)r.aq($.$get$aG()).e=this.a.z.c
if(x.rx)r.aq($.$get$aI()).e=this.a.ch.c
if(u)r.aq($.$get$aJ()).e=this.a.cx.c
if(x.x1)r.aq($.$get$aF()).e=this.a.cy.c
b.e=r}z=T.cY
q=H.c([],[z])
this.a.T(a)
if(x.fx){v=this.a
u=a.dx
u=u.gV(u)
v=v.db
v.toString
v.aa(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gV(u)
t=a.dx
t=u.l(0,t.gV(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aa(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghj()
t=a.dx
t=u.l(0,t.gV(t))
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
v.aa(C.z.a5(u,!0))}if(x.aI>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isaD")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bH(H.w(t.a5(0,!0),"$isf",v,"$asf")))
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
case C.d:this.P(q,this.f.d)
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
case C.c:this.P(q,this.f.e)
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
case C.d:this.P(q,this.r.d)
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
case C.c:this.P(q,this.r.e)
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
case C.d:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.aI,v.aJ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.ap,v.aJ,u)
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
v=v.be
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.dc,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.dd,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
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
case C.d:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.de,v.bh,u)
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
case C.c:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.df,v.bh,u)
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
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c6
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
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b3(j.gaX(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gad(j)
g=i.d
h=t.gbt()
s=t.gb4()
t=t.gbc()
g.a.uniform3f(g.d,h,s,t)
t=j.gbU()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbV()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbW()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j).ib()
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaX(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gad(j)
s=i.e
h=t.gbt()
g=t.gb4()
t=t.gbc()
s.a.uniform3f(s.d,h,g,t)
t=j.gia()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi9()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c9
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb0()
H.w(q,"$isf",t,"$asf")
if(!C.a.aS(q,s)){s.sbH(q.length)
C.a.h(q,s)}s=j.gc4(j)
h=i.d
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=j.gbu()
f=i.b
g=s.gaF(s)
h=s.gaG(s)
s=s.gaH()
f.a.uniform3f(f.d,g,h,s)
s=j.gaY(j)
h=i.c
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=m.cq(j.gc4(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gad(j)
g=i.f
f=h.gbt()
s=h.gb4()
h=h.gbc()
g.a.uniform3f(g.d,f,s,h)
h=j.gb0()
s=h.gbr(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbr(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gfX(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.ca
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb0()
H.w(q,"$isf",s,"$asf")
if(!C.a.aS(q,h)){h.sbH(q.length)
C.a.h(q,h)}e=m.l(0,j.gV(j))
h=j.gV(j).b3(new V.ac(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcs(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b3(new V.ac(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ce(0)
d=i.d
n=new Float32Array(H.bH(H.w(new V.dY(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gad(j)
h=i.e
f=d.gbt()
g=d.gb4()
d=d.gbc()
h.a.uniform3f(h.d,f,g,d)
d=j.gb0()
h=d.gbr(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghB()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbH())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbU()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbV()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbW()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cb
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb0()
H.w(q,"$isf",z,"$asf")
if(!C.a.aS(q,t)){t.sbH(q.length)
C.a.h(q,t)}t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j)
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=j.gbu()
s=i.d
h=t.gaF(t)
g=t.gaG(t)
t=t.gaH()
s.a.uniform3f(s.d,h,g,t)
t=j.gaY(j)
g=i.e
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaX(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb0()
s=t.gbr(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbr(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gfX(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gad(j)
s=i.y
h=t.gbt()
g=t.gb4()
t=t.gbc()
s.a.uniform3f(s.d,h,g,t)
t=j.gii()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gij()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.dg,z.bj,v)
break
case C.c:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.dh,z.bj,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gV(v).ce(0)
a.Q=v}z=z.fy
z.toString
z.aa(v.a5(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.a6(z.di,z.dj,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bk
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.dk,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.dl,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
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
case C.d:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dm,z.bo,v)
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
case C.c:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dn,z.bo,v)
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
case C.e:z=this.a
u=this.db.f
z=z.bp
z.a.uniform1f(z.d,u)
break
case C.d:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dq,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break
case C.c:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dr,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].T(a)
z=b.e
z.T(a)
z.a4(a)
z.au(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d9()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().ap}},hp:{"^":"cM;0f,a,b,0c,0d,0e",
f1:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.D(this.b,y,a,this,[P.v])
z.b=!0
this.a.N(z)}},
aC:function(){this.cA()
this.f1(1)}},cM:{"^":"a;",
N:[function(a){this.a.N(H.k(a,"$isl"))},function(){return this.N(null)},"cQ","$1","$0","gaB",0,2,0],
aC:["cA",function(){}],
f3:function(a){},
f4:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gaB(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.b(this.gaB(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D(this.b+".textureCube",x,this.e,this,[T.ch])
z.b=!0
this.a.N(z)}},
saM:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aC()
this.c=C.c
this.f3(null)
z=this.a
z.a=null
z.N(null)}this.f4(a)}},hq:{"^":"cM;a,b,0c,0d,0e"},aX:{"^":"cM;0f,a,b,0c,0d,0e",
cW:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.N(y)}},
aC:["bz",function(){this.cA()
this.cW(new V.V(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aC()
z=this.a
z.a=null
z.N(null)}this.cW(b)}},hs:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.N(z)}},
aC:function(){this.bz()
this.f2(1)}},ht:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
bQ:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.N(z)}},
aC:function(){this.bz()
this.bQ(100)}},ib:{"^":"bX;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
N:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.N(null)},"cQ","$1","$0","gaB",0,2,0],
dH:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$isea")
if(z==null){y=a.a
z=new A.ea(y,"Skybox")
z.cB(y,"Skybox")
z.dB(0,$.id,$.ic)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isR")
z.z=H.e(z.r.j(0,"ratio"),"$isR")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isad")
z.cx=H.e(z.r.j(0,"viewMat"),"$isay")
a.d1(z)}this.a=z}if(b.e==null){y=b.d.d3(new Z.eJ(a.a),$.$get$ap())
y.aq($.$get$ap()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.T(a)}y=a.d
x=a.c
w=this.a
w.T(a)
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
x=x.gV(x).ce(0)
w=w.cx
w.toString
w.aa(x.a5(0,!0))
y=b.e
if(y instanceof Z.cw){y.T(a)
y.a4(a)
y.au(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d9()
y=this.c
if(y!=null)y.au(a)}},bX:{"^":"a;"}}],["","",,T,{"^":"",cY:{"^":"ct;"},ch:{"^":"cY;0b,0c,0d,0e,a",
T:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
au:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iq:{"^":"a;a,0b,0c,0d,0e",
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.ch(0)
r.b=s
r.c=!1
r.d=0
r.e=D.E()
this.aA(r,s,z,34069,!1,!1)
this.aA(r,s,w,34070,!1,!1)
this.aA(r,s,y,34071,!1,!1)
this.aA(r,s,v,34072,!1,!1)
this.aA(r,s,x,34073,!1,!1)
this.aA(r,s,u,34074,!1,!1)
return r},
h3:function(a,b){return this.dD(a,b,!1,"")},
ci:function(a){return this.dD(a,".png",!1,"")},
aA:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a7
W.X(z,"load",H.b(new T.ir(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f_:function(a,b,c){var z,y,x,w
b=V.dj(b,2)
z=V.dj(a.width,2)
y=V.dj(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cy(null,null)
x.width=z
x.height=y
w=H.k(C.k.dO(x,"2d"),"$isdt")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kG(w.getImageData(0,0,x.width,x.height))}}},ir:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f_(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hr(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fR();++z.e}}}],["","",,V,{"^":"",fq:{"^":"a;",
aU:function(a,b){return!0},
i:function(a){return"all"},
$isbT:1},bT:{"^":"a;"},dW:{"^":"a;",
aU:["dV",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aU(0,b))return!0
return!1}],
i:["cz",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbT:1},bq:{"^":"dW;0a",
aU:function(a,b){return!this.dV(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}},i2:{"^":"a;0a",
dZ:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.A,P.a5])
for(y=new H.dT(a,a.gk(a),0,[H.az(a,"t",0)]);y.D();)z.Z(0,y.d,!0)
this.a=z},
aU:function(a,b){return this.a.d6(0,b)},
i:function(a){var z=this.a
return P.cW(new H.dS(z,[H.z(z,0)]),0,null)},
$isbT:1,
q:{
a1:function(a){var z=new V.i2()
z.dZ(a)
return z}}},ec:{"^":"a;a,b,0c,0d",
gh6:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.el(this.a.H(0,b))
w.a=H.c([],[V.bT])
w.c=!1
C.a.h(this.c,w)
return w},
fT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aU(0,a))return w}return},
i:function(a){return this.b}},ei:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fk(this.b,"\n","\\n")
y=H.fk(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ej:{"^":"a;a,b,0c",
i:function(a){return this.b}},iA:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ec(this,b)
z.c=H.c([],[V.el])
this.a.Z(0,b,z)}return z},
b1:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ej(this,a)
y=P.o
z.c=new H.aW(0,0,[y,y])
this.b.Z(0,a,z)}return z},
hx:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ei])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b6(a,t)
r=y.fT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cW(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh6(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cW(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ei(o==null?p.b:o,q,t)}++t}}}},el:{"^":"dW;b,0c,0a",
i:function(a){return this.b.b+": "+this.cz(0)}}}],["","",,X,{"^":"",c4:{"^":"a;",$isau:1},fZ:{"^":"cX;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
aj:function(a){var z=this.x
if(!(z==null))z.v(a)},
sd5:function(a,b){var z
if(this.b){this.b=!1
z=new D.D("clearColor",!0,!1,this,[P.a5])
z.b=!0
this.aj(z)}},
T:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.f.ae(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.ae(w.b*x)
t=C.f.ae(w.c*y)
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
cD:function(a,b,c,d,e,f,g){var z,y
z=new X.fZ()
y=new V.aM(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e8(0,0,1,1)
z.r=y
return z}}},h0:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
T:function(a){var z
a.cy.bs(V.aY())
z=V.aY()
a.db.bs(z)},
au:function(a){a.cy.as()
a.db.as()},
$isau:1,
$isc4:1},hE:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
aj:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.aj(null)},"hz","$1","$0","ge6",0,2,0],
T:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bs(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e3
if(z==null){z=V.dZ(new V.ac(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e3=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aN(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bs(r)},
au:function(a){a.cy.as()
a.db.as()},
$isau:1,
$isc4:1,
q:{
e2:function(a,b,c,d){var z,y,x,w
z=new X.hE()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.b(z.ge6(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.D("mover",y,z.a,z,[U.a8])
x.b=!0
z.aj(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.D("fov",y,b,z,[P.v])
x.b=!0
z.aj(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.D("near",y,d,z,[P.v])
x.b=!0
z.aj(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.D("far",y,a,z,[P.v])
x.b=!0
z.aj(x)}return z}}},cX:{"^":"a;"}}],["","",,V,{"^":"",
l1:function(a){P.iz(C.w,new V.l2(a))},
l2:{"^":"u:37;a",
$1:function(a){H.k(a,"$isb_")
P.dk(C.j.dK(this.a.gfV(),2)+" fps")}},
i7:{"^":"a;0a,0b",
e_:function(a,b){var z,y,x,w,v,u,t
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
W.X(z,"scroll",H.b(new V.ia(x),{func:1,ret:-1,args:[t]}),!1,t)},
fG:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isf",[P.o],"$asf")
this.f6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hx(C.a.h_(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fj(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kd(C.H,s,C.q,!1)
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
f6:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iA()
y=P.o
z.a=new H.aW(0,0,[y,V.ec])
z.b=new H.aW(0,0,[y,V.ej])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bq()
w=[V.bT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.fq())
x=z.H(0,"Other").B(0,"Other")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b1("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b1("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b1("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b1("Link")
x=z.H(0,"Other")
x.d=x.a.b1("Other")
this.b=z},
q:{
i8:function(a,b){var z=new V.i7()
z.e_(a,!0)
return z}}},
ia:{"^":"u:22;a",
$1:function(a){P.iy(C.m,new V.i9(this.a))}},
i9:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
ff:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.i8("Test 016",!0)
y=W.cy(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fG(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iw(x,!0,!0,!0,!1)
v=X.cD(!0,!0,!1,null,2000,null,0)
v.sd5(0,!1)
u=E.dH(null,!0,null,"",null,null)
t=F.cU()
F.bG(t,null,null,1,1,1,0,0,1)
F.bG(t,null,null,1,1,0,1,0,3)
F.bG(t,null,null,1,1,0,0,1,2)
F.bG(t,null,null,1,1,-1,0,0,0)
F.bG(t,null,null,1,1,0,-1,0,0)
F.bG(t,null,null,1,1,0,0,-1,3)
t.ao()
u.sbw(0,t)
s=w.f.h3("../resources/maskonaive",".jpg")
r=w.f.ci("../resources/diceColor")
q=new O.hn()
z=O.cA(V.aD)
q.e=z
z.aO(q.gew(),q.gex())
z=new O.aX(q,"emission")
z.c=C.b
z.f=new V.V(0,0,0)
q.f=z
z=new O.aX(q,"ambient")
z.c=C.b
z.f=new V.V(0,0,0)
q.r=z
z=new O.aX(q,"diffuse")
z.c=C.b
z.f=new V.V(0,0,0)
q.x=z
z=new O.aX(q,"invDiffuse")
z.c=C.b
z.f=new V.V(0,0,0)
q.y=z
z=new O.ht(q,"specular")
z.c=C.b
z.f=new V.V(0,0,0)
z.ch=100
q.z=z
z=new O.hq(q,"bump")
z.c=C.b
q.Q=z
q.ch=null
z=new O.aX(q,"reflect")
z.c=C.b
z.f=new V.V(0,0,0)
q.cx=z
z=new O.hs(q,"refract")
z.c=C.b
z.f=new V.V(0,0,0)
z.ch=1
q.cy=z
z=new O.hp(q,"alpha")
z.c=C.b
z.f=1
q.db=z
z=new D.ha()
z.b5(D.W)
z.e=H.c([],[D.c7])
z.f=H.c([],[D.hG])
z.r=H.c([],[D.ie])
z.x=H.c([],[D.is])
z.y=H.c([],[D.it])
z.z=H.c([],[D.iu])
z.Q=null
z.ch=null
z.ct(z.gev(),z.geO(),z.geQ())
q.dx=z
p=z.Q
if(p==null){p=D.E()
z.Q=p
z=p}else z=p
p={func:1,ret:-1,args:[D.l]}
o=H.b(q.geY(),p)
C.a.h(z.a,o)
o=q.dx
z=o.ch
if(z==null){z=D.E()
o.ch=z}o=H.b(q.gaB(),p)
C.a.h(z.a,o)
q.dy=null
z=q.dx
n=U.dx(V.dZ(new V.ac(0,0,0),new V.G(0,1,0),new V.G(1,-1,-3)))
m=new V.V(1,1,1)
l=new D.c7()
l.c=new V.V(1,1,1)
l.a=new V.G(0,0,1)
k=l.b
l.b=n
n=n.gt()
n.toString
j=H.b(l.ge3(),p)
C.a.h(n.a,j)
n=new D.D("mover",k,l.b,l,[U.a8])
n.b=!0
l.aw(n)
if(!l.c.u(0,m)){k=l.c
l.c=m
n=new D.D("color",k,m,l,[V.V])
n.b=!0
l.aw(n)}z.h(0,l)
z=q.r
z.sad(0,new V.V(0.2,0.2,0.2))
z=q.x
z.sad(0,new V.V(0.7,0.7,0.7))
z=q.z
z.sad(0,new V.V(0.7,0.7,0.7))
q.r.saM(r)
q.x.saM(r)
q.z.saM(w.f.ci("../resources/diceSpecular"))
z=q.z
if(z.c===C.b){z.c=C.e
z.bz()
z.bQ(100)
n=z.a
n.a=null
n.N(null)}z.bQ(10)
q.Q.saM(w.f.ci("../resources/diceBumpMap"))
z=q.ch
if(z!==s){if(z!=null)C.a.S(z.e.a,o)
k=q.ch
q.ch=s
C.a.h(s.e.a,o)
z=new D.D("environment",k,q.ch,q,[T.ch])
z.b=!0
q.N(z)}z=q.cx
z.sad(0,new V.V(0.3,0.3,0.3))
i=new U.dJ()
i.b5(U.a8)
i.aO(i.geu(),i.geP())
i.e=null
i.f=V.aY()
i.r=0
z=w.r
o=new U.iT()
n=U.cB()
n.scr(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sa2(0,0)
n.sck(100)
n.sM(0)
n.sc3(0.5)
o.b=n
n=n.gt()
n.toString
l=H.b(o.gax(),p)
C.a.h(n.a,l)
n=U.cB()
n.scr(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sa2(0,0)
n.sck(100)
n.sM(0)
n.sc3(0.5)
o.c=n
C.a.h(n.gt().a,l)
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
h=new X.as(!1,!1,!1)
k=o.d
o.d=h
n=[X.as]
l=new D.D("modifiers",k,h,o,n)
l.b=!0
o.K(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.D("invertX",l,!1,o,[P.a5])
l.b=!0
o.K(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.D("invertY",l,!1,o,[P.a5])
l.b=!0
o.K(l)}o.aQ(z)
i.h(0,o)
z=w.r
o=new U.iS()
l=U.cB()
l.scr(0,!0)
l.scj(6.283185307179586)
l.scl(0)
l.sa2(0,0)
l.sck(100)
l.sM(0)
l.sc3(0.2)
o.b=l
l=l.gt()
l.toString
j=H.b(o.gax(),p)
C.a.h(l.a,j)
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
h=new X.as(!0,!1,!1)
k=o.c
o.c=h
l=new D.D("modifiers",k,h,o,n)
l.b=!0
o.K(l)
o.aQ(z)
i.h(0,o)
z=w.r
o=new U.iU()
o.c=0.01
o.d=0
o.e=0
h=new X.as(!1,!1,!1)
o.b=h
n=new D.D("modifiers",null,h,o,n)
n.b=!0
o.K(n)
o.aQ(z)
i.h(0,o)
i.h(0,U.dx(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.e2(2000,1.0471975511965976,i,0.1)
f=new M.fF()
f.saR(null)
f.saZ(0,null)
f.sb_(null)
z=E.dH(null,!0,null,"",null,null)
t=F.cU()
o=t.a
n=new V.G(-1,-1,1)
n=n.w(0,Math.sqrt(n.C(n)))
e=o.bb(new V.bs(1,2,4,6),new V.aM(1,0,0,1),new V.ac(-1,-1,0),new V.O(0,1),n,null)
o=t.a
n=new V.G(1,-1,1)
n=n.w(0,Math.sqrt(n.C(n)))
d=o.bb(new V.bs(0,3,4,6),new V.aM(0,0,1,1),new V.ac(1,-1,0),new V.O(1,1),n,null)
o=t.a
n=new V.G(1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
c=o.bb(new V.bs(0,2,5,6),new V.aM(0,1,0,1),new V.ac(1,1,0),new V.O(1,0),n,null)
o=t.a
n=new V.G(-1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
b=o.bb(new V.bs(0,2,4,7),new V.aM(1,1,0,1),new V.ac(-1,1,0),new V.O(0,0),n,null)
t.d.fD(H.c([e,d,c,b],[F.aE]))
t.ao()
z.sbw(0,t)
f.d=z
f.e=null
z=new O.ib()
z.b=1.0471975511965976
k=z.c
z.c=s
o=s.e
n=H.b(z.gaB(),p)
C.a.h(o.a,n)
o=new D.D("boxTexture",k,z.c,z,[T.ch])
o.b=!0
z.N(o)
r=new V.V(1,1,1)
if(!J.U(z.d,r)){k=z.d
z.d=r
o=new D.D("boxColor",k,r,z,[V.V])
o.b=!0
z.N(o)}z.e=null
f.sb_(z)
f.saZ(0,v)
f.saR(g)
a=new M.fS()
z=O.cA(E.aC)
a.d=z
z.aO(a.gez(),a.geA())
a.e=null
a.f=null
a.r=null
a.x=null
a.saR(null)
a.saZ(0,null)
a.sb_(null)
a.saR(g)
a.sb_(q)
a.saZ(0,v)
a.d.h(0,u)
a.b.sd5(0,!1)
z=M.av
o=H.c([f,a],[z])
n=new M.fD()
n.b5(z)
n.e=!1
n.f=null
n.aO(n.geR(),n.geS())
n.bT(0,o)
z=w.d
if(z!==n){if(z!=null){z=z.gt()
z.toString
o=H.b(w.gcD(),p)
C.a.S(z.a,o)}w.d=n
z=n.gt()
z.toString
p=H.b(w.gcD(),p)
C.a.h(z.a,p)
w.e1()}V.l1(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.cH.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.c_=function(a){if(typeof a=="string")return J.cH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.de=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.kK=function(a){if(typeof a=="number")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d2.prototype
return a}
J.c0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fm=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kK(a).a9(a,b)}
J.fn=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).j(a,b)}
J.fo=function(a,b,c,d){return J.c0(a).d0(a,b,c,d)}
J.cs=function(a,b,c){return J.c_(a).fK(a,b,c)}
J.dl=function(a,b){return J.de(a).E(a,b)}
J.fp=function(a,b){return J.de(a).L(a,b)}
J.aA=function(a){return J.J(a).gU(a)}
J.bN=function(a){return J.de(a).gY(a)}
J.bb=function(a){return J.c_(a).gk(a)}
J.a6=function(a){return J.J(a).i(a)}
I.dh=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cx.prototype
C.x=J.m.prototype
C.a=J.aV.prototype
C.y=J.dM.prototype
C.f=J.dN.prototype
C.z=J.dO.prototype
C.j=J.cc.prototype
C.h=J.cH.prototype
C.G=J.bR.prototype
C.I=H.hA.prototype
C.J=W.hB.prototype
C.p=J.hF.prototype
C.K=P.cR.prototype
C.l=J.d2.prototype
C.r=W.bD.prototype
C.t=W.j6.prototype
C.u=new P.hD()
C.v=new P.iW()
C.i=new P.jS()
C.b=new A.c5(0,"ColorSourceType.None")
C.e=new A.c5(1,"ColorSourceType.Solid")
C.d=new A.c5(2,"ColorSourceType.Texture2D")
C.c=new A.c5(3,"ColorSourceType.TextureCube")
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
C.H=H.c(I.dh([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iV(!1)
$.aq=0
$.bc=null
$.dp=null
$.d7=!1
$.fc=null
$.f6=null
$.fi=null
$.co=null
$.cq=null
$.df=null
$.b4=null
$.bI=null
$.bJ=null
$.d8=!1
$.N=C.i
$.dE=null
$.dD=null
$.dC=null
$.dB=null
$.n=V.hu()
$.id="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ic="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e3=null
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
I.$lazy(y,x,w)}})(["dA","$get$dA",function(){return H.fb("_$dart_dartClosure")},"cI","$get$cI",function(){return H.fb("_$dart_js")},"em","$get$em",function(){return H.aw(H.ci({
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.aw(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"eo","$get$eo",function(){return H.aw(H.ci(null))},"ep","$get$ep",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.aw(H.ci(void 0))},"eu","$get$eu",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"er","$get$er",function(){return H.aw(H.es(null))},"eq","$get$eq",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ew","$get$ew",function(){return H.aw(H.es(void 0))},"ev","$get$ev",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d4","$get$d4",function(){return P.j7()},"bK","$get$bK",function(){return[]},"f0","$get$f0",function(){return P.hT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dz","$get$dz",function(){return{}},"eH","$get$eH",function(){return Z.ak(0)},"eF","$get$eF",function(){return Z.ak(511)},"ap","$get$ap",function(){return Z.ak(1)},"aH","$get$aH",function(){return Z.ak(2)},"aG","$get$aG",function(){return Z.ak(4)},"aI","$get$aI",function(){return Z.ak(8)},"aJ","$get$aJ",function(){return Z.ak(16)},"bB","$get$bB",function(){return Z.ak(32)},"bC","$get$bC",function(){return Z.ak(64)},"eG","$get$eG",function(){return Z.ak(96)},"b2","$get$b2",function(){return Z.ak(128)},"aF","$get$aF",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.I,args:[F.ah]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.d,E.aC]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[P.A,[P.d,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.d,U.a8]]},{func:1,ret:-1,args:[P.A,[P.d,M.av]]},{func:1,ret:-1,args:[P.A,[P.d,V.aD]]},{func:1,ret:P.I,args:[W.a7]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a5,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[P.S]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.a5,args:[P.v,P.v]},{func:1,ret:P.a5,args:[[P.d,D.W]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aE,P.v,P.v]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.I,args:[P.b_]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.l4(d||a)
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
Isolate.dh=a.dh
Isolate.dc=a.dc
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
if(typeof dartMainRunner==="function")dartMainRunner(X.ff,[])
else X.ff([])})})()
//# sourceMappingURL=test.dart.js.map
