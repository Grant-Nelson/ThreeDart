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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dD(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dE=function(){}
var dart=[["","",,H,{"^":"",nI:{"^":"b;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dH==null){H.mB()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ca("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d4()]
if(v!=null)return v
v=H.mE(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
v:function(a,b){return a===b},
gT:function(a){return H.bM(a)},
i:["ev",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i0:{"^":"q;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa5:1},
eg:{"^":"q;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isE:1},
d5:{"^":"q;",
gT:function(a){return 0},
i:["ew",function(a){return String(a)}]},
iF:{"^":"d5;"},
cz:{"^":"d5;"},
c5:{"^":"d5;",
i:function(a){var z=a[$.$get$e1()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd0:1},
bc:{"^":"q;$ti",
h:function(a,b){H.y(b,H.x(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
a0:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aZ(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hJ:function(a){return this.B(a,"")},
hC:function(a,b,c,d){var z,y,x
H.y(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aZ(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bK:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.x(a,0)])
return H.e(a.slice(b,c),[H.x(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hZ())},
aw:function(a,b,c,d){var z
H.y(d,H.x(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aS(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.C(0,1))a[z]=d},
b_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.d2(a,"[","]")},
ga_:function(a){return new J.av(a,a.length,0,[H.x(a,0)])},
gT:function(a){return H.bM(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cf(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.y(c,H.x(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isk:1,
$isd:1,
p:{
i_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.ed(new Array(a),b)},
ed:function(a,b){return J.bG(H.e(a,[b]))},
bG:function(a){H.c_(a)
a.fixed$length=Array
return a}}},
nH:{"^":"bc;$ti"},
av:{"^":"b;a,b,c,0d,$ti",
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
cq:{"^":"q;",
il:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cn:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
ei:function(a,b){var z,y
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b9:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aM(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
be:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aI:function(a,b){var z
if(a>0)z=this.dd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fT:function(a,b){if(b<0)throw H.a(H.ai(b))
return this.dd(a,b)},
dd:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a<b},
$isz:1,
$isX:1},
ef:{"^":"cq;",$ism:1},
ee:{"^":"cq;"},
cr:{"^":"q;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.p(H.aL(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cf(b,null,null))
return a+b},
aS:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ai(b))
c=P.aS(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ai(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ai(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.cw(b,null,null))
if(b>c)throw H.a(P.cw(b,null,null))
if(c>a.length)throw H.a(P.cw(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.u(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hZ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ae:function(a,b){return this.hZ(a,b," ")},
dZ:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dY:function(a,b){return this.dZ(a,b,0)},
hr:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.h1(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isev:1,
$isj:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hZ:function(){return new P.jg("No element")},
a6:{"^":"jS;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ascA:function(){return[P.m]},
$asv:function(){return[P.m]},
$ask:function(){return[P.m]},
$asd:function(){return[P.m]}},
hB:{"^":"k;"},
el:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aZ(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
il:{"^":"k;a,b,$ti",
ga_:function(a){return new H.im(J.bA(this.a),this.b,this.$ti)},
gk:function(a){return J.au(this.a)},
J:function(a,b){return this.b.$1(J.cP(this.a,b))},
$ask:function(a,b){return[b]}},
im:{"^":"d3;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$asd3:function(a,b){return[b]}},
kk:{"^":"k;a,b,$ti",
ga_:function(a){return new H.kl(J.bA(this.a),this.b,this.$ti)}},
kl:{"^":"d3;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cm:{"^":"b;$ti"},
cA:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.y(c,H.aC(this,"cA",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.y(d,H.aC(this,"cA",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jS:{"^":"cs+cA;"}}],["","",,H,{"^":"",
hq:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mw:function(a){return init.types[H.C(a)]},
fV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.ai(a))
return z},
bM:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iQ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.J(a).$iscz){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aA(w,1)
r=H.dI(H.c_(H.b5(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iI:function(){if(!!self.location)return self.location.href
return},
ey:function(a){var z,y,x,w,v
H.c_(a)
z=J.au(a)
if(typeof z!=="number")return z.eq()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iR:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ai(w))}return H.ey(z)},
ez:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ai(x))
if(x<0)throw H.a(H.ai(x))
if(x>65535)return H.iR(a)}return H.ey(a)},
iS:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cu:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aI(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){return a.b?H.ah(a).getUTCFullYear()+0:H.ah(a).getFullYear()+0},
iN:function(a){return a.b?H.ah(a).getUTCMonth()+1:H.ah(a).getMonth()+1},
iJ:function(a){return a.b?H.ah(a).getUTCDate()+0:H.ah(a).getDate()+0},
iK:function(a){return a.b?H.ah(a).getUTCHours()+0:H.ah(a).getHours()+0},
iM:function(a){return a.b?H.ah(a).getUTCMinutes()+0:H.ah(a).getMinutes()+0},
iO:function(a){return a.b?H.ah(a).getUTCSeconds()+0:H.ah(a).getSeconds()+0},
iL:function(a){return a.b?H.ah(a).getUTCMilliseconds()+0:H.ah(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ai(a))},
h:function(a,b){if(a==null)J.au(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.C(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cw(b,"index",null)},
mr:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
ai:function(a){return new P.aN(!0,a,null,null)},
mm:function(a){if(typeof a!=="number")throw H.a(H.ai(a))
return a},
a:function(a){var z
if(a==null)a=new P.eu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h3})
z.name=""}else z.toString=H.h3
return z},
h3:function(){return J.aa(this.dartException)},
p:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aZ(a))},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d6(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.et(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eP()
u=$.$get$eQ()
t=$.$get$eR()
s=$.$get$eS()
r=$.$get$eW()
q=$.$get$eX()
p=$.$get$eU()
$.$get$eT()
o=$.$get$eZ()
n=$.$get$eY()
m=v.ad(y)
if(m!=null)return z.$1(H.d6(H.M(y),m))
else{m=u.ad(y)
if(m!=null){m.method="call"
return z.$1(H.d6(H.M(y),m))}else{m=t.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=r.ad(y)
if(m==null){m=q.ad(y)
if(m==null){m=p.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=o.ad(y)
if(m==null){m=n.ad(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.et(H.M(y),m))}}return z.$1(new H.jR(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
by:function(a){var z
if(a==null)return new H.ft(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ft(a)},
mu:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mD:function(a,b,c,d,e,f){H.c(a,"$isd0")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mD)
a.$identity=z
return z},
hm:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.iV(z).r}else x=d
w=e?Object.create(new H.jh().constructor.prototype):Object.create(new H.cS(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.C()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dY(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mw,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dS:H.cT
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
hj:function(a,b,c,d){var z=H.cT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dY:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hl(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hj(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.C()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bB
if(v==null){v=H.cg("self")
$.bB=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.C()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bB
if(v==null){v=H.cg("self")
$.bB=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hk:function(a,b,c,d){var z,y
z=H.cT
y=H.dS
switch(b?-1:a){case 0:throw H.a(H.j4("Intercepted function with no arguments."))
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
z=$.bB
if(z==null){z=H.cg("self")
$.bB=z}y=$.dR
if(y==null){y=H.cg("receiver")
$.dR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hk(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aE
if(typeof y!=="number")return y.C()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.C()
$.aE=y+1
return new Function(z+y+"}")()},
dD:function(a,b,c,d,e,f,g){var z,y
z=J.bG(H.c_(b))
H.C(c)
y=!!J.J(d).$isd?J.bG(d):d
return H.hm(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
ms:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
mI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
h_:function(a,b){throw H.a(H.ay(a,H.M(b).substring(3)))},
mK:function(a,b){var z=J.aM(b)
throw H.a(H.hi(a,z.u(b,3,z.gk(b))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.h_(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.mK(a,b)},
c_:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.a(H.ay(a,"List"))},
fX:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.h_(a,b)},
fR:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
cb:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fR(J.J(a))
if(z==null)return!1
y=H.fU(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dz)return a
$.dz=!0
try{if(H.cb(a,b))return a
z=H.cd(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dz=!1}},
dF:function(a,b){if(a!=null&&!H.dC(a,b))H.p(H.ay(a,H.cd(b)))
return a},
fL:function(a){var z
if(a instanceof H.n){z=H.fR(J.J(a))
if(z!=null)return H.cd(z)
return"Closure"}return H.bg(a)},
mP:function(a){throw H.a(new P.ht(H.M(a)))},
fS:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
oE:function(a,b,c){return H.bz(a["$as"+H.l(c)],H.b5(b))},
aY:function(a,b,c,d){var z
H.M(c)
H.C(d)
z=H.bz(a["$as"+H.l(c)],H.b5(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.M(b)
H.C(c)
z=H.bz(a["$as"+H.l(b)],H.b5(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.b5(a)
return z==null?null:z[b]},
cd:function(a){var z=H.b6(a,null)
return z},
b6:function(a,b){var z,y
H.w(b,"$isd",[P.j],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dI(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.mc(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b6(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b6(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b6(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b6(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b6(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dI:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.j],"$asd")
if(a==null)return""
z=new P.ao("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b6(u,c)}v="<"+z.i(0)+">"
return v},
bz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bv:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b5(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fO(H.bz(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.c_(c)
H.M(d)
if(a==null)return a
z=H.bv(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dI(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fO:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
oC:function(a,b,c){return a.apply(b,H.bz(J.J(b)["$as"+H.l(c)],H.b5(b)))},
fW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.fW(z)}return!1},
dC:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.fW(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cb(a,b)}y=J.J(a).constructor
x=H.b5(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.dC(a,b))throw H.a(H.ay(a,H.cd(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fU(a,b,c,d)
if('func' in a)return c.builtin$cls==="d0"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bz(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cd(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fO(H.bz(r,z),b,u,d)},
fU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mH(m,b,l,d)},
mH:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
oD:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mE:function(a){var z,y,x,w,v,u
z=H.M($.fT.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fN.$2(a,z))
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
return u.i}if(v==="+")return H.fZ(a,x)
if(v==="*")throw H.a(P.ca(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fZ(a,x)},
fZ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dJ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dJ(a,!1,null,!!a.$isF)},
mG:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dJ(z,c,null,null)},
mB:function(){if(!0===$.dH)return
$.dH=!0
H.mC()},
mC:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mx()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h0.$1(v)
if(u!=null){t=H.mG(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mx:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bu(C.J,H.bu(C.O,H.bu(C.u,H.bu(C.u,H.bu(C.N,H.bu(C.K,H.bu(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fT=new H.my(v)
$.fN=new H.mz(u)
$.h0=new H.mA(t)},
bu:function(a,b){return a(b)||b},
h1:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h2:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hp:{"^":"b;$ti",
i:function(a){return P.d7(this)},
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
return H.hq()},
$isK:1},
hr:{"^":"hp;a,b,c,$ti",
gk:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.d3(b)},
d3:function(a){return this.b[H.M(a)]},
E:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.d3(v),z))}}},
iU:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iV:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bG(z)
y=z[0]
x=z[1]
return new H.iU(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jE:{"^":"b;a,b,c,d,e,f",
ad:function(a){var z,y,x
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
if(z==null)z=H.e([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iC:{"^":"a7;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
et:function(a,b){return new H.iC(a,b==null?null:b.method)}}},
i3:{"^":"a7;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d6:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i3(a,y,z?null:b.receiver)}}},
jR:{"^":"a7;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mQ:{"^":"n:16;a",
$1:function(a){if(!!J.J(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ft:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gen:function(){return this},
$isd0:1,
gen:function(){return this}},
eH:{"^":"n;"},
jh:{"^":"eH;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cS:{"^":"eH;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bM(this.a)
else y=typeof z!=="object"?J.b7(z):H.bM(z)
return(y^H.bM(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
cT:function(a){return a.a},
dS:function(a){return a.c},
cg:function(a){var z,y,x,w,v
z=new H.cS("self","target","receiver","name")
y=J.bG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jF:{"^":"a7;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.jF("TypeError: "+H.l(P.cl(a))+": type '"+H.fL(a)+"' is not a subtype of type '"+b+"'")}}},
hh:{"^":"a7;a",
i:function(a){return this.a},
p:{
hi:function(a,b){return new H.hh("CastError: "+H.l(P.cl(a))+": type '"+H.fL(a)+"' is not a subtype of type '"+b+"'")}}},
j3:{"^":"a7;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j4:function(a){return new H.j3(a)}}},
aQ:{"^":"ii;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gal:function(a){return new H.i7(this,[H.x(this,0)])},
bp:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d0(y,b)}else return this.hG(b)},
hG:function(a){var z=this.d
if(z==null)return!1
return this.cq(this.bT(z,this.cp(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hH(b)},
hH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bT(z,this.cp(a))
x=this.cq(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bX()
this.b=z}this.cR(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bX()
this.c=y}this.cR(y,b,c)}else this.hI(b,c)},
hI:function(a,b){var z,y,x,w
H.y(a,H.x(this,0))
H.y(b,H.x(this,1))
z=this.d
if(z==null){z=this.bX()
this.d=z}y=this.cp(a)
x=this.bT(z,y)
if(x==null)this.c1(z,y,[this.bY(a,b)])
else{w=this.cq(x,a)
if(w>=0)x[w].b=b
else x.push(this.bY(a,b))}},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aZ(this))
z=z.c}},
cR:function(a,b,c){var z
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
z=this.bg(a,b)
if(z==null)this.c1(a,b,this.bY(b,c))
else z.b=c},
f4:function(){this.r=this.r+1&67108863},
bY:function(a,b){var z,y
z=new H.i6(H.y(a,H.x(this,0)),H.y(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f4()
return z},
cp:function(a){return J.b7(a)&0x3ffffff},
cq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.d7(this)},
bg:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
d0:function(a,b){return this.bg(a,b)!=null},
bX:function(){var z=Object.create(null)
this.c1(z,"<non-identifier-key>",z)
this.eY(z,"<non-identifier-key>")
return z},
$isej:1},
i6:{"^":"b;a,b,0c,0d"},
i7:{"^":"hB;a,$ti",
gk:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i8(z,z.r,this.$ti)
y.c=z.e
return y}},
i8:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aZ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
my:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mz:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
mA:{"^":"n:28;a",
$1:function(a){return this.a(H.M(a))}},
i1:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isev:1,
$isiW:1,
p:{
i2:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Z("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mt:function(a){return J.ed(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){return a},
iz:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
m6:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mr(a,b,c))
return b},
es:{"^":"q;",$ises:1,"%":"ArrayBuffer"},
dc:{"^":"q;",$isdc:1,$isjG:1,"%":"DataView;ArrayBufferView;db|fn|fo|iA|fp|fq|b1"},
db:{"^":"dc;",
gk:function(a){return a.length},
$isF:1,
$asF:I.dE},
iA:{"^":"fo;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.ms(c)
H.aK(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.z]},
$asv:function(){return[P.z]},
$isk:1,
$ask:function(){return[P.z]},
$isd:1,
$asd:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
b1:{"^":"fq;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aK(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.m]},
$asv:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
nS:{"^":"b1;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nT:{"^":"b1;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nU:{"^":"b1;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nV:{"^":"b1;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nW:{"^":"b1;",
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nX:{"^":"b1;",
gk:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dd:{"^":"b1;",
gk:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
bK:function(a,b,c){return new Uint8Array(a.subarray(b,H.m6(b,c,a.length)))},
$isdd:1,
$isP:1,
"%":";Uint8Array"},
fn:{"^":"db+v;"},
fo:{"^":"fn+cm;"},
fp:{"^":"db+v;"},
fq:{"^":"fp+cm;"}}],["","",,P,{"^":"",
kn:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bw(new P.kp(z),1)).observe(y,{childList:true})
return new P.ko(z,y,x)}else if(self.setImmediate!=null)return P.mk()
return P.ml()},
or:[function(a){self.scheduleImmediate(H.bw(new P.kq(H.f(a,{func:1,ret:-1})),0))},"$1","mj",4,0,13],
os:[function(a){self.setImmediate(H.bw(new P.kr(H.f(a,{func:1,ret:-1})),0))},"$1","mk",4,0,13],
ot:[function(a){P.dm(C.r,H.f(a,{func:1,ret:-1}))},"$1","ml",4,0,13],
dm:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a3(a.a,1000)
return P.lq(z<0?0:z,b)},
eK:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bn]})
z=C.d.a3(a.a,1000)
return P.lr(z<0?0:z,b)},
mf:function(a,b){if(H.cb(a,{func:1,args:[P.b,P.ax]}))return b.i7(a,null,P.b,P.ax)
if(H.cb(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
me:function(){var z,y
for(;z=$.bt,z!=null;){$.bX=null
y=z.b
$.bt=y
if(y==null)$.bW=null
z.a.$0()}},
oB:[function(){$.dA=!0
try{P.me()}finally{$.bX=null
$.dA=!1
if($.bt!=null)$.$get$du().$1(P.fP())}},"$0","fP",0,0,3],
fK:function(a){var z=new P.fg(H.f(a,{func:1,ret:-1}))
if($.bt==null){$.bW=z
$.bt=z
if(!$.dA)$.$get$du().$1(P.fP())}else{$.bW.b=z
$.bW=z}},
mi:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.fK(a)
$.bX=$.bW
return}y=new P.fg(a)
x=$.bX
if(x==null){y.b=z
$.bX=y
$.bt=y}else{y.b=x.b
x.b=y
$.bX=y
if(y.b==null)$.bW=y}},
mL:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.i===y){P.cH(null,null,C.i,a)
return}y.toString
P.cH(null,null,y,H.f(y.c6(a),z))},
jA:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.i){y.toString
return P.dm(a,b)}return P.dm(a,H.f(y.c6(b),z))},
jB:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bn]}
H.f(b,z)
y=$.T
if(y===C.i){y.toString
return P.eK(a,b)}x=y.dm(b,P.bn)
$.T.toString
return P.eK(a,H.f(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.mi(new P.mg(z,e))},
fG:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fH:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mh:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cH:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.c6(d):c.hq(d,-1)
P.fK(d)},
kp:{"^":"n:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ko:{"^":"n:33;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kq:{"^":"n:2;a",
$0:function(){this.a.$0()}},
kr:{"^":"n:2;a",
$0:function(){this.a.$0()}},
fw:{"^":"b;a,0b,c",
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bw(new P.lt(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eK:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bw(new P.ls(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbn:1,
p:{
lq:function(a,b){var z=new P.fw(!0,0)
z.eJ(a,b)
return z},
lr:function(a,b){var z=new P.fw(!1,0)
z.eK(a,b)
return z}}},
lt:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ls:{"^":"n:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ez(w,x)}z.c=y
this.d.$1(z)}},
br:{"^":"b;0a,b,c,d,e,$ti",
hP:function(a){if(this.c!==6)return!0
return this.b.b.cD(H.f(this.d,{func:1,ret:P.a5,args:[P.b]}),a.a,P.a5,P.b)},
hF:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cb(z,{func:1,args:[P.b,P.ax]}))return H.dF(w.ic(z,a.a,a.b,null,y,P.ax),x)
else return H.dF(w.cD(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aW:{"^":"b;de:a<,b,0fM:c<,$ti",
eh:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.i){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mf(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aW(0,$.T,[c])
w=b==null?1:3
this.cS(new P.br(x,w,a,b,[z,c]))
return x},
ik:function(a,b){return this.eh(a,null,b)},
cS:function(a){var z,y
z=this.a
if(z<=1){a.a=H.c(this.c,"$isbr")
this.c=a}else{if(z===2){y=H.c(this.c,"$isaW")
z=y.a
if(z<4){y.cS(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.f(new P.kG(this,a),{func:1,ret:-1}))}},
d8:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.c(this.c,"$isbr")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.c(this.c,"$isaW")
y=u.a
if(y<4){u.d8(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cH(null,null,y,H.f(new P.kL(z,this),{func:1,ret:-1}))}},
c_:function(){var z=H.c(this.c,"$isbr")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cY:function(a){var z,y,x,w
z=H.x(this,0)
H.dF(a,{futureOr:1,type:z})
y=this.$ti
x=H.bv(a,"$isbE",y,"$asbE")
if(x){z=H.bv(a,"$isaW",y,null)
if(z)P.fj(a,this)
else P.kH(a,this)}else{w=this.c_()
H.y(a,z)
this.a=4
this.c=a
P.bR(this,w)}},
bP:[function(a,b){var z
H.c(b,"$isax")
z=this.c_()
this.a=8
this.c=new P.am(a,b)
P.bR(this,z)},function(a){return this.bP(a,null)},"iv","$2","$1","geU",4,2,29],
$isbE:1,
p:{
kH:function(a,b){var z,y,x
b.a=1
try{a.eh(new P.kI(b),new P.kJ(b),null)}catch(x){z=H.aD(x)
y=H.by(x)
P.mL(new P.kK(b,z,y))}},
fj:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.c(a.c,"$isaW")
if(z>=4){y=b.c_()
b.a=a.a
b.c=a.c
P.bR(b,y)}else{y=H.c(b.c,"$isbr")
b.a=2
b.c=a
a.d8(y)}},
bR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.c(y.c,"$isam")
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
if(p){H.c(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cG(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kO(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kN(x,b,r).$0()}else if((y&2)!==0)new P.kM(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.J(y).$isbE){if(y.a>=4){n=H.c(t.c,"$isbr")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fj(y,t)
return}}m=b.b
n=H.c(m.c,"$isbr")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.y(u,H.x(m,0))
m.a=4
m.c=u}else{H.c(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kG:{"^":"n:2;a,b",
$0:function(){P.bR(this.a,this.b)}},
kL:{"^":"n:2;a,b",
$0:function(){P.bR(this.b,this.a.a)}},
kI:{"^":"n:19;a",
$1:function(a){var z=this.a
z.a=0
z.cY(a)}},
kJ:{"^":"n:34;a",
$2:function(a,b){this.a.bP(a,H.c(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kK:{"^":"n:2;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
kO:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eg(H.f(w.d,{func:1}),null)}catch(v){y=H.aD(v)
x=H.by(v)
if(this.d){w=H.c(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.c(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.J(z).$isbE){if(z instanceof P.aW&&z.gde()>=4){if(z.gde()===8){w=this.b
w.b=H.c(z.gfM(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ik(new P.kP(t),null)
w.a=!1}}},
kP:{"^":"n:46;a",
$1:function(a){return this.a}},
kN:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.y(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cD(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aD(t)
y=H.by(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kM:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.c(this.a.a.c,"$isam")
w=this.c
if(w.hP(z)&&w.e!=null){v=this.b
v.b=w.hF(z)
v.a=!1}}catch(u){y=H.aD(u)
x=H.by(u)
w=H.c(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fg:{"^":"b;a,0b"},
dj:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aW(0,$.T,[P.m])
z.a=0
this.hM(new P.jk(z,this),!0,new P.jl(z,y),y.geU())
return y}},
jk:{"^":"n;a,b",
$1:function(a){H.y(a,H.aC(this.b,"dj",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aC(this.b,"dj",0)]}}},
jl:{"^":"n:2;a,b",
$0:function(){this.b.cY(this.a.a)}},
eE:{"^":"b;$ti"},
jj:{"^":"b;"},
bn:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa7:1},
lV:{"^":"b;",$isoq:1},
mg:{"^":"n:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eu()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l8:{"^":"lV;",
ie:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.i===$.T){a.$0()
return}P.fG(null,null,this,a,-1)}catch(x){z=H.aD(x)
y=H.by(x)
P.cG(null,null,this,z,H.c(y,"$isax"))}},
ig:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.i===$.T){a.$1(b)
return}P.fH(null,null,this,a,b,-1,c)}catch(x){z=H.aD(x)
y=H.by(x)
P.cG(null,null,this,z,H.c(y,"$isax"))}},
hq:function(a,b){return new P.la(this,H.f(a,{func:1,ret:b}),b)},
c6:function(a){return new P.l9(this,H.f(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.lb(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eg:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.i)return a.$0()
return P.fG(null,null,this,a,b)},
cD:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.i)return a.$1(b)
return P.fH(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.i)return a.$2(b,c)
return P.mh(null,null,this,a,b,c,d,e,f)},
i7:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
la:{"^":"n;a,b,c",
$0:function(){return this.a.eg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l9:{"^":"n:3;a,b",
$0:function(){return this.a.ie(this.b)}},
lb:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i9:function(a,b,c,d,e){return new H.aQ(0,0,[d,e])},
ia:function(a,b,c){H.c_(a)
return H.w(H.mu(a,new H.aQ(0,0,[b,c])),"$isej",[b,c],"$asej")},
ek:function(a,b){return new H.aQ(0,0,[a,b])},
id:function(a,b,c,d){return new P.kV(0,0,[d])},
hY:function(a,b,c){var z,y
if(P.dB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bY()
C.a.h(y,a)
try{P.md(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eF(b,H.fX(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
d2:function(a,b,c){var z,y,x
if(P.dB(a))return b+"..."+c
z=new P.ao(b)
y=$.$get$bY()
C.a.h(y,a)
try{x=z
x.a=P.eF(x.gaF(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dB:function(a){var z,y
for(z=0;y=$.$get$bY(),z<y.length;++z)if(a===y[z])return!0
return!1},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
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
ib:function(a,b,c){var z=P.i9(null,null,null,b,c)
a.E(0,new P.ic(z,b,c))
return z},
d7:function(a){var z,y,x
z={}
if(P.dB(a))return"{...}"
y=new P.ao("")
try{C.a.h($.$get$bY(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.dN(a,new P.ij(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bY()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
kV:{"^":"kQ;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fm(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dw()
this.b=z}return this.cW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dw()
this.c=y}return this.cW(y,b)}else return this.eL(0,b)},
eL:function(a,b){var z,y,x
H.y(b,H.x(this,0))
z=this.d
if(z==null){z=P.dw()
this.d=z}y=this.cZ(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.d4(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d9(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d9(this.c,b)
else return this.fF(0,b)},
fF:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f0(z,b)
x=this.d4(y,b)
if(x<0)return!1
this.dg(y.splice(x,1)[0])
return!0},
cW:function(a,b){H.y(b,H.x(this,0))
if(H.c(a[b],"$isdv")!=null)return!1
a[b]=this.bO(b)
return!0},
d9:function(a,b){var z
if(a==null)return!1
z=H.c(a[b],"$isdv")
if(z==null)return!1
this.dg(z)
delete a[b]
return!0},
cX:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.dv(H.y(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cX()
return z},
dg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cX()},
cZ:function(a){return J.b7(a)&0x3ffffff},
f0:function(a,b){return a[this.cZ(b)]},
d4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
p:{
dw:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dv:{"^":"b;a,0b,0c"},
kW:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aZ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fm:function(a,b,c){var z=new P.kW(a,b,[c])
z.c=a.e
return z}}},
kQ:{"^":"j5;"},
ic:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cs:{"^":"kX;",$isk:1,$isd:1},
v:{"^":"b;$ti",
ga_:function(a){return new H.el(a,this.gk(a),0,[H.aY(this,a,"v",0)])},
J:function(a,b){return this.j(a,b)},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aY(this,a,"v",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.a(P.aZ(a))}},
io:function(a,b){var z,y,x
z=H.e([],[H.aY(this,a,"v",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
im:function(a){return this.io(a,!0)},
aw:function(a,b,c,d){var z
H.y(d,H.aY(this,a,"v",0))
P.aS(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d2(a,"[","]")}},
ii:{"^":"ak;"},
ij:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ak:{"^":"b;$ti",
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aY(this,a,"ak",0),H.aY(this,a,"ak",1)]})
for(z=J.bA(this.gal(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.au(this.gal(a))},
i:function(a){return P.d7(a)},
$isK:1},
ly:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ik:{"^":"b;$ti",
j:function(a,b){return J.dM(this.a,b)},
m:function(a,b,c){J.cN(this.a,H.y(b,H.x(this,0)),H.y(c,H.x(this,1)))},
E:function(a,b){J.dN(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gk:function(a){return J.au(this.a)},
i:function(a){return J.aa(this.a)},
$isK:1},
f5:{"^":"lz;a,$ti"},
j7:{"^":"b;$ti",
i:function(a){return P.d2(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.p(P.a1(b,0,null,"index",null))
for(z=P.fm(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j5:{"^":"j7;"},
kX:{"^":"b+v;"},
lz:{"^":"ik+ly;$ti"}}],["","",,P,{"^":"",he:{"^":"c1;a",
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aS(c,d,b.length,null,null,null)
z=$.$get$fh()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cK(C.b.H(b,s))
o=H.cK(C.b.H(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ao("")
w.a+=C.b.u(b,x,y)
w.a+=H.cu(r)
x=s
continue}}throw H.a(P.Z("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.dQ(b,u,d,v,t,k)
else{j=C.d.be(k-1,4)+1
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aS(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dQ(b,u,d,v,t,i)
else{j=C.d.be(i,4)
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aS(b,d,d,j===2?"==":"=")}return b},
$asc1:function(){return[[P.d,P.m],P.j]},
p:{
dQ:function(a,b,c,d,e,f){if(C.d.be(f,4)!==0)throw H.a(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Z("Invalid base64 padding, more than two '=' characters",a,b))}}},hf:{"^":"bC;a",
$asbC:function(){return[[P.d,P.m],P.j]}},c1:{"^":"b;$ti"},bC:{"^":"jj;$ti"},hD:{"^":"c1;",
$asc1:function(){return[P.j,[P.d,P.m]]}},k4:{"^":"hD;a",
ghy:function(){return C.F}},kb:{"^":"bC;",
b0:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lU(0,0,x)
if(w.f_(a,b,z)!==z)w.di(J.h8(a,z-1),0)
return C.V.bK(x,0,w.b)},
cb:function(a){return this.b0(a,0,null)},
$asbC:function(){return[P.j,[P.d,P.m]]}},lU:{"^":"b;a,b,c",
di:function(a,b){var z,y,x,w,v
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
f_:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.di(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k5:{"^":"bC;a",
b0:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.m],"$asd")
z=P.k6(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.aS(b,c,y,null,null,null)
x=new P.ao("")
w=new P.lR(!1,x,!0,0,0,0)
w.b0(a,b,y)
w.hB(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cb:function(a){return this.b0(a,0,null)},
$asbC:function(){return[[P.d,P.m],P.j]},
p:{
k6:function(a,b,c,d){H.w(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.k7(!1,b,c,d)
return},
k7:function(a,b,c,d){var z,y,x
z=$.$get$fa()
if(z==null)return
y=0===c
if(y&&!0)return P.ds(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.ds(z,b)
return P.ds(z,b.subarray(c,d))},
ds:function(a,b){if(P.k9(b))return
return P.ka(a,b)},
ka:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aD(y)}return},
k9:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k8:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aD(y)}return}}},lR:{"^":"b;a,b,c,d,e,f",
hB:function(a,b,c){var z
H.w(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.Z("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lT(c)
v=new P.lS(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.Z("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.w,q)
if(z<=C.w[q]){q=P.Z("Overlong encoding of 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Z("Character outside valid Unicode range: 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cu(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cK()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.Z("Negative UTF-8 code unit: -0x"+C.d.b9(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Z("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lT:{"^":"n:27;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lS:{"^":"n:30;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c9(this.d,a,b)}}}],["","",,P,{"^":"",
bZ:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.iQ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Z(a,null,null))},
hF:function(a){var z=J.J(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bg(a)+"'"},
ie:function(a,b,c,d){var z,y
H.y(b,d)
z=J.i_(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
em:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.y(x.gR(x),c))
if(b)return y
return H.w(J.bG(y),"$isd",z,"$asd")},
c9:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isbc",[z],"$asbc")
y=a.length
c=P.aS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.ez(z?C.a.bK(a,b,c):a)}if(!!J.J(a).$isdd)return H.iS(a,b,P.aS(b,c,a.length,null,null,null))
return P.jm(a,b,c)},
jm:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a1(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.au(a),null,null))
y=J.bA(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gR(y))}return H.ez(w)},
iX:function(a,b,c){return new H.i1(a,H.i2(a,!1,!0,!1))},
f7:function(){var z=H.iI()
if(z!=null)return P.jX(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hF(a)},
u:function(a){return new P.fi(a)},
ig:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dL:function(a){H.mJ(a)},
jX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f6(b>0||c<c?C.b.u(a,b,c):a,5,null).gek()
else if(y===32)return P.f6(C.b.u(a,z,c),0,null).gek()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fI(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cJ()
if(v>=b)if(P.fI(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.C()
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aS(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.ld(a,v,u,t,s,r,q,o)}return P.lA(a,b,c,v,u,t,s,r,q,o)},
f9:function(a,b){var z=P.j
return C.a.hC(H.e(a.split("&"),[z]),P.ek(z,z),new P.k_(b),[P.K,P.j,P.j])},
jV:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jW(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bZ(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cK()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bZ(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cK()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jY(a)
y=new P.jZ(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jV(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.d.aI(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
m7:function(){var z,y,x,w,v
z=P.ig(22,new P.m9(),!0,P.P)
y=new P.m8(z)
x=new P.ma()
w=new P.mb()
v=H.c(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.c(y.$2(8,8),"$isP"),"]",5)
v=H.c(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.c(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.c(y.$2(20,245),"$isP"),"az",21)
v=H.c(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fI:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isd",[P.m],"$asd")
z=$.$get$fJ()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
a5:{"^":"b;"},
"+bool":0,
an:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hu(H.iP(this))
y=P.c2(H.iN(this))
x=P.c2(H.iJ(this))
w=P.c2(H.iK(this))
v=P.c2(H.iM(this))
u=P.c2(H.iO(this))
t=P.hv(H.iL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hu:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c2:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"X;"},
"+double":0,
bD:{"^":"b;a",
L:function(a,b){return C.d.L(this.a,H.c(b,"$isbD").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bD))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hA()
y=this.a
if(y<0)return"-"+new P.bD(0-y).i(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hz().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e7:function(a,b,c,d,e,f){return new P.bD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hz:{"^":"n:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hA:{"^":"n:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"b;"},
eu:{"^":"a7;",
i:function(a){return"Throw of null."}},
aN:{"^":"a7;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.cl(this.b)
return w+v+": "+H.l(u)},
p:{
c0:function(a){return new P.aN(!1,null,null,a)},
cf:function(a,b,c){return new P.aN(!0,a,b,c)},
dO:function(a){return new P.aN(!1,null,a,"Must not be null")}}},
cv:{"^":"aN;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
hN:{"^":"aN;e,k:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.h4(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.au(b))
return new P.hN(b,z,!0,a,c,"Index out of range")}}},
jT:{"^":"a7;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jT(a)}}},
jQ:{"^":"a7;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ca:function(a){return new P.jQ(a)}}},
jg:{"^":"a7;a",
i:function(a){return"Bad state: "+this.a}},
ho:{"^":"a7;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cl(z))+"."},
p:{
aZ:function(a){return new P.ho(a)}}},
iD:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa7:1},
eC:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa7:1},
ht:{"^":"a7;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fi:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hK:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
p:{
Z:function(a,b,c){return new P.hK(a,b,c)}}},
m:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.p(P.a1(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hY(this,"(",")")}},
d3:{"^":"b;$ti"},
d:{"^":"b;$ti",$isk:1},
"+List":0,
K:{"^":"b;$ti"},
E:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gT:function(a){return H.bM(this)},
i:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
j:{"^":"b;",$isev:1},
"+String":0,
ao:{"^":"b;aF:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isod:1,
p:{
eF:function(a,b,c){var z=J.bA(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
k_:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.w(a,"$isK",[z,z],"$asK")
H.M(b)
y=J.aM(b).dY(b,"=")
if(y===-1){if(b!=="")J.cN(a,P.dy(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cN(a,P.dy(x,0,x.length,z,!0),P.dy(w,0,w.length,z,!0))}return a}},
jW:{"^":"n:45;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv4 address, "+a,this.a,b))}},
jY:{"^":"n:50;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jZ:{"^":"n:49;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bZ(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cD:{"^":"b;bI:a<,b,c,d,e9:e>,f,r,0x,0y,0z,0Q,0ch",
gel:function(){return this.b},
gco:function(a){var z=this.c
if(z==null)return""
if(C.b.a9(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbD:function(a){var z=this.d
if(z==null)return P.fy(this.a)
return z},
gcA:function(a){var z=this.f
return z==null?"":z},
gdT:function(){var z=this.r
return z==null?"":z},
cC:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
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
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dx(g,0,0,h)
return new P.cD(i,j,c,f,d,g,this.r)},
ef:function(a,b){return this.cC(a,null,null,null,null,null,null,b,null,null)},
gcB:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f5(P.f9(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
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
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdr){y=this.a
x=b.gbI()
if(y==null?x==null:y===x)if(this.c!=null===b.gdU()){y=this.b
x=b.gel()
if(y==null?x==null:y===x){y=this.gco(this)
x=z.gco(b)
if(y==null?x==null:y===x){y=this.gbD(this)
x=z.gbD(b)
if(y==null?x==null:y===x)if(this.e===z.ge9(b)){y=this.f
x=y==null
if(!x===b.gdX()){if(x)y=""
if(y===z.gcA(b)){z=this.r
y=z==null
if(!y===b.gdV()){if(y)z=""
z=z===b.gdT()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdr:1,
p:{
cE:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$fD().b
if(typeof b!=="string")H.p(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.aC(c,"c1",0))
y=c.ghy().cb(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cu(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lA:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lL(a,b,d)
else{if(d===b)P.bT(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lM(a,z,e-1):""
x=P.lF(a,e,f,!1)
if(typeof f!=="number")return f.C()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lI(P.bZ(C.b.u(a,w,g),new P.lB(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lG(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.dx(a,h+1,i,null):null
return new P.cD(j,y,x,v,u,t,i<c?P.lE(a,i+1,c):null)},
fy:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bT:function(a,b,c){throw H.a(P.Z(c,a,b))},
lI:function(a,b){if(a!=null&&a===P.fy(b))return
return a},
lF:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.b.X(a,z)!==93)P.bT(a,b,"Missing end `]` to match `[` in host")
P.f8(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.f8(a,b,c)
return"["+a+"]"}return P.lO(a,b,c)},
lO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fF(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ao("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ao("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bT(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ao("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fz(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lL:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fB(C.b.H(a,b)))P.bT(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bT(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.lC(y?a.toLowerCase():a)},
lC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lM:function(a,b,c){return P.bU(a,b,c,C.R)},
lG:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bU(a,b,c,C.y):C.t.j6(d,new P.lH(),P.j).B(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a9(w,"/"))w="/"+w
return P.lN(w,e,f)},
lN:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a9(a,"/"))return P.lP(a,!z||c)
return P.lQ(a)},
dx:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.c0("Both query and queryParameters specified"))
return P.bU(a,b,c,C.n)}if(d==null)return
y=new P.ao("")
z.a=""
d.E(0,new P.lJ(new P.lK(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lE:function(a,b,c){return P.bU(a,b,c,C.n)},
fF:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aI(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cu(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
fz:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fT(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c9(y,0,null)},
bU:function(a,b,c,d){var z=P.fE(a,b,c,H.w(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
fE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fF(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bT(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fz(v)}}if(w==null)w=new P.ao("")
w.a+=C.b.u(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fC:function(a){if(C.b.a9(a,"."))return!0
return C.b.dY(a,"/.")!==-1},
lQ:function(a){var z,y,x,w,v,u,t
if(!P.fC(a))return a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.B(z,"/")},
lP:function(a,b){var z,y,x,w,v,u
if(!P.fC(a))return!b?P.fA(a):a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fA(z[0]))}return C.a.B(z,"/")},
fA:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fB(J.h5(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lD:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c0("Invalid URL encoding"))}}return z},
dy:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dG(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.a6(y.u(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c0("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c0("Truncated URI"))
C.a.h(u,P.lD(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isd",[P.m],"$asd")
return new P.k5(!1).cb(u)},
fB:function(a){var z=a|32
return 97<=z&&z<=122}}},
lB:{"^":"n:25;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.C()
throw H.a(P.Z("Invalid port",this.a,z+1))}},
lH:{"^":"n:43;",
$1:function(a){return P.cE(C.T,a,C.k,!1)}},
lK:{"^":"n:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cE(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cE(C.p,b,C.k,!0))}}},
lJ:{"^":"n:40;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bA(H.fX(b,"$isk")),y=this.a;z.G();)y.$2(a,H.M(z.gR(z)))}},
jU:{"^":"b;a,b,c",
gek:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.dZ(y,"?",z)
w=y.length
if(x>=0){v=P.bU(y,x+1,w,C.n)
w=x}else v=null
z=new P.kw(this,"data",null,null,null,P.bU(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Z("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Z("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.Z("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hS(0,a,s,y)
else{r=P.fE(a,s,y,C.n,!0)
if(r!=null)a=C.b.aS(a,s,y,r)}return new P.jU(a,z,c)}}},
m9:{"^":"n:39;",
$1:function(a){return new Uint8Array(96)}},
m8:{"^":"n:38;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.h9(z,0,96,b)
return z}},
ma:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mb:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
ld:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdU:function(){return this.c>0},
gdW:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.C()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdX:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gdV:function(){return this.r<this.a.length},
gd5:function(){return this.b===4&&C.b.a9(this.a,"http")},
gd6:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbI:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd5()){this.x="http"
z="http"}else if(this.gd6()){this.x="https"
z="https"}else if(z===4&&C.b.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gel:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gco:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbD:function(a){var z
if(this.gdW()){z=this.d
if(typeof z!=="number")return z.C()
return P.bZ(C.b.u(this.a,z+1,this.e),null,null)}if(this.gd5())return 80
if(this.gd6())return 443
return 0},
ge9:function(a){return C.b.u(this.a,this.e,this.f)},
gcA:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.u(this.a,z+1,y):""},
gdT:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gcB:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.U
z=P.j
return new P.f5(P.f9(this.gcA(this),C.k),[z,z])},
cC:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
i=this.gbI()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.gdW()?this.gbD(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dx(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cD(i,j,c,f,d,g,b)},
ef:function(a,b){return this.cC(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdr)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdr:1},
kw:{"^":"cD;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cV:function(a,b){var z=document.createElement("canvas")
return z},
hC:function(a){H.c(a,"$isab")
return"wheel"},
eb:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fl:function(a,b,c,d){var z,y
z=W.cC(W.cC(W.cC(W.cC(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fM:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.i)return a
return z.dm(a,b)},
bb:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mS:{"^":"dg;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
mT:{"^":"q;0k:length=","%":"AccessibleNodeList"},
mU:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mV:{"^":"bb;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cR:{"^":"q;",$iscR:1,"%":";Blob"},
cU:{"^":"bb;",
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.mn(c,null))
return a.getContext(b)},
eo:function(a,b){return this.bH(a,b,null)},
$iscU:1,
"%":"HTMLCanvasElement"},
dX:{"^":"q;",$isdX:1,"%":"CanvasRenderingContext2D"},
n0:{"^":"L;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n2:{"^":"cj;0k:length=","%":"CSSPerspective"},
n3:{"^":"cZ;0q:x=,0t:y=","%":"CSSPositionValue"},
n4:{"^":"cj;0q:x=,0t:y=","%":"CSSRotation"},
b8:{"^":"q;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
n5:{"^":"cj;0q:x=,0t:y=","%":"CSSScale"},
n6:{"^":"kv;0k:length=",
ep:function(a,b){var z=a.getPropertyValue(this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$e0()
y=z[b]
if(typeof y==="string")return y
y=this.fU(a,b)
z[b]=y
return y},
fU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hw()+b
if(z in a)return z
return b},
gc7:function(a){return a.bottom},
gak:function(a){return a.height},
gaR:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gam:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hs:{"^":"b;",
gaR:function(a){return this.ep(a,"left")}},
cZ:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cj:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
n7:{"^":"cZ;0k:length=","%":"CSSTransformValue"},
n8:{"^":"cj;0q:x=,0t:y=","%":"CSSTranslation"},
n9:{"^":"cZ;0k:length=","%":"CSSUnparsedValue"},
na:{"^":"q;0k:length=","%":"DataTransferItemList"},
nb:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nc:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nd:{"^":"hx;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hx:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
ne:{"^":"ky;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa8",[P.X],"$asa8")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a8,P.X]]},
$asv:function(){return[[P.a8,P.X]]},
$isk:1,
$ask:function(){return[[P.a8,P.X]]},
$isd:1,
$asd:function(){return[[P.a8,P.X]]},
$asB:function(){return[[P.a8,P.X]]},
"%":"ClientRectList|DOMRectList"},
hy:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gam(a))+" x "+H.l(this.gak(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.b4(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&this.gam(a)===z.gam(b)&&this.gak(a)===z.gak(b)},
gT:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gc7:function(a){return a.bottom},
gak:function(a){return a.height},
gaR:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gam:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nf:{"^":"kA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asv:function(){return[P.j]},
$isk:1,
$ask:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"DOMStringList"},
ng:{"^":"q;0k:length=","%":"DOMTokenList"},
ku:{"^":"cs;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.c(z[b],"$isV")},
m:function(a,b,c){var z
H.C(b)
H.c(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.im(this)
return new J.av(z,z.length,0,[H.x(z,0)])},
aw:function(a,b,c,d){throw H.a(P.ca(null))},
$asv:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"L;",
gca:function(a){return new W.ku(a,a.children)},
gbo:function(a){return P.iT(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
af:{"^":"q;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"q;",
dj:["eu",function(a,b,c,d){H.f(c,{func:1,args:[W.af]})
if(c!=null)this.eM(a,b,c,!1)}],
eM:function(a,b,c,d){return a.addEventListener(b,H.bw(H.f(c,{func:1,args:[W.af]}),1),!1)},
$isab:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fr|fs|fu|fv"},
b_:{"^":"cR;",$isb_:1,"%":"File"},
e8:{"^":"kF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isb_")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b_]},
$asv:function(){return[W.b_]},
$isk:1,
$ask:function(){return[W.b_]},
$isd:1,
$asd:function(){return[W.b_]},
$ise8:1,
$asB:function(){return[W.b_]},
"%":"FileList"},
nz:{"^":"ab;0k:length=","%":"FileWriter"},
nC:{"^":"bb;0k:length=","%":"HTMLFormElement"},
ba:{"^":"q;",$isba:1,"%":"Gamepad"},
nD:{"^":"dg;0q:x=,0t:y=","%":"Gyroscope"},
nE:{"^":"q;0k:length=","%":"History"},
nF:{"^":"kS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"q;0dr:data=",$isc4:1,"%":"ImageData"},
d1:{"^":"bb;",$isd1:1,"%":"HTMLImageElement"},
bH:{"^":"dn;",$isbH:1,"%":"KeyboardEvent"},
nK:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
nL:{"^":"dg;0q:x=,0t:y=","%":"Magnetometer"},
nN:{"^":"q;0k:length=","%":"MediaList"},
nO:{"^":"ab;",
dj:function(a,b,c,d){H.f(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eu(a,b,c,!1)},
"%":"MessagePort"},
nP:{"^":"kY;",
j:function(a,b){return P.aX(a.get(H.M(b)))},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gal:function(a){var z=H.e([],[P.j])
this.E(a,new W.iw(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asak:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iw:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nQ:{"^":"kZ;",
j:function(a,b){return P.aX(a.get(H.M(b)))},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gal:function(a){var z=H.e([],[P.j])
this.E(a,new W.ix(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asak:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
ix:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"q;",$isbe:1,"%":"MimeType"},
nR:{"^":"l0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asv:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"MimeTypeArray"},
ag:{"^":"dn;",$isag:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kt:{"^":"cs;a",
m:function(a,b,c){var z,y
H.C(b)
H.c(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.aY(C.W,z,"B",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asv:function(){return[W.L]},
$ask:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"ab;",
i9:function(a,b){var z,y
try{z=a.parentNode
J.h6(z,b,a)}catch(y){H.aD(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ev(a):z},
fH:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iB:{"^":"l2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bf:{"^":"q;0k:length=",$isbf:1,"%":"Plugin"},
o0:{"^":"l6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asv:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"PluginArray"},
o5:{"^":"lc;",
j:function(a,b){return P.aX(a.get(H.M(b)))},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gal:function(a){var z=H.e([],[P.j])
this.E(a,new W.j2(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asak:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
j2:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o7:{"^":"bb;0k:length=","%":"HTMLSelectElement"},
dg:{"^":"ab;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bh:{"^":"ab;",$isbh:1,"%":"SourceBuffer"},
o8:{"^":"fs;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asv:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"SourceBufferList"},
bi:{"^":"q;",$isbi:1,"%":"SpeechGrammar"},
o9:{"^":"lf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asv:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"SpeechGrammarList"},
bj:{"^":"q;0k:length=",$isbj:1,"%":"SpeechRecognitionResult"},
ob:{"^":"li;",
j:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.e([],[P.j])
this.E(a,new W.ji(z))
return z},
gk:function(a){return a.length},
$asak:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
ji:{"^":"n:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"q;",$isbk:1,"%":"CSSStyleSheet|StyleSheet"},
dk:{"^":"bb;",$isdk:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bl:{"^":"ab;",$isbl:1,"%":"TextTrack"},
bm:{"^":"ab;",$isbm:1,"%":"TextTrackCue|VTTCue"},
og:{"^":"lp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbm")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bm]},
$asv:function(){return[W.bm]},
$isk:1,
$ask:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asB:function(){return[W.bm]},
"%":"TextTrackCueList"},
oh:{"^":"fv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asv:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asB:function(){return[W.bl]},
"%":"TextTrackList"},
oi:{"^":"q;0k:length=","%":"TimeRanges"},
bo:{"^":"q;",$isbo:1,"%":"Touch"},
bp:{"^":"dn;",$isbp:1,"%":"TouchEvent"},
oj:{"^":"lv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbo")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bo]},
$asv:function(){return[W.bo]},
$isk:1,
$ask:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asB:function(){return[W.bo]},
"%":"TouchList"},
ok:{"^":"q;0k:length=","%":"TrackDefaultList"},
dn:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
om:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oo:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
op:{"^":"ab;0k:length=","%":"VideoTrackList"},
bQ:{"^":"ag;",
ghv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbQ:1,
"%":"WheelEvent"},
km:{"^":"ab;",
fI:function(a,b){return a.requestAnimationFrame(H.bw(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ou:{"^":"lX;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asv:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"CSSRuleList"},
ov:{"^":"hy;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.b4(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&a.width===z.gam(b)&&a.height===z.gak(b)},
gT:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gam:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ox:{"^":"lZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asv:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"GamepadList"},
oy:{"^":"m0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oz:{"^":"m2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asv:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"SpeechRecognitionResultList"},
oA:{"^":"m4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbk")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asv:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asB:function(){return[W.bk]},
"%":"StyleSheetList"},
kB:{"^":"dj;a,b,c,$ti",
hM:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
ow:{"^":"kB;a,b,c,$ti"},
kC:{"^":"eE;a,b,c,d,e,$ti",
fY:function(){var z=this.d
if(z!=null&&this.a<=0)J.h7(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fM(new W.kD(c),W.af)
z=new W.kC(0,a,b,z,!1,[e])
z.fY()
return z}}},
kD:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.c(a,"$isaf"))}},
B:{"^":"b;$ti",
ga_:function(a){return new W.e9(a,this.gk(a),-1,[H.aY(this,a,"B",0)])},
aw:function(a,b,c,d){H.y(d,H.aY(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dM(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kv:{"^":"q+hs;"},
kx:{"^":"q+v;"},
ky:{"^":"kx+B;"},
kz:{"^":"q+v;"},
kA:{"^":"kz+B;"},
kE:{"^":"q+v;"},
kF:{"^":"kE+B;"},
kR:{"^":"q+v;"},
kS:{"^":"kR+B;"},
kY:{"^":"q+ak;"},
kZ:{"^":"q+ak;"},
l_:{"^":"q+v;"},
l0:{"^":"l_+B;"},
l1:{"^":"q+v;"},
l2:{"^":"l1+B;"},
l5:{"^":"q+v;"},
l6:{"^":"l5+B;"},
lc:{"^":"q+ak;"},
fr:{"^":"ab+v;"},
fs:{"^":"fr+B;"},
le:{"^":"q+v;"},
lf:{"^":"le+B;"},
li:{"^":"q+ak;"},
lo:{"^":"q+v;"},
lp:{"^":"lo+B;"},
fu:{"^":"ab+v;"},
fv:{"^":"fu+B;"},
lu:{"^":"q+v;"},
lv:{"^":"lu+B;"},
lW:{"^":"q+v;"},
lX:{"^":"lW+B;"},
lY:{"^":"q+v;"},
lZ:{"^":"lY+B;"},
m_:{"^":"q+v;"},
m0:{"^":"m_+B;"},
m1:{"^":"q+v;"},
m2:{"^":"m1+B;"},
m3:{"^":"q+v;"},
m4:{"^":"m3+B;"}}],["","",,P,{"^":"",
mq:function(a){var z,y
z=J.J(a)
if(!!z.$isc4){y=z.gdr(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fx(a.data,a.height,a.width)},
mp:function(a){if(a instanceof P.fx)return{data:a.a,height:a.b,width:a.c}
return a},
aX:function(a){var z,y,x,w,v
if(a==null)return
z=P.ek(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mn:function(a,b){var z={}
a.E(0,new P.mo(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cO(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hw:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cO(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cO(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
ll:{"^":"b;",
dQ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cG:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.J(a)
if(!!y.$isan)return new Date(a.a)
if(!!y.$isiW)throw H.a(P.ca("structured clone of RegExp"))
if(!!y.$isb_)return a
if(!!y.$iscR)return a
if(!!y.$ise8)return a
if(!!y.$isc4)return a
if(!!y.$ises||!!y.$isdc)return a
if(!!y.$isK){x=this.dQ(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.E(a,new P.ln(z,this))
return z.a}if(!!y.$isd){x=this.dQ(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hs(a,x)}throw H.a(P.ca("structured clone of other type"))},
hs:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gk(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cG(z.j(a,w)))
return x}},
ln:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cG(b)}},
fx:{"^":"b;dr:a>,b,c",$isc4:1},
mo:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
lm:{"^":"ll;a,b"},
hH:{"^":"cs;a,b",
gaW:function(){var z,y,x
z=this.b
y=H.aC(z,"v",0)
x=W.V
return new H.il(new H.kk(z,H.f(new P.hI(),{func:1,ret:P.a5,args:[y]}),[y]),H.f(new P.hJ(),{func:1,ret:x,args:[y]}),[y,x])},
E:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.E(P.em(this.gaW(),!1,W.V),b)},
m:function(a,b,c){var z
H.C(b)
H.c(c,"$isV")
z=this.gaW()
J.ha(z.b.$1(J.cP(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gk:function(a){return J.au(this.gaW().a)},
j:function(a,b){var z=this.gaW()
return z.b.$1(J.cP(z.a,b))},
ga_:function(a){var z=P.em(this.gaW(),!1,W.V)
return new J.av(z,z.length,0,[H.x(z,0)])},
$asv:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
hI:{"^":"n:26;",
$1:function(a){return!!J.J(H.c(a,"$isL")).$isV}},
hJ:{"^":"n:55;",
$1:function(a){return H.i(H.c(a,"$isL"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fk:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
c8:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
v:function(a,b){var z,y,x
if(b==null)return!1
z=H.bv(b,"$isc8",[P.X],null)
if(!z)return!1
z=this.a
y=J.b4(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.b7(this.a)
y=J.b7(this.b)
return P.fk(P.bS(P.bS(0,z),y))}},
l7:{"^":"b;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.y(z+this.c,H.x(this,0))},
gc7:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.y(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bv(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=this.a
y=J.b4(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.x(this,0)
if(H.y(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.C()
z=H.y(x+this.d,w)===y.gc7(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.b7(z)
x=this.b
w=J.b7(x)
if(typeof z!=="number")return z.C()
v=H.x(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.y(x+this.d,v)
return P.fk(P.bS(P.bS(P.bS(P.bS(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dq:function(a,b){var z,y
H.w(b,"$isc8",[P.X],"$asc8")
z=b.a
y=this.a
if(typeof z!=="number")return z.cJ()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cJ()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"l7;aR:a>,bb:b>,am:c>,ak:d>,$ti",p:{
iT:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",nh:{"^":"Y;0q:x=,0t:y=","%":"SVGFEBlendElement"},ni:{"^":"Y;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nj:{"^":"Y;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nk:{"^":"Y;0q:x=,0t:y=","%":"SVGFECompositeElement"},nl:{"^":"Y;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nm:{"^":"Y;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nn:{"^":"Y;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},no:{"^":"Y;0q:x=,0t:y=","%":"SVGFEFloodElement"},np:{"^":"Y;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nq:{"^":"Y;0q:x=,0t:y=","%":"SVGFEImageElement"},nr:{"^":"Y;0q:x=,0t:y=","%":"SVGFEMergeElement"},ns:{"^":"Y;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nt:{"^":"Y;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nu:{"^":"Y;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nv:{"^":"Y;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nw:{"^":"Y;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nx:{"^":"Y;0q:x=,0t:y=","%":"SVGFETileElement"},ny:{"^":"Y;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nA:{"^":"Y;0q:x=,0t:y=","%":"SVGFilterElement"},nB:{"^":"bF;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hM:{"^":"bF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bF:{"^":"Y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nG:{"^":"bF;0q:x=,0t:y=","%":"SVGImageElement"},bI:{"^":"q;",$isbI:1,"%":"SVGLength"},nJ:{"^":"kU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bI]},
$isk:1,
$ask:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGLengthList"},nM:{"^":"Y;0q:x=,0t:y=","%":"SVGMaskElement"},bL:{"^":"q;",$isbL:1,"%":"SVGNumber"},nY:{"^":"l4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bL]},
$isk:1,
$ask:function(){return[P.bL]},
$isd:1,
$asd:function(){return[P.bL]},
$asB:function(){return[P.bL]},
"%":"SVGNumberList"},o_:{"^":"Y;0q:x=,0t:y=","%":"SVGPatternElement"},o1:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},o2:{"^":"q;0k:length=","%":"SVGPointList"},o3:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},o4:{"^":"hM;0q:x=,0t:y=","%":"SVGRectElement"},oc:{"^":"lk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asv:function(){return[P.j]},
$isk:1,
$ask:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"SVGStringList"},Y:{"^":"V;",
gca:function(a){return new P.hH(a,new W.kt(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oe:{"^":"bF;0q:x=,0t:y=","%":"SVGSVGElement"},jo:{"^":"bF;","%":"SVGTextPathElement;SVGTextContentElement"},of:{"^":"jo;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bO:{"^":"q;",$isbO:1,"%":"SVGTransform"},ol:{"^":"lx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbO")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bO]},
$isk:1,
$ask:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asB:function(){return[P.bO]},
"%":"SVGTransformList"},on:{"^":"bF;0q:x=,0t:y=","%":"SVGUseElement"},kT:{"^":"q+v;"},kU:{"^":"kT+B;"},l3:{"^":"q+v;"},l4:{"^":"l3+B;"},lj:{"^":"q+v;"},lk:{"^":"lj+B;"},lw:{"^":"q+v;"},lx:{"^":"lw+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isjG:1}}],["","",,P,{"^":"",mW:{"^":"q;0k:length=","%":"AudioBuffer"},mX:{"^":"ks;",
j:function(a,b){return P.aX(a.get(H.M(b)))},
E:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gal:function(a){var z=H.e([],[P.j])
this.E(a,new P.hd(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asak:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hd:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},mY:{"^":"ab;0k:length=","%":"AudioTrackList"},hg:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nZ:{"^":"hg;0k:length=","%":"OfflineAudioContext"},ks:{"^":"q+ak;"}}],["","",,P,{"^":"",df:{"^":"q;",
ii:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mp(g))
return}if(!!z.$isd1)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c0("Incorrect number or type of arguments"))},
ih:function(a,b,c,d,e,f,g){return this.ii(a,b,c,d,e,f,g,null,null,null)},
$isdf:1,
"%":"WebGLRenderingContext"},jO:{"^":"q;",$isjO:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oa:{"^":"lh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aX(a.item(b))},
m:function(a,b,c){H.C(b)
H.c(c,"$isK")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.K,,,]]},
$isk:1,
$ask:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asB:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lg:{"^":"q+v;"},lh:{"^":"lg+B;"}}],["","",,O,{"^":"",aO:{"^":"b;0a,0b,0c,0d,$ti",
bM:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cL:function(a,b,c){var z=H.aC(this,"aO",0)
H.f(b,{func:1,ret:P.a5,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.cL(a,null,b)},
fw:function(a){var z
H.w(a,"$isk",[H.aC(this,"aO",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eE:function(a,b){var z
H.w(b,"$isk",[H.aC(this,"aO",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.av(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"aO",0)
H.y(b,z)
z=[z]
if(this.fw(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eE(x,H.e([b],z))}},
$isk:1,
p:{
cX:function(a){var z=new O.aO([a])
z.bM(a)
return z}}},d9:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
eF:function(a){var z=this.b
if(!(z==null))z.F(a)},
aB:function(){return this.eF(null)},
gY:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c7()},
ec:function(a){var z=this.a
if(a==null)C.a.h(z,V.c7())
else C.a.h(z,a)
this.aB()},
cz:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cQ:{"^":"b;"},aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cV:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(y.f==null)y.cV()}},
sbJ:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.t]})
C.a.a0(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.ad])
w.b=!0
this.a8(w)}},
scE:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ge7(),{func:1,ret:-1,args:[D.t]})
C.a.a0(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.ge7(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cV()
w=new D.I("technique",x,this.f,this,[O.cx])
w.b=!0
this.a8(w)}},
sb3:function(a){var z,y,x,w
if(!J.R(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.t]})
C.a.a0(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.I("mover",z,a,this,[U.ac])
w.b=!0
this.a8(w)}},
ai:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aT(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.aG])
w.b=!0
this.a8(w)}z=this.f
if(z!=null)z.ai(0,b)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ai(0,b)},
ay:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gY(z))
else C.a.h(z.a,y.l(0,z.gY(z)))
z.aB()
a.ed(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.ee(a,this)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ay(a)
a.ea()
a.dx.cz()},
gw:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.F(a)},
Z:function(){return this.a8(null)},
hX:[function(a){H.c(a,"$ist")
this.e=null
this.a8(a)},function(){return this.hX(null)},"jc","$1","$0","ge6",0,2,0],
hY:[function(a){this.a8(H.c(a,"$ist"))},function(){return this.hY(null)},"jd","$1","$0","ge7",0,2,0],
hW:[function(a){this.a8(H.c(a,"$ist"))},function(){return this.hW(null)},"jb","$1","$0","ge5",0,2,0],
hU:[function(a){this.a8(H.c(a,"$ist"))},function(){return this.hU(null)},"j9","$1","$0","ge4",0,2,0],
j8:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aP],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b9()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.Z()},"$2","ghT",8,0,9],
ja:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aP],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b9()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.a0(t.a,y)}}this.Z()},"$2","ghV",8,0,9],
$isaR:1,
p:{
d_:function(a,b,c,d,e,f){var z,y
z=new E.aP()
z.a=d
z.b=!0
y=O.cX(E.aP)
z.y=y
y.bf(z.ghT(),z.ghV())
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
z.scE(f)
z.sb3(c)
return z}}},iY:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eB:function(a,b){var z,y,x,w,v
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
z=new O.d9()
y=[V.aG]
z.a=H.e([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.f(new E.j_(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d9()
z.a=H.e([],y)
v=z.gw()
v.toString
x=H.f(new E.j0(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d9()
z.a=H.e([],y)
y=z.gw()
y.toString
w=H.f(new E.j1(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cx])
this.dy=z
C.a.h(z,null)
this.fr=new H.aQ(0,0,[P.j,A.dh])},
gi6:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gY(z)
y=this.db
y=z.l(0,y.gY(y))
this.z=y
z=y}return z},
geb:function(){var z,y
z=this.ch
if(z==null){z=this.gi6()
y=this.dx
y=z.l(0,y.gY(y))
this.ch=y
z=y}return z},
gem:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gY(z)
y=this.dx
y=z.l(0,y.gY(y))
this.cx=y
z=y}return z},
ed:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
ea:function(){var z=this.dy
if(z.length>1)z.pop()},
dl:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.bp(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
iZ:function(a,b){var z=new E.iY(a,b)
z.eB(a,b)
return z}}},j_:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$ist")
z=this.a
z.z=null
z.ch=null}},j0:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j1:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jx:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
eH:[function(a){var z
H.c(a,"$ist")
z=this.x
if(!(z==null))z.F(a)
this.ia()},function(){return this.eH(null)},"eG","$1","$0","gcP",0,2,0],
ghE:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e7(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
da:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.j.cn(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cn(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ia:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jz(this),{func:1,ret:-1,args:[P.X]})
C.B.eZ(z)
C.B.fI(z,W.fM(y,P.X))}},
i8:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.da()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.e7(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aB()
w=x.db
C.a.sk(w.a,0)
w.aB()
w=x.dx
C.a.sk(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ay(this.e)}}catch(v){z=H.aD(v)
y=H.by(v)
P.dL("Error: "+H.l(z))
P.dL("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jy:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscU)return E.eJ(a,!0,!0,!0,!1)
y=W.cV(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gca(a).h(0,y)
w=E.eJ(y,!0,!0,!0,!1)
w.a=a
return w},
eJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jx()
y=P.ia(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bH(a,"webgl",y)
x=H.c(x==null?C.l.bH(a,"experimental-webgl",y):x,"$isdf")
if(x==null)H.p(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iZ(x,a)
w=new T.js(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k0(a)
v=new X.i4()
v.c=new X.aI(!1,!1,!1)
v.d=P.id(null,null,null,P.m)
w.b=v
v=new X.iy(w)
v.f=0
v.r=new V.a0(0,0)
v.x=new V.a0(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ih(w)
v.r=0
v.x=new V.a0(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jD(w)
v.e=0
v.f=new V.a0(0,0)
v.r=new V.a0(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eE,P.b]])
w.z=v
u=document
t=W.ag
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.f(w.gfi(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.f(w.gfl(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.f(w.gfe(),q),!1,r))
v=w.z
p=W.bH
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.f(w.gfn(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.f(w.gfm(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.f(w.gfq(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.f(w.gft(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.f(w.gfs(),s),!1,t))
p=w.z
o=W.bQ;(p&&C.a).h(p,W.a3(a,H.M(W.hC(a)),H.f(w.gfu(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.f(w.gfj(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.f(w.gfk(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.f(w.gfv(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.f(w.gfE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.f(w.gfC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.f(w.gfD(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.da()
return z}}},jz:{"^":"n:31;a",
$1:function(a){var z
H.mI(a)
z=this.a
if(z.z){z.z=!1
z.i8()}}}}],["","",,Z,{"^":"",fe:{"^":"b;a,b",p:{
dt:function(a,b,c){var z
H.w(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bs(c)),35044)
a.bindBuffer(b,null)
return new Z.fe(b,z)}}},dT:{"^":"cQ;a,b,c,d,e",
as:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aD(y)
x=P.u('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ff:{"^":"b;a",$ismZ:1},ch:{"^":"b;a,0b,c,d",
ac:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
as:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].as(a)},
ej:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ay:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
e8:function(a){this.as(a)
this.ay(a)
this.ej(a)},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isjn:1},dU:{"^":"b;0a",$isjn:1},cn:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},b2:{"^":"b;a",
gcM:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aU().a)!==0)y+=2
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$b3().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=4
if((z&$.$get$bq().a)!==0)++y
return(z&$.$get$aT().a)!==0?y+4:y},
hp:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fd()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.j])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aV().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
as:function(a){return new Z.b2(a)}}}}],["","",,D,{"^":"",cW:{"^":"b;"},b9:{"^":"b;0a,0b,0c",
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.E(y,new D.hG(z))
return x!==0},
hw:function(){return this.F(null)},
ib:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.F(y)}}},
az:function(a){return this.ib(a,!0,!1)},
p:{
N:function(){var z=new D.b9()
z.a=H.e([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hG:{"^":"n:54;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},co:{"^":"t;c,d,a,0b,$ti"},cp:{"^":"t;c,d,a,0b,$ti"},I:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dV:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"n_<"}},eh:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ei:{"^":"t;c,a,0b"},i4:{"^":"b;0a,0b,0c,0d",
i3:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.F(y)},
i_:function(a){var z,y
this.c=a.b
this.d.a0(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.F(y)}},en:{"^":"ct;x,y,c,d,e,a,0b"},ih:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.a0(y.a+x*w,y.b+v*u)
u=this.a.gaK()
s=new X.bJ(a,new V.a0(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cw:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
i4:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.da(new V.W(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.F(w)
return!0},
fp:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.en(c,a,this.a.gaK(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.a0(0,0)}},aI:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aI))return!1
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
return z+(this.c?"Shift+":"")}},bJ:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},iy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaK()
x=new X.bJ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cw:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bS(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bS(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bS(a,b,!1))
return!0},
i5:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.da(new V.W(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.F(x)
return!0},
gdt:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
ge2:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},da:{"^":"ct;x,c,d,e,a,0b"},ct:{"^":"t;"},eN:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},jD:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.a0],"$asd")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.a0(0,0)
x=this.a.gaK()
w=new X.eN(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i2:function(a){var z
H.w(a,"$isd",[V.a0],"$asd")
z=this.b
if(z==null)return!1
z.F(this.ap(a,!0))
return!0},
i0:function(a){var z
H.w(a,"$isd",[V.a0],"$asd")
z=this.c
if(z==null)return!1
z.F(this.ap(a,!0))
return!0},
i1:function(a){var z
H.w(a,"$isd",[V.a0],"$asd")
z=this.d
if(z==null)return!1
z.F(this.ap(a,!1))
return!0}},k0:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaK:function(){var z=this.a
return V.eB(0,0,(z&&C.l).gbo(z).c,C.l.gbo(z).d)},
d1:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.aI(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
c2:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.a0(y-w,x-v)},
aY:function(a){return new V.W(a.movementX,a.movementY)},
bZ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.a0])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.j.ah(u.pageX)
C.j.ah(u.pageY)
s=z.left
C.j.ah(u.pageX)
C.a.h(y,new V.a0(t-s,C.j.ah(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.aI(y,a.altKey,a.shiftKey))},
iK:[function(a){this.f=!0},"$1","gfl",4,0,5],
iE:[function(a){this.f=!1},"$1","gfe",4,0,5],
iH:[function(a){if(this.f)a.preventDefault()},"$1","gfi",4,0,5],
iM:[function(a){var z
H.c(a,"$isbH")
if(!this.f)return
z=this.d1(a)
if(this.b.i3(z))a.preventDefault()},"$1","gfn",4,0,24],
iL:[function(a){var z
H.c(a,"$isbH")
if(!this.f)return
z=this.d1(a)
if(this.b.i_(z))a.preventDefault()},"$1","gfm",4,0,24],
iO:[function(a){var z,y,x,w
H.c(a,"$isag")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.an(a)
x=this.aY(a)
if(this.d.cw(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.aq(a)
if(this.c.cw(y,w))a.preventDefault()},"$1","gfq",4,0,6],
iQ:[function(a){var z,y,x
H.c(a,"$isag")
this.aH(a)
z=this.an(a)
if(this.x){y=this.aY(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gft",4,0,6],
iJ:[function(a){var z,y,x,w
H.c(a,"$isag")
z=this.a
if(!(z&&C.l).gbo(z).dq(0,new P.c8(a.clientX,a.clientY,[P.X]))){this.aH(a)
y=this.an(a)
if(this.x){x=this.aY(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.b5(y,w))a.preventDefault()}},"$1","gfk",4,0,6],
iP:[function(a){var z,y,x
H.c(a,"$isag")
this.aH(a)
z=this.an(a)
if(this.x){y=this.aY(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gfs",4,0,6],
iI:[function(a){var z,y,x,w
H.c(a,"$isag")
z=this.a
if(!(z&&C.l).gbo(z).dq(0,new P.c8(a.clientX,a.clientY,[P.X]))){this.aH(a)
y=this.an(a)
if(this.x){x=this.aY(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","gfj",4,0,6],
iR:[function(a){var z,y
H.c(a,"$isbQ")
this.aH(a)
z=new V.W((a&&C.A).ghu(a),C.A.ghv(a)).D(0,180)
if(this.x){if(this.d.i4(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.i5(z,y))a.preventDefault()},"$1","gfu",4,0,35],
iS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.aq(this.y)
this.d.fp(w,v,x)}},"$1","gfv",4,0,5],
iY:[function(a){var z
H.c(a,"$isbp")
this.a.focus()
this.f=!0
this.c2(a)
z=this.bZ(a)
if(this.e.i2(z))a.preventDefault()},"$1","gfE",4,0,14],
iW:[function(a){var z
H.c(a,"$isbp")
this.c2(a)
z=this.bZ(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfC",4,0,14],
iX:[function(a){var z
H.c(a,"$isbp")
this.c2(a)
z=this.bZ(a)
if(this.e.i1(z))a.preventDefault()},"$1","gfD",4,0,14]}}],["","",,D,{"^":"",ck:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z},
aC:[function(a){var z
H.c(a,"$ist")
z=this.d
if(!(z==null))z.F(a)},function(){return this.aC(null)},"iq","$1","$0","geI",0,2,0],
$isa4:1,
$isaR:1},a4:{"^":"b;",$isaR:1},i5:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.N()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.F(a)},
fo:[function(a){var z
H.c(a,"$ist")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.fo(null)},"iN","$1","$0","gd7",0,2,0],
iT:[function(a){var z,y,x
H.w(a,"$isk",[D.a4],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eV(x))return!1}return!0},"$1","gfz",4,0,37],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd7(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.c(b[u],"$isa4")
if(t instanceof D.ck)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfb",8,0,23],
iV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd7(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.c(b[u],"$isa4")
if(t instanceof D.ck)C.a.a0(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.a0(s.a,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfB",8,0,23],
eV:function(a){var z=C.a.b_(this.e,a)
return z},
$ask:function(){return[D.a4]},
$asaO:function(){return[D.a4]}},iG:{"^":"b;",$isa4:1,$isaR:1},jf:{"^":"b;",$isa4:1,$isaR:1},ju:{"^":"b;",$isa4:1,$isaR:1},jv:{"^":"b;",$isa4:1,$isaR:1},jw:{"^":"b;",$isa4:1,$isaR:1}}],["","",,V,{"^":"",
n1:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iv",8,0,36],
mR:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.be(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.j.ei($.r.$2(a,0)?0:a,b),c+b+1)},
bx:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.z],"$asd")
z=H.e([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.ae(z[u],x))}return z},
dK:function(a,b){return C.j.il(Math.pow(b,C.I.cn(Math.log(H.mm(a))/Math.log(b))))},
U:{"^":"b;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aF:{"^":"b;a,b,c,d",
v:function(a,b){var z
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
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eq:{"^":"b;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
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
y=V.bx(H.e([this.a,this.d,this.r],z),3,0)
x=V.bx(H.e([this.b,this.e,this.x],z),3,0)
w=V.bx(H.e([this.c,this.f,this.y],z),3,0)
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
aG:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
e0:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.c7()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.aw(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
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
i:function(a){return this.K()},
dS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bx(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bx(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bx(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bx(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.dS("",3,0)},
A:function(a){return this.dS(a,3,0)},
p:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c7:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
er:function(a,b,c){var z,y,x,w,v
z=c.D(0,Math.sqrt(c.I(c)))
y=b.b1(z)
x=y.D(0,Math.sqrt(y.I(y)))
w=z.b1(x)
v=new V.G(a.a,a.b,a.c)
return V.aH(x.a,w.a,z.a,x.O(0).I(v),x.b,w.b,z.b,w.O(0).I(v),x.c,w.c,z.c,z.O(0).I(v),0,0,0,1)}}},
a0:{"^":"b;q:a>,t:b>",
N:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
aw:{"^":"b;q:a>,t:b>,c",
C:function(a,b){return new V.aw(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.aw(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
ex:{"^":"b;q:a>,t:b>,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ex))return!1
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
eA:{"^":"b;q:a>,t:b>,c,d",
ga7:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
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
eB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eA(a,b,c,d)}}},
W:{"^":"b;a,b",
hK:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,15],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.W(z*b,y*b)},
D:function(a,b){var z,y
if($.r.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.W(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hK:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,15],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cr:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b1:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.G(-this.a,-this.b,-this.c)},
D:function(a,b){if($.r.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
e1:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hn:{"^":"cW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z=V.mR(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.F(a)},
scH:function(a,b){},
sct:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.I("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.S(z)}},
scv:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.I("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.S(z)}},
sa6:function(a,b){var z,y
b=this.bN(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.z])
z.b=!0
this.S(z)}},
scu:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.S(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.z])
z.b=!0
this.S(z)}},
scd:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.z])
z.b=!0
this.S(z)}},
ai:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa6(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
p:{
cY:function(){var z=new U.hn()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dZ:{"^":"ac;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
aT:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
e_:function(a){var z=new U.dZ()
z.a=a
return z}}},ea:{"^":"aO;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
S:[function(a){var z
H.c(a,"$ist")
z=this.e
if(!(z==null))z.F(a)},function(){return this.S(null)},"af","$1","$0","gaD",0,2,0],
iA:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfa",8,0,21],
iU:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.a0(t.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfA",8,0,21],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.av(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.c7():x
z=this.e
if(!(z==null))z.az(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.ac]},
$asaO:function(){return[U.ac]},
$isac:1},ac:{"^":"cW;"},k1:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
S:[function(a){var z
H.c(a,"$ist")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.S(null)},"af","$1","$0","gaD",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbU(),y)
C.a.h(z.a,x)
x=this.a.c.ge2()
x.toString
z=H.f(this.gbV(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.f(this.gbW(),y)
C.a.h(z.a,y)
return!0},
f5:[function(a){H.c(a,"$ist")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbU",4,0,1],
f6:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$ist"),"$isbJ")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.W(y.a,y.b).l(0,2).D(0,z.ga7())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.W(x.a,x.b).l(0,2).D(0,z.ga7())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa6(0,-v*u+t)
this.b.sU(0)
y=y.N(0,a.z)
this.Q=new V.W(y.a,y.b).l(0,2).D(0,z.ga7())}this.af()},"$1","gbV",4,0,1],
f7:[function(a){var z,y,x
H.c(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sU(y*10*x)
this.af()}},"$1","gbW",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.ai(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},k2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
S:[function(a){var z
H.c(a,"$ist")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.S(null)},"af","$1","$0","gaD",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbU(),y)
C.a.h(z.a,x)
x=this.a.c.ge2()
x.toString
z=H.f(this.gbV(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.f(this.gbW(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.N()
x.f=z}x=H.f(this.gf2(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.f(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.N()
x.b=z}x=H.f(this.gfX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.f(this.gfW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.N()
x.c=z}y=H.f(this.gfV(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.W(z,y)},
f5:[function(a){a=H.i(H.c(a,"$ist"),"$isbJ")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbU",4,0,1],
f6:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$ist"),"$isbJ")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aj(new V.W(y.a,y.b).l(0,2).D(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).l(0,2).D(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa6(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).l(0,2).D(0,z.ga7()))}this.af()},"$1","gbV",4,0,1],
f7:[function(a){var z,y,x
H.c(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sU(-y*10*z)
this.af()}},"$1","gbW",4,0,1],
iw:[function(a){if(H.i(H.c(a,"$ist"),"$isen").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf2",4,0,1],
ix:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$ist"),"$isbJ")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).l(0,2).D(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa6(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).l(0,2).D(0,z.ga7()))
this.af()},"$1","gf3",4,0,1],
j1:[function(a){H.c(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfX",4,0,1],
j0:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$ist"),"$iseN")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aj(new V.W(y.a,y.b).l(0,2).D(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).l(0,2).D(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa6(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa6(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).l(0,2).D(0,z.ga7()))}this.af()},"$1","gfW",4,0,1],
j_:[function(a){var z,y,x
H.c(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sU(-y*10*z)
this.af()}},"$1","gfV",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.ai(0,x)
this.b.ai(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},k3:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.F(a)},
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=H.f(this.gf8(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iy:[function(a){var z,y,x,w
H.c(a,"$ist")
if(!J.R(this.b,this.a.b.c))return
H.i(a,"$isda")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.z])
z.b=!0
this.S(z)}},"$1","gf8",4,0,1],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",hE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aU:[function(a){var z
H.c(a,"$ist")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aU(null)},"ir","$1","$0","gaE",0,2,0],
iF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","gfg",8,0,9],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.a0(s.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","gfh",8,0,9],
gw:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ed(this.c)
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
if(typeof x!=="number")return H.o(x)
u=C.d.ah(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.d.ah(v.b*w)
s=C.d.ah(v.c*x)
a.c=s
v=C.d.ah(v.d*w)
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
s.ec(V.aH(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ew
if(y==null){y=V.er(new V.aw(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.ew=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.ec(m)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ai(0,a)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ay(a)
this.a.toString
a.cy.cz()
a.db.cz()
this.b.toString
a.ea()},
$iso6:1}}],["","",,A,{"^":"",dP:{"^":"b;a,b,c"},hc:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hx:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ds:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ec:{"^":"dh;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},ep:{"^":"dh;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0av,0aQ,0bq,0du,0dv,0br,0bs,0dw,0dz,0bt,0bu,0dA,0dB,0bv,0dC,0dD,0bw,0dE,0dF,0bx,0by,0bz,0dG,0dH,0bA,0bB,0dI,0dJ,0bC,0dK,0cg,0dL,0ci,0dM,0cj,0dN,0ck,0dO,0cl,0dP,0cm,a,b,0c,0d,0e,0f,0r",
eA:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.ao("")
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
a1.h1(z)
a1.h8(z)
a1.h2(z)
a1.hg(z)
a1.hh(z)
a1.ha(z)
a1.hl(z)
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
z=new P.ao("")
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
v.h5(z)
v.h0(z)
v.h3(z)
v.h6(z)
v.he(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hc(z)
v.hd(z)}v.h9(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.e([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h4(z)
v.hb(z)
v.hf(z)
v.hi(z)
v.hj(z)
v.hk(z)
v.h7(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.e_(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.i(this.r.n(0,"invViewMat"),"$isap")
if(y)this.db=H.i(this.r.n(0,"objMat"),"$isap")
if(w)this.dx=H.i(this.r.n(0,"viewObjMat"),"$isap")
this.fr=H.i(this.r.n(0,"projViewObjMat"),"$isap")
if(a1.x2)this.go=H.i(this.r.n(0,"txt2DMat"),"$isdq")
if(a1.y1)this.id=H.i(this.r.n(0,"txtCubeMat"),"$isap")
if(a1.y2)this.k1=H.i(this.r.n(0,"colorMat"),"$isap")
this.k3=H.e([],[A.ap])
y=a1.aP
if(y>0){this.k2=H.c(this.r.n(0,"bendMatCount"),"$isO")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isap"))}}y=a1.a
if(y!==C.c){this.k4=H.i(this.r.n(0,"emissionClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.r1=H.i(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isO")
break
case C.f:this.r2=H.i(this.r.n(0,"emissionTxt"),"$isar")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isO")
break}}y=a1.b
if(y!==C.c){this.ry=H.i(this.r.n(0,"ambientClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.x1=H.i(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isO")
break
case C.f:this.x2=H.i(this.r.n(0,"ambientTxt"),"$isar")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isO")
break}}y=a1.c
if(y!==C.c){this.y2=H.i(this.r.n(0,"diffuseClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.aP=H.i(this.r.n(0,"diffuseTxt"),"$isaq")
this.aQ=H.i(this.r.n(0,"nullDiffuseTxt"),"$isO")
break
case C.f:this.av=H.i(this.r.n(0,"diffuseTxt"),"$isar")
this.aQ=H.i(this.r.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a1.d
if(y!==C.c){this.bq=H.i(this.r.n(0,"invDiffuseClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.du=H.i(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.br=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.f:this.dv=H.i(this.r.n(0,"invDiffuseTxt"),"$isar")
this.br=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a1.e
if(y!==C.c){this.bu=H.i(this.r.n(0,"shininess"),"$isa_")
this.bs=H.i(this.r.n(0,"specularClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.dw=H.i(this.r.n(0,"specularTxt"),"$isaq")
this.bt=H.i(this.r.n(0,"nullSpecularTxt"),"$isO")
break
case C.f:this.dz=H.i(this.r.n(0,"specularTxt"),"$isar")
this.bt=H.i(this.r.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.dA=H.i(this.r.n(0,"bumpTxt"),"$isaq")
this.bv=H.i(this.r.n(0,"nullBumpTxt"),"$isO")
break
case C.f:this.dB=H.i(this.r.n(0,"bumpTxt"),"$isar")
this.bv=H.i(this.r.n(0,"nullBumpTxt"),"$isO")
break}if(a1.dy){this.dC=H.i(this.r.n(0,"envSampler"),"$isar")
this.dD=H.i(this.r.n(0,"nullEnvTxt"),"$isO")
y=a1.r
if(y!==C.c){this.bw=H.i(this.r.n(0,"reflectClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.dE=H.i(this.r.n(0,"reflectTxt"),"$isaq")
this.bx=H.i(this.r.n(0,"nullReflectTxt"),"$isO")
break
case C.f:this.dF=H.i(this.r.n(0,"reflectTxt"),"$isar")
this.bx=H.i(this.r.n(0,"nullReflectTxt"),"$isO")
break}}y=a1.x
if(y!==C.c){this.by=H.i(this.r.n(0,"refraction"),"$isa_")
this.bz=H.i(this.r.n(0,"refractClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.e:this.dG=H.i(this.r.n(0,"refractTxt"),"$isaq")
this.bA=H.i(this.r.n(0,"nullRefractTxt"),"$isO")
break
case C.f:this.dH=H.i(this.r.n(0,"refractTxt"),"$isar")
this.bA=H.i(this.r.n(0,"nullRefractTxt"),"$isO")
break}}}y=a1.y
if(y!==C.c){this.bB=H.i(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.h:break
case C.e:this.dI=H.i(this.r.n(0,"alphaTxt"),"$isaq")
this.bC=H.i(this.r.n(0,"nullAlphaTxt"),"$isO")
break
case C.f:this.dJ=H.i(this.r.n(0,"alphaTxt"),"$isar")
this.bC=H.i(this.r.n(0,"nullAlphaTxt"),"$isO")
break}}this.cg=H.e([],[A.f_])
this.ci=H.e([],[A.f0])
this.cj=H.e([],[A.f1])
this.ck=H.e([],[A.f2])
this.cl=H.e([],[A.f3])
this.cm=H.e([],[A.f4])
if(a1.k2){y=a1.z
if(y>0){this.dK=H.c(this.r.n(0,"dirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.cg;(x&&C.a).h(x,new A.f_(m,l,k))}}y=a1.Q
if(y>0){this.dL=H.c(this.r.n(0,"pntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isa_")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa_")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.ci;(x&&C.a).h(x,new A.f0(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dM=H.c(this.r.n(0,"spotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa_")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa_")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa_")
x=this.cj;(x&&C.a).h(x,new A.f1(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dN=H.c(this.r.n(0,"txtDirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isO")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isaq")
x=this.ck;(x&&C.a).h(x,new A.f2(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dO=H.c(this.r.n(0,"txtPntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdq")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isO")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa_")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa_")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isar")
x=this.cl;(x&&C.a).h(x,new A.f3(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dP=H.c(this.r.n(0,"txtSpotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isO")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa_")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isaq")
x=this.cm;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ag:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.es(c)
b.a.uniform1i(b.d,0)}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ip:function(a,b){var z,y
z=a.av
y=new A.ep(b,z)
y.cO(b,z)
y.eA(a,b)
return y}}},is:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,av,aQ",
h1:function(a){var z,y,x
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
h8:function(a){var z
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
h2:function(a){var z
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
hg:function(a){var z,y
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
hh:function(a){var z,y
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
ha:function(a){var z
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
hl:function(a){var z
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
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h5:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
h0:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ao(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
h3:function(a){var z,y
z=this.c
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
h6:function(a){var z,y
z=this.d
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
he:function(a){var z,y
z=this.e
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   specularColor = specularClr;\n"
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
h9:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
hc:function(a){var z,y
z=this.r
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
hd:function(a){var z,y
z=this.x
if(z===C.c)return
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
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
h4:function(a){var z,y
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
hb:function(a){var z,y
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
hf:function(a){var z,y
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
hk:function(a){var z,y,x
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
h7:function(a){var z
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
i:function(a){return this.av}},f_:{"^":"b;a,b,c"},f2:{"^":"b;a,b,c,d,e,f,r,x"},f0:{"^":"b;a,b,c,d,e,f,r"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dh:{"^":"cQ;",
cO:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
e_:function(a,b,c){var z,y,x
this.c=this.d2(b,35633)
this.d=this.d2(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fQ(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.u("Failed to link shader: "+H.l(x)))}this.fQ()
this.fS()},
as:function(a){a.a.useProgram(this.e)
this.f.hx()},
d2:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fQ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fQ:function(){var z,y,x,w,v,u
z=H.e([],[A.dP])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dP(y,v.name,u))}this.f=new A.hc(z)},
fS:function(){var z,y,x,w,v,u
z=H.e([],[A.ae])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.ht(v.type,v.size,v.name,u))}this.r=new A.jN(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dp(z,y,b,a,c)},
eW:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dp(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dp(z,y,b,a,c)},
bl:function(a,b){return new P.fi(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ht:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.jI(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.jL(this.a,this.e,c,d)
case 35667:return new A.jJ(this.a,this.e,c,d)
case 35668:return new A.jK(this.a,this.e,c,d)
case 35669:return new A.jM(this.a,this.e,c,d)
case 35674:return new A.jP(this.a,this.e,c,d)
case 35675:return new A.dq(this.a,this.e,c,d)
case 35676:return new A.ap(this.a,this.e,c,d)
case 35678:return this.eW(b,c,d)
case 35680:return this.eX(b,c,d)
case 35670:throw H.a(this.bl("BOOL",c))
case 35671:throw H.a(this.bl("BOOL_VEC2",c))
case 35672:throw H.a(this.bl("BOOL_VEC3",c))
case 35673:throw H.a(this.bl("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ci:{"^":"b;a,b",
i:function(a){return this.b}},ae:{"^":"b;"},jN:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
hD:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.hD("\n")}},O:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jJ:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jK:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jM:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jH:{"^":"ae;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dp:function(a,b,c,d,e){var z=new A.jH(a,b,c,e)
z.f=d
z.e=P.ie(d,0,!1,P.m)
return z}}},a_:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jI:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},H:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jL:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jP:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dq:{"^":"ae;a,b,c,d",
a5:function(a){var z=new Float32Array(H.bs(H.w(a,"$isd",[P.z],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},ap:{"^":"ae;a,b,c,d",
a5:function(a){var z=new Float32Array(H.bs(H.w(a,"$isd",[P.z],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ae;a,b,c,d",
es:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ar:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
cF:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bV:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.cF(y)
k=F.cF(z.b)
j=F.mO(d,e,new F.m5(z,F.cF(z.c),F.cF(z.d),k,l,c),b)
if(j!=null)a.hQ(j)},
mO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.a2,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.bN()
y=H.e([],[F.a2])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cB(null,null,new V.aF(u,0,0,1),null,null,new V.a0(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cc(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cB(null,null,new V.aF(o,n,m,1),null,null,new V.a0(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cc(d))}}z.d.hn(a+1,b+1,y)
return z},
m5:{"^":"n:42;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cr(z.b,b).cr(z.d.cr(z.c,b),c)
z=new V.aw(y.a,y.b,y.c)
if(!J.R(a.f,z)){a.f=z
z=a.a
if(z!=null)z.Z()}a.sij(y.D(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.ex(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.R(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Z()}}},
aj:{"^":"b;0a,0b,0c,0d,0e",
gcf:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e1())return
return v.D(0,Math.sqrt(v.I(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.D(0,Math.sqrt(z.I(z)))
z=w.N(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.b1(z.D(0,Math.sqrt(z.I(z))))
return z.D(0,Math.sqrt(z.I(z)))},
c9:function(){if(this.d!=null)return!0
var z=this.eO()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.Z()
return!0},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e1())return
return v.D(0,Math.sqrt(v.I(v)))},
eS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.N(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.N(0,u)
z=new V.aw(z.a*l,z.b*l,z.c*l).C(0,u).N(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.D(0,Math.sqrt(z.I(z)))
z=k.b1(m)
z=z.D(0,Math.sqrt(z.I(z))).b1(k)
m=z.D(0,Math.sqrt(z.I(z)))}return m},
c8:function(){if(this.e!=null)return!0
var z=this.eN()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y
if(this.gcf())return a+"disposed"
z=a+C.b.ae(J.aa(this.a.e),0)+", "+C.b.ae(J.aa(this.b.e),0)+", "+C.b.ae(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.A("")},
p:{
c3:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.u("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
b0:{"^":"b;0a,0b",
gcf:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){if(this.gcf())return a+"disposed"
return a+C.b.ae(J.aa(this.a.e),0)+", "+C.b.ae(J.aa(this.b.e),0)},
K:function(){return this.A("")}},
de:{"^":"b;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ae(J.aa(z.e),0)},
K:function(){return this.A("")},
p:{
iH:function(a){var z=new F.de()
if(a.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.Z()
return z}}},
ad:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
hQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.P()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.aL())}this.a.P()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.P()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.iH(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.P()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.P()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.b0()
s=p.a
if(s==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.F(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.P()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.P()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.P()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.c3(p,o,l)}z=this.e
if(!(z==null))z.az(0)},
au:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.az(0)
return y},
aJ:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aJ()||!1
if(!this.a.aJ())y=!1
z=this.e
if(!(z==null))z.az(0)
return y},
bn:function(){var z=this.e
if(!(z==null))++z.c
this.a.bn()
z=this.e
if(!(z==null))z.az(0)
return!0},
dn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
v=b.gcM(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dT])
for(r=0,q=0;q<w;++q){p=b.hp(q)
o=p.gcM(p)
C.a.m(s,q,new Z.dT(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hL(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bs(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ch(new Z.fe(34962,j),s,b)
i.b=H.e([],[Z.cn])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.P()
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.P()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.P()
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.F(a)},
Z:function(){return this.a8(null)},
$isdi:1,
p:{
bN:function(){var z,y
z=new F.ad()
y=new F.kc(z)
y.b=!1
y.c=H.e([],[F.a2])
z.a=y
y=new F.ja(z)
y.b=H.e([],[F.de])
z.b=y
y=new F.j9(z)
y.b=H.e([],[F.b0])
z.c=y
y=new F.j8(z)
y.b=H.e([],[F.aj])
z.d=y
z.e=null
return z}}},
di:{"^":"cW;"},
j8:{"^":"b;a,0b",
hn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.a2],"$asd")
z=H.e([],[F.aj])
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
gk:function(a){return this.b.length},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c9())x=!1
return x},
aJ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c8())x=!1
return x},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
j9:{"^":"b;a,0b",
ar:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.b0()
if(b==null)H.p(P.u("May not create a line with a null start vertex."))
if(c==null)H.p(P.u("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.p(P.u("May not create a line with vertices attached to different shapes."))
z.a=b
C.a.h(b.c.b,z)
z.b=c
C.a.h(c.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.Z()
return z},
gk:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
K:function(){return this.A("")}},
ja:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
a2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cc:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cB(this.cx,x,u,z,y,w,v,a,t)},
aL:function(){return this.cc(null)},
se3:function(a){var z
a=a.D(0,Math.sqrt(a.I(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Z()}},
sat:function(a){var z
a=a==null?null:a.D(0,Math.sqrt(a.I(a)))
if(!J.R(this.x,a)){this.x=a
z=this.a
if(z!=null)z.Z()}},
sij:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
sa1:function(a,b){var z
if(!J.R(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.Z()}},
hL:function(a){var z,y
z=J.J(a)
if(z.v(a,$.$get$aB())){z=this.f
y=[P.z]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aA())){z=this.r
y=[P.z]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$az())){z=this.x
y=[P.z]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aU())){z=this.y
y=[P.z]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.v(a,$.$get$aV())){z=this.z
y=[P.z]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$b3())){z=this.Q
y=[P.z]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bP())){z=this.Q
y=[P.z]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bq()))return H.e([this.ch],[P.z])
else if(z.v(a,$.$get$aT())){z=this.cx
y=[P.z]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.z])},
c9:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.E(0,new F.kj(z))
z=z.a
this.r=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
c8:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.E(0,new F.ki(z))
z=z.a
this.x=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
dR:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.b
x.a.a.P()
x=x.e
a.a.a.P()
v=a.e
if(x==null?v==null:x===v)return w}return},
hA:function(a){var z=this.dR(a)
if(z!=null)return z
return a.dR(this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y,x
z=H.e([],[P.j])
C.a.h(z,C.b.ae(J.aa(this.e),0))
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
x=C.a.B(z,", ")
return a+"{"+x+"}"},
K:function(){return this.A("")},
p:{
cB:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.a2()
y=new F.kh(z)
y.b=H.e([],[F.de])
z.b=y
y=new F.kg(z)
x=[F.b0]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kd(z)
x=[F.aj]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fb()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$az().a)!==0?b:null
z.y=(x&$.$get$aU().a)!==0?f:null
z.z=(x&$.$get$aV().a)!==0?g:null
z.Q=(x&$.$get$fc().a)!==0?c:null
z.ch=(x&$.$get$bq().a)!==0?i:0
z.cx=(x&$.$get$aT().a)!==0?a:null
return z}}},
kj:{"^":"n:4;a",
$1:function(a){var z,y
H.c(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
ki:{"^":"n:4;a",
$1:function(a){var z,y
H.c(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
kc:{"^":"b;a,0b,0c",
P:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Z()
return!0},
dk:function(a,b,c){var z=F.cB(null,null,null,new V.aw(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c9()
return!0},
aJ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c8()
return!0},
bn:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.D(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
this.P()
z=H.e([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
kd:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){H.f(b,{func:1,ret:-1,args:[F.aj]})
C.a.E(this.b,b)
C.a.E(this.c,new F.ke(this,b))
C.a.E(this.d,new F.kf(this,b))},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
ke:{"^":"n:4;a,b",
$1:function(a){H.c(a,"$isaj")
if(!J.R(a.a,this.a))this.b.$1(a)}},
kf:{"^":"n:4;a,b",
$1:function(a){var z
H.c(a,"$isaj")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
kg:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
kh:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}}}],["","",,O,{"^":"",hO:{"^":"cx;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gw:function(){var z=this.rx
if(z==null){z=D.N()
this.rx=z}return z},
V:function(a){var z=this.rx
if(!(z==null))z.F(a)},
ai:function(a,b){},
ee:function(a,b){var z,y,x,w
if(this.a==null){z=H.c(a.fr.j(0,"Inspection"),"$isec")
if(z==null){y=a.a
z=new A.ec(y,"Inspection")
z.cO(y,"Inspection")
z.e_(0,$.hT,$.hR)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"normAttr")
z.z=z.f.j(0,"clrAttr")
z.Q=z.f.j(0,"binmAttr")
z.ch=H.i(z.r.j(0,"lightVec"),"$isH")
z.cx=H.i(z.r.j(0,"ambientClr"),"$isH")
z.cy=H.i(z.r.j(0,"diffuseClr"),"$isH")
z.db=H.i(z.r.j(0,"weightScalar"),"$isa_")
z.dx=H.i(z.r.j(0,"viewMat"),"$isap")
z.dy=H.i(z.r.j(0,"viewObjMatrix"),"$isap")
z.fr=H.i(z.r.j(0,"projViewObjMatrix"),"$isap")
a.dl(z)}this.a=z}if(b.e==null){b.d.au()
b.d.aJ()
b.d.bn()
y=new Z.dU()
y.a=new H.aQ(0,0,[P.j,Z.ch])
b.e=y}y=this.a
y.as(a)
x=this.r2
w=y.db
w.a.uniform1f(w.d,x)
x=this.b
w=y.ch
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.gY(x)
w=y.dx
w.toString
w.a5(x.a4(0,!0))
x=a.gem()
w=y.dy
w.toString
w.a5(x.a4(0,!0))
x=a.geb()
y=y.fr
y.toString
y.a5(x.a4(0,!0))
y=b.e
if(y instanceof Z.dU){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
if(this.k3)this.fG(a,y,b.d,"Axis",H.f(this.gcT(),{func:1,ret:F.ad,args:[F.di]}),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}else{w.enable(2929)
a.a.disable(3042)
a.a.disable(2929)
a.a.enable(3042)
if(this.ch)this.bj(a,y,b.c,"wireFrame",this.gfZ(),this.f,this.e)
if(this.cy)this.bj(a,y,b.c,"normals",this.gf9(),this.f,this.e)
if(this.db)this.bj(a,y,b.c,"binormals",this.geQ(),this.f,this.e)
if(this.k3)this.bj(a,y,b.c,"Axis",this.gcT(),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.ds()},
bj:function(a,b,c,d,e,f,g){var z,y,x
H.f(e,{func:1,ret:F.ad,args:[F.ad]})
z=b.a.j(0,d)
if(z==null){z=this.cU(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.e8(a)},
fG:function(a,b,c,d,e,f,g){var z,y,x
H.f(e,{func:1,ret:F.ad,args:[F.di]})
z=b.a.j(0,d)
if(z==null){z=this.cU(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.e8(a)},
cU:function(a,b){var z,y,x,w
H.c(b,"$isad")
z=a.a
y=$.$get$aB()
x=$.$get$aA()
w=b.dn(new Z.ff(z),new Z.b2(y.a|x.a|$.$get$az().a|$.$get$b3().a))
w.ac($.$get$aB()).e=this.a.x.c
w.ac($.$get$aA()).e=this.a.y.c
w.ac($.$get$b3()).e=this.a.z.c
w.ac($.$get$az()).e=this.a.Q.c
return w},
h_:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bN()
z.a=new V.aF(0,0.7,1,1)
x=a.a
x.toString
z=H.f(new O.hV(z,y),{func:1,ret:-1,args:[F.a2]})
C.a.E(x.c,z)
z=new O.hU(y)
x=a.c
x.toString
w=H.f(new O.hW(y,z),{func:1,ret:-1,args:[F.b0]})
C.a.E(x.b,w)
w=a.d
w.toString
z=H.f(new O.hX(y,z),{func:1,ret:-1,args:[F.aj]})
C.a.E(w.b,z)
return y},function(a){return this.h_(a,null)},"j2","$2$color","$1","gfZ",4,3,44],
iz:[function(a){var z,y,x
z=F.bN()
y=a.a
y.toString
x=H.f(new O.hS(new V.aF(1,1,0.3,1),z),{func:1,ret:-1,args:[F.a2]})
C.a.E(y.c,x)
return z},"$1","gf9",4,0,11],
iu:[function(a){var z,y,x
z=F.bN()
y=a.a
y.toString
x=H.f(new O.hQ(new V.aF(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.a2]})
C.a.E(y.c,x)
return z},"$1","geQ",4,0,11],
it:[function(a){return this.eP(a)},"$1","gcT",4,0,11],
eP:function(a){var z,y
z=F.bN()
y=new O.hP(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z}},hV:{"^":"n:10;a,b",
$1:function(a){var z,y
H.c(a,"$isa2")
z=this.b.a
y=a.aL()
y.sa1(0,this.a.a)
y.sat(new V.G(0,0,0))
z.h(0,y)}},hU:{"^":"n:47;a",
$2:function(a,b){if(a.hA(b)==null)this.a.c.ar(0,a,b)}},hW:{"^":"n:48;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isb0")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.P()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.h(z,x)
this.b.$2(w,z[x])}},hX:{"^":"n:4;a,b",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isaj")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.h(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.P()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.h(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},hS:{"^":"n:10;a,b",
$1:function(a){var z,y,x
z=H.c(a,"$isa2").aL()
z.sa1(0,this.a)
z.sat(new V.G(0,0,0))
y=z.aL()
y.sat(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ar(0,z,y)}},hQ:{"^":"n:10;a,b",
$1:function(a){var z,y,x
H.c(a,"$isa2")
z=a.aL()
z.sa1(0,this.a)
z.sat(new V.G(0,0,0))
y=z.aL()
y.sat(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ar(0,z,y)}},hP:{"^":"n;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.aF(z,y,x,1)
z=this.a
v=z.a.dk(0,0,0)
v.sat(new V.G(0,0,0))
v.se3(new V.G(1,0,0))
v.sa1(0,w)
u=z.a.dk(a,b,c)
u.sat(new V.G(0,0,0))
u.se3(new V.G(1,0,0))
u.sa1(0,w)
z.c.ar(0,v,u)}},io:{"^":"cx;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.N()
this.dy=z}return z},
V:[function(a){var z
H.c(a,"$ist")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.V(null)},"ff","$1","$0","gbi",0,2,0],
fK:[function(a){H.c(a,"$ist")
this.a=null
this.V(a)},function(){return this.fK(null)},"iZ","$1","$0","gfJ",0,2,0],
iC:[function(a,b){var z=V.aG
z=new D.co(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.V(z)},"$2","gfc",8,0,20],
iD:[function(a,b){var z=V.aG
z=new D.cp(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.V(z)},"$2","gfd",8,0,20],
d_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a3(z.e.length+3,4)*4
x=C.d.a3(z.f.length+3,4)*4
w=C.d.a3(z.r.length+3,4)*4
v=C.d.a3(z.x.length+3,4)*4
u=C.d.a3(z.y.length+3,4)*4
t=C.d.a3(z.z.length+3,4)*4
s=C.d.a3(this.e.a.length+3,4)*4
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
a6=$.$get$aB()
if(c){z=$.$get$aA()
a6=new Z.b2(a6.a|z.a)}if(b){z=$.$get$az()
a6=new Z.b2(a6.a|z.a)}if(a){z=$.$get$aU()
a6=new Z.b2(a6.a|z.a)}if(a0){z=$.$get$aV()
a6=new Z.b2(a6.a|z.a)}if(a2){z=$.$get$aT()
a6=new Z.b2(a6.a|z.a)}return new A.is(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.w(a,"$isd",[T.dl],"$asd")
if(b!=null)if(!C.a.b_(a,b)){b.a=a.length
C.a.h(a,b)}},
ai:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.av(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cF(x)}}},
ee:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d_()
y=H.c(a.fr.j(0,z.av),"$isep")
if(y==null){y=A.ip(z,a.a)
a.dl(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aQ
z=b.e
if(!(z instanceof Z.ch)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.au()
v=x.r2
if(v)b.d.aJ()
u=x.ry
if(u)b.d.bn()
t=b.d.dn(new Z.ff(a.a),w)
t.ac($.$get$aB()).e=this.a.y.c
if(z)t.ac($.$get$aA()).e=this.a.Q.c
if(v)t.ac($.$get$az()).e=this.a.z.c
if(x.rx)t.ac($.$get$aU()).e=this.a.ch.c
if(u)t.ac($.$get$aV()).e=this.a.cx.c
if(x.x1)t.ac($.$get$aT()).e=this.a.cy.c
b.e=t}z=T.dl
s=H.e([],[z])
this.a.as(a)
if(x.fx){v=this.a
u=a.dx
u=u.gY(u)
v=v.db
v.toString
v.a5(u.a4(0,!0))}if(x.fy){v=this.a
u=a.gem()
v=v.dx
v.toString
v.a5(u.a4(0,!0))}v=this.a
u=a.geb()
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
v.a5(C.t.a4(u,!0))}if(x.aP>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.z],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.c(p,"$isaG")
u=u.k3
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.bs(H.w(p.a4(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.W(s,this.f.d)
v=this.a
u=this.f.d
v.ag(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.W(s,this.f.e)
v=this.a
u=this.f.e
v.ab(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.W(s,this.r.d)
v=this.a
u=this.r.d
v.ag(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.W(s,this.r.e)
v=this.a
u=this.r.e
v.ab(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.W(s,this.x.d)
v=this.a
u=this.x.d
v.ag(v.aP,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.W(s,this.x.e)
v=this.a
u=this.x.e
v.ab(v.av,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bq
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.W(s,this.y.d)
v=this.a
u=this.y.d
v.ag(v.du,v.br,u)
u=this.a
v=this.y.f
u=u.bq
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.W(s,this.y.e)
v=this.a
u=this.y.e
v.ab(v.dv,v.br,u)
u=this.a
v=this.y.f
u=u.bq
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bs
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bu
u.a.uniform1f(u.d,n)
break
case C.e:this.W(s,this.z.d)
v=this.a
u=this.z.d
v.ag(v.dw,v.bt,u)
u=this.a
v=this.z.f
u=u.bs
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bu
v.a.uniform1f(v.d,n)
break
case C.f:this.W(s,this.z.e)
v=this.a
u=this.z.e
v.ab(v.dz,v.bt,u)
u=this.a
v=this.z.f
u=u.bs
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bu
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dK
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.cg
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cF(j.a)
n=p.a
h=p.b
g=p.c
g=p.D(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dL
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.ci
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bc(j.gb6(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.ga1(j)
g=i.d
h=p.gbE()
n=p.gbd()
p=p.gbm()
g.a.uniform3f(g.d,h,n,p)
p=j.gc3()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gc4()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gc5()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dM
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.cj
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gce(j).j7()
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.bc(j.gb6(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.ga1(j)
n=i.e
h=p.gbE()
g=p.gbd()
p=p.gbm()
n.a.uniform3f(n.d,h,g,p)
p=j.gj4()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gj3()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gc5()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dN
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
n=this.a.ck
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gb8()
H.w(s,"$isd",p,"$asd")
if(!C.a.b_(s,n)){n.sbh(s.length)
C.a.h(s,n)}n=j.gce(j)
h=i.d
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=j.gbF()
f=i.b
g=n.gaM(n)
h=n.gaN(n)
n=n.gaO()
f.a.uniform3f(f.d,g,h,n)
n=j.gb7(j)
h=i.c
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=m.cF(j.gce(j))
f=n.a
g=n.b
h=n.c
h=n.D(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga1(j)
g=i.f
f=h.gbE()
n=h.gbd()
h=h.gbm()
g.a.uniform3f(g.d,f,n,h)
h=j.gb8()
n=h.gcs(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gf1()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbh())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dO
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.y,u=v.length,p=[P.z],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
h=this.a.cl
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gb8()
H.w(s,"$isd",n,"$asd")
if(!C.a.b_(s,h)){h.sbh(s.length)
C.a.h(s,h)}e=m.l(0,j.gY(j))
h=j.gY(j).bc(new V.aw(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcI(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bc(new V.aw(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.e0(0)
d=i.d
o=new Float32Array(H.bs(H.w(new V.eq(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.ga1(j)
h=i.e
f=d.gbE()
g=d.gbd()
d=d.gbm()
h.a.uniform3f(h.d,f,g,d)
d=j.gb8()
h=d.gcs(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcs(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gj5(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc3()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc4()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc5()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dP
v.a.uniform1i(v.d,r)
v=a.db
m=v.gY(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.cm
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb8()
H.w(s,"$isd",z,"$asd")
if(!C.a.b_(s,p)){p.sbh(s.length)
C.a.h(s,p)}p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gce(j)
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=j.gbF()
n=i.d
h=p.gaM(p)
g=p.gaN(p)
p=p.gaO()
n.a.uniform3f(n.d,h,g,p)
p=j.gb7(j)
g=i.e
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.bc(j.gb6(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb8()
n=p.gcs(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gf1()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbh())
p=i.x
p.a.uniform1i(p.d,0)}p=j.ga1(j)
n=i.y
h=p.gbE()
g=p.gbd()
p=p.gbm()
n.a.uniform3f(n.d,h,g,p)
p=j.gje()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gjf()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gc5()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.W(s,this.Q.d)
z=this.a
v=this.Q.d
z.ag(z.dA,z.bv,v)
break
case C.f:this.W(s,this.Q.e)
z=this.a
v=this.Q.e
z.ab(z.dB,z.bv,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gY(v).e0(0)
a.Q=v}z=z.fy
z.toString
z.a5(v.a4(0,!0))}if(x.dy){this.W(s,this.ch)
z=this.a
v=this.ch
z.ab(z.dC,z.dD,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bw
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.W(s,this.cx.d)
z=this.a
v=this.cx.d
z.ag(z.dE,z.bx,v)
v=this.a
z=this.cx.f
v=v.bw
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.f:this.W(s,this.cx.e)
z=this.a
v=this.cx.e
z.ab(z.dF,z.bx,v)
v=this.a
z=this.cx.f
v=v.bw
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bz
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.by
v.a.uniform1f(v.d,p)
break
case C.e:this.W(s,this.cy.d)
z=this.a
v=this.cy.d
z.ag(z.dG,z.bA,v)
v=this.a
z=this.cy.f
v=v.bz
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.by
z.a.uniform1f(z.d,p)
break
case C.f:this.W(s,this.cy.e)
z=this.a
v=this.cy.e
z.ab(z.dH,z.bA,v)
v=this.a
z=this.cy.f
v=v.bz
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.by
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bB
z.a.uniform1f(z.d,u)
break
case C.e:this.W(s,this.db.d)
z=this.a
u=this.db.d
z.ag(z.dI,z.bC,u)
u=this.a
z=this.db.f
u=u.bB
u.a.uniform1f(u.d,z)
break
case C.f:this.W(s,this.db.e)
z=this.a
u=this.db.e
z.ab(z.dJ,z.bC,u)
u=this.a
z=this.db.f
u=u.bB
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.i(b.e,"$isch")
z.as(a)
z.ay(a)
z.ej(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.ds()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d_().av}},iq:{"^":"d8;0f,a,b,0c,0d,0e"},d8:{"^":"b;",
V:[function(a){this.a.V(H.c(a,"$ist"))},function(){return this.V(null)},"ff","$1","$0","gbi",0,2,0],
aX:["ey",function(){}],
fO:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gbi(),{func:1,ret:-1,args:[D.t]})
C.a.a0(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gbi(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.I(this.b+".texture2D",x,this.d,this,[T.eI])
z.b=!0
this.a.V(z)}},
fP:function(a){}},ir:{"^":"d8;a,b,0c,0d,0e"},bd:{"^":"d8;0f,a,b,0c,0d,0e",
dc:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.V(y)}},
aX:["bL",function(){this.ey()
this.dc(new V.U(1,1,1))}],
sa1:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aX()
z=this.a
z.a=null
z.V(null)}this.dc(b)}},it:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
fN:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.V(z)}},
aX:function(){this.bL()
this.fN(1)}},iu:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
c0:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.V(z)}},
aX:function(){this.bL()
this.c0(100)}},cx:{"^":"b;"}}],["","",,T,{"^":"",dl:{"^":"cQ;"},eI:{"^":"dl;0b,0c,0d,0e,0f,0r,0x,0y,a"},js:{"^":"b;a,0b,0c,0d,0e",
hO:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eb(null,a,null)
w=new T.eI(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.N()
z=W.af
W.a3(x,"load",H.f(new T.jt(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hN:function(a){return this.hO(a,!1,!1,!1,!1)},
fL:function(a,b,c){var z,y,x,w
b=V.dK(b,2)
z=V.dK(a.width,2)
y=V.dK(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cV(null,null)
x.width=z
x.height=y
w=H.c(C.l.eo(x,"2d"),"$isdX")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mq(w.getImageData(0,0,x.width,x.height))}}},jt:{"^":"n:18;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fL(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ih(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hw()}++x.e}}}],["","",,V,{"^":"",hb:{"^":"b;",
b2:function(a,b){return!0},
i:function(a){return"all"},
$isc6:1},c6:{"^":"b;"},eo:{"^":"b;",
b2:["ex",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b2(0,b))return!0
return!1}],
i:["cN",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc6:1},bK:{"^":"eo;0a",
b2:function(a,b){return!this.ex(0,b)},
i:function(a){return"!["+this.cN(0)+"]"}},j6:{"^":"b;0a",
eC:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.aQ(0,0,[P.m,P.a5])
for(y=new H.el(a,a.gk(a),0,[H.aC(a,"v",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
b2:function(a,b){return this.a.bp(0,b)},
i:function(a){var z=this.a
return P.c9(z.gal(z),0,null)},
$isc6:1,
p:{
a9:function(a){var z=new V.j6()
z.eC(a)
return z}}},eD:{"^":"b;a,b,0c,0d",
ghR:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eO(this.a.M(0,b))
w.a=H.e([],[V.c6])
w.c=!1
C.a.h(this.c,w)
return w},
hz:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b2(0,a))return w}return},
i:function(a){return this.b}},eL:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h2(this.b,"\n","\\n")
y=H.h2(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eM:{"^":"b;a,b,0c",
i:function(a){return this.b}},jC:{"^":"b;0a,0b,0c",
M:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eD(this,b)
z.c=H.e([],[V.eO])
this.a.m(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eM(this,a)
y=P.j
z.c=new H.aQ(0,0,[y,y])
this.b.m(0,a,z)}return z},
ip:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eL])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hz(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c9(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c9(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eL(o==null?p.b:o,q,t)}++t}}}},eO:{"^":"eo;b,0c,0a",
i:function(a){return this.b.b+": "+this.cN(0)}}}],["","",,X,{"^":"",dW:{"^":"b;",$isaR:1},hL:{"^":"eG;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z}},iE:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
aV:[function(a){var z
H.c(a,"$ist")
z=this.e
if(!(z==null))z.F(a)},function(){return this.aV(null)},"is","$1","$0","gcQ",0,2,0],
sb3:function(a){var z,y,x
if(!J.R(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.f(this.gcQ(),{func:1,ret:-1,args:[D.t]})
C.a.a0(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gcQ(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.I("mover",x,this.a,this,[U.ac])
z.b=!0
this.aV(z)}},
$isaR:1,
$isdW:1},eG:{"^":"b;"}}],["","",,V,{"^":"",
mM:function(a){P.jB(C.G,new V.mN(a))},
mN:{"^":"n:51;a",
$1:function(a){H.c(a,"$isbn")
P.dL(C.j.ei(this.a.ghE(),2)+" fps")}},
jb:{"^":"b;0a,0b",
eD:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.f(new V.je(x),{func:1,ret:-1,args:[t]}),!1,t)},
ho:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.j],"$asd")
this.fR()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ip(C.a.hJ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.h1(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cE(C.S,s,C.k,!1)
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
hm:function(a){var z,y,x,w,v,u,t
H.w(a,"$isd",[P.j],"$asd")
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
x=H.c(w.insertCell(-1),"$isdk").style
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
t=H.c(w.insertCell(-1),"$isdk")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fR:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jC()
y=P.j
z.a=new H.aQ(0,0,[y,V.eD])
z.b=new H.aQ(0,0,[y,V.eM])
z.c=z.M(0,"Start")
y=z.M(0,"Start").B(0,"Bold")
x=V.a9(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").B(0,"Bold")
x=new V.bK()
w=[V.c6]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a6("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").B(0,"BoldEnd")
x=V.a9(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").B(0,"Italic")
x=V.a9(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").B(0,"Italic")
x=new V.bK()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a6("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").B(0,"ItalicEnd")
x=V.a9(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").B(0,"Code")
x=V.a9(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").B(0,"Code")
x=new V.bK()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a6("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").B(0,"CodeEnd")
x=V.a9(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").B(0,"LinkHead")
x=V.a9(new H.a6("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").B(0,"LinkTail")
x=V.a9(new H.a6("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").B(0,"LinkEnd")
y=V.a9(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").B(0,"LinkHead")
y=new V.bK()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a6("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").B(0,"LinkEnd")
y=V.a9(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").B(0,"LinkTail")
y=new V.bK()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a6("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").B(0,"Other").a,new V.hb())
x=z.M(0,"Other").B(0,"Other")
y=new V.bK()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a6("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.M(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
p:{
jc:function(a,b){var z=new V.jb()
z.eD(a,!0)
return z}}},
je:{"^":"n:18;a",
$1:function(a){P.jA(C.r,new V.jd(this.a))}},
jd:{"^":"n:2;a",
$0:function(){var z,y,x
z=C.j.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jp:{"^":"b;a,b,0c,d",
ar:function(a,b,c){var z,y,x,w,v,u
z=W.eb(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.ce(this.c)
x=y.gk(y)
y=W.ag
W.a3(z,"click",H.f(new V.jr(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.ce(this.c).h(0,z)
J.ce(this.c).h(0,document.createElement("br"))
w=P.f7().gcB().j(0,H.l(this.a))
if(w==null){this.dh(x)
v=c}else{u=P.bZ(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.ar(a,b,!1)},
dh:function(a){var z,y,x,w,v
z=P.f7()
y=P.j
x=P.ib(z.gcB(),y,y)
x.m(0,this.a,H.l(a))
w=z.ef(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lm([],[]).cG(""),"",v)}},
jr:{"^":"n:52;a,b,c,d",
$1:function(a){var z,y
H.c(a,"$isag")
z=this.a
y=J.ce(z.c)
y.E(y,new V.jq())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dh(this.d)}},
jq:{"^":"n:53;",
$1:function(a){var z
H.c(a,"$isV")
if(!!J.J(a).$isd1){z=a.style
z.border="solid 2px white"}}}}],["","",,N,{"^":"",
fY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.jc("Test 006",!0)
y=W.cV(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.ho(H.e(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],x))
z.hm(H.e(["bumpMaps"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jy(w,!0,!0,!0,!1)
u=F.bN()
F.bV(u,null,null,1,1,1,0,0,1)
F.bV(u,null,null,1,1,0,1,0,3)
F.bV(u,null,null,1,1,0,0,1,2)
F.bV(u,null,null,1,1,-1,0,0,0)
F.bV(u,null,null,1,1,0,-1,0,0)
F.bV(u,null,null,1,1,0,0,-1,3)
u.au()
t=new O.io()
z=O.cX(V.aG)
t.e=z
z.bf(t.gfc(),t.gfd())
z=new O.bd(t,"emission")
z.c=C.c
z.f=new V.U(0,0,0)
t.f=z
z=new O.bd(t,"ambient")
z.c=C.c
z.f=new V.U(0,0,0)
t.r=z
z=new O.bd(t,"diffuse")
z.c=C.c
z.f=new V.U(0,0,0)
t.x=z
z=new O.bd(t,"invDiffuse")
z.c=C.c
z.f=new V.U(0,0,0)
t.y=z
z=new O.iu(t,"specular")
z.c=C.c
z.f=new V.U(0,0,0)
z.ch=100
t.z=z
z=new O.ir(t,"bump")
z.c=C.c
t.Q=z
t.ch=null
z=new O.bd(t,"reflect")
z.c=C.c
z.f=new V.U(0,0,0)
t.cx=z
z=new O.it(t,"refract")
z.c=C.c
z.f=new V.U(0,0,0)
z.ch=1
t.cy=z
z=new O.iq(t,"alpha")
z.c=C.c
z.f=1
t.db=z
z=new D.i5()
z.bM(D.a4)
z.e=H.e([],[D.ck])
z.f=H.e([],[D.iG])
z.r=H.e([],[D.jf])
z.x=H.e([],[D.ju])
z.y=H.e([],[D.jv])
z.z=H.e([],[D.jw])
z.Q=null
z.ch=null
z.cL(z.gfb(),z.gfz(),z.gfB())
t.dx=z
s=z.Q
if(s==null){s=D.N()
z.Q=s
z=s}else z=s
s={func:1,ret:-1,args:[D.t]}
r=H.f(t.gfJ(),s)
C.a.h(z.a,r)
r=t.dx
z=r.ch
if(z==null){z=D.N()
r.ch=z}r=H.f(t.gbi(),s)
C.a.h(z.a,r)
t.dy=null
r=t.dx
z=U.e_(V.er(new V.aw(0,0,0),new V.G(0,1,0),new V.G(0,0,-1)))
q=new V.U(1,1,1)
p=new D.ck()
p.c=new V.U(1,1,1)
p.a=new V.G(0,0,1)
o=p.b
p.b=z
z=z.gw()
z.toString
n=H.f(p.geI(),s)
C.a.h(z.a,n)
z=new D.I("mover",o,p.b,p,[U.ac])
z.b=!0
p.aC(z)
if(!p.c.v(0,q)){o=p.c
p.c=q
z=new D.I("color",o,q,p,[V.U])
z.b=!0
p.aC(z)}r.h(0,p)
z=t.r
z.sa1(0,new V.U(0,0,1))
z=t.x
z.sa1(0,new V.U(0,1,0))
z=t.z
z.sa1(0,new V.U(1,0,0))
z=t.z
if(z.c===C.c){z.c=C.h
z.bL()
z.c0(100)
r=z.a
r.a=null
r.V(null)}z.c0(10)
m=E.d_(null,!0,null,"",null,null)
m.sbJ(0,u)
m.scE(t)
l=E.d_(null,!0,null,"",null,null)
l.sbJ(0,u)
z=new O.hO()
z.b=new V.G(0,0,-1)
z.c=new V.U(0.2,0.3,0.4)
z.d=new V.U(0.1,0.2,0.3)
z.e=new V.U(0.7,0.7,0.7)
z.f=new V.U(0.3,0.3,0.3)
z.r=new V.U(0.5,0.5,0.5)
z.x=new V.U(0.5,0.5,0.5)
z.y=new V.U(1,1,1)
z.z=new V.U(0.8,0.8,0.8)
z.Q=!1
z.ch=!1
z.cx=!1
z.cy=!1
z.db=!1
z.dx=!1
z.dy=!1
z.fr=!1
z.fx=!1
z.fy=!1
z.go=!1
z.id=!1
z.k1=!1
z.k2=!1
z.k3=!1
z.k4=!1
z.r1=!1
z.r2=1
if(!$.r.$2(1,0.4)){z.r2=0.4
r=new D.I("vectorScale",1,0.4,z,[P.z])
r.b=!0
z.V(r)}if(!z.ch){z.ch=!0
r=new D.I("showWireFrame",!1,!0,z,[P.a5])
r.b=!0
z.V(r)}if(!z.k3){z.k3=!0
r=new D.I("showAxis",!1,!0,z,[P.a5])
r.b=!0
z.V(r)}if(!z.cy){z.cy=!0
r=new D.I("showNormals",!1,!0,z,[P.a5])
r.b=!0
z.V(r)}if(!z.db){z.db=!0
r=new D.I("showBinormals",!1,!0,z,[P.a5])
r.b=!0
z.V(r)}l.scE(z)
k=E.d_(null,!0,null,"",null,null)
k.y.h(0,l)
k.y.h(0,m)
z=new U.ea()
z.bM(U.ac)
z.bf(z.gfa(),z.gfA())
z.e=null
z.f=V.c7()
z.r=0
r=v.r
p=new U.k2()
n=U.cY()
n.scH(0,!0)
n.sct(6.283185307179586)
n.scv(0)
n.sa6(0,0)
n.scu(100)
n.sU(0)
n.scd(0.5)
p.b=n
n=n.gw()
n.toString
j=H.f(p.gaD(),s)
C.a.h(n.a,j)
n=U.cY()
n.scH(0,!0)
n.sct(6.283185307179586)
n.scv(0)
n.sa6(0,0)
n.scu(100)
n.sU(0)
n.scd(0.5)
p.c=n
C.a.h(n.gw().a,j)
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
i=new X.aI(!1,!1,!1)
o=p.d
p.d=i
n=[X.aI]
j=new D.I("modifiers",o,i,p,n)
j.b=!0
p.S(j)
j=p.f
if(j!==!1){p.f=!1
j=new D.I("invertX",j,!1,p,[P.a5])
j.b=!0
p.S(j)}j=p.r
if(j!==!0){p.r=!0
j=new D.I("invertY",j,!0,p,[P.a5])
j.b=!0
p.S(j)}p.aZ(r)
z.h(0,p)
r=v.r
p=new U.k1()
j=U.cY()
j.scH(0,!0)
j.sct(6.283185307179586)
j.scv(0)
j.sa6(0,0)
j.scu(100)
j.sU(0)
j.scd(0.2)
p.b=j
j=j.gw()
j.toString
h=H.f(p.gaD(),s)
C.a.h(j.a,h)
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
i=new X.aI(!0,!1,!1)
o=p.c
p.c=i
j=new D.I("modifiers",o,i,p,n)
j.b=!0
p.S(j)
p.aZ(r)
z.h(0,p)
r=v.r
p=new U.k3()
p.c=0.01
p.d=0
p.e=0
i=new X.aI(!1,!1,!1)
p.b=i
n=new D.I("modifiers",null,i,p,n)
n.b=!0
p.S(n)
p.aZ(r)
z.h(0,p)
k.sb3(z)
z=new M.hE()
r=O.cX(E.aP)
z.d=r
r.bf(z.gfg(),z.gfh())
z.e=null
z.f=null
z.r=null
z.x=null
g=new X.iE()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.sb3(null)
r=g.b
if(!$.r.$2(r,1.0471975511965976)){o=g.b
g.b=1.0471975511965976
r=new D.I("fov",o,1.0471975511965976,g,[P.z])
r.b=!0
g.aV(r)}r=g.c
if(!$.r.$2(r,0.1)){o=g.c
g.c=0.1
r=new D.I("near",o,0.1,g,[P.z])
r.b=!0
g.aV(r)}r=g.d
if(!$.r.$2(r,2000)){o=g.d
g.d=2000
r=new D.I("far",o,2000,g,[P.z])
r.b=!0
g.aV(r)}r=z.a
if(r!==g){if(r!=null){r=r.gw()
r.toString
p=H.f(z.gaE(),s)
C.a.a0(r.a,p)}o=z.a
z.a=g
r=g.gw()
r.toString
p=H.f(z.gaE(),s)
C.a.h(r.a,p)
r=new D.I("camera",o,z.a,z,[X.dW])
r.b=!0
z.aU(r)}f=new X.hL()
r=new V.aF(0,0,0,1)
f.a=r
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
r=V.eB(0,0,1,1)
f.r=r
r=z.b
if(r!==f){if(r!=null){r=r.gw()
r.toString
p=H.f(z.gaE(),s)
C.a.a0(r.a,p)}o=z.b
z.b=f
r=f.gw()
r.toString
p=H.f(z.gaE(),s)
C.a.h(r.a,p)
r=new D.I("target",o,z.b,z,[X.eG])
r.b=!0
z.aU(r)}z.d.h(0,k)
z.a.sb3(U.e_(V.aH(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=v.d
if(r!==z){if(r!=null){r=r.gw()
r.toString
p=H.f(v.gcP(),s)
C.a.a0(r.a,p)}v.d=z
z=z.gw()
z.toString
s=H.f(v.gcP(),s)
C.a.h(z.a,s)
v.eG()}z=new V.jp("bumpMaps",!0,new N.mF(t,v))
x=x.getElementById("bumpMaps")
z.c=x
if(x==null)H.p("Failed to find bumpMaps for Texture2DGroup")
z.ar(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
V.mM(v)},
mF:{"^":"n:25;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.hN(a)
x=z.c
if(x!==C.e){if(x===C.c)z.aX()
z.c=C.e
z.fP(null)
x=z.a
x.a=null
x.V(null)}z.fO(y)}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ef.prototype
return J.ee.prototype}if(typeof a=="string")return J.cr.prototype
if(a==null)return J.eg.prototype
if(typeof a=="boolean")return J.i0.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.aM=function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.cc=function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.mv=function(a){if(typeof a=="number")return J.cq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cz.prototype
return a}
J.dG=function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cz.prototype
return a}
J.b4=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).v(a,b)}
J.h4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mv(a).L(a,b)}
J.dM=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).j(a,b)}
J.cN=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fV(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cc(a).m(a,b,c)}
J.h5=function(a,b){return J.dG(a).H(a,b)}
J.h6=function(a,b,c){return J.b4(a).fH(a,b,c)}
J.h7=function(a,b,c,d){return J.b4(a).dj(a,b,c,d)}
J.h8=function(a,b){return J.dG(a).X(a,b)}
J.cO=function(a,b,c){return J.aM(a).hr(a,b,c)}
J.cP=function(a,b){return J.cc(a).J(a,b)}
J.h9=function(a,b,c,d){return J.cc(a).aw(a,b,c,d)}
J.dN=function(a,b){return J.cc(a).E(a,b)}
J.ce=function(a){return J.b4(a).gca(a)}
J.b7=function(a){return J.J(a).gT(a)}
J.bA=function(a){return J.cc(a).ga_(a)}
J.au=function(a){return J.aM(a).gk(a)}
J.ha=function(a,b){return J.b4(a).i9(a,b)}
J.aa=function(a){return J.J(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cU.prototype
C.H=J.q.prototype
C.a=J.bc.prototype
C.I=J.ee.prototype
C.d=J.ef.prototype
C.t=J.eg.prototype
C.j=J.cq.prototype
C.b=J.cr.prototype
C.P=J.c5.prototype
C.V=H.dd.prototype
C.W=W.iB.prototype
C.z=J.iF.prototype
C.X=P.df.prototype
C.q=J.cz.prototype
C.A=W.bQ.prototype
C.B=W.km.prototype
C.D=new P.hf(!1)
C.C=new P.he(C.D)
C.E=new P.iD()
C.F=new P.kb()
C.i=new P.l8()
C.c=new A.ci(0,"ColorSourceType.None")
C.h=new A.ci(1,"ColorSourceType.Solid")
C.e=new A.ci(2,"ColorSourceType.Texture2D")
C.f=new A.ci(3,"ColorSourceType.TextureCube")
C.r=new P.bD(0)
C.G=new P.bD(5e6)
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
C.w=H.e(I.al([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.al([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.al([]),[P.j])
C.U=new H.hr(0,{},C.Q,[P.j,P.j])
C.k=new P.k4(!1)
$.aE=0
$.bB=null
$.dR=null
$.dz=!1
$.fT=null
$.fN=null
$.h0=null
$.cI=null
$.cL=null
$.dH=null
$.bt=null
$.bW=null
$.bX=null
$.dA=!1
$.T=C.i
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.r=V.iv()
$.hT="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.hR="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.ew=null
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fS("_$dart_dartClosure")},"d4","$get$d4",function(){return H.fS("_$dart_js")},"eP","$get$eP",function(){return H.aJ(H.cy({
toString:function(){return"$receiver$"}}))},"eQ","$get$eQ",function(){return H.aJ(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"eR","$get$eR",function(){return H.aJ(H.cy(null))},"eS","$get$eS",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aJ(H.cy(void 0))},"eX","$get$eX",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aJ(H.eV(null))},"eT","$get$eT",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aJ(H.eV(void 0))},"eY","$get$eY",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"du","$get$du",function(){return P.kn()},"bY","$get$bY",function(){return[]},"fa","$get$fa",function(){return P.k8()},"fh","$get$fh",function(){return H.iz(H.bs(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fD","$get$fD",function(){return P.iX("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fJ","$get$fJ",function(){return P.m7()},"e0","$get$e0",function(){return{}},"fd","$get$fd",function(){return Z.as(0)},"fb","$get$fb",function(){return Z.as(511)},"aB","$get$aB",function(){return Z.as(1)},"aA","$get$aA",function(){return Z.as(2)},"az","$get$az",function(){return Z.as(4)},"aU","$get$aU",function(){return Z.as(8)},"aV","$get$aV",function(){return Z.as(16)},"b3","$get$b3",function(){return Z.as(32)},"bP","$get$bP",function(){return Z.as(64)},"fc","$get$fc",function(){return Z.as(96)},"bq","$get$bq",function(){return Z.as(128)},"aT","$get$aT",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:P.E,args:[F.aj]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.m,[P.k,E.aP]]},{func:1,ret:P.E,args:[F.a2]},{func:1,ret:F.ad,args:[F.ad]},{func:1,ret:P.E,args:[D.t]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.z},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.E,args:[W.af]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,V.aG]]},{func:1,ret:-1,args:[P.m,[P.k,U.ac]]},{func:1,ret:P.j,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.k,D.a4]]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.a5,args:[W.L]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,args:[P.j]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.E,args:[P.X]},{func:1,args:[,P.j]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:P.a5,args:[P.z,P.z]},{func:1,ret:P.a5,args:[[P.k,D.a4]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.m]},{func:1,ret:P.E,args:[P.j,,]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:P.E,args:[F.a2,P.z,P.z]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:F.ad,args:[F.ad],named:{color:V.aF}},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:[P.aW,,],args:[,]},{func:1,ret:-1,args:[F.a2,F.a2]},{func:1,ret:P.E,args:[F.b0]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.E,args:[P.bn]},{func:1,ret:P.E,args:[W.ag]},{func:1,ret:P.E,args:[W.V]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:W.V,args:[W.L]}]
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
if(x==y)H.mP(d||a)
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
Isolate.dE=a.dE
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fY,[])
else N.fY([])})})()
//# sourceMappingURL=test.dart.js.map
