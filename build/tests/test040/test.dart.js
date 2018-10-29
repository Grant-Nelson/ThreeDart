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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d_(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d0=function(){}
var dart=[["","",,H,{"^":"",lz:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
d6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d3==null){H.kR()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.eC("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cv()]
if(v!=null)return v
v=H.kW(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cv(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
p:function(a,b){return a===b},
gR:function(a){return H.bk(a)},
i:["dR",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h_:{"^":"o;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isa9:1},
dH:{"^":"o;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isI:1},
cw:{"^":"o;",
gR:function(a){return 0},
i:["dS",function(a){return String(a)}]},
hC:{"^":"cw;"},
cO:{"^":"cw;"},
bH:{"^":"cw;",
i:function(a){var z=a[$.$get$ds()]
if(z==null)return this.dS(a)
return"JavaScript function for "+H.i(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscr:1},
aU:{"^":"o;$ti",
h:function(a,b){H.D(b,H.z(a,0))
if(!!a.fixed$length)H.q(P.ac("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.q(P.ac("remove"))
for(z=0;z<a.length;++z)if(J.L(a[z],b)){a.splice(z,1)
return!0}return!1},
b4:function(a,b){var z,y
H.w(b,"$isf",[H.z(a,0)],"$asf")
if(!!a.fixed$length)H.q(P.ac("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.b8(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.i(a[y]))
return z.join(b)},
h4:function(a){return this.B(a,"")},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bq:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.ae(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.e(P.ae(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gc1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.fY())},
aA:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
i:function(a){return P.cs(a,"[","]")},
gT:function(a){return new J.aj(a,a.length,0,[H.z(a,0)])},
gR:function(a){return H.bk(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.ac("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.bS(b,"newLength",null))
if(b<0)throw H.e(P.ae(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.X(b)
H.D(c,H.z(a,0))
if(!!a.immutable$list)H.q(P.ac("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aO(a,b))
if(b>=a.length||b<0)throw H.e(H.aO(a,b))
a[b]=c},
$isf:1,
$isc:1,
n:{
fZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ae(a,0,4294967295,"length",null))
return J.dE(new Array(a),b)},
dE:function(a,b){return J.bf(H.b(a,[b]))},
bf:function(a){H.bD(a)
a.fixed$length=Array
return a}}},
ly:{"^":"aU;$ti"},
aj:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c1:{"^":"o;",
gh3:function(a){return a===0?1/a<0:a<0},
hE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.ac(""+a+".toInt()"))},
aL:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.ac(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ac(""+a+".round()"))},
dD:function(a,b){var z
if(b>20)throw H.e(P.ae(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gh3(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.e(H.aB(b))
return a*b},
aF:function(a,b){var z
if(typeof b!=="number")throw H.e(H.aB(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cG(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cG(a,b)},
cG:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.ac("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.fc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fc:function(a,b){return b>31?0:a>>>b},
ab:function(a,b){if(typeof b!=="number")throw H.e(H.aB(b))
return a<b},
$isp:1,
$isV:1},
dG:{"^":"c1;",$isA:1},
dF:{"^":"c1;"},
cu:{"^":"o;",
bT:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aO(a,b))
if(b<0)throw H.e(H.aO(a,b))
if(b>=a.length)H.q(H.aO(a,b))
return a.charCodeAt(b)},
aY:function(a,b){if(b>=a.length)throw H.e(H.aO(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.P(b)
if(typeof b!=="string")throw H.e(P.bS(b,null,null))
return a+b},
br:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.e(P.c6(b,null,null))
if(b>c)throw H.e(P.c6(b,null,null))
if(c>a.length)throw H.e(P.c6(c,null,null))
return a.substring(b,c)},
ce:function(a,b){return this.br(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hi:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a2:function(a,b){return this.hi(a,b," ")},
fO:function(a,b,c){if(c>a.length)throw H.e(P.ae(c,0,a.length,null,null))
return H.fe(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdX:1,
$isn:1}}],["","",,H,{"^":"",
fY:function(){return new P.i9("No element")},
Y:{"^":"iJ;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.bT(this.a,b)},
$aseD:function(){return[P.A]},
$asu:function(){return[P.A]},
$asf:function(){return[P.A]},
$asc:function(){return[P.A]}},
fK:{"^":"f;"},
dM:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bQ(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.b8(z))
w=this.c
if(typeof x!=="number")return H.m(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
hg:{"^":"f;a,b,$ti",
gT:function(a){return new H.hh(J.bE(this.a),this.b,this.$ti)},
gl:function(a){return J.b6(this.a)},
D:function(a,b){return this.b.$1(J.d9(this.a,b))},
$asf:function(a,b){return[b]}},
hh:{"^":"ct;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asct:function(a,b){return[b]}},
j1:{"^":"f;a,b,$ti",
gT:function(a){return new H.j2(J.bE(this.a),this.b,this.$ti)}},
j2:{"^":"ct;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bX:{"^":"a;$ti"},
eD:{"^":"a;$ti"},
iJ:{"^":"c2+eD;"}}],["","",,H,{"^":"",
kJ:function(a){return init.types[H.X(a)]},
kU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isB},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.e(H.aB(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aX:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.K(a).$iscO){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aY(w,0)===36)w=C.i.ce(w,1)
r=H.d4(H.bD(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dZ:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hL:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aB(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aB(w))}return H.dZ(z)},
e_:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aB(x))
if(x<0)throw H.e(H.aB(x))
if(x>65535)return H.hL(a)}return H.dZ(a)},
hK:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b2(z,10))>>>0,56320|z&1023)}throw H.e(P.ae(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hH:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hD:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hE:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hG:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hI:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hF:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
m:function(a){throw H.e(H.aB(a))},
d:function(a,b){if(a==null)J.b6(a)
throw H.e(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.X(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.m(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.c6(b,"index",null)},
kF:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
aB:function(a){return new P.aD(!0,a,null,null)},
kA:function(a){if(typeof a!=="number")throw H.e(H.aB(a))
return a},
e:function(a){var z
if(a==null)a=new P.dW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fh})
z.name=""}else z.toString=H.fh
return z},
fh:function(){return J.a4(this.dartException)},
q:function(a){throw H.e(a)},
x:function(a){throw H.e(P.b8(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cx(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dV(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$el()
u=$.$get$em()
t=$.$get$en()
s=$.$get$eo()
r=$.$get$es()
q=$.$get$et()
p=$.$get$eq()
$.$get$ep()
o=$.$get$ev()
n=$.$get$eu()
m=v.a1(y)
if(m!=null)return z.$1(H.cx(H.P(y),m))
else{m=u.a1(y)
if(m!=null){m.method="call"
return z.$1(H.cx(H.P(y),m))}else{m=t.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=r.a1(y)
if(m==null){m=q.a1(y)
if(m==null){m=p.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=o.a1(y)
if(m==null){m=n.a1(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dV(H.P(y),m))}}return z.$1(new H.iI(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e7()
return a},
b4:function(a){var z
if(a==null)return new H.eR(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eR(a)},
kH:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
kT:function(a,b,c,d,e,f){H.k(a,"$iscr")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.r("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kT)
a.$identity=z
return z},
fx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cl(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.A()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kJ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dd:H.cm
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
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
fu:function(a,b,c,d){var z=H.cm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fu(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.A()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bT("self")
$.b7=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.A()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bT("self")
$.b7=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fv:function(a,b,c,d){var z,y
z=H.cm
y=H.dd
switch(b?-1:a){case 0:throw H.e(H.hX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fw:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bT("self")
$.b7=z}y=$.dc
if(y==null){y=H.bT("receiver")
$.dc=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aq
if(typeof y!=="number")return y.A()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.A()
$.aq=y+1
return new Function(z+y+"}")()},
d_:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bD(b))
H.X(c)
y=!!J.K(d).$isc?J.bf(d):d
return H.fx(a,z,c,y,!!e,f,g)},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
l_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
f4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
fc:function(a,b){throw H.e(H.av(a,H.P(b).substring(3)))},
l1:function(a,b){var z=J.bQ(b)
throw H.e(H.ft(a,z.br(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fc(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.l1(a,b)},
bD:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.e(H.av(a,"List"))},
kV:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.fc(a,b)},
f5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bP:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f5(J.K(a))
if(z==null)return!1
y=H.f8(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.cW)return a
$.cW=!0
try{if(H.bP(a,b))return a
z=H.bR(b)
y=H.av(a,z)
throw H.e(y)}finally{$.cW=!1}},
d1:function(a,b){if(a!=null&&!H.cZ(a,b))H.q(H.av(a,H.bR(b)))
return a},
f_:function(a){var z
if(a instanceof H.t){z=H.f5(J.K(a))
if(z!=null)return H.bR(z)
return"Closure"}return H.aX(a)},
l8:function(a){throw H.e(new P.fC(H.P(a)))},
f6:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mn:function(a,b,c){return H.b5(a["$as"+H.i(c)],H.aP(b))},
bC:function(a,b,c,d){var z
H.P(c)
H.X(d)
z=H.b5(a["$as"+H.i(c)],H.aP(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.P(b)
H.X(c)
z=H.b5(a["$as"+H.i(b)],H.aP(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aP(a)
return z==null?null:z[b]},
bR:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.w(b,"$isc",[P.n],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d4(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.i(b[y])}if('func' in a)return H.kq(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.i.A(t,b[r])
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
for(z=H.kG(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.P(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d4:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.n],"$asc")
if(a==null)return""
z=new P.bN("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}v="<"+z.i(0)+">"
return v},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bB:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aP(a)
y=J.K(a)
if(y[b]==null)return!1
return H.f2(H.b5(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.P(b)
H.bD(c)
H.P(d)
if(a==null)return a
z=H.bB(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d4(c,0,null)
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ai(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ai(a[y],b,c[y],d))return!1
return!0},
ml:function(a,b,c){return a.apply(b,H.b5(J.K(b)["$as"+H.i(c)],H.aP(b)))},
f9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.f9(z)}return!1},
cZ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.f9(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bP(a,b)}y=J.K(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ai(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.cZ(a,b))throw H.e(H.av(a,H.bR(b)))
return a},
ai:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.f8(a,b,c,d)
if('func' in a)return c.builtin$cls==="cr"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ai("type" in a?a.type:null,b,x,d)
else if(H.ai(a,b,x,d))return!0
else{if(!('$is'+"bc" in y.prototype))return!1
w=y.prototype["$as"+"bc"]
v=H.b5(w,z?a.slice(1):null)
return H.ai(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bR(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f2(H.b5(r,z),b,u,d)},
f8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ai(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ai(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ai(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kZ(m,b,l,d)},
kZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ai(c[w],d,a[w],b))return!1}return!0},
mm:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
kW:function(a){var z,y,x,w,v,u
z=H.P($.f7.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cg[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.P($.f1.$2(a,z))
if(z!=null){y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cg[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ch(x)
$.cd[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cg[z]=x
return x}if(v==="-"){u=H.ch(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fb(a,x)
if(v==="*")throw H.e(P.eC(z))
if(init.leafTags[z]===true){u=H.ch(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fb(a,x)},
fb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d6(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ch:function(a){return J.d6(a,!1,null,!!a.$isB)},
kY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ch(z)
else return J.d6(z,c,null,null)},
kR:function(){if(!0===$.d3)return
$.d3=!0
H.kS()},
kS:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.cg=Object.create(null)
H.kN()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fd.$1(v)
if(u!=null){t=H.kY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kN:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b1(C.A,H.b1(C.F,H.b1(C.n,H.b1(C.n,H.b1(C.E,H.b1(C.B,H.b1(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f7=new H.kO(v)
$.f1=new H.kP(u)
$.fd=new H.kQ(t)},
b1:function(a,b){return a(b)||b},
fe:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ff:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iv:{"^":"a;a,b,c,d,e,f",
a1:function(a){var z,y,x
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
n:{
au:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
er:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hz:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dV:function(a,b){return new H.hz(a,b==null?null:b.method)}}},
h2:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
cx:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h2(a,y,z?null:b.receiver)}}},
iI:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l9:{"^":"t:17;a",
$1:function(a){if(!!J.K(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eR:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isan:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gdL:function(){return this},
$iscr:1,
gdL:function(){return this}},
ec:{"^":"t;"},
ia:{"^":"ec;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cl:{"^":"ec;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cl))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aS(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
n:{
cm:function(a){return a.a},
dd:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.cl("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iw:{"^":"W;a",
i:function(a){return this.a},
n:{
av:function(a,b){return new H.iw("TypeError: "+H.i(P.bW(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
fs:{"^":"W;a",
i:function(a){return this.a},
n:{
ft:function(a,b){return new H.fs("CastError: "+H.i(P.bW(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
hX:function(a){return new H.hW(a)}}},
aV:{"^":"he;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaq:function(a){return new H.dL(this,[H.z(this,0)])},
cS:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cs(y,b)}else return this.h1(b)},
h1:function(a){var z=this.d
if(z==null)return!1
return this.c0(this.bA(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aZ(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aZ(w,b)
x=y==null?null:y.b
return x}else return this.h2(b)},
h2:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bA(z,J.aS(a)&0x3ffffff)
x=this.c0(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bD()
this.b=z}this.ck(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bD()
this.c=y}this.ck(y,b,c)}else{x=this.d
if(x==null){x=this.bD()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bA(x,w)
if(v==null)this.bK(x,w,[this.bE(b,c)])
else{u=this.c0(v,b)
if(u>=0)v[u].b=c
else v.push(this.bE(b,c))}}},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.b8(this))
z=z.c}},
ck:function(a,b,c){var z
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
z=this.aZ(a,b)
if(z==null)this.bK(a,b,this.bE(b,c))
else z.b=c},
eq:function(){this.r=this.r+1&67108863},
bE:function(a,b){var z,y
z=new H.h6(H.D(a,H.z(this,0)),H.D(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eq()
return z},
c0:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
i:function(a){return P.dO(this)},
aZ:function(a,b){return a[b]},
bA:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cs:function(a,b){return this.aZ(a,b)!=null},
bD:function(){var z=Object.create(null)
this.bK(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdK:1},
h6:{"^":"a;a,b,0c,0d"},
dL:{"^":"fK;a,$ti",
gl:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.h7(z,z.r,this.$ti)
y.c=z.e
return y}},
h7:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kO:{"^":"t:17;a",
$1:function(a){return this.a(a)}},
kP:{"^":"t:37;a",
$2:function(a,b){return this.a(a,b)}},
kQ:{"^":"t:35;a",
$1:function(a){return this.a(H.P(a))}},
h0:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdX:1,
n:{
h1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.fU("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kG:function(a){return J.dE(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bx:function(a){return a},
aN:function(a,b,c){H.bD(b)
if(a>>>0!==a||a>=c)throw H.e(H.aO(b,a))},
kp:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.kF(a,b,c))
return b},
hv:{"^":"o;",$ism6:1,"%":"DataView;ArrayBufferView;cC|eL|eM|hu|eN|eO|aK"},
cC:{"^":"hv;",
gl:function(a){return a.length},
$isB:1,
$asB:I.d0},
hu:{"^":"eM;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
$asbX:function(){return[P.p]},
$asu:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eO;",
$asbX:function(){return[P.A]},
$asu:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]},
$isc:1,
$asc:function(){return[P.A]}},
lH:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lI:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lJ:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lK:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lL:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lM:{"^":"aK;",
gl:function(a){return a.length},
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hw:{"^":"aK;",
gl:function(a){return a.length},
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
bq:function(a,b,c){return new Uint8Array(a.subarray(b,H.kp(b,c,a.length)))},
"%":";Uint8Array"},
eL:{"^":"cC+u;"},
eM:{"^":"eL+bX;"},
eN:{"^":"cC+u;"},
eO:{"^":"eN+bX;"}}],["","",,P,{"^":"",
j4:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kx()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.j6(z),1)).observe(y,{childList:true})
return new P.j5(z,y,x)}else if(self.setImmediate!=null)return P.ky()
return P.kz()},
ma:[function(a){self.scheduleImmediate(H.b2(new P.j7(H.l(a,{func:1,ret:-1})),0))},"$1","kx",4,0,12],
mb:[function(a){self.setImmediate(H.b2(new P.j8(H.l(a,{func:1,ret:-1})),0))},"$1","ky",4,0,12],
mc:[function(a){P.cK(C.l,H.l(a,{func:1,ret:-1}))},"$1","kz",4,0,12],
cK:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.X(a.a,1000)
return P.k3(z<0?0:z,b)},
eg:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.aY]})
z=C.f.X(a.a,1000)
return P.k4(z<0?0:z,b)},
kt:function(a,b){if(H.bP(a,{func:1,args:[P.a,P.an]}))return b.hr(a,null,P.a,P.an)
if(H.bP(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ks:function(){var z,y
for(;z=$.b0,z!=null;){$.bz=null
y=z.b
$.b0=y
if(y==null)$.by=null
z.a.$0()}},
mk:[function(){$.cX=!0
try{P.ks()}finally{$.bz=null
$.cX=!1
if($.b0!=null)$.$get$cT().$1(P.f3())}},"$0","f3",0,0,3],
eZ:function(a){var z=new P.eG(H.l(a,{func:1,ret:-1}))
if($.b0==null){$.by=z
$.b0=z
if(!$.cX)$.$get$cT().$1(P.f3())}else{$.by.b=z
$.by=z}},
kw:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.eZ(a)
$.bz=$.by
return}y=new P.eG(a)
x=$.bz
if(x==null){y.b=z
$.bz=y
$.b0=y}else{y.b=x.b
x.b=y
$.bz=y
if(y.b==null)$.by=y}},
l2:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.O
if(C.j===y){P.cc(null,null,C.j,a)
return}y.toString
P.cc(null,null,y,H.l(y.bO(a),z))},
ef:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.O
if(y===C.j){y.toString
return P.cK(a,b)}return P.cK(a,H.l(y.bO(b),z))},
is:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.l(b,z)
y=$.O
if(y===C.j){y.toString
return P.eg(a,b)}x=y.cP(b,P.aY)
$.O.toString
return P.eg(a,H.l(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.kw(new P.ku(z,e))},
eX:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eY:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
kv:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cc:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bO(d):c.fK(d,-1)
P.eZ(d)},
j6:{"^":"t:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j5:{"^":"t:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j7:{"^":"t:1;a",
$0:function(){this.a.$0()}},
j8:{"^":"t:1;a",
$0:function(){this.a.$0()}},
eU:{"^":"a;a,0b,c",
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.k6(this,b),0),a)
else throw H.e(P.ac("`setTimeout()` not found."))},
e6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.k5(this,a,Date.now(),b),0),a)
else throw H.e(P.ac("Periodic timer."))},
$isaY:1,
n:{
k3:function(a,b){var z=new P.eU(!0,0)
z.e5(a,b)
return z},
k4:function(a,b){var z=new P.eU(!1,0)
z.e6(a,b)
return z}}},
k6:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k5:{"^":"t:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dU(w,x)}z.c=y
this.d.$1(z)}},
b_:{"^":"a;0a,b,c,d,e,$ti",
h9:function(a){if(this.c!==6)return!0
return this.b.b.ca(H.l(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
h0:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bP(z,{func:1,args:[P.a,P.an]}))return H.d1(w.hy(z,a.a,a.b,null,y,P.an),x)
else return H.d1(w.ca(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aI:{"^":"a;cF:a<,b,0f1:c<,$ti",
dC:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kt(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aI(0,$.O,[c])
w=b==null?1:3
this.cl(new P.b_(x,w,a,b,[z,c]))
return x},
hD:function(a,b){return this.dC(a,null,b)},
cl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb_")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaI")
z=y.a
if(z<4){y.cl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.l(new P.jm(this,a),{func:1,ret:-1}))}},
cB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb_")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaI")
y=u.a
if(y<4){u.cB(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.cc(null,null,y,H.l(new P.jr(z,this),{func:1,ret:-1}))}},
bG:function(){var z=H.k(this.c,"$isb_")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cp:function(a){var z,y,x,w
z=H.z(this,0)
H.d1(a,{futureOr:1,type:z})
y=this.$ti
x=H.bB(a,"$isbc",y,"$asbc")
if(x){z=H.bB(a,"$isaI",y,null)
if(z)P.eI(a,this)
else P.jn(a,this)}else{w=this.bG()
H.D(a,z)
this.a=4
this.c=a
P.bv(this,w)}},
bw:[function(a,b){var z
H.k(b,"$isan")
z=this.bG()
this.a=8
this.c=new P.ad(a,b)
P.bv(this,z)},function(a){return this.bw(a,null)},"hS","$2","$1","gee",4,2,33],
$isbc:1,
n:{
jn:function(a,b){var z,y,x
b.a=1
try{a.dC(new P.jo(b),new P.jp(b),null)}catch(x){z=H.aR(x)
y=H.b4(x)
P.l2(new P.jq(b,z,y))}},
eI:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaI")
if(z>=4){y=b.bG()
b.a=a.a
b.c=a.c
P.bv(b,y)}else{y=H.k(b.c,"$isb_")
b.a=2
b.c=a
a.cB(y)}},
bv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bv(z.a,b)}y=z.a
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
if(p){H.k(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.ju(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jt(x,b,r).$0()}else if((y&2)!==0)new P.js(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.K(y).$isbc){if(y.a>=4){n=H.k(t.c,"$isb_")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eI(y,t)
return}}m=b.b
n=H.k(m.c,"$isb_")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.D(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
jm:{"^":"t:1;a,b",
$0:function(){P.bv(this.a,this.b)}},
jr:{"^":"t:1;a,b",
$0:function(){P.bv(this.b,this.a.a)}},
jo:{"^":"t:14;a",
$1:function(a){var z=this.a
z.a=0
z.cp(a)}},
jp:{"^":"t:31;a",
$2:function(a,b){this.a.bw(a,H.k(b,"$isan"))},
$1:function(a){return this.$2(a,null)}},
jq:{"^":"t:1;a,b,c",
$0:function(){this.a.bw(this.b,this.c)}},
ju:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dz(H.l(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b4(v)
if(this.d){w=H.k(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.K(z).$isbc){if(z instanceof P.aI&&z.gcF()>=4){if(z.gcF()===8){w=this.b
w.b=H.k(z.gf1(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hD(new P.jv(t),null)
w.a=!1}}},
jv:{"^":"t:30;a",
$1:function(a){return this.a}},
jt:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.D(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ca(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b4(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
js:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isad")
w=this.c
if(w.h9(z)&&w.e!=null){v=this.b
v.b=w.h0(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b4(u)
w=H.k(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
eG:{"^":"a;a,0b"},
cG:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aI(0,$.O,[P.A])
z.a=0
this.h7(new P.id(z,this),!0,new P.ie(z,y),y.gee())
return y}},
id:{"^":"t;a,b",
$1:function(a){H.D(a,H.aC(this.b,"cG",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aC(this.b,"cG",0)]}}},
ie:{"^":"t:1;a,b",
$0:function(){this.b.cp(this.a.a)}},
e9:{"^":"a;$ti"},
ic:{"^":"a;"},
aY:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isW:1},
kd:{"^":"a;",$ism9:1},
ku:{"^":"t:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dW()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
jQ:{"^":"kd;",
hz:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.O){a.$0()
return}P.eX(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b4(x)
P.cb(null,null,this,z,H.k(y,"$isan"))}},
hA:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.O){a.$1(b)
return}P.eY(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b4(x)
P.cb(null,null,this,z,H.k(y,"$isan"))}},
fK:function(a,b){return new P.jS(this,H.l(a,{func:1,ret:b}),b)},
bO:function(a){return new P.jR(this,H.l(a,{func:1,ret:-1}))},
cP:function(a,b){return new P.jT(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dz:function(a,b){H.l(a,{func:1,ret:b})
if($.O===C.j)return a.$0()
return P.eX(null,null,this,a,b)},
ca:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.O===C.j)return a.$1(b)
return P.eY(null,null,this,a,b,c,d)},
hy:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.O===C.j)return a.$2(b,c)
return P.kv(null,null,this,a,b,c,d,e,f)},
hr:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
jS:{"^":"t;a,b,c",
$0:function(){return this.a.dz(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jR:{"^":"t:3;a,b",
$0:function(){return this.a.hz(this.b)}},
jT:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hA(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h9:function(a,b,c){H.bD(a)
return H.w(H.kH(a,new H.aV(0,0,[b,c])),"$isdK",[b,c],"$asdK")},
h8:function(a,b){return new H.aV(0,0,[a,b])},
ha:function(a,b,c,d){return new P.jC(0,0,[d])},
fX:function(a,b,c){var z,y
if(P.cY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bA()
C.a.h(y,a)
try{P.kr(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.ea(b,H.kV(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cs:function(a,b,c){var z,y,x
if(P.cY(a))return b+"..."+c
z=new P.bN(b)
y=$.$get$bA()
C.a.h(y,a)
try{x=z
x.a=P.ea(x.gau(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gau()+c
y=z.gau()
return y.charCodeAt(0)==0?y:y},
cY:function(a){var z,y
for(z=0;y=$.$get$bA(),z<y.length;++z)if(a===y[z])return!0
return!1},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.i(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.C();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dO:function(a){var z,y,x
z={}
if(P.cY(a))return"{...}"
y=new P.bN("")
try{C.a.h($.$get$bA(),a)
x=y
x.a=x.gau()+"{"
z.a=!0
J.fl(a,new P.hf(z,y))
z=y
z.a=z.gau()+"}"}finally{z=$.$get$bA()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gau()
return z.charCodeAt(0)==0?z:z},
jC:{"^":"jw;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){return P.eK(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.D(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cV()
this.b=z}return this.cn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cV()
this.c=y}return this.cn(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.D(b,H.z(this,0))
z=this.d
if(z==null){z=P.cV()
this.d=z}y=this.cq(b)
x=z[y]
if(x==null)z[y]=[this.bv(b)]
else{if(this.cv(x,b)>=0)return!1
x.push(this.bv(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cC(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.em(z,b)
x=this.cv(y,b)
if(x<0)return!1
this.cH(y.splice(x,1)[0])
return!0},
cn:function(a,b){H.D(b,H.z(this,0))
if(H.k(a[b],"$iscU")!=null)return!1
a[b]=this.bv(b)
return!0},
cC:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscU")
if(z==null)return!1
this.cH(z)
delete a[b]
return!0},
co:function(){this.r=this.r+1&67108863},
bv:function(a){var z,y
z=new P.cU(H.D(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.co()
return z},
cH:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.co()},
cq:function(a){return J.aS(a)&0x3ffffff},
em:function(a,b){return a[this.cq(b)]},
cv:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
n:{
cV:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cU:{"^":"a;a,0b,0c"},
jD:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eK:function(a,b,c){var z=new P.jD(a,b,[c])
z.c=a.e
return z}}},
jw:{"^":"hY;"},
c2:{"^":"jE;",$isf:1,$isc:1},
u:{"^":"a;$ti",
gT:function(a){return new H.dM(a,this.gl(a),0,[H.bC(this,a,"u",0)])},
D:function(a,b){return this.j(a,b)},
hG:function(a,b){var z,y,x
z=H.b([],[H.bC(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.m(x)
if(!(y<x))break
C.a.V(z,y,this.j(a,y));++y}return z},
hF:function(a){return this.hG(a,!0)},
i:function(a){return P.cs(a,"[","]")}},
he:{"^":"aa;"},
hf:{"^":"t:15;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
aa:{"^":"a;$ti",
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bC(this,a,"aa",0),H.bC(this,a,"aa",1)]})
for(z=J.bE(this.gaq(a));z.C();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.b6(this.gaq(a))},
i:function(a){return P.dO(a)},
$isa1:1},
i_:{"^":"a;$ti",
i:function(a){return P.cs(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.da("index"))
if(b<0)H.q(P.ae(b,0,null,"index",null))
for(z=P.eK(this,this.r,H.z(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.e(P.N(b,this,"index",null,y))},
$isf:1},
hY:{"^":"i_;"},
jE:{"^":"a+u;"}}],["","",,P,{"^":"",cp:{"^":"a;$ti"},dp:{"^":"ic;$ti"},fM:{"^":"cp;",
$ascp:function(){return[P.n,[P.c,P.A]]}},iO:{"^":"fM;a"},iP:{"^":"dp;",
fQ:function(a,b,c){var z,y,x,w
z=a.length
P.e0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kc(0,0,x)
if(w.ek(a,b,z)!==z)w.cI(C.i.bT(a,z-1),0)
return C.I.bq(x,0,w.b)},
fP:function(a){return this.fQ(a,0,null)},
$asdp:function(){return[P.n,[P.c,P.A]]}},kc:{"^":"a;a,b,c",
cI:function(a,b){var z,y,x,w,v
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
ek:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bT(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aY(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cI(w,C.i.aY(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fO:function(a){var z=J.K(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.aX(a)+"'"},
hb:function(a,b,c,d){var z,y
H.D(b,d)
z=J.fZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
hc:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gT(a);x.C();)C.a.h(y,H.D(x.gM(x),c))
if(b)return y
return H.w(J.bf(y),"$isc",z,"$asc")},
cH:function(a,b,c){var z,y
z=P.A
H.w(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.w(a,"$isaU",[z],"$asaU")
y=a.length
c=P.e0(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ab()
z=c<y}else z=!0
return H.e_(z?C.a.bq(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.w(a,"$isf",[P.A],"$asf")
z=J.bE(a)
for(y=0;y<b;++y)if(!z.C())throw H.e(P.ae(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gM(z))
return H.e_(x)},
hP:function(a,b,c){return new H.h0(a,H.h1(a,!1,!0,!1))},
kb:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.A],"$asc")
if(c===C.q){z=$.$get$eW().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fP(H.D(b,H.aC(c,"cp",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hK(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
r:function(a){return new P.eH(a)},
d8:function(a){H.l0(a)},
a9:{"^":"a;"},
"+bool":0,
ak:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.ak))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fD(H.hJ(this))
y=P.bF(H.hH(this))
x=P.bF(H.hD(this))
w=P.bF(H.hE(this))
v=P.bF(H.hG(this))
u=P.bF(H.hI(this))
t=P.fE(H.hF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bF:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"V;"},
"+double":0,
ba:{"^":"a;a",
ab:function(a,b){return C.f.ab(this.a,H.k(b,"$isba").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.ba(0-y).i(0)
x=z.$1(C.f.X(y,6e7)%60)
w=z.$1(C.f.X(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.f.X(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
dy:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"t:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"t:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
dW:{"^":"W;",
i:function(a){return"Throw of null."}},
aD:{"^":"W;a,b,c,d",
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gby()+y+x
if(!this.a)return w
v=this.gbx()
u=P.bW(this.b)
return w+v+": "+H.i(u)},
n:{
fn:function(a){return new P.aD(!1,null,null,a)},
bS:function(a,b,c){return new P.aD(!0,a,b,c)},
da:function(a){return new P.aD(!1,null,a,"Must not be null")}}},
c5:{"^":"aD;e,f,a,b,c,d",
gby:function(){return"RangeError"},
gbx:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c6:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
e0:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.m(a)
if(0<=a){if(typeof c!=="number")return H.m(c)
z=a>c}else z=!0
if(z)throw H.e(P.ae(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.m(c)
z=b>c}else z=!0
if(z)throw H.e(P.ae(b,a,c,"end",f))
return b}return c}}},
fW:{"^":"aD;e,l:f>,a,b,c,d",
gby:function(){return"RangeError"},
gbx:function(){if(J.fi(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
N:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b6(b))
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
iK:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ac:function(a){return new P.iK(a)}}},
iH:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eC:function(a){return new P.iH(a)}}},
i9:{"^":"W;a",
i:function(a){return"Bad state: "+this.a}},
fz:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.bW(z))+"."},
n:{
b8:function(a){return new P.fz(a)}}},
hA:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
e7:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fC:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eH:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fU:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.br(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"V;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gT(this)
for(y=0;z.C();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.da("index"))
if(b<0)H.q(P.ae(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.C();){x=z.gM(z)
if(b===y)return x;++y}throw H.e(P.N(b,this,"index",null,y))},
i:function(a){return P.fX(this,"(",")")}},
ct:{"^":"a;$ti"},
c:{"^":"a;$ti",$isf:1},
"+List":0,
a1:{"^":"a;$ti"},
I:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gR:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
an:{"^":"a;"},
n:{"^":"a;",$isdX:1},
"+String":0,
bN:{"^":"a;au:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
ea:function(a,b,c){var z=J.bE(b)
if(!z.C())return a
if(c.length===0){do a+=H.i(z.gM(z))
while(z.C())}else{a+=H.i(z.gM(z))
for(;z.C();)a=a+c+H.i(z.gM(z))}return a}}}}],["","",,W,{"^":"",
co:function(a,b){var z=document.createElement("canvas")
return z},
fL:function(a){H.k(a,"$isa6")
return"wheel"},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eJ:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f0:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.j)return a
return z.cP(a,b)},
be:{"^":"Z;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
la:{"^":"o;0l:length=","%":"AccessibleNodeList"},
lb:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lc:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fr:{"^":"o;","%":";Blob"},
cn:{"^":"be;",
bp:function(a,b,c){if(c!=null)return a.getContext(b,P.kB(c,null))
return a.getContext(b)},
dM:function(a,b){return this.bp(a,b,null)},
$iscn:1,
"%":"HTMLCanvasElement"},
di:{"^":"o;",$isdi:1,"%":"CanvasRenderingContext2D"},
li:{"^":"M;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lk:{"^":"fB;0l:length=","%":"CSSPerspective"},
b9:{"^":"o;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ll:{"^":"jc;0l:length=",
dN:function(a,b){var z=a.getPropertyValue(this.eb(a,b))
return z==null?"":z},
eb:function(a,b){var z,y
z=$.$get$dq()
y=z[b]
if(typeof y==="string")return y
y=this.fd(a,b)
z[b]=y
return y},
fd:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
gbP:function(a){return a.bottom},
gag:function(a){return a.height},
gaC:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gaj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fA:{"^":"a;",
gaC:function(a){return this.dN(a,"left")}},
dr:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fB:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lm:{"^":"dr;0l:length=","%":"CSSTransformValue"},
ln:{"^":"dr;0l:length=","%":"CSSUnparsedValue"},
lo:{"^":"o;0l:length=","%":"DataTransferItemList"},
lp:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lq:{"^":"je;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a8,P.V]]},
$asu:function(){return[[P.a8,P.V]]},
$isf:1,
$asf:function(){return[[P.a8,P.V]]},
$isc:1,
$asc:function(){return[[P.a8,P.V]]},
$asy:function(){return[[P.a8,P.V]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"o;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaj(a))+" x "+H.i(this.gag(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaC(b)&&a.top===z.gaU(b)&&this.gaj(a)===z.gaj(b)&&this.gag(a)===z.gag(b)},
gR:function(a){return W.eJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF)},
gbP:function(a){return a.bottom},
gag:function(a){return a.height},
gaC:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gaj:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.V]},
"%":";DOMRectReadOnly"},
lr:{"^":"jg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.n]},
$asu:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"DOMStringList"},
ls:{"^":"o;0l:length=","%":"DOMTokenList"},
jb:{"^":"c2;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.k(z[b],"$isZ")},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var z=this.hF(this)
return new J.aj(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.Z]},
$asf:function(){return[W.Z]},
$asc:function(){return[W.Z]}},
Z:{"^":"M;",
gcQ:function(a){return new W.jb(a,a.children)},
gcR:function(a){return P.hM(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isZ:1,
"%":";Element"},
a5:{"^":"o;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"o;",
cJ:["dQ",function(a,b,c,d){H.l(c,{func:1,args:[W.a5]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.b2(H.l(c,{func:1,args:[W.a5]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eP|eQ|eS|eT"},
bb:{"^":"fr;",$isbb:1,"%":"File"},
lt:{"^":"jl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$isf:1,
$asf:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asy:function(){return[W.bb]},
"%":"FileList"},
lu:{"^":"a6;0l:length=","%":"FileWriter"},
lv:{"^":"be;0l:length=","%":"HTMLFormElement"},
bd:{"^":"o;",$isbd:1,"%":"Gamepad"},
lw:{"^":"o;0l:length=","%":"History"},
lx:{"^":"jy;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.M]},
$asu:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bY:{"^":"o;0cU:data=",$isbY:1,"%":"ImageData"},
dD:{"^":"be;",$isdD:1,"%":"HTMLImageElement"},
bg:{"^":"cL;",$isbg:1,"%":"KeyboardEvent"},
lB:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
lC:{"^":"o;0l:length=","%":"MediaList"},
lD:{"^":"a6;",
cJ:function(a,b,c,d){H.l(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.dQ(a,b,c,!1)},
"%":"MessagePort"},
lE:{"^":"jF;",
j:function(a,b){return P.aJ(a.get(H.P(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gaq:function(a){var z=H.b([],[P.n])
this.L(a,new W.hr(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hr:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lF:{"^":"jG;",
j:function(a,b){return P.aJ(a.get(H.P(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gaq:function(a){var z=H.b([],[P.n])
this.L(a,new W.hs(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hs:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"o;",$isbh:1,"%":"MimeType"},
lG:{"^":"jI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$asu:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"MimeTypeArray"},
am:{"^":"cL;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ja:{"^":"c2;a",
gT:function(a){var z=this.a.childNodes
return new W.dA(z,z.length,-1,[H.bC(C.J,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asu:function(){return[W.M]},
$asf:function(){return[W.M]},
$asc:function(){return[W.M]}},
M:{"^":"a6;",
i:function(a){var z=a.nodeValue
return z==null?this.dR(a):z},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hx:{"^":"jK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.M]},
$asu:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
bj:{"^":"o;0l:length=",$isbj:1,"%":"Plugin"},
lP:{"^":"jO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$asu:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"PluginArray"},
lR:{"^":"jU;",
j:function(a,b){return P.aJ(a.get(H.P(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gaq:function(a){var z=H.b([],[P.n])
this.L(a,new W.hV(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hV:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lT:{"^":"be;0l:length=","%":"HTMLSelectElement"},
bl:{"^":"a6;",$isbl:1,"%":"SourceBuffer"},
lU:{"^":"eQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bl]},
$asu:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asy:function(){return[W.bl]},
"%":"SourceBufferList"},
bm:{"^":"o;",$isbm:1,"%":"SpeechGrammar"},
lV:{"^":"jW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bm]},
$asu:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"SpeechGrammarList"},
bn:{"^":"o;0l:length=",$isbn:1,"%":"SpeechRecognitionResult"},
lX:{"^":"jZ;",
j:function(a,b){return a.getItem(H.P(b))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaq:function(a){var z=H.b([],[P.n])
this.L(a,new W.ib(z))
return z},
gl:function(a){return a.length},
$asaa:function(){return[P.n,P.n]},
$isa1:1,
$asa1:function(){return[P.n,P.n]},
"%":"Storage"},
ib:{"^":"t:32;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"o;",$isbo:1,"%":"CSSStyleSheet|StyleSheet"},
bp:{"^":"a6;",$isbp:1,"%":"TextTrack"},
bq:{"^":"a6;",$isbq:1,"%":"TextTrackCue|VTTCue"},
m0:{"^":"k2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asu:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asy:function(){return[W.bq]},
"%":"TextTrackCueList"},
m1:{"^":"eT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"TextTrackList"},
m2:{"^":"o;0l:length=","%":"TimeRanges"},
br:{"^":"o;",$isbr:1,"%":"Touch"},
aZ:{"^":"cL;",$isaZ:1,"%":"TouchEvent"},
m3:{"^":"k8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$asu:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"TouchList"},
m4:{"^":"o;0l:length=","%":"TrackDefaultList"},
cL:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m7:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
m8:{"^":"a6;0l:length=","%":"VideoTrackList"},
bu:{"^":"am;",
gfU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ac("deltaY is not supported"))},
gfT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ac("deltaX is not supported"))},
$isbu:1,
"%":"WheelEvent"},
j3:{"^":"a6;",
eY:function(a,b){return a.requestAnimationFrame(H.b2(H.l(b,{func:1,ret:-1,args:[P.V]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
md:{"^":"kf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.b9]},
$asu:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asy:function(){return[W.b9]},
"%":"CSSRuleList"},
me:{"^":"fH;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaC(b)&&a.top===z.gaU(b)&&a.width===z.gaj(b)&&a.height===z.gag(b)},
gR:function(a){return W.eJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gag:function(a){return a.height},
gaj:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mg:{"^":"kh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$isf:1,
$asf:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asy:function(){return[W.bd]},
"%":"GamepadList"},
mh:{"^":"kj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.M]},
$asu:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isc:1,
$asc:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mi:{"^":"kl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$asu:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asy:function(){return[W.bn]},
"%":"SpeechRecognitionResultList"},
mj:{"^":"kn;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"StyleSheetList"},
jh:{"^":"cG;a,b,c,$ti",
h7:function(a,b,c,d){var z=H.z(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
mf:{"^":"jh;a,b,c,$ti"},
ji:{"^":"e9;a,b,c,d,e,$ti",
fh:function(){var z=this.d
if(z!=null&&this.a<=0)J.fk(this.b,this.c,z,!1)},
n:{
U:function(a,b,c,d,e){var z=c==null?null:W.f0(new W.jj(c),W.a5)
z=new W.ji(0,a,b,z,!1,[e])
z.fh()
return z}}},
jj:{"^":"t:8;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
y:{"^":"a;$ti",
gT:function(a){return new W.dA(a,this.gl(a),-1,[H.bC(this,a,"y",0)])}},
dA:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fj(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
jc:{"^":"o+fA;"},
jd:{"^":"o+u;"},
je:{"^":"jd+y;"},
jf:{"^":"o+u;"},
jg:{"^":"jf+y;"},
jk:{"^":"o+u;"},
jl:{"^":"jk+y;"},
jx:{"^":"o+u;"},
jy:{"^":"jx+y;"},
jF:{"^":"o+aa;"},
jG:{"^":"o+aa;"},
jH:{"^":"o+u;"},
jI:{"^":"jH+y;"},
jJ:{"^":"o+u;"},
jK:{"^":"jJ+y;"},
jN:{"^":"o+u;"},
jO:{"^":"jN+y;"},
jU:{"^":"o+aa;"},
eP:{"^":"a6+u;"},
eQ:{"^":"eP+y;"},
jV:{"^":"o+u;"},
jW:{"^":"jV+y;"},
jZ:{"^":"o+aa;"},
k1:{"^":"o+u;"},
k2:{"^":"k1+y;"},
eS:{"^":"a6+u;"},
eT:{"^":"eS+y;"},
k7:{"^":"o+u;"},
k8:{"^":"k7+y;"},
ke:{"^":"o+u;"},
kf:{"^":"ke+y;"},
kg:{"^":"o+u;"},
kh:{"^":"kg+y;"},
ki:{"^":"o+u;"},
kj:{"^":"ki+y;"},
kk:{"^":"o+u;"},
kl:{"^":"kk+y;"},
km:{"^":"o+u;"},
kn:{"^":"km+y;"}}],["","",,P,{"^":"",
kE:function(a){var z,y
z=J.K(a)
if(!!z.$isbY){y=z.gcU(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eV(a.data,a.height,a.width)},
kD:function(a){if(a instanceof P.eV)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var z,y,x,w,v
if(a==null)return
z=P.h8(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.P(y[w])
z.V(0,v,a[v])}return z},
kB:function(a,b){var z={}
a.L(0,new P.kC(z))
return z},
dx:function(){var z=$.dw
if(z==null){z=J.cj(window.navigator.userAgent,"Opera",0)
$.dw=z}return z},
fF:function(){var z,y
z=$.dt
if(z!=null)return z
y=$.du
if(y==null){y=J.cj(window.navigator.userAgent,"Firefox",0)
$.du=y}if(y)z="-moz-"
else{y=$.dv
if(y==null){y=!P.dx()&&J.cj(window.navigator.userAgent,"Trident/",0)
$.dv=y}if(y)z="-ms-"
else z=P.dx()?"-o-":"-webkit-"}$.dt=z
return z},
eV:{"^":"a;cU:a>,b,c",$isbY:1},
kC:{"^":"t:15;a",
$2:function(a,b){this.a[a]=b}},
fR:{"^":"c2;a,b",
gbB:function(){var z,y,x
z=this.b
y=H.aC(z,"u",0)
x=W.Z
return new H.hg(new H.j1(z,H.l(new P.fS(),{func:1,ret:P.a9,args:[y]}),[y]),H.l(new P.fT(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b6(this.gbB().a)},
j:function(a,b){var z=this.gbB()
return z.b.$1(J.d9(z.a,b))},
gT:function(a){var z=P.hc(this.gbB(),!1,W.Z)
return new J.aj(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.Z]},
$asf:function(){return[W.Z]},
$asc:function(){return[W.Z]}},
fS:{"^":"t:29;",
$1:function(a){return!!J.K(H.k(a,"$isM")).$isZ}},
fT:{"^":"t:28;",
$1:function(a){return H.h(H.k(a,"$isM"),"$isZ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:{"^":"a;$ti",
gaR:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.D(z+this.c,H.z(this,0))},
gbP:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.D(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bB(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=this.a
y=J.ce(b)
x=y.gaC(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaU(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.z(this,0)
if(H.D(z+this.c,w)===y.gaR(b)){if(typeof x!=="number")return x.A()
z=H.D(x+this.d,w)===y.gbP(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.A()
v=H.z(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.D(x+this.d,v)
return P.jz(P.c9(P.c9(P.c9(P.c9(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"jP;aC:a>,aU:b>,aj:c>,ag:d>,$ti",n:{
hM:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ab()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.ab()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bI:{"^":"o;",$isbI:1,"%":"SVGLength"},lA:{"^":"jB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bI]},
$isf:1,
$asf:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asy:function(){return[P.bI]},
"%":"SVGLengthList"},bM:{"^":"o;",$isbM:1,"%":"SVGNumber"},lN:{"^":"jM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bM]},
$isf:1,
$asf:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asy:function(){return[P.bM]},
"%":"SVGNumberList"},lQ:{"^":"o;0l:length=","%":"SVGPointList"},lY:{"^":"k0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asu:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"SVGStringList"},lZ:{"^":"Z;",
gcQ:function(a){return new P.fR(a,new W.ja(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bO:{"^":"o;",$isbO:1,"%":"SVGTransform"},m5:{"^":"ka;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bO]},
$isf:1,
$asf:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asy:function(){return[P.bO]},
"%":"SVGTransformList"},jA:{"^":"o+u;"},jB:{"^":"jA+y;"},jL:{"^":"o+u;"},jM:{"^":"jL+y;"},k_:{"^":"o+u;"},k0:{"^":"k_+y;"},k9:{"^":"o+u;"},ka:{"^":"k9+y;"}}],["","",,P,{"^":"",ld:{"^":"o;0l:length=","%":"AudioBuffer"},le:{"^":"j9;",
j:function(a,b){return P.aJ(a.get(H.P(b)))},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gaq:function(a){var z=H.b([],[P.n])
this.L(a,new P.fp(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"AudioParamMap"},fp:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lf:{"^":"a6;0l:length=","%":"AudioTrackList"},fq:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lO:{"^":"fq;0l:length=","%":"OfflineAudioContext"},j9:{"^":"o+aa;"}}],["","",,P,{"^":"",cF:{"^":"o;",
hC:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kD(g))
return}if(!!z.$isdD)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.fn("Incorrect number or type of arguments"))},
hB:function(a,b,c,d,e,f,g){return this.hC(a,b,c,d,e,f,g,null,null,null)},
$iscF:1,
"%":"WebGLRenderingContext"},iF:{"^":"o;",$isiF:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lW:{"^":"jY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.N(b,a,null,null,null))
return P.aJ(a.item(b))},
D:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a1,,,]]},
$isf:1,
$asf:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asy:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jX:{"^":"o+u;"},jY:{"^":"jX+y;"}}],["","",,O,{"^":"",ar:{"^":"a;0a,0b,0c,0d,$ti",
bt:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cb:function(a,b,c){var z=H.aC(this,"ar",0)
H.l(b,{func:1,ret:P.a9,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.A,[P.f,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aW:function(a,b){return this.cb(a,null,b)},
cA:function(a){var z
H.w(a,"$isf",[H.aC(this,"ar",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cw:function(a,b){var z
H.w(b,"$isf",[H.aC(this,"ar",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.aj(z,z.length,0,[H.z(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
b4:function(a,b){var z,y
H.w(b,"$isf",[H.aC(this,"ar",0)],"$asf")
if(this.cA(b)){z=this.a
y=z.length
C.a.b4(z,b)
this.cw(y,b)}},
$isf:1,
n:{
cq:function(a){var z=new O.ar([a])
z.bt(a)
return z}}},cA:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
e_:function(a){var z=this.b
if(!(z==null))z.v(a)},
as:function(){return this.e_(null)},
gO:function(a){var z=this.a
if(z.length>0)return C.a.gc1(z)
else return V.bK()},
du:function(a){var z=this.a
if(a==null)C.a.h(z,V.bK())
else C.a.h(z,a)
this.as()},
c6:function(){var z=this.a
if(z.length>0){z.pop()
this.as()}}}}],["","",,E,{"^":"",ck:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0W:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cm:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
if(y.f==null)y.cm()}},
scc:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().F(0,this.gdq())
y=this.c
if(y!=null)y.gt().h(0,this.gdq())
x=new D.C("shape",z,this.c,this,[F.e5])
x.b=!0
this.a_(x)}},
sdA:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().F(0,this.gdr())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.gdr())
this.cm()
x=new D.C("technique",y,this.f,this,[O.cI])
x.b=!0
this.a_(x)}},
saO:function(a){var z,y
if(!J.L(this.r,a)){z=this.r
if(z!=null)z.gt().F(0,this.gdn())
if(a!=null)a.gt().h(0,this.gdn())
this.r=a
y=new D.C("mover",z,a,this,[U.a2])
y.b=!0
this.a_(y)}},
ar:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ai(0,b,this):null
if(!J.L(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.as])
w.b=!0
this.a_(w)}z=this.f
if(z!=null)z.ar(0,b)
for(z=this.y.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();)z.d.ar(0,b)},
aD:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gO(z))
else C.a.h(z.a,y.k(0,z.gO(z)))
z.as()
a.dv(this.f)
z=a.dy
x=(z&&C.a).gc1(z)
if(x!=null&&this.d!=null)x.hu(a,this)
for(z=this.y.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();)z.d.aD(a)
a.dt()
a.dx.c6()},
gt:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
a_:function(a){var z=this.z
if(!(z==null))z.v(a)},
U:function(){return this.a_(null)},
hg:[function(a){H.k(a,"$isv")
this.e=null
this.a_(a)},function(){return this.hg(null)},"iB","$1","$0","gdq",0,2,0],
hh:[function(a){this.a_(H.k(a,"$isv"))},function(){return this.hh(null)},"iC","$1","$0","gdr",0,2,0],
hf:[function(a){this.a_(H.k(a,"$isv"))},function(){return this.hf(null)},"iA","$1","$0","gdn",0,2,0],
hd:[function(a){this.a_(H.k(a,"$isv"))},function(){return this.hd(null)},"iy","$1","$0","gdm",0,2,0],
ix:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isf",[E.aE],"$asf")
for(z=b.length,y=this.gdm(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gW()==null){t=new D.aT()
t.d=0
u.sW(t)}t=u.gW()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.U()},"$2","ghc",8,0,9],
iz:[function(a,b){var z,y,x,w,v
H.w(b,"$isf",[E.aE],"$asf")
for(z=b.length,y=this.gdm(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gW()==null){v=new D.aT()
v.d=0
w.sW(v)}w.gW().F(0,y)}}this.U()},"$2","ghe",8,0,9],
$isaG:1,
n:{
dz:function(a,b,c,d,e,f){var z,y
z=new E.aE()
z.a=d
z.b=!0
y=O.cq(E.aE)
z.y=y
y.aW(z.ghc(),z.ghe())
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
z.scc(0,e)
z.sdA(f)
z.saO(c)
return z}}},hQ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dW:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ak(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cA()
y=[V.as]
z.a=H.b([],y)
z.gt().h(0,new E.hS(this))
this.cy=z
z=new O.cA()
z.a=H.b([],y)
z.gt().h(0,new E.hT(this))
this.db=z
z=new O.cA()
z.a=H.b([],y)
z.gt().h(0,new E.hU(this))
this.dx=z
z=H.b([],[O.cI])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.n,A.e4])},
ghq:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gO(z)
y=this.db
y=z.k(0,y.gO(y))
this.z=y
z=y}return z},
dv:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc1(z):a;(z&&C.a).h(z,y)},
dt:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hR:function(a,b){var z=new E.hQ(a,b)
z.dW(a,b)
return z}}},hS:{"^":"t:5;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.z=null
z.ch=null}},hT:{"^":"t:5;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hU:{"^":"t:5;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},ip:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0W:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
e1:[function(a){var z
H.k(a,"$isv")
z=this.x
if(!(z==null))z.v(a)
this.hw()},function(){return this.e1(null)},"e0","$1","$0","gci",0,2,0],
gh_:function(){var z,y,x
z=Date.now()
y=C.f.X(P.dy(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ak(z,!1)
return x/y},
cD:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.m(z)
x=C.h.aL(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.aL(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.ef(C.l,this.ghv())},
hw:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ir(this),{func:1,ret:-1,args:[P.V]})
C.t.ej(z)
C.t.eY(z,W.f0(y,P.V))}},"$0","ghv",0,0,3],
ht:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cD()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ak(w,!1)
x.y=P.dy(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.as()
w=x.db
C.a.sl(w.a,0)
w.as()
w=x.dx
C.a.sl(w.a,0)
w.as()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aD(this.e)}}catch(v){z=H.aR(v)
y=H.b4(v)
P.d8("Error: "+H.i(z))
P.d8("Stack: "+H.i(y))
throw H.e(z)}},
n:{
iq:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscn)return E.ee(a,!0,!0,!0,!1)
y=W.co(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcQ(a).h(0,y)
w=E.ee(y,!0,!0,!0,!1)
w.a=a
return w},
ee:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ip()
y=P.h9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bp(a,"webgl",y)
x=H.k(x==null?C.k.bp(a,"experimental-webgl",y):x,"$iscF")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hR(x,a)
w=new T.ii(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iL(a)
v=new X.h3()
v.c=new X.aF(!1,!1,!1)
v.d=P.ha(null,null,null,P.A)
w.b=v
v=new X.ht(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hd(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iu(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e9,P.a]])
w.z=v
u=document
t=W.am
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.l(w.geC(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.l(w.geF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.l(w.gez(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.l(w.geH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.l(w.geG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.l(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.l(w.geM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.l(w.geL(),s),!1,t))
p=w.z
o=W.bu;(p&&C.a).h(p,W.U(a,H.P(W.fL(a)),H.l(w.geN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.l(w.geD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.l(w.geE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.l(w.geO(),q),!1,r))
r=w.z
q=W.aZ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.l(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.l(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.l(w.geT(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ak(Date.now(),!1)
z.cy=0
z.cD()
return z}}},ir:{"^":"t:27;a",
$1:function(a){var z
H.l_(a)
z=this.a
if(z.ch){z.ch=!1
z.ht()}}}}],["","",,Z,{"^":"",eF:{"^":"a;a,b",n:{
cS:function(a,b,c){var z
H.w(c,"$isc",[P.A],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bx(c)),35044)
a.bindBuffer(b,null)
return new Z.eF(b,z)}}},de:{"^":"ck;a,b,c,d,e",
bN:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.r('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.i(z))
throw H.e(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},j0:{"^":"a;a",$islg:1},df:{"^":"a;a,0b,c,d",
aB:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bN:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bN(a)},
hL:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aD:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ism_:1},bZ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},aL:{"^":"a;a",
gcd:function(a){var z,y
z=this.a
y=(z&$.$get$ay().a)!==0?3:0
if((z&$.$get$ap().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=2
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=4
if((z&$.$get$aM().a)!==0)++y
return(z&$.$get$aw().a)!==0?y+4:y},
fJ:function(a){var z,y,x
z=$.$get$ay()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ap()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eE()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.n])
y=this.a
if((y&$.$get$ay().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ap().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aA().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
n:{
ah:function(a){return new Z.aL(a)}}}}],["","",,D,{"^":"",dj:{"^":"a;"},aT:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.v]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
F:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.aA(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
return y},
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.L(y,new D.fP(z))
return!0},
fW:function(){return this.v(null)},
hx:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
Z:function(a){return this.hx(a,!0,!1)},
n:{
H:function(){var z=new D.aT()
z.d=0
return z}}},fP:{"^":"t:38;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},c_:{"^":"v;c,d,a,0b,$ti"},c0:{"^":"v;c,d,a,0b,$ti"},C:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dg:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
n:{"^":"lh<"}},dI:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dJ:{"^":"v;c,a,0b"},h3:{"^":"a;0a,0b,0c,0d",
hn:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.v(y)},
hj:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.v(y)}},dN:{"^":"c4;x,y,c,d,e,a,0b"},hd:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
am:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ak(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.Q(y.a+x*w,y.b+v*u)
u=this.a.gaz()
s=new X.bL(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c5:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aQ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dO()
if(typeof z!=="number")return z.dK()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.am(a,b))
return!0},
aP:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.am(a,b))
return!0},
ho:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cB(new V.S(v*u,t*s),y,x,new P.ak(w,!1),this)
w.b=!0
z.v(w)
return!0},
eJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ak(Date.now(),!1)
y=this.f
x=new X.dN(c,a,this.a.gaz(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.Q(0,0)}},aF:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aF))return!1
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
return z+(this.c?"Shift+":"")}},bL:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},ht:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bz:function(a,b,c){var z,y,x
z=new P.ak(Date.now(),!1)
y=this.a.gaz()
x=new X.bL(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c5:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bz(a,b,!0))
return!0},
aQ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dO()
if(typeof z!=="number")return z.dK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bz(a,b,!0))
return!0},
aP:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bz(a,b,!1))
return!0},
hp:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cB(new V.S(w*v,u*t),y,b,new P.ak(x,!1),this)
x.b=!0
z.v(x)
return!0}},cB:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"v;"},ej:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},iu:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
am:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.Q],"$asc")
z=new P.ak(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gaz()
w=new X.ej(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hm:function(a){var z
H.w(a,"$isc",[V.Q],"$asc")
z=this.b
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
hk:function(a){var z
H.w(a,"$isc",[V.Q],"$asc")
z=this.c
if(z==null)return!1
z.v(this.am(a,!0))
return!0},
hl:function(a){var z
H.w(a,"$isc",[V.Q],"$asc")
z=this.d
if(z==null)return!1
z.v(this.am(a,!1))
return!0}},iL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaz:function(){var z=this.a
return V.e2(0,0,(z&&C.k).gcR(z).c,C.k.gcR(z).d)},
ct:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dI(z,new X.aF(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
bL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
an:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.Q(y-w,x-v)},
aI:function(a){return new V.S(a.movementX,a.movementY)},
bF:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.h.aa(u.pageX)
C.h.aa(u.pageY)
s=z.left
C.h.aa(u.pageX)
C.a.h(y,new V.Q(t-s,C.h.aa(u.pageY)-z.top))}return y},
ak:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dg(z,new X.aF(y,a.altKey,a.shiftKey))},
bC:function(a){var z,y,x,w,v,u
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
i7:[function(a){this.f=!0},"$1","geF",4,0,8],
i1:[function(a){this.f=!1},"$1","gez",4,0,8],
i4:[function(a){H.k(a,"$isam")
if(this.f&&this.bC(a))a.preventDefault()},"$1","geC",4,0,4],
i9:[function(a){var z
H.k(a,"$isbg")
if(!this.f)return
z=this.ct(a)
if(this.b.hn(z))a.preventDefault()},"$1","geH",4,0,22],
i8:[function(a){var z
H.k(a,"$isbg")
if(!this.f)return
z=this.ct(a)
if(this.b.hj(z))a.preventDefault()},"$1","geG",4,0,22],
ib:[function(a){var z,y,x,w
H.k(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.ak(a)
x=this.aI(a)
if(this.d.c5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ak(a)
w=this.an(a)
if(this.c.c5(y,w))a.preventDefault()},"$1","geK",4,0,4],
ie:[function(a){var z,y,x
H.k(a,"$isam")
this.ay(a)
z=this.ak(a)
if(this.x){y=this.aI(a)
if(this.d.aQ(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aQ(z,x))a.preventDefault()},"$1","geM",4,0,4],
i6:[function(a){var z,y,x
H.k(a,"$isam")
if(!this.bC(a)){this.ay(a)
z=this.ak(a)
if(this.x){y=this.aI(a)
if(this.d.aQ(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aQ(z,x))a.preventDefault()}},"$1","geE",4,0,4],
ic:[function(a){var z,y,x
H.k(a,"$isam")
this.ay(a)
z=this.ak(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","geL",4,0,4],
i5:[function(a){var z,y,x
H.k(a,"$isam")
if(!this.bC(a)){this.ay(a)
z=this.ak(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aP(z,x))a.preventDefault()}},"$1","geD",4,0,4],
ig:[function(a){var z,y
H.k(a,"$isbu")
this.ay(a)
z=new V.S((a&&C.r).gfT(a),C.r.gfU(a)).w(0,180)
if(this.x){if(this.d.ho(z))a.preventDefault()
return}if(this.r)return
y=this.an(a)
if(this.c.hp(z,y))a.preventDefault()},"$1","geN",4,0,24],
ih:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ak(this.y)
v=this.an(this.y)
this.d.eJ(w,v,x)}},"$1","geO",4,0,8],
io:[function(a){var z
H.k(a,"$isaZ")
this.a.focus()
this.f=!0
this.bL(a)
z=this.bF(a)
if(this.e.hm(z))a.preventDefault()},"$1","geU",4,0,11],
il:[function(a){var z
H.k(a,"$isaZ")
this.bL(a)
z=this.bF(a)
if(this.e.hk(z))a.preventDefault()},"$1","geS",4,0,11],
im:[function(a){var z
H.k(a,"$isaZ")
this.bL(a)
z=this.bF(a)
if(this.e.hl(z))a.preventDefault()},"$1","geT",4,0,11]}}],["","",,D,{"^":"",fG:{"^":"a;",$isT:1,$isaG:1},T:{"^":"a;",$isaG:1},h4:{"^":"ar;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
a4:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eI:[function(a){var z
H.k(a,"$isv")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eI(null)},"ia","$1","$0","gcz",0,2,0],
ii:[function(a){var z,y,x
H.w(a,"$isf",[D.T],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ef(x))return!1}return!0},"$1","geP",4,0,26],
hZ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.T
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcz(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isT")
if(t instanceof D.c3)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.aT()
s.d=0
t.r=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.c_(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gew",8,0,21],
ik:[function(a,b){var z,y,x,w,v,u
z=D.T
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcz(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.k(b[w],"$isT")
if(v instanceof D.c3)C.a.F(this.f,v)
u=v.r
if(u==null){u=new D.aT()
u.d=0
v.r=u}u.F(0,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","geR",8,0,21],
ef:function(a){var z=C.a.aA(this.f,a)
return z},
$asf:function(){return[D.T]},
$asar:function(){return[D.T]}},c3:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
a4:[function(a){var z
H.k(a,"$isv")
z=this.r
if(!(z==null))z.v(a)},function(){return this.a4(null)},"hO","$1","$0","ge2",0,2,0],
$isT:1,
$isaG:1},i8:{"^":"a;",$isT:1,$isaG:1},il:{"^":"a;",$isT:1,$isaG:1},im:{"^":"a;",$isT:1,$isaG:1},io:{"^":"a;",$isT:1,$isaG:1}}],["","",,V,{"^":"",
lj:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.m(a)
return Math.abs(b-a)<=1e-9},"$2","hq",8,0,25],
ci:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.aF(a-b,z)
return(a<0?a+z:a)+b},
E:function(a,b,c){if(a==null)return C.i.a2("null",c)
return C.i.a2(C.h.dD($.j.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.p],"$asc")
z=H.b([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.E(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.V(z,u,C.i.a2(z[u],x))}return z},
d7:function(a,b){return C.h.hE(Math.pow(b,C.y.aL(Math.log(H.kA(a))/Math.log(b))))},
a0:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
bU:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
dR:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dR))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
z=b.e
if(!$.j.$2(z,this.e))return!1
z=b.f
if(!$.j.$2(z,this.f))return!1
z=b.r
if(!$.j.$2(z,this.r))return!1
z=b.x
if(!$.j.$2(z,this.x))return!1
z=b.y
if(!$.j.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.p]
y=V.b3(H.b([this.a,this.d,this.r],z),3,0)
x=V.b3(H.b([this.b,this.e,this.x],z),3,0)
w=V.b3(H.b([this.c,this.f,this.y],z),3,0)
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
as:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
dh:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.m(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.m(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.m(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.m(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.m(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.m(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.j.$2(a2,0))return V.bK()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.m(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.m(s)
r=a7.b
if(typeof r!=="number")return H.m(r)
q=a7.f
if(typeof q!=="number")return H.m(q)
p=a7.z
if(typeof p!=="number")return H.m(p)
o=a7.cy
if(typeof o!=="number")return H.m(o)
n=a7.c
if(typeof n!=="number")return H.m(n)
m=a7.r
if(typeof m!=="number")return H.m(m)
l=a7.Q
if(typeof l!=="number")return H.m(l)
k=a7.db
if(typeof k!=="number")return H.m(k)
j=a7.d
if(typeof j!=="number")return H.m(j)
i=a7.x
if(typeof i!=="number")return H.m(i)
h=a7.ch
if(typeof h!=="number")return H.m(h)
g=a7.dx
if(typeof g!=="number")return H.m(g)
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
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dE:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.ga6(a)
if(typeof z!=="number")return z.k()
y=C.h.k(z,y)
z=this.b
x=a.ga7(a)
if(typeof z!=="number")return z.k()
x=C.h.k(z,x)
z=this.c
w=a.ga8()
if(typeof z!=="number")return z.k()
w=C.h.k(z,w)
z=this.e
v=a.ga6(a)
if(typeof z!=="number")return z.k()
v=C.h.k(z,v)
z=this.f
u=a.ga7(a)
if(typeof z!=="number")return z.k()
u=C.h.k(z,u)
z=this.r
t=a.ga8()
if(typeof z!=="number")return z.k()
t=C.h.k(z,t)
z=this.y
s=a.ga6(a)
if(typeof z!=="number")return z.k()
s=C.h.k(z,s)
z=this.z
r=a.ga7(a)
if(typeof z!=="number")return z.k()
r=C.h.k(z,r)
z=this.Q
q=a.ga8()
if(typeof z!=="number")return z.k()
return new V.J(y+x+w,v+u+t,s+r+C.h.k(z,q))},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.m(u)
t=this.d
if(typeof t!=="number")return H.m(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.m(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.m(l)
return new V.ab(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
z=b.e
if(!$.j.$2(z,this.e))return!1
z=b.f
if(!$.j.$2(z,this.f))return!1
z=b.r
if(!$.j.$2(z,this.r))return!1
z=b.x
if(!$.j.$2(z,this.x))return!1
z=b.y
if(!$.j.$2(z,this.y))return!1
z=b.z
if(!$.j.$2(z,this.z))return!1
z=b.Q
if(!$.j.$2(z,this.Q))return!1
z=b.ch
if(!$.j.$2(z,this.ch))return!1
z=b.cx
if(!$.j.$2(z,this.cx))return!1
z=b.cy
if(!$.j.$2(z,this.cy))return!1
z=b.db
if(!$.j.$2(z,this.db))return!1
z=b.dx
if(!$.j.$2(z,this.dx))return!1
return!0},
i:function(a){return this.H()},
dg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.b3(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
H:function(){return this.dg("",3,0)},
u:function(a){return this.dg(a,3,0)},
n:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bK:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dU:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dS:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.at(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
dT:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.at(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
Q:{"^":"a;a,b",
J:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
ab:{"^":"a;a,b,c",
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.m(w)
return new V.ab(this.a+z,this.b+y,x+w)},
J:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.J()
if(typeof w!=="number")return H.m(w)
return new V.ab(this.a-z,this.b-y,x-w)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
cE:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cE))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
e1:{"^":"a;a,b,c,d",
gah:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"},
n:{
e2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)}}},
S:{"^":"a;a,b",
h5:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,19],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.S(z*b,y*b)},
w:function(a,b){var z,y
if($.j.$2(b,0))return new V.S(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.S(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
h5:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,19],
E:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
return this.a*a.a+this.b*a.b+z*y},
c2:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.J()
if(typeof x!=="number")return H.m(x)
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
aJ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.m(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.m(w)
return new V.J(this.a+z,this.b+y,x+w)},
K:function(a){var z=this.c
if(typeof z!=="number")return z.K()
return new V.J(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.J(this.a*b,this.b*b,z*b)},
w:function(a,b){var z
if($.j.$2(b,0))return new V.J(0,0,0)
z=this.c
if(typeof z!=="number")return z.w()
return new V.J(this.a/b,this.b/b,z/b)},
di:function(){if(!$.j.$2(0,this.a))return!1
if(!$.j.$2(0,this.b))return!1
if(!$.j.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fy:{"^":"dj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bu:function(a){var z=V.ci(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
G:function(a){var z=this.y
if(!(z==null))z.v(a)},
sdF:function(a,b){},
sdj:function(a){var z,y
z=this.b
if(!$.j.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bu(z)}z=new D.C("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.G(z)}},
sdl:function(a){var z,y
z=this.c
if(!$.j.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bu(z)}z=new D.C("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.G(z)}},
sY:function(a,b){var z,y
b=this.bu(b)
z=this.d
if(!$.j.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.p])
z.b=!0
this.G(z)}},
sdk:function(a){var z,y,x
z=this.e
if(!$.j.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.G(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.j.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.p])
z.b=!0
this.G(z)}},
scT:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.j.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.p])
z.b=!0
this.G(z)}},
ar:function(a,b){var z,y,x,w
z=this.f
if($.j.$2(z,0)){z=this.r
z=!$.j.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.j.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
n:{
dl:function(){var z=new U.fy()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dm:{"^":"a2;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
ai:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")},
n:{
dn:function(a){var z=new U.dm()
z.a=a
return z}}},dB:{"^":"ar;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
G:[function(a){var z
H.k(a,"$isv")
z=this.e
if(!(z==null))z.v(a)},function(){return this.G(null)},"aw","$1","$0","gb0",0,2,0],
hP:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a2
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gb0(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.G(z)},"$2","ge3",8,0,18],
ij:[function(a,b){var z,y,x,w,v
z=U.a2
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gb0(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gt().F(0,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.G(z)},"$2","geQ",8,0,18],
ai:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ab()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aj(z,z.length,0,[H.z(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.ai(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bK():x
z=this.e
if(!(z==null))z.Z(0)}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.L(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.a2]},
$asar:function(){return[U.a2]},
$isa2:1,
n:{
dC:function(a){var z=new U.dB()
z.bt(U.a2)
z.aW(z.ge3(),z.geQ())
z.b4(0,a)
z.e=null
z.f=V.bK()
z.r=0
return z}}},a2:{"^":"dj;"},e3:{"^":"a2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
G:function(a){var z=this.y
if(!(z==null))z.v(a)},
sdI:function(a){var z,y
a=V.ci(a,0,6.283185307179586)
z=this.a
if(!$.j.$2(z,a)){y=this.a
this.a=a
z=new D.C("yaw",y,a,this,[P.p])
z.b=!0
this.G(z)}},
sds:function(a,b){var z,y
b=V.ci(b,0,6.283185307179586)
z=this.b
if(!$.j.$2(z,b)){y=this.b
this.b=b
z=new D.C("pitch",y,b,this,[P.p])
z.b=!0
this.G(z)}},
sdw:function(a){var z,y
a=V.ci(a,0,6.283185307179586)
z=this.c
if(!$.j.$2(z,a)){y=this.c
this.c=a
z=new D.C("roll",y,a,this,[P.p])
z.b=!0
this.G(z)}},
ai:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sdI(this.a+this.d*b.y)
this.sds(0,this.b+this.e*b.y)
this.sdw(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.at(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.dT(this.b)).k(0,V.dS(this.a))
z=this.y
if(!(z==null))z.Z(0)}return this.x},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e3))return!1
z=this.a
y=b.a
if(!$.j.$2(z,y))return!1
z=this.b
y=b.b
if(!$.j.$2(z,y))return!1
z=this.c
y=b.c
if(!$.j.$2(z,y))return!1
z=this.d
y=b.d
if(!$.j.$2(z,y))return!1
z=this.e
y=b.e
if(!$.j.$2(z,y))return!1
z=this.f
y=b.f
if(!$.j.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"], ["+V.E(this.d,3,0)+", "+V.E(this.e,3,0)+", "+V.E(this.f,3,0)+"]"}},iM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
G:[function(a){var z
H.k(a,"$isv")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.G(null)},"aw","$1","$0","gb0",0,2,0],
bM:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.H()
z.b=y
z=y}else z=y
z.h(0,this.ger())
z=this.a.c
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.ges())
z=this.a.c
y=z.c
if(y==null){y=D.H()
z.c=y
z=y}else z=y
z.h(0,this.geu())
z=this.a.d
y=z.f
if(y==null){y=D.H()
z.f=y
z=y}else z=y
z.h(0,this.geo())
z=this.a.d
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.gep())
z=this.a.e
y=z.b
if(y==null){y=D.H()
z.b=y
z=y}else z=y
z.h(0,this.gfg())
z=this.a.e
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.gff())
z=this.a.e
y=z.c
if(y==null){y=D.H()
z.c=y
z=y}else z=y
z.h(0,this.gfe())
return!0},
ad:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.S(z,y)},
hV:[function(a){a=H.h(H.k(a,"$isv"),"$isbL")
if(!J.L(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ger",4,0,2],
hW:[function(a){var z,y,x,w,v,u,t
a=H.h(H.k(a,"$isv"),"$isbL")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.S(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ad(new V.S(y.a,y.b).k(0,2).w(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ad(new V.S(x.a,x.b).k(0,2).w(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sY(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.J(0,a.z)
this.dx=this.ad(new V.S(y.a,y.b).k(0,2).w(0,z.gah()))}this.aw()},"$1","ges",4,0,2],
hX:[function(a){var z,y,x
H.k(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sP(-y*10*z)
this.aw()}},"$1","geu",4,0,2],
hT:[function(a){if(H.h(H.k(a,"$isv"),"$isdN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geo",4,0,2],
hU:[function(a){var z,y,x,w,v,u,t
a=H.h(H.k(a,"$isv"),"$isbL")
if(!J.L(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ad(new V.S(x.a,x.b).k(0,2).w(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sY(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.J(0,a.z)
this.dx=this.ad(new V.S(y.a,y.b).k(0,2).w(0,z.gah()))
this.aw()},"$1","gep",4,0,2],
is:[function(a){H.k(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfg",4,0,2],
ir:[function(a){var z,y,x,w,v,u,t
a=H.h(H.k(a,"$isv"),"$isej")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.S(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ad(new V.S(y.a,y.b).k(0,2).w(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ad(new V.S(x.a,x.b).k(0,2).w(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sY(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.J(0,a.z)
this.dx=this.ad(new V.S(y.a,y.b).k(0,2).w(0,z.gah()))}this.aw()},"$1","gff",4,0,2],
iq:[function(a){var z,y,x
H.k(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sP(-y*10*z)
this.aw()}},"$1","gfe",4,0,2],
ai:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.ab()
if(z<y){this.dy=y
x=b.y
this.c.ar(0,x)
this.b.ar(0,x)
this.fr=V.dS(this.b.d).k(0,V.dT(this.c.d))}return this.fr},
$isa2:1},iN:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
G:function(a){var z=this.r
if(!(z==null))z.v(a)},
bM:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=this.gev()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
hY:[function(a){var z,y,x,w
H.k(a,"$isv")
if(!J.L(this.b,this.a.b.c))return
H.h(a,"$iscB")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.p])
z.b=!0
this.G(z)}},"$1","gev",4,0,2],
ai:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.at(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa2:1}}],["","",,M,{"^":"",fN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aG:[function(a){var z
H.k(a,"$isv")
z=this.x
if(!(z==null))z.v(a)},function(){return this.aG(null)},"hQ","$1","$0","gat",0,2,0],
i2:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aE
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gW()==null){s=new D.aT()
s.d=0
t.sW(s)}s=t.gW()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","geA",8,0,9],
i3:[function(a,b){var z,y,x,w,v,u
z=E.aE
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gat(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gW()==null){u=new D.aT()
u.d=0
v.sW(u)}v.gW().F(0,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","geB",8,0,9],
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dv(this.c)
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
if(typeof x!=="number")return H.m(x)
u=C.h.aa(v.a*x)
if(typeof w!=="number")return H.m(w)
t=C.h.aa(v.b*w)
s=C.h.aa(v.c*x)
a.c=s
v=C.h.aa(v.d*w)
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
n=V.at(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.du(n)
y=$.dY
if(y==null){y=new V.J(0,0,-1)
m=y.w(0,Math.sqrt(y.E(y)))
y=new V.J(0,1,0).aJ(m)
l=y.w(0,Math.sqrt(y.E(y)))
k=m.aJ(l)
j=new V.J(0,0,0)
y=V.at(l.a,k.a,m.a,l.K(0).E(j),l.b,k.b,m.b,k.K(0).E(j),l.c,k.c,m.c,m.K(0).E(j),0,0,0,1)
$.dY=y
i=y}else i=y
y=z.b
if(y!=null){h=y.ai(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.du(i)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();)z.d.ar(0,a)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();)z.d.aD(a)
this.a.toString
a.cy.c6()
a.db.c6()
this.b.toString
a.dt()},
$islS:1}}],["","",,A,{"^":"",db:{"^":"a;a,b,c"},fo:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fX:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hi:{"^":"e4;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0af,0a9,0b7,0cV,0b8,0b9,0cW,0cX,0ba,0bb,0cY,0cZ,0bc,0bd,0d_,0d0,0be,0d1,0d2,0bf,0d3,0d4,0bg,0bh,0bi,0d5,0d6,0bj,0bk,0d7,0d8,0bl,0d9,0bV,0da,0bW,0dc,0bX,0dd,0bY,0de,0bZ,0df,0c_,a,b,0c,0d,0e,0f,0r,0x,0y",
dV:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bN("")
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
a2.fj(z)
a2.fq(z)
a2.fk(z)
a2.fB(z)
a2.fC(z)
a2.ft(z)
a2.fG(z)
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
z=new P.bN("")
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
x.fn(z)
x.fi(z)
x.fl(z)
x.fo(z)
x.fz(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.fv(z)
x.fw(z)}x.fs(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.c){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.d){r+="uniform samplerCube alphaTxt;\n"
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
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.n])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fm(z)
x.fu(z)
x.fA(z)
x.fD(z)
x.fE(z)
x.fF(z)
x.fp(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.b)z.a+="   setDiffuseColor();\n"
if(x.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.b)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.b)C.a.h(o,"emission()")
if(x.r!==C.b)C.a.h(o,"reflect(refl)")
if(x.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.B(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cu(s,35633)
this.f=this.cu(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.f4(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.q(P.r("Failed to link shader: "+H.i(m)))}this.f9()
this.fb()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.h(this.y.m(0,"invViewMat"),"$isaH")
if(y)this.dy=H.h(this.y.m(0,"objMat"),"$isaH")
if(w)this.fr=H.h(this.y.m(0,"viewObjMat"),"$isaH")
this.fy=H.h(this.y.m(0,"projViewObjMat"),"$isaH")
if(a2.x2)this.k1=H.h(this.y.m(0,"txt2DMat"),"$iscN")
if(a2.y1)this.k2=H.h(this.y.m(0,"txtCubeMat"),"$isaH")
if(a2.y2)this.k3=H.h(this.y.m(0,"colorMat"),"$isaH")
this.r1=H.b([],[A.aH])
y=a2.af
if(y>0){this.k4=H.k(this.y.m(0,"bendMatCount"),"$isG")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isaH"))}}y=a2.a
if(y!==C.b){this.r2=H.h(this.y.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.h(this.y.m(0,"emissionTxt"),"$isaf")
this.x1=H.h(this.y.m(0,"nullEmissionTxt"),"$isG")
break
case C.d:this.ry=H.h(this.y.m(0,"emissionTxt"),"$isag")
this.x1=H.h(this.y.m(0,"nullEmissionTxt"),"$isG")
break}}y=a2.b
if(y!==C.b){this.x2=H.h(this.y.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.h(this.y.m(0,"ambientTxt"),"$isaf")
this.af=H.h(this.y.m(0,"nullAmbientTxt"),"$isG")
break
case C.d:this.y2=H.h(this.y.m(0,"ambientTxt"),"$isag")
this.af=H.h(this.y.m(0,"nullAmbientTxt"),"$isG")
break}}y=a2.c
if(y!==C.b){this.a9=H.h(this.y.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.b7=H.h(this.y.m(0,"diffuseTxt"),"$isaf")
this.b8=H.h(this.y.m(0,"nullDiffuseTxt"),"$isG")
break
case C.d:this.cV=H.h(this.y.m(0,"diffuseTxt"),"$isag")
this.b8=H.h(this.y.m(0,"nullDiffuseTxt"),"$isG")
break}}y=a2.d
if(y!==C.b){this.b9=H.h(this.y.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.cW=H.h(this.y.m(0,"invDiffuseTxt"),"$isaf")
this.ba=H.h(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break
case C.d:this.cX=H.h(this.y.m(0,"invDiffuseTxt"),"$isag")
this.ba=H.h(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a2.e
if(y!==C.b){this.bd=H.h(this.y.m(0,"shininess"),"$isR")
this.bb=H.h(this.y.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.cY=H.h(this.y.m(0,"specularTxt"),"$isaf")
this.bc=H.h(this.y.m(0,"nullSpecularTxt"),"$isG")
break
case C.d:this.cZ=H.h(this.y.m(0,"specularTxt"),"$isag")
this.bc=H.h(this.y.m(0,"nullSpecularTxt"),"$isG")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.d_=H.h(this.y.m(0,"bumpTxt"),"$isaf")
this.be=H.h(this.y.m(0,"nullBumpTxt"),"$isG")
break
case C.d:this.d0=H.h(this.y.m(0,"bumpTxt"),"$isag")
this.be=H.h(this.y.m(0,"nullBumpTxt"),"$isG")
break}if(a2.dy){this.d1=H.h(this.y.m(0,"envSampler"),"$isag")
this.d2=H.h(this.y.m(0,"nullEnvTxt"),"$isG")
y=a2.r
if(y!==C.b){this.bf=H.h(this.y.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.d3=H.h(this.y.m(0,"reflectTxt"),"$isaf")
this.bg=H.h(this.y.m(0,"nullReflectTxt"),"$isG")
break
case C.d:this.d4=H.h(this.y.m(0,"reflectTxt"),"$isag")
this.bg=H.h(this.y.m(0,"nullReflectTxt"),"$isG")
break}}y=a2.x
if(y!==C.b){this.bh=H.h(this.y.m(0,"refraction"),"$isR")
this.bi=H.h(this.y.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.c:this.d5=H.h(this.y.m(0,"refractTxt"),"$isaf")
this.bj=H.h(this.y.m(0,"nullRefractTxt"),"$isG")
break
case C.d:this.d6=H.h(this.y.m(0,"refractTxt"),"$isag")
this.bj=H.h(this.y.m(0,"nullRefractTxt"),"$isG")
break}}}y=a2.y
if(y!==C.b){this.bk=H.h(this.y.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.c:this.d7=H.h(this.y.m(0,"alphaTxt"),"$isaf")
this.bl=H.h(this.y.m(0,"nullAlphaTxt"),"$isG")
break
case C.d:this.d8=H.h(this.y.m(0,"alphaTxt"),"$isag")
this.bl=H.h(this.y.m(0,"nullAlphaTxt"),"$isG")
break}}this.bV=H.b([],[A.ew])
this.bW=H.b([],[A.ex])
this.bX=H.b([],[A.ey])
this.bY=H.b([],[A.ez])
this.bZ=H.b([],[A.eA])
this.c_=H.b([],[A.eB])
if(a2.k2){y=a2.z
if(y>0){this.d9=H.k(this.y.m(0,"dirLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.bV;(x&&C.a).h(x,new A.ew(l,k,j))}}y=a2.Q
if(y>0){this.da=H.k(this.y.m(0,"pntLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isF")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isR")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isR")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.bW;(x&&C.a).h(x,new A.ex(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dc=H.k(this.y.m(0,"spotLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isF")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isF")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isR")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isR")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isR")
x=this.bX;(x&&C.a).h(x,new A.ey(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dd=H.k(this.y.m(0,"txtDirLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isF")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isF")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isF")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isG")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isaf")
x=this.bY;(x&&C.a).h(x,new A.ez(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.de=H.k(this.y.m(0,"txtPntLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$iscN")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isF")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isG")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isR")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isag")
x=this.bZ;(x&&C.a).h(x,new A.eA(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.df=H.k(this.y.m(0,"txtSpotLightCount"),"$isG")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isF")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isF")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isF")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isF")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isF")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isG")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isF")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isR")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isR")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isR")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isR")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isaf")
x=this.c_;(x&&C.a).h(x,new A.eB(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dP(c)
b.a.uniform1i(b.d,0)}},
a0:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hj:function(a,b){var z,y
z=a.a9
y=new A.hi(b,z)
y.dY(b,z)
y.dV(a,b)
return y}}},hn:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,af,a9,b7",
fj:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.af+"];\n"
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
fq:function(a){var z
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
fk:function(a){var z
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
fB:function(a){var z,y
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
fC:function(a){var z,y
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
ft:function(a){var z
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
fG:function(a){var z
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
al:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.ce(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fn:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.al(a,z,"emission")
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
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fi:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.al(a,z,"ambient")
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
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fl:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"diffuse")
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
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fo:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"invDiffuse")
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
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fz:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.al(a,z,"specular")
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
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fs:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.c:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.d:z+="uniform samplerCube bumpTxt;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fv:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.al(a,z,"reflect")
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
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fw:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.al(a,z,"refract")
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
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fm:function(a){var z,y
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
fu:function(a){var z,y
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
fA:function(a){var z,y
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
fD:function(a){var z,y,x
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
fE:function(a){var z,y,x
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
fF:function(a){var z,y,x
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
fp:function(a){var z
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
i:function(a){return this.a9}},ew:{"^":"a;a,b,c"},ez:{"^":"a;a,b,c,d,e,f,r,x"},ex:{"^":"a;a,b,c,d,e,f,r"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e4:{"^":"ck;",
dY:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f4(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.r("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
f9:function(){var z,y,x,w,v,u
z=H.b([],[A.db])
y=this.a
x=H.X(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.db(y,v.name,u))}this.x=new A.fo(z)},
fb:function(){var z,y,x,w,v,u
z=H.b([],[A.a3])
y=this.a
x=H.X(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fS(v.type,v.size,v.name,u))}this.y=new A.iE(z)},
av:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.G(z,y,b,c)
else return A.cM(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.cM(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ag(z,y,b,c)
else return A.cM(z,y,b,a,c)},
b3:function(a,b){return new P.eH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fS:function(a,b,c,d){switch(a){case 5120:return this.av(b,c,d)
case 5121:return this.av(b,c,d)
case 5122:return this.av(b,c,d)
case 5123:return this.av(b,c,d)
case 5124:return this.av(b,c,d)
case 5125:return this.av(b,c,d)
case 5126:return new A.R(this.a,this.r,c,d)
case 35664:return new A.iz(this.a,this.r,c,d)
case 35665:return new A.F(this.a,this.r,c,d)
case 35666:return new A.iC(this.a,this.r,c,d)
case 35667:return new A.iA(this.a,this.r,c,d)
case 35668:return new A.iB(this.a,this.r,c,d)
case 35669:return new A.iD(this.a,this.r,c,d)
case 35674:return new A.iG(this.a,this.r,c,d)
case 35675:return new A.cN(this.a,this.r,c,d)
case 35676:return new A.aH(this.a,this.r,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.e(this.b3("BOOL",c))
case 35671:throw H.e(this.b3("BOOL_VEC2",c))
case 35672:throw H.e(this.b3("BOOL_VEC3",c))
case 35673:throw H.e(this.b3("BOOL_VEC4",c))
default:throw H.e(P.r("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a3:{"^":"a;"},iE:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.H()},
fZ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
H:function(){return this.fZ("\n")}},G:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},iA:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iB:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},iD:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},iy:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
cM:function(a,b,c,d,e){var z=new A.iy(a,b,c,e)
z.f=d
z.e=P.hb(d,0,!1,P.A)
return z}}},R:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},iz:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},F:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},iC:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iG:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cN:{"^":"a3;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bx(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aH:{"^":"a3;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bx(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},af:{"^":"a3;a,b,c,d",
dP:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ag:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
ca:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.hN()
return(y>0?z+4:z)*2},
bw:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ao,P.p,P.p]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.J(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.J(t+h,s+f,r+g)
z.b=q
p=new V.J(t-h,s-f,r-g)
z.c=p
o=new V.J(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ca(y)
k=F.ca(z.b)
j=F.fg(d,e,new F.ko(z,F.ca(z.c),F.ca(z.d),k,l,c),b)
if(j!=null)a.c4(j)},
l5:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.l6()
z=new F.l7(z,c)
y=F.e6()
F.bw(y,null,z,d,a,1,0,0,1)
F.bw(y,null,z,d,a,0,1,0,3)
F.bw(y,null,z,d,a,0,0,1,2)
F.bw(y,null,z,d,a,-1,0,0,0)
F.bw(y,null,z,d,a,0,-1,0,0)
F.bw(y,null,z,d,a,0,0,-1,3)
y.ae()
y.ha(new F.iV(),new F.hy())
return y},
kK:function(a,b,c){var z={}
z.a=b
z.a=new F.kL()
return F.fg(c,a,new F.kM(z),null)},
fg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ao,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.e6()
y=H.b([],[F.ao])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cP(null,null,new V.bU(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bU(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cP(null,null,new V.bU(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bU(d))}}z.d.fH(a+1,b+1,y)
return z},
ko:{"^":"t:10;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c2(z.b,b).c2(z.d.c2(z.c,b),c)
a.sY(0,new V.ab(y.a,y.b,y.c))
a.sdB(y.w(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.scO(new V.cE(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
this.f.$3(a,b,c)}},
l6:{"^":"t:23;",
$2:function(a,b){return 0}},
l7:{"^":"t:10;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.m(z)
y=a.f
x=new V.J(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.E(x))).k(0,this.b+z)
a.sY(0,new V.ab(z.a,z.b,z.c))}},
kL:{"^":"t:23;",
$2:function(a,b){return 0}},
kM:{"^":"t:10;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sY(0,new V.ab(z,y,this.a.a.$2(b,c)))
x=new V.J(z,y,1)
a.sdB(x.w(0,Math.sqrt(x.E(x))))
x=1-b
w=1-c
a.scO(new V.cE(b*c,2+x*c,4+b*w,6+x*w))}},
al:{"^":"a;0a,0b,0c,0d,0e",
ap:function(){if(!this.gaK()){C.a.F(this.a.a.d.b,this)
this.a.a.U()}this.bH()
this.bI()
this.eX()},
f6:function(a){this.a=a
C.a.h(a.d.b,this)},
f7:function(a){this.b=a
C.a.h(a.d.c,this)},
f8:function(a){this.c=a
C.a.h(a.d.d,this)},
bH:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bI:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
eX:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaK:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.di())return
return v.w(0,Math.sqrt(v.E(v)))},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.J(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.aJ(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
bS:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ed()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.J(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.di())return
return v.w(0,Math.sqrt(v.E(v)))},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.j.$2(n,0)){z=r.J(0,u)
z=new V.J(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.J(0,u)
y=z.c
if(typeof y!=="number")return y.k()
y=new V.ab(z.a*l,z.b*l,y*l).A(0,u).J(0,x)
y=new V.J(y.a,y.b,y.c)
m=y.w(0,Math.sqrt(y.E(y)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.aJ(m)
z=z.w(0,Math.sqrt(z.E(z))).aJ(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
bQ:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
gfN:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var z,y
if(this.gaK())return a+"disposed"
z=a+C.i.a2(J.a4(this.a.e),0)+", "+C.i.a2(J.a4(this.b.e),0)+", "+C.i.a2(J.a4(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
H:function(){return this.u("")},
n:{
bG:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.f6(a)
z.f7(b)
z.f8(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
fQ:{"^":"a;"},
i7:{"^":"fQ;",
aN:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cy:{"^":"a;0a,0b",
ap:function(){if(!this.gaK()){C.a.F(this.a.a.c.b,this)
this.a.a.U()}this.bH()
this.bI()},
bH:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bI:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaK:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){if(this.gaK())return a+"disposed"
return a+C.i.a2(J.a4(this.a.e),0)+", "+C.i.a2(J.a4(this.b.e),0)},
H:function(){return this.u("")}},
h5:{"^":"a;"},
ix:{"^":"h5;",
aN:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cD:{"^":"a;0a",
ap:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.U()}this.eW()},
eW:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a2(J.a4(z.e),0)},
H:function(){return this.u("")}},
e5:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
c4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fR())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cD()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cy()
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
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bG(p,o,l)}z=this.e
if(!(z==null))z.Z(0)},
ae:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ae()||!1
if(!this.a.ae())y=!1
z=this.e
if(!(z==null))z.Z(0)
return y},
fI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
w=v.y
u=C.h.aL(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.J()
s=C.h.aL(w*(t-1))
w=a.b
u=u>=0?C.f.aF(u,w):w+C.f.aF(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.m(t)
s=C.f.aF(s,t)}else{if(typeof t!=="number")return H.m(t)
s=t+C.f.aF(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.d(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.d(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.d(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.d(z,p)
p=z[p]/255
if(w<0)w=0
else if(w>1)w=1
if(t<0)t=0
else if(t>1)t=1
if(q<0)q=0
else if(q>1)q=1
if(!(p<0))if(p>1)p=1
o=(w+t+q)*b/3
w=v.f
t=v.r
q=t.a
p=t.b
t=t.c
if(typeof t!=="number")return t.k()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.A()
t=new V.ab(n+q*o,m+p*o,l+t*o)
if(!J.L(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.v(null)}}}z=this.e
if(!(z==null))z.Z(0)},
hK:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.d(w,y)
v=w[y]
if((x&$.$get$ay().a)===0)v.f=null
if((x&$.$get$ap().a)===0)v.r=null
if((x&$.$get$ax().a)===0)v.x=null
if((x&$.$get$az().a)===0)v.y=null
if((x&$.$get$aA().a)===0)v.z=null
if((x&$.$get$cR().a)===0)v.Q=null
if((x&$.$get$aM().a)===0)v.ch=0
if((x&$.$get$aw().a)===0)v.cx=null}z=this.e
if(!(z==null))z.Z(0)},
hJ:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.d(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.Z(0)},
hI:function(a){return this.hJ(!0,a)},
el:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ao],"$asc")
H.w(e,"$isc",[P.A],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aN(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
ha:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ao],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.el(a,v,y,u,t))b.c4(u)}this.a.q()
this.c.c8()
this.d.c8()
this.b.hs()
this.c.c9(new F.ix())
this.d.c9(new F.i7())
z=this.e
if(!(z==null))z.Z(0)},
fL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ay()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ap().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
v=b.gcd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.de])
for(r=0,q=0;q<w;++q){p=b.fJ(q)
o=p.gcd(p)
C.a.V(s,q,new Z.de(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].h6(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bx(t)),35044)
y.bindBuffer(34962,null)
i=new Z.df(new Z.eF(34962,j),s,b)
i.b=H.b([],[Z.bZ])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.B(z,"\n")},
a_:function(a){var z=this.e
if(!(z==null))z.v(a)},
U:function(){return this.a_(null)},
n:{
e6:function(){var z,y
z=new F.e5()
y=new F.iQ(z)
y.b=!1
y.c=H.b([],[F.ao])
z.a=y
y=new F.i2(z)
y.b=H.b([],[F.cD])
z.b=y
y=new F.i1(z)
y.b=H.b([],[F.cy])
z.c=y
y=new F.i0(z)
y.b=H.b([],[F.al])
z.d=y
z.e=null
return z}}},
i0:{"^":"a;a,0b",
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ao],"$asc")
z=H.b([],[F.al])
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
C.a.h(z,F.bG(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bG(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bG(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bG(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
c9:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aN(0,v,t)){v.ap()
break}}}}},
c8:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.gfN(x)
if(y)x.ap()}},
ae:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bS())x=!1
return x},
bR:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bQ())x=!1
return x},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}},
i1:{"^":"a;a,0b",
gl:function(a){return this.b.length},
c9:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aN(0,v,t)){v.ap()
break}}}}},
c8:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.L(x.a,x.b)
if(y)x.ap()}},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.B(z,"\n")},
H:function(){return this.u("")}},
i2:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hs:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ap()}},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}},
ao:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bU:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cP(this.cx,x,u,z,y,w,v,a,t)},
fR:function(){return this.bU(null)},
sY:function(a,b){var z
if(!J.L(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
sdB:function(a){var z
if(!J.L(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
scO:function(a){var z
if(!J.L(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
h6:function(a){var z,y
z=J.K(a)
if(z.p(a,$.$get$ay())){z=this.f
y=[P.p]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ap())){z=this.r
y=[P.p]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ax())){z=this.x
y=[P.p]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$az())){z=this.y
y=[P.p]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$aA())){z=this.z
y=[P.p]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bs())){z=this.Q
y=[P.p]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bt())){z=this.Q
y=[P.p]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aM()))return H.b([this.ch],[P.p])
else if(z.p(a,$.$get$aw())){z=this.cx
y=[P.p]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.p])},
bS:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.J(0,0,0)
this.d.L(0,new F.j_(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.Z(0)}return!0},
bQ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.J(0,0,0)
this.d.L(0,new F.iZ(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.Z(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var z,y,x
z=H.b([],[P.n])
C.a.h(z,C.i.a2(J.a4(this.e),0))
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
C.a.h(z,V.E(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
H:function(){return this.u("")},
n:{
cP:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ao()
y=new F.iY(z)
y.b=H.b([],[F.cD])
z.b=y
y=new F.iU(z)
x=[F.cy]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iR(z)
x=[F.al]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$cQ()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ap().a)!==0?e:null
z.x=(x&$.$get$ax().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aA().a)!==0?g:null
z.Q=(x&$.$get$cR().a)!==0?c:null
z.ch=(x&$.$get$aM().a)!==0?i:0
z.cx=(x&$.$get$aw().a)!==0?a:null
return z}}},
j_:{"^":"t:6;a",
$1:function(a){var z,y
H.k(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
iZ:{"^":"t:6;a",
$1:function(a){var z,y
H.k(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
iQ:{"^":"a;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
gl:function(a){return this.c.length},
ae:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bS()
return!0},
bR:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bQ()
return!0},
fM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.L(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
this.q()
z=H.b([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}},
iR:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
L:function(a,b){H.l(b,{func:1,ret:-1,args:[F.al]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iS(this,b))
C.a.L(this.d,new F.iT(this,b))},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}},
iS:{"^":"t:6;a,b",
$1:function(a){H.k(a,"$isal")
if(!J.L(a.a,this.a))this.b.$1(a)}},
iT:{"^":"t:6;a,b",
$1:function(a){var z
H.k(a,"$isal")
z=this.a
if(!J.L(a.a,z)&&!J.L(a.b,z))this.b.$1(a)}},
iU:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}},
iW:{"^":"a;"},
iV:{"^":"iW;",
aN:function(a,b,c){return J.L(b.f,c.f)}},
iX:{"^":"a;"},
hy:{"^":"iX;",
c4:function(a){var z,y,x,w,v,u,t,s,r
H.w(a,"$isc",[F.ao],"$asc")
z=new V.J(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.A()
if(typeof w!=="number")return H.m(w)
z=new V.J(z.a+v,z.b+u,t+w)}}z=z.w(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){s=a[x]
if(typeof w!=="number")return w.k()
r=z.w(0,Math.sqrt(v+w*w))
if(!J.L(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.v(null)}}}return}},
iY:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var z,y,x,w
z=H.b([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.B(z,"\n")},
H:function(){return this.u("")}}}],["","",,O,{"^":"",hk:{"^":"cI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
S:[function(a){var z
H.k(a,"$isv")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.S(null)},"e4","$1","$0","gaX",0,2,0],
f_:[function(a){H.k(a,"$isv")
this.a=null
this.S(a)},function(){return this.f_(null)},"ip","$1","$0","geZ",0,2,0],
i_:[function(a,b){var z=V.as
z=new D.c_(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.S(z)},"$2","gex",8,0,20],
i0:[function(a,b){var z=V.as
z=new D.c0(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.S(z)},"$2","gey",8,0,20],
cr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.X(z.e.length+3,4)*4
x=C.f.X(z.f.length+3,4)*4
w=C.f.X(z.r.length+3,4)*4
v=C.f.X(z.x.length+3,4)*4
u=C.f.X(z.y.length+3,4)*4
t=C.f.X(z.z.length+3,4)*4
s=C.f.X(this.e.a.length+3,4)*4
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
g=k!==C.b||j!==C.b
f=p!==C.b||o!==C.b||n!==C.b||m!==C.b
e=m===C.b
d=!e||g
c=o!==C.b||n!==C.b||!e||l!==C.b||g
e=l===C.b
b=!e
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$ay()
if(c){z=$.$get$ap()
a6=new Z.aL(a6.a|z.a)}if(b){z=$.$get$ax()
a6=new Z.aL(a6.a|z.a)}if(a){z=$.$get$az()
a6=new Z.aL(a6.a|z.a)}if(a0){z=$.$get$aA()
a6=new Z.aL(a6.a|z.a)}if(a2){z=$.$get$aw()
a6=new Z.aL(a6.a|z.a)}return new A.hn(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.w(a,"$isc",[T.cJ],"$asc")
if(b!=null)if(!C.a.aA(a,b)){b.a=a.length
C.a.h(a,b)}},
ar:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
y.a=new V.ab(0,0,0)
x=y.b
if(x!=null){w=x.ai(0,b,y)
if(w!=null)y.a=w.aE(y.a)}}},
hu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cr()
y=a.fr.j(0,z.a9)
if(y==null){y=A.hj(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.cS(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.V(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.b7
z=b.e
if(!(z instanceof Z.df)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.ae()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.bR()
t.a.bR()
t=t.e
if(!(t==null))t.Z(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.fM()
s=s.e
if(!(s==null))s.Z(0)}q=b.d.fL(new Z.j0(a.a),v)
q.aB($.$get$ay()).e=this.a.Q.c
if(z)q.aB($.$get$ap()).e=this.a.cx.c
if(u)q.aB($.$get$ax()).e=this.a.ch.c
if(w.rx)q.aB($.$get$az()).e=this.a.cy.c
if(t)q.aB($.$get$aA()).e=this.a.db.c
if(w.x1)q.aB($.$get$aw()).e=this.a.dx.c
b.e=q}z=T.cJ
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.fX()
if(w.fx){u=this.a
t=a.dx
t=t.gO(t)
u=u.dy
u.toString
u.ac(t.a3(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gO(t)
s=a.dx
s=t.k(0,s.gO(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ac(t.a3(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghq()
s=a.dx
s=t.k(0,s.gO(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ac(t.a3(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ac(t.a3(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ac(t.a3(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ac(C.z.a3(t,!0))}if(w.af>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.k(s,"$isas")
t=t.r1
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bx(H.w(s.a3(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.f.d)
u=this.a
t=this.f.d
u.a5(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.f.e)
u=this.a
t=this.f.e
u.a0(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.r.d)
u=this.a
t=this.r.d
u.a5(u.y1,u.af,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.r.e)
u=this.a
t=this.r.e
u.a0(u.y2,u.af,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.a9
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.x.d)
u=this.a
t=this.x.d
u.a5(u.b7,u.b8,t)
t=this.a
u=this.x.f
t=t.a9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.x.e)
u=this.a
t=this.x.e
u.a0(u.cV,u.b8,t)
t=this.a
u=this.x.f
t=t.a9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.b9
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.y.d)
u=this.a
t=this.y.d
u.a5(u.cW,u.ba,t)
t=this.a
u=this.y.f
t=t.b9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.y.e)
u=this.a
t=this.y.e
u.a0(u.cX,u.ba,t)
t=this.a
u=this.y.f
t=t.b9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.bb
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bd
t.a.uniform1f(t.d,r)
break
case C.c:this.N(p,this.z.d)
u=this.a
t=this.z.d
u.a5(u.cY,u.bc,t)
t=this.a
u=this.z.f
t=t.bb
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bd
u.a.uniform1f(u.d,r)
break
case C.d:this.N(p,this.z.e)
u=this.a
t=this.z.e
u.a0(u.cZ,u.bc,t)
t=this.a
u=this.z.f
t=t.bb
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bd
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d9
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bV
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.dE(i.gb6(i))
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.k()
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gao(i)
g=h.c
r=f.gbn()
s=f.gaV()
f=f.gb5()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.da
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bW
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.aE(i.a)
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform1f(r.d,s)
s=i.e
r=h.f
r.a.uniform1f(r.d,s)
s=i.f
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dc
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bX
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gc7(i)
r=h.b
g=s.gdG(s)
f=s.gdH(s)
s=s.gdJ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gb6(i).iw()
f=h.c
g=s.ga6(s)
r=s.ga7(s)
s=s.ga8()
f.a.uniform3f(f.d,g,r,s)
s=l.aE(i.gc7(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gao(i)
r=h.e
g=s.gbn()
f=s.gaV()
s=s.gb5()
r.a.uniform3f(r.d,g,f,s)
s=i.giu()
f=h.f
f.a.uniform1f(f.d,s)
s=i.git()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcL()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcM()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcN()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dd
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bY
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gaS()
H.w(p,"$isc",s,"$asc")
if(!C.a.aA(p,r)){r.sb_(p.length)
C.a.h(p,r)}r=i.gb6(i)
g=h.d
f=r.ga6(r)
e=r.ga7(r)
r=r.ga8()
g.a.uniform3f(g.d,f,e,r)
r=i.ghM()
e=h.b
f=r.ga6(r)
g=r.ga7(r)
r=r.ga8()
e.a.uniform3f(e.d,f,g,r)
r=i.gaR(i)
g=h.c
f=r.ga6(r)
e=r.ga7(r)
r=r.ga8()
g.a.uniform3f(g.d,f,e,r)
r=l.dE(i.gb6(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.k()
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gao(i)
f=h.f
e=g.gbn()
r=g.gaV()
g=g.gb5()
f.a.uniform3f(f.d,e,r,g)
g=i.gaS()
r=g.gc3(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gen()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb_())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.de
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bZ
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gaS()
H.w(p,"$isc",r,"$asc")
if(!C.a.aA(p,g)){g.sb_(p.length)
C.a.h(p,g)}d=l.k(0,i.gO(i))
g=i.gO(i).aE(new V.ab(0,0,0))
f=h.b
e=g.gdG(g)
c=g.gdH(g)
g=g.gdJ(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aE(new V.ab(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dh(0)
c=h.d
m=new Float32Array(H.bx(H.w(new V.dR(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a3(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gao(i)
g=h.e
e=c.gbn()
f=c.gaV()
c=c.gb5()
g.a.uniform3f(g.d,e,f,c)
c=i.gaS()
g=c.gc3(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gc3(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.giv(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcL()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcM()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcN()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.df
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.c_
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gaS()
H.w(p,"$isc",z,"$asc")
if(!C.a.aA(p,s)){s.sb_(p.length)
C.a.h(p,s)}s=i.gc7(i)
r=h.b
g=s.gdG(s)
f=s.gdH(s)
s=s.gdJ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gb6(i)
f=h.c
g=s.ga6(s)
r=s.ga7(s)
s=s.ga8()
f.a.uniform3f(f.d,g,r,s)
s=i.ghM()
r=h.d
g=s.ga6(s)
f=s.ga7(s)
s=s.ga8()
r.a.uniform3f(r.d,g,f,s)
s=i.gaR(i)
f=h.e
g=s.ga6(s)
r=s.ga7(s)
s=s.ga8()
f.a.uniform3f(f.d,g,r,s)
s=l.aE(i.gc7(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaS()
r=s.gc3(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gen()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb_())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gao(i)
r=h.y
g=s.gbn()
f=s.gaV()
s=s.gb5()
r.a.uniform3f(r.d,g,f,s)
s=i.giD()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giE()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcL()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcM()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcN()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.N(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.d_,z.be,u)
break
case C.d:this.N(p,this.Q.e)
z=this.a
u=this.Q.e
z.a0(z.d0,z.be,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gO(u).dh(0)
a.Q=u}z=z.id
z.toString
z.ac(u.a3(0,!0))}if(w.dy){this.N(p,this.ch)
z=this.a
u=this.ch
z.a0(z.d1,z.d2,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.bf
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.N(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.d3,z.bg,u)
u=this.a
z=this.cx.f
u=u.bf
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.N(p,this.cx.e)
z=this.a
u=this.cx.e
z.a0(z.d4,z.bg,u)
u=this.a
z=this.cx.f
u=u.bf
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.bi
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bh
u.a.uniform1f(u.d,s)
break
case C.c:this.N(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.d5,z.bj,u)
u=this.a
z=this.cy.f
u=u.bi
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,s)
break
case C.d:this.N(p,this.cy.e)
z=this.a
u=this.cy.e
z.a0(z.d6,z.bj,u)
u=this.a
z=this.cy.f
u=u.bi
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bk
z.a.uniform1f(z.d,t)
break
case C.c:this.N(p,this.db.d)
z=this.a
t=this.db.d
z.a5(z.d7,z.bl,t)
t=this.a
z=this.db.f
t=t.bk
t.a.uniform1f(t.d,z)
break
case C.d:this.N(p,this.db.e)
z=this.a
t=this.db.e
z.a0(z.d8,z.bl,t)
t=this.a
z=this.db.f
t=t.bk
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bN(a)
z.aD(a)
z.hL(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.fV()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cr().a9},
n:{
dQ:function(){var z,y,x
z=new O.hk()
y=O.cq(V.as)
z.e=y
y.aW(z.gex(),z.gey())
y=new O.aW(z,"emission")
y.c=C.b
y.f=new V.a0(0,0,0)
z.f=y
y=new O.aW(z,"ambient")
y.c=C.b
y.f=new V.a0(0,0,0)
z.r=y
y=new O.aW(z,"diffuse")
y.c=C.b
y.f=new V.a0(0,0,0)
z.x=y
y=new O.aW(z,"invDiffuse")
y.c=C.b
y.f=new V.a0(0,0,0)
z.y=y
y=new O.hp(z,"specular")
y.c=C.b
y.f=new V.a0(0,0,0)
y.ch=100
z.z=y
y=new O.hm(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.aW(z,"reflect")
y.c=C.b
y.f=new V.a0(0,0,0)
z.cx=y
y=new O.ho(z,"refract")
y.c=C.b
y.f=new V.a0(0,0,0)
y.ch=1
z.cy=y
y=new O.hl(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.h4()
y.bt(D.T)
y.e=H.b([],[D.fG])
y.f=H.b([],[D.c3])
y.r=H.b([],[D.i8])
y.x=H.b([],[D.il])
y.y=H.b([],[D.im])
y.z=H.b([],[D.io])
y.Q=null
y.ch=null
y.cb(y.gew(),y.geP(),y.geR())
z.dx=y
x=y.Q
if(x==null){x=D.H()
y.Q=x
y=x}else y=x
y.h(0,z.geZ())
y=z.dx
x=y.ch
if(x==null){x=D.H()
y.ch=x
y=x}else y=x
y.h(0,z.gaX())
z.dy=null
return z}}},hl:{"^":"cz;0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.f
if(!$.j.$2(z,a)){y=this.f
this.f=a
z=new D.C(this.b,y,a,this,[P.p])
z.b=!0
this.a.S(z)}},
ax:function(){this.cg()
this.f2(1)}},cz:{"^":"a;",
S:[function(a){this.a.S(H.k(a,"$isv"))},function(){return this.S(null)},"e4","$1","$0","gaX",0,2,0],
ax:["cg",function(){}],
f4:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().F(0,this.gaX())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaX())
z=new D.C(this.b+".texture2D",y,this.d,this,[T.ed])
z.b=!0
this.a.S(z)}},
f5:function(a){},
sbo:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.ax()
this.c=C.c
this.f5(null)
z=this.a
z.a=null
z.S(null)}this.f4(a)}},hm:{"^":"cz;a,b,0c,0d,0e"},aW:{"^":"cz;0f,a,b,0c,0d,0e",
cE:function(a){var z,y
if(!J.L(this.f,a)){z=this.f
this.f=a
y=new D.C(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.S(y)}},
ax:["bs",function(){this.cg()
this.cE(new V.a0(1,1,1))}],
sao:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.ax()
z=this.a
z.a=null
z.S(null)}this.cE(b)}},ho:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f3:function(a){var z,y
z=this.ch
if(!$.j.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.S(z)}},
ax:function(){this.bs()
this.f3(1)}},hp:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.ch
if(!$.j.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.S(z)}},
ax:function(){this.bs()
this.bJ(100)}},cI:{"^":"a;"}}],["","",,T,{"^":"",cJ:{"^":"ck;"},ed:{"^":"cJ;"},ih:{"^":"ed;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z}},ii:{"^":"a;a,0b,0c,0d,0e",
h8:function(a,b,c,d,e){var z,y,x,w
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
w=new T.ih()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a5
W.U(x,"load",H.l(new T.ij(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bm:function(a){return this.h8(a,!1,!1,!1,!1)},
f0:function(a,b,c){var z,y,x,w
b=V.d7(b,2)
z=V.d7(a.width,2)
y=V.d7(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.co(null,null)
x.width=z
x.height=y
w=H.k(C.k.dM(x,"2d"),"$isdi")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kE(w.getImageData(0,0,x.width,x.height))}}},ij:{"^":"t:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.f0(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.hB(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.fW()}++x.e}},ik:{"^":"a;a,b,c"}}],["","",,V,{"^":"",fm:{"^":"a;",
aM:function(a,b){return!0},
i:function(a){return"all"},
$isbJ:1},bJ:{"^":"a;"},dP:{"^":"a;",
aM:["dT",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aM(0,b))return!0
return!1}],
i:["cf",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbJ:1},bi:{"^":"dP;0a",
aM:function(a,b){return!this.dT(0,b)},
i:function(a){return"!["+this.cf(0)+"]"}},hZ:{"^":"a;0a",
dX:function(a){var z,y
if(a.a.length<=0)throw H.e(P.r("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.A,P.a9])
for(y=new H.dM(a,a.gl(a),0,[H.aC(a,"u",0)]);y.C();)z.V(0,y.d,!0)
this.a=z},
aM:function(a,b){return this.a.cS(0,b)},
i:function(a){var z=this.a
return P.cH(new H.dL(z,[H.z(z,0)]),0,null)},
$isbJ:1,
n:{
a_:function(a){var z=new V.hZ()
z.dX(a)
return z}}},e8:{"^":"a;a,b,0c,0d",
ghb:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ek(this.a.I(0,b))
w.a=H.b([],[V.bJ])
w.c=!1
C.a.h(this.c,w)
return w},
fY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aM(0,a))return w}return},
i:function(a){return this.b}},eh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ff(this.b,"\n","\\n")
y=H.ff(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ei:{"^":"a;a,b,0c",
i:function(a){return this.b}},it:{"^":"a;0a,0b,0c",
I:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e8(this,b)
z.c=H.b([],[V.ek])
this.a.V(0,b,z)}return z},
aT:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ei(this,a)
y=P.n
z.c=new H.aV(0,0,[y,y])
this.b.V(0,a,z)}return z},
hH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eh])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aY(a,t)
r=y.fY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cH(w,0,null)
throw H.e(P.r("Untokenizable string [state: "+y.ghb(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cH(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eh(o==null?p.b:o,q,t)}++t}}}},ek:{"^":"dP;b,0c,0a",
i:function(a){return this.b.b+": "+this.cf(0)}}}],["","",,X,{"^":"",dh:{"^":"a;",$isaG:1},fV:{"^":"eb;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z}},hB:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
aH:[function(a){var z
H.k(a,"$isv")
z=this.f
if(!(z==null))z.v(a)},function(){return this.aH(null)},"hR","$1","$0","gcj",0,2,0],
saO:function(a){var z,y
if(!J.L(this.b,a)){z=this.b
if(z!=null)z.gt().F(0,this.gcj())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gcj())
z=new D.C("mover",y,this.b,this,[U.a2])
z.b=!0
this.aH(z)}},
$isaG:1,
$isdh:1},eb:{"^":"a;"}}],["","",,V,{"^":"",
l3:function(a){P.is(C.w,new V.l4(a))},
l4:{"^":"t:36;a",
$1:function(a){H.k(a,"$isaY")
P.d8(C.h.dD(this.a.gh_(),2)+" fps")}},
i3:{"^":"a;0a,0b",
dZ:function(a,b){var z,y,x,w,v,u,t
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
W.U(z,"scroll",H.l(new V.i6(x),{func:1,ret:-1,args:[t]}),!1,t)},
cK:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.n],"$asc")
this.fa()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hH(C.a.h4(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fe(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kb(C.H,s,C.q,!1)
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
fa:function(){var z,y,x,w
if(this.b!=null)return
z=new V.it()
y=P.n
z.a=new H.aV(0,0,[y,V.e8])
z.b=new H.aV(0,0,[y,V.ei])
z.c=z.I(0,"Start")
y=z.I(0,"Start").B(0,"Bold")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Bold").B(0,"Bold")
x=new V.bi()
w=[V.bJ]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("*"))
C.a.h(x.a,y)
y=z.I(0,"Bold").B(0,"BoldEnd")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").B(0,"Italic")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Italic").B(0,"Italic")
x=new V.bi()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("_"))
C.a.h(x.a,y)
y=z.I(0,"Italic").B(0,"ItalicEnd")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").B(0,"Code")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Code").B(0,"Code")
x=new V.bi()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("`"))
C.a.h(x.a,y)
y=z.I(0,"Code").B(0,"CodeEnd")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").B(0,"LinkHead")
x=V.a_(new H.Y("["))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"LinkHead").B(0,"LinkTail")
x=V.a_(new H.Y("|"))
C.a.h(y.a,x)
x=z.I(0,"LinkHead").B(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkHead").B(0,"LinkHead")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
x=z.I(0,"LinkTail").B(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkTail").B(0,"LinkTail")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
C.a.h(z.I(0,"Start").B(0,"Other").a,new V.fm())
x=z.I(0,"Other").B(0,"Other")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("*_`["))
C.a.h(y.a,x)
x=z.I(0,"BoldEnd")
x.d=x.a.aT("Bold")
x=z.I(0,"ItalicEnd")
x.d=x.a.aT("Italic")
x=z.I(0,"CodeEnd")
x.d=x.a.aT("Code")
x=z.I(0,"LinkEnd")
x.d=x.a.aT("Link")
x=z.I(0,"Other")
x.d=x.a.aT("Other")
this.b=z},
n:{
i4:function(a,b){var z=new V.i3()
z.dZ(a,!0)
return z}}},
i6:{"^":"t:13;a",
$1:function(a){P.ef(C.l,new V.i5(this.a))}},
i5:{"^":"t:1;a",
$0:function(){var z,y,x
z=C.h.aa(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=V.i4("Test 040",!0)
y=W.co(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.n]
z.cK(H.b(["A combination of bump mapping with height map and specular map."],x))
z.cK(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.iq(w,!0,!0,!0,!1)
u=v.f.bm("../resources/gravel/colorLarge.png")
t=v.f.bm("../resources/gravel/bumpSmall.png")
s=v.f.bm("../resources/gravel/specularSmall.png")
r=v.f.bm("../resources/gravel/heightSmall.png")
z=U.dn(V.dU(0,0,2))
x=new U.e3()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sdI(0)
x.sds(0,0)
x.sdw(0)
q=x.d
if(!$.j.$2(q,0.6)){p=x.d
x.d=0.6
q=new D.C("deltaYaw",p,0.6,x,[P.p])
q.b=!0
x.G(q)}q=x.e
if(!$.j.$2(q,0.1)){p=x.e
x.e=0.1
q=new D.C("deltaPitch",p,0.1,x,[P.p])
q.b=!0
x.G(q)}q=x.f
if(!$.j.$2(q,0)){p=x.f
x.f=0
q=new D.C("deltaRoll",p,0,x,[P.p])
q.b=!0
x.G(q)}q=U.a2
o=[q]
n=U.dC(H.b([z,x],o))
m=E.dz(null,!0,null,"",F.l5(8,null,0.03,8),null)
m.saO(n)
x=O.dQ()
z=x.f
z.sao(0,new V.a0(1,1,1))
m.sdA(x)
z=new V.a0(1,1,1)
l=new D.c3()
l.c=new V.a0(1,1,1)
l.d=1
l.e=0
l.f=0
l.a=new V.ab(0,0,0)
p=l.b
l.b=n
n.gt().h(0,l.ge2())
x=new D.C("mover",p,l.b,l,[q])
x.b=!0
l.a4(x)
l.c=z
if(!z.p(0,z)){p=l.c
l.c=z
z=new D.C("color",p,z,l,[V.a0])
z.b=!0
l.a4(z)}z=l.d
if(!$.j.$2(z,0.5)){p=l.d
l.d=0.5
z=new D.C("attenuation0",p,0.5,l,[P.p])
z.b=!0
l.a4(z)}z=l.e
if(!$.j.$2(z,0.1)){p=l.e
l.e=0.1
z=new D.C("attenuation1",p,0.1,l,[P.p])
z.b=!0
l.a4(z)}z=l.f
if(!$.j.$2(z,0)){p=l.f
l.f=0
z=new D.C("attenuation2",p,0,l,[P.p])
z.b=!0
l.a4(z)}k=O.dQ()
z=k.dx
z.toString
x=H.aC(z,"ar",0)
H.D(l,x)
x=[x]
if(z.cA(H.b([l],x))){q=z.a
j=q.length
C.a.h(q,l)
z.cw(j,H.b([l],x))}z=k.r
z.sao(0,new V.a0(0.3,0.3,0.3))
k.r.sbo(u)
k.x.sbo(u)
z=k.z
if(z.c===C.b){z.c=C.e
z.bs()
z.bJ(100)
x=z.a
x.a=null
x.S(null)}z.bJ(100)
k.z.sbo(s)
k.Q.sbo(t)
i=E.dz(null,!0,null,"",null,k)
r.gt().h(0,new K.kX(v,r,i))
z=E.aE
x=H.b([i,m],[z])
h=new M.fN()
z=O.cq(z)
h.d=z
z.aW(h.geA(),h.geB())
h.e=null
h.f=null
h.r=null
h.x=null
g=new X.hB()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saO(null)
z=g.c
if(!$.j.$2(z,1.0471975511965976)){p=g.c
g.c=1.0471975511965976
z=new D.C("fov",p,1.0471975511965976,g,[P.p])
z.b=!0
g.aH(z)}z=g.d
if(!$.j.$2(z,0.1)){p=g.d
g.d=0.1
z=new D.C("near",p,0.1,g,[P.p])
z.b=!0
g.aH(z)}z=g.e
if(!$.j.$2(z,2000)){p=g.e
g.e=2000
z=new D.C("far",p,2000,g,[P.p])
z.b=!0
g.aH(z)}z=h.a
if(z!==g){if(z!=null)z.gt().F(0,h.gat())
p=h.a
h.a=g
g.gt().h(0,h.gat())
z=new D.C("camera",p,h.a,h,[X.dh])
z.b=!0
h.aG(z)}f=new X.fV()
z=new V.bU(0,0,0,1)
f.a=z
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
z=V.e2(0,0,1,1)
f.r=z
z=h.b
if(z!==f){if(z!=null)z.gt().F(0,h.gat())
p=h.b
h.b=f
f.gt().h(0,h.gat())
z=new D.C("target",p,h.b,h,[X.eb])
z.b=!0
h.aG(z)}h.d.b4(0,x)
z=h.a
x=v.r
q=new U.iM()
e=U.dl()
e.sdF(0,!0)
e.sdj(6.283185307179586)
e.sdl(0)
e.sY(0,0)
e.sdk(100)
e.sP(0)
e.scT(0.5)
q.b=e
d=q.gb0()
e.gt().h(0,d)
e=U.dl()
e.sdF(0,!0)
e.sdj(6.283185307179586)
e.sdl(0)
e.sY(0,0)
e.sdk(100)
e.sP(0)
e.scT(0.5)
q.c=e
e.gt().h(0,d)
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
c=new X.aF(!1,!1,!1)
p=q.d
q.d=c
e=[X.aF]
d=new D.C("modifiers",p,c,q,e)
d.b=!0
q.G(d)
d=q.f
if(d!==!1){q.f=!1
d=new D.C("invertX",d,!1,q,[P.a9])
d.b=!0
q.G(d)}d=q.r
if(d!==!1){q.r=!1
d=new D.C("invertY",d,!1,q,[P.a9])
d.b=!0
q.G(d)}q.bM(x)
x=v.r
d=new U.iN()
d.c=0.01
d.d=0
d.e=0
c=new X.aF(!1,!1,!1)
d.b=c
e=new D.C("modifiers",null,c,d,e)
e.b=!0
d.G(e)
d.bM(x)
z.saO(U.dC(H.b([q,d,U.dn(V.dU(0,0,5))],o)))
z=v.d
if(z!==h){if(z!=null)z.gt().F(0,v.gci())
v.d=h
h.gt().h(0,v.gci())
v.e0()}V.l3(v)},
kX:{"^":"t:5;a,b,c",
$1:function(a){var z,y,x,w,v,u
H.k(a,"$isv")
z=this.a.f
y=this.b
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
u=F.kK(150,null,150)
u.ae()
u.fI(new T.ik(v,x,w),0.05)
z=$.$get$ap()
z.toString
u.hK(new Z.aL($.$get$cQ().a&~z.a))
u.hI(!1)
u.ae()
this.c.scc(0,u)}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.cu.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h_.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.bQ=function(a){if(typeof a=="string")return J.cu.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.d2=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.kI=function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cO.prototype
return a}
J.ce=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).p(a,b)}
J.fi=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kI(a).ab(a,b)}
J.fj=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bQ(a).j(a,b)}
J.fk=function(a,b,c,d){return J.ce(a).cJ(a,b,c,d)}
J.cj=function(a,b,c){return J.bQ(a).fO(a,b,c)}
J.d9=function(a,b){return J.d2(a).D(a,b)}
J.fl=function(a,b){return J.d2(a).L(a,b)}
J.aS=function(a){return J.K(a).gR(a)}
J.bE=function(a){return J.d2(a).gT(a)}
J.b6=function(a){return J.bQ(a).gl(a)}
J.a4=function(a){return J.K(a).i(a)}
I.d5=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cn.prototype
C.x=J.o.prototype
C.a=J.aU.prototype
C.y=J.dF.prototype
C.f=J.dG.prototype
C.z=J.dH.prototype
C.h=J.c1.prototype
C.i=J.cu.prototype
C.G=J.bH.prototype
C.I=H.hw.prototype
C.J=W.hx.prototype
C.p=J.hC.prototype
C.K=P.cF.prototype
C.m=J.cO.prototype
C.r=W.bu.prototype
C.t=W.j3.prototype
C.u=new P.hA()
C.v=new P.iP()
C.j=new P.jQ()
C.b=new A.bV(0,"ColorSourceType.None")
C.e=new A.bV(1,"ColorSourceType.Solid")
C.c=new A.bV(2,"ColorSourceType.Texture2D")
C.d=new A.bV(3,"ColorSourceType.TextureCube")
C.l=new P.ba(0)
C.w=new P.ba(5e6)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.H=H.b(I.d5([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iO(!1)
$.aq=0
$.b7=null
$.dc=null
$.cW=!1
$.f7=null
$.f1=null
$.fd=null
$.cd=null
$.cg=null
$.d3=null
$.b0=null
$.by=null
$.bz=null
$.cX=!1
$.O=C.j
$.dw=null
$.dv=null
$.du=null
$.dt=null
$.j=V.hq()
$.dY=null
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
I.$lazy(y,x,w)}})(["ds","$get$ds",function(){return H.f6("_$dart_dartClosure")},"cv","$get$cv",function(){return H.f6("_$dart_js")},"el","$get$el",function(){return H.au(H.c7({
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.au(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.au(H.c7(null))},"eo","$get$eo",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.au(H.c7(void 0))},"et","$get$et",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.au(H.er(null))},"ep","$get$ep",function(){return H.au(function(){try{null.$method$}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.au(H.er(void 0))},"eu","$get$eu",function(){return H.au(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cT","$get$cT",function(){return P.j4()},"bA","$get$bA",function(){return[]},"eW","$get$eW",function(){return P.hP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dq","$get$dq",function(){return{}},"eE","$get$eE",function(){return Z.ah(0)},"cQ","$get$cQ",function(){return Z.ah(511)},"ay","$get$ay",function(){return Z.ah(1)},"ap","$get$ap",function(){return Z.ah(2)},"ax","$get$ax",function(){return Z.ah(4)},"az","$get$az",function(){return Z.ah(8)},"aA","$get$aA",function(){return Z.ah(16)},"bs","$get$bs",function(){return Z.ah(32)},"bt","$get$bt",function(){return Z.ah(64)},"cR","$get$cR",function(){return Z.ah(96)},"aM","$get$aM",function(){return Z.ah(128)},"aw","$get$aw",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.I},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.I,args:[D.v]},{func:1,ret:P.I,args:[F.al]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.A,[P.f,E.aE]]},{func:1,ret:P.I,args:[F.ao,P.p,P.p]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[W.a5]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,args:[,]},{func:1,ret:-1,args:[P.A,[P.f,U.a2]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.A,[P.f,V.as]]},{func:1,ret:-1,args:[P.A,[P.f,D.T]]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.a9,args:[P.p,P.p]},{func:1,ret:P.a9,args:[[P.f,D.T]]},{func:1,ret:P.I,args:[P.V]},{func:1,ret:W.Z,args:[W.M]},{func:1,ret:P.a9,args:[W.M]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[P.a],opt:[P.an]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.aY]},{func:1,args:[,P.n]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.v]}]}]
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
if(x==y)H.l8(d||a)
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
Isolate.d5=a.d5
Isolate.d0=a.d0
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fa,[])
else K.fa([])})})()
//# sourceMappingURL=test.dart.js.map
