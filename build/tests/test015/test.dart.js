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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dB(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dC=function(){}
var dart=[["","",,H,{"^":"",ns:{"^":"b;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dF==null){H.mC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c9("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d1()]
if(v!=null)return v
v=H.mF(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d1(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"b;",
v:function(a,b){return a===b},
gT:function(a){return H.bK(a)},
i:["eD",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hY:{"^":"t;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isad:1},
ef:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
d2:{"^":"t;",
gT:function(a){return 0},
i:["eE",function(a){return String(a)}]},
iC:{"^":"d2;"},
cu:{"^":"d2;"},
c5:{"^":"d2;",
i:function(a){var z=a[$.$get$e0()]
if(z==null)return this.eE(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscX:1},
b7:{"^":"t;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.B("add"))
a.push(b)},
Y:function(a,b){var z
if(!!a.fixed$length)H.r(P.B("remove"))
for(z=0;z<a.length;++z)if(J.a_(a[z],b)){a.splice(z,1)
return!0}return!1},
cb:function(a,b){var z,y
H.v(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hJ:function(a){return this.C(a,"")},
hC:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bT:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hW())},
ay:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("fill range"))
P.aN(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.D(0,1))a[z]=d},
b4:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a_(a[z],b))return!0
return!1},
i:function(a){return P.d_(a,"[","]")},
ga1:function(a){return new J.aw(a,a.length,0,[H.x(a,0)])},
gT:function(a){return H.bK(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cd(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
return a[b]},
m:function(a,b,c){H.E(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
hX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.ec(new Array(a),b)},
ec:function(a,b){return J.bD(H.c(a,[b]))},
bD:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
nr:{"^":"b7;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cl:{"^":"t;",
ij:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cz:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
es:function(a,b){var z,y
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bh:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.B("Unexpected toString result: "+z))
x=J.aJ(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
bm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dA(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dA(a,b)},
dA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aM:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fT:function(a,b){if(b<0)throw H.a(H.ag(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a<b},
$isA:1,
$isa1:1},
ee:{"^":"cl;",$ism:1},
ed:{"^":"cl;"},
cm:{"^":"t;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b<0)throw H.a(H.aI(a,b))
if(b>=a.length)H.r(H.aI(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aI(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cd(b,null,null))
return a+b},
aV:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
c=P.aN(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ab:function(a,b){return this.ac(a,b,0)},
t:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
aD:function(a,b){return this.t(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
af:function(a,b){return this.hX(a,b," ")},
eg:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ef:function(a,b){return this.eg(a,b,0)},
hs:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.h3(a,b,c)},
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
cH:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hW:function(){return new P.jh("No element")},
a3:{"^":"jT;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ascv:function(){return[P.m]},
$asw:function(){return[P.m]},
$asi:function(){return[P.m]},
$asd:function(){return[P.m]}},
hH:{"^":"i;"},
el:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aJ(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ii:{"^":"i;a,b,$ti",
ga1:function(a){return new H.ij(J.bx(this.a),this.b,this.$ti)},
gk:function(a){return J.av(this.a)},
I:function(a,b){return this.b.$1(J.cM(this.a,b))},
$asi:function(a,b){return[b]}},
ij:{"^":"d0;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd0:function(a,b){return[b]}},
kl:{"^":"i;a,b,$ti",
ga1:function(a){return new H.km(J.bx(this.a),this.b,this.$ti)}},
km:{"^":"d0;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cj:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.E(b)
H.z(c,H.as(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.as(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jT:{"^":"cn+cv;"}}],["","",,H,{"^":"",
hv:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mx:function(a){return init.types[H.E(a)]},
fX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ag(a))
return z},
bK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iM:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bc:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.J(a).$iscu){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.aD(w,1)
r=H.dG(H.bY(H.b2(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iE:function(){if(!!self.location)return self.location.href
return},
ey:function(a){var z,y,x,w,v
H.bY(a)
z=J.av(a)
if(typeof z!=="number")return z.ez()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iN:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aM(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ag(w))}return H.ey(z)},
ez:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ag(x))
if(x<0)throw H.a(H.ag(x))
if(x>65535)return H.iN(a)}return H.ey(a)},
iO:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ez()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aM(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iL:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iJ:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iF:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iG:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iI:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iK:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iH:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ag(a))},
h:function(a,b){if(a==null)J.av(a)
throw H.a(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.E(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
ms:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
ag:function(a){return new P.aK(!0,a,null,null)},
mn:function(a){if(typeof a!=="number")throw H.a(H.ag(a))
return a},
a:function(a){var z
if(a==null)a=new P.eu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h5})
z.name=""}else z.toString=H.h5
return z},
h5:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aY(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d3(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.et(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eS()
u=$.$get$eT()
t=$.$get$eU()
s=$.$get$eV()
r=$.$get$eZ()
q=$.$get$f_()
p=$.$get$eX()
$.$get$eW()
o=$.$get$f1()
n=$.$get$f0()
m=v.ae(y)
if(m!=null)return z.$1(H.d3(H.O(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.d3(H.O(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.et(H.O(y),m))}}return z.$1(new H.jS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eE()
return a},
bu:function(a){var z
if(a==null)return new H.fu(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fu(a)},
mv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mE:function(a,b,c,d,e,f){H.e(a,"$iscX")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mE)
a.$identity=z
return z},
hq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.iT(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.D()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dW(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mx,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dR:H.cQ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dW(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hn:function(a,b,c,d){var z=H.cQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dW:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hn(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.by
if(v==null){v=H.ce("self")
$.by=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.by
if(v==null){v=H.ce("self")
$.by=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ho:function(a,b,c,d){var z,y
z=H.cQ
y=H.dR
switch(b?-1:a){case 0:throw H.a(H.j2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hp:function(a,b){var z,y,x,w,v,u,t,s
z=$.by
if(z==null){z=H.ce("self")
$.by=z}y=$.dQ
if(y==null){y=H.ce("receiver")
$.dQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ho(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()},
dB:function(a,b,c,d,e,f,g){var z,y
z=J.bD(H.bY(b))
H.E(c)
y=!!J.J(d).$isd?J.bD(d):d
return H.hq(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
mt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
mS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
h1:function(a,b){throw H.a(H.ay(a,H.O(b).substring(3)))},
mU:function(a,b){var z=J.aJ(b)
throw H.a(H.hm(a,z.t(b,3,z.gk(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.h1(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.mU(a,b)},
bY:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.a(H.ay(a,"List"))},
fZ:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.h1(a,b)},
fT:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
ca:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fT(J.J(a))
if(z==null)return!1
y=H.fW(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dx)return a
$.dx=!0
try{if(H.ca(a,b))return a
z=H.cc(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dx=!1}},
dD:function(a,b){if(a!=null&&!H.dA(a,b))H.r(H.ay(a,H.cc(b)))
return a},
fN:function(a){var z
if(a instanceof H.n){z=H.fT(J.J(a))
if(z!=null)return H.cc(z)
return"Closure"}return H.bc(a)},
mZ:function(a){throw H.a(new P.hA(H.O(a)))},
fU:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
oo:function(a,b,c){return H.bv(a["$as"+H.l(c)],H.b2(b))},
aW:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.bv(a["$as"+H.l(c)],H.b2(b))
return z==null?null:z[d]},
as:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.bv(a["$as"+H.l(b)],H.b2(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.E(b)
z=H.b2(a)
return z==null?null:z[b]},
cc:function(a){var z=H.b3(a,null)
return z},
b3:function(a,b){var z,y
H.v(b,"$isd",[P.j],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b3(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b3(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b3(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b3(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dG:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.j],"$asd")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b3(u,c)}v="<"+z.i(0)+">"
return v},
bv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bW:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b2(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fQ(H.bv(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.bY(c)
H.O(d)
if(a==null)return a
z=H.bW(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dG(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fQ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
om:function(a,b,c){return a.apply(b,H.bv(J.J(b)["$as"+H.l(c)],H.b2(b)))},
fY:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fY(z)}return!1},
dA:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fY(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ca(a,b)}y=J.J(a).constructor
x=H.b2(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dA(a,b))throw H.a(H.ay(a,H.cc(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fW(a,b,c,d)
if('func' in a)return c.builtin$cls==="cX"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bv(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cc(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fQ(H.bv(r,z),b,u,d)},
fW:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mR(m,b,l,d)},
mR:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
on:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mF:function(a){var z,y,x,w,v,u
z=H.O($.fV.$1(a))
y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fP.$2(a,z))
if(z!=null){y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cJ(x)
$.cF[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cI[z]=x
return x}if(v==="-"){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h0(a,x)
if(v==="*")throw H.a(P.c9(z))
if(init.leafTags[z]===true){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h0(a,x)},
h0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dH(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cJ:function(a){return J.dH(a,!1,null,!!a.$isF)},
mQ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cJ(z)
else return J.dH(z,c,null,null)},
mC:function(){if(!0===$.dF)return
$.dF=!0
H.mD()},
mD:function(){var z,y,x,w,v,u,t,s
$.cF=Object.create(null)
$.cI=Object.create(null)
H.my()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h2.$1(v)
if(u!=null){t=H.mQ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
my:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.br(C.K,H.br(C.P,H.br(C.u,H.br(C.u,H.br(C.O,H.br(C.L,H.br(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fV=new H.mz(v)
$.fP=new H.mA(u)
$.h2=new H.mB(t)},
br:function(a,b){return a(b)||b},
h3:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h4:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hu:{"^":"b;$ti",
i:function(a){return P.d5(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hv()},
$isK:1},
hw:{"^":"hu;a,b,c,$ti",
gk:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bw(0,b))return
return this.df(b)},
df:function(a){return this.b[H.O(a)]},
H:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.df(v),z))}}},
iS:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bD(z)
y=z[0]
x=z[1]
return new H.iS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jF:{"^":"b;a,b,c,d,e,f",
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
p:{
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iz:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
et:function(a,b){return new H.iz(a,b==null?null:b.method)}}},
i0:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d3:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i0(a,y,z?null:b.receiver)}}},
jS:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n_:{"^":"n:21;a",
$1:function(a){if(!!J.J(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fu:{"^":"b;a,0b",
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
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
gew:function(){return this},
$iscX:1,
gew:function(){return this}},
eJ:{"^":"n;"},
ji:{"^":"eJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cP:{"^":"eJ;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bK(this.a)
else y=typeof z!=="object"?J.bZ(z):H.bK(z)
return(y^H.bK(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
cQ:function(a){return a.a},
dR:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cP("self","target","receiver","name")
y=J.bD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jG:{"^":"a4;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.jG("TypeError: "+H.l(P.ci(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a4;a",
i:function(a){return this.a},
p:{
hm:function(a,b){return new H.hl("CastError: "+H.l(P.ci(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
j1:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j2:function(a){return new H.j1(a)}}},
b_:{"^":"ie;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gao:function(a){return new H.i5(this,[H.x(this,0)])},
bw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dc(y,b)}else return this.hG(b)},
hG:function(a){var z=this.d
if(z==null)return!1
return this.cC(this.c_(z,this.cB(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bp(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bp(w,b)
x=y==null?null:y.b
return x}else return this.hH(b)},
hH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c_(z,this.cB(a))
x=this.cC(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c4()
this.b=z}this.d4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c4()
this.c=y}this.d4(y,b,c)}else this.hI(b,c)},
hI:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.c4()
this.d=z}y=this.cB(a)
x=this.c_(z,y)
if(x==null)this.c9(z,y,[this.c5(a,b)])
else{w=this.cC(x,a)
if(w>=0)x[w].b=b
else x.push(this.c5(a,b))}},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
d4:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bp(a,b)
if(z==null)this.c9(a,b,this.c5(b,c))
else z.b=c},
f9:function(){this.r=this.r+1&67108863},
c5:function(a,b){var z,y
z=new H.i4(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f9()
return z},
cB:function(a){return J.bZ(a)&0x3ffffff},
cC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a_(a[y].a,b))return y
return-1},
i:function(a){return P.d5(this)},
bp:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
f3:function(a,b){delete a[b]},
dc:function(a,b){return this.bp(a,b)!=null},
c4:function(){var z=Object.create(null)
this.c9(z,"<non-identifier-key>",z)
this.f3(z,"<non-identifier-key>")
return z},
$isei:1},
i4:{"^":"b;a,b,0c,0d"},
i5:{"^":"hH;a,$ti",
gk:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.i6(z,z.r,this.$ti)
y.c=z.e
return y}},
i6:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mz:{"^":"n:21;a",
$1:function(a){return this.a(a)}},
mA:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mB:{"^":"n:50;a",
$1:function(a){return this.a(H.O(a))}},
hZ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isev:1,
$isiU:1,
p:{
i_:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mu:function(a){return J.ec(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
iw:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aI(b,a))},
m7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ms(a,b,c))
return b},
es:{"^":"t;",$ises:1,"%":"ArrayBuffer"},
da:{"^":"t;",$isda:1,$isjH:1,"%":"DataView;ArrayBufferView;d9|fo|fp|ix|fq|fr|b0"},
d9:{"^":"da;",
gk:function(a){return a.length},
$isF:1,
$asF:I.dC},
ix:{"^":"fp;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.E(b)
H.mt(c)
H.aH(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.A]},
$asw:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
"%":"Float32Array|Float64Array"},
b0:{"^":"fr;",
m:function(a,b,c){H.E(b)
H.E(c)
H.aH(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.m]},
$asw:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
nB:{"^":"b0;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nC:{"^":"b0;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nD:{"^":"b0;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nE:{"^":"b0;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nF:{"^":"b0;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nG:{"^":"b0;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
db:{"^":"b0;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
bT:function(a,b,c){return new Uint8Array(a.subarray(b,H.m7(b,c,a.length)))},
$isdb:1,
$isQ:1,
"%":";Uint8Array"},
fo:{"^":"d9+w;"},
fp:{"^":"fo+cj;"},
fq:{"^":"d9+w;"},
fr:{"^":"fq+cj;"}}],["","",,P,{"^":"",
ko:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.kq(z),1)).observe(y,{childList:true})
return new P.kp(z,y,x)}else if(self.setImmediate!=null)return P.ml()
return P.mm()},
ob:[function(a){self.scheduleImmediate(H.bs(new P.kr(H.f(a,{func:1,ret:-1})),0))},"$1","mk",4,0,11],
oc:[function(a){self.setImmediate(H.bs(new P.ks(H.f(a,{func:1,ret:-1})),0))},"$1","ml",4,0,11],
od:[function(a){P.dk(C.q,H.f(a,{func:1,ret:-1}))},"$1","mm",4,0,11],
dk:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.f.a4(a.a,1000)
return P.lr(z<0?0:z,b)},
eN:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bj]})
z=C.f.a4(a.a,1000)
return P.ls(z<0?0:z,b)},
mg:function(a,b){if(H.ca(a,{func:1,args:[P.b,P.ax]}))return b.i5(a,null,P.b,P.ax)
if(H.ca(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mf:function(){var z,y
for(;z=$.bq,z!=null;){$.bU=null
y=z.b
$.bq=y
if(y==null)$.bT=null
z.a.$0()}},
ol:[function(){$.dy=!0
try{P.mf()}finally{$.bU=null
$.dy=!1
if($.bq!=null)$.$get$ds().$1(P.fR())}},"$0","fR",0,0,3],
fM:function(a){var z=new P.fi(H.f(a,{func:1,ret:-1}))
if($.bq==null){$.bT=z
$.bq=z
if(!$.dy)$.$get$ds().$1(P.fR())}else{$.bT.b=z
$.bT=z}},
mj:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fM(a)
$.bU=$.bT
return}y=new P.fi(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bq=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
mV:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cE(null,null,C.j,a)
return}y.toString
P.cE(null,null,y,H.f(y.cf(a),z))},
eM:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dk(a,b)}return P.dk(a,H.f(y.cf(b),z))},
jC:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bj]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.eN(a,b)}x=y.dH(b,P.bj)
$.T.toString
return P.eN(a,H.f(x,z))},
cD:function(a,b,c,d,e){var z={}
z.a=d
P.mj(new P.mh(z,e))},
fI:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fJ:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mi:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cE:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cf(d):c.hp(d,-1)
P.fM(d)},
kq:{"^":"n:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kp:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kr:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ks:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fy:{"^":"b;a,0b,c",
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.lu(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eR:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.lt(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbj:1,
p:{
lr:function(a,b){var z=new P.fy(!0,0)
z.eQ(a,b)
return z},
ls:function(a,b){var z=new P.fy(!1,0)
z.eR(a,b)
return z}}},
lu:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lt:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.eH(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
hP:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.f(this.d,{func:1,ret:P.ad,args:[P.b]}),a.a,P.ad,P.b)},
hF:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.ca(z,{func:1,args:[P.b,P.ax]}))return H.dD(w.ib(z,a.a,a.b,null,y,P.ax),x)
else return H.dD(w.cO(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;dz:a<,b,0fO:c<,$ti",
er:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mg(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.T,[c])
w=b==null?1:3
this.d5(new P.bo(x,w,a,b,[z,c]))
return x},
ii:function(a,b){return this.er(a,null,b)},
d5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaU")
z=y.a
if(z<4){y.d5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cE(null,null,z,H.f(new P.kH(this,a),{func:1,ret:-1}))}},
dq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaU")
y=u.a
if(y<4){u.dq(a)
return}this.a=y
this.c=u.c}z.a=this.bq(a)
y=this.b
y.toString
P.cE(null,null,y,H.f(new P.kM(z,this),{func:1,ret:-1}))}},
c7:function(){var z=H.e(this.c,"$isbo")
this.c=null
return this.bq(z)},
bq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d8:function(a){var z,y,x,w
z=H.x(this,0)
H.dD(a,{futureOr:1,type:z})
y=this.$ti
x=H.bW(a,"$isbC",y,"$asbC")
if(x){z=H.bW(a,"$isaU",y,null)
if(z)P.fl(a,this)
else P.kI(a,this)}else{w=this.c7()
H.z(a,z)
this.a=4
this.c=a
P.bP(this,w)}},
bW:[function(a,b){var z
H.e(b,"$isax")
z=this.c7()
this.a=8
this.c=new P.al(a,b)
P.bP(this,z)},function(a){return this.bW(a,null)},"ir","$2","$1","gf_",4,2,46],
$isbC:1,
p:{
kI:function(a,b){var z,y,x
b.a=1
try{a.er(new P.kJ(b),new P.kK(b),null)}catch(x){z=H.au(x)
y=H.bu(x)
P.mV(new P.kL(b,z,y))}},
fl:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaU")
if(z>=4){y=b.c7()
b.a=a.a
b.c=a.c
P.bP(b,y)}else{y=H.e(b.c,"$isbo")
b.a=2
b.c=a
a.dq(y)}},
bP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cD(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bP(z.a,b)}y=z.a
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
if(p){H.e(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cD(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kP(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kO(x,b,r).$0()}else if((y&2)!==0)new P.kN(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.J(y).$isbC){if(y.a>=4){n=H.e(t.c,"$isbo")
t.c=null
b=t.bq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fl(y,t)
return}}m=b.b
n=H.e(m.c,"$isbo")
m.c=null
b=m.bq(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kH:{"^":"n:0;a,b",
$0:function(){P.bP(this.a,this.b)}},
kM:{"^":"n:0;a,b",
$0:function(){P.bP(this.b,this.a.a)}},
kJ:{"^":"n:14;a",
$1:function(a){var z=this.a
z.a=0
z.d8(a)}},
kK:{"^":"n:51;a",
$2:function(a,b){this.a.bW(a,H.e(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kL:{"^":"n:0;a,b,c",
$0:function(){this.a.bW(this.b,this.c)}},
kP:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ep(H.f(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bu(v)
if(this.d){w=H.e(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.J(z).$isbC){if(z instanceof P.aU&&z.gdz()>=4){if(z.gdz()===8){w=this.b
w.b=H.e(z.gfO(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ii(new P.kQ(t),null)
w.a=!1}}},
kQ:{"^":"n:45;a",
$1:function(a){return this.a}},
kO:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cO(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bu(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kN:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isal")
w=this.c
if(w.hP(z)&&w.e!=null){v=this.b
v.b=w.hF(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bu(u)
w=H.e(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fi:{"^":"b;a,0b"},
dg:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aU(0,$.T,[P.m])
z.a=0
this.hM(new P.jl(z,this),!0,new P.jm(z,y),y.gf_())
return y}},
jl:{"^":"n;a,b",
$1:function(a){H.z(a,H.as(this.b,"dg",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.as(this.b,"dg",0)]}}},
jm:{"^":"n:0;a,b",
$0:function(){this.b.d8(this.a.a)}},
eG:{"^":"b;$ti"},
jk:{"^":"b;"},
bj:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lW:{"^":"b;",$isoa:1},
mh:{"^":"n:0;a,b",
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
la:{"^":"lW;",
ic:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fI(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bu(x)
P.cD(null,null,this,z,H.e(y,"$isax"))}},
ie:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fJ(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bu(x)
P.cD(null,null,this,z,H.e(y,"$isax"))}},
hp:function(a,b){return new P.lc(this,H.f(a,{func:1,ret:b}),b)},
cf:function(a){return new P.lb(this,H.f(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.ld(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fI(null,null,this,a,b)},
cO:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fJ(null,null,this,a,b,c,d)},
ib:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mi(null,null,this,a,b,c,d,e,f)},
i5:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lc:{"^":"n;a,b,c",
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lb:{"^":"n:3;a,b",
$0:function(){return this.a.ic(this.b)}},
ld:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ie(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i7:function(a,b,c,d,e){return new H.b_(0,0,[d,e])},
i8:function(a,b,c){H.bY(a)
return H.v(H.mv(a,new H.b_(0,0,[b,c])),"$isei",[b,c],"$asei")},
ej:function(a,b){return new H.b_(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kX(0,0,[d])},
hV:function(a,b,c){var z,y
if(P.dz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.me(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eH(b,H.fZ(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d_:function(a,b,c){var z,y,x
if(P.dz(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.eH(x.gaH(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
dz:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
me:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
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
ek:function(a,b,c){var z=P.i7(null,null,null,b,c)
a.H(0,new P.i9(z,b,c))
return z},
d5:function(a){var z,y,x
z={}
if(P.dz(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.dL(a,new P.ig(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
kX:{"^":"kR;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fn(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.du()
this.b=z}return this.d6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.du()
this.c=y}return this.d6(y,b)}else return this.eT(0,b)},
eT:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.du()
this.d=z}y=this.d9(b)
x=z[y]
if(x==null)z[y]=[this.bV(b)]
else{if(this.dg(x,b)>=0)return!1
x.push(this.bV(b))}return!0},
Y:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dr(this.c,b)
else return this.fJ(0,b)},
fJ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f6(z,b)
x=this.dg(y,b)
if(x<0)return!1
this.dB(y.splice(x,1)[0])
return!0},
d6:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdt")!=null)return!1
a[b]=this.bV(b)
return!0},
dr:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdt")
if(z==null)return!1
this.dB(z)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&67108863},
bV:function(a){var z,y
z=new P.dt(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d7()
return z},
dB:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d7()},
d9:function(a){return J.bZ(a)&0x3ffffff},
f6:function(a,b){return a[this.d9(b)]},
dg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a_(a[y].a,b))return y
return-1},
p:{
du:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dt:{"^":"b;a,0b,0c"},
kY:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fn:function(a,b,c){var z=new P.kY(a,b,[c])
z.c=a.e
return z}}},
kR:{"^":"j3;"},
i9:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cn:{"^":"kZ;",$isi:1,$isd:1},
w:{"^":"b;$ti",
ga1:function(a){return new H.el(a,this.gk(a),0,[H.aW(this,a,"w",0)])},
I:function(a,b){return this.j(a,b)},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aW(this,a,"w",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.p(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.a(P.aY(a))}},
il:function(a,b){var z,y,x
z=H.c([],[H.aW(this,a,"w",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ik:function(a){return this.il(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.aW(this,a,"w",0))
P.aN(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d_(a,"[","]")}},
ie:{"^":"ah;"},
ig:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aW(this,a,"ah",0),H.aW(this,a,"ah",1)]})
for(z=J.bx(this.gao(a));z.E();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.av(this.gao(a))},
i:function(a){return P.d5(a)},
$isK:1},
lz:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
ih:{"^":"b;$ti",
j:function(a,b){return J.dK(this.a,b)},
m:function(a,b,c){J.cK(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
H:function(a,b){J.dL(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gk:function(a){return J.av(this.a)},
i:function(a){return J.a9(this.a)},
$isK:1},
f8:{"^":"lA;a,$ti"},
j5:{"^":"b;$ti",
i:function(a){return P.d_(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=P.fn(this,this.r,H.x(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isi:1},
j3:{"^":"j5;"},
kZ:{"^":"b+w;"},
lA:{"^":"ih+lz;$ti"}}],["","",,P,{"^":"",hi:{"^":"c0;a",
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aN(c,d,b.length,null,null,null)
z=$.$get$fj()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cH(C.b.F(b,s))
o=H.cH(C.b.F(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.t(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dP(b,u,d,v,t,k)
else{j=C.f.bm(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aV(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dP(b,u,d,v,t,i)
else{j=C.f.bm(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aV(b,d,d,j===2?"==":"=")}return b},
$asc0:function(){return[[P.d,P.m],P.j]},
p:{
dP:function(a,b,c,d,e,f){if(C.f.bm(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bz;a",
$asbz:function(){return[[P.d,P.m],P.j]}},c0:{"^":"b;$ti"},bz:{"^":"jk;$ti"},hJ:{"^":"c0;",
$asc0:function(){return[P.j,[P.d,P.m]]}},k5:{"^":"hJ;a",
ghz:function(){return C.G}},kc:{"^":"bz;",
b5:function(a,b,c){var z,y,x,w
z=a.length
P.aN(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lV(0,0,x)
if(w.f5(a,b,z)!==z)w.dC(J.ha(a,z-1),0)
return C.W.bT(x,0,w.b)},
cm:function(a){return this.b5(a,0,null)},
$asbz:function(){return[P.j,[P.d,P.m]]}},lV:{"^":"b;a,b,c",
dC:function(a,b){var z,y,x,w,v
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
f5:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k6:{"^":"bz;a",
b5:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.m],"$asd")
z=P.k7(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.aN(b,c,y,null,null,null)
x=new P.ap("")
w=new P.lS(!1,x,!0,0,0,0)
w.b5(a,b,y)
w.hB(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cm:function(a){return this.b5(a,0,null)},
$asbz:function(){return[[P.d,P.m],P.j]},
p:{
k7:function(a,b,c,d){H.v(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.k8(!1,b,c,d)
return},
k8:function(a,b,c,d){var z,y,x
z=$.$get$fc()
if(z==null)return
y=0===c
if(y&&!0)return P.dq(z,b)
x=b.length
d=P.aN(c,d,x,null,null,null)
if(y&&d===x)return P.dq(z,b)
return P.dq(z,b.subarray(c,d))},
dq:function(a,b){if(P.ka(b))return
return P.kb(a,b)},
kb:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
ka:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k9:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},lS:{"^":"b;a,b,c,d,e,f",
hB:function(a,b,c){var z
H.v(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lU(c)
v=new P.lT(this,b,c,a)
$label0$0:for(u=J.aJ(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bP()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.f.bh(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.f.bh(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.f.bh(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cU()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.f.bh(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.f.bh(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lU:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aJ(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bP()
if((w&127)!==w)return x-b}return z-b}},lT:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c7(this.d,a,b)}}}],["","",,P,{"^":"",
bX:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.iM(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hL:function(a){var z=J.J(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bc(a)+"'"},
ib:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hX(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
em:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga1(a);x.E();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.v(J.bD(y),"$isd",z,"$asd")},
c7:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aN(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.ez(z?C.a.bT(a,b,c):a)}if(!!J.J(a).$isdb)return H.iO(a,b,P.aN(b,c,a.length,null,null,null))
return P.jn(a,b,c)},
jn:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a0(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.av(a),null,null))
y=J.bx(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gP(y))}return H.ez(w)},
iV:function(a,b,c){return new H.hZ(a,H.i_(a,!1,!0,!1))},
cw:function(){var z=H.iE()
if(z!=null)return P.jY(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hL(a)},
u:function(a){return new P.fk(a)},
ic:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dJ:function(a){H.mT(a)},
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f9(b>0||c<c?C.b.t(a,b,c):a,5,null).geu()
else if(y===32)return P.f9(C.b.t(a,z,c),0,null).geu()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fK(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.io()
if(v>=b)if(P.fK(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.p(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ac(a,"..",s)))n=r>s+2&&C.b.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ac(a,"file",b)){if(u<=b){if(!C.b.ac(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aV(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ac(a,"http",b)){if(x&&t+3===s&&C.b.ac(a,"80",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ac(a,"https",b)){if(x&&t+4===s&&C.b.ac(a,"443",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lf(a,v,u,t,s,r,q,o)}return P.lB(a,b,c,v,u,t,s,r,q,o)},
fb:function(a,b){var z=P.j
return C.a.hC(H.c(a.split("&"),[z]),P.ej(z,z),new P.k0(b),[P.K,P.j,P.j])},
jW:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jX(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bX(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bX(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.cU()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jZ(a)
y=new P.k_(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jW(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.f.aM(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
m8:function(){var z,y,x,w,v
z=P.ic(22,new P.ma(),!0,P.Q)
y=new P.m9(z)
x=new P.mb()
w=new P.mc()
v=H.e(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isQ"),"]",5)
v=H.e(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isQ"),"az",21)
v=H.e(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fK:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.m],"$asd")
z=$.$get$fL()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ad:{"^":"b;"},
"+bool":0,
an:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.f.aM(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hB(H.iL(this))
y=P.c1(H.iJ(this))
x=P.c1(H.iF(this))
w=P.c1(H.iG(this))
v=P.c1(H.iI(this))
u=P.c1(H.iK(this))
t=P.hC(H.iH(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a}}},
A:{"^":"a1;"},
"+double":0,
bA:{"^":"b;a",
L:function(a,b){return C.f.L(this.a,H.e(b,"$isbA").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bA))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hG()
y=this.a
if(y<0)return"-"+new P.bA(0-y).i(0)
x=z.$1(C.f.a4(y,6e7)%60)
w=z.$1(C.f.a4(y,1e6)%60)
v=new P.hF().$1(y%1e6)
return""+C.f.a4(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e6:function(a,b,c,d,e,f){return new P.bA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hF:{"^":"n:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hG:{"^":"n:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
eu:{"^":"a4;",
i:function(a){return"Throw of null."}},
aK:{"^":"a4;a,b,c,d",
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbY()+y+x
if(!this.a)return w
v=this.gbX()
u=P.ci(this.b)
return w+v+": "+H.l(u)},
p:{
c_:function(a){return new P.aK(!1,null,null,a)},
cd:function(a,b,c){return new P.aK(!0,a,b,c)},
dM:function(a){return new P.aK(!1,null,a,"Must not be null")}}},
cq:{"^":"aK;e,f,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aN:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hT:{"^":"aK;e,k:f>,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){if(J.h6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.E(e!=null?e:J.av(b))
return new P.hT(b,z,!0,a,c,"Index out of range")}}},
jU:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jU(a)}}},
jR:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c9:function(a){return new P.jR(a)}}},
jh:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
ht:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ci(z))+"."},
p:{
aY:function(a){return new P.ht(a)}}},
iA:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eE:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hA:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fk:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
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
m=""}l=C.b.t(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"a1;"},
"+int":0,
i:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga1(this)
for(y=0;z.E();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hV(this,"(",")")}},
d0:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
G:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gT:function(a){return H.bK(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
j:{"^":"b;",$isev:1},
"+String":0,
ap:{"^":"b;aH:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnZ:1,
p:{
eH:function(a,b,c){var z=J.bx(b)
if(!z.E())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.E())}else{a+=H.l(z.gP(z))
for(;z.E();)a=a+c+H.l(z.gP(z))}return a}}},
k0:{"^":"n:40;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aJ(b).ef(b,"=")
if(y===-1){if(b!=="")J.cK(a,P.dw(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.aD(b,y+1)
z=this.a
J.cK(a,P.dw(x,0,x.length,z,!0),P.dw(w,0,w.length,z,!0))}return a}},
jX:{"^":"n:39;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
jZ:{"^":"n:38;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k_:{"^":"n:25;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bX(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cA:{"^":"b;bR:a<,b,c,d,en:e>,f,r,0x,0y,0z,0Q,0ch",
gev:function(){return this.b},
gcA:function(a){var z=this.c
if(z==null)return""
if(C.b.ab(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbK:function(a){var z=this.d
if(z==null)return P.fA(this.a)
return z},
gcL:function(a){var z=this.f
return z==null?"":z},
gea:function(){var z=this.r
return z==null?"":z},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
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
if(x&&!C.b.ab(d,"/"))d="/"+d
g=P.dv(g,0,0,h)
return new P.cA(i,j,c,f,d,g,this.r)},
cM:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gbc:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f8(P.fb(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geb:function(){return this.c!=null},
gee:function(){return this.f!=null},
gec:function(){return this.r!=null},
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
if(!!z.$isdp){y=this.a
x=b.gbR()
if(y==null?x==null:y===x)if(this.c!=null===b.geb()){y=this.b
x=b.gev()
if(y==null?x==null:y===x){y=this.gcA(this)
x=z.gcA(b)
if(y==null?x==null:y===x){y=this.gbK(this)
x=z.gbK(b)
if(y==null?x==null:y===x)if(this.e===z.gen(b)){y=this.f
x=y==null
if(!x===b.gee()){if(x)y=""
if(y===z.gcL(b)){z=this.r
y=z==null
if(!y===b.gec()){if(y)z=""
z=z===b.gea()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdp:1,
p:{
cB:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$fF().b
if(typeof b!=="string")H.r(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.as(c,"c0",0))
y=c.ghz().cm(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lM(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lN(a,z,e-1):""
x=P.lG(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lJ(P.bX(C.b.t(a,w,g),new P.lC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.dv(a,h+1,i,null):null
return new P.cA(j,y,x,v,u,t,i<c?P.lF(a,i+1,c):null)},
fA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.a(P.Y(c,a,b))},
lJ:function(a,b){if(a!=null&&a===P.fA(b))return
return a},
lG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.X(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.fa(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fa(a,b,c)
return"["+a+"]"}return P.lP(a,b,c)},
lP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fH(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fB(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fD(C.b.F(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lD(y?a.toLowerCase():a)},
lD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lN:function(a,b,c){return P.bR(a,b,c,C.S)},
lH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.y):C.t.j1(d,new P.lI(),P.j).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ab(w,"/"))w="/"+w
return P.lO(w,e,f)},
lO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ab(a,"/"))return P.lQ(a,!z||c)
return P.lR(a)},
dv:function(a,b,c,d){var z,y
z={}
H.v(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.c_("Both query and queryParameters specified"))
return P.bR(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.H(0,new P.lK(new P.lL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lF:function(a,b,c){return P.bR(a,b,c,C.n)},
fH:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cH(y)
v=H.cH(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aM(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fB:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.f.fT(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c7(y,0,null)},
bR:function(a,b,c,d){var z=P.fG(a,b,c,H.v(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.t(a,b,c):z},
fG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fH(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fB(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.t(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fE:function(a){if(C.b.ab(a,"."))return!0
return C.b.ef(a,"/.")!==-1},
lR:function(a){var z,y,x,w,v,u,t
if(!P.fE(a))return a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.a_(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lQ:function(a,b){var z,y,x,w,v,u
if(!P.fE(a))return!b?P.fC(a):a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaA(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaA(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fC(z[0]))}return C.a.C(z,"/")},
fC:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fD(J.h7(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.aD(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c_("Invalid URL encoding"))}}return z},
dw:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dE(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.t(a,b,c)
else u=new H.a3(y.t(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.c_("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c_("Truncated URI"))
C.a.h(u,P.lE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.m],"$asd")
return new P.k6(!1).cm(u)},
fD:function(a){var z=a|32
return 97<=z&&z<=122}}},
lC:{"^":"n:22;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lI:{"^":"n:36;",
$1:function(a){return P.cB(C.U,a,C.k,!1)}},
lL:{"^":"n:23;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cB(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cB(C.p,b,C.k,!0))}}},
lK:{"^":"n:34;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bx(H.fZ(b,"$isi")),y=this.a;z.E();)y.$2(a,H.O(z.gP(z)))}},
jV:{"^":"b;a,b,c",
geu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.eg(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.n)
w=x}else v=null
z=new P.kx(this,"data",null,null,null,P.bR(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.b.ac(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.hS(0,a,s,y)
else{r=P.fG(a,s,y,C.n,!0)
if(r!=null)a=C.b.aV(a,s,y,r)}return new P.jV(a,z,c)}}},
ma:{"^":"n:30;",
$1:function(a){return new Uint8Array(96)}},
m9:{"^":"n:29;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
mb:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mc:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lf:{"^":"b;a,b,c,d,e,f,r,x,0y",
geb:function(){return this.c>0},
ged:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gee:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gec:function(){return this.r<this.a.length},
gdi:function(){return this.b===4&&C.b.ab(this.a,"http")},
gdj:function(){return this.b===5&&C.b.ab(this.a,"https")},
gbR:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdi()){this.x="http"
z="http"}else if(this.gdj()){this.x="https"
z="https"}else if(z===4&&C.b.ab(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ab(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
gev:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcA:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbK:function(a){var z
if(this.ged()){z=this.d
if(typeof z!=="number")return z.D()
return P.bX(C.b.t(this.a,z+1,this.e),null,null)}if(this.gdi())return 80
if(this.gdj())return 443
return 0},
gen:function(a){return C.b.t(this.a,this.e,this.f)},
gcL:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.t(this.a,z+1,y):""},
gea:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aD(y,z+1):""},
gbc:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.V
z=P.j
return new P.f8(P.fb(this.gcL(this),C.k),[z,z])},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
i=this.gbR()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.ged()?this.gbK(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ab(d,"/"))d="/"+d
g=P.dv(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aD(y,x+1)
return new P.cA(i,j,c,f,d,g,b)},
cM:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdp)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdp:1},
kx:{"^":"cA;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cT:function(a,b){var z=document.createElement("canvas")
return z},
hI:function(a){H.e(a,"$isaa")
return"wheel"},
cZ:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hU:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseb")
try{J.hd(z,a)}catch(x){H.au(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fm:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fO:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dH(a,b)},
a6:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n1:{"^":"t;0k:length=","%":"AccessibleNodeList"},
n2:{"^":"a6;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n3:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cO:{"^":"t;",$iscO:1,"%":";Blob"},
n9:{"^":"a6;0a2:type}","%":"HTMLButtonElement"},
cS:{"^":"a6;",
bQ:function(a,b,c){if(c!=null)return a.getContext(b,P.mo(c,null))
return a.getContext(b)},
ex:function(a,b){return this.bQ(a,b,null)},
$iscS:1,
"%":"HTMLCanvasElement"},
dU:{"^":"t;",$isdU:1,"%":"CanvasRenderingContext2D"},
nb:{"^":"M;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nd:{"^":"hz;0k:length=","%":"CSSPerspective"},
b4:{"^":"t;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ne:{"^":"kw;0k:length=",
ey:function(a,b){var z=a.getPropertyValue(this.eX(a,b))
return z==null?"":z},
eX:function(a,b){var z,y
z=$.$get$dZ()
y=z[b]
if(typeof y==="string")return y
y=this.fU(a,b)
z[b]=y
return y},
fU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hD()+b
if(z in a)return z
return b},
gcg:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gbd:function(a){return a.right},
gbj:function(a){return a.top},
gap:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hy:{"^":"b;",
gaT:function(a){return this.ey(a,"left")}},
e_:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hz:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nf:{"^":"e_;0k:length=","%":"CSSTransformValue"},
ng:{"^":"e_;0k:length=","%":"CSSUnparsedValue"},
nh:{"^":"t;0k:length=","%":"DataTransferItemList"},
ni:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
nj:{"^":"kz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.v(c,"$isa7",[P.a1],"$asa7")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a1]]},
$asw:function(){return[[P.a7,P.a1]]},
$isi:1,
$asi:function(){return[[P.a7,P.a1]]},
$isd:1,
$asd:function(){return[[P.a7,P.a1]]},
$asD:function(){return[[P.a7,P.a1]]},
"%":"ClientRectList|DOMRectList"},
hE:{"^":"t;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gap(a))+" x "+H.l(this.gan(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b1(b)
return a.left===z.gaT(b)&&a.top===z.gbj(b)&&this.gap(a)===z.gap(b)&&this.gan(a)===z.gan(b)},
gT:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gcg:function(a){return a.bottom},
gan:function(a){return a.height},
gaT:function(a){return a.left},
gbd:function(a){return a.right},
gbj:function(a){return a.top},
gap:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nk:{"^":"kB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asw:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nl:{"^":"t;0k:length=","%":"DOMTokenList"},
kv:{"^":"cn;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.e(z[b],"$isV")},
m:function(a,b,c){var z
H.E(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.ik(this)
return new J.aw(z,z.length,0,[H.x(z,0)])},
ay:function(a,b,c,d){throw H.a(P.c9(null))},
$asw:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"M;",
gcl:function(a){return new W.kv(a,a.children)},
gdK:function(a){return P.iR(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
nm:{"^":"a6;0a2:type}","%":"HTMLEmbedElement"},
a5:{"^":"t;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"t;",
dE:["eC",function(a,b,c,d){H.f(c,{func:1,args:[W.a5]})
if(c!=null)this.eU(a,b,c,!1)}],
eU:function(a,b,c,d){return a.addEventListener(b,H.bs(H.f(c,{func:1,args:[W.a5]}),1),!1)},
$isaa:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fs|ft|fw|fx"},
aZ:{"^":"cO;",$isaZ:1,"%":"File"},
e8:{"^":"kG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isaZ")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$asw:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$ise8:1,
$asD:function(){return[W.aZ]},
"%":"FileList"},
nn:{"^":"aa;0k:length=","%":"FileWriter"},
no:{"^":"a6;0k:length=","%":"HTMLFormElement"},
b6:{"^":"t;",$isb6:1,"%":"Gamepad"},
np:{"^":"t;0k:length=","%":"History"},
nq:{"^":"kT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c2:{"^":"t;0dL:data=",$isc2:1,"%":"ImageData"},
cY:{"^":"a6;",$iscY:1,"%":"HTMLImageElement"},
eb:{"^":"a6;0a2:type}",$iseb:1,"%":"HTMLInputElement"},
bE:{"^":"dl;",$isbE:1,"%":"KeyboardEvent"},
nu:{"^":"a6;0a2:type}","%":"HTMLLinkElement"},
nv:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
nw:{"^":"t;0k:length=","%":"MediaList"},
nx:{"^":"aa;",
dE:function(a,b,c,d){H.f(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.eC(a,b,c,!1)},
"%":"MessagePort"},
ny:{"^":"l_;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.c([],[P.j])
this.H(a,new W.it(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
it:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nz:{"^":"l0;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.c([],[P.j])
this.H(a,new W.iu(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iu:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ba:{"^":"t;",$isba:1,"%":"MimeType"},
nA:{"^":"l2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asD:function(){return[W.ba]},
"%":"MimeTypeArray"},
ab:{"^":"dl;",$isab:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ku:{"^":"cn;a",
m:function(a,b,c){var z,y
H.E(b)
H.e(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.aW(C.X,z,"D",0)])},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asw:function(){return[W.M]},
$asi:function(){return[W.M]},
$asd:function(){return[W.M]}},
M:{"^":"aa;",
i7:function(a,b){var z,y
try{z=a.parentNode
J.h8(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eD(a):z},
fK:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iy:{"^":"l4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
nI:{"^":"a6;0a2:type}","%":"HTMLOListElement"},
nJ:{"^":"a6;0a2:type}","%":"HTMLObjectElement"},
bb:{"^":"t;0k:length=",$isbb:1,"%":"Plugin"},
nM:{"^":"l8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asD:function(){return[W.bb]},
"%":"PluginArray"},
nO:{"^":"t;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nP:{"^":"le;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.c([],[P.j])
this.H(a,new W.j0(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
j0:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nQ:{"^":"a6;0a2:type}","%":"HTMLScriptElement"},
nS:{"^":"a6;0k:length=","%":"HTMLSelectElement"},
bd:{"^":"aa;",$isbd:1,"%":"SourceBuffer"},
nT:{"^":"ft;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asw:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"SourceBufferList"},
nU:{"^":"a6;0a2:type}","%":"HTMLSourceElement"},
be:{"^":"t;",$isbe:1,"%":"SpeechGrammar"},
nV:{"^":"lh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asw:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asD:function(){return[W.be]},
"%":"SpeechGrammarList"},
bf:{"^":"t;0k:length=",$isbf:1,"%":"SpeechRecognitionResult"},
nX:{"^":"lk;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gao:function(a){var z=H.c([],[P.j])
this.H(a,new W.jj(z))
return z},
gk:function(a){return a.length},
$asah:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
jj:{"^":"n:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o_:{"^":"a6;0a2:type}","%":"HTMLStyleElement"},
bg:{"^":"t;",$isbg:1,"%":"CSSStyleSheet|StyleSheet"},
dh:{"^":"a6;",$isdh:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bh:{"^":"aa;",$isbh:1,"%":"TextTrack"},
bi:{"^":"aa;",$isbi:1,"%":"TextTrackCue|VTTCue"},
o2:{"^":"lq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asw:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"TextTrackCueList"},
o3:{"^":"fx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"TextTrackList"},
o4:{"^":"t;0k:length=","%":"TimeRanges"},
bk:{"^":"t;",$isbk:1,"%":"Touch"},
bl:{"^":"dl;",$isbl:1,"%":"TouchEvent"},
o5:{"^":"lw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asw:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"TouchList"},
o6:{"^":"t;0k:length=","%":"TrackDefaultList"},
dl:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o8:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
o9:{"^":"aa;0k:length=","%":"VideoTrackList"},
bO:{"^":"ab;",
ghx:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbO:1,
"%":"WheelEvent"},
kn:{"^":"aa;",
fL:function(a,b){return a.requestAnimationFrame(H.bs(H.f(b,{func:1,ret:-1,args:[P.a1]}),1))},
f4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oe:{"^":"lY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isb4")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$asw:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$asD:function(){return[W.b4]},
"%":"CSSRuleList"},
of:{"^":"hE;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b1(b)
return a.left===z.gaT(b)&&a.top===z.gbj(b)&&a.width===z.gap(b)&&a.height===z.gan(b)},
gT:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gap:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oh:{"^":"m_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isb6")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asw:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isd:1,
$asd:function(){return[W.b6]},
$asD:function(){return[W.b6]},
"%":"GamepadList"},
oi:{"^":"m1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oj:{"^":"m3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"SpeechRecognitionResultList"},
ok:{"^":"m5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asw:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"StyleSheetList"},
kC:{"^":"dg;a,b,c,$ti",
hM:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.Z(this.a,this.b,a,!1,z)}},
og:{"^":"kC;a,b,c,$ti"},
kD:{"^":"eG;a,b,c,d,e,$ti",
fY:function(){var z=this.d
if(z!=null&&this.a<=0)J.h9(this.b,this.c,z,!1)},
p:{
Z:function(a,b,c,d,e){var z=c==null?null:W.fO(new W.kE(c),W.a5)
z=new W.kD(0,a,b,z,!1,[e])
z.fY()
return z}}},
kE:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.e(a,"$isa5"))}},
D:{"^":"b;$ti",
ga1:function(a){return new W.e9(a,this.gk(a),-1,[H.aW(this,a,"D",0)])},
ay:function(a,b,c,d){H.z(d,H.aW(this,a,"D",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kw:{"^":"t+hy;"},
ky:{"^":"t+w;"},
kz:{"^":"ky+D;"},
kA:{"^":"t+w;"},
kB:{"^":"kA+D;"},
kF:{"^":"t+w;"},
kG:{"^":"kF+D;"},
kS:{"^":"t+w;"},
kT:{"^":"kS+D;"},
l_:{"^":"t+ah;"},
l0:{"^":"t+ah;"},
l1:{"^":"t+w;"},
l2:{"^":"l1+D;"},
l3:{"^":"t+w;"},
l4:{"^":"l3+D;"},
l7:{"^":"t+w;"},
l8:{"^":"l7+D;"},
le:{"^":"t+ah;"},
fs:{"^":"aa+w;"},
ft:{"^":"fs+D;"},
lg:{"^":"t+w;"},
lh:{"^":"lg+D;"},
lk:{"^":"t+ah;"},
lp:{"^":"t+w;"},
lq:{"^":"lp+D;"},
fw:{"^":"aa+w;"},
fx:{"^":"fw+D;"},
lv:{"^":"t+w;"},
lw:{"^":"lv+D;"},
lX:{"^":"t+w;"},
lY:{"^":"lX+D;"},
lZ:{"^":"t+w;"},
m_:{"^":"lZ+D;"},
m0:{"^":"t+w;"},
m1:{"^":"m0+D;"},
m2:{"^":"t+w;"},
m3:{"^":"m2+D;"},
m4:{"^":"t+w;"},
m5:{"^":"m4+D;"}}],["","",,P,{"^":"",
mr:function(a){var z,y
z=J.J(a)
if(!!z.$isc2){y=z.gdL(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
mq:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.ej(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mo:function(a,b){var z={}
a.H(0,new P.mp(z))
return z},
e5:function(){var z=$.e4
if(z==null){z=J.cL(window.navigator.userAgent,"Opera",0)
$.e4=z}return z},
hD:function(){var z,y
z=$.e1
if(z!=null)return z
y=$.e2
if(y==null){y=J.cL(window.navigator.userAgent,"Firefox",0)
$.e2=y}if(y)z="-moz-"
else{y=$.e3
if(y==null){y=!P.e5()&&J.cL(window.navigator.userAgent,"Trident/",0)
$.e3=y}if(y)z="-ms-"
else z=P.e5()?"-o-":"-webkit-"}$.e1=z
return z},
ln:{"^":"b;",
e8:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bO:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.J(a)
if(!!y.$isan)return new Date(a.a)
if(!!y.$isiU)throw H.a(P.c9("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscO)return a
if(!!y.$ise8)return a
if(!!y.$isc2)return a
if(!!y.$ises||!!y.$isda)return a
if(!!y.$isK){x=this.e8(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.H(a,new P.lo(z,this))
return z.a}if(!!y.$isd){x=this.e8(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hu(a,x)}throw H.a(P.c9("structured clone of other type"))},
hu:function(a,b){var z,y,x,w
z=J.aJ(a)
y=z.gk(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.bO(z.j(a,w)))
return x}},
lo:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.bO(b)}},
fz:{"^":"b;dL:a>,b,c",$isc2:1},
mp:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
fv:{"^":"ln;a,b"},
hN:{"^":"cn;a,b",
gaY:function(){var z,y,x
z=this.b
y=H.as(z,"w",0)
x=W.V
return new H.ii(new H.kl(z,H.f(new P.hO(),{func:1,ret:P.ad,args:[y]}),[y]),H.f(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
H:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.H(P.em(this.gaY(),!1,W.V),b)},
m:function(a,b,c){var z
H.E(b)
H.e(c,"$isV")
z=this.gaY()
J.hc(z.b.$1(J.cM(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gk:function(a){return J.av(this.gaY().a)},
j:function(a,b){var z=this.gaY()
return z.b.$1(J.cM(z.a,b))},
ga1:function(a){var z=P.em(this.gaY(),!1,W.V)
return new J.aw(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
hO:{"^":"n:26;",
$1:function(a){return!!J.J(H.e(a,"$isM")).$isV}},
hP:{"^":"n:27;",
$1:function(a){return H.k(H.e(a,"$isM"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l9:{"^":"b;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.x(this,0))},
gcg:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=this.a
y=J.b1(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gcg(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bZ(z)
x=this.b
w=J.bZ(x)
if(typeof z!=="number")return z.D()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.kU(P.cz(P.cz(P.cz(P.cz(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l9;aT:a>,bj:b>,ap:c>,an:d>,$ti",p:{
iR:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bF:{"^":"t;",$isbF:1,"%":"SVGLength"},nt:{"^":"kW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbF")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asD:function(){return[P.bF]},
"%":"SVGLengthList"},bI:{"^":"t;",$isbI:1,"%":"SVGNumber"},nH:{"^":"l6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbI")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asD:function(){return[P.bI]},
"%":"SVGNumberList"},nN:{"^":"t;0k:length=","%":"SVGPointList"},nR:{"^":"eI;0a2:type}","%":"SVGScriptElement"},nY:{"^":"lm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},o0:{"^":"eI;0a2:type}","%":"SVGStyleElement"},eI:{"^":"V;",
gcl:function(a){return new P.hN(a,new W.ku(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bL:{"^":"t;",$isbL:1,"%":"SVGTransform"},o7:{"^":"ly;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isd:1,
$asd:function(){return[P.bL]},
$asD:function(){return[P.bL]},
"%":"SVGTransformList"},kV:{"^":"t+w;"},kW:{"^":"kV+D;"},l5:{"^":"t+w;"},l6:{"^":"l5+D;"},ll:{"^":"t+w;"},lm:{"^":"ll+D;"},lx:{"^":"t+w;"},ly:{"^":"lx+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isjH:1}}],["","",,P,{"^":"",n4:{"^":"t;0k:length=","%":"AudioBuffer"},dO:{"^":"aa;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n5:{"^":"kt;",
j:function(a,b){return P.aV(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.c([],[P.j])
this.H(a,new P.hg(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hg:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dO;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n6:{"^":"aa;0k:length=","%":"AudioTrackList"},hk:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n7:{"^":"dO;0a2:type}","%":"BiquadFilterNode"},nK:{"^":"hk;0k:length=","%":"OfflineAudioContext"},nL:{"^":"hh;0a2:type}","%":"Oscillator|OscillatorNode"},kt:{"^":"t+ah;"}}],["","",,P,{"^":"",dd:{"^":"t;",
ig:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc2)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mq(g))
return}if(!!z.$iscY)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c_("Incorrect number or type of arguments"))},
eq:function(a,b,c,d,e,f,g){return this.ig(a,b,c,d,e,f,g,null,null,null)},
$isdd:1,
"%":"WebGLRenderingContext"},jo:{"^":"t;",$isjo:1,"%":"WebGLTexture"},jP:{"^":"t;",$isjP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nW:{"^":"lj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.E(b)
H.e(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asw:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},li:{"^":"t+w;"},lj:{"^":"li+D;"}}],["","",,O,{"^":"",am:{"^":"b;0a,0b,0c,0d,$ti",
bo:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cV:function(a,b,c){var z=H.as(this,"am",0)
H.f(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
aX:function(a,b){return this.cV(a,null,b)},
dn:function(a){var z
H.v(a,"$isi",[H.as(this,"am",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d1:function(a,b){var z
H.v(b,"$isi",[H.as(this,"am",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.as(this,"am",0)
H.z(b,z)
z=[z]
if(this.dn(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d1(x,H.c([b],z))}},
cb:function(a,b){var z,y
H.v(b,"$isi",[H.as(this,"am",0)],"$asi")
if(this.dn(b)){z=this.a
y=z.length
C.a.cb(z,b)
this.d1(y,b)}},
$isi:1,
p:{
cU:function(a){var z=new O.am([a])
z.bo(a)
return z}}},d7:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eM:function(a){var z=this.b
if(!(z==null))z.A(a)},
aE:function(){return this.eM(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.b9()},
bL:function(a){var z=this.a
if(a==null)C.a.h(z,V.b9())
else C.a.h(z,a)
this.aE()},
aB:function(){var z=this.a
if(z.length>0){z.pop()
this.aE()}}}}],["","",,E,{"^":"",cN:{"^":"b;"},aL:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbS:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.f(this.gem(),{func:1,ret:-1,args:[D.o]})
C.a.Y(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.f(this.gem(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.eC])
w.b=!0
this.aU(w)}},
al:function(a,b){var z
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();)z.d.al(0,b)},
a9:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gZ(z))
z.aE()
a.cK(this.f)
z=a.dy
y=(z&&C.a).gaA(z)
if(y!=null&&this.d!=null)y.eo(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a9(a)
a.cJ()
a.dx.aB()},
gq:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aU:function(a){var z=this.z
if(!(z==null))z.A(a)},
a5:function(){return this.aU(null)},
hW:[function(a){H.e(a,"$iso")
this.e=null
this.aU(a)},function(){return this.hW(null)},"j6","$1","$0","gem",0,2,1],
hU:[function(a){this.aU(H.e(a,"$iso"))},function(){return this.hU(null)},"j4","$1","$0","gel",0,2,1],
j3:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aL],"$asi")
for(z=b.length,y=this.gel(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b5()
t.a=H.c([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a5()},"$2","ghT",8,0,9],
j5:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aL],"$asi")
for(z=b.length,y=this.gel(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b5()
t.a=H.c([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.Y(t.a,y)}}this.a5()},"$2","ghV",8,0,9],
$isaD:1,
p:{
e7:function(a,b,c,d,e,f){var z,y
z=new E.aL()
z.a=d
z.b=!0
y=O.cU(E.aL)
z.y=y
y.aX(z.ghT(),z.ghV())
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
z.sbS(0,e)
return z}}},iW:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eJ:function(a,b){var z,y,x,w,v
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
z=new O.d7()
y=[V.aM]
z.a=H.c([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.f(new E.iY(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d7()
z.a=H.c([],y)
v=z.gq()
v.toString
x=H.f(new E.iZ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d7()
z.a=H.c([],y)
y=z.gq()
y.toString
w=H.f(new E.j_(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.c8])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.j,A.de])},
gi4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.l(0,y.gZ(y))
this.z=y
z=y}return z},
cK:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
cJ:function(){var z=this.dy
if(z.length>1)z.pop()},
dG:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.bw(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
iX:function(a,b){var z=new E.iW(a,b)
z.eJ(a,b)
return z}}},iY:{"^":"n:13;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.ch=null}},iZ:{"^":"n:13;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j_:{"^":"n:13;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},jz:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eO:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.A(a)
this.i9()},function(){return this.eO(null)},"eN","$1","$0","gd2",0,2,1],
ghE:function(){var z,y,x
z=Date.now()
y=C.f.a4(P.e6(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
ds:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.cz(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.cz(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eM(C.q,this.gi8())},
i9:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jB(this),{func:1,ret:-1,args:[P.a1]})
C.C.f4(z)
C.C.fL(z,W.fO(y,P.a1))}},"$0","gi8",0,0,3],
i6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.ds()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.e6(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aE()
w=x.db
C.a.sk(w.a,0)
w.aE()
w=x.dx
C.a.sk(w.a,0)
w.aE()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a9(this.e)}}catch(v){z=H.au(v)
y=H.bu(v)
P.dJ("Error: "+H.l(z))
P.dJ("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jA:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscS)return E.eL(a,!0,!0,!0,!1)
y=W.cT(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcl(a).h(0,y)
w=E.eL(y,!0,!0,!0,!1)
w.a=a
return w},
eL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jz()
y=P.i8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bQ(a,"webgl",y)
x=H.e(x==null?C.l.bQ(a,"experimental-webgl",y):x,"$isdd")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iX(x,a)
w=new T.jt(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k1(a)
v=new X.i1()
v.c=new X.aC(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.iv(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.id(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jE(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eG,P.b]])
w.z=v
u=document
t=W.ab
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Z(u,"contextmenu",H.f(w.gfl(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.f(w.gfo(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.f(w.gfi(),q),!1,r))
v=w.z
p=W.bE
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.f(w.gfq(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.f(w.gfp(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.f(w.gfu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.f(w.gfw(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.f(w.gfv(),s),!1,t))
p=w.z
o=W.bO;(p&&C.a).h(p,W.Z(a,H.O(W.hI(a)),H.f(w.gfz(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.f(w.gfm(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.f(w.gfn(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.f(w.gfA(),q),!1,r))
r=w.z
q=W.bl
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.f(w.gfI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.f(w.gfG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.f(w.gfH(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.ds()
return z}}},jB:{"^":"n:31;a",
$1:function(a){var z
H.mS(a)
z=this.a
if(z.z){z.z=!1
z.i6()}}}}],["","",,Z,{"^":"",fg:{"^":"b;a,b",p:{
dr:function(a,b,c){var z
H.v(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bp(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)}}},dS:{"^":"cN;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.u('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fh:{"^":"b;a",$isn8:1},cR:{"^":"b;a,0b,c,d",
az:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
ak:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a9:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$iso1:1},ck:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}},bm:{"^":"b;a",
gcX:function(a){var z,y
z=this.a
y=(z&$.$get$az().a)!==0?3:0
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$aP().a)!==0?y+4:y},
ho:function(a){var z,y,x
z=$.$get$az()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ff()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.j])
y=this.a
if((y&$.$get$az().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
ar:function(a){return new Z.bm(a)}}}}],["","",,D,{"^":"",dV:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.hM(z))
return x!==0},
dO:function(){return this.A(null)},
ia:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
aC:function(a){return this.ia(a,!0,!1)},
p:{
H:function(){var z=new D.b5()
z.a=H.c([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},hM:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"b;a,0b"},c3:{"^":"o;c,d,a,0b,$ti"},c4:{"^":"o;c,d,a,0b,$ti"},I:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dT:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"na<"}},eg:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eh:{"^":"o;c,a,0b"},i1:{"^":"b;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eh(a,this)
y.b=!0
return z.A(y)},
hY:function(a){var z,y
this.c=a.b
this.d.Y(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eh(a,this)
y.b=!0
return z.A(y)}},en:{"^":"co;x,y,c,d,e,a,0b"},id:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaN()
s=new X.bG(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cI:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.at(a,b))
return!0},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eA()
if(typeof z!=="number")return z.bP()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.at(a,b))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.at(a,b))
return!0},
i2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.d8(new V.W(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.A(w)
return!0},
ft:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.en(c,a,this.a.gaN(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.U(0,0)}},aC:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
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
return z+(this.c?"Shift+":"")}},bG:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bZ:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaN()
x=new X.bG(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cI:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.bZ(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eA()
if(typeof z!=="number")return z.bP()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.bZ(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.bZ(a,b,!1))
return!0},
i3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.d8(new V.W(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.A(x)
return!0},
gdN:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbN:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gek:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},d8:{"^":"co;x,c,d,e,a,0b"},co:{"^":"o;"},eQ:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},jE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.U],"$asd")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaN()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.b
if(z==null)return!1
z.A(this.at(a,!0))
return!0},
hZ:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.c
if(z==null)return!1
z.A(this.at(a,!0))
return!0},
i_:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.d
if(z==null)return!1
z.A(this.at(a,!1))
return!0}},k1:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaN:function(){var z=this.a
return V.eB(0,0,(z&&C.l).gdK(z).c,C.l.gdK(z).d)},
dd:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eg(z,new X.aC(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
ca:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.U(y-w,x-v)},
b0:function(a){return new V.W(a.movementX,a.movementY)},
c6:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.i.aj(u.pageX)
C.i.aj(u.pageY)
s=z.left
C.i.aj(u.pageX)
C.a.h(y,new V.U(t-s,C.i.aj(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.aC(y,a.altKey,a.shiftKey))},
c0:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iF:[function(a){this.f=!0},"$1","gfo",4,0,5],
iz:[function(a){this.f=!1},"$1","gfi",4,0,5],
iC:[function(a){H.e(a,"$isab")
if(this.f&&this.c0(a))a.preventDefault()},"$1","gfl",4,0,4],
iH:[function(a){var z
H.e(a,"$isbE")
if(!this.f)return
z=this.dd(a)
if(this.b.i1(z))a.preventDefault()},"$1","gfq",4,0,24],
iG:[function(a){var z
H.e(a,"$isbE")
if(!this.f)return
z=this.dd(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfp",4,0,24],
iJ:[function(a){var z,y,x,w
H.e(a,"$isab")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.ar(a)
x=this.b0(a)
if(this.d.cI(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cI(y,w))a.preventDefault()},"$1","gfu",4,0,4],
iL:[function(a){var z,y,x
H.e(a,"$isab")
this.aL(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfw",4,0,4],
iE:[function(a){var z,y,x
H.e(a,"$isab")
if(!this.c0(a)){this.aL(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gfn",4,0,4],
iK:[function(a){var z,y,x
H.e(a,"$isab")
this.aL(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfv",4,0,4],
iD:[function(a){var z,y,x
H.e(a,"$isab")
if(!this.c0(a)){this.aL(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b9(z,x))a.preventDefault()}},"$1","gfm",4,0,4],
iM:[function(a){var z,y
H.e(a,"$isbO")
this.aL(a)
z=new V.W((a&&C.B).ghw(a),C.B.ghx(a)).w(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gfz",4,0,35],
iN:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.ft(w,v,x)}},"$1","gfA",4,0,5],
iV:[function(a){var z
H.e(a,"$isbl")
this.a.focus()
this.f=!0
this.ca(a)
z=this.c6(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfI",4,0,12],
iT:[function(a){var z
H.e(a,"$isbl")
this.ca(a)
z=this.c6(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfG",4,0,12],
iU:[function(a){var z
H.e(a,"$isbl")
this.ca(a)
z=this.c6(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfH",4,0,12]}}],["","",,D,{"^":"",ch:{"^":"b;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aF:[function(a){var z
H.e(a,"$iso")
z=this.d
if(!(z==null))z.A(a)},function(){return this.aF(null)},"ip","$1","$0","geP",0,2,1],
$isa2:1,
$isaD:1},a2:{"^":"b;",$isaD:1},i2:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aF:function(a){var z=this.Q
if(!(z==null))z.A(a)},
fs:[function(a){var z
H.e(a,"$iso")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.fs(null)},"iI","$1","$0","gdm",0,2,1],
iO:[function(a){var z,y,x
H.v(a,"$isi",[D.a2],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f0(x))return!1}return!0},"$1","gfB",4,0,37],
iw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.ch)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.c([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c3(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gff",8,0,20],
iQ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.ch)C.a.Y(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.c([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.Y(s.a,x)}z=new D.c4(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gfD",8,0,20],
f0:function(a){var z=C.a.b4(this.e,a)
return z},
$asi:function(){return[D.a2]},
$asam:function(){return[D.a2]}},iD:{"^":"b;",$isa2:1,$isaD:1},jg:{"^":"b;",$isa2:1,$isaD:1},jw:{"^":"b;",$isa2:1,$isaD:1},jx:{"^":"b;",$isa2:1,$isaD:1},jy:{"^":"b;",$isa2:1,$isaD:1}}],["","",,V,{"^":"",
nc:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","is",8,0,33],
n0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bm(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.i.es($.q.$2(a,0)?0:a,b),c+b+1)},
bt:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.A],"$asd")
z=H.c([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.af(z[u],x))}return z},
dI:function(a,b){return C.i.ij(Math.pow(b,C.J.cz(Math.log(H.mn(a))/Math.log(b))))},
y:{"^":"b;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
aX:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
eq:{"^":"b;a,b,c,d,e,f,r,x,y",
aa:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
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
z=[P.A]
y=V.bt(H.c([this.a,this.d,this.r],z),3,0)
x=V.bt(H.c([this.b,this.e,this.x],z),3,0)
w=V.bt(H.c([this.c,this.f,this.y],z),3,0)
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
aM:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aa:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return z},
cD:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.b9()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ai(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
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
i:function(a){return this.K()},
e9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.A]
y=V.bt(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bt(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bt(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bt(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.e9("",3,0)},
B:function(a){return this.e9(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b9:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
er:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.G(c)))
y=b.b6(z)
x=y.w(0,Math.sqrt(y.G(y)))
w=z.b6(x)
v=new V.N(a.a,a.b,a.c)
return V.aB(x.a,w.a,z.a,x.O(0).G(v),x.b,w.b,z.b,w.O(0).G(v),x.c,w.c,z.c,z.O(0).G(v),0,0,0,1)}}},
U:{"^":"b;a,b",
J:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
ai:{"^":"b;a,b,c",
J:function(a,b){return new V.ai(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
bJ:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
eA:{"^":"b;a,b,c,d",
ga8:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
p:{
eB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eA(a,b,c,d)}}},
W:{"^":"b;a,b",
hK:[function(a){return Math.sqrt(this.G(this))},"$0","gk",1,0,19],
G:function(a){var z,y,x,w
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
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.q.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
N:{"^":"b;a,b,c",
hK:[function(a){return Math.sqrt(this.G(this))},"$0","gk",1,0,19],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cE:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b6:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.N(-this.a,-this.b,-this.c)},
w:function(a,b){if($.q.$2(b,0))return new V.N(0,0,0)
return new V.N(this.a/b,this.b/b,this.c/b)},
ei:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hr:{"^":"dV;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bU:function(a){var z=V.n0(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.A(a)},
scQ:function(a,b){},
scF:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bU(z)}z=new D.I("maximumLocation",y,this.b,this,[P.A])
z.b=!0
this.R(z)}},
scH:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bU(z)}z=new D.I("minimumLocation",y,this.c,this,[P.A])
z.b=!0
this.R(z)}},
sa7:function(a,b){var z,y
b=this.bU(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.A])
z.b=!0
this.R(z)}},
scG:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.A])
z.b=!0
this.R(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.A])
z.b=!0
this.R(z)}},
sco:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.A])
z.b=!0
this.R(z)}},
al:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa7(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cV:function(){var z=new U.hr()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dX:{"^":"ae;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aW:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dX))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
p:{
dY:function(a){var z=new U.dX()
z.a=a
return z}}},ea:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
R:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.A(a)},function(){return this.R(null)},"ah","$1","$0","gaG",0,2,1],
iv:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaG(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfe",8,0,18],
iP:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaG(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.Y(t.a,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfC",8,0,18],
aW:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aw(z,z.length,0,[H.x(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aW(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.b9():x
z=this.e
if(!(z==null))z.aC(0)}return this.f},
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
if(!J.a_(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ae]},
$asam:function(){return[U.ae]},
$isae:1},ae:{"^":"dV;"},k2:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
R:[function(a){var z
H.e(a,"$iso")
z=this.cy
if(!(z==null))z.A(a)},function(){return this.R(null)},"ah","$1","$0","gaG",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdN()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gc1(),y)
C.a.h(z.a,x)
x=this.a.c.gek()
x.toString
z=H.f(this.gc2(),y)
C.a.h(x.a,z)
z=this.a.c.gbN()
z.toString
y=H.f(this.gc3(),y)
C.a.h(z.a,y)
return!0},
fa:[function(a){H.e(a,"$iso")
if(!J.a_(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc1",4,0,2],
fb:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$iso"),"$isbG")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.W(y.a,y.b).l(0,2).w(0,z.ga8())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.W(x.a,x.b).l(0,2).w(0,z.ga8())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa7(0,-v*u+t)
this.b.sS(0)
y=y.J(0,a.z)
this.Q=new V.W(y.a,y.b).l(0,2).w(0,z.ga8())}this.ah()},"$1","gc2",4,0,2],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sS(y*10*x)
this.ah()}},"$1","gc3",4,0,2],
aW:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.al(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aB(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},k3:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
R:[function(a){var z
H.e(a,"$iso")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.R(null)},"ah","$1","$0","gaG",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdN()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.f(this.gc1(),y)
C.a.h(z.a,x)
x=this.a.c.gek()
x.toString
z=H.f(this.gc2(),y)
C.a.h(x.a,z)
z=this.a.c.gbN()
z.toString
x=H.f(this.gc3(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.f(this.gf7(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gf8(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.f(this.gfX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gfW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.f(this.gfV(),y)
C.a.h(z.a,y)
return!0},
am:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.W(z,y)},
fa:[function(a){a=H.k(H.e(a,"$iso"),"$isbG")
if(!J.a_(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc1",4,0,2],
fb:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$iso"),"$isbG")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.am(new V.W(y.a,y.b).l(0,2).w(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).l(0,2).w(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa7(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).l(0,2).w(0,z.ga8()))}this.ah()},"$1","gc2",4,0,2],
fc:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sS(-y*10*z)
this.ah()}},"$1","gc3",4,0,2],
is:[function(a){if(H.k(H.e(a,"$iso"),"$isen").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf7",4,0,2],
it:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$iso"),"$isbG")
if(!J.a_(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).l(0,2).w(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa7(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).l(0,2).w(0,z.ga8()))
this.ah()},"$1","gf8",4,0,2],
iZ:[function(a){H.e(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfX",4,0,2],
iY:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$iso"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.am(new V.W(y.a,y.b).l(0,2).w(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.am(new V.W(x.a,x.b).l(0,2).w(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa7(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.am(new V.W(y.a,y.b).l(0,2).w(0,z.ga8()))}this.ah()},"$1","gfW",4,0,2],
iX:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sS(-y*10*z)
this.ah()}},"$1","gfV",4,0,2],
aW:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.al(0,x)
this.b.al(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aB(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aB(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},k4:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.A(a)},
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.f(this.gfd(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iu:[function(a){var z,y,x,w
H.e(a,"$iso")
if(!J.a_(this.b,this.a.b.c))return
H.k(a,"$isd8")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.A])
z.b=!0
this.R(z)}},"$1","gfd",4,0,2],
aW:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aB(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",hs:{"^":"am;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d3","$1","$0","gV",0,2,1],
iR:[function(a,b){var z,y,x,w,v,u,t
z=M.aE
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfE",8,0,16],
iS:[function(a,b){var z,y,x,w,v,u,t
z=M.aE
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.f(x,w)
C.a.Y(t.a,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfF",8,0,16],
a9:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
if(!(y==null))y.a9(a)}this.e=!1},
$asi:function(){return[M.aE]},
$asam:function(){return[M.aE]},
$isaE:1},hx:{"^":"b;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d3","$1","$0","gV",0,2,1],
sb3:function(a){var z,y,x
if(a==null)a=new X.hS()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.cf])
z.b=!0
this.a_(z)}},
sbe:function(a,b){var z,y,x
if(b==null)b=X.cW(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.di])
z.b=!0
this.a_(z)}},
sbf:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.c8])
z.b=!0
this.a_(z)}},
a9:function(a){a.cK(this.c)
this.b.W(a)
this.a.W(a)
this.d.al(0,a)
this.d.a9(a)
this.a.ak(a)
this.b.toString
a.cJ()},
$isaE:1},hK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a_:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d3","$1","$0","gV",0,2,1],
iA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aL
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b5()
s.a=H.c([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfj",8,0,9],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aL
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b5()
s.a=H.c([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.Y(s.a,x)}}z=new D.c4(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfk",8,0,9],
sb3:function(a){var z,y,x
if(a==null)a=X.ew(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.cf])
z.b=!0
this.a_(z)}},
sbe:function(a,b){var z,y,x
if(b==null)b=X.cW(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.di])
z.b=!0
this.a_(z)}},
sbf:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.f(this.gV(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.c8])
z.b=!0
this.a_(z)}},
gq:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
a9:function(a){var z
a.cK(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.al(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();)z.d.al(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();)z.d.a9(a)
this.a.toString
a.cy.aB()
a.db.aB()
this.b.toString
a.cJ()},
$isaE:1},aE:{"^":"b;"}}],["","",,A,{"^":"",dN:{"^":"b;a,b,c"},hf:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hy:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dM:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ep:{"^":"de;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aR,0ax,0aS,0bx,0dP,0dQ,0by,0bz,0dR,0dS,0bA,0bB,0dT,0dU,0bC,0dV,0dW,0bD,0dX,0dY,0bE,0bF,0bG,0dZ,0e_,0bH,0bI,0e0,0e1,0bJ,0e2,0cr,0e3,0cs,0e4,0ct,0e5,0cu,0e6,0cv,0e7,0cw,a,b,0c,0d,0e,0f,0r",
eI:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.ap("")
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
a1.h_(z)
a1.h6(z)
a1.h0(z)
a1.he(z)
a1.hf(z)
a1.h8(z)
a1.hj(z)
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
z=new P.ap("")
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
v.h3(z)
v.fZ(z)
v.h1(z)
v.h4(z)
v.hc(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ha(z)
v.hb(z)}v.h7(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
p=H.c([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h9(z)
v.hd(z)
v.hg(z)
v.hh(z)
v.hi(z)
v.h5(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.j])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eh(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaG")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaG")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaG")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaG")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdn")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaG")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaG")
this.k3=H.c([],[A.aG])
y=a1.aR
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaG"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.e:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isaj")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.e:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isaj")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.aR=H.k(this.r.n(0,"diffuseTxt"),"$isaq")
this.aS=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.e:this.ax=H.k(this.r.n(0,"diffuseTxt"),"$isaj")
this.aS=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bx=H.k(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.dP=H.k(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.by=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.e:this.dQ=H.k(this.r.n(0,"invDiffuseTxt"),"$isaj")
this.by=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bB=H.k(this.r.n(0,"shininess"),"$isX")
this.bz=H.k(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.dR=H.k(this.r.n(0,"specularTxt"),"$isaq")
this.bA=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.e:this.dS=H.k(this.r.n(0,"specularTxt"),"$isaj")
this.bA=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.d:this.dT=H.k(this.r.n(0,"bumpTxt"),"$isaq")
this.bC=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.e:this.dU=H.k(this.r.n(0,"bumpTxt"),"$isaj")
this.bC=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.dV=H.k(this.r.n(0,"envSampler"),"$isaj")
this.dW=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bD=H.k(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.dX=H.k(this.r.n(0,"reflectTxt"),"$isaq")
this.bE=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.e:this.dY=H.k(this.r.n(0,"reflectTxt"),"$isaj")
this.bE=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bF=H.k(this.r.n(0,"refraction"),"$isX")
this.bG=H.k(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.d:this.dZ=H.k(this.r.n(0,"refractTxt"),"$isaq")
this.bH=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.e:this.e_=H.k(this.r.n(0,"refractTxt"),"$isaj")
this.bH=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bI=H.k(this.r.n(0,"alpha"),"$isX")
switch(y){case C.c:break
case C.h:break
case C.d:this.e0=H.k(this.r.n(0,"alphaTxt"),"$isaq")
this.bJ=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.e:this.e1=H.k(this.r.n(0,"alphaTxt"),"$isaj")
this.bJ=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cr=H.c([],[A.f2])
this.cs=H.c([],[A.f3])
this.ct=H.c([],[A.f4])
this.cu=H.c([],[A.f5])
this.cv=H.c([],[A.f6])
this.cw=H.c([],[A.f7])
if(a1.k2){y=a1.z
if(y>0){this.e2=H.e(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.cr;(x&&C.a).h(x,new A.f2(m,l,k))}}y=a1.Q
if(y>0){this.e3=H.e(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isX")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isX")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.cs;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e4=H.e(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isX")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.ct;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e5=H.e(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isaq")
x=this.cu;(x&&C.a).h(x,new A.f5(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e6=H.e(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdn")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isaj")
x=this.cv;(x&&C.a).h(x,new A.f6(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e7=H.e(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isX")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isX")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isaq")
x=this.cw;(x&&C.a).h(x,new A.f7(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ai:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eB(c)
b.a.uniform1i(b.d,0)}},
ad:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cW(c)
b.a.uniform1i(b.d,0)}},
p:{
il:function(a,b){var z,y
z=a.ax
y=new A.ep(b,z)
y.d0(b,z)
y.eI(a,b)
return y}}},ip:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aR,ax,aS",
h_:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aR+"];\n"
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
h6:function(a){var z
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
h0:function(a){var z
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
he:function(a){var z,y
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
hf:function(a){var z,y
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
h8:function(a){var z
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
hj:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aD(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h3:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fZ:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
h1:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
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
h4:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
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
hc:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
h7:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.h:z+="   return normalize(normalVec);\n"
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
ha:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
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
hb:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
h2:function(a){var z,y
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
h9:function(a){var z,y
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
hd:function(a){var z,y
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
hg:function(a){var z,y,x
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
h5:function(a){var z
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
i:function(a){return this.ax}},f2:{"^":"b;a,b,c"},f5:{"^":"b;a,b,c,d,e,f,r,x"},f3:{"^":"b;a,b,c,d,e,f,r"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},de:{"^":"cN;",
d0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
eh:function(a,b,c){var z,y,x
this.c=this.de(b,35633)
this.d=this.de(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fS(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.u("Failed to link shader: "+H.l(x)))}this.fQ()
this.fS()},
W:function(a){a.a.useProgram(this.e)
this.f.hy()},
de:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fQ:function(){var z,y,x,w,v,u
z=H.c([],[A.dN])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dN(y,v.name,u))}this.f=new A.hf(z)},
fS:function(){var z,y,x,w,v,u
z=H.c([],[A.ac])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hv(v.type,v.size,v.name,u))}this.r=new A.jO(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dm(z,y,b,a,c)},
f1:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dm(z,y,b,a,c)},
f2:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.dm(z,y,b,a,c)},
bt:function(a,b){return new P.fk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hv:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jJ(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jM(this.a,this.e,c,d)
case 35667:return new A.jK(this.a,this.e,c,d)
case 35668:return new A.jL(this.a,this.e,c,d)
case 35669:return new A.jN(this.a,this.e,c,d)
case 35674:return new A.jQ(this.a,this.e,c,d)
case 35675:return new A.dn(this.a,this.e,c,d)
case 35676:return new A.aG(this.a,this.e,c,d)
case 35678:return this.f1(b,c,d)
case 35680:return this.f2(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cg:{"^":"b;a,b",
i:function(a){return this.b}},eD:{"^":"de;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ac:{"^":"b;"},jO:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
hD:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.hD("\n")}},P:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jK:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jL:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jN:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jI:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dm:function(a,b,c,d,e){var z=new A.jI(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.m)
return z}}},X:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jJ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jM:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jQ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dn:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bp(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aG:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bp(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ac;a,b,c,d",
eB:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aj:{"^":"ac;a,b,c,d",
cW:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
cC:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cC(y)
k=F.cC(z.b)
j=F.mY(d,e,new F.m6(z,F.cC(z.c),F.cC(z.d),k,l,c),b)
if(j!=null)a.hQ(j)},
mY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.aO,P.A,P.A]})
if(a<1)return
if(b<1)return
z=F.df()
y=H.c([],[F.aO])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cx(null,null,new V.aX(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cn(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cx(null,null,new V.aX(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cn(d))}}z.d.hm(a+1,b+1,y)
return z},
m6:{"^":"n:43;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cE(z.b,b).cE(z.d.cE(z.c,b),c)
z=new V.ai(y.a,y.b,y.c)
if(!J.a_(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a5()}a.sih(y.w(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
x=new V.bJ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.a_(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a5()}}},
ao:{"^":"b;0a,0b,0c,0d,0e",
gcq:function(){return this.a==null||this.b==null||this.c==null},
eW:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ei())return
return v.w(0,Math.sqrt(v.G(v)))},
eZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.G(z)))
z=w.J(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.b6(z.w(0,Math.sqrt(z.G(z))))
return z.w(0,Math.sqrt(z.G(z)))},
ck:function(){if(this.d!=null)return!0
var z=this.eW()
if(z==null){z=this.eZ()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
eV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.N(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ei())return
return v.w(0,Math.sqrt(v.G(v)))},
eY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.J(0,u)
z=new V.N(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.J(0,u)
z=new V.ai(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).J(0,x)
z=new V.N(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.G(z)))
z=k.b6(m)
z=z.w(0,Math.sqrt(z.G(z))).b6(k)
m=z.w(0,Math.sqrt(z.G(z)))}return m},
ci:function(){if(this.e!=null)return!0
var z=this.eV()
if(z==null){z=this.eY()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z,y
if(this.gcq())return a+"disposed"
z=a+C.b.af(J.a9(this.a.e),0)+", "+C.b.af(J.a9(this.b.e),0)+", "+C.b.af(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.B("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a5()
return z}}},
d4:{"^":"b;0a,0b",
gcq:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){if(this.gcq())return a+"disposed"
return a+C.b.af(J.a9(this.a.e),0)+", "+C.b.af(J.a9(this.b.e),0)},
K:function(){return this.B("")},
p:{
i3:function(a,b){var z,y,x
z=new F.d4()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a5()
return z}}},
dc:{"^":"b;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.af(J.a9(z.e),0)},
K:function(){return this.B("")}},
eC:{"^":"b;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
hQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.a0()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.ht())}this.a.a0()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dc()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.A(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.i3(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bB(p,o,m)}z=this.e
if(!(z==null))z.aC(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.aC(0)
return y},
dI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$az()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
v=b.gcX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.A
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dS])
for(r=0,q=0;q<w;++q){p=b.ho(q)
o=p.gcX(p)
C.a.m(s,q,new Z.dS(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hL(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cR(new Z.fg(34962,j),s,b)
i.b=H.c([],[Z.ck])
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dr(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dr(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dr(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.C(z,"\n")},
aU:function(a){var z=this.e
if(!(z==null))z.A(a)},
a5:function(){return this.aU(null)},
p:{
df:function(){var z,y
z=new F.eC()
y=new F.kd(z)
y.b=!1
y.c=H.c([],[F.aO])
z.a=y
y=new F.j8(z)
y.b=H.c([],[F.dc])
z.b=y
y=new F.j7(z)
y.b=H.c([],[F.d4])
z.c=y
y=new F.j6(z)
y.b=H.c([],[F.ao])
z.d=y
z.e=null
return z}}},
j6:{"^":"b;a,0b",
hl:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.aO],"$asd")
z=H.c([],[F.ao])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bB(y,w,v))}return z},
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.aO],"$asd")
z=H.c([],[F.ao])
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
C.a.h(z,F.bB(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bB(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].ck())x=!1
return x},
cj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].ci())x=!1
return x},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}},
j7:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.C(z,"\n")},
K:function(){return this.B("")}},
j8:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}},
aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cn:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cx(this.cx,x,u,z,y,w,v,a,t)},
ht:function(){return this.cn(null)},
sih:function(a){var z
if(!J.a_(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a5()}},
hL:function(a){var z,y
z=J.J(a)
if(z.v(a,$.$get$az())){z=this.f
y=[P.A]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aR())){z=this.r
y=[P.A]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aQ())){z=this.x
y=[P.A]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aS())){z=this.y
y=[P.A]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$aT())){z=this.z
y=[P.A]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bM())){z=this.Q
y=[P.A]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bN())){z=this.Q
y=[P.A]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bn()))return H.c([this.ch],[P.A])
else if(z.v(a,$.$get$aP())){z=this.cx
y=[P.A]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.A])},
ck:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.H(0,new F.kk(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aC(0)}return!0},
ci:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.H(0,new F.kj(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aC(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z,y,x
z=H.c([],[P.j])
C.a.h(z,C.b.af(J.a9(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
K:function(){return this.B("")},
p:{
cx:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aO()
y=new F.ki(z)
y.b=H.c([],[F.dc])
z.b=y
y=new F.kh(z)
x=[F.d4]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.ke(z)
x=[F.ao]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fd()
z.e=0
y=$.$get$az()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aR().a)!==0?e:null
z.x=(x&$.$get$aQ().a)!==0?b:null
z.y=(x&$.$get$aS().a)!==0?f:null
z.z=(x&$.$get$aT().a)!==0?g:null
z.Q=(x&$.$get$fe().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$aP().a)!==0?a:null
return z}}},
kk:{"^":"n:8;a",
$1:function(a){var z,y
H.e(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kj:{"^":"n:8;a",
$1:function(a){var z,y
H.e(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kd:{"^":"b;a,0b,0c",
a0:function(){var z,y,x,w
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
this.a.a5()
return!0},
hn:function(a,b,c,d,e,f,g,h,i){var z=F.cx(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bu:function(a,b,c,d,e,f){return this.hn(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].ck()
return!0},
cj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].ci()
return!0},
hq:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.a_(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
this.a0()
z=H.c([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}},
ke:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ao]})
C.a.H(this.b,b)
C.a.H(this.c,new F.kf(this,b))
C.a.H(this.d,new F.kg(this,b))},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}},
kf:{"^":"n:8;a,b",
$1:function(a){H.e(a,"$isao")
if(!J.a_(a.a,this.a))this.b.$1(a)}},
kg:{"^":"n:8;a,b",
$1:function(a){var z
H.e(a,"$isao")
z=this.a
if(!J.a_(a.a,z)&&!J.a_(a.b,z))this.b.$1(a)}},
kh:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}},
ki:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
K:function(){return this.B("")}}}],["","",,O,{"^":"",ik:{"^":"c8;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
N:[function(a){var z
H.e(a,"$iso")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.N(null)},"dl","$1","$0","gaK",0,2,1],
fN:[function(a){H.e(a,"$iso")
this.a=null
this.N(a)},function(){return this.fN(null)},"iW","$1","$0","gfM",0,2,1],
ix:[function(a,b){var z=V.aM
z=new D.c3(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gfg",8,0,15],
iy:[function(a,b){var z=V.aM
z=new D.c4(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gfh",8,0,15],
da:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a4(z.e.length+3,4)*4
x=C.f.a4(z.f.length+3,4)*4
w=C.f.a4(z.r.length+3,4)*4
v=C.f.a4(z.x.length+3,4)*4
u=C.f.a4(z.y.length+3,4)*4
t=C.f.a4(z.z.length+3,4)*4
s=C.f.a4(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$az()
if(c){z=$.$get$aR()
a6=new Z.bm(a6.a|z.a)}if(b){z=$.$get$aQ()
a6=new Z.bm(a6.a|z.a)}if(a){z=$.$get$aS()
a6=new Z.bm(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.bm(a6.a|z.a)}if(a2){z=$.$get$aP()
a6=new Z.bm(a6.a|z.a)}return new A.ip(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.v(a,"$isd",[T.cs],"$asd")
if(b!=null)if(!C.a.b4(a,b)){b.sb7(0,a.length)
C.a.h(a,b)}},
al:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
x=new V.N(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cP(x)}}},
eo:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.da()
y=H.e(a.fr.j(0,z.ax),"$isep")
if(y==null){y=A.il(z,a.a)
a.dG(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aS
z=b.e
if(!(z instanceof Z.cR)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.av()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cj()
u.a.cj()
u=u.e
if(!(u==null))u.aC(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hq()
t=t.e
if(!(t==null))t.aC(0)}r=b.d.dI(new Z.fh(a.a),w)
r.az($.$get$az()).e=this.a.y.c
if(z)r.az($.$get$aR()).e=this.a.Q.c
if(v)r.az($.$get$aQ()).e=this.a.z.c
if(x.rx)r.az($.$get$aS()).e=this.a.ch.c
if(u)r.az($.$get$aT()).e=this.a.cx.c
if(x.x1)r.az($.$get$aP()).e=this.a.cy.c
b.e=r}z=T.cs
q=H.c([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gZ(u)
v=v.db
v.toString
v.ag(u.aa(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gZ(u)
t=a.dx
t=u.l(0,t.gZ(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ag(u.aa(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gi4()
t=a.dx
t=u.l(0,t.gZ(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ag(u.aa(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ag(u.aa(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ag(u.aa(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ag(C.t.aa(u,!0))}if(x.aR>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.A],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.e(t,"$isaM")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bp(H.v(t.aa(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.U(q,this.f.d)
v=this.a
u=this.f.d
v.ai(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.U(q,this.f.e)
v=this.a
u=this.f.e
v.ad(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.U(q,this.r.d)
v=this.a
u=this.r.d
v.ai(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.U(q,this.r.e)
v=this.a
u=this.r.e
v.ad(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.U(q,this.x.d)
v=this.a
u=this.x.d
v.ai(v.aR,v.aS,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.U(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.ax,v.aS,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bx
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.U(q,this.y.d)
v=this.a
u=this.y.d
v.ai(v.dP,v.by,u)
u=this.a
v=this.y.f
u=u.bx
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.U(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.dQ,v.by,u)
u=this.a
v=this.y.f
u=u.bx
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bz
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bB
u.a.uniform1f(u.d,s)
break
case C.d:this.U(q,this.z.d)
v=this.a
u=this.z.d
v.ai(v.dR,v.bA,u)
u=this.a
v=this.z.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bB
v.a.uniform1f(v.d,s)
break
case C.e:this.U(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.dS,v.bA,u)
u=this.a
v=this.z.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bB
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e2
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cr
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cP(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cs
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bk(j.gbb(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gu(j)
g=i.d
h=t.gbM()
s=t.gbl()
t=t.gbv()
g.a.uniform3f(g.d,h,s,t)
t=j.gcc()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcd()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gce()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e4
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.ct
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcp(j).j2()
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.bk(j.gbb(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gu(j)
s=i.e
h=t.gbM()
g=t.gbl()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gj0()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj_()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcc()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcd()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e5
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cu
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbg()
H.v(q,"$isd",t,"$asd")
if(!C.a.b4(q,s)){s.sb7(0,q.length)
C.a.h(q,s)}s=j.gcp(j)
h=i.d
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=j.gbN()
f=i.b
g=s.gaO(s)
h=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,h,s)
s=j.gbd(j)
h=i.c
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=m.cP(j.gcp(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gu(j)
g=i.f
f=h.gbM()
s=h.gbl()
h=h.gbv()
g.a.uniform3f(g.d,f,s,h)
h=j.gbg()
s=h.gej(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdk()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gdh())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e6
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.y,u=v.length,t=[P.A],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cv
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbg()
H.v(q,"$isd",s,"$asd")
if(!C.a.b4(q,h)){h.sb7(0,q.length)
C.a.h(q,h)}e=m.l(0,j.gZ(j))
h=j.gZ(j).bk(new V.ai(0,0,0))
g=i.b
f=h.gcR(h)
d=h.gcS(h)
h=h.gcT(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bk(new V.ai(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cD(0)
d=i.d
n=new Float32Array(H.bp(H.v(new V.eq(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).aa(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gu(j)
h=i.e
f=d.gbM()
g=d.gbl()
d=d.gbv()
h.a.uniform3f(h.d,f,g,d)
d=j.gbg()
h=d.gej(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdk()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdh())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcc()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcd()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gce()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e7
v.a.uniform1i(v.d,p)
v=a.db
m=v.gZ(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cw
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbg()
H.v(q,"$isd",z,"$asd")
if(!C.a.b4(q,t)){t.sb7(0,q.length)
C.a.h(q,t)}t=j.gbb(j)
s=i.b
h=t.gcR(t)
g=t.gcS(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcp(j)
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbN()
s=i.d
h=t.gaO(t)
g=t.gaP(t)
t=t.gaQ()
s.a.uniform3f(s.d,h,g,t)
t=j.gbd(j)
g=i.e
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.bk(j.gbb(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbg()
s=t.gej(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdk()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdh())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gu(j)
s=i.y
h=t.gbM()
g=t.gbl()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gj7()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gj8()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcc()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcd()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.d:this.U(q,this.Q.d)
z=this.a
v=this.Q.d
z.ai(z.dT,z.bC,v)
break
case C.e:this.U(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.dU,z.bC,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gZ(v).cD(0)
a.Q=v}z=z.fy
z.toString
z.ag(v.aa(0,!0))}if(x.dy){this.U(q,this.ch)
z=this.a
v=this.ch
z.ad(z.dV,z.dW,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bD
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.U(q,this.cx.d)
z=this.a
v=this.cx.d
z.ai(z.dX,z.bE,v)
v=this.a
z=this.cx.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.U(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.dY,z.bE,v)
v=this.a
z=this.cx.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bF
v.a.uniform1f(v.d,t)
break
case C.d:this.U(q,this.cy.d)
z=this.a
v=this.cy.d
z.ai(z.dZ,z.bH,v)
v=this.a
z=this.cy.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bF
z.a.uniform1f(z.d,t)
break
case C.e:this.U(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.e_,z.bH,v)
v=this.a
z=this.cy.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bF
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bI
z.a.uniform1f(z.d,u)
break
case C.d:this.U(q,this.db.d)
z=this.a
u=this.db.d
z.ai(z.e0,z.bJ,u)
u=this.a
z=this.db.f
u=u.bI
u.a.uniform1f(u.d,z)
break
case C.e:this.U(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.e1,z.bJ,u)
u=this.a
z=this.db.f
u=u.bI
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.a9(a)
z.ak(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].ak(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.dM()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.da().ax}},im:{"^":"d6;0f,a,b,0c,0d,0e",
fP:function(a){var z,y
z=this.f
if(!$.q.$2(z,a)){y=this.f
this.f=a
z=new D.I(this.b,y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
aZ:function(){this.cZ()
this.fP(1)}},d6:{"^":"b;",
N:[function(a){this.a.N(H.e(a,"$iso"))},function(){return this.N(null)},"dl","$1","$0","gaK",0,2,1],
aZ:["cZ",function(){}],
b_:["eG",function(){}],
du:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.f(this.gaK(),{func:1,ret:-1,args:[D.o]})
C.a.Y(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gq()
z.toString
y=H.f(this.gaK(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.I(this.b+".texture2D",x,this.d,this,[T.eK])
z.b=!0
this.a.N(z)}},
dv:function(a){},
hr:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.N(null)}this.aZ()
this.du(null)
this.dv(null)
this.a.N(null)}},io:{"^":"d6;a,b,0c,0d,0e"},b8:{"^":"d6;0f,a,b,0c,0d,0e",
c8:function(a){var z,y
if(!J.a_(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.y])
y.b=!0
this.a.N(y)}},
aZ:["d_",function(){this.cZ()
this.c8(new V.y(0,0,0))}],
b_:["bn",function(){this.eG()
this.c8(new V.y(1,1,1))}],
su:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b_()
z=this.a
z.a=null
z.N(null)}this.c8(b)}},iq:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
br:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
aZ:function(){this.d_()
this.br(1)},
b_:function(){this.bn()
this.br(1)},
saw:function(a){var z
if(a<=0)this.hr(0)
else if(this.c===C.c){this.c=C.h
this.bn()
this.br(1)
z=this.a
z.a=null
z.N(null)}this.br(a)}},ir:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bs:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.A])
z.b=!0
this.a.N(z)}},
aZ:function(){this.d_()
this.bs(100)},
b_:function(){this.bn()
this.bs(100)}},jd:{"^":"c8;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
N:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.A(a)},function(){return this.N(null)},"dl","$1","$0","gaK",0,2,1],
eo:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$iseD")
if(z==null){y=a.a
z=new A.eD(y,"Skybox")
z.d0(y,"Skybox")
z.eh(0,$.jf,$.je)
z.x=z.f.j(0,"posAttr")
z.y=H.k(z.r.j(0,"fov"),"$isX")
z.z=H.k(z.r.j(0,"ratio"),"$isX")
z.Q=H.k(z.r.j(0,"boxClr"),"$isL")
z.ch=H.k(z.r.j(0,"boxTxt"),"$isaj")
z.cx=H.k(z.r.j(0,"viewMat"),"$isaG")
a.dG(z)}this.a=z}if(b.e==null){y=b.d.dI(new Z.fh(a.a),$.$get$az())
y.az($.$get$az()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.W(a)}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cW(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gZ(x).cD(0)
w=w.cx
w.toString
w.ag(x.aa(0,!0))
y=b.e
if(y instanceof Z.cR){y.W(a)
y.a9(a)
y.ak(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dM()
y=this.c
if(y!=null)y.ak(a)}},c8:{"^":"b;"}}],["","",,T,{"^":"",cs:{"^":"cN;"},eK:{"^":"cs;"},js:{"^":"eK;0a,0b,0c,0d,0e,0f,0r,0x,0y",
sb7:function(a,b){this.a=b
return b},
gq:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
W:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
ak:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},dj:{"^":"cs;0a,0b,0c,0d,0e",
sb7:function(a,b){this.a=b
return b},
gq:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
W:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
ak:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jt:{"^":"b;a,0b,0c,0d,0e",
hO:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.cZ(null,a,null)
w=new T.js()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a5
W.Z(x,"load",H.f(new T.jv(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hN:function(a){return this.hO(a,!1,!1,!1,!1)},
aJ:function(a,b,c,d,e,f){var z,y
z=W.cZ(null,c,null);++this.d
y=W.a5
W.Z(z,"load",H.f(new T.ju(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dt:function(a,b,c){var z,y,x,w
b=V.dI(b,2)
z=V.dI(a.width,2)
y=V.dI(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cT(null,null)
x.width=z
x.height=y
w=H.e(C.l.ex(x,"2d"),"$isdU")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mr(w.getImageData(0,0,x.width,x.height))}}},jv:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dt(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.A.eq(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dO()}++x.e}},ju:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dt(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.A.eq(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.dO()}++z.e}}}],["","",,V,{"^":"",he:{"^":"b;",
b8:function(a,b){return!0},
i:function(a){return"all"},
$isc6:1},c6:{"^":"b;"},eo:{"^":"b;",
b8:["eF",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].b8(0,b))return!0
return!1}],
i:["cY",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc6:1},bH:{"^":"eo;0a",
b8:function(a,b){return!this.eF(0,b)},
i:function(a){return"!["+this.cY(0)+"]"}},j4:{"^":"b;0a",
eK:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.m,P.ad])
for(y=new H.el(a,a.gk(a),0,[H.as(a,"w",0)]);y.E();)z.m(0,y.d,!0)
this.a=z},
b8:function(a,b){return this.a.bw(0,b)},
i:function(a){var z=this.a
return P.c7(z.gao(z),0,null)},
$isc6:1,
p:{
a8:function(a){var z=new V.j4()
z.eK(a)
return z}}},eF:{"^":"b;a,b,0c,0d",
ghR:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eR(this.a.M(0,b))
w.a=H.c([],[V.c6])
w.c=!1
C.a.h(this.c,w)
return w},
hA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.b8(0,a))return w}return},
i:function(a){return this.b}},eO:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h4(this.b,"\n","\\n")
y=H.h4(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eP:{"^":"b;a,b,0c",
i:function(a){return this.b}},jD:{"^":"b;0a,0b,0c",
M:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eF(this,b)
z.c=H.c([],[V.eR])
this.a.m(0,b,z)}return z},
bi:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eP(this,a)
y=P.j
z.c=new H.b_(0,0,[y,y])
this.b.m(0,a,z)}return z},
im:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eO])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hA(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c7(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c7(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eO(o==null?p.b:o,q,t)}++t}}}},eR:{"^":"eo;b,0c,0a",
i:function(a){return this.b.b+": "+this.cY(0)}}}],["","",,X,{"^":"",cf:{"^":"b;",$isaD:1},hR:{"^":"di;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aq:function(a){var z=this.x
if(!(z==null))z.A(a)},
sdJ:function(a,b){var z
if(this.b){this.b=!1
z=new D.I("clearColor",!0,!1,this,[P.ad])
z.b=!0
this.aq(z)}},
W:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.i.aj(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.i.aj(w.b*x)
t=C.i.aj(w.c*y)
a.c=t
w=C.i.aj(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cW:function(a,b,c,d,e,f,g){var z,y
z=new X.hR()
y=new V.aX(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eB(0,0,1,1)
z.r=y
return z}}},hS:{"^":"b;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
W:function(a){var z
a.cy.bL(V.b9())
z=V.b9()
a.db.bL(z)},
ak:function(a){a.cy.aB()
a.db.aB()},
$isaD:1,
$iscf:1},iB:{"^":"b;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
aq:[function(a){var z
H.e(a,"$iso")
z=this.f
if(!(z==null))z.A(a)},function(){return this.aq(null)},"iq","$1","$0","geS",0,2,1],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aB(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bL(s)
z=$.ex
if(z==null){z=V.er(new V.ai(0,0,0),new V.N(0,1,0),new V.N(0,0,-1))
$.ex=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aW(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bL(r)},
ak:function(a){a.cy.aB()
a.db.aB()},
$isaD:1,
$iscf:1,
p:{
ew:function(a,b,c,d,e){var z,y,x,w
z=new X.iB()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null){x=c.gq()
x.toString
w=H.f(z.geS(),{func:1,ret:-1,args:[D.o]})
C.a.h(x.a,w)}x=new D.I("mover",y,z.b,z,[U.ae])
x.b=!0
z.aq(x)}x=z.c
if(!$.q.$2(x,b)){y=z.c
z.c=b
x=new D.I("fov",y,b,z,[P.A])
x.b=!0
z.aq(x)}x=z.d
if(!$.q.$2(x,d)){y=z.d
z.d=d
x=new D.I("near",y,d,z,[P.A])
x.b=!0
z.aq(x)}x=z.e
if(!$.q.$2(x,a)){y=z.e
z.e=a
x=new D.I("far",y,a,z,[P.A])
x.b=!0
z.aq(x)}return z}}},di:{"^":"b;"}}],["","",,V,{"^":"",
mW:function(a){P.jC(C.H,new V.mX(a))},
mX:{"^":"n:47;a",
$1:function(a){H.e(a,"$isbj")
P.dJ(C.i.es(this.a.ghE(),2)+" fps")}},
iP:{"^":"b;a,b,0c",
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cw().gbc().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.b1(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bw(this.c).h(0,v)
t=W.hU("radio")
t.checked=x
t.name=z
z=W.a5
W.Z(t,"change",H.f(new V.iQ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bw(this.c).h(0,w.createElement("br"))},
a6:function(a,b,c){return this.dD(a,b,c,!1)},
b1:function(a){var z,y,x,w,v
z=P.cw()
y=P.j
x=P.ek(z.gbc(),y,y)
x.m(0,this.a,a)
w=z.cM(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fv([],[]).bO(""),"",v)}},
iQ:{"^":"n:10;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.b1(this.d)}}},
j9:{"^":"b;0a,0b",
eL:function(a,b){var z,y,x,w,v,u,t
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
t=W.a5
W.Z(z,"scroll",H.f(new V.jc(x),{func:1,ret:-1,args:[t]}),!1,t)},
dF:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.j],"$asd")
this.fR()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.im(C.a.hJ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.h3(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cB(C.T,s,C.k,!1)
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
hk:function(a){var z,y,x,w,v,u,t
H.v(a,"$isd",[P.j],"$asd")
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
x=H.e(w.insertCell(-1),"$isdh").style
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
t=H.e(w.insertCell(-1),"$isdh")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fR:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jD()
y=P.j
z.a=new H.b_(0,0,[y,V.eF])
z.b=new H.b_(0,0,[y,V.eP])
z.c=z.M(0,"Start")
y=z.M(0,"Start").C(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").C(0,"Bold")
x=new V.bH()
w=[V.c6]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").C(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").C(0,"Italic")
x=new V.bH()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").C(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").C(0,"Code")
x=new V.bH()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").C(0,"LinkHead")
y=new V.bH()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").C(0,"LinkTail")
y=new V.bH()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").C(0,"Other").a,new V.he())
x=z.M(0,"Other").C(0,"Other")
y=new V.bH()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.bi("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.bi("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.bi("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.bi("Link")
x=z.M(0,"Other")
x.d=x.a.bi("Other")
this.b=z},
p:{
ja:function(a,b){var z=new V.j9()
z.eL(a,!0)
return z}}},
jc:{"^":"n:10;a",
$1:function(a){P.eM(C.q,new V.jb(this.a))}},
jb:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.i.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jp:{"^":"b;a,b,0c,d",
a6:function(a,b,c){var z,y,x,w,v,u
z=W.cZ(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bw(this.c)
x=y.gk(y)
y=W.ab
W.Z(z,"click",H.f(new V.jr(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bw(this.c).h(0,z)
J.bw(this.c).h(0,document.createElement("br"))
w=P.cw().gbc().j(0,H.l(this.a))
if(w==null){this.b1(x)
v=c}else{u=P.bX(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.a6(a,b,!1)},
b1:function(a){var z,y,x,w,v
z=P.cw()
y=P.j
x=P.ek(z.gbc(),y,y)
x.m(0,this.a,H.l(a))
w=z.cM(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fv([],[]).bO(""),"",v)}},
jr:{"^":"n:48;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isab")
z=this.a
y=J.bw(z.c)
y.H(y,new V.jq())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.b1(this.d)}},
jq:{"^":"n:49;",
$1:function(a){var z
H.e(a,"$isV")
if(!!J.J(a).$iscY){z=a.style
z.border="solid 2px white"}}}}],["","",,B,{"^":"",
h_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.ja("Test 015",!0)
y=W.cT(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.dF(H.c(["Test of Material Lighting shader with bump mapping, reflections, refractions."],x))
z.hk(H.c(["bumpMaps","controls"],x))
z.dF(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jA(w,!0,!0,!0,!1)
u=X.cW(!0,!0,!1,null,2000,null,0)
u.sdJ(0,!1)
t=E.e7(null,!0,null,"",null,null)
s=F.df()
F.bS(s,null,null,1,1,1,0,0,1)
F.bS(s,null,null,1,1,0,1,0,3)
F.bS(s,null,null,1,1,0,0,1,2)
F.bS(s,null,null,1,1,-1,0,0,0)
F.bS(s,null,null,1,1,0,-1,0,0)
F.bS(s,null,null,1,1,0,0,-1,3)
s.av()
t.sbS(0,s)
z=v.f
r=z.a
q=r.createTexture()
r.bindTexture(34067,q)
r.texParameteri(34067,10242,10497)
r.texParameteri(34067,10243,10497)
r.texParameteri(34067,10241,9729)
r.texParameteri(34067,10240,9729)
r.bindTexture(34067,null)
p=new T.dj()
p.a=0
p.b=q
p.c=!1
p.d=0
z.aJ(p,q,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aJ(p,q,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aJ(p,q,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aJ(p,q,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aJ(p,q,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aJ(p,q,"../resources/maskonaive/negz.jpg",34074,!1,!1)
o=new O.ik()
z=O.cU(V.aM)
o.e=z
z.aX(o.gfg(),o.gfh())
z=new O.b8(o,"emission")
z.c=C.c
z.f=new V.y(0,0,0)
o.f=z
z=new O.b8(o,"ambient")
z.c=C.c
z.f=new V.y(0,0,0)
o.r=z
z=new O.b8(o,"diffuse")
z.c=C.c
z.f=new V.y(0,0,0)
o.x=z
z=new O.b8(o,"invDiffuse")
z.c=C.c
z.f=new V.y(0,0,0)
o.y=z
z=new O.ir(o,"specular")
z.c=C.c
z.f=new V.y(0,0,0)
z.ch=100
o.z=z
z=new O.io(o,"bump")
z.c=C.c
o.Q=z
o.ch=null
z=new O.b8(o,"reflect")
z.c=C.c
z.f=new V.y(0,0,0)
o.cx=z
z=new O.iq(o,"refract")
z.c=C.c
z.f=new V.y(0,0,0)
z.ch=1
o.cy=z
z=new O.im(o,"alpha")
z.c=C.c
z.f=1
o.db=z
z=new D.i2()
z.bo(D.a2)
z.e=H.c([],[D.ch])
z.f=H.c([],[D.iD])
z.r=H.c([],[D.jg])
z.x=H.c([],[D.jw])
z.y=H.c([],[D.jx])
z.z=H.c([],[D.jy])
z.Q=null
z.ch=null
z.cV(z.gff(),z.gfB(),z.gfD())
o.dx=z
r=z.Q
if(r==null){r=D.H()
z.Q=r
z=r}else z=r
r={func:1,ret:-1,args:[D.o]}
n=H.f(o.gfM(),r)
C.a.h(z.a,n)
n=o.dx
z=n.ch
if(z==null){z=D.H()
n.ch=z}n=H.f(o.gaK(),r)
C.a.h(z.a,n)
o.dy=null
z=o.dx
m=U.dY(V.er(new V.ai(0,0,0),new V.N(0,1,0),new V.N(-1,-1,-1)))
l=new D.ch()
l.c=new V.y(1,1,1)
l.a=new V.N(0,0,1)
k=l.b
l.b=m
m=m.gq()
m.toString
j=H.f(l.geP(),r)
C.a.h(m.a,j)
m=new D.I("mover",k,l.b,l,[U.ae])
m.b=!0
l.aF(m)
i=new V.y(1,1,1)
if(!l.c.v(0,i)){k=l.c
l.c=i
m=new D.I("color",k,i,l,[V.y])
m.b=!0
l.aF(m)}z.h(0,l)
z=o.r
z.su(0,new V.y(0.1,0.1,0.1))
z=o.x
z.su(0,new V.y(0.1,0.1,0.1))
o.z.su(0,new V.y(0,0,0))
z=o.z
if(z.c===C.c){z.c=C.h
z.bn()
z.bs(100)
m=z.a
m.a=null
m.N(null)}z.bs(10)
z=o.ch
if(z!==p){if(z!=null)C.a.Y(z.gq().a,n)
k=o.ch
o.ch=p
C.a.h(p.gq().a,n)
z=new D.I("environment",k,o.ch,o,[T.dj])
z.b=!0
o.N(z)}o.cy.saw(0.6)
z=o.cy
z.su(0,new V.y(0.2,0.3,1))
z=o.cx
z.su(0,new V.y(0.6,0.6,0.6))
h=new U.ea()
h.bo(U.ae)
h.aX(h.gfe(),h.gfC())
h.e=null
h.f=V.b9()
h.r=0
z=v.r
n=new U.k3()
m=U.cV()
m.scQ(0,!0)
m.scF(6.283185307179586)
m.scH(0)
m.sa7(0,0)
m.scG(100)
m.sS(0)
m.sco(0.5)
n.b=m
m=m.gq()
m.toString
l=H.f(n.gaG(),r)
C.a.h(m.a,l)
m=U.cV()
m.scQ(0,!0)
m.scF(6.283185307179586)
m.scH(0)
m.sa7(0,0)
m.scG(100)
m.sS(0)
m.sco(0.5)
n.c=m
C.a.h(m.gq().a,l)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
g=new X.aC(!1,!1,!1)
k=n.d
n.d=g
m=[X.aC]
l=new D.I("modifiers",k,g,n,m)
l.b=!0
n.R(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.I("invertX",l,!1,n,[P.ad])
l.b=!0
n.R(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.I("invertY",l,!1,n,[P.ad])
l.b=!0
n.R(l)}n.b2(z)
h.h(0,n)
z=v.r
n=new U.k2()
l=U.cV()
l.scQ(0,!0)
l.scF(6.283185307179586)
l.scH(0)
l.sa7(0,0)
l.scG(100)
l.sS(0)
l.sco(0.2)
n.b=l
l=l.gq()
l.toString
j=H.f(n.gaG(),r)
C.a.h(l.a,j)
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
g=new X.aC(!0,!1,!1)
k=n.c
n.c=g
l=new D.I("modifiers",k,g,n,m)
l.b=!0
n.R(l)
n.b2(z)
h.h(0,n)
z=v.r
n=new U.k4()
n.c=0.01
n.d=0
n.e=0
g=new X.aC(!1,!1,!1)
n.b=g
m=new D.I("modifiers",null,g,n,m)
m.b=!0
n.R(m)
n.b2(z)
h.h(0,n)
h.h(0,U.dY(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.ew(2000,1.0471975511965976,h,0.1,null)
e=new M.hx()
e.sb3(null)
e.sbe(0,null)
e.sbf(null)
z=E.e7(null,!0,null,"",null,null)
s=F.df()
n=s.a
m=new V.N(-1,-1,1)
m=m.w(0,Math.sqrt(m.G(m)))
d=n.bu(new V.bJ(1,2,4,6),new V.aX(1,0,0,1),new V.ai(-1,-1,0),new V.U(0,1),m,null)
n=s.a
m=new V.N(1,-1,1)
m=m.w(0,Math.sqrt(m.G(m)))
c=n.bu(new V.bJ(0,3,4,6),new V.aX(0,0,1,1),new V.ai(1,-1,0),new V.U(1,1),m,null)
n=s.a
m=new V.N(1,1,1)
m=m.w(0,Math.sqrt(m.G(m)))
b=n.bu(new V.bJ(0,2,5,6),new V.aX(0,1,0,1),new V.ai(1,1,0),new V.U(1,0),m,null)
n=s.a
m=new V.N(-1,1,1)
m=m.w(0,Math.sqrt(m.G(m)))
a=n.bu(new V.bJ(0,2,4,7),new V.aX(1,1,0,1),new V.ai(-1,1,0),new V.U(0,0),m,null)
s.d.hl(H.c([d,c,b,a],[F.aO]))
s.av()
z.sbS(0,s)
e.d=z
e.e=null
z=new O.jd()
z.b=1.0471975511965976
k=z.c
z.c=p
n=p.gq()
n.toString
m=H.f(z.gaK(),r)
C.a.h(n.a,m)
n=new D.I("boxTexture",k,z.c,z,[T.dj])
n.b=!0
z.N(n)
i=new V.y(1,1,1)
if(!J.a_(z.d,i)){k=z.d
z.d=i
n=new D.I("boxColor",k,i,z,[V.y])
n.b=!0
z.N(n)}z.e=null
e.sbf(z)
e.sbe(0,u)
e.sb3(f)
a0=new M.hK()
z=O.cU(E.aL)
a0.d=z
z.aX(a0.gfj(),a0.gfk())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sb3(null)
a0.sbe(0,null)
a0.sbf(null)
a0.sb3(f)
a0.sbf(o)
a0.sbe(0,u)
a0.d.h(0,t)
a0.b.sdJ(0,!1)
z=M.aE
n=H.c([e,a0],[z])
m=new M.hs()
m.bo(z)
m.e=!1
m.f=null
m.aX(m.gfE(),m.gfF())
m.cb(0,n)
z=v.d
if(z!==m){if(z!=null){z=z.gq()
z.toString
n=H.f(v.gd2(),r)
C.a.Y(z.a,n)}v.d=m
z=m.gq()
z.toString
r=H.f(v.gd2(),r)
C.a.h(z.a,r)
v.eN()}z=new V.iP("controls",!0)
r=x.getElementById("controls")
z.c=r
if(r==null)H.r("Failed to find controls for RadioGroup")
z.dD(0,"Silver",new B.mG(o),!0)
z.a6(0,"Gold",new B.mH(o))
z.a6(0,"Glass",new B.mI(o))
z.a6(0,"Blue Glass",new B.mJ(o))
z.a6(0,"Water Bubble",new B.mK(o))
z.a6(0,"No Reflection",new B.mL(o))
z.a6(0,"Pink Distort",new B.mM(o))
z.a6(0,"Cloak",new B.mN(o))
z.a6(0,"White and Shiny",new B.mO(o))
z=new V.jp("bumpMaps",!0,new B.mP(o,v))
x=x.getElementById("bumpMaps")
z.c=x
if(x==null)H.r("Failed to find bumpMaps for Texture2DGroup")
z.a6(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
V.mW(v)},
mG:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.2,0.2,0.2))
z.cy.su(0,new V.y(0,0,0))
z=z.cx
z.su(0,new V.y(1,1,1))}},
mH:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.11,0.11,0.1))
y=z.x
y.su(0,new V.y(0.21,0.21,0.2))
z.cy.su(0,new V.y(0,0,0))
z=z.cx
z.su(0,new V.y(1,0.9,0.5))}},
mI:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.4)
y=z.cy
y.su(0,new V.y(0.6,0.6,0.6))
z=z.cx
z.su(0,new V.y(0.4,0.4,0.4))}},
mJ:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.4)
y=z.cy
y.su(0,new V.y(0.2,0.3,1))
z=z.cx
z.su(0,new V.y(0.3,0.3,0.3))}},
mK:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.6)
y=z.cy
y.su(0,new V.y(0.8,0.8,0.8))
z=z.cx
z.su(0,new V.y(0.2,0.2,0.2))}},
mL:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.6)
y=z.cy
y.su(0,new V.y(1,1,1))
z.cx.su(0,new V.y(0,0,0))}},
mM:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.1,0.1,0.1))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.9)
y=z.cy
y.su(0,new V.y(1,0.8,0.8))
z.cx.su(0,new V.y(0,0,0))}},
mN:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0,0,0))
y=z.x
y.su(0,new V.y(0.1,0.1,0.1))
z.cy.saw(0.99)
y=z.cy
y.su(0,new V.y(0.95,0.95,0.95))
z.cx.su(0,new V.y(0,0,0))}},
mO:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.su(0,new V.y(0.3,0.3,0.3))
y=z.x
y.su(0,new V.y(0.5,0.5,0.5))
z.cy.su(0,new V.y(0,0,0))
z=z.cx
z.su(0,new V.y(0.3,0.3,0.3))}},
mP:{"^":"n:22;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.hN(a)
x=z.c
if(x!==C.d){if(x===C.c)z.b_()
z.c=C.d
z.dv(null)
x=z.a
x.a=null
x.N(null)}z.du(y)}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ee.prototype
return J.ed.prototype}if(typeof a=="string")return J.cm.prototype
if(a==null)return J.ef.prototype
if(typeof a=="boolean")return J.hY.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.aJ=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.cb=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.mw=function(a){if(typeof a=="number")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.dE=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.b1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.a_=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).v(a,b)}
J.h6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mw(a).L(a,b)}
J.dK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aJ(a).j(a,b)}
J.cK=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fX(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cb(a).m(a,b,c)}
J.h7=function(a,b){return J.dE(a).F(a,b)}
J.h8=function(a,b,c){return J.b1(a).fK(a,b,c)}
J.h9=function(a,b,c,d){return J.b1(a).dE(a,b,c,d)}
J.ha=function(a,b){return J.dE(a).X(a,b)}
J.cL=function(a,b,c){return J.aJ(a).hs(a,b,c)}
J.cM=function(a,b){return J.cb(a).I(a,b)}
J.hb=function(a,b,c,d){return J.cb(a).ay(a,b,c,d)}
J.dL=function(a,b){return J.cb(a).H(a,b)}
J.bw=function(a){return J.b1(a).gcl(a)}
J.bZ=function(a){return J.J(a).gT(a)}
J.bx=function(a){return J.cb(a).ga1(a)}
J.av=function(a){return J.aJ(a).gk(a)}
J.hc=function(a,b){return J.b1(a).i7(a,b)}
J.hd=function(a,b){return J.b1(a).sa2(a,b)}
J.a9=function(a){return J.J(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cS.prototype
C.I=J.t.prototype
C.a=J.b7.prototype
C.J=J.ed.prototype
C.f=J.ee.prototype
C.t=J.ef.prototype
C.i=J.cl.prototype
C.b=J.cm.prototype
C.Q=J.c5.prototype
C.W=H.db.prototype
C.X=W.iy.prototype
C.z=J.iC.prototype
C.A=P.dd.prototype
C.r=J.cu.prototype
C.B=W.bO.prototype
C.C=W.kn.prototype
C.E=new P.hj(!1)
C.D=new P.hi(C.E)
C.F=new P.iA()
C.G=new P.kc()
C.j=new P.la()
C.c=new A.cg(0,"ColorSourceType.None")
C.h=new A.cg(1,"ColorSourceType.Solid")
C.d=new A.cg(2,"ColorSourceType.Texture2D")
C.e=new A.cg(3,"ColorSourceType.TextureCube")
C.q=new P.bA(0)
C.H=new P.bA(5e6)
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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

C.M=function(getTagFallback) {
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
C.N=function() {
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
C.O=function(hooks) {
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
C.P=function(hooks) {
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
C.w=H.c(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.c(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.c(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.c(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.c(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.T=H.c(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.c(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.U=H.c(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.c(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.c(I.ak([]),[P.j])
C.V=new H.hw(0,{},C.R,[P.j,P.j])
C.k=new P.k5(!1)
$.aA=0
$.by=null
$.dQ=null
$.dx=!1
$.fV=null
$.fP=null
$.h2=null
$.cF=null
$.cI=null
$.dF=null
$.bq=null
$.bT=null
$.bU=null
$.dy=!1
$.T=C.j
$.e4=null
$.e3=null
$.e2=null
$.e1=null
$.q=V.is()
$.jf="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.je="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ex=null
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
I.$lazy(y,x,w)}})(["e0","$get$e0",function(){return H.fU("_$dart_dartClosure")},"d1","$get$d1",function(){return H.fU("_$dart_js")},"eS","$get$eS",function(){return H.aF(H.ct({
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aF(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aF(H.ct(null))},"eV","$get$eV",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aF(H.ct(void 0))},"f_","$get$f_",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aF(H.eY(null))},"eW","$get$eW",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aF(H.eY(void 0))},"f0","$get$f0",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ds","$get$ds",function(){return P.ko()},"bV","$get$bV",function(){return[]},"fc","$get$fc",function(){return P.k9()},"fj","$get$fj",function(){return H.iw(H.bp(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fF","$get$fF",function(){return P.iV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fL","$get$fL",function(){return P.m8()},"dZ","$get$dZ",function(){return{}},"ff","$get$ff",function(){return Z.ar(0)},"fd","$get$fd",function(){return Z.ar(511)},"az","$get$az",function(){return Z.ar(1)},"aR","$get$aR",function(){return Z.ar(2)},"aQ","$get$aQ",function(){return Z.ar(4)},"aS","$get$aS",function(){return Z.ar(8)},"aT","$get$aT",function(){return Z.ar(16)},"bM","$get$bM",function(){return Z.ar(32)},"bN","$get$bN",function(){return Z.ar(64)},"fe","$get$fe",function(){return Z.ar(96)},"bn","$get$bn",function(){return Z.ar(128)},"aP","$get$aP",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:P.G,args:[F.ao]},{func:1,ret:-1,args:[P.m,[P.i,E.aL]]},{func:1,ret:P.G,args:[W.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.G,args:[D.o]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,V.aM]]},{func:1,ret:-1,args:[P.m,[P.i,M.aE]]},{func:1,ret:P.j,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.i,U.ae]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.m,[P.i,D.a2]]},{func:1,args:[,]},{func:1,ret:P.G,args:[P.j]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ad,args:[W.M]},{func:1,ret:W.V,args:[W.M]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:P.G,args:[P.a1]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:P.ad,args:[P.A,P.A]},{func:1,ret:P.G,args:[P.j,,]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.ad,args:[[P.i,D.a2]]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,args:[,P.j]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.G,args:[F.aO,P.A,P.A]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:P.G,args:[P.bj]},{func:1,ret:P.G,args:[W.ab]},{func:1,ret:P.G,args:[W.V]},{func:1,args:[P.j]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mZ(d||a)
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
Isolate.ak=a.ak
Isolate.dC=a.dC
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
if(typeof dartMainRunner==="function")dartMainRunner(B.h_,[])
else B.h_([])})})()
//# sourceMappingURL=test.dart.js.map
