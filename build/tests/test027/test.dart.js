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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.e_(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e0=function(){}
var dart=[["","",,H,{"^":"",oX:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
e4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e2==null){H.o0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.co("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dm()]
if(v!=null)return v
v=H.o5(a)
if(v!=null)return v
if(typeof a=="function")return C.Y
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dm(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
r:{"^":"b;",
A:function(a,b){return a===b},
gW:function(a){return H.bS(a)},
i:["f8",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
j_:{"^":"r;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isT:1},
eO:{"^":"r;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isO:1},
dn:{"^":"r;",
gW:function(a){return 0},
i:["fa",function(a){return String(a)}]},
jH:{"^":"dn;"},
cp:{"^":"dn;"},
cj:{"^":"dn;",
i:function(a){var z=a[$.$get$et()]
if(z==null)return this.fa(a)
return"JavaScript function for "+H.k(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscd:1},
bj:{"^":"r;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.D("add"))
a.push(b)},
iZ:function(a,b){if(!!a.fixed$length)H.t(P.D("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cl(b,null,null))
return a.splice(b,1)[0]},
J:function(a,b){var z
if(!!a.fixed$length)H.t(P.D("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
ad:function(a,b){var z,y
H.u(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.D("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aU(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.k(a[y]))
return z.join(b)},
iB:function(a){return this.n(a,"")},
it:function(a,b,c,d){var z,y,x
H.C(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aU(a))}return y},
ir:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.T,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aU(a))}throw H.a(H.cG())},
iq:function(a,b){return this.ir(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
c0:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gip:function(a){if(a.length>0)return a[0]
throw H.a(H.cG())},
gaC:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cG())},
aK:function(a,b,c,d){var z
H.C(d,H.y(a,0))
if(!!a.immutable$list)H.t(P.D("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.S(0,c);z=z.E(0,1))a[z]=d},
e0:function(a,b){var z,y
H.l(b,{func:1,ret:P.T,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aU(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
i:function(a){return P.dk(a,"[","]")},
ga0:function(a){return new J.az(a,a.length,0,[H.y(a,0)])},
gW:function(a){return H.bS(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cx(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
a[b]=c},
$isi:1,
$ise:1,
q:{
iZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cx(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eL(new Array(a),b)},
eL:function(a,b){return J.bN(H.c(a,[b]))},
bN:function(a){H.c7(a)
a.fixed$length=Array
return a}}},
oW:{"^":"bj;$ti"},
az:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ch:{"^":"r;",
jb:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
cO:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
eT:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bp:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.D("Unexpected toString result: "+z))
x=J.aT(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a*b},
bt:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fe:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.dO(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hB:function(a,b){if(b<0)throw H.a(H.ai(b))
return this.dO(a,b)},
dO:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a<b},
$isp:1,
$isa7:1},
eN:{"^":"ch;",$isn:1},
eM:{"^":"ch;"},
ci:{"^":"r;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b<0)throw H.a(H.aS(a,b))
if(b>=a.length)H.t(H.aS(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aS(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cx(b,null,null))
return a+b},
b7:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ai(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ai(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ah:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ai(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.ah(a,b,0)},
v:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.a(P.cl(b,null,null))
if(b>c)throw H.a(P.cl(b,null,null))
if(c>a.length)throw H.a(P.cl(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.v(a,b,null)},
je:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.L)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
al:function(a,b){return this.iN(a,b," ")},
eC:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eB:function(a,b){return this.eC(a,b,0)},
ic:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hR(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isf6:1,
$isf:1}}],["","",,H,{"^":"",
d2:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cG:function(){return new P.dF("No element")},
iY:function(){return new P.dF("Too many elements")},
w:{"^":"kZ;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ascS:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$ase:function(){return[P.n]}},
eA:{"^":"i;"},
cI:{"^":"eA;$ti",
ga0:function(a){return new H.ds(this,this.gm(this),0,[H.aj(this,"cI",0)])},
d8:function(a,b){return this.f9(0,H.l(b,{func:1,ret:P.T,args:[H.aj(this,"cI",0)]}))}},
ds:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aU(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
jk:{"^":"i;a,b,$ti",
ga0:function(a){return new H.jl(J.b5(this.a),this.b,this.$ti)},
gm:function(a){return J.ap(this.a)},
I:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asi:function(a,b){return[b]}},
jl:{"^":"dl;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdl:function(a,b){return[b]}},
jm:{"^":"cI;a,b,$ti",
gm:function(a){return J.ap(this.a)},
I:function(a,b){return this.b.$1(J.cw(this.a,b))},
$ascI:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dP:{"^":"i;a,b,$ti",
ga0:function(a){return new H.lu(J.b5(this.a),this.b,this.$ti)}},
lu:{"^":"dl;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cE:{"^":"b;$ti"},
cS:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.C(c,H.aj(this,"cS",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.C(d,H.aj(this,"cS",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kZ:{"^":"cH+cS;"}}],["","",,H,{"^":"",
ip:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nU:function(a){return init.types[H.F(a)]},
hJ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isL},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ai(a))
return z},
bS:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jS:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.Q||!!J.M(a).$iscp){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.ax(w,1)
r=H.e3(H.c7(H.bc(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jK:function(){if(!!self.location)return self.location.href
return},
f8:function(a){var z,y,x,w,v
H.c7(a)
z=J.ap(a)
if(typeof z!=="number")return z.f1()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jT:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ai(w))}return H.f8(z)},
f9:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ai(x))
if(x<0)throw H.a(H.ai(x))
if(x>65535)return H.jT(a)}return H.f8(a)},
jU:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f1()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bT:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aY(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
al:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jR:function(a){return a.b?H.al(a).getUTCFullYear()+0:H.al(a).getFullYear()+0},
jP:function(a){return a.b?H.al(a).getUTCMonth()+1:H.al(a).getMonth()+1},
jL:function(a){return a.b?H.al(a).getUTCDate()+0:H.al(a).getDate()+0},
jM:function(a){return a.b?H.al(a).getUTCHours()+0:H.al(a).getHours()+0},
jO:function(a){return a.b?H.al(a).getUTCMinutes()+0:H.al(a).getMinutes()+0},
jQ:function(a){return a.b?H.al(a).getUTCSeconds()+0:H.al(a).getSeconds()+0},
jN:function(a){return a.b?H.al(a).getUTCMilliseconds()+0:H.al(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ai(a))},
h:function(a,b){if(a==null)J.ap(a)
throw H.a(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.F(J.ap(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.X(b,a,"index",null,z)
return P.cl(b,"index",null)},
nO:function(a,b,c){if(a>c)return new P.cL(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cL(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ai:function(a){return new P.aG(!0,a,null,null)},
nE:function(a){if(typeof a!=="number")throw H.a(H.ai(a))
return a},
a:function(a){var z
if(a==null)a=new P.f5()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hS})
z.name=""}else z.toString=H.hS
return z},
hS:function(){return J.ac(this.dartException)},
t:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aU(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ov(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dp(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f4(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fw()
u=$.$get$fx()
t=$.$get$fy()
s=$.$get$fz()
r=$.$get$fD()
q=$.$get$fE()
p=$.$get$fB()
$.$get$fA()
o=$.$get$fG()
n=$.$get$fF()
m=v.ak(y)
if(m!=null)return z.$1(H.dp(H.I(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.dp(H.I(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f4(H.I(y),m))}}return z.$1(new H.kY(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ff()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ff()
return a},
bG:function(a){var z
if(a==null)return new H.hc(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.hc(a)},
nR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
o2:function(a,b,c,d,e,f){H.d(a,"$iscd")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o2)
a.$identity=z
return z},
ij:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$ise){z.$reflectionInfo=d
x=H.k_(z).r}else x=d
w=e?Object.create(new H.kq().constructor.prototype):Object.create(new H.da(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.E()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ep(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nU,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ek:H.db
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ep(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ig:function(a,b,c,d){var z=H.db
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ep:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ii(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ig(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.E()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bJ
if(v==null){v=H.cz("self")
$.bJ=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.E()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bJ
if(v==null){v=H.cz("self")
$.bJ=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
ih:function(a,b,c,d){var z,y
z=H.db
y=H.ek
switch(b?-1:a){case 0:throw H.a(H.k9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ii:function(a,b){var z,y,x,w,v,u,t,s
z=$.bJ
if(z==null){z=H.cz("self")
$.bJ=z}y=$.ej
if(y==null){y=H.cz("receiver")
$.ej=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ih(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aH
if(typeof y!=="number")return y.E()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.E()
$.aH=y+1
return new Function(z+y+"}")()},
e_:function(a,b,c,d,e,f,g){var z,y
z=J.bN(H.c7(b))
H.F(c)
y=!!J.M(d).$ise?J.bN(d):d
return H.ij(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aD(a,"String"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"double"))},
ol:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"num"))},
dY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aD(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aD(a,"int"))},
hO:function(a,b){throw H.a(H.aD(a,H.I(b).substring(3)))},
on:function(a,b){var z=J.aT(b)
throw H.a(H.ie(a,z.v(b,3,z.gm(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hO(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.on(a,b)},
c7:function(a){if(a==null)return a
if(!!J.M(a).$ise)return a
throw H.a(H.aD(a,"List"))},
hL:function(a,b){if(a==null)return a
if(!!J.M(a).$ise)return a
if(J.M(a)[b])return a
H.hO(a,b)},
hF:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
ct:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hF(J.M(a))
if(z==null)return!1
y=H.hI(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dV)return a
$.dV=!0
try{if(H.ct(a,b))return a
z=H.cv(b)
y=H.aD(a,z)
throw H.a(y)}finally{$.dV=!1}},
e1:function(a,b){if(a!=null&&!H.dZ(a,b))H.t(H.aD(a,H.cv(b)))
return a},
hw:function(a){var z
if(a instanceof H.m){z=H.hF(J.M(a))
if(z!=null)return H.cv(z)
return"Closure"}return H.bo(a)},
ot:function(a){throw H.a(new P.iu(H.I(a)))},
hG:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bc:function(a){if(a==null)return
return a.$ti},
q_:function(a,b,c){return H.bH(a["$as"+H.k(c)],H.bc(b))},
bb:function(a,b,c,d){var z
H.I(c)
H.F(d)
z=H.bH(a["$as"+H.k(c)],H.bc(b))
return z==null?null:z[d]},
aj:function(a,b,c){var z
H.I(b)
H.F(c)
z=H.bH(a["$as"+H.k(b)],H.bc(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.bc(a)
return z==null?null:z[b]},
cv:function(a){var z=H.bd(a,null)
return z},
bd:function(a,b){var z,y
H.u(b,"$ise",[P.f],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e3(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.nu(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.E(t,b[r])
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
for(z=H.nQ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bd(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e3:function(a,b,c){var z,y,x,w,v,u
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
y=J.M(a)
if(y[b]==null)return!1
return H.hz(H.bH(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.I(b)
H.c7(c)
H.I(d)
if(a==null)return a
z=H.c4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e3(c,0,null)
throw H.a(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hz:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ay(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ay(a[y],b,c[y],d))return!1
return!0},
pY:function(a,b,c){return a.apply(b,H.bH(J.M(b)["$as"+H.k(c)],H.bc(b)))},
hK:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="O"||a===-1||a===-2||H.hK(z)}return!1},
dZ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="O"||b===-1||b===-2||H.hK(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ct(a,b)}y=J.M(a).constructor
x=H.bc(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ay(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.dZ(a,b))throw H.a(H.aD(a,H.cv(b)))
return a},
ay:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="O")return!0
if('func' in c)return H.hI(a,b,c,d)
if('func' in a)return c.builtin$cls==="cd"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,x,d)
else if(H.ay(a,b,x,d))return!0
else{if(!('$is'+"bM" in y.prototype))return!1
w=y.prototype["$as"+"bM"]
v=H.bH(w,z?a.slice(1):null)
return H.ay(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cv(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hz(H.bH(r,z),b,u,d)},
hI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ay(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ay(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ay(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ok(m,b,l,d)},
ok:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ay(c[w],d,a[w],b))return!1}return!0},
pZ:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
o5:function(a){var z,y,x,w,v,u
z=H.I($.hH.$1(a))
y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hy.$2(a,z))
if(z!=null){y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d4(x)
$.d0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d3[z]=x
return x}if(v==="-"){u=H.d4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hN(a,x)
if(v==="*")throw H.a(P.co(z))
if(init.leafTags[z]===true){u=H.d4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hN(a,x)},
hN:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e4(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d4:function(a){return J.e4(a,!1,null,!!a.$isL)},
oj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d4(z)
else return J.e4(z,c,null,null)},
o0:function(){if(!0===$.e2)return
$.e2=!0
H.o1()},
o1:function(){var z,y,x,w,v,u,t,s
$.d0=Object.create(null)
$.d3=Object.create(null)
H.nX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hP.$1(v)
if(u!=null){t=H.oj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nX:function(){var z,y,x,w,v,u,t
z=C.V()
z=H.bD(C.S,H.bD(C.X,H.bD(C.x,H.bD(C.x,H.bD(C.W,H.bD(C.T,H.bD(C.U(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hH=new H.nY(v)
$.hy=new H.nZ(u)
$.hP=new H.o_(t)},
bD:function(a,b){return a(b)||b},
hR:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e6:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
io:{"^":"b;$ti",
i:function(a){return P.dt(this)},
p:function(a,b,c){H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
return H.ip()},
$isN:1},
iq:{"^":"io;a,b,c,$ti",
gm:function(a){return this.a},
bC:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bC(0,b))return
return this.dC(b)},
dC:function(a){return this.b[H.I(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.C(this.dC(v),z))}}},
jZ:{"^":"b;a,b,c,d,e,f,r,0x",q:{
k_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bN(z)
y=z[0]
x=z[1]
return new H.jZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kK:{"^":"b;a,b,c,d,e,f",
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
q:{
aP:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jE:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
f4:function(a,b){return new H.jE(a,b==null?null:b.method)}}},
j2:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
dp:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.j2(a,y,z?null:b.receiver)}}},
kY:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ov:{"^":"m:20;a",
$1:function(a){if(!!J.M(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
hc:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaC:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
geY:function(){return this},
$iscd:1,
geY:function(){return this}},
fk:{"^":"m;"},
kq:{"^":"fk;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
da:{"^":"fk;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.da))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bS(this.a)
else y=typeof z!=="object"?J.c9(z):H.bS(z)
return(y^H.bS(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
q:{
db:function(a){return a.a},
ek:function(a){return a.c},
cz:function(a){var z,y,x,w,v
z=new H.da("self","target","receiver","name")
y=J.bN(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kL:{"^":"a9;a",
i:function(a){return this.a},
q:{
aD:function(a,b){return new H.kL("TypeError: "+H.k(P.cD(a))+": type '"+H.hw(a)+"' is not a subtype of type '"+b+"'")}}},
id:{"^":"a9;a",
i:function(a){return this.a},
q:{
ie:function(a,b){return new H.id("CastError: "+H.k(P.cD(a))+": type '"+H.hw(a)+"' is not a subtype of type '"+b+"'")}}},
k8:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
k9:function(a){return new H.k8(a)}}},
b9:{"^":"eU;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
giA:function(a){return this.a===0},
gac:function(a){return new H.j8(this,[H.y(this,0)])},
bC:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dw(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dw(y,b)}else return this.ix(b)},
ix:function(a){var z=this.d
if(z==null)return!1
return this.cR(this.ca(z,this.cQ(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.iy(b)},
iy:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ca(z,this.cQ(a))
x=this.cR(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cf()
this.b=z}this.dn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cf()
this.c=y}this.dn(y,b,c)}else this.iz(b,c)},
iz:function(a,b){var z,y,x,w
H.C(a,H.y(this,0))
H.C(b,H.y(this,1))
z=this.d
if(z==null){z=this.cf()
this.d=z}y=this.cQ(a)
x=this.ca(z,y)
if(x==null)this.cn(z,y,[this.cg(a,b)])
else{w=this.cR(x,a)
if(w>=0)x[w].b=b
else x.push(this.cg(a,b))}},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aU(this))
z=z.c}},
dn:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.bw(a,b)
if(z==null)this.cn(a,b,this.cg(b,c))
else z.b=c},
fO:function(){this.r=this.r+1&67108863},
cg:function(a,b){var z,y
z=new H.j7(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fO()
return z},
cQ:function(a){return J.c9(a)&0x3ffffff},
cR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.dt(this)},
bw:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
cn:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
dw:function(a,b){return this.bw(a,b)!=null},
cf:function(){var z=Object.create(null)
this.cn(z,"<non-identifier-key>",z)
this.fJ(z,"<non-identifier-key>")
return z},
$iseR:1},
j7:{"^":"b;a,b,0c,0d"},
j8:{"^":"eA;a,$ti",
gm:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.j9(z,z.r,this.$ti)
y.c=z.e
return y}},
j9:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nY:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
nZ:{"^":"m:57;a",
$2:function(a,b){return this.a(a,b)}},
o_:{"^":"m:56;a",
$1:function(a){return this.a(H.I(a))}},
j0:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isf6:1,
$isk0:1,
q:{
j1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a3("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nQ:function(a){return J.eL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
om:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){return a},
jy:function(a){return new Int8Array(a)},
aR:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aS(b,a))},
no:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nO(a,b,c))
return b},
f2:{"^":"r;",$isf2:1,"%":"ArrayBuffer"},
dy:{"^":"r;",$isdy:1,$iskM:1,"%":"DataView;ArrayBufferView;dx|h6|h7|jz|h8|h9|ba"},
dx:{"^":"dy;",
gm:function(a){return a.length},
$isL:1,
$asL:I.e0},
jz:{"^":"h7;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nP(c)
H.aR(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.p]},
$asz:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
ba:{"^":"h9;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aR(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]}},
p5:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
p6:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
p7:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
p8:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
p9:{"^":"ba;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pa:{"^":"ba;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dz:{"^":"ba;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
c0:function(a,b,c){return new Uint8Array(a.subarray(b,H.no(b,c,a.length)))},
$isdz:1,
$isS:1,
"%":";Uint8Array"},
h6:{"^":"dx+z;"},
h7:{"^":"h6+cE;"},
h8:{"^":"dx+z;"},
h9:{"^":"h8+cE;"}}],["","",,P,{"^":"",
lw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bE(new P.ly(z),1)).observe(y,{childList:true})
return new P.lx(z,y,x)}else if(self.setImmediate!=null)return P.nC()
return P.nD()},
pL:[function(a){self.scheduleImmediate(H.bE(new P.lz(H.l(a,{func:1,ret:-1})),0))},"$1","nB",4,0,13],
pM:[function(a){self.setImmediate(H.bE(new P.lA(H.l(a,{func:1,ret:-1})),0))},"$1","nC",4,0,13],
pN:[function(a){P.dI(C.q,H.l(a,{func:1,ret:-1}))},"$1","nD",4,0,13],
dI:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.ab(a.a,1000)
return P.mH(z<0?0:z,b)},
fr:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bv]})
z=C.f.ab(a.a,1000)
return P.mI(z<0?0:z,b)},
nx:function(a,b){if(H.ct(a,{func:1,args:[P.b,P.aC]}))return b.iX(a,null,P.b,P.aC)
if(H.ct(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cx(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nw:function(){var z,y
for(;z=$.bC,z!=null;){$.c2=null
y=z.b
$.bC=y
if(y==null)$.c1=null
z.a.$0()}},
pX:[function(){$.dW=!0
try{P.nw()}finally{$.c2=null
$.dW=!1
if($.bC!=null)$.$get$dQ().$1(P.hA())}},"$0","hA",0,0,3],
hv:function(a){var z=new P.fY(H.l(a,{func:1,ret:-1}))
if($.bC==null){$.c1=z
$.bC=z
if(!$.dW)$.$get$dQ().$1(P.hA())}else{$.c1.b=z
$.c1=z}},
nA:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bC
if(z==null){P.hv(a)
$.c2=$.c1
return}y=new P.fY(a)
x=$.c2
if(x==null){y.b=z
$.c2=y
$.bC=y}else{y.b=x.b
x.b=y
$.c2=y
if(y.b==null)$.c1=y}},
oo:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.a_
if(C.j===y){P.cZ(null,null,C.j,a)
return}y.toString
P.cZ(null,null,y,H.l(y.cv(a),z))},
fq:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.dI(a,b)}return P.dI(a,H.l(y.cv(b),z))},
kH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.fr(a,b)}x=y.e2(b,P.bv)
$.a_.toString
return P.fr(a,H.l(x,z))},
cY:function(a,b,c,d,e){var z={}
z.a=d
P.nA(new P.ny(z,e))},
hr:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.a_
if(y===c)return d.$0()
$.a_=c
z=y
try{y=d.$0()
return y}finally{$.a_=z}},
hs:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.a_
if(y===c)return d.$1(e)
$.a_=c
z=y
try{y=d.$1(e)
return y}finally{$.a_=z}},
nz:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.a_
if(y===c)return d.$2(e,f)
$.a_=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a_=z}},
cZ:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cv(d):c.i9(d,-1)
P.hv(d)},
ly:{"^":"m:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lx:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lz:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lA:{"^":"m:0;a",
$0:function(){this.a.$0()}},
hg:{"^":"b;a,0b,c",
fs:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bE(new P.mK(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
ft:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bE(new P.mJ(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbv:1,
q:{
mH:function(a,b){var z=new P.hg(!0,0)
z.fs(a,b)
return z},
mI:function(a,b){var z=new P.hg(!1,0)
z.ft(a,b)
return z}}},
mK:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mJ:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.fe(w,x)}z.c=y
this.d.$1(z)}},
bA:{"^":"b;0a,b,c,d,e,$ti",
iF:function(a){if(this.c!==6)return!0
return this.b.b.d5(H.l(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
iw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.ct(z,{func:1,args:[P.b,P.aC]}))return H.e1(w.j5(z,a.a,a.b,null,y,P.aC),x)
else return H.e1(w.d5(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b3:{"^":"b;dP:a<,b,0hr:c<,$ti",
eS:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a_
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nx(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b3(0,$.a_,[c])
w=b==null?1:3
this.dq(new P.bA(x,w,a,b,[z,c]))
return x},
ja:function(a,b){return this.eS(a,null,b)},
dq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbA")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb3")
z=y.a
if(z<4){y.dq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cZ(null,null,z,H.l(new P.lQ(this,a),{func:1,ret:-1}))}},
dK:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbA")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb3")
y=u.a
if(y<4){u.dK(a)
return}this.a=y
this.c=u.c}z.a=this.by(a)
y=this.b
y.toString
P.cZ(null,null,y,H.l(new P.lV(z,this),{func:1,ret:-1}))}},
cj:function(){var z=H.d(this.c,"$isbA")
this.c=null
return this.by(z)},
by:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dt:function(a){var z,y,x,w
z=H.y(this,0)
H.e1(a,{futureOr:1,type:z})
y=this.$ti
x=H.c4(a,"$isbM",y,"$asbM")
if(x){z=H.c4(a,"$isb3",y,null)
if(z)P.h1(a,this)
else P.lR(a,this)}else{w=this.cj()
H.C(a,z)
this.a=4
this.c=a
P.bY(this,w)}},
c5:[function(a,b){var z
H.d(b,"$isaC")
z=this.cj()
this.a=8
this.c=new P.aq(a,b)
P.bY(this,z)},function(a){return this.c5(a,null)},"jj","$2","$1","gfE",4,2,52],
$isbM:1,
q:{
lR:function(a,b){var z,y,x
b.a=1
try{a.eS(new P.lS(b),new P.lT(b),null)}catch(x){z=H.ab(x)
y=H.bG(x)
P.oo(new P.lU(b,z,y))}},
h1:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb3")
if(z>=4){y=b.cj()
b.a=a.a
b.c=a.c
P.bY(b,y)}else{y=H.d(b.c,"$isbA")
b.a=2
b.c=a
a.dK(y)}},
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
P.cY(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cY(null,null,y,u,t)
return}o=$.a_
if(o==null?q!=null:o!==q)$.a_=q
else o=null
y=b.c
if(y===8)new P.lY(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lX(x,b,r).$0()}else if((y&2)!==0)new P.lW(z,x,b).$0()
if(o!=null)$.a_=o
y=x.b
if(!!J.M(y).$isbM){if(y.a>=4){n=H.d(t.c,"$isbA")
t.c=null
b=t.by(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.h1(y,t)
return}}m=b.b
n=H.d(m.c,"$isbA")
m.c=null
b=m.by(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaq")
m.a=8
m.c=u}z.a=m
y=m}}}},
lQ:{"^":"m:0;a,b",
$0:function(){P.bY(this.a,this.b)}},
lV:{"^":"m:0;a,b",
$0:function(){P.bY(this.b,this.a.a)}},
lS:{"^":"m:31;a",
$1:function(a){var z=this.a
z.a=0
z.dt(a)}},
lT:{"^":"m:51;a",
$2:function(a,b){this.a.c5(a,H.d(b,"$isaC"))},
$1:function(a){return this.$2(a,null)}},
lU:{"^":"m:0;a,b,c",
$0:function(){this.a.c5(this.b,this.c)}},
lY:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eP(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bG(v)
if(this.d){w=H.d(this.a.a.c,"$isaq").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaq")
else u.b=new P.aq(y,x)
u.a=!0
return}if(!!J.M(z).$isbM){if(z instanceof P.b3&&z.gdP()>=4){if(z.gdP()===8){w=this.b
w.b=H.d(z.ghr(),"$isaq")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ja(new P.lZ(t),null)
w.a=!1}}},
lZ:{"^":"m:49;a",
$1:function(a){return this.a}},
lX:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.d5(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bG(t)
x=this.a
x.b=new P.aq(z,y)
x.a=!0}}},
lW:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaq")
w=this.c
if(w.iF(z)&&w.e!=null){v=this.b
v.b=w.iw(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bG(u)
w=H.d(this.a.a.c,"$isaq")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aq(y,x)
s.a=!0}}},
fY:{"^":"b;a,0b"},
dG:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b3(0,$.a_,[P.n])
z.a=0
this.iE(new P.kt(z,this),!0,new P.ku(z,y),y.gfE())
return y}},
kt:{"^":"m;a,b",
$1:function(a){H.C(a,H.aj(this.b,"dG",0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.aj(this.b,"dG",0)]}}},
ku:{"^":"m:0;a,b",
$0:function(){this.b.dt(this.a.a)}},
fi:{"^":"b;$ti"},
ks:{"^":"b;"},
bv:{"^":"b;"},
aq:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa9:1},
nc:{"^":"b;",$ispK:1},
ny:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.f5()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
mi:{"^":"nc;",
j6:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.a_){a.$0()
return}P.hr(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bG(x)
P.cY(null,null,this,z,H.d(y,"$isaC"))}},
j7:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.a_){a.$1(b)
return}P.hs(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bG(x)
P.cY(null,null,this,z,H.d(y,"$isaC"))}},
i9:function(a,b){return new P.mk(this,H.l(a,{func:1,ret:b}),b)},
cv:function(a){return new P.mj(this,H.l(a,{func:1,ret:-1}))},
e2:function(a,b){return new P.ml(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eP:function(a,b){H.l(a,{func:1,ret:b})
if($.a_===C.j)return a.$0()
return P.hr(null,null,this,a,b)},
d5:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.j)return a.$1(b)
return P.hs(null,null,this,a,b,c,d)},
j5:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.j)return a.$2(b,c)
return P.nz(null,null,this,a,b,c,d,e,f)},
iX:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
mk:{"^":"m;a,b,c",
$0:function(){return this.a.eP(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
mj:{"^":"m:3;a,b",
$0:function(){return this.a.j6(this.b)}},
ml:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.j7(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ja:function(a,b,c,d,e){return new H.b9(0,0,[d,e])},
jb:function(a,b,c){H.c7(a)
return H.u(H.nR(a,new H.b9(0,0,[b,c])),"$iseR",[b,c],"$aseR")},
dr:function(a,b){return new H.b9(0,0,[a,b])},
ck:function(a,b,c,d){return new P.m5(0,0,[d])},
iX:function(a,b,c){var z,y
if(P.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c3()
C.a.h(y,a)
try{P.nv(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.fj(b,H.hL(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dk:function(a,b,c){var z,y,x
if(P.dX(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c3()
C.a.h(y,a)
try{x=z
x.a=P.fj(x.gaT(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
dX:function(a){var z,y
for(z=0;y=$.$get$c3(),z<y.length;++z)if(a===y[z])return!0
return!1},
nv:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.G();t=s,s=r){r=z.gO(z);++x
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
jc:function(a,b,c){var z=P.ja(null,null,null,b,c)
a.L(0,new P.jd(z,b,c))
return z},
eS:function(a,b){var z,y
z=P.ck(null,null,null,b)
for(y=J.b5(a);y.G();)z.h(0,H.C(y.gO(y),b))
return z},
dt:function(a){var z,y,x
z={}
if(P.dX(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c3(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
J.ea(a,new P.ji(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$c3()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
m5:{"^":"m_;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){var z=new P.h5(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscV")!=null}else{y=this.fF(b)
return y}},
fF:function(a){var z=this.d
if(z==null)return!1
return this.c8(this.dD(z,a),a)>=0},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dS()
this.b=z}return this.dr(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dS()
this.c=y}return this.dr(y,b)}else return this.fv(0,b)},
fv:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.dS()
this.d=z}y=this.du(b)
x=z[y]
if(x==null)z[y]=[this.c4(b)]
else{if(this.c8(x,b)>=0)return!1
x.push(this.c4(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dL(this.c,b)
else return this.hj(0,b)},
hj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dD(z,b)
x=this.c8(y,b)
if(x<0)return!1
this.dR(y.splice(x,1)[0])
return!0},
dr:function(a,b){H.C(b,H.y(this,0))
if(H.d(a[b],"$iscV")!=null)return!1
a[b]=this.c4(b)
return!0},
dL:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscV")
if(z==null)return!1
this.dR(z)
delete a[b]
return!0},
ds:function(){this.r=this.r+1&67108863},
c4:function(a){var z,y
z=new P.cV(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ds()
return z},
dR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ds()},
du:function(a){return J.c9(a)&0x3ffffff},
dD:function(a,b){return a[this.du(b)]},
c8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
q:{
dS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cV:{"^":"b;a,0b,0c"},
h5:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
m_:{"^":"ka;"},
jd:{"^":"m:8;a,b,c",
$2:function(a,b){this.a.p(0,H.C(a,this.b),H.C(b,this.c))}},
cH:{"^":"m6;",$isi:1,$ise:1},
z:{"^":"b;$ti",
ga0:function(a){return new H.ds(a,this.gm(a),0,[H.bb(this,a,"z",0)])},
I:function(a,b){return this.j(a,b)},
jd:function(a,b){var z,y,x
z=H.c([],[H.bb(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
jc:function(a){return this.jd(a,!0)},
aK:function(a,b,c,d){var z
H.C(d,H.bb(this,a,"z",0))
P.aY(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dk(a,"[","]")}},
eU:{"^":"ak;"},
ji:{"^":"m:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ak:{"^":"b;$ti",
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bb(this,a,"ak",0),H.bb(this,a,"ak",1)]})
for(z=J.b5(this.gac(a));z.G();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ap(this.gac(a))},
i:function(a){return P.dt(a)},
$isN:1},
mP:{"^":"b;$ti",
p:function(a,b,c){H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
jj:{"^":"b;$ti",
j:function(a,b){return J.e9(this.a,b)},
p:function(a,b,c){J.d6(this.a,H.C(b,H.y(this,0)),H.C(c,H.y(this,1)))},
L:function(a,b){J.ea(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ap(this.a)},
i:function(a){return J.ac(this.a)},
$isN:1},
fN:{"^":"mQ;a,$ti"},
kc:{"^":"b;$ti",
ad:function(a,b){var z
for(z=J.b5(H.u(b,"$isi",this.$ti,"$asi"));z.G();)this.h(0,z.gO(z))},
i:function(a){return P.dk(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ee("index"))
if(b<0)H.t(P.a5(b,0,null,"index",null))
for(z=new P.h5(this,this.r,this.$ti),z.c=this.e,y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
$isi:1},
ka:{"^":"kc;"},
m6:{"^":"b+z;"},
mQ:{"^":"jj+mP;$ti"}}],["","",,P,{"^":"",ia:{"^":"cb;a",
iI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$h_()
if(typeof d!=="number")return H.q(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d2(C.b.H(b,s))
o=H.d2(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.bT(r)
x=s
continue}}throw H.a(P.a3("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.eh(b,u,d,v,t,k)
else{j=C.f.bt(k-1,4)+1
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b7(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.eh(b,u,d,v,t,i)
else{j=C.f.bt(i,4)
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b7(b,d,d,j===2?"==":"=")}return b},
$ascb:function(){return[[P.e,P.n],P.f]},
q:{
eh:function(a,b,c,d,e,f){if(C.f.bt(f,4)!==0)throw H.a(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a3("Invalid base64 padding, more than two '=' characters",a,b))}}},ib:{"^":"b7;a",
$asb7:function(){return[[P.e,P.n],P.f]}},cb:{"^":"b;$ti"},b7:{"^":"ks;$ti"},iF:{"^":"cb;",
$ascb:function(){return[P.f,[P.e,P.n]]}},iT:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iS:{"^":"b7;a",
fG:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.b.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.i4(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb7:function(){return[P.f,P.f]}},lb:{"^":"iF;a",
gim:function(){return C.M}},li:{"^":"b7;",
bf:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.na(0,0,x)
if(w.fL(a,b,z)!==z)w.dT(J.hY(a,z-1),0)
return C.a3.c0(x,0,w.b)},
cD:function(a){return this.bf(a,0,null)},
$asb7:function(){return[P.f,[P.e,P.n]]}},na:{"^":"b;a,b,c",
dT:function(a,b){var z,y,x,w,v
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
fL:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dT(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},lc:{"^":"b7;a",
bf:function(a,b,c){var z,y,x,w,v
H.u(a,"$ise",[P.n],"$ase")
z=P.ld(!1,a,b,c)
if(z!=null)return z
y=J.ap(a)
P.aY(b,c,y,null,null,null)
x=new P.an("")
w=new P.n7(!1,x,!0,0,0,0)
w.bf(a,b,y)
w.is(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cD:function(a){return this.bf(a,0,null)},
$asb7:function(){return[[P.e,P.n],P.f]},
q:{
ld:function(a,b,c,d){H.u(b,"$ise",[P.n],"$ase")
if(b instanceof Uint8Array)return P.le(!1,b,c,d)
return},
le:function(a,b,c,d){var z,y,x
z=$.$get$fS()
if(z==null)return
y=0===c
if(y&&!0)return P.dN(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.dN(z,b)
return P.dN(z,b.subarray(c,d))},
dN:function(a,b){if(P.lg(b))return
return P.lh(a,b)},
lh:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
lg:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
lf:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},n7:{"^":"b;a,b,c,d,e,f",
is:function(a,b,c){var z
H.u(b,"$ise",[P.n],"$ase")
if(this.e>0){z=P.a3("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$ise",[P.n],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.n9(c)
v=new P.n8(this,b,c,a)
$label0$0:for(u=J.aT(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bY()
if((r&192)!==128){q=P.a3("Bad UTF-8 encoding 0x"+C.f.bp(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.z,q)
if(z<=C.z[q]){q=P.a3("Overlong encoding of 0x"+C.f.bp(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a3("Character outside valid Unicode range: 0x"+C.f.bp(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bT(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.de()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.a3("Negative UTF-8 code unit: -0x"+C.f.bp(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a3("Bad UTF-8 encoding 0x"+C.f.bp(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},n9:{"^":"m:50;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$ise",[P.n],"$ase")
z=this.a
for(y=J.aT(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bY()
if((w&127)!==w)return x-b}return z-b}},n8:{"^":"m:48;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cm(this.d,a,b)}}}],["","",,P,{"^":"",
cu:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.f]})
z=H.jS(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a3(a,null,null))},
iH:function(a){var z=J.M(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
je:function(a,b,c,d){var z,y
H.C(b,d)
z=J.iZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$ise",[d],"$ase")},
jf:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.G();)C.a.h(y,H.C(x.gO(x),c))
if(b)return y
return H.u(J.bN(y),"$ise",z,"$ase")},
cm:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbj",[z],"$asbj")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.f9(z?C.a.c0(a,b,c):a)}if(!!J.M(a).$isdz)return H.jU(a,b,P.aY(b,c,a.length,null,null,null))
return P.kv(a,b,c)},
kv:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a5(b,0,J.ap(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.ap(a),null,null))
y=J.b5(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gO(y))}return H.f9(w)},
k1:function(a,b,c){return new H.j0(a,H.j1(a,!1,!0,!1))},
fP:function(){var z=H.jK()
if(z!=null)return P.l3(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iH(a)},
v:function(a){return new P.h0(a)},
jg:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e5:function(a){H.om(a)},
l3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fO(b>0||c<c?C.b.v(a,b,c):a,5,null).geV()
else if(y===32)return P.fO(C.b.v(a,z,c),0,null).geV()}x=new Array(8)
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
if(P.ht(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jf()
if(v>=b)if(P.ht(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.q(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ah(a,"..",s)))n=r>s+2&&C.b.ah(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ah(a,"file",b)){if(u<=b){if(!C.b.ah(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b7(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ah(a,"http",b)){if(x&&t+3===s&&C.b.ah(a,"80",t+1))if(b===0&&!0){a=C.b.b7(a,t,s,"")
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
else if(v===z&&C.b.ah(a,"https",b)){if(x&&t+4===s&&C.b.ah(a,"443",t+1))if(b===0&&!0){a=C.b.b7(a,t,s,"")
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
q-=b}return new P.mr(a,v,u,t,s,r,q,o)}return P.mR(a,b,c,v,u,t,s,r,q,o)},
fR:function(a,b){var z=P.f
return C.a.it(H.c(a.split("&"),[z]),P.dr(z,z),new P.l6(b),[P.N,P.f,P.f])},
l1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.l2(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cu(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.de()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cu(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.de()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.l4(a)
y=new P.l5(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaC(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.l1(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.f.aY(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
np:function(){var z,y,x,w,v
z=P.jg(22,new P.nr(),!0,P.S)
y=new P.nq(z)
x=new P.ns()
w=new P.nt()
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
ht:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$ise",[P.n],"$ase")
z=$.$get$hu()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
T:{"^":"b;"},
"+bool":0,
at:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.f.aY(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.iw(H.jR(this))
y=P.cc(H.jP(this))
x=P.cc(H.jL(this))
w=P.cc(H.jM(this))
v=P.cc(H.jO(this))
u=P.cc(H.jQ(this))
t=P.ix(H.jN(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
iw:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ix:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cc:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a7;"},
"+double":0,
bg:{"^":"b;a",
k:function(a,b){return new P.bg(C.f.a4(this.a*b))},
S:function(a,b){return C.f.S(this.a,H.d(b,"$isbg").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.iB()
y=this.a
if(y<0)return"-"+new P.bg(0-y).i(0)
x=z.$1(C.f.ab(y,6e7)%60)
w=z.$1(C.f.ab(y,1e6)%60)
v=new P.iA().$1(y%1e6)
return""+C.f.ab(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
q:{
ez:function(a,b,c,d,e,f){return new P.bg(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
iA:{"^":"m:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iB:{"^":"m:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
f5:{"^":"a9;",
i:function(a){return"Throw of null."}},
aG:{"^":"a9;a,b,c,d",
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gc7()+y+x
if(!this.a)return w
v=this.gc6()
u=P.cD(this.b)
return w+v+": "+H.k(u)},
q:{
ca:function(a){return new P.aG(!1,null,null,a)},
cx:function(a,b,c){return new P.aG(!0,a,b,c)},
ee:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cL:{"^":"aG;e,f,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
cl:function(a,b,c){return new P.cL(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iV:{"^":"aG;e,m:f>,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){if(J.hU(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
X:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ap(b))
return new P.iV(b,z,!0,a,c,"Index out of range")}}},
l_:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
D:function(a){return new P.l_(a)}}},
kX:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
co:function(a){return new P.kX(a)}}},
dF:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
q:{
fh:function(a){return new P.dF(a)}}},
im:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cD(z))+"."},
q:{
aU:function(a){return new P.im(a)}}},
jF:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
ff:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
iu:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
h0:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iO:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
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
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
q:{
a3:function(a,b,c){return new P.iO(a,b,c)}}},
cd:{"^":"b;"},
n:{"^":"a7;"},
"+int":0,
i:{"^":"b;$ti",
d8:["f9",function(a,b){var z=H.aj(this,"i",0)
return new H.dP(this,H.l(b,{func:1,ret:P.T,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.ga0(this)
for(y=0;z.G();)++y
return y},
gaP:function(a){var z,y
z=this.ga0(this)
if(!z.G())throw H.a(H.cG())
y=z.gO(z)
if(z.G())throw H.a(H.iY())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ee("index"))
if(b<0)H.t(P.a5(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.G();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
i:function(a){return P.iX(this,"(",")")}},
dl:{"^":"b;$ti"},
e:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
O:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a7:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gW:function(a){return H.bS(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aC:{"^":"b;"},
f:{"^":"b;",$isf6:1},
"+String":0,
an:{"^":"b;aT:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispu:1,
q:{
fj:function(a,b,c){var z=J.b5(b)
if(!z.G())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.G())}else{a+=H.k(z.gO(z))
for(;z.G();)a=a+c+H.k(z.gO(z))}return a}}},
l6:{"^":"m:47;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.u(a,"$isN",[z,z],"$asN")
H.I(b)
y=J.aT(b).eB(b,"=")
if(y===-1){if(b!=="")J.d6(a,P.dU(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.ax(b,y+1)
z=this.a
J.d6(a,P.dU(x,0,x.length,z,!0),P.dU(w,0,w.length,z,!0))}return a}},
l2:{"^":"m:46;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv4 address, "+a,this.a,b))}},
l4:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
l5:{"^":"m:44;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cu(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cW:{"^":"b;c_:a<,b,c,d,eK:e>,f,r,0x,0y,0z,0Q,0ch",
geW:function(){return this.b},
gcP:function(a){var z=this.c
if(z==null)return""
if(C.b.a9(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbT:function(a){var z=this.d
if(z==null)return P.hi(this.a)
return z},
gd0:function(a){var z=this.f
return z==null?"":z},
gew:function(){var z=this.r
return z==null?"":z},
d4:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
g=P.dT(g,0,0,h)
return new P.cW(i,j,c,f,d,g,this.r)},
eN:function(a,b){return this.d4(a,null,null,null,null,null,null,b,null,null)},
gd1:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.fN(P.fR(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gex:function(){return this.c!=null},
geA:function(){return this.f!=null},
gey:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdM){y=this.a
x=b.gc_()
if(y==null?x==null:y===x)if(this.c!=null===b.gex()){y=this.b
x=b.geW()
if(y==null?x==null:y===x){y=this.gcP(this)
x=z.gcP(b)
if(y==null?x==null:y===x){y=this.gbT(this)
x=z.gbT(b)
if(y==null?x==null:y===x)if(this.e===z.geK(b)){y=this.f
x=y==null
if(!x===b.geA()){if(x)y=""
if(y===z.gd0(b)){z=this.r
y=z==null
if(!y===b.gey()){if(y)z=""
z=z===b.gew()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isdM:1,
q:{
cs:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$ise",[P.n],"$ase")
if(c===C.k){z=$.$get$hn().b
if(typeof b!=="string")H.t(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.C(b,H.aj(c,"cb",0))
y=c.gim().cD(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bT(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.n1(a,b,d)
else{if(d===b)P.bZ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.n2(a,z,e-1):""
x=P.mW(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.mZ(P.cu(C.b.v(a,w,g),new P.mS(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mX(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dT(a,h+1,i,null):null
return new P.cW(j,y,x,v,u,t,i<c?P.mV(a,i+1,c):null)},
hi:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bZ:function(a,b,c){throw H.a(P.a3(c,a,b))},
mZ:function(a,b){if(a!=null&&a===P.hi(b))return
return a},
mW:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.a_(a,z)!==93)P.bZ(a,b,"Missing end `]` to match `[` in host")
P.fQ(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fQ(a,b,c)
return"["+a+"]"}return P.n4(a,b,c)},
n4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.hp(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bZ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hj(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
n1:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hl(C.b.H(a,b)))P.bZ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bZ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.mT(y?a.toLowerCase():a)},
mT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n2:function(a,b,c){return P.c_(a,b,c,C.a0)},
mX:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c_(a,b,c,C.D):C.w.jU(d,new P.mY(),P.f).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a9(w,"/"))w="/"+w
return P.n3(w,e,f)},
n3:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a9(a,"/"))return P.n5(a,!z||c)
return P.n6(a)},
dT:function(a,b,c,d){var z,y
z={}
H.u(d,"$isN",[P.f,null],"$asN")
if(a!=null){if(d!=null)throw H.a(P.ca("Both query and queryParameters specified"))
return P.c_(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.L(0,new P.n_(new P.n0(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mV:function(a,b,c){return P.c_(a,b,c,C.n)},
hp:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.d2(y)
v=H.d2(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aY(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bT(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
hj:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.f.hB(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cm(y,0,null)},
c_:function(a,b,c,d){var z=P.ho(a,b,c,H.u(d,"$ise",[P.n],"$ase"),!1)
return z==null?C.b.v(a,b,c):z},
ho:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$ise",[P.n],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hp(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bZ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hj(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hm:function(a){if(C.b.a9(a,"."))return!0
return C.b.eB(a,"/.")!==-1},
n6:function(a){var z,y,x,w,v,u,t
if(!P.hm(a))return a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.V(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
n5:function(a,b){var z,y,x,w,v,u
if(!P.hm(a))return!b?P.hk(a):a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaC(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaC(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.p(z,0,P.hk(z[0]))}return C.a.n(z,"/")},
hk:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hl(J.hV(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.ax(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mU:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ca("Invalid URL encoding"))}}return z},
dU:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c6(a)
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
else u=new H.w(y.v(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.ca("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ca("Truncated URI"))
C.a.h(u,P.mU(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$ise",[P.n],"$ase")
return new P.lc(!1).cD(u)},
hl:function(a){var z=a|32
return 97<=z&&z<=122}}},
mS:{"^":"m:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a3("Invalid port",this.a,z+1))}},
mY:{"^":"m:19;",
$1:function(a){return P.cs(C.a1,a,C.k,!1)}},
n0:{"^":"m:33;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cs(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cs(C.p,b,C.k,!0))}}},
n_:{"^":"m:42;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b5(H.hL(b,"$isi")),y=this.a;z.G();)y.$2(a,H.I(z.gO(z)))}},
l0:{"^":"b;a,b,c",
geV:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.eC(y,"?",z)
w=y.length
if(x>=0){v=P.c_(y,x+1,w,C.n)
w=x}else v=null
z=new P.lF(this,"data",null,null,null,P.c_(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a3("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a3("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaC(z)
if(v!==44||x!==t+7||!C.b.ah(a,"base64",t+1))throw H.a(P.a3("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.J.iI(0,a,s,y)
else{r=P.ho(a,s,y,C.n,!0)
if(r!=null)a=C.b.b7(a,s,y,r)}return new P.l0(a,z,c)}}},
nr:{"^":"m:40;",
$1:function(a){return new Uint8Array(96)}},
nq:{"^":"m:37;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hZ(z,0,96,b)
return z}},
ns:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
nt:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mr:{"^":"b;a,b,c,d,e,f,r,x,0y",
gex:function(){return this.c>0},
gez:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
geA:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
gey:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdF:function(){return this.b===5&&C.b.a9(this.a,"https")},
gc_:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdE()){this.x="http"
z="http"}else if(this.gdF()){this.x="https"
z="https"}else if(z===4&&C.b.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geW:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcP:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbT:function(a){var z
if(this.gez()){z=this.d
if(typeof z!=="number")return z.E()
return P.cu(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geK:function(a){return C.b.v(this.a,this.e,this.f)},
gd0:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.b.v(this.a,z+1,y):""},
gew:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ax(y,z+1):""},
gd1:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.a2
z=P.f
return new P.fN(P.fR(this.gd0(this),C.k),[z,z])},
d4:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isN",[P.f,null],"$asN")
i=this.gc_()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gez()?this.gbT(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dT(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ax(y,x+1)
return new P.cW(i,j,c,f,d,g,b)},
eN:function(a,b){return this.d4(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdM)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdM:1},
lF:{"^":"cW;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ed:function(a){var z=document.createElement("a")
return z},
de:function(a,b){var z=document.createElement("canvas")
return z},
iC:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).as(z,a,b,c)
y.toString
z=W.H
z=new H.dP(new W.ax(y),H.l(new W.iD(),{func:1,ret:P.T,args:[z]}),[z])
return H.d(z.gaP(z),"$isW")},
iE:function(a){H.d(a,"$isaf")
return"wheel"},
bK:function(a){var z,y,x
z="element tag unavailable"
try{y=J.i1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iW:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseK")
try{J.i3(z,a)}catch(x){H.ab(x)}return z},
cT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h4:function(a,b,c,d){var z,y
z=W.cT(W.cT(W.cT(W.cT(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hx:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.a_
if(z===C.j)return a
return z.e2(a,b)},
a0:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ow:{"^":"r;0m:length=","%":"AccessibleNodeList"},
ox:{"^":"a0;0a7:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oy:{"^":"a0;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ei:{"^":"a0;",$isei:1,"%":"HTMLBaseElement"},
d9:{"^":"r;",$isd9:1,"%":";Blob"},
cy:{"^":"a0;",$iscy:1,"%":"HTMLBodyElement"},
oE:{"^":"a0;0a7:type}","%":"HTMLButtonElement"},
dd:{"^":"a0;",
bZ:function(a,b,c){if(c!=null)return a.getContext(b,P.nF(c,null))
return a.getContext(b)},
f_:function(a,b){return this.bZ(a,b,null)},
$isdd:1,
"%":"HTMLCanvasElement"},
en:{"^":"r;",$isen:1,"%":"CanvasRenderingContext2D"},
oG:{"^":"H;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oI:{"^":"it;0m:length=","%":"CSSPerspective"},
be:{"^":"r;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oJ:{"^":"lE;0m:length=",
f0:function(a,b){var z=a.getPropertyValue(this.fB(a,b))
return z==null?"":z},
fB:function(a,b){var z,y
z=$.$get$er()
y=z[b]
if(typeof y==="string")return y
y=this.hC(a,b)
z[b]=y
return y},
hC:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.iy()+b
if(z in a)return z
return b},
gcw:function(a){return a.bottom},
gaj:function(a){return a.height},
gb4:function(a){return a.left},
gbm:function(a){return a.right},
gbq:function(a){return a.top},
gam:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
is:{"^":"b;",
gb4:function(a){return this.f0(a,"left")}},
es:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
it:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oK:{"^":"es;0m:length=","%":"CSSTransformValue"},
oL:{"^":"es;0m:length=","%":"CSSUnparsedValue"},
oM:{"^":"r;0m:length=","%":"DataTransferItemList"},
bf:{"^":"a0;",$isbf:1,"%":"HTMLDivElement"},
oN:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
oO:{"^":"lH;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.u(c,"$isad",[P.a7],"$asad")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[[P.ad,P.a7]]},
$asz:function(){return[[P.ad,P.a7]]},
$isi:1,
$asi:function(){return[[P.ad,P.a7]]},
$ise:1,
$ase:function(){return[[P.ad,P.a7]]},
$asE:function(){return[[P.ad,P.a7]]},
"%":"ClientRectList|DOMRectList"},
iz:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gam(a))+" x "+H.k(this.gaj(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aF(b)
return a.left===z.gb4(b)&&a.top===z.gbq(b)&&this.gam(a)===z.gam(b)&&this.gaj(a)===z.gaj(b)},
gW:function(a){return W.h4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gcw:function(a){return a.bottom},
gaj:function(a){return a.height},
gb4:function(a){return a.left},
gbm:function(a){return a.right},
gbq:function(a){return a.top},
gam:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a7]},
"%":";DOMRectReadOnly"},
oP:{"^":"lJ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.I(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[P.f]},
$asz:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"DOMStringList"},
oQ:{"^":"r;0m:length=","%":"DOMTokenList"},
lD:{"^":"cH;dB:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.d(z[b],"$isW")},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.jc(this)
return new J.az(z,z.length,0,[H.y(z,0)])},
aK:function(a,b,c,d){throw H.a(P.co(null))},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$ase:function(){return[W.W]}},
W:{"^":"H;0j8:tagName=",
gi8:function(a){return new W.lK(a)},
gcC:function(a){return new W.lD(a,a.children)},
ge4:function(a){return P.jY(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a7)},
i:function(a){return a.localName},
as:["c1",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eC
if(z==null){z=H.c([],[W.aM])
y=new W.f3(z)
C.a.h(z,W.h2(null))
C.a.h(z,W.hd())
$.eC=y
d=y}else d=z
z=$.eB
if(z==null){z=new W.hq(d)
$.eB=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.di=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.d(y,"$isei")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscy")}z=$.aV
if(!!this.$iscy)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.a_,a.tagName)){$.di.selectNodeContents(x)
w=$.di.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.ec(x)
c.df(w)
document.adoptNode(w)
return w},function(a,b,c){return this.as(a,b,c,null)},"ih",null,null,"gjS",5,5,null],
f4:function(a,b,c,d){a.textContent=null
a.appendChild(this.as(a,b,c,d))},
f3:function(a,b){return this.f4(a,b,null,null)},
$isW:1,
"%":";Element"},
iD:{"^":"m:24;",
$1:function(a){return!!J.M(H.d(a,"$isH")).$isW}},
oR:{"^":"a0;0a7:type}","%":"HTMLEmbedElement"},
ae:{"^":"r;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"r;",
dW:["f7",function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(c!=null)this.fw(a,b,c,!1)}],
fw:function(a,b,c,d){return a.addEventListener(b,H.bE(H.l(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;ha|hb|he|hf"},
b8:{"^":"d9;",$isb8:1,"%":"File"},
eE:{"^":"lP;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isb8")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.b8]},
$asz:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$iseE:1,
$asE:function(){return[W.b8]},
"%":"FileList"},
oS:{"^":"af;0m:length=","%":"FileWriter"},
oT:{"^":"a0;0m:length=","%":"HTMLFormElement"},
bi:{"^":"r;",$isbi:1,"%":"Gamepad"},
oU:{"^":"r;0m:length=","%":"History"},
oV:{"^":"m1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isH")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asE:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ce:{"^":"r;0e5:data=",$isce:1,"%":"ImageData"},
eJ:{"^":"a0;",$iseJ:1,"%":"HTMLImageElement"},
eK:{"^":"a0;0a7:type}",$iseK:1,"%":"HTMLInputElement"},
bO:{"^":"dJ;",$isbO:1,"%":"KeyboardEvent"},
oZ:{"^":"a0;0a7:type}","%":"HTMLLinkElement"},
p_:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
p0:{"^":"r;0m:length=","%":"MediaList"},
p1:{"^":"af;",
dW:function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.f7(a,b,c,!1)},
"%":"MessagePort"},
p2:{"^":"m7;",
j:function(a,b){return P.b4(a.get(H.I(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.jv(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIInputMap"},
jv:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p3:{"^":"m8;",
j:function(a,b){return P.b4(a.get(H.I(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.jw(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
jw:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"r;",$isbm:1,"%":"MimeType"},
p4:{"^":"ma;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbm")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"MimeTypeArray"},
aA:{"^":"dJ;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ax:{"^":"cH;a",
gaP:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fh("No elements"))
if(y>1)throw H.a(P.fh("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w
H.u(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.d(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.eF(z,z.length,-1,[H.bb(C.a4,z,"E",0)])},
aK:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asz:function(){return[W.H]},
$asi:function(){return[W.H]},
$ase:function(){return[W.H]}},
H:{"^":"af;0cZ:previousSibling=",
iY:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j1:function(a,b){var z,y
try{z=a.parentNode
J.hW(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f8(a):z},
hm:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
pb:{"^":"r;",
iV:[function(a){return a.previousNode()},"$0","gcZ",1,0,26],
"%":"NodeIterator"},
jA:{"^":"mc;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isH")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asE:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
pe:{"^":"a0;0a7:type}","%":"HTMLOListElement"},
pf:{"^":"a0;0a7:type}","%":"HTMLObjectElement"},
bn:{"^":"r;0m:length=",$isbn:1,"%":"Plugin"},
pi:{"^":"mg;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"PluginArray"},
pk:{"^":"r;0a7:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pl:{"^":"mm;",
j:function(a,b){return P.b4(a.get(H.I(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.k7(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"RTCStatsReport"},
k7:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pm:{"^":"a0;0a7:type}","%":"HTMLScriptElement"},
pn:{"^":"a0;0m:length=","%":"HTMLSelectElement"},
bp:{"^":"af;",$isbp:1,"%":"SourceBuffer"},
po:{"^":"hb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"SourceBufferList"},
pp:{"^":"a0;0a7:type}","%":"HTMLSourceElement"},
bq:{"^":"r;",$isbq:1,"%":"SpeechGrammar"},
pq:{"^":"mt;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"r;0m:length=",$isbr:1,"%":"SpeechRecognitionResult"},
ps:{"^":"mw;",
j:function(a,b){return a.getItem(H.I(b))},
p:function(a,b,c){a.setItem(b,H.I(c))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new W.kr(z))
return z},
gm:function(a){return a.length},
$asak:function(){return[P.f,P.f]},
$isN:1,
$asN:function(){return[P.f,P.f]},
"%":"Storage"},
kr:{"^":"m:33;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pv:{"^":"a0;0a7:type}","%":"HTMLStyleElement"},
bs:{"^":"r;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
dH:{"^":"a0;",$isdH:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kw:{"^":"a0;",
as:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=W.iC("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ax(y).ad(0,new W.ax(z))
return y},
"%":"HTMLTableElement"},
px:{"^":"a0;",
as:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.as(z.createElement("table"),b,c,d)
z.toString
z=new W.ax(z)
x=z.gaP(z)
x.toString
z=new W.ax(x)
w=z.gaP(z)
y.toString
w.toString
new W.ax(y).ad(0,new W.ax(w))
return y},
"%":"HTMLTableRowElement"},
py:{"^":"a0;",
as:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.as(z.createElement("table"),b,c,d)
z.toString
z=new W.ax(z)
x=z.gaP(z)
y.toString
x.toString
new W.ax(y).ad(0,new W.ax(x))
return y},
"%":"HTMLTableSectionElement"},
fl:{"^":"a0;",$isfl:1,"%":"HTMLTemplateElement"},
bt:{"^":"af;",$isbt:1,"%":"TextTrack"},
bu:{"^":"af;",$isbu:1,"%":"TextTrackCue|VTTCue"},
pA:{"^":"mG;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbu")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bu]},
$asz:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asE:function(){return[W.bu]},
"%":"TextTrackCueList"},
pB:{"^":"hf;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbt")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TextTrackList"},
pC:{"^":"r;0m:length=","%":"TimeRanges"},
bw:{"^":"r;",$isbw:1,"%":"Touch"},
bx:{"^":"dJ;",$isbx:1,"%":"TouchEvent"},
pD:{"^":"mM;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbw")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bw]},
$asz:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asE:function(){return[W.bw]},
"%":"TouchList"},
pE:{"^":"r;0m:length=","%":"TrackDefaultList"},
pG:{"^":"r;",
iV:[function(a){return a.previousNode()},"$0","gcZ",1,0,26],
"%":"TreeWalker"},
dJ:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pI:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
pJ:{"^":"af;0m:length=","%":"VideoTrackList"},
bX:{"^":"aA;",
gik:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
gij:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbX:1,
"%":"WheelEvent"},
lv:{"^":"af;",
hn:function(a,b){return a.requestAnimationFrame(H.bE(H.l(b,{func:1,ret:-1,args:[P.a7]}),1))},
fK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fZ:{"^":"H;",$isfZ:1,"%":"Attr"},
pO:{"^":"ne;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbe")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.be]},
$asz:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$asE:function(){return[W.be]},
"%":"CSSRuleList"},
pP:{"^":"iz;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aF(b)
return a.left===z.gb4(b)&&a.top===z.gbq(b)&&a.width===z.gam(b)&&a.height===z.gaj(b)},
gW:function(a){return W.h4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gam:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pR:{"^":"ng;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbi")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bi]},
$asz:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$asE:function(){return[W.bi]},
"%":"GamepadList"},
pU:{"^":"ni;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isH")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asE:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pV:{"^":"nk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
pW:{"^":"nm;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbs")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.bs]},
$asz:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asE:function(){return[W.bs]},
"%":"StyleSheetList"},
lB:{"^":"eU;dB:a<",
L:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gac(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gac:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.d(z[w],"$isfZ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asak:function(){return[P.f,P.f]},
$asN:function(){return[P.f,P.f]}},
lK:{"^":"lB;a",
j:function(a,b){return this.a.getAttribute(H.I(b))},
p:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gm:function(a){return this.gac(this).length}},
lL:{"^":"dG;a,b,c,$ti",
iE:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a6(this.a,this.b,a,!1,z)}},
pQ:{"^":"lL;a,b,c,$ti"},
lM:{"^":"fi;a,b,c,d,e,$ti",
hG:function(){var z=this.d
if(z!=null&&this.a<=0)J.hX(this.b,this.c,z,!1)},
q:{
a6:function(a,b,c,d,e){var z=c==null?null:W.hx(new W.lN(c),W.ae)
z=new W.lM(0,a,b,z,!1,[e])
z.hG()
return z}}},
lN:{"^":"m:11;a",
$1:function(a){return this.a.$1(H.d(a,"$isae"))}},
cr:{"^":"b;a",
fm:function(a){var z,y
z=$.$get$dR()
if(z.giA(z)){for(y=0;y<262;++y)z.p(0,C.Z[y],W.nV())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nW())}},
aZ:function(a){return $.$get$h3().V(0,W.bK(a))},
aH:function(a,b,c){var z,y,x
z=W.bK(a)
y=$.$get$dR()
x=y.j(0,H.k(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dY(x.$4(a,b,c,this))},
$isaM:1,
q:{
h2:function(a){var z,y
z=W.ed(null)
y=window.location
z=new W.cr(new W.mn(z,y))
z.fm(a)
return z},
pS:[function(a,b,c,d){H.d(a,"$isW")
H.I(b)
H.I(c)
H.d(d,"$iscr")
return!0},"$4","nV",16,0,22],
pT:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isW")
H.I(b)
H.I(c)
z=H.d(d,"$iscr").a
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
return z},"$4","nW",16,0,22]}},
E:{"^":"b;$ti",
ga0:function(a){return new W.eF(a,this.gm(a),-1,[H.bb(this,a,"E",0)])},
aK:function(a,b,c,d){H.C(d,H.bb(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
f3:{"^":"b;a",
aZ:function(a){return C.a.e0(this.a,new W.jC(a))},
aH:function(a,b,c){return C.a.e0(this.a,new W.jB(a,b,c))},
$isaM:1},
jC:{"^":"m:28;a",
$1:function(a){return H.d(a,"$isaM").aZ(this.a)}},
jB:{"^":"m:28;a,b,c",
$1:function(a){return H.d(a,"$isaM").aH(this.a,this.b,this.c)}},
mo:{"^":"b;",
fq:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.d8(0,new W.mp())
y=b.d8(0,new W.mq())
this.b.ad(0,z)
x=this.c
x.ad(0,C.A)
x.ad(0,y)},
aZ:function(a){return this.a.V(0,W.bK(a))},
aH:["fd",function(a,b,c){var z,y
z=W.bK(a)
y=this.c
if(y.V(0,H.k(z)+"::"+b))return this.d.i6(c)
else if(y.V(0,"*::"+b))return this.d.i6(c)
else{y=this.b
if(y.V(0,H.k(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.k(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isaM:1},
mp:{"^":"m:16;",
$1:function(a){return!C.a.V(C.t,H.I(a))}},
mq:{"^":"m:16;",
$1:function(a){return C.a.V(C.t,H.I(a))}},
mD:{"^":"mo;e,a,b,c,d",
aH:function(a,b,c){if(this.fd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1},
q:{
hd:function(){var z,y,x,w,v
z=P.f
y=P.eS(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mE(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mD(y,P.ck(null,null,null,z),P.ck(null,null,null,z),P.ck(null,null,null,z),null)
y.fq(null,new H.jm(C.r,w,[x,z]),v,null)
return y}}},
mE:{"^":"m:19;",
$1:function(a){return"TEMPLATE::"+H.k(H.I(a))}},
mC:{"^":"b;",
aZ:function(a){var z=J.M(a)
if(!!z.$isfc)return!1
z=!!z.$iscN
if(z&&W.bK(a)==="foreignObject")return!1
if(z)return!0
return!1},
aH:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aZ(a)},
$isaM:1},
eF:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e9(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aM:{"^":"b;"},
mn:{"^":"b;a,b",$ispH:1},
hq:{"^":"b;a",
df:function(a){new W.nb(this).$2(a,null)},
bd:function(a,b){if(b==null)J.ec(a)
else b.removeChild(a)},
ht:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.i_(a)
x=y.gdB().getAttribute("is")
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
this.hs(H.d(a,"$isW"),b,z,v,u,H.d(y,"$isN"),H.I(x))}catch(t){if(H.ab(t) instanceof P.aG)throw t
else{this.bd(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.bd(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aZ(a)){this.bd(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aH(a,"is",g)){this.bd(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gac(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.gac(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.aH(a,J.i5(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.M(a).$isfl)this.df(a.content)},
$ispc:1},
nb:{"^":"m:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ht(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bd(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.i0(z)}catch(w){H.ab(w)
v=H.d(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isH")}}},
lE:{"^":"r+is;"},
lG:{"^":"r+z;"},
lH:{"^":"lG+E;"},
lI:{"^":"r+z;"},
lJ:{"^":"lI+E;"},
lO:{"^":"r+z;"},
lP:{"^":"lO+E;"},
m0:{"^":"r+z;"},
m1:{"^":"m0+E;"},
m7:{"^":"r+ak;"},
m8:{"^":"r+ak;"},
m9:{"^":"r+z;"},
ma:{"^":"m9+E;"},
mb:{"^":"r+z;"},
mc:{"^":"mb+E;"},
mf:{"^":"r+z;"},
mg:{"^":"mf+E;"},
mm:{"^":"r+ak;"},
ha:{"^":"af+z;"},
hb:{"^":"ha+E;"},
ms:{"^":"r+z;"},
mt:{"^":"ms+E;"},
mw:{"^":"r+ak;"},
mF:{"^":"r+z;"},
mG:{"^":"mF+E;"},
he:{"^":"af+z;"},
hf:{"^":"he+E;"},
mL:{"^":"r+z;"},
mM:{"^":"mL+E;"},
nd:{"^":"r+z;"},
ne:{"^":"nd+E;"},
nf:{"^":"r+z;"},
ng:{"^":"nf+E;"},
nh:{"^":"r+z;"},
ni:{"^":"nh+E;"},
nj:{"^":"r+z;"},
nk:{"^":"nj+E;"},
nl:{"^":"r+z;"},
nm:{"^":"nl+E;"}}],["","",,P,{"^":"",
nI:function(a){var z,y
z=J.M(a)
if(!!z.$isce){y=z.ge5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hh(a.data,a.height,a.width)},
nH:function(a){if(a instanceof P.hh)return{data:a.a,height:a.b,width:a.c}
return a},
b4:function(a){var z,y,x,w,v
if(a==null)return
z=P.dr(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.I(y[w])
z.p(0,v,a[v])}return z},
nF:function(a,b){var z={}
a.L(0,new P.nG(z))
return z},
ey:function(){var z=$.ex
if(z==null){z=J.d7(window.navigator.userAgent,"Opera",0)
$.ex=z}return z},
iy:function(){var z,y
z=$.eu
if(z!=null)return z
y=$.ev
if(y==null){y=J.d7(window.navigator.userAgent,"Firefox",0)
$.ev=y}if(y)z="-moz-"
else{y=$.ew
if(y==null){y=!P.ey()&&J.d7(window.navigator.userAgent,"Trident/",0)
$.ew=y}if(y)z="-ms-"
else z=P.ey()?"-o-":"-webkit-"}$.eu=z
return z},
mz:{"^":"b;",
eu:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d7:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isat)return new Date(a.a)
if(!!y.$isk0)throw H.a(P.co("structured clone of RegExp"))
if(!!y.$isb8)return a
if(!!y.$isd9)return a
if(!!y.$iseE)return a
if(!!y.$isce)return a
if(!!y.$isf2||!!y.$isdy)return a
if(!!y.$isN){x=this.eu(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.L(a,new P.mB(z,this))
return z.a}if(!!y.$ise){x=this.eu(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.ig(a,x)}throw H.a(P.co("structured clone of other type"))},
ig:function(a,b){var z,y,x,w
z=J.aT(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.d7(z.j(a,w)))
return x}},
mB:{"^":"m:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.d7(b)}},
hh:{"^":"b;e5:a>,b,c",$isce:1},
nG:{"^":"m:8;a",
$2:function(a,b){this.a[a]=b}},
mA:{"^":"mz;a,b"},
iL:{"^":"cH;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.aj(z,"z",0)
x=W.W
return new H.jk(new H.dP(z,H.l(new P.iM(),{func:1,ret:P.T,args:[y]}),[y]),H.l(new P.iN(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isW")
z=this.gbx()
J.i2(z.b.$1(J.cw(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gm:function(a){return J.ap(this.gbx().a)},
j:function(a,b){var z=this.gbx()
return z.b.$1(J.cw(z.a,b))},
ga0:function(a){var z=P.jf(this.gbx(),!1,W.W)
return new J.az(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$ase:function(){return[W.W]}},
iM:{"^":"m:24;",
$1:function(a){return!!J.M(H.d(a,"$isH")).$isW}},
iN:{"^":"m:58;",
$1:function(a){return H.j(H.d(a,"$isH"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
mh:{"^":"b;$ti",
gbm:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.C(z+this.c,H.y(this,0))},
gcw:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.C(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c4(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=this.a
y=J.aF(b)
x=y.gb4(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbq(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gbm(b)){if(typeof x!=="number")return x.E()
z=H.C(x+this.d,w)===y.gcw(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.c9(z)
x=this.b
w=J.c9(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.C(x+this.d,v)
return P.m2(P.cU(P.cU(P.cU(P.cU(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"mh;b4:a>,bq:b>,am:c>,aj:d>,$ti",q:{
jY:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"r;",$isbP:1,"%":"SVGLength"},oY:{"^":"m4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbP")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$asE:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"r;",$isbR:1,"%":"SVGNumber"},pd:{"^":"me;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbR")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$asE:function(){return[P.bR]},
"%":"SVGNumberList"},pj:{"^":"r;0m:length=","%":"SVGPointList"},fc:{"^":"cN;0a7:type}",$isfc:1,"%":"SVGScriptElement"},pt:{"^":"my;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.I(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"SVGStringList"},pw:{"^":"cN;0a7:type}","%":"SVGStyleElement"},cN:{"^":"W;",
gcC:function(a){return new P.iL(a,new W.ax(a))},
as:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aM])
C.a.h(z,W.h2(null))
C.a.h(z,W.hd())
C.a.h(z,new W.mC())
c=new W.hq(new W.f3(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).ih(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ax(w)
u=z.gaP(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscN:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bU:{"^":"r;",$isbU:1,"%":"SVGTransform"},pF:{"^":"mO;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbU")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bU]},
$isi:1,
$asi:function(){return[P.bU]},
$ise:1,
$ase:function(){return[P.bU]},
$asE:function(){return[P.bU]},
"%":"SVGTransformList"},m3:{"^":"r+z;"},m4:{"^":"m3+E;"},md:{"^":"r+z;"},me:{"^":"md+E;"},mx:{"^":"r+z;"},my:{"^":"mx+E;"},mN:{"^":"r+z;"},mO:{"^":"mN+E;"}}],["","",,P,{"^":"",S:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$iskM:1}}],["","",,P,{"^":"",oz:{"^":"r;0m:length=","%":"AudioBuffer"},eg:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oA:{"^":"lC;",
j:function(a,b){return P.b4(a.get(H.I(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
gac:function(a){var z=H.c([],[P.f])
this.L(a,new P.i7(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asak:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"AudioParamMap"},i7:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},i8:{"^":"eg;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oB:{"^":"af;0m:length=","%":"AudioTrackList"},ic:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oC:{"^":"eg;0a7:type}","%":"BiquadFilterNode"},pg:{"^":"ic;0m:length=","%":"OfflineAudioContext"},ph:{"^":"i8;0a7:type}","%":"Oscillator|OscillatorNode"},lC:{"^":"r+ak;"}}],["","",,P,{"^":"",dD:{"^":"r;",
eQ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.M(g)
if(!!y.$isce&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.nH(g))
return}if(!!y.$iseJ&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.ca("Incorrect number or type of arguments"))},
j9:function(a,b,c,d,e,f,g){return this.eQ(a,b,c,d,e,f,g,null,null,null)},
$isdD:1,
"%":"WebGLRenderingContext"},kx:{"^":"r;",$iskx:1,"%":"WebGLTexture"},kV:{"^":"r;",$iskV:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pr:{"^":"mv;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return P.b4(a.item(b))},
p:function(a,b,c){H.F(b)
H.d(c,"$isN")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$ise:1,
$ase:function(){return[[P.N,,,]]},
$asE:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},mu:{"^":"r+z;"},mv:{"^":"mu+E;"}}],["","",,O,{"^":"",ar:{"^":"b;0a,0b,0c,0d,$ti",
bv:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dg:function(a,b,c){var z=H.aj(this,"ar",0)
H.l(b,{func:1,ret:P.T,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b9:function(a,b){return this.dg(a,null,b)},
dJ:function(a){var z
H.u(a,"$isi",[H.aj(this,"ar",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dH:function(a,b){var z
H.u(b,"$isi",[H.aj(this,"ar",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.az(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aj(this,"ar",0)
H.C(b,z)
z=[z]
if(this.dJ(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dH(x,H.c([b],z))}},
ad:function(a,b){var z,y
H.u(b,"$isi",[H.aj(this,"ar",0)],"$asi")
if(this.dJ(b)){z=this.a
y=z.length
C.a.ad(z,b)
this.dH(y,b)}},
$isi:1,
q:{
df:function(a){var z=new O.ar([a])
z.bv(a)
return z}}},dv:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
fj:function(a){var z=this.b
if(!(z==null))z.C(a)},
aQ:function(){return this.fj(null)},
ga2:function(a){var z=this.a
if(z.length>0)return C.a.gaC(z)
else return V.bl()},
bV:function(a){var z=this.a
if(a==null)C.a.h(z,V.bl())
else C.a.h(z,a)
this.aQ()},
aM:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",d8:{"^":"b;"},aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aa:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().J(0,this.geI())
y=this.c
if(y!=null)y.gu().h(0,this.geI())
x=new D.J("shape",z,this.c,this,[F.fd])
x.b=!0
this.b6(x)}},
aw:function(a,b){var z
for(z=this.y.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aw(0,b)},
af:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga2(z))
z.aQ()
a.d_(this.f)
z=a.dy
y=(z&&C.a).gaC(z)
if(y!=null&&this.d!=null)y.eM(a,this)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.af(a)
a.cY()
a.dx.aM()},
gu:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
b6:function(a){var z=this.z
if(!(z==null))z.C(a)},
a3:function(){return this.b6(null)},
iM:[function(a){H.d(a,"$isA")
this.e=null
this.b6(a)},function(){return this.iM(null)},"jZ","$1","$0","geI",0,2,1],
iK:[function(a){this.b6(H.d(a,"$isA"))},function(){return this.iK(null)},"jX","$1","$0","geH",0,2,1],
jW:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geH(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.bh()
t.d=0
u.saa(t)}t=u.gaa()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a3()},"$2","giJ",8,0,6],
jY:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geH(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.gaa()==null){v=new D.bh()
v.d=0
w.saa(v)}w.gaa().J(0,y)}}this.a3()},"$2","giL",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaL:1,
q:{
dj:function(a,b,c,d,e,f){var z,y
z=new E.aW()
z.a=d
z.b=!0
y=O.df(E.aW)
z.y=y
y.b9(z.giJ(),z.giL())
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
z.sa8(0,e)
return z}}},k2:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fg:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.at(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dv()
y=[V.aI]
z.a=H.c([],y)
z.gu().h(0,new E.k4(this))
this.cy=z
z=new O.dv()
z.a=H.c([],y)
z.gu().h(0,new E.k5(this))
this.db=z
z=new O.dv()
z.a=H.c([],y)
z.gu().h(0,new E.k6(this))
this.dx=z
z=H.c([],[O.cn])
this.dy=z
C.a.h(z,null)
this.fr=new H.b9(0,0,[P.f,A.dE])},
giW:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga2(z)
y=this.db
y=z.k(0,y.ga2(y))
this.z=y
z=y}return z},
d_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaC(z):a;(z&&C.a).h(z,y)},
cY:function(){var z=this.dy
if(z.length>1)z.pop()},
e_:function(a){var z=a.b
if(z.length===0)throw H.a(P.v("May not cache a shader with no name."))
if(this.fr.bC(0,z))throw H.a(P.v('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.p(0,z,a)},
q:{
k3:function(a,b){var z=new E.k2(a,b)
z.fg(a,b)
return z}}},k4:{"^":"m:12;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.ch=null}},k5:{"^":"m:12;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},k6:{"^":"m:12;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},kE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0aa:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
fl:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.C(a)
this.j3()},function(){return this.fl(null)},"fk","$1","$0","gdk",0,2,1],
giv:function(){var z,y,x
z=Date.now()
y=C.f.ab(P.ez(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.at(z,!1)
return x/y},
dM:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.d.cO(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cO(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fq(C.q,this.gj2())}},
j3:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kG(this),{func:1,ret:-1,args:[P.a7]})
C.I.fK(z)
C.I.hn(z,W.hx(y,P.a7))}},"$0","gj2",0,0,3],
j0:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dM()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.at(w,!1)
x.y=P.ez(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.af(this.e)}x=this.z
if(!(x==null))x.C(null)}catch(v){z=H.ab(v)
y=H.bG(v)
P.e5("Error: "+H.k(z))
P.e5("Stack: "+H.k(y))
throw H.a(z)}},
q:{
kF:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isdd)return E.fp(a,!0,!0,!0,!1)
y=W.de(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.fp(y,!0,!0,!0,!1)
w.a=a
return w},
fp:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kE()
y=P.jb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.l.bZ(a,"webgl",y)
x=H.d(x==null?C.l.bZ(a,"experimental-webgl",y):x,"$isdD")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k3(x,a)
w=new T.kz(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.l7(a)
v=new X.j3()
v.c=new X.aK(!1,!1,!1)
v.d=P.ck(null,null,null,P.n)
w.b=v
v=new X.jx(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.jh(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kJ(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fi,P.b]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a6(u,"contextmenu",H.l(w.gfZ(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a6(a,"focus",H.l(w.gh1(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a6(a,"blur",H.l(w.gfW(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a6(u,"keyup",H.l(w.gh3(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a6(u,"keydown",H.l(w.gh2(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousedown",H.l(w.gh6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mouseup",H.l(w.gh8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousemove",H.l(w.gh7(),s),!1,t))
p=w.z
o=W.bX;(p&&C.a).h(p,W.a6(a,H.I(W.iE(a)),H.l(w.gh9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a6(u,"mousemove",H.l(w.gh_(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a6(u,"mouseup",H.l(w.gh0(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a6(u,"pointerlockchange",H.l(w.gha(),q),!1,r))
r=w.z
q=W.bx
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a6(a,"touchstart",H.l(w.ghi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchend",H.l(w.ghg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchmove",H.l(w.ghh(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.at(Date.now(),!1)
z.cy=0
z.dM()
return z}}},kG:{"^":"m:35;a",
$1:function(a){var z
H.ol(a)
z=this.a
if(z.ch){z.ch=!1
z.j0()}}}}],["","",,Z,{"^":"",fW:{"^":"b;a,b",q:{
dO:function(a,b,c){var z
H.u(c,"$ise",[P.n],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.fW(b,z)}}},el:{"^":"d8;a,b,c,d,e",
a6:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fX:{"^":"b;a",$isoD:1},dc:{"^":"b;a,0b,c,d",
aL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a6:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a6(a)},
av:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
af:function(a){var z,y,x,w,v
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
$ispz:1},cF:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},by:{"^":"b;a",
gdh:function(a){var z,y
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
i7:function(a){var z,y,x
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
return $.$get$fV()},
A:function(a,b){if(b==null)return!1
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
q:{
aw:function(a){return new Z.by(a)}}}}],["","",,D,{"^":"",eo:{"^":"b;"},bh:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.A]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).J(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).J(z,b)||y}return y},
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.L(y,new D.iI(z))
y=this.b
if(!(y==null))C.a.L(y,new D.iJ(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
cH:function(){return this.C(null)},
j4:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.C(y)}}},
au:function(a){return this.j4(a,!0,!1)},
q:{
K:function(){var z=new D.bh()
z.d=0
return z}}},iI:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},iJ:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"b;a,0b"},cf:{"^":"A;c,d,a,0b,$ti"},cg:{"^":"A;c,d,a,0b,$ti"},J:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",em:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.em))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
q:{"^":"oF<"}},eP:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eQ:{"^":"A;c,a,0b"},j3:{"^":"b;0a,0b,0c,0d",
iS:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.C(y)},
iO:function(a){var z,y
this.c=a.b
this.d.J(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.C(y)}},eT:{"^":"cK;x,y,c,d,e,a,0b"},jh:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s
z=new P.at(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gb0()
s=new X.bQ(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cX:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.aF(a,b))
return!0},
bk:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f2()
if(typeof z!=="number")return z.bY()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.aF(a,b))
return!0},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.aF(a,b))
return!0},
iT:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dw(new V.a1(v*u,t*s),y,x,new P.at(w,!1),this)
w.b=!0
z.C(w)
return!0},
h5:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.at(Date.now(),!1)
y=this.f
x=new X.eT(c,a,this.a.gb0(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.U(0,0)}},aK:{"^":"b;a,b,c",
A:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bQ:{"^":"cK;x,y,z,Q,ch,c,d,e,a,0b"},jx:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c9:function(a,b,c){var z,y,x
z=new P.at(Date.now(),!1)
y=this.a.gb0()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cX:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.c9(a,b,!0))
return!0},
bk:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f2()
if(typeof z!=="number")return z.bY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.c9(a,b,!0))
return!0},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.c9(a,b,!1))
return!0},
iU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dw(new V.a1(w*v,u*t),y,b,new P.at(x,!1),this)
x.b=!0
z.C(x)
return!0},
ge7:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
gbX:function(){var z=this.c
if(z==null){z=D.K()
this.c=z}return z},
geG:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z}},dw:{"^":"cK;x,c,d,e,a,0b"},cK:{"^":"A;"},fu:{"^":"cK;x,y,z,Q,ch,c,d,e,a,0b"},kJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.u(a,"$ise",[V.U],"$ase")
z=new P.at(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gb0()
w=new X.fu(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iR:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.b
if(z==null)return!1
z.C(this.aF(a,!0))
return!0},
iP:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.c
if(z==null)return!1
z.C(this.aF(a,!0))
return!0},
iQ:function(a){var z
H.u(a,"$ise",[V.U],"$ase")
z=this.d
if(z==null)return!1
z.C(this.aF(a,!1))
return!0}},l7:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb0:function(){var z=this.a
return V.dC(0,0,(z&&C.l).ge4(z).c,C.l.ge4(z).d)},
dz:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eP(z,new X.aK(y,a.altKey,a.shiftKey))},
aX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
co:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.U(y-w,x-v)},
bc:function(a){return new V.a1(a.movementX,a.movementY)},
ci:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.a4(u.pageX)
C.d.a4(u.pageY)
s=z.left
C.d.a4(u.pageX)
C.a.h(y,new V.U(t-s,C.d.a4(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.em(z,new X.aK(y,a.altKey,a.shiftKey))},
cb:function(a){var z,y,x,w,v,u
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
jw:[function(a){this.f=!0},"$1","gh1",4,0,11],
jq:[function(a){this.f=!1},"$1","gfW",4,0,11],
jt:[function(a){H.d(a,"$isaA")
if(this.f&&this.cb(a))a.preventDefault()},"$1","gfZ",4,0,4],
jy:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dz(a)
if(this.b.iS(z))a.preventDefault()},"$1","gh3",4,0,29],
jx:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dz(a)
if(this.b.iO(z))a.preventDefault()},"$1","gh2",4,0,29],
jA:[function(a){var z,y,x,w
H.d(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aX(a)
if(this.x){y=this.aD(a)
x=this.bc(a)
if(this.d.cX(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aG(a)
if(this.c.cX(y,w))a.preventDefault()},"$1","gh6",4,0,4],
jC:[function(a){var z,y,x
H.d(a,"$isaA")
this.aX(a)
z=this.aD(a)
if(this.x){y=this.bc(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","gh8",4,0,4],
jv:[function(a){var z,y,x
H.d(a,"$isaA")
if(!this.cb(a)){this.aX(a)
z=this.aD(a)
if(this.x){y=this.bc(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","gh0",4,0,4],
jB:[function(a){var z,y,x
H.d(a,"$isaA")
this.aX(a)
z=this.aD(a)
if(this.x){y=this.bc(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bj(z,x))a.preventDefault()},"$1","gh7",4,0,4],
ju:[function(a){var z,y,x
H.d(a,"$isaA")
if(!this.cb(a)){this.aX(a)
z=this.aD(a)
if(this.x){y=this.bc(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bj(z,x))a.preventDefault()}},"$1","gh_",4,0,4],
jD:[function(a){var z,y
H.d(a,"$isbX")
this.aX(a)
z=new V.a1((a&&C.H).gij(a),C.H.gik(a)).w(0,180)
if(this.x){if(this.d.iT(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.iU(z,y))a.preventDefault()},"$1","gh9",4,0,39],
jE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aD(this.y)
v=this.aG(this.y)
this.d.h5(w,v,x)}},"$1","gha",4,0,11],
jM:[function(a){var z
H.d(a,"$isbx")
this.a.focus()
this.f=!0
this.co(a)
z=this.ci(a)
if(this.e.iR(z))a.preventDefault()},"$1","ghi",4,0,15],
jK:[function(a){var z
H.d(a,"$isbx")
this.co(a)
z=this.ci(a)
if(this.e.iP(z))a.preventDefault()},"$1","ghg",4,0,15],
jL:[function(a){var z
H.d(a,"$isbx")
this.co(a)
z=this.ci(a)
if(this.e.iQ(z))a.preventDefault()},"$1","ghh",4,0,15]}}],["","",,D,{"^":"",cC:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z},
aR:[function(a){var z
H.d(a,"$isA")
z=this.d
if(!(z==null))z.C(a)},function(){return this.aR(null)},"jg","$1","$0","gfo",0,2,1],
$isa8:1,
$isaL:1},a8:{"^":"b;",$isaL:1},j4:{"^":"ar;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
aR:function(a){var z=this.Q
if(!(z==null))z.C(a)},
h4:[function(a){var z
H.d(a,"$isA")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.h4(null)},"jz","$1","$0","gdI",0,2,1],
jF:[function(a){var z,y,x
H.u(a,"$isi",[D.a8],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.fn(x))return!1}return!0},"$1","ghb",4,0,41],
jn:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a8
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdI(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.d(b[u],"$isa8")
if(t instanceof D.cC)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bh()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cf(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gfT",8,0,21],
jH:[function(a,b){var z,y,x,w,v,u
z=D.a8
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdI(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.d(b[w],"$isa8")
if(v instanceof D.cC)C.a.J(this.e,v)
u=v.d
if(u==null){u=new D.bh()
u.d=0
v.d=u}u.J(0,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghd",8,0,21],
fn:function(a){var z=C.a.V(this.e,a)
return z},
$asi:function(){return[D.a8]},
$asar:function(){return[D.a8]}},jJ:{"^":"b;",$isa8:1,$isaL:1},kp:{"^":"b;",$isa8:1,$isaL:1},kB:{"^":"b;",$isa8:1,$isaL:1},kC:{"^":"b;",$isa8:1,$isaL:1},kD:{"^":"b;",$isa8:1,$isaL:1}}],["","",,V,{"^":"",
oH:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","ju",8,0,38],
d5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bt(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.d.eT($.o.$2(a,0)?0:a,b),c+b+1)},
bF:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$ise",[P.p],"$ase")
z=H.c([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.p(z,u,C.b.al(z[u],x))}return z},
c8:function(a,b){return C.d.jb(Math.pow(b,C.R.cO(Math.log(H.nE(a))/Math.log(b))))},
a4:{"^":"b;a,b,c",
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
return new V.a4(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
as:{"^":"b;a,b,c,d",
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
return new V.as(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cJ:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscJ")
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
return new V.cJ(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cJ))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
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
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
cS:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.bl()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isaI")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.q(s)
r=a7.b
if(typeof r!=="number")return H.q(r)
q=a7.f
if(typeof q!=="number")return H.q(q)
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
if(typeof o!=="number")return H.q(o)
n=a7.c
if(typeof n!=="number")return H.q(n)
m=a7.r
if(typeof m!=="number")return H.q(m)
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
if(typeof k!=="number")return H.q(k)
j=a7.d
if(typeof j!=="number")return H.q(j)
i=a7.x
if(typeof i!=="number")return H.q(i)
h=a7.ch
if(typeof h!=="number")return H.q(h)
g=a7.dx
if(typeof g!=="number")return H.q(g)
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
d6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
br:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.P()},
ev:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
P:function(){return this.ev("",3,0)},
F:function(a){return this.ev(a,3,0)},
q:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bl:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
f1:function(a,b,c){return V.aJ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eZ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
f_:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
f0:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
eY:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.D(c)))
y=b.aI(z)
x=y.w(0,Math.sqrt(y.D(y)))
w=z.aI(x)
v=new V.G(a.a,a.b,a.c)
return V.aJ(x.a,w.a,z.a,x.T(0).D(v),x.b,w.b,z.b,w.T(0).D(v),x.c,w.c,z.c,z.T(0).D(v),0,0,0,1)}}},
U:{"^":"b;a,b",
M:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
Y:{"^":"b;a,b,c",
E:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aN:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aN(this.a*b,this.b*b,this.c*b,this.d*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
fa:{"^":"b;a,b,c,d",
gae:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fa))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
q:{
dC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fa(a,b,c,d)}}},
a1:{"^":"b;a,b",
iC:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,18],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a1(z*b,y*b)},
w:function(a,b){var z,y
if($.o.$2(b,0))return new V.a1(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a1(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
iC:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,18],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cT:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aI:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.G(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.o.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
eE:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ik:{"^":"eo;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c3:function(a){var z=V.d5(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.C(a)},
sd9:function(a,b){},
scU:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c3(z)}z=new D.J("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.K(z)}},
scW:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c3(z)}z=new D.J("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.K(z)}},
sa1:function(a,b){var z,y
b=this.c3(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.p])
z.b=!0
this.K(z)}},
scV:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.K(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.p])
z.b=!0
this.K(z)}},
scF:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.p])
z.b=!0
this.K(z)}},
aw:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
q:{
dg:function(){var z=new U.ik()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eq:{"^":"ag;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
aO:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eq))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
q:{
dh:function(a){var z=new U.eq()
z.a=a
return z}}},eH:{"^":"ar;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
K:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.C(a)},function(){return this.K(null)},"ap","$1","$0","gaW",0,2,1],
jh:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ag
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaW(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gfp",8,0,17],
jG:[function(a,b){var z,y,x,w,v
z=U.ag
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaW(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gu().J(0,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.K(z)},"$2","ghc",8,0,17],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.az(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bl():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eH))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ag]},
$asar:function(){return[U.ag]},
$isag:1,
q:{
eI:function(a){var z=new U.eH()
z.bv(U.ag)
z.b9(z.gfp(),z.ghc())
z.e=null
z.f=V.bl()
z.r=0
return z}}},ag:{"^":"eo;"},fb:{"^":"ag;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.C(a)},
seX:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.J("yaw",y,a,this,[P.p])
z.b=!0
this.K(z)}},
seL:function(a,b){var z,y
b=V.d5(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.J("pitch",y,b,this,[P.p])
z.b=!0
this.K(z)}},
seO:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.J("roll",y,a,this,[P.p])
z.b=!0
this.K(z)}},
aO:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seX(this.a+this.d*b.y)
this.seL(0,this.b+this.e*b.y)
this.seO(this.c+this.f*b.y)
this.x=V.f0(this.c).k(0,V.f_(this.b)).k(0,V.eZ(this.a))
z=this.y
if(!(z==null))z.au(0)}return this.x},
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.fb))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"], ["+V.P(this.d,3,0)+", "+V.P(this.e,3,0)+", "+V.P(this.f,3,0)+"]"}},l8:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.K()
this.cy=z}return z},
K:[function(a){var z
H.d(a,"$isA")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.K(null)},"ap","$1","$0","gaW",0,2,1],
be:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge7().h(0,this.gcc())
this.a.c.geG().h(0,this.gcd())
this.a.c.gbX().h(0,this.gce())
return!0},
fP:[function(a){H.d(a,"$isA")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcc",4,0,2],
fQ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isA"),"$isbQ")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.a1(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.a1(y.a,y.b).k(0,2).w(0,z.gae())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.a1(x.a,x.b).k(0,2).w(0,z.gae())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
this.b.sU(0)
y=y.M(0,a.z)
this.Q=new V.a1(y.a,y.b).k(0,2).w(0,z.gae())}this.ap()},"$1","gcd",4,0,2],
fR:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sU(y*10*x)
this.ap()}},"$1","gce",4,0,2],
aO:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=b.y
this.b.aw(0,x)
this.cx=V.f0(this.b.d)}return this.cx},
$isag:1},l9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
K:[function(a){var z
H.d(a,"$isA")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.K(null)},"ap","$1","$0","gaW",0,2,1],
be:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge7().h(0,this.gcc())
this.a.c.geG().h(0,this.gcd())
this.a.c.gbX().h(0,this.gce())
z=this.a.d
y=z.f
if(y==null){y=D.K()
z.f=y
z=y}else z=y
z.h(0,this.gfM())
z=this.a.d
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.gfN())
z=this.a.e
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.ghF())
z=this.a.e
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.ghE())
z=this.a.e
y=z.c
if(y==null){y=D.K()
z.c=y
z=y}else z=y
z.h(0,this.ghD())
return!0},
ay:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.a1(z,y)},
fP:[function(a){a=H.j(H.d(a,"$isA"),"$isbQ")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcc",4,0,2],
fQ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isA"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a1(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ay(new V.a1(y.a,y.b).k(0,2).w(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ay(new V.a1(x.a,x.b).k(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ay(new V.a1(y.a,y.b).k(0,2).w(0,z.gae()))}this.ap()},"$1","gcd",4,0,2],
fR:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.ap()}},"$1","gce",4,0,2],
jk:[function(a){if(H.j(H.d(a,"$isA"),"$iseT").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfM",4,0,2],
jl:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isA"),"$isbQ")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ay(new V.a1(x.a,x.b).k(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ay(new V.a1(y.a,y.b).k(0,2).w(0,z.gae()))
this.ap()},"$1","gfN",4,0,2],
jQ:[function(a){H.d(a,"$isA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghF",4,0,2],
jP:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isA"),"$isfu")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a1(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ay(new V.a1(y.a,y.b).k(0,2).w(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ay(new V.a1(x.a,x.b).k(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ay(new V.a1(y.a,y.b).k(0,2).w(0,z.gae()))}this.ap()},"$1","ghE",4,0,2],
jO:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.ap()}},"$1","ghD",4,0,2],
aO:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.aw(0,x)
this.b.aw(0,x)
this.fr=V.eZ(this.b.d).k(0,V.f_(this.c.d))}return this.fr},
$isag:1},la:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.K()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.C(a)},
be:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.K()
z.e=y
z=y}else z=y
y=this.gfS()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.K()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jm:[function(a){var z,y,x,w
H.d(a,"$isA")
if(!J.V(this.b,this.a.b.c))return
H.j(a,"$isdw")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.p])
z.b=!0
this.K(z)}},"$1","gfS",4,0,2],
aO:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aJ(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isag:1}}],["","",,M,{"^":"",il:{"^":"ar;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
a5:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.C(a)},function(){return this.a5(null)},"dl","$1","$0","gY",0,2,1],
jI:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghe",8,0,32],
jJ:[function(a,b){var z,y,x,w,v
z=M.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gu().J(0,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghf",8,0,32],
af:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(!(y==null))y.af(a)}this.e=!1},
$asi:function(){return[M.aO]},
$asar:function(){return[M.aO]},
$isaO:1},ir:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
a5:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.C(a)},function(){return this.a5(null)},"dl","$1","$0","gY",0,2,1],
sb_:function(a){var z,y
if(a==null)a=new X.iU()
z=this.a
if(z!==a){if(z!=null)z.gu().J(0,this.gY())
y=this.a
this.a=a
a.gu().h(0,this.gY())
z=new D.J("camera",y,this.a,this,[X.cA])
z.b=!0
this.a5(z)}},
sbn:function(a,b){var z,y
if(b==null)b=X.eG(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().J(0,this.gY())
y=this.b
this.b=b
b.gu().h(0,this.gY())
z=new D.J("target",y,this.b,this,[X.cO])
z.b=!0
this.a5(z)}},
sb8:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().J(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gY())
z=new D.J("technique",y,this.c,this,[O.cn])
z.b=!0
this.a5(z)}},
af:function(a){a.d_(this.c)
this.b.a6(a)
this.a.a6(a)
this.d.aw(0,a)
this.d.af(a)
this.a.av(a)
this.b.av(a)
a.cY()},
$isaO:1},iG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a5:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.C(a)},function(){return this.a5(null)},"dl","$1","$0","gY",0,2,1],
jr:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aW
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gaa()==null){s=new D.bh()
s.d=0
t.saa(s)}s=t.gaa()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gfX",8,0,6],
js:[function(a,b){var z,y,x,w,v,u
z=E.aW
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.gaa()==null){u=new D.bh()
u.d=0
v.saa(u)}v.gaa().J(0,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gfY",8,0,6],
sb_:function(a){var z,y
if(a==null)a=X.dA(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().J(0,this.gY())
y=this.a
this.a=a
a.gu().h(0,this.gY())
z=new D.J("camera",y,this.a,this,[X.cA])
z.b=!0
this.a5(z)}},
sbn:function(a,b){var z,y
if(b==null)b=X.eG(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().J(0,this.gY())
y=this.b
this.b=b
b.gu().h(0,this.gY())
z=new D.J("target",y,this.b,this,[X.cO])
z.b=!0
this.a5(z)}},
sb8:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().J(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gY())
z=new D.J("technique",y,this.c,this,[O.cn])
z.b=!0
this.a5(z)}},
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
af:function(a){var z
a.d_(this.c)
this.b.a6(a)
this.a.a6(a)
z=this.c
if(z!=null)z.aw(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aw(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.af(a)
this.a.toString
a.cy.aM()
a.db.aM()
this.b.av(a)
a.cY()},
$isaO:1,
q:{
eD:function(a,b,c,d){var z,y
z=new M.iG()
y=O.df(E.aW)
z.d=y
y.b9(z.gfX(),z.gfY())
z.e=null
z.f=null
z.r=null
z.x=null
z.sb_(a)
z.sbn(0,c)
z.sb8(d)
return z}}},aO:{"^":"b;"}}],["","",,A,{"^":"",ef:{"^":"b;a,b,c"},i6:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
il:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
e6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eW:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0at,0bE,0e8,0bF,0bG,0e9,0ea,0bH,0bI,0eb,0ec,0bJ,0bK,0ed,0ee,0bL,0ef,0eg,0bM,0eh,0ei,0bN,0bO,0bP,0ej,0ek,0bQ,0bR,0el,0em,0bS,0en,0cI,0eo,0cJ,0ep,0cK,0eq,0cL,0er,0cM,0es,0cN,a,b,0c,0d,0e,0f,0r,0x,0y",
ff:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
a1.hI(z)
a1.hP(z)
a1.hJ(z)
a1.hX(z)
a1.hY(z)
a1.hR(z)
a1.i1(z)
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
v.hM(z)
v.hH(z)
v.hK(z)
v.hN(z)
v.hV(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hT(z)
v.hU(z)}v.hQ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
v.hL(z)
v.hS(z)
v.hW(z)
v.hZ(z)
v.i_(z)
v.i0(z)
v.hO(z)}r=z.a+="// === Main ===\n"
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
this.eD(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.t(0,"invViewMat"),"$isaQ")
if(y)this.dy=H.j(this.y.t(0,"objMat"),"$isaQ")
if(w)this.fr=H.j(this.y.t(0,"viewObjMat"),"$isaQ")
this.fy=H.j(this.y.t(0,"projViewObjMat"),"$isaQ")
if(a1.x2)this.k1=H.j(this.y.t(0,"txt2DMat"),"$isdL")
if(a1.y1)this.k2=H.j(this.y.t(0,"txtCubeMat"),"$isaQ")
if(a1.y2)this.k3=H.j(this.y.t(0,"colorMat"),"$isaQ")
this.r1=H.c([],[A.aQ])
y=a1.aB
if(y>0){this.k4=H.d(this.y.t(0,"bendMatCount"),"$isR")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaQ"))}}y=a1.a
if(y!==C.c){this.r2=H.j(this.y.t(0,"emissionClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.rx=H.j(this.y.t(0,"emissionTxt"),"$isav")
this.x1=H.j(this.y.t(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.j(this.y.t(0,"emissionTxt"),"$isao")
this.x1=H.j(this.y.t(0,"nullEmissionTxt"),"$isR")
break}}y=a1.b
if(y!==C.c){this.x2=H.j(this.y.t(0,"ambientClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.y1=H.j(this.y.t(0,"ambientTxt"),"$isav")
this.aB=H.j(this.y.t(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.j(this.y.t(0,"ambientTxt"),"$isao")
this.aB=H.j(this.y.t(0,"nullAmbientTxt"),"$isR")
break}}y=a1.c
if(y!==C.c){this.at=H.j(this.y.t(0,"diffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.bE=H.j(this.y.t(0,"diffuseTxt"),"$isav")
this.bF=H.j(this.y.t(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.e8=H.j(this.y.t(0,"diffuseTxt"),"$isao")
this.bF=H.j(this.y.t(0,"nullDiffuseTxt"),"$isR")
break}}y=a1.d
if(y!==C.c){this.bG=H.j(this.y.t(0,"invDiffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.e9=H.j(this.y.t(0,"invDiffuseTxt"),"$isav")
this.bH=H.j(this.y.t(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.ea=H.j(this.y.t(0,"invDiffuseTxt"),"$isao")
this.bH=H.j(this.y.t(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a1.e
if(y!==C.c){this.bK=H.j(this.y.t(0,"shininess"),"$isa2")
this.bI=H.j(this.y.t(0,"specularClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.eb=H.j(this.y.t(0,"specularTxt"),"$isav")
this.bJ=H.j(this.y.t(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.ec=H.j(this.y.t(0,"specularTxt"),"$isao")
this.bJ=H.j(this.y.t(0,"nullSpecularTxt"),"$isR")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.e:this.ed=H.j(this.y.t(0,"bumpTxt"),"$isav")
this.bL=H.j(this.y.t(0,"nullBumpTxt"),"$isR")
break
case C.h:this.ee=H.j(this.y.t(0,"bumpTxt"),"$isao")
this.bL=H.j(this.y.t(0,"nullBumpTxt"),"$isR")
break}if(a1.dy){this.ef=H.j(this.y.t(0,"envSampler"),"$isao")
this.eg=H.j(this.y.t(0,"nullEnvTxt"),"$isR")
y=a1.r
if(y!==C.c){this.bM=H.j(this.y.t(0,"reflectClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.eh=H.j(this.y.t(0,"reflectTxt"),"$isav")
this.bN=H.j(this.y.t(0,"nullReflectTxt"),"$isR")
break
case C.h:this.ei=H.j(this.y.t(0,"reflectTxt"),"$isao")
this.bN=H.j(this.y.t(0,"nullReflectTxt"),"$isR")
break}}y=a1.x
if(y!==C.c){this.bO=H.j(this.y.t(0,"refraction"),"$isa2")
this.bP=H.j(this.y.t(0,"refractClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.e:this.ej=H.j(this.y.t(0,"refractTxt"),"$isav")
this.bQ=H.j(this.y.t(0,"nullRefractTxt"),"$isR")
break
case C.h:this.ek=H.j(this.y.t(0,"refractTxt"),"$isao")
this.bQ=H.j(this.y.t(0,"nullRefractTxt"),"$isR")
break}}}y=a1.y
if(y!==C.c){this.bR=H.j(this.y.t(0,"alpha"),"$isa2")
switch(y){case C.c:break
case C.i:break
case C.e:this.el=H.j(this.y.t(0,"alphaTxt"),"$isav")
this.bS=H.j(this.y.t(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.em=H.j(this.y.t(0,"alphaTxt"),"$isao")
this.bS=H.j(this.y.t(0,"nullAlphaTxt"),"$isR")
break}}this.cI=H.c([],[A.fH])
this.cJ=H.c([],[A.fI])
this.cK=H.c([],[A.fJ])
this.cL=H.c([],[A.fK])
this.cM=H.c([],[A.fL])
this.cN=H.c([],[A.fM])
if(a1.k2){y=a1.z
if(y>0){this.en=H.d(this.y.t(0,"dirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.cI;(x&&C.a).h(x,new A.fH(m,l,k))}}y=a1.Q
if(y>0){this.eo=H.d(this.y.t(0,"pntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa2")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa2")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa2")
x=this.cJ;(x&&C.a).h(x,new A.fI(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ep=H.d(this.y.t(0,"spotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa2")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa2")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa2")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa2")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa2")
x=this.cK;(x&&C.a).h(x,new A.fJ(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eq=H.d(this.y.t(0,"txtDirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isQ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isav")
x=this.cL;(x&&C.a).h(x,new A.fK(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.er=H.d(this.y.t(0,"txtPntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdL")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa2")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa2")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa2")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isao")
x=this.cM;(x&&C.a).h(x,new A.fL(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.es=H.d(this.y.t(0,"txtSpotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isQ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isQ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isQ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isQ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa2")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa2")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa2")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa2")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa2")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isav")
x=this.cN;(x&&C.a).h(x,new A.fM(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aq:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.f5(c)
b.a.uniform1i(b.d,0)}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
jn:function(a,b){var z,y
z=a.at
y=new A.eW(b,z)
y.dj(b,z)
y.ff(a,b)
return y}}},jr:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,at,bE",
hI:function(a){var z,y,x
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
hP:function(a){var z
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
hJ:function(a){var z
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
hX:function(a){var z,y
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
hY:function(a){var z,y
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
hR:function(a){var z
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
i1:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ax(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hM:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hH:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hK:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
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
hN:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
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
hV:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
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
hQ:function(a){var z,y
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
hT:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
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
hU:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
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
hL:function(a){var z,y
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
hS:function(a){var z,y
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
hW:function(a){var z,y
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
hZ:function(a){var z,y,x
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
i_:function(a){var z,y,x
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
i0:function(a){var z,y,x
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
hO:function(a){var z
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
i:function(a){return this.at}},fH:{"^":"b;a,b,c"},fK:{"^":"b;a,b,c,d,e,f,r,x"},fI:{"^":"b;a,b,c,d,e,f,r"},fL:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fJ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fM:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dE:{"^":"d8;",
dj:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eD:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dA(b,35633)
this.f=this.dA(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dY(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.t(P.v("Failed to link shader: "+H.k(x)))}this.hy()
this.hA()},
a6:function(a){a.a.useProgram(this.r)
this.x.il()},
dA:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hy:function(){var z,y,x,w,v,u
z=H.c([],[A.ef])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ef(y,v.name,u))}this.x=new A.i6(z)},
hA:function(){var z,y,x,w,v,u
z=H.c([],[A.ah])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ii(v.type,v.size,v.name,u))}this.y=new A.kU(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dK(z,y,b,a,c)},
fH:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.dK(z,y,b,a,c)},
fI:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dK(z,y,b,a,c)},
bz:function(a,b){return new P.h0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
ii:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.kP(this.a,this.r,c,d)
case 35665:return new A.Q(this.a,this.r,c,d)
case 35666:return new A.kS(this.a,this.r,c,d)
case 35667:return new A.kQ(this.a,this.r,c,d)
case 35668:return new A.kR(this.a,this.r,c,d)
case 35669:return new A.kT(this.a,this.r,c,d)
case 35674:return new A.kW(this.a,this.r,c,d)
case 35675:return new A.dL(this.a,this.r,c,d)
case 35676:return new A.aQ(this.a,this.r,c,d)
case 35678:return this.fH(b,c,d)
case 35680:return this.fI(b,c,d)
case 35670:throw H.a(this.bz("BOOL",c))
case 35671:throw H.a(this.bz("BOOL_VEC2",c))
case 35672:throw H.a(this.bz("BOOL_VEC3",c))
case 35673:throw H.a(this.bz("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cB:{"^":"b;a,b",
i:function(a){return this.b}},fe:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ah:{"^":"b;"},kU:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
t:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
iu:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.iu("\n")}},R:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},kQ:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},kR:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},kT:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},kO:{"^":"ah;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
dK:function(a,b,c,d,e){var z=new A.kO(a,b,c,e)
z.f=d
z.e=P.je(d,0,!1,P.n)
return z}}},a2:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},kP:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},Q:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},kS:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},kW:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dL:{"^":"ah;a,b,c,d",
an:function(a){var z=new Float32Array(H.bB(H.u(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aQ:{"^":"ah;a,b,c,d",
an:function(a){var z=new Float32Array(H.bB(H.u(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},av:{"^":"ah;a,b,c,d",
f5:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ao:{"^":"ah;a,b,c,d",
f6:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
d_:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
z=F.cM()
F.c0(z,b,c,d,a,1,0,0,1)
F.c0(z,b,c,d,a,0,1,0,3)
F.c0(z,b,c,d,a,0,0,1,2)
F.c0(z,b,c,d,a,-1,0,0,0)
F.c0(z,b,c,d,a,0,-1,0,0)
F.c0(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cX:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c0:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
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
z.d=y}l=F.cX(y)
k=F.cX(z.b)
j=F.e7(d,e,new F.nn(z,F.cX(z.c),F.cX(z.d),k,l,c),b)
if(j!=null)a.bi(j)},
hE:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.cM()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.am])
v=z.a
u=new V.G(0,0,y)
u=u.w(0,Math.sqrt(u.D(u)))
C.a.h(w,v.i4(new V.aN(a,-1,-1,-1),new V.as(1,1,1,1),new V.Y(0,0,d),new V.G(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.G(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cq(new V.aN(a,-1,-1,-1),null,new V.as(n,l,m,1),new V.Y(r*p,q*p,d),new V.G(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dX(w)
return z},
hB:function(a,b,c,d,e,f){return F.hC(!0,c,d,new F.nJ(a,f),e)},
hC:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.e7(c,e,new F.nL(d),null)
if(z==null)return
z.ar()
z.cr()
if(b)z.bi(F.hE(3,!1,!1,1,new F.nM(d),e))
z.bi(F.hE(1,!0,!1,-1,new F.nN(d),e))
return z},
hQ:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.l(b,{func:1,ret:P.p,args:[P.p,P.p]})==null)z.a=new F.or()
y=F.d_(a,null,new F.os(z,c),d)
y.cr()
return y},
hT:function(a,b,c,d){return F.hD(c,a,d,b,new F.ou())},
o3:function(a,b,c,d,e,f){return F.hD(d,a,e,b,new F.o4(f,c))},
hD:function(a,b,c,d,e){var z=F.e7(a,b,new F.nK(H.l(e,{func:1,ret:V.Y,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ar()
z.cr()
return z},
e7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.am,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.cM()
y=H.c([],[F.am])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cq(null,null,new V.as(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cE(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cq(null,null,new V.as(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cE(d))}}z.d.i3(a+1,b+1,y)
return z},
nn:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cT(z.b,b).cT(z.d.cT(z.c,b),c)
a.sa1(0,new V.Y(y.a,y.b,y.c))
a.seR(y.w(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.se1(new V.aN(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nJ:{"^":"m:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nL:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa1(0,new V.Y(y,u,w))
u=new V.G(y,u,w)
a.seR(u.w(0,Math.sqrt(u.D(u))))
a.se1(new V.aN(1-c,2+c,-1,-1))}},
nM:{"^":"m:34;a",
$1:function(a){return this.a.$2(a,1)}},
nN:{"^":"m:34;a",
$1:function(a){return this.a.$2(1-a,0)}},
or:{"^":"m:9;",
$2:function(a,b){return 0}},
os:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.D(x))).k(0,this.b+z)
a.sa1(0,new V.Y(z.a,z.b,z.c))}},
ou:{"^":"m:23;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
o4:{"^":"m:23;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nK:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e8(y.$1(z),x)
x=J.e8(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.D(x)))
u=new V.G(1,0,0)
y=v.aI(!v.A(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.D(y)))
y=t.aI(v)
u=y.w(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa1(0,w.E(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
au:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gbg()){C.a.J(this.a.a.d.b,this)
this.a.a.a3()}this.ck()
this.cl()
this.hl()},
cp:function(a){this.a=a
C.a.h(a.d.b,this)},
cq:function(a){this.b=a
C.a.h(a.d.c,this)},
hx:function(a){this.c=a
C.a.h(a.d.d,this)},
ck:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
cl:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
hl:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gbg:function(){return this.a==null||this.b==null||this.c==null},
fA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eE())return
return v.w(0,Math.sqrt(v.D(v)))},
fD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.D(z)))
z=w.M(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aI(z.w(0,Math.sqrt(z.D(z))))
return z.w(0,Math.sqrt(z.D(z)))},
cB:function(){if(this.d!=null)return!0
var z=this.fA()
if(z==null){z=this.fD()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
fz:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eE())return
return v.w(0,Math.sqrt(v.D(v)))},
fC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.M(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.M(0,u).k(0,l).E(0,u).M(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.D(z)))
z=k.aI(m)
z=z.w(0,Math.sqrt(z.D(z))).aI(k)
m=z.w(0,Math.sqrt(z.D(z)))}return m},
cz:function(){if(this.e!=null)return!0
var z=this.fz()
if(z==null){z=this.fC()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
gib:function(a){if(J.V(this.a,this.b))return!0
if(J.V(this.b,this.c))return!0
if(J.V(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
if(this.gbg())return a+"disposed"
z=a+C.b.al(J.ac(this.a.e),0)+", "+C.b.al(J.ac(this.b.e),0)+", "+C.b.al(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.F("")},
q:{
bL:function(a,b,c){var z,y,x
z=new F.au()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.cp(a)
z.cq(b)
z.hx(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
iK:{"^":"b;"},
kl:{"^":"iK;",
bh:function(a,b,c){var z,y
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
dq:{"^":"b;0a,0b",
aJ:function(){if(!this.gbg()){C.a.J(this.a.a.c.b,this)
this.a.a.a3()}this.ck()
this.cl()},
cp:function(a){this.a=a
C.a.h(a.c.b,this)},
cq:function(a){this.b=a
C.a.h(a.c.c,this)},
ck:function(){var z=this.a
if(z!=null){C.a.J(z.c.b,this)
this.a=null}},
cl:function(){var z=this.b
if(z!=null){C.a.J(z.c.c,this)
this.b=null}},
gbg:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbg())return a+"disposed"
return a+C.b.al(J.ac(this.a.e),0)+", "+C.b.al(J.ac(this.b.e),0)},
P:function(){return this.F("")},
q:{
j5:function(a,b){var z,y,x
z=new F.dq()
y=a.a
if(y==null)H.t(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.t(P.v("May not create a line with vertices attached to different shapes."))
z.cp(a)
z.cq(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z}}},
j6:{"^":"b;"},
kN:{"^":"j6;",
bh:function(a,b,c){var z,y
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
dB:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.J(z.a.b.b,this)
this.a.a.a3()}this.hk()},
hk:function(){var z=this.a
if(z!=null){C.a.J(z.b.b,this)
this.a=null}},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.al(J.ac(z.e),0)},
P:function(){return this.F("")}},
fd:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
bi:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.B()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.ie())}this.a.B()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dB()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.C(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.j5(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bL(p,o,m)}z=this.e
if(!(z==null))z.au(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
iG:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.am];y.length!==0;){x=C.a.gip(y)
C.a.iZ(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.bh(0,x,t)){C.a.h(w,t)
C.a.J(y,t)}}if(w.length>1)b.bi(w)}}this.a.B()
this.c.d2()
this.d.d2()
this.b.j_()
this.c.d3(new F.kN())
this.d.d3(new F.kl())
z=this.e
if(!(z==null))z.au(0)},
i5:function(a){this.iG(new F.lo(),new F.jD())},
cr:function(){return this.i5(null)},
e3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=b.gdh(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.el])
for(r=0,q=0;q<w;++q){p=b.i7(q)
o=p.gdh(p)
C.a.p(s,q,new Z.el(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iD(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bB(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dc(new Z.fW(34962,j),s,b)
i.b=H.c([],[Z.cF])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
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
C.a.h(h,g.e)}f=Z.dO(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.n(z,"\n")},
b6:function(a){var z=this.e
if(!(z==null))z.C(a)},
a3:function(){return this.b6(null)},
q:{
cM:function(){var z,y
z=new F.fd()
y=new F.lj(z)
y.b=!1
y.c=H.c([],[F.am])
z.a=y
y=new F.kf(z)
y.b=H.c([],[F.dB])
z.b=y
y=new F.ke(z)
y.b=H.c([],[F.dq])
z.c=y
y=new F.kd(z)
y.b=H.c([],[F.au])
z.d=y
z.e=null
return z}}},
kd:{"^":"b;a,0b",
dX:function(a){var z,y,x,w,v,u
H.u(a,"$ise",[F.am],"$ase")
z=H.c([],[F.au])
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
i3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$ise",[F.am],"$ase")
z=H.c([],[F.au])
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
d3:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.bh(0,v,t)){v.aJ()
break}}}}},
d2:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gib(x)
if(y)x.aJ()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cB())x=!1
return x},
cA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cz())x=!1
return x},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}},
ke:{"^":"b;a,0b",
gm:function(a){return this.b.length},
d3:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.bh(0,v,t)){v.aJ()
break}}}}},
d2:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.V(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.n(z,"\n")},
P:function(){return this.F("")}},
kf:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j_:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}},
am:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cE:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cq(this.cx,x,u,z,y,w,v,a,t)},
ie:function(){return this.cE(null)},
sa1:function(a,b){var z
if(!J.V(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a3()}},
seR:function(a){var z
if(!J.V(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a3()}},
se1:function(a){var z
if(!J.V(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a3()}},
iD:function(a){var z,y
z=J.M(a)
if(z.A(a,$.$get$aE())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b0())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b_())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b1())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.A(a,$.$get$b2())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bV())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bW())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$bz()))return H.c([this.ch],[P.p])
else if(z.A(a,$.$get$aZ())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.L(0,new F.lt(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
cz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.L(0,new F.ls(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
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
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
q:{
cq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.am()
y=new F.lr(z)
y.b=H.c([],[F.dB])
z.b=y
y=new F.ln(z)
x=[F.dq]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.lk(z)
x=[F.au]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fT()
z.e=0
y=$.$get$aE()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b0().a)!==0?e:null
z.x=(x&$.$get$b_().a)!==0?b:null
z.y=(x&$.$get$b1().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$fU().a)!==0?c:null
z.ch=(x&$.$get$bz().a)!==0?i:0
z.cx=(x&$.$get$aZ().a)!==0?a:null
return z}}},
lt:{"^":"m:7;a",
$1:function(a){var z,y
H.d(a,"$isau")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
ls:{"^":"m:7;a",
$1:function(a){var z,y
H.d(a,"$isau")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
lj:{"^":"b;a,0b,0c",
B:function(){var z,y,x,w
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
this.a.a3()
return!0},
dY:function(a,b,c,d,e,f,g,h,i){var z=F.cq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bA:function(a,b,c,d,e,f){return this.dY(a,null,b,c,null,d,e,f,0)},
i4:function(a,b,c,d,e,f){return this.dY(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cB()
return!0},
cA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cz()
return!0},
ia:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.V(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
this.B()
z=H.c([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}},
lk:{"^":"b;a,0b,0c,0d",
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
L:function(a,b){H.l(b,{func:1,ret:-1,args:[F.au]})
C.a.L(this.b,b)
C.a.L(this.c,new F.ll(this,b))
C.a.L(this.d,new F.lm(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}},
ll:{"^":"m:7;a,b",
$1:function(a){H.d(a,"$isau")
if(!J.V(a.a,this.a))this.b.$1(a)}},
lm:{"^":"m:7;a,b",
$1:function(a){var z
H.d(a,"$isau")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
ln:{"^":"b;a,0b,0c",
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
F:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}},
lp:{"^":"b;"},
lo:{"^":"lp;",
bh:function(a,b,c){return J.V(b.f,c.f)}},
lq:{"^":"b;"},
jD:{"^":"lq;",
bi:function(a){var z,y,x,w,v,u,t,s
H.u(a,"$ise",[F.am],"$ase")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.w(0,Math.sqrt(u))
if(!J.V(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.C(null)}}}return}},
lr:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",jo:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
Z:[function(a){var z
H.d(a,"$isA")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.Z(null)},"dm","$1","$0","gaS",0,2,1],
hp:[function(a){H.d(a,"$isA")
this.a=null
this.Z(a)},function(){return this.hp(null)},"jN","$1","$0","gho",0,2,1],
jo:[function(a,b){var z=V.aI
z=new D.cf(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Z(z)},"$2","gfU",8,0,25],
jp:[function(a,b){var z=V.aI
z=new D.cg(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Z(z)},"$2","gfV",8,0,25],
dv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.ab(z.e.length+3,4)*4
x=C.f.ab(z.f.length+3,4)*4
w=C.f.ab(z.r.length+3,4)*4
v=C.f.ab(z.x.length+3,4)*4
u=C.f.ab(z.y.length+3,4)*4
t=C.f.ab(z.z.length+3,4)*4
s=C.f.ab(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
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
a6=new Z.by(a6.a|z.a)}return new A.jr(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
X:function(a,b){H.u(a,"$ise",[T.cP],"$ase")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d6(x)}}},
eM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dv()
y=H.d(a.fr.j(0,z.at),"$iseW")
if(y==null){y=A.jn(z,a.a)
a.e_(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bE
z=b.e
if(!(z instanceof Z.dc)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.ar()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cA()
u.a.cA()
u=u.e
if(!(u==null))u.au(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.ia()
t=t.e
if(!(t==null))t.au(0)}r=b.d.e3(new Z.fX(a.a),w)
r.aL($.$get$aE()).e=this.a.Q.c
if(z)r.aL($.$get$b0()).e=this.a.cx.c
if(v)r.aL($.$get$b_()).e=this.a.ch.c
if(x.rx)r.aL($.$get$b1()).e=this.a.cy.c
if(u)r.aL($.$get$b2()).e=this.a.db.c
if(x.x1)r.aL($.$get$aZ()).e=this.a.dx.c
b.e=r}z=T.cP
q=H.c([],[z])
this.a.a6(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga2(u)
v=v.dy
v.toString
v.an(u.ag(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga2(u)
t=a.dx
t=u.k(0,t.ga2(t))
a.cx=t
u=t}v=v.fr
v.toString
v.an(u.ag(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giW()
t=a.dx
t=u.k(0,t.ga2(t))
a.ch=t
u=t}v=v.fy
v.toString
v.an(u.ag(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.an(u.ag(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.an(u.ag(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.an(C.w.ag(u,!0))}if(x.aB>0){p=this.e.a.length
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
n=new Float32Array(H.bB(H.u(t.ag(0,!0),"$ise",v,"$ase")))
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
case C.e:this.X(q,this.f.d)
v=this.a
u=this.f.d
v.aq(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.X(q,this.f.e)
v=this.a
u=this.f.e
v.ai(v.ry,v.x1,u)
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
case C.e:this.X(q,this.r.d)
v=this.a
u=this.r.d
v.aq(v.y1,v.aB,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.X(q,this.r.e)
v=this.a
u=this.r.e
v.ai(v.y2,v.aB,u)
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
v=v.at
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.X(q,this.x.d)
v=this.a
u=this.x.d
v.aq(v.bE,v.bF,u)
u=this.a
v=this.x.f
u=u.at
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.X(q,this.x.e)
v=this.a
u=this.x.e
v.ai(v.e8,v.bF,u)
u=this.a
v=this.x.f
u=u.at
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bG
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.X(q,this.y.d)
v=this.a
u=this.y.d
v.aq(v.e9,v.bH,u)
u=this.a
v=this.y.f
u=u.bG
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.X(q,this.y.e)
v=this.a
u=this.y.e
v.ai(v.ea,v.bH,u)
u=this.a
v=this.y.f
u=u.bG
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bI
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bK
u.a.uniform1f(u.d,s)
break
case C.e:this.X(q,this.z.d)
v=this.a
u=this.z.d
v.aq(v.eb,v.bJ,u)
u=this.a
v=this.z.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bK
v.a.uniform1f(v.d,s)
break
case C.h:this.X(q,this.z.e)
v=this.a
u=this.z.e
v.ai(v.ec,v.bJ,u)
u=this.a
v=this.z.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bK
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.en
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cI
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.d6(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eo
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cJ
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbl(j)
s=i.b
h=t.gda(t)
g=t.gdc(t)
t=t.gdd(t)
s.a.uniform3f(s.d,h,g,t)
t=m.br(j.gbl(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gaA(j)
g=i.d
h=t.gbW()
s=t.gbs()
t=t.gbB()
g.a.uniform3f(g.d,h,s,t)
t=j.gcs()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gct()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcu()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ep
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cK
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbl(j)
s=i.b
h=t.gda(t)
g=t.gdc(t)
t=t.gdd(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcG(j).jV()
g=i.c
h=t.gb1(t)
s=t.gb2(t)
t=t.gb3()
g.a.uniform3f(g.d,h,s,t)
t=m.br(j.gbl(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaA(j)
s=i.e
h=t.gbW()
g=t.gbs()
t=t.gbB()
s.a.uniform3f(s.d,h,g,t)
t=j.gjT()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjR()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gct()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcu()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eq
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cL
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbo()
H.u(q,"$ise",t,"$ase")
if(!C.a.V(q,s)){s.sba(q.length)
C.a.h(q,s)}s=j.gcG(j)
h=i.d
g=s.gb1(s)
f=s.gb2(s)
s=s.gb3()
h.a.uniform3f(h.d,g,f,s)
s=j.gbX()
f=i.b
g=s.gb1(s)
h=s.gb2(s)
s=s.gb3()
f.a.uniform3f(f.d,g,h,s)
s=j.gbm(j)
h=i.c
g=s.gb1(s)
f=s.gb2(s)
s=s.gb3()
h.a.uniform3f(h.d,g,f,s)
s=m.d6(j.gcG(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaA(j)
g=i.f
f=h.gbW()
s=h.gbs()
h=h.gbB()
g.a.uniform3f(g.d,f,s,h)
h=j.gbo()
s=h.geF(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdG()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gba())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.er
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.y,u=v.length,t=[P.p],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cM
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbo()
H.u(q,"$ise",s,"$ase")
if(!C.a.V(q,h)){h.sba(q.length)
C.a.h(q,h)}e=m.k(0,j.ga2(j))
h=j.ga2(j).br(new V.Y(0,0,0))
g=i.b
f=h.gda(h)
d=h.gdc(h)
h=h.gdd(h)
g.a.uniform3f(g.d,f,d,h)
h=e.br(new V.Y(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cS(0)
d=i.d
n=new Float32Array(H.bB(H.u(new V.cJ(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ag(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaA(j)
h=i.e
f=d.gbW()
g=d.gbs()
d=d.gbB()
h.a.uniform3f(h.d,f,g,d)
d=j.gbo()
h=d.geF(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdG()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gba())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcs()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gct()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcu()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.es
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cN
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbo()
H.u(q,"$ise",z,"$ase")
if(!C.a.V(q,t)){t.sba(q.length)
C.a.h(q,t)}t=j.gbl(j)
s=i.b
h=t.gda(t)
g=t.gdc(t)
t=t.gdd(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcG(j)
g=i.c
h=t.gb1(t)
s=t.gb2(t)
t=t.gb3()
g.a.uniform3f(g.d,h,s,t)
t=j.gbX()
s=i.d
h=t.gb1(t)
g=t.gb2(t)
t=t.gb3()
s.a.uniform3f(s.d,h,g,t)
t=j.gbm(j)
g=i.e
h=t.gb1(t)
s=t.gb2(t)
t=t.gb3()
g.a.uniform3f(g.d,h,s,t)
t=m.br(j.gbl(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbo()
s=t.geF(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdG()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gba())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaA(j)
s=i.y
h=t.gbW()
g=t.gbs()
t=t.gbB()
s.a.uniform3f(s.d,h,g,t)
t=j.gk_()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gk0()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gct()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcu()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.e:this.X(q,this.Q.d)
z=this.a
v=this.Q.d
z.aq(z.ed,z.bL,v)
break
case C.h:this.X(q,this.Q.e)
z=this.a
v=this.Q.e
z.ai(z.ee,z.bL,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga2(v).cS(0)
a.Q=v}z=z.id
z.toString
z.an(v.ag(0,!0))}if(x.dy){this.X(q,this.ch)
z=this.a
v=this.ch
z.ai(z.ef,z.eg,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bM
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.X(q,this.cx.d)
z=this.a
v=this.cx.d
z.aq(z.eh,z.bN,v)
v=this.a
z=this.cx.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.h:this.X(q,this.cx.e)
z=this.a
v=this.cx.e
z.ai(z.ei,z.bN,v)
v=this.a
z=this.cx.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bP
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bO
v.a.uniform1f(v.d,t)
break
case C.e:this.X(q,this.cy.d)
z=this.a
v=this.cy.d
z.aq(z.ej,z.bQ,v)
v=this.a
z=this.cy.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,t)
break
case C.h:this.X(q,this.cy.e)
z=this.a
v=this.cy.e
z.ai(z.ek,z.bQ,v)
v=this.a
z=this.cy.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bR
z.a.uniform1f(z.d,u)
break
case C.e:this.X(q,this.db.d)
z=this.a
u=this.db.d
z.aq(z.el,z.bS,u)
u=this.a
z=this.db.f
u=u.bR
u.a.uniform1f(u.d,z)
break
case C.h:this.X(q,this.db.e)
z=this.a
u=this.db.e
z.ai(z.em,z.bS,u)
u=this.a
z=this.db.f
u=u.bR
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.a6(a)
z.af(a)
z.av(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.e6()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dv().at},
q:{
eX:function(){var z,y,x
z=new O.jo()
y=O.df(V.aI)
z.e=y
y.b9(z.gfU(),z.gfV())
y=new O.bk(z,"emission")
y.c=C.c
y.f=new V.a4(0,0,0)
z.f=y
y=new O.bk(z,"ambient")
y.c=C.c
y.f=new V.a4(0,0,0)
z.r=y
y=new O.bk(z,"diffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.x=y
y=new O.bk(z,"invDiffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.y=y
y=new O.jt(z,"specular")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=100
z.z=y
y=new O.jq(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bk(z,"reflect")
y.c=C.c
y.f=new V.a4(0,0,0)
z.cx=y
y=new O.js(z,"refract")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=1
z.cy=y
y=new O.jp(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.j4()
y.bv(D.a8)
y.e=H.c([],[D.cC])
y.f=H.c([],[D.jJ])
y.r=H.c([],[D.kp])
y.x=H.c([],[D.kB])
y.y=H.c([],[D.kC])
y.z=H.c([],[D.kD])
y.Q=null
y.ch=null
y.dg(y.gfT(),y.ghb(),y.ghd())
z.dx=y
x=y.Q
if(x==null){x=D.K()
y.Q=x
y=x}else y=x
y.h(0,z.gho())
y=z.dx
x=y.ch
if(x==null){x=D.K()
y.ch=x
y=x}else y=x
y.h(0,z.gaS())
z.dy=null
return z}}},jp:{"^":"du;0f,a,b,0c,0d,0e"},du:{"^":"b;",
Z:[function(a){this.a.Z(H.d(a,"$isA"))},function(){return this.Z(null)},"dm","$1","$0","gaS",0,2,1],
bb:["fc",function(){}],
hv:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gu().J(0,this.gaS())
y=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gaS())
z=new D.J(this.b+".texture2D",y,this.d,this,[T.fm])
z.b=!0
this.a.Z(z)}},
hw:function(a){}},jq:{"^":"du;a,b,0c,0d,0e"},bk:{"^":"du;0f,a,b,0c,0d,0e",
dN:function(a){var z,y
if(!J.V(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.Z(y)}},
bb:["c2",function(){this.fc()
this.dN(new V.a4(1,1,1))}],
saA:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bb()
z=this.a
z.a=null
z.Z(null)}this.dN(b)}},js:{"^":"bk;0ch,0f,a,b,0c,0d,0e",
hu:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.Z(z)}},
bb:function(){this.c2()
this.hu(1)}},jt:{"^":"bk;0ch,0f,a,b,0c,0d,0e",
cm:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.Z(z)}},
bb:function(){this.c2()
this.cm(100)}},km:{"^":"cn;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
Z:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.C(a)},function(){return this.Z(null)},"dm","$1","$0","gaS",0,2,1],
eM:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.j(0,"Skybox"),"$isfe")
if(z==null){y=a.a
z=new A.fe(y,"Skybox")
z.dj(y,"Skybox")
z.eD(0,$.ko,$.kn)
z.z=z.x.j(0,"posAttr")
z.Q=H.j(z.y.j(0,"fov"),"$isa2")
z.ch=H.j(z.y.j(0,"ratio"),"$isa2")
z.cx=H.j(z.y.j(0,"boxClr"),"$isQ")
z.cy=H.j(z.y.j(0,"boxTxt"),"$isao")
z.db=H.j(z.y.j(0,"viewMat"),"$isaQ")
a.e_(z)}this.a=z}if(b.e==null){y=b.d.e3(new Z.fX(a.a),$.$get$aE())
y.aL($.$get$aE()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.a6(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.f6(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga2(x).cS(0)
w=w.db
w.toString
w.an(x.ag(0,!0))
y=b.e
if(y instanceof Z.dc){y.a6(a)
y.af(a)
y.av(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.e6()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},cn:{"^":"b;"}}],["","",,T,{"^":"",cP:{"^":"d8;"},fm:{"^":"cP;"},ky:{"^":"fm;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
q:{
fn:function(a,b){var z=new T.ky()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},fo:{"^":"cP;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z}},kz:{"^":"b;a,0b,0c,0d,0e",
aV:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ae
W.a6(z,"load",H.l(new T.kA(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hq:function(a,b,c){var z,y,x,w
b=V.c8(b,2)
z=V.c8(a.width,2)
y=V.c8(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.de(null,null)
x.width=z
x.height=y
w=H.d(C.l.f_(x,"2d"),"$isen")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nI(w.getImageData(0,0,x.width,x.height))}}},kA:{"^":"m:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hq(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.F.j9(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cH()}++z.e}}}],["","",,V,{"^":"",bI:{"^":"b;",
b5:function(a,b){return!0},
i:function(a){return"all"},
$isaX:1},aX:{"^":"b;"},eV:{"^":"b;",
b5:["fb",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b5(0,b))return!0
return!1}],
i:["di",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaX:1},aB:{"^":"eV;0a",
b5:function(a,b){return!this.fb(0,b)},
i:function(a){return"!["+this.di(0)+"]"}},jX:{"^":"b;0a,0b",
b5:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bT(this.a)
y=H.bT(this.b)
return z+".."+y},
$isaX:1,
q:{
Z:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jX()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},kb:{"^":"b;0a",
fh:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b9(0,0,[P.n,P.T])
for(y=new H.ds(a,a.gm(a),0,[H.aj(a,"z",0)]);y.G();)z.p(0,y.d,!0)
this.a=z},
b5:function(a,b){return this.a.bC(0,b)},
i:function(a){var z=this.a
return P.cm(z.gac(z),0,null)},
$isaX:1,
q:{
x:function(a){var z=new V.kb()
z.fh(a)
return z}}},fg:{"^":"b;a,b,0c,0d",
giH:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fv(this.a.l(0,b))
w.a=H.c([],[V.aX])
w.c=!1
C.a.h(this.c,w)
return w},
io:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b5(0,a))return w}return},
i:function(a){return this.b}},fs:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e6(this.b,"\n","\\n")
y=H.e6(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ft:{"^":"b;a,b,0c",
aN:function(a,b,c){var z,y,x
H.u(c,"$ise",[P.f],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kI:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.fg(this,b)
z.c=H.c([],[V.fv])
this.a.p(0,b,z)}return z},
R:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ft(this,a)
y=P.f
z.c=new H.b9(0,0,[y,y])
this.b.p(0,a,z)}return z},
eU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fs])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.io(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cm(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.giH(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cm(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fs(o==null?p.b:o,q,t)}++t}}},
q:{
cQ:function(){var z,y
z=new V.kI()
y=P.f
z.a=new H.b9(0,0,[y,V.fg])
z.b=new H.b9(0,0,[y,V.ft])
return z}}},fv:{"^":"eV;b,0c,0a",
i:function(a){return this.b.b+": "+this.di(0)}}}],["","",,X,{"^":"",i9:{"^":"cO;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gu:function(){var z=this.fr
if(z==null){z=D.K()
this.fr=z}return z},
ao:function(a){var z=this.fr
if(!(z==null))z.C(a)},
sam:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.J("width",z,b,this,[P.n])
z.b=!0
this.ao(z)}},
saj:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.J("height",z,b,this,[P.n])
z.b=!0
this.ao(z)}},
a6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.F(z.getParameter(3379))
u=V.c8(x,2)
t=V.c8(w,2)
v=V.c8(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.F.eQ(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.fn(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cH()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cH()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.Q=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.z,0)
z.framebufferRenderbuffer(36160,36096,36161,this.Q)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.y)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dy
y=z.c
a.c=C.d.a4(y*this.a)
x=z.d
a.d=C.d.a4(x*this.b)
w=this.c
q=C.d.a4(z.a*w)
p=this.d
o=C.d.a4(z.b*p)
n=C.d.a4(y*w)
m=C.d.a4(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
if(this.cy){z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
av:function(a){a.a.bindFramebuffer(36160,null)}},cA:{"^":"b;",$isaL:1},iP:{"^":"cO;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
a6:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.q(y)
v=C.d.a4(w.a*y)
if(typeof x!=="number")return H.q(x)
u=C.d.a4(w.b*x)
t=C.d.a4(w.c*y)
a.c=t
w=C.d.a4(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
av:function(a){},
q:{
eG:function(a,b,c,d,e,f,g){var z,y
z=new X.iP()
y=new V.as(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dC(0,0,1,1)
z.r=y
return z}}},iU:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
a6:function(a){var z
a.cy.bV(V.bl())
z=V.bl()
a.db.bV(z)},
av:function(a){a.cy.aM()
a.db.aM()},
$isaL:1,
$iscA:1},jG:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
ao:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.C(a)},function(){return this.ao(null)},"ji","$1","$0","gfu",0,2,1],
a6:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aJ(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bV(s)
z=$.f7
if(z==null){z=V.eY(new V.Y(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.f7=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aO(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bV(r)},
av:function(a){a.cy.aM()
a.db.aM()},
$isaL:1,
$iscA:1,
q:{
dA:function(a,b,c,d,e){var z,y,x
z=new X.jG()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gu().h(0,z.gfu())
x=new D.J("mover",y,z.b,z,[U.ag])
x.b=!0
z.ao(x)}x=z.c
if(!$.o.$2(x,b)){y=z.c
z.c=b
x=new D.J("fov",y,b,z,[P.p])
x.b=!0
z.ao(x)}x=z.d
if(!$.o.$2(x,d)){y=z.d
z.d=d
x=new D.J("near",y,d,z,[P.p])
x.b=!0
z.ao(x)}x=z.e
if(!$.o.$2(x,a)){y=z.e
z.e=a
x=new D.J("far",y,a,z,[P.p])
x.b=!0
z.ao(x)}return z}}},cO:{"^":"b;"}}],["","",,V,{"^":"",
op:function(a){P.kH(C.O,new V.oq(a))},
b6:{"^":"b;",
bu:function(a){this.b=new P.iS(C.P)
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
H.I(u)
s=this.b.fG(u,0,u.length)
r=s==null?u:s
C.N.f3(t,H.e6(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaC(this.d),t)}},
eJ:function(a,b){var z,y,x,w
H.u(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bf]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bD()
this.c=y}for(y=y.eU(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bU(y[w])}},
oq:{"^":"m:54;a",
$1:function(a){H.d(a,"$isbv")
P.e5(C.d.eT(this.a.giv(),2)+" fps")}},
iv:{"^":"b6;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
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
bD:function(){var z,y,x,w
z=V.cQ()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bI())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bI())
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
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
iQ:{"^":"b6;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
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
bD:function(){var z,y,x,w
z=V.cQ()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bI())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
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
iR:{"^":"b6;a,0b,0c,0d",
bU:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
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
bD:function(){var z,y,x
z=V.cQ()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bI())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bI())
y=z.l(0,"Other").n(0,"Other")
x=new V.aB()
x.a=H.c([],[V.aX])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
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
jI:{"^":"b6;a,0b,0c,0d",
eJ:function(a,b){H.u(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bf]])
this.N(C.a.n(b,"\n"),"#111")},
bU:function(a){},
bD:function(){return}},
jV:{"^":"b;a,b,0c",
dU:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fP().gd1().j(0,H.k(z))
if(y==null)if(d){c.$0()
this.dS(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.eb(this.c).h(0,v)
t=W.iW("radio")
t.checked=x
t.name=z
z=W.ae
W.a6(t,"change",H.l(new V.jW(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.eb(this.c).h(0,w.createElement("br"))},
az:function(a,b,c){return this.dU(a,b,c,!1)},
dS:function(a){var z,y,x,w,v
z=P.fP()
y=P.f
x=P.jc(z.gd1(),y,y)
x.p(0,this.a,a)
w=z.eN(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mA([],[]).d7(""),"",v)}},
jW:{"^":"m:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dS(this.d)}}},
kg:{"^":"b;0a,0b",
fi:function(a,b){var z,y,x,w,v,u,t
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
W.a6(z,"scroll",H.l(new V.kj(x),{func:1,ret:-1,args:[t]}),!1,t)},
dZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$ise",[P.f],"$ase")
this.hz()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eU(C.a.iB(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hR(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cs(C.B,s,C.k,!1)
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
z=new V.iv("dart")
z.bu("dart")
y=new V.iQ("glsl")
y.bu("glsl")
x=new V.iR("html")
x.bu("html")
w=C.a.iq(H.c([z,y,x],[V.b6]),new V.kk(a))
if(w!=null)return w
z=new V.jI("plain")
z.bu("plain")
return z},
dV:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$ise",[P.f],"$ase")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c6(w).a9(w,"+")){C.a.p(a2,x,C.b.ax(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a9(w,"-")){C.a.p(a2,x,C.b.ax(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eZ(a0)
v.eJ(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cs(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ed(null)
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
for(b=C.a.ga0(w);b.G();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
i2:function(a){var z,y,x,w,v,u,t
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
x=H.d(w.insertCell(-1),"$isdH").style
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
t=H.d(w.insertCell(-1),"$isdH")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hz:function(){var z,y,x,w
if(this.b!=null)return
z=V.cQ()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aB()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bI())
x=z.l(0,"Other").n(0,"Other")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
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
q:{
kh:function(a,b){var z=new V.kg()
z.fi(a,!0)
return z}}},
kj:{"^":"m:14;a",
$1:function(a){P.fq(C.q,new V.ki(this.a))}},
ki:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.a4(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
kk:{"^":"m:55;a",
$1:function(a){return H.d(a,"$isb6").a===this.a}}}],["","",,V,{"^":"",
hM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=V.kh("Test 027",!0)
y=W.de(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.dZ(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],x))
z.i2(H.c(["shapes"],x))
z.dZ(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.kF(w,!0,!0,!0,!1)
u=U.eI(null)
t=new U.fb()
t.a=0
t.b=0
t.c=0
t.d=0
t.e=0
t.f=0
t.r=0
t.seX(0)
t.seL(0,0)
t.seO(0)
s=t.d
if(!$.o.$2(s,0.1)){r=t.d
t.d=0.1
s=new D.J("deltaYaw",r,0.1,t,[P.p])
s.b=!0
t.K(s)}s=t.e
if(!$.o.$2(s,0.21)){r=t.e
t.e=0.21
s=new D.J("deltaPitch",r,0.21,t,[P.p])
s.b=!0
t.K(s)}s=t.f
if(!$.o.$2(s,0.32)){r=t.f
t.f=0.32
s=new D.J("deltaRoll",r,0.32,t,[P.p])
s.b=!0
t.K(s)}u.h(0,t)
u.h(0,U.dh(V.f1(0,0,5)))
q=X.dA(2000,1.0471975511965976,u,0.1,null)
p=new X.i9()
p.a=512
p.b=512
p.c=512
p.d=512
p.e=!0
p.f=!1
p.r=1
p.x=1
p.ch=T.fn(0,null)
p.cx=new V.as(0,0,0,1)
p.cy=!0
p.db=2000
p.dx=!0
p.dy=V.dC(0,0,1,1)
p.sam(0,512)
p.saj(0,512)
if(p.cy){p.cy=!1
t=new D.J("clearColor",!0,!1,p,[P.T])
t.b=!0
p.ao(t)}t=v.f
s=t.a
o=s.createTexture()
s.bindTexture(34067,o)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
n=new T.fo()
n.a=0
n.b=o
n.c=!1
n.d=0
t.aV(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
t.aV(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
t.aV(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
t.aV(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
t.aV(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
t.aV(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new M.ir()
m.sb_(null)
m.sbn(0,null)
m.sb8(null)
t=E.dj(null,!0,null,"",null,null)
l=F.cM()
s=l.a
k=new V.G(-1,-1,1)
k=k.w(0,Math.sqrt(k.D(k)))
j=s.bA(new V.aN(1,2,4,6),new V.as(1,0,0,1),new V.Y(-1,-1,0),new V.U(0,1),k,null)
s=l.a
k=new V.G(1,-1,1)
k=k.w(0,Math.sqrt(k.D(k)))
i=s.bA(new V.aN(0,3,4,6),new V.as(0,0,1,1),new V.Y(1,-1,0),new V.U(1,1),k,null)
s=l.a
k=new V.G(1,1,1)
k=k.w(0,Math.sqrt(k.D(k)))
h=s.bA(new V.aN(0,2,5,6),new V.as(0,1,0,1),new V.Y(1,1,0),new V.U(1,0),k,null)
s=l.a
k=new V.G(-1,1,1)
k=k.w(0,Math.sqrt(k.D(k)))
g=s.bA(new V.aN(0,2,4,7),new V.as(1,1,0,1),new V.Y(-1,1,0),new V.U(0,0),k,null)
l.d.dX(H.c([j,i,h,g],[F.am]))
l.ar()
t.sa8(0,l)
m.d=t
m.e=null
t=new O.km()
t.b=1.0471975511965976
r=t.c
t.c=n
n.gu().h(0,t.gaS())
s=new D.J("boxTexture",r,t.c,t,[T.fo])
s.b=!0
t.Z(s)
f=new V.a4(1,1,1)
if(!J.V(t.d,f)){r=t.d
t.d=f
s=new D.J("boxColor",r,f,t,[V.a4])
s.b=!0
t.Z(s)}t.e=null
m.sb8(t)
m.sbn(0,p)
m.sb_(q)
e=E.dj(null,!0,null,"",null,null)
e.sa8(0,F.hT(30,1,15,0.5))
d=O.eX()
t=d.dx
s=U.dh(V.eY(new V.Y(0,0,0),new V.G(0,1,0),new V.G(0,-1,-1)))
f=new V.a4(1,1,1)
k=new D.cC()
k.c=new V.a4(1,1,1)
k.a=new V.G(0,0,1)
r=k.b
k.b=s
s.gu().h(0,k.gfo())
s=new D.J("mover",r,k.b,k,[U.ag])
s.b=!0
k.aR(s)
if(!k.c.A(0,f)){r=k.c
k.c=f
s=new D.J("color",r,f,k,[V.a4])
s.b=!0
k.aR(s)}t.h(0,k)
t=d.r
t.saA(0,new V.a4(0,0,1))
t=d.x
t.saA(0,new V.a4(0,1,0))
t=d.z
t.saA(0,new V.a4(1,0,0))
t=d.z
if(t.c===C.c){t.c=C.i
t.c2()
t.cm(100)
s=t.a
s.a=null
s.Z(null)}t.cm(10)
c=M.eD(null,null,null,null)
c.sb_(q)
c.sb8(d)
c.sbn(0,p)
c.d.h(0,e)
b=U.eI(null)
t=v.r
s=new U.l9()
k=U.dg()
k.sd9(0,!0)
k.scU(6.283185307179586)
k.scW(0)
k.sa1(0,0)
k.scV(100)
k.sU(0)
k.scF(0.5)
s.b=k
a=s.gaW()
k.gu().h(0,a)
k=U.dg()
k.sd9(0,!0)
k.scU(6.283185307179586)
k.scW(0)
k.sa1(0,0)
k.scV(100)
k.sU(0)
k.scF(0.5)
s.c=k
k.gu().h(0,a)
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
a0=new X.aK(!1,!1,!1)
r=s.d
s.d=a0
k=[X.aK]
a=new D.J("modifiers",r,a0,s,k)
a.b=!0
s.K(a)
a=s.f
if(a!==!1){s.f=!1
a=new D.J("invertX",a,!1,s,[P.T])
a.b=!0
s.K(a)}a=s.r
if(a!==!1){s.r=!1
a=new D.J("invertY",a,!1,s,[P.T])
a.b=!0
s.K(a)}s.be(t)
b.h(0,s)
t=v.r
s=new U.l8()
a=U.dg()
a.sd9(0,!0)
a.scU(6.283185307179586)
a.scW(0)
a.sa1(0,0)
a.scV(100)
a.sU(0)
a.scF(0.2)
s.b=a
a.gu().h(0,s.gaW())
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
a0=new X.aK(!0,!1,!1)
r=s.c
s.c=a0
a=new D.J("modifiers",r,a0,s,k)
a.b=!0
s.K(a)
s.be(t)
b.h(0,s)
t=v.r
s=new U.la()
s.c=0.01
s.d=0
s.e=0
a0=new X.aK(!1,!1,!1)
s.b=a0
k=new D.J("modifiers",null,a0,s,k)
k.b=!0
s.K(k)
s.be(t)
b.h(0,s)
b.h(0,U.dh(V.f1(0,0,5)))
a1=X.dA(2000,1.0471975511965976,b,0.1,null)
a2=E.dj(null,!0,null,"",null,null)
a2.sa8(0,F.d_(1,null,null,1))
a3=O.eX()
t=a3.f
s=p.ch
k=t.c
if(k!==C.e){if(k===C.c)t.bb()
t.c=C.e
t.hw(null)
k=t.a
k.a=null
k.Z(null)}t.hv(s)
a4=M.eD(null,null,null,null)
a4.sb_(a1)
a4.sb8(a3)
a4.d.h(0,a2)
t=M.aO
s=H.c([m,c,a4],[t])
k=new M.il()
k.bv(t)
k.e=!1
k.f=null
k.b9(k.ghe(),k.ghf())
k.ad(0,s)
t=v.d
if(t!==k){if(t!=null)t.gu().J(0,v.gdk())
v.d=k
k.gu().h(0,v.gdk())
v.fk()}t=new V.jV("shapes",!0)
x=x.getElementById("shapes")
t.c=x
if(x==null)H.t("Failed to find shapes for RadioGroup")
t.dU(0,"Cube",new V.o9(a2),!0)
t.az(0,"Cuboid",new V.oa(a2))
t.az(0,"Cylinder",new V.ob(a2))
t.az(0,"Cone",new V.oc(a2))
t.az(0,"Cylindrical",new V.od(a2))
t.az(0,"Sphere",new V.oe(a2))
t.az(0,"Spherical",new V.of(a2))
t.az(0,"Toroid",new V.og(a2))
t.az(0,"Knot",new V.oh(a2))
x=v.z
if(x==null){x=D.K()
v.z=x}t={func:1,ret:-1,args:[D.A]}
s=H.l(new V.oi(z,a3),t)
k=x.b
if(k==null){t=H.c([],[t])
x.b=t
x=t}else x=k
C.a.h(x,s)
V.op(v)},
o9:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.d_(1,null,null,1))}},
oa:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.d_(15,null,new V.o8(),15))}},
o8:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.G(x.a,x.b,x.c)
w=x.w(0,Math.sqrt(x.D(x)))
x=a.f
y=w.k(0,z*0.1+y*0.1)
a.sa1(0,x.E(0,new V.Y(y.a,y.b,y.c)))}},
ob:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hB(1,!0,!0,1,30,1))}},
oc:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hB(1,!0,!1,1,30,0))}},
od:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hC(!0,!0,25,new V.o7(),50))}},
o7:{"^":"m:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
oe:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hQ(6,null,1,6))}},
of:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hQ(10,new V.o6(),1,10))}},
o6:{"^":"m:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
og:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hT(30,1,15,0.5))}},
oh:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.o3(120,1,2,12,0.3,3))}},
oi:{"^":"m:12;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isA")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.dV("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dV("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eN.prototype
return J.eM.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.eO.prototype
if(typeof a=="boolean")return J.j_.prototype
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.aT=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.c5=function(a){if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.nS=function(a){if(typeof a=="number")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cp.prototype
return a}
J.nT=function(a){if(typeof a=="number")return J.ch.prototype
if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cp.prototype
return a}
J.c6=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cp.prototype
return a}
J.aF=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).A(a,b)}
J.hU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nS(a).S(a,b)}
J.e8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nT(a).k(a,b)}
J.e9=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hJ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).j(a,b)}
J.d6=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hJ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c5(a).p(a,b,c)}
J.hV=function(a,b){return J.c6(a).H(a,b)}
J.hW=function(a,b,c){return J.aF(a).hm(a,b,c)}
J.hX=function(a,b,c,d){return J.aF(a).dW(a,b,c,d)}
J.hY=function(a,b){return J.c6(a).a_(a,b)}
J.d7=function(a,b,c){return J.aT(a).ic(a,b,c)}
J.cw=function(a,b){return J.c5(a).I(a,b)}
J.hZ=function(a,b,c,d){return J.c5(a).aK(a,b,c,d)}
J.ea=function(a,b){return J.c5(a).L(a,b)}
J.i_=function(a){return J.aF(a).gi8(a)}
J.eb=function(a){return J.aF(a).gcC(a)}
J.c9=function(a){return J.M(a).gW(a)}
J.b5=function(a){return J.c5(a).ga0(a)}
J.ap=function(a){return J.aT(a).gm(a)}
J.i0=function(a){return J.aF(a).gcZ(a)}
J.i1=function(a){return J.aF(a).gj8(a)}
J.ec=function(a){return J.c5(a).iY(a)}
J.i2=function(a,b){return J.aF(a).j1(a,b)}
J.i3=function(a,b){return J.aF(a).sa7(a,b)}
J.i4=function(a,b,c){return J.c6(a).v(a,b,c)}
J.i5=function(a){return J.c6(a).je(a)}
J.ac=function(a){return J.M(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cy.prototype
C.l=W.dd.prototype
C.N=W.bf.prototype
C.Q=J.r.prototype
C.a=J.bj.prototype
C.R=J.eM.prototype
C.f=J.eN.prototype
C.w=J.eO.prototype
C.d=J.ch.prototype
C.b=J.ci.prototype
C.Y=J.cj.prototype
C.a3=H.dz.prototype
C.a4=W.jA.prototype
C.E=J.jH.prototype
C.F=P.dD.prototype
C.G=W.kw.prototype
C.u=J.cp.prototype
C.H=W.bX.prototype
C.I=W.lv.prototype
C.K=new P.ib(!1)
C.J=new P.ia(C.K)
C.L=new P.jF()
C.M=new P.li()
C.j=new P.mi()
C.c=new A.cB(0,"ColorSourceType.None")
C.i=new A.cB(1,"ColorSourceType.Solid")
C.e=new A.cB(2,"ColorSourceType.Texture2D")
C.h=new A.cB(3,"ColorSourceType.TextureCube")
C.q=new P.bg(0)
C.O=new P.bg(5e6)
C.P=new P.iT("element",!0,!1,!1,!1)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.Z=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a_=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.A=H.c(I.aa([]),[P.f])
C.a0=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a1=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.f])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a2=new H.iq(0,{},C.A,[P.f,P.f])
C.k=new P.lb(!1)
$.aH=0
$.bJ=null
$.ej=null
$.dV=!1
$.hH=null
$.hy=null
$.hP=null
$.d0=null
$.d3=null
$.e2=null
$.bC=null
$.c1=null
$.c2=null
$.dW=!1
$.a_=C.j
$.aV=null
$.di=null
$.eC=null
$.eB=null
$.ex=null
$.ew=null
$.ev=null
$.eu=null
$.o=V.ju()
$.ko="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kn="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f7=null
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
I.$lazy(y,x,w)}})(["et","$get$et",function(){return H.hG("_$dart_dartClosure")},"dm","$get$dm",function(){return H.hG("_$dart_js")},"fw","$get$fw",function(){return H.aP(H.cR({
toString:function(){return"$receiver$"}}))},"fx","$get$fx",function(){return H.aP(H.cR({$method$:null,
toString:function(){return"$receiver$"}}))},"fy","$get$fy",function(){return H.aP(H.cR(null))},"fz","$get$fz",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fD","$get$fD",function(){return H.aP(H.cR(void 0))},"fE","$get$fE",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fB","$get$fB",function(){return H.aP(H.fC(null))},"fA","$get$fA",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"fG","$get$fG",function(){return H.aP(H.fC(void 0))},"fF","$get$fF",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dQ","$get$dQ",function(){return P.lw()},"c3","$get$c3",function(){return[]},"fS","$get$fS",function(){return P.lf()},"h_","$get$h_",function(){return H.jy(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hn","$get$hn",function(){return P.k1("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hu","$get$hu",function(){return P.np()},"er","$get$er",function(){return{}},"h3","$get$h3",function(){return P.eS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"dR","$get$dR",function(){return P.dr(P.f,P.cd)},"fV","$get$fV",function(){return Z.aw(0)},"fT","$get$fT",function(){return Z.aw(511)},"aE","$get$aE",function(){return Z.aw(1)},"b0","$get$b0",function(){return Z.aw(2)},"b_","$get$b_",function(){return Z.aw(4)},"b1","$get$b1",function(){return Z.aw(8)},"b2","$get$b2",function(){return Z.aw(16)},"bV","$get$bV",function(){return Z.aw(32)},"bW","$get$bW",function(){return Z.aw(64)},"fU","$get$fU",function(){return Z.aw(96)},"bz","$get$bz",function(){return Z.aw(128)},"aZ","$get$aZ",function(){return Z.aw(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.O,args:[F.am,P.p,P.p]},{func:1,ret:-1,args:[P.n,[P.i,E.aW]]},{func:1,ret:P.O,args:[F.au]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.O,args:[D.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.ae]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[P.n,[P.i,U.ag]]},{func:1,ret:P.p},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,D.a8]]},{func:1,ret:P.T,args:[W.W,P.f,P.f,W.cr]},{func:1,ret:V.Y,args:[P.p]},{func:1,ret:P.T,args:[W.H]},{func:1,ret:-1,args:[P.n,[P.i,V.aI]]},{func:1,ret:W.H},{func:1,ret:P.f,args:[P.n]},{func:1,ret:P.T,args:[W.aM]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,M.aO]]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.O,args:[P.a7]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.T,args:[P.p,P.p]},{func:1,ret:-1,args:[W.bX]},{func:1,ret:P.S,args:[P.n]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.n]},{func:1,ret:[P.N,P.f,P.f],args:[[P.N,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b3,,],args:[,]},{func:1,ret:P.n,args:[[P.e,P.n],P.n]},{func:1,ret:P.O,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aC]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[P.bv]},{func:1,ret:P.T,args:[V.b6]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:W.W,args:[W.H]}]
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
if(x==y)H.ot(d||a)
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
Isolate.e0=a.e0
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
if(typeof dartMainRunner==="function")dartMainRunner(V.hM,[])
else V.hM([])})})()
//# sourceMappingURL=test.dart.js.map
