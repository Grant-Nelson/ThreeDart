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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$iso)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d8"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d8"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d8(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d9=function(){}
var dart=[["","",,H,{"^":"",m4:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
df:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dc==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.eD("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cL()]
if(v!=null)return v
v=H.kZ(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cL(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
o:{"^":"a;",
u:function(a,b){return a===b},
gU:function(a){return H.bv(a)},
i:["dR",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h5:{"^":"o;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isa3:1},
dL:{"^":"o;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isI:1},
cM:{"^":"o;",
gU:function(a){return 0},
i:["dS",function(a){return String(a)}]},
hH:{"^":"cM;"},
cp:{"^":"cM;"},
bV:{"^":"cM;",
i:function(a){var z=a[$.$get$dy()]
if(z==null)return this.dS(a)
return"JavaScript function for "+H.j(J.ao(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscI:1},
aY:{"^":"o;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.af("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.r(P.af("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bS:function(a,b){var z,y
H.u(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.af("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.bh(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.j(a[y]))
return z.join(b)},
h6:function(a){return this.D(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bw:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.aj(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.i(P.aj(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gcc:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.h3())},
aQ:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cJ(a,"[","]")},
gY:function(a){return new J.ap(a,a.length,0,[H.z(a,0)])},
gU:function(a){return H.bv(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.c5(b,"newLength",null))
if(b<0)throw H.i(P.aj(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.X(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aT(a,b))
if(b>=a.length||b<0)throw H.i(H.aT(a,b))
a[b]=c},
$isd:1,
$ise:1,
n:{
h4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.c5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aj(a,0,4294967295,"length",null))
return J.dI(new Array(a),b)},
dI:function(a,b){return J.bn(H.b(a,[b]))},
bn:function(a){H.bN(a)
a.fixed$length=Array
return a}}},
m3:{"^":"aY;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bU:{"^":"o;",
gh5:function(a){return a===0?1/a<0:a<0},
hC:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.af(""+a+".toInt()"))},
c9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.af(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.af(""+a+".round()"))},
dJ:function(a,b){var z
if(b>20)throw H.i(P.aj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gh5(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.i(H.aM(b))
return a*b},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.af("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.ff(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ff:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.i(H.aM(b))
return a<b},
$isw:1,
$isS:1},
dK:{"^":"bU;",$isA:1},
dJ:{"^":"bU;"},
cf:{"^":"o;",
c0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aT(a,b))
if(b<0)throw H.i(H.aT(a,b))
if(b>=a.length)H.r(H.aT(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.i(H.aT(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.T(b)
if(typeof b!=="string")throw H.i(P.c5(b,null,null))
return a+b},
bx:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.i(P.ck(b,null,null))
if(b>c)throw H.i(P.ck(b,null,null))
if(c>a.length)throw H.i(P.ck(c,null,null))
return a.substring(b,c)},
cv:function(a,b){return this.bx(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hj:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
au:function(a,b){return this.hj(a,b," ")},
fS:function(a,b,c){if(c>a.length)throw H.i(P.aj(c,0,a.length,null,null))
return H.fi(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdZ:1,
$isn:1}}],["","",,H,{"^":"",
h3:function(){return new P.ig("No element")},
a0:{"^":"iQ;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c0(this.a,b)},
$aseE:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$ase:function(){return[P.A]}},
fO:{"^":"d;"},
dR:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c2(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.i(P.bh(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hm:{"^":"d;a,b,$ti",
gY:function(a){return new H.hn(J.bO(this.a),this.b,this.$ti)},
gl:function(a){return J.bf(this.a)},
F:function(a,b){return this.b.$1(J.dj(this.a,b))},
$asd:function(a,b){return[b]}},
hn:{"^":"cK;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascK:function(a,b){return[b]}},
j8:{"^":"d;a,b,$ti",
gY:function(a){return new H.j9(J.bO(this.a),this.b,this.$ti)}},
j9:{"^":"cK;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cd:{"^":"a;$ti"},
eE:{"^":"a;$ti"},
iQ:{"^":"cg+eE;"}}],["","",,H,{"^":"",
kP:function(a){return init.types[H.X(a)]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isC},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ao(a)
if(typeof z!=="string")throw H.i(H.aM(a))
return z},
bv:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.L(a).$iscp){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b6(w,0)===36)w=C.i.cv(w,1)
r=H.dd(H.bN(H.aU(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e2:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hR:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.ba(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aM(w))}return H.e2(z)},
e3:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aM(x))
if(x<0)throw H.i(H.aM(x))
if(x>65535)return H.hR(a)}return H.e2(a)},
hQ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.ba(z,10))>>>0,56320|z&1023)}throw H.i(P.aj(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hN:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hJ:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hK:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hM:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hO:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hL:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.i(H.aM(a))},
h:function(a,b){if(a==null)J.bf(a)
throw H.i(H.aT(a,b))},
aT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
z=H.X(J.bf(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.ck(b,"index",null)},
kK:function(a,b,c){if(a>c)return new P.cj(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
aM:function(a){return new P.aO(!0,a,null,null)},
kF:function(a){if(typeof a!=="number")throw H.i(H.aM(a))
return a},
i:function(a){var z
if(a==null)a=new P.dY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fk})
z.name=""}else z.toString=H.fk
return z},
fk:function(){return J.ao(this.dartException)},
r:function(a){throw H.i(a)},
x:function(a){throw H.i(P.bh(a))},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cN(H.j(y)+" (Error "+w+")",null))
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
m=v.a8(y)
if(m!=null)return z.$1(H.cN(H.T(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cN(H.T(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dX(H.T(y),m))}}return z.$1(new H.iP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aO(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e7()
return a},
bd:function(a){var z
if(a==null)return new H.eW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eW(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){H.k(a,"$iscI")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.q("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.hU(z).r}else x=d
w=e?Object.create(new H.ih().constructor.prototype):Object.create(new H.cA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.av
if(typeof u!=="number")return u.G()
$.av=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dt(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kP,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dn:H.cB
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
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
fx:function(a,b,c,d){var z=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dt:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fx(y,!w,z,b)
if(y===0){w=$.av
if(typeof w!=="number")return w.G()
$.av=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bg
if(v==null){v=H.c6("self")
$.bg=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.av
if(typeof w!=="number")return w.G()
$.av=w+1
t+=w
w="return function("+t+"){return this."
v=$.bg
if(v==null){v=H.c6("self")
$.bg=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fy:function(a,b,c,d){var z,y
z=H.cB
y=H.dn
switch(b?-1:a){case 0:throw H.i(H.i2("Intercepted function with no arguments."))
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
z=$.bg
if(z==null){z=H.c6("self")
$.bg=z}y=$.dm
if(y==null){y=H.c6("receiver")
$.dm=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fy(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.av
if(typeof y!=="number")return y.G()
$.av=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.av
if(typeof y!=="number")return y.G()
$.av=y+1
return new Function(z+y+"}")()},
d8:function(a,b,c,d,e,f,g){var z,y
z=J.bn(H.bN(b))
H.X(c)
y=!!J.L(d).$ise?J.bn(d):d
return H.fA(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aC(a,"String"))},
l1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aC(a,"num"))},
f8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aC(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aC(a,"int"))},
fg:function(a,b){throw H.i(H.aC(a,H.T(b).substring(3)))},
l3:function(a,b){var z=J.c2(b)
throw H.i(H.fw(a,z.bx(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fg(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.l3(a,b)},
bN:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.i(H.aC(a,"List"))},
kY:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.fg(a,b)},
f9:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
c1:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f9(J.L(a))
if(z==null)return!1
y=H.fc(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.d4)return a
$.d4=!0
try{if(H.c1(a,b))return a
z=H.c4(b)
y=H.aC(a,z)
throw H.i(y)}finally{$.d4=!1}},
da:function(a,b){if(a!=null&&!H.d7(a,b))H.r(H.aC(a,H.c4(b)))
return a},
f3:function(a){var z
if(a instanceof H.v){z=H.f9(J.L(a))
if(z!=null)return H.c4(z)
return"Closure"}return H.b0(a)},
l8:function(a){throw H.i(new P.fG(H.T(a)))},
fa:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aU:function(a){if(a==null)return
return a.$ti},
n0:function(a,b,c){return H.be(a["$as"+H.j(c)],H.aU(b))},
bM:function(a,b,c,d){var z
H.T(c)
H.X(d)
z=H.be(a["$as"+H.j(c)],H.aU(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.T(b)
H.X(c)
z=H.be(a["$as"+H.j(b)],H.aU(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aU(a)
return z==null?null:z[b]},
c4:function(a){var z=H.aV(a,null)
return z},
aV:function(a,b){var z,y
H.u(b,"$ise",[P.n],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dd(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.kv(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.u(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dd:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$ise",[P.n],"$ase")
if(a==null)return""
z=new P.bZ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}v="<"+z.i(0)+">"
return v},
be:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ba:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aU(a)
y=J.L(a)
if(y[b]==null)return!1
return H.f6(H.be(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.T(b)
H.bN(c)
H.T(d)
if(a==null)return a
z=H.ba(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dd(c,0,null)
throw H.i(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mZ:function(a,b,c){return a.apply(b,H.be(J.L(b)["$as"+H.j(c)],H.aU(b)))},
fd:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fd(z)}return!1},
d7:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fd(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d7(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c1(a,b)}y=J.L(a).constructor
x=H.aU(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.an(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.d7(a,b))throw H.i(H.aC(a,H.c4(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fc(a,b,c,d)
if('func' in a)return c.builtin$cls==="cI"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bk" in y.prototype))return!1
w=y.prototype["$as"+"bk"]
v=H.be(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c4(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f6(H.be(r,z),b,u,d)},
fc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.an(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.an(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.an(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l0(m,b,l,d)},
l0:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
n_:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kZ:function(a){var z,y,x,w,v,u
z=H.T($.fb.$1(a))
y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.f5.$2(a,z))
if(z!=null){y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cx(x)
$.cu[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cw[z]=x
return x}if(v==="-"){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ff(a,x)
if(v==="*")throw H.i(P.eD(z))
if(init.leafTags[z]===true){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ff(a,x)},
ff:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.df(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cx:function(a){return J.df(a,!1,null,!!a.$isC)},
l_:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cx(z)
else return J.df(z,c,null,null)},
kU:function(){if(!0===$.dc)return
$.dc=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.cu=Object.create(null)
$.cw=Object.create(null)
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
z=C.D()
z=H.b9(C.A,H.b9(C.F,H.b9(C.n,H.b9(C.n,H.b9(C.E,H.b9(C.B,H.b9(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fb=new H.kR(v)
$.f5=new H.kS(u)
$.fh=new H.kT(t)},
b9:function(a,b){return a(b)||b},
fi:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fj:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hT:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bn(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iE:{"^":"a;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
n:{
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
co:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
er:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hE:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dX:function(a,b){return new H.hE(a,b==null?null:b.method)}}},
h8:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cN:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h8(a,y,z?null:b.receiver)}}},
iP:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lb:{"^":"v:19;a",
$1:function(a){if(!!J.L(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isar:1},
v:{"^":"a;",
i:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gdL:function(){return this},
$iscI:1,
gdL:function(){return this}},
eb:{"^":"v;"},
ih:{"^":"eb;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cA:{"^":"eb;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bv(this.a)
else y=typeof z!=="object"?J.aD(z):H.bv(z)
return(y^H.bv(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
n:{
cB:function(a){return a.a},
dn:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cA("self","target","receiver","name")
y=J.bn(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iF:{"^":"Z;a",
i:function(a){return this.a},
n:{
aC:function(a,b){return new H.iF("TypeError: "+H.j(P.cc(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
fv:{"^":"Z;a",
i:function(a){return this.a},
n:{
fw:function(a,b){return new H.fv("CastError: "+H.j(P.cc(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
i2:function(a){return new H.i1(a)}}},
aZ:{"^":"hk;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gat:function(a){return new H.dQ(this,[H.z(this,0)])},
d3:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cK(y,b)}else return this.h3(b)},
h3:function(a){var z=this.d
if(z==null)return!1
return this.cb(this.bF(z,J.aD(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b7(w,b)
x=y==null?null:y.b
return x}else return this.h4(b)},
h4:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bF(z,J.aD(a)&0x3ffffff)
x=this.cb(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bK()
this.b=z}this.cD(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bK()
this.c=y}this.cD(y,b,c)}else{x=this.d
if(x==null){x=this.bK()
this.d=x}w=J.aD(b)&0x3ffffff
v=this.bF(x,w)
if(v==null)this.bQ(x,w,[this.bL(b,c)])
else{u=this.cb(v,b)
if(u>=0)v[u].b=c
else v.push(this.bL(b,c))}}},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.bh(this))
z=z.c}},
cD:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.b7(a,b)
if(z==null)this.bQ(a,b,this.bL(b,c))
else z.b=c},
er:function(){this.r=this.r+1&67108863},
bL:function(a,b){var z,y
z=new H.hc(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.er()
return z},
cb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dT(this)},
b7:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cK:function(a,b){return this.b7(a,b)!=null},
bK:function(){var z=Object.create(null)
this.bQ(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdP:1},
hc:{"^":"a;a,b,0c,0d"},
dQ:{"^":"fO;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.hd(z,z.r,this.$ti)
y.c=z.e
return y}},
hd:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bh(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kR:{"^":"v:19;a",
$1:function(a){return this.a(a)}},
kS:{"^":"v:39;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"v:36;a",
$1:function(a){return this.a(H.T(a))}},
h6:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdZ:1,
n:{
h7:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.fY("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kL:function(a){return J.dI(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b7:function(a){return a},
aS:function(a,b,c){H.bN(b)
if(a>>>0!==a||a>=c)throw H.i(H.aT(b,a))},
ku:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.kK(a,b,c))
return b},
hA:{"^":"o;",$ismI:1,"%":"DataView;ArrayBufferView;cR|eQ|eR|hz|eS|eT|aQ"},
cR:{"^":"hA;",
gl:function(a){return a.length},
$isC:1,
$asC:I.d9},
hz:{"^":"eR;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
$ascd:function(){return[P.w]},
$ast:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aQ:{"^":"eT;",
$ascd:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]}},
me:{"^":"aQ;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mf:{"^":"aQ;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mg:{"^":"aQ;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mh:{"^":"aQ;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mi:{"^":"aQ;",
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mj:{"^":"aQ;",
gl:function(a){return a.length},
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hB:{"^":"aQ;",
gl:function(a){return a.length},
k:function(a,b){H.aS(b,a,a.length)
return a[b]},
bw:function(a,b,c){return new Uint8Array(a.subarray(b,H.ku(b,c,a.length)))},
"%":";Uint8Array"},
eQ:{"^":"cR+t;"},
eR:{"^":"eQ+cd;"},
eS:{"^":"cR+t;"},
eT:{"^":"eS+cd;"}}],["","",,P,{"^":"",
jb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bb(new P.jd(z),1)).observe(y,{childList:true})
return new P.jc(z,y,x)}else if(self.setImmediate!=null)return P.kD()
return P.kE()},
mO:[function(a){self.scheduleImmediate(H.bb(new P.je(H.c(a,{func:1,ret:-1})),0))},"$1","kC",4,0,9],
mP:[function(a){self.setImmediate(H.bb(new P.jf(H.c(a,{func:1,ret:-1})),0))},"$1","kD",4,0,9],
mQ:[function(a){P.cX(C.m,H.c(a,{func:1,ret:-1}))},"$1","kE",4,0,9],
cX:function(a,b){var z
H.c(b,{func:1,ret:-1})
z=C.h.Z(a.a,1000)
return P.k9(z<0?0:z,b)},
eg:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.b2]})
z=C.h.Z(a.a,1000)
return P.ka(z<0?0:z,b)},
ky:function(a,b){if(H.c1(a,{func:1,args:[P.a,P.ar]}))return b.hs(a,null,P.a,P.ar)
if(H.c1(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.c5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kx:function(){var z,y
for(;z=$.b8,z!=null;){$.bK=null
y=z.b
$.b8=y
if(y==null)$.bJ=null
z.a.$0()}},
mY:[function(){$.d5=!0
try{P.kx()}finally{$.bK=null
$.d5=!1
if($.b8!=null)$.$get$d1().$1(P.f7())}},"$0","f7",0,0,3],
f2:function(a){var z=new P.eK(H.c(a,{func:1,ret:-1}))
if($.b8==null){$.bJ=z
$.b8=z
if(!$.d5)$.$get$d1().$1(P.f7())}else{$.bJ.b=z
$.bJ=z}},
kB:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.f2(a)
$.bK=$.bJ
return}y=new P.eK(a)
x=$.bK
if(x==null){y.b=z
$.bK=y
$.b8=y}else{y.b=x.b
x.b=y
$.bK=y
if(y.b==null)$.bJ=y}},
l4:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.P
if(C.j===y){P.ct(null,null,C.j,a)
return}y.toString
P.ct(null,null,y,H.c(y.bW(a),z))},
iA:function(a,b){var z,y
z={func:1,ret:-1}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.cX(a,b)}return P.cX(a,H.c(y.bW(b),z))},
iB:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b2]}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.eg(a,b)}x=y.cZ(b,P.b2)
$.P.toString
return P.eg(a,H.c(x,z))},
cs:function(a,b,c,d,e){var z={}
z.a=d
P.kB(new P.kz(z,e))},
f0:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
f1:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kA:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
ct:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bW(d):c.fP(d,-1)
P.f2(d)},
jd:{"^":"v:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jc:{"^":"v:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
je:{"^":"v:2;a",
$0:function(){this.a.$0()}},
jf:{"^":"v:2;a",
$0:function(){this.a.$0()}},
eZ:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bb(new P.kc(this,b),0),a)
else throw H.i(P.af("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bb(new P.kb(this,a,Date.now(),b),0),a)
else throw H.i(P.af("Periodic timer."))},
$isb2:1,
n:{
k9:function(a,b){var z=new P.eZ(!0,0)
z.e4(a,b)
return z},
ka:function(a,b){var z=new P.eZ(!1,0)
z.e5(a,b)
return z}}},
kc:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kb:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.dV(w,x)}z.c=y
this.d.$1(z)}},
b6:{"^":"a;0a,b,c,d,e,$ti",
ha:function(a){if(this.c!==6)return!0
return this.b.b.cn(H.c(this.d,{func:1,ret:P.a3,args:[P.a]}),a.a,P.a3,P.a)},
h2:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c1(z,{func:1,args:[P.a,P.ar]}))return H.da(w.hx(z,a.a,a.b,null,y,P.ar),x)
else return H.da(w.cn(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aL:{"^":"a;cT:a<,b,0f7:c<,$ti",
dI:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ky(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aL(0,$.P,[c])
w=b==null?1:3
this.cE(new P.b6(x,w,a,b,[z,c]))
return x},
hB:function(a,b){return this.dI(a,null,b)},
cE:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb6")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaL")
z=y.a
if(z<4){y.cE(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ct(null,null,z,H.c(new P.jt(this,a),{func:1,ret:-1}))}},
cP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb6")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaL")
y=u.a
if(y<4){u.cP(a)
return}this.a=y
this.c=u.c}z.a=this.b9(a)
y=this.b
y.toString
P.ct(null,null,y,H.c(new P.jy(z,this),{func:1,ret:-1}))}},
bO:function(){var z=H.k(this.c,"$isb6")
this.c=null
return this.b9(z)},
b9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cH:function(a){var z,y,x,w
z=H.z(this,0)
H.da(a,{futureOr:1,type:z})
y=this.$ti
x=H.ba(a,"$isbk",y,"$asbk")
if(x){z=H.ba(a,"$isaL",y,null)
if(z)P.eM(a,this)
else P.ju(a,this)}else{w=this.bO()
H.B(a,z)
this.a=4
this.c=a
P.bH(this,w)}},
bB:[function(a,b){var z
H.k(b,"$isar")
z=this.bO()
this.a=8
this.c=new P.ag(a,b)
P.bH(this,z)},function(a){return this.bB(a,null)},"hI","$2","$1","gee",4,2,35],
$isbk:1,
n:{
ju:function(a,b){var z,y,x
b.a=1
try{a.dI(new P.jv(b),new P.jw(b),null)}catch(x){z=H.aW(x)
y=H.bd(x)
P.l4(new P.jx(b,z,y))}},
eM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaL")
if(z>=4){y=b.bO()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.k(b.c,"$isb6")
b.a=2
b.c=a
a.cP(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isag")
y=y.b
u=v.a
t=v.b
y.toString
P.cs(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.k(r,"$isag")
y=y.b
u=r.a
t=r.b
y.toString
P.cs(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jA(x,b,r).$0()}else if((y&2)!==0)new P.jz(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.L(y).$isbk){if(y.a>=4){n=H.k(t.c,"$isb6")
t.c=null
b=t.b9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eM(y,t)
return}}m=b.b
n=H.k(m.c,"$isb6")
m.c=null
b=m.b9(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isag")
m.a=8
m.c=u}z.a=m
y=m}}}},
jt:{"^":"v:2;a,b",
$0:function(){P.bH(this.a,this.b)}},
jy:{"^":"v:2;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
jv:{"^":"v:21;a",
$1:function(a){var z=this.a
z.a=0
z.cH(a)}},
jw:{"^":"v:31;a",
$2:function(a,b){this.a.bB(a,H.k(b,"$isar"))},
$1:function(a){return this.$2(a,null)}},
jx:{"^":"v:2;a,b,c",
$0:function(){this.a.bB(this.b,this.c)}},
jB:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dH(H.c(w.d,{func:1}),null)}catch(v){y=H.aW(v)
x=H.bd(v)
if(this.d){w=H.k(this.a.a.c,"$isag").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isag")
else u.b=new P.ag(y,x)
u.a=!0
return}if(!!J.L(z).$isbk){if(z instanceof P.aL&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.k(z.gf7(),"$isag")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hB(new P.jC(t),null)
w.a=!1}}},
jC:{"^":"v:29;a",
$1:function(a){return this.a}},
jA:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cn(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aW(t)
y=H.bd(t)
x=this.a
x.b=new P.ag(z,y)
x.a=!0}}},
jz:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isag")
w=this.c
if(w.ha(z)&&w.e!=null){v=this.b
v.b=w.h2(z)
v.a=!1}}catch(u){y=H.aW(u)
x=H.bd(u)
w=H.k(this.a.a.c,"$isag")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ag(y,x)
s.a=!0}}},
eK:{"^":"a;a,0b"},
cV:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aL(0,$.P,[P.A])
z.a=0
this.h9(new P.ik(z,this),!0,new P.il(z,y),y.gee())
return y}},
ik:{"^":"v;a,b",
$1:function(a){H.B(a,H.au(this.b,"cV",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.au(this.b,"cV",0)]}}},
il:{"^":"v:2;a,b",
$0:function(){this.b.cH(this.a.a)}},
e9:{"^":"a;$ti"},
ij:{"^":"a;"},
b2:{"^":"a;"},
ag:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isZ:1},
kj:{"^":"a;",$ismN:1},
kz:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
jW:{"^":"kj;",
hy:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.f0(null,null,this,a,-1)}catch(x){z=H.aW(x)
y=H.bd(x)
P.cs(null,null,this,z,H.k(y,"$isar"))}},
hz:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.f1(null,null,this,a,b,-1,c)}catch(x){z=H.aW(x)
y=H.bd(x)
P.cs(null,null,this,z,H.k(y,"$isar"))}},
fP:function(a,b){return new P.jY(this,H.c(a,{func:1,ret:b}),b)},
bW:function(a){return new P.jX(this,H.c(a,{func:1,ret:-1}))},
cZ:function(a,b){return new P.jZ(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
dH:function(a,b){H.c(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.f0(null,null,this,a,b)},
cn:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.P===C.j)return a.$1(b)
return P.f1(null,null,this,a,b,c,d)},
hx:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kA(null,null,this,a,b,c,d,e,f)},
hs:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
jY:{"^":"v;a,b,c",
$0:function(){return this.a.dH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jX:{"^":"v:3;a,b",
$0:function(){return this.a.hy(this.b)}},
jZ:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hz(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hf:function(a,b,c){H.bN(a)
return H.u(H.kM(a,new H.aZ(0,0,[b,c])),"$isdP",[b,c],"$asdP")},
he:function(a,b){return new H.aZ(0,0,[a,b])},
hg:function(a,b,c,d){return new P.jI(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.d6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bL()
C.a.h(y,a)
try{P.kw(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.ea(b,H.kY(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cJ:function(a,b,c){var z,y,x
if(P.d6(a))return b+"..."+c
z=new P.bZ(b)
y=$.$get$bL()
C.a.h(y,a)
try{x=z
x.a=P.ea(x.gaz(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
d6:function(a){var z,y
for(z=0;y=$.$get$bL(),z<y.length;++z)if(a===y[z])return!0
return!1},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dT:function(a){var z,y,x
z={}
if(P.d6(a))return"{...}"
y=new P.bZ("")
try{C.a.h($.$get$bL(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fo(a,new P.hl(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bL()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
jI:{"^":"jD;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.eP(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d3()
this.b=z}return this.cF(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d3()
this.c=y}return this.cF(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.d3()
this.d=z}y=this.cI(b)
x=z[y]
if(x==null)z[y]=[this.bA(b)]
else{if(this.cN(x,b)>=0)return!1
x.push(this.bA(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cQ(this.c,b)
else return this.f0(0,b)},
f0:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.em(z,b)
x=this.cN(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cF:function(a,b){H.B(b,H.z(this,0))
if(H.k(a[b],"$isd2")!=null)return!1
a[b]=this.bA(b)
return!0},
cQ:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd2")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cG:function(){this.r=this.r+1&67108863},
bA:function(a){var z,y
z=new P.d2(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cG()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cG()},
cI:function(a){return J.aD(a)&0x3ffffff},
em:function(a,b){return a[this.cI(b)]},
cN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
n:{
d3:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d2:{"^":"a;a,0b,0c"},
jJ:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bh(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eP:function(a,b,c){var z=new P.jJ(a,b,[c])
z.c=a.e
return z}}},
jD:{"^":"i3;"},
cg:{"^":"jK;",$isd:1,$ise:1},
t:{"^":"a;$ti",
gY:function(a){return new H.dR(a,this.gl(a),0,[H.bM(this,a,"t",0)])},
F:function(a,b){return this.k(a,b)},
hE:function(a,b){var z,y,x
z=H.b([],[H.bM(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a_(z,y,this.k(a,y));++y}return z},
hD:function(a){return this.hE(a,!0)},
i:function(a){return P.cJ(a,"[","]")}},
hk:{"^":"ad;"},
hl:{"^":"v:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ad:{"^":"a;$ti",
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bM(this,a,"ad",0),H.bM(this,a,"ad",1)]})
for(z=J.bO(this.gat(a));z.E();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bf(this.gat(a))},
i:function(a){return P.dT(a)},
$isa5:1},
i5:{"^":"a;$ti",
i:function(a){return P.cJ(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dk("index"))
if(b<0)H.r(P.aj(b,0,null,"index",null))
for(z=P.eP(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
$isd:1},
i3:{"^":"i5;"},
jK:{"^":"a+t;"}}],["","",,P,{"^":"",cE:{"^":"a;$ti"},dw:{"^":"ij;$ti"},fQ:{"^":"cE;",
$ascE:function(){return[P.n,[P.e,P.A]]}},iW:{"^":"fQ;a"},iX:{"^":"dw;",
fU:function(a,b,c){var z,y,x,w
z=a.length
P.e4(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ki(0,0,x)
if(w.ek(a,b,z)!==z)w.cW(C.i.c0(a,z-1),0)
return C.I.bw(x,0,w.b)},
fT:function(a){return this.fU(a,0,null)},
$asdw:function(){return[P.n,[P.e,P.A]]}},ki:{"^":"a;a,b,c",
cW:function(a,b){var z,y,x,w,v
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
ek:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b6(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cW(w,C.i.b6(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fS:function(a){var z=J.L(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.b0(a)+"'"},
hh:function(a,b,c,d){var z,y
H.B(b,d)
z=J.h4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.u(z,"$ise",[d],"$ase")},
hi:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gY(a);x.E();)C.a.h(y,H.B(x.gP(x),c))
if(b)return y
return H.u(J.bn(y),"$ise",z,"$ase")},
cW:function(a,b,c){var z,y
z=P.A
H.u(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.u(a,"$isaY",[z],"$asaY")
y=a.length
c=P.e4(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.e3(z?C.a.bw(a,b,c):a)}return P.im(a,b,c)},
im:function(a,b,c){var z,y,x
H.u(a,"$isd",[P.A],"$asd")
z=J.bO(a)
for(y=0;y<b;++y)if(!z.E())throw H.i(P.aj(b,0,y,null,null))
x=[]
for(;z.E();)x.push(z.gP(z))
return H.e3(x)},
hV:function(a,b,c){return new H.h6(a,H.h7(a,!1,!0,!1))},
kh:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$ise",[P.A],"$ase")
if(c===C.q){z=$.$get$f_().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fT(H.B(b,H.au(c,"cE",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hQ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fS(a)},
q:function(a){return new P.eL(a)},
dh:function(a){H.l2(a)},
a3:{"^":"a;"},
"+bool":0,
aq:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.h.ba(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fH(H.hP(this))
y=P.bP(H.hN(this))
x=P.bP(H.hJ(this))
w=P.bP(H.hK(this))
v=P.bP(H.hM(this))
u=P.bP(H.hO(this))
t=P.fI(H.hL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
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
bP:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"S;"},
"+double":0,
aX:{"^":"a;a",
j:function(a,b){return new P.aX(C.h.W(this.a*b))},
a9:function(a,b){return C.h.a9(this.a,H.k(b,"$isaX").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aX))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fN()
y=this.a
if(y<0)return"-"+new P.aX(0-y).i(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.fM().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dE:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fM:{"^":"v:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fN:{"^":"v:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
dY:{"^":"Z;",
i:function(a){return"Throw of null."}},
aO:{"^":"Z;a,b,c,d",
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbD()+y+x
if(!this.a)return w
v=this.gbC()
u=P.cc(this.b)
return w+v+": "+H.j(u)},
n:{
c5:function(a,b,c){return new P.aO(!0,a,b,c)},
dk:function(a){return new P.aO(!1,null,a,"Must not be null")}}},
cj:{"^":"aO;e,f,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
ck:function(a,b,c){return new P.cj(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
e4:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.i(P.aj(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.i(P.aj(b,a,c,"end",f))
return b}return c}}},
h1:{"^":"aO;e,l:f>,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){if(J.fl(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
N:function(a,b,c,d,e){var z=H.X(e!=null?e:J.bf(b))
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iR:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
af:function(a){return new P.iR(a)}}},
iO:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eD:function(a){return new P.iO(a)}}},
ig:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fD:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cc(z))+"."},
n:{
bh:function(a){return new P.fD(a)}}},
hF:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
e7:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fG:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eL:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fY:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bx(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"S;"},
"+int":0,
d:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dk("index"))
if(b<0)H.r(P.aj(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
i:function(a){return P.h2(this,"(",")")}},
cK:{"^":"a;$ti"},
e:{"^":"a;$ti",$isd:1},
"+List":0,
a5:{"^":"a;$ti"},
I:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bv(this)},
i:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.i(this)}},
ar:{"^":"a;"},
n:{"^":"a;",$isdZ:1},
"+String":0,
bZ:{"^":"a;az:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
ea:function(a,b,c){var z=J.bO(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gP(z))
while(z.E())}else{a+=H.j(z.gP(z))
for(;z.E();)a=a+c+H.j(z.gP(z))}return a}}}}],["","",,W,{"^":"",
dr:function(a,b){var z=document.createElement("canvas")
return z},
fP:function(a){H.k(a,"$isa4")
return"wheel"},
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eO:function(a,b,c,d){var z,y
z=W.cr(W.cr(W.cr(W.cr(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f4:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.cZ(a,b)},
bR:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ld:{"^":"cT;0p:x=,0q:y=","%":"Accelerometer|LinearAccelerationSensor"},
le:{"^":"o;0l:length=","%":"AccessibleNodeList"},
lf:{"^":"bR;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lg:{"^":"bR;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fu:{"^":"o;","%":";Blob"},
cD:{"^":"bR;",
cr:function(a,b,c){var z=a.getContext(b,P.kG(c,null))
return z},
$iscD:1,
"%":"HTMLCanvasElement"},
lm:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lo:{"^":"ca;0l:length=","%":"CSSPerspective"},
lp:{"^":"cG;0p:x=,0q:y=","%":"CSSPositionValue"},
lq:{"^":"ca;0p:x=,0q:y=","%":"CSSRotation"},
bi:{"^":"o;",$isbi:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lr:{"^":"ca;0p:x=,0q:y=","%":"CSSScale"},
ls:{"^":"jj;0l:length=",
dN:function(a,b){var z=a.getPropertyValue(this.eb(a,b))
return z==null?"":z},
eb:function(a,b){var z,y
z=$.$get$dx()
y=z[b]
if(typeof y==="string")return y
y=this.fg(a,b)
z[b]=y
return y},
fg:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fJ()+b
if(z in a)return z
return b},
gbX:function(a){return a.bottom},
gai:function(a){return a.height},
gaJ:function(a){return a.left},
gaY:function(a){return a.right},
gb1:function(a){return a.top},
gaj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"a;",
gaJ:function(a){return this.dN(a,"left")}},
cG:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ca:{"^":"o;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lt:{"^":"cG;0l:length=","%":"CSSTransformValue"},
lu:{"^":"ca;0p:x=,0q:y=","%":"CSSTranslation"},
lv:{"^":"cG;0l:length=","%":"CSSUnparsedValue"},
lw:{"^":"o;0l:length=","%":"DataTransferItemList"},
lx:{"^":"o;0p:x=,0q:y=","%":"DeviceAcceleration"},
ly:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lz:{"^":"fK;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"DOMPoint"},
fK:{"^":"o;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":";DOMPointReadOnly"},
lA:{"^":"jl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.a9,P.S]]},
$ast:function(){return[[P.a9,P.S]]},
$isd:1,
$asd:function(){return[[P.a9,P.S]]},
$ise:1,
$ase:function(){return[[P.a9,P.S]]},
$asy:function(){return[[P.a9,P.S]]},
"%":"ClientRectList|DOMRectList"},
fL:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaj(a))+" x "+H.j(this.gai(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.ba(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=J.c3(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&this.gaj(a)===z.gaj(b)&&this.gai(a)===z.gai(b)},
gU:function(a){return W.eO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF)},
gbX:function(a){return a.bottom},
gai:function(a){return a.height},
gaJ:function(a){return a.left},
gaY:function(a){return a.right},
gb1:function(a){return a.top},
gaj:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.S]},
"%":";DOMRectReadOnly"},
lB:{"^":"jn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.n]},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"DOMStringList"},
lC:{"^":"o;0l:length=","%":"DOMTokenList"},
ji:{"^":"cg;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.k(z[b],"$isa1")},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.hD(this)
return new J.ap(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a1]},
$asd:function(){return[W.a1]},
$ase:function(){return[W.a1]}},
a1:{"^":"J;",
gd1:function(a){return new W.ji(a,a.children)},
gbe:function(a){return P.hS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.S)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
ac:{"^":"o;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a4:{"^":"o;",
cX:["dQ",function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.bb(H.c(c,{func:1,args:[W.ac]}),1),!1)},
$isa4:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eU|eV|eX|eY"},
bj:{"^":"fu;",$isbj:1,"%":"File"},
lV:{"^":"js;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"FileList"},
lW:{"^":"a4;0l:length=","%":"FileWriter"},
lZ:{"^":"bR;0l:length=","%":"HTMLFormElement"},
bl:{"^":"o;",$isbl:1,"%":"Gamepad"},
m_:{"^":"cT;0p:x=,0q:y=","%":"Gyroscope"},
m0:{"^":"o;0l:length=","%":"History"},
m1:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bo:{"^":"cY;",$isbo:1,"%":"KeyboardEvent"},
m6:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
m7:{"^":"cT;0p:x=,0q:y=","%":"Magnetometer"},
m9:{"^":"o;0l:length=","%":"MediaList"},
ma:{"^":"a4;",
cX:function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.dQ(a,b,c,!1)},
"%":"MessagePort"},
mb:{"^":"jL;",
k:function(a,b){return P.aN(a.get(H.T(b)))},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gat:function(a){var z=H.b([],[P.n])
this.L(a,new W.hw(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa5:1,
$asa5:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hw:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mc:{"^":"jM;",
k:function(a,b){return P.aN(a.get(H.T(b)))},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gat:function(a){var z=H.b([],[P.n])
this.L(a,new W.hx(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa5:1,
$asa5:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hx:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"o;",$isbp:1,"%":"MimeType"},
md:{"^":"jO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"MimeTypeArray"},
ay:{"^":"cY;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jh:{"^":"cg;a",
gY:function(a){var z=this.a.childNodes
return new W.dG(z,z.length,-1,[H.bM(C.J,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ast:function(){return[W.J]},
$asd:function(){return[W.J]},
$ase:function(){return[W.J]}},
J:{"^":"a4;",
i:function(a){var z=a.nodeValue
return z==null?this.dR(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hC:{"^":"jQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bs:{"^":"o;0l:length=",$isbs:1,"%":"Plugin"},
mn:{"^":"jU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"PluginArray"},
ms:{"^":"k_;",
k:function(a,b){return P.aN(a.get(H.T(b)))},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gat:function(a){var z=H.b([],[P.n])
this.L(a,new W.i0(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa5:1,
$asa5:function(){return[P.n,null]},
"%":"RTCStatsReport"},
i0:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mt:{"^":"bR;0l:length=","%":"HTMLSelectElement"},
cT:{"^":"a4;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bw:{"^":"a4;",$isbw:1,"%":"SourceBuffer"},
mu:{"^":"eV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SourceBufferList"},
bx:{"^":"o;",$isbx:1,"%":"SpeechGrammar"},
mv:{"^":"k1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SpeechGrammarList"},
by:{"^":"o;0l:length=",$isby:1,"%":"SpeechRecognitionResult"},
mx:{"^":"k4;",
k:function(a,b){return a.getItem(H.T(b))},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.b([],[P.n])
this.L(a,new W.ii(z))
return z},
gl:function(a){return a.length},
$asad:function(){return[P.n,P.n]},
$isa5:1,
$asa5:function(){return[P.n,P.n]},
"%":"Storage"},
ii:{"^":"v:28;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bz:{"^":"o;",$isbz:1,"%":"CSSStyleSheet|StyleSheet"},
bA:{"^":"a4;",$isbA:1,"%":"TextTrack"},
bB:{"^":"a4;",$isbB:1,"%":"TextTrackCue|VTTCue"},
mC:{"^":"k8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bB]},
$ast:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TextTrackCueList"},
mD:{"^":"eY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TextTrackList"},
mE:{"^":"o;0l:length=","%":"TimeRanges"},
bC:{"^":"o;",$isbC:1,"%":"Touch"},
b3:{"^":"cY;",$isb3:1,"%":"TouchEvent"},
mF:{"^":"ke;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bC]},
$ast:function(){return[W.bC]},
$isd:1,
$asd:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TouchList"},
mG:{"^":"o;0l:length=","%":"TrackDefaultList"},
cY:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mJ:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
mL:{"^":"o;0p:x=","%":"VRStageBoundsPoint"},
mM:{"^":"a4;0l:length=","%":"VideoTrackList"},
bG:{"^":"ay;",
gfX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.af("deltaY is not supported"))},
gfW:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.af("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
ja:{"^":"a4;",
f4:function(a,b){return a.requestAnimationFrame(H.bb(H.c(b,{func:1,ret:-1,args:[P.S]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mR:{"^":"kl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$asy:function(){return[W.bi]},
"%":"CSSRuleList"},
mS:{"^":"fL;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.ba(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=J.c3(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&a.width===z.gaj(b)&&a.height===z.gai(b)},
gU:function(a){return W.eO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gai:function(a){return a.height},
gaj:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mU:{"^":"kn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asy:function(){return[W.bl]},
"%":"GamepadList"},
mV:{"^":"kp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.J]},
$ast:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mW:{"^":"kr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.by]},
$ast:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"SpeechRecognitionResultList"},
mX:{"^":"kt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"StyleSheetList"},
jo:{"^":"cV;a,b,c,$ti",
h9:function(a,b,c,d){var z=H.z(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
mT:{"^":"jo;a,b,c,$ti"},
jp:{"^":"e9;a,b,c,d,e,$ti",
fk:function(){var z=this.d
if(z!=null&&this.a<=0)J.fn(this.b,this.c,z,!1)},
n:{
a_:function(a,b,c,d,e){var z=c==null?null:W.f4(new W.jq(c),W.ac)
z=new W.jp(0,a,b,z,!1,[e])
z.fk()
return z}}},
jq:{"^":"v:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isac"))}},
y:{"^":"a;$ti",
gY:function(a){return new W.dG(a,this.gl(a),-1,[H.bM(this,a,"y",0)])}},
dG:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fm(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
jj:{"^":"o+fF;"},
jk:{"^":"o+t;"},
jl:{"^":"jk+y;"},
jm:{"^":"o+t;"},
jn:{"^":"jm+y;"},
jr:{"^":"o+t;"},
js:{"^":"jr+y;"},
jE:{"^":"o+t;"},
jF:{"^":"jE+y;"},
jL:{"^":"o+ad;"},
jM:{"^":"o+ad;"},
jN:{"^":"o+t;"},
jO:{"^":"jN+y;"},
jP:{"^":"o+t;"},
jQ:{"^":"jP+y;"},
jT:{"^":"o+t;"},
jU:{"^":"jT+y;"},
k_:{"^":"o+ad;"},
eU:{"^":"a4+t;"},
eV:{"^":"eU+y;"},
k0:{"^":"o+t;"},
k1:{"^":"k0+y;"},
k4:{"^":"o+ad;"},
k7:{"^":"o+t;"},
k8:{"^":"k7+y;"},
eX:{"^":"a4+t;"},
eY:{"^":"eX+y;"},
kd:{"^":"o+t;"},
ke:{"^":"kd+y;"},
kk:{"^":"o+t;"},
kl:{"^":"kk+y;"},
km:{"^":"o+t;"},
kn:{"^":"km+y;"},
ko:{"^":"o+t;"},
kp:{"^":"ko+y;"},
kq:{"^":"o+t;"},
kr:{"^":"kq+y;"},
ks:{"^":"o+t;"},
kt:{"^":"ks+y;"}}],["","",,P,{"^":"",
aN:function(a){var z,y,x,w,v
if(a==null)return
z=P.he(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.a_(0,v,a[v])}return z},
kG:function(a,b){var z={}
a.L(0,new P.kH(z))
return z},
dD:function(){var z=$.dC
if(z==null){z=J.cy(window.navigator.userAgent,"Opera",0)
$.dC=z}return z},
fJ:function(){var z,y
z=$.dz
if(z!=null)return z
y=$.dA
if(y==null){y=J.cy(window.navigator.userAgent,"Firefox",0)
$.dA=y}if(y)z="-moz-"
else{y=$.dB
if(y==null){y=!P.dD()&&J.cy(window.navigator.userAgent,"Trident/",0)
$.dB=y}if(y)z="-ms-"
else z=P.dD()?"-o-":"-webkit-"}$.dz=z
return z},
kH:{"^":"v:16;a",
$2:function(a,b){this.a[a]=b}},
fV:{"^":"cg;a,b",
gbG:function(){var z,y,x
z=this.b
y=H.au(z,"t",0)
x=W.a1
return new H.hm(new H.j8(z,H.c(new P.fW(),{func:1,ret:P.a3,args:[y]}),[y]),H.c(new P.fX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bf(this.gbG().a)},
k:function(a,b){var z=this.gbG()
return z.b.$1(J.dj(z.a,b))},
gY:function(a){var z=P.hi(this.gbG(),!1,W.a1)
return new J.ap(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a1]},
$asd:function(){return[W.a1]},
$ase:function(){return[W.a1]}},
fW:{"^":"v:27;",
$1:function(a){return!!J.L(H.k(a,"$isJ")).$isa1}},
fX:{"^":"v:25;",
$1:function(a){return H.f(H.k(a,"$isJ"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bt:{"^":"a;p:a>,q:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.ba(b,"$isbt",[P.S],null)
if(!z)return!1
z=this.a
y=J.c3(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gq(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.aD(this.a)
y=J.aD(this.b)
return P.eN(P.bI(P.bI(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.z(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bt(z,H.B(x*b,y),this.$ti)}},
jV:{"^":"a;$ti",
gaY:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.B(z+this.c,H.z(this,0))},
gbX:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.ba(b,"$isa9",[P.S],"$asa9")
if(!z)return!1
z=this.a
y=J.c3(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gaY(b)){if(typeof x!=="number")return x.G()
z=H.B(x+this.d,w)===y.gbX(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aD(z)
x=this.b
w=J.aD(x)
if(typeof z!=="number")return z.G()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.B(x+this.d,v)
return P.eN(P.bI(P.bI(P.bI(P.bI(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d4:function(a,b){var z,y
H.u(b,"$isbt",[P.S],"$asbt")
z=b.a
y=this.a
if(typeof z!=="number")return z.dM()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dM()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"jV;aJ:a>,b1:b>,aj:c>,ai:d>,$ti",n:{
hS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",lD:{"^":"R;0p:x=,0q:y=","%":"SVGFEBlendElement"},lE:{"^":"R;0p:x=,0q:y=","%":"SVGFEColorMatrixElement"},lF:{"^":"R;0p:x=,0q:y=","%":"SVGFEComponentTransferElement"},lG:{"^":"R;0p:x=,0q:y=","%":"SVGFECompositeElement"},lH:{"^":"R;0p:x=,0q:y=","%":"SVGFEConvolveMatrixElement"},lI:{"^":"R;0p:x=,0q:y=","%":"SVGFEDiffuseLightingElement"},lJ:{"^":"R;0p:x=,0q:y=","%":"SVGFEDisplacementMapElement"},lK:{"^":"R;0p:x=,0q:y=","%":"SVGFEFloodElement"},lL:{"^":"R;0p:x=,0q:y=","%":"SVGFEGaussianBlurElement"},lM:{"^":"R;0p:x=,0q:y=","%":"SVGFEImageElement"},lN:{"^":"R;0p:x=,0q:y=","%":"SVGFEMergeElement"},lO:{"^":"R;0p:x=,0q:y=","%":"SVGFEMorphologyElement"},lP:{"^":"R;0p:x=,0q:y=","%":"SVGFEOffsetElement"},lQ:{"^":"R;0p:x=,0q:y=","%":"SVGFEPointLightElement"},lR:{"^":"R;0p:x=,0q:y=","%":"SVGFESpecularLightingElement"},lS:{"^":"R;0p:x=,0q:y=","%":"SVGFESpotLightElement"},lT:{"^":"R;0p:x=,0q:y=","%":"SVGFETileElement"},lU:{"^":"R;0p:x=,0q:y=","%":"SVGFETurbulenceElement"},lX:{"^":"R;0p:x=,0q:y=","%":"SVGFilterElement"},lY:{"^":"bm;0p:x=,0q:y=","%":"SVGForeignObjectElement"},h_:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m2:{"^":"bm;0p:x=,0q:y=","%":"SVGImageElement"},bW:{"^":"o;",$isbW:1,"%":"SVGLength"},m5:{"^":"jH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bW]},
$isd:1,
$asd:function(){return[P.bW]},
$ise:1,
$ase:function(){return[P.bW]},
$asy:function(){return[P.bW]},
"%":"SVGLengthList"},m8:{"^":"R;0p:x=,0q:y=","%":"SVGMaskElement"},bY:{"^":"o;",$isbY:1,"%":"SVGNumber"},mk:{"^":"jS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$ise:1,
$ase:function(){return[P.bY]},
$asy:function(){return[P.bY]},
"%":"SVGNumberList"},mm:{"^":"R;0p:x=,0q:y=","%":"SVGPatternElement"},mo:{"^":"o;0p:x=,0q:y=","%":"SVGPoint"},mp:{"^":"o;0l:length=","%":"SVGPointList"},mq:{"^":"o;0p:x=,0q:y=","%":"SVGRect"},mr:{"^":"h_;0p:x=,0q:y=","%":"SVGRectElement"},my:{"^":"k6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"SVGStringList"},R:{"^":"a1;",
gd1:function(a){return new P.fV(a,new W.jh(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mz:{"^":"bm;0p:x=,0q:y=","%":"SVGSVGElement"},io:{"^":"bm;","%":"SVGTextPathElement;SVGTextContentElement"},mB:{"^":"io;0p:x=,0q:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c0:{"^":"o;",$isc0:1,"%":"SVGTransform"},mH:{"^":"kg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[P.c0]},
$isd:1,
$asd:function(){return[P.c0]},
$ise:1,
$ase:function(){return[P.c0]},
$asy:function(){return[P.c0]},
"%":"SVGTransformList"},mK:{"^":"bm;0p:x=,0q:y=","%":"SVGUseElement"},jG:{"^":"o+t;"},jH:{"^":"jG+y;"},jR:{"^":"o+t;"},jS:{"^":"jR+y;"},k5:{"^":"o+t;"},k6:{"^":"k5+y;"},kf:{"^":"o+t;"},kg:{"^":"kf+y;"}}],["","",,P,{"^":"",lh:{"^":"o;0l:length=","%":"AudioBuffer"},li:{"^":"jg;",
k:function(a,b){return P.aN(a.get(H.T(b)))},
L:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gat:function(a){var z=H.b([],[P.n])
this.L(a,new P.fr(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa5:1,
$asa5:function(){return[P.n,null]},
"%":"AudioParamMap"},fr:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lj:{"^":"a4;0l:length=","%":"AudioTrackList"},ft:{"^":"a4;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ml:{"^":"ft;0l:length=","%":"OfflineAudioContext"},jg:{"^":"o+ad;"}}],["","",,P,{"^":"",cS:{"^":"o;",
hA:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
$iscS:1,
"%":"WebGLRenderingContext"},iM:{"^":"o;",$isiM:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mw:{"^":"k3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return P.aN(a.item(b))},
F:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a5,,,]]},
$isd:1,
$asd:function(){return[[P.a5,,,]]},
$ise:1,
$ase:function(){return[[P.a5,,,]]},
$asy:function(){return[[P.a5,,,]]},
"%":"SQLResultSetRowList"},k2:{"^":"o+t;"},k3:{"^":"k2+y;"}}],["","",,O,{"^":"",ab:{"^":"a;0a,0b,0c,0d,$ti",
b4:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cs:function(a,b,c){var z=H.au(this,"ab",0)
H.c(b,{func:1,ret:P.a3,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aw:function(a,b){return this.cs(a,null,b)},
bM:function(a){var z
H.u(a,"$isd",[H.au(this,"ab",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cA:function(a,b){var z
H.u(b,"$isd",[H.au(this,"ab",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.z(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.au(this,"ab",0)
H.B(b,z)
z=[z]
if(this.bM(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cA(x,H.b([b],z))}},
bS:function(a,b){var z,y
H.u(b,"$isd",[H.au(this,"ab",0)],"$asd")
if(this.bM(b)){z=this.a
y=z.length
C.a.bS(z,b)
this.cA(y,b)}},
$isd:1,
n:{
c8:function(a){var z=new O.ab([a])
z.b4(a)
return z}}},cP:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
e0:function(a){var z=this.b
if(!(z==null))z.w(a)},
ax:function(){return this.e0(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gcc(z)
else return V.aP()},
bs:function(a){var z=this.a
if(a==null)C.a.h(z,V.aP())
else C.a.h(z,a)
this.ax()},
aW:function(){var z=this.a
if(z.length>0){z.pop()
this.ax()}}}}],["","",,E,{"^":"",cz:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbv:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.c(this.gdF(),{func:1,ret:-1,args:[D.l]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.c(this.gdF(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.e5])
w.b=!0
this.aK(w)}},
ad:function(a,b){var z
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.ad(0,b)},
a5:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gV(z))
z.ax()
a.ck(this.f)
z=a.dy
y=(z&&C.a).gcc(z)
if(y!=null&&this.d!=null)y.dG(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a5(a)
a.cj()
a.dx.aW()},
gt:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aK:function(a){var z=this.z
if(!(z==null))z.w(a)},
a2:function(){return this.aK(null)},
hi:[function(a){H.k(a,"$isl")
this.e=null
this.aK(a)},function(){return this.hi(null)},"ir","$1","$0","gdF",0,2,0],
hg:[function(a){this.aK(H.k(a,"$isl"))},function(){return this.hg(null)},"ip","$1","$0","gdE",0,2,0],
io:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isd",[E.aE],"$asd")
for(z=b.length,y=this.gdE(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aF()
t.a=H.b([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.a2()},"$2","ghf",8,0,7],
iq:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isd",[E.aE],"$asd")
for(z=b.length,y=this.gdE(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aF()
t.a=H.b([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.c(y,x)
C.a.N(t.a,y)}}this.a2()},"$2","ghh",8,0,7],
$isaz:1,
n:{
dF:function(a,b,c,d,e,f){var z,y
z=new E.aE()
z.a=d
z.b=!0
y=O.c8(E.aE)
z.y=y
y.aw(z.ghf(),z.ghh())
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
return z}}},hW:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dX:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cP()
y=[V.ai]
z.a=H.b([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.hY(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cP()
z.a=H.b([],y)
v=z.gt()
v.toString
x=H.c(new E.hZ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cP()
z.a=H.b([],y)
y=z.gt()
y.toString
w=H.c(new E.i_(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.c_])
this.dy=z
C.a.h(z,null)
this.fr=new H.aZ(0,0,[P.n,A.cU])},
ghr:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.j(0,y.gV(y))
this.z=y
z=y}return z},
ck:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcc(z):a;(z&&C.a).h(z,y)},
cj:function(){var z=this.dy
if(z.length>1)z.pop()},
cY:function(a){var z=a.b
if(z.length===0)throw H.i(P.q("May not cache a shader with no name."))
if(this.fr.d3(0,z))throw H.i(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a_(0,z,a)},
n:{
hX:function(a,b){var z=new E.hW(a,b)
z.dX(a,b)
return z}}},hY:{"^":"v:11;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hZ:{"^":"v:11;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i_:{"^":"v:11;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},ix:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e2:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hv()},function(){return this.e2(null)},"e1","$1","$0","gcB",0,2,0],
gh1:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dE(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aq(z,!1)
return x/y},
cR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.c.c9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.c9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hv:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.iz(this),{func:1,ret:-1,args:[P.S]})
C.t.ej(z)
C.t.f4(z,W.f4(y,P.S))}},
hu:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.dE(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ax()
w=x.db
C.a.sl(w.a,0)
w.ax()
w=x.dx
C.a.sl(w.a,0)
w.ax()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a5(this.e)}}catch(v){z=H.aW(v)
y=H.bd(v)
P.dh("Error: "+H.j(z))
P.dh("Stack: "+H.j(y))
throw H.i(z)}},
n:{
iy:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscD)return E.ef(a,!0,!0,!0,!1)
y=W.dr(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd1(a).h(0,y)
w=E.ef(y,!0,!0,!0,!1)
w.a=a
return w},
ef:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ix()
y=P.hf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.cr(a,"webgl",y)
x=H.k(x==null?C.k.cr(a,"experimental-webgl",y):x,"$iscS")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hX(x,a)
w=new T.it(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iS(a)
v=new X.h9()
v.c=new X.ax(!1,!1,!1)
v.d=P.hg(null,null,null,P.A)
w.b=v
v=new X.hy(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hj(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iD(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e9,P.a]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.c(w.geE(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.c(w.geJ(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.c(w.geB(),q),!1,r))
v=w.z
p=W.bo
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.c(w.geL(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.c(w.geK(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.c(w.geO(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.c(w.geQ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.c(w.geP(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a_(a,H.T(W.fP(a)),H.c(w.geR(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.c(w.geF(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.c(w.geG(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.c(w.geS(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.c(w.gf_(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.c(w.geY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.c(w.geZ(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aq(Date.now(),!1)
z.ch=0
z.cR()
return z}}},iz:{"^":"v:40;a",
$1:function(a){var z
H.l1(a)
z=this.a
if(z.z){z.z=!1
z.hu()}}}}],["","",,Z,{"^":"",eI:{"^":"a;a,b",n:{
d0:function(a,b,c){var z
H.u(c,"$ise",[P.A],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b7(c)),35044)
a.bindBuffer(b,null)
return new Z.eI(b,z)}}},dp:{"^":"cz;a,b,c,d,e",
a1:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aW(y)
x=P.q('Failed to bind buffer attribute "'+J.ao(this.a)+'": '+H.j(z))
throw H.i(x)}},
i:function(a){return"["+J.ao(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eJ:{"^":"a;a",$islk:1},cC:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a1:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a1(a)},
aL:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a5:function(a){var z,y,x,w,v
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
z=[P.n]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ao(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismA:1},ce:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},b4:{"^":"a;a",
gct:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$b5().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
fO:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eH()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.n])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
n:{
am:function(a){return new Z.b4(a)}}}}],["","",,D,{"^":"",ds:{"^":"a;"},aF:{"^":"a;0a,0b,0c",
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
fY:function(){return this.w(null)},
hw:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
av:function(a){return this.hw(a,!0,!1)},
n:{
D:function(){var z=new D.aF()
z.a=H.b([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fT:{"^":"v:23;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bS:{"^":"l;c,d,a,0b,$ti"},bT:{"^":"l;c,d,a,0b,$ti"},E:{"^":"l;c,d,e,a,0b,$ti",
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
n:{"^":"ll<"}},dM:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dN:{"^":"l;c,a,0b"},h9:{"^":"a;0a,0b,0c,0d",
ho:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dN(a,this)
y.b=!0
return z.w(y)},
hk:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dN(a,this)
y.b=!0
return z.w(y)}},dS:{"^":"ci;x,y,c,d,e,a,0b"},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bq(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ci:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.an(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dK()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.an(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.an(a,b))
return!0},
hp:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cQ(new V.Q(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.w(w)
return!0},
eN:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.dS(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.O(0,0)}},ax:{"^":"a;a,b,c",
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
return z+(this.c?"Shift+":"")}},bq:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bE:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaD()
x=new X.bq(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ci:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bE(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bE(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bE(a,b,!1))
return!0},
hq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cQ(new V.Q(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.w(x)
return!0},
gd9:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbu:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdD:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cQ:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"l;"},ej:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},iD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.u(a,"$ise",[V.O],"$ase")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaD()
w=new X.ej(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hn:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.b
if(z==null)return!1
z.w(this.an(a,!0))
return!0},
hl:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.c
if(z==null)return!1
z.w(this.an(a,!0))
return!0},
hm:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.d
if(z==null)return!1
z.w(this.an(a,!1))
return!0}},iS:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.aR(0,0,(z&&C.k).gbe(z).c,C.k.gbe(z).d)},
cL:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.ax(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
bR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.O(y-w,x-v)},
aO:function(a){return new V.Q(a.movementX,a.movementY)},
bN:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.W(u.pageX)
C.c.W(u.pageY)
s=z.left
C.c.W(u.pageX)
C.a.h(y,new V.O(t-s,C.c.W(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dq(z,new X.ax(y,a.altKey,a.shiftKey))},
hY:[function(a){this.f=!0},"$1","geJ",4,0,4],
hQ:[function(a){this.f=!1},"$1","geB",4,0,4],
hT:[function(a){if(this.f)a.preventDefault()},"$1","geE",4,0,4],
i_:[function(a){var z
H.k(a,"$isbo")
if(!this.f)return
z=this.cL(a)
if(this.b.ho(z))a.preventDefault()},"$1","geL",4,0,22],
hZ:[function(a){var z
H.k(a,"$isbo")
if(!this.f)return
z=this.cL(a)
if(this.b.hk(z))a.preventDefault()},"$1","geK",4,0,22],
i1:[function(a){var z,y,x,w
H.k(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.al(a)
x=this.aO(a)
if(this.d.ci(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.ci(y,w))a.preventDefault()},"$1","geO",4,0,5],
i3:[function(a){var z,y,x
H.k(a,"$isay")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geQ",4,0,5],
hV:[function(a){var z,y,x,w
H.k(a,"$isay")
z=this.a
if(!(z&&C.k).gbe(z).d4(0,new P.bt(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.al(a)
if(this.x){x=this.aO(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geG",4,0,5],
i2:[function(a){var z,y,x
H.k(a,"$isay")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geP",4,0,5],
hU:[function(a){var z,y,x,w
H.k(a,"$isay")
z=this.a
if(!(z&&C.k).gbe(z).d4(0,new P.bt(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.al(a)
if(this.x){x=this.aO(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geF",4,0,5],
i4:[function(a){var z,y
H.k(a,"$isbG")
this.aC(a)
z=new V.Q((a&&C.r).gfW(a),C.r.gfX(a)).v(0,180)
if(this.x){if(this.d.hp(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hq(z,y))a.preventDefault()},"$1","geR",4,0,24],
i5:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.eN(w,v,x)}},"$1","geS",4,0,4],
ie:[function(a){var z
H.k(a,"$isb3")
this.a.focus()
this.f=!0
this.bR(a)
z=this.bN(a)
if(this.e.hn(z))a.preventDefault()},"$1","gf_",4,0,10],
ib:[function(a){var z
H.k(a,"$isb3")
this.bR(a)
z=this.bN(a)
if(this.e.hl(z))a.preventDefault()},"$1","geY",4,0,10],
ic:[function(a){var z
H.k(a,"$isb3")
this.bR(a)
z=this.bN(a)
if(this.e.hm(z))a.preventDefault()},"$1","geZ",4,0,10]}}],["","",,D,{"^":"",cb:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
ay:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.ay(null)},"hG","$1","$0","ge3",0,2,0],
$isV:1,
$isaz:1},V:{"^":"a;",$isaz:1},ha:{"^":"ab;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
ay:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eM:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eM(null)},"i0","$1","$0","gcO",0,2,0],
i6:[function(a){var z,y,x
H.u(a,"$isd",[D.V],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ef(x))return!1}return!0},"$1","geT",4,0,34],
hN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.cb)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aF()
s.a=H.b([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.h(s.a,x)}z=new D.bS(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","gey",8,0,20],
i8:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.cb)C.a.N(this.e,t)
s=t.d
if(s==null){s=new D.aF()
s.a=H.b([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.N(s.a,x)}z=new D.bT(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geV",8,0,20],
ef:function(a){var z=C.a.aQ(this.e,a)
return z},
$asd:function(){return[D.V]},
$asab:function(){return[D.V]}},hI:{"^":"a;",$isV:1,$isaz:1},ie:{"^":"a;",$isV:1,$isaz:1},iu:{"^":"a;",$isV:1,$isaz:1},iv:{"^":"a;",$isV:1,$isaz:1},iw:{"^":"a;",$isV:1,$isaz:1}}],["","",,V,{"^":"",
ln:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hv",8,0,26],
lc:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dO(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.au("null",c)
return C.i.au(C.c.dJ($.m.$2(a,0)?0:a,b),c+b+1)},
bc:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$ise",[P.w],"$ase")
z=H.b([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.a_(z,u,C.i.au(z[u],x))}return z},
dg:function(a,b){return C.c.hC(Math.pow(b,C.y.c9(Math.log(H.kF(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
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
return new V.Y(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
a7:{"^":"a;a,b,c,d",
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
return new V.a7(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
ch:{"^":"a;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isch")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.c.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.c.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.c.j(t,s)
q=a5.b
p=C.c.j(z,q)
o=a5.e
n=C.c.j(w,o)
m=a5.x
l=C.c.j(t,m)
k=a5.c
z=C.c.j(z,k)
j=a5.f
w=C.c.j(w,j)
i=a5.y
t=C.c.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.c.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.c.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.c.j(d,s)
b=C.c.j(h,q)
a=C.c.j(f,o)
a0=C.c.j(d,m)
h=C.c.j(h,k)
f=C.c.j(f,j)
d=C.c.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.c.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.c.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.ch(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ch))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.w]
y=V.bc(H.b([this.a,this.d,this.r],z),3,0)
x=V.bc(H.b([this.b,this.e,this.x],z),3,0)
w=V.bc(H.b([this.c,this.f,this.y],z),3,0)
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
ai:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
dB:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aP()
a3=1/a2
a4=-w
a5=-i
return V.aw((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isai")
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
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
co:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
z=b.z
if(!$.m.$2(z,this.z))return!1
z=b.Q
if(!$.m.$2(z,this.Q))return!1
z=b.ch
if(!$.m.$2(z,this.ch))return!1
z=b.cx
if(!$.m.$2(z,this.cx))return!1
z=b.cy
if(!$.m.$2(z,this.cy))return!1
z=b.db
if(!$.m.$2(z,this.db))return!1
z=b.dx
if(!$.m.$2(z,this.dx))return!1
return!0},
i:function(a){return this.M()},
dz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bc(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bc(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bc(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bc(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(a){return this.dz(a,3,0)},
M:function(){return this.dz("",3,0)},
n:{
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aP:function(){return V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dW:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.A(c)))
y=b.aq(z)
x=y.v(0,Math.sqrt(y.A(y)))
w=z.aq(x)
v=new V.G(a.a,a.b,a.c)
return V.aw(x.a,w.a,z.a,x.J(0).A(v),x.b,w.b,z.b,w.J(0).A(v),x.c,w.c,z.c,z.J(0).A(v),0,0,0,1)}}},
O:{"^":"a;p:a>,q:b>",
I:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
W:{"^":"a;p:a>,q:b>,c",
G:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bu:{"^":"a;p:a>,q:b>,c,d",
j:function(a,b){return new V.bu(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cl:{"^":"a;p:a>,q:b>,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
n:{
aR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cl(a,b,c,d)}}},
Q:{"^":"a;a,b",
h7:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){var z,y,x,w
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
if($.m.$2(b,0))return new V.Q(0,0)
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
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
h7:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aq:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.G(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dC:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fB:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bz:function(a){var z=V.lc(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.w(a)},
scp:function(a,b){},
sce:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bz(z)}z=new D.E("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.K(z)}},
scg:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bz(z)}z=new D.E("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.K(z)}},
sa3:function(a,b){var z,y
b=this.bz(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.w])
z.b=!0
this.K(z)}},
scf:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.K(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.w])
z.b=!0
this.K(z)}},
sc1:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.w])
z.b=!0
this.K(z)}},
ad:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sO(y)}},
n:{
cF:function(){var z=new U.fB()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},du:{"^":"ae;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aM:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.du))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
n:{
dv:function(a){var z=new U.du()
z.a=a
return z}}},dH:{"^":"ab;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.K(null)},"aa","$1","$0","gaB",0,2,0],
hM:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gex",8,0,15],
i7:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.N(t.a,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geU",8,0,15],
aM:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ap(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aM(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aP():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.ae]},
$asab:function(){return[U.ae]},
$isae:1},ae:{"^":"ds;"},iT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.K(null)},"aa","$1","$0","gaB",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd9()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbH(),y)
C.a.h(z.a,x)
x=this.a.c.gdD()
x.toString
z=H.c(this.gbI(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
y=H.c(this.gbJ(),y)
C.a.h(z.a,y)
return!0},
es:[function(a){H.k(a,"$isl")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbH",4,0,1],
eu:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbq")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).v(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).v(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
this.b.sO(0)
y=y.I(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).v(0,z.ga4())}this.aa()},"$1","gbI",4,0,1],
ev:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sO(y*10*x)
this.aa()}},"$1","gbJ",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},iU:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.K(null)},"aa","$1","$0","gaB",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd9()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbH(),y)
C.a.h(z.a,x)
x=this.a.c.gdD()
x.toString
z=H.c(this.gbI(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
x=H.c(this.gbJ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.c(this.gep(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.c(this.geq(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.c(this.gfj(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.c(this.gfi(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.c(this.gfh(),y)
C.a.h(z.a,y)
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.Q(z,y)},
es:[function(a){a=H.f(H.k(a,"$isl"),"$isbq")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbH",4,0,1],
eu:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbq")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ag(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))}this.aa()},"$1","gbI",4,0,1],
ev:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.aa()}},"$1","gbJ",4,0,1],
hJ:[function(a){if(H.f(H.k(a,"$isl"),"$isdS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gep",4,0,1],
hK:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbq")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.aa()},"$1","geq",4,0,1],
ij:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfj",4,0,1],
ii:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isej")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ag(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ag(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa3(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.I(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))}this.aa()},"$1","gfi",4,0,1],
ih:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.aa()}},"$1","gfh",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
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
z=V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
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
y=H.c(this.gew(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hL:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.M(this.b,this.a.b.c))return
H.f(a,"$iscQ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.w])
z.b=!0
this.K(z)}},"$1","gew",4,0,1],
aM:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aw(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",fC:{"^":"ab;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
X:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.X(null)},"cC","$1","$0","gT",0,2,0],
i9:[function(a,b){var z,y,x,w,v,u,t
z=M.aA
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geW",8,0,14],
ia:[function(a,b){var z,y,x,w,v,u,t
z=M.aA
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.N(t.a,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geX",8,0,14],
a5:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(!(y==null))y.a5(a)}this.e=!1},
$asd:function(){return[M.aA]},
$asab:function(){return[M.aA]},
$isaA:1},fE:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
X:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.X(null)},"cC","$1","$0","gT",0,2,0],
saZ:function(a,b){var z,y,x
if(b==null)b=X.cH(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cm])
z.b=!0
this.X(z)}},
sb_:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.c_])
z.b=!0
this.X(z)}},
a5:function(a){var z,y
a.ck(this.c)
this.b.a1(a)
z=this.a
z.toString
a.cy.bs(V.aP())
y=V.aP()
z.a
a.db.bs(y)
this.d.ad(0,a)
this.d.a5(a)
this.a.toString
a.cy.aW()
a.db.aW()
this.b.toString
a.cj()},
$isaA:1},fR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
X:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.X(null)},"cC","$1","$0","gT",0,2,0],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aF()
s.a=H.b([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geC",8,0,7],
hS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.u(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aF()
s.a=H.b([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.c(x,w)
C.a.N(s.a,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geD",8,0,7],
sd0:function(a){var z,y,x
if(a==null)a=X.e_(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("camera",x,this.a,this,[X.c7])
z.b=!0
this.X(z)}},
saZ:function(a,b){var z,y,x
if(b==null)b=X.cH(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cm])
z.b=!0
this.X(z)}},
sb_:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.c(this.gT(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.c_])
z.b=!0
this.X(z)}},
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p
a.ck(this.c)
this.b.a1(a)
z=this.a
y=a.c
x=a.d
w=a.cy
v=z.b
u=z.c
t=z.d
s=t-u
r=1/Math.tan(v*0.5)
w.bs(V.aw(-r/(y/x),0,0,0,0,r,0,0,0,0,t/s,-t*u/s,0,0,1,0))
y=$.e0
if(y==null){y=V.dW(new V.W(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e0=y
q=y}else q=y
y=z.a
if(y!=null){p=y.aM(0,a,z)
if(p!=null)q=p.j(0,q)}a.db.bs(q)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.ad(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a5(a)
this.a.toString
a.cy.aW()
a.db.aW()
this.b.aL(a)
a.cj()},
$isaA:1},aA:{"^":"a;"}}],["","",,A,{"^":"",dl:{"^":"a;a,b,c"},fq:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d7:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dV:{"^":"cU;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0ar,0aI,0bf,0da,0dc,0bg,0bh,0dd,0de,0bi,0bj,0df,0dg,0bk,0dh,0di,0bl,0dj,0dk,0bm,0bn,0bo,0dl,0dm,0bp,0bq,0dn,0dq,0br,0dr,0c3,0ds,0c4,0dt,0c5,0du,0c6,0dv,0c7,0dw,0c8,a,b,0c,0d,0e,0f,0r",
dW:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bZ("")
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
a1.fm(z)
a1.fu(z)
a1.fn(z)
a1.fE(z)
a1.fF(z)
a1.fw(z)
a1.fJ(z)
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
z=new P.bZ("")
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
v.fq(z)
v.fl(z)
v.fo(z)
v.fs(z)
v.fC(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fA(z)
v.fB(z)}v.fv(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fp(z)
v.fz(z)
v.fD(z)
v.fG(z)
v.fH(z)
v.fI(z)
v.ft(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.n])
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
this.dA(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isas")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isas")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isas")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isas")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$isd_")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isas")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isas")
this.k3=H.b([],[A.as])
y=a1.aH
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isas"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isF")
break
case C.e:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isak")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isF")
break
case C.e:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isak")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.aH=H.f(this.r.m(0,"diffuseTxt"),"$isaa")
this.aI=H.f(this.r.m(0,"nullDiffuseTxt"),"$isF")
break
case C.e:this.ar=H.f(this.r.m(0,"diffuseTxt"),"$isak")
this.aI=H.f(this.r.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bf=H.f(this.r.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.da=H.f(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.bg=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.e:this.dc=H.f(this.r.m(0,"invDiffuseTxt"),"$isak")
this.bg=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bj=H.f(this.r.m(0,"shininess"),"$isU")
this.bh=H.f(this.r.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dd=H.f(this.r.m(0,"specularTxt"),"$isaa")
this.bi=H.f(this.r.m(0,"nullSpecularTxt"),"$isF")
break
case C.e:this.de=H.f(this.r.m(0,"specularTxt"),"$isak")
this.bi=H.f(this.r.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.df=H.f(this.r.m(0,"bumpTxt"),"$isaa")
this.bk=H.f(this.r.m(0,"nullBumpTxt"),"$isF")
break
case C.e:this.dg=H.f(this.r.m(0,"bumpTxt"),"$isak")
this.bk=H.f(this.r.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dh=H.f(this.r.m(0,"envSampler"),"$isak")
this.di=H.f(this.r.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bl=H.f(this.r.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dj=H.f(this.r.m(0,"reflectTxt"),"$isaa")
this.bm=H.f(this.r.m(0,"nullReflectTxt"),"$isF")
break
case C.e:this.dk=H.f(this.r.m(0,"reflectTxt"),"$isak")
this.bm=H.f(this.r.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bn=H.f(this.r.m(0,"refraction"),"$isU")
this.bo=H.f(this.r.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dl=H.f(this.r.m(0,"refractTxt"),"$isaa")
this.bp=H.f(this.r.m(0,"nullRefractTxt"),"$isF")
break
case C.e:this.dm=H.f(this.r.m(0,"refractTxt"),"$isak")
this.bp=H.f(this.r.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bq=H.f(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.f:break
case C.d:this.dn=H.f(this.r.m(0,"alphaTxt"),"$isaa")
this.br=H.f(this.r.m(0,"nullAlphaTxt"),"$isF")
break
case C.e:this.dq=H.f(this.r.m(0,"alphaTxt"),"$isak")
this.br=H.f(this.r.m(0,"nullAlphaTxt"),"$isF")
break}}this.c3=H.b([],[A.ex])
this.c4=H.b([],[A.ey])
this.c5=H.b([],[A.ez])
this.c6=H.b([],[A.eA])
this.c7=H.b([],[A.eB])
this.c8=H.b([],[A.eC])
if(a1.k2){y=a1.z
if(y>0){this.dr=H.k(this.r.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.c3;(x&&C.a).h(x,new A.ex(m,l,k))}}y=a1.Q
if(y>0){this.ds=H.k(this.r.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isU")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isU")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.c4;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dt=H.k(this.r.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isU")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isU")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isU")
x=this.c5;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.du=H.k(this.r.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isF")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isaa")
x=this.c6;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dv=H.k(this.r.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isd_")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isF")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isU")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isak")
x=this.c7;(x&&C.a).h(x,new A.eB(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dw=H.k(this.r.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isF")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isU")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isU")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isU")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isaa")
x=this.c8;(x&&C.a).h(x,new A.eC(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hp:function(a,b){var z,y
z=a.ar
y=new A.dV(b,z)
y.cz(b,z)
y.dW(a,b)
return y}}},hs:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,ar,aI",
fm:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
fu:function(a){var z
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
fn:function(a){var z
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
fE:function(a){var z,y
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
fF:function(a){var z,y
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
fw:function(a){var z
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
fJ:function(a){var z
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
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cv(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fq:function(a){var z,y
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
case C.f:z=y+"   return emissionClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
fl:function(a){var z,y
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
case C.f:z=y+"   return ambientClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
fo:function(a){var z,y
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
case C.f:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fs:function(a){var z,y
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
case C.f:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fC:function(a){var z,y
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
case C.f:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fv:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
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
switch(y){case C.b:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
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
fA:function(a){var z,y
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
case C.f:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fB:function(a){var z,y
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
case C.f:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fp:function(a){var z,y
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
fz:function(a){var z,y
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
fD:function(a){var z,y
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
fG:function(a){var z,y,x
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
fH:function(a){var z,y,x
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
fI:function(a){var z,y,x
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
ft:function(a){var z
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
i:function(a){return this.ar}},ex:{"^":"a;a,b,c"},eA:{"^":"a;a,b,c,d,e,f,r,x"},ey:{"^":"a;a,b,c,d,e,f,r"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ez:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eC:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cU:{"^":"cz;",
cz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dA:function(a,b,c){var z,y,x
this.c=this.cM(b,35633)
this.d=this.cM(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f8(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.fc()
this.fe()},
a1:function(a){a.a.useProgram(this.e)
this.f.fZ()},
cM:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f8(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.i(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fc:function(){var z,y,x,w,v,u
z=H.b([],[A.dl])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dl(y,v.name,u))}this.f=new A.fq(z)},
fe:function(){var z,y,x,w,v,u
z=H.b([],[A.a6])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fV(v.type,v.size,v.name,u))}this.r=new A.iL(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ak(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
bb:function(a,b){return new P.eL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fV:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.bD(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.ew(this.a,this.e,c,d)
case 35667:return new A.iI(this.a,this.e,c,d)
case 35668:return new A.iJ(this.a,this.e,c,d)
case 35669:return new A.iK(this.a,this.e,c,d)
case 35674:return new A.iN(this.a,this.e,c,d)
case 35675:return new A.d_(this.a,this.e,c,d)
case 35676:return new A.as(this.a,this.e,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.i(this.bb("BOOL",c))
case 35671:throw H.i(this.bb("BOOL_VEC2",c))
case 35672:throw H.i(this.bb("BOOL_VEC3",c))
case 35673:throw H.i(this.bb("BOOL_VEC4",c))
default:throw H.i(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c9:{"^":"a;a,b",
i:function(a){return this.b}},ee:{"^":"cU;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
e_:function(a,b){var z,y,x,w,v
this.dA(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.is(a))
this.x=this.f.k(0,"posAttr")
this.y=H.f(this.r.m(0,"txtCount"),"$isF")
this.z=H.f(this.r.m(0,"backClr"),"$isew")
this.Q=H.b([],[A.aa])
this.ch=H.b([],[A.as])
z=[A.bD]
this.cx=H.b([],z)
this.cy=H.b([],z)
this.db=H.b([],z)
this.dx=H.b([],z)
this.dy=H.b([],[A.F])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isaa"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isas"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isbD"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isbD"))
z=this.db
x=this.r
w="destLoc"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isbD"))
z=this.dx
x=this.r
w="destSize"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isbD"))
z=this.dy
x=this.r
w="flip"+y
v=x.k(0,w)
if(v==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isF"))}},
n:{
is:function(a){var z,y
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
iq:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.ee(b,z)
y.cz(b,z)
y.e_(a,b)
return y}}},a6:{"^":"a;"},iL:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.i(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
h0:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.h0("\n")}},F:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iI:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iJ:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iK:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iH:{"^":"a6;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cZ:function(a,b,c,d,e){var z=new A.iH(a,b,c,e)
z.f=d
z.e=P.hh(d,0,!1,P.A)
return z}}},U:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},bD:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},H:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ew:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iN:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d_:{"^":"a6;a,b,c,d",
ae:function(a){var z=new Float32Array(H.b7(H.u(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},as:{"^":"a6;a,b,c,d",
ae:function(a){var z=new Float32Array(H.b7(H.u(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aa:{"^":"a6;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ak:{"^":"a6;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
l9:function(a,b,c,d){return F.kI(c,a,d,b,new F.la())},
kI:function(a,b,c,d,e){var z=F.l7(a,b,new F.kJ(H.c(e,{func:1,ret:V.W,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ap()
z.hc(new F.j2(),new F.hD())
return z},
l7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.al,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.e6()
y=H.b([],[F.al])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cq(null,null,new V.a7(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.d5(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cq(null,null,new V.a7(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.d5(d))}}z.d.fL(a+1,b+1,y)
return z},
la:{"^":"v:32;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
kJ:{"^":"v:33;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.di(y.$1(z),x)
x=J.di(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.A(x)))
u=new V.G(1,0,0)
y=v.aq(!v.u(0,u)?new V.G(0,0,1):u)
t=y.v(0,Math.sqrt(y.A(y)))
y=t.aq(v)
u=y.v(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.G(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a2()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
aR:function(){if(!this.gd8()){C.a.N(this.a.a.d.b,this)
this.a.a.a2()}this.f1()
this.f2()
this.f3()},
f9:function(a){this.a=a
C.a.h(a.d.b,this)},
fa:function(a){this.b=a
C.a.h(a.d.c,this)},
fb:function(a){this.c=a
C.a.h(a.d.d,this)},
f1:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
f2:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
f3:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gd8:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dC())return
return v.v(0,Math.sqrt(v.A(v)))},
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
v=z.v(0,Math.sqrt(z.A(z)))
z=w.I(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aq(z.v(0,Math.sqrt(z.A(z))))
return z.v(0,Math.sqrt(z.A(z)))},
c_:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ed()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dC())return
return v.v(0,Math.sqrt(v.A(v)))},
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
if($.m.$2(n,0)){z=r.I(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u).j(0,l).G(0,u).I(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.A(z)))
z=k.aq(m)
z=z.v(0,Math.sqrt(z.A(z))).aq(k)
m=z.v(0,Math.sqrt(z.A(z)))}return m},
bY:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
gfR:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y
if(this.gd8())return a+"disposed"
z=a+C.i.au(J.ao(this.a.e),0)+", "+C.i.au(J.ao(this.b.e),0)+", "+C.i.au(J.ao(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.C("")},
n:{
bQ:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.f9(a)
z.fa(b)
z.fb(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
fU:{"^":"a;"},
id:{"^":"fU;",
aT:function(a,b,c){var z,y
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
dO:{"^":"a;"},
hb:{"^":"a;"},
iG:{"^":"hb;",
aT:function(a,b,c){var z,y
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
e1:{"^":"a;"},
e5:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ap:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ap()||!1
if(!this.a.ap())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
el:function(a,b,c,d,e){var z,y,x
H.u(d,"$ise",[F.al],"$ase")
H.u(e,"$ise",[P.A],"$ase")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.aT(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hc:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.al],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.el(a,v,y,u,t))b.hb(u)}this.a.B()
this.c.cl()
this.d.cl()
this.b.ht()
this.c.cm(new F.iG())
this.d.cm(new F.id())
z=this.e
if(!(z==null))z.av(0)},
d_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gct(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dp])
for(r=0,q=0;q<w;++q){p=b.fO(q)
o=p.gct(p)
C.a.a_(s,q,new Z.dp(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].h8(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.u(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b7(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cC(new Z.eI(34962,j),s,b)
i.b=H.b([],[Z.ce])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.d0(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ce(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.d0(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ce(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.b([],[x])
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
C.a.h(h,g.e)}f=Z.d0(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ce(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.D(z,"\n")},
aK:function(a){var z=this.e
if(!(z==null))z.w(a)},
a2:function(){return this.aK(null)},
n:{
e6:function(){var z,y
z=new F.e5()
y=new F.iY(z)
y.b=!1
y.c=H.b([],[F.al])
z.a=y
y=new F.i8(z)
y.b=H.b([],[F.e1])
z.b=y
y=new F.i7(z)
y.b=H.b([],[F.dO])
z.c=y
y=new F.i6(z)
y.b=H.b([],[F.ah])
z.d=y
z.e=null
return z}}},
i6:{"^":"a;a,0b",
fK:function(a){var z,y,x,w,v
H.u(a,"$ise",[F.al],"$ase")
z=H.b([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bQ(y,w,v))}return z},
fL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$ise",[F.al],"$ase")
z=H.b([],[F.ah])
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
C.a.h(z,F.bQ(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bQ(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bQ(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bQ(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cm:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aT(0,v,t)){v.aR()
break}}}}},
cl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gfR(x)
if(y)x.aR()}},
ap:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c_())x=!1
return x},
bZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bY())x=!1
return x},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
i7:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cm:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aT(0,v,t)){v.aR()
break}}}}},
cl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.aR()}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.D(z,"\n")},
M:function(){return this.C("")}},
i8:{"^":"a;a,0b",
gl:function(a){return this.b.length},
ht:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aR()}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
al:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d5:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cq(this.cx,x,u,z,y,w,v,a,t)},
she:function(a){var z
a=a.v(0,Math.sqrt(a.A(a)))
if(!J.M(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a2()}},
h8:function(a){var z,y
z=J.L(a)
if(z.u(a,$.$get$at())){z=this.f
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.r
y=[P.w]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.x
y=[P.w]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.y
y=[P.w]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.u(a,$.$get$aK())){z=this.z
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bE())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bF())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b5()))return H.b([this.ch],[P.w])
else if(z.u(a,$.$get$aG())){z=this.cx
y=[P.w]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.w])},
c_:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j7(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
bY:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j6(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y,x
z=H.b([],[P.n])
C.a.h(z,C.i.au(J.ao(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
M:function(){return this.C("")},
n:{
cq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.al()
y=new F.j5(z)
y.b=H.b([],[F.e1])
z.b=y
y=new F.j1(z)
x=[F.dO]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iZ(z)
x=[F.ah]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eF()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$eG().a)!==0?c:null
z.ch=(x&$.$get$b5().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
j7:{"^":"v:8;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
j6:{"^":"v:8;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iY:{"^":"a;a,0b,0c",
B:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a2()
return!0},
fM:function(a,b,c,d,e,f,g,h,i){var z=F.cq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bc:function(a,b,c,d,e,f){return this.fM(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ap:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c_()
return!0},
bZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bY()
return!0},
fQ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
this.B()
z=H.b([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
iZ:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
L:function(a,b){H.c(b,{func:1,ret:-1,args:[F.ah]})
C.a.L(this.b,b)
C.a.L(this.c,new F.j_(this,b))
C.a.L(this.d,new F.j0(this,b))},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
j_:{"^":"v:8;a,b",
$1:function(a){H.k(a,"$isah")
if(!J.M(a.a,this.a))this.b.$1(a)}},
j0:{"^":"v:8;a,b",
$1:function(a){var z
H.k(a,"$isah")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
j1:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}},
j3:{"^":"a;"},
j2:{"^":"j3;",
aT:function(a,b,c){return J.M(b.f,c.f)}},
j4:{"^":"a;"},
hD:{"^":"j4;",
hb:function(a){var z,y,x,w
H.u(a,"$ise",[F.al],"$ase")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].she(z)
return}},
j5:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].C(a))
return C.a.D(z,"\n")},
M:function(){return this.C("")}}}],["","",,O,{"^":"",ho:{"^":"c_;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0af:dy@",
gt:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.R(null)},"b5","$1","$0","gak",0,2,0],
f6:[function(a){H.k(a,"$isl")
this.a=null
this.R(a)},function(){return this.f6(null)},"ig","$1","$0","gf5",0,2,0],
hO:[function(a,b){var z=V.ai
z=new D.bS(a,H.u(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","gez",8,0,13],
hP:[function(a,b){var z=V.ai
z=new D.bT(a,H.u(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","geA",8,0,13],
cJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.Z(z.e.length+3,4)*4
x=C.h.Z(z.f.length+3,4)*4
w=C.h.Z(z.r.length+3,4)*4
v=C.h.Z(z.x.length+3,4)*4
u=C.h.Z(z.y.length+3,4)*4
t=C.h.Z(z.z.length+3,4)*4
s=C.h.Z(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$at()
if(c){z=$.$get$aI()
a6=new Z.b4(a6.a|z.a)}if(b){z=$.$get$aH()
a6=new Z.b4(a6.a|z.a)}if(a){z=$.$get$aJ()
a6=new Z.b4(a6.a|z.a)}if(a0){z=$.$get$aK()
a6=new Z.b4(a6.a|z.a)}if(a2){z=$.$get$aG()
a6=new Z.b4(a6.a|z.a)}return new A.hs(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.u(a,"$ise",[T.cn],"$ase")},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.co(x)}}},
dG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cJ()
y=H.k(a.fr.k(0,z.ar),"$isdV")
if(y==null){y=A.hp(z,a.a)
a.cY(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aI
z=b.e
if(!(z instanceof Z.cC)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ap()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bZ()
u.a.bZ()
u=u.e
if(!(u==null))u.av(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fQ()
t=t.e
if(!(t==null))t.av(0)}r=b.d.d_(new Z.eJ(a.a),w)
r.as($.$get$at()).e=this.a.y.c
if(z)r.as($.$get$aI()).e=this.a.Q.c
if(v)r.as($.$get$aH()).e=this.a.z.c
if(x.rx)r.as($.$get$aJ()).e=this.a.ch.c
if(u)r.as($.$get$aK()).e=this.a.cx.c
if(x.x1)r.as($.$get$aG()).e=this.a.cy.c
b.e=r}z=T.cn
q=H.b([],[z])
this.a.a1(a)
if(x.fx){v=this.a
u=a.dx
u=u.gV(u)
v=v.db
v.toString
v.ae(u.a6(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gV(u)
t=a.dx
t=u.j(0,t.gV(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ae(u.a6(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghr()
t=a.dx
t=u.j(0,t.gV(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ae(u.a6(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ae(u.a6(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ae(u.a6(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ae(C.z.a6(u,!0))}if(x.aH>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.k(t,"$isai")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.b7(H.u(t.a6(0,!0),"$ise",v,"$ase")))
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
case C.d:this.S(q,this.f.d)
v=this.a
u=this.f.d
v.ab(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.S(q,this.f.e)
v=this.a
u=this.f.e
v.a7(v.r2,v.rx,u)
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
case C.d:this.S(q,this.r.d)
v=this.a
u=this.r.d
v.ab(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.S(q,this.r.e)
v=this.a
u=this.r.e
v.a7(v.x2,v.y1,u)
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
case C.d:this.S(q,this.x.d)
v=this.a
u=this.x.d
v.ab(v.aH,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.S(q,this.x.e)
v=this.a
u=this.x.e
v.a7(v.ar,v.aI,u)
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
case C.d:this.S(q,this.y.d)
v=this.a
u=this.y.d
v.ab(v.da,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.S(q,this.y.e)
v=this.a
u=this.y.e
v.a7(v.dc,v.bg,u)
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
case C.d:this.S(q,this.z.d)
v=this.a
u=this.z.d
v.ab(v.dd,v.bi,u)
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
case C.e:this.S(q,this.z.e)
v=this.a
u=this.z.e
v.a7(v.de,v.bi,u)
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
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.co(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcq(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b2(j.gaX(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gah(j)
g=i.d
h=t.gbt()
s=t.gb3()
t=t.gbd()
g.a.uniform3f(g.d,h,s,t)
t=j.gbT()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbU()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbV()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaX(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcq(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j).im()
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaX(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gah(j)
s=i.e
h=t.gbt()
g=t.gb3()
t=t.gbd()
s.a.uniform3f(s.d,h,g,t)
t=j.gil()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gik()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c6
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gac()
H.u(q,"$ise",t,"$ase")
if(!C.a.aQ(q,s)){s.sca(0,q.length)
C.a.h(q,s)}s=j.gc2(j)
h=i.d
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=j.gbu()
f=i.b
g=s.gaE(s)
h=s.gaF(s)
s=s.gaG()
f.a.uniform3f(f.d,g,h,s)
s=j.gaY(j)
h=i.c
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=m.co(j.gc2(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gah(j)
g=i.f
f=h.gbt()
s=h.gb3()
h=h.gbd()
g.a.uniform3f(g.d,f,s,h)
h=j.gac()
s=h.gcd(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.geo()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gen())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c7
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gac()
H.u(q,"$ise",s,"$ase")
if(!C.a.aQ(q,h)){h.sca(0,q.length)
C.a.h(q,h)}e=m.j(0,j.gV(j))
h=j.gV(j).b2(new V.W(0,0,0))
g=i.b
f=h.gp(h)
d=h.gq(h)
h=h.gcq(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b2(new V.W(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.dB(0)
d=i.d
n=new Float32Array(H.b7(H.u(new V.ch(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a6(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gah(j)
h=i.e
f=d.gbt()
g=d.gb3()
d=d.gbd()
h.a.uniform3f(h.d,f,g,d)
d=j.gac()
h=d.gcd(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcd(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gca(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbT()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbU()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbV()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gac()
H.u(q,"$ise",z,"$ase")
if(!C.a.aQ(q,t)){t.sca(0,q.length)
C.a.h(q,t)}t=j.gaX(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcq(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j)
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=j.gbu()
s=i.d
h=t.gaE(t)
g=t.gaF(t)
t=t.gaG()
s.a.uniform3f(s.d,h,g,t)
t=j.gaY(j)
g=i.e
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaX(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gac()
s=t.gcd(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.geo()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gen())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gah(j)
s=i.y
h=t.gbt()
g=t.gb3()
t=t.gbd()
s.a.uniform3f(s.d,h,g,t)
t=j.gis()
g=i.z
g.a.uniform1f(g.d,t)
t=j.git()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.d:this.S(q,this.Q.d)
z=this.a
v=this.Q.d
z.ab(z.df,z.bk,v)
break
case C.e:this.S(q,this.Q.e)
z=this.a
v=this.Q.e
z.a7(z.dg,z.bk,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gV(v).dB(0)
a.Q=v}z=z.fy
z.toString
z.ae(v.a6(0,!0))}if(x.dy){this.S(q,this.ch)
z=this.a
v=this.ch
z.a7(z.dh,z.di,v)
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
case C.d:this.S(q,this.cx.d)
z=this.a
v=this.cx.d
z.ab(z.dj,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.S(q,this.cx.e)
z=this.a
v=this.cx.e
z.a7(z.dk,z.bm,v)
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
case C.d:this.S(q,this.cy.d)
z=this.a
v=this.cy.d
z.ab(z.dl,z.bp,v)
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
case C.e:this.S(q,this.cy.e)
z=this.a
v=this.cy.e
z.a7(z.dm,z.bp,v)
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
case C.d:this.S(q,this.db.d)
z=this.a
u=this.db.d
z.ab(z.dn,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break
case C.e:this.S(q,this.db.e)
z=this.a
u=this.db.e
z.a7(z.dq,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a1(a)
z=b.e
z.a1(a)
z.a5(a)
z.aL(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aL(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.d7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cJ().ar}},hq:{"^":"cO;0f,a,b,0c,0d,0e"},cO:{"^":"a;",
b8:["dU",function(){}]},hr:{"^":"cO;a,b,0c,0d,0e"},b_:{"^":"cO;0f,a,b,0c,0d,0e",
cS:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.R(y)}},
b8:["by",function(){this.dU()
this.cS(new V.Y(1,1,1))}],
sah:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b8()
z=this.a
z.a=null
z.R(null)}this.cS(b)}},ht:{"^":"b_;0ch,0f,a,b,0c,0d,0e",
f8:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
b8:function(){this.by()
this.f8(1)}},hu:{"^":"b_;0ch,0f,a,b,0c,0d,0e",
bP:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
b8:function(){this.by()
this.bP(100)}},c_:{"^":"a;"},ip:{"^":"c_;0a,0b,0c,0d,0af:e@",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.R(null)},"b5","$1","$0","gak",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isd",[O.b1],"$asd")
for(z=b.length,y=this.gak(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaf()==null){t=new D.aF()
t.a=H.b([],w)
t.c=0
u.saf(t)}t=u.gaf()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.b5()},"$2","geH",8,0,12],
hX:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isd",[O.b1],"$asd")
for(z=b.length,y=this.gak(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaf()==null){t=new D.aF()
t.a=H.b([],w)
t.c=0
u.saf(t)}t=u.gaf()
t.toString
H.c(y,x)
C.a.N(t.a,y)}}this.b5()},"$2","geI",8,0,12],
dG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.Z(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.k(a.fr.k(0,y),"$isee")
if(x==null){x=A.iq(z,a.a)
a.cY(x)}this.b=x
y=x}if(b.e==null){y=b.d.d_(new Z.eJ(a.a),$.$get$at())
w=y.as($.$get$at())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.a1(a)
y=T.cn
u=H.b([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.u(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.aQ(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.Q
if(t>=v.length)return H.h(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.ch
if(t>=v.length)return H.h(v,t)
v=v[t]
n=new Float32Array(H.b7(H.u((q==null?new V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).a6(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.cx
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.cy
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.db
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.dy
if(t>=v.length)return H.h(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.y
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.z
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s){y=u[s]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=b.e
if(y instanceof Z.cC){y.a1(a)
y.a5(a)
y.aL(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.d7()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},b1:{"^":"a;0a,0b,0c,0d,0e,0af:f@",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.R(null)},"b5","$1","$0","gak",0,2,0],
sac:function(a){var z,y,x
z=this.a
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.c(this.gak(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.y
y=H.c(this.gak(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("texture",x,this.a,this,[T.ec])
z.b=!0
this.R(z)}},
sd2:function(a){var z,y
a=V.aP()
if(!J.M(this.b,a)){z=this.b
this.b=a
y=new D.E("colorMatrix",z,a,this,[V.ai])
y.b=!0
this.R(y)}},
scu:function(a,b){var z,y
b=V.aR(0,0,1,1)
if(!J.M(this.c,b)){z=this.c
this.c=b
y=new D.E("source",z,b,this,[V.cl])
y.b=!0
this.R(y)}},
sd6:function(a,b){var z,y
if(b==null)b=V.aR(0,0,1,1)
if(!J.M(this.d,b)){z=this.d
this.d=b
y=new D.E("destination",z,b,this,[V.cl])
y.b=!0
this.R(y)}},
n:{
ir:function(a,b,c,d,e){var z,y
z=new O.b1()
z.sac(e)
z.sd2(a)
z.scu(0,d)
z.sd6(0,b)
if(z.e!==!1){z.e=!1
y=new D.E("flip",!0,!1,z,[P.a3])
y.b=!0
z.R(y)}z.f=null
return z}}}}],["","",,T,{"^":"",cn:{"^":"cz;"},ec:{"^":"cn;0b,0c,0d,0e,0f,0r,0x,0y,a",n:{
ed:function(a,b){var z=new T.ec(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.D()
return z}}},it:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fp:{"^":"a;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isbX:1},bX:{"^":"a;"},dU:{"^":"a;",
aS:["dT",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cw",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbX:1},br:{"^":"dU;0a",
aS:function(a,b){return!this.dT(0,b)},
i:function(a){return"!["+this.cw(0)+"]"}},i4:{"^":"a;0a",
dY:function(a){var z,y
if(a.a.length<=0)throw H.i(P.q("May not create a SetMatcher with zero characters."))
z=new H.aZ(0,0,[P.A,P.a3])
for(y=new H.dR(a,a.gl(a),0,[H.au(a,"t",0)]);y.E();)z.a_(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.d3(0,b)},
i:function(a){var z=this.a
return P.cW(new H.dQ(z,[H.z(z,0)]),0,null)},
$isbX:1,
n:{
a2:function(a){var z=new V.i4()
z.dY(a)
return z}}},e8:{"^":"a;a,b,0c,0d",
ghd:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ek(this.a.H(0,b))
w.a=H.b([],[V.bX])
w.c=!1
C.a.h(this.c,w)
return w},
h_:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},eh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fj(this.b,"\n","\\n")
y=H.fj(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ei:{"^":"a;a,b,0c",
i:function(a){return this.b}},iC:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.e8(this,b)
z.c=H.b([],[V.ek])
this.a.a_(0,b,z)}return z},
b0:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ei(this,a)
y=P.n
z.c=new H.aZ(0,0,[y,y])
this.b.a_(0,a,z)}return z},
hF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eh])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b6(a,t)
r=y.h_(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cW(w,0,null)
throw H.i(P.q("Untokenizable string [state: "+y.ghd(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cW(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eh(o==null?p.b:o,q,t)}++t}}}},ek:{"^":"dU;b,0c,0a",
i:function(a){return this.b.b+": "+this.cw(0)}}}],["","",,X,{"^":"",fs:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gt:function(){var z=this.db
if(z==null){z=D.D()
this.db=z}return z},
a1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.X(z.getParameter(3379))
u=V.dg(x,2)
t=V.dg(w,2)
v=V.dg(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.K.hA(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.ed(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.fY()}y.b=r.b
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
a.c=C.c.W(y*this.a)
x=z.d
a.d=C.c.W(x*this.b)
w=this.c
q=C.c.W(z.a*w)
p=this.d
o=C.c.W(z.b*p)
n=C.c.W(y*w)
m=C.c.W(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)},
aL:function(a){a.a.bindFramebuffer(36160,null)}},c7:{"^":"a;",$isaz:1},fZ:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a1:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.c.W(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.c.W(w.b*x)
t=C.c.W(w.c*y)
a.c=t
w=C.c.W(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
aL:function(a){},
n:{
cH:function(a,b,c,d,e,f,g){var z,y
z=new X.fZ()
if(d==null)y=new V.a7(0,0,0,1)
else y=d
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aR(0,0,1,1)
z.r=y
return z}}},h0:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
$isaz:1,
$isc7:1},hG:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
aN:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.aN(null)},"hH","$1","$0","ge6",0,2,0],
$isaz:1,
$isc7:1,
n:{
e_:function(a,b,c,d){var z,y,x,w
z=new X.hG()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.c(z.ge6(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.E("mover",y,z.a,z,[U.ae])
x.b=!0
z.aN(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.E("fov",y,b,z,[P.w])
x.b=!0
z.aN(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.E("near",y,d,z,[P.w])
x.b=!0
z.aN(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.E("far",y,a,z,[P.w])
x.b=!0
z.aN(x)}return z}}},cm:{"^":"a;"}}],["","",,V,{"^":"",
l5:function(a){P.iB(C.w,new V.l6(a))},
l6:{"^":"v:37;a",
$1:function(a){H.k(a,"$isb2")
P.dh(C.c.dJ(this.a.gh1(),2)+" fps")}},
i9:{"^":"a;0a,0b",
dZ:function(a,b){var z,y,x,w,v,u,t
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
W.a_(z,"scroll",H.c(new V.ic(x),{func:1,ret:-1,args:[t]}),!1,t)},
fN:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$ise",[P.n],"$ase")
this.fd()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hF(C.a.h6(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kh(C.H,s,C.q,!1)
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
fd:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iC()
y=P.n
z.a=new H.aZ(0,0,[y,V.e8])
z.b=new H.aZ(0,0,[y,V.ei])
z.c=z.H(0,"Start")
y=z.H(0,"Start").D(0,"Bold")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").D(0,"Bold")
x=new V.br()
w=[V.bX]
x.a=H.b([],w)
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
x=new V.br()
x.a=H.b([],w)
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
x=new V.br()
x.a=H.b([],w)
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
y=new V.br()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").D(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").D(0,"LinkTail")
y=new V.br()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").D(0,"Other").a,new V.fp())
x=z.H(0,"Other").D(0,"Other")
y=new V.br()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b0("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b0("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b0("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b0("Link")
x=z.H(0,"Other")
x.d=x.a.b0("Other")
this.b=z},
n:{
ia:function(a,b){var z=new V.i9()
z.dZ(a,!0)
return z}}},
ic:{"^":"v:38;a",
$1:function(a){P.iA(C.m,new V.ib(this.a))}},
ib:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.c.W(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fe:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.ia("Test 036",!0)
y=W.dr(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fN(H.b(["Test of the texture layout cover technique."],[P.n]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iy(x,!0,!0,!0,!1)
v=new U.dH()
z=U.ae
v.b4(z)
v.aw(v.gex(),v.geU())
v.e=null
v.f=V.aP()
v.r=0
u=w.r
t=new U.iU()
s=U.cF()
s.scp(0,!0)
s.sce(6.283185307179586)
s.scg(0)
s.sa3(0,0)
s.scf(100)
s.sO(0)
s.sc1(0.5)
t.b=s
s=s.gt()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.c(t.gaB(),r)
C.a.h(s.a,q)
s=U.cF()
s.scp(0,!0)
s.sce(6.283185307179586)
s.scg(0)
s.sa3(0,0)
s.scf(100)
s.sO(0)
s.sc1(0.5)
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
p=new X.ax(!1,!1,!1)
o=t.d
t.d=p
s=[X.ax]
q=new D.E("modifiers",o,p,t,s)
q.b=!0
t.K(q)
q=t.f
if(q!==!1){t.f=!1
q=new D.E("invertX",q,!1,t,[P.a3])
q.b=!0
t.K(q)}q=t.r
if(q!==!1){t.r=!1
q=new D.E("invertY",q,!1,t,[P.a3])
q.b=!0
t.K(q)}t.aP(u)
v.h(0,t)
u=w.r
t=new U.iT()
q=U.cF()
q.scp(0,!0)
q.sce(6.283185307179586)
q.scg(0)
q.sa3(0,0)
q.scf(100)
q.sO(0)
q.sc1(0.2)
t.b=q
q=q.gt()
q.toString
n=H.c(t.gaB(),r)
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
p=new X.ax(!0,!1,!1)
o=t.c
t.c=p
q=new D.E("modifiers",o,p,t,s)
q.b=!0
t.K(q)
t.aP(u)
v.h(0,t)
u=w.r
t=new U.iV()
t.c=0.01
t.d=0
t.e=0
p=new X.ax(!1,!1,!1)
t.b=p
s=new D.E("modifiers",null,p,t,s)
s.b=!0
t.K(s)
t.aP(u)
v.h(0,t)
v.h(0,U.dv(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.e_(2000,1.0471975511965976,v,0.1)
l=new X.fs()
l.a=800
l.b=600
l.c=800
l.d=600
l.e=!0
l.y=T.ed(0,null)
u=new V.a7(0,0,0,1)
l.z=u
l.Q=!0
l.ch=2000
l.cx=!0
l.cy=V.aR(0,0,1,1)
t=new V.a7(0,0,0,0)
if(!u.u(0,t))l.z=t
k=E.dF(null,!0,null,"",null,null)
k.sbv(0,F.l9(30,1,15,0.5))
j=new O.ho()
u=O.c8(V.ai)
j.e=u
u.aw(j.gez(),j.geA())
u=new O.b_(j,"emission")
u.c=C.b
u.f=new V.Y(0,0,0)
j.f=u
u=new O.b_(j,"ambient")
u.c=C.b
u.f=new V.Y(0,0,0)
j.r=u
u=new O.b_(j,"diffuse")
u.c=C.b
u.f=new V.Y(0,0,0)
j.x=u
u=new O.b_(j,"invDiffuse")
u.c=C.b
u.f=new V.Y(0,0,0)
j.y=u
u=new O.hu(j,"specular")
u.c=C.b
u.f=new V.Y(0,0,0)
u.ch=100
j.z=u
u=new O.hr(j,"bump")
u.c=C.b
j.Q=u
j.ch=null
u=new O.b_(j,"reflect")
u.c=C.b
u.f=new V.Y(0,0,0)
j.cx=u
u=new O.ht(j,"refract")
u.c=C.b
u.f=new V.Y(0,0,0)
u.ch=1
j.cy=u
u=new O.hq(j,"alpha")
u.c=C.b
u.f=1
j.db=u
u=new D.ha()
u.b4(D.V)
u.e=H.b([],[D.cb])
u.f=H.b([],[D.hI])
u.r=H.b([],[D.ie])
u.x=H.b([],[D.iu])
u.y=H.b([],[D.iv])
u.z=H.b([],[D.iw])
u.Q=null
u.ch=null
u.cs(u.gey(),u.geT(),u.geV())
j.dx=u
t=u.Q
if(t==null){t=D.D()
u.Q=t
u=t}else u=t
t=H.c(j.gf5(),r)
C.a.h(u.a,t)
t=j.dx
u=t.ch
if(u==null){u=D.D()
t.ch=u}t=H.c(j.gak(),r)
C.a.h(u.a,t)
j.dy=null
t=j.dx
u=U.dv(V.dW(new V.W(0,0,0),new V.G(0,1,0),new V.G(0,-1,-1)))
i=new V.Y(1,1,1)
s=new D.cb()
s.c=new V.Y(1,1,1)
s.a=new V.G(0,0,1)
o=s.b
s.b=u
u=u.gt()
u.toString
q=H.c(s.ge3(),r)
C.a.h(u.a,q)
z=new D.E("mover",o,s.b,s,[z])
z.b=!0
s.ay(z)
if(!s.c.u(0,i)){o=s.c
s.c=i
z=new D.E("color",o,i,s,[V.Y])
z.b=!0
s.ay(z)}t.h(0,s)
z=j.r
z.sah(0,new V.Y(0,0,1))
z=j.x
z.sah(0,new V.Y(0,1,0))
z=j.z
z.sah(0,new V.Y(1,0,0))
z=j.z
if(z.c===C.b){z.c=C.f
z.by()
z.bP(100)
u=z.a
u.a=null
u.R(null)}z.bP(10)
h=new M.fR()
z=O.c8(E.aE)
h.d=z
z.aw(h.geC(),h.geD())
h.e=null
h.f=null
h.r=null
h.x=null
h.sd0(null)
h.saZ(0,null)
h.sb_(null)
h.sd0(m)
h.sb_(j)
h.saZ(0,l)
h.d.h(0,k)
g=new V.a7(0,0,0,1)
f=new O.ip()
f.a=g
z=new D.E("backColor",null,g,f,[V.a7])
z.b=!0
f.R(z)
f.b=null
z=O.c8(O.b1)
f.c=z
z.aw(f.geH(),f.geI())
f.d=0
f.e=null
for(z=[P.a3],e=0;e<3;++e){d=e*0.3333333333333333
for(c=0;c<3;++c){u=f.c
t=l.y
s=V.aR(d,c*0.3333333333333333,0.3333333333333333,0.3333333333333333)
q=new O.b1()
q.sac(t)
q.sd2(null)
q.scu(0,null)
q.sd6(0,s)
if(q.e!==!1){q.e=!1
t=new D.E("flip",!0,!1,q,z)
t.b=!0
s=q.f
if(!(s==null))s.w(t)}q.f=null
u.toString
t=H.au(u,"ab",0)
H.B(q,t)
s=[t]
if(u.bM(H.b([q],s))){n=u.a
b=n.length
C.a.h(n,q)
t=H.u(H.b([q],s),"$isd",[t],"$asd")
u=u.c
if(u!=null)u.$2(b,t)}}}z=f.c
u=O.ir(null,null,!1,null,null)
u.sac(l.y)
z.h(0,u)
a=new M.fE()
a0=new X.h0()
o=a.a
a.a=a0
z=a0.gt()
z.toString
u=H.c(a.gT(),r)
C.a.h(z.a,u)
z=new D.E("camera",o,a.a,a,[X.c7])
z.b=!0
a.X(z)
a.saZ(0,null)
a.sb_(null)
z=E.dF(null,!0,null,"",null,null)
a1=F.e6()
u=a1.a
t=new V.G(-1,-1,1)
t=t.v(0,Math.sqrt(t.A(t)))
a2=u.bc(new V.bu(1,2,4,6),new V.a7(1,0,0,1),new V.W(-1,-1,0),new V.O(0,1),t,null)
u=a1.a
t=new V.G(1,-1,1)
t=t.v(0,Math.sqrt(t.A(t)))
a3=u.bc(new V.bu(0,3,4,6),new V.a7(0,0,1,1),new V.W(1,-1,0),new V.O(1,1),t,null)
u=a1.a
t=new V.G(1,1,1)
t=t.v(0,Math.sqrt(t.A(t)))
a4=u.bc(new V.bu(0,2,5,6),new V.a7(0,1,0,1),new V.W(1,1,0),new V.O(1,0),t,null)
u=a1.a
t=new V.G(-1,1,1)
t=t.v(0,Math.sqrt(t.A(t)))
a5=u.bc(new V.bu(0,2,4,7),new V.a7(1,1,0,1),new V.W(-1,1,0),new V.O(0,0),t,null)
a1.d.fK(H.b([a2,a3,a4,a5],[F.al]))
a1.ap()
z.sbv(0,a1)
a.d=z
a.e=null
a.sb_(f)
a.saZ(0,X.cH(!0,!0,!1,new V.a7(0,0,0,1),2000,null,0))
z=M.aA
u=H.b([h,a],[z])
t=new M.fC()
t.b4(z)
t.e=!1
t.f=null
t.aw(t.geW(),t.geX())
t.bS(0,u)
z=w.d
if(z!==t){if(z!=null){z=z.gt()
z.toString
u=H.c(w.gcB(),r)
C.a.N(z.a,u)}w.d=t
z=t.gt()
z.toString
r=H.c(w.gcB(),r)
C.a.h(z.a,r)
w.e1()}V.l5(w)}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.cf.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.c2=function(a){if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.db=function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.kN=function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cp.prototype
return a}
J.kO=function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cp.prototype
return a}
J.c3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.fl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kN(a).a9(a,b)}
J.di=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kO(a).j(a,b)}
J.fm=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c2(a).k(a,b)}
J.fn=function(a,b,c,d){return J.c3(a).cX(a,b,c,d)}
J.cy=function(a,b,c){return J.c2(a).fS(a,b,c)}
J.dj=function(a,b){return J.db(a).F(a,b)}
J.fo=function(a,b){return J.db(a).L(a,b)}
J.aD=function(a){return J.L(a).gU(a)}
J.bO=function(a){return J.db(a).gY(a)}
J.bf=function(a){return J.c2(a).gl(a)}
J.ao=function(a){return J.L(a).i(a)}
I.de=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cD.prototype
C.x=J.o.prototype
C.a=J.aY.prototype
C.y=J.dJ.prototype
C.h=J.dK.prototype
C.z=J.dL.prototype
C.c=J.bU.prototype
C.i=J.cf.prototype
C.G=J.bV.prototype
C.I=H.hB.prototype
C.J=W.hC.prototype
C.p=J.hH.prototype
C.K=P.cS.prototype
C.l=J.cp.prototype
C.r=W.bG.prototype
C.t=W.ja.prototype
C.u=new P.hF()
C.v=new P.iX()
C.j=new P.jW()
C.b=new A.c9(0,"ColorSourceType.None")
C.f=new A.c9(1,"ColorSourceType.Solid")
C.d=new A.c9(2,"ColorSourceType.Texture2D")
C.e=new A.c9(3,"ColorSourceType.TextureCube")
C.m=new P.aX(0)
C.w=new P.aX(5e6)
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
C.H=H.b(I.de([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iW(!1)
$.av=0
$.bg=null
$.dm=null
$.d4=!1
$.fb=null
$.f5=null
$.fh=null
$.cu=null
$.cw=null
$.dc=null
$.b8=null
$.bJ=null
$.bK=null
$.d5=!1
$.P=C.j
$.dC=null
$.dB=null
$.dA=null
$.dz=null
$.m=V.hv()
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
I.$lazy(y,x,w)}})(["dy","$get$dy",function(){return H.fa("_$dart_dartClosure")},"cL","$get$cL",function(){return H.fa("_$dart_js")},"el","$get$el",function(){return H.aB(H.co({
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.aB(H.co({$method$:null,
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.aB(H.co(null))},"eo","$get$eo",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.aB(H.co(void 0))},"et","$get$et",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.aB(H.er(null))},"ep","$get$ep",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.aB(H.er(void 0))},"eu","$get$eu",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d1","$get$d1",function(){return P.jb()},"bL","$get$bL",function(){return[]},"f_","$get$f_",function(){return P.hV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dx","$get$dx",function(){return{}},"eH","$get$eH",function(){return Z.am(0)},"eF","$get$eF",function(){return Z.am(511)},"at","$get$at",function(){return Z.am(1)},"aI","$get$aI",function(){return Z.am(2)},"aH","$get$aH",function(){return Z.am(4)},"aJ","$get$aJ",function(){return Z.am(8)},"aK","$get$aK",function(){return Z.am(16)},"bE","$get$bE",function(){return Z.am(32)},"bF","$get$bF",function(){return Z.am(64)},"eG","$get$eG",function(){return Z.am(96)},"b5","$get$b5",function(){return Z.am(128)},"aG","$get$aG",function(){return Z.am(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.A,[P.d,E.aE]]},{func:1,ret:P.I,args:[F.ah]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[P.A,[P.d,O.b1]]},{func:1,ret:-1,args:[P.A,[P.d,V.ai]]},{func:1,ret:-1,args:[P.A,[P.d,M.aA]]},{func:1,ret:-1,args:[P.A,[P.d,U.ae]]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,ret:P.w},{func:1,args:[,]},{func:1,ret:-1,args:[P.A,[P.d,D.V]]},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:W.a1,args:[W.J]},{func:1,ret:P.a3,args:[P.w,P.w]},{func:1,ret:P.a3,args:[W.J]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:V.W,args:[P.w]},{func:1,ret:P.I,args:[F.al,P.w,P.w]},{func:1,ret:P.a3,args:[[P.d,D.V]]},{func:1,ret:-1,args:[P.a],opt:[P.ar]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.b2]},{func:1,ret:P.I,args:[W.ac]},{func:1,args:[,P.n]},{func:1,ret:P.I,args:[P.S]}]
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
Isolate.de=a.de
Isolate.d9=a.d9
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fe,[])
else S.fe([])})})()
//# sourceMappingURL=test.dart.js.map
