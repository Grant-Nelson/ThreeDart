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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.da"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.da"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.da(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.db=function(){}
var dart=[["","",,H,{"^":"",lP:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cq:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.de==null){H.l8()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eL("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cJ()]
if(v!=null)return v
v=H.ld(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cJ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
q:function(a,b){return a===b},
gT:function(a){return H.bq(a)},
i:["e1",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
he:{"^":"o;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa5:1},
dP:{"^":"o;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isJ:1},
cK:{"^":"o;",
gT:function(a){return 0},
i:["e2",function(a){return String(a)}]},
hQ:{"^":"cK;"},
ch:{"^":"cK;"},
bQ:{"^":"cK;",
i:function(a){var z=a[$.$get$dz()]
if(z==null)return this.e2(a)
return"JavaScript function for "+H.k(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscG:1},
aV:{"^":"o;$ti",
h:function(a,b){H.E(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bU:function(a,b){var z,y
H.w(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bd(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.k(a[y]))
return z.join(b)},
hd:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bw:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcg:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.hc())},
aT:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cH(a,"[","]")},
gX:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gT:function(a){return H.bq(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c_(b,"newLength",null))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.X(b)
H.E(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b>=a.length||b<0)throw H.h(H.aO(a,b))
a[b]=c},
$ise:1,
$isd:1,
p:{
hd:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.dM(new Array(a),b)},
dM:function(a,b){return J.bk(H.c(a,[b]))},
bk:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lO:{"^":"aV;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bP:{"^":"o;",
ghc:function(a){return a===0?1/a<0:a<0},
hJ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ad(""+a+".toInt()"))},
cd:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dR:function(a,b){var z
if(b>20)throw H.h(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghc(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.h(H.aK(b))
return a*b},
dX:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.fn(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fn:function(a,b){return b>31?0:a>>>b},
aa:function(a,b){if(typeof b!=="number")throw H.h(H.aK(b))
return a<b},
$ist:1,
$isY:1},
dO:{"^":"bP;",$isA:1},
dN:{"^":"bP;"},
c8:{"^":"o;",
c2:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b<0)throw H.h(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
b8:function(a,b){if(b>=a.length)throw H.h(H.aO(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.S(b)
if(typeof b!=="string")throw H.h(P.c_(b,null,null))
return a+b},
bx:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cd(b,null,null))
if(b>c)throw H.h(P.cd(b,null,null))
if(c>a.length)throw H.h(P.cd(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.bx(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ho:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
a8:function(a,b){return this.ho(a,b," ")},
fZ:function(a,b,c){if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
return H.fq(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ise6:1,
$isn:1}}],["","",,H,{"^":"",
hc:function(){return new P.it("No element")},
a_:{"^":"j0;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c2(this.a,b)},
$aseM:function(){return[P.A]},
$asu:function(){return[P.A]},
$ase:function(){return[P.A]},
$asd:function(){return[P.A]}},
fY:{"^":"e;"},
dU:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bY(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bd(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hv:{"^":"e;a,b,$ti",
gX:function(a){return new H.hw(J.bL(this.a),this.b,this.$ti)},
gl:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dk(this.a,b))},
$ase:function(a,b){return[b]}},
hw:{"^":"cI;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascI:function(a,b){return[b]}},
jj:{"^":"e;a,b,$ti",
gX:function(a){return new H.jk(J.bL(this.a),this.b,this.$ti)}},
jk:{"^":"cI;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c5:{"^":"a;$ti"},
eM:{"^":"a;$ti"},
j0:{"^":"c9+eM;"}}],["","",,H,{"^":"",
l3:function(a){return init.types[H.X(a)]},
lb:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isC},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.h(H.aK(a))
return z},
bq:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$isch){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b8(w,0)===36)w=C.i.cC(w,1)
r=H.df(H.bJ(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e8:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i_:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aK(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bb(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aK(w))}return H.e8(z)},
e9:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aK(x))
if(x<0)throw H.h(H.aK(x))
if(x>65535)return H.i_(a)}return H.e8(a)},
hZ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bb(z,10))>>>0,56320|z&1023)}throw H.h(P.ah(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hY:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hW:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hS:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hT:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hV:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hX:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hU:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aK(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.h(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
z=H.X(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cd(b,"index",null)},
kZ:function(a,b,c){if(a>c)return new P.cc(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cc(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
aK:function(a){return new P.aC(!0,a,null,null)},
kS:function(a){if(typeof a!=="number")throw H.h(H.aK(a))
return a},
h:function(a){var z
if(a==null)a=new P.e5()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ft})
z.name=""}else z.toString=H.ft
return z},
ft:function(){return J.a6(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bd(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cL(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e4(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eu()
u=$.$get$ev()
t=$.$get$ew()
s=$.$get$ex()
r=$.$get$eB()
q=$.$get$eC()
p=$.$get$ez()
$.$get$ey()
o=$.$get$eE()
n=$.$get$eD()
m=v.a7(y)
if(m!=null)return z.$1(H.cL(H.S(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cL(H.S(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e4(H.S(y),m))}}return z.$1(new H.j_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ef()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aC(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ef()
return a},
b9:function(a){var z
if(a==null)return new H.f2(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f2(a)},
l0:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
la:function(a,b,c,d,e,f){H.j(a,"$iscG")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.la)
a.$identity=z
return z},
fK:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.i2(z).r}else x=d
w=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.cw(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.C()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.du(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l3,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dp:H.cx
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.du(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fH:function(a,b,c,d){var z=H.cx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
du:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fJ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fH(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.C()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.c0("self")
$.bc=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.C()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.c0("self")
$.bc=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fI:function(a,b,c,d){var z,y
z=H.cx
y=H.dp
switch(b?-1:a){case 0:throw H.h(H.ib("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fJ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.c0("self")
$.bc=z}y=$.dn
if(y==null){y=H.c0("receiver")
$.dn=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fI(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.ar
if(typeof y!=="number")return y.C()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.C()
$.ar=y+1
return new Function(z+y+"}")()},
da:function(a,b,c,d,e,f,g){var z,y
z=J.bk(H.bJ(b))
H.X(c)
y=!!J.K(d).$isd?J.bk(d):d
return H.fK(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.az(a,"String"))},
lg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.az(a,"num"))},
fg:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.az(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.az(a,"int"))},
fo:function(a,b){throw H.h(H.az(a,H.S(b).substring(3)))},
li:function(a,b){var z=J.bY(b)
throw H.h(H.fG(a,z.bx(b,3,z.gl(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fo(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.li(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.h(H.az(a,"List"))},
lc:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.fo(a,b)},
fh:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bX:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fh(J.K(a))
if(z==null)return!1
y=H.fk(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d6)return a
$.d6=!0
try{if(H.bX(a,b))return a
z=H.bZ(b)
y=H.az(a,z)
throw H.h(y)}finally{$.d6=!1}},
dc:function(a,b){if(a!=null&&!H.d9(a,b))H.r(H.az(a,H.bZ(b)))
return a},
fb:function(a){var z
if(a instanceof H.v){z=H.fh(J.K(a))
if(z!=null)return H.bZ(z)
return"Closure"}return H.b_(a)},
lm:function(a){throw H.h(new P.fR(H.S(a)))},
fi:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mC:function(a,b,c){return H.ba(a["$as"+H.k(c)],H.aP(b))},
bI:function(a,b,c,d){var z
H.S(c)
H.X(d)
z=H.ba(a["$as"+H.k(c)],H.aP(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.S(b)
H.X(c)
z=H.ba(a["$as"+H.k(b)],H.aP(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aP(a)
return z==null?null:z[b]},
bZ:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.w(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.df(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.kI(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aQ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aQ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aQ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l_(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
df:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.bU("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}v="<"+z.i(0)+">"
return v},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aP(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fe(H.ba(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.S(b)
H.bJ(c)
H.S(d)
if(a==null)return a
z=H.bH(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.df(c,0,null)
throw H.h(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fe:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mA:function(a,b,c){return a.apply(b,H.ba(J.K(b)["$as"+H.k(c)],H.aP(b)))},
fl:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fl(z)}return!1},
d9:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fl(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bX(a,b)}y=J.K(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.d9(a,b))throw H.h(H.az(a,H.bZ(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fk(a,b,c,d)
if('func' in a)return c.builtin$cls==="cG"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bh" in y.prototype))return!1
w=y.prototype["$as"+"bh"]
v=H.ba(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bZ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fe(H.ba(r,z),b,u,d)},
fk:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.al(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.al(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.al(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.al(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lf(m,b,l,d)},
lf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mB:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
ld:function(a){var z,y,x,w,v,u
z=H.S($.fj.$1(a))
y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cr[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.fd.$2(a,z))
if(z!=null){y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cr[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cs(x)
$.co[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cr[z]=x
return x}if(v==="-"){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fn(a,x)
if(v==="*")throw H.h(P.eL(z))
if(init.leafTags[z]===true){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fn(a,x)},
fn:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dh(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cs:function(a){return J.dh(a,!1,null,!!a.$isC)},
le:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cs(z)
else return J.dh(z,c,null,null)},
l8:function(){if(!0===$.de)return
$.de=!0
H.l9()},
l9:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cr=Object.create(null)
H.l4()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fp.$1(v)
if(u!=null){t=H.le(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l4:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b6(C.B,H.b6(C.G,H.b6(C.n,H.b6(C.n,H.b6(C.F,H.b6(C.C,H.b6(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fj=new H.l5(v)
$.fd=new H.l6(u)
$.fp=new H.l7(t)},
b6:function(a,b){return a(b)||b},
fq:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fr:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i1:{"^":"a;a,b,c,d,e,f,r,0x",p:{
i2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bk(z)
y=z[0]
x=z[1]
return new H.i1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iN:{"^":"a;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
ay:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cg:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eA:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hN:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e4:function(a,b){return new H.hN(a,b==null?null:b.method)}}},
hh:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
cL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hh(a,y,z?null:b.receiver)}}},
j_:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lp:{"^":"v:15;a",
$1:function(a){if(!!J.K(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f2:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
v:{"^":"a;",
i:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gdU:function(){return this},
$iscG:1,
gdU:function(){return this}},
ej:{"^":"v;"},
iu:{"^":"ej;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cw:{"^":"ej;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bq(this.a)
else y=typeof z!=="object"?J.aS(z):H.bq(z)
return(y^H.bq(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
cx:function(a){return a.a},
dp:function(a){return a.c},
c0:function(a){var z,y,x,w,v
z=new H.cw("self","target","receiver","name")
y=J.bk(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iO:{"^":"Z;a",
i:function(a){return this.a},
p:{
az:function(a,b){return new H.iO("TypeError: "+H.k(P.c4(a))+": type '"+H.fb(a)+"' is not a subtype of type '"+b+"'")}}},
fF:{"^":"Z;a",
i:function(a){return this.a},
p:{
fG:function(a,b){return new H.fF("CastError: "+H.k(P.c4(a))+": type '"+H.fb(a)+"' is not a subtype of type '"+b+"'")}}},
ia:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
ib:function(a){return new H.ia(a)}}},
aW:{"^":"ht;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gat:function(a){return new H.dT(this,[H.z(this,0)])},
dc:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cP(y,b)}else return this.ha(b)},
ha:function(a){var z=this.d
if(z==null)return!1
return this.ce(this.bF(z,J.aS(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b9(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b9(w,b)
x=y==null?null:y.b
return x}else return this.hb(b)},
hb:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bF(z,J.aS(a)&0x3ffffff)
x=this.ce(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bL()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bL()
this.c=y}this.cI(y,b,c)}else{x=this.d
if(x==null){x=this.bL()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bF(x,w)
if(v==null)this.bS(x,w,[this.bM(b,c)])
else{u=this.ce(v,b)
if(u>=0)v[u].b=c
else v.push(this.bM(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bd(this))
z=z.c}},
cI:function(a,b,c){var z
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
z=this.b9(a,b)
if(z==null)this.bS(a,b,this.bM(b,c))
else z.b=c},
eB:function(){this.r=this.r+1&67108863},
bM:function(a,b){var z,y
z=new H.hl(H.E(a,H.z(this,0)),H.E(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eB()
return z},
ce:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dW(this)},
b9:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eu:function(a,b){delete a[b]},
cP:function(a,b){return this.b9(a,b)!=null},
bL:function(){var z=Object.create(null)
this.bS(z,"<non-identifier-key>",z)
this.eu(z,"<non-identifier-key>")
return z},
$isdS:1},
hl:{"^":"a;a,b,0c,0d"},
dT:{"^":"fY;a,$ti",
gl:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hm(z,z.r,this.$ti)
y.c=z.e
return y}},
hm:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l5:{"^":"v:15;a",
$1:function(a){return this.a(a)}},
l6:{"^":"v:27;a",
$2:function(a,b){return this.a(a,b)}},
l7:{"^":"v:28;a",
$1:function(a){return this.a(H.S(a))}},
hf:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise6:1,
p:{
hg:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h7("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l_:function(a){return J.dM(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
aN:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.h(H.aO(b,a))},
kH:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kZ(a,b,c))
return b},
hJ:{"^":"o;",$isml:1,"%":"DataView;ArrayBufferView;cQ|eX|eY|hI|eZ|f_|aM"},
cQ:{"^":"hJ;",
gl:function(a){return a.length},
$isC:1,
$asC:I.db},
hI:{"^":"eY;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
$asc5:function(){return[P.t]},
$asu:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aM:{"^":"f_;",
$asc5:function(){return[P.A]},
$asu:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
lX:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lY:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lZ:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m_:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m0:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m1:{"^":"aM;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hK:{"^":"aM;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
bw:function(a,b,c){return new Uint8Array(a.subarray(b,H.kH(b,c,a.length)))},
"%":";Uint8Array"},
eX:{"^":"cQ+u;"},
eY:{"^":"eX+c5;"},
eZ:{"^":"cQ+u;"},
f_:{"^":"eZ+c5;"}}],["","",,P,{"^":"",
jm:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kP()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.jo(z),1)).observe(y,{childList:true})
return new P.jn(z,y,x)}else if(self.setImmediate!=null)return P.kQ()
return P.kR()},
mp:[function(a){self.scheduleImmediate(H.b7(new P.jp(H.b(a,{func:1,ret:-1})),0))},"$1","kP",4,0,11],
mq:[function(a){self.setImmediate(H.b7(new P.jq(H.b(a,{func:1,ret:-1})),0))},"$1","kQ",4,0,11],
mr:[function(a){P.cZ(C.l,H.b(a,{func:1,ret:-1}))},"$1","kR",4,0,11],
cZ:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.h.a1(a.a,1000)
return P.kl(z<0?0:z,b)},
ep:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b0]})
z=C.h.a1(a.a,1000)
return P.km(z<0?0:z,b)},
kL:function(a,b){if(H.bX(a,{func:1,args:[P.a,P.ap]}))return b.hx(a,null,P.a,P.ap)
if(H.bX(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kK:function(){var z,y
for(;z=$.b5,z!=null;){$.bF=null
y=z.b
$.b5=y
if(y==null)$.bE=null
z.a.$0()}},
mz:[function(){$.d7=!0
try{P.kK()}finally{$.bF=null
$.d7=!1
if($.b5!=null)$.$get$d3().$1(P.ff())}},"$0","ff",0,0,3],
fa:function(a){var z=new P.eS(H.b(a,{func:1,ret:-1}))
if($.b5==null){$.bE=z
$.b5=z
if(!$.d7)$.$get$d3().$1(P.ff())}else{$.bE.b=z
$.bE=z}},
kO:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b5
if(z==null){P.fa(a)
$.bF=$.bE
return}y=new P.eS(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b5=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
lj:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.j===y){P.cn(null,null,C.j,a)
return}y.toString
P.cn(null,null,y,H.b(y.bY(a),z))},
eo:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.cZ(a,b)}return P.cZ(a,H.b(y.bY(b),z))},
iK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b0]}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.ep(a,b)}x=y.d7(b,P.b0)
$.P.toString
return P.ep(a,H.b(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.kO(new P.kM(z,e))},
f8:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
f9:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kN:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cn:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bY(d):c.fW(d,-1)
P.fa(d)},
jo:{"^":"v:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jn:{"^":"v:24;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jp:{"^":"v:2;a",
$0:function(){this.a.$0()}},
jq:{"^":"v:2;a",
$0:function(){this.a.$0()}},
f5:{"^":"a;a,0b,c",
ef:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.ko(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
eg:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.kn(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isb0:1,
p:{
kl:function(a,b){var z=new P.f5(!0,0)
z.ef(a,b)
return z},
km:function(a,b){var z=new P.f5(!1,0)
z.eg(a,b)
return z}}},
ko:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kn:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.e5(w,x)}z.c=y
this.d.$1(z)}},
b4:{"^":"a;0a,b,c,d,e,$ti",
hh:function(a){if(this.c!==6)return!0
return this.b.b.cs(H.b(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
h9:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bX(z,{func:1,args:[P.a,P.ap]}))return H.dc(w.hD(z,a.a,a.b,null,y,P.ap),x)
else return H.dc(w.cs(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;d0:a<,b,0fd:c<,$ti",
dQ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kL(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.P,[c])
w=b==null?1:3
this.cJ(new P.b4(x,w,a,b,[z,c]))
return x},
hI:function(a,b){return this.dQ(a,null,b)},
cJ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb4")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaJ")
z=y.a
if(z<4){y.cJ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.b(new P.jE(this,a),{func:1,ret:-1}))}},
cX:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb4")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaJ")
y=u.a
if(y<4){u.cX(a)
return}this.a=y
this.c=u.c}z.a=this.ba(a)
y=this.b
y.toString
P.cn(null,null,y,H.b(new P.jJ(z,this),{func:1,ret:-1}))}},
bO:function(){var z=H.j(this.c,"$isb4")
this.c=null
return this.ba(z)},
ba:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cM:function(a){var z,y,x,w
z=H.z(this,0)
H.dc(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbh",y,"$asbh")
if(x){z=H.bH(a,"$isaJ",y,null)
if(z)P.eU(a,this)
else P.jF(a,this)}else{w=this.bO()
H.E(a,z)
this.a=4
this.c=a
P.bB(this,w)}},
bB:[function(a,b){var z
H.j(b,"$isap")
z=this.bO()
this.a=8
this.c=new P.ae(a,b)
P.bB(this,z)},function(a){return this.bB(a,null)},"hQ","$2","$1","gep",4,2,31],
$isbh:1,
p:{
jF:function(a,b){var z,y,x
b.a=1
try{a.dQ(new P.jG(b),new P.jH(b),null)}catch(x){z=H.aR(x)
y=H.b9(x)
P.lj(new P.jI(b,z,y))}},
eU:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaJ")
if(z>=4){y=b.bO()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.j(b.c,"$isb4")
b.a=2
b.c=a
a.cX(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.cm(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bB(z.a,b)}y=z.a
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
if(p){H.j(r,"$isae")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jL(x,b,r).$0()}else if((y&2)!==0)new P.jK(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbh){if(y.a>=4){n=H.j(t.c,"$isb4")
t.c=null
b=t.ba(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eU(y,t)
return}}m=b.b
n=H.j(m.c,"$isb4")
m.c=null
b=m.ba(n)
y=x.a
u=x.b
if(!y){H.E(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
jE:{"^":"v:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
jJ:{"^":"v:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jG:{"^":"v:14;a",
$1:function(a){var z=this.a
z.a=0
z.cM(a)}},
jH:{"^":"v:35;a",
$2:function(a,b){this.a.bB(a,H.j(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
jI:{"^":"v:2;a,b,c",
$0:function(){this.a.bB(this.b,this.c)}},
jM:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dO(H.b(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b9(v)
if(this.d){w=H.j(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.K(z).$isbh){if(z instanceof P.aJ&&z.gd0()>=4){if(z.gd0()===8){w=this.b
w.b=H.j(z.gfd(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hI(new P.jN(t),null)
w.a=!1}}},
jN:{"^":"v:37;a",
$1:function(a){return this.a}},
jL:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.E(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cs(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b9(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
jK:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isae")
w=this.c
if(w.hh(z)&&w.e!=null){v=this.b
v.b=w.h9(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b9(u)
w=H.j(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
eS:{"^":"a;a,0b"},
cX:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aJ(0,$.P,[P.A])
z.a=0
this.hg(new P.ix(z,this),!0,new P.iy(z,y),y.gep())
return y}},
ix:{"^":"v;a,b",
$1:function(a){H.E(a,H.aB(this.b,"cX",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aB(this.b,"cX",0)]}}},
iy:{"^":"v:2;a,b",
$0:function(){this.b.cM(this.a.a)}},
eh:{"^":"a;$ti"},
iw:{"^":"a;"},
b0:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.k(this.a)},
$isZ:1},
kv:{"^":"a;",$ismo:1},
kM:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e5()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
k7:{"^":"kv;",
hE:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.f8(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b9(x)
P.cm(null,null,this,z,H.j(y,"$isap"))}},
hF:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.f9(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b9(x)
P.cm(null,null,this,z,H.j(y,"$isap"))}},
fW:function(a,b){return new P.k9(this,H.b(a,{func:1,ret:b}),b)},
bY:function(a){return new P.k8(this,H.b(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.ka(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dO:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.f8(null,null,this,a,b)},
cs:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.P===C.j)return a.$1(b)
return P.f9(null,null,this,a,b,c,d)},
hD:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kN(null,null,this,a,b,c,d,e,f)},
hx:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
k9:{"^":"v;a,b,c",
$0:function(){return this.a.dO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k8:{"^":"v:3;a,b",
$0:function(){return this.a.hE(this.b)}},
ka:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hF(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ho:function(a,b,c){H.bJ(a)
return H.w(H.l0(a,new H.aW(0,0,[b,c])),"$isdS",[b,c],"$asdS")},
hn:function(a,b){return new H.aW(0,0,[a,b])},
hp:function(a,b,c,d){return new P.jU(0,0,[d])},
hb:function(a,b,c){var z,y
if(P.d8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.kJ(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ei(b,H.lc(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cH:function(a,b,c){var z,y,x
if(P.d8(a))return b+"..."+c
z=new P.bU(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.ei(x.gaz(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
d8:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
kJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.k(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.D();t=s,s=r){r=z.gN(z);++x
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
dW:function(a){var z,y,x
z={}
if(P.d8(a))return"{...}"
y=new P.bU("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fx(a,new P.hu(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
jU:{"^":"jO;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eW(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d5()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d5()
this.c=y}return this.cK(y,b)}else return this.ei(0,b)},
ei:function(a,b){var z,y,x
H.E(b,H.z(this,0))
z=this.d
if(z==null){z=P.d5()
this.d=z}y=this.cN(b)
x=z[y]
if(x==null)z[y]=[this.bA(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bA(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cY(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ey(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d2(y.splice(x,1)[0])
return!0},
cK:function(a,b){H.E(b,H.z(this,0))
if(H.j(a[b],"$isd4")!=null)return!1
a[b]=this.bA(b)
return!0},
cY:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isd4")
if(z==null)return!1
this.d2(z)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&67108863},
bA:function(a){var z,y
z=new P.d4(H.E(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cL()
return z},
d2:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cL()},
cN:function(a){return J.aS(a)&0x3ffffff},
ey:function(a,b){return a[this.cN(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
p:{
d5:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d4:{"^":"a;a,0b,0c"},
jV:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
eW:function(a,b,c){var z=new P.jV(a,b,[c])
z.c=a.e
return z}}},
jO:{"^":"ic;"},
c9:{"^":"jW;",$ise:1,$isd:1},
u:{"^":"a;$ti",
gX:function(a){return new H.dU(a,this.gl(a),0,[H.bI(this,a,"u",0)])},
E:function(a,b){return this.k(a,b)},
hL:function(a,b){var z,y,x
z=H.c([],[H.bI(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a_(z,y,this.k(a,y));++y}return z},
hK:function(a){return this.hL(a,!0)},
i:function(a){return P.cH(a,"[","]")}},
ht:{"^":"ab;"},
hu:{"^":"v:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ab:{"^":"a;$ti",
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bI(this,a,"ab",0),H.bI(this,a,"ab",1)]})
for(z=J.bL(this.gat(a));z.D();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bb(this.gat(a))},
i:function(a){return P.dW(a)},
$isa2:1},
ie:{"^":"a;$ti",
i:function(a){return P.cH(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dl("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=P.eW(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
$ise:1},
ic:{"^":"ie;"},
jW:{"^":"a+u;"}}],["","",,P,{"^":"",cB:{"^":"a;$ti"},dw:{"^":"iw;$ti"},h_:{"^":"cB;",
$ascB:function(){return[P.n,[P.d,P.A]]}},j6:{"^":"h_;a"},j7:{"^":"dw;",
h0:function(a,b,c){var z,y,x,w
z=a.length
P.ea(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ku(0,0,x)
if(w.ew(a,b,z)!==z)w.d3(C.i.c2(a,z-1),0)
return C.J.bw(x,0,w.b)},
h_:function(a){return this.h0(a,0,null)},
$asdw:function(){return[P.n,[P.d,P.A]]}},ku:{"^":"a;a,b,c",
d3:function(a,b){var z,y,x,w,v
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
ew:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c2(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b8(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d3(w,C.i.b8(a,u)))x=u}else if(w<=2047){v=this.b
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
h1:function(a){var z=J.K(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.b_(a)+"'"},
hq:function(a,b,c,d){var z,y
H.E(b,d)
z=J.hd(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hr:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.D();)C.a.h(y,H.E(x.gN(x),c))
if(b)return y
return H.w(J.bk(y),"$isd",z,"$asd")},
cY:function(a,b,c){var z,y
z=P.A
H.w(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.w(a,"$isaV",[z],"$asaV")
y=a.length
c=P.ea(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.aa()
z=c<y}else z=!0
return H.e9(z?C.a.bw(a,b,c):a)}return P.iz(a,b,c)},
iz:function(a,b,c){var z,y,x
H.w(a,"$ise",[P.A],"$ase")
z=J.bL(a)
for(y=0;y<b;++y)if(!z.D())throw H.h(P.ah(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gN(z))
return H.e9(x)},
i3:function(a,b,c){return new H.hf(a,H.hg(a,!1,!0,!1))},
kt:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.A],"$asd")
if(c===C.r){z=$.$get$f7().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.h_(H.E(b,H.aB(c,"cB",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hZ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h1(a)},
q:function(a){return new P.eT(a)},
di:function(a){H.lh(a)},
a5:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.h.bb(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fS(H.hY(this))
y=P.bM(H.hW(this))
x=P.bM(H.hS(this))
w=P.bM(H.hT(this))
v=P.bM(H.hV(this))
u=P.bM(H.hX(this))
t=P.fT(H.hU(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fS:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"Y;"},
"+double":0,
aT:{"^":"a;a",
j:function(a,b){return new P.aT(C.h.U(this.a*b))},
aa:function(a,b){return C.h.aa(this.a,H.j(b,"$isaT").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fX()
y=this.a
if(y<0)return"-"+new P.aT(0-y).i(0)
x=z.$1(C.h.a1(y,6e7)%60)
w=z.$1(C.h.a1(y,1e6)%60)
v=new P.fW().$1(y%1e6)
return""+C.h.a1(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
dF:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fW:{"^":"v:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fX:{"^":"v:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
e5:{"^":"Z;",
i:function(a){return"Throw of null."}},
aC:{"^":"Z;a,b,c,d",
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbD()+y+x
if(!this.a)return w
v=this.gbC()
u=P.c4(this.b)
return w+v+": "+H.k(u)},
p:{
fz:function(a){return new P.aC(!1,null,null,a)},
c_:function(a,b,c){return new P.aC(!0,a,b,c)},
dl:function(a){return new P.aC(!1,null,a,"Must not be null")}}},
cc:{"^":"aC;e,f,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
cd:function(a,b,c){return new P.cc(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
ea:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ah(b,a,c,"end",f))
return b}return c}}},
ha:{"^":"aC;e,l:f>,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){if(J.fu(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
N:function(a,b,c,d,e){var z=H.X(e!=null?e:J.bb(b))
return new P.ha(b,z,!0,a,c,"Index out of range")}}},
j1:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ad:function(a){return new P.j1(a)}}},
iZ:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eL:function(a){return new P.iZ(a)}}},
it:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fN:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.c4(z))+"."},
p:{
bd:function(a){return new P.fN(a)}}},
hO:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
ef:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fR:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eT:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h7:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bx(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"Y;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dl("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gN(z)
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
i:function(a){return P.hb(this,"(",")")}},
cI:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a2:{"^":"a;$ti"},
J:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gT:function(a){return H.bq(this)},
i:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"a;"},
n:{"^":"a;",$ise6:1},
"+String":0,
bU:{"^":"a;az:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ei:function(a,b,c){var z=J.bL(b)
if(!z.D())return a
if(c.length===0){do a+=H.k(z.gN(z))
while(z.D())}else{a+=H.k(z.gN(z))
for(;z.D();)a=a+c+H.k(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cA:function(a,b){var z=document.createElement("canvas")
return z},
fZ:function(a){H.j(a,"$isa8")
return"wheel"},
cj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eV:function(a,b,c,d){var z,y
z=W.cj(W.cj(W.cj(W.cj(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fc:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d7(a,b)},
bj:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lq:{"^":"o;0l:length=","%":"AccessibleNodeList"},
lr:{"^":"bj;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ls:{"^":"bj;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fE:{"^":"o;","%":";Blob"},
cz:{"^":"bj;",
bv:function(a,b,c){if(c!=null)return a.getContext(b,P.kT(c,null))
return a.getContext(b)},
dV:function(a,b){return this.bv(a,b,null)},
$iscz:1,
"%":"HTMLCanvasElement"},
ds:{"^":"o;",$isds:1,"%":"CanvasRenderingContext2D"},
ly:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lA:{"^":"fQ;0l:length=","%":"CSSPerspective"},
be:{"^":"o;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lB:{"^":"ju;0l:length=",
dW:function(a,b){var z=a.getPropertyValue(this.em(a,b))
return z==null?"":z},
em:function(a,b){var z,y
z=$.$get$dx()
y=z[b]
if(typeof y==="string")return y
y=this.fo(a,b)
z[b]=y
return y},
fo:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fU()+b
if(z in a)return z
return b},
gbZ:function(a){return a.bottom},
ga6:function(a){return a.height},
gaL:function(a){return a.left},
gb_:function(a){return a.right},
gb3:function(a){return a.top},
ga9:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fP:{"^":"a;",
gaL:function(a){return this.dW(a,"left")}},
dy:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fQ:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lC:{"^":"dy;0l:length=","%":"CSSTransformValue"},
lD:{"^":"dy;0l:length=","%":"CSSUnparsedValue"},
lE:{"^":"o;0l:length=","%":"DataTransferItemList"},
lF:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lG:{"^":"jw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.aa,P.Y]]},
$asu:function(){return[[P.aa,P.Y]]},
$ise:1,
$ase:function(){return[[P.aa,P.Y]]},
$isd:1,
$asd:function(){return[[P.aa,P.Y]]},
$asy:function(){return[[P.aa,P.Y]]},
"%":"ClientRectList|DOMRectList"},
fV:{"^":"o;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.ga9(a))+" x "+H.k(this.ga6(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isaa",[P.Y],"$asaa")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaL(b)&&a.top===z.gb3(b)&&this.ga9(a)===z.ga9(b)&&this.ga6(a)===z.ga6(b)},
gT:function(a){return W.eV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga9(a)&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF)},
gbZ:function(a){return a.bottom},
ga6:function(a){return a.height},
gaL:function(a){return a.left},
gb_:function(a){return a.right},
gb3:function(a){return a.top},
ga9:function(a){return a.width},
$isaa:1,
$asaa:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
lH:{"^":"jy;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.n]},
$asu:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"DOMStringList"},
lI:{"^":"o;0l:length=","%":"DOMTokenList"},
jt:{"^":"c9;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.j(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hK(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
a0:{"^":"L;",
gd9:function(a){return new W.jt(a,a.children)},
gda:function(a){return P.i0(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a7:{"^":"o;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a8:{"^":"o;",
d4:["e0",function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(c!=null)this.ej(a,b,c,!1)}],
ej:function(a,b,c,d){return a.addEventListener(b,H.b7(H.b(c,{func:1,args:[W.a7]}),1),!1)},
$isa8:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f0|f1|f3|f4"},
bg:{"^":"fE;",$isbg:1,"%":"File"},
lJ:{"^":"jD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bg]},
$asu:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asy:function(){return[W.bg]},
"%":"FileList"},
lK:{"^":"a8;0l:length=","%":"FileWriter"},
lL:{"^":"bj;0l:length=","%":"HTMLFormElement"},
bi:{"^":"o;",$isbi:1,"%":"Gamepad"},
lM:{"^":"o;0l:length=","%":"History"},
lN:{"^":"jQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c6:{"^":"o;0dd:data=",$isc6:1,"%":"ImageData"},
dL:{"^":"bj;",$isdL:1,"%":"HTMLImageElement"},
bl:{"^":"d_;",$isbl:1,"%":"KeyboardEvent"},
lR:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
lS:{"^":"o;0l:length=","%":"MediaList"},
lT:{"^":"a8;",
d4:function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.e0(a,b,c,!1)},
"%":"MessagePort"},
lU:{"^":"jX;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.c([],[P.n])
this.L(a,new W.hF(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hF:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lV:{"^":"jY;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.c([],[P.n])
this.L(a,new W.hG(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hG:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"o;",$isbm:1,"%":"MimeType"},
lW:{"^":"k_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bm]},
$asu:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"MimeTypeArray"},
ao:{"^":"d_;",$isao:1,"%":"PointerEvent;DragEvent|MouseEvent"},
js:{"^":"c9;a",
gX:function(a){var z=this.a.childNodes
return new W.dH(z,z.length,-1,[H.bI(C.K,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asu:function(){return[W.L]},
$ase:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"a8;",
i:function(a){var z=a.nodeValue
return z==null?this.e1(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hL:{"^":"k1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bp:{"^":"o;0l:length=",$isbp:1,"%":"Plugin"},
m4:{"^":"k5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"PluginArray"},
m6:{"^":"kb;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.c([],[P.n])
this.L(a,new W.i9(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"RTCStatsReport"},
i9:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m7:{"^":"bj;0l:length=","%":"HTMLSelectElement"},
br:{"^":"a8;",$isbr:1,"%":"SourceBuffer"},
m8:{"^":"f1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.br]},
$asu:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"SourceBufferList"},
bs:{"^":"o;",$isbs:1,"%":"SpeechGrammar"},
m9:{"^":"kd;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"SpeechGrammarList"},
bt:{"^":"o;0l:length=",$isbt:1,"%":"SpeechRecognitionResult"},
mb:{"^":"kg;",
k:function(a,b){return a.getItem(H.S(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.c([],[P.n])
this.L(a,new W.iv(z))
return z},
gl:function(a){return a.length},
$asab:function(){return[P.n,P.n]},
$isa2:1,
$asa2:function(){return[P.n,P.n]},
"%":"Storage"},
iv:{"^":"v:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"o;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
bv:{"^":"a8;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a8;",$isbw:1,"%":"TextTrackCue|VTTCue"},
mf:{"^":"kk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"TextTrackCueList"},
mg:{"^":"f4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"TextTrackList"},
mh:{"^":"o;0l:length=","%":"TimeRanges"},
bx:{"^":"o;",$isbx:1,"%":"Touch"},
b1:{"^":"d_;",$isb1:1,"%":"TouchEvent"},
mi:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"TouchList"},
mj:{"^":"o;0l:length=","%":"TrackDefaultList"},
d_:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mm:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
mn:{"^":"a8;0l:length=","%":"VideoTrackList"},
bA:{"^":"ao;",
gh4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gh3:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
jl:{"^":"a8;",
f9:function(a,b){return a.requestAnimationFrame(H.b7(H.b(b,{func:1,ret:-1,args:[P.Y]}),1))},
ev:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ms:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.be]},
$asu:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asy:function(){return[W.be]},
"%":"CSSRuleList"},
mt:{"^":"fV;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isaa",[P.Y],"$asaa")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaL(b)&&a.top===z.gb3(b)&&a.width===z.ga9(b)&&a.height===z.ga6(b)},
gT:function(a){return W.eV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga6:function(a){return a.height},
ga9:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mv:{"^":"kz;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bi]},
$asu:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asy:function(){return[W.bi]},
"%":"GamepadList"},
mw:{"^":"kB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mx:{"^":"kD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bt]},
$asu:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"SpeechRecognitionResultList"},
my:{"^":"kF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bu]},
$asu:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"StyleSheetList"},
jz:{"^":"cX;a,b,c,$ti",
hg:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mu:{"^":"jz;a,b,c,$ti"},
jA:{"^":"eh;a,b,c,d,e,$ti",
ft:function(){var z=this.d
if(z!=null&&this.a<=0)J.fw(this.b,this.c,z,!1)},
p:{
W:function(a,b,c,d,e){var z=c==null?null:W.fc(new W.jB(c),W.a7)
z=new W.jA(0,a,b,z,!1,[e])
z.ft()
return z}}},
jB:{"^":"v:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isa7"))}},
y:{"^":"a;$ti",
gX:function(a){return new W.dH(a,this.gl(a),-1,[H.bI(this,a,"y",0)])}},
dH:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fv(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
ju:{"^":"o+fP;"},
jv:{"^":"o+u;"},
jw:{"^":"jv+y;"},
jx:{"^":"o+u;"},
jy:{"^":"jx+y;"},
jC:{"^":"o+u;"},
jD:{"^":"jC+y;"},
jP:{"^":"o+u;"},
jQ:{"^":"jP+y;"},
jX:{"^":"o+ab;"},
jY:{"^":"o+ab;"},
jZ:{"^":"o+u;"},
k_:{"^":"jZ+y;"},
k0:{"^":"o+u;"},
k1:{"^":"k0+y;"},
k4:{"^":"o+u;"},
k5:{"^":"k4+y;"},
kb:{"^":"o+ab;"},
f0:{"^":"a8+u;"},
f1:{"^":"f0+y;"},
kc:{"^":"o+u;"},
kd:{"^":"kc+y;"},
kg:{"^":"o+ab;"},
kj:{"^":"o+u;"},
kk:{"^":"kj+y;"},
f3:{"^":"a8+u;"},
f4:{"^":"f3+y;"},
kp:{"^":"o+u;"},
kq:{"^":"kp+y;"},
kw:{"^":"o+u;"},
kx:{"^":"kw+y;"},
ky:{"^":"o+u;"},
kz:{"^":"ky+y;"},
kA:{"^":"o+u;"},
kB:{"^":"kA+y;"},
kC:{"^":"o+u;"},
kD:{"^":"kC+y;"},
kE:{"^":"o+u;"},
kF:{"^":"kE+y;"}}],["","",,P,{"^":"",
kW:function(a){var z,y
z=J.K(a)
if(!!z.$isc6){y=z.gdd(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f6(a.data,a.height,a.width)},
kV:function(a){if(a instanceof P.f6)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.hn(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.S(y[w])
z.a_(0,v,a[v])}return z},
kT:function(a,b){var z={}
a.L(0,new P.kU(z))
return z},
dE:function(){var z=$.dD
if(z==null){z=J.cu(window.navigator.userAgent,"Opera",0)
$.dD=z}return z},
fU:function(){var z,y
z=$.dA
if(z!=null)return z
y=$.dB
if(y==null){y=J.cu(window.navigator.userAgent,"Firefox",0)
$.dB=y}if(y)z="-moz-"
else{y=$.dC
if(y==null){y=!P.dE()&&J.cu(window.navigator.userAgent,"Trident/",0)
$.dC=y}if(y)z="-ms-"
else z=P.dE()?"-o-":"-webkit-"}$.dA=z
return z},
f6:{"^":"a;dd:a>,b,c",$isc6:1},
kU:{"^":"v:12;a",
$2:function(a,b){this.a[a]=b}},
h4:{"^":"c9;a,b",
gbG:function(){var z,y,x
z=this.b
y=H.aB(z,"u",0)
x=W.a0
return new H.hv(new H.jj(z,H.b(new P.h5(),{func:1,ret:P.a5,args:[y]}),[y]),H.b(new P.h6(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bb(this.gbG().a)},
k:function(a,b){var z=this.gbG()
return z.b.$1(J.dk(z.a,b))},
gX:function(a){var z=P.hr(this.gbG(),!1,W.a0)
return new J.am(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
h5:{"^":"v:25;",
$1:function(a){return!!J.K(H.j(a,"$isL")).$isa0}},
h6:{"^":"v:26;",
$1:function(a){return H.f(H.j(a,"$isL"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k6:{"^":"a;$ti",
gb_:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.E(z+this.c,H.z(this,0))},
gbZ:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.E(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isaa",[P.Y],"$asaa")
if(!z)return!1
z=this.a
y=J.cp(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb3(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.E(z+this.c,w)===y.gb_(b)){if(typeof x!=="number")return x.C()
z=H.E(x+this.d,w)===y.gbZ(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.E(x+this.d,v)
return P.jR(P.ck(P.ck(P.ck(P.ck(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aa:{"^":"k6;aL:a>,b3:b>,a9:c>,a6:d>,$ti",p:{
i0:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.aa()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.aa()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bR:{"^":"o;",$isbR:1,"%":"SVGLength"},lQ:{"^":"jT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asy:function(){return[P.bR]},
"%":"SVGLengthList"},bT:{"^":"o;",$isbT:1,"%":"SVGNumber"},m2:{"^":"k3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bT]},
$ise:1,
$ase:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$asy:function(){return[P.bT]},
"%":"SVGNumberList"},m5:{"^":"o;0l:length=","%":"SVGPointList"},mc:{"^":"ki;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asu:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"SVGStringList"},md:{"^":"a0;",
gd9:function(a){return new P.h4(a,new W.js(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bW:{"^":"o;",$isbW:1,"%":"SVGTransform"},mk:{"^":"ks;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bW]},
$ise:1,
$ase:function(){return[P.bW]},
$isd:1,
$asd:function(){return[P.bW]},
$asy:function(){return[P.bW]},
"%":"SVGTransformList"},jS:{"^":"o+u;"},jT:{"^":"jS+y;"},k2:{"^":"o+u;"},k3:{"^":"k2+y;"},kh:{"^":"o+u;"},ki:{"^":"kh+y;"},kr:{"^":"o+u;"},ks:{"^":"kr+y;"}}],["","",,P,{"^":"",lt:{"^":"o;0l:length=","%":"AudioBuffer"},lu:{"^":"jr;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.c([],[P.n])
this.L(a,new P.fB(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"AudioParamMap"},fB:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lv:{"^":"a8;0l:length=","%":"AudioTrackList"},fD:{"^":"a8;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m3:{"^":"fD;0l:length=","%":"OfflineAudioContext"},jr:{"^":"o+ab;"}}],["","",,P,{"^":"",cU:{"^":"o;",
dP:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$isc6&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.kV(g))
return}if(!!y.$isdL&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fz("Incorrect number or type of arguments"))},
hG:function(a,b,c,d,e,f,g){return this.dP(a,b,c,d,e,f,g,null,null,null)},
$iscU:1,
"%":"WebGLRenderingContext"},iA:{"^":"o;",$isiA:1,"%":"WebGLTexture"},iX:{"^":"o;",$isiX:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ma:{"^":"kf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return P.aL(a.item(b))},
E:function(a,b){return this.k(a,b)},
$asu:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$isd:1,
$asd:function(){return[[P.a2,,,]]},
$asy:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},ke:{"^":"o+u;"},kf:{"^":"ke+y;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
b7:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cA:function(a,b,c){var z=H.aB(this,"af",0)
H.b(b,{func:1,ret:P.a5,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.A,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aO:function(a,b){return this.cA(a,null,b)},
cW:function(a){var z
H.w(a,"$ise",[H.aB(this,"af",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cU:function(a,b){var z
H.w(b,"$ise",[H.aB(this,"af",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"af",0)
H.E(b,z)
z=[z]
if(this.cW(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cU(x,H.c([b],z))}},
bU:function(a,b){var z,y
H.w(b,"$ise",[H.aB(this,"af",0)],"$ase")
if(this.cW(b)){z=this.a
y=z.length
C.a.bU(z,b)
this.cU(y,b)}},
$ise:1,
p:{
cC:function(a){var z=new O.af([a])
z.b7(a)
return z}}},cO:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
ea:function(a){var z=this.b
if(!(z==null))z.v(a)},
aw:function(){return this.ea(null)},
gS:function(a){var z=this.a
if(z.length>0)return C.a.gcg(z)
else return V.aY()},
bs:function(a){var z=this.a
if(a==null)C.a.h(z,V.aY())
else C.a.h(z,a)
this.aw()},
au:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",cv:{"^":"a;"},aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sb6:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdK(),{func:1,ret:-1,args:[D.m]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.b(this.gdK(),{func:1,ret:-1,args:[D.m]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.ed])
w.b=!0
this.aM(w)}},
ah:function(a,b){var z
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.ah(0,b)},
a3:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gS(z))
z.aw()
a.cp(this.f)
z=a.dy
y=(z&&C.a).gcg(z)
if(y!=null&&this.d!=null)y.dM(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a3(a)
a.co()
a.dx.au()},
gn:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
aM:function(a){var z=this.z
if(!(z==null))z.v(a)},
Y:function(){return this.aM(null)},
hn:[function(a){H.j(a,"$ism")
this.e=null
this.aM(a)},function(){return this.hn(null)},"iw","$1","$0","gdK",0,2,0],
hl:[function(a){this.aM(H.j(a,"$ism"))},function(){return this.hl(null)},"iu","$1","$0","gdJ",0,2,0],
it:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdJ(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","ghk",8,0,8],
iv:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdJ(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.H(t.a,y)}}this.Y()},"$2","ghm",8,0,8],
$isaw:1,
p:{
cF:function(a,b,c,d,e,f){var z,y
z=new E.aD()
z.a=d
z.b=!0
y=O.cC(E.aD)
z.y=y
y.aO(z.ghk(),z.ghm())
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
z.sb6(0,e)
return z}}},i4:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e7:function(a,b){var z,y,x,w,v
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
z=new O.cO()
y=[V.at]
z.a=H.c([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.m]}
v=H.b(new E.i6(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cO()
z.a=H.c([],y)
v=z.gn()
v.toString
x=H.b(new E.i7(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cO()
z.a=H.c([],y)
y=z.gn()
y.toString
w=H.b(new E.i8(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bV])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.n,A.cV])},
ghw:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gS(z)
y=this.db
y=z.j(0,y.gS(y))
this.z=y
z=y}return z},
cp:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcg(z):a;(z&&C.a).h(z,y)},
co:function(){var z=this.dy
if(z.length>1)z.pop()},
d6:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.dc(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a_(0,z,a)},
p:{
i5:function(a,b){var z=new E.i4(a,b)
z.e7(a,b)
return z}}},i6:{"^":"v:9;a",
$1:function(a){var z
H.j(a,"$ism")
z=this.a
z.z=null
z.ch=null}},i7:{"^":"v:9;a",
$1:function(a){var z
H.j(a,"$ism")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i8:{"^":"v:9;a",
$1:function(a){var z
H.j(a,"$ism")
z=this.a
z.ch=null
z.cx=null}},iH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gn:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ec:[function(a){var z
H.j(a,"$ism")
z=this.x
if(!(z==null))z.v(a)
this.hB()},function(){return this.ec(null)},"eb","$1","$0","gcF",0,2,0],
gh8:function(){var z,y,x
z=Date.now()
y=C.h.a1(P.dF(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
cZ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.c.cd(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.cd(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eo(C.l,this.ghA())},
hB:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iJ(this),{func:1,ret:-1,args:[P.Y]})
C.u.ev(z)
C.u.f9(z,W.fc(y,P.Y))}},"$0","ghA",0,0,3],
hz:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cZ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dF(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aw()
w=x.db
C.a.sl(w.a,0)
w.aw()
w=x.dx
C.a.sl(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aR(v)
y=H.b9(v)
P.di("Error: "+H.k(z))
P.di("Stack: "+H.k(y))
throw H.h(z)}},
p:{
iI:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscz)return E.en(a,!0,!0,!0,!1)
y=W.cA(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd9(a).h(0,y)
w=E.en(y,!0,!0,!0,!1)
w.a=a
return w},
en:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iH()
y=P.ho(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bv(a,"webgl",y)
x=H.j(x==null?C.k.bv(a,"experimental-webgl",y):x,"$iscU")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.i5(x,a)
w=new T.iC(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j2(a)
v=new X.hi()
v.c=new X.av(!1,!1,!1)
v.d=P.hp(null,null,null,P.A)
w.b=v
v=new X.hH(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hs(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iM(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eh,P.a]])
w.z=v
u=document
t=W.ao
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.geM(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.geP(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.geJ(),q),!1,r))
v=w.z
p=W.bl
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.geR(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.geQ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.geU(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.geW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.geV(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.W(a,H.S(W.fZ(a)),H.b(w.geX(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.geN(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.geO(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geY(),q),!1,r))
r=w.z
q=W.b1
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.gf5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.gf3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.gf4(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.cZ()
return z}}},iJ:{"^":"v:29;a",
$1:function(a){var z
H.lg(a)
z=this.a
if(z.z){z.z=!1
z.hz()}}}}],["","",,Z,{"^":"",eQ:{"^":"a;a,b",p:{
d2:function(a,b,c){var z
H.w(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.eQ(b,z)}}},dq:{"^":"cv;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.k(z))
throw H.h(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},eR:{"^":"a;a",$islw:1},cy:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
ag:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isme:1},c7:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b_(this.c)+"'")+"]"}},b2:{"^":"a;a",
gcB:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=4
if((z&$.$get$b3().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
fV:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eP()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
ak:function(a){return new Z.b2(a)}}}}],["","",,D,{"^":"",dt:{"^":"a;"},aU:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.m(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.h2(z))
return x!==0},
c6:function(){return this.v(null)},
hC:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
af:function(a){return this.hC(a,!0,!1)},
p:{
F:function(){var z=new D.aU()
z.a=H.c([],[{func:1,ret:-1,args:[D.m]}])
z.c=0
return z}}},h2:{"^":"v:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.m]})
z=this.a.a
z.b
a.$1(z)}},m:{"^":"a;a,0b"},bN:{"^":"m;c,d,a,0b,$ti"},bO:{"^":"m;c,d,a,0b,$ti"},B:{"^":"m;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dr:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
p:{"^":"lx<"}},dQ:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},dR:{"^":"m;c,a,0b"},hi:{"^":"a;0a,0b,0c,0d",
ht:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dR(a,this)
y.b=!0
return z.v(y)},
hp:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dR(a,this)
y.b=!0
return z.v(y)}},dV:{"^":"cb;x,y,c,d,e,a,0b"},hs:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaF()
s=new X.bn(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cn:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.an(a,b))
return!0},
aY:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dT()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.an(a,b))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.an(a,b))
return!0},
hu:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cP(new V.Q(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.v(w)
return!0},
eT:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.dV(c,a,this.a.gaF(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},av:{"^":"a;a,b,c",
q:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bn:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},hH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bE:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaF()
x=new X.bn(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cn:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bE(a,b,!0))
return!0},
aY:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dT()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bE(a,b,!0))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bE(a,b,!1))
return!0},
hv:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cP(new V.Q(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.v(x)
return!0},
gdf:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gbu:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gdI:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},cP:{"^":"cb;x,c,d,e,a,0b"},cb:{"^":"m;"},es:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},iM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.O],"$asd")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaF()
w=new X.es(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hs:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.v(this.an(a,!0))
return!0},
hq:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.v(this.an(a,!0))
return!0},
hr:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.v(this.an(a,!1))
return!0}},j2:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaF:function(){var z=this.a
return V.cT(0,0,(z&&C.k).gda(z).c,C.k.gda(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.av(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
bT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.O(y-w,x-v)},
aR:function(a){return new V.Q(a.movementX,a.movementY)},
bN:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.U(u.pageX)
C.c.U(u.pageY)
s=z.left
C.c.U(u.pageX)
C.a.h(y,new V.O(t-s,C.c.U(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dr(z,new X.av(y,a.altKey,a.shiftKey))},
bH:function(a){var z,y,x,w,v,u
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
i2:[function(a){this.f=!0},"$1","geP",4,0,7],
hX:[function(a){this.f=!1},"$1","geJ",4,0,7],
i_:[function(a){H.j(a,"$isao")
if(this.f&&this.bH(a))a.preventDefault()},"$1","geM",4,0,4],
i4:[function(a){var z
H.j(a,"$isbl")
if(!this.f)return
z=this.cQ(a)
if(this.b.ht(z))a.preventDefault()},"$1","geR",4,0,16],
i3:[function(a){var z
H.j(a,"$isbl")
if(!this.f)return
z=this.cQ(a)
if(this.b.hp(z))a.preventDefault()},"$1","geQ",4,0,16],
i6:[function(a){var z,y,x,w
H.j(a,"$isao")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.al(a)
x=this.aR(a)
if(this.d.cn(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cn(y,w))a.preventDefault()},"$1","geU",4,0,4],
i8:[function(a){var z,y,x
H.j(a,"$isao")
this.aD(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","geW",4,0,4],
i1:[function(a){var z,y,x
H.j(a,"$isao")
if(!this.bH(a)){this.aD(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","geO",4,0,4],
i7:[function(a){var z,y,x
H.j(a,"$isao")
this.aD(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","geV",4,0,4],
i0:[function(a){var z,y,x
H.j(a,"$isao")
if(!this.bH(a)){this.aD(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aX(z,x))a.preventDefault()}},"$1","geN",4,0,4],
i9:[function(a){var z,y
H.j(a,"$isbA")
this.aD(a)
z=new V.Q((a&&C.t).gh3(a),C.t.gh4(a)).t(0,180)
if(this.x){if(this.d.hu(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hv(z,y))a.preventDefault()},"$1","geX",4,0,32],
ia:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.eT(w,v,x)}},"$1","geY",4,0,7],
ik:[function(a){var z
H.j(a,"$isb1")
this.a.focus()
this.f=!0
this.bT(a)
z=this.bN(a)
if(this.e.hs(z))a.preventDefault()},"$1","gf5",4,0,10],
ii:[function(a){var z
H.j(a,"$isb1")
this.bT(a)
z=this.bN(a)
if(this.e.hq(z))a.preventDefault()},"$1","gf3",4,0,10],
ij:[function(a){var z
H.j(a,"$isb1")
this.bT(a)
z=this.bN(a)
if(this.e.hr(z))a.preventDefault()},"$1","gf4",4,0,10]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
ax:[function(a){var z
H.j(a,"$ism")
z=this.d
if(!(z==null))z.v(a)},function(){return this.ax(null)},"hN","$1","$0","ged",0,2,0],
$isV:1,
$isaw:1},V:{"^":"a;",$isaw:1},hj:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
ax:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eS:[function(a){var z
H.j(a,"$ism")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eS(null)},"i5","$1","$0","gcV",0,2,0],
ib:[function(a){var z,y,x
H.w(a,"$ise",[D.V],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.eq(x))return!1}return!0},"$1","geZ",4,0,34],
hU:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcV(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isV")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geG",8,0,17],
ie:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcV(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isV")
if(t instanceof D.c3)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.H(s.a,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gf0",8,0,17],
eq:function(a){var z=C.a.aT(this.e,a)
return z},
$ase:function(){return[D.V]},
$asaf:function(){return[D.V]}},hR:{"^":"a;",$isV:1,$isaw:1},is:{"^":"a;",$isV:1,$isaw:1},iE:{"^":"a;",$isV:1,$isaw:1},iF:{"^":"a;",$isV:1,$isaw:1},iG:{"^":"a;",$isV:1,$isaw:1}}],["","",,V,{"^":"",
lz:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hE",8,0,33],
ct:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dX(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.i.a8("null",c)
return C.i.a8(C.c.dR($.l.$2(a,0)?0:a,b),c+b+1)},
b8:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.t],"$asd")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.a_(z,u,C.i.a8(z[u],x))}return z},
bK:function(a,b){return C.c.hJ(Math.pow(b,C.z.cd(Math.log(H.kS(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
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
return new V.T(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
as:{"^":"a;a,b,c,d",
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
return new V.as(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
ca:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a5,"$isca")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.c.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.c.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.c.j(t,s)
q=a5.b
p=C.c.j(z,q)
o=a5.e
n=C.c.j(w,o)
m=a5.x
l=C.c.j(t,m)
k=a5.c
z=C.c.j(z,k)
j=a5.f
w=C.c.j(w,j)
i=a5.y
t=C.c.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.c.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.c.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.c.j(d,s)
b=C.c.j(h,q)
a=C.c.j(f,o)
a0=C.c.j(d,m)
h=C.c.j(h,k)
f=C.c.j(f,j)
d=C.c.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.c.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.c.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.ca(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ca))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.b8(H.c([this.a,this.d,this.r],z),3,0)
x=V.b8(H.c([this.b,this.e,this.x],z),3,0)
w=V.b8(H.c([this.c,this.f,this.y],z),3,0)
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
at:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cf:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.aY()
a3=1/a2
a4=-w
a5=-i
return V.au((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.j(a7,"$isat")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ct:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.D(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
i:function(a){return this.I()},
dE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b8(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b8(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b8(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b8(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
I:function(){return this.dE("",3,0)},
w:function(a){return this.dE(a,3,0)},
p:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aY:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e3:function(a,b,c){return V.au(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e0:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
e1:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
e2:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
e_:function(a,b,c){var z,y,x,w,v
z=c.t(0,Math.sqrt(c.A(c)))
y=b.ap(z)
x=y.t(0,Math.sqrt(y.A(y)))
w=z.ap(x)
v=new V.D(a.a,a.b,a.c)
return V.au(x.a,w.a,z.a,x.K(0).A(v),x.b,w.b,z.b,w.K(0).A(v),x.c,w.c,z.c,z.K(0).A(v),0,0,0,1)}}},
O:{"^":"a;a,b",
G:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.O(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
U:{"^":"a;a,b,c",
C:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
aZ:{"^":"a;a,b,c,d",
j:function(a,b){return new V.aZ(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eb:{"^":"a;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
p:{
cT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)}}},
Q:{"^":"a;a,b",
he:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.Q(z*b,y*b)},
t:function(a,b){var z,y
if($.l.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.Q(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
D:{"^":"a;a,b,c",
he:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.D(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ap:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.D(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.D(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.l.$2(b,0))return new V.D(0,0,0)
return new V.D(this.a/b,this.b/b,this.c/b)},
dG:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fL:{"^":"dt;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bz:function(a){var z=V.ct(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.v(a)},
scu:function(a,b){},
scj:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bz(z)}z=new D.B("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.F(z)}},
scm:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bz(z)}z=new D.B("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.F(z)}},
sZ:function(a,b){var z,y
b=this.bz(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.t])
z.b=!0
this.F(z)}},
sck:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.F(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.t])
z.b=!0
this.F(z)}},
sc4:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.t])
z.b=!0
this.F(z)}},
ah:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
p:{
cD:function(){var z=new U.fL()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dv:{"^":"a3;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
av:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
cE:function(a){var z=new U.dv()
z.a=a
return z}}},dJ:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
F:[function(a){var z
H.j(a,"$ism")
z=this.e
if(!(z==null))z.v(a)},function(){return this.F(null)},"ad","$1","$0","gaC",0,2,0],
hO:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.F(z)},"$2","gee",8,0,19],
ic:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.H(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.F(z)},"$2","gf_",8,0,19],
av:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.av(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aY():x
z=this.e
if(!(z==null))z.af(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.a3]},
$asaf:function(){return[U.a3]},
$isa3:1,
p:{
dK:function(a){var z=new U.dJ()
z.b7(U.a3)
z.aO(z.gee(),z.gf_())
z.e=null
z.f=V.aY()
z.r=0
return z}}},a3:{"^":"dt;"},ec:{"^":"a3;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gn:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.v(a)},
sdS:function(a){var z,y
a=V.ct(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.B("yaw",y,a,this,[P.t])
z.b=!0
this.F(z)}},
sdL:function(a,b){var z,y
b=V.ct(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.B("pitch",y,b,this,[P.t])
z.b=!0
this.F(z)}},
sdN:function(a){var z,y
a=V.ct(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.B("roll",y,a,this,[P.t])
z.b=!0
this.F(z)}},
av:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sdS(this.a+this.d*b.y)
this.sdL(0,this.b+this.e*b.y)
this.sdN(this.c+this.f*b.y)
this.x=V.e2(this.c).j(0,V.e1(this.b)).j(0,V.e0(this.a))
z=this.y
if(!(z==null))z.af(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ec))return!1
z=this.a
y=b.a
if(!$.l.$2(z,y))return!1
z=this.b
y=b.b
if(!$.l.$2(z,y))return!1
z=this.c
y=b.c
if(!$.l.$2(z,y))return!1
z=this.d
y=b.d
if(!$.l.$2(z,y))return!1
z=this.e
y=b.e
if(!$.l.$2(z,y))return!1
z=this.f
y=b.f
if(!$.l.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}},j3:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
F:[function(a){var z
H.j(a,"$ism")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.F(null)},"ad","$1","$0","gaC",0,2,0],
aS:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdf()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdI()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
y=H.b(this.gbK(),y)
C.a.h(z.a,y)
return!0},
eC:[function(a){H.j(a,"$ism")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbI",4,0,1],
eD:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$ism"),"$isbn")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).t(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).t(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
this.b.sM(0)
y=y.G(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).t(0,z.ga2())}this.ad()},"$1","gbJ",4,0,1],
eE:[function(a){var z,y,x
H.j(a,"$ism")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sM(y*10*x)
this.ad()}},"$1","gbK",4,0,1],
av:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.ch=y
x=b.y
this.b.ah(0,x)
this.cx=V.e2(this.b.d)}return this.cx},
$isa3:1},j4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
F:[function(a){var z
H.j(a,"$ism")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.F(null)},"ad","$1","$0","gaC",0,2,0],
aS:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdf()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdI()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbu()
z.toString
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.F()
x.f=z}x=H.b(this.gez(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geA(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.F()
x.b=z}x=H.b(this.gfs(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.gfq(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.F()
x.c=z}y=H.b(this.gfp(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.Q(z,y)},
eC:[function(a){a=H.f(H.j(a,"$ism"),"$isbn")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbI",4,0,1],
eD:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$ism"),"$isbn")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga2()))}this.ad()},"$1","gbJ",4,0,1],
eE:[function(a){var z,y,x
H.j(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ad()}},"$1","gbK",4,0,1],
hR:[function(a){if(H.f(H.j(a,"$ism"),"$isdV").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gez",4,0,1],
hS:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$ism"),"$isbn")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga2()))
this.ad()},"$1","geA",4,0,1],
ip:[function(a){H.j(a,"$ism")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfs",4,0,1],
io:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$ism"),"$ises")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga2()))}this.ad()},"$1","gfq",4,0,1],
im:[function(a){var z,y,x
H.j(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ad()}},"$1","gfp",4,0,1],
av:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.dy=y
x=b.y
this.c.ah(0,x)
this.b.ah(0,x)
this.fr=V.e0(this.b.d).j(0,V.e1(this.c.d))}return this.fr},
$isa3:1},j5:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
F:function(a){var z=this.r
if(!(z==null))z.v(a)},
aS:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=H.b(this.geF(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hT:[function(a){var z,y,x,w
H.j(a,"$ism")
if(!J.M(this.b,this.a.b.c))return
H.f(a,"$iscP")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.t])
z.b=!0
this.F(z)}},"$1","geF",4,0,1],
av:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.au(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa3:1}}],["","",,M,{"^":"",fM:{"^":"af;0e,0f,0a,0b,0c,0d",
gn:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
V:[function(a){var z
H.j(a,"$ism")
z=this.f
if(!(z==null))z.v(a)},function(){return this.V(null)},"cG","$1","$0","gP",0,2,0],
ig:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gf1",8,0,20],
ih:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.H(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gf2",8,0,20],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$ase:function(){return[M.ax]},
$asaf:function(){return[M.ax]},
$isax:1},fO:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
V:[function(a){var z
H.j(a,"$ism")
z=this.f
if(!(z==null))z.v(a)},function(){return this.V(null)},"cG","$1","$0","gP",0,2,0],
saE:function(a){var z,y,x
if(a==null)a=new X.h9()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c1])
z.b=!0
this.V(z)}},
sb0:function(a,b){var z,y,x
if(b==null)b=X.dI(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.ce])
z.b=!0
this.V(z)}},
saN:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bV])
z.b=!0
this.V(z)}},
a3:function(a){a.cp(this.c)
this.b.W(a)
this.a.W(a)
this.d.ah(0,a)
this.d.a3(a)
this.a.ag(a)
this.b.ag(a)
a.co()},
$isax:1},h0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.j(a,"$ism")
z=this.x
if(!(z==null))z.v(a)},function(){return this.V(null)},"cG","$1","$0","gP",0,2,0],
hY:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geK",8,0,8],
hZ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.H(s.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geL",8,0,8],
saE:function(a){var z,y,x
if(a==null)a=X.cR(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c1])
z.b=!0
this.V(z)}},
sb0:function(a,b){var z,y,x
if(b==null)b=X.dI(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.ce])
z.b=!0
this.V(z)}},
saN:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bV])
z.b=!0
this.V(z)}},
gn:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
a3:function(a){var z
a.cp(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.ah(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.ah(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a3(a)
this.a.toString
a.cy.au()
a.db.au()
this.b.ag(a)
a.co()},
$isax:1,
p:{
dG:function(a,b,c,d){var z,y
z=new M.h0()
y=O.cC(E.aD)
z.d=y
y.aO(z.geK(),z.geL())
z.e=null
z.f=null
z.r=null
z.x=null
z.saE(a)
z.sb0(0,c)
z.saN(d)
return z}}},ax:{"^":"a;"}}],["","",,A,{"^":"",dm:{"^":"a;a,b,c"},fA:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h5:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
de:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dY:{"^":"cV;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aJ,0ar,0aK,0bf,0dg,0dh,0bg,0bh,0di,0dj,0bi,0bj,0dk,0dl,0bk,0dm,0dn,0bl,0dq,0dr,0bm,0bn,0bo,0ds,0dt,0bp,0bq,0du,0dv,0br,0dw,0c7,0dz,0c8,0dA,0c9,0dB,0ca,0dC,0cb,0dD,0cc,a,b,0c,0d,0e,0f,0r",
e6:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bU("")
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
a1.fv(z)
a1.fE(z)
a1.fw(z)
a1.fM(z)
a1.fN(z)
a1.fG(z)
a1.fR(z)
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
z=new P.bU("")
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
v.fB(z)
v.fu(z)
v.fz(z)
v.fC(z)
v.fK(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fI(z)
v.fJ(z)}v.fF(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.b:r+="   return 1.0;\n"
z.a=r
break
case C.f:r+="   return alpha;\n"
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fA(z)
v.fH(z)
v.fL(z)
v.fO(z)
v.fP(z)
v.fQ(z)
v.fD(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dF(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isaA")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isaA")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isaA")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isaA")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$isd1")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isaA")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isaA")
this.k3=H.c([],[A.aA])
y=a1.aJ
if(y>0){this.k2=H.j(this.r.m(0,"bendMatCount"),"$isI")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaA"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isI")
break
case C.e:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isI")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isI")
break
case C.e:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isI")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.aJ=H.f(this.r.m(0,"diffuseTxt"),"$isai")
this.aK=H.f(this.r.m(0,"nullDiffuseTxt"),"$isI")
break
case C.e:this.ar=H.f(this.r.m(0,"diffuseTxt"),"$isac")
this.aK=H.f(this.r.m(0,"nullDiffuseTxt"),"$isI")
break}}y=a1.d
if(y!==C.b){this.bf=H.f(this.r.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dg=H.f(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bg=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break
case C.e:this.dh=H.f(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bg=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a1.e
if(y!==C.b){this.bj=H.f(this.r.m(0,"shininess"),"$isR")
this.bh=H.f(this.r.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.di=H.f(this.r.m(0,"specularTxt"),"$isai")
this.bi=H.f(this.r.m(0,"nullSpecularTxt"),"$isI")
break
case C.e:this.dj=H.f(this.r.m(0,"specularTxt"),"$isac")
this.bi=H.f(this.r.m(0,"nullSpecularTxt"),"$isI")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.dk=H.f(this.r.m(0,"bumpTxt"),"$isai")
this.bk=H.f(this.r.m(0,"nullBumpTxt"),"$isI")
break
case C.e:this.dl=H.f(this.r.m(0,"bumpTxt"),"$isac")
this.bk=H.f(this.r.m(0,"nullBumpTxt"),"$isI")
break}if(a1.dy){this.dm=H.f(this.r.m(0,"envSampler"),"$isac")
this.dn=H.f(this.r.m(0,"nullEnvTxt"),"$isI")
y=a1.r
if(y!==C.b){this.bl=H.f(this.r.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dq=H.f(this.r.m(0,"reflectTxt"),"$isai")
this.bm=H.f(this.r.m(0,"nullReflectTxt"),"$isI")
break
case C.e:this.dr=H.f(this.r.m(0,"reflectTxt"),"$isac")
this.bm=H.f(this.r.m(0,"nullReflectTxt"),"$isI")
break}}y=a1.x
if(y!==C.b){this.bn=H.f(this.r.m(0,"refraction"),"$isR")
this.bo=H.f(this.r.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.ds=H.f(this.r.m(0,"refractTxt"),"$isai")
this.bp=H.f(this.r.m(0,"nullRefractTxt"),"$isI")
break
case C.e:this.dt=H.f(this.r.m(0,"refractTxt"),"$isac")
this.bp=H.f(this.r.m(0,"nullRefractTxt"),"$isI")
break}}}y=a1.y
if(y!==C.b){this.bq=H.f(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.d:this.du=H.f(this.r.m(0,"alphaTxt"),"$isai")
this.br=H.f(this.r.m(0,"nullAlphaTxt"),"$isI")
break
case C.e:this.dv=H.f(this.r.m(0,"alphaTxt"),"$isac")
this.br=H.f(this.r.m(0,"nullAlphaTxt"),"$isI")
break}}this.c7=H.c([],[A.eF])
this.c8=H.c([],[A.eG])
this.c9=H.c([],[A.eH])
this.ca=H.c([],[A.eI])
this.cb=H.c([],[A.eJ])
this.cc=H.c([],[A.eK])
if(a1.k2){y=a1.z
if(y>0){this.dw=H.j(this.r.m(0,"dirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.c7;(x&&C.a).h(x,new A.eF(m,l,k))}}y=a1.Q
if(y>0){this.dz=H.j(this.r.m(0,"pntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.c8;(x&&C.a).h(x,new A.eG(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dA=H.j(this.r.m(0,"spotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.c9;(x&&C.a).h(x,new A.eH(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dB=H.j(this.r.m(0,"txtDirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isI")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isai")
x=this.ca;(x&&C.a).h(x,new A.eI(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dC=H.j(this.r.m(0,"txtPntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isd1")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isI")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isac")
x=this.cb;(x&&C.a).h(x,new A.eJ(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dD=H.j(this.r.m(0,"txtSpotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isI")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isai")
x=this.cc;(x&&C.a).h(x,new A.eK(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ae:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dZ(c)
b.a.uniform1i(b.d,0)}},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
hx:function(a,b){var z,y
z=a.ar
y=new A.dY(b,z)
y.cE(b,z)
y.e6(a,b)
return y}}},hB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aJ,ar,aK",
fv:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aJ+"];\n"
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
fE:function(a){var z
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
fw:function(a){var z
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
fM:function(a){var z,y
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
fN:function(a){var z,y
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
fG:function(a){var z
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
fR:function(a){var z
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
am:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cC(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fB:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.am(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return emissionClr;\n"
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
fu:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.am(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return ambientClr;\n"
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
fz:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   diffuseColor = diffuseClr;\n"
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
fC:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
fK:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.am(a,z,"specular")
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
case C.f:z=y+"   specularColor = specularClr;\n"
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
fF:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
switch(y){case C.b:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
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
fI:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.am(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   vec3 scalar = reflectClr;\n"
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
fJ:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.am(a,z,"refract")
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
case C.f:z=y+"   vec3 scalar = refractClr;\n"
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
fA:function(a){var z,y
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
fH:function(a){var z,y
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
fL:function(a){var z,y
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
fO:function(a){var z,y,x
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
fP:function(a){var z,y,x
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
fQ:function(a){var z,y,x
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
fD:function(a){var z
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
i:function(a){return this.ar}},eF:{"^":"a;a,b,c"},eI:{"^":"a;a,b,c,d,e,f,r,x"},eG:{"^":"a;a,b,c,d,e,f,r"},eJ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eH:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eK:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cV:{"^":"cv;",
cE:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dF:function(a,b,c){var z,y,x
this.c=this.cR(b,35633)
this.d=this.cR(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fg(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.k(x)))}this.fk()
this.fm()},
W:function(a){a.a.useProgram(this.e)
this.f.h5()},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fg(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fk:function(){var z,y,x,w,v,u
z=H.c([],[A.dm])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dm(y,v.name,u))}this.f=new A.fA(z)},
fm:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.h2(v.type,v.size,v.name,u))}this.r=new A.iW(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.I(z,y,b,c)
else return A.d0(z,y,b,a,c)},
er:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.d0(z,y,b,a,c)},
es:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.d0(z,y,b,a,c)},
bc:function(a,b){return new P.eT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
h2:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iR(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.iU(this.a,this.e,c,d)
case 35667:return new A.iS(this.a,this.e,c,d)
case 35668:return new A.iT(this.a,this.e,c,d)
case 35669:return new A.iV(this.a,this.e,c,d)
case 35674:return new A.iY(this.a,this.e,c,d)
case 35675:return new A.d1(this.a,this.e,c,d)
case 35676:return new A.aA(this.a,this.e,c,d)
case 35678:return this.er(b,c,d)
case 35680:return this.es(b,c,d)
case 35670:throw H.h(this.bc("BOOL",c))
case 35671:throw H.h(this.bc("BOOL_VEC2",c))
case 35672:throw H.h(this.bc("BOOL_VEC3",c))
case 35673:throw H.h(this.bc("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},c2:{"^":"a;a,b",
i:function(a){return this.b}},ee:{"^":"cV;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a4:{"^":"a;"},iW:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.I()},
h7:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
I:function(){return this.h7("\n")}},I:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},iS:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},iT:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},iV:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},iQ:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
d0:function(a,b,c,d,e){var z=new A.iQ(a,b,c,e)
z.f=d
z.e=P.hq(d,0,!1,P.A)
return z}}},R:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},iR:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},H:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},iU:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},iY:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},d1:{"^":"a4;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bD(H.w(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aA:{"^":"a4;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bD(H.w(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},ai:{"^":"a4;a,b,c,d",
dZ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ac:{"^":"a4;a,b,c,d",
e_:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cl:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bC:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.D(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.D(t+h,s+f,r+g)
z.b=q
p=new V.D(t-h,s-f,r-g)
z.c=p
o=new V.D(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cl(y)
k=F.cl(z.b)
j=F.fs(d,e,new F.kG(z,F.cl(z.c),F.cl(z.d),k,l,c),b)
if(j!=null)a.cl(j)},
ln:function(a,b,c,d){return F.kX(c,a,d,b,new F.lo())},
kX:function(a,b,c,d,e){var z=F.fs(a,b,new F.kY(H.b(e,{func:1,ret:V.U,args:[P.t]}),d,b,c),null)
if(z==null)return
z.aj()
z.hi(new F.jd(),new F.hM())
return z},
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aj,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cW()
y=H.c([],[F.aj])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ci(null,null,new V.as(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c3(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ci(null,null,new V.as(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c3(d))}}z.d.fT(a+1,b+1,y)
return z},
kG:{"^":"v:21;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ci(z.b,b).ci(z.d.ci(z.c,b),c)
a.sZ(0,new V.U(y.a,y.b,y.c))
a.shH(y.t(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.aZ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Y()}}},
lo:{"^":"v:36;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
kY:{"^":"v:21;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dj(y.$1(z),x)
x=J.dj(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.D(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.A(x)))
u=new V.D(1,0,0)
y=v.ap(!v.q(0,u)?new V.D(0,0,1):u)
t=y.t(0,Math.sqrt(y.A(y)))
y=t.ap(v)
u=y.t(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sZ(0,w.C(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ag:{"^":"a;0a,0b,0c,0d,0e",
aq:function(){if(!this.gaU()){C.a.H(this.a.a.d.b,this)
this.a.a.Y()}this.bP()
this.bQ()
this.f8()},
fh:function(a){this.a=a
C.a.h(a.d.b,this)},
fi:function(a){this.b=a
C.a.h(a.d.c,this)},
fj:function(a){this.c=a
C.a.h(a.d.d,this)},
bP:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
bQ:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
f8:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gaU:function(){return this.a==null||this.b==null||this.c==null},
el:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.D(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dG())return
return v.t(0,Math.sqrt(v.A(v)))},
eo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.D(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.A(z)))
z=w.G(0,y)
z=new V.D(z.a,z.b,z.c)
z=v.ap(z.t(0,Math.sqrt(z.A(z))))
return z.t(0,Math.sqrt(z.A(z)))},
c1:function(){if(this.d!=null)return!0
var z=this.el()
if(z==null){z=this.eo()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
ek:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.D(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dG())return
return v.t(0,Math.sqrt(v.A(v)))},
en:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.G(0,u)
z=new V.D(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.G(0,u).j(0,l).C(0,u).G(0,x)
z=new V.D(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.A(z)))
z=k.ap(m)
z=z.t(0,Math.sqrt(z.A(z))).ap(k)
m=z.t(0,Math.sqrt(z.A(z)))}return m},
c_:function(){if(this.e!=null)return!0
var z=this.ek()
if(z==null){z=this.en()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
gfY:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z,y
if(this.gaU())return a+"disposed"
z=a+C.i.a8(J.a6(this.a.e),0)+", "+C.i.a8(J.a6(this.b.e),0)+", "+C.i.a8(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
I:function(){return this.w("")},
p:{
bf:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.fh(a)
z.fi(b)
z.fj(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
h3:{"^":"a;"},
io:{"^":"h3;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cM:{"^":"a;0a,0b",
aq:function(){if(!this.gaU()){C.a.H(this.a.a.c.b,this)
this.a.a.Y()}this.bP()
this.bQ()},
bP:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
bQ:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gaU:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){if(this.gaU())return a+"disposed"
return a+C.i.a8(J.a6(this.a.e),0)+", "+C.i.a8(J.a6(this.b.e),0)},
I:function(){return this.w("")}},
hk:{"^":"a;"},
iP:{"^":"hk;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cS:{"^":"a;0a",
aq:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.Y()}this.f7()},
f7:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a8(J.a6(z.e),0)},
I:function(){return this.w("")}},
ed:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
cl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.u()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h1())}this.a.u()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cS()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cM()
s=p.a
if(s==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.q("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bf(p,o,l)}z=this.e
if(!(z==null))z.af(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.af(0)
return y},
ex:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.aj],"$asd")
H.w(e,"$isd",[P.A],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aW(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hi:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aj],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.ex(a,v,y,u,t))b.cl(u)}this.a.u()
this.c.cq()
this.d.cq()
this.b.hy()
this.c.cr(new F.iP())
this.d.cr(new F.io())
z=this.e
if(!(z==null))z.af(0)},
d8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gcB(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dq])
for(r=0,q=0;q<w;++q){p=b.fV(q)
o=p.gcB(p)
C.a.a_(s,q,new Z.dq(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hf(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bD(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cy(new Z.eQ(34962,j),s,b)
i.b=H.c([],[Z.c7])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c7(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c7(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c7(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.B(z,"\n")},
aM:function(a){var z=this.e
if(!(z==null))z.v(a)},
Y:function(){return this.aM(null)},
p:{
cW:function(){var z,y
z=new F.ed()
y=new F.j8(z)
y.b=!1
y.c=H.c([],[F.aj])
z.a=y
y=new F.ii(z)
y.b=H.c([],[F.cS])
z.b=y
y=new F.ih(z)
y.b=H.c([],[F.cM])
z.c=y
y=new F.ig(z)
y.b=H.c([],[F.ag])
z.d=y
z.e=null
return z}}},
ig:{"^":"a;a,0b",
fS:function(a){var z,y,x,w,v
H.w(a,"$isd",[F.aj],"$asd")
z=H.c([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bf(y,w,v))}return z},
fT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.aj],"$asd")
z=H.c([],[F.ag])
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
C.a.h(z,F.bf(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bf(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bf(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bf(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aW(0,v,t)){v.aq()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfY(x)
if(y)x.aq()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c1())x=!1
return x},
c0:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c_())x=!1
return x},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}},
ih:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aW(0,v,t)){v.aq()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.aq()}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.B(z,"\n")},
I:function(){return this.w("")}},
ii:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hy:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aq()}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}},
aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c3:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
h1:function(){return this.c3(null)},
sZ:function(a,b){var z
if(!J.M(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
shH:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
hf:function(a){var z,y
z=J.K(a)
if(z.q(a,$.$get$aq())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aG())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aH())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$aI())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$by())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bz())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b3()))return H.c([this.ch],[P.t])
else if(z.q(a,$.$get$aE())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
c1:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.D(0,0,0)
this.d.L(0,new F.ji(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
c_:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.D(0,0,0)
this.d.L(0,new F.jh(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
w:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.a8(J.a6(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
I:function(){return this.w("")},
p:{
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.jg(z)
y.b=H.c([],[F.cS])
z.b=y
y=new F.jc(z)
x=[F.cM]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.j9(z)
x=[F.ag]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eN()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$eO().a)!==0?c:null
z.ch=(x&$.$get$b3().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
ji:{"^":"v:5;a",
$1:function(a){var z,y
H.j(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jh:{"^":"v:5;a",
$1:function(a){var z,y
H.j(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
j8:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
fU:function(a,b,c,d,e,f,g,h,i){var z=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bd:function(a,b,c,d,e,f){return this.fU(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c1()
return!0},
c0:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c_()
return!0},
fX:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
this.u()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}},
j9:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ag]})
C.a.L(this.b,b)
C.a.L(this.c,new F.ja(this,b))
C.a.L(this.d,new F.jb(this,b))},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}},
ja:{"^":"v:5;a,b",
$1:function(a){H.j(a,"$isag")
if(!J.M(a.a,this.a))this.b.$1(a)}},
jb:{"^":"v:5;a,b",
$1:function(a){var z
H.j(a,"$isag")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
jc:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}},
je:{"^":"a;"},
jd:{"^":"je;",
aW:function(a,b,c){return J.M(b.f,c.f)}},
jf:{"^":"a;"},
hM:{"^":"jf;",
cl:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.aj],"$asd")
z=new V.D(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.D(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.A(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.t(0,Math.sqrt(u))
if(!J.M(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.v(null)}}}return}},
jg:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.I()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
I:function(){return this.w("")}}}],["","",,O,{"^":"",hy:{"^":"bV;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
R:[function(a){var z
H.j(a,"$ism")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.R(null)},"cH","$1","$0","gay",0,2,0],
fb:[function(a){H.j(a,"$ism")
this.a=null
this.R(a)},function(){return this.fb(null)},"il","$1","$0","gfa",0,2,0],
hV:[function(a,b){var z=V.at
z=new D.bN(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.R(z)},"$2","geH",8,0,22],
hW:[function(a,b){var z=V.at
z=new D.bO(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.R(z)},"$2","geI",8,0,22],
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a1(z.e.length+3,4)*4
x=C.h.a1(z.f.length+3,4)*4
w=C.h.a1(z.r.length+3,4)*4
v=C.h.a1(z.x.length+3,4)*4
u=C.h.a1(z.y.length+3,4)*4
t=C.h.a1(z.z.length+3,4)*4
s=C.h.a1(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aq()
if(c){z=$.$get$aG()
a6=new Z.b2(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.b2(a6.a|z.a)}if(a){z=$.$get$aH()
a6=new Z.b2(a6.a|z.a)}if(a0){z=$.$get$aI()
a6=new Z.b2(a6.a|z.a)}if(a2){z=$.$get$aE()
a6=new Z.b2(a6.a|z.a)}return new A.hB(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.w(a,"$isd",[T.cf],"$asd")
if(b!=null)if(!C.a.aT(a,b)){b.a=a.length
C.a.h(a,b)}},
ah:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
x=new V.D(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ct(x)}}},
dM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cO()
y=H.j(a.fr.k(0,z.ar),"$isdY")
if(y==null){y=A.hx(z,a.a)
a.d6(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aK
z=b.e
if(!(z instanceof Z.cy)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.aj()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c0()
u.a.c0()
u=u.e
if(!(u==null))u.af(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fX()
t=t.e
if(!(t==null))t.af(0)}r=b.d.d8(new Z.eR(a.a),w)
r.as($.$get$aq()).e=this.a.y.c
if(z)r.as($.$get$aG()).e=this.a.Q.c
if(v)r.as($.$get$aF()).e=this.a.z.c
if(x.rx)r.as($.$get$aH()).e=this.a.ch.c
if(u)r.as($.$get$aI()).e=this.a.cx.c
if(x.x1)r.as($.$get$aE()).e=this.a.cy.c
b.e=r}z=T.cf
q=H.c([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gS(u)
v=v.db
v.toString
v.ab(u.a4(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gS(u)
t=a.dx
t=u.j(0,t.gS(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ab(u.a4(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghw()
t=a.dx
t=u.j(0,t.gS(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ab(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ab(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ab(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ab(C.A.a4(u,!0))}if(x.aJ>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.j(t,"$isat")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bD(H.w(t.a4(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.f.d)
v=this.a
u=this.f.d
v.ae(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.f.e)
v=this.a
u=this.f.e
v.a5(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.r.d)
v=this.a
u=this.r.d
v.ae(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.r.e)
v=this.a
u=this.r.e
v.a5(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.ae(v.aJ,v.aK,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a5(v.ar,v.aK,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.ae(v.dg,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a5(v.dh,v.bg,u)
u=this.a
v=this.y.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bh
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bj
u.a.uniform1f(u.d,s)
break
case C.d:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.ae(v.di,v.bi,u)
u=this.a
v=this.z.f
u=u.bh
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bj
v.a.uniform1f(v.d,s)
break
case C.e:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a5(v.dj,v.bi,u)
u=this.a
v=this.z.f
u=u.bh
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bj
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.ct(j.a)
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ(j)
s=i.b
h=t.gcv(t)
g=t.gcw(t)
t=t.gcz(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b4(j.gaZ(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gak(j)
g=i.d
h=t.gbt()
s=t.gb5()
t=t.gbe()
g.a.uniform3f(g.d,h,s,t)
t=j.gbV()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbW()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbX()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c9
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ(j)
s=i.b
h=t.gcv(t)
g=t.gcw(t)
t=t.gcz(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc5(j).is()
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b4(j.gaZ(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gak(j)
s=i.e
h=t.gbt()
g=t.gb5()
t=t.gbe()
s.a.uniform3f(s.d,h,g,t)
t=j.gir()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giq()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.ca
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb1()
H.w(q,"$isd",t,"$asd")
if(!C.a.aT(q,s)){s.saP(q.length)
C.a.h(q,s)}s=j.gc5(j)
h=i.d
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=j.gbu()
f=i.b
g=s.gaG(s)
h=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,h,s)
s=j.gb_(j)
h=i.c
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=m.ct(j.gc5(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gak(j)
g=i.f
f=h.gbt()
s=h.gb5()
h=h.gbe()
g.a.uniform3f(g.d,f,s,h)
h=j.gb1()
s=h.gdH(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcT()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaP())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dC
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cb
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb1()
H.w(q,"$isd",s,"$asd")
if(!C.a.aT(q,h)){h.saP(q.length)
C.a.h(q,h)}e=m.j(0,j.gS(j))
h=j.gS(j).b4(new V.U(0,0,0))
g=i.b
f=h.gcv(h)
d=h.gcw(h)
h=h.gcz(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b4(new V.U(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cf(0)
d=i.d
n=new Float32Array(H.bD(H.w(new V.ca(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gak(j)
h=i.e
f=d.gbt()
g=d.gb5()
d=d.gbe()
h.a.uniform3f(h.d,f,g,d)
d=j.gb1()
h=d.gdH(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcT()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaP())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbV()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbW()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbX()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dD
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cc
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb1()
H.w(q,"$isd",z,"$asd")
if(!C.a.aT(q,t)){t.saP(q.length)
C.a.h(q,t)}t=j.gaZ(j)
s=i.b
h=t.gcv(t)
g=t.gcw(t)
t=t.gcz(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc5(j)
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=j.gbu()
s=i.d
h=t.gaG(t)
g=t.gaH(t)
t=t.gaI()
s.a.uniform3f(s.d,h,g,t)
t=j.gb_(j)
g=i.e
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b4(j.gaZ(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb1()
s=t.gdH(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcT()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaP())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gak(j)
s=i.y
h=t.gbt()
g=t.gb5()
t=t.gbe()
s.a.uniform3f(s.d,h,g,t)
t=j.gix()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giy()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.d:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.ae(z.dk,z.bk,v)
break
case C.e:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a5(z.dl,z.bk,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gS(v).cf(0)
a.Q=v}z=z.fy
z.toString
z.ab(v.a4(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a5(z.dm,z.dn,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bl
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.ae(z.dq,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a5(z.dr,z.bm,v)
v=this.a
z=this.cx.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bo
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bn
v.a.uniform1f(v.d,t)
break
case C.d:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.ae(z.ds,z.bp,v)
v=this.a
z=this.cy.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bn
z.a.uniform1f(z.d,t)
break
case C.e:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a5(z.dt,z.bp,v)
v=this.a
z=this.cy.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bn
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bq
z.a.uniform1f(z.d,u)
break
case C.d:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.ae(z.du,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break
case C.e:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a5(z.dv,z.br,u)
u=this.a
z=this.db.f
u=u.bq
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.W(a)
z.a3(a)
z.ag(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.de()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cO().ar},
p:{
dZ:function(){var z,y,x,w
z=new O.hy()
y=O.cC(V.at)
z.e=y
y.aO(z.geH(),z.geI())
y=new O.aX(z,"emission")
y.c=C.b
y.f=new V.T(0,0,0)
z.f=y
y=new O.aX(z,"ambient")
y.c=C.b
y.f=new V.T(0,0,0)
z.r=y
y=new O.aX(z,"diffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.x=y
y=new O.aX(z,"invDiffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.y=y
y=new O.hD(z,"specular")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=100
z.z=y
y=new O.hA(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.aX(z,"reflect")
y.c=C.b
y.f=new V.T(0,0,0)
z.cx=y
y=new O.hC(z,"refract")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=1
z.cy=y
y=new O.hz(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hj()
y.b7(D.V)
y.e=H.c([],[D.c3])
y.f=H.c([],[D.hR])
y.r=H.c([],[D.is])
y.x=H.c([],[D.iE])
y.y=H.c([],[D.iF])
y.z=H.c([],[D.iG])
y.Q=null
y.ch=null
y.cA(y.geG(),y.geZ(),y.gf0())
z.dx=y
x=y.Q
if(x==null){x=D.F()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.m]}
w=H.b(z.gfa(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.F()
w.ch=y}x=H.b(z.gay(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},hz:{"^":"cN;0f,a,b,0c,0d,0e"},cN:{"^":"a;",
R:[function(a){this.a.R(H.j(a,"$ism"))},function(){return this.R(null)},"cH","$1","$0","gay",0,2,0],
aQ:["e4",function(){}],
ff:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gay(),{func:1,ret:-1,args:[D.m]})
C.a.H(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gay(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.B(this.b+".texture2D",x,this.d,this,[T.ek])
z.b=!0
this.a.R(z)}},
fg:function(a){}},hA:{"^":"cN;a,b,0c,0d,0e"},aX:{"^":"cN;0f,a,b,0c,0d,0e",
d_:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.R(y)}},
aQ:["by",function(){this.e4()
this.d_(new V.T(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aQ()
z=this.a
z.a=null
z.R(null)}this.d_(b)}},hC:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
fe:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.R(z)}},
aQ:function(){this.by()
this.fe(1)}},hD:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
bR:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.R(z)}},
aQ:function(){this.by()
this.bR(100)}},ip:{"^":"bV;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
R:[function(a){var z
H.j(a,"$ism")
z=this.e
if(!(z==null))z.v(a)},function(){return this.R(null)},"cH","$1","$0","gay",0,2,0],
dM:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.k(0,"Skybox"),"$isee")
if(z==null){y=a.a
z=new A.ee(y,"Skybox")
z.cE(y,"Skybox")
z.dF(0,$.ir,$.iq)
z.x=z.f.k(0,"posAttr")
z.y=H.f(z.r.k(0,"fov"),"$isR")
z.z=H.f(z.r.k(0,"ratio"),"$isR")
z.Q=H.f(z.r.k(0,"boxClr"),"$isH")
z.ch=H.f(z.r.k(0,"boxTxt"),"$isac")
z.cx=H.f(z.r.k(0,"viewMat"),"$isaA")
a.d6(z)}this.a=z}if(b.e==null){y=b.d.d8(new Z.eR(a.a),$.$get$aq())
y.as($.$get$aq()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.e_(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gS(x).cf(0)
w=w.cx
w.toString
w.ab(x.a4(0,!0))
y=b.e
if(y instanceof Z.cy){y.W(a)
y.a3(a)
y.ag(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.de()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bV:{"^":"a;"}}],["","",,T,{"^":"",cf:{"^":"cv;"},ek:{"^":"cf;"},iB:{"^":"ek;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gn:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
p:{
el:function(a,b){var z=new T.iB()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},em:{"^":"cf;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z}},iC:{"^":"a;a,0b,0c,0d,0e",
aB:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a7
W.W(z,"load",H.b(new T.iD(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fc:function(a,b,c){var z,y,x,w
b=V.bK(b,2)
z=V.bK(a.width,2)
y=V.bK(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cA(null,null)
x.width=z
x.height=y
w=H.j(C.k.dV(x,"2d"),"$isds")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kW(w.getImageData(0,0,x.width,x.height))}}},iD:{"^":"v:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fc(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hG(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.c6()}++z.e}}}],["","",,V,{"^":"",fy:{"^":"a;",
aV:function(a,b){return!0},
i:function(a){return"all"},
$isbS:1},bS:{"^":"a;"},dX:{"^":"a;",
aV:["e3",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aV(0,b))return!0
return!1}],
i:["cD",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbS:1},bo:{"^":"dX;0a",
aV:function(a,b){return!this.e3(0,b)},
i:function(a){return"!["+this.cD(0)+"]"}},id:{"^":"a;0a",
e8:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.A,P.a5])
for(y=new H.dU(a,a.gl(a),0,[H.aB(a,"u",0)]);y.D();)z.a_(0,y.d,!0)
this.a=z},
aV:function(a,b){return this.a.dc(0,b)},
i:function(a){var z=this.a
return P.cY(new H.dT(z,[H.z(z,0)]),0,null)},
$isbS:1,
p:{
a1:function(a){var z=new V.id()
z.e8(a)
return z}}},eg:{"^":"a;a,b,0c,0d",
ghj:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.et(this.a.J(0,b))
w.a=H.c([],[V.bS])
w.c=!1
C.a.h(this.c,w)
return w},
h6:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aV(0,a))return w}return},
i:function(a){return this.b}},eq:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fr(this.b,"\n","\\n")
y=H.fr(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},er:{"^":"a;a,b,0c",
i:function(a){return this.b}},iL:{"^":"a;0a,0b,0c",
J:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eg(this,b)
z.c=H.c([],[V.et])
this.a.a_(0,b,z)}return z},
b2:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.er(this,a)
y=P.n
z.c=new H.aW(0,0,[y,y])
this.b.a_(0,a,z)}return z},
hM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eq])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b8(a,t)
r=y.h6(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cY(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.ghj(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cY(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eq(o==null?p.b:o,q,t)}++t}}}},et:{"^":"dX;b,0c,0a",
i:function(a){return this.b.b+": "+this.cD(0)}}}],["","",,X,{"^":"",fC:{"^":"ce;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
ac:function(a){var z=this.dy
if(!(z==null))z.v(a)},
sa9:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.x=null
this.a=b
this.c=b
z=new D.B("width",z,b,this,[P.A])
z.b=!0
this.ac(z)}},
sa6:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.x=null
this.b=b
this.d=b
z=new D.B("height",z,b,this,[P.A])
z.b=!0
this.ac(z)}},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x==null){z=a.a
y=this.Q
x=this.a
w=this.b
v=H.X(z.getParameter(3379))
u=V.bK(x,2)
t=V.bK(w,2)
v=V.bK(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dP(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.el(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.c6()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.c6()
y=this.Q
x=y.b
this.y=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.z=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.x=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.y,0)
z.framebufferRenderbuffer(36160,36096,36161,this.z)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.x)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dx
y=z.c
a.c=C.c.U(y*this.a)
x=z.d
a.d=C.c.U(x*this.b)
w=this.c
q=C.c.U(z.a*w)
p=this.d
o=C.c.U(z.b*p)
n=C.c.U(y*w)
m=C.c.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.cy)
if(this.cx){z=a.a
y=this.ch
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
ag:function(a){a.a.bindFramebuffer(36160,null)}},c1:{"^":"a;",$isaw:1},h8:{"^":"ce;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
W:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.c.U(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.c.U(w.b*x)
t=C.c.U(w.c*y)
a.c=t
w=C.c.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
ag:function(a){},
p:{
dI:function(a,b,c,d,e,f,g){var z,y
z=new X.h8()
y=new V.as(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cT(0,0,1,1)
z.r=y
return z}}},h9:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
W:function(a){var z
a.cy.bs(V.aY())
z=V.aY()
a.db.bs(z)},
ag:function(a){a.cy.au()
a.db.au()},
$isaw:1,
$isc1:1},hP:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
ac:[function(a){var z
H.j(a,"$ism")
z=this.e
if(!(z==null))z.v(a)},function(){return this.ac(null)},"hP","$1","$0","geh",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bs(V.au(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e7
if(z==null){z=V.e_(new V.U(0,0,0),new V.D(0,1,0),new V.D(0,0,-1))
$.e7=z
r=z}else r=z
z=this.a
if(z!=null){q=z.av(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bs(r)},
ag:function(a){a.cy.au()
a.db.au()},
$isaw:1,
$isc1:1,
p:{
cR:function(a,b,c,d){var z,y,x,w
z=new X.hP()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gn()
x.toString
w=H.b(z.geh(),{func:1,ret:-1,args:[D.m]})
C.a.h(x.a,w)}x=new D.B("mover",y,z.a,z,[U.a3])
x.b=!0
z.ac(x)}x=z.b
if(!$.l.$2(x,b)){y=z.b
z.b=b
x=new D.B("fov",y,b,z,[P.t])
x.b=!0
z.ac(x)}x=z.c
if(!$.l.$2(x,d)){y=z.c
z.c=d
x=new D.B("near",y,d,z,[P.t])
x.b=!0
z.ac(x)}x=z.d
if(!$.l.$2(x,a)){y=z.d
z.d=a
x=new D.B("far",y,a,z,[P.t])
x.b=!0
z.ac(x)}return z}}},ce:{"^":"a;"}}],["","",,V,{"^":"",
lk:function(a){P.iK(C.x,new V.ll(a))},
ll:{"^":"v:38;a",
$1:function(a){H.j(a,"$isb0")
P.di(C.c.dR(this.a.gh8(),2)+" fps")}},
ij:{"^":"a;0a,0b",
e9:function(a,b){var z,y,x,w,v,u,t
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
t=W.a7
W.W(z,"scroll",H.b(new V.im(x),{func:1,ret:-1,args:[t]}),!1,t)},
d5:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.n],"$asd")
this.fl()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hM(C.a.hd(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fq(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kt(C.I,s,C.r,!1)
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
fl:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iL()
y=P.n
z.a=new H.aW(0,0,[y,V.eg])
z.b=new H.aW(0,0,[y,V.er])
z.c=z.J(0,"Start")
y=z.J(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").B(0,"Bold")
x=new V.bo()
w=[V.bS]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").B(0,"Italic")
x=new V.bo()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").B(0,"Code")
x=new V.bo()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").B(0,"LinkHead")
y=new V.bo()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").B(0,"LinkTail")
y=new V.bo()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").B(0,"Other").a,new V.fy())
x=z.J(0,"Other").B(0,"Other")
y=new V.bo()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.b2("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.b2("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.b2("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.b2("Link")
x=z.J(0,"Other")
x.d=x.a.b2("Other")
this.b=z},
p:{
ik:function(a,b){var z=new V.ij()
z.e9(a,!0)
return z}}},
im:{"^":"v:23;a",
$1:function(a){P.eo(C.l,new V.il(this.a))}},
il:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.c.U(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,V,{"^":"",
fm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=V.ik("Test 027",!0)
y=W.cA(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.n]
z.d5(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],x))
z.d5(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
v=E.iI(w,!0,!0,!0,!1)
u=U.dK(null)
z=new U.ec()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sdS(0)
z.sdL(0,0)
z.sdN(0)
x=z.d
if(!$.l.$2(x,0.1)){t=z.d
z.d=0.1
x=new D.B("deltaYaw",t,0.1,z,[P.t])
x.b=!0
z.F(x)}x=z.e
if(!$.l.$2(x,0.21)){t=z.e
z.e=0.21
x=new D.B("deltaPitch",t,0.21,z,[P.t])
x.b=!0
z.F(x)}x=z.f
if(!$.l.$2(x,0.32)){t=z.f
z.f=0.32
x=new D.B("deltaRoll",t,0.32,z,[P.t])
x.b=!0
z.F(x)}u.h(0,z)
u.h(0,U.cE(V.e3(0,0,5)))
s=X.cR(2000,1.0471975511965976,u,0.1)
r=new X.fC()
r.a=512
r.b=512
r.c=512
r.d=512
r.e=!0
r.f=!1
r.r=1
r.Q=T.el(0,null)
r.ch=new V.as(0,0,0,1)
r.cx=!0
r.cy=2000
r.db=!0
r.dx=V.cT(0,0,1,1)
r.sa9(0,512)
r.sa6(0,512)
if(r.cx){r.cx=!1
z=new D.B("clearColor",!0,!1,r,[P.a5])
z.b=!0
r.ac(z)}z=v.f
x=z.a
q=x.createTexture()
x.bindTexture(34067,q)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
p=new T.em()
p.a=0
p.b=q
p.c=!1
p.d=0
z.aB(p,q,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aB(p,q,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aB(p,q,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aB(p,q,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aB(p,q,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aB(p,q,"../resources/maskonaive/negz.jpg",34074,!1,!1)
o=new M.fO()
o.saE(null)
o.sb0(0,null)
o.saN(null)
z=E.cF(null,!0,null,"",null,null)
n=F.cW()
x=n.a
m=new V.D(-1,-1,1)
m=m.t(0,Math.sqrt(m.A(m)))
l=x.bd(new V.aZ(1,2,4,6),new V.as(1,0,0,1),new V.U(-1,-1,0),new V.O(0,1),m,null)
x=n.a
m=new V.D(1,-1,1)
m=m.t(0,Math.sqrt(m.A(m)))
k=x.bd(new V.aZ(0,3,4,6),new V.as(0,0,1,1),new V.U(1,-1,0),new V.O(1,1),m,null)
x=n.a
m=new V.D(1,1,1)
m=m.t(0,Math.sqrt(m.A(m)))
j=x.bd(new V.aZ(0,2,5,6),new V.as(0,1,0,1),new V.U(1,1,0),new V.O(1,0),m,null)
x=n.a
m=new V.D(-1,1,1)
m=m.t(0,Math.sqrt(m.A(m)))
i=x.bd(new V.aZ(0,2,4,7),new V.as(1,1,0,1),new V.U(-1,1,0),new V.O(0,0),m,null)
n.d.fS(H.c([l,k,j,i],[F.aj]))
n.aj()
z.sb6(0,n)
o.d=z
o.e=null
z=new O.ip()
z.b=1.0471975511965976
t=z.c
z.c=p
x=p.gn()
x.toString
m=H.b(z.gay(),{func:1,ret:-1,args:[D.m]})
C.a.h(x.a,m)
x=new D.B("boxTexture",t,z.c,z,[T.em])
x.b=!0
z.R(x)
h=new V.T(1,1,1)
if(!J.M(z.d,h)){t=z.d
z.d=h
x=new D.B("boxColor",t,h,z,[V.T])
x.b=!0
z.R(x)}z.e=null
o.saN(z)
o.sb0(0,r)
o.saE(s)
g=E.cF(null,!0,null,"",null,null)
g.sb6(0,F.ln(30,1,15,0.5))
f=O.dZ()
z=f.dx
x=U.cE(V.e_(new V.U(0,0,0),new V.D(0,1,0),new V.D(0,-1,-1)))
h=new V.T(1,1,1)
m=new D.c3()
m.c=new V.T(1,1,1)
m.a=new V.D(0,0,1)
t=m.b
m.b=x
x=x.gn()
x.toString
e=H.b(m.ged(),{func:1,ret:-1,args:[D.m]})
C.a.h(x.a,e)
x=new D.B("mover",t,m.b,m,[U.a3])
x.b=!0
m.ax(x)
if(!m.c.q(0,h)){t=m.c
m.c=h
x=new D.B("color",t,h,m,[V.T])
x.b=!0
m.ax(x)}z.h(0,m)
z=f.r
z.sak(0,new V.T(0,0,1))
z=f.x
z.sak(0,new V.T(0,1,0))
z=f.z
z.sak(0,new V.T(1,0,0))
z=f.z
if(z.c===C.b){z.c=C.f
z.by()
z.bR(100)
x=z.a
x.a=null
x.R(null)}z.bR(10)
d=M.dG(null,null,null,null)
d.saE(s)
d.saN(f)
d.sb0(0,r)
d.d.h(0,g)
c=U.dK(null)
z=v.r
x=new U.j4()
m=U.cD()
m.scu(0,!0)
m.scj(6.283185307179586)
m.scm(0)
m.sZ(0,0)
m.sck(100)
m.sM(0)
m.sc4(0.5)
x.b=m
m=m.gn()
m.toString
e={func:1,ret:-1,args:[D.m]}
b=H.b(x.gaC(),e)
C.a.h(m.a,b)
m=U.cD()
m.scu(0,!0)
m.scj(6.283185307179586)
m.scm(0)
m.sZ(0,0)
m.sck(100)
m.sM(0)
m.sc4(0.5)
x.c=m
C.a.h(m.gn().a,b)
x.d=null
x.e=!1
x.f=!1
x.r=!1
x.x=2.5
x.y=2.5
x.z=2
x.Q=4
x.cx=!1
x.ch=!1
x.cy=0
x.db=0
x.dx=null
x.dy=0
x.fr=null
x.fx=null
a=new X.av(!1,!1,!1)
t=x.d
x.d=a
m=[X.av]
b=new D.B("modifiers",t,a,x,m)
b.b=!0
x.F(b)
b=x.f
if(b!==!1){x.f=!1
b=new D.B("invertX",b,!1,x,[P.a5])
b.b=!0
x.F(b)}b=x.r
if(b!==!1){x.r=!1
b=new D.B("invertY",b,!1,x,[P.a5])
b.b=!0
x.F(b)}x.aS(z)
c.h(0,x)
z=v.r
x=new U.j3()
b=U.cD()
b.scu(0,!0)
b.scj(6.283185307179586)
b.scm(0)
b.sZ(0,0)
b.sck(100)
b.sM(0)
b.sc4(0.2)
x.b=b
b=b.gn()
b.toString
a0=H.b(x.gaC(),e)
C.a.h(b.a,a0)
x.c=null
x.d=!1
x.e=2.5
x.f=2
x.r=4
x.y=!1
x.x=!1
x.z=0
x.Q=null
x.ch=0
x.cx=null
x.cy=null
a=new X.av(!0,!1,!1)
t=x.c
x.c=a
b=new D.B("modifiers",t,a,x,m)
b.b=!0
x.F(b)
x.aS(z)
c.h(0,x)
z=v.r
x=new U.j5()
x.c=0.01
x.d=0
x.e=0
a=new X.av(!1,!1,!1)
x.b=a
m=new D.B("modifiers",null,a,x,m)
m.b=!0
x.F(m)
x.aS(z)
c.h(0,x)
c.h(0,U.cE(V.e3(0,0,5)))
a1=X.cR(2000,1.0471975511965976,c,0.1)
a2=E.cF(null,!0,null,"",null,null)
n=F.cW()
F.bC(n,null,null,1,1,1,0,0,1)
F.bC(n,null,null,1,1,0,1,0,3)
F.bC(n,null,null,1,1,0,0,1,2)
F.bC(n,null,null,1,1,-1,0,0,0)
F.bC(n,null,null,1,1,0,-1,0,0)
F.bC(n,null,null,1,1,0,0,-1,3)
n.aj()
a2.sb6(0,n)
a3=O.dZ()
z=a3.f
x=r.Q
m=z.c
if(m!==C.d){if(m===C.b)z.aQ()
z.c=C.d
z.fg(null)
m=z.a
m.a=null
m.R(null)}z.ff(x)
a4=M.dG(null,null,null,null)
a4.saE(a1)
a4.saN(a3)
a4.d.h(0,a2)
z=M.ax
x=H.c([o,d,a4],[z])
m=new M.fM()
m.b7(z)
m.e=!1
m.f=null
m.aO(m.gf1(),m.gf2())
m.bU(0,x)
z=v.d
if(z!==m){if(z!=null){z=z.gn()
z.toString
x=H.b(v.gcF(),e)
C.a.H(z.a,x)}v.d=m
z=m.gn()
z.toString
e=H.b(v.gcF(),e)
C.a.h(z.a,e)
v.eb()}V.lk(v)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.bY=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.dd=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.l1=function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ch.prototype
return a}
J.l2=function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ch.prototype
return a}
J.cp=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)}
J.fu=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l1(a).aa(a,b)}
J.dj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l2(a).j(a,b)}
J.fv=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lb(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bY(a).k(a,b)}
J.fw=function(a,b,c,d){return J.cp(a).d4(a,b,c,d)}
J.cu=function(a,b,c){return J.bY(a).fZ(a,b,c)}
J.dk=function(a,b){return J.dd(a).E(a,b)}
J.fx=function(a,b){return J.dd(a).L(a,b)}
J.aS=function(a){return J.K(a).gT(a)}
J.bL=function(a){return J.dd(a).gX(a)}
J.bb=function(a){return J.bY(a).gl(a)}
J.a6=function(a){return J.K(a).i(a)}
I.dg=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cz.prototype
C.y=J.o.prototype
C.a=J.aV.prototype
C.z=J.dN.prototype
C.h=J.dO.prototype
C.A=J.dP.prototype
C.c=J.bP.prototype
C.i=J.c8.prototype
C.H=J.bQ.prototype
C.J=H.hK.prototype
C.K=W.hL.prototype
C.p=J.hQ.prototype
C.q=P.cU.prototype
C.m=J.ch.prototype
C.t=W.bA.prototype
C.u=W.jl.prototype
C.v=new P.hO()
C.w=new P.j7()
C.j=new P.k7()
C.b=new A.c2(0,"ColorSourceType.None")
C.f=new A.c2(1,"ColorSourceType.Solid")
C.d=new A.c2(2,"ColorSourceType.Texture2D")
C.e=new A.c2(3,"ColorSourceType.TextureCube")
C.l=new P.aT(0)
C.x=new P.aT(5e6)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.c(I.dg([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.j6(!1)
$.ar=0
$.bc=null
$.dn=null
$.d6=!1
$.fj=null
$.fd=null
$.fp=null
$.co=null
$.cr=null
$.de=null
$.b5=null
$.bE=null
$.bF=null
$.d7=!1
$.P=C.j
$.dD=null
$.dC=null
$.dB=null
$.dA=null
$.l=V.hE()
$.ir="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iq="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e7=null
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
I.$lazy(y,x,w)}})(["dz","$get$dz",function(){return H.fi("_$dart_dartClosure")},"cJ","$get$cJ",function(){return H.fi("_$dart_js")},"eu","$get$eu",function(){return H.ay(H.cg({
toString:function(){return"$receiver$"}}))},"ev","$get$ev",function(){return H.ay(H.cg({$method$:null,
toString:function(){return"$receiver$"}}))},"ew","$get$ew",function(){return H.ay(H.cg(null))},"ex","$get$ex",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eB","$get$eB",function(){return H.ay(H.cg(void 0))},"eC","$get$eC",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.ay(H.eA(null))},"ey","$get$ey",function(){return H.ay(function(){try{null.$method$}catch(z){return z.message}}())},"eE","$get$eE",function(){return H.ay(H.eA(void 0))},"eD","$get$eD",function(){return H.ay(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d3","$get$d3",function(){return P.jm()},"bG","$get$bG",function(){return[]},"f7","$get$f7",function(){return P.i3("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dx","$get$dx",function(){return{}},"eP","$get$eP",function(){return Z.ak(0)},"eN","$get$eN",function(){return Z.ak(511)},"aq","$get$aq",function(){return Z.ak(1)},"aG","$get$aG",function(){return Z.ak(2)},"aF","$get$aF",function(){return Z.ak(4)},"aH","$get$aH",function(){return Z.ak(8)},"aI","$get$aI",function(){return Z.ak(16)},"by","$get$by",function(){return Z.ak(32)},"bz","$get$bz",function(){return Z.ak(64)},"eO","$get$eO",function(){return Z.ak(96)},"b3","$get$b3",function(){return Z.ak(128)},"aE","$get$aE",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.m]},{func:1,ret:-1,args:[D.m]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ao]},{func:1,ret:P.J,args:[F.ag]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.A,[P.e,E.aD]]},{func:1,ret:P.J,args:[D.m]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:-1,args:[P.A,[P.e,D.V]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.A,[P.e,U.a3]]},{func:1,ret:-1,args:[P.A,[P.e,M.ax]]},{func:1,ret:P.J,args:[F.aj,P.t,P.t]},{func:1,ret:-1,args:[P.A,[P.e,V.at]]},{func:1,ret:P.J,args:[W.a7]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.a5,args:[W.L]},{func:1,ret:W.a0,args:[W.L]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[P.Y]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.m]}]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.a5,args:[P.t,P.t]},{func:1,ret:P.a5,args:[[P.e,D.V]]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:V.U,args:[P.t]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.J,args:[P.b0]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.lm(d||a)
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
Isolate.dg=a.dg
Isolate.db=a.db
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
if(typeof dartMainRunner==="function")dartMainRunner(V.fm,[])
else V.fm([])})})()
//# sourceMappingURL=test.dart.js.map
