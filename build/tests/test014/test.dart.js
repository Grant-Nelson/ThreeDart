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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dX=function(){}
var dart=[["","",,H,{"^":"",oV:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dZ==null){H.nP()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cn("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dg()]
if(v!=null)return v
v=H.nU(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dg(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
r:{"^":"b;",
B:function(a,b){return a===b},
gX:function(a){return H.bS(a)},
i:["f6",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iP:{"^":"r;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isT:1},
eK:{"^":"r;",
B:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isO:1},
dh:{"^":"r;",
gX:function(a){return 0},
i:["f8",function(a){return String(a)}]},
jw:{"^":"dh;"},
co:{"^":"dh;"},
ci:{"^":"dh;",
i:function(a){var z=a[$.$get$er()]
if(z==null)return this.f8(a)
return"JavaScript function for "+H.k(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscc:1},
bj:{"^":"r;$ti",
h:function(a,b){H.D(b,H.z(a,0))
if(!!a.fixed$length)H.t(P.E("add"))
a.push(b)},
j0:function(a,b){if(!!a.fixed$length)H.t(P.E("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ck(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.t(P.E("remove"))
for(z=0;z<a.length;++z)if(J.W(a[z],b)){a.splice(z,1)
return!0}return!1},
ae:function(a,b){var z,y
H.u(b,"$isi",[H.z(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.E("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aU(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.k(a[y]))
return z.join(b)},
iD:function(a){return this.n(a,"")},
iu:function(a,b,c,d){var z,y,x
H.D(b,d)
H.m(c,{func:1,ret:d,args:[d,H.z(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aU(a))}return y},
is:function(a,b,c){var z,y,x
H.m(b,{func:1,ret:P.T,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aU(a))}throw H.a(H.cF())},
ir:function(a,b){return this.is(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
c4:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
giq:function(a){if(a.length>0)return a[0]
throw H.a(H.cF())},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cF())},
aK:function(a,b,c,d){var z
H.D(d,H.z(a,0))
if(!!a.immutable$list)H.t(P.E("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.S(0,c);z=z.F(0,1))a[z]=d},
e4:function(a,b){var z,y
H.m(b,{func:1,ret:P.T,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aU(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.W(a[z],b))return!0
return!1},
i:function(a){return P.de(a,"[","]")},
ga1:function(a){return new J.ay(a,a.length,0,[H.z(a,0)])},
gX:function(a){return H.bS(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cw(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
return a[b]},
p:function(a,b,c){H.G(b)
H.D(c,H.z(a,0))
if(!!a.immutable$list)H.t(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
a[b]=c},
$isi:1,
$ise:1,
t:{
iO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eH(new Array(a),b)},
eH:function(a,b){return J.bN(H.c(a,[b]))},
bN:function(a){H.c7(a)
a.fixed$length=Array
return a}}},
oU:{"^":"bj;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cg:{"^":"r;",
je:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cT:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eU:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bo:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a0(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.E("Unexpected toString result: "+z))
x=J.aT(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a*b},
bs:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fc:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dV(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dV(a,b)},
dV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aX:function(a,b){var z
if(a>0)z=this.dT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hA:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dT(a,b)},
dT:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isp:1,
$isa7:1},
eJ:{"^":"cg;",$isn:1},
eI:{"^":"cg;"},
ch:{"^":"r;",
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b<0)throw H.a(H.aS(a,b))
if(b>=a.length)H.t(H.aS(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aS(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.J(b)
if(typeof b!=="string")throw H.a(P.cw(b,null,null))
return a+b},
b5:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ai:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ah(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.ai(a,b,0)},
w:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.a(P.ck(b,null,null))
if(b>c)throw H.a(P.ck(b,null,null))
if(c>a.length)throw H.a(P.ck(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.w(a,b,null)},
jh:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iP:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
al:function(a,b){return this.iP(a,b," ")},
eH:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eG:function(a,b){return this.eH(a,b,0)},
ic:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hH(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseY:1,
$isf:1}}],["","",,H,{"^":"",
cZ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cF:function(){return new P.dx("No element")},
iN:function(){return new P.dx("Too many elements")},
x:{"^":"kN;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ascP:function(){return[P.n]},
$asA:function(){return[P.n]},
$asi:function(){return[P.n]},
$ase:function(){return[P.n]}},
ey:{"^":"i;"},
cH:{"^":"ey;$ti",
ga1:function(a){return new H.dl(this,this.gm(this),0,[H.ai(this,"cH",0)])},
de:function(a,b){return this.f7(0,H.m(b,{func:1,ret:P.T,args:[H.ai(this,"cH",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aU(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
j9:{"^":"i;a,b,$ti",
ga1:function(a){return new H.ja(J.b5(this.a),this.b,this.$ti)},
gm:function(a){return J.ap(this.a)},
J:function(a,b){return this.b.$1(J.cv(this.a,b))},
$asi:function(a,b){return[b]}},
ja:{"^":"df;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdf:function(a,b){return[b]}},
jb:{"^":"cH;a,b,$ti",
gm:function(a){return J.ap(this.a)},
J:function(a,b){return this.b.$1(J.cv(this.a,b))},
$ascH:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dK:{"^":"i;a,b,$ti",
ga1:function(a){return new H.li(J.b5(this.a),this.b,this.$ti)}},
li:{"^":"df;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cD:{"^":"b;$ti"},
cP:{"^":"b;$ti",
p:function(a,b,c){H.G(b)
H.D(c,H.ai(this,"cP",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.D(d,H.ai(this,"cP",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kN:{"^":"cG+cP;"}}],["","",,H,{"^":"",
ic:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nI:function(a){return init.types[H.G(a)]},
hz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isK},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bS:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jH:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.J(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$isco){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.au(w,1)
r=H.e_(H.c7(H.bc(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jz:function(){if(!!self.location)return self.location.href
return},
f0:function(a){var z,y,x,w,v
H.c7(a)
z=J.ap(a)
if(typeof z!=="number")return z.f1()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jI:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aX(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.f0(z)},
f1:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.jI(a)}return H.f0(a)},
jJ:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f1()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bT:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aX(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
al:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jG:function(a){return a.b?H.al(a).getUTCFullYear()+0:H.al(a).getFullYear()+0},
jE:function(a){return a.b?H.al(a).getUTCMonth()+1:H.al(a).getMonth()+1},
jA:function(a){return a.b?H.al(a).getUTCDate()+0:H.al(a).getDate()+0},
jB:function(a){return a.b?H.al(a).getUTCHours()+0:H.al(a).getHours()+0},
jD:function(a){return a.b?H.al(a).getUTCMinutes()+0:H.al(a).getMinutes()+0},
jF:function(a){return a.b?H.al(a).getUTCSeconds()+0:H.al(a).getSeconds()+0},
jC:function(a){return a.b?H.al(a).getUTCMilliseconds()+0:H.al(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ah(a))},
h:function(a,b){if(a==null)J.ap(a)
throw H.a(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.G(J.ap(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.ck(b,"index",null)},
nC:function(a,b,c){if(a>c)return new P.cK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cK(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ah:function(a){return new P.aG(!0,a,null,null)},
ns:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.eX()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hI})
z.name=""}else z.toString=H.hI
return z},
hI:function(){return J.ac(this.dartException)},
t:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aU(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.os(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aX(x,16)&8191)===10)switch(w){case 438:return z.$1(H.di(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eW(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.ak(y)
if(m!=null)return z.$1(H.di(H.J(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.di(H.J(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eW(H.J(y),m))}}return z.$1(new H.kM(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f8()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f8()
return a},
bG:function(a){var z
if(a==null)return new H.h2(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h2(a)},
nF:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nR:function(a,b,c,d,e,f){H.d(a,"$iscc")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.w("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nR)
a.$identity=z
return z},
i7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.jP(z).r}else x=d
w=e?Object.create(new H.kf().constructor.prototype):Object.create(new H.d5(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.F()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.em(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nI,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.eh:H.d6
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.em(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i4:function(a,b,c,d){var z=H.d6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
em:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i6(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i4(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.F()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bJ
if(v==null){v=H.cy("self")
$.bJ=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.F()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bJ
if(v==null){v=H.cy("self")
$.bJ=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
i5:function(a,b,c,d){var z,y
z=H.d6
y=H.eh
switch(b?-1:a){case 0:throw H.a(H.jZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i6:function(a,b){var z,y,x,w,v,u,t,s
z=$.bJ
if(z==null){z=H.cy("self")
$.bJ=z}y=$.eg
if(y==null){y=H.cy("receiver")
$.eg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i5(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aH
if(typeof y!=="number")return y.F()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.F()
$.aH=y+1
return new Function(z+y+"}")()},
dV:function(a,b,c,d,e,f,g){var z,y
z=J.bN(H.c7(b))
H.G(c)
y=!!J.L(d).$ise?J.bN(d):d
return H.i7(a,z,c,y,!!e,f,g)},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aD(a,"String"))},
nD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"double"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"num"))},
dT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aD(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aD(a,"int"))},
hE:function(a,b){throw H.a(H.aD(a,H.J(b).substring(3)))},
ok:function(a,b){var z=J.aT(b)
throw H.a(H.i3(a,z.w(b,3,z.gm(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hE(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.ok(a,b)},
c7:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.a(H.aD(a,"List"))},
hB:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.hE(a,b)},
hv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cs:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hv(J.L(a))
if(z==null)return!1
y=H.hy(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.cs(a,b))return a
z=H.cu(b)
y=H.aD(a,z)
throw H.a(y)}finally{$.dQ=!1}},
dY:function(a,b){if(a!=null&&!H.dU(a,b))H.t(H.aD(a,H.cu(b)))
return a},
hm:function(a){var z
if(a instanceof H.l){z=H.hv(J.L(a))
if(z!=null)return H.cu(z)
return"Closure"}return H.bo(a)},
oq:function(a){throw H.a(new P.ii(H.J(a)))},
hw:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bc:function(a){if(a==null)return
return a.$ti},
pY:function(a,b,c){return H.bH(a["$as"+H.k(c)],H.bc(b))},
bb:function(a,b,c,d){var z
H.J(c)
H.G(d)
z=H.bH(a["$as"+H.k(c)],H.bc(b))
return z==null?null:z[d]},
ai:function(a,b,c){var z
H.J(b)
H.G(c)
z=H.bH(a["$as"+H.k(b)],H.bc(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.G(b)
z=H.bc(a)
return z==null?null:z[b]},
cu:function(a){var z=H.bd(a,null)
return z},
bd:function(a,b){var z,y
H.u(b,"$ise",[P.f],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e_(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.ni(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ni:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.u(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bd(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bd(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bd(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bd(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nE(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.J(z[l])
n=n+m+H.bd(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e_:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$ise",[P.f],"$ase")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bd(u,c)}v="<"+z.i(0)+">"
return v},
bH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bc(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hp(H.bH(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.J(b)
H.c7(c)
H.J(d)
if(a==null)return a
z=H.c4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e_(c,0,null)
throw H.a(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hp:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ax(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ax(a[y],b,c[y],d))return!1
return!0},
pW:function(a,b,c){return a.apply(b,H.bH(J.L(b)["$as"+H.k(c)],H.bc(b)))},
hA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="O"||a===-1||a===-2||H.hA(z)}return!1},
dU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="O"||b===-1||b===-2||H.hA(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cs(a,b)}y=J.L(a).constructor
x=H.bc(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ax(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.dU(a,b))throw H.a(H.aD(a,H.cu(b)))
return a},
ax:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="O")return!0
if('func' in c)return H.hy(a,b,c,d)
if('func' in a)return c.builtin$cls==="cc"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,x,d)
else if(H.ax(a,b,x,d))return!0
else{if(!('$is'+"bM" in y.prototype))return!1
w=y.prototype["$as"+"bM"]
v=H.bH(w,z?a.slice(1):null)
return H.ax(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cu(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hp(H.bH(r,z),b,u,d)},
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ax(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ax(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ax(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.oh(m,b,l,d)},
oh:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ax(c[w],d,a[w],b))return!1}return!0},
pX:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
nU:function(a){var z,y,x,w,v,u
z=H.J($.hx.$1(a))
y=$.cX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.J($.ho.$2(a,z))
if(z!=null){y=$.cX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d0(x)
$.cX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d_[z]=x
return x}if(v==="-"){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hD(a,x)
if(v==="*")throw H.a(P.cn(z))
if(init.leafTags[z]===true){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hD(a,x)},
hD:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e0(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d0:function(a){return J.e0(a,!1,null,!!a.$isK)},
og:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d0(z)
else return J.e0(z,c,null,null)},
nP:function(){if(!0===$.dZ)return
$.dZ=!0
H.nQ()},
nQ:function(){var z,y,x,w,v,u,t,s
$.cX=Object.create(null)
$.d_=Object.create(null)
H.nL()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hF.$1(v)
if(u!=null){t=H.og(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nL:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bD(C.R,H.bD(C.W,H.bD(C.x,H.bD(C.x,H.bD(C.V,H.bD(C.S,H.bD(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hx=new H.nM(v)
$.ho=new H.nN(u)
$.hF=new H.nO(t)},
bD:function(a,b){return a(b)||b},
hH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ib:{"^":"b;$ti",
i:function(a){return P.dm(this)},
p:function(a,b,c){H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
return H.ic()},
$isN:1},
id:{"^":"ib;a,b,c,$ti",
gm:function(a){return this.a},
bF:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bF(0,b))return
return this.dK(b)},
dK:function(a){return this.b[H.J(a)]},
L:function(a,b){var z,y,x,w,v
z=H.z(this,1)
H.m(b,{func:1,ret:-1,args:[H.z(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.D(this.dK(v),z))}}},
jO:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jP:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bN(z)
y=z[0]
x=z[1]
return new H.jO(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ky:{"^":"b;a,b,c,d,e,f",
ak:function(a){var z,y,x
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
t:{
aP:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ky(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jt:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eW:function(a,b){return new H.jt(a,b==null?null:b.method)}}},
iS:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
t:{
di:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iS(a,y,z?null:b.receiver)}}},
kM:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
os:{"^":"l:20;a",
$1:function(a){if(!!J.L(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h2:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaC:1},
l:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
geY:function(){return this},
$iscc:1,
geY:function(){return this}},
fd:{"^":"l;"},
kf:{"^":"fd;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d5:{"^":"fd;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d5))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bS(this.a)
else y=typeof z!=="object"?J.c8(z):H.bS(z)
return(y^H.bS(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
t:{
d6:function(a){return a.a},
eh:function(a){return a.c},
cy:function(a){var z,y,x,w,v
z=new H.d5("self","target","receiver","name")
y=J.bN(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kz:{"^":"a9;a",
i:function(a){return this.a},
t:{
aD:function(a,b){return new H.kz("TypeError: "+H.k(P.cC(a))+": type '"+H.hm(a)+"' is not a subtype of type '"+b+"'")}}},
i2:{"^":"a9;a",
i:function(a){return this.a},
t:{
i3:function(a,b){return new H.i2("CastError: "+H.k(P.cC(a))+": type '"+H.hm(a)+"' is not a subtype of type '"+b+"'")}}},
jY:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
t:{
jZ:function(a){return new H.jY(a)}}},
b9:{"^":"eQ;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
giC:function(a){return this.a===0},
gac:function(a){return new H.iY(this,[H.z(this,0)])},
bF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dG(y,b)}else return this.iz(b)},
iz:function(a){var z=this.d
if(z==null)return!1
return this.cW(this.cd(z,this.cV(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.iA(b)},
iA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cd(z,this.cV(a))
x=this.cW(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ck()
this.b=z}this.dz(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ck()
this.c=y}this.dz(y,b,c)}else this.iB(b,c)},
iB:function(a,b){var z,y,x,w
H.D(a,H.z(this,0))
H.D(b,H.z(this,1))
z=this.d
if(z==null){z=this.ck()
this.d=z}y=this.cV(a)
x=this.cd(z,y)
if(x==null)this.cs(z,y,[this.cl(a,b)])
else{w=this.cW(x,a)
if(w>=0)x[w].b=b
else x.push(this.cl(a,b))}},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aU(this))
z=z.c}},
dz:function(a,b,c){var z
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
z=this.bw(a,b)
if(z==null)this.cs(a,b,this.cl(b,c))
else z.b=c},
fL:function(){this.r=this.r+1&67108863},
cl:function(a,b){var z,y
z=new H.iX(H.D(a,H.z(this,0)),H.D(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fL()
return z},
cV:function(a){return J.c8(a)&0x3ffffff},
cW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
i:function(a){return P.dm(this)},
bw:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
cs:function(a,b,c){a[b]=c},
fG:function(a,b){delete a[b]},
dG:function(a,b){return this.bw(a,b)!=null},
ck:function(){var z=Object.create(null)
this.cs(z,"<non-identifier-key>",z)
this.fG(z,"<non-identifier-key>")
return z},
$iseN:1},
iX:{"^":"b;a,b,0c,0d"},
iY:{"^":"ey;a,$ti",
gm:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.iZ(z,z.r,this.$ti)
y.c=z.e
return y}},
iZ:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nM:{"^":"l:20;a",
$1:function(a){return this.a(a)}},
nN:{"^":"l:57;a",
$2:function(a,b){return this.a(a,b)}},
nO:{"^":"l:56;a",
$1:function(a){return this.a(H.J(a))}},
iQ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseY:1,
$isjQ:1,
t:{
iR:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a4("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nE:function(a){return J.eH(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
oj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){return a},
jn:function(a){return new Int8Array(a)},
aR:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aS(b,a))},
nc:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nC(a,b,c))
return b},
eU:{"^":"r;",$iseU:1,"%":"ArrayBuffer"},
ds:{"^":"r;",$isds:1,$iskA:1,"%":"DataView;ArrayBufferView;dr|fX|fY|jo|fZ|h_|ba"},
dr:{"^":"ds;",
gm:function(a){return a.length},
$isK:1,
$asK:I.dX},
jo:{"^":"fY;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
p:function(a,b,c){H.G(b)
H.nD(c)
H.aR(b,a,a.length)
a[b]=c},
$ascD:function(){return[P.p]},
$asA:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
ba:{"^":"h_;",
p:function(a,b,c){H.G(b)
H.G(c)
H.aR(b,a,a.length)
a[b]=c},
$ascD:function(){return[P.n]},
$asA:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]}},
p3:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
p4:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
p5:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
p6:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
p7:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
p8:{"^":"ba;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dt:{"^":"ba;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
c4:function(a,b,c){return new Uint8Array(a.subarray(b,H.nc(b,c,a.length)))},
$isdt:1,
$isS:1,
"%":";Uint8Array"},
fX:{"^":"dr+A;"},
fY:{"^":"fX+cD;"},
fZ:{"^":"dr+A;"},
h_:{"^":"fZ+cD;"}}],["","",,P,{"^":"",
lk:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.np()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bE(new P.lm(z),1)).observe(y,{childList:true})
return new P.ll(z,y,x)}else if(self.setImmediate!=null)return P.nq()
return P.nr()},
pJ:[function(a){self.scheduleImmediate(H.bE(new P.ln(H.m(a,{func:1,ret:-1})),0))},"$1","np",4,0,13],
pK:[function(a){self.setImmediate(H.bE(new P.lo(H.m(a,{func:1,ret:-1})),0))},"$1","nq",4,0,13],
pL:[function(a){P.dD(C.q,H.m(a,{func:1,ret:-1}))},"$1","nr",4,0,13],
dD:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.e.ab(a.a,1000)
return P.mv(z<0?0:z,b)},
fh:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.bv]})
z=C.e.ab(a.a,1000)
return P.mw(z<0?0:z,b)},
nl:function(a,b){if(H.cs(a,{func:1,args:[P.b,P.aC]}))return b.iZ(a,null,P.b,P.aC)
if(H.cs(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nk:function(){var z,y
for(;z=$.bC,z!=null;){$.c2=null
y=z.b
$.bC=y
if(y==null)$.c1=null
z.a.$0()}},
pV:[function(){$.dR=!0
try{P.nk()}finally{$.c2=null
$.dR=!1
if($.bC!=null)$.$get$dL().$1(P.hq())}},"$0","hq",0,0,3],
hl:function(a){var z=new P.fO(H.m(a,{func:1,ret:-1}))
if($.bC==null){$.c1=z
$.bC=z
if(!$.dR)$.$get$dL().$1(P.hq())}else{$.c1.b=z
$.c1=z}},
no:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.bC
if(z==null){P.hl(a)
$.c2=$.c1
return}y=new P.fO(a)
x=$.c2
if(x==null){y.b=z
$.c2=y
$.bC=y}else{y.b=x.b
x.b=y
$.c2=y
if(y.b==null)$.c1=y}},
ol:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.a0
if(C.j===y){P.cW(null,null,C.j,a)
return}y.toString
P.cW(null,null,y,H.m(y.cD(a),z))},
fg:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.a0
if(y===C.j){y.toString
return P.dD(a,b)}return P.dD(a,H.m(y.cD(b),z))},
kv:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.m(b,z)
y=$.a0
if(y===C.j){y.toString
return P.fh(a,b)}x=y.e6(b,P.bv)
$.a0.toString
return P.fh(a,H.m(x,z))},
cV:function(a,b,c,d,e){var z={}
z.a=d
P.no(new P.nm(z,e))},
hh:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.a0
if(y===c)return d.$0()
$.a0=c
z=y
try{y=d.$0()
return y}finally{$.a0=z}},
hi:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.a0
if(y===c)return d.$1(e)
$.a0=c
z=y
try{y=d.$1(e)
return y}finally{$.a0=z}},
nn:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.a0
if(y===c)return d.$2(e,f)
$.a0=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a0=z}},
cW:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cD(d):c.i8(d,-1)
P.hl(d)},
lm:{"^":"l:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ll:{"^":"l:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ln:{"^":"l:0;a",
$0:function(){this.a.$0()}},
lo:{"^":"l:0;a",
$0:function(){this.a.$0()}},
h6:{"^":"b;a,0b,c",
fo:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bE(new P.my(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fp:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bE(new P.mx(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbv:1,
t:{
mv:function(a,b){var z=new P.h6(!0,0)
z.fo(a,b)
return z},
mw:function(a,b){var z=new P.h6(!1,0)
z.fp(a,b)
return z}}},
my:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mx:{"^":"l:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.fc(w,x)}z.c=y
this.d.$1(z)}},
bA:{"^":"b;0a,b,c,d,e,$ti",
iH:function(a){if(this.c!==6)return!0
return this.b.b.da(H.m(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
ix:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.cs(z,{func:1,args:[P.b,P.aC]}))return H.dY(w.j7(z,a.a,a.b,null,y,P.aC),x)
else return H.dY(w.da(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b3:{"^":"b;dU:a<,b,0hq:c<,$ti",
eT:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a0
if(y!==C.j){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nl(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b3(0,$.a0,[c])
w=b==null?1:3
this.dA(new P.bA(x,w,a,b,[z,c]))
return x},
jd:function(a,b){return this.eT(a,null,b)},
dA:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbA")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb3")
z=y.a
if(z<4){y.dA(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cW(null,null,z,H.m(new P.lE(this,a),{func:1,ret:-1}))}},
dQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbA")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb3")
y=u.a
if(y<4){u.dQ(a)
return}this.a=y
this.c=u.c}z.a=this.bz(a)
y=this.b
y.toString
P.cW(null,null,y,H.m(new P.lJ(z,this),{func:1,ret:-1}))}},
co:function(){var z=H.d(this.c,"$isbA")
this.c=null
return this.bz(z)},
bz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dD:function(a){var z,y,x,w
z=H.z(this,0)
H.dY(a,{futureOr:1,type:z})
y=this.$ti
x=H.c4(a,"$isbM",y,"$asbM")
if(x){z=H.c4(a,"$isb3",y,null)
if(z)P.fS(a,this)
else P.lF(a,this)}else{w=this.co()
H.D(a,z)
this.a=4
this.c=a
P.bY(this,w)}},
c8:[function(a,b){var z
H.d(b,"$isaC")
z=this.co()
this.a=8
this.c=new P.aq(a,b)
P.bY(this,z)},function(a){return this.c8(a,null)},"jl","$2","$1","gfB",4,2,52],
$isbM:1,
t:{
lF:function(a,b){var z,y,x
b.a=1
try{a.eT(new P.lG(b),new P.lH(b),null)}catch(x){z=H.ab(x)
y=H.bG(x)
P.ol(new P.lI(b,z,y))}},
fS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb3")
if(z>=4){y=b.co()
b.a=a.a
b.c=a.c
P.bY(b,y)}else{y=H.d(b.c,"$isbA")
b.a=2
b.c=a
a.dQ(y)}},
bY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isaq")
y=y.b
u=v.a
t=v.b
y.toString
P.cV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bY(z.a,b)}y=z.a
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
if(p){H.d(r,"$isaq")
y=y.b
u=r.a
t=r.b
y.toString
P.cV(null,null,y,u,t)
return}o=$.a0
if(o==null?q!=null:o!==q)$.a0=q
else o=null
y=b.c
if(y===8)new P.lM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lL(x,b,r).$0()}else if((y&2)!==0)new P.lK(z,x,b).$0()
if(o!=null)$.a0=o
y=x.b
if(!!J.L(y).$isbM){if(y.a>=4){n=H.d(t.c,"$isbA")
t.c=null
b=t.bz(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fS(y,t)
return}}m=b.b
n=H.d(m.c,"$isbA")
m.c=null
b=m.bz(n)
y=x.a
u=x.b
if(!y){H.D(u,H.z(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaq")
m.a=8
m.c=u}z.a=m
y=m}}}},
lE:{"^":"l:0;a,b",
$0:function(){P.bY(this.a,this.b)}},
lJ:{"^":"l:0;a,b",
$0:function(){P.bY(this.b,this.a.a)}},
lG:{"^":"l:31;a",
$1:function(a){var z=this.a
z.a=0
z.dD(a)}},
lH:{"^":"l:51;a",
$2:function(a,b){this.a.c8(a,H.d(b,"$isaC"))},
$1:function(a){return this.$2(a,null)}},
lI:{"^":"l:0;a,b,c",
$0:function(){this.a.c8(this.b,this.c)}},
lM:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eR(H.m(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bG(v)
if(this.d){w=H.d(this.a.a.c,"$isaq").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaq")
else u.b=new P.aq(y,x)
u.a=!0
return}if(!!J.L(z).$isbM){if(z instanceof P.b3&&z.gdU()>=4){if(z.gdU()===8){w=this.b
w.b=H.d(z.ghq(),"$isaq")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jd(new P.lN(t),null)
w.a=!1}}},
lN:{"^":"l:49;a",
$1:function(a){return this.a}},
lL:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.D(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.da(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bG(t)
x=this.a
x.b=new P.aq(z,y)
x.a=!0}}},
lK:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaq")
w=this.c
if(w.iH(z)&&w.e!=null){v=this.b
v.b=w.ix(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bG(u)
w=H.d(this.a.a.c,"$isaq")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aq(y,x)
s.a=!0}}},
fO:{"^":"b;a,0b"},
dy:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b3(0,$.a0,[P.n])
z.a=0
this.iG(new P.ki(z,this),!0,new P.kj(z,y),y.gfB())
return y}},
ki:{"^":"l;a,b",
$1:function(a){H.D(a,H.ai(this.b,"dy",0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.ai(this.b,"dy",0)]}}},
kj:{"^":"l:0;a,b",
$0:function(){this.b.dD(this.a.a)}},
fb:{"^":"b;$ti"},
kh:{"^":"b;"},
bv:{"^":"b;"},
aq:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa9:1},
n0:{"^":"b;",$ispI:1},
nm:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eX()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
m6:{"^":"n0;",
j8:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.j===$.a0){a.$0()
return}P.hh(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bG(x)
P.cV(null,null,this,z,H.d(y,"$isaC"))}},
j9:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.a0){a.$1(b)
return}P.hi(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bG(x)
P.cV(null,null,this,z,H.d(y,"$isaC"))}},
i8:function(a,b){return new P.m8(this,H.m(a,{func:1,ret:b}),b)},
cD:function(a){return new P.m7(this,H.m(a,{func:1,ret:-1}))},
e6:function(a,b){return new P.m9(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eR:function(a,b){H.m(a,{func:1,ret:b})
if($.a0===C.j)return a.$0()
return P.hh(null,null,this,a,b)},
da:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a0===C.j)return a.$1(b)
return P.hi(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a0===C.j)return a.$2(b,c)
return P.nn(null,null,this,a,b,c,d,e,f)},
iZ:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
m8:{"^":"l;a,b,c",
$0:function(){return this.a.eR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m7:{"^":"l:3;a,b",
$0:function(){return this.a.j8(this.b)}},
m9:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.j9(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j_:function(a,b,c,d,e){return new H.b9(0,0,[d,e])},
j0:function(a,b,c){H.c7(a)
return H.u(H.nF(a,new H.b9(0,0,[b,c])),"$iseN",[b,c],"$aseN")},
dk:function(a,b){return new H.b9(0,0,[a,b])},
cj:function(a,b,c,d){return new P.lU(0,0,[d])},
iM:function(a,b,c){var z,y
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c3()
C.a.h(y,a)
try{P.nj(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.fc(b,H.hB(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
de:function(a,b,c){var z,y,x
if(P.dS(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c3()
C.a.h(y,a)
try{x=z
x.a=P.fc(x.gaT(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
dS:function(a){var z,y
for(z=0;y=$.$get$c3(),z<y.length;++z)if(a===y[z])return!0
return!1},
nj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.H();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
j1:function(a,b,c){var z=P.j_(null,null,null,b,c)
a.L(0,new P.j2(z,b,c))
return z},
eO:function(a,b){var z,y
z=P.cj(null,null,null,b)
for(y=J.b5(a);y.H();)z.h(0,H.D(y.gO(y),b))
return z},
dm:function(a){var z,y,x
z={}
if(P.dS(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c3(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
J.e7(a,new P.j7(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$c3()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
lU:{"^":"lO;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){var z=new P.fW(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscS")!=null}else{y=this.fC(b)
return y}},
fC:function(a){var z=this.d
if(z==null)return!1
return this.cb(this.dL(z,a),a)>=0},
h:function(a,b){var z,y
H.D(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.dB(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.dB(y,b)}else return this.fs(0,b)},
fs:function(a,b){var z,y,x
H.D(b,H.z(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.dE(b)
x=z[y]
if(x==null)z[y]=[this.c7(b)]
else{if(this.cb(x,b)>=0)return!1
x.push(this.c7(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dR(this.c,b)
else return this.hi(0,b)},
hi:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dL(z,b)
x=this.cb(y,b)
if(x<0)return!1
this.dW(y.splice(x,1)[0])
return!0},
dB:function(a,b){H.D(b,H.z(this,0))
if(H.d(a[b],"$iscS")!=null)return!1
a[b]=this.c7(b)
return!0},
dR:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscS")
if(z==null)return!1
this.dW(z)
delete a[b]
return!0},
dC:function(){this.r=this.r+1&67108863},
c7:function(a){var z,y
z=new P.cS(H.D(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dC()
return z},
dW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dC()},
dE:function(a){return J.c8(a)&0x3ffffff},
dL:function(a,b){return a[this.dE(b)]},
cb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
t:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cS:{"^":"b;a,0b,0c"},
fW:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.z(this,0))
this.c=z.b
return!0}}}},
lO:{"^":"k_;"},
j2:{"^":"l:8;a,b,c",
$2:function(a,b){this.a.p(0,H.D(a,this.b),H.D(b,this.c))}},
cG:{"^":"lV;",$isi:1,$ise:1},
A:{"^":"b;$ti",
ga1:function(a){return new H.dl(a,this.gm(a),0,[H.bb(this,a,"A",0)])},
J:function(a,b){return this.j(a,b)},
jg:function(a,b){var z,y,x
z=H.c([],[H.bb(this,a,"A",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
jf:function(a){return this.jg(a,!0)},
aK:function(a,b,c,d){var z
H.D(d,H.bb(this,a,"A",0))
P.aY(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.de(a,"[","]")}},
eQ:{"^":"aj;"},
j7:{"^":"l:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
aj:{"^":"b;$ti",
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bb(this,a,"aj",0),H.bb(this,a,"aj",1)]})
for(z=J.b5(this.gac(a));z.H();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ap(this.gac(a))},
i:function(a){return P.dm(a)},
$isN:1},
mD:{"^":"b;$ti",
p:function(a,b,c){H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
j8:{"^":"b;$ti",
j:function(a,b){return J.e6(this.a,b)},
p:function(a,b,c){J.d1(this.a,H.D(b,H.z(this,0)),H.D(c,H.z(this,1)))},
L:function(a,b){J.e7(this.a,H.m(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]}))},
gm:function(a){return J.ap(this.a)},
i:function(a){return J.ac(this.a)},
$isN:1},
fD:{"^":"mE;a,$ti"},
k1:{"^":"b;$ti",
ae:function(a,b){var z
for(z=J.b5(H.u(b,"$isi",this.$ti,"$asi"));z.H();)this.h(0,z.gO(z))},
i:function(a){return P.de(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.eb("index"))
if(b<0)H.t(P.a5(b,0,null,"index",null))
for(z=new P.fW(this,this.r,this.$ti),z.c=this.e,y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isi:1},
k_:{"^":"k1;"},
lV:{"^":"b+A;"},
mE:{"^":"j8+mD;$ti"}}],["","",,P,{"^":"",i_:{"^":"ca;a",
iK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$fQ()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cZ(C.b.I(b,s))
o=H.cZ(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.w(b,x,y)
w.a+=H.bT(r)
x=s
continue}}throw H.a(P.a4("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.ee(b,u,d,v,t,k)
else{j=C.e.bs(k-1,4)+1
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b5(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ee(b,u,d,v,t,i)
else{j=C.e.bs(i,4)
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b5(b,d,d,j===2?"==":"=")}return b},
$asca:function(){return[[P.e,P.n],P.f]},
t:{
ee:function(a,b,c,d,e,f){if(C.e.bs(f,4)!==0)throw H.a(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a4("Invalid base64 padding, more than two '=' characters",a,b))}}},i0:{"^":"b7;a",
$asb7:function(){return[[P.e,P.n],P.f]}},ca:{"^":"b;$ti"},b7:{"^":"kh;$ti"},iu:{"^":"ca;",
$asca:function(){return[P.f,[P.e,P.n]]}},iI:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iH:{"^":"b7;a",
fD:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.an("")
if(w>b)v.a+=C.b.w(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hV(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb7:function(){return[P.f,P.f]}},l_:{"^":"iu;a",
gio:function(){return C.L}},l6:{"^":"b7;",
bd:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mZ(0,0,x)
if(w.fI(a,b,z)!==z)w.dY(J.hO(a,z-1),0)
return C.a2.c4(x,0,w.b)},
cJ:function(a){return this.bd(a,0,null)},
$asb7:function(){return[P.f,[P.e,P.n]]}},mZ:{"^":"b;a,b,c",
dY:function(a,b){var z,y,x,w,v
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
fI:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dY(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l0:{"^":"b7;a",
bd:function(a,b,c){var z,y,x,w,v
H.u(a,"$ise",[P.n],"$ase")
z=P.l1(!1,a,b,c)
if(z!=null)return z
y=J.ap(a)
P.aY(b,c,y,null,null,null)
x=new P.an("")
w=new P.mW(!1,x,!0,0,0,0)
w.bd(a,b,y)
w.it(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cJ:function(a){return this.bd(a,0,null)},
$asb7:function(){return[[P.e,P.n],P.f]},
t:{
l1:function(a,b,c,d){H.u(b,"$ise",[P.n],"$ase")
if(b instanceof Uint8Array)return P.l2(!1,b,c,d)
return},
l2:function(a,b,c,d){var z,y,x
z=$.$get$fI()
if(z==null)return
y=0===c
if(y&&!0)return P.dI(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.dI(z,b)
return P.dI(z,b.subarray(c,d))},
dI:function(a,b){if(P.l4(b))return
return P.l5(a,b)},
l5:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
l4:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l3:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mW:{"^":"b;a,b,c,d,e,f",
it:function(a,b,c){var z
H.u(b,"$ise",[P.n],"$ase")
if(this.e>0){z=P.a4("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$ise",[P.n],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mY(c)
v=new P.mX(this,b,c,a)
$label0$0:for(u=J.aT(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c1()
if((r&192)!==128){q=P.a4("Bad UTF-8 encoding 0x"+C.e.bo(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.z,q)
if(z<=C.z[q]){q=P.a4("Overlong encoding of 0x"+C.e.bo(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a4("Character outside valid Unicode range: 0x"+C.e.bo(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bT(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dj()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.a4("Negative UTF-8 code unit: -0x"+C.e.bo(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a4("Bad UTF-8 encoding 0x"+C.e.bo(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mY:{"^":"l:50;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$ise",[P.n],"$ase")
z=this.a
for(y=J.aT(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c1()
if((w&127)!==w)return x-b}return z-b}},mX:{"^":"l:48;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cl(this.d,a,b)}}}],["","",,P,{"^":"",
ct:function(a,b,c){var z
H.m(b,{func:1,ret:P.n,args:[P.f]})
z=H.jH(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a4(a,null,null))},
iw:function(a){var z=J.L(a)
if(!!z.$isl)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
j3:function(a,b,c,d){var z,y
H.D(b,d)
z=J.iO(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$ise",[d],"$ase")},
j4:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga1(a);x.H();)C.a.h(y,H.D(x.gO(x),c))
if(b)return y
return H.u(J.bN(y),"$ise",z,"$ase")},
cl:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbj",[z],"$asbj")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.f1(z?C.a.c4(a,b,c):a)}if(!!J.L(a).$isdt)return H.jJ(a,b,P.aY(b,c,a.length,null,null,null))
return P.kk(a,b,c)},
kk:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a5(b,0,J.ap(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.ap(a),null,null))
y=J.b5(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gO(y))}return H.f1(w)},
jR:function(a,b,c){return new H.iQ(a,H.iR(a,!1,!0,!1))},
fF:function(){var z=H.jz()
if(z!=null)return P.kS(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iw(a)},
w:function(a){return new P.fR(a)},
j5:function(a,b,c,d){var z,y
H.m(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e2:function(a){H.oj(a)},
kS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fE(b>0||c<c?C.b.w(a,b,c):a,5,null).geW()
else if(y===32)return P.fE(C.b.w(a,z,c),0,null).geW()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hj(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ji()
if(v>=b)if(P.hj(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.S()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.S()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.S()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ai(a,"..",s)))n=r>s+2&&C.b.ai(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ai(a,"file",b)){if(u<=b){if(!C.b.ai(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b5(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ai(a,"http",b)){if(x&&t+3===s&&C.b.ai(a,"80",t+1))if(b===0&&!0){a=C.b.b5(a,t,s,"")
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
else if(v===z&&C.b.ai(a,"https",b)){if(x&&t+4===s&&C.b.ai(a,"443",t+1))if(b===0&&!0){a=C.b.b5(a,t,s,"")
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
q-=b}return new P.mf(a,v,u,t,s,r,q,o)}return P.mF(a,b,c,v,u,t,s,r,q,o)},
fH:function(a,b){var z=P.f
return C.a.iu(H.c(a.split("&"),[z]),P.dk(z,z),new P.kV(b),[P.N,P.f,P.f])},
kQ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kR(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a0(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ct(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.dj()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ct(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.dj()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kT(a)
y=new P.kU(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a0(a,w)
if(s===58){if(w===b){++w
if(C.b.a0(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kQ(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.e.aX(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
nd:function(){var z,y,x,w,v
z=P.j5(22,new P.nf(),!0,P.S)
y=new P.ne(z)
x=new P.ng()
w=new P.nh()
v=H.d(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isS"),"]",5)
v=H.d(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isS"),"az",21)
v=H.d(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hj:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$ise",[P.n],"$ase")
z=$.$get$hk()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
T:{"^":"b;"},
"+bool":0,
as:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.e.aX(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ik(H.jG(this))
y=P.cb(H.jE(this))
x=P.cb(H.jA(this))
w=P.cb(H.jB(this))
v=P.cb(H.jD(this))
u=P.cb(H.jF(this))
t=P.il(H.jC(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ik:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
il:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cb:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a7;"},
"+double":0,
bg:{"^":"b;a",
k:function(a,b){return new P.bg(C.e.am(this.a*b))},
S:function(a,b){return C.e.S(this.a,H.d(b,"$isbg").a)},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.iq()
y=this.a
if(y<0)return"-"+new P.bg(0-y).i(0)
x=z.$1(C.e.ab(y,6e7)%60)
w=z.$1(C.e.ab(y,1e6)%60)
v=new P.ip().$1(y%1e6)
return""+C.e.ab(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
t:{
ex:function(a,b,c,d,e,f){return new P.bg(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ip:{"^":"l:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iq:{"^":"l:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eX:{"^":"a9;",
i:function(a){return"Throw of null."}},
aG:{"^":"a9;a,b,c,d",
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gca()+y+x
if(!this.a)return w
v=this.gc9()
u=P.cC(this.b)
return w+v+": "+H.k(u)},
t:{
c9:function(a){return new P.aG(!1,null,null,a)},
cw:function(a,b,c){return new P.aG(!0,a,b,c)},
eb:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cK:{"^":"aG;e,f,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
t:{
ck:function(a,b,c){return new P.cK(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cK(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iK:{"^":"aG;e,m:f>,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){if(J.hK(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
t:{
Y:function(a,b,c,d,e){var z=H.G(e!=null?e:J.ap(b))
return new P.iK(b,z,!0,a,c,"Index out of range")}}},
kO:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kO(a)}}},
kL:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cn:function(a){return new P.kL(a)}}},
dx:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
fa:function(a){return new P.dx(a)}}},
ia:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cC(z))+"."},
t:{
aU:function(a){return new P.ia(a)}}},
ju:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f8:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
ii:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fR:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iD:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a4:function(a,b,c){return new P.iD(a,b,c)}}},
cc:{"^":"b;"},
n:{"^":"a7;"},
"+int":0,
i:{"^":"b;$ti",
de:["f7",function(a,b){var z=H.ai(this,"i",0)
return new H.dK(this,H.m(b,{func:1,ret:P.T,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.ga1(this)
for(y=0;z.H();)++y
return y},
gaP:function(a){var z,y
z=this.ga1(this)
if(!z.H())throw H.a(H.cF())
y=z.gO(z)
if(z.H())throw H.a(H.iN())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.eb("index"))
if(b<0)H.t(P.a5(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.H();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
i:function(a){return P.iM(this,"(",")")}},
df:{"^":"b;$ti"},
e:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
O:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a7:{"^":"b;"},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gX:function(a){return H.bS(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aC:{"^":"b;"},
f:{"^":"b;",$iseY:1},
"+String":0,
an:{"^":"b;aT:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isps:1,
t:{
fc:function(a,b,c){var z=J.b5(b)
if(!z.H())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.H())}else{a+=H.k(z.gO(z))
for(;z.H();)a=a+c+H.k(z.gO(z))}return a}}},
kV:{"^":"l:47;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.u(a,"$isN",[z,z],"$asN")
H.J(b)
y=J.aT(b).eG(b,"=")
if(y===-1){if(b!=="")J.d1(a,P.dP(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.au(b,y+1)
z=this.a
J.d1(a,P.dP(x,0,x.length,z,!0),P.dP(w,0,w.length,z,!0))}return a}},
kR:{"^":"l:46;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv4 address, "+a,this.a,b))}},
kT:{"^":"l:45;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kU:{"^":"l:44;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ct(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cT:{"^":"b;c3:a<,b,c,d,eO:e>,f,r,0x,0y,0z,0Q,0ch",
geX:function(){return this.b},
gcU:function(a){var z=this.c
if(z==null)return""
if(C.b.a9(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbX:function(a){var z=this.d
if(z==null)return P.h8(this.a)
return z},
gd5:function(a){var z=this.f
return z==null?"":z},
geB:function(){var z=this.r
return z==null?"":z},
d9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isN",[P.f,null],"$asN")
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
g=P.dO(g,0,0,h)
return new P.cT(i,j,c,f,d,g,this.r)},
eQ:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gd6:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.fD(P.fH(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geC:function(){return this.c!=null},
geF:function(){return this.f!=null},
geD:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
B:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdH){y=this.a
x=b.gc3()
if(y==null?x==null:y===x)if(this.c!=null===b.geC()){y=this.b
x=b.geX()
if(y==null?x==null:y===x){y=this.gcU(this)
x=z.gcU(b)
if(y==null?x==null:y===x){y=this.gbX(this)
x=z.gbX(b)
if(y==null?x==null:y===x)if(this.e===z.geO(b)){y=this.f
x=y==null
if(!x===b.geF()){if(x)y=""
if(y===z.gd5(b)){z=this.r
y=z==null
if(!y===b.geD()){if(y)z=""
z=z===b.geB()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.b.gX(this.i(0))
this.z=z}return z},
$isdH:1,
t:{
cr:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$ise",[P.n],"$ase")
if(c===C.k){z=$.$get$hd().b
if(typeof b!=="string")H.t(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.D(b,H.ai(c,"ca",0))
y=c.gio().cJ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bT(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mQ(a,b,d)
else{if(d===b)P.bZ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mR(a,z,e-1):""
x=P.mK(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mN(P.ct(C.b.w(a,w,g),new P.mG(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mL(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dO(a,h+1,i,null):null
return new P.cT(j,y,x,v,u,t,i<c?P.mJ(a,i+1,c):null)},
h8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bZ:function(a,b,c){throw H.a(P.a4(c,a,b))},
mN:function(a,b){if(a!=null&&a===P.h8(b))return
return a},
mK:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.a0(a,z)!==93)P.bZ(a,b,"Missing end `]` to match `[` in host")
P.fG(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a0(a,y)===58){P.fG(a,b,c)
return"["+a+"]"}return P.mT(a,b,c)},
mT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a0(a,z)
if(v===37){u=P.hf(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bZ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a0(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h9(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mQ:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hb(C.b.I(a,b)))P.bZ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bZ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mH(y?a.toLowerCase():a)},
mH:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mR:function(a,b,c){return P.c_(a,b,c,C.a_)},
mL:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c_(a,b,c,C.D):C.w.jY(d,new P.mM(),P.f).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a9(w,"/"))w="/"+w
return P.mS(w,e,f)},
mS:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a9(a,"/"))return P.mU(a,!z||c)
return P.mV(a)},
dO:function(a,b,c,d){var z,y
z={}
H.u(d,"$isN",[P.f,null],"$asN")
if(a!=null){if(d!=null)throw H.a(P.c9("Both query and queryParameters specified"))
return P.c_(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.L(0,new P.mO(new P.mP(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mJ:function(a,b,c){return P.c_(a,b,c,C.n)},
hf:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a0(a,b+1)
x=C.b.a0(a,z)
w=H.cZ(y)
v=H.cZ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aX(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bT(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
h9:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.hA(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.cl(y,0,null)},
c_:function(a,b,c,d){var z=P.he(a,b,c,H.u(d,"$ise",[P.n],"$ase"),!1)
return z==null?C.b.w(a,b,c):z},
he:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$ise",[P.n],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a0(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hf(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bZ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a0(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h9(v)}}if(w==null)w=new P.an("")
w.a+=C.b.w(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hc:function(a){if(C.b.a9(a,"."))return!0
return C.b.eG(a,"/.")!==-1},
mV:function(a){var z,y,x,w,v,u,t
if(!P.hc(a))return a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.W(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mU:function(a,b){var z,y,x,w,v,u
if(!P.hc(a))return!b?P.ha(a):a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.p(z,0,P.ha(z[0]))}return C.a.n(z,"/")},
ha:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hb(J.hL(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.au(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mI:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c9("Invalid URL encoding"))}}return z},
dP:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c6(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.x(y.w(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c9("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c9("Truncated URI"))
C.a.h(u,P.mI(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$ise",[P.n],"$ase")
return new P.l0(!1).cJ(u)},
hb:function(a){var z=a|32
return 97<=z&&z<=122}}},
mG:{"^":"l:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.a4("Invalid port",this.a,z+1))}},
mM:{"^":"l:19;",
$1:function(a){return P.cr(C.a0,a,C.k,!1)}},
mP:{"^":"l:33;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cr(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cr(C.p,b,C.k,!0))}}},
mO:{"^":"l:42;a",
$2:function(a,b){var z,y
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(z=J.b5(H.hB(b,"$isi")),y=this.a;z.H();)y.$2(a,H.J(z.gO(z)))}},
kP:{"^":"b;a,b,c",
geW:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.eH(y,"?",z)
w=y.length
if(x>=0){v=P.c_(y,x+1,w,C.n)
w=x}else v=null
z=new P.lt(this,"data",null,null,null,P.c_(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a4("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a4("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.ai(a,"base64",t+1))throw H.a(P.a4("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iK(0,a,s,y)
else{r=P.he(a,s,y,C.n,!0)
if(r!=null)a=C.b.b5(a,s,y,r)}return new P.kP(a,z,c)}}},
nf:{"^":"l:40;",
$1:function(a){return new Uint8Array(96)}},
ne:{"^":"l:37;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hP(z,0,96,b)
return z}},
ng:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
nh:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mf:{"^":"b;a,b,c,d,e,f,r,x,0y",
geC:function(){return this.c>0},
geE:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
geF:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
geD:function(){return this.r<this.a.length},
gdM:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdN:function(){return this.b===5&&C.b.a9(this.a,"https")},
gc3:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdM()){this.x="http"
z="http"}else if(this.gdN()){this.x="https"
z="https"}else if(z===4&&C.b.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
geX:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcU:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbX:function(a){var z
if(this.geE()){z=this.d
if(typeof z!=="number")return z.F()
return P.ct(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdM())return 80
if(this.gdN())return 443
return 0},
geO:function(a){return C.b.w(this.a,this.e,this.f)},
gd5:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.b.w(this.a,z+1,y):""},
geB:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.au(y,z+1):""},
gd6:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.a1
z=P.f
return new P.fD(P.fH(this.gd5(this),C.k),[z,z])},
d9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isN",[P.f,null],"$asN")
i=this.gc3()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.geE()?this.gbX(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.au(y,x+1)
return new P.cT(i,j,c,f,d,g,b)},
eQ:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.b.gX(this.a)
this.y=z}return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdH)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdH:1},
lt:{"^":"cT;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ea:function(a){var z=document.createElement("a")
return z},
d9:function(a,b){var z=document.createElement("canvas")
return z},
ir:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).ar(z,a,b,c)
y.toString
z=W.I
z=new H.dK(new W.aw(y),H.m(new W.is(),{func:1,ret:P.T,args:[z]}),[z])
return H.d(z.gaP(z),"$isX")},
it:function(a){H.d(a,"$isaf")
return"wheel"},
bK:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hS(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iL:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseG")
try{J.hU(z,a)}catch(x){H.ab(x)}return z},
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fV:function(a,b,c,d){var z,y
z=W.cQ(W.cQ(W.cQ(W.cQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hn:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.a0
if(z===C.j)return a
return z.e6(a,b)},
a1:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ou:{"^":"r;0m:length=","%":"AccessibleNodeList"},
ov:{"^":"a1;0a8:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ow:{"^":"a1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ef:{"^":"a1;",$isef:1,"%":"HTMLBaseElement"},
d4:{"^":"r;",$isd4:1,"%":";Blob"},
cx:{"^":"a1;",$iscx:1,"%":"HTMLBodyElement"},
oC:{"^":"a1;0a8:type}","%":"HTMLButtonElement"},
d8:{"^":"a1;",
c2:function(a,b,c){if(c!=null)return a.getContext(b,P.nt(c,null))
return a.getContext(b)},
f_:function(a,b){return this.c2(a,b,null)},
$isd8:1,
"%":"HTMLCanvasElement"},
ek:{"^":"r;",$isek:1,"%":"CanvasRenderingContext2D"},
oE:{"^":"I;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oG:{"^":"ih;0m:length=","%":"CSSPerspective"},
be:{"^":"r;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oH:{"^":"ls;0m:length=",
f0:function(a,b){var z=a.getPropertyValue(this.fw(a,b))
return z==null?"":z},
fw:function(a,b){var z,y
z=$.$get$ep()
y=z[b]
if(typeof y==="string")return y
y=this.hB(a,b)
z[b]=y
return y},
hB:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.im()+b
if(z in a)return z
return b},
gcE:function(a){return a.bottom},
gax:function(a){return a.height},
gb2:function(a){return a.left},
gbk:function(a){return a.right},
gbp:function(a){return a.top},
gaA:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ig:{"^":"b;",
gb2:function(a){return this.f0(a,"left")}},
eq:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ih:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oI:{"^":"eq;0m:length=","%":"CSSTransformValue"},
oJ:{"^":"eq;0m:length=","%":"CSSUnparsedValue"},
oK:{"^":"r;0m:length=","%":"DataTransferItemList"},
bf:{"^":"a1;",$isbf:1,"%":"HTMLDivElement"},
oL:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
oM:{"^":"lv;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.u(c,"$isad",[P.a7],"$asad")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[[P.ad,P.a7]]},
$asA:function(){return[[P.ad,P.a7]]},
$isi:1,
$asi:function(){return[[P.ad,P.a7]]},
$ise:1,
$ase:function(){return[[P.ad,P.a7]]},
$asF:function(){return[[P.ad,P.a7]]},
"%":"ClientRectList|DOMRectList"},
io:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaA(a))+" x "+H.k(this.gax(a))},
B:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aF(b)
return a.left===z.gb2(b)&&a.top===z.gbp(b)&&this.gaA(a)===z.gaA(b)&&this.gax(a)===z.gax(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaA(a)&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF)},
gcE:function(a){return a.bottom},
gax:function(a){return a.height},
gb2:function(a){return a.left},
gbk:function(a){return a.right},
gbp:function(a){return a.top},
gaA:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a7]},
"%":";DOMRectReadOnly"},
oN:{"^":"lx;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.J(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[P.f]},
$asA:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asF:function(){return[P.f]},
"%":"DOMStringList"},
oO:{"^":"r;0m:length=","%":"DOMTokenList"},
lr:{"^":"cG;dJ:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.d(z[b],"$isX")},
p:function(a,b,c){var z
H.G(b)
H.d(c,"$isX")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.jf(this)
return new J.ay(z,z.length,0,[H.z(z,0)])},
aK:function(a,b,c,d){throw H.a(P.cn(null))},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$ase:function(){return[W.X]}},
X:{"^":"I;0ja:tagName=",
gi7:function(a){return new W.ly(a)},
gcI:function(a){return new W.lr(a,a.children)},
ge9:function(a){return P.jN(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a7)},
i:function(a){return a.localName},
ar:["c5",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eA
if(z==null){z=H.c([],[W.aM])
y=new W.eV(z)
C.a.h(z,W.fT(null))
C.a.h(z,W.h3())
$.eA=y
d=y}else d=z
z=$.ez
if(z==null){z=new W.hg(d)
$.ez=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.dc=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.d(y,"$isef")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscx")}z=$.aV
if(!!this.$iscx)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.Z,a.tagName)){$.dc.selectNodeContents(x)
w=$.dc.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.e9(x)
c.dk(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ar(a,b,c,null)},"ih",null,null,"gjW",5,5,null],
f4:function(a,b,c,d){a.textContent=null
a.appendChild(this.ar(a,b,c,d))},
f3:function(a,b){return this.f4(a,b,null,null)},
$isX:1,
"%":";Element"},
is:{"^":"l:24;",
$1:function(a){return!!J.L(H.d(a,"$isI")).$isX}},
oP:{"^":"a1;0a8:type}","%":"HTMLEmbedElement"},
ae:{"^":"r;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"r;",
e_:["f5",function(a,b,c,d){H.m(c,{func:1,args:[W.ae]})
if(c!=null)this.ft(a,b,c,!1)}],
ft:function(a,b,c,d){return a.addEventListener(b,H.bE(H.m(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h0|h1|h4|h5"},
b8:{"^":"d4;",$isb8:1,"%":"File"},
eC:{"^":"lD;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isb8")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.b8]},
$asA:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$iseC:1,
$asF:function(){return[W.b8]},
"%":"FileList"},
oQ:{"^":"af;0m:length=","%":"FileWriter"},
oR:{"^":"a1;0m:length=","%":"HTMLFormElement"},
bi:{"^":"r;",$isbi:1,"%":"Gamepad"},
oS:{"^":"r;0m:length=","%":"History"},
oT:{"^":"lQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isI")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.I]},
$asA:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asF:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cd:{"^":"r;0ea:data=",$iscd:1,"%":"ImageData"},
eF:{"^":"a1;",$iseF:1,"%":"HTMLImageElement"},
eG:{"^":"a1;0a8:type}",$iseG:1,"%":"HTMLInputElement"},
bO:{"^":"dE;",$isbO:1,"%":"KeyboardEvent"},
oX:{"^":"a1;0a8:type}","%":"HTMLLinkElement"},
oY:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
oZ:{"^":"r;0m:length=","%":"MediaList"},
p_:{"^":"af;",
e_:function(a,b,c,d){H.m(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.f5(a,b,c,!1)},
"%":"MessagePort"},
p0:{"^":"lW;",
j:function(a,b){return P.b4(a.get(H.J(b)))},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.jk(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asaj:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIInputMap"},
jk:{"^":"l:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p1:{"^":"lX;",
j:function(a,b){return P.b4(a.get(H.J(b)))},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.jl(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asaj:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
jl:{"^":"l:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"r;",$isbm:1,"%":"MimeType"},
p2:{"^":"lZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbm")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bm]},
$asA:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asF:function(){return[W.bm]},
"%":"MimeTypeArray"},
aA:{"^":"dE;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aw:{"^":"cG;a",
gaP:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fa("No elements"))
if(y>1)throw H.a(P.fa("More than one element"))
return z.firstChild},
ae:function(a,b){var z,y,x,w
H.u(b,"$isi",[W.I],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.G(b)
H.d(c,"$isI")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.eD(z,z.length,-1,[H.bb(C.a3,z,"F",0)])},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asA:function(){return[W.I]},
$asi:function(){return[W.I]},
$ase:function(){return[W.I]}},
I:{"^":"af;0d3:previousSibling=",
j_:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j3:function(a,b){var z,y
try{z=a.parentNode
J.hM(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f6(a):z},
hl:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
p9:{"^":"r;",
iX:[function(a){return a.previousNode()},"$0","gd3",1,0,26],
"%":"NodeIterator"},
jp:{"^":"m0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isI")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.I]},
$asA:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asF:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
pc:{"^":"a1;0a8:type}","%":"HTMLOListElement"},
pd:{"^":"a1;0a8:type}","%":"HTMLObjectElement"},
bn:{"^":"r;0m:length=",$isbn:1,"%":"Plugin"},
pg:{"^":"m4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bn]},
$asA:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asF:function(){return[W.bn]},
"%":"PluginArray"},
pi:{"^":"r;0a8:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pj:{"^":"ma;",
j:function(a,b){return P.b4(a.get(H.J(b)))},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.jX(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asaj:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"RTCStatsReport"},
jX:{"^":"l:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pk:{"^":"a1;0a8:type}","%":"HTMLScriptElement"},
pl:{"^":"a1;0m:length=","%":"HTMLSelectElement"},
bp:{"^":"af;",$isbp:1,"%":"SourceBuffer"},
pm:{"^":"h1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bp]},
$asA:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asF:function(){return[W.bp]},
"%":"SourceBufferList"},
pn:{"^":"a1;0a8:type}","%":"HTMLSourceElement"},
bq:{"^":"r;",$isbq:1,"%":"SpeechGrammar"},
po:{"^":"mh;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bq]},
$asA:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asF:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"r;0m:length=",$isbr:1,"%":"SpeechRecognitionResult"},
pq:{"^":"mk;",
j:function(a,b){return a.getItem(H.J(b))},
p:function(a,b,c){a.setItem(b,H.J(c))},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.kg(z))
return z},
gm:function(a){return a.length},
$asaj:function(){return[P.f,P.f]},
$isN:1,
$asN:function(){return[P.f,P.f]},
"%":"Storage"},
kg:{"^":"l:33;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pt:{"^":"a1;0a8:type}","%":"HTMLStyleElement"},
bs:{"^":"r;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
dz:{"^":"a1;",$isdz:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kl:{"^":"a1;",
ar:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=W.ir("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aw(y).ae(0,new W.aw(z))
return y},
"%":"HTMLTableElement"},
pv:{"^":"a1;",
ar:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ar(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaP(z)
x.toString
z=new W.aw(x)
w=z.gaP(z)
y.toString
w.toString
new W.aw(y).ae(0,new W.aw(w))
return y},
"%":"HTMLTableRowElement"},
pw:{"^":"a1;",
ar:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ar(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaP(z)
y.toString
x.toString
new W.aw(y).ae(0,new W.aw(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"a1;",$isfe:1,"%":"HTMLTemplateElement"},
bt:{"^":"af;",$isbt:1,"%":"TextTrack"},
bu:{"^":"af;",$isbu:1,"%":"TextTrackCue|VTTCue"},
py:{"^":"mu;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bu]},
$asA:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"TextTrackCueList"},
pz:{"^":"h5;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bt]},
$asA:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asF:function(){return[W.bt]},
"%":"TextTrackList"},
pA:{"^":"r;0m:length=","%":"TimeRanges"},
bw:{"^":"r;",$isbw:1,"%":"Touch"},
bx:{"^":"dE;",$isbx:1,"%":"TouchEvent"},
pB:{"^":"mA;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbw")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bw]},
$asA:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asF:function(){return[W.bw]},
"%":"TouchList"},
pC:{"^":"r;0m:length=","%":"TrackDefaultList"},
pE:{"^":"r;",
iX:[function(a){return a.previousNode()},"$0","gd3",1,0,26],
"%":"TreeWalker"},
dE:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pG:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
pH:{"^":"af;0m:length=","%":"VideoTrackList"},
bX:{"^":"aA;",
gik:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gij:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbX:1,
"%":"WheelEvent"},
lj:{"^":"af;",
hm:function(a,b){return a.requestAnimationFrame(H.bE(H.m(b,{func:1,ret:-1,args:[P.a7]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fP:{"^":"I;",$isfP:1,"%":"Attr"},
pM:{"^":"n2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbe")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.be]},
$asA:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$asF:function(){return[W.be]},
"%":"CSSRuleList"},
pN:{"^":"io;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aF(b)
return a.left===z.gb2(b)&&a.top===z.gbp(b)&&a.width===z.gaA(b)&&a.height===z.gax(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gax:function(a){return a.height},
gaA:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pP:{"^":"n4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbi")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bi]},
$asA:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$asF:function(){return[W.bi]},
"%":"GamepadList"},
pS:{"^":"n6;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isI")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.I]},
$asA:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asF:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pT:{"^":"n8;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.br]},
$asA:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asF:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
pU:{"^":"na;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.d(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bs]},
$asA:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"StyleSheetList"},
lp:{"^":"eQ;dJ:a<",
L:function(a,b){var z,y,x,w,v
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gac(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gac:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.d(z[w],"$isfP")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asaj:function(){return[P.f,P.f]},
$asN:function(){return[P.f,P.f]}},
ly:{"^":"lp;a",
j:function(a,b){return this.a.getAttribute(H.J(b))},
p:function(a,b,c){this.a.setAttribute(b,H.J(c))},
gm:function(a){return this.gac(this).length}},
lz:{"^":"dy;a,b,c,$ti",
iG:function(a,b,c,d){var z=H.z(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.a6(this.a,this.b,a,!1,z)}},
pO:{"^":"lz;a,b,c,$ti"},
lA:{"^":"fb;a,b,c,d,e,$ti",
hF:function(){var z=this.d
if(z!=null&&this.a<=0)J.hN(this.b,this.c,z,!1)},
t:{
a6:function(a,b,c,d,e){var z=c==null?null:W.hn(new W.lB(c),W.ae)
z=new W.lA(0,a,b,z,!1,[e])
z.hF()
return z}}},
lB:{"^":"l:11;a",
$1:function(a){return this.a.$1(H.d(a,"$isae"))}},
cq:{"^":"b;a",
fk:function(a){var z,y
z=$.$get$dM()
if(z.giC(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nJ())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nK())}},
aY:function(a){return $.$get$fU().W(0,W.bK(a))},
aG:function(a,b,c){var z,y,x
z=W.bK(a)
y=$.$get$dM()
x=y.j(0,H.k(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dT(x.$4(a,b,c,this))},
$isaM:1,
t:{
fT:function(a){var z,y
z=W.ea(null)
y=window.location
z=new W.cq(new W.mb(z,y))
z.fk(a)
return z},
pQ:[function(a,b,c,d){H.d(a,"$isX")
H.J(b)
H.J(c)
H.d(d,"$iscq")
return!0},"$4","nJ",16,0,22],
pR:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isX")
H.J(b)
H.J(c)
z=H.d(d,"$iscq").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","nK",16,0,22]}},
F:{"^":"b;$ti",
ga1:function(a){return new W.eD(a,this.gm(a),-1,[H.bb(this,a,"F",0)])},
aK:function(a,b,c,d){H.D(d,H.bb(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eV:{"^":"b;a",
aY:function(a){return C.a.e4(this.a,new W.jr(a))},
aG:function(a,b,c){return C.a.e4(this.a,new W.jq(a,b,c))},
$isaM:1},
jr:{"^":"l:28;a",
$1:function(a){return H.d(a,"$isaM").aY(this.a)}},
jq:{"^":"l:28;a,b,c",
$1:function(a){return H.d(a,"$isaM").aG(this.a,this.b,this.c)}},
mc:{"^":"b;",
fn:function(a,b,c,d){var z,y,x
this.a.ae(0,c)
z=b.de(0,new W.md())
y=b.de(0,new W.me())
this.b.ae(0,z)
x=this.c
x.ae(0,C.A)
x.ae(0,y)},
aY:function(a){return this.a.W(0,W.bK(a))},
aG:["fb",function(a,b,c){var z,y
z=W.bK(a)
y=this.c
if(y.W(0,H.k(z)+"::"+b))return this.d.i5(c)
else if(y.W(0,"*::"+b))return this.d.i5(c)
else{y=this.b
if(y.W(0,H.k(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.k(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isaM:1},
md:{"^":"l:16;",
$1:function(a){return!C.a.W(C.t,H.J(a))}},
me:{"^":"l:16;",
$1:function(a){return C.a.W(C.t,H.J(a))}},
mr:{"^":"mc;e,a,b,c,d",
aG:function(a,b,c){if(this.fb(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
t:{
h3:function(){var z,y,x,w,v
z=P.f
y=P.eO(C.r,z)
x=H.z(C.r,0)
w=H.m(new W.ms(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mr(y,P.cj(null,null,null,z),P.cj(null,null,null,z),P.cj(null,null,null,z),null)
y.fn(null,new H.jb(C.r,w,[x,z]),v,null)
return y}}},
ms:{"^":"l:19;",
$1:function(a){return"TEMPLATE::"+H.k(H.J(a))}},
mq:{"^":"b;",
aY:function(a){var z=J.L(a)
if(!!z.$isf5)return!1
z=!!z.$iscM
if(z&&W.bK(a)==="foreignObject")return!1
if(z)return!0
return!1},
aG:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aY(a)},
$isaM:1},
eD:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aM:{"^":"b;"},
mb:{"^":"b;a,b",$ispF:1},
hg:{"^":"b;a",
dk:function(a){new W.n_(this).$2(a,null)},
ba:function(a,b){if(b==null)J.e9(a)
else b.removeChild(a)},
hs:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hQ(a)
x=y.gdJ().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bK(a)
this.hr(H.d(a,"$isX"),b,z,v,u,H.d(y,"$isN"),H.J(x))}catch(t){if(H.ab(t) instanceof P.aG)throw t
else{this.ba(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hr:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ba(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aY(a)){this.ba(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aG(a,"is",g)){this.ba(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gac(f)
y=H.c(z.slice(0),[H.z(z,0)])
for(x=f.gac(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.aG(a,J.hW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfe)this.dk(a.content)},
$ispa:1},
n_:{"^":"l:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hs(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ba(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hR(z)}catch(w){H.ab(w)
v=H.d(z,"$isI")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isI")}}},
ls:{"^":"r+ig;"},
lu:{"^":"r+A;"},
lv:{"^":"lu+F;"},
lw:{"^":"r+A;"},
lx:{"^":"lw+F;"},
lC:{"^":"r+A;"},
lD:{"^":"lC+F;"},
lP:{"^":"r+A;"},
lQ:{"^":"lP+F;"},
lW:{"^":"r+aj;"},
lX:{"^":"r+aj;"},
lY:{"^":"r+A;"},
lZ:{"^":"lY+F;"},
m_:{"^":"r+A;"},
m0:{"^":"m_+F;"},
m3:{"^":"r+A;"},
m4:{"^":"m3+F;"},
ma:{"^":"r+aj;"},
h0:{"^":"af+A;"},
h1:{"^":"h0+F;"},
mg:{"^":"r+A;"},
mh:{"^":"mg+F;"},
mk:{"^":"r+aj;"},
mt:{"^":"r+A;"},
mu:{"^":"mt+F;"},
h4:{"^":"af+A;"},
h5:{"^":"h4+F;"},
mz:{"^":"r+A;"},
mA:{"^":"mz+F;"},
n1:{"^":"r+A;"},
n2:{"^":"n1+F;"},
n3:{"^":"r+A;"},
n4:{"^":"n3+F;"},
n5:{"^":"r+A;"},
n6:{"^":"n5+F;"},
n7:{"^":"r+A;"},
n8:{"^":"n7+F;"},
n9:{"^":"r+A;"},
na:{"^":"n9+F;"}}],["","",,P,{"^":"",
nw:function(a){var z,y
z=J.L(a)
if(!!z.$iscd){y=z.gea(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h7(a.data,a.height,a.width)},
nv:function(a){if(a instanceof P.h7)return{data:a.a,height:a.b,width:a.c}
return a},
b4:function(a){var z,y,x,w,v
if(a==null)return
z=P.dk(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.J(y[w])
z.p(0,v,a[v])}return z},
nt:function(a,b){var z={}
a.L(0,new P.nu(z))
return z},
ew:function(){var z=$.ev
if(z==null){z=J.d2(window.navigator.userAgent,"Opera",0)
$.ev=z}return z},
im:function(){var z,y
z=$.es
if(z!=null)return z
y=$.et
if(y==null){y=J.d2(window.navigator.userAgent,"Firefox",0)
$.et=y}if(y)z="-moz-"
else{y=$.eu
if(y==null){y=!P.ew()&&J.d2(window.navigator.userAgent,"Trident/",0)
$.eu=y}if(y)z="-ms-"
else z=P.ew()?"-o-":"-webkit-"}$.es=z
return z},
mn:{"^":"b;",
ez:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dd:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isas)return new Date(a.a)
if(!!y.$isjQ)throw H.a(P.cn("structured clone of RegExp"))
if(!!y.$isb8)return a
if(!!y.$isd4)return a
if(!!y.$iseC)return a
if(!!y.$iscd)return a
if(!!y.$iseU||!!y.$isds)return a
if(!!y.$isN){x=this.ez(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.L(a,new P.mp(z,this))
return z.a}if(!!y.$ise){x=this.ez(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.ig(a,x)}throw H.a(P.cn("structured clone of other type"))},
ig:function(a,b){var z,y,x,w
z=J.aT(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.dd(z.j(a,w)))
return x}},
mp:{"^":"l:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.dd(b)}},
h7:{"^":"b;ea:a>,b,c",$iscd:1},
nu:{"^":"l:8;a",
$2:function(a,b){this.a[a]=b}},
mo:{"^":"mn;a,b"},
iA:{"^":"cG;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.ai(z,"A",0)
x=W.X
return new H.j9(new H.dK(z,H.m(new P.iB(),{func:1,ret:P.T,args:[y]}),[y]),H.m(new P.iC(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.G(b)
H.d(c,"$isX")
z=this.gbx()
J.hT(z.b.$1(J.cv(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.ap(this.gbx().a)},
j:function(a,b){var z=this.gbx()
return z.b.$1(J.cv(z.a,b))},
ga1:function(a){var z=P.j4(this.gbx(),!1,W.X)
return new J.ay(z,z.length,0,[H.z(z,0)])},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$ase:function(){return[W.X]}},
iB:{"^":"l:24;",
$1:function(a){return!!J.L(H.d(a,"$isI")).$isX}},
iC:{"^":"l:58;",
$1:function(a){return H.j(H.d(a,"$isI"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m5:{"^":"b;$ti",
gbk:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.D(z+this.c,H.z(this,0))},
gcE:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.D(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=this.a
y=J.aF(b)
x=y.gb2(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbp(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.D(z+this.c,w)===y.gbk(b)){if(typeof x!=="number")return x.F()
z=H.D(x+this.d,w)===y.gcE(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.c8(z)
x=this.b
w=J.c8(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.D(x+this.d,v)
return P.lR(P.cR(P.cR(P.cR(P.cR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"m5;b2:a>,bp:b>,aA:c>,ax:d>,$ti",t:{
jN:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"r;",$isbP:1,"%":"SVGLength"},oW:{"^":"lT;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.d(c,"$isbP")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$asF:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"r;",$isbR:1,"%":"SVGNumber"},pb:{"^":"m2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.d(c,"$isbR")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$asF:function(){return[P.bR]},
"%":"SVGNumberList"},ph:{"^":"r;0m:length=","%":"SVGPointList"},f5:{"^":"cM;0a8:type}",$isf5:1,"%":"SVGScriptElement"},pr:{"^":"mm;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.J(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asF:function(){return[P.f]},
"%":"SVGStringList"},pu:{"^":"cM;0a8:type}","%":"SVGStyleElement"},cM:{"^":"X;",
gcI:function(a){return new P.iA(a,new W.aw(a))},
ar:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aM])
C.a.h(z,W.fT(null))
C.a.h(z,W.h3())
C.a.h(z,new W.mq())
c=new W.hg(new W.eV(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).ih(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aw(w)
u=z.gaP(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscM:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bU:{"^":"r;",$isbU:1,"%":"SVGTransform"},pD:{"^":"mC;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.d(c,"$isbU")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bU]},
$isi:1,
$asi:function(){return[P.bU]},
$ise:1,
$ase:function(){return[P.bU]},
$asF:function(){return[P.bU]},
"%":"SVGTransformList"},lS:{"^":"r+A;"},lT:{"^":"lS+F;"},m1:{"^":"r+A;"},m2:{"^":"m1+F;"},ml:{"^":"r+A;"},mm:{"^":"ml+F;"},mB:{"^":"r+A;"},mC:{"^":"mB+F;"}}],["","",,P,{"^":"",S:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$iskA:1}}],["","",,P,{"^":"",ox:{"^":"r;0m:length=","%":"AudioBuffer"},ed:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oy:{"^":"lq;",
j:function(a,b){return P.b4(a.get(H.J(b)))},
L:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new P.hY(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asaj:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"AudioParamMap"},hY:{"^":"l:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},hZ:{"^":"ed;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oz:{"^":"af;0m:length=","%":"AudioTrackList"},i1:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oA:{"^":"ed;0a8:type}","%":"BiquadFilterNode"},pe:{"^":"i1;0m:length=","%":"OfflineAudioContext"},pf:{"^":"hZ;0a8:type}","%":"Oscillator|OscillatorNode"},lq:{"^":"r+aj;"}}],["","",,P,{"^":"",dv:{"^":"r;",
jc:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nv(g))
return}if(!!z.$iseF)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c9("Incorrect number or type of arguments"))},
jb:function(a,b,c,d,e,f,g){return this.jc(a,b,c,d,e,f,g,null,null,null)},
$isdv:1,
"%":"WebGLRenderingContext"},km:{"^":"r;",$iskm:1,"%":"WebGLTexture"},kJ:{"^":"r;",$iskJ:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pp:{"^":"mj;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.b4(a.item(b))},
p:function(a,b,c){H.G(b)
H.d(c,"$isN")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$ise:1,
$ase:function(){return[[P.N,,,]]},
$asF:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},mi:{"^":"r+A;"},mj:{"^":"mi+F;"}}],["","",,O,{"^":"",ar:{"^":"b;0a,0b,0c,0d,$ti",
bv:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dl:function(a,b,c){var z=H.ai(this,"ar",0)
H.m(b,{func:1,ret:P.T,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.m(a,z)
H.m(c,z)
this.b=b
this.c=a
this.d=c},
b7:function(a,b){return this.dl(a,null,b)},
dP:function(a){var z
H.u(a,"$isi",[H.ai(this,"ar",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
du:function(a,b){var z
H.u(b,"$isi",[H.ai(this,"ar",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.z(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ai(this,"ar",0)
H.D(b,z)
z=[z]
if(this.dP(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.du(x,H.c([b],z))}},
ae:function(a,b){var z,y
H.u(b,"$isi",[H.ai(this,"ar",0)],"$asi")
if(this.dP(b)){z=this.a
y=z.length
C.a.ae(z,b)
this.du(y,b)}},
$isi:1,
t:{
da:function(a){var z=new O.ar([a])
z.bv(a)
return z}}},dp:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
fh:function(a){var z=this.b
if(!(z==null))z.E(a)},
aQ:function(){return this.fh(null)},
ga4:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.bl()},
bZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.bl())
else C.a.h(z,a)
this.aQ()},
aM:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",d3:{"^":"b;"},aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aa:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sad:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().K(0,this.geM())
y=this.c
if(y!=null)y.gv().h(0,this.geM())
x=new D.P("shape",z,this.c,this,[F.f6])
x.b=!0
this.b4(x)}},
at:function(a,b){var z
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();)z.d.at(0,b)},
ag:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga4(z))
z.aQ()
a.d4(this.f)
z=a.dy
y=(z&&C.a).gay(z)
if(y!=null&&this.d!=null)y.eP(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();)z.d.ag(a)
a.d2()
a.dx.aM()},
gv:function(){var z=this.z
if(z==null){z=D.M()
this.z=z}return z},
b4:function(a){var z=this.z
if(!(z==null))z.E(a)},
a6:function(){return this.b4(null)},
iO:[function(a){H.d(a,"$isC")
this.e=null
this.b4(a)},function(){return this.iO(null)},"k6","$1","$0","geM",0,2,1],
iM:[function(a){this.b4(H.d(a,"$isC"))},function(){return this.iM(null)},"k0","$1","$0","geL",0,2,1],
k_:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geL(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.bh()
t.d=0
u.saa(t)}t=u.gaa()
t.toString
H.m(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a6()},"$2","giL",8,0,6],
k5:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geL(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.gaa()==null){v=new D.bh()
v.d=0
w.saa(v)}w.gaa().K(0,y)}}this.a6()},"$2","giN",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaL:1,
t:{
eB:function(a,b,c,d,e,f){var z,y
z=new E.aW()
z.a=d
z.b=!0
y=O.da(E.aW)
z.y=y
y.b7(z.giL(),z.giN())
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
z.sad(0,e)
return z}}},jS:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fe:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.as(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dp()
y=[V.aI]
z.a=H.c([],y)
z.gv().h(0,new E.jU(this))
this.cy=z
z=new O.dp()
z.a=H.c([],y)
z.gv().h(0,new E.jV(this))
this.db=z
z=new O.dp()
z.a=H.c([],y)
z.gv().h(0,new E.jW(this))
this.dx=z
z=H.c([],[O.cm])
this.dy=z
C.a.h(z,null)
this.fr=new H.b9(0,0,[P.f,A.dw])},
giY:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga4(z)
y=this.db
y=z.k(0,y.ga4(y))
this.z=y
z=y}return z},
d4:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
d2:function(){var z=this.dy
if(z.length>1)z.pop()},
e3:function(a){var z=a.b
if(z.length===0)throw H.a(P.w("May not cache a shader with no name."))
if(this.fr.bF(0,z))throw H.a(P.w('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.p(0,z,a)},
t:{
jT:function(a,b){var z=new E.jS(a,b)
z.fe(a,b)
return z}}},jU:{"^":"l:12;a",
$1:function(a){var z
H.d(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jV:{"^":"l:12;a",
$1:function(a){var z
H.d(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jW:{"^":"l:12;a",
$1:function(a){var z
H.d(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},ks:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0aa:x@,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
fj:[function(a){var z
H.d(a,"$isC")
z=this.x
if(!(z==null))z.E(a)
this.j5()},function(){return this.fj(null)},"fi","$1","$0","gdv",0,2,1],
giw:function(){var z,y,x
z=Date.now()
y=C.e.ab(P.ex(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
dS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.d.cT(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cT(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fg(C.q,this.gj4())}},
j5:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.ku(this),{func:1,ret:-1,args:[P.a7]})
C.H.fH(z)
C.H.hm(z,W.hn(y,P.a7))}},"$0","gj4",0,0,3],
j2:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.ex(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aQ()
w=x.db
C.a.sm(w.a,0)
w.aQ()
w=x.dx
C.a.sm(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ag(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.ab(v)
y=H.bG(v)
P.e2("Error: "+H.k(z))
P.e2("Stack: "+H.k(y))
throw H.a(z)}},
t:{
kt:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd8)return E.ff(a,!0,!0,!0,!1)
y=W.d9(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcI(a).h(0,y)
w=E.ff(y,!0,!0,!0,!1)
w.a=a
return w},
ff:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ks()
y=P.j0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.l.c2(a,"webgl",y)
x=H.d(x==null?C.l.c2(a,"experimental-webgl",y):x,"$isdv")
if(x==null)H.t(P.w("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jT(x,a)
w=new T.kn(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kW(a)
v=new X.iT()
v.c=new X.aK(!1,!1,!1)
v.d=P.cj(null,null,null,P.n)
w.b=v
v=new X.jm(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j6(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kx(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fb,P.b]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a6(u,"contextmenu",H.m(w.gfY(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a6(a,"focus",H.m(w.gh0(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a6(a,"blur",H.m(w.gfU(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a6(u,"keyup",H.m(w.gh2(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a6(u,"keydown",H.m(w.gh1(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousedown",H.m(w.gh5(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mouseup",H.m(w.gh7(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousemove",H.m(w.gh6(),s),!1,t))
p=w.z
o=W.bX;(p&&C.a).h(p,W.a6(a,H.J(W.it(a)),H.m(w.gh8(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a6(u,"mousemove",H.m(w.gfZ(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a6(u,"mouseup",H.m(w.gh_(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a6(u,"pointerlockchange",H.m(w.gh9(),q),!1,r))
r=w.z
q=W.bx
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a6(a,"touchstart",H.m(w.ghh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchend",H.m(w.ghf(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchmove",H.m(w.ghg(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.dS()
return z}}},ku:{"^":"l:35;a",
$1:function(a){var z
H.oi(a)
z=this.a
if(z.ch){z.ch=!1
z.j2()}}}}],["","",,Z,{"^":"",fM:{"^":"b;a,b",t:{
dJ:function(a,b,c){var z
H.u(c,"$ise",[P.n],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.fM(b,z)}}},ei:{"^":"d3;a,b,c,d,e",
a2:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.w('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fN:{"^":"b;a",$isoB:1},d7:{"^":"b;a,0b,c,d",
aL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a2:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a2(a)},
aO:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ag:function(a){var z,y,x,w,v
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
z=[P.f]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$ispx:1},cE:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},by:{"^":"b;a",
gdn:function(a){var z,y
z=this.a
y=(z&$.$get$aE().a)!==0?3:0
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=2
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=3
if((z&$.$get$bW().a)!==0)y+=4
if((z&$.$get$bz().a)!==0)++y
return(z&$.$get$aZ().a)!==0?y+4:y},
i6:function(a){var z,y,x
z=$.$get$aE()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fL()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.by))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.f])
y=this.a
if((y&$.$get$aE().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b2().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bW().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
av:function(a){return new Z.by(a)}}}}],["","",,D,{"^":"",el:{"^":"b;"},bh:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.m(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
K:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.C(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.L(y,new D.ix(z))
y=this.b
if(!(y==null))C.a.L(y,new D.iy(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
il:function(){return this.E(null)},
j6:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
az:function(a){return this.j6(a,!0,!1)},
t:{
M:function(){var z=new D.bh()
z.d=0
return z}}},ix:{"^":"l:30;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},iy:{"^":"l:30;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},ce:{"^":"C;c,d,a,0b,$ti"},cf:{"^":"C;c,d,a,0b,$ti"},P:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",ej:{"^":"b;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
t:{"^":"oD<"}},eL:{"^":"b;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eM:{"^":"C;c,a,0b"},iT:{"^":"b;0a,0b,0c,0d",
iU:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.E(y)},
iQ:function(a){var z,y
this.c=a.b
this.d.K(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.E(y)}},eP:{"^":"cJ;x,y,c,d,e,a,0b"},j6:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aE:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaZ()
s=new X.bQ(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d1:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
bi:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f2()
if(typeof z!=="number")return z.c1()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
iV:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaZ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dq(new V.a2(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.E(w)
return!0},
h4:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.eP(c,a,this.a.gaZ(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.U(0,0)}},aK:{"^":"b;a,b,c",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aK))return!1
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
return z+(this.c?"Shift+":"")}},bQ:{"^":"cJ;x,y,z,Q,ch,c,d,e,a,0b"},jm:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cc:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaZ()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d1:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.cc(a,b,!0))
return!0},
bi:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f2()
if(typeof z!=="number")return z.c1()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.cc(a,b,!0))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.cc(a,b,!1))
return!0},
iW:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaZ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dq(new V.a2(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.E(x)
return!0},
gec:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
gc0:function(){var z=this.c
if(z==null){z=D.M()
this.c=z}return z},
geK:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z}},dq:{"^":"cJ;x,c,d,e,a,0b"},cJ:{"^":"C;"},fk:{"^":"cJ;x,y,z,Q,ch,c,d,e,a,0b"},kx:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aE:function(a,b){var z,y,x,w
H.u(a,"$ise",[V.U],"$ase")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaZ()
w=new X.fk(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iT:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.b
if(z==null)return!1
z.E(this.aE(a,!0))
return!0},
iR:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.c
if(z==null)return!1
z.E(this.aE(a,!0))
return!0},
iS:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.d
if(z==null)return!1
z.E(this.aE(a,!1))
return!0}},kW:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaZ:function(){var z=this.a
return V.f4(0,0,(z&&C.l).ge9(z).c,C.l.ge9(z).d)},
dH:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eL(z,new X.aK(y,a.altKey,a.shiftKey))},
aW:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
ct:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
aF:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.U(y-w,x-v)},
b9:function(a){return new V.a2(a.movementX,a.movementY)},
cn:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.am(u.pageX)
C.d.am(u.pageY)
s=z.left
C.d.am(u.pageX)
C.a.h(y,new V.U(t-s,C.d.am(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.aK(y,a.altKey,a.shiftKey))},
cf:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.M()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jA:[function(a){this.f=!0},"$1","gh0",4,0,11],
ju:[function(a){this.f=!1},"$1","gfU",4,0,11],
jx:[function(a){H.d(a,"$isaA")
if(this.f&&this.cf(a))a.preventDefault()},"$1","gfY",4,0,4],
jC:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dH(a)
if(this.b.iU(z))a.preventDefault()},"$1","gh2",4,0,29],
jB:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dH(a)
if(this.b.iQ(z))a.preventDefault()},"$1","gh1",4,0,29],
jE:[function(a){var z,y,x,w
H.d(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aW(a)
if(this.x){y=this.aC(a)
x=this.b9(a)
if(this.d.d1(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aF(a)
if(this.c.d1(y,w))a.preventDefault()},"$1","gh5",4,0,4],
jG:[function(a){var z,y,x
H.d(a,"$isaA")
this.aW(a)
z=this.aC(a)
if(this.x){y=this.b9(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bi(z,x))a.preventDefault()},"$1","gh7",4,0,4],
jz:[function(a){var z,y,x
H.d(a,"$isaA")
if(!this.cf(a)){this.aW(a)
z=this.aC(a)
if(this.x){y=this.b9(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bi(z,x))a.preventDefault()}},"$1","gh_",4,0,4],
jF:[function(a){var z,y,x
H.d(a,"$isaA")
this.aW(a)
z=this.aC(a)
if(this.x){y=this.b9(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bh(z,x))a.preventDefault()},"$1","gh6",4,0,4],
jy:[function(a){var z,y,x
H.d(a,"$isaA")
if(!this.cf(a)){this.aW(a)
z=this.aC(a)
if(this.x){y=this.b9(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bh(z,x))a.preventDefault()}},"$1","gfZ",4,0,4],
jH:[function(a){var z,y
H.d(a,"$isbX")
this.aW(a)
z=new V.a2((a&&C.G).gij(a),C.G.gik(a)).A(0,180)
if(this.x){if(this.d.iV(z))a.preventDefault()
return}if(this.r)return
y=this.aF(a)
if(this.c.iW(z,y))a.preventDefault()},"$1","gh8",4,0,39],
jI:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aC(this.y)
v=this.aF(this.y)
this.d.h4(w,v,x)}},"$1","gh9",4,0,11],
jQ:[function(a){var z
H.d(a,"$isbx")
this.a.focus()
this.f=!0
this.ct(a)
z=this.cn(a)
if(this.e.iT(z))a.preventDefault()},"$1","ghh",4,0,15],
jO:[function(a){var z
H.d(a,"$isbx")
this.ct(a)
z=this.cn(a)
if(this.e.iR(z))a.preventDefault()},"$1","ghf",4,0,15],
jP:[function(a){var z
H.d(a,"$isbx")
this.ct(a)
z=this.cn(a)
if(this.e.iS(z))a.preventDefault()},"$1","ghg",4,0,15]}}],["","",,D,{"^":"",cB:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z},
aR:[function(a){var z
H.d(a,"$isC")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aR(null)},"jj","$1","$0","gfm",0,2,1],
$isa8:1,
$isaL:1},a8:{"^":"b;",$isaL:1},iU:{"^":"ar;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.M()
this.Q=z}return z},
aR:function(a){var z=this.Q
if(!(z==null))z.E(a)},
h3:[function(a){var z
H.d(a,"$isC")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.h3(null)},"jD","$1","$0","gdO",0,2,1],
jJ:[function(a){var z,y,x
H.u(a,"$isi",[D.a8],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.fl(x))return!1}return!0},"$1","gha",4,0,41],
jr:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a8
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdO(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.d(b[u],"$isa8")
if(t instanceof D.cB)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bh()
s.d=0
t.d=s}H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.ce(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gfR",8,0,21],
jL:[function(a,b){var z,y,x,w,v,u
z=D.a8
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdO(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.d(b[w],"$isa8")
if(v instanceof D.cB)C.a.K(this.e,v)
u=v.d
if(u==null){u=new D.bh()
u.d=0
v.d=u}u.K(0,x)}z=new D.cf(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghc",8,0,21],
fl:function(a){var z=C.a.W(this.e,a)
return z},
$asi:function(){return[D.a8]},
$asar:function(){return[D.a8]}},jy:{"^":"b;",$isa8:1,$isaL:1},ke:{"^":"b;",$isa8:1,$isaL:1},kp:{"^":"b;",$isa8:1,$isaL:1},kq:{"^":"b;",$isa8:1,$isaL:1},kr:{"^":"b;",$isa8:1,$isaL:1}}],["","",,V,{"^":"",
oF:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jj",8,0,38],
ot:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bs(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.d.eU($.q.$2(a,0)?0:a,b),c+b+1)},
bF:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$ise",[P.p],"$ase")
z=H.c([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.p(z,u,C.b.al(z[u],x))}return z},
e1:function(a,b){return C.d.je(Math.pow(b,C.Q.cT(Math.log(H.ns(a))/Math.log(b))))},
v:{"^":"b;a,b,c",
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
return new V.v(z,y,x)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
az:{"^":"b;a,b,c,d",
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
return new V.az(z,y,x,w)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
cI:{"^":"b;a,b,c,d,e,f,r,x,y",
ah:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscI")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cI(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cI))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.p]
y=V.bF(H.c([this.a,this.d,this.r],z),3,0)
x=V.bF(H.c([this.b,this.e,this.x],z),3,0)
w=V.bF(H.c([this.c,this.f,this.y],z),3,0)
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
aI:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ah:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
cX:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.bl()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isaI")
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
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.Z(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.P()},
eA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bF(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bF(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bF(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bF(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.eA("",3,0)},
G:function(a){return this.eA(a,3,0)},
t:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bl:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eT:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.D(c)))
y=b.aH(z)
x=y.A(0,Math.sqrt(y.D(y)))
w=z.aH(x)
v=new V.H(a.a,a.b,a.c)
return V.aJ(x.a,w.a,z.a,x.T(0).D(v),x.b,w.b,z.b,w.T(0).D(v),x.c,w.c,z.c,z.T(0).D(v),0,0,0,1)}}},
U:{"^":"b;a,b",
M:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
Z:{"^":"b;a,b,c",
F:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
aN:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aN(this.a*b,this.b*b,this.c*b,this.d*b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
f3:{"^":"b;a,b,c,d",
gaf:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f3))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
t:{
f4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f3(a,b,c,d)}}},
a2:{"^":"b;a,b",
iE:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,18],
D:function(a){var z,y,x,w
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
return new V.a2(z*b,y*b)},
A:function(a,b){var z,y
if($.q.$2(b,0))return new V.a2(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a2(z/b,y/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
H:{"^":"b;a,b,c",
iE:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,18],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cY:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aH:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.H(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.q.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
eJ:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i8:{"^":"el;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c6:function(a){var z=V.ot(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.E(a)},
sdf:function(a,b){},
scZ:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c6(z)}z=new D.P("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.U(z)}},
sd0:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c6(z)}z=new D.P("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.U(z)}},
sa3:function(a,b){var z,y
b=this.c6(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.P("location",y,b,this,[P.p])
z.b=!0
this.U(z)}},
sd_:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.P("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.U(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.P("velocity",x,a,this,[P.p])
z.b=!0
this.U(z)}},
scL:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.P("dampening",y,a,this,[P.p])
z.b=!0
this.U(z)}},
at:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
t:{
db:function(){var z=new U.i8()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},en:{"^":"ak;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
b6:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.en))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
t:{
eo:function(a){var z=new U.en()
z.a=a
return z}}},eE:{"^":"ar;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
U:[function(a){var z
H.d(a,"$isC")
z=this.e
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
jq:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ak
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ce(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfQ",8,0,17],
jK:[function(a,b){var z,y,x,w,v
z=U.ak
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gv().K(0,x)}z=new D.cf(a,b,this,[z])
z.b=!0
this.U(z)},"$2","ghb",8,0,17],
b6:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ay(z,z.length,0,[H.z(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.b6(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bl():x
z=this.e
if(!(z==null))z.az(0)}return this.f},
B:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eE))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.W(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ak]},
$asar:function(){return[U.ak]},
$isak:1},ak:{"^":"el;"},kX:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.M()
this.cy=z}return z},
U:[function(a){var z
H.d(a,"$isC")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.gec().h(0,this.gcg())
this.a.c.geK().h(0,this.gci())
this.a.c.gc0().h(0,this.gcj())
return!0},
fM:[function(a){H.d(a,"$isC")
if(!J.W(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcg",4,0,2],
fN:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isC"),"$isbQ")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.a2(y.a,y.b).k(0,2).A(0,z.gaf())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.a2(x.a,x.b).k(0,2).A(0,z.gaf())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa3(0,-v*u+t)
this.b.sV(0)
y=y.M(0,a.z)
this.Q=new V.a2(y.a,y.b).k(0,2).A(0,z.gaf())}this.ao()},"$1","gci",4,0,2],
fO:[function(a){var z,y,x
H.d(a,"$isC")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.ao()}},"$1","gcj",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=b.y
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aJ(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isak:1},kY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.M()
this.fx=z}return z},
U:[function(a){var z
H.d(a,"$isC")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
bb:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gec().h(0,this.gcg())
this.a.c.geK().h(0,this.gci())
this.a.c.gc0().h(0,this.gcj())
z=this.a.d
y=z.f
if(y==null){y=D.M()
z.f=y
z=y}else z=y
z.h(0,this.gfJ())
z=this.a.d
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.gfK())
z=this.a.e
y=z.b
if(y==null){y=D.M()
z.b=y
z=y}else z=y
z.h(0,this.ghE())
z=this.a.e
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.ghD())
z=this.a.e
y=z.c
if(y==null){y=D.M()
z.c=y
z=y}else z=y
z.h(0,this.ghC())
return!0},
av:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.a2(z,y)},
fM:[function(a){a=H.j(H.d(a,"$isC"),"$isbQ")
if(!J.W(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcg",4,0,2],
fN:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isC"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.av(new V.a2(y.a,y.b).k(0,2).A(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).A(0,z.gaf()))}this.ao()},"$1","gci",4,0,2],
fO:[function(a){var z,y,x
H.d(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ao()}},"$1","gcj",4,0,2],
jn:[function(a){if(H.j(H.d(a,"$isC"),"$iseP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfJ",4,0,2],
jo:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isC"),"$isbQ")
if(!J.W(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).A(0,z.gaf()))
this.ao()},"$1","gfK",4,0,2],
jU:[function(a){H.d(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghE",4,0,2],
jT:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isC"),"$isfk")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.av(new V.a2(y.a,y.b).k(0,2).A(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).A(0,z.gaf()))}this.ao()},"$1","ghD",4,0,2],
jS:[function(a){var z,y,x
H.d(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ao()}},"$1","ghC",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.at(0,x)
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aJ(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isak:1},kZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.M()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.E(a)},
bb:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.M()
z.e=y
z=y}else z=y
y=this.gfP()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.M()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jp:[function(a){var z,y,x,w
H.d(a,"$isC")
if(!J.W(this.b,this.a.b.c))return
H.j(a,"$isdq")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.P("zoom",z,w,this,[P.p])
z.b=!0
this.U(z)}},"$1","gfP",4,0,2],
b6:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aJ(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isak:1}}],["","",,M,{"^":"",i9:{"^":"ar;0e,0f,0a,0b,0c,0d",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a7:[function(a){var z
H.d(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a7(null)},"dw","$1","$0","gZ",0,2,1],
jM:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ce(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","ghd",8,0,32],
jN:[function(a,b){var z,y,x,w,v
z=M.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gv().K(0,x)}z=new D.cf(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","ghe",8,0,32],
ag:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();){y=z.d
if(!(y==null))y.ag(a)}this.e=!1},
$asi:function(){return[M.aO]},
$asar:function(){return[M.aO]},
$isaO:1},ie:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a7:[function(a){var z
H.d(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a7(null)},"dw","$1","$0","gZ",0,2,1],
sbc:function(a){var z,y
if(a==null)a=new X.iJ()
z=this.a
if(z!==a){if(z!=null)z.gv().K(0,this.gZ())
y=this.a
this.a=a
a.gv().h(0,this.gZ())
z=new D.P("camera",y,this.a,this,[X.cz])
z.b=!0
this.a7(z)}},
sbl:function(a,b){var z,y
if(b==null)b=X.dd(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().K(0,this.gZ())
y=this.b
this.b=b
b.gv().h(0,this.gZ())
z=new D.P("target",y,this.b,this,[X.dA])
z.b=!0
this.a7(z)}},
sbm:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().K(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gZ())
z=new D.P("technique",y,this.c,this,[O.cm])
z.b=!0
this.a7(z)}},
ag:function(a){a.d4(this.c)
this.b.a2(a)
this.a.a2(a)
this.d.at(0,a)
this.d.ag(a)
this.a.aO(a)
this.b.toString
a.d2()},
$isaO:1},iv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a7:[function(a){var z
H.d(a,"$isC")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a7(null)},"dw","$1","$0","gZ",0,2,1],
jv:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aW
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gaa()==null){s=new D.bh()
s.d=0
t.saa(s)}s=t.gaa()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ce(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gfW",8,0,6],
jw:[function(a,b){var z,y,x,w,v,u
z=E.aW
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.gaa()==null){u=new D.bh()
u.d=0
v.saa(u)}v.gaa().K(0,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gfX",8,0,6],
sbc:function(a){var z,y
if(a==null)a=X.eZ(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gv().K(0,this.gZ())
y=this.a
this.a=a
a.gv().h(0,this.gZ())
z=new D.P("camera",y,this.a,this,[X.cz])
z.b=!0
this.a7(z)}},
sbl:function(a,b){var z,y
if(b==null)b=X.dd(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().K(0,this.gZ())
y=this.b
this.b=b
b.gv().h(0,this.gZ())
z=new D.P("target",y,this.b,this,[X.dA])
z.b=!0
this.a7(z)}},
sbm:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().K(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gZ())
z=new D.P("technique",y,this.c,this,[O.cm])
z.b=!0
this.a7(z)}},
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
ag:function(a){var z
a.d4(this.c)
this.b.a2(a)
this.a.a2(a)
z=this.c
if(z!=null)z.at(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();)z.d.at(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();)z.d.ag(a)
this.a.toString
a.cy.aM()
a.db.aM()
this.b.toString
a.d2()},
$isaO:1},aO:{"^":"b;"}}],["","",,A,{"^":"",ec:{"^":"b;a,b,c"},hX:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
im:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
eb:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eS:{"^":"dw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aw,0as,0bH,0ed,0bI,0bJ,0ee,0ef,0bK,0bL,0eg,0eh,0bM,0bN,0ei,0ej,0bO,0ek,0el,0bP,0em,0en,0bQ,0bR,0bS,0eo,0ep,0bT,0bU,0eq,0er,0bV,0es,0cN,0eu,0cO,0ev,0cP,0ew,0cQ,0ex,0cR,0ey,0cS,a,b,0c,0d,0e,0f,0r,0x,0y",
fd:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.an("")
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
a1.hH(z)
a1.hO(z)
a1.hI(z)
a1.hW(z)
a1.hX(z)
a1.hQ(z)
a1.i0(z)
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
v=this.z
z=new P.an("")
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
v.hL(z)
v.hG(z)
v.hJ(z)
v.hM(z)
v.hU(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hS(z)
v.hT(z)}v.hP(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
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
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.f])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hK(z)
v.hR(z)
v.hV(z)
v.hY(z)
v.hZ(z)
v.i_(z)
v.hN(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.f])
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
n="vec4("+C.a.n(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eI(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.q(0,"invViewMat"),"$isaQ")
if(y)this.dy=H.j(this.y.q(0,"objMat"),"$isaQ")
if(w)this.fr=H.j(this.y.q(0,"viewObjMat"),"$isaQ")
this.fy=H.j(this.y.q(0,"projViewObjMat"),"$isaQ")
if(a1.x2)this.k1=H.j(this.y.q(0,"txt2DMat"),"$isdG")
if(a1.y1)this.k2=H.j(this.y.q(0,"txtCubeMat"),"$isaQ")
if(a1.y2)this.k3=H.j(this.y.q(0,"colorMat"),"$isaQ")
this.r1=H.c([],[A.aQ])
y=a1.aw
if(y>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$isR")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.w("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaQ"))}}y=a1.a
if(y!==C.c){this.r2=H.j(this.y.q(0,"emissionClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.j(this.y.q(0,"emissionTxt"),"$isau")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.j(this.y.q(0,"emissionTxt"),"$isao")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a1.b
if(y!==C.c){this.x2=H.j(this.y.q(0,"ambientClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.j(this.y.q(0,"ambientTxt"),"$isau")
this.aw=H.j(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.j(this.y.q(0,"ambientTxt"),"$isao")
this.aw=H.j(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a1.c
if(y!==C.c){this.as=H.j(this.y.q(0,"diffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.bH=H.j(this.y.q(0,"diffuseTxt"),"$isau")
this.bI=H.j(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.ed=H.j(this.y.q(0,"diffuseTxt"),"$isao")
this.bI=H.j(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a1.d
if(y!==C.c){this.bJ=H.j(this.y.q(0,"invDiffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.ee=H.j(this.y.q(0,"invDiffuseTxt"),"$isau")
this.bK=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.ef=H.j(this.y.q(0,"invDiffuseTxt"),"$isao")
this.bK=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a1.e
if(y!==C.c){this.bN=H.j(this.y.q(0,"shininess"),"$isa3")
this.bL=H.j(this.y.q(0,"specularClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.eg=H.j(this.y.q(0,"specularTxt"),"$isau")
this.bM=H.j(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.eh=H.j(this.y.q(0,"specularTxt"),"$isao")
this.bM=H.j(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.ei=H.j(this.y.q(0,"bumpTxt"),"$isau")
this.bO=H.j(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.ej=H.j(this.y.q(0,"bumpTxt"),"$isao")
this.bO=H.j(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a1.dy){this.ek=H.j(this.y.q(0,"envSampler"),"$isao")
this.el=H.j(this.y.q(0,"nullEnvTxt"),"$isR")
y=a1.r
if(y!==C.c){this.bP=H.j(this.y.q(0,"reflectClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.em=H.j(this.y.q(0,"reflectTxt"),"$isau")
this.bQ=H.j(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.en=H.j(this.y.q(0,"reflectTxt"),"$isao")
this.bQ=H.j(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a1.x
if(y!==C.c){this.bR=H.j(this.y.q(0,"refraction"),"$isa3")
this.bS=H.j(this.y.q(0,"refractClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.f:this.eo=H.j(this.y.q(0,"refractTxt"),"$isau")
this.bT=H.j(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.ep=H.j(this.y.q(0,"refractTxt"),"$isao")
this.bT=H.j(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a1.y
if(y!==C.c){this.bU=H.j(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.f:this.eq=H.j(this.y.q(0,"alphaTxt"),"$isau")
this.bV=H.j(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.er=H.j(this.y.q(0,"alphaTxt"),"$isao")
this.bV=H.j(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cN=H.c([],[A.fx])
this.cO=H.c([],[A.fy])
this.cP=H.c([],[A.fz])
this.cQ=H.c([],[A.fA])
this.cR=H.c([],[A.fB])
this.cS=H.c([],[A.fC])
if(a1.k2){y=a1.z
if(y>0){this.es=H.d(this.y.q(0,"dirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.cN;(x&&C.a).h(x,new A.fx(m,l,k))}}y=a1.Q
if(y>0){this.eu=H.d(this.y.q(0,"pntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa3")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.cO;(x&&C.a).h(x,new A.fy(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ev=H.d(this.y.q(0,"spotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.cP;(x&&C.a).h(x,new A.fz(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ew=H.d(this.y.q(0,"txtDirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isQ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isau")
x=this.cQ;(x&&C.a).h(x,new A.fA(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ex=H.d(this.y.q(0,"txtPntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdG")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isao")
x=this.cR;(x&&C.a).h(x,new A.fB(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ey=H.d(this.y.q(0,"txtSpotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isQ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isQ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.w("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isau")
x=this.cS;(x&&C.a).h(x,new A.fC(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ap:function(a,b,c){b.a.uniform1i(b.d,1)},
aj:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.dm(c)
b.a.uniform1i(b.d,0)}},
t:{
jd:function(a,b){var z,y
z=a.as
y=new A.eS(b,z)
y.dt(b,z)
y.fd(a,b)
return y}}},jg:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aw,as,bH",
hH:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aw+"];\n"
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
hO:function(a){var z
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
hI:function(a){var z
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
hW:function(a){var z,y
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
hX:function(a){var z,y
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
hQ:function(a){var z
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
i0:function(a){var z
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
aD:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.au(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hL:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aD(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hG:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aD(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hJ:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"diffuse")
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
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hM:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"invDiffuse")
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
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hU:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aD(a,z,"specular")
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
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hP:function(a){var z,y
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
case C.h:z+="uniform samplerCube bumpTxt;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hS:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aD(a,z,"reflect")
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
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hT:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aD(a,z,"refract")
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
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hK:function(a){var z,y
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
hR:function(a){var z,y
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
hV:function(a){var z,y
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
hY:function(a){var z,y,x
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
hZ:function(a){var z,y,x
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
i_:function(a){var z,y,x
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
hN:function(a){var z
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
i:function(a){return this.as}},fx:{"^":"b;a,b,c"},fA:{"^":"b;a,b,c,d,e,f,r,x"},fy:{"^":"b;a,b,c,d,e,f,r"},fB:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dw:{"^":"d3;",
dt:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eI:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dI(b,35633)
this.f=this.dI(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dT(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.t(P.w("Failed to link shader: "+H.k(x)))}this.hx()
this.hz()},
a2:function(a){a.a.useProgram(this.r)
this.x.im()},
dI:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.w("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hx:function(){var z,y,x,w,v,u
z=H.c([],[A.ec])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ec(y,v.name,u))}this.x=new A.hX(z)},
hz:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ii(v.type,v.size,v.name,u))}this.y=new A.kI(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.au(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dF(z,y,b,a,c)},
bC:function(a,b){return new P.fR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
ii:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kD(this.a,this.r,c,d)
case 35665:return new A.Q(this.a,this.r,c,d)
case 35666:return new A.kG(this.a,this.r,c,d)
case 35667:return new A.kE(this.a,this.r,c,d)
case 35668:return new A.kF(this.a,this.r,c,d)
case 35669:return new A.kH(this.a,this.r,c,d)
case 35674:return new A.kK(this.a,this.r,c,d)
case 35675:return new A.dG(this.a,this.r,c,d)
case 35676:return new A.aQ(this.a,this.r,c,d)
case 35678:return this.fE(b,c,d)
case 35680:return this.fF(b,c,d)
case 35670:throw H.a(this.bC("BOOL",c))
case 35671:throw H.a(this.bC("BOOL_VEC2",c))
case 35672:throw H.a(this.bC("BOOL_VEC3",c))
case 35673:throw H.a(this.bC("BOOL_VEC4",c))
default:throw H.a(P.w("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cA:{"^":"b;a,b",
i:function(a){return this.b}},f7:{"^":"dw;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ag:{"^":"b;"},kI:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
iv:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.iv("\n")}},R:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},kE:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},kF:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},kH:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},kC:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
t:{
dF:function(a,b,c,d,e){var z=new A.kC(a,b,c,e)
z.f=d
z.e=P.j3(d,0,!1,P.n)
return z}}},a3:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},kD:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},Q:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},kG:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},kK:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dG:{"^":"ag;a,b,c,d",
an:function(a){var z=new Float32Array(H.bB(H.u(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aQ:{"^":"ag;a,b,c,d",
an:function(a){var z=new Float32Array(H.bB(H.u(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},au:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ao:{"^":"ag;a,b,c,d",
dm:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
dW:function(a,b,c,d){var z
H.m(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
z=F.cL()
F.c0(z,b,c,d,a,1,0,0,1)
F.c0(z,b,c,d,a,0,1,0,3)
F.c0(z,b,c,d,a,0,0,1,2)
F.c0(z,b,c,d,a,-1,0,0,0)
F.c0(z,b,c,d,a,0,-1,0,0)
F.c0(z,b,c,d,a,0,0,-1,3)
z.aq()
return z},
cU:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c0:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.m(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
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
z.d=y}l=F.cU(y)
k=F.cU(z.b)
j=F.e4(d,e,new F.nb(z,F.cU(z.c),F.cU(z.d),k,l,c),b)
if(j!=null)a.bg(j)},
hu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.m(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.cL()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.am])
v=z.a
u=new V.H(0,0,y)
u=u.A(0,Math.sqrt(u.D(u)))
C.a.h(w,v.i3(new V.aN(a,-1,-1,-1),new V.az(1,1,1,1),new V.Z(0,0,d),new V.H(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.H(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cp(new V.aN(a,-1,-1,-1),null,new V.az(n,l,m,1),new V.Z(r*p,q*p,d),new V.H(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.e0(w)
return z},
hr:function(a,b,c,d,e,f){return F.hs(!0,c,d,new F.nx(a,f),e)},
hs:function(a,b,c,d,e){var z
H.m(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.e4(c,e,new F.nz(d),null)
if(z==null)return
z.aq()
z.cz()
if(b)z.bg(F.hu(3,!1,!1,1,new F.nA(d),e))
z.bg(F.hu(1,!0,!1,-1,new F.nB(d),e))
return z},
hG:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.m(b,{func:1,ret:P.p,args:[P.p,P.p]})==null)z.a=new F.oo()
y=F.dW(a,null,new F.op(z,c),d)
y.cz()
return y},
hJ:function(a,b,c,d){return F.ht(c,a,d,b,new F.or())},
nS:function(a,b,c,d,e,f){return F.ht(d,a,e,b,new F.nT(f,c))},
ht:function(a,b,c,d,e){var z=F.e4(a,b,new F.ny(H.m(e,{func:1,ret:V.Z,args:[P.p]}),d,b,c),null)
if(z==null)return
z.aq()
z.cz()
return z},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.cL()
y=H.c([],[F.am])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cp(null,null,new V.az(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cK(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cp(null,null,new V.az(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cK(d))}}z.d.i2(a+1,b+1,y)
return z},
nb:{"^":"l:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cY(z.b,b).cY(z.d.cY(z.c,b),c)
a.sa3(0,new V.Z(y.a,y.b,y.c))
a.seS(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.se5(new V.aN(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nx:{"^":"l:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nz:{"^":"l:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa3(0,new V.Z(y,u,w))
u=new V.H(y,u,w)
a.seS(u.A(0,Math.sqrt(u.D(u))))
a.se5(new V.aN(1-c,2+c,-1,-1))}},
nA:{"^":"l:34;a",
$1:function(a){return this.a.$2(a,1)}},
nB:{"^":"l:34;a",
$1:function(a){return this.a.$2(1-a,0)}},
oo:{"^":"l:9;",
$2:function(a,b){return 0}},
op:{"^":"l:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.H(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.D(x))).k(0,this.b+z)
a.sa3(0,new V.Z(z.a,z.b,z.c))}},
or:{"^":"l:23;",
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)}},
nT:{"^":"l:23;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Z(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
ny:{"^":"l:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e5(y.$1(z),x)
x=J.e5(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.D(x)))
u=new V.H(1,0,0)
y=v.aH(!v.B(0,u)?new V.H(0,0,1):u)
t=y.A(0,Math.sqrt(y.D(y)))
y=t.aH(v)
u=y.A(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa3(0,w.F(0,new V.Z(y.a-x.a,y.b-x.b,y.c-x.c)))}},
at:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gbe()){C.a.K(this.a.a.d.b,this)
this.a.a.a6()}this.cp()
this.cq()
this.hk()},
cu:function(a){this.a=a
C.a.h(a.d.b,this)},
cv:function(a){this.b=a
C.a.h(a.d.c,this)},
hw:function(a){this.c=a
C.a.h(a.d.d,this)},
cp:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
cq:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
hk:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
fv:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eJ())return
return v.A(0,Math.sqrt(v.D(v)))},
fA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.M(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aH(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
cH:function(){if(this.d!=null)return!0
var z=this.fv()
if(z==null){z=this.fA()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
fu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eJ())return
return v.A(0,Math.sqrt(v.D(v)))},
fz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.M(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.M(0,u).k(0,l).F(0,u).M(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.aH(m)
z=z.A(0,Math.sqrt(z.D(z))).aH(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
cF:function(){if(this.e!=null)return!0
var z=this.fu()
if(z==null){z=this.fz()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
gib:function(a){if(J.W(this.a,this.b))return!0
if(J.W(this.b,this.c))return!0
if(J.W(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var z,y
if(this.gbe())return a+"disposed"
z=a+C.b.al(J.ac(this.a.e),0)+", "+C.b.al(J.ac(this.b.e),0)+", "+C.b.al(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.G("")},
t:{
bL:function(a,b,c){var z,y,x
z=new F.at()
y=a.a
if(y==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.w("May not create a face with vertices attached to different shapes."))
z.cu(a)
z.cv(b)
z.hw(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},
iz:{"^":"b;"},
ka:{"^":"iz;",
bf:function(a,b,c){var z,y
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
dj:{"^":"b;0a,0b",
aJ:function(){if(!this.gbe()){C.a.K(this.a.a.c.b,this)
this.a.a.a6()}this.cp()
this.cq()},
cu:function(a){this.a=a
C.a.h(a.c.b,this)},
cv:function(a){this.b=a
C.a.h(a.c.c,this)},
cp:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
cq:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gbe:function(){return this.a==null||this.b==null},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gbe())return a+"disposed"
return a+C.b.al(J.ac(this.a.e),0)+", "+C.b.al(J.ac(this.b.e),0)},
P:function(){return this.G("")},
t:{
iV:function(a,b){var z,y,x
z=new F.dj()
y=a.a
if(y==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.t(P.w("May not create a line with vertices attached to different shapes."))
z.cu(a)
z.cv(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a6()
return z}}},
iW:{"^":"b;"},
kB:{"^":"iW;",
bf:function(a,b,c){var z,y
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
du:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.K(z.a.b.b,this)
this.a.a.a6()}this.hj()},
hj:function(){var z=this.a
if(z!=null){C.a.K(z.b.b,this)
this.a=null}},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.al(J.ac(z.e),0)},
P:function(){return this.G("")}},
f6:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.ie())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.du()
if(r.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iV(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bL(p,o,m)}z=this.e
if(!(z==null))z.az(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.az(0)
return y},
iI:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.z(z,0)])
for(z=[F.am];y.length!==0;){x=C.a.giq(y)
C.a.j0(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.bf(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.bg(w)}}this.a.C()
this.c.d7()
this.d.d7()
this.b.j1()
this.c.d8(new F.kB())
this.d.d8(new F.ka())
z=this.e
if(!(z==null))z.az(0)},
i4:function(a){this.iI(new F.lc(),new F.js())},
cz:function(){return this.i4(null)},
e7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aE()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$bV().a)!==0)++w
if((x&$.$get$bW().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
v=b.gdn(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ei])
for(r=0,q=0;q<w;++q){p=b.i6(q)
o=p.gdn(p)
C.a.p(s,q,new Z.ei(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iF(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bB(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d7(new Z.fM(34962,j),s,b)
i.b=H.c([],[Z.cE])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cE(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cE(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cE(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.n(z,"\n")},
b4:function(a){var z=this.e
if(!(z==null))z.E(a)},
a6:function(){return this.b4(null)},
t:{
cL:function(){var z,y
z=new F.f6()
y=new F.l7(z)
y.b=!1
y.c=H.c([],[F.am])
z.a=y
y=new F.k4(z)
y.b=H.c([],[F.du])
z.b=y
y=new F.k3(z)
y.b=H.c([],[F.dj])
z.c=y
y=new F.k2(z)
y.b=H.c([],[F.at])
z.d=y
z.e=null
return z}}},
k2:{"^":"b;a,0b",
e0:function(a){var z,y,x,w,v,u
H.u(a,"$ise",[F.am],"$ase")
z=H.c([],[F.at])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.h(a,v)
v=a[v]
if(w>=u)return H.h(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bL(x,v,u))}}return z},
i2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$ise",[F.am],"$ase")
z=H.c([],[F.at])
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
C.a.h(z,F.bL(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bL(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bL(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bL(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
d8:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.bf(0,v,t)){v.aJ()
break}}}}},
d7:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gib(x)
if(y)x.aJ()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cH())x=!1
return x},
cG:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cF())x=!1
return x},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}},
k3:{"^":"b;a,0b",
gm:function(a){return this.b.length},
d8:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.bf(0,v,t)){v.aJ()
break}}}}},
d7:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.W(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.n(z,"\n")},
P:function(){return this.G("")}},
k4:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j1:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}},
am:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cK:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cp(this.cx,x,u,z,y,w,v,a,t)},
ie:function(){return this.cK(null)},
sa3:function(a,b){var z
if(!J.W(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a6()}},
seS:function(a){var z
if(!J.W(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a6()}},
se5:function(a){var z
if(!J.W(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a6()}},
iF:function(a){var z,y
z=J.L(a)
if(z.B(a,$.$get$aE())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$b0())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$b_())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$b1())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.B(a,$.$get$b2())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bV())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bW())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.B(a,$.$get$bz()))return H.c([this.ch],[P.p])
else if(z.B(a,$.$get$aZ())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cH:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.L(0,new F.lh(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
cF:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.L(0,new F.lg(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var z,y,x
z=H.c([],[P.f])
C.a.h(z,C.b.al(J.ac(this.e),0))
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
C.a.h(z,V.V(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
P:function(){return this.G("")},
t:{
cp:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.am()
y=new F.lf(z)
y.b=H.c([],[F.du])
z.b=y
y=new F.lb(z)
x=[F.dj]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l8(z)
x=[F.at]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fJ()
z.e=0
y=$.$get$aE()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b0().a)!==0?e:null
z.x=(x&$.$get$b_().a)!==0?b:null
z.y=(x&$.$get$b1().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$fK().a)!==0?c:null
z.ch=(x&$.$get$bz().a)!==0?i:0
z.cx=(x&$.$get$aZ().a)!==0?a:null
return z}}},
lh:{"^":"l:7;a",
$1:function(a){var z,y
H.d(a,"$isat")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
lg:{"^":"l:7;a",
$1:function(a){var z,y
H.d(a,"$isat")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
l7:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.w("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a6()
return!0},
e1:function(a,b,c,d,e,f,g,h,i){var z=F.cp(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bD:function(a,b,c,d,e,f){return this.e1(a,null,b,c,null,d,e,f,0)},
i3:function(a,b,c,d,e,f){return this.e1(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cH()
return!0},
cG:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cF()
return!0},
i9:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.W(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
this.C()
z=H.c([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}},
l8:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
L:function(a,b){H.m(b,{func:1,ret:-1,args:[F.at]})
C.a.L(this.b,b)
C.a.L(this.c,new F.l9(this,b))
C.a.L(this.d,new F.la(this,b))},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}},
l9:{"^":"l:7;a,b",
$1:function(a){H.d(a,"$isat")
if(!J.W(a.a,this.a))this.b.$1(a)}},
la:{"^":"l:7;a,b",
$1:function(a){var z
H.d(a,"$isat")
z=this.a
if(!J.W(a.a,z)&&!J.W(a.b,z))this.b.$1(a)}},
lb:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}},
ld:{"^":"b;"},
lc:{"^":"ld;",
bf:function(a,b,c){return J.W(b.f,c.f)}},
le:{"^":"b;"},
js:{"^":"le;",
bg:function(a){var z,y,x,w,v,u,t,s
H.u(a,"$ise",[F.am],"$ase")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.A(0,Math.sqrt(u))
if(!J.W(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.E(null)}}}return}},
lf:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
P:function(){return this.G("")}}}],["","",,O,{"^":"",jc:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.M()
this.dy=z}return z},
a_:[function(a){var z
H.d(a,"$isC")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a_(null)},"fV","$1","$0","gcm",0,2,1],
ho:[function(a){H.d(a,"$isC")
this.a=null
this.a_(a)},function(){return this.ho(null)},"jR","$1","$0","ghn",0,2,1],
js:[function(a,b){var z=V.aI
z=new D.ce(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a_(z)},"$2","gfS",8,0,25],
jt:[function(a,b){var z=V.aI
z=new D.cf(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a_(z)},"$2","gfT",8,0,25],
dF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.ab(z.e.length+3,4)*4
x=C.e.ab(z.f.length+3,4)*4
w=C.e.ab(z.r.length+3,4)*4
v=C.e.ab(z.x.length+3,4)*4
u=C.e.ab(z.y.length+3,4)*4
t=C.e.ab(z.z.length+3,4)*4
s=C.e.ab(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aE()
if(c){z=$.$get$b0()
a6=new Z.by(a6.a|z.a)}if(b){z=$.$get$b_()
a6=new Z.by(a6.a|z.a)}if(a){z=$.$get$b1()
a6=new Z.by(a6.a|z.a)}if(a0){z=$.$get$b2()
a6=new Z.by(a6.a|z.a)}if(a2){z=$.$get$aZ()
a6=new Z.by(a6.a|z.a)}return new A.jg(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Y:function(a,b){H.u(a,"$ise",[T.dB],"$ase")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
at:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.z(z,0)]);z.H();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dc(x)}}},
eP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dF()
y=H.d(a.fr.j(0,z.as),"$iseS")
if(y==null){y=A.jd(z,a.a)
a.e3(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bH
z=b.e
if(!(z instanceof Z.d7)){b.e=null
z=null}if(z==null||!z.d.B(0,w)){z=x.r1
if(z)b.d.aq()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cG()
u.a.cG()
u=u.e
if(!(u==null))u.az(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.i9()
t=t.e
if(!(t==null))t.az(0)}r=b.d.e7(new Z.fN(a.a),w)
r.aL($.$get$aE()).e=this.a.Q.c
if(z)r.aL($.$get$b0()).e=this.a.cx.c
if(v)r.aL($.$get$b_()).e=this.a.ch.c
if(x.rx)r.aL($.$get$b1()).e=this.a.cy.c
if(u)r.aL($.$get$b2()).e=this.a.db.c
if(x.x1)r.aL($.$get$aZ()).e=this.a.dx.c
b.e=r}z=T.dB
q=H.c([],[z])
this.a.a2(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga4(u)
v=v.dy
v.toString
v.an(u.ah(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga4(u)
t=a.dx
t=u.k(0,t.ga4(t))
a.cx=t
u=t}v=v.fr
v.toString
v.an(u.ah(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giY()
t=a.dx
t=u.k(0,t.ga4(t))
a.ch=t
u=t}v=v.fy
v.toString
v.an(u.ah(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.an(u.ah(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.an(u.ah(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.an(C.w.ah(u,!0))}if(x.aw>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.p],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.d(t,"$isaI")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bB(H.u(t.ah(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.Y(q,this.f.d)
v=this.a
u=this.f.d
v.ap(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.Y(q,this.f.e)
v=this.a
u=this.f.e
v.aj(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.Y(q,this.r.d)
v=this.a
u=this.r.d
v.ap(v.y1,v.aw,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.Y(q,this.r.e)
v=this.a
u=this.r.e
v.aj(v.y2,v.aw,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.as
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.Y(q,this.x.d)
v=this.a
u=this.x.d
v.ap(v.bH,v.bI,u)
u=this.a
v=this.x.f
u=u.as
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.Y(q,this.x.e)
v=this.a
u=this.x.e
v.aj(v.ed,v.bI,u)
u=this.a
v=this.x.f
u=u.as
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bJ
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.Y(q,this.y.d)
v=this.a
u=this.y.d
v.ap(v.ee,v.bK,u)
u=this.a
v=this.y.f
u=u.bJ
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.Y(q,this.y.e)
v=this.a
u=this.y.e
v.aj(v.ef,v.bK,u)
u=this.a
v=this.y.f
u=u.bJ
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bL
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bN
u.a.uniform1f(u.d,s)
break
case C.f:this.Y(q,this.z.d)
v=this.a
u=this.z.d
v.ap(v.eg,v.bM,u)
u=this.a
v=this.z.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bN
v.a.uniform1f(v.d,s)
break
case C.h:this.Y(q,this.z.e)
v=this.a
u=this.z.e
v.aj(v.eh,v.bM,u)
u=this.a
v=this.z.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bN
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.es
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cN
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.dc(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eu
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cO
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbj(j)
s=i.b
h=t.gdg(t)
g=t.gdh(t)
t=t.gdi(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bq(j.gbj(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gu(j)
g=i.d
h=t.gc_()
s=t.gbr()
t=t.gbE()
g.a.uniform3f(g.d,h,s,t)
t=j.gcA()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcB()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcC()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ev
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cP
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbj(j)
s=i.b
h=t.gdg(t)
g=t.gdh(t)
t=t.gdi(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcM(j).jZ()
g=i.c
h=t.gb_(t)
s=t.gb0(t)
t=t.gb1()
g.a.uniform3f(g.d,h,s,t)
t=m.bq(j.gbj(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gu(j)
s=i.e
h=t.gc_()
g=t.gbr()
t=t.gbE()
s.a.uniform3f(s.d,h,g,t)
t=j.gjX()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjV()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcA()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcB()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcC()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ew
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cQ
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbn()
H.u(q,"$ise",t,"$ase")
if(!C.a.W(q,s)){s.sce(q.length)
C.a.h(q,s)}s=j.gcM(j)
h=i.d
g=s.gb_(s)
f=s.gb0(s)
s=s.gb1()
h.a.uniform3f(h.d,g,f,s)
s=j.gc0()
f=i.b
g=s.gb_(s)
h=s.gb0(s)
s=s.gb1()
f.a.uniform3f(f.d,g,h,s)
s=j.gbk(j)
h=i.c
g=s.gb_(s)
f=s.gb0(s)
s=s.gb1()
h.a.uniform3f(h.d,g,f,s)
s=m.dc(j.gcM(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gu(j)
g=i.f
f=h.gc_()
s=h.gbr()
h=h.gbE()
g.a.uniform3f(g.d,f,s,h)
h=j.gbn()
s=h.gbW(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbW(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.giy(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ex
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.y,u=v.length,t=[P.p],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cR
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbn()
H.u(q,"$ise",s,"$ase")
if(!C.a.W(q,h)){h.sce(q.length)
C.a.h(q,h)}e=m.k(0,j.ga4(j))
h=j.ga4(j).bq(new V.Z(0,0,0))
g=i.b
f=h.gdg(h)
d=h.gdh(h)
h=h.gdi(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bq(new V.Z(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cX(0)
d=i.d
n=new Float32Array(H.bB(H.u(new V.cI(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ah(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gu(j)
h=i.e
f=d.gc_()
g=d.gbr()
d=d.gbE()
h.a.uniform3f(h.d,f,g,d)
d=j.gbn()
h=d.gbW(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gjm()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gce())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcA()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcB()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcC()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ey
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cS
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbn()
H.u(q,"$ise",z,"$ase")
if(!C.a.W(q,t)){t.sce(q.length)
C.a.h(q,t)}t=j.gbj(j)
s=i.b
h=t.gdg(t)
g=t.gdh(t)
t=t.gdi(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcM(j)
g=i.c
h=t.gb_(t)
s=t.gb0(t)
t=t.gb1()
g.a.uniform3f(g.d,h,s,t)
t=j.gc0()
s=i.d
h=t.gb_(t)
g=t.gb0(t)
t=t.gb1()
s.a.uniform3f(s.d,h,g,t)
t=j.gbk(j)
g=i.e
h=t.gb_(t)
s=t.gb0(t)
t=t.gb1()
g.a.uniform3f(g.d,h,s,t)
t=m.bq(j.gbj(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbn()
s=t.gbW(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbW(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.giy(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gu(j)
s=i.y
h=t.gc_()
g=t.gbr()
t=t.gbE()
s.a.uniform3f(s.d,h,g,t)
t=j.gk7()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gk8()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcA()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcB()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcC()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.f:this.Y(q,this.Q.d)
z=this.a
v=this.Q.d
z.ap(z.ei,z.bO,v)
break
case C.h:this.Y(q,this.Q.e)
z=this.a
v=this.Q.e
z.aj(z.ej,z.bO,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga4(v).cX(0)
a.Q=v}z=z.id
z.toString
z.an(v.ah(0,!0))}if(x.dy){this.Y(q,this.ch)
z=this.a
v=this.ch
z.aj(z.ek,z.el,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bP
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.Y(q,this.cx.d)
z=this.a
v=this.cx.d
z.ap(z.em,z.bQ,v)
v=this.a
z=this.cx.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.h:this.Y(q,this.cx.e)
z=this.a
v=this.cx.e
z.aj(z.en,z.bQ,v)
v=this.a
z=this.cx.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bS
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bR
v.a.uniform1f(v.d,t)
break
case C.f:this.Y(q,this.cy.d)
z=this.a
v=this.cy.d
z.ap(z.eo,z.bT,v)
v=this.a
z=this.cy.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bR
z.a.uniform1f(z.d,t)
break
case C.h:this.Y(q,this.cy.e)
z=this.a
v=this.cy.e
z.aj(z.ep,z.bT,v)
v=this.a
z=this.cy.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bR
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bU
z.a.uniform1f(z.d,u)
break
case C.f:this.Y(q,this.db.d)
z=this.a
u=this.db.d
z.ap(z.eq,z.bV,u)
u=this.a
z=this.db.f
u=u.bU
u.a.uniform1f(u.d,z)
break
case C.h:this.Y(q,this.db.e)
z=this.a
u=this.db.e
z.aj(z.er,z.bV,u)
u=this.a
z=this.db.f
u=u.bU
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a2(a)
z=b.e
z.a2(a)
z.ag(a)
z.aO(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.eb()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dF().as}},je:{"^":"dn;0f,a,b,0c,0d,0e",
ht:function(a){var z,y
z=this.f
if(!$.q.$2(z,a)){y=this.f
this.f=a
z=new D.P(this.b,y,a,this,[P.p])
z.b=!0
this.a.a_(z)}},
b8:function(){this.dr()
this.ht(1)}},dn:{"^":"b;",
b8:["dr",function(){}],
by:["fa",function(){}],
hu:function(a){},
hv:function(a){},
ia:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.a_(null)}this.b8()
this.hu(null)
this.hv(null)
this.a.a_(null)}},jf:{"^":"dn;a,b,0c,0d,0e"},bk:{"^":"dn;0f,a,b,0c,0d,0e",
cr:function(a){var z,y
if(!J.W(this.f,a)){z=this.f
this.f=a
y=new D.P(this.b+".color",z,a,this,[V.v])
y.b=!0
this.a.a_(y)}},
b8:["ds",function(){this.dr()
this.cr(new V.v(0,0,0))}],
by:["bt",function(){this.fa()
this.cr(new V.v(1,1,1))}],
su:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.by()
z=this.a
z.a=null
z.a_(null)}this.cr(b)}},jh:{"^":"bk;0ch,0f,a,b,0c,0d,0e",
bA:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.a_(z)}},
b8:function(){this.ds()
this.bA(1)},
by:function(){this.bt()
this.bA(1)},
saI:function(a){var z
if(a<=0)this.ia(0)
else if(this.c===C.c){this.c=C.i
this.bt()
this.bA(1)
z=this.a
z.a=null
z.a_(null)}this.bA(a)}},ji:{"^":"bk;0ch,0f,a,b,0c,0d,0e",
bB:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.a_(z)}},
b8:function(){this.ds()
this.bB(100)},
by:function(){this.bt()
this.bB(100)}},kb:{"^":"cm;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
a_:[function(a){var z
H.d(a,"$isC")
z=this.e
if(!(z==null))z.E(a)},function(){return this.a_(null)},"fV","$1","$0","gcm",0,2,1],
eP:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.j(0,"Skybox"),"$isf7")
if(z==null){y=a.a
z=new A.f7(y,"Skybox")
z.dt(y,"Skybox")
z.eI(0,$.kd,$.kc)
z.z=z.x.j(0,"posAttr")
z.Q=H.j(z.y.j(0,"fov"),"$isa3")
z.ch=H.j(z.y.j(0,"ratio"),"$isa3")
z.cx=H.j(z.y.j(0,"boxClr"),"$isQ")
z.cy=H.j(z.y.j(0,"boxTxt"),"$isao")
z.db=H.j(z.y.j(0,"viewMat"),"$isaQ")
a.e3(z)}this.a=z}if(b.e==null){y=b.d.e7(new Z.fN(a.a),$.$get$aE())
y.aL($.$get$aE()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a2(a)}y=a.d
x=a.c
w=this.a
w.a2(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.dm(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga4(x).cX(0)
w=w.db
w.toString
w.an(x.ah(0,!0))
y=b.e
if(y instanceof Z.d7){y.a2(a)
y.ag(a)
y.aO(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.eb()
y=this.c
if(y!=null)y.aO(a)}},cm:{"^":"b;"}}],["","",,T,{"^":"",dB:{"^":"d3;"},dC:{"^":"dB;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
a2:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aO:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},kn:{"^":"b;a,0b,0c,0d,0e",
aV:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ae
W.a6(z,"load",H.m(new T.ko(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hp:function(a,b,c){var z,y,x,w
b=V.e1(b,2)
z=V.e1(a.width,2)
y=V.e1(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d9(null,null)
x.width=z
x.height=y
w=H.d(C.l.f_(x,"2d"),"$isek")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nw(w.getImageData(0,0,x.width,x.height))}}},ko:{"^":"l:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hp(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.a4.jb(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.il()}++z.e}}}],["","",,V,{"^":"",bI:{"^":"b;",
b3:function(a,b){return!0},
i:function(a){return"all"},
$isaX:1},aX:{"^":"b;"},eR:{"^":"b;",
b3:["f9",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b3(0,b))return!0
return!1}],
i:["dq",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaX:1},aB:{"^":"eR;0a",
b3:function(a,b){return!this.f9(0,b)},
i:function(a){return"!["+this.dq(0)+"]"}},jM:{"^":"b;0a,0b",
b3:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bT(this.a)
y=H.bT(this.b)
return z+".."+y},
$isaX:1,
t:{
a_:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jM()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k0:{"^":"b;0a",
ff:function(a){var z,y
if(a.a.length<=0)throw H.a(P.w("May not create a SetMatcher with zero characters."))
z=new H.b9(0,0,[P.n,P.T])
for(y=new H.dl(a,a.gm(a),0,[H.ai(a,"A",0)]);y.H();)z.p(0,y.d,!0)
this.a=z},
b3:function(a,b){return this.a.bF(0,b)},
i:function(a){var z=this.a
return P.cl(z.gac(z),0,null)},
$isaX:1,
t:{
y:function(a){var z=new V.k0()
z.ff(a)
return z}}},f9:{"^":"b;a,b,0c,0d",
giJ:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fl(this.a.l(0,b))
w.a=H.c([],[V.aX])
w.c=!1
C.a.h(this.c,w)
return w},
ip:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b3(0,a))return w}return},
i:function(a){return this.b}},fi:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e3(this.b,"\n","\\n")
y=H.e3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fj:{"^":"b;a,b,0c",
aN:function(a,b,c){var z,y,x
H.u(c,"$ise",[P.f],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kw:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f9(this,b)
z.c=H.c([],[V.fl])
this.a.p(0,b,z)}return z},
R:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fj(this,a)
y=P.f
z.c=new H.b9(0,0,[y,y])
this.b.p(0,a,z)}return z},
eV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fi])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.ip(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cl(w,0,null)
throw H.a(P.w("Untokenizable string [state: "+y.giJ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cl(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fi(o==null?p.b:o,q,t)}++t}}},
t:{
cN:function(){var z,y
z=new V.kw()
y=P.f
z.a=new H.b9(0,0,[y,V.f9])
z.b=new H.b9(0,0,[y,V.fj])
return z}}},fl:{"^":"eR;b,0c,0a",
i:function(a){return this.b.b+": "+this.dq(0)}}}],["","",,X,{"^":"",cz:{"^":"b;",$isaL:1},iE:{"^":"dA;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
aB:function(a){var z=this.x
if(!(z==null))z.E(a)},
se8:function(a,b){var z
if(this.b){this.b=!1
z=new D.P("clearColor",!0,!1,this,[P.T])
z.b=!0
this.aB(z)}},
a2:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.am(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.am(w.b*x)
t=C.d.am(w.c*y)
a.c=t
w=C.d.am(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
t:{
dd:function(a,b,c,d,e,f,g){var z,y
z=new X.iE()
y=new V.az(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.f4(0,0,1,1)
z.r=y
return z}}},iJ:{"^":"b;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
a2:function(a){var z
a.cy.bZ(V.bl())
z=V.bl()
a.db.bZ(z)},
aO:function(a){a.cy.aM()
a.db.aM()},
$isaL:1,
$iscz:1},jv:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
aB:[function(a){var z
H.d(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.aB(null)},"jk","$1","$0","gfq",0,2,1],
a2:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aJ(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bZ(s)
z=$.f_
if(z==null){z=V.eT(new V.Z(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.f_=z
r=z}else r=z
z=this.b
if(z!=null){q=z.b6(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bZ(r)},
aO:function(a){a.cy.aM()
a.db.aM()},
$isaL:1,
$iscz:1,
t:{
eZ:function(a,b,c,d,e){var z,y,x
z=new X.jv()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gv().h(0,z.gfq())
x=new D.P("mover",y,z.b,z,[U.ak])
x.b=!0
z.aB(x)}x=z.c
if(!$.q.$2(x,b)){y=z.c
z.c=b
x=new D.P("fov",y,b,z,[P.p])
x.b=!0
z.aB(x)}x=z.d
if(!$.q.$2(x,d)){y=z.d
z.d=d
x=new D.P("near",y,d,z,[P.p])
x.b=!0
z.aB(x)}x=z.e
if(!$.q.$2(x,a)){y=z.e
z.e=a
x=new D.P("far",y,a,z,[P.p])
x.b=!0
z.aB(x)}return z}}},dA:{"^":"b;"}}],["","",,V,{"^":"",
om:function(a){P.kv(C.N,new V.on(a))},
b6:{"^":"b;",
bu:function(a){this.b=new P.iH(C.O)
this.c=null
this.d=H.c([],[[P.e,W.bf]])},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bf]))
y=a.split("\n")
for(z=y.length,x=[W.bf],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.J(u)
s=this.b.fD(u,0,u.length)
r=s==null?u:s
C.M.f3(t,H.e3(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gay(this.d),t)}},
eN:function(a,b){var z,y,x,w
H.u(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bf]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bG()
this.c=y}for(y=y.eV(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bY(y[w])}},
on:{"^":"l:54;a",
$1:function(a){H.d(a,"$isbv")
P.e2(C.d.eU(this.a.giw(),2)+" fps")}},
ij:{"^":"b6;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bG:function(){var z,y,x,w
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.y(new H.x("_"))
C.a.h(y.a,x)
x=V.a_("a","z")
C.a.h(y.a,x)
x=V.a_("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.y(new H.x("_"))
C.a.h(x.a,y)
y=V.a_("0","9")
C.a.h(x.a,y)
y=V.a_("a","z")
C.a.h(x.a,y)
y=V.a_("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.a_("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.a_("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.y(new H.x("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.a_("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.a_("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.y(new H.x("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.y(new H.x("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.y(new H.x('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.y(new H.x('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.y(new H.x("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.y(new H.x('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bI())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.y(new H.x("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.y(new H.x("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.y(new H.x("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.y(new H.x("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bI())
x=z.l(0,"Start").n(0,"Slash")
y=V.y(new H.x("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.y(new H.x("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.y(new H.x("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.y(new H.x("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.y(new H.x("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.y(new H.x("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.y(new H.x(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.y(new H.x(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.R("Num")
x=z.l(0,"Float")
x.d=x.a.R("Num")
x=z.l(0,"Sym")
x.d=x.a.R("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.l(0,"EndComment")
x.d=x.a.R("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.l(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.f]
y.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iF:{"^":"b6;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bG:function(){var z,y,x,w
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.y(new H.x("_"))
C.a.h(y.a,x)
x=V.a_("a","z")
C.a.h(y.a,x)
x=V.a_("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.y(new H.x("_"))
C.a.h(x.a,y)
y=V.a_("0","9")
C.a.h(x.a,y)
y=V.a_("a","z")
C.a.h(x.a,y)
y=V.a_("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.a_("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.a_("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.y(new H.x("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.a_("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.a_("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.y(new H.x("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.y(new H.x("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.y(new H.x("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.y(new H.x("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bI())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.y(new H.x("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.y(new H.x("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.y(new H.x("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.y(new H.x("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.y(new H.x(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.y(new H.x(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.R("Num")
y=z.l(0,"Float")
y.d=y.a.R("Num")
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.R("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.f]
x.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iG:{"^":"b6;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bG:function(){var z,y,x
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.y(new H.x("_"))
C.a.h(y.a,x)
x=V.a_("a","z")
C.a.h(y.a,x)
x=V.a_("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.y(new H.x("_"))
C.a.h(x.a,y)
y=V.a_("0","9")
C.a.h(x.a,y)
y=V.a_("a","z")
C.a.h(x.a,y)
y=V.a_("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.y(new H.x("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.y(new H.x("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.y(new H.x("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.y(new H.x('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.y(new H.x('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.y(new H.x("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.y(new H.x('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bI())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bI())
y=z.l(0,"Other").n(0,"Other")
x=new V.aB()
x.a=H.c([],[V.aX])
C.a.h(y.a,x)
y=V.y(new H.x('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.a_("a","z")
C.a.h(x.a,y)
y=V.a_("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.R("String")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
x.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.l(0,"Attr")
x.d=x.a.R("Attr")
x=z.l(0,"Other")
x.d=x.a.R("Other")
return z}},
jx:{"^":"b6;a,0b,0c,0d",
eN:function(a,b){H.u(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bf]])
this.N(C.a.n(b,"\n"),"#111")},
bY:function(a){},
bG:function(){return}},
jK:{"^":"b;a,b,0c",
cw:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.m(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fF().gd6().j(0,H.k(z))
if(y==null)if(d){c.$0()
this.dX(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e8(this.c).h(0,v)
t=W.iL("radio")
t.checked=x
t.name=z
z=W.ae
W.a6(t,"change",H.m(new V.jL(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e8(this.c).h(0,w.createElement("br"))},
a5:function(a,b,c){return this.cw(a,b,c,!1)},
dX:function(a){var z,y,x,w,v
z=P.fF()
y=P.f
x=P.j1(z.gd6(),y,y)
x.p(0,this.a,a)
w=z.eQ(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mo([],[]).dd(""),"",v)},
t:{
f2:function(a,b){var z,y
z=new V.jK(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.t("Failed to find "+a+" for RadioGroup")
return z}}},
jL:{"^":"l:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dX(this.d)}}},
k5:{"^":"b;0a,0b",
fg:function(a,b){var z,y,x,w,v,u,t
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
t=W.ae
W.a6(z,"scroll",H.m(new V.k8(x),{func:1,ret:-1,args:[t]}),!1,t)},
e2:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$ise",[P.f],"$ase")
this.hy()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eV(C.a.iD(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hH(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cr(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eZ:function(a){var z,y,x,w
z=new V.ij("dart")
z.bu("dart")
y=new V.iF("glsl")
y.bu("glsl")
x=new V.iG("html")
x.bu("html")
w=C.a.ir(H.c([z,y,x],[V.b6]),new V.k9(a))
if(w!=null)return w
z=new V.jx("plain")
z.bu("plain")
return z},
dZ:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$ise",[P.f],"$ase")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c6(w).a9(w,"+")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a9(w,"-")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eZ(a0)
v.eN(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cr(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ea(null)
n.href="#"+H.k(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.h(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga1(w);b.H();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
i1:function(a){var z,y,x,w,v,u,t
H.u(a,"$ise",[P.f],"$ase")
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
x=H.d(w.insertCell(-1),"$isdz").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.d(w.insertCell(-1),"$isdz")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hy:function(){var z,y,x,w
if(this.b!=null)return
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.y(new H.x("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.y(new H.x("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.y(new H.x("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.y(new H.x("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.y(new H.x("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.y(new H.x("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.y(new H.x("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.y(new H.x("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.y(new H.x("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.y(new H.x("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.y(new H.x("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.y(new H.x("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.y(new H.x("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bI())
x=z.l(0,"Other").n(0,"Other")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.y(new H.x("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.l(0,"Other")
x.d=x.a.R("Other")
this.b=z},
t:{
k6:function(a,b){var z=new V.k5()
z.fg(a,!0)
return z}}},
k8:{"^":"l:14;a",
$1:function(a){P.fg(C.q,new V.k7(this.a))}},
k7:{"^":"l:0;a",
$0:function(){var z,y,x
z=C.d.am(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
k9:{"^":"l:55;a",
$1:function(a){return H.d(a,"$isb6").a===this.a}}}],["","",,D,{"^":"",
hC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.k6("Test 014",!0)
y=W.d9(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.e2(H.c(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],x))
z.i1(H.c(["controls","shapes"],x))
z.e2(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
v=E.kt(w,!0,!0,!0,!1)
u=X.dd(!0,!0,!1,null,2000,null,0)
u.se8(0,!1)
t=E.eB(null,!0,null,"",null,null)
t.sad(0,F.hJ(30,1,15,0.5))
x=v.f
s=x.a
r=s.createTexture()
s.bindTexture(34067,r)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
q=new T.dC()
q.a=0
q.b=r
q.c=!1
q.d=0
x.aV(q,r,"../resources/maskonaive/posx.jpg",34069,!1,!1)
x.aV(q,r,"../resources/maskonaive/negx.jpg",34070,!1,!1)
x.aV(q,r,"../resources/maskonaive/posy.jpg",34071,!1,!1)
x.aV(q,r,"../resources/maskonaive/negy.jpg",34072,!1,!1)
x.aV(q,r,"../resources/maskonaive/posz.jpg",34073,!1,!1)
x.aV(q,r,"../resources/maskonaive/negz.jpg",34074,!1,!1)
p=new O.jc()
x=O.da(V.aI)
p.e=x
x.b7(p.gfS(),p.gfT())
x=new O.bk(p,"emission")
x.c=C.c
x.f=new V.v(0,0,0)
p.f=x
x=new O.bk(p,"ambient")
x.c=C.c
x.f=new V.v(0,0,0)
p.r=x
x=new O.bk(p,"diffuse")
x.c=C.c
x.f=new V.v(0,0,0)
p.x=x
x=new O.bk(p,"invDiffuse")
x.c=C.c
x.f=new V.v(0,0,0)
p.y=x
x=new O.ji(p,"specular")
x.c=C.c
x.f=new V.v(0,0,0)
x.ch=100
p.z=x
x=new O.jf(p,"bump")
x.c=C.c
p.Q=x
p.ch=null
x=new O.bk(p,"reflect")
x.c=C.c
x.f=new V.v(0,0,0)
p.cx=x
x=new O.jh(p,"refract")
x.c=C.c
x.f=new V.v(0,0,0)
x.ch=1
p.cy=x
x=new O.je(p,"alpha")
x.c=C.c
x.f=1
p.db=x
x=new D.iU()
x.bv(D.a8)
x.e=H.c([],[D.cB])
x.f=H.c([],[D.jy])
x.r=H.c([],[D.ke])
x.x=H.c([],[D.kp])
x.y=H.c([],[D.kq])
x.z=H.c([],[D.kr])
x.Q=null
x.ch=null
x.dl(x.gfR(),x.gha(),x.ghc())
p.dx=x
s=x.Q
if(s==null){s=D.M()
x.Q=s
x=s}else x=s
x.h(0,p.ghn())
x=p.dx
s=x.ch
if(s==null){s=D.M()
x.ch=s
x=s}else x=s
s=p.gcm()
x.h(0,s)
p.dy=null
x=p.dx
o=U.eo(V.eT(new V.Z(0,0,0),new V.H(0,1,0),new V.H(-1,-1,-1)))
n=new V.v(1,1,1)
m=new D.cB()
m.c=new V.v(1,1,1)
m.a=new V.H(0,0,1)
l=m.b
m.b=o
o.gv().h(0,m.gfm())
o=new D.P("mover",l,m.b,m,[U.ak])
o.b=!0
m.aR(o)
if(!m.c.B(0,n)){l=m.c
m.c=n
o=new D.P("color",l,n,m,[V.v])
o.b=!0
m.aR(o)}x.h(0,m)
x=p.r
x.su(0,new V.v(0.1,0.1,0.1))
x=p.x
x.su(0,new V.v(0.1,0.1,0.1))
x=p.z
x.su(0,new V.v(1,1,1))
x=p.z
if(x.c===C.c){x.c=C.i
x.bt()
x.bB(100)
o=x.a
o.a=null
o.a_(null)}x.bB(10)
x=p.ch
if(x!==q){if(x!=null)x.gv().K(0,s)
l=p.ch
p.ch=q
q.gv().h(0,s)
x=new D.P("environment",l,p.ch,p,[T.dC])
x.b=!0
p.a_(x)}p.cy.saI(0.6)
x=p.cy
x.su(0,new V.v(0.2,0.3,1))
x=p.cx
x.su(0,new V.v(0.6,0.6,0.6))
k=new U.eE()
k.bv(U.ak)
k.b7(k.gfQ(),k.ghb())
k.e=null
k.f=V.bl()
k.r=0
x=v.r
s=new U.kY()
o=U.db()
o.sdf(0,!0)
o.scZ(6.283185307179586)
o.sd0(0)
o.sa3(0,0)
o.sd_(100)
o.sV(0)
o.scL(0.5)
s.b=o
m=s.gaS()
o.gv().h(0,m)
o=U.db()
o.sdf(0,!0)
o.scZ(6.283185307179586)
o.sd0(0)
o.sa3(0,0)
o.sd_(100)
o.sV(0)
o.scL(0.5)
s.c=o
o.gv().h(0,m)
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
j=new X.aK(!1,!1,!1)
l=s.d
s.d=j
o=[X.aK]
m=new D.P("modifiers",l,j,s,o)
m.b=!0
s.U(m)
m=s.f
if(m!==!1){s.f=!1
m=new D.P("invertX",m,!1,s,[P.T])
m.b=!0
s.U(m)}m=s.r
if(m!==!1){s.r=!1
m=new D.P("invertY",m,!1,s,[P.T])
m.b=!0
s.U(m)}s.bb(x)
k.h(0,s)
x=v.r
s=new U.kX()
m=U.db()
m.sdf(0,!0)
m.scZ(6.283185307179586)
m.sd0(0)
m.sa3(0,0)
m.sd_(100)
m.sV(0)
m.scL(0.2)
s.b=m
m.gv().h(0,s.gaS())
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
j=new X.aK(!0,!1,!1)
l=s.c
s.c=j
m=new D.P("modifiers",l,j,s,o)
m.b=!0
s.U(m)
s.bb(x)
k.h(0,s)
x=v.r
s=new U.kZ()
s.c=0.01
s.d=0
s.e=0
j=new X.aK(!1,!1,!1)
s.b=j
o=new D.P("modifiers",null,j,s,o)
o.b=!0
s.U(o)
s.bb(x)
k.h(0,s)
k.h(0,U.eo(V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.eZ(2000,1.0471975511965976,k,0.1,null)
h=new M.ie()
h.sbc(null)
h.sbl(0,null)
h.sbm(null)
x=E.eB(null,!0,null,"",null,null)
g=F.cL()
s=g.a
o=new V.H(-1,-1,1)
o=o.A(0,Math.sqrt(o.D(o)))
f=s.bD(new V.aN(1,2,4,6),new V.az(1,0,0,1),new V.Z(-1,-1,0),new V.U(0,1),o,null)
s=g.a
o=new V.H(1,-1,1)
o=o.A(0,Math.sqrt(o.D(o)))
e=s.bD(new V.aN(0,3,4,6),new V.az(0,0,1,1),new V.Z(1,-1,0),new V.U(1,1),o,null)
s=g.a
o=new V.H(1,1,1)
o=o.A(0,Math.sqrt(o.D(o)))
d=s.bD(new V.aN(0,2,5,6),new V.az(0,1,0,1),new V.Z(1,1,0),new V.U(1,0),o,null)
s=g.a
o=new V.H(-1,1,1)
o=o.A(0,Math.sqrt(o.D(o)))
c=s.bD(new V.aN(0,2,4,7),new V.az(1,1,0,1),new V.Z(-1,1,0),new V.U(0,0),o,null)
g.d.e0(H.c([f,e,d,c],[F.am]))
g.aq()
x.sad(0,g)
h.d=x
h.e=null
x=new O.kb()
x.b=1.0471975511965976
l=x.c
x.c=q
q.gv().h(0,x.gcm())
s=new D.P("boxTexture",l,x.c,x,[T.dC])
s.b=!0
x.a_(s)
n=new V.v(1,1,1)
if(!J.W(x.d,n)){l=x.d
x.d=n
s=new D.P("boxColor",l,n,x,[V.v])
s.b=!0
x.a_(s)}x.e=null
h.sbm(x)
h.sbl(0,u)
h.sbc(i)
b=new M.iv()
x=O.da(E.aW)
b.d=x
x.b7(b.gfW(),b.gfX())
b.e=null
b.f=null
b.r=null
b.x=null
b.sbc(null)
b.sbl(0,null)
b.sbm(null)
b.sbc(i)
b.sbm(p)
b.sbl(0,u)
b.d.h(0,t)
b.b.se8(0,!1)
x=M.aO
s=H.c([h,b],[x])
o=new M.i9()
o.bv(x)
o.e=!1
o.f=null
o.b7(o.ghd(),o.ghe())
o.ae(0,s)
x=v.d
if(x!==o){if(x!=null)x.gv().K(0,v.gdv())
v.d=o
o.gv().h(0,v.gdv())
v.fi()}x=V.f2("controls",!0)
x.cw(0,"Silver",new D.nY(p),!0)
x.a5(0,"Gold",new D.nZ(p))
x.a5(0,"Glass",new D.o_(p))
x.a5(0,"Blue Glass",new D.o8(p))
x.a5(0,"Water Bubble",new D.o9(p))
x.a5(0,"No Reflection",new D.oa(p))
x.a5(0,"Pink Distort",new D.ob(p))
x.a5(0,"Cloak",new D.oc(p))
x.a5(0,"White and Shiny",new D.od(p))
x=V.f2("shapes",!0)
x.a5(0,"Cube",new D.oe(t))
x.a5(0,"Cuboid",new D.of(t))
x.a5(0,"Cylinder",new D.o0(t))
x.a5(0,"Cone",new D.o1(t))
x.a5(0,"Cylindrical",new D.o2(t))
x.a5(0,"Sphere",new D.o3(t))
x.a5(0,"Spherical",new D.o4(t))
x.cw(0,"Toroid",new D.o5(t),!0)
x.a5(0,"Knot",new D.o6(t))
x=v.z
if(x==null){x=D.M()
v.z=x}s={func:1,ret:-1,args:[D.C]}
o=H.m(new D.o7(z,p),s)
m=x.b
if(m==null){s=H.c([],[s])
x.b=s
x=s}else x=m
C.a.h(x,o)
V.om(v)},
nY:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.2,0.2,0.2))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.su(0,new V.v(0,0,0))
z=z.cx
z.su(0,new V.v(1,1,1))}},
nZ:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.11,0.11,0.1))
y=z.x
y.su(0,new V.v(0.21,0.21,0.2))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.su(0,new V.v(0,0,0))
z=z.cx
z.su(0,new V.v(1,0.9,0.5))}},
o_:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.saI(0.4)
y=z.cy
y.su(0,new V.v(0.6,0.6,0.6))
z=z.cx
z.su(0,new V.v(0.4,0.4,0.4))}},
o8:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.saI(0.4)
y=z.cy
y.su(0,new V.v(0.2,0.3,1))
z=z.cx
z.su(0,new V.v(0.3,0.3,0.3))}},
o9:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.saI(0.6)
y=z.cy
y.su(0,new V.v(0.8,0.8,0.8))
z=z.cx
z.su(0,new V.v(0.2,0.2,0.2))}},
oa:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.saI(0.6)
y=z.cy
y.su(0,new V.v(1,1,1))
z.cx.su(0,new V.v(0,0,0))}},
ob:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.1,0.1,0.1))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.saI(0.9)
y=z.cy
y.su(0,new V.v(1,0.8,0.8))
z.cx.su(0,new V.v(0,0,0))}},
oc:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0,0,0))
y=z.x
y.su(0,new V.v(0.1,0.1,0.1))
y=z.z
y.su(0,new V.v(0.1,0.1,0.1))
z.cy.saI(0.99)
y=z.cy
y.su(0,new V.v(0.95,0.95,0.95))
z.cx.su(0,new V.v(0,0,0))}},
od:{"^":"l:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.v(0.3,0.3,0.3))
y=z.x
y.su(0,new V.v(0.5,0.5,0.5))
y=z.z
y.su(0,new V.v(1,1,1))
z.cy.su(0,new V.v(0,0,0))
z=z.cx
z.su(0,new V.v(0.3,0.3,0.3))}},
oe:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.dW(1,null,null,1))}},
of:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.dW(15,null,new D.nX(),15))}},
nX:{"^":"l:5;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.H(x.a,x.b,x.c)
w=x.A(0,Math.sqrt(x.D(x)))
x=a.f
y=w.k(0,z*0.1+y*0.1)
a.sa3(0,x.F(0,new V.Z(y.a,y.b,y.c)))}},
o0:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hr(1,!0,!0,1,30,1))}},
o1:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hr(1,!0,!1,1,30,0))}},
o2:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hs(!0,!0,25,new D.nW(),50))}},
nW:{"^":"l:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
o3:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hG(6,null,1,6))}},
o4:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hG(10,new D.nV(),1,10))}},
nV:{"^":"l:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
o5:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.hJ(30,1,15,0.5))}},
o6:{"^":"l:0;a",
$0:function(){this.a.sad(0,F.nS(120,1,2,12,0.3,3))}},
o7:{"^":"l:12;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.dZ("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dZ("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eJ.prototype
return J.eI.prototype}if(typeof a=="string")return J.ch.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.iP.prototype
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.aT=function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.c5=function(a){if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.nG=function(a){if(typeof a=="number")return J.cg.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.nH=function(a){if(typeof a=="number")return J.cg.prototype
if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.c6=function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.aF=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.W=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).B(a,b)}
J.hK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nG(a).S(a,b)}
J.e5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nH(a).k(a,b)}
J.e6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).j(a,b)}
J.d1=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hz(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c5(a).p(a,b,c)}
J.hL=function(a,b){return J.c6(a).I(a,b)}
J.hM=function(a,b,c){return J.aF(a).hl(a,b,c)}
J.hN=function(a,b,c,d){return J.aF(a).e_(a,b,c,d)}
J.hO=function(a,b){return J.c6(a).a0(a,b)}
J.d2=function(a,b,c){return J.aT(a).ic(a,b,c)}
J.cv=function(a,b){return J.c5(a).J(a,b)}
J.hP=function(a,b,c,d){return J.c5(a).aK(a,b,c,d)}
J.e7=function(a,b){return J.c5(a).L(a,b)}
J.hQ=function(a){return J.aF(a).gi7(a)}
J.e8=function(a){return J.aF(a).gcI(a)}
J.c8=function(a){return J.L(a).gX(a)}
J.b5=function(a){return J.c5(a).ga1(a)}
J.ap=function(a){return J.aT(a).gm(a)}
J.hR=function(a){return J.aF(a).gd3(a)}
J.hS=function(a){return J.aF(a).gja(a)}
J.e9=function(a){return J.c5(a).j_(a)}
J.hT=function(a,b){return J.aF(a).j3(a,b)}
J.hU=function(a,b){return J.aF(a).sa8(a,b)}
J.hV=function(a,b,c){return J.c6(a).w(a,b,c)}
J.hW=function(a){return J.c6(a).jh(a)}
J.ac=function(a){return J.L(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cx.prototype
C.l=W.d8.prototype
C.M=W.bf.prototype
C.P=J.r.prototype
C.a=J.bj.prototype
C.Q=J.eI.prototype
C.e=J.eJ.prototype
C.w=J.eK.prototype
C.d=J.cg.prototype
C.b=J.ch.prototype
C.X=J.ci.prototype
C.a2=H.dt.prototype
C.a3=W.jp.prototype
C.E=J.jw.prototype
C.a4=P.dv.prototype
C.F=W.kl.prototype
C.u=J.co.prototype
C.G=W.bX.prototype
C.H=W.lj.prototype
C.J=new P.i0(!1)
C.I=new P.i_(C.J)
C.K=new P.ju()
C.L=new P.l6()
C.j=new P.m6()
C.c=new A.cA(0,"ColorSourceType.None")
C.i=new A.cA(1,"ColorSourceType.Solid")
C.f=new A.cA(2,"ColorSourceType.Texture2D")
C.h=new A.cA(3,"ColorSourceType.TextureCube")
C.q=new P.bg(0)
C.N=new P.bg(5e6)
C.O=new P.iI("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.aa([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.A=H.c(I.aa([]),[P.f])
C.a_=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.f])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.id(0,{},C.A,[P.f,P.f])
C.k=new P.l_(!1)
$.aH=0
$.bJ=null
$.eg=null
$.dQ=!1
$.hx=null
$.ho=null
$.hF=null
$.cX=null
$.d_=null
$.dZ=null
$.bC=null
$.c1=null
$.c2=null
$.dR=!1
$.a0=C.j
$.aV=null
$.dc=null
$.eA=null
$.ez=null
$.ev=null
$.eu=null
$.et=null
$.es=null
$.q=V.jj()
$.kd="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kc="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f_=null
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
I.$lazy(y,x,w)}})(["er","$get$er",function(){return H.hw("_$dart_dartClosure")},"dg","$get$dg",function(){return H.hw("_$dart_js")},"fm","$get$fm",function(){return H.aP(H.cO({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aP(H.cO({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aP(H.cO(null))},"fp","$get$fp",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aP(H.cO(void 0))},"fu","$get$fu",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aP(H.fs(null))},"fq","$get$fq",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aP(H.fs(void 0))},"fv","$get$fv",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.lk()},"c3","$get$c3",function(){return[]},"fI","$get$fI",function(){return P.l3()},"fQ","$get$fQ",function(){return H.jn(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hd","$get$hd",function(){return P.jR("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hk","$get$hk",function(){return P.nd()},"ep","$get$ep",function(){return{}},"fU","$get$fU",function(){return P.eO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"dM","$get$dM",function(){return P.dk(P.f,P.cc)},"fL","$get$fL",function(){return Z.av(0)},"fJ","$get$fJ",function(){return Z.av(511)},"aE","$get$aE",function(){return Z.av(1)},"b0","$get$b0",function(){return Z.av(2)},"b_","$get$b_",function(){return Z.av(4)},"b1","$get$b1",function(){return Z.av(8)},"b2","$get$b2",function(){return Z.av(16)},"bV","$get$bV",function(){return Z.av(32)},"bW","$get$bW",function(){return Z.av(64)},"fK","$get$fK",function(){return Z.av(96)},"bz","$get$bz",function(){return Z.av(128)},"aZ","$get$aZ",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.O,args:[F.am,P.p,P.p]},{func:1,ret:-1,args:[P.n,[P.i,E.aW]]},{func:1,ret:P.O,args:[F.at]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.O,args:[D.C]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.ae]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[P.n,[P.i,U.ak]]},{func:1,ret:P.p},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,D.a8]]},{func:1,ret:P.T,args:[W.X,P.f,P.f,W.cq]},{func:1,ret:V.Z,args:[P.p]},{func:1,ret:P.T,args:[W.I]},{func:1,ret:-1,args:[P.n,[P.i,V.aI]]},{func:1,ret:W.I},{func:1,ret:P.f,args:[P.n]},{func:1,ret:P.T,args:[W.aM]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,M.aO]]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.O,args:[P.a7]},{func:1,ret:-1,args:[W.I,W.I]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.T,args:[P.p,P.p]},{func:1,ret:-1,args:[W.bX]},{func:1,ret:P.S,args:[P.n]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.n]},{func:1,ret:[P.N,P.f,P.f],args:[[P.N,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b3,,],args:[,]},{func:1,ret:P.n,args:[[P.e,P.n],P.n]},{func:1,ret:P.O,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aC]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[P.bv]},{func:1,ret:P.T,args:[V.b6]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:W.X,args:[W.I]}]
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
if(x==y)H.oq(d||a)
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
Isolate.aa=a.aa
Isolate.dX=a.dX
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
if(typeof dartMainRunner==="function")dartMainRunner(D.hC,[])
else D.hC([])})})()
//# sourceMappingURL=test.dart.js.map
