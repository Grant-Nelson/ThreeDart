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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cX(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cY=function(){}
var dart=[["","",,H,{"^":"",le:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d0==null){H.ky()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.et("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cv()]
if(v!=null)return v
v=H.kD(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cv(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
p:function(a,b){return a===b},
gO:function(a){return H.bl(a)},
i:["dF",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fQ:{"^":"n;",
i:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$isa9:1},
dB:{"^":"n;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0},
$isG:1},
cw:{"^":"n;",
gO:function(a){return 0},
i:["dG",function(a){return String(a)}]},
hq:{"^":"cw;"},
cN:{"^":"cw;"},
bI:{"^":"cw;",
i:function(a){var z=a[$.$get$dn()]
if(z==null)return this.dG(a)
return"JavaScript function for "+H.j(J.a3(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscr:1},
aR:{"^":"n;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.af("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.r(P.af("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.b8(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.U(z,y,H.j(a[y]))
return z.join(b)},
fM:function(a){return this.w(a,"")},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bl:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ac(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ac(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gc4:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.fO())},
aK:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.cs(a,"[","]")},
gS:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gO:function(a){return H.bl(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bS(b,"newLength",null))
if(b<0)throw H.f(P.ac(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.X(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aL(a,b))
if(b>=a.length||b<0)throw H.f(H.aL(a,b))
a[b]=c},
$ish:1,
$isd:1,
n:{
fP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ac(a,0,4294967295,"length",null))
return J.dy(new Array(a),b)},
dy:function(a,b){return J.bf(H.c(a,[b]))},
bf:function(a){H.bE(a)
a.fixed$length=Array
return a}}},
ld:{"^":"aR;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c2:{"^":"n;",
hj:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.af(""+a+".toInt()"))},
c2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.af(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.af(""+a+".round()"))},
du:function(a,b){var z,y
if(b>20)throw H.f(P.ac(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){return a&0x1FFFFFFF},
dB:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cK(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cK(a,b)},
cK:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.af("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b1:function(a,b){var z
if(a>0)z=this.eW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eW:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.f(H.aK(b))
return a<b},
$isv:1,
$isV:1},
dA:{"^":"c2;",$isC:1},
dz:{"^":"c2;"},
cu:{"^":"n;",
bS:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aL(a,b))
if(b<0)throw H.f(H.aL(a,b))
if(b>=a.length)H.r(H.aL(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.f(H.aL(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.P(b)
if(typeof b!=="string")throw H.f(P.bS(b,null,null))
return a+b},
bm:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.c6(b,null,null))
if(b>c)throw H.f(P.c6(b,null,null))
if(c>a.length)throw H.f(P.c6(c,null,null))
return a.substring(b,c)},
cm:function(a,b){return this.bm(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fZ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a1:function(a,b){return this.fZ(a,b," ")},
ft:function(a,b,c){if(c>a.length)throw H.f(P.ac(c,0,a.length,null,null))
return H.f7(a,b,c)},
i:function(a){return a},
gO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdO:1,
$ism:1}}],["","",,H,{"^":"",
fO:function(){return new P.hY("No element")},
Y:{"^":"iv;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bS(this.a,b)},
$aseu:function(){return[P.C]},
$ast:function(){return[P.C]},
$ash:function(){return[P.C]},
$asd:function(){return[P.C]}},
fB:{"^":"h;"},
dG:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bQ(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.b8(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
h5:{"^":"h;a,b,$ti",
gS:function(a){return new H.h6(J.bF(this.a),this.b,this.$ti)},
gk:function(a){return J.b6(this.a)},
A:function(a,b){return this.b.$1(J.d6(this.a,b))},
$ash:function(a,b){return[b]}},
h6:{"^":"ct;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$asct:function(a,b){return[b]}},
iM:{"^":"h;a,b,$ti",
gS:function(a){return new H.iN(J.bF(this.a),this.b,this.$ti)}},
iN:{"^":"ct;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
bY:{"^":"a;$ti"},
eu:{"^":"a;$ti"},
iv:{"^":"c3+eu;"}}],["","",,H,{"^":"",
kt:function(a){return init.types[H.X(a)]},
kB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.f(H.aK(a))
return z},
bl:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.I(a).$iscN){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aZ(w,0)===36)w=C.h.cm(w,1)
r=H.d1(H.bE(H.aM(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hA:function(a){var z,y,x,w
z=H.c([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aK(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b1(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aK(w))}return H.dR(z)},
dS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aK(x))
if(x<0)throw H.f(H.aK(x))
if(x>65535)return H.hA(a)}return H.dR(a)},
hz:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b1(z,10))>>>0,56320|z&1023)}throw H.f(P.ac(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hy:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hw:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hs:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
ht:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hv:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hx:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hu:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
p:function(a){throw H.f(H.aK(a))},
i:function(a,b){if(a==null)J.b6(a)
throw H.f(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,"index",null)
z=H.X(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.c6(b,"index",null)},
kp:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.at(!0,b,"end",null)},
aK:function(a){return new P.at(!0,a,null,null)},
kk:function(a){if(typeof a!=="number")throw H.f(H.aK(a))
return a},
f:function(a){var z
if(a==null)a=new P.dN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f9})
z.name=""}else z.toString=H.f9
return z},
f9:function(){return J.a3(this.dartException)},
r:function(a){throw H.f(a)},
x:function(a){throw H.f(P.b8(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b1(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cx(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dM(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ec()
u=$.$get$ed()
t=$.$get$ee()
s=$.$get$ef()
r=$.$get$ej()
q=$.$get$ek()
p=$.$get$eh()
$.$get$eg()
o=$.$get$em()
n=$.$get$el()
m=v.a0(y)
if(m!=null)return z.$1(H.cx(H.P(y),m))
else{m=u.a0(y)
if(m!=null){m.method="call"
return z.$1(H.cx(H.P(y),m))}else{m=t.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=r.a0(y)
if(m==null){m=q.a0(y)
if(m==null){m=p.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=o.a0(y)
if(m==null){m=n.a0(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dM(H.P(y),m))}}return z.$1(new H.iu(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.at(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dZ()
return a},
b4:function(a){var z
if(a==null)return new H.eK(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eK(a)},
kr:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.U(0,a[y],a[x])}return b},
kA:function(a,b,c,d,e,f){H.k(a,"$iscr")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kA)
a.$identity=z
return z},
fp:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isd){z.$reflectionInfo=d
x=H.hD(z).r}else x=d
w=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.an
if(typeof u!=="number")return u.C()
$.an=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dh(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kt,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.da:H.cl
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dh(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fm:function(a,b,c,d){var z=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fo(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fm(y,!w,z,b)
if(y===0){w=$.an
if(typeof w!=="number")return w.C()
$.an=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bT("self")
$.b7=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.an
if(typeof w!=="number")return w.C()
$.an=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bT("self")
$.b7=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fn:function(a,b,c,d){var z,y
z=H.cl
y=H.da
switch(b?-1:a){case 0:throw H.f(H.hM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fo:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bT("self")
$.b7=z}y=$.d9
if(y==null){y=H.bT("receiver")
$.d9=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fn(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.an
if(typeof y!=="number")return y.C()
$.an=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.an
if(typeof y!=="number")return y.C()
$.an=y+1
return new Function(z+y+"}")()},
cX:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bE(b))
H.X(c)
y=!!J.I(d).$isd?J.bf(d):d
return H.fp(a,z,c,y,!!e,f,g)},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.as(a,"String"))},
kG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.as(a,"num"))},
eY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.as(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.as(a,"int"))},
f5:function(a,b){throw H.f(H.as(a,H.P(b).substring(3)))},
kI:function(a,b){var z=J.bQ(b)
throw H.f(H.fl(a,z.bm(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f5(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kI(a,b)},
bE:function(a){if(a==null)return a
if(!!J.I(a).$isd)return a
throw H.f(H.as(a,"List"))},
kC:function(a,b){if(a==null)return a
if(!!J.I(a).$isd)return a
if(J.I(a)[b])return a
H.f5(a,b)},
eZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bP:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eZ(J.I(a))
if(z==null)return!1
y=H.f1(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cT)return a
$.cT=!0
try{if(H.bP(a,b))return a
z=H.bR(b)
y=H.as(a,z)
throw H.f(y)}finally{$.cT=!1}},
cZ:function(a,b){if(a!=null&&!H.cW(a,b))H.r(H.as(a,H.bR(b)))
return a},
eT:function(a){var z
if(a instanceof H.u){z=H.eZ(J.I(a))
if(z!=null)return H.bR(z)
return"Closure"}return H.aU(a)},
kN:function(a){throw H.f(new P.fu(H.P(a)))},
f_:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aM:function(a){if(a==null)return
return a.$ti},
m2:function(a,b,c){return H.b5(a["$as"+H.j(c)],H.aM(b))},
bD:function(a,b,c,d){var z
H.P(c)
H.X(d)
z=H.b5(a["$as"+H.j(c)],H.aM(b))
return z==null?null:z[d]},
aG:function(a,b,c){var z
H.P(b)
H.X(c)
z=H.b5(a["$as"+H.j(b)],H.aM(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aM(a)
return z==null?null:z[b]},
bR:function(a){var z=H.aN(a,null)
return z},
aN:function(a,b){var z,y
H.y(b,"$isd",[P.m],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d1(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.ka(a,b)
if('futureOr' in a)return"FutureOr<"+H.aN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ka:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aN(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aN(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aN(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kq(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.P(z[l])
n=n+m+H.aN(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d1:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.m],"$asd")
if(a==null)return""
z=new P.bN("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aN(u,c)}v="<"+z.i(0)+">"
return v},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bC:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aM(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eW(H.b5(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.P(b)
H.bE(c)
H.P(d)
if(a==null)return a
z=H.bC(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d1(c,0,null)
throw H.f(H.as(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ah(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ah(a[y],b,c[y],d))return!1
return!0},
m0:function(a,b,c){return a.apply(b,H.b5(J.I(b)["$as"+H.j(c)],H.aM(b)))},
f2:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f2(z)}return!1},
cW:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f2(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bP(a,b)}y=J.I(a).constructor
x=H.aM(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ah(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cW(a,b))throw H.f(H.as(a,H.bR(b)))
return a},
ah:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.f1(a,b,c,d)
if('func' in a)return c.builtin$cls==="cr"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ah("type" in a?a.type:null,b,x,d)
else if(H.ah(a,b,x,d))return!0
else{if(!('$is'+"bc" in y.prototype))return!1
w=y.prototype["$as"+"bc"]
v=H.b5(w,z?a.slice(1):null)
return H.ah(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bR(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eW(H.b5(r,z),b,u,d)},
f1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ah(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ah(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ah(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ah(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kF(m,b,l,d)},
kF:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ah(c[w],d,a[w],b))return!1}return!0},
m1:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
kD:function(a){var z,y,x,w,v,u
z=H.P($.f0.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cg[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.P($.eV.$2(a,z))
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
return u.i}if(v==="+")return H.f4(a,x)
if(v==="*")throw H.f(P.et(z))
if(init.leafTags[z]===true){u=H.ch(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f4(a,x)},
f4:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ch:function(a){return J.d3(a,!1,null,!!a.$isA)},
kE:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ch(z)
else return J.d3(z,c,null,null)},
ky:function(){if(!0===$.d0)return
$.d0=!0
H.kz()},
kz:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.cg=Object.create(null)
H.ku()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f6.$1(v)
if(u!=null){t=H.kE(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ku:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b1(C.A,H.b1(C.F,H.b1(C.n,H.b1(C.n,H.b1(C.E,H.b1(C.B,H.b1(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f0=new H.kv(v)
$.eV=new H.kw(u)
$.f6=new H.kx(t)},
b1:function(a,b){return a(b)||b},
f7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hC:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.hC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
a0:function(a){var z,y,x
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
ar:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ei:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hn:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dM:function(a,b){return new H.hn(a,b==null?null:b.method)}}},
fT:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cx:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fT(a,y,z?null:b.receiver)}}},
iu:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kO:{"^":"u:14;a",
$1:function(a){if(!!J.I(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eK:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isal:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gdw:function(){return this},
$iscr:1,
gdw:function(){return this}},
e3:{"^":"u;"},
hZ:{"^":"e3;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ck:{"^":"e3;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gO:function(a){var z,y
z=this.c
if(z==null)y=H.bl(this.a)
else y=typeof z!=="object"?J.aP(z):H.bl(z)
return(y^H.bl(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
n:{
cl:function(a){return a.a},
da:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ck("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"W;a",
i:function(a){return this.a},
n:{
as:function(a,b){return new H.ii("TypeError: "+H.j(P.bX(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
fk:{"^":"W;a",
i:function(a){return this.a},
n:{
fl:function(a,b){return new H.fk("CastError: "+H.j(P.bX(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
hL:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hM:function(a){return new H.hL(a)}}},
aS:{"^":"h3;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gak:function(a){return new H.dF(this,[H.z(this,0)])},
cS:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cA(y,b)}else return this.fK(b)},
fK:function(a){var z=this.d
if(z==null)return!1
return this.c3(this.bv(z,J.aP(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.fL(b)},
fL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bv(z,J.aP(a)&0x3ffffff)
x=this.c3(y,a)
if(x<0)return
return y[x].b},
U:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cr(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cr(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.aP(b)&0x3ffffff
v=this.bv(x,w)
if(v==null)this.bH(x,w,[this.bD(b,c)])
else{u=this.c3(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.b8(this))
z=z.c}},
cr:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.b_(a,b)
if(z==null)this.bH(a,b,this.bD(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.fW(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
c3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dI(this)},
b_:function(a,b){return a[b]},
bv:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
e6:function(a,b){delete a[b]},
cA:function(a,b){return this.b_(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bH(z,"<non-identifier-key>",z)
this.e6(z,"<non-identifier-key>")
return z},
$isdE:1},
fW:{"^":"a;a,b,0c,0d"},
dF:{"^":"fB;a,$ti",
gk:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.fX(z,z.r,this.$ti)
y.c=z.e
return y}},
fX:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kv:{"^":"u:14;a",
$1:function(a){return this.a(a)}},
kw:{"^":"u:34;a",
$2:function(a,b){return this.a(a,b)}},
kx:{"^":"u:22;a",
$1:function(a){return this.a(H.P(a))}},
fR:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdO:1,
n:{
fS:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fK("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kq:function(a){return J.dy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
aJ:function(a,b,c){H.bE(b)
if(a>>>0!==a||a>=c)throw H.f(H.aL(b,a))},
k9:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kp(a,b,c))
return b},
hk:{"^":"n;",$islM:1,"%":"DataView;ArrayBufferView;cC|eE|eF|hj|eG|eH|aI"},
cC:{"^":"hk;",
gk:function(a){return a.length},
$isA:1,
$asA:I.cY},
hj:{"^":"eF;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
$asbY:function(){return[P.v]},
$ast:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aI:{"^":"eH;",
$asbY:function(){return[P.C]},
$ast:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]}},
lm:{"^":"aI;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ln:{"^":"aI;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lo:{"^":"aI;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lp:{"^":"aI;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lq:{"^":"aI;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lr:{"^":"aI;",
gk:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hl:{"^":"aI;",
gk:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
bl:function(a,b,c){return new Uint8Array(a.subarray(b,H.k9(b,c,a.length)))},
"%":";Uint8Array"},
eE:{"^":"cC+t;"},
eF:{"^":"eE+bY;"},
eG:{"^":"cC+t;"},
eH:{"^":"eG+bY;"}}],["","",,P,{"^":"",
iP:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.iR(z),1)).observe(y,{childList:true})
return new P.iQ(z,y,x)}else if(self.setImmediate!=null)return P.ki()
return P.kj()},
lQ:[function(a){self.scheduleImmediate(H.b2(new P.iS(H.b(a,{func:1,ret:-1})),0))},"$1","kh",4,0,11],
lR:[function(a){self.setImmediate(H.b2(new P.iT(H.b(a,{func:1,ret:-1})),0))},"$1","ki",4,0,11],
lS:[function(a){P.cJ(C.l,H.b(a,{func:1,ret:-1}))},"$1","kj",4,0,11],
cJ:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.W(a.a,1000)
return P.jO(z<0?0:z,b)},
e7:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aV]})
z=C.f.W(a.a,1000)
return P.jP(z<0?0:z,b)},
kd:function(a,b){if(H.bP(a,{func:1,args:[P.a,P.al]}))return b.h7(a,null,P.a,P.al)
if(H.bP(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kc:function(){var z,y
for(;z=$.b0,z!=null;){$.bA=null
y=z.b
$.b0=y
if(y==null)$.bz=null
z.a.$0()}},
m_:[function(){$.cU=!0
try{P.kc()}finally{$.bA=null
$.cU=!1
if($.b0!=null)$.$get$cQ().$1(P.eX())}},"$0","eX",0,0,3],
eS:function(a){var z=new P.ez(H.b(a,{func:1,ret:-1}))
if($.b0==null){$.bz=z
$.b0=z
if(!$.cU)$.$get$cQ().$1(P.eX())}else{$.bz.b=z
$.bz=z}},
kg:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.eS(a)
$.bA=$.bz
return}y=new P.ez(a)
x=$.bA
if(x==null){y.b=z
$.bA=y
$.b0=y}else{y.b=x.b
x.b=y
$.bA=y
if(y.b==null)$.bz=y}},
kJ:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.j===y){P.cc(null,null,C.j,a)
return}y.toString
P.cc(null,null,y,H.b(y.bN(a),z))},
e6:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.cJ(a,b)}return P.cJ(a,H.b(y.bN(b),z))},
id:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aV]}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.e7(a,b)}x=y.cP(b,P.aV)
$.N.toString
return P.e7(a,H.b(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.kg(new P.ke(z,e))},
eQ:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
eR:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kf:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cc:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bN(d):c.fp(d,-1)
P.eS(d)},
iR:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iQ:{"^":"u:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iS:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iT:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eN:{"^":"a;a,0b,c",
dU:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jR(this,b),0),a)
else throw H.f(P.af("`setTimeout()` not found."))},
dV:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.jQ(this,a,Date.now(),b),0),a)
else throw H.f(P.af("Periodic timer."))},
$isaV:1,
n:{
jO:function(a,b){var z=new P.eN(!0,0)
z.dU(a,b)
return z},
jP:function(a,b){var z=new P.eN(!1,0)
z.dV(a,b)
return z}}},
jR:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jQ:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dI(w,x)}z.c=y
this.d.$1(z)}},
b_:{"^":"a;0a,b,c,d,e,$ti",
fR:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.b(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
fI:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bP(z,{func:1,args:[P.a,P.al]}))return H.cZ(w.hd(z,a.a,a.b,null,y,P.al),x)
else return H.cZ(w.cc(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;cJ:a<,b,0eO:c<,$ti",
dt:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kd(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.N,[c])
w=b==null?1:3
this.cs(new P.b_(x,w,a,b,[z,c]))
return x},
hi:function(a,b){return this.dt(a,null,b)},
cs:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb_")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaE")
z=y.a
if(z<4){y.cs(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.b(new P.j6(this,a),{func:1,ret:-1}))}},
cF:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb_")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaE")
y=u.a
if(y<4){u.cF(a)
return}this.a=y
this.c=u.c}z.a=this.b0(a)
y=this.b
y.toString
P.cc(null,null,y,H.b(new P.jb(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.k(this.c,"$isb_")
this.c=null
return this.b0(z)},
b0:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cv:function(a){var z,y,x,w
z=H.z(this,0)
H.cZ(a,{futureOr:1,type:z})
y=this.$ti
x=H.bC(a,"$isbc",y,"$asbc")
if(x){z=H.bC(a,"$isaE",y,null)
if(z)P.eB(a,this)
else P.j7(a,this)}else{w=this.bF()
H.B(a,z)
this.a=4
this.c=a
P.bw(this,w)}},
br:[function(a,b){var z
H.k(b,"$isal")
z=this.bF()
this.a=8
this.c=new P.ab(a,b)
P.bw(this,z)},function(a){return this.br(a,null)},"hr","$2","$1","ge2",4,2,23],
$isbc:1,
n:{
j7:function(a,b){var z,y,x
b.a=1
try{a.dt(new P.j8(b),new P.j9(b),null)}catch(x){z=H.aO(x)
y=H.b4(x)
P.kJ(new P.ja(b,z,y))}},
eB:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaE")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bw(b,y)}else{y=H.k(b.c,"$isb_")
b.a=2
b.c=a
a.cF(y)}},
bw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bw(z.a,b)}y=z.a
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
if(p){H.k(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.je(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jd(x,b,r).$0()}else if((y&2)!==0)new P.jc(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.I(y).$isbc){if(y.a>=4){n=H.k(t.c,"$isb_")
t.c=null
b=t.b0(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eB(y,t)
return}}m=b.b
n=H.k(m.c,"$isb_")
m.c=null
b=m.b0(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
j6:{"^":"u:2;a,b",
$0:function(){P.bw(this.a,this.b)}},
jb:{"^":"u:2;a,b",
$0:function(){P.bw(this.b,this.a.a)}},
j8:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cv(a)}},
j9:{"^":"u:24;a",
$2:function(a,b){this.a.br(a,H.k(b,"$isal"))},
$1:function(a){return this.$2(a,null)}},
ja:{"^":"u:2;a,b,c",
$0:function(){this.a.br(this.b,this.c)}},
je:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dr(H.b(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b4(v)
if(this.d){w=H.k(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.I(z).$isbc){if(z instanceof P.aE&&z.gcJ()>=4){if(z.gcJ()===8){w=this.b
w.b=H.k(z.geO(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hi(new P.jf(t),null)
w.a=!1}}},
jf:{"^":"u:25;a",
$1:function(a){return this.a}},
jd:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cc(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b4(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
jc:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isab")
w=this.c
if(w.fR(z)&&w.e!=null){v=this.b
v.b=w.fI(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b4(u)
w=H.k(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
ez:{"^":"a;a,0b"},
cF:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aE(0,$.N,[P.C])
z.a=0
this.fP(new P.i1(z,this),!0,new P.i2(z,y),y.ge2())
return y}},
i1:{"^":"u;a,b",
$1:function(a){H.B(a,H.aG(this.b,"cF",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aG(this.b,"cF",0)]}}},
i2:{"^":"u:2;a,b",
$0:function(){this.b.cv(this.a.a)}},
e0:{"^":"a;$ti"},
i0:{"^":"a;"},
aV:{"^":"a;"},
ab:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isW:1},
jY:{"^":"a;",$islP:1},
ke:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jA:{"^":"jY;",
he:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.eQ(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b4(x)
P.cb(null,null,this,z,H.k(y,"$isal"))}},
hf:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.eR(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b4(x)
P.cb(null,null,this,z,H.k(y,"$isal"))}},
fp:function(a,b){return new P.jC(this,H.b(a,{func:1,ret:b}),b)},
bN:function(a){return new P.jB(this,H.b(a,{func:1,ret:-1}))},
cP:function(a,b){return new P.jD(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dr:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.eQ(null,null,this,a,b)},
cc:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.N===C.j)return a.$1(b)
return P.eR(null,null,this,a,b,c,d)},
hd:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.N===C.j)return a.$2(b,c)
return P.kf(null,null,this,a,b,c,d,e,f)},
h7:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jC:{"^":"u;a,b,c",
$0:function(){return this.a.dr(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jB:{"^":"u:3;a,b",
$0:function(){return this.a.he(this.b)}},
jD:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hf(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fZ:function(a,b,c){H.bE(a)
return H.y(H.kr(a,new H.aS(0,0,[b,c])),"$isdE",[b,c],"$asdE")},
fY:function(a,b){return new H.aS(0,0,[a,b])},
h_:function(a,b,c,d){return new P.jm(0,0,[d])},
fN:function(a,b,c){var z,y
if(P.cV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bB()
C.a.h(y,a)
try{P.kb(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e1(b,H.kC(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cs:function(a,b,c){var z,y,x
if(P.cV(a))return b+"..."+c
z=new P.bN(b)
y=$.$get$bB()
C.a.h(y,a)
try{x=z
x.a=P.e1(x.gap(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gap()+c
y=z.gap()
return y.charCodeAt(0)==0?y:y},
cV:function(a){var z,y
for(z=0;y=$.$get$bB(),z<y.length;++z)if(a===y[z])return!0
return!1},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gL(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gL(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL(z);++x
for(;z.B();t=s,s=r){r=z.gL(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dI:function(a){var z,y,x
z={}
if(P.cV(a))return"{...}"
y=new P.bN("")
try{C.a.h($.$get$bB(),a)
x=y
x.a=x.gap()+"{"
z.a=!0
J.fd(a,new P.h4(z,y))
z=y
z.a=z.gap()+"}"}finally{z=$.$get$bB()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gap()
return z.charCodeAt(0)==0?z:z},
jm:{"^":"jg;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.eD(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cS()
this.b=z}return this.ct(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cS()
this.c=y}return this.ct(y,b)}else return this.dW(0,b)},
dW:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.cS()
this.d=z}y=this.cw(b)
x=z[y]
if(x==null)z[y]=[this.bq(b)]
else{if(this.cD(x,b)>=0)return!1
x.push(this.bq(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cG(this.c,b)
else return this.eJ(0,b)},
eJ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e9(z,b)
x=this.cD(y,b)
if(x<0)return!1
this.cL(y.splice(x,1)[0])
return!0},
ct:function(a,b){H.B(b,H.z(this,0))
if(H.k(a[b],"$iscR")!=null)return!1
a[b]=this.bq(b)
return!0},
cG:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscR")
if(z==null)return!1
this.cL(z)
delete a[b]
return!0},
cu:function(){this.r=this.r+1&67108863},
bq:function(a){var z,y
z=new P.cR(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cu()
return z},
cL:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cu()},
cw:function(a){return J.aP(a)&0x3ffffff},
e9:function(a,b){return a[this.cw(b)]},
cD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
n:{
cS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cR:{"^":"a;a,0b,0c"},
jn:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eD:function(a,b,c){var z=new P.jn(a,b,[c])
z.c=a.e
return z}}},
jg:{"^":"hN;"},
c3:{"^":"jo;",$ish:1,$isd:1},
t:{"^":"a;$ti",
gS:function(a){return new H.dG(a,this.gk(a),0,[H.bD(this,a,"t",0)])},
A:function(a,b){return this.j(a,b)},
hl:function(a,b){var z,y,x
z=H.c([],[H.bD(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.U(z,y,this.j(a,y));++y}return z},
hk:function(a){return this.hl(a,!0)},
i:function(a){return P.cs(a,"[","]")}},
h3:{"^":"aa;"},
h4:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aa:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bD(this,a,"aa",0),H.bD(this,a,"aa",1)]})
for(z=J.bF(this.gak(a));z.B();){y=z.gL(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b6(this.gak(a))},
i:function(a){return P.dI(a)},
$isa1:1},
hP:{"^":"a;$ti",
i:function(a){return P.cs(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d7("index"))
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(z=P.eD(this,this.r,H.z(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
$ish:1},
hN:{"^":"hP;"},
jo:{"^":"a+t;"}}],["","",,P,{"^":"",co:{"^":"a;$ti"},dk:{"^":"i0;$ti"},fD:{"^":"co;",
$asco:function(){return[P.m,[P.d,P.C]]}},iB:{"^":"fD;a"},iC:{"^":"dk;",
fv:function(a,b,c){var z,y,x,w
z=a.length
P.dT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jX(0,0,x)
if(w.e8(a,b,z)!==z)w.cM(C.h.bS(a,z-1),0)
return C.I.bl(x,0,w.b)},
fu:function(a){return this.fv(a,0,null)},
$asdk:function(){return[P.m,[P.d,P.C]]}},jX:{"^":"a;a,b,c",
cM:function(a,b){var z,y,x,w,v
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
e8:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bS(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aZ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cM(w,C.h.aZ(a,u)))x=u}else if(w<=2047){v=this.b
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
fF:function(a){var z=J.I(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aU(a)+"'"},
h0:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fP(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.U(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
h1:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gS(a);x.B();)C.a.h(y,H.B(x.gL(x),c))
if(b)return y
return H.y(J.bf(y),"$isd",z,"$asd")},
cG:function(a,b,c){var z,y
z=P.C
H.y(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.y(a,"$isaR",[z],"$asaR")
y=a.length
c=P.dT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a3()
z=c<y}else z=!0
return H.dS(z?C.a.bl(a,b,c):a)}return P.i3(a,b,c)},
i3:function(a,b,c){var z,y,x
H.y(a,"$ish",[P.C],"$ash")
z=J.bF(a)
for(y=0;y<b;++y)if(!z.B())throw H.f(P.ac(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gL(z))
return H.dS(x)},
hE:function(a,b,c){return new H.fR(a,H.fS(a,!1,!0,!1))},
jW:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isd",[P.C],"$asd")
if(c===C.q){z=$.$get$eP().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fu(H.B(b,H.aG(c,"co",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hz(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fF(a)},
q:function(a){return new P.eA(a)},
d5:function(a){H.kH(a)},
a9:{"^":"a;"},
"+bool":0,
ai:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&this.b===b.b},
gO:function(a){var z=this.a
return(z^C.f.b1(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fv(H.hy(this))
y=P.bG(H.hw(this))
x=P.bG(H.hs(this))
w=P.bG(H.ht(this))
v=P.bG(H.hv(this))
u=P.bG(H.hx(this))
t=P.fw(H.hu(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fv:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"V;"},
"+double":0,
ba:{"^":"a;a",
a3:function(a,b){return C.f.a3(this.a,H.k(b,"$isba").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gO:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fA()
y=this.a
if(y<0)return"-"+new P.ba(0-y).i(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.fz().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
du:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fz:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fA:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
dN:{"^":"W;",
i:function(a){return"Throw of null."}},
at:{"^":"W;a,b,c,d",
gbt:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbs:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbt()+y+x
if(!this.a)return w
v=this.gbs()
u=P.bX(this.b)
return w+v+": "+H.j(u)},
n:{
ff:function(a){return new P.at(!1,null,null,a)},
bS:function(a,b,c){return new P.at(!0,a,b,c)},
d7:function(a){return new P.at(!1,null,a,"Must not be null")}}},
c5:{"^":"at;e,f,a,b,c,d",
gbt:function(){return"RangeError"},
gbs:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c6:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
dT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.f(P.ac(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.f(P.ac(b,a,c,"end",f))
return b}return c}}},
fM:{"^":"at;e,k:f>,a,b,c,d",
gbt:function(){return"RangeError"},
gbs:function(){if(J.fa(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
M:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b6(b))
return new P.fM(b,z,!0,a,c,"Index out of range")}}},
iw:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
af:function(a){return new P.iw(a)}}},
it:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
et:function(a){return new P.it(a)}}},
hY:{"^":"W;a",
i:function(a){return"Bad state: "+this.a}},
fr:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bX(z))+"."},
n:{
b8:function(a){return new P.fr(a)}}},
ho:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
dZ:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fu:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eA:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fK:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bm(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"V;"},
"+int":0,
h:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gS(this)
for(y=0;z.B();)++y
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d7("index"))
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.B();){x=z.gL(z)
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
i:function(a){return P.fN(this,"(",")")}},
ct:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
a1:{"^":"a;$ti"},
G:{"^":"a;",
gO:function(a){return P.a.prototype.gO.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gO:function(a){return H.bl(this)},
i:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.i(this)}},
al:{"^":"a;"},
m:{"^":"a;",$isdO:1},
"+String":0,
bN:{"^":"a;ap:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e1:function(a,b,c){var z=J.bF(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gL(z))
while(z.B())}else{a+=H.j(z.gL(z))
for(;z.B();)a=a+c+H.j(z.gL(z))}return a}}}}],["","",,W,{"^":"",
cn:function(a,b){var z=document.createElement("canvas")
return z},
fC:function(a){H.k(a,"$isa5")
return"wheel"},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eC:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eU:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.cP(a,b)},
be:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kQ:{"^":"n;0k:length=","%":"AccessibleNodeList"},
kR:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kS:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fj:{"^":"n;","%":";Blob"},
cm:{"^":"be;",
bk:function(a,b,c){if(c!=null)return a.getContext(b,P.kl(c,null))
return a.getContext(b)},
dz:function(a,b){return this.bk(a,b,null)},
$iscm:1,
"%":"HTMLCanvasElement"},
df:{"^":"n;",$isdf:1,"%":"CanvasRenderingContext2D"},
kY:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l_:{"^":"ft;0k:length=","%":"CSSPerspective"},
b9:{"^":"n;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l0:{"^":"iX;0k:length=",
dA:function(a,b){var z=a.getPropertyValue(this.e_(a,b))
return z==null?"":z},
e_:function(a,b){var z,y
z=$.$get$dl()
y=z[b]
if(typeof y==="string")return y
y=this.eX(a,b)
z[b]=y
return y},
eX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fx()+b
if(z in a)return z
return b},
gbO:function(a){return a.bottom},
gac:function(a){return a.height},
gaD:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gae:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fs:{"^":"a;",
gaD:function(a){return this.dA(a,"left")}},
dm:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ft:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l1:{"^":"dm;0k:length=","%":"CSSTransformValue"},
l2:{"^":"dm;0k:length=","%":"CSSUnparsedValue"},
l3:{"^":"n;0k:length=","%":"DataTransferItemList"},
l4:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
l5:{"^":"iZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a8,P.V]]},
$ast:function(){return[[P.a8,P.V]]},
$ish:1,
$ash:function(){return[[P.a8,P.V]]},
$isd:1,
$asd:function(){return[[P.a8,P.V]]},
$asw:function(){return[[P.a8,P.V]]},
"%":"ClientRectList|DOMRectList"},
fy:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gae(a))+" x "+H.j(this.gac(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaD(b)&&a.top===z.gaU(b)&&this.gae(a)===z.gae(b)&&this.gac(a)===z.gac(b)},
gO:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF)},
gbO:function(a){return a.bottom},
gac:function(a){return a.height},
gaD:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gae:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.V]},
"%":";DOMRectReadOnly"},
l6:{"^":"j0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.m]},
$ast:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$asw:function(){return[P.m]},
"%":"DOMStringList"},
l7:{"^":"n;0k:length=","%":"DOMTokenList"},
iW:{"^":"c3;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.hk(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
a_:{"^":"J;",
gcQ:function(a){return new W.iW(a,a.children)},
gcR:function(a){return P.hB(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a4:{"^":"n;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a5:{"^":"n;",
cN:["dE",function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(c!=null)this.dX(a,b,c,!1)}],
dX:function(a,b,c,d){return a.addEventListener(b,H.b2(H.b(c,{func:1,args:[W.a4]}),1),!1)},
$isa5:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eI|eJ|eL|eM"},
bb:{"^":"fj;",$isbb:1,"%":"File"},
l8:{"^":"j5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$ast:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asw:function(){return[W.bb]},
"%":"FileList"},
l9:{"^":"a5;0k:length=","%":"FileWriter"},
la:{"^":"be;0k:length=","%":"HTMLFormElement"},
bd:{"^":"n;",$isbd:1,"%":"Gamepad"},
lb:{"^":"n;0k:length=","%":"History"},
lc:{"^":"ji;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bZ:{"^":"n;0cT:data=",$isbZ:1,"%":"ImageData"},
dx:{"^":"be;",$isdx:1,"%":"HTMLImageElement"},
bg:{"^":"cK;",$isbg:1,"%":"KeyboardEvent"},
lg:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lh:{"^":"n;0k:length=","%":"MediaList"},
li:{"^":"a5;",
cN:function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.dE(a,b,c,!1)},
"%":"MessagePort"},
lj:{"^":"jp;",
j:function(a,b){return P.aF(a.get(H.P(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gak:function(a){var z=H.c([],[P.m])
this.J(a,new W.hg(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hg:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lk:{"^":"jq;",
j:function(a,b){return P.aF(a.get(H.P(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gak:function(a){var z=H.c([],[P.m])
this.J(a,new W.hh(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hh:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"n;",$isbh:1,"%":"MimeType"},
ll:{"^":"js;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asw:function(){return[W.bh]},
"%":"MimeTypeArray"},
ak:{"^":"cK;",$isak:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iV:{"^":"c3;a",
gS:function(a){var z=this.a.childNodes
return new W.dv(z,z.length,-1,[H.bD(C.J,z,"w",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a5;",
i:function(a){var z=a.nodeValue
return z==null?this.dF(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hm:{"^":"ju;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bk:{"^":"n;0k:length=",$isbk:1,"%":"Plugin"},
lu:{"^":"jy;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asw:function(){return[W.bk]},
"%":"PluginArray"},
lw:{"^":"jE;",
j:function(a,b){return P.aF(a.get(H.P(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gak:function(a){var z=H.c([],[P.m])
this.J(a,new W.hK(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hK:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ly:{"^":"be;0k:length=","%":"HTMLSelectElement"},
bm:{"^":"a5;",$isbm:1,"%":"SourceBuffer"},
lz:{"^":"eJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"n;",$isbn:1,"%":"SpeechGrammar"},
lA:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"n;0k:length=",$isbo:1,"%":"SpeechRecognitionResult"},
lC:{"^":"jJ;",
j:function(a,b){return a.getItem(H.P(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gak:function(a){var z=H.c([],[P.m])
this.J(a,new W.i_(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.m,P.m]},
$isa1:1,
$asa1:function(){return[P.m,P.m]},
"%":"Storage"},
i_:{"^":"u:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"n;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"a5;",$isbq:1,"%":"TextTrack"},
br:{"^":"a5;",$isbr:1,"%":"TextTrackCue|VTTCue"},
lG:{"^":"jN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$ast:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asw:function(){return[W.br]},
"%":"TextTrackCueList"},
lH:{"^":"eM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"TextTrackList"},
lI:{"^":"n;0k:length=","%":"TimeRanges"},
bs:{"^":"n;",$isbs:1,"%":"Touch"},
aW:{"^":"cK;",$isaW:1,"%":"TouchEvent"},
lJ:{"^":"jT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asw:function(){return[W.bs]},
"%":"TouchList"},
lK:{"^":"n;0k:length=","%":"TrackDefaultList"},
cK:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lN:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
lO:{"^":"a5;0k:length=","%":"VideoTrackList"},
bv:{"^":"ak;",
gfB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.af("deltaY is not supported"))},
gfA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.af("deltaX is not supported"))},
$isbv:1,
"%":"WheelEvent"},
iO:{"^":"a5;",
eK:function(a,b){return a.requestAnimationFrame(H.b2(H.b(b,{func:1,ret:-1,args:[P.V]}),1))},
e7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lT:{"^":"k_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b9]},
$ast:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asw:function(){return[W.b9]},
"%":"CSSRuleList"},
lU:{"^":"fy;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bC(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaD(b)&&a.top===z.gaU(b)&&a.width===z.gae(b)&&a.height===z.gac(b)},
gO:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gac:function(a){return a.height},
gae:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lW:{"^":"k1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asw:function(){return[W.bd]},
"%":"GamepadList"},
lX:{"^":"k3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lY:{"^":"k5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
lZ:{"^":"k7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"StyleSheetList"},
j1:{"^":"cF;a,b,c,$ti",
fP:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
lV:{"^":"j1;a,b,c,$ti"},
j2:{"^":"e0;a,b,c,d,e,$ti",
f0:function(){var z=this.d
if(z!=null&&this.a<=0)J.fc(this.b,this.c,z,!1)},
n:{
U:function(a,b,c,d,e){var z=c==null?null:W.eU(new W.j3(c),W.a4)
z=new W.j2(0,a,b,z,!1,[e])
z.f0()
return z}}},
j3:{"^":"u:6;a",
$1:function(a){return this.a.$1(H.k(a,"$isa4"))}},
w:{"^":"a;$ti",
gS:function(a){return new W.dv(a,this.gk(a),-1,[H.bD(this,a,"w",0)])}},
dv:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fb(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
iX:{"^":"n+fs;"},
iY:{"^":"n+t;"},
iZ:{"^":"iY+w;"},
j_:{"^":"n+t;"},
j0:{"^":"j_+w;"},
j4:{"^":"n+t;"},
j5:{"^":"j4+w;"},
jh:{"^":"n+t;"},
ji:{"^":"jh+w;"},
jp:{"^":"n+aa;"},
jq:{"^":"n+aa;"},
jr:{"^":"n+t;"},
js:{"^":"jr+w;"},
jt:{"^":"n+t;"},
ju:{"^":"jt+w;"},
jx:{"^":"n+t;"},
jy:{"^":"jx+w;"},
jE:{"^":"n+aa;"},
eI:{"^":"a5+t;"},
eJ:{"^":"eI+w;"},
jF:{"^":"n+t;"},
jG:{"^":"jF+w;"},
jJ:{"^":"n+aa;"},
jM:{"^":"n+t;"},
jN:{"^":"jM+w;"},
eL:{"^":"a5+t;"},
eM:{"^":"eL+w;"},
jS:{"^":"n+t;"},
jT:{"^":"jS+w;"},
jZ:{"^":"n+t;"},
k_:{"^":"jZ+w;"},
k0:{"^":"n+t;"},
k1:{"^":"k0+w;"},
k2:{"^":"n+t;"},
k3:{"^":"k2+w;"},
k4:{"^":"n+t;"},
k5:{"^":"k4+w;"},
k6:{"^":"n+t;"},
k7:{"^":"k6+w;"}}],["","",,P,{"^":"",
ko:function(a){var z,y
z=J.I(a)
if(!!z.$isbZ){y=z.gcT(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eO(a.data,a.height,a.width)},
kn:function(a){if(a instanceof P.eO)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.fY(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.P(y[w])
z.U(0,v,a[v])}return z},
kl:function(a,b){var z={}
a.J(0,new P.km(z))
return z},
dt:function(){var z=$.ds
if(z==null){z=J.ci(window.navigator.userAgent,"Opera",0)
$.ds=z}return z},
fx:function(){var z,y
z=$.dp
if(z!=null)return z
y=$.dq
if(y==null){y=J.ci(window.navigator.userAgent,"Firefox",0)
$.dq=y}if(y)z="-moz-"
else{y=$.dr
if(y==null){y=!P.dt()&&J.ci(window.navigator.userAgent,"Trident/",0)
$.dr=y}if(y)z="-ms-"
else z=P.dt()?"-o-":"-webkit-"}$.dp=z
return z},
eO:{"^":"a;cT:a>,b,c",$isbZ:1},
km:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fH:{"^":"c3;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.aG(z,"t",0)
x=W.a_
return new H.h5(new H.iM(z,H.b(new P.fI(),{func:1,ret:P.a9,args:[y]}),[y]),H.b(new P.fJ(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b6(this.gbx().a)},
j:function(a,b){var z=this.gbx()
return z.b.$1(J.d6(z.a,b))},
gS:function(a){var z=P.h1(this.gbx(),!1,W.a_)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
fI:{"^":"u:27;",
$1:function(a){return!!J.I(H.k(a,"$isJ")).$isa_}},
fJ:{"^":"u:28;",
$1:function(a){return H.e(H.k(a,"$isJ"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jz:{"^":"a;$ti",
gaR:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.B(z+this.c,H.z(this,0))},
gbO:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bC(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=this.a
y=J.ce(b)
x=y.gaD(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaU(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gaR(b)){if(typeof x!=="number")return x.C()
z=H.B(x+this.d,w)===y.gbO(b)}else z=!1}else z=!1}else z=!1
return z},
gO:function(a){var z,y,x,w,v
z=this.a
y=J.aP(z)
x=this.b
w=J.aP(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.B(x+this.d,v)
return P.jj(P.c9(P.c9(P.c9(P.c9(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"jz;aD:a>,aU:b>,ae:c>,ac:d>,$ti",n:{
hB:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a3()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.a3()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bJ:{"^":"n;",$isbJ:1,"%":"SVGLength"},lf:{"^":"jl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bJ]},
$ish:1,
$ash:function(){return[P.bJ]},
$isd:1,
$asd:function(){return[P.bJ]},
$asw:function(){return[P.bJ]},
"%":"SVGLengthList"},bM:{"^":"n;",$isbM:1,"%":"SVGNumber"},ls:{"^":"jw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asw:function(){return[P.bM]},
"%":"SVGNumberList"},lv:{"^":"n;0k:length=","%":"SVGPointList"},lD:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$ast:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$asw:function(){return[P.m]},
"%":"SVGStringList"},lE:{"^":"a_;",
gcQ:function(a){return new P.fH(a,new W.iV(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bO:{"^":"n;",$isbO:1,"%":"SVGTransform"},lL:{"^":"jV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bO]},
$ish:1,
$ash:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asw:function(){return[P.bO]},
"%":"SVGTransformList"},jk:{"^":"n+t;"},jl:{"^":"jk+w;"},jv:{"^":"n+t;"},jw:{"^":"jv+w;"},jK:{"^":"n+t;"},jL:{"^":"jK+w;"},jU:{"^":"n+t;"},jV:{"^":"jU+w;"}}],["","",,P,{"^":"",kT:{"^":"n;0k:length=","%":"AudioBuffer"},kU:{"^":"iU;",
j:function(a,b){return P.aF(a.get(H.P(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gak:function(a){var z=H.c([],[P.m])
this.J(a,new P.fh(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"AudioParamMap"},fh:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},kV:{"^":"a5;0k:length=","%":"AudioTrackList"},fi:{"^":"a5;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lt:{"^":"fi;0k:length=","%":"OfflineAudioContext"},iU:{"^":"n+aa;"}}],["","",,P,{"^":"",cE:{"^":"n;",
hh:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbZ)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kn(g))
return}if(!!z.$isdx)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.ff("Incorrect number or type of arguments"))},
hg:function(a,b,c,d,e,f,g){return this.hh(a,b,c,d,e,f,g,null,null,null)},
$iscE:1,
"%":"WebGLRenderingContext"},i4:{"^":"n;",$isi4:1,"%":"WebGLTexture"},ir:{"^":"n;",$isir:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lB:{"^":"jI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aF(a.item(b))},
A:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a1,,,]]},
$ish:1,
$ash:function(){return[[P.a1,,,]]},
$isd:1,
$asd:function(){return[[P.a1,,,]]},
$asw:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jH:{"^":"n+t;"},jI:{"^":"jH+w;"}}],["","",,O,{"^":"",au:{"^":"a;0a,0b,0c,0d,$ti",
bo:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cj:function(a,b,c){var z=H.aG(this,"au",0)
H.b(b,{func:1,ret:P.a9,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.C,[P.h,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aX:function(a,b){return this.cj(a,null,b)},
eC:function(a){var z
H.y(a,"$ish",[H.aG(this,"au",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dO:function(a,b){var z
H.y(b,"$ish",[H.aG(this,"au",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aG(this,"au",0)
H.B(b,z)
z=[z]
if(this.eC(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dO(x,H.c([b],z))}},
$ish:1,
n:{
cp:function(a){var z=new O.au([a])
z.bo(a)
return z}}},cA:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
dP:function(a){var z=this.b
if(!(z==null))z.u(a)},
am:function(){return this.dP(null)},
gN:function(a){var z=this.a
if(z.length>0)return C.a.gc4(z)
else return V.bL()},
dn:function(a){var z=this.a
if(a==null)C.a.h(z,V.bL())
else C.a.h(z,a)
this.am()},
cb:function(){var z=this.a
if(z.length>0){z.pop()
this.am()}}}}],["","",,E,{"^":"",cj:{"^":"a;"},aH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0V:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sck:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdl(),{func:1,ret:-1,args:[D.o]})
C.a.T(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdl(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.dX])
w.b=!0
this.a6(w)}},
saN:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdk(),{func:1,ret:-1,args:[D.o]})
C.a.T(y.a,x)}if(a!=null){y=a.gq()
y.toString
x=H.b(this.gdk(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.a6])
w.b=!0
this.a6(w)}},
ad:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aG(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.ao])
w.b=!0
this.a6(w)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ad(0,b)},
aE:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gN(z))
else C.a.h(z.a,y.l(0,z.gN(z)))
z.am()
a.dq(this.f)
z=a.dy
x=(z&&C.a).gc4(z)
if(x!=null&&this.d!=null)x.h9(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.B();)z.d.aE(a)
a.dm()
a.dx.cb()},
gq:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.u(a)},
X:function(){return this.a6(null)},
fY:[function(a){H.k(a,"$iso")
this.e=null
this.a6(a)},function(){return this.fY(null)},"i5","$1","$0","gdl",0,2,0],
fX:[function(a){this.a6(H.k(a,"$iso"))},function(){return this.fX(null)},"i4","$1","$0","gdk",0,2,0],
fV:[function(a){this.a6(H.k(a,"$iso"))},function(){return this.fV(null)},"i2","$1","$0","gdj",0,2,0],
i1:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.aH],"$ash")
for(z=b.length,y=this.gdj(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.aQ()
t.a=H.c([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.X()},"$2","gfU",8,0,7],
i3:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.aH],"$ash")
for(z=b.length,y=this.gdj(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.aQ()
t.a=H.c([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.b(y,x)
C.a.T(t.a,y)}}this.X()},"$2","gfW",8,0,7],
$isav:1},hF:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dK:function(a,b){var z,y,x,w,v
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
z=new O.cA()
y=[V.ao]
z.a=H.c([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.b(new E.hH(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cA()
z.a=H.c([],y)
v=z.gq()
v.toString
x=H.b(new E.hI(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cA()
z.a=H.c([],y)
y=z.gq()
y.toString
w=H.b(new E.hJ(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.cH])
this.dy=z
C.a.h(z,null)
this.fr=new H.aS(0,0,[P.m,A.dW])},
gh6:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gN(z)
y=this.db
y=z.l(0,y.gN(y))
this.z=y
z=y}return z},
dq:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc4(z):a;(z&&C.a).h(z,y)},
dm:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hG:function(a,b){var z=new E.hF(a,b)
z.dK(a,b)
return z}}},hH:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$iso")
z=this.a
z.z=null
z.ch=null}},hI:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hJ:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},ia:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0V:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
dR:[function(a){var z
H.k(a,"$iso")
z=this.x
if(!(z==null))z.u(a)
this.hb()},function(){return this.dR(null)},"dQ","$1","$0","gcp",0,2,0],
gfH:function(){var z,y,x
z=Date.now()
y=C.f.W(P.du(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ai(z,!1)
return x/y},
cH:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.c2(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c2(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.e6(C.l,this.gha())},
hb:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.ic(this),{func:1,ret:-1,args:[P.V]})
C.t.e7(z)
C.t.eK(z,W.eU(y,P.V))}},"$0","gha",0,0,3],
h8:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cH()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.du(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.am()
w=x.db
C.a.sk(w.a,0)
w.am()
w=x.dx
C.a.sk(w.a,0)
w.am()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aE(this.e)}}catch(v){z=H.aO(v)
y=H.b4(v)
P.d5("Error: "+H.j(z))
P.d5("Stack: "+H.j(y))
throw H.f(z)}},
n:{
ib:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscm)return E.e5(a,!0,!0,!0,!1)
y=W.cn(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcQ(a).h(0,y)
w=E.e5(y,!0,!0,!0,!1)
w.a=a
return w},
e5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ia()
y=P.fZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.bk(a,"webgl",y)
x=H.k(x==null?C.k.bk(a,"experimental-webgl",y):x,"$iscE")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hG(x,a)
w=new T.i5(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ix(a)
v=new X.fU()
v.c=new X.aq(!1,!1,!1)
v.d=P.h_(null,null,null,P.C)
w.b=v
v=new X.hi(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h2(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.e0,P.a]])
w.z=v
u=document
t=W.ak
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.b(w.geo(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.b(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.b(w.gel(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.b(w.geu(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.b(w.ges(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.b(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.b(w.gez(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.b(w.gey(),s),!1,t))
p=w.z
o=W.bv;(p&&C.a).h(p,W.U(a,H.P(W.fC(a)),H.b(w.geA(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.b(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.b(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.b(w.geB(),q),!1,r))
r=w.z
q=W.aW
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.b(w.geI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.b(w.geG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.b(w.geH(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ai(Date.now(),!1)
z.ch=0
z.cH()
return z}}},ic:{"^":"u:29;a",
$1:function(a){var z
H.kG(a)
z=this.a
if(z.z){z.z=!1
z.h8()}}}}],["","",,Z,{"^":"",ey:{"^":"a;a,b",n:{
cP:function(a,b,c){var z
H.y(c,"$isd",[P.C],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.ey(b,z)}}},db:{"^":"cj;a,b,c,d,e",
bM:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aO(y)
x=P.q('Failed to bind buffer attribute "'+J.a3(this.a)+'": '+H.j(z))
throw H.f(x)}},
i:function(a){return"["+J.a3(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iL:{"^":"a;a",$iskW:1},dc:{"^":"a;a,0b,c,d",
aC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bM:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bM(a)},
hn:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aE:function(a){var z,y,x,w,v
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
z=[P.m]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a3(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islF:1},c_:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aU(this.c)+"'")+"]"}},aY:{"^":"a;a",
gcl:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=4
if((z&$.$get$aZ().a)!==0)++y
return(z&$.$get$ay().a)!==0?y+4:y},
fo:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ex()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.m])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
n:{
ag:function(a){return new Z.aY(a)}}}}],["","",,D,{"^":"",dg:{"^":"a;"},aQ:{"^":"a;0a,0b,0c",
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fG(z))
return x!==0},
fD:function(){return this.u(null)},
hc:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.u(y)}}},
al:function(a){return this.hc(a,!0,!1)},
n:{
F:function(){var z=new D.aQ()
z.a=H.c([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},fG:{"^":"u:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"a;a,0b"},c0:{"^":"o;c,d,a,0b,$ti"},c1:{"^":"o;c,d,a,0b,$ti"},H:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dd:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"kX<"}},dC:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dD:{"^":"o;c,a,0b"},fU:{"^":"a;0a,0b,0c,0d",
h3:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dD(a,this)
y.b=!0
return z.u(y)},
h_:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dD(a,this)
y.b=!0
return z.u(y)}},dH:{"^":"c4;x,y,c,d,e,a,0b"},h2:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ah:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gaw()
s=new X.bi(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ca:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.ah(a,b))
return!0},
aP:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dC()
if(typeof z!=="number")return z.dv()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.ah(a,b))
return!0},
aO:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.ah(a,b))
return!0},
h4:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cB(new V.O(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.u(w)
return!0},
ew:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.dH(c,a,this.a.gaw(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.R(0,0)}},aq:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aq))return!1
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
return z+(this.c?"Shift+":"")}},bi:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},hi:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bu:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gaw()
x=new X.bi(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ca:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bu(a,b,!0))
return!0},
aP:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dC()
if(typeof z!=="number")return z.dv()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bu(a,b,!0))
return!0},
aO:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bu(a,b,!1))
return!0},
h5:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cB(new V.O(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.u(x)
return!0},
gcU:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gbj:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gdi:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},cB:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"o;"},ea:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ah:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.R],"$asd")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaw()
w=new X.ea(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h2:function(a){var z
H.y(a,"$isd",[V.R],"$asd")
z=this.b
if(z==null)return!1
z.u(this.ah(a,!0))
return!0},
h0:function(a){var z
H.y(a,"$isd",[V.R],"$asd")
z=this.c
if(z==null)return!1
z.u(this.ah(a,!0))
return!0},
h1:function(a){var z
H.y(a,"$isd",[V.R],"$asd")
z=this.d
if(z==null)return!1
z.u(this.ah(a,!1))
return!0}},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaw:function(){var z=this.a
return V.dV(0,0,(z&&C.k).gcR(z).c,C.k.gcR(z).d)},
cB:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.aq(y,a.altKey,a.shiftKey))},
au:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
bI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
ai:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.R(y-w,x-v)},
aI:function(a){return new V.O(a.movementX,a.movementY)},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.a7(u.pageX)
C.i.a7(u.pageY)
s=z.left
C.i.a7(u.pageX)
C.a.h(y,new V.R(t-s,C.i.a7(u.pageY)-z.top))}return y},
af:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dd(z,new X.aq(y,a.altKey,a.shiftKey))},
by:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.E()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hG:[function(a){this.f=!0},"$1","ger",4,0,6],
hA:[function(a){this.f=!1},"$1","gel",4,0,6],
hD:[function(a){H.k(a,"$isak")
if(this.f&&this.by(a))a.preventDefault()},"$1","geo",4,0,4],
hI:[function(a){var z
H.k(a,"$isbg")
if(!this.f)return
z=this.cB(a)
if(this.b.h3(z))a.preventDefault()},"$1","geu",4,0,16],
hH:[function(a){var z
H.k(a,"$isbg")
if(!this.f)return
z=this.cB(a)
if(this.b.h_(z))a.preventDefault()},"$1","ges",4,0,16],
hK:[function(a){var z,y,x,w
H.k(a,"$isak")
z=this.a
z.focus()
this.f=!0
this.au(a)
if(this.x){y=this.af(a)
x=this.aI(a)
if(this.d.ca(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.af(a)
w=this.ai(a)
if(this.c.ca(y,w))a.preventDefault()},"$1","gex",4,0,4],
hM:[function(a){var z,y,x
H.k(a,"$isak")
this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","gez",4,0,4],
hF:[function(a){var z,y,x
H.k(a,"$isak")
if(!this.by(a)){this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aP(z,x))a.preventDefault()}},"$1","geq",4,0,4],
hL:[function(a){var z,y,x
H.k(a,"$isak")
this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","gey",4,0,4],
hE:[function(a){var z,y,x
H.k(a,"$isak")
if(!this.by(a)){this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aO(z,x))a.preventDefault()}},"$1","gep",4,0,4],
hN:[function(a){var z,y
H.k(a,"$isbv")
this.au(a)
z=new V.O((a&&C.r).gfA(a),C.r.gfB(a)).v(0,180)
if(this.x){if(this.d.h4(z))a.preventDefault()
return}if(this.r)return
y=this.ai(a)
if(this.c.h5(z,y))a.preventDefault()},"$1","geA",4,0,37],
hO:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.af(this.y)
v=this.ai(this.y)
this.d.ew(w,v,x)}},"$1","geB",4,0,6],
hU:[function(a){var z
H.k(a,"$isaW")
this.a.focus()
this.f=!0
this.bI(a)
z=this.bE(a)
if(this.e.h2(z))a.preventDefault()},"$1","geI",4,0,10],
hS:[function(a){var z
H.k(a,"$isaW")
this.bI(a)
z=this.bE(a)
if(this.e.h0(z))a.preventDefault()},"$1","geG",4,0,10],
hT:[function(a){var z
H.k(a,"$isaW")
this.bI(a)
z=this.bE(a)
if(this.e.h1(z))a.preventDefault()},"$1","geH",4,0,10]}}],["","",,D,{"^":"",bW:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
an:[function(a){var z
H.k(a,"$iso")
z=this.d
if(!(z==null))z.u(a)},function(){return this.an(null)},"ho","$1","$0","gdS",0,2,0],
$isT:1,
$isav:1},T:{"^":"a;",$isav:1},fV:{"^":"au;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
an:function(a){var z=this.Q
if(!(z==null))z.u(a)},
ev:[function(a){var z
H.k(a,"$iso")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.ev(null)},"hJ","$1","$0","gcE",0,2,0],
hP:[function(a){var z,y,x
H.y(a,"$ish",[D.T],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.e3(x))return!1}return!0},"$1","geD",4,0,33],
hx:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcE(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isT")
if(t instanceof D.bW)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aQ()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.an(z)},"$2","gei",8,0,17],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcE(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isT")
if(t instanceof D.bW)C.a.T(this.e,t)
s=t.d
if(s==null){s=new D.aQ()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.T(s.a,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.an(z)},"$2","geF",8,0,17],
e3:function(a){var z=C.a.aK(this.e,a)
return z},
$ash:function(){return[D.T]},
$asau:function(){return[D.T]}},hr:{"^":"a;",$isT:1,$isav:1},hX:{"^":"a;",$isT:1,$isav:1},i7:{"^":"a;",$isT:1,$isav:1},i8:{"^":"a;",$isT:1,$isav:1},i9:{"^":"a;",$isT:1,$isav:1}}],["","",,V,{"^":"",
kZ:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hf",8,0,32],
kP:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dB(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a1("null",c)
return C.h.a1(C.i.du($.l.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isd",[P.v],"$asd")
z=H.c([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.U(z,u,C.h.a1(z[u],x))}return z},
d4:function(a,b){return C.i.hj(Math.pow(b,C.y.c2(Math.log(H.kk(a))/Math.log(b))))},
Z:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bU:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dK:{"^":"a;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
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
z=[P.v]
y=V.b3(H.c([this.a,this.d,this.r],z),3,0)
x=V.b3(H.c([this.b,this.e,this.x],z),3,0)
w=V.b3(H.c([this.c,this.f,this.y],z),3,0)
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
ao:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
dg:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.bL()
a3=1/a2
a4=-w
a5=-i
return V.ap((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.ap(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.K(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.aw(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.F()},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b3(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
t:function(a){return this.df(a,3,0)},
F:function(){return this.df("",3,0)},
n:{
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bL:function(){return V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dL:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.D(c)))
y=b.aL(z)
x=y.v(0,Math.sqrt(y.D(y)))
w=z.aL(x)
v=new V.K(a.a,a.b,a.c)
return V.ap(x.a,w.a,z.a,x.H(0).D(v),x.b,w.b,z.b,w.H(0).D(v),x.c,w.c,z.c,z.H(0).D(v),0,0,0,1)}}},
R:{"^":"a;a,b",
E:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
aw:{"^":"a;a,b,c",
E:function(a,b){return new V.aw(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
dQ:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dU:{"^":"a;a,b,c,d",
gZ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
n:{
dV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)}}},
O:{"^":"a;a,b",
fN:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,18],
D:function(a){var z,y,x,w
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
return new V.O(z*b,y*b)},
v:function(a,b){var z,y
if($.l.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.O(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
fN:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,18],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aL:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){if($.l.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
dh:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fq:{"^":"dg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bp:function(a){var z=V.kP(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.u(a)},
sce:function(a,b){},
sc7:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bp(z)}z=new D.H("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sc9:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bp(z)}z=new D.H("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sY:function(a,b){var z,y
b=this.bp(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sc8:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbU:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ad:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
n:{
cq:function(){var z=new U.fq()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},di:{"^":"a6;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
aG:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.di))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")},
n:{
dj:function(a){var z=new U.di()
z.a=a
return z}}},dw:{"^":"au;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$iso")
z=this.e
if(!(z==null))z.u(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
hw:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geh",8,0,19],
hQ:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geE",8,0,19],
aG:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a3()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aG(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bL():x
z=this.e
if(!(z==null))z.al(0)}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a6]},
$asau:function(){return[U.a6]},
$isa6:1},a6:{"^":"dg;"},iy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
I:[function(a){var z
H.k(a,"$iso")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcU()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdi()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbj()
z.toString
y=H.b(this.gbB(),y)
C.a.h(z.a,y)
return!0},
ed:[function(a){H.k(a,"$iso")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$iso"),"$isbi")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.O(y.a,y.b).l(0,2).v(0,z.gZ())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sK(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.O(x.a,x.b).l(0,2).v(0,z.gZ())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
this.b.sK(0)
y=y.E(0,a.z)
this.Q=new V.O(y.a,y.b).l(0,2).v(0,z.gZ())}this.a4()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.k(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sK(y*10*x)
this.a4()}},"$1","gbB",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a3()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ap(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},iz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
I:[function(a){var z
H.k(a,"$iso")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcU()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdi()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbj()
z.toString
x=H.b(this.gbB(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.F()
x.f=z}x=H.b(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.F()
x.b=z}x=H.b(this.gf_(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geZ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.F()
x.c=z}y=H.b(this.geY(),y)
C.a.h(z.a,y)
return!0},
aa:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.O(z,y)},
ed:[function(a){a=H.e(H.k(a,"$iso"),"$isbi")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$iso"),"$isbi")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.aa(new V.O(y.a,y.b).l(0,2).v(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.aa(new V.O(x.a,x.b).l(0,2).v(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).l(0,2).v(0,z.gZ()))}this.a4()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.k(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.a4()}},"$1","gbB",4,0,1],
ht:[function(a){if(H.e(H.k(a,"$iso"),"$isdH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,1],
hu:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$iso"),"$isbi")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.aa(new V.O(x.a,x.b).l(0,2).v(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).l(0,2).v(0,z.gZ()))
this.a4()},"$1","geb",4,0,1],
hY:[function(a){H.k(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf_",4,0,1],
hX:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$iso"),"$isea")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.aa(new V.O(y.a,y.b).l(0,2).v(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.aa(new V.O(x.a,x.b).l(0,2).v(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).l(0,2).v(0,z.gZ()))}this.a4()},"$1","geZ",4,0,1],
hW:[function(a){var z,y,x
H.k(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.a4()}},"$1","geY",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a3()
if(z<y){this.dy=y
x=b.y
this.c.ad(0,x)
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ap(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ap(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa6:1},iA:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.u(a)},
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=H.b(this.geg(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hv:[function(a){var z,y,x,w
H.k(a,"$iso")
if(!J.Q(this.b,this.a.b.c))return
H.e(a,"$iscB")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","geg",4,0,1],
aG:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ap(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",fE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ao:[function(a){var z
H.k(a,"$iso")
z=this.x
if(!(z==null))z.u(a)},function(){return this.ao(null)},"hp","$1","$0","ga9",0,2,0],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.aQ()
s.a=H.c([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","gem",8,0,7],
hC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.aQ()
s.a=H.c([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.b(x,w)
C.a.T(s.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","gen",8,0,7],
sds:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.ga9(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.ga9(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cH])
z.b=!0
this.ao(z)}},
gq:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dq(this.c)
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
if(typeof x!=="number")return H.p(x)
u=C.i.a7(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.i.a7(v.b*w)
s=C.i.a7(v.c*x)
a.c=s
v=C.i.a7(v.d*w)
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
n=V.ap(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dn(n)
y=$.dP
if(y==null){y=V.dL(new V.aw(0,0,0),new V.K(0,1,0),new V.K(0,0,-1))
$.dP=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.dn(m)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ad(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.B();)z.d.aE(a)
this.a.toString
a.cy.cb()
a.db.cb()
this.b.toString
a.dm()},
$islx:1}}],["","",,A,{"^":"",d8:{"^":"a;a,b,c"},fg:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fE:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h9:{"^":"dW;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aA,0aj,0aB,0b4,0cV,0cW,0b5,0b6,0cX,0cY,0b7,0b8,0cZ,0d_,0b9,0d0,0d1,0ba,0d2,0d3,0bb,0bc,0bd,0d4,0d5,0be,0bf,0d6,0d7,0bg,0d8,0bX,0d9,0bY,0da,0bZ,0dc,0c_,0dd,0c0,0de,0c1,a,b,0c,0d,0e,0f,0r",
dJ:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
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
a2.f2(z)
a2.f9(z)
a2.f3(z)
a2.fh(z)
a2.fi(z)
a2.fb(z)
a2.fm(z)
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
z=new P.bN("")
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
v.f6(z)
v.f1(z)
v.f4(z)
v.f7(z)
v.ff(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fd(z)
v.fe(z)}v.fa(z)
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
p=H.c([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f5(z)
v.fc(z)
v.fg(z)
v.fj(z)
v.fk(z)
v.fl(z)
v.f8(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.m])
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
n="vec4("+C.a.w(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cC(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cC(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eY(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(m)))}this.eT()
this.eV()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isax")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isax")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isax")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isax")
if(a2.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscM")
if(a2.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isax")
if(a2.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isax")
this.k3=H.c([],[A.ax])
y=a2.aA
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(k,"$isax"))}}y=a2.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isad")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.c:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isad")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.c:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.aA=H.e(this.r.m(0,"diffuseTxt"),"$isad")
this.aB=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.c:this.aj=H.e(this.r.m(0,"diffuseTxt"),"$isae")
this.aB=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.b4=H.e(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.cV=H.e(this.r.m(0,"invDiffuseTxt"),"$isad")
this.b5=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.c:this.cW=H.e(this.r.m(0,"invDiffuseTxt"),"$isae")
this.b5=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.b8=H.e(this.r.m(0,"shininess"),"$isS")
this.b6=H.e(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.cX=H.e(this.r.m(0,"specularTxt"),"$isad")
this.b7=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.c:this.cY=H.e(this.r.m(0,"specularTxt"),"$isae")
this.b7=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.d:this.cZ=H.e(this.r.m(0,"bumpTxt"),"$isad")
this.b9=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.c:this.d_=H.e(this.r.m(0,"bumpTxt"),"$isae")
this.b9=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.d0=H.e(this.r.m(0,"envSampler"),"$isae")
this.d1=H.e(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.ba=H.e(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.d2=H.e(this.r.m(0,"reflectTxt"),"$isad")
this.bb=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.c:this.d3=H.e(this.r.m(0,"reflectTxt"),"$isae")
this.bb=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.bc=H.e(this.r.m(0,"refraction"),"$isS")
this.bd=H.e(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.d:this.d4=H.e(this.r.m(0,"refractTxt"),"$isad")
this.be=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.c:this.d5=H.e(this.r.m(0,"refractTxt"),"$isae")
this.be=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.bf=H.e(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.e:break
case C.d:this.d6=H.e(this.r.m(0,"alphaTxt"),"$isad")
this.bg=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.c:this.d7=H.e(this.r.m(0,"alphaTxt"),"$isae")
this.bg=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bX=H.c([],[A.en])
this.bY=H.c([],[A.eo])
this.bZ=H.c([],[A.ep])
this.c_=H.c([],[A.eq])
this.c0=H.c([],[A.er])
this.c1=H.c([],[A.es])
if(a2.k2){y=a2.z
if(y>0){this.d8=H.k(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.bX;(x&&C.a).h(x,new A.en(l,k,j))}}y=a2.Q
if(y>0){this.d9=H.k(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.bY;(x&&C.a).h(x,new A.eo(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.da=H.k(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.bZ;(x&&C.a).h(x,new A.ep(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dc=H.k(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isad")
x=this.c_;(x&&C.a).h(x,new A.eq(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dd=H.k(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$iscM")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isae")
x=this.c0;(x&&C.a).h(x,new A.er(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.de=H.k(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isS")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isS")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a1,"$isad")
x=this.c1;(x&&C.a).h(x,new A.es(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
a_:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.dD(c)
b.a.uniform1i(b.d,0)}},
n:{
h8:function(a,b){var z,y
z=a.aj
y=new A.h9(b,z)
y.dM(b,z)
y.dJ(a,b)
return y}}},hc:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aA,aj,aB",
f2:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
f9:function(a){var z
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
f3:function(a){var z
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
fh:function(a){var z,y
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
fi:function(a){var z,y
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
fb:function(a){var z
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
fm:function(a){var z
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
ag:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cm(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f6:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ag(a,z,"emission")
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
f1:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ag(a,z,"ambient")
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
f4:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ag(a,z,"diffuse")
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
f7:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ag(a,z,"invDiffuse")
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
ff:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ag(a,z,"specular")
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
fa:function(a){var z,y
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
fd:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ag(a,z,"reflect")
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
fe:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ag(a,z,"refract")
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
f5:function(a){var z,y
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
fc:function(a){var z,y
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
fg:function(a){var z,y
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
fj:function(a){var z,y,x
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
fk:function(a){var z,y,x
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
fl:function(a){var z,y,x
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
f8:function(a){var z
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
i:function(a){return this.aj}},en:{"^":"a;a,b,c"},eq:{"^":"a;a,b,c,d,e,f,r,x"},eo:{"^":"a;a,b,c,d,e,f,r"},er:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z"},es:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dW:{"^":"cj;",
dM:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cC:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eT:function(){var z,y,x,w,v,u
z=H.c([],[A.d8])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d8(y,v.name,u))}this.f=new A.fg(z)},
eV:function(){var z,y,x,w,v,u
z=H.c([],[A.a2])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fz(v.type,v.size,v.name,u))}this.r=new A.iq(z)},
aq:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cL(z,y,b,a,c)},
e4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ad(z,y,b,c)
else return A.cL(z,y,b,a,c)},
e5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.cL(z,y,b,a,c)},
b2:function(a,b){return new P.eA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fz:function(a,b,c,d){switch(a){case 5120:return this.aq(b,c,d)
case 5121:return this.aq(b,c,d)
case 5122:return this.aq(b,c,d)
case 5123:return this.aq(b,c,d)
case 5124:return this.aq(b,c,d)
case 5125:return this.aq(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.ik(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.io(this.a,this.e,c,d)
case 35667:return new A.il(this.a,this.e,c,d)
case 35668:return new A.im(this.a,this.e,c,d)
case 35669:return new A.ip(this.a,this.e,c,d)
case 35674:return new A.is(this.a,this.e,c,d)
case 35675:return new A.cM(this.a,this.e,c,d)
case 35676:return new A.ax(this.a,this.e,c,d)
case 35678:return this.e4(b,c,d)
case 35680:return this.e5(b,c,d)
case 35670:throw H.f(this.b2("BOOL",c))
case 35671:throw H.f(this.b2("BOOL_VEC2",c))
case 35672:throw H.f(this.b2("BOOL_VEC3",c))
case 35673:throw H.f(this.b2("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},iq:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fG:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fG("\n")}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},il:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},im:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},ip:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ij:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cL:function(a,b,c,d,e){var z=new A.ij(a,b,c,e)
z.f=d
z.e=P.h0(d,0,!1,P.C)
return z}}},S:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ik:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},io:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},is:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cM:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.by(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ax:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.by(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ad:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ae:{"^":"a2;a,b,c,d",
dD:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
ca:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bx:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
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
z.d=y}l=F.ca(y)
k=F.ca(z.b)
j=F.kM(d,e,new F.k8(z,F.ca(z.c),F.ca(z.d),k,l,c),b)
if(j!=null)a.fS(j)},
kM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aX,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.dY()
y=H.c([],[F.aX])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cO(null,null,new V.bU(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bT(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cO(null,null,new V.bU(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bT(d))}}z.d.fn(a+1,b+1,y)
return z},
k8:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c5(z.b,b).c5(z.d.c5(z.c,b),c)
z=new V.aw(y.a,y.b,y.c)
if(!J.Q(a.f,z)){a.f=z
z=a.a
if(z!=null)z.X()}a.saF(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.dQ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.Q(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.X()}}},
aj:{"^":"a;0a,0b,0c,0d,0e",
gbW:function(){return this.a==null||this.b==null||this.c==null},
dZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dh())return
return v.v(0,Math.sqrt(v.D(v)))},
e1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.D(z)))
z=w.E(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aL(z.v(0,Math.sqrt(z.D(z))))
return z.v(0,Math.sqrt(z.D(z)))},
bR:function(){if(this.d!=null)return!0
var z=this.dZ()
if(z==null){z=this.e1()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dh())return
return v.v(0,Math.sqrt(v.D(v)))},
e0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.E(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u)
z=new V.aw(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).E(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.D(z)))
z=k.aL(m)
z=z.v(0,Math.sqrt(z.D(z))).aL(k)
m=z.v(0,Math.sqrt(z.D(z)))}return m},
bP:function(){if(this.e!=null)return!0
var z=this.dY()
if(z==null){z=this.e0()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z,y
if(this.gbW())return a+"disposed"
z=a+C.h.a1(J.a3(this.a.e),0)+", "+C.h.a1(J.a3(this.b.e),0)+", "+C.h.a1(J.a3(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.t("")},
n:{
bH:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
cy:{"^":"a;0a,0b",
gbW:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){if(this.gbW())return a+"disposed"
return a+C.h.a1(J.a3(this.a.e),0)+", "+C.h.a1(J.a3(this.b.e),0)},
F:function(){return this.t("")}},
cD:{"^":"a;0a",
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a1(J.a3(z.e),0)},
F:function(){return this.t("")}},
dX:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
fS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.R()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fw())}this.a.R()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cD()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cy()
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
if(!(t==null))t.u(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.R()
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
F.bH(p,o,l)}z=this.e
if(!(z==null))z.al(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.al(0)
return y},
fq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
v=b.gcl(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.db])
for(r=0,q=0;q<w;++q){p=b.fo(q)
o=p.gcl(p)
C.a.U(s,q,new Z.db(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fO(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.U(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dc(new Z.ey(34962,j),s,b)
i.b=H.c([],[Z.c_])
if(this.b.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c_(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c_(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.R()
C.a.h(h,g.e)}f=Z.cP(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c_(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.w(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.u(a)},
X:function(){return this.a6(null)},
n:{
dY:function(){var z,y
z=new F.dX()
y=new F.iD(z)
y.b=!1
y.c=H.c([],[F.aX])
z.a=y
y=new F.hS(z)
y.b=H.c([],[F.cD])
z.b=y
y=new F.hR(z)
y.b=H.c([],[F.cy])
z.c=y
y=new F.hQ(z)
y.b=H.c([],[F.aj])
z.d=y
z.e=null
return z}}},
hQ:{"^":"a;a,0b",
fn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.aX],"$asd")
z=H.c([],[F.aj])
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
C.a.h(z,F.bH(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bH(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bR())x=!1
return x},
bQ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bP())x=!1
return x},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}},
hR:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.t("")}},
hS:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}},
aX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bT:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cO(this.cx,x,u,z,y,w,v,a,t)},
fw:function(){return this.bT(null)},
saF:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
fO:function(a){var z,y
z=J.I(a)
if(z.p(a,$.$get$aB())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aA())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$az())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aC())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.p(a,$.$get$aD())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bt())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bu())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aZ()))return H.c([this.ch],[P.v])
else if(z.p(a,$.$get$ay())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
bR:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.J(0,new F.iK(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
bP:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.J(0,new F.iJ(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z,y,x
z=H.c([],[P.m])
C.a.h(z,C.h.a1(J.a3(this.e),0))
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
x=C.a.w(z,", ")
return a+"{"+x+"}"},
F:function(){return this.t("")},
n:{
cO:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aX()
y=new F.iI(z)
y.b=H.c([],[F.cD])
z.b=y
y=new F.iH(z)
x=[F.cy]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iE(z)
x=[F.aj]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$ev()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$az().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$ew().a)!==0?c:null
z.ch=(x&$.$get$aZ().a)!==0?i:0
z.cx=(x&$.$get$ay().a)!==0?a:null
return z}}},
iK:{"^":"u:8;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iJ:{"^":"u:8;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iD:{"^":"a;a,0b,0c",
R:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
gk:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bR()
return!0},
bQ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bP()
return!0},
fs:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
this.R()
z=H.c([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}},
iE:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.aj]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iF(this,b))
C.a.J(this.d,new F.iG(this,b))},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}},
iF:{"^":"u:8;a,b",
$1:function(a){H.k(a,"$isaj")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
iG:{"^":"u:8;a,b",
$1:function(a){var z
H.k(a,"$isaj")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
iH:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}},
iI:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.w(z,"\n")},
F:function(){return this.t("")}}}],["","",,O,{"^":"",h7:{"^":"cH;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
P:[function(a){var z
H.k(a,"$iso")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.P(null)},"dT","$1","$0","gaY",0,2,0],
eM:[function(a){H.k(a,"$iso")
this.a=null
this.P(a)},function(){return this.eM(null)},"hV","$1","$0","geL",0,2,0],
hy:[function(a,b){var z=V.ao
z=new D.c0(a,H.y(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.P(z)},"$2","gej",8,0,20],
hz:[function(a,b){var z=V.ao
z=new D.c1(a,H.y(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.P(z)},"$2","gek",8,0,20],
cz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.W(z.e.length+3,4)*4
x=C.f.W(z.f.length+3,4)*4
w=C.f.W(z.r.length+3,4)*4
v=C.f.W(z.x.length+3,4)*4
u=C.f.W(z.y.length+3,4)*4
t=C.f.W(z.z.length+3,4)*4
s=C.f.W(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aB()
if(c){z=$.$get$aA()
a6=new Z.aY(a6.a|z.a)}if(b){z=$.$get$az()
a6=new Z.aY(a6.a|z.a)}if(a){z=$.$get$aC()
a6=new Z.aY(a6.a|z.a)}if(a0){z=$.$get$aD()
a6=new Z.aY(a6.a|z.a)}if(a2){z=$.$get$ay()
a6=new Z.aY(a6.a|z.a)}return new A.hc(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.y(a,"$isd",[T.cI],"$asd")
if(b!=null)if(!C.a.aK(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
x=new V.K(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cd(x)}}},
h9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cz()
y=a.fr.j(0,z.aj)
if(y==null){y=A.h8(z,a.a)
x=y.b
if(x.length===0)H.r(P.q("May not cache a shader with no name."))
if(a.fr.cS(0,x))H.r(P.q('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.U(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aB
z=b.e
if(!(z instanceof Z.dc)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.av()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bQ()
t.a.bQ()
t=t.e
if(!(t==null))t.al(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fs()
s=s.e
if(!(s==null))s.al(0)}q=b.d.fq(new Z.iL(a.a),v)
q.aC($.$get$aB()).e=this.a.y.c
if(z)q.aC($.$get$aA()).e=this.a.Q.c
if(u)q.aC($.$get$az()).e=this.a.z.c
if(w.rx)q.aC($.$get$aC()).e=this.a.ch.c
if(t)q.aC($.$get$aD()).e=this.a.cx.c
if(w.x1)q.aC($.$get$ay()).e=this.a.cy.c
b.e=q}z=T.cI
p=H.c([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fE()
if(w.fx){u=this.a
t=a.dx
t=t.gN(t)
u=u.db
u.toString
u.a8(t.a2(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gN(t)
s=a.dx
s=t.l(0,s.gN(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a8(t.a2(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gh6()
s=a.dx
s=t.l(0,s.gN(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a8(t.a2(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a8(t.a2(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a8(t.a2(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a8(C.z.a2(t,!0))}if(w.aA>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.k(s,"$isao")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.by(H.y(s.a2(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.f.d)
u=this.a
t=this.f.d
u.a5(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.M(p,this.f.e)
u=this.a
t=this.f.e
u.a_(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.r.d)
u=this.a
t=this.r.d
u.a5(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.M(p,this.r.e)
u=this.a
t=this.r.e
u.a_(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.x.d)
u=this.a
t=this.x.d
u.a5(u.aA,u.aB,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.M(p,this.x.e)
u=this.a
t=this.x.e
u.a_(u.aj,u.aB,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.b4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.y.d)
u=this.a
t=this.y.d
u.a5(u.cV,u.b5,t)
t=this.a
u=this.y.f
t=t.b4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.M(p,this.y.e)
u=this.a
t=this.y.e
u.a_(u.cW,u.b5,t)
t=this.a
u=this.y.f
t=t.b4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b6
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b8
t.a.uniform1f(t.d,r)
break
case C.d:this.M(p,this.z.d)
u=this.a
t=this.z.d
u.a5(u.cX,u.b7,t)
t=this.a
u=this.z.f
t=t.b6
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b8
u.a.uniform1f(u.d,r)
break
case C.c:this.M(p,this.z.e)
u=this.a
t=this.z.e
u.a_(u.cY,u.b7,t)
t=this.a
u=this.z.f
t=t.b6
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b8
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d8
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bX
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.cd(i.a)
r=s.a
g=s.b
f=s.c
f=s.v(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d9
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bY
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gcf(s)
f=s.gcg(s)
s=s.gci(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aV(i.gaQ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gab(i)
f=h.d
g=s.gbi()
r=s.gaW()
s=s.gb3()
f.a.uniform3f(f.d,g,r,s)
s=i.gbJ()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbK()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbL()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.da
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bZ
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gcf(s)
f=s.gcg(s)
s=s.gci(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbV(i).i0()
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aV(i.gaQ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gab(i)
r=h.e
g=s.gbi()
f=s.gaW()
s=s.gb3()
r.a.uniform3f(r.d,g,f,s)
s=i.gi_()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghZ()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dc
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.c_
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaS()
H.y(p,"$isd",s,"$asd")
if(!C.a.aK(p,r)){r.sbw(p.length)
C.a.h(p,r)}r=i.gbV(i)
g=h.d
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=i.gbj()
e=h.b
f=r.gax(r)
g=r.gay(r)
r=r.gaz()
e.a.uniform3f(e.d,f,g,r)
r=i.gaR(i)
g=h.c
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=l.cd(i.gbV(i))
e=r.a
f=r.b
g=r.c
g=r.v(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gab(i)
f=h.f
e=g.gbi()
r=g.gaW()
g=g.gb3()
f.a.uniform3f(f.d,e,r,g)
g=i.gaS()
r=g.gbh(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gbh(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gfJ(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dd
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.c0
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaS()
H.y(p,"$isd",r,"$asd")
if(!C.a.aK(p,g)){g.sbw(p.length)
C.a.h(p,g)}d=l.l(0,i.gN(i))
g=i.gN(i).aV(new V.aw(0,0,0))
f=h.b
e=g.gcf(g)
c=g.gcg(g)
g=g.gci(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aV(new V.aw(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dg(0)
c=h.d
m=new Float32Array(H.by(H.y(new V.dK(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a2(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gab(i)
g=h.e
e=c.gbi()
f=c.gaW()
c=c.gb3()
g.a.uniform3f(g.d,e,f,c)
c=i.gaS()
g=c.gbh(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.ghs()
e=g.a
g=g.d
if(!(f>=6))e.uniform1i(g,0)
else e.uniform1i(g,c.gbw())
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbJ()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbK()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbL()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.de
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.c1
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaS()
H.y(p,"$isd",z,"$asd")
if(!C.a.aK(p,s)){s.sbw(p.length)
C.a.h(p,s)}s=i.gaQ(i)
r=h.b
g=s.gcf(s)
f=s.gcg(s)
s=s.gci(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbV(i)
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=i.gbj()
r=h.d
g=s.gax(s)
f=s.gay(s)
s=s.gaz()
r.a.uniform3f(r.d,g,f,s)
s=i.gaR(i)
f=h.e
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aV(i.gaQ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaS()
r=s.gbh(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gbh(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gfJ(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gab(i)
r=h.y
g=s.gbi()
f=s.gaW()
s=s.gb3()
r.a.uniform3f(r.d,g,f,s)
s=i.gi6()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gi7()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.d:this.M(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.cZ,z.b9,u)
break
case C.c:this.M(p,this.Q.e)
z=this.a
u=this.Q.e
z.a_(z.d_,z.b9,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gN(u).dg(0)
a.Q=u}z=z.fy
z.toString
z.a8(u.a2(0,!0))}if(w.dy){this.M(p,this.ch)
z=this.a
u=this.ch
z.a_(z.d0,z.d1,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.ba
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.d:this.M(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.d2,z.bb,u)
u=this.a
z=this.cx.f
u=u.ba
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.c:this.M(p,this.cx.e)
z=this.a
u=this.cx.e
z.a_(z.d3,z.bb,u)
u=this.a
z=this.cx.f
u=u.ba
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.bd
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bc
u.a.uniform1f(u.d,s)
break
case C.d:this.M(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.d4,z.be,u)
u=this.a
z=this.cy.f
u=u.bd
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bc
z.a.uniform1f(z.d,s)
break
case C.c:this.M(p,this.cy.e)
z=this.a
u=this.cy.e
z.a_(z.d5,z.be,u)
u=this.a
z=this.cy.f
u=u.bd
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bc
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bf
z.a.uniform1f(z.d,t)
break
case C.d:this.M(p,this.db.d)
z=this.a
t=this.db.d
z.a5(z.d6,z.bg,t)
t=this.a
z=this.db.f
t=t.bf
t.a.uniform1f(t.d,z)
break
case C.c:this.M(p,this.db.e)
z=this.a
t=this.db.e
z.a_(z.d7,z.bg,t)
t=this.a
z=this.db.f
t=t.bf
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d>=6){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,z.b)}}z=b.e
z.bM(a)
z.aE(a)
z.hn(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fC()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cz().aj}},ha:{"^":"cz;0f,a,b,0c,0d,0e",
eP:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.co()
this.eP(1)}},cz:{"^":"a;",
P:[function(a){this.a.P(H.k(a,"$iso"))},function(){return this.P(null)},"dT","$1","$0","gaY",0,2,0],
at:["co",function(){}],
eR:function(a){},
eS:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gaY(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gaY(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.H(this.b+".textureCube",x,this.e,this,[T.e4])
z.b=!0
this.a.P(z)}},
saF:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.at()
this.c=C.c
this.eR(null)
z=this.a
z.a=null
z.P(null)}this.eS(a)}},hb:{"^":"cz;a,b,0c,0d,0e"},aT:{"^":"cz;0f,a,b,0c,0d,0e",
cI:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.P(y)}},
at:["bn",function(){this.co()
this.cI(new V.Z(1,1,1))}],
sab:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.at()
z=this.a
z.a=null
z.P(null)}this.cI(b)}},hd:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
eQ:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.bn()
this.eQ(1)}},he:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.bn()
this.bG(100)}},cH:{"^":"a;"}}],["","",,T,{"^":"",cI:{"^":"cj;"},e4:{"^":"cI;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z}},i5:{"^":"a;a,0b,0c,0d,0e",
fQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.e4()
r.a=0
r.b=s
r.c=!1
r.d=0
this.ar(r,s,z,34069,!1,!1)
this.ar(r,s,w,34070,!1,!1)
this.ar(r,s,y,34071,!1,!1)
this.ar(r,s,v,34072,!1,!1)
this.ar(r,s,x,34073,!1,!1)
this.ar(r,s,u,34074,!1,!1)
return r},
c6:function(a){return this.fQ(a,".png",!1,"")},
ar:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a4
W.U(z,"load",H.b(new T.i6(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eN:function(a,b,c){var z,y,x,w
b=V.d4(b,2)
z=V.d4(a.width,2)
y=V.d4(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cn(null,null)
x.width=z
x.height=y
w=H.k(C.k.dz(x,"2d"),"$isdf")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ko(w.getImageData(0,0,x.width,x.height))}}},i6:{"^":"u:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eN(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hg(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.fD()}++z.e}}}],["","",,V,{"^":"",fe:{"^":"a;",
aM:function(a,b){return!0},
i:function(a){return"all"},
$isbK:1},bK:{"^":"a;"},dJ:{"^":"a;",
aM:["dH",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aM(0,b))return!0
return!1}],
i:["cn",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbK:1},bj:{"^":"dJ;0a",
aM:function(a,b){return!this.dH(0,b)},
i:function(a){return"!["+this.cn(0)+"]"}},hO:{"^":"a;0a",
dL:function(a){var z,y
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
z=new H.aS(0,0,[P.C,P.a9])
for(y=new H.dG(a,a.gk(a),0,[H.aG(a,"t",0)]);y.B();)z.U(0,y.d,!0)
this.a=z},
aM:function(a,b){return this.a.cS(0,b)},
i:function(a){var z=this.a
return P.cG(new H.dF(z,[H.z(z,0)]),0,null)},
$isbK:1,
n:{
a0:function(a){var z=new V.hO()
z.dL(a)
return z}}},e_:{"^":"a;a,b,0c,0d",
gfT:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eb(this.a.G(0,b))
w.a=H.c([],[V.bK])
w.c=!1
C.a.h(this.c,w)
return w},
fF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aM(0,a))return w}return},
i:function(a){return this.b}},e8:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f8(this.b,"\n","\\n")
y=H.f8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e9:{"^":"a;a,b,0c",
i:function(a){return this.b}},ie:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e_(this,b)
z.c=H.c([],[V.eb])
this.a.U(0,b,z)}return z},
aT:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e9(this,a)
y=P.m
z.c=new H.aS(0,0,[y,y])
this.b.U(0,a,z)}return z},
hm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.e8])
y=this.c
x=[P.C]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aZ(a,t)
r=y.fF(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cG(w,0,null)
throw H.f(P.q("Untokenizable string [state: "+y.gfT(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cG(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e8(o==null?p.b:o,q,t)}++t}}}},eb:{"^":"dJ;b,0c,0a",
i:function(a){return this.b.b+": "+this.cn(0)}}}],["","",,X,{"^":"",de:{"^":"a;",$isav:1},fL:{"^":"e2;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z}},hp:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
aH:[function(a){var z
H.k(a,"$iso")
z=this.f
if(!(z==null))z.u(a)},function(){return this.aH(null)},"hq","$1","$0","gcq",0,2,0],
saN:function(a){var z,y,x
if(!J.Q(this.b,a)){z=this.b
if(z!=null){z=z.gq()
z.toString
y=H.b(this.gcq(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gcq(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.b,this,[U.a6])
z.b=!0
this.aH(z)}},
$isav:1,
$isde:1},e2:{"^":"a;"}}],["","",,V,{"^":"",
kK:function(a){P.id(C.w,new V.kL(a))},
kL:{"^":"u:36;a",
$1:function(a){H.k(a,"$isaV")
P.d5(C.i.du(this.a.gfH(),2)+" fps")}},
hT:{"^":"a;0a,0b",
dN:function(a,b){var z,y,x,w,v,u,t
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
t=W.a4
W.U(z,"scroll",H.b(new V.hW(x),{func:1,ret:-1,args:[t]}),!1,t)},
cO:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isd",[P.m],"$asd")
this.eU()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hm(C.a.fM(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.f7(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jW(C.H,s,C.q,!1)
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
eU:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ie()
y=P.m
z.a=new H.aS(0,0,[y,V.e_])
z.b=new H.aS(0,0,[y,V.e9])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.a0(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bj()
w=[V.bK]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Y("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").w(0,"BoldEnd")
x=V.a0(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Italic")
x=V.a0(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").w(0,"Italic")
x=new V.bj()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Y("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").w(0,"ItalicEnd")
x=V.a0(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Code")
x=V.a0(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").w(0,"Code")
x=new V.bj()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Y("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").w(0,"CodeEnd")
x=V.a0(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"LinkHead")
x=V.a0(new H.Y("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").w(0,"LinkTail")
x=V.a0(new H.Y("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").w(0,"LinkEnd")
y=V.a0(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").w(0,"LinkHead")
y=new V.bj()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Y("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a0(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bj()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Y("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fe())
x=z.G(0,"Other").w(0,"Other")
y=new V.bj()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Y("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aT("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aT("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aT("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aT("Link")
x=z.G(0,"Other")
x.d=x.a.aT("Other")
this.b=z},
n:{
hU:function(a,b){var z=new V.hT()
z.dN(a,!0)
return z}}},
hW:{"^":"u:21;a",
$1:function(a){P.e6(C.l,new V.hV(this.a))}},
hV:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.i.a7(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Z,{"^":"",
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.hU("Test 012",!0)
y=W.cn(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.cO(H.c(["A test of the Material Lighting shader with cube textures and ","a directional light with a cube texture bump map."],x))
z.cO(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
v=E.ib(w,!0,!0,!0,!1)
u=new E.aH()
u.a=""
u.b=!0
z=E.aH
x=O.cp(z)
u.y=x
x.aX(u.gfU(),u.gfW())
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
u.sck(0,null)
u.saN(null)
t=F.dY()
F.bx(t,null,null,1,1,1,0,0,1)
F.bx(t,null,null,1,1,0,1,0,3)
F.bx(t,null,null,1,1,0,0,1,2)
F.bx(t,null,null,1,1,-1,0,0,0)
F.bx(t,null,null,1,1,0,-1,0,0)
F.bx(t,null,null,1,1,0,0,-1,3)
t.av()
u.sck(0,t)
x=new U.dw()
s=U.a6
x.bo(s)
x.aX(x.geh(),x.geE())
x.e=null
x.f=V.bL()
x.r=0
r=v.r
q=new U.iz()
p=U.cq()
p.sce(0,!0)
p.sc7(6.283185307179586)
p.sc9(0)
p.sY(0,0)
p.sc8(100)
p.sK(0)
p.sbU(0.5)
q.b=p
p=p.gq()
p.toString
o={func:1,ret:-1,args:[D.o]}
n=H.b(q.gas(),o)
C.a.h(p.a,n)
p=U.cq()
p.sce(0,!0)
p.sc7(6.283185307179586)
p.sc9(0)
p.sY(0,0)
p.sc8(100)
p.sK(0)
p.sbU(0.5)
q.c=p
C.a.h(p.gq().a,n)
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
m=new X.aq(!1,!1,!1)
l=q.d
q.d=m
p=[X.aq]
n=new D.H("modifiers",l,m,q,p)
n.b=!0
q.I(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.H("invertX",n,!1,q,[P.a9])
n.b=!0
q.I(n)}n=q.r
if(n!==!0){q.r=!0
n=new D.H("invertY",n,!0,q,[P.a9])
n.b=!0
q.I(n)}q.aJ(r)
x.h(0,q)
r=v.r
q=new U.iy()
n=U.cq()
n.sce(0,!0)
n.sc7(6.283185307179586)
n.sc9(0)
n.sY(0,0)
n.sc8(100)
n.sK(0)
n.sbU(0.2)
q.b=n
n=n.gq()
n.toString
k=H.b(q.gas(),o)
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
m=new X.aq(!0,!1,!1)
l=q.c
q.c=m
n=new D.H("modifiers",l,m,q,p)
n.b=!0
q.I(n)
q.aJ(r)
x.h(0,q)
r=v.r
q=new U.iA()
q.c=0.01
q.d=0
q.e=0
m=new X.aq(!1,!1,!1)
q.b=m
p=new D.H("modifiers",null,m,q,p)
p.b=!0
q.I(p)
q.aJ(r)
x.h(0,q)
u.saN(x)
j=v.f.c6("../resources/diceColor")
i=new O.h7()
x=O.cp(V.ao)
i.e=x
x.aX(i.gej(),i.gek())
x=new O.aT(i,"emission")
x.c=C.b
x.f=new V.Z(0,0,0)
i.f=x
x=new O.aT(i,"ambient")
x.c=C.b
x.f=new V.Z(0,0,0)
i.r=x
x=new O.aT(i,"diffuse")
x.c=C.b
x.f=new V.Z(0,0,0)
i.x=x
x=new O.aT(i,"invDiffuse")
x.c=C.b
x.f=new V.Z(0,0,0)
i.y=x
x=new O.he(i,"specular")
x.c=C.b
x.f=new V.Z(0,0,0)
x.ch=100
i.z=x
x=new O.hb(i,"bump")
x.c=C.b
i.Q=x
i.ch=null
x=new O.aT(i,"reflect")
x.c=C.b
x.f=new V.Z(0,0,0)
i.cx=x
x=new O.hd(i,"refract")
x.c=C.b
x.f=new V.Z(0,0,0)
x.ch=1
i.cy=x
x=new O.ha(i,"alpha")
x.c=C.b
x.f=1
i.db=x
x=new D.fV()
x.bo(D.T)
x.e=H.c([],[D.bW])
x.f=H.c([],[D.hr])
x.r=H.c([],[D.hX])
x.x=H.c([],[D.i7])
x.y=H.c([],[D.i8])
x.z=H.c([],[D.i9])
x.Q=null
x.ch=null
x.cj(x.gei(),x.geD(),x.geF())
i.dx=x
r=x.Q
if(r==null){r=D.F()
x.Q=r
x=r}else x=r
r=H.b(i.geL(),o)
C.a.h(x.a,r)
r=i.dx
x=r.ch
if(x==null){x=D.F()
r.ch=x}r=H.b(i.gaY(),o)
C.a.h(x.a,r)
i.dy=null
r=i.dx
x=U.dj(V.dL(new V.aw(0,0,0),new V.K(0,1,0),new V.K(1,1,-3)))
h=new V.Z(1,1,1)
q=new D.bW()
q.c=new V.Z(1,1,1)
q.a=new V.K(0,0,1)
l=q.b
q.b=x
x=x.gq()
x.toString
p=H.b(q.gdS(),o)
C.a.h(x.a,p)
x=new D.H("mover",l,q.b,q,[s])
x.b=!0
q.an(x)
if(!q.c.p(0,h)){l=q.c
q.c=h
x=new D.H("color",l,h,q,[V.Z])
x.b=!0
q.an(x)}r.h(0,q)
x=i.r
x.sab(0,new V.Z(0.2,0.2,0.2))
x=i.x
x.sab(0,new V.Z(0.8,0.8,0.8))
x=i.z
x.sab(0,new V.Z(0.7,0.7,0.7))
i.r.saF(j)
i.x.saF(j)
i.z.saF(v.f.c6("../resources/diceSpecular"))
x=i.z
if(x.c===C.b){x.c=C.e
x.bn()
x.bG(100)
s=x.a
s.a=null
s.P(null)}x.bG(10)
i.Q.saF(v.f.c6("../resources/diceBumpMap"))
x=new M.fE()
z=O.cp(z)
x.d=z
z.aX(x.gem(),x.gen())
x.e=null
x.f=null
x.r=null
x.x=null
g=new X.hp()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saN(null)
z=g.c
if(!$.l.$2(z,1.0471975511965976)){l=g.c
g.c=1.0471975511965976
z=new D.H("fov",l,1.0471975511965976,g,[P.v])
z.b=!0
g.aH(z)}z=g.d
if(!$.l.$2(z,0.1)){l=g.d
g.d=0.1
z=new D.H("near",l,0.1,g,[P.v])
z.b=!0
g.aH(z)}z=g.e
if(!$.l.$2(z,2000)){l=g.e
g.e=2000
z=new D.H("far",l,2000,g,[P.v])
z.b=!0
g.aH(z)}z=x.a
if(z!==g){if(z!=null){z=z.gq()
z.toString
s=H.b(x.ga9(),o)
C.a.T(z.a,s)}l=x.a
x.a=g
z=g.gq()
z.toString
s=H.b(x.ga9(),o)
C.a.h(z.a,s)
z=new D.H("camera",l,x.a,x,[X.de])
z.b=!0
x.ao(z)}f=new X.fL()
z=new V.bU(0,0,0,1)
f.a=z
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
z=V.dV(0,0,1,1)
f.r=z
z=x.b
if(z!==f){if(z!=null){z=z.gq()
z.toString
s=H.b(x.ga9(),o)
C.a.T(z.a,s)}l=x.b
x.b=f
z=f.gq()
z.toString
s=H.b(x.ga9(),o)
C.a.h(z.a,s)
z=new D.H("target",l,x.b,x,[X.e2])
z.b=!0
x.ao(z)}x.sds(null)
x.sds(i)
x.d.h(0,u)
x.a.saN(U.dj(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=v.d
if(z!==x){if(z!=null){z=z.gq()
z.toString
s=H.b(v.gcp(),o)
C.a.T(z.a,s)}v.d=x
z=x.gq()
z.toString
o=H.b(v.gcp(),o)
C.a.h(z.a,o)
v.dQ()}V.kK(v)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dA.prototype
return J.dz.prototype}if(typeof a=="string")return J.cu.prototype
if(a==null)return J.dB.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.bQ=function(a){if(typeof a=="string")return J.cu.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.d_=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.ks=function(a){if(typeof a=="number")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cN.prototype
return a}
J.ce=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).p(a,b)}
J.fa=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ks(a).a3(a,b)}
J.fb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bQ(a).j(a,b)}
J.fc=function(a,b,c,d){return J.ce(a).cN(a,b,c,d)}
J.ci=function(a,b,c){return J.bQ(a).ft(a,b,c)}
J.d6=function(a,b){return J.d_(a).A(a,b)}
J.fd=function(a,b){return J.d_(a).J(a,b)}
J.aP=function(a){return J.I(a).gO(a)}
J.bF=function(a){return J.d_(a).gS(a)}
J.b6=function(a){return J.bQ(a).gk(a)}
J.a3=function(a){return J.I(a).i(a)}
I.d2=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cm.prototype
C.x=J.n.prototype
C.a=J.aR.prototype
C.y=J.dz.prototype
C.f=J.dA.prototype
C.z=J.dB.prototype
C.i=J.c2.prototype
C.h=J.cu.prototype
C.G=J.bI.prototype
C.I=H.hl.prototype
C.J=W.hm.prototype
C.p=J.hq.prototype
C.K=P.cE.prototype
C.m=J.cN.prototype
C.r=W.bv.prototype
C.t=W.iO.prototype
C.u=new P.ho()
C.v=new P.iC()
C.j=new P.jA()
C.b=new A.bV(0,"ColorSourceType.None")
C.e=new A.bV(1,"ColorSourceType.Solid")
C.d=new A.bV(2,"ColorSourceType.Texture2D")
C.c=new A.bV(3,"ColorSourceType.TextureCube")
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
C.H=H.c(I.d2([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iB(!1)
$.an=0
$.b7=null
$.d9=null
$.cT=!1
$.f0=null
$.eV=null
$.f6=null
$.cd=null
$.cg=null
$.d0=null
$.b0=null
$.bz=null
$.bA=null
$.cU=!1
$.N=C.j
$.ds=null
$.dr=null
$.dq=null
$.dp=null
$.l=V.hf()
$.dP=null
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
I.$lazy(y,x,w)}})(["dn","$get$dn",function(){return H.f_("_$dart_dartClosure")},"cv","$get$cv",function(){return H.f_("_$dart_js")},"ec","$get$ec",function(){return H.ar(H.c7({
toString:function(){return"$receiver$"}}))},"ed","$get$ed",function(){return H.ar(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"ee","$get$ee",function(){return H.ar(H.c7(null))},"ef","$get$ef",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.ar(H.c7(void 0))},"ek","$get$ek",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.ar(H.ei(null))},"eg","$get$eg",function(){return H.ar(function(){try{null.$method$}catch(z){return z.message}}())},"em","$get$em",function(){return H.ar(H.ei(void 0))},"el","$get$el",function(){return H.ar(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cQ","$get$cQ",function(){return P.iP()},"bB","$get$bB",function(){return[]},"eP","$get$eP",function(){return P.hE("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dl","$get$dl",function(){return{}},"ex","$get$ex",function(){return Z.ag(0)},"ev","$get$ev",function(){return Z.ag(511)},"aB","$get$aB",function(){return Z.ag(1)},"aA","$get$aA",function(){return Z.ag(2)},"az","$get$az",function(){return Z.ag(4)},"aC","$get$aC",function(){return Z.ag(8)},"aD","$get$aD",function(){return Z.ag(16)},"bt","$get$bt",function(){return Z.ag(32)},"bu","$get$bu",function(){return Z.ag(64)},"ew","$get$ew",function(){return Z.ag(96)},"aZ","$get$aZ",function(){return Z.ag(128)},"ay","$get$ay",function(){return Z.ag(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.C,[P.h,E.aH]]},{func:1,ret:P.G,args:[F.aj]},{func:1,ret:P.G,args:[D.o]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.m,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.C,[P.h,D.T]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.C,[P.h,U.a6]]},{func:1,ret:-1,args:[P.C,[P.h,V.ao]]},{func:1,ret:P.G,args:[W.a4]},{func:1,args:[P.m]},{func:1,ret:-1,args:[P.a],opt:[P.al]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.a9,args:[W.J]},{func:1,ret:W.a_,args:[W.J]},{func:1,ret:P.G,args:[P.V]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.a9,args:[P.v,P.v]},{func:1,ret:P.a9,args:[[P.h,D.T]]},{func:1,args:[,P.m]},{func:1,ret:P.G,args:[F.aX,P.v,P.v]},{func:1,ret:P.G,args:[P.aV]},{func:1,ret:-1,args:[W.bv]}]
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
if(x==y)H.kN(d||a)
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
Isolate.d2=a.d2
Isolate.cY=a.cY
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.f3,[])
else Z.f3([])})})()
//# sourceMappingURL=test.dart.js.map
