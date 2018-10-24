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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$iso)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dI(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dJ=function(){}
var dart=[["","",,H,{"^":"",mO:{"^":"a;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cS:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dM==null){H.m6()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.fn("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$db()]
if(v!=null)return v
v=H.mb(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$db(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
o:{"^":"a;",
v:function(a,b){return a===b},
ga_:function(a){return H.bH(a)},
j:["er",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i8:{"^":"o;",
j:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isP:1},
ep:{"^":"o;",
v:function(a,b){return null==b},
j:function(a){return"null"},
ga_:function(a){return 0},
$isN:1},
dc:{"^":"o;",
ga_:function(a){return 0},
j:["eu",function(a){return String(a)}]},
iN:{"^":"dc;"},
cI:{"^":"dc;"},
c7:{"^":"dc;",
j:function(a){var z=a[$.$get$e5()]
if(z==null)return this.eu(a)
return"JavaScript function for "+H.k(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc4:1},
ba:{"^":"o;$ti",
h:function(a,b){H.F(b,H.B(a,0))
if(!!a.fixed$length)H.p(P.ak("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.p(P.ak("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
ab:function(a,b){var z,y
H.w(b,"$isd",[H.B(a,0)],"$asd")
if(!!a.fixed$length)H.p(P.ak("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.aV(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.k(a[y]))
return z.join(b)},
hK:function(a){return this.l(a,"")},
hE:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.P,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.f(P.aV(a))}throw H.f(H.d9())},
hD:function(a,b){return this.hE(a,b,null)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bS:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ai(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.B(a,0)])
return H.b(a.slice(b,c),[H.B(a,0)])},
gbL:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.d9())},
du:function(a,b){var z,y
H.l(b,{func:1,ret:P.P,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.f(P.aV(a))}return!1},
R:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
j:function(a){return P.d8(a,"[","]")},
gX:function(a){return new J.at(a,a.length,0,[H.B(a,0)])},
ga_:function(a){return H.bH(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.ak("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.ci(b,"newLength",null))
if(b<0)throw H.f(P.ai(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.a0(b)
H.F(c,H.B(a,0))
if(!!a.immutable$list)H.p(P.ak("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.b2(a,b))
if(b>=a.length||b<0)throw H.f(H.b2(a,b))
a[b]=c},
$isd:1,
$ise:1,
t:{
i7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.ci(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ai(a,0,4294967295,"length",null))
return J.em(new Array(a),b)},
em:function(a,b){return J.bB(H.b(a,[b]))},
bB:function(a){H.cg(a)
a.fixed$length=Array
return a}}},
mN:{"^":"ba;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cv:{"^":"o;",
ik:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.ak(""+a+".toInt()"))},
cB:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.ak(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ak(""+a+".round()"))},
ec:function(a,b){var z,y
if(b>20)throw H.f(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
ek:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.ak("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
br:function(a,b){var z
if(a>0)z=this.fU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fU:function(a,b){return b>31?0:a>>>b},
am:function(a,b){if(typeof b!=="number")throw H.f(H.b1(b))
return a<b},
$isy:1,
$isa1:1},
eo:{"^":"cv;",$isD:1},
en:{"^":"cv;"},
cw:{"^":"o;",
cn:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.b2(a,b))
if(b<0)throw H.f(H.b2(a,b))
if(b>=a.length)H.p(H.b2(a,b))
return a.charCodeAt(b)},
aL:function(a,b){if(b>=a.length)throw H.f(H.b2(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.K(b)
if(typeof b!=="string")throw H.f(P.ci(b,null,null))
return a+b},
ep:function(a,b,c){var z
if(c>a.length)throw H.f(P.ai(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bR:function(a,b){return this.ep(a,b,0)},
b0:function(a,b,c){H.a0(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.cB(b,null,null))
if(b>c)throw H.f(P.cB(b,null,null))
if(c>a.length)throw H.f(P.cB(c,null,null))
return a.substring(b,c)},
bl:function(a,b){return this.b0(a,b,null)},
io:function(a){return a.toLowerCase()},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
al:function(a,b){return this.hX(a,b," ")},
ht:function(a,b,c){if(c>a.length)throw H.f(P.ai(c,0,a.length,null,null))
return H.h6(a,b,c)},
j:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseG:1,
$isj:1}}],["","",,H,{"^":"",
d9:function(){return new P.dq("No element")},
i6:function(){return new P.dq("Too many elements")},
t:{"^":"jX;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.h.cn(this.a,b)},
$asfo:function(){return[P.D]},
$asx:function(){return[P.D]},
$asd:function(){return[P.D]},
$ase:function(){return[P.D]}},
ee:{"^":"d;"},
cy:{"^":"ee;$ti",
gX:function(a){return new H.df(this,this.gm(this),0,[H.al(this,"cy",0)])},
cO:function(a,b){return this.es(0,H.l(b,{func:1,ret:P.P,args:[H.al(this,"cy",0)]}))}},
df:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.cf(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.aV(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
io:{"^":"d;a,b,$ti",
gX:function(a){return new H.ip(J.b7(this.a),this.b,this.$ti)},
gm:function(a){return J.b8(this.a)},
E:function(a,b){return this.b.$1(J.cW(this.a,b))},
$asd:function(a,b){return[b]}},
ip:{"^":"da;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$asda:function(a,b){return[b]}},
iq:{"^":"cy;a,b,$ti",
gm:function(a){return J.b8(this.a)},
E:function(a,b){return this.b.$1(J.cW(this.a,b))},
$ascy:function(a,b){return[b]},
$asd:function(a,b){return[b]}},
dz:{"^":"d;a,b,$ti",
gX:function(a){return new H.kc(J.b7(this.a),this.b,this.$ti)}},
kc:{"^":"da;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
cs:{"^":"a;$ti"},
fo:{"^":"a;$ti"},
jX:{"^":"cx+fo;"}}],["","",,H,{"^":"",
m_:function(a){return init.types[H.a0(a)]},
m9:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isH},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.f(H.b1(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.M(a).$iscI){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aL(w,0)===36)w=C.h.bl(w,1)
r=H.dN(H.cg(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eJ:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.b([],[P.D])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.b1(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.br(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.b1(w))}return H.eJ(z)},
eK:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.b1(x))
if(x<0)throw H.f(H.b1(x))
if(x>65535)return H.iX(a)}return H.eJ(a)},
dm:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.br(z,10))>>>0,56320|z&1023)}throw H.f(P.ai(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iW:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iU:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iQ:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iR:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iT:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iV:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iS:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
q:function(a){throw H.f(H.b1(a))},
i:function(a,b){if(a==null)J.b8(a)
throw H.f(H.b2(a,b))},
b2:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aA(!0,b,"index",null)
z=H.a0(J.b8(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cB(b,"index",null)},
lW:function(a,b,c){if(a>c)return new P.cA(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cA(a,c,!0,b,"end","Invalid value")
return new P.aA(!0,b,"end",null)},
b1:function(a){return new P.aA(!0,a,null,null)},
lR:function(a){if(typeof a!=="number")throw H.f(H.b1(a))
return a},
f:function(a){var z
if(a==null)a=new P.eF()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h7})
z.name=""}else z.toString=H.h7
return z},
h7:function(){return J.a6(this.dartException)},
p:function(a){throw H.f(a)},
z:function(a){throw H.f(P.aV(a))},
am:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.br(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dd(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eE(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$f5()
u=$.$get$f6()
t=$.$get$f7()
s=$.$get$f8()
r=$.$get$fc()
q=$.$get$fd()
p=$.$get$fa()
$.$get$f9()
o=$.$get$ff()
n=$.$get$fe()
m=v.ak(y)
if(m!=null)return z.$1(H.dd(H.K(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.dd(H.K(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eE(H.K(y),m))}}return z.$1(new H.jW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eP()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aA(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eP()
return a},
bp:function(a){var z
if(a==null)return new H.fH(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fH(a)},
lY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
m8:function(a,b,c,d,e,f){H.h(a,"$isc4")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.n("Unsupported number of arguments for wrapped closure"))},
bm:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m8)
a.$identity=z
return z},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$ise){z.$reflectionInfo=d
x=H.j0(z).r}else x=d
w=e?Object.create(new H.jp().constructor.prototype):Object.create(new H.cY(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.F()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e2(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.m_,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dY:H.cZ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e2(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hp:function(a,b,c,d){var z=H.cZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e2:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hp(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.F()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bs
if(v==null){v=H.ck("self")
$.bs=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.F()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bs
if(v==null){v=H.ck("self")
$.bs=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hq:function(a,b,c,d){var z,y
z=H.cZ
y=H.dY
switch(b?-1:a){case 0:throw H.f(H.j9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hr:function(a,b){var z,y,x,w,v,u,t,s
z=$.bs
if(z==null){z=H.ck("self")
$.bs=z}y=$.dX
if(y==null){y=H.ck("receiver")
$.dX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aB
if(typeof y!=="number")return y.F()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.F()
$.aB=y+1
return new Function(z+y+"}")()},
dI:function(a,b,c,d,e,f,g){var z,y
z=J.bB(H.cg(b))
H.a0(c)
y=!!J.M(d).$ise?J.bB(d):d
return H.hs(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aI(a,"String"))},
mf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aI(a,"num"))},
dG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aI(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aI(a,"int"))},
h4:function(a,b){throw H.f(H.aI(a,H.K(b).substring(3)))},
mh:function(a,b){var z=J.cf(b)
throw H.f(H.ho(a,z.b0(b,3,z.gm(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.h4(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.mh(a,b)},
cg:function(a){if(a==null)return a
if(!!J.M(a).$ise)return a
throw H.f(H.aI(a,"List"))},
ma:function(a,b){if(a==null)return a
if(!!J.M(a).$ise)return a
if(J.M(a)[b])return a
H.h4(a,b)},
fY:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
ce:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fY(J.M(a))
if(z==null)return!1
y=H.h0(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dD)return a
$.dD=!0
try{if(H.ce(a,b))return a
z=H.ch(b)
y=H.aI(a,z)
throw H.f(y)}finally{$.dD=!1}},
dK:function(a,b){if(a!=null&&!H.dH(a,b))H.p(H.aI(a,H.ch(b)))
return a},
fT:function(a){var z
if(a instanceof H.r){z=H.fY(J.M(a))
if(z!=null)return H.ch(z)
return"Closure"}return H.bd(a)},
mm:function(a){throw H.f(new P.hz(H.K(a)))},
fZ:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
nI:function(a,b,c){return H.bq(a["$as"+H.k(c)],H.b3(b))},
c1:function(a,b,c,d){var z
H.K(c)
H.a0(d)
z=H.bq(a["$as"+H.k(c)],H.b3(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.K(b)
H.a0(c)
z=H.bq(a["$as"+H.k(b)],H.b3(a))
return z==null?null:z[c]},
B:function(a,b){var z
H.a0(b)
z=H.b3(a)
return z==null?null:z[b]},
ch:function(a){var z=H.b5(a,null)
return z},
b5:function(a,b){var z,y
H.w(b,"$ise",[P.j],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dN(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.lH(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b5(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b5(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b5(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b5(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dN:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$ise",[P.j],"$ase")
if(a==null)return""
z=new P.bM("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b5(u,c)}v="<"+z.j(0)+">"
return v},
bq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fW(H.bq(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.cg(c)
H.K(d)
if(a==null)return a
z=H.c0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dN(c,0,null)
throw H.f(H.aI(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
nG:function(a,b,c){return a.apply(b,H.bq(J.M(b)["$as"+H.k(c)],H.b3(b)))},
h1:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="N"||a===-1||a===-2||H.h1(z)}return!1},
dH:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="N"||b===-1||b===-2||H.h1(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dH(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}y=J.M(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
F:function(a,b){if(a!=null&&!H.dH(a,b))throw H.f(H.aI(a,H.ch(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.h0(a,b,c,d)
if('func' in a)return c.builtin$cls==="c4"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bq(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ch(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fW(H.bq(r,z),b,u,d)},
h0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.as(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.as(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.as(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.as(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.me(m,b,l,d)},
me:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
nH:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
mb:function(a){var z,y,x,w,v,u
z=H.K($.h_.$1(a))
y=$.cQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cT[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fV.$2(a,z))
if(z!=null){y=$.cQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cT[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cU(x)
$.cQ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cT[z]=x
return x}if(v==="-"){u=H.cU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.f(P.fn(z))
if(init.leafTags[z]===true){u=H.cU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dO(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cU:function(a){return J.dO(a,!1,null,!!a.$isH)},
md:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cU(z)
else return J.dO(z,c,null,null)},
m6:function(){if(!0===$.dM)return
$.dM=!0
H.m7()},
m7:function(){var z,y,x,w,v,u,t,s
$.cQ=Object.create(null)
$.cT=Object.create(null)
H.m2()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h5.$1(v)
if(u!=null){t=H.md(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
m2:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bl(C.I,H.bl(C.N,H.bl(C.r,H.bl(C.r,H.bl(C.M,H.bl(C.J,H.bl(C.K(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h_=new H.m3(v)
$.fV=new H.m4(u)
$.h5=new H.m5(t)},
bl:function(a,b){return a(b)||b},
h6:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dQ:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
j_:{"^":"a;a,b,c,d,e,f,r,0x",t:{
j0:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bB(z)
y=z[0]
x=z[1]
return new H.j_(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jM:{"^":"a;a,b,c,d,e,f",
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
aH:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fb:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iK:{"^":"a2;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eE:function(a,b){return new H.iK(a,b==null?null:b.method)}}},
ib:{"^":"a2;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
t:{
dd:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ib(a,y,z?null:b.receiver)}}},
jW:{"^":"a2;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mn:{"^":"r:18;a",
$1:function(a){if(!!J.M(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fH:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
r:{"^":"a;",
j:function(a){return"Closure '"+H.bd(this).trim()+"'"},
geg:function(){return this},
$isc4:1,
geg:function(){return this}},
eU:{"^":"r;"},
jp:{"^":"eU;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cY:{"^":"eU;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.b6(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
t:{
cZ:function(a){return a.a},
dY:function(a){return a.c},
ck:function(a){var z,y,x,w,v
z=new H.cY("self","target","receiver","name")
y=J.bB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jN:{"^":"a2;a",
j:function(a){return this.a},
t:{
aI:function(a,b){return new H.jN("TypeError: "+H.k(P.cr(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
hn:{"^":"a2;a",
j:function(a){return this.a},
t:{
ho:function(a,b){return new H.hn("CastError: "+H.k(P.cr(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
j8:{"^":"a2;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
t:{
j9:function(a){return new H.j8(a)}}},
bb:{"^":"ex;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gac:function(a){return new H.et(this,[H.B(this,0)])},
dA:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d9(y,b)}else return this.hI(b)},
hI:function(a){var z=this.d
if(z==null)return!1
return this.cC(this.c1(z,J.b6(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bo(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bo(w,b)
x=y==null?null:y.b
return x}else return this.hJ(b)},
hJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c1(z,J.b6(a)&0x3ffffff)
x=this.cC(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.F(b,H.B(this,0))
H.F(c,H.B(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c7()
this.b=z}this.d2(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c7()
this.c=y}this.d2(y,b,c)}else{x=this.d
if(x==null){x=this.c7()
this.d=x}w=J.b6(b)&0x3ffffff
v=this.c1(x,w)
if(v==null)this.cc(x,w,[this.c8(b,c)])
else{u=this.cC(v,b)
if(u>=0)v[u].b=c
else v.push(this.c8(b,c))}}},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(this,0),H.B(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.aV(this))
z=z.c}},
d2:function(a,b,c){var z
H.F(b,H.B(this,0))
H.F(c,H.B(this,1))
z=this.bo(a,b)
if(z==null)this.cc(a,b,this.c8(b,c))
else z.b=c},
f3:function(){this.r=this.r+1&67108863},
c8:function(a,b){var z,y
z=new H.ig(H.F(a,H.B(this,0)),H.F(b,H.B(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f3()
return z},
cC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
j:function(a){return P.ey(this)},
bo:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
eZ:function(a,b){delete a[b]},
d9:function(a,b){return this.bo(a,b)!=null},
c7:function(){var z=Object.create(null)
this.cc(z,"<non-identifier-key>",z)
this.eZ(z,"<non-identifier-key>")
return z},
$ises:1},
ig:{"^":"a;a,b,0c,0d"},
et:{"^":"ee;a,$ti",
gm:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.ih(z,z.r,this.$ti)
y.c=z.e
return y}},
ih:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aV(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
m3:{"^":"r:18;a",
$1:function(a){return this.a(a)}},
m4:{"^":"r:45;a",
$2:function(a,b){return this.a(a,b)}},
m5:{"^":"r:44;a",
$1:function(a){return this.a(H.K(a))}},
i9:{"^":"a;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseG:1,
t:{
ia:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.hV("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lX:function(a){return J.em(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bj:function(a){return a},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.b2(b,a))},
lG:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.lW(a,b,c))
return b},
iF:{"^":"o;",$isno:1,"%":"DataView;ArrayBufferView;dk|fB|fC|iE|fD|fE|aX"},
dk:{"^":"iF;",
gm:function(a){return a.length},
$isH:1,
$asH:I.dJ},
iE:{"^":"fC;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
$ascs:function(){return[P.y]},
$asx:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
$ise:1,
$ase:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fE;",
$ascs:function(){return[P.D]},
$asx:function(){return[P.D]},
$isd:1,
$asd:function(){return[P.D]},
$ise:1,
$ase:function(){return[P.D]}},
mW:{"^":"aX;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mX:{"^":"aX;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mY:{"^":"aX;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mZ:{"^":"aX;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
n_:{"^":"aX;",
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n0:{"^":"aX;",
gm:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
iG:{"^":"aX;",
gm:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
bS:function(a,b,c){return new Uint8Array(a.subarray(b,H.lG(b,c,a.length)))},
"%":";Uint8Array"},
fB:{"^":"dk+x;"},
fC:{"^":"fB+cs;"},
fD:{"^":"dk+x;"},
fE:{"^":"fD+cs;"}}],["","",,P,{"^":"",
ke:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bm(new P.kg(z),1)).observe(y,{childList:true})
return new P.kf(z,y,x)}else if(self.setImmediate!=null)return P.lP()
return P.lQ()},
nt:[function(a){self.scheduleImmediate(H.bm(new P.kh(H.l(a,{func:1,ret:-1})),0))},"$1","lO",4,0,10],
nu:[function(a){self.setImmediate(H.bm(new P.ki(H.l(a,{func:1,ret:-1})),0))},"$1","lP",4,0,10],
nv:[function(a){P.dv(C.l,H.l(a,{func:1,ret:-1}))},"$1","lQ",4,0,10],
dv:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a3(a.a,1000)
return P.lk(z<0?0:z,b)},
f0:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bf]})
z=C.f.a3(a.a,1000)
return P.ll(z<0?0:z,b)},
lK:function(a,b){if(H.ce(a,{func:1,args:[P.a,P.ay]}))return b.i6(a,null,P.a,P.ay)
if(H.ce(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.ci(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lJ:function(){var z,y
for(;z=$.bk,z!=null;){$.bZ=null
y=z.b
$.bk=y
if(y==null)$.bY=null
z.a.$0()}},
nF:[function(){$.dE=!0
try{P.lJ()}finally{$.bZ=null
$.dE=!1
if($.bk!=null)$.$get$dA().$1(P.fX())}},"$0","fX",0,0,3],
fS:function(a){var z=new P.ft(H.l(a,{func:1,ret:-1}))
if($.bk==null){$.bY=z
$.bk=z
if(!$.dE)$.$get$dA().$1(P.fX())}else{$.bY.b=z
$.bY=z}},
lN:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bk
if(z==null){P.fS(a)
$.bZ=$.bY
return}y=new P.ft(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.bk=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
mi:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.U
if(C.j===y){P.cP(null,null,C.j,a)
return}y.toString
P.cP(null,null,y,H.l(y.ci(a),z))},
f_:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.U
if(y===C.j){y.toString
return P.dv(a,b)}return P.dv(a,H.l(y.ci(b),z))},
jJ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.l(b,z)
y=$.U
if(y===C.j){y.toString
return P.f0(a,b)}x=y.dv(b,P.bf)
$.U.toString
return P.f0(a,H.l(x,z))},
cO:function(a,b,c,d,e){var z={}
z.a=d
P.lN(new P.lL(z,e))},
fQ:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fR:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.F(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
lM:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cP:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ci(d):c.hr(d,-1)
P.fS(d)},
kg:{"^":"r:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kf:{"^":"r:41;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kh:{"^":"r:2;a",
$0:function(){this.a.$0()}},
ki:{"^":"r:2;a",
$0:function(){this.a.$0()}},
fL:{"^":"a;a,0b,c",
eK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bm(new P.ln(this,b),0),a)
else throw H.f(P.ak("`setTimeout()` not found."))},
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bm(new P.lm(this,a,Date.now(),b),0),a)
else throw H.f(P.ak("Periodic timer."))},
$isbf:1,
t:{
lk:function(a,b){var z=new P.fL(!0,0)
z.eK(a,b)
return z},
ll:function(a,b){var z=new P.fL(!1,0)
z.eL(a,b)
return z}}},
ln:{"^":"r:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lm:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.ex(w,x)}z.c=y
this.d.$1(z)}},
bi:{"^":"a;0a,b,c,d,e,$ti",
hP:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.l(this.d,{func:1,ret:P.P,args:[P.a]}),a.a,P.P,P.a)},
hH:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.B(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.a,P.ay]}))return H.dK(w.ic(z,a.a,a.b,null,y,P.ay),x)
else return H.dK(w.cM(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aS:{"^":"a;dl:a<,b,0fK:c<,$ti",
eb:function(a,b,c){var z,y,x,w
z=H.B(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lK(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.U,[c])
w=b==null?1:3
this.d3(new P.bi(x,w,a,b,[z,c]))
return x},
ij:function(a,b){return this.eb(a,null,b)},
d3:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbi")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaS")
z=y.a
if(z<4){y.d3(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cP(null,null,z,H.l(new P.kx(this,a),{func:1,ret:-1}))}},
dh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbi")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaS")
y=u.a
if(y<4){u.dh(a)
return}this.a=y
this.c=u.c}z.a=this.bq(a)
y=this.b
y.toString
P.cP(null,null,y,H.l(new P.kC(z,this),{func:1,ret:-1}))}},
ca:function(){var z=H.h(this.c,"$isbi")
this.c=null
return this.bq(z)},
bq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d6:function(a){var z,y,x,w
z=H.B(this,0)
H.dK(a,{futureOr:1,type:z})
y=this.$ti
x=H.c0(a,"$isbz",y,"$asbz")
if(x){z=H.c0(a,"$isaS",y,null)
if(z)P.fw(a,this)
else P.ky(a,this)}else{w=this.ca()
H.F(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
bX:[function(a,b){var z
H.h(b,"$isay")
z=this.ca()
this.a=8
this.c=new P.an(a,b)
P.bW(this,z)},function(a){return this.bX(a,null)},"ir","$2","$1","geU",4,2,39],
$isbz:1,
t:{
ky:function(a,b){var z,y,x
b.a=1
try{a.eb(new P.kz(b),new P.kA(b),null)}catch(x){z=H.am(x)
y=H.bp(x)
P.mi(new P.kB(b,z,y))}},
fw:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaS")
if(z>=4){y=b.ca()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.h(b.c,"$isbi")
b.a=2
b.c=a
a.dh(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cO(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bW(z.a,b)}y=z.a
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
if(p){H.h(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cO(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kF(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kE(x,b,r).$0()}else if((y&2)!==0)new P.kD(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.M(y).$isbz){if(y.a>=4){n=H.h(t.c,"$isbi")
t.c=null
b=t.bq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fw(y,t)
return}}m=b.b
n=H.h(m.c,"$isbi")
m.c=null
b=m.bq(n)
y=x.a
u=x.b
if(!y){H.F(u,H.B(m,0))
m.a=4
m.c=u}else{H.h(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
kx:{"^":"r:2;a,b",
$0:function(){P.bW(this.a,this.b)}},
kC:{"^":"r:2;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
kz:{"^":"r:21;a",
$1:function(a){var z=this.a
z.a=0
z.d6(a)}},
kA:{"^":"r:40;a",
$2:function(a,b){this.a.bX(a,H.h(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
kB:{"^":"r:2;a,b,c",
$0:function(){this.a.bX(this.b,this.c)}},
kF:{"^":"r:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.l(w.d,{func:1}),null)}catch(v){y=H.am(v)
x=H.bp(v)
if(this.d){w=H.h(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.M(z).$isbz){if(z instanceof P.aS&&z.gdl()>=4){if(z.gdl()===8){w=this.b
w.b=H.h(z.gfK(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ij(new P.kG(t),null)
w.a=!1}}},
kG:{"^":"r:38;a",
$1:function(a){return this.a}},
kE:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.B(x,0)
v=H.F(this.c,w)
u=H.B(x,1)
this.a.b=x.b.b.cM(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.am(t)
y=H.bp(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
kD:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isan")
w=this.c
if(w.hP(z)&&w.e!=null){v=this.b
v.b=w.hH(z)
v.a=!1}}catch(u){y=H.am(u)
x=H.bp(u)
w=H.h(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
ft:{"^":"a;a,0b"},
dr:{"^":"a;$ti",
gm:function(a){var z,y
z={}
y=new P.aS(0,$.U,[P.D])
z.a=0
this.hN(new P.js(z,this),!0,new P.jt(z,y),y.geU())
return y}},
js:{"^":"r;a,b",
$1:function(a){H.F(a,H.al(this.b,"dr",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.al(this.b,"dr",0)]}}},
jt:{"^":"r:2;a,b",
$0:function(){this.b.d6(this.a.a)}},
eS:{"^":"a;$ti"},
jr:{"^":"a;"},
bf:{"^":"a;"},
an:{"^":"a;a,b",
j:function(a){return H.k(this.a)},
$isa2:1},
lu:{"^":"a;",$isns:1},
lL:{"^":"r:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eF()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.j(0)
throw x}},
l_:{"^":"lu;",
ie:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fQ(null,null,this,a,-1)}catch(x){z=H.am(x)
y=H.bp(x)
P.cO(null,null,this,z,H.h(y,"$isay"))}},
ig:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fR(null,null,this,a,b,-1,c)}catch(x){z=H.am(x)
y=H.bp(x)
P.cO(null,null,this,z,H.h(y,"$isay"))}},
hr:function(a,b){return new P.l1(this,H.l(a,{func:1,ret:b}),b)},
ci:function(a){return new P.l0(this,H.l(a,{func:1,ret:-1}))},
dv:function(a,b){return new P.l2(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.l(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fQ(null,null,this,a,b)},
cM:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.U===C.j)return a.$1(b)
return P.fR(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.U===C.j)return a.$2(b,c)
return P.lM(null,null,this,a,b,c,d,e,f)},
i6:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
l1:{"^":"r;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l0:{"^":"r:3;a,b",
$0:function(){return this.a.ie(this.b)}},
l2:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.F(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ii:function(a,b,c){H.cg(a)
return H.w(H.lY(a,new H.bb(0,0,[b,c])),"$ises",[b,c],"$ases")},
eu:function(a,b){return new H.bb(0,0,[a,b])},
c9:function(a,b,c,d){return new P.kN(0,0,[d])},
i5:function(a,b,c){var z,y
if(P.dF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.lI(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eT(b,H.ma(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
d8:function(a,b,c){var z,y,x
if(P.dF(a))return b+"..."+c
z=new P.bM(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.eT(x.gaM(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dF:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
lI:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.k(z.gL(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gL(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL(z);++x
for(;z.C();t=s,s=r){r=z.gL(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ev:function(a,b){var z,y
z=P.c9(null,null,null,b)
for(y=J.b7(a);y.C();)z.h(0,H.F(y.gL(y),b))
return z},
ey:function(a){var z,y,x
z={}
if(P.dF(a))return"{...}"
y=new P.bM("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
J.hb(a,new P.im(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
kN:{"^":"kH;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){var z=new P.fA(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$iscM")!=null}else{y=this.eV(b)
return y}},
eV:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.de(z,a),a)>=0},
h:function(a,b){var z,y
H.F(b,H.B(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dC()
this.b=z}return this.d4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dC()
this.c=y}return this.d4(y,b)}else return this.eN(0,b)},
eN:function(a,b){var z,y,x
H.F(b,H.B(this,0))
z=this.d
if(z==null){z=P.dC()
this.d=z}y=this.d7(b)
x=z[y]
if(x==null)z[y]=[this.bW(b)]
else{if(this.c_(x,b)>=0)return!1
x.push(this.bW(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.di(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.di(this.c,b)
else return this.fF(0,b)},
fF:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.de(z,b)
x=this.c_(y,b)
if(x<0)return!1
this.dn(y.splice(x,1)[0])
return!0},
d4:function(a,b){H.F(b,H.B(this,0))
if(H.h(a[b],"$iscM")!=null)return!1
a[b]=this.bW(b)
return!0},
di:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscM")
if(z==null)return!1
this.dn(z)
delete a[b]
return!0},
d5:function(){this.r=this.r+1&67108863},
bW:function(a){var z,y
z=new P.cM(H.F(a,H.B(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d5()
return z},
dn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d5()},
d7:function(a){return J.b6(a)&0x3ffffff},
de:function(a,b){return a[this.d7(b)]},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
t:{
dC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"a;a,0b,0c"},
fA:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aV(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.F(z.a,H.B(this,0))
this.c=z.b
return!0}}}},
kH:{"^":"ja;"},
cx:{"^":"kO;",$isd:1,$ise:1},
x:{"^":"a;$ti",
gX:function(a){return new H.df(a,this.gm(a),0,[H.c1(this,a,"x",0)])},
E:function(a,b){return this.i(a,b)},
im:function(a,b){var z,y,x
z=H.b([],[H.c1(this,a,"x",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.V(z,y,this.i(a,y));++y}return z},
il:function(a){return this.im(a,!0)},
j:function(a){return P.d8(a,"[","]")}},
ex:{"^":"ad;"},
im:{"^":"r:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ad:{"^":"a;$ti",
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.c1(this,a,"ad",0),H.c1(this,a,"ad",1)]})
for(z=J.b7(this.gac(a));z.C();){y=z.gL(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.b8(this.gac(a))},
j:function(a){return P.ey(a)},
$isa3:1},
jc:{"^":"a;$ti",
ab:function(a,b){var z
for(z=J.b7(H.w(b,"$isd",this.$ti,"$asd"));z.C();)this.h(0,z.gL(z))},
j:function(a){return P.d8(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dT("index"))
if(b<0)H.p(P.ai(b,0,null,"index",null))
for(z=new P.fA(this,this.r,this.$ti),z.c=this.e,y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.f(P.S(b,this,"index",null,y))},
$isd:1},
ja:{"^":"jc;"},
kO:{"^":"a+x;"}}],["","",,P,{"^":"",d1:{"^":"a;$ti"},co:{"^":"jr;$ti"},hN:{"^":"d1;",
$asd1:function(){return[P.j,[P.e,P.D]]}},i2:{"^":"a;a,b,c,d,e",
j:function(a){return this.a}},i1:{"^":"co;a",
eW:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.i(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bM("")
if(w>b)v.a+=C.h.b0(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hf(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asco:function(){return[P.j,P.j]}},k2:{"^":"hN;a"},k3:{"^":"co;",
hv:function(a,b,c){var z,y,x,w
z=a.length
P.eL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ls(0,0,x)
if(w.f0(a,b,z)!==z)w.dq(C.h.cn(a,z-1),0)
return C.S.bS(x,0,w.b)},
hu:function(a){return this.hv(a,0,null)},
$asco:function(){return[P.j,[P.e,P.D]]}},ls:{"^":"a;a,b,c",
dq:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
f0:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.cn(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aL(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dq(w,C.h.aL(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hP:function(a){var z=J.M(a)
if(!!z.$isr)return z.j(a)
return"Instance of '"+H.bd(a)+"'"},
ij:function(a,b,c,d){var z,y
H.F(b,d)
z=J.i7(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.w(z,"$ise",[d],"$ase")},
ik:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gX(a);x.C();)C.a.h(y,H.F(x.gL(x),c))
if(b)return y
return H.w(J.bB(y),"$ise",z,"$ase")},
ds:function(a,b,c){var z,y
z=P.D
H.w(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.w(a,"$isba",[z],"$asba")
y=a.length
c=P.eL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.am()
z=c<y}else z=!0
return H.eK(z?C.a.bS(a,b,c):a)}return P.ju(a,b,c)},
ju:function(a,b,c){var z,y,x
H.w(a,"$isd",[P.D],"$asd")
z=J.b7(a)
for(y=0;y<b;++y)if(!z.C())throw H.f(P.ai(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gL(z))
return H.eK(x)},
j1:function(a,b,c){return new H.i9(a,H.ia(a,!1,!0,!1))},
fO:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$ise",[P.D],"$ase")
if(c===C.p){z=$.$get$fN().b
z=z.test(b)}else z=!1
if(z)return b
y=C.B.hu(H.F(b,H.al(c,"d1",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.dm(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hP(a)},
n:function(a){return new P.fv(a)},
dP:function(a){H.mg(a)},
P:{"^":"a;"},
"+bool":0,
av:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.av))return!1
return this.a===b.a&&this.b===b.b},
ga_:function(a){var z=this.a
return(z^C.f.br(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hB(H.iW(this))
y=P.c3(H.iU(this))
x=P.c3(H.iQ(this))
w=P.c3(H.iR(this))
v=P.c3(H.iT(this))
u=P.c3(H.iV(this))
t=P.hC(H.iS(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
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
c3:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"a1;"},
"+double":0,
bv:{"^":"a;a",
am:function(a,b){return C.f.am(this.a,H.h(b,"$isbv").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bv))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.hJ()
y=this.a
if(y<0)return"-"+new P.bv(0-y).j(0)
x=z.$1(C.f.a3(y,6e7)%60)
w=z.$1(C.f.a3(y,1e6)%60)
v=new P.hI().$1(y%1e6)
return""+C.f.a3(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
t:{
ed:function(a,b,c,d,e,f){return new P.bv(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hI:{"^":"r:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hJ:{"^":"r:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"a;"},
eF:{"^":"a2;",
j:function(a){return"Throw of null."}},
aA:{"^":"a2;a,b,c,d",
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbZ()+y+x
if(!this.a)return w
v=this.gbY()
u=P.cr(this.b)
return w+v+": "+H.k(u)},
t:{
hh:function(a){return new P.aA(!1,null,null,a)},
ci:function(a,b,c){return new P.aA(!0,a,b,c)},
dT:function(a){return new P.aA(!1,null,a,"Must not be null")}}},
cA:{"^":"aA;e,f,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
t:{
cB:function(a,b,c){return new P.cA(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")},
eL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.f(P.ai(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.f(P.ai(b,a,c,"end",f))
return b}return c}}},
i4:{"^":"aA;e,m:f>,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){if(J.h8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
t:{
S:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.b8(b))
return new P.i4(b,z,!0,a,c,"Index out of range")}}},
jY:{"^":"a2;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
ak:function(a){return new P.jY(a)}}},
jV:{"^":"a2;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
fn:function(a){return new P.jV(a)}}},
dq:{"^":"a2;a",
j:function(a){return"Bad state: "+this.a},
t:{
eR:function(a){return new P.dq(a)}}},
hv:{"^":"a2;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cr(z))+"."},
t:{
aV:function(a){return new P.hv(a)}}},
iL:{"^":"a;",
j:function(a){return"Out of Memory"},
$isa2:1},
eP:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isa2:1},
hz:{"^":"a2;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fv:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
hV:{"^":"a;a,b,c",
j:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.b0(x,0,75)+"..."
return y+"\n"+x}},
c4:{"^":"a;"},
D:{"^":"a1;"},
"+int":0,
d:{"^":"a;$ti",
cO:["es",function(a,b){var z=H.al(this,"d",0)
return new H.dz(this,H.l(b,{func:1,ret:P.P,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gX(this)
for(y=0;z.C();)++y
return y},
gaI:function(a){var z,y
z=this.gX(this)
if(!z.C())throw H.f(H.d9())
y=z.gL(z)
if(z.C())throw H.f(H.i6())
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dT("index"))
if(b<0)H.p(P.ai(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.C();){x=z.gL(z)
if(b===y)return x;++y}throw H.f(P.S(b,this,"index",null,y))},
j:function(a){return P.i5(this,"(",")")}},
da:{"^":"a;$ti"},
e:{"^":"a;$ti",$isd:1},
"+List":0,
a3:{"^":"a;$ti"},
N:{"^":"a;",
ga_:function(a){return P.a.prototype.ga_.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a1:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
ga_:function(a){return H.bH(this)},
j:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.j(this)}},
ay:{"^":"a;"},
j:{"^":"a;",$iseG:1},
"+String":0,
bM:{"^":"a;aM:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
eT:function(a,b,c){var z=J.b7(b)
if(!z.C())return a
if(c.length===0){do a+=H.k(z.gL(z))
while(z.C())}else{a+=H.k(z.gL(z))
for(;z.C();)a=a+c+H.k(z.gL(z))}return a}}}}],["","",,W,{"^":"",
dS:function(a){var z=document.createElement("a")
return z},
d0:function(a,b){var z=document.createElement("canvas")
return z},
hK:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).ap(z,a,b,c)
y.toString
z=W.G
z=new H.dz(new W.ar(y),H.l(new W.hL(),{func:1,ret:P.P,args:[z]}),[z])
return H.h(z.gaI(z),"$isW")},
hM:function(a){H.h(a,"$isac")
return"wheel"},
bw:function(a){var z,y,x
z="element tag unavailable"
try{y=J.he(a)
if(typeof y==="string")z=a.tagName}catch(x){H.am(x)}return z},
cK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fz:function(a,b,c,d){var z,y
z=W.cK(W.cK(W.cK(W.cK(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fU:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dv(a,b)},
ag:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mp:{"^":"o;0m:length=","%":"AccessibleNodeList"},
mq:{"^":"ag;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mr:{"^":"ag;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
dW:{"^":"ag;",$isdW:1,"%":"HTMLBaseElement"},
hm:{"^":"o;","%":";Blob"},
cj:{"^":"ag;",$iscj:1,"%":"HTMLBodyElement"},
d_:{"^":"ag;",
bQ:function(a,b,c){if(c!=null)return a.getContext(b,P.lS(c,null))
return a.getContext(b)},
ei:function(a,b){return this.bQ(a,b,null)},
$isd_:1,
"%":"HTMLCanvasElement"},
e0:{"^":"o;",$ise0:1,"%":"CanvasRenderingContext2D"},
mx:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mz:{"^":"hy;0m:length=","%":"CSSPerspective"},
bu:{"^":"o;",$isbu:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mA:{"^":"km;0m:length=",
ej:function(a,b){var z=a.getPropertyValue(this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$e3()
y=z[b]
if(typeof y==="string")return y
y=this.fV(a,b)
z[b]=y
return y},
fV:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hG()+b
if(z in a)return z
return b},
gcj:function(a){return a.bottom},
gaf:function(a){return a.height},
gaY:function(a){return a.left},
gbf:function(a){return a.right},
gbi:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hx:{"^":"a;",
gaY:function(a){return this.ej(a,"left")}},
e4:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hy:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mB:{"^":"e4;0m:length=","%":"CSSTransformValue"},
mC:{"^":"e4;0m:length=","%":"CSSUnparsedValue"},
mD:{"^":"o;0m:length=","%":"DataTransferItemList"},
b9:{"^":"ag;",$isb9:1,"%":"HTMLDivElement"},
mE:{"^":"o;",
j:function(a){return String(a)},
"%":"DOMException"},
mF:{"^":"ko;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[[P.af,P.a1]]},
$asx:function(){return[[P.af,P.a1]]},
$isd:1,
$asd:function(){return[[P.af,P.a1]]},
$ise:1,
$ase:function(){return[[P.af,P.a1]]},
$asC:function(){return[[P.af,P.a1]]},
"%":"ClientRectList|DOMRectList"},
hH:{"^":"o;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gai(a))+" x "+H.k(this.gaf(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isaf",[P.a1],"$asaf")
if(!z)return!1
z=J.bo(b)
return a.left===z.gaY(b)&&a.top===z.gbi(b)&&this.gai(a)===z.gai(b)&&this.gaf(a)===z.gaf(b)},
ga_:function(a){return W.fz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF)},
gcj:function(a){return a.bottom},
gaf:function(a){return a.height},
gaY:function(a){return a.left},
gbf:function(a){return a.right},
gbi:function(a){return a.top},
gai:function(a){return a.width},
$isaf:1,
$asaf:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
mG:{"^":"kq;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[P.j]},
$asx:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asC:function(){return[P.j]},
"%":"DOMStringList"},
mH:{"^":"o;0m:length=","%":"DOMTokenList"},
kl:{"^":"cx;dd:a<,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.h(z[b],"$isW")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.il(this)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asx:function(){return[W.W]},
$asd:function(){return[W.W]},
$ase:function(){return[W.W]}},
W:{"^":"G;0ih:tagName=",
ghq:function(a){return new W.kr(a)},
gdw:function(a){return new W.kl(a,a.children)},
gdz:function(a){return P.iZ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
j:function(a){return a.localName},
ap:["bT",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eg
if(z==null){z=H.b([],[W.aF])
y=new W.eD(z)
C.a.h(z,W.fx(null))
C.a.h(z,W.fI())
$.eg=y
d=y}else d=z
z=$.ef
if(z==null){z=new W.fP(d)
$.ef=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation.createHTMLDocument("")
$.aJ=y
$.d6=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.h(y,"$isdW")
y.href=z.baseURI
$.aJ.head.appendChild(y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$iscj")}z=$.aJ
if(!!this.$iscj)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aJ.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.Q,a.tagName)){$.d6.selectNodeContents(x)
w=$.d6.createContextualFragment(b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.dR(x)
c.cT(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ap(a,b,c,null)},"hx",null,null,"gj2",5,5,null],
en:function(a,b,c,d){a.textContent=null
a.appendChild(this.ap(a,b,c,d))},
em:function(a,b){return this.en(a,b,null,null)},
$isW:1,
"%":";Element"},
hL:{"^":"r:15;",
$1:function(a){return!!J.M(H.h(a,"$isG")).$isW}},
ab:{"^":"o;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ac:{"^":"o;",
ds:["eq",function(a,b,c,d){H.l(c,{func:1,args:[W.ab]})
if(c!=null)this.eO(a,b,c,!1)}],
eO:function(a,b,c,d){return a.addEventListener(b,H.bm(H.l(c,{func:1,args:[W.ab]}),1),!1)},
$isac:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fF|fG|fJ|fK"},
by:{"^":"hm;",$isby:1,"%":"File"},
mI:{"^":"kw;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.by]},
$asx:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$asC:function(){return[W.by]},
"%":"FileList"},
mJ:{"^":"ac;0m:length=","%":"FileWriter"},
mK:{"^":"ag;0m:length=","%":"HTMLFormElement"},
bA:{"^":"o;",$isbA:1,"%":"Gamepad"},
mL:{"^":"o;0m:length=","%":"History"},
mM:{"^":"kJ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.G]},
$asx:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asC:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ct:{"^":"o;0dB:data=",$isct:1,"%":"ImageData"},
el:{"^":"ag;",$isel:1,"%":"HTMLImageElement"},
bC:{"^":"dw;",$isbC:1,"%":"KeyboardEvent"},
mQ:{"^":"o;",
j:function(a){return String(a)},
"%":"Location"},
mR:{"^":"o;0m:length=","%":"MediaList"},
mS:{"^":"ac;",
ds:function(a,b,c,d){H.l(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.eq(a,b,c,!1)},
"%":"MessagePort"},
mT:{"^":"kP;",
i:function(a,b){return P.aT(a.get(H.K(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gac:function(a){var z=H.b([],[P.j])
this.N(a,new W.iB(z))
return z},
gm:function(a){return a.size},
$asad:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iB:{"^":"r:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mU:{"^":"kQ;",
i:function(a,b){return P.aT(a.get(H.K(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gac:function(a){var z=H.b([],[P.j])
this.N(a,new W.iC(z))
return z},
gm:function(a){return a.size},
$asad:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iC:{"^":"r:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bD:{"^":"o;",$isbD:1,"%":"MimeType"},
mV:{"^":"kS;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bD]},
$asx:function(){return[W.bD]},
$isd:1,
$asd:function(){return[W.bD]},
$ise:1,
$ase:function(){return[W.bD]},
$asC:function(){return[W.bD]},
"%":"MimeTypeArray"},
aw:{"^":"dw;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ar:{"^":"cx;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.f(P.eR("No elements"))
if(y>1)throw H.f(P.eR("More than one element"))
return z.firstChild},
ab:function(a,b){var z,y,x,w
H.w(b,"$isd",[W.G],"$asd")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gX:function(a){var z=this.a.childNodes
return new W.ei(z,z.length,-1,[H.c1(C.T,z,"C",0)])},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asx:function(){return[W.G]},
$asd:function(){return[W.G]},
$ase:function(){return[W.G]}},
G:{"^":"ac;0cK:previousSibling=",
i7:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j:function(a){var z=a.nodeValue
return z==null?this.er(a):z},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
n1:{"^":"o;",
i4:[function(a){return a.previousNode()},"$0","gcK",1,0,16],
"%":"NodeIterator"},
iH:{"^":"kU;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.G]},
$asx:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asC:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
bF:{"^":"o;0m:length=",$isbF:1,"%":"Plugin"},
n5:{"^":"kY;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bF]},
$asx:function(){return[W.bF]},
$isd:1,
$asd:function(){return[W.bF]},
$ise:1,
$ase:function(){return[W.bF]},
$asC:function(){return[W.bF]},
"%":"PluginArray"},
n7:{"^":"l3;",
i:function(a,b){return P.aT(a.get(H.K(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gac:function(a){var z=H.b([],[P.j])
this.N(a,new W.j7(z))
return z},
gm:function(a){return a.size},
$asad:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"RTCStatsReport"},
j7:{"^":"r:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
n8:{"^":"ag;0m:length=","%":"HTMLSelectElement"},
bJ:{"^":"ac;",$isbJ:1,"%":"SourceBuffer"},
n9:{"^":"fG;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bJ]},
$asx:function(){return[W.bJ]},
$isd:1,
$asd:function(){return[W.bJ]},
$ise:1,
$ase:function(){return[W.bJ]},
$asC:function(){return[W.bJ]},
"%":"SourceBufferList"},
bK:{"^":"o;",$isbK:1,"%":"SpeechGrammar"},
na:{"^":"l9;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bK]},
$asx:function(){return[W.bK]},
$isd:1,
$asd:function(){return[W.bK]},
$ise:1,
$ase:function(){return[W.bK]},
$asC:function(){return[W.bK]},
"%":"SpeechGrammarList"},
bL:{"^":"o;0m:length=",$isbL:1,"%":"SpeechRecognitionResult"},
nc:{"^":"lc;",
i:function(a,b){return a.getItem(H.K(b))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gac:function(a){var z=H.b([],[P.j])
this.N(a,new W.jq(z))
return z},
gm:function(a){return a.length},
$asad:function(){return[P.j,P.j]},
$isa3:1,
$asa3:function(){return[P.j,P.j]},
"%":"Storage"},
jq:{"^":"r:36;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bN:{"^":"o;",$isbN:1,"%":"CSSStyleSheet|StyleSheet"},
jv:{"^":"ag;",
ap:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
z=W.hK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ar(y).ab(0,new W.ar(z))
return y},
"%":"HTMLTableElement"},
ne:{"^":"ag;",
ap:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.x.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.ar(z)
x=z.gaI(z)
x.toString
z=new W.ar(x)
w=z.gaI(z)
y.toString
w.toString
new W.ar(y).ab(0,new W.ar(w))
return y},
"%":"HTMLTableRowElement"},
nf:{"^":"ag;",
ap:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.x.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.ar(z)
x=z.gaI(z)
y.toString
x.toString
new W.ar(y).ab(0,new W.ar(x))
return y},
"%":"HTMLTableSectionElement"},
eV:{"^":"ag;",$iseV:1,"%":"HTMLTemplateElement"},
bO:{"^":"ac;",$isbO:1,"%":"TextTrack"},
bP:{"^":"ac;",$isbP:1,"%":"TextTrackCue|VTTCue"},
nh:{"^":"lj;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bP]},
$asx:function(){return[W.bP]},
$isd:1,
$asd:function(){return[W.bP]},
$ise:1,
$ase:function(){return[W.bP]},
$asC:function(){return[W.bP]},
"%":"TextTrackCueList"},
ni:{"^":"fK;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bO]},
$asx:function(){return[W.bO]},
$isd:1,
$asd:function(){return[W.bO]},
$ise:1,
$ase:function(){return[W.bO]},
$asC:function(){return[W.bO]},
"%":"TextTrackList"},
nj:{"^":"o;0m:length=","%":"TimeRanges"},
bR:{"^":"o;",$isbR:1,"%":"Touch"},
bg:{"^":"dw;",$isbg:1,"%":"TouchEvent"},
nk:{"^":"lp;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bR]},
$asx:function(){return[W.bR]},
$isd:1,
$asd:function(){return[W.bR]},
$ise:1,
$ase:function(){return[W.bR]},
$asC:function(){return[W.bR]},
"%":"TouchList"},
nl:{"^":"o;0m:length=","%":"TrackDefaultList"},
nn:{"^":"o;",
i4:[function(a){return a.previousNode()},"$0","gcK",1,0,16],
"%":"TreeWalker"},
dw:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nq:{"^":"o;",
j:function(a){return String(a)},
"%":"URL"},
nr:{"^":"ac;0m:length=","%":"VideoTrackList"},
bV:{"^":"aw;",
ghA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ak("deltaY is not supported"))},
ghz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ak("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
kd:{"^":"ac;",
fG:function(a,b){return a.requestAnimationFrame(H.bm(H.l(b,{func:1,ret:-1,args:[P.a1]}),1))},
f_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fu:{"^":"G;",$isfu:1,"%":"Attr"},
nw:{"^":"lw;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bu]},
$asx:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asC:function(){return[W.bu]},
"%":"CSSRuleList"},
nx:{"^":"hH;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isaf",[P.a1],"$asaf")
if(!z)return!1
z=J.bo(b)
return a.left===z.gaY(b)&&a.top===z.gbi(b)&&a.width===z.gai(b)&&a.height===z.gaf(b)},
ga_:function(a){return W.fz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaf:function(a){return a.height},
gai:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nz:{"^":"ly;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bA]},
$asx:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$asC:function(){return[W.bA]},
"%":"GamepadList"},
nC:{"^":"lA;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.G]},
$asx:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asC:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nD:{"^":"lC;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bL]},
$asx:function(){return[W.bL]},
$isd:1,
$asd:function(){return[W.bL]},
$ise:1,
$ase:function(){return[W.bL]},
$asC:function(){return[W.bL]},
"%":"SpeechRecognitionResultList"},
nE:{"^":"lE;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bN]},
$asx:function(){return[W.bN]},
$isd:1,
$asd:function(){return[W.bN]},
$ise:1,
$ase:function(){return[W.bN]},
$asC:function(){return[W.bN]},
"%":"StyleSheetList"},
kj:{"^":"ex;dd:a<",
N:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=this.gac(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gac:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.h(z[w],"$isfu")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asad:function(){return[P.j,P.j]},
$asa3:function(){return[P.j,P.j]}},
kr:{"^":"kj;a",
i:function(a,b){return this.a.getAttribute(H.K(b))},
gm:function(a){return this.gac(this).length}},
ks:{"^":"dr;a,b,c,$ti",
hN:function(a,b,c,d){var z=H.B(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
ny:{"^":"ks;a,b,c,$ti"},
kt:{"^":"eS;a,b,c,d,e,$ti",
fZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.ha(this.b,this.c,z,!1)},
t:{
a_:function(a,b,c,d,e){var z=c==null?null:W.fU(new W.ku(c),W.ab)
z=new W.kt(0,a,b,z,!1,[e])
z.fZ()
return z}}},
ku:{"^":"r:6;a",
$1:function(a){return this.a.$1(H.h(a,"$isab"))}},
cd:{"^":"a;a",
eG:function(a){var z,y
z=$.$get$dB()
if(z.a===0){for(y=0;y<262;++y)z.V(0,C.P[y],W.m0())
for(y=0;y<12;++y)z.V(0,C.n[y],W.m1())}},
aS:function(a){return $.$get$fy().R(0,W.bw(a))},
aB:function(a,b,c){var z,y,x
z=W.bw(a)
y=$.$get$dB()
x=y.i(0,H.k(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.dG(x.$4(a,b,c,this))},
$isaF:1,
t:{
fx:function(a){var z,y
z=W.dS(null)
y=window.location
z=new W.cd(new W.l4(z,y))
z.eG(a)
return z},
nA:[function(a,b,c,d){H.h(a,"$isW")
H.K(b)
H.K(c)
H.h(d,"$iscd")
return!0},"$4","m0",16,0,27],
nB:[function(a,b,c,d){var z,y,x,w,v
H.h(a,"$isW")
H.K(b)
H.K(c)
z=H.h(d,"$iscd").a
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
return z},"$4","m1",16,0,27]}},
C:{"^":"a;$ti",
gX:function(a){return new W.ei(a,this.gm(a),-1,[H.c1(this,a,"C",0)])}},
eD:{"^":"a;a",
aS:function(a){return C.a.du(this.a,new W.iJ(a))},
aB:function(a,b,c){return C.a.du(this.a,new W.iI(a,b,c))},
$isaF:1},
iJ:{"^":"r:19;a",
$1:function(a){return H.h(a,"$isaF").aS(this.a)}},
iI:{"^":"r:19;a,b,c",
$1:function(a){return H.h(a,"$isaF").aB(this.a,this.b,this.c)}},
l5:{"^":"a;",
eJ:function(a,b,c,d){var z,y,x
this.a.ab(0,c)
z=b.cO(0,new W.l6())
y=b.cO(0,new W.l7())
this.b.ab(0,z)
x=this.c
x.ab(0,C.R)
x.ab(0,y)},
aS:function(a){return this.a.R(0,W.bw(a))},
aB:["ew",function(a,b,c){var z,y
z=W.bw(a)
y=this.c
if(y.R(0,H.k(z)+"::"+b))return this.d.ho(c)
else if(y.R(0,"*::"+b))return this.d.ho(c)
else{y=this.b
if(y.R(0,H.k(z)+"::"+b))return!0
else if(y.R(0,"*::"+b))return!0
else if(y.R(0,H.k(z)+"::*"))return!0
else if(y.R(0,"*::*"))return!0}return!1}],
$isaF:1},
l6:{"^":"r:20;",
$1:function(a){return!C.a.R(C.n,H.K(a))}},
l7:{"^":"r:20;",
$1:function(a){return C.a.R(C.n,H.K(a))}},
lg:{"^":"l5;e,a,b,c,d",
aB:function(a,b,c){if(this.ew(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1},
t:{
fI:function(){var z,y,x,w,v
z=P.j
y=P.ev(C.m,z)
x=H.B(C.m,0)
w=H.l(new W.lh(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.lg(y,P.c9(null,null,null,z),P.c9(null,null,null,z),P.c9(null,null,null,z),null)
y.eJ(null,new H.iq(C.m,w,[x,z]),v,null)
return y}}},
lh:{"^":"r:35;",
$1:function(a){return"TEMPLATE::"+H.k(H.K(a))}},
lf:{"^":"a;",
aS:function(a){var z=J.M(a)
if(!!z.$iseM)return!1
z=!!z.$isdt
if(z&&W.bw(a)==="foreignObject")return!1
if(z)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.h.bR(b,"on"))return!1
return this.aS(a)},
$isaF:1},
ei:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.h9(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
aF:{"^":"a;"},
l4:{"^":"a;a,b",$isnp:1},
fP:{"^":"a;a",
cT:function(a){new W.lt(this).$2(a,null)},
b4:function(a,b){if(b==null)J.dR(a)
else b.removeChild(a)},
fM:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hc(a)
x=y.gdd().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.am(t)}v="element unprintable"
try{v=J.a6(a)}catch(t){H.am(t)}try{u=W.bw(a)
this.fL(H.h(a,"$isW"),b,z,v,u,H.h(y,"$isa3"),H.K(x))}catch(t){if(H.am(t) instanceof P.aA)throw t
else{this.b4(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fL:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aS(a)){this.b4(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aB(a,"is",g)){this.b4(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gac(f)
y=H.b(z.slice(0),[H.B(z,0)])
for(x=f.gac(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.i(y,x)
w=y[x]
if(!this.a.aB(a,J.hg(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.M(a).$iseV)this.cT(a.content)},
$isn2:1},
lt:{"^":"r:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fM(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hd(z)}catch(w){H.am(w)
v=H.h(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isG")}}},
km:{"^":"o+hx;"},
kn:{"^":"o+x;"},
ko:{"^":"kn+C;"},
kp:{"^":"o+x;"},
kq:{"^":"kp+C;"},
kv:{"^":"o+x;"},
kw:{"^":"kv+C;"},
kI:{"^":"o+x;"},
kJ:{"^":"kI+C;"},
kP:{"^":"o+ad;"},
kQ:{"^":"o+ad;"},
kR:{"^":"o+x;"},
kS:{"^":"kR+C;"},
kT:{"^":"o+x;"},
kU:{"^":"kT+C;"},
kX:{"^":"o+x;"},
kY:{"^":"kX+C;"},
l3:{"^":"o+ad;"},
fF:{"^":"ac+x;"},
fG:{"^":"fF+C;"},
l8:{"^":"o+x;"},
l9:{"^":"l8+C;"},
lc:{"^":"o+ad;"},
li:{"^":"o+x;"},
lj:{"^":"li+C;"},
fJ:{"^":"ac+x;"},
fK:{"^":"fJ+C;"},
lo:{"^":"o+x;"},
lp:{"^":"lo+C;"},
lv:{"^":"o+x;"},
lw:{"^":"lv+C;"},
lx:{"^":"o+x;"},
ly:{"^":"lx+C;"},
lz:{"^":"o+x;"},
lA:{"^":"lz+C;"},
lB:{"^":"o+x;"},
lC:{"^":"lB+C;"},
lD:{"^":"o+x;"},
lE:{"^":"lD+C;"}}],["","",,P,{"^":"",
lV:function(a){var z,y
z=J.M(a)
if(!!z.$isct){y=z.gdB(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fM(a.data,a.height,a.width)},
lU:function(a){if(a instanceof P.fM)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.eu(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.K(y[w])
z.V(0,v,a[v])}return z},
lS:function(a,b){var z={}
a.N(0,new P.lT(z))
return z},
eb:function(){var z=$.ea
if(z==null){z=J.cV(window.navigator.userAgent,"Opera",0)
$.ea=z}return z},
hG:function(){var z,y
z=$.e7
if(z!=null)return z
y=$.e8
if(y==null){y=J.cV(window.navigator.userAgent,"Firefox",0)
$.e8=y}if(y)z="-moz-"
else{y=$.e9
if(y==null){y=!P.eb()&&J.cV(window.navigator.userAgent,"Trident/",0)
$.e9=y}if(y)z="-ms-"
else z=P.eb()?"-o-":"-webkit-"}$.e7=z
return z},
fM:{"^":"a;dB:a>,b,c",$isct:1},
lT:{"^":"r:13;a",
$2:function(a,b){this.a[a]=b}},
hS:{"^":"cx;a,b",
gc2:function(){var z,y,x
z=this.b
y=H.al(z,"x",0)
x=W.W
return new H.io(new H.dz(z,H.l(new P.hT(),{func:1,ret:P.P,args:[y]}),[y]),H.l(new P.hU(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.b8(this.gc2().a)},
i:function(a,b){var z=this.gc2()
return z.b.$1(J.cW(z.a,b))},
gX:function(a){var z=P.ik(this.gc2(),!1,W.W)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asx:function(){return[W.W]},
$asd:function(){return[W.W]},
$ase:function(){return[W.W]}},
hT:{"^":"r:15;",
$1:function(a){return!!J.M(H.h(a,"$isG")).$isW}},
hU:{"^":"r:33;",
$1:function(a){return H.c(H.h(a,"$isG"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kZ:{"^":"a;$ti",
gbf:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.F(z+this.c,H.B(this,0))},
gcj:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.F(z+this.d,H.B(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c0(b,"$isaf",[P.a1],"$asaf")
if(!z)return!1
z=this.a
y=J.bo(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbi(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.B(this,0)
if(H.F(z+this.c,w)===y.gbf(b)){if(typeof x!=="number")return x.F()
z=H.F(x+this.d,w)===y.gcj(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.b6(z)
x=this.b
w=J.b6(x)
if(typeof z!=="number")return z.F()
v=H.B(this,0)
z=H.F(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.F(x+this.d,v)
return P.kK(P.cL(P.cL(P.cL(P.cL(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
af:{"^":"kZ;aY:a>,bi:b>,ai:c>,af:d>,$ti",t:{
iZ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.am()
if(c<0)z=-c*0
else z=c
H.F(z,e)
if(typeof d!=="number")return d.am()
if(d<0)y=-d*0
else y=d
return new P.af(a,b,z,H.F(y,e),[e])}}}}],["","",,P,{"^":"",c8:{"^":"o;",$isc8:1,"%":"SVGLength"},mP:{"^":"kM;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asx:function(){return[P.c8]},
$isd:1,
$asd:function(){return[P.c8]},
$ise:1,
$ase:function(){return[P.c8]},
$asC:function(){return[P.c8]},
"%":"SVGLengthList"},ca:{"^":"o;",$isca:1,"%":"SVGNumber"},n3:{"^":"kW;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asx:function(){return[P.ca]},
$isd:1,
$asd:function(){return[P.ca]},
$ise:1,
$ase:function(){return[P.ca]},
$asC:function(){return[P.ca]},
"%":"SVGNumberList"},n6:{"^":"o;0m:length=","%":"SVGPointList"},eM:{"^":"dt;",$iseM:1,"%":"SVGScriptElement"},nd:{"^":"le;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asx:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asC:function(){return[P.j]},
"%":"SVGStringList"},dt:{"^":"W;",
gdw:function(a){return new P.hS(a,new W.ar(a))},
ap:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.aF])
C.a.h(z,W.fx(null))
C.a.h(z,W.fI())
C.a.h(z,new W.lf())
c=new W.fP(new W.eD(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).hx(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ar(w)
u=z.gaI(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isdt:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},cb:{"^":"o;",$iscb:1,"%":"SVGTransform"},nm:{"^":"lr;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asx:function(){return[P.cb]},
$isd:1,
$asd:function(){return[P.cb]},
$ise:1,
$ase:function(){return[P.cb]},
$asC:function(){return[P.cb]},
"%":"SVGTransformList"},kL:{"^":"o+x;"},kM:{"^":"kL+C;"},kV:{"^":"o+x;"},kW:{"^":"kV+C;"},ld:{"^":"o+x;"},le:{"^":"ld+C;"},lq:{"^":"o+x;"},lr:{"^":"lq+C;"}}],["","",,P,{"^":"",ms:{"^":"o;0m:length=","%":"AudioBuffer"},mt:{"^":"kk;",
i:function(a,b){return P.aT(a.get(H.K(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gac:function(a){var z=H.b([],[P.j])
this.N(a,new P.hj(z))
return z},
gm:function(a){return a.size},
$asad:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"AudioParamMap"},hj:{"^":"r:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},mu:{"^":"ac;0m:length=","%":"AudioTrackList"},hl:{"^":"ac;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n4:{"^":"hl;0m:length=","%":"OfflineAudioContext"},kk:{"^":"o+ad;"}}],["","",,P,{"^":"",dn:{"^":"o;",
ea:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.M(g)
if(!!y.$isct&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.lU(g))
return}if(!!y.$isel&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.hh("Incorrect number or type of arguments"))},
ii:function(a,b,c,d,e,f,g){return this.ea(a,b,c,d,e,f,g,null,null,null)},
$isdn:1,
"%":"WebGLRenderingContext"},jw:{"^":"o;",$isjw:1,"%":"WebGLTexture"},jT:{"^":"o;",$isjT:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nb:{"^":"lb;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
E:function(a,b){return this.i(a,b)},
$asx:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$ise:1,
$ase:function(){return[[P.a3,,,]]},
$asC:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},la:{"^":"o+x;"},lb:{"^":"la+C;"}}],["","",,O,{"^":"",ao:{"^":"a;0a,0b,0c,0d,$ti",
bn:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cU:function(a,b,c){var z=H.al(this,"ao",0)
H.l(b,{func:1,ret:P.P,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.D,[P.d,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aH:function(a,b){return this.cU(a,null,b)},
bp:function(a){var z
H.w(a,"$isd",[H.al(this,"ao",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d_:function(a,b){var z
H.w(b,"$isd",[H.al(this,"ao",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.at(z,z.length,0,[H.B(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"ao",0)
H.F(b,z)
z=[z]
if(this.bp(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d_(x,H.b([b],z))}},
ab:function(a,b){var z,y
H.w(b,"$isd",[H.al(this,"ao",0)],"$asd")
if(this.bp(b)){z=this.a
y=z.length
C.a.ab(z,b)
this.d_(y,b)}},
$isd:1,
t:{
cm:function(a){var z=new O.ao([a])
z.bn(a)
return z}}},di:{"^":"a;0a,0b",
gm:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
eD:function(a){var z=this.b
if(!(z==null))z.u(a)},
aJ:function(){return this.eD(null)},
gS:function(a){var z=this.a
if(z.length>0)return C.a.gbL(z)
else return V.aW()},
bN:function(a){var z=this.a
if(a==null)C.a.h(z,V.aW())
else C.a.h(z,a)
this.aJ()},
aD:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cX:{"^":"a;"},aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a8:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scW:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().M(0,this.ge6())
y=this.c
if(y!=null)y.gp().h(0,this.ge6())
x=new D.A("shape",z,this.c,this,[F.eN])
x.b=!0
this.ar(x)}},
se3:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gp().M(0,this.ge5())
if(a!=null)a.gp().h(0,this.ge5())
this.r=a
y=new D.A("mover",z,a,this,[U.a8])
y.b=!0
this.ar(y)}},
a6:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.A("matrix",x,y,this,[V.a7])
w.b=!0
this.ar(w)}for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();)z.d.a6(0,b)},
a4:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gS(z))
else C.a.h(z.a,y.n(0,z.gS(z)))
z.aJ()
a.cL(this.f)
z=a.dy
x=(z&&C.a).gbL(z)
if(x!=null&&this.d!=null)x.be(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();)z.d.a4(a)
a.cJ()
a.dx.aD()},
gp:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
ar:function(a){var z=this.z
if(!(z==null))z.u(a)},
a9:function(){return this.ar(null)},
hW:[function(a){H.h(a,"$isv")
this.e=null
this.ar(a)},function(){return this.hW(null)},"j9","$1","$0","ge6",0,2,0],
hV:[function(a){this.ar(H.h(a,"$isv"))},function(){return this.hV(null)},"j8","$1","$0","ge5",0,2,0],
hT:[function(a){this.ar(H.h(a,"$isv"))},function(){return this.hT(null)},"j6","$1","$0","ge4",0,2,0],
j5:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isd",[E.aK],"$asd")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.aL()
t.d=0
u.sa8(t)}t=u.ga8()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a9()},"$2","ghS",8,0,5],
j7:[function(a,b){var z,y,x,w,v
H.w(b,"$isd",[E.aK],"$asd")
for(z=b.length,y=this.ge4(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.ga8()==null){v=new D.aL()
v.d=0
w.sa8(v)}w.ga8().M(0,y)}}this.a9()},"$2","ghU",8,0,5],
$isaE:1,
t:{
cq:function(a,b,c,d,e,f){var z,y
z=new E.aK()
z.a=d
z.b=!0
y=O.cm(E.aK)
z.y=y
y.aH(z.ghS(),z.ghU())
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
z.scW(0,e)
z.se3(c)
return z}}},j2:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ez:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.av(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.di()
y=[V.a7]
z.a=H.b([],y)
z.gp().h(0,new E.j4(this))
this.cy=z
z=new O.di()
z.a=H.b([],y)
z.gp().h(0,new E.j5(this))
this.db=z
z=new O.di()
z.a=H.b([],y)
z.gp().h(0,new E.j6(this))
this.dx=z
z=H.b([],[O.aZ])
this.dy=z
C.a.h(z,null)
this.fr=new H.bb(0,0,[P.j,A.bI])},
gi5:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gS(z)
y=this.db
y=z.n(0,y.gS(y))
this.z=y
z=y}return z},
ge8:function(){var z,y
z=this.ch
if(z==null){z=this.gi5()
y=this.dx
y=z.n(0,y.gS(y))
this.ch=y
z=y}return z},
gee:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gS(z)
y=this.dx
y=z.n(0,y.gS(y))
this.cx=y
z=y}return z},
cL:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbL(z):a;(z&&C.a).h(z,y)},
cJ:function(){var z=this.dy
if(z.length>1)z.pop()},
b5:function(a){var z=a.b
if(z.length===0)throw H.f(P.n("May not cache a shader with no name."))
if(this.fr.dA(0,z))throw H.f(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.V(0,z,a)},
t:{
j3:function(a,b){var z=new E.j2(a,b)
z.ez(a,b)
return z}}},j4:{"^":"r:9;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.z=null
z.ch=null}},j5:{"^":"r:9;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j6:{"^":"r:9;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a8:x@,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
eF:[function(a){var z
H.h(a,"$isv")
z=this.x
if(!(z==null))z.u(a)
this.ia()},function(){return this.eF(null)},"eE","$1","$0","gd0",0,2,0],
ghG:function(){var z,y,x
z=Date.now()
y=C.f.a3(P.ed(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.av(z,!1)
return x/y},
dj:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.q(z)
x=C.i.cB(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.i.cB(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.f_(C.l,this.gi9())},
ia:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jI(this),{func:1,ret:-1,args:[P.a1]})
C.z.f_(z)
C.z.fG(z,W.fU(y,P.a1))}},"$0","gi9",0,0,3],
i8:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dj()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.av(w,!1)
x.y=P.ed(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aJ()
w=x.db
C.a.sm(w.a,0)
w.aJ()
w=x.dx
C.a.sm(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a4(this.e)}x=this.z
if(!(x==null))x.u(null)}catch(v){z=H.am(v)
y=H.bp(v)
P.dP("Error: "+H.k(z))
P.dP("Stack: "+H.k(y))
throw H.f(z)}},
t:{
jH:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isd_)return E.eZ(a,!0,!0,!0,!1)
y=W.d0(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdw(a).h(0,y)
w=E.eZ(y,!0,!0,!0,!1)
w.a=a
return w},
eZ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jG()
y=P.ii(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.k.bQ(a,"webgl",y)
x=H.h(x==null?C.k.bQ(a,"experimental-webgl",y):x,"$isdn")
if(x==null)H.p(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j3(x,a)
w=new T.jB(x)
w.b=H.a0(x.getParameter(3379))
w.c=H.a0(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jZ(a)
v=new X.ic()
v.c=new X.aD(!1,!1,!1)
v.d=P.c9(null,null,null,P.D)
w.b=v
v=new X.iD(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.il(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jL(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eS,P.a]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.l(w.gff(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.l(w.gfk(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.l(w.gfc(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.l(w.gfm(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.l(w.gfl(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.l(w.gfp(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.l(w.gfs(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.l(w.gfq(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a_(a,H.K(W.hM(a)),H.l(w.gft(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.l(w.gfg(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.l(w.gfh(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.l(w.gfu(),q),!1,r))
r=w.z
q=W.bg
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.l(w.gfE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.l(w.gfC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.l(w.gfD(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.av(Date.now(),!1)
z.cy=0
z.dj()
return z}}},jI:{"^":"r:32;a",
$1:function(a){var z
H.mf(a)
z=this.a
if(z.ch){z.ch=!1
z.i8()}}}}],["","",,Z,{"^":"",fs:{"^":"a;a,b",t:{
dy:function(a,b,c){var z
H.w(c,"$ise",[P.D],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bj(c)),35044)
a.bindBuffer(b,null)
return new Z.fs(b,z)}}},dZ:{"^":"cX;a,b,c,d,e",
G:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.am(y)
x=P.n('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.k(z))
throw H.f(x)}},
j:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},cc:{"^":"a;a",$ismv:1},bt:{"^":"a;a,0b,c,d",
ae:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
G:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].G(a)},
a5:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a4:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isng:1},cu:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},b_:{"^":"a;a",
gcX:function(a){var z,y
z=this.a
y=(z&$.$get$a4().a)!==0?3:0
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bh().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
hp:function(a){var z,y,x
z=$.$get$a4()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bh()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fr()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.b([],[P.j])
y=this.a
if((y&$.$get$a4().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bh().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
t:{
aq:function(a){return new Z.b_(a)}}}}],["","",,D,{"^":"",e1:{"^":"a;"},aL:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.v]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.R(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.R(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).M(z,b)||y}return y},
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.N(y,new D.hQ(z))
y=this.b
if(!(y==null))C.a.N(y,new D.hR(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
cs:function(){return this.u(null)},
ib:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.u(y)}}},
aF:function(a){return this.ib(a,!0,!1)},
t:{
E:function(){var z=new D.aL()
z.d=0
return z}}},hQ:{"^":"r:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},hR:{"^":"r:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},c5:{"^":"v;c,d,a,0b,$ti"},c6:{"^":"v;c,d,a,0b,$ti"},A:{"^":"v;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",e_:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
t:{"^":"mw<"}},eq:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eq))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},er:{"^":"v;c,a,0b"},ic:{"^":"a;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.u(y)},
hY:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.u(y)}},ew:{"^":"cz;x,y,c,d,e,a,0b"},il:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
az:function(a,b){var z,y,x,w,v,u,t,s
z=new P.av(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.n()
v=b.b
u=this.ch
if(typeof v!=="number")return v.n()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gaU()
s=new X.bE(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cI:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.az(a,b))
return!0},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.ef()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.az(a,b))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.az(a,b))
return!0},
i2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.n()
t=a.b
s=this.cy
if(typeof t!=="number")return t.n()
w=new X.dj(new V.X(v*u,t*s),y,x,new P.av(w,!1),this)
w.b=!0
z.u(w)
return!0},
fo:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.av(Date.now(),!1)
y=this.f
x=new X.ew(c,a,this.a.gaU(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.V(0,0)}},aD:{"^":"a;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
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
return z+(this.c?"Shift+":"")}},bE:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},iD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c0:function(a,b,c){var z,y,x
z=new P.av(Date.now(),!1)
y=this.a.gaU()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cI:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.c0(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.ef()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.c0(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.c0(a,b,!1))
return!0},
i3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.n()
u=a.b
t=this.ch
if(typeof u!=="number")return u.n()
x=new X.dj(new V.X(w*v,u*t),y,b,new P.av(x,!1),this)
x.b=!0
z.u(x)
return!0},
gdC:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbP:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
ge2:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},dj:{"^":"cz;x,c,d,e,a,0b"},cz:{"^":"v;"},f3:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},jL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
az:function(a,b){var z,y,x,w
H.w(a,"$ise",[V.V],"$ase")
z=new P.av(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gaU()
w=new X.f3(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.w(a,"$ise",[V.V],"$ase")
z=this.b
if(z==null)return!1
z.u(this.az(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$ise",[V.V],"$ase")
z=this.c
if(z==null)return!1
z.u(this.az(a,!0))
return!0},
i_:function(a){var z
H.w(a,"$ise",[V.V],"$ase")
z=this.d
if(z==null)return!1
z.u(this.az(a,!1))
return!0}},jZ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaU:function(){var z=this.a
return V.aY(0,0,(z&&C.k).gdz(z).c,C.k.gdz(z).d)},
da:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eq(z,new X.aD(y,a.altKey,a.shiftKey))},
aR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cd:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aA:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.V(y-w,x-v)},
b3:function(a){return new V.X(a.movementX,a.movementY)},
c9:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.i.Y(u.pageX)
C.i.Y(u.pageY)
s=z.left
C.i.Y(u.pageX)
C.a.h(y,new V.V(t-s,C.i.Y(u.pageY)-z.top))}return y},
ax:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e_(z,new X.aD(y,a.altKey,a.shiftKey))},
c3:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.I()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iH:[function(a){this.f=!0},"$1","gfk",4,0,6],
iz:[function(a){this.f=!1},"$1","gfc",4,0,6],
iC:[function(a){H.h(a,"$isaw")
if(this.f&&this.c3(a))a.preventDefault()},"$1","gff",4,0,4],
iJ:[function(a){var z
H.h(a,"$isbC")
if(!this.f)return
z=this.da(a)
if(this.b.i1(z))a.preventDefault()},"$1","gfm",4,0,28],
iI:[function(a){var z
H.h(a,"$isbC")
if(!this.f)return
z=this.da(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfl",4,0,28],
iL:[function(a){var z,y,x,w
H.h(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aR(a)
if(this.x){y=this.ax(a)
x=this.b3(a)
if(this.d.cI(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ax(a)
w=this.aA(a)
if(this.c.cI(y,w))a.preventDefault()},"$1","gfp",4,0,4],
iN:[function(a){var z,y,x
H.h(a,"$isaw")
this.aR(a)
z=this.ax(a)
if(this.x){y=this.b3(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","gfs",4,0,4],
iE:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.c3(a)){this.aR(a)
z=this.ax(a)
if(this.x){y=this.b3(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bc(z,x))a.preventDefault()}},"$1","gfh",4,0,4],
iM:[function(a){var z,y,x
H.h(a,"$isaw")
this.aR(a)
z=this.ax(a)
if(this.x){y=this.b3(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gfq",4,0,4],
iD:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.c3(a)){this.aR(a)
z=this.ax(a)
if(this.x){y=this.b3(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gfg",4,0,4],
iO:[function(a){var z,y
H.h(a,"$isbV")
this.aR(a)
z=new V.X((a&&C.y).ghz(a),C.y.ghA(a)).A(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.aA(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gft",4,0,46],
iP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ax(this.y)
v=this.aA(this.y)
this.d.fo(w,v,x)}},"$1","gfu",4,0,6],
iX:[function(a){var z
H.h(a,"$isbg")
this.a.focus()
this.f=!0
this.cd(a)
z=this.c9(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfE",4,0,11],
iV:[function(a){var z
H.h(a,"$isbg")
this.cd(a)
z=this.c9(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfC",4,0,11],
iW:[function(a){var z
H.h(a,"$isbg")
this.cd(a)
z=this.c9(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfD",4,0,11]}}],["","",,D,{"^":"",cp:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aK:[function(a){var z
H.h(a,"$isv")
z=this.d
if(!(z==null))z.u(a)},function(){return this.aK(null)},"ip","$1","$0","geI",0,2,0],
$isZ:1,
$isaE:1,
t:{
ec:function(a,b){var z,y,x
z=new D.cp()
z.c=new V.Y(1,1,1)
z.a=new V.L(0,0,1)
y=z.b
z.b=b
b.gp().h(0,z.geI())
x=new D.A("mover",y,z.b,z,[U.a8])
x.b=!0
z.aK(x)
if(!z.c.v(0,a)){y=z.c
z.c=a
x=new D.A("color",y,a,z,[V.Y])
x.b=!0
z.aK(x)}return z}}},Z:{"^":"a;",$isaE:1},id:{"^":"ao;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.u(a)},
fn:[function(a){var z
H.h(a,"$isv")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.fn(null)},"iK","$1","$0","gdg",0,2,0],
iQ:[function(a){var z,y,x
H.w(a,"$isd",[D.Z],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.eH(x))return!1}return!0},"$1","gfv",4,0,31],
iw:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Z
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gdg(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isZ")
if(t instanceof D.cp)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aL()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gf9",8,0,25],
iS:[function(a,b){var z,y,x,w,v,u
z=D.Z
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gdg(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=H.h(b[w],"$isZ")
if(v instanceof D.cp)C.a.M(this.e,v)
u=v.d
if(u==null){u=new D.aL()
u.d=0
v.d=u}u.M(0,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfz",8,0,25],
eH:function(a){var z=C.a.R(this.e,a)
return z},
$asd:function(){return[D.Z]},
$asao:function(){return[D.Z]}},iP:{"^":"a;",$isZ:1,$isaE:1},jo:{"^":"a;",$isZ:1,$isaE:1},jD:{"^":"a;",$isZ:1,$isaE:1},jE:{"^":"a;",$isZ:1,$isaE:1},jF:{"^":"a;",$isZ:1,$isaE:1}}],["","",,V,{"^":"",
my:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","iy",8,0,30],
mo:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.ek(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.h.al("null",c)
return C.h.al(C.i.ec($.m.$2(a,0)?0:a,b),c+b+1)},
bn:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$ise",[P.y],"$ase")
z=H.b([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.V(z,u,C.h.al(z[u],x))}return z},
c2:function(a,b){return C.i.ik(Math.pow(b,C.G.cB(Math.log(H.lR(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
au:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
dh:{"^":"a;a,b,c,d,e,f,r,x,y",
a0:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dh))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.y]
y=V.bn(H.b([this.a,this.d,this.r],z),3,0)
x=V.bn(H.b([this.b,this.e,this.x],z),3,0)
w=V.bn(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
a7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a0:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
cD:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.n()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.n()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.n()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.n()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.n()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.aW()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
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
if(typeof f!=="number")return f.n()
e=this.f
if(typeof e!=="number")return e.n()
d=this.r
if(typeof d!=="number")return d.n()
c=this.x
if(typeof c!=="number")return c.n()
b=this.y
if(typeof b!=="number")return b.n()
a=this.z
if(typeof a!=="number")return a.n()
a0=this.Q
if(typeof a0!=="number")return a0.n()
a1=this.ch
if(typeof a1!=="number")return a1.n()
a2=this.cx
if(typeof a2!=="number")return a2.n()
a3=this.cy
if(typeof a3!=="number")return a3.n()
a4=this.db
if(typeof a4!=="number")return a4.n()
a5=this.dx
if(typeof a5!=="number")return a5.n()
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.e
if(typeof t!=="number")return t.n()
s=this.f
if(typeof s!=="number")return s.n()
r=this.r
if(typeof r!=="number")return r.n()
q=this.y
if(typeof q!=="number")return q.n()
p=this.z
if(typeof p!=="number")return p.n()
o=this.Q
if(typeof o!=="number")return o.n()
return new V.L(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.d
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.n()
r=this.f
if(typeof r!=="number")return r.n()
q=this.r
if(typeof q!=="number")return q.n()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.n()
n=this.z
if(typeof n!=="number")return n.n()
m=this.Q
if(typeof m!=="number")return m.n()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.ah(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
z=b.z
if(!$.m.$2(z,this.z))return!1
z=b.Q
if(!$.m.$2(z,this.Q))return!1
z=b.ch
if(!$.m.$2(z,this.ch))return!1
z=b.cx
if(!$.m.$2(z,this.cx))return!1
z=b.cy
if(!$.m.$2(z,this.cy))return!1
z=b.db
if(!$.m.$2(z,this.db))return!1
z=b.dx
if(!$.m.$2(z,this.dx))return!1
return!0},
j:function(a){return this.J()},
dY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.bn(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bn(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bn(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bn(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.i(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.i(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.i(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.i(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.i(y,1)
q=q+y[1]+", "
if(1>=t)return H.i(x,1)
q=q+x[1]+", "
if(1>=s)return H.i(w,1)
q=q+w[1]+", "
if(1>=r)return H.i(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.i(y,2)
u=u+y[2]+", "
if(2>=t)return H.i(x,2)
u=u+x[2]+", "
if(2>=s)return H.i(w,2)
u=u+w[2]+", "
if(2>=r)return H.i(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.i(y,3)
q=q+y[3]+", "
if(3>=t)return H.i(x,3)
q=q+x[3]+", "
if(3>=s)return H.i(w,3)
q=q+w[3]+", "
if(3>=r)return H.i(v,3)
return u+(q+v[3]+"]")},
B:function(a){return this.dY(a,3,0)},
J:function(){return this.dY("",3,0)},
t:{
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aW:function(){return V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
iA:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iz:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eC:function(a,b,c,d){return V.eB(new V.ah(0,0,0),new V.L(0,1,0),new V.L(a,b,c))},
eB:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.D(c)))
y=b.b8(z)
x=y.A(0,Math.sqrt(y.D(y)))
w=z.b8(x)
v=new V.L(a.a,a.b,a.c)
return V.aC(x.a,w.a,z.a,x.O(0).D(v),x.b,w.b,z.b,w.O(0).D(v),x.c,w.c,z.c,z.O(0).D(v),0,0,0,1)}}},
V:{"^":"a;a,b",
I:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
ah:{"^":"a;a,b,c",
I:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bG:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cC:{"^":"a;a,b,c,d",
gah:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
t:{
aY:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cC(a,b,c,d)}}},
X:{"^":"a;a,b",
hL:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,23],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.X(z*b,y*b)},
A:function(a,b){var z,y
if($.m.$2(b,0))return new V.X(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.X(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
L:{"^":"a;a,b,c",
hL:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,23],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cE:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.L(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b8:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.L(-this.a,-this.b,-this.c)},
A:function(a,b){if($.m.$2(b,0))return new V.L(0,0,0)
return new V.L(this.a/b,this.b/b,this.c/b)},
dZ:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ht:{"^":"e1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bV:function(a){var z=V.mo(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.u(a)},
scP:function(a,b){},
scF:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bV(z)}z=new D.A("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.T(z)}},
scH:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bV(z)}z=new D.A("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.T(z)}},
sag:function(a,b){var z,y
b=this.bV(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.y])
z.b=!0
this.T(z)}},
scG:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.T(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.y])
z.b=!0
this.T(z)}},
scp:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.y])
z.b=!0
this.T(z)}},
a6:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sag(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
d2:function(){var z=new U.ht()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},d3:{"^":"a8;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
sS:function(a,b){var z,y,x
if(!J.R(this.a,b)){z=this.a
this.a=b
y=new D.A("matrix",z,b,this,[V.a7])
y.b=!0
x=this.b
if(!(x==null))x.u(y)}},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.R(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
t:{
d4:function(a){var z=new U.d3()
z.sS(0,a)
return z}}},ek:{"^":"ao;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
T:[function(a){var z
H.h(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.T(null)},"ao","$1","$0","gaP",0,2,0],
iv:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaP(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gf8",8,0,22],
iR:[function(a,b){var z,y,x,w,v
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaP(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gp().M(0,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfw",8,0,22],
b_:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.am()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.B(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.b_(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.aW():x
z=this.e
if(!(z==null))z.aF(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.R(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asd:function(){return[U.a8]},
$asao:function(){return[U.a8]},
$isa8:1},a8:{"^":"e1;"},k_:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
T:[function(a){var z
H.h(a,"$isv")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.T(null)},"ao","$1","$0","gaP",0,2,0],
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdC().h(0,this.gc4())
this.a.c.ge2().h(0,this.gc5())
this.a.c.gbP().h(0,this.gc6())
return!0},
f4:[function(a){H.h(a,"$isv")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc4",4,0,1],
f5:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isv"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.X(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.X(y.a,y.b).n(0,2).A(0,z.gah())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.n()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.X(x.a,x.b).n(0,2).A(0,z.gah())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sag(0,-v*u+t)
this.b.sU(0)
y=y.I(0,a.z)
this.Q=new V.X(y.a,y.b).n(0,2).A(0,z.gah())}this.ao()},"$1","gc5",4,0,1],
f6:[function(a){var z,y,x
H.h(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.n()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sU(y*10*x)
this.ao()}},"$1","gc6",4,0,1],
b_:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.am()
if(z<y){this.ch=y
x=b.y
this.b.a6(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aC(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},k0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
T:[function(a){var z
H.h(a,"$isv")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.T(null)},"ao","$1","$0","gaP",0,2,0],
b6:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdC().h(0,this.gc4())
this.a.c.ge2().h(0,this.gc5())
this.a.c.gbP().h(0,this.gc6())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.gf1())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gf2())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gfY())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gfX())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.gfW())
return!0},
as:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.X(z,y)},
f4:[function(a){a=H.c(H.h(a,"$isv"),"$isbE")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc4",4,0,1],
f5:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isv"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.X(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.as(new V.X(y.a,y.b).n(0,2).A(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.as(new V.X(x.a,x.b).n(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sag(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.as(new V.X(y.a,y.b).n(0,2).A(0,z.gah()))}this.ao()},"$1","gc5",4,0,1],
f6:[function(a){var z,y,x
H.h(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.ao()}},"$1","gc6",4,0,1],
is:[function(a){if(H.c(H.h(a,"$isv"),"$isew").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf1",4,0,1],
it:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isv"),"$isbE")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.as(new V.X(x.a,x.b).n(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sag(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.as(new V.X(y.a,y.b).n(0,2).A(0,z.gah()))
this.ao()},"$1","gf2",4,0,1],
j0:[function(a){H.h(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfY",4,0,1],
j_:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isv"),"$isf3")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.X(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.as(new V.X(y.a,y.b).n(0,2).A(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.as(new V.X(x.a,x.b).n(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sag(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.I(0,a.z)
this.dx=this.as(new V.X(y.a,y.b).n(0,2).A(0,z.gah()))}this.ao()},"$1","gfX",4,0,1],
iZ:[function(a){var z,y,x
H.h(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.ao()}},"$1","gfW",4,0,1],
b_:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.am()
if(z<y){this.dy=y
x=b.y
this.c.a6(0,x)
this.b.a6(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aC(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.n(0,V.aC(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},k1:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.u(a)},
b6:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=this.gf7()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
iu:[function(a){var z,y,x,w
H.h(a,"$isv")
if(!J.R(this.b,this.a.b.c))return
H.c(a,"$isdj")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.n()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.y])
z.b=!0
this.T(z)}},"$1","gf7",4,0,1],
b_:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.iz(x,x,x,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",hu:{"^":"ao;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
a1:[function(a){var z
H.h(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.a1(null)},"d1","$1","$0","gW",0,2,0],
iT:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aG
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfA",8,0,17],
iU:[function(a,b){var z,y,x,w,v
z=M.aG
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gW(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gp().M(0,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfB",8,0,17],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asd:function(){return[M.aG]},
$asao:function(){return[M.aG]},
$isaG:1},hw:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
a1:[function(a){var z
H.h(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.a1(null)},"d1","$1","$0","gW",0,2,0],
saT:function(a){var z,y
if(a==null)a=new X.i3()
z=this.a
if(z!==a){if(z!=null)z.gp().M(0,this.gW())
y=this.a
this.a=a
a.gp().h(0,this.gW())
z=new D.A("camera",y,this.a,this,[X.cl])
z.b=!0
this.a1(z)}},
saG:function(a,b){var z,y
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().M(0,this.gW())
y=this.b
this.b=b
b.gp().h(0,this.gW())
z=new D.A("target",y,this.b,this,[X.cD])
z.b=!0
this.a1(z)}},
sav:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().M(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gW())
z=new D.A("technique",y,this.c,this,[O.aZ])
z.b=!0
this.a1(z)}},
a4:function(a){var z
a.cL(this.c)
this.b.G(a)
this.a.G(a)
z=this.c
if(z!=null)z.a6(0,a)
this.d.a6(0,a)
this.d.a4(a)
this.a.a5(a)
this.b.a5(a)
a.cJ()},
$isaG:1,
t:{
d5:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.hw()
z.saT(a)
z.saG(0,b)
z.sav(c)
y=E.cq(null,!0,null,"",null,null)
x=F.dp()
w=x.a
v=new V.L(-1,-1,1)
v=v.A(0,Math.sqrt(v.D(v)))
u=w.bt(new V.bG(1,2,4,6),new V.au(1,0,0,1),new V.ah(-1,-1,0),new V.V(0,1),v,null)
w=x.a
v=new V.L(1,-1,1)
v=v.A(0,Math.sqrt(v.D(v)))
t=w.bt(new V.bG(0,3,4,6),new V.au(0,0,1,1),new V.ah(1,-1,0),new V.V(1,1),v,null)
w=x.a
v=new V.L(1,1,1)
v=v.A(0,Math.sqrt(v.D(v)))
s=w.bt(new V.bG(0,2,5,6),new V.au(0,1,0,1),new V.ah(1,1,0),new V.V(1,0),v,null)
w=x.a
v=new V.L(-1,1,1)
v=v.A(0,Math.sqrt(v.D(v)))
r=w.bt(new V.bG(0,2,4,7),new V.au(1,1,0,1),new V.ah(-1,1,0),new V.V(0,0),v,null)
x.d.hl(H.b([u,t,s,r],[F.aN]))
x.aC()
y.scW(0,x)
z.d=y
z.e=null
return z}}},hO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.h(a,"$isv")
z=this.x
if(!(z==null))z.u(a)},function(){return this.a1(null)},"d1","$1","$0","gW",0,2,0],
iA:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aK
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.aL()
s.d=0
t.sa8(s)}s=t.ga8()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfd",8,0,5],
iB:[function(a,b){var z,y,x,w,v,u
z=E.aK
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gW(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null){if(v.ga8()==null){u=new D.aL()
u.d=0
v.sa8(u)}v.ga8().M(0,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfe",8,0,5],
saT:function(a){var z,y
if(a==null)a=X.eH(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().M(0,this.gW())
y=this.a
this.a=a
a.gp().h(0,this.gW())
z=new D.A("camera",y,this.a,this,[X.cl])
z.b=!0
this.a1(z)}},
saG:function(a,b){var z,y
if(b==null)b=X.d7(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().M(0,this.gW())
y=this.b
this.b=b
b.gp().h(0,this.gW())
z=new D.A("target",y,this.b,this,[X.cD])
z.b=!0
this.a1(z)}},
sav:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().M(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gW())
z=new D.A("technique",y,this.c,this,[O.aZ])
z.b=!0
this.a1(z)}},
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a4:function(a){var z
a.cL(this.c)
this.b.G(a)
this.a.G(a)
z=this.c
if(z!=null)z.a6(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();)z.d.a6(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();)z.d.a4(a)
this.a.toString
a.cy.aD()
a.db.aD()
this.b.a5(a)
a.cJ()},
$isaG:1,
t:{
eh:function(a,b,c,d){var z,y
z=new M.hO()
y=O.cm(E.aK)
z.d=y
y.aH(z.gfd(),z.gfe())
z.e=null
z.f=null
z.r=null
z.x=null
z.saT(a)
z.saG(0,c)
z.sav(d)
return z}}},aG:{"^":"a;"}}],["","",,A,{"^":"",dU:{"^":"a;a,b,c"},hi:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hB:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
b9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e6:{"^":"bI;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},ej:{"^":"bI;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y",
aa:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eo(c)
b.a.uniform1i(b.d,0)}}},eA:{"^":"bI;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0au,0aq,0bw,0dD,0bx,0by,0dE,0dF,0bz,0bA,0dG,0dH,0bB,0bC,0dI,0dJ,0bD,0dK,0dL,0bE,0dM,0dN,0bF,0bG,0bH,0dO,0dP,0bI,0bJ,0dQ,0dR,0bK,0dS,0ct,0dT,0cu,0dU,0cv,0dV,0cw,0dW,0cz,0dX,0cA,a,b,0c,0d,0e,0f,0r,0x,0y",
ey:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bM("")
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
a1.h0(z)
a1.h7(z)
a1.h1(z)
a1.hf(z)
a1.hg(z)
a1.h9(z)
a1.hk(z)
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
z=new P.bM("")
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
v.h4(z)
v.h_(z)
v.h2(z)
v.h5(z)
v.hd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hb(z)
v.hc(z)}v.h8(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.j])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h3(z)
v.ha(z)
v.he(z)
v.hh(z)
v.hi(z)
v.hj(z)
v.h6(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.j])
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
n="vec4("+C.a.l(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ba(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.c(this.y.q(0,"invViewMat"),"$isaa")
if(y)this.dy=H.c(this.y.q(0,"objMat"),"$isaa")
if(w)this.fr=H.c(this.y.q(0,"viewObjMat"),"$isaa")
this.fy=H.c(this.y.q(0,"projViewObjMat"),"$isaa")
if(a1.x2)this.k1=H.c(this.y.q(0,"txt2DMat"),"$iscH")
if(a1.y1)this.k2=H.c(this.y.q(0,"txtCubeMat"),"$isaa")
if(a1.y2)this.k3=H.c(this.y.q(0,"colorMat"),"$isaa")
this.r1=H.b([],[A.aa])
y=a1.au
if(y>0){this.k4=H.h(this.y.q(0,"bendMatCount"),"$isI")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isaa"))}}y=a1.a
if(y!==C.b){this.r2=H.c(this.y.q(0,"emissionClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.rx=H.c(this.y.q(0,"emissionTxt"),"$isa5")
this.x1=H.c(this.y.q(0,"nullEmissionTxt"),"$isI")
break
case C.c:this.ry=H.c(this.y.q(0,"emissionTxt"),"$isaj")
this.x1=H.c(this.y.q(0,"nullEmissionTxt"),"$isI")
break}}y=a1.b
if(y!==C.b){this.x2=H.c(this.y.q(0,"ambientClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.y1=H.c(this.y.q(0,"ambientTxt"),"$isa5")
this.au=H.c(this.y.q(0,"nullAmbientTxt"),"$isI")
break
case C.c:this.y2=H.c(this.y.q(0,"ambientTxt"),"$isaj")
this.au=H.c(this.y.q(0,"nullAmbientTxt"),"$isI")
break}}y=a1.c
if(y!==C.b){this.aq=H.c(this.y.q(0,"diffuseClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.bw=H.c(this.y.q(0,"diffuseTxt"),"$isa5")
this.bx=H.c(this.y.q(0,"nullDiffuseTxt"),"$isI")
break
case C.c:this.dD=H.c(this.y.q(0,"diffuseTxt"),"$isaj")
this.bx=H.c(this.y.q(0,"nullDiffuseTxt"),"$isI")
break}}y=a1.d
if(y!==C.b){this.by=H.c(this.y.q(0,"invDiffuseClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dE=H.c(this.y.q(0,"invDiffuseTxt"),"$isa5")
this.bz=H.c(this.y.q(0,"nullInvDiffuseTxt"),"$isI")
break
case C.c:this.dF=H.c(this.y.q(0,"invDiffuseTxt"),"$isaj")
this.bz=H.c(this.y.q(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a1.e
if(y!==C.b){this.bC=H.c(this.y.q(0,"shininess"),"$isO")
this.bA=H.c(this.y.q(0,"specularClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dG=H.c(this.y.q(0,"specularTxt"),"$isa5")
this.bB=H.c(this.y.q(0,"nullSpecularTxt"),"$isI")
break
case C.c:this.dH=H.c(this.y.q(0,"specularTxt"),"$isaj")
this.bB=H.c(this.y.q(0,"nullSpecularTxt"),"$isI")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dI=H.c(this.y.q(0,"bumpTxt"),"$isa5")
this.bD=H.c(this.y.q(0,"nullBumpTxt"),"$isI")
break
case C.c:this.dJ=H.c(this.y.q(0,"bumpTxt"),"$isaj")
this.bD=H.c(this.y.q(0,"nullBumpTxt"),"$isI")
break}if(a1.dy){this.dK=H.c(this.y.q(0,"envSampler"),"$isaj")
this.dL=H.c(this.y.q(0,"nullEnvTxt"),"$isI")
y=a1.r
if(y!==C.b){this.bE=H.c(this.y.q(0,"reflectClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dM=H.c(this.y.q(0,"reflectTxt"),"$isa5")
this.bF=H.c(this.y.q(0,"nullReflectTxt"),"$isI")
break
case C.c:this.dN=H.c(this.y.q(0,"reflectTxt"),"$isaj")
this.bF=H.c(this.y.q(0,"nullReflectTxt"),"$isI")
break}}y=a1.x
if(y!==C.b){this.bG=H.c(this.y.q(0,"refraction"),"$isO")
this.bH=H.c(this.y.q(0,"refractClr"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dO=H.c(this.y.q(0,"refractTxt"),"$isa5")
this.bI=H.c(this.y.q(0,"nullRefractTxt"),"$isI")
break
case C.c:this.dP=H.c(this.y.q(0,"refractTxt"),"$isaj")
this.bI=H.c(this.y.q(0,"nullRefractTxt"),"$isI")
break}}}y=a1.y
if(y!==C.b){this.bJ=H.c(this.y.q(0,"alpha"),"$isO")
switch(y){case C.b:break
case C.e:break
case C.d:this.dQ=H.c(this.y.q(0,"alphaTxt"),"$isa5")
this.bK=H.c(this.y.q(0,"nullAlphaTxt"),"$isI")
break
case C.c:this.dR=H.c(this.y.q(0,"alphaTxt"),"$isaj")
this.bK=H.c(this.y.q(0,"nullAlphaTxt"),"$isI")
break}}this.ct=H.b([],[A.fh])
this.cu=H.b([],[A.fi])
this.cv=H.b([],[A.fj])
this.cw=H.b([],[A.fk])
this.cz=H.b([],[A.fl])
this.cA=H.b([],[A.fm])
if(a1.k2){y=a1.z
if(y>0){this.dS=H.h(this.y.q(0,"dirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.ct;(x&&C.a).h(x,new A.fh(m,l,k))}}y=a1.Q
if(y>0){this.dT=H.h(this.y.q(0,"pntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isJ")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isO")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isO")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isO")
x=this.cu;(x&&C.a).h(x,new A.fi(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dU=H.h(this.y.q(0,"spotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isJ")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isJ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isO")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isO")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isO")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isO")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isO")
x=this.cv;(x&&C.a).h(x,new A.fj(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dV=H.h(this.y.q(0,"txtDirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isJ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isJ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isJ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isI")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isa5")
x=this.cw;(x&&C.a).h(x,new A.fk(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dW=H.h(this.y.q(0,"txtPntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$iscH")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isJ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isI")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isO")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isO")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isO")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isaj")
x=this.cz;(x&&C.a).h(x,new A.fl(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dX=H.h(this.y.q(0,"txtSpotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isJ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isJ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isI")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isJ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isO")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isO")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isO")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isO")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isO")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isa5")
x=this.cA;(x&&C.a).h(x,new A.fm(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
aj:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cV(c)
b.a.uniform1i(b.d,0)}},
t:{
is:function(a,b){var z,y
z=a.aq
y=new A.eA(b,z)
y.b1(b,z)
y.ey(a,b)
return y}}},iv:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,au,aq,bw",
h0:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.au+"];\n"
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
h7:function(a){var z
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
h1:function(a){var z
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
hf:function(a){var z,y
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
hg:function(a){var z,y
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
h9:function(a){var z
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
hk:function(a){var z
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
ay:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.bl(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h4:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ay(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
h_:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ay(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
h2:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ay(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
h5:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ay(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hd:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ay(a,z,"specular")
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
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
h8:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hb:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ay(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hc:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ay(a,z,"refract")
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
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
h3:function(a){var z,y
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
ha:function(a){var z,y
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
he:function(a){var z,y
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
h6:function(a){var z
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
j:function(a){return this.aq}},fh:{"^":"a;a,b,c"},fk:{"^":"a;a,b,c,d,e,f,r,x"},fi:{"^":"a;a,b,c,d,e,f,r"},fl:{"^":"a;a,b,c,d,e,f,r,x,y,z"},fj:{"^":"a;a,b,c,d,e,f,r,x,y,z"},fm:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bI:{"^":"cX;",
b1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ba:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dc(b,35633)
this.f=this.dc(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dG(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.p(P.n("Failed to link shader: "+H.k(x)))}this.fR()
this.fT()},
G:function(a){a.a.useProgram(this.r)
this.x.hB()},
dc:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dG(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.n("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fR:function(){var z,y,x,w,v,u
z=H.b([],[A.dU])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dU(y,v.name,u))}this.x=new A.hi(z)},
fT:function(){var z,y,x,w,v,u
z=H.b([],[A.a9])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hy(v.type,v.size,v.name,u))}this.y=new A.jS(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.I(z,y,b,c)
else return A.dx(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a5(z,y,b,c)
else return A.dx(z,y,b,a,c)},
eY:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aj(z,y,b,c)
else return A.dx(z,y,b,a,c)},
bs:function(a,b){return new P.fv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hy:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.O(this.a,this.r,c,d)
case 35664:return new A.bS(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.fg(this.a,this.r,c,d)
case 35667:return new A.jP(this.a,this.r,c,d)
case 35668:return new A.jQ(this.a,this.r,c,d)
case 35669:return new A.jR(this.a,this.r,c,d)
case 35674:return new A.jU(this.a,this.r,c,d)
case 35675:return new A.cH(this.a,this.r,c,d)
case 35676:return new A.aa(this.a,this.r,c,d)
case 35678:return this.eX(b,c,d)
case 35680:return this.eY(b,c,d)
case 35670:throw H.f(this.bs("BOOL",c))
case 35671:throw H.f(this.bs("BOOL_VEC2",c))
case 35672:throw H.f(this.bs("BOOL_VEC3",c))
case 35673:throw H.f(this.bs("BOOL_VEC4",c))
default:throw H.f(P.n("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cn:{"^":"a;a,b",
j:function(a){return this.b}},eO:{"^":"bI;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},eX:{"^":"bI;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
eC:function(a,b){var z,y,x,w,v
this.ba(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.jA(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.c(this.y.q(0,"txtCount"),"$isI")
this.ch=H.c(this.y.q(0,"backClr"),"$isfg")
this.cx=H.b([],[A.a5])
this.cy=H.b([],[A.aa])
z=[A.bS]
this.db=H.b([],z)
this.dx=H.b([],z)
this.dy=H.b([],z)
this.fr=H.b([],z)
this.fx=H.b([],[A.I])
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isa5"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isaa"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbS"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbS"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbS"))
z=this.fr
x=this.y
w="destSize"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbS"))
z=this.fx
x=this.y
w="flip"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isI"))}},
t:{
jA:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
jz:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.eX(b,z)
y.b1(b,z)
y.eC(a,b)
return y}}},a9:{"^":"a;"},jS:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.i(0,b)
if(z==null)throw H.f(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.J()},
hF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
J:function(){return this.hF("\n")}},I:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},jP:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},jQ:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},jR:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},jO:{"^":"a9;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
t:{
dx:function(a,b,c,d,e){var z=new A.jO(a,b,c,e)
z.f=d
z.e=P.ij(d,0,!1,P.D)
return z}}},O:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},bS:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},J:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},fg:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},jU:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cH:{"^":"a9;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bj(H.w(a,"$ise",[P.y],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},aa:{"^":"a9;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bj(H.w(a,"$ise",[P.y],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},a5:{"^":"a9;a,b,c,d",
eo:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},aj:{"^":"a9;a,b,c,d",
cV:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cN:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bX:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.L(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.L(t+h,s+f,r+g)
z.b=q
p=new V.L(t-h,s-f,r-g)
z.c=p
o=new V.L(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cN(y)
k=F.cN(z.b)
j=F.ml(d,e,new F.lF(z,F.cN(z.c),F.cN(z.d),k,l,c),b)
if(j!=null)a.hQ(j)},
ml:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aN,P.y,P.y]})
if(a<1)return
if(b<1)return
z=F.dp()
y=H.b([],[F.aN])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cJ(null,null,new V.au(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.co(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cJ(null,null,new V.au(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.co(d))}}z.d.hm(a+1,b+1,y)
return z},
lF:{"^":"r:37;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cE(z.b,b).cE(z.d.cE(z.c,b),c)
z=new V.ah(y.a,y.b,y.c)
if(!J.R(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a9()}a.sbh(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.R(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a9()}}},
ap:{"^":"a;0a,0b,0c,0d,0e",
gcr:function(){return this.a==null||this.b==null||this.c==null},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.L(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dZ())return
return v.A(0,Math.sqrt(v.D(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.I(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.b8(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
cm:function(){if(this.d!=null)return!0
var z=this.eQ()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.a9()
return!0},
eP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.L(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dZ())return
return v.A(0,Math.sqrt(v.D(v)))},
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
if($.m.$2(n,0)){z=r.I(0,u)
z=new V.L(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.ah(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.L(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.b8(m)
z=z.A(0,Math.sqrt(z.D(z))).b8(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
ck:function(){if(this.e!=null)return!0
var z=this.eP()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.a9()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.J()},
B:function(a){var z,y
if(this.gcr())return a+"disposed"
z=a+C.h.al(J.a6(this.a.e),0)+", "+C.h.al(J.a6(this.b.e),0)+", "+C.h.al(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
J:function(){return this.B("")},
t:{
bx:function(a,b,c){var z,y,x
z=new F.ap()
y=a.a
if(y==null)H.p(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.n("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a9()
return z}}},
de:{"^":"a;0a,0b",
gcr:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.J()},
B:function(a){if(this.gcr())return a+"disposed"
return a+C.h.al(J.a6(this.a.e),0)+", "+C.h.al(J.a6(this.b.e),0)},
J:function(){return this.B("")},
t:{
ie:function(a,b){var z,y,x
z=new F.de()
y=a.a
if(y==null)H.p(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.n("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a9()
return z}}},
dl:{"^":"a;0a",
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.J()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.al(J.a6(z.e),0)},
J:function(){return this.B("")}},
eN:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
hQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a2()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.hw())}this.a.a2()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dl()
if(r.a==null)H.p(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a2()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.ie(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a2()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bx(p,o,m)}z=this.e
if(!(z==null))z.aF(0)},
aC:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aC()||!1
if(!this.a.aC())y=!1
z=this.e
if(!(z==null))z.aF(0)
return y},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a4()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bh().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gcX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dZ])
for(r=0,q=0;q<w;++q){p=b.hp(q)
o=p.gcX(p)
C.a.V(s,q,new Z.dZ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hM(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.w(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bj(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bt(new Z.fs(34962,j),s,b)
i.b=H.b([],[Z.cu])
if(this.b.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cu(0,h.length,f))}if(this.c.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cu(1,h.length,f))}if(this.d.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.a2()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cu(4,h.length,f))}return i},
j:function(a){var z=H.b([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.l(z,"\n")},
ar:function(a){var z=this.e
if(!(z==null))z.u(a)},
a9:function(){return this.ar(null)},
t:{
dp:function(){var z,y
z=new F.eN()
y=new F.k4(z)
y.b=!1
y.c=H.b([],[F.aN])
z.a=y
y=new F.jf(z)
y.b=H.b([],[F.dl])
z.b=y
y=new F.je(z)
y.b=H.b([],[F.de])
z.c=y
y=new F.jd(z)
y.b=H.b([],[F.ap])
z.d=y
z.e=null
return z}}},
jd:{"^":"a;a,0b",
hl:function(a){var z,y,x,w,v
H.w(a,"$ise",[F.aN],"$ase")
z=H.b([],[F.ap])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bx(y,w,v))}return z},
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$ise",[F.aN],"$ase")
z=H.b([],[F.ap])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.i(c,x)
r=c[x];++x
if(x>=s)return H.i(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.i(c,p)
o=c[p]
if(y<0||y>=s)return H.i(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bx(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bx(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bx(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bx(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
aC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cm())x=!1
return x},
cl:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].ck())x=!1
return x},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}},
je:{"^":"a;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.l(z,"\n")},
J:function(){return this.B("")}},
jf:{"^":"a;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}},
aN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
co:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cJ(this.cx,x,u,z,y,w,v,a,t)},
hw:function(){return this.co(null)},
sbh:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a9()}},
hM:function(a){var z,y
z=J.M(a)
if(z.v(a,$.$get$a4())){z=this.f
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aQ())){z=this.r
y=[P.y]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aP())){z=this.x
y=[P.y]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$az())){z=this.y
y=[P.y]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.v(a,$.$get$aR())){z=this.z
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bh()))return H.b([this.ch],[P.y])
else if(z.v(a,$.$get$aO())){z=this.cx
y=[P.y]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.y])},
cm:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.L(0,0,0)
this.d.N(0,new F.kb(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aF(0)}return!0},
ck:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.L(0,0,0)
this.d.N(0,new F.ka(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aF(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.J()},
B:function(a){var z,y,x
z=H.b([],[P.j])
C.a.h(z,C.h.al(J.a6(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
J:function(){return this.B("")},
t:{
cJ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aN()
y=new F.k9(z)
y.b=H.b([],[F.dl])
z.b=y
y=new F.k8(z)
x=[F.de]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.k5(z)
x=[F.ap]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$fp()
z.e=0
y=$.$get$a4()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aQ().a)!==0?e:null
z.x=(x&$.$get$aP().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fq().a)!==0?c:null
z.ch=(x&$.$get$bh().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
kb:{"^":"r:7;a",
$1:function(a){var z,y
H.h(a,"$isap")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
ka:{"^":"r:7;a",
$1:function(a){var z,y
H.h(a,"$isap")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
k4:{"^":"a;a,0b,0c",
a2:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a9()
return!0},
hn:function(a,b,c,d,e,f,g,h,i){var z=F.cJ(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bt:function(a,b,c,d,e,f){return this.hn(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cm()
return!0},
cl:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].ck()
return!0},
hs:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
this.a2()
z=H.b([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}},
k5:{"^":"a;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ap]})
C.a.N(this.b,b)
C.a.N(this.c,new F.k6(this,b))
C.a.N(this.d,new F.k7(this,b))},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}},
k6:{"^":"r:7;a,b",
$1:function(a){H.h(a,"$isap")
if(!J.R(a.a,this.a))this.b.$1(a)}},
k7:{"^":"r:7;a,b",
$1:function(a){var z
H.h(a,"$isap")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
k8:{"^":"a;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}},
k9:{"^":"a;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.l(z,"\n")},
J:function(){return this.B("")}}}],["","",,O,{"^":"",hD:{"^":"aZ;0a,0b,0c,0d,0e,0ad:f@",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
w:function(a){var z=this.f
if(!(z==null))z.u(a)},
a6:function(a,b){},
be:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.h(a.fr.i(0,"Depth"),"$ise6")
if(y==null){z=a.a
y=new A.e6(z,"Depth")
y.b1(z,"Depth")
y.ba(0,$.hF,$.hE)
y.z=y.x.i(0,"posAttr")
y.Q=H.c(y.y.i(0,"objClr"),"$isJ")
y.ch=H.c(y.y.i(0,"fogClr"),"$isJ")
y.cx=H.c(y.y.i(0,"fogStart"),"$isO")
y.cy=H.c(y.y.i(0,"fogStop"),"$isO")
y.db=H.c(y.y.i(0,"viewObjMat"),"$isaa")
y.dx=H.c(y.y.i(0,"projMat"),"$isaa")
a.b5(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bt)){b.e=null
x=null}if(x==null){z=b.d.b7(new Z.cc(a.a),$.$get$a4())
x=z.ae($.$get$a4())
w=this.a
x.e=w.z.c
b.e=z
z=w}z.G(a)
x=this.b
w=z.Q
w.toString
v=x.a
u=x.b
x=x.c
w.a.uniform3f(w.d,v,u,x)
x=this.c
u=z.ch
u.toString
v=x.a
w=x.b
x=x.c
u.a.uniform3f(u.d,v,w,x)
x=this.d
w=z.cx
w.a.uniform1f(w.d,x)
x=this.e
w=z.cy
w.a.uniform1f(w.d,x)
x=a.cy
x=x.gS(x)
w=z.dx
w.toString
w.a7(x.a0(0,!0))
x=a.gee()
z=z.db
z.toString
z.a7(x.a0(0,!0))
x=b.e
x.G(a)
x.a4(a)
x.a5(a)
x=this.a
x.toString
a.a.useProgram(null)
x.x.b9()}},hY:{"^":"aZ;0a,0b,0c,0d,0e,0f,0r,0ad:x@",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
w:[function(a){var z
H.h(a,"$isv")
z=this.x
if(!(z==null))z.u(a)},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
a6:function(a,b){},
P:function(a,b){H.w(a,"$ise",[T.be],"$ase")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
be:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.h(a.fr.i(0,"GaussianBlur"),"$isej")
if(z==null){y=a.a
z=new A.ej(y,"GaussianBlur")
z.b1(y,"GaussianBlur")
z.ba(0,$.i_,$.hZ)
z.z=z.x.i(0,"posAttr")
z.Q=z.x.i(0,"txtAttr")
z.ch=H.c(z.y.i(0,"projViewObjMat"),"$isaa")
z.cx=H.c(z.y.i(0,"txt2DMat"),"$iscH")
z.cy=H.c(z.y.i(0,"colorTxt"),"$isa5")
z.db=H.c(z.y.i(0,"depthTxt"),"$isa5")
z.dx=H.c(z.y.i(0,"nullColorTxt"),"$isI")
z.dy=H.c(z.y.i(0,"nullDepthTxt"),"$isI")
z.fr=H.c(z.y.i(0,"width"),"$isO")
z.fx=H.c(z.y.i(0,"height"),"$isO")
z.fy=H.c(z.y.i(0,"highOffset"),"$isO")
z.go=H.c(z.y.i(0,"lowOffset"),"$isO")
z.id=H.c(z.y.i(0,"depthLimit"),"$isO")
a.b5(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a4()
v=$.$get$az()
v=y.b7(new Z.cc(x),new Z.b_(w.a|v.a))
v.ae($.$get$a4()).e=this.a.z.c
v.ae($.$get$az()).e=this.a.Q.c
b.e=v}u=H.b([],[T.be])
this.P(u,this.c)
this.P(u,this.d)
for(t=0;t<u.length;++t)u[t].G(a)
y=this.a
y.G(a)
x=this.c
y.aa(y.cy,y.dx,x)
x=this.d
y.aa(y.db,y.dy,x)
x=this.b
w=y.cx
w.toString
w.a7(x.a0(0,!0))
x=a.ge8()
w=y.ch
w.toString
w.a7(x.a0(0,!0))
x=a.c
w=y.fr
w.a.uniform1f(w.d,x)
x=a.d
w=y.fx
w.a.uniform1f(w.d,x)
x=this.e
w=y.fy
w.a.uniform1f(w.d,x)
x=this.f
w=y.go
w.a.uniform1f(w.d,x)
x=this.r
y=y.id
y.a.uniform1f(y.d,x)
y=b.e
if(y instanceof Z.bt){y.G(a)
y.a4(a)
y.a5(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.b9()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},ir:{"^":"aZ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ad:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
w:[function(a){var z
H.h(a,"$isv")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
fI:[function(a){H.h(a,"$isv")
this.a=null
this.w(a)},function(){return this.fI(null)},"iY","$1","$0","gfH",0,2,0],
ix:[function(a,b){var z=V.a7
z=new D.c5(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.w(z)},"$2","gfa",8,0,29],
iy:[function(a,b){var z=V.a7
z=new D.c6(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.w(z)},"$2","gfb",8,0,29],
d8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a3(z.e.length+3,4)*4
x=C.f.a3(z.f.length+3,4)*4
w=C.f.a3(z.r.length+3,4)*4
v=C.f.a3(z.x.length+3,4)*4
u=C.f.a3(z.y.length+3,4)*4
t=C.f.a3(z.z.length+3,4)*4
s=C.f.a3(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.j(q.a)+C.f.j(p.a)+C.f.j(o.a)+C.f.j(n.a)+C.f.j(m.a)+C.f.j(l.a)+C.f.j(k.a)+C.f.j(j.a)+C.f.j(i.a)+"_"
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a4()
if(c){z=$.$get$aQ()
a6=new Z.b_(a6.a|z.a)}if(b){z=$.$get$aP()
a6=new Z.b_(a6.a|z.a)}if(a){z=$.$get$az()
a6=new Z.b_(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.b_(a6.a|z.a)}if(a2){z=$.$get$aO()
a6=new Z.b_(a6.a|z.a)}return new A.iv(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.w(a,"$ise",[T.be],"$ase")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
a6:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.C();){y=z.d
x=new V.L(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cN(x)}}},
be:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d8()
y=H.h(a.fr.i(0,z.aq),"$iseA")
if(y==null){y=A.is(z,a.a)
a.b5(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bw
z=b.e
if(!(z instanceof Z.bt)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.aC()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cl()
u.a.cl()
u=u.e
if(!(u==null))u.aF(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hs()
t=t.e
if(!(t==null))t.aF(0)}r=b.d.b7(new Z.cc(a.a),w)
r.ae($.$get$a4()).e=this.a.Q.c
if(z)r.ae($.$get$aQ()).e=this.a.cx.c
if(v)r.ae($.$get$aP()).e=this.a.ch.c
if(x.rx)r.ae($.$get$az()).e=this.a.cy.c
if(u)r.ae($.$get$aR()).e=this.a.db.c
if(x.x1)r.ae($.$get$aO()).e=this.a.dx.c
b.e=r}z=T.be
q=H.b([],[z])
this.a.G(a)
if(x.fx){v=this.a
u=a.dx
u=u.gS(u)
v=v.dy
v.toString
v.a7(u.a0(0,!0))}if(x.fy){v=this.a
u=a.gee()
v=v.fr
v.toString
v.a7(u.a0(0,!0))}v=this.a
u=a.ge8()
v=v.fy
v.toString
v.a7(u.a0(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a7(u.a0(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a7(u.a0(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a7(C.H.a0(u,!0))}if(x.au>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.y],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.h(t,"$isa7")
u=u.r1
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bj(H.w(t.a0(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.f.d)
v=this.a
u=this.f.d
v.aa(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.f.e)
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
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.r.d)
v=this.a
u=this.r.d
v.aa(v.y1,v.au,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.r.e)
v=this.a
u=this.r.e
v.aj(v.y2,v.au,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.aq
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.bw,v.bx,u)
u=this.a
v=this.x.f
u=u.aq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.aj(v.dD,v.bx,u)
u=this.a
v=this.x.f
u=u.aq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.by
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.dE,v.bz,u)
u=this.a
v=this.y.f
u=u.by
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.aj(v.dF,v.bz,u)
u=this.a
v=this.y.f
u=u.by
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bC
u.a.uniform1f(u.d,s)
break
case C.d:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.dG,v.bB,u)
u=this.a
v=this.z.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bC
v.a.uniform1f(v.d,s)
break
case C.c:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.aj(v.dH,v.bB,u)
u=this.a
v=this.z.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bC
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dS
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.ct
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cN(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dT
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cu
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcQ(t)
g=t.gcR(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bj(j.gbd(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gat(j)
g=i.d
h=t.gbO()
s=t.gbk()
t=t.gbu()
g.a.uniform3f(g.d,h,s,t)
t=j.gce()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcf()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcg()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dU
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cv
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcQ(t)
g=t.gcR(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcq(j).j4()
g=i.c
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gat(j)
s=i.e
h=t.gbO()
g=t.gbk()
t=t.gbu()
s.a.uniform3f(s.d,h,g,t)
t=j.gj3()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj1()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcf()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dV
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.cw
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gbg()
H.w(q,"$ise",t,"$ase")
if(!C.a.R(q,s)){s.sb2(q.length)
C.a.h(q,s)}s=j.gcq(j)
h=i.d
g=s.gaV(s)
f=s.gaW(s)
s=s.gaX()
h.a.uniform3f(h.d,g,f,s)
s=j.gbP()
f=i.b
g=s.gaV(s)
h=s.gaW(s)
s=s.gaX()
f.a.uniform3f(f.d,g,h,s)
s=j.gbf(j)
h=i.c
g=s.gaV(s)
f=s.gaW(s)
s=s.gaX()
h.a.uniform3f(h.d,g,f,s)
s=m.cN(j.gcq(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gat(j)
g=i.f
f=h.gbO()
s=h.gbk()
h=h.gbu()
g.a.uniform3f(g.d,f,s,h)
h=j.gbg()
s=h.ge1(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdf()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gb2())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dW
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.y,u=v.length,t=[P.y],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.cz
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gbg()
H.w(q,"$ise",s,"$ase")
if(!C.a.R(q,h)){h.sb2(q.length)
C.a.h(q,h)}e=m.n(0,j.gS(j))
h=j.gS(j).bj(new V.ah(0,0,0))
g=i.b
f=h.gcQ(h)
d=h.gcR(h)
h=h.gcS(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bj(new V.ah(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cD(0)
d=i.d
n=new Float32Array(H.bj(H.w(new V.dh(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a0(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gat(j)
h=i.e
f=d.gbO()
g=d.gbk()
d=d.gbu()
h.a.uniform3f(h.d,f,g,d)
d=j.gbg()
h=d.ge1(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdf()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gb2())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gce()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcf()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcg()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dX
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gbg()
H.w(q,"$ise",z,"$ase")
if(!C.a.R(q,t)){t.sb2(q.length)
C.a.h(q,t)}t=j.gbd(j)
s=i.b
h=t.gcQ(t)
g=t.gcR(t)
t=t.gcS(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcq(j)
g=i.c
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=j.gbP()
s=i.d
h=t.gaV(t)
g=t.gaW(t)
t=t.gaX()
s.a.uniform3f(s.d,h,g,t)
t=j.gbf(j)
g=i.e
h=t.gaV(t)
s=t.gaW(t)
t=t.gaX()
g.a.uniform3f(g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbg()
s=t.ge1(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdf()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gb2())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gat(j)
s=i.y
h=t.gbO()
g=t.gbk()
t=t.gbu()
s.a.uniform3f(s.d,h,g,t)
t=j.gja()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjb()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcf()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.dI,z.bD,v)
break
case C.c:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.aj(z.dJ,z.bD,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gS(v).cD(0)
a.Q=v}z=z.id
z.toString
z.a7(v.a0(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.aj(z.dK,z.dL,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bE
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.dM,z.bF,v)
v=this.a
z=this.cx.f
v=v.bE
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.aj(z.dN,z.bF,v)
v=this.a
z=this.cx.f
v=v.bE
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bH
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bG
v.a.uniform1f(v.d,t)
break
case C.d:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dO,z.bI,v)
v=this.a
z=this.cy.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,t)
break
case C.c:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.aj(z.dP,z.bI,v)
v=this.a
z=this.cy.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bJ
z.a.uniform1f(z.d,u)
break
case C.d:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dQ,z.bK,u)
u=this.a
z=this.db.f
u=u.bJ
u.a.uniform1f(u.d,z)
break
case C.c:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.aj(z.dR,z.bK,u)
u=this.a
z=this.db.f
u=u.bJ
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].G(a)
z=b.e
z.G(a)
z.a4(a)
z.a5(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.b9()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.d8().aq}},it:{"^":"dg;0f,a,b,0c,0d,0e",
fN:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.A(this.b,y,a,this,[P.y])
z.b=!0
this.a.w(z)}},
aQ:function(){this.cZ()
this.fN(1)}},dg:{"^":"a;",
w:[function(a){this.a.w(H.h(a,"$isv"))},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
aQ:["cZ",function(){}],
fP:function(a){},
fQ:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gp().M(0,this.gZ())
y=this.e
this.e=a
if(a!=null)a.gp().h(0,this.gZ())
z=new D.A(this.b+".textureCube",y,this.e,this,[T.du])
z.b=!0
this.a.w(z)}},
sbh:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aQ()
this.c=C.c
this.fP(null)
z=this.a
z.a=null
z.w(null)}this.fQ(a)}},iu:{"^":"dg;a,b,0c,0d,0e"},bc:{"^":"dg;0f,a,b,0c,0d,0e",
dk:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.w(y)}},
aQ:["bU",function(){this.cZ()
this.dk(new V.Y(1,1,1))}],
sat:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aQ()
z=this.a
z.a=null
z.w(null)}this.dk(b)}},iw:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
fO:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.w(z)}},
aQ:function(){this.bU()
this.fO(1)}},ix:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
cb:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.w(z)}},
aQ:function(){this.bU()
this.cb(100)}},jl:{"^":"aZ;0a,0b,0c,0d,0ad:e@",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
w:[function(a){var z
H.h(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
a6:function(a,b){},
be:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.i(0,"Skybox"),"$iseO")
if(z==null){y=a.a
z=new A.eO(y,"Skybox")
z.b1(y,"Skybox")
z.ba(0,$.jn,$.jm)
z.z=z.x.i(0,"posAttr")
z.Q=H.c(z.y.i(0,"fov"),"$isO")
z.ch=H.c(z.y.i(0,"ratio"),"$isO")
z.cx=H.c(z.y.i(0,"boxClr"),"$isJ")
z.cy=H.c(z.y.i(0,"boxTxt"),"$isaj")
z.db=H.c(z.y.i(0,"viewMat"),"$isaa")
a.b5(z)}this.a=z}if(b.e==null){y=b.d.b7(new Z.cc(a.a),$.$get$a4())
y.ae($.$get$a4()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.G(a)}y=a.d
x=a.c
w=this.a
w.G(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.cV(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gS(x).cD(0)
w=w.db
w.toString
w.a7(x.a0(0,!0))
y=b.e
if(y instanceof Z.bt){y.G(a)
y.a4(a)
y.a5(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.b9()
y=this.c
if(y!=null)y.a5(a)}},aZ:{"^":"a;"},jy:{"^":"aZ;0a,0b,0c,0d,0ad:e@",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
w:[function(a){var z
H.h(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
iF:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isd",[O.bQ],"$asd")
for(z=b.length,y=this.gZ(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gad()==null){t=new D.aL()
t.d=0
u.sad(t)}t=u.gad()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.aw()},"$2","gfi",8,0,12],
iG:[function(a,b){var z,y,x,w,v
H.w(b,"$isd",[O.bQ],"$asd")
for(z=b.length,y=this.gZ(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.gad()==null){v=new D.aL()
v.d=0
w.sad(v)}w.gad().M(0,y)}}this.aw()},"$2","gfj",8,0,12],
a6:function(a,b){},
be:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.f.a3(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.h(a.fr.i(0,y),"$iseX")
if(x==null){x=A.jz(z,a.a)
a.b5(x)}this.b=x
y=x}if(b.e==null){y=b.d.b7(new Z.cc(a.a),$.$get$a4())
w=y.ae($.$get$a4())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.G(a)
y=T.be
u=H.b([],[y])
for(w=[P.y],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.w(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.R(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.i(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.i(v,t)
v=v[t]
n=new Float32Array(H.bj(H.w((q==null?new V.a7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).a0(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aY(0,0,1,1)
q=v.db
if(t>=q.length)return H.i(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.i(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aY(0,0,1,1)
q=v.dy
if(t>=q.length)return H.i(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.i(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.i(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.Q
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].G(a)
y=b.e
if(y instanceof Z.bt){y.G(a)
y.a4(a)
y.a5(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.x.b9()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bQ:{"^":"a;0a,0b,0c,0d,0e,0ad:f@",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
w:[function(a){var z
H.h(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.w(null)},"aw","$1","$0","gZ",0,2,0],
t:{
eY:function(a,b,c,d,e){var z,y,x,w,v
z=new O.bQ()
y=z.a
z.a=e
e.gp().h(0,z.gZ())
x=new D.A("texture",y,z.a,z,[T.cE])
x.b=!0
z.w(x)
w=V.aW()
if(!J.R(z.b,w)){y=z.b
z.b=w
x=new D.A("colorMatrix",y,w,z,[V.a7])
x.b=!0
z.w(x)}v=V.aY(0,0,1,1)
if(!J.R(z.c,v)){y=z.c
z.c=v
x=new D.A("source",y,v,z,[V.cC])
x.b=!0
z.w(x)}if(!J.R(z.d,b)){y=z.d
z.d=b
x=new D.A("destination",y,b,z,[V.cC])
x.b=!0
z.w(x)}if(z.e!==!1){z.e=!1
x=new D.A("flip",!0,!1,z,[P.P])
x.b=!0
z.w(x)}z.f=null
return z}}}}],["","",,T,{"^":"",be:{"^":"cX;"},cE:{"^":"be;"},jx:{"^":"cE;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gp:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
G:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
t:{
eW:function(a,b){var z=new T.jx()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},du:{"^":"be;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
G:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a5:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jB:{"^":"a;a,0b,0c,0d,0e",
e0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.du()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aO(r,s,z,34069,!1,!1)
this.aO(r,s,w,34070,!1,!1)
this.aO(r,s,y,34071,!1,!1)
this.aO(r,s,v,34072,!1,!1)
this.aO(r,s,x,34073,!1,!1)
this.aO(r,s,u,34074,!1,!1)
return r},
e_:function(a){return this.e0(a,".png",!1,"")},
hO:function(a,b){return this.e0(a,b,!1,"")},
aO:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ab
W.a_(z,"load",H.l(new T.jC(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fJ:function(a,b,c){var z,y,x,w
b=V.c2(b,2)
z=V.c2(a.width,2)
y=V.c2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d0(null,null)
x.width=z
x.height=y
w=H.h(C.k.ei(x,"2d"),"$ise0")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lV(w.getImageData(0,0,x.width,x.height))}}},jC:{"^":"r:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fJ(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.w.ii(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cs()}++z.e}}}],["","",,V,{"^":"",br:{"^":"a;",
aZ:function(a,b){return!0},
j:function(a){return"all"},
$isaM:1},aM:{"^":"a;"},ez:{"^":"a;",
aZ:["ev",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
j:["cY",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isaM:1},ax:{"^":"ez;0a",
aZ:function(a,b){return!this.ev(0,b)},
j:function(a){return"!["+this.cY(0)+"]"}},iY:{"^":"a;0a,0b",
aZ:function(a,b){return this.a<=b&&this.b>=b},
j:function(a){var z,y
z=H.dm(this.a)
y=H.dm(this.b)
return z+".."+y},
$isaM:1,
t:{
T:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.f(P.n("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.h.aL(a,0)
y=C.h.aL(b,0)
x=new V.iY()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jb:{"^":"a;0a",
eA:function(a){var z,y
if(a.a.length<=0)throw H.f(P.n("May not create a SetMatcher with zero characters."))
z=new H.bb(0,0,[P.D,P.P])
for(y=new H.df(a,a.gm(a),0,[H.al(a,"x",0)]);y.C();)z.V(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.dA(0,b)},
j:function(a){var z=this.a
return P.ds(new H.et(z,[H.B(z,0)]),0,null)},
$isaM:1,
t:{
u:function(a){var z=new V.jb()
z.eA(a)
return z}}},eQ:{"^":"a;a,b,0c,0d",
ghR:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.f4(this.a.k(0,b))
w.a=H.b([],[V.aM])
w.c=!1
C.a.h(this.c,w)
return w},
hC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
j:function(a){return this.b}},f1:{"^":"a;a,b,c",
j:function(a){var z,y
z=H.dQ(this.b,"\n","\\n")
y=H.dQ(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f2:{"^":"a;a,b,0c",
aE:function(a,b,c){var z,y,x
H.w(c,"$ise",[P.j],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.V(0,x,b)}},
j:function(a){return this.b}},jK:{"^":"a;0a,0b,0c",
k:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eQ(this,b)
z.c=H.b([],[V.f4])
this.a.V(0,b,z)}return z},
K:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.f2(this,a)
y=P.j
z.c=new H.bb(0,0,[y,y])
this.b.V(0,a,z)}return z},
ed:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.f1])
y=this.c
x=[P.D]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aL(a,t)
r=y.hC(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ds(w,0,null)
throw H.f(P.n("Untokenizable string [state: "+y.ghR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ds(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.f1(o==null?p.b:o,q,t)}++t}}},
t:{
cF:function(){var z,y
z=new V.jK()
y=P.j
z.a=new H.bb(0,0,[y,V.eQ])
z.b=new H.bb(0,0,[y,V.f2])
return z}}},f4:{"^":"ez;b,0c,0a",
j:function(a){return this.b.b+": "+this.cY(0)}}}],["","",,X,{"^":"",hk:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gp:function(){var z=this.fr
if(z==null){z=D.E()
this.fr=z}return z},
an:function(a){var z=this.fr
if(!(z==null))z.u(a)},
sai:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.A("width",z,b,this,[P.D])
z.b=!0
this.an(z)}},
saf:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.A("height",z,b,this,[P.D])
z.b=!0
this.an(z)}},
G:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.n()
this.sai(0,C.i.Y(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.n()
this.saf(0,C.i.Y(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a0(z.getParameter(3379))
u=V.c2(x,2)
t=V.c2(w,2)
v=V.c2(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.w.ea(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.eW(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cs()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cs()
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
a.c=C.i.Y(y*this.a)
x=z.d
a.d=C.i.Y(x*this.b)
w=this.c
q=C.i.Y(z.a*w)
p=this.d
o=C.i.Y(z.b*p)
n=C.i.Y(y*w)
m=C.i.Y(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
if(this.cy){z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a5:function(a){a.a.bindFramebuffer(36160,null)},
t:{
dV:function(a,b,c,d,e,f){var z=new X.hk()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.eW(0,null)
z.cx=new V.au(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.aY(0,0,1,1)
z.sai(0,a)
z.saf(0,b)
return z}}},cl:{"^":"a;",$isaE:1},hW:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
G:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.q(y)
v=C.i.Y(w.a*y)
if(typeof x!=="number")return H.q(x)
u=C.i.Y(w.b*x)
t=C.i.Y(w.c*y)
a.c=t
w=C.i.Y(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
a5:function(a){},
t:{
d7:function(a,b,c,d,e,f,g){var z,y
z=new X.hW()
y=new V.au(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aY(0,0,1,1)
z.r=y
return z}}},i3:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
G:function(a){var z
a.cy.bN(V.aW())
z=V.aW()
a.db.bN(z)},
a5:function(a){a.cy.aD()
a.db.aD()},
$isaE:1,
$iscl:1},iM:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
an:[function(a){var z
H.h(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.an(null)},"iq","$1","$0","geM",0,2,0],
G:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aC(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bN(s)
z=$.eI
if(z==null){z=V.eB(new V.ah(0,0,0),new V.L(0,1,0),new V.L(0,0,-1))
$.eI=z
r=z}else r=z
z=this.b
if(z!=null){q=z.b_(0,a,this)
if(q!=null)r=q.n(0,r)}a.db.bN(r)},
a5:function(a){a.cy.aD()
a.db.aD()},
$isaE:1,
$iscl:1,
t:{
eH:function(a,b,c,d,e){var z,y,x
z=new X.iM()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gp().h(0,z.geM())
x=new D.A("mover",y,z.b,z,[U.a8])
x.b=!0
z.an(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.A("fov",y,b,z,[P.y])
x.b=!0
z.an(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.A("near",y,d,z,[P.y])
x.b=!0
z.an(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.A("far",y,a,z,[P.y])
x.b=!0
z.an(x)}return z}}},cD:{"^":"a;"}}],["","",,V,{"^":"",
mj:function(a){P.jJ(C.D,new V.mk(a))},
aU:{"^":"a;",
bm:function(a){this.b=new P.i1(C.E)
this.c=null
this.d=H.b([],[[P.e,W.b9]])},
H:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b9]))
y=a.split("\n")
for(z=y.length,x=[W.b9],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.K(u)
s=this.b.eW(u,0,u.length)
r=s==null?u:s
C.C.em(t,H.dQ(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbL(this.d),t)}},
e7:function(a,b){var z,y,x,w
H.w(b,"$ise",[P.j],"$ase")
this.d=H.b([],[[P.e,W.b9]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.bv()
this.c=y}for(y=y.ed(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bM(y[w])}},
mk:{"^":"r:42;a",
$1:function(a){H.h(a,"$isbf")
P.dP(C.i.ec(this.a.ghG(),2)+" fps")}},
hA:{"^":"aU;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Class":this.H(a.b,"#551")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break
case"Type":this.H(a.b,"#B11")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bv:function(){var z,y,x,w
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.T("a","z")
C.a.h(y.a,x)
x=V.T("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.T("0","9")
C.a.h(x.a,y)
y=V.T("a","z")
C.a.h(x.a,y)
y=V.T("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.T("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.T("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.T("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.T("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.br())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.u(new H.t("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.br())
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aM]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.ax()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.K("Num")
x=z.k(0,"Float")
x.d=x.a.K("Num")
x=z.k(0,"Sym")
x.d=x.a.K("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.K("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.K("String")
x=z.k(0,"EndComment")
x.d=x.a.K("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.K("Whitespace")
x=z.k(0,"Id")
y=x.a.K("Id")
x.d=y
x=[P.j]
y.aE(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aE(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aE(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hX:{"^":"aU;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Builtin":this.H(a.b,"#411")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Preprocess":this.H(a.b,"#737")
break
case"Reserved":this.H(a.b,"#119")
break
case"Symbol":this.H(a.b,"#611")
break
case"Type":this.H(a.b,"#171")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bv:function(){var z,y,x,w
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.T("a","z")
C.a.h(y.a,x)
x=V.T("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.T("0","9")
C.a.h(x.a,y)
y=V.T("a","z")
C.a.h(x.a,y)
y=V.T("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.T("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.T("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.T("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.T("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.br())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aM]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.u(new H.t("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.ax()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.K("Num")
y=z.k(0,"Float")
y.d=y.a.K("Num")
y=z.k(0,"Sym")
y.d=y.a.K("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.K("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.K("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.K("Whitespace")
y=z.k(0,"Id")
x=y.a.K("Id")
y.d=x
y=[P.j]
x.aE(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aE(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aE(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
i0:{"^":"aU;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Attr":this.H(a.b,"#911")
this.H("=","#111")
break
case"Id":this.H(a.b,"#111")
break
case"Other":this.H(a.b,"#111")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break}},
bv:function(){var z,y,x
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.T("a","z")
C.a.h(y.a,x)
x=V.T("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.T("0","9")
C.a.h(x.a,y)
y=V.T("a","z")
C.a.h(x.a,y)
y=V.T("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.u(new H.t("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.u(new H.t("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.u(new H.t("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.u(new H.t("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.br())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.br())
y=z.k(0,"Other").l(0,"Other")
x=new V.ax()
x.a=H.b([],[V.aM])
C.a.h(y.a,x)
y=V.u(new H.t('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.T("a","z")
C.a.h(x.a,y)
y=V.T("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.K("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.K("String")
y=z.k(0,"Id")
x=y.a.K("Id")
y.d=x
x.aE(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
x=z.k(0,"Attr")
x.d=x.a.K("Attr")
x=z.k(0,"Other")
x.d=x.a.K("Other")
return z}},
iO:{"^":"aU;a,0b,0c,0d",
e7:function(a,b){H.w(b,"$ise",[P.j],"$ase")
this.d=H.b([],[[P.e,W.b9]])
this.H(C.a.l(b,"\n"),"#111")},
bM:function(a){},
bv:function(){return}},
jg:{"^":"a;0a,0b",
eB:function(a,b){var z,y,x,w,v,u,t
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
W.a_(z,"scroll",H.l(new V.jj(x),{func:1,ret:-1,args:[t]}),!1,t)},
dt:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$ise",[P.j],"$ase")
this.fS()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ed(C.a.hK(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.h6(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fO(C.u,s,C.p,!1)
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
eh:function(a){var z,y,x,w
z=new V.hA("dart")
z.bm("dart")
y=new V.hX("glsl")
y.bm("glsl")
x=new V.i0("html")
x.bm("html")
w=C.a.hD(H.b([z,y,x],[V.aU]),new V.jk(a))
if(w!=null)return w
z=new V.iO("plain")
z.bm("plain")
return z},
dr:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$ise",[P.j],"$ase")
z=H.b([],[P.D])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dL(w).bR(w,"+")){C.a.V(a2,x,C.h.bl(w,1))
C.a.h(z,1)
y=!0}else if(C.h.bR(w,"-")){C.a.V(a2,x,C.h.bl(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eh(a0)
v.e7(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fO(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dS(null)
n.href="#"+r
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
if(x>=z.length)return H.i(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gX(w);b.C();)h.appendChild(b.gL(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fS:function(){var z,y,x,w
if(this.b!=null)return
z=V.cF()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.ax()
w=[V.aM]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.ax()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.ax()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.u(new H.t("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.u(new H.t("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.ax()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.ax()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.br())
x=z.k(0,"Other").l(0,"Other")
y=new V.ax()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.K("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.K("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.K("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.K("Link")
x=z.k(0,"Other")
x.d=x.a.K("Other")
this.b=z},
t:{
jh:function(a,b){var z=new V.jg()
z.eB(a,!0)
return z}}},
jj:{"^":"r:24;a",
$1:function(a){P.f_(C.l,new V.ji(this.a))}},
ji:{"^":"r:2;a",
$0:function(){var z,y,x
z=C.i.Y(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
jk:{"^":"r:43;a",
$1:function(a){return H.h(a,"$isaU").a===this.a}}}],["","",,N,{"^":"",
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.jh("Test 028",!0)
y=W.d0(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.dt(H.b(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],x))
z.dt(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.p(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.jH(w,!0,!0,!0,!1)
u=new U.ek()
u.bn(U.a8)
u.aH(u.gf8(),u.gfw())
u.e=null
u.f=V.aW()
u.r=0
x=v.r
t=new U.k0()
s=U.d2()
s.scP(0,!0)
s.scF(6.283185307179586)
s.scH(0)
s.sag(0,0)
s.scG(100)
s.sU(0)
s.scp(0.5)
t.b=s
r=t.gaP()
s.gp().h(0,r)
s=U.d2()
s.scP(0,!0)
s.scF(6.283185307179586)
s.scH(0)
s.sag(0,0)
s.scG(100)
s.sU(0)
s.scp(0.5)
t.c=s
s.gp().h(0,r)
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
q=new X.aD(!1,!1,!1)
p=t.d
t.d=q
s=[X.aD]
r=new D.A("modifiers",p,q,t,s)
r.b=!0
t.T(r)
r=t.f
if(r!==!1){t.f=!1
r=new D.A("invertX",r,!1,t,[P.P])
r.b=!0
t.T(r)}r=t.r
if(r!==!1){t.r=!1
r=new D.A("invertY",r,!1,t,[P.P])
r.b=!0
t.T(r)}t.b6(x)
u.h(0,t)
x=v.r
t=new U.k_()
r=U.d2()
r.scP(0,!0)
r.scF(6.283185307179586)
r.scH(0)
r.sag(0,0)
r.scG(100)
r.sU(0)
r.scp(0.2)
t.b=r
r.gp().h(0,t.gaP())
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
q=new X.aD(!0,!1,!1)
p=t.c
t.c=q
r=new D.A("modifiers",p,q,t,s)
r.b=!0
t.T(r)
t.b6(x)
u.h(0,t)
x=v.r
t=new U.k1()
t.c=0.01
t.d=0
t.e=0
q=new X.aD(!1,!1,!1)
t.b=q
s=new D.A("modifiers",null,q,t,s)
s.b=!0
t.T(s)
t.b6(x)
u.h(0,t)
u.h(0,U.d4(V.iA(0,0,5)))
o=X.eH(2000,1.0471975511965976,u,0.1,null)
n=F.dp()
F.bX(n,null,null,1,1,1,0,0,1)
F.bX(n,null,null,1,1,0,1,0,3)
F.bX(n,null,null,1,1,0,0,1,2)
F.bX(n,null,null,1,1,-1,0,0,0)
F.bX(n,null,null,1,1,0,-1,0,0)
F.bX(n,null,null,1,1,0,0,-1,3)
n.aC()
m=E.cq(null,!0,null,"",n,null)
l=E.cq(null,!0,null,"",null,null)
for(k=-1.6;k<=1.7;k+=0.8)for(j=-1.6;j<=1.7;j+=0.8)for(i=-1.6;i<=1.7;i+=0.8){h=new V.a7(1,0,0,k,0,1,0,j,0,0,1,i,0,0,0,1).n(0,new V.a7(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
g=E.cq(null,!0,null,"",null,null)
x=new U.d3()
x.sS(0,h)
g.se3(x)
x=g.y
t=H.B(x,0)
H.F(m,t)
s=[t]
if(x.bp(H.b([m],s))){r=x.a
f=r.length
C.a.h(r,m)
t=H.w(H.b([m],s),"$isd",[t],"$asd")
x=x.c
if(x!=null)x.$2(f,t)}x=l.y
t=H.B(x,0)
H.F(g,t)
s=[t]
if(x.bp(H.b([g],s))){r=x.a
f=r.length
C.a.h(r,g)
t=H.w(H.b([g],s),"$isd",[t],"$asd")
x=x.c
if(x!=null)x.$2(f,t)}}e=v.f.e_("../resources/diceColor")
d=new O.ir()
x=O.cm(V.a7)
d.e=x
x.aH(d.gfa(),d.gfb())
x=new O.bc(d,"emission")
x.c=C.b
x.f=new V.Y(0,0,0)
d.f=x
x=new O.bc(d,"ambient")
x.c=C.b
x.f=new V.Y(0,0,0)
d.r=x
x=new O.bc(d,"diffuse")
x.c=C.b
x.f=new V.Y(0,0,0)
d.x=x
x=new O.bc(d,"invDiffuse")
x.c=C.b
x.f=new V.Y(0,0,0)
d.y=x
x=new O.ix(d,"specular")
x.c=C.b
x.f=new V.Y(0,0,0)
x.ch=100
d.z=x
x=new O.iu(d,"bump")
x.c=C.b
d.Q=x
d.ch=null
x=new O.bc(d,"reflect")
x.c=C.b
x.f=new V.Y(0,0,0)
d.cx=x
x=new O.iw(d,"refract")
x.c=C.b
x.f=new V.Y(0,0,0)
x.ch=1
d.cy=x
x=new O.it(d,"alpha")
x.c=C.b
x.f=1
d.db=x
x=new D.id()
x.bn(D.Z)
x.e=H.b([],[D.cp])
x.f=H.b([],[D.iP])
x.r=H.b([],[D.jo])
x.x=H.b([],[D.jD])
x.y=H.b([],[D.jE])
x.z=H.b([],[D.jF])
x.Q=null
x.ch=null
x.cU(x.gf9(),x.gfv(),x.gfz())
d.dx=x
t=x.Q
if(t==null){t=D.E()
x.Q=t
x=t}else x=t
x.h(0,d.gfH())
x=d.dx
t=x.ch
if(t==null){t=D.E()
x.ch=t
x=t}else x=t
x.h(0,d.gZ())
d.dy=null
x=d.dx
t=U.d4(V.eC(-1,-1,-1,null))
x.h(0,D.ec(new V.Y(1,0.9,0.9),t))
x=d.dx
t=U.d4(V.eC(1,1,2,null))
x.h(0,D.ec(new V.Y(0.2,0.2,0.35),t))
x=d.r
x.sat(0,new V.Y(0.2,0.2,0.2))
d.r.sbh(e)
x=d.x
x.sat(0,new V.Y(0.8,0.8,0.8))
d.x.sbh(e)
x=d.z
x.sat(0,new V.Y(0.7,0.7,0.7))
x=d.z
if(x.c===C.b){x.c=C.e
x.bU()
x.cb(100)
t=x.a
t.a=null
t.w(null)}x.cb(10)
d.Q.sbh(v.f.e_("../resources/diceBumpMap"))
c=X.dV(800,600,!0,1,1,!0)
if(c.cy){c.cy=!1
x=new D.A("clearColor",!0,!1,c,[P.P])
x.b=!0
c.an(x)}x=v.f.hO("../resources/maskonaive",".jpg")
b=M.d5(null,null,null)
t=new O.jl()
t.b=1.0471975511965976
p=t.c
t.c=x
x.gp().h(0,t.gZ())
x=new D.A("boxTexture",p,t.c,t,[T.du])
x.b=!0
t.w(x)
e=new V.Y(1,1,1)
if(!J.R(t.d,e)){p=t.d
t.d=e
x=new D.A("boxColor",p,e,t,[V.Y])
x.b=!0
t.w(x)}t.e=null
b.sav(t)
b.saT(o)
b.saG(0,c)
a=M.eh(null,null,null,null)
a.saT(o)
a.saG(0,c)
a.sav(d)
a.d.h(0,l)
a0=X.dV(400,300,!0,0.5,0.5,!0)
a1=M.eh(null,null,null,null)
a1.saT(o)
a1.saG(0,a0)
x=new O.hD()
x.d=1
x.e=10
a2=new V.Y(1,1,1)
x.b=a2
t=[V.Y]
s=new D.A("objectColor",null,a2,x,t)
s.b=!0
x.w(s)
a2=new V.Y(0,0,0)
if(!J.R(x.c,a2)){p=x.c
x.c=a2
t=new D.A("fogColor",p,a2,x,t)
t.b=!0
x.w(t)}t=x.d
if(!$.m.$2(t,3.5)){p=x.d
x.d=3.5
t=new D.A("fogStart",p,3.5,x,[P.y])
t.b=!0
x.w(t)}t=x.e
if(!$.m.$2(t,5.5)){p=x.e
x.e=5.5
t=new D.A("fogStop",p,5.5,x,[P.y])
t.b=!0
x.w(t)}a1.sav(x)
a1.d.h(0,l)
x=c.ch
t=a0.ch
a3=new O.hY()
a3.e=0
a3.f=4
a3.r=0.001
a3.b=new V.dh(1,0,0,0,1,0,0,0,1)
s=new D.A("textureMatrix",null,null,a3,[P.a])
s.b=!0
a3.w(s)
s=a3.c
if(s!==x){if(s!=null)s.gp().M(0,a3.gZ())
p=a3.c
a3.c=x
x.gp().h(0,a3.gZ())
x=new D.A("colorTexture",p,a3.c,a3,[T.cE])
x.b=!0
a3.w(x)}x=a3.d
if(x!==t){if(x!=null)x.gp().M(0,a3.gZ())
p=a3.d
a3.d=t
t.gp().h(0,a3.gZ())
x=new D.A("depthTexture",p,a3.d,a3,[T.cE])
x.b=!0
a3.w(x)}x=a3.e
if(!$.m.$2(x,0)){p=a3.e
a3.e=0
x=new D.A("highOffset",p,0,a3,[P.y])
x.b=!0
a3.w(x)}x=a3.f
if(!$.m.$2(x,8)){p=a3.f
a3.f=8
x=new D.A("lowOffset",p,8,a3,[P.y])
x.b=!0
a3.w(x)}x=a3.r
if(!$.m.$2(x,0.001)){p=a3.r
a3.r=0.001
x=new D.A("depthLimit",p,0.001,a3,[P.y])
x.b=!0
a3.w(x)}a4=M.d5(null,null,null)
a4.sav(a3)
a5=new O.jy()
a2=new V.au(0,0,0,0)
a5.a=a2
x=new D.A("backColor",null,a2,a5,[V.au])
x.b=!0
a5.w(x)
a5.b=null
x=O.cm(O.bQ)
a5.c=x
x.aH(a5.gfi(),a5.gfj())
a5.d=0
a5.e=null
x=a5.c
t=a0.ch
x.h(0,O.eY(null,V.aY(0,0.8,0.2,0.2),!1,null,t))
t=a5.c
x=c.ch
t.h(0,O.eY(null,V.aY(0,0.6,0.2,0.2),!1,null,x))
a6=M.d5(null,null,null)
a6.saG(0,X.d7(!1,!0,!1,null,2000,null,0))
a6.sav(a5)
x=M.aG
t=H.b([b,a,a1,a4,a6],[x])
s=new M.hu()
s.bn(x)
s.e=!1
s.f=null
s.aH(s.gfA(),s.gfB())
s.ab(0,t)
x=v.d
if(x!==s){if(x!=null)x.gp().M(0,v.gd0())
v.d=s
s.gp().h(0,v.gd0())
v.eE()}x=v.z
if(x==null){x=D.E()
v.z=x}t={func:1,ret:-1,args:[D.v]}
s=H.l(new N.mc(z,a3),t)
r=x.b
if(r==null){t=H.b([],[t])
x.b=t
x=t}else x=r
C.a.h(x,s)
V.mj(v)},
mc:{"^":"r:9;a,b",
$1:function(a){var z,y,x,w
H.h(a,"$isv")
z=this.a
y=this.b
x=y.a
w=[P.j]
z.dr("Vertex Shader for blur","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.dr("Fragment Shader for blur","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eo.prototype
return J.en.prototype}if(typeof a=="string")return J.cw.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.i8.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.cf=function(a){if(typeof a=="string")return J.cw.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.cR=function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.lZ=function(a){if(typeof a=="number")return J.cv.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cI.prototype
return a}
J.dL=function(a){if(typeof a=="string")return J.cw.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cI.prototype
return a}
J.bo=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).v(a,b)}
J.h8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lZ(a).am(a,b)}
J.h9=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m9(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cf(a).i(a,b)}
J.ha=function(a,b,c,d){return J.bo(a).ds(a,b,c,d)}
J.cV=function(a,b,c){return J.cf(a).ht(a,b,c)}
J.cW=function(a,b){return J.cR(a).E(a,b)}
J.hb=function(a,b){return J.cR(a).N(a,b)}
J.hc=function(a){return J.bo(a).ghq(a)}
J.b6=function(a){return J.M(a).ga_(a)}
J.b7=function(a){return J.cR(a).gX(a)}
J.b8=function(a){return J.cf(a).gm(a)}
J.hd=function(a){return J.bo(a).gcK(a)}
J.he=function(a){return J.bo(a).gih(a)}
J.dR=function(a){return J.cR(a).i7(a)}
J.hf=function(a,b,c){return J.dL(a).b0(a,b,c)}
J.hg=function(a){return J.dL(a).io(a)}
J.a6=function(a){return J.M(a).j(a)}
I.b4=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.cj.prototype
C.k=W.d_.prototype
C.C=W.b9.prototype
C.F=J.o.prototype
C.a=J.ba.prototype
C.G=J.en.prototype
C.f=J.eo.prototype
C.H=J.ep.prototype
C.i=J.cv.prototype
C.h=J.cw.prototype
C.O=J.c7.prototype
C.S=H.iG.prototype
C.T=W.iH.prototype
C.v=J.iN.prototype
C.w=P.dn.prototype
C.x=W.jv.prototype
C.o=J.cI.prototype
C.y=W.bV.prototype
C.z=W.kd.prototype
C.A=new P.iL()
C.B=new P.k3()
C.j=new P.l_()
C.b=new A.cn(0,"ColorSourceType.None")
C.e=new A.cn(1,"ColorSourceType.Solid")
C.d=new A.cn(2,"ColorSourceType.Texture2D")
C.c=new A.cn(3,"ColorSourceType.TextureCube")
C.l=new P.bv(0)
C.D=new P.bv(5e6)
C.E=new P.i2("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.b(I.b4(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=H.b(I.b4(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.R=H.b(I.b4([]),[P.j])
C.u=H.b(I.b4([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.m=H.b(I.b4(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.b(I.b4(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.p=new P.k2(!1)
$.aB=0
$.bs=null
$.dX=null
$.dD=!1
$.h_=null
$.fV=null
$.h5=null
$.cQ=null
$.cT=null
$.dM=null
$.bk=null
$.bY=null
$.bZ=null
$.dE=!1
$.U=C.j
$.aJ=null
$.d6=null
$.eg=null
$.ef=null
$.ea=null
$.e9=null
$.e8=null
$.e7=null
$.m=V.iy()
$.hF="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.hE="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.i_="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.hZ="precision mediump float;                                 \n                                                         \n#define MAX_BLUR_RANGE 20.0                              \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D depthTxt;                              \nuniform int nullColorTxt;                                \nuniform int nullDepthTxt;                                \nuniform float width;                                     \nuniform float height;                                    \nuniform float highOffset;                                \nuniform float lowOffset;                                 \nuniform float depthLimit;                                \n                                                         \nvarying vec2 txt2D;                                      \n                                                         \nfloat div;                                               \nvec4 color;                                              \n                                                         \nvoid offsetColor(float baseDepth, float tu, float tv)    \n{                                                        \n   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n                         txt2D.y + tv/height);           \n   float depth = texture2D(depthTxt, txtOffset).r;       \n   if (depth - depthLimit > baseDepth) return;           \n   div += 1.0;                                           \n   color += texture2D(colorTxt, txtOffset);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0)                                  \n   {                                                     \n      gl_FragColor = vec4(1.0);                          \n      return;                                            \n   }                                                     \n   color = texture2D(colorTxt, txt2D);                   \n   float baseDepth;                                      \n   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n   else baseDepth = texture2D(depthTxt, txt2D).r;        \n   float offset = mix(lowOffset, highOffset, baseDepth); \n   offset = abs(offset);                                 \n   div = 1.0;                                            \n   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n   {                                                     \n      if(x > offset) break;                              \n      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n      {                                                  \n         if(y > offset) break;                           \n         offsetColor(baseDepth,  x,  y);                 \n         offsetColor(baseDepth,  x, -y);                 \n         offsetColor(baseDepth, -x,  y);                 \n         offsetColor(baseDepth, -x, -y);                 \n      }                                                  \n   }                                                     \n   gl_FragColor = color / div;                           \n}                                                        \n"
$.jn="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jm="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eI=null
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
I.$lazy(y,x,w)}})(["e5","$get$e5",function(){return H.fZ("_$dart_dartClosure")},"db","$get$db",function(){return H.fZ("_$dart_js")},"f5","$get$f5",function(){return H.aH(H.cG({
toString:function(){return"$receiver$"}}))},"f6","$get$f6",function(){return H.aH(H.cG({$method$:null,
toString:function(){return"$receiver$"}}))},"f7","$get$f7",function(){return H.aH(H.cG(null))},"f8","$get$f8",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fc","$get$fc",function(){return H.aH(H.cG(void 0))},"fd","$get$fd",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fa","$get$fa",function(){return H.aH(H.fb(null))},"f9","$get$f9",function(){return H.aH(function(){try{null.$method$}catch(z){return z.message}}())},"ff","$get$ff",function(){return H.aH(H.fb(void 0))},"fe","$get$fe",function(){return H.aH(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dA","$get$dA",function(){return P.ke()},"c_","$get$c_",function(){return[]},"fN","$get$fN",function(){return P.j1("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"e3","$get$e3",function(){return{}},"fy","$get$fy",function(){return P.ev(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)},"dB","$get$dB",function(){return P.eu(P.j,P.c4)},"fr","$get$fr",function(){return Z.aq(0)},"fp","$get$fp",function(){return Z.aq(511)},"a4","$get$a4",function(){return Z.aq(1)},"aQ","$get$aQ",function(){return Z.aq(2)},"aP","$get$aP",function(){return Z.aq(4)},"az","$get$az",function(){return Z.aq(8)},"aR","$get$aR",function(){return Z.aq(16)},"bT","$get$bT",function(){return Z.aq(32)},"bU","$get$bU",function(){return Z.aq(64)},"fq","$get$fq",function(){return Z.aq(96)},"bh","$get$bh",function(){return Z.aq(128)},"aO","$get$aO",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:-1,args:[P.D,[P.d,E.aK]]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.N,args:[F.ap]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:P.N,args:[D.v]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.D,[P.d,O.bQ]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.j,args:[P.D]},{func:1,ret:P.P,args:[W.G]},{func:1,ret:W.G},{func:1,ret:-1,args:[P.D,[P.d,M.aG]]},{func:1,args:[,]},{func:1,ret:P.P,args:[W.aF]},{func:1,ret:P.P,args:[P.j]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.D,[P.d,U.a8]]},{func:1,ret:P.y},{func:1,ret:P.N,args:[W.ab]},{func:1,ret:-1,args:[P.D,[P.d,D.Z]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.P,args:[W.W,P.j,P.j,W.cd]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:-1,args:[P.D,[P.d,V.a7]]},{func:1,ret:P.P,args:[P.y,P.y]},{func:1,ret:P.P,args:[[P.d,D.Z]]},{func:1,ret:P.N,args:[P.a1]},{func:1,ret:W.W,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.N,args:[F.aN,P.y,P.y]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[P.a],opt:[P.ay]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bf]},{func:1,ret:P.P,args:[V.aU]},{func:1,args:[P.j]},{func:1,args:[,P.j]},{func:1,ret:-1,args:[W.bV]}]
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
if(x==y)H.mm(d||a)
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
Isolate.b4=a.b4
Isolate.dJ=a.dJ
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
if(typeof dartMainRunner==="function")dartMainRunner(N.h2,[])
else N.h2([])})})()
//# sourceMappingURL=test.dart.js.map
