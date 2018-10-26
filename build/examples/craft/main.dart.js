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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.ee"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ee"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.ee(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ce=function(){}
var dart=[["","",,H,{"^":"",o3:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
ej:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.eh==null){H.ns()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cF("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dG()]
if(v!=null)return v
v=H.nv(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.$get$dG(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
t:{"^":"b;",
t:function(a,b){return a===b},
gU:function(a){return H.c0(a)},
i:["f1",function(a){return"Instance of '"+H.bz(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
iP:{"^":"t;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isad:1},
eV:{"^":"t;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isO:1},
dH:{"^":"t;",
gU:function(a){return 0},
i:["f2",function(a){return String(a)}]},
jq:{"^":"dH;"},
d5:{"^":"dH;"},
cy:{"^":"dH;",
i:function(a){var z=a[$.$get$eB()]
if(z==null)return this.f2(a)
return"JavaScript function for "+H.l(J.ar(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isdA:1},
bw:{"^":"t;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.C("add"))
a.push(b)},
W:function(a,b){var z
if(!!a.fixed$length)H.r(P.C("remove"))
for(z=0;z<a.length;++z)if(J.Z(a[z],b)){a.splice(z,1)
return!0}return!1},
aN:function(a,b){var z,y
H.p(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.bs(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
iK:function(a){return this.B(a,"")},
iE:function(a,b,c,d){var z,y,x
H.A(b,d)
H.o(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.c(P.bs(a))}return y},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
cd:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a2(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.x(a,0)])
return H.a(a.slice(b,c),[H.x(a,0)])},
gaT:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.iN())},
aC:function(a,b,c,d){var z
H.A(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.C("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.D(0,c);z=z.n(0,1))a[z]=d},
aq:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Z(a[z],b))return!0
return!1},
i:function(a){return P.dE(a,"[","]")},
ga4:function(a){return new J.aC(a,a.length,0,[H.x(a,0)])},
gU:function(a){return H.c0(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.cN(b,"newLength",null))
if(b<0)throw H.c(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aR(a,b))
if(b>=a.length||b<0)throw H.c(H.aR(a,b))
return a[b]},
l:function(a,b,c){H.B(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aR(a,b))
if(b>=a.length||b<0)throw H.c(H.aR(a,b))
a[b]=c},
$isG:1,
$asG:I.ce,
$isi:1,
$isd:1,
p:{
iO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.cN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a2(a,0,4294967295,"length",null))
return J.eS(new Array(a),b)},
eS:function(a,b){return J.bU(H.a(a,[b]))},
bU:function(a){H.cg(a)
a.fixed$length=Array
return a}}},
o2:{"^":"bw;$ti"},
aC:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cY:{"^":"t;",
cL:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.d.gc5(b)
if(this.gc5(a)===z)return 0
if(this.gc5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc5:function(a){return a===0?1/a<0:a<0},
ad:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.C(""+a+".toInt()"))},
be:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.C(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
is:function(a,b,c){if(C.d.cL(b,c)>0)throw H.c(H.ai(b))
if(this.cL(a,b)<0)return b
if(this.cL(a,c)>0)return c
return a},
eQ:function(a,b){var z
if(b>20)throw H.c(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gc5(a))return"-"+z
return z},
by:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.c(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.C("Unexpected toString result: "+z))
x=J.ap(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
bh:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
f_:function(a,b){if(b<0)throw H.c(H.ai(b))
return b>31?0:a<<b>>>0},
b7:function(a,b){var z
if(a>0)z=this.dQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hL:function(a,b){if(b<0)throw H.c(H.ai(b))
return this.dQ(a,b)},
dQ:function(a,b){return b>31?0:a>>>b},
D:function(a,b){if(typeof b!=="number")throw H.c(H.ai(b))
return a<b},
$isz:1,
$isa1:1},
eU:{"^":"cY;",
d4:function(a,b){var z=this.f_(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$ism:1},
eT:{"^":"cY;"},
cZ:{"^":"t;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aR(a,b))
if(b<0)throw H.c(H.aR(a,b))
if(b>=a.length)H.r(H.aR(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.aR(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.R(b)
if(typeof b!=="string")throw H.c(P.cN(b,null,null))
return a+b},
bg:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ag:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
if(typeof c!=="number")return c.D()
if(c<0||c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
af:function(a,b){return this.ag(a,b,0)},
w:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.D()
if(b<0)throw H.c(P.d1(b,null,null))
if(b>c)throw H.c(P.d1(b,null,null))
if(c>a.length)throw H.c(P.d1(c,null,null))
return a.substring(b,c)},
aX:function(a,b){return this.w(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iZ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aU:function(a,b){return this.iZ(a,b," ")},
ey:function(a,b,c){var z
if(c<0||c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ex:function(a,b){return this.ey(a,b,0)},
it:function(a,b,c){if(c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
return H.hO(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isG:1,
$asG:I.ce,
$isfd:1,
$isj:1}}],["","",,H,{"^":"",
de:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
iN:function(){return new P.k8("No element")},
a9:{"^":"kG;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$asd6:function(){return[P.m]},
$asy:function(){return[P.m]},
$asi:function(){return[P.m]},
$asd:function(){return[P.m]}},
iu:{"^":"i;"},
f0:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.ap(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.bs(z))
w=this.c
if(typeof x!=="number")return H.h(x)
if(w>=x){this.d=null
return!1}this.d=y.M(z,w);++this.c
return!0}},
j3:{"^":"i;a,b,$ti",
ga4:function(a){return new H.j4(J.br(this.a),this.b,this.$ti)},
gm:function(a){return J.aB(this.a)},
M:function(a,b){return this.b.$1(J.dk(this.a,b))},
$asi:function(a,b){return[b]}},
j4:{"^":"dF;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$asdF:function(a,b){return[b]}},
l8:{"^":"i;a,b,$ti",
ga4:function(a){return new H.l9(J.br(this.a),this.b,this.$ti)}},
l9:{"^":"dF;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
cV:{"^":"b;$ti"},
d6:{"^":"b;$ti",
l:function(a,b,c){H.B(b)
H.A(c,H.az(this,"d6",0))
throw H.c(P.C("Cannot modify an unmodifiable list"))},
aC:function(a,b,c,d){H.A(d,H.az(this,"d6",0))
throw H.c(P.C("Cannot modify an unmodifiable list"))}},
kG:{"^":"d_+d6;"}}],["","",,H,{"^":"",
ii:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
nn:function(a){return init.types[H.B(a)]},
hH:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isJ},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ar(a)
if(typeof z!=="string")throw H.c(H.ai(a))
return z},
c0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
fh:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.R(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.J(w,u)|32)>x)return}return parseInt(a,b)},
bz:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.O||!!J.M(a).$isd5){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.J(w,0)===36)w=C.b.aX(w,1)
r=H.ei(H.cg(H.bo(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jv:function(){if(!!self.location)return self.location.href
return},
fg:function(a){var z,y,x,w,v
H.cg(a)
z=J.aB(a)
if(typeof z!=="number")return z.eX()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jD:function(a){var z,y,x,w
z=H.a([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.ai(w))}return H.fg(z)},
fi:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.ai(x))
if(x<0)throw H.c(H.ai(x))
if(x>65535)return H.jD(a)}return H.fg(a)},
jE:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eX()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
d0:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.b7(z,10))>>>0,56320|z&1023)}}throw H.c(P.a2(a,0,1114111,null,null))},
an:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jC:function(a){return a.b?H.an(a).getUTCFullYear()+0:H.an(a).getFullYear()+0},
jA:function(a){return a.b?H.an(a).getUTCMonth()+1:H.an(a).getMonth()+1},
jw:function(a){return a.b?H.an(a).getUTCDate()+0:H.an(a).getDate()+0},
jx:function(a){return a.b?H.an(a).getUTCHours()+0:H.an(a).getHours()+0},
jz:function(a){return a.b?H.an(a).getUTCMinutes()+0:H.an(a).getMinutes()+0},
jB:function(a){return a.b?H.an(a).getUTCSeconds()+0:H.an(a).getSeconds()+0},
jy:function(a){return a.b?H.an(a).getUTCMilliseconds()+0:H.an(a).getMilliseconds()+0},
h:function(a){throw H.c(H.ai(a))},
e:function(a,b){if(a==null)J.aB(a)
throw H.c(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,"index",null)
z=H.B(J.aB(a))
if(!(b<0)){if(typeof z!=="number")return H.h(z)
y=b>=z}else y=!0
if(y)return P.V(b,a,"index",null,z)
return P.d1(b,"index",null)},
nj:function(a,b,c){if(a>c)return new P.cD(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cD(a,c,!0,b,"end","Invalid value")
return new P.aS(!0,b,"end",null)},
ai:function(a){return new P.aS(!0,a,null,null)},
ne:function(a){if(typeof a!=="number")throw H.c(H.ai(a))
return a},
c:function(a){var z
if(a==null)a=new P.fc()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hQ})
z.name=""}else z.toString=H.hQ
return z},
hQ:function(){return J.ar(this.dartException)},
r:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bs(a))},
aI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dI(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.fb(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fD()
u=$.$get$fE()
t=$.$get$fF()
s=$.$get$fG()
r=$.$get$fK()
q=$.$get$fL()
p=$.$get$fI()
$.$get$fH()
o=$.$get$fN()
n=$.$get$fM()
m=v.an(y)
if(m!=null)return z.$1(H.dI(H.R(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.dI(H.R(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.fb(H.R(y),m))}}return z.$1(new H.kF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fr()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aS(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fr()
return a},
bJ:function(a){var z
if(a==null)return new H.hf(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.hf(a)},
nm:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
nu:function(a,b,c,d,e,f){H.f(a,"$isdA")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nu)
a.$identity=z
return z},
id:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isd){z.$reflectionInfo=d
x=H.jI(z).r}else x=d
w=e?Object.create(new H.ka().constructor.prototype):Object.create(new H.dp(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aJ
if(typeof u!=="number")return u.n()
$.aJ=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ex(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nn,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.es:H.dq
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ex(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ia:function(a,b,c,d){var z=H.dq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ex:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ic(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ia(y,!w,z,b)
if(y===0){w=$.aJ
if(typeof w!=="number")return w.n()
$.aJ=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bM
if(v==null){v=H.cP("self")
$.bM=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aJ
if(typeof w!=="number")return w.n()
$.aJ=w+1
t+=w
w="return function("+t+"){return this."
v=$.bM
if(v==null){v=H.cP("self")
$.bM=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ib:function(a,b,c,d){var z,y
z=H.dq
y=H.es
switch(b?-1:a){case 0:throw H.c(H.jS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ic:function(a,b){var z,y,x,w,v,u,t,s
z=$.bM
if(z==null){z=H.cP("self")
$.bM=z}y=$.er
if(y==null){y=H.cP("receiver")
$.er=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ib(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aJ
if(typeof y!=="number")return y.n()
$.aJ=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aJ
if(typeof y!=="number")return y.n()
$.aJ=y+1
return new Function(z+y+"}")()},
ee:function(a,b,c,d,e,f,g){var z,y
z=J.bU(H.cg(b))
H.B(c)
y=!!J.M(d).$isd?J.bU(d):d
return H.id(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aG(a,"String"))},
nk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aG(a,"double"))},
nz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aG(a,"num"))},
hC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aG(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aG(a,"int"))},
hM:function(a,b){throw H.c(H.aG(a,H.R(b).substring(3)))},
nB:function(a,b){var z=J.ap(b)
throw H.c(H.i8(a,z.w(b,3,z.gm(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hM(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.nB(a,b)},
cg:function(a){if(a==null)return a
if(!!J.M(a).$isd)return a
throw H.c(H.aG(a,"List"))},
hJ:function(a,b){if(a==null)return a
if(!!J.M(a).$isd)return a
if(J.M(a)[b])return a
H.hM(a,b)},
hD:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
cI:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hD(J.M(a))
if(z==null)return!1
y=H.hG(z,null,b,null)
return y},
o:function(a,b){var z,y
if(a==null)return a
if($.ea)return a
$.ea=!0
try{if(H.cI(a,b))return a
z=H.cL(b)
y=H.aG(a,z)
throw H.c(y)}finally{$.ea=!1}},
ef:function(a,b){if(a!=null&&!H.ed(a,b))H.r(H.aG(a,H.cL(b)))
return a},
hx:function(a){var z
if(a instanceof H.q){z=H.hD(J.M(a))
if(z!=null)return H.cL(z)
return"Closure"}return H.bz(a)},
nE:function(a){throw H.c(new P.im(H.R(a)))},
hE:function(a){return init.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
bo:function(a){if(a==null)return
return a.$ti},
oS:function(a,b,c){return H.bL(a["$as"+H.l(c)],H.bo(b))},
bn:function(a,b,c,d){var z
H.R(c)
H.B(d)
z=H.bL(a["$as"+H.l(c)],H.bo(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.R(b)
H.B(c)
z=H.bL(a["$as"+H.l(b)],H.bo(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.B(b)
z=H.bo(a)
return z==null?null:z[b]},
cL:function(a){var z=H.bp(a,null)
return z},
bp:function(a,b){var z,y
H.p(b,"$isd",[P.j],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ei(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.n3(a,b)
if('futureOr' in a)return"FutureOr<"+H.bp("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.p(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.a([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bp(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bp(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bp(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bp(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nl(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.bp(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ei:function(a,b,c){var z,y,x,w,v,u
H.p(c,"$isd",[P.j],"$asd")
if(a==null)return""
z=new P.av("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bp(u,c)}v="<"+z.i(0)+">"
return v},
bL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cd:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bo(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hA(H.bL(y[d],z),null,c,null)},
p:function(a,b,c,d){var z,y
H.R(b)
H.cg(c)
H.R(d)
if(a==null)return a
z=H.cd(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.ei(c,0,null)
throw H.c(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hA:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aA(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aA(a[y],b,c[y],d))return!1
return!0},
oQ:function(a,b,c){return a.apply(b,H.bL(J.M(b)["$as"+H.l(c)],H.bo(b)))},
hI:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="O"||a===-1||a===-2||H.hI(z)}return!1},
ed:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="O"||b===-1||b===-2||H.hI(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.ed(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cI(a,b)}y=J.M(a).constructor
x=H.bo(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aA(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.ed(a,b))throw H.c(H.aG(a,H.cL(b)))
return a},
aA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="O")return!0
if('func' in c)return H.hG(a,b,c,d)
if('func' in a)return c.builtin$cls==="dA"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,x,d)
else if(H.aA(a,b,x,d))return!0
else{if(!('$is'+"bO" in y.prototype))return!1
w=y.prototype["$as"+"bO"]
v=H.bL(w,z?a.slice(1):null)
return H.aA(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cL(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hA(H.bL(r,z),b,u,d)},
hG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.ny(m,b,l,d)},
ny:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aA(c[w],d,a[w],b))return!1}return!0},
oR:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
nv:function(a){var z,y,x,w,v,u
z=H.R($.hF.$1(a))
y=$.dc[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.df[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.hz.$2(a,z))
if(z!=null){y=$.dc[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.df[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.dg(x)
$.dc[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.df[z]=x
return x}if(v==="-"){u=H.dg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hL(a,x)
if(v==="*")throw H.c(P.cF(z))
if(init.leafTags[z]===true){u=H.dg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hL(a,x)},
hL:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ej(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
dg:function(a){return J.ej(a,!1,null,!!a.$isJ)},
nx:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.dg(z)
else return J.ej(z,c,null,null)},
ns:function(){if(!0===$.eh)return
$.eh=!0
H.nt()},
nt:function(){var z,y,x,w,v,u,t,s
$.dc=Object.create(null)
$.df=Object.create(null)
H.no()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hN.$1(v)
if(u!=null){t=H.nx(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
no:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.bG(C.P,H.bG(C.U,H.bG(C.v,H.bG(C.v,H.bG(C.T,H.bG(C.Q,H.bG(C.R(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hF=new H.np(v)
$.hz=new H.nq(u)
$.hN=new H.nr(t)},
bG:function(a,b){return a(b)||b},
hO:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hP:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ih:{"^":"b;$ti",
i:function(a){return P.dJ(this)},
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
return H.ii()},
$isN:1},
ij:{"^":"ih;a,b,c,$ti",
gm:function(a){return this.a},
bQ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bQ(0,b))return
return this.dD(b)},
dD:function(a){return this.b[H.R(a)]},
O:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.o(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dD(v),z))}}},
jH:{"^":"b;a,b,c,d,e,f,r,0x",p:{
jI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bU(z)
y=z[0]
x=z[1]
return new H.jH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ks:{"^":"b;a,b,c,d,e,f",
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
p:{
aP:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.a([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ks(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
d4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jl:{"^":"aa;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
fb:function(a,b){return new H.jl(a,b==null?null:b.method)}}},
iS:{"^":"aa;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
dI:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iS(a,y,z?null:b.receiver)}}},
kF:{"^":"aa;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nF:{"^":"q:17;a",
$1:function(a){if(!!J.M(a).$isaa)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
hf:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaF:1},
q:{"^":"b;",
i:function(a){return"Closure '"+H.bz(this).trim()+"'"},
geU:function(){return this},
$isdA:1,
geU:function(){return this}},
fw:{"^":"q;"},
ka:{"^":"fw;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
dp:{"^":"fw;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.c0(this.a)
else y=typeof z!=="object"?J.bq(z):H.c0(z)
return(y^H.c0(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bz(z)+"'")},
p:{
dq:function(a){return a.a},
es:function(a){return a.c},
cP:function(a){var z,y,x,w,v
z=new H.dp("self","target","receiver","name")
y=J.bU(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kt:{"^":"aa;a",
i:function(a){return this.a},
p:{
aG:function(a,b){return new H.kt("TypeError: "+H.l(P.cU(a))+": type '"+H.hx(a)+"' is not a subtype of type '"+b+"'")}}},
i7:{"^":"aa;a",
i:function(a){return this.a},
p:{
i8:function(a,b){return new H.i7("CastError: "+H.l(P.cU(a))+": type '"+H.hx(a)+"' is not a subtype of type '"+b+"'")}}},
jR:{"^":"aa;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
jS:function(a){return new H.jR(a)}}},
aV:{"^":"j0;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gaS:function(a){return new H.eY(this,[H.x(this,0)])},
bQ:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dA(y,b)}else return this.iI(b)},
iI:function(a){var z=this.d
if(z==null)return!1
return this.cX(this.cn(z,J.bq(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bI(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bI(w,b)
x=y==null?null:y.b
return x}else return this.iJ(b)},
iJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cn(z,J.bq(a)&0x3ffffff)
x=this.cX(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cp()
this.b=z}this.dm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cp()
this.c=y}this.dm(y,b,c)}else{x=this.d
if(x==null){x=this.cp()
this.d=x}w=J.bq(b)&0x3ffffff
v=this.cn(x,w)
if(v==null)this.cv(x,w,[this.cq(b,c)])
else{u=this.cX(v,b)
if(u>=0)v[u].b=c
else v.push(this.cq(b,c))}}},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.bs(this))
z=z.c}},
dm:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.bI(a,b)
if(z==null)this.cv(a,b,this.cq(b,c))
else z.b=c},
fW:function(){this.r=this.r+1&67108863},
cq:function(a,b){var z,y
z=new H.iW(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fW()
return z},
cX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
i:function(a){return P.dJ(this)},
bI:function(a,b){return a[b]},
cn:function(a,b){return a[b]},
cv:function(a,b,c){a[b]=c},
fN:function(a,b){delete a[b]},
dA:function(a,b){return this.bI(a,b)!=null},
cp:function(){var z=Object.create(null)
this.cv(z,"<non-identifier-key>",z)
this.fN(z,"<non-identifier-key>")
return z},
$iseX:1},
iW:{"^":"b;a,b,0c,0d"},
eY:{"^":"iu;a,$ti",
gm:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.iX(z,z.r,this.$ti)
y.c=z.e
return y}},
iX:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.bs(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
np:{"^":"q:17;a",
$1:function(a){return this.a(a)}},
nq:{"^":"q:43;a",
$2:function(a,b){return this.a(a,b)}},
nr:{"^":"q:46;a",
$1:function(a){return this.a(H.R(a))}},
iQ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isfd:1,
$isjJ:1,
p:{
iR:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nl:function(a){return J.eS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bE:function(a){var z,y,x,w
z=J.M(a)
if(!!z.$isG)return a
y=z.gm(a)
if(typeof y!=="number")return H.h(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gm(a)
if(typeof y!=="number")return H.h(y)
if(!(w<y))break
C.a.l(x,w,z.j(a,w));++w}return x},
jh:function(a){return new Int8Array(a)},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aR(b,a))},
mY:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.nj(a,b,c))
return b},
fa:{"^":"t;",$isfa:1,"%":"ArrayBuffer"},
dO:{"^":"t;",$isdO:1,$isku:1,"%":"DataView;ArrayBufferView;dN|h9|ha|ji|hb|hc|bc"},
dN:{"^":"dO;",
gm:function(a){return a.length},
$isG:1,
$asG:I.ce,
$isJ:1,
$asJ:I.ce},
ji:{"^":"ha;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
l:function(a,b,c){H.B(b)
H.nk(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascV:function(){return[P.z]},
$asy:function(){return[P.z]},
$isi:1,
$asi:function(){return[P.z]},
$isd:1,
$asd:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
bc:{"^":"hc;",
l:function(a,b,c){H.B(b)
H.B(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascV:function(){return[P.m]},
$asy:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
ob:{"^":"bc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oc:{"^":"bc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
od:{"^":"bc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oe:{"^":"bc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
of:{"^":"bc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
og:{"^":"bc;",
gm:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dP:{"^":"bc;",
gm:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
cd:function(a,b,c){return new Uint8Array(a.subarray(b,H.mY(b,c,a.length)))},
$isdP:1,
$isU:1,
"%":";Uint8Array"},
h9:{"^":"dN+y;"},
ha:{"^":"h9+cV;"},
hb:{"^":"dN+y;"},
hc:{"^":"hb+cV;"}}],["","",,P,{"^":"",
ld:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bH(new P.lf(z),1)).observe(y,{childList:true})
return new P.le(z,y,x)}else if(self.setImmediate!=null)return P.nc()
return P.nd()},
oF:[function(a){self.scheduleImmediate(H.bH(new P.lg(H.o(a,{func:1,ret:-1})),0))},"$1","nb",4,0,11],
oG:[function(a){self.setImmediate(H.bH(new P.lh(H.o(a,{func:1,ret:-1})),0))},"$1","nc",4,0,11],
oH:[function(a){P.e_(C.n,H.o(a,{func:1,ret:-1}))},"$1","nd",4,0,11],
e_:function(a,b){var z
H.o(b,{func:1,ret:-1})
z=C.d.a2(a.a,1000)
return P.mi(z<0?0:z,b)},
fy:function(a,b){var z
H.o(b,{func:1,ret:-1,args:[P.aw]})
z=C.d.a2(a.a,1000)
return P.mj(z<0?0:z,b)},
n7:function(a,b){if(H.cI(a,{func:1,args:[P.b,P.aF]}))return b.j8(a,null,P.b,P.aF)
if(H.cI(a,{func:1,args:[P.b]}))return H.o(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n6:function(){var z,y
for(;z=$.bF,z!=null;){$.cb=null
y=z.b
$.bF=y
if(y==null)$.ca=null
z.a.$0()}},
oP:[function(){$.eb=!0
try{P.n6()}finally{$.cb=null
$.eb=!1
if($.bF!=null)$.$get$e5().$1(P.hB())}},"$0","hB",0,0,3],
hw:function(a){var z=new P.h3(H.o(a,{func:1,ret:-1}))
if($.bF==null){$.ca=z
$.bF=z
if(!$.eb)$.$get$e5().$1(P.hB())}else{$.ca.b=z
$.ca=z}},
na:function(a){var z,y,x
H.o(a,{func:1,ret:-1})
z=$.bF
if(z==null){P.hw(a)
$.cb=$.ca
return}y=new P.h3(a)
x=$.cb
if(x==null){y.b=z
$.cb=y
$.bF=y}else{y.b=x.b
x.b=y
$.cb=y
if(y.b==null)$.ca=y}},
nC:function(a){var z,y
z={func:1,ret:-1}
H.o(a,z)
y=$.W
if(C.j===y){P.db(null,null,C.j,a)
return}y.toString
P.db(null,null,y,H.o(y.cH(a),z))},
dZ:function(a,b){var z,y
z={func:1,ret:-1}
H.o(b,z)
y=$.W
if(y===C.j){y.toString
return P.e_(a,b)}return P.e_(a,H.o(y.cH(b),z))},
d3:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aw]}
H.o(b,z)
y=$.W
if(y===C.j){y.toString
return P.fy(a,b)}x=y.dX(b,P.aw)
$.W.toString
return P.fy(a,H.o(x,z))},
da:function(a,b,c,d,e){var z={}
z.a=d
P.na(new P.n8(z,e))},
hs:function(a,b,c,d,e){var z,y
H.o(d,{func:1,ret:e})
y=$.W
if(y===c)return d.$0()
$.W=c
z=y
try{y=d.$0()
return y}finally{$.W=z}},
ht:function(a,b,c,d,e,f,g){var z,y
H.o(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.W
if(y===c)return d.$1(e)
$.W=c
z=y
try{y=d.$1(e)
return y}finally{$.W=z}},
n9:function(a,b,c,d,e,f,g,h,i){var z,y
H.o(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.W
if(y===c)return d.$2(e,f)
$.W=c
z=y
try{y=d.$2(e,f)
return y}finally{$.W=z}},
db:function(a,b,c,d){var z
H.o(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cH(d):c.iq(d,-1)
P.hw(d)},
lf:{"^":"q:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
le:{"^":"q:35;a,b,c",
$1:function(a){var z,y
this.a.a=H.o(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lg:{"^":"q:2;a",
$0:function(){this.a.$0()}},
lh:{"^":"q:2;a",
$0:function(){this.a.$0()}},
hi:{"^":"b;a,0b,c",
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bH(new P.ml(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bH(new P.mk(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$isaw:1,
p:{
mi:function(a,b){var z=new P.hi(!0,0)
z.fm(a,b)
return z},
mj:function(a,b){var z=new P.hi(!1,0)
z.fn(a,b)
return z}}},
ml:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mk:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.f4(w,x)}z.c=y
this.d.$1(z)}},
bD:{"^":"b;0a,b,c,d,e,$ti",
iP:function(a){if(this.c!==6)return!0
return this.b.b.d3(H.o(this.d,{func:1,ret:P.ad,args:[P.b]}),a.a,P.ad,P.b)},
iH:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cI(z,{func:1,args:[P.b,P.aF]}))return H.ef(w.jf(z,a.a,a.b,null,y,P.aF),x)
else return H.ef(w.d3(H.o(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b2:{"^":"b;dR:a<,b,0hD:c<,$ti",
eP:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.W
if(y!==C.j){y.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.n7(b,y)}H.o(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b2(0,$.W,[c])
w=b==null?1:3
this.dn(new P.bD(x,w,a,b,[z,c]))
return x},
jk:function(a,b){return this.eP(a,null,b)},
dn:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbD")
this.c=a}else{if(z===2){y=H.f(this.c,"$isb2")
z=y.a
if(z<4){y.dn(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.db(null,null,z,H.o(new P.lw(this,a),{func:1,ret:-1}))}},
dM:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbD")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isb2")
y=u.a
if(y<4){u.dM(a)
return}this.a=y
this.c=u.c}z.a=this.bK(a)
y=this.b
y.toString
P.db(null,null,y,H.o(new P.lB(z,this),{func:1,ret:-1}))}},
ct:function(){var z=H.f(this.c,"$isbD")
this.c=null
return this.bK(z)},
bK:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dv:function(a){var z,y,x,w
z=H.x(this,0)
H.ef(a,{futureOr:1,type:z})
y=this.$ti
x=H.cd(a,"$isbO",y,"$asbO")
if(x){z=H.cd(a,"$isb2",y,null)
if(z)P.h6(a,this)
else P.lx(a,this)}else{w=this.ct()
H.A(a,z)
this.a=4
this.c=a
P.c7(this,w)}},
cj:[function(a,b){var z
H.f(b,"$isaF")
z=this.ct()
this.a=8
this.c=new P.as(a,b)
P.c7(this,z)},function(a){return this.cj(a,null)},"jB","$2","$1","gfJ",4,2,28],
$isbO:1,
p:{
lx:function(a,b){var z,y,x
b.a=1
try{a.eP(new P.ly(b),new P.lz(b),null)}catch(x){z=H.aI(x)
y=H.bJ(x)
P.nC(new P.lA(b,z,y))}},
h6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isb2")
if(z>=4){y=b.ct()
b.a=a.a
b.c=a.c
P.c7(b,y)}else{y=H.f(b.c,"$isbD")
b.a=2
b.c=a
a.dM(y)}},
c7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isas")
y=y.b
u=v.a
t=v.b
y.toString
P.da(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c7(z.a,b)}y=z.a
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
if(p){H.f(r,"$isas")
y=y.b
u=r.a
t=r.b
y.toString
P.da(null,null,y,u,t)
return}o=$.W
if(o==null?q!=null:o!==q)$.W=q
else o=null
y=b.c
if(y===8)new P.lE(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lD(x,b,r).$0()}else if((y&2)!==0)new P.lC(z,x,b).$0()
if(o!=null)$.W=o
y=x.b
if(!!J.M(y).$isbO){if(y.a>=4){n=H.f(t.c,"$isbD")
t.c=null
b=t.bK(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.h6(y,t)
return}}m=b.b
n=H.f(m.c,"$isbD")
m.c=null
b=m.bK(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.f(u,"$isas")
m.a=8
m.c=u}z.a=m
y=m}}}},
lw:{"^":"q:2;a,b",
$0:function(){P.c7(this.a,this.b)}},
lB:{"^":"q:2;a,b",
$0:function(){P.c7(this.b,this.a.a)}},
ly:{"^":"q:20;a",
$1:function(a){var z=this.a
z.a=0
z.dv(a)}},
lz:{"^":"q:52;a",
$2:function(a,b){this.a.cj(a,H.f(b,"$isaF"))},
$1:function(a){return this.$2(a,null)}},
lA:{"^":"q:2;a,b,c",
$0:function(){this.a.cj(this.b,this.c)}},
lE:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eO(H.o(w.d,{func:1}),null)}catch(v){y=H.aI(v)
x=H.bJ(v)
if(this.d){w=H.f(this.a.a.c,"$isas").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isas")
else u.b=new P.as(y,x)
u.a=!0
return}if(!!J.M(z).$isbO){if(z instanceof P.b2&&z.gdR()>=4){if(z.gdR()===8){w=this.b
w.b=H.f(z.ghD(),"$isas")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jk(new P.lF(t),null)
w.a=!1}}},
lF:{"^":"q:30;a",
$1:function(a){return this.a}},
lD:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.d3(H.o(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aI(t)
y=H.bJ(t)
x=this.a
x.b=new P.as(z,y)
x.a=!0}}},
lC:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isas")
w=this.c
if(w.iP(z)&&w.e!=null){v=this.b
v.b=w.iH(z)
v.a=!1}}catch(u){y=H.aI(u)
x=H.bJ(u)
w=H.f(this.a.a.c,"$isas")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.as(y,x)
s.a=!0}}},
h3:{"^":"b;a,0b"},
dW:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b2(0,$.W,[P.m])
z.a=0
this.iM(new P.kd(z,this),!0,new P.ke(z,y),y.gfJ())
return y}},
kd:{"^":"q;a,b",
$1:function(a){H.A(a,H.az(this.b,"dW",0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.az(this.b,"dW",0)]}}},
ke:{"^":"q:2;a,b",
$0:function(){this.b.dv(this.a.a)}},
ft:{"^":"b;$ti"},
kc:{"^":"b;"},
aw:{"^":"b;"},
as:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isaa:1},
mN:{"^":"b;",$isoE:1},
n8:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.fc()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
m0:{"^":"mN;",
jg:function(a){var z,y,x
H.o(a,{func:1,ret:-1})
try{if(C.j===$.W){a.$0()
return}P.hs(null,null,this,a,-1)}catch(x){z=H.aI(x)
y=H.bJ(x)
P.da(null,null,this,z,H.f(y,"$isaF"))}},
jh:function(a,b,c){var z,y,x
H.o(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.W){a.$1(b)
return}P.ht(null,null,this,a,b,-1,c)}catch(x){z=H.aI(x)
y=H.bJ(x)
P.da(null,null,this,z,H.f(y,"$isaF"))}},
iq:function(a,b){return new P.m2(this,H.o(a,{func:1,ret:b}),b)},
cH:function(a){return new P.m1(this,H.o(a,{func:1,ret:-1}))},
dX:function(a,b){return new P.m3(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
eO:function(a,b){H.o(a,{func:1,ret:b})
if($.W===C.j)return a.$0()
return P.hs(null,null,this,a,b)},
d3:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.W===C.j)return a.$1(b)
return P.ht(null,null,this,a,b,c,d)},
jf:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.W===C.j)return a.$2(b,c)
return P.n9(null,null,this,a,b,c,d,e,f)},
j8:function(a,b,c,d){return H.o(a,{func:1,ret:b,args:[c,d]})}},
m2:{"^":"q;a,b,c",
$0:function(){return this.a.eO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m1:{"^":"q:3;a,b",
$0:function(){return this.a.jg(this.b)}},
m3:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.jh(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
f_:function(a,b,c){H.cg(a)
return H.p(H.nm(a,new H.aV(0,0,[b,c])),"$iseX",[b,c],"$aseX")},
eZ:function(a,b){return new H.aV(0,0,[a,b])},
iY:function(a,b,c,d){return new P.lN(0,0,[d])},
iM:function(a,b,c){var z,y
if(P.ec(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$cc()
C.a.h(y,a)
try{P.n5(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.fu(b,H.hJ(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dE:function(a,b,c){var z,y,x
if(P.ec(a))return b+"..."+c
z=new P.av(b)
y=$.$get$cc()
C.a.h(y,a)
try{x=z
x.a=P.fu(x.gb1(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gb1()+c
y=z.gb1()
return y.charCodeAt(0)==0?y:y},
ec:function(a){var z,y
for(z=0;y=$.$get$cc(),z<y.length;++z)if(a===y[z])return!0
return!1},
n5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.H();t=s,s=r){r=z.gS(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dJ:function(a){var z,y,x
z={}
if(P.ec(a))return"{...}"
y=new P.av("")
try{C.a.h($.$get$cc(),a)
x=y
x.a=x.gb1()+"{"
z.a=!0
J.en(a,new P.j1(z,y))
z=y
z.a=z.gb1()+"}"}finally{z=$.$get$cc()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gb1()
return z.charCodeAt(0)==0?z:z},
lN:{"^":"lG;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.h8(this,this.r,H.x(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.e7()
this.b=z}return this.dt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.e7()
this.c=y}return this.dt(y,b)}else return this.fo(0,b)},
fo:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.e7()
this.d=z}y=this.dw(b)
x=z[y]
if(x==null)z[y]=[this.ci(b)]
else{if(this.dE(x,b)>=0)return!1
x.push(this.ci(b))}return!0},
W:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dN(this.c,b)
else return this.hx(0,b)},
hx:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fS(z,b)
x=this.dE(y,b)
if(x<0)return!1
this.dT(y.splice(x,1)[0])
return!0},
dt:function(a,b){H.A(b,H.x(this,0))
if(H.f(a[b],"$ise6")!=null)return!1
a[b]=this.ci(b)
return!0},
dN:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$ise6")
if(z==null)return!1
this.dT(z)
delete a[b]
return!0},
du:function(){this.r=this.r+1&67108863},
ci:function(a){var z,y
z=new P.e6(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.du()
return z},
dT:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.du()},
dw:function(a){return J.bq(a)&0x3ffffff},
fS:function(a,b){return a[this.dw(b)]},
dE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
p:{
e7:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
e6:{"^":"b;a,0b,0c"},
lO:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.bs(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
h8:function(a,b,c){var z=new P.lO(a,b,[c])
z.c=a.e
return z}}},
lG:{"^":"jT;"},
d_:{"^":"lP;",$isi:1,$isd:1},
y:{"^":"b;$ti",
ga4:function(a){return new H.f0(a,this.gm(a),0,[H.bn(this,a,"y",0)])},
M:function(a,b){return this.j(a,b)},
jm:function(a,b){var z,y,x
z=H.a([],[H.bn(this,a,"y",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.h(x)
if(!(y<x))break
C.a.l(z,y,this.j(a,y));++y}return z},
jl:function(a){return this.jm(a,!0)},
aC:function(a,b,c,d){var z
H.A(d,H.bn(this,a,"y",0))
P.aY(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
i:function(a){return P.dE(a,"[","]")}},
j0:{"^":"ao;"},
j1:{"^":"q:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ao:{"^":"b;$ti",
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[H.bn(this,a,"ao",0),H.bn(this,a,"ao",1)]})
for(z=J.br(this.gaS(a));z.H();){y=z.gS(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.aB(this.gaS(a))},
i:function(a){return P.dJ(a)},
$isN:1},
mq:{"^":"b;$ti",
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
throw H.c(P.C("Cannot modify unmodifiable map"))}},
j2:{"^":"b;$ti",
j:function(a,b){return J.em(this.a,b)},
l:function(a,b,c){J.di(this.a,H.A(b,H.x(this,0)),H.A(c,H.x(this,1)))},
O:function(a,b){J.en(this.a,H.o(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gm:function(a){return J.aB(this.a)},
i:function(a){return J.ar(this.a)},
$isN:1},
fU:{"^":"mr;a,$ti"},
jV:{"^":"b;$ti",
i:function(a){return P.dE(this,"{","}")},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.eo("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=P.h8(this,this.r,H.x(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.c(P.V(b,this,"index",null,y))},
$isi:1},
jT:{"^":"jV;"},
lP:{"^":"b+y;"},
mr:{"^":"j2+mq;$ti"}}],["","",,P,{"^":"",i1:{"^":"ci;a",
iS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$h4()
if(typeof d!=="number")return H.h(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.J(b,y)
if(r===37){q=s+2
if(q<=d){p=H.de(C.b.J(b,s))
o=H.de(C.b.J(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.av("")
w.a+=C.b.w(b,x,y)
w.a+=H.d0(r)
x=s
continue}}throw H.c(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.eq(b,u,d,v,t,k)
else{j=C.d.bh(k-1,4)+1
if(j===1)throw H.c(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.bg(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.eq(b,u,d,v,t,i)
else{j=C.d.bh(i,4)
if(j===1)throw H.c(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.bg(b,d,d,j===2?"==":"=")}return b},
$asci:function(){return[[P.d,P.m],P.j]},
p:{
eq:function(a,b,c,d,e,f){if(C.d.bh(f,4)!==0)throw H.c(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},i2:{"^":"bN;a",
$asbN:function(){return[[P.d,P.m],P.j]}},ci:{"^":"b;$ti"},bN:{"^":"kc;$ti"},iw:{"^":"ci;",
$asci:function(){return[P.j,[P.d,P.m]]}},kS:{"^":"iw;a",
giB:function(){return C.I}},kZ:{"^":"bN;",
bp:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mM(0,0,x)
if(w.fP(a,b,z)!==z)w.dV(J.hV(a,z-1),0)
return C.B.cd(x,0,w.b)},
cM:function(a){return this.bp(a,0,null)},
$asbN:function(){return[P.j,[P.d,P.m]]}},mM:{"^":"b;a,b,c",
dV:function(a,b){var z,y,x,w,v
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
fP:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dV(w,C.b.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kT:{"^":"bN;a",
bp:function(a,b,c){var z,y,x,w,v
H.p(a,"$isd",[P.m],"$asd")
z=P.kU(!1,a,b,c)
if(z!=null)return z
y=J.aB(a)
P.aY(b,c,y,null,null,null)
x=new P.av("")
w=new P.mJ(!1,x,!0,0,0,0)
w.bp(a,b,y)
w.iD(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cM:function(a){return this.bp(a,0,null)},
$asbN:function(){return[[P.d,P.m],P.j]},
p:{
kU:function(a,b,c,d){H.p(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.kV(!1,b,c,d)
return},
kV:function(a,b,c,d){var z,y,x
z=$.$get$fZ()
if(z==null)return
y=0===c
if(y&&!0)return P.e4(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.e4(z,b)
return P.e4(z,b.subarray(c,d))},
e4:function(a,b){if(P.kX(b))return
return P.kY(a,b)},
kY:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aI(y)}return},
kX:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kW:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aI(y)}return}}},mJ:{"^":"b;a,b,c,d,e,f",
iD:function(a,b,c){var z
H.p(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.c(z)}},
bp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.p(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mL(c)
v=new P.mK(this,b,c,a)
$label0$0:for(u=J.ap(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bC()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.d.by(r,16),a,s)
throw H.c(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.x,q)
if(z<=C.x[q]){q=P.Y("Overlong encoding of 0x"+C.d.by(z,16),a,s-x-1)
throw H.c(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.d.by(z,16),a,s-x-1)
throw H.c(q)}if(!this.c||z!==65279)t.a+=H.d0(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ca()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.D()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.d.by(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.d.by(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mL:{"^":"q:36;a",
$2:function(a,b){var z,y,x,w
H.p(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.ap(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bC()
if((w&127)!==w)return x-b}return z-b}},mK:{"^":"q:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cE(this.d,a,b)}}}],["","",,P,{"^":"",
bK:function(a,b,c){var z
H.o(b,{func:1,ret:P.m,args:[P.j]})
z=H.fh(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.c(P.Y(a,null,null))},
iy:function(a){var z=J.M(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.bz(a)+"'"},
iZ:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iO(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.p(z,"$isd",[d],"$asd")},
f1:function(a,b,c){var z,y,x
z=[c]
y=H.a([],z)
for(x=J.br(a);x.H();)C.a.h(y,H.A(x.gS(x),c))
if(b)return y
return H.p(J.bU(y),"$isd",z,"$asd")},
cE:function(a,b,c){var z,y
z=P.m
H.p(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.p(a,"$isbw",[z],"$asbw")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.D()
z=c<y}else z=!0
return H.fi(z?C.a.cd(a,b,c):a)}if(!!J.M(a).$isdP)return H.jE(a,b,P.aY(b,c,a.length,null,null,null))
return P.kf(a,b,c)},
kf:function(a,b,c){var z,y,x,w
H.p(a,"$isi",[P.m],"$asi")
if(b<0)throw H.c(P.a2(b,0,J.aB(a),null,null))
z=c==null
if(!z&&c<b)throw H.c(P.a2(c,b,J.aB(a),null,null))
y=J.br(a)
for(x=0;x<b;++x)if(!y.H())throw H.c(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.H())throw H.c(P.a2(c,b,x,null,null))
w.push(y.gS(y))}return H.fi(w)},
jK:function(a,b,c){return new H.iQ(a,H.iR(a,!1,!0,!1))},
fW:function(){var z=H.jv()
if(z!=null)return P.kL(z,0,null)
throw H.c(P.C("'Uri.base' is not supported"))},
cU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iy(a)},
v:function(a){return new P.h5(a)},
cz:function(a,b,c,d){var z,y
H.o(b,{func:1,ret:d,args:[P.m]})
z=H.a([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
el:function(a){H.nA(a)},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.J(a,b+4)^58)*3|C.b.J(a,b)^100|C.b.J(a,b+1)^97|C.b.J(a,b+2)^116|C.b.J(a,b+3)^97)>>>0
if(y===0)return P.fV(b>0||c<c?C.b.w(a,b,c):a,5,null).geR()
else if(y===32)return P.fV(C.b.w(a,z,c),0,null).geR()}x=new Array(8)
x.fixed$length=Array
w=H.a(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.hu(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jt()
if(v>=b)if(P.hu(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.n()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.D()
if(typeof r!=="number")return H.h(r)
if(q<r)r=q
if(typeof s!=="number")return s.D()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.D()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.D()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ag(a,"..",s)))n=r>s+2&&C.b.ag(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ag(a,"file",b)){if(u<=b){if(!C.b.ag(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.bg(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ag(a,"http",b)){if(x&&t+3===s&&C.b.ag(a,"80",t+1))if(b===0&&!0){a=C.b.bg(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ag(a,"https",b)){if(x&&t+4===s&&C.b.ag(a,"443",t+1))if(b===0&&!0){a=C.b.bg(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m5(a,v,u,t,s,r,q,o)}return P.ms(a,b,c,v,u,t,s,r,q,o)},
fY:function(a,b){var z=P.j
return C.a.iE(H.a(a.split("&"),[z]),P.eZ(z,z),new P.kO(b),[P.N,P.j,P.j])},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kK(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bK(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bK(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
fX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kM(a)
y=new P.kN(z,a)
if(a.length<2)z.$1("address is too short")
x=H.a([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaT(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kJ(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.d.b7(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mZ:function(){var z,y,x,w,v
z=P.cz(22,new P.n0(),!0,P.U)
y=new P.n_(z)
x=new P.n1()
w=new P.n2()
v=H.f(y.$2(0,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isU")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isU")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isU"),"]",5)
v=H.f(y.$2(9,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isU"),"az",21)
v=H.f(y.$2(21,245),"$isU")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hu:function(a,b,c,d,e){var z,y,x,w,v
H.p(e,"$isd",[P.m],"$asd")
z=$.$get$hv()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ad:{"^":"b;"},
"+bool":0,
aK:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aK))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.io(H.jC(this))
y=P.cu(H.jA(this))
x=P.cu(H.jw(this))
w=P.cu(H.jx(this))
v=P.cu(H.jz(this))
u=P.cu(H.jB(this))
t=P.ip(H.jy(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
io:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ip:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"a1;"},
"+double":0,
aT:{"^":"b;a",
D:function(a,b){return C.d.D(this.a,H.f(b,"$isaT").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.it()
y=this.a
if(y<0)return"-"+new P.aT(0-y).i(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.is().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
eH:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
is:{"^":"q:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
it:{"^":"q:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
aa:{"^":"b;"},
fc:{"^":"aa;",
i:function(a){return"Throw of null."}},
aS:{"^":"aa;a,b,c,d",
gcl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gck:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gcl()+y+x
if(!this.a)return w
v=this.gck()
u=P.cU(this.b)
return w+v+": "+H.l(u)},
p:{
ch:function(a){return new P.aS(!1,null,null,a)},
cN:function(a,b,c){return new P.aS(!0,a,b,c)},
eo:function(a){return new P.aS(!1,null,a,"Must not be null")}}},
cD:{"^":"aS;e,f,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
jF:function(a){return new P.cD(null,null,!1,null,null,a)},
d1:function(a,b,c){return new P.cD(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cD(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.h(a)
if(0<=a){if(typeof c!=="number")return H.h(c)
z=a>c}else z=!0
if(z)throw H.c(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.h(c)
z=b>c}else z=!0
if(z)throw H.c(P.a2(b,a,c,"end",f))
return b}return c}}},
iL:{"^":"aS;e,m:f>,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){if(J.hR(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
V:function(a,b,c,d,e){var z=H.B(e!=null?e:J.aB(b))
return new P.iL(b,z,!0,a,c,"Index out of range")}}},
kH:{"^":"aa;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.kH(a)}}},
kE:{"^":"aa;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cF:function(a){return new P.kE(a)}}},
k8:{"^":"aa;a",
i:function(a){return"Bad state: "+this.a}},
ig:{"^":"aa;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cU(z))+"."},
p:{
bs:function(a){return new P.ig(a)}}},
jo:{"^":"b;",
i:function(a){return"Out of Memory"},
$isaa:1},
fr:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isaa:1},
im:{"^":"aa;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
h5:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iF:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.J(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.iF(a,b,c)}}},
m:{"^":"a1;"},
"+int":0,
i:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga4(this)
for(y=0;z.H();)++y
return y},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.eo("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.H();){x=z.gS(z)
if(b===y)return x;++y}throw H.c(P.V(b,this,"index",null,y))},
i:function(a){return P.iM(this,"(",")")}},
dF:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
O:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gU:function(a){return H.c0(this)},
i:function(a){return"Instance of '"+H.bz(this)+"'"},
toString:function(){return this.i(this)}},
aF:{"^":"b;"},
j:{"^":"b;",$isfd:1},
"+String":0,
av:{"^":"b;b1:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isot:1,
p:{
fu:function(a,b,c){var z=J.br(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.H())}else{a+=H.l(z.gS(z))
for(;z.H();)a=a+c+H.l(z.gS(z))}return a}}},
kO:{"^":"q:50;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.p(a,"$isN",[z,z],"$asN")
H.R(b)
y=J.ap(b).ex(b,"=")
if(y===-1){if(b!=="")J.di(a,P.e9(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.aX(b,y+1)
z=this.a
J.di(a,P.e9(x,0,x.length,z,!0),P.e9(w,0,w.length,z,!0))}return a}},
kK:{"^":"q:39;a",
$2:function(a,b){throw H.c(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
kM:{"^":"q:27;a",
$2:function(a,b){throw H.c(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"q:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bK(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.D()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
d9:{"^":"b;cb:a<,b,c,d,eG:e>,f,r,0x,0y,0z,0Q,0ch",
geS:function(){return this.b},
gcW:function(a){var z=this.c
if(z==null)return""
if(C.b.af(z,"["))return C.b.w(z,1,z.length-1)
return z},
gc7:function(a){var z=this.d
if(z==null)return P.hk(this.a)
return z},
gd1:function(a){var z=this.f
return z==null?"":z},
ger:function(){var z=this.r
return z==null?"":z},
d2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.p(h,"$isN",[P.j,null],"$asN")
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
g=P.e8(g,0,0,h)
return new P.d9(i,j,c,f,d,g,this.r)},
eM:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
geL:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fU(P.fY(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ges:function(){return this.c!=null},
gew:function(){return this.f!=null},
geu:function(){return this.r!=null},
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
t:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$ise3){y=this.a
x=b.gcb()
if(y==null?x==null:y===x)if(this.c!=null===b.ges()){y=this.b
x=b.geS()
if(y==null?x==null:y===x){y=this.gcW(this)
x=z.gcW(b)
if(y==null?x==null:y===x){y=this.gc7(this)
x=z.gc7(b)
if(y==null?x==null:y===x)if(this.e===z.geG(b)){y=this.f
x=y==null
if(!x===b.gew()){if(x)y=""
if(y===z.gd1(b)){z=this.r
y=z==null
if(!y===b.geu()){if(y)z=""
z=z===b.ger()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$ise3:1,
p:{
cH:function(a,b,c,d){var z,y,x,w,v,u
H.p(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$hp().b
if(typeof b!=="string")H.r(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.az(c,"ci",0))
y=c.giB().cM(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d0(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ms:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mD(a,b,d)
else{if(d===b)P.c8(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mE(a,z,e-1):""
x=P.mx(a,e,f,!1)
if(typeof f!=="number")return f.n()
w=f+1
if(typeof g!=="number")return H.h(g)
v=w<g?P.mA(P.bK(C.b.w(a,w,g),new P.mt(a,f),null),j):null}else{y=""
x=null
v=null}u=P.my(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.D()
t=h<i?P.e8(a,h+1,i,null):null
return new P.d9(j,y,x,v,u,t,i<c?P.mw(a,i+1,c):null)},
hk:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c8:function(a,b,c){throw H.c(P.Y(c,a,b))},
mA:function(a,b){if(a!=null&&a===P.hk(b))return
return a},
mx:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.v()
z=c-1
if(C.b.X(a,z)!==93)P.c8(a,b,"Missing end `]` to match `[` in host")
P.fX(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.h(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fX(a,b,c)
return"["+a+"]"}return P.mG(a,b,c)},
mG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.h(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.hr(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.av("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.z,t)
t=(C.z[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.av("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.o,t)
t=(C.o[t]&1<<(v&15))!==0}else t=!1
if(t)P.c8(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.av("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hl(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mD:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hn(C.b.J(a,b)))P.c8(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.q,w)
w=(C.q[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c8(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mu(y?a.toLowerCase():a)},
mu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mE:function(a,b,c){return P.c9(a,b,c,C.X)},
my:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c9(a,b,c,C.A):C.u.kn(d,new P.mz(),P.j).B(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.af(w,"/"))w="/"+w
return P.mF(w,e,f)},
mF:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.af(a,"/"))return P.mH(a,!z||c)
return P.mI(a)},
e8:function(a,b,c,d){var z,y
z={}
H.p(d,"$isN",[P.j,null],"$asN")
if(a!=null){if(d!=null)throw H.c(P.ch("Both query and queryParameters specified"))
return P.c9(a,b,c,C.p)}if(d==null)return
y=new P.av("")
z.a=""
d.O(0,new P.mB(new P.mC(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mw:function(a,b,c){return P.c9(a,b,c,C.p)},
hr:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.de(y)
v=H.de(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.b7(u,4)
if(z>=8)return H.e(C.r,z)
z=(C.r[z]&1<<(u&15))!==0}else z=!1
if(z)return H.d0(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
hl:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.a(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.J("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.a(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.hL(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.J("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.J("0123456789ABCDEF",u&15))
v+=3}}return P.cE(y,0,null)},
c9:function(a,b,c,d){var z=P.hq(a,b,c,H.p(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.w(a,b,c):z},
hq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.p(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.D()
if(typeof c!=="number")return H.h(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hr(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.o,u)
u=(C.o[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c8(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hl(v)}}if(w==null)w=new P.av("")
w.a+=C.b.w(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.h(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.D()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
ho:function(a){if(C.b.af(a,"."))return!0
return C.b.ex(a,"/.")!==-1},
mI:function(a){var z,y,x,w,v,u,t
if(!P.ho(a))return a
z=H.a([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Z(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.B(z,"/")},
mH:function(a,b){var z,y,x,w,v,u
if(!P.ho(a))return!b?P.hm(a):a
z=H.a([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaT(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaT(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.l(z,0,P.hm(z[0]))}return C.a.B(z,"/")},
hm:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hn(J.hS(a,0)))for(y=1;y<z;++y){x=C.b.J(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.aX(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.q,w)
w=(C.q[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mv:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.c(P.ch("Invalid URL encoding"))}}return z},
e9:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.eg(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.J(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.a9(y.w(a,b,c))}else{u=H.a([],[P.m])
for(x=b;x<c;++x){w=y.J(a,x)
if(w>127)throw H.c(P.ch("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.c(P.ch("Truncated URI"))
C.a.h(u,P.mv(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.p(u,"$isd",[P.m],"$asd")
return new P.kT(!1).cM(u)},
hn:function(a){var z=a|32
return 97<=z&&z<=122}}},
mt:{"^":"q:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.n()
throw H.c(P.Y("Invalid port",this.a,z+1))}},
mz:{"^":"q:41;",
$1:function(a){return P.cH(C.Y,a,C.k,!1)}},
mC:{"^":"q:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cH(C.r,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cH(C.r,b,C.k,!0))}}},
mB:{"^":"q:37;a",
$2:function(a,b){var z,y
H.R(a)
if(b==null||typeof b==="string")this.a.$2(a,H.R(b))
else for(z=J.br(H.hJ(b,"$isi")),y=this.a;z.H();)y.$2(a,H.R(z.gS(z)))}},
kI:{"^":"b;a,b,c",
geR:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.ey(y,"?",z)
w=y.length
if(x>=0){v=P.c9(y,x+1,w,C.p)
w=x}else v=null
z=new P.lm(this,"data",null,null,null,P.c9(y,z,w,C.A),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fV:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.a([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.c(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.c(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaT(z)
if(v!==44||x!==t+7||!C.b.ag(a,"base64",t+1))throw H.c(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.F.iS(0,a,s,y)
else{r=P.hq(a,s,y,C.p,!0)
if(r!=null)a=C.b.bg(a,s,y,r)}return new P.kI(a,z,c)}}},
n0:{"^":"q:51;",
$1:function(a){return new Uint8Array(96)}},
n_:{"^":"q:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hW(z,0,96,b)
return z}},
n1:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.J(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
n2:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=C.b.J(b,0),y=C.b.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
m5:{"^":"b;a,b,c,d,e,f,r,x,0y",
ges:function(){return this.c>0},
gev:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.n()
y=this.e
if(typeof y!=="number")return H.h(y)
y=z+1<y
z=y}else z=!1
return z},
gew:function(){var z=this.f
if(typeof z!=="number")return z.D()
return z<this.r},
geu:function(){return this.r<this.a.length},
gdG:function(){return this.b===4&&C.b.af(this.a,"http")},
gdH:function(){return this.b===5&&C.b.af(this.a,"https")},
gcb:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdG()){this.x="http"
z="http"}else if(this.gdH()){this.x="https"
z="https"}else if(z===4&&C.b.af(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.af(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
geS:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcW:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gc7:function(a){var z
if(this.gev()){z=this.d
if(typeof z!=="number")return z.n()
return P.bK(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdG())return 80
if(this.gdH())return 443
return 0},
geG:function(a){return C.b.w(this.a,this.e,this.f)},
gd1:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.D()
return z<y?C.b.w(this.a,z+1,y):""},
ger:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aX(y,z+1):""},
geL:function(){var z=this.f
if(typeof z!=="number")return z.D()
if(z>=this.r)return C.Z
z=P.j
return new P.fU(P.fY(this.gd1(this),C.k),[z,z])},
d2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.p(h,"$isN",[P.j,null],"$asN")
i=this.gcb()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.gev()?this.gc7(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.af(d,"/"))d="/"+d
g=P.e8(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aX(y,x+1)
return new P.d9(i,j,c,f,d,g,b)},
eM:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$ise3)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$ise3:1},
lm:{"^":"d9;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
hZ:function(a){var z=document.createElement("a")
return z},
dt:function(a,b){var z=document.createElement("canvas")
return z},
iv:function(a){H.f(a,"$isam")
return"wheel"},
d7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h7:function(a,b,c,d){var z,y
z=W.d7(W.d7(W.d7(W.d7(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hy:function(a,b){var z
H.o(a,{func:1,ret:-1,args:[b]})
z=$.W
if(z===C.j)return a
return z.dX(a,b)},
bT:{"^":"a5;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nG:{"^":"t;0m:length=","%":"AccessibleNodeList"},
nH:{"^":"bT;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nI:{"^":"bT;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dn:{"^":"t;",$isdn:1,"%":";Blob"},
ds:{"^":"bT;",
c9:function(a,b,c){if(c!=null)return a.getContext(b,P.nf(c,null))
return a.getContext(b)},
eV:function(a,b){return this.c9(a,b,null)},
$isds:1,
"%":"HTMLCanvasElement"},
ev:{"^":"t;",$isev:1,"%":"CanvasRenderingContext2D"},
nO:{"^":"L;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nQ:{"^":"il;0m:length=","%":"CSSPerspective"},
b6:{"^":"t;",$isb6:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nR:{"^":"ll;0m:length=",
eW:function(a,b){var z=a.getPropertyValue(this.fG(a,b))
return z==null?"":z},
fG:function(a,b){var z,y
z=$.$get$ez()
y=z[b]
if(typeof y==="string")return y
y=this.hM(a,b)
z[b]=y
return y},
hM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.iq()+b
if(z in a)return z
return b},
gcI:function(a){return a.bottom},
gaD:function(a){return a.height},
gam:function(a){return a.left},
gas:function(a){return a.right},
gbA:function(a){return a.top},
gaH:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ik:{"^":"b;",
gam:function(a){return this.eW(a,"left")}},
eA:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
il:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nS:{"^":"eA;0m:length=","%":"CSSTransformValue"},
nT:{"^":"eA;0m:length=","%":"CSSUnparsedValue"},
nU:{"^":"t;0m:length=","%":"DataTransferItemList"},
nV:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
nW:{"^":"lo;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.p(c,"$isac",[P.a1],"$asac")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.ac,P.a1]]},
$isJ:1,
$asJ:function(){return[[P.ac,P.a1]]},
$asy:function(){return[[P.ac,P.a1]]},
$isi:1,
$asi:function(){return[[P.ac,P.a1]]},
$isd:1,
$asd:function(){return[[P.ac,P.a1]]},
$asD:function(){return[[P.ac,P.a1]]},
"%":"ClientRectList|DOMRectList"},
ir:{"^":"t;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaH(a))+" x "+H.l(this.gaD(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.cd(b,"$isac",[P.a1],"$asac")
if(!z)return!1
z=J.cf(b)
return a.left===z.gam(b)&&a.top===z.gbA(b)&&this.gaH(a)===z.gaH(b)&&this.gaD(a)===z.gaD(b)},
gU:function(a){return W.h7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaH(a)&0x1FFFFFFF,this.gaD(a)&0x1FFFFFFF)},
gcI:function(a){return a.bottom},
gaD:function(a){return a.height},
gam:function(a){return a.left},
gas:function(a){return a.right},
gbA:function(a){return a.top},
gaH:function(a){return a.width},
$isac:1,
$asac:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nX:{"^":"lq;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.R(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$isJ:1,
$asJ:function(){return[P.j]},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nY:{"^":"t;0m:length=","%":"DOMTokenList"},
lk:{"^":"d_;a,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa5")},
l:function(a,b,c){var z
H.B(b)
H.f(c,"$isa5")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.jl(this)
return new J.aC(z,z.length,0,[H.x(z,0)])},
aC:function(a,b,c,d){throw H.c(P.cF(null))},
$asy:function(){return[W.a5]},
$asi:function(){return[W.a5]},
$asd:function(){return[W.a5]}},
a5:{"^":"L;",
gdZ:function(a){return new W.lk(a,a.children)},
ge_:function(a){return P.jG(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isa5:1,
"%":";Element"},
al:{"^":"t;",$isal:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
am:{"^":"t;",
dW:["f0",function(a,b,c,d){H.o(c,{func:1,args:[W.al]})
if(c!=null)this.fq(a,b,c,!1)}],
fq:function(a,b,c,d){return a.addEventListener(b,H.bH(H.o(c,{func:1,args:[W.al]}),1),!1)},
$isam:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;hd|he|hg|hh"},
aU:{"^":"dn;",$isaU:1,"%":"File"},
eK:{"^":"lv;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isaU")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aU]},
$isJ:1,
$asJ:function(){return[W.aU]},
$asy:function(){return[W.aU]},
$isi:1,
$asi:function(){return[W.aU]},
$isd:1,
$asd:function(){return[W.aU]},
$iseK:1,
$asD:function(){return[W.aU]},
"%":"FileList"},
nZ:{"^":"am;0m:length=","%":"FileWriter"},
o_:{"^":"bT;0m:length=","%":"HTMLFormElement"},
b7:{"^":"t;",$isb7:1,"%":"Gamepad"},
o0:{"^":"t;0m:length=","%":"History"},
o1:{"^":"lI;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isJ:1,
$asJ:function(){return[W.L]},
$asy:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cv:{"^":"t;0e1:data=",$iscv:1,"%":"ImageData"},
eQ:{"^":"bT;",$iseQ:1,"%":"HTMLImageElement"},
bW:{"^":"e0;",$isbW:1,"%":"KeyboardEvent"},
o5:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
o6:{"^":"t;0m:length=","%":"MediaList"},
o7:{"^":"am;",
dW:function(a,b,c,d){H.o(c,{func:1,args:[W.al]})
if(b==="message")a.start()
this.f0(a,b,c,!1)},
"%":"MessagePort"},
o8:{"^":"lQ;",
j:function(a,b){return P.b3(a.get(H.R(b)))},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaS:function(a){var z=H.a([],[P.j])
this.O(a,new W.je(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.C("Not supported"))},
$asao:function(){return[P.j,null]},
$isN:1,
$asN:function(){return[P.j,null]},
"%":"MIDIInputMap"},
je:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o9:{"^":"lR;",
j:function(a,b){return P.b3(a.get(H.R(b)))},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaS:function(a){var z=H.a([],[P.j])
this.O(a,new W.jf(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.C("Not supported"))},
$asao:function(){return[P.j,null]},
$isN:1,
$asN:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
jf:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"t;",$isbb:1,"%":"MimeType"},
oa:{"^":"lT;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbb")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$isJ:1,
$asJ:function(){return[W.bb]},
$asy:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asD:function(){return[W.bb]},
"%":"MimeTypeArray"},
aE:{"^":"e0;",$isaE:1,"%":"PointerEvent;DragEvent|MouseEvent"},
lj:{"^":"d_;a",
l:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.eL(z,z.length,-1,[H.bn(C.a_,z,"D",0)])},
aC:function(a,b,c,d){throw H.c(P.C("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asy:function(){return[W.L]},
$asi:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"am;",
jb:function(a,b){var z,y
try{z=a.parentNode
J.hT(z,b,a)}catch(y){H.aI(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f1(a):z},
hy:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
jk:{"^":"lV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isJ:1,
$asJ:function(){return[W.L]},
$asy:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bd:{"^":"t;0m:length=",$isbd:1,"%":"Plugin"},
oj:{"^":"lZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$isJ:1,
$asJ:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"PluginArray"},
ol:{"^":"m4;",
j:function(a,b){return P.b3(a.get(H.R(b)))},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaS:function(a){var z=H.a([],[P.j])
this.O(a,new W.jQ(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.C("Not supported"))},
$asao:function(){return[P.j,null]},
$isN:1,
$asN:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jQ:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
on:{"^":"bT;0m:length=","%":"HTMLSelectElement"},
bg:{"^":"am;",$isbg:1,"%":"SourceBuffer"},
oo:{"^":"he;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbg")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"SourceBufferList"},
bh:{"^":"t;",$isbh:1,"%":"SpeechGrammar"},
op:{"^":"m7;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbh")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$isJ:1,
$asJ:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"SpeechGrammarList"},
bi:{"^":"t;0m:length=",$isbi:1,"%":"SpeechRecognitionResult"},
or:{"^":"ma;",
j:function(a,b){return a.getItem(H.R(b))},
l:function(a,b,c){a.setItem(b,H.R(c))},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaS:function(a){var z=H.a([],[P.j])
this.O(a,new W.kb(z))
return z},
gm:function(a){return a.length},
$asao:function(){return[P.j,P.j]},
$isN:1,
$asN:function(){return[P.j,P.j]},
"%":"Storage"},
kb:{"^":"q:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"CSSStyleSheet|StyleSheet"},
bk:{"^":"am;",$isbk:1,"%":"TextTrack"},
bl:{"^":"am;",$isbl:1,"%":"TextTrackCue|VTTCue"},
ow:{"^":"mh;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbl")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$isJ:1,
$asJ:function(){return[W.bl]},
$asy:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asD:function(){return[W.bl]},
"%":"TextTrackCueList"},
ox:{"^":"hh;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbk")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"TextTrackList"},
oy:{"^":"t;0m:length=","%":"TimeRanges"},
bm:{"^":"t;",$isbm:1,"%":"Touch"},
bA:{"^":"e0;",$isbA:1,"%":"TouchEvent"},
oz:{"^":"mn;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbm")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"TouchList"},
oA:{"^":"t;0m:length=","%":"TrackDefaultList"},
e0:{"^":"al;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oC:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
oD:{"^":"am;0m:length=","%":"VideoTrackList"},
c6:{"^":"aE;",
gix:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
giw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.C("deltaX is not supported"))},
$isc6:1,
"%":"WheelEvent"},
la:{"^":"am;",
hz:function(a,b){return a.requestAnimationFrame(H.bH(H.o(b,{func:1,ret:-1,args:[P.a1]}),1))},
fO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oI:{"^":"mP;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isb6")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b6]},
$isJ:1,
$asJ:function(){return[W.b6]},
$asy:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isd:1,
$asd:function(){return[W.b6]},
$asD:function(){return[W.b6]},
"%":"CSSRuleList"},
oJ:{"^":"ir;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.cd(b,"$isac",[P.a1],"$asac")
if(!z)return!1
z=J.cf(b)
return a.left===z.gam(b)&&a.top===z.gbA(b)&&a.width===z.gaH(b)&&a.height===z.gaD(b)},
gU:function(a){return W.h7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaD:function(a){return a.height},
gaH:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oL:{"^":"mR;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isb7")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$isJ:1,
$asJ:function(){return[W.b7]},
$asy:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asD:function(){return[W.b7]},
"%":"GamepadList"},
oM:{"^":"mT;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isJ:1,
$asJ:function(){return[W.L]},
$asy:function(){return[W.L]},
$isi:1,
$asi:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asD:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oN:{"^":"mV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbi")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$isJ:1,
$asJ:function(){return[W.bi]},
$asy:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"SpeechRecognitionResultList"},
oO:{"^":"mX;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.B(b)
H.f(c,"$isbj")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"StyleSheetList"},
lr:{"^":"dW;a,b,c,$ti",
iM:function(a,b,c,d){var z=H.x(this,0)
H.o(a,{func:1,ret:-1,args:[z]})
H.o(c,{func:1,ret:-1})
return W.a8(this.a,this.b,a,!1,z)}},
oK:{"^":"lr;a,b,c,$ti"},
ls:{"^":"ft;a,b,c,d,e,$ti",
hS:function(){var z=this.d
if(z!=null&&this.a<=0)J.hU(this.b,this.c,z,!1)},
p:{
a8:function(a,b,c,d,e){var z=c==null?null:W.hy(new W.lt(c),W.al)
z=new W.ls(0,a,b,z,!1,[e])
z.hS()
return z}}},
lt:{"^":"q:7;a",
$1:function(a){return this.a.$1(H.f(a,"$isal"))}},
D:{"^":"b;$ti",
ga4:function(a){return new W.eL(a,this.gm(a),-1,[H.bn(this,a,"D",0)])},
aC:function(a,b,c,d){H.A(d,H.bn(this,a,"D",0))
throw H.c(P.C("Cannot modify an immutable List."))}},
eL:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.em(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
ll:{"^":"t+ik;"},
ln:{"^":"t+y;"},
lo:{"^":"ln+D;"},
lp:{"^":"t+y;"},
lq:{"^":"lp+D;"},
lu:{"^":"t+y;"},
lv:{"^":"lu+D;"},
lH:{"^":"t+y;"},
lI:{"^":"lH+D;"},
lQ:{"^":"t+ao;"},
lR:{"^":"t+ao;"},
lS:{"^":"t+y;"},
lT:{"^":"lS+D;"},
lU:{"^":"t+y;"},
lV:{"^":"lU+D;"},
lY:{"^":"t+y;"},
lZ:{"^":"lY+D;"},
m4:{"^":"t+ao;"},
hd:{"^":"am+y;"},
he:{"^":"hd+D;"},
m6:{"^":"t+y;"},
m7:{"^":"m6+D;"},
ma:{"^":"t+ao;"},
mg:{"^":"t+y;"},
mh:{"^":"mg+D;"},
hg:{"^":"am+y;"},
hh:{"^":"hg+D;"},
mm:{"^":"t+y;"},
mn:{"^":"mm+D;"},
mO:{"^":"t+y;"},
mP:{"^":"mO+D;"},
mQ:{"^":"t+y;"},
mR:{"^":"mQ+D;"},
mS:{"^":"t+y;"},
mT:{"^":"mS+D;"},
mU:{"^":"t+y;"},
mV:{"^":"mU+D;"},
mW:{"^":"t+y;"},
mX:{"^":"mW+D;"}}],["","",,P,{"^":"",
ni:function(a){var z,y
z=J.M(a)
if(!!z.$iscv){y=z.ge1(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hj(a.data,a.height,a.width)},
nh:function(a){if(a instanceof P.hj)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var z,y,x,w,v
if(a==null)return
z=P.eZ(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.R(y[w])
z.l(0,v,a[v])}return z},
nf:function(a,b){var z={}
a.O(0,new P.ng(z))
return z},
eG:function(){var z=$.eF
if(z==null){z=J.dj(window.navigator.userAgent,"Opera",0)
$.eF=z}return z},
iq:function(){var z,y
z=$.eC
if(z!=null)return z
y=$.eD
if(y==null){y=J.dj(window.navigator.userAgent,"Firefox",0)
$.eD=y}if(y)z="-moz-"
else{y=$.eE
if(y==null){y=!P.eG()&&J.dj(window.navigator.userAgent,"Trident/",0)
$.eE=y}if(y)z="-ms-"
else z=P.eG()?"-o-":"-webkit-"}$.eC=z
return z},
md:{"^":"b;",
ep:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d6:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaK)return new Date(a.a)
if(!!y.$isjJ)throw H.c(P.cF("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$isdn)return a
if(!!y.$iseK)return a
if(!!y.$iscv)return a
if(!!y.$isfa||!!y.$isdO)return a
if(!!y.$isN){x=this.ep(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.O(a,new P.mf(z,this))
return z.a}if(!!y.$isd){x=this.ep(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.iu(a,x)}throw H.c(P.cF("structured clone of other type"))},
iu:function(a,b){var z,y,x,w
z=J.ap(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.h(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.d6(z.j(a,w)))
return x}},
mf:{"^":"q:12;a,b",
$2:function(a,b){this.a.a[a]=this.b.d6(b)}},
hj:{"^":"b;e1:a>,b,c",$iscv:1},
ng:{"^":"q:12;a",
$2:function(a,b){this.a[a]=b}},
me:{"^":"md;a,b"},
iC:{"^":"d_;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.az(z,"y",0)
x=W.a5
return new H.j3(new H.l8(z,H.o(new P.iD(),{func:1,ret:P.ad,args:[y]}),[y]),H.o(new P.iE(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.B(b)
H.f(c,"$isa5")
z=this.gbJ()
J.hX(z.b.$1(J.dk(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aC:function(a,b,c,d){throw H.c(P.C("Cannot fillRange on filtered list"))},
gm:function(a){return J.aB(this.gbJ().a)},
j:function(a,b){var z=this.gbJ()
return z.b.$1(J.dk(z.a,b))},
ga4:function(a){var z=P.f1(this.gbJ(),!1,W.a5)
return new J.aC(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.a5]},
$asi:function(){return[W.a5]},
$asd:function(){return[W.a5]}},
iD:{"^":"q:49;",
$1:function(a){return!!J.M(H.f(a,"$isL")).$isa5}},
iE:{"^":"q:26;",
$1:function(a){return H.k(H.f(a,"$isL"),"$isa5")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
d8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lJ:{"^":"b;",
iR:function(a){if(a<=0||a>4294967296)throw H.c(P.jF("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}},
m_:{"^":"b;$ti",
gas:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.A(z+this.c,H.x(this,0))},
gcI:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.A(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.cd(b,"$isac",[P.a1],"$asac")
if(!z)return!1
z=this.a
y=J.cf(b)
x=y.gam(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbA(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gas(b)){if(typeof x!=="number")return x.n()
z=H.A(x+this.d,w)===y.gcI(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.bq(z)
x=this.b
w=J.bq(x)
if(typeof z!=="number")return z.n()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.A(x+this.d,v)
return P.lK(P.d8(P.d8(P.d8(P.d8(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ac:{"^":"m_;am:a>,bA:b>,aH:c>,aD:d>,$ti",p:{
jG:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.D()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.D()
if(d<0)y=-d*0
else y=d
return new P.ac(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bX:{"^":"t;",$isbX:1,"%":"SVGLength"},o4:{"^":"lM;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.B(b)
H.f(c,"$isbX")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bX]},
$isi:1,
$asi:function(){return[P.bX]},
$isd:1,
$asd:function(){return[P.bX]},
$asD:function(){return[P.bX]},
"%":"SVGLengthList"},c_:{"^":"t;",$isc_:1,"%":"SVGNumber"},oh:{"^":"lX;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.B(b)
H.f(c,"$isc_")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asy:function(){return[P.c_]},
$isi:1,
$asi:function(){return[P.c_]},
$isd:1,
$asd:function(){return[P.c_]},
$asD:function(){return[P.c_]},
"%":"SVGNumberList"},ok:{"^":"t;0m:length=","%":"SVGPointList"},os:{"^":"mc;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.B(b)
H.R(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},ou:{"^":"a5;",
gdZ:function(a){return new P.iC(a,new W.lj(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c1:{"^":"t;",$isc1:1,"%":"SVGTransform"},oB:{"^":"mp;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.B(b)
H.f(c,"$isc1")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asy:function(){return[P.c1]},
$isi:1,
$asi:function(){return[P.c1]},
$isd:1,
$asd:function(){return[P.c1]},
$asD:function(){return[P.c1]},
"%":"SVGTransformList"},lL:{"^":"t+y;"},lM:{"^":"lL+D;"},lW:{"^":"t+y;"},lX:{"^":"lW+D;"},mb:{"^":"t+y;"},mc:{"^":"mb+D;"},mo:{"^":"t+y;"},mp:{"^":"mo+D;"}}],["","",,P,{"^":"",U:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isku:1}}],["","",,P,{"^":"",nJ:{"^":"t;0m:length=","%":"AudioBuffer"},nK:{"^":"li;",
j:function(a,b){return P.b3(a.get(H.R(b)))},
O:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaS:function(a){var z=H.a([],[P.j])
this.O(a,new P.i0(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.C("Not supported"))},
$asao:function(){return[P.j,null]},
$isN:1,
$asN:function(){return[P.j,null]},
"%":"AudioParamMap"},i0:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},nL:{"^":"am;0m:length=","%":"AudioTrackList"},i3:{"^":"am;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oi:{"^":"i3;0m:length=","%":"OfflineAudioContext"},li:{"^":"t+ao;"}}],["","",,P,{"^":"",dT:{"^":"t;",
jj:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$iscv)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nh(g))
return}if(!!z.$iseQ)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.ch("Incorrect number or type of arguments"))},
ji:function(a,b,c,d,e,f,g){return this.jj(a,b,c,d,e,f,g,null,null,null)},
$isdT:1,
"%":"WebGLRenderingContext"},kC:{"^":"t;",$iskC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oq:{"^":"m9;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return P.b3(a.item(b))},
l:function(a,b,c){H.B(b)
H.f(c,"$isN")
throw H.c(P.C("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$isd:1,
$asd:function(){return[[P.N,,,]]},
$asD:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},m8:{"^":"t+y;"},m9:{"^":"m8+D;"}}],["","",,L,{"^":"",jm:{"^":"b;a",p:{
jn:function(a){var z,y,x,w,v,u,t,s
z=new Array(256)
z.fixed$length=Array
y=[P.m]
x=H.a(z,y)
z=new Array(256)
z.fixed$length=Array
w=H.a(z,y)
for(v=0;v<256;++v)C.a.l(w,v,v)
u=P.bK("6364136223846793005",null,null)
t=P.bK("1442695040888963407",null,null)
if(typeof u!=="number")return H.h(u)
if(typeof t!=="number")return H.h(t)
a=C.d.d4(C.d.d4(C.d.d4(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.d.bh(a+31,v+1)
if(s>=256)return H.e(w,s)
C.a.l(x,v,w[s])
w[s]=w[v]}return new L.jm(x)}}}}],["","",,B,{"^":"",iz:{"^":"b;a,b,c,d,0e",
ah:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.be(a,b)
y=this.c.v(0,z).v(0,$.$get$dz().k(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.n(0,z)
r=this.a
q=r[C.i.ad(s.a)&255]
s=C.i.ad(s.b)
if(typeof q!=="number")return q.n()
s=r[q+s&255]
if(typeof s!=="number")return s.bC()
p=(s&14)>>>1
s=$.$get$eI()
if(p>=8)return H.e(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}}},be:{"^":"b;a,b",
n:function(a,b){return new B.be(this.a+b.a,this.b+b.b)},
v:function(a,b){return new B.be(this.a-b.a,this.b-b.b)},
k:function(a,b){return new B.be(this.a*b,this.b*b)},
i:function(a){return H.l(this.a)+", "+H.l(this.b)},
p:{
aO:function(a,b){return new B.be(a,b)}}}}],["","",,O,{"^":"",at:{"^":"b;0a,0b,0c,0d,$ti",
bF:function(a){this.a=H.a([],[a])
this.b=null
this.c=null
this.d=null},
cc:function(a,b,c){var z=H.az(this,"at",0)
H.o(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.o(a,z)
H.o(c,z)
this.b=b
this.c=a
this.d=c},
bE:function(a,b){return this.cc(a,null,b)},
bl:function(a){var z
H.p(a,"$isi",[H.az(this,"at",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dI:function(a,b){var z
H.p(b,"$isi",[H.az(this,"at",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.aC(z,z.length,0,[H.x(z,0)])},
M:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"at",0)
H.A(b,z)
z=[z]
if(this.bl(H.a([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dI(x,H.a([b],z))}},
aN:function(a,b){var z,y
H.p(b,"$isi",[H.az(this,"at",0)],"$asi")
if(this.bl(b)){z=this.a
y=z.length
C.a.aN(z,b)
this.dI(y,b)}},
$isi:1,
p:{
dv:function(a){var z=new O.at([a])
z.bF(a)
return z}}},dL:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
fd:function(a){var z=this.b
if(!(z==null))z.C(a)},
aY:function(){return this.fd(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaT(z)
else return V.by()},
eJ:function(a){var z=this.a
if(a==null)C.a.h(z,V.by())
else C.a.h(z,a)
this.aY()},
d0:function(){var z=this.a
if(z.length>0){z.pop()
this.aY()}}}}],["","",,E,{"^":"",dm:{"^":"b;"},ak:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
dr:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.H();){y=z.d
if(y.f==null)y.dr()}},
sdd:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null)z.gu().W(0,this.gc6())
y=this.d
if(y!=null)y.gu().h(0,this.gc6())
x=new D.H("shapeBuilder",z,this.d,this,[F.dU])
x.b=!0
this.a5(x)}},
ae:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.av(0,b,this):null
if(!J.Z(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.aM])
w.b=!0
this.a5(w)}z=this.f
if(z!=null)z.ae(0,b)
for(z=this.y.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.H();)z.d.ae(0,b)},
bf:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.k(0,z.ga_(z)))
z.aY()
a.eK(this.f)
z=a.dy
x=(z&&C.a).gaT(z)
if(x!=null&&this.d!=null)x.ja(a,this)
for(z=this.y.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.H();)z.d.bf(a)
a.eI()
a.dx.d0()},
gu:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
a5:function(a){var z=this.z
if(!(z==null))z.C(a)},
a8:function(){return this.a5(null)},
iX:[function(a){H.f(a,"$isw")
this.e=null
this.a5(a)},function(){return this.iX(null)},"kt","$1","$0","gc6",0,2,1],
iY:[function(a){this.a5(H.f(a,"$isw"))},function(){return this.iY(null)},"ku","$1","$0","geF",0,2,1],
iW:[function(a){this.a5(H.f(a,"$isw"))},function(){return this.iW(null)},"ks","$1","$0","geE",0,2,1],
iU:[function(a){this.a5(H.f(a,"$isw"))},function(){return this.iU(null)},"kq","$1","$0","geD",0,2,1],
kp:[function(a,b){var z,y,x,w,v,u,t,s
H.p(b,"$isi",[E.ak],"$asi")
for(z=b.length,y=this.geD(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bu()
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.o(y,x)
s=t.a
if(s==null){s=H.a([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a8()},"$2","giT",8,0,8],
kr:[function(a,b){var z,y,x,w,v
H.p(b,"$isi",[E.ak],"$asi")
for(z=b.length,y=this.geD(),x=0;x<b.length;b.length===z||(0,H.E)(b),++x){w=b[x]
if(w!=null){if(w.ga7()==null){v=new D.bu()
v.d=0
w.sa7(v)}w.ga7().W(0,y)}}this.a8()},"$2","giV",8,0,8],
$isaX:1,
p:{
bt:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.ak()
z.a=d
z.b=!0
y=O.dv(E.ak)
z.y=y
y.bE(z.giT(),z.giV())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null)y.gu().W(0,z.gc6())
x=z.c
if(x!=null)x.gu().h(0,z.gc6())
w=new D.H("shape",y,z.c,z,[F.fq])
w.b=!0
z.a5(w)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null)y.gu().W(0,z.geF())
v=z.f
z.f=f
if(f!=null)f.gu().h(0,z.geF())
z.dr()
w=new D.H("technique",v,z.f,z,[O.dX])
w.b=!0
z.a5(w)}if(!J.Z(z.r,c)){u=z.r
if(u!=null)u.gu().W(0,z.geE())
if(c!=null)c.gu().h(0,z.geE())
z.r=c
w=new D.H("mover",u,c,z,[U.ab])
w.b=!0
z.a5(w)}if(a!=null)z.y.aN(0,a)
return z}}},jL:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f8:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aK(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dL()
y=[V.aM]
z.a=H.a([],y)
z.gu().h(0,new E.jN(this))
this.cy=z
z=new O.dL()
z.a=H.a([],y)
z.gu().h(0,new E.jO(this))
this.db=z
z=new O.dL()
z.a=H.a([],y)
z.gu().h(0,new E.jP(this))
this.dx=z
z=H.a([],[O.dX])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.j,A.fp])},
gj6:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.k(0,y.ga_(y))
this.z=y
z=y}return z},
eK:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaT(z):a;(z&&C.a).h(z,y)},
eI:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
jM:function(a,b){var z=new E.jL(a,b)
z.f8(a,b)
return z}}},jN:{"^":"q:9;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jO:{"^":"q:9;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jP:{"^":"q:9;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},k9:{"^":"w;c,a,0b"},kn:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
ff:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.C(a)
this.jd()},function(){return this.ff(null)},"fe","$1","$0","gdg",0,2,1],
giG:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.eH(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aK(z,!1)
return x/y},
dO:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.h(z)
x=C.i.be(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.i.be(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dZ(C.n,this.gjc())},
jd:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.o(new E.kp(this),{func:1,ret:-1,args:[P.a1]})
C.E.fO(z)
C.E.hz(z,W.hy(y,P.a1))}},"$0","gjc",0,0,3],
j9:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dO()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aK(w,!1)
x.y=P.eH(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aY()
w=x.db
C.a.sm(w.a,0)
w.aY()
w=x.dx
C.a.sm(w.a,0)
w.aY()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.bf(this.e)}}catch(v){z=H.aI(v)
y=H.bJ(v)
P.el("Error: "+H.l(z))
P.el("Stack: "+H.l(y))
throw H.c(z)}},
p:{
ko:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isds)return E.fx(a,!0,!0,!0,!1)
y=W.dt(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdZ(a).h(0,y)
w=E.fx(y,!0,!0,!0,!1)
w.a=a
return w},
fx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kn()
y=P.f_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.c9(a,"webgl",y)
x=H.f(x==null?C.l.c9(a,"experimental-webgl",y):x,"$isdT")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jM(x,a)
w=new T.ki(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kP(a)
v=new X.iU()
v.c=new X.X(!1,!1,!1)
v.d=P.iY(null,null,null,P.m)
w.b=v
v=new X.jg(w)
v.f=0
v.r=new V.P(0,0)
v.x=new V.P(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j_(w)
v.r=0
v.x=new V.P(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kr(w)
v.e=0
v.f=new V.P(0,0)
v.r=new V.P(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.a([],[[P.ft,P.b]])
w.z=v
u=document
t=W.aE
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a8(u,"contextmenu",H.o(w.gh9(),s),!1,t))
v=w.z
r=W.al
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a8(a,"focus",H.o(w.ghc(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a8(a,"blur",H.o(w.gh4(),q),!1,r))
v=w.z
p=W.bW
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a8(u,"keyup",H.o(w.gcr(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a8(u,"keydown",H.o(w.gcf(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousedown",H.o(w.ghi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mouseup",H.o(w.ghk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousemove",H.o(w.ghj(),s),!1,t))
p=w.z
o=W.c6;(p&&C.a).h(p,W.a8(a,H.R(W.iv(a)),H.o(w.ghl(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a8(u,"mousemove",H.o(w.gha(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a8(u,"mouseup",H.o(w.ghb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a8(u,"pointerlockchange",H.o(w.ghm(),q),!1,r))
r=w.z
q=W.bA
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a8(a,"touchstart",H.o(w.ght(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchend",H.o(w.ghr(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchmove",H.o(w.ghs(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aK(Date.now(),!1)
z.cy=0
z.dO()
return z}}},kp:{"^":"q:31;a",
$1:function(a){var z
H.nz(a)
z=this.a
if(z.ch){z.ch=!1
z.j9()}}}}],["","",,Z,{"^":"",h1:{"^":"b;a,b",p:{
h2:function(a,b,c){var z
H.p(c,"$isd",[P.z],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Float32Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.h1(b,z)},
cG:function(a,b,c){var z
H.p(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.h1(b,z)}}},cQ:{"^":"dm;a,b,c,d,e",
aO:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aI(y)
x=P.v('Failed to bind buffer attribute "'+J.ar(this.a)+'": '+H.l(z))
throw H.c(x)}},
i:function(a){return"["+J.ar(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},l7:{"^":"b;a",$isnM:1},dr:{"^":"b;a,0b,c,d",
bd:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aO:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aO(a)},
bB:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
bf:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.a([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].i(0))
u=H.a([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ar(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isov:1},bv:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bz(this.c)+"'")+"]"}},ag:{"^":"b;a",
ge0:function(a){var z,y
z=this.a
y=(z&$.$get$a4().a)!==0?1:0
if((z&$.$get$ah().a)!==0)++y
if((z&$.$get$b0().a)!==0)++y
if((z&$.$get$a7().a)!==0)++y
if((z&$.$get$b1().a)!==0)++y
if((z&$.$get$c4().a)!==0)++y
if((z&$.$get$c5().a)!==0)++y
if((z&$.$get$bC().a)!==0)++y
return(z&$.$get$b_().a)!==0?y+1:y},
gbi:function(a){var z,y
z=this.a
y=(z&$.$get$a4().a)!==0?3:0
if((z&$.$get$ah().a)!==0)y+=3
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$a7().a)!==0)y+=2
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$c4().a)!==0)y+=3
if((z&$.$get$c5().a)!==0)y+=4
if((z&$.$get$bC().a)!==0)++y
return(z&$.$get$b_().a)!==0?y+4:y},
cC:function(a){var z,y,x
z=$.$get$a4()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ah()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0)if(x===a)return z
return $.$get$h0()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ag))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.a([],[P.j])
y=this.a
if((y&$.$get$a4().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ah().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$a7().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b1().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$c4().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$c5().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
aH:function(a){return new Z.ag(a)}}}}],["","",,D,{"^":"",du:{"^":"b;"},bu:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.w]}
H.o(b,z)
y=this.a
if(y==null){z=H.a([],[z])
this.a=z}else z=y
C.a.h(z,b)},
W:function(a,b){var z,y
H.o(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.aq(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).W(z,b)||!1}else y=!1
return y},
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.O(y,new D.iA(z))
return!0},
e2:function(){return this.C(null)},
je:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.C(y)}}},
aG:function(a){return this.je(a,!0,!1)},
p:{
K:function(){var z=new D.bu()
z.d=0
return z}}},iA:{"^":"q:32;a",
$1:function(a){var z
H.o(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"b;a,0b"},cw:{"^":"w;c,d,a,0b,$ti"},cx:{"^":"w;c,d,a,0b,$ti"},H:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",et:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.et))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nN<"}},T:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.T))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},bV:{"^":"w;c,a,0b"},iT:{"^":"at;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
gal:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
dh:function(a){var z=this.e
if(!(z==null))z.C(a)},
jv:[function(a){var z,y,x
H.p(a,"$isi",[X.T],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(C.a.aq(this.a,x))return!1}return!0},"$1","gfi",4,0,33],
ju:[function(a,b){var z=X.T
z=new D.cw(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.dh(z)},"$2","gfg",8,0,15],
jw:[function(a,b){var z=X.T
z=new D.cx(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.dh(z)},"$2","gfj",8,0,15],
fh:[function(a){var z
H.f(a,"$isw")
if(!this.r&&a instanceof X.bV){z=a.c
if(C.a.aq(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.C(a)}}},"$1","gcf",4,0,0],
hf:[function(a){var z
H.f(a,"$isw")
if(this.r&&a instanceof X.bV){z=a.c
if(C.a.aq(this.a,z))this.r=!1}},"$1","gcr",4,0,0],
a9:function(a){var z,y
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.K()
z.b=y}y.h(0,this.gcf())
y=z.a
if(y==null){y=D.K()
z.a=y
z=y}else z=y
z.h(0,this.gcr())
return!0},
$asi:function(){return[X.T]},
$asat:function(){return[X.T]},
p:{
aL:function(){var z=new X.iT()
z.bF(X.T)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.cc(z.gfg(),z.gfi(),z.gfj())
return z}}},iU:{"^":"b;0a,0b,0c,0d",
j3:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bV(a,this)
y.b=!0
return z.C(y)},
j_:function(a){var z,y
this.c=a.b
this.d.W(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bV(a,this)
y.b=!0
return z.C(y)}},f2:{"^":"dQ;x,y,c,d,e,a,0b"},j_:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aL:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aK(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.a
if(typeof t!=="number")return t.n()
y=y.b
if(typeof y!=="number")return y.n()
s=new V.P(t+x*w,y+v*u)
u=this.a.gbP()
r=new X.bY(a,new V.P(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
d_:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.aL(a,b))
return!0},
bu:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eY()
if(typeof z!=="number")return z.bC()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.aL(a,b))
return!0},
bt:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.aL(a,b))
return!0},
j4:function(a){return!1},
hh:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aK(Date.now(),!1)
y=this.f
x=new X.f2(c,a,this.a.gbP(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.P(0,0)}},X:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.X))return!1
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
return z+(this.c?"Shift+":"")}},bY:{"^":"dQ;x,y,z,Q,ch,c,d,e,a,0b"},jg:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cm:function(a,b,c){var z,y,x
z=new P.aK(Date.now(),!1)
y=this.a.gbP()
x=new X.bY(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d_:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.cm(a,b,!0))
return!0},
bu:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eY()
if(typeof z!=="number")return z.bC()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.cm(a,b,!0))
return!0},
bt:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.cm(a,b,!1))
return!0},
j5:function(a,b){return!1}},dQ:{"^":"w;"},fB:{"^":"dQ;x,y,z,Q,ch,c,d,e,a,0b"},kr:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aL:function(a,b){var z,y,x,w
H.p(a,"$isd",[V.P],"$asd")
z=new P.aK(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gbP()
w=new X.fB(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
j2:function(a){var z
H.p(a,"$isd",[V.P],"$asd")
z=this.b
if(z==null)return!1
z.C(this.aL(a,!0))
return!0},
j0:function(a){var z
H.p(a,"$isd",[V.P],"$asd")
z=this.c
if(z==null)return!1
z.C(this.aL(a,!0))
return!0},
j1:function(a){var z
H.p(a,"$isd",[V.P],"$asd")
z=this.d
if(z==null)return!1
z.C(this.aL(a,!1))
return!0}},kP:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbP:function(){var z=this.a
return V.dR(0,0,(z&&C.l).ge_(z).c,C.l.ge_(z).d)},
dB:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.T(z,new X.X(y,a.altKey,a.shiftKey))},
b6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.X(y,a.altKey,a.shiftKey)},
cw:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.X(y,a.altKey,a.shiftKey)},
aM:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=z.top
if(typeof x!=="number")return x.v()
return new V.P(y-w,x-v)},
bm:function(a){return new V.a3(a.movementX,a.movementY)},
cs:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.a([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.i.at(u.pageX)
C.i.at(u.pageY)
s=z.left
C.i.at(u.pageX)
C.a.h(y,new V.P(t-s,C.i.at(u.pageY)-z.top))}return y},
aI:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.et(z,new X.X(y,a.altKey,a.shiftKey))},
co:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.v()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jW:[function(a){this.f=!0},"$1","ghc",4,0,7],
jO:[function(a){this.f=!1},"$1","gh4",4,0,7],
jT:[function(a){H.f(a,"$isaE")
if(this.f&&this.co(a))a.preventDefault()},"$1","gh9",4,0,4],
hf:[function(a){var z
H.f(a,"$isbW")
if(!this.f)return
z=this.dB(a)
if(this.b.j3(z))a.preventDefault()},"$1","gcr",4,0,21],
fh:[function(a){var z
H.f(a,"$isbW")
if(!this.f)return
z=this.dB(a)
if(this.b.j_(z))a.preventDefault()},"$1","gcf",4,0,21],
k_:[function(a){var z,y,x,w
H.f(a,"$isaE")
z=this.a
z.focus()
this.f=!0
this.b6(a)
if(this.x){y=this.aI(a)
x=this.bm(a)
if(this.d.d_(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aI(a)
w=this.aM(a)
if(this.c.d_(y,w))a.preventDefault()},"$1","ghi",4,0,4],
k5:[function(a){var z,y,x
H.f(a,"$isaE")
this.b6(a)
z=this.aI(a)
if(this.x){y=this.bm(a)
if(this.d.bu(z,y))a.preventDefault()
return}if(this.r)return
x=this.aM(a)
if(this.c.bu(z,x))a.preventDefault()},"$1","ghk",4,0,4],
jV:[function(a){var z,y,x
H.f(a,"$isaE")
if(!this.co(a)){this.b6(a)
z=this.aI(a)
if(this.x){y=this.bm(a)
if(this.d.bu(z,y))a.preventDefault()
return}if(this.r)return
x=this.aM(a)
if(this.c.bu(z,x))a.preventDefault()}},"$1","ghb",4,0,4],
k0:[function(a){var z,y,x
H.f(a,"$isaE")
this.b6(a)
z=this.aI(a)
if(this.x){y=this.bm(a)
if(this.d.bt(z,y))a.preventDefault()
return}if(this.r)return
x=this.aM(a)
if(this.c.bt(z,x))a.preventDefault()},"$1","ghj",4,0,4],
jU:[function(a){var z,y,x
H.f(a,"$isaE")
if(!this.co(a)){this.b6(a)
z=this.aI(a)
if(this.x){y=this.bm(a)
if(this.d.bt(z,y))a.preventDefault()
return}if(this.r)return
x=this.aM(a)
if(this.c.bt(z,x))a.preventDefault()}},"$1","gha",4,0,4],
k6:[function(a){var z,y
H.f(a,"$isc6")
this.b6(a)
z=new V.a3((a&&C.D).giw(a),C.D.gix(a)).A(0,180)
if(this.x){if(this.d.j4(z))a.preventDefault()
return}if(this.r)return
y=this.aM(a)
if(this.c.j5(z,y))a.preventDefault()},"$1","ghl",4,0,38],
k7:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aI(this.y)
v=this.aM(this.y)
this.d.hh(w,v,x)}},"$1","ghm",4,0,7],
ke:[function(a){var z
H.f(a,"$isbA")
this.a.focus()
this.f=!0
this.cw(a)
z=this.cs(a)
if(this.e.j2(z))a.preventDefault()},"$1","ght",4,0,13],
kc:[function(a){var z
H.f(a,"$isbA")
this.cw(a)
z=this.cs(a)
if(this.e.j0(z))a.preventDefault()},"$1","ghr",4,0,13],
kd:[function(a){var z
H.f(a,"$isbA")
this.cw(a)
z=this.cs(a)
if(this.e.j1(z))a.preventDefault()},"$1","ghs",4,0,13]}}],["","",,D,{"^":"",cT:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z},
b4:[function(a){var z
H.f(a,"$isw")
z=this.d
if(!(z==null))z.C(a)},function(){return this.b4(null)},"jP","$1","$0","gh5",0,2,1],
$isa6:1,
$isaX:1},a6:{"^":"b;",$isaX:1},iV:{"^":"at;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
b4:function(a){var z=this.Q
if(!(z==null))z.C(a)},
hg:[function(a){var z
H.f(a,"$isw")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.hg(null)},"jZ","$1","$0","gdJ",0,2,1],
k8:[function(a){var z,y,x
H.p(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(x==null||this.fK(x))return!1}return!0},"$1","ghn",4,0,40],
jJ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdJ(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.f(b[u],"$isa6")
if(t instanceof D.cT)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bu()
s.d=0
t.d=s}H.o(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cw(a,b,this,[z])
z.b=!0
this.b4(z)},"$2","gh_",8,0,22],
ka:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdJ(),w=0;w<b.length;b.length===y||(0,H.E)(b),++w){v=H.f(b[w],"$isa6")
if(v instanceof D.cT)C.a.W(this.e,v)
u=v.d
if(u==null){u=new D.bu()
u.d=0
v.d=u}u.W(0,x)}z=new D.cx(a,b,this,[z])
z.b=!0
this.b4(z)},"$2","ghp",8,0,22],
fK:function(a){var z=C.a.aq(this.e,a)
return z},
$asi:function(){return[D.a6]},
$asat:function(){return[D.a6]}},ju:{"^":"b;",$isa6:1,$isaX:1},k7:{"^":"b;",$isa6:1,$isaX:1},kk:{"^":"b;",$isa6:1,$isaX:1},kl:{"^":"b;",$isa6:1,$isaX:1},km:{"^":"b;",$isa6:1,$isaX:1}}],["","",,V,{"^":"",
nP:[function(a,b){if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.h(a)
return Math.abs(b-a)<=1e-9},"$2","jd",8,0,34],
dh:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bh(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.b.aU("null",c)
return C.b.aU(C.i.eQ($.n.$2(a,0)?0:a,b),c+b+1)},
bI:function(a,b,c){var z,y,x,w,v,u
H.p(a,"$isd",[P.z],"$asd")
z=H.a([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.E)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.l(z,u,C.b.aU(z[u],x))}return z},
ek:function(a,b){return C.i.ad(Math.pow(b,C.m.be(Math.log(H.ne(a))/Math.log(b))))},
ae:{"^":"b;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
b4:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
b8:{"^":"b;a",
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.b8))return!1
return this.a===b.a},
i:function(a){var z,y,x
$.$get$eN()
$.$get$dB()
z=H.a([],[P.j])
y=this.a
x=$.$get$ba().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$dC().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$b9().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bQ().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$dD().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bP().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$bS().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$eP().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$bR().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
au:function(a){return new V.b8(a)}}},
cX:{"^":"b;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.l(this.c)+" "+H.l(this.d)}},
aW:{"^":"b;a,b,c,d,e,f,r,x,y",
ao:function(a,b){var z=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
br:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.k()
if(typeof x!=="number")return H.h(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
if(typeof z!=="number")return z.k()
t=this.d
s=this.b
if(typeof s!=="number")return s.k()
r=s*x
q=this.c
if(typeof q!=="number")return H.h(q)
p=u*q
if(typeof t!=="number")return t.k()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.k()
m=z*(w-v*u)-t*(r-p)+o*n
if($.n.$2(m,0))return new V.aW(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aW((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
t=this.d
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return p.k()
o=this.y
if(typeof o!=="number")return o.k()
return new V.I(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
t=this.d
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return p.k()
o=this.y
if(typeof o!=="number")return o.k()
return new V.u(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aW))return!1
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
z=[P.z]
y=V.bI(H.a([this.a,this.d,this.r],z),3,0)
x=V.bI(H.a([this.b,this.e,this.x],z),3,0)
w=V.bI(H.a([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
p:{
f6:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aW(z,0,-y,0,1,0,y,0,z)}}},
aM:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ao:function(a,b){var z=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
br:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.h(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.h(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.h(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.h(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.h(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.h(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.by()
a3=1/a2
a4=-w
a5=-i
return V.aN((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.h(s)
r=a7.b
if(typeof r!=="number")return H.h(r)
q=a7.f
if(typeof q!=="number")return H.h(q)
p=a7.z
if(typeof p!=="number")return H.h(p)
o=a7.cy
if(typeof o!=="number")return H.h(o)
n=a7.c
if(typeof n!=="number")return H.h(n)
m=a7.r
if(typeof m!=="number")return H.h(m)
l=a7.Q
if(typeof l!=="number")return H.h(l)
k=a7.db
if(typeof k!=="number")return H.h(k)
j=a7.d
if(typeof j!=="number")return H.h(j)
i=a7.x
if(typeof i!=="number")return H.h(i)
h=a7.ch
if(typeof h!=="number")return H.h(h)
g=a7.dx
if(typeof g!=="number")return H.h(g)
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
return V.aN(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
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
return new V.I(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
t=this.d
if(typeof t!=="number")return H.h(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.h(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.h(l)
return new V.u(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
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
i:function(a){return this.T()},
eq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bI(H.a([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bI(H.a([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bI(H.a([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bI(H.a([this.d,this.x,this.ch,this.dx],z),b,c)
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
T:function(){return this.eq("",3,0)},
G:function(a){return this.eq(a,3,0)},
p:{
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
by:function(){return V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cB:function(a,b,c){return V.aN(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dM:function(a,b,c,d){return V.aN(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
f8:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aN(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
f9:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aN(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
f7:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.F(c)))
y=b.bq(z)
x=y.A(0,Math.sqrt(y.F(y)))
w=z.bq(x)
v=new V.I(a.a,a.b,a.c)
return V.aN(x.a,w.a,z.a,x.N(0).F(v),x.b,w.b,z.b,w.N(0).F(v),x.c,w.c,z.c,z.N(0).F(v),0,0,0,1)}}},
P:{"^":"b;a,b",
v:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.h(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.h(w)
return new V.P(z-y,x-w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
u:{"^":"b;a,b,c",
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.h(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.h(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.h(u)
return new V.u(z+y,x+w,v+u)},
v:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.h(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.h(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.v()
if(typeof u!=="number")return H.h(u)
return new V.u(z-y,x-w,v-u)},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
x=this.c
if(typeof x!=="number")return x.k()
return new V.u(z*b,y*b,x*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
p:{
bf:function(a,b,c){return new V.u(a,b,c)}}},
cC:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
fj:{"^":"b;a,b,c,d,e,f",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fj))return!1
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
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"},
p:{
fk:function(a,b){return new V.fj(a.a,a.b,a.c,b.a,b.b,b.c)}}},
fm:{"^":"b;a,b,c,d",
gaF:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
eC:function(a){var z,y,x,w,v,u,t
z=$.$get$eO()
y=a.a
x=this.a
if(typeof y!=="number")return y.D()
if(y<x){w=$.$get$b9()
z=new V.b8(z.a|w.a)}else if(y>=x+this.c){w=$.$get$ba()
z=new V.b8(z.a|w.a)}else{w=$.$get$dC()
z=new V.b8(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.D()
if(w<v)z=new V.b8(z.a|$.$get$bP().a)
else{u=z.a
z=w>=v+this.d?new V.b8(u|$.$get$bQ().a):new V.b8(u|$.$get$dD().a)}u=z.a
t=$.$get$b9().a
if(!((u&t)===t)){t=$.$get$ba().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bP().a
if(!((u&y)===y)){y=$.$get$bQ().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.P(x,v)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fm))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
p:{
dR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fm(a,b,c,d)}}},
dS:{"^":"b;a,b,c,d,e,f",
j7:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.a
if(typeof z!=="number")return z.n()
y=z+this.d
x=this.b
if(typeof x!=="number")return x.n()
w=x+this.e
v=this.c
if(typeof v!=="number")return v.n()
u=v+this.f
t=a1.a
if(typeof t!=="number")return t.D()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.h(r)
if(s>r)return
s/=r
q=$.$get$b9()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.h(r)
if(s<r)return
s/=r
q=$.$get$ba()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.D()
if(r<x){m=x-r
l=a1.e
if(typeof l!=="number")return H.h(l)
if(m>l)return
m/=l
k=$.$get$bP()
j=x
o=!1
i=-1}else if(r>w){m=w-r
l=a1.e
if(typeof l!=="number")return H.h(l)
if(m<l)return
m/=l
k=$.$get$bQ()
j=w
o=!1
i=1}else{m=-1
i=null
j=null
k=null}l=a1.c
if(typeof l!=="number")return l.D()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.h(g)
if(h>g)return
h/=g
f=$.$get$bR()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.h(g)
if(h<g)return
h/=g
f=$.$get$bS()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.I(a1.d,a1.e,a1.f)
return new V.cX(new V.u(t,r,l),z.A(0,Math.sqrt(z.F(z))).N(0),0,$.$get$dB())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.k()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.k()
a=l+z*s
if(a<v||a>u)return
return new V.cX(new V.u(p,b,a),new V.I(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.k()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.k()
a=l+z*m
if(a<v||a>u)return
return new V.cX(new V.u(a0,j,a),new V.I(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.k()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.k()
b=r+z*h
if(b<x||b>w)return
return new V.cX(new V.u(a0,b,e),new V.I(0,0,d),h,f)}},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dS))return!1
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
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"},
p:{
fn:function(a,b,c,d,e,f){return new V.dS(a,b,c,d,e,f)}}},
a3:{"^":"b;a,b",
iL:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,23],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a3(z*b,y*b)},
A:function(a,b){var z,y
if($.n.$2(b,0))return new V.a3(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a3(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
I:{"^":"b;a,b,c",
iL:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,23],
F:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.h(u)
return z*y+x*w+v*u},
bq:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.h(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.h(w)
v=a.a
if(typeof v!=="number")return H.h(v)
u=this.a
if(typeof u!=="number")return u.k()
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.h(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.h(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.h(u)
return new V.I(z+y,x+w,v+u)},
N:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.N()
y=this.b
if(typeof y!=="number")return y.N()
x=this.c
if(typeof x!=="number")return x.N()
return new V.I(-z,-y,-x)},
A:function(a,b){var z,y,x
if($.n.$2(b,0))return new V.I(0,0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
x=this.c
if(typeof x!=="number")return x.A()
return new V.I(z/b,y/b,x/b)},
ez:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
p:{
c2:function(a,b,c){return new V.I(a,b,c)}}}}],["","",,U,{"^":"",ie:{"^":"du;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cg:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.dh(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.C(a)},
sd7:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.H("warp",z,b,this,[P.ad])
z.b=!0
this.I(z)}},
scY:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cg(z)}z=new D.H("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.I(z)}},
scZ:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cg(z)}z=new D.H("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.I(z)}},
sY:function(a,b){var z,y
b=this.cg(b==null?0:b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.z])
z.b=!0
this.I(z)}},
saE:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.z])
z.b=!0
this.I(z)}},
saQ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.z])
z.b=!0
this.I(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
p:{
cj:function(){var z=new U.ie()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ey:{"^":"ab;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
av:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ey))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
p:{
b5:function(a){var z=new U.ey()
z.a=a
return z}}},eM:{"^":"at;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
I:[function(a){var z
H.f(a,"$isw")
z=this.e
if(!(z==null))z.C(a)},function(){return this.I(null)},"ay","$1","$0","gax",0,2,1],
jx:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ab
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.o(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cw(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gfk",8,0,24],
k9:[function(a,b){var z,y,x,w,v
z=U.ab
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gax(),w=0;w<b.length;b.length===y||(0,H.E)(b),++w){v=b[w]
if(v!=null)v.gu().W(0,x)}z=new D.cx(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gho",8,0,24],
av:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aC(z,z.length,0,[H.x(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.av(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.by():x
z=this.e
if(!(z==null))z.aG(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.Z(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ab]},
$asat:function(){return[U.ab]},
$isab:1,
p:{
cW:function(a){var z=new U.eM()
z.bF(U.ab)
z.bE(z.gfk(),z.gho())
z.aN(0,a)
z.e=null
z.f=V.by()
z.r=0
return z}}},eR:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
I:[function(a){var z
H.f(a,"$isw")
z=this.b
if(!(z==null))z.C(a)},function(){return this.I(null)},"ay","$1","$0","gax",0,2,1],
av:function(a,b,c){var z,y,x
z=this.d
y=b.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.d
z=this.a
z=z==null?null:z.av(0,b,c)
x=z==null?null:z.br(0)
this.c=x==null?V.by():x
z=this.b
if(!(z==null))z.aG(0)}return this.c},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eR))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isab:1},ab:{"^":"du;"},fo:{"^":"ab;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.C(a)},
seT:function(a){var z,y
a=V.dh(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.z])
z.b=!0
this.I(z)}},
seH:function(a,b){var z,y
b=V.dh(b,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.z])
z.b=!0
this.I(z)}},
seN:function(a){var z,y
a=V.dh(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.z])
z.b=!0
this.I(z)}},
av:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seT(this.a+this.d*b.y)
this.seH(0,this.b+this.e*b.y)
this.seN(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aN(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.f9(this.b)).k(0,V.f8(this.a))
z=this.y
if(!(z==null))z.aG(0)}return this.x},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.fo))return!1
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
i:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}},kQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
I:[function(a){var z
H.f(a,"$isw")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.I(null)},"ay","$1","$0","gax",0,2,1],
a9:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.gfX())
z=this.a.c
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.gfY())
z=this.a.c
y=z.c
if(y==null){y=D.K()
z.c=y
z=y}else z=y
z.h(0,this.gfZ())
z=this.a.d
y=z.f
if(y==null){y=D.K()
z.f=y
z=y}else z=y
z.h(0,this.gfU())
z=this.a.d
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.gfV())
z=this.a.e
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.e
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.ghO())
z=this.a.e
y=z.c
if(y==null){y=D.K()
z.c=y
z=y}else z=y
z.h(0,this.ghN())
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a3(z,y)},
jG:[function(a){a=H.k(H.f(a,"$isw"),"$isbY")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfX",4,0,0],
jH:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$isbY")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a3(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.h(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.az(new V.a3(y.a,y.b).k(0,2).A(0,z.gaF()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.h(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.h(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.az(new V.a3(x.a,x.b).k(0,2).A(0,z.gaF()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.h(u)
t=this.cy
if(typeof t!=="number")return H.h(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.h(v)
x=this.db
if(typeof x!=="number")return H.h(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.az(new V.a3(y.a,y.b).k(0,2).A(0,z.gaF()))}this.ay()},"$1","gfY",4,0,0],
jI:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.h(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.h(z)
x.sK(-y*10*z)
this.ay()}},"$1","gfZ",4,0,0],
jE:[function(a){if(H.k(H.f(a,"$isw"),"$isf2").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfU",4,0,0],
jF:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$isbY")
if(!J.Z(this.d,a.x.b))return
z=a.c
y=a.d
x=y.v(0,a.y)
w=this.az(new V.a3(x.a,x.b).k(0,2).A(0,z.gaF()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.h(u)
t=this.cy
if(typeof t!=="number")return H.h(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.h(v)
x=this.db
if(typeof x!=="number")return H.h(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.az(new V.a3(y.a,y.b).k(0,2).A(0,z.gaF()))
this.ay()},"$1","gfV",4,0,0],
ki:[function(a){H.f(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghP",4,0,0],
kh:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$isfB")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a3(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.h(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.az(new V.a3(y.a,y.b).k(0,2).A(0,z.gaF()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.h(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.h(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.az(new V.a3(x.a,x.b).k(0,2).A(0,z.gaF()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.h(u)
t=this.cy
if(typeof t!=="number")return H.h(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.h(v)
x=this.db
if(typeof x!=="number")return H.h(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.v(0,a.z)
this.dx=this.az(new V.a3(y.a,y.b).k(0,2).A(0,z.gaF()))}this.ay()},"$1","ghO",4,0,0],
kg:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.h(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.h(z)
x.sK(-y*10*z)
this.ay()}},"$1","ghN",4,0,0],
av:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
this.fr=V.f8(this.b.d).k(0,V.f9(this.c.d))}return this.fr},
$isab:1},kR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dx
if(z==null){z=D.K()
this.dx=z}return z},
I:[function(a){var z
H.f(a,"$isw")
z=this.dx
if(!(z==null))z.C(a)},function(){return this.I(null)},"ay","$1","$0","gax",0,2,1],
sK:function(a){this.r.sK(a.a)
this.x.sK(a.b)
this.y.sK(a.c)},
gY:function(a){return new V.u(this.r.d,this.x.d,this.y.d)},
sY:function(a,b){H.f(b,"$isu")
this.r.sY(0,b.a)
this.x.sY(0,b.b)
this.y.sY(0,b.c)},
jY:[function(a){this.I(H.f(a,"$isw"))},"$1","ghe",4,0,0],
cA:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.n()
e+=d}else if(b.r){if(typeof e!=="number")return e.v()
e-=d}else{if(typeof e!=="number")return e.ca()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
av:function(a,b,c){var z,y,x,w,v,u,t
z=this.cy
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.cy=y
x=this.gY(this)
w=b.y
if(w>0.1)w=0.1
z=this.ch
if(typeof z!=="number")return z.k()
v=z*w
z=this.cx
if(typeof z!=="number")return z.k()
u=z*w
t=new V.I(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)t=z.au(t)
t=new V.I(this.cA(this.a,this.b,v,u,t.a),this.cA(this.c,this.d,v,u,t.b),this.cA(this.e,this.f,v,u,t.c))
z=this.z
this.sK(z!=null?z.au(t):t)
this.r.ae(0,w)
this.x.ae(0,w)
this.y.ae(0,w)
if(this.dy!=null){z=this.gY(this)
this.sY(0,this.dy.$2(x,z))}this.db=V.cB(this.r.d,-this.x.d,this.y.d)}return this.db},
$isab:1}}],["","",,M,{"^":"",ix:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
bj:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.C(a)},function(){return this.bj(null)},"jy","$1","$0","gaZ",0,2,1],
jQ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ak
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaZ(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bu()
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.o(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cw(a,b,this,[z])
z.b=!0
this.bj(z)},"$2","gh6",8,0,8],
jR:[function(a,b){var z,y,x,w,v,u
z=E.ak
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaZ(),w=0;w<b.length;b.length===y||(0,H.E)(b),++w){v=b[w]
if(v!=null){if(v.ga7()==null){u=new D.bu()
u.d=0
v.sa7(u)}v.ga7().W(0,x)}}z=new D.cx(a,b,this,[z])
z.b=!0
this.bj(z)},"$2","gh7",8,0,8],
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
bf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.k9(a,this)
z.b=!0
y=this.e
if(!(y==null))y.C(z)
a.eK(this.c)
y=this.b
y.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
x=a.a
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
if(typeof w!=="number")return H.h(w)
t=C.i.at(u.a*w)
if(typeof v!=="number")return H.h(v)
s=C.i.at(u.b*v)
r=C.i.at(u.c*w)
a.c=r
u=C.i.at(u.d*v)
a.d=u
x.viewport(t,s,r,u)
a.a.clearDepth(y.c)
x=a.a
y=y.a
x.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)
y=this.a
x=a.c
u=a.d
r=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aN(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.eJ(m)
x=$.fe
if(x==null){x=V.f7(new V.u(0,0,0),new V.I(0,1,0),new V.I(0,0,-1))
$.fe=x
l=x}else l=x
x=y.b
if(x!=null){k=x.av(0,a,y)
if(k!=null)l=k.k(0,l)}a.db.eJ(l)
for(y=this.d.a,y=new J.aC(y,y.length,0,[H.x(y,0)]);y.H();)y.d.ae(0,a)
for(y=this.d.a,y=new J.aC(y,y.length,0,[H.x(y,0)]);y.H();)y.d.bf(a)
this.a.toString
a.cy.d0()
a.db.d0()
this.b.toString
a.eI()},
$isom:1}}],["","",,A,{"^":"",ep:{"^":"b;a,b,c"},i_:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iA:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
iy:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j6:{"^":"fp;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0ar,0bR,0e3,0bS,0bT,0e4,0e5,0bU,0bV,0e6,0e7,0bW,0bX,0e8,0e9,0bY,0ea,0eb,0bZ,0ec,0ed,0c_,0c0,0c1,0ee,0ef,0c2,0c3,0eg,0eh,0c4,0ei,0cO,0ej,0cP,0ek,0cQ,0el,0cR,0em,0cS,0en,0cT,a,b,0c,0d,0e,0f,0r,0x,0y",
f6:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.av("")
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
a2.hZ(z)
a2.i5(z)
a2.i_(z)
a2.ie(z)
a2.ig(z)
a2.i7(z)
a2.ik(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.av("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.i2(z)
x.hY(z)
x.i0(z)
x.i3(z)
x.ib(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.i9(z)
x.ia(z)}x.i6(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
q=x.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.a([],[P.j])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.i1(z)
x.i8(z)
x.ic(z)
x.ih(z)
x.ii(z)
x.ij(z)
x.i4(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.a([],[P.j])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.B(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dC(s,35633)
this.f=this.dC(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.hC(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.hI()
this.hK()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaZ")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaZ")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaZ")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaZ")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$ise2")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaZ")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaZ")
this.r1=H.a([],[A.aZ])
y=a2.aB
if(y>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$isS")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaZ"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isax")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isS")
break
case C.f:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isay")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isS")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isax")
this.aB=H.k(this.y.q(0,"nullAmbientTxt"),"$isS")
break
case C.f:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isay")
this.aB=H.k(this.y.q(0,"nullAmbientTxt"),"$isS")
break}}y=a2.c
if(y!==C.c){this.ar=H.k(this.y.q(0,"diffuseClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.bR=H.k(this.y.q(0,"diffuseTxt"),"$isax")
this.bS=H.k(this.y.q(0,"nullDiffuseTxt"),"$isS")
break
case C.f:this.e3=H.k(this.y.q(0,"diffuseTxt"),"$isay")
this.bS=H.k(this.y.q(0,"nullDiffuseTxt"),"$isS")
break}}y=a2.d
if(y!==C.c){this.bT=H.k(this.y.q(0,"invDiffuseClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.e4=H.k(this.y.q(0,"invDiffuseTxt"),"$isax")
this.bU=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break
case C.f:this.e5=H.k(this.y.q(0,"invDiffuseTxt"),"$isay")
this.bU=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break}}y=a2.e
if(y!==C.c){this.bX=H.k(this.y.q(0,"shininess"),"$isa0")
this.bV=H.k(this.y.q(0,"specularClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.e6=H.k(this.y.q(0,"specularTxt"),"$isax")
this.bW=H.k(this.y.q(0,"nullSpecularTxt"),"$isS")
break
case C.f:this.e7=H.k(this.y.q(0,"specularTxt"),"$isay")
this.bW=H.k(this.y.q(0,"nullSpecularTxt"),"$isS")
break}}switch(a2.f){case C.c:break
case C.h:break
case C.e:this.e8=H.k(this.y.q(0,"bumpTxt"),"$isax")
this.bY=H.k(this.y.q(0,"nullBumpTxt"),"$isS")
break
case C.f:this.e9=H.k(this.y.q(0,"bumpTxt"),"$isay")
this.bY=H.k(this.y.q(0,"nullBumpTxt"),"$isS")
break}if(a2.dy){this.ea=H.k(this.y.q(0,"envSampler"),"$isay")
this.eb=H.k(this.y.q(0,"nullEnvTxt"),"$isS")
y=a2.r
if(y!==C.c){this.bZ=H.k(this.y.q(0,"reflectClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.ec=H.k(this.y.q(0,"reflectTxt"),"$isax")
this.c_=H.k(this.y.q(0,"nullReflectTxt"),"$isS")
break
case C.f:this.ed=H.k(this.y.q(0,"reflectTxt"),"$isay")
this.c_=H.k(this.y.q(0,"nullReflectTxt"),"$isS")
break}}y=a2.x
if(y!==C.c){this.c0=H.k(this.y.q(0,"refraction"),"$isa0")
this.c1=H.k(this.y.q(0,"refractClr"),"$isQ")
switch(y){case C.c:break
case C.h:break
case C.e:this.ee=H.k(this.y.q(0,"refractTxt"),"$isax")
this.c2=H.k(this.y.q(0,"nullRefractTxt"),"$isS")
break
case C.f:this.ef=H.k(this.y.q(0,"refractTxt"),"$isay")
this.c2=H.k(this.y.q(0,"nullRefractTxt"),"$isS")
break}}}y=a2.y
if(y!==C.c){this.c3=H.k(this.y.q(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.h:break
case C.e:this.eg=H.k(this.y.q(0,"alphaTxt"),"$isax")
this.c4=H.k(this.y.q(0,"nullAlphaTxt"),"$isS")
break
case C.f:this.eh=H.k(this.y.q(0,"alphaTxt"),"$isay")
this.c4=H.k(this.y.q(0,"nullAlphaTxt"),"$isS")
break}}this.cO=H.a([],[A.fO])
this.cP=H.a([],[A.fP])
this.cQ=H.a([],[A.fQ])
this.cR=H.a([],[A.fR])
this.cS=H.a([],[A.fS])
this.cT=H.a([],[A.fT])
if(a2.k2){y=a2.z
if(y>0){this.ei=H.f(this.y.q(0,"dirLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.cO;(x&&C.a).h(x,new A.fO(l,k,j))}}y=a2.Q
if(y>0){this.ej=H.f(this.y.q(0,"pntLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa0")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa0")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa0")
x=this.cP;(x&&C.a).h(x,new A.fP(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ek=H.f(this.y.q(0,"spotLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa0")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa0")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa0")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa0")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa0")
x=this.cQ;(x&&C.a).h(x,new A.fQ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.el=H.f(this.y.q(0,"txtDirLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isQ")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isS")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isax")
x=this.cR;(x&&C.a).h(x,new A.fR(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.em=H.f(this.y.q(0,"txtPntLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$ise2")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isS")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa0")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa0")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa0")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isay")
x=this.cS;(x&&C.a).h(x,new A.fS(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.en=H.f(this.y.q(0,"txtSpotLightCount"),"$isS")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isQ")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isS")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isQ")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa0")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa0")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa0")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa0")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa0")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isax")
x=this.cT;(x&&C.a).h(x,new A.fT(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ap:function(a,b,c){if(c==null||!c.gac(c))b.a.uniform1i(b.d,1)
else{a.eZ(c)
b.a.uniform1i(b.d,0)}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
j5:function(a,b){var z,y
z=a.ar
y=new A.j6(b,z)
y.fa(b,z)
y.f6(a,b)
return y}}},j9:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,ar,bR",
hZ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
i5:function(a){var z
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
i_:function(a){var z
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
ie:function(a){var z,y
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
ig:function(a){var z,y
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
i7:function(a){var z
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
ik:function(a){var z
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
aK:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aX(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i2:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aK(a,z,"emission")
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
hY:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aK(a,z,"ambient")
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
i0:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aK(a,z,"diffuse")
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
i3:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aK(a,z,"invDiffuse")
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
ib:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aK(a,z,"specular")
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
i6:function(a){var z,y
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
i9:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aK(a,z,"reflect")
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
ia:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aK(a,z,"refract")
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
i1:function(a){var z,y
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
i8:function(a){var z,y
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
ic:function(a){var z,y
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
ih:function(a){var z,y,x
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
ii:function(a){var z,y,x
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
ij:function(a){var z,y,x
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
i4:function(a){var z
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
i:function(a){return this.ar}},fO:{"^":"b;a,b,c"},fR:{"^":"b;a,b,c,d,e,f,r,x"},fP:{"^":"b;a,b,c,d,e,f,r"},fS:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fQ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fT:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},fp:{"^":"dm;",
fa:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dC:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.hC(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
hI:function(){var z,y,x,w,v,u
z=H.a([],[A.ep])
y=this.a
x=H.B(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.h(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ep(y,v.name,u))}this.x=new A.i_(z)},
hK:function(){var z,y,x,w,v,u
z=H.a([],[A.aj])
y=this.a
x=H.B(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.h(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.iv(v.type,v.size,v.name,u))}this.y=new A.kB(z)},
b2:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.S(z,y,b,c)
else return A.e1(z,y,b,a,c)},
fL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ax(z,y,b,c)
else return A.e1(z,y,b,a,c)},
fM:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ay(z,y,b,c)
else return A.e1(z,y,b,a,c)},
bL:function(a,b){return new P.h5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iv:function(a,b,c,d){switch(a){case 5120:return this.b2(b,c,d)
case 5121:return this.b2(b,c,d)
case 5122:return this.b2(b,c,d)
case 5123:return this.b2(b,c,d)
case 5124:return this.b2(b,c,d)
case 5125:return this.b2(b,c,d)
case 5126:return new A.a0(this.a,this.r,c,d)
case 35664:return new A.kw(this.a,this.r,c,d)
case 35665:return new A.Q(this.a,this.r,c,d)
case 35666:return new A.kz(this.a,this.r,c,d)
case 35667:return new A.kx(this.a,this.r,c,d)
case 35668:return new A.ky(this.a,this.r,c,d)
case 35669:return new A.kA(this.a,this.r,c,d)
case 35674:return new A.kD(this.a,this.r,c,d)
case 35675:return new A.e2(this.a,this.r,c,d)
case 35676:return new A.aZ(this.a,this.r,c,d)
case 35678:return this.fL(b,c,d)
case 35680:return this.fM(b,c,d)
case 35670:throw H.c(this.bL("BOOL",c))
case 35671:throw H.c(this.bL("BOOL_VEC2",c))
case 35672:throw H.c(this.bL("BOOL_VEC3",c))
case 35673:throw H.c(this.bL("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cR:{"^":"b;a,b",
i:function(a){return this.b}},aj:{"^":"b;"},kB:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.T()},
iF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].i(0)+a
return x},
T:function(){return this.iF("\n")}},S:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},kx:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},ky:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},kA:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},kv:{"^":"aj;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
e1:function(a,b,c,d,e){var z=new A.kv(a,b,c,e)
z.f=d
z.e=P.iZ(d,0,!1,P.m)
return z}}},a0:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},kw:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},Q:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},kz:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},kD:{"^":"aj;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},e2:{"^":"aj;a,b,c,d",
aw:function(a){var z=new Float32Array(H.bE(H.p(a,"$isd",[P.z],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aZ:{"^":"aj;a,b,c,d",
aw:function(a){var z=new Float32Array(H.bE(H.p(a,"$isd",[P.z],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ax:{"^":"aj;a,b,c,d",
eZ:function(a){var z,y,x
z=a==null||!a.gac(a)
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.gab(a))},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ay:{"^":"aj;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",aD:{"^":"b;0a,0b,0c,0d,0e",
giz:function(){return this.a==null||this.b==null||this.c==null},
fF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.I(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.ez())return
return v.A(0,Math.sqrt(v.F(v)))},
fI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.v(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.F(z)))
z=w.v(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.bq(z.A(0,Math.sqrt(z.F(z))))
return z.A(0,Math.sqrt(z.F(z)))},
cK:function(){if(this.d!=null)return!0
var z=this.fF()
if(z==null){z=this.fI()
if(z==null)return!1}this.d=z
this.a.a.a8()
return!0},
fE:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.I(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.ez())return
return v.A(0,Math.sqrt(v.F(v)))},
fH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.h(y)
n=z-y
if($.n.$2(n,0)){z=r.v(0,u)
z=new V.I(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.v()
if(typeof p!=="number")return H.h(p)
if(z-p<0)m=m.N(0)}else{y=q.b
if(typeof y!=="number")return H.h(y)
l=(z-y)/n
y=r.v(0,u).k(0,l).n(0,u).v(0,x)
y=new V.I(y.a,y.b,y.c)
m=y.A(0,Math.sqrt(y.F(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.h(p)
q=q.a
if(typeof q!=="number")return H.h(q)
if((o-p)*l+p-q<0)m=m.N(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.F(z)))
z=k.bq(m)
z=z.A(0,Math.sqrt(z.F(z))).bq(k)
m=z.A(0,Math.sqrt(z.F(z)))}return m},
cJ:function(){if(this.e!=null)return!0
var z=this.fE()
if(z==null){z=this.fH()
if(z==null)return!1}this.e=z
this.a.a.a8()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
G:function(a){var z,y
if(this.giz())return a+"disposed"
z=a+C.b.aU(J.ar(this.a.e),0)+", "+C.b.aU(J.ar(this.b.e),0)+", "+C.b.aU(J.ar(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
T:function(){return this.G("")},
p:{
iB:function(a,b,c){var z,y,x
z=new F.aD()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a8()
return z}}},eW:{"^":"b;"},ff:{"^":"b;"},fl:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
gu:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
bo:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.p(a,"$isd",[F.c3],"$asd")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.a(y,[P.z])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.cC(v)
for(t=0;t<z;++t){if(t>=a.length)return H.e(a,t)
s=a[t].eA(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.l(x,r,s[q]);++r}}w+=u.gbi(u)}p=$.$get$a4()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.e(a,0)
y=a[0].f
y=V.fn(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.e(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.D()
if(typeof l!=="number")return H.h(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.D()
if(typeof o!=="number")return H.h(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.D()
if(typeof y!=="number")return H.h(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.dS(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aN(this.f,x)
this.a8()
return r},
bn:function(a){var z,y,x,w,v,u,t
z=P.m
H.p(a,"$isd",[z],"$asd")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
if(0>=a.length)return H.e(a,0)
v=a[0]
for(u=2,t=0;u<y;++u,t+=3){C.a.l(w,t,v)
z=u-1
if(z>=a.length)return H.e(a,z)
C.a.l(w,t+1,a[z])
if(u>=a.length)return H.e(a,u)
C.a.l(w,t+2,a[u])}C.a.aN(this.y,w)
this.a8()}},
ip:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.m
H.p(a,"$isd",[z],"$asd")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
for(v=!1,u=2,t=0;u<y;++u,t+=3){z=a.length
x=u-2
s=t+1
r=t+2
q=u-1
if(v){if(x>=z)return H.e(a,x)
C.a.l(w,t,a[x])
if(q>=a.length)return H.e(a,q)
C.a.l(w,s,a[q])
if(u>=a.length)return H.e(a,u)
C.a.l(w,r,a[u])
v=!1}else{if(q>=z)return H.e(a,q)
C.a.l(w,t,a[q])
if(x>=a.length)return H.e(a,x)
C.a.l(w,s,a[x])
if(u>=a.length)return H.e(a,u)
C.a.l(w,r,a[u])
v=!0}}C.a.aN(this.y,w)
this.a8()}},
a5:function(a){var z=this.Q
if(!(z==null))z.C(a)},
a8:function(){return this.a5(null)},
aP:function(){return!1},
b9:function(){return!1},
bO:function(){return!1},
dY:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.a
if(!J.Z(b,z))throw H.c(P.v("Shape was reduced to "+H.l(z)+" so can not build for "+H.l(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.e=H.a(x,[Z.cQ])
for(w=0,v=0;v<this.b;++v){u=z.cC(v)
t=u.gbi(u)
x=this.e;(x&&C.a).l(x,v,new Z.cQ(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.dr(Z.h2(x,34962,H.p(this.f,"$isd",[P.z],"$asd")),this.e,z)
z=H.a([],[Z.bv])
s.b=z
r=this.r
if(r.length!==0){q=Z.cG(x,34963,H.p(r,"$isd",[P.m],"$asd"))
C.a.h(z,new Z.bv(0,this.r.length,q))}r=this.x
if(r.length!==0){q=Z.cG(x,34963,H.p(r,"$isd",[P.m],"$asd"))
C.a.h(z,new Z.bv(1,this.x.length,q))}r=this.y
if(r.length!==0){q=Z.cG(x,34963,H.p(r,"$isd",[P.m],"$asd"))
C.a.h(z,new Z.bv(4,this.y.length,q))}return s},
$isdU:1},fq:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
aP:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aP()||!1
if(!this.a.aP())y=!1
z=this.e
if(!(z==null))z.aG(0)
return y},
b9:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b9()||!1
if(!this.a.b9())y=!1
z=this.e
if(!(z==null))z.aG(0)
return y},
bO:function(){var z=this.e
if(!(z==null))++z.d
this.a.bO()
z=this.e
if(!(z==null))z.aG(0)
return!0},
dY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.ge0(b)
x=b.gbi(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.z
t=H.a(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.a(v,[Z.cQ])
for(r=0,q=0;q<y;++q){p=b.cC(q)
o=p.gbi(p)
C.a.l(s,q,new Z.cQ(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.e(v,n)
m=v[n].eA(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.dr(Z.h2(v,34962,H.p(t,"$isd",[u],"$asd")),s,b)
j.b=H.a([],[Z.bv])
this.b.b
if(this.c.b.length!==0){u=P.m
i=H.a([],[u])
for(q=0;h=this.c.b,q<h.length;++q){h=h[q].a
h.a.a.b8()
C.a.h(i,h.e)
h=this.c.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.b8()
C.a.h(i,h.e)}g=Z.cG(v,34963,H.p(i,"$isd",[u],"$asd"))
C.a.h(j.b,new Z.bv(1,i.length,g))}if(this.d.b.length!==0){u=P.m
i=H.a([],[u])
for(q=0;h=this.d.b,q<h.length;++q){h=h[q].a
h.a.a.b8()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.b8()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].c
h.a.a.b8()
C.a.h(i,h.e)}g=Z.cG(v,34963,H.p(i,"$isd",[u],"$asd"))
C.a.h(j.b,new Z.bv(4,i.length,g))}return j},
i:function(a){var z=H.a([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.B(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.C(a)},
a8:function(){return this.a5(null)},
$isdU:1},dU:{"^":"du;"},jW:{"^":"b;a,0b",
il:function(a){var z,y,x,w,v
H.p(a,"$isd",[F.c3],"$asd")
z=H.a([],[F.aD])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.iB(y,w,v))}return z},
gm:function(a){return this.b.length},
aP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cK())x=!1
return x},
b9:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cJ())x=!1
return x},
i:function(a){return this.T()},
G:function(a){var z,y,x,w
z=H.a([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.B(z,"\n")},
T:function(){return this.G("")}},jX:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.T()},
G:function(a){var z,y,x,w
z=H.a([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.B(z,"\n")},
T:function(){return this.G("")}},jY:{"^":"b;a,0b",
gm:function(a){return 0},
i:function(a){return this.T()},
G:function(a){var z,y,x
z=H.a([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.e(y,x)
C.a.h(z,y[x].G(a))}return C.a.B(z,"\n")},
T:function(){return this.G("")}},c3:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
eA:function(a){var z,y
z=J.M(a)
if(z.t(a,$.$get$a4())){z=this.f
y=[P.z]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ah())){z=this.r
y=[P.z]
if(z==null)return H.a([0,1,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$b0())){z=this.x
y=[P.z]
if(z==null)return H.a([0,0,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$a7())){z=this.y
y=[P.z]
if(z==null)return H.a([0,0],y)
else return H.a([z.a,z.b],y)}else if(z.t(a,$.$get$b1())){z=this.z
y=[P.z]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$c4())){z=this.Q
y=[P.z]
if(z==null)return H.a([1,1,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$c5())){z=this.Q
y=[P.z]
if(z==null)return H.a([1,1,1,1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bC()))return H.a([this.ch],[P.z])
else if(z.t(a,$.$get$b_())){z=this.cx
y=[P.z]
if(z==null)return H.a([-1,-1,-1,-1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else return H.a([],[P.z])},
cK:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.O(0,new F.l6(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a8()
z=this.a.e
if(!(z==null))z.aG(0)}return!0},
cJ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.O(0,new F.l5(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a8()
z=this.a.e
if(!(z==null))z.aG(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
G:function(a){var z,y,x
z=H.a([],[P.j])
C.a.h(z,C.b.aU(J.ar(this.e),0))
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
C.a.h(z,V.F(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
T:function(){return this.G("")},
p:{
bB:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.c3()
y=new F.l4(z)
y.b=H.a([],[F.ff])
z.b=y
y=new F.l3(z)
x=[F.eW]
y.b=H.a([],x)
y.c=H.a([],x)
z.c=y
y=new F.l0(z)
x=[F.aD]
y.b=H.a([],x)
y.c=H.a([],x)
y.d=H.a([],x)
z.d=y
z.e=0
y=h.a
z.f=(y&$.$get$a4().a)!==0?d:null
z.r=(y&$.$get$ah().a)!==0?e:null
z.x=(y&$.$get$b0().a)!==0?b:null
z.y=(y&$.$get$a7().a)!==0?f:null
z.z=(y&$.$get$b1().a)!==0?g:null
z.Q=(y&$.$get$h_().a)!==0?c:null
z.ch=(y&$.$get$bC().a)!==0?i:0
z.cx=(y&$.$get$b_().a)!==0?a:null
return z}}},l6:{"^":"q:5;a",
$1:function(a){var z,y
H.f(a,"$isaD")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},l5:{"^":"q:5;a",
$1:function(a){var z,y
H.f(a,"$isaD")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},l_:{"^":"b;a,0b,0c",
b8:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a8()
return!0},
io:function(a,b,c,d,e,f,g,h,i){var z=F.bB(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bM:function(a,b,c,d,e,f){return this.io(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aP:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cK()
return!0},
b9:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cJ()
return!0},
bO:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.k()
t=v.b
if(typeof t!=="number")return t.k()
s=v.c
if(typeof s!=="number")return s.k()
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Z(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.T()},
G:function(a){var z,y,x,w
this.b8()
z=H.a([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.B(z,"\n")},
T:function(){return this.G("")}},l0:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
O:function(a,b){H.o(b,{func:1,ret:-1,args:[F.aD]})
C.a.O(this.b,b)
C.a.O(this.c,new F.l1(this,b))
C.a.O(this.d,new F.l2(this,b))},
i:function(a){return this.T()},
G:function(a){var z,y,x,w
z=H.a([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.B(z,"\n")},
T:function(){return this.G("")}},l1:{"^":"q:5;a,b",
$1:function(a){H.f(a,"$isaD")
if(!J.Z(a.a,this.a))this.b.$1(a)}},l2:{"^":"q:5;a,b",
$1:function(a){var z
H.f(a,"$isaD")
z=this.a
if(!J.Z(a.a,z)&&!J.Z(a.b,z))this.b.$1(a)}},l3:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.T()},
G:function(a){var z,y,x,w
z=H.a([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.B(z,"\n")},
T:function(){return this.G("")}},l4:{"^":"b;a,0b",
gm:function(a){return 0},
i:function(a){return this.T()},
G:function(a){var z,y,x
z=H.a([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.e(y,x)
C.a.h(z,y[x].G(a))}return C.a.B(z,"\n")},
T:function(){return this.G("")}}}],["","",,O,{"^":"",f4:{"^":"dX;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
a0:[function(a){var z
H.f(a,"$isw")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.a0(null)},"fl","$1","$0","gbG",0,2,1],
hB:[function(a){H.f(a,"$isw")
this.a=null
this.a0(a)},function(){return this.hB(null)},"kf","$1","$0","ghA",0,2,1],
jK:[function(a,b){var z=V.aM
z=new D.cw(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a0(z)},"$2","gh0",8,0,19],
jL:[function(a,b){var z=V.aM
z=new D.cx(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a0(z)},"$2","gh1",8,0,19],
dz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a2(z.e.length+3,4)*4
x=C.d.a2(z.f.length+3,4)*4
w=C.d.a2(z.r.length+3,4)*4
v=C.d.a2(z.x.length+3,4)*4
u=C.d.a2(z.y.length+3,4)*4
t=C.d.a2(z.z.length+3,4)*4
s=C.d.a2(this.e.a.length+3,4)*4
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
a6=$.$get$a4()
if(c){z=$.$get$ah()
a6=new Z.ag(a6.a|z.a)}if(b){z=$.$get$b0()
a6=new Z.ag(a6.a|z.a)}if(a){z=$.$get$a7()
a6=new Z.ag(a6.a|z.a)}if(a0){z=$.$get$b1()
a6=new Z.ag(a6.a|z.a)}if(a2){z=$.$get$b_()
a6=new Z.ag(a6.a|z.a)}return new A.j9(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.p(a,"$isd",[T.dY],"$asd")
if(b!=null)if(!C.a.aq(a,b)){b.sab(0,a.length)
C.a.h(a,b)}},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aC(z,z.length,0,[H.x(z,0)]);z.H();){y=z.d
x=new V.I(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.au(x)}}},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dz()
y=a.fr.j(0,z.ar)
if(y==null){y=A.j5(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bQ(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bR
z=b.e
if(!(z instanceof Z.dr)){b.e=null
z=null}if(z==null||!J.Z(z.d,v)){z=w.r1
if(z)b.d.aP()
u=w.r2
if(u)b.d.b9()
t=w.ry
if(t)b.d.bO()
s=b.d.dY(new Z.l7(a.a),v)
s.bd($.$get$a4()).e=this.a.Q.c
if(z)s.bd($.$get$ah()).e=this.a.cx.c
if(u)s.bd($.$get$b0()).e=this.a.ch.c
if(w.rx)s.bd($.$get$a7()).e=this.a.cy.c
if(t)s.bd($.$get$b1()).e=this.a.db.c
if(w.x1)s.bd($.$get$b_()).e=this.a.dx.c
b.e=s}z=T.dY
r=H.a([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.iA()
if(w.fx){u=this.a
t=a.dx
t=t.ga_(t)
u=u.dy
u.toString
u.aw(t.ao(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga_(t)
q=a.dx
q=t.k(0,q.ga_(q))
a.cx=q
t=q}u=u.fr
u.toString
u.aw(t.ao(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gj6()
q=a.dx
q=t.k(0,q.ga_(q))
a.ch=q
t=q}u=u.fy
u.toString
u.aw(t.ao(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.aw(t.ao(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.aw(t.ao(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.aw(C.u.ao(t,!0))}if(w.aB>0){p=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,p)
for(u=[P.z],o=0;o<p;++o){t=this.a
q=this.e.a
if(o>=q.length)return H.e(q,o)
q=q[o]
t.toString
H.f(q,"$isaM")
t=t.r1
if(o>=t.length)return H.e(t,o)
t=t[o]
n=new Float32Array(H.bE(H.p(q.ao(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,n)}}switch(w.a){case C.c:break
case C.h:u=this.a
t=this.f.f
u=u.r2
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.e:this.V(r,this.f.d)
u=this.a
t=this.f.d
u.ap(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.f:this.V(r,this.f.e)
u=this.a
t=this.f.e
u.ak(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.h:u=this.a
t=this.r.f
u=u.x2
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.e:this.V(r,this.r.d)
u=this.a
t=this.r.d
u.ap(u.y1,u.aB,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.f:this.V(r,this.r.e)
u=this.a
t=this.r.e
u.ak(u.y2,u.aB,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.c){case C.c:break
case C.h:u=this.a
t=this.x.f
u=u.ar
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.e:this.V(r,this.x.d)
u=this.a
t=this.x.d
u.ap(u.bR,u.bS,t)
t=this.a
u=this.x.f
t=t.ar
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.f:this.V(r,this.x.e)
u=this.a
t=this.x.e
u.ak(u.e3,u.bS,t)
t=this.a
u=this.x.f
t=t.ar
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.d){case C.c:break
case C.h:u=this.a
t=this.y.f
u=u.bT
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.e:this.V(r,this.y.d)
u=this.a
t=this.y.d
u.ap(u.e4,u.bU,t)
t=this.a
u=this.y.f
t=t.bT
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.f:this.V(r,this.y.e)
u=this.a
t=this.y.e
u.ak(u.e5,u.bU,t)
t=this.a
u=this.y.f
t=t.bT
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.e){case C.c:break
case C.h:u=this.a
t=this.z.f
u=u.bV
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
t=this.a
m=this.z.ch
t=t.bX
t.a.uniform1f(t.d,m)
break
case C.e:this.V(r,this.z.d)
u=this.a
t=this.z.d
u.ap(u.e6,u.bW,t)
t=this.a
u=this.z.f
t=t.bV
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bX
u.a.uniform1f(u.d,m)
break
case C.f:this.V(r,this.z.e)
u=this.a
t=this.z.e
u.ak(u.e7,u.bW,t)
t=this.a
u=this.z.f
t=t.bV
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bX
u.a.uniform1f(u.d,m)
break}if(w.z>0){p=this.dx.e.length
u=this.a.ei
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
q=this.a.cO
if(k>=q.length)return H.e(q,k)
h=q[k]
q=l.au(i.a)
m=q.a
if(typeof m!=="number")return m.k()
g=q.b
if(typeof g!=="number")return g.k()
f=q.c
if(typeof f!=="number")return f.k()
f=q.A(0,Math.sqrt(m*m+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){p=this.dx.f.length
u=this.a.ej
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
q=this.a.cP
if(k>=q.length)return H.e(q,k)
h=q[k]
q=i.gbv(i)
m=h.b
g=q.gd8(q)
f=q.gd9(q)
q=q.gda(q)
m.a.uniform3f(m.d,g,f,q)
q=l.R(i.gbv(i))
f=h.c
f.a.uniform3f(f.d,q.a,q.b,q.c)
q=i.gaA(i)
f=h.d
g=q.gc8()
m=q.gbD()
q=q.gbN()
f.a.uniform3f(f.d,g,m,q)
q=i.gcD()
m=h.e
m.a.uniform1f(m.d,q)
q=i.gcE()
m=h.f
m.a.uniform1f(m.d,q)
q=i.gcF()
m=h.r
m.a.uniform1f(m.d,q);++k}}if(w.ch>0){p=this.dx.r.length
u=this.a.ek
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
q=this.a.cQ
if(k>=q.length)return H.e(q,k)
h=q[k]
q=i.gbv(i)
m=h.b
g=q.gd8(q)
f=q.gd9(q)
q=q.gda(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcN(i).ko()
f=h.c
g=q.gba(q)
m=q.gbb(q)
q=q.gbc()
f.a.uniform3f(f.d,g,m,q)
q=l.R(i.gbv(i))
m=h.d
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gaA(i)
m=h.e
g=q.gc8()
f=q.gbD()
q=q.gbN()
m.a.uniform3f(m.d,g,f,q)
q=i.gkm()
f=h.f
f.a.uniform1f(f.d,q)
q=i.gkl()
f=h.r
f.a.uniform1f(f.d,q)
q=i.gcD()
f=h.x
f.a.uniform1f(f.d,q)
q=i.gcE()
f=h.y
f.a.uniform1f(f.d,q)
q=i.gcF()
f=h.z
f.a.uniform1f(f.d,q);++k}}if(w.cx>0){p=this.dx.x.length
u=this.a.el
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.x,t=u.length,q=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
m=this.a.cR
if(k>=m.length)return H.e(m,k)
h=m[k]
m=i.gbw()
H.p(r,"$isd",q,"$asd")
if(!C.a.aq(r,m)){m.sab(0,r.length)
C.a.h(r,m)}m=i.gcN(i)
g=h.d
f=m.gba(m)
e=m.gbb(m)
m=m.gbc()
g.a.uniform3f(g.d,f,e,m)
m=i.gjp()
e=h.b
f=m.gba(m)
g=m.gbb(m)
m=m.gbc()
e.a.uniform3f(e.d,f,g,m)
m=i.gas(i)
g=h.c
f=m.gba(m)
e=m.gbb(m)
m=m.gbc()
g.a.uniform3f(g.d,f,e,m)
m=l.au(i.gcN(i))
e=m.a
if(typeof e!=="number")return e.k()
f=m.b
if(typeof f!=="number")return f.k()
g=m.c
if(typeof g!=="number")return g.k()
g=m.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaA(i)
f=h.f
e=g.gc8()
m=g.gbD()
g=g.gbN()
f.a.uniform3f(f.d,e,m,g)
g=i.gbw()
m=g.gac(g)
if(!m){m=h.x
m.a.uniform1i(m.d,1)}else{m=h.r
f=g.gac(g)
e=m.a
m=m.d
if(!f)e.uniform1i(m,0)
else e.uniform1i(m,g.gab(g))
m=h.x
m.a.uniform1i(m.d,0)}++k}}if(w.cy>0){p=this.dx.y.length
u=this.a.em
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.y,t=u.length,q=[P.z],m=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
g=this.a.cS
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gbw()
H.p(r,"$isd",m,"$asd")
if(!C.a.aq(r,g)){g.sab(0,r.length)
C.a.h(r,g)}d=l.k(0,i.ga_(i))
g=i.ga_(i).R(new V.u(0,0,0))
f=h.b
e=g.gd8(g)
c=g.gd9(g)
g=g.gda(g)
f.a.uniform3f(f.d,e,c,g)
g=d.R(new V.u(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.br(0)
c=h.d
n=new Float32Array(H.bE(H.p(new V.aW(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ao(0,!0),"$isd",q,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,n)
c=i.gaA(i)
g=h.e
e=c.gc8()
f=c.gbD()
c=c.gbN()
g.a.uniform3f(g.d,e,f,c)
c=i.gbw()
g=c.gac(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gac(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gab(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcD()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcE()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcF()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){p=this.dx.z.length
u=this.a.en
u.a.uniform1i(u.d,p)
u=a.db
l=u.ga_(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.E)(u),++j){i=u[j]
q=this.a.cT
if(k>=q.length)return H.e(q,k)
h=q[k]
q=i.gbw()
H.p(r,"$isd",z,"$asd")
if(!C.a.aq(r,q)){q.sab(0,r.length)
C.a.h(r,q)}q=i.gbv(i)
m=h.b
g=q.gd8(q)
f=q.gd9(q)
q=q.gda(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcN(i)
f=h.c
g=q.gba(q)
m=q.gbb(q)
q=q.gbc()
f.a.uniform3f(f.d,g,m,q)
q=i.gjp()
m=h.d
g=q.gba(q)
f=q.gbb(q)
q=q.gbc()
m.a.uniform3f(m.d,g,f,q)
q=i.gas(i)
f=h.e
g=q.gba(q)
m=q.gbb(q)
q=q.gbc()
f.a.uniform3f(f.d,g,m,q)
q=l.R(i.gbv(i))
m=h.f
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gbw()
m=q.gac(q)
if(!m){q=h.x
q.a.uniform1i(q.d,1)}else{m=h.r
g=q.gac(q)
f=m.a
m=m.d
if(!g)f.uniform1i(m,0)
else f.uniform1i(m,q.gab(q))
q=h.x
q.a.uniform1i(q.d,0)}q=i.gaA(i)
m=h.y
g=q.gc8()
f=q.gbD()
q=q.gbN()
m.a.uniform3f(m.d,g,f,q)
q=i.gkv()
f=h.z
f.a.uniform1f(f.d,q)
q=i.gkw()
f=h.Q
f.a.uniform1f(f.d,q)
q=i.gcD()
f=h.ch
f.a.uniform1f(f.d,q)
q=i.gcE()
f=h.cx
f.a.uniform1f(f.d,q)
q=i.gcF()
f=h.cy
f.a.uniform1f(f.d,q);++k}}}switch(w.f){case C.c:break
case C.h:break
case C.e:this.V(r,this.Q.d)
z=this.a
u=this.Q.d
z.ap(z.e8,z.bY,u)
break
case C.f:this.V(r,this.Q.e)
z=this.a
u=this.Q.e
z.ak(z.e9,z.bY,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga_(u).br(0)
a.Q=u}z=z.id
z.toString
z.aw(u.ao(0,!0))}if(w.dy){this.V(r,this.ch)
z=this.a
u=this.ch
z.ak(z.ea,z.eb,u)
switch(w.r){case C.c:break
case C.h:z=this.a
u=this.cx.f
z=z.bZ
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
break
case C.e:this.V(r,this.cx.d)
z=this.a
u=this.cx.d
z.ap(z.ec,z.c_,u)
u=this.a
z=this.cx.f
u=u.bZ
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break
case C.f:this.V(r,this.cx.e)
z=this.a
u=this.cx.e
z.ak(z.ed,z.c_,u)
u=this.a
z=this.cx.f
u=u.bZ
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break}switch(w.x){case C.c:break
case C.h:z=this.a
u=this.cy.f
z=z.c1
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
u=this.a
q=this.cy.ch
u=u.c0
u.a.uniform1f(u.d,q)
break
case C.e:this.V(r,this.cy.d)
z=this.a
u=this.cy.d
z.ap(z.ee,z.c2,u)
u=this.a
z=this.cy.f
u=u.c1
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.c0
z.a.uniform1f(z.d,q)
break
case C.f:this.V(r,this.cy.e)
z=this.a
u=this.cy.e
z.ak(z.ef,z.c2,u)
u=this.a
z=this.cy.f
u=u.c1
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.c0
z.a.uniform1f(z.d,q)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.h:z=this.a
t=this.db.f
z=z.c3
z.a.uniform1f(z.d,t)
break
case C.e:this.V(r,this.db.d)
z=this.a
t=this.db.d
z.ap(z.eg,z.c4,t)
t=this.a
z=this.db.f
t=t.c3
t.a.uniform1f(t.d,z)
break
case C.f:this.V(r,this.db.e)
z=this.a
t=this.db.e
z.ak(z.eh,z.c4,t)
t=this.a
z=this.db.f
t=t.c3
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<r.length;++o)r[o].aO(a)
z=b.e
z.aO(a)
z.bf(a)
z.bB(a)
if(u)a.a.disable(3042)
for(o=0;o<r.length;++o)r[o].bB(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.iy()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dz().ar},
p:{
f5:function(){var z,y,x
z=new O.f4()
y=O.dv(V.aM)
z.e=y
y.bE(z.gh0(),z.gh1())
y=new O.bx(z,"emission")
y.c=C.c
y.f=new V.ae(0,0,0)
z.f=y
y=new O.bx(z,"ambient")
y.c=C.c
y.f=new V.ae(0,0,0)
z.r=y
y=new O.bx(z,"diffuse")
y.c=C.c
y.f=new V.ae(0,0,0)
z.x=y
y=new O.bx(z,"invDiffuse")
y.c=C.c
y.f=new V.ae(0,0,0)
z.y=y
y=new O.jb(z,"specular")
y.c=C.c
y.f=new V.ae(0,0,0)
y.ch=100
z.z=y
y=new O.j8(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bx(z,"reflect")
y.c=C.c
y.f=new V.ae(0,0,0)
z.cx=y
y=new O.ja(z,"refract")
y.c=C.c
y.f=new V.ae(0,0,0)
y.ch=1
z.cy=y
y=new O.j7(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.iV()
y.bF(D.a6)
y.e=H.a([],[D.cT])
y.f=H.a([],[D.ju])
y.r=H.a([],[D.k7])
y.x=H.a([],[D.kk])
y.y=H.a([],[D.kl])
y.z=H.a([],[D.km])
y.Q=null
y.ch=null
y.cc(y.gh_(),y.ghn(),y.ghp())
z.dx=y
x=y.Q
if(x==null){x=D.K()
y.Q=x
y=x}else y=x
y.h(0,z.ghA())
y=z.dx
x=y.ch
if(x==null){x=D.K()
y.ch=x
y=x}else y=x
y.h(0,z.gbG())
z.dy=null
return z}}},j7:{"^":"dK;0f,a,b,0c,0d,0e",
hE:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.z])
z.b=!0
this.a.a0(z)}},
b5:function(){this.df()
this.hE(1)}},dK:{"^":"b;",
a0:[function(a){this.a.a0(H.f(a,"$isw"))},function(){return this.a0(null)},"fl","$1","$0","gbG",0,2,1],
b5:["df",function(){}],
hG:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gu().W(0,this.gbG())
y=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gbG())
z=new D.H(this.b+".texture2D",y,this.d,this,[T.d2])
z.b=!0
this.a.a0(z)}},
hH:function(a){},
sbx:function(a){var z
if(a==null){if(this.c===C.e){this.c=C.h
z=this.a
z.a=null
z.a0(null)}}else{z=this.c
if(z!==C.e){if(z===C.c)this.b5()
this.c=C.e
this.hH(null)
z=this.a
z.a=null
z.a0(null)}}this.hG(a)}},j8:{"^":"dK;a,b,0c,0d,0e"},bx:{"^":"dK;0f,a,b,0c,0d,0e",
dP:function(a){var z,y
if(!J.Z(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.ae])
y.b=!0
this.a.a0(y)}},
b5:["ce",function(){this.df()
this.dP(new V.ae(1,1,1))}],
saA:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b5()
z=this.a
z.a=null
z.a0(null)}this.dP(b)}},ja:{"^":"bx;0ch,0f,a,b,0c,0d,0e",
hF:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.a0(z)}},
b5:function(){this.ce()
this.hF(1)}},jb:{"^":"bx;0ch,0f,a,b,0c,0d,0e",
cu:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.a0(z)}},
b5:function(){this.ce()
this.cu(100)}},dX:{"^":"b;"}}],["","",,T,{"^":"",dY:{"^":"dm;"},d2:{"^":"dY;"},kg:{"^":"d2;0a,0b,0c,0d,0e,0f",
gab:function(a){return this.a},
sab:function(a,b){this.a=b
return b},
gac:function(a){var z=this.d
z=z==null?null:z.gac(z)
if(z==null){z=this.c
z=z==null?null:z.gac(z)}return z==null?!1:z},
gu:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
aO:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.aO(a)}},
bB:function(a){var z=this.d
if(z!=null){z.bB(a)
this.d=null}}},kh:{"^":"d2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gab:function(a){return this.a},
sab:function(a,b){this.a=b
return b},
gac:function(a){return this.d},
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
aO:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
bB:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},ki:{"^":"b;a,0b,0c,0d,0e",
iO:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9987)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.kh()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.al
W.a8(x,"load",H.o(new T.kj(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
iN:function(a,b,c,d){return this.iO(a,!1,b,c,d)},
hC:function(a,b,c){var z,y,x,w
b=V.ek(b,2)
z=V.ek(a.width,2)
y=V.ek(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.dt(null,null)
x.width=z
x.height=y
w=H.f(C.l.eV(x,"2d"),"$isev")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ni(w.getImageData(0,0,x.width,x.height))}}},kj:{"^":"q:25;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hC(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a0.ji(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.e2()}++x.e}}}],["","",,V,{"^":"",hY:{"^":"b;",
bs:function(a,b){return!0},
i:function(a){return"all"},
$iscA:1},cA:{"^":"b;"},f3:{"^":"b;",
bs:["f3",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)if(z[x].bs(0,b))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$iscA:1},bZ:{"^":"f3;0a",
bs:function(a,b){return!this.f3(0,b)},
i:function(a){return"!["+this.de(0)+"]"}},jU:{"^":"b;0a",
f9:function(a){var z,y
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.m,P.ad])
for(y=new H.f0(a,a.gm(a),0,[H.az(a,"y",0)]);y.H();)z.l(0,y.d,!0)
this.a=z},
bs:function(a,b){return this.a.bQ(0,b)},
i:function(a){var z=this.a
return P.cE(new H.eY(z,[H.x(z,0)]),0,null)},
$iscA:1,
p:{
af:function(a){var z=new V.jU()
z.f9(a)
return z}}},fs:{"^":"b;a,b,0c,0d",
giQ:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fC(this.a.P(0,b))
w.a=H.a([],[V.cA])
w.c=!1
C.a.h(this.c,w)
return w},
iC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.bs(0,a))return w}return},
i:function(a){return this.b}},fz:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.hP(this.b,"\n","\\n")
y=H.hP(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fA:{"^":"b;a,b,0c",
i:function(a){return this.b}},kq:{"^":"b;0a,0b,0c",
P:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.fs(this,b)
z.c=H.a([],[V.fC])
this.a.l(0,b,z)}return z},
bz:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fA(this,a)
y=P.j
z.c=new H.aV(0,0,[y,y])
this.b.l(0,a,z)}return z},
jn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.a([],[V.fz])
y=this.c
x=[P.m]
w=H.a([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.J(a,t)
r=y.iC(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cE(w,0,null)
throw H.c(P.v("Untokenizable string [state: "+y.giQ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.a([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cE(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fz(o==null?p.b:o,q,t)}++t}}}},fC:{"^":"f3;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",eu:{"^":"b;",$isaX:1},iG:{"^":"fv;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z}},jp:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
bk:[function(a){var z
H.f(a,"$isw")
z=this.f
if(!(z==null))z.C(a)},function(){return this.bk(null)},"jz","$1","$0","gdi",0,2,1],
seB:function(a){var z,y
if(!J.Z(this.b,a)){z=this.b
if(z!=null)z.gu().W(0,this.gdi())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gdi())
z=new D.H("mover",y,this.b,this,[U.ab])
z.b=!0
this.bk(z)}},
$isaX:1,
$iseu:1},fv:{"^":"b;"}}],["","",,V,{"^":"",k3:{"^":"b;0a,0b",
fb:function(a,b){var z,y,x,w,v,u,t
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
t=W.al
W.a8(z,"scroll",H.o(new V.k6(x),{func:1,ret:-1,args:[t]}),!1,t)},
im:function(a,b,c){var z,y,x,w
a=H.B(C.d.is(a,0,4))
if(c.length===0)c=P.cH(C.y,b,C.k,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hZ(null)
w.href="#"+H.l(c)
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
cB:function(a,b){return this.im(a,b,"")},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.p(a,"$isd",[P.j],"$asd")
this.hJ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jn(C.a.iK(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
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
if(H.hO(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cH(C.y,s,C.k,!1)
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
hJ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.kq()
y=P.j
z.a=new H.aV(0,0,[y,V.fs])
z.b=new H.aV(0,0,[y,V.fA])
z.c=z.P(0,"Start")
y=z.P(0,"Start").B(0,"Bold")
x=V.af(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Bold").B(0,"Bold")
x=new V.bZ()
w=[V.cA]
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.af(new H.a9("*"))
C.a.h(x.a,y)
y=z.P(0,"Bold").B(0,"BoldEnd")
x=V.af(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").B(0,"Italic")
x=V.af(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Italic").B(0,"Italic")
x=new V.bZ()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.af(new H.a9("_"))
C.a.h(x.a,y)
y=z.P(0,"Italic").B(0,"ItalicEnd")
x=V.af(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").B(0,"Code")
x=V.af(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Code").B(0,"Code")
x=new V.bZ()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.af(new H.a9("`"))
C.a.h(x.a,y)
y=z.P(0,"Code").B(0,"CodeEnd")
x=V.af(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").B(0,"LinkHead")
x=V.af(new H.a9("["))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"LinkHead").B(0,"LinkTail")
x=V.af(new H.a9("|"))
C.a.h(y.a,x)
x=z.P(0,"LinkHead").B(0,"LinkEnd")
y=V.af(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkHead").B(0,"LinkHead")
y=new V.bZ()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.af(new H.a9("|]"))
C.a.h(y.a,x)
x=z.P(0,"LinkTail").B(0,"LinkEnd")
y=V.af(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkTail").B(0,"LinkTail")
y=new V.bZ()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.af(new H.a9("|]"))
C.a.h(y.a,x)
C.a.h(z.P(0,"Start").B(0,"Other").a,new V.hY())
x=z.P(0,"Other").B(0,"Other")
y=new V.bZ()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.af(new H.a9("*_`["))
C.a.h(y.a,x)
x=z.P(0,"BoldEnd")
x.d=x.a.bz("Bold")
x=z.P(0,"ItalicEnd")
x.d=x.a.bz("Italic")
x=z.P(0,"CodeEnd")
x.d=x.a.bz("Code")
x=z.P(0,"LinkEnd")
x.d=x.a.bz("Link")
x=z.P(0,"Other")
x.d=x.a.bz("Other")
this.b=z},
p:{
k4:function(a,b){var z=new V.k3()
z.fb(a,!0)
return z}}},k6:{"^":"q:25;a",
$1:function(a){P.dZ(C.n,new V.k5(this.a))}},k5:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.i.at(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
i6:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
i5:function(a,b){var z
if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(!(a>=200&&a<=205))if(b!==1)z=b>=200&&b<=205
else z=!0
else z=!1
return z},
hK:function(){var z,y,x
z=V.k4("3Dart Craft",!0)
y=[P.j]
z.Z(H.a(["This example is in development and may still have a few issues and glitches."],y))
x=W.dt(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.cB(1,"About")
z.Z(H.a(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.Z(H.a(["\xab[Back to Examples List|../../]"],y))
z.cB(1,"Controls")
z.Z(H.a(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.Z(H.a(["\u2022 *Esc* to release the mouse capture"],y))
z.Z(H.a(["\u2022 *W* or *Up arrow* to move forward"],y))
z.Z(H.a(["\u2022 *S* or *Down arrow* to move backward"],y))
z.Z(H.a(["\u2022 *A* or *Left arrow* to strife left"],y))
z.Z(H.a(["\u2022 *D* or *Right arror* to strife right"],y))
z.Z(H.a(["\u2022 *Space bar* to jump"],y))
z.Z(H.a(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.Z(H.a(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.Z(H.a(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.Z(H.a(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.Z(H.a(["\u2022 *O* to return the starting location"],y))
z.cB(1,"Help wanted")
z.Z(H.a(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.Z(H.a(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dZ(C.n,B.nw())},
oT:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
z=B.n4()
if(z<0){z=C.J.iR(4294967296)
y=P.fW().eM(0,P.f_(["seed",""+z],P.j,null))
x=window.history
w=y.i(0)
x.toString
x.pushState(new P.me([],[]).d6(null),null,w)}v=document.getElementById("targetCanvas")
if(v==null)H.r(P.v("Failed to find an element with the identifier, targetCanvas."))
u=E.ko(v,!0,!0,!0,!1)
t=new B.jc(u)
x=P.m
t.b=new H.aV(0,0,[x,B.a_])
t.c=new H.aV(0,0,[x,[P.d,P.m]])
t.d=H.a([],[O.f4])
s=new V.ae(1,1,1)
w=new V.u(0,0,0)
r=new V.u(0.5,-1,0.2).v(0,w)
r=U.b5(V.f7(w,new V.I(0,0,1),new V.I(r.a,r.b,r.c)))
w=new D.cT()
w.c=new V.ae(1,1,1)
w.a=new V.I(0,0,1)
q=w.b
w.b=r
r.gu().h(0,w.gh5())
r=new D.H("mover",q,w.b,w,[U.ab])
r.b=!0
w.b4(r)
if(!w.c.t(0,s)){q=w.c
w.c=s
r=new D.H("color",q,s,w,[V.ae])
r.b=!0
w.b4(r)}t.e=w
p=t.L(t.E("boundary"),!1)
o=t.L(t.E("brick"),!1)
n=t.L(t.E("dirt"),!1)
m=t.L(t.E("dryLeavesSide"),!1)
l=t.L(t.E("dryLeavesTop"),!1)
k=t.L(t.E("leaves"),!1)
j=t.L(t.E("rock"),!1)
i=t.L(t.E("sand"),!1)
h=t.L(t.E("trunkEnd"),!1)
g=t.L(t.E("trunkSide"),!1)
f=t.L(t.E("trunkTilted"),!1)
e=t.L(t.E("turfSide"),!1)
d=t.L(t.E("turfTop"),!1)
c=t.L(t.E("woodEnd"),!1)
b=t.L(t.E("woodSide"),!1)
a=t.L(t.E("woodTilted"),!1)
a0=t.L(t.E("blackShine"),!0)
a1=t.L(t.E("redShine"),!0)
a2=t.L(t.E("yellowShine"),!0)
a3=t.L(t.E("whiteShine"),!0)
a4=t.L(t.E("mushroomBottom"),!1)
a5=t.L(t.E("mushroomSide"),!1)
a6=t.L(t.E("mushroomTop"),!1)
a7=t.L(t.E("grass"),!1)
a8=t.L(t.E("fern"),!1)
a9=t.L(t.E("blueFlowers"),!1)
b0=t.L(t.E("redFlowers"),!1)
b1=t.L(t.E("whiteFlowers"),!1)
w=T.d2
r=P.f1([t.E("water1"),t.E("water2"),t.E("water3")],!0,w)
b2=new T.kg()
b2.a=0
b2.b=0
b2.e=H.p(r,"$isd",[w],"$asd")
t.x=b2
b3=t.L(b2,!0)
t.b.l(0,100,new B.a_(p,p,p,p,p,p))
t.b.l(0,101,new B.a_(n,n,n,n,n,n))
t.b.l(0,102,new B.a_(d,n,e,e,e,e))
t.b.l(0,103,new B.a_(j,j,j,j,j,j))
t.b.l(0,104,new B.a_(i,i,i,i,i,i))
t.b.l(0,105,new B.a_(l,n,m,m,m,m))
t.b.l(0,106,new B.a_(h,h,g,g,g,g))
t.b.l(0,107,new B.a_(g,g,f,f,h,h))
t.b.l(0,108,new B.a_(f,f,h,h,f,f))
t.b.l(0,109,new B.a_(o,o,o,o,o,o))
t.b.l(0,110,new B.a_(a1,a1,a1,a1,a1,a1))
t.b.l(0,111,new B.a_(a3,a3,a3,a3,a3,a3))
t.b.l(0,112,new B.a_(a2,a2,a2,a2,a2,a2))
t.b.l(0,113,new B.a_(a0,a0,a0,a0,a0,a0))
t.b.l(0,114,new B.a_(k,k,k,k,k,k))
t.b.l(0,115,new B.a_(c,c,b,b,b,b))
t.b.l(0,116,new B.a_(b,b,a,a,c,c))
t.b.l(0,117,new B.a_(a,a,c,c,a,a))
t.b.l(0,1,new B.a_(b3,b3,b3,b3,b3,b3))
x=[x]
w=H.p(H.a([a7],x),"$isd",x,"$asd")
t.c.l(0,200,w)
w=H.p(H.a([a8],x),"$isd",x,"$asd")
t.c.l(0,201,w)
w=H.p(H.a([b1],x),"$isd",x,"$asd")
t.c.l(0,202,w)
w=H.p(H.a([a9],x),"$isd",x,"$asd")
t.c.l(0,203,w)
w=H.p(H.a([b0],x),"$isd",x,"$asd")
t.c.l(0,204,w)
x=H.p(H.a([a6,a4,a5],x),"$isd",x,"$asd")
t.c.l(0,205,x)
t.f=t.dl("selection")
t.r=t.dl("crosshair")
b4=B.lc(t,z)
b5=B.js(u,b4)
b6=new M.ix()
x=O.dv(E.ak)
b6.d=x
x.bE(b6.gh6(),b6.gh7())
b6.e=null
b6.f=null
b6.r=null
b6.x=null
b7=new X.jp()
b7.c=1.0471975511965976
b7.d=0.1
b7.e=2000
b7.seB(null)
x=b7.c
if(!$.n.$2(x,1.0471975511965976)){q=b7.c
b7.c=1.0471975511965976
x=new D.H("fov",q,1.0471975511965976,b7,[P.z])
x.b=!0
b7.bk(x)}x=b7.d
if(!$.n.$2(x,0.1)){q=b7.d
b7.d=0.1
x=new D.H("near",q,0.1,b7,[P.z])
x.b=!0
b7.bk(x)}x=b7.e
if(!$.n.$2(x,2000)){q=b7.e
b7.e=2000
x=new D.H("far",q,2000,b7,[P.z])
x.b=!0
b7.bk(x)}x=b6.a
if(x!==b7){if(x!=null)x.gu().W(0,b6.gaZ())
q=b6.a
b6.a=b7
b7.gu().h(0,b6.gaZ())
x=new D.H("camera",q,b6.a,b6,[X.eu])
x.b=!0
b6.bj(x)}b8=new X.iG()
x=new V.b4(0,0,0,1)
b8.a=x
b8.b=!0
b8.c=2000
b8.d=!0
b8.e=0
b8.f=!1
x=V.dR(0,0,1,1)
b8.r=x
x=b6.b
if(x!==b8){if(x!=null)x.gu().W(0,b6.gaZ())
q=b6.b
b6.b=b8
b8.gu().h(0,b6.gaZ())
x=new D.H("target",q,b6.b,b6,[X.fv])
x.b=!0
b6.bj(x)}x=b6.e
if(x==null){x=D.K()
b6.e=x}x.h(0,b4.gjq(b4))
b6.a.seB(b5.r)
for(x=b4.e,w=x.length,b9=0;b9<x.length;x.length===w||(0,H.E)(x),++b9){c0=x[b9]
r=b6.d
b2=H.x(r,0)
H.A(c0,b2)
c1=[b2]
if(r.bl(H.a([c0],c1))){c2=r.a
c3=c2.length
C.a.h(c2,c0)
b2=H.p(H.a([c0],c1),"$isi",[b2],"$asi")
r=r.c
if(r!=null)r.$2(c3,b2)}}b6.d.h(0,b5.cy)
b4.f=b5
x=u.d
if(x!==b6){if(x!=null)x.gu().W(0,u.gdg())
u.d=b6
b6.gu().h(0,u.gdg())
u.fe()}b5.dc()
x=b6.b
s=new V.b4(0.576,0.784,0.929,1)
if(!x.a.t(0,s)){q=x.a
x.a=s
w=new D.H("color",q,s,x,[V.b4])
w.b=!0
x=x.x
if(!(x==null))x.C(w)}P.d3(C.L,new B.nD(u,b4))},"$0","nw",0,0,3],
n4:function(){var z,y
z=P.fW().geL().j(0,"seed")
if(z==null)return-1
y=H.fh(z,null)
return y==null?-1:y},
i4:{"^":"b;a,b,c,d,e,f",
i:function(a){return H.l(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.i6(this.gaV(this))+")"},
gaV:function(a){var z=this.f
z=z==null?null:z.a6(this.a,this.b,this.c)
if(z==null)z=this.b<0?100:0
return z}},
jj:{"^":"b;a,b"},
ew:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x",
f5:function(a){var z,y,x,w,v,u,t,s,r,q
this.d=new Uint8Array(12288)
this.e=H.a([],[E.ak])
for(z=this.c.e,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
v=E.bt(null,!0,null,"",null,null)
u=w.y
t=H.x(u,0)
H.A(v,t)
s=[t]
if(u.bl(H.a([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.p(H.a([v],s),"$isi",[t],"$asi")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
a6:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48||a<0||a>=16||c<0||c>=16)return 0
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.e(z,y)
return z[y]},
aW:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0){z=this.gam(this)
z=z==null?null:z.aW(a+16,b,c)
return z==null?0:z}if(a>=16){z=this.gas(this)
z=z==null?null:z.aW(a-16,b,c)
return z==null?0:z}if(c<0){z=this.gcG(this)
z=z==null?null:z.aW(a,b,c+16)
return z==null?0:z}if(c>=16){z=this.gcV()
z=z==null?null:z.aW(a,b,c-16)
return z==null?0:z}z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.e(z,y)
return z[y]},
aa:function(a,b,c,d){var z,y
H.B(a)
H.B(b)
if(b<0||b>=48||a<0||a>=16||c<0||c>=16)return!1
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.e(z,y)
z[y]=d
return!0},
gam:function(a){return this.c.aR(this.a-16,this.b)},
gcV:function(){return this.c.aR(this.a,this.b+16)},
gas:function(a){return this.c.aR(this.a+16,this.b)},
gcG:function(a){return this.c.aR(this.a,this.b-16)},
d5:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.a6(a,z,b)
if(y>=100&&y<=117)return z}return c},
jo:function(a,b){return this.d5(a,b,48)},
jr:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var z=B.dV(this.c.a,null)
z.ir(this)
z.cU(0,this.e)},
saJ:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
js:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.x||this.r){this.saJ(!1)
return}z=V.dR(this.a,this.b,16,16)
y=z.eC(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.h(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.v()
if(typeof u!=="number")return H.h(u)
t=x-u
if(v*v+t*t<100){this.saJ(!0)
return}s=z.eC(b)
x=b.a
if(typeof x!=="number")return x.v()
r=b.b
if(typeof r!=="number")return r.v()
r=new V.a3(x-w,r-u)
q=r.A(0,Math.sqrt(r.F(r)))
r=s.a
if(typeof r!=="number")return r.v()
x=s.b
if(typeof x!=="number")return x.v()
p=new V.a3(r-w,x-u)
o=p.F(p)
if(o>6400){this.saJ(!1)
return}this.saJ(q.F(p.A(0,o))>0)},
p:{
i9:function(a){var z=new B.ew(a)
z.f5(a)
return z}}},
iH:{"^":"b;0a,0b,0c",
eo:function(a){var z
this.c=a
this.hv()
C.B.aC(this.c.d,0,12288,0)
this.hT()
this.fC()
this.fA()
this.hR()
this.ft()
this.hu()
this.fp()
this.hQ()
a.x=!1
a.f=!0
a.saJ(!1)
z=a.gam(a)
if(!(z==null))z.f=!0
z=a.gas(a)
if(!(z==null))z.f=!0
z=a.gcV()
if(!(z==null))z.f=!0
z=a.gcG(a)
if(!(z==null))z.f=!0},
aj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=this.c
x=(a+y.a)*c
y=(b+y.b)*c
w=new B.be(x,y)
v=w.n(0,$.$get$eJ().k(0,x+y))
y=Math.floor(v.a)
x=Math.floor(v.b)
u=new B.be(y,x)
t=u.n(0,$.$get$dz().k(0,y+x))
s=v.v(0,u)
w=new B.iz(z.a,u,w.v(0,t),s)
w.e=0
w.ah(1,0)
w.ah(0,1)
z=s.a
x=s.b
r=z+x
if(r<=1){q=1-r
if(q>z||q>x)if(z>x)w.ah(1,-1)
else w.ah(-1,1)
else w.ah(1,1)
w.ah(0,0)}else{q=2-r
if(q<z||q<x)if(z>x)w.ah(2,0)
else w.ah(0,2)
else w.ah(0,0)
w.ah(1,1)}return w.e/47*0.5+0.5},
cz:function(a,b){var z,y
z=this.b
y=(a+3)*22+(b+3)
if(y<0||y>=484)return H.e(z,y)
return z[y]},
hv:function(){var z,y,x,w,v
for(z=0,y=-3;y<19;++y)for(x=-3;x<19;++x){w=C.i.ad(Math.pow(0.6*this.aj(y,x,0.001)+0.3*this.aj(y,x,0.01)+0.1*this.aj(y,x,0.1),2)*48)
if(w>=48)w=47
v=this.b
if(z<0||z>=484)return H.e(v,z)
v[z]=w;++z}},
hT:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.hU(z,y)},
hU:function(a,b){var z,y,x,w,v
z=this.cz(a,b)
for(y=z-2,x=z<8,w=0;w<=z;++w){if(x)v=y<=w?104:103
else if(z===w)v=102
else v=y<=w?101:103
this.c.aa(a,w,b,v)}},
fC:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.fD(z,y)},
fD:function(a,b){var z,y
z=this.c.d5(a,b,0)
if(z<8)for(y=8;y>z;--y)this.c.aa(a,y,b,1)},
fA:function(){var z,y
for(z=-1;z<=16;++z)for(y=-1;y<=16;++y)this.fB(z,y)},
fB:function(a,b){var z,y,x,w,v,u
if(this.cz(a,b)<8)for(z=10;z>6;--z)for(y=-1;y<=1;++y)for(x=a+y,w=-1;w<=1;++w){v=b+w
u=this.c.a6(x,z,v)
if(u===102||u===105)this.c.aa(x,z,v,104)}},
hR:function(){var z,y
for(z=-3;z<19;++z)for(y=-3;y<19;++y)if(this.aj(z,y,1.5)<0.1)this.fu(z,y)},
fu:function(a,b){var z,y,x,w
z=this.c
y=a+z.a
if(y>=-30)if(y<30){z=b+z.b
z=z>=-30&&z<30}else z=!1
else z=!1
if(z)return
x=this.cz(a,b)
if(x<10)return
for(w=1;w<8;++w)this.c.aa(a,x+w,b,106)
this.fv(a,b)
this.fw(a,x+8,b)},
fv:function(a,b){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=b+w,u=47;u>=0;--u)if(this.c.a6(x,u,v)===102){this.c.aa(x,u,v,105)
break}},
fw:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)for(v=y+w*w,u=b+w,t=-3;t<=3;++t)if(v+t*t<=12){s=c+t
if(this.c.a6(x,u,s)===0)this.c.aa(x,u,s,114)}},
hu:function(){var z,y,x,w,v
for(z=0;z<16;++z)for(y=z-400,x=z+400,w=0;w<16;++w)if(this.aj(z,w,12.5)<0.1)this.b0(z,w,204)
else if(this.aj(x,w,12.5)<0.1)this.b0(z,w,203)
else{v=w+400
if(this.aj(z,v,12.5)<0.1)this.b0(z,w,202)
else if(this.aj(x,v,12.5)<0.15)this.b0(z,w,200)
else if(this.aj(y,w,12.5)<0.1)this.b0(z,w,201)
else if(this.aj(z,w-400,12.5)<0.08)this.b0(z,w,205)}},
b0:function(a,b,c){var z,y
z=this.c.d5(a,b,0)
y=this.c.a6(a,z,b)
if(y!==102&&y!==105)return
this.c.aa(a,z+1,b,c)},
ft:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.c
y=z.a
if(y+16>=-30)if(y<=30){z=z.b
z=z+16<-30||z>30}else z=!0
else z=!0
if(z)return
x=new B.iJ(this)
for(w=30;w>=0;w-=2){v=30-w+3
for(u=-v,z=w-1,t=u;t<=v;++t)for(s=u;s<=v;++s){x.$4(t,w,s,111)
x.$4(t,z,s,111)}for(y=u-1,r=u-2,q=v+1,p=v+2,o=-2;o<=2;++o){x.$4(y,w,o,109)
x.$4(y,z,o,109)
x.$4(r,z,o,109)
x.$4(q,w,o,109)
x.$4(q,z,o,109)
x.$4(p,z,o,109)
x.$4(o,w,y,109)
x.$4(o,z,y,109)
x.$4(o,z,r,109)
x.$4(o,w,q,109)
x.$4(o,z,q,109)
x.$4(o,z,p,109)}z=w+1
x.$4(y,z,2,109)
x.$4(r,w,2,109)
x.$4(y,z,-2,109)
x.$4(r,w,-2,109)
x.$4(q,z,2,109)
x.$4(p,w,2,109)
x.$4(q,z,-2,109)
x.$4(p,w,-2,109)
x.$4(2,z,y,109)
x.$4(2,w,r,109)
x.$4(-2,z,y,109)
x.$4(-2,w,r,109)
x.$4(2,z,q,109)
x.$4(2,w,p,109)
x.$4(-2,z,q,109)
x.$4(-2,w,p,109)}},
fp:function(){var z,y,x
z=this.c
y=z.a
if(y+16>=-36)if(y<=12){z=z.b
z=z+16<-28||z>-22}else z=!0
else z=!0
if(z)return
x=new B.iI(this,-12,40,-25)
z=[P.m]
x.$5(110,0,0,H.a([0,1,2,3,4,4,3,2,4,4,3,2,1,0],z),H.a([1,0,0,0,1,2,3,3,4,5,6,6,6,5],z))
x.$5(110,6,0,H.a([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],z),H.a([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],z))
x.$5(113,12,0,H.a([0,0,0,0,0,1,2,1,2,3,3,3,3,3],z),H.a([2,3,4,5,6,1,1,4,4,2,3,4,5,6],z))
x.$5(113,17,0,H.a([0,0,0,0,0,0,1,2,1,2,3,3,3,3],z),H.a([1,2,3,4,5,6,1,1,4,4,2,3,5,6],z))
x.$5(113,22,0,H.a([0,2,1,1,1,1,1,1],z),H.a([1,1,1,2,3,4,5,6],z))},
hQ:function(){var z,y,x,w,v,u
z=this.c
y=z.a
if(y+16>=-3)if(y<=3){z=z.b
z=z+16<-3||z>3}else z=!0
else z=!0
if(z)return
x=new B.iK(this)
for(w=-3;w<=3;++w)for(v=0;v<=7;++v)for(z=2+v,u=-3;u<=3;++u)x.$4(w,z,u,0)
x.$4(0,2,0,113)
x.$4(0,3,0,112)
x.$4(0,4,0,112)
x.$4(0,5,0,112)
x.$4(0,6,0,112)}},
iJ:{"^":"q;a",
$4:function(a,b,c,d){var z=this.a.c
z.aa(a-z.a,b,c-z.b,d)}},
iI:{"^":"q;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
z=[P.m]
H.p(d,"$isd",z,"$asd")
H.p(e,"$isd",z,"$asd")
for(y=d.length-1,z=this.a,x=this.b+b,w=this.c+c,v=this.d;y>=0;--y){u=z.c
if(y>=d.length)return H.e(d,y)
t=d[y]
if(typeof t!=="number")return H.h(t)
s=u.a
if(y>=e.length)return H.e(e,y)
r=e[y]
if(typeof r!=="number")return H.h(r)
u.aa(x+t-s,w-r,v-u.b,a)}}},
iK:{"^":"q;a",
$4:function(a,b,c,d){var z=this.a.c
z.aa(a-z.a,b,c-z.b,d)}},
nD:{"^":"q:47;a,b",
$1:function(a){var z
H.f(a,"$isaw")
z=this.b
P.el(C.i.eQ(this.a.giG(),2)+" fps, "+("chunks: "+z.d.length+", graveyard: "+z.c.length+", player: "+z.f.x.f.R(new V.u(0,0,0)).i(0)))}},
a_:{"^":"b;a,b,c,d,e,f"},
jc:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x",
E:function(a){var z="./textures/"+a+".png"
return this.a.f.iN(z,!0,!1,!1)},
L:function(a,b){var z,y,x
z=O.f5()
z.dx.h(0,this.e)
y=z.r
y.saA(0,new V.ae(0.8,0.8,0.8))
y=z.x
y.saA(0,new V.ae(0.4,0.4,0.4))
z.r.sbx(a)
z.x.sbx(a)
z.db.sbx(a)
if(b){y=z.z
y.saA(0,new V.ae(0.5,0.5,0.5))
if(y.c===C.c){y.c=C.h
y.ce()
y.cu(100)
x=y.a
x.a=null
x.a0(null)}y.cu(3)}C.a.h(this.d,z)
return this.d.length-1},
dl:function(a){var z,y
z=this.E(a)
y=O.f5()
y.f.sbx(z)
y.db.sbx(z)
return y}},
jr:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
f7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.kR()
x=X.aL()
x.h(0,new X.T(39,new X.X(!1,!1,!1)))
x.h(0,new X.T(68,new X.X(!1,!1,!1)))
w=y.ghe()
x.gal().h(0,w)
y.a=x
x=X.aL()
x.h(0,new X.T(37,new X.X(!1,!1,!1)))
x.h(0,new X.T(65,new X.X(!1,!1,!1)))
x.gal().h(0,w)
y.b=x
x=X.aL()
x.h(0,new X.T(81,new X.X(!1,!1,!1)))
x.gal().h(0,w)
y.c=x
x=X.aL()
x.h(0,new X.T(69,new X.X(!1,!1,!1)))
x.gal().h(0,w)
y.d=x
x=X.aL()
x.h(0,new X.T(40,new X.X(!1,!1,!1)))
x.h(0,new X.T(83,new X.X(!1,!1,!1)))
x.gal().h(0,w)
y.e=x
x=X.aL()
x.h(0,new X.T(38,new X.X(!1,!1,!1)))
x.h(0,new X.T(87,new X.X(!1,!1,!1)))
x.gal().h(0,w)
y.f=x
x=U.cj()
x.saE(30)
x.saQ(0)
w=y.gax()
x.gu().h(0,w)
y.r=x
x=U.cj()
x.saE(30)
x.saQ(0)
x.gu().h(0,w)
y.x=x
x=U.cj()
x.saE(30)
x.saQ(0)
x.gu().h(0,w)
y.y=x
y.z=null
y.Q=null
y.ch=60
y.cx=15
y.cy=0
y.db=null
y.dx=null
y.dy=null
y.a.a9(z)
y.b.a9(z)
y.c.a9(z)
y.d.a9(z)
y.e.a9(z)
y.f.a9(z)
y.r.saE(6)
y.x.saE(60)
z=y.x
x=z.r
if(!$.n.$2(x,-100)){v=z.r
z.r=-100
x=new D.H("acceleration",v,-100,z,[P.z])
x.b=!0
z.I(x)}y.y.saE(6)
y.dy=H.o(this.gfT(),{func:1,ret:V.u,args:[V.u,V.u]})
this.a=y
z=a.r
y=new U.kQ()
x=U.cj()
x.sd7(0,!0)
x.scY(6.283185307179586)
x.scZ(0)
x.sY(0,0)
x.saE(100)
x.sK(0)
x.saQ(0.5)
y.b=x
w=y.gax()
x.gu().h(0,w)
x=U.cj()
x.sd7(0,!0)
x.scY(6.283185307179586)
x.scZ(0)
x.sY(0,0)
x.saE(100)
x.sK(0)
x.saQ(0.5)
y.c=x
x.gu().h(0,w)
y.d=null
y.e=!1
y.f=!1
y.r=!1
y.x=2.5
y.y=2.5
y.z=2
y.Q=4
y.cx=!1
y.ch=!1
y.cy=0
y.db=0
y.dx=null
y.dy=0
y.fr=null
y.fx=null
u=new X.X(!1,!1,!1)
v=y.d
y.d=u
x=new D.H("modifiers",v,u,y,[X.X])
x.b=!0
y.I(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.H("invertX",x,!1,y,[P.ad])
x.b=!0
y.I(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.H("invertY",x,!1,y,[P.ad])
x.b=!0
y.I(x)}y.a9(z)
y.b.scY(1.5707963267948966)
y.b.scZ(-1.5707963267948966)
y.b.saQ(1)
y.c.saQ(1)
y.b.sd7(0,!1)
this.b=y
y.gu().h(0,new B.jt(this))
z=U.ab
y=[z]
x=U.cW(H.a([this.a,this.b],y))
x.gu().h(0,this.ghV())
this.r=x
x=this.b
w=new U.eR()
w.c=V.by()
w.d=0
if(null!=x){w.a=x
x.gu().h(0,w.gax())
z=new D.H("mover",null,w.a,w,[z])
z.b=!0
w.I(z)}this.x=U.cW(H.a([w,this.a,U.b5(V.dM(1,-1,1,1))],y))
z=U.b5(V.cB(-0.5,-0.5,-0.5))
x=new U.fo()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.seT(-0.1)
x.seH(0,0)
x.seN(0)
w=x.d
if(!$.n.$2(w,0)){v=x.d
x.d=0
w=new D.H("deltaYaw",v,0,x,[P.z])
w.b=!0
x.I(w)}w=x.e
if(!$.n.$2(w,0.1)){v=x.e
x.e=0.1
w=new D.H("deltaPitch",v,0.1,x,[P.z])
w.b=!0
x.I(w)}w=x.f
if(!$.n.$2(w,0)){v=x.f
x.f=0
w=new D.H("deltaRoll",v,0,x,[P.z])
w.b=!0
x.I(w)}this.y=U.cW(H.a([z,x,U.b5(V.cB(0.5,0.5,0.5)),U.b5(V.dM(0.04,-0.04,0.04,1)),U.b5(V.cB(-0.15,0.06,-0.2)),this.x],y))
this.z=U.cW(H.a([U.b5(V.dM(0.005,-0.005,0.005,1)),U.b5(V.cB(0,0,-0.2)),this.x],y))
z=X.aL()
z.h(0,new X.T(32,new X.X(!1,!1,!1)))
z.a9(a.r)
z.gal().h(0,this.ghd())
this.d=!0
z=X.aL()
z.h(0,new X.T(9,new X.X(!1,!1,!1)))
z.h(0,new X.T(9,new X.X(!1,!1,!0)))
z.a9(a.r)
z.gal().h(0,this.gh3())
z=X.aL()
z.h(0,new X.T(69,new X.X(!1,!1,!1)))
z.h(0,new X.T(81,new X.X(!1,!1,!1)))
z.a9(a.r)
z.gal().h(0,this.gh2())
z=a.r.d
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.gh8())
z=X.aL()
z.h(0,new X.T(79,new X.X(!1,!1,!1)))
z.a9(a.r)
z.gal().h(0,this.ghq())
z=this.z
y=$.$get$a4()
x=$.$get$a7()
x=new Z.ag(y.a|x.a)
t=new F.fq()
y=new F.l_(t)
y.b=!1
w=F.c3
y.c=H.a([],[w])
t.a=y
y=new F.jY(t)
y.b=H.a([],[F.ff])
t.b=y
y=new F.jX(t)
y.b=H.a([],[F.eW])
t.c=y
y=new F.jW(t)
y.b=H.a([],[F.aD])
t.d=y
t.e=null
y=t.a
s=new V.I(-1,-1,1)
s=s.A(0,Math.sqrt(s.F(s)))
r=y.bM(new V.cC(1,2,4,6),new V.b4(1,0,0,1),new V.u(-1,-1,0),new V.P(0,1),s,x)
y=t.a
s=new V.I(1,-1,1)
s=s.A(0,Math.sqrt(s.F(s)))
q=y.bM(new V.cC(0,3,4,6),new V.b4(0,0,1,1),new V.u(1,-1,0),new V.P(1,1),s,x)
y=t.a
s=new V.I(1,1,1)
s=s.A(0,Math.sqrt(s.F(s)))
p=y.bM(new V.cC(0,2,5,6),new V.b4(0,1,0,1),new V.u(1,1,0),new V.P(1,0),s,x)
y=t.a
s=new V.I(-1,1,1)
s=s.A(0,Math.sqrt(s.F(s)))
o=y.bM(new V.cC(0,2,4,7),new V.b4(1,1,0,1),new V.u(-1,1,0),new V.P(0,0),s,x)
t.d.il(H.a([r,q,p,o],[w]))
t.aP()
y=this.c
this.Q=E.bt(null,!0,z,"",t,y.a.r)
this.ch=E.bt(null,!0,this.y,"",null,null)
z=E.ak
this.db=H.a([],[z])
for(x=y.a.d,w=x.length,n=0;n<x.length;x.length===w||(0,H.E)(x),++n){m=E.bt(null,!0,null,"",null,x[n])
s=this.ch.y
l=H.x(s,0)
H.A(m,l)
k=[l]
if(s.bl(H.a([m],k))){j=s.a
i=j.length
C.a.h(j,m)
l=H.p(H.a([m],k),"$isi",[l],"$asi")
s=s.c
if(s!=null)s.$2(i,l)}s=this.db;(s&&C.a).h(s,m)}this.e=0
y=E.bt(null,!0,null,"",null,y.a.f)
this.cx=y
this.f=null
this.cy=E.bt(H.a([this.Q,this.ch,y],[z]),!0,null,"",null,null)
this.dU()},
dc:function(){var z,y
z=this.c.aR(C.m.ad(0.5),C.m.ad(0.5))
y=z==null?null:z.jo(C.m.ad(0.5),C.m.ad(0.5))
if(y==null)y=0
this.a.sY(0,new V.u(0.5,y+60,0.5))
this.a.sK(new V.I(0,0,0))},
kb:[function(a){H.f(a,"$isw")
this.dc()},"$1","ghq",4,0,0],
ai:function(a,b,c){var z,y
z=this.c.a6(a,b,c)
y=z.gaV(z)
return y>=100&&y<=117},
jX:[function(a){H.f(a,"$isw")
if(this.d)this.a.x.sK(30)},"$1","ghd",4,0,0],
jN:[function(a){var z,y
a=H.k(H.f(a,"$isw"),"$isbV")
$.$get$cO()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.v()
z=y-1
this.e=z
if(z<0)this.e=19}else{if(typeof y!=="number")return y.n()
z=y+1
this.e=z
if(z>=20)this.e=0}this.dU()},"$1","gh3",4,0,0],
jM:[function(a){this.ds(H.k(H.f(a,"$isw"),"$isbV").c.a===69)},"$1","gh2",4,0,0],
jS:[function(a){this.ds(H.k(H.f(a,"$isw"),"$isbY").x.a===2)},"$1","gh8",4,0,0],
ds:function(a){var z,y,x,w,v,u,t
z=this.f
if(z==null)return
if(a){y=this.dF(z,this.dK())
z=y.a
this.f=z
x=$.$get$cO()
w=this.e
if(w>>>0!==w||w>=20)return H.e(x,w)
v=x[w]
if(v===106){x=y.b
w=$.$get$ba()
u=$.$get$b9()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=108
else{w=$.$get$bS()
u=$.$get$bR()
if((x&(w.a|u.a))!==0)v=107}}else if(v===115){x=y.b
w=$.$get$ba()
u=$.$get$b9()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=117
else{w=$.$get$bS()
u=$.$get$bR()
if((x&(w.a|u.a))!==0)v=116}}}else v=0
t=z.f
if(t!=null){t.aa(z.a,z.b,z.c,v)
t.r=!0
if(this.f.a<=0){z=t.gam(t)
if(!(z==null))z.r=!0}if(this.f.c<=0){z=t.gcG(t)
if(!(z==null))z.r=!0}if(this.f.a>=15){z=t.gas(t)
if(!(z==null))z.r=!0}if(this.f.c>=15){z=t.gcV()
if(!(z==null))z.r=!0}}},
jD:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cM(a.a)+0.5
v=J.cM(a.b)+0.5
u=J.cM(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.v()
if(this.ai(z,y-0.25,x)){y=v-0.25
this.a.x.sK(0)}if(this.ai(z,y-2+0.25,x)){y=v+0.25
this.a.x.sK(0)
this.d=!0}if(typeof z!=="number")return z.v()
t=z-0.25
s=y-0.5
if(this.ai(t,s,x)||this.ai(t,y-1.5,x)){z=w-0.25
this.a.r.sK(0)}else{t=z+0.25
if(this.ai(t,s,x)||this.ai(t,y-1.5,x)){z=w+0.25
this.a.r.sK(0)}}if(typeof x!=="number")return x.v()
t=x-0.25
if(this.ai(z,s,t)||this.ai(z,y-1.5,t)){x=u-0.25
this.a.y.sK(0)}else{t=x+0.25
if(this.ai(z,s,t)||this.ai(z,y-1.5,t)){x=u+0.25
this.a.y.sK(0)}}t=this.c
while(!0){r=t.a6(z,y-2+0.25,x)
s=r.gaV(r)
if(!(s>=100&&s<=117)){r=t.a6(z,y,x)
s=r.gaV(r)
q=s>=100&&s<=117
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sK(0)
this.d=!0}return new V.u(z,y,x)},"$2","gfT",8,0,48],
dK:function(){var z=this.x.f
return V.fk(z.R(new V.u(0,0,0)),z.au(new V.I(0,0,-6)))},
dF:function(a,b){var z,y,x,w,v,u
z=a.a+a.d
y=a.b
x=a.c+a.e
w=V.fn(z,y,x,1,1,1).j7(b)
if(w==null)return
else{v=w.d
u=J.M(v)
if(u.t(v,$.$get$b9()))z-=0.9
else if(u.t(v,$.$get$ba()))z+=1.1
else if(u.t(v,$.$get$bP()))y-=0.9
else if(u.t(v,$.$get$bQ()))y+=1.1
else if(u.t(v,$.$get$bR()))x-=0.9
else if(u.t(v,$.$get$bS()))x+=1.1
else return}return new B.jj(this.c.a6(z,y,x),v)},
kj:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.f(a,"$isw")
z=this.dK()
y=z.a
x=z.d
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.h(x)
w=z.b
v=z.e
if(typeof w!=="number")return w.n()
if(typeof v!=="number")return H.h(v)
u=z.c
t=z.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.h(t)
s=V.fk(new V.u(y+x,w+v,u+t),new V.I(x,v,t).N(0))
r=this.c.a6(y,w,u)
q=0
while(!0){y=r!=null
if(!(y&&r.gaV(r)===0))break
y=this.dF(r,s)
r=y==null?null:y.a;++q}if(y)y=q<1||r.gaV(r)===0||r.gaV(r)===100
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a4()
x=$.$get$a7()
p=B.dV(null,new Z.ag(y.a|x.a))
x=this.f
o=new V.u(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
n=p.a1(0)
x=$.$get$cm()
y=$.$get$cr()
w=$.$get$cs()
v=$.$get$cn()
p.a3(n,o,x,y,w,v,$.$get$ct(),!0,1.1)
u=$.$get$cp()
t=$.$get$ck()
m=$.$get$cl()
l=$.$get$cq()
p.a3(n,o,u,t,m,l,$.$get$co(),!0,1.1)
p.a3(n,o,x,t,u,y,$.$get$dx(),!0,1.1)
p.a3(n,o,w,l,m,v,$.$get$dy(),!0,1.1)
p.a3(n,o,y,u,l,w,$.$get$cS(),!0,1.1)
p.a3(n,o,v,m,t,x,$.$get$dw(),!0,1.1)
p.cU(0,H.a([this.cx],[E.ak]))
this.cx.b=!0}},"$1","ghV",4,0,0],
dU:function(){var z,y,x
z=B.dV(this.c.a,null)
y=$.$get$cO()
x=this.e
if(x>>>0!==x||x>=20)return H.e(y,x)
z.dj(null,0,0,0,y[x],!1,1)
z.cU(0,this.db)},
p:{
js:function(a,b){var z=new B.jr(b)
z.f7(a,b)
return z}}},
jt:{"^":"q:9;a",
$1:function(a){var z,y,x
H.f(a,"$isw")
z=this.a
y=z.a
z=V.f6(-z.b.c.d)
if(!J.Z(y.z,z)){x=y.z
y.z=z
y.Q=z.br(0)
z=new D.H("velocityRotation",x,y.z,y,[V.aW])
z.b=!0
y.I(z)}}},
jZ:{"^":"b;a,b,0c",
ir:function(a){var z,y,x
for(z=15;z>=0;--z)for(y=47;y>=-1;--y)for(x=15;x>=0;--x)this.dj(a,z,y,x,a.aW(z,y,x),!1,1)},
cU:function(a,b){var z,y,x,w
H.p(b,"$isd",[E.ak],"$asd")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.c
if(z>=x.length)return H.e(x,z)
w=x[z]
if(w!=null){y.sdd(w)
y.b=w.f.length!==0}else{y.sdd(null)
y.b=!1}}this.c=null},
a1:function(a){var z,y
H.B(a)
z=this.c
if(a>>>0!==a||a>=z.length)return H.e(z,a)
y=z[a]
if(y==null){z=this.b
y=new F.fl(z)
y.b=z.ge0(z)
y.c=z.gbi(z)
y.d=0
y.f=H.a([],[P.z])
z=[P.m]
y.r=H.a([],z)
y.x=H.a([],z)
y.y=H.a([],z)
z=this.c;(z&&C.a).l(z,a,y)}return y},
dj:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.u(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.u(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.dk(a,y,z,e,!1,g)
else if(e>=200&&e<=205)if(e===201){x=this.a.c.j(0,201)
w=J.ap(x)
this.bH(this.a1(w.j(x,0)),y,0.3141592653589793)
this.bH(this.a1(w.j(x,0)),y,1.7278759594743864)
this.bH(this.a1(w.j(x,0)),y,3.6128315516282616)
this.bH(this.a1(w.j(x,0)),y,5.026548245743669)}else if(e===205)this.fs(y)
else{x=this.a.c.j(0,e)
w=J.ap(x)
this.dq(this.a1(w.j(x,0)),y,0.39269908169872414,!0)
this.dq(this.a1(w.j(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.dk(a,y,z,e,!1,g)},
b3:function(a,b,c,d){var z,y
z=$.$get$a4()
y=$.$get$a7()
return F.bB(null,null,null,a,b,new V.P(c,d),null,new Z.ag(z.a|y.a|$.$get$ah().a),0)},
a3:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.bo(H.a([this.b3(b.n(0,c.k(0,i)),g,0,0),this.b3(b.n(0,d.k(0,i)),g,0,1),this.b3(b.n(0,e.k(0,i)),g,1,1),this.b3(b.n(0,f.k(0,i)),g,1,0)],[F.c3]))
y=z+1
x=z+2
w=z+3
v=[P.m]
a.bn(H.a([z,y,x,w],v))
if(h)a.bn(H.a([x,y,z,w],v))},
dk:function(a,b,c,d,e,f){var z=this.a.b.j(0,d)
if(this.b_(a,d,c,0,1,0))this.a3(this.a1(z.a),b,$.$get$cm(),$.$get$cr(),$.$get$cs(),$.$get$cn(),$.$get$ct(),!1,f)
if(this.b_(a,d,c,0,-1,0))this.a3(this.a1(z.b),b,$.$get$cp(),$.$get$ck(),$.$get$cl(),$.$get$cq(),$.$get$co(),!1,f)
if(this.b_(a,d,c,-1,0,0))this.a3(this.a1(z.c),b,$.$get$cm(),$.$get$ck(),$.$get$cp(),$.$get$cr(),$.$get$dx(),!1,f)
if(this.b_(a,d,c,1,0,0))this.a3(this.a1(z.d),b,$.$get$cs(),$.$get$cq(),$.$get$cl(),$.$get$cn(),$.$get$dy(),!1,f)
if(this.b_(a,d,c,0,0,1))this.a3(this.a1(z.e),b,$.$get$cr(),$.$get$cp(),$.$get$cq(),$.$get$cs(),$.$get$cS(),!1,f)
if(this.b_(a,d,c,0,0,-1))this.a3(this.a1(z.f),b,$.$get$cn(),$.$get$cl(),$.$get$ck(),$.$get$cm(),$.$get$dw(),!1,f)},
b_:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.dl(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.i5(b,a.aW(d+J.dl(c.a),e,f+J.dl(c.c)))},
dq:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.a3(a,b,new V.u(z,0,x),new V.u(z,-0.5,x),new V.u(w,-0.5,y),new V.u(w,0,y),new V.I(y,0,z),!0,1)},
bH:function(a,b,c){var z=V.f6(c)
this.a3(a,b,z.R(new V.u(0.4,-0.1,-0.4)),z.R(new V.u(0,-0.5,0)),z.R(new V.u(0.4,-0.1,0.4)),z.R(new V.u(0.8,0,0)),$.$get$ct(),!0,1)},
fs:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a.c.j(0,205)
y=J.ap(z)
x=this.a1(y.j(z,0))
w=this.a1(y.j(z,1))
v=this.a1(y.j(z,2))
z=[F.c3]
u=H.a([],z)
t=H.a([],z)
for(y=a7.a,s=a7.b,r=a7.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aW(o,0,-n,0,1,0,n,0,o)
p=m.R(new V.u(0.07,-0.1,0))
l=p.a
if(typeof y!=="number")return y.n()
if(typeof l!=="number")return H.h(l)
k=p.b
if(typeof s!=="number")return s.n()
if(typeof k!=="number")return H.h(k)
p=p.c
if(typeof r!=="number")return r.n()
if(typeof p!=="number")return H.h(p)
j=$.$get$cS()
i=m.au(j)
h=Math.abs(q-1)
g=$.$get$a4()
f=$.$get$a7()
C.a.h(u,F.bB(null,null,null,new V.u(y+l,s+k,r+p),i,new V.P(h,0),null,new Z.ag(g.a|f.a|$.$get$ah().a),0))
f=m.R(new V.u(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.h(g)
i=f.b
if(typeof i!=="number")return H.h(i)
f=f.c
if(typeof f!=="number")return H.h(f)
j=m.au(j)
p=$.$get$a4()
k=$.$get$a7()
C.a.h(u,F.bB(null,null,null,new V.u(y+g,s+i,r+f),j,new V.P(h,1),null,new Z.ag(p.a|k.a|$.$get$ah().a),0))
e=m.R(new V.u(0.1,-0.5,0))
d=m.R(new V.u(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.h(k)
p=e.b
if(typeof p!=="number")return H.h(p)
h=e.c
if(typeof h!=="number")return H.h(h)
j=$.$get$co()
f=d.a
if(typeof f!=="number")return f.n()
i=d.c
if(typeof i!=="number")return i.n()
g=$.$get$a4()
l=$.$get$a7()
C.a.h(t,F.bB(null,null,null,new V.u(y+k,s+p,r+h),j,new V.P(f+0.5,i+0.5),null,new Z.ag(g.a|l.a|$.$get$ah().a),0))}c=v.bo(u)
b=w.bo(t)
p=P.m
v.ip(P.cz(u.length,new B.k_(c),!0,p))
w.bn(P.cz(t.length,new B.k0(b),!0,p))
a=H.a([],z)
a0=H.a([],z)
C.a.h(a,this.b3(a7.n(0,new V.u(0,0.05,0)),$.$get$ct(),0.5,0.5))
C.a.h(a0,this.b3(a7.n(0,new V.u(0,-0.1,0)),$.$get$co(),0.5,0.5))
for(q=0;q<=1;q+=0.1){z=-6.283185307179586*q
o=Math.cos(z)
n=Math.sin(z)
a1=new V.aW(o,0,-n,0,1,0,n,0,o)
e=a1.R(new V.u(0.4,-0.15,0))
d=a1.R(new V.u(0.5,0,0))
z=e.a
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.h(z)
l=e.b
if(typeof s!=="number")return s.n()
if(typeof l!=="number")return H.h(l)
k=e.c
if(typeof r!=="number")return r.n()
if(typeof k!=="number")return H.h(k)
j=d.a
if(typeof j!=="number")return j.n()
i=d.c
if(typeof i!=="number")return i.n()
h=$.$get$a4()
g=$.$get$a7()
C.a.h(a,F.bB(null,null,null,new V.u(y+z,s+l,r+k),null,new V.P(j+0.5,i+0.5),null,new Z.ag(h.a|g.a|$.$get$ah().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aW(o,0,-n,0,1,0,n,0,o)
a3=a2.R(new V.u(0.4,-0.15,0))
a4=a2.R(new V.u(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.h(g)
h=a3.b
if(typeof h!=="number")return H.h(h)
i=a3.c
if(typeof i!=="number")return H.h(i)
j=a4.a
if(typeof j!=="number")return j.n()
k=a4.c
if(typeof k!=="number")return k.n()
l=$.$get$a4()
z=$.$get$a7()
C.a.h(a0,F.bB(null,null,null,new V.u(y+g,s+h,r+i),null,new V.P(j+0.5,k+0.5),null,new Z.ag(l.a|z.a|$.$get$ah().a),0))}a5=x.bo(a)
a6=w.bo(a0)
x.bn(P.cz(a.length,new B.k1(a5),!0,p))
w.bn(P.cz(a0.length,new B.k2(a6),!0,p))},
p:{
dV:function(a,b){var z,y,x
z=new B.jZ(a,b)
if(b==null){y=$.$get$a4()
x=$.$get$a7()
z.b=new Z.ag(y.a|x.a|$.$get$ah().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.c=H.a(y,[F.fl])
return z}}},
k_:{"^":"q:10;a",
$1:function(a){return this.a+a}},
k0:{"^":"q:10;a",
$1:function(a){return this.a+a}},
k1:{"^":"q:10;a",
$1:function(a){return this.a+a}},
k2:{"^":"q:10;a",
$1:function(a){return this.a+a}},
lb:{"^":"b;a,0b,0c,0d,0e,0f,0r",
fc:function(a,b){var z,y,x,w,v,u,t
z=new B.iH()
z.a=L.jn(b)
z.b=new Uint8Array(484)
this.b=z
z=[B.ew]
this.c=H.a([],z)
this.d=H.a([],z)
this.e=H.a([],[E.ak])
this.r=null
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
C.a.h(this.e,E.bt(null,!0,null,"",null,w))}for(v=0;v<140;++v){z=this.c;(z&&C.a).h(z,B.i9(this))}for(u=-32;u<32;u+=16)for(t=-32;t<32;t+=16)this.b.eo(this.dL(u,t))
P.d3(C.N,this.ghX())
P.d3(C.M,this.gfR())
P.d3(C.K,this.gfz())},
aR:function(a,b){var z,y,x,w
for(z=this.d,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
a6:function(a,b,c){var z,y,x,w,v,u
z=C.d.a2(J.cK(a).ad(a),16)*16
y=C.d.a2(J.cK(c).ad(c),16)*16
if(a<0)z-=16
if(c<0)y-=16
x=this.aR(z,y)
w=C.i.be(a)-z
v=J.cM(b)
u=C.i.be(c)-y
if(w<0)w+=16
return new B.i4(w,v,u<0?u+16:u,z,y,x)},
kk:[function(a){H.f(a,"$isaw")
this.hW(this.f.x.f.R(new V.u(0,0,0)))},"$1","ghX",4,0,14],
jC:[function(a){var z
H.f(a,"$isaw")
z=this.f.x.f.R(new V.u(0,0,0))
this.fQ(z)
this.hw(z)},"$1","gfR",4,0,14],
jA:[function(a){var z,y,x,w
H.f(a,"$isaw")
z=this.a.x
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=x[y]
z=z.f
if(!(z==null))z.e2()}},"$1","gfz",4,0,14],
dL:function(a,b){var z,y
z=this.c
if(0>=z.length)return H.e(z,-1)
y=z.pop()
y.a=a
y.b=b
y.f=!0
y.x=!0
y.saJ(!1)
C.a.h(this.d,y)
return y},
hW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a6(a.a,a.b,a.c)
y=this.r
x=z.f
if(y==null?x!=null:y!==x){this.r=x
y=z.d
w=y-128
v=y+128
x=z.e
u=x-128
t=x+128
for(s=this.d.length-1;s>=0;--s){r=this.d
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.a
if(w<=r)if(v>r){r=q.b
r=u>r||t<=r}else r=!0
else r=!0
if(r){q.f=!1
q.saJ(!1)
q.x=!0
q.r=!1
C.a.W(this.d,q)
r=this.c;(r&&C.a).h(r,q)}}p=y-64
o=y+64
n=x-64
m=x+64
for(l=p;l<o;l+=16)for(k=n;k<m;k+=16)if(this.aR(l,k)==null)this.dL(l,k)}},
fQ:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null)this.b.eo(v)},
hw:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.f&&!s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null){v.f=!1
v.r=!0}},
ae:[function(a,b){var z,y,x,w,v,u,t,s,r
H.f(b,"$isw")
z=this.f.x.f
y=z.R(new V.u(0,0,0))
x=z.R(new V.u(0,0,-16))
w=new V.P(y.a,y.c)
v=new V.P(x.a,x.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.jr()
r.js(w,v)}},"$1","gjq",5,0,0],
p:{
lc:function(a,b){var z=new B.lb(a)
z.fc(a,b)
return z}}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eU.prototype
return J.eT.prototype}if(typeof a=="string")return J.cZ.prototype
if(a==null)return J.eV.prototype
if(typeof a=="boolean")return J.iP.prototype
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cy.prototype
return a}if(a instanceof P.b)return a
return J.dd(a)}
J.ap=function(a){if(typeof a=="string")return J.cZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cy.prototype
return a}if(a instanceof P.b)return a
return J.dd(a)}
J.cJ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cy.prototype
return a}if(a instanceof P.b)return a
return J.dd(a)}
J.cK=function(a){if(typeof a=="number")return J.cY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.d5.prototype
return a}
J.eg=function(a){if(typeof a=="string")return J.cZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.d5.prototype
return a}
J.cf=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cy.prototype
return a}if(a instanceof P.b)return a
return J.dd(a)}
J.Z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)}
J.hR=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cK(a).D(a,b)}
J.em=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hH(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).j(a,b)}
J.di=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hH(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cJ(a).l(a,b,c)}
J.hS=function(a,b){return J.eg(a).J(a,b)}
J.hT=function(a,b,c){return J.cf(a).hy(a,b,c)}
J.hU=function(a,b,c,d){return J.cf(a).dW(a,b,c,d)}
J.hV=function(a,b){return J.eg(a).X(a,b)}
J.dj=function(a,b,c){return J.ap(a).it(a,b,c)}
J.dk=function(a,b){return J.cJ(a).M(a,b)}
J.hW=function(a,b,c,d){return J.cJ(a).aC(a,b,c,d)}
J.cM=function(a){return J.cK(a).be(a)}
J.en=function(a,b){return J.cJ(a).O(a,b)}
J.bq=function(a){return J.M(a).gU(a)}
J.br=function(a){return J.cJ(a).ga4(a)}
J.aB=function(a){return J.ap(a).gm(a)}
J.hX=function(a,b){return J.cf(a).jb(a,b)}
J.dl=function(a){return J.cK(a).ad(a)}
J.ar=function(a){return J.M(a).i(a)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.ds.prototype
C.O=J.t.prototype
C.a=J.bw.prototype
C.m=J.eT.prototype
C.d=J.eU.prototype
C.u=J.eV.prototype
C.i=J.cY.prototype
C.b=J.cZ.prototype
C.V=J.cy.prototype
C.B=H.dP.prototype
C.a_=W.jk.prototype
C.C=J.jq.prototype
C.a0=P.dT.prototype
C.t=J.d5.prototype
C.D=W.c6.prototype
C.E=W.la.prototype
C.G=new P.i2(!1)
C.F=new P.i1(C.G)
C.H=new P.jo()
C.I=new P.kZ()
C.J=new P.lJ()
C.j=new P.m0()
C.c=new A.cR(0,"ColorSourceType.None")
C.h=new A.cR(1,"ColorSourceType.Solid")
C.e=new A.cR(2,"ColorSourceType.Texture2D")
C.f=new A.cR(3,"ColorSourceType.TextureCube")
C.n=new P.aT(0)
C.K=new P.aT(25e4)
C.L=new P.aT(5e6)
C.M=new P.aT(7e4)
C.N=new P.aT(75e4)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.x=H.a(I.aq([127,2047,65535,1114111]),[P.m])
C.o=H.a(I.aq([0,0,32776,33792,1,10240,0,0]),[P.m])
C.p=H.a(I.aq([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.q=H.a(I.aq([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.X=H.a(I.aq([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.a(I.aq([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.r=H.a(I.aq([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.a(I.aq([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.Y=H.a(I.aq([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.a(I.aq([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.W=H.a(I.aq([]),[P.j])
C.Z=new H.ij(0,{},C.W,[P.j,P.j])
C.k=new P.kS(!1)
$.aJ=0
$.bM=null
$.er=null
$.ea=!1
$.hF=null
$.hz=null
$.hN=null
$.dc=null
$.df=null
$.eh=null
$.bF=null
$.ca=null
$.cb=null
$.eb=!1
$.W=C.j
$.eF=null
$.eE=null
$.eD=null
$.eC=null
$.n=V.jd()
$.fe=null
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
I.$lazy(y,x,w)}})(["eB","$get$eB",function(){return H.hE("_$dart_dartClosure")},"dG","$get$dG",function(){return H.hE("_$dart_js")},"fD","$get$fD",function(){return H.aP(H.d4({
toString:function(){return"$receiver$"}}))},"fE","$get$fE",function(){return H.aP(H.d4({$method$:null,
toString:function(){return"$receiver$"}}))},"fF","$get$fF",function(){return H.aP(H.d4(null))},"fG","$get$fG",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fK","$get$fK",function(){return H.aP(H.d4(void 0))},"fL","$get$fL",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fI","$get$fI",function(){return H.aP(H.fJ(null))},"fH","$get$fH",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"fN","$get$fN",function(){return H.aP(H.fJ(void 0))},"fM","$get$fM",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"e5","$get$e5",function(){return P.ld()},"cc","$get$cc",function(){return[]},"fZ","$get$fZ",function(){return P.kW()},"h4","$get$h4",function(){return H.jh(H.bE(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"hp","$get$hp",function(){return P.jK("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hv","$get$hv",function(){return P.mZ()},"ez","$get$ez",function(){return{}},"eI","$get$eI",function(){return H.a([B.aO(5,2),B.aO(2,5),B.aO(-5,2),B.aO(-2,5),B.aO(5,-2),B.aO(2,-5),B.aO(-5,-2),B.aO(-2,-5)],[B.be])},"eJ","$get$eJ",function(){return B.aO(-0.211324865405187,-0.211324865405187)},"dz","$get$dz",function(){return B.aO(0.366025403784439,0.366025403784439)},"h0","$get$h0",function(){return Z.aH(0)},"a4","$get$a4",function(){return Z.aH(1)},"ah","$get$ah",function(){return Z.aH(2)},"b0","$get$b0",function(){return Z.aH(4)},"a7","$get$a7",function(){return Z.aH(8)},"b1","$get$b1",function(){return Z.aH(16)},"c4","$get$c4",function(){return Z.aH(32)},"c5","$get$c5",function(){return Z.aH(64)},"h_","$get$h_",function(){return Z.aH(96)},"bC","$get$bC",function(){return Z.aH(128)},"b_","$get$b_",function(){return Z.aH(256)},"eO","$get$eO",function(){return V.au(0)},"eN","$get$eN",function(){return V.au(511)},"ba","$get$ba",function(){return V.au(1)},"dC","$get$dC",function(){return V.au(2)},"b9","$get$b9",function(){return V.au(4)},"bQ","$get$bQ",function(){return V.au(8)},"dD","$get$dD",function(){return V.au(16)},"bP","$get$bP",function(){return V.au(32)},"bS","$get$bS",function(){return V.au(64)},"eP","$get$eP",function(){return V.au(128)},"bR","$get$bR",function(){return V.au(256)},"dB","$get$dB",function(){return V.au(146)},"cO","$get$cO",function(){return H.a([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.m])},"ct","$get$ct",function(){return V.c2(0,1,0)},"co","$get$co",function(){return V.c2(0,-1,0)},"dx","$get$dx",function(){return V.c2(1,0,0)},"dy","$get$dy",function(){return V.c2(-1,0,0)},"cS","$get$cS",function(){return V.c2(0,0,1)},"dw","$get$dw",function(){return V.c2(0,0,-1)},"cr","$get$cr",function(){return V.bf(-0.5,0.5,0.5)},"cs","$get$cs",function(){return V.bf(0.5,0.5,0.5)},"cp","$get$cp",function(){return V.bf(-0.5,-0.5,0.5)},"cq","$get$cq",function(){return V.bf(0.5,-0.5,0.5)},"cm","$get$cm",function(){return V.bf(-0.5,0.5,-0.5)},"cn","$get$cn",function(){return V.bf(0.5,0.5,-0.5)},"ck","$get$ck",function(){return V.bf(-0.5,-0.5,-0.5)},"cl","$get$cl",function(){return V.bf(0.5,-0.5,-0.5)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.O},{func:1,ret:-1},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.O,args:[F.aD]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.m,[P.i,E.ak]]},{func:1,ret:P.O,args:[D.w]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[P.aw]},{func:1,ret:-1,args:[P.m,[P.i,X.T]]},{func:1,ret:P.j,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.m,[P.i,V.aM]]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:-1,args:[P.m,[P.i,D.a6]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.m,[P.i,U.ab]]},{func:1,ret:P.O,args:[W.al]},{func:1,ret:W.a5,args:[W.L]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aF]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.b2,,],args:[,]},{func:1,ret:P.O,args:[P.a1]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.ad,args:[[P.i,X.T]]},{func:1,ret:P.ad,args:[P.z,P.z]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:P.O,args:[P.j,,]},{func:1,ret:-1,args:[W.c6]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:P.ad,args:[[P.i,D.a6]]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.U,args:[,,]},{func:1,args:[,P.j]},{func:1,ret:P.O,args:[P.j]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[P.j]},{func:1,ret:P.O,args:[P.aw]},{func:1,ret:V.u,args:[V.u,V.u]},{func:1,ret:P.ad,args:[W.L]},{func:1,ret:[P.N,P.j,P.j],args:[[P.N,P.j,P.j],P.j]},{func:1,ret:P.U,args:[P.m]},{func:1,ret:P.O,args:[,],opt:[,]}]
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
if(x==y)H.nE(d||a)
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
Isolate.ce=a.ce
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
if(typeof dartMainRunner==="function")dartMainRunner(B.hK,[])
else B.hK([])})})()
//# sourceMappingURL=main.dart.js.map
