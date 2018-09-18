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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isw)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dG(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dI=function(){}
var dart=[["","",,H,{"^":"",o_:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cM:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dL==null){H.n3()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ci("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d6()]
if(v!=null)return v
v=H.na(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d6(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
w:{"^":"b;",
u:function(a,b){return a===b},
gU:function(a){return H.bO(a)},
j:["eN",function(a){return"Instance of '"+H.bj(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
id:{"^":"w;",
j:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isah:1},
ep:{"^":"w;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gU:function(a){return 0},
$isJ:1},
d7:{"^":"w;",
gU:function(a){return 0},
j:["eO",function(a){return String(a)}]},
iV:{"^":"d7;"},
cj:{"^":"d7;"},
cb:{"^":"d7;",
j:function(a){var z=a[$.$get$e9()]
if(z==null)return this.eO(a)
return"JavaScript function for "+H.l(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd3:1},
be:{"^":"w;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.B("add"))
a.push(b)},
iv:function(a,b){if(!!a.fixed$length)H.r(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cd(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.r(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
ck:function(a,b){var z,y
H.v(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b9(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
i7:function(a){return this.E(a,"")},
i_:function(a,b,c,d){var z,y,x
H.A(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b9(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bX:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ib())},
aC:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.B("fill range"))
P.aV(b,c,a.length,null,null,null)
for(z=b;z.J(0,c);z=z.C(0,1))a[z]=d},
b9:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.d4(a,"[","]")},
ga3:function(a){return new J.aB(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bO(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.co(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
return a[b]},
l:function(a,b,c){H.E(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
ic:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.co(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.em(new Array(a),b)},
em:function(a,b){return J.bI(H.e(a,[b]))},
bI:function(a){H.c1(a)
a.fixed$length=Array
return a},
nY:[function(a,b){return J.hp(H.hd(a,"$isam"),H.hd(b,"$isam"))},"$2","mA",8,0,51]}},
nZ:{"^":"be;$ti"},
aB:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c9:{"^":"w;",
aU:function(a,b){var z
H.hc(b)
if(typeof b!=="number")throw H.a(H.a5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbN(b)
if(this.gbN(a)===z)return 0
if(this.gbN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbN:function(a){return a===0?1/a<0:a<0},
iI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
eD:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbN(a))return"-"+z
return z},
bk:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.B("Unexpected toString result: "+z))
x=J.ax(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a*b},
bp:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eQ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dG(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dG(a,b)},
dG:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aS:function(a,b){var z
if(a>0)z=this.dE(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hc:function(a,b){if(b<0)throw H.a(H.a5(b))
return this.dE(a,b)},
dE:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a>b},
$isam:1,
$asam:function(){return[P.a_]},
$isu:1,
$isa_:1},
eo:{"^":"c9;",$ism:1},
en:{"^":"c9;"},
ca:{"^":"w;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b<0)throw H.a(H.aS(a,b))
if(b>=a.length)H.r(H.aS(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aS(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.co(b,null,null))
return a+b},
b3:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a5(b))
c=P.aV(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a5(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a5(c))
if(typeof c!=="number")return c.J()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ab:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a5(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.J()
if(b<0)throw H.a(P.cd(b,null,null))
if(b>c)throw H.a(P.cd(b,null,null))
if(c>a.length)throw H.a(P.cd(c,null,null))
return a.substring(b,c)},
aH:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ik:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ag:function(a,b){return this.ik(a,b," ")},
en:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
em:function(a,b){return this.en(a,b,0)},
hN:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.hh(a,b,c)},
aU:function(a,b){var z
H.O(b)
if(typeof b!=="string")throw H.a(H.a5(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isam:1,
$asam:function(){return[P.j]},
$iseC:1,
$isj:1}}],["","",,H,{"^":"",
cN:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ib:function(){return new P.jE("No element")},
jC:function(a,b,c){var z
H.v(a,"$isc",[c],"$asc")
H.f(b,{func:1,ret:P.m,args:[c,c]})
z=J.aq(a)
if(typeof z!=="number")return z.K()
H.cf(a,0,z-1,b,c)},
cf:function(a,b,c,d,e){H.v(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.jB(a,b,c,d,e)
else H.jA(a,b,c,d,e)},
jB:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.ax(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aG(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jA:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isc",[a2],"$asc")
H.f(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.a2(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a2(b+a0,2)
v=w-z
u=w+z
t=J.ax(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aG(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aG(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aG(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aG(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aG(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aG(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aG(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aG(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aG(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.ai()
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
if(typeof d!=="number")return d.ai()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ai()
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
H.cf(a,b,m-2,a1,a2)
H.cf(a,l+2,a0,a1,a2)
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
break}}H.cf(a,m,l,a1,a2)}else H.cf(a,m,l,a1,a2)},
a6:{"^":"kb;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.Z(this.a,b)},
$ascD:function(){return[P.m]},
$asz:function(){return[P.m]},
$asi:function(){return[P.m]},
$asc:function(){return[P.m]}},
hW:{"^":"i;"},
eu:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.ax(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b9(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
iB:{"^":"i;a,b,$ti",
ga3:function(a){return new H.iC(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.aq(this.a)},
I:function(a,b){return this.b.$1(J.cT(this.a,b))},
$asi:function(a,b){return[b]}},
iC:{"^":"d5;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd5:function(a,b){return[b]}},
kG:{"^":"i;a,b,$ti",
ga3:function(a){return new H.kH(J.bE(this.a),this.b,this.$ti)}},
kH:{"^":"d5;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cu:{"^":"b;$ti"},
cD:{"^":"b;$ti",
l:function(a,b,c){H.E(b)
H.A(c,H.ay(this,"cD",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aC:function(a,b,c,d){H.A(d,H.ay(this,"cD",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
kb:{"^":"cw+cD;"}}],["","",,H,{"^":"",
hK:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mZ:function(a){return init.types[H.E(a)]},
h8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.a5(a))
return z},
bO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j4:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bj:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$iscj){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aH(w,1)
r=H.dM(H.c1(H.b7(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iX:function(){if(!!self.location)return self.location.href
return},
eF:function(a){var z,y,x,w,v
H.c1(a)
z=J.aq(a)
if(typeof z!=="number")return z.eK()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j5:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a5(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aS(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a5(w))}return H.eF(z)},
eG:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a5(x))
if(x<0)throw H.a(H.a5(x))
if(x>65535)return H.j5(a)}return H.eF(a)},
j6:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eK()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cz:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aS(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j3:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
j1:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
iY:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
iZ:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
j0:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
j2:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
j_:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a5(a))},
d:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
z=H.E(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.cd(b,"index",null)},
mV:function(a,b,c){if(a>c)return new P.cA(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cA(a,c,!0,b,"end","Invalid value")
return new P.aT(!0,b,"end",null)},
a5:function(a){return new P.aT(!0,a,null,null)},
mK:function(a){if(typeof a!=="number")throw H.a(H.a5(a))
return a},
a:function(a){var z
if(a==null)a=new P.eB()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hj})
z.name=""}else z.toString=H.hj
return z},
hj:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.b9(a))},
aA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d8(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eA(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eY()
u=$.$get$eZ()
t=$.$get$f_()
s=$.$get$f0()
r=$.$get$f4()
q=$.$get$f5()
p=$.$get$f2()
$.$get$f1()
o=$.$get$f7()
n=$.$get$f6()
m=v.af(y)
if(m!=null)return z.$1(H.d8(H.O(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.d8(H.O(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eA(H.O(y),m))}}return z.$1(new H.ka(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eL()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aT(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eL()
return a},
bC:function(a){var z
if(a==null)return new H.fC(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fC(a)},
mY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
n5:function(a,b,c,d,e,f){H.h(a,"$isd3")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n5)
a.$identity=z
return z},
hF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.jb(z).r}else x=d
w=e?Object.create(new H.jF().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.C()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e4(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mZ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e_:H.cX
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e4(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hC:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hE(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hC(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.C()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bF
if(v==null){v=H.cp("self")
$.bF=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.C()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bF
if(v==null){v=H.cp("self")
$.bF=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hD:function(a,b,c,d){var z,y
z=H.cX
y=H.e_
switch(b?-1:a){case 0:throw H.a(H.jl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hE:function(a,b){var z,y,x,w,v,u,t,s
z=$.bF
if(z==null){z=H.cp("self")
$.bF=z}y=$.dZ
if(y==null){y=H.cp("receiver")
$.dZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hD(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aH
if(typeof y!=="number")return y.C()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.C()
$.aH=y+1
return new Function(z+y+"}")()},
dG:function(a,b,c,d,e,f,g){var z,y
z=J.bI(H.c1(b))
H.E(c)
y=!!J.K(d).$isc?J.bI(d):d
return H.hF(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aE(a,"String"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"double"))},
hc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"num"))},
fZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aE(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aE(a,"int"))},
dQ:function(a,b){throw H.a(H.aE(a,H.O(b).substring(3)))},
nn:function(a,b){var z=J.ax(b)
throw H.a(H.hB(a,z.v(b,3,z.gm(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.dQ(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.nn(a,b)},
hd:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.K(a)[b])return a
H.dQ(a,b)},
c1:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aE(a,"List"))},
ha:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.dQ(a,b)},
h2:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
ck:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h2(J.K(a))
if(z==null)return!1
y=H.h7(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dC)return a
$.dC=!0
try{if(H.ck(a,b))return a
z=H.cn(b)
y=H.aE(a,z)
throw H.a(y)}finally{$.dC=!1}},
dJ:function(a,b){if(a!=null&&!H.dF(a,b))H.r(H.aE(a,H.cn(b)))
return a},
fU:function(a){var z
if(a instanceof H.n){z=H.h2(J.K(a))
if(z!=null)return H.cn(z)
return"Closure"}return H.bj(a)},
nt:function(a){throw H.a(new P.hP(H.O(a)))},
h5:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b7:function(a){if(a==null)return
return a.$ti},
oW:function(a,b,c){return H.bD(a["$as"+H.l(c)],H.b7(b))},
b6:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.bD(a["$as"+H.l(c)],H.b7(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.bD(a["$as"+H.l(b)],H.b7(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.E(b)
z=H.b7(a)
return z==null?null:z[b]},
cn:function(a){var z=H.b8(a,null)
return z},
b8:function(a,b){var z,y
H.v(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dM(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.b8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b8(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b8(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b8(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b8(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b8(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dM:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.au("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b8(u,c)}v="<"+z.j(0)+">"
return v},
bD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b7(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fX(H.bD(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.c1(c)
H.O(d)
if(a==null)return a
z=H.c0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dM(c,0,null)
throw H.a(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fX:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.az(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.az(a[y],b,c[y],d))return!1
return!0},
oU:function(a,b,c){return a.apply(b,H.bD(J.K(b)["$as"+H.l(c)],H.b7(b)))},
h9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="J"||a===-1||a===-2||H.h9(z)}return!1},
dF:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="J"||b===-1||b===-2||H.h9(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dF(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ck(a,b)}y=J.K(a).constructor
x=H.b7(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.az(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dF(a,b))throw H.a(H.aE(a,H.cn(b)))
return a},
az:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.az(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.h7(a,b,c,d)
if('func' in a)return c.builtin$cls==="d3"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.az("type" in a?a.type:null,b,x,d)
else if(H.az(a,b,x,d))return!0
else{if(!('$is'+"bH" in y.prototype))return!1
w=y.prototype["$as"+"bH"]
v=H.bD(w,z?a.slice(1):null)
return H.az(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cn(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fX(H.bD(r,z),b,u,d)},
h7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.az(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.az(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.az(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.az(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nl(m,b,l,d)},
nl:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.az(c[w],d,a[w],b))return!1}return!0},
oV:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
na:function(a){var z,y,x,w,v,u
z=H.O($.h6.$1(a))
y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fW.$2(a,z))
if(z!=null){y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cP(x)
$.cL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cO[z]=x
return x}if(v==="-"){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.he(a,x)
if(v==="*")throw H.a(P.ci(z))
if(init.leafTags[z]===true){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.he(a,x)},
he:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dN(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cP:function(a){return J.dN(a,!1,null,!!a.$isG)},
nk:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cP(z)
else return J.dN(z,c,null,null)},
n3:function(){if(!0===$.dL)return
$.dL=!0
H.n4()},
n4:function(){var z,y,x,w,v,u,t,s
$.cL=Object.create(null)
$.cO=Object.create(null)
H.n_()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hf.$1(v)
if(u!=null){t=H.nk(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n_:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bz(C.J,H.bz(C.O,H.bz(C.u,H.bz(C.u,H.bz(C.N,H.bz(C.K,H.bz(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h6=new H.n0(v)
$.fW=new H.n1(u)
$.hf=new H.n2(t)},
bz:function(a,b){return a(b)||b},
hh:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hi:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hJ:{"^":"b;$ti",
j:function(a){return P.da(this)},
l:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.hK()},
$isL:1},
hL:{"^":"hJ;a,b,c,$ti",
gm:function(a){return this.a},
bz:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bz(0,b))return
return this.ds(b)},
ds:function(a){return this.b[H.O(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.ds(v),z))}}},
ja:{"^":"b;a,b,c,d,e,f,r,0x",q:{
jb:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bI(z)
y=z[0]
x=z[1]
return new H.ja(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jX:{"^":"b;a,b,c,d,e,f",
af:function(a){var z,y,x
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
if(z==null)z=H.e([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iS:{"^":"a7;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eA:function(a,b){return new H.iS(a,b==null?null:b.method)}}},
ih:{"^":"a7;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
d8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ih(a,y,z?null:b.receiver)}}},
ka:{"^":"a7;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nw:{"^":"n:19;a",
$1:function(a){if(!!J.K(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fC:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.bj(this).trim()+"'"},
geH:function(){return this},
$isd3:1,
geH:function(){return this}},
eQ:{"^":"n;"},
jF:{"^":"eQ;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cW:{"^":"eQ;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bO(this.a)
else y=typeof z!=="object"?J.c2(z):H.bO(z)
return(y^H.bO(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bj(z)+"'")},
q:{
cX:function(a){return a.a},
e_:function(a){return a.c},
cp:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.bI(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jY:{"^":"a7;a",
j:function(a){return this.a},
q:{
aE:function(a,b){return new H.jY("TypeError: "+H.l(P.ct(a))+": type '"+H.fU(a)+"' is not a subtype of type '"+b+"'")}}},
hA:{"^":"a7;a",
j:function(a){return this.a},
q:{
hB:function(a,b){return new H.hA("CastError: "+H.l(P.ct(a))+": type '"+H.fU(a)+"' is not a subtype of type '"+b+"'")}}},
jk:{"^":"a7;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
jl:function(a){return new H.jk(a)}}},
b3:{"^":"iy;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gar:function(a){return new H.im(this,[H.y(this,0)])},
bz:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dn(y,b)}else return this.i4(b)},
i4:function(a){var z=this.d
if(z==null)return!1
return this.cJ(this.c4(z,this.cI(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.br(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.br(w,b)
x=y==null?null:y.b
return x}else return this.i5(b)},
i5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,this.cI(a))
x=this.cJ(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ca()
this.b=z}this.dg(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ca()
this.c=y}this.dg(y,b,c)}else this.i6(b,c)},
i6:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.ca()
this.d=z}y=this.cI(a)
x=this.c4(z,y)
if(x==null)this.ci(z,y,[this.cb(a,b)])
else{w=this.cJ(x,a)
if(w>=0)x[w].b=b
else x.push(this.cb(a,b))}},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b9(this))
z=z.c}},
dg:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.br(a,b)
if(z==null)this.ci(a,b,this.cb(b,c))
else z.b=c},
fi:function(){this.r=this.r+1&67108863},
cb:function(a,b){var z,y
z=new H.il(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fi()
return z},
cI:function(a){return J.c2(a)&0x3ffffff},
cJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.da(this)},
br:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
fb:function(a,b){delete a[b]},
dn:function(a,b){return this.br(a,b)!=null},
ca:function(){var z=Object.create(null)
this.ci(z,"<non-identifier-key>",z)
this.fb(z,"<non-identifier-key>")
return z},
$ises:1},
il:{"^":"b;a,b,0c,0d"},
im:{"^":"hW;a,$ti",
gm:function(a){return this.a.a},
ga3:function(a){var z,y
z=this.a
y=new H.io(z,z.r,this.$ti)
y.c=z.e
return y}},
io:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
n0:{"^":"n:19;a",
$1:function(a){return this.a(a)}},
n1:{"^":"n:30;a",
$2:function(a,b){return this.a(a,b)}},
n2:{"^":"n:47;a",
$1:function(a){return this.a(H.O(a))}},
ie:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseC:1,
$isjc:1,
q:{
ig:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Z("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mX:function(a){return J.em(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bx:function(a){return a},
iO:function(a){return new Int8Array(a)},
aR:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aS(b,a))},
mt:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mV(a,b,c))
return b},
ez:{"^":"w;",$isez:1,"%":"ArrayBuffer"},
df:{"^":"w;",$isdf:1,$isjZ:1,"%":"DataView;ArrayBufferView;de|fw|fx|iP|fy|fz|b4"},
de:{"^":"df;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dI},
iP:{"^":"fx;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
l:function(a,b,c){H.E(b)
H.mW(c)
H.aR(b,a,a.length)
a[b]=c},
$ascu:function(){return[P.u]},
$asz:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
b4:{"^":"fz;",
l:function(a,b,c){H.E(b)
H.E(c)
H.aR(b,a,a.length)
a[b]=c},
$ascu:function(){return[P.m]},
$asz:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
o8:{"^":"b4;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o9:{"^":"b4;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oa:{"^":"b4;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ob:{"^":"b4;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oc:{"^":"b4;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
od:{"^":"b4;",
gm:function(a){return a.length},
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dg:{"^":"b4;",
gm:function(a){return a.length},
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
bX:function(a,b,c){return new Uint8Array(a.subarray(b,H.mt(b,c,a.length)))},
$isdg:1,
$isT:1,
"%":";Uint8Array"},
fw:{"^":"de+z;"},
fx:{"^":"fw+cu;"},
fy:{"^":"de+z;"},
fz:{"^":"fy+cu;"}}],["","",,P,{"^":"",
kJ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mH()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bA(new P.kL(z),1)).observe(y,{childList:true})
return new P.kK(z,y,x)}else if(self.setImmediate!=null)return P.mI()
return P.mJ()},
oJ:[function(a){self.scheduleImmediate(H.bA(new P.kM(H.f(a,{func:1,ret:-1})),0))},"$1","mH",4,0,11],
oK:[function(a){self.setImmediate(H.bA(new P.kN(H.f(a,{func:1,ret:-1})),0))},"$1","mI",4,0,11],
oL:[function(a){P.dp(C.q,H.f(a,{func:1,ret:-1}))},"$1","mJ",4,0,11],
dp:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a2(a.a,1000)
return P.lN(z<0?0:z,b)},
eT:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bq]})
z=C.d.a2(a.a,1000)
return P.lO(z<0?0:z,b)},
mD:function(a,b){if(H.ck(a,{func:1,args:[P.b,P.aD]}))return b.iu(a,null,P.b,P.aD)
if(H.ck(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.co(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mC:function(){var z,y
for(;z=$.by,z!=null;){$.bZ=null
y=z.b
$.by=y
if(y==null)$.bY=null
z.a.$0()}},
oT:[function(){$.dD=!0
try{P.mC()}finally{$.bZ=null
$.dD=!1
if($.by!=null)$.$get$dx().$1(P.fY())}},"$0","fY",0,0,3],
fT:function(a){var z=new P.fq(H.f(a,{func:1,ret:-1}))
if($.by==null){$.bY=z
$.by=z
if(!$.dD)$.$get$dx().$1(P.fY())}else{$.bY.b=z
$.bY=z}},
mG:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.by
if(z==null){P.fT(a)
$.bZ=$.bY
return}y=new P.fq(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.by=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
no:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.V
if(C.j===y){P.cK(null,null,C.j,a)
return}y.toString
P.cK(null,null,y,H.f(y.co(a),z))},
eS:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.V
if(y===C.j){y.toString
return P.dp(a,b)}return P.dp(a,H.f(y.co(b),z))},
jU:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bq]}
H.f(b,z)
y=$.V
if(y===C.j){y.toString
return P.eT(a,b)}x=y.dP(b,P.bq)
$.V.toString
return P.eT(a,H.f(x,z))},
cJ:function(a,b,c,d,e){var z={}
z.a=d
P.mG(new P.mE(z,e))},
fP:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fQ:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mF:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cK:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.hK(d,-1)
P.fT(d)},
kL:{"^":"n:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kK:{"^":"n:46;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kM:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kN:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fF:{"^":"b;a,0b,c",
eZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bA(new P.lQ(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bA(new P.lP(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbq:1,
q:{
lN:function(a,b){var z=new P.fF(!0,0)
z.eZ(a,b)
return z},
lO:function(a,b){var z=new P.fF(!1,0)
z.f_(a,b)
return z}}},
lQ:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lP:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eQ(w,x)}z.c=y
this.d.$1(z)}},
bw:{"^":"b;0a,b,c,d,e,$ti",
ib:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.f(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
i2:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.ck(z,{func:1,args:[P.b,P.aD]}))return H.dJ(w.iC(z,a.a,a.b,null,y,P.aD),x)
else return H.dJ(w.cX(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b0:{"^":"b;dF:a<,b,0h1:c<,$ti",
eC:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mD(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b0(0,$.V,[c])
w=b==null?1:3
this.dh(new P.bw(x,w,a,b,[z,c]))
return x},
iH:function(a,b){return this.eC(a,null,b)},
dh:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbw")
this.c=a}else{if(z===2){y=H.h(this.c,"$isb0")
z=y.a
if(z<4){y.dh(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cK(null,null,z,H.f(new P.l1(this,a),{func:1,ret:-1}))}},
dA:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbw")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isb0")
y=u.a
if(y<4){u.dA(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cK(null,null,y,H.f(new P.l6(z,this),{func:1,ret:-1}))}},
cd:function(){var z=H.h(this.c,"$isbw")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dk:function(a){var z,y,x,w
z=H.y(this,0)
H.dJ(a,{futureOr:1,type:z})
y=this.$ti
x=H.c0(a,"$isbH",y,"$asbH")
if(x){z=H.c0(a,"$isb0",y,null)
if(z)P.ft(a,this)
else P.l2(a,this)}else{w=this.cd()
H.A(a,z)
this.a=4
this.c=a
P.bU(this,w)}},
c0:[function(a,b){var z
H.h(b,"$isaD")
z=this.cd()
this.a=8
this.c=new P.ar(a,b)
P.bU(this,z)},function(a){return this.c0(a,null)},"iN","$2","$1","gf7",4,2,38],
$isbH:1,
q:{
l2:function(a,b){var z,y,x
b.a=1
try{a.eC(new P.l3(b),new P.l4(b),null)}catch(x){z=H.aA(x)
y=H.bC(x)
P.no(new P.l5(b,z,y))}},
ft:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isb0")
if(z>=4){y=b.cd()
b.a=a.a
b.c=a.c
P.bU(b,y)}else{y=H.h(b.c,"$isbw")
b.a=2
b.c=a
a.dA(y)}},
bU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isar")
y=y.b
u=v.a
t=v.b
y.toString
P.cJ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bU(z.a,b)}y=z.a
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
if(p){H.h(r,"$isar")
y=y.b
u=r.a
t=r.b
y.toString
P.cJ(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.l9(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l8(x,b,r).$0()}else if((y&2)!==0)new P.l7(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.K(y).$isbH){if(y.a>=4){n=H.h(t.c,"$isbw")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ft(y,t)
return}}m=b.b
n=H.h(m.c,"$isbw")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isar")
m.a=8
m.c=u}z.a=m
y=m}}}},
l1:{"^":"n:0;a,b",
$0:function(){P.bU(this.a,this.b)}},
l6:{"^":"n:0;a,b",
$0:function(){P.bU(this.b,this.a.a)}},
l3:{"^":"n:16;a",
$1:function(a){var z=this.a
z.a=0
z.dk(a)}},
l4:{"^":"n:41;a",
$2:function(a,b){this.a.c0(a,H.h(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
l5:{"^":"n:0;a,b,c",
$0:function(){this.a.c0(this.b,this.c)}},
l9:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eB(H.f(w.d,{func:1}),null)}catch(v){y=H.aA(v)
x=H.bC(v)
if(this.d){w=H.h(this.a.a.c,"$isar").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isar")
else u.b=new P.ar(y,x)
u.a=!0
return}if(!!J.K(z).$isbH){if(z instanceof P.b0&&z.gdF()>=4){if(z.gdF()===8){w=this.b
w.b=H.h(z.gh1(),"$isar")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iH(new P.la(t),null)
w.a=!1}}},
la:{"^":"n:53;a",
$1:function(a){return this.a}},
l8:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cX(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aA(t)
y=H.bC(t)
x=this.a
x.b=new P.ar(z,y)
x.a=!0}}},
l7:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isar")
w=this.c
if(w.ib(z)&&w.e!=null){v=this.b
v.b=w.i2(z)
v.a=!1}}catch(u){y=H.aA(u)
x=H.bC(u)
w=H.h(this.a.a.c,"$isar")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ar(y,x)
s.a=!0}}},
fq:{"^":"b;a,0b"},
dk:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b0(0,$.V,[P.m])
z.a=0
this.i9(new P.jI(z,this),!0,new P.jJ(z,y),y.gf7())
return y}},
jI:{"^":"n;a,b",
$1:function(a){H.A(a,H.ay(this.b,"dk",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.ay(this.b,"dk",0)]}}},
jJ:{"^":"n:0;a,b",
$0:function(){this.b.dk(this.a.a)}},
eN:{"^":"b;$ti"},
jH:{"^":"b;"},
bq:{"^":"b;"},
ar:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa7:1},
mh:{"^":"b;",$isoI:1},
mE:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eB()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
lv:{"^":"mh;",
iD:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.V){a.$0()
return}P.fP(null,null,this,a,-1)}catch(x){z=H.aA(x)
y=H.bC(x)
P.cJ(null,null,this,z,H.h(y,"$isaD"))}},
iE:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.V){a.$1(b)
return}P.fQ(null,null,this,a,b,-1,c)}catch(x){z=H.aA(x)
y=H.bC(x)
P.cJ(null,null,this,z,H.h(y,"$isaD"))}},
hK:function(a,b){return new P.lx(this,H.f(a,{func:1,ret:b}),b)},
co:function(a){return new P.lw(this,H.f(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.ly(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eB:function(a,b){H.f(a,{func:1,ret:b})
if($.V===C.j)return a.$0()
return P.fP(null,null,this,a,b)},
cX:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.V===C.j)return a.$1(b)
return P.fQ(null,null,this,a,b,c,d)},
iC:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.V===C.j)return a.$2(b,c)
return P.mF(null,null,this,a,b,c,d,e,f)},
iu:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lx:{"^":"n;a,b,c",
$0:function(){return this.a.eB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lw:{"^":"n:3;a,b",
$0:function(){return this.a.iD(this.b)}},
ly:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.iE(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ip:function(a,b,c,d,e){return new H.b3(0,0,[d,e])},
iq:function(a,b,c){H.c1(a)
return H.v(H.mY(a,new H.b3(0,0,[b,c])),"$ises",[b,c],"$ases")},
et:function(a,b){return new H.b3(0,0,[a,b])},
it:function(a,b,c,d){return new P.lh(0,0,[d])},
ia:function(a,b,c){var z,y
if(P.dE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.mB(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eO(b,H.ha(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d4:function(a,b,c){var z,y,x
if(P.dE(a))return b+"..."+c
z=new P.au(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.eO(x.gaN(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaN()+c
y=z.gaN()
return y.charCodeAt(0)==0?y:y},
dE:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
mB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga3(a)
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
ir:function(a,b,c){var z=P.ip(null,null,null,b,c)
a.L(0,new P.is(z,b,c))
return z},
da:function(a){var z,y,x
z={}
if(P.dE(a))return"{...}"
y=new P.au("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaN()+"{"
z.a=!0
J.dT(a,new P.iz(z,y))
z=y
z.a=z.gaN()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaN()
return z.charCodeAt(0)==0?z:z},
lh:{"^":"lb;a,0b,0c,0d,0e,0f,r,$ti",
ga3:function(a){return P.fv(this,this.r,H.y(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dz()
this.b=z}return this.di(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dz()
this.c=y}return this.di(y,b)}else return this.f0(0,b)},
f0:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dz()
this.d=z}y=this.dl(b)
x=z[y]
if(x==null)z[y]=[this.c_(b)]
else{if(this.dt(x,b)>=0)return!1
x.push(this.c_(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dB(this.c,b)
else return this.fT(0,b)},
fT:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ff(z,b)
x=this.dt(y,b)
if(x<0)return!1
this.dH(y.splice(x,1)[0])
return!0},
di:function(a,b){H.A(b,H.y(this,0))
if(H.h(a[b],"$isdy")!=null)return!1
a[b]=this.c_(b)
return!0},
dB:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdy")
if(z==null)return!1
this.dH(z)
delete a[b]
return!0},
dj:function(){this.r=this.r+1&67108863},
c_:function(a){var z,y
z=new P.dy(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dj()
return z},
dH:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dj()},
dl:function(a){return J.c2(a)&0x3ffffff},
ff:function(a,b){return a[this.dl(b)]},
dt:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
q:{
dz:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dy:{"^":"b;a,0b,0c"},
li:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
fv:function(a,b,c){var z=new P.li(a,b,[c])
z.c=a.e
return z}}},
lb:{"^":"jm;"},
is:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))}},
cw:{"^":"lj;",$isi:1,$isc:1},
z:{"^":"b;$ti",
ga3:function(a){return new H.eu(a,this.gm(a),0,[H.b6(this,a,"z",0)])},
I:function(a,b){return this.i(a,b)},
iJ:function(a,b){var z,y,x
z=H.e([],[H.b6(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
cZ:function(a){return this.iJ(a,!0)},
aC:function(a,b,c,d){var z
H.A(d,H.b6(this,a,"z",0))
P.aV(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.d4(a,"[","]")}},
iy:{"^":"an;"},
iz:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
an:{"^":"b;$ti",
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b6(this,a,"an",0),H.b6(this,a,"an",1)]})
for(z=J.bE(this.gar(a));z.G();){y=z.gP(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.aq(this.gar(a))},
j:function(a){return P.da(a)},
$isL:1},
lV:{"^":"b;$ti",
l:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
iA:{"^":"b;$ti",
i:function(a,b){return J.dS(this.a,b)},
l:function(a,b,c){J.cR(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
L:function(a,b){J.dT(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.aq(this.a)},
j:function(a){return J.ac(this.a)},
$isL:1},
fe:{"^":"lW;a,$ti"},
jo:{"^":"b;$ti",
j:function(a){return P.d4(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dV("index"))
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=P.fv(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
jm:{"^":"jo;"},
lj:{"^":"b+z;"},
lW:{"^":"iA+lV;$ti"}}],["","",,P,{"^":"",hx:{"^":"c4;a",
ie:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aV(c,d,b.length,null,null,null)
z=$.$get$fr()
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
if(q<=d){p=H.cN(C.b.H(b,s))
o=H.cN(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.au("")
w.a+=C.b.v(b,x,y)
w.a+=H.cz(r)
x=s
continue}}throw H.a(P.Z("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dY(b,u,d,v,t,k)
else{j=C.d.bp(k-1,4)+1
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b3(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dY(b,u,d,v,t,i)
else{j=C.d.bp(i,4)
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b3(b,d,d,j===2?"==":"=")}return b},
$asc4:function(){return[[P.c,P.m],P.j]},
q:{
dY:function(a,b,c,d,e,f){if(C.d.bp(f,4)!==0)throw H.a(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Z("Invalid base64 padding, more than two '=' characters",a,b))}}},hy:{"^":"bG;a",
$asbG:function(){return[[P.c,P.m],P.j]}},c4:{"^":"b;$ti"},bG:{"^":"jH;$ti"},hY:{"^":"c4;",
$asc4:function(){return[P.j,[P.c,P.m]]}},ko:{"^":"hY;a",
ghV:function(){return C.F}},kv:{"^":"bG;",
ba:function(a,b,c){var z,y,x,w
z=a.length
P.aV(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mg(0,0,x)
if(w.fd(a,b,z)!==z)w.dJ(J.ho(a,z-1),0)
return C.V.bX(x,0,w.b)},
cu:function(a){return this.ba(a,0,null)},
$asbG:function(){return[P.j,[P.c,P.m]]}},mg:{"^":"b;a,b,c",
dJ:function(a,b){var z,y,x,w,v
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
fd:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dJ(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kp:{"^":"bG;a",
ba:function(a,b,c){var z,y,x,w,v
H.v(a,"$isc",[P.m],"$asc")
z=P.kq(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.aV(b,c,y,null,null,null)
x=new P.au("")
w=new P.md(!1,x,!0,0,0,0)
w.ba(a,b,y)
w.hZ(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.ba(a,0,null)},
$asbG:function(){return[[P.c,P.m],P.j]},
q:{
kq:function(a,b,c,d){H.v(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kr(!1,b,c,d)
return},
kr:function(a,b,c,d){var z,y,x
z=$.$get$fj()
if(z==null)return
y=0===c
if(y&&!0)return P.du(z,b)
x=b.length
d=P.aV(c,d,x,null,null,null)
if(y&&d===x)return P.du(z,b)
return P.du(z,b.subarray(c,d))},
du:function(a,b){if(P.kt(b))return
return P.ku(a,b)},
ku:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aA(y)}return},
kt:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ks:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aA(y)}return}}},md:{"^":"b;a,b,c,d,e,f",
hZ:function(a,b,c){var z
H.v(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.Z("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mf(c)
v=new P.me(this,b,c,a)
$label0$0:for(u=J.ax(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bU()
if((r&192)!==128){q=P.Z("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.Z("Overlong encoding of 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Z("Character outside valid Unicode range: 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cz(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ai()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.J()
if(r<0){m=P.Z("Negative UTF-8 code unit: -0x"+C.d.bk(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Z("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mf:{"^":"n:52;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.ax(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bU()
if((w&127)!==w)return x-b}return z-b}},me:{"^":"n:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cg(this.d,a,b)}}}],["","",,P,{"^":"",
cm:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.j4(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Z(a,null,null))},
i_:function(a){var z=J.K(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bj(a)+"'"},
iu:function(a,b,c,d){var z,y
H.A(b,d)
z=J.ic(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
iv:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga3(a);x.G();)C.a.h(y,H.A(x.gP(x),c))
if(b)return y
return H.v(J.bI(y),"$isc",z,"$asc")},
cg:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbe",[z],"$asbe")
y=a.length
c=P.aV(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.J()
z=c<y}else z=!0
return H.eG(z?C.a.bX(a,b,c):a)}if(!!J.K(a).$isdg)return H.j6(a,b,P.aV(b,c,a.length,null,null,null))
return P.jK(a,b,c)},
jK:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a1(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.aq(a),null,null))
y=J.bE(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gP(y))}return H.eG(w)},
jd:function(a,b,c){return new H.ie(a,H.ig(a,!1,!0,!1))},
fg:function(){var z=H.iX()
if(z!=null)return P.kg(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
ct:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.i_(a)},
t:function(a){return new P.fs(a)},
iw:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dP:function(a){H.nm(a)},
kg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.ff(b>0||c<c?C.b.v(a,b,c):a,5,null).geE()
else if(y===32)return P.ff(C.b.v(a,z,c),0,null).geE()}x=new Array(8)
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
if(P.fR(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iL()
if(v>=b)if(P.fR(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.C()
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ac(a,"..",s)))n=r>s+2&&C.b.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ac(a,"file",b)){if(u<=b){if(!C.b.ac(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b3(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ac(a,"http",b)){if(x&&t+3===s&&C.b.ac(a,"80",t+1))if(b===0&&!0){a=C.b.b3(a,t,s,"")
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
else if(v===z&&C.b.ac(a,"https",b)){if(x&&t+4===s&&C.b.ac(a,"443",t+1))if(b===0&&!0){a=C.b.b3(a,t,s,"")
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
q-=b}return new P.lA(a,v,u,t,s,r,q,o)}return P.lX(a,b,c,v,u,t,s,r,q,o)},
fi:function(a,b){var z=P.j
return C.a.i_(H.e(a.split("&"),[z]),P.et(z,z),new P.kj(b),[P.L,P.j,P.j])},
ke:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kf(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cm(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.ai()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cm(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.ai()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kh(a)
y=new P.ki(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaE(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.ke(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aS(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mu:function(){var z,y,x,w,v
z=P.iw(22,new P.mw(),!0,P.T)
y=new P.mv(z)
x=new P.mx()
w=new P.my()
v=H.h(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isT"),"]",5)
v=H.h(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isT"),"az",21)
v=H.h(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fR:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isc",[P.m],"$asc")
z=$.$get$fS()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
ai:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&this.b===b.b},
aU:function(a,b){return C.d.aU(this.a,H.h(b,"$isai").a)},
gU:function(a){var z=this.a
return(z^C.d.aS(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hQ(H.j3(this))
y=P.c5(H.j1(this))
x=P.c5(H.iY(this))
w=P.c5(H.iZ(this))
v=P.c5(H.j0(this))
u=P.c5(H.j2(this))
t=P.hR(H.j_(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isam:1,
$asam:function(){return[P.ai]},
q:{
hQ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c5:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"a_;"},
"+double":0,
aI:{"^":"b;a",
k:function(a,b){return new P.aI(C.d.ah(this.a*b))},
J:function(a,b){return C.d.J(this.a,H.h(b,"$isaI").a)},
ai:function(a,b){return C.d.ai(this.a,H.h(b,"$isaI").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
aU:function(a,b){return C.d.aU(this.a,H.h(b,"$isaI").a)},
j:function(a){var z,y,x,w,v
z=new P.hV()
y=this.a
if(y<0)return"-"+new P.aI(0-y).j(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.hU().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isam:1,
$asam:function(){return[P.aI]},
q:{
ef:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hU:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hV:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"b;"},
eB:{"^":"a7;",
j:function(a){return"Throw of null."}},
aT:{"^":"a7;a,b,c,d",
gc2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc1:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc2()+y+x
if(!this.a)return w
v=this.gc1()
u=P.ct(this.b)
return w+v+": "+H.l(u)},
q:{
c3:function(a){return new P.aT(!1,null,null,a)},
co:function(a,b,c){return new P.aT(!0,a,b,c)},
dV:function(a){return new P.aT(!1,null,a,"Must not be null")}}},
cA:{"^":"aT;e,f,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cd:function(a,b,c){return new P.cA(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
i8:{"^":"aT;e,m:f>,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){if(J.hk(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
U:function(a,b,c,d,e){var z=H.E(e!=null?e:J.aq(b))
return new P.i8(b,z,!0,a,c,"Index out of range")}}},
kc:{"^":"a7;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
B:function(a){return new P.kc(a)}}},
k9:{"^":"a7;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ci:function(a){return new P.k9(a)}}},
jE:{"^":"a7;a",
j:function(a){return"Bad state: "+this.a}},
hI:{"^":"a7;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ct(z))+"."},
q:{
b9:function(a){return new P.hI(a)}}},
iT:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa7:1},
eL:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa7:1},
hP:{"^":"a7;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fs:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
i5:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
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
for(s=x;s<w.length;++s){r=C.b.Z(w,s)
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
Z:function(a,b,c){return new P.i5(a,b,c)}}},
m:{"^":"a_;"},
"+int":0,
i:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga3(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dV("index"))
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=this.ga3(this),y=0;z.G();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
j:function(a){return P.ia(this,"(",")")}},
d5:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
J:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;",$isam:1,
$asam:function(){return[P.a_]}},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bO(this)},
j:function(a){return"Instance of '"+H.bj(this)+"'"},
toString:function(){return this.j(this)}},
aD:{"^":"b;"},
j:{"^":"b;",$isam:1,
$asam:function(){return[P.j]},
$iseC:1},
"+String":0,
au:{"^":"b;aN:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isow:1,
q:{
eO:function(a,b,c){var z=J.bE(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.G())}else{a+=H.l(z.gP(z))
for(;z.G();)a=a+c+H.l(z.gP(z))}return a}}},
kj:{"^":"n:33;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isL",[z,z],"$asL")
H.O(b)
y=J.ax(b).em(b,"=")
if(y===-1){if(b!=="")J.cR(a,P.dB(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aH(b,y+1)
z=this.a
J.cR(a,P.dB(x,0,x.length,z,!0),P.dB(w,0,w.length,z,!0))}return a}},
kf:{"^":"n:34;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv4 address, "+a,this.a,b))}},
kh:{"^":"n:36;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
ki:{"^":"n:28;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cm(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.J()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cG:{"^":"b;bW:a<,b,c,d,ey:e>,f,r,0x,0y,0z,0Q,0ch",
geF:function(){return this.b},
gcH:function(a){var z=this.c
if(z==null)return""
if(C.b.ab(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbP:function(a){var z=this.d
if(z==null)return P.fH(this.a)
return z},
gcT:function(a){var z=this.f
return z==null?"":z},
geh:function(){var z=this.r
return z==null?"":z},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.j,null],"$asL")
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
g=P.dA(g,0,0,h)
return new P.cG(i,j,c,f,d,g,this.r)},
eA:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcU:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fe(P.fi(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gei:function(){return this.c!=null},
gel:function(){return this.f!=null},
gej:function(){return this.r!=null},
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdt){y=this.a
x=b.gbW()
if(y==null?x==null:y===x)if(this.c!=null===b.gei()){y=this.b
x=b.geF()
if(y==null?x==null:y===x){y=this.gcH(this)
x=z.gcH(b)
if(y==null?x==null:y===x){y=this.gbP(this)
x=z.gbP(b)
if(y==null?x==null:y===x)if(this.e===z.gey(b)){y=this.f
x=y==null
if(!x===b.gel()){if(x)y=""
if(y===z.gcT(b)){z=this.r
y=z==null
if(!y===b.gej()){if(y)z=""
z=z===b.geh()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.j(0))
this.z=z}return z},
$isdt:1,
q:{
cH:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fM().b
if(typeof b!=="string")H.r(H.a5(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.ay(c,"c4",0))
y=c.ghV().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cz(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lX:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m7(a,b,d)
else{if(d===b)P.bV(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m8(a,z,e-1):""
x=P.m1(a,e,f,!1)
if(typeof f!=="number")return f.C()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.m4(P.cm(C.b.v(a,w,g),new P.lY(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m2(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.J()
t=h<i?P.dA(a,h+1,i,null):null
return new P.cG(j,y,x,v,u,t,i<c?P.m0(a,i+1,c):null)},
fH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bV:function(a,b,c){throw H.a(P.Z(c,a,b))},
m4:function(a,b){if(a!=null&&a===P.fH(b))return
return a},
m1:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.K()
z=c-1
if(C.b.Z(a,z)!==93)P.bV(a,b,"Missing end `]` to match `[` in host")
P.fh(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.fh(a,b,c)
return"["+a+"]"}return P.ma(a,b,c)},
ma:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fO(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.au("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.au("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bV(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.au("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fI(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m7:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fK(C.b.H(a,b)))P.bV(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bV(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lZ(y?a.toLowerCase():a)},
lZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m8:function(a,b,c){return P.bW(a,b,c,C.R)},
m2:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bW(a,b,c,C.y):C.t.jp(d,new P.m3(),P.j).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ab(w,"/"))w="/"+w
return P.m9(w,e,f)},
m9:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ab(a,"/"))return P.mb(a,!z||c)
return P.mc(a)},
dA:function(a,b,c,d){var z,y
z={}
H.v(d,"$isL",[P.j,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c3("Both query and queryParameters specified"))
return P.bW(a,b,c,C.n)}if(d==null)return
y=new P.au("")
z.a=""
d.L(0,new P.m5(new P.m6(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m0:function(a,b,c){return P.bW(a,b,c,C.n)},
fO:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cN(y)
v=H.cN(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aS(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cz(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fI:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.hc(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cg(y,0,null)},
bW:function(a,b,c,d){var z=P.fN(a,b,c,H.v(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fN:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.J()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fO(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bV(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fI(v)}}if(w==null)w=new P.au("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.J()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fL:function(a){if(C.b.ab(a,"."))return!0
return C.b.em(a,"/.")!==-1},
mc:function(a){var z,y,x,w,v,u,t
if(!P.fL(a))return a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
mb:function(a,b){var z,y,x,w,v,u
if(!P.fL(a))return!b?P.fJ(a):a
z=H.e([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaE(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaE(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.l(z,0,P.fJ(z[0]))}return C.a.E(z,"/")},
fJ:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fK(J.hl(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aH(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m_:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c3("Invalid URL encoding"))}}return z},
dB:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dK(a)
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
else u=new H.a6(y.v(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c3("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c3("Truncated URI"))
C.a.h(u,P.m_(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isc",[P.m],"$asc")
return new P.kp(!1).cu(u)},
fK:function(a){var z=a|32
return 97<=z&&z<=122}}},
lY:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.C()
throw H.a(P.Z("Invalid port",this.a,z+1))}},
m3:{"^":"n:40;",
$1:function(a){return P.cH(C.T,a,C.k,!1)}},
m6:{"^":"n:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cH(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cH(C.p,b,C.k,!0))}}},
m5:{"^":"n:42;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bE(H.ha(b,"$isi")),y=this.a;z.G();)y.$2(a,H.O(z.gP(z)))}},
kd:{"^":"b;a,b,c",
geE:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.en(y,"?",z)
w=y.length
if(x>=0){v=P.bW(y,x+1,w,C.n)
w=x}else v=null
z=new P.kS(this,"data",null,null,null,P.bW(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
ff:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Z("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Z("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaE(z)
if(v!==44||x!==t+7||!C.b.ac(a,"base64",t+1))throw H.a(P.Z("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.ie(0,a,s,y)
else{r=P.fN(a,s,y,C.n,!0)
if(r!=null)a=C.b.b3(a,s,y,r)}return new P.kd(a,z,c)}}},
mw:{"^":"n:43;",
$1:function(a){return new Uint8Array(96)}},
mv:{"^":"n:45;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hq(z,0,96,b)
return z}},
mx:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
my:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lA:{"^":"b;a,b,c,d,e,f,r,x,0y",
gei:function(){return this.c>0},
gek:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.C()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gel:function(){var z=this.f
if(typeof z!=="number")return z.J()
return z<this.r},
gej:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.b.ab(this.a,"http")},
gdv:function(){return this.b===5&&C.b.ab(this.a,"https")},
gbW:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdu()){this.x="http"
z="http"}else if(this.gdv()){this.x="https"
z="https"}else if(z===4&&C.b.ab(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ab(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geF:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcH:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbP:function(a){var z
if(this.gek()){z=this.d
if(typeof z!=="number")return z.C()
return P.cm(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdu())return 80
if(this.gdv())return 443
return 0},
gey:function(a){return C.b.v(this.a,this.e,this.f)},
gcT:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.J()
return z<y?C.b.v(this.a,z+1,y):""},
geh:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aH(y,z+1):""},
gcU:function(){var z=this.f
if(typeof z!=="number")return z.J()
if(z>=this.r)return C.U
z=P.j
return new P.fe(P.fi(this.gcT(this),C.k),[z,z])},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.j,null],"$asL")
i=this.gbW()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gek()?this.gbP(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ab(d,"/"))d="/"+d
g=P.dA(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aH(y,x+1)
return new P.cG(i,j,c,f,d,g,b)},
eA:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdt)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdt:1},
kS:{"^":"cG;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
d_:function(a,b){var z=document.createElement("canvas")
return z},
hX:function(a){H.h(a,"$isae")
return"wheel"},
i9:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$isel")
try{J.hs(z,a)}catch(x){H.aA(x)}return z},
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fu:function(a,b,c,d){var z,y
z=W.cE(W.cE(W.cE(W.cE(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fV:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.j)return a
return z.dP(a,b)},
a8:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ny:{"^":"w;0m:length=","%":"AccessibleNodeList"},
nz:{"^":"a8;0a4:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nA:{"^":"a8;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"w;",$iscV:1,"%":";Blob"},
nG:{"^":"a8;0a4:type}","%":"HTMLButtonElement"},
cZ:{"^":"a8;",
bV:function(a,b,c){if(c!=null)return a.getContext(b,P.mL(c,null))
return a.getContext(b)},
eI:function(a,b){return this.bV(a,b,null)},
$iscZ:1,
"%":"HTMLCanvasElement"},
e2:{"^":"w;",$ise2:1,"%":"CanvasRenderingContext2D"},
nI:{"^":"P;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nK:{"^":"hO;0m:length=","%":"CSSPerspective"},
ba:{"^":"w;",$isba:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nL:{"^":"kR;0m:length=",
eJ:function(a,b){var z=a.getPropertyValue(this.f4(a,b))
return z==null?"":z},
f4:function(a,b){var z,y
z=$.$get$e7()
y=z[b]
if(typeof y==="string")return y
y=this.hd(a,b)
z[b]=y
return y},
hd:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hS()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gaq:function(a){return a.height},
gb_:function(a){return a.left},
gbg:function(a){return a.right},
gbm:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hN:{"^":"b;",
gb_:function(a){return this.eJ(a,"left")}},
e8:{"^":"w;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hO:{"^":"w;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nM:{"^":"e8;0m:length=","%":"CSSTransformValue"},
nN:{"^":"e8;0m:length=","%":"CSSUnparsedValue"},
nO:{"^":"w;0m:length=","%":"DataTransferItemList"},
nP:{"^":"w;",
j:function(a){return String(a)},
"%":"DOMException"},
nQ:{"^":"kU;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.v(c,"$isa9",[P.a_],"$asa9")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a9,P.a_]]},
$asz:function(){return[[P.a9,P.a_]]},
$isi:1,
$asi:function(){return[[P.a9,P.a_]]},
$isc:1,
$asc:function(){return[[P.a9,P.a_]]},
$asD:function(){return[[P.a9,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hT:{"^":"w;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gaq(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=J.b5(b)
return a.left===z.gb_(b)&&a.top===z.gbm(b)&&this.gat(a)===z.gat(b)&&this.gaq(a)===z.gaq(b)},
gU:function(a){return W.fu(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gaq:function(a){return a.height},
gb_:function(a){return a.left},
gbg:function(a){return a.right},
gbm:function(a){return a.top},
gat:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
nR:{"^":"kW;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nS:{"^":"w;0m:length=","%":"DOMTokenList"},
kQ:{"^":"cw;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.h(z[b],"$isa3")},
l:function(a,b,c){var z
H.E(b)
H.h(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga3:function(a){var z=this.cZ(this)
return new J.aB(z,z.length,0,[H.y(z,0)])},
aC:function(a,b,c,d){throw H.a(P.ci(null))},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
a3:{"^":"P;",
gct:function(a){return new W.kQ(a,a.children)},
gdS:function(a){return P.j9(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
j:function(a){return a.localName},
$isa3:1,
"%":";Element"},
nT:{"^":"a8;0a4:type}","%":"HTMLEmbedElement"},
ad:{"^":"w;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ae:{"^":"w;",
dK:["eM",function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(c!=null)this.f1(a,b,c,!1)}],
f1:function(a,b,c,d){return a.addEventListener(b,H.bA(H.f(c,{func:1,args:[W.ad]}),1),!1)},
$isae:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fA|fB|fD|fE"},
b2:{"^":"cV;",$isb2:1,"%":"File"},
eh:{"^":"l0;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isb2")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b2]},
$asz:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$iseh:1,
$asD:function(){return[W.b2]},
"%":"FileList"},
nU:{"^":"ae;0m:length=","%":"FileWriter"},
nV:{"^":"a8;0m:length=","%":"HTMLFormElement"},
bd:{"^":"w;",$isbd:1,"%":"Gamepad"},
nW:{"^":"w;0m:length=","%":"History"},
nX:{"^":"ld;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c6:{"^":"w;0dT:data=",$isc6:1,"%":"ImageData"},
ek:{"^":"a8;",$isek:1,"%":"HTMLImageElement"},
el:{"^":"a8;0a4:type}",$isel:1,"%":"HTMLInputElement"},
bJ:{"^":"dq;",$isbJ:1,"%":"KeyboardEvent"},
o1:{"^":"a8;0a4:type}","%":"HTMLLinkElement"},
o2:{"^":"w;",
j:function(a){return String(a)},
"%":"Location"},
o3:{"^":"w;0m:length=","%":"MediaList"},
o4:{"^":"ae;",
dK:function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.eM(a,b,c,!1)},
"%":"MessagePort"},
o5:{"^":"lk;",
i:function(a,b){return P.b1(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
gar:function(a){var z=H.e([],[P.j])
this.L(a,new W.iL(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iL:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o6:{"^":"ll;",
i:function(a,b){return P.b1(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
gar:function(a){var z=H.e([],[P.j])
this.L(a,new W.iM(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iM:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"w;",$isbh:1,"%":"MimeType"},
o7:{"^":"ln;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"MimeTypeArray"},
aC:{"^":"dq;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kP:{"^":"cw;a",
l:function(a,b,c){var z,y
H.E(b)
H.h(c,"$isP")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga3:function(a){var z=this.a.childNodes
return new W.ei(z,z.length,-1,[H.b6(C.W,z,"D",0)])},
aC:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asz:function(){return[W.P]},
$asi:function(){return[W.P]},
$asc:function(){return[W.P]}},
P:{"^":"ae;",
iy:function(a,b){var z,y
try{z=a.parentNode
J.hm(z,b,a)}catch(y){H.aA(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.eN(a):z},
fW:function(a,b,c){return a.replaceChild(b,c)},
$isP:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iQ:{"^":"lp;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"NodeList|RadioNodeList"},
of:{"^":"a8;0a4:type}","%":"HTMLOListElement"},
og:{"^":"a8;0a4:type}","%":"HTMLObjectElement"},
bi:{"^":"w;0m:length=",$isbi:1,"%":"Plugin"},
oj:{"^":"lt;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asz:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"PluginArray"},
ol:{"^":"w;0a4:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
om:{"^":"lz;",
i:function(a,b){return P.b1(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
gar:function(a){var z=H.e([],[P.j])
this.L(a,new W.jj(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jj:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
on:{"^":"a8;0a4:type}","%":"HTMLScriptElement"},
op:{"^":"a8;0m:length=","%":"HTMLSelectElement"},
bk:{"^":"ae;",$isbk:1,"%":"SourceBuffer"},
oq:{"^":"fB;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"SourceBufferList"},
or:{"^":"a8;0a4:type}","%":"HTMLSourceElement"},
bl:{"^":"w;",$isbl:1,"%":"SpeechGrammar"},
os:{"^":"lC;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbl")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asz:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asD:function(){return[W.bl]},
"%":"SpeechGrammarList"},
bm:{"^":"w;0m:length=",$isbm:1,"%":"SpeechRecognitionResult"},
ou:{"^":"lF;",
i:function(a,b){return a.getItem(H.O(b))},
l:function(a,b,c){a.setItem(b,H.O(c))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.e([],[P.j])
this.L(a,new W.jG(z))
return z},
gm:function(a){return a.length},
$asan:function(){return[P.j,P.j]},
$isL:1,
$asL:function(){return[P.j,P.j]},
"%":"Storage"},
jG:{"^":"n:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ox:{"^":"a8;0a4:type}","%":"HTMLStyleElement"},
bn:{"^":"w;",$isbn:1,"%":"CSSStyleSheet|StyleSheet"},
dl:{"^":"a8;",$isdl:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bo:{"^":"ae;",$isbo:1,"%":"TextTrack"},
bp:{"^":"ae;",$isbp:1,"%":"TextTrackCue|VTTCue"},
oA:{"^":"lM;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbp")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asD:function(){return[W.bp]},
"%":"TextTrackCueList"},
oB:{"^":"fE;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbo")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"TextTrackList"},
oC:{"^":"w;0m:length=","%":"TimeRanges"},
br:{"^":"w;",$isbr:1,"%":"Touch"},
bs:{"^":"dq;",$isbs:1,"%":"TouchEvent"},
oD:{"^":"lS;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbr")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asD:function(){return[W.br]},
"%":"TouchList"},
oE:{"^":"w;0m:length=","%":"TrackDefaultList"},
dq:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oG:{"^":"w;",
j:function(a){return String(a)},
"%":"URL"},
oH:{"^":"ae;0m:length=","%":"VideoTrackList"},
bT:{"^":"aC;",
ghS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbT:1,
"%":"WheelEvent"},
kI:{"^":"ae;",
fY:function(a,b){return a.requestAnimationFrame(H.bA(H.f(b,{func:1,ret:-1,args:[P.a_]}),1))},
fc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oM:{"^":"mj;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asz:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asD:function(){return[W.ba]},
"%":"CSSRuleList"},
oN:{"^":"hT;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=J.b5(b)
return a.left===z.gb_(b)&&a.top===z.gbm(b)&&a.width===z.gat(b)&&a.height===z.gaq(b)},
gU:function(a){return W.fu(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaq:function(a){return a.height},
gat:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oP:{"^":"ml;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asz:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"GamepadList"},
oQ:{"^":"mn;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asD:function(){return[W.P]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oR:{"^":"mp;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"SpeechRecognitionResultList"},
oS:{"^":"mr;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.h(c,"$isbn")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"StyleSheetList"},
kX:{"^":"dk;a,b,c,$ti",
i9:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
oO:{"^":"kX;a,b,c,$ti"},
kY:{"^":"eN;a,b,c,d,e,$ti",
hh:function(){var z=this.d
if(z!=null&&this.a<=0)J.hn(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fV(new W.kZ(c),W.ad)
z=new W.kY(0,a,b,z,!1,[e])
z.hh()
return z}}},
kZ:{"^":"n:8;a",
$1:function(a){return this.a.$1(H.h(a,"$isad"))}},
D:{"^":"b;$ti",
ga3:function(a){return new W.ei(a,this.gm(a),-1,[H.b6(this,a,"D",0)])},
aC:function(a,b,c,d){H.A(d,H.b6(this,a,"D",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ei:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dS(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kR:{"^":"w+hN;"},
kT:{"^":"w+z;"},
kU:{"^":"kT+D;"},
kV:{"^":"w+z;"},
kW:{"^":"kV+D;"},
l_:{"^":"w+z;"},
l0:{"^":"l_+D;"},
lc:{"^":"w+z;"},
ld:{"^":"lc+D;"},
lk:{"^":"w+an;"},
ll:{"^":"w+an;"},
lm:{"^":"w+z;"},
ln:{"^":"lm+D;"},
lo:{"^":"w+z;"},
lp:{"^":"lo+D;"},
ls:{"^":"w+z;"},
lt:{"^":"ls+D;"},
lz:{"^":"w+an;"},
fA:{"^":"ae+z;"},
fB:{"^":"fA+D;"},
lB:{"^":"w+z;"},
lC:{"^":"lB+D;"},
lF:{"^":"w+an;"},
lL:{"^":"w+z;"},
lM:{"^":"lL+D;"},
fD:{"^":"ae+z;"},
fE:{"^":"fD+D;"},
lR:{"^":"w+z;"},
lS:{"^":"lR+D;"},
mi:{"^":"w+z;"},
mj:{"^":"mi+D;"},
mk:{"^":"w+z;"},
ml:{"^":"mk+D;"},
mm:{"^":"w+z;"},
mn:{"^":"mm+D;"},
mo:{"^":"w+z;"},
mp:{"^":"mo+D;"},
mq:{"^":"w+z;"},
mr:{"^":"mq+D;"}}],["","",,P,{"^":"",
mO:function(a){var z,y
z=J.K(a)
if(!!z.$isc6){y=z.gdT(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fG(a.data,a.height,a.width)},
mN:function(a){if(a instanceof P.fG)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var z,y,x,w,v
if(a==null)return
z=P.et(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.O(y[w])
z.l(0,v,a[v])}return z},
mL:function(a,b){var z={}
a.L(0,new P.mM(z))
return z},
ee:function(){var z=$.ed
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.ed=z}return z},
hS:function(){var z,y
z=$.ea
if(z!=null)return z
y=$.eb
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.eb=y}if(y)z="-moz-"
else{y=$.ec
if(y==null){y=!P.ee()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.ec=y}if(y)z="-ms-"
else z=P.ee()?"-o-":"-webkit-"}$.ea=z
return z},
lI:{"^":"b;",
ef:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d0:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isai)return new Date(a.a)
if(!!y.$isjc)throw H.a(P.ci("structured clone of RegExp"))
if(!!y.$isb2)return a
if(!!y.$iscV)return a
if(!!y.$iseh)return a
if(!!y.$isc6)return a
if(!!y.$isez||!!y.$isdf)return a
if(!!y.$isL){x=this.ef(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.L(a,new P.lK(z,this))
return z.a}if(!!y.$isc){x=this.ef(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hP(a,x)}throw H.a(P.ci("structured clone of other type"))},
hP:function(a,b){var z,y,x,w
z=J.ax(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.d0(z.i(a,w)))
return x}},
lK:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d0(b)}},
fG:{"^":"b;dT:a>,b,c",$isc6:1},
mM:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lJ:{"^":"lI;a,b"},
i2:{"^":"cw;a,b",
gbs:function(){var z,y,x
z=this.b
y=H.ay(z,"z",0)
x=W.a3
return new H.iB(new H.kG(z,H.f(new P.i3(),{func:1,ret:P.ah,args:[y]}),[y]),H.f(new P.i4(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.E(b)
H.h(c,"$isa3")
z=this.gbs()
J.hr(z.b.$1(J.cT(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aC:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.aq(this.gbs().a)},
i:function(a,b){var z=this.gbs()
return z.b.$1(J.cT(z.a,b))},
ga3:function(a){var z=P.iv(this.gbs(),!1,W.a3)
return new J.aB(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
i3:{"^":"n:48;",
$1:function(a){return!!J.K(H.h(a,"$isP")).$isa3}},
i4:{"^":"n:49;",
$1:function(a){return H.k(H.h(a,"$isP"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
le:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lu:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.A(z+this.c,H.y(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.A(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c0(b,"$isa9",[P.a_],"$asa9")
if(!z)return!1
z=this.a
y=J.b5(b)
x=y.gb_(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbm(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.C()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.c2(z)
x=this.b
w=J.c2(x)
if(typeof z!=="number")return z.C()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.A(x+this.d,v)
return P.le(P.cF(P.cF(P.cF(P.cF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"lu;b_:a>,bm:b>,at:c>,aq:d>,$ti",q:{
j9:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.J()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.J()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bK:{"^":"w;",$isbK:1,"%":"SVGLength"},o0:{"^":"lg;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asD:function(){return[P.bK]},
"%":"SVGLengthList"},bN:{"^":"w;",$isbN:1,"%":"SVGNumber"},oe:{"^":"lr;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbN")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asD:function(){return[P.bN]},
"%":"SVGNumberList"},ok:{"^":"w;0m:length=","%":"SVGPointList"},oo:{"^":"eP;0a4:type}","%":"SVGScriptElement"},ov:{"^":"lH;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},oy:{"^":"eP;0a4:type}","%":"SVGStyleElement"},eP:{"^":"a3;",
gct:function(a){return new P.i2(a,new W.kP(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bP:{"^":"w;",$isbP:1,"%":"SVGTransform"},oF:{"^":"lU;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.h(c,"$isbP")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asD:function(){return[P.bP]},
"%":"SVGTransformList"},lf:{"^":"w+z;"},lg:{"^":"lf+D;"},lq:{"^":"w+z;"},lr:{"^":"lq+D;"},lG:{"^":"w+z;"},lH:{"^":"lG+D;"},lT:{"^":"w+z;"},lU:{"^":"lT+D;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjZ:1}}],["","",,P,{"^":"",nB:{"^":"w;0m:length=","%":"AudioBuffer"},dX:{"^":"ae;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nC:{"^":"kO;",
i:function(a,b){return P.b1(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
gar:function(a){var z=H.e([],[P.j])
this.L(a,new P.hv(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"AudioParamMap"},hv:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hw:{"^":"dX;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nD:{"^":"ae;0m:length=","%":"AudioTrackList"},hz:{"^":"ae;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nE:{"^":"dX;0a4:type}","%":"BiquadFilterNode"},oh:{"^":"hz;0m:length=","%":"OfflineAudioContext"},oi:{"^":"hw;0a4:type}","%":"Oscillator|OscillatorNode"},kO:{"^":"w+an;"}}],["","",,P,{"^":"",di:{"^":"w;",
iG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mN(g))
return}if(!!z.$isek)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c3("Incorrect number or type of arguments"))},
iF:function(a,b,c,d,e,f,g){return this.iG(a,b,c,d,e,f,g,null,null,null)},
$isdi:1,
"%":"WebGLRenderingContext"},jL:{"^":"w;",$isjL:1,"%":"WebGLTexture"},k7:{"^":"w;",$isk7:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ot:{"^":"lE;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.b1(a.item(b))},
l:function(a,b,c){H.E(b)
H.h(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$asz:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isc:1,
$asc:function(){return[[P.L,,,]]},
$asD:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},lD:{"^":"w+z;"},lE:{"^":"lD+D;"}}],["","",,O,{"^":"",as:{"^":"b;0a,0b,0c,0d,$ti",
bq:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
d5:function(a,b,c){var z=H.ay(this,"as",0)
H.f(b,{func:1,ret:P.ah,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
b5:function(a,b){return this.d5(a,null,b)},
dz:function(a){var z
H.v(a,"$isi",[H.ay(this,"as",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dc:function(a,b){var z
H.v(b,"$isi",[H.ay(this,"as",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga3:function(a){var z=this.a
return new J.aB(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"as",0)
H.A(b,z)
z=[z]
if(this.dz(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dc(x,H.e([b],z))}},
ck:function(a,b){var z,y
H.v(b,"$isi",[H.ay(this,"as",0)],"$asi")
if(this.dz(b)){z=this.a
y=z.length
C.a.ck(z,b)
this.dc(y,b)}},
$isi:1,
q:{
d0:function(a){var z=new O.as([a])
z.bq(a)
return z}}},dc:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
eV:function(a){var z=this.b
if(!(z==null))z.B(a)},
aI:function(){return this.eV(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gaE(z)
else return V.bg()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.bg())
else C.a.h(z,a)
this.aI()},
aF:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",cU:{"^":"b;"},aU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa6:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.f(this.gex(),{func:1,ret:-1,args:[D.q]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.f(this.gex(),{func:1,ret:-1,args:[D.q]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eJ])
w.b=!0
this.b2(w)}},
an:function(a,b){var z
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,b)},
a9:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga0(z))
z.aI()
a.cS(this.f)
z=a.dy
y=(z&&C.a).gaE(z)
if(y!=null&&this.d!=null)y.ez(a,this)
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();)z.d.a9(a)
a.cR()
a.dx.aF()},
gt:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
b2:function(a){var z=this.z
if(!(z==null))z.B(a)},
V:function(){return this.b2(null)},
ij:[function(a){H.h(a,"$isq")
this.e=null
this.b2(a)},function(){return this.ij(null)},"ju","$1","$0","gex",0,2,1],
ih:[function(a){this.b2(H.h(a,"$isq"))},function(){return this.ih(null)},"js","$1","$0","gew",0,2,1],
jr:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aU],"$asi")
for(z=b.length,y=this.gew(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bb()
t.a=H.e([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.V()},"$2","gig",8,0,9],
jt:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aU],"$asi")
for(z=b.length,y=this.gew(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bb()
t.a=H.e([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.f(y,x)
C.a.F(t.a,y)}}this.V()},"$2","gii",8,0,9],
$isaM:1,
q:{
eg:function(a,b,c,d,e,f){var z,y
z=new E.aU()
z.a=d
z.b=!0
y=O.d0(E.aU)
z.y=y
y.b5(z.gig(),z.gii())
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
z.sa6(0,e)
return z}}},je:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eS:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ai(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dc()
y=[V.aJ]
z.a=H.e([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.q]}
v=H.f(new E.jg(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dc()
z.a=H.e([],y)
v=z.gt()
v.toString
x=H.f(new E.jh(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dc()
z.a=H.e([],y)
y=z.gt()
y.toString
w=H.f(new E.ji(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.ch])
this.dy=z
C.a.h(z,null)
this.fr=new H.b3(0,0,[P.j,A.dj])},
git:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.k(0,y.ga0(y))
this.z=y
z=y}return z},
cS:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaE(z):a;(z&&C.a).h(z,y)},
cR:function(){var z=this.dy
if(z.length>1)z.pop()},
dN:function(a){var z=a.b
if(z.length===0)throw H.a(P.t("May not cache a shader with no name."))
if(this.fr.bz(0,z))throw H.a(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.l(0,z,a)},
q:{
jf:function(a,b){var z=new E.je(a,b)
z.eS(a,b)
return z}}},jg:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.z=null
z.ch=null}},jh:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ji:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isq")
z=this.a
z.ch=null
z.cx=null}},jR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
eX:[function(a){var z
H.h(a,"$isq")
z=this.x
if(!(z==null))z.B(a)
this.iA()},function(){return this.eX(null)},"eW","$1","$0","gdd",0,2,1],
gi1:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.ef(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ai(z,!1)
return x/y},
dC:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.e.cG(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cG(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eS(C.q,this.giz())},
iA:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jT(this),{func:1,ret:-1,args:[P.a_]})
C.B.fc(z)
C.B.fY(z,W.fV(y,P.a_))}},"$0","giz",0,0,3],
ix:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dC()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.ef(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aI()
w=x.db
C.a.sm(w.a,0)
w.aI()
w=x.dx
C.a.sm(w.a,0)
w.aI()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a9(this.e)}}catch(v){z=H.aA(v)
y=H.bC(v)
P.dP("Error: "+H.l(z))
P.dP("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jS:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscZ)return E.eR(a,!0,!0,!0,!1)
y=W.d_(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.eR(y,!0,!0,!0,!1)
w.a=a
return w},
eR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jR()
y=P.iq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bV(a,"webgl",y)
x=H.h(x==null?C.l.bV(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.r(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jf(x,a)
w=new T.jM(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kk(a)
v=new X.ii()
v.c=new X.aL(!1,!1,!1)
v.d=P.it(null,null,null,P.m)
w.b=v
v=new X.iN(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ix(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jW(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eN,P.b]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.f(w.gfw(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.f(w.gfB(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.f(w.gfs(),q),!1,r))
v=w.z
p=W.bJ
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.f(w.gfD(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.f(w.gfC(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.f(w.gfG(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.f(w.gfI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.f(w.gfH(),s),!1,t))
p=w.z
o=W.bT;(p&&C.a).h(p,W.a2(a,H.O(W.hX(a)),H.f(w.gfJ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.f(w.gfz(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.f(w.gfA(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.f(w.gfK(),q),!1,r))
r=w.z
q=W.bs
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.f(w.gfS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.f(w.gfQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.f(w.gfR(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ai(Date.now(),!1)
z.ch=0
z.dC()
return z}}},jT:{"^":"n:31;a",
$1:function(a){var z
H.hc(a)
z=this.a
if(z.z){z.z=!1
z.ix()}}}}],["","",,Z,{"^":"",fo:{"^":"b;a,b",q:{
dw:function(a,b,c){var z
H.v(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bx(c)),35044)
a.bindBuffer(b,null)
return new Z.fo(b,z)}}},e0:{"^":"cU;a,b,c,d,e",
a_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aA(y)
x=P.t('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fp:{"^":"b;a",$isnF:1},cY:{"^":"b;a,0b,c,d",
aD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a_(a)},
aG:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a9:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isoz:1},cv:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bj(this.c)+"'")+"]"}},bu:{"^":"b;a",
gd7:function(a){var z,y
z=this.a
y=(z&$.$get$aF().a)!==0?3:0
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$bR().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=4
if((z&$.$get$bv().a)!==0)++y
return(z&$.$get$aW().a)!==0?y+4:y},
hJ:function(a){var z,y,x
z=$.$get$aF()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fn()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bu))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.j])
y=this.a
if((y&$.$get$aF().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bR().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
q:{
aw:function(a){return new Z.bu(a)}}}}],["","",,D,{"^":"",e3:{"^":"b;"},bb:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.q(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.i0(z))
return x!==0},
hT:function(){return this.B(null)},
iB:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
as:function(a){return this.iB(a,!0,!1)},
q:{
I:function(){var z=new D.bb()
z.a=H.e([],[{func:1,ret:-1,args:[D.q]}])
z.c=0
return z}}},i0:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.q]})
z=this.a.a
z.b
a.$1(z)}},q:{"^":"b;a,0b"},c7:{"^":"q;c,d,a,0b,$ti"},c8:{"^":"q;c,d,a,0b,$ti"},H:{"^":"q;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e1:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
q:{"^":"nH<"}},eq:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eq))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},er:{"^":"q;c,a,0b"},ii:{"^":"b;0a,0b,0c,0d",
iq:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.B(y)},
il:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.B(y)}},ev:{"^":"cy;x,y,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.C(0,new V.M(x*w,v*u))
u=this.a.gaT()
s=new X.bL(a,new V.M(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cQ:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.aw(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eL()
if(typeof z!=="number")return z.bU()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.aw(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.aw(a,b))
return!0},
ir:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dd(new V.X(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.B(w)
return!0},
fF:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.ev(c,a,this.a.gaT(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.M(0,0)}},aL:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aL))return!1
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
return z+(this.c?"Shift+":"")}},bL:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},iN:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gaT()
x=new X.bL(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cQ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.c3(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eL()
if(typeof z!=="number")return z.bU()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.c3(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.c3(a,b,!1))
return!0},
is:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dd(new V.X(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.B(x)
return!0},
gdV:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gbT:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
gev:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},dd:{"^":"cy;x,c,d,e,a,0b"},cy:{"^":"q;"},eW:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},jW:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.M],"$asc")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gaT()
w=new X.eW(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ip:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.B(this.aw(a,!0))
return!0},
im:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.B(this.aw(a,!0))
return!0},
io:function(a){var z
H.v(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.B(this.aw(a,!1))
return!0}},kk:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaT:function(){var z=this.a
return V.eI(0,0,(z&&C.l).gdS(z).c,C.l.gdS(z).d)},
dq:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eq(z,new X.aL(y,a.altKey,a.shiftKey))},
aR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
cj:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
ay:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.M(y-w,x-v)},
b6:function(a){return new V.X(a.movementX,a.movementY)},
cc:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.e.ah(u.pageX)
C.e.ah(u.pageY)
s=z.left
C.e.ah(u.pageX)
C.a.h(y,new V.M(t-s,C.e.ah(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e1(z,new X.aL(y,a.altKey,a.shiftKey))},
c6:function(a){var z,y,x,w,v,u
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
j2:[function(a){this.f=!0},"$1","gfB",4,0,8],
iW:[function(a){this.f=!1},"$1","gfs",4,0,8],
j_:[function(a){H.h(a,"$isaC")
if(this.f&&this.c6(a))a.preventDefault()},"$1","gfw",4,0,4],
j4:[function(a){var z
H.h(a,"$isbJ")
if(!this.f)return
z=this.dq(a)
if(this.b.iq(z))a.preventDefault()},"$1","gfD",4,0,21],
j3:[function(a){var z
H.h(a,"$isbJ")
if(!this.f)return
z=this.dq(a)
if(this.b.il(z))a.preventDefault()},"$1","gfC",4,0,21],
j6:[function(a){var z,y,x,w
H.h(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aR(a)
if(this.x){y=this.au(a)
x=this.b6(a)
if(this.d.cQ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ay(a)
if(this.c.cQ(y,w))a.preventDefault()},"$1","gfG",4,0,4],
j8:[function(a){var z,y,x
H.h(a,"$isaC")
this.aR(a)
z=this.au(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfI",4,0,4],
j1:[function(a){var z,y,x
H.h(a,"$isaC")
if(!this.c6(a)){this.aR(a)
z=this.au(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfA",4,0,4],
j7:[function(a){var z,y,x
H.h(a,"$isaC")
this.aR(a)
z=this.au(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfH",4,0,4],
j0:[function(a){var z,y,x
H.h(a,"$isaC")
if(!this.c6(a)){this.aR(a)
z=this.au(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfz",4,0,4],
j9:[function(a){var z,y
H.h(a,"$isbT")
this.aR(a)
z=new V.X((a&&C.A).ghR(a),C.A.ghS(a)).p(0,180)
if(this.x){if(this.d.ir(z))a.preventDefault()
return}if(this.r)return
y=this.ay(a)
if(this.c.is(z,y))a.preventDefault()},"$1","gfJ",4,0,44],
ja:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ay(this.y)
this.d.fF(w,v,x)}},"$1","gfK",4,0,8],
ji:[function(a){var z
H.h(a,"$isbs")
this.a.focus()
this.f=!0
this.cj(a)
z=this.cc(a)
if(this.e.ip(z))a.preventDefault()},"$1","gfS",4,0,13],
jg:[function(a){var z
H.h(a,"$isbs")
this.cj(a)
z=this.cc(a)
if(this.e.im(z))a.preventDefault()},"$1","gfQ",4,0,13],
jh:[function(a){var z
H.h(a,"$isbs")
this.cj(a)
z=this.cc(a)
if(this.e.io(z))a.preventDefault()},"$1","gfR",4,0,13]}}],["","",,D,{"^":"",cs:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
aJ:[function(a){var z
H.h(a,"$isq")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aJ(null)},"iM","$1","$0","geY",0,2,1],
$isa4:1,
$isaM:1},a4:{"^":"b;",$isaM:1},ij:{"^":"as;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
aJ:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fE:[function(a){var z
H.h(a,"$isq")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fE(null)},"j5","$1","$0","gdw",0,2,1],
jb:[function(a){var z,y,x
H.v(a,"$isi",[D.a4],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f8(x))return!1}return!0},"$1","gfL",4,0,37],
iT:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdw(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.h(b[u],"$isa4")
if(t instanceof D.cs)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c7(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfo",8,0,22],
jd:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdw(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.h(b[u],"$isa4")
if(t instanceof D.cs)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.F(s.a,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfN",8,0,22],
f8:function(a){var z=C.a.b9(this.e,a)
return z},
$asi:function(){return[D.a4]},
$asas:function(){return[D.a4]}},iW:{"^":"b;",$isa4:1,$isaM:1},jD:{"^":"b;",$isa4:1,$isaM:1},jO:{"^":"b;",$isa4:1,$isaM:1},jP:{"^":"b;",$isa4:1,$isaM:1},jQ:{"^":"b;",$isa4:1,$isaM:1}}],["","",,V,{"^":"",
nJ:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iK",8,0,35],
nx:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bp(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.e.eD($.p.$2(a,0)?0:a,b),c+b+1)},
bB:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.u],"$asc")
z=H.e([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.l(z,u,C.b.ag(z[u],x))}return z},
dO:function(a,b){return C.e.iI(Math.pow(b,C.I.cG(Math.log(H.mK(a))/Math.log(b))))},
a0:{"^":"b;a,b,c",
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
return new V.a0(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
al:{"^":"b;a,b,c,d",
cZ:function(a){return H.e([this.a,this.b,this.c,this.d],[P.u])},
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
return new V.al(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cx:{"^":"b;a,b,c,d,e,f,r,x,y",
aa:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscx")
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
return new V.cx(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cx))return!1
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
z=[P.u]
y=V.bB(H.e([this.a,this.d,this.r],z),3,0)
x=V.bB(H.e([this.b,this.e,this.x],z),3,0)
w=V.bB(H.e([this.c,this.f,this.y],z),3,0)
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
aJ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aa:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
cK:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bg()
a3=1/a2
a4=-w
a5=-i
return V.aK((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isaJ")
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
return V.aK(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.x(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.S(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
eg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bB(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bB(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bB(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bB(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
M:function(){return this.eg("",3,0)},
D:function(a){return this.eg(a,3,0)},
q:{
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bg:function(){return V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ey:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.w(c)))
y=b.az(z)
x=y.p(0,Math.sqrt(y.w(y)))
w=z.az(x)
v=new V.x(a.a,a.b,a.c)
return V.aK(x.a,w.a,z.a,x.O(0).w(v),x.b,w.b,z.b,w.O(0).w(v),x.c,w.c,z.c,z.O(0).w(v),0,0,0,1)}}},
M:{"^":"b;a,b",
C:function(a,b){return new V.M(this.a+b.a,this.b+b.b)},
K:function(a,b){return new V.M(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.M(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.M(0,0)
return new V.M(this.a/b,this.b/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
S:{"^":"b;a,b,c",
C:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.S(0,0,0)
return new V.S(this.a/b,this.b/b,this.c/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aN:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aN(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eH:{"^":"b;a,b,c,d",
ga8:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eH))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
q:{
eI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eH(a,b,c,d)}}},
X:{"^":"b;a,b",
eq:[function(a){return Math.sqrt(this.w(this))},"$0","gm",1,0,14],
w:function(a){var z,y,x,w
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
x:{"^":"b;a,b,c",
eq:[function(a){return Math.sqrt(this.w(this))},"$0","gm",1,0,14],
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.x(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
az:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.x(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.x(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.x(0,0,0)
return new V.x(this.a/b,this.b/b,this.c/b)},
ep:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.x))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bQ:{"^":"b;a,b,c,d",
eq:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bQ(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bQ(0,0,0,0)
return new V.bQ(this.a/b,this.b/b,this.c/b,this.d/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hG:{"^":"e3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bZ:function(a){var z=V.nx(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.B(a)},
sd1:function(a,b){},
scM:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bZ(z)}z=new D.H("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.R(z)}},
scO:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bZ(z)}z=new D.H("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.R(z)}},
sX:function(a,b){var z,y
b=this.bZ(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.u])
z.b=!0
this.R(z)}},
scN:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.u])
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
z=new D.H("velocity",x,a,this,[P.u])
z.b=!0
this.R(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.u])
z.b=!0
this.R(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sX(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
q:{
d1:function(){var z=new U.hG()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e5:{"^":"aj;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
b4:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.D("          ")},
q:{
e6:function(a){var z=new U.e5()
z.a=a
return z}}},ej:{"^":"as;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
R:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.B(a)},function(){return this.R(null)},"ak","$1","$0","gaK",0,2,1],
iS:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfn",8,0,23],
jc:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.F(t.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfM",8,0,23],
b4:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aB(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.b4(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bg():x
z=this.e
if(!(z==null))z.as(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.aj]},
$asas:function(){return[U.aj]},
$isaj:1},aj:{"^":"e3;"},kl:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
R:[function(a){var z
H.h(a,"$isq")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.R(null)},"ak","$1","$0","gaK",0,2,1],
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdV()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc7(),y)
C.a.h(z.a,x)
x=this.a.c.gev()
x.toString
z=H.f(this.gc8(),y)
C.a.h(x.a,z)
z=this.a.c.gbT()
z.toString
y=H.f(this.gc9(),y)
C.a.h(z.a,y)
return!0},
fj:[function(a){H.h(a,"$isq")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc7",4,0,2],
fk:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbL")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.w(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.X(y.a,y.b).k(0,2).p(0,z.ga8())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.X(x.a,x.b).k(0,2).p(0,z.ga8())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sX(0,-v*u+t)
this.b.sS(0)
y=y.K(0,a.z)
this.Q=new V.X(y.a,y.b).k(0,2).p(0,z.ga8())}this.ak()},"$1","gc8",4,0,2],
fl:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.w(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sS(y*10*x)
this.ak()}},"$1","gc9",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aK(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaj:1},km:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
R:[function(a){var z
H.h(a,"$isq")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.R(null)},"ak","$1","$0","gaK",0,2,1],
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdV()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc7(),y)
C.a.h(z.a,x)
x=this.a.c.gev()
x.toString
z=H.f(this.gc8(),y)
C.a.h(x.a,z)
z=this.a.c.gbT()
z.toString
x=H.f(this.gc9(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.I()
x.f=z}x=H.f(this.gfg(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.gfh(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.I()
x.b=z}x=H.f(this.ghg(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.ghf(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.I()
x.c=z}y=H.f(this.ghe(),y)
C.a.h(z.a,y)
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.X(z,y)},
fj:[function(a){a=H.k(H.h(a,"$isq"),"$isbL")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc7",4,0,2],
fk:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbL")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.ao(new V.X(y.a,y.b).k(0,2).p(0,z.ga8()))
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
w=this.ao(new V.X(x.a,x.b).k(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sX(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).k(0,2).p(0,z.ga8()))}this.ak()},"$1","gc8",4,0,2],
fl:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
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
this.ak()}},"$1","gc9",4,0,2],
iP:[function(a){if(H.k(H.h(a,"$isq"),"$isev").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfg",4,0,2],
iQ:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$isbL")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.ao(new V.X(x.a,x.b).k(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sX(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).k(0,2).p(0,z.ga8()))
this.ak()},"$1","gfh",4,0,2],
jm:[function(a){H.h(a,"$isq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghg",4,0,2],
jl:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isq"),"$iseW")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.X(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.ao(new V.X(y.a,y.b).k(0,2).p(0,z.ga8()))
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
w=this.ao(new V.X(x.a,x.b).k(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sX(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).k(0,2).p(0,z.ga8()))}this.ak()},"$1","ghf",4,0,2],
jk:[function(a){var z,y,x
H.h(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
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
this.ak()}},"$1","ghe",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aK(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aK(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1},kn:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.B(a)},
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=H.f(this.gfm(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iR:[function(a){var z,y,x,w
H.h(a,"$isq")
if(!J.F(this.b,this.a.b.c))return
H.k(a,"$isdd")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.u])
z.b=!0
this.R(z)}},"$1","gfm",4,0,2],
b4:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aK(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaj:1}}],["","",,M,{"^":"",hH:{"^":"as;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a1:[function(a){var z
H.h(a,"$isq")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"de","$1","$0","gY",0,2,1],
je:[function(a,b){var z,y,x,w,v,u,t
z=M.aO
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfO",8,0,24],
jf:[function(a,b){var z,y,x,w,v,u,t
z=M.aO
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.F(t.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfP",8,0,24],
a9:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(!(y==null))y.a9(a)}this.e=!1},
$asi:function(){return[M.aO]},
$asas:function(){return[M.aO]},
$isaO:1},hM:{"^":"b;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a1:[function(a){var z
H.h(a,"$isq")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"de","$1","$0","gY",0,2,1],
sb8:function(a){var z,y,x
if(a==null)a=new X.i7()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cq])
z.b=!0
this.a1(z)}},
sbh:function(a,b){var z,y,x
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dm])
z.b=!0
this.a1(z)}},
sbi:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.ch])
z.b=!0
this.a1(z)}},
a9:function(a){a.cS(this.c)
this.b.a_(a)
this.a.a_(a)
this.d.an(0,a)
this.d.a9(a)
this.a.aG(a)
this.b.toString
a.cR()},
$isaO:1},hZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.h(a,"$isq")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a1(null)},"de","$1","$0","gY",0,2,1],
iY:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aU
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfu",8,0,9],
iZ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aU
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.f(x,w)
C.a.F(s.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfv",8,0,9],
sb8:function(a){var z,y,x
if(a==null)a=X.eD(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cq])
z.b=!0
this.a1(z)}},
sbh:function(a,b){var z,y,x
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dm])
z.b=!0
this.a1(z)}},
sbi:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.ch])
z.b=!0
this.a1(z)}},
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
a9:function(a){var z
a.cS(this.c)
this.b.a_(a)
this.a.a_(a)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();)z.d.a9(a)
this.a.toString
a.cy.aF()
a.db.aF()
this.b.toString
a.cR()},
$isaO:1},aO:{"^":"b;"}}],["","",,A,{"^":"",dW:{"^":"b;a,b,c"},hu:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ex:{"^":"dj;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aY,0aB,0aZ,0bA,0dW,0dX,0bB,0bC,0dY,0dZ,0bD,0bE,0e_,0e0,0bF,0e1,0e2,0bG,0e3,0e4,0bH,0bI,0bJ,0e5,0e6,0bK,0bL,0e7,0e8,0bM,0e9,0cA,0ea,0cB,0eb,0cC,0ec,0cD,0ed,0cE,0ee,0cF,a,b,0c,0d,0e,0f,0r",
eR:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.au("")
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
a1.hj(z)
a1.hq(z)
a1.hk(z)
a1.hy(z)
a1.hz(z)
a1.hs(z)
a1.hD(z)
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
z=new P.au("")
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
v.hn(z)
v.hi(z)
v.hl(z)
v.ho(z)
v.hw(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hu(z)
v.hv(z)}v.hr(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hm(z)
v.ht(z)
v.hx(z)
v.hA(z)
v.hB(z)
v.hC(z)
v.hp(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eo(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaQ")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaQ")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaQ")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaQ")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isds")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaQ")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaQ")
this.k3=H.e([],[A.aQ])
y=a1.aY
if(y>0){this.k2=H.h(this.r.n(0,"bendMatCount"),"$isR")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.r(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaQ"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isav")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isR")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isR")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isav")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isR")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isR")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.aY=H.k(this.r.n(0,"diffuseTxt"),"$isav")
this.aZ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isR")
break
case C.f:this.aB=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aZ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isR")
break}}y=a1.d
if(y!==C.c){this.bA=H.k(this.r.n(0,"invDiffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.dW=H.k(this.r.n(0,"invDiffuseTxt"),"$isav")
this.bB=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break
case C.f:this.dX=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bB=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a1.e
if(y!==C.c){this.bE=H.k(this.r.n(0,"shininess"),"$isY")
this.bC=H.k(this.r.n(0,"specularClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.dY=H.k(this.r.n(0,"specularTxt"),"$isav")
this.bD=H.k(this.r.n(0,"nullSpecularTxt"),"$isR")
break
case C.f:this.dZ=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bD=H.k(this.r.n(0,"nullSpecularTxt"),"$isR")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.h:this.e_=H.k(this.r.n(0,"bumpTxt"),"$isav")
this.bF=H.k(this.r.n(0,"nullBumpTxt"),"$isR")
break
case C.f:this.e0=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bF=H.k(this.r.n(0,"nullBumpTxt"),"$isR")
break}if(a1.dy){this.e1=H.k(this.r.n(0,"envSampler"),"$isao")
this.e2=H.k(this.r.n(0,"nullEnvTxt"),"$isR")
y=a1.r
if(y!==C.c){this.bG=H.k(this.r.n(0,"reflectClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.e3=H.k(this.r.n(0,"reflectTxt"),"$isav")
this.bH=H.k(this.r.n(0,"nullReflectTxt"),"$isR")
break
case C.f:this.e4=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bH=H.k(this.r.n(0,"nullReflectTxt"),"$isR")
break}}y=a1.x
if(y!==C.c){this.bI=H.k(this.r.n(0,"refraction"),"$isY")
this.bJ=H.k(this.r.n(0,"refractClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.h:this.e5=H.k(this.r.n(0,"refractTxt"),"$isav")
this.bK=H.k(this.r.n(0,"nullRefractTxt"),"$isR")
break
case C.f:this.e6=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bK=H.k(this.r.n(0,"nullRefractTxt"),"$isR")
break}}}y=a1.y
if(y!==C.c){this.bL=H.k(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.h:this.e7=H.k(this.r.n(0,"alphaTxt"),"$isav")
this.bM=H.k(this.r.n(0,"nullAlphaTxt"),"$isR")
break
case C.f:this.e8=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bM=H.k(this.r.n(0,"nullAlphaTxt"),"$isR")
break}}this.cA=H.e([],[A.f8])
this.cB=H.e([],[A.f9])
this.cC=H.e([],[A.fa])
this.cD=H.e([],[A.fb])
this.cE=H.e([],[A.fc])
this.cF=H.e([],[A.fd])
if(a1.k2){y=a1.z
if(y>0){this.e9=H.h(this.r.n(0,"dirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.cA;(x&&C.a).h(x,new A.f8(m,l,k))}}y=a1.Q
if(y>0){this.ea=H.h(this.r.n(0,"pntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isY")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.cB;(x&&C.a).h(x,new A.f9(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eb=H.h(this.r.n(0,"spotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.cC;(x&&C.a).h(x,new A.fa(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ec=H.h(this.r.n(0,"txtDirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isav")
x=this.cD;(x&&C.a).h(x,new A.fb(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ed=H.h(this.r.n(0,"txtPntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isds")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isR")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isao")
x=this.cE;(x&&C.a).h(x,new A.fc(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ee=H.h(this.r.n(0,"txtSpotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isN")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isav")
x=this.cF;(x&&C.a).h(x,new A.fd(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
al:function(a,b,c){b.a.uniform1i(b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.d6(c)
b.a.uniform1i(b.d,0)}},
q:{
iE:function(a,b){var z,y
z=a.aB
y=new A.ex(b,z)
y.da(b,z)
y.eR(a,b)
return y}}},iH:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aY,aB,aZ",
hj:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aY+"];\n"
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
hq:function(a){var z
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
hk:function(a){var z
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
hy:function(a){var z,y
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
hz:function(a){var z,y
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
hs:function(a){var z
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
hD:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aH(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hn:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
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
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hi:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
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
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hl:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
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
ho:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
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
hw:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
hr:function(a){var z,y
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
hu:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
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
hv:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
hm:function(a){var z,y
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
ht:function(a){var z,y
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
hx:function(a){var z,y
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
hA:function(a){var z,y,x
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
hB:function(a){var z,y,x
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
hC:function(a){var z,y,x
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
hp:function(a){var z
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
j:function(a){return this.aB}},f8:{"^":"b;a,b,c"},fb:{"^":"b;a,b,c,d,e,f,r,x"},f9:{"^":"b;a,b,c,d,e,f,r"},fc:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fa:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fd:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dj:{"^":"cU;",
da:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
eo:function(a,b,c){var z,y,x
this.c=this.dr(b,35633)
this.d=this.dr(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fZ(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.t("Failed to link shader: "+H.l(x)))}this.h9()
this.hb()},
a_:function(a){a.a.useProgram(this.e)
this.f.hU()},
dr:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fZ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h9:function(){var z,y,x,w,v,u
z=H.e([],[A.dW])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dW(y,v.name,u))}this.f=new A.hu(z)},
hb:function(){var z,y,x,w,v,u
z=H.e([],[A.af])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hQ(v.type,v.size,v.name,u))}this.r=new A.k6(z)},
aO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.R(z,y,b,c)
else return A.dr(z,y,b,a,c)},
f9:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.av(z,y,b,c)
else return A.dr(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dr(z,y,b,a,c)},
bu:function(a,b){return new P.fs(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hQ:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.k1(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.k4(this.a,this.e,c,d)
case 35667:return new A.k2(this.a,this.e,c,d)
case 35668:return new A.k3(this.a,this.e,c,d)
case 35669:return new A.k5(this.a,this.e,c,d)
case 35674:return new A.k8(this.a,this.e,c,d)
case 35675:return new A.ds(this.a,this.e,c,d)
case 35676:return new A.aQ(this.a,this.e,c,d)
case 35678:return this.f9(b,c,d)
case 35680:return this.fa(b,c,d)
case 35670:throw H.a(this.bu("BOOL",c))
case 35671:throw H.a(this.bu("BOOL_VEC2",c))
case 35672:throw H.a(this.bu("BOOL_VEC3",c))
case 35673:throw H.a(this.bu("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cr:{"^":"b;a,b",
j:function(a){return this.b}},eK:{"^":"dj;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},af:{"^":"b;"},k6:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.M()},
i0:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].j(0)+a
return x},
M:function(){return this.i0("\n")}},R:{"^":"af;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},k2:{"^":"af;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},k3:{"^":"af;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},k5:{"^":"af;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},k0:{"^":"af;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dr:function(a,b,c,d,e){var z=new A.k0(a,b,c,e)
z.f=d
z.e=P.iu(d,0,!1,P.m)
return z}}},Y:{"^":"af;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},k1:{"^":"af;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"af;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},k4:{"^":"af;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},k8:{"^":"af;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},ds:{"^":"af;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bx(H.v(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aQ:{"^":"af;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bx(H.v(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},av:{"^":"af;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"af;a,b,c,d",
d6:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dH:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
z=F.ce()
F.bX(z,b,c,d,a,1,0,0,1)
F.bX(z,b,c,d,a,0,1,0,3)
F.bX(z,b,c,d,a,0,0,1,2)
F.bX(z,b,c,d,a,-1,0,0,0)
F.bX(z,b,c,d,a,0,-1,0,0)
F.bX(z,b,c,d,a,0,0,-1,3)
z.ae()
return z},
cI:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bX:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.x(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.x(t+h,s+f,r+g)
z.b=q
p=new V.x(t-h,s-f,r-g)
z.c=p
o=new V.x(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cI(y)
k=F.cI(z.b)
j=F.cQ(d,e,new F.ms(z,F.cI(z.c),F.cI(z.d),k,l,c),b)
if(j!=null)a.b1(j)},
h1:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.u,args:[P.u]})
if(e<3)return
z=F.ce()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ab])
v=z.a
u=new V.x(0,0,y)
u=u.p(0,Math.sqrt(u.w(u)))
C.a.h(w,v.hG(new V.aN(a,-1,-1,-1),new V.al(1,1,1,1),new V.S(0,0,c),new V.x(0,0,y),new V.M(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.x(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bt(new V.aN(a,-1,-1,-1),null,new V.al(n,l,m,1),new V.S(r*p,q*p,c),new V.x(0,0,y),new V.M(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dL(w)
return z},
h_:function(a,b,c,d,e,f){return F.mQ(!0,c,d,new F.mP(a,f),e)},
mQ:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cQ(c,e,new F.mS(d),null)
if(z==null)return
z.ae()
z.bx()
if(b)z.b1(F.h1(3,!1,1,new F.mT(d),e))
z.b1(F.h1(1,!0,-1,new F.mU(d),e))
return z},
n8:function(a,b){var z=F.cQ(a,b,new F.n9(),null)
z.d.bS()
z.ae()
z.bx()
return z},
ag:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.w(b)))
z=b.a
y=b.b
x=b.c
w=F.bt(null,null,null,new V.S(z,y,x),b,null,null,null,0)
v=a.hW(w,new F.dv())
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
w.sa7(0,new V.al(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scY(new V.M(q,p<0?-p:p))
a.a.h(0,w)
return w},
W:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bv(0,b,d,c)
else{z=F.ag(a,b.r.C(0,c.r).k(0,0.5))
y=F.ag(a,c.r.C(0,d.r).k(0,0.5))
x=F.ag(a,d.r.C(0,b.r).k(0,0.5))
w=e-1
F.W(a,b,z,x,w)
F.W(a,z,c,y,w)
F.W(a,y,x,z,w)
F.W(a,x,y,d,w)}},
hg:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nr()
y=F.dH(a,null,new F.ns(z),c)
y.bx()
return y},
nu:function(a,b,c,d){return F.h0(c,a,d,b,new F.nv())},
n6:function(a,b,c,d,e,f){return F.h0(d,a,e,b,new F.n7(f,c))},
h0:function(a,b,c,d,e){var z=F.cQ(a,b,new F.mR(H.f(e,{func:1,ret:V.S,args:[P.u]}),d,b,c),null)
if(z==null)return
z.ae()
z.bx()
return z},
cQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.ce()
y=H.e([],[F.ab])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bt(null,null,new V.al(u,0,0,1),null,null,new V.M(w,1),null,null,0)
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
t=F.bt(null,null,new V.al(o,n,m,1),null,null,new V.M(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.hF(a+1,b+1,y)
return z},
ms:{"^":"n:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cL(z.b,b).cL(z.d.cL(z.c,b),c)
a.sX(0,new V.S(y.a,y.b,y.c))
a.sam(y.p(0,Math.sqrt(y.w(y))))
z=1-b
x=1-c
a.sdO(new V.aN(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mP:{"^":"n:17;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mS:{"^":"n:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sX(0,new V.S(y,u,w))
u=new V.x(y,u,w)
a.sam(u.p(0,Math.sqrt(u.w(u))))
a.sdO(new V.aN(1-c,2+c,-1,-1))}},
mT:{"^":"n:25;a",
$1:function(a){return this.a.$2(a,1)}},
mU:{"^":"n:25;a",
$1:function(a){return this.a.$2(1-a,0)}},
n9:{"^":"n:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.x(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.w(w)))
a.sX(0,new V.S(x.a,x.b,x.c))}},
nr:{"^":"n:17;",
$2:function(a,b){return 0}},
ns:{"^":"n:5;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.x(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.w(x))).k(0,1+z)
a.sX(0,new V.S(z.a,z.b,z.c))}},
nv:{"^":"n:26;",
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)}},
n7:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.S(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mR:{"^":"n:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dR(y.$1(z),x)
x=J.dR(y.$1(z+3.141592653589793/this.c),x).K(0,w)
x=new V.x(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.w(x)))
u=new V.x(1,0,0)
y=v.az(!v.u(0,u)?new V.x(0,0,1):u)
t=y.p(0,Math.sqrt(y.w(y)))
y=t.az(v)
u=y.p(0,Math.sqrt(y.w(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sX(0,w.C(0,new V.S(y.a-x.a,y.b-x.b,y.c-x.c)))}},
at:{"^":"b;0a,0b,0c,0d,0e",
aA:function(){if(!this.gbb()){C.a.F(this.a.a.d.b,this)
this.a.a.V()}this.ce()
this.cf()
this.fV()},
h6:function(a){this.a=a
C.a.h(a.d.b,this)},
h7:function(a){this.b=a
C.a.h(a.d.c,this)},
h8:function(a){this.c=a
C.a.h(a.d.d,this)},
ce:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
cf:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
fV:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
f3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.x(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.ep())return
return v.p(0,Math.sqrt(v.w(v)))},
f6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.x(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.w(z)))
z=w.K(0,y)
z=new V.x(z.a,z.b,z.c)
z=v.az(z.p(0,Math.sqrt(z.w(z))))
return z.p(0,Math.sqrt(z.w(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.f3()
if(z==null){z=this.f6()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
f2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.x(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.ep())return
return v.p(0,Math.sqrt(v.w(v)))},
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.x(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.w(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.K(0,u).k(0,l).C(0,u).K(0,x)
z=new V.x(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.w(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.w(z)))
z=k.az(m)
z=z.p(0,Math.sqrt(z.w(z))).az(k)
m=z.p(0,Math.sqrt(z.w(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.f2()
if(z==null){z=this.f5()
if(z==null)return!1}this.e=z
this.a.a.V()
return!0},
aM:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a face's vertex with a vertex attached to a different shape."))},
ghM:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z,y
if(this.gbb())return a+"disposed"
z=a+C.b.ag(J.ac(this.a.e),0)+", "+C.b.ag(J.ac(this.b.e),0)+", "+C.b.ag(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
M:function(){return this.D("")},
q:{
bc:function(a,b,c){var z,y,x
z=new F.at()
y=a.a
if(y==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.t("May not create a face with vertices attached to different shapes."))
z.h6(a)
z.h7(b)
z.h8(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
i1:{"^":"b;"},
jw:{"^":"i1;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d9:{"^":"b;0a,0b",
aA:function(){if(!this.gbb()){C.a.F(this.a.a.c.b,this)
this.a.a.V()}this.ce()
this.cf()},
ce:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
cf:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
aM:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a line's vertex with a vertex attached to a different shape."))},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){if(this.gbb())return a+"disposed"
return a+C.b.ag(J.ac(this.a.e),0)+", "+C.b.ag(J.ac(this.b.e),0)},
M:function(){return this.D("")}},
ik:{"^":"b;"},
k_:{"^":"ik;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dh:{"^":"b;0a",
aA:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.V()}this.fU()},
fU:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ag(J.ac(z.e),0)},
M:function(){return this.D("")}},
eJ:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hO())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dh()
if(r.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d9()
s=p.a
if(s==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.B(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bc(p,o,l)}z=this.e
if(!(z==null))z.as(0)},
ae:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ae()||!1
if(!this.a.ae())y=!1
z=this.e
if(!(z==null))z.as(0)
return y},
hX:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.b0(0,a,w))return w}return},
hW:function(a,b){return this.hX(a,b,0)},
fe:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.ab],"$asc")
H.v(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fX:function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[P.m],"$asc")
H.jC(b,J.mA(),H.y(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.d(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.d(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.r(P.t("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aM(w,a)
v=x.a
if(v!=null){C.a.F(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aM(w,a)
v=x.b
if(v!=null){C.a.F(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aM(w,a)
v=x.c
if(v!=null){C.a.F(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.B(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.r(P.t("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aM(w,a)
v=x.a
if(v!=null){C.a.F(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aM(w,a)
v=x.b
if(v!=null){C.a.F(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.B(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.r(P.t("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.r(P.t("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.F(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.B(null)}}x=this.a
v=x.c
if(y>=v.length)return H.d(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.r(P.t("May not remove a vertex without first making it empty."))
t.a=null
C.a.iv(v,y)
v=x.a.e
if(!(v==null))v.B(null)
x.b=!0}},
eu:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ab],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.fe(a,v,y,u,t)){s=b.b1(u)
if(s!=null){this.fX(s,t)
y-=t.length}}}this.a.A()
this.c.bS()
this.d.bS()
this.b.iw()
this.c.cV(new F.k_())
this.d.cV(new F.jw())
z=this.e
if(!(z==null))z.as(0)},
hI:function(a){this.eu(new F.dv(),new F.iR())},
bx:function(){return this.hI(null)},
dR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aF()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$bR().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
v=b.gd7(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.e0])
for(r=0,q=0;q<w;++q){p=b.hJ(q)
o=p.gd7(p)
C.a.l(s,q,new Z.e0(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].i8(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bx(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cY(new Z.fo(34962,j),s,b)
i.b=H.e([],[Z.cv])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.E(z,"\n")},
b2:function(a){var z=this.e
if(!(z==null))z.B(a)},
V:function(){return this.b2(null)},
q:{
ce:function(){var z,y
z=new F.eJ()
y=new F.kw(z)
y.b=!1
y.c=H.e([],[F.ab])
z.a=y
y=new F.jr(z)
y.b=H.e([],[F.dh])
z.b=y
y=new F.jq(z)
y.b=H.e([],[F.d9])
z.c=y
y=new F.jp(z)
y.b=H.e([],[F.at])
z.d=y
z.e=null
return z}}},
jp:{"^":"b;a,0b",
bv:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bc(b,c,d)},
dL:function(a){var z,y,x,w,v,u
H.v(a,"$isc",[F.ab],"$asc")
z=H.e([],[F.at])
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
C.a.h(z,F.bc(x,v,u))}}return z},
hF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.ab],"$asc")
z=H.e([],[F.at])
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
C.a.h(z,F.bc(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bc(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bc(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bc(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b0(0,v,t)){v.aA()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghM(x)
if(y)x.aA()}},
ae:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cq())x=!1
return x},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
jq:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b0(0,v,t)){v.aA()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aA()}},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.E(z,"\n")},
M:function(){return this.D("")}},
jr:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iw:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aA()}},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
ab:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bt(this.cx,x,u,z,y,w,v,a,t)},
hO:function(){return this.cv(null)},
sX:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.V()}},
scP:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.V()}},
sdQ:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.V()}},
scY:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.V()}},
sam:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.V()}},
sa7:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.V()}},
seG:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.V()}},
sdO:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.V()}},
i8:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aF())){z=this.f
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aY())){z=this.r
y=[P.u]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aX())){z=this.x
y=[P.u]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aZ())){z=this.y
y=[P.u]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$b_())){z=this.z
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bR())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bS())){z=this.Q
if(z==null)return H.e([1,1,1,1],[P.u])
else return z.cZ(0)}else if(z.u(a,$.$get$bv()))return H.e([this.ch],[P.u])
else if(z.u(a,$.$get$aW())){z=this.cx
y=[P.u]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.u])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.x(0,0,0)
this.d.L(0,new F.kF(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.x(0,0,0)
this.d.L(0,new F.kE(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
D:function(a){var z,y,x
z=H.e([],[P.j])
C.a.h(z,C.b.ag(J.ac(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
M:function(){return this.D("")},
q:{
bt:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ab()
y=new F.kD(z)
y.b=H.e([],[F.dh])
z.b=y
y=new F.kB(z)
x=[F.d9]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kx(z)
x=[F.at]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fl()
z.e=0
y=$.$get$aF()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aY().a)!==0?e:null
z.x=(x&$.$get$aX().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fm().a)!==0?c:null
z.ch=(x&$.$get$bv().a)!==0?i:0
z.cx=(x&$.$get$aW().a)!==0?a:null
return z}}},
kF:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isat")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
kE:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isat")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
kw:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
dM:function(a,b,c,d,e,f,g,h,i){var z=F.bt(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bw:function(a,b,c,d,e,f){return this.dM(a,null,b,c,null,d,e,f,0)},
hG:function(a,b,c,d,e,f){return this.dM(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ae:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cq()
return!0},
hL:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
this.A()
z=H.e([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
kx:{"^":"b;a,0b,0c,0d",
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
L:function(a,b){H.f(b,{func:1,ret:-1,args:[F.at]})
C.a.L(this.b,b)
C.a.L(this.c,new F.ky(this,b))
C.a.L(this.d,new F.kz(this,b))},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
ky:{"^":"n:10;a,b",
$1:function(a){H.h(a,"$isat")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kz:{"^":"n:10;a,b",
$1:function(a){var z
H.h(a,"$isat")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kB:{"^":"b;a,0b,0c",
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
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}},
kC:{"^":"b;"},
dv:{"^":"kC;",
b0:function(a,b,c){return J.F(b.f,c.f)}},
fk:{"^":"b;"},
kA:{"^":"fk;",
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a,"$isc",[F.ab],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.S(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.x(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.x(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.M(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.x(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bQ(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bQ(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bt(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sX(0,null)
else b.sX(0,x.p(0,y))
if(w==null)b.scP(null)
else b.scP(w.p(0,Math.sqrt(w.w(w))))
if(v==null)b.sdQ(null)
else b.sdQ(v.p(0,Math.sqrt(v.w(v))))
if(s<=0||r==null)b.scY(null)
else b.scY(r.p(0,s))
if(q<=0||p==null)b.sam(null)
else b.sam(p.p(0,q))
if(u<=0||t==null)b.sa7(0,null)
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
b.sa7(0,new V.al(f,e,d,z))}if(o<=0)b.seG(0,0)
else b.seG(0,n/o)
return b}},
iR:{"^":"fk;",
b1:function(a){var z,y,x,w
H.v(a,"$isc",[F.ab],"$asc")
z=new V.x(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.x(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.w(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].scP(z)
return}},
kD:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
M:function(){return this.D("")}}}],["","",,O,{"^":"",iD:{"^":"ch;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
T:[function(a){var z
H.h(a,"$isq")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.T(null)},"df","$1","$0","gaL",0,2,1],
h_:[function(a){H.h(a,"$isq")
this.a=null
this.T(a)},function(){return this.h_(null)},"jj","$1","$0","gfZ",0,2,1],
iU:[function(a,b){var z=V.aJ
z=new D.c7(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.T(z)},"$2","gfp",8,0,27],
iV:[function(a,b){var z=V.aJ
z=new D.c8(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.T(z)},"$2","gfq",8,0,27],
dm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aF()
if(c){z=$.$get$aY()
a6=new Z.bu(a6.a|z.a)}if(b){z=$.$get$aX()
a6=new Z.bu(a6.a|z.a)}if(a){z=$.$get$aZ()
a6=new Z.bu(a6.a|z.a)}if(a0){z=$.$get$b_()
a6=new Z.bu(a6.a|z.a)}if(a2){z=$.$get$aW()
a6=new Z.bu(a6.a|z.a)}return new A.iH(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.v(a,"$isc",[T.dn],"$asc")
if(b!=null)if(!C.a.b9(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.x(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d_(x)}}},
ez:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dm()
y=H.h(a.fr.i(0,z.aB),"$isex")
if(y==null){y=A.iE(z,a.a)
a.dN(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aZ
z=b.e
if(!(z instanceof Z.cY)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ae()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cr()
u.a.cr()
u=u.e
if(!(u==null))u.as(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hL()
t=t.e
if(!(t==null))t.as(0)}r=b.d.dR(new Z.fp(a.a),w)
r.aD($.$get$aF()).e=this.a.y.c
if(z)r.aD($.$get$aY()).e=this.a.Q.c
if(v)r.aD($.$get$aX()).e=this.a.z.c
if(x.rx)r.aD($.$get$aZ()).e=this.a.ch.c
if(u)r.aD($.$get$b_()).e=this.a.cx.c
if(x.x1)r.aD($.$get$aW()).e=this.a.cy.c
b.e=r}z=T.dn
q=H.e([],[z])
this.a.a_(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga0(u)
v=v.db
v.toString
v.aj(u.aa(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga0(u)
t=a.dx
t=u.k(0,t.ga0(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aj(u.aa(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.git()
t=a.dx
t=u.k(0,t.ga0(t))
a.ch=t
u=t}v=v.fr
v.toString
v.aj(u.aa(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.aj(u.aa(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.aj(u.aa(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.aj(C.t.aa(u,!0))}if(x.aY>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.u],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.d(t,o)
t=t[o]
u.toString
H.h(t,"$isaJ")
u=u.k3
if(o>=u.length)return H.d(u,o)
u=u[o]
n=new Float32Array(H.bx(H.v(t.aa(0,!0),"$isc",v,"$asc")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.W(q,this.f.d)
v=this.a
u=this.f.d
v.al(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.f.e)
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
case C.i:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.W(q,this.r.d)
v=this.a
u=this.r.d
v.al(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.r.e)
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
case C.i:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.W(q,this.x.d)
v=this.a
u=this.x.d
v.al(v.aY,v.aZ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.aB,v.aZ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.W(q,this.y.d)
v=this.a
u=this.y.d
v.al(v.dW,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.dX,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bC
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bE
u.a.uniform1f(u.d,s)
break
case C.h:this.W(q,this.z.d)
v=this.a
u=this.z.d
v.al(v.dY,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break
case C.f:this.W(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.dZ,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e9
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.d(t,l)
i=t[l]
t=m.d_(j.a)
s=t.a
h=t.b
g=t.c
g=t.p(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ea
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cB
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gd2(t)
g=t.gd3(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bn(j.gbf(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.ga7(j)
g=i.d
h=t.gbR()
s=t.gbo()
t=t.gby()
g.a.uniform3f(g.d,h,s,t)
t=j.gcl()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcm()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcn()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eb
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gd2(t)
g=t.gd3(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j).jq()
g=i.c
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=m.bn(j.gbf(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.ga7(j)
s=i.e
h=t.gbR()
g=t.gbo()
t=t.gby()
s.a.uniform3f(s.d,h,g,t)
t=j.gjo()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjn()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ec
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cD
if(l>=s.length)return H.d(s,l)
i=s[l]
s=j.gbj()
H.v(q,"$isc",t,"$asc")
if(!C.a.b9(q,s)){s.sc5(q.length)
C.a.h(q,s)}s=j.gcz(j)
h=i.d
g=s.gaV(s)
f=s.gaW(s)
s=s.gaX()
h.a.uniform3f(h.d,g,f,s)
s=j.gbT()
f=i.b
g=s.gaV(s)
h=s.gaW(s)
s=s.gaX()
f.a.uniform3f(f.d,g,h,s)
s=j.gbg(j)
h=i.c
g=s.gaV(s)
f=s.gaW(s)
s=s.gaX()
h.a.uniform3f(h.d,g,f,s)
s=m.d_(j.gcz(j))
f=s.a
g=s.b
h=s.c
h=s.p(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga7(j)
g=i.f
f=h.gbR()
s=h.gbo()
h=h.gby()
g.a.uniform3f(g.d,f,s,h)
h=j.gbj()
s=h.gbO(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbO(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gi3(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ed
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.y,u=v.length,t=[P.u],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cE
if(l>=h.length)return H.d(h,l)
i=h[l]
h=j.gbj()
H.v(q,"$isc",s,"$asc")
if(!C.a.b9(q,h)){h.sc5(q.length)
C.a.h(q,h)}e=m.k(0,j.ga0(j))
h=j.ga0(j).bn(new V.S(0,0,0))
g=i.b
f=h.gd2(h)
d=h.gd3(h)
h=h.gd4(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bn(new V.S(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cK(0)
d=i.d
n=new Float32Array(H.bx(H.v(new V.cx(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).aa(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.ga7(j)
h=i.e
f=d.gbR()
g=d.gbo()
d=d.gby()
h.a.uniform3f(h.d,f,g,d)
d=j.gbj()
h=d.gbO(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.giO()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc5())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcl()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcm()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcn()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ee
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cF
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbj()
H.v(q,"$isc",z,"$asc")
if(!C.a.b9(q,t)){t.sc5(q.length)
C.a.h(q,t)}t=j.gbf(j)
s=i.b
h=t.gd2(t)
g=t.gd3(t)
t=t.gd4(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j)
g=i.c
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=j.gbT()
s=i.d
h=t.gaV(t)
g=t.gaW(t)
t=t.gaX()
s.a.uniform3f(s.d,h,g,t)
t=j.gbg(j)
g=i.e
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=m.bn(j.gbf(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbj()
s=t.gbO(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbO(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gi3(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.ga7(j)
s=i.y
h=t.gbR()
g=t.gbo()
t=t.gby()
s.a.uniform3f(s.d,h,g,t)
t=j.gjv()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjw()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.h:this.W(q,this.Q.d)
z=this.a
v=this.Q.d
z.al(z.e_,z.bF,v)
break
case C.f:this.W(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.e0,z.bF,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga0(v).cK(0)
a.Q=v}z=z.fy
z.toString
z.aj(v.aa(0,!0))}if(x.dy){this.W(q,this.ch)
z=this.a
v=this.ch
z.ad(z.e1,z.e2,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.h:this.W(q,this.cx.d)
z=this.a
v=this.cx.d
z.al(z.e3,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.W(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.e4,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bJ
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bI
v.a.uniform1f(v.d,t)
break
case C.h:this.W(q,this.cy.d)
z=this.a
v=this.cy.d
z.al(z.e5,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break
case C.f:this.W(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.e6,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bL
z.a.uniform1f(z.d,u)
break
case C.h:this.W(q,this.db.d)
z=this.a
u=this.db.d
z.al(z.e7,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break
case C.f:this.W(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.e8,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a_(a)
z=b.e
z.a_(a)
z.a9(a)
z.aG(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dU()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dm().aB}},iF:{"^":"db;0f,a,b,0c,0d,0e",
h2:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.u])
z.b=!0
this.a.T(z)}},
aQ:function(){this.d9()
this.h2(1)}},db:{"^":"b;",
T:[function(a){this.a.T(H.h(a,"$isq"))},function(){return this.T(null)},"df","$1","$0","gaL",0,2,1],
aQ:["d9",function(){}],
h4:function(a){},
h5:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.f(this.gaL(),{func:1,ret:-1,args:[D.q]})
C.a.F(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.f(this.gaL(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H(this.b+".textureCube",x,this.e,this,[T.cB])
z.b=!0
this.a.T(z)}},
sam:function(a){var z=this.c
if(z!==C.f){if(z===C.c)this.aQ()
this.c=C.f
this.h4(null)
z=this.a
z.a=null
z.T(null)}this.h5(a)}},iG:{"^":"db;a,b,0c,0d,0e"},bf:{"^":"db;0f,a,b,0c,0d,0e",
dD:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.T(y)}},
aQ:["bY",function(){this.d9()
this.dD(new V.a0(1,1,1))}],
sa7:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aQ()
z=this.a
z.a=null
z.T(null)}this.dD(b)}},iI:{"^":"bf;0ch,0f,a,b,0c,0d,0e",
h3:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.T(z)}},
aQ:function(){this.bY()
this.h3(1)}},iJ:{"^":"bf;0ch,0f,a,b,0c,0d,0e",
cg:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.T(z)}},
aQ:function(){this.bY()
this.cg(100)}},jx:{"^":"ch;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
T:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.B(a)},function(){return this.T(null)},"df","$1","$0","gaL",0,2,1],
ez:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.i(0,"Skybox"),"$iseK")
if(z==null){y=a.a
z=new A.eK(y,"Skybox")
z.da(y,"Skybox")
z.eo(0,$.jz,$.jy)
z.x=z.f.i(0,"posAttr")
z.y=H.k(z.r.i(0,"fov"),"$isY")
z.z=H.k(z.r.i(0,"ratio"),"$isY")
z.Q=H.k(z.r.i(0,"boxClr"),"$isN")
z.ch=H.k(z.r.i(0,"boxTxt"),"$isao")
z.cx=H.k(z.r.i(0,"viewMat"),"$isaQ")
a.dN(z)}this.a=z}if(b.e==null){y=b.d.dR(new Z.fp(a.a),$.$get$aF())
y.aD($.$get$aF()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a_(a)}y=a.d
x=a.c
w=this.a
w.a_(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.d6(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga0(x).cK(0)
w=w.cx
w.toString
w.aj(x.aa(0,!0))
y=b.e
if(y instanceof Z.cY){y.a_(a)
y.a9(a)
y.aG(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dU()
y=this.c
if(y!=null)y.aG(a)}},ch:{"^":"b;"}}],["","",,T,{"^":"",dn:{"^":"cU;"},cB:{"^":"dn;0b,0c,0d,0e,a",
a_:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aG:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jM:{"^":"b;a,0b,0c,0d,0e",
es:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.cB(0)
r.b=s
r.c=!1
r.d=0
r.e=D.I()
this.aP(r,s,z,34069,!1,!1)
this.aP(r,s,w,34070,!1,!1)
this.aP(r,s,y,34071,!1,!1)
this.aP(r,s,v,34072,!1,!1)
this.aP(r,s,x,34073,!1,!1)
this.aP(r,s,u,34074,!1,!1)
return r},
ia:function(a,b){return this.es(a,b,!1,"")},
er:function(a){return this.es(a,".png",!1,"")},
aP:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ad
W.a2(z,"load",H.f(new T.jN(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
h0:function(a,b,c){var z,y,x,w
b=V.dO(b,2)
z=V.dO(a.width,2)
y=V.dO(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d_(null,null)
x.width=z
x.height=y
w=H.h(C.l.eI(x,"2d"),"$ise2")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mO(w.getImageData(0,0,x.width,x.height))}}},jN:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.h0(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.X.iF(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hT();++z.e}}}],["","",,V,{"^":"",ht:{"^":"b;",
bc:function(a,b){return!0},
j:function(a){return"all"},
$iscc:1},cc:{"^":"b;"},ew:{"^":"b;",
bc:["eP",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].bc(0,b))return!0
return!1}],
j:["d8",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$iscc:1},bM:{"^":"ew;0a",
bc:function(a,b){return!this.eP(0,b)},
j:function(a){return"!["+this.d8(0)+"]"}},jn:{"^":"b;0a",
eT:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.b3(0,0,[P.m,P.ah])
for(y=new H.eu(a,a.gm(a),0,[H.ay(a,"z",0)]);y.G();)z.l(0,y.d,!0)
this.a=z},
bc:function(a,b){return this.a.bz(0,b)},
j:function(a){var z=this.a
return P.cg(z.gar(z),0,null)},
$iscc:1,
q:{
aa:function(a){var z=new V.jn()
z.eT(a)
return z}}},eM:{"^":"b;a,b,0c,0d",
gic:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eX(this.a.N(0,b))
w.a=H.e([],[V.cc])
w.c=!1
C.a.h(this.c,w)
return w},
hY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.bc(0,a))return w}return},
j:function(a){return this.b}},eU:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hi(this.b,"\n","\\n")
y=H.hi(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eV:{"^":"b;a,b,0c",
j:function(a){return this.b}},jV:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eM(this,b)
z.c=H.e([],[V.eX])
this.a.l(0,b,z)}return z},
bl:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.eV(this,a)
y=P.j
z.c=new H.b3(0,0,[y,y])
this.b.l(0,a,z)}return z},
iK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eU])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cg(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.gic(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cg(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.eU(o==null?p.b:o,q,t)}++t}}}},eX:{"^":"ew;b,0c,0a",
j:function(a){return this.b.b+": "+this.d8(0)}}}],["","",,X,{"^":"",cq:{"^":"b;",$isaM:1},i6:{"^":"dm;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ax:function(a){var z=this.x
if(!(z==null))z.B(a)},
a_:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.e.ah(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.e.ah(w.b*x)
t=C.e.ah(w.c*y)
a.c=t
w=C.e.ah(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
d2:function(a,b,c,d,e,f,g){var z,y
z=new X.i6()
y=new V.al(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eI(0,0,1,1)
z.r=y
return z}}},i7:{"^":"b;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
a_:function(a){var z
a.cy.bQ(V.bg())
z=V.bg()
a.db.bQ(z)},
aG:function(a){a.cy.aF()
a.db.aF()},
$isaM:1,
$iscq:1},iU:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
ax:[function(a){var z
H.h(a,"$isq")
z=this.e
if(!(z==null))z.B(a)},function(){return this.ax(null)},"iX","$1","$0","gft",0,2,1],
a_:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bQ(V.aK(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eE
if(z==null){z=V.ey(new V.S(0,0,0),new V.x(0,1,0),new V.x(0,0,-1))
$.eE=z
r=z}else r=z
z=this.a
if(z!=null){q=z.b4(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bQ(r)},
aG:function(a){a.cy.aF()
a.db.aF()},
$isaM:1,
$iscq:1,
q:{
eD:function(a,b,c,d){var z,y,x,w
z=new X.iU()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.f(z.gft(),{func:1,ret:-1,args:[D.q]})
C.a.h(x.a,w)}x=new D.H("mover",y,z.a,z,[U.aj])
x.b=!0
z.ax(x)}x=z.b
if(!$.p.$2(x,b)){y=z.b
z.b=b
x=new D.H("fov",y,b,z,[P.u])
x.b=!0
z.ax(x)}x=z.c
if(!$.p.$2(x,d)){y=z.c
z.c=d
x=new D.H("near",y,d,z,[P.u])
x.b=!0
z.ax(x)}x=z.d
if(!$.p.$2(x,a)){y=z.d
z.d=a
x=new D.H("far",y,a,z,[P.u])
x.b=!0
z.ax(x)}return z}}},dm:{"^":"b;"}}],["","",,V,{"^":"",
np:function(a){P.jU(C.G,new V.nq(a))},
nq:{"^":"n:50;a",
$1:function(a){H.h(a,"$isbq")
P.dP(C.e.eD(this.a.gi1(),2)+" fps")}},
j7:{"^":"b;a,b,0c",
bv:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fg().gcU().i(0,H.l(z))
if(y==null)if(d){c.$0()
this.dI(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dU(this.c).h(0,v)
t=W.i9("radio")
t.checked=x
t.name=z
z=W.ad
W.a2(t,"change",H.f(new V.j8(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dU(this.c).h(0,w.createElement("br"))},
ap:function(a,b,c){return this.bv(a,b,c,!1)},
dI:function(a){var z,y,x,w,v
z=P.fg()
y=P.j
x=P.ir(z.gcU(),y,y)
x.l(0,this.a,a)
w=z.eA(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.lJ([],[]).d0(""),"",v)}},
j8:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dI(this.d)}}},
js:{"^":"b;0a,0b",
eU:function(a,b){var z,y,x,w,v,u,t
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
t=W.ad
W.a2(z,"scroll",H.f(new V.jv(x),{func:1,ret:-1,args:[t]}),!1,t)},
hH:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.j],"$asc")
this.ha()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iK(C.a.i7(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hh(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cH(C.S,s,C.k,!1)
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
hE:function(a){var z,y,x,w,v,u,t
H.v(a,"$isc",[P.j],"$asc")
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
x=H.h(w.insertCell(-1),"$isdl").style
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
t=H.h(w.insertCell(-1),"$isdl")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
ha:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jV()
y=P.j
z.a=new H.b3(0,0,[y,V.eM])
z.b=new H.b3(0,0,[y,V.eV])
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.aa(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bM()
w=[V.cc]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").E(0,"BoldEnd")
x=V.aa(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Italic")
x=V.aa(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").E(0,"Italic")
x=new V.bM()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").E(0,"ItalicEnd")
x=V.aa(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Code")
x=V.aa(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").E(0,"Code")
x=new V.bM()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a6("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").E(0,"CodeEnd")
x=V.aa(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"LinkHead")
x=V.aa(new H.a6("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").E(0,"LinkTail")
x=V.aa(new H.a6("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").E(0,"LinkEnd")
y=V.aa(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").E(0,"LinkHead")
y=new V.bM()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.aa(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bM()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.ht())
x=z.N(0,"Other").E(0,"Other")
y=new V.bM()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a6("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bl("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bl("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bl("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bl("Link")
x=z.N(0,"Other")
x.d=x.a.bl("Other")
this.b=z},
q:{
jt:function(a,b){var z=new V.js()
z.eU(a,!0)
return z}}},
jv:{"^":"n:15;a",
$1:function(a){P.eS(C.q,new V.ju(this.a))}},
ju:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.e.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,T,{"^":"",
hb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.jt("Test 017",!0)
y=W.d_(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.hH(H.e(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],x))
z.hE(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.jS(w,!0,!0,!0,!1)
u=E.eg(null,!0,null,"",null,null)
u.sa6(0,F.hg(8,null,8))
t=X.d2(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
z=new D.H("clearColor",!0,!1,t,[P.ah])
z.b=!0
t.ax(z)}s=v.f.ia("../resources/maskonaive",".jpg")
r=v.f.er("../resources/earthSpecular")
q=v.f.er("../resources/earthColor")
p=new O.iD()
z=O.d0(V.aJ)
p.e=z
z.b5(p.gfp(),p.gfq())
z=new O.bf(p,"emission")
z.c=C.c
z.f=new V.a0(0,0,0)
p.f=z
z=new O.bf(p,"ambient")
z.c=C.c
z.f=new V.a0(0,0,0)
p.r=z
z=new O.bf(p,"diffuse")
z.c=C.c
z.f=new V.a0(0,0,0)
p.x=z
z=new O.bf(p,"invDiffuse")
z.c=C.c
z.f=new V.a0(0,0,0)
p.y=z
z=new O.iJ(p,"specular")
z.c=C.c
z.f=new V.a0(0,0,0)
z.ch=100
p.z=z
z=new O.iG(p,"bump")
z.c=C.c
p.Q=z
p.ch=null
z=new O.bf(p,"reflect")
z.c=C.c
z.f=new V.a0(0,0,0)
p.cx=z
z=new O.iI(p,"refract")
z.c=C.c
z.f=new V.a0(0,0,0)
z.ch=1
p.cy=z
z=new O.iF(p,"alpha")
z.c=C.c
z.f=1
p.db=z
z=new D.ij()
z.bq(D.a4)
z.e=H.e([],[D.cs])
z.f=H.e([],[D.iW])
z.r=H.e([],[D.jD])
z.x=H.e([],[D.jO])
z.y=H.e([],[D.jP])
z.z=H.e([],[D.jQ])
z.Q=null
z.ch=null
z.d5(z.gfo(),z.gfL(),z.gfN())
p.dx=z
o=z.Q
if(o==null){o=D.I()
z.Q=o
z=o}else z=o
o={func:1,ret:-1,args:[D.q]}
n=H.f(p.gfZ(),o)
C.a.h(z.a,n)
n=p.dx
z=n.ch
if(z==null){z=D.I()
n.ch=z}n=H.f(p.gaL(),o)
C.a.h(z.a,n)
p.dy=null
z=p.dx
m=U.e6(V.ey(new V.S(0,0,0),new V.x(0,1,0),new V.x(-1,-1,-1)))
l=new V.a0(1,1,1)
k=new D.cs()
k.c=new V.a0(1,1,1)
k.a=new V.x(0,0,1)
j=k.b
k.b=m
m=m.gt()
m.toString
i=H.f(k.geY(),o)
C.a.h(m.a,i)
m=new D.H("mover",j,k.b,k,[U.aj])
m.b=!0
k.aJ(m)
if(!k.c.u(0,l)){j=k.c
k.c=l
m=new D.H("color",j,l,k,[V.a0])
m.b=!0
k.aJ(m)}z.h(0,k)
z=p.r
z.sa7(0,new V.a0(0.5,0.5,0.5))
z=p.x
z.sa7(0,new V.a0(0.5,0.5,0.5))
p.r.sam(q)
p.x.sam(q)
p.z.sam(r)
z=p.ch
if(z!==s){if(z!=null)C.a.F(z.e.a,n)
j=p.ch
p.ch=s
C.a.h(s.e.a,n)
z=new D.H("environment",j,p.ch,p,[T.cB])
z.b=!0
p.T(z)}p.cx.sam(r)
z=p.cx
z.sa7(0,new V.a0(0.5,0.5,0.5))
z=p.z
if(z.c===C.c){z.c=C.i
z.bY()
z.cg(100)
n=z.a
n.a=null
n.T(null)}z.cg(10)
h=new U.ej()
h.bq(U.aj)
h.b5(h.gfn(),h.gfM())
h.e=null
h.f=V.bg()
h.r=0
z=v.r
n=new U.km()
m=U.d1()
m.sd1(0,!0)
m.scM(6.283185307179586)
m.scO(0)
m.sX(0,0)
m.scN(100)
m.sS(0)
m.scw(0.5)
n.b=m
m=m.gt()
m.toString
k=H.f(n.gaK(),o)
C.a.h(m.a,k)
m=U.d1()
m.sd1(0,!0)
m.scM(6.283185307179586)
m.scO(0)
m.sX(0,0)
m.scN(100)
m.sS(0)
m.scw(0.5)
n.c=m
C.a.h(m.gt().a,k)
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
g=new X.aL(!1,!1,!1)
j=n.d
n.d=g
m=[X.aL]
k=new D.H("modifiers",j,g,n,m)
k.b=!0
n.R(k)
k=n.f
if(k!==!1){n.f=!1
k=new D.H("invertX",k,!1,n,[P.ah])
k.b=!0
n.R(k)}k=n.r
if(k!==!1){n.r=!1
k=new D.H("invertY",k,!1,n,[P.ah])
k.b=!0
n.R(k)}n.b7(z)
h.h(0,n)
z=v.r
n=new U.kl()
k=U.d1()
k.sd1(0,!0)
k.scM(6.283185307179586)
k.scO(0)
k.sX(0,0)
k.scN(100)
k.sS(0)
k.scw(0.2)
n.b=k
k=k.gt()
k.toString
i=H.f(n.gaK(),o)
C.a.h(k.a,i)
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
g=new X.aL(!0,!1,!1)
j=n.c
n.c=g
k=new D.H("modifiers",j,g,n,m)
k.b=!0
n.R(k)
n.b7(z)
h.h(0,n)
z=v.r
n=new U.kn()
n.c=0.01
n.d=0
n.e=0
g=new X.aL(!1,!1,!1)
n.b=g
m=new D.H("modifiers",null,g,n,m)
m.b=!0
n.R(m)
n.b7(z)
h.h(0,n)
h.h(0,U.e6(V.aK(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eD(2000,1.0471975511965976,h,0.1)
e=new M.hM()
e.sb8(null)
e.sbh(0,null)
e.sbi(null)
z=E.eg(null,!0,null,"",null,null)
d=F.ce()
n=d.a
m=new V.x(-1,-1,1)
m=m.p(0,Math.sqrt(m.w(m)))
c=n.bw(new V.aN(1,2,4,6),new V.al(1,0,0,1),new V.S(-1,-1,0),new V.M(0,1),m,null)
n=d.a
m=new V.x(1,-1,1)
m=m.p(0,Math.sqrt(m.w(m)))
b=n.bw(new V.aN(0,3,4,6),new V.al(0,0,1,1),new V.S(1,-1,0),new V.M(1,1),m,null)
n=d.a
m=new V.x(1,1,1)
m=m.p(0,Math.sqrt(m.w(m)))
a=n.bw(new V.aN(0,2,5,6),new V.al(0,1,0,1),new V.S(1,1,0),new V.M(1,0),m,null)
n=d.a
m=new V.x(-1,1,1)
m=m.p(0,Math.sqrt(m.w(m)))
a0=n.bw(new V.aN(0,2,4,7),new V.al(1,1,0,1),new V.S(-1,1,0),new V.M(0,0),m,null)
d.d.dL(H.e([c,b,a,a0],[F.ab]))
d.ae()
z.sa6(0,d)
e.d=z
e.e=null
z=new O.jx()
z.b=1.0471975511965976
j=z.c
z.c=s
n=s.e
m=H.f(z.gaL(),o)
C.a.h(n.a,m)
n=new D.H("boxTexture",j,z.c,z,[T.cB])
n.b=!0
z.T(n)
q=new V.a0(1,1,1)
if(!J.F(z.d,q)){j=z.d
z.d=q
n=new D.H("boxColor",j,q,z,[V.a0])
n.b=!0
z.T(n)}z.e=null
e.sbi(z)
e.sbh(0,t)
e.sb8(f)
a1=new M.hZ()
z=O.d0(E.aU)
a1.d=z
z.b5(a1.gfu(),a1.gfv())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a1.sb8(null)
a1.sbh(0,null)
a1.sbi(null)
a1.sb8(f)
a1.sbi(p)
a1.sbh(0,t)
a1.d.h(0,u)
z=M.aO
n=H.e([e,a1],[z])
m=new M.hH()
m.bq(z)
m.e=!1
m.f=null
m.b5(m.gfO(),m.gfP())
m.ck(0,n)
z=v.d
if(z!==m){if(z!=null){z=z.gt()
z.toString
n=H.f(v.gdd(),o)
C.a.F(z.a,n)}v.d=m
z=m.gt()
z.toString
o=H.f(v.gdd(),o)
C.a.h(z.a,o)
v.eW()}z=new V.j7("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.ap(0,"Cube",new T.nb(u))
z.ap(0,"Cuboid",new T.nc(u))
z.ap(0,"Cylinder",new T.nd(u))
z.ap(0,"Cone",new T.ne(u))
z.ap(0,"LatLonSphere",new T.nf(u))
z.ap(0,"IsoSphere",new T.ng(u))
z.bv(0,"Sphere",new T.nh(u),!0)
z.ap(0,"Toroid",new T.ni(u))
z.ap(0,"Knot",new T.nj(u))
V.np(v)},
nb:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.dH(1,null,null,1))}},
nc:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.dH(8,null,null,8))}},
nd:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.h_(1,!0,!0,1,40,1))}},
ne:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.h_(1,!0,!1,1,40,0))}},
nf:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.n8(10,20))}},
ng:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.ce()
y=Math.sqrt(5)/2+0.5
x=F.ag(z,new V.x(-1,y,0))
w=F.ag(z,new V.x(1,y,0))
v=-y
u=F.ag(z,new V.x(-1,v,0))
t=F.ag(z,new V.x(1,v,0))
s=F.ag(z,new V.x(0,-1,v))
r=F.ag(z,new V.x(0,1,v))
q=F.ag(z,new V.x(0,-1,y))
p=F.ag(z,new V.x(0,1,y))
o=F.ag(z,new V.x(y,0,1))
n=F.ag(z,new V.x(y,0,-1))
m=F.ag(z,new V.x(v,0,1))
l=F.ag(z,new V.x(v,0,-1))
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
z.eu(new F.dv(),new F.kA())
this.a.sa6(0,z)}},
nh:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.hg(6,null,6))}},
ni:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.nu(30,1,15,0.5))}},
nj:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.n6(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eo.prototype
return J.en.prototype}if(typeof a=="string")return J.ca.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.id.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.ax=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.cl=function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.h3=function(a){if(typeof a=="number")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cj.prototype
return a}
J.h4=function(a){if(typeof a=="number")return J.c9.prototype
if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cj.prototype
return a}
J.dK=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cj.prototype
return a}
J.b5=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.aG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.h3(a).ai(a,b)}
J.hk=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.h3(a).J(a,b)}
J.dR=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.h4(a).k(a,b)}
J.dS=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).i(a,b)}
J.cR=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h8(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cl(a).l(a,b,c)}
J.hl=function(a,b){return J.dK(a).H(a,b)}
J.hm=function(a,b,c){return J.b5(a).fW(a,b,c)}
J.hn=function(a,b,c,d){return J.b5(a).dK(a,b,c,d)}
J.ho=function(a,b){return J.dK(a).Z(a,b)}
J.hp=function(a,b){return J.h4(a).aU(a,b)}
J.cS=function(a,b,c){return J.ax(a).hN(a,b,c)}
J.cT=function(a,b){return J.cl(a).I(a,b)}
J.hq=function(a,b,c,d){return J.cl(a).aC(a,b,c,d)}
J.dT=function(a,b){return J.cl(a).L(a,b)}
J.dU=function(a){return J.b5(a).gct(a)}
J.c2=function(a){return J.K(a).gU(a)}
J.bE=function(a){return J.cl(a).ga3(a)}
J.aq=function(a){return J.ax(a).gm(a)}
J.hr=function(a,b){return J.b5(a).iy(a,b)}
J.hs=function(a,b){return J.b5(a).sa4(a,b)}
J.ac=function(a){return J.K(a).j(a)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cZ.prototype
C.H=J.w.prototype
C.a=J.be.prototype
C.I=J.en.prototype
C.d=J.eo.prototype
C.t=J.ep.prototype
C.e=J.c9.prototype
C.b=J.ca.prototype
C.P=J.cb.prototype
C.V=H.dg.prototype
C.W=W.iQ.prototype
C.z=J.iV.prototype
C.X=P.di.prototype
C.r=J.cj.prototype
C.A=W.bT.prototype
C.B=W.kI.prototype
C.D=new P.hy(!1)
C.C=new P.hx(C.D)
C.E=new P.iT()
C.F=new P.kv()
C.j=new P.lv()
C.c=new A.cr(0,"ColorSourceType.None")
C.i=new A.cr(1,"ColorSourceType.Solid")
C.h=new A.cr(2,"ColorSourceType.Texture2D")
C.f=new A.cr(3,"ColorSourceType.TextureCube")
C.q=new P.aI(0)
C.G=new P.aI(5e6)
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
C.w=H.e(I.ap([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ap([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ap([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ap([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.ap([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ap([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ap([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.ap([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.ap([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.ap([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.ap([]),[P.j])
C.U=new H.hL(0,{},C.Q,[P.j,P.j])
C.k=new P.ko(!1)
$.aH=0
$.bF=null
$.dZ=null
$.dC=!1
$.h6=null
$.fW=null
$.hf=null
$.cL=null
$.cO=null
$.dL=null
$.by=null
$.bY=null
$.bZ=null
$.dD=!1
$.V=C.j
$.ed=null
$.ec=null
$.eb=null
$.ea=null
$.p=V.iK()
$.jz="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jy="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eE=null
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
I.$lazy(y,x,w)}})(["e9","$get$e9",function(){return H.h5("_$dart_dartClosure")},"d6","$get$d6",function(){return H.h5("_$dart_js")},"eY","$get$eY",function(){return H.aP(H.cC({
toString:function(){return"$receiver$"}}))},"eZ","$get$eZ",function(){return H.aP(H.cC({$method$:null,
toString:function(){return"$receiver$"}}))},"f_","$get$f_",function(){return H.aP(H.cC(null))},"f0","$get$f0",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.aP(H.cC(void 0))},"f5","$get$f5",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f2","$get$f2",function(){return H.aP(H.f3(null))},"f1","$get$f1",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"f7","$get$f7",function(){return H.aP(H.f3(void 0))},"f6","$get$f6",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dx","$get$dx",function(){return P.kJ()},"c_","$get$c_",function(){return[]},"fj","$get$fj",function(){return P.ks()},"fr","$get$fr",function(){return H.iO(H.bx(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fM","$get$fM",function(){return P.jd("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fS","$get$fS",function(){return P.mu()},"e7","$get$e7",function(){return{}},"fn","$get$fn",function(){return Z.aw(0)},"fl","$get$fl",function(){return Z.aw(511)},"aF","$get$aF",function(){return Z.aw(1)},"aY","$get$aY",function(){return Z.aw(2)},"aX","$get$aX",function(){return Z.aw(4)},"aZ","$get$aZ",function(){return Z.aw(8)},"b_","$get$b_",function(){return Z.aw(16)},"bR","$get$bR",function(){return Z.aw(32)},"bS","$get$bS",function(){return Z.aw(64)},"fm","$get$fm",function(){return Z.aw(96)},"bv","$get$bv",function(){return Z.aw(128)},"aW","$get$aW",function(){return Z.aw(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.J},{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.J,args:[F.ab,P.u,P.u]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[P.m,[P.i,E.aU]]},{func:1,ret:P.J,args:[F.at]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[D.q]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.u},{func:1,ret:P.J,args:[W.ad]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:P.j,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:-1,args:[P.m,[P.i,D.a4]]},{func:1,ret:-1,args:[P.m,[P.i,U.aj]]},{func:1,ret:-1,args:[P.m,[P.i,M.aO]]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:V.S,args:[P.u]},{func:1,ret:-1,args:[P.m,[P.i,V.aJ]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.j]},{func:1,ret:P.J,args:[P.a_]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:[P.L,P.j,P.j],args:[[P.L,P.j,P.j],P.j]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:P.ah,args:[P.u,P.u]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.ah,args:[[P.i,D.a4]]},{func:1,ret:-1,args:[P.b],opt:[P.aD]},{func:1,ret:P.J,args:[P.j]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:P.J,args:[P.j,,]},{func:1,ret:P.T,args:[P.m]},{func:1,ret:-1,args:[W.bT]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[P.j]},{func:1,ret:P.ah,args:[W.P]},{func:1,ret:W.a3,args:[W.P]},{func:1,ret:P.J,args:[P.bq]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.b0,,],args:[,]}]
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
if(x==y)H.nt(d||a)
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
Isolate.ap=a.ap
Isolate.dI=a.dI
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hb,[])
else T.hb([])})})()
//# sourceMappingURL=test.dart.js.map
