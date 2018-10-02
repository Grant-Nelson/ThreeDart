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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cY(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d_=function(){}
var dart=[["","",,H,{"^":"",lr:{"^":"a;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
d5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ch:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d2==null){H.kK()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.ep("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cx()]
if(v!=null)return v
v=H.kP(a)
if(v!=null)return v
if(typeof a=="function")return C.C
y=Object.getPrototypeOf(a)
if(y==null)return C.n
if(y===Object.prototype)return C.n
if(typeof w=="function"){Object.defineProperty(w,$.$get$cx(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
m:{"^":"a;",
t:function(a,b){return a===b},
gP:function(a){return H.br(a)},
i:["cU",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h2:{"^":"m;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isaf:1},
h4:{"^":"m;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isH:1},
cy:{"^":"m;",
gP:function(a){return 0},
i:["cV",function(a){return String(a)}]},
hx:{"^":"cy;"},
c9:{"^":"cy;"},
bK:{"^":"cy;",
i:function(a){var z=a[$.$get$dr()]
if(z==null)return this.cV(a)
return"JavaScript function for "+H.j(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscr:1},
aV:{"^":"m;$ti",
h:function(a,b){H.D(b,H.v(a,0))
if(!!a.fixed$length)H.A(P.F("add"))
a.push(b)},
f4:function(a,b){if(!!a.fixed$length)H.A(P.F("removeAt"))
if(b<0||b>=a.length)throw H.b(P.bP(b,null,null))
return a.splice(b,1)[0]},
E:function(a,b){var z
if(!!a.fixed$length)H.A(P.F("remove"))
for(z=0;z<a.length;++z)if(J.B(a[z],b)){a.splice(z,1)
return!0}return!1},
bk:function(a,b){var z,y
H.w(b,"$isi",[H.v(a,0)],"$asi")
if(!!a.fixed$length)H.A(P.F("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.bi(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.j(a[y]))
return z.join(b)},
eJ:function(a){return this.C(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
aX:function(a,b,c){var z=a.length
if(b>z)throw H.b(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.ah(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.v(a,0)])
return H.f(a.slice(b,c),[H.v(a,0)])},
gbA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.h0())},
i:function(a){return P.cv(a,"[","]")},
gR:function(a){return new J.ak(a,a.length,0,[H.v(a,0)])},
gP:function(a){return H.br(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.A(P.F("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.bV(b,"newLength",null))
if(b<0)throw H.b(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ay(a,b))
if(b>=a.length||b<0)throw H.b(H.ay(a,b))
return a[b]},
m:function(a,b,c){H.r(b)
H.D(c,H.v(a,0))
if(!!a.immutable$list)H.A(P.F("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ay(a,b))
if(b>=a.length||b<0)throw H.b(H.ay(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
h1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.bV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.ah(a,0,4294967295,"length",null))
return J.dC(new Array(a),b)},
dC:function(a,b){return J.bk(H.f(a,[b]))},
bk:function(a){H.bT(a)
a.fixed$length=Array
return a},
lp:[function(a,b){return J.fc(H.f2(a,"$isaa"),H.f2(b,"$isaa"))},"$2","ko",8,0,40]}},
lq:{"^":"aV;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bJ:{"^":"m;",
a2:function(a,b){var z
H.f1(b)
if(typeof b!=="number")throw H.b(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaT(b)
if(this.gaT(a)===z)return 0
if(this.gaT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaT:function(a){return a===0?1/a<0:a<0},
cr:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.F(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.F(""+a+".round()"))},
ep:function(a,b,c){if(C.c.a2(b,c)>0)throw H.b(H.ao(b))
if(this.a2(a,b)<0)return b
if(this.a2(a,c)>0)return c
return a},
cI:function(a,b){var z
if(b>20)throw H.b(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaT(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
cP:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cf(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.cf(a,b)},
cf:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.F("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.e7(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e7:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.b(H.ao(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.b(H.ao(b))
return a>b},
$isaa:1,
$asaa:function(){return[P.V]},
$isx:1,
$isV:1},
dD:{"^":"bJ;",$isy:1},
h3:{"^":"bJ;"},
c1:{"^":"m;",
bu:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ay(a,b))
if(b<0)throw H.b(H.ay(a,b))
if(b>=a.length)H.A(H.ay(a,b))
return a.charCodeAt(b)},
aL:function(a,b){if(b>=a.length)throw H.b(H.ay(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.b(P.bV(b,null,null))
return a+b},
aY:function(a,b,c){H.r(c)
if(c==null)c=a.length
if(b<0)throw H.b(P.bP(b,null,null))
if(b>c)throw H.b(P.bP(b,null,null))
if(c>a.length)throw H.b(P.bP(c,null,null))
return a.substring(b,c)},
cS:function(a,b){return this.aY(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.q)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eW:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a0:function(a,b){return this.eW(a,b," ")},
er:function(a,b,c){if(c>a.length)throw H.b(P.ah(c,0,a.length,null,null))
return H.f5(a,b,c)},
a2:function(a,b){var z
H.Q(b)
if(typeof b!=="string")throw H.b(H.ao(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isaa:1,
$asaa:function(){return[P.k]},
$isdQ:1,
$isk:1}}],["","",,H,{"^":"",
h0:function(){return new P.i9("No element")},
i8:function(a,b,c){var z
H.w(a,"$isd",[c],"$asd")
H.c(b,{func:1,ret:P.y,args:[c,c]})
z=J.aR(a)
if(typeof z!=="number")return z.G()
H.bQ(a,0,z-1,b,c)},
bQ:function(a,b,c,d,e){H.w(a,"$isd",[e],"$asd")
H.c(d,{func:1,ret:P.y,args:[e,e]})
if(c-b<=32)H.i7(a,b,c,d,e)
else H.i6(a,b,c,d,e)},
i7:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isd",[e],"$asd")
H.c(d,{func:1,ret:P.y,args:[e,e]})
for(z=b+1,y=J.be(a);z<=c;++z){x=y.j(a,z)
w=z
while(!0){if(!(w>b&&J.aq(d.$2(y.j(a,w-1),x),0)))break
v=w-1
y.m(a,w,y.j(a,v))
w=v}y.m(a,w,x)}},
i6:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isd",[a2],"$asd")
H.c(a1,{func:1,ret:P.y,args:[a2,a2]})
z=C.c.a6(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.a6(b+a0,2)
v=w-z
u=w+z
t=J.be(a)
s=t.j(a,y)
r=t.j(a,v)
q=t.j(a,w)
p=t.j(a,u)
o=t.j(a,x)
if(J.aq(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aq(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aq(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aq(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aq(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aq(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aq(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aq(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aq(a1.$2(p,o),0)){n=o
o=p
p=n}t.m(a,y,s)
t.m(a,w,q)
t.m(a,x,o)
t.m(a,v,t.j(a,b))
t.m(a,u,t.j(a,a0))
m=b+1
l=a0-1
if(J.B(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.j(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.T()
if(i<0){if(k!==m){t.m(a,k,t.j(a,m))
t.m(a,m,j)}++m}else for(;!0;){i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.ai()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.m(a,k,t.j(a,m))
g=m+1
t.m(a,m,t.j(a,l))
t.m(a,l,j)
l=h
m=g
break}else{t.m(a,k,t.j(a,l))
t.m(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.j(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.T()
if(e<0){if(k!==m){t.m(a,k,t.j(a,m))
t.m(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ai()
if(d>0)for(;!0;){i=a1.$2(t.j(a,l),p)
if(typeof i!=="number")return i.ai()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.T()
h=l-1
if(i<0){t.m(a,k,t.j(a,m))
g=m+1
t.m(a,m,t.j(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.j(a,l))
t.m(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.m(a,b,t.j(a,c))
t.m(a,c,r)
c=l+1
t.m(a,a0,t.j(a,c))
t.m(a,c,p)
H.bQ(a,b,m-2,a1,a2)
H.bQ(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.B(a1.$2(t.j(a,m),r),0);)++m
for(;J.B(a1.$2(t.j(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.j(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.m(a,k,t.j(a,m))
t.m(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.j(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.T()
h=l-1
if(i<0){t.m(a,k,t.j(a,m))
g=m+1
t.m(a,m,t.j(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.j(a,l))
t.m(a,l,j)}l=h
break}}H.bQ(a,m,l,a1,a2)}else H.bQ(a,m,l,a1,a2)},
Z:{"^":"iG;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.bu(this.a,b)},
$ascN:function(){return[P.y]},
$asq:function(){return[P.y]},
$asi:function(){return[P.y]},
$asd:function(){return[P.y]}},
fD:{"^":"i;"},
dI:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.be(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.bi(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hk:{"^":"i;a,b,$ti",
gR:function(a){return new H.hl(J.bF(this.a),this.b,this.$ti)},
gk:function(a){return J.aR(this.a)},
F:function(a,b){return this.b.$1(J.cl(this.a,b))},
$asi:function(a,b){return[b]}},
hl:{"^":"cw;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascw:function(a,b){return[b]}},
j_:{"^":"i;a,b,$ti",
gR:function(a){return new H.j0(J.bF(this.a),this.b,this.$ti)}},
j0:{"^":"cw;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
bZ:{"^":"a;$ti"},
cN:{"^":"a;$ti",
m:function(a,b,c){H.r(b)
H.D(c,H.ap(this,"cN",0))
throw H.b(P.F("Cannot modify an unmodifiable list"))}},
iG:{"^":"c2+cN;"}}],["","",,H,{"^":"",
kF:function(a){return init.types[H.r(a)]},
kN:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isE},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.b(H.ao(a))
return z},
br:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.M(a).$isc9){v=C.l(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.aL(w,0)===36)w=C.b.cS(w,1)
r=H.d3(H.bT(H.aO(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dS:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hH:function(a){var z,y,x,w
z=H.f([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.b(H.ao(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.b(H.ao(w))}return H.dS(z)},
dT:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(H.ao(x))
if(x<0)throw H.b(H.ao(x))
if(x>65535)return H.hH(a)}return H.dS(a)},
hG:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aP(z,10))>>>0,56320|z&1023)}throw H.b(P.ah(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hF:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hD:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hz:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hA:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hC:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hE:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hB:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
o:function(a){throw H.b(H.ao(a))},
e:function(a,b){if(a==null)J.aR(a)
throw H.b(H.ay(a,b))},
ay:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.r(J.aR(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.bP(b,"index",null)},
kA:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
ao:function(a){return new P.aI(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f7})
z.name=""}else z.toString=H.f7
return z},
f7:function(){return J.a6(this.dartException)},
A:function(a){throw H.b(a)},
C:function(a){throw H.b(P.bi(a))},
aH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cz(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dO(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ec()
u=$.$get$ed()
t=$.$get$ee()
s=$.$get$ef()
r=$.$get$ej()
q=$.$get$ek()
p=$.$get$eh()
$.$get$eg()
o=$.$get$em()
n=$.$get$el()
m=v.a_(y)
if(m!=null)return z.$1(H.cz(H.Q(y),m))
else{m=u.a_(y)
if(m!=null){m.method="call"
return z.$1(H.cz(H.Q(y),m))}else{m=t.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=r.a_(y)
if(m==null){m=q.a_(y)
if(m==null){m=p.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=o.a_(y)
if(m==null){m=n.a_(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dO(H.Q(y),m))}}return z.$1(new H.iF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dZ()
return a},
bf:function(a){var z
if(a==null)return new H.eG(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eG(a)},
kD:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
kM:function(a,b,c,d,e,f){H.h(a,"$iscr")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.z("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kM)
a.$identity=z
return z},
fq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isd){z.$reflectionInfo=d
x=H.hL(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kF,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dc:H.cn
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dk(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fn:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fn(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.B()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.bW("self")
$.bh=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.B()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.bW("self")
$.bh=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fo:function(a,b,c,d){var z,y
z=H.cn
y=H.dc
switch(b?-1:a){case 0:throw H.b(H.hU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fp:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.bW("self")
$.bh=z}y=$.db
if(y==null){y=H.bW("receiver")
$.db=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fo(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.B()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.B()
$.ar=y+1
return new Function(z+y+"}")()},
cY:function(a,b,c,d,e,f,g){var z,y
z=J.bk(H.bT(b))
H.r(c)
y=!!J.M(d).$isd?J.bk(d):d
return H.fq(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.an(a,"String"))},
kB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.an(a,"double"))},
f1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.an(a,"num"))},
eU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.an(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.an(a,"int"))},
d7:function(a,b){throw H.b(H.an(a,H.Q(b).substring(3)))},
kU:function(a,b){var z=J.be(b)
throw H.b(H.fm(a,z.aY(b,3,z.gk(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.d7(a,b)},
a5:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.kU(a,b)},
f2:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.M(a)[b])return a
H.d7(a,b)},
bT:function(a){if(a==null)return a
if(!!J.M(a).$isd)return a
throw H.b(H.an(a,"List"))},
kO:function(a,b){if(a==null)return a
if(!!J.M(a).$isd)return a
if(J.M(a)[b])return a
H.d7(a,b)},
eV:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bS:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eV(J.M(a))
if(z==null)return!1
y=H.eZ(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.cU)return a
$.cU=!0
try{if(H.bS(a,b))return a
z=H.bU(b)
y=H.an(a,z)
throw H.b(y)}finally{$.cU=!1}},
d0:function(a,b){if(a!=null&&!H.cX(a,b))H.A(H.an(a,H.bU(b)))
return a},
eP:function(a){var z
if(a instanceof H.p){z=H.eV(J.M(a))
if(z!=null)return H.bU(z)
return"Closure"}return H.aY(a)},
kZ:function(a){throw H.b(new P.fw(H.Q(a)))},
eX:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
mc:function(a,b,c){return H.bg(a["$as"+H.j(c)],H.aO(b))},
bE:function(a,b,c,d){var z
H.Q(c)
H.r(d)
z=H.bg(a["$as"+H.j(c)],H.aO(b))
return z==null?null:z[d]},
ap:function(a,b,c){var z
H.Q(b)
H.r(c)
z=H.bg(a["$as"+H.j(b)],H.aO(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.r(b)
z=H.aO(a)
return z==null?null:z[b]},
bU:function(a){var z=H.aP(a,null)
return z},
aP:function(a,b){var z,y
H.w(b,"$isd",[P.k],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d3(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.j(b[y])}if('func' in a)return H.kn(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aP(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aP(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aP(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kC(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d3:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.k],"$asd")
if(a==null)return""
z=new P.cH("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}v="<"+z.i(0)+">"
return v},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bC:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aO(a)
y=J.M(a)
if(y[b]==null)return!1
return H.eS(H.bg(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.Q(b)
H.bT(c)
H.Q(d)
if(a==null)return a
z=H.bC(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d3(c,0,null)
throw H.b(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eS:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
ma:function(a,b,c){return a.apply(b,H.bg(J.M(b)["$as"+H.j(c)],H.aO(b)))},
f_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.f_(z)}return!1},
cX:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.f_(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bS(a,b)}y=J.M(a).constructor
x=H.aO(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aj(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.cX(a,b))throw H.b(H.an(a,H.bU(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cr"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bj" in y.prototype))return!1
w=y.prototype["$as"+"bj"]
v=H.bg(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bU(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eS(H.bg(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kS(m,b,l,d)},
kS:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
mb:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
kP:function(a){var z,y,x,w,v,u
z=H.Q($.eY.$1(a))
y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.eR.$2(a,z))
if(z!=null){y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cj(x)
$.cf[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ci[z]=x
return x}if(v==="-"){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f3(a,x)
if(v==="*")throw H.b(P.ep(z))
if(init.leafTags[z]===true){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f3(a,x)},
f3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d5(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.d5(a,!1,null,!!a.$isE)},
kR:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cj(z)
else return J.d5(z,c,null,null)},
kK:function(){if(!0===$.d2)return
$.d2=!0
H.kL()},
kL:function(){var z,y,x,w,v,u,t,s
$.cf=Object.create(null)
$.ci=Object.create(null)
H.kG()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f4.$1(v)
if(u!=null){t=H.kR(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kG:function(){var z,y,x,w,v,u,t
z=C.z()
z=H.bc(C.w,H.bc(C.B,H.bc(C.k,H.bc(C.k,H.bc(C.A,H.bc(C.x,H.bc(C.y(C.l),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eY=new H.kH(v)
$.eR=new H.kI(u)
$.f4=new H.kJ(t)},
bc:function(a,b){return a(b)||b},
f5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f6:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hK:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bk(z)
y=z[0]
x=z[1]
return new H.hK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ip:{"^":"a;a,b,c,d,e,f",
a_:function(a){var z,y,x
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
aw:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ei:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hu:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
dO:function(a,b){return new H.hu(a,b==null?null:b.method)}}},
h7:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
p:{
cz:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h7(a,y,z?null:b.receiver)}}},
iF:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l_:{"^":"p:21;a",
$1:function(a){if(!!J.M(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eG:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isam:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gcN:function(){return this},
$iscr:1,
gcN:function(){return this}},
e3:{"^":"p;"},
ia:{"^":"e3;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cm:{"^":"e3;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.br(this.a)
else y=typeof z!=="object"?J.aQ(z):H.br(z)
return(y^H.br(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
p:{
cn:function(a){return a.a},
dc:function(a){return a.c},
bW:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.bk(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iq:{"^":"X;a",
i:function(a){return this.a},
p:{
an:function(a,b){return new H.iq("TypeError: "+H.j(P.bY(a))+": type '"+H.eP(a)+"' is not a subtype of type '"+b+"'")}}},
fl:{"^":"X;a",
i:function(a){return this.a},
p:{
fm:function(a,b){return new H.fl("CastError: "+H.j(P.bY(a))+": type '"+H.eP(a)+"' is not a subtype of type '"+b+"'")}}},
hT:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
p:{
hU:function(a){return new H.hT(a)}}},
aJ:{"^":"hi;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gah:function(a){return new H.dH(this,[H.v(this,0)])},
co:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.c4(y,b)}else return this.eH(b)},
eH:function(a){var z=this.d
if(z==null)return!1
return this.bz(this.b5(z,J.aQ(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aM(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aM(w,b)
x=y==null?null:y.b
return x}else return this.eI(b)},
eI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b5(z,J.aQ(a)&0x3ffffff)
x=this.bz(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.v(this,0))
H.D(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ba()
this.b=z}this.bY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ba()
this.c=y}this.bY(y,b,c)}else{x=this.d
if(x==null){x=this.ba()
this.d=x}w=J.aQ(b)&0x3ffffff
v=this.b5(x,w)
if(v==null)this.bg(x,w,[this.bb(b,c)])
else{u=this.bz(v,b)
if(u>=0)v[u].b=c
else v.push(this.bb(b,c))}}},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.bi(this))
z=z.c}},
bY:function(a,b,c){var z
H.D(b,H.v(this,0))
H.D(c,H.v(this,1))
z=this.aM(a,b)
if(z==null)this.bg(a,b,this.bb(b,c))
else z.b=c},
dt:function(){this.r=this.r+1&67108863},
bb:function(a,b){var z,y
z=new H.ha(H.D(a,H.v(this,0)),H.D(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dt()
return z},
bz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
i:function(a){return P.dK(this)},
aM:function(a,b){return a[b]},
b5:function(a,b){return a[b]},
bg:function(a,b,c){a[b]=c},
dk:function(a,b){delete a[b]},
c4:function(a,b){return this.aM(a,b)!=null},
ba:function(){var z=Object.create(null)
this.bg(z,"<non-identifier-key>",z)
this.dk(z,"<non-identifier-key>")
return z},
$isdG:1},
ha:{"^":"a;a,b,0c,0d"},
dH:{"^":"fD;a,$ti",
gk:function(a){return this.a.a},
gR:function(a){var z,y
z=this.a
y=new H.hb(z,z.r,this.$ti)
y.c=z.e
return y}},
hb:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.bi(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kH:{"^":"p:21;a",
$1:function(a){return this.a(a)}},
kI:{"^":"p:25;a",
$2:function(a,b){return this.a(a,b)}},
kJ:{"^":"p:26;a",
$1:function(a){return this.a(H.Q(a))}},
h5:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdQ:1,
p:{
h6:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.fN("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kC:function(a){return J.dC(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cT:function(a){return a},
ax:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ay(b,a))},
km:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.b(H.kA(a,b,c))
return b},
hr:{"^":"m;","%":"DataView;ArrayBufferView;cD|eA|eB|hq|eC|eD|aL"},
cD:{"^":"hr;",
gk:function(a){return a.length},
$isE:1,
$asE:I.d_},
hq:{"^":"eB;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
m:function(a,b,c){H.r(b)
H.kB(c)
H.ax(b,a,a.length)
a[b]=c},
$asbZ:function(){return[P.x]},
$asq:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
$isd:1,
$asd:function(){return[P.x]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eD;",
m:function(a,b,c){H.r(b)
H.r(c)
H.ax(b,a,a.length)
a[b]=c},
$asbZ:function(){return[P.y]},
$asq:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]}},
lz:{"^":"aL;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lA:{"^":"aL;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lB:{"^":"aL;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lC:{"^":"aL;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lD:{"^":"aL;",
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lE:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hs:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.ax(b,a,a.length)
return a[b]},
aX:function(a,b,c){return new Uint8Array(a.subarray(b,H.km(b,c,a.length)))},
"%":";Uint8Array"},
eA:{"^":"cD+q;"},
eB:{"^":"eA+bZ;"},
eC:{"^":"cD+q;"},
eD:{"^":"eC+bZ;"}}],["","",,P,{"^":"",
j2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.j4(z),1)).observe(y,{childList:true})
return new P.j3(z,y,x)}else if(self.setImmediate!=null)return P.kw()
return P.kx()},
m_:[function(a){self.scheduleImmediate(H.bd(new P.j5(H.c(a,{func:1,ret:-1})),0))},"$1","kv",4,0,9],
m0:[function(a){self.setImmediate(H.bd(new P.j6(H.c(a,{func:1,ret:-1})),0))},"$1","kw",4,0,9],
m1:[function(a){P.cJ(C.h,H.c(a,{func:1,ret:-1}))},"$1","kx",4,0,9],
cJ:function(a,b){var z
H.c(b,{func:1,ret:-1})
z=C.c.a6(a.a,1000)
return P.k1(z<0?0:z,b)},
e7:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.aM]})
z=C.c.a6(a.a,1000)
return P.k2(z<0?0:z,b)},
kr:function(a,b){if(H.bS(a,{func:1,args:[P.a,P.am]}))return b.f3(a,null,P.a,P.am)
if(H.bS(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.bV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kq:function(){var z,y
for(;z=$.bb,z!=null;){$.bA=null
y=z.b
$.bb=y
if(y==null)$.bz=null
z.a.$0()}},
m9:[function(){$.cV=!0
try{P.kq()}finally{$.bA=null
$.cV=!1
if($.bb!=null)$.$get$cQ().$1(P.eT())}},"$0","eT",0,0,3],
eO:function(a){var z=new P.ev(H.c(a,{func:1,ret:-1}))
if($.bb==null){$.bz=z
$.bb=z
if(!$.cV)$.$get$cQ().$1(P.eT())}else{$.bz.b=z
$.bz=z}},
ku:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.eO(a)
$.bA=$.bz
return}y=new P.ev(a)
x=$.bA
if(x==null){y.b=z
$.bA=y
$.bb=y}else{y.b=x.b
x.b=y
$.bA=y
if(y.b==null)$.bz=y}},
kV:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.P
if(C.e===y){P.ce(null,null,C.e,a)
return}y.toString
P.ce(null,null,y,H.c(y.bo(a),z))},
e5:function(a,b){var z,y
z={func:1,ret:-1}
H.c(b,z)
y=$.P
if(y===C.e){y.toString
return P.cJ(a,b)}return P.cJ(a,H.c(y.bo(b),z))},
e6:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aM]}
H.c(b,z)
y=$.P
if(y===C.e){y.toString
return P.e7(a,b)}x=y.cl(b,P.aM)
$.P.toString
return P.e7(a,H.c(x,z))},
cd:function(a,b,c,d,e){var z={}
z.a=d
P.ku(new P.ks(z,e))},
eM:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eN:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kt:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
ce:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bo(d):c.em(d,-1)
P.eO(d)},
j4:{"^":"p:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j3:{"^":"p:22;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j5:{"^":"p:2;a",
$0:function(){this.a.$0()}},
j6:{"^":"p:2;a",
$0:function(){this.a.$0()}},
eJ:{"^":"a;a,0b,c",
d6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.k4(this,b),0),a)
else throw H.b(P.F("`setTimeout()` not found."))},
d7:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bd(new P.k3(this,a,Date.now(),b),0),a)
else throw H.b(P.F("Periodic timer."))},
$isaM:1,
p:{
k1:function(a,b){var z=new P.eJ(!0,0)
z.d6(a,b)
return z},
k2:function(a,b){var z=new P.eJ(!1,0)
z.d7(a,b)
return z}}},
k4:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k3:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.cX(w,x)}z.c=y
this.d.$1(z)}},
ba:{"^":"a;0a,b,c,d,e,$ti",
eM:function(a){if(this.c!==6)return!0
return this.b.b.bM(H.c(this.d,{func:1,ret:P.af,args:[P.a]}),a.a,P.af,P.a)},
eG:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.bS(z,{func:1,args:[P.a,P.am]}))return H.d0(w.fb(z,a.a,a.b,null,y,P.am),x)
else return H.d0(w.bM(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;ce:a<,b,0e0:c<,$ti",
cH:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.e){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kr(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.P,[c])
w=b==null?1:3
this.bZ(new P.ba(x,w,a,b,[z,c]))
return x},
fe:function(a,b){return this.cH(a,null,b)},
bZ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isba")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaF")
z=y.a
if(z<4){y.bZ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ce(null,null,z,H.c(new P.jk(this,a),{func:1,ret:-1}))}},
ca:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isba")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaF")
y=u.a
if(y<4){u.ca(a)
return}this.a=y
this.c=u.c}z.a=this.aO(a)
y=this.b
y.toString
P.ce(null,null,y,H.c(new P.jp(z,this),{func:1,ret:-1}))}},
bd:function(){var z=H.h(this.c,"$isba")
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c2:function(a){var z,y,x,w
z=H.v(this,0)
H.d0(a,{futureOr:1,type:z})
y=this.$ti
x=H.bC(a,"$isbj",y,"$asbj")
if(x){z=H.bC(a,"$isaF",y,null)
if(z)P.ex(a,this)
else P.jl(a,this)}else{w=this.bd()
H.D(a,z)
this.a=4
this.c=a
P.bx(this,w)}},
b1:[function(a,b){var z
H.h(b,"$isam")
z=this.bd()
this.a=8
this.c=new P.ag(a,b)
P.bx(this,z)},function(a){return this.b1(a,null)},"fk","$2","$1","gdh",4,2,41],
$isbj:1,
p:{
jl:function(a,b){var z,y,x
b.a=1
try{a.cH(new P.jm(b),new P.jn(b),null)}catch(x){z=H.aH(x)
y=H.bf(x)
P.kV(new P.jo(b,z,y))}},
ex:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaF")
if(z>=4){y=b.bd()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.h(b.c,"$isba")
b.a=2
b.c=a
a.ca(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isag")
y=y.b
u=v.a
t=v.b
y.toString
P.cd(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.h(r,"$isag")
y=y.b
u=r.a
t=r.b
y.toString
P.cd(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.js(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jr(x,b,r).$0()}else if((y&2)!==0)new P.jq(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.M(y).$isbj){if(y.a>=4){n=H.h(t.c,"$isba")
t.c=null
b=t.aO(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ex(y,t)
return}}m=b.b
n=H.h(m.c,"$isba")
m.c=null
b=m.aO(n)
y=x.a
u=x.b
if(!y){H.D(u,H.v(m,0))
m.a=4
m.c=u}else{H.h(u,"$isag")
m.a=8
m.c=u}z.a=m
y=m}}}},
jk:{"^":"p:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
jp:{"^":"p:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
jm:{"^":"p:19;a",
$1:function(a){var z=this.a
z.a=0
z.c2(a)}},
jn:{"^":"p:29;a",
$2:function(a,b){this.a.b1(a,H.h(b,"$isam"))},
$1:function(a){return this.$2(a,null)}},
jo:{"^":"p:2;a,b,c",
$0:function(){this.a.b1(this.b,this.c)}},
js:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cF(H.c(w.d,{func:1}),null)}catch(v){y=H.aH(v)
x=H.bf(v)
if(this.d){w=H.h(this.a.a.c,"$isag").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isag")
else u.b=new P.ag(y,x)
u.a=!0
return}if(!!J.M(z).$isbj){if(z instanceof P.aF&&z.gce()>=4){if(z.gce()===8){w=this.b
w.b=H.h(z.ge0(),"$isag")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fe(new P.jt(t),null)
w.a=!1}}},
jt:{"^":"p:31;a",
$1:function(a){return this.a}},
jr:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.D(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.bM(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aH(t)
y=H.bf(t)
x=this.a
x.b=new P.ag(z,y)
x.a=!0}}},
jq:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isag")
w=this.c
if(w.eM(z)&&w.e!=null){v=this.b
v.b=w.eG(z)
v.a=!1}}catch(u){y=H.aH(u)
x=H.bf(u)
w=H.h(this.a.a.c,"$isag")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ag(y,x)
s.a=!0}}},
ev:{"^":"a;a,0b"},
cG:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aF(0,$.P,[P.y])
z.a=0
this.eL(new P.id(z,this),!0,new P.ie(z,y),y.gdh())
return y}},
id:{"^":"p;a,b",
$1:function(a){H.D(a,H.ap(this.b,"cG",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.ap(this.b,"cG",0)]}}},
ie:{"^":"p:2;a,b",
$0:function(){this.b.c2(this.a.a)}},
e0:{"^":"a;$ti"},
ic:{"^":"a;"},
aM:{"^":"a;"},
ag:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
ka:{"^":"a;",$islZ:1},
ks:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.i(0)
throw x}},
jO:{"^":"ka;",
fc:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.e===$.P){a.$0()
return}P.eM(null,null,this,a,-1)}catch(x){z=H.aH(x)
y=H.bf(x)
P.cd(null,null,this,z,H.h(y,"$isam"))}},
fd:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.e===$.P){a.$1(b)
return}P.eN(null,null,this,a,b,-1,c)}catch(x){z=H.aH(x)
y=H.bf(x)
P.cd(null,null,this,z,H.h(y,"$isam"))}},
em:function(a,b){return new P.jQ(this,H.c(a,{func:1,ret:b}),b)},
bo:function(a){return new P.jP(this,H.c(a,{func:1,ret:-1}))},
cl:function(a,b){return new P.jR(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
cF:function(a,b){H.c(a,{func:1,ret:b})
if($.P===C.e)return a.$0()
return P.eM(null,null,this,a,b)},
bM:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.P===C.e)return a.$1(b)
return P.eN(null,null,this,a,b,c,d)},
fb:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.P===C.e)return a.$2(b,c)
return P.kt(null,null,this,a,b,c,d,e,f)},
f3:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
jQ:{"^":"p;a,b,c",
$0:function(){return this.a.cF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"p:3;a,b",
$0:function(){return this.a.fc(this.b)}},
jR:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.fd(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hd:function(a,b,c){H.bT(a)
return H.w(H.kD(a,new H.aJ(0,0,[b,c])),"$isdG",[b,c],"$asdG")},
hc:function(a,b){return new H.aJ(0,0,[a,b])},
he:function(a,b,c,d){return new P.jA(0,0,[d])},
h_:function(a,b,c){var z,y
if(P.cW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bB()
C.a.h(y,a)
try{P.kp(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.e1(b,H.kO(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cv:function(a,b,c){var z,y,x
if(P.cW(a))return b+"..."+c
z=new P.cH(b)
y=$.$get$bB()
C.a.h(y,a)
try{x=z
x.a=P.e1(x.gan(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gan()+c
y=z.gan()
return y.charCodeAt(0)==0?y:y},
cW:function(a){var z,y
for(z=0;y=$.$get$bB(),z<y.length;++z)if(a===y[z])return!0
return!1},
kp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gR(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
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
dK:function(a){var z,y,x
z={}
if(P.cW(a))return"{...}"
y=new P.cH("")
try{C.a.h($.$get$bB(),a)
x=y
x.a=x.gan()+"{"
z.a=!0
J.fd(a,new P.hj(z,y))
z=y
z.a=z.gan()+"}"}finally{z=$.$get$bB()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gan()
return z.charCodeAt(0)==0?z:z},
jA:{"^":"ju;a,0b,0c,0d,0e,0f,r,$ti",
gR:function(a){return P.ez(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.D(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cS()
this.b=z}return this.c0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cS()
this.c=y}return this.c0(y,b)}else return this.d8(0,b)},
d8:function(a,b){var z,y,x
H.D(b,H.v(this,0))
z=this.d
if(z==null){z=P.cS()
this.d=z}y=this.c3(b)
x=z[y]
if(x==null)z[y]=[this.b0(b)]
else{if(this.c7(x,b)>=0)return!1
x.push(this.b0(b))}return!0},
E:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cb(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cb(this.c,b)
else return this.dV(0,b)},
dV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dq(z,b)
x=this.c7(y,b)
if(x<0)return!1
this.cg(y.splice(x,1)[0])
return!0},
c0:function(a,b){H.D(b,H.v(this,0))
if(H.h(a[b],"$iscR")!=null)return!1
a[b]=this.b0(b)
return!0},
cb:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscR")
if(z==null)return!1
this.cg(z)
delete a[b]
return!0},
c1:function(){this.r=this.r+1&67108863},
b0:function(a){var z,y
z=new P.cR(H.D(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.c1()
return z},
cg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.c1()},
c3:function(a){return J.aQ(a)&0x3ffffff},
dq:function(a,b){return a[this.c3(b)]},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
p:{
cS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cR:{"^":"a;a,0b,0c"},
jB:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.bi(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.v(this,0))
this.c=z.b
return!0}}},
p:{
ez:function(a,b,c){var z=new P.jB(a,b,[c])
z.c=a.e
return z}}},
ju:{"^":"hV;"},
c2:{"^":"jC;",$isi:1,$isd:1},
q:{"^":"a;$ti",
gR:function(a){return new H.dI(a,this.gk(a),0,[H.bE(this,a,"q",0)])},
F:function(a,b){return this.j(a,b)},
ff:function(a,b){var z,y,x
z=H.f([],[H.bE(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
bP:function(a){return this.ff(a,!0)},
i:function(a){return P.cv(a,"[","]")}},
hi:{"^":"ad;"},
hj:{"^":"p:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ad:{"^":"a;$ti",
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bE(this,a,"ad",0),H.bE(this,a,"ad",1)]})
for(z=J.bF(this.gah(a));z.D();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.aR(this.gah(a))},
i:function(a){return P.dK(a)},
$isa_:1},
hX:{"^":"a;$ti",
i:function(a){return P.cv(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.d8("index"))
if(b<0)H.A(P.ah(b,0,null,"index",null))
for(z=P.ez(this,this.r,H.v(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.b(P.O(b,this,"index",null,y))},
$isi:1},
hV:{"^":"hX;"},
jC:{"^":"a+q;"}}],["","",,P,{"^":"",cp:{"^":"a;$ti"},dn:{"^":"ic;$ti"},fF:{"^":"cp;",
$ascp:function(){return[P.k,[P.d,P.y]]}},iM:{"^":"fF;a"},iN:{"^":"dn;",
eu:function(a,b,c){var z,y,x,w
z=a.length
P.dU(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k9(0,0,x)
if(w.dm(a,b,z)!==z)w.ci(C.b.bu(a,z-1),0)
return C.D.aX(x,0,w.b)},
es:function(a){return this.eu(a,0,null)},
$asdn:function(){return[P.k,[P.d,P.y]]}},k9:{"^":"a;a,b,c",
ci:function(a,b){var z,y,x,w,v
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
dm:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.bu(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.aL(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.ci(w,C.b.aL(a,u)))x=u}else if(w<=2047){v=this.b
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
fH:function(a){var z=J.M(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.aY(a)+"'"},
hf:function(a,b,c,d){var z,y
H.D(b,d)
z=J.h1(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hg:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gR(a);x.D();)C.a.h(y,H.D(x.gO(x),c))
if(b)return y
return H.w(J.bk(y),"$isd",z,"$asd")},
cI:function(a,b,c){var z,y
z=P.y
H.w(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.w(a,"$isaV",[z],"$asaV")
y=a.length
c=P.dU(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.T()
z=c<y}else z=!0
return H.dT(z?C.a.aX(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.w(a,"$isi",[P.y],"$asi")
z=J.bF(a)
for(y=0;y<b;++y)if(!z.D())throw H.b(P.ah(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gO(z))
return H.dT(x)},
hM:function(a,b,c){return new H.h5(a,H.h6(a,!1,!0,!1))},
eL:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.y],"$asd")
if(c===C.j){z=$.$get$eK().b
z=z.test(b)}else z=!1
if(z)return b
y=C.r.es(H.D(b,H.ap(c,"cp",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hG(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fH(a)},
z:function(a){return new P.ew(a)},
d6:function(a){H.kT(a)},
af:{"^":"a;"},
"+bool":0,
ab:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ab))return!1
return this.a===b.a&&this.b===b.b},
a2:function(a,b){return C.c.a2(this.a,H.h(b,"$isab").a)},
gP:function(a){var z=this.a
return(z^C.c.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fx(H.hF(this))
y=P.bG(H.hD(this))
x=P.bG(H.hz(this))
w=P.bG(H.hA(this))
v=P.bG(H.hC(this))
u=P.bG(H.hE(this))
t=P.fy(H.hB(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isaa:1,
$asaa:function(){return[P.ab]},
p:{
fx:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
x:{"^":"V;"},
"+double":0,
au:{"^":"a;a",
T:function(a,b){return C.c.T(this.a,H.h(b,"$isau").a)},
ai:function(a,b){return C.c.ai(this.a,H.h(b,"$isau").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
a2:function(a,b){return C.c.a2(this.a,H.h(b,"$isau").a)},
i:function(a){var z,y,x,w,v
z=new P.fC()
y=this.a
if(y<0)return"-"+new P.au(0-y).i(0)
x=z.$1(C.c.a6(y,6e7)%60)
w=z.$1(C.c.a6(y,1e6)%60)
v=new P.fB().$1(y%1e6)
return""+C.c.a6(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
$isaa:1,
$asaa:function(){return[P.au]},
p:{
dx:function(a,b,c,d,e,f){return new P.au(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fB:{"^":"p:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fC:{"^":"p:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dP:{"^":"X;",
i:function(a){return"Throw of null."}},
aI:{"^":"X;a,b,c,d",
gb3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gb3()+y+x
if(!this.a)return w
v=this.gb2()
u=P.bY(this.b)
return w+v+": "+H.j(u)},
p:{
bV:function(a,b,c){return new P.aI(!0,a,b,c)},
d8:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
c5:{"^":"aI;e,f,a,b,c,d",
gb3:function(){return"RangeError"},
gb2:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
p:{
bP:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
dU:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.b(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.b(P.ah(b,a,c,"end",f))
return b}return c}}},
fP:{"^":"aI;e,k:f>,a,b,c,d",
gb3:function(){return"RangeError"},
gb2:function(){if(J.f8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
p:{
O:function(a,b,c,d,e){var z=H.r(e!=null?e:J.aR(b))
return new P.fP(b,z,!0,a,c,"Index out of range")}}},
iH:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
F:function(a){return new P.iH(a)}}},
iE:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ep:function(a){return new P.iE(a)}}},
i9:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
ft:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bY(z))+"."},
p:{
bi:function(a){return new P.ft(a)}}},
hv:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
dZ:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fw:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ew:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fN:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.aY(x,0,75)+"..."
return y+"\n"+x}},
y:{"^":"V;"},
"+int":0,
i:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gR(this)
for(y=0;z.D();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.d8("index"))
if(b<0)H.A(P.ah(b,0,null,"index",null))
for(z=this.gR(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.b(P.O(b,this,"index",null,y))},
i:function(a){return P.h_(this,"(",")")}},
cw:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
a_:{"^":"a;$ti"},
H:{"^":"a;",
gP:function(a){return P.a.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"a;",$isaa:1,
$asaa:function(){return[P.V]}},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gP:function(a){return H.br(this)},
i:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.i(this)}},
am:{"^":"a;"},
k:{"^":"a;",$isaa:1,
$asaa:function(){return[P.k]},
$isdQ:1},
"+String":0,
cH:{"^":"a;an:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e1:function(a,b,c){var z=J.bF(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.D())}else{a+=H.j(z.gO(z))
for(;z.D();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
fg:function(a){var z=document.createElement("a")
return z},
di:function(a,b){var z=document.createElement("canvas")
return z},
fE:function(a){H.h(a,"$isa7")
return"wheel"},
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ey:function(a,b,c,d){var z,y
z=W.ca(W.ca(W.ca(W.ca(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eQ:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.e)return a
return z.cl(a,b)},
bI:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l1:{"^":"m;0k:length=","%":"AccessibleNodeList"},
l2:{"^":"bI;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l3:{"^":"bI;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fk:{"^":"m;","%":";Blob"},
co:{"^":"bI;",
bS:function(a,b,c){var z=a.getContext(b,P.ky(c,null))
return z},
$isco:1,
"%":"HTMLCanvasElement"},
l9:{"^":"I;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lb:{"^":"fv;0k:length=","%":"CSSPerspective"},
aS:{"^":"m;",$isaS:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lc:{"^":"ja;0k:length=",
cO:function(a,b){var z=a.getPropertyValue(this.dd(a,b))
return z==null?"":z},
dd:function(a,b){var z,y
z=$.$get$dp()
y=z[b]
if(typeof y==="string")return y
y=this.e8(a,b)
z[b]=y
return y},
e8:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fz()+b
if(z in a)return z
return b},
gbp:function(a){return a.bottom},
ga7:function(a){return a.height},
gas:function(a){return a.left},
gbL:function(a){return a.right},
gaI:function(a){return a.top},
gaa:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fu:{"^":"a;",
gas:function(a){return this.cO(a,"left")}},
dq:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fv:{"^":"m;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ld:{"^":"dq;0k:length=","%":"CSSTransformValue"},
le:{"^":"dq;0k:length=","%":"CSSUnparsedValue"},
lf:{"^":"m;0k:length=","%":"DataTransferItemList"},
lg:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lh:{"^":"jc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.w(c,"$isa0",[P.V],"$asa0")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a0,P.V]]},
$asq:function(){return[[P.a0,P.V]]},
$isi:1,
$asi:function(){return[[P.a0,P.V]]},
$isd:1,
$asd:function(){return[[P.a0,P.V]]},
$ast:function(){return[[P.a0,P.V]]},
"%":"ClientRectList|DOMRectList"},
fA:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaa(a))+" x "+H.j(this.ga7(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isa0",[P.V],"$asa0")
if(!z)return!1
z=J.bD(b)
return a.left===z.gas(b)&&a.top===z.gaI(b)&&this.gaa(a)===z.gaa(b)&&this.ga7(a)===z.ga7(b)},
gP:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF,this.ga7(a)&0x1FFFFFFF)},
gbp:function(a){return a.bottom},
ga7:function(a){return a.height},
gas:function(a){return a.left},
gbL:function(a){return a.right},
gaI:function(a){return a.top},
gaa:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.V]},
"%":";DOMRectReadOnly"},
li:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.Q(c)
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.k]},
$asq:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$ast:function(){return[P.k]},
"%":"DOMStringList"},
lj:{"^":"m;0k:length=","%":"DOMTokenList"},
j9:{"^":"c2;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.h(z[b],"$isW")},
m:function(a,b,c){var z
H.r(b)
H.h(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var z=this.bP(this)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asq:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
W:{"^":"I;",
gcm:function(a){return new W.j9(a,a.children)},
gcn:function(a){return P.hJ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
ac:{"^":"m;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"m;",
ck:["cT",function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(c!=null)this.d9(a,b,c,!1)}],
d9:function(a,b,c,d){return a.addEventListener(b,H.bd(H.c(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eE|eF|eH|eI"},
aT:{"^":"fk;",$isaT:1,"%":"File"},
lk:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaT")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aT]},
$asq:function(){return[W.aT]},
$isi:1,
$asi:function(){return[W.aT]},
$isd:1,
$asd:function(){return[W.aT]},
$ast:function(){return[W.aT]},
"%":"FileList"},
ll:{"^":"a7;0k:length=","%":"FileWriter"},
lm:{"^":"bI;0k:length=","%":"HTMLFormElement"},
aU:{"^":"m;",$isaU:1,"%":"Gamepad"},
ln:{"^":"m;0k:length=","%":"History"},
lo:{"^":"jw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isI")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ast:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bl:{"^":"cK;",$isbl:1,"%":"KeyboardEvent"},
lt:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lu:{"^":"m;0k:length=","%":"MediaList"},
lv:{"^":"a7;",
ck:function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.cT(a,b,c,!1)},
"%":"MessagePort"},
lw:{"^":"jD;",
j:function(a,b){return P.aG(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gah:function(a){var z=H.f([],[P.k])
this.H(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.k,null]},
$isa_:1,
$asa_:function(){return[P.k,null]},
"%":"MIDIInputMap"},
hn:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lx:{"^":"jE;",
j:function(a,b){return P.aG(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gah:function(a){var z=H.f([],[P.k])
this.H(a,new W.ho(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.k,null]},
$isa_:1,
$asa_:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
ho:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aW:{"^":"m;",$isaW:1,"%":"MimeType"},
ly:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaW")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aW]},
$asq:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$isd:1,
$asd:function(){return[W.aW]},
$ast:function(){return[W.aW]},
"%":"MimeTypeArray"},
al:{"^":"cK;",$isal:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j8:{"^":"c2;a",
m:function(a,b,c){var z,y
H.r(b)
H.h(c,"$isI")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gR:function(a){var z=this.a.childNodes
return new W.dz(z,z.length,-1,[H.bE(C.E,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asq:function(){return[W.I]},
$asi:function(){return[W.I]},
$asd:function(){return[W.I]}},
I:{"^":"a7;",
f7:function(a,b){var z,y
try{z=a.parentNode
J.fa(z,b,a)}catch(y){H.aH(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.cU(a):z},
dY:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ht:{"^":"jI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isI")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ast:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
aX:{"^":"m;0k:length=",$isaX:1,"%":"Plugin"},
lH:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaX")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aX]},
$asq:function(){return[W.aX]},
$isi:1,
$asi:function(){return[W.aX]},
$isd:1,
$asd:function(){return[W.aX]},
$ast:function(){return[W.aX]},
"%":"PluginArray"},
lJ:{"^":"jS;",
j:function(a,b){return P.aG(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gah:function(a){var z=H.f([],[P.k])
this.H(a,new W.hS(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.k,null]},
$isa_:1,
$asa_:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hS:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lK:{"^":"bI;0k:length=","%":"HTMLSelectElement"},
aZ:{"^":"a7;",$isaZ:1,"%":"SourceBuffer"},
lL:{"^":"eF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaZ")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aZ]},
$asq:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$ast:function(){return[W.aZ]},
"%":"SourceBufferList"},
b_:{"^":"m;",$isb_:1,"%":"SpeechGrammar"},
lM:{"^":"jU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb_")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b_]},
$asq:function(){return[W.b_]},
$isi:1,
$asi:function(){return[W.b_]},
$isd:1,
$asd:function(){return[W.b_]},
$ast:function(){return[W.b_]},
"%":"SpeechGrammarList"},
b0:{"^":"m;0k:length=",$isb0:1,"%":"SpeechRecognitionResult"},
lO:{"^":"jX;",
j:function(a,b){return a.getItem(H.Q(b))},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gah:function(a){var z=H.f([],[P.k])
this.H(a,new W.ib(z))
return z},
gk:function(a){return a.length},
$asad:function(){return[P.k,P.k]},
$isa_:1,
$asa_:function(){return[P.k,P.k]},
"%":"Storage"},
ib:{"^":"p:36;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b1:{"^":"m;",$isb1:1,"%":"CSSStyleSheet|StyleSheet"},
b2:{"^":"a7;",$isb2:1,"%":"TextTrack"},
b3:{"^":"a7;",$isb3:1,"%":"TextTrackCue|VTTCue"},
lR:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb3")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b3]},
$asq:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$isd:1,
$asd:function(){return[W.b3]},
$ast:function(){return[W.b3]},
"%":"TextTrackCueList"},
lS:{"^":"eI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb2")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b2]},
$asq:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isd:1,
$asd:function(){return[W.b2]},
$ast:function(){return[W.b2]},
"%":"TextTrackList"},
lT:{"^":"m;0k:length=","%":"TimeRanges"},
b4:{"^":"m;",$isb4:1,"%":"Touch"},
b5:{"^":"cK;",$isb5:1,"%":"TouchEvent"},
lU:{"^":"k6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb4")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b4]},
$asq:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$ast:function(){return[W.b4]},
"%":"TouchList"},
lV:{"^":"m;0k:length=","%":"TrackDefaultList"},
cK:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lX:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
lY:{"^":"a7;0k:length=","%":"VideoTrackList"},
bw:{"^":"al;",
gex:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.F("deltaY is not supported"))},
gew:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.F("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
j1:{"^":"a7;",
e_:function(a,b){return a.requestAnimationFrame(H.bd(H.c(b,{func:1,ret:-1,args:[P.V]}),1))},
dl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m2:{"^":"kc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaS")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aS]},
$asq:function(){return[W.aS]},
$isi:1,
$asi:function(){return[W.aS]},
$isd:1,
$asd:function(){return[W.aS]},
$ast:function(){return[W.aS]},
"%":"CSSRuleList"},
m3:{"^":"fA;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isa0",[P.V],"$asa0")
if(!z)return!1
z=J.bD(b)
return a.left===z.gas(b)&&a.top===z.gaI(b)&&a.width===z.gaa(b)&&a.height===z.ga7(b)},
gP:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga7:function(a){return a.height},
gaa:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m5:{"^":"ke;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isaU")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aU]},
$asq:function(){return[W.aU]},
$isi:1,
$asi:function(){return[W.aU]},
$isd:1,
$asd:function(){return[W.aU]},
$ast:function(){return[W.aU]},
"%":"GamepadList"},
m6:{"^":"kg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isI")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ast:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m7:{"^":"ki;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb0")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b0]},
$asq:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$ast:function(){return[W.b0]},
"%":"SpeechRecognitionResultList"},
m8:{"^":"kk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.r(b)
H.h(c,"$isb1")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b1]},
$asq:function(){return[W.b1]},
$isi:1,
$asi:function(){return[W.b1]},
$isd:1,
$asd:function(){return[W.b1]},
$ast:function(){return[W.b1]},
"%":"StyleSheetList"},
jf:{"^":"cG;a,b,c,$ti",
eL:function(a,b,c,d){var z=H.v(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
m4:{"^":"jf;a,b,c,$ti"},
jg:{"^":"e0;a,b,c,d,e,$ti",
ec:function(){var z=this.d
if(z!=null&&this.a<=0)J.fb(this.b,this.c,z,!1)},
p:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eQ(new W.jh(c),W.ac)
z=new W.jg(0,a,b,z,!1,[e])
z.ec()
return z}}},
jh:{"^":"p:7;a",
$1:function(a){return this.a.$1(H.h(a,"$isac"))}},
t:{"^":"a;$ti",
gR:function(a){return new W.dz(a,this.gk(a),-1,[H.bE(this,a,"t",0)])}},
dz:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f9(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
ja:{"^":"m+fu;"},
jb:{"^":"m+q;"},
jc:{"^":"jb+t;"},
jd:{"^":"m+q;"},
je:{"^":"jd+t;"},
ji:{"^":"m+q;"},
jj:{"^":"ji+t;"},
jv:{"^":"m+q;"},
jw:{"^":"jv+t;"},
jD:{"^":"m+ad;"},
jE:{"^":"m+ad;"},
jF:{"^":"m+q;"},
jG:{"^":"jF+t;"},
jH:{"^":"m+q;"},
jI:{"^":"jH+t;"},
jL:{"^":"m+q;"},
jM:{"^":"jL+t;"},
jS:{"^":"m+ad;"},
eE:{"^":"a7+q;"},
eF:{"^":"eE+t;"},
jT:{"^":"m+q;"},
jU:{"^":"jT+t;"},
jX:{"^":"m+ad;"},
k_:{"^":"m+q;"},
k0:{"^":"k_+t;"},
eH:{"^":"a7+q;"},
eI:{"^":"eH+t;"},
k5:{"^":"m+q;"},
k6:{"^":"k5+t;"},
kb:{"^":"m+q;"},
kc:{"^":"kb+t;"},
kd:{"^":"m+q;"},
ke:{"^":"kd+t;"},
kf:{"^":"m+q;"},
kg:{"^":"kf+t;"},
kh:{"^":"m+q;"},
ki:{"^":"kh+t;"},
kj:{"^":"m+q;"},
kk:{"^":"kj+t;"}}],["","",,P,{"^":"",
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.hc(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.Q(y[w])
z.m(0,v,a[v])}return z},
ky:function(a,b){var z={}
a.H(0,new P.kz(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
fz:function(){var z,y
z=$.ds
if(z!=null)return z
y=$.dt
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dt=y}if(y)z="-moz-"
else{y=$.du
if(y==null){y=!P.dw()&&J.ck(window.navigator.userAgent,"Trident/",0)
$.du=y}if(y)z="-ms-"
else z=P.dw()?"-o-":"-webkit-"}$.ds=z
return z},
kz:{"^":"p:16;a",
$2:function(a,b){this.a[a]=b}},
fK:{"^":"c2;a,b",
gaN:function(){var z,y,x
z=this.b
y=H.ap(z,"q",0)
x=W.W
return new H.hk(new H.j_(z,H.c(new P.fL(),{func:1,ret:P.af,args:[y]}),[y]),H.c(new P.fM(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.r(b)
H.h(c,"$isW")
z=this.gaN()
J.fe(z.b.$1(J.cl(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aR(this.gaN().a)},
j:function(a,b){var z=this.gaN()
return z.b.$1(J.cl(z.a,b))},
gR:function(a){var z=P.hg(this.gaN(),!1,W.W)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asq:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
fL:{"^":"p:23;",
$1:function(a){return!!J.M(H.h(a,"$isI")).$isW}},
fM:{"^":"p:24;",
$1:function(a){return H.a5(H.h(a,"$isI"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:{"^":"a;$ti",
gbL:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.D(z+this.c,H.v(this,0))},
gbp:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.D(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bC(b,"$isa0",[P.V],"$asa0")
if(!z)return!1
z=this.a
y=J.bD(b)
x=y.gas(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaI(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.v(this,0)
if(H.D(z+this.c,w)===y.gbL(b)){if(typeof x!=="number")return x.B()
z=H.D(x+this.d,w)===y.gbp(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.aQ(z)
x=this.b
w=J.aQ(x)
if(typeof z!=="number")return z.B()
v=H.v(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.D(x+this.d,v)
return P.jx(P.cb(P.cb(P.cb(P.cb(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a0:{"^":"jN;as:a>,aI:b>,aa:c>,a7:d>,$ti",p:{
hJ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.T()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.T()
if(d<0)y=-d*0
else y=d
return new P.a0(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bm:{"^":"m;",$isbm:1,"%":"SVGLength"},ls:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.r(b)
H.h(c,"$isbm")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bm]},
$isi:1,
$asi:function(){return[P.bm]},
$isd:1,
$asd:function(){return[P.bm]},
$ast:function(){return[P.bm]},
"%":"SVGLengthList"},bp:{"^":"m;",$isbp:1,"%":"SVGNumber"},lF:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.r(b)
H.h(c,"$isbp")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bp]},
$isi:1,
$asi:function(){return[P.bp]},
$isd:1,
$asd:function(){return[P.bp]},
$ast:function(){return[P.bp]},
"%":"SVGNumberList"},lI:{"^":"m;0k:length=","%":"SVGPointList"},lP:{"^":"jZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.r(b)
H.Q(c)
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asq:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$ast:function(){return[P.k]},
"%":"SVGStringList"},lQ:{"^":"W;",
gcm:function(a){return new P.fK(a,new W.j8(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bt:{"^":"m;",$isbt:1,"%":"SVGTransform"},lW:{"^":"k8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.r(b)
H.h(c,"$isbt")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bt]},
$isi:1,
$asi:function(){return[P.bt]},
$isd:1,
$asd:function(){return[P.bt]},
$ast:function(){return[P.bt]},
"%":"SVGTransformList"},jy:{"^":"m+q;"},jz:{"^":"jy+t;"},jJ:{"^":"m+q;"},jK:{"^":"jJ+t;"},jY:{"^":"m+q;"},jZ:{"^":"jY+t;"},k7:{"^":"m+q;"},k8:{"^":"k7+t;"}}],["","",,P,{"^":"",l4:{"^":"m;0k:length=","%":"AudioBuffer"},l5:{"^":"j7;",
j:function(a,b){return P.aG(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gah:function(a){var z=H.f([],[P.k])
this.H(a,new P.fi(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.k,null]},
$isa_:1,
$asa_:function(){return[P.k,null]},
"%":"AudioParamMap"},fi:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l6:{"^":"a7;0k:length=","%":"AudioTrackList"},fj:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lG:{"^":"fj;0k:length=","%":"OfflineAudioContext"},j7:{"^":"m+ad;"}}],["","",,P,{"^":"",dX:{"^":"m;",$isdX:1,"%":"WebGLRenderingContext"},iz:{"^":"m;",$isiz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lN:{"^":"jW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return P.aG(a.item(b))},
m:function(a,b,c){H.r(b)
H.h(c,"$isa_")
throw H.b(P.F("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$isi:1,
$asi:function(){return[[P.a_,,,]]},
$isd:1,
$asd:function(){return[[P.a_,,,]]},
$ast:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},jV:{"^":"m+q;"},jW:{"^":"jV+t;"}}],["","",,O,{"^":"",as:{"^":"a;0a,0b,0c,0d,$ti",
aZ:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cR:function(a,b,c){var z={func:1,ret:-1,args:[P.y,[P.i,H.ap(this,"as",0)]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aJ:function(a,b){return this.cR(a,null,b)},
c9:function(a){H.w(a,"$isi",[H.ap(this,"as",0)],"$asi")
return!0},
c8:function(a,b){var z
H.w(b,"$isi",[H.ap(this,"as",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.v(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ap(this,"as",0)
H.D(b,z)
z=[z]
if(this.c9(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.c8(x,H.f([b],z))}},
bk:function(a,b){var z,y
H.w(b,"$isi",[H.ap(this,"as",0)],"$asi")
if(this.c9(b)){z=this.a
y=z.length
C.a.bk(z,b)
this.c8(y,b)}},
$isi:1,
p:{
dl:function(a){var z=new O.as([a])
z.aZ(a)
return z}}},cA:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
d1:function(a){var z=this.b
if(!(z==null))z.v(a)},
aj:function(){return this.d1(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gbA(z)
else return V.bN()},
cD:function(a){var z=this.a
if(a==null)C.a.h(z,V.bN())
else C.a.h(z,a)
this.aj()},
bH:function(){var z=this.a
if(z.length>0){z.pop()
this.aj()}}}}],["","",,E,{"^":"",da:{"^":"a;"},az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
c_:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();){y=z.d
if(y.f==null)y.c_()}},
sax:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.c(this.gcA(),{func:1,ret:-1,args:[D.l]})
C.a.E(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.c(this.gcA(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.J("shape",z,this.c,this,[F.ae])
w.b=!0
this.Y(w)}},
sau:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.c(this.gcB(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gu()
z.toString
y=H.c(this.gcB(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}this.c_()
w=new D.J("technique",x,this.f,this,[O.c6])
w.b=!0
this.Y(w)}},
sa3:function(a){var z,y,x,w
if(!J.B(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.c(this.gcz(),{func:1,ret:-1,args:[D.l]})
C.a.E(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.c(this.gcz(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.J("mover",z,a,this,[U.a2])
w.b=!0
this.Y(w)}},
av:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aw(0,b,this):null
if(!J.B(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.bM])
w.b=!0
this.Y(w)}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();)z.d.av(0,b)},
a8:function(a){var z,y,x,w,v,u
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.l(0,z.gV(z)))
z.aj()
a.cE(this.f)
z=a.dy
x=(z&&C.a).gbA(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.j(0,"Inspection")
if(w==null){z=a.a
w=new A.fQ(z,"Inspection")
w.d_(z,"Inspection")
y=$.fV
v=$.fS
w.c=w.c6(y,35633)
w.d=w.c6(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.eU(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.A(P.z("Failed to link shader: "+H.j(u)))}w.e3()
w.e5()
w.x=w.f.j(0,"posAttr")
w.y=w.f.j(0,"normAttr")
w.z=w.f.j(0,"clrAttr")
w.Q=w.f.j(0,"binmAttr")
w.ch=H.a5(w.r.j(0,"lightVec"),"$iseo")
w.cx=H.a5(w.r.j(0,"ambientClr"),"$iscM")
w.cy=H.a5(w.r.j(0,"diffuseClr"),"$iscM")
w.db=H.a5(w.r.j(0,"weightScalar"),"$isen")
w.dx=H.a5(w.r.j(0,"viewMat"),"$isc8")
w.dy=H.a5(w.r.j(0,"viewObjMatrix"),"$isc8")
w.fr=H.a5(w.r.j(0,"projViewObjMatrix"),"$isc8")
if(a.fr.co(0,"Inspection"))H.A(P.z('Shader cache already contains a shader by the name "Inspection".'))
a.fr.m(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.af()
z=this.d
y=z.e
if(!(y==null))++y.c
z.d.br()
z.a.br()
z=z.e
if(!(z==null))z.a9(0)
z=this.d
y=z.e
if(!(y==null))++y.c
z.a.eo()
z=z.e
if(!(z==null))z.a9(0)
z=new Z.df()
z.a=new H.aJ(0,0,[P.k,Z.de])
this.e=z}z=x.a
a.a.useProgram(z.e)
z.f.ez()
y=x.r2
v=z.db
v.a.uniform1f(v.d,y)
y=x.b
v=z.ch
v.a.uniform3f(v.d,y.a,y.b,y.c)
y=a.db
y=y.gV(y)
v=z.dx
v.toString
v.aV(y.bQ(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gV(y)
v=a.dx
v=y.l(0,v.gV(v))
a.cx=v
y=v}v=z.dy
v.toString
v.aV(y.bQ(0,!0))
y=a.ch
if(y==null){y=a.z
if(y==null){y=a.cy
y=y.gV(y)
v=a.db
v=y.l(0,v.gV(v))
a.z=v
y=v}v=a.dx
v=y.l(0,v.gV(v))
a.ch=v
y=v}z=z.fr
z.toString
z.aV(y.bQ(0,!0))
z=this.e
if(z instanceof Z.df){a.a.blendFunc(1,1)
y=this.c
v=a.a
if(y==null){v.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
x.k4
a.a.enable(2929)}else{v.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(x.Q)x.cc(a,z,this.c,"shapeFill",x.ge6(),x.d,x.c)
x.r1
a.a.disable(2929)
a.a.blendFunc(1,1)
if(x.ch)x.cc(a,z,this.c,"wireFrame",x.ged(),x.f,x.e)
x.k4
a.a.enable(2929)}}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.ey()}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();)z.d.a8(a)
a.cC()
a.dx.bH()},
gu:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
Y:function(a){var z=this.z
if(!(z==null))z.v(a)},
L:function(){return this.Y(null)},
eT:[function(a){H.h(a,"$isl")
this.e=null
this.Y(a)},function(){return this.eT(null)},"fU","$1","$0","gcA",0,2,1],
eU:[function(a){this.Y(H.h(a,"$isl"))},function(){return this.eU(null)},"fV","$1","$0","gcB",0,2,1],
eS:[function(a){this.Y(H.h(a,"$isl"))},function(){return this.eS(null)},"fT","$1","$0","gcz",0,2,1],
eQ:[function(a){this.Y(H.h(a,"$isl"))},function(){return this.eQ(null)},"fR","$1","$0","gcw",0,2,1],
fQ:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.az],"$asi")
for(z=b.length,y=this.gcw(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.L()},"$2","geP",8,0,8],
fS:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.az],"$asi")
for(z=b.length,y=this.gcw(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.c(y,x)
C.a.E(t.a,y)}}this.L()},"$2","geR",8,0,8],
$isdN:1,
p:{
bX:function(a,b,c,d,e,f){var z,y
z=new E.az()
z.a=d
z.b=!0
y=O.dl(E.az)
z.y=y
y.aJ(z.geP(),z.geR())
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
z.sax(0,e)
z.sau(f)
z.sa3(c)
return z}}},hN:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cY:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ab(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cA()
y=[V.bM]
z.a=H.f([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.hP(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cA()
z.a=H.f([],y)
v=z.gu()
v.toString
x=H.c(new E.hQ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cA()
z.a=H.f([],y)
y=z.gu()
y.toString
w=H.c(new E.hR(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.c6])
this.dy=z
C.a.h(z,null)
this.fr=new H.aJ(0,0,[P.k,A.dY])},
cE:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbA(z):a;(z&&C.a).h(z,y)},
cC:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
hO:function(a,b){var z=new E.hN(a,b)
z.cY(a,b)
return z}}},hP:{"^":"p:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hQ:{"^":"p:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hR:{"^":"p:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},ij:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
d3:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.f9()},function(){return this.d3(null)},"d2","$1","$0","gbX",0,2,1],
geF:function(){var z,y,x
z=Date.now()
y=C.c.a6(P.dx(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ab(z,!1)
return x/y},
cd:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.d.cr(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.d.cr(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.e5(C.h,this.gf8())},
f9:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.il(this),{func:1,ret:-1,args:[P.V]})
C.p.dl(z)
C.p.e_(z,W.eQ(y,P.V))}},"$0","gf8",0,0,3],
f6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cd()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ab(w,!1)
x.y=P.dx(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aj()
w=x.db
C.a.sk(w.a,0)
w.aj()
w=x.dx
C.a.sk(w.a,0)
w.aj()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}}catch(v){z=H.aH(v)
y=H.bf(v)
P.d6("Error: "+H.j(z))
P.d6("Stack: "+H.j(y))
throw H.b(z)}},
p:{
ik:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isco)return E.e4(a,!0,!0,!0,!1)
y=W.di(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcm(a).h(0,y)
w=E.e4(y,!0,!0,!0,!1)
w.a=a
return w},
e4:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ij()
y=P.hd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.f.bS(a,"webgl",y)
x=H.h(x==null?C.f.bS(a,"experimental-webgl",y):x,"$isdX")
if(x==null)H.A(P.z("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hO(x,a)
w=new T.ii(x)
w.b=H.r(x.getParameter(3379))
w.c=H.r(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iI(a)
v=new X.h8()
v.c=new X.av(!1,!1,!1)
v.d=P.he(null,null,null,P.y)
w.b=v
v=new X.hp(w)
v.f=0
v.r=new V.K(0,0)
v.x=new V.K(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hh(w)
v.r=0
v.x=new V.K(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.io(w)
v.e=0
v.f=new V.K(0,0)
v.r=new V.K(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.e0,P.a]])
w.z=v
u=document
t=W.al
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.c(w.gdD(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.c(w.gdG(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.c(w.gdA(),q),!1,r))
v=w.z
p=W.bl
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.c(w.gdI(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.c(w.gdH(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.c(w.gdK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.c(w.gdM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.c(w.gdL(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.Y(a,H.Q(W.fE(a)),H.c(w.gdN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.c(w.gdE(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.c(w.gdF(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.c(w.gdO(),q),!1,r))
r=w.z
q=W.b5
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.c(w.gdU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.c(w.gdS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.c(w.gdT(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ab(Date.now(),!1)
z.ch=0
z.cd()
return z}}},il:{"^":"p:27;a",
$1:function(a){var z
H.f1(a)
z=this.a
if(z.z){z.z=!1
z.f6()}}}}],["","",,Z,{"^":"",eu:{"^":"a;a,b",p:{
cP:function(a,b,c){var z
H.w(c,"$isd",[P.y],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cT(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,z)}}},dd:{"^":"da;a,b,c,d,e",
bn:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aH(y)
x=P.z('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.j(z))
throw H.b(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iZ:{"^":"a;a",$isl7:1},de:{"^":"a;a,0b,c,d",
aS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bn:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bn(a)},
fh:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a8:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
eV:function(a){this.bn(a)
this.a8(a)
this.fh(a)},
i:function(a){var z,y,x,w,v,u
z=[P.k]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isih:1},df:{"^":"a;0a",$isih:1},c0:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aY(this.c)+"'")+"]"}},cO:{"^":"a;a",
gbV:function(a){var z,y
z=this.a
y=(z&$.$get$aE().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$b7().a)!==0)y+=2
if((z&$.$get$b8().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$b9().a)!==0)++y
return(z&$.$get$b6().a)!==0?y+4:y},
el:function(a){var z,y,x
z=$.$get$aE()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b8()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0)if(x===a)return z
return $.$get$et()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cO))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.k])
y=this.a
if((y&$.$get$aE().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b7().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b8().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
ai:function(a){return new Z.cO(a)}}}}],["","",,D,{"^":"",dj:{"^":"a;"},bH:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fI(z))
return x!==0},
fa:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
a9:function(a){return this.fa(a,!0,!1)},
p:{
N:function(){var z=new D.bH()
z.a=H.f([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fI:{"^":"p:28;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},ct:{"^":"l;c,d,a,0b,$ti"},cu:{"^":"l;c,d,a,0b,$ti"},J:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dg:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
p:{"^":"l8<"}},dE:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dF:{"^":"l;c,a,0b"},h8:{"^":"a;0a,0b,0c,0d",
f0:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dF(a,this)
y.b=!0
return z.v(y)},
eX:function(a){var z,y
this.c=a.b
this.d.E(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dF(a,this)
y.b=!0
return z.v(y)}},dJ:{"^":"c4;x,y,c,d,e,a,0b"},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ac:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ab(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.B(0,new V.K(x*w,v*u))
u=this.a.gar()
s=new X.bn(a,new V.K(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bG:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
aG:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cQ()
if(typeof z!=="number")return z.cM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
aF:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
f1:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gar()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cC(new V.S(v*u,t*s),y,x,new P.ab(w,!1),this)
w.b=!0
z.v(w)
return!0},
dJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ab(Date.now(),!1)
y=this.f
x=new X.dJ(c,a,this.a.gar(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.K(0,0)}},av:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
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
return z+(this.c?"Shift+":"")}},bn:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},hp:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b4:function(a,b,c){var z,y,x
z=new P.ab(Date.now(),!1)
y=this.a.gar()
x=new X.bn(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bG:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.b4(a,b,!0))
return!0},
aG:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cQ()
if(typeof z!=="number")return z.cM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.b4(a,b,!0))
return!0},
aF:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.b4(a,b,!1))
return!0},
f2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gar()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cC(new V.S(w*v,u*t),y,b,new P.ab(x,!1),this)
x.b=!0
z.v(x)
return!0},
gcp:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gcK:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
gcv:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},cC:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"l;"},ea:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},io:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.K],"$asd")
z=new P.ab(Date.now(),!1)
y=a.length>0?a[0]:new V.K(0,0)
x=this.a.gar()
w=new X.ea(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
f_:function(a){var z
H.w(a,"$isd",[V.K],"$asd")
z=this.b
if(z==null)return!1
z.v(this.ac(a,!0))
return!0},
eY:function(a){var z
H.w(a,"$isd",[V.K],"$asd")
z=this.c
if(z==null)return!1
z.v(this.ac(a,!0))
return!0},
eZ:function(a){var z
H.w(a,"$isd",[V.K],"$asd")
z=this.d
if(z==null)return!1
z.v(this.ac(a,!1))
return!0}},iI:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gar:function(){var z=this.a
return V.dW(0,0,(z&&C.f).gcn(z).c,C.f.gcn(z).d)},
c5:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dE(z,new X.av(y,a.altKey,a.shiftKey))},
aq:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
bh:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
ad:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.K(y-w,x-v)},
ay:function(a){return new V.S(a.movementX,a.movementY)},
bc:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.K])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.d.a4(u.pageX)
C.d.a4(u.pageY)
s=z.left
C.d.a4(u.pageX)
C.a.h(y,new V.K(t-s,C.d.a4(u.pageY)-z.top))}return y},
ab:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dg(z,new X.av(y,a.altKey,a.shiftKey))},
b6:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
fv:[function(a){this.f=!0},"$1","gdG",4,0,7],
fo:[function(a){this.f=!1},"$1","gdA",4,0,7],
fs:[function(a){H.h(a,"$isal")
if(this.f&&this.b6(a))a.preventDefault()},"$1","gdD",4,0,4],
fz:[function(a){var z
H.h(a,"$isbl")
if(!this.f)return
z=this.c5(a)
if(this.b.f0(z))a.preventDefault()},"$1","gdI",4,0,15],
fw:[function(a){var z
H.h(a,"$isbl")
if(!this.f)return
z=this.c5(a)
if(this.b.eX(z))a.preventDefault()},"$1","gdH",4,0,15],
fA:[function(a){var z,y,x,w
H.h(a,"$isal")
z=this.a
z.focus()
this.f=!0
this.aq(a)
if(this.x){y=this.ab(a)
x=this.ay(a)
if(this.d.bG(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ab(a)
w=this.ad(a)
if(this.c.bG(y,w))a.preventDefault()},"$1","gdK",4,0,4],
fC:[function(a){var z,y,x
H.h(a,"$isal")
this.aq(a)
z=this.ab(a)
if(this.x){y=this.ay(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aG(z,x))a.preventDefault()},"$1","gdM",4,0,4],
fu:[function(a){var z,y,x
H.h(a,"$isal")
if(!this.b6(a)){this.aq(a)
z=this.ab(a)
if(this.x){y=this.ay(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aG(z,x))a.preventDefault()}},"$1","gdF",4,0,4],
fB:[function(a){var z,y,x
H.h(a,"$isal")
this.aq(a)
z=this.ab(a)
if(this.x){y=this.ay(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aF(z,x))a.preventDefault()},"$1","gdL",4,0,4],
ft:[function(a){var z,y,x
H.h(a,"$isal")
if(!this.b6(a)){this.aq(a)
z=this.ab(a)
if(this.x){y=this.ay(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aF(z,x))a.preventDefault()}},"$1","gdE",4,0,4],
fD:[function(a){var z,y
H.h(a,"$isbw")
this.aq(a)
z=new V.S((a&&C.o).gew(a),C.o.gex(a)).q(0,180)
if(this.x){if(this.d.f1(z))a.preventDefault()
return}if(this.r)return
y=this.ad(a)
if(this.c.f2(z,y))a.preventDefault()},"$1","gdN",4,0,30],
fE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ab(this.y)
v=this.ad(this.y)
this.d.dJ(w,v,x)}},"$1","gdO",4,0,7],
fK:[function(a){var z
H.h(a,"$isb5")
this.a.focus()
this.f=!0
this.bh(a)
z=this.bc(a)
if(this.e.f_(z))a.preventDefault()},"$1","gdU",4,0,11],
fI:[function(a){var z
H.h(a,"$isb5")
this.bh(a)
z=this.bc(a)
if(this.e.eY(z))a.preventDefault()},"$1","gdS",4,0,11],
fJ:[function(a){var z
H.h(a,"$isb5")
this.bh(a)
z=this.bc(a)
if(this.e.eZ(z))a.preventDefault()},"$1","gdT",4,0,11]}}],["","",,V,{"^":"",
la:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","hm",8,0,32],
l0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.cP(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.b.a0("null",c)
return C.b.a0(C.d.cI($.n.$2(a,0)?0:a,b),c+b+1)},
cg:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.x],"$asd")
z=H.f([],[P.k])
for(y=0,x=0;x<4;++x){w=V.L(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.e(z,v)
C.a.m(z,v,C.b.a0(z[v],y))}return z},
G:{"^":"a;a,b,c,d",
bP:function(a){return H.f([this.a,this.b,this.c,this.d],[P.x])},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
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
bM:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bQ:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return z},
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
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.u(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
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
i:function(a){return this.I()},
cs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.x]
y=V.cg(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cg(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cg(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cg(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
I:function(){return this.cs("",3,0)},
w:function(a){return this.cs(a,3,0)},
p:{
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bN:function(){return V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
bO:function(a,b,c){return V.aA(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
c3:function(a,b,c,d){return V.aA(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cB:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aA(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
dM:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aA(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
K:{"^":"a;a,b",
B:function(a,b){return new V.K(this.a+b.a,this.b+b.b)},
G:function(a,b){return new V.K(this.a-b.a,this.b-b.b)},
q:function(a,b){if($.n.$2(b,0))return new V.K(0,0)
return new V.K(this.a/b,this.b/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
a8:{"^":"a;a,b,c",
B:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){if($.n.$2(b,0))return new V.a8(0,0,0)
return new V.a8(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bq:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
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
dV:{"^":"a;a,b,c,d",
gX:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dV))return!1
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
p:{
dW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dV(a,b,c,d)}}},
S:{"^":"a;a,b",
cu:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,12],
A:function(a){var z,y,x,w
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
return new V.S(z*b,y*b)},
q:function(a,b){var z,y
if($.n.$2(b,0))return new V.S(0,0)
z=this.a
if(typeof z!=="number")return z.q()
y=this.b
if(typeof y!=="number")return y.q()
return new V.S(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
u:{"^":"a;a,b,c",
cu:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,12],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bB:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.u(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aC:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.u(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.u(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.u(-this.a,-this.b,-this.c)},
l:function(a,b){return new V.u(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if($.n.$2(b,0))return new V.u(0,0,0)
return new V.u(this.a/b,this.b/b,this.c/b)},
ct:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bR:{"^":"a;a,b,c,d",
cu:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gk",1,0,12],
q:function(a,b){if($.n.$2(b,0))return new V.bR(0,0,0,0)
return new V.bR(this.a/b,this.b/b,this.c/b,this.d/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}}],["","",,U,{"^":"",fr:{"^":"dj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
b_:function(a){var z=V.l0(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.v(a)},
sbR:function(a,b){},
sbC:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.b_(z)}z=new D.J("maximumLocation",y,this.b,this,[P.x])
z.b=!0
this.M(z)}},
sbE:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.b_(z)}z=new D.J("minimumLocation",y,this.c,this,[P.x])
z.b=!0
this.M(z)}},
sS:function(a,b){var z,y
b=this.b_(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.x])
z.b=!0
this.M(z)}},
sbD:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.x])
z.b=!0
this.M(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.x])
z.b=!0
this.M(z)}},
sbx:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.x])
z.b=!0
this.M(z)}},
av:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sS(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sN(y)}},
p:{
cq:function(){var z=new U.fr()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dm:{"^":"a2;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
sV:function(a,b){var z,y,x
if(b==null)b=V.bN()
if(!J.B(this.a,b)){z=this.a
this.a=b
y=new D.J("matrix",z,b,this,[V.bM])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aw:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
at:function(a){var z=new U.dm()
z.sV(0,a)
return z}}},dB:{"^":"as;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.M(null)},"a1","$1","$0","gap",0,2,1],
fi:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.ct(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gd4",8,0,14],
fF:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.c(x,w)
C.a.E(t.a,x)}}z=new D.cu(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gdP",8,0,14],
aw:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aw(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bN():x
z=this.e
if(!(z==null))z.a9(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.B(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.a2]},
$asas:function(){return[U.a2]},
$isa2:1,
p:{
c_:function(a){var z=new U.dB()
z.aZ(U.a2)
z.aJ(z.gd4(),z.gdP())
z.e=null
z.f=V.bN()
z.r=0
return z}}},a2:{"^":"dj;"},iJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.M(null)},"a1","$1","$0","gap",0,2,1],
az:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcp()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gb7(),y)
C.a.h(z.a,x)
x=this.a.c.gcv()
x.toString
z=H.c(this.gb8(),y)
C.a.h(x.a,z)
z=this.a.c.gcK()
z.toString
y=H.c(this.gb9(),y)
C.a.h(z.a,y)
return!0},
du:[function(a){H.h(a,"$isl")
if(!J.B(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gb7",4,0,0],
dv:[function(a){var z,y,x,w,v,u,t
a=H.a5(H.h(a,"$isl"),"$isbn")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.S(y.a,y.b).l(0,2).q(0,z.gX())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.S(x.a,x.b).l(0,2).q(0,z.gX())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sS(0,-v*u+t)
this.b.sN(0)
y=y.G(0,a.z)
this.Q=new V.S(y.a,y.b).l(0,2).q(0,z.gX())}this.a1()},"$1","gb8",4,0,0],
dw:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sN(y*10*x)
this.a1()}},"$1","gb9",4,0,0],
aw:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.ch=y
x=b.y
this.b.av(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aA(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa2:1},iK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.M(null)},"a1","$1","$0","gap",0,2,1],
az:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcp()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gb7(),y)
C.a.h(z.a,x)
x=this.a.c.gcv()
x.toString
z=H.c(this.gb8(),y)
C.a.h(x.a,z)
z=this.a.c.gcK()
z.toString
x=H.c(this.gb9(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.N()
x.f=z}x=H.c(this.gdr(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.c(this.gds(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.N()
x.b=z}x=H.c(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.c(this.gea(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.N()
x.c=z}y=H.c(this.ge9(),y)
C.a.h(z.a,y)
return!0},
a5:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.S(z,y)},
du:[function(a){a=H.a5(H.h(a,"$isl"),"$isbn")
if(!J.B(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gb7",4,0,0],
dv:[function(a){var z,y,x,w,v,u,t
a=H.a5(H.h(a,"$isl"),"$isbn")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a5(new V.S(y.a,y.b).l(0,2).q(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a5(new V.S(x.a,x.b).l(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sS(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.a5(new V.S(y.a,y.b).l(0,2).q(0,z.gX()))}this.a1()},"$1","gb8",4,0,0],
dw:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sN(-y*10*z)
this.a1()}},"$1","gb9",4,0,0],
fl:[function(a){if(H.a5(H.h(a,"$isl"),"$isdJ").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdr",4,0,0],
fm:[function(a){var z,y,x,w,v,u,t
a=H.a5(H.h(a,"$isl"),"$isbn")
if(!J.B(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a5(new V.S(x.a,x.b).l(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sS(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.a5(new V.S(y.a,y.b).l(0,2).q(0,z.gX()))
this.a1()},"$1","gds",4,0,0],
fO:[function(a){H.h(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geb",4,0,0],
fN:[function(a){var z,y,x,w,v,u,t
a=H.a5(H.h(a,"$isl"),"$isea")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.S(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a5(new V.S(y.a,y.b).l(0,2).q(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a5(new V.S(x.a,x.b).l(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sS(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.a5(new V.S(y.a,y.b).l(0,2).q(0,z.gX()))}this.a1()},"$1","gea",4,0,0],
fM:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sN(-y*10*z)
this.a1()}},"$1","ge9",4,0,0],
aw:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=b.y
this.c.av(0,x)
this.b.av(0,x)
this.fr=V.cB(this.b.d).l(0,V.dM(this.c.d))}return this.fr},
$isa2:1},iL:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.v(a)},
az:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=H.c(this.gdz(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
fn:[function(a){var z,y,x,w
H.h(a,"$isl")
if(!J.B(this.b,this.a.b.c))return
H.a5(a,"$iscC")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.x])
z.b=!0
this.M(z)}},"$1","gdz",4,0,0],
aw:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.c3(x,x,x,1)}return this.f},
$isa2:1}}],["","",,M,{"^":"",fs:{"^":"as;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
Z:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.Z(null)},"d5","$1","$0","gW",0,2,1],
fG:[function(a,b){var z,y,x,w,v,u,t
z=M.aB
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.ct(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gdQ",8,0,18],
fH:[function(a,b){var z,y,x,w,v,u,t
z=M.aB
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.c(x,w)
C.a.E(t.a,x)}}z=new D.cu(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gdR",8,0,18],
a8:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();){y=z.d
if(!(y==null))y.a8(a)}this.e=!1},
$asi:function(){return[M.aB]},
$asas:function(){return[M.aB]},
$isaB:1},fG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Z:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.Z(null)},"d5","$1","$0","gW",0,2,1],
fp:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.ct(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gdB",8,0,8],
fq:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.c(x,w)
C.a.E(s.a,x)}}z=new D.cu(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gdC",8,0,8],
sbt:function(a){var z,y,x
if(a==null)a=X.cE(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.dh])
z.b=!0
this.Z(z)}},
scG:function(a,b){var z,y,x
if(b==null)b=X.dA(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.e2])
z.b=!0
this.Z(z)}},
sau:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.c6])
z.b=!0
this.Z(z)}},
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.cE(this.c)
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
u=C.d.a4(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.d.a4(v.b*w)
s=C.d.a4(v.c*x)
a.c=s
v=C.d.a4(v.d*w)
a.d=v
y.viewport(u,t,s,v)
a.a.clearDepth(z.c)
if(z.b){y=a.a
z=z.a
y.clearColor(z.a,z.b,z.c,z.d)
r=16640}else r=256
a.a.clear(r)
z=this.a
y=a.c
v=a.d
s=z.c
q=z.d
p=z.e
o=p-q
n=1/Math.tan(s*0.5)
m=V.aA(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y=z.a
if(y!=null){l=y.a
if(l!=null)m=l.l(0,m)}a.cy.cD(m)
y=$.dR
if(y==null){y=new V.u(0,0,-1)
k=y.q(0,Math.sqrt(y.A(y)))
y=new V.u(0,1,0).aC(k)
j=y.q(0,Math.sqrt(y.A(y)))
i=k.aC(j)
h=new V.u(0,0,0)
y=V.aA(j.a,i.a,k.a,j.K(0).A(h),j.b,i.b,k.b,i.K(0).A(h),j.c,i.c,k.c,k.K(0).A(h),0,0,0,1)
$.dR=y
g=y}else g=y
z=z.b
if(z!=null){l=z.a
if(l!=null)g=l.l(0,g)}a.db.cD(g)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();)z.d.av(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.D();)z.d.a8(a)
this.a.toString
a.cy.bH()
a.db.bH()
this.b.toString
a.cC()},
$isaB:1,
p:{
dy:function(a,b,c,d){var z,y
z=new M.fG()
y=O.dl(E.az)
z.d=y
y.aJ(z.gdB(),z.gdC())
z.e=null
z.f=null
z.r=null
z.x=null
z.sbt(a)
z.scG(0,c)
z.sau(d)
return z}}},aB:{"^":"a;"}}],["","",,A,{"^":"",d9:{"^":"a;a,b,c"},fh:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ez:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ey:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fQ:{"^":"dY;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},dY:{"^":"da;",
d_:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
c6:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eU(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.b(P.z("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
e3:function(){var z,y,x,w,v,u
z=H.f([],[A.d9])
y=this.a
x=H.r(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d9(y,v.name,u))}this.f=new A.fh(z)},
e5:function(){var z,y,x,w,v,u
z=H.f([],[A.a3])
y=this.a
x=H.r(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.ev(v.type,v.size,v.name,u))}this.r=new A.iy(z)},
ao:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.is(z,y,b,c)
else return A.cL(z,y,b,a,c)},
di:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iC(z,y,b,c)
else return A.cL(z,y,b,a,c)},
dj:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iD(z,y,b,c)
else return A.cL(z,y,b,a,c)},
aQ:function(a,b){return new P.ew(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ev:function(a,b,c,d){switch(a){case 5120:return this.ao(b,c,d)
case 5121:return this.ao(b,c,d)
case 5122:return this.ao(b,c,d)
case 5123:return this.ao(b,c,d)
case 5124:return this.ao(b,c,d)
case 5125:return this.ao(b,c,d)
case 5126:return new A.en(this.a,this.e,c,d)
case 35664:return new A.iu(this.a,this.e,c,d)
case 35665:return new A.eo(this.a,this.e,c,d)
case 35666:return new A.cM(this.a,this.e,c,d)
case 35667:return new A.iv(this.a,this.e,c,d)
case 35668:return new A.iw(this.a,this.e,c,d)
case 35669:return new A.ix(this.a,this.e,c,d)
case 35674:return new A.iA(this.a,this.e,c,d)
case 35675:return new A.iB(this.a,this.e,c,d)
case 35676:return new A.c8(this.a,this.e,c,d)
case 35678:return this.di(b,c,d)
case 35680:return this.dj(b,c,d)
case 35670:throw H.b(this.aQ("BOOL",c))
case 35671:throw H.b(this.aQ("BOOL_VEC2",c))
case 35672:throw H.b(this.aQ("BOOL_VEC3",c))
case 35673:throw H.b(this.aQ("BOOL_VEC4",c))
default:throw H.b(P.z("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},a3:{"^":"a;"},iy:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.I()},
eE:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
I:function(){return this.eE("\n")}},is:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iv:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iw:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},ix:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},it:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
p:{
cL:function(a,b,c,d,e){var z=new A.it(a,b,c,e)
z.f=d
z.e=P.hf(d,0,!1,P.y)
return z}}},en:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iu:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},eo:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},cM:{"^":"a3;a,b,c,d",
bT:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}},iA:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},iB:{"^":"a3;a,b,c,d",
i:function(a){return"UniformMat3: "+H.j(this.c)}},c8:{"^":"a3;a,b,c,d",
aV:function(a){var z=new Float32Array(H.cT(H.w(a,"$isd",[P.x],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},iC:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},iD:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cZ:function(a,b,c,d){var z=F.bs()
F.by(z,b,c,d,a,1,0,0,1)
F.by(z,b,c,d,a,0,1,0,3)
F.by(z,b,c,d,a,0,0,1,2)
F.by(z,b,c,d,a,-1,0,0,0)
F.by(z,b,c,d,a,0,-1,0,0)
F.by(z,b,c,d,a,0,0,-1,3)
z.af()
return z},
cc:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
by:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.u(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.u(t+h,s+f,r+g)
z.b=q
p=new V.u(t-h,s-f,r-g)
z.c=p
o=new V.u(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cc(y)
k=F.cc(z.b)
j=F.kY(d,e,new F.kl(z,F.cc(z.c),F.cc(z.d),k,l,c),b)
if(j!=null)a.aU(j)},
a4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.q(0,Math.sqrt(b.A(b)))
z=b.a
y=b.b
x=b.c
w=F.bu(null,null,null,new V.a8(z,y,x),b,null,null,null,0)
v=a.eA(w,new F.eq())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.saB(0,new V.G(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sbN(new V.K(q,p<0?-p:p))
a.a.h(0,w)
return w},
R:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.cj(0,b,d,c)
else{z=F.a4(a,b.r.B(0,c.r).l(0,0.5))
y=F.a4(a,c.r.B(0,d.r).l(0,0.5))
x=F.a4(a,d.r.B(0,b.r).l(0,0.5))
w=e-1
F.R(a,b,z,x,w)
F.R(a,z,c,y,w)
F.R(a,y,x,z,w)
F.R(a,x,y,d,w)}},
kY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.U,P.x,P.x]})
if(a<1)return
if(b<1)return
z=F.bs()
y=H.f([],[F.U])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bu(null,null,new V.G(u,0,0,1),null,null,new V.K(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bw(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bu(null,null,new V.G(o,n,m,1),null,null,new V.K(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bw(d))}}z.d.eh(a+1,b+1,y)
return z},
kl:{"^":"p:33;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bB(z.b,b).bB(z.d.bB(z.c,b),c)
a.sS(0,new V.a8(y.a,y.b,y.c))
a.sbO(y.q(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bq(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.B(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.L()}}},
T:{"^":"a;0a,0b,0c,0d,0e",
ag:function(){if(!this.gaD()){C.a.E(this.a.a.d.b,this)
this.a.a.L()}this.be()
this.bf()
this.dX()},
bi:function(a){this.a=a
C.a.h(a.d.b,this)},
bj:function(a){this.b=a
C.a.h(a.d.c,this)},
e2:function(a){this.c=a
C.a.h(a.d.d,this)},
be:function(){var z=this.a
if(z!=null){C.a.E(z.d.b,this)
this.a=null}},
bf:function(){var z=this.b
if(z!=null){C.a.E(z.d.c,this)
this.b=null}},
dX:function(){var z=this.c
if(z!=null){C.a.E(z.d.d,this)
this.c=null}},
gaD:function(){return this.a==null||this.b==null||this.c==null},
dc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.u(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.ct())return
return v.q(0,Math.sqrt(v.A(v)))},
dg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.u(z.a,z.b,z.c)
v=z.q(0,Math.sqrt(z.A(z)))
z=w.G(0,y)
z=new V.u(z.a,z.b,z.c)
z=v.aC(z.q(0,Math.sqrt(z.A(z))))
return z.q(0,Math.sqrt(z.A(z)))},
bs:function(){if(this.d!=null)return!0
var z=this.dc()
if(z==null){z=this.dg()
if(z==null)return!1}this.d=z
this.a.a.L()
return!0},
da:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.u(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.ct())return
return v.q(0,Math.sqrt(v.A(v)))},
df:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.G(0,u)
z=new V.u(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.a8(z.a*l,z.b*l,z.c*l).B(0,u).G(0,x)
z=new V.u(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.q(0,Math.sqrt(z.A(z)))
z=k.aC(m)
z=z.q(0,Math.sqrt(z.A(z))).aC(k)
m=z.q(0,Math.sqrt(z.A(z)))}return m},
bq:function(){if(this.e!=null)return!0
var z=this.da()
if(z==null){z=this.df()
if(z==null)return!1}this.e=z
this.a.a.L()
return!0},
am:function(a,b){var z=b.a
if(z==null)throw H.b(P.z("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.b(P.z("May not replace a face's vertex with a vertex attached to a different shape."))},
geq:function(a){if(J.B(this.a,this.b))return!0
if(J.B(this.b,this.c))return!0
if(J.B(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z,y
if(this.gaD())return a+"disposed"
z=a+C.b.a0(J.a6(this.a.e),0)+", "+C.b.a0(J.a6(this.b.e),0)+", "+C.b.a0(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
I:function(){return this.w("")}},
fJ:{"^":"a;"},
i4:{"^":"fJ;",
at:function(a,b,c){var z,y
z=b.a
z.a.a.n()
z=z.e
y=c.a
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.n()
z=z.e
y=c.b
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.n()
z=z.e
y=c.c
y.a.a.n()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.n()
z=z.e
y=c.b
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.n()
z=z.e
y=c.c
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.n()
z=z.e
y=c.a
y.a.a.n()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.n()
z=z.e
y=c.c
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.n()
z=z.e
y=c.a
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.n()
z=z.e
y=c.b
y.a.a.n()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
aK:{"^":"a;0a,0b",
ag:function(){if(!this.gaD()){C.a.E(this.a.a.c.b,this)
this.a.a.L()}this.be()
this.bf()},
bi:function(a){this.a=a
C.a.h(a.c.b,this)},
bj:function(a){this.b=a
C.a.h(a.c.c,this)},
be:function(){var z=this.a
if(z!=null){C.a.E(z.c.b,this)
this.a=null}},
bf:function(){var z=this.b
if(z!=null){C.a.E(z.c.c,this)
this.b=null}},
gaD:function(){return this.a==null||this.b==null},
am:function(a,b){var z=b.a
if(z==null)throw H.b(P.z("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.b(P.z("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){if(this.gaD())return a+"disposed"
return a+C.b.a0(J.a6(this.a.e),0)+", "+C.b.a0(J.a6(this.b.e),0)},
I:function(){return this.w("")}},
h9:{"^":"a;"},
ir:{"^":"h9;",
at:function(a,b,c){var z,y
z=b.a
z.a.a.n()
z=z.e
y=c.a
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.n()
z=z.e
y=c.b
y.a.a.n()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.n()
z=z.e
y=c.b
y.a.a.n()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.n()
z=z.e
y=c.a
y.a.a.n()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cF:{"^":"a;0a",
ag:function(){var z=this.a
if(z!=null){C.a.E(z.a.b.b,this)
this.a.a.L()}this.dW()},
e1:function(a){this.a=a
C.a.h(a.b.b,this)},
dW:function(){var z=this.a
if(z!=null){C.a.E(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a0(J.a6(z.e),0)},
I:function(){return this.w("")},
p:{
hy:function(a){var z=new F.cF()
if(a.a==null)H.A(P.z("May not create a point with a vertex which is not attached to a shape."))
z.e1(a)
C.a.h(z.a.a.b.b,z)
z.a.a.L()
return z}}},
ae:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.n()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.bv())}this.a.n()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.n()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.hy(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.n()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.n()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.aK()
s=p.a
if(s==null)H.A(P.z("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.A(P.z("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.n()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.n()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.n()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
m=new F.T()
t=p.a
if(t==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
s=o.a
if(t==null?s==null:t===s){s=l.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.A(P.z("May not create a face with vertices attached to different shapes."))
m.a=p
C.a.h(p.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=l
C.a.h(l.d.d,m)
C.a.h(m.a.a.d.b,m)
t=m.a.a.e
if(!(t==null))t.v(null)}z=this.e
if(!(z==null))z.a9(0)},
af:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.af()||!1
if(!this.a.af())y=!1
z=this.e
if(!(z==null))z.a9(0)
return y},
eB:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.at(0,a,w))return w}return},
eA:function(a,b){return this.eB(a,b,0)},
dn:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.U],"$asd")
H.w(e,"$isd",[P.y],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.at(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
dZ:function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isd",[P.y],"$asd")
H.i8(b,J.ko(),H.v(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.A(P.z("May not replace a face's vertex when the point has been disposed."))
if(J.B(v,w)){x.am(w,a)
v=x.a
if(v!=null){C.a.E(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.B(x.b,w)){x.am(w,a)
v=x.b
if(v!=null){C.a.E(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.B(x.c,w)){x.am(w,a)
v=x.c
if(v!=null){C.a.E(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null)H.A(P.z("May not replace a line's vertex when the point has been disposed."))
if(J.B(v,w)){x.am(w,a)
v=x.a
if(v!=null){C.a.E(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.B(x.b,w)){x.am(w,a)
v=x.b
if(v!=null){C.a.E(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.A(P.z("May not replace a point's vertex when the point has been disposed."))
if(J.B(v,w)){if(a.a==null)H.A(P.z("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.E(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.v(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.A(P.z("May not remove a vertex without first making it empty."))
t.a=null
C.a.f4(v,y)
v=x.a.e
if(!(v==null))v.v(null)
x.b=!0}},
eN:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.U],x=[P.y];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.dn(a,v,y,u,t)){this.dZ(b.aU(u),t)
y-=t.length}}this.a.n()
this.c.bJ()
this.d.bJ()
this.b.f5()
this.c.bK(new F.ir())
this.d.bK(new F.i4())
z=this.e
if(!(z==null))z.a9(0)},
ek:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(z=this.a.c.length-1,y=a.a,x=a.b,w=a.c,v=a.d,u=a.e,t=a.f,s=a.r,r=a.x,q=a.y,p=a.z,o=a.Q,n=a.ch;z>=0;--z){m=this.a.c
if(z>=m.length)return H.e(m,z)
l=m[z]
m=l.f
if(m!=null){k=m.a
if(typeof y!=="number")return y.l()
j=m.b
if(typeof x!=="number")return x.l()
i=m.c
if(typeof w!=="number")return w.l()
if(typeof v!=="number")return H.o(v)
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.o(r)
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return p.l()
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.o(n)
i=new V.a8(y*k+x*j+w*i+v,u*k+t*j+s*i+r,q*k+p*j+o*i+n)
if(!m.t(0,i)){l.f=i
m=l.a
if(m!=null){m=m.e
if(!(m==null))m.v(null)}}}m=l.r
if(m!=null)l.sbF(a.cJ(m))
m=l.x
if(m!=null)l.saA(a.cJ(m))}},
en:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aE().a)!==0?1:0
if((y&$.$get$aD().a)!==0)++x
if((y&$.$get$aC().a)!==0)++x
if((y&$.$get$b7().a)!==0)++x
if((y&$.$get$b8().a)!==0)++x
if((y&$.$get$aN().a)!==0)++x
if((y&$.$get$bv().a)!==0)++x
if((y&$.$get$b9().a)!==0)++x
if((y&$.$get$b6().a)!==0)++x
w=b.gbV(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.x
t=H.f(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.f(y,[Z.dd])
for(r=0,q=0;q<x;++q){p=b.el(q)
o=p.gbV(p)
C.a.m(s,q,new Z.dd(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].eK(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[u],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cT(t)),35044)
y.bindBuffer(34962,null)
i=new Z.de(new Z.eu(34962,j),s,b)
i.b=H.f([],[Z.c0])
if(this.b.b.length!==0){u=P.y
h=H.f([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.n()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.w(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c0(0,h.length,f))}if(this.c.b.length!==0){u=P.y
h=H.f([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.n()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.n()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.w(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c0(1,h.length,f))}if(this.d.b.length!==0){u=P.y
h=H.f([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.n()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.n()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.n()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.w(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c0(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.C(z,"\n")},
Y:function(a){var z=this.e
if(!(z==null))z.v(a)},
L:function(){return this.Y(null)},
p:{
bs:function(){var z,y
z=new F.ae()
y=new F.iO(z)
y.b=!1
y.c=H.f([],[F.U])
z.a=y
y=new F.i_(z)
y.b=H.f([],[F.cF])
z.b=y
y=new F.hZ(z)
y.b=H.f([],[F.aK])
z.c=y
y=new F.hY(z)
y.b=H.f([],[F.T])
z.d=y
z.e=null
return z}}},
hY:{"^":"a;a,0b",
cj:function(a,b,c,d){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
z=new F.T()
y=b.a
if(y==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
x=c.a
if(y==null?x==null:y===x){x=d.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.A(P.z("May not create a face with vertices attached to different shapes."))
z.bi(b)
z.bj(c)
z.e2(d)
C.a.h(z.a.a.d.b,z)
z.a.a.L()
return z},
eg:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.U],"$asd")
z=H.f([],[F.T])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
u=new F.T()
t=y.a
if(t==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
s=w.a
if(t==null?s==null:t===s){s=v.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.A(P.z("May not create a face with vertices attached to different shapes."))
u.a=y
C.a.h(y.d.b,u)
u.b=w
C.a.h(w.d.c,u)
u.c=v
C.a.h(v.d.d,u)
C.a.h(u.a.a.d.b,u)
w=u.a.a.e
if(!(w==null))w.v(null)
C.a.h(z,u)}return z},
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.w(c,"$isd",[F.U],"$asd")
z=H.f([],[F.T])
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
m=new F.T()
s=r.a
if(s==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
l=q.a
if(s==null?l==null:s===l){l=o.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.A(P.z("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=q
C.a.h(q.d.c,m)
m.c=o
C.a.h(o.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.T()
s=r.a
if(s==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.A(P.z("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.T()
s=q.a
if(s==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.A(P.z("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
m=new F.T()
s=q.a
if(s==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
l=n.a
if(s==null?l==null:s===l){l=r.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.A(P.z("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=n
C.a.h(n.d.c,m)
m.c=r
C.a.h(r.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.v(null)
C.a.h(z,m)}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
bK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.at(0,v,t)){v.ag()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.geq(x)
if(y)x.ag()}},
af:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].bs())x=!1
return x},
br:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].bq())x=!1
return x},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}},
hZ:{"^":"a;a,0b",
ef:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.aK()
if(b==null)H.A(P.z("May not create a line with a null start vertex."))
if(c==null)H.A(P.z("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.A(P.z("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.A(P.z("May not create a line with vertices attached to different shapes."))
z.bi(b)
z.bj(c)
C.a.h(z.a.a.c.b,z)
z.a.a.L()
return z},
gk:function(a){return this.b.length},
bK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.at(0,v,t)){v.ag()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.B(x.a,x.b)
if(y)x.ag()}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.C(z,"\n")},
I:function(){return this.w("")}},
i_:{"^":"a;a,0b",
gk:function(a){return this.b.length},
f5:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ag()}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}},
U:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bw:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bu(this.cx,x,u,z,y,w,v,a,t)},
bv:function(){return this.bw(null)},
sS:function(a,b){var z
if(!J.B(this.f,b)){this.f=b
z=this.a
if(z!=null)z.L()}},
sbF:function(a){var z
a=a==null?null:a.q(0,Math.sqrt(a.A(a)))
if(!J.B(this.r,a)){this.r=a
z=this.a
if(z!=null)z.L()}},
saA:function(a){var z
a=a==null?null:a.q(0,Math.sqrt(a.A(a)))
if(!J.B(this.x,a)){this.x=a
z=this.a
if(z!=null)z.L()}},
sbN:function(a){var z
if(!J.B(this.y,a)){this.y=a
z=this.a
if(z!=null)z.L()}},
sbO:function(a){var z
if(!J.B(this.z,a)){this.z=a
z=this.a
if(z!=null)z.L()}},
saB:function(a,b){var z
if(!J.B(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.L()}},
scL:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.L()}},
eK:function(a){var z,y
z=J.M(a)
if(z.t(a,$.$get$aE())){z=this.f
y=[P.x]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aD())){z=this.r
y=[P.x]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aC())){z=this.x
y=[P.x]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$b7())){z=this.y
y=[P.x]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.t(a,$.$get$b8())){z=this.z
y=[P.x]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aN())){z=this.Q
y=[P.x]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bv())){z=this.Q
if(z==null)return H.f([1,1,1,1],[P.x])
else return z.bP(0)}else if(z.t(a,$.$get$b9()))return H.f([this.ch],[P.x])
else if(z.t(a,$.$get$b6())){z=this.cx
y=[P.x]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.x])},
bs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.u(0,0,0)
this.d.H(0,new F.iY(z))
z=z.a
this.r=z.q(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.L()
z=this.a.e
if(!(z==null))z.a9(0)}return!0},
bq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.u(0,0,0)
this.d.H(0,new F.iX(z))
z=z.a
this.x=z.q(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.L()
z=this.a.e
if(!(z==null))z.a9(0)}return!0},
cq:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.b
x.a.a.n()
x=x.e
a.a.a.n()
v=a.e
if(x==null?v==null:x===v)return w}return},
eD:function(a){var z=this.cq(a)
if(z!=null)return z
return a.cq(this)},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z,y,x
z=H.f([],[P.k])
C.a.h(z,C.b.a0(J.a6(this.e),0))
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
x=C.a.C(z,", ")
return a+"{"+x+"}"},
I:function(){return this.w("")},
p:{
bu:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.U()
y=new F.iW(z)
y.b=H.f([],[F.cF])
z.b=y
y=new F.iT(z)
x=[F.aK]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.iP(z)
x=[F.T]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$er()
z.e=0
y=$.$get$aE()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$b7().a)!==0?f:null
z.z=(x&$.$get$b8().a)!==0?g:null
z.Q=(x&$.$get$es().a)!==0?c:null
z.ch=(x&$.$get$b9().a)!==0?i:0
z.cx=(x&$.$get$b6().a)!==0?a:null
return z}}},
iY:{"^":"p:5;a",
$1:function(a){var z,y
H.h(a,"$isT")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
iX:{"^":"p:5;a",
$1:function(a){var z,y
H.h(a,"$isT")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
iO:{"^":"a;a,0b,0c",
n:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.b(P.z("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.L()
return!0},
ej:function(a,b,c,d,e,f,g,h,i){var z=F.bu(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
aR:function(a,b,c,d,e,f){return this.ej(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
af:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].bs()
return!0},
br:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].bq()
return!0},
eo:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.q(0,Math.sqrt(u*u+t*t+s*s))
if(!J.B(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
this.n()
z=H.f([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}},
iP:{"^":"a;a,0b,0c,0d",
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
H:function(a,b){H.c(b,{func:1,ret:-1,args:[F.T]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iQ(this,b))
C.a.H(this.d,new F.iR(this,b))},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}},
iQ:{"^":"p:5;a,b",
$1:function(a){H.h(a,"$isT")
if(!J.B(a.a,this.a))this.b.$1(a)}},
iR:{"^":"p:5;a,b",
$1:function(a){var z
H.h(a,"$isT")
z=this.a
if(!J.B(a.a,z)&&!J.B(a.b,z))this.b.$1(a)}},
iT:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}},
iU:{"^":"a;"},
eq:{"^":"iU;",
at:function(a,b,c){return J.B(b.f,c.f)}},
iV:{"^":"a;"},
iS:{"^":"iV;",
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a,"$isd",[F.U],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.a8(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.u(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.u(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.K(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.u(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bR(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bR(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bu(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sS(0,null)
else b.sS(0,x.q(0,y))
if(w==null)b.sbF(null)
else b.sbF(w.q(0,Math.sqrt(w.A(w))))
if(v==null)b.saA(null)
else b.saA(v.q(0,Math.sqrt(v.A(v))))
if(s<=0||r==null)b.sbN(null)
else b.sbN(r.q(0,s))
if(q<=0||p==null)b.sbO(null)
else b.sbO(p.q(0,q))
if(u<=0||t==null)b.saB(0,null)
else{z=t.q(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.saB(0,new V.G(f,e,d,z))}if(o<=0)b.scL(0,0)
else b.scL(0,n/o)
return b}},
iW:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
I:function(){return this.w("")}}}],["","",,O,{"^":"",fR:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gu:function(){var z=this.rx
if(z==null){z=D.N()
this.rx=z}return z},
ak:function(a){var z=this.rx
if(!(z==null))z.v(a)},
sbU:function(a){var z
if(!this.Q){this.Q=!0
z=new D.J("showFilled",!1,!0,this,[P.af])
z.b=!0
this.ak(z)}},
saW:function(a){var z
if(!this.ch){this.ch=!0
z=new D.J("showWireFrame",!1,!0,this,[P.af])
z.b=!0
this.ak(z)}},
sby:function(a){var z,y
if(!this.c.t(0,a)){z=this.c
this.c=a
y=new D.J("diffuse1",z,a,this,[V.G])
y.b=!0
this.ak(y)}},
sbm:function(a){var z,y
if(!this.d.t(0,a)){z=this.d
this.d=a
y=new D.J("ambient1",z,a,this,[V.G])
y.b=!0
this.ak(y)}},
cc:function(a,b,c,d,e,f,g){var z,y
H.c(e,{func:1,ret:F.ae,args:[F.ae]})
z=b.a.j(0,d)
if(z==null){z=this.de(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
y.cx.bT(f)
y.cy.bT(g)
z.eV(a)},
de:function(a,b){var z,y,x,w
H.h(b,"$isae")
z=a.a
y=$.$get$aE()
x=$.$get$aD()
w=b.en(new Z.iZ(z),new Z.cO(y.a|x.a|$.$get$aC().a|$.$get$aN().a))
w.aS($.$get$aE()).e=this.a.x.c
w.aS($.$get$aD()).e=this.a.y.c
w.aS($.$get$aN()).e=this.a.z.c
w.aS($.$get$aC()).e=this.a.Q.c
return w},
fL:[function(a){var z,y,x
z=F.bs()
y=a.a
y.toString
x=H.c(new O.fT(z,new V.G(1,1,1,1)),{func:1,ret:-1,args:[F.U]})
C.a.H(y.c,x)
x=a.d
x.toString
y=H.c(new O.fU(z),{func:1,ret:-1,args:[F.T]})
C.a.H(x.b,y)
return z},"$1","ge6",4,0,34],
ee:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bs()
z.a=new V.G(0,0.7,1,1)
x=a.a
x.toString
z=H.c(new O.fX(z,y),{func:1,ret:-1,args:[F.U]})
C.a.H(x.c,z)
z=new O.fW(y)
x=a.c
x.toString
w=H.c(new O.fY(y,z),{func:1,ret:-1,args:[F.aK]})
C.a.H(x.b,w)
w=a.d
w.toString
z=H.c(new O.fZ(y,z),{func:1,ret:-1,args:[F.T]})
C.a.H(w.b,z)
return y},function(a){return this.ee(a,null)},"fP","$2$color","$1","ged",4,3,35],
p:{
cs:function(){var z=new O.fR()
z.b=new V.u(0,0,-1)
z.c=new V.G(0.2,0.3,0.4,1)
z.d=new V.G(0.1,0.2,0.3,1)
z.e=new V.G(0.7,0.7,0.7,1)
z.f=new V.G(0.3,0.3,0.3,1)
z.r=new V.G(0.5,0.5,0.5,1)
z.x=new V.G(0.5,0.5,0.5,1)
z.y=new V.G(1,1,1,1)
z.z=new V.G(0.8,0.8,0.8,1)
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
return z}}},fT:{"^":"p:13;a,b",
$1:function(a){var z,y
H.h(a,"$isU")
z=this.a.a
y=a.bv()
y.saB(0,this.b)
y.saA(new V.u(0,0,0))
z.h(0,y)}},fU:{"^":"p:5;a",
$1:function(a){var z,y,x,w,v,u
H.h(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.n()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.n()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.n()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.cj(0,w,v,u)}},fX:{"^":"p:13;a,b",
$1:function(a){var z,y
H.h(a,"$isU")
z=this.b.a
y=a.bv()
y.saB(0,this.a.a)
y.saA(new V.u(0,0,0))
z.h(0,y)}},fW:{"^":"p:37;a",
$2:function(a,b){if(a.eD(b)==null)this.a.c.ef(0,a,b)}},fY:{"^":"p:38;a,b",
$1:function(a){var z,y,x,w
H.h(a,"$isaK")
z=this.a
y=z.a
x=a.a
x.a.a.n()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.n()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.e(z,x)
this.b.$2(w,z[x])}},fZ:{"^":"p:5;a,b",
$1:function(a){var z,y,x,w,v,u
H.h(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.n()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.n()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.n()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.e(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},c6:{"^":"a;"}}],["","",,T,{"^":"",ii:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",ff:{"^":"a;",
aE:function(a,b){return!0},
i:function(a){return"all"},
$isbL:1},bL:{"^":"a;"},dL:{"^":"a;",
aE:["cW",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aE(0,b))return!0
return!1}],
i:["bW",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbL:1},bo:{"^":"dL;0a",
aE:function(a,b){return!this.cW(0,b)},
i:function(a){return"!["+this.bW(0)+"]"}},hW:{"^":"a;0a",
cZ:function(a){var z,y
if(a.a.length<=0)throw H.b(P.z("May not create a SetMatcher with zero characters."))
z=new H.aJ(0,0,[P.y,P.af])
for(y=new H.dI(a,a.gk(a),0,[H.ap(a,"q",0)]);y.D();)z.m(0,y.d,!0)
this.a=z},
aE:function(a,b){return this.a.co(0,b)},
i:function(a){var z=this.a
return P.cI(new H.dH(z,[H.v(z,0)]),0,null)},
$isbL:1,
p:{
a1:function(a){var z=new V.hW()
z.cZ(a)
return z}}},e_:{"^":"a;a,b,0c,0d",
geO:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eb(this.a.J(0,b))
w.a=H.f([],[V.bL])
w.c=!1
C.a.h(this.c,w)
return w},
eC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aE(0,a))return w}return},
i:function(a){return this.b}},e8:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f6(this.b,"\n","\\n")
y=H.f6(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e9:{"^":"a;a,b,0c",
i:function(a){return this.b}},im:{"^":"a;0a,0b,0c",
J:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e_(this,b)
z.c=H.f([],[V.eb])
this.a.m(0,b,z)}return z},
aH:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e9(this,a)
y=P.k
z.c=new H.aJ(0,0,[y,y])
this.b.m(0,a,z)}return z},
fg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.f([],[V.e8])
y=this.c
x=[P.y]
w=H.f([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.aL(a,t)
r=y.eC(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cI(w,0,null)
throw H.b(P.z("Untokenizable string [state: "+y.geO(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.f([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cI(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e8(o==null?p.b:o,q,t)}++t}}}},eb:{"^":"dL;b,0c,0a",
i:function(a){return this.b.b+": "+this.bW(0)}}}],["","",,X,{"^":"",dh:{"^":"a;",$isdN:1},fO:{"^":"e2;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
p:{
dA:function(a,b,c,d,e,f,g){var z,y
z=new X.fO()
y=new V.G(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dW(0,0,1,1)
z.r=y
return z}}},hw:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
al:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.al(null)},"fj","$1","$0","gaK",0,2,1],
sa3:function(a){var z,y,x
if(!J.B(this.b,a)){z=this.b
if(z!=null){z=z.gu()
z.toString
y=H.c(this.gaK(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gu()
z.toString
y=H.c(this.gaK(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.J("mover",x,this.b,this,[U.a2])
z.b=!0
this.al(z)}},
sbI:function(a){var z,y,x
if(!J.B(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.c(this.gaK(),{func:1,ret:-1,args:[D.l]})
C.a.E(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.c(this.gaK(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.J("premover",x,this.a,this,[U.a2])
z.b=!0
this.al(z)}},
$isdN:1,
$isdh:1,
p:{
cE:function(a,b,c,d,e){var z,y,x
z=new X.hw()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.sbI(e)
z.sa3(c)
y=z.c
if(!$.n.$2(y,b)){x=z.c
z.c=b
y=new D.J("fov",x,b,z,[P.x])
y.b=!0
z.al(y)}y=z.d
if(!$.n.$2(y,d)){x=z.d
z.d=d
y=new D.J("near",x,d,z,[P.x])
y.b=!0
z.al(y)}y=z.e
if(!$.n.$2(y,a)){x=z.e
z.e=a
y=new D.J("far",x,a,z,[P.x])
y.b=!0
z.al(y)}return z}}},e2:{"^":"a;"}}],["","",,V,{"^":"",
kW:function(a){P.e6(C.u,new V.kX(a))},
kX:{"^":"p:20;a",
$1:function(a){H.h(a,"$isaM")
P.d6(C.d.cI(this.a.geF(),2)+" fps")}},
i0:{"^":"a;0a,0b",
d0:function(a,b){var z,y,x,w,v,u,t
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
W.Y(z,"scroll",H.c(new V.i3(x),{func:1,ret:-1,args:[t]}),!1,t)},
ei:function(a,b,c){var z,y,x,w
a=H.r(C.c.ep(a,0,4))
if(c.length===0)c=P.eL(C.m,b,C.j,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.fg(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
bl:function(a,b){return this.ei(a,b,"")},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.k],"$asd")
this.e4()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fg(C.a.eJ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.f5(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.eL(C.m,s,C.j,!1)
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
e4:function(){var z,y,x,w
if(this.b!=null)return
z=new V.im()
y=P.k
z.a=new H.aJ(0,0,[y,V.e_])
z.b=new H.aJ(0,0,[y,V.e9])
z.c=z.J(0,"Start")
y=z.J(0,"Start").C(0,"Bold")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").C(0,"Bold")
x=new V.bo()
w=[V.bL]
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").C(0,"BoldEnd")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Italic")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").C(0,"Italic")
x=new V.bo()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").C(0,"ItalicEnd")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Code")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").C(0,"Code")
x=new V.bo()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").C(0,"CodeEnd")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"LinkHead")
x=V.a1(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").C(0,"LinkTail")
x=V.a1(new H.Z("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").C(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").C(0,"LinkHead")
y=new V.bo()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").C(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").C(0,"LinkTail")
y=new V.bo()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").C(0,"Other").a,new V.ff())
x=z.J(0,"Other").C(0,"Other")
y=new V.bo()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.aH("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.aH("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.aH("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.aH("Link")
x=z.J(0,"Other")
x.d=x.a.aH("Other")
this.b=z},
p:{
i1:function(a,b){var z=new V.i0()
z.d0(a,!0)
return z}}},
i3:{"^":"p:39;a",
$1:function(a){P.e5(C.h,new V.i2(this.a))}},
i2:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.d.a4(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=V.i1("Hypersphere",!0)
x=[P.k]
y.ae(H.f(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],x))
y.bl(3,"2D: circle and square")
y.ae(H.f(["Imagine taking slices out of a circle inscribed in a cube. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top the line caused by the circle is small compared to the square. ","The corners of the square aren't covered."],x))
y.bl(3,"3D: sphere and cube")
y.ae(H.f(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],x))
y.bl(3,"4D: hypersphere and hypercube")
y.ae(H.f(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],x))
w=W.di(null,null)
w.className="pageLargeCanvas"
w.id="targetCanvas"
y.a.appendChild(w)
y.ae(H.f(["_The hypercube on the left is an (poorly done) artistic representation._ ","_Click and drag on graphics to rotate the resulting 3D slice._"],x))
y.ae(H.f(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],x))
y.ae(H.f(["\xab[Back to Examples|../]"],x))
v=document.getElementById("targetCanvas")
if(v==null)H.A(P.z("Failed to find an element with the identifier, targetCanvas."))
u=E.ik(v,!0,!0,!0,!1)
t=new M.hI()
y=O.cs()
y.saW(!0)
y.sbU(!0)
y.sby(new V.G(0.2,0.3,0.4,0.2))
y.sbm(new V.G(0.1,0.2,0.3,0.2))
t.f=y
x=U.c_(null)
s=u.r
r=new U.iK()
q=U.cq()
q.sbR(0,!0)
q.sbC(6.283185307179586)
q.sbE(0)
q.sS(0,0)
q.sbD(100)
q.sN(0)
q.sbx(0.5)
r.b=q
q=q.gu()
q.toString
p={func:1,ret:-1,args:[D.l]}
o=H.c(r.gap(),p)
C.a.h(q.a,o)
q=U.cq()
q.sbR(0,!0)
q.sbC(6.283185307179586)
q.sbE(0)
q.sS(0,0)
q.sbD(100)
q.sN(0)
q.sbx(0.5)
r.c=q
C.a.h(q.gu().a,o)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
n=new X.av(!1,!1,!1)
m=r.d
r.d=n
q=[X.av]
o=new D.J("modifiers",m,n,r,q)
o.b=!0
r.M(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.J("invertX",o,!1,r,[P.af])
o.b=!0
r.M(o)}o=r.r
if(o!==!0){r.r=!0
o=new D.J("invertY",o,!0,r,[P.af])
o.b=!0
r.M(o)}r.az(s)
x.h(0,r)
s=u.r
r=new U.iJ()
o=U.cq()
o.sbR(0,!0)
o.sbC(6.283185307179586)
o.sbE(0)
o.sS(0,0)
o.sbD(100)
o.sN(0)
o.sbx(0.2)
r.b=o
o=o.gu()
o.toString
l=H.c(r.gap(),p)
C.a.h(o.a,l)
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
n=new X.av(!0,!1,!1)
m=r.c
r.c=n
o=new D.J("modifiers",m,n,r,q)
o.b=!0
r.M(o)
r.az(s)
x.h(0,r)
s=u.r
r=new U.iL()
r.c=0.01
r.d=0
r.e=0
n=new X.av(!1,!1,!1)
r.b=n
q=new D.J("modifiers",null,n,r,q)
q.b=!0
r.M(q)
r.az(s)
x.h(0,r)
t.a=x
s=E.bX(null,!0,null,"",null,null)
s.sax(0,F.cZ(1,null,null,1))
s.sa3(x)
t.c=s
r=U.at(null)
t.e=r
q=E.bX(null,!0,null,"",null,null)
k=F.bs()
j=Math.sqrt(5)/2+0.5
i=F.a4(k,new V.u(-1,j,0))
h=F.a4(k,new V.u(1,j,0))
o=-j
g=F.a4(k,new V.u(-1,o,0))
f=F.a4(k,new V.u(1,o,0))
e=F.a4(k,new V.u(0,-1,o))
d=F.a4(k,new V.u(0,1,o))
c=F.a4(k,new V.u(0,-1,j))
b=F.a4(k,new V.u(0,1,j))
a=F.a4(k,new V.u(j,0,1))
a0=F.a4(k,new V.u(j,0,-1))
a1=F.a4(k,new V.u(o,0,1))
a2=F.a4(k,new V.u(o,0,-1))
F.R(k,i,a2,d,2)
F.R(k,i,d,h,2)
F.R(k,i,h,b,2)
F.R(k,i,b,a1,2)
F.R(k,i,a1,a2,2)
F.R(k,h,d,a0,2)
F.R(k,d,a2,e,2)
F.R(k,a2,a1,g,2)
F.R(k,a1,b,c,2)
F.R(k,b,h,a,2)
F.R(k,f,a0,e,2)
F.R(k,f,e,g,2)
F.R(k,f,g,c,2)
F.R(k,f,c,a,2)
F.R(k,f,a,a0,2)
F.R(k,e,a0,d,2)
F.R(k,g,e,a2,2)
F.R(k,c,g,a1,2)
F.R(k,a,c,b,2)
F.R(k,a0,a,h,2)
k.eN(new F.eq(),new F.iS())
q.sax(0,k)
o=U.c_(null)
o.h(0,r)
o.h(0,x)
q.sa3(o)
t.d=q
o=X.cE(2000,1.0471975511965976,null,0.1,null)
o.sbI(U.at(V.bO(0.5,0,0)))
o.sa3(U.at(V.bO(0,0,5)))
t.r=o
x=M.dy(null,null,null,null)
x.sbt(o)
x.sau(y)
x.d.h(0,q)
x.d.h(0,s)
t.b=x
a3=new M.i5()
s=O.cs()
s.saW(!0)
s.sby(new V.G(0.4,0.6,0.8,0.2))
s.sbm(new V.G(0.2,0.4,0.6,0.2))
a3.f=s
y=O.cs()
y.saW(!0)
y.sbU(!0)
y.sby(new V.G(0.8,0.6,0.4,0.2))
y.sbm(new V.G(0.6,0.4,0.2,0.2))
a4=new V.G(0.7,0,0,1)
if(!y.e.t(0,a4)){a5=y.e
y.e=a4
r=new D.J("diffuse2",a5,a4,y,[V.G])
r.b=!0
y.ak(r)}a4=new V.G(0.3,0,0,1)
if(!y.f.t(0,a4)){a5=y.f
y.f=a4
r=new D.J("ambient2",a5,a4,y,[V.G])
r.b=!0
y.ak(r)}a3.r=y
r=U.at(null)
a3.e=r
q=U.c_(null)
q.h(0,U.at(V.cB(0.4)))
q.h(0,U.at(V.dM(0.4)))
a3.a=q
o=E.bX(null,!0,null,"",null,null)
o.sau(s)
s=F.cZ(1,null,null,1)
l=F.cZ(1,null,null,1)
l.ek(V.c3(0.5,0.5,0.5,1))
s.aU(l)
o.sax(0,s)
o.sa3(q)
a3.c=o
s=E.bX(null,!0,null,"",null,null)
s.sau(y)
k=F.bs()
y=k.a
l=new V.u(-1,-1,1)
l=l.q(0,Math.sqrt(l.A(l)))
h=y.aR(new V.bq(1,2,4,6),new V.G(1,0,0,1),new V.a8(-1,-1,0),new V.K(0,1),l,null)
y=k.a
l=new V.u(1,-1,1)
l=l.q(0,Math.sqrt(l.A(l)))
g=y.aR(new V.bq(0,3,4,6),new V.G(0,0,1,1),new V.a8(1,-1,0),new V.K(1,1),l,null)
y=k.a
l=new V.u(1,1,1)
l=l.q(0,Math.sqrt(l.A(l)))
f=y.aR(new V.bq(0,2,5,6),new V.G(0,1,0,1),new V.a8(1,1,0),new V.K(1,0),l,null)
y=k.a
l=new V.u(-1,1,1)
l=l.q(0,Math.sqrt(l.A(l)))
e=y.aR(new V.bq(0,2,4,7),new V.G(1,1,0,1),new V.a8(-1,1,0),new V.K(0,0),l,null)
k.d.eg(H.f([h,g,f,e],[F.U]))
k.af()
s.sax(0,k)
y=U.c_(null)
y.h(0,U.at(V.c3(1.1,1.1,1.1,1)))
y.h(0,U.at(V.cB(-1.5707963267948966)))
y.h(0,r)
y.h(0,q)
s.sa3(y)
a3.d=s
y=X.cE(2000,1.0471975511965976,null,0.1,null)
y.sbI(U.at(V.bO(-0.5,0,0)))
y.sa3(U.at(V.bO(0,0,5)))
a3.x=y
a6=X.dA(!1,!0,!1,null,2000,null,0)
q=M.dy(null,null,null,null)
q.scG(0,a6)
q.sbt(y)
q.d.h(0,o)
q.d.h(0,s)
a3.b=q
s=M.aB
q=H.f([x,q],[s])
x=new M.fs()
x.aZ(s)
x.e=!1
x.f=null
x.aJ(x.gdQ(),x.gdR())
x.bk(0,q)
y=u.d
if(y!==x){if(y!=null){y=y.gu()
y.toString
s=H.c(u.gbX(),p)
C.a.E(y.a,s)}u.d=x
y=x.gu()
y.toString
p=H.c(u.gbX(),p)
C.a.h(y.a,p)
u.d2()}z.a=0.5
P.e6(C.t,new M.kQ(z,t,a3))
V.kW(u)},
kQ:{"^":"p:20;a,b,c",
$1:function(a){var z,y,x,w
H.h(a,"$isaM")
z=this.a
y=z.a+=0.01
if(y>=1.01){z.a=-0.01
y=-0.01}x=this.b
if(y<=0||y>=1){x.c.b=!1
x.d.b=!1}else{w=Math.sin(y*3.141592653589793)
x.e.sV(0,V.c3(w,w,w,1))
x.c.b=!0
x.d.b=!0}z=z.a
this.c.e.sV(0,V.bO(0,1-2*z,0))}},
hI:{"^":"a;0a,0b,0c,0d,0e,0f,0r"},
i5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x"}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dD.prototype
return J.h3.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.h4.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.be=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.d1=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.eW=function(a){if(typeof a=="number")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.kE=function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.bD=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.B=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)}
J.aq=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eW(a).ai(a,b)}
J.f8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.eW(a).T(a,b)}
J.f9=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kN(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).j(a,b)}
J.fa=function(a,b,c){return J.bD(a).dY(a,b,c)}
J.fb=function(a,b,c,d){return J.bD(a).ck(a,b,c,d)}
J.fc=function(a,b){return J.kE(a).a2(a,b)}
J.ck=function(a,b,c){return J.be(a).er(a,b,c)}
J.cl=function(a,b){return J.d1(a).F(a,b)}
J.fd=function(a,b){return J.d1(a).H(a,b)}
J.aQ=function(a){return J.M(a).gP(a)}
J.bF=function(a){return J.d1(a).gR(a)}
J.aR=function(a){return J.be(a).gk(a)}
J.fe=function(a,b){return J.bD(a).f7(a,b)}
J.a6=function(a){return J.M(a).i(a)}
I.d4=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.co.prototype
C.v=J.m.prototype
C.a=J.aV.prototype
C.c=J.dD.prototype
C.d=J.bJ.prototype
C.b=J.c1.prototype
C.C=J.bK.prototype
C.D=H.hs.prototype
C.E=W.ht.prototype
C.n=J.hx.prototype
C.i=J.c9.prototype
C.o=W.bw.prototype
C.p=W.j1.prototype
C.q=new P.hv()
C.r=new P.iN()
C.e=new P.jO()
C.h=new P.au(0)
C.t=new P.au(5e4)
C.u=new P.au(5e6)
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.k=function(hooks) { return hooks; }

C.y=function(getTagFallback) {
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
C.z=function() {
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
C.A=function(hooks) {
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
C.B=function(hooks) {
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
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=H.f(I.d4([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=new P.iM(!1)
$.ar=0
$.bh=null
$.db=null
$.cU=!1
$.eY=null
$.eR=null
$.f4=null
$.cf=null
$.ci=null
$.d2=null
$.bb=null
$.bz=null
$.bA=null
$.cV=!1
$.P=C.e
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.n=V.hm()
$.fV="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.fS="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.dR=null
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
I.$lazy(y,x,w)}})(["dr","$get$dr",function(){return H.eX("_$dart_dartClosure")},"cx","$get$cx",function(){return H.eX("_$dart_js")},"ec","$get$ec",function(){return H.aw(H.c7({
toString:function(){return"$receiver$"}}))},"ed","$get$ed",function(){return H.aw(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"ee","$get$ee",function(){return H.aw(H.c7(null))},"ef","$get$ef",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.aw(H.c7(void 0))},"ek","$get$ek",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.aw(H.ei(null))},"eg","$get$eg",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"em","$get$em",function(){return H.aw(H.ei(void 0))},"el","$get$el",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cQ","$get$cQ",function(){return P.j2()},"bB","$get$bB",function(){return[]},"eK","$get$eK",function(){return P.hM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dp","$get$dp",function(){return{}},"et","$get$et",function(){return Z.ai(0)},"er","$get$er",function(){return Z.ai(511)},"aE","$get$aE",function(){return Z.ai(1)},"aD","$get$aD",function(){return Z.ai(2)},"aC","$get$aC",function(){return Z.ai(4)},"b7","$get$b7",function(){return Z.ai(8)},"b8","$get$b8",function(){return Z.ai(16)},"aN","$get$aN",function(){return Z.ai(32)},"bv","$get$bv",function(){return Z.ai(64)},"es","$get$es",function(){return Z.ai(96)},"b9","$get$b9",function(){return Z.ai(128)},"b6","$get$b6",function(){return Z.ai(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.l]},{func:1,ret:-1,opt:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.al]},{func:1,ret:P.H,args:[F.T]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.y,[P.i,E.az]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.x},{func:1,ret:P.H,args:[F.U]},{func:1,ret:-1,args:[P.y,[P.i,U.a2]]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.k,args:[P.y]},{func:1,ret:-1,args:[P.y,[P.i,M.aB]]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[P.aM]},{func:1,args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.af,args:[W.I]},{func:1,ret:W.W,args:[W.I]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,ret:P.H,args:[P.V]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.af,args:[P.x,P.x]},{func:1,ret:P.H,args:[F.U,P.x,P.x]},{func:1,ret:F.ae,args:[F.ae]},{func:1,ret:F.ae,args:[F.ae],named:{color:V.G}},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[F.U,F.U]},{func:1,ret:P.H,args:[F.aK]},{func:1,ret:P.H,args:[W.ac]},{func:1,ret:P.y,args:[,,]},{func:1,ret:-1,args:[P.a],opt:[P.am]}]
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
if(x==y)H.kZ(d||a)
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
Isolate.d4=a.d4
Isolate.d_=a.d_
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
if(typeof dartMainRunner==="function")dartMainRunner(M.f0,[])
else M.f0([])})})()
//# sourceMappingURL=main.dart.js.map
