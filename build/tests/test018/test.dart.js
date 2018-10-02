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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dz(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dB=function(){}
var dart=[["","",,H,{"^":"",nP:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cI:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dE==null){H.mT()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cd("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d0()]
if(v!=null)return v
v=H.n_(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d0(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
t:function(a,b){return a===b},
gT:function(a){return H.bM(a)},
j:["ew",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i3:{"^":"u;",
j:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isak:1},
ej:{"^":"u;",
t:function(a,b){return null==b},
j:function(a){return"null"},
gT:function(a){return 0},
$isH:1},
d1:{"^":"u;",
gT:function(a){return 0},
j:["ex",function(a){return String(a)}]},
iM:{"^":"d1;"},
ce:{"^":"d1;"},
c7:{"^":"d1;",
j:function(a){var z=a[$.$get$e4()]
if(z==null)return this.ex(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscY:1},
bc:{"^":"u;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.B("add"))
a.push(b)},
ik:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ca(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.q(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b7(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
hX:function(a){return this.E(a,"")},
hQ:function(a,b,c,d){var z,y,x
H.A(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b7(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bP:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i1())},
ay:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.B("fill range"))
P.aQ(b,c,a.length,null,null,null)
for(z=b;z.J(0,c);z=z.w(0,1))a[z]=d},
b2:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.cZ(a,"[","]")},
ga_:function(a){return new J.aE(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bM(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cj(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
l:function(a,b,c){H.E(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isk:1,
$isc:1,
q:{
i2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.eg(new Array(a),b)},
eg:function(a,b){return J.bF(H.e(a,[b]))},
bF:function(a){H.c_(a)
a.fixed$length=Array
return a},
nN:[function(a,b){return J.hi(H.h6(a,"$isal"),H.h6(b,"$isal"))},"$2","mp",8,0,50]}},
nO:{"^":"bc;$ti"},
aE:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c5:{"^":"u;",
aL:function(a,b){var z
H.h5(b)
if(typeof b!=="number")throw H.a(H.a4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbG(b)
if(this.gbG(a)===z)return 0
if(this.gbG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbG:function(a){return a===0?1/a<0:a<0},
iz:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cu:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
ek:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbG(a))return"-"+z
return z},
bc:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.B("Unexpected toString result: "+z))
x=J.av(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a*b},
bh:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dl(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.dl(a,b)},
dl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aJ:function(a,b){var z
if(a>0)z=this.dj(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h_:function(a,b){if(b<0)throw H.a(H.a4(b))
return this.dj(a,b)},
dj:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a<b},
ac:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a>b},
$isal:1,
$asal:function(){return[P.Z]},
$ist:1,
$isZ:1},
ei:{"^":"c5;",$ism:1},
eh:{"^":"c5;"},
c6:{"^":"u;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.q(H.aL(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
w:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cj(b,null,null))
return a+b},
aW:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a4(b))
c=P.aQ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a4(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a4(c))
if(typeof c!=="number")return c.J()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
u:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a4(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.J()
if(b<0)throw H.a(P.ca(b,null,null))
if(b>c)throw H.a(P.ca(b,null,null))
if(c>a.length)throw H.a(P.ca(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.u(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i8:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a9:function(a,b){return this.i8(a,b," ")},
e2:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e1:function(a,b){return this.e2(a,b,0)},
hC:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.ha(a,b,c)},
aL:function(a,b){var z
H.K(b)
if(typeof b!=="string")throw H.a(H.a4(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isal:1,
$asal:function(){return[P.i]},
$isev:1,
$isi:1}}],["","",,H,{"^":"",
cJ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i1:function(){return new P.js("No element")},
jq:function(a,b,c){var z
H.w(a,"$isc",[c],"$asc")
H.h(b,{func:1,ret:P.m,args:[c,c]})
z=J.ao(a)
if(typeof z!=="number")return z.K()
H.cb(a,0,z-1,b,c)},
cb:function(a,b,c,d,e){H.w(a,"$isc",[e],"$asc")
H.h(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.jp(a,b,c,d,e)
else H.jo(a,b,c,d,e)},
jp:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isc",[e],"$asc")
H.h(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.av(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aD(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jo:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isc",[a2],"$asc")
H.h(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.Z(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.Z(b+a0,2)
v=w-z
u=w+z
t=J.av(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aD(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aD(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aD(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aD(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aD(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aD(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aD(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aD(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aD(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.F(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.J()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ac()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.J()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ac()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ac()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.J()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.cb(a,b,m-2,a1,a2)
H.cb(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.F(a1.$2(t.i(a,m),r),0);)++m
for(;J.F(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.J()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cb(a,m,l,a1,a2)}else H.cb(a,m,l,a1,a2)},
a5:{"^":"k_;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.X(this.a,b)},
$ascz:function(){return[P.m]},
$asx:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hN:{"^":"k;"},
eo:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.av(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b7(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ir:{"^":"k;a,b,$ti",
ga_:function(a){return new H.is(J.bB(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cP(this.a,b))},
$ask:function(a,b){return[b]}},
is:{"^":"d_;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd_:function(a,b){return[b]}},
kv:{"^":"k;a,b,$ti",
ga_:function(a){return new H.kw(J.bB(this.a),this.b,this.$ti)}},
kw:{"^":"d_;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
co:{"^":"b;$ti"},
cz:{"^":"b;$ti",
l:function(a,b,c){H.E(b)
H.A(c,H.aC(this,"cz",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.A(d,H.aC(this,"cz",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
k_:{"^":"cs+cz;"}}],["","",,H,{"^":"",
hC:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mO:function(a){return init.types[H.E(a)]},
h1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.a4(a))
return z},
bM:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iW:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$isce){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.aA(w,1)
r=H.dF(H.c_(H.b5(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iO:function(){if(!!self.location)return self.location.href
return},
ex:function(a){var z,y,x,w,v
H.c_(a)
z=J.ao(a)
if(typeof z!=="number")return z.er()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a4(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aJ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a4(w))}return H.ex(z)},
ey:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a4(x))
if(x<0)throw H.a(H.a4(x))
if(x>65535)return H.iX(a)}return H.ex(a)},
iY:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.er()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cv:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aJ(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iV:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
iT:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
iP:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
iQ:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
iS:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
iU:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
iR:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a4(a))},
d:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.E(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.T(b,a,"index",null,z)
return P.ca(b,"index",null)},
mK:function(a,b,c){if(a>c)return new P.cw(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cw(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
a4:function(a){return new P.aM(!0,a,null,null)},
mz:function(a){if(typeof a!=="number")throw H.a(H.a4(a))
return a},
a:function(a){var z
if(a==null)a=new P.eu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hc})
z.name=""}else z.toString=H.hc
return z},
hc:function(){return J.aa(this.dartException)},
q:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b7(a))},
ax:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d2(H.l(y)+" (Error "+w+")",null))
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
m=v.a8(y)
if(m!=null)return z.$1(H.d2(H.K(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.d2(H.K(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.et(H.K(y),m))}}return z.$1(new H.jZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eD()
return a},
bz:function(a){var z
if(a==null)return new H.fv(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fv(a)},
mN:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
mV:function(a,b,c,d,e,f){H.f(a,"$iscY")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.r("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mV)
a.$identity=z
return z},
hy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.j2(z).r}else x=d
w=e?Object.create(new H.jt().constructor.prototype):Object.create(new H.cS(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.w()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e_(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mO,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dT:H.cT
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e_(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hv:function(a,b,c,d){var z=H.cT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hv(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.w()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.ck("self")
$.bC=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.w()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.ck("self")
$.bC=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hw:function(a,b,c,d){var z,y
z=H.cT
y=H.dT
switch(b?-1:a){case 0:throw H.a(H.jc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hx:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.ck("self")
$.bC=z}y=$.dS
if(y==null){y=H.ck("receiver")
$.dS=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aF
if(typeof y!=="number")return y.w()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.w()
$.aF=y+1
return new Function(z+y+"}")()},
dz:function(a,b,c,d,e,f,g){var z,y
z=J.bF(H.c_(b))
H.E(c)
y=!!J.I(d).$isc?J.bF(d):d
return H.hy(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
mL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
h5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
fS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
dJ:function(a,b){throw H.a(H.aB(a,H.K(b).substring(3)))},
nc:function(a,b){var z=J.av(b)
throw H.a(H.hu(a,z.u(b,3,z.gm(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.dJ(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.nc(a,b)},
h6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.I(a)[b])return a
H.dJ(a,b)},
c_:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.aB(a,"List"))},
h3:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.dJ(a,b)},
fW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
cf:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fW(J.I(a))
if(z==null)return!1
y=H.h0(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dv)return a
$.dv=!0
try{if(H.cf(a,b))return a
z=H.ci(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dv=!1}},
dC:function(a,b){if(a!=null&&!H.dy(a,b))H.q(H.aB(a,H.ci(b)))
return a},
fN:function(a){var z
if(a instanceof H.n){z=H.fW(J.I(a))
if(z!=null)return H.ci(z)
return"Closure"}return H.bg(a)},
ni:function(a){throw H.a(new P.hG(H.K(a)))},
fZ:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
oM:function(a,b,c){return H.bA(a["$as"+H.l(c)],H.b5(b))},
b4:function(a,b,c,d){var z
H.K(c)
H.E(d)
z=H.bA(a["$as"+H.l(c)],H.b5(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.K(b)
H.E(c)
z=H.bA(a["$as"+H.l(b)],H.b5(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.E(b)
z=H.b5(a)
return z==null?null:z[b]},
ci:function(a){var z=H.b6(a,null)
return z},
b6:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dF(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mo(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mo:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.w(t,b[r])
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
for(z=H.mM(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b6(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dF:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.ar("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b6(u,c)}v="<"+z.j(0)+">"
return v},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bZ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b5(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fQ(H.bA(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.c_(c)
H.K(d)
if(a==null)return a
z=H.bZ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dF(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fQ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
oK:function(a,b,c){return a.apply(b,H.bA(J.I(b)["$as"+H.l(c)],H.b5(b)))},
h2:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.h2(z)}return!1},
dy:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.h2(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dy(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cf(a,b)}y=J.I(a).constructor
x=H.b5(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dy(a,b))throw H.a(H.aB(a,H.ci(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.h0(a,b,c,d)
if('func' in a)return c.builtin$cls==="cY"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bA(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ci(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fQ(H.bA(r,z),b,u,d)},
h0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aw(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aw(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aw(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.na(m,b,l,d)},
na:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
oL:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
n_:function(a){var z,y,x,w,v,u
z=H.K($.h_.$1(a))
y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fP.$2(a,z))
if(z!=null){y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cL(x)
$.cH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cK[z]=x
return x}if(v==="-"){u=H.cL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h7(a,x)
if(v==="*")throw H.a(P.cd(z))
if(init.leafTags[z]===true){u=H.cL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h7(a,x)},
h7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dG(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cL:function(a){return J.dG(a,!1,null,!!a.$isG)},
n9:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cL(z)
else return J.dG(z,c,null,null)},
mT:function(){if(!0===$.dE)return
$.dE=!0
H.mU()},
mU:function(){var z,y,x,w,v,u,t,s
$.cH=Object.create(null)
$.cK=Object.create(null)
H.mP()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h8.$1(v)
if(u!=null){t=H.n9(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mP:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bw(C.J,H.bw(C.O,H.bw(C.u,H.bw(C.u,H.bw(C.N,H.bw(C.K,H.bw(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h_=new H.mQ(v)
$.fP=new H.mR(u)
$.h8=new H.mS(t)},
bw:function(a,b){return a(b)||b},
ha:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hb:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hB:{"^":"b;$ti",
j:function(a){return P.d4(this)},
l:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.hC()},
$isJ:1},
hD:{"^":"hB;a,b,c,$ti",
gm:function(a){return this.a},
bs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bs(0,b))return
return this.da(b)},
da:function(a){return this.b[H.K(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.da(v),z))}}},
j1:{"^":"b;a,b,c,d,e,f,r,0x",q:{
j2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bF(z)
y=z[0]
x=z[1]
return new H.j1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jL:{"^":"b;a,b,c,d,e,f",
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
q:{
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iJ:{"^":"a6;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
et:function(a,b){return new H.iJ(a,b==null?null:b.method)}}},
i6:{"^":"a6;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
d2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i6(a,y,z?null:b.receiver)}}},
jZ:{"^":"a6;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nl:{"^":"n:18;a",
$1:function(a){if(!!J.I(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fv:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.bg(this).trim()+"'"},
geo:function(){return this},
$iscY:1,
geo:function(){return this}},
eJ:{"^":"n;"},
jt:{"^":"eJ;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cS:{"^":"eJ;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bM(this.a)
else y=typeof z!=="object"?J.c0(z):H.bM(z)
return(y^H.bM(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
q:{
cT:function(a){return a.a},
dT:function(a){return a.c},
ck:function(a){var z,y,x,w,v
z=new H.cS("self","target","receiver","name")
y=J.bF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jM:{"^":"a6;a",
j:function(a){return this.a},
q:{
aB:function(a,b){return new H.jM("TypeError: "+H.l(P.cn(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"a6;a",
j:function(a){return this.a},
q:{
hu:function(a,b){return new H.ht("CastError: "+H.l(P.cn(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
jb:{"^":"a6;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
jc:function(a){return new H.jb(a)}}},
b1:{"^":"io;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gan:function(a){return new H.ib(this,[H.y(this,0)])},
bs:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d7(y,b)}else return this.hU(b)},
hU:function(a){var z=this.d
if(z==null)return!1
return this.cz(this.bX(z,this.cw(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bk(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bk(w,b)
x=y==null?null:y.b
return x}else return this.hV(b)},
hV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bX(z,this.cw(a))
x=this.cz(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c1()
this.b=z}this.d0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c1()
this.c=y}this.d0(y,b,c)}else this.hW(b,c)},
hW:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c1()
this.d=z}y=this.cw(a)
x=this.bX(z,y)
if(x==null)this.c7(z,y,[this.c2(a,b)])
else{w=this.cz(x,a)
if(w>=0)x[w].b=b
else x.push(this.c2(a,b))}},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b7(this))
z=z.c}},
d0:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bk(a,b)
if(z==null)this.c7(a,b,this.c2(b,c))
else z.b=c},
f5:function(){this.r=this.r+1&67108863},
c2:function(a,b){var z,y
z=new H.ia(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f5()
return z},
cw:function(a){return J.c0(a)&0x3ffffff},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.d4(this)},
bk:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
d7:function(a,b){return this.bk(a,b)!=null},
c1:function(){var z=Object.create(null)
this.c7(z,"<non-identifier-key>",z)
this.eY(z,"<non-identifier-key>")
return z},
$isem:1},
ia:{"^":"b;a,b,0c,0d"},
ib:{"^":"hN;a,$ti",
gm:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.ic(z,z.r,this.$ti)
y.c=z.e
return y}},
ic:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mQ:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mR:{"^":"n:43;a",
$2:function(a,b){return this.a(a,b)}},
mS:{"^":"n:28;a",
$1:function(a){return this.a(H.K(a))}},
i4:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$isev:1,
$isj3:1,
q:{
i5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mM:function(a){return J.eg(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nb:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){return a},
iF:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
mi:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mK(a,b,c))
return b},
es:{"^":"u;",$ises:1,"%":"ArrayBuffer"},
d9:{"^":"u;",$isd9:1,$isjN:1,"%":"DataView;ArrayBufferView;d8|fp|fq|iG|fr|fs|b2"},
d8:{"^":"d9;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dB},
iG:{"^":"fq;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
l:function(a,b,c){H.E(b)
H.mL(c)
H.aK(b,a,a.length)
a[b]=c},
$asco:function(){return[P.t]},
$asx:function(){return[P.t]},
$isk:1,
$ask:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
b2:{"^":"fs;",
l:function(a,b,c){H.E(b)
H.E(c)
H.aK(b,a,a.length)
a[b]=c},
$asco:function(){return[P.m]},
$asx:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nY:{"^":"b2;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nZ:{"^":"b2;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o_:{"^":"b2;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o0:{"^":"b2;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
o1:{"^":"b2;",
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o2:{"^":"b2;",
gm:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
da:{"^":"b2;",
gm:function(a){return a.length},
i:function(a,b){H.aK(b,a,a.length)
return a[b]},
bP:function(a,b,c){return new Uint8Array(a.subarray(b,H.mi(b,c,a.length)))},
$isda:1,
$isS:1,
"%":";Uint8Array"},
fp:{"^":"d8+x;"},
fq:{"^":"fp+co;"},
fr:{"^":"d8+x;"},
fs:{"^":"fr+co;"}}],["","",,P,{"^":"",
ky:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bx(new P.kA(z),1)).observe(y,{childList:true})
return new P.kz(z,y,x)}else if(self.setImmediate!=null)return P.mx()
return P.my()},
oz:[function(a){self.scheduleImmediate(H.bx(new P.kB(H.h(a,{func:1,ret:-1})),0))},"$1","mw",4,0,11],
oA:[function(a){self.setImmediate(H.bx(new P.kC(H.h(a,{func:1,ret:-1})),0))},"$1","mx",4,0,11],
oB:[function(a){P.dh(C.q,H.h(a,{func:1,ret:-1}))},"$1","my",4,0,11],
dh:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.Z(a.a,1000)
return P.lC(z<0?0:z,b)},
eN:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bn]})
z=C.d.Z(a.a,1000)
return P.lD(z<0?0:z,b)},
ms:function(a,b){if(H.cf(a,{func:1,args:[P.b,P.aA]}))return b.ij(a,null,P.b,P.aA)
if(H.cf(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mr:function(){var z,y
for(;z=$.bv,z!=null;){$.bX=null
y=z.b
$.bv=y
if(y==null)$.bW=null
z.a.$0()}},
oJ:[function(){$.dw=!0
try{P.mr()}finally{$.bX=null
$.dw=!1
if($.bv!=null)$.$get$dq().$1(P.fR())}},"$0","fR",0,0,3],
fM:function(a){var z=new P.fj(H.h(a,{func:1,ret:-1}))
if($.bv==null){$.bW=z
$.bv=z
if(!$.dw)$.$get$dq().$1(P.fR())}else{$.bW.b=z
$.bW=z}},
mv:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bv
if(z==null){P.fM(a)
$.bX=$.bW
return}y=new P.fj(a)
x=$.bX
if(x==null){y.b=z
$.bX=y
$.bv=y}else{y.b=x.b
x.b=y
$.bX=y
if(y.b==null)$.bW=y}},
nd:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.V
if(C.j===y){P.cG(null,null,C.j,a)
return}y.toString
P.cG(null,null,y,H.h(y.cd(a),z))},
eM:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.V
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.h(y.cd(b),z))},
jI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bn]}
H.h(b,z)
y=$.V
if(y===C.j){y.toString
return P.eN(a,b)}x=y.du(b,P.bn)
$.V.toString
return P.eN(a,H.h(x,z))},
cF:function(a,b,c,d,e){var z={}
z.a=d
P.mv(new P.mt(z,e))},
fI:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fJ:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mu:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cG:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cd(d):c.hy(d,-1)
P.fM(d)},
kA:{"^":"n:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kz:{"^":"n:42;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kB:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kC:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fy:{"^":"b;a,0b,c",
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bx(new P.lF(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bx(new P.lE(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbn:1,
q:{
lC:function(a,b){var z=new P.fy(!0,0)
z.eL(a,b)
return z},
lD:function(a,b){var z=new P.fy(!1,0)
z.eM(a,b)
return z}}},
lF:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lE:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ez(w,x)}z.c=y
this.d.$1(z)}},
bt:{"^":"b;0a,b,c,d,e,$ti",
i0:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.h(this.d,{func:1,ret:P.ak,args:[P.b]}),a.a,P.ak,P.b)},
hT:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cf(z,{func:1,args:[P.b,P.aA]}))return H.dC(w.it(z,a.a,a.b,null,y,P.aA),x)
else return H.dC(w.cM(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aY:{"^":"b;dk:a<,b,0fN:c<,$ti",
ej:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ms(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aY(0,$.V,[c])
w=b==null?1:3
this.d1(new P.bt(x,w,a,b,[z,c]))
return x},
iy:function(a,b){return this.ej(a,null,b)},
d1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbt")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaY")
z=y.a
if(z<4){y.d1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cG(null,null,z,H.h(new P.kR(this,a),{func:1,ret:-1}))}},
dg:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbt")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaY")
y=u.a
if(y<4){u.dg(a)
return}this.a=y
this.c=u.c}z.a=this.bn(a)
y=this.b
y.toString
P.cG(null,null,y,H.h(new P.kW(z,this),{func:1,ret:-1}))}},
c4:function(){var z=H.f(this.c,"$isbt")
this.c=null
return this.bn(z)},
bn:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d4:function(a){var z,y,x,w
z=H.y(this,0)
H.dC(a,{futureOr:1,type:z})
y=this.$ti
x=H.bZ(a,"$isbE",y,"$asbE")
if(x){z=H.bZ(a,"$isaY",y,null)
if(z)P.fm(a,this)
else P.kS(a,this)}else{w=this.c4()
H.A(a,z)
this.a=4
this.c=a
P.bS(this,w)}},
bT:[function(a,b){var z
H.f(b,"$isaA")
z=this.c4()
this.a=8
this.c=new P.ap(a,b)
P.bS(this,z)},function(a){return this.bT(a,null)},"iH","$2","$1","geU",4,2,27],
$isbE:1,
q:{
kS:function(a,b){var z,y,x
b.a=1
try{a.ej(new P.kT(b),new P.kU(b),null)}catch(x){z=H.ax(x)
y=H.bz(x)
P.nd(new P.kV(b,z,y))}},
fm:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaY")
if(z>=4){y=b.c4()
b.a=a.a
b.c=a.c
P.bS(b,y)}else{y=H.f(b.c,"$isbt")
b.a=2
b.c=a
a.dg(y)}},
bS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cF(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bS(z.a,b)}y=z.a
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
if(p){H.f(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cF(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.kZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kY(x,b,r).$0()}else if((y&2)!==0)new P.kX(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.I(y).$isbE){if(y.a>=4){n=H.f(t.c,"$isbt")
t.c=null
b=t.bn(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fm(y,t)
return}}m=b.b
n=H.f(m.c,"$isbt")
m.c=null
b=m.bn(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
kR:{"^":"n:0;a,b",
$0:function(){P.bS(this.a,this.b)}},
kW:{"^":"n:0;a,b",
$0:function(){P.bS(this.b,this.a.a)}},
kT:{"^":"n:21;a",
$1:function(a){var z=this.a
z.a=0
z.d4(a)}},
kU:{"^":"n:52;a",
$2:function(a,b){this.a.bT(a,H.f(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"n:0;a,b,c",
$0:function(){this.a.bT(this.b,this.c)}},
kZ:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eh(H.h(w.d,{func:1}),null)}catch(v){y=H.ax(v)
x=H.bz(v)
if(this.d){w=H.f(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.I(z).$isbE){if(z instanceof P.aY&&z.gdk()>=4){if(z.gdk()===8){w=this.b
w.b=H.f(z.gfN(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iy(new P.l_(t),null)
w.a=!1}}},
l_:{"^":"n:33;a",
$1:function(a){return this.a}},
kY:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cM(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ax(t)
y=H.bz(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
kX:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isap")
w=this.c
if(w.i0(z)&&w.e!=null){v=this.b
v.b=w.hT(z)
v.a=!1}}catch(u){y=H.ax(u)
x=H.bz(u)
w=H.f(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fj:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.aY(0,$.V,[P.m])
z.a=0
this.hZ(new P.jw(z,this),!0,new P.jx(z,y),y.geU())
return y}},
jw:{"^":"n;a,b",
$1:function(a){H.A(a,H.aC(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aC(this.b,"dd",0)]}}},
jx:{"^":"n:0;a,b",
$0:function(){this.b.d4(this.a.a)}},
eF:{"^":"b;$ti"},
jv:{"^":"b;"},
bn:{"^":"b;"},
ap:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa6:1},
m6:{"^":"b;",$isoy:1},
mt:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eu()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
lk:{"^":"m6;",
iu:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.V){a.$0()
return}P.fI(null,null,this,a,-1)}catch(x){z=H.ax(x)
y=H.bz(x)
P.cF(null,null,this,z,H.f(y,"$isaA"))}},
iv:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.V){a.$1(b)
return}P.fJ(null,null,this,a,b,-1,c)}catch(x){z=H.ax(x)
y=H.bz(x)
P.cF(null,null,this,z,H.f(y,"$isaA"))}},
hy:function(a,b){return new P.lm(this,H.h(a,{func:1,ret:b}),b)},
cd:function(a){return new P.ll(this,H.h(a,{func:1,ret:-1}))},
du:function(a,b){return new P.ln(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
eh:function(a,b){H.h(a,{func:1,ret:b})
if($.V===C.j)return a.$0()
return P.fI(null,null,this,a,b)},
cM:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.V===C.j)return a.$1(b)
return P.fJ(null,null,this,a,b,c,d)},
it:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.V===C.j)return a.$2(b,c)
return P.mu(null,null,this,a,b,c,d,e,f)},
ij:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lm:{"^":"n;a,b,c",
$0:function(){return this.a.eh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ll:{"^":"n:3;a,b",
$0:function(){return this.a.iu(this.b)}},
ln:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.iv(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
id:function(a,b,c,d,e){return new H.b1(0,0,[d,e])},
ie:function(a,b,c){H.c_(a)
return H.w(H.mN(a,new H.b1(0,0,[b,c])),"$isem",[b,c],"$asem")},
en:function(a,b){return new H.b1(0,0,[a,b])},
ii:function(a,b,c,d){return new P.l6(0,0,[d])},
i0:function(a,b,c){var z,y
if(P.dx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bY()
C.a.h(y,a)
try{P.mq(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eG(b,H.h3(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cZ:function(a,b,c){var z,y,x
if(P.dx(a))return b+"..."+c
z=new P.ar(b)
y=$.$get$bY()
C.a.h(y,a)
try{x=z
x.a=P.eG(x.gaF(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dx:function(a){var z,y
for(z=0;y=$.$get$bY(),z<y.length;++z)if(a===y[z])return!0
return!1},
mq:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.G();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ig:function(a,b,c){var z=P.id(null,null,null,b,c)
a.L(0,new P.ih(z,b,c))
return z},
d4:function(a){var z,y,x
z={}
if(P.dx(a))return"{...}"
y=new P.ar("")
try{C.a.h($.$get$bY(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.dM(a,new P.ip(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bY()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
l6:{"^":"l0;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fo(this,this.r,H.y(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ds()
this.b=z}return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ds()
this.c=y}return this.d2(y,b)}else return this.eN(0,b)},
eN:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.ds()
this.d=z}y=this.d5(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.dc(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dh(this.c,b)
else return this.fE(0,b)},
fE:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f1(z,b)
x=this.dc(y,b)
if(x<0)return!1
this.dm(y.splice(x,1)[0])
return!0},
d2:function(a,b){H.A(b,H.y(this,0))
if(H.f(a[b],"$isdr")!=null)return!1
a[b]=this.bS(b)
return!0},
dh:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdr")
if(z==null)return!1
this.dm(z)
delete a[b]
return!0},
d3:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.dr(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d3()
return z},
dm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d3()},
d5:function(a){return J.c0(a)&0x3ffffff},
f1:function(a,b){return a[this.d5(b)]},
dc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
q:{
ds:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dr:{"^":"b;a,0b,0c"},
l7:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
fo:function(a,b,c){var z=new P.l7(a,b,[c])
z.c=a.e
return z}}},
l0:{"^":"jd;"},
ih:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))}},
cs:{"^":"l8;",$isk:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.eo(a,this.gm(a),0,[H.b4(this,a,"x",0)])},
I:function(a,b){return this.i(a,b)},
iA:function(a,b){var z,y,x
z=H.e([],[H.b4(this,a,"x",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
cN:function(a){return this.iA(a,!0)},
ay:function(a,b,c,d){var z
H.A(d,H.b4(this,a,"x",0))
P.aQ(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.cZ(a,"[","]")}},
io:{"^":"am;"},
ip:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
am:{"^":"b;$ti",
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b4(this,a,"am",0),H.b4(this,a,"am",1)]})
for(z=J.bB(this.gan(a));z.G();){y=z.gP(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.ao(this.gan(a))},
j:function(a){return P.d4(a)},
$isJ:1},
lK:{"^":"b;$ti",
l:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
iq:{"^":"b;$ti",
i:function(a,b){return J.dL(this.a,b)},
l:function(a,b,c){J.cN(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
L:function(a,b){J.dM(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
j:function(a){return J.aa(this.a)},
$isJ:1},
f8:{"^":"lL;a,$ti"},
jf:{"^":"b;$ti",
j:function(a){return P.cZ(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.q(P.a0(b,0,null,"index",null))
for(z=P.fo(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
$isk:1},
jd:{"^":"jf;"},
l8:{"^":"b+x;"},
lL:{"^":"iq+lK;$ti"}}],["","",,P,{"^":"",hq:{"^":"c2;a",
i2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aQ(c,d,b.length,null,null,null)
z=$.$get$fk()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cJ(C.b.F(b,s))
o=H.cJ(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ar("")
w.a+=C.b.u(b,x,y)
w.a+=H.cv(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.dR(b,u,d,v,t,k)
else{j=C.d.bh(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aW(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dR(b,u,d,v,t,i)
else{j=C.d.bh(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aW(b,d,d,j===2?"==":"=")}return b},
$asc2:function(){return[[P.c,P.m],P.i]},
q:{
dR:function(a,b,c,d,e,f){if(C.d.bh(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hr:{"^":"bD;a",
$asbD:function(){return[[P.c,P.m],P.i]}},c2:{"^":"b;$ti"},bD:{"^":"jv;$ti"},hP:{"^":"c2;",
$asc2:function(){return[P.i,[P.c,P.m]]}},kc:{"^":"hP;a",
ghL:function(){return C.F}},kj:{"^":"bD;",
b3:function(a,b,c){var z,y,x,w
z=a.length
P.aQ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m5(0,0,x)
if(w.f_(a,b,z)!==z)w.dq(J.hh(a,z-1),0)
return C.V.bP(x,0,w.b)},
ck:function(a){return this.b3(a,0,null)},
$asbD:function(){return[P.i,[P.c,P.m]]}},m5:{"^":"b;a,b,c",
dq:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
f_:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dq(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},kd:{"^":"bD;a",
b3:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.ke(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aQ(b,c,y,null,null,null)
x=new P.ar("")
w=new P.m2(!1,x,!0,0,0,0)
w.b3(a,b,y)
w.hP(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
ck:function(a){return this.b3(a,0,null)},
$asbD:function(){return[[P.c,P.m],P.i]},
q:{
ke:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kf(!1,b,c,d)
return},
kf:function(a,b,c,d){var z,y,x
z=$.$get$fd()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aQ(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.kh(b))return
return P.ki(a,b)},
ki:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ax(y)}return},
kh:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kg:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ax(y)}return}}},m2:{"^":"b;a,b,c,d,e,f",
hP:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m4(c)
v=new P.m3(this,b,c,a)
$label0$0:for(u=J.av(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bM()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.d.bc(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.d.bc(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.d.bc(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cv(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ac()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.J()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.d.bc(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.d.bc(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m4:{"^":"n:51;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.av(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bM()
if((w&127)!==w)return x-b}return z-b}},m3:{"^":"n:41;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cc(this.d,a,b)}}}],["","",,P,{"^":"",
ch:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iW(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hR:function(a){var z=J.I(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bg(a)+"'"},
ij:function(a,b,c,d){var z,y
H.A(b,d)
z=J.i2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ik:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.A(x.gP(x),c))
if(b)return y
return H.w(J.bF(y),"$isc",z,"$asc")},
cc:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isbc",[z],"$asbc")
y=a.length
c=P.aQ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.J()
z=c<y}else z=!0
return H.ey(z?C.a.bP(a,b,c):a)}if(!!J.I(a).$isda)return H.iY(a,b,P.aQ(b,c,a.length,null,null,null))
return P.jy(a,b,c)},
jy:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a0(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.ao(a),null,null))
y=J.bB(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gP(y))}return H.ey(w)},
j4:function(a,b,c){return new H.i4(a,H.i5(a,!1,!0,!1))},
fa:function(){var z=H.iO()
if(z!=null)return P.k4(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hR(a)},
r:function(a){return new P.fl(a)},
il:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dI:function(a){H.nb(a)},
k4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f9(b>0||c<c?C.b.u(a,b,c):a,5,null).gel()
else if(y===32)return P.f9(C.b.u(a,z,c),0,null).gel()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.fK(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iD()
if(v>=b)if(P.fK(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.w()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.J()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.J()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.J()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a6(a,"..",s)))n=r>s+2&&C.b.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a6(a,"file",b)){if(u<=b){if(!C.b.a6(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aW(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
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
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aW(a,t,s,"")
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
q-=b}return new P.lp(a,v,u,t,s,r,q,o)}return P.lM(a,b,c,v,u,t,s,r,q,o)},
fc:function(a,b){var z=P.i
return C.a.hQ(H.e(a.split("&"),[z]),P.en(z,z),new P.k7(b),[P.J,P.i,P.i])},
k2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ch(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.ac()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ch(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.ac()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k5(a)
y=new P.k6(z,a)
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
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aJ(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mj:function(){var z,y,x,w,v
z=P.il(22,new P.ml(),!0,P.S)
y=new P.mk(z)
x=new P.mm()
w=new P.mn()
v=H.f(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isS"),"]",5)
v=H.f(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isS"),"az",21)
v=H.f(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fK:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fL()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ak:{"^":"b;"},
"+bool":0,
ah:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ah))return!1
return this.a===b.a&&this.b===b.b},
aL:function(a,b){return C.d.aL(this.a,H.f(b,"$isah").a)},
gT:function(a){var z=this.a
return(z^C.d.aJ(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hH(H.iV(this))
y=P.c3(H.iT(this))
x=P.c3(H.iP(this))
w=P.c3(H.iQ(this))
v=P.c3(H.iS(this))
u=P.c3(H.iU(this))
t=P.hI(H.iR(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isal:1,
$asal:function(){return[P.ah]},
q:{
hH:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"Z;"},
"+double":0,
aG:{"^":"b;a",
k:function(a,b){return new P.aG(C.d.aa(this.a*b))},
J:function(a,b){return C.d.J(this.a,H.f(b,"$isaG").a)},
ac:function(a,b){return C.d.ac(this.a,H.f(b,"$isaG").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
aL:function(a,b){return C.d.aL(this.a,H.f(b,"$isaG").a)},
j:function(a){var z,y,x,w,v
z=new P.hM()
y=this.a
if(y<0)return"-"+new P.aG(0-y).j(0)
x=z.$1(C.d.Z(y,6e7)%60)
w=z.$1(C.d.Z(y,1e6)%60)
v=new P.hL().$1(y%1e6)
return""+C.d.Z(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isal:1,
$asal:function(){return[P.aG]},
q:{
ea:function(a,b,c,d,e,f){return new P.aG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hL:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hM:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
eu:{"^":"a6;",
j:function(a){return"Throw of null."}},
aM:{"^":"a6;a,b,c,d",
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbV()+y+x
if(!this.a)return w
v=this.gbU()
u=P.cn(this.b)
return w+v+": "+H.l(u)},
q:{
c1:function(a){return new P.aM(!1,null,null,a)},
cj:function(a,b,c){return new P.aM(!0,a,b,c)},
dO:function(a){return new P.aM(!1,null,a,"Must not be null")}}},
cw:{"^":"aM;e,f,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
ca:function(a,b,c){return new P.cw(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
aQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hZ:{"^":"aM;e,m:f>,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){if(J.hd(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
T:function(a,b,c,d,e){var z=H.E(e!=null?e:J.ao(b))
return new P.hZ(b,z,!0,a,c,"Index out of range")}}},
k0:{"^":"a6;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
B:function(a){return new P.k0(a)}}},
jY:{"^":"a6;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cd:function(a){return new P.jY(a)}}},
js:{"^":"a6;a",
j:function(a){return"Bad state: "+this.a}},
hA:{"^":"a6;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cn(z))+"."},
q:{
b7:function(a){return new P.hA(a)}}},
iK:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa6:1},
eD:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa6:1},
hG:{"^":"a6;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fl:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hX:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
q:{
Y:function(a,b,c){return new P.hX(a,b,c)}}},
m:{"^":"Z;"},
"+int":0,
k:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.q(P.a0(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
j:function(a){return P.i0(this,"(",")")}},
d_:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
Z:{"^":"b;",$isal:1,
$asal:function(){return[P.Z]}},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gT:function(a){return H.bM(this)},
j:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.j(this)}},
aA:{"^":"b;"},
i:{"^":"b;",$isal:1,
$asal:function(){return[P.i]},
$isev:1},
"+String":0,
ar:{"^":"b;aF:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isom:1,
q:{
eG:function(a,b,c){var z=J.bB(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.G())}else{a+=H.l(z.gP(z))
for(;z.G();)a=a+c+H.l(z.gP(z))}return a}}},
k7:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.K(b)
y=J.av(b).e1(b,"=")
if(y===-1){if(b!=="")J.cN(a,P.du(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cN(a,P.du(x,0,x.length,z,!0),P.du(w,0,w.length,z,!0))}return a}},
k3:{"^":"n:48;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
k5:{"^":"n:39;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k6:{"^":"n:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ch(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.J()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cC:{"^":"b;bO:a<,b,c,d,ec:e>,f,r,0x,0y,0z,0Q,0ch",
gem:function(){return this.b},
gcv:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbH:function(a){var z=this.d
if(z==null)return P.fA(this.a)
return z},
gcI:function(a){var z=this.f
return z==null?"":z},
gdX:function(){var z=this.r
return z==null?"":z},
cL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dt(g,0,0,h)
return new P.cC(i,j,c,f,d,g,this.r)},
eg:function(a,b){return this.cL(a,null,null,null,null,null,null,b,null,null)},
gcJ:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f8(P.fc(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdY:function(){return this.c!=null},
ge0:function(){return this.f!=null},
gdZ:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
z=J.I(b)
if(!!z.$isdl){y=this.a
x=b.gbO()
if(y==null?x==null:y===x)if(this.c!=null===b.gdY()){y=this.b
x=b.gem()
if(y==null?x==null:y===x){y=this.gcv(this)
x=z.gcv(b)
if(y==null?x==null:y===x){y=this.gbH(this)
x=z.gbH(b)
if(y==null?x==null:y===x)if(this.e===z.gec(b)){y=this.f
x=y==null
if(!x===b.ge0()){if(x)y=""
if(y===z.gcI(b)){z=this.r
y=z==null
if(!y===b.gdZ()){if(y)z=""
z=z===b.gdX()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.j(0))
this.z=z}return z},
$isdl:1,
q:{
cD:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fF().b
if(typeof b!=="string")H.q(H.a4(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.aC(c,"c2",0))
y=c.ghL().ck(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cv(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lM:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lX(a,b,d)
else{if(d===b)P.bT(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lY(a,z,e-1):""
x=P.lR(a,e,f,!1)
if(typeof f!=="number")return f.w()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lU(P.ch(C.b.u(a,w,g),new P.lN(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lS(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.J()
t=h<i?P.dt(a,h+1,i,null):null
return new P.cC(j,y,x,v,u,t,i<c?P.lQ(a,i+1,c):null)},
fA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bT:function(a,b,c){throw H.a(P.Y(c,a,b))},
lU:function(a,b){if(a!=null&&a===P.fA(b))return
return a},
lR:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.K()
z=c-1
if(C.b.X(a,z)!==93)P.bT(a,b,"Missing end `]` to match `[` in host")
P.fb(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fb(a,b,c)
return"["+a+"]"}return P.m_(a,b,c)},
m_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fH(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ar("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ar("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bT(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ar("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fB(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lX:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fD(C.b.F(a,b)))P.bT(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bT(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.lO(y?a.toLowerCase():a)},
lO:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lY:function(a,b,c){return P.bU(a,b,c,C.R)},
lS:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bU(a,b,c,C.y):C.t.jg(d,new P.lT(),P.i).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lZ(w,e,f)},
lZ:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.m0(a,!z||c)
return P.m1(a)},
dt:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c1("Both query and queryParameters specified"))
return P.bU(a,b,c,C.n)}if(d==null)return
y=new P.ar("")
z.a=""
d.L(0,new P.lV(new P.lW(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lQ:function(a,b,c){return P.bU(a,b,c,C.n)},
fH:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cJ(y)
v=H.cJ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aJ(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cv(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
fB:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.h_(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.cc(y,0,null)},
bU:function(a,b,c,d){var z=P.fG(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.u(a,b,c):z},
fG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.J()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fH(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bT(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fB(v)}}if(w==null)w=new P.ar("")
w.a+=C.b.u(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.J()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fE:function(a){if(C.b.a5(a,"."))return!0
return C.b.e1(a,"/.")!==-1},
m1:function(a){var z,y,x,w,v,u,t
if(!P.fE(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
m0:function(a,b){var z,y,x,w,v,u
if(!P.fE(a))return!b?P.fC(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.l(z,0,P.fC(z[0]))}return C.a.E(z,"/")},
fC:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fD(J.he(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lP:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c1("Invalid URL encoding"))}}return z},
du:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dD(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.a5(y.u(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.c1("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c1("Truncated URI"))
C.a.h(u,P.lP(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.kd(!1).ck(u)},
fD:function(a){var z=a|32
return 97<=z&&z<=122}}},
lN:{"^":"n:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.w()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lT:{"^":"n:30;",
$1:function(a){return P.cD(C.T,a,C.k,!1)}},
lW:{"^":"n:19;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cD(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cD(C.p,b,C.k,!0))}}},
lV:{"^":"n:36;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bB(H.h3(b,"$isk")),y=this.a;z.G();)y.$2(a,H.K(z.gP(z)))}},
k1:{"^":"b;a,b,c",
gel:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.e2(y,"?",z)
w=y.length
if(x>=0){v=P.bU(y,x+1,w,C.n)
w=x}else v=null
z=new P.kH(this,"data",null,null,null,P.bU(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.i2(0,a,s,y)
else{r=P.fG(a,s,y,C.n,!0)
if(r!=null)a=C.b.aW(a,s,y,r)}return new P.k1(a,z,c)}}},
ml:{"^":"n:38;",
$1:function(a){return new Uint8Array(96)}},
mk:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hj(z,0,96,b)
return z}},
mm:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mn:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lp:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdY:function(){return this.c>0},
ge_:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.w()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
ge0:function(){var z=this.f
if(typeof z!=="number")return z.J()
return z<this.r},
gdZ:function(){return this.r<this.a.length},
gdd:function(){return this.b===4&&C.b.a5(this.a,"http")},
gde:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbO:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdd()){this.x="http"
z="http"}else if(this.gde()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gem:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcv:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbH:function(a){var z
if(this.ge_()){z=this.d
if(typeof z!=="number")return z.w()
return P.ch(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdd())return 80
if(this.gde())return 443
return 0},
gec:function(a){return C.b.u(this.a,this.e,this.f)},
gcI:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.J()
return z<y?C.b.u(this.a,z+1,y):""},
gdX:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gcJ:function(){var z=this.f
if(typeof z!=="number")return z.J()
if(z>=this.r)return C.U
z=P.i
return new P.f8(P.fc(this.gcI(this),C.k),[z,z])},
cL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbO()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.ge_()?this.gbH(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dt(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cC(i,j,c,f,d,g,b)},
eg:function(a,b){return this.cL(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdl)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdl:1},
kH:{"^":"cC;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cV:function(a,b){var z=document.createElement("canvas")
return z},
hO:function(a){H.f(a,"$isac")
return"wheel"},
i_:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isef")
try{J.hl(z,a)}catch(x){H.ax(x)}return z},
cA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fn:function(a,b,c,d){var z,y
z=W.cA(W.cA(W.cA(W.cA(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fO:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.j)return a
return z.du(a,b)},
a7:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nn:{"^":"u;0m:length=","%":"AccessibleNodeList"},
no:{"^":"a7;0a0:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
np:{"^":"a7;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cR:{"^":"u;",$iscR:1,"%":";Blob"},
nv:{"^":"a7;0a0:type}","%":"HTMLButtonElement"},
cU:{"^":"a7;",
bN:function(a,b,c){if(c!=null)return a.getContext(b,P.mA(c,null))
return a.getContext(b)},
ep:function(a,b){return this.bN(a,b,null)},
$iscU:1,
"%":"HTMLCanvasElement"},
dY:{"^":"u;",$isdY:1,"%":"CanvasRenderingContext2D"},
nx:{"^":"L;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nz:{"^":"hF;0m:length=","%":"CSSPerspective"},
b8:{"^":"u;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nA:{"^":"kG;0m:length=",
eq:function(a,b){var z=a.getPropertyValue(this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$e2()
y=z[b]
if(typeof y==="string")return y
y=this.h0(a,b)
z[b]=y
return y},
h0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hJ()+b
if(z in a)return z
return b},
gce:function(a){return a.bottom},
gam:function(a){return a.height},
gaS:function(a){return a.left},
gba:function(a){return a.right},
gbe:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hE:{"^":"b;",
gaS:function(a){return this.eq(a,"left")}},
e3:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hF:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nB:{"^":"e3;0m:length=","%":"CSSTransformValue"},
nC:{"^":"e3;0m:length=","%":"CSSUnparsedValue"},
nD:{"^":"u;0m:length=","%":"DataTransferItemList"},
nE:{"^":"u;",
j:function(a){return String(a)},
"%":"DOMException"},
nF:{"^":"kJ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.w(c,"$isa8",[P.Z],"$asa8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a8,P.Z]]},
$asx:function(){return[[P.a8,P.Z]]},
$isk:1,
$ask:function(){return[[P.a8,P.Z]]},
$isc:1,
$asc:function(){return[[P.a8,P.Z]]},
$asC:function(){return[[P.a8,P.Z]]},
"%":"ClientRectList|DOMRectList"},
hK:{"^":"u;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gam(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bZ(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=J.b3(b)
return a.left===z.gaS(b)&&a.top===z.gbe(b)&&this.gaq(a)===z.gaq(b)&&this.gam(a)===z.gam(b)},
gT:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gce:function(a){return a.bottom},
gam:function(a){return a.height},
gaS:function(a){return a.left},
gba:function(a){return a.right},
gbe:function(a){return a.top},
gaq:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.Z]},
"%":";DOMRectReadOnly"},
nG:{"^":"kL;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nH:{"^":"u;0m:length=","%":"DOMTokenList"},
kF:{"^":"cs;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa2")},
l:function(a,b,c){var z
H.E(b)
H.f(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.cN(this)
return new J.aE(z,z.length,0,[H.y(z,0)])},
ay:function(a,b,c,d){throw H.a(P.cd(null))},
$asx:function(){return[W.a2]},
$ask:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
a2:{"^":"L;",
gcj:function(a){return new W.kF(a,a.children)},
gdw:function(a){return P.j0(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Z)},
j:function(a){return a.localName},
$isa2:1,
"%":";Element"},
nI:{"^":"a7;0a0:type}","%":"HTMLEmbedElement"},
ab:{"^":"u;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ac:{"^":"u;",
dr:["ev",function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(c!=null)this.eO(a,b,c,!1)}],
eO:function(a,b,c,d){return a.addEventListener(b,H.bx(H.h(c,{func:1,args:[W.ab]}),1),!1)},
$isac:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;ft|fu|fw|fx"},
b0:{"^":"cR;",$isb0:1,"%":"File"},
eb:{"^":"kQ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isb0")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b0]},
$asx:function(){return[W.b0]},
$isk:1,
$ask:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$iseb:1,
$asC:function(){return[W.b0]},
"%":"FileList"},
nJ:{"^":"ac;0m:length=","%":"FileWriter"},
nK:{"^":"a7;0m:length=","%":"HTMLFormElement"},
bb:{"^":"u;",$isbb:1,"%":"Gamepad"},
nL:{"^":"u;0m:length=","%":"History"},
nM:{"^":"l2;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"u;0dz:data=",$isc4:1,"%":"ImageData"},
ee:{"^":"a7;",$isee:1,"%":"HTMLImageElement"},
ef:{"^":"a7;0a0:type}",$isef:1,"%":"HTMLInputElement"},
bG:{"^":"di;",$isbG:1,"%":"KeyboardEvent"},
nR:{"^":"a7;0a0:type}","%":"HTMLLinkElement"},
nS:{"^":"u;",
j:function(a){return String(a)},
"%":"Location"},
nT:{"^":"u;0m:length=","%":"MediaList"},
nU:{"^":"ac;",
dr:function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.ev(a,b,c,!1)},
"%":"MessagePort"},
nV:{"^":"l9;",
i:function(a,b){return P.aZ(a.get(H.K(b)))},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.L(a,new W.iC(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iC:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nW:{"^":"la;",
i:function(a,b){return P.aZ(a.get(H.K(b)))},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.L(a,new W.iD(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iD:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"u;",$isbe:1,"%":"MimeType"},
nX:{"^":"lc;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"MimeTypeArray"},
az:{"^":"di;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kE:{"^":"cs;a",
l:function(a,b,c){var z,y
H.E(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.ec(z,z.length,-1,[H.b4(C.W,z,"C",0)])},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$ask:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"ac;",
ip:function(a,b){var z,y
try{z=a.parentNode
J.hf(z,b,a)}catch(y){H.ax(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.ew(a):z},
fH:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iH:{"^":"le;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
o4:{"^":"a7;0a0:type}","%":"HTMLOListElement"},
o5:{"^":"a7;0a0:type}","%":"HTMLObjectElement"},
bf:{"^":"u;0m:length=",$isbf:1,"%":"Plugin"},
o8:{"^":"li;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"PluginArray"},
oa:{"^":"u;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
ob:{"^":"lo;",
i:function(a,b){return P.aZ(a.get(H.K(b)))},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.L(a,new W.ja(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
ja:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
od:{"^":"a7;0a0:type}","%":"HTMLScriptElement"},
of:{"^":"a7;0m:length=","%":"HTMLSelectElement"},
bh:{"^":"ac;",$isbh:1,"%":"SourceBuffer"},
og:{"^":"fu;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"SourceBufferList"},
oh:{"^":"a7;0a0:type}","%":"HTMLSourceElement"},
bi:{"^":"u;",$isbi:1,"%":"SpeechGrammar"},
oi:{"^":"lr;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"SpeechGrammarList"},
bj:{"^":"u;0m:length=",$isbj:1,"%":"SpeechRecognitionResult"},
ok:{"^":"lu;",
i:function(a,b){return a.getItem(H.K(b))},
l:function(a,b,c){a.setItem(b,H.K(c))},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.e([],[P.i])
this.L(a,new W.ju(z))
return z},
gm:function(a){return a.length},
$asam:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
ju:{"^":"n:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
on:{"^":"a7;0a0:type}","%":"HTMLStyleElement"},
bk:{"^":"u;",$isbk:1,"%":"CSSStyleSheet|StyleSheet"},
de:{"^":"a7;",$isde:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bl:{"^":"ac;",$isbl:1,"%":"TextTrack"},
bm:{"^":"ac;",$isbm:1,"%":"TextTrackCue|VTTCue"},
oq:{"^":"lB;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asx:function(){return[W.bm]},
$isk:1,
$ask:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asC:function(){return[W.bm]},
"%":"TextTrackCueList"},
or:{"^":"fx;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbl")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"TextTrackList"},
os:{"^":"u;0m:length=","%":"TimeRanges"},
bo:{"^":"u;",$isbo:1,"%":"Touch"},
bp:{"^":"di;",$isbp:1,"%":"TouchEvent"},
ot:{"^":"lH;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbo")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asx:function(){return[W.bo]},
$isk:1,
$ask:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asC:function(){return[W.bo]},
"%":"TouchList"},
ou:{"^":"u;0m:length=","%":"TrackDefaultList"},
di:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ow:{"^":"u;",
j:function(a){return String(a)},
"%":"URL"},
ox:{"^":"ac;0m:length=","%":"VideoTrackList"},
bR:{"^":"az;",
ghH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbR:1,
"%":"WheelEvent"},
kx:{"^":"ac;",
fJ:function(a,b){return a.requestAnimationFrame(H.bx(H.h(b,{func:1,ret:-1,args:[P.Z]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oC:{"^":"m8;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isb8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"CSSRuleList"},
oD:{"^":"hK;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bZ(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=J.b3(b)
return a.left===z.gaS(b)&&a.top===z.gbe(b)&&a.width===z.gaq(b)&&a.height===z.gam(b)},
gT:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gaq:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oF:{"^":"ma;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"GamepadList"},
oG:{"^":"mc;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oH:{"^":"me;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"SpeechRecognitionResultList"},
oI:{"^":"mg;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asx:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"StyleSheetList"},
kM:{"^":"dd;a,b,c,$ti",
hZ:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
oE:{"^":"kM;a,b,c,$ti"},
kN:{"^":"eF;a,b,c,d,e,$ti",
h4:function(){var z=this.d
if(z!=null&&this.a<=0)J.hg(this.b,this.c,z,!1)},
q:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fO(new W.kO(c),W.ab)
z=new W.kN(0,a,b,z,!1,[e])
z.h4()
return z}}},
kO:{"^":"n:8;a",
$1:function(a){return this.a.$1(H.f(a,"$isab"))}},
C:{"^":"b;$ti",
ga_:function(a){return new W.ec(a,this.gm(a),-1,[H.b4(this,a,"C",0)])},
ay:function(a,b,c,d){H.A(d,H.b4(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ec:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dL(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kG:{"^":"u+hE;"},
kI:{"^":"u+x;"},
kJ:{"^":"kI+C;"},
kK:{"^":"u+x;"},
kL:{"^":"kK+C;"},
kP:{"^":"u+x;"},
kQ:{"^":"kP+C;"},
l1:{"^":"u+x;"},
l2:{"^":"l1+C;"},
l9:{"^":"u+am;"},
la:{"^":"u+am;"},
lb:{"^":"u+x;"},
lc:{"^":"lb+C;"},
ld:{"^":"u+x;"},
le:{"^":"ld+C;"},
lh:{"^":"u+x;"},
li:{"^":"lh+C;"},
lo:{"^":"u+am;"},
ft:{"^":"ac+x;"},
fu:{"^":"ft+C;"},
lq:{"^":"u+x;"},
lr:{"^":"lq+C;"},
lu:{"^":"u+am;"},
lA:{"^":"u+x;"},
lB:{"^":"lA+C;"},
fw:{"^":"ac+x;"},
fx:{"^":"fw+C;"},
lG:{"^":"u+x;"},
lH:{"^":"lG+C;"},
m7:{"^":"u+x;"},
m8:{"^":"m7+C;"},
m9:{"^":"u+x;"},
ma:{"^":"m9+C;"},
mb:{"^":"u+x;"},
mc:{"^":"mb+C;"},
md:{"^":"u+x;"},
me:{"^":"md+C;"},
mf:{"^":"u+x;"},
mg:{"^":"mf+C;"}}],["","",,P,{"^":"",
mD:function(a){var z,y
z=J.I(a)
if(!!z.$isc4){y=z.gdz(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
mC:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
aZ:function(a){var z,y,x,w,v
if(a==null)return
z=P.en(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.K(y[w])
z.l(0,v,a[v])}return z},
mA:function(a,b){var z={}
a.L(0,new P.mB(z))
return z},
e9:function(){var z=$.e8
if(z==null){z=J.cO(window.navigator.userAgent,"Opera",0)
$.e8=z}return z},
hJ:function(){var z,y
z=$.e5
if(z!=null)return z
y=$.e6
if(y==null){y=J.cO(window.navigator.userAgent,"Firefox",0)
$.e6=y}if(y)z="-moz-"
else{y=$.e7
if(y==null){y=!P.e9()&&J.cO(window.navigator.userAgent,"Trident/",0)
$.e7=y}if(y)z="-ms-"
else z=P.e9()?"-o-":"-webkit-"}$.e5=z
return z},
lx:{"^":"b;",
dV:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cP:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isah)return new Date(a.a)
if(!!y.$isj3)throw H.a(P.cd("structured clone of RegExp"))
if(!!y.$isb0)return a
if(!!y.$iscR)return a
if(!!y.$iseb)return a
if(!!y.$isc4)return a
if(!!y.$ises||!!y.$isd9)return a
if(!!y.$isJ){x=this.dV(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.L(a,new P.lz(z,this))
return z.a}if(!!y.$isc){x=this.dV(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hE(a,x)}throw H.a(P.cd("structured clone of other type"))},
hE:function(a,b){var z,y,x,w
z=J.av(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.cP(z.i(a,w)))
return x}},
lz:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cP(b)}},
fz:{"^":"b;dz:a>,b,c",$isc4:1},
mB:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
ly:{"^":"lx;a,b"},
hU:{"^":"cs;a,b",
gbm:function(){var z,y,x
z=this.b
y=H.aC(z,"x",0)
x=W.a2
return new H.ir(new H.kv(z,H.h(new P.hV(),{func:1,ret:P.ak,args:[y]}),[y]),H.h(new P.hW(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.E(b)
H.f(c,"$isa2")
z=this.gbm()
J.hk(z.b.$1(J.cP(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbm().a)},
i:function(a,b){var z=this.gbm()
return z.b.$1(J.cP(z.a,b))},
ga_:function(a){var z=P.ik(this.gbm(),!1,W.a2)
return new J.aE(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a2]},
$ask:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
hV:{"^":"n:45;",
$1:function(a){return!!J.I(H.f(a,"$isL")).$isa2}},
hW:{"^":"n:47;",
$1:function(a){return H.j(H.f(a,"$isL"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lj:{"^":"b;$ti",
gba:function(a){var z=this.a
if(typeof z!=="number")return z.w()
return H.A(z+this.c,H.y(this,0))},
gce:function(a){var z=this.b
if(typeof z!=="number")return z.w()
return H.A(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bZ(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gaS(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbe(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.w()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gba(b)){if(typeof x!=="number")return x.w()
z=H.A(x+this.d,w)===y.gce(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.c0(z)
x=this.b
w=J.c0(x)
if(typeof z!=="number")return z.w()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.w()
v=H.A(x+this.d,v)
return P.l3(P.cB(P.cB(P.cB(P.cB(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"lj;aS:a>,be:b>,aq:c>,am:d>,$ti",q:{
j0:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.J()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.J()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bH:{"^":"u;",$isbH:1,"%":"SVGLength"},nQ:{"^":"l5;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbH")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bH]},
$isk:1,
$ask:function(){return[P.bH]},
$isc:1,
$asc:function(){return[P.bH]},
$asC:function(){return[P.bH]},
"%":"SVGLengthList"},bK:{"^":"u;",$isbK:1,"%":"SVGNumber"},o3:{"^":"lg;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bK]},
$isk:1,
$ask:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asC:function(){return[P.bK]},
"%":"SVGNumberList"},o9:{"^":"u;0m:length=","%":"SVGPointList"},oe:{"^":"eH;0a0:type}","%":"SVGScriptElement"},ol:{"^":"lw;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oo:{"^":"eH;0a0:type}","%":"SVGStyleElement"},eH:{"^":"a2;",
gcj:function(a){return new P.hU(a,new W.kE(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bN:{"^":"u;",$isbN:1,"%":"SVGTransform"},ov:{"^":"lJ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbN")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bN]},
$isk:1,
$ask:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asC:function(){return[P.bN]},
"%":"SVGTransformList"},l4:{"^":"u+x;"},l5:{"^":"l4+C;"},lf:{"^":"u+x;"},lg:{"^":"lf+C;"},lv:{"^":"u+x;"},lw:{"^":"lv+C;"},lI:{"^":"u+x;"},lJ:{"^":"lI+C;"}}],["","",,P,{"^":"",S:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjN:1}}],["","",,P,{"^":"",nq:{"^":"u;0m:length=","%":"AudioBuffer"},dQ:{"^":"ac;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nr:{"^":"kD;",
i:function(a,b){return P.aZ(a.get(H.K(b)))},
L:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aZ(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.L(a,new P.ho(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},ho:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hp:{"^":"dQ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ns:{"^":"ac;0m:length=","%":"AudioTrackList"},hs:{"^":"ac;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nt:{"^":"dQ;0a0:type}","%":"BiquadFilterNode"},o6:{"^":"hs;0m:length=","%":"OfflineAudioContext"},o7:{"^":"hp;0a0:type}","%":"Oscillator|OscillatorNode"},kD:{"^":"u+am;"}}],["","",,P,{"^":"",dc:{"^":"u;",
ix:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mC(g))
return}if(!!z.$isee)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c1("Incorrect number or type of arguments"))},
iw:function(a,b,c,d,e,f,g){return this.ix(a,b,c,d,e,f,g,null,null,null)},
$isdc:1,
"%":"WebGLRenderingContext"},jW:{"^":"u;",$isjW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oj:{"^":"lt;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return P.aZ(a.item(b))},
l:function(a,b,c){H.E(b)
H.f(c,"$isJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asx:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asC:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},ls:{"^":"u+x;"},lt:{"^":"ls+C;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bQ:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cU:function(a,b,c){var z=H.aC(this,"aN",0)
H.h(b,{func:1,ret:P.ak,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bi:function(a,b){return this.cU(a,null,b)},
fv:function(a){var z
H.w(a,"$isk",[H.aC(this,"aN",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eF:function(a,b){var z
H.w(b,"$isk",[H.aC(this,"aN",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.aE(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"aN",0)
H.A(b,z)
z=[z]
if(this.fv(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eF(x,H.e([b],z))}},
$isk:1,
q:{
cW:function(a){var z=new O.aN([a])
z.bQ(a)
return z}}},d6:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
eG:function(a){var z=this.b
if(!(z==null))z.C(a)},
aB:function(){return this.eG(null)},
gY:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c9()},
ee:function(a){var z=this.a
if(a==null)C.a.h(z,V.c9())
else C.a.h(z,a)
this.aB()},
cH:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cQ:{"^":"b;"},b_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa3:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gA()
y.toString
x=H.h(this.geb(),{func:1,ret:-1,args:[D.v]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gA()
y.toString
x=H.h(this.geb(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.eC])
w.b=!0
this.ag(w)}},
sb6:function(a){var z,y,x,w
if(!J.F(this.r,a)){z=this.r
if(z!=null){y=z.gA()
y.toString
x=H.h(this.gea(),{func:1,ret:-1,args:[D.v]})
C.a.H(y.a,x)}if(a!=null){y=a.gA()
y.toString
x=H.h(this.gea(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.ai])
w.b=!0
this.ag(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aY(0,b,this):null
if(!J.F(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.ay])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,b)},
aV:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gY(z))
else C.a.h(z.a,y.k(0,z.gY(z)))
z.aB()
a.ef(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.io(a,this)
for(z=this.y.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aV(a)
a.ed()
a.dx.cH()},
gA:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.C(a)},
U:function(){return this.ag(null)},
i7:[function(a){H.f(a,"$isv")
this.e=null
this.ag(a)},function(){return this.i7(null)},"jm","$1","$0","geb",0,2,1],
i6:[function(a){this.ag(H.f(a,"$isv"))},function(){return this.i6(null)},"jl","$1","$0","gea",0,2,1],
i4:[function(a){this.ag(H.f(a,"$isv"))},function(){return this.i4(null)},"jj","$1","$0","ge9",0,2,1],
ji:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.b_],"$ask")
for(z=b.length,y=this.ge9(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b9()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.U()},"$2","gi3",8,0,9],
jk:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.b_],"$ask")
for(z=b.length,y=this.ge9(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b9()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.H(t.a,y)}}this.U()},"$2","gi5",8,0,9],
$isaP:1},j5:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eB:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ah(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d6()
y=[V.ay]
z.a=H.e([],y)
x=z.gA()
x.toString
w={func:1,ret:-1,args:[D.v]}
v=H.h(new E.j7(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d6()
z.a=H.e([],y)
v=z.gA()
v.toString
x=H.h(new E.j8(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d6()
z.a=H.e([],y)
y=z.gA()
y.toString
w=H.h(new E.j9(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.df])
this.dy=z
C.a.h(z,null)
this.fr=new H.b1(0,0,[P.i,A.eB])},
gii:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gY(z)
y=this.db
y=z.k(0,y.gY(y))
this.z=y
z=y}return z},
ef:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
ed:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
j6:function(a,b){var z=new E.j5(a,b)
z.eB(a,b)
return z}}},j7:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.z=null
z.ch=null}},j8:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j9:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gA:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
eI:[function(a){var z
H.f(a,"$isv")
z=this.x
if(!(z==null))z.C(a)
this.ir()},function(){return this.eI(null)},"eH","$1","$0","gcZ",0,2,1],
ghS:function(){var z,y,x
z=Date.now()
y=C.d.Z(P.ea(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ah(z,!1)
return x/y},
di:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.e.cu(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cu(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eM(C.q,this.giq())},
ir:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jH(this),{func:1,ret:-1,args:[P.Z]})
C.B.eZ(z)
C.B.fJ(z,W.fO(y,P.Z))}},"$0","giq",0,0,3],
im:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.di()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ah(w,!1)
x.y=P.ea(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aB()
w=x.db
C.a.sm(w.a,0)
w.aB()
w=x.dx
C.a.sm(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aV(this.e)}}catch(v){z=H.ax(v)
y=H.bz(v)
P.dI("Error: "+H.l(z))
P.dI("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jG:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscU)return E.eL(a,!0,!0,!0,!1)
y=W.cV(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcj(a).h(0,y)
w=E.eL(y,!0,!0,!0,!1)
w.a=a
return w},
eL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jF()
y=P.ie(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bN(a,"webgl",y)
x=H.f(x==null?C.l.bN(a,"experimental-webgl",y):x,"$isdc")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j6(x,a)
w=new T.jA(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k8(a)
v=new X.i7()
v.c=new X.aI(!1,!1,!1)
v.d=P.ii(null,null,null,P.m)
w.b=v
v=new X.iE(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.im(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jK(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eF,P.b]])
w.z=v
u=document
t=W.az
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.h(w.gfh(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.h(w.gfk(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.h(w.gfe(),q),!1,r))
v=w.z
p=W.bG
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.h(w.gfm(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.h(w.gfl(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.h(w.gfp(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.h(w.gfs(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.h(w.gfq(),s),!1,t))
p=w.z
o=W.bR;(p&&C.a).h(p,W.a1(a,H.K(W.hO(a)),H.h(w.gft(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.h(w.gfi(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.h(w.gfj(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.h(w.gfu(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.h(w.gfD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.h(w.gfB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.h(w.gfC(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ah(Date.now(),!1)
z.ch=0
z.di()
return z}}},jH:{"^":"n:31;a",
$1:function(a){var z
H.h5(a)
z=this.a
if(z.z){z.z=!1
z.im()}}}}],["","",,Z,{"^":"",fi:{"^":"b;a,b",q:{
dp:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bu(c)),35044)
a.bindBuffer(b,null)
return new Z.fi(b,z)}}},dU:{"^":"cQ;a,b,c,d,e",
cc:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ax(y)
x=P.r('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ku:{"^":"b;a",$isnu:1},dV:{"^":"b;a,0b,c,d",
aR:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cc:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cc(a)},
iC:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aV:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isop:1},cp:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},br:{"^":"b;a",
gcV:function(a){var z,y
z=this.a
y=(z&$.$get$aV().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=2
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=3
if((z&$.$get$bQ().a)!==0)y+=4
if((z&$.$get$bs().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
hx:function(a){var z,y,x
z=$.$get$aV()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fh()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aV().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aX().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bQ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
q:{
au:function(a){return new Z.br(a)}}}}],["","",,D,{"^":"",dZ:{"^":"b;"},b9:{"^":"b;0a,0b,0c",
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.hS(z))
return x!==0},
hJ:function(){return this.C(null)},
is:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.C(y)}}},
ao:function(a){return this.is(a,!0,!1)},
q:{
P:function(){var z=new D.b9()
z.a=H.e([],[{func:1,ret:-1,args:[D.v]}])
z.c=0
return z}}},hS:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"b;a,0b"},cq:{"^":"v;c,d,a,0b,$ti"},cr:{"^":"v;c,d,a,0b,$ti"},Q:{"^":"v;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dW:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
q:{"^":"nw<"}},ek:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ek))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},el:{"^":"v;c,a,0b"},i7:{"^":"b;0a,0b,0c,0d",
ie:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.C(y)},
i9:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.C(y)}},ep:{"^":"cu;x,y,c,d,e,a,0b"},im:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ah(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.w(0,new V.R(x*w,v*u))
u=this.a.gaK()
s=new X.bI(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cG:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.at(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.bM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.at(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.at(a,b))
return!0},
ig:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.d7(new V.X(v*u,t*s),y,x,new P.ah(w,!1),this)
w.b=!0
z.C(w)
return!0},
fo:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ah(Date.now(),!1)
y=this.f
x=new X.ep(c,a,this.a.gaK(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.R(0,0)}},aI:{"^":"b;a,b,c",
t:function(a,b){var z,y
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
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bI:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bW:function(a,b,c){var z,y,x
z=new P.ah(Date.now(),!1)
y=this.a.gaK()
x=new X.bI(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cG:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bW(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.bM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bW(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bW(a,b,!1))
return!0},
ih:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.d7(new V.X(w*v,u*t),y,b,new P.ah(x,!1),this)
x.b=!0
z.C(x)
return!0},
gdA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
gbL:function(){var z=this.c
if(z==null){z=D.P()
this.c=z}return z},
ge8:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z}},d7:{"^":"cu;x,c,d,e,a,0b"},cu:{"^":"v;"},eQ:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},jK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.ah(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaK()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ic:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.C(this.at(a,!0))
return!0},
ia:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.C(this.at(a,!0))
return!0},
ib:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.C(this.at(a,!1))
return!0}},k8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaK:function(){var z=this.a
return V.eA(0,0,(z&&C.l).gdw(z).c,C.l.gdw(z).d)},
d8:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ek(z,new X.aI(y,a.altKey,a.shiftKey))},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
c8:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.R(y-w,x-v)},
b0:function(a){return new V.X(a.movementX,a.movementY)},
c3:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.e.aa(u.pageX)
C.e.aa(u.pageY)
s=z.left
C.e.aa(u.pageX)
C.a.h(y,new V.R(t-s,C.e.aa(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dW(z,new X.aI(y,a.altKey,a.shiftKey))},
bY:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.K()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iV:[function(a){this.f=!0},"$1","gfk",4,0,8],
iP:[function(a){this.f=!1},"$1","gfe",4,0,8],
iS:[function(a){H.f(a,"$isaz")
if(this.f&&this.bY(a))a.preventDefault()},"$1","gfh",4,0,4],
iX:[function(a){var z
H.f(a,"$isbG")
if(!this.f)return
z=this.d8(a)
if(this.b.ie(z))a.preventDefault()},"$1","gfm",4,0,20],
iW:[function(a){var z
H.f(a,"$isbG")
if(!this.f)return
z=this.d8(a)
if(this.b.i9(z))a.preventDefault()},"$1","gfl",4,0,20],
iZ:[function(a){var z,y,x,w
H.f(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.aI(a)
if(this.x){y=this.ar(a)
x=this.b0(a)
if(this.d.cG(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cG(y,w))a.preventDefault()},"$1","gfp",4,0,4],
j0:[function(a){var z,y,x
H.f(a,"$isaz")
this.aI(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfs",4,0,4],
iU:[function(a){var z,y,x
H.f(a,"$isaz")
if(!this.bY(a)){this.aI(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b8(z,x))a.preventDefault()}},"$1","gfj",4,0,4],
j_:[function(a){var z,y,x
H.f(a,"$isaz")
this.aI(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfq",4,0,4],
iT:[function(a){var z,y,x
H.f(a,"$isaz")
if(!this.bY(a)){this.aI(a)
z=this.ar(a)
if(this.x){y=this.b0(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b7(z,x))a.preventDefault()}},"$1","gfi",4,0,4],
j1:[function(a){var z,y
H.f(a,"$isbR")
this.aI(a)
z=new V.X((a&&C.A).ghG(a),C.A.ghH(a)).p(0,180)
if(this.x){if(this.d.ig(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.ih(z,y))a.preventDefault()},"$1","gft",4,0,35],
j2:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fo(w,v,x)}},"$1","gfu",4,0,8],
j8:[function(a){var z
H.f(a,"$isbp")
this.a.focus()
this.f=!0
this.c8(a)
z=this.c3(a)
if(this.e.ic(z))a.preventDefault()},"$1","gfD",4,0,13],
j6:[function(a){var z
H.f(a,"$isbp")
this.c8(a)
z=this.c3(a)
if(this.e.ia(z))a.preventDefault()},"$1","gfB",4,0,13],
j7:[function(a){var z
H.f(a,"$isbp")
this.c8(a)
z=this.c3(a)
if(this.e.ib(z))a.preventDefault()},"$1","gfC",4,0,13]}}],["","",,D,{"^":"",cm:{"^":"b;0a,0b,0c,0d",
gA:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z},
aC:[function(a){var z
H.f(a,"$isv")
z=this.d
if(!(z==null))z.C(a)},function(){return this.aC(null)},"iE","$1","$0","geJ",0,2,1],
$isa3:1,
$isaP:1},a3:{"^":"b;",$isaP:1},i8:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gA:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.C(a)},
fn:[function(a){var z
H.f(a,"$isv")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.fn(null)},"iY","$1","$0","gdf",0,2,1],
j3:[function(a){var z,y,x
H.w(a,"$isk",[D.a3],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eV(x))return!1}return!0},"$1","gfw",4,0,37],
iM:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdf(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cm)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfb",8,0,22],
j5:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdf(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cm)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.H(s.a,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfA",8,0,22],
eV:function(a){var z=C.a.b2(this.e,a)
return z},
$ask:function(){return[D.a3]},
$asaN:function(){return[D.a3]}},iN:{"^":"b;",$isa3:1,$isaP:1},jr:{"^":"b;",$isa3:1,$isaP:1},jC:{"^":"b;",$isa3:1,$isaP:1},jD:{"^":"b;",$isa3:1,$isaP:1},jE:{"^":"b;",$isa3:1,$isaP:1}}],["","",,V,{"^":"",
ny:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iB",8,0,34],
nm:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bh(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.e.ek($.p.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.l(z,u,C.b.a9(z[u],x))}return z},
dH:function(a,b){return C.e.iz(Math.pow(b,C.I.cu(Math.log(H.mz(a))/Math.log(b))))},
ag:{"^":"b;a,b,c",
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
return new V.ag(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
aO:{"^":"b;a,b,c,d",
cN:function(a){return H.e([this.a,this.b,this.c,this.d],[P.t])},
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
return new V.aO(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
ct:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$isct")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.e.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.e.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.e.k(t,s)
q=a5.b
p=C.e.k(z,q)
o=a5.e
n=C.e.k(w,o)
m=a5.x
l=C.e.k(t,m)
k=a5.c
z=C.e.k(z,k)
j=a5.f
w=C.e.k(w,j)
i=a5.y
t=C.e.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.e.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.e.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.e.k(d,s)
b=C.e.k(h,q)
a=C.e.k(f,o)
a0=C.e.k(d,m)
h=C.e.k(h,k)
f=C.e.k(f,j)
d=C.e.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.e.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.e.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.ct(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ct))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.by(H.e([this.a,this.d,this.r],z),3,0)
x=V.by(H.e([this.b,this.e,this.x],z),3,0)
w=V.by(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
ay:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
e3:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c9()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isay")
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.z(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
z=b.z
if(!$.p.$2(z,this.z))return!1
z=b.Q
if(!$.p.$2(z,this.Q))return!1
z=b.ch
if(!$.p.$2(z,this.ch))return!1
z=b.cx
if(!$.p.$2(z,this.cx))return!1
z=b.cy
if(!$.p.$2(z,this.cy))return!1
z=b.db
if(!$.p.$2(z,this.db))return!1
z=b.dx
if(!$.p.$2(z,this.dx))return!1
return!0},
j:function(a){return this.M()},
dW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.by(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
D:function(a){return this.dW(a,3,0)},
M:function(){return this.dW("",3,0)},
q:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c9:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
er:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.B(c)))
y=b.av(z)
x=y.p(0,Math.sqrt(y.B(y)))
w=z.av(x)
v=new V.z(a.a,a.b,a.c)
return V.aH(x.a,w.a,z.a,x.O(0).B(v),x.b,w.b,z.b,w.O(0).B(v),x.c,w.c,z.c,z.O(0).B(v),0,0,0,1)}}},
R:{"^":"b;a,b",
w:function(a,b){return new V.R(this.a+b.a,this.b+b.b)},
K:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.R(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.R(0,0)
return new V.R(this.a/b,this.b/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
U:{"^":"b;a,b,c",
w:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.U(0,0,0)
return new V.U(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bL:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bL(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bL))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
ez:{"^":"b;a,b,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ez))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
q:{
eA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ez(a,b,c,d)}}},
X:{"^":"b;a,b",
e5:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){var z,y,x,w
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
return new V.X(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.X(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.X(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
z:{"^":"b;a,b,c",
e5:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.z(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.z(z*y-x*w,x*v-u*y,u*w-z*v)},
w:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.z(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.z(0,0,0)
return new V.z(this.a/b,this.b/b,this.c/b)},
e4:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bO:{"^":"b;a,b,c,d",
e5:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bO(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bO(0,0,0,0)
return new V.bO(this.a/b,this.b/b,this.c/b,this.d/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hz:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.nm(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.C(a)},
scQ:function(a,b){},
scC:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.R(z)}},
scE:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.R(z)}},
sW:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.t])
z.b=!0
this.R(z)}},
scD:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.R(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.t])
z.b=!0
this.R(z)}},
scm:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.t])
z.b=!0
this.R(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
q:{
cX:function(){var z=new U.hz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e0:{"^":"ai;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
aY:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e0))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.D("          ")},
q:{
e1:function(a){var z=new U.e0()
z.a=a
return z}}},ed:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
R:[function(a){var z
H.f(a,"$isv")
z=this.e
if(!(z==null))z.C(a)},function(){return this.R(null)},"ad","$1","$0","gaH",0,2,1],
iL:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gA()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfa",8,0,23],
j4:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gA()
t.toString
H.h(x,w)
C.a.H(t.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfz",8,0,23],
aY:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aE(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aY(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c9():x
z=this.e
if(!(z==null))z.ao(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.ai]},
$asaN:function(){return[U.ai]},
$isai:1},ai:{"^":"dZ;"},k9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.cy
if(z==null){z=D.P()
this.cy=z}return z},
R:[function(a){var z
H.f(a,"$isv")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.R(null)},"ad","$1","$0","gaH",0,2,1],
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdA()
z.toString
y={func:1,ret:-1,args:[D.v]}
x=H.h(this.gbZ(),y)
C.a.h(z.a,x)
x=this.a.c.ge8()
x.toString
z=H.h(this.gc_(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
y=H.h(this.gc0(),y)
C.a.h(z.a,y)
return!0},
f6:[function(a){H.f(a,"$isv")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbZ",4,0,2],
f7:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isv"),"$isbI")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.X(y.a,y.b).k(0,2).p(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.X(x.a,x.b).k(0,2).p(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
this.b.sS(0)
y=y.K(0,a.z)
this.Q=new V.X(y.a,y.b).k(0,2).p(0,z.ga4())}this.ad()},"$1","gc_",4,0,2],
f8:[function(a){var z,y,x
H.f(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sS(y*10*x)
this.ad()}},"$1","gc0",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},ka:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
R:[function(a){var z
H.f(a,"$isv")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.R(null)},"ad","$1","$0","gaH",0,2,1],
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdA()
z.toString
y={func:1,ret:-1,args:[D.v]}
x=H.h(this.gbZ(),y)
C.a.h(z.a,x)
x=this.a.c.ge8()
x.toString
z=H.h(this.gc_(),y)
C.a.h(x.a,z)
z=this.a.c.gbL()
z.toString
x=H.h(this.gc0(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.P()
x.f=z}x=H.h(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.h(this.gf4(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.P()
x.b=z}x=H.h(this.gh3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.h(this.gh2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.P()
x.c=z}y=H.h(this.gh1(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.X(z,y)},
f6:[function(a){a=H.j(H.f(a,"$isv"),"$isbI")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbZ",4,0,2],
f7:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isv"),"$isbI")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aj(new V.X(y.a,y.b).k(0,2).p(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aj(new V.X(x.a,x.b).k(0,2).p(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.aj(new V.X(y.a,y.b).k(0,2).p(0,z.ga4()))}this.ad()},"$1","gc_",4,0,2],
f8:[function(a){var z,y,x
H.f(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sS(-y*10*z)
this.ad()}},"$1","gc0",4,0,2],
iI:[function(a){if(H.j(H.f(a,"$isv"),"$isep").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf3",4,0,2],
iJ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isv"),"$isbI")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aj(new V.X(x.a,x.b).k(0,2).p(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.aj(new V.X(y.a,y.b).k(0,2).p(0,z.ga4()))
this.ad()},"$1","gf4",4,0,2],
jc:[function(a){H.f(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh3",4,0,2],
jb:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isv"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aj(new V.X(y.a,y.b).k(0,2).p(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aj(new V.X(x.a,x.b).k(0,2).p(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.aj(new V.X(y.a,y.b).k(0,2).p(0,z.ga4()))}this.ad()},"$1","gh2",4,0,2],
ja:[function(a){var z,y,x
H.f(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sS(-y*10*z)
this.ad()}},"$1","gh1",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gA:function(){var z=this.r
if(z==null){z=D.P()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.C(a)},
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.P()
z.e=y
z=y}else z=y
y=H.h(this.gf9(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.P()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iK:[function(a){var z,y,x,w
H.f(a,"$isv")
if(!J.F(this.b,this.a.b.c))return
H.j(a,"$isd7")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.t])
z.b=!0
this.R(z)}},"$1","gf9",4,0,2],
aY:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",hQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isv")
z=this.x
if(!(z==null))z.C(a)},function(){return this.aD(null)},"iF","$1","$0","gai",0,2,1],
iQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b_
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gff",8,0,9],
iR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b_
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b9()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.H(s.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfg",8,0,9],
sei:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gA()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.v]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gA()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q("technique",x,this.c,this,[O.df])
z.b=!0
this.aD(z)}},
gA:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ef(this.c)
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
u=C.e.aa(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.e.aa(v.b*w)
s=C.e.aa(v.c*x)
a.c=s
v=C.e.aa(v.d*w)
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
n=V.aH(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.ee(n)
y=$.ew
if(y==null){y=V.er(new V.U(0,0,0),new V.z(0,1,0),new V.z(0,0,-1))
$.ew=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.ee(m)
z=this.c
if(z!=null)z.ap(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aV(a)
this.a.toString
a.cy.cH()
a.db.cH()
this.b.toString
a.ed()},
$isoc:1}}],["","",,A,{"^":"",dP:{"^":"b;a,b,c"},hn:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hK:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hI:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},iv:{"^":"eB;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0ax,0aQ,0bt,0dB,0dC,0bu,0bv,0dD,0dE,0bw,0bx,0dF,0dG,0by,0dH,0dI,0bz,0dJ,0dK,0bA,0bB,0bC,0dL,0dM,0bD,0bE,0dN,0dO,0bF,0dP,0co,0dQ,0cp,0dR,0cq,0dS,0cr,0dT,0cs,0dU,0ct,a,b,0c,0d,0e,0f,0r",
eA:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ar("")
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
a2.h6(z)
a2.hd(z)
a2.h7(z)
a2.hl(z)
a2.hm(z)
a2.hf(z)
a2.hq(z)
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
z=new P.ar("")
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
v.ha(z)
v.h5(z)
v.h8(z)
v.hb(z)
v.hj(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hh(z)
v.hi(z)}v.he(z)
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h9(z)
v.hg(z)
v.hk(z)
v.hn(z)
v.ho(z)
v.hp(z)
v.hc(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.i])
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.d9(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d9(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fS(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.r("Failed to link shader: "+H.l(m)))}this.fX()
this.fZ()
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaR")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaR")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaR")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaR")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdk")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaR")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaR")
this.k3=H.e([],[A.aR])
y=a2.aP
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.i(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaR"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isas")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isat")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isas")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isat")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.aP=H.j(this.r.n(0,"diffuseTxt"),"$isas")
this.aQ=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break
case C.h:this.ax=H.j(this.r.n(0,"diffuseTxt"),"$isat")
this.aQ=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.c){this.bt=H.j(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.dB=H.j(this.r.n(0,"invDiffuseTxt"),"$isas")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.h:this.dC=H.j(this.r.n(0,"invDiffuseTxt"),"$isat")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.c){this.bx=H.j(this.r.n(0,"shininess"),"$isa_")
this.bv=H.j(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.dD=H.j(this.r.n(0,"specularTxt"),"$isas")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break
case C.h:this.dE=H.j(this.r.n(0,"specularTxt"),"$isat")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dF=H.j(this.r.n(0,"bumpTxt"),"$isas")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break
case C.h:this.dG=H.j(this.r.n(0,"bumpTxt"),"$isat")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dH=H.j(this.r.n(0,"envSampler"),"$isat")
this.dI=H.j(this.r.n(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.c){this.bz=H.j(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.dJ=H.j(this.r.n(0,"reflectTxt"),"$isas")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break
case C.h:this.dK=H.j(this.r.n(0,"reflectTxt"),"$isat")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.c){this.bB=H.j(this.r.n(0,"refraction"),"$isa_")
this.bC=H.j(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.f:this.dL=H.j(this.r.n(0,"refractTxt"),"$isas")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break
case C.h:this.dM=H.j(this.r.n(0,"refractTxt"),"$isat")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.c){this.bE=H.j(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.f:this.dN=H.j(this.r.n(0,"alphaTxt"),"$isas")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break
case C.h:this.dO=H.j(this.r.n(0,"alphaTxt"),"$isat")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break}}this.co=H.e([],[A.f2])
this.cp=H.e([],[A.f3])
this.cq=H.e([],[A.f4])
this.cr=H.e([],[A.f5])
this.cs=H.e([],[A.f6])
this.ct=H.e([],[A.f7])
if(a2.k2){y=a2.z
if(y>0){this.dP=H.f(this.r.n(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.co;(x&&C.a).h(x,new A.f2(l,k,j))}}y=a2.Q
if(y>0){this.dQ=H.f(this.r.n(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="pntLights["+l+"].att1"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="pntLights["+l+"].att2"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.cp;(x&&C.a).h(x,new A.f3(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dR=H.f(this.r.n(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="spotLights["+l+"].att0"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="spotLights["+l+"].att1"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="spotLights["+l+"].att2"
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.cq;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dS=H.f(this.r.n(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isas")
x=this.cr;(x&&C.a).h(x,new A.f5(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dT=H.f(this.r.n(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdk")
x=this.r
w="txtPntLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isat")
x=this.cs;(x&&C.a).h(x,new A.f6(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dU=H.f(this.r.n(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.i(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.i(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.i(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.i(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isas")
x=this.ct;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ae:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eu(c)
b.a.uniform1i(b.d,0)}},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
iu:function(a,b){var z,y
z=a.ax
y=new A.iv(b,z)
y.eD(b,z)
y.eA(a,b)
return y}}},iy:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,ax,aQ",
h6:function(a){var z,y,x
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
hd:function(a){var z
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
h7:function(a){var z
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
hl:function(a){var z,y
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
hm:function(a){var z,y
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
hf:function(a){var z
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
hq:function(a){var z
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
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ha:function(a){var z,y
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
h5:function(a){var z,y
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
h8:function(a){var z,y
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
hb:function(a){var z,y
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
hj:function(a){var z,y
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
he:function(a){var z,y
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
hh:function(a){var z,y
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
hi:function(a){var z,y
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
h9:function(a){var z,y
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
hg:function(a){var z,y
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
hk:function(a){var z,y
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
hn:function(a){var z,y,x
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
ho:function(a){var z,y,x
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
hp:function(a){var z,y,x
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
hc:function(a){var z
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
j:function(a){return this.ax}},f2:{"^":"b;a,b,c"},f5:{"^":"b;a,b,c,d,e,f,r,x"},f3:{"^":"b;a,b,c,d,e,f,r"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eB:{"^":"cQ;",
eD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d9:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.r("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fX:function(){var z,y,x,w,v,u
z=H.e([],[A.dP])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dP(y,v.name,u))}this.f=new A.hn(z)},
fZ:function(){var z,y,x,w,v,u
z=H.e([],[A.ad])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hF(v.type,v.size,v.name,u))}this.r=new A.jV(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eW:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.as(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.at(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bo:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hF:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.jQ(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jT(this.a,this.e,c,d)
case 35667:return new A.jR(this.a,this.e,c,d)
case 35668:return new A.jS(this.a,this.e,c,d)
case 35669:return new A.jU(this.a,this.e,c,d)
case 35674:return new A.jX(this.a,this.e,c,d)
case 35675:return new A.dk(this.a,this.e,c,d)
case 35676:return new A.aR(this.a,this.e,c,d)
case 35678:return this.eW(b,c,d)
case 35680:return this.eX(b,c,d)
case 35670:throw H.a(this.bo("BOOL",c))
case 35671:throw H.a(this.bo("BOOL_VEC2",c))
case 35672:throw H.a(this.bo("BOOL_VEC3",c))
case 35673:throw H.a(this.bo("BOOL_VEC4",c))
default:throw H.a(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cl:{"^":"b;a,b",
j:function(a){return this.b}},ad:{"^":"b;"},jV:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.M()},
hR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
M:function(){return this.hR("\n")}},O:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jR:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},jS:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jU:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jP:{"^":"ad;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dj:function(a,b,c,d,e){var z=new A.jP(a,b,c,e)
z.f=d
z.e=P.ij(d,0,!1,P.m)
return z}}},a_:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},jQ:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jT:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jX:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dk:{"^":"ad;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bu(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aR:{"^":"ad;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bu(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},as:{"^":"ad;a,b,c,d",
eu:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},at:{"^":"ad;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dA:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ae,P.t,P.t]})
z=F.cx()
F.bV(z,b,c,d,a,1,0,0,1)
F.bV(z,b,c,d,a,0,1,0,3)
F.bV(z,b,c,d,a,0,0,1,2)
F.bV(z,b,c,d,a,-1,0,0,0)
F.bV(z,b,c,d,a,0,-1,0,0)
F.bV(z,b,c,d,a,0,0,-1,3)
z.af()
return z},
cE:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bV:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ae,P.t,P.t]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.z(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.z(t+h,s+f,r+g)
z.b=q
p=new V.z(t-h,s-f,r-g)
z.c=p
o=new V.z(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cE(y)
k=F.cE(z.b)
j=F.cM(d,e,new F.mh(z,F.cE(z.c),F.cE(z.d),k,l,c),b)
if(j!=null)a.aU(j)},
fV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.t,args:[P.t]})
if(e<3)return
z=F.cx()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ae])
v=z.a
u=new V.z(0,0,y)
u=u.p(0,Math.sqrt(u.B(u)))
C.a.h(w,v.hu(new V.bL(a,-1,-1,-1),new V.aO(1,1,1,1),new V.U(0,0,c),new V.z(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.z(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bq(new V.bL(a,-1,-1,-1),null,new V.aO(n,l,m,1),new V.U(r*p,q*p,c),new V.z(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hs(w)
return z},
fT:function(a,b,c,d,e,f){return F.mF(!0,c,d,new F.mE(a,f),e)},
mF:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.cM(c,e,new F.mH(d),null)
if(z==null)return
z.af()
z.bq()
if(b)z.aU(F.fV(3,!1,1,new F.mI(d),e))
z.aU(F.fV(1,!0,-1,new F.mJ(d),e))
return z},
mY:function(a,b){var z=F.cM(a,b,new F.mZ(),null)
z.d.bJ()
z.af()
z.bq()
return z},
af:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.bq(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.hM(w,new F.dn())
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
w.sal(0,new V.aO(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.saX(new V.R(q,p<0?-p:p))
a.a.h(0,w)
return w},
W:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bp(0,b,d,c)
else{z=F.af(a,b.r.w(0,c.r).k(0,0.5))
y=F.af(a,c.r.w(0,d.r).k(0,0.5))
x=F.af(a,d.r.w(0,b.r).k(0,0.5))
w=e-1
F.W(a,b,z,x,w)
F.W(a,z,c,y,w)
F.W(a,y,x,z,w)
F.W(a,x,y,d,w)}},
h9:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.ng()
y=F.dA(a,null,new F.nh(z),c)
y.bq()
return y},
nj:function(a,b,c,d){return F.fU(c,a,d,b,new F.nk())},
mW:function(a,b,c,d,e,f){return F.fU(d,a,e,b,new F.mX(f,c))},
fU:function(a,b,c,d,e){var z=F.cM(a,b,new F.mG(H.h(e,{func:1,ret:V.U,args:[P.t]}),d,b,c),null)
if(z==null)return
z.af()
z.bq()
return z},
cM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ae,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cx()
y=H.e([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bq(null,null,new V.aO(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cl(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bq(null,null,new V.aO(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cl(d))}}z.d.ht(a+1,b+1,y)
return z},
mh:{"^":"n:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cA(z.b,b).cA(z.d.cA(z.c,b),c)
a.sW(0,new V.U(y.a,y.b,y.c))
a.sbK(y.p(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.sdt(new V.bL(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mE:{"^":"n:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mH:{"^":"n:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sW(0,new V.U(y,u,w))
u=new V.z(y,u,w)
a.sbK(u.p(0,Math.sqrt(u.B(u))))
a.sdt(new V.bL(1-c,2+c,-1,-1))}},
mI:{"^":"n:16;a",
$1:function(a){return this.a.$2(a,1)}},
mJ:{"^":"n:16;a",
$1:function(a){return this.a.$2(1-a,0)}},
mZ:{"^":"n:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.z(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.B(w)))
a.sW(0,new V.U(x.a,x.b,x.c))}},
ng:{"^":"n:25;",
$2:function(a,b){return 0}},
nh:{"^":"n:5;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.z(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.B(x))).k(0,1+z)
a.sW(0,new V.U(z.a,z.b,z.c))}},
nk:{"^":"n:26;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
mX:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mG:{"^":"n:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dK(y.$1(z),x)
x=J.dK(y.$1(z+3.141592653589793/this.c),x).K(0,w)
x=new V.z(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.B(x)))
u=new V.z(1,0,0)
y=v.av(!v.t(0,u)?new V.z(0,0,1):u)
t=y.p(0,Math.sqrt(y.B(y)))
y=t.av(v)
u=y.p(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sW(0,w.w(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aq:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gb4()){C.a.H(this.a.a.d.b,this)
this.a.a.U()}this.c5()
this.c6()
this.fG()},
fU:function(a){this.a=a
C.a.h(a.d.b,this)},
fV:function(a){this.b=a
C.a.h(a.d.c,this)},
fW:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
c6:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
fG:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.z(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e4())return
return v.p(0,Math.sqrt(v.B(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.z(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.B(z)))
z=w.K(0,y)
z=new V.z(z.a,z.b,z.c)
z=v.av(z.p(0,Math.sqrt(z.B(z))))
return z.p(0,Math.sqrt(z.B(z)))},
ci:function(){if(this.d!=null)return!0
var z=this.eQ()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
eP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.z(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e4())return
return v.p(0,Math.sqrt(v.B(v)))},
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
if($.p.$2(n,0)){z=r.K(0,u)
z=new V.z(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.K(0,u).k(0,l).w(0,u).K(0,x)
z=new V.z(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.B(z)))
z=k.av(m)
z=z.p(0,Math.sqrt(z.B(z))).av(k)
m=z.p(0,Math.sqrt(z.B(z)))}return m},
cf:function(){if(this.e!=null)return!0
var z=this.eP()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
aE:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
ghB:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z,y
if(this.gb4())return a+"disposed"
z=a+C.b.a9(J.aa(this.a.e),0)+", "+C.b.a9(J.aa(this.b.e),0)+", "+C.b.a9(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
M:function(){return this.D("")},
q:{
ba:function(a,b,c){var z,y,x
z=new F.aq()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.fU(a)
z.fV(b)
z.fW(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
hT:{"^":"b;"},
jn:{"^":"hT;",
aT:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d3:{"^":"b;0a,0b",
aw:function(){if(!this.gb4()){C.a.H(this.a.a.c.b,this)
this.a.a.U()}this.c5()
this.c6()},
c5:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
c6:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
aE:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){if(this.gb4())return a+"disposed"
return a+C.b.a9(J.aa(this.a.e),0)+", "+C.b.a9(J.aa(this.b.e),0)},
M:function(){return this.D("")}},
i9:{"^":"b;"},
jO:{"^":"i9;",
aT:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
db:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.U()}this.fF()},
fF:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a9(J.aa(z.e),0)},
M:function(){return this.D("")}},
eC:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hD())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.db()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.C(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d3()
s=p.a
if(s==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.r("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.C(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.ba(p,o,l)}z=this.e
if(!(z==null))z.ao(0)},
af:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.af()||!1
if(!this.a.af())y=!1
z=this.e
if(!(z==null))z.ao(0)
return y},
hN:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.aT(0,a,w))return w}return},
hM:function(a,b){return this.hN(a,b,0)},
f0:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ae],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aT(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fI:function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isc",[P.m],"$asc")
H.jq(b,J.mp(),H.y(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.d(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.d(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aE(w,a)
v=x.a
if(v!=null){C.a.H(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aE(w,a)
v=x.b
if(v!=null){C.a.H(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aE(w,a)
v=x.c
if(v!=null){C.a.H(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.C(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aE(w,a)
v=x.a
if(v!=null){C.a.H(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aE(w,a)
v=x.b
if(v!=null){C.a.H(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.C(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.H(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.C(null)}}x=this.a
v=x.c
if(y>=v.length)return H.d(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.q(P.r("May not remove a vertex without first making it empty."))
t.a=null
C.a.ik(v,y)
v=x.a.e
if(!(v==null))v.C(null)
x.b=!0}},
e7:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ae],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.f0(a,v,y,u,t)){s=b.aU(u)
if(s!=null){this.fI(s,t)
y-=t.length}}}this.a.v()
this.c.bJ()
this.d.bJ()
this.b.il()
this.c.cK(new F.jO())
this.d.cK(new F.jn())
z=this.e
if(!(z==null))z.ao(0)},
hw:function(a){this.e7(new F.dn(),new F.iI())},
bq:function(){return this.hw(null)},
hz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aV()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bQ().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gcV(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dU])
for(r=0,q=0;q<w;++q){p=b.hx(q)
o=p.gcV(p)
C.a.l(s,q,new Z.dU(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hY(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bu(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dV(new Z.fi(34962,j),s,b)
i.b=H.e([],[Z.cp])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dp(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.E(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.C(a)},
U:function(){return this.ag(null)},
q:{
cx:function(){var z,y
z=new F.eC()
y=new F.kk(z)
y.b=!1
y.c=H.e([],[F.ae])
z.a=y
y=new F.ji(z)
y.b=H.e([],[F.db])
z.b=y
y=new F.jh(z)
y.b=H.e([],[F.d3])
z.c=y
y=new F.jg(z)
y.b=H.e([],[F.aq])
z.d=y
z.e=null
return z}}},
jg:{"^":"b;a,0b",
bp:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.ba(b,c,d)},
hs:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ae],"$asc")
z=H.e([],[F.aq])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.d(a,v)
v=a[v]
if(w>=u)return H.d(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.ba(x,v,u))}}return z},
ht:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ae],"$asc")
z=H.e([],[F.aq])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.d(c,x)
r=c[x];++x
if(x>=s)return H.d(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.d(c,p)
o=c[p]
if(y<0||y>=s)return H.d(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.ba(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.ba(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.ba(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.ba(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.aT(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghB(x)
if(y)x.aw()}},
af:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ci())x=!1
return x},
cg:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cf())x=!1
return x},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
jh:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.aT(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aw()}},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.E(z,"\n")},
M:function(){return this.D("")}},
ji:{"^":"b;a,0b",
gm:function(a){return this.b.length},
il:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
ae:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cl:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bq(this.cx,x,u,z,y,w,v,a,t)},
hD:function(){return this.cl(null)},
sW:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
scF:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.U()}},
sdv:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.U()}},
saX:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.U()}},
sbK:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
sal:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.U()}},
sen:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.U()}},
sdt:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
hY:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$aV())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aU())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aT())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aW())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.t(a,$.$get$aX())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bP())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bQ())){z=this.Q
if(z==null)return H.e([1,1,1,1],[P.t])
else return z.cN(0)}else if(z.t(a,$.$get$bs()))return H.e([this.ch],[P.t])
else if(z.t(a,$.$get$aS())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
ci:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.z(0,0,0)
this.d.L(0,new F.kt(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
cf:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.z(0,0,0)
this.d.L(0,new F.ks(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.a9(J.aa(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
M:function(){return this.D("")},
q:{
bq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.kr(z)
y.b=H.e([],[F.db])
z.b=y
y=new F.kp(z)
x=[F.d3]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kl(z)
x=[F.aq]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$ff()
z.e=0
y=$.$get$aV()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aW().a)!==0?f:null
z.z=(x&$.$get$aX().a)!==0?g:null
z.Q=(x&$.$get$fg().a)!==0?c:null
z.ch=(x&$.$get$bs().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
kt:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
ks:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
kk:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
hv:function(a,b,c,d,e,f,g,h,i){var z=F.bq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hu:function(a,b,c,d,e,f){return this.hv(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
af:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ci()
return!0},
cg:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cf()
return!0},
hA:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
this.v()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
kl:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
L:function(a,b){H.h(b,{func:1,ret:-1,args:[F.aq]})
C.a.L(this.b,b)
C.a.L(this.c,new F.km(this,b))
C.a.L(this.d,new F.kn(this,b))},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
km:{"^":"n:10;a,b",
$1:function(a){H.f(a,"$isaq")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kn:{"^":"n:10;a,b",
$1:function(a){var z
H.f(a,"$isaq")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kp:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
kq:{"^":"b;"},
dn:{"^":"kq;",
aT:function(a,b,c){return J.F(b.f,c.f)}},
fe:{"^":"b;"},
ko:{"^":"fe;",
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a,"$isc",[F.ae],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.z(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.z(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.R(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.z(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bO(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bO(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bq(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sW(0,null)
else b.sW(0,x.p(0,y))
if(w==null)b.scF(null)
else b.scF(w.p(0,Math.sqrt(w.B(w))))
if(v==null)b.sdv(null)
else b.sdv(v.p(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)b.saX(null)
else b.saX(r.p(0,s))
if(q<=0||p==null)b.sbK(null)
else b.sbK(p.p(0,q))
if(u<=0||t==null)b.sal(0,null)
else{z=t.p(0,u)
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
b.sal(0,new V.aO(f,e,d,z))}if(o<=0)b.sen(0,0)
else b.sen(0,n/o)
return b}},
iI:{"^":"fe;",
aU:function(a){var z,y,x,w
H.w(a,"$isc",[F.ae],"$asc")
z=new V.z(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.z(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].scF(z)
return}},
kr:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}}}],["","",,O,{"^":"",it:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gA:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
a1:[function(a){var z
H.f(a,"$isv")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.a1(null)},"eK","$1","$0","gbj",0,2,1],
fL:[function(a){H.f(a,"$isv")
this.a=null
this.a1(a)},function(){return this.fL(null)},"j9","$1","$0","gfK",0,2,1],
iN:[function(a,b){var z=V.ay
z=new D.cq(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a1(z)},"$2","gfc",8,0,17],
iO:[function(a,b){var z=V.ay
z=new D.cr(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a1(z)},"$2","gfd",8,0,17],
d6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.Z(z.e.length+3,4)*4
x=C.d.Z(z.f.length+3,4)*4
w=C.d.Z(z.r.length+3,4)*4
v=C.d.Z(z.x.length+3,4)*4
u=C.d.Z(z.y.length+3,4)*4
t=C.d.Z(z.z.length+3,4)*4
s=C.d.Z(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.j(q.a)+C.d.j(p.a)+C.d.j(o.a)+C.d.j(n.a)+C.d.j(m.a)+C.d.j(l.a)+C.d.j(k.a)+C.d.j(j.a)+C.d.j(i.a)+"_"
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
a6=$.$get$aV()
if(c){z=$.$get$aU()
a6=new Z.br(a6.a|z.a)}if(b){z=$.$get$aT()
a6=new Z.br(a6.a|z.a)}if(a){z=$.$get$aW()
a6=new Z.br(a6.a|z.a)}if(a0){z=$.$get$aX()
a6=new Z.br(a6.a|z.a)}if(a2){z=$.$get$aS()
a6=new Z.br(a6.a|z.a)}return new A.iy(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.w(a,"$isc",[T.dg],"$asc")
if(b!=null)if(!C.a.b2(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.z(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cO(x)}}},
io:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d6()
y=a.fr.i(0,z.ax)
if(y==null){y=A.iu(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.bs(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aQ
z=b.e
if(!(z instanceof Z.dV)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.af()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.cg()
t.a.cg()
t=t.e
if(!(t==null))t.ao(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hA()
s=s.e
if(!(s==null))s.ao(0)}q=b.d.hz(new Z.ku(a.a),v)
q.aR($.$get$aV()).e=this.a.y.c
if(z)q.aR($.$get$aU()).e=this.a.Q.c
if(u)q.aR($.$get$aT()).e=this.a.z.c
if(w.rx)q.aR($.$get$aW()).e=this.a.ch.c
if(t)q.aR($.$get$aX()).e=this.a.cx.c
if(w.x1)q.aR($.$get$aS()).e=this.a.cy.c
b.e=q}z=T.dg
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hK()
if(w.fx){u=this.a
t=a.dx
t=t.gY(t)
u=u.db
u.toString
u.ah(t.ab(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gY(t)
s=a.dx
s=t.k(0,s.gY(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ah(t.ab(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gii()
s=a.dx
s=t.k(0,s.gY(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ah(t.ab(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ah(t.ab(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ah(t.ab(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ah(C.t.ab(t,!0))}if(w.aP>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isay")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bu(H.w(s.ab(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.f.d)
u=this.a
t=this.f.d
u.ae(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.f.e)
u=this.a
t=this.f.e
u.a7(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.r.d)
u=this.a
t=this.r.d
u.ae(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.r.e)
u=this.a
t=this.r.e
u.a7(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.x.d)
u=this.a
t=this.x.d
u.ae(u.aP,u.aQ,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.x.e)
u=this.a
t=this.x.e
u.a7(u.ax,u.aQ,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bt
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.y.d)
u=this.a
t=this.y.d
u.ae(u.dB,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.y.e)
u=this.a
t=this.y.e
u.a7(u.dC,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bv
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bx
t.a.uniform1f(t.d,r)
break
case C.f:this.V(p,this.z.d)
u=this.a
t=this.z.d
u.ae(u.dD,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break
case C.h:this.V(p,this.z.e)
u=this.a
t=this.z.e
u.a7(u.dE,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.co
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cO(i.a)
r=s.a
g=s.b
f=s.c
f=s.p(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dQ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gcR(s)
f=s.gcS(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bf(i.gb9(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gal(i)
f=h.d
g=s.gbI()
r=s.gbg()
s=s.gbr()
f.a.uniform3f(f.d,g,r,s)
s=i.gc9()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gca()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcb()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dR
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gcR(s)
f=s.gcS(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcn(i).jh()
f=h.c
g=s.gaM(s)
r=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,r,s)
s=l.bf(i.gb9(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gal(i)
r=h.e
g=s.gbI()
f=s.gbg()
s=s.gbr()
r.a.uniform3f(r.d,g,f,s)
s=i.gje()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjd()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc9()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gca()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dS
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.cr
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gbb()
H.w(p,"$isc",s,"$asc")
if(!C.a.b2(p,r)){r.sbl(p.length)
C.a.h(p,r)}r=i.gcn(i)
g=h.d
f=r.gaM(r)
e=r.gaN(r)
r=r.gaO()
g.a.uniform3f(g.d,f,e,r)
r=i.gbL()
e=h.b
f=r.gaM(r)
g=r.gaN(r)
r=r.gaO()
e.a.uniform3f(e.d,f,g,r)
r=i.gba(i)
g=h.c
f=r.gaM(r)
e=r.gaN(r)
r=r.gaO()
g.a.uniform3f(g.d,f,e,r)
r=l.cO(i.gcn(i))
e=r.a
f=r.b
g=r.c
g=r.p(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gal(i)
f=h.f
e=g.gbI()
r=g.gbg()
g=g.gbr()
f.a.uniform3f(f.d,e,r,g)
g=i.gbb()
r=g.gcB(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gf2()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbl())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dT
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cs
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gbb()
H.w(p,"$isc",r,"$asc")
if(!C.a.b2(p,g)){g.sbl(p.length)
C.a.h(p,g)}d=l.k(0,i.gY(i))
g=i.gY(i).bf(new V.U(0,0,0))
f=h.b
e=g.gcR(g)
c=g.gcS(g)
g=g.gcT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bf(new V.U(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.e3(0)
c=h.d
m=new Float32Array(H.bu(H.w(new V.ct(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ab(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gal(i)
g=h.e
e=c.gbI()
f=c.gbg()
c=c.gbr()
g.a.uniform3f(g.d,e,f,c)
c=i.gbb()
g=c.gcB(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcB(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjf(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc9()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gca()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcb()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ct
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gbb()
H.w(p,"$isc",z,"$asc")
if(!C.a.b2(p,s)){s.sbl(p.length)
C.a.h(p,s)}s=i.gb9(i)
r=h.b
g=s.gcR(s)
f=s.gcS(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcn(i)
f=h.c
g=s.gaM(s)
r=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,r,s)
s=i.gbL()
r=h.d
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
r.a.uniform3f(r.d,g,f,s)
s=i.gba(i)
f=h.e
g=s.gaM(s)
r=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,r,s)
s=l.bf(i.gb9(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbb()
r=s.gcB(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gf2()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbl())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gal(i)
r=h.y
g=s.gbI()
f=s.gbg()
s=s.gbr()
r.a.uniform3f(r.d,g,f,s)
s=i.gjn()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjo()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc9()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gca()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.ae(z.dF,z.by,u)
break
case C.h:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.dG,z.by,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gY(u).e3(0)
a.Q=u}z=z.fy
z.toString
z.ah(u.ab(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dH,z.dI,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.ae(z.dJ,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dK,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bC
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bB
u.a.uniform1f(u.d,s)
break
case C.f:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.ae(z.dL,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break
case C.h:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.dM,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bE
z.a.uniform1f(z.d,t)
break
case C.f:this.V(p,this.db.d)
z=this.a
t=this.db.d
z.ae(z.dN,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break
case C.h:this.V(p,this.db.e)
z=this.a
t=this.db.e
z.a7(z.dO,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.cc(a)
z.aV(a)
z.iC(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hI()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.d6().ax}},iw:{"^":"d5;0f,a,b,0c,0d,0e",
fO:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.Q(this.b,y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
b_:function(){this.cX()
this.fO(1)}},d5:{"^":"b;",
a1:[function(a){this.a.a1(H.f(a,"$isv"))},function(){return this.a1(null)},"eK","$1","$0","gbj",0,2,1],
b_:["cX",function(){}],
fS:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gA()
z.toString
y=H.h(this.gbj(),{func:1,ret:-1,args:[D.v]})
C.a.H(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gA()
z.toString
y=H.h(this.gbj(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q(this.b+".texture2D",x,this.d,this,[T.eK])
z.b=!0
this.a.a1(z)}},
fT:function(a){},
saX:function(a){var z=this.c
if(z!==C.f){if(z===C.c)this.b_()
this.c=C.f
this.fT(null)
z=this.a
z.a=null
z.a1(null)}this.fS(a)}},ix:{"^":"d5;a,b,0c,0d,0e"},bd:{"^":"d5;0f,a,b,0c,0d,0e",
fP:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.ag])
y.b=!0
this.a.a1(y)}},
b_:["cY",function(){this.cX()
this.fP(new V.ag(1,1,1))}]},iz:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
fQ:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
b_:function(){this.cY()
this.fQ(1)}},iA:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
fR:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.a1(z)}},
b_:function(){this.cY()
this.fR(100)}},df:{"^":"b;"}}],["","",,T,{"^":"",dg:{"^":"cQ;"},eK:{"^":"dg;"},jz:{"^":"eK;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z}},jA:{"^":"b;a,0b,0c,0d,0e",
i_:function(a,b,c,d,e){var z,y,x,w
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
w=new T.jz()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ab
W.a1(x,"load",H.h(new T.jB(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
e6:function(a){return this.i_(a,!1,!1,!1,!1)},
fM:function(a,b,c){var z,y,x,w
b=V.dH(b,2)
z=V.dH(a.width,2)
y=V.dH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cV(null,null)
x.width=z
x.height=y
w=H.f(C.l.ep(x,"2d"),"$isdY")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mD(w.getImageData(0,0,x.width,x.height))}}},jB:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fM(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.iw(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.hJ()}++x.e}}}],["","",,V,{"^":"",hm:{"^":"b;",
b5:function(a,b){return!0},
j:function(a){return"all"},
$isc8:1},c8:{"^":"b;"},eq:{"^":"b;",
b5:["ey",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b5(0,b))return!0
return!1}],
j:["cW",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isc8:1},bJ:{"^":"eq;0a",
b5:function(a,b){return!this.ey(0,b)},
j:function(a){return"!["+this.cW(0)+"]"}},je:{"^":"b;0a",
eC:function(a){var z,y
if(a.a.length<=0)throw H.a(P.r("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.m,P.ak])
for(y=new H.eo(a,a.gm(a),0,[H.aC(a,"x",0)]);y.G();)z.l(0,y.d,!0)
this.a=z},
b5:function(a,b){return this.a.bs(0,b)},
j:function(a){var z=this.a
return P.cc(z.gan(z),0,null)},
$isc8:1,
q:{
a9:function(a){var z=new V.je()
z.eC(a)
return z}}},eE:{"^":"b;a,b,0c,0d",
gi1:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eR(this.a.N(0,b))
w.a=H.e([],[V.c8])
w.c=!1
C.a.h(this.c,w)
return w},
hO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b5(0,a))return w}return},
j:function(a){return this.b}},eO:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hb(this.b,"\n","\\n")
y=H.hb(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eP:{"^":"b;a,b,0c",
j:function(a){return this.b}},jJ:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eE(this,b)
z.c=H.e([],[V.eR])
this.a.l(0,b,z)}return z},
bd:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.eP(this,a)
y=P.i
z.c=new H.b1(0,0,[y,y])
this.b.l(0,a,z)}return z},
iB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eO])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hO(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cc(w,0,null)
throw H.a(P.r("Untokenizable string [state: "+y.gi1(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cc(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.eO(o==null?p.b:o,q,t)}++t}}}},eR:{"^":"eq;b,0c,0a",
j:function(a){return this.b.b+": "+this.cW(0)}}}],["","",,X,{"^":"",dX:{"^":"b;",$isaP:1},hY:{"^":"eI;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},iL:{"^":"b;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.P()
this.f=z}return z},
aZ:[function(a){var z
H.f(a,"$isv")
z=this.f
if(!(z==null))z.C(a)},function(){return this.aZ(null)},"iG","$1","$0","gd_",0,2,1],
sb6:function(a){var z,y,x
if(!J.F(this.b,a)){z=this.b
if(z!=null){z=z.gA()
z.toString
y=H.h(this.gd_(),{func:1,ret:-1,args:[D.v]})
C.a.H(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gA()
z.toString
y=H.h(this.gd_(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.b,this,[U.ai])
z.b=!0
this.aZ(z)}},
$isaP:1,
$isdX:1},eI:{"^":"b;"}}],["","",,V,{"^":"",
ne:function(a){P.jI(C.G,new V.nf(a))},
nf:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbn")
P.dI(C.e.ek(this.a.ghS(),2)+" fps")}},
iZ:{"^":"b;a,b,0c",
bp:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fa().gcJ().i(0,H.l(z))
if(y==null)if(d){c.$0()
this.dn(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dN(this.c).h(0,v)
t=W.i_("radio")
t.checked=x
t.name=z
z=W.ab
W.a1(t,"change",H.h(new V.j_(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dN(this.c).h(0,w.createElement("br"))},
ak:function(a,b,c){return this.bp(a,b,c,!1)},
dn:function(a){var z,y,x,w,v
z=P.fa()
y=P.i
x=P.ig(z.gcJ(),y,y)
x.l(0,this.a,a)
w=z.eg(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.ly([],[]).cP(""),"",v)}},
j_:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dn(this.d)}}},
jj:{"^":"b;0a,0b",
eE:function(a,b){var z,y,x,w,v,u,t
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
t=W.ab
W.a1(z,"scroll",H.h(new V.jm(x),{func:1,ret:-1,args:[t]}),!1,t)},
ds:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fY()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iB(C.a.hX(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.ha(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cD(C.S,s,C.k,!1)
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
hr:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isde").style
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
t=H.f(w.insertCell(-1),"$isde")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fY:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jJ()
y=P.i
z.a=new H.b1(0,0,[y,V.eE])
z.b=new H.b1(0,0,[y,V.eP])
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.a9(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bJ()
w=[V.c8]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").E(0,"BoldEnd")
x=V.a9(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Italic")
x=V.a9(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").E(0,"Italic")
x=new V.bJ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").E(0,"ItalicEnd")
x=V.a9(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Code")
x=V.a9(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").E(0,"Code")
x=new V.bJ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").E(0,"CodeEnd")
x=V.a9(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"LinkHead")
x=V.a9(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").E(0,"LinkTail")
x=V.a9(new H.a5("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").E(0,"LinkEnd")
y=V.a9(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").E(0,"LinkHead")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.a9(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.hm())
x=z.N(0,"Other").E(0,"Other")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bd("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bd("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bd("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bd("Link")
x=z.N(0,"Other")
x.d=x.a.bd("Other")
this.b=z},
q:{
jk:function(a,b){var z=new V.jj()
z.eE(a,!0)
return z}}},
jm:{"^":"n:15;a",
$1:function(a){P.eM(C.q,new V.jl(this.a))}},
jl:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.e.aa(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
h4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.jk("Test 018",!0)
y=W.cV(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.ds(H.e(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],x))
z.hr(H.e(["shapes"],x))
z.ds(H.e(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.jG(w,!0,!0,!0,!1)
u=new E.b_()
u.a=""
u.b=!0
z=E.b_
t=O.cW(z)
u.y=t
t.bi(u.gi3(),u.gi5())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sa3(0,null)
u.sb6(null)
u.sa3(0,F.h9(8,null,8))
t=new U.ed()
s=U.ai
t.bQ(s)
t.bi(t.gfa(),t.gfz())
t.e=null
t.f=V.c9()
t.r=0
r=v.r
q=new U.ka()
p=U.cX()
p.scQ(0,!0)
p.scC(6.283185307179586)
p.scE(0)
p.sW(0,0)
p.scD(100)
p.sS(0)
p.scm(0.5)
q.b=p
p=p.gA()
p.toString
o={func:1,ret:-1,args:[D.v]}
n=H.h(q.gaH(),o)
C.a.h(p.a,n)
p=U.cX()
p.scQ(0,!0)
p.scC(6.283185307179586)
p.scE(0)
p.sW(0,0)
p.scD(100)
p.sS(0)
p.scm(0.5)
q.c=p
C.a.h(p.gA().a,n)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
m=new X.aI(!1,!1,!1)
l=q.d
q.d=m
p=[X.aI]
n=new D.Q("modifiers",l,m,q,p)
n.b=!0
q.R(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.Q("invertX",n,!1,q,[P.ak])
n.b=!0
q.R(n)}n=q.r
if(n!==!1){q.r=!1
n=new D.Q("invertY",n,!1,q,[P.ak])
n.b=!0
q.R(n)}q.b1(r)
t.h(0,q)
r=v.r
q=new U.k9()
n=U.cX()
n.scQ(0,!0)
n.scC(6.283185307179586)
n.scE(0)
n.sW(0,0)
n.scD(100)
n.sS(0)
n.scm(0.2)
q.b=n
n=n.gA()
n.toString
k=H.h(q.gaH(),o)
C.a.h(n.a,k)
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
m=new X.aI(!0,!1,!1)
l=q.c
q.c=m
n=new D.Q("modifiers",l,m,q,p)
n.b=!0
q.R(n)
q.b1(r)
t.h(0,q)
r=v.r
q=new U.kb()
q.c=0.01
q.d=0
q.e=0
m=new X.aI(!1,!1,!1)
q.b=m
p=new D.Q("modifiers",null,m,q,p)
p.b=!0
q.R(p)
q.b1(r)
t.h(0,q)
u.sb6(t)
j=v.f.e6("../resources/Dirt.png")
i=v.f.e6("../resources/Grass.png")
h=new O.it()
t=O.cW(V.ay)
h.e=t
t.bi(h.gfc(),h.gfd())
t=new O.bd(h,"emission")
t.c=C.c
t.f=new V.ag(0,0,0)
h.f=t
t=new O.bd(h,"ambient")
t.c=C.c
t.f=new V.ag(0,0,0)
h.r=t
t=new O.bd(h,"diffuse")
t.c=C.c
t.f=new V.ag(0,0,0)
h.x=t
t=new O.bd(h,"invDiffuse")
t.c=C.c
t.f=new V.ag(0,0,0)
h.y=t
t=new O.iA(h,"specular")
t.c=C.c
t.f=new V.ag(0,0,0)
t.ch=100
h.z=t
t=new O.ix(h,"bump")
t.c=C.c
h.Q=t
h.ch=null
t=new O.bd(h,"reflect")
t.c=C.c
t.f=new V.ag(0,0,0)
h.cx=t
t=new O.iz(h,"refract")
t.c=C.c
t.f=new V.ag(0,0,0)
t.ch=1
h.cy=t
t=new O.iw(h,"alpha")
t.c=C.c
t.f=1
h.db=t
t=new D.i8()
t.bQ(D.a3)
t.e=H.e([],[D.cm])
t.f=H.e([],[D.iN])
t.r=H.e([],[D.jr])
t.x=H.e([],[D.jC])
t.y=H.e([],[D.jD])
t.z=H.e([],[D.jE])
t.Q=null
t.ch=null
t.cU(t.gfb(),t.gfw(),t.gfA())
h.dx=t
r=t.Q
if(r==null){r=D.P()
t.Q=r
t=r}else t=r
r=H.h(h.gfK(),o)
C.a.h(t.a,r)
r=h.dx
t=r.ch
if(t==null){t=D.P()
r.ch=t}r=H.h(h.gbj(),o)
C.a.h(t.a,r)
h.dy=null
r=h.dx
t=U.e1(V.er(new V.U(0,0,0),new V.z(0,1,0),new V.z(-1,-1,-1)))
g=new V.ag(1,1,1)
q=new D.cm()
q.c=new V.ag(1,1,1)
q.a=new V.z(0,0,1)
l=q.b
q.b=t
t=t.gA()
t.toString
p=H.h(q.geJ(),o)
C.a.h(t.a,p)
t=new D.Q("mover",l,q.b,q,[s])
t.b=!0
q.aC(t)
if(!q.c.t(0,g)){l=q.c
q.c=g
t=new D.Q("color",l,g,q,[V.ag])
t.b=!0
q.aC(t)}r.h(0,q)
h.x.saX(j)
h.y.saX(i)
t=new M.hQ()
z=O.cW(z)
t.d=z
z.bi(t.gff(),t.gfg())
t.e=null
t.f=null
t.r=null
t.x=null
f=new X.iL()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb6(null)
z=f.c
if(!$.p.$2(z,1.0471975511965976)){l=f.c
f.c=1.0471975511965976
z=new D.Q("fov",l,1.0471975511965976,f,[P.t])
z.b=!0
f.aZ(z)}z=f.d
if(!$.p.$2(z,0.1)){l=f.d
f.d=0.1
z=new D.Q("near",l,0.1,f,[P.t])
z.b=!0
f.aZ(z)}z=f.e
if(!$.p.$2(z,2000)){l=f.e
f.e=2000
z=new D.Q("far",l,2000,f,[P.t])
z.b=!0
f.aZ(z)}z=t.a
if(z!==f){if(z!=null){z=z.gA()
z.toString
s=H.h(t.gai(),o)
C.a.H(z.a,s)}l=t.a
t.a=f
z=f.gA()
z.toString
s=H.h(t.gai(),o)
C.a.h(z.a,s)
z=new D.Q("camera",l,t.a,t,[X.dX])
z.b=!0
t.aD(z)}e=new X.hY()
z=new V.aO(0,0,0,1)
e.a=z
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
z=V.eA(0,0,1,1)
e.r=z
z=t.b
if(z!==e){if(z!=null){z=z.gA()
z.toString
s=H.h(t.gai(),o)
C.a.H(z.a,s)}l=t.b
t.b=e
z=e.gA()
z.toString
s=H.h(t.gai(),o)
C.a.h(z.a,s)
z=new D.Q("target",l,t.b,t,[X.eI])
z.b=!0
t.aD(z)}t.sei(null)
t.sei(h)
t.d.h(0,u)
t.a.sb6(U.e1(V.aH(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
z=v.d
if(z!==t){if(z!=null){z=z.gA()
z.toString
s=H.h(v.gcZ(),o)
C.a.H(z.a,s)}v.d=t
z=t.gA()
z.toString
o=H.h(v.gcZ(),o)
C.a.h(z.a,o)
v.eH()}z=new V.iZ("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
z.ak(0,"Cube",new M.n0(u))
z.ak(0,"Cuboid",new M.n1(u))
z.ak(0,"Cylinder",new M.n2(u))
z.ak(0,"Cone",new M.n3(u))
z.ak(0,"LatLonSphere",new M.n4(u))
z.ak(0,"IsoSphere",new M.n5(u))
z.bp(0,"Sphere",new M.n6(u),!0)
z.ak(0,"Toroid",new M.n7(u))
z.ak(0,"Knot",new M.n8(u))
V.ne(v)},
n0:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.dA(1,null,null,1))}},
n1:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.dA(8,null,null,8))}},
n2:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.fT(1,!0,!0,1,40,1))}},
n3:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.fT(1,!0,!1,1,40,0))}},
n4:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.mY(10,20))}},
n5:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cx()
y=Math.sqrt(5)/2+0.5
x=F.af(z,new V.z(-1,y,0))
w=F.af(z,new V.z(1,y,0))
v=-y
u=F.af(z,new V.z(-1,v,0))
t=F.af(z,new V.z(1,v,0))
s=F.af(z,new V.z(0,-1,v))
r=F.af(z,new V.z(0,1,v))
q=F.af(z,new V.z(0,-1,y))
p=F.af(z,new V.z(0,1,y))
o=F.af(z,new V.z(y,0,1))
n=F.af(z,new V.z(y,0,-1))
m=F.af(z,new V.z(v,0,1))
l=F.af(z,new V.z(v,0,-1))
F.W(z,x,l,r,2)
F.W(z,x,r,w,2)
F.W(z,x,w,p,2)
F.W(z,x,p,m,2)
F.W(z,x,m,l,2)
F.W(z,w,r,n,2)
F.W(z,r,l,s,2)
F.W(z,l,m,u,2)
F.W(z,m,p,q,2)
F.W(z,p,w,o,2)
F.W(z,t,n,s,2)
F.W(z,t,s,u,2)
F.W(z,t,u,q,2)
F.W(z,t,q,o,2)
F.W(z,t,o,n,2)
F.W(z,s,n,r,2)
F.W(z,u,s,l,2)
F.W(z,q,u,m,2)
F.W(z,o,q,p,2)
F.W(z,n,o,w,2)
z.e7(new F.dn(),new F.ko())
this.a.sa3(0,z)}},
n6:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.h9(6,null,6))}},
n7:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.nj(30,1,15,0.5))}},
n8:{"^":"n:0;a",
$0:function(){this.a.sa3(0,F.mW(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ei.prototype
return J.eh.prototype}if(typeof a=="string")return J.c6.prototype
if(a==null)return J.ej.prototype
if(typeof a=="boolean")return J.i3.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.av=function(a){if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.cg=function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.fX=function(a){if(typeof a=="number")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.fY=function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.dD=function(a){if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.b3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fX(a).ac(a,b)}
J.hd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fX(a).J(a,b)}
J.dK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fY(a).k(a,b)}
J.dL=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).i(a,b)}
J.cN=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h1(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cg(a).l(a,b,c)}
J.he=function(a,b){return J.dD(a).F(a,b)}
J.hf=function(a,b,c){return J.b3(a).fH(a,b,c)}
J.hg=function(a,b,c,d){return J.b3(a).dr(a,b,c,d)}
J.hh=function(a,b){return J.dD(a).X(a,b)}
J.hi=function(a,b){return J.fY(a).aL(a,b)}
J.cO=function(a,b,c){return J.av(a).hC(a,b,c)}
J.cP=function(a,b){return J.cg(a).I(a,b)}
J.hj=function(a,b,c,d){return J.cg(a).ay(a,b,c,d)}
J.dM=function(a,b){return J.cg(a).L(a,b)}
J.dN=function(a){return J.b3(a).gcj(a)}
J.c0=function(a){return J.I(a).gT(a)}
J.bB=function(a){return J.cg(a).ga_(a)}
J.ao=function(a){return J.av(a).gm(a)}
J.hk=function(a,b){return J.b3(a).ip(a,b)}
J.hl=function(a,b){return J.b3(a).sa0(a,b)}
J.aa=function(a){return J.I(a).j(a)}
I.an=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cU.prototype
C.H=J.u.prototype
C.a=J.bc.prototype
C.I=J.eh.prototype
C.d=J.ei.prototype
C.t=J.ej.prototype
C.e=J.c5.prototype
C.b=J.c6.prototype
C.P=J.c7.prototype
C.V=H.da.prototype
C.W=W.iH.prototype
C.z=J.iM.prototype
C.X=P.dc.prototype
C.r=J.ce.prototype
C.A=W.bR.prototype
C.B=W.kx.prototype
C.D=new P.hr(!1)
C.C=new P.hq(C.D)
C.E=new P.iK()
C.F=new P.kj()
C.j=new P.lk()
C.c=new A.cl(0,"ColorSourceType.None")
C.i=new A.cl(1,"ColorSourceType.Solid")
C.f=new A.cl(2,"ColorSourceType.Texture2D")
C.h=new A.cl(3,"ColorSourceType.TextureCube")
C.q=new P.aG(0)
C.G=new P.aG(5e6)
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
C.w=H.e(I.an([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.an([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.an([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.an([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.an([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.an([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.an([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.an([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.an([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.an([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.an([]),[P.i])
C.U=new H.hD(0,{},C.Q,[P.i,P.i])
C.k=new P.kc(!1)
$.aF=0
$.bC=null
$.dS=null
$.dv=!1
$.h_=null
$.fP=null
$.h8=null
$.cH=null
$.cK=null
$.dE=null
$.bv=null
$.bW=null
$.bX=null
$.dw=!1
$.V=C.j
$.e8=null
$.e7=null
$.e6=null
$.e5=null
$.p=V.iB()
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
I.$lazy(y,x,w)}})(["e4","$get$e4",function(){return H.fZ("_$dart_dartClosure")},"d0","$get$d0",function(){return H.fZ("_$dart_js")},"eS","$get$eS",function(){return H.aJ(H.cy({
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aJ(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aJ(H.cy(null))},"eV","$get$eV",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aJ(H.cy(void 0))},"f_","$get$f_",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aJ(H.eY(null))},"eW","$get$eW",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aJ(H.eY(void 0))},"f0","$get$f0",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dq","$get$dq",function(){return P.ky()},"bY","$get$bY",function(){return[]},"fd","$get$fd",function(){return P.kg()},"fk","$get$fk",function(){return H.iF(H.bu(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fF","$get$fF",function(){return P.j4("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fL","$get$fL",function(){return P.mj()},"e2","$get$e2",function(){return{}},"fh","$get$fh",function(){return Z.au(0)},"ff","$get$ff",function(){return Z.au(511)},"aV","$get$aV",function(){return Z.au(1)},"aU","$get$aU",function(){return Z.au(2)},"aT","$get$aT",function(){return Z.au(4)},"aW","$get$aW",function(){return Z.au(8)},"aX","$get$aX",function(){return Z.au(16)},"bP","$get$bP",function(){return Z.au(32)},"bQ","$get$bQ",function(){return Z.au(64)},"fg","$get$fg",function(){return Z.au(96)},"bs","$get$bs",function(){return Z.au(128)},"aS","$get$aS",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.H,args:[F.ae,P.t,P.t]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.m,[P.k,E.b_]]},{func:1,ret:P.H,args:[F.aq]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.v]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.t},{func:1,ret:P.H,args:[W.ab]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[P.m,[P.k,V.ay]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,D.a3]]},{func:1,ret:-1,args:[P.m,[P.k,U.ai]]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:V.U,args:[P.t]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,args:[P.i]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.H,args:[P.Z]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:[P.aY,,],args:[,]},{func:1,ret:P.ak,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bR]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.ak,args:[[P.k,D.a3]]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,args:[,P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:P.ak,args:[W.L]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:W.a2,args:[W.L]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.H,args:[P.bn]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.ni(d||a)
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
Isolate.an=a.an
Isolate.dB=a.dB
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
if(typeof dartMainRunner==="function")dartMainRunner(M.h4,[])
else M.h4([])})})()
//# sourceMappingURL=test.dart.js.map
