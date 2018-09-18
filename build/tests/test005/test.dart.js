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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cT(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cU=function(){}
var dart=[["","",,H,{"^":"",le:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ca:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cX==null){H.kz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.eo("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cr()]
if(v!=null)return v
v=H.kE(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cr(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
p:function(a,b){return a===b},
gM:function(a){return H.bi(a)},
i:["dq",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fM:{"^":"n;",
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isad:1},
dw:{"^":"n;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0},
$isG:1},
cs:{"^":"n;",
gM:function(a){return 0},
i:["dr",function(a){return String(a)}]},
hp:{"^":"cs;"},
cJ:{"^":"cs;"},
bF:{"^":"cs;",
i:function(a){var z=a[$.$get$dj()]
if(z==null)return this.dr(a)
return"JavaScript function for "+H.j(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscl:1},
aP:{"^":"n;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.ab("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.p(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b5(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.j(a[y]))
return z.join(b)},
fw:function(a){return this.u(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bd:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gbR:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.fK())},
ay:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.co(a,"[","]")},
gO:function(a){return new J.ap(a,a.length,0,[H.y(a,0)])},
gM:function(a){return H.bi(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bQ(b,"newLength",null))
if(b<0)throw H.d(P.a8(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.V(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b>=a.length||b<0)throw H.d(H.aI(a,b))
a[b]=c},
$isi:1,
$isc:1,
n:{
fL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a8(a,0,4294967295,"length",null))
return J.dt(new Array(a),b)},
dt:function(a,b){return J.bc(H.b(a,[b]))},
bc:function(a){H.bB(a)
a.fixed$length=Array
return a}}},
ld:{"^":"aP;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.w(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"n;",
gfv:function(a){return a===0?1/a<0:a<0},
h7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ab(""+a+".toInt()"))},
bP:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ab(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ab(""+a+".round()"))},
de:function(a,b){var z
if(b>20)throw H.d(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfv(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
dk:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dt:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ab("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aT:function(a,b){var z
if(a>0)z=this.eJ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eJ:function(a,b){return b>31?0:a>>>b},
ad:function(a,b){if(typeof b!=="number")throw H.d(H.aH(b))
return a<b},
$ist:1,
$isT:1},
dv:{"^":"bZ;",$isC:1},
du:{"^":"bZ;"},
cq:{"^":"n;",
bG:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b<0)throw H.d(H.aI(a,b))
if(b>=a.length)H.p(H.aI(a,b))
return a.charCodeAt(b)},
aO:function(a,b){if(b>=a.length)throw H.d(H.aI(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.O(b)
if(typeof b!=="string")throw H.d(P.bQ(b,null,null))
return a+b},
be:function(a,b,c){H.V(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.c1(b,null,null))
if(b>c)throw H.d(P.c1(b,null,null))
if(c>a.length)throw H.d(P.c1(c,null,null))
return a.substring(b,c)},
c7:function(a,b){return this.be(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fL:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
X:function(a,b){return this.fL(a,b," ")},
fe:function(a,b,c){if(c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
return H.f2(a,b,c)},
i:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdI:1,
$ism:1}}],["","",,H,{"^":"",
fK:function(){return new P.hY("No element")},
W:{"^":"iw;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bG(this.a,b)},
$asep:function(){return[P.C]},
$asq:function(){return[P.C]},
$asi:function(){return[P.C]},
$asc:function(){return[P.C]}},
fw:{"^":"i;"},
dA:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bO(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b5(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
h3:{"^":"i;a,b,$ti",
gO:function(a){return new H.h4(J.bC(this.a),this.b,this.$ti)},
gk:function(a){return J.b3(this.a)},
v:function(a,b){return this.b.$1(J.d3(this.a,b))},
$asi:function(a,b){return[b]}},
h4:{"^":"cp;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascp:function(a,b){return[b]}},
iN:{"^":"i;a,b,$ti",
gO:function(a){return new H.iO(J.bC(this.a),this.b,this.$ti)}},
iO:{"^":"cp;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
bW:{"^":"a;$ti"},
ep:{"^":"a;$ti"},
iw:{"^":"c_+ep;"}}],["","",,H,{"^":"",
ku:function(a){return init.types[H.V(a)]},
kC:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.d(H.aH(a))
return z},
bi:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.I(a).$iscJ){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aO(w,0)===36)w=C.h.c7(w,1)
r=H.cY(H.bB(H.aJ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dM:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hz:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aT(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aH(w))}return H.dM(z)},
dN:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aH(x))
if(x<0)throw H.d(H.aH(x))
if(x>65535)return H.hz(a)}return H.dM(a)},
hy:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aT(z,10))>>>0,56320|z&1023)}throw H.d(P.a8(a,0,1114111,null,null))},
a4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hx:function(a){return a.b?H.a4(a).getUTCFullYear()+0:H.a4(a).getFullYear()+0},
hv:function(a){return a.b?H.a4(a).getUTCMonth()+1:H.a4(a).getMonth()+1},
hr:function(a){return a.b?H.a4(a).getUTCDate()+0:H.a4(a).getDate()+0},
hs:function(a){return a.b?H.a4(a).getUTCHours()+0:H.a4(a).getHours()+0},
hu:function(a){return a.b?H.a4(a).getUTCMinutes()+0:H.a4(a).getMinutes()+0},
hw:function(a){return a.b?H.a4(a).getUTCSeconds()+0:H.a4(a).getSeconds()+0},
ht:function(a){return a.b?H.a4(a).getUTCMilliseconds()+0:H.a4(a).getMilliseconds()+0},
z:function(a){throw H.d(H.aH(a))},
e:function(a,b){if(a==null)J.b3(a)
throw H.d(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.V(J.b3(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c1(b,"index",null)},
kq:function(a,b,c){if(a>c)return new P.c0(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end","Invalid value")
return new P.ao(!0,b,"end",null)},
aH:function(a){return new P.ao(!0,a,null,null)},
kl:function(a){if(typeof a!=="number")throw H.d(H.aH(a))
return a},
d:function(a){var z
if(a==null)a=new P.dH()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f4})
z.name=""}else z.toString=H.f4
return z},
f4:function(){return J.a1(this.dartException)},
p:function(a){throw H.d(a)},
w:function(a){throw H.d(P.b5(a))},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aT(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ct(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dG(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e7()
u=$.$get$e8()
t=$.$get$e9()
s=$.$get$ea()
r=$.$get$ee()
q=$.$get$ef()
p=$.$get$ec()
$.$get$eb()
o=$.$get$eh()
n=$.$get$eg()
m=v.W(y)
if(m!=null)return z.$1(H.ct(H.O(y),m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.ct(H.O(y),m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dG(H.O(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dV()
return a},
b1:function(a){var z
if(a==null)return new H.eF(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eF(a)},
ks:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kB:function(a,b,c,d,e,f){H.l(a,"$iscl")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kB)
a.$identity=z
return z},
fl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.hC(z).r}else x=d
w=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.cf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aj
if(typeof u!=="number")return u.A()
$.aj=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dd(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ku,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d7:H.cg
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dd(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fi:function(a,b,c,d){var z=H.cg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dd:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fk(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fi(y,!w,z,b)
if(y===0){w=$.aj
if(typeof w!=="number")return w.A()
$.aj=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b4
if(v==null){v=H.bR("self")
$.b4=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aj
if(typeof w!=="number")return w.A()
$.aj=w+1
t+=w
w="return function("+t+"){return this."
v=$.b4
if(v==null){v=H.bR("self")
$.b4=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fj:function(a,b,c,d){var z,y
z=H.cg
y=H.d7
switch(b?-1:a){case 0:throw H.d(H.hL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fk:function(a,b){var z,y,x,w,v,u,t,s
z=$.b4
if(z==null){z=H.bR("self")
$.b4=z}y=$.d6
if(y==null){y=H.bR("receiver")
$.d6=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fj(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aj
if(typeof y!=="number")return y.A()
$.aj=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aj
if(typeof y!=="number")return y.A()
$.aj=y+1
return new Function(z+y+"}")()},
cT:function(a,b,c,d,e,f,g){var z,y
z=J.bc(H.bB(b))
H.V(c)
y=!!J.I(d).$isc?J.bc(d):d
return H.fl(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.am(a,"String"))},
kH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.am(a,"num"))},
eT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.am(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.am(a,"int"))},
f0:function(a,b){throw H.d(H.am(a,H.O(b).substring(3)))},
kJ:function(a,b){var z=J.bO(b)
throw H.d(H.fg(a,z.be(b,3,z.gk(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f0(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kJ(a,b)},
bB:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.d(H.am(a,"List"))},
kD:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.f0(a,b)},
eU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
bN:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eU(J.I(a))
if(z==null)return!1
y=H.eX(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.cP)return a
$.cP=!0
try{if(H.bN(a,b))return a
z=H.bP(b)
y=H.am(a,z)
throw H.d(y)}finally{$.cP=!1}},
cV:function(a,b){if(a!=null&&!H.cS(a,b))H.p(H.am(a,H.bP(b)))
return a},
eO:function(a){var z
if(a instanceof H.r){z=H.eU(J.I(a))
if(z!=null)return H.bP(z)
return"Closure"}return H.aS(a)},
kO:function(a){throw H.d(new P.fp(H.O(a)))},
eV:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aJ:function(a){if(a==null)return
return a.$ti},
m2:function(a,b,c){return H.b2(a["$as"+H.j(c)],H.aJ(b))},
bA:function(a,b,c,d){var z
H.O(c)
H.V(d)
z=H.b2(a["$as"+H.j(c)],H.aJ(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.O(b)
H.V(c)
z=H.b2(a["$as"+H.j(b)],H.aJ(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.V(b)
z=H.aJ(a)
return z==null?null:z[b]},
bP:function(a){var z=H.aK(a,null)
return z},
aK:function(a,b){var z,y
H.x(b,"$isc",[P.m],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cY(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.j(b[y])}if('func' in a)return H.kb(a,b)
if('futureOr' in a)return"FutureOr<"+H.aK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.x(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.h.A(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aK(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aK(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aK(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aK(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cY:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isc",[P.m],"$asc")
if(a==null)return""
z=new P.bK("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aK(u,c)}v="<"+z.i(0)+">"
return v},
b2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bz:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aJ(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eR(H.b2(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.O(b)
H.bB(c)
H.O(d)
if(a==null)return a
z=H.bz(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cY(c,0,null)
throw H.d(H.am(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eR:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
m0:function(a,b,c){return a.apply(b,H.b2(J.I(b)["$as"+H.j(c)],H.aJ(b)))},
eY:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.eY(z)}return!1},
cS:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.eY(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}y=J.I(a).constructor
x=H.aJ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cS(a,b))throw H.d(H.am(a,H.bP(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.eX(a,b,c,d)
if('func' in a)return c.builtin$cls==="cl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"b9" in y.prototype))return!1
w=y.prototype["$as"+"b9"]
v=H.b2(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bP(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eR(H.b2(r,z),b,u,d)},
eX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ae(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ae(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ae(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ae(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kG(m,b,l,d)},
kG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
m1:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
kE:function(a){var z,y,x,w,v,u
z=H.O($.eW.$1(a))
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cb[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.eQ.$2(a,z))
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cb[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cc(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cb[z]=x
return x}if(v==="-"){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f_(a,x)
if(v==="*")throw H.d(P.eo(z))
if(init.leafTags[z]===true){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f_(a,x)},
f_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cc:function(a){return J.d_(a,!1,null,!!a.$isA)},
kF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cc(z)
else return J.d_(z,c,null,null)},
kz:function(){if(!0===$.cX)return
$.cX=!0
H.kA()},
kA:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.cb=Object.create(null)
H.kv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f1.$1(v)
if(u!=null){t=H.kF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kv:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.aZ(C.A,H.aZ(C.F,H.aZ(C.n,H.aZ(C.n,H.aZ(C.E,H.aZ(C.B,H.aZ(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eW=new H.kw(v)
$.eQ=new H.kx(u)
$.f1=new H.ky(t)},
aZ:function(a,b){return a(b)||b},
f2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hB:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hC:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bc(z)
y=z[0]
x=z[1]
return new H.hB(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
W:function(a){var z,y,x
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
al:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ed:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hm:{"^":"U;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dG:function(a,b){return new H.hm(a,b==null?null:b.method)}}},
fP:{"^":"U;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
ct:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fP(a,y,z?null:b.receiver)}}},
iv:{"^":"U;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kP:{"^":"r:17;a",
$1:function(a){if(!!J.I(a).$isU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eF:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isai:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gdh:function(){return this},
$iscl:1,
gdh:function(){return this}},
e_:{"^":"r;"},
hZ:{"^":"e_;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cf:{"^":"e_;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gM:function(a){var z,y
z=this.c
if(z==null)y=H.bi(this.a)
else y=typeof z!=="object"?J.aM(z):H.bi(z)
return(y^H.bi(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
n:{
cg:function(a){return a.a},
d7:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cf("self","target","receiver","name")
y=J.bc(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"U;a",
i:function(a){return this.a},
n:{
am:function(a,b){return new H.ii("TypeError: "+H.j(P.bV(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
ff:{"^":"U;a",
i:function(a){return this.a},
n:{
fg:function(a,b){return new H.ff("CastError: "+H.j(P.bV(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
hK:{"^":"U;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hL:function(a){return new H.hK(a)}}},
aQ:{"^":"h1;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gac:function(a){return new H.dz(this,[H.y(this,0)])},
cE:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cl(y,b)}else return this.ft(b)},
ft:function(a){var z=this.d
if(z==null)return!1
return this.bQ(this.bk(z,J.aM(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aQ(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aQ(w,b)
x=y==null?null:y.b
return x}else return this.fu(b)},
fu:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bk(z,J.aM(a)&0x3ffffff)
x=this.bQ(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bn()
this.b=z}this.cd(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bn()
this.c=y}this.cd(y,b,c)}else{x=this.d
if(x==null){x=this.bn()
this.d=x}w=J.aM(b)&0x3ffffff
v=this.bk(x,w)
if(v==null)this.bu(x,w,[this.bo(b,c)])
else{u=this.bQ(v,b)
if(u>=0)v[u].b=c
else v.push(this.bo(b,c))}}},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b5(this))
z=z.c}},
cd:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.aQ(a,b)
if(z==null)this.bu(a,b,this.bo(b,c))
else z.b=c},
e_:function(){this.r=this.r+1&67108863},
bo:function(a,b){var z,y
z=new H.fU(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e_()
return z},
bQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dB(this)},
aQ:function(a,b){return a[b]},
bk:function(a,b){return a[b]},
bu:function(a,b,c){a[b]=c},
dT:function(a,b){delete a[b]},
cl:function(a,b){return this.aQ(a,b)!=null},
bn:function(){var z=Object.create(null)
this.bu(z,"<non-identifier-key>",z)
this.dT(z,"<non-identifier-key>")
return z},
$isdy:1},
fU:{"^":"a;a,b,0c,0d"},
dz:{"^":"fw;a,$ti",
gk:function(a){return this.a.a},
gO:function(a){var z,y
z=this.a
y=new H.fV(z,z.r,this.$ti)
y.c=z.e
return y}},
fV:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b5(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kw:{"^":"r:17;a",
$1:function(a){return this.a(a)}},
kx:{"^":"r:34;a",
$2:function(a,b){return this.a(a,b)}},
ky:{"^":"r:32;a",
$1:function(a){return this.a(H.O(a))}},
fN:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdI:1,
n:{
fO:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fG("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kr:function(a){return J.dt(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bv:function(a){return a},
aG:function(a,b,c){H.bB(b)
if(a>>>0!==a||a>=c)throw H.d(H.aI(b,a))},
ka:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.kq(a,b,c))
return b},
hi:{"^":"n;",$islM:1,"%":"DataView;ArrayBufferView;cy|ez|eA|hh|eB|eC|aF"},
cy:{"^":"hi;",
gk:function(a){return a.length},
$isA:1,
$asA:I.cU},
hh:{"^":"eA;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
$asbW:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aF:{"^":"eC;",
$asbW:function(){return[P.C]},
$asq:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
lm:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ln:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lo:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lp:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lq:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lr:{"^":"aF;",
gk:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hj:{"^":"aF;",
gk:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
bd:function(a,b,c){return new Uint8Array(a.subarray(b,H.ka(b,c,a.length)))},
"%":";Uint8Array"},
ez:{"^":"cy+q;"},
eA:{"^":"ez+bW;"},
eB:{"^":"cy+q;"},
eC:{"^":"eB+bW;"}}],["","",,P,{"^":"",
iQ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ki()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b_(new P.iS(z),1)).observe(y,{childList:true})
return new P.iR(z,y,x)}else if(self.setImmediate!=null)return P.kj()
return P.kk()},
lQ:[function(a){self.scheduleImmediate(H.b_(new P.iT(H.f(a,{func:1,ret:-1})),0))},"$1","ki",4,0,8],
lR:[function(a){self.setImmediate(H.b_(new P.iU(H.f(a,{func:1,ret:-1})),0))},"$1","kj",4,0,8],
lS:[function(a){P.cF(C.l,H.f(a,{func:1,ret:-1}))},"$1","kk",4,0,8],
cF:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.f.T(a.a,1000)
return P.jP(z<0?0:z,b)},
e3:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aT]})
z=C.f.T(a.a,1000)
return P.jQ(z<0?0:z,b)},
ke:function(a,b){if(H.bN(a,{func:1,args:[P.a,P.ai]}))return b.fU(a,null,P.a,P.ai)
if(H.bN(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kd:function(){var z,y
for(;z=$.aY,z!=null;){$.bx=null
y=z.b
$.aY=y
if(y==null)$.bw=null
z.a.$0()}},
m_:[function(){$.cQ=!0
try{P.kd()}finally{$.bx=null
$.cQ=!1
if($.aY!=null)$.$get$cM().$1(P.eS())}},"$0","eS",0,0,2],
eN:function(a){var z=new P.eu(H.f(a,{func:1,ret:-1}))
if($.aY==null){$.bw=z
$.aY=z
if(!$.cQ)$.$get$cM().$1(P.eS())}else{$.bw.b=z
$.bw=z}},
kh:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eN(a)
$.bx=$.bw
return}y=new P.eu(a)
x=$.bx
if(x==null){y.b=z
$.bx=y
$.aY=y}else{y.b=x.b
x.b=y
$.bx=y
if(y.b==null)$.bw=y}},
kK:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.L
if(C.j===y){P.c7(null,null,C.j,a)
return}y.toString
P.c7(null,null,y,H.f(y.bA(a),z))},
e2:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.L
if(y===C.j){y.toString
return P.cF(a,b)}return P.cF(a,H.f(y.bA(b),z))},
ic:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aT]}
H.f(b,z)
y=$.L
if(y===C.j){y.toString
return P.e3(a,b)}x=y.cB(b,P.aT)
$.L.toString
return P.e3(a,H.f(x,z))},
c6:function(a,b,c,d,e){var z={}
z.a=d
P.kh(new P.kf(z,e))},
eL:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eM:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
kg:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
c7:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bA(d):c.fa(d,-1)
P.eN(d)},
iS:{"^":"r:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iR:{"^":"r:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iT:{"^":"r:1;a",
$0:function(){this.a.$0()}},
iU:{"^":"r:1;a",
$0:function(){this.a.$0()}},
eI:{"^":"a;a,0b,c",
dG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b_(new P.jS(this,b),0),a)
else throw H.d(P.ab("`setTimeout()` not found."))},
dH:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b_(new P.jR(this,a,Date.now(),b),0),a)
else throw H.d(P.ab("Periodic timer."))},
$isaT:1,
n:{
jP:function(a,b){var z=new P.eI(!0,0)
z.dG(a,b)
return z},
jQ:function(a,b){var z=new P.eI(!1,0)
z.dH(a,b)
return z}}},
jS:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jR:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dt(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
fD:function(a){if(this.c!==6)return!0
return this.b.b.c_(H.f(this.d,{func:1,ret:P.ad,args:[P.a]}),a.a,P.ad,P.a)},
fs:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.a,P.ai]}))return H.cV(w.h0(z,a.a,a.b,null,y,P.ai),x)
else return H.cV(w.c_(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aA:{"^":"a;cu:a<,b,0ey:c<,$ti",
dd:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ke(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aA(0,$.L,[c])
w=b==null?1:3
this.ce(new P.aX(x,w,a,b,[z,c]))
return x},
h6:function(a,b){return this.dd(a,null,b)},
ce:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaA")
z=y.a
if(z<4){y.ce(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c7(null,null,z,H.f(new P.j7(this,a),{func:1,ret:-1}))}},
cq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaA")
y=u.a
if(y<4){u.cq(a)
return}this.a=y
this.c=u.c}z.a=this.aS(a)
y=this.b
y.toString
P.c7(null,null,y,H.f(new P.jc(z,this),{func:1,ret:-1}))}},
bq:function(){var z=H.l(this.c,"$isaX")
this.c=null
return this.aS(z)},
aS:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ci:function(a){var z,y,x,w
z=H.y(this,0)
H.cV(a,{futureOr:1,type:z})
y=this.$ti
x=H.bz(a,"$isb9",y,"$asb9")
if(x){z=H.bz(a,"$isaA",y,null)
if(z)P.ew(a,this)
else P.j8(a,this)}else{w=this.bq()
H.B(a,z)
this.a=4
this.c=a
P.bt(this,w)}},
bh:[function(a,b){var z
H.l(b,"$isai")
z=this.bq()
this.a=8
this.c=new P.a7(a,b)
P.bt(this,z)},function(a){return this.bh(a,null)},"hg","$2","$1","gdP",4,2,30],
$isb9:1,
n:{
j8:function(a,b){var z,y,x
b.a=1
try{a.dd(new P.j9(b),new P.ja(b),null)}catch(x){z=H.aL(x)
y=H.b1(x)
P.kK(new P.jb(b,z,y))}},
ew:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaA")
if(z>=4){y=b.bq()
b.a=a.a
b.c=a.c
P.bt(b,y)}else{y=H.l(b.c,"$isaX")
b.a=2
b.c=a
a.cq(y)}},
bt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.c6(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bt(z.a,b)}y=z.a
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
if(p){H.l(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.c6(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jf(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.je(x,b,r).$0()}else if((y&2)!==0)new P.jd(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.I(y).$isb9){if(y.a>=4){n=H.l(t.c,"$isaX")
t.c=null
b=t.aS(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ew(y,t)
return}}m=b.b
n=H.l(m.c,"$isaX")
m.c=null
b=m.aS(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
j7:{"^":"r:1;a,b",
$0:function(){P.bt(this.a,this.b)}},
jc:{"^":"r:1;a,b",
$0:function(){P.bt(this.b,this.a.a)}},
j9:{"^":"r:11;a",
$1:function(a){var z=this.a
z.a=0
z.ci(a)}},
ja:{"^":"r:28;a",
$2:function(a,b){this.a.bh(a,H.l(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
jb:{"^":"r:1;a,b,c",
$0:function(){this.a.bh(this.b,this.c)}},
jf:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.da(H.f(w.d,{func:1}),null)}catch(v){y=H.aL(v)
x=H.b1(v)
if(this.d){w=H.l(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.I(z).$isb9){if(z instanceof P.aA&&z.gcu()>=4){if(z.gcu()===8){w=this.b
w.b=H.l(z.gey(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h6(new P.jg(t),null)
w.a=!1}}},
jg:{"^":"r:27;a",
$1:function(a){return this.a}},
je:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.c_(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aL(t)
y=H.b1(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
jd:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa7")
w=this.c
if(w.fD(z)&&w.e!=null){v=this.b
v.b=w.fs(z)
v.a=!1}}catch(u){y=H.aL(u)
x=H.b1(u)
w=H.l(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
eu:{"^":"a;a,0b"},
cB:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aA(0,$.L,[P.C])
z.a=0
this.fB(new P.i1(z,this),!0,new P.i2(z,y),y.gdP())
return y}},
i1:{"^":"r;a,b",
$1:function(a){H.B(a,H.aC(this.b,"cB",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aC(this.b,"cB",0)]}}},
i2:{"^":"r:1;a,b",
$0:function(){this.b.ci(this.a.a)}},
dX:{"^":"a;$ti"},
i0:{"^":"a;"},
aT:{"^":"a;"},
a7:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isU:1},
jZ:{"^":"a;",$islP:1},
kf:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dH()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jB:{"^":"jZ;",
h1:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.L){a.$0()
return}P.eL(null,null,this,a,-1)}catch(x){z=H.aL(x)
y=H.b1(x)
P.c6(null,null,this,z,H.l(y,"$isai"))}},
h2:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.L){a.$1(b)
return}P.eM(null,null,this,a,b,-1,c)}catch(x){z=H.aL(x)
y=H.b1(x)
P.c6(null,null,this,z,H.l(y,"$isai"))}},
fa:function(a,b){return new P.jD(this,H.f(a,{func:1,ret:b}),b)},
bA:function(a){return new P.jC(this,H.f(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.jE(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
da:function(a,b){H.f(a,{func:1,ret:b})
if($.L===C.j)return a.$0()
return P.eL(null,null,this,a,b)},
c_:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.L===C.j)return a.$1(b)
return P.eM(null,null,this,a,b,c,d)},
h0:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.L===C.j)return a.$2(b,c)
return P.kg(null,null,this,a,b,c,d,e,f)},
fU:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
jD:{"^":"r;a,b,c",
$0:function(){return this.a.da(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jC:{"^":"r:2;a,b",
$0:function(){return this.a.h1(this.b)}},
jE:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.h2(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fX:function(a,b,c){H.bB(a)
return H.x(H.ks(a,new H.aQ(0,0,[b,c])),"$isdy",[b,c],"$asdy")},
fW:function(a,b){return new H.aQ(0,0,[a,b])},
fY:function(a,b,c,d){return new P.jn(0,0,[d])},
fJ:function(a,b,c){var z,y
if(P.cR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$by()
C.a.h(y,a)
try{P.kc(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.dY(b,H.kD(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cR(a))return b+"..."+c
z=new P.bK(b)
y=$.$get$by()
C.a.h(y,a)
try{x=z
x.a=P.dY(x.gah(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gah()+c
y=z.gah()
return y.charCodeAt(0)==0?y:y},
cR:function(a){var z,y
for(z=0;y=$.$get$by(),z<y.length;++z)if(a===y[z])return!0
return!1},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gO(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.j(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.w();t=s,s=r){r=z.gI(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dB:function(a){var z,y,x
z={}
if(P.cR(a))return"{...}"
y=new P.bK("")
try{C.a.h($.$get$by(),a)
x=y
x.a=x.gah()+"{"
z.a=!0
J.f8(a,new P.h2(z,y))
z=y
z.a=z.gah()+"}"}finally{z=$.$get$by()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gah()
return z.charCodeAt(0)==0?z:z},
jn:{"^":"jh;a,0b,0c,0d,0e,0f,r,$ti",
gO:function(a){return P.ey(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cO()
this.b=z}return this.cf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cO()
this.c=y}return this.cf(y,b)}else return this.dI(0,b)},
dI:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cO()
this.d=z}y=this.cj(b)
x=z[y]
if(x==null)z[y]=[this.bg(b)]
else{if(this.co(x,b)>=0)return!1
x.push(this.bg(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cr(this.c,b)
else return this.eq(0,b)},
eq:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dX(z,b)
x=this.co(y,b)
if(x<0)return!1
this.cw(y.splice(x,1)[0])
return!0},
cf:function(a,b){H.B(b,H.y(this,0))
if(H.l(a[b],"$iscN")!=null)return!1
a[b]=this.bg(b)
return!0},
cr:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscN")
if(z==null)return!1
this.cw(z)
delete a[b]
return!0},
cg:function(){this.r=this.r+1&67108863},
bg:function(a){var z,y
z=new P.cN(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cg()
return z},
cw:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cg()},
cj:function(a){return J.aM(a)&0x3ffffff},
dX:function(a,b){return a[this.cj(b)]},
co:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
n:{
cO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cN:{"^":"a;a,0b,0c"},
jo:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b5(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
n:{
ey:function(a,b,c){var z=new P.jo(a,b,[c])
z.c=a.e
return z}}},
jh:{"^":"hM;"},
c_:{"^":"jp;",$isi:1,$isc:1},
q:{"^":"a;$ti",
gO:function(a){return new H.dA(a,this.gk(a),0,[H.bA(this,a,"q",0)])},
v:function(a,b){return this.j(a,b)},
h9:function(a,b){var z,y,x
z=H.b([],[H.bA(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.z(x)
if(!(y<x))break
C.a.R(z,y,this.j(a,y));++y}return z},
h8:function(a){return this.h9(a,!0)},
i:function(a){return P.co(a,"[","]")}},
h1:{"^":"a6;"},
h2:{"^":"r:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a6:{"^":"a;$ti",
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bA(this,a,"a6",0),H.bA(this,a,"a6",1)]})
for(z=J.bC(this.gac(a));z.w();){y=z.gI(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b3(this.gac(a))},
i:function(a){return P.dB(a)},
$isa_:1},
hO:{"^":"a;$ti",
i:function(a){return P.co(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d4("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.ey(this,this.r,H.y(this,0)),y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$isi:1},
hM:{"^":"hO;"},
jp:{"^":"a+q;"}}],["","",,P,{"^":"",cj:{"^":"a;$ti"},dg:{"^":"i0;$ti"},fy:{"^":"cj;",
$ascj:function(){return[P.m,[P.c,P.C]]}},iz:{"^":"fy;a"},iA:{"^":"dg;",
fg:function(a,b,c){var z,y,x,w
z=a.length
P.dO(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jY(0,0,x)
if(w.dV(a,b,z)!==z)w.cz(C.h.bG(a,z-1),0)
return C.I.bd(x,0,w.b)},
ff:function(a){return this.fg(a,0,null)},
$asdg:function(){return[P.m,[P.c,P.C]]}},jY:{"^":"a;a,b,c",
cz:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
dV:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bG(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aO(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cz(w,C.h.aO(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fA:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aS(a)+"'"},
fZ:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fL(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.x(z,"$isc",[d],"$asc")},
h_:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gO(a);x.w();)C.a.h(y,H.B(x.gI(x),c))
if(b)return y
return H.x(J.bc(y),"$isc",z,"$asc")},
cC:function(a,b,c){var z,y
z=P.C
H.x(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.x(a,"$isaP",[z],"$asaP")
y=a.length
c=P.dO(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ad()
z=c<y}else z=!0
return H.dN(z?C.a.bd(a,b,c):a)}return P.i3(a,b,c)},
i3:function(a,b,c){var z,y,x
H.x(a,"$isi",[P.C],"$asi")
z=J.bC(a)
for(y=0;y<b;++y)if(!z.w())throw H.d(P.a8(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gI(z))
return H.dN(x)},
hD:function(a,b,c){return new H.fN(a,H.fO(a,!1,!0,!1))},
jX:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$isc",[P.C],"$asc")
if(c===C.q){z=$.$get$eK().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.ff(H.B(b,H.aC(c,"cj",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hy(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fA(a)},
o:function(a){return new P.ev(a)},
d1:function(a){H.kI(a)},
ad:{"^":"a;"},
"+bool":0,
aD:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a&&this.b===b.b},
gM:function(a){var z=this.a
return(z^C.f.aT(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fq(H.hx(this))
y=P.bD(H.hv(this))
x=P.bD(H.hr(this))
w=P.bD(H.hs(this))
v=P.bD(H.hu(this))
u=P.bD(H.hw(this))
t=P.fr(H.ht(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
b7:{"^":"a;a",
ad:function(a,b){return C.f.ad(this.a,H.l(b,"$isb7").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fv()
y=this.a
if(y<0)return"-"+new P.b7(0-y).i(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.fu().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dq:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fu:{"^":"r:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fv:{"^":"r:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
U:{"^":"a;"},
dH:{"^":"U;",
i:function(a){return"Throw of null."}},
ao:{"^":"U;a,b,c,d",
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbj()+y+x
if(!this.a)return w
v=this.gbi()
u=P.bV(this.b)
return w+v+": "+H.j(u)},
n:{
fa:function(a){return new P.ao(!1,null,null,a)},
bQ:function(a,b,c){return new P.ao(!0,a,b,c)},
d4:function(a){return new P.ao(!1,null,a,"Must not be null")}}},
c0:{"^":"ao;e,f,a,b,c,d",
gbj:function(){return"RangeError"},
gbi:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c1:function(a,b,c){return new P.c0(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
dO:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.d(P.a8(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.d(P.a8(b,a,c,"end",f))
return b}return c}}},
fI:{"^":"ao;e,k:f>,a,b,c,d",
gbj:function(){return"RangeError"},
gbi:function(){if(J.f5(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
K:function(a,b,c,d,e){var z=H.V(e!=null?e:J.b3(b))
return new P.fI(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"U;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ab:function(a){return new P.ix(a)}}},
iu:{"^":"U;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eo:function(a){return new P.iu(a)}}},
hY:{"^":"U;a",
i:function(a){return"Bad state: "+this.a}},
fm:{"^":"U;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bV(z))+"."},
n:{
b5:function(a){return new P.fm(a)}}},
hn:{"^":"a;",
i:function(a){return"Out of Memory"},
$isU:1},
dV:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isU:1},
fp:{"^":"U;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ev:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fG:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.be(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"T;"},
"+int":0,
i:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gO(this)
for(y=0;z.w();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d4("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gO(this),y=0;z.w();){x=z.gI(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fJ(this,"(",")")}},
cp:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
a_:{"^":"a;$ti"},
G:{"^":"a;",
gM:function(a){return P.a.prototype.gM.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gM:function(a){return H.bi(this)},
i:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
m:{"^":"a;",$isdI:1},
"+String":0,
bK:{"^":"a;ah:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
dY:function(a,b,c){var z=J.bC(b)
if(!z.w())return a
if(c.length===0){do a+=H.j(z.gI(z))
while(z.w())}else{a+=H.j(z.gI(z))
for(;z.w();)a=a+c+H.j(z.gI(z))}return a}}}}],["","",,W,{"^":"",
ci:function(a,b){var z=document.createElement("canvas")
return z},
fx:function(a){H.l(a,"$isa3")
return"wheel"},
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ex:function(a,b,c,d){var z,y
z=W.c3(W.c3(W.c3(W.c3(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eP:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.j)return a
return z.cB(a,b)},
bb:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kQ:{"^":"n;0k:length=","%":"AccessibleNodeList"},
kR:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kS:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fe:{"^":"n;","%":";Blob"},
ch:{"^":"bb;",
bb:function(a,b,c){if(c!=null)return a.getContext(b,P.km(c,null))
return a.getContext(b)},
di:function(a,b){return this.bb(a,b,null)},
$isch:1,
"%":"HTMLCanvasElement"},
dc:{"^":"n;",$isdc:1,"%":"CanvasRenderingContext2D"},
kY:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l_:{"^":"fo;0k:length=","%":"CSSPerspective"},
b6:{"^":"n;",$isb6:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l0:{"^":"iY;0k:length=",
dj:function(a,b){var z=a.getPropertyValue(this.dM(a,b))
return z==null?"":z},
dM:function(a,b){var z,y
z=$.$get$dh()
y=z[b]
if(typeof y==="string")return y
y=this.eK(a,b)
z[b]=y
return y},
eK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fs()+b
if(z in a)return z
return b},
gbB:function(a){return a.bottom},
ga3:function(a){return a.height},
gat:function(a){return a.left},
gaH:function(a){return a.right},
gaK:function(a){return a.top},
ga5:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fn:{"^":"a;",
gat:function(a){return this.dj(a,"left")}},
di:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fo:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l1:{"^":"di;0k:length=","%":"CSSTransformValue"},
l2:{"^":"di;0k:length=","%":"CSSUnparsedValue"},
l3:{"^":"n;0k:length=","%":"DataTransferItemList"},
l4:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
l5:{"^":"j_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a5,P.T]]},
$asq:function(){return[[P.a5,P.T]]},
$isi:1,
$asi:function(){return[[P.a5,P.T]]},
$isc:1,
$asc:function(){return[[P.a5,P.T]]},
$asv:function(){return[[P.a5,P.T]]},
"%":"ClientRectList|DOMRectList"},
ft:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.ga5(a))+" x "+H.j(this.ga3(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.c9(b)
return a.left===z.gat(b)&&a.top===z.gaK(b)&&this.ga5(a)===z.ga5(b)&&this.ga3(a)===z.ga3(b)},
gM:function(a){return W.ex(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga5(a)&0x1FFFFFFF,this.ga3(a)&0x1FFFFFFF)},
gbB:function(a){return a.bottom},
ga3:function(a){return a.height},
gat:function(a){return a.left},
gaH:function(a){return a.right},
gaK:function(a){return a.top},
ga5:function(a){return a.width},
$isa5:1,
$asa5:function(){return[P.T]},
"%":";DOMRectReadOnly"},
l6:{"^":"j1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.m]},
$asq:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asv:function(){return[P.m]},
"%":"DOMStringList"},
l7:{"^":"n;0k:length=","%":"DOMTokenList"},
iX:{"^":"c_;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.l(z[b],"$isX")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var z=this.h8(this)
return new J.ap(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asc:function(){return[W.X]}},
X:{"^":"J;",
gcC:function(a){return new W.iX(a,a.children)},
gcD:function(a){return P.hA(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a2:{"^":"n;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"n;",
cA:["dn",function(a,b,c,d){H.f(c,{func:1,args:[W.a2]})
if(c!=null)this.dJ(a,b,c,!1)}],
dJ:function(a,b,c,d){return a.addEventListener(b,H.b_(H.f(c,{func:1,args:[W.a2]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eD|eE|eG|eH"},
b8:{"^":"fe;",$isb8:1,"%":"File"},
l8:{"^":"j6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$asq:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asv:function(){return[W.b8]},
"%":"FileList"},
l9:{"^":"a3;0k:length=","%":"FileWriter"},
la:{"^":"bb;0k:length=","%":"HTMLFormElement"},
ba:{"^":"n;",$isba:1,"%":"Gamepad"},
lb:{"^":"n;0k:length=","%":"History"},
lc:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bX:{"^":"n;0cF:data=",$isbX:1,"%":"ImageData"},
ds:{"^":"bb;",$isds:1,"%":"HTMLImageElement"},
bd:{"^":"cG;",$isbd:1,"%":"KeyboardEvent"},
lg:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lh:{"^":"n;0k:length=","%":"MediaList"},
li:{"^":"a3;",
cA:function(a,b,c,d){H.f(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.dn(a,b,c,!1)},
"%":"MessagePort"},
lj:{"^":"jq;",
j:function(a,b){return P.aB(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gac:function(a){var z=H.b([],[P.m])
this.H(a,new W.he(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"MIDIInputMap"},
he:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lk:{"^":"jr;",
j:function(a,b){return P.aB(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gac:function(a){var z=H.b([],[P.m])
this.H(a,new W.hf(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hf:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"n;",$isbe:1,"%":"MimeType"},
ll:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.be]},
$asq:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asv:function(){return[W.be]},
"%":"MimeTypeArray"},
ah:{"^":"cG;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iW:{"^":"c_;a",
gO:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,[H.bA(C.J,z,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asq:function(){return[W.J]},
$asi:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.dq(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hk:{"^":"jv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bh:{"^":"n;0k:length=",$isbh:1,"%":"Plugin"},
lu:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asv:function(){return[W.bh]},
"%":"PluginArray"},
lw:{"^":"jF;",
j:function(a,b){return P.aB(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gac:function(a){var z=H.b([],[P.m])
this.H(a,new W.hJ(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hJ:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ly:{"^":"bb;0k:length=","%":"HTMLSelectElement"},
bj:{"^":"a3;",$isbj:1,"%":"SourceBuffer"},
lz:{"^":"eE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asv:function(){return[W.bj]},
"%":"SourceBufferList"},
bk:{"^":"n;",$isbk:1,"%":"SpeechGrammar"},
lA:{"^":"jH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asv:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"n;0k:length=",$isbl:1,"%":"SpeechRecognitionResult"},
lC:{"^":"jK;",
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gac:function(a){var z=H.b([],[P.m])
this.H(a,new W.i_(z))
return z},
gk:function(a){return a.length},
$asa6:function(){return[P.m,P.m]},
$isa_:1,
$asa_:function(){return[P.m,P.m]},
"%":"Storage"},
i_:{"^":"r:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"n;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
bn:{"^":"a3;",$isbn:1,"%":"TextTrack"},
bo:{"^":"a3;",$isbo:1,"%":"TextTrackCue|VTTCue"},
lG:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asv:function(){return[W.bo]},
"%":"TextTrackCueList"},
lH:{"^":"eH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asv:function(){return[W.bn]},
"%":"TextTrackList"},
lI:{"^":"n;0k:length=","%":"TimeRanges"},
bp:{"^":"n;",$isbp:1,"%":"Touch"},
aU:{"^":"cG;",$isaU:1,"%":"TouchEvent"},
lJ:{"^":"jU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asv:function(){return[W.bp]},
"%":"TouchList"},
lK:{"^":"n;0k:length=","%":"TrackDefaultList"},
cG:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lN:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
lO:{"^":"a3;0k:length=","%":"VideoTrackList"},
bs:{"^":"ah;",
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ab("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ab("deltaX is not supported"))},
$isbs:1,
"%":"WheelEvent"},
iP:{"^":"a3;",
eu:function(a,b){return a.requestAnimationFrame(H.b_(H.f(b,{func:1,ret:-1,args:[P.T]}),1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lT:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b6]},
$asq:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asv:function(){return[W.b6]},
"%":"CSSRuleList"},
lU:{"^":"ft;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.c9(b)
return a.left===z.gat(b)&&a.top===z.gaK(b)&&a.width===z.ga5(b)&&a.height===z.ga3(b)},
gM:function(a){return W.ex(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga3:function(a){return a.height},
ga5:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lW:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asv:function(){return[W.ba]},
"%":"GamepadList"},
lX:{"^":"k4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lY:{"^":"k6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asv:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
lZ:{"^":"k8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asv:function(){return[W.bm]},
"%":"StyleSheetList"},
j2:{"^":"cB;a,b,c,$ti",
fB:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.S(this.a,this.b,a,!1,z)}},
lV:{"^":"j2;a,b,c,$ti"},
j3:{"^":"dX;a,b,c,d,e,$ti",
eL:function(){var z=this.d
if(z!=null&&this.a<=0)J.f7(this.b,this.c,z,!1)},
n:{
S:function(a,b,c,d,e){var z=c==null?null:W.eP(new W.j4(c),W.a2)
z=new W.j3(0,a,b,z,!1,[e])
z.eL()
return z}}},
j4:{"^":"r:6;a",
$1:function(a){return this.a.$1(H.l(a,"$isa2"))}},
v:{"^":"a;$ti",
gO:function(a){return new W.dr(a,this.gk(a),-1,[H.bA(this,a,"v",0)])}},
dr:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
iY:{"^":"n+fn;"},
iZ:{"^":"n+q;"},
j_:{"^":"iZ+v;"},
j0:{"^":"n+q;"},
j1:{"^":"j0+v;"},
j5:{"^":"n+q;"},
j6:{"^":"j5+v;"},
ji:{"^":"n+q;"},
jj:{"^":"ji+v;"},
jq:{"^":"n+a6;"},
jr:{"^":"n+a6;"},
js:{"^":"n+q;"},
jt:{"^":"js+v;"},
ju:{"^":"n+q;"},
jv:{"^":"ju+v;"},
jy:{"^":"n+q;"},
jz:{"^":"jy+v;"},
jF:{"^":"n+a6;"},
eD:{"^":"a3+q;"},
eE:{"^":"eD+v;"},
jG:{"^":"n+q;"},
jH:{"^":"jG+v;"},
jK:{"^":"n+a6;"},
jN:{"^":"n+q;"},
jO:{"^":"jN+v;"},
eG:{"^":"a3+q;"},
eH:{"^":"eG+v;"},
jT:{"^":"n+q;"},
jU:{"^":"jT+v;"},
k_:{"^":"n+q;"},
k0:{"^":"k_+v;"},
k1:{"^":"n+q;"},
k2:{"^":"k1+v;"},
k3:{"^":"n+q;"},
k4:{"^":"k3+v;"},
k5:{"^":"n+q;"},
k6:{"^":"k5+v;"},
k7:{"^":"n+q;"},
k8:{"^":"k7+v;"}}],["","",,P,{"^":"",
kp:function(a){var z,y
z=J.I(a)
if(!!z.$isbX){y=z.gcF(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
ko:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
aB:function(a){var z,y,x,w,v
if(a==null)return
z=P.fW(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w){v=H.O(y[w])
z.R(0,v,a[v])}return z},
km:function(a,b){var z={}
a.H(0,new P.kn(z))
return z},
dp:function(){var z=$.dn
if(z==null){z=J.cd(window.navigator.userAgent,"Opera",0)
$.dn=z}return z},
fs:function(){var z,y
z=$.dk
if(z!=null)return z
y=$.dl
if(y==null){y=J.cd(window.navigator.userAgent,"Firefox",0)
$.dl=y}if(y)z="-moz-"
else{y=$.dm
if(y==null){y=!P.dp()&&J.cd(window.navigator.userAgent,"Trident/",0)
$.dm=y}if(y)z="-ms-"
else z=P.dp()?"-o-":"-webkit-"}$.dk=z
return z},
eJ:{"^":"a;cF:a>,b,c",$isbX:1},
kn:{"^":"r:16;a",
$2:function(a,b){this.a[a]=b}},
fD:{"^":"c_;a,b",
gbl:function(){var z,y,x
z=this.b
y=H.aC(z,"q",0)
x=W.X
return new H.h3(new H.iN(z,H.f(new P.fE(),{func:1,ret:P.ad,args:[y]}),[y]),H.f(new P.fF(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b3(this.gbl().a)},
j:function(a,b){var z=this.gbl()
return z.b.$1(J.d3(z.a,b))},
gO:function(a){var z=P.h_(this.gbl(),!1,W.X)
return new J.ap(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asc:function(){return[W.X]}},
fE:{"^":"r:22;",
$1:function(a){return!!J.I(H.l(a,"$isJ")).$isX}},
fF:{"^":"r:35;",
$1:function(a){return H.h(H.l(a,"$isJ"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jk:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jA:{"^":"a;$ti",
gaH:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.B(z+this.c,H.y(this,0))},
gbB:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bz(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=this.a
y=J.c9(b)
x=y.gat(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaK(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaH(b)){if(typeof x!=="number")return x.A()
z=H.B(x+this.d,w)===y.gbB(b)}else z=!1}else z=!1}else z=!1
return z},
gM:function(a){var z,y,x,w,v
z=this.a
y=J.aM(z)
x=this.b
w=J.aM(x)
if(typeof z!=="number")return z.A()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.B(x+this.d,v)
return P.jk(P.c4(P.c4(P.c4(P.c4(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a5:{"^":"jA;at:a>,aK:b>,a5:c>,a3:d>,$ti",n:{
hA:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ad()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.ad()
if(d<0)y=-d*0
else y=d
return new P.a5(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bG:{"^":"n;",$isbG:1,"%":"SVGLength"},lf:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bG]},
$isi:1,
$asi:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asv:function(){return[P.bG]},
"%":"SVGLengthList"},bJ:{"^":"n;",$isbJ:1,"%":"SVGNumber"},ls:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asv:function(){return[P.bJ]},
"%":"SVGNumberList"},lv:{"^":"n;0k:length=","%":"SVGPointList"},lD:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asv:function(){return[P.m]},
"%":"SVGStringList"},lE:{"^":"X;",
gcC:function(a){return new P.fD(a,new W.iW(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bL:{"^":"n;",$isbL:1,"%":"SVGTransform"},lL:{"^":"jW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asv:function(){return[P.bL]},
"%":"SVGTransformList"},jl:{"^":"n+q;"},jm:{"^":"jl+v;"},jw:{"^":"n+q;"},jx:{"^":"jw+v;"},jL:{"^":"n+q;"},jM:{"^":"jL+v;"},jV:{"^":"n+q;"},jW:{"^":"jV+v;"}}],["","",,P,{"^":"",kT:{"^":"n;0k:length=","%":"AudioBuffer"},kU:{"^":"iV;",
j:function(a,b){return P.aB(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gac:function(a){var z=H.b([],[P.m])
this.H(a,new P.fc(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"AudioParamMap"},fc:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},kV:{"^":"a3;0k:length=","%":"AudioTrackList"},fd:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lt:{"^":"fd;0k:length=","%":"OfflineAudioContext"},iV:{"^":"n+a6;"}}],["","",,P,{"^":"",cA:{"^":"n;",
h4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ko(g))
return}if(!!z.$isds)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.fa("Incorrect number or type of arguments"))},
h3:function(a,b,c,d,e,f,g){return this.h4(a,b,c,d,e,f,g,null,null,null)},
$iscA:1,
"%":"WebGLRenderingContext"},is:{"^":"n;",$isis:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lB:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aB(a.item(b))},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$isi:1,
$asi:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asv:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},jI:{"^":"n+q;"},jJ:{"^":"jI+v;"}}],["","",,O,{"^":"",aN:{"^":"a;0a,0b,0c,0d,$ti",
ca:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
c4:function(a,b,c){var z=H.aC(this,"aN",0)
H.f(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.C,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bc:function(a,b){return this.c4(a,null,b)},
ek:function(a){var z
H.x(a,"$isi",[H.aC(this,"aN",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e0:function(a,b){var z
H.x(b,"$isi",[H.aC(this,"aN",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gO:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.y(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"aN",0)
H.B(b,z)
z=[z]
if(this.ek(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e0(x,H.b([b],z))}},
$isi:1,
n:{
ck:function(a){var z=new O.aN([a])
z.ca(a)
return z}}},cw:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.af()
this.b=z}return z},
dB:function(a){var z=this.b
if(!(z==null))z.G(a)},
ae:function(){return this.dB(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gbR(z)
else return V.cx()},
d7:function(a){var z=this.a
if(a==null)C.a.h(z,V.cx())
else C.a.h(z,a)
this.ae()},
bX:function(){var z=this.a
if(z.length>0){z.pop()
this.ae()}}}}],["","",,E,{"^":"",ce:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.M("shape",z,this.c,this,[F.dT])
w.b=!0
this.a_(w)}},
saD:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.f(this.gd3(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.f(this.gd3(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.M("mover",z,a,this,[U.bI])
w.b=!0
this.a_(w)}},
ba:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sdf(z.a+z.d*b.y)
z.sd5(0,z.b+z.e*b.y)
z.sd9(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.a4(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.ak])
s.b=!0
this.a_(s)}for(z=this.y.a,z=new J.ap(z,z.length,0,[H.y(z,0)]);z.w();)z.d.ba(0,b)},
au:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.m(0,z.gL(z)))
z.ae()
a.d8(this.f)
z=a.dy
x=(z&&C.a).gbR(z)
if(x!=null&&this.d!=null)x.fX(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.y(z,0)]);z.w();)z.d.au(a)
a.d6()
a.dx.bX()},
a_:function(a){var z=this.z
if(!(z==null))z.G(a)},
P:function(){return this.a_(null)},
fK:[function(a){H.l(a,"$isu")
this.e=null
this.a_(a)},function(){return this.fK(null)},"hN","$1","$0","gd4",0,2,0],
fJ:[function(a){this.a_(H.l(a,"$isu"))},function(){return this.fJ(null)},"hM","$1","$0","gd3",0,2,0],
fH:[function(a){this.a_(H.l(a,"$isu"))},function(){return this.fH(null)},"hK","$1","$0","gd2",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isi",[E.aE],"$asi")
for(z=b.length,y=this.gd2(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aO()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.P()},"$2","gfG",8,0,7],
hL:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isi",[E.aE],"$asi")
for(z=b.length,y=this.gd2(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aO()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.f(y,x)
C.a.F(t.a,y)}}this.P()},"$2","gfI",8,0,7],
$isar:1},hE:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dv:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aD(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cw()
y=[V.ak]
z.a=H.b([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.f(new E.hG(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cw()
z.a=H.b([],y)
v=z.gB()
v.toString
x=H.f(new E.hH(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cw()
z.a=H.b([],y)
y=z.gB()
y.toString
w=H.f(new E.hI(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cD])
this.dy=z
C.a.h(z,null)
this.fr=new H.aQ(0,0,[P.m,A.dS])},
gfT:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.m(0,y.gL(y))
this.z=y
z=y}return z},
d8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbR(z):a;(z&&C.a).h(z,y)},
d6:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hF:function(a,b){var z=new E.hE(a,b)
z.dv(a,b)
return z}}},hG:{"^":"r:10;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hH:{"^":"r:10;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hI:{"^":"r:10;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},i9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch",
dD:[function(a){var z
H.l(a,"$isu")
z=this.x
if(!(z==null))z.G(a)
this.fZ()},function(){return this.dD(null)},"dC","$1","$0","gcb",0,2,0],
gfq:function(){var z,y,x
z=Date.now()
y=C.f.T(P.dq(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aD(z,!1)
return x/y},
cs:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.z(z)
x=C.i.bP(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.i.bP(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.e2(C.l,this.gfY())},
fZ:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.ib(this),{func:1,ret:-1,args:[P.T]})
C.t.dU(z)
C.t.eu(z,W.eP(y,P.T))}},"$0","gfY",0,0,2],
fW:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cs()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aD(w,!1)
x.y=P.dq(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ae()
w=x.db
C.a.sk(w.a,0)
w.ae()
w=x.dx
C.a.sk(w.a,0)
w.ae()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.au(this.e)}}catch(v){z=H.aL(v)
y=H.b1(v)
P.d1("Error: "+H.j(z))
P.d1("Stack: "+H.j(y))
throw H.d(z)}},
n:{
ia:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$isch)return E.e1(a,!0,!0,!0,!1)
y=W.ci(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.e1(y,!0,!0,!0,!1)
w.a=a
return w},
e1:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i9()
y=P.fX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.bb(a,"webgl",y)
x=H.l(x==null?C.k.bb(a,"experimental-webgl",y):x,"$iscA")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hF(x,a)
w=new T.i4(x)
w.b=H.V(x.getParameter(3379))
w.c=H.V(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iy(a)
v=new X.fR()
v.c=new X.bf(!1,!1,!1)
v.d=P.fY(null,null,null,P.C)
w.b=v
v=new X.hg(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h0(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dX,P.a]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.S(u,"contextmenu",H.f(w.ge7(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.S(a,"focus",H.f(w.gea(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.S(a,"blur",H.f(w.ge4(),q),!1,r))
v=w.z
p=W.bd
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.S(u,"keyup",H.f(w.gec(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.S(u,"keydown",H.f(w.geb(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.S(a,"mousedown",H.f(w.gef(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mouseup",H.f(w.geh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mousemove",H.f(w.geg(),s),!1,t))
p=w.z
o=W.bs;(p&&C.a).h(p,W.S(a,H.O(W.fx(a)),H.f(w.gei(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.S(u,"mousemove",H.f(w.ge8(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.S(u,"mouseup",H.f(w.ge9(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.S(u,"pointerlockchange",H.f(w.gej(),q),!1,r))
r=w.z
q=W.aU
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.S(a,"touchstart",H.f(w.gep(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchend",H.f(w.gen(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchmove",H.f(w.geo(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aD(Date.now(),!1)
z.ch=0
z.cs()
return z}}},ib:{"^":"r:20;a",
$1:function(a){var z
H.kH(a)
z=this.a
if(z.z){z.z=!1
z.fW()}}}}],["","",,Z,{"^":"",et:{"^":"a;a,b",n:{
cL:function(a,b,c){var z
H.x(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bv(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,z)}}},d8:{"^":"ce;a,b,c,d,e",
bz:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aL(y)
x=P.o('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iM:{"^":"a;a",$iskW:1},d9:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bz:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bz(a)},
hb:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
au:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(y,", ")+"\nAttrs:   "+C.a.u(u,", ")},
$islF:1},bY:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aS(this.c)+"'")+"]"}},aV:{"^":"a;a",
gc6:function(a){var z,y
z=this.a
y=(z&$.$get$ax().a)!==0?3:0
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$ay().a)!==0)y+=2
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$bq().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=4
if((z&$.$get$aW().a)!==0)++y
return(z&$.$get$au().a)!==0?y+4:y},
f9:function(a){var z,y,x
z=$.$get$ax()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$au()
if((y&z.a)!==0)if(x===a)return z
return $.$get$es()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$ax().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$av().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$az().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$au().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.u(z,"|")},
n:{
ac:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",fh:{"^":"a;"},aO:{"^":"a;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fB(z))
return x!==0},
fm:function(){return this.G(null)},
h_:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
a4:function(a){return this.h_(a,!0,!1)},
n:{
af:function(){var z=new D.aO()
z.a=H.b([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},fB:{"^":"r:21;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},cm:{"^":"u;c,d,a,0b,$ti"},cn:{"^":"u;c,d,a,0b,$ti"},M:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",da:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"kX<"}},dx:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},fQ:{"^":"u;c,a,0b"},fR:{"^":"a;0a,0b,0c,0d",
fQ:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fQ(a,this)
y.b=!0
return z.G(y)},
fM:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},h0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aP:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aD(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gbF()
s=new X.dF(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bW:function(a,b){this.r=a.a
return!1},
aF:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dl()
if(typeof z!=="number")return z.dg()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aP(a,b))
return!0},
aE:function(a,b){return!1},
fR:function(a){return!1},
ee:function(a,b,c){return}},bf:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bf))return!1
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
return z+(this.c?"Shift+":"")}},dF:{"^":"dL;x,y,z,Q,ch,c,d,e,a,0b"},hg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dY:function(a,b,c){var z,y,x
z=new P.aD(Date.now(),!1)
y=this.a.gbF()
x=new X.dF(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bW:function(a,b){this.f=a.a
return!1},
aF:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dl()
if(typeof z!=="number")return z.dg()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.dY(a,b,!0))
return!0},
aE:function(a,b){return!1},
fS:function(a,b){return!1}},dL:{"^":"u;"},ie:{"^":"dL;x,y,z,Q,ch,c,d,e,a,0b"},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aP:function(a,b){var z,y,x,w
H.x(a,"$isc",[V.R],"$asc")
z=new P.aD(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gbF()
w=new X.ie(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fP:function(a){var z
H.x(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.G(this.aP(a,!0))
return!0},
fN:function(a){var z
H.x(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.G(this.aP(a,!0))
return!0},
fO:function(a){H.x(a,"$isc",[V.R],"$asc")
return!1}},iy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbF:function(){var z=this.a
return V.dQ(0,0,(z&&C.k).gcD(z).c,C.k.gcD(z).d)},
cm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dx(z,new X.bf(y,a.altKey,a.shiftKey))},
al:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bf(y,a.altKey,a.shiftKey)},
bv:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bf(y,a.altKey,a.shiftKey)},
a8:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.U()
v=z.top
if(typeof x!=="number")return x.U()
return new V.R(y-w,x-v)},
ax:function(a){return new V.bM(a.movementX,a.movementY)},
bp:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.i.a0(u.pageX)
C.i.a0(u.pageY)
s=z.left
C.i.a0(u.pageX)
C.a.h(y,new V.R(t-s,C.i.a0(u.pageY)-z.top))}return y},
a6:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.da(z,new X.bf(y,a.altKey,a.shiftKey))},
bm:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.U()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.U()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hq:[function(a){this.f=!0},"$1","gea",4,0,6],
hk:[function(a){this.f=!1},"$1","ge4",4,0,6],
hn:[function(a){H.l(a,"$isah")
if(this.f&&this.bm(a))a.preventDefault()},"$1","ge7",4,0,3],
hs:[function(a){var z
H.l(a,"$isbd")
if(!this.f)return
z=this.cm(a)
if(this.b.fQ(z))a.preventDefault()},"$1","gec",4,0,19],
hr:[function(a){var z
H.l(a,"$isbd")
if(!this.f)return
z=this.cm(a)
this.b.fM(z)},"$1","geb",4,0,19],
hu:[function(a){var z,y,x,w
H.l(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.al(a)
if(this.x){y=this.a6(a)
x=this.ax(a)
if(this.d.bW(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a6(a)
w=this.a8(a)
if(this.c.bW(y,w))a.preventDefault()},"$1","gef",4,0,3],
hw:[function(a){var z,y,x
H.l(a,"$isah")
this.al(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aF(z,x))a.preventDefault()},"$1","geh",4,0,3],
hp:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bm(a)){this.al(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aF(z,x))a.preventDefault()}},"$1","ge9",4,0,3],
hv:[function(a){var z,y,x
H.l(a,"$isah")
this.al(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aE(z,x))a.preventDefault()},"$1","geg",4,0,3],
ho:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bm(a)){this.al(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aE(z,x))a.preventDefault()}},"$1","ge8",4,0,3],
hx:[function(a){var z,y
H.l(a,"$isbs")
this.al(a)
z=new V.bM((a&&C.r).gfj(a),C.r.gfk(a)).D(0,180)
if(this.x){if(this.d.fR(z))a.preventDefault()
return}if(this.r)return
y=this.a8(a)
if(this.c.fS(z,y))a.preventDefault()},"$1","gei",4,0,24],
hy:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a6(this.y)
v=this.a8(this.y)
this.d.ee(w,v,x)}},"$1","gej",4,0,6],
hD:[function(a){var z
H.l(a,"$isaU")
this.a.focus()
this.f=!0
this.bv(a)
z=this.bp(a)
if(this.e.fP(z))a.preventDefault()},"$1","gep",4,0,9],
hB:[function(a){var z
H.l(a,"$isaU")
this.bv(a)
z=this.bp(a)
if(this.e.fN(z))a.preventDefault()},"$1","gen",4,0,9],
hC:[function(a){var z
H.l(a,"$isaU")
this.bv(a)
z=this.bp(a)
if(this.e.fO(z))a.preventDefault()},"$1","geo",4,0,9]}}],["","",,D,{"^":"",bU:{"^":"a;0a,0b,0c,0d",
af:[function(a){var z
H.l(a,"$isu")
z=this.d
if(!(z==null))z.G(a)},function(){return this.af(null)},"hd","$1","$0","gdE",0,2,0],
$isQ:1,
$isar:1},Q:{"^":"a;",$isar:1},fS:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
af:function(a){var z=this.Q
if(!(z==null))z.G(a)},
ed:[function(a){var z
H.l(a,"$isu")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.ed(null)},"ht","$1","$0","gcp",0,2,0],
hz:[function(a){var z,y,x
H.x(a,"$isi",[D.Q],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.dQ(x))return!1}return!0},"$1","gel",4,0,26],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Q
H.x(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcp(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.l(b[u],"$isQ")
if(t instanceof D.bU)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aO()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.af(z)},"$2","ge1",8,0,15],
hA:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Q
H.x(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcp(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.l(b[u],"$isQ")
if(t instanceof D.bU)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.aO()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.F(s.a,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.af(z)},"$2","gem",8,0,15],
dQ:function(a){var z=C.a.ay(this.e,a)
return z},
$asi:function(){return[D.Q]},
$asaN:function(){return[D.Q]}},hq:{"^":"a;",$isQ:1,$isar:1},hX:{"^":"a;",$isQ:1,$isar:1},i6:{"^":"a;",$isQ:1,$isar:1},i7:{"^":"a;",$isQ:1,$isar:1},i8:{"^":"a;",$isQ:1,$isar:1}}],["","",,V,{"^":"",
kZ:[function(a,b){if(typeof b!=="number")return b.U()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","hd",8,0,23],
d2:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dk(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.h.X("null",c)
return C.h.X(C.i.de($.k.$2(a,0)?0:a,b),c+b+1)},
b0:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isc",[P.t],"$asc")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.R(z,u,C.h.X(z[u],x))}return z},
d0:function(a,b){return C.i.h7(Math.pow(b,C.y.bP(Math.log(H.kl(a))/Math.log(b))))},
Z:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
bS:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
dD:{"^":"a;a,b,c,d,e,f,r,x,y",
Y:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dD))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.b0(H.b([this.a,this.d,this.r],z),3,0)
x=V.b0(H.b([this.b,this.e,this.x],z),3,0)
w=V.b0(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
ak:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Y:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
d0:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.z(u)
t=this.c
if(typeof t!=="number")return t.m()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.z(r)
q=this.d
if(typeof q!=="number")return q.m()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.m()
if(typeof k!=="number")return H.z(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.z(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.z(g)
f=this.Q
if(typeof f!=="number")return f.m()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.z(d)
c=this.ch
if(typeof c!=="number")return c.m()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.k.$2(a2,0))return V.cx()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.z(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.z(s)
r=a7.b
if(typeof r!=="number")return H.z(r)
q=a7.f
if(typeof q!=="number")return H.z(q)
p=a7.z
if(typeof p!=="number")return H.z(p)
o=a7.cy
if(typeof o!=="number")return H.z(o)
n=a7.c
if(typeof n!=="number")return H.z(n)
m=a7.r
if(typeof m!=="number")return H.z(m)
l=a7.Q
if(typeof l!=="number")return H.z(l)
k=a7.db
if(typeof k!=="number")return H.z(k)
j=a7.d
if(typeof j!=="number")return H.z(j)
i=a7.x
if(typeof i!=="number")return H.z(i)
h=a7.ch
if(typeof h!=="number")return H.z(h)
g=a7.dx
if(typeof g!=="number")return H.z(g)
f=this.e
if(typeof f!=="number")return f.m()
e=this.f
if(typeof e!=="number")return e.m()
d=this.r
if(typeof d!=="number")return d.m()
c=this.x
if(typeof c!=="number")return c.m()
b=this.y
if(typeof b!=="number")return b.m()
a=this.z
if(typeof a!=="number")return a.m()
a0=this.Q
if(typeof a0!=="number")return a0.m()
a1=this.ch
if(typeof a1!=="number")return a1.m()
a2=this.cx
if(typeof a2!=="number")return a2.m()
a3=this.cy
if(typeof a3!=="number")return a3.m()
a4=this.db
if(typeof a4!=="number")return a4.m()
a5=this.dx
if(typeof a5!=="number")return a5.m()
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.e
if(typeof t!=="number")return t.m()
s=this.f
if(typeof s!=="number")return s.m()
r=this.r
if(typeof r!=="number")return r.m()
q=this.y
if(typeof q!=="number")return q.m()
p=this.z
if(typeof p!=="number")return p.m()
o=this.Q
if(typeof o!=="number")return o.m()
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.d
if(typeof t!=="number")return H.z(t)
s=this.e
if(typeof s!=="number")return s.m()
r=this.f
if(typeof r!=="number")return r.m()
q=this.r
if(typeof q!=="number")return q.m()
p=this.x
if(typeof p!=="number")return H.z(p)
o=this.y
if(typeof o!=="number")return o.m()
n=this.z
if(typeof n!=="number")return n.m()
m=this.Q
if(typeof m!=="number")return m.m()
l=this.ch
if(typeof l!=="number")return H.z(l)
return new V.as(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
z=b.z
if(!$.k.$2(z,this.z))return!1
z=b.Q
if(!$.k.$2(z,this.Q))return!1
z=b.ch
if(!$.k.$2(z,this.ch))return!1
z=b.cx
if(!$.k.$2(z,this.cx))return!1
z=b.cy
if(!$.k.$2(z,this.cy))return!1
z=b.db
if(!$.k.$2(z,this.db))return!1
z=b.dx
if(!$.k.$2(z,this.dx))return!1
return!0},
i:function(a){return this.C()},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b0(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b0(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b0(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b0(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
C:function(){return this.d_("",3,0)},
t:function(a){return this.d_(a,3,0)},
n:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cx:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dE:function(a,b,c){var z,y,x,w,v
z=c.D(0,Math.sqrt(c.J(c)))
y=b.az(z)
x=y.D(0,Math.sqrt(y.J(y)))
w=z.az(x)
v=new V.H(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.av(0).J(v),x.b,w.b,z.b,w.av(0).J(v),x.c,w.c,z.c,z.av(0).J(v),0,0,0,1)}}},
R:{"^":"a;a,b",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
as:{"^":"a;a,b,c",
U:function(a,b){return new V.as(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
dK:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
dP:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
n:{
dQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)}}},
bM:{"^":"a;a,b",
fz:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,14],
D:function(a,b){var z,y
if($.k.$2(b,0))return new V.bM(0,0)
z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.bM(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fz:[function(a){return Math.sqrt(this.J(this))},"$0","gk",1,0,14],
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bS:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
az:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
av:function(a){return new V.H(-this.a,-this.b,-this.c)},
D:function(a,b){if($.k.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
d1:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",de:{"^":"bI;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.af()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.de))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")},
n:{
df:function(a){var z=new U.de()
z.a=a
return z}}},bI:{"^":"fh;"},dR:{"^":"bI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.af()
this.y=z}return z},
aj:function(a){var z=this.y
if(!(z==null))z.G(a)},
sdf:function(a){var z,y
a=V.d2(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
sd5:function(a,b){var z,y
b=V.d2(b,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.t])
z.b=!0
this.aj(z)}},
sd9:function(a){var z,y
a=V.d2(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
z=this.a
y=b.a
if(!$.k.$2(z,y))return!1
z=this.b
y=b.b
if(!$.k.$2(z,y))return!1
z=this.c
y=b.c
if(!$.k.$2(z,y))return!1
z=this.d
y=b.d
if(!$.k.$2(z,y))return!1
z=this.e
y=b.e
if(!$.k.$2(z,y))return!1
z=this.f
y=b.f
if(!$.k.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ag:[function(a){var z
H.l(a,"$isu")
z=this.x
if(!(z==null))z.G(a)},function(){return this.ag(null)},"he","$1","$0","ga2",0,2,0],
hl:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.x(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aO()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","ge5",8,0,7],
hm:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.x(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aO()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.f(x,w)
C.a.F(s.a,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","ge6",8,0,7],
sdc:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.ga2(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.ga2(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("technique",x,this.c,this,[O.cD])
z.b=!0
this.ag(z)}},
gB:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.d8(this.c)
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
if(typeof x!=="number")return H.z(x)
u=C.i.a0(v.a*x)
if(typeof w!=="number")return H.z(w)
t=C.i.a0(v.b*w)
s=C.i.a0(v.c*x)
a.c=s
v=C.i.a0(v.d*w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.d7(V.aq(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dJ
if(y==null){y=V.dE(new V.as(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dJ=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.m(0,m)}a.db.d7(m)
z=this.c
if(z!=null)z.ba(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.y(z,0)]);z.w();)z.d.ba(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.y(z,0)]);z.w();)z.d.au(a)
this.a.toString
a.cy.bX()
a.db.bX()
this.b.toString
a.d6()},
$islx:1}}],["","",,A,{"^":"",d5:{"^":"a;a,b,c"},fb:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h7:{"^":"dS;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aq,0ab,0ar,0aW,0cG,0cH,0aX,0aY,0cI,0cJ,0aZ,0b_,0cK,0cL,0b0,0cM,0cN,0b1,0cO,0cP,0b2,0b3,0b4,0cQ,0cR,0b5,0b6,0cS,0cT,0b7,0cU,0bJ,0cV,0bK,0cW,0bL,0cX,0bM,0cY,0bN,0cZ,0bO,a,b,0c,0d,0e,0f,0r",
du:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bK("")
y=a2.fx
if(y){z.a="uniform mat4 objMat;\n"
x="uniform mat4 objMat;\n"}else x=""
w=a2.fy
if(w){x+="uniform mat4 viewObjMat;\n"
z.a=x}x+="uniform mat4 projViewObjMat;\n"
z.a=x
x+="\n"
z.a=x
x+="attribute vec3 posAttr;\n"
z.a=x
v=a2.r1
if(v){x+="attribute vec3 normAttr;\n"
z.a=x}u=a2.r2
if(u){x+="attribute vec3 binmAttr;\n"
z.a=x}z.a=x+"\n"
a2.eN(z)
a2.eU(z)
a2.eO(z)
a2.f1(z)
a2.f2(z)
a2.eW(z)
a2.f6(z)
x=z.a+="vec4 getPos()\n"
x+="{\n"
z.a=x
t=a2.x1
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
z.a=x}if(a2.rx){x+="   txt2D = getTxt2D();\n"
z.a=x}if(a2.ry){x+="   txtCube = getTxtCube();\n"
z.a=x}if(a2.k3){x+="   objPos = getObjPos();\n"
z.a=x}if(a2.k4){x+="   viewPos = getViewPos();\n"
z.a=x}x+="   gl_Position = getPos();\n"
z.a=x
x+="}\n"
z.a=x
x+="\n"
z.a=x
v=this.x
z=new P.bK("")
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
v.eR(z)
v.eM(z)
v.eP(z)
v.eS(z)
v.f_(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eY(z)
v.eZ(z)}v.eV(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
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
case C.e:r+="   return alpha;\n"
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
p=H.b([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.u(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eQ(z)
v.eX(z)
v.f0(z)
v.f3(z)
v.f4(z)
v.f5(z)
v.eT(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.m])
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
n="vec4("+C.a.u(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cn(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cn(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eT(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(m)))}this.eG()
this.eI()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.h(this.r.l(0,"invViewMat"),"$isat")
if(y)this.db=H.h(this.r.l(0,"objMat"),"$isat")
if(w)this.dx=H.h(this.r.l(0,"viewObjMat"),"$isat")
this.fr=H.h(this.r.l(0,"projViewObjMat"),"$isat")
if(a2.x2)this.go=H.h(this.r.l(0,"txt2DMat"),"$iscI")
if(a2.y1)this.id=H.h(this.r.l(0,"txtCubeMat"),"$isat")
if(a2.y2)this.k1=H.h(this.r.l(0,"colorMat"),"$isat")
this.k3=H.b([],[A.at])
y=a2.aq
if(y>0){this.k2=H.l(this.r.l(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isat"))}}y=a2.a
if(y!==C.b){this.k4=H.h(this.r.l(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.h(this.r.l(0,"emissionTxt"),"$isa9")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.r2=H.h(this.r.l(0,"emissionTxt"),"$isaa")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.b){this.ry=H.h(this.r.l(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.h(this.r.l(0,"ambientTxt"),"$isa9")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.x2=H.h(this.r.l(0,"ambientTxt"),"$isaa")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.b){this.y2=H.h(this.r.l(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.aq=H.h(this.r.l(0,"diffuseTxt"),"$isa9")
this.ar=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.ab=H.h(this.r.l(0,"diffuseTxt"),"$isaa")
this.ar=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.b){this.aW=H.h(this.r.l(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cG=H.h(this.r.l(0,"invDiffuseTxt"),"$isa9")
this.aX=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.cH=H.h(this.r.l(0,"invDiffuseTxt"),"$isaa")
this.aX=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.b){this.b_=H.h(this.r.l(0,"shininess"),"$isP")
this.aY=H.h(this.r.l(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cI=H.h(this.r.l(0,"specularTxt"),"$isa9")
this.aZ=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.cJ=H.h(this.r.l(0,"specularTxt"),"$isaa")
this.aZ=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cK=H.h(this.r.l(0,"bumpTxt"),"$isa9")
this.b0=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break
case C.d:this.cL=H.h(this.r.l(0,"bumpTxt"),"$isaa")
this.b0=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.cM=H.h(this.r.l(0,"envSampler"),"$isaa")
this.cN=H.h(this.r.l(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.b){this.b1=H.h(this.r.l(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cO=H.h(this.r.l(0,"reflectTxt"),"$isa9")
this.b2=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break
case C.d:this.cP=H.h(this.r.l(0,"reflectTxt"),"$isaa")
this.b2=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.b){this.b3=H.h(this.r.l(0,"refraction"),"$isP")
this.b4=H.h(this.r.l(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cQ=H.h(this.r.l(0,"refractTxt"),"$isa9")
this.b5=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break
case C.d:this.cR=H.h(this.r.l(0,"refractTxt"),"$isaa")
this.b5=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.b){this.b6=H.h(this.r.l(0,"alpha"),"$isP")
switch(y){case C.b:break
case C.e:break
case C.c:this.cS=H.h(this.r.l(0,"alphaTxt"),"$isa9")
this.b7=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.cT=H.h(this.r.l(0,"alphaTxt"),"$isaa")
this.b7=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break}}this.bJ=H.b([],[A.ei])
this.bK=H.b([],[A.ej])
this.bL=H.b([],[A.ek])
this.bM=H.b([],[A.el])
this.bN=H.b([],[A.em])
this.bO=H.b([],[A.en])
if(a2.k2){y=a2.z
if(y>0){this.cU=H.l(this.r.l(0,"dirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.bJ;(x&&C.a).h(x,new A.ei(l,k,j))}}y=a2.Q
if(y>0){this.cV=H.l(this.r.l(0,"pntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isP")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isP")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isP")
x=this.bK;(x&&C.a).h(x,new A.ej(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cW=H.l(this.r.l(0,"spotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isP")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isP")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isP")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isP")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isP")
x=this.bL;(x&&C.a).h(x,new A.ek(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cX=H.l(this.r.l(0,"txtDirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isE")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isF")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isa9")
x=this.bM;(x&&C.a).h(x,new A.el(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cY=H.l(this.r.l(0,"txtPntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$iscI")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isF")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isP")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isP")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isP")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isaa")
x=this.bN;(x&&C.a).h(x,new A.em(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cZ=H.l(this.r.l(0,"txtSpotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isE")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isF")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isE")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isP")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isP")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isP")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isP")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isP")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isa9")
x=this.bO;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
Z:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dm(c)
b.a.uniform1i(b.d,0)}},
V:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
h6:function(a,b){var z,y
z=a.ab
y=new A.h7(b,z)
y.dz(b,z)
y.du(a,b)
return y}}},ha:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aq,ab,ar",
eN:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aq+"];\n"
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
eU:function(a){var z
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
eO:function(a){var z
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
f1:function(a){var z,y
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
f2:function(a){var z,y
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
eW:function(a){var z
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
f6:function(a){var z
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
a7:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.c7(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eR:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a7(a,z,"emission")
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
eM:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a7(a,z,"ambient")
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
eP:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a7(a,z,"diffuse")
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
eS:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a7(a,z,"invDiffuse")
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
f_:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a7(a,z,"specular")
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
eV:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
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
case C.e:z+="   return normalize(normalVec);\n"
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
eY:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a7(a,z,"reflect")
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
eZ:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a7(a,z,"refract")
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
eQ:function(a){var z,y
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
eX:function(a){var z,y
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
f0:function(a){var z,y
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
f3:function(a){var z,y,x
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
f4:function(a){var z,y,x
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
f5:function(a){var z,y,x
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
eT:function(a){var z
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
i:function(a){return this.ab}},ei:{"^":"a;a,b,c"},el:{"^":"a;a,b,c,d,e,f,r,x"},ej:{"^":"a;a,b,c,d,e,f,r"},em:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ek:{"^":"a;a,b,c,d,e,f,r,x,y,z"},en:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dS:{"^":"ce;",
dz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cn:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eG:function(){var z,y,x,w,v,u
z=H.b([],[A.d5])
y=this.a
x=H.V(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d5(y,v.name,u))}this.f=new A.fb(z)},
eI:function(){var z,y,x,w,v,u
z=H.b([],[A.a0])
y=this.a
x=H.V(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fi(v.type,v.size,v.name,u))}this.r=new A.ir(z)},
ai:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.cH(z,y,b,a,c)},
dR:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a9(z,y,b,c)
else return A.cH(z,y,b,a,c)},
dS:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cH(z,y,b,a,c)},
aU:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fi:function(a,b,c,d){switch(a){case 5120:return this.ai(b,c,d)
case 5121:return this.ai(b,c,d)
case 5122:return this.ai(b,c,d)
case 5123:return this.ai(b,c,d)
case 5124:return this.ai(b,c,d)
case 5125:return this.ai(b,c,d)
case 5126:return new A.P(this.a,this.e,c,d)
case 35664:return new A.il(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.ip(this.a,this.e,c,d)
case 35667:return new A.im(this.a,this.e,c,d)
case 35668:return new A.io(this.a,this.e,c,d)
case 35669:return new A.iq(this.a,this.e,c,d)
case 35674:return new A.it(this.a,this.e,c,d)
case 35675:return new A.cI(this.a,this.e,c,d)
case 35676:return new A.at(this.a,this.e,c,d)
case 35678:return this.dR(b,c,d)
case 35680:return this.dS(b,c,d)
case 35670:throw H.d(this.aU("BOOL",c))
case 35671:throw H.d(this.aU("BOOL_VEC2",c))
case 35672:throw H.d(this.aU("BOOL_VEC3",c))
case 35673:throw H.d(this.aU("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bT:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},ir:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.C()},
fp:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
C:function(){return this.fp("\n")}},F:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},im:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},io:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iq:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ik:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cH:function(a,b,c,d,e){var z=new A.ik(a,b,c,e)
z.f=d
z.e=P.fZ(d,0,!1,P.C)
return z}}},P:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},il:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ip:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},it:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cI:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bv(H.x(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},at:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bv(H.x(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a9:{"^":"a0;a,b,c,d",
dm:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aa:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
c5:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bu:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.H(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.H(t+h,s+f,r+g)
z.b=q
p=new V.H(t-h,s-f,r-g)
z.c=p
o=new V.H(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.c5(y)
k=F.c5(z.b)
j=F.kN(d,e,new F.k9(z,F.c5(z.c),F.c5(z.d),k,l,c),b)
if(j!=null)a.bV(j)},
kN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.an,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dU()
y=H.b([],[F.an])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cK(null,null,new V.bS(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bH(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cK(null,null,new V.bS(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bH(d))}}z.d.f7(a+1,b+1,y)
return z},
k9:{"^":"r:29;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bS(z.b,b).bS(z.d.bS(z.c,b),c)
z=new V.as(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.P()}a.sh5(y.D(0,Math.sqrt(y.J(y))))
z=1-b
x=1-c
x=new V.dK(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.P()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
aa:function(){if(!this.gaA()){C.a.F(this.a.a.d.b,this)
this.a.a.P()}this.br()
this.bs()
this.es()},
eD:function(a){this.a=a
C.a.h(a.d.b,this)},
eE:function(a){this.b=a
C.a.h(a.d.c,this)},
eF:function(a){this.c=a
C.a.h(a.d.d,this)},
br:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bs:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
es:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaA:function(){return this.a==null||this.b==null||this.c==null},
dL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.d1())return
return v.D(0,Math.sqrt(v.J(v)))},
dO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.U(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.D(0,Math.sqrt(z.J(z)))
z=w.U(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.az(z.D(0,Math.sqrt(z.J(z))))
return z.D(0,Math.sqrt(z.J(z)))},
bE:function(){if(this.d!=null)return!0
var z=this.dL()
if(z==null){z=this.dO()
if(z==null)return!1}this.d=z
this.a.a.P()
return!0},
dK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.d1())return
return v.D(0,Math.sqrt(v.J(v)))},
dN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.k.$2(n,0)){z=r.U(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.J(z)))
if(o.a-p.a<0)m=m.av(0)}else{l=(z-q.b)/n
z=r.U(0,u)
z=new V.as(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).U(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.J(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.av(0)}z=this.d
if(z!=null){k=z.D(0,Math.sqrt(z.J(z)))
z=k.az(m)
z=z.D(0,Math.sqrt(z.J(z))).az(k)
m=z.D(0,Math.sqrt(z.J(z)))}return m},
bC:function(){if(this.e!=null)return!0
var z=this.dK()
if(z==null){z=this.dN()
if(z==null)return!1}this.e=z
this.a.a.P()
return!0},
gfd:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z,y
if(this.gaA())return a+"disposed"
z=a+C.h.X(J.a1(this.a.e),0)+", "+C.h.X(J.a1(this.b.e),0)+", "+C.h.X(J.a1(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
C:function(){return this.t("")},
n:{
bE:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.eD(a)
z.eE(b)
z.eF(c)
C.a.h(z.a.a.d.b,z)
z.a.a.P()
return z}}},
fC:{"^":"a;"},
hW:{"^":"fC;",
aC:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cu:{"^":"a;0a,0b",
aa:function(){if(!this.gaA()){C.a.F(this.a.a.c.b,this)
this.a.a.P()}this.br()
this.bs()},
br:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bs:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaA:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){if(this.gaA())return a+"disposed"
return a+C.h.X(J.a1(this.a.e),0)+", "+C.h.X(J.a1(this.b.e),0)},
C:function(){return this.t("")}},
fT:{"^":"a;"},
ij:{"^":"fT;",
aC:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cz:{"^":"a;0a",
aa:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.P()}this.er()},
er:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.X(J.a1(z.e),0)},
C:function(){return this.t("")}},
dT:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.af()
this.e=z}return z},
bV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.fh())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cz()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cu()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bE(p,o,l)}z=this.e
if(!(z==null))z.a4(0)},
am:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.a4(0)
return y},
dW:function(a,b,c,d,e){var z,y,x
H.x(d,"$isc",[F.an],"$asc")
H.x(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aC(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.an],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.dW(a,v,y,u,t))b.bV(u)}this.a.q()
this.c.bY()
this.d.bY()
this.b.fV()
this.c.bZ(new F.ij())
this.d.bZ(new F.hW())
z=this.e
if(!(z==null))z.a4(0)},
fb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ax()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$au().a)!==0)++w
v=b.gc6(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d8])
for(r=0,q=0;q<w;++q){p=b.f9(q)
o=p.gc6(p)
C.a.R(s,q,new Z.d8(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fA(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.x(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bv(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d9(new Z.et(34962,j),s,b)
i.b=H.b([],[Z.bY])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.cL(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.cL(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.cL(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.u(z,"\n")},
a_:function(a){var z=this.e
if(!(z==null))z.G(a)},
P:function(){return this.a_(null)},
n:{
dU:function(){var z,y
z=new F.dT()
y=new F.iB(z)
y.b=!1
y.c=H.b([],[F.an])
z.a=y
y=new F.hR(z)
y.b=H.b([],[F.cz])
z.b=y
y=new F.hQ(z)
y.b=H.b([],[F.cu])
z.c=y
y=new F.hP(z)
y.b=H.b([],[F.ag])
z.d=y
z.e=null
return z}}},
hP:{"^":"a;a,0b",
f7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isc",[F.an],"$asc")
z=H.b([],[F.ag])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.e(c,x)
r=c[x];++x
if(x>=s)return H.e(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.e(c,p)
o=c[p]
if(y<0||y>=s)return H.e(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bE(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bE(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
bZ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aC(0,v,t)){v.aa()
break}}}}},
bY:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gfd(x)
if(y)x.aa()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bE())x=!1
return x},
bD:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bC())x=!1
return x},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
hQ:{"^":"a;a,0b",
gk:function(a){return this.b.length},
bZ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aC(0,v,t)){v.aa()
break}}}}},
bY:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.aa()}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.u(z,"\n")},
C:function(){return this.t("")}},
hR:{"^":"a;a,0b",
gk:function(a){return this.b.length},
fV:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aa()}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
an:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bH:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cK(this.cx,x,u,z,y,w,v,a,t)},
fh:function(){return this.bH(null)},
sh5:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.P()}},
fA:function(a){var z,y
z=J.I(a)
if(z.p(a,$.$get$ax())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aw())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$av())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ay())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$az())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bq())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$br())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aW()))return H.b([this.ch],[P.t])
else if(z.p(a,$.$get$au())){z=this.cx
y=[P.t]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.t])},
bE:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iL(z))
z=z.a
this.r=z.D(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.P()
z=this.a.e
if(!(z==null))z.a4(0)}return!0},
bC:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iK(z))
z=z.a
this.x=z.D(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.P()
z=this.a.e
if(!(z==null))z.a4(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.h.X(J.a1(this.e),0))
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
C.a.h(z,V.D(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.u(z,", ")
return a+"{"+x+"}"},
C:function(){return this.t("")},
n:{
cK:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.an()
y=new F.iJ(z)
y.b=H.b([],[F.cz])
z.b=y
y=new F.iF(z)
x=[F.cu]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iC(z)
x=[F.ag]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eq()
z.e=0
y=$.$get$ax()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aw().a)!==0?e:null
z.x=(x&$.$get$av().a)!==0?b:null
z.y=(x&$.$get$ay().a)!==0?f:null
z.z=(x&$.$get$az().a)!==0?g:null
z.Q=(x&$.$get$er().a)!==0?c:null
z.ch=(x&$.$get$aW().a)!==0?i:0
z.cx=(x&$.$get$au().a)!==0?a:null
return z}}},
iL:{"^":"r:4;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
iK:{"^":"r:4;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
iB:{"^":"a;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.P()
return!0},
gk:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bE()
return!0},
bD:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bC()
return!0},
fc:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.D(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
this.q()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iC:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
H:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ag]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iD(this,b))
C.a.H(this.d,new F.iE(this,b))},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iD:{"^":"r:4;a,b",
$1:function(a){H.l(a,"$isag")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iE:{"^":"r:4;a,b",
$1:function(a){var z
H.l(a,"$isag")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iF:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iH:{"^":"a;"},
iG:{"^":"iH;",
aC:function(a,b,c){return J.N(b.f,c.f)}},
iI:{"^":"a;"},
hl:{"^":"iI;",
bV:function(a){var z,y,x,w,v,u,t,s
H.x(a,"$isc",[F.an],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.D(0,Math.sqrt(z.J(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){t=a[x]
s=z.D(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.G(null)}}}return}},
iJ:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}}}],["","",,O,{"^":"",h5:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.af()
this.dy=z}return z},
N:[function(a){var z
H.l(a,"$isu")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.N(null)},"dF","$1","$0","gaN",0,2,0],
ew:[function(a){H.l(a,"$isu")
this.a=null
this.N(a)},function(){return this.ew(null)},"hE","$1","$0","gev",0,2,0],
hi:[function(a,b){var z=V.ak
z=new D.cm(a,H.x(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","ge2",8,0,12],
hj:[function(a,b){var z=V.ak
z=new D.cn(a,H.x(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","ge3",8,0,12],
ck:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.T(z.e.length+3,4)*4
x=C.f.T(z.f.length+3,4)*4
w=C.f.T(z.r.length+3,4)*4
v=C.f.T(z.x.length+3,4)*4
u=C.f.T(z.y.length+3,4)*4
t=C.f.T(z.z.length+3,4)*4
s=C.f.T(this.e.a.length+3,4)*4
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
a6=$.$get$ax()
if(c){z=$.$get$aw()
a6=new Z.aV(a6.a|z.a)}if(b){z=$.$get$av()
a6=new Z.aV(a6.a|z.a)}if(a){z=$.$get$ay()
a6=new Z.aV(a6.a|z.a)}if(a0){z=$.$get$az()
a6=new Z.aV(a6.a|z.a)}if(a2){z=$.$get$au()
a6=new Z.aV(a6.a|z.a)}return new A.ha(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.x(a,"$isc",[T.cE],"$asc")
if(b!=null)if(!C.a.ay(a,b)){b.a=a.length
C.a.h(a,b)}},
ba:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.y(z,0)]);z.w();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c0(x)}}},
fX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.ck()
y=a.fr.j(0,z.ab)
if(y==null){y=A.h6(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.cE(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.ar
z=b.e
if(!(z instanceof Z.d9)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.am()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bD()
t.a.bD()
t=t.e
if(!(t==null))t.a4(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fc()
s=s.e
if(!(s==null))s.a4(0)}q=b.d.fb(new Z.iM(a.a),v)
q.as($.$get$ax()).e=this.a.y.c
if(z)q.as($.$get$aw()).e=this.a.Q.c
if(u)q.as($.$get$av()).e=this.a.z.c
if(w.rx)q.as($.$get$ay()).e=this.a.ch.c
if(t)q.as($.$get$az()).e=this.a.cx.c
if(w.x1)q.as($.$get$au()).e=this.a.cy.c
b.e=q}z=T.cE
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fn()
if(w.fx){u=this.a
t=a.dx
t=t.gL(t)
u=u.db
u.toString
u.a1(t.Y(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gL(t)
s=a.dx
s=t.m(0,s.gL(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a1(t.Y(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfT()
s=a.dx
s=t.m(0,s.gL(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a1(t.Y(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a1(t.Y(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a1(t.Y(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a1(C.z.Y(t,!0))}if(w.aq>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.l(s,"$isak")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bv(H.x(s.Y(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.f.d)
u=this.a
t=this.f.d
u.Z(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.f.e)
u=this.a
t=this.f.e
u.V(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.r.d)
u=this.a
t=this.r.d
u.Z(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.r.e)
u=this.a
t=this.r.e
u.V(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.x.d)
u=this.a
t=this.x.d
u.Z(u.aq,u.ar,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.x.e)
u=this.a
t=this.x.e
u.V(u.ab,u.ar,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.aW
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.y.d)
u=this.a
t=this.y.d
u.Z(u.cG,u.aX,t)
t=this.a
u=this.y.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.y.e)
u=this.a
t=this.y.e
u.V(u.cH,u.aX,t)
t=this.a
u=this.y.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.aY
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b_
t.a.uniform1f(t.d,r)
break
case C.c:this.K(p,this.z.d)
u=this.a
t=this.z.d
u.Z(u.cI,u.aZ,t)
t=this.a
u=this.z.f
t=t.aY
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b_
u.a.uniform1f(u.d,r)
break
case C.d:this.K(p,this.z.e)
u=this.a
t=this.z.e
u.V(u.cJ,u.aZ,t)
t=this.a
u=this.z.f
t=t.aY
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b_
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.bJ
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.c0(i.a)
r=s.a
g=s.b
f=s.c
f=s.D(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.bK
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaG(i)
r=h.b
g=s.gc1(s)
f=s.gc2(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aL(i.gaG(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga9(i)
f=h.d
g=s.gb8()
r=s.gaM()
s=s.gaV()
f.a.uniform3f(f.d,g,r,s)
s=i.gbw()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbx()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gby()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.bL
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaG(i)
r=h.b
g=s.gc1(s)
f=s.gc2(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbI(i).hI()
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.aL(i.gaG(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga9(i)
r=h.e
g=s.gb8()
f=s.gaM()
s=s.gaV()
r.a.uniform3f(r.d,g,f,s)
s=i.ghG()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghF()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbw()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbx()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
r=this.a.bM
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gaI()
H.x(p,"$isc",s,"$asc")
if(!C.a.ay(p,r)){r.saR(p.length)
C.a.h(p,r)}r=i.gbI(i)
g=h.d
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=i.ghc()
e=h.b
f=r.gan(r)
g=r.gao(r)
r=r.gap()
e.a.uniform3f(e.d,f,g,r)
r=i.gaH(i)
g=h.c
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=l.c0(i.gbI(i))
e=r.a
f=r.b
g=r.c
g=r.D(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga9(i)
f=h.f
e=g.gb8()
r=g.gaM()
g=g.gaV()
f.a.uniform3f(f.d,e,r,g)
g=i.gaI()
r=g.gbU(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gdZ()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaR())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
g=this.a.bN
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gaI()
H.x(p,"$isc",r,"$asc")
if(!C.a.ay(p,g)){g.saR(p.length)
C.a.h(p,g)}d=l.m(0,i.gL(i))
g=i.gL(i).aL(new V.as(0,0,0))
f=h.b
e=g.gc1(g)
c=g.gc2(g)
g=g.gc3(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aL(new V.as(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d0(0)
c=h.d
m=new Float32Array(H.bv(H.x(new V.dD(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Y(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga9(i)
g=h.e
e=c.gb8()
f=c.gaM()
c=c.gaV()
g.a.uniform3f(g.d,e,f,c)
c=i.gaI()
g=c.gbU(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbU(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghH(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbw()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbx()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gby()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.bO
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaI()
H.x(p,"$isc",z,"$asc")
if(!C.a.ay(p,s)){s.saR(p.length)
C.a.h(p,s)}s=i.gaG(i)
r=h.b
g=s.gc1(s)
f=s.gc2(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbI(i)
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=i.ghc()
r=h.d
g=s.gan(s)
f=s.gao(s)
s=s.gap()
r.a.uniform3f(r.d,g,f,s)
s=i.gaH(i)
f=h.e
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.aL(i.gaG(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaI()
r=s.gbU(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gdZ()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaR())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga9(i)
r=h.y
g=s.gb8()
f=s.gaM()
s=s.gaV()
r.a.uniform3f(r.d,g,f,s)
s=i.ghO()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghP()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbw()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbx()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.K(p,this.Q.d)
z=this.a
u=this.Q.d
z.Z(z.cK,z.b0,u)
break
case C.d:this.K(p,this.Q.e)
z=this.a
u=this.Q.e
z.V(z.cL,z.b0,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gL(u).d0(0)
a.Q=u}z=z.fy
z.toString
z.a1(u.Y(0,!0))}if(w.dy){this.K(p,this.ch)
z=this.a
u=this.ch
z.V(z.cM,z.cN,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b1
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.K(p,this.cx.d)
z=this.a
u=this.cx.d
z.Z(z.cO,z.b2,u)
u=this.a
z=this.cx.f
u=u.b1
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.K(p,this.cx.e)
z=this.a
u=this.cx.e
z.V(z.cP,z.b2,u)
u=this.a
z=this.cx.f
u=u.b1
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.b4
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b3
u.a.uniform1f(u.d,s)
break
case C.c:this.K(p,this.cy.d)
z=this.a
u=this.cy.d
z.Z(z.cQ,z.b5,u)
u=this.a
z=this.cy.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b3
z.a.uniform1f(z.d,s)
break
case C.d:this.K(p,this.cy.e)
z=this.a
u=this.cy.e
z.V(z.cR,z.b5,u)
u=this.a
z=this.cy.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b3
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.b6
z.a.uniform1f(z.d,t)
break
case C.c:this.K(p,this.db.d)
z=this.a
t=this.db.d
z.Z(z.cS,z.b7,t)
t=this.a
z=this.db.f
t=t.b6
t.a.uniform1f(t.d,z)
break
case C.d:this.K(p,this.db.e)
z=this.a
t=this.db.e
z.V(z.cT,z.b7,t)
t=this.a
z=this.db.f
t=t.b6
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bz(a)
z.au(a)
z.hb(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fl()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ck().ab}},h8:{"^":"cv;0f,a,b,0c,0d,0e",
ez:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.M(this.b,y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.c9()
this.ez(1)}},cv:{"^":"a;",
N:[function(a){this.a.N(H.l(a,"$isu"))},function(){return this.N(null)},"dF","$1","$0","gaN",0,2,0],
ak:["c9",function(){}],
eB:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gaN(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gaN(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M(this.b+".texture2D",x,this.d,this,[T.e0])
z.b=!0
this.a.N(z)}},
eC:function(a){},
sb9:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.ak()
this.c=C.c
this.eC(null)
z=this.a
z.a=null
z.N(null)}this.eB(a)}},h9:{"^":"cv;a,b,0c,0d,0e"},aR:{"^":"cv;0f,a,b,0c,0d,0e",
ct:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.N(y)}},
ak:["bf",function(){this.c9()
this.ct(new V.Z(1,1,1))}],
sa9:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.ak()
z=this.a
z.a=null
z.N(null)}this.ct(b)}},hb:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
eA:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.bf()
this.eA(1)}},hc:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
bt:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.bf()
this.bt(100)}},cD:{"^":"a;"}}],["","",,T,{"^":"",cE:{"^":"ce;"},e0:{"^":"cE;0b,0c,0d,0e,0f,0r,0x,0y,a"},i4:{"^":"a;a,0b,0c,0d,0e",
fC:function(a,b,c,d,e){var z,y,x,w
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
w=new T.e0(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.af()
z=W.a2
W.S(x,"load",H.f(new T.i5(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bT:function(a){return this.fC(a,!1,!1,!1,!1)},
ex:function(a,b,c){var z,y,x,w
b=V.d0(b,2)
z=V.d0(a.width,2)
y=V.d0(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ci(null,null)
x.width=z
x.height=y
w=H.l(C.k.di(x,"2d"),"$isdc")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kp(w.getImageData(0,0,x.width,x.height))}}},i5:{"^":"r:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ex(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.h3(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fm()}++x.e}}}],["","",,V,{"^":"",f9:{"^":"a;",
aB:function(a,b){return!0},
i:function(a){return"all"},
$isbH:1},bH:{"^":"a;"},dC:{"^":"a;",
aB:["ds",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aB(0,b))return!0
return!1}],
i:["c8",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbH:1},bg:{"^":"dC;0a",
aB:function(a,b){return!this.ds(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}},hN:{"^":"a;0a",
dw:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.aQ(0,0,[P.C,P.ad])
for(y=new H.dA(a,a.gk(a),0,[H.aC(a,"q",0)]);y.w();)z.R(0,y.d,!0)
this.a=z},
aB:function(a,b){return this.a.cE(0,b)},
i:function(a){var z=this.a
return P.cC(new H.dz(z,[H.y(z,0)]),0,null)},
$isbH:1,
n:{
Y:function(a){var z=new V.hN()
z.dw(a)
return z}}},dW:{"^":"a;a,b,0c,0d",
gfF:function(a){return this.b},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e6(this.a.E(0,b))
w.a=H.b([],[V.bH])
w.c=!1
C.a.h(this.c,w)
return w},
fo:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aB(0,a))return w}return},
i:function(a){return this.b}},e4:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f3(this.b,"\n","\\n")
y=H.f3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e5:{"^":"a;a,b,0c",
i:function(a){return this.b}},id:{"^":"a;0a,0b,0c",
E:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dW(this,b)
z.c=H.b([],[V.e6])
this.a.R(0,b,z)}return z},
aJ:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e5(this,a)
y=P.m
z.c=new H.aQ(0,0,[y,y])
this.b.R(0,a,z)}return z},
ha:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e4])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aO(a,t)
r=y.fo(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cC(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.gfF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cC(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e4(o==null?p.b:o,q,t)}++t}}}},e6:{"^":"dC;b,0c,0a",
i:function(a){return this.b.b+": "+this.c8(0)}}}],["","",,X,{"^":"",db:{"^":"a;",$isar:1},fH:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z}},ho:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.af()
this.e=z}return z},
aw:[function(a){var z
H.l(a,"$isu")
z=this.e
if(!(z==null))z.G(a)},function(){return this.aw(null)},"hf","$1","$0","gcc",0,2,0],
saD:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.f(this.gcc(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gcc(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("mover",x,this.a,this,[U.bI])
z.b=!0
this.aw(z)}},
$isar:1,
$isdb:1},dZ:{"^":"a;"}}],["","",,V,{"^":"",
kL:function(a){P.ic(C.w,new V.kM(a))},
kM:{"^":"r:33;a",
$1:function(a){H.l(a,"$isaT")
P.d1(C.i.de(this.a.gfq(),2)+" fps")}},
hS:{"^":"a;0a,0b",
dA:function(a,b){var z,y,x,w,v,u,t
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
t=W.a2
W.S(z,"scroll",H.f(new V.hV(x),{func:1,ret:-1,args:[t]}),!1,t)},
f8:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$isc",[P.m],"$asc")
this.eH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ha(C.a.fw(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
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
if(H.f2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jX(C.H,s,C.q,!1)
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
eH:function(){var z,y,x,w
if(this.b!=null)return
z=new V.id()
y=P.m
z.a=new H.aQ(0,0,[y,V.dW])
z.b=new H.aQ(0,0,[y,V.e5])
z.c=z.E(0,"Start")
y=z.E(0,"Start").u(0,"Bold")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Bold").u(0,"Bold")
x=new V.bg()
w=[V.bH]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("*"))
C.a.h(x.a,y)
y=z.E(0,"Bold").u(0,"BoldEnd")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Italic")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Italic").u(0,"Italic")
x=new V.bg()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("_"))
C.a.h(x.a,y)
y=z.E(0,"Italic").u(0,"ItalicEnd")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Code")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Code").u(0,"Code")
x=new V.bg()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("`"))
C.a.h(x.a,y)
y=z.E(0,"Code").u(0,"CodeEnd")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"LinkHead")
x=V.Y(new H.W("["))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"LinkHead").u(0,"LinkTail")
x=V.Y(new H.W("|"))
C.a.h(y.a,x)
x=z.E(0,"LinkHead").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkHead").u(0,"LinkHead")
y=new V.bg()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
x=z.E(0,"LinkTail").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkTail").u(0,"LinkTail")
y=new V.bg()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
C.a.h(z.E(0,"Start").u(0,"Other").a,new V.f9())
x=z.E(0,"Other").u(0,"Other")
y=new V.bg()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("*_`["))
C.a.h(y.a,x)
x=z.E(0,"BoldEnd")
x.d=x.a.aJ("Bold")
x=z.E(0,"ItalicEnd")
x.d=x.a.aJ("Italic")
x=z.E(0,"CodeEnd")
x.d=x.a.aJ("Code")
x=z.E(0,"LinkEnd")
x.d=x.a.aJ("Link")
x=z.E(0,"Other")
x.d=x.a.aJ("Other")
this.b=z},
n:{
hT:function(a,b){var z=new V.hS()
z.dA(a,!0)
return z}}},
hV:{"^":"r:13;a",
$1:function(a){P.e2(C.l,new V.hU(this.a))}},
hU:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.i.a0(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,F,{"^":"",
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.hT("Test 005",!0)
y=W.ci(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.f8(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],[P.m]))
x=document.getElementById("testCanvas")
if(x==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
w=E.ia(x,!0,!0,!0,!1)
v=new E.aE()
v.a=""
v.b=!0
z=E.aE
u=O.ck(z)
v.y=u
u.bc(v.gfG(),v.gfI())
v.z=null
v.Q=null
v.ch=null
v.cx=null
v.cy=null
v.db=null
v.dx=null
v.dy=null
v.fr=null
v.fx=null
v.sc5(0,null)
v.saD(null)
t=F.dU()
F.bu(t,null,null,1,1,1,0,0,1)
F.bu(t,null,null,1,1,0,1,0,3)
F.bu(t,null,null,1,1,0,0,1,2)
F.bu(t,null,null,1,1,-1,0,0,0)
F.bu(t,null,null,1,1,0,-1,0,0)
F.bu(t,null,null,1,1,0,0,-1,3)
t.am()
t.fE(new F.iG(),new F.hl())
v.sc5(0,t)
u=new U.dR()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sdf(0)
u.sd5(0,0)
u.sd9(0)
s=u.d
if(!$.k.$2(s,0.1)){r=u.d
u.d=0.1
s=new D.M("deltaYaw",r,0.1,u,[P.t])
s.b=!0
u.aj(s)}s=u.e
if(!$.k.$2(s,0.21)){r=u.e
u.e=0.21
s=new D.M("deltaPitch",r,0.21,u,[P.t])
s.b=!0
u.aj(s)}s=u.f
if(!$.k.$2(s,0.32)){r=u.f
u.f=0.32
s=new D.M("deltaRoll",r,0.32,u,[P.t])
s.b=!0
u.aj(s)}v.saD(u)
q=w.f.bT("../resources/CtrlPnlColor.png")
p=new O.h5()
u=O.ck(V.ak)
p.e=u
u.bc(p.ge2(),p.ge3())
u=new O.aR(p,"emission")
u.c=C.b
u.f=new V.Z(0,0,0)
p.f=u
u=new O.aR(p,"ambient")
u.c=C.b
u.f=new V.Z(0,0,0)
p.r=u
u=new O.aR(p,"diffuse")
u.c=C.b
u.f=new V.Z(0,0,0)
p.x=u
u=new O.aR(p,"invDiffuse")
u.c=C.b
u.f=new V.Z(0,0,0)
p.y=u
u=new O.hc(p,"specular")
u.c=C.b
u.f=new V.Z(0,0,0)
u.ch=100
p.z=u
u=new O.h9(p,"bump")
u.c=C.b
p.Q=u
p.ch=null
u=new O.aR(p,"reflect")
u.c=C.b
u.f=new V.Z(0,0,0)
p.cx=u
u=new O.hb(p,"refract")
u.c=C.b
u.f=new V.Z(0,0,0)
u.ch=1
p.cy=u
u=new O.h8(p,"alpha")
u.c=C.b
u.f=1
p.db=u
u=new D.fS()
u.ca(D.Q)
u.e=H.b([],[D.bU])
u.f=H.b([],[D.hq])
u.r=H.b([],[D.hX])
u.x=H.b([],[D.i6])
u.y=H.b([],[D.i7])
u.z=H.b([],[D.i8])
u.Q=null
u.ch=null
u.c4(u.ge1(),u.gel(),u.gem())
p.dx=u
s=u.Q
if(s==null){s=D.af()
u.Q=s
u=s}else u=s
s={func:1,ret:-1,args:[D.u]}
o=H.f(p.gev(),s)
C.a.h(u.a,o)
o=p.dx
u=o.ch
if(u==null){u=D.af()
o.ch=u}o=H.f(p.gaN(),s)
C.a.h(u.a,o)
p.dy=null
o=p.dx
u=U.df(V.dE(new V.as(0,0,0),new V.H(0,1,0),new V.H(1,-1,-3)))
n=new V.Z(1,1,1)
m=new D.bU()
m.c=new V.Z(1,1,1)
m.a=new V.H(0,0,1)
r=m.b
m.b=u
u=u.gB()
u.toString
l=H.f(m.gdE(),s)
C.a.h(u.a,l)
u=new D.M("mover",r,m.b,m,[U.bI])
u.b=!0
m.af(u)
if(!m.c.p(0,n)){r=m.c
m.c=n
u=new D.M("color",r,n,m,[V.Z])
u.b=!0
m.af(u)}o.h(0,m)
p.f.sb9(w.f.bT("../resources/CtrlPnlEmission.png"))
u=p.r
u.sa9(0,new V.Z(0.2,0.2,0.2))
u=p.x
u.sa9(0,new V.Z(0.8,0.8,0.8))
p.r.sb9(q)
p.x.sb9(q)
p.z.sb9(w.f.bT("../resources/CtrlPnlSpecular.png"))
u=p.z
if(u.c===C.b){u.c=C.e
u.bf()
u.bt(100)
o=u.a
o.a=null
o.N(null)}u.bt(10)
u=new M.fz()
z=O.ck(z)
u.d=z
z.bc(u.ge5(),u.ge6())
u.e=null
u.f=null
u.r=null
u.x=null
k=new X.ho()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saD(null)
z=k.b
if(!$.k.$2(z,1.0471975511965976)){r=k.b
k.b=1.0471975511965976
z=new D.M("fov",r,1.0471975511965976,k,[P.t])
z.b=!0
k.aw(z)}z=k.c
if(!$.k.$2(z,0.1)){r=k.c
k.c=0.1
z=new D.M("near",r,0.1,k,[P.t])
z.b=!0
k.aw(z)}z=k.d
if(!$.k.$2(z,2000)){r=k.d
k.d=2000
z=new D.M("far",r,2000,k,[P.t])
z.b=!0
k.aw(z)}z=u.a
if(z!==k){if(z!=null){z=z.gB()
z.toString
o=H.f(u.ga2(),s)
C.a.F(z.a,o)}r=u.a
u.a=k
z=k.gB()
z.toString
o=H.f(u.ga2(),s)
C.a.h(z.a,o)
z=new D.M("camera",r,u.a,u,[X.db])
z.b=!0
u.ag(z)}j=new X.fH()
z=new V.bS(0,0,0,1)
j.a=z
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
z=V.dQ(0,0,1,1)
j.r=z
z=u.b
if(z!==j){if(z!=null){z=z.gB()
z.toString
o=H.f(u.ga2(),s)
C.a.F(z.a,o)}r=u.b
u.b=j
z=j.gB()
z.toString
o=H.f(u.ga2(),s)
C.a.h(z.a,o)
z=new D.M("target",r,u.b,u,[X.dZ])
z.b=!0
u.ag(z)}u.sdc(null)
u.sdc(p)
u.d.h(0,v)
u.a.saD(U.df(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=w.d
if(z!==u){if(z!=null){z=z.gB()
z.toString
o=H.f(w.gcb(),s)
C.a.F(z.a,o)}w.d=u
z=u.gB()
z.toString
s=H.f(w.gcb(),s)
C.a.h(z.a,s)
w.dC()}V.kL(w)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dv.prototype
return J.du.prototype}if(typeof a=="string")return J.cq.prototype
if(a==null)return J.dw.prototype
if(typeof a=="boolean")return J.fM.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.bO=function(a){if(typeof a=="string")return J.cq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.cW=function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.kt=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cJ.prototype
return a}
J.c9=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).p(a,b)}
J.f5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kt(a).ad(a,b)}
J.f6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kC(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bO(a).j(a,b)}
J.f7=function(a,b,c,d){return J.c9(a).cA(a,b,c,d)}
J.cd=function(a,b,c){return J.bO(a).fe(a,b,c)}
J.d3=function(a,b){return J.cW(a).v(a,b)}
J.f8=function(a,b){return J.cW(a).H(a,b)}
J.aM=function(a){return J.I(a).gM(a)}
J.bC=function(a){return J.cW(a).gO(a)}
J.b3=function(a){return J.bO(a).gk(a)}
J.a1=function(a){return J.I(a).i(a)}
I.cZ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ch.prototype
C.x=J.n.prototype
C.a=J.aP.prototype
C.y=J.du.prototype
C.f=J.dv.prototype
C.z=J.dw.prototype
C.i=J.bZ.prototype
C.h=J.cq.prototype
C.G=J.bF.prototype
C.I=H.hj.prototype
C.J=W.hk.prototype
C.p=J.hp.prototype
C.K=P.cA.prototype
C.m=J.cJ.prototype
C.r=W.bs.prototype
C.t=W.iP.prototype
C.u=new P.hn()
C.v=new P.iA()
C.j=new P.jB()
C.b=new A.bT(0,"ColorSourceType.None")
C.e=new A.bT(1,"ColorSourceType.Solid")
C.c=new A.bT(2,"ColorSourceType.Texture2D")
C.d=new A.bT(3,"ColorSourceType.TextureCube")
C.l=new P.b7(0)
C.w=new P.b7(5e6)
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
C.H=H.b(I.cZ([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iz(!1)
$.aj=0
$.b4=null
$.d6=null
$.cP=!1
$.eW=null
$.eQ=null
$.f1=null
$.c8=null
$.cb=null
$.cX=null
$.aY=null
$.bw=null
$.bx=null
$.cQ=!1
$.L=C.j
$.dn=null
$.dm=null
$.dl=null
$.dk=null
$.k=V.hd()
$.dJ=null
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
I.$lazy(y,x,w)}})(["dj","$get$dj",function(){return H.eV("_$dart_dartClosure")},"cr","$get$cr",function(){return H.eV("_$dart_js")},"e7","$get$e7",function(){return H.al(H.c2({
toString:function(){return"$receiver$"}}))},"e8","$get$e8",function(){return H.al(H.c2({$method$:null,
toString:function(){return"$receiver$"}}))},"e9","$get$e9",function(){return H.al(H.c2(null))},"ea","$get$ea",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.al(H.c2(void 0))},"ef","$get$ef",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.al(H.ed(null))},"eb","$get$eb",function(){return H.al(function(){try{null.$method$}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.al(H.ed(void 0))},"eg","$get$eg",function(){return H.al(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cM","$get$cM",function(){return P.iQ()},"by","$get$by",function(){return[]},"eK","$get$eK",function(){return P.hD("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dh","$get$dh",function(){return{}},"es","$get$es",function(){return Z.ac(0)},"eq","$get$eq",function(){return Z.ac(511)},"ax","$get$ax",function(){return Z.ac(1)},"aw","$get$aw",function(){return Z.ac(2)},"av","$get$av",function(){return Z.ac(4)},"ay","$get$ay",function(){return Z.ac(8)},"az","$get$az",function(){return Z.ac(16)},"bq","$get$bq",function(){return Z.ac(32)},"br","$get$br",function(){return Z.ac(64)},"er","$get$er",function(){return Z.ac(96)},"aW","$get$aW",function(){return Z.ac(128)},"au","$get$au",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.G,args:[F.ag]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[W.a2]},{func:1,ret:-1,args:[P.C,[P.i,E.aE]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.C,[P.i,V.ak]]},{func:1,ret:P.G,args:[W.a2]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.C,[P.i,D.Q]]},{func:1,ret:P.G,args:[,,]},{func:1,args:[,]},{func:1,ret:P.m,args:[P.C]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.G,args:[P.T]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ad,args:[W.J]},{func:1,ret:P.ad,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.ad,args:[[P.i,D.Q]]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:P.G,args:[F.an,P.t,P.t]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[P.m]},{func:1,ret:P.G,args:[P.aT]},{func:1,args:[,P.m]},{func:1,ret:W.X,args:[W.J]}]
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
if(x==y)H.kO(d||a)
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
Isolate.cZ=a.cZ
Isolate.cU=a.cU
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
if(typeof dartMainRunner==="function")dartMainRunner(F.eZ,[])
else F.eZ([])})})()
//# sourceMappingURL=test.dart.js.map
