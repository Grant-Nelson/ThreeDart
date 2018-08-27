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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d9(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.da=function(){}
var dart=[["","",,H,{"^":"",m1:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dd==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eC("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cH()]
if(v!=null)return v
v=H.kZ(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$cH(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gS:function(a){return H.bt(a)},
i:["dT",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h8:{"^":"m;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa5:1},
dM:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
cI:{"^":"m;",
gS:function(a){return 0},
i:["dU",function(a){return String(a)}]},
hI:{"^":"cI;"},
d0:{"^":"cI;"},
bS:{"^":"cI;",
i:function(a){var z=a[$.$get$dx()]
if(z==null)return this.dU(a)
return"JavaScript function for "+H.j(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscD:1},
aU:{"^":"m;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
bP:function(a,b){var z,y
H.v(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ad("addAll"))
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
fY:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bw:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gca:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h6())},
aS:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cE(a,"[","]")},
gX:function(a){return new J.al(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bt(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c2(b,"newLength",null))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.Y(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aR(a,b))
if(b>=a.length||b<0)throw H.h(H.aR(a,b))
a[b]=c},
$isd:1,
$isf:1,
q:{
h7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.dJ(new Array(a),b)},
dJ:function(a,b){return J.bm(H.c(a,[b]))},
bm:function(a){H.bM(a)
a.fixed$length=Array
return a}}},
m0:{"^":"aU;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cb:{"^":"m;",
hu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ad(""+a+".toInt()"))},
c7:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dH:function(a,b){var z,y
if(b>20)throw H.h(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.h(H.aL(b))
return a*b},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.f8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f8:function(a,b){return b>31?0:a>>>b},
aa:function(a,b){if(typeof b!=="number")throw H.h(H.aL(b))
return a<b},
$isw:1,
$isS:1},
dL:{"^":"cb;",$isA:1},
dK:{"^":"cb;"},
cG:{"^":"m;",
bY:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aR(a,b))
if(b<0)throw H.h(H.aR(a,b))
if(b>=a.length)H.r(H.aR(a,b))
return a.charCodeAt(b)},
b7:function(a,b){if(b>=a.length)throw H.h(H.aR(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.T(b)
if(typeof b!=="string")throw H.h(P.c2(b,null,null))
return a+b},
bx:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cf(b,null,null))
if(b>c)throw H.h(P.cf(b,null,null))
if(c>a.length)throw H.h(P.cf(c,null,null))
return a.substring(b,c)},
co:function(a,b){return this.bx(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.x)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ha:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a8:function(a,b){return this.ha(a,b," ")},
fK:function(a,b,c){if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
return H.fi(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdZ:1,
$iso:1}}],["","",,H,{"^":"",
h6:function(){return new P.ij("No element")},
Z:{"^":"iT;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bY(this.a,b)},
$aseD:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$asf:function(){return[P.A]}},
fS:{"^":"d;"},
dR:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
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
ho:{"^":"d;a,b,$ti",
gX:function(a){return new H.hp(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dj(this.a,b))},
$asd:function(a,b){return[b]}},
hp:{"^":"cF;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascF:function(a,b){return[b]}},
j8:{"^":"d;a,b,$ti",
gX:function(a){return new H.j9(J.bN(this.a),this.b,this.$ti)}},
j9:{"^":"cF;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c8:{"^":"a;$ti"},
eD:{"^":"a;$ti"},
iT:{"^":"cc+eD;"}}],["","",,H,{"^":"",
kP:function(a){return init.types[H.Y(a)]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.h(H.aL(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.I(a).$isd0){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b7(w,0)===36)w=C.h.co(w,1)
r=H.de(H.bM(H.aS(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e1:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hS:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aL(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.ba(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aL(w))}return H.e1(z)},
e2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aL(x))
if(x<0)throw H.h(H.aL(x))
if(x>65535)return H.hS(a)}return H.e1(a)},
hR:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.ba(z,10))>>>0,56320|z&1023)}throw H.h(P.ah(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hQ:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hO:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hK:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hL:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hN:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hP:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hM:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aL(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.h(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.Y(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cf(b,"index",null)},
kL:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aL:function(a){return new P.aB(!0,a,null,null)},
kG:function(a){if(typeof a!=="number")throw H.h(H.aL(a))
return a},
h:function(a){var z
if(a==null)a=new P.dY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fk})
z.name=""}else z.toString=H.fk
return z},
fk:function(){return J.a6(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bd(a))},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cJ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dX(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$el()
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
if(m!=null)return z.$1(H.cJ(H.T(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cJ(H.T(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dX(H.T(y),m))}}return z.$1(new H.iS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e8()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e8()
return a},
b9:function(a){var z
if(a==null)return new H.eV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eV(a)},
kN:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){H.k(a,"$iscD")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isf){z.$reflectionInfo=d
x=H.hV(z).r}else x=d
w=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.F()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dt(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kP,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dn:H.cu
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dt(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fz:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dt:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fz(y,!w,z,b)
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
fA:function(a,b,c,d){var z,y
z=H.cu
y=H.dn
switch(b?-1:a){case 0:throw H.h(H.i3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.c3("self")
$.bc=z}y=$.dm
if(y==null){y=H.c3("receiver")
$.dm=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fA(w,!u,x,b)
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
d9:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.bM(b))
H.Y(c)
y=!!J.I(d).$isf?J.bm(d):d
return H.fC(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ax(a,"String"))},
l1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ax(a,"num"))},
f8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ax(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ax(a,"int"))},
fg:function(a,b){throw H.h(H.ax(a,H.T(b).substring(3)))},
l3:function(a,b){var z=J.c0(b)
throw H.h(H.fy(a,z.bx(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fg(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.l3(a,b)},
bM:function(a){if(a==null)return a
if(!!J.I(a).$isf)return a
throw H.h(H.ax(a,"List"))},
kY:function(a,b){if(a==null)return a
if(!!J.I(a).$isf)return a
if(J.I(a)[b])return a
H.fg(a,b)},
f9:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
c_:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f9(J.I(a))
if(z==null)return!1
y=H.fc(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d5)return a
$.d5=!0
try{if(H.c_(a,b))return a
z=H.c1(b)
y=H.ax(a,z)
throw H.h(y)}finally{$.d5=!1}},
db:function(a,b){if(a!=null&&!H.d8(a,b))H.r(H.ax(a,H.c1(b)))
return a},
f3:function(a){var z
if(a instanceof H.u){z=H.f9(J.I(a))
if(z!=null)return H.c1(z)
return"Closure"}return H.aY(a)},
l8:function(a){throw H.h(new P.fJ(H.T(a)))},
fa:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aS:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aS(b))},
bL:function(a,b,c,d){var z
H.T(c)
H.Y(d)
z=H.ba(a["$as"+H.j(c)],H.aS(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.T(b)
H.Y(c)
z=H.ba(a["$as"+H.j(b)],H.aS(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aS(a)
return z==null?null:z[b]},
c1:function(a){var z=H.aT(a,null)
return z},
aT:function(a,b){var z,y
H.v(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.de(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kw(a,b)
if('futureOr' in a)return"FutureOr<"+H.aT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(q!=null&&q!==P.a)t+=" extends "+H.aT(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aT(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aT(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aT(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kM(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aT(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
de:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.bX("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aT(u,c)}v="<"+z.i(0)+">"
return v},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b5:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aS(a)
y=J.I(a)
if(y[b]==null)return!1
return H.f6(H.ba(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.T(b)
H.bM(c)
H.T(d)
if(a==null)return a
z=H.b5(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.de(c,0,null)
throw H.h(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mW:function(a,b,c){return a.apply(b,H.ba(J.I(b)["$as"+H.j(c)],H.aS(b)))},
fd:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.fd(z)}return!1},
d8:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.fd(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c_(a,b)}y=J.I(a).constructor
x=H.aS(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d8(a,b))throw H.h(H.ax(a,H.c1(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fc(a,b,c,d)
if('func' in a)return c.builtin$cls==="cD"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.ba(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c1(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f6(H.ba(r,z),b,u,d)},
fc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l0(m,b,l,d)},
l0:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mX:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kZ:function(a){var z,y,x,w,v,u
z=H.T($.fb.$1(a))
y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.f5.$2(a,z))
if(z!=null){y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cq(x)
$.cn[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cp[z]=x
return x}if(v==="-"){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ff(a,x)
if(v==="*")throw H.h(P.eC(z))
if(init.leafTags[z]===true){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ff(a,x)},
ff:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dg(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq:function(a){return J.dg(a,!1,null,!!a.$isB)},
l_:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cq(z)
else return J.dg(z,c,null,null)},
kU:function(){if(!0===$.dd)return
$.dd=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.cn=Object.create(null)
$.cp=Object.create(null)
H.kQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fh.$1(v)
if(u!=null){t=H.l_(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kQ:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.b4(C.C,H.b4(C.H,H.b4(C.p,H.b4(C.p,H.b4(C.G,H.b4(C.D,H.b4(C.E(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fb=new H.kR(v)
$.f5=new H.kS(u)
$.fh=new H.kT(t)},
b4:function(a,b){return a(b)||b},
fi:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fj:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hU:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hV:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hU(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iG:{"^":"a;a,b,c,d,e,f",
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
return new H.iG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
er:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hF:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dX:function(a,b){return new H.hF(a,b==null?null:b.method)}}},
hb:{"^":"X;a,b,c",
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
return new H.hb(a,y,z?null:b.receiver)}}},
iS:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l9:{"^":"u:16;a",
$1:function(a){if(!!J.I(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isao:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gdK:function(){return this},
$iscD:1,
gdK:function(){return this}},
ec:{"^":"u;"},
ik:{"^":"ec;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ct:{"^":"ec;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aA(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
q:{
cu:function(a){return a.a},
dn:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iH:{"^":"X;a",
i:function(a){return this.a},
q:{
ax:function(a,b){return new H.iH("TypeError: "+H.j(P.c7(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
fx:{"^":"X;a",
i:function(a){return this.a},
q:{
fy:function(a,b){return new H.fx("CastError: "+H.j(P.c7(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
i2:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
i3:function(a){return new H.i2(a)}}},
aV:{"^":"hm;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gau:function(a){return new H.dQ(this,[H.z(this,0)])},
d1:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cH(y,b)}else return this.fW(b)},
fW:function(a){var z=this.d
if(z==null)return!1
return this.c8(this.bE(z,J.aA(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b8(w,b)
x=y==null?null:y.b
return x}else return this.fX(b)},
fX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bE(z,J.aA(a)&0x3ffffff)
x=this.c8(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bJ()
this.b=z}this.cz(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bJ()
this.c=y}this.cz(y,b,c)}else{x=this.d
if(x==null){x=this.bJ()
this.d=x}w=J.aA(b)&0x3ffffff
v=this.bE(x,w)
if(v==null)this.bN(x,w,[this.bK(b,c)])
else{u=this.c8(v,b)
if(u>=0)v[u].b=c
else v.push(this.bK(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bd(this))
z=z.c}},
cz:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b8(a,b)
if(z==null)this.bN(a,b,this.bK(b,c))
else z.b=c},
en:function(){this.r=this.r+1&67108863},
bK:function(a,b){var z,y
z=new H.he(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.en()
return z},
c8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.dT(this)},
b8:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cH:function(a,b){return this.b8(a,b)!=null},
bJ:function(){var z=Object.create(null)
this.bN(z,"<non-identifier-key>",z)
this.eh(z,"<non-identifier-key>")
return z},
$isdP:1},
he:{"^":"a;a,b,0c,0d"},
dQ:{"^":"fS;a,$ti",
gk:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hf(z,z.r,this.$ti)
y.c=z.e
return y}},
hf:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kR:{"^":"u:16;a",
$1:function(a){return this.a(a)}},
kS:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"u:27;a",
$1:function(a){return this.a(H.T(a))}},
h9:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdZ:1,
q:{
ha:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kM:function(a){return J.dJ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){return a},
aQ:function(a,b,c){H.bM(b)
if(a>>>0!==a||a>=c)throw H.h(H.aR(b,a))},
kv:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kL(a,b,c))
return b},
hC:{"^":"m;",$ismF:1,"%":"DataView;ArrayBufferView;cO|eP|eQ|hB|eR|eS|aP"},
cO:{"^":"hC;",
gk:function(a){return a.length},
$isB:1,
$asB:I.da},
hB:{"^":"eQ;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$asc8:function(){return[P.w]},
$ast:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aP:{"^":"eS;",
$asc8:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]}},
mb:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mc:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
md:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
me:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mf:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mg:{"^":"aP;",
gk:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hD:{"^":"aP;",
gk:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
bw:function(a,b,c){return new Uint8Array(a.subarray(b,H.kv(b,c,a.length)))},
"%":";Uint8Array"},
eP:{"^":"cO+t;"},
eQ:{"^":"eP+c8;"},
eR:{"^":"cO+t;"},
eS:{"^":"eR+c8;"}}],["","",,P,{"^":"",
jb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kD()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.jd(z),1)).observe(y,{childList:true})
return new P.jc(z,y,x)}else if(self.setImmediate!=null)return P.kE()
return P.kF()},
mL:[function(a){self.scheduleImmediate(H.b6(new P.je(H.b(a,{func:1,ret:-1})),0))},"$1","kD",4,0,12],
mM:[function(a){self.setImmediate(H.b6(new P.jf(H.b(a,{func:1,ret:-1})),0))},"$1","kE",4,0,12],
mN:[function(a){P.cX(C.n,H.b(a,{func:1,ret:-1}))},"$1","kF",4,0,12],
cX:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.e.a0(a.a,1000)
return P.k9(z<0?0:z,b)},
eg:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aZ]})
z=C.e.a0(a.a,1000)
return P.ka(z<0?0:z,b)},
kz:function(a,b){if(H.c_(a,{func:1,args:[P.a,P.ao]}))return b.hj(a,null,P.a,P.ao)
if(H.c_(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ky:function(){var z,y
for(;z=$.b3,z!=null;){$.bJ=null
y=z.b
$.b3=y
if(y==null)$.bI=null
z.a.$0()}},
mV:[function(){$.d6=!0
try{P.ky()}finally{$.bJ=null
$.d6=!1
if($.b3!=null)$.$get$d2().$1(P.f7())}},"$0","f7",0,0,3],
f2:function(a){var z=new P.eJ(H.b(a,{func:1,ret:-1}))
if($.b3==null){$.bI=z
$.b3=z
if(!$.d6)$.$get$d2().$1(P.f7())}else{$.bI.b=z
$.bI=z}},
kC:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b3
if(z==null){P.f2(a)
$.bJ=$.bI
return}y=new P.eJ(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b3=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
l4:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.j===y){P.cm(null,null,C.j,a)
return}y.toString
P.cm(null,null,y,H.b(y.bT(a),z))},
iC:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.cX(a,b)}return P.cX(a,H.b(y.bT(b),z))},
iD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aZ]}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.eg(a,b)}x=y.cZ(b,P.aZ)
$.N.toString
return P.eg(a,H.b(x,z))},
cl:function(a,b,c,d,e){var z={}
z.a=d
P.kC(new P.kA(z,e))},
f0:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f1:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kB:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cm:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bT(d):c.fI(d,-1)
P.f2(d)},
jd:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jc:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
je:{"^":"u:2;a",
$0:function(){this.a.$0()}},
jf:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eY:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.kc(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.kb(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isaZ:1,
q:{
k9:function(a,b){var z=new P.eY(!0,0)
z.e4(a,b)
return z},
ka:function(a,b){var z=new P.eY(!1,0)
z.e5(a,b)
return z}}},
kc:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kb:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.dX(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h3:function(a){if(this.c!==6)return!0
return this.b.b.cj(H.b(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
fV:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c_(z,{func:1,args:[P.a,P.ao]}))return H.db(w.ho(z,a.a,a.b,null,y,P.ao),x)
else return H.db(w.cj(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;cT:a<,b,0f_:c<,$ti",
dG:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kz(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.N,[c])
w=b==null?1:3
this.cA(new P.b2(x,w,a,b,[z,c]))
return x},
ht:function(a,b){return this.dG(a,null,b)},
cA:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaK")
z=y.a
if(z<4){y.cA(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cm(null,null,z,H.b(new P.jt(this,a),{func:1,ret:-1}))}},
cO:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaK")
y=u.a
if(y<4){u.cO(a)
return}this.a=y
this.c=u.c}z.a=this.b9(a)
y=this.b
y.toString
P.cm(null,null,y,H.b(new P.jy(z,this),{func:1,ret:-1}))}},
bM:function(){var z=H.k(this.c,"$isb2")
this.c=null
return this.b9(z)},
b9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cE:function(a){var z,y,x,w
z=H.z(this,0)
H.db(a,{futureOr:1,type:z})
y=this.$ti
x=H.b5(a,"$isbi",y,"$asbi")
if(x){z=H.b5(a,"$isaK",y,null)
if(z)P.eL(a,this)
else P.ju(a,this)}else{w=this.bM()
H.C(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bA:[function(a,b){var z
H.k(b,"$isao")
z=this.bM()
this.a=8
this.c=new P.ae(a,b)
P.bE(this,z)},function(a){return this.bA(a,null)},"hz","$2","$1","ged",4,2,30],
$isbi:1,
q:{
ju:function(a,b){var z,y,x
b.a=1
try{a.dG(new P.jv(b),new P.jw(b),null)}catch(x){z=H.aN(x)
y=H.b9(x)
P.l4(new P.jx(b,z,y))}},
eL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaK")
if(z>=4){y=b.bM()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.k(b.c,"$isb2")
b.a=2
b.c=a
a.cO(y)}},
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
P.cl(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cl(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jA(x,b,r).$0()}else if((y&2)!==0)new P.jz(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.I(y).$isbi){if(y.a>=4){n=H.k(t.c,"$isb2")
t.c=null
b=t.b9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eL(y,t)
return}}m=b.b
n=H.k(m.c,"$isb2")
m.c=null
b=m.b9(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
jt:{"^":"u:2;a,b",
$0:function(){P.bE(this.a,this.b)}},
jy:{"^":"u:2;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
jv:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cE(a)}},
jw:{"^":"u:34;a",
$2:function(a,b){this.a.bA(a,H.k(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jx:{"^":"u:2;a,b,c",
$0:function(){this.a.bA(this.b,this.c)}},
jB:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dE(H.b(w.d,{func:1}),null)}catch(v){y=H.aN(v)
x=H.b9(v)
if(this.d){w=H.k(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.I(z).$isbi){if(z instanceof P.aK&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.k(z.gf_(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ht(new P.jC(t),null)
w.a=!1}}},
jC:{"^":"u:36;a",
$1:function(a){return this.a}},
jA:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cj(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aN(t)
y=H.b9(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
jz:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isae")
w=this.c
if(w.h3(z)&&w.e!=null){v=this.b
v.b=w.fV(z)
v.a=!1}}catch(u){y=H.aN(u)
x=H.b9(u)
w=H.k(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
eJ:{"^":"a;a,0b"},
cU:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aK(0,$.N,[P.A])
z.a=0
this.h0(new P.io(z,this),!0,new P.ip(z,y),y.ged())
return y}},
io:{"^":"u;a,b",
$1:function(a){H.C(a,H.az(this.b,"cU",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.az(this.b,"cU",0)]}}},
ip:{"^":"u:2;a,b",
$0:function(){this.b.cE(this.a.a)}},
ea:{"^":"a;$ti"},
im:{"^":"a;"},
aZ:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
kj:{"^":"a;",$ismK:1},
kA:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jW:{"^":"kj;",
hp:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.f0(null,null,this,a,-1)}catch(x){z=H.aN(x)
y=H.b9(x)
P.cl(null,null,this,z,H.k(y,"$isao"))}},
hq:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.f1(null,null,this,a,b,-1,c)}catch(x){z=H.aN(x)
y=H.b9(x)
P.cl(null,null,this,z,H.k(y,"$isao"))}},
fI:function(a,b){return new P.jY(this,H.b(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jX(this,H.b(a,{func:1,ret:-1}))},
cZ:function(a,b){return new P.jZ(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dE:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.f0(null,null,this,a,b)},
cj:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.j)return a.$1(b)
return P.f1(null,null,this,a,b,c,d)},
ho:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.j)return a.$2(b,c)
return P.kB(null,null,this,a,b,c,d,e,f)},
hj:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jY:{"^":"u;a,b,c",
$0:function(){return this.a.dE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jX:{"^":"u:3;a,b",
$0:function(){return this.a.hp(this.b)}},
jZ:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hq(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hh:function(a,b,c){H.bM(a)
return H.v(H.kN(a,new H.aV(0,0,[b,c])),"$isdP",[b,c],"$asdP")},
hg:function(a,b){return new H.aV(0,0,[a,b])},
hi:function(a,b,c,d){return new P.jI(0,0,[d])},
h5:function(a,b,c){var z,y
if(P.d7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.kx(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eb(b,H.kY(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cE:function(a,b,c){var z,y,x
if(P.d7(a))return b+"..."+c
z=new P.bX(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.eb(x.gaz(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
d7:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kx:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.D();t=s,s=r){r=z.gN(z);++x
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
dT:function(a){var z,y,x
z={}
if(P.d7(a))return"{...}"
y=new P.bX("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fp(a,new P.hn(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
jI:{"^":"jD;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eO(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d4()
this.b=z}return this.cC(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d4()
this.c=y}return this.cC(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d4()
this.d=z}y=this.cF(b)
x=z[y]
if(x==null)z[y]=[this.bz(b)]
else{if(this.cK(x,b)>=0)return!1
x.push(this.bz(b))}return!0},
U:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cP(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ek(z,b)
x=this.cK(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cC:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$isd3")!=null)return!1
a[b]=this.bz(b)
return!0},
cP:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd3")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cD:function(){this.r=this.r+1&67108863},
bz:function(a){var z,y
z=new P.d3(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cD()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cD()},
cF:function(a){return J.aA(a)&0x3ffffff},
ek:function(a,b){return a[this.cF(b)]},
cK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
q:{
d4:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d3:{"^":"a;a,0b,0c"},
jJ:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
q:{
eO:function(a,b,c){var z=new P.jJ(a,b,[c])
z.c=a.e
return z}}},
jD:{"^":"i4;"},
cc:{"^":"jK;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gX:function(a){return new H.dR(a,this.gk(a),0,[H.bL(this,a,"t",0)])},
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
i:function(a){return P.cE(a,"[","]")}},
hm:{"^":"aa;"},
hn:{"^":"u:13;a,b",
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
H.b(b,{func:1,ret:-1,args:[H.bL(this,a,"aa",0),H.bL(this,a,"aa",1)]})
for(z=J.bN(this.gau(a));z.D();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.bb(this.gau(a))},
i:function(a){return P.dT(a)},
$isa3:1},
i6:{"^":"a;$ti",
i:function(a){return P.cE(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dk("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=P.eO(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
i4:{"^":"i6;"},
jK:{"^":"a+t;"}}],["","",,P,{"^":"",cy:{"^":"a;$ti"},dv:{"^":"im;$ti"},fU:{"^":"cy;",
$ascy:function(){return[P.o,[P.f,P.A]]}},iZ:{"^":"fU;a"},j_:{"^":"dv;",
fM:function(a,b,c){var z,y,x,w
z=a.length
P.e3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ki(0,0,x)
if(w.ej(a,b,z)!==z)w.cW(C.h.bY(a,z-1),0)
return C.K.bw(x,0,w.b)},
fL:function(a){return this.fM(a,0,null)},
$asdv:function(){return[P.o,[P.f,P.A]]}},ki:{"^":"a;a,b,c",
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
if(b!==c&&(C.h.bY(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b7(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cW(w,C.h.b7(a,u)))x=u}else if(w<=2047){v=this.b
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
fW:function(a){var z=J.I(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aY(a)+"'"},
hj:function(a,b,c,d){var z,y
H.C(b,d)
z=J.h7(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
hk:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.D();)C.a.h(y,H.C(x.gN(x),c))
if(b)return y
return H.v(J.bm(y),"$isf",z,"$asf")},
cV:function(a,b,c){var z,y
z=P.A
H.v(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.v(a,"$isaU",[z],"$asaU")
y=a.length
c=P.e3(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.aa()
z=c<y}else z=!0
return H.e2(z?C.a.bw(a,b,c):a)}return P.iq(a,b,c)},
iq:function(a,b,c){var z,y,x
H.v(a,"$isd",[P.A],"$asd")
z=J.bN(a)
for(y=0;y<b;++y)if(!z.D())throw H.h(P.ah(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gN(z))
return H.e2(x)},
hW:function(a,b,c){return new H.h9(a,H.ha(a,!1,!0,!1))},
kh:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.A],"$asf")
if(c===C.u){z=$.$get$f_().b
z=z.test(b)}else z=!1
if(z)return b
y=C.y.fL(H.C(b,H.az(c,"cy",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hR(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fW(a)},
q:function(a){return new P.eK(a)},
di:function(a){H.l2(a)},
a5:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.e.ba(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fK(H.hQ(this))
y=P.bO(H.hO(this))
x=P.bO(H.hK(this))
w=P.bO(H.hL(this))
v=P.bO(H.hN(this))
u=P.bO(H.hP(this))
t=P.fL(H.hM(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fK:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bO:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"S;"},
"+double":0,
bf:{"^":"a;a",
aa:function(a,b){return C.e.aa(this.a,H.k(b,"$isbf").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fR()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.e.a0(y,6e7)%60)
w=z.$1(C.e.a0(y,1e6)%60)
v=new P.fQ().$1(y%1e6)
return""+C.e.a0(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dD:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fQ:{"^":"u:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fR:{"^":"u:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dY:{"^":"X;",
i:function(a){return"Throw of null."}},
aB:{"^":"X;a,b,c,d",
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbC()+y+x
if(!this.a)return w
v=this.gbB()
u=P.c7(this.b)
return w+v+": "+H.j(u)},
q:{
fs:function(a){return new P.aB(!1,null,null,a)},
c2:function(a,b,c){return new P.aB(!0,a,b,c)},
dk:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
ce:{"^":"aB;e,f,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cf:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
e3:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ah(b,a,c,"end",f))
return b}return c}}},
h4:{"^":"aB;e,k:f>,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){if(J.fl(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.bb(b))
return new P.h4(b,z,!0,a,c,"Index out of range")}}},
iU:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ad:function(a){return new P.iU(a)}}},
iR:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eC:function(a){return new P.iR(a)}}},
ij:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fF:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c7(z))+"."},
q:{
bd:function(a){return new P.fF(a)}}},
hG:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
e8:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fJ:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eK:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h0:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bx(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"S;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dk("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gN(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h5(this,"(",")")}},
cF:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a3:{"^":"a;$ti"},
H:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
o:{"^":"a;",$isdZ:1},
"+String":0,
bX:{"^":"a;az:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eb:function(a,b,c){var z=J.bN(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.D())}else{a+=H.j(z.gN(z))
for(;z.D();)a=a+c+H.j(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cx:function(a,b){var z=document.createElement("canvas")
return z},
fT:function(a){H.k(a,"$isa2")
return"wheel"},
dI:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
cj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a,b,c,d){var z,y
z=W.cj(W.cj(W.cj(W.cj(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f4:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.cZ(a,b)},
bl:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lb:{"^":"cR;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
lc:{"^":"m;0k:length=","%":"AccessibleNodeList"},
ld:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
le:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fw:{"^":"m;","%":";Blob"},
cw:{"^":"bl;",
bu:function(a,b,c){if(c!=null)return a.getContext(b,P.kH(c,null))
return a.getContext(b)},
dM:function(a,b){return this.bu(a,b,null)},
$iscw:1,
"%":"HTMLCanvasElement"},
dr:{"^":"m;",$isdr:1,"%":"CanvasRenderingContext2D"},
lk:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lm:{"^":"c6;0k:length=","%":"CSSPerspective"},
ln:{"^":"cB;0n:x=,0p:y=","%":"CSSPositionValue"},
lo:{"^":"c6;0n:x=,0p:y=","%":"CSSRotation"},
be:{"^":"m;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lp:{"^":"c6;0n:x=,0p:y=","%":"CSSScale"},
fH:{"^":"jj;0k:length=",
dN:function(a,b){var z=a.getPropertyValue(this.cB(a,b))
return z==null?"":z},
cB:function(a,b){var z,y
z=$.$get$dw()
y=z[b]
if(typeof y==="string")return y
y=this.f9(a,b)
z[b]=y
return y},
f9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fM()+b
if(z in a)return z
return b},
f0:function(a,b,c,d){a.setProperty(b,c,d)},
gbU:function(a){return a.bottom},
gak:function(a){return a.height},
gaH:function(a){return a.left},
gaZ:function(a){return a.right},
gb3:function(a){return a.top},
gal:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fI:{"^":"a;",
gaH:function(a){return this.dN(a,"left")}},
cB:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c6:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lq:{"^":"cB;0k:length=","%":"CSSTransformValue"},
lr:{"^":"c6;0n:x=,0p:y=","%":"CSSTranslation"},
ls:{"^":"cB;0k:length=","%":"CSSUnparsedValue"},
lt:{"^":"m;0k:length=","%":"DataTransferItemList"},
lu:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
lv:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lw:{"^":"fO;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fO:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lx:{"^":"jl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a9,P.S]]},
$ast:function(){return[[P.a9,P.S]]},
$isd:1,
$asd:function(){return[[P.a9,P.S]]},
$isf:1,
$asf:function(){return[[P.a9,P.S]]},
$asy:function(){return[[P.a9,P.S]]},
"%":"ClientRectList|DOMRectList"},
fP:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gal(a))+" x "+H.j(this.gak(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b5(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=J.b8(b)
return a.left===z.gaH(b)&&a.top===z.gb3(b)&&this.gal(a)===z.gal(b)&&this.gak(a)===z.gak(b)},
gS:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gbU:function(a){return a.bottom},
gak:function(a){return a.height},
gaH:function(a){return a.left},
gaZ:function(a){return a.right},
gb3:function(a){return a.top},
gal:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.S]},
"%":";DOMRectReadOnly"},
ly:{"^":"jn;",
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
lz:{"^":"m;0k:length=","%":"DOMTokenList"},
ji:{"^":"cc;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hv(this)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
a_:{"^":"J;",
gd0:function(a){return new W.ji(a,a.children)},
gbd:function(a){return P.hT(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.S)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a1:{"^":"m;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
cX:["dS",function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.b6(H.b(c,{func:1,args:[W.a1]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eT|eU|eW|eX"},
bh:{"^":"fw;",$isbh:1,"%":"File"},
lS:{"^":"js;",
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
lT:{"^":"a2;0k:length=","%":"FileWriter"},
lW:{"^":"bl;0k:length=","%":"HTMLFormElement"},
bj:{"^":"m;",$isbj:1,"%":"Gamepad"},
lX:{"^":"cR;0n:x=,0p:y=","%":"Gyroscope"},
lY:{"^":"m;0k:length=","%":"History"},
lZ:{"^":"jF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c9:{"^":"m;0d3:data=",$isc9:1,"%":"ImageData"},
dH:{"^":"bl;",$isdH:1,"%":"HTMLImageElement"},
bn:{"^":"cY;",$isbn:1,"%":"KeyboardEvent"},
m3:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
m4:{"^":"cR;0n:x=,0p:y=","%":"Magnetometer"},
m6:{"^":"m;0k:length=","%":"MediaList"},
m7:{"^":"a2;",
cX:function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.dS(a,b,c,!1)},
"%":"MessagePort"},
m8:{"^":"jL;",
j:function(a,b){return P.aM(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aM(y.value[1]))}},
gau:function(a){var z=H.c([],[P.o])
this.L(a,new W.hy(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hy:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m9:{"^":"jM;",
j:function(a,b){return P.aM(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aM(y.value[1]))}},
gau:function(a){var z=H.c([],[P.o])
this.L(a,new W.hz(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hz:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"m;",$isbo:1,"%":"MimeType"},
ma:{"^":"jO;",
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
at:{"^":"cY;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jh:{"^":"cc;a",
gX:function(a){var z=this.a.childNodes
return new W.dF(z,z.length,-1,[H.bL(C.L,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.J]},
$asd:function(){return[W.J]},
$asf:function(){return[W.J]}},
J:{"^":"a2;",
hl:function(a,b){var z,y
try{z=a.parentNode
J.fn(z,b,a)}catch(y){H.aN(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dT(a):z},
eW:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hE:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
br:{"^":"m;0k:length=",$isbr:1,"%":"Plugin"},
mk:{"^":"jU;",
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
mp:{"^":"k_;",
j:function(a,b){return P.aM(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aM(y.value[1]))}},
gau:function(a){var z=H.c([],[P.o])
this.L(a,new W.i1(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"RTCStatsReport"},
i1:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mq:{"^":"bl;0k:length=","%":"HTMLSelectElement"},
cR:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a2;",$isbu:1,"%":"SourceBuffer"},
mr:{"^":"eU;",
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
ms:{"^":"k1;",
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
mu:{"^":"k4;",
j:function(a,b){return a.getItem(H.T(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gau:function(a){var z=H.c([],[P.o])
this.L(a,new W.il(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.o,P.o]},
$isa3:1,
$asa3:function(){return[P.o,P.o]},
"%":"Storage"},
il:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"a2;",$isby:1,"%":"TextTrack"},
bz:{"^":"a2;",$isbz:1,"%":"TextTrackCue|VTTCue"},
mz:{"^":"k8;",
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
mA:{"^":"eX;",
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
mB:{"^":"m;0k:length=","%":"TimeRanges"},
bA:{"^":"m;",$isbA:1,"%":"Touch"},
b_:{"^":"cY;",$isb_:1,"%":"TouchEvent"},
mC:{"^":"ke;",
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
mD:{"^":"m;0k:length=","%":"TrackDefaultList"},
cY:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mG:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mI:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mJ:{"^":"a2;0k:length=","%":"VideoTrackList"},
bD:{"^":"at;",
gfQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gfP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
ja:{"^":"a2;",
eX:function(a,b){return a.requestAnimationFrame(H.b6(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mO:{"^":"kl;",
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
mP:{"^":"fP;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b5(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=J.b8(b)
return a.left===z.gaH(b)&&a.top===z.gb3(b)&&a.width===z.gal(b)&&a.height===z.gak(b)},
gS:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gal:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mR:{"^":"kn;",
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
mS:{"^":"kp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$isf:1,
$asf:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mT:{"^":"kr;",
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
mU:{"^":"kt;",
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
jo:{"^":"cU;a,b,c,$ti",
h0:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mQ:{"^":"jo;a,b,c,$ti"},
jp:{"^":"ea;a,b,c,d,e,$ti",
fd:function(){var z=this.d
if(z!=null&&this.a<=0)J.fo(this.b,this.c,z,!1)},
q:{
V:function(a,b,c,d,e){var z=c==null?null:W.f4(new W.jq(c),W.a1)
z=new W.jp(0,a,b,z,!1,[e])
z.fd()
return z}}},
jq:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa1"))}},
y:{"^":"a;$ti",
gX:function(a){return new W.dF(a,this.gk(a),-1,[H.bL(this,a,"y",0)])}},
dF:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fm(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
jj:{"^":"m+fI;"},
jk:{"^":"m+t;"},
jl:{"^":"jk+y;"},
jm:{"^":"m+t;"},
jn:{"^":"jm+y;"},
jr:{"^":"m+t;"},
js:{"^":"jr+y;"},
jE:{"^":"m+t;"},
jF:{"^":"jE+y;"},
jL:{"^":"m+aa;"},
jM:{"^":"m+aa;"},
jN:{"^":"m+t;"},
jO:{"^":"jN+y;"},
jP:{"^":"m+t;"},
jQ:{"^":"jP+y;"},
jT:{"^":"m+t;"},
jU:{"^":"jT+y;"},
k_:{"^":"m+aa;"},
eT:{"^":"a2+t;"},
eU:{"^":"eT+y;"},
k0:{"^":"m+t;"},
k1:{"^":"k0+y;"},
k4:{"^":"m+aa;"},
k7:{"^":"m+t;"},
k8:{"^":"k7+y;"},
eW:{"^":"a2+t;"},
eX:{"^":"eW+y;"},
kd:{"^":"m+t;"},
ke:{"^":"kd+y;"},
kk:{"^":"m+t;"},
kl:{"^":"kk+y;"},
km:{"^":"m+t;"},
kn:{"^":"km+y;"},
ko:{"^":"m+t;"},
kp:{"^":"ko+y;"},
kq:{"^":"m+t;"},
kr:{"^":"kq+y;"},
ks:{"^":"m+t;"},
kt:{"^":"ks+y;"}}],["","",,P,{"^":"",
kK:function(a){var z,y
z=J.I(a)
if(!!z.$isc9){y=z.gd3(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eZ(a.data,a.height,a.width)},
kJ:function(a){if(a instanceof P.eZ)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var z,y,x,w,v
if(a==null)return
z=P.hg(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.Z(0,v,a[v])}return z},
kH:function(a,b){var z={}
a.L(0,new P.kI(z))
return z},
dC:function(){var z=$.dB
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dB=z}return z},
fM:function(){var z,y
z=$.dy
if(z!=null)return z
y=$.dz
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dz=y}if(y)z="-moz-"
else{y=$.dA
if(y==null){y=!P.dC()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.dA=y}if(y)z="-ms-"
else z=P.dC()?"-o-":"-webkit-"}$.dy=z
return z},
eZ:{"^":"a;d3:a>,b,c",$isc9:1},
kI:{"^":"u:13;a",
$2:function(a,b){this.a[a]=b}},
fY:{"^":"cc;a,b",
gbF:function(){var z,y,x
z=this.b
y=H.az(z,"t",0)
x=W.a_
return new H.ho(new H.j8(z,H.b(new P.fZ(),{func:1,ret:P.a5,args:[y]}),[y]),H.b(new P.h_(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bb(this.gbF().a)},
j:function(a,b){var z=this.gbF()
return z.b.$1(J.dj(z.a,b))},
gX:function(a){var z=P.hk(this.gbF(),!1,W.a_)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
fZ:{"^":"u:24;",
$1:function(a){return!!J.I(H.k(a,"$isJ")).$isa_}},
h_:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isJ"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bW:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b5(b,"$isbW",[P.S],null)
if(!z)return!1
z=this.a
y=J.b8(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.aA(this.a)
y=J.aA(this.b)
return P.eM(P.bF(P.bF(0,z),y))}},
jV:{"^":"a;$ti",
gaZ:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbU:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b5(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=this.a
y=J.b8(b)
x=y.gaH(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb3(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaZ(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbU(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aA(z)
x=this.b
w=J.aA(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.eM(P.bF(P.bF(P.bF(P.bF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d2:function(a,b){var z,y
H.v(b,"$isbW",[P.S],"$asbW")
z=b.a
y=this.a
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"jV;aH:a>,b3:b>,al:c>,ak:d>,$ti",q:{
hT:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.aa()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.aa()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",lA:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},lB:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lC:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lD:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},lE:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lF:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lG:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lH:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},lI:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lJ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},lK:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},lL:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lM:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lN:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lO:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lP:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lQ:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},lR:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lU:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},lV:{"^":"bk;0n:x=,0p:y=","%":"SVGForeignObjectElement"},h2:{"^":"bk;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bk:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m_:{"^":"bk;0n:x=,0p:y=","%":"SVGImageElement"},bT:{"^":"m;",$isbT:1,"%":"SVGLength"},m2:{"^":"jH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$isf:1,
$asf:function(){return[P.bT]},
$asy:function(){return[P.bT]},
"%":"SVGLengthList"},m5:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bV:{"^":"m;",$isbV:1,"%":"SVGNumber"},mh:{"^":"jS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$isf:1,
$asf:function(){return[P.bV]},
$asy:function(){return[P.bV]},
"%":"SVGNumberList"},mj:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},ml:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},mm:{"^":"m;0k:length=","%":"SVGPointList"},mn:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},mo:{"^":"h2;0n:x=,0p:y=","%":"SVGRectElement"},mv:{"^":"k6;",
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
"%":"SVGStringList"},Q:{"^":"a_;",
gd0:function(a){return new P.fY(a,new W.jh(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mw:{"^":"bk;0n:x=,0p:y=","%":"SVGSVGElement"},ir:{"^":"bk;","%":"SVGTextPathElement;SVGTextContentElement"},my:{"^":"ir;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bZ:{"^":"m;",$isbZ:1,"%":"SVGTransform"},mE:{"^":"kg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bZ]},
$isd:1,
$asd:function(){return[P.bZ]},
$isf:1,
$asf:function(){return[P.bZ]},
$asy:function(){return[P.bZ]},
"%":"SVGTransformList"},mH:{"^":"bk;0n:x=,0p:y=","%":"SVGUseElement"},jG:{"^":"m+t;"},jH:{"^":"jG+y;"},jR:{"^":"m+t;"},jS:{"^":"jR+y;"},k5:{"^":"m+t;"},k6:{"^":"k5+y;"},kf:{"^":"m+t;"},kg:{"^":"kf+y;"}}],["","",,P,{"^":"",lf:{"^":"m;0k:length=","%":"AudioBuffer"},lg:{"^":"jg;",
j:function(a,b){return P.aM(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aM(y.value[1]))}},
gau:function(a){var z=H.c([],[P.o])
this.L(a,new P.fu(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"AudioParamMap"},fu:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lh:{"^":"a2;0k:length=","%":"AudioTrackList"},fv:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mi:{"^":"fv;0k:length=","%":"OfflineAudioContext"},jg:{"^":"m+aa;"}}],["","",,P,{"^":"",cQ:{"^":"m;",
hr:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc9)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kJ(g))
return}if(!!z.$isdH)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fs("Incorrect number or type of arguments"))},
dF:function(a,b,c,d,e,f,g){return this.hr(a,b,c,d,e,f,g,null,null,null)},
$iscQ:1,
"%":"WebGLRenderingContext"},is:{"^":"m;",$isis:1,"%":"WebGLTexture"},iP:{"^":"m;",$isiP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mt:{"^":"k3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aM(a.item(b))},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$isf:1,
$asf:function(){return[[P.a3,,,]]},
$asy:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},k2:{"^":"m+t;"},k3:{"^":"k2+y;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
b6:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cm:function(a,b,c){var z=H.az(this,"af",0)
H.b(b,{func:1,ret:P.a5,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aL:function(a,b){return this.cm(a,null,b)},
cN:function(a){var z
H.v(a,"$isd",[H.az(this,"af",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cs:function(a,b){var z
H.v(b,"$isd",[H.az(this,"af",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.al(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"af",0)
H.C(b,z)
z=[z]
if(this.cN(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cs(x,H.c([b],z))}},
bP:function(a,b){var z,y
H.v(b,"$isd",[H.az(this,"af",0)],"$asd")
if(this.cN(b)){z=this.a
y=z.length
C.a.bP(z,b)
this.cs(y,b)}},
$isd:1,
q:{
cz:function(a){var z=new O.af([a])
z.b6(a)
return z}}},cM:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
e1:function(a){var z=this.b
if(!(z==null))z.w(a)},
ax:function(){return this.e1(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gca(z)
else return V.aX()},
bs:function(a){var z=this.a
if(a==null)C.a.h(z,V.aX())
else C.a.h(z,a)
this.ax()},
av:function(){var z=this.a
if(z.length>0){z.pop()
this.ax()}}}}],["","",,E,{"^":"",cs:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a_:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbv:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.b(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.U(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.b(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.e6])
w.b=!0
this.aI(w)}},
a9:function(a,b){var z
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a9(0,b)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.ax()
a.ci(this.f)
z=a.dy
y=(z&&C.a).gca(z)
if(y!=null&&this.d!=null)y.dD(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
a.cg()
a.dx.av()},
gt:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aI:function(a){var z=this.z
if(!(z==null))z.w(a)},
a1:function(){return this.aI(null)},
h9:[function(a){H.k(a,"$isl")
this.e=null
this.aI(a)},function(){return this.h9(null)},"ie","$1","$0","gdC",0,2,0],
h7:[function(a){this.aI(H.k(a,"$isl"))},function(){return this.h7(null)},"ib","$1","$0","gdB",0,2,0],
ia:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdB(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.bP()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gh6",8,0,8],
ic:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdB(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.bP()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.U(t.a,y)}}this.a1()},"$2","gh8",8,0,8],
$isau:1,
q:{
dE:function(a,b,c,d,e,f){var z,y
z=new E.aC()
z.a=d
z.b=!0
y=O.cz(E.aC)
z.y=y
y.aL(z.gh6(),z.gh8())
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
z.sbv(0,e)
return z}}},hX:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dZ:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cM()
y=[V.aD]
z.a=H.c([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hZ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cM()
z.a=H.c([],y)
v=z.gt()
v.toString
x=H.b(new E.i_(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cM()
z.a=H.c([],y)
y=z.gt()
y.toString
w=H.b(new E.i0(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bY])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.o,A.cS])},
ghi:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.l(0,y.gT(y))
this.z=y
z=y}return z},
ci:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gca(z):a;(z&&C.a).h(z,y)},
cg:function(){var z=this.dy
if(z.length>1)z.pop()},
cY:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d1(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Z(0,z,a)},
q:{
hY:function(a,b){var z=new E.hX(a,b)
z.dZ(a,b)
return z}}},hZ:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},i_:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i0:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a_:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e3:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hm()},function(){return this.e3(null)},"e2","$1","$0","gct",0,2,0],
gfU:function(){var z,y,x
z=Date.now()
y=C.e.a0(P.dD(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
cQ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.c7(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c7(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hm:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iB(this),{func:1,ret:-1,args:[P.S]})
C.w.ei(z)
C.w.eX(z,W.f4(y,P.S))}},
hk:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cQ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.dD(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ax()
w=x.db
C.a.sk(w.a,0)
w.ax()
w=x.dx
C.a.sk(w.a,0)
w.ax()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a4(this.e)}}catch(v){z=H.aN(v)
y=H.b9(v)
P.di("Error: "+H.j(z))
P.di("Stack: "+H.j(y))
throw H.h(z)}},
q:{
iA:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscw)return E.ef(a,!0,!0,!0,!1)
y=W.cx(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd0(a).h(0,y)
w=E.ef(y,!0,!0,!0,!1)
w.a=a
return w},
ef:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iz()
y=P.hh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bu(a,"webgl",y)
x=H.k(x==null?C.k.bu(a,"experimental-webgl",y):x,"$iscQ")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hY(x,a)
w=new T.it(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iV(a)
v=new X.hc()
v.c=new X.as(!1,!1,!1)
v.d=P.hi(null,null,null,P.A)
w.b=v
v=new X.hA(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hl(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iF(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.ea,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.b(w.geA(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.b(w.geD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.b(w.gex(),q),!1,r))
v=w.z
p=W.bn
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.b(w.geF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.b(w.geE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.b(w.geI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.b(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.b(w.geJ(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.V(a,H.T(W.fT(a)),H.b(w.geL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.b(w.geB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.b(w.geC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.b(w.geM(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.b(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.b(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.b(w.geT(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.cQ()
return z}}},iB:{"^":"u:28;a",
$1:function(a){var z
H.l1(a)
z=this.a
if(z.z){z.z=!1
z.hk()}}}}],["","",,Z,{"^":"",eH:{"^":"a;a,b",q:{
d1:function(a,b,c){var z
H.v(c,"$isf",[P.A],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.eH(b,z)}}},dp:{"^":"cs;a,b,c,d,e",
Y:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aN(y)
x=P.q('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eI:{"^":"a;a",$isli:1},cv:{"^":"a;a,0b,c,d",
at:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
b5:function(a){var z,y,x
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
$ismx:1},ca:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aY(this.c)+"'")+"]"}},b0:{"^":"a;a",
gcn:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$b1().a)!==0)++y
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
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eG()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
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
if((y&$.$get$b1().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
aj:function(a){return new Z.b0(a)}}}}],["","",,D,{"^":"",ds:{"^":"a;"},bP:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fX(z))
return x!==0},
d6:function(){return this.w(null)},
hn:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
aw:function(a){return this.hn(a,!0,!1)},
q:{
D:function(){var z=new D.bP()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fX:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bQ:{"^":"l;c,d,a,0b,$ti"},bR:{"^":"l;c,d,a,0b,$ti"},G:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dq:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"lj<"}},dN:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dO:{"^":"l;c,a,0b"},hc:{"^":"a;0a,0b,0c,0d",
hf:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dO(a,this)
y.b=!0
return z.w(y)},
hb:function(a){var z,y
this.c=a.b
this.d.U(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dO(a,this)
y.b=!0
return z.w(y)}},dS:{"^":"cd;x,y,c,d,e,a,0b"},hl:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
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
cf:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
aW:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
hg:function(a){var z,y,x,w,v,u,t,s
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
w=new X.cN(new V.P(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.w(w)
return!0},
eH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.dS(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.w(x)
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
return z+(this.c?"Shift+":"")}},bp:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},hA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bD:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaE()
x=new X.bp(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cf:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bD(a,b,!0))
return!0},
aW:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bD(a,b,!0))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bD(a,b,!1))
return!0},
hh:function(a,b){var z,y,x,w,v,u,t
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
x=new X.cN(new V.P(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.w(x)
return!0},
gd5:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbt:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdA:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cN:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"l;"},ej:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},iF:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.O],"$asf")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaE()
w=new X.ej(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
he:function(a){var z
H.v(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.w(this.ap(a,!0))
return!0},
hc:function(a){var z
H.v(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.w(this.ap(a,!0))
return!0},
hd:function(a){var z
H.v(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.w(this.ap(a,!1))
return!0}},iV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.e5(0,0,(z&&C.k).gbd(z).c,C.k.gbd(z).d)},
cI:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dN(z,new X.as(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.O(y-w,x-v)},
aO:function(a){return new V.P(a.movementX,a.movementY)},
bL:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.ah(u.pageX)
C.i.ah(u.pageY)
s=z.left
C.i.ah(u.pageX)
C.a.h(y,new V.O(t-s,C.i.ah(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dq(z,new X.as(y,a.altKey,a.shiftKey))},
hN:[function(a){this.f=!0},"$1","geD",4,0,4],
hH:[function(a){this.f=!1},"$1","gex",4,0,4],
hK:[function(a){if(this.f)a.preventDefault()},"$1","geA",4,0,4],
hP:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cI(a)
if(this.b.hf(z))a.preventDefault()},"$1","geF",4,0,17],
hO:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cI(a)
if(this.b.hb(z))a.preventDefault()},"$1","geE",4,0,17],
hR:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.an(a)
x=this.aO(a)
if(this.d.cf(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.aq(a)
if(this.c.cf(y,w))a.preventDefault()},"$1","geI",4,0,5],
hT:[function(a){var z,y,x
H.k(a,"$isat")
this.aD(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aW(z,x))a.preventDefault()},"$1","geK",4,0,5],
hM:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d2(0,new P.bW(a.clientX,a.clientY,[P.S]))){this.aD(a)
y=this.an(a)
if(this.x){x=this.aO(a)
if(this.d.aW(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.aW(y,w))a.preventDefault()}},"$1","geC",4,0,5],
hS:[function(a){var z,y,x
H.k(a,"$isat")
this.aD(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geJ",4,0,5],
hL:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d2(0,new P.bW(a.clientX,a.clientY,[P.S]))){this.aD(a)
y=this.an(a)
if(this.x){x=this.aO(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geB",4,0,5],
hU:[function(a){var z,y
H.k(a,"$isbD")
this.aD(a)
z=new V.P((a&&C.v).gfP(a),C.v.gfQ(a)).v(0,180)
if(this.x){if(this.d.hg(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.hh(z,y))a.preventDefault()},"$1","geL",4,0,31],
hV:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.aq(this.y)
this.d.eH(w,v,x)}},"$1","geM",4,0,4],
i2:[function(a){var z
H.k(a,"$isb_")
this.a.focus()
this.f=!0
this.bO(a)
z=this.bL(a)
if(this.e.he(z))a.preventDefault()},"$1","geU",4,0,10],
i0:[function(a){var z
H.k(a,"$isb_")
this.bO(a)
z=this.bL(a)
if(this.e.hc(z))a.preventDefault()},"$1","geS",4,0,10],
i1:[function(a){var z
H.k(a,"$isb_")
this.bO(a)
z=this.bL(a)
if(this.e.hd(z))a.preventDefault()},"$1","geT",4,0,10]}}],["","",,D,{"^":"",fN:{"^":"a;",$isW:1,$isau:1},W:{"^":"a;",$isau:1},hd:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
cu:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eG:[function(a){var z=this.ch
if(!(z==null))z.w(a)},function(){return this.eG(null)},"hQ","$1","$0","gcM",0,2,0],
hW:[function(a){var z,y,x
H.v(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geN",4,0,33],
hE:[function(a,b){var z,y,x,w,v
z=D.W
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcM(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.k(b[w],"$isW")
v.gt().h(0,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.cu(z)},"$2","geu",8,0,18],
hY:[function(a,b){var z,y,x,w,v
z=D.W
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcM(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.k(b[w],"$isW")
v.gt().U(0,x)}z=new D.bR(a,b,this,[z])
z.b=!0
this.cu(z)},"$2","geP",8,0,18],
ee:function(a){var z=C.a.aS(this.e,a)
return z},
$asd:function(){return[D.W]},
$asaf:function(){return[D.W]}},hJ:{"^":"a;",$isW:1,$isau:1},ii:{"^":"a;",$isW:1,$isau:1},iw:{"^":"a;",$isW:1,$isau:1},ix:{"^":"a;",$isW:1,$isau:1},iy:{"^":"a;",$isW:1,$isau:1}}],["","",,V,{"^":"",
ll:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hx",8,0,32],
la:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dO(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a8("null",c)
return C.h.a8(C.i.dH($.n.$2(a,0)?0:a,b),c+b+1)},
b7:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.w],"$asf")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.Z(z,u,C.h.a8(z[u],x))}return z},
dh:function(a,b){return C.i.hu(Math.pow(b,C.B.c7(Math.log(H.kG(a))/Math.log(b))))},
a7:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aO:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
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
dW:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
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
y=V.b7(H.c([this.a,this.d,this.r],z),3,0)
x=V.b7(H.c([this.b,this.e,this.x],z),3,0)
w=V.b7(H.c([this.c,this.f,this.y],z),3,0)
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
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
c9:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.aX()
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
dI:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gae(a)
if(typeof z!=="number")return z.l()
y=C.i.l(z,y)
z=this.b
x=a.gaf(a)
if(typeof z!=="number")return z.l()
x=C.i.l(z,x)
z=this.c
w=a.gag()
if(typeof z!=="number")return z.l()
w=C.i.l(z,w)
z=this.e
v=a.gae(a)
if(typeof z!=="number")return z.l()
v=C.i.l(z,v)
z=this.f
u=a.gaf(a)
if(typeof z!=="number")return z.l()
u=C.i.l(z,u)
z=this.r
t=a.gag()
if(typeof z!=="number")return z.l()
t=C.i.l(z,t)
z=this.y
s=a.gae(a)
if(typeof z!=="number")return z.l()
s=C.i.l(z,s)
z=this.z
r=a.gaf(a)
if(typeof z!=="number")return z.l()
r=C.i.l(z,r)
z=this.Q
q=a.gag()
if(typeof z!=="number")return z.l()
return new V.K(y+x+w,v+u+t,s+r+C.i.l(z,q))},
b4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.an(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
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
du:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b7(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b7(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b7(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b7(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(a){return this.du(a,3,0)},
G:function(){return this.du("",3,0)},
q:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aX:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
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
an:{"^":"a;n:a>,p:b>,c",
I:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
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
e4:{"^":"a;n:a>,p:b>,c,d",
ga3:function(){var z,y
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
P:{"^":"a;a,b",
fZ:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,19],
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
v:function(a,b){var z,y
if($.n.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
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
K:{"^":"a;a,b,c",
fZ:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,19],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cb:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aT:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){if($.n.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
dw:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fD:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x,0y",
by:function(a){var z=V.la(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.w(a)},
sck:function(a,b){},
scc:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.by(z)}z=new D.G("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.K(z)}},
sce:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.by(z)}z=new D.G("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.K(z)}},
sa2:function(a,b){var z,y
b=this.by(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.w])
z.b=!0
this.K(z)}},
scd:function(a){var z,y,x
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
sM:function(a){var z,y,x
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
sc_:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.w])
z.b=!0
this.K(z)}},
a9:function(a,b){var z,y,x,w
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
cA:function(){var z=new U.fD()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},du:{"^":"ab;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aJ:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.du))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}},dG:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaC",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.K(z)},"$2","ges",8,0,20],
hX:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.U(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geO",8,0,20],
aJ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aJ(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aX():x
z=this.e
if(!(z==null))z.aw(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.ab]},
$asaf:function(){return[U.ab]},
$isab:1},ab:{"^":"ds;"},iW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaC",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd5()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbG(),y)
C.a.h(z.a,x)
x=this.a.c.gdA()
x.toString
z=H.b(this.gbH(),y)
C.a.h(x.a,z)
z=this.a.c.gbt()
z.toString
y=H.b(this.gbI(),y)
C.a.h(z.a,y)
return!0},
eo:[function(a){H.k(a,"$isl")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbG",4,0,1],
ep:[function(a){var z,y,x,w,v,u,t
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
z=new V.P(y.a,y.b).l(0,2).v(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.P(x.a,x.b).l(0,2).v(0,z.ga3())
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
this.Q=new V.P(y.a,y.b).l(0,2).v(0,z.ga3())}this.ac()},"$1","gbH",4,0,1],
eq:[function(a){var z,y,x
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
this.ac()}},"$1","gbI",4,0,1],
aJ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.ch=y
x=b.y
this.b.a9(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isab:1},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaC",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd5()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbG(),y)
C.a.h(z.a,x)
x=this.a.c.gdA()
x.toString
z=H.b(this.gbH(),y)
C.a.h(x.a,z)
z=this.a.c.gbt()
z.toString
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gel(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gfc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gfa(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.P(z,y)},
eo:[function(a){a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbG",4,0,1],
ep:[function(a){var z,y,x,w,v,u,t
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
z=this.ai(new V.P(y.a,y.b).l(0,2).v(0,z.ga3()))
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
w=this.ai(new V.P(x.a,x.b).l(0,2).v(0,z.ga3()))
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
this.dx=this.ai(new V.P(y.a,y.b).l(0,2).v(0,z.ga3()))}this.ac()},"$1","gbH",4,0,1],
eq:[function(a){var z,y,x
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
this.ac()}},"$1","gbI",4,0,1],
hA:[function(a){if(H.e(H.k(a,"$isl"),"$isdS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gel",4,0,1],
hB:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ai(new V.P(x.a,x.b).l(0,2).v(0,z.ga3()))
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
this.dx=this.ai(new V.P(y.a,y.b).l(0,2).v(0,z.ga3()))
this.ac()},"$1","gem",4,0,1],
i6:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfc",4,0,1],
i5:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isej")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ai(new V.P(y.a,y.b).l(0,2).v(0,z.ga3()))
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
w=this.ai(new V.P(x.a,x.b).l(0,2).v(0,z.ga3()))
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
this.dx=this.ai(new V.P(y.a,y.b).l(0,2).v(0,z.ga3()))}this.ac()},"$1","gfb",4,0,1],
i4:[function(a){var z,y,x
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
this.ac()}},"$1","gfa",4,0,1],
aJ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.dy=y
x=b.y
this.c.a9(0,x)
this.b.a9(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isab:1},iY:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.w(a)},
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.ger(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hC:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.U(this.b,this.a.b.c))return
H.e(a,"$iscN")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.w])
z.b=!0
this.K(z)}},"$1","ger",4,0,1],
aJ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isab:1}}],["","",,M,{"^":"",fE:{"^":"af;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cv","$1","$0","gP",0,2,0],
hZ:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geQ",8,0,21],
i_:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.U(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geR",8,0,21],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asd:function(){return[M.av]},
$asaf:function(){return[M.av]},
$isav:1},fG:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cv","$1","$0","gP",0,2,0],
saR:function(a){var z,y,x
if(a==null)a=new X.h3()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
sb_:function(a,b){var z,y,x
if(b==null)b=X.cC(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cW])
z.b=!0
this.V(z)}},
sb0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bY])
z.b=!0
this.V(z)}},
a4:function(a){a.ci(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.a9(0,a)
this.d.a4(a)
this.a.b5(a)
this.b.toString
a.cg()},
$isav:1},fV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.V(null)},"cv","$1","$0","gP",0,2,0],
hI:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.bP()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gey",8,0,8],
hJ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.bP()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.U(s.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gez",8,0,8],
saR:function(a){var z,y,x
if(a==null)a=X.e_(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
sb_:function(a,b){var z,y,x
if(b==null)b=X.cC(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cW])
z.b=!0
this.V(z)}},
sb0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bY])
z.b=!0
this.V(z)}},
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a4:function(a){var z
a.ci(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.a9(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a9(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
this.a.toString
a.cy.av()
a.db.av()
this.b.toString
a.cg()},
$isav:1},av:{"^":"a;"}}],["","",,A,{"^":"",dl:{"^":"a;a,b,c"},ft:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dV:{"^":"cS;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aF,0as,0aG,0bf,0d7,0d8,0bg,0bh,0d9,0da,0bi,0bj,0dc,0dd,0bk,0de,0df,0bl,0dg,0dh,0bm,0bn,0bo,0di,0dj,0bp,0bq,0dk,0dl,0br,0dm,0c1,0dn,0c2,0dq,0c3,0dr,0c4,0ds,0c5,0dt,0c6,a,b,0c,0d,0e,0f,0r",
dY:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
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
case C.f:r+="   return alpha;\n"
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
this.dv(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
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
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$isd_")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isay")
this.k3=H.c([],[A.ay])
y=a1.aF
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isay"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.aF=H.e(this.r.m(0,"diffuseTxt"),"$isai")
this.aG=H.e(this.r.m(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.as=H.e(this.r.m(0,"diffuseTxt"),"$isac")
this.aG=H.e(this.r.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bf=H.e(this.r.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.d7=H.e(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bg=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.d8=H.e(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bg=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bj=H.e(this.r.m(0,"shininess"),"$isR")
this.bh=H.e(this.r.m(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.d9=H.e(this.r.m(0,"specularTxt"),"$isai")
this.bi=H.e(this.r.m(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.da=H.e(this.r.m(0,"specularTxt"),"$isac")
this.bi=H.e(this.r.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.c:this.dc=H.e(this.r.m(0,"bumpTxt"),"$isai")
this.bk=H.e(this.r.m(0,"nullBumpTxt"),"$isF")
break
case C.d:this.dd=H.e(this.r.m(0,"bumpTxt"),"$isac")
this.bk=H.e(this.r.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.de=H.e(this.r.m(0,"envSampler"),"$isac")
this.df=H.e(this.r.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bl=H.e(this.r.m(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.dg=H.e(this.r.m(0,"reflectTxt"),"$isai")
this.bm=H.e(this.r.m(0,"nullReflectTxt"),"$isF")
break
case C.d:this.dh=H.e(this.r.m(0,"reflectTxt"),"$isac")
this.bm=H.e(this.r.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bn=H.e(this.r.m(0,"refraction"),"$isR")
this.bo=H.e(this.r.m(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.c:this.di=H.e(this.r.m(0,"refractTxt"),"$isai")
this.bp=H.e(this.r.m(0,"nullRefractTxt"),"$isF")
break
case C.d:this.dj=H.e(this.r.m(0,"refractTxt"),"$isac")
this.bp=H.e(this.r.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bq=H.e(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.c:this.dk=H.e(this.r.m(0,"alphaTxt"),"$isai")
this.br=H.e(this.r.m(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.dl=H.e(this.r.m(0,"alphaTxt"),"$isac")
this.br=H.e(this.r.m(0,"nullAlphaTxt"),"$isF")
break}}this.c1=H.c([],[A.ew])
this.c2=H.c([],[A.ex])
this.c3=H.c([],[A.ey])
this.c4=H.c([],[A.ez])
this.c5=H.c([],[A.eA])
this.c6=H.c([],[A.eB])
if(a1.k2){y=a1.z
if(y>0){this.dm=H.k(this.r.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.c1;(x&&C.a).h(x,new A.ew(m,l,k))}}y=a1.Q
if(y>0){this.dn=H.k(this.r.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isE")
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
x=this.c2;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dq=H.k(this.r.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isE")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isE")
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
x=this.c3;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dr=H.k(this.r.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isE")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isE")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isE")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isF")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isai")
x=this.c4;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ds=H.k(this.r.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isd_")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isE")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
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
H.e(d,"$isac")
x=this.c5;(x&&C.a).h(x,new A.eA(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dt=H.k(this.r.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isE")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isE")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isE")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isE")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isE")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isF")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
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
H.e(a0,"$isai")
x=this.c6;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ad:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dQ(c)
b.a.uniform1i(b.d,0)}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hr:function(a,b){var z,y
z=a.as
y=new A.dV(b,z)
y.cr(b,z)
y.dY(a,b)
return y}}},hu:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aF,as,aG",
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
z=a.a+="uniform BendingValue bendValues["+this.aF+"];\n"
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
ao:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.co(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fj:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return emissionClr;\n"
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
fe:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ao(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return ambientClr;\n"
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
fh:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   diffuseColor = diffuseClr;\n"
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
fk:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
ft:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ao(a,z,"specular")
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
case C.f:z=y+"   specularColor = specularClr;\n"
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
fn:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
case C.f:z+="   return normalize(normalVec);\n"
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
fq:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ao(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   vec3 scalar = reflectClr;\n"
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
fs:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ao(a,z,"refract")
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
case C.f:z=y+"   vec3 scalar = refractClr;\n"
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
i:function(a){return this.as}},ew:{"^":"a;a,b,c"},ez:{"^":"a;a,b,c,d,e,f,r,x"},ex:{"^":"a;a,b,c,d,e,f,r"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cS:{"^":"cs;",
cr:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dv:function(a,b,c){var z,y,x
this.c=this.cJ(b,35633)
this.d=this.cJ(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f8(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f5()
this.f7()},
Y:function(a){a.a.useProgram(this.e)
this.f.fR()},
cJ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f8(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f5:function(){var z,y,x,w,v,u
z=H.c([],[A.dl])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dl(y,v.name,u))}this.f=new A.ft(z)},
f7:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fO(v.type,v.size,v.name,u))}this.r=new A.iO(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
bb:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fO:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iJ(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.iM(this.a,this.e,c,d)
case 35667:return new A.iK(this.a,this.e,c,d)
case 35668:return new A.iL(this.a,this.e,c,d)
case 35669:return new A.iN(this.a,this.e,c,d)
case 35674:return new A.iQ(this.a,this.e,c,d)
case 35675:return new A.d_(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.ef(b,c,d)
case 35680:return this.eg(b,c,d)
case 35670:throw H.h(this.bb("BOOL",c))
case 35671:throw H.h(this.bb("BOOL_VEC2",c))
case 35672:throw H.h(this.bb("BOOL_VEC3",c))
case 35673:throw H.h(this.bb("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c5:{"^":"a;a,b",
i:function(a){return this.b}},e7:{"^":"cS;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a4:{"^":"a;"},iO:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fT:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fT("\n")}},F:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iK:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iL:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iN:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iI:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cZ:function(a,b,c,d,e){var z=new A.iI(a,b,c,e)
z.f=d
z.e=P.hj(d,0,!1,P.A)
return z}}},R:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iJ:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iM:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iQ:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d_:{"^":"a4;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bH(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a4;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bH(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ai:{"^":"a4;a,b,c,d",
dQ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a4;a,b,c,d",
dR:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
ck:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bG:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.K(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.K(t+h,s+f,r+g)
z.b=q
p=new V.K(t-h,s-f,r-g)
z.c=p
o=new V.K(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ck(y)
k=F.ck(z.b)
j=F.l7(d,e,new F.ku(z,F.ck(z.c),F.ck(z.d),k,l,c),b)
if(j!=null)a.h4(j)},
l7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aE,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.cT()
y=H.c([],[F.aE])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ci(null,null,new V.aO(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bZ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ci(null,null,new V.aO(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bZ(d))}}z.d.fE(a+1,b+1,y)
return z},
ku:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cb(z.b,b).cb(z.d.cb(z.c,b),c)
z=new V.an(y.a,y.b,y.c)
if(!J.U(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a1()}a.shs(y.v(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bs(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.U(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
gc0:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dw())return
return v.v(0,Math.sqrt(v.C(v)))},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.I(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aT(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
bX:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ec()
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
v=new V.K(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dw())return
return v.v(0,Math.sqrt(v.C(v)))},
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
z=new V.K(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.an(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.aT(m)
z=z.v(0,Math.sqrt(z.C(z))).aT(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
bV:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y
if(this.gc0())return a+"disposed"
z=a+C.h.a8(J.a6(this.a.e),0)+", "+C.h.a8(J.a6(this.b.e),0)+", "+C.h.a8(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.A("")},
q:{
bg:function(a,b,c){var z,y,x
z=new F.ag()
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
cK:{"^":"a;0a,0b",
gc0:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){if(this.gc0())return a+"disposed"
return a+C.h.a8(J.a6(this.a.e),0)+", "+C.h.a8(J.a6(this.b.e),0)},
G:function(){return this.A("")}},
cP:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a8(J.a6(z.e),0)},
G:function(){return this.A("")}},
e6:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
h4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fN())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cP()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cK()
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
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.W()
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
if(!(z==null))z.aw(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.aw(0)
return y},
d_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gcn(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dp])
for(r=0,q=0;q<w;++q){p=b.fH(q)
o=p.gcn(p)
C.a.Z(s,q,new Z.dp(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h_(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bH(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cv(new Z.eH(34962,j),s,b)
i.b=H.c([],[Z.ca])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ca(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ca(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.W()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.ca(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aI:function(a){var z=this.e
if(!(z==null))z.w(a)},
a1:function(){return this.aI(null)},
q:{
cT:function(){var z,y
z=new F.e6()
y=new F.j0(z)
y.b=!1
y.c=H.c([],[F.aE])
z.a=y
y=new F.i9(z)
y.b=H.c([],[F.cP])
z.b=y
y=new F.i8(z)
y.b=H.c([],[F.cK])
z.c=y
y=new F.i7(z)
y.b=H.c([],[F.ag])
z.d=y
z.e=null
return z}}},
i7:{"^":"a;a,0b",
fD:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.aE],"$asf")
z=H.c([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bg(y,w,v))}return z},
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isf",[F.aE],"$asf")
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
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bX())x=!1
return x},
bW:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bV())x=!1
return x},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i8:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i9:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bZ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
fN:function(){return this.bZ(null)},
shs:function(a){var z
if(!J.U(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
h_:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$ap())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aG())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aJ())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b1()))return H.c([this.ch],[P.w])
else if(z.u(a,$.$get$aF())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
bX:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.L(0,new F.j7(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aw(0)}return!0},
bV:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.L(0,new F.j6(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aw(0)}return!0},
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
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aE()
y=new F.j5(z)
y.b=H.c([],[F.cP])
z.b=y
y=new F.j4(z)
x=[F.cK]
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
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$eF().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
j7:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j6:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j0:{"^":"a;a,0b,0c",
W:function(){var z,y,x,w
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
fF:function(a,b,c,d,e,f,g,h,i){var z=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bc:function(a,b,c,d,e,f){return this.fF(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bX()
return!0},
bW:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bV()
return!0},
fJ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
this.W()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j1:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ag]})
C.a.L(this.b,b)
C.a.L(this.c,new F.j2(this,b))
C.a.L(this.d,new F.j3(this,b))},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j2:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isag")
if(!J.U(a.a,this.a))this.b.$1(a)}},
j3:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isag")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
j4:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j5:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}}}],["","",,O,{"^":"",hq:{"^":"bY;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.R(null)},"cw","$1","$0","gay",0,2,0],
eZ:[function(a){H.k(a,"$isl")
this.a=null
this.R(a)},function(){return this.eZ(null)},"i3","$1","$0","geY",0,2,0],
hF:[function(a,b){var z=V.aD
z=new D.bQ(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","gev",8,0,22],
hG:[function(a,b){var z=V.aD
z=new D.bR(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","gew",8,0,22],
cG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a0(z.e.length+3,4)*4
x=C.e.a0(z.f.length+3,4)*4
w=C.e.a0(z.r.length+3,4)*4
v=C.e.a0(z.x.length+3,4)*4
u=C.e.a0(z.y.length+3,4)*4
t=C.e.a0(z.z.length+3,4)*4
s=C.e.a0(this.e.a.length+3,4)*4
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
a6=$.$get$ap()
if(c){z=$.$get$aH()
a6=new Z.b0(a6.a|z.a)}if(b){z=$.$get$aG()
a6=new Z.b0(a6.a|z.a)}if(a){z=$.$get$aI()
a6=new Z.b0(a6.a|z.a)}if(a0){z=$.$get$aJ()
a6=new Z.b0(a6.a|z.a)}if(a2){z=$.$get$aF()
a6=new Z.b0(a6.a|z.a)}return new A.hu(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.v(a,"$isf",[T.cg],"$asf")
if(b!=null)if(!C.a.aS(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a,b){var z
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.D();)C.o.a9(z.d,b)},
dD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cG()
y=H.k(a.fr.j(0,z.as),"$isdV")
if(y==null){y=A.hr(z,a.a)
a.cY(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aG
z=b.e
if(!(z instanceof Z.cv)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ar()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bW()
u.a.bW()
u=u.e
if(!(u==null))u.aw(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fJ()
t=t.e
if(!(t==null))t.aw(0)}r=b.d.d_(new Z.eI(a.a),w)
r.at($.$get$ap()).e=this.a.y.c
if(z)r.at($.$get$aH()).e=this.a.Q.c
if(v)r.at($.$get$aG()).e=this.a.z.c
if(x.rx)r.at($.$get$aI()).e=this.a.ch.c
if(u)r.at($.$get$aJ()).e=this.a.cx.c
if(x.x1)r.at($.$get$aF()).e=this.a.cy.c
b.e=r}z=T.cg
q=H.c([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.ab(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gT(u)
t=a.dx
t=u.l(0,t.gT(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ab(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghi()
t=a.dx
t=u.l(0,t.gT(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ab(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ab(u.a5(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ab(u.a5(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ab(C.o.a5(u,!0))}if(x.aF>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isaD")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bH(H.v(t.a5(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.O(q,this.f.d)
v=this.a
u=this.f.d
v.ad(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.f.e)
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
case C.f:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.O(q,this.r.d)
v=this.a
u=this.r.d
v.ad(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.r.e)
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
case C.f:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.ad(v.aF,v.aG,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.as,v.aG,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.ad(v.d7,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.d8,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
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
case C.c:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.ad(v.d9,v.bi,u)
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
case C.d:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.da,v.bi,u)
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
v=this.a.dm
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c1
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.dI(j.gbe(j))
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gaj(j)
h=i.c
s=g.gaY()
t=g.gaK()
g=g.gaQ()
h.a.uniform3f(h.d,s,t,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dn
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b4(j.gaX(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gaj(j)
g=i.d
h=t.gaY()
s=t.gaK()
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbQ()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbR()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbS()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbe(j).i9()
g=i.c
h=t.gae(t)
s=t.gaf(t)
t=t.gag()
g.a.uniform3f(g.d,h,s,t)
t=m.b4(j.gaX(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaj(j)
s=i.e
h=t.gaY()
g=t.gaK()
t=t.gaQ()
s.a.uniform3f(s.d,h,g,t)
t=j.gi8()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi7()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c4
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb1()
H.v(q,"$isf",t,"$asf")
if(!C.a.aS(q,s)){s.saM(q.length)
C.a.h(q,s)}s=j.gbe(j)
h=i.d
g=s.gae(s)
f=s.gaf(s)
s=s.gag()
h.a.uniform3f(h.d,g,f,s)
s=j.gbt()
f=i.b
g=s.gae(s)
h=s.gaf(s)
s=s.gag()
f.a.uniform3f(f.d,g,h,s)
s=j.gaZ(j)
h=i.c
g=s.gae(s)
f=s.gaf(s)
s=s.gag()
h.a.uniform3f(h.d,g,f,s)
s=m.dI(j.gbe(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaj(j)
g=i.f
f=h.gaY()
s=h.gaK()
h=h.gaQ()
g.a.uniform3f(g.d,f,s,h)
h=j.gb1()
s=h.gdz(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcL()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaM())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c5
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb1()
H.v(q,"$isf",s,"$asf")
if(!C.a.aS(q,h)){h.saM(q.length)
C.a.h(q,h)}e=m.l(0,j.gT(j))
h=j.gT(j).b4(new V.an(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcl(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b4(new V.an(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c9(0)
d=i.d
n=new Float32Array(H.bH(H.v(new V.dW(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaj(j)
h=i.e
f=d.gaY()
g=d.gaK()
d=d.gaQ()
h.a.uniform3f(h.d,f,g,d)
d=j.gb1()
h=d.gdz(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcL()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaM())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbQ()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbR()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbS()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c6
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb1()
H.v(q,"$isf",z,"$asf")
if(!C.a.aS(q,t)){t.saM(q.length)
C.a.h(q,t)}t=j.gaX(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcl(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbe(j)
g=i.c
h=t.gae(t)
s=t.gaf(t)
t=t.gag()
g.a.uniform3f(g.d,h,s,t)
t=j.gbt()
s=i.d
h=t.gae(t)
g=t.gaf(t)
t=t.gag()
s.a.uniform3f(s.d,h,g,t)
t=j.gaZ(j)
g=i.e
h=t.gae(t)
s=t.gaf(t)
t=t.gag()
g.a.uniform3f(g.d,h,s,t)
t=m.b4(j.gaX(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb1()
s=t.gdz(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcL()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaM())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaj(j)
s=i.y
h=t.gaY()
g=t.gaK()
t=t.gaQ()
s.a.uniform3f(s.d,h,g,t)
t=j.gig()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gih()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.c:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.ad(z.dc,z.bk,v)
break
case C.d:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.dd,z.bk,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).c9(0)
a.Q=v}z=z.fy
z.toString
z.ab(v.a5(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a6(z.de,z.df,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bl
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.ad(z.dg,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.dh,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
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
case C.c:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.ad(z.di,z.bp,v)
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
case C.d:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dj,z.bp,v)
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
case C.f:z=this.a
u=this.db.f
z=z.bq
z.a.uniform1f(z.d,u)
break
case C.c:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.ad(z.dk,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break
case C.d:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dl,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.Y(a)
z.a4(a)
z.b5(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d4()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cG().as}},hs:{"^":"cL;0f,a,b,0c,0d,0e"},cL:{"^":"a;",
R:[function(a){this.a.R(H.k(a,"$isl"))},function(){return this.R(null)},"cw","$1","$0","gay",0,2,0],
aN:["dW",function(){}],
f3:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gay(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gay(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G(this.b+".texture2D",x,this.d,this,[T.ed])
z.b=!0
this.a.R(z)}},
f4:function(a){}},ht:{"^":"cL;a,b,0c,0d,0e"},aW:{"^":"cL;0f,a,b,0c,0d,0e",
cS:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.a7])
y.b=!0
this.a.R(y)}},
aN:["cq",function(){this.dW()
this.cS(new V.a7(1,1,1))}],
saj:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aN()
z=this.a
z.a=null
z.R(null)}this.cS(b)}},hv:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f1:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
aN:function(){this.cq()
this.f1(1)}},hw:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
aN:function(){this.cq()
this.f2(100)}},ie:{"^":"bY;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.R(null)},"cw","$1","$0","gay",0,2,0],
dD:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$ise7")
if(z==null){y=a.a
z=new A.e7(y,"Skybox")
z.cr(y,"Skybox")
z.dv(0,$.ih,$.ig)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isR")
z.z=H.e(z.r.j(0,"ratio"),"$isR")
z.Q=H.e(z.r.j(0,"boxClr"),"$isE")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isac")
z.cx=H.e(z.r.j(0,"viewMat"),"$isay")
a.cY(z)}this.a=z}if(b.e==null){y=b.d.d_(new Z.eI(a.a),$.$get$ap())
y.at($.$get$ap()).e=this.a.x.c
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
w.ch.dR(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).c9(0)
w=w.cx
w.toString
w.ab(x.a5(0,!0))
y=b.e
if(y instanceof Z.cv){y.Y(a)
y.a4(a)
y.b5(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d4()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bY:{"^":"a;"}}],["","",,T,{"^":"",cg:{"^":"cs;"},ed:{"^":"cg;0b,0c,0d,0e,0f,0r,0x,0y,a"},ee:{"^":"cg;0b,0c,0d,0e,a"},it:{"^":"a;a,0b,0c,0d,0e",
h2:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dI(null,a,null)
w=new T.ed(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.D()
z=W.a1
W.V(x,"load",H.b(new T.iv(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
h1:function(a){return this.h2(a,!1,!1,!1,!1)},
aB:function(a,b,c,d,e,f){var z,y
z=W.dI(null,c,null);++this.d
y=W.a1
W.V(z,"load",H.b(new T.iu(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cR:function(a,b,c){var z,y,x,w
b=V.dh(b,2)
z=V.dh(a.width,2)
y=V.dh(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cx(null,null)
x.width=z
x.height=y
w=H.k(C.k.dM(x,"2d"),"$isdr")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kK(w.getImageData(0,0,x.width,x.height))}}},iv:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cR(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.t.dF(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.d6()}++x.e}},iu:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cR(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.t.dF(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d6();++z.e}}}],["","",,V,{"^":"",fr:{"^":"a;",
aU:function(a,b){return!0},
i:function(a){return"all"},
$isbU:1},bU:{"^":"a;"},dU:{"^":"a;",
aU:["dV",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aU(0,b))return!0
return!1}],
i:["cp",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbU:1},bq:{"^":"dU;0a",
aU:function(a,b){return!this.dV(0,b)},
i:function(a){return"!["+this.cp(0)+"]"}},i5:{"^":"a;0a",
e_:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.A,P.a5])
for(y=new H.dR(a,a.gk(a),0,[H.az(a,"t",0)]);y.D();)z.Z(0,y.d,!0)
this.a=z},
aU:function(a,b){return this.a.d1(0,b)},
i:function(a){var z=this.a
return P.cV(new H.dQ(z,[H.z(z,0)]),0,null)},
$isbU:1,
q:{
a0:function(a){var z=new V.i5()
z.e_(a)
return z}}},e9:{"^":"a;a,b,0c,0d",
gh5:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ek(this.a.H(0,b))
w.a=H.c([],[V.bU])
w.c=!1
C.a.h(this.c,w)
return w},
fS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aU(0,a))return w}return},
i:function(a){return this.b}},eh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fj(this.b,"\n","\\n")
y=H.fj(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ei:{"^":"a;a,b,0c",
i:function(a){return this.b}},iE:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e9(this,b)
z.c=H.c([],[V.ek])
this.a.Z(0,b,z)}return z},
b2:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ei(this,a)
y=P.o
z.c=new H.aV(0,0,[y,y])
this.b.Z(0,a,z)}return z},
hx:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eh])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b7(a,t)
r=y.fS(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cV(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh5(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cV(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eh(o==null?p.b:o,q,t)}++t}}}},ek:{"^":"dU;b,0c,0a",
i:function(a){return this.b.b+": "+this.cp(0)}}}],["","",,X,{"^":"",c4:{"^":"a;",$isau:1},h1:{"^":"cW;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
am:function(a){var z=this.x
if(!(z==null))z.w(a)},
Y:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.e.ah(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.e.ah(w.b*x)
t=C.e.ah(w.c*y)
a.c=t
w=C.e.ah(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cC:function(a,b,c,d,e,f,g){var z,y
z=new X.h1()
y=new V.aO(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e5(0,0,1,1)
z.r=y
return z}}},h3:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
Y:function(a){var z
a.cy.bs(V.aX())
z=V.aX()
a.db.bs(z)},
b5:function(a){a.cy.av()
a.db.av()},
$isau:1,
$isc4:1},hH:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
am:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.am(null)},"hy","$1","$0","ge6",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bs(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e0
if(z==null){z=new V.K(0,0,-1)
r=z.v(0,Math.sqrt(z.C(z)))
z=new V.K(0,1,0).aT(r)
q=z.v(0,Math.sqrt(z.C(z)))
p=r.aT(q)
o=new V.K(0,0,0)
z=V.ar(q.a,p.a,r.a,q.J(0).C(o),q.b,p.b,r.b,p.J(0).C(o),q.c,p.c,r.c,r.J(0).C(o),0,0,0,1)
$.e0=z
n=z}else n=z
z=this.a
if(z!=null){m=z.aJ(0,a,this)
if(m!=null)n=m.l(0,n)}a.db.bs(n)},
b5:function(a){a.cy.av()
a.db.av()},
$isau:1,
$isc4:1,
q:{
e_:function(a,b,c,d){var z,y,x,w
z=new X.hH()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.b(z.ge6(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.G("mover",y,z.a,z,[U.ab])
x.b=!0
z.am(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.G("fov",y,b,z,[P.w])
x.b=!0
z.am(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.G("near",y,d,z,[P.w])
x.b=!0
z.am(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.G("far",y,a,z,[P.w])
x.b=!0
z.am(x)}return z}}},cW:{"^":"a;"}}],["","",,V,{"^":"",
l5:function(a){P.iD(C.z,new V.l6(a))},
l6:{"^":"u:37;a",
$1:function(a){H.k(a,"$isaZ")
P.di(C.i.dH(this.a.gfU(),2)+" fps")}},
ia:{"^":"a;0a,0b",
e0:function(a,b){var z,y,x,w,v,u,t
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
t=W.a1
W.V(z,"scroll",H.b(new V.id(x),{func:1,ret:-1,args:[t]}),!1,t)},
fG:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isf",[P.o],"$asf")
this.f6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hx(C.a.fY(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
y.appendChild(q)}else{p=P.kh(C.J,s,C.u,!1)
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
z=new V.iE()
y=P.o
z.a=new H.aV(0,0,[y,V.e9])
z.b=new H.aV(0,0,[y,V.ei])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a0(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bq()
w=[V.bU]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a0(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a0(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a0(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a0(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a0(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a0(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a0(new H.Z("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a0(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a0(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.fr())
x=z.H(0,"Other").B(0,"Other")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b2("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b2("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b2("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b2("Link")
x=z.H(0,"Other")
x.d=x.a.b2("Other")
this.b=z},
q:{
ib:function(a,b){var z=new V.ia()
z.e0(a,!0)
return z}}},
id:{"^":"u:11;a",
$1:function(a){P.iC(C.n,new V.ic(this.a))}},
ic:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.i.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Y,{"^":"",
fe:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.ib("Test 034",!0)
y=W.cx(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fG(H.c(["Test of resizing the render target."],[P.o]))
z=document
y=z.getElementById("testCanvas")
x=y.style
x.width="100%"
x.height="100%"
x.margin="-2px"
w=z.createElement("div")
x=w.style
x.border="2px solid"
x.padding="10px"
C.m.f0(x,(x&&C.m).cB(x,"resize"),"both","")
x.overflow="auto"
J.fq(y,w)
w.appendChild(y)
v=z.getElementById("testCanvas")
if(v==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
u=E.iA(v,!0,!0,!0,!1)
t=new U.dG()
t.b6(U.ab)
t.aL(t.ges(),t.geO())
t.e=null
t.f=V.aX()
t.r=0
z=u.r
x=new U.iX()
s=U.cA()
s.sck(0,!0)
s.scc(6.283185307179586)
s.sce(0)
s.sa2(0,0)
s.scd(100)
s.sM(0)
s.sc_(0.5)
x.b=s
s=s.gt()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.b(x.gaC(),r)
C.a.h(s.a,q)
s=U.cA()
s.sck(0,!0)
s.scc(6.283185307179586)
s.sce(0)
s.sa2(0,0)
s.scd(100)
s.sM(0)
s.sc_(0.5)
x.c=s
C.a.h(s.gt().a,q)
x.d=null
x.e=!1
x.f=!1
x.r=!1
x.x=2.5
x.y=2.5
x.z=2
x.Q=4
x.cx=!1
x.ch=!1
x.cy=0
x.db=0
x.dx=null
x.dy=0
x.fr=null
x.fx=null
p=new X.as(!1,!1,!1)
o=x.d
x.d=p
s=[X.as]
q=new D.G("modifiers",o,p,x,s)
q.b=!0
x.K(q)
q=x.f
if(q!==!1){x.f=!1
q=new D.G("invertX",q,!1,x,[P.a5])
q.b=!0
x.K(q)}q=x.r
if(q!==!1){x.r=!1
q=new D.G("invertY",q,!1,x,[P.a5])
q.b=!0
x.K(q)}x.aP(z)
t.h(0,x)
z=u.r
x=new U.iW()
q=U.cA()
q.sck(0,!0)
q.scc(6.283185307179586)
q.sce(0)
q.sa2(0,0)
q.scd(100)
q.sM(0)
q.sc_(0.2)
x.b=q
q=q.gt()
q.toString
n=H.b(x.gaC(),r)
C.a.h(q.a,n)
x.c=null
x.d=!1
x.e=2.5
x.f=2
x.r=4
x.y=!1
x.x=!1
x.z=0
x.Q=null
x.ch=0
x.cx=null
x.cy=null
p=new X.as(!0,!1,!1)
o=x.c
x.c=p
q=new D.G("modifiers",o,p,x,s)
q.b=!0
x.K(q)
x.aP(z)
t.h(0,x)
z=u.r
x=new U.iY()
x.c=0.01
x.d=0
x.e=0
p=new X.as(!1,!1,!1)
x.b=p
s=new D.G("modifiers",null,p,x,s)
s.b=!0
x.K(s)
x.aP(z)
t.h(0,x)
m=V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
z=new U.du()
z.a=m
t.h(0,z)
l=X.e_(2000,1.0471975511965976,t,0.1)
k=new O.hq()
z=O.cz(V.aD)
k.e=z
z.aL(k.gev(),k.gew())
z=new O.aW(k,"emission")
z.c=C.b
z.f=new V.a7(0,0,0)
k.f=z
z=new O.aW(k,"ambient")
z.c=C.b
z.f=new V.a7(0,0,0)
k.r=z
z=new O.aW(k,"diffuse")
z.c=C.b
z.f=new V.a7(0,0,0)
k.x=z
z=new O.aW(k,"invDiffuse")
z.c=C.b
z.f=new V.a7(0,0,0)
k.y=z
z=new O.hw(k,"specular")
z.c=C.b
z.f=new V.a7(0,0,0)
z.ch=100
k.z=z
z=new O.ht(k,"bump")
z.c=C.b
k.Q=z
k.ch=null
z=new O.aW(k,"reflect")
z.c=C.b
z.f=new V.a7(0,0,0)
k.cx=z
z=new O.hv(k,"refract")
z.c=C.b
z.f=new V.a7(0,0,0)
z.ch=1
k.cy=z
z=new O.hs(k,"alpha")
z.c=C.b
z.f=1
k.db=z
z=new D.hd()
z.b6(D.W)
z.e=H.c([],[D.fN])
z.f=H.c([],[D.hJ])
z.r=H.c([],[D.ii])
z.x=H.c([],[D.iw])
z.y=H.c([],[D.ix])
z.z=H.c([],[D.iy])
z.Q=null
z.ch=null
z.cm(z.geu(),z.geN(),z.geP())
k.dx=z
x=z.Q
if(x==null){x=D.D()
z.Q=x
z=x}else z=x
x=H.b(k.geY(),r)
C.a.h(z.a,x)
x=k.dx
z=x.ch
if(z==null){z=D.D()
x.ch=z}x=H.b(k.gay(),r)
C.a.h(z.a,x)
k.dy=null
x=k.r
x.saj(0,new V.a7(0.3,0.3,0.3))
z=k.x
z.saj(0,new V.a7(0.8,0.8,0.8))
z=k.x
x=u.f.h1("../resources/Test.png")
s=z.c
if(s!==C.c){if(s===C.b)z.aN()
z.c=C.c
z.f4(null)
s=z.a
s.a=null
s.R(null)}z.f3(x)
j=X.cC(!0,!0,!1,null,2000,null,0)
if(j.b){j.b=!1
z=new D.G("clearColor",!0,!1,j,[P.a5])
z.b=!0
j.am(z)}i=E.dE(null,!0,null,"",null,null)
h=F.cT()
F.bG(h,null,null,1,1,1,0,0,1)
F.bG(h,null,null,1,1,0,1,0,3)
F.bG(h,null,null,1,1,0,0,1,2)
F.bG(h,null,null,1,1,-1,0,0,0)
F.bG(h,null,null,1,1,0,-1,0,0)
F.bG(h,null,null,1,1,0,0,-1,3)
h.ar()
i.sbv(0,h)
g=new M.fV()
z=O.cz(E.aC)
g.d=z
z.aL(g.gey(),g.gez())
g.e=null
g.f=null
g.r=null
g.x=null
g.saR(null)
g.sb_(0,null)
g.sb0(null)
g.d.h(0,i)
g.sb0(k)
g.sb_(0,j)
g.saR(l)
z=u.f
x=z.a
f=x.createTexture()
x.bindTexture(34067,f)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
e=new T.ee(0)
e.b=f
e.c=!1
e.d=0
e.e=D.D()
z.aB(e,f,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aB(e,f,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aB(e,f,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aB(e,f,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aB(e,f,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aB(e,f,"../resources/maskonaive/negz.jpg",34074,!1,!1)
d=new M.fG()
d.saR(null)
d.sb_(0,null)
d.sb0(null)
z=E.dE(null,!0,null,"",null,null)
h=F.cT()
x=h.a
s=new V.K(-1,-1,1)
s=s.v(0,Math.sqrt(s.C(s)))
c=x.bc(new V.bs(1,2,4,6),new V.aO(1,0,0,1),new V.an(-1,-1,0),new V.O(0,1),s,null)
x=h.a
s=new V.K(1,-1,1)
s=s.v(0,Math.sqrt(s.C(s)))
b=x.bc(new V.bs(0,3,4,6),new V.aO(0,0,1,1),new V.an(1,-1,0),new V.O(1,1),s,null)
x=h.a
s=new V.K(1,1,1)
s=s.v(0,Math.sqrt(s.C(s)))
a=x.bc(new V.bs(0,2,5,6),new V.aO(0,1,0,1),new V.an(1,1,0),new V.O(1,0),s,null)
x=h.a
s=new V.K(-1,1,1)
s=s.v(0,Math.sqrt(s.C(s)))
a0=x.bc(new V.bs(0,2,4,7),new V.aO(1,1,0,1),new V.an(-1,1,0),new V.O(0,0),s,null)
h.d.fD(H.c([c,b,a,a0],[F.aE]))
h.ar()
z.sbv(0,h)
d.d=z
d.e=null
z=new O.ie()
z.b=1.0471975511965976
o=z.c
z.c=e
x=e.e
s=H.b(z.gay(),r)
C.a.h(x.a,s)
x=new D.G("boxTexture",o,z.c,z,[T.ee])
x.b=!0
z.R(x)
a1=new V.a7(1,1,1)
if(!J.U(z.d,a1)){o=z.d
z.d=a1
x=new D.G("boxColor",o,a1,z,[V.a7])
x.b=!0
z.R(x)}z.e=null
d.sb0(z)
d.sb_(0,j)
d.saR(l)
z=M.av
x=H.c([d,g],[z])
s=new M.fE()
s.b6(z)
s.e=!1
s.f=null
s.aL(s.geQ(),s.geR())
s.bP(0,x)
z=u.d
if(z!==s){if(z!=null){z=z.gt()
z.toString
x=H.b(u.gct(),r)
C.a.U(z.a,x)}u.d=s
z=s.gt()
z.toString
r=H.b(u.gct(),r)
C.a.h(z.a,r)
u.e2()}V.l5(u)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.cG.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.h8.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.c0=function(a){if(typeof a=="string")return J.cG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.dc=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.kO=function(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d0.prototype
return a}
J.b8=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.fl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kO(a).aa(a,b)}
J.fm=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).j(a,b)}
J.fn=function(a,b,c){return J.b8(a).eW(a,b,c)}
J.fo=function(a,b,c,d){return J.b8(a).cX(a,b,c,d)}
J.cr=function(a,b,c){return J.c0(a).fK(a,b,c)}
J.dj=function(a,b){return J.dc(a).E(a,b)}
J.fp=function(a,b){return J.dc(a).L(a,b)}
J.aA=function(a){return J.I(a).gS(a)}
J.bN=function(a){return J.dc(a).gX(a)}
J.bb=function(a){return J.c0(a).gk(a)}
J.fq=function(a,b){return J.b8(a).hl(a,b)}
J.a6=function(a){return J.I(a).i(a)}
I.df=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cw.prototype
C.m=W.fH.prototype
C.A=J.m.prototype
C.a=J.aU.prototype
C.B=J.dK.prototype
C.e=J.dL.prototype
C.o=J.dM.prototype
C.i=J.cb.prototype
C.h=J.cG.prototype
C.I=J.bS.prototype
C.K=H.hD.prototype
C.L=W.hE.prototype
C.r=J.hI.prototype
C.t=P.cQ.prototype
C.l=J.d0.prototype
C.v=W.bD.prototype
C.w=W.ja.prototype
C.x=new P.hG()
C.y=new P.j_()
C.j=new P.jW()
C.b=new A.c5(0,"ColorSourceType.None")
C.f=new A.c5(1,"ColorSourceType.Solid")
C.c=new A.c5(2,"ColorSourceType.Texture2D")
C.d=new A.c5(3,"ColorSourceType.TextureCube")
C.n=new P.bf(0)
C.z=new P.bf(5e6)
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.E=function(getTagFallback) {
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
C.F=function() {
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
C.G=function(hooks) {
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
C.H=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=H.c(I.df([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.u=new P.iZ(!1)
$.aq=0
$.bc=null
$.dm=null
$.d5=!1
$.fb=null
$.f5=null
$.fh=null
$.cn=null
$.cp=null
$.dd=null
$.b3=null
$.bI=null
$.bJ=null
$.d6=!1
$.N=C.j
$.dB=null
$.dA=null
$.dz=null
$.dy=null
$.n=V.hx()
$.ih="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ig="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e0=null
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
I.$lazy(y,x,w)}})(["dx","$get$dx",function(){return H.fa("_$dart_dartClosure")},"cH","$get$cH",function(){return H.fa("_$dart_js")},"el","$get$el",function(){return H.aw(H.ch({
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.aw(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.aw(H.ch(null))},"eo","$get$eo",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.aw(H.ch(void 0))},"et","$get$et",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.aw(H.er(null))},"ep","$get$ep",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.aw(H.er(void 0))},"eu","$get$eu",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d2","$get$d2",function(){return P.jb()},"bK","$get$bK",function(){return[]},"f_","$get$f_",function(){return P.hW("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dw","$get$dw",function(){return{}},"eG","$get$eG",function(){return Z.aj(0)},"eE","$get$eE",function(){return Z.aj(511)},"ap","$get$ap",function(){return Z.aj(1)},"aH","$get$aH",function(){return Z.aj(2)},"aG","$get$aG",function(){return Z.aj(4)},"aI","$get$aI",function(){return Z.aj(8)},"aJ","$get$aJ",function(){return Z.aj(16)},"bB","$get$bB",function(){return Z.aj(32)},"bC","$get$bC",function(){return Z.aj(64)},"eF","$get$eF",function(){return Z.aj(96)},"b1","$get$b1",function(){return Z.aj(128)},"aF","$get$aF",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.H,args:[F.ag]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.d,E.aC]]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.H,args:[W.a1]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[P.A,[P.d,D.W]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.A,[P.d,U.ab]]},{func:1,ret:-1,args:[P.A,[P.d,M.av]]},{func:1,ret:-1,args:[P.A,[P.d,V.aD]]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.a5,args:[W.J]},{func:1,ret:W.a_,args:[W.J]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.H,args:[P.S]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.a5,args:[P.w,P.w]},{func:1,ret:P.a5,args:[[P.d,D.W]]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:P.H,args:[F.aE,P.w,P.w]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.H,args:[P.aZ]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.l8(d||a)
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
Isolate.df=a.df
Isolate.da=a.da
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.fe,[])
else Y.fe([])})})()
//# sourceMappingURL=test.dart.js.map
