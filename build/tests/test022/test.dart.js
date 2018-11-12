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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dU(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dW=function(){}
var dart=[["","",,H,{"^":"",oC:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cW:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.nM()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cj("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$df()]
if(v!=null)return v
v=H.nR(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$df(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gW:function(a){return H.bR(a)},
i:["eW",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iN:{"^":"t;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isU:1},
eJ:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isN:1},
dg:{"^":"t;",
gW:function(a){return 0},
i:["eY",function(a){return String(a)}]},
jv:{"^":"dg;"},
ck:{"^":"dg;"},
cf:{"^":"dg;",
i:function(a){var z=a[$.$get$er()]
if(z==null)return this.eY(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscb:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.D("add"))
a.push(b)},
iV:function(a,b){if(!!a.fixed$length)H.r(P.D("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ch(b,null,null))
return a.splice(b,1)[0]},
J:function(a,b){var z
if(!!a.fixed$length)H.r(P.D("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aO(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
iv:function(a){return this.n(a,"")},
il:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aO(a))}return y},
ij:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aO(a))}throw H.a(H.cC())},
ii:function(a,b){return this.ij(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bV:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a3(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a3(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gih:function(a){if(a.length>0)return a[0]
throw H.a(H.cC())},
gaB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cC())},
aK:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.D("fill range"))
P.aT(b,c,a.length,null,null,null)
for(z=b;z.S(0,c);z=z.E(0,1))a[z]=d},
dH:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aO(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.dd(a,"[","]")},
gZ:function(a){return new J.ay(a,a.length,0,[H.y(a,0)])},
gW:function(a){return H.bR(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cs(b,"newLength",null))
if(b<0)throw H.a(P.a3(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isi:1,
$ise:1,
t:{
iM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cs(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a3(a,0,4294967295,"length",null))
return J.eG(new Array(a),b)},
eG:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c6(a)
a.fixed$length=Array
return a}}},
oB:{"^":"bh;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cd:{"^":"t;",
j9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
cF:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
eD:function(a,b){var z,y
if(b>20)throw H.a(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bj:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.D("Unexpected toString result: "+z))
x=J.aM(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a*b},
bn:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aU:function(a,b){var z
if(a>0)z=this.dv(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hp:function(a,b){if(b<0)throw H.a(H.ai(b))
return this.dv(a,b)},
dv:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a<b},
$isp:1,
$isa5:1},
eI:{"^":"cd;",$isn:1},
eH:{"^":"cd;"},
ce:{"^":"t;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.r(H.aL(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cs(b,null,null))
return a+b},
b1:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
c=P.aT(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ab:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ai(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.ab(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.a(P.ch(b,null,null))
if(b>c)throw H.a(P.ch(b,null,null))
if(c>a.length)throw H.a(P.ch(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.u(a,b,null)},
jc:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iJ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
af:function(a,b){return this.iJ(a,b," ")},
ei:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eh:function(a,b){return this.ei(a,b,0)},
i3:function(a,b,c){if(c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
return H.hH(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isf_:1,
$ish:1}}],["","",,H,{"^":"",
cX:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cC:function(){return new P.dx("No element")},
iL:function(){return new P.dx("Too many elements")},
w:{"^":"kI;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.b.Y(this.a,b)},
$ascN:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$ase:function(){return[P.n]}},
ey:{"^":"i;"},
cE:{"^":"ey;$ti",
gZ:function(a){return new H.dk(this,this.gm(this),0,[H.al(this,"cE",0)])},
cZ:function(a,b){return this.eX(0,H.l(b,{func:1,ret:P.U,args:[H.al(this,"cE",0)]}))}},
dk:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aO(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
j7:{"^":"i;a,b,$ti",
gZ:function(a){return new H.j8(J.b2(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cr(this.a,b))},
$asi:function(a,b){return[b]}},
j8:{"^":"de;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asde:function(a,b){return[b]}},
j9:{"^":"cE;a,b,$ti",
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cr(this.a,b))},
$ascE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dJ:{"^":"i;a,b,$ti",
gZ:function(a){return new H.le(J.b2(this.a),this.b,this.$ti)}},
le:{"^":"de;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cy:{"^":"b;$ti"},
cN:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.al(this,"cN",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.A(d,H.al(this,"cN",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kI:{"^":"cD+cN;"}}],["","",,H,{"^":"",
ib:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nF:function(a){return init.types[H.F(a)]},
hz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ai(a))
return z},
bR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jG:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$isck){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.at(w,1)
r=H.dZ(H.c6(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jy:function(){if(!!self.location)return self.location.href
return},
f1:function(a){var z,y,x,w,v
H.c6(a)
z=J.ao(a)
if(typeof z!=="number")return z.eQ()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jH:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aU(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ai(w))}return H.f1(z)},
f2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ai(x))
if(x<0)throw H.a(H.ai(x))
if(x>65535)return H.jH(a)}return H.f1(a)},
jI:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eQ()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bS:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aU(z,10))>>>0,56320|z&1023)}}throw H.a(P.a3(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jF:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
jD:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
jz:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
jA:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
jC:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
jE:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
jB:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ai(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.ch(b,"index",null)},
nz:function(a,b,c){if(a>c)return new P.cH(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cH(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
ai:function(a){return new P.aE(!0,a,null,null)},
no:function(a){if(typeof a!=="number")throw H.a(H.ai(a))
return a},
a:function(a){var z
if(a==null)a=new P.eZ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hI})
z.name=""}else z.toString=H.hI
return z},
hI:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aO(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oa(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aU(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dh(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eY(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fo()
u=$.$get$fp()
t=$.$get$fq()
s=$.$get$fr()
r=$.$get$fv()
q=$.$get$fw()
p=$.$get$ft()
$.$get$fs()
o=$.$get$fy()
n=$.$get$fx()
m=v.ae(y)
if(m!=null)return z.$1(H.dh(H.H(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.dh(H.H(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eY(H.H(y),m))}}return z.$1(new H.kH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f9()
return a},
bD:function(a){var z
if(a==null)return new H.h3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h3(a)},
nC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nO:function(a,b,c,d,e,f){H.d(a,"$iscb")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nO)
a.$identity=z
return z},
i7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.jO(z).r}else x=d
w=e?Object.create(new H.kb().constructor.prototype):Object.create(new H.d4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.E()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.en(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nF,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.eg:H.d5
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.en(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i4:function(a,b,c,d){var z=H.d5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
en:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i6(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i4(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.cu("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.cu("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i5:function(a,b,c,d){var z,y
z=H.d5
y=H.eg
switch(b?-1:a){case 0:throw H.a(H.jY("Intercepted function with no arguments."))
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
z=$.bG
if(z==null){z=H.cu("self")
$.bG=z}y=$.ef
if(y==null){y=H.cu("receiver")
$.ef=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i5(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()},
dU:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c6(b))
H.F(c)
y=!!J.L(d).$ise?J.bK(d):d
return H.i7(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aC(a,"String"))},
nA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aC(a,"double"))},
o0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aC(a,"num"))},
dS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aC(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aC(a,"int"))},
hE:function(a,b){throw H.a(H.aC(a,H.H(b).substring(3)))},
o2:function(a,b){var z=J.aM(b)
throw H.a(H.i3(a,z.u(b,3,z.gm(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hE(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.o2(a,b)},
c6:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.a(H.aC(a,"List"))},
hB:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.hE(a,b)},
hv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
co:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hv(J.L(a))
if(z==null)return!1
y=H.hy(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dP)return a
$.dP=!0
try{if(H.co(a,b))return a
z=H.cq(b)
y=H.aC(a,z)
throw H.a(y)}finally{$.dP=!1}},
dX:function(a,b){if(a!=null&&!H.dT(a,b))H.r(H.aC(a,H.cq(b)))
return a},
hn:function(a){var z
if(a instanceof H.m){z=H.hv(J.L(a))
if(z!=null)return H.cq(z)
return"Closure"}return H.bl(a)},
o8:function(a){throw H.a(new P.ig(H.H(a)))},
hw:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pG:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
b8:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bE(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bE(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.b9(a)
return z==null?null:z[b]},
cq:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.v(b,"$ise",[P.h],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dZ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.ne(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ne:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dZ:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.h],"$ase")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}v="<"+z.i(0)+">"
return v},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c3:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b9(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hq(H.bE(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.H(b)
H.c6(c)
H.H(d)
if(a==null)return a
z=H.c3(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dZ(c,0,null)
throw H.a(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ax(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ax(a[y],b,c[y],d))return!1
return!0},
pE:function(a,b,c){return a.apply(b,H.bE(J.L(b)["$as"+H.j(c)],H.b9(b)))},
hA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="N"||a===-1||a===-2||H.hA(z)}return!1},
dT:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="N"||b===-1||b===-2||H.hA(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.co(a,b)}y=J.L(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ax(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dT(a,b))throw H.a(H.aC(a,H.cq(b)))
return a},
ax:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.hy(a,b,c,d)
if('func' in a)return c.builtin$cls==="cb"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,x,d)
else if(H.ax(a,b,x,d))return!0
else{if(!('$is'+"bJ" in y.prototype))return!1
w=y.prototype["$as"+"bJ"]
v=H.bE(w,z?a.slice(1):null)
return H.ax(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cq(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bE(r,z),b,u,d)},
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
return H.o_(m,b,l,d)},
o_:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ax(c[w],d,a[w],b))return!1}return!0},
pF:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nR:function(a){var z,y,x,w,v,u
z=H.H($.hx.$1(a))
y=$.cV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hp.$2(a,z))
if(z!=null){y=$.cV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cZ(x)
$.cV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cY[z]=x
return x}if(v==="-"){u=H.cZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hD(a,x)
if(v==="*")throw H.a(P.cj(z))
if(init.leafTags[z]===true){u=H.cZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hD(a,x)},
hD:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cZ:function(a){return J.e_(a,!1,null,!!a.$isJ)},
nZ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cZ(z)
else return J.e_(z,c,null,null)},
nM:function(){if(!0===$.dY)return
$.dY=!0
H.nN()},
nN:function(){var z,y,x,w,v,u,t,s
$.cV=Object.create(null)
$.cY=Object.create(null)
H.nI()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hF.$1(v)
if(u!=null){t=H.nZ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nI:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bA(C.R,H.bA(C.W,H.bA(C.x,H.bA(C.x,H.bA(C.V,H.bA(C.S,H.bA(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hx=new H.nJ(v)
$.hp=new H.nK(u)
$.hF=new H.nL(t)},
bA:function(a,b){return a(b)||b},
hH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e2:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ia:{"^":"b;$ti",
i:function(a){return P.dl(this)},
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.ib()},
$isM:1},
ic:{"^":"ia;a,b,c,$ti",
gm:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bw(0,b))return
return this.dk(b)},
dk:function(a){return this.b[H.H(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dk(v),z))}}},
jN:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kt:{"^":"b;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
js:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eY:function(a,b){return new H.js(a,b==null?null:b.method)}}},
iQ:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dh:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iQ(a,y,z?null:b.receiver)}}},
kH:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
oa:{"^":"m:19;a",
$1:function(a){if(!!J.L(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h3:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaB:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geM:function(){return this},
$iscb:1,
geM:function(){return this}},
ff:{"^":"m;"},
kb:{"^":"ff;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d4:{"^":"ff;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bR(this.a)
else y=typeof z!=="object"?J.c7(z):H.bR(z)
return(y^H.bR(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
t:{
d5:function(a){return a.a},
eg:function(a){return a.c},
cu:function(a){var z,y,x,w,v
z=new H.d4("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ku:{"^":"a9;a",
i:function(a){return this.a},
t:{
aC:function(a,b){return new H.ku("TypeError: "+H.j(P.cx(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
i2:{"^":"a9;a",
i:function(a){return this.a},
t:{
i3:function(a,b){return new H.i2("CastError: "+H.j(P.cx(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
jX:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jY:function(a){return new H.jX(a)}}},
b6:{"^":"eP;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
giu:function(a){return this.a===0},
ga7:function(a){return new H.iW(this,[H.y(this,0)])},
bw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dg(y,b)}else return this.ir(b)},
ir:function(a){var z=this.d
if(z==null)return!1
return this.cI(this.c6(z,this.cH(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.br(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.br(w,b)
x=y==null?null:y.b
return x}else return this.is(b)},
is:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c6(z,this.cH(a))
x=this.cI(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cb()
this.b=z}this.d7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cb()
this.c=y}this.d7(y,b,c)}else this.it(b,c)},
it:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.cb()
this.d=z}y=this.cH(a)
x=this.c6(z,y)
if(x==null)this.cj(z,y,[this.cc(a,b)])
else{w=this.cI(x,a)
if(w>=0)x[w].b=b
else x.push(this.cc(a,b))}},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aO(this))
z=z.c}},
d7:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.br(a,b)
if(z==null)this.cj(a,b,this.cc(b,c))
else z.b=c},
fC:function(){this.r=this.r+1&67108863},
cc:function(a,b){var z,y
z=new H.iV(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fC()
return z},
cH:function(a){return J.c7(a)&0x3ffffff},
cI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dl(this)},
br:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
fu:function(a,b){delete a[b]},
dg:function(a,b){return this.br(a,b)!=null},
cb:function(){var z=Object.create(null)
this.cj(z,"<non-identifier-key>",z)
this.fu(z,"<non-identifier-key>")
return z},
$iseM:1},
iV:{"^":"b;a,b,0c,0d"},
iW:{"^":"ey;a,$ti",
gm:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.iX(z,z.r,this.$ti)
y.c=z.e
return y}},
iX:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nJ:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nK:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nL:{"^":"m:55;a",
$1:function(a){return this.a(H.H(a))}},
iO:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isf_:1,
$isjP:1,
t:{
iP:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nB:function(a){return J.eG(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
jm:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
n8:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nz(a,b,c))
return b},
eW:{"^":"t;",$iseW:1,"%":"ArrayBuffer"},
ds:{"^":"t;",$isds:1,$iskv:1,"%":"DataView;ArrayBufferView;dr|fY|fZ|jn|h_|h0|b7"},
dr:{"^":"ds;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dW},
jn:{"^":"fZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nA(c)
H.aK(b,a,a.length)
a[b]=c},
$ascy:function(){return[P.p]},
$asz:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
b7:{"^":"h0;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aK(b,a,a.length)
a[b]=c},
$ascy:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]}},
oL:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oM:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oN:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oO:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oP:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oQ:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dt:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bV:function(a,b,c){return new Uint8Array(a.subarray(b,H.n8(b,c,a.length)))},
$isdt:1,
$isT:1,
"%":";Uint8Array"},
fY:{"^":"dr+z;"},
fZ:{"^":"fY+cy;"},
h_:{"^":"dr+z;"},
h0:{"^":"h_+cy;"}}],["","",,P,{"^":"",
lg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nl()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.li(z),1)).observe(y,{childList:true})
return new P.lh(z,y,x)}else if(self.setImmediate!=null)return P.nm()
return P.nn()},
pr:[function(a){self.scheduleImmediate(H.bB(new P.lj(H.l(a,{func:1,ret:-1})),0))},"$1","nl",4,0,12],
ps:[function(a){self.setImmediate(H.bB(new P.lk(H.l(a,{func:1,ret:-1})),0))},"$1","nm",4,0,12],
pt:[function(a){P.dC(C.q,H.l(a,{func:1,ret:-1}))},"$1","nn",4,0,12],
dC:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a6(a.a,1000)
return P.mr(z<0?0:z,b)},
fj:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.f.a6(a.a,1000)
return P.ms(z<0?0:z,b)},
nh:function(a,b){if(H.co(a,{func:1,args:[P.b,P.aB]}))return b.iT(a,null,P.b,P.aB)
if(H.co(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ng:function(){var z,y
for(;z=$.bz,z!=null;){$.c1=null
y=z.b
$.bz=y
if(y==null)$.c0=null
z.a.$0()}},
pD:[function(){$.dQ=!0
try{P.ng()}finally{$.c1=null
$.dQ=!1
if($.bz!=null)$.$get$dK().$1(P.hr())}},"$0","hr",0,0,3],
hm:function(a){var z=new P.fP(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.c0=z
$.bz=z
if(!$.dQ)$.$get$dK().$1(P.hr())}else{$.c0.b=z
$.c0=z}},
nk:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hm(a)
$.c1=$.c0
return}y=new P.fP(a)
x=$.c1
if(x==null){y.b=z
$.c1=y
$.bz=y}else{y.b=x.b
x.b=y
$.c1=y
if(y.b==null)$.c0=y}},
o3:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cU(null,null,C.j,a)
return}y.toString
P.cU(null,null,y,H.l(y.co(a),z))},
fi:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dC(a,b)}return P.dC(a,H.l(y.co(b),z))},
kq:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fj(a,b)}x=y.dM(b,P.bs)
$.Y.toString
return P.fj(a,H.l(x,z))},
cT:function(a,b,c,d,e){var z={}
z.a=d
P.nk(new P.ni(z,e))},
hi:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nj:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cU:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.i_(d,-1)
P.hm(d)},
li:{"^":"m:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lh:{"^":"m:52;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lj:{"^":"m:1;a",
$0:function(){this.a.$0()}},
lk:{"^":"m:1;a",
$0:function(){this.a.$0()}},
h7:{"^":"b;a,0b,c",
ff:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.mu(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
fg:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.mt(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbs:1,
t:{
mr:function(a,b){var z=new P.h7(!0,0)
z.ff(a,b)
return z},
ms:function(a,b){var z=new P.h7(!1,0)
z.fg(a,b)
return z}}},
mu:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mt:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.f1(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
iz:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.l(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ip:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.co(z,{func:1,args:[P.b,P.aB]}))return H.dX(w.j2(z,a.a,a.b,null,y,P.aB),x)
else return H.dX(w.cW(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b0:{"^":"b;dw:a<,b,0hf:c<,$ti",
eC:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nh(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b0(0,$.Y,[c])
w=b==null?1:3
this.d8(new P.bx(x,w,a,b,[z,c]))
return x},
j8:function(a,b){return this.eC(a,null,b)},
d8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb0")
z=y.a
if(z<4){y.d8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cU(null,null,z,H.l(new P.lA(this,a),{func:1,ret:-1}))}},
dr:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb0")
y=u.a
if(y<4){u.dr(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cU(null,null,y,H.l(new P.lF(z,this),{func:1,ret:-1}))}},
ce:function(){var z=H.d(this.c,"$isbx")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dd:function(a){var z,y,x,w
z=H.y(this,0)
H.dX(a,{futureOr:1,type:z})
y=this.$ti
x=H.c3(a,"$isbJ",y,"$asbJ")
if(x){z=H.c3(a,"$isb0",y,null)
if(z)P.fT(a,this)
else P.lB(a,this)}else{w=this.ce()
H.A(a,z)
this.a=4
this.c=a
P.bX(this,w)}},
c1:[function(a,b){var z
H.d(b,"$isaB")
z=this.ce()
this.a=8
this.c=new P.ap(a,b)
P.bX(this,z)},function(a){return this.c1(a,null)},"jj","$2","$1","gfo",4,2,51],
$isbJ:1,
t:{
lB:function(a,b){var z,y,x
b.a=1
try{a.eC(new P.lC(b),new P.lD(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.o3(new P.lE(b,z,y))}},
fT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb0")
if(z>=4){y=b.ce()
b.a=a.a
b.c=a.c
P.bX(b,y)}else{y=H.d(b.c,"$isbx")
b.a=2
b.c=a
a.dr(y)}},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cT(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bX(z.a,b)}y=z.a
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
if(p){H.d(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cT(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lI(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lH(x,b,r).$0()}else if((y&2)!==0)new P.lG(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.L(y).$isbJ){if(y.a>=4){n=H.d(t.c,"$isbx")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fT(y,t)
return}}m=b.b
n=H.d(m.c,"$isbx")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.d(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
lA:{"^":"m:1;a,b",
$0:function(){P.bX(this.a,this.b)}},
lF:{"^":"m:1;a,b",
$0:function(){P.bX(this.b,this.a.a)}},
lC:{"^":"m:31;a",
$1:function(a){var z=this.a
z.a=0
z.dd(a)}},
lD:{"^":"m:50;a",
$2:function(a,b){this.a.c1(a,H.d(b,"$isaB"))},
$1:function(a){return this.$2(a,null)}},
lE:{"^":"m:1;a,b,c",
$0:function(){this.a.c1(this.b,this.c)}},
lI:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eA(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.d(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.L(z).$isbJ){if(z instanceof P.b0&&z.gdw()>=4){if(z.gdw()===8){w=this.b
w.b=H.d(z.ghf(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.j8(new P.lJ(t),null)
w.a=!1}}},
lJ:{"^":"m:48;a",
$1:function(a){return this.a}},
lH:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cW(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lG:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isap")
w=this.c
if(w.iz(z)&&w.e!=null){v=this.b
v.b=w.ip(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.d(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fP:{"^":"b;a,0b"},
dy:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b0(0,$.Y,[P.n])
z.a=0
this.iy(new P.ke(z,this),!0,new P.kf(z,y),y.gfo())
return y}},
ke:{"^":"m;a,b",
$1:function(a){H.A(a,H.al(this.b,"dy",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.al(this.b,"dy",0)]}}},
kf:{"^":"m:1;a,b",
$0:function(){this.b.dd(this.a.a)}},
fc:{"^":"b;$ti"},
kd:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa9:1},
mX:{"^":"b;",$ispq:1},
ni:{"^":"m:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eZ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
m2:{"^":"mX;",
j3:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cT(null,null,this,z,H.d(y,"$isaB"))}},
j4:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cT(null,null,this,z,H.d(y,"$isaB"))}},
i_:function(a,b){return new P.m4(this,H.l(a,{func:1,ret:b}),b)},
co:function(a){return new P.m3(this,H.l(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.m5(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hi(null,null,this,a,b)},
cW:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
j2:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nj(null,null,this,a,b,c,d,e,f)},
iT:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
m4:{"^":"m;a,b,c",
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m3:{"^":"m:3;a,b",
$0:function(){return this.a.j3(this.b)}},
m5:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.j4(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iY:function(a,b,c,d,e){return new H.b6(0,0,[d,e])},
iZ:function(a,b,c){H.c6(a)
return H.v(H.nC(a,new H.b6(0,0,[b,c])),"$iseM",[b,c],"$aseM")},
dj:function(a,b){return new H.b6(0,0,[a,b])},
cg:function(a,b,c,d){return new P.lQ(0,0,[d])},
iK:function(a,b,c){var z,y
if(P.dR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c2()
C.a.h(y,a)
try{P.nf(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fd(b,H.hB(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dd:function(a,b,c){var z,y,x
if(P.dR(a))return b+"..."+c
z=new P.am(b)
y=$.$get$c2()
C.a.h(y,a)
try{x=z
x.a=P.fd(x.gaP(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaP()+c
y=z.gaP()
return y.charCodeAt(0)==0?y:y},
dR:function(a){var z,y
for(z=0;y=$.$get$c2(),z<y.length;++z)if(a===y[z])return!0
return!1},
nf:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
j_:function(a,b,c){var z=P.iY(null,null,null,b,c)
a.L(0,new P.j0(z,b,c))
return z},
eN:function(a,b){var z,y
z=P.cg(null,null,null,b)
for(y=J.b2(a);y.D();)z.h(0,H.A(y.gO(y),b))
return z},
dl:function(a){var z,y,x
z={}
if(P.dR(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$c2(),a)
x=y
x.a=x.gaP()+"{"
z.a=!0
J.e6(a,new P.j5(z,y))
z=y
z.a=z.gaP()+"}"}finally{z=$.$get$c2()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaP()
return z.charCodeAt(0)==0?z:z},
lQ:{"^":"lK;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){var z=new P.fX(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscQ")!=null}else{y=this.fp(b)
return y}},
fp:function(a){var z=this.d
if(z==null)return!1
return this.c4(this.dl(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dM()
this.b=z}return this.da(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dM()
this.c=y}return this.da(y,b)}else return this.fh(0,b)},
fh:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dM()
this.d=z}y=this.de(b)
x=z[y]
if(x==null)z[y]=[this.c0(b)]
else{if(this.c4(x,b)>=0)return!1
x.push(this.c0(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ds(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ds(this.c,b)
else return this.h7(0,b)},
h7:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dl(z,b)
x=this.c4(y,b)
if(x<0)return!1
this.dA(y.splice(x,1)[0])
return!0},
da:function(a,b){H.A(b,H.y(this,0))
if(H.d(a[b],"$iscQ")!=null)return!1
a[b]=this.c0(b)
return!0},
ds:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscQ")
if(z==null)return!1
this.dA(z)
delete a[b]
return!0},
dc:function(){this.r=this.r+1&67108863},
c0:function(a){var z,y
z=new P.cQ(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dc()
return z},
dA:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dc()},
de:function(a){return J.c7(a)&0x3ffffff},
dl:function(a,b){return a[this.de(b)]},
c4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
t:{
dM:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cQ:{"^":"b;a,0b,0c"},
fX:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lK:{"^":"jZ;"},
j0:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cD:{"^":"lR;",$isi:1,$ise:1},
z:{"^":"b;$ti",
gZ:function(a){return new H.dk(a,this.gm(a),0,[H.b8(this,a,"z",0)])},
I:function(a,b){return this.k(a,b)},
jb:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.p(z,y,this.k(a,y));++y}return z},
ja:function(a){return this.jb(a,!0)},
aK:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"z",0))
P.aT(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dd(a,"[","]")}},
eP:{"^":"aj;"},
j5:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aj:{"^":"b;$ti",
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"aj",0),H.b8(this,a,"aj",1)]})
for(z=J.b2(this.ga7(a));z.D();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gm:function(a){return J.ao(this.ga7(a))},
i:function(a){return P.dl(a)},
$isM:1},
mz:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
j6:{"^":"b;$ti",
k:function(a,b){return J.e5(this.a,b)},
p:function(a,b,c){J.d0(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
L:function(a,b){J.e6(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isM:1},
fF:{"^":"mA;a,$ti"},
k0:{"^":"b;$ti",
aw:function(a,b){var z
for(z=J.b2(H.v(b,"$isi",this.$ti,"$asi"));z.D();)this.h(0,z.gO(z))},
i:function(a){return P.dd(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ea("index"))
if(b<0)H.r(P.a3(b,0,null,"index",null))
for(z=new P.fX(this,this.r,this.$ti),z.c=this.e,y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jZ:{"^":"k0;"},
lR:{"^":"b+z;"},
mA:{"^":"j6+mz;$ti"}}],["","",,P,{"^":"",i_:{"^":"c9;a",
iC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aT(c,d,b.length,null,null,null)
z=$.$get$fR()
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
if(q<=d){p=H.cX(C.b.H(b,s))
o=H.cX(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.u(b,x,y)
w.a+=H.bS(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.ed(b,u,d,v,t,k)
else{j=C.f.bn(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b1(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ed(b,u,d,v,t,i)
else{j=C.f.bn(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b1(b,d,d,j===2?"==":"=")}return b},
$asc9:function(){return[[P.e,P.n],P.h]},
t:{
ed:function(a,b,c,d,e,f){if(C.f.bn(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},i0:{"^":"b4;a",
$asb4:function(){return[[P.e,P.n],P.h]}},c9:{"^":"b;$ti"},b4:{"^":"kd;$ti"},it:{"^":"c9;",
$asc9:function(){return[P.h,[P.e,P.n]]}},iH:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iG:{"^":"b4;a",
fq:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.am("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hV(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb4:function(){return[P.h,P.h]}},kV:{"^":"it;a",
gie:function(){return C.L}},l1:{"^":"b4;",
b9:function(a,b,c){var z,y,x,w
z=a.length
P.aT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mV(0,0,x)
if(w.fw(a,b,z)!==z)w.dC(J.hO(a,z-1),0)
return C.a2.bV(x,0,w.b)},
cu:function(a){return this.b9(a,0,null)},
$asb4:function(){return[P.h,[P.e,P.n]]}},mV:{"^":"b;a,b,c",
dC:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
fw:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},kW:{"^":"b4;a",
b9:function(a,b,c){var z,y,x,w,v
H.v(a,"$ise",[P.n],"$ase")
z=P.kX(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aT(b,c,y,null,null,null)
x=new P.am("")
w=new P.mS(!1,x,!0,0,0,0)
w.b9(a,b,y)
w.ik(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.b9(a,0,null)},
$asb4:function(){return[[P.e,P.n],P.h]},
t:{
kX:function(a,b,c,d){H.v(b,"$ise",[P.n],"$ase")
if(b instanceof Uint8Array)return P.kY(!1,b,c,d)
return},
kY:function(a,b,c,d){var z,y,x
z=$.$get$fK()
if(z==null)return
y=0===c
if(y&&!0)return P.dH(z,b)
x=b.length
d=P.aT(c,d,x,null,null,null)
if(y&&d===x)return P.dH(z,b)
return P.dH(z,b.subarray(c,d))},
dH:function(a,b){if(P.l_(b))return
return P.l0(a,b)},
l0:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
l_:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kZ:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mS:{"^":"b;a,b,c,d,e,f",
ik:function(a,b,c){var z
H.v(b,"$ise",[P.n],"$ase")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ise",[P.n],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mU(c)
v=new P.mT(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.f.bj(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a1("Overlong encoding of 0x"+C.f.bj(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.f.bj(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bS(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d0()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.f.bj(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.f.bj(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mU:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ise",[P.n],"$ase")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},mT:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ci(this.d,a,b)}}}],["","",,P,{"^":"",
cp:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jG(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
iv:function(a){var z=J.L(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
j1:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iM(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
j2:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.D();)C.a.h(y,H.A(x.gO(x),c))
if(b)return y
return H.v(J.bK(y),"$ise",z,"$ase")},
ci:function(a,b,c){var z,y
z=P.n
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.f2(z?C.a.bV(a,b,c):a)}if(!!J.L(a).$isdt)return H.jI(a,b,P.aT(b,c,a.length,null,null,null))
return P.kg(a,b,c)},
kg:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a3(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a3(c,b,J.ao(a),null,null))
y=J.b2(a)
for(x=0;x<b;++x)if(!y.D())throw H.a(P.a3(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.D())throw H.a(P.a3(c,b,x,null,null))
w.push(y.gO(y))}return H.f2(w)},
jQ:function(a,b,c){return new H.iO(a,H.iP(a,!1,!0,!1))},
fH:function(){var z=H.jy()
if(z!=null)return P.kN(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cx:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iv(a)},
u:function(a){return new P.fS(a)},
j3:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e1:function(a){H.o1(a)},
kN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fG(b>0||c<c?C.b.u(a,b,c):a,5,null).geG()
else if(y===32)return P.fG(C.b.u(a,z,c),0,null).geG()}x=new Array(8)
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
if(P.hk(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.je()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ab(a,"..",s)))n=r>s+2&&C.b.ab(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ab(a,"file",b)){if(u<=b){if(!C.b.ab(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b1(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ab(a,"http",b)){if(x&&t+3===s&&C.b.ab(a,"80",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
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
else if(v===z&&C.b.ab(a,"https",b)){if(x&&t+4===s&&C.b.ab(a,"443",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
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
q-=b}return new P.mb(a,v,u,t,s,r,q,o)}return P.mB(a,b,c,v,u,t,s,r,q,o)},
fJ:function(a,b){var z=P.h
return C.a.il(H.c(a.split("&"),[z]),P.dj(z,z),new P.kQ(b),[P.M,P.h,P.h])},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kM(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cp(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.d0()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cp(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.d0()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kO(a)
y=new P.kP(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaB(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kL(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.f.aU(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n9:function(){var z,y,x,w,v
z=P.j3(22,new P.nb(),!0,P.T)
y=new P.na(z)
x=new P.nc()
w=new P.nd()
v=H.d(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isT"),"]",5)
v=H.d(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isT"),"az",21)
v=H.d(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hk:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ise",[P.n],"$ase")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
aq:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.f.aU(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ii(H.jF(this))
y=P.ca(H.jD(this))
x=P.ca(H.jz(this))
w=P.ca(H.jA(this))
v=P.ca(H.jC(this))
u=P.ca(H.jE(this))
t=P.ij(H.jB(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ii:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ij:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ca:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a5;"},
"+double":0,
be:{"^":"b;a",
j:function(a,b){return new P.be(C.f.ah(this.a*b))},
S:function(a,b){return C.f.S(this.a,H.d(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ip()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.f.a6(y,6e7)%60)
w=z.$1(C.f.a6(y,1e6)%60)
v=new P.io().$1(y%1e6)
return""+C.f.a6(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
ex:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
io:{"^":"m:30;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ip:{"^":"m:30;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eZ:{"^":"a9;",
i:function(a){return"Throw of null."}},
aE:{"^":"a9;a,b,c,d",
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gc3()+y+x
if(!this.a)return w
v=this.gc2()
u=P.cx(this.b)
return w+v+": "+H.j(u)},
t:{
c8:function(a){return new P.aE(!1,null,null,a)},
cs:function(a,b,c){return new P.aE(!0,a,b,c)},
ea:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
cH:{"^":"aE;e,f,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
ch:function(a,b,c){return new P.cH(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.cH(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.a3(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.a3(b,a,c,"end",f))
return b}return c}}},
iI:{"^":"aE;e,m:f>,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){if(J.hK(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iI(b,z,!0,a,c,"Index out of range")}}},
kJ:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
D:function(a){return new P.kJ(a)}}},
kG:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cj:function(a){return new P.kG(a)}}},
dx:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
fb:function(a){return new P.dx(a)}}},
i9:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cx(z))+"."},
t:{
aO:function(a){return new P.i9(a)}}},
jt:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f9:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
ig:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fS:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iC:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
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
for(s=x;s<w.length;++s){r=C.b.Y(w,s)
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
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
t:{
a1:function(a,b,c){return new P.iC(a,b,c)}}},
cb:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
cZ:["eX",function(a,b){var z=H.al(this,"i",0)
return new H.dJ(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gZ(this)
for(y=0;z.D();)++y
return y},
gaM:function(a){var z,y
z=this.gZ(this)
if(!z.D())throw H.a(H.cC())
y=z.gO(z)
if(z.D())throw H.a(H.iL())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ea("index"))
if(b<0)H.r(P.a3(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iK(this,"(",")")}},
de:{"^":"b;$ti"},
e:{"^":"b;$ti",$isi:1},
"+List":0,
M:{"^":"b;$ti"},
N:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gW:function(a){return H.bR(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
aB:{"^":"b;"},
h:{"^":"b;",$isf_:1},
"+String":0,
am:{"^":"b;aP:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispa:1,
t:{
fd:function(a,b,c){var z=J.b2(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.D())}else{a+=H.j(z.gO(z))
for(;z.D();)a=a+c+H.j(z.gO(z))}return a}}},
kQ:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isM",[z,z],"$asM")
H.H(b)
y=J.aM(b).eh(b,"=")
if(y===-1){if(b!=="")J.d0(a,P.dO(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.at(b,y+1)
z=this.a
J.d0(a,P.dO(x,0,x.length,z,!0),P.dO(w,0,w.length,z,!0))}return a}},
kM:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
kO:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kP:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cp(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cR:{"^":"b;bU:a<,b,c,d,es:e>,f,r,0x,0y,0z,0Q,0ch",
geH:function(){return this.b},
gcG:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbO:function(a){var z=this.d
if(z==null)return P.h9(this.a)
return z},
gcR:function(a){var z=this.f
return z==null?"":z},
gec:function(){var z=this.r
return z==null?"":z},
cV:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.h,null],"$asM")
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
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dN(g,0,0,h)
return new P.cR(i,j,c,f,d,g,this.r)},
ey:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gcS:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fF(P.fJ(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ged:function(){return this.c!=null},
geg:function(){return this.f!=null},
gee:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
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
z=J.L(b)
if(!!z.$isdG){y=this.a
x=b.gbU()
if(y==null?x==null:y===x)if(this.c!=null===b.ged()){y=this.b
x=b.geH()
if(y==null?x==null:y===x){y=this.gcG(this)
x=z.gcG(b)
if(y==null?x==null:y===x){y=this.gbO(this)
x=z.gbO(b)
if(y==null?x==null:y===x)if(this.e===z.ges(b)){y=this.f
x=y==null
if(!x===b.geg()){if(x)y=""
if(y===z.gcR(b)){z=this.r
y=z==null
if(!y===b.gee()){if(y)z=""
z=z===b.gec()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isdG:1,
t:{
cn:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.n],"$ase")
if(c===C.k){z=$.$get$he().b
if(typeof b!=="string")H.r(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.al(c,"c9",0))
y=c.gie().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bS(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mM(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mN(a,z,e-1):""
x=P.mG(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.mJ(P.cp(C.b.u(a,w,g),new P.mC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dN(a,h+1,i,null):null
return new P.cR(j,y,x,v,u,t,i<c?P.mF(a,i+1,c):null)},
h9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.a(P.a1(c,a,b))},
mJ:function(a,b){if(a!=null&&a===P.h9(b))return
return a},
mG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.Y(a,z)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
P.fI(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fI(a,b,c)
return"["+a+"]"}return P.mP(a,b,c)},
mP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.hg(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bY(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ha(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hc(C.b.H(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bY(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mD(y?a.toLowerCase():a)},
mD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mN:function(a,b,c){return P.bZ(a,b,c,C.a_)},
mH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bZ(a,b,c,C.D):C.w.jS(d,new P.mI(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.mO(w,e,f)},
mO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.mQ(a,!z||c)
return P.mR(a)},
dN:function(a,b,c,d){var z,y
z={}
H.v(d,"$isM",[P.h,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.c8("Both query and queryParameters specified"))
return P.bZ(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.L(0,new P.mK(new P.mL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mF:function(a,b,c){return P.bZ(a,b,c,C.n)},
hg:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cX(y)
v=H.cX(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aU(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bS(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
ha:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.f.hp(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.ci(y,0,null)},
bZ:function(a,b,c,d){var z=P.hf(a,b,c,H.v(d,"$ise",[P.n],"$ase"),!1)
return z==null?C.b.u(a,b,c):z},
hf:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ise",[P.n],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hg(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bY(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ha(v)}}if(w==null)w=new P.am("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hd:function(a){if(C.b.a4(a,"."))return!0
return C.b.eh(a,"/.")!==-1},
mR:function(a){var z,y,x,w,v,u,t
if(!P.hd(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.S(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mQ:function(a,b){var z,y,x,w,v,u
if(!P.hd(a))return!b?P.hb(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaB(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaB(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.hb(z[0]))}return C.a.n(z,"/")},
hb:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hc(J.hL(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.at(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c8("Invalid URL encoding"))}}return z},
dO:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c5(a)
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
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c8("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c8("Truncated URI"))
C.a.h(u,P.mE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ise",[P.n],"$ase")
return new P.kW(!1).cu(u)},
hc:function(a){var z=a|32
return 97<=z&&z<=122}}},
mC:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
mI:{"^":"m:28;",
$1:function(a){return P.cn(C.a0,a,C.k,!1)}},
mL:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cn(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cn(C.p,b,C.k,!0))}}},
mK:{"^":"m:40;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b2(H.hB(b,"$isi")),y=this.a;z.D();)y.$2(a,H.H(z.gO(z)))}},
kK:{"^":"b;a,b,c",
geG:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.ei(y,"?",z)
w=y.length
if(x>=0){v=P.bZ(y,x+1,w,C.n)
w=x}else v=null
z=new P.lp(this,"data",null,null,null,P.bZ(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaB(z)
if(v!==44||x!==t+7||!C.b.ab(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iC(0,a,s,y)
else{r=P.hf(a,s,y,C.n,!0)
if(r!=null)a=C.b.b1(a,s,y,r)}return new P.kK(a,z,c)}}},
nb:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
na:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hP(z,0,96,b)
return z}},
nc:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
nd:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mb:{"^":"b;a,b,c,d,e,f,r,x,0y",
ged:function(){return this.c>0},
gef:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
geg:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
gee:function(){return this.r<this.a.length},
gdm:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdn:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbU:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdm()){this.x="http"
z="http"}else if(this.gdn()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geH:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcG:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbO:function(a){var z
if(this.gef()){z=this.d
if(typeof z!=="number")return z.E()
return P.cp(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdm())return 80
if(this.gdn())return 443
return 0},
ges:function(a){return C.b.u(this.a,this.e,this.f)},
gcR:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.b.u(this.a,z+1,y):""},
gec:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.at(y,z+1):""},
gcS:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.a1
z=P.h
return new P.fF(P.fJ(this.gcR(this),C.k),[z,z])},
cV:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.h,null],"$asM")
i=this.gbU()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.gef()?this.gbO(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dN(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.at(y,x+1)
return new P.cR(i,j,c,f,d,g,b)},
ey:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdG)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdG:1},
lp:{"^":"cR;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e9:function(a){var z=document.createElement("a")
return z},
d7:function(a,b){var z=document.createElement("canvas")
return z},
iq:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).al(z,a,b,c)
y.toString
z=W.G
z=new H.dJ(new W.aw(y),H.l(new W.ir(),{func:1,ret:P.U,args:[z]}),[z])
return H.d(z.gaM(z),"$isV")},
is:function(a){H.d(a,"$isag")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hS(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iJ:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseF")
try{J.hU(z,a)}catch(x){H.ab(x)}return z},
cO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a,b,c,d){var z,y
z=W.cO(W.cO(W.cO(W.cO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dM(a,b)},
Z:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ob:{"^":"t;0m:length=","%":"AccessibleNodeList"},
oc:{"^":"Z;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
od:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ee:{"^":"Z;",$isee:1,"%":"HTMLBaseElement"},
d3:{"^":"t;",$isd3:1,"%":";Blob"},
ct:{"^":"Z;",$isct:1,"%":"HTMLBodyElement"},
oj:{"^":"Z;0a2:type}","%":"HTMLButtonElement"},
d6:{"^":"Z;",
bT:function(a,b,c){if(c!=null)return a.getContext(b,P.np(c,null))
return a.getContext(b)},
eO:function(a,b){return this.bT(a,b,null)},
$isd6:1,
"%":"HTMLCanvasElement"},
el:{"^":"t;",$isel:1,"%":"CanvasRenderingContext2D"},
ol:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
on:{"^":"ie;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oo:{"^":"lo;0m:length=",
eP:function(a,b){var z=a.getPropertyValue(this.fl(a,b))
return z==null?"":z},
fl:function(a,b){var z,y
z=$.$get$ep()
y=z[b]
if(typeof y==="string")return y
y=this.hq(a,b)
z[b]=y
return y},
hq:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ik()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gaA:function(a){return a.height},
gaY:function(a){return a.left},
gbh:function(a){return a.right},
gbk:function(a){return a.top},
gaC:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
id:{"^":"b;",
gaY:function(a){return this.eP(a,"left")}},
eq:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ie:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
op:{"^":"eq;0m:length=","%":"CSSTransformValue"},
oq:{"^":"eq;0m:length=","%":"CSSUnparsedValue"},
or:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"Z;",$isbd:1,"%":"HTMLDivElement"},
os:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
ot:{"^":"lr;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.v(c,"$isae",[P.a5],"$asae")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ae,P.a5]]},
$asz:function(){return[[P.ae,P.a5]]},
$isi:1,
$asi:function(){return[[P.ae,P.a5]]},
$ise:1,
$ase:function(){return[[P.ae,P.a5]]},
$asE:function(){return[[P.ae,P.a5]]},
"%":"ClientRectList|DOMRectList"},
im:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaC(a))+" x "+H.j(this.gaA(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c3(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aD(b)
return a.left===z.gaY(b)&&a.top===z.gbk(b)&&this.gaC(a)===z.gaC(b)&&this.gaA(a)===z.gaA(b)},
gW:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaC(a)&0x1FFFFFFF,this.gaA(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gaA:function(a){return a.height},
gaY:function(a){return a.left},
gbh:function(a){return a.right},
gbk:function(a){return a.top},
gaC:function(a){return a.width},
$isae:1,
$asae:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
ou:{"^":"lt;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"DOMStringList"},
ov:{"^":"t;0m:length=","%":"DOMTokenList"},
ln:{"^":"cD;dj:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isV")},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ja(this)
return new J.ay(z,z.length,0,[H.y(z,0)])},
aK:function(a,b,c,d){throw H.a(P.cj(null))},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$ase:function(){return[W.V]}},
V:{"^":"G;0j5:tagName=",
ghZ:function(a){return new W.lu(a)},
gct:function(a){return new W.ln(a,a.children)},
gdN:function(a){return P.jM(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
al:["bW",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eA
if(z==null){z=H.c([],[W.aI])
y=new W.eX(z)
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
$.eA=y
d=y}else d=z
z=$.ez
if(z==null){z=new W.hh(d)
$.ez=z
c=z}else{z.a=d
c=z}}if($.aP==null){z=document
y=z.implementation.createHTMLDocument("")
$.aP=y
$.da=y.createRange()
y=$.aP
y.toString
y=y.createElement("base")
H.d(y,"$isee")
y.href=z.baseURI
$.aP.head.appendChild(y)}z=$.aP
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isct")}z=$.aP
if(!!this.$isct)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aP.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.Z,a.tagName)){$.da.selectNodeContents(x)
w=$.da.createContextualFragment(b)}else{x.innerHTML=b
w=$.aP.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aP.body
if(x==null?z!=null:x!==z)J.e8(x)
c.d1(w)
document.adoptNode(w)
return w},function(a,b,c){return this.al(a,b,c,null)},"i6",null,null,"gjQ",5,5,null],
eT:function(a,b,c,d){a.textContent=null
a.appendChild(this.al(a,b,c,d))},
eS:function(a,b){return this.eT(a,b,null,null)},
$isV:1,
"%":";Element"},
ir:{"^":"m:24;",
$1:function(a){return!!J.L(H.d(a,"$isG")).$isV}},
ow:{"^":"Z;0a2:type}","%":"HTMLEmbedElement"},
af:{"^":"t;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ag:{"^":"t;",
dF:["eV",function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(c!=null)this.fi(a,b,c,!1)}],
fi:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.af]}),1),!1)},
$isag:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h1|h2|h5|h6"},
b5:{"^":"d3;",$isb5:1,"%":"File"},
eB:{"^":"lz;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isb5")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b5]},
$asz:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$ise:1,
$ase:function(){return[W.b5]},
$iseB:1,
$asE:function(){return[W.b5]},
"%":"FileList"},
ox:{"^":"ag;0m:length=","%":"FileWriter"},
oy:{"^":"Z;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
oz:{"^":"t;0m:length=","%":"History"},
oA:{"^":"lM;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cc:{"^":"t;0dO:data=",$iscc:1,"%":"ImageData"},
eE:{"^":"Z;",$iseE:1,"%":"HTMLImageElement"},
eF:{"^":"Z;0a2:type}",$iseF:1,"%":"HTMLInputElement"},
bL:{"^":"dD;",$isbL:1,"%":"KeyboardEvent"},
oE:{"^":"Z;0a2:type}","%":"HTMLLinkElement"},
oF:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
oG:{"^":"t;0m:length=","%":"MediaList"},
oH:{"^":"ag;",
dF:function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eV(a,b,c,!1)},
"%":"MessagePort"},
oI:{"^":"lS;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.L(a,new W.jj(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jj:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oJ:{"^":"lT;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.L(a,new W.jk(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jk:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oK:{"^":"lV;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbj")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asE:function(){return[W.bj]},
"%":"MimeTypeArray"},
az:{"^":"dD;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aw:{"^":"cD;a",
gaM:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fb("No elements"))
if(y>1)throw H.a(P.fb("More than one element"))
return z.firstChild},
aw:function(a,b){var z,y,x,w
H.v(b,"$isi",[W.G],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.d(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.eC(z,z.length,-1,[H.b8(C.a3,z,"E",0)])},
aK:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.G]},
$asi:function(){return[W.G]},
$ase:function(){return[W.G]}},
G:{"^":"ag;0cQ:previousSibling=",
iU:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iZ:function(a,b){var z,y
try{z=a.parentNode
J.hM(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eW(a):z},
ha:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oR:{"^":"t;",
iR:[function(a){return a.previousNode()},"$0","gcQ",1,0,26],
"%":"NodeIterator"},
jo:{"^":"lX;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oU:{"^":"Z;0a2:type}","%":"HTMLOListElement"},
oV:{"^":"Z;0a2:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oY:{"^":"m0;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbk")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asE:function(){return[W.bk]},
"%":"PluginArray"},
p_:{"^":"t;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
p0:{"^":"m6;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.L(a,new W.jW(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jW:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p2:{"^":"Z;0a2:type}","%":"HTMLScriptElement"},
p3:{"^":"Z;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"ag;",$isbm:1,"%":"SourceBuffer"},
p4:{"^":"h2;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbm")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"SourceBufferList"},
p5:{"^":"Z;0a2:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
p6:{"^":"md;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
p8:{"^":"mg;",
k:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga7:function(a){var z=H.c([],[P.h])
this.L(a,new W.kc(z))
return z},
gm:function(a){return a.length},
$asaj:function(){return[P.h,P.h]},
$isM:1,
$asM:function(){return[P.h,P.h]},
"%":"Storage"},
kc:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pb:{"^":"Z;0a2:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
dz:{"^":"Z;",$isdz:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kh:{"^":"Z;",
al:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=W.iq("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aw(y).aw(0,new W.aw(z))
return y},
"%":"HTMLTableElement"},
pd:{"^":"Z;",
al:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.al(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaM(z)
x.toString
z=new W.aw(x)
w=z.gaM(z)
y.toString
w.toString
new W.aw(y).aw(0,new W.aw(w))
return y},
"%":"HTMLTableRowElement"},
pe:{"^":"Z;",
al:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.al(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaM(z)
y.toString
x.toString
new W.aw(y).aw(0,new W.aw(x))
return y},
"%":"HTMLTableSectionElement"},
fg:{"^":"Z;",$isfg:1,"%":"HTMLTemplateElement"},
bq:{"^":"ag;",$isbq:1,"%":"TextTrack"},
br:{"^":"ag;",$isbr:1,"%":"TextTrackCue|VTTCue"},
pg:{"^":"mq;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"TextTrackCueList"},
ph:{"^":"h6;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"TextTrackList"},
pi:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dD;",$isbu:1,"%":"TouchEvent"},
pj:{"^":"mw;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbt")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TouchList"},
pk:{"^":"t;0m:length=","%":"TrackDefaultList"},
pm:{"^":"t;",
iR:[function(a){return a.previousNode()},"$0","gcQ",1,0,26],
"%":"TreeWalker"},
dD:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
po:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pp:{"^":"ag;0m:length=","%":"VideoTrackList"},
bW:{"^":"az;",
gi9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
gi8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbW:1,
"%":"WheelEvent"},
lf:{"^":"ag;",
hb:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fQ:{"^":"G;",$isfQ:1,"%":"Attr"},
pu:{"^":"mZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbc")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asE:function(){return[W.bc]},
"%":"CSSRuleList"},
pv:{"^":"im;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c3(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aD(b)
return a.left===z.gaY(b)&&a.top===z.gbk(b)&&a.width===z.gaC(b)&&a.height===z.gaA(b)},
gW:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaA:function(a){return a.height},
gaC:function(a){return a.width},
"%":"ClientRect|DOMRect"},
px:{"^":"n0;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbg")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asE:function(){return[W.bg]},
"%":"GamepadList"},
pA:{"^":"n2;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pB:{"^":"n4;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbo")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asE:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
pC:{"^":"n6;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.d(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"StyleSheetList"},
ll:{"^":"eP;dj:a<",
L:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga7(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga7:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfQ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asaj:function(){return[P.h,P.h]},
$asM:function(){return[P.h,P.h]}},
lu:{"^":"ll;a",
k:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga7(this).length}},
lv:{"^":"dy;a,b,c,$ti",
iy:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
pw:{"^":"lv;a,b,c,$ti"},
lw:{"^":"fc;a,b,c,d,e,$ti",
hu:function(){var z=this.d
if(z!=null&&this.a<=0)J.hN(this.b,this.c,z,!1)},
t:{
a4:function(a,b,c,d,e){var z=c==null?null:W.ho(new W.lx(c),W.af)
z=new W.lw(0,a,b,z,!1,[e])
z.hu()
return z}}},
lx:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.d(a,"$isaf"))}},
cm:{"^":"b;a",
fa:function(a){var z,y
z=$.$get$dL()
if(z.giu(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nG())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nH())}},
aV:function(a){return $.$get$fV().V(0,W.bH(a))},
aH:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dL()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dS(x.$4(a,b,c,this))},
$isaI:1,
t:{
fU:function(a){var z,y
z=W.e9(null)
y=window.location
z=new W.cm(new W.m7(z,y))
z.fa(a)
return z},
py:[function(a,b,c,d){H.d(a,"$isV")
H.H(b)
H.H(c)
H.d(d,"$iscm")
return!0},"$4","nG",16,0,32],
pz:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isV")
H.H(b)
H.H(c)
z=H.d(d,"$iscm").a
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
return z},"$4","nH",16,0,32]}},
E:{"^":"b;$ti",
gZ:function(a){return new W.eC(a,this.gm(a),-1,[H.b8(this,a,"E",0)])},
aK:function(a,b,c,d){H.A(d,H.b8(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
eX:{"^":"b;a",
aV:function(a){return C.a.dH(this.a,new W.jq(a))},
aH:function(a,b,c){return C.a.dH(this.a,new W.jp(a,b,c))},
$isaI:1},
jq:{"^":"m:15;a",
$1:function(a){return H.d(a,"$isaI").aV(this.a)}},
jp:{"^":"m:15;a,b,c",
$1:function(a){return H.d(a,"$isaI").aH(this.a,this.b,this.c)}},
m8:{"^":"b;",
fd:function(a,b,c,d){var z,y,x
this.a.aw(0,c)
z=b.cZ(0,new W.m9())
y=b.cZ(0,new W.ma())
this.b.aw(0,z)
x=this.c
x.aw(0,C.A)
x.aw(0,y)},
aV:function(a){return this.a.V(0,W.bH(a))},
aH:["f0",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.V(0,H.j(z)+"::"+b))return this.d.hX(c)
else if(y.V(0,"*::"+b))return this.d.hX(c)
else{y=this.b
if(y.V(0,H.j(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.j(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isaI:1},
m9:{"^":"m:29;",
$1:function(a){return!C.a.V(C.t,H.H(a))}},
ma:{"^":"m:29;",
$1:function(a){return C.a.V(C.t,H.H(a))}},
mn:{"^":"m8;e,a,b,c,d",
aH:function(a,b,c){if(this.f0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1},
t:{
h4:function(){var z,y,x,w,v
z=P.h
y=P.eN(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mo(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mn(y,P.cg(null,null,null,z),P.cg(null,null,null,z),P.cg(null,null,null,z),null)
y.fd(null,new H.j9(C.r,w,[x,z]),v,null)
return y}}},
mo:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.H(a))}},
mm:{"^":"b;",
aV:function(a){var z=J.L(a)
if(!!z.$isf6)return!1
z=!!z.$iscI
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aH:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aV(a)},
$isaI:1},
eC:{"^":"b;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e5(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aI:{"^":"b;"},
m7:{"^":"b;a,b",$ispn:1},
hh:{"^":"b;a",
d1:function(a){new W.mW(this).$2(a,null)},
b5:function(a,b){if(b==null)J.e8(a)
else b.removeChild(a)},
hh:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hQ(a)
x=y.gdj().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bH(a)
this.hg(H.d(a,"$isV"),b,z,v,u,H.d(y,"$isM"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aE)throw t
else{this.b5(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hg:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aV(a)){this.b5(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aH(a,"is",g)){this.b5(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga7(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga7(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aH(a,J.hW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfg)this.d1(a.content)},
$isoS:1},
mW:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hh(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hR(z)}catch(w){H.ab(w)
v=H.d(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isG")}}},
lo:{"^":"t+id;"},
lq:{"^":"t+z;"},
lr:{"^":"lq+E;"},
ls:{"^":"t+z;"},
lt:{"^":"ls+E;"},
ly:{"^":"t+z;"},
lz:{"^":"ly+E;"},
lL:{"^":"t+z;"},
lM:{"^":"lL+E;"},
lS:{"^":"t+aj;"},
lT:{"^":"t+aj;"},
lU:{"^":"t+z;"},
lV:{"^":"lU+E;"},
lW:{"^":"t+z;"},
lX:{"^":"lW+E;"},
m_:{"^":"t+z;"},
m0:{"^":"m_+E;"},
m6:{"^":"t+aj;"},
h1:{"^":"ag+z;"},
h2:{"^":"h1+E;"},
mc:{"^":"t+z;"},
md:{"^":"mc+E;"},
mg:{"^":"t+aj;"},
mp:{"^":"t+z;"},
mq:{"^":"mp+E;"},
h5:{"^":"ag+z;"},
h6:{"^":"h5+E;"},
mv:{"^":"t+z;"},
mw:{"^":"mv+E;"},
mY:{"^":"t+z;"},
mZ:{"^":"mY+E;"},
n_:{"^":"t+z;"},
n0:{"^":"n_+E;"},
n1:{"^":"t+z;"},
n2:{"^":"n1+E;"},
n3:{"^":"t+z;"},
n4:{"^":"n3+E;"},
n5:{"^":"t+z;"},
n6:{"^":"n5+E;"}}],["","",,P,{"^":"",
ns:function(a){var z,y
z=J.L(a)
if(!!z.$iscc){y=z.gdO(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h8(a.data,a.height,a.width)},
nr:function(a){if(a instanceof P.h8)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var z,y,x,w,v
if(a==null)return
z=P.dj(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
np:function(a,b){var z={}
a.L(0,new P.nq(z))
return z},
ew:function(){var z=$.ev
if(z==null){z=J.d1(window.navigator.userAgent,"Opera",0)
$.ev=z}return z},
ik:function(){var z,y
z=$.es
if(z!=null)return z
y=$.et
if(y==null){y=J.d1(window.navigator.userAgent,"Firefox",0)
$.et=y}if(y)z="-moz-"
else{y=$.eu
if(y==null){y=!P.ew()&&J.d1(window.navigator.userAgent,"Trident/",0)
$.eu=y}if(y)z="-ms-"
else z=P.ew()?"-o-":"-webkit-"}$.es=z
return z},
mj:{"^":"b;",
ea:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cY:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isaq)return new Date(a.a)
if(!!y.$isjP)throw H.a(P.cj("structured clone of RegExp"))
if(!!y.$isb5)return a
if(!!y.$isd3)return a
if(!!y.$iseB)return a
if(!!y.$iscc)return a
if(!!y.$iseW||!!y.$isds)return a
if(!!y.$isM){x=this.ea(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.L(a,new P.ml(z,this))
return z.a}if(!!y.$ise){x=this.ea(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.i5(a,x)}throw H.a(P.cj("structured clone of other type"))},
i5:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cY(z.k(a,w)))
return x}},
ml:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cY(b)}},
h8:{"^":"b;dO:a>,b,c",$iscc:1},
nq:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
mk:{"^":"mj;a,b"},
iz:{"^":"cD;a,b",
gbs:function(){var z,y,x
z=this.b
y=H.al(z,"z",0)
x=W.V
return new H.j7(new H.dJ(z,H.l(new P.iA(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.iB(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.d(c,"$isV")
z=this.gbs()
J.hT(z.b.$1(J.cr(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbs().a)},
k:function(a,b){var z=this.gbs()
return z.b.$1(J.cr(z.a,b))},
gZ:function(a){var z=P.j2(this.gbs(),!1,W.V)
return new J.ay(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$ase:function(){return[W.V]}},
iA:{"^":"m:24;",
$1:function(a){return!!J.L(H.d(a,"$isG")).$isV}},
iB:{"^":"m:57;",
$1:function(a){return H.k(H.d(a,"$isG"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m1:{"^":"b;$ti",
gbh:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.y(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c3(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=this.a
y=J.aD(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbk(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbh(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.c7(z)
x=this.b
w=J.c7(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.lN(P.cP(P.cP(P.cP(P.cP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"m1;aY:a>,bk:b>,aC:c>,aA:d>,$ti",t:{
jM:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},oD:{"^":"lP;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbM")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$ise:1,
$ase:function(){return[P.bM]},
$asE:function(){return[P.bM]},
"%":"SVGLengthList"},bP:{"^":"t;",$isbP:1,"%":"SVGNumber"},oT:{"^":"lZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbP")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$asE:function(){return[P.bP]},
"%":"SVGNumberList"},oZ:{"^":"t;0m:length=","%":"SVGPointList"},f6:{"^":"cI;0a2:type}",$isf6:1,"%":"SVGScriptElement"},p9:{"^":"mi;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"SVGStringList"},pc:{"^":"cI;0a2:type}","%":"SVGStyleElement"},cI:{"^":"V;",
gct:function(a){return new P.iz(a,new W.aw(a))},
al:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aI])
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
C.a.h(z,new W.mm())
c=new W.hh(new W.eX(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).i6(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aw(w)
u=z.gaM(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscI:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bT:{"^":"t;",$isbT:1,"%":"SVGTransform"},pl:{"^":"my;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.d(c,"$isbT")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bT]},
$isi:1,
$asi:function(){return[P.bT]},
$ise:1,
$ase:function(){return[P.bT]},
$asE:function(){return[P.bT]},
"%":"SVGTransformList"},lO:{"^":"t+z;"},lP:{"^":"lO+E;"},lY:{"^":"t+z;"},lZ:{"^":"lY+E;"},mh:{"^":"t+z;"},mi:{"^":"mh+E;"},mx:{"^":"t+z;"},my:{"^":"mx+E;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$iskv:1}}],["","",,P,{"^":"",oe:{"^":"t;0m:length=","%":"AudioBuffer"},ec:{"^":"ag;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},of:{"^":"lm;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.L(a,new P.hY(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"AudioParamMap"},hY:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hZ:{"^":"ec;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},og:{"^":"ag;0m:length=","%":"AudioTrackList"},i1:{"^":"ag;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oh:{"^":"ec;0a2:type}","%":"BiquadFilterNode"},oW:{"^":"i1;0m:length=","%":"OfflineAudioContext"},oX:{"^":"hZ;0a2:type}","%":"Oscillator|OscillatorNode"},lm:{"^":"t+aj;"}}],["","",,P,{"^":"",dv:{"^":"t;",
j7:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nr(g))
return}if(!!z.$iseE)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c8("Incorrect number or type of arguments"))},
j6:function(a,b,c,d,e,f,g){return this.j7(a,b,c,d,e,f,g,null,null,null)},
$isdv:1,
"%":"WebGLRenderingContext"},ki:{"^":"t;",$iski:1,"%":"WebGLTexture"},kE:{"^":"t;",$iskE:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p7:{"^":"mf;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b1(a.item(b))},
p:function(a,b,c){H.F(b)
H.d(c,"$isM")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[[P.M,,,]]},
$isi:1,
$asi:function(){return[[P.M,,,]]},
$ise:1,
$ase:function(){return[[P.M,,,]]},
$asE:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},me:{"^":"t+z;"},mf:{"^":"me+E;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bY:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
d2:function(a,b,c){var z=H.al(this,"aN",0)
H.l(b,{func:1,ret:P.U,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bo:function(a,b){return this.d2(a,null,b)},
h0:function(a){var z
H.v(a,"$isi",[H.al(this,"aN",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fH:function(a,b){var z
H.v(b,"$isi",[H.al(this,"aN",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"aN",0)
H.A(b,z)
z=[z]
if(this.h0(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fH(x,H.c([b],z))}},
$isi:1,
t:{
d8:function(a){var z=new O.aN([a])
z.bY(a)
return z}}},dn:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
f7:function(a){var z=this.b
if(!(z==null))z.F(a)},
aN:function(){return this.f7(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gaB(z)
else return V.bN()},
ew:function(a){var z=this.a
if(a==null)C.a.h(z,V.bN())
else C.a.h(z,a)
this.aN()},
cP:function(){var z=this.a
if(z.length>0){z.pop()
this.aN()}}}}],["","",,E,{"^":"",d2:{"^":"b;"},aQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d9:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
if(y.f==null)y.d9()}},
saa:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().J(0,this.gep())
y=this.c
if(y!=null)y.gw().h(0,this.gep())
x=new D.I("shape",z,this.c,this,[F.f8])
x.b=!0
this.a9(x)}},
sbi:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gw().J(0,this.geq())
y=this.f
this.f=a
if(a!=null)a.gw().h(0,this.geq())
this.d9()
x=new D.I("technique",y,this.f,this,[O.cJ])
x.b=!0
this.a9(x)}},
sb_:function(a){var z,y
if(!J.S(this.r,a)){z=this.r
if(z!=null)z.gw().J(0,this.geo())
if(a!=null)a.gw().h(0,this.geo())
this.r=a
y=new D.I("mover",z,a,this,[U.ad])
y.b=!0
this.a9(y)}},
aq:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ar(0,b,this):null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.as])
w.b=!0
this.a9(w)}z=this.f
if(z!=null)z.aq(0,b)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aq(0,b)},
b0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1(z))
else C.a.h(z.a,y.j(0,z.ga1(z)))
z.aN()
a.ex(this.f)
z=a.dy
x=(z&&C.a).gaB(z)
if(x!=null&&this.d!=null)x.iY(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b0(a)
a.ev()
a.dx.cP()},
gw:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
a9:function(a){var z=this.z
if(!(z==null))z.F(a)},
a_:function(){return this.a9(null)},
iH:[function(a){H.d(a,"$isB")
this.e=null
this.a9(a)},function(){return this.iH(null)},"jY","$1","$0","gep",0,2,0],
iI:[function(a){this.a9(H.d(a,"$isB"))},function(){return this.iI(null)},"jZ","$1","$0","geq",0,2,0],
iG:[function(a){this.a9(H.d(a,"$isB"))},function(){return this.iG(null)},"jX","$1","$0","geo",0,2,0],
iE:[function(a){this.a9(H.d(a,"$isB"))},function(){return this.iE(null)},"jV","$1","$0","gen",0,2,0],
jU:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gen(),x={func:1,ret:-1,args:[D.B]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bf()
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a_()},"$2","giD",8,0,11],
jW:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gen(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga5()==null){v=new D.bf()
v.d=0
w.sa5(v)}w.ga5().J(0,y)}}this.a_()},"$2","giF",8,0,11],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaS:1,
t:{
db:function(a,b,c,d,e,f){var z,y
z=new E.aQ()
z.a=d
z.b=!0
y=O.d8(E.aQ)
z.y=y
y.bo(z.giD(),z.giF())
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
z.saa(0,e)
z.sbi(f)
z.sb_(c)
return z}}},jR:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f3:function(a,b){var z,y
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
z=new O.dn()
y=[V.as]
z.a=H.c([],y)
z.gw().h(0,new E.jT(this))
this.cy=z
z=new O.dn()
z.a=H.c([],y)
z.gw().h(0,new E.jU(this))
this.db=z
z=new O.dn()
z.a=H.c([],y)
z.gw().h(0,new E.jV(this))
this.dx=z
z=H.c([],[O.cJ])
this.dy=z
C.a.h(z,null)
this.fr=new H.b6(0,0,[P.h,A.f7])},
giS:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.j(0,y.ga1(y))
this.z=y
z=y}return z},
ex:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaB(z):a;(z&&C.a).h(z,y)},
ev:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jS:function(a,b){var z=new E.jR(a,b)
z.f3(a,b)
return z}}},jT:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.z=null
z.ch=null}},jU:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jV:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isB")
z=this.a
z.ch=null
z.cx=null}},kn:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
f9:[function(a){var z
H.d(a,"$isB")
z=this.x
if(!(z==null))z.F(a)
this.j0()},function(){return this.f9(null)},"f8","$1","$0","gd5",0,2,0],
gio:function(){var z,y,x
z=Date.now()
y=C.f.a6(P.ex(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aq(z,!1)
return x/y},
dt:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.q(z)
x=C.d.cF(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.cF(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fi(C.q,this.gj_())}},
j0:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kp(this),{func:1,ret:-1,args:[P.a5]})
C.H.fv(z)
C.H.hb(z,W.ho(y,P.a5))}},"$0","gj_",0,0,3],
iX:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dt()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.ex(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aN()
w=x.db
C.a.sm(w.a,0)
w.aN()
w=x.dx
C.a.sm(w.a,0)
w.aN()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b0(this.e)}x=this.z
if(!(x==null))x.F(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.e1("Error: "+H.j(z))
P.e1("Stack: "+H.j(y))
throw H.a(z)}},
t:{
ko:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd6)return E.fh(a,!0,!0,!0,!1)
y=W.d7(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.fh(y,!0,!0,!0,!1)
w.a=a
return w},
fh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kn()
y=P.iZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bT(a,"webgl",y)
x=H.d(x==null?C.l.bT(a,"experimental-webgl",y):x,"$isdv")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jS(x,a)
w=new T.kj(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kR(a)
v=new X.iR()
v.c=new X.aH(!1,!1,!1)
v.d=P.cg(null,null,null,P.n)
w.b=v
v=new X.jl(w)
v.f=0
v.r=new V.a_(0,0)
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j4(w)
v.r=0
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ks(w)
v.e=0
v.f=new V.a_(0,0)
v.r=new V.a_(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fc,P.b]])
w.z=v
u=document
t=W.az
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.l(w.gfO(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.l(w.gfR(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.l(w.gfL(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.l(w.gfT(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.l(w.gfS(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.l(w.gfW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.l(w.gfY(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.l(w.gfX(),s),!1,t))
p=w.z
o=W.bW;(p&&C.a).h(p,W.a4(a,H.H(W.is(a)),H.l(w.gfZ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.l(w.gfP(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.l(w.gfQ(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.l(w.gh_(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.l(w.gh6(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.l(w.gh4(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.l(w.gh5(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aq(Date.now(),!1)
z.cy=0
z.dt()
return z}}},kp:{"^":"m:35;a",
$1:function(a){var z
H.o0(a)
z=this.a
if(z.ch){z.ch=!1
z.iX()}}}}],["","",,Z,{"^":"",fO:{"^":"b;a,b",t:{
dI:function(a,b,c){var z
H.v(c,"$ise",[P.n],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fO(b,z)}}},eh:{"^":"d2;a,b,c,d,e",
b8:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.u('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},ld:{"^":"b;a",$isoi:1},ei:{"^":"b;a,0b,c,d",
aX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b8:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b8(a)},
jd:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b0:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$ispf:1},cz:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gd3:function(a){var z,y
z=this.a
y=(z&$.$get$aY().a)!==0?3:0
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
hY:function(a){var z,y,x
z=$.$get$aY()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fN()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aY().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
av:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",em:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.B]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.B]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).J(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).J(z,b)||y}return y},
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.B(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.L(y,new D.iw(z))
y=this.b
if(!(y==null))C.a.L(y,new D.ix(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
ib:function(){return this.F(null)},
j1:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
ag:function(a){return this.j1(a,!0,!1)},
t:{
P:function(){var z=new D.bf()
z.d=0
return z}}},iw:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},ix:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},B:{"^":"b;a,0b"},cA:{"^":"B;c,d,a,0b,$ti"},cB:{"^":"B;c,d,a,0b,$ti"},I:{"^":"B;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ej:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"ok<"}},eK:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eK))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eL:{"^":"B;c,a,0b"},iR:{"^":"b;0a,0b,0c,0d",
iO:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eL(a,this)
y.b=!0
return z.F(y)},
iK:function(a){var z,y
this.c=a.b
this.d.J(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eL(a,this)
y.b=!0
return z.F(y)}},eO:{"^":"cG;x,y,c,d,e,a,0b"},j4:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.a_(y.a+x*w,y.b+v*u)
u=this.a.gaW()
s=new X.bO(a,new V.a_(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cO:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.aF(a,b))
return!0},
bf:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.aF(a,b))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aF(a,b))
return!0},
iP:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaW()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.dq(new V.a0(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.F(w)
return!0},
fV:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.eO(c,a,this.a.gaW(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.a_(0,0)}},aH:{"^":"b;a,b,c",
v:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bO:{"^":"cG;x,y,z,Q,ch,c,d,e,a,0b"},jl:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c5:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaW()
x=new X.bO(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cO:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.c5(a,b,!0))
return!0},
bf:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.c5(a,b,!0))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.c5(a,b,!1))
return!0},
iQ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaW()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.dq(new V.a0(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.F(x)
return!0},
gdP:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
gbR:function(){var z=this.c
if(z==null){z=D.P()
this.c=z}return z},
gel:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z}},dq:{"^":"cG;x,c,d,e,a,0b"},cG:{"^":"B;"},fm:{"^":"cG;x,y,z,Q,ch,c,d,e,a,0b"},ks:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.a_],"$ase")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.a_(0,0)
x=this.a.gaW()
w=new X.fm(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iN:function(a){var z
H.v(a,"$ise",[V.a_],"$ase")
z=this.b
if(z==null)return!1
z.F(this.aF(a,!0))
return!0},
iL:function(a){var z
H.v(a,"$ise",[V.a_],"$ase")
z=this.c
if(z==null)return!1
z.F(this.aF(a,!0))
return!0},
iM:function(a){var z
H.v(a,"$ise",[V.a_],"$ase")
z=this.d
if(z==null)return!1
z.F(this.aF(a,!1))
return!0}},kR:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaW:function(){var z=this.a
return V.f4(0,0,(z&&C.l).gdN(z).c,C.l.gdN(z).d)},
dh:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eK(z,new X.aH(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
ck:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.a_(y-w,x-v)},
b4:function(a){return new V.a0(a.movementX,a.movementY)},
cd:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a_])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.d.ah(u.pageX)
C.d.ah(u.pageY)
s=z.left
C.d.ah(u.pageX)
C.a.h(y,new V.a_(t-s,C.d.ah(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.aH(y,a.altKey,a.shiftKey))},
c7:function(a){var z,y,x,w,v,u
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
jw:[function(a){this.f=!0},"$1","gfR",4,0,9],
jq:[function(a){this.f=!1},"$1","gfL",4,0,9],
jt:[function(a){H.d(a,"$isaz")
if(this.f&&this.c7(a))a.preventDefault()},"$1","gfO",4,0,4],
jy:[function(a){var z
H.d(a,"$isbL")
if(!this.f)return
z=this.dh(a)
if(this.b.iO(z))a.preventDefault()},"$1","gfT",4,0,22],
jx:[function(a){var z
H.d(a,"$isbL")
if(!this.f)return
z=this.dh(a)
if(this.b.iK(z))a.preventDefault()},"$1","gfS",4,0,22],
jA:[function(a){var z,y,x,w
H.d(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.aT(a)
if(this.x){y=this.aD(a)
x=this.b4(a)
if(this.d.cO(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aG(a)
if(this.c.cO(y,w))a.preventDefault()},"$1","gfW",4,0,4],
jC:[function(a){var z,y,x
H.d(a,"$isaz")
this.aT(a)
z=this.aD(a)
if(this.x){y=this.b4(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gfY",4,0,4],
jv:[function(a){var z,y,x
H.d(a,"$isaz")
if(!this.c7(a)){this.aT(a)
z=this.aD(a)
if(this.x){y=this.b4(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gfQ",4,0,4],
jB:[function(a){var z,y,x
H.d(a,"$isaz")
this.aT(a)
z=this.aD(a)
if(this.x){y=this.b4(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfX",4,0,4],
ju:[function(a){var z,y,x
H.d(a,"$isaz")
if(!this.c7(a)){this.aT(a)
z=this.aD(a)
if(this.x){y=this.b4(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfP",4,0,4],
jD:[function(a){var z,y
H.d(a,"$isbW")
this.aT(a)
z=new V.a0((a&&C.G).gi8(a),C.G.gi9(a)).A(0,180)
if(this.x){if(this.d.iP(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.iQ(z,y))a.preventDefault()},"$1","gfZ",4,0,39],
jE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aD(this.y)
v=this.aG(this.y)
this.d.fV(w,v,x)}},"$1","gh_",4,0,9],
jK:[function(a){var z
H.d(a,"$isbu")
this.a.focus()
this.f=!0
this.ck(a)
z=this.cd(a)
if(this.e.iN(z))a.preventDefault()},"$1","gh6",4,0,14],
jI:[function(a){var z
H.d(a,"$isbu")
this.ck(a)
z=this.cd(a)
if(this.e.iL(z))a.preventDefault()},"$1","gh4",4,0,14],
jJ:[function(a){var z
H.d(a,"$isbu")
this.ck(a)
z=this.cd(a)
if(this.e.iM(z))a.preventDefault()},"$1","gh5",4,0,14]}}],["","",,D,{"^":"",il:{"^":"b;",$isa6:1,$isaS:1},a6:{"^":"b;",$isaS:1},iS:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
ac:function(a){var z=this.Q
if(!(z==null))z.F(a)},
fU:[function(a){var z
H.d(a,"$isB")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.fU(null)},"jz","$1","$0","gdq",0,2,0],
jF:[function(a){var z,y,x
H.v(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.fb(x))return!1}return!0},"$1","gh1",4,0,41],
jn:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdq(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.d(b[u],"$isa6")
if(t instanceof D.cK)C.a.h(this.y,t)
s=t.x
if(s==null){s=new D.bf()
s.d=0
t.x=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cA(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","gfI",8,0,18],
jH:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdq(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.d(b[w],"$isa6")
if(v instanceof D.cK)C.a.J(this.y,v)
u=v.x
if(u==null){u=new D.bf()
u.d=0
v.x=u}u.J(0,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","gh3",8,0,18],
fb:function(a){var z=C.a.V(this.y,a)
return z},
$asi:function(){return[D.a6]},
$asaN:function(){return[D.a6]}},jx:{"^":"b;",$isa6:1,$isaS:1},ka:{"^":"b;",$isa6:1,$isaS:1},kl:{"^":"b;",$isa6:1,$isaS:1},cK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
ac:[function(a){var z
H.d(a,"$isB")
z=this.x
if(!(z==null))z.F(a)},function(){return this.ac(null)},"jf","$1","$0","gbZ",0,2,0],
$isa6:1,
$isaS:1},km:{"^":"b;",$isa6:1,$isaS:1}}],["","",,V,{"^":"",
om:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","ji",8,0,37],
d_:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bn(a-b,z)
return(a<0?a+z:a)+b},
O:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.d.eD($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.p],"$ase")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.O(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.af(z[u],x))}return z},
e0:function(a,b){return C.d.j9(Math.pow(b,C.Q.cF(Math.log(H.no(a))/Math.log(b))))},
a8:{"^":"b;a,b,c",
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
return new V.a8(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
bb:{"^":"b;a,b,c,d",
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
return new V.bb(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
cF:{"^":"b;a,b,c,d,e,f,r,x,y",
ai:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscF")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.d.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.d.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.d.j(t,s)
q=a5.b
p=C.d.j(z,q)
o=a5.e
n=C.d.j(w,o)
m=a5.x
l=C.d.j(t,m)
k=a5.c
z=C.d.j(z,k)
j=a5.f
w=C.d.j(w,j)
i=a5.y
t=C.d.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.d.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.d.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.d.j(d,s)
b=C.d.j(h,q)
a=C.d.j(f,o)
a0=C.d.j(d,m)
h=C.d.j(h,k)
f=C.d.j(f,j)
d=C.d.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.d.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.d.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cF(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cF))return!1
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
y=V.bC(H.c([this.a,this.d,this.r],z),3,0)
x=V.bC(H.c([this.b,this.e,this.x],z),3,0)
w=V.bC(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
as:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ai:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
ej:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.bN()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isas")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
eF:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gam(a)
if(typeof z!=="number")return z.j()
y=C.d.j(z,y)
z=this.b
x=a.gan(a)
if(typeof z!=="number")return z.j()
x=C.d.j(z,x)
z=this.c
w=a.gao()
if(typeof z!=="number")return z.j()
w=C.d.j(z,w)
z=this.e
v=a.gam(a)
if(typeof z!=="number")return z.j()
v=C.d.j(z,v)
z=this.f
u=a.gan(a)
if(typeof z!=="number")return z.j()
u=C.d.j(z,u)
z=this.r
t=a.gao()
if(typeof z!=="number")return z.j()
t=C.d.j(z,t)
z=this.y
s=a.gam(a)
if(typeof z!=="number")return z.j()
s=C.d.j(z,s)
z=this.z
r=a.gan(a)
if(typeof z!=="number")return z.j()
r=C.d.j(z,r)
z=this.Q
q=a.gao()
if(typeof z!=="number")return z.j()
return new V.K(y+x+w,v+u+t,s+r+C.d.j(z,q))},
bl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.a7(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
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
eb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bC(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bC(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bC(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bC(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
P:function(){return this.eb("",3,0)},
C:function(a){return this.eb(a,3,0)},
t:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bN:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eV:function(a,b,c){return V.aG(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dp:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eS:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eT:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eU:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
a_:{"^":"b;a,b",
M:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.a_(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
a7:{"^":"b;a,b,c",
E:function(a,b){return new V.a7(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a7(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
bQ:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bQ(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
f3:{"^":"b;a,b,c,d",
ga8:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f3))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"},
t:{
f4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f3(a,b,c,d)}}},
a0:{"^":"b;a,b",
iw:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a0(z*b,y*b)},
A:function(a,b){var z,y
if($.o.$2(b,0))return new V.a0(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a0(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
K:{"^":"b;a,b,c",
iw:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cJ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aI:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
ek:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i8:{"^":"em;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c_:function(a){var z=V.d_(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.F(a)},
sd_:function(a,b){},
scL:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c_(z)}z=new D.I("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.K(z)}},
scN:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c_(z)}z=new D.I("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.K(z)}},
sa0:function(a,b){var z,y
b=this.c_(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.p])
z.b=!0
this.K(z)}},
scM:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.p])
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
z=new D.I("velocity",x,a,this,[P.p])
z.b=!0
this.K(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.p])
z.b=!0
this.K(z)}},
aq:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
d9:function(){var z=new U.i8()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eo:{"^":"ad;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
ar:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
cw:function(a){var z=new U.eo()
z.a=a
return z}}},eD:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
K:[function(a){var z
H.d(a,"$isB")
z=this.e
if(!(z==null))z.F(a)},function(){return this.K(null)},"aj","$1","$0","gaS",0,2,0],
jg:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ad
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gw()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cA(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gfc",8,0,16],
jG:[function(a,b){var z,y,x,w,v
z=U.ad
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gw().J(0,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gh2",8,0,16],
ar:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ay(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.ar(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bN():x
z=this.e
if(!(z==null))z.ag(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eD))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ad]},
$asaN:function(){return[U.ad]},
$isad:1,
t:{
dc:function(a){var z=new U.eD()
z.bY(U.ad)
z.bo(z.gfc(),z.gh2())
z.e=null
z.f=V.bN()
z.r=0
return z}}},ad:{"^":"em;"},f5:{"^":"ad;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.F(a)},
seK:function(a){var z,y
a=V.d_(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.I("yaw",y,a,this,[P.p])
z.b=!0
this.K(z)}},
seu:function(a,b){var z,y
b=V.d_(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.I("pitch",y,b,this,[P.p])
z.b=!0
this.K(z)}},
sez:function(a){var z,y
a=V.d_(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.I("roll",y,a,this,[P.p])
z.b=!0
this.K(z)}},
ar:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seK(this.a+this.d*b.y)
this.seu(0,this.b+this.e*b.y)
this.sez(this.c+this.f*b.y)
this.x=V.eU(this.c).j(0,V.eT(this.b)).j(0,V.eS(this.a))
z=this.y
if(!(z==null))z.ag(0)}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.f5))return!1
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
i:function(a){return"Rotater: ["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"], ["+V.O(this.d,3,0)+", "+V.O(this.e,3,0)+", "+V.O(this.f,3,0)+"]"}},kS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.P()
this.cy=z}return z},
K:[function(a){var z
H.d(a,"$isB")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.K(null)},"aj","$1","$0","gaS",0,2,0],
b7:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdP().h(0,this.gc8())
this.a.c.gel().h(0,this.gc9())
this.a.c.gbR().h(0,this.gca())
return!0},
fD:[function(a){H.d(a,"$isB")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc8",4,0,2],
fE:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isB"),"$isbO")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.a0(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.a0(y.a,y.b).j(0,2).A(0,z.ga8())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.a0(x.a,x.b).j(0,2).A(0,z.ga8())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
this.b.sU(0)
y=y.M(0,a.z)
this.Q=new V.a0(y.a,y.b).j(0,2).A(0,z.ga8())}this.aj()},"$1","gc9",4,0,2],
fF:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sU(y*10*x)
this.aj()}},"$1","gca",4,0,2],
ar:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=b.y
this.b.aq(0,x)
this.cx=V.eU(this.b.d)}return this.cx},
$isad:1},kT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
K:[function(a){var z
H.d(a,"$isB")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.K(null)},"aj","$1","$0","gaS",0,2,0],
b7:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdP().h(0,this.gc8())
this.a.c.gel().h(0,this.gc9())
this.a.c.gbR().h(0,this.gca())
z=this.a.d
y=z.f
if(y==null){y=D.P()
z.f=y
z=y}else z=y
z.h(0,this.gfA())
z=this.a.d
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.gfB())
z=this.a.e
y=z.b
if(y==null){y=D.P()
z.b=y
z=y}else z=y
z.h(0,this.ght())
z=this.a.e
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.ghs())
z=this.a.e
y=z.c
if(y==null){y=D.P()
z.c=y
z=y}else z=y
z.h(0,this.ghr())
return!0},
av:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.a0(z,y)},
fD:[function(a){a=H.k(H.d(a,"$isB"),"$isbO")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc8",4,0,2],
fE:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isB"),"$isbO")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a0(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.av(new V.a0(y.a,y.b).j(0,2).A(0,z.ga8()))
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
w=this.av(new V.a0(x.a,x.b).j(0,2).A(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a0(y.a,y.b).j(0,2).A(0,z.ga8()))}this.aj()},"$1","gc9",4,0,2],
fF:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
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
this.aj()}},"$1","gca",4,0,2],
jk:[function(a){if(H.k(H.d(a,"$isB"),"$iseO").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfA",4,0,2],
jl:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isB"),"$isbO")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.av(new V.a0(x.a,x.b).j(0,2).A(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a0(y.a,y.b).j(0,2).A(0,z.ga8()))
this.aj()},"$1","gfB",4,0,2],
jO:[function(a){H.d(a,"$isB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ght",4,0,2],
jN:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isB"),"$isfm")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.a0(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.av(new V.a0(y.a,y.b).j(0,2).A(0,z.ga8()))
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
w=this.av(new V.a0(x.a,x.b).j(0,2).A(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.av(new V.a0(y.a,y.b).j(0,2).A(0,z.ga8()))}this.aj()},"$1","ghs",4,0,2],
jM:[function(a){var z,y,x
H.d(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
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
this.aj()}},"$1","ghr",4,0,2],
ar:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.aq(0,x)
this.b.aq(0,x)
this.fr=V.eS(this.b.d).j(0,V.eT(this.c.d))}return this.fr},
$isad:1},kU:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.P()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.F(a)},
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.P()
z.e=y
z=y}else z=y
y=this.gfG()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.P()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jm:[function(a){var z,y,x,w
H.d(a,"$isB")
if(!J.S(this.b,this.a.b.c))return
H.k(a,"$isdq")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.p])
z.b=!0
this.K(z)}},"$1","gfG",4,0,2],
ar:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.dp(x,x,x,1)}return this.f},
$isad:1}}],["","",,M,{"^":"",iu:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aO:[function(a){var z
H.d(a,"$isB")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aO(null)},"jh","$1","$0","gau",0,2,0],
jr:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aQ
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bf()
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cA(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","gfM",8,0,11],
js:[function(a,b){var z,y,x,w,v,u
z=E.aQ
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gau(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga5()==null){u=new D.bf()
u.d=0
v.sa5(u)}v.ga5().J(0,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","gfN",8,0,11],
sbi:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gw().J(0,this.gau())
y=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gau())
z=new D.I("technique",y,this.c,this,[O.cJ])
z.b=!0
this.aO(z)}},
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.ex(this.c)
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
if(typeof x!=="number")return H.q(x)
u=C.d.ah(v.a*x)
if(typeof w!=="number")return H.q(w)
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
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aG(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.ew(n)
y=$.f0
if(y==null){y=new V.K(0,0,-1)
m=y.A(0,Math.sqrt(y.G(y)))
y=new V.K(0,1,0).aI(m)
l=y.A(0,Math.sqrt(y.G(y)))
k=m.aI(l)
j=new V.K(0,0,0)
y=V.aG(l.a,k.a,m.a,l.T(0).G(j),l.b,k.b,m.b,k.T(0).G(j),l.c,k.c,m.c,m.T(0).G(j),0,0,0,1)
$.f0=y
i=y}else i=y
y=z.b
if(y!=null){h=y.ar(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.ew(i)
z=this.c
if(z!=null)z.aq(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aq(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b0(a)
this.a.toString
a.cy.cP()
a.db.cP()
this.b.toString
a.ev()},
$isp1:1}}],["","",,A,{"^":"",eb:{"^":"b;a,b,c"},hX:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ic:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ia:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ja:{"^":"f7;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0az,0ap,0bz,0dQ,0bA,0bB,0dR,0dS,0bC,0bD,0dT,0dU,0bE,0bF,0dV,0dW,0bG,0dX,0dY,0bH,0dZ,0e_,0bI,0bJ,0bK,0e0,0e1,0bL,0bM,0e2,0e3,0bN,0e4,0cz,0e5,0cA,0e6,0cB,0e7,0cC,0e8,0cD,0e9,0cE,a,b,0c,0d,0e,0f,0r,0x,0y",
f2:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.am("")
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
a2.hw(z)
a2.hD(z)
a2.hx(z)
a2.hL(z)
a2.hM(z)
a2.hF(z)
a2.hQ(z)
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
z=new P.am("")
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
x.hA(z)
x.hv(z)
x.hy(z)
x.hB(z)
x.hJ(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hH(z)
x.hI(z)}x.hE(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hz(z)
x.hG(z)
x.hK(z)
x.hN(z)
x.hO(z)
x.hP(z)
x.hC(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
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
n="vec4("+C.a.n(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.di(s,35633)
this.f=this.di(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dS(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.u("Failed to link shader: "+H.j(m)))}this.hm()
this.ho()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaU")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaU")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaU")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaU")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdF")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaU")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaU")
this.r1=H.c([],[A.aU])
y=a2.az
if(y>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaU"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isat")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.e:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isau")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isat")
this.az=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.e:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isau")
this.az=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.ap=H.k(this.y.q(0,"diffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.bz=H.k(this.y.q(0,"diffuseTxt"),"$isat")
this.bA=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.e:this.dQ=H.k(this.y.q(0,"diffuseTxt"),"$isau")
this.bA=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.bB=H.k(this.y.q(0,"invDiffuseClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.dR=H.k(this.y.q(0,"invDiffuseTxt"),"$isat")
this.bC=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.e:this.dS=H.k(this.y.q(0,"invDiffuseTxt"),"$isau")
this.bC=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bF=H.k(this.y.q(0,"shininess"),"$isa2")
this.bD=H.k(this.y.q(0,"specularClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.dT=H.k(this.y.q(0,"specularTxt"),"$isat")
this.bE=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.e:this.dU=H.k(this.y.q(0,"specularTxt"),"$isau")
this.bE=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.h:this.dV=H.k(this.y.q(0,"bumpTxt"),"$isat")
this.bG=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.e:this.dW=H.k(this.y.q(0,"bumpTxt"),"$isau")
this.bG=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.dX=H.k(this.y.q(0,"envSampler"),"$isau")
this.dY=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bH=H.k(this.y.q(0,"reflectClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.dZ=H.k(this.y.q(0,"reflectTxt"),"$isat")
this.bI=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.e:this.e_=H.k(this.y.q(0,"reflectTxt"),"$isau")
this.bI=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bJ=H.k(this.y.q(0,"refraction"),"$isa2")
this.bK=H.k(this.y.q(0,"refractClr"),"$isQ")
switch(y){case C.c:break
case C.i:break
case C.h:this.e0=H.k(this.y.q(0,"refractTxt"),"$isat")
this.bL=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.e:this.e1=H.k(this.y.q(0,"refractTxt"),"$isau")
this.bL=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bM=H.k(this.y.q(0,"alpha"),"$isa2")
switch(y){case C.c:break
case C.i:break
case C.h:this.e2=H.k(this.y.q(0,"alphaTxt"),"$isat")
this.bN=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.e:this.e3=H.k(this.y.q(0,"alphaTxt"),"$isau")
this.bN=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cz=H.c([],[A.fz])
this.cA=H.c([],[A.fA])
this.cB=H.c([],[A.fB])
this.cC=H.c([],[A.fC])
this.cD=H.c([],[A.fD])
this.cE=H.c([],[A.fE])
if(a2.k2){y=a2.z
if(y>0){this.e4=H.d(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.cz;(x&&C.a).h(x,new A.fz(l,k,j))}}y=a2.Q
if(y>0){this.e5=H.d(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa2")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.cA;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e6=H.d(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.cB;(x&&C.a).h(x,new A.fB(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e7=H.d(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isQ")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isat")
x=this.cC;(x&&C.a).h(x,new A.fC(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e8=H.d(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdF")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isau")
x=this.cD;(x&&C.a).h(x,new A.fD(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e9=H.d(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isQ")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isQ")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isQ")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isQ")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa2")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isat")
x=this.cE;(x&&C.a).h(x,new A.fE(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.eU(c)
b.a.uniform1i(b.d,0)}},
t:{
jb:function(a,b){var z,y
z=a.ap
y=new A.ja(b,z)
y.f5(b,z)
y.f2(a,b)
return y}}},jf:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,az,ap,bz",
hw:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.az+"];\n"
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
hD:function(a){var z
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
hx:function(a){var z
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
hL:function(a){var z,y
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
hM:function(a){var z,y
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
hF:function(a){var z
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
hQ:function(a){var z
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
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.at(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hA:function(a){var z,y
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
hv:function(a){var z,y
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
hy:function(a){var z,y
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
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hB:function(a){var z,y
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
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hJ:function(a){var z,y
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
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hE:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.h:z+="uniform sampler2D bumpTxt;\n"
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.i:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hH:function(a){var z,y
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
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hI:function(a){var z,y
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
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hz:function(a){var z,y
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
hG:function(a){var z,y
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
hK:function(a){var z,y
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
hN:function(a){var z,y,x
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
hO:function(a){var z,y,x
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
hP:function(a){var z,y,x
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
hC:function(a){var z
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
i:function(a){return this.ap}},fz:{"^":"b;a,b,c"},fC:{"^":"b;a,b,c,d,e,f,r,x"},fA:{"^":"b;a,b,c,d,e,f,r"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fB:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fE:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f7:{"^":"d2;",
f5:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
di:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hm:function(){var z,y,x,w,v,u
z=H.c([],[A.eb])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.eb(y,v.name,u))}this.x=new A.hX(z)},
ho:function(){var z,y,x,w,v,u
z=H.c([],[A.ah])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i7(v.type,v.size,v.name,u))}this.y=new A.kD(z)},
aQ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dE(z,y,b,a,c)},
fs:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.dE(z,y,b,a,c)},
ft:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.au(z,y,b,c)
else return A.dE(z,y,b,a,c)},
bu:function(a,b){return new P.fS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i7:function(a,b,c,d){switch(a){case 5120:return this.aQ(b,c,d)
case 5121:return this.aQ(b,c,d)
case 5122:return this.aQ(b,c,d)
case 5123:return this.aQ(b,c,d)
case 5124:return this.aQ(b,c,d)
case 5125:return this.aQ(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.ky(this.a,this.r,c,d)
case 35665:return new A.Q(this.a,this.r,c,d)
case 35666:return new A.kB(this.a,this.r,c,d)
case 35667:return new A.kz(this.a,this.r,c,d)
case 35668:return new A.kA(this.a,this.r,c,d)
case 35669:return new A.kC(this.a,this.r,c,d)
case 35674:return new A.kF(this.a,this.r,c,d)
case 35675:return new A.dF(this.a,this.r,c,d)
case 35676:return new A.aU(this.a,this.r,c,d)
case 35678:return this.fs(b,c,d)
case 35680:return this.ft(b,c,d)
case 35670:throw H.a(this.bu("BOOL",c))
case 35671:throw H.a(this.bu("BOOL_VEC2",c))
case 35672:throw H.a(this.bu("BOOL_VEC3",c))
case 35673:throw H.a(this.bu("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cv:{"^":"b;a,b",
i:function(a){return this.b}},ah:{"^":"b;"},kD:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
im:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.im("\n")}},R:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kz:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kA:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kC:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kx:{"^":"ah;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dE:function(a,b,c,d,e){var z=new A.kx(a,b,c,e)
z.f=d
z.e=P.j1(d,0,!1,P.n)
return z}}},a2:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ky:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},Q:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kB:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kF:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dF:{"^":"ah;a,b,c,d",
as:function(a){var z=new Float32Array(H.by(H.v(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aU:{"^":"ah;a,b,c,d",
as:function(a){var z=new Float32Array(H.by(H.v(a,"$ise",[P.p],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},at:{"^":"ah;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},au:{"^":"ah;a,b,c,d",
eU:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dV:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
z=F.dw()
F.c_(z,b,c,d,a,1,0,0,1)
F.c_(z,b,c,d,a,0,1,0,3)
F.c_(z,b,c,d,a,0,0,1,2)
F.c_(z,b,c,d,a,-1,0,0,0)
F.c_(z,b,c,d,a,0,-1,0,0)
F.c_(z,b,c,d,a,0,0,-1,3)
z.ax()
return z},
cS:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c_:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
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
z.d=y}l=F.cS(y)
k=F.cS(z.b)
j=F.e3(d,e,new F.n7(z,F.cS(z.c),F.cS(z.d),k,l,c),b)
if(j!=null)a.bd(j)},
hu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.dw()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.an])
v=z.a
u=new V.K(0,0,y)
u=u.A(0,Math.sqrt(u.G(u)))
C.a.h(w,v.hU(new V.bQ(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a7(0,0,d),new V.K(0,0,y),new V.a_(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.K(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cl(new V.bQ(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a7(r*p,q*p,d),new V.K(0,0,y),new V.a_(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hS(w)
return z},
hs:function(a,b,c,d,e,f){return F.nu(!0,c,d,new F.nt(a,f),e)},
nu:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.e3(c,e,new F.nw(d),null)
if(z==null)return
z.ax()
z.cn()
if(b)z.bd(F.hu(3,!1,!1,1,new F.nx(d),e))
z.bd(F.hu(1,!0,!1,-1,new F.ny(d),e))
return z},
hG:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.o6()
y=F.dV(a,null,new F.o7(z,c),d)
y.cn()
return y},
hJ:function(a,b,c,d){return F.ht(c,a,d,b,new F.o9())},
nP:function(a,b,c,d,e,f){return F.ht(d,a,e,b,new F.nQ(f,c))},
ht:function(a,b,c,d,e){var z=F.e3(a,b,new F.nv(H.l(e,{func:1,ret:V.a7,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ax()
z.cn()
return z},
e3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.dw()
y=H.c([],[F.an])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cl(null,null,new V.bb(u,0,0,1),null,null,new V.a_(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cv(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cl(null,null,new V.bb(o,n,m,1),null,null,new V.a_(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.hT(a+1,b+1,y)
return z},
n7:{"^":"m:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cJ(z.b,b).cJ(z.d.cJ(z.c,b),c)
a.sa0(0,new V.a7(y.a,y.b,y.c))
a.seB(y.A(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdL(new V.bQ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nt:{"^":"m:27;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nw:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa0(0,new V.a7(y,u,w))
u=new V.K(y,u,w)
a.seB(u.A(0,Math.sqrt(u.G(u))))
a.sdL(new V.bQ(1-c,2+c,-1,-1))}},
nx:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
ny:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
o6:{"^":"m:27;",
$2:function(a,b){return 0}},
o7:{"^":"m:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.K(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.G(x))).j(0,this.b+z)
a.sa0(0,new V.a7(z.a,z.b,z.c))}},
o9:{"^":"m:25;",
$1:function(a){return new V.a7(Math.cos(a),Math.sin(a),0)}},
nQ:{"^":"m:25;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a7(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nv:{"^":"m:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e4(y.$1(z),x)
x=J.e4(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.K(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.G(x)))
u=new V.K(1,0,0)
y=v.aI(!v.v(0,u)?new V.K(0,0,1):u)
t=y.A(0,Math.sqrt(y.G(y)))
y=t.aI(v)
u=y.A(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa0(0,w.E(0,new V.a7(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ar:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gba()){C.a.J(this.a.a.d.b,this)
this.a.a.a_()}this.cf()
this.cg()
this.h9()},
cl:function(a){this.a=a
C.a.h(a.d.b,this)},
cm:function(a){this.b=a
C.a.h(a.d.c,this)},
hl:function(a){this.c=a
C.a.h(a.d.d,this)},
cf:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
cg:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
h9:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
fk:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.ek())return
return v.A(0,Math.sqrt(v.G(v)))},
fn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.G(z)))
z=w.M(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aI(z.A(0,Math.sqrt(z.G(z))))
return z.A(0,Math.sqrt(z.G(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.fk()
if(z==null){z=this.fn()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
fj:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.ek())return
return v.A(0,Math.sqrt(v.G(v)))},
fm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.K(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.M(0,u).j(0,l).E(0,u).M(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.G(z)))
z=k.aI(m)
z=z.A(0,Math.sqrt(z.G(z))).aI(k)
m=z.A(0,Math.sqrt(z.G(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.fj()
if(z==null){z=this.fm()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
bb:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.T(0)
y=this.e
if(y!=null)this.e=y.T(0)
this.a.a.a_()},
gi2:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y
if(this.gba())return a+"disposed"
z=a+C.b.af(J.ac(this.a.e),0)+", "+C.b.af(J.ac(this.b.e),0)+", "+C.b.af(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.C("")},
t:{
bI:function(a,b,c){var z,y,x
z=new F.ar()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
z.hl(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
iy:{"^":"b;"},
k9:{"^":"iy;",
bc:function(a,b,c){var z,y
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
di:{"^":"b;0a,0b",
aJ:function(){if(!this.gba()){C.a.J(this.a.a.c.b,this)
this.a.a.a_()}this.cf()
this.cg()},
cl:function(a){this.a=a
C.a.h(a.c.b,this)},
cm:function(a){this.b=a
C.a.h(a.c.c,this)},
cf:function(){var z=this.a
if(z!=null){C.a.J(z.c.b,this)
this.a=null}},
cg:function(){var z=this.b
if(z!=null){C.a.J(z.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){if(this.gba())return a+"disposed"
return a+C.b.af(J.ac(this.a.e),0)+", "+C.b.af(J.ac(this.b.e),0)},
P:function(){return this.C("")},
t:{
iT:function(a,b){var z,y,x
z=new F.di()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a_()
return z}}},
iU:{"^":"b;"},
kw:{"^":"iU;",
bc:function(a,b,c){var z,y
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
du:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.J(z.a.b.b,this)
this.a.a.a_()}this.h8()},
h8:function(){var z=this.a
if(z!=null){C.a.J(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.af(J.ac(z.e),0)},
P:function(){return this.C("")}},
f8:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
bd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.B()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.i4())}this.a.B()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.du()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.F(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iT(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bI(p,o,m)}z=this.e
if(!(z==null))z.ag(0)},
ax:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ax()||!1
if(!this.a.ax())y=!1
z=this.e
if(!(z==null))z.ag(0)
return y},
iA:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.an];y.length!==0;){x=C.a.gih(y)
C.a.iV(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.C)(y),++u){t=y[u]
if(t!=null&&a.bc(0,x,t)){C.a.h(w,t)
C.a.J(y,t)}}if(w.length>1)b.bd(w)}}this.a.B()
this.c.cT()
this.d.cT()
this.b.iW()
this.c.cU(new F.kw())
this.d.cU(new F.k9())
z=this.e
if(!(z==null))z.ag(0)},
hW:function(a){this.iA(new F.l7(),new F.jr())},
cn:function(){return this.hW(null)},
bb:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.bb()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.sem(new V.K(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.K(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.S(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.F(null)}}}}z=this.e
if(!(z==null))z.ag(0)},
i0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aY()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bV().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gd3(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.eh])
for(r=0,q=0;q<w;++q){p=b.hY(q)
o=p.gd3(p)
C.a.p(s,q,new Z.eh(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ix(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ei(new Z.fO(34962,j),s,b)
i.b=H.c([],[Z.cz])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.dI(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cz(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.dI(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cz(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.B()
C.a.h(h,g.e)}f=Z.dI(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cz(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
a9:function(a){var z=this.e
if(!(z==null))z.F(a)},
a_:function(){return this.a9(null)},
t:{
dw:function(){var z,y
z=new F.f8()
y=new F.l2(z)
y.b=!1
y.c=H.c([],[F.an])
z.a=y
y=new F.k3(z)
y.b=H.c([],[F.du])
z.b=y
y=new F.k2(z)
y.b=H.c([],[F.di])
z.c=y
y=new F.k1(z)
y.b=H.c([],[F.ar])
z.d=y
z.e=null
return z}}},
k1:{"^":"b;a,0b",
hS:function(a){var z,y,x,w,v,u
H.v(a,"$ise",[F.an],"$ase")
z=H.c([],[F.ar])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bI(x,v,u))}}return z},
hT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.an],"$ase")
z=H.c([],[F.ar])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bI(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bI(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cU:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.bc(0,v,t)){v.aJ()
break}}}}},
cT:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gi2(x)
if(y)x.aJ()}},
ax:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cq())x=!1
return x},
bb:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].bb()},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
k2:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cU:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.bc(0,v,t)){v.aJ()
break}}}}},
cT:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.S(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
P:function(){return this.C("")}},
k3:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iW:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
an:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cl(this.cx,x,u,z,y,w,v,a,t)},
i4:function(){return this.cv(null)},
sa0:function(a,b){var z
if(!J.S(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a_()}},
sem:function(a){var z
a=a.A(0,Math.sqrt(a.G(a)))
if(!J.S(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a_()}},
seB:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
sdL:function(a){var z
if(!J.S(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a_()}},
ix:function(a){var z,y
z=J.L(a)
if(z.v(a,$.$get$aY())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aX())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aZ())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$b_())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bV())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.p])
else if(z.v(a,$.$get$aV())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.L(0,new F.lc(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.L(0,new F.lb(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.af(J.ac(this.e),0))
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
C.a.h(z,V.O(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
P:function(){return this.C("")},
t:{
cl:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.an()
y=new F.la(z)
y.b=H.c([],[F.du])
z.b=y
y=new F.l6(z)
x=[F.di]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l3(z)
x=[F.ar]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fL()
z.e=0
y=$.$get$aY()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aX().a)!==0?e:null
z.x=(x&$.$get$aW().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fM().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
lc:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isar")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
lb:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isar")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
l2:{"^":"b;a,0b,0c",
B:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
hV:function(a,b,c,d,e,f,g,h,i){var z=F.cl(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hU:function(a,b,c,d,e,f){return this.hV(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ax:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cq()
return!0},
i1:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
this.B()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
l3:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
L:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ar]})
C.a.L(this.b,b)
C.a.L(this.c,new F.l4(this,b))
C.a.L(this.d,new F.l5(this,b))},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
l4:{"^":"m:5;a,b",
$1:function(a){H.d(a,"$isar")
if(!J.S(a.a,this.a))this.b.$1(a)}},
l5:{"^":"m:5;a,b",
$1:function(a){var z
H.d(a,"$isar")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
l6:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
l8:{"^":"b;"},
l7:{"^":"l8;",
bc:function(a,b,c){return J.S(b.f,c.f)}},
l9:{"^":"b;"},
jr:{"^":"l9;",
bd:function(a){var z,y,x,w
H.v(a,"$ise",[F.an],"$ase")
z=new V.K(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.K(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].sem(z)
return}},
la:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}}}],["","",,O,{"^":"",jc:{"^":"cJ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
a3:[function(a){var z
H.d(a,"$isB")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.a3(null)},"fe","$1","$0","gbq",0,2,0],
hd:[function(a){H.d(a,"$isB")
this.a=null
this.a3(a)},function(){return this.hd(null)},"jL","$1","$0","ghc",0,2,0],
jo:[function(a,b){var z=V.as
z=new D.cA(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a3(z)},"$2","gfJ",8,0,21],
jp:[function(a,b){var z=V.as
z=new D.cB(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a3(z)},"$2","gfK",8,0,21],
df:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a6(z.e.length+3,4)*4
x=C.f.a6(z.f.length+3,4)*4
w=C.f.a6(z.r.length+3,4)*4
v=C.f.a6(z.x.length+3,4)*4
u=C.f.a6(z.y.length+3,4)*4
t=C.f.a6(z.z.length+3,4)*4
s=C.f.a6(this.e.a.length+3,4)*4
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
a=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aY()
if(c){z=$.$get$aX()
a6=new Z.bv(a6.a|z.a)}if(b){z=$.$get$aW()
a6=new Z.bv(a6.a|z.a)}if(a){z=$.$get$aZ()
a6=new Z.bv(a6.a|z.a)}if(a0){z=$.$get$b_()
a6=new Z.bv(a6.a|z.a)}if(a2){z=$.$get$aV()
a6=new Z.bv(a6.a|z.a)}return new A.jf(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
X:function(a,b){H.v(a,"$ise",[T.dA],"$ase")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
aq:function(a,b){var z,y,x
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.a=new V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
x=y.b
if(x!=null)y.a=x.ar(0,b,y)}},
iY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.df()
y=a.fr.k(0,z.ap)
if(y==null){y=A.jb(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bw(0,x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bz
z=b.e
if(!(z instanceof Z.ei)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ax()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cr()
t.a.cr()
t=t.e
if(!(t==null))t.ag(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.i1()
s=s.e
if(!(s==null))s.ag(0)}q=b.d.i0(new Z.ld(a.a),v)
q.aX($.$get$aY()).e=this.a.Q.c
if(z)q.aX($.$get$aX()).e=this.a.cx.c
if(u)q.aX($.$get$aW()).e=this.a.ch.c
if(w.rx)q.aX($.$get$aZ()).e=this.a.cy.c
if(t)q.aX($.$get$b_()).e=this.a.db.c
if(w.x1)q.aX($.$get$aV()).e=this.a.dx.c
b.e=q}z=T.dA
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.ic()
if(w.fx){u=this.a
t=a.dx
t=t.ga1(t)
u=u.dy
u.toString
u.as(t.ai(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga1(t)
s=a.dx
s=t.j(0,s.ga1(s))
a.cx=s
t=s}u=u.fr
u.toString
u.as(t.ai(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giS()
s=a.dx
s=t.j(0,s.ga1(s))
a.ch=s
t=s}u=u.fy
u.toString
u.as(t.ai(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.as(t.ai(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.as(t.ai(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.as(C.w.ai(t,!0))}if(w.az>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.d(s,"$isas")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.by(H.v(s.ai(0,!0),"$ise",u,"$ase")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.X(p,this.f.d)
u=this.a
t=this.f.d
u.ak(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.X(p,this.f.e)
u=this.a
t=this.f.e
u.ad(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.X(p,this.r.d)
u=this.a
t=this.r.d
u.ak(u.y1,u.az,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.X(p,this.r.e)
u=this.a
t=this.r.e
u.ad(u.y2,u.az,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.ap
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.X(p,this.x.d)
u=this.a
t=this.x.d
u.ak(u.bz,u.bA,t)
t=this.a
u=this.x.f
t=t.ap
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.X(p,this.x.e)
u=this.a
t=this.x.e
u.ad(u.dQ,u.bA,t)
t=this.a
u=this.x.f
t=t.ap
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bB
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.X(p,this.y.d)
u=this.a
t=this.y.d
u.ak(u.dR,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.X(p,this.y.e)
u=this.a
t=this.y.e
u.ad(u.dS,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bD
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bF
t.a.uniform1f(t.d,r)
break
case C.h:this.X(p,this.z.d)
u=this.a
t=this.z.d
u.ak(u.dT,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break
case C.e:this.X(p,this.z.e)
u=this.a
t=this.z.e
u.ad(u.dU,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e4
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cz
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.eF(i.gby(i))
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gay(i)
g=h.c
r=f.gbQ()
s=f.gbm()
f=f.gbv()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.e5
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cA
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbg(i)
r=h.b
g=s.geI(s)
f=s.geJ(s)
s=s.geL(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bl(i.gbg(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gay(i)
f=h.d
g=s.gbQ()
r=s.gbm()
s=s.gbv()
f.a.uniform3f(f.d,g,r,s)
s=i.gdI()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gdJ()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gdK()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.e6
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cB
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbg(i)
r=h.b
g=s.geI(s)
f=s.geJ(s)
s=s.geL(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gby(i).jT()
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=l.bl(i.gbg(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gay(i)
r=h.e
g=s.gbQ()
f=s.gbm()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gjR()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjP()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdI()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdJ()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gdK()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.e7
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cC
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gcX()
H.v(p,"$ise",s,"$ase")
if(!C.a.V(p,r)){r.sfz(p.length)
C.a.h(p,r)}r=i.gby(i)
g=h.d
f=r.gam(r)
e=r.gan(r)
r=r.gao()
g.a.uniform3f(g.d,f,e,r)
r=i.gbR()
e=h.b
f=r.gam(r)
g=r.gan(r)
r=r.gao()
e.a.uniform3f(e.d,f,g,r)
r=i.gbh(i)
g=h.c
f=r.gam(r)
e=r.gan(r)
r=r.gao()
g.a.uniform3f(g.d,f,e,r)
r=l.eF(i.gby(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gay(i)
f=h.f
e=g.gbQ()
r=g.gbm()
g=g.gbv()
f.a.uniform3f(f.d,e,r,g)
g=i.gcX()
r=g.gcK(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gcK(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.giq(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.e8
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cD
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.d
H.v(p,"$ise",r,"$ase")
if(g!=null)if(!C.a.V(p,g)){g.a=p.length
C.a.h(p,g)}d=l.j(0,i.a)
g=i.a.bl(new V.a7(0,0,0))
f=h.b
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.bl(new V.a7(0,0,0))
f=h.c
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.ej(0)
f=h.d
m=new Float32Array(H.by(H.v(new V.cF(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ai(0,!0),"$ise",s,"$ase")))
f.a.uniformMatrix3fv(f.d,!1,m)
f=i.c
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=f!=null
if(!g||f.d<6){g=h.r
g.a.uniform1i(g.d,1)}else{e=h.f
g=!g||f.d<6
c=e.a
e=e.d
if(g)c.uniform1i(e,0)
else c.uniform1i(e,f.a)
g=h.r
g.a.uniform1i(g.d,0)}g=i.e
f=h.x
f.a.uniform1f(f.d,g)
g=i.f
f=h.y
f.a.uniform1f(f.d,g)
g=i.r
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.e9
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cE
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gcX()
H.v(p,"$ise",z,"$ase")
if(!C.a.V(p,s)){s.sfz(p.length)
C.a.h(p,s)}s=i.gbg(i)
r=h.b
g=s.geI(s)
f=s.geJ(s)
s=s.geL(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gby(i)
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=i.gbR()
r=h.d
g=s.gam(s)
f=s.gan(s)
s=s.gao()
r.a.uniform3f(r.d,g,f,s)
s=i.gbh(i)
f=h.e
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=l.bl(i.gbg(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gcX()
r=s.gcK(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gcK(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.giq(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gay(i)
r=h.y
g=s.gbQ()
f=s.gbm()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gk_()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gk0()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdI()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdJ()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gdK()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.h:this.X(p,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.dV,z.bG,u)
break
case C.e:this.X(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.dW,z.bG,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga1(u).ej(0)
a.Q=u}z=z.id
z.toString
z.as(u.ai(0,!0))}if(w.dy){this.X(p,this.ch)
z=this.a
u=this.ch
z.ad(z.dX,z.dY,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bH
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.h:this.X(p,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.dZ,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.e:this.X(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.e_,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bK
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bJ
u.a.uniform1f(u.d,s)
break
case C.h:this.X(p,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.e0,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break
case C.e:this.X(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.e1,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bM
z.a.uniform1f(z.d,t)
break
case C.h:this.X(p,this.db.d)
z=this.a
t=this.db.d
z.ak(z.e2,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break
case C.e:this.X(p,this.db.e)
z=this.a
t=this.db.e
z.ad(z.e3,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b8(a)
z=b.e
z.b8(a)
z.b0(a)
z.jd(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ia()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.df().ap},
t:{
eR:function(){var z,y,x
z=new O.jc()
y=O.d8(V.as)
z.e=y
y.bo(z.gfJ(),z.gfK())
y=new O.bi(z,"emission")
y.c=C.c
y.f=new V.a8(0,0,0)
z.f=y
y=new O.bi(z,"ambient")
y.c=C.c
y.f=new V.a8(0,0,0)
z.r=y
y=new O.bi(z,"diffuse")
y.c=C.c
y.f=new V.a8(0,0,0)
z.x=y
y=new O.bi(z,"invDiffuse")
y.c=C.c
y.f=new V.a8(0,0,0)
z.y=y
y=new O.jh(z,"specular")
y.c=C.c
y.f=new V.a8(0,0,0)
y.ch=100
z.z=y
y=new O.je(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bi(z,"reflect")
y.c=C.c
y.f=new V.a8(0,0,0)
z.cx=y
y=new O.jg(z,"refract")
y.c=C.c
y.f=new V.a8(0,0,0)
y.ch=1
z.cy=y
y=new O.jd(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.iS()
y.bY(D.a6)
y.e=H.c([],[D.il])
y.f=H.c([],[D.jx])
y.r=H.c([],[D.ka])
y.x=H.c([],[D.kl])
y.y=H.c([],[D.cK])
y.z=H.c([],[D.km])
y.Q=null
y.ch=null
y.d2(y.gfI(),y.gh1(),y.gh3())
z.dx=y
x=y.Q
if(x==null){x=D.P()
y.Q=x
y=x}else y=x
y.h(0,z.ghc())
y=z.dx
x=y.ch
if(x==null){x=D.P()
y.ch=x
y=x}else y=x
y.h(0,z.gbq())
z.dy=null
return z}}},jd:{"^":"dm;0f,a,b,0c,0d,0e"},dm:{"^":"b;",
a3:[function(a){this.a.a3(H.d(a,"$isB"))},function(){return this.a3(null)},"fe","$1","$0","gbq",0,2,0],
b3:["f_",function(){}],
hj:function(a){},
hk:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gw().J(0,this.gbq())
y=this.e
this.e=a
if(a!=null)a.gw().h(0,this.gbq())
z=new D.I(this.b+".textureCube",y,this.e,this,[T.dB])
z.b=!0
this.a.a3(z)}}},je:{"^":"dm;a,b,0c,0d,0e"},bi:{"^":"dm;0f,a,b,0c,0d,0e",
du:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.a8])
y.b=!0
this.a.a3(y)}},
b3:["bX",function(){this.f_()
this.du(new V.a8(1,1,1))}],
say:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.b3()
z=this.a
z.a=null
z.a3(null)}this.du(b)}},jg:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
hi:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.a3(z)}},
b3:function(){this.bX()
this.hi(1)}},jh:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
ci:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.a3(z)}},
b3:function(){this.bX()
this.ci(100)}},cJ:{"^":"b;"}}],["","",,T,{"^":"",dA:{"^":"d2;"},dB:{"^":"dA;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
b8:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}}},kj:{"^":"b;a,0b,0c,0d,0e",
aR:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.af
W.a4(z,"load",H.l(new T.kk(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
he:function(a,b,c){var z,y,x,w
b=V.e0(b,2)
z=V.e0(a.width,2)
y=V.e0(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d7(null,null)
x.width=z
x.height=y
w=H.d(C.l.eO(x,"2d"),"$isel")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ns(w.getImageData(0,0,x.width,x.height))}}},kk:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.he(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.a4.j6(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.ib()}++z.e}}}],["","",,V,{"^":"",bF:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isaR:1},aR:{"^":"b;"},eQ:{"^":"b;",
aZ:["eZ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["d4",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaR:1},aA:{"^":"eQ;0a",
aZ:function(a,b){return!this.eZ(0,b)},
i:function(a){return"!["+this.d4(0)+"]"}},jL:{"^":"b;0a,0b",
aZ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bS(this.a)
y=H.bS(this.b)
return z+".."+y},
$isaR:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jL()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k_:{"^":"b;0a",
f4:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b6(0,0,[P.n,P.U])
for(y=new H.dk(a,a.gm(a),0,[H.al(a,"z",0)]);y.D();)z.p(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.bw(0,b)},
i:function(a){var z=this.a
return P.ci(z.ga7(z),0,null)},
$isaR:1,
t:{
x:function(a){var z=new V.k_()
z.f4(a)
return z}}},fa:{"^":"b;a,b,0c,0d",
giB:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fn(this.a.l(0,b))
w.a=H.c([],[V.aR])
w.c=!1
C.a.h(this.c,w)
return w},
ig:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},fk:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e2(this.b,"\n","\\n")
y=H.e2(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fl:{"^":"b;a,b,0c",
aL:function(a,b,c){var z,y,x
H.v(c,"$ise",[P.h],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kr:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.fa(this,b)
z.c=H.c([],[V.fn])
this.a.p(0,b,z)}return z},
R:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.fl(this,a)
y=P.h
z.c=new H.b6(0,0,[y,y])
this.b.p(0,a,z)}return z},
eE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fk])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.ig(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ci(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.giB(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ci(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fk(o==null?p.b:o,q,t)}++t}}},
t:{
cL:function(){var z,y
z=new V.kr()
y=P.h
z.a=new H.b6(0,0,[y,V.fa])
z.b=new H.b6(0,0,[y,V.fl])
return z}}},fn:{"^":"eQ;b,0c,0a",
i:function(a){return this.b.b+": "+this.d4(0)}}}],["","",,X,{"^":"",ek:{"^":"b;",$isaS:1},iD:{"^":"fe;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},ju:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.P()
this.f=z}return z},
b2:[function(a){var z
H.d(a,"$isB")
z=this.f
if(!(z==null))z.F(a)},function(){return this.b2(null)},"ji","$1","$0","gd6",0,2,0],
sb_:function(a){var z,y
if(!J.S(this.b,a)){z=this.b
if(z!=null)z.gw().J(0,this.gd6())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gd6())
z=new D.I("mover",y,this.b,this,[U.ad])
z.b=!0
this.b2(z)}},
$isaS:1,
$isek:1},fe:{"^":"b;"}}],["","",,V,{"^":"",
o4:function(a){P.kq(C.N,new V.o5(a))},
b3:{"^":"b;",
bp:function(a){this.b=new P.iG(C.O)
this.c=null
this.d=H.c([],[[P.e,W.bd]])},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bd]))
y=a.split("\n")
for(z=y.length,x=[W.bd],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fq(u,0,u.length)
r=s==null?u:s
C.M.eS(t,H.e2(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaB(this.d),t)}},
er:function(a,b){var z,y,x,w
H.v(b,"$ise",[P.h],"$ase")
this.d=H.c([],[[P.e,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bx()
this.c=y}for(y=y.eE(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bP(y[w])}},
o5:{"^":"m:53;a",
$1:function(a){H.d(a,"$isbs")
P.e1(C.d.eD(this.a.gio(),2)+" fps")}},
ih:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
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
bx:function(){var z,y,x,w
z=V.cL()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
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
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bF())
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
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bF())
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
x=new V.aA()
w=[V.aR]
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
x=new V.aA()
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
x=[P.h]
y.aL(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aL(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aL(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iE:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
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
bx:function(){var z,y,x,w
z=V.cL()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
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
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bF())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aA()
w=[V.aR]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aA()
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
y=[P.h]
x.aL(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aL(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aL(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iF:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
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
bx:function(){var z,y,x
z=V.cL()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
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
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bF())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
y=z.l(0,"Other").n(0,"Other")
x=new V.aA()
x.a=H.c([],[V.aR])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.R("String")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
x.aL(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.R("Attr")
x=z.l(0,"Other")
x.d=x.a.R("Other")
return z}},
jw:{"^":"b3;a,0b,0c,0d",
er:function(a,b){H.v(b,"$ise",[P.h],"$ase")
this.d=H.c([],[[P.e,W.bd]])
this.N(C.a.n(b,"\n"),"#111")},
bP:function(a){},
bx:function(){return}},
jJ:{"^":"b;a,b,0c",
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fH().gcS().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.dB(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e7(this.c).h(0,v)
t=W.iJ("radio")
t.checked=x
t.name=z
z=W.af
W.a4(t,"change",H.l(new V.jK(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e7(this.c).h(0,w.createElement("br"))},
b6:function(a,b,c){return this.dD(a,b,c,!1)},
dB:function(a){var z,y,x,w,v
z=P.fH()
y=P.h
x=P.j_(z.gcS(),y,y)
x.p(0,this.a,a)
w=z.ey(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mk([],[]).cY(""),"",v)}},
jK:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dB(this.d)}}},
k4:{"^":"b;0a,0b",
f6:function(a,b){var z,y,x,w,v,u,t
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
W.a4(z,"scroll",H.l(new V.k7(x),{func:1,ret:-1,args:[t]}),!1,t)},
dG:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.h],"$ase")
this.hn()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eE(C.a.iv(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cn(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eN:function(a){var z,y,x,w
z=new V.ih("dart")
z.bp("dart")
y=new V.iE("glsl")
y.bp("glsl")
x=new V.iF("html")
x.bp("html")
w=C.a.ii(H.c([z,y,x],[V.b3]),new V.k8(a))
if(w!=null)return w
z=new V.jw("plain")
z.bp("plain")
return z},
dE:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$ise",[P.h],"$ase")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c5(w).a4(w,"+")){C.a.p(a2,x,C.b.at(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a4(w,"-")){C.a.p(a2,x,C.b.at(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eN(a0)
v.er(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cn(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e9(null)
n.href="#"+H.j(r)
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
if(x>=z.length)return H.f(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.C)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.C)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gZ(w);b.D();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hR:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[P.h],"$ase")
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
for(v=0;v<1;++v){u=z.createElement("div")
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
hn:function(){var z,y,x,w
if(this.b!=null)return
z=V.cL()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aA()
w=[V.aR]
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
x=new V.aA()
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
x=new V.aA()
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
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
x=z.l(0,"Other").n(0,"Other")
y=new V.aA()
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
t:{
k5:function(a,b){var z=new V.k4()
z.f6(a,!0)
return z}}},
k7:{"^":"m:13;a",
$1:function(a){P.fi(C.q,new V.k6(this.a))}},
k6:{"^":"m:1;a",
$0:function(){var z,y,x
z=C.d.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k8:{"^":"m:54;a",
$1:function(a){return H.d(a,"$isb3").a===this.a}}}],["","",,T,{"^":"",
hC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=V.k5("Test 022",!0)
y=W.d7(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dG(H.c(["Test of the Material Lighting shader with a textured point light."],x))
z.hR(H.c(["shapes"],x))
z.dG(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.ko(w,!0,!0,!0,!1)
u=v.f
t=u.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.dB()
r.a=0
r.b=s
r.c=!1
r.d=0
u.aR(r,s,"../resources/earthColor/posx.png",34069,!1,!1)
u.aR(r,s,"../resources/earthColor/negx.png",34070,!1,!1)
u.aR(r,s,"../resources/earthColor/posy.png",34071,!1,!1)
u.aR(r,s,"../resources/earthColor/negy.png",34072,!1,!1)
u.aR(r,s,"../resources/earthColor/posz.png",34073,!1,!1)
u.aR(r,s,"../resources/earthColor/negz.png",34074,!1,!1)
q=U.dc(null)
q.h(0,U.cw(V.eV(0,0,2)))
u=new U.f5()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.seK(0)
u.seu(0,0)
u.sez(0)
t=u.d
if(!$.o.$2(t,0.5)){p=u.d
u.d=0.5
t=new D.I("deltaYaw",p,0.5,u,[P.p])
t.b=!0
u.K(t)}t=u.e
if(!$.o.$2(t,0.5)){p=u.e
u.e=0.5
t=new D.I("deltaPitch",p,0.5,u,[P.p])
t.b=!0
u.K(t)}t=u.f
if(!$.o.$2(t,0)){p=u.f
u.f=0
t=new D.I("deltaRoll",p,0,u,[P.p])
t.b=!0
u.K(t)}q.h(0,u)
o=E.db(null,!0,null,"",null,null)
u=U.dc(null)
u.h(0,U.cw(V.dp(0.2,0.2,0.2,1)))
u.h(0,q)
o.sb_(u)
o.saa(0,F.hG(8,null,1,8))
u=O.eR()
t=u.f
n=t.c
if(n!==C.e){if(n===C.c)t.b3()
t.c=C.e
t.hj(null)
n=t.a
n.a=null
n.a3(null)}t.hk(r)
o.sbi(u)
m=new D.cK()
m.c=new V.a8(1,1,1)
m.e=1
m.f=0
m.r=0
m.a=V.bN()
p=m.b
m.b=q
q.gw().h(0,m.gbZ())
u=new D.I("mover",p,m.b,m,[U.ad])
u.b=!0
m.ac(u)
l=new V.a8(1,1,1)
if(!m.c.v(0,l)){p=m.c
m.c=l
u=new D.I("color",p,l,m,[V.a8])
u.b=!0
m.ac(u)}u=m.d
if(u!==r){if(u!=null)u.gw().J(0,m.gbZ())
p=m.d
m.d=r
r.gw().h(0,m.gbZ())
u=new D.I("texture",p,m.d,m,[T.dB])
u.b=!0
m.ac(u)}u=m.e
if(!$.o.$2(u,1)){p=m.e
m.e=1
u=new D.I("attenuation0",p,1,m,[P.p])
u.b=!0
m.ac(u)}u=m.f
if(!$.o.$2(u,0.15)){p=m.f
m.f=0.15
u=new D.I("attenuation1",p,0.15,m,[P.p])
u.b=!0
m.ac(u)}u=m.r
if(!$.o.$2(u,0.05)){p=m.r
m.r=0.05
u=new D.I("attenuation2",p,0.05,m,[P.p])
u.b=!0
m.ac(u)}k=O.eR()
k.dx.h(0,m)
u=k.r
u.say(0,new V.a8(0.2,0.2,0.2))
u=k.x
u.say(0,new V.a8(1,1,1))
u=k.z
u.say(0,new V.a8(1,1,1))
u=k.z
if(u.c===C.c){u.c=C.i
u.bX()
u.ci(100)
t=u.a
t.a=null
t.a3(null)}u.ci(100)
j=E.db(null,!0,null,"",null,null)
j.sb_(U.cw(V.dp(3,3,3,1)))
u=F.dV(1,null,null,1)
u.bb()
j.saa(0,u)
i=E.db(null,!0,null,"",null,null)
i.saa(0,F.hJ(30,1,15,0.5))
h=U.dc(null)
u=v.r
t=new U.kT()
n=U.d9()
n.sd_(0,!0)
n.scL(6.283185307179586)
n.scN(0)
n.sa0(0,0)
n.scM(100)
n.sU(0)
n.scw(0.5)
t.b=n
g=t.gaS()
n.gw().h(0,g)
n=U.d9()
n.sd_(0,!0)
n.scL(6.283185307179586)
n.scN(0)
n.sa0(0,0)
n.scM(100)
n.sU(0)
n.scw(0.5)
t.c=n
n.gw().h(0,g)
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
f=new X.aH(!1,!1,!1)
p=t.d
t.d=f
n=[X.aH]
g=new D.I("modifiers",p,f,t,n)
g.b=!0
t.K(g)
g=t.f
if(g!==!1){t.f=!1
g=new D.I("invertX",g,!1,t,[P.U])
g.b=!0
t.K(g)}g=t.r
if(g!==!1){t.r=!1
g=new D.I("invertY",g,!1,t,[P.U])
g.b=!0
t.K(g)}t.b7(u)
h.h(0,t)
u=v.r
t=new U.kS()
g=U.d9()
g.sd_(0,!0)
g.scL(6.283185307179586)
g.scN(0)
g.sa0(0,0)
g.scM(100)
g.sU(0)
g.scw(0.2)
t.b=g
g.gw().h(0,t.gaS())
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
f=new X.aH(!0,!1,!1)
p=t.c
t.c=f
g=new D.I("modifiers",p,f,t,n)
g.b=!0
t.K(g)
t.b7(u)
h.h(0,t)
u=v.r
t=new U.kU()
t.c=0.01
t.d=0
t.e=0
f=new X.aH(!1,!1,!1)
t.b=f
n=new D.I("modifiers",null,f,t,n)
n.b=!0
t.K(n)
t.b7(u)
h.h(0,t)
h.h(0,U.cw(V.eV(0,0,5)))
e=new M.iu()
u=O.d8(E.aQ)
e.d=u
u.bo(e.gfM(),e.gfN())
e.e=null
e.f=null
e.r=null
e.x=null
d=new X.ju()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb_(null)
u=d.c
if(!$.o.$2(u,1.0471975511965976)){p=d.c
d.c=1.0471975511965976
u=new D.I("fov",p,1.0471975511965976,d,[P.p])
u.b=!0
d.b2(u)}u=d.d
if(!$.o.$2(u,0.1)){p=d.d
d.d=0.1
u=new D.I("near",p,0.1,d,[P.p])
u.b=!0
d.b2(u)}u=d.e
if(!$.o.$2(u,2000)){p=d.e
d.e=2000
u=new D.I("far",p,2000,d,[P.p])
u.b=!0
d.b2(u)}u=e.a
if(u!==d){if(u!=null)u.gw().J(0,e.gau())
p=e.a
e.a=d
d.gw().h(0,e.gau())
u=new D.I("camera",p,e.a,e,[X.ek])
u.b=!0
e.aO(u)}c=new X.iD()
u=new V.bb(0,0,0,1)
c.a=u
c.b=!0
c.c=2000
c.d=!0
c.e=0
c.f=!1
u=V.f4(0,0,1,1)
c.r=u
u=e.b
if(u!==c){if(u!=null)u.gw().J(0,e.gau())
p=e.b
e.b=c
c.gw().h(0,e.gau())
u=new D.I("target",p,e.b,e,[X.fe])
u.b=!0
e.aO(u)}e.sbi(null)
e.sbi(k)
e.d.h(0,j)
e.d.h(0,i)
e.d.h(0,o)
e.a.sb_(h)
u=v.d
if(u!==e){if(u!=null)u.gw().J(0,v.gd5())
v.d=e
e.gw().h(0,v.gd5())
v.f8()}u=new V.jJ("shapes",!0)
x=x.getElementById("shapes")
u.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
u.b6(0,"Cube",new T.nS(i))
u.b6(0,"Cylinder",new T.nT(i))
u.b6(0,"Cone",new T.nU(i))
u.b6(0,"Sphere",new T.nV(i))
u.dD(0,"Toroid",new T.nW(i),!0)
u.b6(0,"Knot",new T.nX(i))
x=v.z
if(x==null){x=D.P()
v.z=x}u={func:1,ret:-1,args:[D.B]}
t=H.l(new T.nY(z,k),u)
n=x.b
if(n==null){u=H.c([],[u])
x.b=u
x=u}else x=n
C.a.h(x,t)
V.o4(v)},
nS:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.dV(1,null,null,1))}},
nT:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.hs(1,!0,!0,1,40,1))}},
nU:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.hs(1,!0,!1,1,40,0))}},
nV:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.hG(6,null,1,6))}},
nW:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.hJ(30,1,15,0.5))}},
nX:{"^":"m:1;a",
$0:function(){this.a.saa(0,F.nP(120,1,2,12,0.3,3))}},
nY:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isB")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dE("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dE("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eI.prototype
return J.eH.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.eJ.prototype
if(typeof a=="boolean")return J.iN.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.aM=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.c4=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.nD=function(a){if(typeof a=="number")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ck.prototype
return a}
J.nE=function(a){if(typeof a=="number")return J.cd.prototype
if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ck.prototype
return a}
J.c5=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ck.prototype
return a}
J.aD=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).v(a,b)}
J.hK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nD(a).S(a,b)}
J.e4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nE(a).j(a,b)}
J.e5=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).k(a,b)}
J.d0=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hz(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c4(a).p(a,b,c)}
J.hL=function(a,b){return J.c5(a).H(a,b)}
J.hM=function(a,b,c){return J.aD(a).ha(a,b,c)}
J.hN=function(a,b,c,d){return J.aD(a).dF(a,b,c,d)}
J.hO=function(a,b){return J.c5(a).Y(a,b)}
J.d1=function(a,b,c){return J.aM(a).i3(a,b,c)}
J.cr=function(a,b){return J.c4(a).I(a,b)}
J.hP=function(a,b,c,d){return J.c4(a).aK(a,b,c,d)}
J.e6=function(a,b){return J.c4(a).L(a,b)}
J.hQ=function(a){return J.aD(a).ghZ(a)}
J.e7=function(a){return J.aD(a).gct(a)}
J.c7=function(a){return J.L(a).gW(a)}
J.b2=function(a){return J.c4(a).gZ(a)}
J.ao=function(a){return J.aM(a).gm(a)}
J.hR=function(a){return J.aD(a).gcQ(a)}
J.hS=function(a){return J.aD(a).gj5(a)}
J.e8=function(a){return J.c4(a).iU(a)}
J.hT=function(a,b){return J.aD(a).iZ(a,b)}
J.hU=function(a,b){return J.aD(a).sa2(a,b)}
J.hV=function(a,b,c){return J.c5(a).u(a,b,c)}
J.hW=function(a){return J.c5(a).jc(a)}
J.ac=function(a){return J.L(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.ct.prototype
C.l=W.d6.prototype
C.M=W.bd.prototype
C.P=J.t.prototype
C.a=J.bh.prototype
C.Q=J.eH.prototype
C.f=J.eI.prototype
C.w=J.eJ.prototype
C.d=J.cd.prototype
C.b=J.ce.prototype
C.X=J.cf.prototype
C.a2=H.dt.prototype
C.a3=W.jo.prototype
C.E=J.jv.prototype
C.a4=P.dv.prototype
C.F=W.kh.prototype
C.u=J.ck.prototype
C.G=W.bW.prototype
C.H=W.lf.prototype
C.J=new P.i0(!1)
C.I=new P.i_(C.J)
C.K=new P.jt()
C.L=new P.l1()
C.j=new P.m2()
C.c=new A.cv(0,"ColorSourceType.None")
C.i=new A.cv(1,"ColorSourceType.Solid")
C.h=new A.cv(2,"ColorSourceType.Texture2D")
C.e=new A.cv(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.N=new P.be(5e6)
C.O=new P.iH("element",!0,!1,!1,!1)
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
C.Y=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.aa([]),[P.h])
C.a_=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.ic(0,{},C.A,[P.h,P.h])
C.k=new P.kV(!1)
$.aF=0
$.bG=null
$.ef=null
$.dP=!1
$.hx=null
$.hp=null
$.hF=null
$.cV=null
$.cY=null
$.dY=null
$.bz=null
$.c0=null
$.c1=null
$.dQ=!1
$.Y=C.j
$.aP=null
$.da=null
$.eA=null
$.ez=null
$.ev=null
$.eu=null
$.et=null
$.es=null
$.o=V.ji()
$.f0=null
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
I.$lazy(y,x,w)}})(["er","$get$er",function(){return H.hw("_$dart_dartClosure")},"df","$get$df",function(){return H.hw("_$dart_js")},"fo","$get$fo",function(){return H.aJ(H.cM({
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aJ(H.cM({$method$:null,
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aJ(H.cM(null))},"fr","$get$fr",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fv","$get$fv",function(){return H.aJ(H.cM(void 0))},"fw","$get$fw",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aJ(H.fu(null))},"fs","$get$fs",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"fy","$get$fy",function(){return H.aJ(H.fu(void 0))},"fx","$get$fx",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dK","$get$dK",function(){return P.lg()},"c2","$get$c2",function(){return[]},"fK","$get$fK",function(){return P.kZ()},"fR","$get$fR",function(){return H.jm(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"he","$get$he",function(){return P.jQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.n9()},"ep","$get$ep",function(){return{}},"fV","$get$fV",function(){return P.eN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dL","$get$dL",function(){return P.dj(P.h,P.cb)},"fN","$get$fN",function(){return Z.av(0)},"fL","$get$fL",function(){return Z.av(511)},"aY","$get$aY",function(){return Z.av(1)},"aX","$get$aX",function(){return Z.av(2)},"aW","$get$aW",function(){return Z.av(4)},"aZ","$get$aZ",function(){return Z.av(8)},"b_","$get$b_",function(){return Z.av(16)},"bU","$get$bU",function(){return Z.av(32)},"bV","$get$bV",function(){return Z.av(64)},"fM","$get$fM",function(){return Z.av(96)},"bw","$get$bw",function(){return Z.av(128)},"aV","$get$aV",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.N},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.N,args:[F.ar]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.an,P.p,P.p]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:-1,args:[P.n,[P.i,E.aQ]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.af]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.U,args:[W.aI]},{func:1,ret:-1,args:[P.n,[P.i,U.ad]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.n,[P.i,D.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.n,[P.i,V.as]]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:V.a7,args:[P.p]},{func:1,ret:W.G},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.U,args:[P.h]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.U,args:[W.V,P.h,P.h,W.cm]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.N,args:[P.a5]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.U,args:[P.p,P.p]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:P.N,args:[P.h,,]},{func:1,ret:P.U,args:[[P.i,D.a6]]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.M,P.h,P.h],args:[[P.M,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b0,,],args:[,]},{func:1,ret:P.n,args:[[P.e,P.n],P.n]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aB]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bs]},{func:1,ret:P.U,args:[V.b3]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.V,args:[W.G]}]
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
if(x==y)H.o8(d||a)
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
Isolate.dW=a.dW
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hC,[])
else T.hC([])})})()
//# sourceMappingURL=test.dart.js.map
